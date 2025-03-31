import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-box',
  imports: [],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css'
})
export class ProductBoxComponent {
  @Input() caminhoImagem: string = "";
  @Input() alt: string = "";
  @Input() preco: string = "";
}
