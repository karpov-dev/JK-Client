class Notification {

  static isNotification(notification) {
    return notification instanceof this;
  }

  VARIANTS = {
    default: 'default',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    info: 'info'
  }

  id = null;
  timerId = null;

  title = null;
  description = null;
  variant = this.VARIANTS.default;
  timeout = 2000;
  isClosable = true;

  constructor(title, description, variant, timeout=2000, isClosable=true) {
    this.title = title;
    this.description = description;
    this.variant = variant;
    this.timeout = timeout;
    this.isClosable = isClosable;
  }

  set id(value) { return this.id = value; }
  get id() { return this.id; }
}

export {Notification}