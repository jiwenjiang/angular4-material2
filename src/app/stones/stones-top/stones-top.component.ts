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
  langImg: any;

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
    this.translate.use(lang).subscribe(() => {
      this.chooseLang(lang);
    });
    // console.log(this.translate.getBrowserLang());
  }

}
