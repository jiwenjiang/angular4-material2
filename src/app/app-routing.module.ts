import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './core/login/login.component';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {Auth} from './core/login/login.Auth';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'stones', loadChildren: './stones/stones.module#StonesModule', canActivate: [Auth]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [Auth]
})
export class AppRoutingModule {
}
