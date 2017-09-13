import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {StonesRoutingModule} from './stones-routing.module';
import {StonesComponent} from './stones.component';
import {MaterialModule} from '@angular/material';
import { StonesTopComponent } from './stones-top/stones-top.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StonesRoutingModule,
    ReactiveFormsModule,
    MaterialModule
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
