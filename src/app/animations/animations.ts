import {trigger, animate, transition, style, state, query, group} from '@angular/animations';
import {AnimationEntryMetadata} from '@angular/core';

export const routeAnimation: AnimationEntryMetadata = trigger('routeAnimation', [
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

export const homeInit: AnimationEntryMetadata = trigger('flyInOut', [
  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
    style({opacity: 0, transform: 'translateX(-100%)'}),
    animate('0.4s 100ms ease-out')
  ]),
]);

export const loginForm: AnimationEntryMetadata =  trigger('flyInOut', [
  state('in', style({width: 400, transform: 'translateX(0)', opacity: 1})),
  transition('void => *', [
    style({width: 10, transform: 'translateX(100px)', opacity: 0}),
    group([
      animate('0.7s 0.4s ease', style({
        transform: 'translateX(0)',
        width: 400
      })),
      animate('0.7s ease', style({
        opacity: 1
      }))
    ])
  ]),
  transition('* => void', [
    group([
      animate('0.5s ease', style({
        transform: 'translateX(100px)',
        width: 10
      })),
      animate('0.5s 0.2s ease', style({
        opacity: 0
      }))
    ])
  ])
]);
