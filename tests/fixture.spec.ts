


//fixture
//Fixture are reusable setup and tear down componant in playwright test runner
//This fixture helps to create and manage test dependencies
//browser, context, page, testdata, etc.

// import { test, expect} from "@playwright/test";

// test('verify application', async({context}) =>{
    
    //without fixture

     //const browser = await chromium.lanuch();
     // const page = await browser.newPage();
    //   await page.goto("https://edso.in");
    //   await page.waitForTimeout(2000);
    //   await expect(page.getByTitle('TestCheck')).toBeVisible();


    //with fixture
    // await page.goto("https://edso.in");
    //   await page.waitForTimeout(2000);
    //   await expect(page.getByTitle('TestCheck')).toBeVisible();

    //browser fixture : provide browser instance
    // const page = await browser.newPage();
    // await page.goto("https://edso.in");

    //context fixture : create an isolated session
    // const page = await context.newPage();
    // await page.goto("https://edso.in");

//})