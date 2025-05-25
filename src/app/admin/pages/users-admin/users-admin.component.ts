import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Admin } from '../../../core/types/admin.types';
import { AdminService } from '../../../core/services/admin.service';
import { TableUsersComponent } from "../../components/table-users/table-users.component";
import { InfoUsersComponent } from "../../components/modals/info-users/info-users.component";
import { ButtonActionComponent } from "../../components/button-action/button-action.component";
import { ConfirmActionComponent } from "../../components/modals/confirm-action/confirm-action.component";
import { AdminLayoutComponent } from "../../components/admin-layout/admin-layout.component";

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.css',
  standalone: true,
  imports: [
    RouterModule,
    TableUsersComponent,
    InfoUsersComponent,
    ButtonActionComponent,
    ConfirmActionComponent,
    AdminLayoutComponent
]
})
export class UsersAdminComponent implements OnInit {

  modalCadastrarUsuarioAberto = false;
  modalConfirmarCadastroUsuarioAberto = false;
  modalErroUsuarioAberto = false;

  listaAdmins: Admin[] = []

  admin: Admin = {} as Admin;

  adminId?: number;

  constructor(
    private service: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.adminId = Number(this.route.snapshot.params['id']);

    if (this.adminId) {
      this.service.buscarPorId(this.adminId).subscribe(admin => {
        if (admin) {
          this.admin = { ...admin };
        }
      });
    }
  }

  ngOnInit(): void {
    this.carregarAdmins()
  }

  carregarAdmins() {
    this.service.listar().subscribe(admins => {
      this.listaAdmins = admins
    })
  }

  abrirModalCadastrarUsuario() {
    this.admin = {
      nome: '',
      sobrenome: '',
      email: '',
      senha: ''
    };
    this.modalCadastrarUsuarioAberto = true;
  }

  fecharModalCadastrarUsuario() {
    this.modalCadastrarUsuarioAberto = false;
  }

  abrirModalConfirmarCadastroUsuario() {
    this.modalConfirmarCadastroUsuarioAberto = true;
  }

  fecharModalConfirmarCadastroUsuario() {
    this.modalConfirmarCadastroUsuarioAberto = false
    this.carregarAdmins()
    this.fecharModalCadastrarUsuario();
  }

  abrirModalErroUsuario() {
    this.modalErroUsuarioAberto = true;
  }

  fecharModalErroUsuario() {
    this.modalErroUsuarioAberto = false;
  }

  submeter() {
    const { nome, sobrenome, email, senha } = this.admin;

    if (
      !nome?.trim() ||
      !sobrenome?.trim() ||
      !email?.trim() ||
      !senha?.trim()
    ) {
      this.abrirModalErroUsuario();
      return;
    }

    this.service.incluir(this.admin).subscribe(() => {
      this.abrirModalConfirmarCadastroUsuario();
    });
  }
}
