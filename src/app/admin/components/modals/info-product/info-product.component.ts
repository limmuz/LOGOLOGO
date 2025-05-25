import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonActionComponent } from "../../button-action/button-action.component";
import { InputInfoProductsComponent } from "../../input-info-products/input-info-products.component";
import { TextAreaInfoProductsComponent } from "../../text-area-info-products/text-area-info-products.component";

@Component({
  selector: 'app-info-product',
  imports: [CommonModule, ButtonActionComponent, InputInfoProductsComponent, TextAreaInfoProductsComponent],
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
}
