import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import products from '../TestData/product.json'


let loginPage : LoginPage
let dashboardPage : DashboardPage

    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page)
        dashboardPage = new DashboardPage(page)
    })

for(let product of products){
    test(`@smoke Add the product to the cart for ${product.productName}`, async ()=>{
        await loginPage.launchURL(product.url)
        await loginPage.validLogin(product.username, product.password)
        await expect(dashboardPage.homePageIdentifier).toBeVisible()
        await dashboardPage.searchAndAddProductToCart(product.productName)
        await expect(dashboardPage.addToCartSuccessMsg).toHaveText(product.addToCartSuccessMsg)
    })

    test(`@smoke Search and validate the product details for ${product.productName}`, async ()=>{
        await loginPage.launchURL(product.url)
        await loginPage.validLogin(product.username, product.password)
        await expect(dashboardPage.homePageIdentifier).toBeVisible()
        await dashboardPage.searchAndValidateProductDetails(product.productName)
        await expect(dashboardPage.viewPageProductName).toHaveText(product.productName)
        await expect(dashboardPage.viewPageProductPrice).toHaveText(await dashboardPage.homePageProductPrice)
    })
}


