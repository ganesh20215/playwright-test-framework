

//Assertions in Playwright

//Assertions are used to verify that the actual result matches the expected result. 
// If an assertion fails, the test is marked as Failed.
//Playwright provides auto-waiting assertions, meaning it waits for the expected condition before failing the test.

//statement to use for assertion import { test, expect} from "@playwright/test";

//type of assertion
//1. Auto-Retry Assertions (Recommended) 
//2. Non-Retry Assertions (Generic JavaScript Assertions)


//1. Auto-Retry Assertions (Recommended)
//These assertions automatically wait until the expected condition vecome true
//default timeout for wait is 5 second

 import { test, expect} from "@playwright/test";

// test('verify application', async({page}) =>{
//       await page.goto("https://www.letskodeit.com/practice");
//       //await expect(page.locator('#openwindow')).toHaveText('Open Window');

//       //assertion on page
//       await expect(page).toHaveURL("test");
// })


test('verify application', async({page}) =>{

    console.log("Hello All, Good Eveneing..");

    await page.goto("https://www.letskodeit.com/practice");

    //hard assertion on page
    //await expect(page).toHaveURL("https");


    //Soft Assertions
    await expect.soft(page).toHaveURL("https");
    console.log("Hard Assert");
})

