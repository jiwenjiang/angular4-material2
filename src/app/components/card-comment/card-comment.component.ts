import {Component, OnInit, Inject} from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.less']
})
export class CardCommentComponent implements OnInit {
  data: { title: '' };

  constructor(public mdDialogRef: MdDialogRef<CardCommentComponent>, @Inject(MD_DIALOG_DATA) data: any) {
    this.data = data;
  }
  ngOnInit() {
  }

  closeDialog(): void {
    this.mdDialogRef.close(true);
  }

}
