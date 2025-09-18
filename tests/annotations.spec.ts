// Annotations


/*

test.skip() marks the test as irrelevant. Playwright does not run such a test. 
Use this annotation when the test is not applicable in some configuration.

test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.

test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.

test.slow() marks the test as slow and triples the test timeout.

test.only() 

test.describe("title", async()=>{}) - Providing the global test title - 
test.step("Title of the step", async ()=>{})

test.describe.configure() - Helps us in making a configuration at file level - timeout, mode, retries


*/

import {test, expect} from '@playwright/test'
test("Test1",{tag: '@smoke'}, async ()=>{
    console.log("Test1");
})

test("@api Test2", async ()=>{
    console.log("Test2");
   // expect(25).toBe(20)
})

test("@api Test3", async ()=>{
    test.slow()
    console.log("Test3");
})