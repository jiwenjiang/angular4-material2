/**
 * Created by j_bleach on 2017/9/17.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {NotyService} from '../service/noty/noty.service';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [NotyService]
})

export class SharedModule {
}
