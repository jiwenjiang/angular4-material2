import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as reducer from './ngrx/reducer';


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<router-outlet></router-outlet>
              <md-spinner class="loadPosition" *ngIf="showLoading$ | async"></md-spinner>`,
  styleUrls: ['./app.component.less'],
})


export class AppComponent implements OnInit {
  showLoading$: Observable<boolean>;

  constructor(public translateService: TranslateService, private store: Store<reducer.State>) {
    this.showLoading$ = this.store.select('loading');
  }

  ngOnInit() {
    console.log('进入app');
    this.translateService.setDefaultLang('zh');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    // ngrx loading
  }
}
