const {test}=require('@playwright/test');
const{expect}= require('@playwright/test');

test('Browser context playwright test', async ({browser})=>
{
const context=await browser.newContext(); //newcontext means it opens a new fresh browser after that a new page
const page=await context.newPage();
await page.goto("https://www.google.com");
console.log(await page.title());
await expect (page).toHaveTitle('Google');
page.locator()
});