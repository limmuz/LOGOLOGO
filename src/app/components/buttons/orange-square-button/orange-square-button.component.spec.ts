import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeSquareButtonComponent } from './orange-square-button.component';

describe('OrangeSquareButtonComponent', () => {
  let component: OrangeSquareButtonComponent;
  let fixture: ComponentFixture<OrangeSquareButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrangeSquareButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrangeSquareButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
