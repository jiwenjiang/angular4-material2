import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit, OnChanges {
  @Input() data;
  url: any;

  constructor(private sanitization: DomSanitizer, public dialog: MdDialog) {
  }

  ngOnInit() {
    this.url = this.sanitization.bypassSecurityTrustUrl(`url(${this.data.url})`);
    this.data.url = this.url.changingThisBreaksApplicationSecurity;
  }

  ngOnChanges() {
  }

  toggleLike(data): void {
    data.haslike === true
      ? (data.haslike = false, data.like--)
      : (data.haslike = true, data.like++);
  }

  openDialog(): void {
    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   width: '250px',
    //   // data: {name: this.name, animal: this.animal}
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // this.animal = result;
    // });
  }
}


