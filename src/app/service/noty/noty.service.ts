import {Injectable} from '@angular/core';
import * as Noty from 'noty';

@Injectable()
export class NotyService {

  constructor() {
  }

  alert(options: object) {
    new Noty(Object.assign({
      type: 'warning',
      layout: 'topRight',
      theme: 'mint',
      timeout: 3000,
      animation: {
        open: 'noty_effects_open',
        close: 'noty_effects_close'
      },
      closeWith: ['click', 'button']
    }, options)).show();
  }

}
