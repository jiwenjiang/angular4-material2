import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.less']
})
export class QRCodeComponent  {
  data: String

  constructor(@Inject(MD_DIALOG_DATA) data: String) {
    this.data = data;
  }
}
