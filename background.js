"use strict";

const extensionAPI = browser;

function injectScript(tabId) {
  extensionAPI.tabs.executeScript(tabId, { file: "content-script.js" });
}

extensionAPI.commands.onCommand.addListener(function(command) {
  if (command === "toggle-conversion") {
    extensionAPI.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs[0] && tabs[0].id) {
        injectScript(tabs[0].id);
      }
    });
  }
});

extensionAPI.browserAction.onClicked.addListener(function(tab) {
  if (tab.id) {
    injectScript(tab.id);
  }
});
