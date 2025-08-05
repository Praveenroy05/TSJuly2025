import { test, expect } from '@playwright/test';


test('get started link',  async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await console.log("Launched the url");
  await page.getByRole('link', { name: 'Get started' }).click();
  await console.log("Clicked on the link");
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await console.log("The link is working");

  //page.getByText()


  //await page.getByRole()
  // page.waitForTimeout(3000) - pending, successful, rejected

  // Check login is working with valid credetials
  // Launch the url
  // fill the username
  // fill the password
  // click the login button
  // verify the user is logged in
// "(//div[@class='DayPicker-Body']//div[@class='DayPicker-Week']//div[@class='DayPicker-Day'])"
  //await page.locator("div.DayPicker-Body .DayPicker-Week .DayPicker-Day").nth(14)

 

});


// async(At function level) -await(Step level - Wherever you are trying to perform the action) concept




