Polymer({is:"iron-autogrow-textarea",behaviors:[Polymer.IronFormElementBehavior,Polymer.IronValidatableBehavior,Polymer.IronControlState],properties:{bindValue:{observer:"_bindValueChanged",type:String},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},maxlength:{type:Number}},listeners:{input:"_onInput"},observers:["_onValueChanged(value)"],get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(e){this.$.textarea.selectionStart=e},set selectionEnd(e){this.$.textarea.selectionEnd=e},validate:function(){if(!this.required&&""==this.value)return this.invalid=!1,!0;var e;return this.hasValidator()?e=Polymer.IronValidatableBehavior.validate.call(this,this.value):(e=this.$.textarea.validity.valid,this.invalid=!e),this.fire("iron-input-validate"),e},_bindValueChanged:function(){var e=this.textarea;e&&(e.value!==this.bindValue&&(e.value=this.bindValue||0===this.bindValue?this.bindValue:""),this.value=this.bindValue,this.$.mirror.innerHTML=this._valueForMirror(),this.fire("bind-value-changed",{value:this.bindValue}))},_onInput:function(e){this.bindValue=e.path?e.path[0].value:e.target.value},_constrain:function(e){var t;for(e=e||[""],t=this.maxRows>0&&e.length>this.maxRows?e.slice(0,this.maxRows):e.slice(0);this.rows>0&&t.length<this.rows;)t.push("");return t.join("<br/>")+"&#160;"},_valueForMirror:function(){var e=this.textarea;if(e)return this.tokens=e&&e.value?e.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)},_onValueChanged:function(){this.bindValue=this.value}});
Polymer({is:"paper-textarea",behaviors:[Polymer.PaperInputBehavior,Polymer.IronFormElementBehavior],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},_ariaLabelledByChanged:function(e){this.$.input.textarea.setAttribute("aria-labelledby",e)},_ariaDescribedByChanged:function(e){this.$.input.textarea.setAttribute("aria-describedby",e)},get _focusableElement(){return this.$.input.textarea}});
!function(e){window.document.addEventListener=function(n,i,t){return"deviceready"===n?i():void e(n,i,t)}}(window.document.addEventListener),Polymer({is:"kitt-mocks",data:{appVersion:"appVersion"},properties:{appVersion:{type:String,value:"appVersion"},deviceName:{type:String,value:"deviceName"},deviceVersion:{type:String,value:"deviceVersion"},deviceManufacturer:{type:String,value:"deviceManufacturer"},deviceModel:{type:String,value:"deviceModel"},isScreenReader:{type:Boolean,value:!1},language:{type:String,value:"en"},isTablet:{type:Boolean,value:!1}},response:"",onRequest:function(){},ready:function(){console.log(this.appVersion);var e=this;window.device||(window.device={platform:e.deviceName,version:e.deviceVersion,manufacturer:e.deviceManufacturer,model:e.deviceModel}),window.KittUrl||(window.KittUrl={language:e.language,isTablet:e.isTablet}),window.KittNative||(window.KittNative={userSession:{language:"nl"},doGet:function(n,i,t){e.onRequest(n),i(e.response)},doPost:function(n,i,t){e.onRequest(n),i(e.response)},trackPage:function(e,n){n()},trackEvent:function(e,n,i){i()},setNavbarTitle:function(e,n){n()},showNavbarBackButton:function(){},showNavbarMenuButton:function(e){e()},getAppVersion:function(n){n(e.appVersion)},alert:function(e){window.alert(e.message)},call:function(e){window.alert("Call: "+e)},confirm:function(e,n,i){$window.confirm(e.message)?n():i()},close:function(e){e()},isScreenReaderRunning:function(n){n(e.isScreenReader)}})}});
Polymer({is:"kitt-platform",ready:function(){if(!window.KittUrl){var n={},i=window.location.href.split("?")[1];if(i)for(var e=i.split("&"),t=0;t<e.length;t++){var o=e[t].split("=");n[o[0]]=o[1]}window.KittUrl.language=n.language,window.KittUrl.isTablet=n.tablet}},getInfo:function(){return new Promise(function(n,i){window.document.addEventListener("deviceready",function(){window.KittNative.getAppVersion(function(i){var e={appVersion:i,deviceName:window.device.platform,deviceVersion:window.device.version,deviceManufacturer:window.device.manufacturer,deviceModel:window.device.model};n(e)},function(n){i(n)})})})},isScreenReader:function(){return new Promise(function(n,i){window.document.addEventListener("deviceready",function(){window.KittNative.isScreenReaderRunning(function(i){n(i)},function(n){i(n)})})})},getLanguage:function(){return new Promise(function(n,i){window.KittUrl&&window.KittUrl.language?n(window.KittUrl.language):i('Cannot read "language" from queryString')})},isTablet:function(){return new Promise(function(n,i){window.KittUrl&&null!==window.KittUrl.isTablet&&n(window.KittUrl.isTablet)})}});
Polymer({is:"tpa-feedback",behaviors:[Polymer.NeonAnimatableBehavior],call:function(){var e=document.querySelector("kitt-platform");e.getInfo().then(function(e){console.log("Info",e)})},next:function(){this.$.pages.selectNext()},back:function(){this.$.pages.selectPrevious()},send:function(){var e=this.querySelector("#ajax-send-feedback"),t=this.querySelector("kitt-platform"),n=this.querySelector("textarea");t.getInfo().then(function(t){var o=n.value+"\n\nDevice: "+t.deviceManufacturer+"\n"+t.deviceName+" versie: "+t.deviceVersion+"\nApp versie: "+t.appVersion;e.body=JSON.stringify({labels:["Mobiel","MockOs"],text:o,type:"SUGGESTION"}),e.generateRequest(),this.$.pages.selectNext()}.bind(this))},close:function(){this.$.pages.selected=0},handleResponse:function(e){console.log(e.detail.response)}});
Polymer({is:"tpa-feedback-page"});