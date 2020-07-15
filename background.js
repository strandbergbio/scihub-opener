chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.sync.get({'sciHubOpenerUrlPrefix': 'sci-hub.tw'}, function(prefix){
		let url = "https://" + prefix.sciHubOpenerUrlPrefix + "/" + tab.url;
		chrome.tabs.create({"url": url});
  });
});