import { Component, Input, OnInit } from '@angular/core';
import { ConfirmActionComponent } from "../modals/confirm-action/confirm-action.component";
import { ButtonActionComponent } from "../button-action/button-action.component";
import { InfoUsersComponent } from "../modals/info-users/info-users.component";
import { AdminService } from '../../../core/services/admin.service';
import { admin } from '../../../core/types/admin.types';

@Component({
  selector: 'app-table-users',
  imports: [ButtonActionComponent, InfoUsersComponent, ConfirmActionComponent],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css'
})


export class TableUsersComponent implements OnInit {

  @Input() listagemAdmin: admin[] = [];

  adminSelecionado: admin = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
  };

  modalAterarUsuarioAberto = false
  modalConfirmarAlteracaoUsuarioAberto = false
  modalInformacoesUsuarioAberto = false
  modalExclusaoUsuarioAberto = false
  modalErroUsuarioAberto = false

  
  listarAdmins: admin[] = [];
  constructor(private service: AdminService) { }
  ngOnInit(): void {
    this.service.listar().subscribe((admin) => {
      this.listarAdmins = admin;
    });
  }

  abrirModalAterarUsuarioAberto(admin:admin) {
    this.adminSelecionado = {...admin}
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

  abrirModalInformacoesUsuarioAberto(admin:admin) {
    this.adminSelecionado = admin
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

  excluir(id: number) {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        this.listagemAdmin = this.listagemAdmin.filter(p => p.id !== id);
      });
    }
  }

  confirmarAlteracaoAdmin() {
    if (
      !this.adminSelecionado.nome?.trim() ||
      !this.adminSelecionado.sobrenome?.trim() ||
      !this.adminSelecionado.email?.toString().trim() ||
      !this.adminSelecionado.senha?.trim() 
    ) {
      this.modalErroUsuarioAberto = true;
      return;
    }

    if (this.adminSelecionado && this.adminSelecionado.id) {
      this.service.editar(this.adminSelecionado).subscribe(() => {
        this.fecharModalAterarUsuario();

        this.service.listar().subscribe(admin => {
          this.listagemAdmin = admin;
        });
      });
    }
  }
}

