import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ISubscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-stones-top',
  templateUrl: './stones-top.component.html',
  styleUrls: ['./stones-top.component.less']
})
export class StonesTopComponent implements OnInit, OnDestroy {

  @Input() sidenav;
  @Output() change = new EventEmitter();
  username: string;
  langImg: any;
  private subscription;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.username = JSON.parse(sessionStorage.getItem('user')).name;
    const curLang = this.translate.currentLang;
    this.chooseLang(curLang);
  }

  chooseLang(lang) {
    this.langImg = {
      'en': '../../../assets/img/en.jpg',
      'zh': '../../../assets/img/zh.jpg'
    }[lang];
  }

  toggleSide() {
    this.sidenav.open();
  }

  changeLang(lang) {
    this.subscription = this.translate.use(lang).subscribe(() => {
      this.chooseLang(lang);
      this.change.emit();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
