// Login Page
// Locators related to login page only
// Methods related to the login page only

import { Locator } from "playwright";

export class LoginPage {

    private testPage
    private username : Locator
    private password
    private loginBtn
    errorMessage
    

    constructor(page) {
        this.testPage = page
        this.username = this.testPage.getByPlaceholder("email@example.com")
        this.password = this.testPage.getByPlaceholder("enter your passsword")
        this.loginBtn = this.testPage.locator("#login")
        this.errorMessage = this.testPage.locator("#toast-container")
    }


    async launchURL(url){
        await this.testPage.goto(url)
    }

    async validLogin(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async invalidLogin(username, incorrectPassword){
        await this.username.fill(username)
        await this.password.fill(incorrectPassword)
        await this.loginBtn.click()
    }
    
}