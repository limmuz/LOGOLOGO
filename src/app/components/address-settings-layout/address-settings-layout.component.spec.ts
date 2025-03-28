import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSettingsLayoutComponent } from './address-settings-layout.component';

describe('AddressSettingsLayoutComponent', () => {
  let component: AddressSettingsLayoutComponent;
  let fixture: ComponentFixture<AddressSettingsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressSettingsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressSettingsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
