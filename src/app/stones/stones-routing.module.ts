import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StonesComponent} from './stones.component';
import {StonesCardsComponent} from './stones-cards/stones-cards.component';
import {StonesRolesComponent} from './stones-roles/stones-roles.component';


const stonesRoutes: Routes = [
  {
    path: '',
    component: StonesComponent,
    children: [
      {
        path: '',
        component: StonesCardsComponent,
      },
      {
        path: 'roles',
        component: StonesRolesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(stonesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class StonesRoutingModule {
}
