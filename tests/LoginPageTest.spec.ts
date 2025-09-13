import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

let url = "https://rahulshettyacademy.com/client"
let username = "testnHNk@gmail.com"
let password = "Testing@1234"
let incorrectPassword = "test"
let errorMessage = "Incorrect email or password."

let loginPage
let dashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
})


test("Valid Login Test", async ()=>{
    await loginPage.validLogin(username, password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
})

test("Invalid Login Test", async ()=>{
    await loginPage.invalidLogin(username, incorrectPassword)
    await expect(loginPage.errorMessage).toContainText(errorMessage)
})


