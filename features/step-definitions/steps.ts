import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { LOGIN_USERS } from '../../fixtures/loginData.ts';

import LoginPage from '../pages/login.page.ts';

const pages = {
    login: LoginPage
}

Given('the user launches the app', async () => {
    await LoginPage.openLoginPage(); //navigate to login screen for login functionality
});

When('the user enters credentials for {string} user', async (userType: keyof typeof LOGIN_USERS) => {
    const userData=LOGIN_USERS[userType] //selecting the user data based on the scenario
    await LoginPage.login(userData.username, userData.password); //enter user credentials
});

When('the user clicks the login button', async () => {
    await LoginPage.LoginBtn.click(); //sending the log data
});

Then('the user should see the dashboard', async () => {
    
    await expect(LoginPage.productPage).toBeDisplayed(); //assert that user is logged and product page visible
    await LoginPage.Logout(); //logout to be able to login again 
});

Then('error should be displayed based on {string}', async (userType: keyof typeof LOGIN_USERS) => {4
    await expect(LoginPage.errorMessage).toBeDisplayed(); //assert that error message is displayed
    const userData=LOGIN_USERS[userType] //selecting the user data based on the scenario
    const errorMessageElement = await $('//android.widget.TextView[@text="'+userData.errorMessage+'"]')
    await expect(errorMessageElement).toBeDisplayed(); //assert the correct error message is displayed
});


