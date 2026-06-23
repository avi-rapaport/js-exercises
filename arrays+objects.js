//1
const numbers = [1, 2, 3];
console.log(numbers);

//2
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
console.log(fruits[1]);

//3
fruits[1] = "mango";
console.log(fruits);

//4
const orange = fruits.push("orange");
console.log(orange);
console.log(fruits);

//5
const poped = fruits.pop();
console.log(poped);
console.log(fruits);

//6
fruits.unshift("kiwi");
console.log(fruits);

//7
fruits.shift();
console.log(fruits);

//8
const arr = ["a", "b", "c", "d"];
arr.splice(1, 1);
console.log(arr);

//9
arr.splice(1, 0, "x");
console.log(arr);

//10
arr.splice(2, 1, "y");
console.log(arr);

//11
const arr2 = [4, 1, 2];
console.log(arr2.length);
console.log(arr2[arr2.length - 1]);

//12
const arr3 = [1, "a", true];
console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);

//13
const nums = [10, 20, 30];
for (const num of nums) {
  console.log(num);
}

//14
const arr4 = [5, 10, 15];
let sum = 0;
for (const i of arr4) {
  sum += i;
}
console.log(sum);

//15
const arr5 = [3, 8, 12, 1];
for (const num of arr5) {
  if (num > 5) {
    console.log(num);
  }
}

//16
const person = { name: "Dan", age: 25 };
console.log(person);

//17
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);

//18
person.city = "elad";
person.name = "avi";
console.log(person);

//19
delete person.age;
console.log("age" in person);

//20
const student = {
  name: "Yael",
  grades: [90, 80, 100],
};
console.log(student.grades[0]);
student.grades.push(70);
student.grades.shift();
console.log(student.grades);

//21
const product = {
  name: "Laptop",
  price: 3500,
  inStock: true,
};
for (const key in product) {
  console.log(`${key}:${product[key]}`);
}

//22
const user = {
  username: "admin",
  role: "manager",
  active: true,
};

console.log(Object.keys(user));
console.log(Object.values(user));
for (const key in user) {
  console.log(`${key}=${user[key]}`);
}
//23
const order = {
  id: 101,
  customer: {
    name: "Roi",
    address: {
      city: "Tel Aviv",
      zip: "12345",
    },
  },
};

console.log(order.customer.address.city);
order.customer.address.zip = "678";
order.customer.phone = "0583589781";
delete order.customer.address.city;
console.log(order);
