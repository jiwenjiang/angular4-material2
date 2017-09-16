import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stones-top',
  templateUrl: './stones-top.component.html',
  styleUrls: ['./stones-top.component.less']
})
export class StonesTopComponent implements OnInit {
  userName: string;

  constructor() {
  }

  ngOnInit() {
    this.userName = JSON.parse(sessionStorage.getItem('user')).name;
  }

}
