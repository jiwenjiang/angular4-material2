import {Component, OnInit} from '@angular/core';
// import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-stones-roles',
  templateUrl: './stones-roles.component.html',
  styleUrls: ['./stones-roles.component.less']
})
export class StonesRolesComponent implements OnInit {

  constructor() {
    // console.log(Observable.of(1, 2, 3).map(x => x + '!!!'));
  }

  ngOnInit() {
    const button = document.querySelector('button');
    Rx.Observable.fromEvent(button, 'click')
      .scan((count: number) => count + 1, 0)
      .subscribe(count => console.log(`Clicked ${count} times`));
  }

}
