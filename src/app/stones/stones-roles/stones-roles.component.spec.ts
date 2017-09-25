import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StonesRolesComponent } from './stones-roles.component';

describe('StonesRolesComponent', () => {
  let component: StonesRolesComponent;
  let fixture: ComponentFixture<StonesRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonesRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StonesRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
