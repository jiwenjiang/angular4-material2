import {Component, OnInit} from '@angular/core';
import {NotyService} from '../../../service/noty/noty.service';

import {
  trigger,
  state,
  style,
  animate,
  group,
  transition
} from '@angular/animations';

interface User {
  name: string;
  password: string;
}
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 400, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(100px)', opacity: 0}),
        group([
          animate('0.7s 0.4s ease', style({
            transform: 'translateX(0)',
            width: 400
          })),
          animate('0.7s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.5s ease', style({
            transform: 'translateX(100px)',
            width: 10
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ],
  providers: [NotyService]
})

export class LoginFormComponent implements OnInit {
  user: User;

  constructor(private noty: NotyService) {
    this.user = {
      name: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.user);
    this.noty.alert({
      text: '👻👻👻👻👻👻👻👻'
    });
  }

}
