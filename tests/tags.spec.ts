


// Tags in the Playwright Test Runner are used to categorize, filter, and execute specific groups of tests. 
// They are very useful when you want to run only Smoke, Regression, Sanity, API, UI, or Feature-specific test cases.

//Why Use Tags
// Run a specific set of tests. 
// Separate Smoke, Regression, Sanity suites. 
// Execute tests based on modules. 
// Integrate with CI/CD pipelines. 
// Reduce execution time.


//single tag
//run script with specific group : npx playwright test --grep "@smoke"
//we can define multiple tags as well

//for exclude tags we have to use command : npx playwright test --grep-invert "@sanity"

import {test} from "@playwright/test";

// test('Verify Login of functionality @smoke', async({page}) => {
//     console.log('Login of functionality');
// });

// test('Verify Account Creation @smoke @regression', async({page}) => {
//     console.log('Account Creation');
// });

// test('Verify Fund Transfer @sanity', async({page}) => {
//     console.log('Fund Transfer');
// });

// test('Verify Login', {tag: ['@adarsh', '@smoke']},
// async ({ page }) => {
//  }
// );


//test.describe() is used to group related test cases together. 
//It helps organize tests and allows you to apply hooks (beforeEach, afterEach, etc.) and annotations to a group of tests.
//verify login with valid username and valid password
//verify login with valid username and invalid password
//verify login with invalid username and valid password
//verify login with invalid username and invalid password

// test.describe(
//     'Login Tests',
//     {
//         tag: '@smoke'
//     },
//     () => {
//         test('login with valid username and valid password', async ({ page }) => {
//         });

//         test('login with valid username and invalid password', async ({ page }) => {
//         });

//             test('login with invalid username and valid password', async ({ page }) => {
//         });

//             test('login with invalid username and invalid password', async ({ page }) => {
//         });
//     }
// );


//Hello Everyone, Good Evening...