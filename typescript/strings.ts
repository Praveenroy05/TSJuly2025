// string  - Combination of characters. Hello. Text, string


/*

1. SingleQuote ('') - String Literal
2. DoubleQuote ("") - String Literal
3. Backtick (` `) - Template Literal - Used to create multi-line strings or String parametrisation
*/

let singlQuote1 :string = 'Javascript' // 'c' - char in Java
let doubleQuote1 = "Typescript"
// doubleQuote = 10

let bactick1 = `This is a backtick string`


// 1. For multi-line string declaration

let multiLineString1 :string= `This is a multi-line string
which can span across multiple lines.`

// 2. For string parametrisation - ${variableName}

let age1 = 20
let greeting1 = `Hello, Your age is ${age1}`
console.log(greeting1);// - data driven testing

console.log("****************************************************");

// 1. length - Return the number of character a string consists.
// Syntax:
// stringName.length

let str1 ="Hello World"
console.log(str1.length)


// 2. charAt(index) -  Return the character at specified index
// Syntax:
// stringName.charAt(index)
console.log(str1.charAt(7)) // o

// String - Hello - H1e1l2o1

// 3. concat(str1, str2) - Combine 2 or more string and return us the new string
// Syntax:
// stringName.concat(str1, str2)
const st2 = str1.concat(` Hello`, " Java")
console.log(st2)
console.log(str1);


// 4. includes(searchString) - 
// Syntax:
// stringName.includes(searchString)

// 5. indexOf(char or string)
// Syntax:
// stringName.indexOf(char or string)

// 6. lastIndexOf(char or string)
// Syntax:
// stringName.lastIndexOf(char or string)


// 7. startWith(searchString or char, position) - Check if a string starts with the specified string or character or not
// Syntax:
// stringName.startsWith(searchString or char, position)
// Str1 = "Hello World"
console.log(str1.startsWith("o", 4))


// 8. endsWith(searchString or char, position) - Check if a string ends with the specified string or character or not


// Difference between slice and substring

// 9. slice(startIndex?, endIndex(Exclusive)?) - Return the portion of a string
// Syntax:
// stringName.slice(startIndex?, endIndex?)

let str2 = "This IS A String"
console.log(str2.slice(2,11))
console.log(str2.slice(11,2)) // in this case the slice will return an empty string


// 10. substring(startIndex, endIndex?) - Return the portion of a string
// Syntax:
// stringName.substring(startIndex, endIndex?)
console.log(str2.substring(2, 11))
console.log(str2.substring(11,20))

// 11. toLowerCase() - It converts all the characters of a string to a lower case chracter
// HELLO  - hello
// Syntax:
// stringName.toLowerCase()
console.log(str2.toLowerCase())

// United State.toLowerCase() - "united state"

// 12. toUpperCase() - It converts all the characters of a string to a upper case chracter
// hello - HELLO
// Syntax:
// stringName.toUpperCase()
console.log(str2.toUpperCase())
console.log(str2);

let email=  "praveen@qamitra.com"

// 13. split(separator) - Split a string into substrings using the specified separator and return them as an array.
// Syntax:
// stringName.split(separator)
console.log(str2.split(" "))

console.log(email.split("@")[1].split(".")[0])

const arraySplit = email.split('@')
console.log(arraySplit);
arraySplit.forEach((element)=>console.log(element))



console.log(email.split("a"))


// 14. trim() - Removes the whitespace from the beginning and end of the string
// Syntax:
// stringName.trim()

let str3 = "   Hello World   "
console.log(str3.length);
console.log(str3.trim().length)

// 15. trimStart() - Remove the whitespace from the beginning
// Syntax:
// stringName.trimStart()
console.log(str3.trimStart().length)

//16. trimEnd() - Removes the whitespace from the end of a string
// Syntax:
// stringName.trimEnd()
console.log(str3.trimEnd().length)

// 17. replace() - Replace the first occurances of a value
// Syntax:
// stringName.replace(oldvalue,newvalue)
let str4 = "Hello,World,Java,Javascript"
console.log(str4.replace(","," "))


// 18. replaceAll() - Replace all the occurances of a value
// Syntax:
// stringName.replaceAll(oldvalue,newvalue)
console.log(str4.replaceAll(","," "))



// Objects / Class



// Playwright - Setting up the playwright environment



let arr=[5,6,1,3,8,4]
let newarr1=arr.sort((a,b)=>a-b)


let newarr2=arr.sort((a,b)=>b-a)

console.log(arr);
console.log(newarr1)
console.log(newarr2)


console.log(newarr1[1])
console.log(newarr2[1])


const orderID = "| 68a73e15d2e3f0f153be5026 |"
console.log(orderID.replaceAll("|", "").trim());