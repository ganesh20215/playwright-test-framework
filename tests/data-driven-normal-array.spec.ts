

//Need of data driven testing
//Defining Hardcoded test data will never recommanded.
//because if we are trying to do then it's really hard to mainaine such thing 

//import { test, expect } from "@playwright/test";

/*test('verify login with valid username and valid password', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
});

test('verify login with valid username and invalid password', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('test');
    await page.locator('#login-button').click();
});

test('verify login with invalid username and valid password', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('test');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
});

test('verify login with invalid username and invalid password', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('test');
    await page.locator('#password').fill('test');
    await page.locator('#login-button').click();
});*/

//Data-driven testing is a testing approach where the same test logic is executed multiple times using different sets of test data. 
//Instead of writing separate test cases for each data combination, you store the data externally or internally and iterate through it.
//Playwright Test provides excellent support for data-driven testing because tests are written in JavaScript/TypeScript.


//Why Data-Driven Testing?
//Suppose you want to test login functionality with multiple users.
//we have to login with different users but same script I have create again and again


//1. Data Driven using Array of Object

//2. Skip Specific Data
//test.skip(!data.run, `Login ${data.username}`);

/*const loginData = [
    {
        username: "standard_user",
        password : "secret_sauce",
        expect : "sucess",
        tag : "@smoke"
    },

        {
        username: "standard_user",
        password : "Test",
        expect : "fail",
       tag : "@negative"
    },

        {
        username: "Test",
        password : "secret_sauce",
        expect : "fail",
        tag : "@negative"
    },

        {
        username: "Test",
        password : "Test",
        expect : "fail",
        tag : "@negative"
    },
];*/

/*
for (const data of loginData) {
// test.skip(!data.hello, `Login ${data.username}`);
test(`verify login with ${data.tag}, ${data.username}, ${data.password}`, async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(data.username);
    await page.locator('#password').fill(data.password);
    await page.locator('#login-button').click();
  
    if (data.expect=== 'sucess') {
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            await page.locator('.shopping_cart_link').click();
            await page.waitForTimeout(3000);
    
          
    }else {
        await expect(page.locator('//h3[@data-test="error"]')).toBeHidden();
    }
});
}*/



//Data-Driven Testing with JSON File
//Data-driven testing allows you to execute the same test multiple times with different sets of test data.
//One of the most common ways to store test data is in a JSON file.

// import loginData from "../test-data/login-data.json";

// for (const data of loginData) {
// test(`verify login with ${data.tag}, ${data.username}, ${data.password}`, async({page})=>{
//     await page.goto('https://www.saucedemo.com/');
//     await page.locator('#user-name').fill(data.username);
//     await page.locator('#password').fill(data.password);
//     await page.locator('#login-button').click();
  
//     if (data.expect=== 'sucess') {
//         await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
//             await page.locator('.shopping_cart_link').click();
//             await page.waitForTimeout(3000);
    
          
//     }else {
//         await expect(page.locator('//h3[@data-test="error"]')).toBeHidden();
//     }
// });
// }

// import login from "../test-data/data-with-scenario.json";

// test(`verify login with ${login.validLogin}`, async({page})=>{
//     await page.goto('https://www.saucedemo.com/');
//     await page.locator('#user-name').fill(login.validLogin.username);
//     await page.locator('#password').fill(login.validLogin.password);
//     await page.locator('#login-button').click();
  
// });

// test(`verify invalid with ${login.invalidLogin}`, async({page})=>{
//     await page.goto('https://www.saucedemo.com/');
//     await page.locator('#user-name').fill(login.invalidLogin.username);
//     await page.locator('#password').fill(login.invalidLogin.password);
//     await page.locator('#login-button').click();
  
// });


//Read the data from excel file
//In Playwright with TypeScript, the most common way to read data from an Excel file is by using the xlsx package.

import { test, expect } from "@playwright/test";
import { ExcelReader } from "./ExcelReader";


const testData = ExcelReader.readExcel(
    './test-data/LoginData.xlsx',
    'loginData'
)


test(`verify invalid with `, async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(testData[0]. username);
    await page.locator('#password').fill(testData[0]. password);

    await page.waitForTimeout(5000);
    
    await page.locator('#login-button').click();
  
});