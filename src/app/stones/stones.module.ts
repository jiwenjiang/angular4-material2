import {NgModule} from '@angular/core';

import {StonesRoutingModule} from './stones-routing.module';
import {StonesComponent} from './stones.component';
import {StonesTopComponent} from './stones-top/stones-top.component';
import {SharedModule} from '../shared/shared.module';
import {StonesCardsComponent} from './stones-cards/stones-cards.component';
import {StonesRolesComponent} from './stones-roles/stones-roles.component';
import {CardsComponent} from '../components/cards/cards.component';

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
    CardsComponent
  ],
  entryComponents: [
    StonesComponent
  ],
  providers: []
})

export class StonesModule {
}
