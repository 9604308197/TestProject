import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetails2Component } from './emp-details2.component';

describe('EmpDetails2Component', () => {
  let component: EmpDetails2Component;
  let fixture: ComponentFixture<EmpDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDetails2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
