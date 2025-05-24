import { Router, RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProductBoxComponent } from "../../components/product-box/product-box.component";
import { ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../../core/types/types';

@Component({
  selector: 'app-news',
  imports: [RouterModule, HeaderComponent, FooterComponent, ProductBoxComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  @Input() listaProdutos: Produto[] = [];

  produtoSelecionado: Produto = {
    nome: '',
    descricao: '',
    imagem: '',
    quantidade: '',
    tamanho: '',
    preco: ''
  };

  constructor(private service: ProdutoService, private router: Router
    
  ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((produtos) => {
      this.listaProdutos = produtos;
    })
  }
}
