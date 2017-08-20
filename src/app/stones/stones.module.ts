import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {stonesRoutingModule} from './stones-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    stonesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [],
  entryComponents: [],
  providers: []
})

export class HeroesModule {
}
