import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

let url = "https://rahulshettyacademy.com/client"
let username = "testnHNk@gmail.com"
let password = "Testing@1234"
let incorrectPassword = "test"
let errorMessage = "Incorrect email or password."


test("Valid Login Test", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Invalid Login Test", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.invalidLogin(username, incorrectPassword)
    await expect(loginPage.errorMessage).toContainText(errorMessage)
})







// test()
// test.beforeEach()

