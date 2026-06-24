const { add3, sub, multiply2 } = require("./export");

function div(a, b) {
  return a / b;
}
module.exports = { add3, sub, multiply, div };
