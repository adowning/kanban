'use strict';var Tg;
m("mr.IssueSeverity", {Vla:"fatal", opa:"warning", lna:"notification"}, void 0);
m("mr.IssueAction", {Kla:"dismiss", Oma:"learn_more"}, void 0);
var Ug = function(a, b, c) {
  this.routeId = null;
  this.severity = b;
  this.isBlocking = "fatal" == this.severity ? !0 : !1;
  this.title = a;
  this.message = null;
  this.defaultAction = c;
  this.helpPageId = this.secondaryActions = null;
};
Ug.prototype.xfa = function(a) {
  this.helpPageId = a;
  return this;
};
Ug.prototype.eha = function(a) {
  this.secondaryActions = a;
  return this;
};
Ug.prototype.PF = function(a) {
  this.message = a;
  return this;
};
Ug.prototype.Dfa = function(a) {
  if (!a && "fatal" == this.severity) {
    throw Error("All FATAL issues must be blocking.");
  }
  this.isBlocking = a;
  return this;
};
var Vg = function(a, b) {
  var c = this;
  this.Or = void 0 === b ? null : b;
  this.promise = new Promise(function(b, f) {
    var e = function(a) {
      c.Or = null;
      f(a);
    };
    c.sca = e;
    a(function(a) {
      c.Or = null;
      b(a);
    }, e);
  });
};
Vg.prototype.cancel = function(a) {
  this.sca(a);
  if (this.Or) {
    var b = this.Or;
    this.Or = null;
    setTimeout(function() {
      return b(a);
    }, 0);
  }
};
Vg.prototype.Ez = function(a, b) {
  b = void 0 === b ? null : b;
  var c = this;
  return new Vg(function(e, f) {
    c.promise.then(function(b) {
      if (a) {
        try {
          e(a(b));
        } catch (k) {
          f(k);
        }
      } else {
        e(b);
      }
    }, function(a) {
      if (b) {
        try {
          e(b(a));
        } catch (k) {
          f(k);
        }
      } else {
        f(a);
      }
    });
  }, function(a) {
    c.cancel(a);
  });
};
Vg.prototype.then = function(a, b) {
  return this.Ez(a, void 0 === b ? null : b);
};
Vg.prototype.catch = function(a) {
  return this.Ez(null, a);
};
var Wg = function(a) {
  return new Vg(function(b) {
    b(a);
  });
}, Xg = function(a) {
  return new Vg(function(b, c) {
    c(a);
  });
}, Yg = function(a) {
  return new Vg(function(b, c) {
    a.then(b, c);
  });
}, Zg = function(a, b) {
  var c = !1, e = null;
  return new Vg(function(f, h) {
    a.then(function(a) {
      c || (e = b(a), e.promise.then(f, h));
    }, h);
  }, function(a) {
    e ? e.cancel(a) : c = !0;
  });
};
var $g = function() {
  return null != $b && -1 != $b.indexOf("CrOS");
}, ah = function() {
  var a = $b;
  if ("string" != typeof a) {
    return !1;
  }
  a = a.match(/Windows NT \d+.\d+/);
  if (!(a instanceof Array)) {
    return !1;
  }
  a = a[0];
  a = a.match(/\d+.\d+/);
  if (!(a instanceof Array)) {
    return !1;
  }
  a = a[0];
  return 6.2 <= parseFloat(a);
}, bh = function() {
  return $g() ? "ChromeOS" : qc ? "Windows" : pc ? "Mac" : rc ? "Linux" : "Other";
};
var ch = "undefined" != typeof chrome && !!chrome.networkingPrivate && !!chrome.networkingPrivate.setWifiTDLSEnabledState && $g(), dh = $g() || qc;
var eh = function(a, b, c, e) {
  c && (w("offscreen_tab" == a), w(e));
  this.HI = a;
  this.kf = b;
  this.oQ = c || null;
  this.mR = e || null;
};
d = eh.prototype;
d.aP = function() {
  return "tab" == this.HI;
};
d.VO = function() {
  return "offscreen_tab" == this.HI;
};
d.uG = function(a) {
  return this.aP() ? this.cV() : this.VO() ? this.eja() : this.cja(w(a, "Missing desktop capture source id"));
};
d.cV = function() {
  var a = {audio:this.kf.shouldCaptureAudio, video:this.kf.shouldCaptureVideo};
  this.kf.shouldCaptureVideo && (a.videoConstraints = {mandatory:{enableAutoThrottling:!0}}, this.$S(a.videoConstraints.mandatory));
  return a;
};
d.eja = function() {
  w(this.mR, "Missing offscreen capture presentation id");
  var a = this.cV();
  a.presentationId = this.mR;
  return a;
};
d.cja = function(a) {
  var b = {audio:!1, video:!1};
  this.kf.shouldCaptureVideo && (b.video = {mandatory:{chromeMediaSource:"desktop", chromeMediaSourceId:a}}, this.$S(b.video.mandatory));
  dh && this.kf.shouldCaptureAudio && (b.audio = {mandatory:{chromeMediaSource:"desktop", chromeMediaSourceId:a}});
  return b;
};
d.$S = function(a) {
  var b = this.kf.minWidth, c = this.kf.minHeight;
  this.kf.senderSideLetterboxing && (c = this.kf.KM(), b = c.width, c = c.height);
  Object.assign(a, {minWidth:b, minHeight:c, maxWidth:this.kf.maxWidth, maxHeight:this.kf.maxHeight, maxFrameRate:this.kf.maxFrameRate});
};
var fh = function(a) {
  this.Ia = a;
  this.fk = Date.now();
};
fh.prototype.aB = function(a, b) {
  null != b && (a += "_" + b);
  return a;
};
fh.prototype.Ro = function(a) {
  this.Ia = a;
};
fh.prototype.end = function(a) {
  gh(this.aB(this.Ia, a), Date.now() - this.fk);
};
var gh = function(a, b) {
  0 > b && (hh.v("Timing analytics event with negative time"), b = 0);
  1E4 < b && (b = 1E4);
  try {
    chrome.metricsPrivate.recordTime(a, b);
  } catch (c) {
    hh.v("Failed to record time " + b + " in " + a);
  }
}, hh = D("mr.Timing"), ih = function(a) {
  fh.call(this, a);
};
la(ih, fh);
ih.prototype.end = function(a) {
  a = this.aB(this.Ia, a);
  var b = Date.now() - this.fk;
  if (0 > b) {
    jh.v("Timing analytics event with negative time");
  } else {
    1E4 > b && (b = 1E4);
    18E4 < b && (b = 18E4);
    try {
      chrome.metricsPrivate.recordMediumTime(a, b);
    } catch (c) {
      jh.v("Failed to record time " + b + " in " + a);
    }
  }
};
var jh = D("mr.MediumTiming"), kh = function(a) {
  fh.call(this, a);
};
la(kh, fh);
kh.prototype.end = function(a) {
  a = this.aB(this.Ia, a);
  var b = Date.now() - this.fk;
  if (0 > b) {
    lh.v("Timing analytics event with negative time");
  } else {
    18E4 > b && (b = 18E4);
    36E5 < b && (b = 36E5);
    try {
      chrome.metricsPrivate.recordLongTime(a, b);
    } catch (c) {
      lh.v("Failed to record time " + b + " in " + a);
    }
  }
};
var lh = D("mr.LongTiming"), mh = D("mr.Analytics"), nh = function(a) {
  try {
    chrome.metricsPrivate.recordUserAction(a);
  } catch (b) {
    mh.v("Failed to record event " + a);
  }
}, oh = function(a, b, c) {
  var e, f = 0, h;
  for (h in c) {
    f++, c[h] == b && (e = h);
  }
  if (e) {
    c = {metricName:a, type:"histogram-linear", min:1, max:f, buckets:f + 1};
    try {
      chrome.metricsPrivate.recordValue(c, b);
    } catch (k) {
      mh.v("Failed to record enum value " + e + " (" + b + ") in " + a, k);
    }
  } else {
    mh.error("Unknown analytics value, " + b + " for histogram, " + a, Error());
  }
}, ph = function(a, b) {
  try {
    if (0 > b) {
      throw Error("Invalid count for " + a + ": " + b);
    }
    100 < b && mh.v("Small count for " + a + " exceeded limits: " + b, Error());
    chrome.metricsPrivate.recordSmallCount(a, b);
  } catch (c) {
    mh.v("Failed to record small count " + a + " (" + b + ")", c);
  }
};
var qh = {lla:0, jla:1, nla:2, kla:3, Qka:4, mla:5, rma:6, Roa:7, Ela:8, CH:9}, rh = function(a, b) {
  a = Error.call(this, a);
  this.message = a.message;
  "stack" in a && (this.stack = a.stack);
  this.reason = 0 <= b && 9 >= b ? b : 9;
};
la(rh, Error);
var sh = function(a) {
  this.Ak = a;
  this.Yc = this.xo = null;
  this.a = D("mr.mirror.MirrorMediaStream");
};
d = sh.prototype;
d.UT = function(a) {
  this.xo = a;
};
d.start = function() {
  return this.Ak.aP() ? this.Dia() : this.Ak.VO() ? this.wia() : this.uia();
};
d.Dia = function() {
  var a = this, b = this.Ak.uG();
  this.a.info("Starting tab capture with constraints " + JSON.stringify(b));
  return new Promise(function(c, e) {
    chrome.tabCapture.capture(b, function(b) {
      b ? (a.YF(b), c(a)) : e(a.CJ());
    });
    window.setTimeout(function() {
      e(new rh("chrome.tabCapture.capture failed to call its callback", 2));
    }, 5000);
  });
};
d.z6 = function(a) {
  a && this.a.info(function() {
    return "Track " + JSON.stringify(a.target) + " ended";
  });
  this.stop();
};
d.CJ = function() {
  return chrome.runtime.lastError && chrome.runtime.lastError.message ? new rh(chrome.runtime.lastError.message, 7) : new rh("empty_stream", 0);
};
d.uia = function() {
  var a = this;
  return (new Promise(function(a, c) {
    var b = ["screen", "audio"];
    "Linux" == bh() && b.push("window");
    var f = chrome.desktopCapture.chooseDesktopMedia(b, a);
    window.setTimeout(function() {
      chrome.desktopCapture.cancelChooseDesktopMedia(f);
      c(new rh("timeout", 1));
    }, 60000);
  })).then(function(b) {
    if (!b) {
      throw new rh("User cancelled capture dialog", 3);
    }
    var c = a.Ak.uG(b);
    a.a.info(function() {
      return "Starting desktop capture with constraints " + JSON.stringify(c);
    });
    return new Promise(function(a, b) {
      navigator.webkitGetUserMedia(c, a, function(a) {
        var c = 8;
        if ("PermissionDeniedError" == a.name || "NotAllowedError" == a.name) {
          c = 3;
        }
        b(new rh(a.name + " " + a.constraintName + ": " + a.message, c));
      });
    });
  }).then(function(b) {
    if (b) {
      a.YF(b);
    } else {
      throw new rh("empty_stream", 8);
    }
    return a;
  });
};
d.wia = function() {
  var a = this;
  w(!!this.Ak.oQ);
  var b = this.Ak.uG();
  this.a.info(function() {
    return "Starting offscreen tab capture with constraints " + JSON.stringify(b);
  });
  return new Promise(function(c, e) {
    chrome.tabCapture.captureOffscreenTab(a.Ak.oQ.toString(), b, function(b) {
      b ? (a.YF(b), c(a)) : e(a.CJ());
    });
  });
};
d.YF = function(a) {
  var b = this;
  this.Yc = a;
  w(a.getAudioTracks().length || a.getVideoTracks().length, "Expecting at least one audio or video track.");
  a.getTracks().forEach(function(a) {
    a.onended = b.z6.bind(b);
  });
};
d.stop = function() {
  this.Yc && (this.Yc.getTracks().forEach(function(a) {
    a.onended = null;
    a.stop();
  }), this.Yc = null, this.xo && this.xo());
};
var th, uh = {Uma:0, ola:1, pla:2, Gla:3, Hla:4, $la:5, sma:6, Tma:7, dna:8, ena:9, Wna:10, toa:11, uoa:12, Foa:13, Qoa:14}, vh = function(a) {
  void 0 == th && (oh("MediaRouter.Provider.WakeEvent", a, uh), th = a);
};
var yh = function(a) {
  return wh(a) || xh(a);
}, zh = function(a) {
  if (!Ea(a, "http:") && !Ea(a, "https:")) {
    return !1;
  }
  var b = document.createElement("a");
  b.href = a;
  return "http:" != b.protocol && "https:" != b.protocol || -1 != b.hash.indexOf("__testprovider__") ? !1 : -1 == b.hash.indexOf("__castAppId__");
}, Ah = ["https://docs.google.com"], Bh = function(a) {
  return window.localStorage["debug.allowAllOrigins"] ? null : -1 != a.indexOf("0F5096E8") ? Ah : null;
}, wh = function(a) {
  return Ea(a, "urn:x-org.chromium.media:source:tab:") || -1 != a.indexOf("0F5096E8");
}, xh = function(a) {
  return "urn:x-org.chromium.media:source:desktop" == a;
};
var Ch = function(a) {
  return (new Promise(function(b) {
    chrome.tabs.get(a, b);
  })).then(function(b) {
    if (!b) {
      throw Error("No such tab " + a);
    }
    return b;
  });
};
var Dh = function() {
}, Ih = function(a) {
  Eh.info("Loading module " + a);
  var b = Fh.get(a) || null;
  if (b) {
    return Promise.resolve(b);
  }
  b = Gh.get(a);
  b || (b = new Oc, Gh.set(a, b), Hh(a, b));
  return b.promise;
}, Hh = function(a, b) {
  var c = Jh.get(a) || null;
  if (!c) {
    b.reject(Error("No corresponding bundle for " + a));
  } else {
    if (!Kh.has(c)) {
      var e = Lh.get(c);
      e || (Eh.info("Loading bundle " + c + " for module " + a), e = Mh(c), Lh.set(c, e));
      e.catch(function(a) {
        b.reject(a);
      });
    }
  }
}, Mh = function(a) {
  var b = new Oc;
  b.promise.then(function() {
    Eh.info("Bundle " + a + " loaded");
  }, function(b) {
    Eh.error("Failed to load bundle " + a);
    throw b;
  });
  var c = document.createElement("script");
  c.src = chrome.extension.getURL(a);
  c.setAttribute("type", "text/javascript");
  c.async = !0;
  c.onload = function() {
    return b.resolve(void 0);
  };
  c.onerror = function() {
    return b.reject(Error("Failed to load bundle " + a));
  };
  document.head.appendChild(c);
  return b.promise;
}, Nh = function(a, b) {
  if (Fh.has(a)) {
    throw Error("Duplicate module " + a);
  }
  Fh.set(a, b);
  (a = Gh.get(a)) && a.resolve(b);
};
Dh.prototype.handleEvent = function(a, b) {
  for (var c = 1;c < arguments.length;++c) {
  }
  throw Error("Not implemented");
};
var Jh = new Map([["mr.cast.SinkDiscoveryService", "background_script.js"], ["mr.mirror.cast.Service", "mirroring_cast_streaming.js"], ["mr.cloud.discovery.CloudSinkDiscoveryService", "background_script.js"], ["mr.dial.SinkDiscoveryService", "background_script.js"], ["mr.mirror.hangouts.HangoutsService", "mirroring_hangouts.js"], ["mr.mirror.hangouts.MeetingsService", "mirroring_hangouts.js"], ["mr.ProviderManager", "background_script.js"], ["mr.mirror.webrtc.WebRtcService", "mirroring_webrtc.js"]]), 
Kh = new Set(["background_script.js"]), Eh = D("mr.Module"), Fh = new Map, Gh = new Map, Lh = new Map;
var Oh = chrome.i18n.getMessage("545449835455981095");
var Ph = function(a, b) {
  this.Lo = a;
  this.mw = b || null;
  this.zg = this.$a = null;
  this.w = D("mr.mirror.Service." + a);
  this.VD = t(this.x6, this);
  this.nr = !1;
};
la(Ph, Dh);
d = Ph.prototype;
d.Xc = function(a) {
  this.nr || (this.mw = a, this.nr = !0, this.ou());
};
d.ou = function() {
};
d.getName = function() {
  return this.Lo;
};
d.Qs = function(a, b, c, e, f) {
  var h = this;
  this.w.info("Start mirroring on route " + a.id);
  return this.nr ? Yg(this.ZJ(b, a.$f.tabId).then(function() {
    return h.KU();
  }).then(function() {
    var a = Qh(b, c, e);
    return (new sh(a)).start();
  }).then(function(b) {
    h.zg = b;
    b.UT(function() {
      h.xo(b);
    });
    return f ? f(a).promise : a;
  }).then(function(a) {
    if (h.$a) {
      throw new rh("Cannot start multiple sessions");
    }
    h.$a = h.cu(c, a);
    return h.$a.start(h.zg.Yc);
  }).then(function() {
    wh(b) && !chrome.tabs.onUpdated.hasListener(h.VD) && chrome.tabs.onUpdated.addListener(h.VD);
    return h.kR(a, b, c);
  }).then(null, function(a) {
    h.XQ(a);
    return h.Ti().then(function() {
      throw a;
    });
  })) : Xg(Error("Not initialized"));
};
d.ey = function(a, b, c, e, f, h) {
  this.w.info("Update mirroring on route " + a.id);
  return this.nr ? Yg(this.ZJ(b, f).then(this.P0.bind(this, a, b, c, e, h))) : Xg(Error("Not initialized"));
};
d.ZJ = function(a, b) {
  return wh(a) ? b ? Ch(b).then(function(a) {
    if (!a.active) {
      throw new rh("Tab to be mirrored is not active", 7);
    }
  }) : Promise.reject(new rh("BUG: Tab ID is required.")) : Promise.resolve();
};
d.P0 = function(a, b, c, e, f) {
  var h = this;
  if (!this.$a) {
    return Promise.reject(new rh("No session to update streams on", 7));
  }
  if (!this.$a.RU()) {
    return Promise.reject(new rh("Session does not support updating stream", 7));
  }
  var k = !1;
  return Promise.resolve().then(function() {
    var a = Qh(b, c, e);
    return (new sh(a)).start();
  }).then(function(b) {
    var c = h.zg;
    h.zg = b;
    b.UT(t(h.xo, h, b));
    k = !0;
    c.stop();
    return f ? f(a).promise : a;
  }).then(function(a) {
    if (!h.$a) {
      throw new rh("Session ended while updating stream");
    }
    h.$a.Zga(a);
    return h.$a.yV(h.zg.Yc);
  }).then(this.kR.bind(this, a, b, c)).then(null, function(a) {
    h.XQ(a);
    if (k) {
      return h.Ti().then(function() {
        throw a;
      });
    }
    throw a;
  });
};
d.kR = function(a, b, c) {
  var e = this;
  return new Promise(function(f, h) {
    if (e.$a) {
      if (wh(b)) {
        e.$a.Jja(a.$f.tabId).then(function() {
          e.$a.$w();
          e.Qw();
          f(e.$a.pb);
        }, function(a) {
          e.w.error("Failed to obtain initial tab info.", a);
          h(a);
        });
      } else {
        if (zh(b)) {
          var k = "Capturing " + a.mediaSource;
          e.$a.QF(k, k, null);
          e.$a.$w();
          e.HE();
        } else {
          e.$a.QF("Capturing Desktop", "Capturing Desktop", null), e.$a.$w(), e.Mw();
        }
        e.c_(c, e.zg);
        f(e.$a.pb);
      }
    } else {
      h(new rh("Session gone before executing post-startup steps", 7));
    }
  });
};
d.XQ = function(a) {
  a.reason = null != a.reason ? a.reason : 9;
  this.w.error("Failed to start mirroring: " + a.message + ",  reason = " + a.reason + ": " + a.stack);
  this.Ow(a.reason);
};
d.xo = function(a) {
  this.zg == a && (this.Pw(), this.Ti());
};
d.KU = function() {
  var a = this;
  return this.nr ? this.Ti().then(function(b) {
    b && a.Nw();
    return b;
  }) : Promise.reject("Not initialized");
};
d.Ti = function() {
  var a = this;
  chrome.tabs.onUpdated.removeListener(this.VD);
  this.zg && (this.zg.stop(), this.zg = null);
  if (!this.$a) {
    return Promise.resolve(!1);
  }
  var b = this.$a;
  this.$a = null;
  return this.iz(b).catch(function(b) {
    return a.w.error("Error in before-cleanup steps", b);
  }).then(function() {
    return b.stop();
  }).catch(function(b) {
    return a.w.error("Error stopping session", b);
  }).then(function() {
    a.mw.PD(b.pb.id);
  }).catch(function(b) {
    return a.w.error("Error in ended callbacks", b);
  }).then(function() {
    return !0;
  });
};
d.iz = function() {
  return Promise.resolve();
};
d.x6 = function(a, b, c) {
  vh(14);
  this.$a && this.$a.tabId && this.$a.tabId == a && ("complete" == b.status || b.favIconUrl && "complete" == c.status) && (this.$a.AV(c), this.mw.FQ(this.$a.pb), this.$a.$w());
};
var Qh = function(a, b, c) {
  if (wh(a)) {
    return new eh("tab", b);
  }
  if (xh(a)) {
    return new eh("desktop", b);
  }
  if (zh(a)) {
    if (!c) {
      throw new rh("Missing offscreen tab presentation id");
    }
    return new eh("offscreen_tab", b, a, c);
  }
  throw new rh("Source URN does not suggest a known capture type.");
};
d = Ph.prototype;
d.c_ = function(a, b) {
  a.shouldCaptureAudio && b.Yc && !b.Yc.getAudioTracks().length && this.mw.Oh().send(new Ug(Oh, "notification", "dismiss"));
};
d.cu = function() {
};
d.Qw = function() {
};
d.Mw = function() {
};
d.HE = function() {
};
d.Nw = function() {
};
d.Ow = function() {
};
d.Pw = function() {
};
d.$g = function() {
  return Promise.reject("Not implemented");
};
var Rh = function(a) {
  this.pb = a;
  this.Av = !1;
  this.tabId = this.NE = this.iconUrl = null;
};
d = Rh.prototype;
d.QF = function(a, b, c) {
  this.pb.description = a;
  this.Av || this.pb.offTheRecord ? this.iconUrl = this.NE = null : (this.NE = b, this.iconUrl = c);
};
d.$w = function() {
  this.Av || this.pb.offTheRecord || this.ES();
};
d.Jja = function(a) {
  this.tabId = a;
  return Ch(a).then(this.AV.bind(this));
};
d.AV = function(a) {
  this.Av = a.incognito;
  this.QF(a.title, Ea(a.url, "file://") ? "Local content (Tab)" : Qc(a.url.match(Pc)[3] || null, !0) + " (Tab)", a.favIconUrl);
};
d.Zga = function(a) {
  this.pb = a;
};
d.start = function() {
};
d.RU = function() {
  return !1;
};
d.yV = function() {
};
d.stop = function() {
  return Promise.resolve();
};
d.ES = function() {
};
var Th = function() {
  var a = this;
  this.maxWidth = 1920;
  this.maxHeight = 1080;
  this.minHeight = this.minWidth = 180;
  this.senderSideLetterboxing = !1;
  this.maxFrameRate = 30;
  this.minVideoBitrate = 300;
  this.maxVideoBitrate = 5000;
  this.audioBitrate = 0;
  this.maxLatencyMillis = 800;
  this.animatedLatencyMillis = this.minLatencyMillis = 400;
  this.dscpEnabled = pc || rc || $g() || ah();
  this.enableLogging = !0;
  this.useTdls = !1;
  this.shouldCaptureAudio = this.shouldCaptureVideo = !0;
  var b = window.localStorage ? window.localStorage.getItem(Sh) : null;
  if (b) {
    try {
      var c = JSON.parse(String(b));
      if (c instanceof Object) {
        this.DV(c), D("mr.mirror.Settings").v(function() {
          return "Initial mr.mirror.Settings overridden to: " + a.Yx();
        });
      } else {
        throw Error("localStorage[" + Sh + "] does not parse as an Object: " + b);
      }
    } catch (e) {
      throw D("mr.mirror.Settings").error(Sh + ' must be of the form \'{"maxWidth":640, "maxHeight":360}\'.', e), Error("Overrides not parseable.  See ERROR log for details.");
    }
  }
};
d = Th.prototype;
d.clone = function() {
  var a = new Th;
  a.DV(this);
  return a;
};
d.Yx = function() {
  return JSON.stringify(this, function(a, b) {
    if (0 == a.length || !a.endsWith("_")) {
      return b;
    }
  });
};
d.DV = function(a) {
  for (var b = ka(Object.keys(a)), c = b.next();!c.done;c = b.next()) {
    c = c.value, c.endsWith("_") || typeof a[c] !== typeof this[c] || (this[c] = a[c]);
  }
};
d.HP = function() {
  this.i_();
  Object.freeze(this);
};
d.i_ = function() {
  var a = screen.width, b = screen.height;
  this.maxHeight * a < this.maxWidth * b ? (a = Math.min(this.maxWidth, a), a -= a % 160, b = 90 * a / 160) : (b = Math.min(this.maxHeight, b), b -= b % 90, a = 160 * b / 90);
  if (a < Math.max(160, this.minWidth) || b < Math.max(90, this.minHeight)) {
    a = Math.max(160, this.minWidth), b = Math.max(90, this.minHeight);
  }
  this.maxWidth = a;
  this.maxHeight = b;
};
d.KM = function() {
  if (this.T8()) {
    return {width:this.minWidth, height:this.minHeight};
  }
  for (var a = this.maxWidth, b = this.maxHeight;0 != b;) {
    var c = a % b, a = b, b = c;
  }
  b = this.maxWidth / a;
  a = this.maxHeight / a;
  if (b < this.minWidth || a < this.minHeight) {
    if (c = Math.max(this.minWidth / b, this.minHeight / a), b *= c, a *= c, b > this.maxWidth || a > this.maxHeight) {
      b = this.maxWidth, a = this.maxHeight;
    }
  }
  b = Math.round(b);
  a = Math.round(a);
  return {width:b, height:a};
};
d.T8 = function() {
  return 0 == this.minHeight || 0 == this.maxHeight ? !1 : Math.floor(100.0 * this.minWidth / this.minHeight) == Math.floor(100.0 * this.maxWidth / this.maxHeight);
};
var Sh = "mr.mirror.Settings.Overrides";
var Uh = function(a, b) {
  this.type = a;
  this.data = b;
}, Vh = function(a) {
  a = JSON.parse(a);
  if (!a.type) {
    throw Error("Invalid message");
  }
  return new Uh(a.type, a.data);
}, Wh = function(a, b, c, e) {
  this.description = a;
  this.settings = b || null;
  this.mediaConstraints = c || null;
  this.presentationUrl = e || null;
};
var Yh = function(a, b) {
  w(l(webkitRTCPeerConnection), "webkitRTCPeerConnection is not available.  Do you need to set flags?");
  this.a = D("cv2.PeerConnection");
  this.D8 = Xh;
  this.U = this.Z_(b);
  this.Zz = this.R_(a);
  this.Z0 = !0;
  this.MS = new Oc;
  this.tF = !1;
  this.qw = 0;
  this.mr = null;
  this.mP = this.HD = 0;
  this.ie = !1;
  this.vQ = this.wQ = this.KD = this.GQ = this.C9 = pa;
};
d = Yh.prototype;
d.RT = function(a) {
  this.KD = a;
};
d.QT = function(a) {
  this.wQ = a;
};
d.PT = function(a) {
  this.vQ = a;
};
d.TT = function(a) {
  this.GQ = a;
};
d.ST = function(a) {
  this.Zz.onmessage = function(b) {
    a(b.data);
  };
};
d.Dv = function() {
  return this.ie;
};
d.h4 = function(a) {
  var b = {};
  b.iceServers = [{url:"stun:stun.l.google.com:19302"}].concat(a);
  return b;
};
d.Z_ = function(a) {
  var b = this.h4(a);
  a = new webkitRTCPeerConnection(b);
  a.onicecandidate = t(this.MD, this);
  a.kxa = t(this.Y9, this);
  a.oniceconnectionstatechange = t(this.X9, this);
  this.a.info(function() {
    return "Created webkitRTCPeerConnnection with config: " + JSON.stringify(b);
  });
  return a;
};
d.R_ = function(a) {
  return this.U.createDataChannel(a, {reliable:!1});
};
d.Fda = function(a) {
  "string" == typeof a ? this.Zz.send(a) : this.Zz.send(JSON.stringify(a));
};
d.start = function() {
  this.ie || (this.ie = !0, this.Zp());
};
d.stop = function() {
  this.a.info("Stopping peer connection...");
  this.ie && (this.ie = !1, "closed" != this.U.signalingState && this.U.close());
  this.U = null;
};
d.addStream = function(a) {
  this.U.addStream(a);
};
d.removeStream = function(a) {
  this.ie && this.U.removeStream(a);
};
d.Zp = function() {
  var a = this;
  this.a.info("Sending offer to peer.");
  this.HD = Date.now();
  this.U.createOffer(t(this.BT, this), function(b) {
    a.a.v("Error creating offer.", b);
  }, this.D8);
  this.MS.promise.then(function(b) {
    a.GQ(b);
  });
};
d.BT = function(a) {
  var b = this;
  this.a.info(function() {
    return "Setting local description: " + JSON.stringify(a);
  });
  this.U.setLocalDescription(a, function() {
    b.a.info("Local description set successfully");
  }, function(a) {
    b.a.v("Error setting local description.", a);
  });
};
d.K1 = function(a) {
  return {type:a.type, sdp:a.sdp};
};
d.setRemoteDescription = function(a) {
  var b = this;
  this.a.L(function() {
    return "<===: " + JSON.stringify(a);
  });
  var c = new RTCSessionDescription(a);
  this.a.info(function() {
    return "Setting remote description: " + JSON.stringify(c);
  });
  this.U.setRemoteDescription(c, function() {
    b.a.info("Remote description set successfully.");
  }, function(a) {
    b.a.v("Error setting remote description.", a);
  });
};
d.MD = function(a) {
  var b = this;
  a.candidate ? (this.qw++, this.mP = Date.now(), 1 == this.qw ? (w(null == this.mr), this.mr = ue(function() {
    b.a.info("ICE candidate gathering timed out.");
    b.mr = null;
    b.hF();
  }, 5E3)) : this.tF && this.a.v("Received ICE candidate after resolving session description.")) : (this.a.info("End of ICE candidates."), gh("MediaRouter.WebRtc.IceCandidateGathering.Duration.Reported", Date.now() - this.HD), this.hF(), 0 < this.qw && gh("MediaRouter.WebRtc.IceCandidateGathering.Duration.Real", this.mP - this.HD));
};
d.Y9 = function() {
  "completed" == this.U.iceGatheringState && this.hF();
};
d.hF = function() {
  ve(this.mr);
  this.mr = null;
  this.tF || (this.a.info("Resolving sesion description after gathering " + this.qw + " ICE candidates."), this.MS.resolve(this.K1(this.U.localDescription)), this.tF = !0);
};
d.X9 = function(a) {
  var b = this;
  if (this.U) {
    var c = this.U.iceConnectionState;
    this.a.info("New ICE connection state: " + c + ".");
    "connected" == c ? this.KD("iceconnected") : "completed" == c ? this.KD("icecompleted") : "failed" == c ? (this.a.v(function() {
      return "Ice connection failed: " + JSON.stringify(a);
    }), this.wQ("icefailed")) : "closed" == c ? this.vQ("iceclosed") : "disconnected" == c && (this.a.v("Ice connection state is bad."), this.Z0 && this.Dv() ? (this.a.info("Restarting ICE."), this.U.createOffer(t(this.BT, this), function(a) {
      b.a.v("Error creating new offer.", a);
    }, Zh)) : this.C9());
  }
};
var Xh = {mandatory:{OfferToReceiveAudio:!0, OfferToReceiveVideo:!0}}, Zh = {mandatory:{IceRestart:!0, OfferToReceiveAudio:!0, OfferToReceiveVideo:!0}};
pa.LU = window.localStorage;
var $h = 0, bi = function(a) {
  return (a = window.localStorage.getItem(ai(a, !1))) ? JSON.parse(a) : null;
}, ci = function(a) {
  return (a = window.localStorage.getItem(ai(a, !0))) ? JSON.parse(a) : null;
}, ei = function(a) {
  if (di.has(a.Ca())) {
    throw Error("Duplicate instance name " + a.Ca());
  }
  di.set(a.Ca(), a);
  a.wb();
}, fi = null, gi = D("mr.PersistentDataManager"), di = new Map, ai = function(a, b) {
  return "mr." + (b ? "persistent." : "temp.") + a.Ca();
}, hi = function(a) {
  return !!window.localStorage.getItem("mrInstanceId") && window.localStorage.getItem("mrInstanceId") !== a;
}, ki = function() {
  gi.info("onSuspend");
  ii("version", chrome.runtime.getManifest().version);
  fi && ii("mrInstanceId", fi);
  di.forEach(ji);
}, ji = function(a) {
  var b = a.getData();
  b && void 0 != b[0] && ii(ai(a, !1), JSON.stringify(b[0]));
  b && void 0 != b[1] && ii(ai(a, !0), JSON.stringify(b[1]));
}, ii = function(a, b) {
  var c;
  c = window.localStorage.getItem(a);
  c = void 0 != c ? b.length - c.length : a.length + b.length;
  5200000 <= $h + c && (gi.v("Unable to write " + c + " bytes"), li());
  5200000 <= $h + c ? gi.error("Unable to write " + c + " bytes after clearing temporary") : (window.localStorage.setItem(a, b), $h += c);
}, li = function() {
  for (var a = ka(Object.keys(pa.LU)), b = a.next();!b.done;b = a.next()) {
    b = b.value, b.startsWith("mr.temp.") && ($h -= b.length + window.localStorage.getItem(b).length, delete window.localStorage[b]);
  }
  gi.info("removeTemporary_: " + $h + " bytes used");
};
var mi = B("Firefox"), ni = dc() || B("iPod"), oi = B("iPad"), pi = B("Android") && !(cc() || B("Firefox") || B("Opera") || B("Silk")), qi = cc(), ri = B("Safari") && !(cc() || B("Coast") || B("Opera") || B("Edge") || B("Silk") || B("Android")) && !(dc() || B("iPad") || B("iPod"));
var si = function(a) {
  this.Lia = a;
  this.so = 1000 * Math.floor(1e6 * Math.random());
};
d = si.prototype;
d.a1 = function() {
  ei(this);
};
d.av = function() {
  var a = this.so++;
  0 == a && (a = this.so++);
  return a;
};
d.Ca = function() {
  return "IdGenerator." + this.Lia;
};
d.getData = function() {
  return [this.so];
};
d.wb = function() {
  var a = bi(this);
  a && (this.so = a);
};
var ti = function(a) {
  return y(a, function(a) {
    a = a.toString(16);
    return 1 < a.length ? a : "0" + a;
  }).join("");
}, ui = function(a) {
  for (var b = [], c = 0, e = 0;e < a.length;e++) {
    var f = a.charCodeAt(e);
    128 > f ? b[c++] = f : (2048 > f ? b[c++] = f >> 6 | 192 : (55296 == (f & 64512) && e + 1 < a.length && 56320 == (a.charCodeAt(e + 1) & 64512) ? (f = 65536 + ((f & 1023) << 10) + (a.charCodeAt(++e) & 1023), b[c++] = f >> 18 | 240, b[c++] = f >> 12 & 63 | 128) : b[c++] = f >> 12 | 224, b[c++] = f >> 6 & 63 | 128), b[c++] = f & 63 | 128);
  }
  return b;
}, vi = function(a) {
  for (var b = [], c = 0, e = 0;c < a.length;) {
    var f = a[c++];
    if (128 > f) {
      b[e++] = String.fromCharCode(f);
    } else {
      if (191 < f && 224 > f) {
        var h = a[c++];
        b[e++] = String.fromCharCode((f & 31) << 6 | h & 63);
      } else {
        if (239 < f && 365 > f) {
          var h = a[c++], k = a[c++], p = a[c++], f = ((f & 7) << 18 | (h & 63) << 12 | (k & 63) << 6 | p & 63) - 65536;
          b[e++] = String.fromCharCode(55296 + (f >> 10));
          b[e++] = String.fromCharCode(56320 + (f & 1023));
        } else {
          h = a[c++], k = a[c++], b[e++] = String.fromCharCode((f & 15) << 12 | (h & 63) << 6 | k & 63);
        }
      }
    }
  }
  return b.join("");
};
chrome.cast.VERSION = [1, 2];
m("chrome.cast.VERSION", chrome.cast.VERSION, void 0);
chrome.cast.Sja = !0;
m("chrome.cast.usingPresentationApi", chrome.cast.Sja, void 0);
chrome.cast.Error = function(a, b, c) {
  this.code = a;
  this.description = b || null;
  this.details = c || null;
};
m("chrome.cast.Error", chrome.cast.Error, void 0);
chrome.cast.EX = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
m("chrome.cast.SenderApplication", chrome.cast.EX, void 0);
chrome.cast.Image = function(a) {
  this.url = a;
  this.width = this.height = null;
};
m("chrome.cast.Image", chrome.cast.Image, void 0);
chrome.cast.Volume = function(a, b) {
  this.level = l(a) ? a : null;
  this.muted = l(b) ? b : null;
};
m("chrome.cast.Volume", chrome.cast.Volume, void 0);
var wi = function(a, b, c, e, f) {
  this.id = a;
  this.friendlyName = b;
  this.iconType = void 0 === c ? "generic" : c;
  this.description = void 0 === e ? null : e;
  this.domain = void 0 === f ? null : f;
};
var xi = function(a, b) {
  this.input = a;
  this.domain = b;
};
var yi = function(a, b) {
  this.Ki = a;
  this.lja = b;
}, zi = new yi("https://www.googleapis.com/clouddevices/v1", "AIzaSyAOZM8ZYeov685QMjXT3sC7XNizfrTEKjA"), Ai = new yi("https://www.googleapis.com/calendar/v3", ""), Bi = new yi("https://www.googleapis.com/hangouts/v1", ""), Ci = new yi("https://networktraversal.googleapis.com/v1alpha", "AIzaSyAOZM8ZYeov685QMjXT3sC7XNizfrTEKjA");
var Di = function(a, b) {
  this.email = a;
  this.imageUrl = null != b ? b : null;
}, Ei = function(a) {
  this.type = a;
}, Fi = function(a, b, c) {
  this.type = "__cloud_webrtc_session_message__";
  this.sessionDescription = a;
  this.user = null != b ? b : null;
  this.flungUrl = null != c ? c : null;
};
la(Fi, Ei);
var Gi = function(a, b, c) {
  this.name = a;
  this.parameters = b;
  this.minimalRole = null != c ? c : "user";
}, Hi = {_settings:{type:"string"}, _presentationRequest:{type:"string"}, _optMediaConstraints:{type:"string"}, _webrtcMessage:{type:"string"}, _user:{type:"string"}}, Ii = new Gi("_knockingStartWebrtcSession", Hi, "viewer"), Ji = new Gi("_startWebrtcSession", Hi), Ki = new Gi("_stopSession", {}, "viewer");
var Li = function(a, b) {
  for (var c = [], e = 1;e < arguments.length;++e) {
    c[e - 1] = arguments[e];
  }
  for (var e = a, c = ka(c), f = c.next();!f.done;f = c.next()) {
    if (void 0 == e || "object" != typeof e) {
      return;
    }
    e = e[f.value];
  }
  return e;
};
var Mi = function(a) {
  return Promise.all(a.map(function(a) {
    return a.then(function(a) {
      return {Gu:!0, value:a};
    }, function(a) {
      return {Gu:!1, reason:a};
    });
  }));
};
var Ni = function() {
  this.ad = -1;
};
var Oi = {lH:{1E3:{other:"0K"}, 1E4:{other:"00K"}, 1E5:{other:"000K"}, 1E6:{other:"0M"}, 1E7:{other:"00M"}, 1E8:{other:"000M"}, 1E9:{other:"0B"}, 1E10:{other:"00B"}, 1E11:{other:"000B"}, 1E12:{other:"0T"}, 1E13:{other:"00T"}, 1E14:{other:"000T"}}, xW:{1E3:{other:"0 thousand"}, 1E4:{other:"00 thousand"}, 1E5:{other:"000 thousand"}, 1E6:{other:"0 million"}, 1E7:{other:"00 million"}, 1E8:{other:"000 million"}, 1E9:{other:"0 billion"}, 1E10:{other:"00 billion"}, 1E11:{other:"000 billion"}, 1E12:{other:"0 trillion"}, 
1E13:{other:"00 trillion"}, 1E14:{other:"000 trillion"}}}, Pi = Oi, Pi = Oi;
var Ri = function(a, b) {
  var c = ["0"];
  b = Qi[b][0] & 7;
  if (0 < b) {
    c.push(".");
    for (var e = 0;e < b;e++) {
      c.push("0");
    }
  }
  return a.replace(/0.00/g, c.join(""));
}, Qi = {AED:[2, "dh", "\u062f.\u0625.", "DH"], ALL:[0, "Lek", "Lek"], AUD:[2, "$", "AU$"], BDT:[2, "\u09f3", "Tk"], BGN:[2, "lev", "lev"], BRL:[2, "R$", "R$"], CAD:[2, "$", "C$"], CDF:[2, "FrCD", "CDF"], CHF:[2, "CHF", "CHF"], CLP:[0, "$", "CL$"], CNY:[2, "\u00a5", "RMB\u00a5"], COP:[32, "$", "COL$"], CRC:[0, "\u20a1", "CR\u20a1"], CZK:[50, "K\u010d", "K\u010d"], DKK:[50, "kr.", "kr."], DOP:[2, "RD$", "RD$"], EGP:[2, "\u00a3", "LE"], ETB:[2, "Birr", "Birr"], EUR:[2, "\u20ac", "\u20ac"], GBP:[2, 
"\u00a3", "GB\u00a3"], HKD:[2, "$", "HK$"], HRK:[2, "kn", "kn"], HUF:[34, "Ft", "Ft"], IDR:[0, "Rp", "Rp"], ILS:[34, "\u20aa", "IL\u20aa"], INR:[2, "\u20b9", "Rs"], IRR:[0, "Rial", "IRR"], ISK:[0, "kr", "kr"], JMD:[2, "$", "JA$"], JPY:[0, "\u00a5", "JP\u00a5"], KRW:[0, "\u20a9", "KR\u20a9"], LKR:[2, "Rs", "SLRs"], LTL:[2, "Lt", "Lt"], MNT:[0, "\u20ae", "MN\u20ae"], MVR:[2, "Rf", "MVR"], MXN:[2, "$", "Mex$"], MYR:[2, "RM", "RM"], NOK:[50, "kr", "NOkr"], PAB:[2, "B/.", "B/."], PEN:[2, "S/.", "S/."], 
PHP:[2, "\u20b1", "PHP"], PKR:[0, "Rs", "PKRs."], PLN:[50, "z\u0142", "z\u0142"], RON:[2, "RON", "RON"], RSD:[0, "din", "RSD"], RUB:[50, "\u20bd", "RUB"], SAR:[2, "Rial", "Rial"], SEK:[50, "kr", "kr"], SGD:[2, "$", "S$"], THB:[2, "\u0e3f", "THB"], TRY:[2, "TL", "YTL"], TWD:[2, "NT$", "NT$"], TZS:[0, "TSh", "TSh"], UAH:[2, "\u0433\u0440\u043d.", "UAH"], USD:[2, "$", "US$"], UYU:[2, "$", "$U"], VND:[48, "\u20ab", "VN\u20ab"], YER:[0, "Rial", "Rial"], ZAR:[2, "R", "ZAR"]};
var Si = {oH:".", By:",", tH:"%", Ly:"0", dX:"+", VW:"-", rH:"E", uH:"\u2030", Dy:"\u221e", $W:"NaN", nH:"#,##0.###", AX:"#E0", cX:"#,##0%", yW:"\u00a4#,##0.00", DW:"USD"}, Ti = Si, Ti = Si;
var Ui = function(a) {
  return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other";
}, Vi = Ui, Vi = Ui;
var Wi = function(a, b) {
  if (void 0 === b) {
    b = a + "";
    var c = b.indexOf(".");
    b = Math.min(-1 == c ? 0 : b.length - c - 1, 3);
  }
  return 1 == (a | 0) && 0 == b ? "one" : "other";
}, Xi = Wi, Xi = Wi;
var Yi = function(a, b) {
  this.width = a;
  this.height = b;
};
d = Yi.prototype;
d.clone = function() {
  return new Yi(this.width, this.height);
};
d.toString = function() {
  return "(" + this.width + " x " + this.height + ")";
};
d.PY = function() {
  return this.width * this.height;
};
d.nc = function() {
  return !this.PY();
};
d.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
d.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
d.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
d.scale = function(a, b) {
  b = q(b) ? b : a;
  this.width *= a;
  this.height *= b;
  return this;
};
var Zi = function() {
  this.ad = 64;
  this.ta = [];
  this.uz = [];
  this.WX = [];
  this.yw = [];
  this.yw[0] = 128;
  for (var a = 1;a < this.ad;++a) {
    this.yw[a] = 0;
  }
  this.ay = this.Wn = 0;
  this.reset();
};
v(Zi, Ni);
Zi.prototype.reset = function() {
  this.ta[0] = 1732584193;
  this.ta[1] = 4023233417;
  this.ta[2] = 2562383102;
  this.ta[3] = 271733878;
  this.ta[4] = 3285377520;
  this.ay = this.Wn = 0;
};
Zi.prototype.Wi = function(a, b) {
  b || (b = 0);
  var c = this.WX;
  if (n(a)) {
    for (var e = 0;16 > e;e++) {
      c[e] = a.charCodeAt(b) << 24 | a.charCodeAt(b + 1) << 16 | a.charCodeAt(b + 2) << 8 | a.charCodeAt(b + 3), b += 4;
    }
  } else {
    for (e = 0;16 > e;e++) {
      c[e] = a[b] << 24 | a[b + 1] << 16 | a[b + 2] << 8 | a[b + 3], b += 4;
    }
  }
  for (e = 16;80 > e;e++) {
    var f = c[e - 3] ^ c[e - 8] ^ c[e - 14] ^ c[e - 16];
    c[e] = (f << 1 | f >>> 31) & 4294967295;
  }
  a = this.ta[0];
  b = this.ta[1];
  for (var h = this.ta[2], k = this.ta[3], p = this.ta[4], r, e = 0;80 > e;e++) {
    40 > e ? 20 > e ? (f = k ^ b & (h ^ k), r = 1518500249) : (f = b ^ h ^ k, r = 1859775393) : 60 > e ? (f = b & h | k & (b | h), r = 2400959708) : (f = b ^ h ^ k, r = 3395469782), f = (a << 5 | a >>> 27) + f + p + r + c[e] & 4294967295, p = k, k = h, h = (b << 30 | b >>> 2) & 4294967295, b = a, a = f;
  }
  this.ta[0] = this.ta[0] + a & 4294967295;
  this.ta[1] = this.ta[1] + b & 4294967295;
  this.ta[2] = this.ta[2] + h & 4294967295;
  this.ta[3] = this.ta[3] + k & 4294967295;
  this.ta[4] = this.ta[4] + p & 4294967295;
};
Zi.prototype.update = function(a, b) {
  if (null != a) {
    l(b) || (b = a.length);
    for (var c = b - this.ad, e = 0, f = this.uz, h = this.Wn;e < b;) {
      if (0 == h) {
        for (;e <= c;) {
          this.Wi(a, e), e += this.ad;
        }
      }
      if (n(a)) {
        for (;e < b;) {
          if (f[h] = a.charCodeAt(e), ++h, ++e, h == this.ad) {
            this.Wi(f);
            h = 0;
            break;
          }
        }
      } else {
        for (;e < b;) {
          if (f[h] = a[e], ++h, ++e, h == this.ad) {
            this.Wi(f);
            h = 0;
            break;
          }
        }
      }
    }
    this.Wn = h;
    this.ay += b;
  }
};
Zi.prototype.digest = function() {
  var a = [], b = 8 * this.ay;
  56 > this.Wn ? this.update(this.yw, 56 - this.Wn) : this.update(this.yw, this.ad - (this.Wn - 56));
  for (var c = this.ad - 1;56 <= c;c--) {
    this.uz[c] = b & 255, b /= 256;
  }
  this.Wi(this.uz);
  for (c = b = 0;5 > c;c++) {
    for (var e = 24;0 <= e;e -= 8) {
      a[b] = this.ta[c] >> e & 255, ++b;
    }
  }
  return a;
};
var $i = {ACCEPTED:0, Dla:1, TIMEOUT:2}, aj = {SUCCESS:0, JW:1}, bj = {UX:0, qX:1, spa:2, nma:3, mma:4, $ma:5, TIMEOUT:6, Tna:7}, cj = {kma:0, Moa:1}, dj = {Cna:0, Qma:1, ipa:2, fma:3}, ej = function(a) {
  oh("MediaRouter.Cloud.Knock.Result", a, $i);
}, fj = function(a) {
  oh("MediaRouter.Cloud.Session.Start", a, aj);
}, gj = function(a) {
  oh("MediaRouter.Cloud.Session.Type", a, cj);
}, hj = function(a) {
  oh("MediaRouter.Cloud.Device.UserRole", a, dj);
};
var ij = function(a) {
  this.fc = a;
  this.id = w(a.id);
  this.a = D("mr.cloud.devices.CloudDevice");
};
d = ij.prototype;
d.isAvailable = function() {
  if (this.getState().appStatus) {
    var a = this.p7(), b = this.k7(), c = this.UI(864E5);
    this.a.L("Device id: " + this.id + ", availability: GCM connected " + a + ", app Available: " + b + ", checked in: " + c);
    return a && b && c;
  }
  a = this.UI(9E5);
  this.a.info("Availability for legacy receiver app: " + a);
  return a;
};
d.UI = function(a) {
  var b = this.z3();
  return !!(b && b > Date.now() - a);
};
d.k7 = function() {
  return "available" == this.getState().appStatus;
};
d.p7 = function() {
  return "online" == this.fc.connectionStatus;
};
d.z3 = function() {
  return this.fc.lastUpdateTimeMs ? Number(this.fc.lastUpdateTimeMs) : null;
};
d.Lh = function() {
  return this.getState().settings.receiverName;
};
d.getId = function() {
  return this.id;
};
d.getState = function() {
  return this.fc.state._cloudCast;
};
d.v7 = function() {
  return this.fc.invitations ? 0 != this.fc.invitations.length : !1;
};
var jj = function(a, b, c, e, f, h) {
  c = void 0 === c ? "default" : c;
  e = void 0 === e ? null : e;
  f = void 0 === f ? null : f;
  h = void 0 === h ? null : h;
  a ? w(null == c) : w(null != c);
  this.SO = a;
  this.eb = b;
  this.Zi = c;
  this.Gj = e;
  this.og = f;
  this.em = h;
}, kj = function(a, b, c, e, f, h, k) {
  w(a || void 0 != c);
  return new jj(a, a ? b : b + "@" + c, e, f, h, k);
};
d = jj.prototype;
d.Lh = function() {
  var a = "";
  this.og ? a = this.og : this.Gj && (a = this.Gj);
  return w(a, "Missing Hangout display name forHangout id: " + this.getId());
};
d.Vf = function() {
  return this.SO;
};
d.getId = function() {
  return this.eb;
};
d.ij = function() {
  return this.Zi;
};
d.merge = function(a) {
  !this.em && a.em && (this.em = a.em);
  !this.og && a.og && (this.og = a.og);
  this.og && a.og && this.em && (this.og = a.og);
  w(this.Gj == a.Gj);
  w(this.Zi == a.Zi);
};
var lj = function(a, b, c) {
  this.state = a;
  this.type = null != b ? b : null;
  this.results = null != c ? c : null;
}, mj = function(a) {
  this.Tb = a;
};
d = mj.prototype;
d.Jda = function(a, b, c) {
  var e = this;
  return this.FS(Ii, a, b, c, 35000).then(function(a) {
    return e.kO(a);
  });
};
d.Mda = function(a, b, c) {
  var e = this;
  return this.FS(Ji, a, b, c, 23000).then(function(a) {
    var b = a.state;
    return "done" == b ? (a = e.eR(a), new lj(b, a.type, new Fi(a.sessionDescription))) : new lj(b);
  });
};
d.Qda = function(a) {
  return this.bh(a, Ki, {});
};
d.FS = function(a, b, c, e, f) {
  var h;
  h = c.presentationUrl ? new Fi(w(c.description), null, c.presentationUrl) : new Fi(w(c.description));
  h = {_webrtcMessage:JSON.stringify(h)};
  c.settings && (h._settings = c.settings.Yx());
  c.mediaConstraints && (h._optMediaConstraints = JSON.stringify(c.mediaConstraints));
  e && (h._user = JSON.stringify(e));
  return this.bh(b, a, h, f);
};
d.kO = function(a) {
  var b = this, c = a.state;
  switch(c) {
    case "done":
      return Promise.resolve(this.qaa(a));
    case "queued":
    case "inProgress":
      return this.Xja(a).then(function(a) {
        return b.kO(a);
      });
    default:
      return Promise.resolve(new lj(c));
  }
};
d.Xja = function(a) {
  var b = this;
  return new Promise(function(c) {
    var e = setInterval(function() {
      var f = w(a.id);
      b.t1(f).then(function(a) {
        "queued" != a.state && "inProgress" != a.state && (clearInterval(e), c(a));
      });
    }, 2000);
  });
};
d.qaa = function(a) {
  a = this.eR(a);
  return "__cloud_webrtc_session_message__" == a.type ? new lj("done", "knocking_cloud_webrtc_session_message", new Fi(a.sessionDescription)) : new lj("done", a.type);
};
d.bh = function(a, b, c, e) {
  a = {deviceId:a, name:"_cloudCast." + b.name, parameters:c, expirationTimeoutMs:e || 10000};
  b = {};
  e && (b.responseAwaitMs = Math.min(e + 5000, 25000));
  e = this.Tb.Tk(zi.Ki, ["commands"], b);
  return this.Tb.Qi(e, "POST", a);
};
d.eR = function(a) {
  return a.results && a.results.results ? JSON.parse(a.results.results) : null;
};
d.t1 = function(a) {
  a = this.Tb.Tk(zi.Ki, ["commands", a]);
  return this.Tb.Qi(a, "GET");
};
mj.$inject = ["gapiService"];
var nj = function(a, b, c, e, f) {
  for (var h = [], k = 4;k < arguments.length;++k) {
    h[k - 4] = arguments[k];
  }
  var p = this;
  this.un = a;
  this.Ia = b;
  this.qo = c;
  this.Va = e;
  this.Z7 = h;
  this.Un = !1;
  this.ai = function(a) {
    for (var b = [], c = 0;c < arguments.length;++c) {
      b[c - 0] = arguments[c];
    }
    return p.B0.apply(p, [].concat(ma(b)));
  };
};
d = nj.prototype;
d.qY = function() {
  ei(this);
};
d.J0 = function() {
  this.Va.addListener.apply(this.Va, [].concat([this.ai], ma(this.Z7)));
};
d.addListener = function() {
  this.Un || (this.Un = !0, this.J0());
};
d.removeListener = function() {
  this.Un && (this.Va.removeListener(this.ai), this.Un = !1);
};
d.ly = function(a) {
  for (var b = 0;b < arguments.length;++b) {
  }
  return !0;
};
d.B0 = function(a) {
  for (var b = [], c = 0;c < arguments.length;++c) {
    b[c - 0] = arguments[c];
  }
  var e = this;
  vh(this.un);
  if (!this.ly.apply(this, [].concat(ma(b)))) {
    return !1;
  }
  Ih(this.qo).then(function(a) {
    return a.handleEvent.apply(a, [].concat([e.Va], ma(b)));
  });
  return this.bA();
};
d.ql = function() {
  return this.Un;
};
d.Ca = function() {
  return "mr.EventListener." + this.Ia;
};
d.getData = function() {
  return [this.Un];
};
d.wb = function() {
  bi(this) && this.addListener();
};
d.bA = function() {
};
var oj = function(a) {
  this.Tb = a;
  this.xn = this.fo = this.vl = null;
  this.Fv = this.Cv = !1;
  this.a = D("mr.cloud.devices.CloudDevicesService");
  ei(this);
};
d = oj.prototype;
d.getDevice = function(a) {
  a = this.Tb.Tk(zi.Ki, ["devices", a]);
  return this.Tb.Qi(a, "GET").then(function(a) {
    return new ij(a);
  });
};
d.V7 = function() {
  return this.zP({descriptionSubstring:"Chrome Streaming Receiver"});
};
d.zP = function(a) {
  var b = this, c = this.Tb.Tk(zi.Ki, ["devices"], a);
  return this.Tb.Qi(c, "GET").then(function(c) {
    var e = (c.devices || []).filter(function(a) {
      return null != a.commandDefs && null != a.commandDefs._cloudCast;
    }).map(function(a) {
      return new ij(a);
    });
    if (c = c.nextPageToken) {
      var h = Vb(a);
      h.token = c;
      return b.zP(h).then(function(a) {
        return e.concat(a);
      });
    }
    return e;
  });
};
d.Ca = function() {
  return "CloudDevicesService";
};
d.getData = function() {
  return [new pj(this.vl, this.xn, this.fo)];
};
d.wb = function() {
  var a = bi(this);
  a && (this.vl = a.R7, this.xn = a.gcmRegistrationId, this.fo = a.P7);
};
d.mca = function() {
  var a = this;
  return new Promise(function(b, c) {
    a.Cv ? c(Error("Registering...")) : (a.Cv = !0, a.xn && a.fo && a.fo + 864E5 >= Date.now() ? (a.Cv = !1, b(a.xn)) : chrome.gcm.register(["919648714761"], function(e) {
      a.Cv = !1;
      e ? (a.a.L("Got GCM ID: " + e), a.xn = e, a.fo = Date.now(), a.vl = null, b(e)) : (a.a.v("Error: " + chrome.runtime.lastError.message), a.xn = null, a.fo = null, a.vl = null, c(Error(chrome.runtime.lastError.message)));
    }));
  });
};
d.bia = function() {
  return !this.vl || this.vl + 864E5 < Date.now();
};
d.subscribe = function(a) {
  var b = this;
  if (this.Fv) {
    return Promise.resolve();
  }
  this.Fv = !0;
  if (!a || !this.bia()) {
    return Promise.resolve();
  }
  a = {filters:["myDevices"], gcmRegistrationId:a, gcmSenderId:"919648714761", expirationTimeMs:864E5};
  var c = this.Tb.Tk(zi.Ki, ["subscriptions", "subscribe"], {});
  return this.Tb.Qi(c, "POST", a).then(function() {
    b.a.L("Subscribed on: " + Date.now());
    b.vl = Date.now();
    b.Fv = !1;
    return Promise.resolve();
  }, function(a) {
    b.Fv = !1;
    throw a;
  });
};
var pj = function(a, b, c) {
  this.R7 = a;
  this.gcmRegistrationId = b;
  this.P7 = c;
};
var qj = function() {
  this.Bi = !1;
  this.qp = null;
  this.ur = !1;
  this.a = D("mr.cloud.identity.IdentityService");
  ei(this);
  this.X7();
  this.mU();
};
d = qj.prototype;
d.getAuthToken = function() {
  return chrome.identity ? new Promise(function(a, b) {
    chrome.identity.getAuthToken({interactive:!1}, function(c) {
      chrome.runtime.lastError ? b(Error("Unable to get user auth token: " + chrome.runtime.lastError.message)) : null == c ? b(Error("User is not logged in (no token found)")) : a(c);
    });
  }) : Promise.reject(Error("chrome.identity permission required for auth."));
};
d.o1 = function(a) {
  return new Promise(function(b) {
    chrome.identity.removeCachedAuthToken({token:a}, function() {
      b();
    });
  });
};
d.mU = function() {
  var a = this;
  this.getAuthToken().then(function(b) {
    chrome.identity.getProfileUserInfo(function(c) {
      a.Bi = !!c.email || !!c.id;
      a.qp = c.email || null;
      b && !a.Bi && (a.ur = !0);
    });
  }, function(b) {
    a.a.L("Unable to set sign in and email.", b);
  });
};
d.X7 = function() {
  var a = this;
  chrome.identity.onSignInChanged.addListener(function(b, c) {
    vh(6);
    a.Bi = c;
    a.a.info("Signed in change: " + a.Bi);
    a.Bi ? a.mU() : (a.qp = null, a.ur = !1);
  });
};
d.eca = function() {
  var a = this;
  return this.getAuthToken().then(function(b) {
    var c = window.gapi;
    if (!c) {
      return a.a.error("gapi not loaded."), !1;
    }
    a.a.info("Setting gapi auth token");
    c.auth.setToken({access_token:b});
    return !0;
  });
};
d.Ca = function() {
  return "IdentityService";
};
d.getData = function() {
  return [null, {signedIn:this.Bi, userEmail:this.qp, kioskAuth:this.ur}];
};
d.wb = function() {
  var a = ci(this);
  a && (a.signedIn && (this.Bi = a.signedIn), a.userEmail && (this.qp = a.userEmail), a.kioskAuth && (this.ur = a.kioskAuth));
};
var rj = function() {
  var a = this;
  this.a = D("mr.cloud.settings.SettingsService");
  this.JD = null;
  chrome.settingsPrivate.onPrefsChanged.addListener(function(b) {
    vh(13);
    if (a.JD) {
      b = ka(b);
      for (var c = b.next();!c.done;c = b.next()) {
        if (c = c.value, "media_router.cloudservices.enabled" == c.key) {
          a.JD.call(null, c.value);
          break;
        }
      }
    }
  });
};
d = rj.prototype;
d.nga = function(a) {
  this.JD = a;
};
d.jja = function() {
  var a = this.a;
  chrome.storage.sync.set({"mr.cloud.cloudEnabled":!0}, function() {
    chrome.runtime.lastError && a.v("Error setting cloud setting: " + JSON.stringify(chrome.runtime.lastError));
  });
};
d.D2 = function() {
  var a = this;
  return this.mL().catch(function() {
    return a.mL().catch(function(b) {
      a.a.v("Error retrieving cloud on setting.", b);
      return !1;
    });
  });
};
d.mL = function() {
  return this.iM("mr.cloud.cloudEnabled").then(function(a) {
    return !!a["mr.cloud.cloudEnabled"];
  });
};
d.iM = function(a) {
  return new Promise(function(b, c) {
    chrome.storage.sync.get(a, function(a) {
      chrome.runtime.lastError ? c(chrome.runtime.lastError) : b(a);
    });
  });
};
d.B2 = function() {
  var a = this;
  return this.lL().catch(function() {
    return a.lL().catch(function(b) {
      a.a.v("Error retrieving cloud enabled setting.", b);
      return !1;
    });
  });
};
d.lL = function() {
  return this.l4("media_router.cloudservices.enabled").then(function(a) {
    w("media_router.cloudservices.enabled" == a.key);
    w(a.type == chrome.settingsPrivate.PrefType.BOOLEAN);
    return !!a.value;
  });
};
d.l4 = function(a) {
  return new Promise(function(b, c) {
    chrome.settingsPrivate.getPref(a, function(a) {
      chrome.runtime.lastError ? c(chrome.runtime.lastError) : b(a);
    });
  });
};
d.mga = function() {
  var a = this.a;
  chrome.storage.sync.set({"mr.cloud.notifiedHangouts":!0}, function() {
    chrome.runtime.lastError && a.v("Error setting notified Hangout privacy.", chrome.runtime.lastError);
  });
};
d.Y3 = function() {
  var a = this;
  return this.UM().catch(function() {
    return a.UM().catch(function(b) {
      a.a.v("Error retrieving hangouts notified setting.", b);
      return !1;
    });
  });
};
d.UM = function() {
  return this.iM("mr.cloud.notifiedHangouts").then(function(a) {
    return !!a["mr.cloud.notifiedHangouts"];
  });
};
var sj = function() {
  this.Mf = [];
  this.vg = [];
};
d = sj.prototype;
d.u8 = function() {
  qb(this.Mf) && (this.Mf = this.vg, this.Mf.reverse(), this.vg = []);
};
d.enqueue = function(a) {
  this.vg.push(a);
};
d.Mk = function() {
  this.u8();
  return this.Mf.pop();
};
d.ja = function() {
  return this.Mf.length + this.vg.length;
};
d.nc = function() {
  return qb(this.Mf) && qb(this.vg);
};
d.clear = function() {
  this.Mf = [];
  this.vg = [];
};
d.contains = function(a) {
  return pb(this.Mf, a) || pb(this.vg, a);
};
d.remove = function(a) {
  var b;
  b = this.Mf;
  var c = hb(b, a);
  0 <= c ? (vb(b, c), b = !0) : b = !1;
  return b || wb(this.vg, a);
};
d.T = function() {
  for (var a = [], b = this.Mf.length - 1;0 <= b;--b) {
    a.push(this.Mf[b]);
  }
  for (var c = this.vg.length, b = 0;b < c;++b) {
    a.push(this.vg[b]);
  }
  return a;
};
var tj = function() {
  nj.call(this, 5, "cloud.GcmEventListener", "mr.cloud.discovery.CloudSinkDiscoveryService", chrome.gcm.onMessage);
  this.a = D("mr.CloudGcmEventListener");
};
la(tj, nj);
tj.prototype.ly = function(a) {
  a = Li(a, "data", "notification");
  if (!a) {
    return this.a.error("Notification json not found"), !1;
  }
  try {
    var b = JSON.parse(a);
    return !!b && Array.isArray(b.events) && 0 < b.events.length;
  } catch (c) {
    return this.a.error("Invalid json: " + a), !1;
  }
};
var vj = function() {
  uj || (uj = new tj);
  return uj;
}, uj = null;
var wj = function(a, b, c) {
  this.or = b || Ti.DW;
  this.l0 = c || 0;
  this.bw = 40;
  this.Zf = 1;
  this.rm = 0;
  this.Cl = 3;
  this.kw = this.gi = 0;
  this.AU = this.LV = !1;
  this.Xr = this.Tl = "";
  this.Hj = "-";
  this.ro = "";
  this.nf = 1;
  this.Il = !1;
  this.kl = [];
  this.jy = this.FJ = !1;
  this.Up = 0;
  this.rI = null;
  "number" == typeof a ? this.OY(a) : this.Pm(a);
};
d = wj.prototype;
d.Wfa = function(a) {
  if (0 < this.rm && 0 < a) {
    throw Error("Can't combine significant digits and minimum fraction digits");
  }
  this.gi = a;
  return this;
};
d.Rfa = function(a) {
  this.Cl = a;
  return this;
};
d.oha = function(a) {
  if (0 < this.gi && 0 <= a) {
    throw Error("Can't combine significant digits and minimum fraction digits");
  }
  this.rm = a;
  return this;
};
d.Pm = function(a) {
  a.replace(/ /g, "\u00a0");
  var b = [0];
  this.Tl = this.zw(a, b);
  var c = b[0];
  this.Vaa(a, b);
  c = b[0] - c;
  this.Xr = this.zw(a, b);
  b[0] < a.length && ";" == a.charAt(b[0]) ? (b[0]++, 1 != this.nf && (this.Il = !0), this.Hj = this.zw(a, b), b[0] += c, this.ro = this.zw(a, b)) : (this.Hj = this.Tl + this.Hj, this.ro += this.Xr);
};
d.OY = function(a) {
  switch(a) {
    case 1:
      this.Pm(Ti.nH);
      break;
    case 2:
      this.Pm(Ti.AX);
      break;
    case 3:
      this.Pm(Ti.cX);
      break;
    case 4:
      this.Pm(Ri(Ti.yW, this.or));
      break;
    case 5:
      this.gI(1);
      break;
    case 6:
      this.gI(2);
      break;
    default:
      throw Error("Unsupported pattern type.");
  }
};
d.gI = function(a) {
  this.Up = a;
  this.Pm(Ti.nH);
  this.Wfa(0);
  this.Rfa(2);
  this.oha(2);
};
d.parse = function(a, b) {
  b = b || [0];
  if (0 != this.Up) {
    throw Error("Parsing of compact numbers is unimplemented");
  }
  var c;
  a = a.replace(/ /g, "\u00a0");
  var e = a.indexOf(this.Tl, b[0]) == b[0], f = a.indexOf(this.Hj, b[0]) == b[0];
  e && f && (this.Tl.length > this.Hj.length ? f = !1 : this.Tl.length < this.Hj.length && (e = !1));
  e ? b[0] += this.Tl.length : f && (b[0] += this.Hj.length);
  a.indexOf(Ti.Dy, b[0]) == b[0] ? (b[0] += Ti.Dy.length, c = Infinity) : c = this.Haa(a, b);
  if (e) {
    if (a.indexOf(this.Xr, b[0]) != b[0]) {
      return NaN;
    }
    b[0] += this.Xr.length;
  } else {
    if (f) {
      if (a.indexOf(this.ro, b[0]) != b[0]) {
        return NaN;
      }
      b[0] += this.ro.length;
    }
  }
  return f ? -c : c;
};
d.Haa = function(a, b) {
  var c = !1, e = !1, f = !1, h = 1, k = Ti.oH, p = Ti.By, r = Ti.rH;
  if (0 != this.Up) {
    throw Error("Parsing of compact style numbers is not implemented");
  }
  for (var A = "";b[0] < a.length;b[0]++) {
    var C = a.charAt(b[0]), da = this.zL(C);
    if (0 <= da && 9 >= da) {
      A += da, f = !0;
    } else {
      if (C == k.charAt(0)) {
        if (c || e) {
          break;
        }
        A += ".";
        c = !0;
      } else {
        if (C == p.charAt(0) && ("\u00a0" != p.charAt(0) || b[0] + 1 < a.length && 0 <= this.zL(a.charAt(b[0] + 1)))) {
          if (c || e) {
            break;
          }
        } else {
          if (C == r.charAt(0)) {
            if (e) {
              break;
            }
            A += "E";
            e = !0;
          } else {
            if ("+" == C || "-" == C) {
              A += C;
            } else {
              if (1 == this.nf && C == Ti.tH.charAt(0)) {
                if (1 != h) {
                  break;
                }
                h = 100;
                if (f) {
                  b[0]++;
                  break;
                }
              } else {
                if (1 == this.nf && C == Ti.uH.charAt(0)) {
                  if (1 != h) {
                    break;
                  }
                  h = 1000;
                  if (f) {
                    b[0]++;
                    break;
                  }
                } else {
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
  1 != this.nf && (h = this.nf);
  return parseFloat(A) / h;
};
d.format = function(a) {
  if (isNaN(a)) {
    return Ti.$W;
  }
  var b = [], c = this.f5(null === this.rI ? a : this.rI, a);
  a /= Math.pow(10, c.iA);
  b.push(c.prefix);
  var e = 0.0 > a || 0.0 == a && 0.0 > 1 / a;
  b.push(e ? this.Hj : this.Tl);
  isFinite(a) ? (a = a * (e ? -1 : 1) * this.nf, this.jy ? this.Oia(a, b) : this.rG(a, this.Zf, b)) : b.push(Ti.Dy);
  b.push(e ? this.ro : this.Xr);
  b.push(c.PU);
  return b.join("");
};
d.mS = function(a) {
  var b = Math.pow(10, this.Cl), c = 0 >= this.rm ? Math.round(a * b) : Math.round(this.kda(a * b, this.rm, this.Cl));
  isFinite(c) ? (a = Math.floor(c / b), b = Math.floor(c - a * b)) : b = 0;
  return {HO:a, O1:b};
};
d.rG = function(a, b, c) {
  if (this.gi > this.Cl) {
    throw Error("Min value must be less than max value");
  }
  c || (c = []);
  a = this.mS(a);
  var e = Math.pow(10, this.Cl), f = a.HO, h = a.O1, k = 0 == f ? 0 : this.yv(f) + 1, p = 0 < this.gi || 0 < h || this.AU && k < this.rm;
  a = this.gi;
  p && (a = this.AU && 0 < this.rm ? this.rm - k : this.gi);
  for (var r = "", k = f;1E20 < k;) {
    r = "0" + r, k = Math.round(k / 10);
  }
  var r = k + r, A = Ti.oH, k = Ti.Ly.charCodeAt(0), C = r.length, da = 0;
  if (0 < f || 0 < b) {
    for (f = C;f < b;f++) {
      c.push(String.fromCharCode(k));
    }
    if (2 <= this.kl.length) {
      for (b = 1;b < this.kl.length;b++) {
        da += this.kl[b];
      }
    }
    b = C - da;
    if (0 < b) {
      for (var f = this.kl, da = C = 0, ea, Bb = Ti.By, Ce = r.length, Rd = 0;Rd < Ce;Rd++) {
        if (c.push(String.fromCharCode(k + 1 * Number(r.charAt(Rd)))), 1 < Ce - Rd) {
          if (ea = f[da], Rd < b) {
            var iG = b - Rd;
            (1 === ea || 0 < ea && 1 === iG % ea) && c.push(Bb);
          } else {
            da < f.length && (Rd === b ? da += 1 : ea === Rd - b - C + 1 && (c.push(Bb), C += ea, da += 1));
          }
        }
      }
    } else {
      b = r;
      r = this.kl;
      f = Ti.By;
      ea = b.length;
      Bb = [];
      for (C = r.length - 1;0 <= C && 0 < ea;C--) {
        da = r[C];
        for (Ce = 0;Ce < da && 0 <= ea - Ce - 1;Ce++) {
          Bb.push(String.fromCharCode(k + 1 * Number(b.charAt(ea - Ce - 1))));
        }
        ea -= da;
        0 < ea && Bb.push(f);
      }
      c.push.apply(c, Bb.reverse());
    }
  } else {
    p || c.push(String.fromCharCode(k));
  }
  (this.FJ || p) && c.push(A);
  e = "" + (h + e);
  for (h = e.length;"0" == e.charAt(h - 1) && h > a + 1;) {
    h--;
  }
  for (f = 1;f < h;f++) {
    c.push(String.fromCharCode(k + 1 * Number(e.charAt(f))));
  }
};
d.KH = function(a, b) {
  b.push(Ti.rH);
  0 > a ? (a = -a, b.push(Ti.VW)) : this.LV && b.push(Ti.dX);
  a = "" + a;
  for (var c = Ti.Ly, e = a.length;e < this.kw;e++) {
    b.push(c);
  }
  b.push(a);
};
d.H3 = function(a, b) {
  var c = Math.pow(10, b);
  if (isFinite(c) && 0 !== c) {
    return a / c;
  }
  c = Math.pow(10, Math.floor(b / 2));
  a = a / c / c;
  1 == b % 2 && (a = 0 < b ? a / 10 : 10 * a);
  return a;
};
d.Oia = function(a, b) {
  if (0.0 == a) {
    this.rG(a, this.Zf, b), this.KH(0, b);
  } else {
    var c;
    c = Math.log(a) / Math.log(10);
    w(!l(void 0) || !1);
    c = Math.floor(c + 2e-15);
    a = this.H3(a, c);
    var e = this.Zf;
    if (1 < this.bw && this.bw > this.Zf) {
      for (;0 != c % this.bw;) {
        a *= 10, c--;
      }
      e = 1;
    } else {
      1 > this.Zf ? (c++, a /= 10) : (c -= this.Zf - 1, a *= Math.pow(10, this.Zf - 1));
    }
    this.rG(a, e, b);
    this.KH(c, b);
  }
};
d.zL = function(a) {
  a = a.charCodeAt(0);
  if (48 <= a && 58 > a) {
    return a - 48;
  }
  var b = Ti.Ly.charCodeAt(0);
  return b <= a && a < b + 10 ? a - b : -1;
};
d.zw = function(a, b) {
  for (var c = "", e = !1, f = a.length;b[0] < f;b[0]++) {
    var h = a.charAt(b[0]);
    if ("'" == h) {
      b[0] + 1 < f && "'" == a.charAt(b[0] + 1) ? (b[0]++, c += "'") : e = !e;
    } else {
      if (e) {
        c += h;
      } else {
        switch(h) {
          case "#":
          case "0":
          case ",":
          case ".":
          case ";":
            return c;
          case "\u00a4":
            if (b[0] + 1 < f && "\u00a4" == a.charAt(b[0] + 1)) {
              b[0]++, c += this.or;
            } else {
              switch(this.l0) {
                case 0:
                  c += Qi[this.or][1];
                  break;
                case 2:
                  var h = this.or, k = Qi[h], c = c + (h == k[1] ? h : h + " " + k[1]);
                  break;
                case 1:
                  c += Qi[this.or][2];
              }
            }
            break;
          case "%":
            if (!this.Il && 1 != this.nf) {
              throw Error("Too many percent/permill");
            }
            if (this.Il && 100 != this.nf) {
              throw Error("Inconsistent use of percent/permill characters");
            }
            this.nf = 100;
            this.Il = !1;
            c += Ti.tH;
            break;
          case "\u2030":
            if (!this.Il && 1 != this.nf) {
              throw Error("Too many percent/permill");
            }
            if (this.Il && 1000 != this.nf) {
              throw Error("Inconsistent use of percent/permill characters");
            }
            this.nf = 1000;
            this.Il = !1;
            c += Ti.uH;
            break;
          default:
            c += h;
        }
      }
    }
  }
  return c;
};
d.Vaa = function(a, b) {
  for (var c = -1, e = 0, f = 0, h = 0, k = -1, p = a.length, r = !0;b[0] < p && r;b[0]++) {
    switch(a.charAt(b[0])) {
      case "#":
        0 < f ? h++ : e++;
        0 <= k && 0 > c && k++;
        break;
      case "0":
        if (0 < h) {
          throw Error('Unexpected "0" in pattern "' + a + '"');
        }
        f++;
        0 <= k && 0 > c && k++;
        break;
      case ",":
        0 < k && this.kl.push(k);
        k = 0;
        break;
      case ".":
        if (0 <= c) {
          throw Error('Multiple decimal separators in pattern "' + a + '"');
        }
        c = e + f + h;
        break;
      case "E":
        if (this.jy) {
          throw Error('Multiple exponential symbols in pattern "' + a + '"');
        }
        this.jy = !0;
        this.kw = 0;
        b[0] + 1 < p && "+" == a.charAt(b[0] + 1) && (b[0]++, this.LV = !0);
        for (;b[0] + 1 < p && "0" == a.charAt(b[0] + 1);) {
          b[0]++, this.kw++;
        }
        if (1 > e + f || 1 > this.kw) {
          throw Error('Malformed exponential pattern "' + a + '"');
        }
        r = !1;
        break;
      default:
        b[0]--, r = !1;
    }
  }
  0 == f && 0 < e && 0 <= c && (f = c, 0 == f && f++, h = e - f, e = f - 1, f = 1);
  if (0 > c && 0 < h || 0 <= c && (c < e || c > e + f) || 0 == k) {
    throw Error('Malformed pattern "' + a + '"');
  }
  a = e + f + h;
  this.Cl = 0 <= c ? a - c : 0;
  0 <= c && (this.gi = e + f - c, 0 > this.gi && (this.gi = 0));
  this.Zf = (0 <= c ? c : a) - e;
  this.jy && (this.bw = e + this.Zf, 0 == this.Cl && 0 == this.Zf && (this.Zf = 1));
  this.kl.push(Math.max(0, k));
  this.FJ = 0 == c || c == a;
};
var xj = {prefix:"", PU:"", iA:0};
wj.prototype.WN = function(a, b) {
  var c = 1 == this.Up ? Pi.lH : Pi.xW;
  null == c && (c = Pi.lH);
  if (3 > a) {
    return xj;
  }
  a = Math.min(14, a);
  var e = c[Math.pow(10, a)];
  for (--a;!e && 3 <= a;) {
    e = c[Math.pow(10, a)], a--;
  }
  if (!e) {
    return xj;
  }
  b = e[b];
  return b && "0" != b ? (b = /([^0]*)(0+)(.*)/.exec(b)) ? {prefix:b[1], PU:b[3], iA:a + 1 - (b[2].length - 1)} : xj : xj;
};
wj.prototype.f5 = function(a, b) {
  if (0 == this.Up) {
    return xj;
  }
  a = Math.abs(a);
  b = this.WN(1 >= a ? 0 : this.yv(a), "other").iA;
  return this.WN(b + this.yv(this.mS(a / Math.pow(10, b)).HO), "other");
};
wj.prototype.yv = function(a) {
  if (!isFinite(a)) {
    return 0 < a ? a : 0;
  }
  for (var b = 0;1 <= (a /= 10);) {
    b++;
  }
  return b;
};
wj.prototype.kda = function(a, b, c) {
  if (!a) {
    return a;
  }
  b = b - this.yv(a) - 1;
  if (b < -c) {
    return c = Math.pow(10, c), Math.round(a / c) * c;
  }
  c = Math.pow(10, b);
  return Math.round(a * c) / c;
};
var yj = !kc && !ic || ic && 9 <= Number(Ec) || kc && Dc("1.9.1");
ic && Dc("9");
var zj = function(a) {
  this.jo = [];
  this.jE = [];
  this.FD = new wj(1);
  this.Jaa(a);
}, Aj = /'([{}#].*?)'/g, Bj = /''/g;
d = zj.prototype;
d.format = function(a) {
  return this.Eu(a, !1);
};
d.Eu = function(a, b) {
  if (0 == this.jE.length) {
    return "";
  }
  var c = [];
  this.zA(this.jE, a, b, c);
  a = c.join("");
  for (b || w(-1 == a.search("#"), "Not all # were replaced.");0 < this.jo.length;) {
    a = a.replace(this.vz(this.jo), this.jo.pop());
  }
  return a;
};
d.zA = function(a, b, c, e) {
  for (var f = 0;f < a.length;f++) {
    switch(a[f].type) {
      case 4:
        e.push(a[f].value);
        break;
      case 3:
        var h = a[f].value;
        this.N1(h, b, e);
        break;
      case 2:
        h = a[f].value;
        this.M1(h, b, c, e);
        break;
      case 0:
        h = a[f].value;
        this.tK(h, b, Xi, c, e);
        break;
      case 1:
        h = a[f].value;
        this.tK(h, b, Vi, c, e);
        break;
      default:
        Ya("Unrecognized block type: " + a[f].type);
    }
  }
};
d.N1 = function(a, b, c) {
  b = b[a];
  l(b) ? (this.jo.push(b), c.push(this.vz(this.jo))) : c.push("Undefined parameter - " + a);
};
d.M1 = function(a, b, c, e) {
  var f = a.At;
  l(b[f]) ? (f = a[b[f]], l(f) || (f = a.other, cb(f, "Invalid option or missing other option for select block.")), this.zA(f, b, c, e)) : e.push("Undefined parameter - " + f);
};
d.tK = function(a, b, c, e, f) {
  var h = a.At, k = a.iI, p = +b[h];
  isNaN(p) ? f.push("Undefined or invalid parameter - " + h) : (k = p - k, h = a[b[h]], l(h) || (w(0 <= k, "Argument index smaller than offset."), c = this.FD.O3 ? c(k, this.FD.O3()) : c(k), $a(c, "Invalid plural key."), h = a[c], l(h) || (h = a.other), cb(h, "Invalid option or missing other option for plural block.")), a = [], this.zA(h, b, e, a), b = a.join(""), $a(b, "Empty block in plural."), e ? f.push(b) : (e = this.FD.format(k), f.push(b.replace(/#/g, e))));
};
d.Jaa = function(a) {
  a && (a = this.d7(a), this.jE = this.Aw(a));
};
d.d7 = function(a) {
  var b = this.jo, c = t(this.vz, this);
  a = a.replace(Bj, function() {
    b.push("'");
    return c(b);
  });
  return a = a.replace(Aj, function(a, f) {
    b.push(f);
    return c(b);
  });
};
d.xu = function(a) {
  var b = 0, c = [], e = [], f = /[{}]/g;
  f.lastIndex = 0;
  for (var h;h = f.exec(a);) {
    var k = h.index;
    "}" == h[0] ? (h = c.pop(), w(l(h) && "{" == h, "No matching { for }."), 0 == c.length && (h = {type:1}, h.value = a.substring(b, k), e.push(h), b = k + 1)) : (0 == c.length && (b = a.substring(b, k), "" != b && e.push({type:0, value:b}), b = k + 1), c.push("{"));
  }
  w(0 == c.length, "There are mismatched { or } in the pattern.");
  b = a.substring(b);
  "" != b && e.push({type:0, value:b});
  return e;
};
var Cj = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/, Dj = /^\s*(\w+)\s*,\s*selectordinal\s*,/, Ej = /^\s*(\w+)\s*,\s*select\s*,/;
d = zj.prototype;
d.eaa = function(a) {
  return Cj.test(a) ? 0 : Dj.test(a) ? 1 : Ej.test(a) ? 2 : /^\s*\w+\s*/.test(a) ? 3 : 5;
};
d.Aw = function(a) {
  var b = [];
  a = this.xu(a);
  for (var c = 0;c < a.length;c++) {
    var e = {};
    if (0 == a[c].type) {
      e.type = 4, e.value = a[c].value;
    } else {
      if (1 == a[c].type) {
        switch(this.eaa(a[c].value)) {
          case 2:
            e.type = 2;
            e.value = this.Oaa(a[c].value);
            break;
          case 0:
            e.type = 0;
            e.value = this.Kaa(a[c].value);
            break;
          case 1:
            e.type = 1;
            e.value = this.Iaa(a[c].value);
            break;
          case 3:
            e.type = 3;
            e.value = a[c].value;
            break;
          default:
            Ya("Unknown block type for pattern: " + a[c].value);
        }
      } else {
        Ya("Unknown part of the pattern.");
      }
    }
    b.push(e);
  }
  return b;
};
d.Oaa = function(a) {
  var b = "";
  a = a.replace(Ej, function(a, c) {
    b = c;
    return "";
  });
  var c = {};
  c.At = b;
  a = this.xu(a);
  for (var e = 0;e < a.length;) {
    var f = a[e].value;
    $a(f, "Missing select key element.");
    e++;
    w(e < a.length, "Missing or invalid select value element.");
    if (1 == a[e].type) {
      var h = this.Aw(a[e].value);
    } else {
      Ya("Expected block type.");
    }
    c[f.replace(/\s/g, "")] = h;
    e++;
  }
  cb(c.other, "Missing other key in select statement.");
  return c;
};
d.Kaa = function(a) {
  var b = "", c = 0;
  a = a.replace(Cj, function(a, e, f) {
    b = e;
    f && (c = parseInt(f, 10));
    return "";
  });
  var e = {};
  e.At = b;
  e.iI = c;
  a = this.xu(a);
  for (var f = 0;f < a.length;) {
    var h = a[f].value;
    $a(h, "Missing plural key element.");
    f++;
    w(f < a.length, "Missing or invalid plural value element.");
    if (1 == a[f].type) {
      var k = this.Aw(a[f].value);
    } else {
      Ya("Expected block type.");
    }
    e[h.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = k;
    f++;
  }
  cb(e.other, "Missing other key in plural statement.");
  return e;
};
d.Iaa = function(a) {
  var b = "";
  a = a.replace(Dj, function(a, c) {
    b = c;
    return "";
  });
  var c = {};
  c.At = b;
  c.iI = 0;
  a = this.xu(a);
  for (var e = 0;e < a.length;) {
    var f = a[e].value;
    $a(f, "Missing ordinal key element.");
    e++;
    w(e < a.length, "Missing or invalid ordinal value element.");
    if (1 == a[e].type) {
      var h = this.Aw(a[e].value);
    } else {
      Ya("Expected block type.");
    }
    c[f.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = h;
    e++;
  }
  cb(c.other, "Missing other key in selectordinal statement.");
  return c;
};
d.vz = function(a) {
  w(0 < a.length, "Literal array is empty.");
  return "\ufddf_" + (a.length - 1).toString(10) + "_";
};
var Fj = chrome.i18n.getMessage("1522140683318860351"), Gj = chrome.i18n.getMessage("4246483347873264186"), Hj = chrome.i18n.getMessage("5991427458288444010"), Ij = chrome.i18n.getMessage("6063910461797960050"), Jj = chrome.i18n.getMessage("7735695102441495789"), Kj = chrome.i18n.getMessage("4575332923598659024"), Lj = chrome.i18n.getMessage("2297080986956220930"), Mj = new zj(Lj), Nj = function(a, b) {
  return Mj.format({ORGANIZER:a, PARTICIPANTS:b});
};
var Oj = null, Pj = null, Qj = null, Rj = kc || lc && !ri || hc || !ri && !ic && "function" == typeof g.atob, Tj = function(a, b) {
  w(ua(a), "encodeByteArray takes an array as a parameter");
  Sj();
  b = b ? Qj : Oj;
  for (var c = [], e = 0;e < a.length;e += 3) {
    var f = a[e], h = e + 1 < a.length, k = h ? a[e + 1] : 0, p = e + 2 < a.length, r = p ? a[e + 2] : 0, A = f >> 2, f = (f & 3) << 4 | k >> 4, k = (k & 15) << 2 | r >> 6, r = r & 63;
    p || (r = 64, h || (k = 64));
    c.push(b[A], b[f], b[k], b[r]);
  }
  return c.join("");
}, Vj = function(a, b) {
  if (Rj && !b) {
    return g.atob(a);
  }
  var c = "";
  Uj(a, function(a) {
    c += String.fromCharCode(a);
  });
  return c;
}, Wj = function(a) {
  w(!ic || Dc("10"), "Browser does not support typed arrays");
  var b = new Uint8Array(Math.ceil(3 * a.length / 4)), c = 0;
  Uj(a, function(a) {
    b[c++] = a;
  });
  return b.subarray(0, c);
}, Uj = function(a, b) {
  function c(b) {
    for (;e < a.length;) {
      var c = a.charAt(e++), f = Pj[c];
      if (null != f) {
        return f;
      }
      if (!Ha(c)) {
        throw Error("Unknown base64 encoding at char: " + c);
      }
    }
    return b;
  }
  Sj();
  for (var e = 0;;) {
    var f = c(-1), h = c(0), k = c(64), p = c(64);
    if (64 === p && -1 === f) {
      break;
    }
    b(f << 2 | h >> 4);
    64 != k && (b(h << 4 & 240 | k >> 2), 64 != p && b(k << 6 & 192 | p));
  }
}, Sj = function() {
  if (!Oj) {
    Oj = {};
    Pj = {};
    Qj = {};
    for (var a = 0;65 > a;a++) {
      Oj[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), Pj[Oj[a]] = a, Qj[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), 62 <= a && (Pj["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a);
    }
  }
};
var Xj = function(a, b) {
  if ("undefined" != typeof HTMLScriptElement && "undefined" != typeof Element) {
    var c = a && (a instanceof HTMLScriptElement || !(a instanceof Element)), e;
    e = wa(a) ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : void 0 === a ? "undefined" : null === a ? "null" : typeof a;
    w(c, "Argument is not a HTMLScriptElement (or a non-Element mock); got: %s", e);
  }
  a.src = kf(b);
};
var Yj = function(a, b) {
  this.Zi = this.kh = this.wi = "";
  this.gb = null;
  this.Uk = this.ji = "";
  this.hf = this.w7 = !1;
  var c;
  a instanceof Yj ? (this.hf = l(b) ? b : a.hf, this.yx(a.wi), this.cG(a.fr()), this.Po(a.ij()), this.To(a.vb()), this.Ai(a.Vc()), this.Uo(a.li.clone()), this.mx(a.Uk)) : a && (c = String(a).match(Pc)) ? (this.hf = !!b, this.yx(c[1] || "", !0), this.cG(c[2] || "", !0), this.Po(c[3] || "", !0), this.To(c[4]), this.Ai(c[5] || "", !0), this.Uo(c[6] || "", !0), this.mx(c[7] || "", !0)) : (this.hf = !!b, this.li = new Zj(null, null, this.hf));
};
d = Yj.prototype;
d.toString = function() {
  var a = [], b = this.wi;
  b && a.push(ak(b, bk, !0), ":");
  var c = this.ij();
  if (c || "file" == b) {
    a.push("//"), (b = this.fr()) && a.push(ak(b, bk, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.vb(), null != c && a.push(":", String(c));
  }
  if (c = this.Vc()) {
    this.qv() && "/" != c.charAt(0) && a.push("/"), a.push(ak(c, "/" == c.charAt(0) ? ck : dk, !0));
  }
  (c = this.d3()) && a.push("?", c);
  (c = this.Uk) && a.push("#", ak(c, ek));
  return a.join("");
};
d.resolve = function(a) {
  var b = this.clone(), c = a.I6();
  c ? b.yx(a.wi) : c = a.J6();
  c ? b.cG(a.fr()) : c = a.qv();
  c ? b.Po(a.ij()) : c = a.wO();
  var e = a.Vc();
  if (c) {
    b.To(a.vb());
  } else {
    if (c = a.vO()) {
      if ("/" != e.charAt(0)) {
        if (this.qv() && !this.vO()) {
          e = "/" + e;
        } else {
          var f = b.Vc().lastIndexOf("/");
          -1 != f && (e = b.Vc().substr(0, f + 1) + e);
        }
      }
      f = e;
      if (".." == f || "." == f) {
        e = "";
      } else {
        if (-1 != f.indexOf("./") || -1 != f.indexOf("/.")) {
          for (var e = Ea(f, "/"), f = f.split("/"), h = [], k = 0;k < f.length;) {
            var p = f[k++];
            "." == p ? e && k == f.length && h.push("") : ".." == p ? ((1 < h.length || 1 == h.length && "" != h[0]) && h.pop(), e && k == f.length && h.push("")) : (h.push(p), e = !0);
          }
          e = h.join("/");
        } else {
          e = f;
        }
      }
    }
  }
  c ? b.Ai(e) : c = a.H6();
  c ? b.Uo(a.li.clone()) : c = a.D6();
  c && b.mx(a.Uk);
  return b;
};
d.clone = function() {
  return new Yj(this);
};
d.yx = function(a, b) {
  this.Pk();
  if (this.wi = b ? fk(a, !0) : a) {
    this.wi = this.wi.replace(/:$/, "");
  }
  return this;
};
d.I6 = function() {
  return !!this.wi;
};
d.fr = function() {
  return this.kh;
};
d.cG = function(a, b) {
  this.Pk();
  this.kh = b ? fk(a) : a;
  return this;
};
d.J6 = function() {
  return !!this.kh;
};
d.ij = function() {
  return this.Zi;
};
d.Po = function(a, b) {
  this.Pk();
  this.Zi = b ? fk(a, !0) : a;
  return this;
};
d.qv = function() {
  return !!this.Zi;
};
d.vb = function() {
  return this.gb;
};
d.To = function(a) {
  this.Pk();
  if (a) {
    a = Number(a);
    if (isNaN(a) || 0 > a) {
      throw Error("Bad port number " + a);
    }
    this.gb = a;
  } else {
    this.gb = null;
  }
  return this;
};
d.wO = function() {
  return null != this.gb;
};
d.Vc = function() {
  return this.ji;
};
d.Ai = function(a, b) {
  this.Pk();
  this.ji = b ? fk(a, !0) : a;
  return this;
};
d.vO = function() {
  return !!this.ji;
};
d.H6 = function() {
  return "" !== this.li.toString();
};
d.Uo = function(a, b) {
  this.Pk();
  a instanceof Zj ? (this.li = a, this.li.KF(this.hf)) : (b || (a = ak(a, gk)), this.li = new Zj(a, null, this.hf));
  return this;
};
d.d3 = function() {
  return this.li.toString();
};
d.mx = function(a, b) {
  this.Pk();
  this.Uk = b ? fk(a) : a;
  return this;
};
d.D6 = function() {
  return !!this.Uk;
};
d.Pk = function() {
  if (this.w7) {
    throw Error("Tried to modify a read-only Uri");
  }
};
d.KF = function(a) {
  this.hf = a;
  this.li && this.li.KF(a);
  return this;
};
var fk = function(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}, ak = function(a, b, c) {
  return n(a) ? (a = encodeURI(a).replace(b, hk), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}, hk = function(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}, bk = /[#\/\?@]/g, dk = /[\#\?:]/g, ck = /[\#\?]/g, gk = /[\#\?@]/g, ek = /#/g, Zj = function(a, b, c) {
  this.tb = this.Vb = null;
  this.aj = a || null;
  this.hf = !!c;
};
Zj.prototype.Gh = function() {
  if (!this.Vb && (this.Vb = new H, this.tb = 0, this.aj)) {
    var a = this;
    Rc(this.aj, function(b, c) {
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
    });
  }
};
var ik = function(a, b, c) {
  b = Ie(a);
  if ("undefined" == typeof b) {
    throw Error("Keys are undefined");
  }
  c = new Zj(null, null, c);
  a = He(a);
  for (var e = 0;e < b.length;e++) {
    var f = b[e], h = a[e];
    ta(h) ? c.xU(f, h) : c.add(f, h);
  }
  return c;
};
d = Zj.prototype;
d.ja = function() {
  this.Gh();
  return this.tb;
};
d.add = function(a, b) {
  this.Gh();
  this.Xn();
  a = this.Jn(a);
  var c = this.Vb.get(a);
  c || this.Vb.set(a, c = []);
  c.push(b);
  this.tb = Za(this.tb) + 1;
  return this;
};
d.remove = function(a) {
  this.Gh();
  a = this.Jn(a);
  return this.Vb.Ra(a) ? (this.Xn(), this.tb = Za(this.tb) - this.Vb.get(a).length, this.Vb.remove(a)) : !1;
};
d.clear = function() {
  this.Xn();
  this.Vb = null;
  this.tb = 0;
};
d.nc = function() {
  this.Gh();
  return 0 == this.tb;
};
d.Ra = function(a) {
  this.Gh();
  a = this.Jn(a);
  return this.Vb.Ra(a);
};
d.Fk = function(a) {
  var b = this.T();
  return pb(b, a);
};
d.ub = function() {
  this.Gh();
  for (var a = this.Vb.T(), b = this.Vb.ub(), c = [], e = 0;e < b.length;e++) {
    for (var f = a[e], h = 0;h < f.length;h++) {
      c.push(b[e]);
    }
  }
  return c;
};
d.T = function(a) {
  this.Gh();
  var b = [];
  if (n(a)) {
    this.Ra(a) && (b = zb(b, this.Vb.get(this.Jn(a))));
  } else {
    a = this.Vb.T();
    for (var c = 0;c < a.length;c++) {
      b = zb(b, a[c]);
    }
  }
  return b;
};
d.set = function(a, b) {
  this.Gh();
  this.Xn();
  a = this.Jn(a);
  this.Ra(a) && (this.tb = Za(this.tb) - this.Vb.get(a).length);
  this.Vb.set(a, [b]);
  this.tb = Za(this.tb) + 1;
  return this;
};
d.get = function(a, b) {
  a = a ? this.T(a) : [];
  return 0 < a.length ? String(a[0]) : b;
};
d.xU = function(a, b) {
  this.remove(a);
  0 < b.length && (this.Xn(), this.Vb.set(this.Jn(a), z(b)), this.tb = Za(this.tb) + b.length);
};
d.toString = function() {
  if (this.aj) {
    return this.aj;
  }
  if (!this.Vb) {
    return "";
  }
  for (var a = [], b = this.Vb.ub(), c = 0;c < b.length;c++) {
    for (var e = b[c], f = encodeURIComponent(String(e)), e = this.T(e), h = 0;h < e.length;h++) {
      var k = f;
      "" !== e[h] && (k += "=" + encodeURIComponent(String(e[h])));
      a.push(k);
    }
  }
  return this.aj = a.join("&");
};
d.Xn = function() {
  this.aj = null;
};
d.clone = function() {
  var a = new Zj;
  a.aj = this.aj;
  this.Vb && (a.Vb = this.Vb.clone(), a.tb = this.tb);
  return a;
};
d.Jn = function(a) {
  a = String(a);
  this.hf && (a = a.toLowerCase());
  return a;
};
d.KF = function(a) {
  a && !this.hf && (this.Gh(), this.Xn(), this.Vb.forEach(function(a, c) {
    var b = c.toLowerCase();
    c != b && (this.remove(c), this.xU(b, a));
  }, this));
  this.hf = a;
};
d.extend = function(a) {
  for (var b = 0;b < arguments.length;b++) {
    Ke(arguments[b], function(a, b) {
      this.add(b, a);
    }, this);
  }
};
var jk = function(a) {
  return (a = a.exec($b)) ? a[1] : "";
}, kk = function() {
  if (mi) {
    return jk(/Firefox\/([0-9.]+)/);
  }
  if (ic || jc || hc) {
    return Bc;
  }
  if (qi) {
    return jk(/Chrome\/([0-9.]+)/);
  }
  if (ri && !(dc() || B("iPad") || B("iPod"))) {
    return jk(/Version\/([0-9.]+)/);
  }
  if (ni || oi) {
    var a = /Version\/(\S+).*Mobile\/(\S+)/.exec($b);
    if (a) {
      return a[1] + "." + a[2];
    }
  } else {
    if (pi) {
      return (a = jk(/Android\s+([0-9.]+)/)) ? a : jk(/Version\/([0-9.]+)/);
    }
  }
  return "";
}();
var lk = function(a, b) {
  this.Tb = a;
  this.Dd = b;
  this.a = D("mr.cloud.calendar.CalendarService");
};
d = lk.prototype;
d.F1 = function() {
  var a = this, b = w(this.Dd.qp, "No user email to use as calendar id to query for events.");
  return this.L2(b, 9E5).then(function(b) {
    a.a.info(a.zK(b.length) + " events discovered before filtering.");
    return a.s3(b);
  }, function(b) {
    a.a.v("Error getting Hangouts from calendar.", b);
    return [];
  });
};
d.zK = function(a) {
  return 20 < a ? "20+" : a.toString();
};
d.L2 = function(a, b) {
  var c = this, e = Date.now();
  return this.u2(a, new Date(e), new Date(e + b)).then(function(a) {
    return a.filter(c.u7);
  });
};
d.u7 = function(a) {
  return !(!a.start || !a.end || a.start.date || a.end.date || !a.start.dateTime || !a.end.dateTime);
};
d.u2 = function(a, b, c) {
  a = this.Tb.Tk(Ai.Ki, ["calendars", a, "events"], {timeMin:b.toJSON(), timeMax:c.toJSON(), singleEvents:!0});
  this.a.L("Retrieving Hangouts from Calendar: " + a);
  return this.Tb.Qi(a, "GET").then(function(a) {
    return a.items ? a.items : [];
  });
};
d.s3 = function(a) {
  var b = this, c = [];
  a.filter(function(a) {
    return a.hangoutLink;
  }).forEach(function(a) {
    var e = new Yj(a.hangoutLink);
    if ("meet.google.com" == e.ij()) {
      var h = e.Vc().substring(1);
      c.push(new jj(!0, h, void 0, void 0, void 0, a.summary));
    } else {
      if (e = b.zaa(e.Vc()), 2 == e.length) {
        var k = ka(e), e = k.next().value, k = k.next().value, p;
        -1 != e.indexOf(".") && (h = k, p = e);
        c.push(kj(!1, k, e, p, h, a.summary));
      } else {
        b.a.v("Invalid hangout link from calendar event: " + a.hangoutLink);
      }
    }
  });
  this.a.info(this.zK(c.length) + " events discovered with Hangout links.");
  return c;
};
d.zaa = function(a) {
  return a.substring(12).split("/");
};
var mk = function(a) {
  this.Tb = a;
  this.a = D("mr.cloud.mesi.MesiService");
};
mk.prototype.C1 = function() {
  var a = Bi.Ki, a = a.replace("v1", "v1_today"), a = this.Tb.Tk(a, ["hangouts", "search"]);
  this.a.info("Retrieving Hangouts from MESI: " + a);
  return this.Tb.Qi(a, "POST", nk).then(function(a) {
    var b = [];
    a.result && (b = a.result.map(function(a) {
      var b = a.hangout, c = b.meeting_room_name, e;
      b.meeting_domain ? e = b.meeting_domain : "BUSINESS" == b.type && b.company_title && (e = b.company_title.toLowerCase());
      var p = Nj("", 0);
      if ((a = a.participant) && 0 < a.length) {
        var r = a[0].display_name, p = a.reduce(function(a, b) {
          a.add(b.user_id);
          "ORGANIZER" == b.role && (r = b.display_name);
          return a;
        }, new Set), p = Nj(w(r), p.size);
      }
      return c && e ? kj(!1, c, e, e, c, p, b.hangout_id) : new jj(!1, w(b.hangout_id), e, c, p, b.hangout_id);
    }));
    return b;
  });
};
var nk = {request_header:{client_version:{client_id:"39"}}, search_sources:["0"]};
var pk = function() {
  this.FE = Sa();
  this.Zl = new ok(null, null);
  this.Yl = new ok(null, null);
  this.wA = [];
  this.Lv = this.Xm = 0;
  ei(this);
};
d = pk.prototype;
d.yn = function(a) {
  a = a.toLowerCase();
  var b = new Zi;
  b.update(a);
  b.update(this.FE);
  return "r" + Tj(b.digest(), !0);
};
d.v4 = function() {
  return this.Zl.model ? this.Zl : this.Yl.model ? this.Yl : new ok(null, null);
};
d.Ca = function() {
  return "SinkUtils";
};
d.getData = function() {
  return [{recentLaunchedDevice:this.Zl, recentDiscoveredDevice:this.Yl}, {receiverIdToken:this.FE, fixedIpList:this.wA.join(","), castControlPort:this.Xm, lastCloudSinkCheckTimeMillis:this.Lv}];
};
d.wb = function() {
  var a = bi(this);
  a && (this.Zl = a.recentLaunchedDevice || new ok(null, null), this.Yl = a.recentDiscoveredDevice || new ok(null, null));
  if (a = ci(this)) {
    this.FE = a.receiverIdToken || Sa(), this.wA = a.fixedIpList && a.fixedIpList.split(",") || [], this.Xm = a.castControlPort || 0, this.Lv = a.lastCloudSinkCheckTimeMillis || 0;
  }
};
qa(pk);
var ok = function(a, b) {
  this.model = a;
  this.ip = b;
};
var qk = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", nonce:"nonce", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"}, rk = function(a) {
  a = a.document;
  a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new Yi(a.clientWidth, a.clientHeight);
}, sk = function(a) {
  return a ? a.parentWindow || a.defaultView : window;
}, uk = function(a, b, c, e) {
  function f(c) {
    c && b.appendChild(n(c) ? a.createTextNode(c) : c);
  }
  for (;e < c.length;e++) {
    var h = c[e];
    !ua(h) || wa(h) && 0 < h.nodeType ? f(h) : x(tk(h) ? z(h) : h, f);
  }
}, vk = function(a) {
  w(a, "Node cannot be null or undefined.");
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}, wk = function(a, b) {
  w(null != a, "goog.dom.setTextContent expects a non-null value for node");
  if ("textContent" in a) {
    a.textContent = b;
  } else {
    if (3 == a.nodeType) {
      a.data = b;
    } else {
      if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (;a.lastChild != a.firstChild;) {
          a.removeChild(a.lastChild);
        }
        a.firstChild.data = b;
      } else {
        for (var c;c = a.firstChild;) {
          a.removeChild(c);
        }
        c = vk(a);
        a.appendChild(c.createTextNode(String(b)));
      }
    }
  }
}, tk = function(a) {
  if (a && "number" == typeof a.length) {
    if (wa(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (va(a)) {
      return "function" == typeof a.item;
    }
  }
  return !1;
}, xk = function(a) {
  this.Bg = a || g.document || document;
};
d = xk.prototype;
d.getElementsByTagName = function(a, b) {
  return (b || this.Bg).getElementsByTagName(String(a));
};
d.setProperties = function(a, b) {
  Lb(b, function(b, e) {
    "style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : qk.hasOwnProperty(e) ? a.setAttribute(qk[e], b) : Ea(e, "aria-") || Ea(e, "data-") ? a.setAttribute(e, b) : a[e] = b;
  });
};
d.createElement = function(a) {
  return this.Bg.createElement(String(a));
};
d.createTextNode = function(a) {
  return this.Bg.createTextNode(String(a));
};
d.getWindow = function() {
  var a = this.Bg;
  return a.parentWindow || a.defaultView;
};
d.appendChild = function(a, b) {
  a.appendChild(b);
};
d.append = function(a, b) {
  uk(vk(a), a, arguments, 1);
};
d.canHaveChildren = function(a) {
  if (1 != a.nodeType) {
    return !1;
  }
  switch(a.tagName) {
    case "APPLET":
    case "AREA":
    case "BASE":
    case "BR":
    case "COL":
    case "COMMAND":
    case "EMBED":
    case "FRAME":
    case "HR":
    case "IMG":
    case "INPUT":
    case "IFRAME":
    case "ISINDEX":
    case "KEYGEN":
    case "LINK":
    case "NOFRAMES":
    case "NOSCRIPT":
    case "META":
    case "OBJECT":
    case "PARAM":
    case "SCRIPT":
    case "SOURCE":
    case "STYLE":
    case "TRACK":
    case "WBR":
      return !1;
  }
  return !0;
};
d.removeNode = function(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
d.getChildren = function(a) {
  return yj && void 0 != a.children ? a.children : jb(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
};
d.isElement = function(a) {
  return wa(a) && 1 == a.nodeType;
};
d.contains = function(a, b) {
  if (!a || !b) {
    return !1;
  }
  if (a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b);
  }
  if ("undefined" != typeof a.compareDocumentPosition) {
    return a == b || !!(a.compareDocumentPosition(b) & 16);
  }
  for (;b && a != b;) {
    b = b.parentNode;
  }
  return b == a;
};
var yk = function(a, b, c, e, f, h, k) {
  var p = pk.ea().yn(a);
  this.Cb = new wi(p, b, h, k, f);
  this.deviceId = a;
  this.Qia = c;
  this.model = e;
};
yk.prototype.QU = function(a) {
  return pb(this.Qia, a);
};
var zk = function(a, b, c, e, f) {
  yk.call(this, a, b, ["cloud"], "Chrome Streaming Receiver", e);
  this.My = c;
  this.isAvailable = f;
};
la(zk, yk);
var Ak = function(a) {
  var b = w(a.ij());
  w(null == b == a.Vf());
  var c;
  a.Gj && a.Lh() != a.Gj && (c = w(a.Gj));
  yk.call(this, a.getId(), a.Lh(), ["mesi"], "Hangout", b, "hangout", c);
  this.Vf = a.Vf();
  this.dm = a.em || "";
};
la(Ak, yk);
var Bk = function(a, b, c, e) {
  this.Kh = a;
  this.Dd = b;
  this.at = c;
  this.tc = e;
};
d = Bk.prototype;
d.Z5 = function(a, b, c) {
  var e = this;
  return this.Eda(a, b, c).then(function(a) {
    return e.E5(a, b.id);
  });
};
d.N5 = function(a) {
  var b = this;
  return this.at.K2().then(function(c) {
    b.tc.Ie(new Uh("TURN_CREDENTIALS", {credentials:c}), a.id);
  });
};
d.Eda = function(a, b, c) {
  b = c.deviceId;
  var e = this.Dd.qp, e = e ? new Di(e) : void 0;
  a = a.data;
  switch(c.My) {
    case "owner":
      hj(0);
      break;
    case "manager":
      hj(1);
      break;
    case "user":
      hj(2);
      break;
    case "viewer":
      hj(3);
  }
  return "viewer" == c.My ? this.Kh.Jda(b, a, e) : this.Kh.Mda(b, a, e);
};
d.E5 = function(a, b) {
  if ("done" != a.state) {
    return Promise.reject(Error("Offer not executed by receiver. State: " + a.state));
  }
  switch(a.type) {
    case "__cloud_webrtc_session_message__":
      a = new Uh("ANSWER", a.results.sessionDescription);
      this.tc.Ie(a, b);
      break;
    case "knocking_cloud_webrtc_session_message":
      ej(0);
      a = new Uh("KNOCK_ANSWER", a.results.sessionDescription);
      this.tc.Ie(a, b);
      break;
    case "knock_denied":
      ej(1);
      this.jO(Gj, b);
      break;
    case "knock_timeout":
      ej(2);
      this.jO(Hj, b);
      break;
    default:
      return Promise.reject(Error("Invalid message type: " + a.type));
  }
  return Promise.resolve();
};
d.jO = function(a, b) {
  a = new Ug(a, "warning", "dismiss");
  a.Dfa(!0);
  this.tc.Oh().send(a);
  this.tc.Ie(new Uh("STOP"), b);
};
var Ck = function(a, b) {
  this.Dd = a;
  this.tc = b;
};
Ck.prototype.V5 = function(a, b, c) {
  var e = this;
  switch(a.type) {
    case "REFRESH_AUTH":
      var f = c.Vf, h = c.deviceId, k = c.dm;
      return this.Dd.eca().then(function() {
        e.tc.Ie(new Uh("AUTH_READY", {Vf:f, ka:h, dm:k}), b.id);
      });
    case "LOCAL_PRESENT":
      return this.tc.Ie(new Uh("AUTH_READY", {Vf:c.Vf, ka:c.deviceId, dm:c.dm, Ek:!a.data.local}), b.id), Promise.resolve();
    case "STATUS_REQUEST":
      return this.tc.Ie(a, b.id), Promise.resolve();
    case "STATUS_RESPONSE":
      return this.tc.Ie(a, b.id, !0), a.data.routeDescription || this.tc.Ie(a, b.id), Promise.resolve();
    case "HANGOUT_INACTIVE":
      return this.tc.Am(b, 4, new Ug(Jj, "warning", "dismiss"));
    case "HANGOUT_INVALID":
      return this.tc.Am(b, 3, new Ug(Kj, "warning", "dismiss"));
    default:
      return Promise.reject(Error("Unknown type: " + a.type));
  }
};
var Dk = function(a, b, c) {
  this.bn = a;
  this.ir = b;
  this.tc = c;
};
Dk.prototype.rba = function(a, b, c, e) {
  var f = this;
  return new Promise(function(h) {
    switch(a) {
      case "cloud":
      case "mesi":
        break;
      default:
        throw Error("Unrecognized channel type");
    }
    if (!b.type) {
      throw Error("Message has no type");
    }
    switch(b.type) {
      case "STOP":
        h(f.tc.Am(w(c), 1, null));
        return;
      case "SESSION_START_SUCCESS":
        fj(0);
        break;
      case "SESSION_END":
        break;
      case "SESSION_FAILURE":
        fj(1);
        h(f.tc.Am(w(c), 2, new Ug(Fj, "warning", "dismiss")));
        return;
      case "__webrtc_stats__":
        break;
      case "PRESENTATION_CONNECTION_MESSAGE":
        f.tc.Ie(b.data, c.id, !0);
        break;
      case "OFFER":
        w("cloud" == a);
        h(f.bn.Z5(b, w(c), w(e)));
        return;
      case "GET_TURN_CREDENTIALS":
        w("cloud" == a);
        h(f.bn.N5(w(c)));
        return;
      case "REFRESH_AUTH":
      case "LOCAL_PRESENT":
      case "MUTE":
      case "STATUS_REQUEST":
      case "STATUS_RESPONSE":
      case "HANGOUT_INACTIVE":
      case "HANGOUT_INVALID":
        w("mesi" == a);
        h(f.ir.V5(b, w(c), w(e)));
        return;
      case "new_session":
        f.tc.Ie(b, w(c).id, !0);
        break;
      case "remove_session":
        f.tc.Ie(b, w(c).id, !0);
        f.tc.terminateRoute(w(c).id);
        break;
      default:
        throw Error("Unknown type: " + b.type);
    }
    h();
  });
};
var Ek = function(a, b, c, e, f, h, k, p) {
  this.Vk = null;
  this.$I = !1;
  this.ZI = G();
  this.Ec = [];
  this.Sd = a ? encodeURIComponent(String(a)) : null;
  this.Hu = null;
  !e && b && (this.Hu = b);
  this.JY = c || null;
  this.Dt = !e;
  this.qu = null != f ? f : null;
  this.vo = h || null;
  this.MG = !!k;
  this.vK = p || null;
  e ? (w(this.Sd, "Unauthed requests must have an API key"), w(!this.vo, "Unauthed requests should not have an OAuth token"), w(!this.MG, "Unauthed requests should not use v2 Auth headers")) : this.vo ? (w(!this.Sd, "OAuth'd requests should not have an API key"), w(!this.Hu, "OAuth'd requests should not have an Gaia session index"), w(!this.MG, "OAuth'd requests should not use v2 Auth headers")) : (w(this.Sd, "first party auth requests must have an API key"), w(this.Hu, "first party auth requests must have a session ID"));
};
v(Ek, $c);
var Fk;
var Gk = af("https://apis.google.com/js/client.js");
Gk instanceof $e && Gk.constructor === $e && Gk.CX === Ze ? Fk = Gk.qG : (Ya("expected object of type Const, got '" + Gk + "'"), Fk = "type_error:Const");
var Hk = new jf;
Hk.vE = Fk;
d = Ek.prototype;
d.init = function() {
  var a = t(function(a) {
    this.Vk = a;
    var b = oa("client.request", a), c = oa("auth", a);
    b && c ? this.iO() : a.load("client", t(this.iO, this));
  }, this), b = this.mK("gapi");
  b ? a(b.gapi) : this.d8(a);
  return this.ZI.promise;
};
d.mK = function(a) {
  for (var b = window, c = oa(a, b);!c && b != window.top && this.MZ(b.parent, a);) {
    b = b.parent, c = oa(a, b);
  }
  return c ? b : null;
};
d.MZ = function(a, b) {
  try {
    return !!a && null != a.location.href && fc(a, b);
  } catch (c) {
    return !1;
  }
};
d.d8 = function(a) {
  var b = this.mK("gapi_onload");
  if (b) {
    var c = b.gapi_onload;
    b.gapi_onload = function() {
      c();
      a(b.gapi);
    };
  } else {
    window.gapi_onload = function() {
      a(window.gapi);
    };
    var e = document.createElement("script");
    Xj(e, Hk);
    this.vK && wk(e, tf(this.vK));
    document.getElementsByTagName("head")[0].appendChild(e);
  }
};
d.Gn = function() {
  return w(this.Vk, "Missing gapi instance!");
};
d.iO = function() {
  for (var a = 0;a < this.Ec.length;a++) {
    this.Ec[a].Pb.resolve(this.IS(this.Ec[a].Nca));
  }
  this.$I = !0;
  this.ZI.resolve(this.Gn());
};
d.sendRequest = function(a) {
  if (this.$I) {
    return this.IS(a);
  }
  var b = G();
  this.Ec.push({Nca:a, Pb:b});
  return b.promise;
};
d.IS = function(a) {
  var b, c, e, f = oa("config.get", this.Gn());
  this.Dt || (b = f("googleapis.config/auth/useFirstPartyAuth"), c = f("googleapis.config/auth/useOriginToken"));
  null != this.qu && (e = f("client/cors"));
  try {
    var h = oa("config.update", this.Gn());
    this.Dt || (h("googleapis.config/auth/useFirstPartyAuth", !1), h("googleapis.config/auth/useOriginToken", !1));
    null != this.qu && h("client/cors", this.qu);
    var k = oa("client.request", this.Gn()), p = this.h2();
    a.headers && Zb(p, a.headers);
    var r = {headers:p, root:this.JY, path:a.path, method:a.method, body:a.body}, A = a.params || {};
    this.Sd && !this.vo ? Zb(A, {key:this.Sd}) : this.vo && Zb(A, {key:null});
    Sb(A) || (r.params = A);
    var C = ie(k(r));
    a.callback && C.then(function(b) {
      a.callback.apply(null, [b.result, b]);
    }, function(b) {
      a.callback.apply(null, [b.result, b]);
    });
    return C;
  } finally {
    h = oa("config.update", this.Gn()), this.Dt || (h("googleapis.config/auth/useFirstPartyAuth", b), h("googleapis.config/auth/useOriginToken", c)), null != this.qu && h("client/cors", e);
  }
};
d.h2 = function() {
  if (this.Dt) {
    if (this.vo) {
      return {Authorization:"Bearer " + this.vo};
    }
    var a = oa("auth.getAuthHeaderValueForFirstParty", this.Gn());
    return {Authorization:this.MG ? a([]) : a(), "X-Goog-AuthUser":this.Hu};
  }
  return {};
};
var Ik = function(a) {
  $c.call(this);
  this.C = a;
  this.Wa = {};
};
v(Ik, $c);
var Jk = [];
d = Ik.prototype;
d.listen = function(a, b, c, e) {
  return this.CP(a, b, c, e);
};
d.Y7 = function(a, b, c, e, f) {
  return this.CP(a, b, c, e, f);
};
d.CP = function(a, b, c, e, f) {
  ta(b) || (b && (Jk[0] = b.toString()), b = Jk);
  for (var h = 0;h < b.length;h++) {
    var k = ud(a, b[h], c || this.handleEvent, e || !1, f || this.C || this);
    if (!k) {
      break;
    }
    this.Wa[k.key] = k;
  }
  return this;
};
d.io = function(a, b, c, e) {
  return this.AP(a, b, c, e);
};
d.AP = function(a, b, c, e, f) {
  if (ta(b)) {
    for (var h = 0;h < b.length;h++) {
      this.AP(a, b[h], c, e, f);
    }
  } else {
    a = Bd(a, b, c || this.handleEvent, e, f || this.C || this);
    if (!a) {
      return this;
    }
    this.Wa[a.key] = a;
  }
  return this;
};
d.vd = function(a, b, c, e, f) {
  if (ta(b)) {
    for (var h = 0;h < b.length;h++) {
      this.vd(a, b[h], c, e, f);
    }
  } else {
    c = c || this.handleEvent, f = f || this.C || this, c = vd(c), e = !!e, b = ld(a) ? a.Lq(b, c, e, f) : a ? (a = xd(a)) ? a.Lq(b, c, e, f) : null : null, b && (Dd(b), delete this.Wa[b.key]);
  }
  return this;
};
d.removeAll = function() {
  Lb(this.Wa, function(a, b) {
    this.Wa.hasOwnProperty(b) && Dd(a);
  }, this);
  this.Wa = {};
};
d.aa = function() {
  Ik.X.aa.call(this);
  this.removeAll();
};
d.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
var Kk = function(a, b, c) {
  this.Hja = a;
  this.he = b;
  this.Nd = new Map;
  this.Ex = new Map;
  this.eo = null;
  this.U8 = c;
};
d = Kk.prototype;
d.ff = function() {
  this.OZ() && (this.eo = Date.now(), this.pq());
  return Array.from(this.Nd.values());
};
d.Fp = function(a) {
  this.Nd.set(a.Cb.id, a);
};
d.bm = function(a) {
  return this.Nd.delete(a);
};
d.ma = function(a) {
  return this.Nd.get(a) || null;
};
d.OZ = function() {
  var a = this.eo + this.U8;
  return null == this.eo || a < Date.now();
};
d.pq = function() {
  var a = this;
  return this.Hja().then(function(b) {
    a.Gja(b);
  });
};
d.Gja = function(a) {
  var b = new Map(this.Nd), c = new Map, e = new Map, f = [], h = [];
  a.forEach(function(a) {
    var k = a.Cb.id;
    c.set(k, a);
    e.set(k, a.deviceId);
    b.has(k) ? b.has(k) && JSON.stringify(b.get(k)) != JSON.stringify(a) && h.push(a.Cb) : f.push(a.Cb);
    b.delete(k);
  });
  a = [].concat(ma(b.values())).map(function(a) {
    return a.Cb;
  });
  this.Ex.clear();
  this.Ex = e;
  this.Nd.clear();
  this.Nd = c;
  this.LZ(f, h, a);
};
d.LZ = function(a, b, c) {
  0 < a.length && this.he.UD(a);
  0 < b.length && this.he.qf(b);
  0 < c.length && this.he.bg(c);
};
d.g = function() {
  for (var a = {}, b = ka(this.Nd.entries()), c = b.next();!c.done;c = b.next()) {
    var e = ka(c.value), c = e.next().value, e = e.next().value;
    a[c] = e;
  }
  b = {};
  c = ka(this.Ex.entries());
  for (e = c.next();!e.done;e = c.next()) {
    var f = ka(e.value), e = f.next().value, f = f.next().value;
    b[e] = f;
  }
  return new Lk(a, b, this.eo);
};
d.EP = function(a) {
  for (var b in a.sinks) {
    var c = a.sinks[b], e = null;
    "Hangout" == c.model ? (c = new jj(c.Vf, c.deviceId, c.Cb.domain, c.Cb.description, c.Cb.friendlyName, c.dm), e = new Ak(c)) : "Chrome Streaming Receiver" == c.model && (e = new zk(c.deviceId, c.Cb.friendlyName, c.My, c.Cb.domain, c.isAvailable));
    this.Nd.set(b, e);
  }
  for (b in a.eJ) {
    this.Ex.set(b, a.eJ[b]);
  }
  a.iP && (this.eo = a.iP);
};
d.LF = function(a) {
  this.eo = a;
};
var Lk = function(a, b, c) {
  this.sinks = a;
  this.eJ = b;
  this.iP = c;
};
var Mk = function(a) {
  this.Dd = a;
};
d = Mk.prototype;
d.Tk = function(a, b, c) {
  var e = "";
  b.forEach(function(a) {
    e += "/" + encodeURIComponent(a);
  });
  a = new Yj(a + e);
  c && (c = ik(c), a.Uo(c));
  return a;
};
d.Qi = function(a, b, c) {
  var e = this;
  return this.Dd.getAuthToken().then(function(f) {
    var h = e.i2(f);
    return e.HZ(h, a, b, c).catch(function(h) {
      if ("INVALID_ACCESS_ERROR" == h) {
        return e.p1(f, a, b, c);
      }
      throw h;
    });
  });
};
d.p1 = function(a, b, c, e) {
  var f = this;
  return this.Dd.o1(a).then(function() {
    return f.Qi(b, c, e);
  });
};
d.HZ = function(a, b, c, e) {
  var f = this;
  return new Promise(function(h, k) {
    a.sendRequest(f.L1(b, c, function(a) {
      a && !a.error ? h(a) : f.q7(a) ? k("INVALID_ACCESS_ERROR") : k(f.vaa(a));
    }, e));
  });
};
d.q7 = function(a) {
  return !!a && 401 == a.error.code;
};
d.i2 = function(a) {
  a = new Ek(void 0, void 0, void 0, !1, !1, a);
  a.init();
  return a;
};
d.vaa = function(a) {
  return a && a.error ? a.error.errors ? a.error.errors[0] : a : Error(a);
};
d.L1 = function(a, b, c, e) {
  a = {callback:c, method:b, path:a.toString()};
  e && (a.body = e);
  return a;
};
var Nk = function(a) {
  this.gA = a;
  this.a = D("mr.cloud.messaging.GcmMessageHandler");
};
Nk.prototype.onMessage = function(a) {
  var b = this;
  a = JSON.parse(a.data.notification);
  var c = pk.ea();
  a.events.forEach(function(a) {
    if (a.deviceId) {
      var e = c.yn(a.deviceId);
      switch(a.type) {
        case "deviceCreated":
          b.L9(a, e);
          break;
        case "deviceUpdated":
          b.Q9(a, e);
          break;
        case "deviceDeleted":
          b.N9(e);
          break;
        default:
          b.a.L(function() {
            return "[unhandled event] " + JSON.stringify(a);
          });
      }
    } else {
      b.a.error("Device ID not provided");
    }
  });
};
Nk.prototype.L9 = function(a, b) {
  var c = Li(a, "statePatch", "_cloudCast", "settings", "receiverName");
  "string" != typeof c ? this.a.error("Receiver name not a string: " + c) : (a = new zk(a.deviceId, c, "owner", "default", !0), this.gA.K9({sinkId:b, cloudSink:a}));
};
Nk.prototype.Q9 = function(a, b) {
  a = Li(a, "statePatch", "_cloudCast", "appStatus");
  "string" != typeof a ? this.a.error("App status not a string: " + a) : this.gA.P9({sinkId:b, isAvailable:"available" == a});
};
Nk.prototype.N9 = function(a) {
  this.gA.M9({sinkId:a});
};
var Ok = function(a, b) {
  this.Pz = a;
  this.he = b;
  this.Ef = new Kk(this.pq.bind(this), b, 2E4);
  this.wK = new Nk(this);
  vj().addListener();
  ei(this);
  Nh("mr.cloud.discovery.CloudSinkDiscoveryService", this);
};
la(Ok, Dh);
d = Ok.prototype;
d.ff = function() {
  var a = this;
  this.Pz.mca().then(function(b) {
    a.Pz.subscribe(b);
  }, function() {
  });
  return this.Ef.ff().filter(function(a) {
    return a.isAvailable;
  });
};
d.ma = function(a) {
  return this.Ef.ma(a);
};
d.handleEvent = function(a, b) {
  for (var c = [], e = 1;e < arguments.length;++e) {
    c[e - 1] = arguments[e];
  }
  if (a == chrome.gcm.onMessage) {
    this.wK.onMessage.apply(this.wK, [].concat(ma(c)));
  } else {
    throw Error("Unhandled event: expected chrome.gcm.onMessage");
  }
};
d.pq = function() {
  return this.Pz.V7().then(function(a) {
    return a.map(function(a) {
      nh("MediaRouter.Cloud.CloudReceiver.Sink.Discovered");
      var b = a.isAvailable() && !a.v7();
      return new zk(a.getId(), a.Lh(), a.fc.personalizedInfo.maxRole, "default", b);
    });
  });
};
d.Ca = function() {
  return "CloudSinkDiscoveryService";
};
d.getData = function() {
  return [{cache:this.Ef.g()}];
};
d.wb = function() {
  var a = bi(this);
  a && this.Ef.EP(a.cache);
};
d.K9 = function(a) {
  a = a.qra;
  this.Ef.Fp(a);
  this.Ef.LF(Date.now());
  this.he.UD([a.Cb]);
};
d.P9 = function(a) {
  var b = this.Ef.ma(a.sinkId);
  b && (b.isAvailable = a.isAvailable, this.Ef.LF(Date.now()), this.he.qf([b.Cb]));
};
d.M9 = function(a) {
  if (a = this.Ef.ma(a.sinkId)) {
    this.Ef.bm(a.Cb.id), this.Ef.LF(Date.now()), this.he.bg([a.Cb]);
  }
};
var Rk = function(a, b, c) {
  if (!Pk) {
    Lf();
    var e = Kf;
    e.qx(If);
    e.kY(Qk);
    Pk = !0;
  }
  this.GZ = a;
  this.N8 = b;
  this.Tn = new Kk(this.pq.bind(this), c, 2E4);
  this.Hr = new Map;
  ei(this);
}, Qk = function(a) {
  Kc({w:a.o8, level:Nc(a.wl.value), time:a.aja, message:a.getMessage(), Hh:a.mq});
};
Rk.prototype.OH = function(a, b) {
  a = kj(!1, a, b, b, a);
  this.Hr.set(a.getId(), a);
  return a;
};
Rk.prototype.addManualHangout = Rk.prototype.OH;
Rk.prototype.Aca = function(a, b) {
  a = kj(!1, a, b, b, a);
  a = this.nD(a);
  w(this.WR(a));
};
Rk.prototype.removeManualHangout = Rk.prototype.Aca;
d = Rk.prototype;
d.ff = function() {
  return this.Tn.ff();
};
d.ma = function(a) {
  return this.Tn.ma(a);
};
d.pq = function() {
  var a = this;
  this.a.info("Fetching hangouts");
  return Mi([this.N8.C1(), this.GZ.F1()]).then(function(b) {
    var c = Array.from(a.Hr.values());
    b.forEach(function(b) {
      b.Gu ? c = c.concat(b.value) : a.a.error("Error discovering Hangouts", b.reason);
    });
    var e = c.reduce(function(a, b) {
      var c = a[b.getId()];
      c ? c.merge(b) : c = b;
      a[c.getId()] = c;
      return a;
    }, {});
    return Object.keys(e).map(function(b) {
      b = e[b];
      nh("MediaRouter.Cloud.Hangout.Sink.Discovered");
      return a.nD(b);
    });
  });
};
d.nD = function(a) {
  return new Ak(a);
};
d.mY = function(a) {
  a = this.OH(a.input, a.domain);
  a = this.nD(a);
  this.Tn.Fp(a);
  return a.Cb;
};
d.WR = function(a) {
  return this.Hr.delete(a.deviceId) ? (this.Tn.bm(a.Cb.id), !0) : !1;
};
d.Ca = function() {
  return "HangoutSinkDiscoveryService";
};
d.getData = function() {
  for (var a = {}, b = ka(this.Hr.entries()), c = b.next();!c.done;c = b.next()) {
    var e = ka(c.value), c = e.next().value, e = e.next().value;
    a[c] = e;
  }
  return [{cache:this.Tn.g(), manualHangouts:a}];
};
d.wb = function() {
  var a = bi(this);
  if (a) {
    this.Tn.EP(a.cache);
    for (var b in a.manualHangouts) {
      var c = a.manualHangouts[b];
      this.Hr.set(b, new jj(c.SO, c.eb, c.Zi, c.Gj, c.og, c.em));
    }
  }
};
d.a = D("mr.cloud.discovery.HangoutSinkDiscoveryService");
var Pk = !1;
var Sk = function(a) {
  this.a = D("mr.cloud.CredentialService");
  this.Tb = a;
};
Sk.prototype.K2 = function() {
  var a = this, b = new Oc, c = Ci.Ki + "/iceconfig?key=" + Ci.lja;
  this.a.info("Requesting TURN credentials from " + c);
  var e = Xf(c, function() {
    return a.W$(e, b);
  }, "POST", void 0, {"Content-Type":"application/json"});
  return b.promise;
};
Sk.prototype.W$ = function(a, b) {
  a.Ed() ? (this.a.info("Got TURN credentials: " + a.ef()), b.resolve(this.U9(a.D4()))) : b.resolve(this.V9(null));
};
Sk.prototype.U9 = function(a) {
  try {
    bb(a);
    var b = [];
    cb(a.iceServers).forEach(function(a) {
      cb(a.urls).forEach(function(c) {
        0 == c.indexOf("turn:") && b.push({url:$a(c), credential:$a(a.credential), username:$a(a.username)});
      });
    });
    return b;
  } catch (c) {
    return this.a.error("Error parsing TURN credentials.", c), [];
  }
};
Sk.prototype.V9 = function(a) {
  this.a.error("XHR failed fetching TURN credentials.", a);
  return [];
};
var Tk = function() {
  this.at = this.ig = this.po = this.ir = this.bn = this.Kh = this.vC = this.yz = this.yD = this.Qz = this.Oz = this.Tb = this.gz = null;
};
d = Tk.prototype;
d.jj = function() {
  null == this.gz && (this.gz = new qj);
  return this.gz;
};
d.Gq = function() {
  null == this.Tb && (this.Tb = new Mk(this.jj()));
  return this.Tb;
};
d.A2 = function() {
  null == this.Oz && (this.Oz = new oj(this.Gq()));
  return this.Oz;
};
d.E2 = function(a) {
  null == this.Qz && (this.Qz = new Ok(this.A2(), a));
  return this.Qz;
};
d.M3 = function() {
  null == this.yD && (this.yD = new mk(this.Gq()));
  return this.yD;
};
d.v2 = function() {
  null == this.yz && (this.yz = new lk(this.Gq(), this.jj()));
  return this.yz;
};
d.r3 = function(a) {
  null == this.vC && (this.vC = new Rk(this.v2(), this.M3(), a));
  return this.vC;
};
d.OL = function() {
  null == this.Kh && (this.Kh = new mj(this.Gq()));
  return this.Kh;
};
d.C2 = function(a) {
  null == this.bn && (this.bn = new Bk(this.OL(), this.jj(), this.e5(), a));
  return this.bn;
};
d.q3 = function(a) {
  null == this.ir && (this.ir = new Ck(this.jj(), a));
  return this.ir;
};
d.N3 = function(a) {
  null == this.po && (this.po = new Dk(this.C2(a), this.q3(a), a));
  return this.po;
};
d.S4 = function() {
  null == this.ig && (this.ig = new rj);
  return this.ig;
};
d.e5 = function() {
  null == this.at && (this.at = new Sk(this.Gq()));
  return this.at;
};
qa(Tk);

