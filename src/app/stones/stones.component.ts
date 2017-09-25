import {Component, OnInit, HostBinding} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {routeAnimation} from '../animations';

@Component({
  selector: 'app-stones',
  templateUrl: './stones.component.html',
  styleUrls: ['./stones.component.less'],
  animations: [routeAnimation]
})
export class StonesComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  menus: [{ text: string, id: number }];
  curItem: number;

  constructor() {
    this.menus = [
      {
        text: '炉石卡组', id: 1
      },
      {
        text: '九大职业', id: 2
      },
      {
        text: '精彩视频', id: 3
      }
    ];
    this.curItem = 0;
  }

  ngOnInit() {
    console.log('进入stones');
  }

  changeNav(i) {
    this.curItem = i;
  }

  getState(outlet) {
    console.log(outlet);
    return outlet.activatedRouteData.state;
  }
}
