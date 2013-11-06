// ==UserScript==
// @name          Pocket-Unity-Integration
// @include       http://getpocket.com/*
// @version       0.2
// @author        Dennis Altermann
// @require        utils.js
// ==/UserScript==
 
window.Unity = external.getUnityObject(1.0);
 
Unity.init({ name: "Pocket",
            iconUrl: 'icon://unity-webapps-pocket',
            onInit: null });