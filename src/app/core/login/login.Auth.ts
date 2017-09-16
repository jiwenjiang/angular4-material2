/**
 * Created by j_bleach on 2017/9/16.
 */
import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {NotyService} from '../../service/noty/noty.service';

@Injectable()
export class Auth implements CanActivate {
  constructor(private noty: NotyService, private route: Router) {
  }

  canActivate() {
    return sessionStorage.getItem('user')
      ? true
      : (this.noty.alert({
        text: '👻👻👻👻请登录~~👻👻👻👻'
      }), this.route.navigate(['/login']), false);
  }
}
