import {Component, OnInit} from '@angular/core';
import {canvas} from './loginCanvas.server.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  hide: boolean;

  constructor() {
    // console.log(canvas);
    this.hide = true;
  }

  ngOnInit() {
    canvas();
  }
}
