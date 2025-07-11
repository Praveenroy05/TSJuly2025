// Conditional Statement -  Allows us to execute different block of code {...} for different condition

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

let age  = 25

if(age > 18){ // {15 > 18} - false
    console.log("You are eligible for voting");
}
else
{
    console.log("You are not eligible for voting");
}


// 3. if else if else
// Syntax:

/*

if(condition)
{
// if condition is true - If block will be executed
}
else if(condition1)
{
// if condition1 is true - then this if block will be executed
}
else if(condition2)
{
// if condition2 is true - then this if block will be executed
}
else
{
// code
}

*/



let browser = "edge"

if(browser == "chrome"){
    console.log("Launch the chrome browser")
    //break
}
else if(browser == "firefox"){
    console.log("Launch the firefox browser")
}
else if(browser == "safari"){
    console.log("Launch the safari browser")
}
else{
    console.log("Browser is Invalid");
}


// When to use if else if 
// 1. Ranges (>90)
// 2. Logical Operators && ||
// 3. Multiple datatypes  for comparison  - name= "rahul", salary > 200000





// 4. switch  statement
// Syntax:

/*
switch(expression){
    case "value1":
        // code to be executed if expression matches value1
        break
    case value2:
        // code to be executed if expression matches value2
        break
    default:
        // code to be executed if expression does not match any of the values
        break   
}
*/

let browserName = "edge"

switch(browserName){ // switch("chrome")
    case "chrome":
        console.log("Launch the chrome browser from switch")
        break
    case "firefox":
        console.log("Launch the firefox browser from switch")
        break
    case "safari":
        console.log("Launch the safari browser from switch")
        break
    default:
        console.log("Browser is Invalid from switch");
}


let day = 1

switch(day){
    case 1:
        console.log("Monday");
        break;      
}

// 5. Nested if else
// Syntax:

/*
if(condition1)
{
if(condition2)
{
// code to be executed if both conditions are true
}
else
{
// code to be executed if condition1 is true but condition2 is false
}
}
else
{
// code to be executed if condition1 is false
}

*/

let score = 49

// below 50 - Failed
// 50 to 69 - D
// 70-79 - C
// 80-89 - B
// 90-100 - A

if(score >=50){
    if(score >=90){
        console.log("Grade A");
    }else{
        if(score >= 80){
            console.log("Grade B");
        }else{
            if(score >= 70){
                console.log("Grade C");
            }else{
                console.log("Grade D");
            }
        }
    }
}
else{
    console.log("Failed");
}



// 6. Ternary operator
// The ternary operator is a shorthand way of writing if-else statements. It consists of three
// parts: the condition, the value if the condition is true, and the value if the condition is false
// 2nd and 3rd will be separated with (:)


// 1. condition?
// 2. The result for if the condition is true
// 3. The result for if the condition is false


// let age  = 15

// if(age > 18){ // {15 > 18} - false
//     console.log("You are eligible for voting");
// }
// else
// {
//     console.log("You are not eligible for voting");
// }


let result = (age>=18)? "You are eligible for voting" : "You are not eligible for voting"
console.log(result);


// loops
