// Framework - It is a design principle. Set of guidlines.


function loginIntoApplication(){
    // Fill the username
    // Fill the password
    // Click on the login button
}



// Duplication - 100 Tcs - 300 lines of code just for login - 195 lines of codes
// Maintenance - 100 - all the test cases - 99 steps in terms of maintenance
// Resuability - 


// 1. Resuability
// 2. Less Duplication
// 3. Less Maintenance
// 4. Organise the code - Separate logic into different layers.

// POM - Page Object Model

// Page Object Model is a design pattern used in the software testing to represent a webpage as an object. It is a way to organise and manage the interaction  with a web page by creation the properties (variable) and methods(actions) of that particular page.

// This approach helps us in reducing the code duplication, improving test maintanabiltiy and enhances the readability by encapsulating the page logic within a dedicated class or module.

// POM framework from scratch

// There are different layers that we have to design:

// 1. PAGE LAYER - Will create a package or folder (pages) - Locators and methods related to that specific page.
// LoginPage.ts, DashboardPage.ts, CartPage.ts, ...

// 2. TEST LAYER - Will create a package or folder (tests) - Pure test cases and the assertions
// LoginPageTest.spec.ts, DashboardPageTest.spec.ts, ...

// 3. DATA LAYER - Will create a package or folder (TestData, data) - JSON/EXCEL - TestData.json, TestData.xlsx

// 4. CONFIGURATION LAYER - playwright.config.ts - Global Configuration

// 5. UTILS LAYER - We will create a util folder - Custom Function, screenshot(), scrollDown(), get the data from excel, API method, getToken(), database connection

// 6. REPORT LAYER - HTML/Allure - We do not have to create it separately.









