import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import loginData from '../TestData/login.json'
import * as allure from "allure-js-commons";

let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(loginData.url)
})


test("@smoke Valid Login Test", async ()=>{
    await loginPage.validLogin(loginData.username, loginData.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
    await allure.issue("https://github.com/allure-framework/allure-js/tree/main/packages/allure-playwright", "JIRA-123")
})

test("@smoke Invalid Login Test", async ()=>{
    await loginPage.invalidLogin(loginData.username, loginData.incorrectPassword)
    await expect(loginPage.errorMessage).toContainText(loginData.errorMessage)
})


