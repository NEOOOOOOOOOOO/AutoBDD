'use strict';
const frameworkPath = process.env.FrameworkPath;
const projectFullPath = process.env.FrameworkPath + '/test-projects/' + process.env.ThisProject; 
const myDISPLAYSIZE = process.env.DISPLAYSIZE;
const fs = require('fs');
const selenium_standalone_config = require(frameworkPath + '/framework/configs/selenium-standalone_config.js');
const myCombinedStepPath = ['features', projectFullPath + '/global'];

module.exports = {
  // - - - - CHIMP - - - -
  watch: false,
  watchTags: '@watch,@focus',
  domainSteps: null,
  e2eSteps: null,
  fullDomain: false,
  domainOnly: false,
  e2eTags: '@e2e',
  watchWithPolling: false,
  server: false,
  serverPort: 8060,
  serverHost: 'localhost',
  sync: true,
  offline: true,
  showXolvioMessages: true,
  'fail-when-no-tests-run': false,

  // - - - - CUCUMBER - - - -
  path: 'features',
  require: myCombinedStepPath,
  format: 'pretty',
  tags: '~@ignore',
  singleSnippetPerFile: true,
  recommendedFilenameSeparator: '_',
  screenshotsPath: '.screenshots',
  captureAllStepScreenshots: false,
  saveScreenshotsToDisk: true,
  saveScreenshotsToReport: false,
  jsonOutput: null,
  conditionOutput: true,

  // - - - - SELENIUM-STANDALONE
  browser: 'internet explorer',
  platform: 'Windows 10',
  name: '',
  user: '',
  key: '',
  host: process.env.SELHOST,
  port: process.env.SELPORT,
  seleniumStandaloneOptions: {
    version: selenium_standalone_config.version,
    drivers: selenium_standalone_config.drivers,
    baseURL: selenium_standalone_config.baseURL
  },

  // - - - - WEBDRIVER-IO  - - - -
  webdriverio: {
    desiredCapabilities: {
      browserName: "internet explorer",
      initialBrowserUrl: "about:blank",
      pageLoadStrategy: "eager",
      unhandledPromptBehavior: "dismiss",
      takesScreenshot: true,
      javascriptEnabled: true,
      cssSelectorsEnabled: true,
      unexpectedAlertBehaviour: "dismiss",
      browserAttachTimeout: 0,
      elementScrollBehavior: 0,
      enableElementCacheCleanup: true,
      enablePersistentHover: true,
      ignoreProtectedModeSettings: false,
      ignoreZoomSetting: true,
      nativeEvents: true,
      requireWindowFocus: true,
      // "ie.browserCommandLineSwitches": "",
      // "ie.enableFullPageScreenshot": true,
      // "ie.ensureCleanSession": true,
      // "ie.fileUploadDialogTimeout": 3000,
      // "ie.forceCreateProcessApi": false,
      // "ie.forceShellWindowsApi": false,
      // "ie.useLegacyFileUploadDialogHandling": false
    },
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: null,
    waitforTimeout: 500,
    waitforInterval: 250
  },

  // - - - - SESSION-MANAGER  - - - -
  noSessionReuse: false,

  // - - - - DEBUGGING  - - - -
  log: 'info',
  debug: false,
  debugCucumber: false,
  debugBrkCucumber: false
};

