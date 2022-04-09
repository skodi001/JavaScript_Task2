// // //These variables are SCOPED to the function
// // function lol() {
// //   let person = "Tom";
// //   const age = 45;
// //   var color = "teal";
// //   console.log(age);
// // }
// // // These variables are SCOPED to changeColor()
// // function changeColor() {
// //   let color = "purple";
// //   const age = 19;
// //   console.log(age);
// // }
// // lol();
// // changeColor();
// // age; //DOES NOT EXIST!
// // color; //DOES NOT EXIST!
// // person; //DOES NOT EXIST!

// // let bird = "mandarin duck";

// // function birdWatch() {
// //   //this bird is scoped to birdWatch()
// //   let bird = "golden pheasant";
// //   console.log(bird); //"golden pheasant"
// // }
// // birdWatch();
// // console.log(bird); //"mandarin duck"

// // let & const are BLOCK SCOPED
// // if (true) {
// //   const animal = "eel";
// //   console.log(animal); //'eel'
// // }
// // console.log(animal); //NOT DEFINED!

// // // VAR IS NOT BLOCK SCOPED
// // if (true) {
// //   var animal = "eel";
// //   console.log(animal); //'eel'
// // }
// // console.log(animal); //'eel'

// // let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// // var i = 10;
// // for (var i = 0; i < animals.length; i++) {
// //   console.log(i, animals[i])
// // }
// // console.log(i)

// // let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// // let i = 10;
// // for (let i = 0; i < animals.length; i++) {
// //   console.log(i, animals[i])
// // }
// // console.log(i)

// // function doubleArr(arr) {
// //   const result = []; //scoped to the doubleArr function
// //   for (let num of arr) {
// //     let double = num * 2; //scoped to this loop
// //     result.push(double);
// //   }
// //   return result;
// // }
// // function outer() {
// //   let movie = "Amadeus";

// //   function inner() {
// //     // let movie = "The Shining";

// //     function extraInner() {
// //       //movie is not defined in this function
// //       //but it has access to parent function's variables
// //       console.log(movie.toUpperCase());
// //     }
// //     extraInner();
// //   }
// //   inner();
// // }

// // outer(); //'AMADEUS'
// // // Function Statement
// // function add(x, y) {
// //   return x + y;
// // }

// // // Function Expression (Anonymous)
// // const sum = function (x, y) {
// //   return x + y;
// // };

// // // Function Expression (Named)
// // const product = function multiply(x, y) {
// //   return x * y;
// // };

// // function add(x, y) {
// //   return x + y;
// // }

// // const subtract = function (x, y) {
// //   return x - y;
// // };

// // function multiply(x, y) {
// //   return x * y;
// // }

// // const divide = function (x, y) {
// //   return x / y;
// // };

// // //We can store functions in an array!
// // const operations = [add, subtract, multiply, divide];

// // //Loop over all the functions in operations
// // for (let func of operations) {
// //   let result = func(30, 5); //execute func!
// //   console.log(result);
// // }

// // // We can also store functions in objects!
// // const thing = {
// //   doSomething: multiply,
// // };
// // thing.doSomething(4, 5); //20

// // // This function accepts another function as an argument
// // function callThreeTimes(f) {
// //   //And calls it 3 times:
// //   f();
// //   f();
// //   f();
// // }

// // function cry() {
// //   console.log("BOO HOO I'M SO SAD!");
// // }

// // function rage() {
// //   console.log("I HATE EVERYTHING!");
// // }

// // function repeatNTimes(action, num) {
// //   // call action (a function) num number of times
// //   for (let i = 0; i < num; i++) {
// //     action();
// //   }
// // }

// // repeatNTimes(rage, 13);

// // // Accepts 2 functions as arguments
// // // Randomly selects 1 to execute
// // function pickOne(f1, f2) {
// //   let rand = Math.random();
// //   if (rand < 0.5) {
// //     f1();
// //   } else {
// //     f2();
// //   }
// // }

// // // This function returns a function!
// // function multiplyBy(num) {
// //   return function (x) {
// //     return x * num;
// //   };
// // }

// // //triple holds a function:
// // const triple = multiplyBy(3);
// // //we can call it:
// // triple(4); //12
// // triple(10); //30

// // const double = multiplyBy(2);
// // double(3); //6
// // double(9); //18

// // const halve = multiplyBy(0.5);
// // halve(5); //2.5
// // halve(100); //50

// // // This function also acts as a "function factory"
// // function makeBetweenFunc(x, y) {
// //   return function (num) {
// //     return num >= x && num <= y;
// //   };
// // }
// // // This function checks if a value is between 0 and 18
// // const isChild = makeBetweenFunc(0, 18);
// // isChild(10); //true
// // isChild(56); //false

// // const isInNineties = makeBetweenFunc(1990, 1999);
// // isInNineties(1994); //true
// // isInNineties(1987); //false

// // const isNiceWeather = makeBetweenFunc(60, 79);
// // isNiceWeather(68); //true
// // isNiceWeather(98); //false

// // function grumpus() {
// //   alert("GAHHH GO AWAY!");
// // }

// // // setTimeout(callback, delay)
// // setTimeout(function () {
// //   //we pass an anonymous callback function
// //   alert("WELCOME!");
// // }, 5000);

// // //DON'T WORRY ABOUT ANY OF THIS SYNTAX!!
// // const btn = document.querySelector("button");
// // // JUST FOCUS ON THE CALLBACK WE PASS IN!
// // btn.addEventListener("click", function () {
// //   alert("WHY DID YOU CLICK ME!!??");
// // });

// // // variables declared with var are hoisted
// // // console.log(animal);
// // // var animal = 'Tapir';
// // // console.log(animal);

// // // variables declared with let & const are not hoisted
// // // const shrimp = 'Harlequin Shrimp';
// // // console.log(shrimp);

// // // function statements are hoisted
// // // howl();

// // // function howl() {
// // //   console.log("AWOOOOOOO");
// // // }

// // // function expressions are...kind of hoisted.
// // // The variable is hoisted, but has a value of undefined
// // hoot();
// // var hoot = function () {
// //   console.log("HOOOO HOOOOO");
// // };
// // const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// // // Using anonymous function expression:
// // numbers.forEach(function (num) {
// //   console.log(num * 2);
// // });

