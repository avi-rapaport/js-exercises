import fs from "fs";

// //1
// const content = "Hello from Node fs!";

// fs.writeFile("data/message.txt", content, (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("File was created successfully");
// });

// //2
// fs.readFile("data/message.txt", "utf8", (err, data) => {
//   if (err) {
//      return console.log(err);
//   }
//    console.log(data);
//
// });

// //3
// console.log("Start");
// fs.readFile("data/message.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// console.log("End");

// //4
// fs.readFile("data/message.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Could not read file", err);
//   } else {
//     console.log(data);
//   }
// });

// //5
// function readTextFile(filePath, callback) {
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, data);
//     }
//   });
// }

// readTextFile("data/messag.txt", function (err, content) {
//   if (err) {
//     console.log("Error:", err);
//     return;
//   }

//   console.log(content);
// });

// //6
// const newContent = "\nThis line was added later.";

// fs.appendFile("data/message.txt", newContent, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   fs.readFile("data/message.txt", "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   });
// });

// //7
// fs.writeFile("data/log.txt", "log started", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const append = "\nFirst action completed\nSecond action completed";
//   fs.appendFile("data/log.txt", append, (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     fs.readFile("data/log.txt", "utf8", (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }

//       console.log(data);
//     });
//   });
// });

// //8
// fs.mkdir("data/users", { recursive: true }, (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("Users folder created");
// });

// //9
// const user = "Name: David\nAge: 25";
// if (fs.existsSync("data/users")) {
//   fs.writeFile("data/users/user1.txt", user, (err) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("File was created successfully");
//   });
// } else {
//   console.log("path doesn't exists!");
// }

// //10
// fs.readdir("data", (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// });

// //11
// fs.writeFile("data/step1.txt", "Step 1 completed\n", (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   fs.writeFile("data/step2.txt", "Step 2 completed\n", (err) => {
//     if (err) {
//       return console.log(err);
//     }
//     fs.writeFile("data/step3.txt", "Step 3 completed", (err) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log("All steps completed");
//     });
//   });
// });

// //12
// fs.readFile("data/step1.txt", "utf8", (err, data1) => {
//   if (err) {
//     return console.log(err);
//   }
//   fs.readFile("data/step2.txt", "utf8", (err, data2) => {
//     if (err) {
//       return console.log(err);
//     }
//     fs.readFile("data/step3.txt", "utf8", (err, data3) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log(`${data1}${data2}${data3}`);
//     });
//   });
// });

// //13
// fs.writeFile("data/report-title.txt", "Daily Report\n", (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   fs.writeFile("data/report-body.txt", "Everything is working\n", (err) => {
//     if (err) {
//       return console.log(err);
//     }
//     fs.readFile("data/report-title.txt", "utf8", (err, data1) => {
//       if (err) {
//         return console.log(err);
//       }
//       fs.readFile("data/report-body.txt", "utf8", (err, data2) => {
//         if (err) {
//           return console.log(err);
//         }
//         const content = data1 + data2;
//         fs.writeFile("data/final-report.txt", content, (err) => {
//           if (err) {
//             return console.log(err);
//           }
//         });
//       });
//     });
//   });
// });

// //14
// fs.writeFile("data/original.txt", "Original file content", (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   fs.readFile("data/original.txt", "utf8", (err, data1) => {
//     if (err) {
//       return console.log(err);
//     }
//     fs.writeFile("data/copy.txt", data1, (err) => {
//       if (err) {
//         return console.log(err);
//       }
//       fs.readFile("data/copy.txt", "utf8", (err, data2) => {
//         if (err) {
//           return console.log(err);
//         }
//         console.log(data2);
//       });
//     });
//   });
// });

//15
fs.mkdir("data/profile", (err) => {
  if (err) {
    return console.log(err);
  }
  fs.writeFile("data/profile/name.txt", "Yossi Cohen", (err) => {
    if (err) {
      return console.log(err);
    }
  });
});
