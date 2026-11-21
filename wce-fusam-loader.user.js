// ==UserScript==
// @name WCE test-layering-fix loader with FUSAM
// @namespace https://www.bondageprojects.com/
// @version 1.6
// @description Wholesome Club Extensions (WCE) - enhancements for the bondage club - fork of FBC 5.8
// @author Sidious, Stella
// @supportURL https://github.com/KittenApps/WCE
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match https://bondage-asia.com/*
// @match https://www.bondage-asia.com/*
// @match https://bondageprojects.com/*
// @match https://www.bondageprojects.com/*
// @icon https://wce-docs.vercel.app/img/logo.png
// @grant none
// @run-at document-end
// ==/UserScript==

import(`https://sidiousious.gitlab.io/bc-addon-loader/fusam.js?v=${(Date.now()/10000).toFixed(0)}`).then(() => import("https://stro0dle.github.io/WCE/wce.js"));

var preloadLink = document.createElement("link");
preloadLink.href = "https://stro0dle.github.io/WCE/wce.js";
preloadLink.rel = "modulepreload";
document.head.appendChild(preloadLink);

var fusam = JSON.parse(localStorage.getItem("fusam.settings") || "{}");
fusam.enabledDistributions ??= {};
delete fusam.enabledDistributions.WCE;
delete fusam.enabledDistributions.FBC;
localStorage.setItem("fusam.settings", JSON.stringify(fusam));