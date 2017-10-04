/**
 * Created by j_bleach on 2017/10/4.
 */
import {environment} from '../../../environments/environment';
import {compose} from '@ngrx/core/compose';
import {ActionReducer, combineReducers} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';
import * as loading from './loading';

export interface State {
  loading: boolean;
}

const reducers = {
  loading: loading.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

// loading
// export const getLayoutState = (state: State) => state.layout;
//
// export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
