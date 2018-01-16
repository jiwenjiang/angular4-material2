/**
 * Created by j_bleach on 2017/9/17.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
// serve
import {NotyService} from '@service/noty/noty.service';
import {HttpService} from '@service/http/http.service';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [NotyService, HttpService]
})

export class SharedModule {
}
