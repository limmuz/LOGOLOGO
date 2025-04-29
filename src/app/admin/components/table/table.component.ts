import { Component, OnInit } from '@angular/core';
import { ConfirmActionComponent } from "../modals/confirm-action/confirm-action.component";
import { InfoProductComponent } from "../modals/info-product/info-product.component";
import { ButtonActionComponent } from "../button-action/button-action.component";
import { Produto } from '../../../core/types/types';
import { ProdutoService } from '../../../core/services/produto.service';

@Component({
  selector: 'app-table',
  imports: [ConfirmActionComponent, InfoProductComponent, ButtonActionComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  listaProdutos: Produto[] = [];

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((produtos) => {
      this.listaProdutos = produtos;
    })
  }

  modalExclusaoAberto = false;
  modalInformacoesAberto = false;
  modalAlterarProdutoAberto = false
  modalConfirmarAlteracaoAberto = false

  abrirModalExclusao() {
    this.modalExclusaoAberto = true
  }

  fecharModalExclusao() {
    this.modalExclusaoAberto = false
  }

  abrirModalInformacoes() {
    this.modalInformacoesAberto = true
  }

  fecharModalInformacoes() {
    this.modalInformacoesAberto = false
  }

  abrirAlterarProduto() {
    this.modalAlterarProdutoAberto = true
  }
  
  fecharAlterarProduto() {
    this.modalAlterarProdutoAberto = false
  }

  abrirConfirmarAlteracaoProduto() {
    this.modalConfirmarAlteracaoAberto = true
  }
  
  fecharConfirmarAlteracaoProduto() {
    this.modalConfirmarAlteracaoAberto = false
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
