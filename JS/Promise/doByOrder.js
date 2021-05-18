// implement the doByOrder function,  the expected output is ['a', 'b', 'c']

const a = (callback) => {
  setTimeout(() => {
    callback("a");
  }, 500);
};

const b = (callback) => {
  setTimeout(() => {
    callback("b");
  }, 500);
};

const c = (callback) => {
  setTimeout(() => {
    callback("c");
  }, 500);
};

const tasks = [a, b, c];

doByOrder(tasks, console.log.bind(console));

// 1. callback
function doByOrder(tasks, callback) {
  tasks[0]((value) => {
    callback(value);
    tasks[1]((value) => {
      callback(value);
      tasks[2]((value) => {
        callback(value);
      });
    });
  });
}

// 2. async
async function doByOrder(tasks, callback) {
  for (const task of tasks) {
    await new Promise((resolve) => {
      task((value) => {
        callback(value);
        resolve();
      });
    });
  }
}

// 3. promise then
function doByOrder(tasks, callback) {
  function execute(task) {
    return new Promise((resolve) => {
      task((value) => {
        callback(value);
        resolve();
      });
    });
  }

  execute(tasks[0])
    .then(() => execute(tasks[1]))
    .then(() => execute(tasks[2]));
}
