

//selenium, playwright + java = TestNG, Cucumber, Jnuit
//selenium, playwright + .net = Nnuit
//selenium, playwright + python = ptest
//selenium, playwright + javascript = Jasmin, Mocha
//playwright + Typescript = Inbuild framework name as Playwright Test Runner Framework


//Playwright Test Framework
//This is a build in framework used for

// Writing test cases 
// Organizing test suites 
// Running tests 
// Generating reports 
// Parallel execution 
// Retry failed tests 
// Test configuration 
// Fixtures support 
// Cross-browser testing 
// It is similar to TestNG (Java) or PyTest (Python).


//Why Frameworks Are Important in Automation Testing

// Without a framework, automation becomes messy.
// Hundreds of scripts
// No structure
// Repeated code
// Difficult debugging
// This leads to confusion and wasted time so good framework solves this.


//Benefits of Using a Framework

// Better organization
// Faster execution
// Easier maintenance
// Improved collaboration
// Scalable automation
// This is why frameworks are essential in modern automation testing.


import {test} from "@playwright/test";

//test() : Used to create test cases
//Benifite of test() is we have not to declared browser initialization code.

// test('verify to open Edso Services Application', async({page}) => {
//       await page.goto("https://www.edso.in/");
//       await page.waitForTimeout(5000);
// });

// test('verify to open PeopleNexusAI', async({page}) => {
//       await page.goto("https://www.peoplenexusai.com/");
//       await page.waitForTimeout(5000);
// });


//Playwright provides built-in annotations such as:
// test.skip() 
// test.only() 
// test.fail() 
// test.fixme() 
// test.slow()


// test('Normal Script', async({page}) => {
//     console.log('Normal Script');
// });

// test('Adavnced Script', async({page}) => {
//     console.log('Adavnced Script');
// });

//test.skip() 

// test.skip('Skip Script', async({page}) => {
//     console.log('Skip Script');
// });


//test.only() 
// test.only('Only Script 1', async({page}) => {
//     console.log('Only Script 1');
// });

// test.only('Only Script 2', async({page}) => {
//     console.log('Only Script 2');
// });


// test.fail() 

// test.fail('Failed Script we have know bug', async({page}) => {
//     console.log('Failed Script');
// });


//test.fixme()
//Marks test as broken and skips execution. It will be skipped

// test.fixme('We have to fixed this script', async({page}) => {
//     console.log('We have to fixed this script');
// });


//test.slow() : Triples the test timeout.
//Does not delay execution. It triples the test timeout, allowing long-running tests to complete without timing out.
//playwright default wait for 30 sec. If we have slow() then time will triple. It means time will be 90 sec.

// test('Adavnced Script', async({page}) => {
//     test.slow();
//     console.log('Adavnced Script');
// });
