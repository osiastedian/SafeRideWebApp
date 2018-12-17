import { TripActionTypes, TripActions } from '../actions/trip.actions';
import { Trip } from '../interfaces/trip';

export interface TripState {
  selectedTrip: Trip;
}

export const initialState: TripState = {
  selectedTrip: null
};

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
    case TripActionTypes.GetSelectedTrip:
      return state;
    case TripActionTypes.SetSelectedTrip:
      return {
        ...state,
        selectedTrip: action.payload.trip
      };
    default:
      return state;
  }
}
