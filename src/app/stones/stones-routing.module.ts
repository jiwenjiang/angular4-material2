import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StonesComponent} from './stones.component';
import {StonesCardsComponent} from './stones-cards/stones-cards.component';

const stonesRoutes: Routes = [
  {
    path: '',
    component: StonesComponent,
    children: [
      {
        path: '',
        component: StonesCardsComponent,
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
