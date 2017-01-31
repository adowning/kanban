/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!function e(n,t,r){function o(i,u){if(!t[i]){if(!n[i]){var c="function"==typeof require&&require;if(!u&&c)return c(i,!0);if(s)return s(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var f=t[i]={exports:{}};n[i][0].call(f.exports,function(e){var t=n[i][1][e];return o(t?t:e)},f,f.exports,e,n,t,r)}return t[i].exports}for(var s="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,n,t){var r,o=function(e,n){return function(){return e.apply(n,arguments)}};r=function(){function e(e){var n;null==e&&(e={}),this._onMessage=o(this._onMessage,this),this.log=e.log,this.chrome=null!=(n=e.chrome)?n:chrome,this._subscribers={},this.chrome.runtime.onMessage.addListener(this._onMessage),window.addEventListener("unload",function(e){return function(){return e.chrome.runtime.onMessage.removeListener(e._onMessage)}}(this))}return e.prototype._onMessage=function(e,n,t){var r,o,s,i;if(this.log&&this.log.debug("_onMessage:",e),e.channel&&(i=this._subscribers[e.channel]))for(r=0,o=i.length;r<o;r++)(s=i[r])(e.message,t);return!0},e.prototype.subscribe=function(e,n,t){var r;if(this.log&&this.log.info("subscribing to:",e),"function"!=typeof n)throw new Error("Expected callback to be a function");return r=this._subscribers[e],r?"function"==typeof t&&t():(this._subscribers[e]=r=[],this.chrome.runtime.sendMessage({subscribe:e},function(e){if("function"==typeof t)return t()})),r.push(n)},e.prototype.publish=function(e,n,t,r){return null==n&&(n=null),null==t&&(t=function(){}),null==r&&(r=10),this.log&&this.log.info("publishing to channel:",e,n),this.chrome.runtime.sendMessage({publish:e,message:n},function(o){return function(s){var i;return i=o.chrome.runtime.lastError,i&&"Could not establish connection. Receiving end does not exist."===i.message?--r?setTimeout(function(){return o.publish(e,n,t,r)},50):void 0:t(s)}}(this))},e.prototype.onReady=function(e){return e()},e.prototype.setReady=function(e){return e()},e.prototype.onDisconnect=function(e,n){return this._port=this._port||this.chrome.runtime.connect({name:n||"ABS.ContentMessenger"}),this._port.onDisconnect.addListener(e)},e}(),n.exports=r},{}],2:[function(e,n,t){var r,o;r=e("content/ContentMessenger"),o=new r,n.exports={messenger:o,subscribe:o.subscribe.bind(o),publish:o.publish.bind(o),onMessengerReady:o.onReady.bind(o),onMessengerDisconnect:o.onDisconnect.bind(o)}},{"content/ContentMessenger":1}],3:[function(e,n,t){var r,o;o=e("content/messagingInterface"),r={track:function(e,n,t){return o.publish("Mixpanel:track",{event:e,properties:n},t)}},n.exports=r},{"content/messagingInterface":2}],4:[function(e,n,t){var r,o,s,i,u;o=e("mustache"),i=e("content/messagingInterface"),u=e("content/mixpanel"),r=e("jquery"),s=function(e,n){var t;if(e)return r("<link>",{rel:"stylesheet",type:"text/css",href:e}).appendTo(document.head),t=document.createElement("img"),t.onerror=n,t.src=e},i.onMessengerReady(function(){return i.subscribe("AO:externalReady",function(e){return"string"==typeof e&&(e=JSON.parse(e)),r(document.body).on("click","[data-event]",function(e){var n,t;return n=r.extend(!0,{},r(e.currentTarget).data()),t=n.event,delete n.event,u.track(t,n)}),s(e.stylesheet,function(){var n,t,s;if(s=e.products[0])return n={product:s,meta:e.meta,requestData:e.requestData},t=o.render(e.templates.external,n),r("#external").html(t),e.javascript&&r.getScript(e.javascript),u.track("Offers - Indicator - Show",e.meta)})})})},{"content/messagingInterface":2,"content/mixpanel":3,jquery:"jquery",mustache:"mustache"}]},{},[4]);