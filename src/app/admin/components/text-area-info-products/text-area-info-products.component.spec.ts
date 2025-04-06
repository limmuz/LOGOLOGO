import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaInfoProductsComponent } from './text-area-info-products.component';

describe('TextAreaInfoProductsComponent', () => {
  let component: TextAreaInfoProductsComponent;
  let fixture: ComponentFixture<TextAreaInfoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAreaInfoProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreaInfoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
