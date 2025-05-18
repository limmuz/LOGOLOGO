import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonActionComponent } from "../../button-action/button-action.component";
import { InputInfoProductsComponent } from "../../input-info-products/input-info-products.component";
import { TextAreaInfoProductsComponent } from "../../text-area-info-products/text-area-info-products.component";

import { FormsModule } from '@angular/forms';
import { Produto } from '../../../../core/types/types';
import { ProdutoService } from '../../../../core/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-product',
  imports: [FormsModule, CommonModule, ButtonActionComponent, InputInfoProductsComponent, TextAreaInfoProductsComponent],
  templateUrl: './info-product.component.html',
  styleUrls: [
    '../modals.styles.css',
    './info-product.component.css'
  ]
})
export class InfoProductComponent {
  @Input() title: string = ""
  @Input() isOpen = false;
  @Input() showFooter = true;

  @Input() produtoImagem: string = "";
  @Input() valorInputNome: string = "";
  @Input() valorTextArea: string = "";
  @Input() quantidadeEstoque: string = "";
  @Input() tamanhoProduto: string = "";
  @Input() precoProduto: string = "";

  @Output() closed = new EventEmitter<void>();

  close() {
    this.isOpen = false;
    this.closed.emit();
  }

  produtoId?: number

  produto: Produto = {} as Produto

  constructor(private service: ProdutoService, 
              private router: Router, 
              private route: ActivatedRoute) {
    this.produtoId = Number(this.route.snapshot.params['id'])

    if(this.produtoId) {
      service.buscarPorId(this.produtoId).subscribe(produto => {
        if(produto) {
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

  submeter() {
    if(this.produtoId) {
      this.service.editar(this.produto).subscribe(() => {
        this.router.navigate(['/produtos'])
      })
    } else {
      this.service.incluir(this.produto).subscribe(() => {
        this.router.navigate(['/pessoas'])
      })
    }
  }
}
