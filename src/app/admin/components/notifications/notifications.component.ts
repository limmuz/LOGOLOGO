import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  @Input() borderColorClass : string = "";
  @Input() bgColorClass : string = "";
  @Input() IconType : string = "";
  @Input() textNotification : string = "";
}
