const fib = (num) => {
  let total;
  let a = 0;
  let b = 1;
  if (num === 0) return 0;
  if (num === 1) return 1;

  for (let i = 2; i <= num; i++) {
    total = b + a;
    a = b;
    b = total;
  }
  return total;
};
console.log(fib(9));

const fib_re = (num) => {
  if (num === 1) return 1;
  if (num === 0) return 0;
  return fib_re(num - 1) + fib_re(num - 2);
};
console.log(fib_re(9));
