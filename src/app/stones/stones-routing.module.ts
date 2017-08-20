import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// import {HeroTestComponent} from './hero-test/hero-test.component';

const stonesRoutes: Routes = [
    {
        path: ''
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

export class stonesRoutingModule {
}
