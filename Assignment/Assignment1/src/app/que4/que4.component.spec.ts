import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que4Component } from './que4.component';

describe('Que4Component', () => {
  let component: Que4Component;
  let fixture: ComponentFixture<Que4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Que4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
