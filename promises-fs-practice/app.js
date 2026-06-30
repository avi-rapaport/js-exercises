import fsp from "fs/promises";
import fs from "fs";

//1
const writeFileAsPromise = (filePath, content) =>
  new Promise((resolve, reject) =>
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        return reject(err);
      }
      resolve("file created successfully");
    }),
  );

writeFileAsPromise("data/message.txt", "hello world")
  .then((result) => console.log(result))
  .catch((err) => {
    console.log("failed to create file");
  });

//2
const readFileAsPromise = (filePath) =>
  new Promise((resolve, reject) =>
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    }),
  );

readFileAsPromise("data/message.txt")
  .then((content) => console.log(content))
  .catch((err) => {
    console.log("failed to read file");
  });

//3
const readFileAndCount = (filePath) =>
  new Promise((res, rej) =>
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return rej(err);
      }
      res(data.length);
    }),
  );

readFileAndCount("data/message.txt").then((content) => console.log(content));

//4 //5
const appendFileAsPromise = (filePath, content) =>
  new Promise((resolve, reject) =>
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    }),
  );

appendFileAsPromise("data/step1.txt", "step 1")
  .then(() => console.log("step 1 done!"))
  .then(() => appendFileAsPromise("data/step2.txt", "step 2"))
  .then(() => console.log("step 2 done!"))
  .then(() => appendFileAsPromise("data/step3.txt", "step 3"))
  .then(() => console.log("step 3 done!"))
  .catch((err) => console.log(err));

//7
const readText = (filepath) => fsp.readFile(filepath, "utf8");

readText("dat/message.txt").then(console.log).catch(console.error);

//8
const writeText = (path, content) => fsp.writeFile(path, content);
const readText = (path) => fsp.readFile(path, "utf8");

writeText("data/report-title.txt", "Daily report")
  .then(() => writeText("data/report-body.txt", "Everything is working"))
  .then(() =>
    Promise.all([
      readText("data/report-title.txt"),
      readText("data/report-body.txt"),
    ]),
  )
  .then(([title, body]) =>
    writeText("data/final-report.txt", `${title}\n${body}`),
  )
  .catch(console.error);

//9
const createUser = (userName) =>
  fsp.mkdir(`data/users/${userName}`, { recursive: true });

const writeProfile = (userName, data) =>
  fsp.writeFile(`data/users/${userName}/profile.txt`, data);

const readProfile = (userName) =>
  fsp.readFile(`data/users/${userName}/profile.txt`, "utf8");

createUser("avi")
  .then(() => writeProfile("avi", "name: avi\nage: 23"))
  .then(() => readProfile("avi"))
  .then(console.log)
  .catch(console.error);
