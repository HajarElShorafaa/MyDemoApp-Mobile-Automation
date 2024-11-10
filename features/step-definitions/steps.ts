import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { LOGIN_USERS } from '../../fixtures/loginData.ts';

import LoginPage from '../pages/login.page.ts';

const pages = {
    login: LoginPage
}

Given('the user launches the app', async () => {
    await LoginPage.openLoginPage();
});

When('the user enters credentials for {string} user', async (userType: keyof typeof LOGIN_USERS) => {
    const userData=LOGIN_USERS[userType]
    await LoginPage.login(userData.username, userData.password);
});

When('the user clicks the login button', async () => {
    await LoginPage.LoginBtn.click();
});

Then('the user should see the dashboard', async () => {
    console.log();
    
    await expect(LoginPage.productPage).toBeDisplayed();
    await LoginPage.Logout();
});

Then('error should be displayed based on {string}', async (userType: keyof typeof LOGIN_USERS) => {
    const userData=LOGIN_USERS[userType]
    
    const errorMessageElement = await $('//android.widget.TextView[@text="'+userData.errorMessage+'"]')
    //let error=LoginPage.ErrorMessage(message);
    await expect(errorMessageElement).toBeDisplayed();
    
});


