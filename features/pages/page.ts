import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
   
    // Sets a value for a specified element.
    async setValue(element, value) {
        await element.clearValue();   // Clear any existing value in the element
        await element.setValue(value); // Set the new value
    }

    // click on button
    async clickButton(element) {
        await element.waitForDisplayed(); // Wait for the element to be visible
        await element.click();            // Perform the click action
    }

    
}
