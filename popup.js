let topSitesEle = document.getElementById("topSites");

chrome.storage.sync.get("topSites",({topSites})=>{
    for(let sited in topSites)
    {
        let siteDet = topSites[sited];
        var site = document.createElement("div");
        site.id="topsite"
        var txtele = document.createElement("h4")
        var txt = document.createTextNode(siteDet["title"]);
        txtele.appendChild(txt);
        var urlele = document.createElement("a");
        urlele.href= siteDet["url"];
        urlele.target="_blank";
        var url = document.createTextNode("Visit "+siteDet["title"]);
        urlele.appendChild(url);
        urlele.appendChild(url);
        site.appendChild(txtele);
        site.appendChild(urlele);
        topSitesEle.appendChild(site);
    }
});

function close()
{
    window.close();
}