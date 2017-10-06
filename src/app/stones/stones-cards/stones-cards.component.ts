import {Component, OnInit, Input} from '@angular/core';
import {HttpService} from '../../service/http/http.service';
import url from '../../config/ip/stones';
import {easeIn} from '../../animations/animations';

@Component({
  selector: 'app-stones-cards',
  templateUrl: './stones-cards.component.html',
  styleUrls: ['./stones-cards.component.less'],
  animations: [easeIn]
})
export class StonesCardsComponent implements OnInit {
  standard: string;
  data: {}[];

  constructor(private http: HttpService) {
    this.standard = 'pending';
  }

  ngOnInit() {
    this.http.get(url.cardList, '', (data) => {
      setTimeout(() => {
        this.standard = 'full';
      }, 500);
      console.log(data);
      this.data = data;
    }, '');
  }

}
