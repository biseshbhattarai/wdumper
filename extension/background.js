'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("...");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      }),
      new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostContains: '' },
            })

      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
