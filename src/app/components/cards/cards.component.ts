import {Component, OnInit, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit {
  @Input() data;
  url: any;

  constructor(private sanitization: DomSanitizer) {
  }

  ngOnInit() {
    this.url = this.sanitization.bypassSecurityTrustStyle(`url(${this.data.url}) center/cover no-repeat`);
    this.data.url = this.url.changingThisBreaksApplicationSecurity;
    console.log(this.data.url);
  }

}
