const NOTIFICATION_VARIANTS = {
  default: 'default',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'info'
}

class Notification {

  static isNotification(notification) {
    return notification instanceof this;
  }

  id = null;
  timerId = null;

  title = null;
  description = null;
  variant = NOTIFICATION_VARIANTS.default;
  timeout = 6000;
  isClosable = true;

  constructor(title, description, variant, timeout=6000, isClosable=true) {
    this.id = +(new Date()).getTime();

    this.title = title;
    this.description = description;
    this.variant = variant;
    this.timeout = timeout;
    this.isClosable = isClosable;
  }

  set id(value) { return this.id = value; }
  get id() { return this.id; }
}

export {Notification, NOTIFICATION_VARIANTS}