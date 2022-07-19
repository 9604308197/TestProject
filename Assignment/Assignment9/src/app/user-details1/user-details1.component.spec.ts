import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetails1Component } from './user-details1.component';

describe('UserDetails1Component', () => {
  let component: UserDetails1Component;
  let fixture: ComponentFixture<UserDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetails1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
