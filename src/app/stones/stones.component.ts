import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stones',
  templateUrl: './stones.component.html',
  styleUrls: ['./stones.component.less']
})
export class StonesComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('进入stones');
  }

  hehe(a) {
    a.open();
  }

}
