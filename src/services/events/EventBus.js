class EventBus {
  events = {};

  subscribe(eventName, handler) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(handler);
  }

  unsubscribe(eventName, handler) {
    if (this.events[eventName]) {
      const handlerIndex = this.events[eventName].findIndex(eventHandler => (eventHandler === handler));
      this.events.splice(handlerIndex, 1);
    }
  }

  push(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(eventHandler => eventHandler(data));
    }
  }
}

export {EventBus}