// ==UserScript==
// @name WCE Stroodle test loader (layering hide fix)
// @namespace https://www.bondageprojects.com/
// @version 1.3
// @description Wholesome Club Extensions (WCE) - enhancements for the bondage club - fork of FBC 5.8
// @author Sidious, Stella
// @supportURL https://github.com/Stro0dle/WCE
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

var preloadLink = document.createElement("link");
preloadLink.href = "https://stro0dle.github.io/WCE/wce.js";
preloadLink.rel = "modulepreload";
document.head.appendChild(preloadLink);

var fusam = JSON.parse(localStorage.getItem("fusam.settings") || "{}");
fusam.enabledDistributions ??= {};
delete fusam.enabledDistributions.WCE;
delete fusam.enabledDistributions.FBC;
localStorage.setItem("fusam.settings", JSON.stringify(fusam));

if (typeof FUSAM === "object" && FUSAM?.present) {
  import("https://stro0dle.github.io/WCE/wce.js");
} else {
  let storeFUSAM;
  Object.defineProperty(window, "FUSAM", {
    set(n) {
      storeFUSAM = n;
      import("https://stro0dle.github.io/WCE/wce.js");
    },
    get() {
      return storeFUSAM;
    },
  });
}