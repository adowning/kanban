'use strict';var Po = {TAB:0, pH:1, bX:2}, Qo = function(a) {
  oh("MediaRouter.CastStreaming.Start.Success", a, Po);
};
var Ro = D("mr.mirror.cast.LogUploader"), To = function(a, b, c) {
  So("raw_events.log.gz", a, b, c);
  return b ? "https://crash-staging.corp.google.com/samples?stbtiq=" + b : "";
}, So = function(a, b, c, e) {
  if (0 == b.size) {
    Ro.info("Trying to upload an empty file to Crash"), e && e(null);
  } else {
    var f = new FormData;
    f.append("prod", "Cast");
    f.append("ver", chrome.runtime.getManifest().version);
    f.append(a, b);
    c && f.append("comments", c);
    Xf("https://clients2.google.com/cr/staging_report", function(a) {
      a = a.target;
      var b = null;
      a.Ed() ? (b = a.ef(), Ro.info("Upload to Crash succeeded: " + b)) : Ro.info("Upload to Crash failed. HTTP status: " + a.Sa());
      e && e(b);
    }, "POST", f, void 0, 3E4);
  }
};
var Uo = function() {
  this.vr = 0;
  ei(this);
}, Wo = function() {
  Vo || (Vo = new Uo);
  return Vo;
};
Uo.prototype.Ifa = function(a) {
  this.vr = a;
};
Uo.prototype.aia = function() {
  var a = {fraction:1}, b = a.autoSubmitTimeLimitMillis, c = Date.now();
  return this.vr && b && c - this.vr < b ? !1 : Math.random() < a.fraction;
};
var Yo = function(a, b, c, e) {
  var f = new Xo;
  f.extVersion = chrome.runtime.getManifest().version;
  f.extChannel = "internal";
  f.minBitrate = c.minVideoBitrate;
  f.maxBitrate = c.maxVideoBitrate;
  f.resolution = c.maxWidth + "x" + c.maxHeight;
  f.minResolution = c.minWidth + "x" + c.minHeight;
  if (f.minResolution == f.resolution) {
    f.resolutionChangePolicy = "fixed";
  } else {
    if (c.senderSideLetterboxing) {
      var h = c.KM();
      f.minResolution += " (altered to: " + h.width + "x" + h.height + ")";
      f.resolutionChangePolicy = "fixed-aspect-ratio";
    } else {
      f.resolutionChangePolicy = "variable";
    }
  }
  f.maxFrameRate = c.maxFrameRate;
  f.minLatency = c.minLatencyMillis;
  f.maxLatency = c.maxLatencyMillis;
  f.animatedLatency = c.animatedLatencyMillis;
  f.useDscp = c.dscpEnabled;
  f.useTdls = c.useTdls;
  null != b && (f.receiverVersion = b);
  null != a && (f.receiverProductName = a);
  e.length && (f.receiverStatusData = e);
  return f;
}, $o = function(a, b, c, e, f) {
  Zo.info("getRawEvents");
  return new Promise(function(h, k) {
    var p = function(b) {
      Zo.info("Got receiver version: " + b);
      b = JSON.stringify(Yo(c, b, e, f));
      chrome.cast.streaming.rtpStream.getRawEvents(a, b, h);
    };
    "Chromecast" == c ? fg(b).then(p, k) : p(null);
  });
}, ap = function(a, b, c, e) {
  Zo.info("getStats");
  return new Promise(function(f, h) {
    var k = function(b) {
      Zo.info("Got receiver version: " + b);
      var h = Yo(c, b, e, []);
      chrome.cast.streaming.rtpStream.getStats(a, function(a) {
        var b = {tags:h};
        Zb(b, a);
        f(b);
      });
    };
    "Chromecast" == c ? fg(b).then(k, h) : k(null);
  });
};
Uo.prototype.Ca = function() {
  return "mirror.cast.LogUtils";
};
Uo.prototype.getData = function() {
  return [void 0, {lastAutoSubmitMillis:this.vr}];
};
Uo.prototype.wb = function() {
  var a = ci(this);
  this.vr = a && a.lastAutoSubmitMillis || 0;
};
var Vo = null, Zo = D("mr.mirror.cast.LogUtils"), Xo = function() {
  this.ext = "MR";
  this.senderProductName = "Google Chrome";
  this.senderVersion = kk;
  this.senderPlatform = oc;
  this.senderUserAgent = $b || "";
};
var bp = function(a) {
  return a && a.getAudioTracks() && 0 < a.getAudioTracks().length ? a.getAudioTracks()[0] : null;
}, cp = function(a) {
  return a && a.getVideoTracks() && 0 < a.getVideoTracks().length ? a.getVideoTracks()[0] : null;
};
var dp = D("mr.NetworkUtils"), ep = function(a, b) {
  return ch ? new Promise(function(c, e) {
    chrome.networkingPrivate.setWifiTDLSEnabledState(a, b, function(a) {
      chrome.runtime.lastError ? (dp.v("Unable to set TDLS state: state = " + b + ", error = " + chrome.runtime.lastError.message), e("Unable to set TDLS state to " + b + ".")) : (dp.info("TDLS state changed: state = " + b + ", status = " + a), c(a));
    });
  }) : Promise.reject("TDLS feature not enabled.");
};
var fp = function(a) {
  this.Ej = a || fp.AW;
  this.xv = 0;
  this.ia = [];
};
fp.prototype.add = function(a) {
  this.ia.length < this.Ej ? this.ia.push(a) : (this.ia[this.xv] = a, this.xv = (this.xv + 1) % this.Ej);
};
fp.prototype.values = function() {
  var a = this, b = this.ia.length, c = this.xv, e = c, f = 0 != b;
  ca();
  ia();
  var h = {}, k = (h[Symbol.iterator] = function() {
    return k;
  }, h.next = function() {
    if (!f) {
      return {done:!0};
    }
    var h = a.ia[c];
    c = (c + 1) % b;
    f = c != e;
    return {done:!1, value:h};
  }, h);
  return k;
};
ba.Object.defineProperties(fp.prototype, {size:{configurable:!0, enumerable:!0, get:function() {
  return this.ia.length;
}}});
ba.Object.defineProperties(fp, {AW:{configurable:!0, enumerable:!0, get:function() {
  return 50;
}}});
var gp = {Ana:"OFFER", Pka:"ANSWER", Sna:"PRESENTATION", dma:"GET_STATUS", Loa:"STATUS_RESPONSE", cma:"GET_CAPABILITIES", ila:"CAPABILITIES_RESPONSE"};
var hp = function(a, b) {
  this.sessionId = a;
  this.seqNum = b;
  this.type = "PRESENTATION";
};
var ip = function() {
  this.capabilities = this.status = this.tg = this.error = this.result = this.type = this.seqNum = this.sessionId = null;
}, lp = function(a) {
  var b;
  try {
    if ("string" !== typeof a) {
      throw SyntaxError("Cannot parse non-string as JSON");
    }
    var c;
    jp(JSON.parse(a), function(a) {
      c = kp(a);
    }, function() {
      throw Error("non-Object result from JSON parse");
    });
    return c;
  } catch (e) {
    b = e instanceof SyntaxError ? "JSON parse error: " + e.message : "Type coercion error: " + e.message;
  }
  "string" == typeof a ? a = "a string: " + a : a instanceof ArrayBuffer ? (a = new Uint8Array(a), a = "an ArrayBuffer whose base64 is " + btoa(String.fromCharCode.apply(null, a))) : a = "of invalid data type " + typeof a;
  throw Error(b + ". Input was " + a);
}, kp = function(a) {
  var b = new ip;
  null != a.sessionId && (b.sessionId = String(a.sessionId));
  mp(a.seqNum, function(a) {
    b.seqNum = a;
  }, function() {
    throw Error('"seqNum" must be a number');
  });
  if ("type" in a) {
    for (var c = String(a.type).toUpperCase(), e = ka(Object.keys(gp)), f = e.next();!f.done;f = e.next()) {
      if (gp[f.value] == c) {
        b.type = c;
        break;
      }
    }
    if (!b.type) {
      throw Error('not a known message "type"');
    }
  }
  "result" in a && (b.result = String(a.result));
  jp(a.error, function(a) {
    b.error = np(a);
  }, function() {
    throw Error('"error" must be an Object');
  });
  jp(a.answer, function(a) {
    b.tg = op(a);
  }, function() {
    throw Error('"answer" must be an Object');
  });
  jp(a.status, function(a) {
    b.status = pp(a);
  }, function() {
    throw Error('"status" must be an Object');
  });
  "capabilities" in a || !("mediaCaps" in a || "keySystems" in a) || (a.capabilities = {}, "mediaCaps" in a && (a.capabilities.mediaCaps = a.mediaCaps), "keySystems" in a && (a.capabilities.keySystems = a.keySystems));
  jp(a.capabilities, function(a) {
    b.capabilities = qp(a);
  }, function() {
    throw Error('"capabilities" must be an Object');
  });
  return b;
}, jp = function(a, b, c) {
  void 0 !== a && (a instanceof Object ? b(a) : c());
}, mp = function(a, b, c) {
  void 0 !== a && ("number" !== typeof a ? c() : b(a));
}, rp = function(a, b, c) {
  void 0 !== a && (a instanceof Array && a.every(function(a) {
    return "number" === typeof a;
  }) ? b(a) : c());
}, sp = function(a, b, c) {
  void 0 !== a && (a instanceof Array ? b(a.map(function(a) {
    return String(a);
  })) : c());
}, tp = function() {
  this.xG = null;
  this.CS = [];
  this.Ps = [];
  this.VZ = this.ER = this.NW = null;
}, op = function(a) {
  var b = new tp;
  mp(a.udpPort, function(a) {
    b.xG = a;
  }, function() {
    throw Error('"answer.udpPort" must be a number');
  });
  rp(a.sendIndexes, function(a) {
    b.CS = a;
  }, function() {
    throw Error('"answer.sendIndexes" must be an array of numbers');
  });
  rp(a.ssrcs, function(a) {
    b.Ps = a;
  }, function() {
    throw Error('"answer.ssrcs" must be an array of numbers');
  });
  "IV" in a && (b.NW = String(a.IV));
  "receiverGetStatus" in a && (b.ER = "true" == String(a.receiverGetStatus).toLowerCase());
  "castMode" in a && (b.VZ = String(a.castMode));
  return b;
}, up = function() {
  this.details = this.description = this.code = null;
}, np = function(a) {
  var b = new up;
  mp(a.code, function(a) {
    b.code = a;
  }, function() {
    throw Error('"error.code" must be a number');
  });
  "description" in a && (b.description = String(a.description));
  jp(a.details, function(a) {
    b.details = a;
  }, function() {
    throw Error('"error.details" must be an Object');
  });
  return b;
}, vp = function() {
  this.TG = this.SG = null;
}, pp = function(a) {
  var b = new vp;
  mp(a.wifiSnr, function(a) {
    b.SG = a;
  }, function() {
    throw Error('"status.wifiSnr" must be a number');
  });
  rp(a.wifiSpeed, function(a) {
    b.TG = a;
  }, function() {
    throw Error('"status.wifiSpeed" must be an array of numbers');
  });
  return b;
}, wp = function() {
  this.M7 = this.C8 = null;
}, qp = function(a) {
  var b = new wp;
  sp(a.mediaCaps, function(a) {
    b.C8 = a;
  }, function() {
    throw Error('"capabilities.mediaCaps" must be an array');
  });
  if ("keySystems" in a) {
    a = a.keySystems;
    if (!(a instanceof Array)) {
      throw Error('"capabilities.keySystems" must be an array');
    }
    b.M7 = a.map(function(a) {
      var b;
      jp(a, function(a) {
        b = xp(a);
      }, function() {
        throw Error('"capabilities.keySystems" entries must be *Objects');
      });
      return b;
    });
  }
  return b;
}, yp = function() {
  this.H0 = this.cba = this.bba = this.aba = this.Vja = this.RY = this.zda = this.v_ = this.initDataTypes = this.L7 = null;
}, xp = function(a) {
  var b = new yp;
  "keySystemName" in a && (b.L7 = String(a.keySystemName));
  sp(a.initDataTypes, function(a) {
    b.initDataTypes = a;
  }, function() {
    throw Error('"capabilities.initDataTypes" must be an array');
  });
  sp(a.codecs, function(a) {
    b.v_ = a;
  }, function() {
    throw Error('"capabilities.codecs" must be an array');
  });
  sp(a.secureCodecs, function(a) {
    b.zda = a;
  }, function() {
    throw Error('"capabilities.secureCodecs" must be an array');
  });
  sp(a.audioRobustness, function(a) {
    b.RY = a;
  }, function() {
    throw Error('"capabilities.audioRobustness" must be an array');
  });
  sp(a.videoRobustness, function(a) {
    b.Vja = a;
  }, function() {
    throw Error('"capabilities.videoRobustness" must be an array');
  });
  "persistentLicenseSessionSupport" in a && (b.aba = String(a.persistentLicenseSessionSupport));
  "persistentReleaseMessageSessionSupport" in a && (b.bba = String(a.persistentReleaseMessageSessionSupport));
  "persistentStateSupport" in a && (b.cba = String(a.persistentStateSupport));
  "distinctiveIdentifierSupport" in a && (b.H0 = String(a.distinctiveIdentifierSupport));
  return b;
};
var zp = function(a, b) {
  this.address = a;
  this.port = b;
}, Ap = function(a, b, c) {
  Rh.call(this, b);
  this.a = D("mr.mirror.cast.Session");
  this.Ya = a;
  this.Id = Tg.Vu(b.id);
  this.H = b.$f.sessionId;
  this.tf = new zp(b.$f.BU, 2344);
  this.Lw = b.$f.CU;
  this.Ud = null;
  this.xk = !1;
  this.Nc = null;
  this.Hm = !1;
  this.kk = 0;
  this.Ka = this.Ip = this.Jp = null;
  this.lba = ["H264", "VP8"];
  this.EC = new Map;
  this.oI = null;
  this.rS = t(this.K$, this);
  this.qS = t(this.J$, this);
  this.Vq = null;
  this.bs = new fp(30);
  this.FR = !1;
  this.ik = c || null;
  this.rF = new si("mirror.cast.SeqNumGenerator");
  this.fe = this.Rg = null;
  this.ED = 0;
};
la(Ap, Rh);
d = Ap.prototype;
d.start = function(a) {
  var b = this, c = bp(a);
  a = cp(a);
  this.Rg = new fh("MediaRouter.CastStreaming.Session.Launch");
  this.Ka = new Oc;
  this.W6();
  this.Ya.useTdls && ep(this.tf.address, !0).then(function(a) {
    "Connected" != a && (b.Ya.useTdls = !1);
  }, function() {
    b.Ya.useTdls = !1;
  });
  chrome.cast.streaming.session.create(c, a, function(a, c, h) {
    b.Ud = a;
    b.Nc = c;
    b.kk = Za(h);
    b.Id.onMessage = t(b.uw, b);
    b.ED = 0;
    b.pF({type:"OFFER", sessionId:b.getId(), seqNum:b.rF.av(), offer:b.Zp()});
  });
  return this.Ka.promise;
};
d.stop = function() {
  this.fe && (this.fe.end(), this.fe = null);
  this.a.info("Stopping " + this.getId());
  null !== this.Ud && (chrome.cast.streaming.rtpStream.stop(this.Ud), chrome.cast.streaming.rtpStream.destroy(this.Ud), this.Ud = null, this.xk = !1);
  null !== this.Nc && (chrome.cast.streaming.rtpStream.stop(this.Nc), chrome.cast.streaming.rtpStream.destroy(this.Nc), this.Nc = null, this.Hm = !1);
  this.kk && (chrome.cast.streaming.udpTransport.destroy(this.kk), this.kk = 0);
  this.Ya.useTdls && ep(this.tf.address, !1);
  this.Ka && (this.Ka.resolve(this), this.Ka = null);
  chrome.cast.streaming.rtpStream.onStarted.removeListener(this.rS);
  chrome.cast.streaming.rtpStream.onError.removeListener(this.qS);
  null !== this.Vq && (window.clearTimeout(this.Vq), this.Vq = null);
  this.Jp = this.Ip = null;
  if (this.ik && this.ik.onSessionStop) {
    this.ik.onSessionStop(this.tf);
  }
  this.Id.ob();
  return Promise.resolve();
};
d.Qfa = function(a) {
  this.xk && chrome.cast.streaming.rtpStream.toggleLogging(Za(this.Ud), a);
  this.Hm && chrome.cast.streaming.rtpStream.toggleLogging(Za(this.Nc), a);
};
d.getLogs = function() {
  var a = this;
  if (!this.xk && !this.Hm) {
    return Promise.reject(Error("No streams has been started yet."));
  }
  var b = [];
  if (this.xk) {
    var c = $o(Za(this.Ud), this.tf.address, this.Lw, this.Ya, [].concat(ma(this.bs.values())));
    b.push(c);
  }
  this.Hm && (c = $o(Za(this.Nc), this.tf.address, this.Lw, this.Ya, [].concat(ma(this.bs.values()))), b.push(c));
  return Promise.all(b).then(function(b) {
    b = new Blob(b, {type:"application/gzip"});
    a.a.info("Events blob size: " + b.size);
    return b;
  });
};
d.getStats = function() {
  var a = [];
  if (this.xk) {
    var b = ap(Za(this.Ud), this.tf.address, this.Lw, this.Ya);
    a.push(b);
  }
  this.Hm && (b = ap(Za(this.Nc), this.tf.address, this.Lw, this.Ya), a.push(b));
  this.bs.size && a.push(Promise.resolve({receiverStatusData:[].concat(ma(this.bs.values()))}));
  return Promise.all(a).then(function(a) {
    var b = {};
    a.forEach(function(a) {
      Zb(b, a);
    });
    return b;
  });
};
d.P_ = function() {
  var a = chrome.cast.streaming.rtpStream.getSupportedParams(Za(this.Ud))[0];
  a.payload.channels = 2;
  a.payload.maxBitrate = this.Ya.audioBitrate;
  a.payload.maxFrameRate = 100;
  a.payload.maxLatency = this.Ya.maxLatencyMillis;
  a.payload.minLatency = this.Ya.minLatencyMillis;
  a.payload.animatedLatency = this.Ya.animatedLatencyMillis;
  a.payload.ssrc = Bp(1, 5e5);
  a.payload.clockRate = 48000;
  a.payload.feedbackSsrc = 2;
  a.payload.payloadType = 127;
  a.payload.aesKey = $a(this.Jp);
  a.payload.aesIvMask = $a(this.Ip);
  return a;
};
d.g0 = function() {
  var a = this, b = [];
  if (null === this.Nc) {
    return b;
  }
  var c = chrome.cast.streaming.rtpStream.getSupportedParams(Za(this.Nc));
  this.lba.forEach(function(e) {
    var f = c.find(function(a) {
      return a.payload.codecName.toLowerCase() == e.toLowerCase();
    });
    f && (f.payload.maxFrameRate = a.Ya.maxFrameRate, f.payload.minBitrate = a.Ya.minVideoBitrate, f.payload.maxBitrate = a.Ya.maxVideoBitrate, f.payload.maxLatency = a.Ya.maxLatencyMillis, f.payload.minLatency = a.Ya.minLatencyMillis, f.payload.animatedLatency = a.Ya.animatedLatencyMillis, f.payload.aesKey = $a(a.Jp), f.payload.aesIvMask = $a(a.Ip), f.payload.ssrc = Bp(500001, 1E6), f.payload.feedbackSsrc = 12, f.payload.payloadType = 96, b.push(f));
  });
  return b;
};
d.Zp = function() {
  var a = this, b = 0, c = [];
  if (this.Ud) {
    var e = this.P_();
    this.oI = e;
    e = {index:b, type:"audio_source", codecName:e.payload.codecName.toLowerCase(), rtpProfile:"cast", rtpPayloadType:e.payload.payloadType, ssrc:e.payload.ssrc, targetDelay:this.Ya.animatedLatencyMillis, aesKey:e.payload.aesKey, aesIvMask:e.payload.aesIvMask, bitRate:0 < e.payload.maxBitrate ? 1000 * e.payload.maxBitrate : 60 * e.payload.maxFrameRate + e.payload.clockRate * e.payload.channels, sampleRate:e.payload.clockRate, timeBase:"1/" + e.payload.clockRate, channels:e.payload.channels, rtpExtensions:["adaptive_playout_delay"]};
    this.Ya.enableLogging && Zb(e, {receiverRtcpEventLog:!0});
    this.Ya.dscpEnabled && Zb(e, {receiverRtcpDscp:46});
    c.push(e);
    b++;
  }
  this.g0().forEach(function(e) {
    var f = {index:b, type:"video_source", codecName:e.payload.codecName.toLowerCase(), rtpProfile:"cast", rtpPayloadType:e.payload.payloadType, ssrc:e.payload.ssrc, targetDelay:a.Ya.animatedLatencyMillis, aesKey:e.payload.aesKey, aesIvMask:e.payload.aesIvMask, maxFrameRate:Math.round(1000 * e.payload.maxFrameRate) + "/1000", timeBase:"1/90000", maxBitRate:e.payload.maxBitrate, resolutions:[{width:a.Ya.maxWidth, height:a.Ya.maxHeight}], rtpExtensions:["adaptive_playout_delay"]};
    a.Ya.enableLogging && Zb(f, {receiverRtcpEventLog:!0});
    a.Ya.dscpEnabled && Zb(f, {receiverRtcpDscp:46});
    c.push(f);
    a.EC.set(b, e);
    b++;
  });
  return {supportedStreams:c};
};
d.K$ = function(a) {
  a == this.Ud ? this.xk = !0 : a == this.Nc && (this.Hm = !0);
  this.xk && (null === this.Nc || this.Hm) && (this.Qfa(this.Ya.enableLogging), this.Ka && (this.Ka.resolve(this), this.Ka = null));
  this.fe = new kh("MediaRouter.CastStreaming.Session.Length");
};
d.J$ = function(a, b) {
  if (a == this.Ud) {
    this.a.v("Audio stream error " + b);
  } else {
    if (a == this.Nc) {
      this.a.v("Video stream error " + b);
    } else {
      this.a.v("Error for stream " + a + ": " + b);
      return;
    }
  }
  this.Ka && (this.Ka.reject(Error("Error for stream " + a + ": " + b)), this.Ka = null);
  this.stop();
};
d.Cia = function(a, b) {
  var c = this;
  this.a.L(function() {
    return "Starting streaming ... " + JSON.stringify({udpTransportId:c.kk, receiverIpEndPoint:c.tf, "audio ID":c.Ud, "video ID":c.Nc, "audio params":a, "video params":b});
  });
  if (va(chrome.cast.streaming.udpTransport.setOptions)) {
    var e = {};
    this.Ya.dscpEnabled && (this.a.info("Enable DSCP in sender."), e.DSCP = !0);
    chrome.cast.streaming.udpTransport.setOptions(this.kk, e);
  }
  chrome.cast.streaming.udpTransport.setDestination(this.kk, {address:this.tf.address, port:this.tf.port});
  chrome.cast.streaming.rtpStream.onStarted.addListener(this.rS);
  chrome.cast.streaming.rtpStream.onError.addListener(this.qS);
  a && chrome.cast.streaming.rtpStream.start(Za(this.Ud), a);
  b && chrome.cast.streaming.rtpStream.start(Za(this.Nc), b);
};
d.uw = function(a) {
  var b = this;
  if ("urn:x-cast:com.google.cast.webrtc" == a.namespace_) {
    var c, e = null;
    try {
      c = lp(a.data);
    } catch (k) {
      c = new ip, e = k.message;
    }
    if ("ANSWER" == c.type) {
      if ("ok" == c.result && c.tg) {
        c.tg.xG && (this.tf.port = c.tg.xG);
        this.FR = !!c.tg.ER;
        if (this.ik) {
          this.ik.onAnswer(this.tf);
        }
        this.Rg && (this.Rg.end(), this.Rg = null);
        this.a.info("Starting streaming");
        var f = this.oI, h = null;
        c.tg.CS.forEach(function(a) {
          f && 0 == a ? c.tg.Ps[a] && (f.payload.feedbackSsrc = c.tg.Ps[a]) : b.EC.has(a) && (h ? b.a.v("Receiver selected multiple video stream") : (h = b.EC.get(a), c.tg.Ps[a] && (h.payload.feedbackSsrc = c.tg.Ps[a])));
        });
        null !== this.Nc && null === h && (this.a.v("Receiver is capable of video, but did not specify a video stream index in the ANSWER message."), chrome.cast.streaming.rtpStream.destroy(this.Nc), this.Nc = null);
        if (f || h) {
          this.hN(), this.Cia(f, h), this.Ka && (this.Ka.resolve(this), this.Ka = null);
        }
      } else {
        this.Ka && (this.Ka.reject(Error("Non-OK answer received: " + JSON.stringify(c))), this.Ka = null), this.stop();
      }
    } else {
      "STATUS_RESPONSE" == c.type && c.status ? (a = {}, null != c.status.SG && (a.wifiSnr = c.status.SG), null != c.status.TG && (a.wifiSpeed = c.status.TG.pop()), e = {}, e[(new Date).toISOString()] = a, this.bs.add(e)) : (e || (e = "Ignoring message: " + JSON.stringify(c)), 10 > this.ED ? this.a.v(e) : this.a.L(e), ++this.ED);
    }
  }
};
d.W6 = function() {
  w(!this.Ip);
  w(!this.Jp);
  this.Ip = ti(window.crypto.getRandomValues(new Uint8Array(16)));
  this.Jp = ti(window.crypto.getRandomValues(new Uint8Array(16)));
};
var Bp = function(a, b) {
  w(a < b, "Expect low < upper");
  return Math.floor(Math.random() * (b - a)) + a;
};
d = Ap.prototype;
d.ES = function() {
  this.pF(this.m4());
};
d.pF = function(a) {
  w(null != a, "Expect non-null message");
  this.Id.sendMessage(a, {namespace:"urn:x-cast:com.google.cast.webrtc"});
};
d.hN = function() {
  this.Vq = null;
  this.kk && this.FR && (this.pF({type:"GET_STATUS", sessionId:this.getId(), seqNum:this.rF.av(), get_status:["wifiSnr", "wifiSpeed"]}), this.Vq = window.setTimeout(t(this.hN, this), 12E4));
};
d.m4 = function() {
  var a = new hp(this.H, this.rF.av());
  a.title = this.NE || void 0;
  a.icons = this.iconUrl && !this.Av ? [new chrome.cast.Image(this.iconUrl)] : [];
  return a;
};
d.getId = function() {
  return this.H;
};
var Cp = function() {
  Ph.call(this, "cast_streaming");
  this.ik = null;
};
la(Cp, Ph);
d = Cp.prototype;
d.getName = function() {
  return "cast_streaming";
};
d.cu = function(a, b) {
  return new Ap(a, b, this.ik);
};
d.Qw = function() {
  Qo(0);
};
d.Mw = function() {
  Qo(1);
};
d.HE = function() {
  Qo(2);
};
d.Nw = function() {
  nh("MediaRouter.CastStreaming.Session.End");
};
d.Ow = function(a) {
  oh("MediaRouter.CastStreaming.Start.Failure", a, qh);
};
d.Pw = function() {
  nh("MediaRouter.CastStreaming.Stream.End");
};
d.iz = function(a) {
  var b = this, c = a.getLogs().then(function(a) {
    return a;
  }, function(a) {
    b.w.v("Get cast streaming logs failed.", a);
  });
  a = a.getStats().then(function(a) {
    return a;
  }, function(a) {
    b.w.v("Get cast streaming stats failed.", a);
  });
  var e = new Promise(function(a) {
    chrome.metricsPrivate.getIsCrashReportingEnabled(a);
  });
  return Promise.all([c, a, e]).then(function(a) {
    var c = ka(a);
    a = c.next().value;
    var e = c.next().value, c = c.next().value;
    if (a) {
      var f = new FileReader;
      f.onloadend = function() {
        ii("mr.temp.mirror.cast.Service.mirrorLogs", f.result);
      };
      f.readAsBinaryString(a);
    }
    e && (window.localStorage["e2eTestService.castStreamingMirrorStats"] = JSON.stringify(e));
    c && (a && Wo().aia() ? To(a, void 0, b.u9.bind(b)) : e && So("stats.json", new Blob([JSON.stringify(e)], {type:"application/json"}), void 0, void 0));
  });
};
d.u9 = function(a) {
  a && (Wo().Ifa(Date.now()), window.localStorage["e2eTestService.castStreamingMirrorLogId"] = a);
};
d.$g = function(a) {
  var b = this;
  this.w.info("Received message to upload logs for " + a);
  return this.$a ? this.$a.getLogs().then(function(b) {
    return To(b, a);
  }, function(c) {
    b.w.v("Get cast streaming logs failed.", c);
    return b.TP(a);
  }) : Promise.resolve(this.TP(a));
};
d.TP = function(a) {
  var b = window.localStorage["mr.temp.mirror.cast.Service.mirrorLogs"];
  if (!b) {
    return "";
  }
  window.localStorage.removeItem("mr.temp.mirror.cast.Service.mirrorLogs");
  this.w.info("Uploading saved logs for feedback.");
  for (var c = new Uint8Array(b.length), e = 0;e < c.length;e++) {
    c[e] = b.charCodeAt(e);
  }
  return To(new Blob([c], {type:"application/gzip"}), a);
};
d.Eha = function(a) {
  this.ik = a;
};
var Dp = new Cp;
Nh("mr.mirror.cast.Service", Dp);

