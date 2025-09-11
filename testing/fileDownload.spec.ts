//File Download - 

// Step by step process to handle file download
// 1. launch the url
// 2. We have to wait for download event to appear on the page
// 3. Identify and click on the element that is responsible for generation of download event
// 4. Wait for Completion of the download 
// 5. by using path module we can generate the path to store the downloaded file inside download folder
// 6. Download - suggetedFilename() - will return us the filename for the downloaded file
// 7. saveAs(filepath) - 
// 8. validate of the filename is available inside download folder or not

import {test, expect} from '@playwright/test'
import path from 'path'
import fs from 'fs'

test.describe.configure({mode :'parallel'})

test("File download handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#generateTxt").click()
    const downloadResult = page.waitForEvent('download')
    await page.locator("#txtDownloadLink").click()
    const download  = await downloadResult

    const downloadDir = path.join(__dirname, "../download")
    const fileName = await download.suggestedFilename()

    const filePath = path.join(downloadDir, fileName)
    await download.saveAs(filePath)

    await expect(filePath).toContain(fileName)

    await fs.promises.unlink(filePath)

    await expect(fs.existsSync(filePath)).toBeFalsy()

})


test("File download handling for PDF", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#generatePdf").click()
    const downloadResult = page.waitForEvent('download')
    await page.locator("#pdfDownloadLink").click()
    const download  = await downloadResult

    const downloadDir = path.join(__dirname, "../download")
    const fileName = await download.suggestedFilename()

    const filePath = path.join(downloadDir, fileName)
    await download.saveAs(filePath)

    await expect(filePath).toContain(fileName)

    await fs.promises.unlink(filePath)

    await expect(fs.existsSync(filePath)).toBeFalsy()

})