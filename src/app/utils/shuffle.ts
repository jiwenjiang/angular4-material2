/**
 * Created by j_bleach on 2017/10/6.
 */
export class Shuffle {
  constructor() {
  }

  shuffle(): number {
    return Math.random() > .5 ? -1 : 1;
  }
}
