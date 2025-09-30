// import i from 'i';
// const i = require('i');
// import i from 'i';
// //import calcAverage1 from 'calcAverage1';
// // console.log("Fundamentals Part 2");

// //  // Functions - Declaration and Expressions

// //  console.log (' === FUNCTIONS === ');

// //  function logger () {
// //     console.log ("This Function is working");

// //  }

// //  logger ();
// //  logger ();
// //  logger ();

// //  function fruitProcessor(apples, oranges) { 
// //     console.log (apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges ` ;
// //     return juice;
// //  }

// //  const appleJuice = fruitProcessor (5, 0);
// //  console.log (appleJuice); 

// //  const appleOrangeJuice = fruitProcessor(2, 4);
// //  console.log(appleOrangeJuice);

// //  const juice1 = 'Juice with 5 apples..';
// //  const juice2 = 'Juice with 3 apples...';

// //  // Function Expression
// //  const calcAge = function (birthYear) {
// //     return 2037 - birthYear;
// // };

// // const age1 = calcAge(2000);
// // console.log(age1);

// // function calcAge2 (birthYear, currentYear) { 
// //     const age = currentYear - birthYear;
// //     return age;
// // }

// // const myAge = calcAge2 (2000,2025);
// // const someonesAge = calcAge2 (1995, 2025);

// // console.log(`I am ${myAge} years old`); 
// // console.log(`He is ${someonesAge} years old`); 

// // console.log(calcAge2(2000));

// // function introduce(firstName, lastName, age) {
// //     const introduction = `Hi, Im ${firstName} ${lastName} and Im ${age} years old`;
// //     return introduction;
// // }

// // console.log(introduce("Jonas", "Schmedtmann", 46));
// // console.log(introduce("Sarah"));
// // // Missing parameters become undefined

// // function calcAge3(birthYear) {
// //     return 2037 - birthYear;
// // }

// // function yearsUnitRetirement (birthYear, firstName) {
// //     const age = calcAge3 (birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0) {
// //         return `${firstName} retires in ${retirement} years`;
// //     }   else {
// //         return `${firstName} has already retired`;
// //     }
// // }

// // console.log(yearsUnitRetirement(2000, "Aiken" ));
// // console.log(yearsUnitRetirement(1950, "Mark" ));

// // const globalVar = `I am global`;

// // function testScope () {
// //     const localVar = `I am local` ; 
// //     console.log(globalVar);
// //     console.log(localVar);
// // }


// // // Test Data

// // function calcAverage (score1, + score2, + score3 ) {
// //     return (score1 + score2 + score3) / 3

// // }

// // function checkWinner (avgDolphins, avgKoalas){
    
// //     if (avgDolphins, avgKoalas) {
// //         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// //     } else if (avgKoalas >= 2 * avgDolphins) {
// //         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// //     } else {
// //         return `No team wins! Dolphins ${avgDolphins}, Koalas: ${avgKoalas}`;
// //     }
// // }

// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(23, 24, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// const student1Grade = 85;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const mixed = ["Jonas", 27, true, grades];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// // access array elements

// console.log(grades[0]);
// console.log(grades[3]);

// console.log(grades.length);

// console.log(grades [0]);
// grades[0] = 99;
// console.log(grades);
// console.log(grades [0]);
// console.log(grades [0]);

// const calcAge = function(birthYear) {
//     return 2025 - birthYear
// }

// const ages = [calcAge(2000), calcAge(1995), calcAge(1991)];
// console.log(ages);
// ages[1] = calcAge(1950);
// console.log(ages);

// //Array Methods
// const friends = ["Michael", "Steven", " Peter"];
// console.log(friends)
// const newLength = friends.push("Jay");
// console.log(friends)
// console.log(newLength);

// //add elements

// friends.unshift("John");
// console.log(friends);

// //remove elements 

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends)

// //pop
// //shift

// console.log(friends.indexOf("Michael"));
// console.log(friends.indexOf("John"));

// console.log(friends.includes("Michael"))
// console.log(friends.includes("John"))


// //array iteration

// for (let i = 0; i < friends.length; i++); {
//     console.log(friends[i]);
// }

// friends.forEach(function(friend, index){
//     console.log(`${index}: ${friends}`);
// })

// const grades = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades.length; i++) {
//     total += grades [i]
// }

