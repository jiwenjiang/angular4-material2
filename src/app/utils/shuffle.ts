/**
 * Created by j_bleach on 2017/10/6.
 */
export class Shuffle {
  constructor() {
  }

  shuffle() {
    return Math.random() > .5 ? -1 : 1;
  }
}
