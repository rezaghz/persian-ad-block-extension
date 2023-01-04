const statusEl = document.getElementById('status')

chrome.storage.local.get('status', (data) => {
    if (data === undefined) {
        chrome.storage.local.set({status : false});
    }
});

alert(s);

statusEl.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        alert('checked');
    } else {
        alert('not checked');
    }
})