// console.log(`Average grade: ${(total / grades.length).toFixed(2)}`);

// let passCount = 0;
// grades.forEach((grade) => {
//     if (grade >= 70) passCount++/
// })

// console.log(`${passCount} out of ${grades.length} students passed`);


// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//   // Your code here
//   // Hint: Sum all grades, divide by length
// let sum = 0;
// for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//     }
//     return sum / grades.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//   // Your code here
//   // Hint: Start with first grade, compare with each subsequent grade
//  let highest = grades[0];
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] > highest);{
//     highest = grades[i];
//     }
//     }
//     return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   // Your code here
//   // Hint: Similar to highest, but use < comparison
//    let lowest = grades[0];
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] < lowest);{
//     lowest = grades[i];
//     }
//     }
//     return lowest;
// }



// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   // Your code here
//   // Hint: Counter pattern - increment when condition is met
// let count = 0;
// for (let i = 0; i < grades.length; i++){
    
// }
// }

// // Generate complete report
// const Average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${(total / grades.length).toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);


//Problems with Arrays

const aikenArray =[
    "Aiken",
    "Gunay",
    2025 - 2000,
    "teacher"
    ["Michael", "Peter", "Steven"],
];

console.log(aikenArray[0]);
console.log(aikenArray[1]);

const aikenObject = {
    firstName: 'Aiken',
    lastName: 'Gunay',
    age: 2025 - 2000,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
};

console.log(aikenObject); 

// Property access methods 
// Dot notation

console.log(aikenObject.firstName);
console.log(aikenObject.lastName);
console.log(aikenObject.age);

//Bracket Notation
console.log(aikenObject["firstName"]);
console.log(aikenObject["lastName"]);
console.log(aikenObject["age"]);

const nameKey = "Name";
console.log(aikenObject["first" + nameKey]);


//Modify existing properties
aikenObject.job = "Programmer";
aikenObject["age"] = 30;
console.log(aikenObject);

//Add new properties
aikenObject.location = "Philippines";
aikenObject ["twitter"] = "aikenprogrammer";
aikenObject.hasDriverLicense = true;
console.log (aikenObject);

//When to use dot vs bracket notation
const property = "job";
console.log(aikenObject[property]);

// "1. Property name is in a variable "
// "2. Property name has spaces or special characters"
// "3. Property name is computed/dynamic"
// "Otherwise, prefer dot notation"


// Objects vs Arrays Decision Making

// Arrays 
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// //Objects 
// const person = {
//     name: "Jonas",
//     age: 46,
//     occupation: "teacher"
// };
// const car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "blue",
// };

// // objects can contain arrays and arrays can contain objects
// const student = {
//     name: "Sarah",
//     grades:[85, 92, 78],
//     address: {
//         street: "123 Mait St",
//         city: "New York",
//     },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

// // Object Methods

// const john = {
//     firstName: "John",
//     lastName: "Doe",
//     birthYear: "1995",
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hashDriversLicense: true,

//     calcAge: function (birthYear) {
//         return 2025 - birthYear;
//     },
// };

// console.log(john.calcAge(2000));

// //'this' keyword
// const johnImproved = {
//     firstName: "John",
//     lastName: "Doe",
//     birthYear: "1995",
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hashDriversLicense: false,

//     calcAge: function () {
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//         this.job
//         }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
//     },  
// };

// console.log(johnImproved.calcAge())
// console.log(johnImproved.calcAge());
// console.log(johnImproved.getSummary());

// //Complex object with multiple methods
// const bankAccount = {
//     owner: "John Doe",
//     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//     interestRate: 1.2,
//     pin: 1111,

//     //Method to calculate balance
//     calcBalance: function () {
//         this.balance = this.movements. reduce((acc, mov) => acc + mov, 0);
//         return this.balance;
//     },

//     // Method to add movement
//     deposist: function (amount) {
//         this.movements.push(amount);
//         this.calcBalance();
//     },

//     withdraw: function (amount) {
//         this.movements.push(-amount);
//         this.calcBalance();
//     },

//     //Method for account summary
//     getStatement: function (){
//         return `${this.owner}'s account balance: ${this.calcBalance()}`;
//     },

// };

// console.log(bankAccount.getStatement());
// bankAccount.deposist(500);
// console.log(bankAccount.getStatement());