// // function printTriple(n) {
// //   console.log(n * 3);
// // }

// // // Using a pre-defined function:
// // numbers.forEach(printTriple);

// // // Using the index:
// // numbers.forEach(function (num, idx) {
// //   console.log(idx, num);
// // });

// // const books = [
// //   {
// //     title: "Good Omens",
// //     authors: ["Terry Pratchett", "Neil Gaiman"],
// //     rating: 4.25,
// //   },
// //   {
// //     title: "Bone: The Complete Edition",
// //     authors: ["Jeff Smith"],
// //     rating: 4.42,
// //   },
// //   {
// //     title: "American Gods",
// //     authors: ["Neil Gaiman"],
// //     rating: 4.11,
// //   },
// //   {
// //     title: "A Gentleman in Moscow",
// //     authors: ["Amor Towles"],
// //     rating: 4.36,
// //   },
// // ];

// // // Printing all book titles using forEach:
// // books.forEach(function (book) {
// //   console.log(book.title.toUpperCase());
// // });

// // // Printing all book titles using for...of:
// // for (let book of books) {
// //   console.log(book.title.toUpperCase());
// // }

// // // Printing all book titles using for loop:
// // for (let i = 0; i < books.length; i++) {
// //   console.log(books[i].title.toUpperCase());
// // }

// // const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// // const words = ["asap", "byob", "rsvp", "diy"];

// // //Map creates a new array by calling your callback function with each element in the original array.
// // const doubles = numbers.map(function (num) {
// //   return num * 2; //Need to return the value!
// // });
// // //[40, 42, 44, 46, 48, 50, 52, 54]

// // const numDetail = numbers.map(function (n) {
// //   return {
// //     value: n,
// //     isEven: n % 2 === 0,
// //   };
// // });

// // const abbrevs = words.map(function (word) {
// //   return word.toUpperCase().split("").join(".");
// // });
// // //["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]

// // const books = [
// //   {
// //     title: "Good Omens",
// //     authors: ["Terry Pratchett", "Neil Gaiman"],
// //     rating: 4.25,
// //   },
// //   {
// //     title: "Bone: The Complete Edition",
// //     authors: ["Jeff Smith"],
// //     rating: 4.42,
// //   },
// //   {
// //     title: "American Gods",
// //     authors: ["Neil Gaiman"],
// //     rating: 4.11,
// //   },
// //   {
// //     title: "A Gentleman in Moscow",
// //     authors: ["Amor Towles"],
// //     rating: 4.36,
// //   },
// // ];

// // const titles = books.map(function (b) {
// //   return b.title;
// // });
// // //["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]
// //Non-arrow function expression:
// // const square = function (x) {
// //   return x * x;
// // }

// // Equivalent arrow function:
// // const square = (x) => {
// //   return x * x;
// // };

// // //parens are option when you have 1 parameter
// // const isEven = (num) => {
// //   return num % 2 === 0;
// // };

// // //Must include parens for multiple parameters
// // const multiply = (x, y) => {
// //   return x * y;
// // };

// // // Must include parens for zero parameters
// // const greet = () => {
// //   console.log("HI!");
// // };

// // // "Regular" arrow function:
// // const square = (n) => {
// //   return n * n;
// // };
// // // Implicit Return, on multiple lines using parens
// // const square1 = (n) => n * n;

// // // Implicit return one-liner:
// // const square2 = (n) => n * n;

// // const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// // // ALL THREE VERSIONS GIVE US THE SAME RESULT:
// // const doubles1 = nums.map(function (n) {
// //   return n * 2;
// // });

// // const doubles2 = nums.map((n) => {
// //   return n * 2;
// // });

// // const doubles3 = nums.map((n) => n * 2);

// // const parityList = nums.map(function (n) {
// //   if (n % 2 === 0) return "even";
// //   return "odd";
// // });

// // const parityList1 = nums.map((n) => {
// //   if (n % 2 === 0) return "even";
// //   return "odd";
// // });
// // const parityList2 = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));

// // const parityList3 = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));

// // let movies = [
// //   "The Fantastic Mr. Fox",
// //   "Mr. and Mrs. Smith",
// //   "Mrs. Doubtfire",
// //   "Mr. Deeds",
// // ];

// // // Find first movie that includes 'Mrs' in its title:
// // const movie = movies.find((movie) => {
// //   return movie.includes("Mrs");
// // });

// // //Find first movie that begins with 'Mrs':
// // const movie2 = movies.find((m) => m.indexOf("Mrs") === 0);

// // const books = [
// //   {
// //     title: "Good Omens",
// //     authors: ["Terry Pratchett", "Neil Gaiman"],
// //     rating: 4.25,
// //   },
// //   {
// //     title: "Bone: The Complete Edition",
// //     authors: ["Jeff Smith"],
// //     rating: 4.42,
// //   },
// //   {
// //     title: "American Gods",
// //     authors: ["Neil Gaiman"],
// //     rating: 4.11,
// //   },
// //   {
// //     title: "A Gentleman in Moscow",
// //     authors: ["Amor Towles"],
// //     rating: 4.36,
// //   },
// // ];
// // //Find first book w/ rating over 4.3
// // const goodBook = books.find((b) => b.rating >= 4.3);

// // //Find first book with Neil Gaiman as an author:
// // const neilBook = books.find((b) => b.authors.includes("Neil Gaiman"));

// // const nums = [34, 35, 67, 54, 109, 102, 32, 9];

// // const odds = nums.filter((n) => n % 2 === 1);
// // const evens = nums.filter((n) => n % 2 === 0);
// // const bigNums = nums.filter((n) => n > 50);

