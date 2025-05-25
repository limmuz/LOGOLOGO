import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-log-out-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './log-out-admin.component.html',
  styleUrl: './log-out-admin.component.css'
})
export class LogOutAdminComponent {

  constructor(private router: Router, private authService: AuthService) { }

  usuarioLogado: { nome: string; email: string } | null = null

  ngOnInit() {
    const usuarioStr = localStorage.getItem("usuarioLogado")

    if (usuarioStr) {
      const usuario = JSON.parse(usuarioStr)
      this.usuarioLogado = {
        nome: usuario.nome || usuario.nomeCompleto || "Usuário",
        email: usuario.email || 'email@exemplo.com'
      }
    }

    this.usuarioLogado = this.authService.getUsuarioLogado();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}


