import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
 <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(public translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.addLangs(['zh', 'en']);
    this.translateService.setDefaultLang('zh');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }
}
