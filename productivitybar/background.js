chrome.browserAction.onClicked.addListener(function(tab) {
  
	var executing = chrome.tabs.executeScript({
    	file: "scripts/prodBar.js"
    });
});






