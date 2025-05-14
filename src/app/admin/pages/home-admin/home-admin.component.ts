import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableComponent } from "../../components/table/table.component";
import { InfoProductComponent } from "../../components/modals/info-product/info-product.component";
import { ButtonActionComponent } from "../../components/button-action/button-action.component";
import { ConfirmActionComponent } from "../../components/modals/confirm-action/confirm-action.component";

@Component({
  selector: 'app-home-admin',
  imports: [RouterModule, TableComponent, InfoProductComponent, ButtonActionComponent, ConfirmActionComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {
  @Input() nome: string = ""
  @Input() email: string = ""

  modalCadastrarProduto = false
  modalConfirmarCadastro = false

  abrirModalCadastrarProduto() {
    this.modalCadastrarProduto = true
  }

  fecharModalCadastrarProduto() {
    this.modalCadastrarProduto = false
  }

  abriModalConfirmarCadastro() {
    this.modalConfirmarCadastro = true
  }

  fecharModalConfirmarCadastro() {
    this.modalConfirmarCadastro = false
  }


  /*
  modalConfirmIsOpen = false;
  modalInfoIsOpen = false;

  openConfirmModal() {
    this.modalConfirmIsOpen = true;
  }

  openInfoModal() {
    this.modalInfoIsOpen = true;
  }

  onConfirmModalClosed() {
    this.modalConfirmIsOpen = false;
  }

  onInfoModalClosed() {
    this.modalInfoIsOpen = false;
  }

  */
}
