const user = {
  name: "avi",
  age: 23,
};

//1
function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys(user));

//2
function getValues(obj) {
  return Object.values(obj);
}
console.log(getValues(user));

//3
function getEntries(obj) {
  for (const item of Object.entries(obj)) {
    console.log(`${item[0]}: ${item[1]}`);
  }
}

getEntries(user);

//4
const grades = { math: 80, english: 90, science: 70 };
function average(obj) {
  const result =
    Object.values(obj).reduce((acc, current) => acc + current) /
    Object.keys(obj).length;
  return result;
}
console.log(average(grades));

//5
function merge(obj1, obj2) {
  const merged = Object.assign(obj1, obj2);
  return merged;
}
console.log(merge(user, grades));

//6
const light = { theme: "light", lang: "en" };
const userSet = { lang: "he" };
function integrated(defaultSet, userSet) {
  return { ...defaultSet, ...userSet };
}

console.log(integrated(light, userSet));

//7
function hasKey(obj, key) {
  return Object.hasOwn(obj, key);
}
console.log(hasKey(user, "name"));

//8
const config = Object.freeze({ name: "avi", age: 23 });
const city = { city: "elad" };

//9
function arrToObj(arr) {
  return Object.fromEntries(arr);
}

console.log(
  arrToObj([
    ["name", "Alice"],
    ["age", 25],
  ]),
);

//10
function priceChange(prices) {
  return Object.fromEntries(
    Object.entries(prices).map(([fruit, price]) => [fruit, price * 0.9]),
  );
}

console.log(priceChange({ apple: 10, banana: 5, mango: 20 }));

//11
function numberValues(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => typeof v === "number"),
  );
}

console.log(
  numberValues({
    name: "avi",
    age: 23,
  }),
);

//12
function shallowCopy(obj) {
  return { ...obj };
}

//13
function machingKeys(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length != keys2.length) {
    return false;
  }
  return keys1.every((key) => key in obj2);
}

console.log(
  machingKeys(
    {
      name: "avi",
      age: 23,
    },
    {
      name: "eli",
      age: 20,
    },
  ),
);
