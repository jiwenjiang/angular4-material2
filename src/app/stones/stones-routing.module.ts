import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StonesComponent} from './stones.component';
import {StonesCardsComponent} from './stones-cards/stones-cards.component';
import {StonesRolesComponent} from './stones-roles/stones-roles.component';
import {StonesAboutmeComponent} from './stones-aboutme/stones-aboutme.component';


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
      },
      {
        path: 'aboutme',
        component: StonesAboutmeComponent
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
