import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StonesTopComponent } from './stones-top.component';

describe('StonesTopComponent', () => {
  let component: StonesTopComponent;
  let fixture: ComponentFixture<StonesTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonesTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StonesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
