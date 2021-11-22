let topSites = []

chrome.runtime.onInstalled.addListener(() => {
  chrome.topSites.get((topSites)=>{
    chrome.storage.sync.set({ "topSites":topSites });
    console.log(topSites)
    chrome.storage.sync.get("topSites",({topSites})=>{
        console.log(topSites);
    });
  });
});