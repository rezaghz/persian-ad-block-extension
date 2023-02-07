window.onload = (event) => {
    chrome.storage.local.get('status', (data) => {
        if (data.status === undefined || data.status == true) {
            setIntervalX(function () {
                removeItems();
            }, 500, 40);
        }
    });
}

if (window.location.href.includes('google.com/search?q=')) {
    let allTags = document.getElementsByTagName('video-voyager');
    for (let index in allTags) {
        if (allTags[index] instanceof HTMLElement) {
            if (allTags[index].innerHTML.includes('aparat.com/v/')) {
                let url = allTags[index].getElementsByTagName('div')[0].getElementsByTagName('a')[0].href;
                let urlParts = new URL(url).pathname.split("/");
                let id = urlParts[2];
                let showTag = `<span class="aparat-preview" style="color :#1a0dab;font-size:14px;cursor:pointer;margin-top: 15px;display: block" data-id="${id}">نمایش سریع</span>`;
                allTags[index].insertAdjacentHTML('beforeend', showTag);
            }
        }
        //window.location.href = "https://www.aparat.com/video/video/embed/videohash/jp4B8/vt/frame";
    }
    $(".aparat-preview").on('click', function () {
        console.log($(this).data('id'));
    })
}

function removeItems() {
    // yektanet
    const yektanetClass = document.querySelectorAll("[class*=yn-]");
    const yektanetId = document.querySelectorAll("[id*=yn-]");
    //sanjagh
    const sanjaghClass = document.querySelectorAll("[class*=sanjagh]");
    const sanjaghId = document.querySelectorAll("[id*=sanjagh]");
    //sabavision
    const sabavisionClass = document.querySelectorAll("[class*=sabavision]");
    const sabavisionId = document.querySelectorAll("[id*=sabavision]");
    //najva
    const najvaClass = document.querySelectorAll("[class*=najva]");
    const najvaId = document.querySelectorAll("[id*=najva]");
    //congoro
    const congoroClass = document.querySelectorAll("[class*=congoro]");
    const congoroId = document.querySelectorAll("[id*=congoro]");
    //mediaad
    const mediaadClass = document.querySelectorAll("[class*=mediaad]");
    const mediaadId = document.querySelectorAll("[id*=mediaad]");

    //kaprila
    const kaprilaClass = document.querySelectorAll("[class*=kaprila]");
    const kaprilaId = document.querySelectorAll("[id*=kaprila]");

    [].forEach.call(yektanetClass, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(yektanetId, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(sanjaghClass, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(sanjaghId, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(sabavisionClass, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(sabavisionId, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(najvaClass, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(najvaId, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(congoroClass, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(congoroId, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(mediaadClass, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(mediaadId, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(kaprilaClass, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(kaprilaId, function (el) {
        el.innerHTML = "";
    });
}

function setIntervalX(callback, delay, repetitions) {
    let x = 0;
    let intervalID = window.setInterval(function () {

        callback();

        if (++x === repetitions) {
            window.clearInterval(intervalID);
        }
    }, delay);
}