import { Component } from '@angular/core';
import { AdminLayoutComponent } from "../../components/admin-layout/admin-layout.component";
import { TableUsersComponent } from "../../components/table-users/table-users.component";
import { InfoUsersComponent } from "../../components/modals/info-users/info-users.component";
import { ButtonActionComponent } from "../../components/button-action/button-action.component";
import { ConfirmActionComponent } from "../../components/modals/confirm-action/confirm-action.component";
import { admin } from '../../../core/types/admin.types';
import { AdminService } from '../../../core/services/admin.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-users-admin',
  imports: [AdminLayoutComponent, TableUsersComponent, InfoUsersComponent, ButtonActionComponent, ConfirmActionComponent],
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.css'
})
export class UsersAdminComponent {
  modalCadastrarUsuarioAberto = false
  modalConfirmarCadastroUsuarioAberto = false
  modalErroUsuarioAberto = false

  abrirModalCadastrarUsuarioAberto() {
    this.admin = {
      nome: '',
      sobrenome: '',
      email: '',
      senha: ''
    };
    this.modalCadastrarUsuarioAberto = true
  }

  fecharModalCadastrarUsuario() {
    this.modalCadastrarUsuarioAberto = false
  }

  abrirModalConfirmarCadastroUsuarioAberto() {
    this.modalConfirmarCadastroUsuarioAberto = true
  }

  fecharModalConfirmarCadastroUsuario() {
    this.modalConfirmarCadastroUsuarioAberto = false
  }

  abrirModalErroUsuarioAberto() {
    this.modalErroUsuarioAberto = true
  }

  fecharModalErroUsuario() {
    this.modalErroUsuarioAberto = false
  }

  adminId?: number;

  //Defino um objeto admin que será incluído ou alterado.
  admin: admin = {} as admin;
  constructor(
    private service: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //Verifico se é alteração ou inclusão
    this.adminId = Number(this.route.snapshot.params['id']);
    if (this.adminId) {
      service.buscarPorId(this.adminId).subscribe(admin => {
        if (admin) {
          this.admin.id = admin.id;
          this.admin.nome = admin.nome;
          this.admin.sobrenome = admin.sobrenome;
          this.admin.email = admin.email;
          this.admin.senha = admin.senha;
        }
      })
    }
  }
  submeter() {
    if (
      !this.admin.nome?.trim() || 
      !this.admin.sobrenome?.trim() ||
      !this.admin.email?.toString().trim() ||
      !this.admin.senha?.trim() 
    ) {
      this.modalErroUsuarioAberto = true
      return;
    }
    this.service.incluir(this.admin).subscribe(() => {
      this.modalConfirmarCadastroUsuarioAberto = true
    })
  }
}
