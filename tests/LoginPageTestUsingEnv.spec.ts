import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ENV } from '../utils/Env'



let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(ENV.baseURL)
})


test("Valid Login Test", async ()=>{
    await loginPage.validLogin(ENV.username, ENV.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
})

