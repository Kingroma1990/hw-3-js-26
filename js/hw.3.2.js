"use strict";

// const countProps = function(obj) {
//   const key = Object.keys(obj);
//   return key.length;
// };

const countProps = obj => 
Object.keys(obj).length;

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
