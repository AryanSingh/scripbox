// let count = 10;
//
// // for (let i = 0; i <= 9; i++) {
// //   setInterval(() => console.log(i), 1000);
// // }
//
// function printOne(count) {
//   let i = 0;
//   while (i <= count) {
//     (function (i) {
//       setTimeout(() => console.log(i), 1000 * i);
//     })(i);
//
//     i++;
//   }
// }
//
// // let i = 0;
// //
// // let interval = setInterval(() => {
// //   if (i < 10) {
// //     console.log(i);
// //     i++;
// //   } else {
// //     clearInterval(interval);
// //   }
// // }, 1000);
// // printOne(10);
//
// // try {
// //   let obj = {
// //     a: "apple",
// //     b: 2,
// //     c: [1, 2, 3],
// //     d: { e: 2, f: "apple" },
// //   };
// //   console.log(obj.h.i);
// // } catch (e) {
// //   console.log("do somethign");
// // }
//
// let test1 = {
//   a: "apple",
//   b: 2,
//   c: [1, 2, 3, { e: "banana" }],
//   d: { e: 2, f: "apple" },
// };
//
// function getFromObject(obj, str) {
//   let currentObj = obj;
//   let operations = str.split(".");
//   for (let i = 0; i < operations.length; i++) {
//     if (i === operations.length - 1) {
//       return currentObj[operations[i]];
//     }
//     if (Array.isArray(currentObj)) {
//       currentObj = currentObj[operations[i]];
//     } else if (obj[operations[i]] && typeof obj[operations[i]] === "object") {
//       currentObj = obj[operations[i]];
//     } else {
//       return undefined;
//     }
//   }
//   return currentObj;
// }
//
// console.log(getFromObject(test1, "d.f.g"));
//
// // lodash.get;
for (let i = 0; i < 5; i++) {
  (function (i) {
    // value i
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })(i);
}
