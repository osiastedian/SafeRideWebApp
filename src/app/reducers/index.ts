import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {reducer as TripReducer} from '../reducers/trip.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
