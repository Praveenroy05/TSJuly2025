// APIcontext - 

import {test, expect, request} from '@playwright/test'

const postURL = "https://rahulshettyacademy.com/api/ecom/auth/login"
const postPayload = {userEmail:"testnHNk@gmail.com",userPassword:"Testing@1234"}

const orderURL = "https://rahulshettyacademy.com/api/ecom/order/create-order"

const orderPayload = {orders: [{country: "Argentina", productOrderedId: "68a961719320a140fe1ca57c"}]}

let username = "testnHNk@gmail.com"

let token
let orderID
test.beforeAll("Get token from POST api call", async ()=>{
    // APiContext - This will help us in calling different api (http method)

    const apiContext = await request.newContext()
    const postResponse = await apiContext.post(postURL, 
        {
            data: postPayload
        }
    )
    //console.log(postResponse);
    await expect(await postResponse.status()).toBe(200)
    // json() - Returns the json representation of the response
    const postData = await postResponse.json();
    expect(await postData.message).toContain("Login Successfully")

    // JSON - Javascript Object Notation

    token = await postData.token
    console.log(token);

    const orderResponse = await apiContext.post(orderURL,
        {
            data: orderPayload,
            headers:{
                "authorization" : token
            }
        }
    )

    const orderJsonResponse = await orderResponse.json()
    orderID = await orderJsonResponse.orders[0]

})

test("E2E Automation scenario using token from api call", async ({page})=>{
    // addInitScript(arg, arg1) - This helps us in executing any JS

    await page.addInitScript((value)=>{
        window.localStorage.setItem("token", value)
    }, token)

    await page.goto("https://rahulshettyacademy.com/client")

    console.log(orderID);
    await page.locator("button[routerlink='/dashboard/myorders']").click()
    await expect(page.locator("table tbody")).toBeVisible()
    const rows = page.locator("table tbody tr")
    await rows.filter({hasText:`${orderID}`}).locator("button").first().click()
    await expect(page.locator("div.col-text")).toHaveText(orderID)
    await expect(page.locator("div.address p").first()).toHaveText(username)
})