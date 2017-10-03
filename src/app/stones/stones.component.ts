import {Component, OnInit, HostBinding} from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
import {routeAnimation} from '../animations/animations';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-stones',
  templateUrl: './stones.component.html',
  styleUrls: ['./stones.component.less'],
  animations: [routeAnimation]
})
export class StonesComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  menus: [{ text: any, id: number, icon: string }];
  curItem: number;

  constructor(private translate: TranslateService) {
    this.curItem = 0;
  }

  ngOnInit() {
    console.log('进入stones');
    this.setMenus();
  }

  setMenus() {
    this.menus = [
      {
        text: this.transFn('menus.cards'), id: 1,
        icon: 'icon-cards'
      },
      {
        text: this.transFn('menus.roles'), id: 2,
        icon: 'icon-role'
      },
      {
        text: this.transFn('menus.video'), id: 3,
        icon: 'icon-video'
      }
    ];
    console.log(this.menus);
  }

  transFn(v) {
    let text = '';
    this.translate.get(v).subscribe((res: string) => {
      text = res;
    });
    return text;
  }

  resetLang() {
    this.setMenus();
  }

  changeNav(i) {
    this.curItem = i;
  }

  getState(outlet) {
    console.log(outlet);
    return outlet.activatedRouteData.state;
  }
}
