// Check the toggle state before running the redirect logic
chrome.storage.sync.get(['redirectEnabled'], function (result) {
    if (result.redirectEnabled !== false) {
        modifyAndRedirect(window.location.href, 'v3', 'false');
    } else {
        modifyAndRedirect(window.location.href, 'v3', 'true');
    }
});
