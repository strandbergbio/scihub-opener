function constructOptions() {
  let saveButton = document.getElementById('saveButton');
  let urlPrefix = document.getElementById("urlPrefix");
  chrome.storage.sync.get({'sciHubOpenerUrlPrefix': 'sci-hub.tw'}, function(prefix) {
    urlPrefix.value = prefix.sciHubOpenerUrlPrefix;
  })
  saveButton.addEventListener('click', function() {
    let urlText = urlPrefix.value;
    chrome.storage.sync.set({'sciHubOpenerUrlPrefix': urlText}, function() {
      alert(`New URL prefix saved: ${urlText}`);
    })
  });
}
constructOptions();