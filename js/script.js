chrome.storage.local.get('status', (data) => {
    if (data.status === undefined || data.status == true) {
        window.onload = (event) => {
            setIntervalX(function () {
                removeItems();
            }, 500, 40);
        }
        addModalToAparat();
    }
});

function addModalToAparat() {
    if (window.location.href.includes('google.com/search?q=')) {
        let allTags = document.getElementById('rso').children;
        console.log(allTags);
        for (let index in allTags) {
            if (allTags[index] instanceof HTMLElement) {
                console.log(allTags[index]);
                if (allTags[index].innerHTML.includes('aparat.com/v/')) {
                    let url = allTags[index].getElementsByTagName('div')[0].getElementsByTagName('a')[0].href;
                    let urlParts = new URL(url).pathname.split("/");
                    let id = urlParts[2];
                    let showTag = `<span class="pab-aparat-preview" style="color :#1a0dab;font-size:14px;cursor:pointer;margin-top: -20px;display: block" data-id="${id}">نمایش سریع</span>`;
                    allTags[index].insertAdjacentHTML('beforeend', showTag);
                }
            }
            //window.location.href = "https://www.aparat.com/video/video/embed/videohash/jp4B8/vt/frame";
        }
        $(".pab-aparat-preview").on('click', function () {
            let id = $(this).data('id');
            // create the background modal div
            const modal = document.createElement('div');
            modal.classList.add('pab-modal');
            // create the inner modal div with appended argument
            const child = document.createElement('div');
            child.classList.add('pab-modal-content');
            child.innerHTML = `<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/${id}/vt/frame"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>`;
            // render the modal with child on DOM
            modal.appendChild(child);
            document.body.appendChild(modal);
            modal.addEventListener('click', event => {
                if (event.target.className === 'pab-modal') {
                    const modal = document.querySelector('.pab-modal')
                    if (modal) {
                        modal.remove()
                    }
                }
            })
        })

    }
}

function removeItems() {
    const items = [
        // yektanet
        "[class*=yn-]",
        "[id*=yn-]",
        //sanjagh
        "[class*=sanjagh]",
        "[id*=sanjagh]",
        //sabavision
        "[class*=sabavision]",
        "[id*=sabavision]",
        //najva
        "[class*=najva]",
        "[id*=najva]",
        //congoro
        "[class*=congoro]",
        "[id*=congoro]",
        //mediaad
        "[class*=mediaad]",
        "[id*=mediaad]",
        //kaprila
        "[class*=kaprila]",
        "[id*=kaprila]",
    ];

    items.forEach(function (item) {
        let element = document.querySelectorAll(item);
        [].forEach.call(element, function (el) {
            el.innerHTML = "";
        });
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