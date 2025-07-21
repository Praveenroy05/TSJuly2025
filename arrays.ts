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




console.log("**********Methods of Array*****************")

let array1 = [10,20,30,40, "TS", "JS"]

// 1. length - property - Return the total number of elements that are available inside an array
// Syntax:
// arrayName.length
console.log(array1.length)

console.log("Original Array", array1);
// 2. push(ele, ele1, ele3,....) - Adds the element to the end of an array
// Syntax:
// arrayName.push(ele, ele1, ele3,....)
array1.push("Java", 50, 100)
console.log("push()", array1);

// 3. pop() - Removes the last element from an array and returns the removed element
// Syntax:
// arrayName.pop()
let pop = (array1.pop());
console.log(pop);
console.log("pop()", array1);


// 4. unshift(ele, ele2, ele3,....) - Adss the element to the beginning of an array
// Syntax:
// arrayName.unshift(ele, ele2, ele3,....)
array1.unshift(200, "Javascript")
console.log("unshift()", array1);

// 5. shift() - Removes the first element from an array
// Syntax:
// arrayName.shift()
let shift = array1.shift();
console.log(shift);
console.log("shift()", array1);

// Difference between push and unshift or pop and shift

// 6. splice(startIndex, numberOfElementToDelete, ele1,ele2,el3,.....) - This performs both addition and deletion at the same time at the specified index
// Syntax:

// arrayName.splice(startIndex, numberOfElementToDelete, ele1,ele2,el3)
// startIndex - This is the position where you want to add the element
// numberOfElementToDelete - Number of elements you want to delete from the array from the specified startIndex
// ele1,ele2,el3,....(Optional) - Elements you want to add to the array at the specified startIndex

//shift() [ 'Javascript', 10, 20, 30, 40, 'TS', 'JS', 'Java', 50 ]
let arr5 = [10,20,30]
console.log("splice()", array1.splice(2, 0, 29))
console.log(array1);


// Difference between splice() and slice()


// 7. slice(startIndex, endIndex) - Return the portion of an array
// Syntax:
// arrayName.slice(startIndex?, endIndex?)
// startIndex - This is the position where you want to start the slice
// endIndex(Exclusive) - This is the position where you want to end the slice

console.log(array1.slice(2,7))


// 8. indexOf(element, startIndex) - Returns the index of first occurance of an element froman array
// Syntax:
// arrayName.indexOf(element)
console.log(array1.indexOf(10))

array1.push(10,30,40)
console.log(array1);
console.log(array1.indexOf(50,9))

// Find out the duplicate elements available inside an array

// 9. lastIndexOf(element) - Returns the index of last occurance of an element from an array
// Syntax:
// arrayName.lastIndexOf(element)
console.log(array1.lastIndexOf(10))

// 10. concat(array, array1) - Concatenates the two or more arrays
// Syntax:
// arrayName.concat(array, array1, ......)

let arr1 = ["JS", "TS", "Java", 10, "Java"]
let arr2 = [10,20,30, "Python"]
arr1 = arr1.concat(arr2)
//console.log(arr3)
console.log(arr1);

// 11. includes(element)  - 
// Syntax:
// arrayName.includes(element)
console.log(arr1.includes("Java"));


// forEach(fun), map(fun), filter(fun), reduce(fun)


let set = new Set([1,2,3,4,5,1,2,3,4])
console.log(set)


let arr6 = [10,20,3,10,20]

let index = -1;
let counter1 = 0;

while (true) {
  index = arr6.indexOf(20, index + 1);
  if (index === -1) break;

  counter1++;
  console.log(index);
}
console.log(counter1);


