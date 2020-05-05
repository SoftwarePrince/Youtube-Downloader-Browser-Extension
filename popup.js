var activeTab;
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    activeTab = tabs[0];
    chrome.tabs.create({ url: "https://www.youtubeconverter.io/en1/convert?query="+activeTab.url, active:false });
window.close();
 });