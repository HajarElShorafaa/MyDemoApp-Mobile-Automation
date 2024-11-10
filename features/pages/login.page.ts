import { $, expect } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {

    //locators

    public get menuIcon(){
        return $('~open menu'); }

    public get loginMenuItem(){
        return $('~menu item log in');
    }
    public get logoutMenuItem(){
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

    // method to enter user credentials to login
    public async login (username: string, password: string) 
    {
        await this.setValue(this.inputUsername,username);
        await this.setValue(this.inputPassword,password);
        console.log("Username: "+username+" and password: "+password+ "are entered.");
        await this.clickButton(this.LoginBtn);
    }

    // method to open the login screen again
    public async openLoginPage () 
    {
        await this.clickButton(this.menuIcon);
        await this.clickButton(this.loginMenuItem);
    }

    // method to logout the user
    public async Logout()
    {
        await this.clickButton(this.menuIcon);
        await this.clickButton(this.logoutMenuItem);
        await this.clickButton(this.LogoutBtn);
        await this.clickButton(this.OkBtn);        
    }
}

export default new LoginPage();
