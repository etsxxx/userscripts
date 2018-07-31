// ==UserScript==
// @name         Slack Code Syntax Highlight
// @version      0.1
// @description  auto syntax highlighting at slack code block
// @author       etsxxx
// @match       https://*.slack.com/messages/*
// @grant        none
// @require     https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js
// @updateURL   https://raw.githubusercontent.com/etsxxx/userscripts/master/src/slack-code-syntax-highlight.user.js
// @downloadURL https://raw.githubusercontent.com/etsxxx/userscripts/master/src/slack-code-syntax-highlight.user.js
// ==/UserScript==

function initPrettyPrint() {
    var styleElement = document.createElement('style');
    styleElement.innerHTML += "li.L0, li.L2, li.L4, li.L6, li.L8 {background-color: #ffffff; list-style-type: decimal !important;}";
    styleElement.innerHTML += "li.L1, li.L3, li.L5, li.L7, li.L9 {background-color: #fbfbfb; list-style-type: decimal !important;}";
    document.head.appendChild(styleElement);
}


function addPrettyPrintTags() {
    let preElements = document.getElementsByClassName('c-mrkdwn__pre');
    var pres = Array.prototype.slice.call(preElements);
    pres.forEach(anchorElement => {
        anchorElement.classList.add('prettyprint');
        anchorElement.classList.add('lang-bsh');
        anchorElement.classList.add('linenums');
    });

    // thread
    preElements = document.getElementsByClassName('special_formatting');
    pres = Array.prototype.slice.call(preElements);
    pres.forEach(anchorElement => {
        anchorElement.classList.add('prettyprint');
        anchorElement.classList.add('lang-bsh');
        anchorElement.classList.add('linenums');
    });

    PR.prettyPrint();
}


$(function($) {
    'use strict';
    // On page load
    initPrettyPrint();
    addPrettyPrintTags();

    // When new post is added
    $("#client_body").on('DOMSubtreeModified propertychange', addPrettyPrintTags);
});