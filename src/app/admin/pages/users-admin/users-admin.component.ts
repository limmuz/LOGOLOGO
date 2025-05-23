import { Component } from '@angular/core';
import { AdminLayoutComponent } from "../../components/admin-layout/admin-layout.component";
import { TableUsersComponent } from "../../components/table-users/table-users.component";
import { InfoUsersComponent } from "../../components/modals/info-users/info-users.component";
import { ButtonActionComponent } from "../../components/button-action/button-action.component";
import { ConfirmActionComponent } from "../../components/modals/confirm-action/confirm-action.component";

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

  submeter() {
    this.abrirModalConfirmarCadastroUsuarioAberto()
  }
}
