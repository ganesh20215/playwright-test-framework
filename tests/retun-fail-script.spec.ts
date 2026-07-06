

//If I am running 100 test cases
//30 test scripts are failing just because of network issue
//If we will run 30 test cases again then it might be script will be passed
//that is why we have to use fail script rereun machanisam

import { test, expect } from "@playwright/test";


// test('Verify fail script', async({page}) =>{

//     await expect(5).toBe(10);
// });