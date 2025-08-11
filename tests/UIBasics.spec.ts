import {test, expect} from '@playwright/test'

test("Fill and validate the textbox", async ({page})=>{
    // launch the url of the application - https://practicetestautomation.com/practice-test-login/
   // goto("url") - https://
   await page.goto("https://practicetestautomation.com/practice-test-login/")
   // input#username
   // fill(value) - fill the textbox with value
   // pressSequentially(value) - fill the textbox with the value character by chracter
   await page.locator('input#username').fill("student")
   // toHaveValue(value) - validate the value of the textbox
   await expect(page.locator('input#username')).toHaveValue("student")

   await page.getByLabel("Password").fill("Password123")
   await expect(page.getByLabel("Password")).toHaveValue("Password123")

   // click on the submit button
   // click() - click on the element
 
   await page.getByRole('button', {name: 'Submit'}).click()
   //toBeVisible() - Validate the visibility of an element on the webpage
   await expect(page.locator("h1.post-title")).toBeVisible()

   // toHaveText(text) - Validate the locators have the text value as text
   // toContainText(text) - Validate if the element contains a text 
   await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")
   await expect(page.locator("h1.post-title")).toContainText("Logged In")

   await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible()

})