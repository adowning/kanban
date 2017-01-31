'use strict';window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
var Uk = function(a, b) {
  this.type = a;
  this.entryPoint = b;
};
m("castApp.frontEnd.ExtensionMessage", Uk, void 0);
var Vk = function(a) {
  return "urn:x-cast:com.google.cast." + a;
}, Wk = Vk("tp.connection"), Xk = Vk("receiver"), Yk = Vk("remoting"), Zk = Vk("media"), $k = Vk("webrtc"), al = Vk("broadcast"), bl = Xb({Voa:Wk, Woa:Vk("tp.heartbeat"), $na:Xk, ioa:Yk, MEDIA:Zk, Vma:Vk("media.universalRemote.optIn"), qpa:$k, ala:al});
var cl = function(a) {
  return "available" == a || "available_rescan" == a;
};
var dl = function(a, b) {
  this.nd = this.Ch = this.Eh = this.gb = this.Ea = null;
  this.mf = new wi(pk.ea().yn(b), a);
  this.Td = {};
  this.zt = {};
  this.fp = !1;
};
d = dl.prototype;
d.mj = function() {
  return this.mf;
};
d.Fn = function() {
  return this.mf.friendlyName;
};
d.Xfa = function(a) {
  this.nd = a;
  return this;
};
d.getId = function() {
  return this.mf.id;
};
d.ox = function(a) {
  this.mf.id = a;
  return this;
};
d.tU = function(a) {
  this.fp = a;
  return this;
};
d.update = function(a) {
  if (this.getId() != a.getId()) {
    return !1;
  }
  var b = !1;
  this.mf.friendlyName != a.mf.friendlyName && (this.mf.friendlyName = a.mf.friendlyName, b = !0);
  this.Eh != a.Eh && (this.Eh = a.Eh, b = !0);
  this.Ch != a.Ch && (this.Ch = a.Ch, b = !0);
  this.Ea != a.Ea && (this.Ea = a.Ea, b = !0);
  this.gb != a.gb && (this.gb = a.gb, b = !0);
  return b;
};
d.Cfa = function(a) {
  this.Ea = a;
  return this;
};
d.vb = function() {
  return this.gb;
};
d.To = function(a) {
  this.gb = a;
  return this;
};
d.$ea = function(a) {
  this.Eh = a;
  return this;
};
d.Yea = function(a) {
  this.Ch = a;
  return this;
};
d.Nf = function(a) {
  return this.Td[a] || "unknown";
};
d.b2 = function(a) {
  return this.zt[a] || null;
};
d.us = function(a, b) {
  this.Td[a] = b;
  this.zt[a] = Date.now();
  return this;
};
d.$U = function() {
  return "name = " + this.mf.friendlyName + (this.Ea ? ", ip = " + this.Ea : "") + (this.nd ? ", model = " + this.nd : "") + ", apps = " + JSON.stringify(this.Td);
};
var el = function(a) {
  var b = new dl(a.mf.friendlyName, "");
  b.mf.id = a.mf.id;
  b.Ea = a.Ea;
  b.gb = a.gb;
  b.Eh = a.Eh;
  b.Ch = a.Ch;
  b.nd = a.nd;
  b.Td = a.Td;
  b.zt = a.zt;
  b.fp = a.fp;
  return b;
};
var fl = function(a, b, c, e, f, h) {
  a = pk.ea().yn(a);
  this.kg = new wi(a, b, this.BN(e));
  this.nd = c || null;
  this.re = e || null;
  this.Ea = f || null;
  this.gb = h || null;
  this.Td = {};
  this.qn = !1;
}, gl = function(a) {
  if (!a.nd || !a.Ea) {
    return null;
  }
  var b = new fl(a.mj().id, a.mj().friendlyName, a.nd, void 0, a.Ea, pk.ea().Xm || 8009);
  b.kg.id = a.mj().id;
  b.HF(!0);
  return b;
};
d = fl.prototype;
d.wja = function(a) {
  (a = this.update(a.Fn(), a.Ea, a.vb(), a.re)) && this.HF(!1);
  return a;
};
d.update = function(a, b, c, e) {
  var f = !1;
  this.kg.friendlyName != a && (this.kg.friendlyName = a, f = !0);
  null != b && this.Ea != b && (this.Ea = b, f = !0);
  null != c && this.gb != c && (this.gb = c, f = !0);
  null != e && this.re != e && (this.re = e, f = !0);
  return f;
};
d.mj = function() {
  return this.kg;
};
d.Fn = function() {
  return this.kg.friendlyName;
};
d.BN = function(a) {
  return a & 1 ? "cast" : a & 32 ? "cast_audio_group" : "cast_audio";
};
d.xea = function(a) {
  this.re = a;
  this.kg.iconType = this.BN(this.re);
};
d.getId = function() {
  return this.kg.id;
};
var hl = function(a) {
  var b = new fl("", a.friendlyName, a.modelName, a.capabilities, a.ip, a.port);
  b.kg.id = a.id;
  b.HF(a.discoveredByDial);
  b.Td = a.appStatusMap;
  for (var c in b.Td) {
    "unavailable" == b.Td[c] && (b.Td[c] = "unavailable_rescan");
  }
  return b;
};
d = fl.prototype;
d.vb = function() {
  return this.gb;
};
d.Nf = function(a) {
  return this.Td[a] || "unknown";
};
d.us = function(a, b) {
  this.Td[a] = b;
};
d.$U = function() {
  return "name = " + this.kg.friendlyName + (this.Ea ? ", ip = " + this.Ea : "") + (this.nd ? ", model = " + this.nd : "") + ", capabilities = " + this.re + ", apps = " + JSON.stringify(this.Td);
};
d.HF = function(a) {
  this.qn = a;
};
var il = {Nma:0, Ema:1}, jl = {lpa:0, qX:1, aoa:2}, kl = {DIAL:0, Rma:1, Sma:2, Fla:3}, ll = {sna:0, TIMEOUT:1, FAILED:2}, ml = {CH:0, Tka:1, wla:2, ama:3, qla:4, cna:5}, nl = {JW:0, SUCCESS:1}, ol = function(a) {
  oh("MediaRouter.Cast.Session.Ended", a, jl);
}, pl = function(a) {
  oh("MediaRouter.Cast.Channel.ConnectResult", a, nl);
}, ql = function(a) {
  oh("MediaRouter.Cast.Discovery.Type", a, kl);
}, rl = function(a) {
  oh("MediaRouter.Cast.Session.Fail", a, ll);
};
var sl = {serviceType:"_googlecast._tcp.local"}, tl = null, ul = function() {
  tl || (tl = new nj(7, "CastMdnsEventListener", "mr.cast.SinkDiscoveryService", chrome.mdns.onServiceList, sl));
  return tl;
}, vl = null, wl = function() {
  vl || (vl = $g() ? new nj(9, "CastNetworkListChangedEventListener", "mr.cast.SinkDiscoveryService", chrome.networkingPrivate.onNetworkListChanged) : new nj(8, "CastNetworksChangedEventListener", "mr.cast.SinkDiscoveryService", chrome.networkingPrivate.onNetworksChanged));
  return vl;
};
var xl = function(a, b) {
  this.he = b;
  this.JI = a;
  this.JI.ma = this.ma.bind(this);
  this.Md = new H;
  this.$o = new H;
  this.Nj = new H;
  this.qD = null;
  this.wr = this.Ij = "";
  this.kn = null;
  this.BC = this.kr = !1;
  this.EJ = [];
  this.a = D("mr.cast.SinkDiscoveryService");
  this.mu = new Set;
  this.Ag = {Sm:0, co:0};
  this.Zo = this.Ov = 0;
};
la(xl, Dh);
d = xl.prototype;
d.init = function() {
  ei(this);
  this.kr && (this.BP(), this.FK());
  Nh("mr.cast.SinkDiscoveryService", this);
};
d.BP = function() {
  this.a.info("Start listening to network changes");
  wl().addListener();
};
d.start = function() {
  var a = Date.now(), b = ul();
  if (b.ql()) {
    w(l(this.qD));
    if (6E4 > a - this.qD) {
      return;
    }
    this.a.info("Forcing mdns discovery");
    this.I1();
  } else {
    this.a.info("Adding mdns listener"), b.addListener();
  }
  this.qD = a;
};
d.I1 = function() {
  chrome.mdns.forceDiscovery(pa);
  var a = ul();
  a.removeListener();
  a.addListener();
};
d.handleEvent = function(a, b) {
  for (var c = [], e = 1;e < arguments.length;++e) {
    c[e - 1] = arguments[e];
  }
  if (a == chrome.mdns.onServiceList) {
    this.MR.apply(this, [].concat(ma(c)));
  } else {
    if (a == chrome.networkingPrivate.onNetworksChanged || a == chrome.networkingPrivate.onNetworkListChanged) {
      this.FK();
    } else {
      throw Error("Unhandled event");
    }
  }
};
d.d0 = function(a) {
  if (-1 == a.serviceName.indexOf("._googlecast.")) {
    return null;
  }
  var b = {};
  a.serviceData.forEach(function(a) {
    0 == a.search(/[a-z]{2}=.+/) && (b[a.substring(0, 2)] = a.substring(3));
  });
  var c = b.id;
  if (!c) {
    return this.a.v("Missing ID"), null;
  }
  pk.ea().yn(c);
  var e = Number(a.serviceHostPort.substring(a.serviceHostPort.indexOf(":") + 1));
  if (isNaN(e) || 0 > e || 65535 < e) {
    return this.a.v("Missing or invalid port"), null;
  }
  var f = b.fn;
  if (!f || !a.ipAddress) {
    return this.a.v("Missing friendly name or IP address"), null;
  }
  var h = Number(b.ca);
  return new fl(c, f, b.md || "", isNaN(h) ? 0 : h, a.ipAddress, e);
};
d.refresh = function() {
  this.a.L("Executing forceDiscovery.");
  chrome.mdns.forceDiscovery(pa);
};
d.MR = function(a) {
  var b = this;
  this.a.info("Registering " + a.length + " devices");
  0 != this.Zo && (clearTimeout(this.Zo), this.Zo = 0);
  a = this.e0(a).map(function(a) {
    return b.Hz(a, !0);
  });
  Mi(a).then(function() {
    b.Ag = {Sm:b.cC(), co:b.y3()};
    b.x8();
  });
};
d.x8 = function() {
  var a = this;
  0 != this.Zo || 36E5 > Date.now() - this.Ov || (this.Zo = setTimeout(function() {
    return a.M0();
  }, 5E3));
};
d.M0 = function() {
  var a = this.Ag;
  ph("MediaRouter.Cast.Discovery.KnownDevicesCount", a.co);
  ph("MediaRouter.Cast.Discovery.ConnectedDevicesCount", a.Sm);
  this.Ov = Date.now();
  this.Zo = 0;
};
d.y3 = function() {
  var a = this, b = this.mu.size;
  Ae(this.hl(), function(c) {
    a.mu.has(c.getId()) || b++;
  });
  return b;
};
d.jca = function(a) {
  this.MR(a);
  this.EJ = a;
};
d.Hz = function(a, b) {
  var c = this;
  if (this.Nj.Ra(a.getId())) {
    return Promise.resolve();
  }
  this.Nj.set(a.getId(), a);
  return this.Tp(a).then(function(e) {
    e ? (e = c.Md.get(a.getId()), b && (e ? e.qn && ql(3) : ql(1)), c.Fp(a)) : (c.a.info("Inaccessible sink: " + a.getId()), c.bm(a.getId()));
    c.Nj.remove(a.getId());
  });
};
d.m7 = function(a) {
  return void 0 != this.EJ.find(function(b) {
    return b.ipAddress == a.ipAddress;
  });
};
d.e0 = function(a) {
  var b = this, c = [];
  this.mu.clear();
  a.forEach(function(a) {
    if (!b.m7(a) && (a = b.d0(a))) {
      var e = a.getId();
      b.mu.add(e);
      if (b.Nj.Ra(e)) {
        var h = b.Nj.get(e);
        if (h.Ea == a.Ea && h.vb() == a.vb()) {
          b.a.info("Sink has pending connection " + e);
          return;
        }
        b.a.v("Pending sink changed ip " + e);
        b.Nj.remove(e);
      }
      (e = b.Md.get(e)) ? e.wja(a) && b.he.De(e) : c.push(a);
    }
  });
  return c;
};
d.QJ = function(a) {
  var b = this.Md.get(a.getId()), c = null, e = a.Ea, f = a.vb();
  null != e && null != f && (c = this.$o.get(e + ":" + f));
  if (b && !c) {
    var h = a.Ea, k = a.vb();
    h && k && this.$o.remove(h + ":" + k);
  }
  c && !b && this.Md.remove(c.getId());
  this.Md.set(a.getId(), a);
  null != e && null != f && this.$o.set(e + ":" + f, a);
};
d.Fp = function(a) {
  this.a.info("Adding sink " + a.getId());
  this.QJ(a);
  this.kr || (this.kr = !0, this.BP());
  this.he.Ml(a);
  pk.ea().Yl = new ok(a.nd, a.Ea);
};
d.ID = function(a) {
  this.a.info("Channel error for sink " + a);
  this.bm(a);
};
d.bm = function(a) {
  var b = this.Md.get(a);
  if (b) {
    this.a.info("Removing sink " + a);
    this.Md.remove(a);
    a = b.Ea;
    var c = b.vb();
    null != a && null != c && this.$o.remove(a + ":" + c);
    this.he.vw(b);
  }
};
d.vca = function() {
  var a = this.Md.T();
  this.Md.clear();
  this.$o.clear();
  a.forEach(this.he.vw, this.he);
};
d.Tp = function(a) {
  this.a.L("Checking access to " + a.getId());
  return this.JI.en(a).then(function(b) {
    if (a.qn) {
      var c = 4;
      b.audioOnly || (c |= 1);
      a.xea(c);
    }
    return !0;
  }, function() {
    return !1;
  });
};
d.Hw = function() {
  var a = this;
  this.a.info("Pruning inactive sinks.");
  Ae(this.hl(), function(b) {
    a.Nj.set(b.getId(), b);
    a.Tp(b).then(function(c) {
      c || a.bm(b.getId());
      a.Nj.remove(b.getId());
    });
  });
};
d.ma = function(a) {
  return this.Md.get(a, null);
};
d.V4 = function(a, b) {
  return this.$o.get(a + ":" + b);
};
d.W4 = function(a) {
  var b = [];
  Ae(this.hl(), function(c) {
    cl(c.Nf(a)) && b.push(c);
  });
  return b;
};
d.hl = function() {
  return this.Md.nC();
};
d.cC = function() {
  return this.Md.ja();
};
d.De = function(a) {
  w(null != this.ma(a.getId()));
  this.he.De(a);
};
d.ff = function() {
  return this.Md.T();
};
d.Ca = function() {
  return "cast.SinkDiscoveryService";
};
d.getData = function() {
  var a = this, b = {};
  Ae(this.Md.jM(), function(c) {
    var e;
    e = a.Md.get(c);
    e = {id:e.getId(), ip:e.Ea, port:e.vb(), friendlyName:e.Fn(), modelName:e.nd, capabilities:e.re, discoveredByDial:e.qn, appStatusMap:e.Td};
    b[c] = e;
  });
  return [new yl(b, this.wr, this.Ag), new zl(this.kr, this.Ov)];
};
d.wb = function() {
  var a = bi(this);
  a && 3 == a.version && (this.wr = a.networkIds, this.Ag = a.deviceCounts, this.Y6(a.sinkMap));
  if (a = ci(this)) {
    this.kr = a.hasSavedSinks, this.Ov = a.lastSinkCountMetricRecordTime || 0;
  }
};
d.Y6 = function(a) {
  this.BC = 0 < Object.keys(a).length;
  for (var b in a) {
    var c = hl(a[b]);
    this.ma(c.getId()) || this.QJ(c);
  }
  this.Hw();
};
d.i8 = function(a) {
  this.BC = 0 < Object.keys(a).length;
  for (var b in a) {
    var c = hl(a[b]);
    this.ma(c.getId()) || this.Hz(c, !1);
  }
};
d.FK = function() {
  var a = this;
  this.a.info("Fetching networks state");
  this.kn && ji(this.kn);
  chrome.networkingPrivate.getNetworks({networkType:"All", visible:!0, configured:!0}, function(b) {
    for (var c = [], e = 0;e < b.length;e++) {
      "Connected" == b[e].ConnectionState && c.push(b[e].GUID);
    }
    a.tja(c.sort().join(","));
  });
};
d.tja = function(a) {
  this.a.info(function() {
    return "Update current network " + Al(a);
  });
  a != this.Ij && (this.kn && (di.delete(this.kn.Ca()), this.kn = null), a ? (this.wr && a != this.wr ? this.vca() : this.Hw(), this.wr = this.Ij = a, this.kn = new Bl(this, this.Ij)) : this.Ij = "");
};
var Al = function(a) {
  for (var b = 0, c = 0;c < a.length;c++) {
    b += a.charCodeAt(c);
  }
  return b;
}, yl = function(a, b, c) {
  this.sinkMap = a;
  this.networkIds = b;
  this.deviceCounts = c;
  this.version = 3;
}, zl = function(a, b) {
  this.hasSavedSinks = a;
  this.lastSinkCountMetricRecordTime = b;
}, Bl = function(a, b) {
  this.xi = a;
  this.Ij = b;
  ei(this);
};
Bl.prototype.Ca = function() {
  return "cast.NetworkSink." + this.Ij;
};
Bl.prototype.getData = function() {
  var a = this, b = null, c = this.xi.getData();
  c && (this.xi.BC || 0 < this.xi.cC()) && (b = c[0]);
  this.xi.a.info(function() {
    return "Saving sink data for network " + Al(a.Ij);
  });
  return [null, b];
};
Bl.prototype.wb = function() {
  var a = this;
  this.xi.a.info(function() {
    return "Restoring sink data for network " + Al(a.Ij);
  });
  var b = ci(this);
  b && 3 == b.version && this.xi.i8(b.sinkMap);
};
var Cl = {STOP_MEDIA:"STOP", MEDIA_SET_VOLUME:"SET_VOLUME", MEDIA_GET_STATUS:"GET_STATUS"};
var Dl = function() {
  this.type = "GET_STATUS";
  this.requestId = 0;
};
var El = function(a, b, c) {
  this.type = "APPLICATION_BROADCAST";
  this.requestId = 0;
  this.appIds = a;
  this.namespace = b;
  this.message = c;
};
var Fl = function(a) {
  this.type = "LAUNCH";
  this.requestId = 0;
  this.appId = a;
  this.language = null;
};
var Gl = function(a) {
  this.type = "STOP";
  this.requestId = 0;
  this.sessionId = a || null;
};
var Hl = function(a, b) {
  this.requestId = a;
  this.bja = b;
  this.YU = null;
};
Hl.prototype.LD = function() {
};
var Il = function() {
  this.rc = new H;
};
Il.prototype.VH = function(a) {
  var b = this;
  this.rc.set(a.requestId, a);
  a.YU = setTimeout(function() {
    return b.S$(a);
  }, a.bja);
};
Il.prototype.hs = function(a) {
  var b = this.rc.get(a);
  if (!b) {
    return null;
  }
  clearTimeout(b.YU);
  this.rc.remove(a);
  return b;
};
Il.prototype.Vh = function(a) {
  return this.rc.get(a, null);
};
Il.prototype.S$ = function(a) {
  this.rc.remove(a.requestId);
  a.LD();
};
var Jl = function(a, b) {
  this.Wd = a;
  this.Je = b;
  this.Sl = new Il;
  this.dS = new si("cast.RequestIdGenerator");
};
d = Jl.prototype;
d.init = function() {
  this.dS.a1();
};
d.WH = function(a, b, c) {
  var e = this.dS.av();
  a.requestId = e;
  a = new Oc;
  b = new Kl(e, a, q(b) && 0 < b ? b : 6E5, c);
  this.Sl.VH(b);
  return b;
};
d.SE = function(a) {
  this.Sl.hs(a.requestId);
};
d.hs = function(a) {
  return this.Sl.hs(a);
};
d.sendRequest = function(a, b, c, e, f, h) {
  var k = this;
  if (!bl.hasOwnProperty(c)) {
    return Promise.reject(Error("Custom namespace is not supported"));
  }
  var p = this.WH(a, l(e) ? e : 3000, f), r = p.Pb;
  this.Wd.ax(b, c, a, f || this.Je, h).then(null, function() {
    k.SE(p);
    r.reject(Ll);
  });
  return r.promise;
};
d.sendMessage = function(a, b, c, e, f, h) {
  var k = this, p = this.WH(a, l(e) ? e : 3000, f), r = p.Pb;
  this.Wd.ax(b, c, a, f || this.Je, h).then(function() {
    k.SE(p);
    r.resolve(!0);
  }, function() {
    k.SE(p);
    r.reject(Ll);
  });
  return r.promise;
};
d.Oca = function(a, b) {
  var c = new Fl(a.appId);
  c.language = a.language ? a.language : chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : chrome.runtime.getManifest().default_locale;
  return this.sendRequest(c, b, Xk, a.requestSessionTimeout);
};
d.Pca = function(a, b) {
  return this.sendRequest(new Gl(a), b, Xk);
};
d.Cda = function(a, b) {
  return this.sendMessage(a, b, al);
};
var Ml = Error("Timeout"), Ll = Error("Failed to send message"), Kl = function(a, b, c, e) {
  Hl.call(this, a, c);
  this.Pb = b;
  this.sourceId = e;
};
la(Kl, Hl);
Kl.prototype.LD = function() {
  this.Pb.reject(Ml);
};
var Nl = function(a, b) {
  this.type = "cast_app";
  this.originId = window["castApp.eventPage.Message.OriginID"] || void 0;
  this.subtype = a;
  this.devices = b;
  this.logRecord = this.deviceJustSetUp = void 0;
};
m("castApp.eventPage.Message", Nl, void 0);
var Ol = function(a, b, c) {
  this.ipAddress = a;
  this.appId = b;
  this.sessionId = c;
};
Nl.DeviceData = Ol;
Nl.DeviceJustSetUp = function(a, b, c, e) {
  this.ipAddress = a;
  this.name = b;
  this.udn = c;
  this.modelName = e;
};
Nl.DeviceCapabilities = function() {
};
Nl.LogRecord = function(a, b, c, e) {
  this.levelValue = a;
  this.msg = b;
  this.loggerName = c;
  this.time = e;
};
var Pl = function(a, b) {
  this.sd = a;
  this.se = b;
  this.nn = new H;
  this.mn = new Ne;
  this.oP = 0;
  this.P8 = new H("serviceCheck", this.h6.bind(this), "startDeviceMonitor", this.u6.bind(this), "releaseDeviceMonitor", this.c6.bind(this), "deviceJustSetUp", this.I5.bind(this), "logRecord", this.R5.bind(this));
  chrome.runtime.onMessage.addListener(this.W5.bind(this));
  chrome.runtime.onMessageExternal.addListener(this.L5.bind(this));
  this.bh("serviceReady");
};
d = Pl.prototype;
d.a = D("castApp.eventPage.Service");
d.WW = 3E4;
d.o6 = function() {
  if (this.QI()) {
    var a = new Ne;
    Ae(this.sd.hl(), function(b) {
      var c = b.Ea;
      a.add(c);
      this.nn.Ra(c) || this.se.sendRequest(new Dl, b, Xk);
    }.bind(this));
    var b = !1;
    this.nn.ub().forEach(function(c) {
      a.contains(c) || (this.nn.remove(c), b = !0);
    }.bind(this));
    b && this.qz();
  }
};
d.C5 = function(a, b) {
  if (this.QI() && bl.hasOwnProperty(b.namespace_) && (a = a.Ea) && (b = JSON.parse(b.data), "RECEIVER_STATUS" === b.type)) {
    var c = b.status && b.status.applications && b.status.applications[0], e = b = null;
    c && (c.appId && (b = c.appId), c.sessionId && (e = c.sessionId));
    c = this.nn.get(a);
    this.nn.set(a, new Ol(a, b, e));
    c && c.appId === b || this.qz();
  }
};
d.QI = function() {
  if (0 === this.mn.ja()) {
    return !1;
  }
  var a = u();
  a - this.oP > this.WW && (this.oP = a, chrome.tabs.query({url:["chrome://cast/*", "chrome-extension://" + chrome.runtime.id + "/cast_setup/*"]}, function(a) {
    0 === a.length ? (this.a.info("No tabs found. Clearing device monitor clients."), this.mn.clear()) : this.a.info(function() {
      return "Tab check found active tabs: " + a.map(function(a) {
        return a.id;
      });
    });
  }.bind(this)));
  a = this.mn.ja();
  this.a.info("Monitor client count: " + a);
  return 0 < a;
};
d.W5 = function(a, b, c) {
  if ("object" !== typeof a || "cast_app" !== a.type) {
    return !1;
  }
  var e = this.P8.get(a.subtype);
  if (!e) {
    return !1;
  }
  if (!a.originId) {
    return Ya("Missing origin ID in the incoming message."), !1;
  }
  try {
    var f = e(a, b, c);
    f && c(f);
  } catch (h) {
    this.a.error("Error while handling request", h);
  }
  return !1;
};
d.bh = function(a, b) {
  var c = new Nl(a, b);
  this.a.L(function() {
    return "Sending message: " + JSON.stringify(c);
  });
  chrome.runtime.sendMessage(c);
};
d.h6 = function() {
  this.bh("serviceReady");
};
d.u6 = function(a) {
  this.mn.contains(w(a.originId)) ? this.a.info("Client: " + a.originId + "already registered, dispatching current device list.") : (this.a.info("Registering monitor client: " + a.originId), this.mn.add(w(a.originId)));
  this.qz();
  this.dca();
};
d.c6 = function(a) {
  this.a.info("Unregistering monitor client: " + a.originId);
  this.mn.remove(w(a.originId));
};
d.I5 = function(a) {
  a = w(a.deviceJustSetUp);
  var b = a.udn.replace(/-/g, "").toLowerCase(), c;
  a.capabilities && (c = (a.capabilities.audioOutSupported ? 4 : 0) | (a.capabilities.videoOutSupported ? 1 : 0));
  c = new fl(b, a.name, a.modelName, c, a.ipAddress, pk.ea().Xm || 8009);
  this.sd.Hz(c, !0);
};
d.R5 = function(a) {
  a = w(a.logRecord);
  Kc({level:Nc(a.levelValue), w:a.loggerName, time:a.time, message:a.msg});
};
d.qz = function() {
  var a = this.nn.T();
  this.bh("devices", a);
};
d.dca = function() {
  this.sd.refresh();
  this.sd.ff().forEach(function(a) {
    this.se.sendRequest(new Dl, a, Xk);
  }.bind(this));
};
d.L5 = function(a, b, c) {
  switch(a.type) {
    case "handshake":
      c(new Uk("handshake"));
      break;
    case "launch":
      b = b.tab && q(b.tab.id) ? b.tab.id : null, null === b || "setup" !== a.entryPoint && "offers" !== a.entryPoint && "devices" !== a.entryPoint || chrome.tabs.update(b, {url:"chrome://cast#" + a.entryPoint});
  }
};
chrome.cast.oh = {CUSTOM_CONTROLLER_SCOPED:"custom_controller_scoped", TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
m("chrome.cast.AutoJoinPolicy", chrome.cast.oh, void 0);
chrome.cast.mt = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
m("chrome.cast.DefaultActionPolicy", chrome.cast.mt, void 0);
chrome.cast.Ii = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in", MULTIZONE_GROUP:"multizone_group"};
m("chrome.cast.Capability", chrome.cast.Ii, void 0);
chrome.cast.ph = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
m("chrome.cast.ErrorCode", chrome.cast.ph, void 0);
chrome.cast.sX = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
m("chrome.cast.ReceiverAvailability", chrome.cast.sX, void 0);
chrome.cast.FX = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
m("chrome.cast.SenderPlatform", chrome.cast.FX, void 0);
chrome.cast.ot = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
m("chrome.cast.ReceiverType", chrome.cast.ot, void 0);
chrome.cast.EW = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
m("chrome.cast.DialAppState", chrome.cast.EW, void 0);
chrome.cast.Cp = {CAST:"cast", STOP:"stop"};
m("chrome.cast.ReceiverAction", chrome.cast.Cp, void 0);
chrome.cast.yH = {CONNECTED:"connected", DISCONNECTED:"disconnected", STOPPED:"stopped"};
m("chrome.cast.SessionStatus", chrome.cast.yH, void 0);
chrome.cast.uW = function(a, b, c, e, f) {
  this.sessionRequest = a;
  this.sessionListener = b;
  this.receiverListener = c;
  this.autoJoinPolicy = e || chrome.cast.oh.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.mt.CREATE_SESSION;
  this.customDialLaunchCallback = null;
  this.invisibleSender = !1;
  this.additionalSessionRequests = [];
};
m("chrome.cast.ApiConfig", chrome.cast.uW, void 0);
chrome.cast.GW = function(a, b) {
  this.appName = a;
  this.launchParameter = b || null;
};
m("chrome.cast.DialRequest", chrome.cast.GW, void 0);
chrome.cast.qH = function(a, b, c) {
  this.receiver = a;
  this.appState = b;
  this.extraData = c || null;
};
m("chrome.cast.DialLaunchData", chrome.cast.qH, void 0);
chrome.cast.FW = function(a, b) {
  this.doLaunch = a;
  this.launchParameter = b || null;
};
m("chrome.cast.DialLaunchResponse", chrome.cast.FW, void 0);
chrome.cast.xH = function(a, b, c) {
  this.appId = a;
  this.capabilities = ta(b) ? b : [chrome.cast.Ii.VIDEO_OUT, chrome.cast.Ii.AUDIO_OUT];
  this.requestSessionTimeout = c || chrome.cast.timeout.requestSession;
  this.dialRequest = this.language = null;
};
m("chrome.cast.SessionRequest", chrome.cast.xH, void 0);
chrome.cast.Gy = function(a, b, c, e) {
  this.label = a;
  a = b;
  Pa.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Ja, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Ka, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(La, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Ma, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Na, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Oa, "&#0;")));
  this.friendlyName = a;
  this.capabilities = c || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.ot.CAST;
  this.displayStatus = this.isActiveInput = null;
};
m("chrome.cast.Receiver", chrome.cast.Gy, void 0);
chrome.cast.tX = function(a, b) {
  this.statusText = a;
  this.appImages = b;
  this.showStop = null;
};
m("chrome.cast.ReceiverDisplayStatus", chrome.cast.tX, void 0);
chrome.cast.BH = function() {
  this.requestSession = 60000;
  this.sendCustomMessage = this.setReceiverVolume = this.stopSession = this.leaveSession = 3000;
};
m("chrome.cast.Timeout", chrome.cast.BH, void 0);
chrome.cast.timeout = new chrome.cast.BH;
m("chrome.cast.timeout", chrome.cast.timeout, void 0);
chrome.cast.tW = "auto-join";
chrome.cast.vH = "cast-session_";
chrome.cast.media.Bp = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
m("chrome.cast.media.MediaCommand", chrome.cast.media.Bp, void 0);
chrome.cast.media.Df = {GENERIC:0, MOVIE:1, TV_SHOW:2, MUSIC_TRACK:3, PHOTO:4};
m("chrome.cast.media.MetadataType", chrome.cast.media.Df, void 0);
chrome.cast.media.nt = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
m("chrome.cast.media.PlayerState", chrome.cast.media.nt, void 0);
chrome.cast.media.Hy = {OFF:"REPEAT_OFF", ALL:"REPEAT_ALL", SINGLE:"REPEAT_SINGLE", ALL_AND_SHUFFLE:"REPEAT_ALL_AND_SHUFFLE"};
m("chrome.cast.media.RepeatMode", chrome.cast.media.Hy, void 0);
chrome.cast.media.uX = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
m("chrome.cast.media.ResumeState", chrome.cast.media.uX, void 0);
chrome.cast.media.zH = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
m("chrome.cast.media.StreamType", chrome.cast.media.zH, void 0);
chrome.cast.media.OW = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
m("chrome.cast.media.IdleReason", chrome.cast.media.OW, void 0);
chrome.cast.media.SX = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
m("chrome.cast.media.TrackType", chrome.cast.media.SX, void 0);
chrome.cast.media.PX = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
m("chrome.cast.media.TextTrackType", chrome.cast.media.PX, void 0);
chrome.cast.media.LX = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
m("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.LX, void 0);
chrome.cast.media.QX = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
m("chrome.cast.media.TextTrackWindowType", chrome.cast.media.QX, void 0);
chrome.cast.media.MX = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
m("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.MX, void 0);
chrome.cast.media.NX = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
m("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.NX, void 0);
chrome.cast.media.LW = function() {
  this.customData = null;
};
m("chrome.cast.media.GetStatusRequest", chrome.cast.media.LW, void 0);
chrome.cast.media.eX = function() {
  this.customData = null;
};
m("chrome.cast.media.PauseRequest", chrome.cast.media.eX, void 0);
chrome.cast.media.gX = function() {
  this.customData = null;
};
m("chrome.cast.media.PlayRequest", chrome.cast.media.gX, void 0);
chrome.cast.media.DX = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
m("chrome.cast.media.SeekRequest", chrome.cast.media.DX, void 0);
chrome.cast.media.GX = function() {
  this.customData = null;
};
m("chrome.cast.media.StopRequest", chrome.cast.media.GX, void 0);
chrome.cast.media.VX = function(a) {
  this.volume = a;
  this.customData = null;
};
m("chrome.cast.media.VolumeRequest", chrome.cast.media.VX, void 0);
chrome.cast.media.RW = function(a) {
  this.type = "LOAD";
  this.requestId = 0;
  this.sessionId = null;
  this.media = a;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
m("chrome.cast.media.LoadRequest", chrome.cast.media.RW, void 0);
chrome.cast.media.Zna = function(a) {
  this.type = "PRECACHE";
  this.requestId = 0;
  this.data = a;
};
chrome.cast.media.IW = function(a, b) {
  this.requestId = 0;
  this.activeTrackIds = a || null;
  this.textTrackStyle = b || null;
};
m("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.IW, void 0);
chrome.cast.media.KW = function() {
  this.metadataType = this.type = chrome.cast.media.Df.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
m("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.KW, void 0);
chrome.cast.media.YW = function() {
  this.metadataType = this.type = chrome.cast.media.Df.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
m("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.YW, void 0);
chrome.cast.media.TX = function() {
  this.metadataType = this.type = chrome.cast.media.Df.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
m("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.TX, void 0);
chrome.cast.media.ZW = function() {
  this.metadataType = this.type = chrome.cast.media.Df.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
m("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.ZW, void 0);
chrome.cast.media.fX = function() {
  this.metadataType = this.type = chrome.cast.media.Df.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
m("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.fX, void 0);
chrome.cast.media.XW = function(a, b) {
  this.contentId = a;
  this.streamType = chrome.cast.media.zH.BUFFERED;
  this.contentType = b;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
m("chrome.cast.media.MediaInfo", chrome.cast.media.XW, void 0);
chrome.cast.media.iX = function(a) {
  this.itemId = null;
  this.media = a;
  this.autoplay = !0;
  this.startTime = 0;
  this.playbackDuration = null;
  this.preloadTime = 0;
  this.customData = this.activeTrackIds = null;
};
m("chrome.cast.media.QueueItem", chrome.cast.media.iX, void 0);
chrome.cast.media.BW = "CC1AD845";
m("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.BW, void 0);
chrome.cast.media.timeout = {};
m("chrome.cast.media.timeout", chrome.cast.media.timeout, void 0);
chrome.cast.media.timeout.load = 0;
chrome.cast.media.timeout.load = chrome.cast.media.timeout.load;
chrome.cast.media.timeout.Sa = 0;
chrome.cast.media.timeout.getStatus = chrome.cast.media.timeout.Sa;
chrome.cast.media.timeout.play = 0;
chrome.cast.media.timeout.play = chrome.cast.media.timeout.play;
chrome.cast.media.timeout.pause = 0;
chrome.cast.media.timeout.pause = chrome.cast.media.timeout.pause;
chrome.cast.media.timeout.seek = 0;
chrome.cast.media.timeout.seek = chrome.cast.media.timeout.seek;
chrome.cast.media.timeout.stop = 0;
chrome.cast.media.timeout.stop = chrome.cast.media.timeout.stop;
chrome.cast.media.timeout.Wo = 0;
chrome.cast.media.timeout.setVolume = chrome.cast.media.timeout.Wo;
chrome.cast.media.timeout.lA = 0;
chrome.cast.media.timeout.editTracksInfo = chrome.cast.media.timeout.lA;
chrome.cast.media.timeout.Dba = 0;
chrome.cast.media.timeout.queue = chrome.cast.media.timeout.Dba;
chrome.cast.media.RX = function(a, b) {
  this.trackId = a;
  this.trackContentType = this.trackContentId = null;
  this.type = b;
  this.customData = this.subtype = this.language = this.name = null;
};
m("chrome.cast.media.Track", chrome.cast.media.RX, void 0);
chrome.cast.media.OX = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
m("chrome.cast.media.TextTrackStyle", chrome.cast.media.OX, void 0);
chrome.cast.media.kX = function(a) {
  this.type = "QUEUE_LOAD";
  this.sessionId = this.requestId = null;
  this.items = a;
  this.startIndex = 0;
  this.repeatMode = chrome.cast.media.Hy.OFF;
  this.customData = null;
};
m("chrome.cast.media.QueueLoadRequest", chrome.cast.media.kX, void 0);
chrome.cast.media.hX = function(a) {
  this.type = "QUEUE_INSERT";
  this.sessionId = this.requestId = null;
  this.items = a;
  this.customData = this.insertBefore = null;
};
m("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.hX, void 0);
chrome.cast.media.oX = function(a) {
  this.type = "QUEUE_UPDATE";
  this.sessionId = this.requestId = null;
  this.items = a;
  this.customData = null;
};
m("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.oX, void 0);
chrome.cast.media.jX = function() {
  this.type = "QUEUE_UPDATE";
  this.customData = this.jump = this.currentItemId = this.sessionId = this.requestId = null;
};
m("chrome.cast.media.QueueJumpRequest", chrome.cast.media.jX, void 0);
chrome.cast.media.nX = function() {
  this.type = "QUEUE_UPDATE";
  this.customData = this.repeatMode = this.sessionId = this.requestId = null;
};
m("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.nX, void 0);
chrome.cast.media.lX = function(a) {
  this.type = "QUEUE_REMOVE";
  this.sessionId = this.requestId = null;
  this.itemIds = a;
  this.customData = null;
};
m("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.lX, void 0);
chrome.cast.media.mX = function(a) {
  this.type = "QUEUE_REORDER";
  this.sessionId = this.requestId = null;
  this.itemIds = a;
  this.customData = this.insertBefore = null;
};
m("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.mX, void 0);
chrome.cast.media.J = function(a, b) {
  this.sessionId = a;
  this.mediaSessionId = b;
  this.media = null;
  this.playbackRate = 1.0;
  this.playerState = chrome.cast.media.nt.IDLE;
  this.currentTime = 0.0;
  this.gP = -1;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Volume;
  this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
  this.repeatMode = chrome.cast.media.Hy.OFF;
};
m("chrome.cast.media.Media", chrome.cast.media.J, void 0);
chrome.cast.media.J.prototype.Sa = function() {
};
chrome.cast.media.J.prototype.getStatus = chrome.cast.media.J.prototype.Sa;
chrome.cast.media.J.prototype.play = function() {
  w(Ql);
};
chrome.cast.media.J.prototype.play = chrome.cast.media.J.prototype.play;
chrome.cast.media.J.prototype.hba = function() {
};
chrome.cast.media.J.prototype.playWithContext = chrome.cast.media.J.prototype.hba;
chrome.cast.media.J.prototype.pause = function() {
  w(Ql);
};
chrome.cast.media.J.prototype.pause = chrome.cast.media.J.prototype.pause;
chrome.cast.media.J.prototype.$aa = function() {
};
chrome.cast.media.J.prototype.pauseWithContext = chrome.cast.media.J.prototype.$aa;
chrome.cast.media.J.prototype.seek = function() {
};
chrome.cast.media.J.prototype.seek = chrome.cast.media.J.prototype.seek;
chrome.cast.media.J.prototype.stop = function() {
};
chrome.cast.media.J.prototype.stop = chrome.cast.media.J.prototype.stop;
chrome.cast.media.J.prototype.Wo = function() {
};
chrome.cast.media.J.prototype.setVolume = chrome.cast.media.J.prototype.Wo;
chrome.cast.media.J.prototype.lA = function() {
};
chrome.cast.media.J.prototype.editTracksInfo = chrome.cast.media.J.prototype.lA;
chrome.cast.media.J.prototype.Gba = function() {
};
chrome.cast.media.J.prototype.queueInsertItems = chrome.cast.media.J.prototype.Gba;
chrome.cast.media.J.prototype.Eba = function() {
};
chrome.cast.media.J.prototype.queueAppendItem = chrome.cast.media.J.prototype.Eba;
chrome.cast.media.J.prototype.Qba = function() {
};
chrome.cast.media.J.prototype.queueUpdateItems = chrome.cast.media.J.prototype.Qba;
chrome.cast.media.J.prototype.Lba = function() {
};
chrome.cast.media.J.prototype.queuePrev = chrome.cast.media.J.prototype.Lba;
chrome.cast.media.J.prototype.Kba = function() {
};
chrome.cast.media.J.prototype.queueNext = chrome.cast.media.J.prototype.Kba;
chrome.cast.media.J.prototype.Hba = function(a) {
  this.kB(a);
};
chrome.cast.media.J.prototype.queueJumpToItem = chrome.cast.media.J.prototype.Hba;
chrome.cast.media.J.prototype.Pba = function() {
};
chrome.cast.media.J.prototype.queueSetRepeatMode = chrome.cast.media.J.prototype.Pba;
chrome.cast.media.J.prototype.Nba = function() {
};
chrome.cast.media.J.prototype.queueRemoveItems = chrome.cast.media.J.prototype.Nba;
chrome.cast.media.J.prototype.Mba = function(a) {
  this.kB(a);
};
chrome.cast.media.J.prototype.queueRemoveItem = chrome.cast.media.J.prototype.Mba;
chrome.cast.media.J.prototype.Oba = function() {
};
chrome.cast.media.J.prototype.queueReorderItems = chrome.cast.media.J.prototype.Oba;
chrome.cast.media.J.prototype.Jba = function(a, b, c, e) {
  a = this.kB(a);
  0 > a || (0 > b ? e && e(new chrome.cast.Error(chrome.cast.ph.INVALID_PARAMETER)) : a == b && c && c());
};
chrome.cast.media.J.prototype.queueMoveItemToNewIndex = chrome.cast.media.J.prototype.Jba;
chrome.cast.media.J.prototype.Sia = function(a) {
  return -1 < this.supportedMediaCommands.indexOf(a);
};
chrome.cast.media.J.prototype.supportsCommand = chrome.cast.media.J.prototype.Sia;
chrome.cast.media.J.prototype.f3 = function() {
  if (this.playerState == chrome.cast.media.nt.PLAYING && 0 <= this.gP) {
    var a = this.currentTime + (Date.now() - this.gP) / 1000 * this.playbackRate;
    this.media && null != this.media.duration && a > this.media.duration && (a = this.media.duration);
    0 > a && (a = 0);
    return a;
  }
  return this.currentTime;
};
chrome.cast.media.J.prototype.getEstimatedTime = chrome.cast.media.J.prototype.f3;
chrome.cast.media.J.prototype.Uy = function() {
  w(Ql);
};
chrome.cast.media.J.prototype.addUpdateListener = chrome.cast.media.J.prototype.Uy;
chrome.cast.media.J.prototype.Vy = function() {
};
chrome.cast.media.J.prototype.addUpdateListenerWithContext = chrome.cast.media.J.prototype.Vy;
chrome.cast.media.J.prototype.TE = function() {
  w(Ql);
};
chrome.cast.media.J.prototype.removeUpdateListener = chrome.cast.media.J.prototype.TE;
chrome.cast.media.J.prototype.UE = function() {
};
chrome.cast.media.J.prototype.removeUpdateListenerWithContext = chrome.cast.media.J.prototype.UE;
chrome.cast.media.J.prototype.kB = function(a) {
  return mb(this.items, function(b) {
    return b.itemId == a;
  });
};
var Rl = function(a, b, c) {
  this.sessionId = a;
  this.namespaceName = b;
  this.message = c;
};
var Sl = function(a) {
  this.se = a;
  this.a = D("mr.cast.ReceiverStatusQuerier");
};
Sl.prototype.zia = function(a) {
  var b = this;
  return (new Pe(t(this.Cba, this, a), 3500, 5)).gx(2).start().then(null, function(c) {
    b.a.info("Failed to get receiver status from " + a.getId());
    throw c;
  });
};
Sl.prototype.Cba = function(a) {
  this.a.info("Query receiver status: " + a.getId());
  return this.se.sendRequest(new Dl, a, Xk);
};
var Ql = null;
var Tl = function(a, b) {
  this.type = "SET_VOLUME";
  this.requestId = 0;
  this.volume = a;
  this.expectedVolume = b || null;
};
chrome.cast.M = function(a, b, c, e, f) {
  this.sessionId = a;
  this.appId = b;
  this.displayName = c;
  this.statusText = null;
  this.appImages = e;
  this.receiver = f;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.yH.CONNECTED;
  this.transportId = "";
};
m("chrome.cast.Session", chrome.cast.M, void 0);
chrome.cast.M.prototype.Oga = function(a, b, c) {
  this.dU(w(Ql), a, b, c);
};
chrome.cast.M.prototype.setReceiverVolumeLevel = chrome.cast.M.prototype.Oga;
chrome.cast.M.prototype.dU = function(a, b, c, e) {
  b = new Tl(new chrome.cast.Volume(b, null), this.receiver.volume);
  a.setReceiverVolume(this.sessionId, b, c, e);
};
chrome.cast.M.prototype.setReceiverVolumeLevelWithContext = chrome.cast.M.prototype.dU;
chrome.cast.M.prototype.Nga = function(a, b, c) {
  this.cU(w(Ql), a, b, c);
};
chrome.cast.M.prototype.setReceiverMuted = chrome.cast.M.prototype.Nga;
chrome.cast.M.prototype.cU = function(a, b, c, e) {
  a = new Tl(new chrome.cast.Volume(null, b), this.receiver.volume);
  Ql.setReceiverVolume(this.sessionId, a, c, e);
};
chrome.cast.M.prototype.setReceiverMutedWithContext = chrome.cast.M.prototype.cU;
chrome.cast.M.prototype.leave = function(a, b) {
  Ql.leaveSession(this.sessionId, a, b);
};
chrome.cast.M.prototype.leave = chrome.cast.M.prototype.leave;
chrome.cast.M.prototype.stop = function() {
  w(Ql);
};
chrome.cast.M.prototype.stop = chrome.cast.M.prototype.stop;
chrome.cast.M.prototype.Kia = function() {
};
chrome.cast.M.prototype.stopWithContext = chrome.cast.M.prototype.Kia;
chrome.cast.M.prototype.sendMessage = function() {
  w(Ql);
};
chrome.cast.M.prototype.sendMessage = chrome.cast.M.prototype.sendMessage;
chrome.cast.M.prototype.Lda = function() {
};
chrome.cast.M.prototype.sendMessageWithContext = chrome.cast.M.prototype.Lda;
chrome.cast.M.prototype.Uy = function() {
  w(Ql);
};
chrome.cast.M.prototype.addUpdateListener = chrome.cast.M.prototype.Uy;
chrome.cast.M.prototype.Vy = function() {
};
chrome.cast.M.prototype.addUpdateListenerWithContext = chrome.cast.M.prototype.Vy;
chrome.cast.M.prototype.TE = function() {
  w(Ql);
};
chrome.cast.M.prototype.removeUpdateListener = chrome.cast.M.prototype.TE;
chrome.cast.M.prototype.UE = function() {
};
chrome.cast.M.prototype.removeUpdateListenerWithContext = chrome.cast.M.prototype.UE;
chrome.cast.M.prototype.oY = function() {
  w(Ql);
};
chrome.cast.M.prototype.addMessageListener = chrome.cast.M.prototype.oY;
chrome.cast.M.prototype.pY = function() {
};
chrome.cast.M.prototype.addMessageListenerWithContext = chrome.cast.M.prototype.pY;
chrome.cast.M.prototype.PH = function(a) {
  this.QH(w(Ql), a);
};
chrome.cast.M.prototype.addMediaListener = chrome.cast.M.prototype.PH;
chrome.cast.M.prototype.QH = function(a, b) {
  a.PH(this.sessionId, b);
};
chrome.cast.M.prototype.addMediaListenerWithContext = chrome.cast.M.prototype.QH;
chrome.cast.M.prototype.XR = function(a) {
  this.YR(w(Ql), a);
};
chrome.cast.M.prototype.removeMediaListener = chrome.cast.M.prototype.XR;
chrome.cast.M.prototype.YR = function(a, b) {
  a.XR(this.sessionId, b);
};
chrome.cast.M.prototype.removeMediaListenerWithContext = chrome.cast.M.prototype.YR;
chrome.cast.M.prototype.Dca = function() {
  w(Ql);
};
chrome.cast.M.prototype.removeMessageListener = chrome.cast.M.prototype.Dca;
chrome.cast.M.prototype.Eca = function() {
};
chrome.cast.M.prototype.removeMessageListenerWithContext = chrome.cast.M.prototype.Eca;
chrome.cast.M.prototype.e8 = function(a) {
  a.sessionId = this.sessionId;
};
chrome.cast.M.prototype.loadMedia = chrome.cast.M.prototype.e8;
chrome.cast.M.prototype.Iba = function(a) {
  a.sessionId = this.sessionId;
};
chrome.cast.M.prototype.queueLoad = chrome.cast.M.prototype.Iba;
var Wl = function(a, b) {
  if (!b.applications || 1 != b.applications.length) {
    return null;
  }
  var c = b.applications[0];
  a = Ul(a);
  a = new chrome.cast.M(c.sessionId, c.appId, c.displayName, c.appImages, a);
  a.senderApps = c.senderApps;
  a.namespaces = c.namespaces || [];
  a.transportId = c.transportId;
  a.statusText = c.statusText;
  if (!a.sessionId || !(a.namespaces && 0 != a.namespaces.length || Vl(a))) {
    return null;
  }
  a.receiver.volume = b.volume;
  "boolean" == typeof b.isActiveInput && (a.receiver.isActiveInput = b.isActiveInput);
  return a;
}, Xl = function(a) {
  var b = [];
  if (!a) {
    return b;
  }
  a & 1 && b.push(chrome.cast.Ii.VIDEO_OUT);
  a & 2 && b.push(chrome.cast.Ii.VIDEO_IN);
  a & 4 && b.push(chrome.cast.Ii.AUDIO_OUT);
  a & 8 && b.push(chrome.cast.Ii.AUDIO_IN);
  a & 32 && b.push(chrome.cast.Ii.MULTIZONE_GROUP);
  return b;
}, Ul = function(a) {
  return new chrome.cast.Gy(a.getId(), a.Fn(), Xl(a.re));
}, Yl = function(a, b) {
  if (a.statusText != b.statusText) {
    return !0;
  }
  var c = a.namespaces || [], e = b.namespaces || [];
  if (c.length != e.length) {
    return !0;
  }
  for (var f = {index:0};f.index < c.length;f = {index:f.index}, f.index++) {
    if (!e.some(function(a) {
      return function(b) {
        return b.name == c[a.index].name;
      };
    }(f))) {
      return !0;
    }
  }
  return a.receiver.volume.level !== b.receiver.volume.level || a.receiver.volume.muted !== b.receiver.volume.muted ? !0 : !1;
}, Zl = function(a) {
  ta(a) ? a.forEach(Zl) : wa(a) && Object.keys(a).forEach(function(b) {
    null === a[b] ? delete a[b] : (wa(a[b]) || ta(a[b])) && Zl(a[b]);
  });
}, $l = function(a, b) {
  return a.namespaces.some(function(a) {
    return a.name == b;
  });
}, am = ["MultizoneLeader", "MultizoneFollower"], Vl = function(a) {
  return null !== a && "MultizoneLeader" == a.appId;
}, bm = function(a) {
  return "E8C28D3C" == a || "00000000-0000-0000-0000-000000000000" == a;
};
var cm = function(a) {
  this.se = a;
  this.a = D("mr.cast.SessionLauncher");
};
cm.prototype.fD = function(a, b) {
  oh("MediaRouter.Cast.Session.Type", 0, il);
  return this.se.Oca(a, b).then(this.O5.bind(this, b), function(a) {
    a && Ml == a ? rl(1) : rl(0);
    throw a;
  });
};
cm.prototype.O5 = function(a, b) {
  this.a.L("Got launch result from " + a.getId());
  if ("LAUNCH_ERROR" == b.type) {
    throw rl(2), Error(b.reason);
  }
  a = Wl(a, b.status);
  this.a.info("Launched session: " + a.sessionId);
  return a;
};
var dm = function(a, b, c, e) {
  this.type = a;
  this.message = b;
  this.sequenceNumber = l(c) ? c : -1;
  this.timeoutMillis = e || 0;
  this.clientId = "";
};
var em = function(a, b) {
  this.Oj = a;
  this.gc = b;
  this.DP = [];
  this.Sl = new Il;
};
d = em.prototype;
d.UB = function(a) {
  return (a = this.gc.be(a)) ? a.routeId : null;
};
d.listen = function(a, b) {
  this.DP[a] = b;
};
d.Fc = function(a, b, c) {
  fm.L("Sending to " + b);
  fm.L(JSON.stringify(c));
  c.clientId = b;
  this.Oj.D0(a, c);
};
d.$j = function(a, b) {
  var c = this, e = this.gc.be(a);
  e && e.JC ? this.Fc(e.routeId, a, b) : this.connect(a).then(function(e) {
    e ? (e = c.UB(a)) ? c.Fc(e, a, b) : fm.v("No route for " + a) : fm.v("No connected client " + a);
  }, null);
};
d.Pr = function(a) {
  fm.L("App " + a);
  var b = this.gc.be(a);
  b ? (b.JC = !0, (a = this.Sl.hs(b.routeId)) && a.Pb.resolve(!0)) : fm.v("Client not found " + a);
};
d.m9 = function(a) {
  fm.L("Received: " + a);
  a = JSON.parse(a);
  var b = a.clientId;
  "client_connect" == a.type ? this.Pr(b) : this.UB(b) ? (b = this.DP[a.type]) && b(a) : fm.v("No route for " + b);
};
d.connect = function(a) {
  if (this.l7(a)) {
    return Promise.resolve(!0);
  }
  var b = this.UB(a);
  if (!b) {
    return fm.v("No route for client " + a), Promise.resolve(!1);
  }
  if (a = this.Sl.Vh(b)) {
    return a.Pb.promise;
  }
  a = new Oc;
  this.Sl.VH(new gm(b, a));
  return a.promise;
};
d.l7 = function(a) {
  a = this.gc.be(a);
  return null != a && a.JC;
};
var fm = D("mr.cast.ApiMessenger"), gm = function(a, b) {
  Hl.call(this, a, 3E4);
  this.Pb = b;
};
la(gm, Hl);
gm.prototype.LD = function() {
  this.Pb.resolve(!1);
};
var hm = function(a, b, c, e, f, h, k, p, r, A) {
  this.bz = a;
  this.Ve = b || null;
  this.Et = c || null;
  this.ju = e || null;
  this.Rv = l(f) ? f : null;
  this.cz = h || null;
  this.LJ = k || null;
  this.GC = p || !1;
  this.sz = r || null;
  this.rz = A || null;
}, im = function(a, b) {
  return (a = a.match(b + "=([^/]*)")) ? a[1] : null;
}, km = function(a) {
  a = a.match(/__castAppId__=([^/]*)/g);
  return null == a ? [] : jb(y(a, function(a) {
    a = im(a, "__castAppId__");
    if (!a) {
      return null;
    }
    a = a.match(jm);
    if (!a || 0 == a.length) {
      return null;
    }
    var b = [];
    3 == a.length && a[2] && (b = a[2].split(","));
    return {appId:a[1], capabilities:b};
  }), function(a) {
    return null != a;
  });
}, lm = function(a) {
  return im(a, "__castClientId__");
};
d = hm.prototype;
d.tq = function() {
  return y(this.bz, function(a) {
    return a.appId;
  });
};
d.JK = function() {
  return this.cz;
};
d.dd = function() {
  return this.Ve;
};
d.GA = function() {
  return this.Et ? this.Et : chrome.cast.oh.TAB_AND_ORIGIN_SCOPED;
};
d.N2 = function() {
  return this.ju ? this.ju : chrome.cast.mt.CREATE_SESSION;
};
d.A3 = function() {
  return null == this.Rv ? chrome.cast.timeout.requestSession : this.Rv;
};
d.toString = function() {
  var a = new Yj;
  a.yx("https");
  a.Po("google.com");
  a.Ai("/cast");
  var b = [];
  x(this.bz, function(a) {
    var c = "__castAppId__=" + a.appId;
    a.capabilities && 0 < a.capabilities.length && (c = c + "(" + a.capabilities.join(","), c += ")");
    b.push(c);
  });
  this.Ve && b.push("__castClientId__=" + this.Ve);
  this.Et && b.push("__castAutoJoinPolicy__=" + this.Et);
  this.ju && b.push("__castDefaultActionPolicy__=" + this.ju);
  null != this.Rv && b.push("__castLaunchTimeout__=" + this.Rv);
  this.cz && b.push("__dialAppName__=" + this.cz);
  this.LJ && b.push("__dialPostData__=" + this.LJ);
  this.GC && b.push("__castInvisibleSender__=true");
  this.sz && (b.push("__castBroadcastNamespace__=" + this.sz), b.push("__castBroadcastId__=" + Math.random()));
  this.rz && b.push("__castBroadcastMessage__=" + encodeURIComponent(JSON.stringify(this.rz)));
  a.mx(b.join("/"));
  return a.toString();
};
d.C7 = function(a) {
  var b = this.tq(), c = mm(a);
  return kb(b, function(a) {
    return pb(c, a);
  });
};
var nm = function(a) {
  a = new Yj(a);
  if ("https" != a.wi || "google.com" != a.ij() || "/cast" != a.Vc()) {
    return null;
  }
  var b = a.Uk;
  a = km(b);
  if (!a || 0 == a.length) {
    return null;
  }
  var c = lm(b), e = im(b, "__castAutoJoinPolicy__"), f = im(b, "__castDefaultActionPolicy__"), h;
  h = im(b, "__castLaunchTimeout__");
  null == h ? h = null : (h = Number(h), h = !isNaN(h) && 0 <= h ? h : null);
  var k = im(b, "__dialAppName__"), p = im(b, "__dialPostData__"), r = im(b, "__castInvisibleSender__"), r = null === r ? null : "true" == r, A = im(b, "__castBroadcastNamespace__"), b = (b = im(b, "__castBroadcastMessage__")) ? JSON.parse(decodeURIComponent(b)) : null;
  return new hm(a, c, e, f, h, k, p, r, A, b);
}, mm = function(a) {
  return (a = nm(a)) ? a.tq() : null;
}, om = function(a) {
  return (a = nm(a)) ? a.dd() : null;
}, jm = /(^\w+)(?:\(([\w,\ ]*)\))?$/;
var pm = function(a, b, c, e, f, h) {
  this.si = a;
  this.qa = b;
  this.gc = c;
  this.Ja = e;
  this.Wd = f;
  this.Oj = h;
  this.Ue = new em(h, c);
  this.Xba = new Sl(this.si);
  this.Yda = new cm(this.si);
};
d = pm.prototype;
d.init = function() {
  this.gc.init();
  this.Ue.listen("v2_message", this.V$.bind(this));
  this.Ue.listen("app_message", this.r9.bind(this));
  this.Ue.listen("leave_session", this.a$.bind(this));
};
d.ag = function(a, b) {
  this.Ue.m9(b);
};
d.DS = function(a, b, c) {
  var e = this;
  this.Ja.hL(a).slice().forEach(function(a) {
    a != c && e.nF(a, b);
  });
};
d.nF = function(a, b) {
  b.clientId = a;
  this.Ue.$j(a, b);
};
d.HS = function(a, b, c) {
  b = {receiver:Ul(b), action:c};
  this.nF(a, new dm("receiver_action", b));
};
d.V$ = function(a) {
  var b = a.message, c = b.sessionId;
  if (c) {
    var e = this.Ja.aC(c);
    if (e) {
      if (c = this.Ja.CN(c)) {
        if (c = this.qa.ma(c)) {
          switch(b.type) {
            case "STOP":
              this.o9(a, c);
              break;
            case "LOAD":
            case "PAUSE":
            case "PLAY":
            case "SEEK":
            case "STOP_MEDIA":
            case "MEDIA_SET_VOLUME":
            case "MEDIA_GET_STATUS":
            case "EDIT_TRACKS_INFO":
            case "QUEUE_LOAD":
            case "QUEUE_INSERT":
            case "QUEUE_UPDATE":
            case "QUEUE_REMOVE":
            case "QUEUE_REORDER":
            case "PRECACHE":
              this.l9(a, c, e);
              break;
            case "SET_VOLUME":
              this.n9(a, c);
              break;
            default:
              qm.v("Unknown request");
          }
        } else {
          this.Ko(a, chrome.cast.ph.INVALID_PARAMETER, "No receiver");
        }
      } else {
        this.Ko(a, chrome.cast.ph.INVALID_PARAMETER, "No sink ID");
      }
    } else {
      this.Ko(a, chrome.cast.ph.INVALID_PARAMETER, "Unknown session ID");
    }
  } else {
    this.Ko(a, chrome.cast.ph.INVALID_PARAMETER, "No session ID");
  }
};
d.Ko = function(a, b, c) {
  b = new chrome.cast.Error(b, c);
  this.mF(a, b);
};
d.mF = function(a, b) {
  this.Ue.$j(a.clientId, new dm("error", b, a.sequenceNumber));
};
d.o9 = function(a, b) {
  var c = this, e = a.message;
  nh("MediaRouter.Cast.Session.End");
  var f = e.sessionId, h = this.Ja.Sf(f);
  h && (h.Ev = !0);
  h = function() {
    c.Eo(f, a);
  };
  this.si.sendRequest(e, b, Xk, a.timeoutMillis, $a(a.clientId)).then(h, h);
};
d.l9 = function(a, b, c) {
  var e = this, f = a.message, h = f.type;
  h in Cl && (f.type = Cl[h]);
  this.si.sendRequest(f, b, Zk, a.timeoutMillis, a.clientId, c.transportId).then(function(b) {
    e.uR(c, b);
    e.Ue.$j(a.clientId, new dm("v2_message", b, a.sequenceNumber));
  }, function(b) {
    e.mF(a, b);
  });
};
d.n9 = function(a, b) {
  var c = this, e = a.message;
  delete e.sessionId;
  this.si.sendRequest(e, b, Xk, a.timeoutMillis, a.clientId).then(function() {
    c.Ue.$j(a.clientId, new dm("v2_message", null, a.sequenceNumber));
  }, function(b) {
    c.mF(a, b);
  });
};
d.r9 = function(a) {
  var b = this, c = a.message, e = c.sessionId;
  if (e) {
    var f = this.Ja.CN(e);
    f ? (f = this.qa.ma(f)) ? (e = this.Ja.aC(e), nb(e.namespaces, function(a) {
      return a.name == c.namespaceName;
    }) ? this.Wd.ax(f, c.namespaceName, c.message, a.clientId, e.transportId).then(function() {
      b.Ue.$j(a.clientId, new dm("app_message", null, a.sequenceNumber));
    }, function() {
      b.Ko(a, chrome.cast.ph.CHANNEL_ERROR, "Channel to receiver not available");
    }) : this.Ko(a, chrome.cast.ph.INVALID_PARAMETER, "Invalid namespace")) : qm.v("No receiver from sinkId") : qm.v("No sinkId from sessionId");
  } else {
    qm.v("No sessionId");
  }
};
d.vw = function(a) {
  (a = this.Ja.Wq(a)) && a.session && this.Eo(a.session.sessionId);
};
d.a$ = function(a) {
  var b = this;
  qm.info("Leave session");
  var c = this.Ja.Sf(a.message);
  if (c) {
    var e = a.clientId, f = this.gc.be(e);
    if (f) {
      var h = [], k = [], p = f.tabId, r = f.origin, A = f.autoJoinPolicy;
      c.wh.forEach(function(a) {
        var c = b.gc.be(a);
        A == chrome.cast.oh.TAB_AND_ORIGIN_SCOPED && p == c.tabId && r == c.origin || A == chrome.cast.oh.ORIGIN_SCOPED && r == c.origin ? (c.QO = !0, h.push(a)) : k.push(a);
      });
      this.Ue.$j(e, new dm("leave_session", null, a.sequenceNumber));
      h.forEach(function(a) {
        (a = b.gc.be(a)) && b.Oj.am(a.routeId, !0, !0);
      });
      c.wh = k;
    } else {
      qm.v("No client record");
    }
  } else {
    qm.v("No session");
  }
};
d.wR = function(a, b) {
  $l(a, Zk) && this.si.sendRequest(new Dl, b, Zk, void 0, void 0, a.transportId).catch(pa);
};
d.xR = function(a, b) {
  var c = this, e = a.getId();
  qm.info("Query status for " + e);
  this.Xba.zia(a).then(function(f) {
    c.PQ(e, f);
    b && (f = c.Ja.gv(e)) && c.wR(f, a);
  }, pa);
};
d.E$ = function(a, b) {
  bl.hasOwnProperty(b.namespace_) ? this.B$(a, b) : this.A$(a, b);
};
d.G7 = function(a) {
  if ("*" == a.destinationId) {
    return !0;
  }
  a = a.destinationId;
  if (a == this.Wd.yN() || null != this.gc.be(a)) {
    return !0;
  }
  qm.info("Invalid destination " + a);
  return !1;
};
d.B$ = function(a, b) {
  var c = this;
  qm.L(function() {
    return "Cast message: " + JSON.stringify(b);
  });
  if (this.G7(b)) {
    if (b.namespace_ == Yk || b.namespace_ == $k) {
      (a = this.Ja.Wq(a)) && a.wf.forEach(function(a) {
        c.Oj.C0(a, b);
      });
    } else {
      var e = JSON.parse(b.data), f = this.a6(e), f = f ? f.sourceId : void 0;
      switch(e.type) {
        case "RECEIVER_STATUS":
          this.PQ(a, e);
          break;
        case "MEDIA_STATUS":
          this.D$(a, b, f);
      }
    }
  } else {
    this.Wd.cJ(a, b.destinationId, b.sourceId, !1);
  }
};
d.a6 = function(a) {
  var b = this.si.hs(a.requestId);
  if (!b) {
    return null;
  }
  var c = b.Pb;
  switch(a.type) {
    case "LAUNCH_ERROR":
    case "INVALID_REQUEST":
    case "LOAD_CANCELLED":
    case "LOAD_FAILED":
    case "INVALID_PLAYER_STATE":
      delete a.requestId;
      c.reject(new chrome.cast.Error(chrome.cast.ph.SESSION_ERROR, a.reason || a.type, a));
      break;
    default:
      c.resolve(a);
  }
  return b;
};
d.A$ = function(a, b) {
  var c = this;
  qm.L(function() {
    return "App message: " + JSON.stringify(b);
  });
  if (a = this.Ja.gv(a)) {
    var e;
    e = "*" == b.destinationId ? this.Ja.hL(a.sessionId) : [b.destinationId];
    var f = new Rl(a.sessionId, b.namespace_, b.data);
    e.forEach(function(a) {
      c.Ue.$j(a, new dm("app_message", f));
    });
  } else {
    qm.v("No session for incoming app message");
  }
};
var rm = function(a, b) {
  a.forEach(function(a) {
    a.sessionId = b;
    var c = a.supportedMediaCommands, f = [];
    c & 1 && f.push(chrome.cast.media.Bp.PAUSE);
    c & 2 && f.push(chrome.cast.media.Bp.SEEK);
    c & 4 && f.push(chrome.cast.media.Bp.STREAM_VOLUME);
    c & 8 && f.push(chrome.cast.media.Bp.STREAM_MUTE);
    a.supportedMediaCommands = f;
  });
  return a;
};
d = pm.prototype;
d.uR = function(a, b) {
  a = a.sessionId;
  b.sessionId = a;
  this.Ja.lha(a, rm(b.status, a));
};
d.k$ = function(a, b, c) {
  this.Ue.$j(c, new dm("new_session", a));
  this.wR(a, b);
};
d.$R = function(a) {
  if (a = this.Ja.gv(a)) {
    a = a.sessionId;
    var b = this.Ja.Sf(a);
    b && b.Ev || this.Eo(a);
  }
};
d.Eo = function(a, b) {
  var c = this;
  b && this.nF(b.clientId, b);
  (b = this.Ja.Sf(a)) && b.wf.slice().forEach(function(a) {
    c.Oj.am(a, !0);
  });
  this.Ja.Eo(a);
};
d.PQ = function(a, b) {
  qm.L("Receiver status for " + a);
  var c = b.status;
  if (c) {
    if (b = this.qa.ma(a)) {
      var c = Wl(b, c), e = this.Ja.Wq(a);
      e ? c ? c.sessionId == e.session.sessionId ? this.n6(e, c) : (this.pO(a), this.Oj.sg(null, b, null, c)) : this.pO(a) : c && this.Oj.sg(null, b, null, c);
    } else {
      nh("MediaRouter.Cast.Error.Sink.Missing.From.Discovery.Service"), qm.v("Got message from receiver " + a + ", but sink is no longer available.");
    }
  }
};
d.n6 = function(a, b) {
  w(a.session.sessionId == b.sessionId);
  var c = a.session;
  Yl(c, b) && (qm.L("Updating session " + b.sessionId), c.statusText = b.statusText, c.namespaces = b.namespaces, c.receiver.volume = b.receiver.volume, this.Oj.Eja(a), this.DS(c.sessionId, new dm("update_session", c)));
};
d.pO = function(a) {
  this.$R(a);
  ol(1);
};
d.D$ = function(a, b, c) {
  if (a = this.Ja.gv(a)) {
    if (b = JSON.parse(b.data)) {
      this.uR(a, b), this.DS(b.sessionId, new dm("v2_message", b), c);
    }
  }
};
d.h_ = function(a, b) {
  var c = Xl(b.re);
  return (b = nb(a.bz, function(a) {
    return lb(a.capabilities, function(a) {
      return pb(c, a);
    });
  })) ? b.appId : a.tq()[0];
};
d.fD = function(a, b) {
  var c = nm(a);
  if (!c) {
    return Promise.reject(Error("Invalid source " + a));
  }
  a = this.h_(c, b);
  var e = new fh("MediaRouter.Cast.Session.Launch");
  return this.Yda.fD(new chrome.cast.xH(a, void 0, c.A3()), b).then(function(a) {
    e.end("Success");
    return a;
  }, function(a) {
    e.end("Failure");
    throw a;
  });
};
var qm = D("mr.cast.ApiHandler");
var sm = D("mr.RuntimeErrorUtils"), tm = function() {
  chrome.runtime.lastError && sm.L(chrome.runtime.lastError.message || "unknown runtime error");
};
var um = function() {
  this.nE = new H;
  this.oE = new H;
  this.Ur = new H;
};
d = um.prototype;
d.en = function(a, b) {
  b = void 0 === b ? !1 : b;
  var c = this, e = a.getId(), f = a.Ea + ":" + a.vb(), h = this.nE.get(e);
  if (h) {
    if (this.Ur.get(e) == f) {
      return vm.L("Using pending creation to " + e), h;
    }
    vm.info("Device " + e + " IP changed from " + this.Ur.get(a.getId()) + " to " + f);
    this.XX(a);
  }
  a = this.K0(a, b ? 15E3 : 1E4).then(function(a) {
    c.Kz(e);
    pl(1);
    return a;
  }, function(a) {
    f == c.Ur.get(e) && c.Kz(e);
    pl(0);
    return Promise.reject(a);
  });
  this.nE.set(e, a);
  this.Ur.set(e, f);
  return a;
};
d.XX = function(a) {
  a = a.getId();
  vm.L("Aborting connection to device " + a);
  var b = this.oE.get(a);
  b && b.abort();
  this.Kz(a);
};
d.Kz = function(a) {
  this.nE.remove(a);
  this.oE.remove(a);
  this.Ur.remove(a);
};
d.K0 = function(a, b) {
  var c = this, e = new Pe(function() {
    return c.X$(a, b);
  }, 1000, 3);
  this.oE.set(a.getId(), e);
  return e.gx(1.5).start().then(null, function(b) {
    vm.info("Failed to create channel to " + a.getId());
    return Promise.reject(b);
  });
};
d.X$ = function(a, b) {
  var c = wm++;
  vm.info("Connecting to (id " + c + ") " + a.getId());
  var e = new fh("MediaRouter.Cast.Mdns.Channel.Open");
  return this.Z$(a, b).then(function(a) {
    vm.info(function() {
      return "Channel opened (id " + c + "): " + JSON.stringify(a);
    });
    e.end("Success");
    return a;
  }, function(a) {
    vm.info("Channel did not open (id " + c + ").");
    e.end("Failure");
    return Promise.reject(a);
  });
};
d.Z$ = function(a, b) {
  var c = {ipAddress:a.Ea, port:a.vb(), auth:"ssl_verified", timeout:10000, livenessTimeout:b, pingInterval:5000, capabilities:0};
  vm.info(function() {
    return "Opening channel to " + JSON.stringify(c);
  });
  var e = new Oc;
  chrome.cast.channel.open(c, function(a) {
    tm();
    "open" == a.readyState ? e.resolve(a) : (chrome.cast.channel.close(a, function() {
      chrome.runtime.lastError || vm.L("Channel close success");
    }), e.reject(Error(a.errorState)));
  });
  return e.promise;
};
var vm = D("mr.cast.ChannelFactory"), wm = 0;
var xm = function(a, b, c, e) {
  return {namespace_:a, data:n(b) ? b : JSON.stringify(b), sourceId:c, destinationId:e};
};
var ym = function(a) {
  this.type = "CLOSE";
  this.reasonCode = a;
};
var Am = function(a) {
  this.type = "CONNECT";
  this.origin = {};
  this.userAgent = $b;
  var b = this.userAgent.indexOf("(") + 1, b = this.userAgent.substr(b, this.userAgent.indexOf(")", b) - 1 - b + 1);
  this.senderInfo = {sdkType:2, version:chrome.runtime.getManifest().version, browserVersion:kk, platform:zm(), systemVersion:b, connectionType:1};
  this.connType = a ? 0 : 2;
}, zm = function() {
  switch(bh()) {
    case "ChromeOS":
      return 5;
    case "Windows":
      return 3;
    case "Mac":
      return 4;
    case "Linux":
      return 6;
  }
  return 0;
};
var Bm = function() {
  this.Gi = new H;
};
d = Bm.prototype;
d.init = function() {
  ei(this);
};
d.ZD = function(a, b, c, e) {
  if (!this.yO(a, b, c)) {
    var f = xm(Wk, new Am(e), b, c);
    chrome.cast.channel.send(a, f, tm);
    this.Gi.set(this.PC(a, b, c), e);
  }
};
d.t_ = function(a, b, c, e) {
  this.yO(a, b, c) && (this.aS(a, b, c), b = xm(Wk, new ym(e ? 5 : 0), b, c), chrome.cast.channel.send(a, b, tm));
};
d.aS = function(a, b, c) {
  this.Gi.remove(this.PC(a, b, c));
};
d.Jca = function(a) {
  var b = this;
  this.Gi.ub().forEach(function(c) {
    c.split("#")[0] == a.channelId.toString() && b.Gi.remove(c);
  });
};
d.d9 = function(a, b) {
  var c = this;
  this.Gi.forEach(function(e, f) {
    var h = f.split("#");
    h[0] == a.channelId.toString() && (c.ZD(b, h[1], h[2], e), c.Gi.remove(f));
  });
};
d.e1 = function(a, b, c) {
  this.ZD(a, b, c, 0 == c.indexOf("receiver-0"));
};
d.yO = function(a, b, c) {
  return this.Gi.Ra(this.PC(a, b, c));
};
d.PC = function(a, b, c) {
  return [a.channelId, b, c].join("#");
};
d.Ca = function() {
  return "cast.VirtualConnectionManager";
};
d.getData = function() {
  var a = this.Gi.g();
  return [new Cm(a)];
};
d.wb = function() {
  var a = bi(this);
  if (a) {
    for (var b in a.SV) {
      this.Gi.set(b, a.SV[b]);
    }
  }
};
qa(Bm);
var Cm = function(a) {
  this.SV = a;
};
var Dm = function(a, b) {
  this.Gz = b;
  this.Je = a;
  this.Tj = new H;
  this.Si = new H;
  this.Dm = Bm.ea();
  this.YZ = new um;
  this.ma = null;
};
d = Dm.prototype;
d.init = function() {
  chrome.cast.channel.onMessage.addListener(this.z9.bind(this));
  chrome.cast.channel.onError.addListener(this.x9.bind(this));
  this.Dm.init();
  ei(this);
};
d.yN = function() {
  return this.Je;
};
d.ax = function(a, b, c, e, f) {
  var h = this, k = e || this.Je, p = f || "receiver-0";
  return this.en(a).then(function(a) {
    return h.Rda(a, b, c, k, p);
  });
};
d.$$ = function(a, b, c, e) {
  var f = this;
  return this.en(a).then(function(a) {
    return f.Dm.ZD(a, b, c, e);
  });
};
d.cJ = function(a, b, c, e) {
  (a = this.Tj.get(a)) && this.Dm.t_(a, b, c, e);
};
d.z9 = function(a, b) {
  vh(2);
  var c = this.Si.get(a.channelId);
  if (c) {
    var e = this.ma(c);
    if (e) {
      if (bl.hasOwnProperty(b.namespace_)) {
        c = JSON.parse(b.data);
        if ("CLOSE" == c.type) {
          this.Dm.aS(a, b.destinationId, b.sourceId);
          return;
        }
        Em.info("Got message " + (c.type || c.responseType) + " from " + e.getId());
      } else {
        Em.info("Got message in " + b.namespace_ + " from " + e.getId());
      }
      this.Gz.y9(e, b);
    } else {
      Em.v("Receiver " + c + " not found.");
    }
  } else {
    Em.v("This message is from unknown receiver.");
  }
};
d.dJ = function(a) {
  chrome.cast.channel.close(a, function() {
    chrome.runtime.lastError || Em.L("Channel close success");
  });
  var b = this.Si.get(a.channelId);
  b && (this.Si.remove(a.channelId), this.Tj.remove(b));
};
d.x9 = function(a, b) {
  vh(1);
  Em.v(function() {
    return "Channel error: " + JSON.stringify(a) + (b ? ", " + JSON.stringify(b) : "");
  });
  b && this.jY(b.errorState, b);
  this.bJ(a);
};
d.jY = function(a, b) {
  switch(a) {
    case "unknown":
      a = 0;
      break;
    case "authentication_error":
      a = 1;
      break;
    case "connect_error":
      a = 2;
      break;
    default:
      return;
  }
  if (b) {
    if (-8192 <= b.nssErrorCode && -7192 > b.nssErrorCode || 2 == b.challengeReplyErrorType || 8 == b.challengeReplyErrorType || 9 == b.challengeReplyErrorType || 11 == b.challengeReplyErrorType || -200 >= b.netReturnValue && -300 < b.netReturnValue || 30 == b.eventType || 31 == b.eventType || 32 == b.eventType) {
      a = 3;
    }
    if (26 == b.eventType || -201 == b.netReturnValue || -8181 == b.nssErrorCode || -8162 == b.nssErrorCode || -8161 == b.nssErrorCode) {
      a = 4;
    }
    -138 == b.netReturnValue && (a = 5);
    if (-8182 == b.nssErrorCode || 10 == b.eventType || 12 == b.eventType) {
      a = 1;
    }
  }
  Em.v("Channel error code: " + a);
  oh("MediaRouter.Cast.Channel.Error", a, ml);
};
d.bJ = function(a) {
  var b = this, c = this.Si.get(a.channelId);
  this.dJ(a);
  if (c) {
    var e = this.ma(c);
    e && this.en(e, !0).then(function(c) {
      Em.info("Re-connected to receiver: " + e.getId());
      b.Dm.d9(a, c);
      b.Gz.A9(e);
    }, function() {
      Em.info("Failed to re-connect to receiver: " + e.getId());
      b.Dm.Jca(a);
      b.Gz.ID(e, a.errorState);
    });
  }
};
d.en = function(a, b) {
  b = void 0 === b ? !1 : b;
  var c = this, e = a.getId(), f = this.Tj.get(e);
  return f && "open" == f.readyState ? Promise.resolve(f) : this.YZ.en(a, b).then(function(a) {
    if (c.Si.Ra(a.channelId)) {
      return a;
    }
    c.Tj.get(e) && (Em.v("Duplicate channel to a receiver " + e), c.dJ(c.Tj.get(e)));
    Em.info("Connected to: " + e);
    c.Tj.set(e, a);
    c.Si.set(a.channelId, e);
    return a;
  }, null);
};
d.Rda = function(a, b, c, e, f) {
  var h = this;
  this.Dm.e1(a, e, f);
  Zl(c);
  var k = xm(b, c, e, f);
  Em.info("Channel is sending message");
  Em.L(function() {
    return "....message was: " + JSON.stringify(k);
  });
  return new Promise(function(b, c) {
    tm();
    chrome.cast.channel.send(a, k, function(a) {
      a.errorState ? (c(Error("Failed to send message")), h.bJ(a)) : b(!0);
    });
  });
};
d.Ca = function() {
  return "cast.ChannelService";
};
d.getData = function() {
  return [new Fm(this.Tj.g(), this.Si.g())];
};
d.wb = function() {
  var a = bi(this);
  a && (this.Tj.addAll(a.Wba), this.Si.addAll(a.ZZ));
};
var Em = D("mr.cast.ChannelService"), Fm = function(a, b) {
  this.Wba = a;
  this.ZZ = b;
};
var Gm = function() {
  this.requestId = 0;
  this.type = "GET_APP_AVAILABILITY";
  this.appId = [];
};
var Hm = function(a, b) {
  this.si = a;
  this.qa = b;
  this.rc = new Ne;
  this.pd = new H;
};
d = Hm.prototype;
d.init = function() {
  ei(this);
};
d.IE = function(a) {
  var b = this.pd.get(a);
  b ? b.KE++ : this.pd.set(a, {KE:1});
  this.xda();
};
d.zG = function(a) {
  var b = this.pd.get(a);
  b && (b.KE--, 0 < b.KE || (Ae(this.qa.hl(), function(b) {
    switch(b.Nf(a)) {
      case "available":
        b.us(a, "available_rescan");
        break;
      case "unavailable":
        b.us(a, "unavailable_rescan");
    }
  }), this.pd.remove(a)));
};
d.xda = function() {
  this.a.info("Scanning sinks for app availability");
  Ae(this.qa.hl(), this.ps, this);
};
d.ps = function(a) {
  var b = this;
  Ae(this.pd.jM(), function(c) {
    var e;
    a: {
      switch(a.Nf(c)) {
        case "unknown":
        case "available_rescan":
        case "unavailable_rescan":
          e = !0;
          break a;
      }
      e = !1;
    }
    if (e) {
      var f = a.getId() + ":" + c;
      b.rc.contains(f) || (b.rc.add(f), e = function() {
        b.rc.remove(f);
      }, (new Pe(b.b_.bind(b, a, c), 5500, 3)).gx(2).start().then(b.qV.bind(b, a, c), function() {
        b.a.error("Failed to get app availability response for " + a.getId() + ", appId " + c + " after 3 attempts.");
        b.qV(a, c, "unknown");
      }).then(e, e));
    }
  });
};
d.qV = function(a, b, c) {
  c != a.Nf(b) && (this.a.info(b + " on " + a.getId() + " is " + c), a.us(b, c), this.qa.De(a));
};
d.b_ = function(a, b) {
  var c = this, e = new Gm;
  e.appId = [b];
  var f = new fh("MediaRouter.Cast.App.Availability");
  return this.si.sendRequest(e, a, Xk, 5000).then(function(a) {
    f.end("Success");
    c.a.L(function() {
      return "App availability response " + JSON.stringify(a);
    });
    for (var b in a.availability) {
      if ("APP_AVAILABLE" == a.availability[b]) {
        return "available";
      }
      if ("APP_UNAVAILABLE" == a.availability[b]) {
        return "unavailable";
      }
    }
    return "unknown";
  }, function(e) {
    f.end("Failure");
    c.a.error("checkAppAvailability_ failed for " + a.getId() + ", appId " + b);
    throw e;
  });
};
d.Ca = function() {
  return "cast.AppDiscoveryService";
};
d.getData = function() {
  return [new Im(this.pd.g())];
};
d.wb = function() {
  var a = bi(this);
  a && this.pd.addAll(a.qca);
};
d.a = D("mr.cast.AppDiscoveryService");
var Im = function(a) {
  this.qca = a;
};
var Jm = function(a, b, c) {
  var e;
  e = Error.call(this);
  this.message = e.message;
  "stack" in e && (this.stack = e.stack);
  this.name = "RouteRequestError";
  this.message = b || "";
  if (c) {
    this.stack = c;
  } else {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Jm);
    } else {
      if (b = Error().stack) {
        this.stack = b;
      }
    }
  }
  this.errorCode = a;
};
la(Jm, Error);
var Km = function(a, b) {
  this.sinks = a;
  this.origins = b || null;
}, Lm = new Km([]);
var Mm = function() {
}, Nm = function(a) {
  if (!Ea(a, "urn:x-org.chromium:media:route:")) {
    return null;
  }
  var b = a.substring(31);
  if (!b) {
    return null;
  }
  b = Va(b, "/", 2);
  if (3 != b.length) {
    return null;
  }
  var c = Va(b[1], "-", 1);
  if (2 != c.length) {
    return null;
  }
  var e = new Mm;
  e.Zya = a;
  e.nR = b[0];
  e.eya = c[0];
  e.Cza = c[1];
  e.dk = b[2];
  return e;
};
Mm.prototype.S = function() {
  return this.dk;
};
var Om = function(a, b, c, e, f, h) {
  this.id = a;
  this.sinkId = b;
  this.mediaSource = c;
  this.isLocal = e;
  this.description = f;
  this.iconUrl = h;
  this.allowStop = !0;
  this.customControllerPath = null;
  this.forDisplay = !0;
  this.offTheRecord = !1;
  this.jn = e;
  this.isOffscreenPresentation = !1;
}, Pm = function(a, b, c, e, f, h, k) {
  return new Om("urn:x-org.chromium:media:route:" + a + "/" + b + "-" + c + "/" + e, c, e, f, h, k);
};
var Qm = function(a, b, c, e) {
  return Pm(c, "cast", b.getId(), a, e, "", null);
};
var Rm = function(a, b, c, e, f, h) {
  this.routeId = a;
  this.clientId = b;
  this.appIds = c;
  this.autoJoinPolicy = e;
  this.origin = f;
  this.tabId = h;
  this.QO = this.JC = !1;
}, Sm = function() {
  this.bc = [];
};
d = Sm.prototype;
d.init = function() {
  ei(this);
};
d.ja = function() {
  return this.bc.length;
};
d.be = function(a) {
  return nb(this.bc, function(b) {
    return b.clientId == a;
  });
};
d.pj = function(a) {
  return nb(this.bc, function(b) {
    return b.routeId == a;
  });
};
d.Py = function(a, b, c, e, f, h) {
  w(null == this.be(b));
  a = new Rm(a, b, c, e, f, h);
  this.bc.push(a);
  return a;
};
d.QE = function(a) {
  this.bc = jb(this.bc, function(b) {
    return b.clientId != a;
  });
};
d.Ca = function() {
  return "cast.ClientRecords";
};
d.getData = function() {
  return [new Tm(this.bc)];
};
d.wb = function() {
  var a = bi(this);
  a && (this.bc = a.Rw);
};
var Tm = function(a) {
  this.Rw = a;
};
var Um = function(a) {
  this.qa = a;
}, Vm = function(a) {
  var b = [];
  a.forEach(function(a) {
    var c = "Receiver-" + a.replace(/\./g, "_"), f = pk.ea().Xm || 8009;
    b.push({serviceName:c + "._googlecast._tcp.local", serviceHostPort:c + ":" + f, ipAddress:a, serviceData:["id=mdns:" + c, "ve=02", "ca=5", "st=1", "fn=" + c, "md=Chromecast"]});
  });
  return b;
};
Um.prototype.init = function() {
  var a = Vm(pk.ea().wA);
  this.qa.jca(a);
};
var Wm = chrome.i18n.getMessage("4528089202128275824");
chrome.i18n.getMessage("2810417817914017289");
chrome.i18n.getMessage("3413021810593924462");
chrome.i18n.getMessage("7603034707785674700");
chrome.i18n.getMessage("8009014317872238527");
chrome.i18n.getMessage("8636962961150071298");
chrome.i18n.getMessage("1802762746589457177");
var Xm = function(a, b) {
  this.wh = [];
  this.wf = [];
  this.sinkId = a;
  this.session = b;
  this.Sv = this.Er = null;
  this.offTheRecord = this.Ev = !1;
};
d = Xm.prototype;
d.Py = function(a) {
  if (pb(this.wh, a)) {
    return !1;
  }
  this.wh.push(a);
  return !0;
};
d.QE = function(a) {
  return wb(this.wh, a);
};
d.sg = function(a) {
  if (pb(this.wf, a)) {
    return !1;
  }
  this.wf.push(a);
  return !0;
};
d.am = function(a) {
  return wb(this.wf, a);
};
d.v5 = function(a, b) {
  Vl(a) ? (this.Sv = a, this.Er = b) : Vl(this.session) && (this.Sv = this.session, this.Er = this.sinkId, this.session = a, this.sinkId = b);
  return this;
};
var Ym = function() {
  this.a = D("mr.cast.SessionRecords");
  this.bc = [];
};
d = Ym.prototype;
d.init = function() {
  ei(this);
};
d.XH = function(a, b) {
  this.a.info("Adding new session: " + b + ", " + a.sessionId);
  var c = this.Sf(a.sessionId);
  if (c) {
    return c.v5(a, b);
  }
  a = new Xm(b, a);
  this.bc.push(a);
  return a;
};
d.Eo = function(a) {
  this.a.info("Removing session " + a);
  this.bc = jb(this.bc, function(b) {
    return b.session.sessionId != a;
  });
};
d.hL = function(a) {
  return (a = this.Sf(a)) ? a.wh : [];
};
d.gv = function(a) {
  return (a = this.Wq(a)) ? a.session : null;
};
d.be = function(a) {
  return nb(this.bc, function(b) {
    return pb(b.wh, a);
  });
};
d.pj = function(a) {
  return nb(this.bc, function(b) {
    return pb(b.wf, a);
  });
};
d.x4 = function(a) {
  return nb(this.bc, function(b) {
    return null != nb(b.wf, function(b) {
      return Nm(b).nR == a;
    });
  });
};
d.Wq = function(a) {
  return nb(this.bc, function(b) {
    return b.sinkId == a || b.Er == a;
  });
};
d.Sf = function(a) {
  return nb(this.bc, function(b) {
    return b.session.sessionId == a;
  });
};
d.CN = function(a) {
  return (a = this.Sf(a)) ? a.sinkId : null;
};
d.aC = function(a) {
  return (a = this.Sf(a)) ? a.session : null;
};
d.lha = function(a, b) {
  var c = this.aC(a);
  c && (a = jb(b, function(a) {
    return a.playerState != chrome.cast.media.nt.IDLE;
  }), a.forEach(function(a) {
    if (!a.media) {
      var b = nb(c.media, function(b) {
        return b.mediaSessionId == a.mediaSessionId;
      });
      b && (a.media = b.media);
    }
  }), c.media = a);
};
d.zba = function(a) {
  for (var b = 0;b < this.bc.length;b++) {
    this.bc[b].QE(a);
  }
};
d.Ca = function() {
  return "cast.SessionRecords";
};
d.getData = function() {
  return [new Zm(this.bc)];
};
d.wb = function() {
  var a = bi(this);
  if (a) {
    for (var b = 0;b < a.Rw.length;b++) {
      var c = a.Rw[b], e = new Xm(c.sinkId, c.session);
      e.wh = c.wh;
      e.wf = c.wf;
      e.Ev = c.Ev;
      e.Sv = c.Sv;
      e.Er = c.Er;
      this.bc.push(e);
    }
  }
};
var Zm = function(a) {
  this.Rw = a;
};
var $m = function(a) {
  this.Je = "sender-" + Sa();
  this.Na = new H;
  this.tl = null;
  ei(this);
  this.F = a;
  this.gc = new Sm;
  this.Ja = new Ym;
  this.Wd = new Dm(this.Je, this);
  this.qa = new xl(this.Wd, this);
  this.n0 = new Um(this.qa);
  this.se = new Jl(this.Wd, this.Je);
  this.pe = new Hm(this.se, this.qa);
  this.Te = new pm(this.se, this.qa, this.gc, this.Ja, this.Wd, this);
  this.II = new Pl(this.qa, this.se);
  this.via = this.qa.start.bind(this.qa);
  this.OE = new Map;
};
d = $m.prototype;
d.getName = function() {
  return "cast";
};
d.Xc = function() {
  this.se.init();
  this.Ja.init();
  this.Te.init();
  this.Wd.init();
  this.qa.init();
  this.n0.init();
  this.pe.init();
  this.F.JE(this.via);
};
d.Kg = function() {
  var a = this.Na.T(), b = [].concat(ma(this.OE.values())).map(function(a) {
    return a.RR.pb;
  });
  return a.concat(b);
};
d.fj = function(a) {
  var b = this;
  if (this.MO(a)) {
    return new Km([]);
  }
  var c = new Ne;
  this.uq(a).forEach(function(a) {
    b.qa.W4(a).map(function(a) {
      return a.mj();
    }).forEach(function(a) {
      c.add(a);
    });
  });
  return new Km(c.T(), Bh(a));
};
d.startObservingMediaSinks = function(a) {
  var b = this, c = this.QK(a);
  c ? (this.a.info("Received broadcast request " + a), Ae(this.qa.hl(), function(a) {
    b.se.Cda(c, a).catch(function(a) {
      b.a.error("Broadcast failed " + a.message);
    });
  })) : (this.uq(a).forEach(function(a) {
    b.pe.IE(a);
  }), this.F.LC() && this.qa.start());
};
d.stopObservingMediaSinks = function(a) {
  var b = this;
  this.MO(a) || this.uq(a).forEach(function(a) {
    b.pe.zG(a);
  });
};
d.startObservingMediaRoutes = function() {
};
d.stopObservingMediaRoutes = function() {
};
d.ma = function(a) {
  return (a = this.qa.ma(a)) ? a.mj() : null;
};
d.Gda = function(a) {
  var b = new Ug(Wm, "warning", "dismiss");
  b.routeId = a;
  this.F.Oh().send(b);
};
d.lO = function(a, b) {
  this.a.error("Error launching.", b);
  this.am(a.id, !1, !0, "error");
  this.Gda(a.id);
};
d.Ok = function(a, b, c, e, f, h, k) {
  var p = this;
  pk.ea().Zl = new ok(b.nd, b.Ea);
  var r = Qm(a, b, c, !0);
  r.forDisplay = !1;
  r.offTheRecord = e;
  this.Na.set(r.id, r);
  this.F.Ll(this, r);
  this.FG();
  (e = nm(a)) && e.dd() && this.HH(e, r.id, h, k);
  yh(a) || zh(a) ? (r.$f = {tabId:k, sessionId:"", BU:b.Ea || "", CU:b.nd || ""}, zh(a) && (r.isOffscreenPresentation = !0), this.F.Qs(this, r, c, function(e) {
    return Yg(p.xP(a, b, c, f, h, k, e));
  }).promise.then(function() {
    p.MT(r);
  }, function(a) {
    p.lO(r, a);
  })) : this.xP(a, b, c, f, h, k, r).then(null, function(a) {
    p.lO(r, a);
  });
  return Promise.resolve(r);
};
d.xP = function(a, b, c, e, f, h, k) {
  var p = this;
  return this.Te.fD(this.sE(a, b, e), b).then(function(e) {
    p.sg(a, b, c, e, f, h, k);
    return k;
  });
};
d.createRoute = function(a, b, c, e, f, h, k) {
  var p = this, r = this.qa.ma(b);
  if (!r) {
    return Xg(Error("No sink with ID " + b));
  }
  var A = lm(a);
  if (A) {
    setTimeout(function() {
      p.Te.HS($a(A), bb(r), chrome.cast.Cp.CAST);
    }, 0);
    var C = function() {
      return p.Ok(a, r, c, e, f, h, k);
    }, da = this.gc.be(A);
    if (da) {
      return Yg(this.terminateRoute(da.routeId).then(C, C));
    }
    if (h && k && (b = this.rJ(a, h, k, e, f, b))) {
      return b;
    }
  }
  return Yg(this.Ok(a, r, c, e, f, h, k));
};
d.D0 = function(a, b) {
  this.F.ag(this, a, b);
};
d.C0 = function(a, b) {
  var c = this.Na.get(a);
  c && c.jn && this.F.sw(this, a, b);
};
d.am = function(a, b, c, e) {
  c = void 0 === c ? !1 : c;
  e = void 0 === e ? "closed" : e;
  this.a.info("Remove route " + a);
  var f = this.gc.pj(a);
  if (f) {
    b = b || f.QO;
    var h = f.clientId;
    this.a.info("Remove client " + h);
    this.Ja.zba(h);
    this.gc.QE(h);
  }
  if (h = this.Ja.pj(a)) {
    h.am(a), this.JP(h.wf);
  }
  var k = this.Na.get(a);
  if (k) {
    if (k.jn && h && (this.Wd.cJ(k.sinkId, f ? f.clientId : this.Je, h.session.transportId, b), k.forDisplay && f && (this.tl = {$m:f, NS:h})), this.Na.remove(a), this.F.ii(this, k), this.FG(), c) {
      this.F.onPresentationConnectionClosed(a, e, "Remove route");
    } else {
      this.F.onPresentationConnectionStateChanged(a, "terminated");
    }
  }
};
d.Eja = function(a) {
  var b = this;
  a.wf.forEach(function(c) {
    if (c = b.Na.get(c)) {
      var e = a.session;
      c.$f && c.forDisplay ? b.MT(c) : (c.description = e.statusText || e.displayName, b.F.Kj(b, c));
    }
  });
};
d.yja = function(a) {
  var b = this;
  kb(a, function(a) {
    a = b.Na.get(a, null);
    if (!a || !a.mediaSource) {
      return !1;
    }
    var c = nm(a.mediaSource), c = c ? c.GC : !1;
    return a.isLocal && !c;
  }) && x(a, function(a) {
    if (a = b.Na.get(a, null)) {
      a.isLocal = !0;
    }
  });
};
d.JP = function(a) {
  var b = this, c = [], e = [], f = null;
  a.forEach(function(a) {
    if (a = b.Na.get(a)) {
      a.forDisplay = !1;
      var h = nm(a.mediaSource);
      h && nb(h.tq(), bm) || (a.jn ? (h = h ? h.GA() : null, f || h == chrome.cast.oh.CUSTOM_CONTROLLER_SCOPED || (c.push(a), f = a.sinkId)) : f && f != a.sinkId ? c.push(a) : e.push(a));
    }
  });
  x(0 < c.length ? c : e, function(a) {
    a.forDisplay = !0;
  });
};
d.HH = function(a, b, c, e) {
  var f = a.dd();
  f && !this.gc.be(f) && (this.a.info("Add client " + f), this.gc.Py(b, f, a.tq(), a.GA(), c || null, l(e) ? e : null));
};
d.MT = function(a) {
  var b = this.Ja.pj(a.id);
  b && (b = b.session, b.statusText = a.description || b.statusText);
};
d.sg = function(a, b, c, e, f, h, k) {
  var p = this.Ja.Wq(b.getId());
  p || (p = this.Ja.XH(e, b.getId()));
  var r = null != a;
  if (!r && bm(e.appId)) {
    return null;
  }
  var A;
  null == a ? (A = new hm([{appId:e.appId, capabilities:e.capabilities}]), a = A.toString()) : A = nm(a);
  var C = k;
  if (C) {
    if (!this.Na.get(C.id)) {
      return this.a.v("Route " + C.id + " not added"), C;
    }
  } else {
    C = Qm(a, b, c || e.sessionId, r), this.Na.set(C.id, C);
  }
  c = C.id;
  this.a.info("Add route " + c);
  a = null;
  A && (a = A.dd(), this.HH(A, c, f, h));
  p.sg(c);
  C.jn && this.Wd.$$(b, a || this.Je, e.transportId, !(A && A.GC));
  p.offTheRecord = C.offTheRecord;
  f = p.wf;
  this.yja(f);
  this.JP(f);
  f = C;
  h = e.sessionId;
  A = e.appId;
  ("0F5096E8" == A || "85CDB22F" == A) && h && f.$f && (f.$f.sessionId = h);
  !$l(e, Zk) || null !== e && pb(am, e.appId) || (f.customControllerPath = "cast_route_details.html?" + ["sessionId=" + h, "appId=" + A].join("&"));
  f.description = e.statusText || e.displayName;
  k ? this.F.Kj(this, C) : this.F.Ll(this, C);
  this.FG();
  a && p.Py(a) && this.Te.k$(e, b, a);
  return C;
};
d.terminateRoute = function(a) {
  var b = this, c = this.Na.get(a);
  if (!c) {
    return Promise.reject(new Jm(3, "Route in Cast provider not found for routeId  " + a));
  }
  var e = this.Ja.pj(a);
  if (!e) {
    return this.am(a, !0), Promise.resolve();
  }
  var f = e.session.sessionId, h = this.qa.ma(c.sinkId);
  if (!h) {
    return this.Te.Eo(f), Promise.resolve();
  }
  (a = this.gc.pj(a)) && this.Te.HS(a.clientId, h, chrome.cast.Cp.STOP);
  ol(0);
  return new Promise(function(a) {
    var c = function() {
      b.Te.$R(h.getId());
      a();
    };
    b.se.Pca(f, h).then(c, c);
  });
};
d.D1 = function(a) {
  var b = this, c = null;
  Be(this.Na.nC(), function(e) {
    if (!e.jn) {
      return !1;
    }
    var f = b.qa.ma(e.sinkId);
    if (!f || !a.C7(b.sE(e.mediaSource, f))) {
      return !1;
    }
    c = e;
    return !0;
  });
  if (!c || !c.mediaSource) {
    return null;
  }
  var e = om(c.mediaSource);
  if (!e) {
    return null;
  }
  var f = this.gc.be(e);
  return f ? (e = this.Ja.be(e)) ? {$m:f, NS:e} : null : null;
};
d.SY = function(a, b, c) {
  var e = this.D1(a);
  if (!e) {
    if (!this.tl || this.tl.$m.origin != b || this.tl.$m.tabId != c) {
      return null;
    }
    e = this.tl;
  }
  switch(a.GA()) {
    case chrome.cast.oh.PAGE_SCOPED:
      return null;
    case chrome.cast.oh.ORIGIN_SCOPED:
      if (b != e.$m.origin) {
        return null;
      }
      break;
    case chrome.cast.oh.TAB_AND_ORIGIN_SCOPED:
      if (b != e.$m.origin || c != e.$m.tabId) {
        return null;
      }
  }
  return this.Ja.Sf(e.NS.session.sessionId);
};
d.rJ = function(a, b, c, e, f, h) {
  var k = this, p = null;
  Be(this.Na.nC(), function(a) {
    var b = a.$f;
    return b && null != b.tabId && b.tabId == c && wh(a.mediaSource) ? (p = a, !0) : !1;
  });
  if (!p) {
    return null;
  }
  var r = function() {
    return k.createRoute(a, h || p.sinkId, "", e, f, b, null == c ? void 0 : c);
  };
  return Yg(this.terminateRoute(p.id).then(r, r));
};
d.connectRouteByRouteId = function(a, b, c, e, f) {
  if (!nm(a)) {
    return Xg(Error("Unsupported presentation URL"));
  }
  b = Nm(b);
  b = this.Ja.Sf(b.nR);
  if (!b) {
    return Xg(Error("No matching route"));
  }
  var h = this.qa.ma(b.sinkId);
  return h ? (a = this.sg(a, h, c, b.session, e, f)) ? Wg(a) : Xg(Error("Failed to create route")) : Xg(Error("No sink"));
};
d.joinRoute = function(a, b, c, e, f, h) {
  var k = nm(a);
  if (!k) {
    return Xg(Error("Unsupported presentation URL"));
  }
  var p;
  if (b == chrome.cast.tW) {
    if (p = this.SY(k, f, h), !p && k.N2() != chrome.cast.mt.CAST_THIS_TAB && (e = this.rJ(a, f, h, c, e))) {
      return e;
    }
  } else {
    p = 0 == b.indexOf(chrome.cast.vH) ? this.Ja.Sf(b.substr(chrome.cast.vH.length)) : this.Ja.x4(b);
  }
  if (!p) {
    return Xg(Error("No matching route"));
  }
  if (p.offTheRecord != c) {
    return Xg(Error("Off the record mismatch"));
  }
  e = this.qa.ma(p.sinkId);
  if (!e) {
    return Xg(Error("No sink"));
  }
  a = this.sg(a, e, b, p.session, f, h);
  a.offTheRecord = c;
  return Wg(a);
};
d.detachRoute = function(a) {
  this.am(a, !1, !0);
};
d.al = function(a) {
  var b = new Th, c = this.qa.ma(a);
  if (!c) {
    return null;
  }
  c = c.re;
  c & 1 || (b.shouldCaptureVideo = !1);
  c & 4 || (b.shouldCaptureAudio = !1);
  b.shouldCaptureAudio && !b.shouldCaptureVideo && (b.minLatencyMillis = b.maxLatencyMillis, b.animatedLatencyMillis = b.maxLatencyMillis);
  b.senderSideLetterboxing = !0;
  b.HP();
  this.a.info(function() {
    return "Settings for " + a + ": " + b.Yx();
  });
  return b.shouldCaptureAudio || b.shouldCaptureVideo ? b : null;
};
d.$k = function() {
  return "cast_streaming";
};
d.sendRouteMessage = function(a, b, c) {
  var e = this, f = this.OE.get(a);
  if (f) {
    return "string" !== typeof b ? Promise.reject("String-typed message required") : f.RR.bya(b);
  }
  if (!c) {
    return new Promise(function(c, f) {
      "string" !== typeof b && f(Error("Cannot send non-string messages via ApiHandler."));
      e.Te.ag(a, b);
      c();
    });
  }
  var h = this.Ja.pj(a);
  if (!h) {
    return Promise.reject(Error("Not managing the route " + a));
  }
  var k = this.qa.ma(h.sinkId);
  if (!k) {
    return Promise.reject(Error("Sink no longer accessible"));
  }
  var p = (f = this.gc.pj(a)) ? f.clientId : this.Je;
  return new Promise(function(a) {
    e.Wd.ax(k, c.namespace, b, p, h.session.transportId).then(a, a);
  });
};
d.sendRouteBinaryMessage = function(a, b) {
  var c = this.OE.get(a);
  return c ? c.RR.oza(b) : Promise.reject(Error("Route " + a + " does not support sending binary data."));
};
d.Vm = function(a, b) {
  var c = this.qa.ma(b);
  if (!c) {
    return !1;
  }
  a = this.sE(a, c);
  return (a = mm(a)) && 0 != a.length ? kb(a, function(a) {
    return cl(c.Nf(a));
  }) : !1;
};
d.zk = function(a, b) {
  var c = this.uq(a);
  return c && 0 != c.length ? b && b.mediaSource ? (a = mm(b.mediaSource), kb(a, function(a) {
    return pb(c, a);
  })) : !0 : !1;
};
d.sE = function(a, b, c) {
  return yh(a) || zh(a) ? (a = {appId:0 == (b.re & 1) ? "85CDB22F" : "0F5096E8", capabilities:Xl(b.re)}, (new hm([a], void 0, void 0, void 0, c)).toString()) : a;
};
d.uq = function(a) {
  var b = [];
  if (yh(a) || zh(a)) {
    var c = bh();
    xh(a) && "ChromeOS" != c && "Windows" != c || b.push("85CDB22F");
    b.push("0F5096E8");
  } else {
    (a = mm(a)) && (b = zb(b, a));
  }
  return b;
};
d.MO = function(a) {
  return null != this.QK(a);
};
d.QK = function(a) {
  var b = nm(a);
  if (!b) {
    return null;
  }
  a = this.uq(a);
  var c = b.sz || "", b = b.rz;
  return c && b ? new El(a, c, JSON.stringify(b)) : null;
};
d.ID = function(a) {
  this.qa.ID(a.getId());
  ol(2);
};
d.A9 = function(a) {
  this.Te.xR(a, !0);
};
d.y9 = function(a, b) {
  this.II.C5(a, b);
  this.Te.E$(a.getId(), b);
};
d.Ml = function(a) {
  this.F.onSinkAvailabilityUpdated(this, 1);
  this.De(a);
  this.Te.xR(a);
};
d.vw = function(a) {
  if (0 == this.qa.cC()) {
    this.F.onSinkAvailabilityUpdated(this, 0);
  }
  this.Te.vw(a.getId());
  this.qO();
};
d.De = function(a) {
  this.pe.ps(a);
  this.qO();
};
d.qO = function() {
  this.II.o6();
  this.F.qf();
};
d.Ca = function() {
  return "cast.Provider";
};
d.getData = function() {
  return [new an(this.Je, this.Na.g(), this.tl)];
};
d.wb = function() {
  var a = bi(this);
  a && (this.Je = a.LS, this.Na.addAll(a.routes), this.tl = a.Q7);
};
d.searchSinks = function() {
  return null;
};
d.FG = function() {
  this.F.Vj(this.Ca(), this.Kg().some(function(a) {
    return a.isLocal;
  }));
};
d.a = D("mr.CastProvider");
var an = function(a, b, c) {
  this.LS = a;
  this.routes = b;
  this.Q7 = c;
};
var bn = function() {
  if (!ic) {
    return !1;
  }
  try {
    return new ActiveXObject("MSXML2.DOMDocument"), !0;
  } catch (a) {
    return !1;
  }
};
ic && bn();
var cn = function(a, b) {
  $c.call(this);
  this.YP = a || 0;
  this.Al = b || 10;
  if (this.YP > this.Al) {
    throw Error("[goog.structs.Pool] Min can not be greater than max");
  }
  this.Tc = new sj;
  this.vj = new Ne;
  this.cA = 0;
  this.RC = null;
  this.vt();
};
v(cn, $c);
d = cn.prototype;
d.getObject = function() {
  var a = u();
  if (!(null != this.RC && a - this.RC < this.cA)) {
    var b = this.zca();
    b && (this.RC = a, this.vj.add(b));
    return b;
  }
};
d.$l = function(a) {
  return this.vj.remove(a) ? (this.Ry(a), !0) : !1;
};
d.zca = function() {
  for (var a;0 < this.NL() && (a = this.Tc.Mk(), !this.GD(a));) {
    this.vt();
  }
  !a && this.ja() < this.Al && (a = this.zh());
  return a;
};
d.Ry = function(a) {
  this.vj.remove(a);
  this.GD(a) && this.ja() < this.Al ? this.Tc.enqueue(a) : this.Nk(a);
};
d.vt = function() {
  for (var a = this.Tc;this.ja() < this.YP;) {
    a.enqueue(this.zh());
  }
  for (;this.ja() > this.Al && 0 < this.NL();) {
    this.Nk(a.Mk());
  }
};
d.zh = function() {
  return {};
};
d.Nk = function(a) {
  if ("function" == typeof a.ob) {
    a.ob();
  } else {
    for (var b in a) {
      a[b] = null;
    }
  }
};
d.GD = function(a) {
  return "function" == typeof a.NZ ? a.NZ() : !0;
};
d.contains = function(a) {
  return this.Tc.contains(a) || this.vj.contains(a);
};
d.ja = function() {
  return this.Tc.ja() + this.vj.ja();
};
d.u3 = function() {
  return this.vj.ja();
};
d.NL = function() {
  return this.Tc.ja();
};
d.nc = function() {
  return this.Tc.nc() && this.vj.nc();
};
d.aa = function() {
  cn.X.aa.call(this);
  if (0 < this.u3()) {
    throw Error("[goog.structs.Pool] Objects not released");
  }
  delete this.vj;
  for (var a = this.Tc;!a.nc();) {
    this.Nk(a.Mk());
  }
  delete this.Tc;
};
var dn = function(a, b) {
  this.Qg = a;
  this.Pe = b;
};
dn.prototype.getKey = function() {
  return this.Qg;
};
dn.prototype.zc = function() {
  return this.Pe;
};
dn.prototype.clone = function() {
  return new dn(this.Qg, this.Pe);
};
var en = function(a) {
  this.pf = [];
  a && this.c7(a);
};
d = en.prototype;
d.insert = function(a, b) {
  var c = this.pf;
  c.push(new dn(a, b));
  this.c9(c.length - 1);
};
d.c7 = function(a) {
  var b;
  if (a instanceof en) {
    if (b = a.ub(), a = a.T(), 0 >= this.ja()) {
      for (var c = this.pf, e = 0;e < b.length;e++) {
        c.push(new dn(b[e], a[e]));
      }
      return;
    }
  } else {
    b = Ob(a), a = Nb(a);
  }
  for (e = 0;e < b.length;e++) {
    this.insert(b[e], a[e]);
  }
};
d.remove = function() {
  var a = this.pf, b = a.length, c = a[0];
  if (!(0 >= b)) {
    return 1 == b ? rb(a) : (a[0] = a.pop(), this.b9(0)), c.zc();
  }
};
d.b9 = function(a) {
  for (var b = this.pf, c = b.length, e = b[a];a < c >> 1;) {
    var f = this.B3(a), h = this.J4(a), f = h < c && b[h].getKey() < b[f].getKey() ? h : f;
    if (b[f].getKey() > e.getKey()) {
      break;
    }
    b[a] = b[f];
    a = f;
  }
  b[a] = e;
};
d.c9 = function(a) {
  for (var b = this.pf, c = b[a];0 < a;) {
    var e = this.d4(a);
    if (b[e].getKey() > c.getKey()) {
      b[a] = b[e], a = e;
    } else {
      break;
    }
  }
  b[a] = c;
};
d.B3 = function(a) {
  return 2 * a + 1;
};
d.J4 = function(a) {
  return 2 * a + 2;
};
d.d4 = function(a) {
  return a - 1 >> 1;
};
d.T = function() {
  for (var a = this.pf, b = [], c = a.length, e = 0;e < c;e++) {
    b.push(a[e].zc());
  }
  return b;
};
d.ub = function() {
  for (var a = this.pf, b = [], c = a.length, e = 0;e < c;e++) {
    b.push(a[e].getKey());
  }
  return b;
};
d.Fk = function(a) {
  return kb(this.pf, function(b) {
    return b.zc() == a;
  });
};
d.Ra = function(a) {
  return kb(this.pf, function(b) {
    return b.getKey() == a;
  });
};
d.clone = function() {
  return new en(this);
};
d.ja = function() {
  return this.pf.length;
};
d.nc = function() {
  return qb(this.pf);
};
d.clear = function() {
  rb(this.pf);
};
var fn = function() {
  en.call(this);
};
v(fn, en);
fn.prototype.enqueue = function(a, b) {
  this.insert(a, b);
};
fn.prototype.Mk = function() {
  return this.remove();
};
var gn = function(a, b) {
  this.HJ = void 0;
  this.Uw = new fn;
  cn.call(this, a, b);
};
v(gn, cn);
d = gn.prototype;
d.getObject = function(a, b) {
  if (!a) {
    return (a = gn.X.getObject.call(this)) && this.cA && (this.HJ = g.setTimeout(t(this.pv, this), this.cA)), a;
  }
  this.Uw.enqueue(l(b) ? b : 100, a);
  this.pv();
};
d.pv = function() {
  for (var a = this.Uw;0 < a.ja();) {
    var b = this.getObject();
    if (b) {
      a.Mk().apply(this, [b]);
    } else {
      break;
    }
  }
};
d.Ry = function(a) {
  gn.X.Ry.call(this, a);
  this.pv();
};
d.vt = function() {
  gn.X.vt.call(this);
  this.pv();
};
d.aa = function() {
  gn.X.aa.call(this);
  g.clearTimeout(this.HJ);
  this.Uw.clear();
  this.Uw = null;
};
var hn = function(a, b, c, e) {
  this.Cd = a;
  this.Hi = !!e;
  gn.call(this, b, c);
};
v(hn, gn);
hn.prototype.zh = function() {
  var a = new Tf, b = this.Cd;
  b && b.forEach(function(b, e) {
    a.headers.set(e, b);
  });
  this.Hi && a.gG(!0);
  return a;
};
hn.prototype.GD = function(a) {
  return !a.isDisposed() && !a.jf();
};
var jn = function(a, b, c, e, f, h) {
  F.call(this);
  this.kd = l(a) ? a : 1;
  this.Ei = l(f) ? Math.max(0, f) : 0;
  this.Hi = !!h;
  this.zp = new hn(b, c, e, h);
  this.Ec = new H;
  this.Va = new Ik(this);
};
v(jn, F);
var kn = "ready complete success error abort timeout".split(" ");
d = jn.prototype;
d.Ax = function(a) {
  this.Ei = Math.max(0, a);
};
d.send = function(a, b, c, e, f, h, k, p, r, A) {
  if (this.Ec.get(a)) {
    throw Error("[goog.net.XhrManager] ID in use");
  }
  b = new ln(b, t(this.K5, this, a), c, e, f, k, l(p) ? p : this.kd, r, l(A) ? A : this.Hi);
  this.Ec.set(a, b);
  a = t(this.z5, this, a);
  this.zp.getObject(a, h);
  return b;
};
d.abort = function(a, b) {
  var c = this.Ec.get(a);
  if (c) {
    var e = c.wy;
    c.$da(!0);
    b && (e && (this.bS(e, c.fH), Bd(e, "ready", function() {
      this.zp.$l(e);
    }, !1, this)), this.Ec.remove(a));
    e && e.abort();
  }
};
d.z5 = function(a, b) {
  var c = this.Ec.get(a);
  c && !c.wy ? (this.DY(b, c.fH), b.Ax(this.Ei), b.jU(c.Wj), b.gG(c.Hi), c.wy = b, this.dispatchEvent(new mn("ready", this, a, b)), this.jS(a, b), c.DH && b.abort()) : this.zp.$l(b);
};
d.K5 = function(a, b) {
  var c = b.target;
  switch(b.type) {
    case "ready":
      this.jS(a, c);
      break;
    case "complete":
      return this.F5(a, c, b);
    case "success":
      this.w6(a, c);
      break;
    case "timeout":
    case "error":
      this.Og(a, c);
      break;
    case "abort":
      this.x5(a, c);
  }
  return null;
};
d.jS = function(a, b) {
  var c = this.Ec.get(a);
  !c || c.iJ || c.AC() ? (c && (this.bS(b, c.fH), this.Ec.remove(a)), this.zp.$l(b)) : (c.S6(), b.send(c.getUrl(), c.S8, c.$b, c.Xk()));
};
d.F5 = function(a, b, c) {
  var e = this.Ec.get(a);
  if (7 == b.xj || b.Ed() || e.AC()) {
    if (this.dispatchEvent(new mn("complete", this, a, b)), e && (e.Gea(!0), e.hJ)) {
      return e.hJ.call(b, c);
    }
  }
  return null;
};
d.x5 = function(a, b) {
  this.dispatchEvent(new mn("abort", this, a, b));
};
d.w6 = function(a, b) {
  this.dispatchEvent(new mn("success", this, a, b));
};
d.Og = function(a, b) {
  this.Ec.get(a).AC() && this.dispatchEvent(new mn("error", this, a, b));
};
d.bS = function(a, b, c) {
  this.Va.vd(a, c || kn, b);
};
d.DY = function(a, b, c) {
  this.Va.listen(a, c || kn, b);
};
d.aa = function() {
  jn.X.aa.call(this);
  this.zp.ob();
  this.zp = null;
  this.Va.ob();
  this.Va = null;
  this.Ec.clear();
  this.Ec = null;
};
var mn = function(a, b, c, e) {
  E.call(this, a, b);
  this.id = c;
  this.wy = e;
};
v(mn, E);
var ln = function(a, b, c, e, f, h, k, p, r) {
  this.iy = a;
  this.S8 = c || "GET";
  this.$b = e;
  this.Cd = f || null;
  this.kd = l(k) ? k : 1;
  this.mI = 0;
  this.DH = this.iJ = !1;
  this.fH = b;
  this.hJ = h;
  this.Wj = p || "";
  this.Hi = !!r;
  this.wy = null;
};
d = ln.prototype;
d.getUrl = function() {
  return this.iy;
};
d.Xk = function() {
  return this.Cd;
};
d.kj = function() {
  return this.kd;
};
d.S6 = function() {
  this.mI++;
};
d.AC = function() {
  return this.mI > this.kd;
};
d.Gea = function(a) {
  this.iJ = a;
};
d.$da = function(a) {
  this.DH = a;
};
var nn = function() {
  this.name = "unknown";
  this.state = "error";
  this.g7 = null;
  this.allowStop = !0;
  this.ui = null;
  this.extraData = {};
}, on = function(a, b) {
  this.qW = a;
  this.qh = b;
  this.uda = !!b && "running" == b.state;
}, rn = function(a, b, c) {
  void 0 === b && (pn || (pn = new jn(3, null, 1, 10, 2000)), b = pn);
  void 0 === c && (qn || (qn = new jn(0, null, 1, 10, 15000)), c = qn);
  w(!!a.Eh, "Receiver must have a DIAL app URL set.");
  this.kg = a;
  this.yp = b;
  this.Ap = [];
  this.rW = c;
  this.a = D("mr.dial.Client");
};
d = rn.prototype;
d.abort = function() {
  var a = this;
  this.Ap.forEach(function(b) {
    a.yp.abort(b, !0);
    a.rW.abort(b, !0);
  });
};
d.launchApp = function(a, b) {
  var c = new Oc, e = (++sn).toString();
  this.Ap.push(e);
  this.rW.send(e, this.EA(a), "POST", b, null, 0, this.oK("launchApp", "POST", e, c));
  return c.promise;
};
d.JU = function(a) {
  var b = new Oc, c = (++sn).toString();
  this.Ap.push(c);
  this.yp.send(c, this.EA(a), "DELETE", null, null, 0, this.oK("stopApp", "DELETE", c, b), 0);
  return b.promise;
};
d.CA = function(a) {
  var b = this;
  return new Promise(function(c) {
    var e = (++sn).toString();
    b.Ap.push(e);
    b.yp.send(e, b.EA(a), "GET", null, null, 0, t(b.T9, b, e, c));
  });
};
d.T9 = function(a, b, c) {
  wb(this.Ap, a);
  a = c.target;
  Qe(this.a, "GetAppInfo", "GET", a, !0);
  if (a.Ed()) {
    if (c = (c = a.ef()) ? Re(c) : null) {
      var e = c.getElementsByTagName("service");
      if (e && 1 == e.length) {
        c = new nn;
        for (var f = 0, h = e[0].childNodes.length;f < h;f++) {
          var k = e[0].childNodes[f];
          if ("state" == k.nodeName) {
            a: {
              switch(k.textContent) {
                case "running":
                  k = "running";
                  break a;
                case "stopped":
                  k = "stopped";
                  break a;
                default:
                  k = "error";
              }
            }
            c.state = k;
          } else {
            "name" == k.nodeName ? c.name = k.textContent : "link" == k.nodeName ? c.ui = k.getAttribute("href") : "options" == k.nodeName ? c.allowStop = "false" != k.getAttribute("allowStop") : c.extraData[k.nodeName] = k.innerHTML;
          }
        }
        if ("unknown" == c.name) {
          this.a.info("GET response missing name value"), b(new on(a, null));
        } else {
          if ("error" == c.state) {
            this.a.info("GET response missing state value"), b(new on(a, null));
          } else {
            if ((e = /installable=(.+)/.exec(c.state)) && e[1]) {
              c.state = "installable", c.g7 = e[1];
            } else {
              if ("running" != c.state && "stopped" != c.state) {
                this.a.info("GET response has invalid state value");
                b(new on(a, null));
                return;
              }
            }
            b(new on(a, c));
          }
        }
      } else {
        this.a.info("Invalid GET response (invalid service)"), b(new on(a, null));
      }
    } else {
      this.a.info("Invalid or empty response"), b(new on(a, null));
    }
  } else {
    this.a.info("Request to " + a.Yu() + " failed"), b(new on(a, null));
  }
};
d.EA = function(a) {
  var b = this.kg.Eh;
  "/" != b.charAt(b.length - 1) && (b += "/");
  return b + a;
};
d.oK = function(a, b, c, e) {
  var f = this;
  return function(h) {
    wb(f.Ap, c);
    h = h.target;
    Qe(f.a, a, b, h, !0);
    h.Ed() ? e.resolve(void 0) : e.reject(Error(rf(h.xj)));
  };
};
var pn = null, qn = null, sn = 999;
var tn = function(a, b, c) {
  this.appName = b;
  this.launchParameter = void 0 === c ? "" : c;
}, vn = function(a) {
  if (a.startsWith("urn:dial-multiscreen-org:dial:application:")) {
    var b = a.indexOf("?"), c = a.substring(42, 0 < b ? b : void 0);
    a = c && 0 < c.length ? new tn(a, c, 0 < b ? a.substring(b + 1) : void 0) : null;
  } else {
    a = un(a);
  }
  return a;
}, un = function(a) {
  var b = (new Yj(a)).Uk;
  if (!b) {
    return null;
  }
  var c = wn.exec(b), c = c ? c[1] : null;
  if (!c) {
    return null;
  }
  c = decodeURIComponent(c);
  if (b = (b = xn.exec(b)) ? b[1] : void 0) {
    try {
      b = Vj(b);
    } catch (e) {
      return yn.v("Invalid base64 encoded postData:" + b), null;
    }
  }
  return new tn(a, c, b);
}, yn = D("mr.dial.MediaSource"), wn = /__dialAppName__=([A-Za-z0-9-._~!$&'()*+,;=%]+)/, xn = /__dialPostData__=([A-Za-z0-9]+={0,2})/;
var zn = function(a, b) {
  this.pb = a;
  this.appName = b;
};
var An = function(a) {
  this.Ge = new Map;
  this.Ny = a;
};
d = An.prototype;
d.init = function() {
  ei(this);
};
d.clear = function() {
  this.Ge.clear();
};
d.add = function(a) {
  this.UK(a.pb.id) || (this.Ge.set(a.pb.id, a), this.Ny.j9(a));
};
d.UK = function(a) {
  return this.Ge.get(a) || null;
};
d.VK = function(a) {
  for (var b = ka(this.Ge), c = b.next();!c.done;c = b.next()) {
    if (c = ka(c.value), c.next(), c = c.next().value, c.pb.sinkId == a) {
      return c;
    }
  }
  return null;
};
d.wca = function(a) {
  if (a = this.VK(a)) {
    this.Ge.delete(a.pb.id), this.Ny.pQ(a);
  }
};
d.VR = function(a) {
  var b = this.Ge.get(a);
  b && (this.Ge.delete(a), this.Ny.pQ(b));
};
d.Kg = function() {
  return Array.from(this.Ge.values(), function(a) {
    return a.pb;
  });
};
d.W1 = function() {
  return Array.from(this.Ge.values());
};
d.Ca = function() {
  return "dial.ActivityRecords";
};
d.getData = function() {
  return [Array.from(this.Ge)];
};
d.wb = function() {
  var a = bi(this);
  a && (this.Ge = new Map(a));
};
var Bn = {Qla:0, soa:1, qna:2, Pla:3}, Cn = {ERROR:0, Ina:1, EMPTY:2}, Dn = function(a) {
  oh("MediaRouter.Dial.Create.Route", a, Bn);
}, En = function(a) {
  oh("MediaRouter.Dial.Device.Description.Failure", a, Cn);
};
var Fn = /^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/, Gn = [4278190080, 4293918720, 4294901760], Hn = [167772160, 2886729728, 3232235520], In = function(a) {
  var b = document.createElement("a");
  b.href = a;
  return b;
};
var Jn = function() {
  this.configId = this.modelName = this.deviceType = this.expireTimeMillis = this.fetchTimeMillis = this.appUrl = this.ipAddress = this.friendlyName = this.deviceLabel = this.uniqueId = null;
};
Jn.prototype.OG = function() {
  var a;
  if (this.deviceLabel) {
    if (this.uniqueId) {
      if (this.friendlyName) {
        if (this.ipAddress) {
          if (this.appUrl) {
            if (this.fetchTimeMillis) {
              if (this.expireTimeMillis) {
                a = this.ipAddress;
                var b = In(this.appUrl);
                a = "http:" == b.protocol && b.hostname == a ? null : "Invalid appUrl";
              } else {
                a = "Missing expireTimeMillis";
              }
            } else {
              a = "Missing fetchTimeMillis";
            }
          } else {
            a = "Missing appUrl";
          }
        } else {
          a = "Missing ipAddress";
        }
      } else {
        a = "Missing friendlyName";
      }
    } else {
      a = "Missing uniqueId";
    }
  } else {
    a = "Missing deviceLabel";
  }
  return a;
};
Jn.prototype.toString = function() {
  return JSON.stringify(this, function(a, b) {
    return n(b) && 0 == b.indexOf("uuid:") ? "***" : b;
  });
};
var Kn = function(a) {
  var b = new Jn;
  b.uniqueId = a.uniqueId;
  b.deviceLabel = a.deviceLabel;
  b.friendlyName = a.friendlyName;
  b.ipAddress = a.ipAddress;
  b.appUrl = a.appUrl;
  b.fetchTimeMillis = a.fetchTimeMillis;
  b.expireTimeMillis = a.expireTimeMillis;
  b.deviceType = a.deviceType;
  b.modelName = a.modelName;
  b.configId = a.configId;
  return b;
}, Nn = function(a) {
  this.Qp = new Map;
  this.rc = new Map;
  this.mE = new Map;
  var b;
  (b = a) || (Ln || (Ln = new jn(3, null, 1, 10, 2000)), b = Ln);
  this.yp = b;
  a || (Mn || (Mn = new jn(2, null, 1, 10, 3000)), a = Mn);
  this.ZX = a;
  this.a = D("mr.dial.DeviceDescriptionService");
  ei(this);
};
d = Nn.prototype;
d.Ca = function() {
  return "mr.dial.DeviceDescriptionService";
};
d.getData = function() {
  return [Array.from(this.Qp)];
};
d.wb = function() {
  var a = bi(this);
  if (a) {
    for (var a = ka(a), b = a.next();!b.done;b = a.next()) {
      var c = ka(b.value), b = c.next().value, c = c.next().value;
      null != Kn(c).OG() ? this.a.error("Dropping invalid description " + b + " loaded from storage.") : this.Qp.set(b, Kn(c));
    }
  }
};
d.X2 = function(a) {
  var b = this.a_(a);
  return b ? (nh("MediaRouter.Dial.Device.Description.Cached"), Promise.resolve(b)) : this.u1(a);
};
d.YX = function(a) {
  var b = this.rc.get(a);
  b && (this.yp.abort(a, !0), b.Pb.reject(Error("Aborted")));
};
d.a_ = function(a) {
  var b = this.Qp.get(a.deviceLabel);
  return b ? b.configId != a.configId || Date.now() >= b.expireTimeMillis ? (this.a.L("Removing invalid entry " + b.toString()), this.Qp.delete(a.deviceLabel), null) : b : null;
};
d.u1 = function(a) {
  var b = this;
  if (!On(a.deviceDescriptionUrl)) {
    return Promise.reject(Error("Invalid device description URL: " + a.deviceDescriptionUrl));
  }
  var c = this.rc.get(a.deviceLabel);
  if (c) {
    if (c.deviceDescriptionUrl == a.deviceDescriptionUrl) {
      return c.Pb.promise;
    }
    this.YX(a.deviceLabel);
  }
  var e = new Oc, c = {deviceDescriptionUrl:a.deviceDescriptionUrl, Pb:e};
  this.rc.set(a.deviceLabel, c);
  chrome.dial.fetchDeviceDescription ? chrome.dial.fetchDeviceDescription(a.deviceLabel, function(c) {
    b.rc.delete(a.deviceLabel);
    c ? (c = b.tR(a, c.deviceDescription, c.appUrl)) ? e.resolve(c) : e.reject(Error("Failed to process fetch result")) : e.reject(chrome.runtime.lastError && chrome.runtime.lastError.message ? Error("chrome.dial.fetchDeviceDescription failed, chrome.runtime.lastError: " + chrome.runtime.lastError.message) : Error("chrome.dial.fetchDeviceDescription failed, chrome.runtime.lastError: Unknown error"));
  }) : this.yp.send(a.deviceLabel, a.deviceDescriptionUrl, "GET", null, null, 0, function(c) {
    b.rc.delete(a.deviceLabel);
    (c = b.B6(a, c)) ? e.resolve(c) : e.reject(Error("Failed to get device description"));
  });
  return e.promise;
};
d.B6 = function(a, b) {
  var c = b.target;
  Qe(this.a, "fetchDeviceDescription", "GET", c);
  if (!c.Ed()) {
    return this.a.info("Request to " + c.Yu() + " failed"), En(0), null;
  }
  b = c.ef();
  if (!b) {
    return this.a.info("Invalid or empty response"), En(2), null;
  }
  c = c.getResponseHeader("Application-URL");
  return c ? this.tR(a, b, c) : (this.a.info("Invalid or empty AppURL"), En(2), null);
};
d.tR = function(a, b, c) {
  b = this.taa(a, b, c);
  if (!b) {
    return En(1), this.a.info("Invalid device description"), null;
  }
  this.a.info("Got device description for " + b.deviceLabel);
  this.a.L("... device description was: " + b.toString());
  null != b.configId && (this.a.L("Caching device description for " + b.deviceLabel), this.Qp.set(a.deviceLabel, b));
  return b;
};
d.taa = function(a, b, c) {
  var e = Re(b);
  if (!e) {
    return null;
  }
  var f = new Jn;
  f.fetchTimeMillis = Date.now();
  f.expireTimeMillis = f.fetchTimeMillis + 18E5;
  f.deviceLabel = a.deviceLabel;
  f.configId = a.configId;
  a = In(a.deviceDescriptionUrl);
  f.ipAddress = a.hostname;
  f.deviceType = Pn(e, "deviceType");
  f.modelName = Pn(e, "modelName");
  f.friendlyName = Pn(e, "friendlyName");
  f.uniqueId = Pn(e, "UDN");
  !f.friendlyName && f.modelName && (f.friendlyName = f.modelName, f.uniqueId && (f.friendlyName += "[" + f.uniqueId.slice(-4) + "]"), this.a.v("Fixed device description: created friendlyName from modelName."));
  f.appUrl = c;
  c = f.OG();
  this.a.L(function() {
    return "Device description: " + Qn(e);
  });
  return c ? (this.a.v(function() {
    return "Device description failed to validate: " + f;
  }, c), null) : f;
};
var Pn = function(a, b) {
  return (a = a.getElementsByTagName(b)) && 0 != a.length ? a[0].textContent : null;
}, Qn = function(a) {
  var b = function(a) {
    for (var b = 0, c = a.length;b < c;b++) {
      a[b].textContent = "***";
    }
  };
  b(a.getElementsByTagName("UDN"));
  b(a.getElementsByTagName("serialNumber"));
  return (new XMLSerializer).serializeToString(a);
};
Nn.prototype.Tp = function(a) {
  var b = this, c = this.mE.get(a);
  if (c) {
    return c.promise;
  }
  c = new Oc;
  this.mE.set(a, c);
  this.ZX.send(a, a, "GET", null, null, 0, function(e) {
    b.mE.delete(a);
    e = e.target;
    Qe(b.a, "checkAccess", "GET", e, !1);
    c.resolve(e.Ed());
  });
  return c.promise;
};
var On = function(a) {
  a = In(a);
  var b;
  if (b = "http:" == a.protocol) {
    a: {
      b: {
        if ((a = a.hostname.match(Fn)) && 5 == a.length) {
          b = [];
          for (var c = 0;4 > c;c++) {
            if (b[c] = Number.parseInt(a[c + 1], 10), 0 > b[c] || 255 < b[c]) {
              a = null;
              break b;
            }
          }
          a = b;
        } else {
          a = null;
        }
      }
      if (a) {
        for (a = (a[0] << 24 | a[1] << 16 | a[2] << 8 | a[0]) >>> 0, b = 0;3 > b;b++) {
          if ((a & Gn[b]) >>> 0 == Hn[b]) {
            b = !0;
            break a;
          }
        }
      }
      b = !1;
    }
  }
  return b;
}, Ln = null, Mn = null;
var Rn = null, Sn = null, Tn = function() {
  Rn || (Rn = new nj(3, "dial.DialOnDeviceListEventListener", "mr.dial.SinkDiscoveryService", chrome.dial.onDeviceList));
  Sn || (Sn = new nj(4, "dial.DialOnErrorEventListener", "mr.dial.SinkDiscoveryService", chrome.dial.onError));
  return [Rn, Sn];
};
var Un = function(a, b) {
  b = void 0 === b ? new Nn : b;
  this.Is = a;
  this.JJ = b;
  this.a = D("mr.dial.SinkDiscoveryService");
  this.td = new Map;
  this.pw = this.iD = !1;
  this.Ag = {Sm:0, co:0};
  this.lu = 0;
};
la(Un, Dh);
d = Un.prototype;
d.init = function() {
  ei(this);
  Nh("mr.dial.SinkDiscoveryService", this);
};
d.start = function() {
  this.iD || (this.a.info("Starting..."), this.iD = !0, Tn().forEach(function(a) {
    return a.addListener();
  }), this.refresh());
};
d.refresh = function() {
  var a = this;
  this.iD ? chrome.dial.discoverNow(function(b) {
    a.a.info("chrome.dial.discoverNow = " + b);
  }) : this.a.info("Not started. Ignoring discover().");
};
d.O9 = function(a) {
  var b = this;
  this.a.info("onDeviceList returned " + a.length + " devices");
  this.a.L(function() {
    return "....the list is: " + JSON.stringify(a);
  });
  this.pw = !1;
  var c = 0, e = [], f = new Set;
  a.forEach(function(a) {
    e.push(b.qba(a).then(function(a) {
      f.add(a.getId());
      b.s8(a);
    }, function() {
      c++;
    }));
  });
  Mi(e).then(function() {
    b.pw || b.Hw(f).then(function() {
      var a = b.td.size;
      b.HR(a, a + c);
    });
  });
};
d.HR = function(a, b) {
  this.Ag = {Sm:a, co:b};
  36E5 > Date.now() - this.lu || (a = this.Ag, ph("MediaRouter.Dial.AvailableDevicesCount", a.Sm), ph("MediaRouter.Dial.KnownDevicesCount", a.co), this.lu = Date.now());
};
d.s8 = function(a) {
  if (!this.pw) {
    this.a.L("mayAddSink, id = " + a.getId());
    var b = this.td.get(a.getId());
    b ? b.update(a) && (this.a.L("Updated sink " + b.getId()), this.Is.De(b)) : (this.a.L(function() {
      return "Adding new sink " + a.getId() + ": " + a.$U();
    }), this.td.set(a.getId(), a), this.Is.Ml(a));
  }
};
d.Hw = function(a) {
  var b = this, c = [], e = [];
  this.td.forEach(function(f) {
    a.has(f.getId()) || e.push(b.$Z(f).then(function(a) {
      a || (b.td.delete(f.getId()), c.push(f));
    }));
  });
  return Mi(e).then(function() {
    0 < c.length && b.Is.bg(c);
  });
};
d.$Z = function(a) {
  return a.Ch ? this.JJ.Tp(a.Ch) : Promise.resolve(!1);
};
d.qba = function(a) {
  return this.JJ.X2(a).then(function(b) {
    var c;
    b.uniqueId ? (c = b.uniqueId, 0 == c.indexOf("uuid:") && (c = c.substr(5)), c = c.replace(/-/g, "").toLowerCase()) : c = "";
    var e = b.uniqueId ? pk.ea().yn(c) : a.deviceLabel, f = Vn.test(b.modelName);
    return (new dl(b.friendlyName, c)).ox(e).Cfa(b.ipAddress).$ea(b.appUrl).Yea(a.deviceDescriptionUrl).Xfa(b.modelName).tU(!f);
  });
};
d.L$ = function(a) {
  switch(a.code) {
    case "no_valid_network_interfaces":
    case "network_disconnected":
      this.a.v("DIAL error: " + a.code + ". Clear device list now.");
      a = Array.from(this.td.values());
      this.td.clear();
      this.Is.bg(a);
      this.HR(0, 0);
      this.pw = !0;
      break;
    case "no_listeners":
    case "socket_error":
    case "cellular_network":
    case "unknown":
      this.a.v("DIAL error: " + a.code + ". Keep device list.");
      break;
    default:
      this.a.v("Unhandled DIAL error: " + a.code);
  }
};
d.ma = function(a) {
  return this.td.get(a) || null;
};
d.X4 = function(a) {
  var b = [];
  this.td.forEach(function(c) {
    "available" == c.Nf(a) && b.push(c.mj());
  });
  var c = Wn[a];
  return new Km(b, c ? [c] : void 0);
};
d.ff = function() {
  return Array.from(this.td.values());
};
d.s9 = function(a, b) {
  this.Is.De(b);
};
d.handleEvent = function(a, b) {
  for (var c = [], e = 1;e < arguments.length;++e) {
    c[e - 1] = arguments[e];
  }
  if (a == chrome.dial.onDeviceList) {
    this.O9.apply(this, [].concat(ma(c)));
  } else {
    if (a == chrome.dial.onError) {
      this.L$.apply(this, [].concat(ma(c)));
    } else {
      throw Error("Unhandled event");
    }
  }
};
d.Ca = function() {
  return "dial.DialSinkDiscoveryService";
};
d.getData = function() {
  return [new Xn(Array.from(this.td), this.Ag), {deviceCountMetricsRecordTime:this.lu}];
};
d.wb = function() {
  var a = bi(this);
  if (a) {
    for (var b = ka(a.sinks), c = b.next();!c.done;c = b.next()) {
      c = c.value, this.td.set(c[0], el(c[1]));
    }
    this.Ag = a.deviceCounts;
  }
  if (a = ci(this)) {
    this.lu = a.deviceCountMetricsRecordTime;
  }
};
var Wn = {YouTube:"https://www.youtube.com", Netflix:"https://www.netflix.com", Pandora:"https://www.pandora.com", Radio:"https://www.pandora.com", Hulu:"https://www.hulu.com", Vimeo:"https://www.vimeo.com", Dailymotion:"https://www.dailymotion.com", "com.dailymotion":"https://www.dailymotion.com"}, Vn = /Eureka Dongle|Chromecast Audio/i, Xn = function(a, b) {
  this.sinks = a;
  this.deviceCounts = b;
};
var Yn = function(a, b) {
  this.a = D("mr.dial.AppDiscoveryService");
  this.pd = new Set;
  this.qa = a;
  this.ne = b;
  this.rc = new Map;
  this.Nz = new Map;
  this.lg = null;
  this.Jo = !1;
};
d = Yn.prototype;
d.init = function() {
  ei(this);
};
d.start = function() {
  this.a.info("Starting periodic scanning.");
  this.Jo || (this.Jo = !0, this.TJ());
};
d.stop = function() {
  this.a.info("Stopping periodic scanning.");
  this.Jo && (this.Jo = !1, this.lg && (clearTimeout(this.lg), this.lg = null), this.rc.clear(), this.Nz.forEach(function(a) {
    a.abort();
  }));
};
d.IE = function(a) {
  if (!this.pd.has(a) || this.IY(a)) {
    this.pd.add(a), 0 != this.qa.td.size && (this.Jo ? this.qa.ff().forEach(this.SJ.bind(this, a)) : this.start());
  }
};
d.zG = function(a) {
  this.pd.delete(a);
};
d.z4 = function() {
  return Array.from(this.pd);
};
d.TJ = function() {
  var a = this;
  this.a.info("Start app status scan.");
  var b = [];
  this.qa.ff().forEach(function(c) {
    b.push.apply(b, a.ps(c));
  });
  this.ne.W1().forEach(function(c) {
    b.push(a.wda(c));
  });
  Mi(b).then(function() {
    a.Jo && !a.lg && (a.a.L("Scan complete; scheduling for next scan."), a.lg = setTimeout(function() {
      a.N0();
    }, 6E4));
  });
};
d.N0 = function() {
  this.a.L("Start app status scan (timer-based)");
  this.lg = null;
  this.TJ();
};
d.ps = function(a) {
  if (!a.fp) {
    return [];
  }
  for (var b = [], c = ka(this.pd), e = c.next();!e.done;e = c.next()) {
    b.push(this.SJ(e.value, a));
  }
  return b;
};
d.SJ = function(a, b) {
  if ("unknown" != b.Nf(a) && 36E5 > Date.now() - b.b2(a) || !b.fp) {
    return Promise.resolve();
  }
  this.a.L("Querying " + b.getId() + " for " + a + " to update app status");
  return this.IK(b, a).then(this.A8.bind(this, b, a));
};
d.wda = function(a) {
  var b = this.qa.ma(a.pb.sinkId);
  if (!b) {
    return this.a.v("Activity refers to nonexistent sink: " + a.pb.id), Promise.resolve();
  }
  if (!b.fp) {
    return Promise.resolve();
  }
  a = a.appName;
  this.a.L("Querying " + b.getId() + " for " + a + " to update activity");
  return this.IK(b, a).then(this.z8.bind(this, b, a));
};
d.Z2 = function(a) {
  var b = this.Nz.get(a.getId());
  b || (b = new rn(a), this.a.L("Created DIAL client for " + a.getId()), this.Nz.set(a.getId(), b));
  return b;
};
d.IK = function(a, b) {
  var c = this, e = Zn(a, b), f = this.rc.get(e);
  if (f) {
    return f;
  }
  f = this.Z2(a).CA(b);
  this.rc.set(e, f);
  a = function() {
    c.rc.delete(e);
  };
  f.then(a, a);
  return f;
};
d.j2 = function(a, b) {
  if (404 == b.qW.Sa()) {
    return "unavailable";
  }
  b = b.qh;
  if ("Netflix" == a) {
    return this.a2(b);
  }
  switch(b.state) {
    case "running":
    case "stopped":
      return "available";
    default:
      return "unavailable";
  }
};
d.a2 = function(a) {
  w("Netflix" == a.name, "Expecting app name to be Netflix");
  return !a.extraData || "websocket" != a.extraData.capabilities || "running" != a.state && "stopped" != a.state ? "unavailable" : "available";
};
var Zn = function(a, b) {
  return a.getId() + ":" + b;
};
d = Yn.prototype;
d.A8 = function(a, b, c) {
  if (404 == c.qW.Sa() || c.qh) {
    c = this.j2(b, c);
    this.a.L("Got app status " + c + " from " + a.getId() + " for " + b);
    var e = a.Nf(b);
    a.us(b, c);
    c != e && this.qa.s9(b, a);
  } else {
    this.a.v("Failed to process app availability; " + a.getId() + " does not support app availability"), a.tU(!1);
  }
};
d.z8 = function(a, b, c) {
  (a = this.ne.VK(a.getId())) && a.appName == b && !c.uda && this.ne.VR(a.pb.id);
};
d.IY = function(a) {
  return this.qa.ff().some(function(b) {
    return "unknown" == b.Nf(a);
  });
};
d.Ca = function() {
  return "dial.AppDiscoveryService";
};
d.getData = function() {
  return [this.z4()];
};
d.wb = function() {
  var a = bi(this);
  this.pd = new Set(a || []);
};
var $n = function(a, b, c) {
  this.F = a;
  this.sd = b || new Un(this);
  this.ne = new An(this);
  this.pe = c || new Yn(this.sd, this.ne);
  this.a = D("mr.DialProvider");
};
d = $n.prototype;
d.getName = function() {
  return "dial";
};
d.Xc = function() {
  this.ne.init();
  this.sd.init();
  this.sd.start();
  this.pe.init();
  this.Kr();
};
d.fj = function(a) {
  this.a.L("GetAvailableSinks for " + a);
  return (a = vn(a)) ? this.sd.X4(a.appName) : Lm;
};
d.startObservingMediaSinks = function(a) {
  if (a = vn(a)) {
    this.pe.IE(a.appName), this.Kr();
  }
};
d.stopObservingMediaSinks = function(a) {
  if (a = vn(a)) {
    this.pe.zG(a.appName), this.dw();
  }
};
d.startObservingMediaRoutes = function() {
  this.Kr();
};
d.stopObservingMediaRoutes = function() {
  this.dw();
};
d.dw = function() {
  (0 == this.sd.td.size || 0 == this.pe.pd.size && 0 == this.ne.Ge.size) && this.pe.stop();
};
d.Kr = function() {
  0 < this.sd.td.size && (0 < this.pe.pd.size || 0 < this.ne.Ge.size) && this.pe.start();
};
d.ma = function(a) {
  return (a = this.sd.ma(a)) ? a.mj() : null;
};
d.Kg = function() {
  return this.ne.Kg();
};
d.createRoute = function(a, b, c, e) {
  var f = this, h = this.sd.ma(b);
  if (!h) {
    return Dn(0), Xg(Error("Unkown sink: " + b));
  }
  pk.ea().Zl = new ok(h.nd, h.Ea);
  var k = vn(a);
  if (!k) {
    return Xg(Error("No app name set."));
  }
  var p = k.appName, r = this.gQ(h);
  return Yg(r.CA(p).then(function(a) {
    if (!a.qh) {
      throw Error("Failed to get app info");
    }
    if ("running" == a.qh.state) {
      return r.JU(p);
    }
  }).then(function() {
    return r.launchApp(p, k.launchParameter);
  }).then(function() {
    return f.sg(b, a, !0, p, c, e);
  }).catch(function(a) {
    Dn(3);
    throw a;
  }));
};
d.joinRoute = function() {
  return Xg(Error("Not supported"));
};
d.connectRouteByRouteId = function() {
  return Xg(Error("Not supported"));
};
d.detachRoute = function() {
};
d.sg = function(a, b, c, e, f, h) {
  Dn(1);
  a = Pm(f, this.getName(), a, b, c, e, null);
  a.offTheRecord = h;
  this.ne.add(new zn(a, e));
  return a;
};
d.Ml = function(a) {
  this.F.onSinkAvailabilityUpdated(this, 1);
  this.Kr();
  this.pe.ps(a);
  this.F.qf();
  pk.ea().Yl = new ok(a.nd, a.Ea);
};
d.bg = function(a) {
  var b = this;
  if (0 == this.sd.td.size) {
    this.F.onSinkAvailabilityUpdated(this, 0);
  }
  this.dw();
  a.forEach(function(a) {
    b.ne.wca(a.getId());
  });
  this.F.qf();
};
d.De = function() {
  this.F.qf();
};
d.j9 = function(a) {
  this.Kr();
  this.F.Ll(this, a.pb);
};
d.pQ = function(a) {
  a = a.pb;
  if (a.isLocal) {
    this.F.onPresentationConnectionStateChanged(a.id, "terminated");
  }
  this.dw();
  this.F.ii(this, a);
};
d.terminateRoute = function(a) {
  var b = this.ne.UK(a);
  if (!b) {
    return Promise.reject(new Jm(3, "Route in DIAL provider not found for routeId " + a));
  }
  this.ne.VR(a);
  return (a = this.sd.ma(b.pb.sinkId)) ? this.gQ(a).JU(b.appName) : Promise.reject(new Jm(3, "Sink in DIAL provider not found for sinkId " + b.pb.sinkId));
};
d.al = function() {
  return null;
};
d.$k = function() {
  return null;
};
d.sendRouteMessage = function() {
  return Promise.reject(Error("DIAL sending messages is not supported"));
};
d.sendRouteBinaryMessage = function() {
  return Promise.reject(Error("DIAL sending messages is not supported"));
};
d.Vm = function(a, b) {
  b = this.sd.ma(b);
  return !b || yh(a) ? !1 : (a = vn(a)) ? "available" == b.Nf(a.appName) : !1;
};
d.zk = function() {
  return !1;
};
d.searchSinks = function() {
  return null;
};
d.gQ = function(a) {
  return new rn(a);
};
var ao = function(a, b) {
  this.WZ = a;
  this.hA = b;
  this.Ri = this.WZ.qa;
  this.a = D("mr.cast.CastDialSinkDiscoveryCallbacks");
};
d = ao.prototype;
d.Q0 = function(a) {
  return this.Ri.Tp(a);
};
d.AN = function(a) {
  var b = this.Ri.ma(a.getId());
  return b ? b : (a = a.Ea) ? this.Ri.V4(a, pk.ea().Xm || 8009) : null;
};
d.Ml = function(a) {
  this.AN(a) ? ql(2) : this.mV(a);
  this.hA.Ml(a);
};
d.mV = function(a) {
  var b = this, c = gl(a);
  c && this.Q0(c).then(function(e) {
    e ? b.AN(a) ? ql(2) : (b.Ri.Fp(c), ql(0)) : nh("MediaRouter.Dial.Sink.Discovered.NonCast");
  }, pa);
};
d.bg = function(a) {
  var b = this;
  x(a, function(a) {
    var c = b.Ri.ma(a.getId());
    c && c.qn && b.Ri.bm(a.getId());
  });
  this.hA.bg(a);
};
d.De = function(a) {
  var b = this.Ri.ma(a.getId());
  b ? b.qn && (b.update(a.Fn(), a.Ea, b.vb(), b.re) && this.a.info("Updated Cast sink with DIAL sink: " + a.getId()), this.Ri.De(b)) : this.mV(a);
  this.hA.De(a);
};
var bo = function(a, b) {
  this.qa = new Un(new ao(b, this));
  this.gm = new H;
  this.F = a;
  this.ts = this.km = 0;
  this.Dr = new Ne;
  this.Fb = new $n(this, this.qa);
};
d = bo.prototype;
d.Ca = function() {
  return "cast.DialProviderWrapper";
};
d.getData = function() {
  return [new co(this.gm.g(), this.km, this.ts, this.Dr.T())];
};
d.wb = function() {
  var a = bi(this);
  a && (this.gm.addAll(a.mda), this.km = a.sequenceNumber, this.ts = a.Zda, this.Dr.addAll(a.T7));
};
d.getName = function() {
  return this.Fb.getName();
};
d.Xc = function() {
  this.Fb.Xc();
  ei(this);
};
d.Kg = function() {
  return this.Fb.Kg();
};
d.FQ = function() {
};
d.fj = function(a) {
  return this.Fb.fj(a);
};
d.startObservingMediaSinks = function(a) {
  this.Fb.startObservingMediaSinks(a);
};
d.stopObservingMediaSinks = function(a) {
  this.Fb.stopObservingMediaSinks(a);
};
d.startObservingMediaRoutes = function(a) {
  this.Fb.startObservingMediaRoutes(a);
};
d.stopObservingMediaRoutes = function(a) {
  this.Fb.stopObservingMediaRoutes(a);
};
d.ma = function(a) {
  return this.Fb.ma(a);
};
d.Nu = function(a) {
  return new rn(a);
};
d.XA = function(a) {
  return this.qa.ma(a);
};
d.L0 = function(a, b, c, e) {
  var f = this, h = vn(a), k = this.XA(b);
  if (!k) {
    return Promise.reject(Error("Attempting custom launch with closed route"));
  }
  var p = h.appName;
  if (!p) {
    return Promise.reject(Error("No app name given"));
  }
  var r = lm(a);
  if (!r) {
    return Promise.reject(Error("No client ID"));
  }
  var A = null;
  return this.Nu(k).CA(p).then(function(a) {
    if (!a.qh) {
      return Promise.reject(Error("Failed to get app info"));
    }
    A = a.qh;
  }).then(function() {
    return f.Fb.sg(b, a, !0, p, e, c);
  }).then(function(a) {
    var b = {routeId:a.id, sinkId:k.getId(), appName:p, qh:A, launchParameter:h.launchParameter, session:null, clientId:null};
    f.gm.set(a.id, b);
    f.Y_(b, r);
    return a;
  });
};
d.n7 = function(a) {
  return eo.test(a);
};
d.createRoute = function(a, b, c, e, f, h, k) {
  return this.n7(a) ? Yg(this.L0(a, b, e, c)) : this.Fb.createRoute(a, b, c, e, f, h, k);
};
d.terminateRoute = function(a) {
  var b = this.gm.get(a);
  if (b && b.session && b.clientId) {
    var c = {receiver:this.Vz(b.sinkId), action:chrome.cast.Cp.STOP}, c = new dm("receiver_action", c);
    c.clientId = b.clientId;
    this.F.ag(this, b.routeId, c);
    this.F.onPresentationConnectionStateChanged(b.routeId, "terminated");
  }
  return this.Fb.terminateRoute(a);
};
d.sendRouteMessage = function(a, b, c) {
  var e = JSON.parse(b);
  switch(e.type) {
    case "client_connect":
      return this.Mca(a, e.clientId);
    case "custom_dial_launch":
      if (this.Dr.contains(e.sequenceNumber)) {
        return this.E9(a, e);
      }
      break;
    case "v2_message":
      if ("STOP" == e.message.type) {
        return this.terminateRoute(a), Promise.resolve();
      }
  }
  return this.Fb.sendRouteMessage(a, b, c);
};
d.sendRouteBinaryMessage = function(a) {
  return Promise.reject(Error("Route " + a + " does not support sending binary data."));
};
d.W3 = function() {
  var a = String(this.ts);
  this.ts = (this.ts + 1) % 9007199254740992;
  return a;
};
d.Y_ = function(a, b) {
  var c = this.Vz(a.sinkId), e = new dm("receiver_action", {receiver:c, action:chrome.cast.Cp.CAST});
  e.clientId = b;
  this.F.ag(this, a.routeId, e);
  c = new chrome.cast.M(this.W3(), "", a.appName, [], c);
  a.session = c;
  a.clientId = b;
  c = new dm("new_session", c);
  c.clientId = b;
  this.F.ag(this, a.routeId, c);
};
d.E9 = function(a, b) {
  this.Dr.remove(b.sequenceNumber);
  b = b.message;
  a = this.gm.get(a);
  if (!a) {
    return Promise.reject(Error("Unknown route"));
  }
  if (b && !b.doLaunch) {
    return Promise.resolve();
  }
  var c = this.XA(a.sinkId);
  if (!c) {
    return Promise.reject(Error("Custom launch response for sink that no longer exists"));
  }
  var c = new rn(c), e = a.launchParameter, e = (b ? b.launchParameter : null) || e;
  return c.launchApp(a.appName, e);
};
d.Vz = function(a) {
  var b = this.XA(a);
  a = new chrome.cast.Gy(a, b.Fn());
  a.ipAddress = b.Ea;
  a.receiverType = chrome.cast.ot.DIAL;
  return a;
};
d.V3 = function() {
  var a = this.km;
  this.km = (this.km + 1) % 9007199254740992;
  return a;
};
d.Mca = function(a, b) {
  a = this.gm.get(a);
  if (!a) {
    return Promise.reject(Error("Unknown route"));
  }
  var c = this.Vz(a.sinkId);
  c.receiverType = chrome.cast.ot.DIAL;
  c = new dm("custom_dial_launch", new chrome.cast.qH(c, a.qh.state, a.qh.extraData));
  c.clientId = b;
  c.sequenceNumber = this.V3();
  this.Dr.add(c.sequenceNumber);
  this.F.ag(this, a.routeId, c);
  return Promise.resolve();
};
d.al = function(a) {
  return this.Fb.al(a);
};
d.$k = function(a) {
  return this.Fb.$k(a);
};
d.Vm = function(a, b) {
  return this.Fb.Vm(a, b);
};
d.zk = function(a, b) {
  return this.Fb.zk(a, b);
};
d.connectRouteByRouteId = function(a, b, c, e, f) {
  return this.Fb.connectRouteByRouteId(a, b, c, e, f);
};
d.joinRoute = function(a, b, c, e, f, h) {
  return this.Fb.joinRoute(a, b, c, e, f, h);
};
d.detachRoute = function(a) {
  this.gm.remove(a);
  this.Fb.detachRoute(a);
};
d.qf = function() {
  this.F.qf();
};
d.onSinkAvailabilityUpdated = function(a, b) {
  this.F.onSinkAvailabilityUpdated(a, b);
};
d.Ll = function(a, b) {
  this.F.Ll(this, b);
};
d.ii = function(a, b) {
  this.F.ii(this, b);
};
d.Kj = function(a, b) {
  this.F.Kj(this, b);
};
d.ag = function(a, b, c) {
  this.F.ag(this, b, c);
};
d.onPresentationConnectionStateChanged = function(a, b) {
  this.F.onPresentationConnectionStateChanged(a, b);
};
d.onPresentationConnectionClosed = function(a, b, c) {
  this.F.onPresentationConnectionClosed(a, b, c);
};
d.GB = function(a) {
  return this.F.GB(a);
};
d.VB = function() {
  return this.F.VB();
};
d.Oh = function() {
  return this.F.Oh();
};
d.sw = function(a, b, c) {
  this.F.sw(this, b, c);
};
d.PD = function(a) {
  this.F.PD(a);
};
d.Ml = function(a) {
  this.Fb.Ml(a);
};
d.bg = function(a) {
  this.Fb.bg(a);
};
d.De = function(a) {
  this.Fb.De(a);
};
d.Qs = function() {
};
d.ey = function() {
};
d.searchSinks = function(a, b) {
  return this.Fb.searchSinks(a, b);
};
d.JE = function(a) {
  this.F.JE(a);
};
d.LC = function() {
  return this.F.LC();
};
d.Vj = function(a, b) {
  return this.F.Vj(a, b);
};
var co = function(a, b, c, e) {
  this.mda = a;
  this.sequenceNumber = b;
  this.Zda = c;
  this.T7 = e;
}, eo = /__dialAppName__/;
var fo = function(a, b) {
  var c = new XMLHttpRequest;
  c.open(b, a, !1);
  c.send(null);
  return 200 === c.status ? c.responseText : null;
};
var go = function(a) {
  this.Jd = a;
  this.Mr = null;
  this.start = this.start;
  this.stop = this.stop;
  this.stopMirroring = this.Iia;
  this.mirrorDesktopViaCastStreaming = this.V8;
  this.mirrorTabViaCastStreaming = this.W8;
  this.getSinksForCastUrn = this.Y4;
};
d = go.prototype;
d.start = function() {
  var a = this.Jd.oj("cast");
  a && (a.startObservingMediaSinks("urn:x-org.chromium.media:source:desktop"), a.startObservingMediaSinks("https://google.com/cast#__castAppId__=BE6E4473"));
};
d.stop = function() {
  var a = this.Jd.oj("cast");
  a && (a.stopObservingMediaSinks("urn:x-org.chromium.media:source:desktop"), a.stopObservingMediaSinks("https://google.com/cast#__castAppId__=BE6E4473"));
};
d.Iia = function() {
  var a = this;
  this.Mr && this.Jd.terminateRoute(this.Mr).then(function() {
    a.Mr = null;
  });
};
d.V8 = function(a) {
  var b = this;
  (a = this.zN(a, "cast")) && this.Jd.createRoute("urn:x-org.chromium.media:source:desktop", a.id, this.xK()).then(function(a) {
    b.Mr = a.id;
  });
};
d.W8 = function(a, b, c, e) {
  var f = this, h = this.zN(a, "cast");
  if (h) {
    if (c && e) {
      var k = function(a) {
        var b = a.address, f = a.port, h = new Yj(c + "/start"), k = new Zj;
        k.set("eureka_ip", b);
        k.set("mirroring_port", f);
        k.set("network_profile", e);
        h.Uo(k);
        b = fo(h.toString(), "GET").split(":");
        a.address = b[0];
        a.port = Number(b[1]);
      }, p = function(a) {
        a = a.port;
        var b = new Yj(c + "/stop"), e = new Zj;
        e.set("udp_proxy_ports", a);
        b.Uo(e);
        fo(b.toString(), "GET");
      };
      this.Jd.Pq("cast_streaming").then(function(a) {
        a.Eha({onAnswer:k, onSessionStop:p});
      });
    }
    chrome.tabs.create({url:b}, function(a) {
      f.Jd.createRoute("urn:x-org.chromium.media:source:tab:" + a.id, h.id, f.xK(), void 0, a.id).then(function(a) {
        f.Mr = a.id;
      });
    });
  }
};
d.Y4 = function() {
  var a = this.Jd.oj("cast");
  return a ? a.fj("https://google.com/cast#__castAppId__=BE6E4473").sinks : [];
};
d.zN = function(a, b) {
  return (b = this.Jd.oj(b)) ? b.fj("urn:x-org.chromium.media:source:desktop").sinks.find(function(b) {
    return b.friendlyName == a;
  }) || null : null;
};
d.xK = function() {
  return "test" + Math.floor(1e6 * Math.random());
};
var ho = function(a, b) {
  this.routeId = a;
  this.message = b;
}, io = function(a) {
  return "string" != typeof a.message;
};
var jo = function(a) {
  this.Ae = a;
  this.ng = this.Mv = null;
};
d = jo.prototype;
d.o_ = function() {
  null != this.ng && (clearTimeout(this.ng), this.ng = null);
};
d.wS = function() {
  if (null == this.ng) {
    if (null == this.Mv || Date.now() - this.Mv >= this.Ae) {
      this.Fc();
    } else {
      var a = Math.max(this.Mv + this.Ae - Date.now(), 5);
      this.ng = setTimeout(this.Fc.bind(this), a);
    }
  }
};
d.BS = function() {
  this.Fc();
};
d.Fc = function() {
  this.o_();
  this.UJ();
  this.Mv = Date.now();
};
d.UJ = function() {
};
var ko = function(a, b) {
  jo.call(this, 20);
  this.Yg = new Map;
  this.Aj = new Set;
  this.oF = null;
  this.lz = this.Bm = 0;
  this.zU = !1;
  this.F = a;
  this.Q8 = b;
  this.a = D("mr.RouteMessageSender");
};
la(ko, jo);
d = ko.prototype;
d.init = function(a) {
  this.oF = a;
  ei(this);
};
d.W7 = function(a) {
  this.Aj.has(a) || (this.Aj.add(a), this.E6(a) && this.wS());
};
d.stopListeningForRouteMessages = function(a) {
  this.Aj.delete(a);
};
d.send = function(a, b) {
  var c = this.Yg.get(a);
  c || (c = [], this.Yg.set(a, c));
  b = new ho(a, b);
  c.push(b);
  50 < c.length && 1 == c.length % 50 && this.a.v(function() {
    return "Message queue length is excessively large (" + c.length + ") for route " + a;
  });
  this.Bm += io(b) ? 0 : b.message.length;
  io(b) && this.lz++;
  this.IG();
  this.Aj.has(a) && this.wS();
};
d.ii = function(a) {
  this.Aj.delete(a);
  var b = this.Yg.get(a);
  b && (this.Yg.delete(a), this.EQ(b), this.IG());
};
d.EQ = function(a) {
  if (0 != a.length) {
    a = ka(a);
    for (var b = a.next();!b.done;b = a.next()) {
      b = b.value, this.Bm -= io(b) ? 0 : b.message.length, io(b) && this.lz--;
    }
  }
};
d.E6 = function(a) {
  a = this.Yg.get(a);
  return !!a && 0 < a.length;
};
d.IG = function() {
  var a = 0 < this.lz || this.Bm > this.Q8;
  a != this.zU && (this.zU = a, this.F.Vj(this.Ca(), a));
};
d.UJ = function() {
  if (this.oF) {
    for (var a = ka(this.Aj), b = a.next();!b.done;b = a.next()) {
      var b = b.value, c = this.Yg.get(b);
      c && 0 != c.length && (this.oF(b, c), this.EQ(c), this.Yg.set(b, []));
    }
    this.IG();
  } else {
    this.a.error("sendMessagesCallback not set. Messages not delivered.");
  }
};
d.Ca = function() {
  return "mr.RouteMessageSender";
};
d.getData = function() {
  var a = [].concat(ma(this.Yg.entries())).map(function(a) {
    return [a[0], a[1].map(function(a) {
      return $a(a.message, "No support for persisting binary messages");
    })];
  });
  return [new lo(a, Array.from(this.Aj), this.Bm)];
};
d.wb = function() {
  var a = bi(this);
  if (a) {
    this.Yg = new Map;
    for (var b = {}, c = ka(a.Rba), e = c.next();!e.done;b = {routeId:b.routeId}, e = c.next()) {
      e = e.value, b.routeId = e[0], e = e[1].map(function(a) {
        return function(b) {
          return new ho(a.routeId, $a(b, "No support for restoring binary messages"));
        };
      }(b)), this.Yg.set(b.routeId, e);
    }
    this.Aj = new Set(a.a8);
    this.Bm = a.gja;
  }
};
var lo = function(a, b, c) {
  this.Rba = a;
  this.a8 = b;
  this.gja = c;
};
var mo = function(a, b, c) {
  $c.call(this);
  this.ai = null != c ? t(a, c) : a;
  this.Ae = b;
  this.yk = t(this.WD, this);
  this.uk = [];
};
v(mo, $c);
d = mo.prototype;
d.jg = !1;
d.dg = 0;
d.Ab = null;
d.rq = function(a) {
  this.uk = arguments;
  this.Ab || this.dg ? this.jg = !0 : this.sn();
};
d.stop = function() {
  this.Ab && (ve(this.Ab), this.Ab = null, this.jg = !1, this.uk = []);
};
d.pause = function() {
  this.dg++;
};
d.resume = function() {
  this.dg--;
  this.dg || !this.jg || this.Ab || (this.jg = !1, this.sn());
};
d.aa = function() {
  mo.X.aa.call(this);
  this.stop();
};
d.WD = function() {
  this.Ab = null;
  this.jg && !this.dg && (this.jg = !1, this.sn());
};
d.sn = function() {
  this.Ab = ue(this.yk, this.Ae);
  this.ai.apply(null, this.uk);
};
var no = function(a) {
  this.Jd = a;
  this.a = D("mr.ExternalMessageHandler");
};
no.prototype.onMessage = function(a, b, c) {
  this.a.info("Received a message from " + b.id + " type: " + a.type);
  var e = chrome.runtime.id;
  "start" == a.type ? (a = a.message, a = this.Jd.searchSinks("pseudo:cloud", "urn:x-org.chromium.media:source:desktop", new xi(a.meetingName, a.domain)), b = "PresentationId" + b.id + oo++, this.Jd.createRoute("urn:x-org.chromium.media:source:desktop", a, b).then(function(a) {
    c(new ag(e, "route", a.id));
  }).catch(function(a) {
    c(new ag(e, "error", a));
  })) : "stop" == a.type ? this.Jd.terminateRoute(a.message.routeId).then(function() {
    c(new ag(e, "stopped"));
  }) : (c(new ag(e, "error", Error("Unhandled message type"))), this.a.error("Unhandled message type " + a.type));
};
var oo = 0;
var po = function(a) {
  if (0 >= a) {
    throw Error("invalid buffer size");
  }
  this.gf = [];
  this.hp = [];
  this.Ej = a;
};
d = po.prototype;
d.enqueue = function(a) {
  this.ja() >= this.Ej && this.Mk();
  this.hp.push(a);
};
d.Mk = function() {
  if (this.nc()) {
    throw Error("Empty queue");
  }
  0 == this.gf.length && (this.gf = this.hp, this.gf.reverse(), this.hp = []);
  return this.gf.pop();
};
d.ja = function() {
  return this.gf.length + this.hp.length;
};
d.nc = function() {
  return 0 == this.ja();
};
d.T = function() {
  var a = this.gf.slice();
  a.reverse();
  a.push.apply(a, [].concat(ma(this.hp)));
  return a;
};
d.clear = function() {
  this.gf = [];
  this.hp = [];
};
var qo = function() {
  this.ia = new po(1000);
  this.fk = Date.now();
};
d = qo.prototype;
d.init = function() {
  Ic = 1;
  var a = D("browser"), b = window.onerror;
  window.onerror = function(c, f, h, k, p) {
    b && b(c, f, h, k, p);
    a.error("Error: " + c + " (" + f + " @ Line: " + h + ")", p);
  };
  Jc.push(this.j$.bind(this));
  var c = window.localStorage["debug.logs"];
  c && (Ic = Mc(c.toUpperCase(), 0));
  window.localStorage["debug.console"] && Jc.push(this.mD.bind(this));
};
d.j$ = function(a) {
  this.ia.enqueue(this.uK(a, !1));
  a = a.Hh;
  a instanceof Error && a.stack && this.ia.enqueue(a.stack);
};
d.mD = function(a) {
  var b = [this.uK(a, !0)];
  a.Hh && b.push(a.Hh);
  switch(a.level) {
    case 3:
      console.error.apply(console, [].concat(ma(b)));
      break;
    case 2:
      console.warn.apply(console, [].concat(ma(b)));
      break;
    case 1:
      console.log.apply(console, [].concat(ma(b)));
      break;
    default:
      console.debug.apply(console, [].concat(ma(b)));
  }
};
d.uK = function(a, b) {
  var c = ["["];
  if (b) {
    c.push(("       " + ((Date.now() - this.fk) / 1000).toFixed(3)).slice(-7));
  } else {
    var e = new Date(a.time), f = function(a) {
      return 10 > a ? "0" + a : a;
    };
    c.push(e.getFullYear().toString(), "-", f(e.getMonth() + 1), "-", f(e.getDate()), " ", f(e.getHours()), ":", f(e.getMinutes()), ":", f(e.getSeconds()), ".", f(Math.floor(e.getMilliseconds() / 10)));
  }
  c.push("][", Lc[a.level], "][", a.w, "] ", a.message);
  if (!b && null != a.Hh) {
    if (c.push("\n"), a.Hh instanceof Error) {
      c.push(a.Hh.message);
    } else {
      try {
        c.push(JSON.stringify(a.Hh));
      } catch (h) {
        c.push(a.Hh.toString());
      }
    }
  }
  c.push("\n");
  return c.join("");
};
d.getLogs = function() {
  return 0 == this.ia.ja() ? "NA" : this.ia.T().join("");
};
d.ica = function() {
  ei(this);
};
d.Ca = function() {
  return "LogManager";
};
d.getData = function() {
  return [this.ia.T()];
};
d.wb = function() {
  var a = this.ia.T();
  this.ia.clear();
  for (var b = ka(bi(this) || []), c = b.next();!c.done;c = b.next()) {
    this.ia.enqueue(c.value);
  }
  a = ka(a);
  for (c = a.next();!c.done;c = a.next()) {
    this.ia.enqueue(c.value);
  }
};
qa(qo);
var ro = function(a) {
  this.Jd = a;
  this.a = D("mr.InternalMessageHandler");
};
ro.prototype.onMessage = function(a, b, c) {
  var e = this;
  if ("retrieve_log_data" != a.type) {
    c(new ag(chrome.runtime.id, "error", Error("Unhandled message type")));
  } else {
    var f = {logs:qo.ea().getLogs(), device:pk.ea().v4()};
    b = [];
    var h = fg(f.device.ip).then(function(a) {
      a && (f.device.version = a);
    });
    b.push(h);
    var k = this.Jd.Ar;
    k && (a = this.f8(k, a.source).then(function(a) {
      a && (f.castStreamingLogs = a);
    }, function() {
      e.a.error("Log upload failed for service: " + k);
    }), b.push(a));
    b.push(this.JH(f, "mr.cast.SinkDiscoveryService", "castDeviceCounts"));
    b.push(this.JH(f, "mr.dial.SinkDiscoveryService", "dialDeviceCounts"));
    Mi(b).then(function() {
      c(f);
    });
  }
};
ro.prototype.JH = function(a, b, c) {
  var e = this;
  return Ih(b).then(function(b) {
    b = b.Ag;
    a[c] = b.co + "." + b.Sm;
  }, function() {
    e.a.error("Failed to get device counts for " + c + ".");
  });
};
ro.prototype.f8 = function(a, b) {
  return this.Jd.Pq(a).then(function(a) {
    return a.$g(b);
  });
};
var so = function() {
  this.ld = null;
  this.a = D("mr.IssueSenderImpl");
};
so.prototype.init = function(a) {
  this.ld = a;
};
so.prototype.send = function(a) {
  if (this.ld) {
    if (this.ld.onIssue) {
      this.ld.onIssue(a);
    } else {
      this.a.error("MediaRouterService.onIssue not defined.");
    }
  } else {
    this.a.error("MediaRouterService is not set.");
  }
};
var to = function(a, b) {
  E.call(this, "internal_message");
  this.routeId = a;
  this.message = b;
};
la(to, E);
var uo = function(a, b, c) {
  this.nS = a;
  this.bh = b;
  this.O8 = c;
  this.onMessage = function() {
  };
  c.listen("internal_message", this.uw, !1, this);
};
uo.prototype.sendMessage = function(a, b) {
  return this.bh(this.nS, a, b);
};
uo.prototype.uw = function(a) {
  if (a.routeId == this.nS) {
    this.onMessage(a.message);
  }
};
uo.prototype.ob = function() {
  this.onMessage = function() {
  };
  this.O8.vd("internal_message", this.uw, !1, this);
};
var vo = new uo("", function() {
  return Promise.resolve();
}, new F), wo = function(a) {
  this.F = a;
};
wo.prototype.Vu = function(a) {
  var b = this.F.GB(a);
  return b ? new uo(a, b.sendRouteMessage.bind(b), this.F.VB()) : vo;
};
var xo = function() {
  this.a = D("mr.ProviderManager");
  this.sf = [];
  this.He = new Map;
  this.Go = new Map;
  this.Ci = new Set;
  this.hm = new Set;
  this.Nr = new Map;
  this.ld = this.Ar = null;
  this.Xo = !1;
  this.oS = new F;
  this.pS = new mo(this.Oda, 500, this);
  this.iia = new mo(this.l1, 500, this);
  this.Gl = new ko(this, 524288);
  this.pE = 0;
  this.cP = new so;
  this.Yo = new Map;
  this.fw = -1 == window.navigator.userAgent.indexOf("Windows");
  this.ew = [];
  this.Iv = [];
  this.IO = new ro(this);
  this.gK = new no(this);
  this.onBeforeInvokeHandler = this.v9;
  this.createRoute = this.createRoute;
  this.joinRoute = this.joinRoute;
  this.connectRouteByRouteId = this.connectRouteByRouteId;
  this.terminateRoute = this.terminateRoute;
  this.startObservingMediaSinks = this.startObservingMediaSinks;
  this.stopObservingMediaSinks = this.stopObservingMediaSinks;
  this.sendRouteMessage = this.sendRouteMessage;
  this.sendRouteBinaryMessage = this.sendRouteBinaryMessage;
  this.startListeningForRouteMessages = this.startListeningForRouteMessages;
  this.stopListeningForRouteMessages = this.stopListeningForRouteMessages;
  this.startObservingMediaRoutes = this.startObservingMediaRoutes;
  this.stopObservingMediaRoutes = this.stopObservingMediaRoutes;
  this.onPresentationSessionDetached = this.detachRoute = this.detachRoute;
  this.enableMdnsDiscovery = this.enableMdnsDiscovery;
  this.searchSinksAndCreateRoute = this.searchSinksAndCreateRoute;
  this.searchSinks = this.searchSinks;
  this.updateMediaSinks = this.updateMediaSinks;
};
la(xo, Dh);
d = xo.prototype;
d.handleEvent = function(a, b) {
  for (var c = [], e = 1;e < arguments.length;++e) {
    c[e - 1] = arguments[e];
  }
  if (a == chrome.runtime.onMessage) {
    this.IO.onMessage.apply(this.IO, [].concat(ma(c)));
  } else {
    if (a == chrome.runtime.onMessageExternal) {
      this.gK.onMessage.apply(this.gK, [].concat(ma(c)));
    } else {
      throw Error("Unhandled event");
    }
  }
};
d.Pq = function(a) {
  var b = this;
  a = this.Nr.get(a);
  return Ih(a).then(function(a) {
    a.Xc(b);
    return a;
  });
};
d.hca = function(a) {
  a.forEach(this.oca, this);
};
d.Xc = function(a, b) {
  this.Nr.set("webrtc", "mr.mirror.webrtc.WebRtcService");
  this.Nr.set("cast_streaming", "mr.mirror.cast.Service");
  this.Nr.set("hangouts", "mr.mirror.hangouts.HangoutsService");
  this.Nr.set("meetings", "mr.mirror.hangouts.MeetingsService");
  var c = new wo(this);
  Tg || (Tg = c);
  this.ld = a;
  this.cP.init(a);
  this.Gl.init(this.ld.onRouteMessagesReceived.bind(this.ld));
  this.hca(b);
  ei(this);
  Nh("mr.ProviderManager", this);
};
d.oca = function(a) {
  if (this.oj(a.getName())) {
    this.a.v("Provider " + a.getName() + " already registered.");
  } else {
    try {
      a.Xc(), this.sf.push(a), this.Yo.set(a.getName(), 0);
    } catch (b) {
      this.a.v("Provider " + a.getName() + " failed to initialize.", b);
    }
  }
};
d.tt = function(a, b) {
  var c = this;
  return new Promise(function(e, f) {
    var h = null;
    c.oba();
    var h = window.setTimeout(function() {
      h = null;
      a.cancel(new Jm(2, "timeout after " + b + " ms."));
    }, b), k = function() {
      c.EY();
      null != h && window.clearTimeout(h);
    };
    a.promise.then(function(a) {
      k();
      e(a);
    }, function(a) {
      k();
      f(a instanceof Jm ? a : a instanceof Error ? new Jm(0, a.message, a.stack) : new Jm(0));
    });
  });
};
d.MH = function(a, b) {
  return this.tt(Yg(a), b);
};
d.oba = function() {
  this.pE++;
  this.pD();
};
d.EY = function() {
  this.pE--;
  this.pD();
};
d.v9 = function() {
  vh(0);
};
d.createRoute = function(a, b, c, e, f, h, k) {
  var p = this, r = this.s4(a, b);
  if (!r) {
    return Promise.reject(new Jm(7, "No provider supports createRoute with source: " + a + " and sink: " + b));
  }
  h = h && 0 < h ? h : 6E4;
  a = r.createRoute(a, b, c, k || !1, h, e, f);
  return this.tt(a, h).then(function(a) {
    return a;
  }, function(a) {
    p.a.error("Error creating route.", a);
    throw a;
  });
};
d.connectRouteByRouteId = function(a, b, c, e, f, h) {
  var k = this.He.get(b);
  if (!k) {
    return Promise.reject(new Jm(7, "No provider supports join " + b));
  }
  a = k.connectRouteByRouteId(a, b, c, e, f);
  return this.tt(a, h && 0 < h ? h : 3E4);
};
d.joinRoute = function(a, b, c, e, f, h) {
  var k = this.r4(a);
  if (!k) {
    return Promise.reject(new Jm(7, "No provider supports join " + b));
  }
  f = f && 0 < f ? f : 3E4;
  a = k.joinRoute(a, b, h || !1, f, c, e);
  return this.tt(a, f);
};
d.terminateRoute = function(a) {
  var b = this.He.get(a);
  return b ? this.QP(a).then(function() {
    return b.terminateRoute(a);
  }) : Promise.reject(new Jm(3, "Route not found for routeId " + a));
};
d.startObservingMediaSinks = function(a) {
  this.Ci.has(a) || (this.Ci.add(a), this.sf.forEach(function(b) {
    b.startObservingMediaSinks(a);
  }));
  this.AE(a);
};
d.stopObservingMediaSinks = function(a) {
  this.Ci.delete(a) ? this.VJ(a) : this.a.info("No existing query " + a);
};
d.VJ = function(a) {
  this.sf.forEach(function(b) {
    b.stopObservingMediaSinks(a);
  });
};
d.AE = function(a) {
  var b = this;
  if ("urn:x-org.chromium.media:source:tab:-1" == a) {
    this.a.v("No sinks for sourceUrn: " + a);
  } else {
    var c = new Map, e = [];
    this.sf.forEach(function(f) {
      var h = f.fj(a);
      0 < h.sinks.length && (e = h.origins);
      h.sinks.forEach(function(a) {
        c.has(a.id) ? b.a.v("Detected duplicate sink " + a.id + " from provider: " + f.getName()) : c.set(a.id, a);
      });
    });
    this.Pda(a, Array.from(c.values()), e || []);
  }
};
d.Pda = function(a, b, c) {
  this.a.info("Sending " + b.length + " sinks to MR for " + a);
  this.ld.onSinksReceived(a, b, c);
};
d.sendRouteMessage = function(a, b, c) {
  var e = this.He.get(a);
  return e ? this.MH(e.sendRouteMessage(a, b, c), 3E4) : Promise.reject(Error("Invalid route ID " + a));
};
d.sendRouteBinaryMessage = function(a, b) {
  var c = this.He.get(a);
  return c ? this.MH(c.sendRouteBinaryMessage(a, b), 3E4) : Promise.reject(Error("Invalid route ID " + a));
};
d.startListeningForRouteMessages = function(a) {
  this.Gl.W7(a);
};
d.stopListeningForRouteMessages = function(a) {
  this.Gl.stopListeningForRouteMessages(a);
};
d.detachRoute = function(a) {
  var b = this.He.get(a);
  b ? b.detachRoute(a) : this.a.info("Route " + a + " does not exist.");
};
d.enableMdnsDiscovery = function() {
  this.fw = !0;
  this.ew.forEach(function(a) {
    a();
  });
  this.ew.length = 0;
};
d.s4 = function(a, b) {
  return this.sf.find(function(c) {
    return c.Vm(a, b);
  }) || null;
};
d.r4 = function(a) {
  return this.sf.find(function(b) {
    return b.zk(a);
  }) || null;
};
d.l1 = function() {
  var a = this;
  this.Ci.forEach(function(b) {
    a.AE(b);
  });
};
d.pD = function() {
  this.ld.setKeepAlive(0 < this.pE || 0 < this.Iv.length);
};
d.startObservingMediaRoutes = function(a) {
  this.hm.has(a) || (this.Xo = !0, this.hm.add(a), this.sf.forEach(function(b) {
    b.startObservingMediaRoutes(a);
  }));
  this.pS.rq();
};
d.stopObservingMediaRoutes = function(a) {
  this.hm.delete(a) ? (0 == this.hm.size && (this.Xo = !1), this.sf.forEach(function(b) {
    b.stopObservingMediaRoutes(a);
  })) : this.a.info("No existing route query " + a);
};
d.Oda = function() {
  var a = this;
  if (this.Xo) {
    var b = [];
    this.sf.forEach(function(a) {
      b = b.concat(a.Kg());
    });
    this.hm.forEach(function(c) {
      var e = [];
      a.sf.forEach(function(a) {
        a.Kg().forEach(function(b) {
          !b.jn && a.zk(c, b) && e.push(b.id);
        });
      });
      a.ld.onRoutesUpdated(b, c, e);
    });
  }
};
d.Ca = function() {
  return "ProviderManager";
};
d.getData = function() {
  return [new yo(this.sf.map(function(a) {
    return a.getName();
  }), Array.from(this.Ci), Array.from(this.hm), this.Xo, Array.from(this.He, function(a) {
    var b = ka(a);
    a = b.next().value;
    b = b.next().value;
    return [a, b.getName()];
  }), Array.from(this.Yo), this.fw, this.Ar)];
};
d.wb = function() {
  var a = bi(this);
  if (a) {
    this.Ci = new Set(a.hia);
    this.hm = new Set(a.nda);
    this.Xo = a.eia;
    for (var b = ka(a.lda), c = b.next();!c.done;c = b.next()) {
      var e = ka(c.value), c = e.next().value, e = e.next().value, f = this.oj(e);
      w(f, "Provider not found: " + e);
      this.He.set(c, f);
    }
    this.Yo = new Map(a.gia);
    this.Ar = a.S7 || null;
    a.B8 && this.enableMdnsDiscovery();
  }
};
d.GB = function(a) {
  return this.He.get(a);
};
d.Ll = function(a, b) {
  this.He.set(b.id, a);
  this.Kj(a, b);
};
d.ii = function(a, b) {
  this.QP(b.id);
  this.He.delete(b.id);
  this.Gl.ii(b.id);
  this.Kj(a, b);
};
d.Kj = function() {
  this.Xo && this.pS.rq();
};
d.FQ = function(a) {
  var b = this.He.get(a.id);
  b && this.Kj(b, a);
};
d.ag = function(a, b, c) {
  this.He.has(b) ? ("string" === typeof c || c instanceof Uint8Array || (c = JSON.stringify(c)), this.Gl.send(b, c)) : this.a.v("Got route message for closed route " + b);
};
d.onPresentationConnectionStateChanged = function(a, b) {
  "terminated" == b && this.Gl.BS();
  this.ld.onPresentationConnectionStateChanged(a, b);
};
d.onPresentationConnectionClosed = function(a, b, c) {
  this.Gl.BS();
  this.ld.onPresentationConnectionClosed(a, b, c);
};
d.PD = function(a) {
  this.Go.delete(a);
  var b = this.He.get(a);
  b && b.terminateRoute(a);
};
d.sw = function(a, b, c) {
  this.oS.dispatchEvent(new to(b, c));
};
d.qf = function() {
  this.iia.rq();
};
d.onSinkAvailabilityUpdated = function(a, b) {
  var c = this, e = this.Yo.get(a.getName());
  w(void 0 !== e, "oldValue != undefined");
  e != b && (e = this.jJ(), this.Yo.set(a.getName(), b), a = this.jJ(), e != a && (this.ld.onSinkAvailabilityUpdated(a), 0 == a && (this.Ci.forEach(function(a) {
    c.VJ(a);
  }), this.Ci.clear())));
};
d.jJ = function() {
  return Array.from(this.Yo.values()).reduce(function(a, b) {
    return Math.max(a, b);
  }, 0);
};
d.VB = function() {
  return this.oS;
};
d.Oh = function() {
  return this.cP;
};
d.QP = function(a) {
  var b = this;
  return this.Go.has(a) ? this.Pq(this.Go.get(a)).then(function(c) {
    b.Go.delete(a);
    return c.KU();
  }) : Promise.resolve(!1);
};
d.Qs = function(a, b, c, e) {
  var f = this, h = $a(a.$k(b.sinkId));
  this.a.info("Starting mirroring using service: " + h);
  this.Go.set(b.id, h);
  return Zg(this.Pq(h), function(k) {
    f.Ar = h;
    return k.Qs(b, $a(b.mediaSource), w(a.al(b.sinkId)), c, e).catch(function(a) {
      if (a instanceof rh && 3 == a.reason) {
        throw new Jm(8);
      }
      throw a;
    });
  });
};
d.ey = function(a, b, c, e, f, h) {
  var k = this, p = this.Go.get(b.id);
  return p ? Zg(this.Pq(p), function(r) {
    k.Ar = p;
    return r.ey(b, c, w(a.al(b.sinkId)), e, f, h);
  }) : Xg(Error("Route " + b.id + " is not mirroring"));
};
d.JE = function(a) {
  this.fw ? a() : -1 == this.ew.indexOf(a) && this.ew.push(a);
};
d.LC = function() {
  return this.fw;
};
d.Vj = function(a, b) {
  var c = this.Iv.indexOf(a), e = 0 <= c;
  b && !e ? this.Iv.push(a) : !b && e && this.Iv.splice(c, 1);
  this.pD();
};
d.oj = function(a) {
  return this.sf.find(function(b) {
    return b.getName() == a;
  }) || null;
};
d.dN = function(a) {
  return a.startsWith("pseudo:") ? a.substring(7) : null;
};
d.searchSinksAndCreateRoute = function(a, b, c, e, f, h, k, p) {
  var r = this.dN(a), r = r ? this.oj(r) : null, A = null;
  r && (A = r.searchSinks(b, c));
  if (A) {
    return this.ld.onSearchSinkIdReceived(a, A.id), this.createRoute(b, A.id, e, f, h, k, p);
  }
  this.ld.onSearchSinkIdReceived(a, "");
  return Promise.reject(new Jm(0, "No sink found for search input: " + c.input + " and source: " + b));
};
d.searchSinks = function(a, b, c) {
  a = (a = this.dN(a)) ? this.oj(a) : null;
  var e = null;
  a && (e = a.searchSinks(b, c));
  return e ? e.id : "";
};
d.updateMediaSinks = function(a) {
  this.Ci.has(a) || this.AE(a);
};
var yo = function(a, b, c, e, f, h, k, p) {
  this.hia = b;
  this.nda = c;
  this.eia = e;
  this.lda = f;
  this.gia = h;
  this.B8 = k;
  this.S7 = p;
};
var zo = function(a, b) {
  this.pb = a;
  this.qia = b;
  this.ki = new Oc;
  this.U = this.ki.promise;
  this.Id = Tg.Vu(a.id);
  this.Ka = new Oc;
  this.ie = !1;
  this.Gs();
  this.aG();
  this.Yb(new Uh("GET_TURN_CREDENTIALS"));
};
d = zo.prototype;
d.start = function() {
  var a = this;
  return this.U.then(function(b) {
    if (b.Dv()) {
      return Promise.reject(Error("Presentation already started"));
    }
    b.start();
    return a.Ka.promise;
  });
};
d.stop = function() {
  var a = this;
  this.ie = !1;
  return this.U.then(function(b) {
    b.stop();
    a.U = Promise.reject(Error("Peer connection has already been stopped"));
  });
};
d.Gs = function() {
  var a = this;
  this.Id.onMessage = function(b) {
    if (b.type) {
      switch(b.type) {
        case "TURN_CREDENTIALS":
          a.ki.resolve(new Yh(a.pb.id, b.data.credentials));
          break;
        case "ANSWER":
          a.U.then(function(a) {
            a.setRemoteDescription(b.data);
          });
          break;
        case "STOP":
          a.Ka.reject("Stop signal received");
          a.stop();
          break;
        default:
          throw Error("Unknown message type: " + b.type);
      }
    } else {
      a.U.then(function(a) {
        a.Fda({type:"PRESENTATION_CONNECTION_MESSAGE", data:b});
      });
    }
  };
};
d.aG = function() {
  var a = this;
  this.U.then(function(b) {
    b.TT(function(b) {
      a.Yb(new Uh("OFFER", new Wh(b, null, null, a.qia)));
    });
    b.ST(function(b) {
      b = Vh(b);
      "STOP" == b.type && a.stop();
      a.Yb(b);
    });
    b.RT(function() {
      a.ie = !0;
      a.Yb(new Uh("SESSION_START_SUCCESS"));
      a.Ka.resolve(a);
    });
    b.PT(function() {
      a.Yb(new Uh("SESSION_END"));
    });
    b.QT(function(b) {
      a.ie || a.Ka.reject(b);
      a.Yb(new Uh("SESSION_FAILURE"));
    });
  });
};
d.Yb = function(a) {
  this.Id.sendMessage(a, Ao);
};
var Ao = {channelType:"cloud"};
var Bo = function(a) {
  this.F = a;
  this.Na = new Map;
  this.Yw = new Map;
  this.Js = [];
  this.ig = this.po = this.Dd = this.Kh = this.Sn = null;
  this.uo = this.Dk = this.Ui = !1;
  this.Ks = new Map;
  this.kp = new Map;
  ei(this);
};
d = Bo.prototype;
d.getName = function() {
  return "cloud";
};
d.Xc = function() {
  var a = this;
  this.a.info("Initializing Cloud MRP");
  var b = Tk.ea(), c = b.E2(this);
  this.Js.push(c);
  this.Sn = b.r3(this);
  this.Js.push(this.Sn);
  this.Kh = b.OL();
  this.Dd = b.jj();
  this.po = b.N3(this);
  this.ig = b.S4();
  this.ig.B2().then(function(b) {
    a.Ui = b;
    a.a.info("Cloud enabled setting: " + a.Ui);
  });
  this.ig.D2().then(function(b) {
    a.Dk = b;
    a.a.info("Cloud on setting: " + a.Dk);
  });
  this.ig.nga(function(b) {
    a.Ui = b;
    a.a.info("Cloud enabled setting: " + a.Ui);
    a.Ui && a.EO();
  });
  this.ig.Y3().then(function(b) {
    a.uo = b;
    a.a.info("Privacy notified setting: " + a.uo);
  });
};
d.Kg = function() {
  return Array.from(this.Na.values());
};
d.fj = function(a) {
  if (!this.IC(a)) {
    return Lm;
  }
  this.a.L("GetAvailableSinks for " + a);
  var b = [];
  if (this.Dk || this.cia()) {
    b = this.EO();
  }
  this.kp.clear();
  for (var c = {}, e = ka(this.Ks.values()), f = e.next();!f.done;c = {Ho:c.Ho, Fu:c.Fu}, f = e.next()) {
    c.Ho = f.value, c.Fu = !1, b.forEach(function(a) {
      return function(b) {
        b.Cb.id == a.Ho.Cb.id && (a.Fu = !0, b.Cb.friendlyName = a.Ho.Cb.friendlyName);
      };
    }(c)), c.Fu || this.kp.set(c.Ho.Cb.id, c.Ho);
  }
  b = b.concat.apply(b, [].concat(ma(this.kp.values())));
  this.a.L(function() {
    return "Available sinks are..." + JSON.stringify(b);
  });
  c = b.map(function(a) {
    return a.Cb;
  });
  this.Sn && (c = c.concat(Co));
  return new Km(c, Bh(a));
};
d.EO = function() {
  var a = [];
  this.a.info("Checking cloud discovery services");
  pk.ea().Lv = u();
  this.Js.forEach(function(b) {
    b = b.ff();
    a = a.concat(b);
  });
  return a;
};
d.startObservingMediaSinks = function() {
};
d.stopObservingMediaSinks = function() {
};
d.startObservingMediaRoutes = function() {
};
d.stopObservingMediaRoutes = function() {
};
d.ma = function(a) {
  return (a = this.xq(a)) ? a.Cb : null;
};
d.createRoute = function(a, b, c, e, f, h, k) {
  var p = this;
  this.a.info("createRoute called");
  this.a.L("urn: " + a + " sinkId:" + b);
  if (f = this.Yw.get(b)) {
    return this.F.ey(this, f, a, c, k, function(b) {
      b.mediaSource = a;
      b.$f.tabId = k;
      return Wg(b);
    }).Ez(function(a) {
      p.F.Kj(p, a);
      return a;
    });
  }
  f = this.xq(b);
  return this.Ok(a, f, b, c, e, h, k);
};
d.AJ = function(a, b, c, e) {
  a instanceof Jm && 2 == a.errorCode ? this.Am(b, 6, null) : (this.a.error("Error on start session", a instanceof Error ? a : Error("Expected an Error value, got " + a)), this.Am(b, e, new Ug(Fj, "warning", "dismiss")));
  this.Sn && this.Sn.WR(c) && this.bg([c.Cb]);
};
d.Ok = function(a, b, c, e, f, h, k) {
  var p = this;
  if (f) {
    return Xg(Error("not supported"));
  }
  f = !1;
  switch(this.FB(b)) {
    case "cloud":
      gj(1);
      break;
    case "mesi":
      f = !0, this.uo || (this.uo = !0, this.ig.mga(), h = new Ug(Ij, "notification", "learn_more"), h.eha(["dismiss"]), h.xfa(6320939), this.F.Oh().send(h)), gj(0);
  }
  pk.ea().Zl = new ok(b.model, null);
  var r = Pm(e, this.getName(), c, a, !0, "", null);
  f && (r.customControllerPath = "cloud_route_details/view.html?routeId=" + r.id);
  this.Na.set(r.id, r);
  this.Yw.set(c, r);
  this.Ks.set(r.id, b);
  this.F.Ll(this, r);
  this.F.Vj(this.Ca(), !0);
  if (zh(a) && !f) {
    return this.a.info("starting presentation on route: " + r.id), this.yia(r, a).catch(function(a) {
      p.AJ(a, w(r), b, 7);
      throw a;
    });
  }
  this.a.info("starting mirroring on route: " + r.id);
  r.$f = {tabId:k, sessionId:"", BU:"", CU:b.model};
  zh(a) && (r.isOffscreenPresentation = !0);
  return this.F.Qs(this, r, e).catch(function(a) {
    p.AJ(a, w(r), b, 5);
    throw a;
  });
};
d.terminateRoute = function(a) {
  var b = this.Na.get(a);
  return b ? this.Am(b, 0, null) : Promise.reject(new Jm(3, "Route in cloud provider not found for routeId " + a));
};
d.Am = function(a, b, c) {
  this.a.info("terminating route: " + a.id);
  var e = this.Na.delete(a.id);
  w(e);
  e = this.Yw.delete(a.sinkId);
  w(e);
  e = this.Ks.get(a.id);
  w(e);
  this.Ks.delete(a.id);
  c && this.Oh().send(c);
  oh("MediaRouter.Cloud.Session.End", b, bj);
  switch(b) {
    case 1:
      break;
    default:
      this.s_(e);
  }
  this.F.ii(this, a);
  0 == this.Na.size && this.F.Vj(this.Ca(), !1);
  this.F.onPresentationConnectionStateChanged(a.id, "terminated");
  this.kp.has(a.sinkId) && (b = this.kp.get(a.sinkId), this.bg([b.Cb]), this.kp.delete(a.sinkId));
  return Promise.resolve();
};
d.sendRouteMessage = function(a, b, c) {
  if (c && c.channelType) {
    c = c.channelType;
    var e = (a = this.Na.get(a) || void 0) ? w(this.xq(a.sinkId)) : void 0;
    return this.po.rba(c, b, a, e);
  }
  return n(b) ? (this.Ie(b, a), Promise.resolve()) : Promise.reject(Error("Channel type missing"));
};
d.sendRouteBinaryMessage = function(a) {
  return Promise.reject(Error("Route " + a + " does not support sending binary data."));
};
d.al = function(a) {
  var b = new Th;
  "hangouts" != this.$k(a) && (b.senderSideLetterboxing = !0);
  b.HP();
  this.a.info("Settings for " + a + ": " + b.Yx());
  return b.shouldCaptureAudio || b.shouldCaptureVideo ? b : null;
};
d.$k = function(a) {
  var b = null;
  a = this.xq(a);
  switch(this.FB(a)) {
    case "cloud":
      b = "webrtc";
      break;
    case "mesi":
      b = a.Vf ? "meetings" : "hangouts";
  }
  return b;
};
d.Vm = function(a, b) {
  this.a.L("Checking canRoute: " + a + " for sinkId: " + b);
  return this.IC(a) && !!this.ma(b);
};
d.zk = function(a) {
  return "chrome://media-router/cloudmrp-mirroring" == a;
};
d.joinRoute = function(a, b) {
  return (a = this.Na.get(b)) ? Wg(a) : Xg(Error("not supported"));
};
d.connectRouteByRouteId = function() {
  return Xg(Error("not supported"));
};
d.detachRoute = function() {
};
d.UD = function(a) {
  this.a.info(a.length + " sinks added");
  0 < a.length && !this.Dk && (this.ig.jja(), this.Dk = !0);
  a = this.xq(a[0].id);
  pk.ea().Yl = new ok(a.model, null);
  this.F.qf();
  this.F.onSinkAvailabilityUpdated(this, 2);
  this.a.info("sinkAvailability changed to AVAILABLE");
};
d.bg = function(a) {
  this.a.info(a.length + " sinks removed");
  this.Js.some(function(a) {
    return 0 < a.ff().length;
  }) || (this.F.onSinkAvailabilityUpdated(this, 0), this.a.info("sinkAvailability changed to UNAVAILABLE"));
  this.F.qf();
};
d.qf = function(a) {
  this.a.info(a.length + " sinks updated");
  this.F.qf();
};
d.Oh = function() {
  return this.F.Oh();
};
d.Ie = function(a, b, c) {
  c ? this.F.ag(this, b, a) : this.F.sw(this, b, a);
};
d.xq = function(a) {
  var b = this.a3(a);
  b || (b = this.K4(a));
  return b;
};
d.a3 = function(a) {
  var b = null;
  this.Js.some(function(c) {
    b = c.ma(a);
    return !!b;
  });
  return b;
};
d.K4 = function(a) {
  var b = null;
  (a = this.Yw.get(a)) && (b = this.Ks.get(a.id));
  return b;
};
d.s_ = function(a) {
  switch(this.FB(a)) {
    case "cloud":
      this.Kh.Qda(a.deviceId);
  }
};
d.FB = function(a) {
  return a.QU("cloud") ? "cloud" : a.QU("mesi") ? "mesi" : null;
};
d.cia = function() {
  var a = pk.ea().Lv;
  return 3E5 <= Date.now() - a;
};
d.IC = function(a) {
  var b = yh(a);
  a = zh(a);
  if (this.Dd.ur && !this.Dd.Bi && b) {
    return this.F.onSinkAvailabilityUpdated(this, 2), !0;
  }
  var c = !1;
  this.Ui && this.Dd.Bi && (c = !0);
  return c && (b || a);
};
d.searchSinks = function(a, b) {
  if (!this.IC(a)) {
    return null;
  }
  (a = this.Sn.mY(b)) && this.UD([a]);
  return a;
};
d.Ca = function() {
  return "CloudProvider";
};
d.getData = function() {
  return [void 0, {cloudEnabled:this.Ui, cloudOn:this.Dk, notifiedHangoutsPrivacy:this.uo}];
};
d.wb = function() {
  var a = ci(this);
  a && (a.cloudEnabled && (this.Ui = a.cloudEnabled), a.cloudOn && (this.Dk = a.cloudOn), a.notifiedHangoutsPrivacy && (this.uo = a.notifiedHangoutsPrivacy));
};
d.yia = function(a, b) {
  a = new zo(a, b);
  return Yg(a.start());
};
d.a = D("mr.CloudProvider");
var Co = new wi("pseudo:cloud", "", "hangout", "Add a hangout", "default");
var Do = function(a) {
  this.F = a;
  this.Nd = [new wi("id1", "test-sink-1"), new wi("id2", "test-sink-2")];
  this.Na = new Map;
  this.Yr = new Map;
};
d = Do.prototype;
d.getName = function() {
  return "test";
};
d.Xc = function() {
  setTimeout(t(this.j8, this));
};
d.j8 = function() {
  var a = this, b = this.rk("initialSinks");
  b && (this.Nd = [], b.forEach(function(b) {
    a.Nd.push(new wi(b.id, b.friendlyName));
  }));
  this.F.onSinkAvailabilityUpdated(this, 0 == this.Nd.length ? 0 : 1);
};
d.Kg = function() {
  return Array.from(this.Na.values());
};
d.fj = function(a) {
  var b = this.rk("getAvailableSinks");
  if (!b) {
    return this.tr(a) ? new Km(this.Nd) : Lm;
  }
  a = b[a];
  if (!a) {
    return Lm;
  }
  var c = [];
  a.forEach(function(a) {
    c.push(new wi(a.id, a.friendlyName));
  });
  return new Km(c);
};
d.startObservingMediaSinks = function() {
};
d.stopObservingMediaSinks = function() {
};
d.startObservingMediaRoutes = function() {
};
d.stopObservingMediaRoutes = function() {
};
d.ma = function(a) {
  return this.Nd.find(function(b) {
    return b.id == a;
  }) || null;
};
d.createRoute = function(a, b, c, e, f, h, k) {
  var p = this;
  if (f = this.Cy("createRoute")) {
    return Yg(f);
  }
  var r = this.rk("createRoute");
  return r && "delayMillis" in r ? new Vg(function(f) {
    setTimeout(function() {
      f(p.Ok(a, b, c, e, h, k));
    }, r.delayMillis);
  }) : Wg(this.Ok(a, b, c, e, h, k));
};
d.Ok = function(a, b, c, e) {
  a = Pm(c, this.getName(), b, a, !0, "Test Route", null);
  a.offTheRecord = e;
  this.Na.set(a.id, a);
  this.Yr.set(c, a);
  this.F.Ll(this, a);
  this.F.Vj("mr.TestProvider", !0);
  return a;
};
d.terminateRoute = function(a) {
  var b = this.Na.get(a);
  if (!b) {
    return Promise.reject(new Jm(3, "Route in test provider not found for routeId " + a));
  }
  this.Hca(b);
  this.Gca(a);
  this.F.onPresentationConnectionStateChanged(a, "terminated");
  return Promise.resolve();
};
d.sendRouteMessage = function(a, b) {
  if ("true" == this.rk("closeRouteWithErrorOnSend")) {
    return this.F.onPresentationConnectionClosed(a, "error", "Foo"), (a = this.Na.get(a)) && this.F.ii(this, a), Promise.reject(Error("Send error. Closing connection."));
  }
  this.F.ag(this, a, "Pong: " + b);
  return Promise.resolve();
};
d.sendRouteBinaryMessage = function(a) {
  return Promise.reject(Error("Route " + a + " does not support sending binary data."));
};
d.al = function() {
  return null;
};
d.$k = function() {
  return null;
};
d.Vm = function(a, b) {
  return this.tr(a) ? (a = this.rk("canRoute")) ? "true" == a : !!this.ma(b) : !1;
};
d.zk = function(a, b) {
  return this.tr(a) ? (a = this.rk("canJoin")) ? "true" == a : null != b ? this.Na.has(b.id) : !0 : !1;
};
d.connectRouteByRouteId = function(a, b) {
  return this.tr(a) ? (a = this.Cy("connectRouteByRouteId")) ? Yg(a) : (b = this.Na.get(b)) ? Wg(b) : Xg(Error("Presentation does not exist")) : Xg(Error("Invalid source"));
};
d.joinRoute = function(a, b, c) {
  return this.tr(a) ? (a = this.Cy("joinRoute")) ? Yg(a) : (b = this.Yr.get(b)) ? b.offTheRecord != c ? Xg(Error("Off-the-record mismatch")) : Wg(b) : Xg(Error("Presentation does not exist")) : Xg(Error("Invalid source"));
};
d.detachRoute = function(a) {
  this.F.onPresentationConnectionClosed(a, "closed", "Close route");
};
d.Gca = function(a) {
  var b = new Map;
  this.Yr.forEach(function(c, e) {
    c.id != a && b.set(e, c);
  });
  this.Yr.clear();
  this.Yr = b;
};
d.Hca = function(a) {
  this.Na.delete(a.id);
  this.F.ii(this, a);
  0 == this.Na.size && this.F.Vj("mr.TestProvider", !1);
};
d.tr = function(a) {
  return 0 <= a.indexOf("__testprovider__=true");
};
d.rk = function(a) {
  if ("testdata" in window.localStorage) {
    var b = JSON.parse(window.localStorage.testdata);
    if (a in b) {
      return this.a.info(a + " : " + JSON.stringify(b[a])), b[a];
    }
  }
  return null;
};
d.Cy = function(a) {
  return (a = this.rk(a)) && "passed" in a && "false" == a.passed && "errorMessage" in a ? Promise.reject(Error(a.errorMessage)) : null;
};
d.searchSinks = function() {
  return null;
};
d.a = D("mr.TestProvider");
var Eo = function() {
  nj.call(this, 12, "ExternalMessageListener", "mr.ProviderManager", chrome.runtime.onMessageExternal);
};
la(Eo, nj);
Eo.prototype.ly = function(a, b) {
  return b.id && -1 != Fo.indexOf(b.id) ? "start" == a.type || "stop" == a.type : !1;
};
Eo.prototype.bA = function() {
  return !0;
};
var Ho = function() {
  Go || (Go = new Eo);
  return Go;
}, Go = null, Fo = ["idmofbkcelhplfjnmmdolenpigiiiecc", "ggedfkijiiammpnbdadhllnehapomdge", "njjegkblellcjnakomndbaloifhcoccg"];
var Io = function() {
  nj.call(this, 11, "InternalMessageListener", "mr.ProviderManager", chrome.runtime.onMessage);
};
la(Io, nj);
Io.prototype.ly = function(a, b) {
  return "retrieve_log_data" == a.type && b.id == chrome.runtime.id && b.url == "chrome-extension://" + b.id + "/feedback.html";
};
Io.prototype.bA = function() {
  return !0;
};
var Ko = function() {
  Jo || (Jo = new Io);
  return Jo;
}, Jo = null;
var Lo, Mo, No = D("mr.Init");
qo.ea().init();
Lo = new ih("MediaRouter.Provider.WakeDuration");
Mo = new xo;
var Oo = (new Promise(function(a, b) {
  switch(window.location.host) {
    case "enhhojjnijigcajfphajepfemndkmdlo":
      a();
      break;
    case "pkedcjkdefgpdelpbcmbmeomcjbeemfm":
      chrome.management.get("enhhojjnijigcajfphajepfemndkmdlo", function(c) {
        chrome.runtime.lastError || !c.enabled ? a() : b(Error("Dev extension is enabled"));
      });
      break;
    default:
      b(Error("Unknown extension id"));
  }
})).then(function() {
  return chrome.mojoPrivate && chrome.mojoPrivate.requireAsync ? new Promise(function(a) {
    chrome.mojoPrivate.requireAsync("media_router_bindings").then(function(b) {
      b.start().then(function(c) {
        a({mrService:b, mrInstanceId:c});
      });
    });
  }) : Promise.reject(Error("No mojo service loaded"));
}).then(function(a) {
  if (!a.mrService) {
    throw Error("Failed to get MR service");
  }
  var b = a.mrInstanceId;
  if (!b) {
    throw Error("Failed to get MR instance ID.");
  }
  No.info("MR instance ID: " + b);
  a = a.mrService;
  if (!Mo) {
    throw Error("providerManager not initialized.");
  }
  a.setHandlers(Mo);
  hi(b) && Lo.Ro("MediaRouter.Provider.FirstWakeDuration");
  chrome.runtime.onSuspend.addListener(Lo.end.bind(Lo));
  for (var c = 0, e = ka(Object.keys(pa.LU)), f = e.next();!f.done;f = e.next()) {
    var f = f.value, h = f.length + window.localStorage.getItem(f).length;
    f.startsWith("mr.") ? $h += h : c += h;
  }
  fi = b;
  (window.localStorage.getItem("version") && window.localStorage.getItem("version") !== chrome.runtime.getManifest().version || hi(b)) && li();
  gi.info("initialize: " + $h + " bytes used, " + c + " other bytes");
  chrome.runtime.onSuspend.addListener(ki);
  qo.ea().ica();
  b = new $m(Mo);
  c = new bo(Mo, b);
  b = [b, c];
  b.push(new Bo(Mo));
  b.push(new Do(Mo));
  window.e2eTestService = new go(Mo);
  Mo.Xc(a, b);
}).then(void 0, function(a) {
  No.v(a.message);
  throw a;
});
[].concat([Ho(), Ko()], ma(Tn()), ma([ul(), wl()]), ma([vj()])).forEach(function(a) {
  return a.qY();
});
Ho().addListener();
Ko().addListener();
Oo.then(void 0, function() {
  return window.close();
});

