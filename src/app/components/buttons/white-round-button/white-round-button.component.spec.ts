import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteRoundButtonComponent } from './white-round-button.component';

describe('WhiteRoundButtonComponent', () => {
  let component: WhiteRoundButtonComponent;
  let fixture: ComponentFixture<WhiteRoundButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteRoundButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteRoundButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
