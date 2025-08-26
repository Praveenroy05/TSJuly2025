// Codegen - Internal tool available inside Playwright
// Record and Playback tool
// To open the codegen - npx playwright codegen "url"

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await expect(page.getByRole('button', { name: 'click' })).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Downloads' }).click();
  await expect(page1.locator('#bindings')).toContainText('WebDriver Language Bindings');
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeVisible();
});



test('Frame Handling by using codegen', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');
  await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();

  const framePage = page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox')

  await framePage.click();
  await framePage.fill('Testing');
  await expect(framePage).toHaveValue('Testing');
});


