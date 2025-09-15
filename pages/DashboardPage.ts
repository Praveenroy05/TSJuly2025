import { Page } from "playwright"

export class DashboardPage {

    private page
    private products
    homePageIdentifier
    addToCartSuccessMsg
    viewPageProductName
    viewPageProductPrice
    homePageProductPrice: string

    constructor(page:Page){
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.homePageIdentifier = this.page.locator(".fa-sign-out")
        this.addToCartSuccessMsg = this.page.locator("#toast-container")
        this.viewPageProductName = this.page.locator("div.rtl-text h2")
        this.viewPageProductPrice = this.page.locator("div.rtl-text h3")
        this.homePageProductPrice = ""
    }


    async searchAndAddProductToCart(productName: string){
        await this.products.last().waitFor()
        const countOfProduct = await this.products.count()

        for(let i=0; i<countOfProduct; i++){
            const productText = await this.products.nth(i).locator("h5").textContent()
            if(productText === productName){
                await this.products.nth(i).locator("button").last().click()
                break
            }
        }
    }

    async searchAndValidateProductDetails(productName: string){
        await this.products.last().waitFor()
        const countOfProduct = await this.products.count()

        for(let i=0; i<countOfProduct; i++){
            const productText = await this.products.nth(i).locator("h5").textContent()
            if(productText === productName){
                this.homePageProductPrice = this.products.nth(i).locator("div.text-muted").innerText()
                await this.products.nth(i).locator("button").first().click()
                break
            }
        }
    }



}