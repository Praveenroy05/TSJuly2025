// Drop down - 

// 2 Types of DD
// 1. Static DD - THe  value might never get change
    // a. Single Select DD
    // b. Multi Select DD
// 2. Dynamic DD  - THe value might get changed
      // a. Single Select DD
      // b. Multi Select DD

// Development of a drop down
// 1. By using <select> tag
// 2. By using non <select> tag - div, li, option ul


// 1. DD developed using <select> tag
// Step by step procedure to handle this

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Get the values/options from the drop down by using  - selectOption("value as an attribute")
        // It also accepts 3 different optional parameter - {value or label or index}
// 4. If the DD is multi-select - selectOption(["AS", "BS", "CS"])
// page.locator("#dd").selectOption(["AS", {label: "Albania"}, {index: 13}])

//*********************************************************************** */

// 2. DD developed using non <select> tag
// Step by step procedure to handle this

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Click on the drop down element
// 4. Locate the option that we are trying to select from the drop down
// 5. Click on the identified element in the step -4

import {test, expect} from '@playwright/test'

test("Handling the DD developed using select tag", async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown")

    await page.locator("#country").selectOption("AS")
    // assertion - toHaveValue("Bahamas")
    await page.locator("#country").selectOption({value: "BS"})
    await page.locator("#country").selectOption({label: "Georgia"}) // toHaveValue("Georgia")
    await page.locator("#country").selectOption({index: 13})

    // Multi -select
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(["saab", "Audi"])
    await page.waitForTimeout(2000)
    await page.locator("#cars").selectOption([{value:"volvo"}, {label: 'Opel'}, {index: 1}])
    await expect(page.locator("#cars")).toHaveValues(["volvo", "saab", "opel"])
    // toHaveValues()
    await page.waitForTimeout(2000)

})

test("Handling the DD developed using non select tag", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("div.css-1hwfws3").first().click()
    await page.locator("#react-select-2-option-2").click()
    await page.waitForTimeout(2000)

    await page.locator("div.css-1hwfws3").last().click()
    await page.getByText("Blue", {exact: true}).last().click()
    await page.locator("#react-select-4-option-3").click()
    await page.locator("#react-select-4-option-2").click()
    await page.waitForTimeout(2000)

})



