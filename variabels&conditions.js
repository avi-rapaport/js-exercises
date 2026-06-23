//1
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status);

//2
const number = 7;
if (number % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

//3
const isLoggedIn = true;
const message = isLoggedIn ? "wellcome" : "please login";
console.log(message);

//4
const num = -5;
if (num > 0) {
  console.log("positive");
} else if (num < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

//5
const a = 10;
const b = 20;
if (a > b) {
  console.log("a is bigger");
} else if (b > a) {
  console.log("b is bigger");
} else {
  console.log("theyr'e even");
}

//6
const password = "1234";
const correct = "1234";
const check = password === correct ? "access granted" : "access denide";
console.log(check);

//7
const x = 15;
console.log(x > 10 && x <= 20 ? true : false);

//8
const grade = 83;

if (grade >= 90) {
  console.log("מצוין");
} else if (75 <= grade <= 89) {
  console.log("טוב");
} else if (60 <= grade <= 74) {
  console.log("עובר");
} else {
  console.log("נכשל");
}

//9
const temp = 28;
if (temp > 30) {
  console.log("חם מאוד, שתה מים");
} else if (20 <= temp <= 30) {
  console.log("נעים בחוץ");
} else if (temp < 20) {
  console.log("קר, קח ג'קט");
}

//10
const theAge = 20;
const hasID = true;
if (theAge > 18 && hasID) {
  console.log("הכניסה מותרת");
} else {
  console.log("הכניסה אסורה");
}

//11
const isAdmin = false;
const isManager = true;
const permission = isAdmin && isManager ? "access granted" : "access denide";
console.log(permission);

//12
const hasCard = false;
const cardCheck = hasCard ? "access granted" : "access denide";
console.log(cardCheck);

//13
const name = "";
const userName = name || "guest";
console.log(userName);

//14
const arr = [];
const arrCheck = arr.length === 0 ? "empty" : "not empty";
console.log(arrCheck);

//15
const z = "5";
const y = 5;
console.log(z == y);
console.log(z === y);

//16
const username2 = "admin";
const password2 = "1234";
const correctUser = "avi";
const correctPass = "1234";
const authentication =
  password2 === correctPass && username2 === correctUser
    ? "access granted"
    : "access denide";
console.log(authentication);

//17
const dAge = 67;
if (dAge < 18) {
  console.log("הנחת נוער");
} else if (dAge >= 65) {
  console.log("הנחת גמלאים");
} else {
  console.log("אין הנחה");
}

//18
const day = "שני";
switch (day) {
  case "שבת":
  case "ראשון":
    console.log("סוף שבוע ");
    break;
  case "שני":
    console.log("תחילת יום עבודה");
    break;
  case "שישי":
    console.log("ערב שבת");
    break;
  default:
    console.log("יום רגיל");
}

//19
const total = 250;
if (total > 300) {
  console.log("משלוח חינם");
} else if (total > 150 && total < 300) {
  console.log("משלוח 20 ₪");
} else {
  console.log("משלוח 40 ₪");
}

//20
const role = "editor";
if (role === "admin") {
  console.log("כל הגישה");
} else if (role === "editor") {
  console.log("עריכה בלבד");
} else if (role === "viewer") {
  console.log("קריאה בלבד");
}
