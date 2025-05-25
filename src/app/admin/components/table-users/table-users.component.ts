import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ConfirmActionComponent } from "../modals/confirm-action/confirm-action.component"
import { InfoUsersComponent } from "../modals/info-users/info-users.component"
import { ButtonActionComponent } from "../button-action/button-action.component"
import { Admin } from '../../../core/types/admin.types'
import { AdminService } from '../../../core/services/admin.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-table-users',
  imports: [ConfirmActionComponent, InfoUsersComponent, ButtonActionComponent],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css',
  standalone: true,
})
export class TableUsersComponent implements OnInit {

  @Input() listaAdmins: Admin[] = []; 

  adminSelecionado: Admin = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
  }

  constructor(private service: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().subscribe((admins) => {
      this.listaAdmins = admins;
    });
  }
  
  modalExclusaoAberto = false
  modalInformacoesAberto = false
  modalAlterarUsuarioAberto = false
  modalConfirmarAlteracaoAberto = false
  modalErroAlteracao = false

  abrirModalExclusao(admin: Admin) {
    this.adminSelecionado = admin
    this.modalExclusaoAberto = true
  }

  fecharModalExclusao() {
    this.modalExclusaoAberto = false
  }

  abrirModalInformacoes(admin: Admin) {
    this.adminSelecionado = admin
    this.modalInformacoesAberto = true
  }

  fecharModalInformacoes() {
    this.modalInformacoesAberto = false
  }

  abrirAlterarUsuario(admin: Admin) {
    this.adminSelecionado = { ...admin }
    this.modalAlterarUsuarioAberto = true
  }

  fecharAlterarUsuario() {
    this.modalAlterarUsuarioAberto = false
  }

  abrirConfirmarAlteracaoUsuario() {
    this.modalConfirmarAlteracaoAberto = true
  }

  fecharConfirmarAlteracaoUsuario() {
    this.modalConfirmarAlteracaoAberto = false
  }

  abrirModalErroAlteracao() {
    this.modalErroAlteracao = true
  }

  fecharModalErroAlteracao() {
    this.modalErroAlteracao = false
  }

  excluir(id: number) {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        this.listaAdmins = this.listaAdmins.filter(a => a.id !== id);
      });
    }
  }

  confirmarAlteracaoAdmin() {
    if (
      !this.adminSelecionado.nome?.trim() ||
      !this.adminSelecionado.sobrenome?.trim() ||
      !this.adminSelecionado.email?.trim() ||
      !this.adminSelecionado.senha?.trim()
    ) {
      this.modalErroAlteracao = true
      return;
    }

    if (this.adminSelecionado && this.adminSelecionado.id) {
      this.service.editar(this.adminSelecionado).subscribe(() => {
        this.abrirConfirmarAlteracaoUsuario();

        this.service.listar().subscribe(admins => {
          this.listaAdmins = admins;
        });
      });
    }
  }
}
