import {test, expect} from '@playwright/test'

test("Get text from an element and multiple elements", async ({page})=>{

    await page.goto("https://www.xe.com/currencyconverter/")
    // textContext()
    const textValue = await page.locator("h1.text-center").textContent()
    console.log(textValue);
    // Static assertion - Non retrying assertion
    await expect(textValue).toBe("Xe Currency Converter")
    await expect(textValue).toContain("Converter")

    await page.goto("https://testautomationpractice.blogspot.com/")
    // allTextContents()
    const allText = await page.locator("h2.title").allTextContents()
    console.log(allText);

    // Auto waiting - Automatically waiting for an element for some seconds (30)


})