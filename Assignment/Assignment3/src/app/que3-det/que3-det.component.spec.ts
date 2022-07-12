import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que3DetComponent } from './que3-det.component';

describe('Que3DetComponent', () => {
  let component: Que3DetComponent;
  let fixture: ComponentFixture<Que3DetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Que3DetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que3DetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
