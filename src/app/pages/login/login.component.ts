import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { RegisterInputLayoutComponent } from "../../components/register-input-layout/register-input-layout.component";
import { PasswordInputLayoutComponent } from "../../components/password-input-layout/password-input-layout.component";
import { OrangeSquareButtonComponent } from "../../components/buttons/orange-square-button/orange-square-button.component";

@Component({
  selector: 'app-login',
  imports: [RouterModule, RegisterInputLayoutComponent, PasswordInputLayoutComponent, OrangeSquareButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
