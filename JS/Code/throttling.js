// execute this function at most once every 100 milliseconds
const throttle = (callback, interval) => {
  let allowEvents = true;

  return function () {
    let context = this;
    let args = arguments;

    if (allowEvents) {
      callback.apply(context, args);
      allowEvents = false;
      setTimeout(function () {
        // After a period of time
        allowEvents = true; // And allow future invocations
      }, interval);
    }
  };
};
