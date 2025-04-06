import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonActionComponent } from "../../button-action/button-action.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-action',
  standalone: true,
  imports: [CommonModule, ButtonActionComponent],
  templateUrl: './confirm-action.component.html',
  styleUrls: [
    './confirm-action.component.css', 
    '../modals.styles.css'
  ]
})
export class ConfirmActionComponent {
  @Input() title:string = ""
  @Input() isOpen = false;
  @Input() showFooter = true;

  @Output() closed = new EventEmitter<void>();

  close() {
    this.isOpen = false;
    this.closed.emit();
  }
}
