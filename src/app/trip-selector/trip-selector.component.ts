import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Trip } from '../interfaces/trip';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TripService } from '../services/trip.service';
import { SetSelectedTrip } from '../actions/trip.actions';

@Component({
  selector: 'app-trip-selector',
  templateUrl: './trip-selector.component.html',
  styleUrls: ['./trip-selector.component.css']
})
export class TripSelectorComponent implements OnInit {
  trips$: Observable<Trip[]>;
  selectedTrip: Trip = null;

  @Output()
  change = new EventEmitter<Trip>();

  constructor(
    private store: Store<{ trip }>,
    private tripService: TripService
  ) {}

  ngOnInit() {
    this.trips$ = <Observable<Trip[]>>this.tripService.getTrips();
  }

  onChange() {
    this.store.dispatch(new SetSelectedTrip({ trip: this.selectedTrip }));
  }
}
