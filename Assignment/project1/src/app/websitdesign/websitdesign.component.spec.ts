import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitdesignComponent } from './websitdesign.component';

describe('WebsitdesignComponent', () => {
  let component: WebsitdesignComponent;
  let fixture: ComponentFixture<WebsitdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitdesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsitdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
