import { Component, Input, OnInit } from '@angular/core';
import { ConfirmActionComponent } from "../modals/confirm-action/confirm-action.component";
import { InfoProductComponent } from "../modals/info-product/info-product.component";
import { ButtonActionComponent } from "../button-action/button-action.component";
import { Produto } from '../../../core/types/types';
import { ProdutoService } from '../../../core/services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [ConfirmActionComponent, InfoProductComponent, ButtonActionComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  @Input() listaProdutos: Produto[] = [];

  produtoSelecionado: Produto = {
    nome: '',
    descricao: '',
    imagem: '',
    quantidade: '',
    tamanho: '',
    preco: ''
  };

  constructor(private service: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().subscribe((produtos) => {
      this.listaProdutos = produtos;
    })
  }

  modalExclusaoAberto = false;
  modalInformacoesAberto = false;
  modalAlterarProdutoAberto = false
  modalConfirmarAlteracaoAberto = false

  modalErroAlteracao = false

  abrirModalExclusao() {
    this.modalExclusaoAberto = true
  }

  fecharModalExclusao() {
    this.modalExclusaoAberto = false
  }

  abrirModalInformacoes(produto: Produto) {
    this.produtoSelecionado = produto;
    this.modalInformacoesAberto = true
  }

  fecharModalInformacoes() {
    this.modalInformacoesAberto = false
  }

  abrirAlterarProduto(produto: Produto) {
    this.produtoSelecionado = { ...produto }
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

  abrirModalErroAlteracao() {
    this.modalErroAlteracao = true
  }

  fecharModalErroAlteracao() {
    this.modalErroAlteracao = false
  }

  excluir(id: number) {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        this.listaProdutos = this.listaProdutos.filter(p => p.id !== id);
      });
    }
  }


  confirmarAlteracaoProduto() {
    if (
      !this.produtoSelecionado.nome?.trim() ||
      !this.produtoSelecionado.descricao?.trim() ||
      !this.produtoSelecionado.quantidade?.toString().trim() ||
      !this.produtoSelecionado.tamanho?.trim() ||
      !this.produtoSelecionado.preco?.toString().trim()
    ) {
      this.modalErroAlteracao = true;
      return;
    }

    if (this.produtoSelecionado && this.produtoSelecionado.id) {
      this.service.editar(this.produtoSelecionado).subscribe(() => {
        this.fecharAlterarProduto();

        this.service.listar().subscribe(produtos => {
          this.listaProdutos = produtos;
        });
      });
    }
  }
}
