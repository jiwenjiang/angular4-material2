import {Component, OnInit, Input} from '@angular/core';
import {HttpService} from '../../service/http/http.service';
import url from '../../config/ip/stones';
import {easeIn} from '../../animations/animations';
import {Shuffle} from '../../utils/shuffle';
import {CardModel} from '../../config/interface/stones';

@Component({
  selector: 'app-stones-cards',
  templateUrl: './stones-cards.component.html',
  styleUrls: ['./stones-cards.component.less'],
  animations: [easeIn]
})

export class StonesCardsComponent implements OnInit {
  selectedTab: number;
  standard: string;
  wild: string;
  data: [CardModel];
  wildData: [CardModel];

  constructor(private http: HttpService) {
    this.standard = 'pending';
    this.wild = 'full';
  }

  ngOnInit() {
    this.getStandard();
  }

  getStandard() {
    [this.standard] = ['pending'];
    this.http.get(url.cardList, '', (data) => {
      setTimeout(() => {
        this.standard = 'full';
      }, 500);
      this.data = data.sort(new Shuffle().shuffle);
    }, '');
  }

  getWilds() {
    [this.wild] = ['pending'];
    this.http.get(url.wilds, '', (data) => {
      setTimeout(() => {
        this.wild = 'full';
      }, 500);
      this.wildData = data.sort(new Shuffle().shuffle);
    }, '');
  }

  selectChange() {
    if (this.selectedTab === 0) {
      this.getStandard();
    }
    if (this.selectedTab === 1) {
      this.getWilds();
    }
    console.log(this.selectedTab);
  }

}
