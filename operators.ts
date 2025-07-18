// Operators - symbol - 
// 1. Arithemetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators
// 5. Ternery Operators - statement



// 1. Arithmetic Operators - used to perform mathematical operations
    // 1. Addition (+) - 
    // 2. Subtraction (-)
    // 3. Multiplication (*)
    // 4. Division (/)
    // 5. Modulus (%)
    // 6. Exponentiation (**)
    // 7. Increment (++)
    // 8. Decrement (--)

let a  = 10
let b  = 3

// Addition (+) - adds two numbers or concatenates two strings
console.log(a+b)
console.log("TS" + "JS") // TSJS
// Subtraction (-) - subtracts one number from another
console.log(b-a)
// Multiplication (*) - multiplies two numbers
console.log(a*b)


// division (/) - divides one number by another
console.log(a/b) // 10/3 - 3.333

// Modulus (%) - returns the remainder of a division operation
console.log(a%b) // 9%3 - 1 - 

// Exponentiation (**) - raises a number to the power of another number
console.log(a**b) // 10^3 - 1000 // 10**3 - 10^3 // 10*10*10

// Increment (++) - increases a number by 1 // a++ = a =a+1 / ++a = 1+a

let c = 10

// pre-increment (++c) - First the value of the variable will be incremented by 1 and then the action will be performed

console.log(++c)// Action- printing on the console 

let d = 5 // 5

// post increment (c++) - First action will be performed and then the value of the variable will be incremented by 1
console.log(d++) // d = d+1// 5+1  6
console.log(d) // 6



// Decrement (--) - decreases a number by 1 // a-- = a =a-1 / --a = a-1

let e = 10
// pre-decrement (--c) - First the value of the variable will be decremented by 1 and then the action will be performed

console.log(--e) // Action- printing on the console

// post decrement (c--) - First action will be performed and then the value of the variable will be decremented by 1
export let f = 7
console.log(f--) // f = f-1 // 7-1 6
console.log(f)

console.log("*******************************");

// 2. Comparison Operators - Used to compare two values and return the result in the form of boolean (true/false)

    // 1. Equal to (==)
    // 2. Not Equal To (!=)
    // 3. Strict Equality (===)
    // 4. Strict Not equal to (!==)
    // 5. > Greate than
    // 6. >= greater than or equal to
    // 7. < less than
    // 8. <= less than or equal to


    let var1 = 10 // String  - Type coercion
    //let var2 = Number("10") // Type conversion
    let var2 = "10"

    console.log(var1 +var2);

    // 1. Equal to(==) - check if two VALUES are equal or not
    console.log(var1 == var2) // 10 == 10
    // 2. Not Equal To (!=)
    console.log(var1 != var2)

    // 3. Strict Equality (===) - Check if the VALUEs and the DATATYPE of the variables are same
    console.log(var1 === var2);

    // 4. Strict In-quality (!==)
        console.log(var1 !== var2);



    let var3 = "string"
    let var4 = "string"
    console.log("lin# 104", var3 == var4); // false
    console.log("line# 105", var3 === var4); // false


   // 5. Greater >
   console.log(10 > 9);

   // 6. Greater than or equal
   console.log(10 >= 10);

   // 7. less than <
   console.log(3 < 1);

   // 8. Less than or equal
   console.log(10 <= 10);
  
// Difference between =, == and ===

console.log("*******************************");

// 3. Logical Operators - Will validate 2 different expression (condition) and return the result in form of boolean (true/false)

    // 1. AND (&&) - (1>0) && (0>-9) - It will return true as a result only if both the condition are true
    // 2. OR (||) - Either of the condition is true - true
    // 3. Not (!) - Reverse the result - from true to false and vice versa


// 1. AND (&&) - Both of the conditions are true 

// true && true - true
// true && false - false
// false && true - false
// false && false - false


console.log("AND (&&)", (10>7) && (6>2))
console.log("AND (&&)", (10>7) && (6>20))
console.log("AND (&&)", (10>70) && (6>2))
console.log("AND (&&)", (10>70) && (6>20))


//2. OR (||) - Either of the condition is true

// true || true - true
// true || false - true
// false || true - true
// false || false - false

console.log("OR (||)", (7>6) || (234>123))
console.log("OR (||)", (7>6) || (234>1230));
console.log("OR (||)", (7>60) || (234>123));
console.log("OR (||)", (7>60000) || (234>123000))


// 3. NOT (!) - Reverses the result
// !true  = false
// !false = true

console.log("NOT (!)", !(10>4.5))
console.log("NOT (!)", !(10>45))


// 4. Assignment Operator (=) - Assign the value to a variable

let i = 10

// let i = 15

// i = i + 5  // i += 5                   // i = 10 + 5 // i = 15

i += 5 // i = i+5
i -= 5 // i= i-5
i *= 5 // i= i*5
i /= 5 // i = i/5 


// & - bitwise operator

console.log(i);




