// ==UserScript==
// @run-at       document-start
// @name         EZ Paywall RM
// @namespace    https://github.com/tygamer1to7/EZ-Paywall-RM/
// @version      0.7
// @downloadURL  https://raw.githack.com/tygamer1to7/EZ-Paywall-RM/master/EZ Paywall RM.user.js
// @description  A useful tool.
// @author       tygamer1to7
// @match        https://cooking.nytimes.com/*
// @match        https://washingtonpost.com/*
// @match        https://nytimes.com/*
// @match        https://www.cooksillustrated.com/*
// @grant        none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('script').remove();
    if (window.location.hostname == "cooking.nytimes.com")
    {
        $(".nytc---modal-window---windowContainer").remove();
        var elem2 = document.getElementsByTagName("html")[0];
        function checkFlag() {
            if (elem2.className == "desktop viewport-large nytc---modal-window---noScroll") {
            $(".nytc---modal-window---noScroll").removeClass("nytc---modal-window---noScroll");
            var elem3 = document.getElementsByTagName("body")[0];
            elem3.className = "";
            $("body").removeClass("logged-out");
            } else {
                window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
            }
        }
        checkFlag();
    }
    if (window.location.hostname == "www.cooksillustrated.com") {
        $(".paywall__overlay").remove();
        $(".blurred").removeClass("blurred");
        $("div.recipe__placeholder").removeAttr("style");
}
    $("head").children().appendTo("body");
    $("head").remove();
    $('noscript').remove();
})();
