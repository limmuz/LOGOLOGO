import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { OrangeSquareButtonComponent } from "../../components/buttons/orange-square-button/orange-square-button.component";
import { RegisterInputLayoutComponent } from "../../components/register-input-layout/register-input-layout.component";
import { PasswordInputLayoutComponent } from "../../components/password-input-layout/password-input-layout.component";
import { LogoComponent } from "../../components/logo/logo.component";

@Component({
  selector: 'app-singup',
  imports: [RouterModule, OrangeSquareButtonComponent, RegisterInputLayoutComponent, PasswordInputLayoutComponent, LogoComponent],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {

}
