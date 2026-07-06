


import {test, expect} from "@playwright/test";

// test.describe(
//     'Login Tests',
//     {
//         tag: '@smoke'
//     },
//     () => {
//         test('Valid Login', async ({ page }) => {
//         });

//         test('Invalid Login', async ({ page }) => {
//         });
//     }
// );


// test.describe('Parallel Tests', () => {

// test.describe.configure({ mode: 'parallel' });

// test('Test 1', async ({ page }) => {
//     console.log('Test 1');
// });

// test('Test 2', async ({ page }) => {
//     console.log('Test 2');
// });

// test('Test 3', async ({ page }) => {
//     console.log('Test 3');
// });

// });

// test.describe('Login Tests', () => {

//     test('Login', async ({ page }) => {
//         console.log('Login');
//     });

//     test('Logout', async ({ page }) => {
//         console.log('Logout');
//     });

// });

// test('Verify check demo', async ({page}) => {
//     await page.goto('/product/peoplenexusai');
//     await page.waitForTimeout(5000);
//     await expect(page.getByTitle("Tesasfdasfast")).toBeVisible();

// });


//With Data-Driven Testing

// const users = [
//   { username: 'standard_user', password: 'secret_sauce' },
//   { username: 'standard_user', password: 'emp123' },
//   { username: 'hr', password: 'secret_sauce' },
//   { username: 'hr', password: 'emp123' }
// ];

// for (const user of users) {

//   test(`Login with Test check ${user.username} ${user.password}`, async ({ page }) => {
//         await page.goto('https://www.saucedemo.com/');
//         await page.locator('#user-name').fill(user.username);
//         await page.locator('#password').fill(user.password);
//   });

// }


// import loginData from '../test-data/loginData.json';

// for (const data of loginData) {

//     test(`Login Test : ${data.username}`, async ({ page }) => {

//         await page.goto('https://www.saucedemo.com/');

//         await page.locator('#user-name').fill(data.username);

//         await page.locator('#password').fill(data.password);

//         await page.locator('#login-button').click();

//         if (data.expected === 'success') {

//             await expect(page).toHaveURL(/inventory/);

//         } else {

//             await expect(page.locator('[data-test="error"]'))
//                 .toContainText('Epic sadface');
//         }
//     });
// }

//Hello Team