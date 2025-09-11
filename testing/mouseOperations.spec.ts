// click - click()
// double click
// right click
// Mouse Hover
// drag and drop
// scrolling - auto done by playwright - scrollIntoViewIfNeeded()
// alerts or pop-up - auto done by playwright

import {test, expect} from '@playwright/test'

test("Double click and right click validation", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // double click - dblclick()
    await expect(page.locator("#field2")).not.toHaveValue("Hello World!")
    await page.getByText("Copy Text").dblclick()
    await expect(page.locator("#field2")).toHaveValue("Hello World!")

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    await page.getByText("Double-Click Me To See Alert", {exact:true}).dblclick()

    // right click - click({button: 'right'})
    await page.getByText("right click me", {exact:true}).click({button: 'right'})
    await page.getByText("Paste", {exact: true}).click()

    await page.waitForTimeout(3000)

})

test("Handling hover over on an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    // hover() - Hover over on an element  
    await page.getByText("Add-ons", {exact: true}).hover()
    await expect(page.getByTestId("test-id-Zero Cancellation - International")).toBeVisible()
})

test("handling Drag and Drop", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const sourceELement = await page.locator("div#draggable")
    const targetElement = await page.locator("div#droppable")

    // dragTo(Locator) - Drags the sourceELement to the targetElement

    await sourceELement.dragTo(targetElement)
    await expect(targetElement).toHaveText("Dropped!")

})

test("handling Drag and Drop by using mouse", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const sourceELement = await page.locator("div#draggable")
    const targetElement = await page.locator("div#droppable")
    // Move to the sourceELement
    // Perform a mousedown
    // Move to the targetElement
    // Perform a mouseup

    await sourceELement.hover()
    await page.mouse.down()
    await targetElement.hover()
    await page.mouse.up()
    await expect(targetElement).toHaveText("Dropped!")

})

test("Handling scrolling inside the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.getByText("Download Files",{exact: true}).scrollIntoViewIfNeeded()
    // await page.getByText("Download Files",{exact: true}).click()
    // await expect(page.locator("#generatePdf")).toBeVisible()

    await page.locator("#input3").fill("Testing")
    await expect(page.locator("#input3")).toHaveValue("Testing")

    await page.getByPlaceholder("Enter Name").fill("First Name")
    await expect(page.getByPlaceholder("Enter Name")).toHaveValue("First Name")
})



