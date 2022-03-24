// //These variables are SCOPED to the function
// function lol() {
//   let person = "Tom";
//   const age = 45;
//   var color = "teal";
//   console.log(age);
// }
// // These variables are SCOPED to changeColor()
// function changeColor() {
//   let color = "purple";
//   const age = 19;
//   console.log(age);
// }
// lol();
// changeColor();
// age; //DOES NOT EXIST!
// color; //DOES NOT EXIST!
// person; //DOES NOT EXIST!

// let bird = "mandarin duck";

// function birdWatch() {
//   //this bird is scoped to birdWatch()
//   let bird = "golden pheasant";
//   console.log(bird); //"golden pheasant"
// }
// birdWatch();
// console.log(bird); //"mandarin duck"

// let & const are BLOCK SCOPED
// if (true) {
//   const animal = "eel";
//   console.log(animal); //'eel'
// }
// console.log(animal); //NOT DEFINED!

// // VAR IS NOT BLOCK SCOPED
// if (true) {
//   var animal = "eel";
//   console.log(animal); //'eel'
// }
// console.log(animal); //'eel'

// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// var i = 10;
// for (var i = 0; i < animals.length; i++) {
//   console.log(i, animals[i])
// }
// console.log(i)

// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// let i = 10;
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i])
// }
// console.log(i)

// function doubleArr(arr) {
//   const result = []; //scoped to the doubleArr function
//   for (let num of arr) {
//     let double = num * 2; //scoped to this loop
//     result.push(double);
//   }
//   return result;
// }
// function outer() {
//   let movie = "Amadeus";

//   function inner() {
//     // let movie = "The Shining";

//     function extraInner() {
//       //movie is not defined in this function
//       //but it has access to parent function's variables
//       console.log(movie.toUpperCase());
//     }
//     extraInner();
//   }
//   inner();
// }

// outer(); //'AMADEUS'
// // Function Statement
// function add(x, y) {
//   return x + y;
// }

// // Function Expression (Anonymous)
// const sum = function (x, y) {
//   return x + y;
// };

// // Function Expression (Named)
// const product = function multiply(x, y) {
//   return x * y;
// };

// function add(x, y) {
//   return x + y;
// }

// const subtract = function (x, y) {
//   return x - y;
// };

// function multiply(x, y) {
//   return x * y;
// }

// const divide = function (x, y) {
//   return x / y;
// };

// //We can store functions in an array!
// const operations = [add, subtract, multiply, divide];

// //Loop over all the functions in operations
// for (let func of operations) {
//   let result = func(30, 5); //execute func!
//   console.log(result);
// }

// // We can also store functions in objects!
// const thing = {
//   doSomething: multiply,
// };
// thing.doSomething(4, 5); //20

// // This function accepts another function as an argument
// function callThreeTimes(f) {
//   //And calls it 3 times:
//   f();
//   f();
//   f();
// }

// function cry() {
//   console.log("BOO HOO I'M SO SAD!");
// }

// function rage() {
//   console.log("I HATE EVERYTHING!");
// }

// function repeatNTimes(action, num) {
//   // call action (a function) num number of times
//   for (let i = 0; i < num; i++) {
//     action();
//   }
// }

// repeatNTimes(rage, 13);

// // Accepts 2 functions as arguments
// // Randomly selects 1 to execute
// function pickOne(f1, f2) {
//   let rand = Math.random();
//   if (rand < 0.5) {
//     f1();
//   } else {
//     f2();
//   }
// }

// // This function returns a function!
// function multiplyBy(num) {
//   return function (x) {
//     return x * num;
//   };
// }

// //triple holds a function:
// const triple = multiplyBy(3);
// //we can call it:
// triple(4); //12
// triple(10); //30

// const double = multiplyBy(2);
// double(3); //6
// double(9); //18

// const halve = multiplyBy(0.5);
// halve(5); //2.5
// halve(100); //50

// // This function also acts as a "function factory"
// function makeBetweenFunc(x, y) {
//   return function (num) {
//     return num >= x && num <= y;
//   };
// }
// // This function checks if a value is between 0 and 18
// const isChild = makeBetweenFunc(0, 18);
// isChild(10); //true
// isChild(56); //false

// const isInNineties = makeBetweenFunc(1990, 1999);
// isInNineties(1994); //true
// isInNineties(1987); //false

// const isNiceWeather = makeBetweenFunc(60, 79);
// isNiceWeather(68); //true
// isNiceWeather(98); //false

// function grumpus() {
//   alert("GAHHH GO AWAY!");
// }

// // setTimeout(callback, delay)
// setTimeout(function () {
//   //we pass an anonymous callback function
//   alert("WELCOME!");
// }, 5000);

