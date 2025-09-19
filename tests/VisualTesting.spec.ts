import {test, expect} from '@playwright/test'

test("Visual Testing", async ({page})=>{
    await page.goto("https://www.flightaware.com/")
   // await page.waitForTimeout(2000)
    expect(await page.screenshot()).toMatchSnapshot("login.png")
})

