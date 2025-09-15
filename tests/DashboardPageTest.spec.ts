import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

let url = "https://rahulshettyacademy.com/client"
let username = "testnHNk@gmail.com"
let password = "Testing@1234"
let productName = "iphone 13 pro"
let addToCartSuccessMsg = "Product Added To Cart"


let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
})


test("Add the product to the cart validation", async ()=>{
    await dashboardPage.searchAndAddProductToCart(productName)
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText(addToCartSuccessMsg)
})

test("Search and validate the product details", async ()=>{
    await dashboardPage.searchAndValidateProductDetails(productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(productName)
    await expect(dashboardPage.viewPageProductPrice).toHaveText(await dashboardPage.homePageProductPrice)
})