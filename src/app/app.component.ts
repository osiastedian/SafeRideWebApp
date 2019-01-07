import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Trip, Location } from './interfaces/trip';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TripState } from './reducers/trip.reducer';
import { map } from 'rxjs/operators';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { RoadsApiService } from './api/roads-api.service';
import { Geometry } from './interfaces/roads-api-results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  lat = 10.3290956;
  lng = 123.9062649;
  avg_speed = 0;
  max_speed = 0;
  apiKey = environment.googleMaps;
  displayedColumns = [
    'position',
    'Lattitude',
    'Longitude',
    'Provider',
    'Speed_ms',
    'Speed_kmh',
    'Time',
    'Bearing',
    'Actions'
  ];

  selectedNearbySearch: Location;
  searchRadius = 500;
  searchPlacesResults: Geometry[] = [];

  selectedTrip: Observable<Trip> = null;
  tripDataSource = new MatTableDataSource<Location>();
  currentTrip: Trip;

  @ViewChild(MatPaginator)
  tripPaginator: MatPaginator;

  constructor(
    private store: Store<{ trip: TripState }>,
    private roadsApi: RoadsApiService
  ) {}

  ngOnInit(): void {
    this.selectedTrip = this.store.pipe(
      select('trip'),
      map((tripState: TripState) => tripState.selectedTrip)
    );
    this.tripDataSource = new MatTableDataSource<Location>();
    this.tripDataSource.paginator = this.tripPaginator;
    this.selectedTrip.subscribe(data => {
      if (!data) {
        return;
      }
      this.tripDataSource.data = data.locations;
      this.currentTrip = data;
      this.tripDataSource.data = this.tripDataSource.data.filter(
        loc => loc.bearing > 0
      );
      this.avg_speed = 0;
      this.max_speed = 0;
      const validLocs = this.tripDataSource.data.filter(loc => loc.speed !== 0);
      validLocs.forEach(loc => (this.avg_speed += loc.speed));
      validLocs.forEach(
        loc =>
          (this.max_speed =
            loc.speed > this.max_speed ? loc.speed : this.max_speed)
      );
      this.avg_speed /= validLocs.length;
    });
  }

  onChangeTrip(trip: Trip) {}

  onGetNearbyPlace(location: Location) {
    this.selectedNearbySearch = location;
    this.roadsApi.getNearbyPlaces(location).subscribe(data => {
      this.searchPlacesResults = data.results.map(result => result.geometry);
    });
  }

  generateCSV() {
    if (!this.currentTrip) { return; }
    let data: any[] = [];
    data = this.currentTrip.locations
    .filter(location => location.provider === 'gps')
    .map(location => {
      return {
        delay: 1,
        latitude: location.latitude,
        longitude: location.longitude,
        elevation:  location.altitude,
        name: location.time
      };
    });
    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    const csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');

    const a = document.createElement('a');
    const blob = new Blob([csvArray], {type: 'text/csv' }),
    url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = `${this.currentTrip.id}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}
