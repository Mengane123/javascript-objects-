"use strict";

// functions
// function fruitprocessor(apple, orange) {
//   console.log(apple, orange);
//   const juice = `There are ${apple} apples and  ${orange} oranges`;
//   return juice;
// }

// const result = fruitprocessor(1, 9);
// console.log(result);

/////////////////////////

// functions declaration
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// const age1 = calcAge1(1999);
// console.log(age1);

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const age2 = calcAge2(1999);
// console.log(age2);

////////////////////
// arrow function
// here we did not use curly brackets because there was only single line of code for return function
// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 55 - age;
//   return `${firstName} has ${retirement} years left for retirement`;
// };

// console.log(yearsUntilRetirement(1970, "Prashant"));
// console.log(yearsUntilRetirement(1975, "Bob"));

/////////////////////

// function calling other function

// function cutPieces(fruit) {
//   return fruit * 4;
// }

// function fruitprocessor(apple, orange) {
//   const applePieces = cutPieces(apple);
//   const orangePieces = cutPieces(orange);

//   const juice = `There are ${applePieces} apple Pieces and  ${orangePieces} orange Pieces`;
//   return juice;
// }

// console.log(fruitprocessor(2, 3));

//////////////////////////

// reviewing function

// for this example we will use function expression

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 55 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} has ${retirement} years left for retirement`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
//   // return
// };

// console.log(yearsUntilRetirement(1970, "prashant"));
// console.log(yearsUntilRetirement(1950, "mike"));

//////////////////////////

// introduction to array

// saving data with variables which will be a problem if we have to save for 20-30 friends or more
// const friend1 = "Machael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// // now we will do with the help of array
// const friends = ["Machael", "Steven", "Peter"];

// // we can also write array like this
// const year = new Array(1999.1987, 2008, 2022);

// // to get the first Element
// console.log(friends[0]);
// console.log(friends[2]);

// // to get the total number of elements in the array
// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "prashant";
// const prashant = [firstName, "Mengane", 2022 - 1999, "programmer", friends];
// console.log(prashant);
// console.log(prashant.length);

// // exercise
// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years[0]));
// console.log(calcAge(years[1]));
// console.log(calcAge(years[years.length - 1]));

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

/////////////////////////////////////////
// methods in array
// const friends = ["Machael", "Steven", "Peter"];
// // ADD ELEMENTS
// const newLength = friends.push("jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// // REMOVE ELEMENTS
// friends.pop();
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("bob"));

// console.log(friends.includes("Steven"));
// console.log(friends.includes("bob"));

// if (friends.includes("Steven")) {
//   console.log("You are a good friend of Steven");
// }

/////////////////////////////////////////

// introduction to objects
// const prashant = {
//   firstName: "Prashant",
//   lastName: "Mengane",
//   age: 2022 - 1999,
//   job: "Programmer",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(prashant);

////////////////////////////////////////
// Dot vs bracket Notation
// we will learn how to retrive and change data using dot and bracket notation

// const prashant = {
//   firstName: "Prashant",
//   lastName: "Mengane",
//   age: 2022 - 1999,
//   job: "Programmer",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(prashant);

// // using dot notation
// console.log(prashant.firstName);

// // using bracket notation
// console.log(prashant["firstName"]);

// const nameKey = "Name";

// console.log(prashant["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know about prashant? choose from firstname,lastname,age,job,friends."
// );

// if (prashant[interestedIn]) {
//   console.log(prashant[interestedIn]);
// } else {
//   console.log("wrong input ! try again");
// }

// // challenge
// // prashant has 3 friends , and his best friends is called Michael
// console.log(
//   `${prashant.firstName} has ${prashant.friends.length} friends, and his best friend is called ${prashant.friends[0]}`
// );

///////////////////////////////////////////////

// // object methods
// const prashant = {
//   firstName: "Prashant",
//   lastName: "Mengane",
//   birthYear: 1999,
//   job: "Programmer",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2022 - birthYear;
//   // },
//   // using this keyword
//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2022 - this.birthYear;
//   // },
//   ///////////////
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   // we can also do this for the challenge
//   getSummary: function () {
//     return `${prashant.firstName} is a ${prashant.calcAge()}-year old ${
//       prashant.job
//     } , and he has ${
//       prashant.hasDriversLicense ? "a" : "no"
//     } driver's license.`;
//   },
// };

// console.log(prashant.calcAge());
// console.log(prashant.age);
// console.log(prashant.age);
// console.log(prashant.age);

// // challenge
// console.log(prashant.getSummary());

// // challenge
// // prashant is a 23-year old programmer , and he has a driver's license.
// const challenge = `${prashant.firstName} is a ${prashant.age}-year old ${
//   prashant.job
// } , and he has ${prashant.hasDriversLicense ? "a" : "no"} driver's license.`;
// console.log(challenge);
