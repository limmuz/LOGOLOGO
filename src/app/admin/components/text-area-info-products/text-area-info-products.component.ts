import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-area-info-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text-area-info-products.component.html',
  styleUrl: './text-area-info-products.component.css'
})
export class TextAreaInfoProductsComponent {
  @Input() labelFor: string = "";
  @Input() textLabel: string = "";
  @Input() disabled: boolean = false;
  @Input() textAreaPlaceholder: string = "";

  @Input() textAreaValue: string = "";
  @Output() textAreaValueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.textAreaValueChange.emit(value);
  }
}
