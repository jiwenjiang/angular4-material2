import {trigger, animate, transition, style} from '@angular/animations';

export const fadeInAnimation =
  trigger('fadeInAnimation', [
    transition(':enter', [
      style({opacity: 0}),
      animate('2000ms', style({opacity: 1}))
    ]),
    transition(':leave', [
      animate('2000ms', style({opacity: 0}))
    ])
  ]);
