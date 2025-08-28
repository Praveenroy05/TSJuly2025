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


// 8. indexOf(element, startIndex) - Returns the index of first occurance of an element from an array
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



// forEach(fun), map(fun), filter(fun), reduce(fun)

let arr7 = [10,20,30,40,50]

// 12. forEach(fun) - Will not return anything.
// Syntax:
// arrayName.forEach(function(element, index, arrayName){})
// element - The current element being processed in the array
// index(Optional) - The index of the current element being processed in the array
// arrayName(Optional) - The array the current element belongs to, or to which the current element


for(let element of arr7){
   console.log(element);
}// Data driven testing---

arr7.forEach((element, index)=>console.log(element,index))


// 13. map(fun)  - Create a new array with the resultof call in the function on every element of an array
// It will return the value as a result will be similair tto number of element that we have inside the original array
// Syntax:
// arrayName.map(function(element, index, arrayName){})

let price = [100,200,300,400,500]
let discount = 30 // 100 - 100*0.3 = 70

const discountedPrice = price.map((number)=>{
  return number - (number *30)/100
})
console.log(discountedPrice)


// 14.filter(fun) - Create a new array with the result of call the function on every element of an array. The result will consits of only those values which passes the function.
// Syntax:
// arrayName.filter(function(element, index, arrayName){})

// {name :"value"} // object

let sales = [
  {category : 'fashion', price : 1100000},
  {category : 'electronics', price : 2000000},
  {category : 'Mobile', price : 250000},
  {category : 'Toys', price : 500000},
  {category : 'Groceries', price : 1100000},
]

// let obj  = {category : 'fashion', sale : 1000000}
// console.log(obj.sale);

const filterResult = sales.filter((element =>element.price > 1000000))
console.log(filterResult)

for(let ele of filterResult){
    console.log(ele.category);
}

// 15. reduce(fun, initialValue(Optional)) - Return us the result as a single value by reducing the array
// Syntax:
// arrayName.reduce(function(accumlator, element, index, arrayName){}, initialValue(optional))

// accumulator - is the value that we are going to return at the end of the function
// element - The current element being processed in the array
// index(Optional) - The index of the current element being processed in the array
// arrayName(Optional) - The array the current element belongs to, or to which the current element


let variable = [10,20,30,40] // 10+20+30+40

const total = variable.reduce((total, num)=> total *num)
console.log(total)

let sum = 0
for(let num of variable){
  sum = sum + num // sum = 0+10 = 10, sum = 10+20 = 30, 30+30 = 60, 60+40 = 100
}
console.log(sum);

const totalSales = sales.reduce(function(total, num){
  return total + num.price
}, 0)
console.log(totalSales)



// String - 