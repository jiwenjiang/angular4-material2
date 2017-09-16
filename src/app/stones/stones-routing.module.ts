import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StonesComponent} from './stones.component';

const stonesRoutes: Routes = [
  {
    path: '',
    component: StonesComponent
    // children: [
    //   {
    //     path: '',
    //     component: HeroListComponent,
    //     // children: [
    //     //     {
    //     //         path: '',
    //     //         component: HeroTestComponent
    //     //     }
    //     // ]
    //   },
    //   {path: ':id', component: HeroDetailComponent}
    // ]
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
