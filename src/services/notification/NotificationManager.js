import {Notification} from "./Notification";

class NotificationManager {

  notifications = [];

  add(notification) {
    if (!Notification.isNotification(notification)) return;

    notification.timerId = setTimeout(() => {this.remove(notification.id)}, notification.timeout);

    this.notifications.push(notification);
  }

  remove(id) {
    const notificationIndex = this.notifications.findIndex(notification => notification.id === id);
    const notificationTimerId = this.notifications?.[notificationIndex].timerId;

    this.notifications.splice(notificationIndex, 1);
    clearTimeout(notificationTimerId);
  }
}

export {NotificationManager}