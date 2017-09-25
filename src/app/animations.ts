import {trigger, animate, transition, style, state, query, group} from '@angular/animations';
import {AnimationEntryMetadata} from '@angular/core';

export const routeAnimation: AnimationEntryMetadata = trigger('routeAnimation',
  [
    state('*', style({
      // the view covers the whole screen with a semi tranparent background
      opacity: 1,
      transform: 'translateX(0)',
      width: '100%',
      height: '100%'
      // backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })),
    transition(':enter', [
      style({transform: 'translateX(-100%)', opacity: 0}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)', opacity: 1}))
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]);
