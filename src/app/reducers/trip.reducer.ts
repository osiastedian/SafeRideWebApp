import { TripActionTypes, TripActions } from '../actions/trip.actions';
import { Trip } from '../interfaces/trip';

export interface TripState {
  allTrips: Trip[];
  selectedTrip: Trip;
}

export const initialState: TripState = null;

export function reducer(state = initialState, action: TripActions) {
  switch (action.type) {
    case TripActionTypes.LoadTrips:
      return {
        ...state,
        allTrips: action.payload
      };
    case TripActionTypes.UpdateTrip:
      return {
        ...state,
        selectedTrip: action.payload
      };
    default:
      return state;
  }
}
