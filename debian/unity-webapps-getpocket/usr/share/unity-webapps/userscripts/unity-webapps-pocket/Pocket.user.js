// ==UserScript==
// @include        https://*.getpocket.com/*
// @include        https://www.getpocket.com/*
// @include        https://*.getpocket.com/
// @include        http://www.getpocket.com/*
// @require        utils.js
// ==/UserScript==

window.Unity = external.getUnityObject(1);

Unity.init({ name: 'Pocket',
             domain: 'getpocket.com',
	     homepage: 'http://www.getpocket.com/',
             iconUrl: 'icon://unity-webapps-pocket',
             onInit: wrapCallback(unityLoaded) });
