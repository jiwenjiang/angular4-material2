import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdDialog} from '@angular/material';
import {CardCommentComponent} from '../card-comment/card-comment.component';
import {NotyService} from '../../service/noty/noty.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit {
  @Input() data;
  url: any;

  constructor(private sanitization: DomSanitizer, public dialog: MdDialog, private noty: NotyService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.url = this.sanitization.bypassSecurityTrustUrl(`url(${this.data.url})`);
    this.data.url = this.url.changingThisBreaksApplicationSecurity;
  }


  toggleLike(data): void {
    data.haslike === true
      ? (data.haslike = false, data.like--)
      : (data.haslike = true, data.like++);
  }

  openDialog(v): void {
    const dialogRef = this.dialog.open(CardCommentComponent, {
      width: '23em',
      height: '20em',
      data: {title: v.name, id: v.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        v.comment++;
        this.cdr.detectChanges();
        this.noty.alert({
          text: 'Commentary Succ!',
          type: 'success'
        });
      }
    });
  }
}


