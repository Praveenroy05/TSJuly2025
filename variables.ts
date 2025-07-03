// variables - Storage - Which stores either a single value or multiple values

// let i :number = 10

// i = variable

// let, const  - ES6 (ECMA SCRIPT 6 - 2015)

/*
1. var - In Modern JS/TS we do not use var keyword to declare a variable
2. let - Whenever we know that the value of the varaible can change at later point of time
3. const - Which is use to declare a constant variable
*/


// Syntax:
// keyword(var/let/const) variableName :datatype(optional) = value - TS

// keyword(var/let/const) variableName = value - JS


// Scope of variable
// 1. Global Scope - Which is accessible from any part of the code inside the file
// 2. Local Scope {...} - Which is accessible only within the block where it is declared


let i = 10 // Global scope - 

{
    let j = 20 // Local scope -
    console.log(j);
    console.log(i);
}




// var
// 1. scope - Global or Functional Scope
// 2. Whenever you declare a variable using a var keyword it can be redeclared and can be reinitialised as well
// 3. Hoisting - var keyword variables are hoisted to the top of the block where
// they are declared. But the value is not hoisted. Only the declaration is hoisted.
// 4. It is not mandatory to assign the value of a variable at the time of declaration.

var var1 

// async - await
var1 = 304





console.log("Line #52", name1); // undefined

var name1 = "Raj"
var name1 = "Rahul Kumar"
var name1 = " Kumar"


name1 = "Rahul"



var lang = "Python"

if(2>1){
    var lang1 = "Java"
}

console.log(lang1) // Java // - 



// let
// 1. scope - Block scope {...}
// 2. Whenever you declare a variable using a let keyword it cannot be redeclared but it can be reinitialised.
// 3. Hoisting - let keyword variables are hoisted to the top of the block where
// they are declared. But the value is not hoisted. Only the declaration is hoisted.
// 4. It is not mandatory to assign the value of a variable at the time of declaration

//console.log(let1);// 

 //let let1 // declaration
 //let let1 = 90

//let1 = "TS" // initialisation

const let1 = 90 // global

{
    const let1 = 10
  //  let1 = 90 // local scoped
    console.log(let1);
}

console.log(let1);
// int i = 10
// i = 40
// datatype varibale = value



let m 

m =90
//let m = 20
console.log(m)


// keyword (let) variablename = value


//console.log(let1);


// const 
// 1. scope - Block scope {...}
// 2. Whenever you declare a variable using a const keyword it cannot be redeclared and it cannot be reinitialised.
// 3. Hoisting - const keyword variables are hoisted to the top of the block where
// they are declared. But the value is not hoisted. Only the declaration is hoisted.
// 4. It is mandatory to assign the value of a variable at the time of declaration

const abc = 10
//const abc = 20
//abc = 50



// var
// 1. scope - Global or Functional Scope
// 2. Whenever you declare a variable using a var keyword it can be redeclared and can be reinitialised as well
// 3. Hoisting - var keyword variables are hoisted to the top of the block where
// they are declared. But the value is not hoisted. Only the declaration is hoisted.
// 4. It is not mandatory to assign the value of a variable at the time of declaration.

// let
// 1. scope - Block scope {...}
// 2. Whenever you declare a variable using a let keyword it cannot be redeclared but it can be reinitialised.
// 3. Hoisting - let keyword variables are hoisted to the top of the block where
// they are declared. But the value is not hoisted. Only the declaration is hoisted.
// 4. It is not mandatory to assign the value of a variable at the time of declaration

// const 
// 1. scope - Block scope {...}
// 2. Whenever you declare a variable using a const keyword it cannot be redeclared and it cannot be reinitialised.
// 3. Hoisting - const keyword variables are hoisted to the top of the block where
// they are declared. But the value is not hoisted. Only the declaration is hoisted.
// 4. It is mandatory to assign the value of a variable at the time of declaration

// var b = 10
// {
// let b = 10
// }

// keyword(var/let/const) variableName :datatype(optional) = value - TS


// function run(){
//     if(false){
//     let variable :number  = 10 // local
//     }
// console.log(variable);
// }





