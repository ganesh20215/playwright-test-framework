

//Hooks are special methods provided by the Playwright Test Runner that allow you to execute code before or after test execution.

// Hooks are mainly used for:

// Browser setup and cleanup 
// Login functionality 
// Database setup 
// Test data creation 
// Screenshot capturing 
// Environment initialization 
// Resource cleanup

//1. beforeAll()
//2. beforeEach()
//3. afterEach()
//4. AfterAll()

//beforeAll()
//Runs only once before all tests in a test file or describe block.

//afterAll()
//Runs only once after all tests in a test file or describe block.

//beforeEach()
//Runs before every test case.

//afterEach()
//Runs after every test case.

//we can declared multiple hook in playwright test frameword

//Using testInfo with Hooks
//testInfo provides information about the current test.




import {test} from "@playwright/test";

// test('Test A', async({page}) => {
//     console.log('Test A');
// });

// test('Test B', async({page}) => {
//     console.log('Test B');
// });

// test('Test C', async({page}) => {
//     console.log('Test C');
// });

// test.afterAll( async () => {
//     console.log("After All");
// });

// test.beforeAll( async () => {
//     console.log("Before All");
// });

// test.beforeEach( async () => {
//     console.log("Before Each 1");
// });

// test.afterEach( async () => {
//     console.log("After Each 1");
// });

// test.afterEach(async ({ page }, testInfo) => {
//     console.log(testInfo.title);
//     console.log(testInfo.status);
//     console.log(testInfo.duration);
// });


// test.beforeEach( async () => {
//     console.log("Before Each 2");
// });

// test.afterEach( async () => {
//     console.log("After Each 2");
// });