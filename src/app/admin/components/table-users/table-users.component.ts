import { Component } from '@angular/core';
import { ConfirmActionComponent } from "../modals/confirm-action/confirm-action.component";
import { ButtonActionComponent } from "../button-action/button-action.component";
import { InfoUsersComponent } from "../modals/info-users/info-users.component";

@Component({
  selector: 'app-table-users',
  imports: [ButtonActionComponent, InfoUsersComponent, ConfirmActionComponent],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css'
})
export class TableUsersComponent {

  modalAterarUsuarioAberto = false
  modalConfirmarAlteracaoUsuarioAberto = false
  modalInformacoesUsuarioAberto = false
  modalExclusaoUsuarioAberto = false
  modalErroUsuarioAberto = false

  abrirModalAterarUsuarioAberto() {
    this.modalAterarUsuarioAberto = true
  }

  fecharModalAterarUsuario() {
    this.modalAterarUsuarioAberto = false
  }

  abrirModalConfirmarAlteracaoUsuarioAberto() {
    this.modalConfirmarAlteracaoUsuarioAberto = true
  }

  fecharModalConfirmarAlteracaoUsuario() {
    this.modalConfirmarAlteracaoUsuarioAberto = false
  }

  abrirModalInformacoesUsuarioAberto() {
    this.modalInformacoesUsuarioAberto = true
  }

  fecharModalInformacoesUsuario() {
    this.modalInformacoesUsuarioAberto = false
  }

  abrirModalExclusaoUsuarioAberto() {
    this.modalExclusaoUsuarioAberto = true
  }

  fecharModalExclusaoUsuario() {
    this.modalExclusaoUsuarioAberto = false
  }

  abrirModalErroUsuarioAberto() {
    this.modalErroUsuarioAberto = true
  }

  fecharModalErroUsuario() {
    this.modalErroUsuarioAberto = false
  }
}
