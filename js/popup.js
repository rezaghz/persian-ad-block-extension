const statusEl = document.getElementById('status');
const statusChip = document.getElementById('status-chip');
const website = document.getElementById('website');
const ignoreSiteButton = document.getElementById('ignore-site');
const currentSiteEl = document.getElementById('current-site');
const siteStatusEl = document.getElementById('site-status');

let ignoredSites = [];
let currentHost = '';

function normalizeHost(url) {
    try {
        return new URL(url).hostname.toLowerCase().replace(/^www\./, '');
    } catch (error) {
        return '';
    }
}

function updateStatusChip() {
    if (!statusChip) {
        return;
    }

    statusChip.textContent = statusEl.checked ? 'در حال کار' : 'متوقف شده';
    statusChip.classList.toggle('inactive', !statusEl.checked);
}

function updatePopupState() {
    currentSiteEl.textContent = currentHost || '—';

    if (!currentHost) {
        ignoreSiteButton.disabled = true;
        ignoreSiteButton.textContent = 'نادیده گرفتن این سایت';
        siteStatusEl.textContent = 'برای این سایت آدرس قابل تشخیص نیست.';
        return;
    }

    const isIgnored = ignoredSites.includes(currentHost);
    ignoreSiteButton.disabled = false;
    ignoreSiteButton.classList.toggle('active', isIgnored);
    ignoreSiteButton.textContent = isIgnored ? 'فعال کردن دوباره برای این سایت' : 'نادیده گرفتن این سایت';
    siteStatusEl.textContent = isIgnored
        ? 'حذف آگهی‌ها برای این سایت غیرفعال است.'
        : 'حذف آگهی‌ها برای این سایت فعال است.';
}

chrome.storage.local.get(['status', 'ignoredSites'], (data) => {
    if (data.status === undefined) {
        chrome.storage.local.set({status: true});
    } else {
        statusEl.checked = data.status;
    }

    ignoredSites = Array.isArray(data.ignoredSites) ? data.ignoredSites : [];
    updateStatusChip();

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        currentHost = normalizeHost(tabs[0]?.url || '');
        updatePopupState();
    });
});

statusEl.addEventListener('change', (event) => {
    const isEnabled = event.currentTarget.checked;
    updateStatusChip();

    if (isEnabled) {
        chrome.storage.local.set({status: true});
    } else {
        chrome.storage.local.set({status: false});
    }
});

ignoreSiteButton.addEventListener('click', () => {
    if (!currentHost) {
        return;
    }

    ignoreSiteButton.classList.remove('pulse');
    void ignoreSiteButton.offsetWidth;
    ignoreSiteButton.classList.add('pulse');

    const isIgnored = ignoredSites.includes(currentHost);
    const nextIgnoredSites = isIgnored
        ? ignoredSites.filter((site) => site !== currentHost)
        : Array.from(new Set([...ignoredSites, currentHost]));

    chrome.storage.local.set({ignoredSites: nextIgnoredSites}, () => {
        ignoredSites = nextIgnoredSites;
        updatePopupState();
    });
});

chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== 'local') {
        return;
    }

    if (changes.ignoredSites) {
        ignoredSites = Array.isArray(changes.ignoredSites.newValue) ? changes.ignoredSites.newValue : [];
        updatePopupState();
    }

    if (changes.status && changes.status.newValue !== undefined) {
        statusEl.checked = changes.status.newValue;
        updateStatusChip();
    }
});

website.addEventListener('click', () => {
    window.open('https://rezaghz.com', '_blank', 'noopener,noreferrer');
    return false;
});