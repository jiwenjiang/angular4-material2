import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stones',
  templateUrl: './stones.component.html',
  styleUrls: ['./stones.component.less']
})
export class StonesComponent implements OnInit {
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

}
