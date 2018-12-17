import { Action } from '@ngrx/store';
import { Trip } from '../interfaces/trip';

export enum TripActionTypes {
  LoadTrips = '[Trip] Load Trips',
  UpdateTrip = '[Trip] Update Trip'
}

export class LoadTrips implements Action {
  readonly type = TripActionTypes.LoadTrips;
  constructor(readonly payload: Trip[]) {}
}

export class UpdateTrip implements Action  {
  readonly type = TripActionTypes.UpdateTrip;
  constructor(readonly payload: Trip) {}
}

export type TripActions = LoadTrips | UpdateTrip;
