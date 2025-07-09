// Statement -  Allows us to execute different block of code {...} for different condition

// 1. if statement
// 2. if else statement
// 3. if else if else statement
// 4. Nested if else statement
// 5. switch statement
// 6. Ternary Operator - if else condition


// 1. if statement - Will only handle the positive scenario
// Syntax:

/*
if(condition) {
    // code
}

*/

let age1 = 10
if(age1 > 18){ // (10>18)
    console.log("Age is greater then 18");
}

// 2. if else statement - Handles both positive and negative
// SYntax:

/*

if(condition)
{
 // if condition is true - If block will be executed
}
else
{
// If condition is false - Else block will be executed
}


*/

let age  = 15

if(age > 18){ // {15 > 18} - false
    console.log("You are eligible for voting");
}
else
{
    console.log("You are not eligible for voting");
}


console.log("1(||)"+ ((1>2) || (5<19))) //- BODMAS