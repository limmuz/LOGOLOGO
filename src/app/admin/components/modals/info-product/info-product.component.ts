import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonActionComponent } from '../../button-action/button-action.component';
import { InputInfoProductsComponent } from '../../input-info-products/input-info-products.component';
import { TextAreaInfoProductsComponent } from '../../text-area-info-products/text-area-info-products.component';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-product',
  imports: [
    FormsModule,
    CommonModule,
    ButtonActionComponent,
    InputInfoProductsComponent,
    TextAreaInfoProductsComponent,
  ],
  templateUrl: './info-product.component.html',
  styleUrls: ['../modals.styles.css', './info-product.component.css'],
})
export class InfoProductComponent {
  @Input() somenteLeitura: boolean = false;

  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  @Input() fundo: string = '';
  @Input() titulo: string = '';

  @Input() valorInputNome: string = '';
  @Output() valorInputNomeChange = new EventEmitter<string>();

  @Input() valorInputImagem: string = '';
  @Output() valorInputImagemChange = new EventEmitter<string>();

  @Input() valorTextArea: string = '';
  @Output() valorTextAreaChange = new EventEmitter<string>();

  @Input() quantidadeEstoque: string = '';
  @Output() quantidadeEstoqueChange = new EventEmitter<string>();

  @Input() tamanhoProduto: string = '';
  @Output() tamanhoProdutoChange = new EventEmitter<string>();

  @Input() precoProduto: string = '';
  @Output() precoProdutoChange = new EventEmitter<string>();

  isImageModalOpen = false;

  close() {
    this.isOpen = false;
    this.closed.emit();
  }

  onNomeChange(value: string) {
    this.valorInputNomeChange.emit(value);
  }

  onImagemChange(value: string) {
    this.valorInputImagemChange.emit(value);
  }

  onDescricaoChange(value: string) {
    this.valorTextAreaChange.emit(value);
  }

  onQuantidadeChange(value: string) {
    this.quantidadeEstoqueChange.emit(value);
  }

  onTamanhoChange(value: string) {
    this.tamanhoProdutoChange.emit(value);
  }

  onPrecoChange(value: string) {
    this.precoProdutoChange.emit(value);
  }

  openImageModal(): void {
    if (!this.valorInputImagem) {
      console.error('URL da imagem não definida');
      return;
    }

    // Verifica se é uma URL válida (http/https) ou caminho local (assets/)
    if (
      this.valorInputImagem.startsWith('http') ||
      this.valorInputImagem.startsWith('assets/') ||
      this.valorInputImagem.startsWith('./')
    ) {
      this.isImageModalOpen = true;
    } else {
      console.error('Formato de imagem inválido:', this.valorInputImagem);
      // Opcional: exibir mensagem para o usuário
    }
  }

  closeImageModal(): void {
    this.isImageModalOpen = false;
  }

  handleImageError() {
    console.error('Erro ao carregar imagem:', this.valorInputImagem);
    this.isImageModalOpen = false;
    // Opcional: exibir mensagem para o usuário
  }
}
