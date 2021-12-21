let Sum = (a, b) => {
  let c;
  c = a + b;
  return c;
};

let Sub = (a, b) => {
  let c;
  c = a - b;
  return c;
};

let Div = (a, b) => {
  let c;
  c = a * b;
  return c;
};
let Mult = (a, b) => {
  let c;
  c = a / b;
  return c.toFixed(2);
};

export { Sum, Sub, Div, Mult };
