
// Locators - To identify the element on the page is known as locating an element.

// 1. css selector 
// 2. xpath
// 3. Playwright specific locators method - (getBy Locators)

// 1. css selectors


// DOM - Document object model - <label class="sdfdf">Email</lable>


// <input type="text" name="username" id="username">

// input - tagName
// type, name, id  - attribute - 

// <label for="username">Username</label>

// label - tagName
// for - attribute
// Username - Text value for an element

/**
 *  CSS SELECTOR
 * 
 * 1. if "id" as an attribute is present we can use the below css selector for locators:
 * Syntax: - 
 * 
 *  a. tagname#idvalue or b. #idvalue or c.[id='value']
 * 
 * Ex: - if tagname is <input> and id is username(id ='username')
 * input#username OR #username
 * 
 * 2. if "class" attribute is present we can use the below selectors:
 * 
 * tagname.classname or .classname or c. [class='classvalue'] // .classname.classname2.classname3
 * //input.mr-sm-2.form-control
 * 
 * 
 * Ex: - if tagname is "input" and classname is "user"
 * input.user OR .user   
 * 
 * 3. Write css based on any attribute: []
 * 
 * [attribute = 'value'] - Ex: - [type='username'].first() // [value="Login"]
 * 
 * tagname[attribute = 'value'] - input[id='value']
 *  
 * 
 * 4. Write css traversing from parent to child:
 * 
 * parenttagename >> childtagname or parentLocator childLocator
 * 
 * Ex: - input >> div (OR) input div (by just provide a space between parent and child)
 * #userEmail-wrapper input
 * 
 * #form #username
 * 
 * first() - first matching
 * last() - last matching
 * nth(index) - nth(0) - nth(1)
 * 
 

* 5. By writing the locators based on the text: - We do not use
 * 
 * Ex: - ("text= Add to cart") // ("text= Email")
 * 
 * <h5>Email</h5> - ('text= Email') // ("text = Email")
 * 
 * <h5>Student Registration Form</h5>
 * 
 * ("text=Student Registration Form")
 * 
 */

/*
// 2. XPATH

//  / - Absolute xpath - /html/body/div/div/section/section/h2
// // - Relative xpath - //*[@id='login']/h2

// In xpath the index will starts from 1 

//tagname or *[@attribute = 'value'] - (//*[@attribute = 'value'])[2]

1.// (//*[@attribute='value'])[1] - //*[@attribute = 'value']

//*[@id='userEmail']

2. (//tagname[@attribute='value'])[1] - //tagname[@attribute = 'value']

(//input[@id='userEmail'])[1]

AXES - xpath

3. // Parent to child

//div[@class='form-group']/input[@id='userEmail']

4. //label[@for='email']/following-sibling::input[@id='userEmail']
  //label[@for='username']/following-sibling::input

  //h1[@class='text-center']/following-sibling::h5[1]

5. //input[@id='userEmail']/preceding-sibling::label


// <label for="username">Username</label> - preceding sibling to input tag
// <input type="text" name="username" id="username"> - following sibling to label tag



// 6. //h2[text() = 'Test login']  -  //h5[text() = 'Student Registration Form']
// 7. (//h2[contains(text(), 'Test')])[1]

//*[contains(text(),'Registration')]  -- //h5[contains(text(),'Registration')]

//li[contains(text(),'Login functionality')]

//Syntcx:
// * or tagName[contains(text(), 'Registration')]
//h2[contains(text(), 'login')]/parent::section


// 8. From child to parent traversing

// * or tagname [@attribute='value']/parent::parentTag
//div[@id='genterWrapper']/parent::form - From child to Parent

//input[@id='username']/ancestor::*[2]




// <div id ='abc'> Email </div>



// To write the locator using CSS or XPATH - page.locator("#idvalue")



*/

// 3. Playwright special methods for locators

// GetBy Locators in Playwright

/*

These are the recommended built-in locators.

1. page.getByRole() to locate by explicit("role" as an attribute) and implicit accessibility attributes.

2. page.getByText('Student Registration Form', {exact: true}) to locate by text content.

3. page.getByLabel() to locate a form control by associated label's text.

      1. When you have "for" as an attribute for an element that have been developed using <label> - there we can directly use page.getByLable('label text')
      2. When you find out <input> inside the <label> - 

4. page.getByPlaceholder('First Name')  - to locate an input by placeholder as an attribute.

5. page.getByAltText("logo image") to locate an element, usually image, by its text alternative.("alt" as an attribute)

6. page.getByTitle("Home page link") to locate an element by its "title" attribute.

7. page.getByTestId() to locate an element based on its "data-testid" attribute (other attributes can be configured).


*/


//await expect(page.getByRole('heading', { name: 'Sign up', exact :true }))..toBeVisible();

//await page.getByRole('checkbox', { name: 'Subscribe' }).check();

// await page.getByRole('button', { name: /submit/i }).click();


/*


alert" | "alertdialog" | "application" | "article" | "banner" | "blockquote" | "button" | "caption" | "cell" | "checkbox" | "code" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "deletion" | "dialog" | "directory" | "document" | "emphasis" | "feed" | "figure" | "form" | "generic" | "grid" | "gridcell" | "group" | "heading" | "img" | "insertion" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "meter" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "none" | "note" | "option" | "paragraph" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "strong" | "subscript" | "superscript" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "time" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem"



page.getByRole('heading', { name: 'Submit' }).click();

<h1-h6> = heading
<button> = button
<a> = link
<table> = table
<img> = img
<input> = textbox
<td> = cell
<th> = columnheader
<tr> = row
<p> = paragraph
<li> = listitem
radio
checkbox
role = tooltip

*/

import {test, expect} from '@playwright/test';

test('Fill input', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel("Username").fill('student');

  await page.waitForTimeout(5000)
})