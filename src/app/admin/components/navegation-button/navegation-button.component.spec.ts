import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegationButtonComponent } from './navegation-button.component';

describe('NavegationButtonComponent', () => {
  let component: NavegationButtonComponent;
  let fixture: ComponentFixture<NavegationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegationButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
