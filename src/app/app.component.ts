import {Component, OnInit, HostBinding} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {fadeInAnimation} from './animations';


@Component({
  selector: 'app-root',
  template: `
    <router-outlet [@fadeInAnimation]="'true'"></router-outlet>
  `,
  styleUrls: ['./app.component.less'],
  animations: [fadeInAnimation]
})


export class AppComponent implements OnInit {
  @HostBinding('@fadeInAnimation') fadeInAnimation = true;
  @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'relative';
  constructor(public translateService: TranslateService) {
  }

  ngOnInit() {
    console.log('进入app');
    this.translateService.setDefaultLang('zh');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }
}
