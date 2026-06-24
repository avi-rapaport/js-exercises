import { multiply } from "./math.js";

export function calculateSquare(num) {
  return multiply(num, num);
}

export function formatMessage(text) {
  return `[LOG]: ${text}`;
}