// // const books = [
// //   {
// //     title: "Good Omens",
// //     authors: ["Terry Pratchett", "Neil Gaiman"],
// //     rating: 4.25,
// //     genres: ["fiction", "fantasy"],
// //   },
// //   {
// //     title: "Changing My Mind",
// //     authors: ["Zadie Smith"],
// //     rating: 3.83,
// //     genres: ["nonfiction", "essays"],
// //   },
// //   {
// //     title: "Bone: The Complete Edition",
// //     authors: ["Jeff Smith"],
// //     rating: 4.42,
// //     genres: ["fiction", "graphic novel", "fantasy"],
// //   },
// //   {
// //     title: "American Gods",
// //     authors: ["Neil Gaiman"],
// //     rating: 4.11,
// //     genres: ["fiction", "fantasy"],
// //   },
// //   {
// //     title: "A Gentleman in Moscow",
// //     authors: ["Amor Towles"],
// //     rating: 4.36,
// //     genres: ["fiction", "historical fiction"],
// //   },
// //   {
// //     title: "The Name of the Wind",
// //     authors: ["Patrick Rothfuss"],
// //     rating: 4.54,
// //     genres: ["fiction", "fantasy"],
// //   },
// //   {
// //     title: "The Overstory",
// //     authors: ["Richard Powers"],
// //     rating: 4.19,
// //     genres: ["fiction", "short stories"],
// //   },
// //   {
// //     title: "The Way of Kings",
// //     authors: ["Brandon Sanderson"],
// //     rating: 4.65,
// //     genres: ["fantasy", "epic"],
// //   },
// //   {
// //     title: "Lord of the flies",
// //     authors: ["William Golding"],
// //     rating: 3.67,
// //     genres: ["fiction"],
// //   },
// // ];

// // //All books rated over 4.3:
// // const goodBooks = books.filter((b) => b.rating > 4.3);

// // // All books with fantasy as a genre:
// // const fantasyBooks = books.filter((book) => book.genres.includes("fantasy"));

// // // all books that are either short stories or essays:
// // const shortForm = books.filter(
// //   (book) =>
// //     book.genres.includes("short stories") || book.genres.includes("essays")
// // );

// // // Simple search functionality:
// // const query = "The";
// // const results = books.filter((book) => {
// //   const title = book.title.toLowerCase();
// //   return title.includes(query.toLowerCase());
// // });

// // const words = ["dog", "dig", "log", "bag", "wag"];

// // //Is every word 3 characters long?
// // const all3Letters = words.every((word) => word.length === 3);

// // // Do all words end in 'g'?
// // const allEndInG = words.every((word) => {
// //   const last = word.length - 1;
// //   return word[last] === "g";
// // });

// // //Does at least 1 book start with 'd'?
// // const someStartWithD = words.some((word) => word[0] === "d");

// // // Do all words start with 'd'?
// // const allStartWithD = words.every((word) => word[0] === "d");

// // const books = [
// //   {
// //     title: "Good Omens",
// //     authors: ["Terry Pratchett", "Neil Gaiman"],
// //     rating: 4.25,
// //     genres: ["fiction", "fantasy"],
// //   },
// //   {
// //     title: "Changing My Mind",
// //     authors: ["Zadie Smith"],
// //     rating: 3.83,
// //     genres: ["nonfiction", "essays"],
// //   },
// //   {
// //     title: "Bone: The Complete Edition",
// //     authors: ["Jeff Smith"],
// //     rating: 4.42,
// //     genres: ["fiction", "graphic novel", "fantasy"],
// //   },
// //   {
// //     title: "American Gods",
// //     authors: ["Neil Gaiman"],
// //     rating: 4.11,
// //     genres: ["fiction", "fantasy"],
// //   },
// //   {
// //     title: "A Gentleman in Moscow",
// //     authors: ["Amor Towles"],
// //     rating: 4.36,
// //     genres: ["fiction", "historical fiction"],
// //   },
// //   {
// //     title: "The Name of the Wind",
// //     authors: ["Patrick Rothfuss"],
// //     rating: 4.54,
// //     genres: ["fiction", "fantasy"],
// //   },
// //   {
// //     title: "The Overstory",
// //     authors: ["Richard Powers"],
// //     rating: 4.19,
// //     genres: ["fiction", "short stories"],
// //   },
// //   {
// //     title: "The Way of Kings",
// //     authors: ["Brandon Sanderson"],
// //     rating: 4.65,
// //     genres: ["fantasy", "epic"],
// //   },
// //   {
// //     title: "Lord of the flies",
// //     authors: ["William Golding"],
// //     rating: 3.67,
// //     genres: ["fiction"],
// //   },
// // ];
// // //Are all books rated 3.5 or higher?
// // const allGoodBooks = books.every((book) => book.rating > 3.5);

// // //Do any books have 2 authors?
// // const any2Authors = books.some((book) => book.authors.length === 2);

// // const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];
// // // REMEMBER THAT SORT() MUTATES THE ORIGINAL ARRAY!
// // // I'm using slice() to create a new copy, otherwise we would be sorting the same array 3 times:

// // // Default string sort :(
// // const badSort = prices.slice().sort();

// // // Ascending Sort:
// // const ascSort = prices.slice().sort((a, b) => a - b);

// // // Descending Sort:
// // const descSort = prices.slice().sort((a, b) => b - a);

// // const books = [
// //   {
// //     title: "Good Omens",
// //     authors: ["Terry Pratchett", "Neil Gaiman"],
// //     rating: 4.25,
// //     genres: ["fiction", "fantasy"],
// //   },
// //   {
// //     title: "Changing My Mind",
// //     authors: ["Zadie Smith"],
// //     rating: 3.83,
// //     genres: ["nonfiction", "essays"],
// //   },
// //   {
// //     title: "Bone: The Complete Edition",
// //     authors: ["Jeff Smith"],
// //     rating: 4.42,
// //     genres: ["fiction", "graphic novel", "fantasy"],
// //   },
// //   {
// //     title: "American Gods",
// //     authors: ["Neil Gaiman"],
// //     rating: 4.11,
// //     genres: ["fiction", "fantasy"],
// //   },
// //   {
// //     title: "A Gentleman in Moscow",
// //     authors: ["Amor Towles"],
// //     rating: 4.36,
// //     genres: ["fiction", "historical fiction"],
// //   },
// //   {
// //     title: "The Name of the Wind",
// //     authors: ["Patrick Rothfuss"],
// //     rating: 4.54,
// //     genres: ["fiction", "fantasy"],
// //   },
// //   {
// //     title: "The Overstory",
// //     authors: ["Richard Powers"],
// //     rating: 4.19,
// //     genres: ["fiction", "short stories"],
// //   },
// //   {
// //     title: "The Way of Kings",
// //     authors: ["Brandon Sanderson"],
// //     rating: 4.65,
// //     genres: ["fantasy", "epic"],
// //   },
// //   {
// //     title: "Lord of the flies",
// //     authors: ["William Golding"],
// //     rating: 3.67,
// //     genres: ["fiction"],
// //   },
// // ];

