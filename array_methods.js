//1
const arr = [1, 2, 3, 4, 5];
const double = arr.map((num) => num * 2);
console.log(double);

//2
const arr2 = ["hello", "world"];
arr2.forEach((str, i) => (arr2[i] = str.toUpperCase()));
console.log(arr2);
