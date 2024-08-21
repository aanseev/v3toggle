document.addEventListener("DOMContentLoaded", function () {
    const toggleV3 = document.getElementById("toggleV3");

    // Load the current state of the toggle from storage
    chrome.storage.sync.get(['redirectEnabled'], function (result) {
        toggleV3.checked = result.redirectEnabled !== false; // Default to true if not set
        updateIcon(toggleV3.checked); // Set the icon based on the initial state
    });

    // Save the state whenever the toggle is changed
    toggleV3.addEventListener("change", function () {
        const isEnabled = toggleV3.checked;
        updateIcon(isEnabled); // Update the icon based on the toggle state

        chrome.storage.sync.set({ redirectEnabled: toggleV3.checked },
            reloadPage()
        );
    });
});

// Function to update the extension icon
function updateIcon(isEnabled) {
    const iconPath = isEnabled ? "icons/icon_on" : "icons/icon_off";
    chrome.action.setIcon({
        path: {
            "16": `${iconPath}_16.png`,
            "48": `${iconPath}_48.png`,
            "128": `${iconPath}_128.png`
        }
    });
}