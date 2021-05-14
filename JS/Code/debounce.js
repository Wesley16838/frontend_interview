// execute this function only if 100 milliseconds have passed without it being called
const debounce = function (func, interval) {
  let timerId;
  return function (e) {
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      func.apply();
    }, interval);
  };
};
debounce(apiCall, 3000);
