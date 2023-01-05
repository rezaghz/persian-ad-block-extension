const statusEl = document.getElementById('status');

chrome.storage.local.get('status', (data) => {
    if (data.status === undefined) {
        chrome.storage.local.set({status: true});
    } else {
        statusEl.checked = data.status;
    }
});


statusEl.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        chrome.storage.local.set({status: true});
    } else {
        chrome.storage.local.set({status: false});
    }
})