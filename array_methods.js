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

//29
const arr6 = [1, 2, 3, 4, 5];
arr6.splice(1, 2);
console.log(arr6);

//32
const nested = [1, [2]];
const flated = nested.flat(1);
console.log(flated);

//36
const arr7 = [1, 2, 3, 4, 5];
const fmArr7 = arr7
  .filter((num) => num % 2 == 0)
  .map((num) => num * 2)
  .reduce((acc, current) => acc + current);
console.log(fmArr7);

//38
const types = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }];
const groupedBy = types.reduce((acc, current, type) => {
  if (!acc[current["type"]]) {
    acc[current["type"]] = 1;
  } else {
    acc[current["type"]] += 1;
  }
  return acc;
}, {});
console.log(groupedBy);

//39
const arr8 = [1, 2, 4, 2, 6];
let flag = false;
for (const num of arr8) {
  if (arr8.includes(num, arr8.indexOf(num) + 1)) {
    flag = true;
    break;
  }
}

console.log(flag);
