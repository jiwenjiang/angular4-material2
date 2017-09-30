import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../service/http/http.service';

@Component({
  selector: 'app-stones-cards',
  templateUrl: './stones-cards.component.html',
  styleUrls: ['./stones-cards.component.less']
})
export class StonesCardsComponent implements OnInit {

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.http.get('http://rapapi.org/mockjs/26550/card-list', '', (data) => {
      console.log(data);
    }, '');
  }

}
