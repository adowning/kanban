'use strict';var gg = function(a) {
  this.pJ = "number" == typeof a ? 0 < a ? 1 : 0 > a ? -1 : null : null == a ? null : a ? -1 : 1;
};
gg.prototype.g1 = function(a, b) {
  var c = 0, e = 0, f = !1;
  a = Te(a, b).split(Xe);
  for (b = 0;b < a.length;b++) {
    var h = a[b];
    Ve.test(Te(h, void 0)) ? (c++, e++) : We.test(h) ? f = !0 : Ue.test(Te(h, void 0)) ? e++ : Ye.test(h) && (f = !0);
  }
  return 0 == e ? f ? 1 : 0 : 0.40 < c / e ? -1 : 1;
};
gg.prototype.A0 = function(a, b) {
  return this.N7(this.g1(a, b));
};
gg.prototype.N7 = function(a) {
  return -1 == (0 == a ? this.pJ : a) ? "rtl" : "ltr";
};
gg.prototype.mark = function() {
  switch(this.pJ) {
    case 1:
      return "\u200e";
    case -1:
      return "\u200f";
    default:
      return "";
  }
};
if ("undefined" != typeof angular) {
  var hg = angular.module("chrome_18n", []);
  chrome.runtime && chrome.runtime.getManifest && chrome.runtime.getManifest().default_locale && hg.directive("angularMessage", function() {
    return {restrict:"E", replace:!0, controller:["$scope", function(a) {
      var b = this;
      this.kz = this.hq = null;
      a.dirForText = function(a) {
        b.hq || (b.hq = chrome.i18n.getMessage("@@bidi_dir") || "ltr");
        b.kz || (b.kz = new gg("rtl" == b.hq));
        return b.kz.A0(a || "");
      };
    }], compile:function(a, b) {
      b = b.key;
      var c = null, e = document.createElement("amr");
      b && !b.match(/^\d+$/) && (b = chrome.i18n.getMessage(b), null == b && e.setAttribute("id", "missing"));
      if (b) {
        var f = chrome.i18n.getMessage(b + "_ph"), c = [];
        if (null != f) {
          for (c = f.split("\ue000"), f = 0;f < c.length;++f) {
            c[f] = c[f].replace(/^{{(.*)}}$/, '<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');
          }
        }
        c = chrome.i18n.getMessage(b, c);
      } else {
        e.setAttribute("r", "nokey");
      }
      c ? e.innerHTML = c : (e.setAttribute("tl", "false"), e.innerHTML = a.html());
      a.replaceWith(e);
    }};
  });
}
;var ig = /^[\w+/]+[=]{0,2}$/;
var jg = function(a, b, c) {
  a.timeOfStartCall = (new Date).getTime();
  var e = c || g, f = e.document, h;
  h = (h = (h = (e || g).document.querySelector("script[nonce]")) && h.getAttribute("nonce")) && ig.test(h) ? h : void 0;
  h && (a.nonce = h);
  if ("help" == a.flow) {
    var k = oa("document.location.href", e);
    !a.helpCenterContext && k && (a.helpCenterContext = k.substring(0, 1200));
    k = !0;
    if (b && JSON && JSON.stringify) {
      var p = JSON.stringify(b);
      (k = 1200 >= p.length) && (a.psdJson = p);
    }
    k || (b = {invalidPsd:!0});
  }
  b = [a, b, c];
  e.GOOGLE_FEEDBACK_START_ARGUMENTS = b;
  c = a.serverUri || "//www.google.com/tools/feedback";
  if (k = e.GOOGLE_FEEDBACK_START) {
    k.apply(e, b);
  } else {
    var e = c + "/load.js?", r;
    for (r in a) {
      b = a[r], null != b && !wa(b) && (e += encodeURIComponent(r) + "=" + encodeURIComponent(b) + "&");
    }
    a = f.createElement("script");
    h && a.setAttribute("nonce", h);
    a.src = e;
    f.body.appendChild(a);
  }
};
m("userfeedback.api.startFeedback", jg, void 0);
var kg = function() {
  this.KJ = this.KI = this.receiverVersion = this.modelName = this.ZP = this.wu = this.Xv = "";
};
var lg = chrome.i18n.getMessage("4163185390680253103"), mg = chrome.i18n.getMessage("492097680647953484"), og = chrome.i18n.getMessage("2575016469622936324"), pg = chrome.i18n.getMessage("128276876460319075"), qg = chrome.i18n.getMessage("3326722026796849289"), rg = chrome.i18n.getMessage("1018984561488520517"), sg = chrome.i18n.getMessage("8205999658352447129"), tg = chrome.i18n.getMessage("5723583529370342957"), ug = chrome.i18n.getMessage("1550904064710828958"), vg = chrome.i18n.getMessage("5014364904504073524"), 
wg = chrome.i18n.getMessage("2194670894476780934"), xg = chrome.i18n.getMessage("6614468912728530636"), yg = chrome.i18n.getMessage("5910595154486533449"), zg = chrome.i18n.getMessage("5363086287710390513"), Ag = chrome.i18n.getMessage("244647017322945605"), Bg = chrome.i18n.getMessage("5375576275991472719"), Cg = chrome.i18n.getMessage("4592127349908255218"), Dg = chrome.i18n.getMessage("843316808366399491"), Eg = chrome.i18n.getMessage("5699813974548050528"), Fg = chrome.i18n.getMessage("8515148417333877999"), 
Gg = chrome.i18n.getMessage("1636686747687494376"), Hg = chrome.i18n.getMessage("4148300086676792937"), Ig = chrome.i18n.getMessage("3219866268410307919"), Jg = chrome.i18n.getMessage("9211708838274008657"), Kg = chrome.i18n.getMessage("8706273405040403641"), Lg = chrome.i18n.getMessage("4756056595565370923"), Mg = chrome.i18n.getMessage("7876724262035435114"), Ng = chrome.i18n.getMessage("5485620192329479690"), Og = chrome.i18n.getMessage("6963873398546068901"), Pg = chrome.i18n.getMessage("3567591856726172993"), 
Qg = chrome.i18n.getMessage("3239956785410157548");
var Rg = function(a, b) {
  var c = this;
  this.MJ = b;
  this.G = a;
  this.G.top = a;
  this.hK = [];
  this.gH = !1;
  this.rf = new kg;
  this.Zha();
  this.Sha();
  this.Tha();
  this.Uha();
  this.Wha();
  this.s1 = Sa();
  this.G.userEmail = "";
  chrome.identity.getProfileUserInfo(function(a) {
    c.G.userEmail = a.email;
    c.os();
  });
  this.G.yourAnswerText = Qg;
  this.G.language = chrome.i18n && chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : chrome.runtime.getManifest().default_locale;
  this.G.requestLogsInProgress = !1;
};
d = Rg.prototype;
d.Sha = function() {
  this.hK = [{value:"Bug", desc:lg}, {value:"FeatureRequest", desc:mg}, {value:"MirroringQuality", desc:og}, {value:"Discovery", desc:pg}, {value:"Other", desc:qg}];
  this.G.feedbackTypes = this.hK;
};
d.vG = function(a) {
  for (var b = [], c = 1;c < arguments.length;c++) {
    b.push(new Sg(c, arguments[c]));
  }
  b.push(new Sg(0, arguments[0]));
  return b;
};
d.Zha = function() {
  this.G.videoSmoothnessRatings = this.vG(wg, rg, sg, tg, ug, vg);
  this.G.videoQualityRatings = this.vG(wg, xg, yg, zg, Ag, Bg);
  this.G.audioQualityRatings = this.vG(wg, Cg, Dg, Eg, Fg, Gg);
};
d.Tha = function() {
  this.G.includeFineLogs = !0;
  this.G.feedbackType = "Bug";
  this.G.sendFeedback = this.Ida.bind(this);
  this.G.cancel = this.QZ.bind(this);
  this.G.attachLogsClick = this.lI.bind(this);
  this.G.viewLogs = this.Wja.bind(this);
};
d.Uha = function() {
  this.G.$watchGroup("videoSmoothness videoQuality audioQuality feedbackDescription comments feedbackType".split(" "), this.g_.bind(this));
  this.G.sufficientFeedback = !1;
};
d.Wha = function() {
  this.G.$watch("attachLogs", this.lI.bind(this));
  this.G.attachLogs = !0;
};
d.QZ = function() {
  this.G.feedbackDescription && !confirm(Hg) || window.close();
};
d.g_ = function() {
  var a = this.G.feedbackType;
  this.G.sufficientFeedback = "MirroringQuality" == a ? this.G.videoSmoothness || this.G.videoQuality || this.G.audioQuality || this.G.comments : "Discovery" == a ? this.G.visibleInSetup || this.G.comments : !!this.G.feedbackDescription;
};
d.Ida = function() {
  if (this.G.sufficientFeedback) {
    var a = this.G.feedbackType, b = "";
    "MirroringQuality" == a ? (this.G.videoSmoothness && (b += "\nVideo Smoothness: " + this.G.videoSmoothness), this.G.videoQuality && (b += "\nVideo Quality: " + this.G.videoQuality), this.G.audioQuality && (b += "\nAudio: " + this.G.audioQuality), this.G.projectedContentUrl && (b += "\nProjected Content/URL: " + this.G.projectedContentUrl), this.G.comments && (b += "\nComments: " + this.G.comments)) : "Discovery" == a ? (this.G.visibleInSetup && (b += "\nChromecast Visible in Setup: " + this.G.visibleInSetup), 
    this.G.hasNetworkSoftware && (b += "\nUsing VPN/proxy/firewall/NAS Software: " + this.G.hasNetworkSoftware), this.G.networkDescription && (b += "\nNetwork Description: " + this.G.networkDescription), this.G.comments && (b += "\nComments: " + this.G.comments)) : b = this.G.feedbackDescription;
    this.Hda("Type: " + a + "\n\n" + b);
  }
};
d.Hda = function(a) {
  this.G.sendDialogText = Ig;
  this.G.okButton = Pg;
  this.G.feedbackSent = !1;
  this.MJ.show({locals:{kta:this.G.feedbackSent, lza:this.G.sendDialogText, i9:this.G.okButton}, scope:this.G, preserveScope:!0, bindToController:!0, template:'<md-dialog id="feedback-confirmation"><md-dialog-content><div id="send-feedback-text">{{sendDialogText}}</div><md-dialog-actions><md-button class="md-raised md-primary"ng-disabled="!feedbackSent" ng-click="closeWindow()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>', controller:this.Ay});
  this.AS(a, Date.now());
};
d.AS = function(a, b) {
  var c = Date.now();
  !this.G.requestLogsInProgress || 5000 < c - b ? this.O0(a) : setTimeout(this.AS.bind(this), 1000, a, b);
};
d.O0 = function(a) {
  var b = this, c = 0, e = function(a, c, e) {
    e ? a(!0) : (b.G.sendDialogText = Lg, b.os(), c(Error("Failed to send")));
  };
  (new Pe(function() {
    c++;
    return new Promise(function(c, h) {
      var f = b.G.userEmail, p = b.rf;
      c = e.bind(null, c, h);
      h = chrome.runtime.getManifest();
      jg({productId:85561, bucket:"Canary", flow:"submit", serverUri:"https://www.google.com/tools/feedback", allowNonLoggedInFeedback:!0, locale:h.default_locale, enableAnonymousFeedback:!f, report:{description:a}, callback:c}, {version:h.version, description:h.description, user_email:f || "NA", logs:p.Xv || "NA", external_logs:p.wu || "NA", device_model:p.modelName || "NA", receiver_version:p.receiverVersion || "NA", dash_report_url:p.ZP || "NA", cast_device_counts:p.KI, dial_device_counts:p.KJ});
    });
  }, 10000, 4)).gx(2).start().then(function() {
    b.G.sendDialogText = Kg;
    b.G.feedbackSent = !0;
    b.os();
  }, function() {
    b.G.sendDialogText = Jg;
    b.G.feedbackSent = !0;
    b.os();
  });
};
d.lI = function() {
  var a = this;
  this.rf = new kg;
  this.G.attachLogs && (this.G.requestLogsInProgress = !0, chrome.runtime.sendMessage(new ag(this.s1, "retrieve_log_data"), function(b) {
    a.G.requestLogsInProgress = !1;
    a.rf.Xv = b.logs || "no extension";
    b.castStreamingLogs && (a.rf.ZP = b.castStreamingLogs);
    b.castDeviceCounts && (a.rf.KI = b.castDeviceCounts);
    b.dialDeviceCounts && (a.rf.KJ = b.dialDeviceCounts);
    if (b = b.device) {
      if (b.model && (a.rf.modelName = b.model), b.version && (a.rf.receiverVersion = b.version), !a.gH) {
        var c = Sa();
        a.gH = !0;
        a.rf.wu = dg(b.ip, c, a.C$.bind(a));
      }
    }
  }));
};
d.Wja = function() {
  this.G.logsHeader = Mg;
  this.G.sendLogs = Ng;
  this.G.fineLogsWarning = Og;
  this.G.okButton = Pg;
  this.MJ.show({locals:{Upa:this.G.attachLogs, Xv:this.rf.Xv, Cua:this.G.includeFineLogs, xva:this.G.logsHeader, nza:this.G.sendLogs, mta:this.G.fineLogsWarning, i9:this.G.okButton}, scope:this.G, preserveScope:!0, bindToController:!0, clickOutsideToClose:!0, template:'<md-dialog><md-dialog-content id="logs-dialog"><div class="subheading">{{logsHeader}}</div><div ng-show="includeFineLogs && attachLogs"id="feedback-fine-log-warning" class="informative">{{fineLogsWarning}}</div><pre>{{logs}}</pre><div class="send-logs"><md-checkbox type="checkbox" ng-model="attachLogs"ng-change="attachLogsClick()"><span>{{sendLogs}}</span></md-checkbox></div><md-dialog-actions><md-button class="md-raised md-primary"ng-click="closeDialog()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>', 
  controller:this.Ay});
};
d.C$ = function(a, b) {
  this.gH = !1;
  this.rf.wu = "error" == a ? "" : b;
  this.G.attachLogs || (this.rf.wu = "");
  this.os();
};
d.os = function() {
  this.G.$$phase || this.G.$apply();
};
d.Ay = function(a, b) {
  a.closeWindow = function() {
    window.close();
  };
  a.closeDialog = function() {
    b.hide();
  };
};
Rg.prototype.Ay.$inject = ["$scope", "$mdDialog"];
var Sg = function(a, b) {
  this.id = a;
  this.desc = b;
  this.text = 0 == a ? b : a + " (" + b + ")";
};
angular.module("feedbackApp", "chrome_18n material.components.button material.components.checkbox material.components.dialog material.components.input material.components.radioButton".split(" ")).controller("FeedbackCtrl", ["$scope", "$mdDialog", Rg]);
m("ng.safehtml.googSceHelper.isGoogHtmlType", function(a) {
  return a && a.Vn ? !0 : !1;
}, void 0);
m("ng.safehtml.googSceHelper.isCOMPILED", function() {
  return !0;
}, void 0);
m("ng.safehtml.googSceHelper.unwrapAny", function(a) {
  if (a instanceof jf) {
    return kf(a);
  }
  if (a instanceof pf) {
    return qf(a);
  }
  if (a instanceof mf) {
    return nf(a);
  }
  if (a instanceof ff) {
    return gf(a);
  }
  if (a instanceof cf) {
    return df(a);
  }
  throw Error();
}, void 0);
m("ng.safehtml.googSceHelper.unwrapGivenContext", function(a, b) {
  if ("html" == a) {
    return qf(b);
  }
  if ("resourceUrl" == a || "templateUrl" == a) {
    return kf(b);
  }
  if ("url" == a) {
    return b instanceof jf ? kf(b) : nf(b);
  }
  if ("css" == a) {
    return gf(b);
  }
  if ("js" == a) {
    return df(b);
  }
  throw Error();
}, void 0);

