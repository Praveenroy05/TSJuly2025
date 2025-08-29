// Enter button
// Typing 
// TAB
// Delete/Backspace/Escape
// Copy paste
// Arrow keys  - up/down/left/right
// page up/down
// Shift keyword
// Space
// digit0-9
// KeyA-Z


    // press()
    // type()
    // down()
    // up()

import {test, expect} from '@playwright/test'

test("Keyboard actions", async ({page})=>{

    await page.goto("https://demoqa.com/text-box")
    await page.getByPlaceholder("Full Name").fill("Test Usr")
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.type('e')
    await page.keyboard.press('ArrowRight')
    await page.keyboard.type('s')
    await expect(page.getByPlaceholder("Full Name")).toHaveValue("Test Users")

    await page.keyboard.press('Tab')
    await page.keyboard.type("abcd@gmail.con")
    await page.keyboard.press('Backspace')
    await page.keyboard.type('m')
    await expect(page.getByPlaceholder("name@example.com")).toHaveValue("abcd@gmail.com")

    await page.keyboard.press('Tab')
    await page.keyboard.type("Current Address")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press('Tab')
    await page.keyboard.press("Control+V")
    await expect(page.locator("#permanentAddress")).toHaveValue("Current Address")

    await page.keyboard.press("Control+A")
    await page.keyboard.press("Delete")

    await page.keyboard.down('Shift')
    await page.keyboard.press('KeyA')
    await page.keyboard.press('KeyB')
    await page.keyboard.press('KeyC')
    await page.keyboard.press('KeyD')
    await page.keyboard.up('Shift')
    await expect(page.locator("#permanentAddress")).toHaveValue("ABCD")

})


