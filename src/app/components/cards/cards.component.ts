import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit, OnChanges {
  @Input() data;
  url: any;

  constructor(private sanitization: DomSanitizer) {
  }

  ngOnInit() {
    this.url = this.sanitization.bypassSecurityTrustUrl(`url(${this.data.url})`);
    this.data.url = this.url.changingThisBreaksApplicationSecurity;
    // console.log(666);
  }

  ngOnChanges() {
    // console.log(777);
  }

}
