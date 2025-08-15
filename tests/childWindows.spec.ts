// Multiple tabs/windows - popup event


// Step by Step process:

// 1. Launch the url
// 2. Wait for popup event to appear on the - const page1 = page.waitForEvent('popup')
// 3. Identify and click on the element which is responsible for generation of a popup event
// 4. wait for the successfull result from the waitForEvent() - const newPage = await page1
// 5. Perform any action on the new page/window - our main control for that becomes the newPage.locator()
// 6. Come back to the original page and perform some action - page



import {test, expect} from '@playwright/test'

test("Multiple windows handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html") // original page
   // pending, successfull, rejected
    const page1 = page.waitForEvent('popup')
    await page.getByText('click', {exact: true}).first().click()
    const newPage = await page1
    await newPage.getByText("Downloads").click()
    await expect(newPage.locator("#bindings")).toContainText("WebDriver Language")
    await page.bringToFront()
    await page.waitForTimeout(2000)
    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})

test("Multiple windows handlings", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html") // original page
   // pending, successfull, rejected
    await page.getByText('click', {exact: true}).first().click()
    const newPage = await page.waitForEvent('popup')
    await newPage.getByText("Downloads").click()
    await expect(newPage.locator("#bindings")).toContainText("WebDriver Language")
    await page.bringToFront()
    await page.waitForTimeout(2000)
    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})


test("Multiple windowssdfdsf handlings", async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://demo.automationtesting.in/Windows.html") 

    // const newPages = [];

    // context.on('page', async (newPage)=>{
    //     await newPages.push(newPage);
    // })
    const pages = context.pages()
    for(const p of pages){
        
    }

})