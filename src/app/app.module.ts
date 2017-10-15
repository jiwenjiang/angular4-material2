import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
// translate
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpLoaderFactory} from './app.translate';
// ngrx
import {StoreModule} from '@ngrx/store';
import {reducer} from './ngrx/reducer';

import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './core/login/login.component';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {LoginFormComponent} from './core/login/login-form/login-form.component';
import 'hammerjs';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
