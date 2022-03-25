import {uiConstants} from "../constants/ui.constants";

class NotificationService {

  static show(notification, component) {
    component.$eventBus.push(uiConstants.globalEvents.notification.show, notification);
  }

  static hide(id, component) {
    component.$eventBus.push(uiConstants.globalEvents.notification.hide, id);
  }

}

export {NotificationService}