import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeRoundButtonComponent } from './orange-round-button.component';

describe('OrangeRoundButtonComponent', () => {
  let component: OrangeRoundButtonComponent;
  let fixture: ComponentFixture<OrangeRoundButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrangeRoundButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrangeRoundButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
