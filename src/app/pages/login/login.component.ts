import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterInputLayoutComponent } from "../../components/register-input-layout/register-input-layout.component";
import { PasswordInputLayoutComponent } from "../../components/password-input-layout/password-input-layout.component";
import { OrangeSquareButtonComponent } from "../../components/buttons/orange-square-button/orange-square-button.component";
import { LogoComponent } from "../../components/logo/logo.component";
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule, RegisterInputLayoutComponent, PasswordInputLayoutComponent, OrangeSquareButtonComponent, LogoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }

  fazerLogin() {
    const email = document.getElementById('emailInput')?.querySelector('input')?.value;
    const senha = document.getElementById('passwordInput')?.querySelector('input')?.value;

    if (!email || !senha) {
      alert('Preencha os campos!');
      return;
    }

    this.authService.login(email, senha)
      .then((res: any) => {
        if (res.tipo === 'admin') {
          this.router.navigate(['/admin']);
        } else if (res.tipo === 'client') {
          this.router.navigate(['/']);
        }
      })
      .catch(() => {
        alert('Usuário ou senha incorretos!');
      });
  }
}