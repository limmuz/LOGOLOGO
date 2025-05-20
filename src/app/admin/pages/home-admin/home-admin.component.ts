import { Component, Input, OnInit } from '@angular/core';  // importei OnInit para lifecycle hook
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TableComponent } from "../../components/table/table.component";
import { InfoProductComponent } from "../../components/modals/info-product/info-product.component";
import { ButtonActionComponent } from "../../components/button-action/button-action.component";
import { ConfirmActionComponent } from "../../components/modals/confirm-action/confirm-action.component";
import { Produto } from '../../../core/types/types';
import { ProdutoService } from '../../../core/services/produto.service';

@Component({
  selector: 'app-home-admin',
  imports: [RouterModule, TableComponent, InfoProductComponent, ButtonActionComponent, ConfirmActionComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent implements OnInit {  // implementa OnInit

  @Input() nome: string = ""
  @Input() email: string = ""

  modalCadastrarProduto = false
  modalConfirmarCadastro = false

  modalErroCadastro = false

  listaProdutos: Produto[] = [];

  produtoId?: number

  produto: Produto = {} as Produto

  constructor(private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) {
    this.produtoId = Number(this.route.snapshot.params['id'])

    if (this.produtoId) {
      service.buscarPorId(this.produtoId).subscribe(produto => {
        if (produto) {
          this.produto.id = produto.id
          this.produto.imagem = produto.imagem
          this.produto.nome = produto.nome
          this.produto.descricao = produto.descricao
          this.produto.quantidade = produto.quantidade
          this.produto.tamanho = produto.tamanho
          this.produto.preco = produto.preco
        }
      })
    }
  }

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.service.listar().subscribe(produtos => {
      this.listaProdutos = produtos;
    });
  }

  abrirModalCadastrarProduto() {
    this.produto = {
      imagem: '',
      nome: '',
      descricao: '',
      quantidade: '',
      tamanho: '',
      preco: ''
    };
    this.modalCadastrarProduto = true
  }

  fecharModalCadastrarProduto() {
    this.modalCadastrarProduto = false
  }

  abriModalConfirmarCadastro() {
    this.modalConfirmarCadastro = true
  }

  fecharModalConfirmarCadastro() {
    this.modalConfirmarCadastro = false;
    this.carregarProdutos();            // atualiza a tabela
    this.fecharModalCadastrarProduto(); // fecha o modal de cadastro
  }

  abrirModalErroCadastro() {
    this.modalErroCadastro = true
  }

  fecharModalErroCadastro() {
    this.modalErroCadastro = false
  }

  submeter() {
    if (
      !this.produto.nome?.trim() ||
      !this.produto.descricao?.trim() ||
      !this.produto.quantidade?.toString().trim() ||
      !this.produto.tamanho?.trim() ||
      !this.produto.preco?.toString().trim() || 
      !this.produto.imagem?.trim()
    ) {
      this.modalErroCadastro = true
      return;
    }
    this.service.incluir(this.produto).subscribe(() => {
      this.modalConfirmarCadastro = true
    })
  }
}
