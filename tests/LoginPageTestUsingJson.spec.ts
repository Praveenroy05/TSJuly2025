import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import loginData from '../TestData/login.json'

let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(loginData.url)
})


test("Valid Login Test", async ()=>{
    await loginPage.validLogin(loginData.username, loginData.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
})

test("Invalid Login Test", async ()=>{
    await loginPage.invalidLogin(loginData.username, loginData.incorrectPassword)
    await expect(loginPage.errorMessage).toContainText(loginData.errorMessage)
})


