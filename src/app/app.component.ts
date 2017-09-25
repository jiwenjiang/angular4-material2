import {Component, OnInit, HostBinding} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.less'],
})


export class AppComponent implements OnInit {
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
