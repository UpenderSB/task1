$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/FirstE2E.feature");
formatter.feature({
  "name": "Verify details on Open Weather Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Details on Open Weather Page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on Open Weather page",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_is_on_Open_Weather_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate Open Weather page opened successfully",
  "keyword": "When "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_validate_Open_Weather_page_opened_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks on window",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_checks_on_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_close_the_browser()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027DESKTOP-UEVROJG\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\upend\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: 6df8312bf4af92832d38e1302a2e4379\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:438)\r\n\tat stepDefinition.FirstE2E_StepsD.user_close_the_browser(FirstE2E_StepsD.java:57)\r\n\tat ✽.User close the browser(file:src/main/java/features/FirstE2E.feature:9)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Verify Open Weather Page with valid and invalid city",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Open Weather page",
  "keyword": "Given "
});
formatter.step({
  "name": "User validate Open Weather page opened successfully",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003ccity\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User checks on window",
  "keyword": "Then "
});
formatter.step({
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "city"
      ]
    },
    {
      "cells": [
        "pune"
      ]
    },
    {
      "cells": [
        "pppp"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Open Weather Page with valid and invalid city",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Open Weather page",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_is_on_Open_Weather_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate Open Weather page opened successfully",
  "keyword": "When "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_validate_Open_Weather_page_opened_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"pune\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_enters_CityName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks on window",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_checks_on_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_close_the_browser()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027DESKTOP-UEVROJG\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\upend\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: 853ae469fd73e6e6e4bb0d2422fd16f3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:438)\r\n\tat stepDefinition.FirstE2E_StepsD.user_close_the_browser(FirstE2E_StepsD.java:57)\r\n\tat ✽.User close the browser(file:src/main/java/features/FirstE2E.feature:18)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify Open Weather Page with valid and invalid city",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Open Weather page",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_is_on_Open_Weather_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate Open Weather page opened successfully",
  "keyword": "When "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_validate_Open_Weather_page_opened_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"pppp\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_enters_CityName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks on window",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_checks_on_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstE2E_StepsD.user_close_the_browser()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027DESKTOP-UEVROJG\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\upend\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: 4acffa53825d0ac5e10023587363002f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:438)\r\n\tat stepDefinition.FirstE2E_StepsD.user_close_the_browser(FirstE2E_StepsD.java:57)\r\n\tat ✽.User close the browser(file:src/main/java/features/FirstE2E.feature:18)\r\n",
  "status": "failed"
});
});