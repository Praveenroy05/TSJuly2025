import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

test.describe.configure({mode: 'parallel', retries: 2, timeout: 120000})

let url = "https://rahulshettyacademy.com/client"
let username = "testnHNk@gmail.com"
let password = "Testing@1234"
let incorrectPassword = "test"
let errorMessage = "Incorrect email or password."

let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
})


test.describe("Login Page Test", async ()=>{
    test("Valid Login Test",{tag : ['@smoke', '@api']}, async ()=>{
        test.step("Login into Application", async ()=>{
            await loginPage.validLogin(username, password)
        })
        test.step("Assertion for successful test", async ()=>{
            await expect(dashboardPage.homePageIdentifier).toBeVisible()
        })
    })

    test("Invalid Login Test", {tag: '@api'}, async ()=>{
         test.step("Login into Application with incorrect credentials", async ()=>{
            await loginPage.invalidLogin(username, incorrectPassword)
         })
         test.step("Validate the error message", async ()=>{
            await expect(loginPage.errorMessage).toContainText(errorMessage, {timeout: 30000})
        })
    })
})


// --last-failed