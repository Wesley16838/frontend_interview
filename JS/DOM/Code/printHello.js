const printHello = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello World");
      resolve();
    }, 4000);
  });
};

async function print() {
  await printHello();
}
print();
