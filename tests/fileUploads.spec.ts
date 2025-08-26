// File Upload - We need a data to upload

import {test, expect} from '@playwright/test'
import path from 'path'

test('Single File Upload', async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // setInputFiles(pathoffile) - Upload file or multiple files into <input type=file>

    const filePath = path.join(__dirname, "../TestData/Courses.txt")

    await page.locator("#filesToUpload").setInputFiles(filePath)

    await expect(page.locator("#fileList li")).toContainText("Courses.txt")
    await page.locator("#filesToUpload").setInputFiles([])
    await expect(page.locator("#fileList li")).toContainText("No Files Selected")
})

test('Multiple File Uploads', async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // setInputFiles(pathoffile) - Upload file or multiple files into <input type=file>

    const filePath1 = path.join(__dirname, "../TestData/Courses.txt")
    const filePath2 = path.join(__dirname, "../TestData/Cypress.txt")

    await page.locator("#filesToUpload").setInputFiles([filePath1, filePath2])

    await expect(page.locator("#fileList li").first()).toContainText("Courses.txt")
    await expect(page.locator("#fileList li").last()).toContainText("Cypress.txt")

    await page.locator("#filesToUpload").setInputFiles([])
    await expect(page.locator("#fileList li")).toContainText("No Files Selected")
})


