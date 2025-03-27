const{test, expect}= require('@playwright/test');
const dataSet = JSON.parse(JSON.stringify(require('../Utils/LoginTestData.json')));

for(const data of dataSet)
{

test(`Validate login flow for ${data.email}`, async({browser})=>
{
const context= await browser.newContext();
const page= await context.newPage();
await page.goto("https://demo.haroldwaste.com/authentication");
console.log(await page.title()); //title validation
await expect(page).toHaveTitle("Jules.ai");
const email= page.locator("input[type='email']");
const password= page.locator("input[type='password']");
await email.fill(data.email);// filling username
await password.fill(data.password); // filling password
console.log("Done");
const Login=await page.locator("button[type='submit']");
Login.click();

//Navigating to sales section:

await page.locator(".sc-ftvSup").nth(2).click();
await page.locator("#root > div > div.sc-iBkjds.ihJuFh > div:nth-child(4) > div > div:nth-child(2) > div > a").click();
console.log("YEEE")
await page.waitForTimeout(5000);
await page.waitForURL("https://demo.haroldwaste.com/sales");



await page.waitForTimeout(2000);

//Navigating to Logistics section:

await page.locator(".sc-ftvSup").nth(5).hover();
console.log("Sales hovered...")
await page.locator("#root > div > div.sc-iBkjds.ihJuFh > div:nth-child(7) > div > div:nth-child(2) > div:nth-child(2) > a").click();
await page.waitForURL("https://demo.haroldwaste.com/planning-and-booking");

//Logout:

await page.locator("div[data-test-id='header-menu'] div div div span[class='MuiIconButton-label'] svg").click();
await page.locator("[data-test-id='header-logout']").click();
await page.waitForURL("https://demo.haroldwaste.com/authentication");
console.log("Logged Out now");
await page.waitForTimeout(2000);
});
}









