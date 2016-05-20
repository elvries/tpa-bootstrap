/*
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
!function(e){"use strict";var a=e.querySelector("#app");a.apiBaseUrl="http://localhost:5001/",a.services={dashboard:a.apiBaseUrl+"dashboard"},a.baseUrl="/",""===window.location.port&&(a.baseUrl="/tpa-bootstrap/"),a.displayInstalledToast=function(){Polymer.dom(e).querySelector("platinum-sw-cache").disabled||Polymer.dom(e).querySelector("#caching-complete").show()},a.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),window.addEventListener("open-menu",function(){a.$.paperDrawerPanel.togglePanel()}),a.scrollPageToTop=function(){a.$.headerPanelMain.scrollToTop(!0)},addEventListener("iron-deselect",function(e,t){if("mainPages"===e.target.id){var o=e.target.items.find(function(e){return e.attributes["data-route"].value==a.data.pageName});a.data.pageName.length>0&&!o&&(a.$.toast.text="Can't find: "+window.location.href+". Redirected you to Home Page",a.$.toast.show()),a.$.paperDrawerPanel.closeDrawer()}}),a.closeDrawer=function(){a.$.paperDrawerPanel.closeDrawer()}}(document);