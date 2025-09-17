// ==UserScript==
// @name         AntiRadio
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Deleta as NODEs das rádios
// @author       Ploswi
// @match        https://habblive.in/betastaffv2
// @match        https://habblive.in/bigclient
// @icon         https://www.google.com/s2/favicons?sz=64&domain=habblive.in
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function AntiRadio()
    {
        var radios = [];
        radios.push(document.getElementById("client-ui"));
        for (var i = 0; i < radios.length; i++)
        {
            if(radios[i] != null){
                radios[i].remove();
                clearInterval(interval);
            }
            else
            {
                console.log("Searching radio...");
            }
        }
    }
    let interval = setInterval(AntiRadio, 1000);
})();
