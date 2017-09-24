import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StonesCardsComponent } from './stones-cards.component';

describe('StonesCardsComponent', () => {
  let component: StonesCardsComponent;
  let fixture: ComponentFixture<StonesCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonesCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StonesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
