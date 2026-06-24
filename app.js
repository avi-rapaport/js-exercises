import { calculateSquare, formatMessage } from "./utils.js";

const number = 6;
const squareResult = calculateSquare(number);

const message = formatMessage(`The square of ${number} is ${squareResult}`);

console.log(message);
