import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsLayoutComponent } from './profile-settings-layout.component';

describe('ProfileSettingsLayoutComponent', () => {
  let component: ProfileSettingsLayoutComponent;
  let fixture: ComponentFixture<ProfileSettingsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSettingsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSettingsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
