import {Component, OnInit} from '@angular/core';
import {canvas} from './loginCanvas.server.js';
import {homeInit} from '../../animations/animations';

@Component({
  moduleId: module.id,
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

  showLogin() {
    this.toLogin = false;
  }
}
