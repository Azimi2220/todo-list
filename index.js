// let score = 99;
// if (score >= 90 && score <= 100) {
//   console.log(`Congratulation You Are very Intelligent, Your score is: A+`);
// } else if (score >= 80 && score <= 89) {
//   console.log(`Congratulation You Are very Hard worker, Your score is: A`);
// } else if (score >= 70 && score <= 79) {
//   console.log(`Congratulation You Are Hard worker, Your score is: B`);
// } else if (score >= 60 && score <= 69) {
//   console.log(`Your score Is Not bad, It is C`);
// } else if (score >= 55 && score <= 59) {
//   console.log(`Try More, Your score is: D`);
// } else if (score < 55) {
//   console.log(`Sorry You Failed :) `);
// } else {
//   console.log("You enterd invalid number!!!!!");
// }

// const pow = (x, y) => {
//   return Math.pow(x, y);
// };

// console.log(pow(+2, 6));

// function GuessANumber() {
//   const number = Math.trunc(Math.random() * 100);
//   let score = 10;
//   let guess = prompt("guess the number");
//   if (score != 0) {
//     if (number === guess) {
//       caches.log("Congratulation you Won!");
//     }
//   }
// }
//Variabels//

// const teachers = ["ahmad", "mahmood", "aziz", "arash"];
// teachers.splice(2, 1, "salaam");
// teachers.push("osman", "omar");
// teachers.pop();
// teachers.shift();
// teachers.unshift();
// const newTeachers = teachers.slice(1, 3);
// console.log(newTeachers);
// console.log(teachers.indexOf("aziz"));
// console.log(teachers.includes("arash"));

// const contries = ["afghanistan", "us", "japan", "iran", "spain", "italy"];
// contries[5] = "pakistan";
// console.log(contries[5]);

// contries.push("china");
// contries.pop();
// contries.splice(3, 0,"pakistan");
// const newContries = contries.slice(2, 3);
// console.log(newContries);

// const students = ["ahmad", "aziz", "hamid", "edris", "mohammad", "ali", "reza"];
// students.push("saeed");
// students.pop();
// students.shift();
// students.unshift("omar");
// students[3] = "tamim";
// console.log(students[3]);
// students.splice(0, 1);
// students.splice(0, 0, "rahim");
// const newStudents = students.slice(2, 4);
// console.log(students.indexOf("edris"));

//  // -------------------------------- new push --------------------------------
//     function newPush(arr, element) {
//       arr[arr.length] = element;
//       console.log(arr);
//     }
//     newPush(students, "a");
//     newPush(students, "b");

//     // -------------------------------- new pop --------------------------------
//     function newPop(arr) {
//       students.length = students.length - 1;
//       console.log(arr);
//     }

//     newPop(students);
//     newPop(students);

//     // -------------------------------- new shift --------------------------------
//     function newShift(arr) {
//       for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i + 1];
//       }

//       arr.length = arr.length - 1;
//       console.log(arr);
//     }

//     newShift(students);
//     newShift(students);
//     newShift(students);

// const colors = ["red", "purpel", "orange", "blue"];
// for (let c = 0; c < colors.length; c++) {
//   console.log(colors[c]);
// }
//======================================= Objects ================================//

// let airplane = {
//   name: "sofa",
//   color: "gray",
//   price: "10000000$",
//   capacity: "5Person",
//   speed: "300km per hr",
//   fly: function () {
//     console.log("Sofa can fly upper of the clouds");
//   },
// };

// let airplane = new Object();
// airplane.name = "sofa";
// airplane.color = "gray";
// airplane.price = "10000000$";
// airplane.capacity = "5person";

// let airplane = { name: sofa, color: gray };
// console.log(airplane.color);

//=============================== ECM6 =======================================//

// firstName = "Aziz";
// lastName = "BozorgMehr";
// age = "20";

// const greeting = `Hello, my name is ${firstName} ${lastName} and i am ${age} years old.`;
// console.log(greeting);

//======================= Modules ===================================//

// function information() {
//   let firstName = "Aziz";
//   let age = 20;
//   return age + firstName;
// }

// export { information };

// class car {
//   constructor(brand, name, price) {
//     this.brand = brand;
//     this.name = name;
//     this.price = price;
//   }
// }

// const paragraph = document.getElementById("p1");
// p1.style.color = "red";
// p1.style.fontsixe = "50px";

// const paragraph = document.getElementsByTagName("p");

// for (let i = 0; i < paragraph.length; i++) {
//   let para = paragraph[i];
//   para.innerText = `this is paragraph ${i}`;
// }

// const paragraph = document.querySelectorAll("p");
// console.log(paragraph);

// const header = document.getElementById("heading1");

// const newDiv = document.createElement("h1");
// newDiv.innerText = "How are you?";
// paragraphs.appendChild(newDiv);

// const para = document.getElementById("firstp");
// para.remove();

// document
//   .getElementById("button")
//   .addEventListener(
//     "click",
//     () => (document.getElementById("button").textContent = new Date())
//   );
