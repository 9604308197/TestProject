import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que4childComponent } from './que4child.component';

describe('Que4childComponent', () => {
  let component: Que4childComponent;
  let fixture: ComponentFixture<Que4childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Que4childComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que4childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
