// Login into the application
// Search for a product and add the product to the cart
// Proceed to the checkout
// Fill all the mandatory fields and select the country
// Place the order and capture the orderID
// Go to Order History page and validate if the orderID is available


let username = "testnHNk@gmail.com"
let password = "Testing@1234"
let productName = "IPHONE 13 PRO"
let country = "Singapore"


import {test, expect} from '@playwright/test'

test("E2E Automation scenario", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")

    await page.getByPlaceholder("email@example.com").clear()
    await page.getByPlaceholder("email@example.com").fill(username)

    await page.getByPlaceholder("enter your passsword").fill(password)
    await page.getByRole('button', {name:'Login'}).click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()

    const products = page.locator("div.card-body") 

    // Find the number of products are available on the page

    // count() - Returns the number of element matching with the locator

    // await products.filter({hasText: `productName`}).locator("button", {name:"Add to Cart"}).click()
    
    // waitFor() - waiting for an element on the page
    await products.last().waitFor()
    const countOfProduct = await products.count() // 3 [0-2] // 0,1,2 <3

    for(let i=0; i<countOfProduct; i++){
        const productText = await products.nth(i).locator("h5").textContent() // div.card-body h5
        if(productText === productName){
            await products.nth(i).locator("button").last().click()
            break
        }
    }
    await expect(page.locator("#toast-container")).toHaveText("Product Added To Cart")

    await page.locator("[routerlink='/dashboard/cart']").click()
    await page.getByRole('button', {name:'Checkout'}).click()

    await expect(page.locator("div.user__name input").first()).toHaveValue(username)
    // we have to use - toHaveValue()
    await page.locator("div.user__name input").last().pressSequentially("in")

    const ddResult = page.locator("section.ta-results button") // >1

    await ddResult.first().waitFor()

    const ddResultCount = await ddResult.count()
    for(let i=0; i<ddResultCount; i++){
        const countryName = await ddResult.nth(i).innerText() // textContent()
        if(countryName.trim() === country){
            await ddResult.nth(i).click()
            break
        }
    }

    await page.getByText("Place Order").click()
    await expect(page.locator("h1.hero-primary")).toContainText("Thankyou")

    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    console.log(orderID);




    // table - development of a table element
    // thead - Table heading
    // tbody - Table body - WHich will consits of all the data inside the table
    // tr - Table row
    // td - Table definition - Table column


})