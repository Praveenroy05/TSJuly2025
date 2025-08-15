// Alerts or popup - dialog event 

// Different types of alerts are available:
// 1. alert - Will have a single button
// 2. Confirm Alert - Will have 2 buttons - Ok, cancel
// 3. Prompt Alert - Will also have a textbox to enter something.


// Step by step process:

// 1. Launch the url
// 2. We have to wait for "dialog" event to appear on the page and write the logic to handle the scenario
// 3. Identify and click on the element/button which is responsibile for generation of "dialog" event.

import {test, expect} from '@playwright/test'

test("Alert Handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // page.on(event, listener - callbackFun)
    // page.waitForEvent(event, listener?)

    // Dialog - Class inside the Playwright

    // accept(text?) - Ok
    // dismiss() - Cancel
    // message() - Gets the text value that is displayed on the alert
    // type() - Check the type of the alert - Alert, Confirm, Prompt
    // defaultValue() - It will only work for prompt alert if it has any defualt value inside the textbox

    page.on('dialog', (dialog)=>{
        console.log(dialog.message())
        expect(dialog.message()).toContain("alert box")
        dialog.dismiss()
    })

    await page.locator("#alertBtn").click()

})

test("Confirm alert Handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog', (dialog)=>{
            console.log(dialog.message())
            dialog.dismiss()
    })

    await page.locator("#confirmBtn").click()
    await expect(page.locator("#demo")).toContainText("You pressed Cancel!")

})

test("Prompt alert Handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const text = "I agree"
    page.on('dialog', (dialog)=>{
        console.log(dialog.type());
        console.log(dialog.message())
        console.log(dialog.defaultValue());
        dialog.accept(text)
    })

    await page.locator("#promptBtn").click()
    await expect(page.locator("#demo")).toContainText(`Hello ${text}!`)

})