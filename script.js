window.onload = (event) => {
    const yektanetClass = document.querySelectorAll("[class*=yn-]");
    const yektanetId = document.querySelectorAll("[id*=yn-]");

    [].forEach.call(yektanetClass, function (el) {
        el.innerHTML = "";
    });

    [].forEach.call(yektanetId, function (el) {
        el.innerHTML = "";
    });
};