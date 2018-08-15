'use strict';
exports.config = {
    getPageTimeout: 60000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 360000
    },
    logLevel: 'ERROR',
    seleniumAddress: 'http://localhost:4723/wd/hub',
    allScriptsTimeout: 500000,
    specs: ['../specs/**/*spec.js'],
    onPrepare: () => {
        browser.waitForAngularEnabled(true);
    },
    capabilities: {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'MyAwesomeDevice'
    }
}