import { Component, Input } from '@angular/core';
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

  submeter() {
    if (this.produtoId) {
      this.service.editar(this.produto).subscribe(() => {
        this.router.navigate(['/produtos']);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
    } else {
      this.service.incluir(this.produto).subscribe(() => {
        this.router.navigate(['/produtos']);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
    }
  }

}