// // // Sorting books by their rating:
// // books.sort((a, b) => b.rating - a.rating);

// const nums = [3, 4, 5, 6, 7];
// // To multiply all values in nums:
// const product = nums.reduce((total, currentVal) => {
//   return total * currentVal;
// });

// // total    currentVal    returnVal
// // 3             4           12
// // 12            5           60
// // 60            6           360
// // 360           7           2520

// //Final Return Value: 2520
// const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// // One approach to find max using reduce:
// // const maxGrade = grades.reduce((max, currVal) => {
// //   if (currVal > max) return currVal;
// //   return max;
// // });

// // A shorter version using Math.max:
// const maxGrade = grades.reduce((max, currVal) => {
//   return Math.max(max, currVal);
// });
// // Finding the min value using Math.min:
// const minGrade = grades.reduce((min, currVal) =>
//   //using implicit return for variety's sake
//   Math.min(min, currVal)
// );

// // max     currVal    return
// // 87        64         87
// // 87        96         96
// // 96        92         96
// /// etc.

// // We can specify an initial value as the 2nd argument to reduce:
// // arr.reduce(reducerFunction, initialValue)
// const total = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
//   return sum + currVal;
// }, 1000); //sum starts at 1000, then each element is added to it

// const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

// // To tally the votes:
// // const results = votes.reduce((tally, val) => {
// //   if (tally[val]) {
// //     tally[val]++
// //   } else {
// //     tally[val] = 1;
// //   }
// //   return tally;
// // }, {})

// // The shorter version:
// // const results = votes.reduce((tally, val) => {
// //   tally[val] = (tally[val] || 0) + 1;
// //   return tally;
// // }, {});

// // const books = [
// //   {
// //     title: "Good Omens",
// //     authors: ["Terry Pratchett", "Neil Gaiman"],
// //     rating: 4.25,
// //     genres: ["fiction", "fantasy"],
// //   },
// //   {
// //     title: "Changing My Mind",
// //     authors: ["Zadie Smith"],
// //     rating: 3.83,
// //     genres: ["nonfiction", "essays"],
// //   },
// //   {
// //     title: "Bone: The Complete Edition",
// //     authors: ["Jeff Smith"],
// //     rating: 4.42,
// //     genres: ["fiction", "graphic novel", "fantasy"],
// //   },
// //   {
// //     title: "American Gods",
// //     authors: ["Neil Gaiman"],
// //     rating: 4.11,
// //     genres: ["fiction", "fantasy"],
// //   },
// //   {
// //     title: "A Gentleman in Moscow",
// //     authors: ["Amor Towles"],
// //     rating: 4.36,
// //     genres: ["fiction", "historical fiction"],
// //   },
// //   {
// //     title: "The Name of the Wind",
// //     authors: ["Patrick Rothfuss"],
// //     rating: 4.54,
// //     genres: ["fiction", "fantasy"],
// //   },
// //   {
// //     title: "The Overstory",
// //     authors: ["Richard Powers"],
// //     rating: 4.19,
// //     genres: ["fiction", "short stories"],
// //   },
// //   {
// //     title: "A Truly Horrible Book",
// //     authors: ["Xavier Time"],
// //     rating: 2.18,
// //     genres: ["fiction", "garbage"],
// //   },
// //   {
// //     title: "The Way of Kings",
// //     authors: ["Brandon Sanderson"],
// //     rating: 4.65,
// //     genres: ["fantasy", "epic"],
// //   },
// //   {
// //     title: "Lord of the flies",
// //     authors: ["William Golding"],
// //     rating: 3.67,
// //     genres: ["fiction"],
// //   },
// // ];
// // // To group books by rating:
// // const groupedByRatings = books.reduce((groupedBooks, book) => {
// //   const key = Math.floor(book.rating);
// //   if (!groupedBooks[key]) groupedBooks[key] = [];
// //   groupedBooks[key].push(book);
// //   return groupedBooks;
// // }, {});

// // The old way of adding a default value:
// // function multiply(x, y) {
// //   if (typeof y === 'undefined') {
// //     y = 1;
// //   }
// //   return x * y;
// // }

// // A slightly shorter version:
// // function multiply(x, y) {
// //   y = typeof y === 'undefined' ? 1 : y
// //   return x * y;
// // }

// // The new super clean way of adding defaults!
// // function multiply(x, y = 1) {
// //   return x * y;
// // }
// // multiply(3, 4); //12
// // multiply(3); //3

// // // Another example!
// // // const greet = (person, greeting = 'hi') => {
// // //   console.log(`${greeting}, ${person}!`)
// // // }

// // // Default value of an array:
// // // const blah = (x, y = [1, 2, 3]) => {
// // //   console.log(x, y);
// // // }

// // // Multiple default values are possible, but rare
// // // const greet = (person, greeting = 'hi', punctuation = '!') => {
// // //   console.log(`${greeting}, ${person} ${punctuation}`)
// // // }

// // function giveMeFour(a, b, c, d) {
// //   console.log("a", a);
// //   console.log("b", b);
// //   console.log("c", c);
// //   console.log("d", d);
// // }

// // const colors = ["red", "orange", "yellow", "green"];

// // // Without spread:
// // giveMeFour(colors);
// // // a ["red", "orange", "yellow", "green"]
// // // b undefined
// // // c undefined
// // // d undefined

// // // WITH SPREAD!!!
// // // Values are passed as separate args:
// // giveMeFour(...colors);
// // // a 'red'
// // // b 'orange'
// // // c 'yellow'
// // // d 'green'

// // //We can also spread strings!
// // giveMeFour(..."GOAT");
// // // a G
// // // b O
// // // c A
// // // d T

// // const cephalopods = [
// //   "dumbo octopus",
// //   "humboldt squid",
// //   "flamboyant cuttlefish",
// // ];

// // const gastropods = ["giant african snail", "banana slug", "variable neon slug"];

// // const cnidaria = ["fire coral", "moon jelly"];

// // const mollusca = [...cephalopods, ...gastropods];
// // //["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

