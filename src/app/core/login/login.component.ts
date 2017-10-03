import {Component, OnInit} from '@angular/core';
import {canvas} from './loginCanvas.server.js';
import {homeInit} from '../../animations/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  animations: [homeInit]
})
export class LoginComponent implements OnInit {
  toLogin: boolean;

  constructor() {
  }

  ngOnInit() {
    this.toLogin = true;
    canvas();
  }

  swipe() {
    console.log(666);
  }

  showLogin() {
    this.toLogin = false;
  }
}
