window.onload = (event) => {
    setIntervalX(function () {
        removeItems();
    }, 500, 10);
};

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