import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que3detailsComponent } from './que3details.component';

describe('Que3detailsComponent', () => {
  let component: Que3detailsComponent;
  let fixture: ComponentFixture<Que3detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Que3detailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que3detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