// //DON'T WORRY ABOUT ANY OF THIS SYNTAX!!
// const btn = document.querySelector("button");
// // JUST FOCUS ON THE CALLBACK WE PASS IN!
// btn.addEventListener("click", function () {
//   alert("WHY DID YOU CLICK ME!!??");
// });

// // variables declared with var are hoisted
// // console.log(animal);
// // var animal = 'Tapir';
// // console.log(animal);

// // variables declared with let & const are not hoisted
// // const shrimp = 'Harlequin Shrimp';
// // console.log(shrimp);

// // function statements are hoisted
// // howl();

// // function howl() {
// //   console.log("AWOOOOOOO");
// // }

// // function expressions are...kind of hoisted.
// // The variable is hoisted, but has a value of undefined
// hoot();
// var hoot = function () {
//   console.log("HOOOO HOOOOO");
// };
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// // Using anonymous function expression:
// numbers.forEach(function (num) {
//   console.log(num * 2);
// });

// function printTriple(n) {
//   console.log(n * 3);
// }

// // Using a pre-defined function:
// numbers.forEach(printTriple);

// // Using the index:
// numbers.forEach(function (num, idx) {
//   console.log(idx, num);
// });

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//   },
// ];

// // Printing all book titles using forEach:
// books.forEach(function (book) {
//   console.log(book.title.toUpperCase());
// });

// // Printing all book titles using for...of:
// for (let book of books) {
//   console.log(book.title.toUpperCase());
// }

// // Printing all book titles using for loop:
// for (let i = 0; i < books.length; i++) {
//   console.log(books[i].title.toUpperCase());
// }

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const words = ["asap", "byob", "rsvp", "diy"];

// //Map creates a new array by calling your callback function with each element in the original array.
// const doubles = numbers.map(function (num) {
//   return num * 2; //Need to return the value!
// });
// //[40, 42, 44, 46, 48, 50, 52, 54]

// const numDetail = numbers.map(function (n) {
//   return {
//     value: n,
//     isEven: n % 2 === 0,
//   };
// });

// const abbrevs = words.map(function (word) {
//   return word.toUpperCase().split("").join(".");
// });
// //["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//   },
// ];

// const titles = books.map(function (b) {
//   return b.title;
// });
// //["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]
//Non-arrow function expression:
// const square = function (x) {
//   return x * x;
// }

// Equivalent arrow function:
// const square = (x) => {
//   return x * x;
// };

// //parens are option when you have 1 parameter
// const isEven = (num) => {
//   return num % 2 === 0;
// };

// //Must include parens for multiple parameters
// const multiply = (x, y) => {
//   return x * y;
// };

// // Must include parens for zero parameters
// const greet = () => {
//   console.log("HI!");
// };

// // "Regular" arrow function:
// const square = (n) => {
//   return n * n;
// };
// // Implicit Return, on multiple lines using parens
// const square1 = (n) => n * n;

// // Implicit return one-liner:
// const square2 = (n) => n * n;

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// // ALL THREE VERSIONS GIVE US THE SAME RESULT:
// const doubles1 = nums.map(function (n) {
//   return n * 2;
// });

// const doubles2 = nums.map((n) => {
//   return n * 2;
// });

// const doubles3 = nums.map((n) => n * 2);

// const parityList = nums.map(function (n) {
//   if (n % 2 === 0) return "even";
//   return "odd";
// });

// const parityList1 = nums.map((n) => {
//   if (n % 2 === 0) return "even";
//   return "odd";
// });
// const parityList2 = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));

// const parityList3 = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));

let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];

// Find first movie that includes 'Mrs' in its title:
const movie = movies.find((movie) => {
  return movie.includes("Mrs");
});

//Find first movie that begins with 'Mrs':
const movie2 = movies.find((m) => m.indexOf("Mrs") === 0);

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];
//Find first book w/ rating over 4.3
const goodBook = books.find((b) => b.rating >= 4.3);

//Find first book with Neil Gaiman as an author:
const neilBook = books.find((b) => b.authors.includes("Neil Gaiman"));

const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter((n) => n % 2 === 1);
const evens = nums.filter((n) => n % 2 === 0);
const bigNums = nums.filter((n) => n > 50);

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

//All books rated over 4.3:
const goodBooks = books.filter((b) => b.rating > 4.3);

// All books with fantasy as a genre:
const fantasyBooks = books.filter((book) => book.genres.includes("fantasy"));

// all books that are either short stories or essays:
const shortForm = books.filter(
  (book) =>
    book.genres.includes("short stories") || book.genres.includes("essays")
);

// Simple search functionality:
const query = "The";
const results = books.filter((book) => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
});
