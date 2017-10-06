/**
 * Created by j_bleach on 2017/10/4.
 */
import * as load from '../../action/loading';

const initialState = false;

export function reducer(state: boolean = initialState, action: load.Actions) {
  switch (action.type) {
    case load.SHOW_LOADING: {
      return true;
    }

    case load.HIDE_LOADING: {
      return false;
    }
    default: {
      return state;
    }
  }
}
export const showLoading = (state: boolean) => state;
