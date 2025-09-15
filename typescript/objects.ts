// Objects - Collection of key: value pair inside the curly braces {key: value}

// 1. Classes
// 2. Object literal way - {key: value}

// 2. Object Literal way

// Syntax:
/*
const obj = 
{
    key: value,
}

Object reference = obj

// 2 way in which we can get the data from object

// 1. obj.key
// 2. obj["key"] // key in the form of string

*/

import data from '../TestData/login.json'
console.log(data.errorMessage);


const Human =
{
    name: "John",
    age : 30,
    isEmployed :true,
    address: {
        streetNo : 3,
        city: "Hyd",
        state: "TS"
    },
    skill : [
        {one:"Java"}, 
        {two:"JS"}, 
        {three:"Python"}
    ],
    humanInfo : function(){
        console.log(Human.name, Human.age, Human.address);
    }
}

console.log(Human.name);
console.log(Human.address.city);

console.log(Human.skill[2].three);


console.log(Human["age"]); // "age"

// Class 

// let i =10 // variable- properties

// function demo(){ // function - method

// }

console.log(Human.skill[2].three);

import product from '../TestData/product.json'

for(let data of product){
    for(let product of data.productName)
        console.log(product);
}
