import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que1childComponent } from './que1child.component';

describe('Que1childComponent', () => {
  let component: Que1childComponent;
  let fixture: ComponentFixture<Que1childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Que1childComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que1childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
