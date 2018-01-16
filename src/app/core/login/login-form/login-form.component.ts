import {Component, OnInit} from '@angular/core';
import {NotyService} from '@service/noty/noty.service';
import {Router} from '@angular/router';
import {loginForm} from '@animations/animations';

interface User {
  name: string;
  password: string;
}
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
  animations: [loginForm]
})

export class LoginFormComponent implements OnInit {
  user: User;

  constructor(private noty: NotyService, private route: Router) {
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
      text: '👻👻👻👻welcome!👻👻👻👻'
    });
    sessionStorage.setItem('user', JSON.stringify(this.user));
    this.route.navigate(['/stones']);
  }

}
