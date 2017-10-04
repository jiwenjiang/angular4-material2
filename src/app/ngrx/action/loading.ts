/**
 * Created by j_bleach on 2017/10/4.
 */

import {Action} from '@ngrx/store';

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export class ShowAction implements Action {
  readonly type = SHOW_LOADING;
}
export class HideAction implements Action {
  readonly type = HIDE_LOADING;
}
export type Actions = ShowAction | HideAction;
