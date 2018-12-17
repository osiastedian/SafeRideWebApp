import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Trip, Location } from './interfaces/trip';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TripState } from './reducers/trip.reducer';
import { map } from 'rxjs/operators';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  lat = 10.3290956;
  lng = 123.9062649;
  apiKey = environment.googleMaps;
  displayedColumns = [
    'position',
    'Lattitude',
    'Longitude',
    'Provider',
    'Speed_ms',
    'Speed_kmh',
    'Time'
  ];

  selectedTrip: Observable<Trip> = null;
  tripDataSource = new MatTableDataSource<Location>();


  @ViewChild(MatPaginator)
  tripPaginator: MatPaginator;

  constructor(private store: Store<{ trip: TripState }>) {}

  ngOnInit(): void {
    this.selectedTrip = this.store.pipe(
      select('trip'),
      map((tripState: TripState) => tripState.selectedTrip)
    );
    this.tripDataSource = new MatTableDataSource<Location>();
    this.tripDataSource.paginator = this.tripPaginator;
    this.selectedTrip.subscribe(data => {
      if (!data) { return; }
      this.tripDataSource.data = data.locations;
    });
  }

  onChangeTrip(trip: Trip) {}
}
