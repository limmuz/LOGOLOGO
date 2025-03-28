import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSettingsLayoutComponent } from './card-settings-layout.component';

describe('CardSettingsLayoutComponent', () => {
  let component: CardSettingsLayoutComponent;
  let fixture: ComponentFixture<CardSettingsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSettingsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSettingsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
