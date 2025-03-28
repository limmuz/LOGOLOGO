import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackRoundButtonComponent } from './black-round-button.component';

describe('BlackRoundButtonComponent', () => {
  let component: BlackRoundButtonComponent;
  let fixture: ComponentFixture<BlackRoundButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackRoundButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackRoundButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
