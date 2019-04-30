// ==UserScript==
// @name         EZ Paywall RM
// @namespace    https://github.com/tygamer1to7/EZ-Paywall-RM/
// @version      0.6
// @downloadURL  https://raw.githack.com/tygamer1to7/EZ-Paywall-RM/master/EZ Paywall RM.user.js
// @description  A useful tool.
// @author       tygamer1to7
// @match        https://cooking.nytimes.com/*
// @match        https://washingtonpost.com/*
// @match        https://nytimes.com/*
// @grant        none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $("head").children().appendTo("body");
    $('script').remove();
    $("head").remove();
    $('noscript').remove();
    if (window.location.hostname == "cooking.nytimes.com")
    {
        var elem = document.getElementsByClassName("nytc---modal-window---windowContainer");
        elem[0].remove();
        var elem2 = document.getElementsByTagName("html")[0];
        function checkFlag() {
            if (elem2.className == "desktop viewport-large nytc---modal-window---noScroll") {
            elem2.className = "desktop viewport-large";
            var elem3 = document.getElementsByTagName("body")[0];
            elem3.className = "";
            } else {
                window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
            }
        }
        checkFlag();
    }
})();
