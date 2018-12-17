import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {reducer as TripReducer, TripState} from '../reducers/trip.reducer';

export interface State {
  trip: any;
}

export const reducers: ActionReducerMap<State> = {
  trip: TripReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
