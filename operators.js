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
var a = 10;
var b = 3;
// Addition (+) - adds two numbers or concatenates two strings
console.log(a + b);
console.log("TS" + "JS"); // TSJS
// Subtraction (-) - subtracts one number from another
console.log(b - a);
// Multiplication (*) - multiplies two numbers
console.log(a * b);
// division (/) - divides one number by another
console.log(a / b); // 10/3 - 3.333
// Modulus (%) - returns the remainder of a division operation
console.log(a % b); // 9%3 - 1 - 
// Exponentiation (**) - raises a number to the power of another number
console.log(Math.pow(a, b)); // 10^3 - 1000 // 10**3 - 10^3 // 10*10*10
// Increment (++) - increases a number by 1 // a++ = a =a+1 / ++a = 1+a
var c = 10;
// pre-increment (++c) - First the value of the variable will be incremented by 1 and then the action will be performed
console.log(++c); // Action- printing on the console 
var d = 5; // 5
// post increment (c++) - First action will be performed and then the value of the variable will be incremented by 1
console.log(d++); // d = d+1// 5+1  6
console.log(d); // 6
// Decrement (--) - decreases a number by 1 // a-- = a =a-1 / --a = a-1
var e = 10;
// pre-decrement (--c) - First the value of the variable will be decremented by 1 and then the action will be performed
console.log(--e); // Action- printing on the console
// post decrement (c--) - First action will be performed and then the value of the variable will be decremented by 1
var f = 7;
console.log(f--); // f = f-1 // 7-1 6
console.log(f);
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
var var1 = 10; // String  - Type coercion
//let var2 = Number("10") // Type conversion
var var2 = "10";
console.log(var1 + var2);
// 1. Equal to(==) - check if two VALUES are equal or not
console.log(var1 == var2); // 10 == 10
// 2. Not Equal To (!=)
console.log(var1 != var2);
// 3. Strict Equality (===) - Check if the VALUEs and the DATATYPE of the variables are same
console.log(var1 === var2);
// 4. Strict In-quality (!==)
console.log(var1 !== var2);
var var3 = "string";
var var4 = "String";
console.log("lin# 104", var3 == var4); // false
console.log("line#105", var3 === var4); // false
// 5. Greater >
console.log(10 > 9);
// 6. Greater than or equal
console.log(10 >= 10);
// 7. less than <
console.log(3 < 1);
// 8. Less than or equal
console.log(10 <= 10);
// =, == and ===
// 3. Logical Operators
