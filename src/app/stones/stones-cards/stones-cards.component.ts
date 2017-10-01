import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../service/http/http.service';
import url from '../../config/ip/stones';

@Component({
  selector: 'app-stones-cards',
  templateUrl: './stones-cards.component.html',
  styleUrls: ['./stones-cards.component.less']
})
export class StonesCardsComponent implements OnInit {

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.http.get(url.cardList, '', (data) => {
      console.log(data);
    }, '');
  }

}
