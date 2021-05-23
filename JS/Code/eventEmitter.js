// const emitter = new EventEmitter();
// const sub = emitter.subscribe(eventName, callback); // typeof eventName === string
// emitter.emit(eventName, a, b, c, d, ...);
// sub.unsubscribe();

class EventEmmiter {
  constructor() {
    this._event = {};
  }
  addListener(name, listener) {
    if (!this._event[name]) this._event[name] = [];
    this._event[name].push(listener);
  }

  removeListener(name, removeListener) {
    if (!this._event[name])
      throw new Error(
        `Can't remove a listener. Event "${name}" doesn't exits.`
      );
    this._event[name] = this._event[name].filter(
      (listener) => listener !== removeListener
    );
  }

  emit(name, data) {
    if (!this._event[name])
      throw new Error(`Can't emit a listener. Event "${name}" doesn't exits.`);
    this._event[name].forEach((fn) => fn(data));
  }
}

const myEventEmitter = new MyEventEmitter();
const handleMyEvent = (data) => {
  console.log("test event!!" + data);
};
myEventEmitter.addListener("testEvent", handleMyEvent);

myEventEmitter.emit("testEvent", "Yo");

myEventEmitter.removeListener("testEvent", handleMyEvent);

class EventEmitterNext {
  constructor() {
    this.callbacks = new Map(); // {eventName: callback, ...}
  }

  subscribe(eventName, callback) {
    this.callbacks.set(eventName, callback);
    return {
      unsubscribe: () => this.callbacks.delete(eventName),
    };
  }

  emit(eventName, ...params) {
    if (this.callbacks.has(eventName)) {
      this.callbacks.get(eventName).apply(null, params);
    }
  }
}
