import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
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
  constructor(private router: Router) {}

  fazerLogin() {
const email = document.getElementById('emailInput')?.querySelector('input')?.value;
const password = document.getElementById('passwordInput')?.querySelector('input')?.value;

    if (email === 'admin@gmail.com' && password === '1234') {
      this.router.navigate(['/admin']);
    } else {
      alert('Credenciais inválidas!');
    }
  }
}