// // const inverts = [...cnidaria, ...gastropods, ...cephalopods];
// // //["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

// // const cephCopy = [...cephalopods];
// // //["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]
// // const feline = {
// //   legs: 4,
// //   family: "Felidae",
// // };

// // const canine = {
// //   family: "Caninae",
// //   furry: true,
// //   legs: 4,
// // };

// // const dog = {
// //   ...canine,
// //   isPet: true,
// //   adorable: true,
// // };
// // //{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

// // const houseCat = {
// //   ...feline,
// //   isGrumpy: true,
// //   personality: "unpredictable",
// // };
// // //{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

// // const catDog = {
// //   ...canine,
// //   ...feline,
// // };
// // //{family: "Felidae", furry: true, legs: 4}

// // //Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
// // const tripod = {
// //   ...canine,
// //   legs: 3,
// // };
// // //{family: "Caninae", furry: true, legs: 3}

// // const catDogClone = {
// //   ...catDog,
// // };

// // const random = [
// //   ..."hello",
// //   {
// //     ...catDog,
// //   },
// // ];

// //The arguments object is available in every function you write (except arrow functions)
// //It contains all the arguments passed in.
// // function sum() {
// //   //It is NOT an array, we have to turn it into one if we want to use array methods
// //   const argsArr = [...arguments];
// //   return argsArr.reduce((total, currVal) => {
// //     return total + currVal;
// //   });
// // }

// // // No arguments object inside of arrow functions :(
// // const multiply = () => {
// //   console.log(arguments);
// // };

// // OLD WAY!
// // function sum() {
// //   const argsArr = [...arguments]
// //   return argsArr.reduce((total, currVal) => {
// //     return total + currVal
// //   })
// // }

// // New way using rest:
// // function sum(...nums) {
// //   return nums.reduce((total, currVal) => {
// //     return total + currVal;
// //   });
// // }

// // //We can have named params and then collect the rest into an array:
// // function fullName(first, last, ...titles) {
// //   console.log("first", first);
// //   console.log("last", last);
// //   console.log("titles", titles);
// // }

// // // We can use rest parameters in arrow functions!
// // const multiply = (...nums) => nums.reduce((total, currVal) => total * currVal);

// // const raceResults = [
// //   "Eliud Kipchoge",
// //   "Feyisa Lelisa",
// //   "Galen Rupp",
// //   "Ghirmay Ghebreslassie",
// //   "Alphonce Simbu",
// //   "Jared Ward",
// // ];

// // // The old way:
// // // const gold = raceResults[0]
// // // const silver = raceResults[1]
// // // const bronze = raceResults[2]

// // // Using Destructuring:
// // const [gold, silver, bronze] = raceResults;
// // gold; //'Eliud Kipchoge'
// // silver; //'Feyisa Lelisa'
// // bronze; //'Galen Rupp'

// // const [first, , , fourth] = raceResults;
// // first; //'Eliud Kipchoge'
// // fourth; //'Ghirmay Ghebreslassie'

// // const [winner, ...others] = raceResults;
// // winner; //'Eliud Kipchoge'
// // others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]
// // const runner = {
// //   first: "Eliud",
// //   last: "Kipchoge",
// //   country: "Kenya",
// //   title: "Elder of the Order of the Golden Heart of Kenya",
// // };

// // // const {
// // //   first,
// // //   last,
// // //   time
// // // } = runner;

// // const { country: nation, title: honorific } = runner;

// // const { first, last, ...other } = runner;

// // const results = [
// //   {
// //     first: "Eliud",
// //     last: "Kipchoge",
// //     country: "Kenya",
// //   },
// //   {
// //     first: "Feyisa",
// //     last: "Lilesa",
// //     country: "Ethiopia",
// //   },
// //   {
// //     first: "Galen",
// //     last: "Rupp",
// //     country: "United States",
// //   },
// // ];
// // // NESTED DESTRUCTURING
// // const [{ first: goldWinner }, { country }] = results;
// // goldWinner; //"Eliud"
// // country; //"Ethiopia"
// // const runner = {
// //   first: "Eliud",
// //   last: "Kipchoge",
// //   country: "Kenya",
// //   title: "Elder of the Order of the Golden Heart of Kenya",
// // };

// // // Rather than destructuring INSIDE the function body
// // // function print(person) {
// // //   const {
// // //     first,
// // //     last,
// // //     title
// // //   } = person;
// // //   console.log(`${first} ${last}, ${title}`)
// // // }

// // // We can unpack the values we want right in the parameter list:
// // function print({ first, last, title }) {
// //   console.log(`${first} ${last}, ${title}`);
// // }

// // const response = ["HTTP/1.1", "200 OK", "application/json"];

// // // Also works with array parameters:
// // function parseResponse([protocol, statusCode, contentType]) {
// //   console.log(`Status: ${statusCode}`);
// // }

// // const getStats = (arr) => {
// //   const max = Math.max(...arr);
// //   const min = Math.min(...arr);
// //   const sum = arr.reduce((sum, r) => sum + r);
// //   const avg = sum / arr.length;
// // The "old" way:
// //   return {
// //     max: max,
// //     min: min,
// //     sum: sum,
// //     avg: avg
// //   }
// // }

// // const getStats = (arr) => {
// //   const max = Math.max(...arr);
// //   const min = Math.min(...arr);
// //   const sum = arr.reduce((sum, r) => sum + r);
// //   const avg = sum / arr.length;
// //   // Using the new shorthand property syntax:
// //   return {
// //     max,
// //     min,
// //     sum,
// //     avg,
// //   };
// // };
// // const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

// // const stats = getStats(reviews);

// // function pick(arr) {
// //   //return random element from arr
// //   const idx = Math.floor(Math.random() * arr.length);
// //   return arr[idx];
// // }

// // function getCard() {
// //   const values = [
// //     "1",
// //     "2",
// //     "3",
// //     "4",
// //     "5",
// //     "6",
// //     "7",
// //     "8",
// //     "9",
// //     "10",
// //     "J",
// //     "Q",
// //     "K",
// //     "A",
// //   ];
// //   const suits = ["clubs", "spades", "hearts", "diamonds"];
// //   const value = pick(values);
// //   const suit = pick(suits);
// //   return {
// //     value,
// //     suit,
// //   };
// // }

