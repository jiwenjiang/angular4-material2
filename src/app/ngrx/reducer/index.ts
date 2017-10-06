/**
 * Created by j_bleach on 2017/10/4.
 */
// import {compose} from '@ngrx/core/compose';
// import {ActionReducer, combineReducers} from '@ngrx/store';
import * as loading from './loading';

export interface State {
  loading: boolean;
}

export const reducer = {
  loading: loading.reducer
};
// const developmentReducer: ActionReducer<any> = compose(storeFreeze, combineReducers)(reducers);
// const productionReducer: ActionReducer<any> = combineReducers(reducers);
//
// export function reducer(state: any, action: any) {
//   if (environment.production) {
//     return productionReducer(state, action);
//   } else {
//     return developmentReducer(state, action);
//   }
// }


