// // Functions - 
// // function loginIntoApplication(username, password){ // Parameter
// // fill the username - username
// // fill the password - password
// // Click on login button
// //  }
// // 100 - loginIntoApplication(username, password) // Arguments
// // Difference between Arguments and Parameter
// // Definition of Arguments and parameter
// // Parameter - It is the variable defined in the function definition inside the paranthesis of a function
// // Argument - It is the value passed to the function when it is called
// // 100
// // 300 - 
// // 100 - Locator change to the password file - Tedious process - 99
// // Duplicate code
// // Maintenance becomes burden
// // Resuability - 
// // 1. Named Function - A function which will also have a name is known as named function - Function Declaration
// // 2. Anonymous function - Function Expression
// // 3. Arrow Function =>
// // 4. Constructor Function - Class - object
// // 5. Factory Function - A function which return an object -       Object -  {key: value}
// // 6. IIFE - Immediately Invoked Function Expression
// // 7. Default parameter
// // 8. Optional parameter(?) - TS
// // 9. Rest parameter
// // What is difference between Function Declaration and Function Expression
// // 1. Named Function - A function declared along with the name - Function Declaration
// // Syntax:
// /*

// function functionName(parameter: datatype(optional)) :return datatype(Optional)
// {
//  // code
//  // return
// }

// functionName(argument)

// */
// function add(a, b) {
//     console.log(a + b);
// }
// add(12, 34);
// add(100, 200);
// function add1(a, b) {
//     return a + b;
// }
// var result = add1(45, 55);
// console.log(result); // 100
// var sum = result + 10;
// console.log(sum);
// // When can we use Named Function:
// // 1. When we want to call the function multiple times
// // 2. Readability and maintability - Debugging
// // 3. If you are also trying to perform a recursion - calling the same function inside it
// // 2. Anonymous Function - Function Expression
// // Syntax:
// /*
// let fun  = function(parameters){
//  // code
// }

// fun(argument)

// */
// // 1. One-Time use - Flexibiltiy
// // 2. Call back function - Calling a function as an parameter inside the another function
// var addition = function (a, b) {
//     console.log(a + b);
// };
// addition(12, 34);
// // What is difference between Function Declaration and Function Expression
// // 3. Arrow Function - => (Lambda Function) 
// // Syntax:
// /*
// (parameter) =>

// */
// var sum1 = function (a, b) {
//     console.log(a + b);
//     return a + b;
// };
// var sumResult = sum1(34, 45);
// console.log(sumResult);
// // Avoid arrow function : 
// // When it is related to the object - this
// // When the function involves complex logic 
// // function greet(fun){
// //     fun()
// // }
// // IIFE  - Immediately Invoked Function Expression
// // Syntax:
// /*

// (function name(){
// // code ... Server is up and running
// })
// ()

// */
// (function () {
//     console.log("Server is up and running");
// })();
// var count = 0; // global
// count = 1000;
// function increase() {
//     count++;
//     console.log(count);
// }
// console.log(count);
// increase();
// // with IIFE
// (function () {
//     var count1 = 10; // local
//     function increase1() {
//         count1++;
//         console.log(count1);
//     }
//     increase1();
// })();
// // count1 = 1000
// //console.log(count1);
// // Default parameter and Optional parameter(?)
// function greet(name) {
//     if (name === void 0) { name = "Rahul"; }
//     console.log(name);
// }
// greet("John");
// // Definition of Method Overloading
// // Method overloading is a process to create different function with the same name but with difference parameters
// // function function1(){
// //     console.log("Function 1");
// // }
// // function function1(name){
// //     console.log("Function 1");
// // }
// function addition1(a, b, c) {
//     if (b === void 0) { b = 10; }
//     if (c === void 0) { c = 20; }
//     console.log(a + b + c);
// }
// // function addition1(a,b){
// // }
// addition1(10);
// addition1(10, 25, 55);
// // Optional Parameter (?)
// function info(name, age) {
//     if (age !== undefined) {
//         console.log("Your name is = ".concat(name, " and age is = ").concat(age));
//     }
//     else {
//         console.log("Your name is = ".concat(name));
//     }
// }
// info("Javascript");
// info("Javascript", 15);
// // Rest Parameters (...)
// function addition2(a, b) {
//     var num = [];
//     for (var _i = 2; _i < arguments.length; _i++) {
//         num[_i - 2] = arguments[_i];
//     }
//     console.log(a, b);
//     console.log(num);
// }
// addition2(10, 20, 30, "TS");
// addition2(10, 20, 30, 405, 60, 70, 80, 90, "JS");
// function named(fun) {
//     fun();
// }
// named(function () {
//     console.log("Hello");
// });
