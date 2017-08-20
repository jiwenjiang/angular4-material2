import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StonesComponent } from './stones.component';

describe('StonesComponent', () => {
  let component: StonesComponent;
  let fixture: ComponentFixture<StonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
