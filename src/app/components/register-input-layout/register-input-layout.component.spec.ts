import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInputLayoutComponent } from './register-input-layout.component';

describe('RegisterInputLayoutComponent', () => {
  let component: RegisterInputLayoutComponent;
  let fixture: ComponentFixture<RegisterInputLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterInputLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterInputLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
