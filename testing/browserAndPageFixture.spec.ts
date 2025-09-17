// browser(5%) - page (95%)
// Built in Fixture - browser, page - setup and teardown
// browser - Browser
// page - Page - Represent a single tab or page within a browser


import {test, expect} from '@playwright/test'



test("Browser fixture", async function({browser}){
    // browser Context - newContext()
    const context = await browser.newContext() 
    const page = await context.newPage()
    const context1 = await browser.newContext() 
    const page1 = await context.newPage()


    // Create a page - newPage
//     const [page, page1, page2] = await Promise.all([
//     context.newPage(),
//     context.newPage(),
//     context.newPage(),
// ]);

// // Navigate to URLs in parallel
// await Promise.all([
//     page.goto("https://google.com"),
//     page1.goto("https://facebook.com"),
//     page2.goto("https://linkedin.com"),
// ]);
   
})

test("Page fixture", async ({page})=>{
    await page.goto("https://google.com")
    await page.goto("https://facebook.com")
    await page.goto("https://linkedin.com")
    // popup event

})

test("Page fixtures", async ({page})=>{})



