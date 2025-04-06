import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area-info-products',
  imports: [],
  templateUrl: './text-area-info-products.component.html',
  styleUrl: './text-area-info-products.component.css'
})
export class TextAreaInfoProductsComponent {
  @Input() labelFor: string = ""
  @Input() textLabel: string = ""
  @Input() textAreaPlaceholder: string = ""
  @Input() textAreaValue: string = ""
}