// // const role = "host";
// // const person = "Jools Holland";
// // const role2 = "Director";
// // const person2 = "James Cameron";

// // // The old way:
// // // Make the object
// // // const team = {};
// // // Then add a property using dynamic key:
// // // team[role] = person;
// // // team[role2] = person2;

// // // USING COMPUTED PROPERTIES!
// // const team = {
// //   [role]: person,
// //   [role2]: person2,
// //   [1 + 6 + 9]: "sixteen",
// // };

// // // function addProp(obj, k, v) {
// // //   const copy = {
// // //     ...obj
// // //   };
// // //   copy[k] = v;
// // //   return copy;
// // // }

// // // const addProp = (obj, k, v) => {
// // //   return {
// // //     ...obj,
// // //     [k]: v
// // //   }
// // // }

// // const addProp = (obj, k, v) => ({
// //   ...obj,
// //   [k]: v,
// // });
// // const res = addProp(team, "happy", ":)");

// // // Adding methods to an object!
// // const math = {
// //   numbers: [1, 2, 3, 4, 5],
// //   add: function (x, y) {
// //     return x + y;
// //   },
// //   multiply: function (x, y) {
// //     return x * y;
// //   },
// // };

// // // To execute multiply:
// // math.multiply(5, 9); //45

// // const auth = {
// //   username: "TommyBot",
// //   login() {
// //     console.log("LOGGED YOU IN!");
// //   },
// //   logout() {
// //     console.log("GOODBYE");
// //   },
// // };

// // function sayHi() {
// //   console.log("HI");
// //   //this refers to the window (global scope object in the browser)
// //   console.log(this);
// // }

// // const greet = function () {
// //   //this refers to the window (global scope object in the browser)
// //   console.log(this);
// // };
// // function sayHi() {
// //   console.log("HI");
// //   //this refers to the window (global scope object in the browser)
// //   console.log(this);
// // }

// // const person = {
// //   first: "Cherilyn",
// //   last: "Sarkisian",
// //   nickName: "Cher",
// //   fullName() {
// //     //In a method, this refers to the object the method "lives" in:
// //     const { first, last, nickName } = this;
// //     return `${first} ${last} AKA ${nickName}`;
// //   },
// //   printBio() {
// //     const fullName = this.fullName();
// //     console.log(`${fullName} is a person!`);
// //   },
// // };

// // function sayHi() {
// //   console.log("HI");
// //   //this refers to the window (global scope object in the browser)
// //   console.log(this);
// // }

// // const person = {
// //   first: "Cherilyn",
// //   last: "Sarkisian",
// //   nickName: "Cher",
// //   fullName() {
// //     //In a method, this refers to the object the method "lives" in
// //     const { first, last, nickName } = this;
// //     return `${first} ${last} AKA ${nickName}`;
// //   },
// //   printBio() {
// //     console.log(this);
// //     const fullName = this.fullName();
// //     console.log(`${fullName} is a person!`);
// //   },
// //   laugh: () => {
// //     //Arrow functions don't get their 'own' this.
// //     console.log(this);
// //     console.log(`${this.nickName} says HAHAHAHAH`);
// //   },
// // };

// // // INVOCATION CONTEXT MATTERS!!!
// // person.printBio(); //THIS refers to the person object

// // const printBio = person.printBio;
// // printBio(); //THIS refers to window object

// // const annoyer = {
// //   phrases: [
// //     "literally",
// //     "cray cray",
// //     "I can't even",
// //     "Totes!",
// //     "YOLO",
// //     "Can't Stop, Won't Stop",
// //   ],
// //   pickPhrase() {
// //     const { phrases } = this;
// //     const idx = Math.floor(Math.random() * phrases.length);
// //     return phrases[idx];
// //   },
// //   start() {
// //     //Use an arrow function to avoid getting a different 'this':
// //     this.timerId = setInterval(() => {
// //       console.log(this.pickPhrase());
// //     }, 3000);
// //   },
// //   stop() {
// //     clearInterval(this.timerId);
// //     console.log("PHEW THANK HEAVENS THAT IS OVER!");
// //   },
// // };

// // **********************************
// // WRITING EVERYTHING USING FUNCTIONS
// // **********************************
// function initializeDeck() {
//   const deck = [];
//   const suits = ["hearts", "diamonds", "spades", "clubs"];
//   const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
//   for (let value of values.split(",")) {
//     for (let suit of suits) {
//       deck.push({
//         value,
//         suit,
//       });
//     }
//   }
//   return deck;
// }

// function drawCard(deck, drawnCards) {
//   const card = deck.pop();
//   drawnCards.push(card);
//   return card;
// }

// function drawMultiple(numCards, deck, drawnCards) {
//   const cards = [];
//   for (let i = 0; i < numCards; i++) {
//     cards.push(drawCard(deck, drawnCards));
//   }
//   return cards;
// }

// function shuffle(deck) {
//   // loop over array backwards
//   for (let i = deck.length - 1; i > 0; i--) {
//     //pick random index before current element
//     let j = Math.floor(Math.random() * (i + 1));
//     //swap
//     [deck[i], deck[j]] = [deck[j], deck[i]];
//   }
//   return deck;
// }

// // We have to create a bunch of variables:
// const firstDeck = initializeDeck();
// const drawnCards = [];
// shuffle(firstDeck);
// // We have to pass a ton of arguments around:
// const hand1 = drawMultiple(2, firstDeck, drawnCards);
// const hand2 = drawMultiple(2, firstDeck, drawnCards);
// const pokerHand = drawMultiple(5, firstDeck, drawnCards);

// // **********************************
// // USING AN OBJECT + METHODS INSTEAD:
// // **********************************

// const myDeck = {
//   deck: [],
//   drawnCards: [],
//   suits: ["hearts", "diamonds", "spades", "clubs"],
//   values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
//   initializeDeck() {
//     const { suits, values, deck } = this;
//     for (let value of values.split(",")) {
//       for (let suit of suits) {
//         deck.push({
//           value,
//           suit,
//         });
//       }
//     }
//     // return deck;
//   },
//   drawCard() {
//     const card = this.deck.pop();
//     this.drawnCards.push(card);
//     return card;
//   },
//   drawMultiple(numCards) {
//     const cards = [];
//     for (let i = 0; i < numCards; i++) {
//       cards.push(this.drawCard());
//     }
//     return cards;
//   },
//   shuffle() {
//     const { deck } = this;
//     // loop over array backwards
//     for (let i = deck.length - 1; i > 0; i--) {
//       //pick random index before current element
//       let j = Math.floor(Math.random() * (i + 1));
//       //swap
//       [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
//   },
// };

