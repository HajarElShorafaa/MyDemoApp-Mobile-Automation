# Mobile Automation Test for Login Feature in MyDemoApp
 
This project contains test automation scripts for the **MyDemo** mobile application, built using Appium and WebdriverIO. The goal of this project is to automate the login functionality for Android and iOS versions of the MyDemo app. The project is designed to support positive and negative test scenarios and is structured following the Page Object Model and BDD with Cucumber.
 
---
 
## Project Setup
 
### Cloning the Project
 
To set up this project locally, start by cloning the repository from GitHub. You can use the following command:
 
```bash
git clone https://github.com/HajarElShorafaa/MyDemoApp-Mobile-Automation
 
## Install Setup
1. Install dependencies: `npm install`
2. Start Appium server: `appium`
3. Update device capabilities in `wdio.conf.js` for iOS and Android testing.
 
note: this project has been run on android device only (due to inaccessibility to mac device)
 
## Run Tests
Run tests using WebdriverIO:
```bash
npx wdio wdio.conf.js
 
## to open the Allure report by running
npm run report:open


Video Recording
You can find a video recording of the successful test runs in the issues or you can access it from this link: https://www.awesomescreenshot.com/video/33458462?key=a1acc933bd0ce034ff6e7c2473c7a923.

