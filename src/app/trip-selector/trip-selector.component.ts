import { Component, OnInit } from '@angular/core';
import { Trip } from '../interfaces/trip';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-trip-selector',
  templateUrl: './trip-selector.component.html',
  styleUrls: ['./trip-selector.component.css']
})
export class TripSelectorComponent implements OnInit {

  trips$: Observable<Trip[]>;

  constructor(
    private store: Store<{trip}>
  ) { }

  ngOnInit() {
    this.store.pipe(
      select('trip')
    );
  }

}
