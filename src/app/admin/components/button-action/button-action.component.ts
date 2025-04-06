import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-action',
  imports: [],
  templateUrl: './button-action.component.html',
  styleUrl: './button-action.component.css'
})
export class ButtonActionComponent {
  @Input() cor:string = ""
}
