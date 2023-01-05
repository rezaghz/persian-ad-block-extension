const statusEl = document.getElementById('status');
const website = document.getElementById('website');

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


website.addEventListener('click', (e) => {
    chrome.tabs.create({url: "https://rezaghz.com"});
    return false;
})