import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StonesAboutmeComponent } from './stones-aboutme.component';

describe('StonesAboutmeComponent', () => {
  let component: StonesAboutmeComponent;
  let fixture: ComponentFixture<StonesAboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonesAboutmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StonesAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
