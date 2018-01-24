import {Component, OnInit, HostBinding} from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
import {routeAnimation} from '@myanimations/animations';
import {TranslateService} from '@ngx-translate/core';
import {Menus} from '@config/interface/core';

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
  menus: [Menus];
  curItem: number;

  constructor(private translate: TranslateService) {
    this.curItem = 0;
  }

  ngOnInit() {
    this.setMenus();
  }

  setMenus() {
    this.menus = [
      {
        text: this.transFn('menus.cards'),
        id: 1,
        icon: 'icon-cards',
        link: '/stones'
      },
      {
        text: this.transFn('menus.roles'),
        id: 2,
        icon: 'icon-role',
        link: '/stones/roles'
      },
      {
        text: this.transFn('menus.video'),
        id: 3,
        icon: 'icon-video',
        link: '/stones/404'
      },
      {
        text: this.transFn('menus.aboutme'),
        id: 4,
        icon: 'icon-aboutme',
        link: '/stones/aboutme'
      }
    ];
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
    return outlet.activatedRouteData.state;
  }
}
