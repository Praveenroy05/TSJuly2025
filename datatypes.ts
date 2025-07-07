// Datatypes - Which defines what kind of data a variable is storing

// 2 types of datatypes

// 1. Primitive data types - Only have a single
    // 1. number - 0
    // 2. string - ""
    // 3. boolean - false
    // 4. null - null
    // 5. undefined - undefined


    // 6. union (combination of other data datatype) - (number | string)
    // 7. any
    // 8. void - function



// Syntax:

// keyword(var/let/const) variableName :datatype(optional) = value - TS

// keyword(var/let/const) variableName = value - JS



// 1. number  - // It is used to store numeric values, both integers(90, -45) and floating-point numbers(5.256, 56.576868)

let num :string
 console.log("Line#30", typeof num);


 num = "ts"
 console.log("Line#30", typeof num);



let num1 :number  = 35345.34564575

let num2 = 376787634


// 1. By using the "typeof"

console.log(typeof num1)
console.log(typeof num2)
// 2. Hover over the variable in the editor to see the type of the variable

// Whenever you have given the dataype of a variable explicitly - Type Annotation

// Type Annotation and Type Inference

// Type Inference - TS automatically infers the type of the variable based on the value assigned to it


// 2. string  - Combination of characters. Hello. Text, string


/*

1. SingleQuote ('') - String Literal
2. DoubleQuote ("") - String Literal
3. Backtick (` `) - Template Literal - Used to create multi-line strings or String parametrisation
*/

let singlQuote :string = 'Javascript' // 'c' - char in Java
let doubleQuote = "Typescript"
// doubleQuote = 10

let bactick = `This is a backtick string`


// 1. For multi-line string declaration

let multiLineString = `This is a multi-line string
which can span across multiple lines.`

// 2. For string parametrisation - ${variableName}

let age = 20
let greeting = `Hello, Your age is ${age}`
console.log(greeting);

// 3. boolean - It is used to store true or false values
let isActive :boolean = true
let isLoggedIn = false


// 4. null - It is used to represent the absence of a value or a non-existent object
let emptyValue :null = null
console.log(typeof emptyValue); 

// 5. undefined - It is used to represent a variable that has been declared but has not been assigned a value
let unDefinedValue 
console.log(typeof unDefinedValue);

unDefinedValue = 3435345
console.log(typeof unDefinedValue);


//6. union - It is used to define a variable that can hold multiple types of values. It is a combination of other data types


let unionValue : (number |string | boolean) = 10
unionValue = "Hello"
unionValue = true


// 7. any - It is used to define a variable that can hold any type of value. It is a way to opt-out of type checking

let anyValue :any = 10
anyValue = "Hello"
anyValue = true
anyValue = null
anyValue = undefined;


// number = 0








// 2. Non primitive data type - More than one value
        // 1. array
        // 2. object
        // 3. Tuples
        // 4. functions







