import {Component, OnInit} from '@angular/core';
import {canvas} from './loginCanvas.server.js';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({opacity: 0, transform: 'translateX(-100%)'}),
        animate('0.4s 100ms ease-out')
      ]),
    ])
  ]
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
