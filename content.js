// ==UserScript==
// @name         Freeze Emoji
// @version      0.0.1
// @description  Stops custom emoji animation
// @author       sosantos
// @include      https://chat.google.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

; (function () {

    function main() {
        Array.from(document.querySelectorAll("img[src*='custom_emoji_read_token']"))
        .forEach((el) => {
            el.src = el.src+"&k=true";
        });
    }
    
    addStyle();
    main();
    var el = document.documentElement;
    el.addEventListener('DOMSubtreeModified', debounce(main, 2000));

})();
