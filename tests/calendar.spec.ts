// Calendar - 

import {test, expect} from '@playwright/test'

test("Calendar selection handling", async ({page})=>{
  await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
  await page.locator(".ui-datepicker-trigger").click()

  const targetDay = "5"
  const targetMonth = "October"
  const targetYear = "2029"

  const monthPicker = page.locator(".ui-datepicker-month")
  const yearPicker = page.locator(".ui-datepicker-year")

//  while((await monthPicker.textContent() !=targetMonth) ||   (await yearPicker.textContent() != targetYear)){
//     await page.getByText("Next").click()
//  }


 while(!((await monthPicker.textContent() ==targetMonth) &&   (await yearPicker.textContent() == targetYear))){
    await page.getByText("Next").click()
 }

 await page.getByText(targetDay, {exact: true}).last().click()
 await expect(page.locator("#sixth_date_picker")).toHaveValue("06/05/2029")
})



test("Calendar selection handling in dynamic way", async ({page})=>{
  await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
  await page.locator(".ui-datepicker-trigger").click()

  const targetDay = 10
  const targetMonth = "March"
  const targetYear = 2028

  const monthPicker = page.locator(".ui-datepicker-month")
  const yearPicker = page.locator(".ui-datepicker-year")

// Collected all the months inside an array to convert it in the form number
const monthNames = [
    "January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"
]

// retun the 0 based index
function getMonthIndex(month){
    return monthNames.indexOf(month)
}

while(true){

    const currentMonth = await monthPicker.textContent()
    const currentYear = Number(await yearPicker.textContent())

    if(currentMonth === targetMonth && currentYear === targetYear){
        break
    }

    const currentMonthIndex  = getMonthIndex(currentMonth)
    const targetMonthIndex = getMonthIndex(targetMonth)

    if(currentYear > targetYear  || (currentYear === targetYear && currentMonthIndex > targetMonthIndex)){
        await page.getByText("Prev").last().click()
    }
    else{
        await page.getByText("Next").click()
    }
}

 await page.getByText(targetDay.toString(), {exact: true}).last().click()

//  padStart(targetCount, addString)
  // 1 - 01
 const targetMonthNumber =(getMonthIndex(targetMonth)+1).toString().padStart(2,"0")
 const targetDayNumber = targetDay.toString().padStart(2,"0")

 const expectedDate = `${targetMonthNumber}/${targetDayNumber}/${targetYear}` 
 //mm/dd/yyyy

await expect(page.locator("#sixth_date_picker")).toHaveValue(expectedDate)
})