window.onload = (event) => {
    chrome.storage.local.get('status', (data) => {
        if (data.status === undefined || data.status == true) {
            setIntervalX(function () {
                removeItems();
            }, 500, 40);
        }
    });
};

function removeItems() {
    
    const mustBeRemoved = [
        
        // yektanet
        ...document.querySelectorAll("[class*=yn-]"),
        ...document.querySelectorAll("[id*=yn-]"),
        
        //sanjagh
        ...document.querySelectorAll("[class*=sanjagh]"),
        ...document.querySelectorAll("[id*=sanjagh]"),
        
        //najva
        ...document.querySelectorAll("[class*=najva]"),
        ...document.querySelectorAll("[id*=najva]"),
        
        //congoro
        ...document.querySelectorAll("[class*=congoro]"),
        ...document.querySelectorAll("[id*=congoro]"),
        
        //mediaad
        ...document.querySelectorAll("[class*=mediaad]"),
        ...document.querySelectorAll("[id*=mediaad]"),
        
    ];

    [].forEach.call(mustBeRemoved, function (el) {
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
