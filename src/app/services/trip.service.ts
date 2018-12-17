import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { Trip } from '../interfaces/trip';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(
    private db: AngularFireDatabase
  ) {}

   getTrips() {
    return this.db.list('trips').valueChanges();
  }
}
