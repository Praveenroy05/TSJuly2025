import {test, expect} from '@playwright/test'

test("Screenshot of a page", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.screenshot({path : 'screenshot/loginPage.png'})
})

test("Screenshot of an element", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('#submit').screenshot({path : 'screenshot/sumbit.png'})
})

test("Screenshot of a full page", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.screenshot({path : 'screenshot/FullPage.png', fullPage: true})
})


