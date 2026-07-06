

//worker in playwright
// A Worker in Playwright is a separate process that executes test files. 
// Workers enable parallel execution of tests, making test runs faster.
// A worker is an independent process created by Playwright Test Runner. 
// Each worker launches its own browser instance. 
// Multiple workers can run test files simultaneously. 
// Workers do not share memory or variables with each other.

import {test} from "@playwright/test";

// test('verify to open Edso Services Application', async({page}) => {
//       await page.goto("https://www.edso.in/");
//       await page.waitForTimeout(5000);
// });

// test('verify to open PeopleNexusAI', async({page}) => {
//       await page.goto("https://www.peoplenexusai.com/");
//       await page.waitForTimeout(5000);
// });

// test('verify to Amazon', async({page}) => {
//       await page.goto("https://www.amazon.in/");
//       await page.waitForTimeout(5000);
// });

// test.afterEach(async ({}, testInfo) => {
//     console.log(testInfo.workerIndex);
// });
