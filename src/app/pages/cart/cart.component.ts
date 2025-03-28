import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BlackRoundButtonComponent } from "../../components/buttons/black-round-button/black-round-button.component";
import { ProfileSettingsLayoutComponent } from "../../components/profile-settings-layout/profile-settings-layout.component";
import { AddressSettingsLayoutComponent } from "../../components/address-settings-layout/address-settings-layout.component";
import { CardSettingsLayoutComponent } from "../../components/card-settings-layout/card-settings-layout.component";
import { OrangeRoundButtonComponent } from "../../components/buttons/orange-round-button/orange-round-button.component";
import { RegisterInputLayoutComponent } from "../../components/register-input-layout/register-input-layout.component";
import { PasswordInputLayoutComponent } from "../../components/password-input-layout/password-input-layout.component";
import { OrangeSquareButtonComponent } from "../../components/buttons/orange-square-button/orange-square-button.component";

@Component({
  selector: 'app-cart',
  imports: [HeaderComponent, ProfileSettingsLayoutComponent, AddressSettingsLayoutComponent, CardSettingsLayoutComponent, OrangeRoundButtonComponent, RegisterInputLayoutComponent, PasswordInputLayoutComponent, OrangeSquareButtonComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
