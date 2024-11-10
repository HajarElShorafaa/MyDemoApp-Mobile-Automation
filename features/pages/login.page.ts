import { $, expect } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {

    public get menuIcon(){
        return $('~open menu'); }

    public get LoginScreen(){
        return $('~menu item log in');
    }
    public get LogoutScreen(){
        return $('~menu item log out');
    }
    public get LogoutBtn(){
        return $('//android.widget.Button[@resource-id="android:id/button1"]');}

    public get OkBtn(){
        return $('//android.widget.Button[@resource-id="android:id/button1"]');}

    public get inputUsername () {
        return $('~Username input field'); }

    public get inputPassword () {
        return $('~Password input field'); }

    public get LoginBtn () {
        return $('~Login button'); }

    public get productPage() { 
        return $('~products screen'); }

    public get errorMessage(){
        return $('~generic-error-message');}

    public async login (username: string, password: string) {
        await this.setValue(this.inputUsername,username);
        await this.setValue(this.inputPassword,password);
        console.log("Username: "+username+" and password: "+password+ "are entered.");
        await this.clickButton(this.LoginBtn);
    }
    public async openLoginPage () {
        await this.clickButton(this.menuIcon);
        await this.clickButton(this.LoginScreen);
    }

    public async Logout()
    {
        await this.clickButton(this.menuIcon);
        await this.clickButton(this.LogoutScreen);
        await this.clickButton(this.LogoutBtn);
        await this.clickButton(this.OkBtn);        
    }
    public async errorMessageText(expectedText)
    {
        const textElement=await this.errorMessage.$$();
        const actualText= await textElement.getText();
        console.log("This is actual Text ---> "+actualText);
        expect(actualText).toBe(expectedText, "Expected text to be "+expectedText+" but found "+actualText)
    }
}

export default new LoginPage();
