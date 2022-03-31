import {Notification, NOTIFICATION_VARIANTS} from "./Notification";

class NotificationFactory {

  static getServerErrorNotification() {
    return new Notification('Internal Error', 'Internal server error. Contact with system administrator', NOTIFICATION_VARIANTS.danger);
  }

  static getNotificationFromErrorMessage(message) {
    return new Notification(message?.title, message?.message, NOTIFICATION_VARIANTS.danger);
  }

  static showFailedApiNotification(message, component) {
    const notification = NotificationFactory.getNotificationFromErrorMessage(message);
    component.$notification.show(notification, component);
  }

  static showServerErrorNotification(component) {
    const notification = NotificationFactory.getServerErrorNotification();
    component.$notification.show(notification, component);
  }

}

export {NotificationFactory}