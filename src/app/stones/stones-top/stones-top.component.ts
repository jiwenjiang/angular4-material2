import {Component, OnInit, Input} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-stones-top',
  templateUrl: './stones-top.component.html',
  styleUrls: ['./stones-top.component.less']
})
export class StonesTopComponent implements OnInit {
  @Input() sidenav;
  username: string;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.username = JSON.parse(sessionStorage.getItem('user')).name;
  }

  toggleSide() {
    this.sidenav.open();
  }

  conso() {
    this.translate.use('en');
    console.log(this.translate.getBrowserLang());
  }

}