// // Much cleaner!!
// myDeck.initializeDeck();
// myDeck.shuffle();
// const h1 = myDeck.drawMultiple(2);
// const h2 = myDeck.drawMultiple(2);
// const h3 = myDeck.drawMultiple(5);

// // THIS FUNCTION RETURNS A NEW DECK EVERYTIME WE CALL IT!
// const makeDeck = () => {
//   return {
//     deck: [],
//     drawnCards: [],
//     suits: ["hearts", "diamonds", "spades", "clubs"],
//     values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
//     initializeDeck() {
//       const { suits, values, deck } = this;
//       for (let value of values.split(",")) {
//         for (let suit of suits) {
//           deck.push({
//             value,
//             suit,
//           });
//         }
//       }
//       // return deck;
//     },
//     drawCard() {
//       const card = this.deck.pop();
//       this.drawnCards.push(card);
//       return card;
//     },
//     drawMultiple(numCards) {
//       const cards = [];
//       for (let i = 0; i < numCards; i++) {
//         cards.push(this.drawCard());
//       }
//       return cards;
//     },
//     shuffle() {
//       const { deck } = this;
//       // loop over array backwards
//       for (let i = deck.length - 1; i > 0; i--) {
//         //pick random index before current element
//         let j = Math.floor(Math.random() * (i + 1));
//         //swap
//         [deck[i], deck[j]] = [deck[j], deck[i]];
//       }
//     },
//   };
// };

// // OUR FIRST DECK!
// const myDeck = makeDeck();
// myDeck.initializeDeck();
// myDeck.shuffle();
// const h1 = myDeck.drawMultiple(2);
// const h2 = myDeck.drawMultiple(2);
// const h3 = myDeck.drawMultiple(5);

// // OUR SECOND DECK!
// const deck2 = makeDeck();
// deck2.initializeDeck();

// To select the element with id of bear-photo:
// document.getElementById("bear-photo");

// //To select the element with id of main:
// document.getElementById("main");

// //To select all li's
// document.getElementsByTagName("li");

// // To select all h1's (there's only one on this page):
// document.getElementsByTagName("h1");

// //Remember, getElementsByTagName returns an array-like object (NOT a real array)
// const inputs = document.getElementsByTagName("input"); //get all inputs
// inputs[0]; //this works
// inputs.pop(); //DOES NOT WORK! pop() is an array method, and this isn't an array!

// // To select all elements with the class of 'special':
// document.getElementsByClassName("special");

// //getElementsByClassName also returns an array-like object.
// // We don't have access to array methods, but we can iterate:

// const specials = document.getElementsByClassName("special");
// for (let el of specials) {
//   console.log(el);
// }

// //We can use spread to make an actual array:
// const arr = [...specials];
// arr.pop(); //this works because it's now an array!

// // ****************
// // querySelector
// // ****************
// //To find the first li on the page:
// document.querySelector("li");

// //To find the first element with class of special:
// document.querySelector(".special");

// //To find the first element with id of main (there should only be one...)
// document.querySelector("#main");

// // To find the first li with the class of special, nested inside of a ul, nested inside a section:
// document.querySelector("section ul li.special");

// // ****************
// // querySelectorAll
// // ****************

// // To find ALL li's on the page:
// document.querySelectorAll("li");

// // To find ALL elements with the class of special on the page:
// document.querySelectorAll(".special");

// //
// // Select all LI's on the page:
// const allLis = document.querySelectorAll("li");

// // One option, a regular for loop:
// for (let i = 0; i < allLis.length; i++) {
//   allLis[i].innerText = "WE ARE THE CHAMPIONS!";
// }

// //Another option using for...of:
// for (let li of allLis) {
//   li.innerHTML = "WE ARE <b>THE CHAMPIONS</b>";
// }
// // Changing the color and background-color:
// const h1 = document.querySelector("h1");
// h1.style.color = "pink";
// h1.style.backgroundColor = "yellow"; //camel cased! (not background-color but backgroundColor)

// // Changing Multiple Elements:
// const allLis = document.querySelectorAll("li");
// const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// allLis.forEach((li, i) => {
//   const color = colors[i];
//   li.style.color = color;
// });
// const h1 = document.querySelector("h1");

// // style property only contains INLINE styles...
// // Even though we gave the h1 a purple color, we still get:
// h1.style.color; //""
// // Same with any property we did not set inline:
// h1.style.fontSize; //""

// // We can use getComputedStyle to figure out the ACTUAL styles that are applying:
// const compStyles = getComputedStyle(h1);
// compStyles.color; //"rgb(128, 0, 128)"  (purple as an RGB color)
// compStyles.fontSize; //"60px"
// const todo = document.querySelector("#todos .todo");

// // Setting styles one at a time is not ideal:
// // todo.style.color = 'gray';
// // todo.style.textDecoration = 'line-through';
// // todo.style.opacity = '50%'

// // We can use a class instead!
// // In app.css I've defined a 'done' class that we can apply

// // OPTION 1 - using setAttribute
// //This adds the class 'done', but it overwrites any existing classes...
// // todo.setAttribute('class', 'done');

// // OPTION 2 - classList
// // We can use the classList property and it's methods to add,remove, and toggle classes!
// todo.classList.add("done");
// //to remove it
// todo.classList.remove("done");
// //to toggle:
// todo.classList.toggle("done"); //add
// todo.classList.toggle("done"); //remove
// todo.classList.toggle("done"); //add
// todo.classList.toggle("done"); //remove
// todo.classList.toggle("done"); //add
// // Make a new empty img element:
// const newImg = document.createElement("img");
// // Add a src:
// newImg.src =
//   "https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80";
// // Change its width:
// newImg.style.width = "300px";

// //Add it to the end of the body:
// document.body.appendChild(newImg);

