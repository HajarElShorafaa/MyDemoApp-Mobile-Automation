# Mobile Automation Test for Login Feature in MyDemoApp

## Setup
1. Install dependencies: `npm install`
2. Start Appium server: `appium`
3. Update device capabilities in `wdio.conf.js` for iOS and Android testing.

note: this project has been run on android device only (due to inaccessibility to mac device)

## Run Tests
Run tests using WebdriverIO:
```bash
npx wdio wdio.conf.js


## To open the Allure report by running
npm run report:open


