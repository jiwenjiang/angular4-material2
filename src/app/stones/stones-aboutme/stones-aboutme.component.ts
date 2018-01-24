import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {QRCodeComponent} from '@componets/qr-code/qr-code.component';

@Component({
  selector: 'app-stones-aboutme',
  templateUrl: './stones-aboutme.component.html',
  styleUrls: ['./stones-aboutme.component.less']
})
export class StonesAboutmeComponent implements OnInit {

  constructor(public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  openDialog(v): void {
    const imgUrl = `../../../assets/img/${v}.jpg`;
    const dialogRef = this.dialog.open(QRCodeComponent, {
      width: '20em',
      height: '23em',
      data: imgUrl
    });
    dialogRef.afterClosed().subscribe(result => result);
  }
}
