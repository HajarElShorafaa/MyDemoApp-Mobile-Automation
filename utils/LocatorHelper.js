// utils/locatorHelper.js
export function getElementByPlatform(androidLocator, iosLocator) {
    return driver.isAndroid ? $(androidLocator) : $(iosLocator);
}
