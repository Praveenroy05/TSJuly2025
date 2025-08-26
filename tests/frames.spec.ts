// Frames - A web application integrated inside another web application

// Step by step process to handle frames

// 1. Launch the url - page.goto() - page will have a visibility only on the launched page
// 2. Perform the action on the main page
// 3. Identify the frame availbale on the page  - locator to identify the iframe tag
// const framePage = page.frameLocator()
// Nested frames - const nestedFramePage = framePage.frameLocator()
// Another nestedFrame - const Nested1 = nestedFramePage.frameLocator()
// 4. Perform the action on the frames by using "framePage" or "nestedFramePage"
// 5. Come back to the main page by using "page" fixture

import {test, expect} from '@playwright/test'

test("Frames Handling", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible()
    await page.locator("#hide-textbox").click()
    await expect(page.getByPlaceholder("Hide/Show Example")).not.toBeVisible()
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden()
    // frameLocator() - Help us in entering inside the frame on the web page
    const framePage = await page.frameLocator("#courses-iframe")

    await framePage.getByText("All Access plan").first().click()
    await expect(framePage.locator(".inner-box h1")).toContainText("Subscription")

    await page.getByRole("button", {name:'Home'}).click()
    await page.waitForTimeout(3000)
})

test("Nested Frames Handling", async ({page})=>{
     await page.goto("https://demo.automationtesting.in/Frames.html")
     await page.getByText("Iframe with in an Iframe").click()

     const outerFrame = page.frameLocator("#Multiple iframe")

     const innerFrame = outerFrame.frameLocator(".iframe-container iframe")
     await innerFrame.locator("div.row input").fill("Inner Frames")
     await expect(innerFrame.locator("div.row input")).toHaveValue("Inner Frames")

    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeVisible();
})

