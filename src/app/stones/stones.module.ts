import {NgModule} from '@angular/core';

import {StonesRoutingModule} from './stones-routing.module';
import {StonesComponent} from './stones.component';
import {StonesTopComponent} from './stones-top/stones-top.component';
import {SharedModule} from '../shared/shared.module';
import {StonesCardsComponent} from './stones-cards/stones-cards.component';
import {StonesRolesComponent} from './stones-roles/stones-roles.component';
import {CardsComponent} from '../components/cards/cards.component';
import {CardCommentComponent} from '../components/card-comment/card-comment.component';
import {QRCodeComponent} from '../components/qr-code/qr-code.component';
import {StonesAboutmeComponent} from './stones-aboutme/stones-aboutme.component';

@NgModule({
  imports: [
    StonesRoutingModule,
    SharedModule
  ],
  declarations: [
    StonesComponent,
    StonesTopComponent,
    StonesCardsComponent,
    StonesRolesComponent,
    CardsComponent,
    CardCommentComponent,
    StonesAboutmeComponent,
    QRCodeComponent
  ],
  entryComponents: [
    StonesComponent,
    CardCommentComponent,
    QRCodeComponent
  ],
  providers: []
})

export class StonesModule {
}
