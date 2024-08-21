document.addEventListener("DOMContentLoaded", function () {
    const toggleV3 = document.getElementById("toggleV3");

    // Load the current state of the toggle from storage
    chrome.storage.sync.get(['redirectEnabled'], function (result) {
        toggleV3.checked = result.redirectEnabled !== false; // Default to true if not set
    });

    // Save the state whenever the toggle is changed
    toggleV3.addEventListener("change", function () {
        chrome.storage.sync.set({ redirectEnabled: toggleV3.checked },
            reloadPage()
        );
    });
});
