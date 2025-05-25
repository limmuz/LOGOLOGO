import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-info-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-info-products.component.html',
  styleUrl: './input-info-products.component.css'
})
export class InputInfoProductsComponent {
  @Input() labelFor: string = "";
  @Input() textLabel: string = "";
  @Input() disabled: boolean = false;
  @Input() qtdCaracteres: string = "";
  @Input() inputPlaceholder: string = "";

  @Input() inputValue: string = "";
  @Output() inputValueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputValueChange.emit(value);
  }
}
