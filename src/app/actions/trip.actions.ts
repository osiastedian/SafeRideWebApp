import { Action } from '@ngrx/store';
import { Trip } from '../interfaces/trip';

export enum TripActionTypes {
  LoadTrips = '[Trip] Load Trips',
  UpdateTrip = '[Trip] Update Trip',
  GetSelectedTrip = '[Trip] GetSelectedTrip',
  SetSelectedTrip = '[Trip] SetSelectedTrip'
}

export class LoadTrips implements Action {
  readonly type = TripActionTypes.LoadTrips;
  constructor(readonly payload: Trip[]) {}
}

export class UpdateTrip implements Action  {
  readonly type = TripActionTypes.UpdateTrip;
  constructor(readonly payload: Trip) {}
}

export class GetSelectedTrip implements Action {
  readonly type = TripActionTypes.GetSelectedTrip;
}

export class SetSelectedTrip implements Action {
  readonly type = TripActionTypes.SetSelectedTrip;
  constructor(readonly payload: {trip: Trip}) {}
}

export type TripActions = LoadTrips | UpdateTrip | GetSelectedTrip | SetSelectedTrip;
