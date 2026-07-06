# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assertion.spec.ts >> verify application
- Location: tests\assertion.spec.ts:31:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https"
Received: "https://www.letskodeit.com/practice"
Timeout:  5000ms

Call log:
  - Expect "soft toHaveURL" with timeout 5000ms
    13 × unexpected value "https://www.letskodeit.com/practice"

```

```yaml
- navigation:
  - link "letskodeit":
    - /url: /
    - img "letskodeit"
  - list:
    - listitem:
      - link "HOME":
        - /url: /home
    - listitem:
      - link "ALL COURSES":
        - /url: /courses
    - listitem:
      - link "INTERVIEW":
        - /url: /interview
    - listitem:
      - link "SUPPORT":
        - /url: /support
    - listitem:
      - link "BLOG":
        - /url: /blog
    - listitem: PRACTICE
  - link "Sign In":
    - /url: /login
- heading "Practice Page" [level=1]
- banner
- group "Radio Button Example":
  - text: Radio Button Example
  - radio
  - text: BMW
  - radio
  - text: Benz
  - radio
  - text: Honda
- group "Checkbox Example":
  - text: Checkbox Example
  - checkbox
  - text: BMW
  - checkbox
  - text: Benz
  - checkbox
  - text: Honda
- group "Switch Window Example":
  - text: Switch Window Example
  - button "Open Window"
- group "Switch Tab Example":
  - text: Switch Tab Example
  - link "Open Tab":
    - /url: https://www.letskodeit.com/courses
- group "Select Class Example":
  - text: Select Class Example
  - combobox:
    - option "BMW" [selected]
    - option "Benz"
    - option "Honda"
- group "Multiple Select Example":
  - text: Multiple Select Example
  - listbox:
    - option "Apple"
    - option "Orange"
    - option "Peach"
- group "Auto Suggest Example":
  - text: Auto Suggest Example
  - status
  - textbox "Start Typing..."
- group "Enabled/Disabled Example":
  - text: Enabled/Disabled Example
  - button "Disable"
  - button "Enable"
  - textbox "Enabled/Disabled Field"
- group "Element Displayed Example":
  - text: Element Displayed Example
  - button "Hide"
  - button "Show"
  - textbox "Hide/Show Example"
- group "Switch To Alert Example":
  - text: Switch To Alert Example
  - textbox "Enter Your Name"
  - button "Alert"
  - button "Confirm"
- group "Mouse Hover Example":
  - text: Mouse Hover Example
  - button "Mouse Hover"
- group "Web Table Example":
  - text: Web Table Example
  - table:
    - rowgroup:
      - row "Author Course Price":
        - columnheader "Author"
        - columnheader "Course"
        - columnheader "Price"
      - row "Let's Kode It Selenium WebDriver With Java 35":
        - cell "Let's Kode It"
        - cell "Selenium WebDriver With Java"
        - cell "35"
      - row "Let's Kode It Python Programming Language 30":
        - cell "Let's Kode It"
        - cell "Python Programming Language"
        - cell "30"
      - row "Let's Kode It JavaScript Programming Language 25":
        - cell "Let's Kode It"
        - cell "JavaScript Programming Language"
        - cell "25"
- group "iFrame Example":
  - text: iFrame Example
  - iframe
- paragraph: © 2026 letskodeit
- list:
  - listitem:
    - link "Home":
      - /url: /
  - listitem:
    - link "Courses":
      - /url: /courses
  - listitem:
    - link "Support":
      - /url: /support
  - listitem:
    - link "Terms & Conditions":
      - /url: /terms
  - listitem:
    - link "Privacy Policy":
      - /url: /privacypolicy
  - listitem:
    - link "Cookie Policy":
      - /url: /cookiepolicy
- list:
  - listitem:
    - link "":
      - /url: https://www.facebook.com/letskodeit/
  - listitem:
    - link "":
      - /url: "#"
  - listitem:
    - link "":
      - /url: https://twitter.com/letskodeit
  - listitem:
    - link "":
      - /url: https://www.youtube.com/c/LetsKodeItOfficial
- contentinfo
```

# Test source

```ts
  1  | 
  2  | 
  3  | //Assertions in Playwright
  4  | 
  5  | //Assertions are used to verify that the actual result matches the expected result. 
  6  | // If an assertion fails, the test is marked as Failed.
  7  | //Playwright provides auto-waiting assertions, meaning it waits for the expected condition before failing the test.
  8  | 
  9  | //statement to use for assertion import { test, expect} from "@playwright/test";
  10 | 
  11 | //type of assertion
  12 | //1. Auto-Retry Assertions (Recommended) 
  13 | //2. Non-Retry Assertions (Generic JavaScript Assertions)
  14 | 
  15 | 
  16 | //1. Auto-Retry Assertions (Recommended)
  17 | //These assertions automatically wait until the expected condition vecome true
  18 | //default timeout for wait is 5 second
  19 | 
  20 |  import { test, expect} from "@playwright/test";
  21 | 
  22 | // test('verify application', async({page}) =>{
  23 | //       await page.goto("https://www.letskodeit.com/practice");
  24 | //       //await expect(page.locator('#openwindow')).toHaveText('Open Window');
  25 | 
  26 | //       //assertion on page
  27 | //       await expect(page).toHaveURL("test");
  28 | // })
  29 | 
  30 | 
  31 | test('verify application', async({page}) =>{
  32 | 
  33 |     console.log("Hello All, Good Eveneing..");
  34 | 
  35 |     await page.goto("https://www.letskodeit.com/practice");
  36 | 
  37 |     //hard assertion on page
  38 |     //await expect(page).toHaveURL("https");
  39 | 
  40 | 
  41 |     //Soft Assertions
> 42 |     await expect.soft(page).toHaveURL("https");
     |                             ^ Error: expect(page).toHaveURL(expected) failed
  43 |     console.log("Hard Assert");
  44 | })
  45 | 
  46 | 
```