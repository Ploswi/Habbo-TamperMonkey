// ==UserScript==
// @name         GlobalFunctions
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Global Functions
// @author       Ploswi
// @match        https://habblive.in/betastaffv2
// @match        https://habblive.in/bigclient
// @icon         https://www.google.com/s2/favicons?sz=64&domain=habblive.in
// @downloadURL  https://raw.githubusercontent.com/Ploswi/LiveFunctions/refs/heads/main/GlobalFunctions.js
// @updateURL    https://raw.githubusercontent.com/Ploswi/LiveFunctions/refs/heads/main/GlobalFunctions.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var scriptNode = document.createElement("script");
    scriptNode.innerHTML =
        `function dragElement(elmnt)
        {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

            if (document.getElementById(elmnt.id + "header")) {
                // If present, the header is where you move the DIV from:
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
                // Otherwise, move the DIV from anywhere inside the DIV:
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // Get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // Call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // Calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // Set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                // Stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
        function createIcon(text, div)
        {
                var parentIcons = document.querySelector("#root > div > div.animate__animated > div > div.nitro-right-side > div > div.d-flex.flex-column.gap-1.align-items-end.nitro-purse-container");
                var firstDiv = document.createElement("div");
                var secondDiv = document.createElement("div");
                var thirdDiv = document.createElement("div");
                var fourthDiv = document.createElement("div");

                firstDiv.classList.add("d-flex", "flex-column", "gap-2", "justify-content-center");
                secondDiv.classList.add("d-flex", "cursor-pointer", "nitro-vip");
                secondDiv.addEventListener("click", () => displayDiv(div));
                thirdDiv.classList.add("config-icon");
                fourthDiv.style = "position: absolute; float: right; right: 10px; top: 7px";
                fourthDiv.textContent = text

                parentIcons.append(firstDiv);
                        firstDiv.append(secondDiv);
                secondDiv.append(thirdDiv);
                secondDiv.append(fourthDiv);
        }
        function displayDiv(div)
        {
                if(div.style.display == "none")
                {
                        div.style.display = "block";
                }
                else
                {
                        div.style.display = "none";
                }
        }
        function pressEnter(element)
        {
                const keyEvent = new KeyboardEvent('keydown', {
                        code: 'Enter',
                        key: 'Enter',
                        charCode: 13,
                        keyCode: 13,
                        bubbles: true
                });
                element.dispatchEvent(keyEvent);
        }
        function pressEnterBold(element)
        {
                if(document.getElementById("checkboxList3").checked)
                {
                        const keyEvent = new KeyboardEvent('keydown', {
                                code: 'Enter',
                                key: 'Enter',
                                charCode: 13,
                                keyCode: 13,
                                view: window,
                                shiftKey: true,
                                bubbles: true
                        });
                        element.dispatchEvent(keyEvent);
                }
        }
        function sleep(ms)
        {
                return new Promise(resolve => setTimeout(resolve, ms));
        }`;

    document.body.appendChild(scriptNode);
})();
