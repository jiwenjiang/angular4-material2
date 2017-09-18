import {NgModule} from '@angular/core';

import {StonesRoutingModule} from './stones-routing.module';
import {StonesComponent} from './stones.component';
import {StonesTopComponent} from './stones-top/stones-top.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    StonesRoutingModule,
    SharedModule
  ],
  declarations: [
    StonesComponent,
    StonesTopComponent
  ],
  entryComponents: [
    StonesComponent
  ],
  providers: []
})

export class StonesModule {
}
