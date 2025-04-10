import { Component } from '@angular/core';
import { AdminLayoutComponent } from "../../components/admin-layout/admin-layout.component";
import { NotificationsComponent } from "../../components/notifications/notifications.component";

@Component({
  selector: 'app-notification-admin',
  imports: [AdminLayoutComponent, NotificationsComponent],
  templateUrl: './notification-admin.component.html',
  styleUrl: './notification-admin.component.css'
})
export class NotificationAdminComponent {

}
