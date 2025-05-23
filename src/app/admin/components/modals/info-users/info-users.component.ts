import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputInfoProductsComponent } from "../../input-info-products/input-info-products.component";

@Component({
  selector: 'app-info-users',
  imports: [CommonModule, InputInfoProductsComponent],
  templateUrl: './info-users.component.html',
  styleUrls: [
    '../modals.styles.css', 
    './info-users.component.css'
  ]
})
export class InfoUsersComponent {
  @Input() somenteLeitura: boolean = false;

  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  close() {
    this.isOpen = false;
    this.closed.emit();
  }

  @Input() fundo: string = "";
  @Input() titulo: string = "";

  @Input() valorInputNome: string = "";
  @Output() valorInputNomeChange = new EventEmitter<string>();
  onNomeChange(value: string) {
    this.valorInputNomeChange.emit(value);
  }

  @Input() valorInputSobrenome: string = "";
  @Output() valorInputSobrenomeChange = new EventEmitter<string>();
  onSobrenomeChange(value: string) {
    this.valorInputSobrenomeChange.emit(value);
  }

  @Input() valorInputEmail: string = "";
  @Output() valorInputEmailChange = new EventEmitter<string>();
  onEmailChange(value: string) {
    this.valorInputEmailChange.emit(value);
  }

  @Input() valorInputSenha: string = "";
  @Output() valorInputSenhaChange = new EventEmitter<string>();
  onSenhaChange(value: string) {
    this.valorInputSenhaChange.emit(value);
  }
}
