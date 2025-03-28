import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackSquareButtonComponent } from './black-square-button.component';

describe('BlackSquareButtonComponent', () => {
  let component: BlackSquareButtonComponent;
  let fixture: ComponentFixture<BlackSquareButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackSquareButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackSquareButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
