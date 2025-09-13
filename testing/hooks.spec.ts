// hooks - 

// test.beforeAll() - It will be executed once before executing any of the test cases
        // try to get the data from file
        // Database connection

// test.beforeEach() - It will be executed once before each and every test case
// test()
// test.afterEach() - It will be executed once after each and every test case
// test.afterAll() - It will be executed once after execution of all the test cases.

import {test, expect} from '@playwright/test'

test.afterEach(async ()=>{
    console.log("After Each");
})

test.afterAll(async ()=>{
    console.log("After All");
})
test.beforeAll(async ()=>{
    console.log("Before All");
})

test.beforeEach(async ()=>{
    console.log("Before Each");
})

test("Test1", async ()=>{
    console.log("Test1");
})

test("Test2", async ()=>{
    console.log("Test2");
})

test("Test3", async ()=>{
    console.log("Test3");
})

