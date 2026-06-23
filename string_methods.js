//1
const s = " hello world ";
console.log(s);
const sTrim = s.trim();
console.log(sTrim);

//2
const email = "user@gmail.com";
console.log(email.includes("@"));

//3
const java = "javascript";
const upJava = java.toUpperCase();
console.log(upJava);

//4
const hello = "HELLO WORLD";
const lowHello = hello.toLowerCase();
console.log(lowHello);

//6
const java2 = "JavaScript";
const sJava = java2.slice(0, 4);
console.log(sJava);

//7
const str = "JavaScript";
const sliced = str.slice(-6);
console.log(sliced);

//8
const http = "https://example.com";
console.log(http.startsWith("https"));

//9
const url = "mywebsite.org";
console.log(url.endsWith(".com"));

//10
const shalom = "שלום עולם";
const replaced = shalom.replace("שלום", "היי");
console.log(replaced);

//11
const banana = "banana";
const replaced2 = banana.replaceAll("a", "o");
console.log(replaced2);

//12
const str2 = "one two three";
const splited = str2.split(" ");
console.log(splited);

//13
const fruits = "apple,banana,grape";
const splited2 = fruits.split(",", 2);
console.log(splited2);

//14
const banana2 = "banana";
console.log(banana2.indexOf("a"));

//15
console.log(banana2.lastIndexOf("a"));

//16
const seven = "7";
const padSeven = seven.padStart(3, 0);
console.log(padSeven);

//19
const hello2 = "Hello";
console.log(hello2.charAt(0));

//20
console.log(hello2.at(-1));

//21
const shalom2 = "שלום";
const olam = "עולם";
const shalomOlam = shalom2.concat(" ", olam);
console.log(shalomOlam);

//22
const java3 = "JavaScript";
const sub = java3.substring(2, 6);
console.log(sub);
