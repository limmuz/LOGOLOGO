import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-info-products',
  imports: [],
  templateUrl: './input-info-products.component.html',
  styleUrl: './input-info-products.component.css'
})
export class InputInfoProductsComponent {
  @Input() labelFor: string = ""
  @Input() textLabel: string = ""
  @Input() qtdCaracteres: string = ""
  @Input() inputPlaceholder: string = ""
  @Input() inputValue: string = ""
}
