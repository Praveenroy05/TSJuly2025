// Array - []

let array = [10, 20, 30, 40, "JS"] // [0:10, 1:20, 2:30, 3:40, 4:"JS"]
console.log(array[3])

// There are 2 ways in which we can declare an array in JS/TS

// 1. Using an Array Literal - []
// 2. Array Constructor - new Array()

// 1. Using the Array Literal
// Syntax:
// let arrayName : datatype[](optional) = [value, value1, value2,.....]

//let array1 : number[] = []
let array2 = ["JS", "TS", true, null, 12]
console.log(array2[0])
console.log(array2[1])



// 2. Array Constructor - new Array()
// Syntax:
// let arrayName = new Array<datatype>(value, value1, value2,....)

let array3  = new Array<any>(10,20,30,40,50, "JS")
console.log(array3);

let array4 = [10,20,30,40,50,60]
console.log(array4[0]); // arrayName[index] // index start with 0
console.log("**********************");

console.log(Array.isArray(array4));
console.log(Array.isArray(array3));
console.log("**********************");

// let array4 = [10,20,30,40,50,60]


// length - return the total number of elements available inside the array

// Traidition for loop - 
for(let i=0; i<array4.length; i++){
    console.log(array4[i])
}
console.log("**********************");

//array4.forEach((value)=>console.log(value))

// for.... of loop
// Syntax:
// for(declare variable of arrayName){...}
// Variable - will get the value from the array one by one

let counter = 0
for(let value of array4){
    // if(counter ==3){
    //     break
    // }
    console.log(value) // 10 20 30 ......
  //  counter++

}


console.log(array.slice(0,3))

// Methods - 
// String - 

// new Array(6)


