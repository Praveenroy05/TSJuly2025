// Loops - Which will execute the same block of code {...} multiple times

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("************************");

// 1. for loop 
    // a. for loop - Traditional for loop - If we know how many times we have to run the iteration
    // b. for ...of loop - Loop over the iteratable object - Array - [1,2,3,4]
    // c. for ...in loop - Looping over the properties of an object - 
    // {key : value }
// 2. while loop - If we do not know how many times we have to run the iteration
// 3. do-while loop - If we want to execute to loop atleast one time before check ine the condition


// 1. for loop
// Syntax:

/*
for(initiliasation; condition; increment/decrement)
{
    // code
    break
}
initiliasation - Initialise the value of the variable to start the execution. let i = 1
condition - Condition to check whether the loop should continue or not. i < 5
increment/decrement - Increment or decrement the value of the variable after each iteration. i++

*/

for(let i =1; i<6; i++){ // 1<6  1++ = 1+1 =2 , 2 < 6 3 5++ = 5+1 = 6
    // if(i==3){
    //     break
    // }
    if(i==3){
        continue // skip that particular iteration
    }
    console.log(i) // 1 2 3 4 5

}

console.log("********************************");

// 2. while loop
// Syntax:

/*
// initiliasation

while(condition)
{
    // code
    increment/Decrement
}

*/

// 1....10
let j = 1
while(j<11){
    console.log(j)
    j++
}

console.log("***************************");

// 3. do while loop
// Syntax:

/*

initiliasation
do{
 // code
 increment/decrement
}while(condition);

*/

// 10 ... 1

let k =10
do{
    console.log(k) // 10 
    k--
}while(k>=1); // k>0, k>=1, k!=0,