// // Create a new anchor tag
// const newLink = document.createElement("a");
// // Set its innerText:
// newLink.innerText = "Mr. Bubz Video! CLICK MEEE";
// // Set its src:
// newLink.href = "https://www.youtube.com/watch?v=QQNL83fhWJU";

// // Select the first paragraph:
// const firstP = document.querySelector("p");
// // Add the link as a child of the paragraph:
// firstP.appendChild(newLink);
// const parentUL = document.querySelector("ul");
// const newLI = document.createElement("li");
// newLI.innerText = "I AM A NEW LIST ITEM!";

// //prepend will add newLI as the FIRST child of parentUL
// parentUL.prepend(newLI); //Doesn't work in IE!

// //We can also insert something BEFORE another element, using insertBefore.
// // First, select the element to insert before:
// const targetLI = document.querySelectorAll("li.todo")[2]; //3rd li with class of 'todo'
// // To insert our new LI before targetLI...
// //parent.insertBefore(what to insert, where to insert)
// parentUL.insertBefore(newLI, targetLI);
// // USING removeChild()
// //Select the element you want to remove;
// const removeMe = document.querySelector(".special");
// //We call removeChild() on the parent element and pass in the element we want to remove:
// removeMe.parentElement.removeChild(removeMe);

// // USING THE NEWER REMOVE() METHOD - NO INTERNET EXPLORER SUPPORT!
// //Select the H1
// const h1 = document.querySelector("h1");
// h1.remove(); //REMOVE IT!

// ***********************************
// Two ways NOT to add event handlers
// ***********************************

// **********************************
// Inline - take a look at index.html
// **********************************

// **********************************
// Via JS - setting the onclick property
// **********************************

// Select an element:
const btn = document.querySelector("#clicker");

// Set the onclick property to a function:

// You can use an existing function: (not that common)
// btn.onclick = greet;

// Or use an anonymous function (more common)
// btn.onclick = () => {
//   console.log("YOU CLICKED ME UGHHHH!!");
// };

// function greet() {
//   alert("HEY BUDDY!");
// }

// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   alert("CLICKED!!!");
// });

// btn.addEventListener("click", function () {
//   console.log("SECOND THING!!");
// });

// btn.addEventListener("mouseover", function () {
//   btn.innerText = "STOP TOUCHING ME";
// });

// btn.addEventListener("mouseout", function () {
//   btn.innerText = "Click Me!";
// });

// window.addEventListener("scroll", function () {
//   console.log("STOP SCROLLING!!");
// });

// const form = document.querySelector("#signup-form");

// const creditCardInput = document.querySelector("#cc");
// const termsCheckbox = document.querySelector("#terms");
// const veggieSelect = document.querySelector("#veggie");

// form.addEventListener("submit", function (e) {
//   e.preventDefault(); //stops the request from being sent (prevents page reload)
//   console.log("cc", creditCardInput.value);
//   console.log("terms", termsCheckbox.checked);
//   console.log("veggieSelect", veggieSelect.value);
//   //send form data to db
//   //append something to page using form data
// });

const btn = document.querySelector("button");

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
const moveX = (element, amount, delay, onSuccess, onFailure) => {
  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;
    if (elRight + amount > bodyBoundary) {
      onFailure();
    } else {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      onSuccess();
    }
  }, delay);
};

// LOOK AT THIS UGLY MESS!
moveX(
  btn,
  300,
  1000,
  () => {
    //success callback
    moveX(
      btn,
      300,
      1000,
      () => {
        //success callback
        moveX(
          btn,
          300,
          1000,
          () => {
            //success callback
            moveX(
              btn,
              300,
              1000,
              () => {
                //success callback
                moveX(
                  btn,
                  300,
                  1000,
                  () => {
                    //success callback
                    alert("YOU HAVE A WIDE SCREEN!");
                  },
                  () => {
                    //failure callback
                    alert("CANNOT MOVE FURTHER!");
                  }
                );
              },
              () => {
                //failure callback
                alert("CANNOT MOVE FURTHER!");
              }
            );
          },
          () => {
            //failure callback
            alert("CANNOT MOVE FURTHER!");
          }
        );
      },
      () => {
        //failure callback
        alert("CANNOT MOVE FURTHER!");
      }
    );
  },
  () => {
    //failure callback
    alert("CANNOT MOVE FURTHER!");
  }
);

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

const btn = document.querySelector("button");
moveX(btn, 100, 1000)
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .catch(({ bodyBoundary, amount, elRight }) => {
    console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
  });

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
// 	setTimeout(() => {
// 		const bodyBoundary = document.body.clientWidth;
// 		const elRight = element.getBoundingClientRect().right;
// 		const currLeft = element.getBoundingClientRect().left;
// 		if (elRight + amount > bodyBoundary) {
// 			onFailure();
// 		}
// 		else {
// 			element.style.transform = `translateX(${currLeft + amount}px)`;
// 			onSuccess();
// 		}
// 	}, delay);
// };

// LOOK AT THIS UGLY MESS!
// moveX(
// 	btn,
// 	300,
// 	1000,
// 	() => {
// 		//success callback
// 		moveX(
// 			btn,
// 			300,
// 			1000,
// 			() => {
// 				//success callback
// 				moveX(
// 					btn,
// 					300,
// 					1000,
// 					() => {
// 						//success callback
// 						moveX(
// 							btn,
// 							300,
// 							1000,
// 							() => {
// 								//success callback
// 								moveX(
// 									btn,
// 									300,
// 									1000,
// 									() => {
// 										//success callback
// 										alert('YOU HAVE A WIDE SCREEN!');
// 									},
// 									() => {
// 										//failure callback
// 										alert('CANNOT MOVE FURTHER!');
// 									}
// 								);
// 							},
// 							() => {
// 								//failure callback
// 								alert('CANNOT MOVE FURTHER!');
// 							}
// 						);
// 					},
// 					() => {
// 						//failure callback
// 						alert('CANNOT MOVE FURTHER!');
// 					}
// 				);
// 			},
// 			() => {
// 				//failure callback
// 				alert('CANNOT MOVE FURTHER!');
// 			}
// 		);
// 	},
// 	() => {
// 		//failure callback
// 		alert('CANNOT MOVE FURTHER!');
// 	}
// );
