import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInfoProductsComponent } from './input-info-products.component';

describe('InputInfoProductsComponent', () => {
  let component: InputInfoProductsComponent;
  let fixture: ComponentFixture<InputInfoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputInfoProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputInfoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
