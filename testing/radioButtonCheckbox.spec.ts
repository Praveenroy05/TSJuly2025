import {test, expect} from '@playwright/test'

test("Select and validate the radio button and checkbox", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // select the radio button & checkbox
    // click() - click on an element
    // check() - check the radio button or checkbox
    // await expect.soft(page.locator("#male")).toBeChecked()

    await page.locator("#male").check()
    // toBeChecked() - Ensures the Locator points to a checked input - only for Radio button and Checkbox
    await expect(page.locator("#male")).toBeChecked()

    await page.getByLabel("Tuesday", {exact:true}).check()
    await expect(page.getByLabel("Tuesday", {exact:true})).toBeChecked()

    // uncheck() - 
    await page.getByLabel("Tuesday", {exact:true}).uncheck()
    await expect(page.getByLabel("Tuesday", {exact:true})).not.toBeChecked()
})

// Hard Assertion
// Soft Assertion



