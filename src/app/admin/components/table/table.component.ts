import { Component } from '@angular/core';
import { ConfirmActionComponent } from "../modals/confirm-action/confirm-action.component";
import { InfoProductComponent } from "../modals/info-product/info-product.component";
import { ButtonActionComponent } from "../button-action/button-action.component";

@Component({
  selector: 'app-table',
  imports: [ConfirmActionComponent, InfoProductComponent, ButtonActionComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  modalConfirmIsOpen = false;
  modalInfoIsOpen = false;

  openConfirmModal() {
    this.modalConfirmIsOpen = true;
  }

  openInfoModal() {
    this.modalInfoIsOpen = true;
  }

  onConfirmModalClosed() {
    this.modalConfirmIsOpen = false;
  }

  onInfoModalClosed() {
    this.modalInfoIsOpen = false;
  }
}
