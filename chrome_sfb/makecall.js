// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Call in Skype for Business";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
    
  chrome.tabs.executeScript ({
	   code: 'if (document.contains(document.getElementById("ThoughtStuffSfBpluginlink"))) {            document.getElementById("ThoughtStuffSfBpluginlink").remove();}'});
  
chrome.tabs.executeScript({ 			
		 code: 'var a = document.createElement("a");var linkText = document.createTextNode("");a.appendChild(linkText);a.title = "my title text";a.href ="tel:' + info.selectionText + '";a.id = "ThoughtStuffSfBpluginlink";document.body.appendChild(a);  document.getElementById("ThoughtStuffSfBpluginlink").click();'}); 
		 
		  chrome.tabs.executeScript ({
	   code: 'if (document.contains(document.getElementById("ThoughtStuffSfBpluginlink"))) {            document.getElementById("ThoughtStuffSfBpluginlink").remove();}'});
		

};
