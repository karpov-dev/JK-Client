import {Notification, NOTIFICATION_VARIANTS} from "./Notification";

class NotificationFactory {

  static getServerErrorNotification() {
    return new Notification('Internal Error', 'Internal server error. Contact with system administrator', NOTIFICATION_VARIANTS.danger);
  }

  static getServerFiledNotification(message) {
    return new Notification(message?.title, message?.message, NOTIFICATION_VARIANTS.danger);
  }

}

export {NotificationFactory}