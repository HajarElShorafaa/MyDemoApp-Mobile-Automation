require('allure-commandline');

export const config: WebdriverIO.Config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './features/*.feature'
    ],
    maxInstances: 10,

    //
    // ============
    // Capabilities
    // ============
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'PixelX',
        'appium:app':'./resouces/Android-MyDemoAppRN.1.3.0.build-244.apk',
        'appium:automationName': 'UiAutomator2'
    },
    // {
    //     platformName: 'iOS',
    //     'appium:deviceName': 'iPhone 12', // Update to actual device name
    //     'appium:platformVersion': '15.0', // Update to match your setup
    //     'appium:app': './path/to/ios/app.app', // Path to .app/.ipa
    //     'appium:automationName': 'XCUITest'
    // }
    ],

    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',

    // bail (default is 0 - don't bail, run all tests).
    bail: 0,

    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,

    // Default timeout in milliseconds for request
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,

    services: [
        ['appium', {
            command: 'appium', 
            args: {
                address: 'localhost',   // Appium server hostname
                port: 4723,             // Appium server port
                relaxedSecurity: true   // Allow relaxed security for testing purposes
            }
        }]
    ],
    // Framework you want to run your specs with.
    framework: 'cucumber',

    // Test reporter for stdout.
     reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',  
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/steps.ts'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> Only execute the scenarios with name matching the expression (repeatable).
        name: [],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },

}
