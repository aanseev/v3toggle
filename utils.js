function modifyAndRedirect(urlString, parameter, value) {
    let url = new URL(urlString);

    // Check if the parameter is already set to value
    if (url.searchParams.get(parameter) !== value) {
        // Add or update the value of the URL parameter
        url.searchParams.set(parameter, value);

        // Navigate to the new URL
        window.location.replace(url.href);
    } else {
        console.log(`Parameter '${parameter}=${value}' is already set. No redirect needed.`);
    }
}

function reloadPage() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      let tab = tabs[0];
      let url = new URL(tab.url);

      // Define the patterns
      const patterns = [
        /^https:\/\/make\.powerautomate\.com\/environments\/[^\/]+\/solutions\/[^\/]+\/flows\/[^\/]+$/,
        /^https:\/\/make\.powerautomate\.com\/environments\/[^\/]+\/solutions\/[^\/]+\/flows\/[^\/]+\/runs\/[^\/]+$/,
        /^https:\/\/make\.preview\.powerapps\.com\/environments\/[^\/]+\/solutions\/[^\/]+\/objects\/cloudflows\/[^\/]+\/view$/
      ];

      // Check if the current URL matches any of the patterns
      const matches = patterns.some(pattern => pattern.test(url.href));

      if (matches) {
        chrome.tabs.reload(tab.id);
      }
    });
  }