console.log("Content script loaded");

// Example action
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "doSomething") {
    alert("Doing something on the page!");
    sendResponse({ status: "done" });
  }
});
