//1
const arr = [1, 2, 3, 4, 5];
const double = arr.map((num) => num * 2);
console.log(double);

//2
const arr2 = ["hello", "world"];
arr2.forEach((str, i) => (arr2[i] = str.toUpperCase()));
console.log(arr2);

//4
const arr3 = [1, 2, 3, 4, 5, 6];
const fArr3 = arr3.filter((num) => num % 2 == 0);
console.log(fArr3);

//8
const prices = [10, 50, 105, 80];
const fmPrices = prices
  .filter((price) => price > 100)
  .map((price) => price + price * 0.1);
console.log(fmPrices);

//10
const arr4 = [10, 20, 30];
const product = arr4.reduce((acc, current) => acc * current);
console.log(product);

//12
const ages = [23, 54, 13];
const average = ages.reduce((acc, current) => acc + current) / ages.length;
console.log(average);

//25
const arr5 = [10, 50, 105, 80];
const desc = arr5.sort((a, b) => b - a);
console.log(desc);
