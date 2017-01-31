'use strict';var Ep = function(a) {
  if (!a) {
    return "";
  }
  a = a.split("#")[0].split("?")[0];
  a = a.toLowerCase();
  0 == a.indexOf("//") && (a = window.location.protocol + a);
  /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
  var b = a.substring(a.indexOf("://") + 3), c = b.indexOf("/");
  -1 != c && (b = b.substring(0, c));
  a = a.substring(0, a.indexOf("://"));
  if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a) {
    throw Error("Invalid URI scheme in origin");
  }
  var c = "", e = b.indexOf(":");
  if (-1 != e) {
    var f = b.substring(e + 1), b = b.substring(0, e);
    if ("http" === a && "80" !== f || "https" === a && "443" !== f) {
      c = ":" + f;
    }
  }
  return a + "://" + b + c;
};
var Fp = function() {
  function a() {
    f[0] = 1732584193;
    f[1] = 4023233417;
    f[2] = 2562383102;
    f[3] = 271733878;
    f[4] = 3285377520;
    C = A = 0;
  }
  function b(a) {
    for (var b = k, c = 0;64 > c;c += 4) {
      b[c / 4] = a[c] << 24 | a[c + 1] << 16 | a[c + 2] << 8 | a[c + 3];
    }
    for (c = 16;80 > c;c++) {
      a = b[c - 3] ^ b[c - 8] ^ b[c - 14] ^ b[c - 16], b[c] = (a << 1 | a >>> 31) & 4294967295;
    }
    a = f[0];
    for (var e = f[1], h = f[2], p = f[3], r = f[4], A, C, c = 0;80 > c;c++) {
      40 > c ? 20 > c ? (A = p ^ e & (h ^ p), C = 1518500249) : (A = e ^ h ^ p, C = 1859775393) : 60 > c ? (A = e & h | p & (e | h), C = 2400959708) : (A = e ^ h ^ p, C = 3395469782), A = ((a << 5 | a >>> 27) & 4294967295) + A + r + C + b[c] & 4294967295, r = p, p = h, h = (e << 30 | e >>> 2) & 4294967295, e = a, a = A;
    }
    f[0] = f[0] + a & 4294967295;
    f[1] = f[1] + e & 4294967295;
    f[2] = f[2] + h & 4294967295;
    f[3] = f[3] + p & 4294967295;
    f[4] = f[4] + r & 4294967295;
  }
  function c(a, c) {
    if ("string" === typeof a) {
      a = unescape(encodeURIComponent(a));
      for (var e = [], f = 0, k = a.length;f < k;++f) {
        e.push(a.charCodeAt(f));
      }
      a = e;
    }
    c || (c = a.length);
    e = 0;
    if (0 == A) {
      for (;e + 64 < c;) {
        b(a.slice(e, e + 64)), e += 64, C += 64;
      }
    }
    for (;e < c;) {
      if (h[A++] = a[e++], C++, 64 == A) {
        for (A = 0, b(h);e + 64 < c;) {
          b(a.slice(e, e + 64)), e += 64, C += 64;
        }
      }
    }
  }
  function e() {
    var a = [], e = 8 * C;
    56 > A ? c(p, 56 - A) : c(p, 64 - (A - 56));
    for (var k = 63;56 <= k;k--) {
      h[k] = e & 255, e >>>= 8;
    }
    b(h);
    for (k = e = 0;5 > k;k++) {
      for (var r = 24;0 <= r;r -= 8) {
        a[e++] = f[k] >> r & 255;
      }
    }
    return a;
  }
  for (var f = [], h = [], k = [], p = [128], r = 1;64 > r;++r) {
    p[r] = 0;
  }
  var A, C;
  a();
  return {reset:a, update:c, digest:e, digestString:function() {
    for (var a = e(), b = "", c = 0;c < a.length;c++) {
      b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
    }
    return b;
  }};
};
var Gp = function(a, b) {
  this.Hb = a;
  this.mc = b;
};
d = Gp.prototype;
d.u_ = function(a) {
  return this.mc < a.mc || this.mc == a.mc && this.Hb < a.Hb ? -1 : this.mc == a.mc && this.Hb == a.Hb ? 0 : 1;
};
d.lS = function() {
  return new Gp((this.Hb >>> 1 | (this.mc & 1) << 31) >>> 0, this.mc >>> 1 >>> 0);
};
d.yP = function() {
  return new Gp(this.Hb << 1 >>> 0, (this.mc << 1 | this.Hb >>> 31) >>> 0);
};
d.e9 = function() {
  return !!(this.mc & 2147483648);
};
d.sW = function() {
  return 0 == this.Hb && 0 == this.mc;
};
d.add = function(a) {
  return new Gp((this.Hb + a.Hb & 4294967295) >>> 0 >>> 0, ((this.mc + a.mc & 4294967295) >>> 0) + (4294967296 <= this.Hb + a.Hb ? 1 : 0) >>> 0);
};
d.sub = function(a) {
  return new Gp((this.Hb - a.Hb & 4294967295) >>> 0 >>> 0, ((this.mc - a.mc & 4294967295) >>> 0) - (0 > this.Hb - a.Hb ? 1 : 0) >>> 0);
};
var Hp = function(a, b) {
  var c = a & 65535;
  a >>>= 16;
  var e = b & 65535, f = b >>> 16;
  b = c * e + 65536 * (c * f & 65535) + 65536 * (a * e & 65535);
  for (c = a * f + (c * f >>> 16) + (a * e >>> 16);4294967296 <= b;) {
    b -= 4294967296, c += 1;
  }
  return new Gp(b >>> 0, c >>> 0);
};
Gp.prototype.f9 = function(a) {
  var b = Hp(this.Hb, a);
  a = Hp(this.mc, a);
  a.mc = a.Hb;
  a.Hb = 0;
  return b.add(a);
};
Gp.prototype.I0 = function(a) {
  if (0 == a) {
    return [];
  }
  for (var b = new Gp(0, 0), c = new Gp(this.Hb, this.mc), e = new Gp(a, 0), f = new Gp(1, 0);!e.e9();) {
    e = e.yP(), f = f.yP();
  }
  for (;!f.sW();) {
    0 >= e.u_(c) && (b = b.add(f), c = c.sub(e)), e = e.lS(), f = f.lS();
  }
  return [b, c];
};
Gp.prototype.toString = function() {
  for (var a = "", b = this;!b.sW();) {
    var b = b.I0(10), c = b[0], a = b[1].Hb + a, b = c;
  }
  "" == a && (a = "0");
  return a;
};
Gp.prototype.clone = function() {
  return new Gp(this.Hb, this.mc);
};
var Ip = function(a, b) {
  this.data = a;
  this.rp = b;
};
Ip.prototype.toString = function() {
  return "[op. result, version: " + this.rp + ", resource count: " + this.data.length + "]";
};
var Jp = function(a, b) {
  this.Pj = a;
  this.un = b;
};
Jp.prototype.KL = function() {
  return this.un;
};
var Kp = {ona:0, Sla:1, Rla:2, Mna:3, Poa:4, Ooa:5, Noa:6, SUCCESS:7};
var Lp = {UX:0, zW:1, TIMEOUT:2, ERROR:3, Mma:4, gla:5, CH:6, Yla:7, tla:8, vW:9, yla:10, koa:11, Toa:12, Ona:13, Ika:14, Wla:15, wma:16, hpa:17, Oka:18, tma:19, voa:20, bna:21, ula:22, Tla:23, rna:24, Coa:25, zoa:26, aX:27, zma:28, epa:29, joa:30, gna:31, dla:32, Yka:33, fpa:34, Lna:35, ppa:36, jpa:37, pma:38, oma:39, qma:40, mpa:41, Pna:42, Mla:43, Ula:44, kpa:45, Vka:46, jna:47, Jna:48, hna:49, Kna:50, Dna:51, Fna:52, Ena:53, Hna:54, Gna:55, Eoa:56, Xla:57, rpa:58, Pma:59, Fma:60, Wka:61, Nka:62, 
rla:63, Jma:64, ima:65, gma:66, Bma:67, jma:68, Xka:69, Zla:70, bla:71, ina:72, Bla:73, yoa:74, ela:102, Yna:104};
var Mp = function(a, b, c) {
  this.El = l(a) ? a : -1;
  this.ei = l(b) ? b : -1;
  this.sm = l(c) ? c : -1;
};
Mp.prototype.toString = function() {
  return 0 >= this.El && 0 >= this.ei && 0 >= this.sm ? "Unlimited" : "Bandwidth limited between " + this.El + " and " + this.ei + " starting from " + this.sm;
};
var Np = function(a, b, c, e) {
  this.Ot = a;
  this.Eu = b;
  this.Jx = c;
  this.Kv = e;
};
d = Np.prototype;
d.toString = function() {
  return "DataChannelDescriptor(label=" + this.Kv + " id=" + this.Ot + ", SSRC=" + this.Jx + ", format=" + this.Eu + ")";
};
d.getChannelId = function() {
  return this.Ot;
};
d.ZA = function() {
  return this.Eu;
};
d.Wh = function() {
  return this.Jx;
};
d.Ph = function() {
  return this.Kv;
};
d.equals = function(a) {
  return null == a ? !1 : this.Ot == a.Ot && this.Kv == a.Kv && this.Jx == a.Jx;
};
var Op = function(a, b) {
  return q(a) ? a : l(b) ? b : -1;
};
var Pp = function() {
  this.PR = u();
};
new Pp;
Pp.prototype.set = function(a) {
  this.PR = a;
};
Pp.prototype.reset = function() {
  this.set(u());
};
Pp.prototype.get = function() {
  return this.PR;
};
var Qp = function(a) {
  this.Bg = a || {cookie:""};
}, Rp = /\s*;\s*/;
d = Qp.prototype;
d.isEnabled = function() {
  return navigator.cookieEnabled;
};
d.H7 = function(a) {
  return !/[;=\s]/.test(a);
};
d.I7 = function(a) {
  return !/[;\r\n]/.test(a);
};
d.set = function(a, b, c, e, f, h) {
  if (!this.H7(a)) {
    throw Error('Invalid cookie name "' + a + '"');
  }
  if (!this.I7(b)) {
    throw Error('Invalid cookie value "' + b + '"');
  }
  l(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  e = e ? ";path=" + e : "";
  h = h ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(u() + 1000 * c)).toUTCString();
  this.Mea(a + "=" + b + f + e + c + h);
};
d.get = function(a, b) {
  for (var c = a + "=", e = this.BB(), f = 0, h;h = e[f];f++) {
    if (0 == h.lastIndexOf(c, 0)) {
      return h.substr(c.length);
    }
    if (h == a) {
      return "";
    }
  }
  return b;
};
d.remove = function(a, b, c) {
  var e = this.Ra(a);
  this.set(a, "", 0, b, c);
  return e;
};
d.ub = function() {
  return this.Xu().keys;
};
d.T = function() {
  return this.Xu().values;
};
d.nc = function() {
  return !this.Bg.cookie;
};
d.ja = function() {
  return this.Bg.cookie ? this.BB().length : 0;
};
d.Ra = function(a) {
  return l(this.get(a));
};
d.Fk = function(a) {
  for (var b = this.Xu().values, c = 0;c < b.length;c++) {
    if (b[c] == a) {
      return !0;
    }
  }
  return !1;
};
d.clear = function() {
  for (var a = this.Xu().keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b]);
  }
};
d.Mea = function(a) {
  this.Bg.cookie = a;
};
d.BB = function() {
  return (this.Bg.cookie || "").split(Rp);
};
d.Xu = function() {
  for (var a = this.BB(), b = [], c = [], e, f, h = 0;f = a[h];h++) {
    e = f.indexOf("="), -1 == e ? (b.push(""), c.push(f)) : (b.push(f.substring(0, e)), c.push(f.substring(e + 1)));
  }
  return {keys:b, values:c};
};
var Sp = function() {
};
var Tp = function(a) {
  this.to = 0;
  this.Ej = a || 100;
  this.sh = [];
};
d = Tp.prototype;
d.add = function(a) {
  var b = this.sh[this.to];
  this.sh[this.to] = a;
  this.to = (this.to + 1) % this.Ej;
  return b;
};
d.get = function(a) {
  a = this.kQ(a);
  return this.sh[a];
};
d.set = function(a, b) {
  a = this.kQ(a);
  this.sh[a] = b;
};
d.ja = function() {
  return this.sh.length;
};
d.nc = function() {
  return 0 == this.sh.length;
};
d.clear = function() {
  this.to = this.sh.length = 0;
};
d.T = function() {
  return this.U3(this.ja());
};
d.U3 = function(a) {
  var b = this.ja(), c = [];
  for (a = this.ja() - a;a < b;a++) {
    c.push(this.get(a));
  }
  return c;
};
d.ub = function() {
  for (var a = [], b = this.ja(), c = 0;c < b;c++) {
    a[c] = c;
  }
  return a;
};
d.Ra = function(a) {
  return a < this.ja();
};
d.Fk = function(a) {
  for (var b = this.ja(), c = 0;c < b;c++) {
    if (this.get(c) == a) {
      return !0;
    }
  }
  return !1;
};
d.kQ = function(a) {
  if (a >= this.sh.length) {
    throw Error("Out of bounds exception");
  }
  return this.sh.length < this.Ej ? a : (this.to + Number(a)) % this.Ej;
};
var Up = {SUCCESS:0, zW:100, Bna:101, loa:102, moa:103, vka:200, Lka:221, vW:201, $ka:202, fla:203, bma:204, ema:205, Yma:206, Zma:207, ana:208, mna:209, aX:210, xna:211, kna:222, gpa:223, zna:212, Rna:213, Qna:214, Xna:215, poa:216, roa:217, dpa:218, USER_CANCELED:219, npa:220, Jla:224, wna:225, una:226, bpa:227, vla:228, lma:229, Nna:230, vna:231, Cma:232, Kma:233, Lma:234, Una:235, nna:236, Hka:237, Gka:238, Ila:239, pna:240, Uka:300, cla:301, sla:302, Gma:303, Ima:304, fna:305, qoa:306, Aoa:307, 
zla:308, Goa:309, Dma:310, Lla:311, ooa:312, noa:313, Hma:314, xma:315, Ala:316, hma:317, hla:318, Mka:319, tna:320, yna:321, cpa:322, Ama:323, Xma:324, Wma:325};
var Vp = function() {
  this.J7 = 3;
  this.Cr = this.Ht = null;
  this.tE = this.Gw = this.pR = 0;
  this.nQ = 1;
  this.Zw = this.Sx = this.Rx = this.Qx = this.Tx = this.dV = 0;
};
d = Vp.prototype;
d.k_ = function() {
  this.Zw = this.Sx = this.Rx = this.Qx = this.Tx = 0;
};
d.$ba = function(a) {
  null == this.Ht && (this.Ht = a);
  if (null == this.Cr || a.getTime() > this.Cr.getTime()) {
    this.Cr = a;
  }
};
d.U0 = function() {
  return null != this.Cr && null != this.Ht ? (this.Cr.getTime() - this.Ht.getTime()) / 1000 : -1;
};
d.uY = function(a) {
  this.Tx += a.tabCpuUsage;
  this.Qx += a.browserCpuUsage;
  this.Rx += a.gpuCpuUsage;
  this.Sx += a.pluginCpuUsage;
  this.Zw++;
};
d.BY = function(a) {
  var b = a && a.numOfProcessors;
  if (b) {
    var c = 0, e = 0;
    if (a = a.processors) {
      for (var f = 0;f < a.length;f++) {
        var h = a[f].usage, c = c + (h.user + h.kernel), e = e + h.total;
      }
    } else {
      c = this.tE, e = this.Gw;
    }
    a = e == this.Gw ? this.pR : 100 * b * (c - this.tE) / (e - this.Gw);
    this.tE = c;
    this.Gw = e;
    this.dV = this.pR = a;
    this.nQ = b;
  }
};
d.toJson = function() {
  return {jmiVersion:this.J7, numOfProcessors:this.nQ, totalCpuUsage:this.dV, tabCpuUsage:this.Mu(this.Tx), browserCpuUsage:this.Mu(this.Qx), gpuCpuUsage:this.Mu(this.Rx), pluginCpuUsage:this.Mu(this.Sx)};
};
d.Mu = function(a) {
  return this.Zw ? a / this.Zw : null;
};
var Wp = function(a) {
  this.cg = a;
};
Wp.prototype.jv = Ld;
var Xp = function(a) {
  for (var b = "", c = 0, e = !1, f = null, h = 0;h < a.length;h++) {
    var k = a[h];
    if (e) {
      "\\" == f ? k = null : '"' == k && (e = !1);
    } else {
      if ('"' == k) {
        e = !0;
      } else {
        if ("," == f && "," == k | "]" == k || "[" == f && "," == k) {
          b = b + a.substring(c, h) + "null", c = h;
        }
      }
    }
    f = k;
  }
  b += a.substring(c);
  return JSON.parse(b);
};
var Yp = function(a, b, c, e, f, h, k, p, r, A, C) {
  this.Rz = a;
  this.uE = b;
  this.Oe = c;
  this.zE = e;
  this.HC = f;
  this.gb = h;
  this.sq = k;
  this.BA = p;
  this.CD = r;
  this.ds = l(A) ? A : null;
  this.es = l(C) ? C : null;
}, Zp = {apa:"UDP", Soa:"TCP", Ioa:"SSLTCP"};
d = Yp.prototype;
d.la = function() {
  return Vb(this);
};
d.Wk = function() {
  return this.Rz;
};
d.el = function() {
  return this.uE;
};
d.W = function() {
  return this.Oe;
};
d.Th = function() {
  return this.zE;
};
d.In = function() {
  return this.HC;
};
d.vb = function() {
  return this.gb;
};
d.ry = function(a) {
  var b = this.la();
  b.gb = a;
  return b;
};
d.Hn = function() {
  return this.BA;
};
d.Rq = function() {
  return this.CD;
};
var $p = function(a, b, c, e, f, h, k) {
  this.ra = a;
  this.ud = b;
  this.Xa = c;
  this.Ld = l(e) ? Vb(e) : null;
  this.Eg = l(f) ? f : null;
  this.Fc = l(h) ? h : !0;
  this.H = l(k) ? k : null;
  this.FH = 0;
  this.Mc = [];
};
d = $p.prototype;
d.toString = function() {
  return "{participantId: " + this.ra + ", sourceId: " + this.ud + ", mediaType: " + this.Xa + ", resolution: " + (null == this.Ld ? "" : this.Ld.width + "x" + this.Ld.height) + ", frameRate: " + this.Eg + ", adaptationReason: " + this.FH + ", ssrcs: " + this.Mc + "}";
};
d.D = function() {
  return this.ra;
};
d.$ = function() {
  return this.Xa;
};
d.ce = function() {
  return this.Fc;
};
d.Ga = function() {
  return this.ud;
};
d.kc = function() {
  return null != this.Ld ? Vb(this.Ld) : null;
};
d.Ju = function() {
  return this.FH;
};
d.ze = function() {
  return this.Mc;
};
d.K = function() {
  return this.H;
};
d.mh = function(a) {
  return new $p(this.ra, a, this.Xa, null != this.Ld ? this.Ld : void 0, null != this.Eg ? this.Eg : void 0, null != this.Fc ? this.Fc : void 0, null != this.H ? this.H : void 0);
};
d.lh = function(a) {
  return new $p(this.ra, this.ud, this.Xa, null != this.Ld ? this.Ld : void 0, null != this.Eg ? this.Eg : void 0, a, null != this.H ? this.H : void 0);
};
d.Ng = function() {
  return null != this.Ld ? this.Ld.width : null;
};
d.pka = function(a) {
  return new $p(this.ra, this.ud, this.Xa, new Yi(a, this.Hg() || 0), null != this.Eg ? this.Eg : void 0, null != this.Fc ? this.Fc : void 0, null != this.H ? this.H : void 0);
};
d.Hg = function() {
  return null != this.Ld ? this.Ld.height : null;
};
d.cka = function(a) {
  return new $p(this.ra, this.ud, this.Xa, new Yi(this.Ng() || 0, a), null != this.Eg ? this.Eg : void 0, null != this.Fc ? this.Fc : void 0, null != this.H ? this.H : void 0);
};
d.Gg = function() {
  return this.Eg;
};
d.$V = function(a) {
  return new $p(this.ra, this.ud, this.Xa, null != this.Ld ? this.Ld : void 0, a, null != this.Fc ? this.Fc : void 0, null != this.H ? this.H : void 0);
};
d.bW = function(a, b) {
  var c = this;
  if (null == this.Ng() || this.Ng() > a) {
    c = c.pka(a);
  }
  if (null == this.Hg() || this.Hg() > b) {
    c = c.cka(b);
  }
  return c;
};
d.aW = function(a) {
  return null == this.Gg() || this.Gg() > a ? this.$V(a) : this;
};
d.matches = function(a) {
  return this.D() == a.D() && this.KP(a);
};
d.KP = function(a) {
  return this.$() == a.$() && this.Ga() == a.Ga();
};
var aq = function() {
  this.lR = null;
  this.KS = !1;
  this.Y0 = this.$0 = this.W0 = this.X0 = this.zS = !0;
  this.b1 = !1;
  this.GS = this.HV = this.JV = this.c1 = !0;
};
aq.prototype.na = function() {
  return {autoGainControl:this.W0, echoCancellation:this.X0, highPassFilter:this.Y0, inbandFec:this.JV, dtx:this.HV, noiseSuppression:this.$0, preferredSendCodec:this.lR, sendComfortNoise:this.zS, sendOpus:this.GS, sendStereo:this.KS, stereoSwapping:this.b1, transientSuppression:this.c1};
};
aq.prototype.la = function() {
  return Vb(this);
};
var bq = function(a, b, c) {
  var e = this;
  this.oG = a;
  this.Cd = {};
  Lb(b, function(a, b) {
    return e.Cd[b.toLowerCase()] = a;
  });
  this.fda = c;
};
bq.prototype.DK = function() {
  return Vb(this.Cd);
};
bq.prototype.hB = function(a) {
  return this.Cd[a.toLowerCase()] || null;
};
var cq = function() {
  this.ad = 64;
  this.ta = Array(4);
  this.WY = Array(this.ad);
  this.Od = this.Pp = 0;
  this.reset();
};
v(cq, Ni);
cq.prototype.reset = function() {
  this.ta[0] = 1732584193;
  this.ta[1] = 4023233417;
  this.ta[2] = 2562383102;
  this.ta[3] = 271733878;
  this.Od = this.Pp = 0;
};
cq.prototype.Wi = function(a, b) {
  b || (b = 0);
  var c = Array(16);
  if (n(a)) {
    for (var e = 0;16 > e;++e) {
      c[e] = a.charCodeAt(b++) | a.charCodeAt(b++) << 8 | a.charCodeAt(b++) << 16 | a.charCodeAt(b++) << 24;
    }
  } else {
    for (e = 0;16 > e;++e) {
      c[e] = a[b++] | a[b++] << 8 | a[b++] << 16 | a[b++] << 24;
    }
  }
  a = this.ta[0];
  b = this.ta[1];
  var e = this.ta[2], f = this.ta[3], h;
  h = a + (f ^ b & (e ^ f)) + c[0] + 3614090360 & 4294967295;
  a = b + (h << 7 & 4294967295 | h >>> 25);
  h = f + (e ^ a & (b ^ e)) + c[1] + 3905402710 & 4294967295;
  f = a + (h << 12 & 4294967295 | h >>> 20);
  h = e + (b ^ f & (a ^ b)) + c[2] + 606105819 & 4294967295;
  e = f + (h << 17 & 4294967295 | h >>> 15);
  h = b + (a ^ e & (f ^ a)) + c[3] + 3250441966 & 4294967295;
  b = e + (h << 22 & 4294967295 | h >>> 10);
  h = a + (f ^ b & (e ^ f)) + c[4] + 4118548399 & 4294967295;
  a = b + (h << 7 & 4294967295 | h >>> 25);
  h = f + (e ^ a & (b ^ e)) + c[5] + 1200080426 & 4294967295;
  f = a + (h << 12 & 4294967295 | h >>> 20);
  h = e + (b ^ f & (a ^ b)) + c[6] + 2821735955 & 4294967295;
  e = f + (h << 17 & 4294967295 | h >>> 15);
  h = b + (a ^ e & (f ^ a)) + c[7] + 4249261313 & 4294967295;
  b = e + (h << 22 & 4294967295 | h >>> 10);
  h = a + (f ^ b & (e ^ f)) + c[8] + 1770035416 & 4294967295;
  a = b + (h << 7 & 4294967295 | h >>> 25);
  h = f + (e ^ a & (b ^ e)) + c[9] + 2336552879 & 4294967295;
  f = a + (h << 12 & 4294967295 | h >>> 20);
  h = e + (b ^ f & (a ^ b)) + c[10] + 4294925233 & 4294967295;
  e = f + (h << 17 & 4294967295 | h >>> 15);
  h = b + (a ^ e & (f ^ a)) + c[11] + 2304563134 & 4294967295;
  b = e + (h << 22 & 4294967295 | h >>> 10);
  h = a + (f ^ b & (e ^ f)) + c[12] + 1804603682 & 4294967295;
  a = b + (h << 7 & 4294967295 | h >>> 25);
  h = f + (e ^ a & (b ^ e)) + c[13] + 4254626195 & 4294967295;
  f = a + (h << 12 & 4294967295 | h >>> 20);
  h = e + (b ^ f & (a ^ b)) + c[14] + 2792965006 & 4294967295;
  e = f + (h << 17 & 4294967295 | h >>> 15);
  h = b + (a ^ e & (f ^ a)) + c[15] + 1236535329 & 4294967295;
  b = e + (h << 22 & 4294967295 | h >>> 10);
  h = a + (e ^ f & (b ^ e)) + c[1] + 4129170786 & 4294967295;
  a = b + (h << 5 & 4294967295 | h >>> 27);
  h = f + (b ^ e & (a ^ b)) + c[6] + 3225465664 & 4294967295;
  f = a + (h << 9 & 4294967295 | h >>> 23);
  h = e + (a ^ b & (f ^ a)) + c[11] + 643717713 & 4294967295;
  e = f + (h << 14 & 4294967295 | h >>> 18);
  h = b + (f ^ a & (e ^ f)) + c[0] + 3921069994 & 4294967295;
  b = e + (h << 20 & 4294967295 | h >>> 12);
  h = a + (e ^ f & (b ^ e)) + c[5] + 3593408605 & 4294967295;
  a = b + (h << 5 & 4294967295 | h >>> 27);
  h = f + (b ^ e & (a ^ b)) + c[10] + 38016083 & 4294967295;
  f = a + (h << 9 & 4294967295 | h >>> 23);
  h = e + (a ^ b & (f ^ a)) + c[15] + 3634488961 & 4294967295;
  e = f + (h << 14 & 4294967295 | h >>> 18);
  h = b + (f ^ a & (e ^ f)) + c[4] + 3889429448 & 4294967295;
  b = e + (h << 20 & 4294967295 | h >>> 12);
  h = a + (e ^ f & (b ^ e)) + c[9] + 568446438 & 4294967295;
  a = b + (h << 5 & 4294967295 | h >>> 27);
  h = f + (b ^ e & (a ^ b)) + c[14] + 3275163606 & 4294967295;
  f = a + (h << 9 & 4294967295 | h >>> 23);
  h = e + (a ^ b & (f ^ a)) + c[3] + 4107603335 & 4294967295;
  e = f + (h << 14 & 4294967295 | h >>> 18);
  h = b + (f ^ a & (e ^ f)) + c[8] + 1163531501 & 4294967295;
  b = e + (h << 20 & 4294967295 | h >>> 12);
  h = a + (e ^ f & (b ^ e)) + c[13] + 2850285829 & 4294967295;
  a = b + (h << 5 & 4294967295 | h >>> 27);
  h = f + (b ^ e & (a ^ b)) + c[2] + 4243563512 & 4294967295;
  f = a + (h << 9 & 4294967295 | h >>> 23);
  h = e + (a ^ b & (f ^ a)) + c[7] + 1735328473 & 4294967295;
  e = f + (h << 14 & 4294967295 | h >>> 18);
  h = b + (f ^ a & (e ^ f)) + c[12] + 2368359562 & 4294967295;
  b = e + (h << 20 & 4294967295 | h >>> 12);
  h = a + (b ^ e ^ f) + c[5] + 4294588738 & 4294967295;
  a = b + (h << 4 & 4294967295 | h >>> 28);
  h = f + (a ^ b ^ e) + c[8] + 2272392833 & 4294967295;
  f = a + (h << 11 & 4294967295 | h >>> 21);
  h = e + (f ^ a ^ b) + c[11] + 1839030562 & 4294967295;
  e = f + (h << 16 & 4294967295 | h >>> 16);
  h = b + (e ^ f ^ a) + c[14] + 4259657740 & 4294967295;
  b = e + (h << 23 & 4294967295 | h >>> 9);
  h = a + (b ^ e ^ f) + c[1] + 2763975236 & 4294967295;
  a = b + (h << 4 & 4294967295 | h >>> 28);
  h = f + (a ^ b ^ e) + c[4] + 1272893353 & 4294967295;
  f = a + (h << 11 & 4294967295 | h >>> 21);
  h = e + (f ^ a ^ b) + c[7] + 4139469664 & 4294967295;
  e = f + (h << 16 & 4294967295 | h >>> 16);
  h = b + (e ^ f ^ a) + c[10] + 3200236656 & 4294967295;
  b = e + (h << 23 & 4294967295 | h >>> 9);
  h = a + (b ^ e ^ f) + c[13] + 681279174 & 4294967295;
  a = b + (h << 4 & 4294967295 | h >>> 28);
  h = f + (a ^ b ^ e) + c[0] + 3936430074 & 4294967295;
  f = a + (h << 11 & 4294967295 | h >>> 21);
  h = e + (f ^ a ^ b) + c[3] + 3572445317 & 4294967295;
  e = f + (h << 16 & 4294967295 | h >>> 16);
  h = b + (e ^ f ^ a) + c[6] + 76029189 & 4294967295;
  b = e + (h << 23 & 4294967295 | h >>> 9);
  h = a + (b ^ e ^ f) + c[9] + 3654602809 & 4294967295;
  a = b + (h << 4 & 4294967295 | h >>> 28);
  h = f + (a ^ b ^ e) + c[12] + 3873151461 & 4294967295;
  f = a + (h << 11 & 4294967295 | h >>> 21);
  h = e + (f ^ a ^ b) + c[15] + 530742520 & 4294967295;
  e = f + (h << 16 & 4294967295 | h >>> 16);
  h = b + (e ^ f ^ a) + c[2] + 3299628645 & 4294967295;
  b = e + (h << 23 & 4294967295 | h >>> 9);
  h = a + (e ^ (b | ~f)) + c[0] + 4096336452 & 4294967295;
  a = b + (h << 6 & 4294967295 | h >>> 26);
  h = f + (b ^ (a | ~e)) + c[7] + 1126891415 & 4294967295;
  f = a + (h << 10 & 4294967295 | h >>> 22);
  h = e + (a ^ (f | ~b)) + c[14] + 2878612391 & 4294967295;
  e = f + (h << 15 & 4294967295 | h >>> 17);
  h = b + (f ^ (e | ~a)) + c[5] + 4237533241 & 4294967295;
  b = e + (h << 21 & 4294967295 | h >>> 11);
  h = a + (e ^ (b | ~f)) + c[12] + 1700485571 & 4294967295;
  a = b + (h << 6 & 4294967295 | h >>> 26);
  h = f + (b ^ (a | ~e)) + c[3] + 2399980690 & 4294967295;
  f = a + (h << 10 & 4294967295 | h >>> 22);
  h = e + (a ^ (f | ~b)) + c[10] + 4293915773 & 4294967295;
  e = f + (h << 15 & 4294967295 | h >>> 17);
  h = b + (f ^ (e | ~a)) + c[1] + 2240044497 & 4294967295;
  b = e + (h << 21 & 4294967295 | h >>> 11);
  h = a + (e ^ (b | ~f)) + c[8] + 1873313359 & 4294967295;
  a = b + (h << 6 & 4294967295 | h >>> 26);
  h = f + (b ^ (a | ~e)) + c[15] + 4264355552 & 4294967295;
  f = a + (h << 10 & 4294967295 | h >>> 22);
  h = e + (a ^ (f | ~b)) + c[6] + 2734768916 & 4294967295;
  e = f + (h << 15 & 4294967295 | h >>> 17);
  h = b + (f ^ (e | ~a)) + c[13] + 1309151649 & 4294967295;
  b = e + (h << 21 & 4294967295 | h >>> 11);
  h = a + (e ^ (b | ~f)) + c[4] + 4149444226 & 4294967295;
  a = b + (h << 6 & 4294967295 | h >>> 26);
  h = f + (b ^ (a | ~e)) + c[11] + 3174756917 & 4294967295;
  f = a + (h << 10 & 4294967295 | h >>> 22);
  h = e + (a ^ (f | ~b)) + c[2] + 718787259 & 4294967295;
  e = f + (h << 15 & 4294967295 | h >>> 17);
  h = b + (f ^ (e | ~a)) + c[9] + 3951481745 & 4294967295;
  this.ta[0] = this.ta[0] + a & 4294967295;
  this.ta[1] = this.ta[1] + (e + (h << 21 & 4294967295 | h >>> 11)) & 4294967295;
  this.ta[2] = this.ta[2] + e & 4294967295;
  this.ta[3] = this.ta[3] + f & 4294967295;
};
cq.prototype.update = function(a, b) {
  l(b) || (b = a.length);
  for (var c = b - this.ad, e = this.WY, f = this.Pp, h = 0;h < b;) {
    if (0 == f) {
      for (;h <= c;) {
        this.Wi(a, h), h += this.ad;
      }
    }
    if (n(a)) {
      for (;h < b;) {
        if (e[f++] = a.charCodeAt(h++), f == this.ad) {
          this.Wi(e);
          f = 0;
          break;
        }
      }
    } else {
      for (;h < b;) {
        if (e[f++] = a[h++], f == this.ad) {
          this.Wi(e);
          f = 0;
          break;
        }
      }
    }
  }
  this.Pp = f;
  this.Od += b;
};
cq.prototype.digest = function() {
  var a = Array((56 > this.Pp ? this.ad : 2 * this.ad) - this.Pp);
  a[0] = 128;
  for (var b = 1;b < a.length - 8;++b) {
    a[b] = 0;
  }
  for (var c = 8 * this.Od, b = a.length - 8;b < a.length;++b) {
    a[b] = c & 255, c /= 256;
  }
  this.update(a);
  a = Array(16);
  for (b = c = 0;4 > b;++b) {
    for (var e = 0;32 > e;e += 8) {
      a[c++] = this.ta[b] >>> e & 255;
    }
  }
  return a;
};
var eq = function(a) {
  w(!dq.hasOwnProperty(a), "Attempt to create a second Namespace with name: " + a);
  w(!/[^0-9a-zA-Z._]/.test(a), "Attempt to create a Namespace with invalid characters: " + a);
  this.Ia = a;
  dq[a] = this;
}, dq;
dq = {};
new eq("lib");
var fq = function(a, b) {
  n(b) ? (w(b, "NamespacedType does not allow empty type string"), w(!/[:]/.test(b), 'NamespacedType does not allow ":" in type string: ' + b)) : w(0 <= b, "NamespacedType does not allow negative type number");
  w(a, "NamespacedType does not accept undefined or null namespace");
  this.namespace_ = a;
  this.Oe = b;
  this.constructor.Zy || (this.constructor.Zy = {});
  a = this.toString();
  w(!this.constructor.Zy[a], "Registering duplicate namespaced type " + a);
  this.constructor.Zy[a] = this;
};
fq.prototype.Ua = function() {
  return this.toString();
};
fq.prototype.toString = function() {
  this.bV || (this.bV = this.namespace_.Ia + ":" + this.Oe);
  return this.bV;
};
fq.prototype.W = function() {
  return this.Oe;
};
var L = function(a, b, c) {
  w(a, "Invalid service id + " + a);
  if (c) {
    for (var e = 0;e < c.length;e++) {
      w(c[e], "Invalid dependency " + c[e] + " (index in dependency array: " + e + ") for service " + a);
    }
  }
  this.Uda = a;
  this.qo = b || null;
  this.aQ = !1;
  this.w0 = c || [];
};
d = L.prototype;
d.toString = function() {
  return this.Uda;
};
d.Q3 = function() {
  this.aQ = !0;
  return this.qo;
};
d.G6 = function() {
  return !!this.qo;
};
d.Ru = function() {
  return this.w0;
};
d.Yfa = function(a) {
  w(!this.aQ || a == this.qo, "The module id cannot be changed after it was read.");
  this.qo = a;
};
var gq = function(a) {
  this.cg = a;
};
v(gq, Wp);
var hq = function(a, b, c, e) {
  this.Xb = a;
  this.key = b;
  this.Ac = l(c) ? c : null;
  this.params = e || [];
}, iq = {MEDIA:"m", Ska:"a", VERSION:"v", ORIGIN:"o", Doa:"s", Uoa:"t", uma:"i", xla:"c", Zka:"b", Nla:"k"}, jq = {Boa:"session", AUDIO:"audio", VIDEO:"video", Rka:"application", Cla:"data"}, kq = {HOST:"host", Hoa:"srflx", hoa:"relay", Vna:"prflx"}, lq = {host:"LOCAL", srflx:"STUN", relay:"RELAY", prflx:"PEER_REFLEX"}, mq = {audio:"a", video:"v", data:"d", application:"d"};
var nq = function(a) {
  this.Qg = w(a.Qg);
  this.Pe = w(a.Pe);
};
nq.prototype.toString = function() {
  return "CodecParam(key=" + this.Qg + ", value=" + this.Pe + ")";
};
nq.prototype.getKey = function() {
  return this.Qg;
};
nq.prototype.zc = function() {
  return this.Pe;
};
var oq = function(a) {
  this.Qg = a ? a.Qg : null;
  this.Pe = a ? a.Pe : null;
};
oq.prototype.ga = function() {
  w(this.Vd());
  return new nq(this);
};
oq.prototype.Vd = function() {
  return null != this.Qg && null != this.Pe;
};
oq.prototype.dka = function(a) {
  this.Qg = a;
  return this;
};
oq.prototype.oka = function(a) {
  this.Pe = a;
  return this;
};
var pq = function(a) {
  this.xm = w(a.xm);
  this.sl = $a(a.sl);
  this.Mo = a.Mo;
  this.zm = Za(a.zm);
}, qq = {Jka:"AES_CM_128_HMAC_SHA1_32", Kka:"AES_CM_128_HMAC_SHA1_80"};
d = pq.prototype;
d.toString = function() {
  return "Crypto(suite=" + this.xm + ", keyParams=<redacted>, sessionParams_=" + (null != this.Mo ? "<redacted>" : null) + ", tag=" + this.zm + ")";
};
d.sj = function() {
  return this.xm;
};
d.Kn = function() {
  return this.sl;
};
d.Yq = function() {
  return this.Mo;
};
d.dr = function() {
  return this.zm;
};
var rq = function(a) {
  this.xm = a ? a.xm : null;
  this.sl = a ? a.sl : null;
  this.Mo = a ? a.Mo : null;
  this.zm = a ? a.zm : null;
};
d = rq.prototype;
d.ga = function() {
  w(this.Vd());
  return new pq(this);
};
d.Vd = function() {
  return null != this.xm && null != this.sl && null != this.zm && -1 != this.sl.indexOf(":");
};
d.ZG = function(a) {
  this.xm = a;
  return this;
};
d.VG = function(a) {
  this.sl = a;
  return this;
};
d.hW = function(a) {
  this.Mo = a;
  return this;
};
d.$G = function(a) {
  this.zm = a;
  return this;
};
var sq = function(a) {
  this.Cm = $a(a.Cm);
  this.eb = Za(a.eb);
  this.Xa = a.Xa;
};
sq.prototype.toString = function() {
  return "RtpHeaderExtension(uri=" + this.Cm + ", id=" + this.eb + ", mediaType=" + this.Xa + ")";
};
sq.prototype.Rn = function() {
  return this.Cm;
};
sq.prototype.getId = function() {
  return this.eb;
};
sq.prototype.$ = function() {
  return this.Xa;
};
var tq = function(a) {
  this.Cm = a ? a.Cm : null;
  this.eb = a ? a.eb : null;
  this.Xa = a ? a.Xa : null;
};
d = tq.prototype;
d.ga = function() {
  w(this.Vd());
  return new sq(this);
};
d.Vd = function() {
  return !Ha(Qa(this.Cm)) && null != this.eb && 0 < this.eb && 255 > this.eb;
};
d.lt = function(a) {
  this.Cm = a;
  return this;
};
d.it = function(a) {
  this.eb = a;
  return this;
};
d.kb = function(a) {
  this.Xa = a;
  return this;
};
var uq = function(a) {
  this.gb = Za(a.gb);
  this.Ia = $a(a.Ia);
  this.Jr = a.Jr;
  this.Bl = Za(a.Bl);
};
uq.prototype.na = function() {
  return {port:this.vb(), name:this.getName(), messagesize:this.Jr, numstreams:this.Bl};
};
uq.prototype.vb = function() {
  return this.gb;
};
uq.prototype.getName = function() {
  return this.Ia;
};
var vq = function(a) {
  this.gb = a ? a.gb : null;
  this.Ia = a ? a.Ia : null;
  this.Jr = a ? a.Jr : null;
  this.Bl = a ? a.Bl : null;
};
d = vq.prototype;
d.ga = function() {
  w(this.Vd());
  return new uq(this);
};
d.Vd = function() {
  return null != this.gb && null != this.Ia && null != this.Bl;
};
d.ry = function(a) {
  this.gb = a;
  return this;
};
d.Oc = function(a) {
  this.Ia = a;
  return this;
};
d.eka = function(a) {
  this.Jr = a;
  return this;
};
d.WG = function(a) {
  this.Bl = a;
  return this;
};
var wq = function() {
  this.MV = this.KG = this.pp = this.et = !0;
  this.kA = !1;
  this.$H = !0;
  this.af = null;
  this.ln = [];
  this.Pja = !0;
  this.Lk = this.Kk = !1;
  this.Mz = null;
  this.LG = !0;
  this.o0 = this.Qa = !1;
  this.FU = !0;
  this.Ct = new aq;
  this.op = !1;
  this.JG = this.Wr = !0;
  this.bI = this.aI = this.GV = !1;
  this.UZ = void 0;
  this.KV = this.FV = !1;
  this.NV = !0;
  this.wg = null;
};
d = wq.prototype;
d.na = function() {
  return {useAudio:this.et, useVideo:this.pp, useData:this.KG, useVideoRtx:this.MV, dumpRtpHeaders:this.kA, allowEarlyMedia:this.$H, earlyMediaHangoutId:this.af, defaultRequests:this.ln, useStandardIce:this.Pja, debugLogUploadAllowed:this.Kk, debugLogUploadForced:this.Lk, clientResource:this.Mz, useSimulcast:this.LG, useP2P:this.Qa, startMuted:this.FU, useDtls:this.op, playAudio:this.Wr, useConferenceMode:this.JG, useDetours:this.GV, allowH264:this.aI, allowVP9:this.bI, useAdaptiveLayering_:this.FV, 
  useMsodc:this.KV, useWebrtcCpuAdaptation:this.NV};
};
d.la = function() {
  return Vb(this);
};
d.nka = function(a) {
  var b = this.la();
  b.pp = a;
  return b;
};
d.Su = function() {
  return this.kA;
};
d.bka = function(a) {
  var b = this.la();
  b.kA = a;
  return b;
};
d.VV = function(a) {
  if (this.Kk && this.Lk) {
    return this;
  }
  var b = this.la();
  b.Kk = a;
  return b;
};
d.WV = function() {
  var a = this.la();
  a.Lk = !0;
  return a;
};
d.YV = function(a) {
  var b = this.la();
  b.af = a;
  return b;
};
d.Of = function() {
  return this.ln;
};
d.Im = function(a) {
  var b = this.la();
  b.ln = a;
  return b;
};
d.yd = function() {
  return this.Mz;
};
d.Zja = function(a) {
  var b = this.la();
  b.Mz = a;
  return b;
};
d.mka = function(a) {
  var b = this.la();
  b.LG = a;
  return b;
};
d.lka = function(a) {
  var b = this.la();
  b.Qa = a;
  return b;
};
d.Yja = function(a) {
  var b = this.la();
  b.Ct = a;
  return b;
};
d.ika = function(a) {
  var b = this.la();
  b.FU = a;
  return b;
};
d.kka = function(a) {
  var b = this.la();
  b.op = a;
  return b;
};
d.hka = function(a) {
  var b = this.la();
  b.Wr = a;
  return b;
};
d.jka = function(a) {
  var b = this.la();
  b.JG = a;
  return b;
};
d.EK = function() {
  return this.aI;
};
d.py = function(a) {
  var b = this.la();
  b.wg = a;
  return b;
};
d.xd = function() {
  return this.wg;
};
var xq = function(a, b, c) {
  bq.call(this, a, b, c);
};
la(xq, bq);
var M = function(a) {
  return M.JO(a);
};
M.JO = function(a) {
  return a + "_";
};
M.jva = function() {
  throw Error("xid.literal must not be used in COMPILED mode.");
};
M.object = function(a) {
  if (a && a.constructor && a.constructor.toString() === Object.toString()) {
    var b = {}, c;
    for (c in a) {
      a.hasOwnProperty(c) && (b[M.JO(c)] = a[c]);
    }
    return b;
  }
  throw Error("xid.object must be called with an object literal.");
};
M.Ola = !0;
M.Tpa = function(a) {
  return a;
};
M.Pua = function() {
  return !0;
};
var yq = function(a, b, c, e, f) {
  w(0 < a, "Initial value must be greater than zero.");
  w(b >= a, "Max value should be at least as large as initial value.");
  l(c) && w(0 <= c && 1 >= c, "Randomness factor should be between 0 and 1.");
  l(e) && w(1 < e, "Backoff factor should be greater than 1");
  l(f) && w(1 <= f, "Decay factor should be greater than 1");
  this.CO = a;
  this.MP = b;
  this.cq = this.Xz = a;
  this.yR = c || 0;
  this.Gt = e || 2;
};
yq.prototype.bq = 0;
yq.prototype.reset = function() {
  this.cq = this.Xz = this.CO;
  this.bq = 0;
};
yq.prototype.zc = function() {
  return this.Xz;
};
yq.prototype.Ft = function() {
  this.cq = Math.min(this.MP, this.cq * this.Gt);
  this.Xz = Math.min(this.MP, this.cq + (this.yR ? Math.round(this.yR * (Math.random() - 0.5) * 2 * this.cq) : 0));
  this.bq++;
};
var zq = function(a, b) {
  $c.call(this);
  this.PJ = this.wJ = null;
  this.Al = b;
  this.Tc = [];
  this.W_(a);
};
v(zq, $c);
d = zq.prototype;
d.getObject = function() {
  return this.Tc.length ? this.Tc.pop() : this.zh();
};
d.$l = function(a) {
  this.Tc.length < this.Al ? this.Tc.push(a) : this.Nk(a);
};
d.W_ = function(a) {
  if (a > this.Al) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for (var b = 0;b < a;b++) {
    this.Tc.push(this.zh());
  }
};
d.zh = function() {
  return this.wJ ? this.wJ() : {};
};
d.Nk = function(a) {
  if (this.PJ) {
    this.PJ(a);
  } else {
    if (wa(a)) {
      if (va(a.ob)) {
        a.ob();
      } else {
        for (var b in a) {
          delete a[b];
        }
      }
    }
  }
};
d.aa = function() {
  zq.X.aa.call(this);
  for (var a = this.Tc;a.length;) {
    this.Nk(a.pop());
  }
  delete this.Tc;
};
var Aq = {TAB:0, pH:1}, Bq = function(a) {
  oh("MediaRouter.Hangouts.Start.Success", a, Aq);
};
var Dq = function(a, b, c, e) {
  var f = [];
  if (1 == (ta(c) ? 2 : 1)) {
    return f = [b, a], x(e, function(a) {
      f.push(a);
    }), Cq(f.join(" "));
  }
  var h = [], k = [];
  x(c, function(a) {
    k.push(a.key);
    h.push(a.value);
  });
  c = Math.floor((new Date).getTime() / 1000);
  f = qb(h) ? [c, b, a] : [h.join(":"), c, b, a];
  x(e, function(a) {
    f.push(a);
  });
  a = Cq(f.join(" "));
  a = [c, a];
  qb(k) || a.push(k.join(""));
  return a.join("_");
}, Cq = function(a) {
  var b = Fp();
  b.update(a);
  return b.digestString().toLowerCase();
};
var Eq = function() {
}, Fq = function(a, b) {
  a.X ? w(a.prototype instanceof Eq, "delegate base class is not a subclass of fava.delegate.Delegate") : v(a, Eq);
  w(!b.Ah, "delegator already has a delegate base set");
  b.Ah = a;
  do {
    b = b.X && b.X.constructor;
  } while (b && !b.Ah);
  if (b && b.Ah !== a.X.constructor) {
    throw Error("delegate base must derive from superclass delegate base");
  }
}, Gq = function(a, b, c) {
  if (a.X) {
    w(a.prototype instanceof b, "delegate is not a subclass of the delegate base");
  } else {
    for (var e in a.prototype) {
      if (a.prototype.hasOwnProperty(e)) {
        throw Error("delegate registered after defining methods. you should extend your delegate base explicitly immediately after defining your delegate class");
      }
    }
    v(a, b);
  }
  w(!b.dA, "delegate registered after first delegator instantiation");
  c = c || 0;
  a.IJ = c;
  if (b.ve) {
    b = b.ve;
    e = 0;
    for (var f = b.length - 1;e <= f;) {
      var h = e + f >> 1;
      c > b[h].IJ ? f = h - 1 : e = h + 1;
    }
    e < b.length && b[e].IJ == c && ++e;
    b.splice(e, 0, a);
  } else {
    b.ve = [a];
  }
}, Jq = function(a) {
  var b = a.Ah, c = function(a) {
    c.X.constructor.call(this, a);
    var b = this.ve.length;
    this.Jf = [];
    for (var e = 0;e < b;++e) {
      this.ve[e].esa || (this.Jf[e] = new this.ve[e](a));
    }
  };
  v(c, b);
  for (var e = [];a;) {
    if (b = a.Ah) {
      b.ve && Ab(e, b.ve);
      var f = b.prototype, h;
      for (h in f) {
        if (f.hasOwnProperty(h) && va(f[h]) && f[h] !== b) {
          var k = !!f[h].Bqa, p = Hq(h, f, e, k);
          (k = Iq(h, f, p, k)) && (c.prototype[h] = k);
        }
      }
    }
    a = a.X && a.X.constructor;
  }
  c.prototype.ve = e;
  return c;
}, Hq = function(a, b, c, e) {
  for (var f = [], h = 0;h < c.length && (c[h].prototype[a] === b[a] || (f.push(h), !e));++h) {
  }
  return f;
}, Iq = function(a, b, c, e) {
  return c.length ? e ? function(b) {
    var e = this.Jf[c[0]];
    return e ? e[a].apply(this.Jf[c[0]], arguments) : this.ve[c[0]].prototype[a].apply(this, arguments);
  } : b[a].KZ ? function(b) {
    return this.v0(a, c, Array.prototype.slice.call(arguments, 0));
  } : b[a].FI ? function(b) {
    return this.u0(a, c, Array.prototype.slice.call(arguments, 0));
  } : b[a].jQ ? function(b) {
    return this.t0(a, c, Array.prototype.slice.call(arguments, 0));
  } : function(b) {
    return this.s0(a, c, Array.prototype.slice.call(arguments, 0));
  } : e || b[a].KZ || b[a].FI || b[a].jQ ? null : Kq;
}, Kq = function() {
  return [];
};
d = Eq.prototype;
d.s0 = function(a, b, c) {
  for (var e = [], f = 0;f < b.length;++f) {
    var h = this.Jf[b[f]];
    e.push(h ? h[a].apply(h, c) : this.ve[b[f]].prototype[a].apply(this, c));
  }
  return e;
};
d.t0 = function(a, b, c) {
  for (var e = 0;e < b.length;++e) {
    var f = this.Jf[b[e]];
    f ? f[a].apply(f, c) : this.ve[b[e]].prototype[a].apply(this, c);
  }
};
d.v0 = function(a, b, c) {
  for (var e = 0;e < b.length;++e) {
    var f = this.Jf[b[e]];
    if (f = f ? f[a].apply(f, c) : this.ve[b[e]].prototype[a].apply(this, c)) {
      return f;
    }
  }
  return !1;
};
d.u0 = function(a, b, c) {
  for (var e = 0;e < b.length;++e) {
    var f = this.Jf[b[e]], f = f ? f[a].apply(f, c) : this.ve[b[e]].prototype[a].apply(this, c);
    if (null != f) {
      return f;
    }
  }
};
d.zu = function(a) {
  if (this.Jf) {
    for (var b = 0;b < this.Jf.length;++b) {
      if (this.Jf[b] instanceof a) {
        return this.Jf[b];
      }
    }
  }
  return null;
};
var Lq = function(a) {
  a = a ? a : function() {
  };
  a.FI = !0;
  return a;
};
var Mq = function(a, b) {
  fq.call(this, a, b);
};
v(Mq, fq);
var Nq = function(a) {
  var b = {}, c = {}, e = [], f = [], h = function(a) {
    if (!c[a]) {
      var f = a instanceof L ? a.Ru() : [];
      c[a] = z(f);
      x(f, function(c) {
        b[c] = b[c] || [];
        b[c].push(a);
      });
      f.length || e.push(a);
      x(f, h);
    }
  };
  for (x(a, h);e.length;) {
    var k = e.shift();
    f.push(k);
    b[k] && x(b[k], function(a) {
      wb(c[a], k);
      c[a].length || e.push(a);
    });
  }
  w(!Mb(c, function(a) {
    return 0 < a.length;
  }), "Some dependencies were not resolved properly.This can be caused by a dependency cycle.");
  var p = {}, r = [];
  x(f, function(a) {
    a instanceof L && (a = a.Q3(), null == a || p[a] || (p[a] = !0, r.push(a)));
  });
  return {services:f, a9:r};
};
var Oq = function(a, b, c, e, f, h, k, p, r, A, C) {
  w(b.length == c.length);
  w(k.length == p.length);
  w(b.length == k.length);
  w(e.length == f.length);
  w(r.length == A.length);
  w(e.length == r.length);
  this.fm = a;
  this.iF = z(b);
  this.Yca = z(c);
  z(e);
  this.Ww = zb(b, e);
  this.cda = zb(c, f);
  this.Vw = h;
  this.Zca = z(k);
  this.$ca = z(p);
  z(r);
  this.gS = zb(k, r);
  this.bda = zb(p, A);
  this.ada = C || Md;
};
d = Oq.prototype;
d.Zt = function(a) {
  var b;
  if (a instanceof this.fm) {
    b = this.iF;
  } else {
    if (a instanceof this.Vw) {
      b = this.Zca;
    } else {
      return Ya("Passed in object did not match resource or identifier type"), [];
    }
  }
  return y(b, function(b) {
    return b.call(a);
  });
};
d.hn = function(a) {
  var b;
  if (a instanceof this.fm) {
    b = this.Ww;
  } else {
    if (a instanceof this.Vw) {
      b = this.gS;
    } else {
      return Ya("Passed in object did not match resource or identifier type"), [];
    }
  }
  return y(b, function(b) {
    return b.call(a);
  });
};
d.z7 = function(a) {
  return a instanceof this.fm;
};
d.Ff = function(a, b) {
  var c = this.cda;
  a.length == c.length ? w(!b, "Cannot specify resourceKey and itemKey") : b ? a = zb(a, b) : c = this.Yca;
  w(c.length == a.length);
  var e = new this.fm;
  x(a, function(a, b) {
    c[b].call(e, a);
  }, this);
  return e;
};
d.zJ = function(a, b) {
  var c = this.bda;
  a.length == c.length ? w(!b, "Cannot specify resourceKey and itemKey") : b ? a = zb(a, b) : c = this.$ca;
  w(c.length == a.length);
  var e = new this.Vw;
  x(a, function(a, b) {
    c[b].call(e, a);
  }, this);
  return e;
};
d.NC = function(a) {
  var b;
  if (a instanceof this.fm) {
    b = this.Ww;
  } else {
    if (a instanceof this.Vw) {
      b = this.gS;
    } else {
      return Ya("Passed in object did not match resource or identifier type"), !1;
    }
  }
  return !kb(b, function(b) {
    return null == b.call(a);
  });
};
d.ZO = function(a, b) {
  a = this.au(a, this.Zt);
  b = this.au(b, this.Zt);
  w(a.length == this.iF.length);
  w(b.length == this.iF.length);
  return Jb(a, b);
};
d.$O = function(a, b) {
  a = this.au(a, this.hn);
  b = this.au(b, this.hn);
  w(a.length == this.Ww.length);
  w(b.length == this.Ww.length);
  return Jb(a, b);
};
d.Uz = function(a) {
  if (a instanceof this.fm) {
    return a;
  }
  var b = new this.fm(JSON.parse(a.Ua()));
  w(a.iw == b.iw);
  return b;
};
d.Xt = function(a) {
  return this.ada(a);
};
d.au = function(a, b) {
  return a instanceof Array ? a : b.call(this, a);
};
var Pq = function(a, b, c) {
  this.FZ = a;
  this.jba = b;
  this.qda = c;
};
Pq.prototype.SK = function() {
  return z(this.FZ);
};
Pq.prototype.cl = function() {
  return this.jba;
};
Pq.prototype.Pn = function() {
  return this.qda;
};
var Qq = function(a) {
  this.Xa = w(a.Xa);
  this.od = Za(a.od);
  this.Ia = $a(a.Ia);
  this.Ni = a.Ni;
  this.xh = a.xh;
  this.xg = a.xg;
  this.Ug = a.Ug;
};
d = Qq.prototype;
d.toString = function() {
  return "Codec(name=" + this.Ia + ", mediaType=" + this.Xa + ", payloadType=" + this.od + ", bitrate=" + this.Ni + ", clockrate=" + this.xh + ", channels=" + this.xg + ", params=" + this.Ug + ")";
};
d.$ = function() {
  return this.Xa;
};
d.getName = function() {
  return this.Ia;
};
d.AB = function() {
  return z(this.Ug);
};
d.getParam = function(a) {
  var b = nb(this.Ug, function(b) {
    return b.getKey() == a;
  });
  return b ? b.zc() : null;
};
d.$v = function(a) {
  var b = this.getName(), b = String(b).toLowerCase();
  a = String(a).toLowerCase();
  return 0 == (b < a ? -1 : b == a ? 0 : 1);
};
var Rq = function(a) {
  this.Xa = a ? a.Xa : null;
  this.od = a ? a.od : null;
  this.Ia = a ? a.Ia : null;
  this.Ni = a ? a.Ni : null;
  this.xh = a ? a.xh : null;
  this.xg = a ? a.xg : null;
  this.Ug = a ? z(a.Ug) : [];
};
d = Rq.prototype;
d.ga = function() {
  w(this.Vd());
  return new Qq(this);
};
d.Vd = function() {
  return null != this.Xa && null != this.od && null != this.Ia && 0 <= this.od && 127 >= this.od;
};
d.kb = function(a) {
  this.Xa = a;
  return this;
};
d.ke = function(a) {
  this.od = a;
  return this;
};
d.Oc = function(a) {
  this.Ia = a;
  return this;
};
d.pg = function(a) {
  this.Ni = a;
  return this;
};
d.Re = function(a) {
  this.xh = a;
  return this;
};
d.Qe = function(a) {
  this.xg = a;
  return this;
};
d.gka = function(a) {
  this.Ug = z(a);
  return this;
};
d.jt = function(a, b) {
  b = (new oq).dka(a).oka(b).ga();
  var c = mb(this.Ug, function(b) {
    return b.getKey() == a;
  });
  -1 == c ? this.Ug.push(b) : this.Ug[c] = b;
  return this;
};
var Sq = function(a) {
  this.Yj = $a(a.Yj);
  w(!Ha(this.Yj));
  this.Mc = z(a.Mc);
};
Sq.prototype.toString = function() {
  return "SsrcGroup(semantics=" + this.Yj + ", ssrcs=" + this.Mc + ")";
};
Sq.prototype.Xq = function() {
  return this.Yj;
};
Sq.prototype.ze = function() {
  return z(this.Mc);
};
var Tq = function(a) {
  this.Yj = a ? a.Yj : null;
  this.Mc = a ? z(a.Mc) : [];
};
Tq.prototype.ga = function() {
  w(this.Vd());
  return new Sq(this);
};
Tq.prototype.Vd = function() {
  return null != this.Yj && !qb(this.Mc);
};
Tq.prototype.sy = function(a) {
  this.Yj = a;
  return this;
};
Tq.prototype.qg = function(a) {
  this.Mc = z(a);
  return this;
};
var Uq = function(a, b, c, e, f, h) {
  this.Fm = a;
  this.lk = b;
  this.Qj = c;
  this.wn = e || null;
  this.XJ = null;
  this.SZ = f || [];
  this.X8 = h || "full";
};
d = Uq.prototype;
d.la = function() {
  return Vb(this);
};
d.Uf = function() {
  return this.Fm;
};
d.iW = function(a) {
  var b = this.la();
  b.lk = a;
  return b;
};
d.fW = function(a) {
  var b = this.la();
  b.Qj = a;
  return b;
};
d.xe = function() {
  return this.wn;
};
d.ZV = function(a) {
  var b = this.la();
  b.wn = a;
  return b;
};
d.XV = function(a) {
  var b = this.la();
  b.XJ = a;
  return b;
};
d.wq = function() {
  return z(this.SZ);
};
new L("iHLLuf");
var Vq = new L("FwiOSb");
M.Ub = {};
M.Ub.Iy = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
M.Ub.zy = M.Ub.Iy + "0123456789";
M.Ub.Jy = M.Ub.Iy.length;
M.Ub.Fy = M.Ub.zy.length;
M.Ub.sH = -2147483648;
M.Ub.tAa = function(a) {
  w(6 >= a.length, "Xids should not be longer than 6 characters");
  for (var b = 0, c = a.length - 1;0 <= c;c--) {
    b = b * (0 == c ? M.Ub.Jy : M.Ub.Fy) + M.Ub.zy.indexOf(a.charAt(c));
  }
  return b + M.Ub.sH;
};
M.Ub.toString = function(a) {
  var b = [], c = 0;
  a -= M.Ub.sH;
  b[c++] = M.Ub.Iy.charAt(a % M.Ub.Jy);
  for (a = Math.floor(a / M.Ub.Jy);0 < a;) {
    b[c++] = M.Ub.zy.charAt(a % M.Ub.Fy), a = Math.floor(a / M.Ub.Fy);
  }
  return b.join("");
};
var Wq = function(a, b) {
  this.Cu = a;
  this.C = b;
};
Wq.prototype.execute = function(a) {
  this.Cu && (this.Cu.call(this.C || null, a), this.Cu = this.C = null);
};
Wq.prototype.abort = function() {
  this.C = this.Cu = null;
};
var Xq = function(a) {
  var b = Ep(String(g.location.href)), c = g.__OVERRIDE_SID;
  null == c && (c = (new Qp(document)).get("SID"));
  if (c) {
    var e = (c = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? g.__SAPISID : g.__APISID;
    null == e && (e = (new Qp(document)).get(c ? "SAPISID" : "APISID"));
    if (e) {
      return b = String(g.location.href), c = c ? "SAPISIDHASH" : "APISIDHASH", b && e && c ? [c, Dq(Ep(b), e, a || null, [])].join(" ") : null;
    }
  }
  return null;
};
var Zq = function(a) {
  if (!a.hc) {
    var b;
    for (b = a.constructor;b && !b.Ah;) {
      b = b.X && b.X.constructor;
    }
    w(b, "trying to create delegate for non-delegating class: did you forget to use fava.delegate.Delegate.setBase?");
    b.Ah.dA || (b.Ah.dA = Jq(b));
    b = new b.Ah.dA(a);
    a.hc = b;
    a.zu ? w(a.zu == Yq, "conflicting definitions of findDelegate") : a.zu = Yq;
  }
}, Yq = function(a) {
  return this.hc.zu(a);
};
var $q = function(a, b) {
  this.Hl = a;
  this.deviceId = null != b ? b : null;
};
d = $q.prototype;
d.equals = function(a) {
  return a === this ? !0 : a ? this.Hl === a.Hl && this.deviceId === a.deviceId : !1;
};
d.la = function() {
  return Vb(this);
};
d.fka = function(a) {
  var b = this.la();
  b.Hl = a;
  return b;
};
d.aka = function(a) {
  var b = this.la();
  b.deviceId = a;
  return b;
};
d.hv = function() {
  var a = {optional:[]};
  a.optional.push({sourceId:this.deviceId});
  return a;
};
d.toString = function() {
  return g.JSON.stringify(this);
};
var ar = function(a, b, c, e, f, h, k, p) {
  $q.call(this, a, p);
  this.lw = b;
  this.minWidth = c;
  this.minHeight = e;
  this.aw = f;
  this.maxWidth = h;
  this.maxHeight = k;
};
v(ar, $q);
ar.prototype.equals = function(a) {
  return this === a ? !0 : a instanceof ar ? ar.X.equals.call(this, a) && this.lw === a.lw && this.minWidth === a.minWidth && this.minHeight === a.minHeight && this.aw === a.aw && this.maxWidth === a.maxWidth && this.maxHeight === a.maxHeight : !1;
};
ar.prototype.hv = function() {
  var a = ar.X.hv.call(this);
  a.optional.push({minRefreshRate:this.lw});
  a.optional.push({minHeight:this.minHeight});
  a.optional.push({minWidth:this.minWidth});
  a.optional.push({maxRefreshRate:this.aw});
  a.optional.push({maxWidth:this.maxWidth});
  a.optional.push({maxHeight:this.maxHeight});
  return a;
};
var br = function(a, b, c, e) {
  this.Oe = a;
  this.te = b;
  this.rd = null;
  this.Io = c;
  this.OU = [];
  this.rD = "";
  this.ln = [];
  this.Kw = this.Fc = !0;
  this.wg = e || null;
};
d = br.prototype;
d.na = function() {
  var a = this.rd ? this.rd.na() : {};
  return {type:this.W(), mediaId:this.Qf(), bandwidthConstraints:this.xd() && this.xd().toString(), codecs:this.ed(), streams:this.Kb(), sctpSettings:a, defaultRequests:y(this.Of(), function(a) {
    return a.toString();
  }), send:this.ce(), receive:this.Kw};
};
d.la = function() {
  return Vb(this);
};
d.W = function() {
  return this.Oe;
};
d.ed = function() {
  return z(this.te);
};
d.qk = function(a) {
  var b = this.la();
  b.te = a;
  return b;
};
d.vp = function(a) {
  var b = this.la();
  b.rd = a;
  return b;
};
d.gl = function() {
  return z(this.Io);
};
d.gW = function(a) {
  var b = this.la();
  b.Io = a;
  return b;
};
d.Kb = function() {
  return z(this.OU);
};
d.Qd = function(a) {
  var b = this.la();
  b.OU = a;
  return b;
};
d.Qf = function() {
  if (this.rD) {
    return this.rD;
  }
  switch(this.Oe) {
    case "a":
      return "audio";
    case "v":
      return "video";
    case "d":
      return "data";
    default:
      return Ya("No default media ID for unknown type: " + this.Oe), "";
  }
};
d.qy = function(a) {
  var b = this.la();
  b.rD = a;
  return b;
};
d.Of = function() {
  return z(this.ln);
};
d.Im = function(a) {
  var b = this.la();
  b.ln = a;
  return b;
};
d.TV = function(a) {
  null == a && (a = -1);
  var b = this.la();
  null == b.wg && (b.wg = new Mp(-1, -1, -1));
  b.wg.ei = a;
  return b;
};
d.IA = function() {
  return this.wg ? this.wg.ei : null;
};
d.py = function(a) {
  var b = this.la();
  b.wg = a;
  return b;
};
d.xd = function() {
  return this.wg;
};
d.lh = function(a) {
  var b = this.la();
  b.Fc = a;
  return b;
};
d.ce = function() {
  return this.Fc;
};
d.Jm = function(a) {
  var b = this.la();
  b.Kw = a;
  return b;
};
d.fy = function(a, b) {
  var c = this.Kb(), e = Kb(b, function(a) {
    return a.yc();
  });
  yb(c, function(a) {
    return a.yc() in e;
  });
  c = zb(c, a);
  return this.Qd(c);
};
d.Cca = function(a) {
  return this.Bca(function(b) {
    return b.$v(a);
  });
};
d.Bca = function(a) {
  return this.qk(jb(this.ed(), Od(a)));
};
d.qR = function(a, b) {
  return this.pba(function(b) {
    return b.$v(a);
  }, b);
};
d.pba = function(a, b) {
  a = mb(this.te, a);
  if (-1 == a) {
    return this;
  }
  var c = this.ed(), e = c[a];
  null != b && (e = b(e));
  vb(c, a);
  tb(c, 0, 0, e);
  return this.qk(c);
};
d.fJ = function(a) {
  if (null == a) {
    return this;
  }
  var b = this.la(), c = a.IA();
  c && (b = b.TV(c));
  c = a.ed();
  qb(c) || (b = b.qk(c));
  (c = a.rd) && (b = b.vp(c));
  c = a.gl();
  qb(c) || (b = b.gW(c));
  c = a.Of();
  qb(c) || (b = b.Im(c));
  a = cr(this.Kb(), a.Kb(), function(a) {
    return a.yc();
  });
  return b.Qd(a);
};
var cr = function(a, b, c) {
  a = Kb(a, c);
  Zb(a, Kb(b, c));
  return Nb(a);
};
var dr = function(a) {
  this.Xa = w(a.Xa);
  this.ra = a.ra;
  this.ud = $a(a.ud);
  this.um = $a(a.um);
  this.ee = a.ee;
  this.Hf = a.Hf;
  this.Yf = a.Yf;
  this.Dl = a.Dl;
  this.Mc = z(a.Mc);
  this.ap = z(a.ap);
};
d = dr.prototype;
d.toString = function() {
  return "Stream(participantId=" + this.ra + ", mediaType=" + this.Xa + ", sourceId=" + this.ud + ", streamId=" + this.um + ", muted=" + this.ee + ", croppable=" + this.Hf + ", mediaStreamId=" + this.Yf + ", mediaStreamTrackId=" + this.Dl + ", ssrcs=" + this.Mc + ", ssrcGroups=" + this.ap + ")";
};
d.$ = function() {
  return this.Xa;
};
d.D = function() {
  return this.ra;
};
d.Ga = function() {
  return this.ud;
};
d.yc = function() {
  return this.um;
};
d.Mn = function() {
  return this.ee;
};
d.ze = function() {
  return z(this.Mc);
};
d.EN = function() {
  return z(this.ap);
};
d.matches = function(a) {
  return this.D() == a.D() && this.$() == a.$() && this.Ga() == a.Ga() && this.yc() == a.yc();
};
d.q8 = function(a) {
  return this.D() == a.D() && this.$() == a.W() && this.Ga() == a.getId();
};
var er = function(a) {
  this.Xa = a ? a.Xa : null;
  this.ra = a ? a.ra : "";
  this.ud = a ? a.ud : null;
  this.um = a ? a.um : null;
  this.ee = a ? a.ee : !1;
  this.Hf = a ? a.Hf : !0;
  this.Yf = a ? a.Yf : null;
  this.Dl = a ? a.Dl : null;
  this.Mc = a ? z(a.Mc) : [];
  this.ap = a ? z(a.ap) : [];
};
d = er.prototype;
d.ga = function() {
  w(this.Vd());
  return new dr(this);
};
d.Vd = function() {
  return null != this.Xa && null != this.ud && null != this.um;
};
d.kb = function(a) {
  this.Xa = a;
  return this;
};
d.XG = function(a) {
  this.ra = a;
  return this;
};
d.mh = function(a) {
  this.ud = a;
  return this;
};
d.Km = function(a) {
  this.um = a;
  return this;
};
d.dW = function(a) {
  this.ee = a;
  return this;
};
d.$ja = function(a) {
  this.Hf = a;
  return this;
};
d.up = function(a) {
  this.Yf = a;
  return this;
};
d.cW = function(a) {
  this.Dl = a;
  return this;
};
d.qg = function(a) {
  this.Mc = z(a);
  return this;
};
d.Gp = function(a) {
  this.Mc.push(a);
  return this;
};
d.YG = function(a) {
  this.ap = z(a);
  return this;
};
var fr = function(a, b, c, e) {
  this.status = a;
  this.Rk = b;
  this.nl = c;
  this.response = e;
};
fr.prototype.toString = function() {
  var a = "[" + this.status + "/" + this.Rk;
  null != this.nl && (a += "/" + this.nl);
  null != this.response && (a += ": ", a = ua(this.response) ? a + Le(this.response, this.oq, this).join("; ") : a + this.oq(this.response));
  return a + "]";
};
fr.prototype.oq = function(a) {
  if (null != a.error) {
    var b = a.error;
    a = b.message + " " + b.code;
    b = b.data || b.errors;
    null != b && (b = Le(b, function(a) {
      var b = a.domain + " - " + a.reason;
      null != a.debugInfo && (b += " = " + Va(a.debugInfo, "\n", 4).slice(0, 3).join(" - "));
      return b;
    }), Je(b) || (a += ": " + b.join(", ")));
    return a;
  }
  return "Unknown";
};
var gr = function(a, b, c, e) {
  this.status = a;
  this.Rk = b;
  this.nl = c;
  this.response = e;
};
gr.prototype.toString = function() {
  var a = "[" + this.status + "/" + this.Rk;
  null != this.nl && (a += "/" + this.nl);
  null != this.response && null != this.response.bd && (a += ": ", a = ua(this.response.bd) ? a + Le(this.response.bd, this.oq, this).join("; ") : a + this.oq(this.response.bd));
  return a + "]";
};
gr.prototype.oq = function(a) {
  if (null != a.error) {
    var b = a.error;
    a = b.message + " " + b.code;
    b = b.data || b.errors;
    null != b && (b = Le(b, function(a) {
      var b = a.domain + " - " + a.reason;
      null != a.debugInfo && (b += " = " + Va(a.debugInfo, "\n", 4).slice(0, 3).join(" - "));
      return b;
    }), Je(b) || (a += ": " + b.join(", ")));
    return a;
  }
  return "Unknown";
};
var ir = function() {
  this.Xj = new hr;
  this.Op = new yq(1E3, 36E4);
  this.ut = 0;
  this.Xi = 60000;
  this.Rp = !1;
  this.Yy = [];
};
d = ir.prototype;
d.mm = function(a) {
  this.QC = a;
  return this;
};
d.Yk = function() {
  return this.QC || "en";
};
d.zx = function(a) {
  this.fg = a;
  return this;
};
d.qj = function() {
  return this.fg || "";
};
d.Ai = function(a) {
  this.ji = a;
  return this;
};
d.Vc = function() {
  w(null != this.ji);
  return this.ji;
};
d.HK = function() {
  return this.KY || this.Vc();
};
d.nx = function(a) {
  this.lr = a;
  return this;
};
d.Iq = function() {
  w(null != this.lr);
  return this.lr;
};
d.bG = function(a) {
  this.dt = a;
  return this;
};
d.mC = function() {
  return null != this.dt ? this.dt : {};
};
d.vT = function(a) {
  this.Cd = a;
  return this;
};
d.Xk = function() {
  return null != this.Cd ? this.Cd : {};
};
d.bT = function(a) {
  this.Wp = a;
  return this;
};
d.SA = function() {
  return null != this.Wp ? this.Wp : "application/json";
};
d.vs = function(a) {
  this.nz = a;
  return this;
};
d.ck = function(a) {
  this.eg = a;
  return this;
};
d.vq = function() {
  return this.nz;
};
d.Cx = function(a) {
  this.ft = a;
  return this;
};
d.er = function() {
  return null != this.ft ? this.ft : !0;
};
d.Wea = function(a) {
  this.eA = a;
  return this;
};
d.TF = function(a) {
  this.qd = a;
  return this;
};
d.RF = function(a) {
  this.Uj = a;
  return this;
};
d.MB = function() {
  return null != this.Uj ? this.Uj : 0;
};
d.GF = function(a) {
  this.Xi = a;
  return this;
};
d.hz = function() {
  var a = this.Op.zc(), a = Math.min(a, (36E4 - this.ut) / 1.5), a = Math.round(0.5 * a) + Math.floor(Math.random() * a);
  this.Op.Ft();
  w(0 < this.Uj);
  this.Uj--;
  return a + this.ut;
};
d.cancel = function() {
  this.Rp = !0;
  this.ck("c");
};
d.$n = function() {
  return "p" == this.eg;
};
d.toString = function() {
  return "<Request to " + this.HK() + " with payload " + this.vq() + ">";
};
var hr = function() {
};
hr.prototype.ix = function(a) {
  this.yk = a;
  return this;
};
hr.prototype.lx = function(a) {
  this.oA = a;
  return this;
};
hr.prototype.callback = function(a) {
  this.yk(a);
};
hr.prototype.cd = function(a) {
  this.oA(a);
};
M.hash = {};
M.hash.mH = 2654435769;
M.hash.BX = 314159265;
M.hash.sAa = function(a) {
  a = M.hash.Mia(a);
  for (var b = M.hash.mH, c = M.hash.mH, e = M.hash.BX, f = a.length, h = f, k = 0, p = function() {
    b -= c;
    b -= e;
    b ^= e >>> 13;
    c -= e;
    c -= b;
    c ^= b << 8;
    e -= b;
    e -= c;
    e ^= c >>> 13;
    b -= c;
    b -= e;
    b ^= e >>> 12;
    c -= e;
    c -= b;
    c ^= b << 16;
    e -= b;
    e -= c;
    e ^= c >>> 5;
    b -= c;
    b -= e;
    b ^= e >>> 3;
    c -= e;
    c -= b;
    c ^= b << 10;
    e -= b;
    e -= c;
    e ^= c >>> 15;
  };12 <= h;h -= 12, k += 12) {
    b += M.hash.wn(a, k), c += M.hash.wn(a, k + 4), e += M.hash.wn(a, k + 8), p();
  }
  e += f;
  switch(h) {
    case 11:
      e += a[k + 10] << 24;
    case 10:
      e += a[k + 9] << 16;
    case 9:
      e += a[k + 8] << 8;
    case 8:
      c += a[k + 7] << 24;
    case 7:
      c += a[k + 6] << 16;
    case 6:
      c += a[k + 5] << 8;
    case 5:
      c += a[k + 4];
    case 4:
      b += a[k + 3] << 24;
    case 3:
      b += a[k + 2] << 16;
    case 2:
      b += a[k + 1] << 8;
    case 1:
      b += a[k + 0];
  }
  p();
  return M.Ub.toString(e);
};
M.hash.dja = function(a) {
  return a;
};
M.hash.Mia = function(a) {
  for (var b = [], c = 0;c < a.length;c++) {
    b.push(a.charCodeAt(c));
  }
  return b;
};
M.hash.wn = function(a, b) {
  return a[b + 0] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24);
};
new L("tdUkaf");
new L("fJuxOc");
new L("ZtVrH");
new L("WSziFf");
new L("ZmXAm");
new L("BWETze");
new L("UBSgGf");
new L("zZa4xc");
new L("o1bZcd");
new L("yRRtR");
new L("WwG67d");
var jr = new L("pVbxBc"), kr = new L("n73qwf");
new L("z72MOc");
new L("JccZRe");
new L("amY3Td");
new L("ABma3e");
new L("GHAeAc", M.hash.dja("GHAeAc"));
new L("gSshPb");
new L("klpyYe");
new L("OPbIxb");
new L("pg9hFd");
new L("Wt6vjf");
new L("CV7dle");
new L("yu4DA");
new L("vk3Wc");
new L("IykvEf");
new L("J5K1Ad");
new L("IW8Usd");
new L("IaqD3e");
new L("byfTOb");
new L("jbDgG");
new L("b8xKu");
new L("d0RAGb");
new L("AzG0ke");
new L("J4QWB");
new L("LEikZe");
new L("rJmJrc");
new L("TuDsZ");
new L("MpJwZc");
new L("UUJqVe");
new L("hdXIif");
new L("mITR5c");
new L("VYNvce");
new L("NGntwf");
new L("Bgf0ib");
new L("Xpw1of");
new L("v5BQle");
new L("ofuapc");
new L("FENZqe");
new L("tLnxq");
new L("lsjVmc");
var lr = function() {
  Zq(this);
};
qa(lr);
d = lr.prototype;
d.zq = function(a) {
  return this.hc.zq(a);
};
d.Aq = function() {
  return this.hc.Aq();
};
d.ek = function(a) {
  return this.hc.ek(a);
};
d.gk = function(a, b) {
  return this.hc.gk(a, b);
};
d.bf = function(a) {
  return this.hc.bf(a);
};
d.gy = function() {
  return this.hc.gy();
};
var nr = function() {
};
v(nr, Eq);
Fq(nr, lr);
d = nr.prototype;
d.zq = Lq();
d.Aq = Lq();
d.ek = Lq();
d.gk = Lq();
d.bf = Lq();
d.gy = Lq();
var or = function(a) {
  this.nb = a;
  Zq(this);
};
or.prototype.xd = function() {
  var a = new Mp;
  this.hc.xd(a);
  return a;
};
var pr = function() {
};
v(pr, Eq);
Fq(pr, or);
pr.prototype.xd = function(a) {
  a = a ? a : function() {
  };
  a.jQ = !0;
  return a;
}();
var rr = function() {
  this.Xj = new qr;
  this.Op = new yq(1E3, 36E4);
  this.ut = 0;
  this.Xi = 60000;
  this.Rp = !1;
  this.Yy = [];
};
d = rr.prototype;
d.toString = function() {
  return "<# " + this.qd + " to " + this.qj() + " for " + this.Vc() + ">";
};
d.mm = function(a) {
  this.QC = a;
  return this;
};
d.Yk = function() {
  return this.QC || "en";
};
d.zx = function(a) {
  this.fg = a;
  return this;
};
d.qj = function() {
  return this.fg || "";
};
d.Ai = function(a) {
  this.ji = a;
  return this;
};
d.Vc = function() {
  w(null != this.ji);
  return this.ji;
};
d.HK = function() {
  return this.KY || this.Vc();
};
d.nx = function(a) {
  this.lr = a;
  return this;
};
d.Iq = function() {
  w(null != this.lr);
  return this.lr;
};
d.bG = function(a) {
  this.dt = a;
  return this;
};
d.mC = function() {
  return null != this.dt ? this.dt : {};
};
d.vT = function(a) {
  this.Cd = a;
  return this;
};
d.Xk = function() {
  return null != this.Cd ? this.Cd : {};
};
d.bT = function(a) {
  this.Wp = a;
  return this;
};
d.SA = function() {
  return null != this.Wp ? this.Wp : "application/json";
};
d.vs = function(a) {
  this.nz = a;
  return this;
};
d.ck = function(a) {
  this.eg = a;
  return this;
};
d.vq = function() {
  return this.nz;
};
d.Cx = function(a) {
  this.ft = a;
  return this;
};
d.er = function() {
  return null != this.ft ? this.ft : !0;
};
d.TF = function(a) {
  this.qd = a;
  return this;
};
d.RF = function(a) {
  this.Uj = a;
  return this;
};
d.MB = function() {
  return null != this.Uj ? this.Uj : 0;
};
d.GF = function(a) {
  this.Xi = a;
  return this;
};
d.hz = function() {
  var a = this.Op.zc(), a = Math.round(0.5 * a) + Math.floor(Math.random() * a);
  this.Op.Ft();
  w(0 < this.Uj--);
  return Math.min(a + this.ut, 36E4);
};
d.cancel = function() {
  this.Rp = !0;
  this.ck("c");
};
d.$n = function() {
  return "p" == this.eg;
};
var qr = function() {
};
qr.prototype.ix = function(a) {
  this.yk = a;
  return this;
};
qr.prototype.lx = function(a) {
  this.oA = a;
  return this;
};
qr.prototype.callback = function(a) {
  this.yk(a);
};
qr.prototype.cd = function(a) {
  this.oA(a);
};
var sr = function(a, b) {
  $c.call(this);
  this.x0 = a;
  this.eb = b;
  this.aR = [];
  this.yQ = [];
  this.T0 = [];
};
v(sr, $c);
d = sr.prototype;
d.cQ = null;
d.Ru = function() {
  return this.x0;
};
d.getId = function() {
  return this.eb;
};
d.LR = function(a, b) {
  return this.Sw(this.aR, a, b);
};
d.lca = function(a, b) {
  return this.Sw(this.yQ, a, b);
};
d.Sw = function(a, b, c) {
  b = new Wq(b, c);
  a.push(b);
  return b;
};
d.Bv = function() {
  return !!this.cQ;
};
d.onError = function(a) {
  (a = this.IZ(this.yQ, a)) && window.setTimeout(Nd("Module errback failures: " + a), 0);
  this.T0.length = 0;
  this.aR.length = 0;
};
d.IZ = function(a, b) {
  for (var c = [], e = 0;e < a.length;e++) {
    try {
      a[e].execute(b);
    } catch (f) {
      Pd(f), c.push(f);
    }
  }
  a.length = 0;
  return c.length ? c : null;
};
d.aa = function() {
  sr.X.aa.call(this);
  ad(this.cQ);
};
var tr = function() {
};
v(tr, Sp);
tr.prototype.ja = function() {
  var a = 0;
  Ae(this.rg(!0), function(b) {
    $a(b);
    a++;
  });
  return a;
};
tr.prototype.clear = function() {
  var a = De(this.rg(!0)), b = this;
  x(a, function(a) {
    b.remove(a);
  });
};
var ur = function() {
  var a;
  return qc ? (a = /Windows NT ([0-9.]+)/, (a = a.exec($b)) ? a[1] : "0") : pc ? (a = /10[_.][0-9_.]+/, (a = a.exec($b)) ? a[0].replace(/_/g, ".") : "10") : sc ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec($b)) ? a[1] : "") : tc || uc || vc ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec($b)) ? a[1].replace(/_/g, ".") : "") : "";
}();
new H({neon:1, sse2:2, ssse3:4, sse4_1:8, sse4_2:16, avx:32});
new L("bBNFlf", "bm");
var vr = new L("FolmWb", "dlh"), wr = new L("Mv4R6b", "dds"), xr = new L("EitxU", "hl", [wr]), yr = new L("T3bcCc", void 0, [xr]), zr = new L("TjR1Nb", "ma", [kr]);
var Ar = function(a, b, c, e, f, h, k) {
  this.wa = a || null;
  this.sa = b || null;
  this.gu = c || null;
  this.H = l(e) ? e : null;
  this.Bo = new H;
  this.Bo.addAll(Kb(f || [], function(a) {
    return a.Ph();
  }, this));
  this.Pd = h || null;
  this.aq = k || [];
}, Br = function(a, b) {
  var c = a.sa;
  if (!c) {
    return a;
  }
  b = jb(c.ed(), b);
  var e = y(b, function(a) {
    return a.od.toString();
  });
  b = jb(b, function(a) {
    return !a.$v("rtx") || pb(e, a.getParam("apt"));
  });
  return a.Se(c.qk(b));
};
d = Ar.prototype;
d.na = function() {
  return {sessionId:this.K(), audio:this.wa && this.wa.na(), video:this.sa && this.sa.na(), data:this.getData() && this.getData().na(), pushChannels:this.Ku() && this.Ku().toString(), cryptos:this.hj()};
};
d.la = function() {
  var a = Vb(this);
  a.Bo = this.Bo.clone();
  return a;
};
d.Bf = function(a) {
  var b = this.la();
  b.wa = a;
  return b;
};
d.Se = function(a) {
  var b = this.la();
  b.sa = a;
  return b;
};
d.getData = function() {
  return this.gu;
};
d.Cf = function(a) {
  var b = this.la();
  b.gu = a;
  return b;
};
d.K = function() {
  return this.H;
};
d.lc = function() {
  return this.Pd;
};
d.kt = function(a) {
  var b = this.la();
  b.Pd = a;
  return b;
};
d.fN = function(a) {
  return this.Bo.get(a || "collections");
};
d.Ku = function() {
  return this.Bo.T();
};
d.eW = function(a) {
  w(!Ha(a.Ph()));
  var b = this.la();
  b.Bo.set(a.Ph(), a);
  return b;
};
d.hj = function() {
  return z(this.aq);
};
d.UV = function(a) {
  var b = this.la();
  b.aq = a;
  return b;
};
d.fy = function(a, b) {
  var c = this.la();
  c.wa = c.GG(c.wa, a, b);
  c.sa = c.GG(c.sa, a, b);
  c.gu = c.GG(c.gu, a, b);
  return c;
};
d.GG = function(a, b, c) {
  if (null == a) {
    return null;
  }
  b = jb(b, function(b) {
    return b.$() == a.W();
  });
  c = jb(c, function(b) {
    return b.$() == a.W();
  });
  return a.fy(b, c);
};
d.L8 = function(a) {
  var b = this.wa, b = null != b ? b.fJ(a.wa) : a.wa, c = this.sa, c = null != c ? c.fJ(a.sa) : a.sa;
  return this.Bf(b).Se(c);
};
d.K6 = function() {
  var a = 0 != this.hj().length, b = !1, c = this.lc();
  c && null != c.xe() && (b = 2 == c.xe().split(" ").length);
  return a != b;
};
var Cr = function() {
  this.XP = new H;
  this.WP = new H;
  this.oJ = new H;
};
d = Cr.prototype;
d.clear = function() {
  this.XP.clear();
  this.WP.clear();
  this.oJ.clear();
};
d.zja = function(a, b, c) {
  var e = a.ssrc;
  if (null == e) {
    return null;
  }
  if (c) {
    return c = this.ZF(this.XP, e, t(this.hQ, this, c)), c.update(b, a.bytesSent, a.packetsSent, a.packetsLost);
  }
  c = this.ZF(this.WP, e, t(this.hQ, this, c));
  return c.update(b, a.bytesReceived, a.packetsReceived, a.packetsLost);
};
d.sja = function(a, b) {
  if ("false" == a.googActiveConnection) {
    return null;
  }
  var c = a.googLocalAddress + a.googRemoteAddress;
  return null != c ? this.ZF(this.oJ, c, t(this.h9, this)).update(b, a.bytesSent, a.bytesReceived) : null;
};
d.ZF = function(a, b, c) {
  var e = a.get(b);
  null == e && (e = c(), a.set(b, e));
  return e;
};
d.hQ = function(a) {
  return new Dr(a);
};
d.h9 = function() {
  return new Er;
};
var Dr = function(a) {
  this.$h = -1;
  this.uP = this.vP = this.tP = 0;
  this.D7 = a;
};
Dr.prototype.update = function(a, b, c, e) {
  var f = null;
  if (q(a) && q(b) && q(c) && q(e)) {
    if (a > this.$h) {
      var h = c - this.vP, f = e - this.uP, h = this.D7 ? h : h + f, f = 0 < h ? Math.round(100 * f / h) : -1, h = -1;
      if (0 <= this.$h) {
        var h = a - this.$h, k = b - this.tP, h = 0 < k ? Math.round(8 * k / h) : 0;
      }
      f = {uI:h, p8:f};
    }
    this.$h = a;
    this.tP = b;
    this.vP = c;
    this.uP = e;
  }
  return f;
};
var Er = function() {
  this.$h = -1;
  this.rP = this.sP = 0;
};
Er.prototype.update = function(a, b, c) {
  var e = null;
  if (q(a) && q(b) && q(c)) {
    if (0 <= this.$h && a > this.$h) {
      var e = a - this.$h, f = b - this.sP, h = c - this.rP, e = {Sda:0 < f ? Math.round(f / e) : 0, cca:0 < h ? Math.round(h / e) : 0};
    }
    this.$h = a;
    this.sP = b;
    this.rP = c;
  }
  return e;
};
var Fr = function(a, b, c, e) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = e;
};
Fr.prototype.clone = function() {
  return new Fr(this.left, this.top, this.width, this.height);
};
Fr.prototype.toString = function() {
  return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)";
};
var Gr = function(a, b) {
  return a == b ? !0 : a && b ? a.left == b.left && a.width == b.width && a.top == b.top && a.height == b.height : !1;
};
d = Fr.prototype;
d.contains = function(a) {
  return this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height;
};
d.getSize = function() {
  return new Yi(this.width, this.height);
};
d.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
d.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
d.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
d.translate = function(a, b) {
  this.left += Za(a);
  q(b) && (this.top += b);
  return this;
};
d.scale = function(a, b) {
  b = q(b) ? b : a;
  this.left *= a;
  this.width *= a;
  this.top *= b;
  this.height *= b;
  return this;
};
var Hr = function(a) {
  this.rb = a;
};
v(Hr, tr);
d = Hr.prototype;
d.isAvailable = function() {
  if (!this.rb) {
    return !1;
  }
  try {
    return this.rb.setItem("__sak", "1"), this.rb.removeItem("__sak"), !0;
  } catch (a) {
    return !1;
  }
};
d.set = function(a, b) {
  try {
    this.rb.setItem(a, b);
  } catch (c) {
    if (0 == this.rb.length) {
      throw "Storage mechanism: Storage disabled";
    }
    throw "Storage mechanism: Quota exceeded";
  }
};
d.get = function(a) {
  a = this.rb.getItem(a);
  if (!n(a) && null !== a) {
    throw "Storage mechanism: Invalid value was encountered";
  }
  return a;
};
d.remove = function(a) {
  this.rb.removeItem(a);
};
d.ja = function() {
  return this.rb.length;
};
d.rg = function(a) {
  var b = 0, c = this.rb, e = new ye;
  e.next = function() {
    if (b >= c.length) {
      throw xe;
    }
    var e = $a(c.key(b++));
    if (a) {
      return e;
    }
    e = c.getItem(e);
    if (!n(e)) {
      throw "Storage mechanism: Invalid value was encountered";
    }
    return e;
  };
  return e;
};
d.clear = function() {
  this.rb.clear();
};
d.key = function(a) {
  return this.rb.key(a);
};
var Ir = function(a, b) {
  this.yK = new Ne;
  this.Vl = a || 2;
  this.Co = b || 4294967295;
  this.Vl = Math.max(this.Vl, 2);
  this.Co = Math.min(this.Co, 4294967295);
  this.Vl > this.Co && (this.Vl = 2, this.Co = 4294967295);
};
Ir.prototype.f0 = function() {
  for (var a = this.Co - this.Vl + 1, b = Math.floor(this.Vl + a * Math.random()), c = 0;this.yK.contains(b);) {
    if (b < this.Co ? ++b : b = this.Vl, ++c >= a) {
      return null;
    }
  }
  this.yK.add(b);
  return b;
};
var Jr = 0, Kr = 0, Lr = function(a) {
  var b = 0 > a;
  a = Math.abs(a);
  var c = a >>> 0;
  a = Math.floor((a - c) / 4294967296);
  a >>>= 0;
  b && (a = ~a >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a++, 4294967295 < a && (a = 0)));
  Jr = c;
  Kr = a;
}, Mr = function(a, b) {
  var c = b & 2147483648;
  c && (a = ~a + 1 >>> 0, b = ~b >>> 0, 0 == a && (b = b + 1 >>> 0));
  a = 4294967296 * b + a;
  return c ? -a : a;
}, Nr = function(a) {
  if (a.constructor === Uint8Array) {
    return a;
  }
  if (a.constructor === ArrayBuffer) {
    return new Uint8Array(a);
  }
  if (a.constructor === Array) {
    return new Uint8Array(a);
  }
  if (a.constructor === String) {
    return Wj(a);
  }
  Ya("Type not convertible to Uint8Array.");
  return new Uint8Array(0);
};
var N = function() {
}, Or = "function" == typeof Uint8Array;
N.prototype.x3 = function() {
  return this.iw;
};
var O = function(a, b, c, e, f, h) {
  a.Za = null;
  b || (b = c ? [c] : []);
  a.iw = c ? String(c) : void 0;
  a.Bt = 0 === c ? -1 : 0;
  a.ug = b;
  a: {
    if (a.ug.length && (b = a.ug.length - 1, (c = a.ug[b]) && "object" == typeof c && !ta(c) && !(Or && c instanceof Uint8Array))) {
      a.Vr = b - a.Bt;
      a.Lf = c;
      break a;
    }
    -1 < e ? (a.Vr = e, a.Lf = null) : a.Vr = Number.MAX_VALUE;
  }
  a.Dra = {};
  if (f) {
    for (e = 0;e < f.length;e++) {
      b = f[e], b < a.Vr ? (b += a.Bt, a.ug[b] = a.ug[b] || Pr) : a.Lf[b] = a.Lf[b] || Pr;
    }
  }
  h && h.length && x(h, Ba(Qr, a));
}, Pr = Object.freeze ? Object.freeze([]) : [], P = function(a, b, c) {
  for (var e = [], f = 0;f < a.length;f++) {
    e[f] = b.call(a[f], c, a[f]);
  }
  return e;
}, Q = function(a, b) {
  if (b < a.Vr) {
    b += a.Bt;
    var c = a.ug[b];
    return c === Pr ? a.ug[b] = [] : c;
  }
  c = a.Lf[b];
  return c === Pr ? a.Lf[b] = [] : c;
}, Rr = function(a, b) {
  a = Q(a, b);
  return null == a ? a : +a;
}, Sr = function(a) {
  if (null == a || n(a)) {
    return a;
  }
  if (Or && a instanceof Uint8Array) {
    return Tj(a);
  }
  Ya("Cannot coerce to b64 string: " + ra(a));
  return null;
}, R = function(a, b, c) {
  a = Q(a, b);
  return null == a ? c : a;
}, S = function(a, b, c) {
  b < a.Vr ? a.ug[b + a.Bt] = c : a.Lf[b] = c;
}, Tr = function(a, b, c, e) {
  a = Q(a, b);
  void 0 != e ? a.splice(e, 0, c) : a.push(c);
}, Qr = function(a, b) {
  var c, e;
  x(b, function(b) {
    var f = Q(a, b);
    null != f && (c = b, e = f, S(a, b, void 0));
  });
  return c ? (S(a, c, e), c) : 0;
}, T = function(a, b, c, e) {
  a.Za || (a.Za = {});
  if (!a.Za[c]) {
    var f = Q(a, c);
    if (e || f) {
      a.Za[c] = new b(f);
    }
  }
  return a.Za[c];
}, U = function(a, b, c) {
  Ur(a, b, c);
  b = a.Za[c];
  b == Pr && (b = a.Za[c] = []);
  return b;
}, Ur = function(a, b, c) {
  a.Za || (a.Za = {});
  if (!a.Za[c]) {
    for (var e = Q(a, c), f = [], h = 0;h < e.length;h++) {
      f[h] = new b(e[h]);
    }
    a.Za[c] = f;
  }
}, V = function(a, b, c) {
  a.Za || (a.Za = {});
  var e = c ? c.Af() : c;
  a.Za[b] = c;
  S(a, b, e);
}, Vr = function(a, b, c) {
  a.Za || (a.Za = {});
  c = c || [];
  for (var e = [], f = 0;f < c.length;f++) {
    e[f] = c[f].Af();
  }
  a.Za[b] = c;
  S(a, b, e);
}, Wr = function(a, b, c, e, f) {
  Ur(a, e, b);
  var h = a.Za[b];
  h || (h = a.Za[b] = []);
  c = c ? c : new e;
  a = Q(a, b);
  void 0 != f ? (h.splice(f, 0, c), a.splice(f, 0, c.Af())) : (h.push(c), a.push(c.Af()));
  return c;
};
N.prototype.SU = function() {
  if (this.Za) {
    for (var a in this.Za) {
      var b = this.Za[a];
      if (ta(b)) {
        for (var c = 0;c < b.length;c++) {
          b[c] && b[c].Af();
        }
      } else {
        b && b.Af();
      }
    }
  }
};
N.prototype.Af = function() {
  this.SU();
  return this.ug;
};
var Xr = g.JSON && g.JSON.stringify || "object" === typeof JSON && JSON.stringify;
N.prototype.Ua = Or ? function() {
  w(Xr);
  var a = Uint8Array.prototype.toJSON;
  Uint8Array.prototype.toJSON = function() {
    return Tj(this);
  };
  try {
    var b = Xr.call(null, this.Af(), Yr);
  } finally {
    Uint8Array.prototype.toJSON = a;
  }
  return b;
} : Xr ? function() {
  return Xr.call(null, this.Af(), Yr);
} : function() {
  return tf(this.Af(), Yr);
};
var Yr = function(a, b) {
  if (q(b)) {
    if (isNaN(b)) {
      return "NaN";
    }
    if (Infinity === b) {
      return "Infinity";
    }
    if (-Infinity === b) {
      return "-Infinity";
    }
  }
  return b;
};
N.prototype.toString = function() {
  this.SU();
  return this.ug.toString();
};
N.prototype.getExtension = function(a) {
  if (this.Lf) {
    this.Za || (this.Za = {});
    var b = a.iK;
    if (a.y7) {
      if (a.TO()) {
        return this.Za[b] || (this.Za[b] = y(this.Lf[b] || [], function(b) {
          return new a.k0(b);
        })), this.Za[b];
      }
    } else {
      if (a.TO()) {
        return !this.Za[b] && this.Lf[b] && (this.Za[b] = new a.k0(this.Lf[b])), this.Za[b];
      }
    }
    return this.Lf[b];
  }
};
var $r = function(a, b) {
  return a == b || !(!a || !b) && a instanceof b.constructor && Zr(a.Af(), b.Af());
}, as = function(a, b) {
  a = a || {};
  b = b || {};
  var c = {}, e;
  for (e in a) {
    c[e] = 0;
  }
  for (e in b) {
    c[e] = 0;
  }
  for (e in c) {
    if (!Zr(a[e], b[e])) {
      return !1;
    }
  }
  return !0;
}, Zr = function(a, b) {
  if (a == b) {
    return !0;
  }
  if (!wa(a) || !wa(b) || a.constructor != b.constructor) {
    return !1;
  }
  if (Or && a.constructor === Uint8Array) {
    if (a.length != b.length) {
      return !1;
    }
    for (var c = 0;c < a.length;c++) {
      if (a[c] != b[c]) {
        return !1;
      }
    }
    return !0;
  }
  if (a.constructor === Array) {
    for (var e = void 0, f = void 0, h = Math.max(a.length, b.length), c = 0;c < h;c++) {
      var k = a[c], p = b[c];
      k && k.constructor == Object && (w(void 0 === e), w(c === a.length - 1), e = k, k = void 0);
      p && p.constructor == Object && (w(void 0 === f), w(c === b.length - 1), f = p, p = void 0);
      if (!Zr(k, p)) {
        return !1;
      }
    }
    return e || f ? (e = e || {}, f = f || {}, as(e, f)) : !0;
  }
  if (a.constructor === Object) {
    return as(a, b);
  }
  throw Error("Invalid type in JSPB array");
};
N.prototype.an = function() {
  return bs(this);
};
N.prototype.clone = function() {
  return bs(this);
};
var bs = function(a) {
  return new a.constructor(cs(a.Af()));
}, cs = function(a) {
  var b;
  if (ta(a)) {
    for (var c = Array(a.length), e = 0;e < a.length;e++) {
      null != (b = a[e]) && (c[e] = "object" == typeof b ? cs(b) : b);
    }
    return c;
  }
  if (Or && a instanceof Uint8Array) {
    return new Uint8Array(a);
  }
  c = {};
  for (e in a) {
    null != (b = a[e]) && (c[e] = "object" == typeof b ? cs(b) : b);
  }
  return c;
}, es = function(a, b) {
  ds[a] = b;
  b.messageId = a;
}, ds = {};
var fs = function(a) {
  var b = g.navigator || null;
  if (qi && null != b.webkitGetUserMedia) {
    var c = G();
    b.webkitGetUserMedia(a, c.resolve, c.reject);
    return c.promise;
  }
  return mi && b.mediaDevices && b.mediaDevices.getUserMedia ? ie(b.mediaDevices.getUserMedia(a)) : je("Missing getUserMedia API.");
};
var gs = function() {
  this.Sc = !1;
  this.Qb = G();
  this.Pe = null;
};
gs.prototype.then = function(a, b, c) {
  return this.Qb.promise.then(a, b, c);
};
be(gs);
gs.prototype.get = function() {
  return this.Pe;
};
var hs = function() {
  this.provider = new gs;
};
hs.prototype.resolve = function(a) {
  this.provider.Sc || (this.provider.Sc = !0, this.provider.Pe = a, this.provider.Qb.resolve(a));
};
hs.prototype.reject = function(a) {
  this.provider.Sc || (this.provider.Sc = !0, this.provider.Qb.reject(a));
};
var is = function() {
  var a = null;
  try {
    a = window.localStorage || null;
  } catch (b) {
  }
  this.rb = a;
};
v(is, Hr);
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var js = function(a, b) {
  this.cx = [];
  this.sQ = a;
  this.GJ = b || null;
  this.gr = this.Sc = !1;
  this.vi = void 0;
  this.kG = this.vI = this.mz = !1;
  this.dy = 0;
  this.qc = null;
  this.Kt = 0;
};
d = js.prototype;
d.cancel = function(a) {
  if (this.Sc) {
    this.vi instanceof js && this.vi.cancel();
  } else {
    if (this.qc) {
      var b = this.qc;
      delete this.qc;
      a ? b.cancel(a) : b.XY();
    }
    this.sQ ? this.sQ.call(this.GJ, this) : this.kG = !0;
    this.Sc || this.cd(new ks(this));
  }
};
d.XY = function() {
  this.Kt--;
  0 >= this.Kt && this.cancel();
};
d.qJ = function(a, b) {
  this.mz = !1;
  this.HG(a, b);
};
d.HG = function(a, b) {
  this.Sc = !0;
  this.vi = b;
  this.gr = !a;
  this.qK();
};
d.SI = function() {
  if (this.Sc) {
    if (!this.kG) {
      throw new ls(this);
    }
    this.kG = !1;
  }
};
d.callback = function(a) {
  this.SI();
  this.kI(a);
  this.HG(!0, a);
};
d.cd = function(a) {
  this.SI();
  this.kI(a);
  this.HG(!1, a);
};
d.kI = function(a) {
  w(!(a instanceof js), "An execution sequence may not be initiated with a blocking Deferred.");
};
d.lb = function(a, b) {
  return this.sk(a, null, b);
};
d.rt = function(a, b) {
  return this.sk(null, a, b);
};
d.dY = function(a, b) {
  return this.sk(a, a, b);
};
d.sk = function(a, b, c) {
  w(!this.vI, "Blocking Deferreds can not be re-used");
  this.cx.push([a, b, c]);
  this.Sc && this.qK();
  return this;
};
d.then = function(a, b, c) {
  var e, f, h = new ee(function(a, b) {
    e = a;
    f = b;
  });
  this.sk(e, function(a) {
    a instanceof ks ? h.cancel() : f(a);
  });
  return h.then(a, b, c);
};
be(js);
d = js.prototype;
d.LI = function(a) {
  this.sk(a.callback, a.cd, a);
  return this;
};
d.qI = function(a) {
  return a instanceof js ? this.lb(t(a.Jt, a)) : this.lb(function() {
    return a;
  });
};
d.Jt = function(a) {
  var b = new js;
  this.LI(b);
  a && (b.qc = this, this.Kt++);
  return b;
};
d.o7 = function(a) {
  return a instanceof Error;
};
d.tO = function() {
  return kb(this.cx, function(a) {
    return va(a[1]);
  });
};
d.qK = function() {
  if (this.dy && this.Sc && this.tO()) {
    var a = this.dy, b = ms[a];
    b && (b.Vca(), delete ms[a]);
    this.dy = 0;
  }
  this.qc && (this.qc.Kt--, delete this.qc);
  for (var a = this.vi, c = b = !1;this.cx.length && !this.mz;) {
    var e = this.cx.shift(), f = e[0], h = e[1], e = e[2];
    if (f = this.gr ? h : f) {
      try {
        var k = f.call(e || this.GJ, a);
        l(k) && (this.gr = this.gr && (k == a || this.o7(k)), this.vi = a = k);
        if (ce(a) || "function" === typeof g.Promise && a instanceof g.Promise) {
          this.mz = c = !0;
        }
      } catch (p) {
        a = p, this.gr = !0, this.tO() || (b = !0);
      }
    }
  }
  this.vi = a;
  c && (k = t(this.qJ, this, !0), c = t(this.qJ, this, !1), a instanceof js ? (a.sk(k, c), a.vI = !0) : a.then(k, c));
  b && (a = new ns(a), ms[a.eb] = a, this.dy = a.eb);
};
var os = function(a) {
  var b = new js;
  b.callback(a);
  return b;
}, ps = function(a) {
  var b = new js;
  b.cd(a);
  return b;
}, ls = function() {
  Ca.call(this);
};
v(ls, Ca);
ls.prototype.message = "Deferred has already fired";
ls.prototype.name = "AlreadyCalledError";
var ks = function() {
  Ca.call(this);
};
v(ks, Ca);
ks.prototype.message = "Deferred was canceled";
ks.prototype.name = "CanceledError";
var ns = function(a) {
  this.eb = g.setTimeout(t(this.Zia, this), 0);
  this.$d = a;
};
ns.prototype.Zia = function() {
  w(ms[this.eb], "Cannot throw an error that is not scheduled.");
  delete ms[this.eb];
  throw this.$d;
};
ns.prototype.Vca = function() {
  g.clearTimeout(this.eb);
};
var ms = {};
var qs = function() {
};
la(qs, nr);
qs.prototype.zq = function(a) {
  var b = new js;
  chrome.system.cpu.getInfo(function(a) {
    b.callback(a);
  });
  return b.lb(function(b) {
    a(b);
  });
};
qs.prototype.Aq = function() {
  function a(a) {
    vh(10);
    if (void 0 == c) {
      Ih("mr.mirror.hangouts.HangoutsService").then(function(a) {
        if (a = a.$a) {
          a = a.pb.mediaSource, -1 != a.indexOf(":tab:") && (a = a.split(":"), chrome.processes.getProcessIdForTab(parseInt(a[a.length - 1], 10), function(a) {
            chrome.runtime.lastError || (c = a);
          }));
        }
      });
    } else {
      var e = a[c];
      if (e) {
        var h = 0, k = 0, p = 0, r;
        for (r in a) {
          var A = a[r];
          "browser" == A.type ? k = A.cpu : "gpu" == A.type ? p = A.cpu : "extension" == A.type && A.title == chrome.runtime.getManifest().name && (h = A.cpu);
        }
        b({tabCpuUsage:e.cpu, browserCpuUsage:k, gpuCpuUsage:p, pluginCpuUsage:h});
      }
    }
  }
  if (!chrome.processes) {
    return null;
  }
  var b = pa, c;
  return {onMessage:{addListener:function(c) {
    w(b == pa);
    b = c;
    chrome.processes.onUpdated.addListener(a);
  }}, disconnect:function() {
    chrome.processes.onUpdated.removeListener(a);
    b = pa;
  }};
};
Gq(qs, nr, 2);
var rs = function(a) {
  this.qs = a;
};
rs.prototype.onError = function(a, b) {
  401 == b.nl && this.qs(new Uh("REFRESH_AUTH"));
};
rs.prototype.onRequest = pa;
rs.prototype.UQ = pa;
var ss = function(a, b, c) {
  this.Zb = null;
  this.Vx = this.Wx = this.P = this.Rc = this.tm = 0;
  this.$d = !1;
  a && this.hx(a, b, c);
}, ts = [], us = function(a, b, c) {
  if (ts.length) {
    var e = ts.pop();
    a && e.hx(a, b, c);
    return e;
  }
  return new ss(a, b, c);
};
d = ss.prototype;
d.clone = function() {
  return us(this.Zb, this.tm, this.Rc - this.tm);
};
d.clear = function() {
  this.Zb = null;
  this.P = this.Rc = this.tm = 0;
  this.$d = !1;
};
d.hx = function(a, b, c) {
  this.Zb = Nr(a);
  this.tm = l(b) ? b : 0;
  this.Rc = l(c) ? this.tm + c : this.Zb.length;
  this.P = this.tm;
};
d.setEnd = function(a) {
  this.Rc = a;
};
d.reset = function() {
  this.P = this.tm;
};
d.Cq = function() {
  return this.P;
};
d.Rea = function(a) {
  this.P = a;
};
d.advance = function(a) {
  this.P += a;
  w(this.P <= this.Rc);
};
d.QY = function() {
  return this.P == this.Rc;
};
d.getError = function() {
  return this.$d || 0 > this.P || this.P > this.Rc;
};
d.Uba = function() {
  for (var a, b = 0, c, e = 0;4 > e;e++) {
    if (a = this.Zb[this.P++], b |= (a & 127) << 7 * e, 128 > a) {
      this.Wx = b >>> 0;
      this.Vx = 0;
      return;
    }
  }
  a = this.Zb[this.P++];
  b |= (a & 127) << 28;
  c = 0 | (a & 127) >> 4;
  if (128 > a) {
    this.Wx = b >>> 0, this.Vx = c >>> 0;
  } else {
    for (e = 0;5 > e;e++) {
      if (a = this.Zb[this.P++], c |= (a & 127) << 7 * e + 3, 128 > a) {
        this.Wx = b >>> 0;
        this.Vx = c >>> 0;
        return;
      }
    }
    Ya("Failed to read varint, encoding is invalid.");
    this.$d = !0;
  }
};
d.nia = function() {
  for (;this.Zb[this.P] & 128;) {
    this.P++;
  }
  this.P++;
};
d.ni = function() {
  var a, b = this.Zb;
  a = b[this.P + 0];
  var c = a & 127;
  if (128 > a) {
    return this.P += 1, w(this.P <= this.Rc), c;
  }
  a = b[this.P + 1];
  c |= (a & 127) << 7;
  if (128 > a) {
    return this.P += 2, w(this.P <= this.Rc), c;
  }
  a = b[this.P + 2];
  c |= (a & 127) << 14;
  if (128 > a) {
    return this.P += 3, w(this.P <= this.Rc), c;
  }
  a = b[this.P + 3];
  c |= (a & 127) << 21;
  if (128 > a) {
    return this.P += 4, w(this.P <= this.Rc), c;
  }
  a = b[this.P + 4];
  c |= (a & 15) << 28;
  if (128 > a) {
    return w(0 == (a & 240)), this.P += 5, w(this.P <= this.Rc), c >>> 0;
  }
  w(240 == (a & 240));
  w(255 == b[this.P + 5]);
  w(255 == b[this.P + 6]);
  w(255 == b[this.P + 7]);
  w(255 == b[this.P + 8]);
  w(1 == b[this.P + 9]);
  this.P += 10;
  w(this.P <= this.Rc);
  return c;
};
d.BR = ss.prototype.ni;
d.CR = function() {
  this.Uba();
  return Mr(this.Wx, this.Vx);
};
d.EE = function() {
  var a = this.Zb[this.P + 0], b = this.Zb[this.P + 1], c = this.Zb[this.P + 2], e = this.Zb[this.P + 3];
  this.P += 4;
  w(this.P <= this.Rc);
  return (a << 0 | b << 8 | c << 16 | e << 24) >>> 0;
};
d.DE = function() {
  var a = this.Zb[this.P + 0], b = this.Zb[this.P + 1], c = this.Zb[this.P + 2], e = this.Zb[this.P + 3];
  this.P += 4;
  w(this.P <= this.Rc);
  return a << 0 | b << 8 | c << 16 | e << 24;
};
d.zR = function() {
  var a = this.EE(), b = this.EE();
  return Mr(a, b);
};
d.$r = function() {
  return !!this.Zb[this.P++];
};
d.Zg = function() {
  return this.BR();
};
d.Ta = function(a) {
  var b = this.Zb, c = this.P;
  a = c + a;
  for (var e = [], f = "";c < a;) {
    var h = b[c++];
    if (128 > h) {
      e.push(h);
    } else {
      if (192 > h) {
        continue;
      } else {
        if (224 > h) {
          var k = b[c++];
          e.push((h & 31) << 6 | k & 63);
        } else {
          if (240 > h) {
            var k = b[c++], p = b[c++];
            e.push((h & 15) << 12 | (k & 63) << 6 | p & 63);
          } else {
            if (248 > h) {
              var k = b[c++], p = b[c++], r = b[c++], h = (h & 7) << 18 | (k & 63) << 12 | (p & 63) << 6 | r & 63, h = h - 65536;
              e.push((h >> 10 & 1023) + 55296, (h & 1023) + 56320);
            }
          }
        }
      }
    }
    8192 <= e.length && (f += String.fromCharCode.apply(null, e), e.length = 0);
  }
  f += String.fromCharCode.apply(null, e);
  this.P = c;
  return f;
};
d.CE = function(a) {
  if (0 > a || this.P + a > this.Zb.length) {
    return this.$d = !0, Ya("Invalid byte length!"), new Uint8Array(0);
  }
  var b = this.Zb.subarray(this.P, this.P + a);
  this.P += a;
  w(this.P <= this.Rc);
  return b;
};
var vs = function() {
  this.ia = [];
};
d = vs.prototype;
d.length = function() {
  return this.ia.length;
};
d.end = function() {
  var a = this.ia;
  this.ia = [];
  return a;
};
d.dH = function(a, b) {
  w(a == Math.floor(a));
  w(b == Math.floor(b));
  w(0 <= a && 4294967296 > a);
  for (w(0 <= b && 4294967296 > b);0 < b || 127 < a;) {
    this.ia.push(a & 127 | 128), a = (a >>> 7 | b << 25) >>> 0, b >>>= 7;
  }
  this.ia.push(a);
};
d.ska = function(a, b) {
  w(a == Math.floor(a));
  w(b == Math.floor(b));
  w(0 <= a && 4294967296 > a);
  w(0 <= b && 4294967296 > b);
  this.Rd(a);
  this.Rd(b);
};
d.vy = function(a) {
  w(a == Math.floor(a));
  for (w(0 <= a && 4294967296 > a);127 < a;) {
    this.ia.push(a & 127 | 128), a >>>= 7;
  }
  this.ia.push(a);
};
d.cH = function(a) {
  w(a == Math.floor(a));
  w(-2147483648 <= a && 2147483648 > a);
  if (0 <= a) {
    this.vy(a);
  } else {
    for (var b = 0;9 > b;b++) {
      this.ia.push(a & 127 | 128), a >>= 7;
    }
    this.ia.push(1);
  }
};
d.tka = function(a) {
  w(a == Math.floor(a));
  w(0 <= a && 18446744073709551616 > a);
  Lr(a);
  this.dH(Jr, Kr);
};
d.qka = function(a) {
  w(a == Math.floor(a));
  w(-9223372036854775808 <= a && 9223372036854775808 > a);
  Lr(a);
  this.dH(Jr, Kr);
};
d.Rd = function(a) {
  w(a == Math.floor(a));
  w(0 <= a && 4294967296 > a);
  this.ia.push(a >>> 0 & 255);
  this.ia.push(a >>> 8 & 255);
  this.ia.push(a >>> 16 & 255);
  this.ia.push(a >>> 24 & 255);
};
d.nh = function(a) {
  w(a == Math.floor(a));
  w(0 <= a && 18446744073709551616 > a);
  var b = a >>> 0;
  a = Math.floor((a - b) / 4294967296) >>> 0;
  Jr = b;
  Kr = a;
  this.Rd(Jr);
  this.Rd(Kr);
};
d.s = function(a) {
  w(a == Math.floor(a));
  w(-2147483648 <= a && 2147483648 > a);
  this.ia.push(a >>> 0 & 255);
  this.ia.push(a >>> 8 & 255);
  this.ia.push(a >>> 16 & 255);
  this.ia.push(a >>> 24 & 255);
};
d.ha = function(a) {
  w(a == Math.floor(a));
  w(-9223372036854775808 <= a && 9223372036854775808 > a);
  Lr(a);
  this.ska(Jr, Kr);
};
d.Ib = function(a) {
  w(-3.4028234663852886E38 <= a && 3.4028234663852886e+38 >= a);
  var b = a, b = (a = 0 > b ? 1 : 0) ? -b : b, c;
  0 === b ? 0 < 1 / b ? Jr = Kr = 0 : (Kr = 0, Jr = 2147483648) : isNaN(b) ? (Kr = 0, Jr = 2147483647) : 3.4028234663852886e+38 < b ? (Kr = 0, Jr = (a << 31 | 2139095040) >>> 0) : 1.1754943508222875e-38 > b ? (b = Math.round(b / Math.pow(2, -149)), Kr = 0, Jr = (a << 31 | b) >>> 0) : (c = Math.floor(Math.log(b) / Math.LN2), b *= Math.pow(2, -c), b = Math.round(8388608 * b) & 8388607, Kr = 0, Jr = (a << 31 | c + 127 << 23 | b) >>> 0);
  this.Rd(Jr);
};
d.aH = function(a) {
  w(-1.7976931348623157E308 <= a && 1.7976931348623157e+308 >= a);
  var b = a, b = (a = 0 > b ? 1 : 0) ? -b : b;
  if (0 === b) {
    Kr = 0 < 1 / b ? 0 : 2147483648, Jr = 0;
  } else {
    if (isNaN(b)) {
      Kr = 2147483647, Jr = 4294967295;
    } else {
      if (1.7976931348623157e+308 < b) {
        Kr = (a << 31 | 2146435072) >>> 0, Jr = 0;
      } else {
        if (2.2250738585072014e-308 > b) {
          b /= Math.pow(2, -1074), Kr = (a << 31 | b / 4294967296) >>> 0, Jr = b >>> 0;
        } else {
          var c = Math.floor(Math.log(b) / Math.LN2);
          1024 == c && (c = 1023);
          b *= Math.pow(2, -c);
          Kr = (a << 31 | c + 1023 << 20 | 1048576 * b & 1048575) >>> 0;
          Jr = 4503599627370496 * b >>> 0;
        }
      }
    }
  }
  this.Rd(Jr);
  this.Rd(Kr);
};
d.Z = function(a) {
  w("boolean" == typeof a);
  this.ia.push(a ? 1 : 0);
};
d.A = function(a) {
  w(a == Math.floor(a));
  w(-2147483648 <= a && 2147483648 > a);
  this.cH(a);
};
d.wp = function(a) {
  this.ia.push.apply(this.ia, a);
};
d.f = function(a) {
  for (var b = this.ia.length, c = 0;c < a.length;c++) {
    var e = a.charCodeAt(c);
    if (128 > e) {
      this.ia.push(e);
    } else {
      if (2048 > e) {
        this.ia.push(e >> 6 | 192), this.ia.push(e & 63 | 128);
      } else {
        if (65536 > e) {
          if (55296 <= e && 56319 >= e && c + 1 < a.length) {
            var f = a.charCodeAt(c + 1);
            56320 <= f && 57343 >= f && (e = 1024 * (e - 55296) + f - 56320 + 65536, this.ia.push(e >> 18 | 240), this.ia.push(e >> 12 & 63 | 128), this.ia.push(e >> 6 & 63 | 128), this.ia.push(e & 63 | 128), c++);
          } else {
            this.ia.push(e >> 12 | 224), this.ia.push(e >> 6 & 63 | 128), this.ia.push(e & 63 | 128);
          }
        }
      }
    }
  }
  return this.ia.length - b;
};
var ws = function(a, b, c) {
  E.call(this, "r");
  this.sessionId = a;
  c.clone();
};
v(ws, E);
var xs = function(a, b) {
  E.call(this, "t");
  this.Da = a;
  this.data = b;
};
v(xs, E);
var ys = function(a) {
  E.call(this, "u");
  this.data = a;
};
v(ys, E);
var zs = function(a, b) {
  var c = window.crypto || window.msCrypto;
  c && c.getRandomValues && !b && (this.gt = !0, this.Qk = Infinity, this.Au = !0);
  a && this.Vfa(a);
};
d = zs.prototype;
d.x_ = function(a) {
  var b = {}, c = window.localStorage || {}, e = window.sessionStorage || {}, f = this;
  a && this.kca(a);
  if (!this.gt) {
    b.Jua = this.Mg();
    b.qva = (new Date).toLocaleString();
    b.local = {};
    for (a = 0;a < c.length;a++) {
      var h = c.key(a);
      b.local[h] = c[h];
    }
    b.session = {};
    for (a = 0;a < e.length;a++) {
      h = e.key(a), b.session[h] = e[h];
    }
    b.Gva = Math.random();
    b.Hva = Math.random();
    a = 1E4 * Math.random() + 10e3;
    for (c = {};e = Math.floor(Math.random() * a), !c[e];) {
      c[e] = 1;
    }
    b.Iva = Math.random();
    b.M_ = 0;
    for (b.N_ = this.Mg();75 > this.Mg() - b.N_;) {
      b.M_++;
    }
    try {
      b.M6 = window.history.length;
    } catch (r) {
      b.M6 = r.message;
    }
    b.window = this.jh(window);
    b.document = this.jh(document);
    b.screen = this.jh(window.screen);
    try {
      b.documentElement = this.jh(document.documentElement);
    } catch (r) {
      b.documentElement = r.message;
    }
    b.navigator = this.jh(window.navigator);
    try {
      b.performance = As(window.performance);
    } catch (r) {
      b.performance = r.message;
    }
    b.P1 = [];
    a = t(function(a) {
      b.P1.push(this.jh(a));
    }, this);
    this.UG(window, a, 0);
    b.plugins = [];
    if (navigator.plugins) {
      for (a = 0;a < navigator.plugins.length;a++) {
        c = navigator.plugins[a];
        e = this.jh(c);
        e.media = [];
        for (h = 0;h < c.length;h++) {
          e.media.push(this.jh(c[h]));
        }
        b.plugins.push(e);
      }
    }
    this.sda();
    this.rda();
    var k = function(a) {
      setTimeout(function() {
        f.uV();
        k(a);
      }, a);
    };
    k(this.QW);
    var p = function(a) {
      setTimeout(function() {
        f.uV();
        p(a);
      }, a);
    };
    p(1);
    b.pta = this.Mg();
    this.qt(As(b), 0);
  }
};
d.Mg = function() {
  return window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : (new Date).getTime();
};
d.gt = !1;
d.Yh = "";
d.qE = "";
d.Cw = 0;
var Bs = ["click", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "mouseenter", "mouseleave", "selectstart", "keypress", "keydown", "keyup", "blur", "focus", "change", "select", "submit", "input", "touchstart", "touchmove", "touchend", "touchcancel", "beforeunload", "DOMContentLoaded", "load", "orientationchange", "readystatechange", "resize", "scroll", "unload", "hashchange", "pagehide", "pageshow", "popstate", fd, gd, hd, id, "pointerdown", "pointerup", "pointermove", "pointerenter", 
"pointerleave", "visibilitychange"];
d = zs.prototype;
d.Ey = 100;
d.wW = 1;
d.MW = 10;
d.TW = 160;
d.UW = 10;
d.pX = "RANDOM_SALT:";
d.wH = "SEED_SALT:";
d.PW = "/google/crypt/Random/seed.key";
d.QW = 60e3;
d.SW = 2;
d.HW = 500;
d.Qk = -1;
d.Vfa = function(a) {
  if (a < this.TW && a > this.Qk) {
    var b = this.Yh, c = this.Qk;
    this.Yh = "";
    this.Qk = a;
    this.qt(b, Math.max(0, c));
    this.Au = !1;
  }
  return this.Qk;
};
d.kca = function(a) {
  var b = this;
  if (va(a) && a) {
    if (b.Au) {
      a();
    } else {
      var c = function(e) {
        setTimeout(function() {
          b.Au ? a() : c(e);
        }, e);
      };
      c(this.HW);
    }
  }
};
d.uV = function() {
  if (!this.gt) {
    try {
      var a = new Zi;
      a.update(this.Yh);
      a.update(String(this.Mg()));
      window.localStorage.setItem(this.PW, String.fromCharCode.apply(String, a.digest()));
    } catch (b) {
    }
  }
};
d.jh = function(a, b) {
  var c = {}, e = {};
  b = b || {};
  if (null == a) {
    return {type:typeof a};
  }
  try {
    a.constructor && (e = a.constructor.prototype);
    a.__proto__ && (e = a.__proto__);
    for (var f in a) {
      if (a[f] != e[f] && a[f] != b[f] && "function" != typeof a[f]) {
        try {
          c[f] = String(a[f]), c[f].length > this.Ey && (c[f] = c[f].substr(0, this.Ey / 2) + c[f].substr(c[f].length - this.Ey / 2) + "," + c[f].length);
        } catch (h) {
          c[f] = String(h + ": " + h.message);
        }
      }
    }
  } catch (h) {
    c = {message:String(h.message)};
  }
  return c;
};
d.UG = function(a, b, c) {
  if (a && !(c > this.UW)) {
    try {
      for (var e = 0;e < a.frames.length;e++) {
        a.frames[e].parent == a && a.frames[e] != a && this.UG(a.frames[e], b, c + 1);
      }
      a.top == a && a.opener && a.opener != a && this.UG(a.opener.top, b, c + 1);
      b(a);
    } catch (f) {
    }
  }
};
d.tu = 0;
d.qP = 0;
d.qA = 0;
d.VC = null;
d.TC = null;
d.UC = "";
d.h1 = function(a, b, c) {
  var e = {}, f = Math.floor(this.Mg() / 1e3);
  f == this.qP ? this.qA++ : (this.qA = 1, this.qP = f);
  if (!(10 < this.qA)) {
    f = {beforepaste:1, beforecopy:1, beforecut:1, keydown:1, mousemove:1, mousedown:1, touchstart:1};
    if (c) {
      for (var h = 0;h < c.length;h++) {
        var k = c[h], p = this.VC || {};
        k in a && p[k] != a[k] && ("object" == typeof a[k] ? e[k] = this.jh(a[k], p[k]) : a[k] == p[k] || "function" == typeof a[k] || a.constructor && a.constructor.prototype == a[k] || (e[k] = String(a[k])));
      }
    } else {
      for (k in a) {
        p = this.VC || {}, p[k] != a[k] && ("object" == typeof a[k] ? e[k] = this.jh(a[k], p[k]) : a[k] == p[k] || "function" == typeof a[k] || a.constructor && a.constructor.prototype == a[k] || (e[k] = String(a[k])));
      }
    }
    e.time = this.Mg();
    this.uu.push(e);
    if (a.target != this.TC || a.type != this.UC) {
      this.tu += f[a.type] || 0;
    }
    this.VC = a;
    this.TC = a.target || null;
    this.UC = a.type;
    b == window && (this.TC = null, this.UC = "");
    if (10 <= this.uu.length) {
      var r = this.uu, A = this.tu, h = 0, C = new Zi, da = this, ea = function(a) {
        setTimeout(function() {
          h >= r.length ? da.qt(String.fromCharCode.apply(String, C.digest()), A) : (C.update(As(r[h++])), ea(a));
        }, a);
      };
      ea(this.MW);
      this.uu = [];
      this.tu = 0;
    }
  }
};
d.rda = function() {
  var a = this, b = function(b) {
    a.h1(b, this, void 0);
  };
  this.uu = [];
  ud(window, "devicemotion", b);
  ud(window, "deviceorientation", b);
  for (var c = 0;c < Bs.length;c++) {
    var e = Bs[c];
    n(e) && (ud(window, e, b), ud(document, e, b), document.documentElement && ud(document.documentElement, e, b));
  }
  ud(window, "error", b);
};
d.YC = 0;
d.i7 = function() {
  var a = this.Mg(), b = Math.abs(a - 100 - this.YC) % 100;
  this.YC = a;
  b > this.wW && (this.XC.push([b, this.Mg(), Math.random()]), 10 < this.XC.length && (this.qt(As(b), 5), this.XC = []));
};
d.sda = function() {
  this.YC = this.Mg();
  this.XC = [];
  var a = this, b = function(c) {
    setTimeout(function() {
      a.i7();
      b(c);
    }, c);
  };
  b(100);
};
d.qt = function(a, b) {
  if (!this.gt) {
    a = this.qE + a;
    var c = new Zi;
    c.update(a);
    a = String.fromCharCode.apply(String, c.digest());
    this.Cw += b;
    this.Cw >= this.Qk ? (c.reset(), c.update(this.wH + a + this.Yh), this.Yh = String.fromCharCode.apply(String, c.digest()), this.qE = "", this.Cw = 0, this.Au = !0) : this.qE = a;
  }
};
d.T3 = function(a) {
  a = new window.Uint8Array(Math.min(65536, a));
  (window.crypto || window.msCrypto).getRandomValues(a);
  return [].slice.call(a);
};
d.t4 = function(a) {
  var b = [];
  if (this.gt) {
    b = this.T3(a || 1);
  } else {
    if (0 > this.Qk || 0 == this.Yh.length) {
      throw new Cs;
    }
    var c = new Zi;
    c.update(this.pX + this.Yh);
    var e = c.digest();
    null !== e && (c.reset(), c.update(this.wH + this.Yh), this.Yh = String.fromCharCode.apply(String, c.digest()), b = e.slice(0, a || e.length));
  }
  return b;
};
d.gN = function(a) {
  for (var b = [], c = 0;b.length < a && c < a * this.SW;) {
    b.push.apply(b, this.t4(a - b.length)), c++;
  }
  if (b.length < a) {
    throw new Cs;
  }
  return b.slice(0, a);
};
var Cs = function() {
};
v(Cs, Error);
Cs.prototype.name = "Insufficient Entropy";
var As = function(a) {
  if (window.JSON) {
    try {
      return window.JSON.stringify(a);
    } catch (e) {
    }
  }
  var b = [], c;
  for (c in a) {
    try {
      "object" == typeof a[c] ? b.push(c, As(a[c])) : b.push(c, a[c]);
    } catch (e) {
      b.push(c, e.message);
    }
  }
  return b.join(",");
};
var Ds = function(a, b, c, e, f, h) {
  js.call(this, f, h);
  this.gD = a;
  this.aA = [];
  this.pK = !!b;
  this.H1 = !!c;
  this.K_ = !!e;
  for (b = this.mQ = 0;b < a.length;b++) {
    a[b].sk(t(this.gO, this, b, !0), t(this.gO, this, b, !1));
  }
  0 != a.length || this.pK || this.callback(this.aA);
};
v(Ds, js);
Ds.prototype.gO = function(a, b, c) {
  this.mQ++;
  this.aA[a] = [b, c];
  this.Sc || (this.pK && b ? this.callback([a, c]) : this.H1 && !b ? this.cd(c) : this.mQ == this.gD.length && this.callback(this.aA));
  this.K_ && !b && (c = null);
  return c;
};
Ds.prototype.cd = function(a) {
  Ds.X.cd.call(this, a);
  for (a = 0;a < this.gD.length;a++) {
    this.gD[a].cancel();
  }
};
var Es = function(a, b) {
  F.call(this);
  this.tn = a;
  w(0 < b.getAudioTracks().length);
  this.iy = window.URL.createObjectURL(b);
  this.Va = new Ik(this);
  this.pa(this.Va);
  this.$i = [];
  this.Wo(1.0);
};
v(Es, F);
d = Es.prototype;
d.Wo = function(a) {
  var b = Math.ceil(a) - this.$i.length;
  0 < b ? this.iY(b) : 0 > b && this.xca(-b);
  0.0 < a ? this.$i[0].volume = a - (this.$i.length - 1) : w(0 == this.$i.length);
};
d.iY = function(a) {
  w(0 < a);
  for (var b = [], c = 0;c < a;++c) {
    var e = this.tn.createElement("AUDIO"), f = new js;
    e.autoplay = !0;
    e.src = this.iy;
    this.Va.io(e, "playing", t(f.callback, f));
    this.$i.push(e);
    b.push(f);
    this.tn.appendChild(this.tn.Bg.body, e);
  }
  (new Ds(b)).lb(t(this.dispatchEvent, this, "playing"));
};
d.xca = function(a) {
  w(0 < a);
  for (var b = 0;b < a;++b) {
    var c = this.$i.pop();
    c.src = "";
    this.tn.removeNode(c);
  }
};
d.aa = function() {
  this.Wo(0.0);
  window.URL.revokeObjectURL(this.iy);
  Es.X.aa.call(this);
};
d.Bq = function() {
  return 0 == this.$i.length ? null : this.$i[0].currentTime;
};
var Fs = function(a, b) {
  F.call(this);
  a = a || 4194304;
  this.qq = this.ND = null;
  this.Jh = new Uint8Array(a + (b || 10485760));
  this.ml = this.Jh.subarray(0, a);
  this.je = this.Jh.subarray(a);
  this.qe = this.gp = 0;
  this.Mj = [];
};
v(Fs, F);
Fs.prototype.open = function(a, b, c) {
  if (!this.ND) {
    var e = G();
    this.ND = e.promise;
    a = this.g3(a, b, !!c);
    b = this.i3(a);
    b = this.b8(b);
    this.h3(b, a).then(function(a) {
      this.qq = a;
      this.jA();
      e.resolve();
    }, t(e.reject, e), this);
  }
  return this.ND;
};
var Gs = function(a) {
  if (Uint8Array.__proto__.from) {
    return Uint8Array.from(a);
  }
  a = Object(a);
  if (!a.length) {
    return new Uint8Array(0);
  }
  for (var b = new Uint8Array(a.length), c = 0;c < b.length;c++) {
    b[c] = a[c];
  }
  return b;
};
d = Fs.prototype;
d.write = function(a) {
  x(a, function(a) {
    this.Mj.push(Gs(ui(a)));
  }, this);
  this.jA();
};
d.nc = function() {
  return 0 == this.qe && 0 == this.Mj.length;
};
d.LK = function() {
  var a = 0, b = [];
  if (this.qe > this.Jh.length) {
    for (var c = this.ml.length;c && 127 < this.ml[c - 1];) {
      c--;
    }
    for (var e = this.je.length, f = this.gp;e && 127 < this.je[f];) {
      f++, e--, f == this.je.length && (f = 0);
    }
    b.push(this.ml.subarray(0, c));
    a += c;
    c = this.d5(this.qe - c - e);
    b.push(c);
    a += c.length;
    f + e <= this.je.length ? b.push(this.je.subarray(f, f + e)) : (b.push(this.je.subarray(f)), b.push(this.je.subarray(0, e - (this.je.length - f))));
    a += e;
  } else {
    this.qe && (a += this.qe, b.push(this.Jh.subarray(0, this.qe)));
  }
  this.Mj.length && x(this.Mj, function(c) {
    b.push(c);
    a += c.length;
  });
  var h = new Uint8Array(a), k = 0;
  x(b, function(a) {
    h.set(a, k);
    k += a.length;
  });
  return h;
};
d.g3 = function(a, b, c) {
  var e = G();
  a.then(function(a) {
    a.getFile(b, c ? {} : {create:!0}, t(e.resolve, e), t(e.reject, e));
  }, t(e.reject, e));
  return e.promise;
};
d.i3 = function(a) {
  var b = G();
  a.then(function(a) {
    a.file(t(b.resolve, b), t(b.reject, b));
  }, t(b.reject, b));
  return b.promise;
};
d.b8 = function(a) {
  var b = G();
  a.then(function(a) {
    this.qe = a.size;
    if (this.qe > this.Jh.length) {
      var c = G(), f = new FileReader;
      f.onload = t(function() {
        this.ml.set(new Uint8Array(f.result));
        c.resolve();
      }, this);
      f.readAsArrayBuffer(a.slice(0, this.ml.length));
      var h = G(), k = new FileReader;
      k.onload = t(function() {
        this.je.set(new Uint8Array(k.result));
        h.resolve();
      }, this);
      k.readAsArrayBuffer(a.slice(a.size - this.je.length, a.size));
      b.resolve(ne([c.promise, h.promise]));
    } else {
      var p = new FileReader;
      p.onload = t(function() {
        var a = new Uint8Array(p.result);
        this.Jh.set(a);
        this.qe > this.ml.length && (this.gp = (this.qe - this.ml.length) % this.je.length);
        b.resolve();
      }, this);
      p.readAsArrayBuffer(a);
    }
  }, t(b.reject, b), this);
  return b.promise;
};
d.h3 = function(a, b) {
  var c = G();
  me([a, b]).then(function(a) {
    a[1].createWriter(t(function(a) {
      a.seek(a.length);
      a.onwriteend = t(this.jA, this);
      c.resolve(a);
    }, this), t(c.reject, c));
  }, t(c.reject, c), this);
  return c.promise;
};
d.jA = function() {
  this.qq && this.qq.readyState != this.qq.WRITING && 0 < this.Mj.length && (this.qq.write(new Blob(this.Mj)), x(this.Mj, function(a) {
    var b = this.qe;
    this.qe += a.length;
    if (b < this.Jh.length) {
      var c = a.subarray(0, Math.min(this.Jh.length - b, a.length));
      this.Jh.set(c, b);
      a = a.subarray(c.length);
    }
    for (b = this.je.length - this.gp;a.length;) {
      c = a.subarray(0, Math.min(b, a.length)), this.je.set(c, this.gp), a = a.subarray(c.length), this.gp = c.length == b ? 0 : this.gp + c.length, b = this.je.length;
    }
  }, this), this.Mj.length = 0);
};
d.d5 = function(a) {
  return Gs(ui("...\r\n\r\n##### LOG TRUNCATED - REMOVED " + a + " BYTES#####\r\n\r\n..."));
};
var Hs = new H("wduck", "googDucking", "audio_echo_cancellation", "googEchoCancellation", "audio_echo_cancellation_delay_correction", "googEchoCancellation2", "audio_auto_gain_control", "googAutoGainControl", "internal_audio_auto_gain_control", "googAutoGainControl2", "audio_noise_suppression", "googNoiseSuppression", "audio_highpass_filter", "googHighpassFilter", "audio_stereo_swapping", "googAudioMirroring", "audio_transient_suppression", "googNoiseSuppression2");
new Ne(Hs.ub());
var Is = new H("vnr", "googNoiseReduction");
new Ne(["vnr"]);
new Ne(Is.ub());
var Js = function() {
};
Js.prototype.load = function(a) {
  this.a.L("Loading gapi for realtime client");
  var b = window.gapi;
  b && b.auth ? a(b) : (new Ek("notneeded", void 0, void 0, !0, !1, void 0)).init().then(function(b) {
    a(b);
  });
};
Js.prototype.a = D("mr.mirror.hangouts.ClientLoader");
var Ks = function(a, b, c) {
  this.Pa = us(a, b, c);
  this.pc = this.Wb = -1;
  this.$d = !1;
};
d = Ks.prototype;
d.Cq = function() {
  return this.Pa.Cq();
};
d.jd = function() {
  return 4 == this.pc;
};
d.getError = function() {
  return this.$d || this.Pa.getError();
};
d.hx = function(a, b, c) {
  this.Pa.hx(a, b, c);
  this.pc = this.Wb = -1;
};
d.reset = function() {
  this.Pa.reset();
  this.pc = this.Wb = -1;
};
d.advance = function(a) {
  this.Pa.advance(a);
};
d.Zc = function() {
  if (this.Pa.QY()) {
    return !1;
  }
  if (this.getError()) {
    return Ya("Decoder hit an error"), !1;
  }
  var a = this.Pa.ni(), b = a >>> 3, a = a & 7;
  if (0 != a && 5 != a && 1 != a && 2 != a && 3 != a && 4 != a) {
    return Ya("Invalid wire type"), this.$d = !0, !1;
  }
  this.Wb = b;
  this.pc = a;
  return !0;
};
d.oia = function() {
  0 != this.pc ? (Ya("Invalid wire type for skipVarintField"), this.wc()) : this.Pa.nia();
};
d.jia = function() {
  if (2 != this.pc) {
    Ya("Invalid wire type for skipDelimitedField"), this.wc();
  } else {
    var a = this.Pa.ni();
    this.Pa.advance(a);
  }
};
d.kia = function() {
  5 != this.pc ? (Ya("Invalid wire type for skipFixed32Field"), this.wc()) : this.Pa.advance(4);
};
d.lia = function() {
  1 != this.pc ? (Ya("Invalid wire type for skipFixed64Field"), this.wc()) : this.Pa.advance(8);
};
d.mia = function() {
  var a = [this.Wb];
  do {
    if (!this.Zc()) {
      Ya("Unmatched start-group tag: stream EOF");
      this.$d = !0;
      break;
    }
    if (3 == this.pc) {
      a.push(this.Wb);
    } else {
      if (4 == this.pc && this.Wb != a.pop()) {
        Ya("Unmatched end-group tag");
        this.$d = !0;
        break;
      }
    }
  } while (0 < a.length);
};
d.wc = function() {
  switch(this.pc) {
    case 0:
      this.oia();
      break;
    case 1:
      this.lia();
      break;
    case 2:
      this.jia();
      break;
    case 5:
      this.kia();
      break;
    case 3:
      this.mia();
      break;
    default:
      Ya("Invalid wire encoding for field.");
  }
};
d.Fe = function(a, b) {
  w(2 == this.pc);
  var c = this.Pa.Rc, e = this.Pa.ni(), e = this.Pa.Cq() + e;
  this.Pa.setEnd(e);
  b(a, this);
  this.Pa.Rea(e);
  this.Pa.setEnd(c);
};
d.DE = function() {
  w(0 == this.pc);
  return this.Pa.BR();
};
d.zR = function() {
  w(0 == this.pc);
  return this.Pa.CR();
};
d.EE = function() {
  w(0 == this.pc);
  return this.Pa.ni();
};
d.$r = function() {
  w(0 == this.pc);
  return !!this.Pa.ni();
};
d.Zg = function() {
  w(0 == this.pc);
  return this.Pa.CR();
};
d.Ta = function() {
  w(2 == this.pc);
  var a = this.Pa.ni();
  return this.Pa.Ta(a);
};
d.CE = function() {
  w(2 == this.pc);
  var a = this.Pa.ni();
  return this.Pa.CE(a);
};
d.Tba = function(a) {
  w(2 == this.pc);
  for (var b = this.Pa.ni(), b = this.Pa.Cq() + b, c = [];this.Pa.Cq() < b;) {
    c.push(a.call(this.Pa));
  }
  return c;
};
d.AR = function() {
  return this.Tba(this.Pa.Zg);
};
var W = function() {
  this.Tm = [];
  this.Od = 0;
  this.ic = new vs;
  this.wI = [];
};
d = W.prototype;
d.MY = function(a) {
  var b = this.ic.end();
  this.Tm.push(b);
  this.Tm.push(a);
  this.Od += b.length + a.length;
};
d.It = function(a) {
  this.le(a, 2);
  a = this.ic.end();
  this.Tm.push(a);
  this.Od += a.length;
  a.push(this.Od);
  return a;
};
d.ru = function(a) {
  var b = a.pop(), b = this.Od + this.ic.length() - b;
  for (w(0 <= b);127 < b;) {
    a.push(b & 127 | 128), b >>>= 7, this.Od++;
  }
  a.push(b);
  this.Od++;
};
d.reset = function() {
  this.Tm = [];
  this.ic.end();
  this.Od = 0;
  this.wI = [];
};
d.h = function() {
  w(0 == this.wI.length);
  for (var a = new Uint8Array(this.Od + this.ic.length()), b = this.Tm, c = b.length, e = 0, f = 0;f < c;f++) {
    var h = b[f];
    a.set(h, e);
    e += h.length;
  }
  b = this.ic.end();
  a.set(b, e);
  e += b.length;
  w(e == a.length);
  this.Tm = [a];
  return a;
};
d.le = function(a, b) {
  w(1 <= a && a == Math.floor(a));
  this.ic.vy(8 * a + b);
};
d.pW = function(a, b) {
  null != b && (this.le(a, 0), this.ic.vy(b));
};
d.nW = function(a, b) {
  null != b && (this.le(a, 0), this.ic.cH(b));
};
d.uka = function(a, b) {
  null != b && (this.le(a, 0), this.ic.tka(b));
};
d.rka = function(a, b) {
  null != b && (this.le(a, 0), this.ic.qka(b));
};
d.s = function(a, b) {
  null != b && (w(-2147483648 <= b && 2147483648 > b), this.nW(a, b));
};
d.ha = function(a, b) {
  null != b && (w(-9223372036854775808 <= b && 9223372036854775808 > b), this.rka(a, b));
};
d.Rd = function(a, b) {
  null != b && (w(0 <= b && 4294967296 > b), this.pW(a, b));
};
d.nh = function(a, b) {
  null != b && (w(0 <= b && 18446744073709551616 > b), this.uka(a, b));
};
d.oW = function(a, b) {
  if (null != b) {
    a: {
      for (var c = new Gp(0, 0), e = new Gp(0, 0), f = 0;f < b.length;f++) {
        if ("0" > b[f] || "9" < b[f]) {
          b = null;
          break a;
        }
        e.Hb = parseInt(b[f], 10);
        c = c.f9(10).add(e);
      }
      b = c;
    }
    this.le(a, 0);
    this.ic.dH(b.Hb, b.mc);
  }
};
d.jW = function(a, b) {
  null != b && (w(0 <= b && 4294967296 > b), this.le(a, 5), this.ic.Rd(b));
};
d.Ib = function(a, b) {
  null != b && (this.le(a, 5), this.ic.Ib(b));
};
d.aH = function(a, b) {
  null != b && (this.le(a, 1), this.ic.aH(b));
};
d.Z = function(a, b) {
  null != b && (w("boolean" == typeof b), this.le(a, 0), this.ic.Z(b));
};
d.A = function(a, b) {
  null != b && (w(-2147483648 <= b && 2147483648 > b), this.le(a, 0), this.ic.cH(b));
};
d.f = function(a, b) {
  null != b && (a = this.It(a), this.ic.f(b), this.ru(a));
};
d.wp = function(a, b) {
  null != b && (b = Nr(b), this.le(a, 2), this.ic.vy(b.length), this.MY(b));
};
d.b = function(a, b, c) {
  null != b && (a = this.It(a), c(b, this), this.ru(a));
};
d.lW = function(a, b) {
  if (null != b) {
    for (var c = 0;c < b.length;c++) {
      this.nW(a, b[c]);
    }
  }
};
d.mW = function(a, b) {
  if (null != b) {
    for (var c = 0;c < b.length;c++) {
      this.pW(a, b[c]);
    }
  }
};
d.uy = function(a, b) {
  if (null != b) {
    for (var c = 0;c < b.length;c++) {
      this.jW(a, b[c]);
    }
  }
};
d.bH = function(a, b) {
  if (null != b) {
    for (var c = 0;c < b.length;c++) {
      this.A(a, b[c]);
    }
  }
};
d.$c = function(a, b) {
  if (null != b) {
    for (var c = 0;c < b.length;c++) {
      this.f(a, b[c]);
    }
  }
};
d.B = function(a, b, c) {
  if (null != b) {
    for (var e = 0;e < b.length;e++) {
      var f = this.It(a);
      c(b[e], this);
      this.ru(f);
    }
  }
};
d.xp = function(a, b, c) {
  if (null != b) {
    for (var e = 0;e < b.length;e++) {
      this.le(a, 3), c(b[e], this), this.le(a, 4);
    }
  }
};
d.kW = function(a, b) {
  if (null != b && b.length) {
    a = this.It(a);
    for (var c = 0;c < b.length;c++) {
      this.ic.A(b[c]);
    }
    this.ru(a);
  }
};
var Ls = function() {
  F.call(this);
};
v(Ls, F);
Ls.prototype.Lca = function() {
  this.dispatchEvent("v");
};
var Ms = function(a, b, c) {
  E.call(this, "s");
  this.state = b;
  this.sessionId = c;
};
v(Ms, E);
var Ns = function(a, b, c, e, f, h, k) {
  F.call(this);
  this.ra = a;
  this.eb = b;
  this.Oe = c;
  this.$b = l(e) ? e : "wa";
  this.O = l(f) ? f : "ya";
  this.Hf = !1;
  this.tp = null;
  this.PP(k || null);
  this.Fo = l(h) ? h : null;
  this.i1 = !1;
};
v(Ns, F);
d = Ns.prototype;
d.toString = function() {
  return "Source(id=" + this.eb + " type=" + this.Oe + " content=" + this.$b + " state=" + this.O + " participantId=" + this.ra + ")";
};
d.D = function() {
  return this.ra;
};
d.qb = function(a) {
  this.ra = a;
};
d.getId = function() {
  return this.eb;
};
d.W = function() {
  return this.Oe;
};
d.aT = function(a) {
  this.$b != a && (this.$b = a, this.dispatchEvent("w"));
};
d.iU = function(a) {
  this.Fo != a && (this.Fo = a, this.dispatchEvent("x"));
};
d.getState = function() {
  return this.O;
};
d.Sb = function(a) {
  this.O != a && (this.O = a, this.dispatchEvent("y"));
};
d.Qea = function(a) {
  this.Hf != a && (this.Hf = a, this.dispatchEvent("z"));
};
d.eG = function(a) {
  this.PP(a) && this.dispatchEvent("z");
};
d.PP = function(a) {
  var b = null != this.tp && !qb(this.tp), c = null != a && !qb(a);
  c ? (a = z(a), Fb(a, function(a, b) {
    return a.left - b.left || a.top - b.top || a.width - b.width || a.height - b.height;
  })) : a = null;
  if (b = c != b || c && !Jb(this.tp, a, Gr)) {
    this.tp = a;
  }
  return b;
};
d.pC = function() {
  return null != this.tp ? z(this.tp) : null;
};
d.dispatchEvent = function(a) {
  return this.i1 ? !1 : Ns.X.dispatchEvent.call(this, a);
};
var Os = function() {
  F.call(this);
  this.ih = [];
};
v(Os, F);
Os.prototype.add = function(a, b) {
  if (null != this.vn(a.W(), a.getId(), a.D())) {
    return !1;
  }
  this.ih.push(a);
  l(b) && !b || a.tx(this);
  this.dispatchEvent(new Ps("A", a));
  return !0;
};
Os.prototype.remove = function(a) {
  return wb(this.ih, a) ? (a.Sr == this && a.tx(null), this.dispatchEvent(new Ps("B", a)), !0) : !1;
};
Os.prototype.getSources = function() {
  return z(this.ih);
};
Os.prototype.vn = function(a, b, c) {
  return nb(this.ih, function(e) {
    var f = e.W() == a, h = null == b || e.getId() == b;
    e = null == c || e.D() == c;
    return f && h && e;
  });
};
var Ps = function(a, b) {
  E.call(this, a);
  this.source = b;
};
v(Ps, E);
var Qs = function() {
  F.call(this);
};
v(Qs, F);
var Rs = function(a, b, c) {
  E.call(this, a);
  this.ra = b;
  this.pia = c;
};
v(Rs, E);
Rs.prototype.D = function() {
  return this.ra;
};
Rs.prototype.ar = function() {
  return this.pia;
};
var Ss = function(a, b, c, e) {
  F.call(this);
  this.ra = a;
  this.ud = b;
  this.AO = c;
  this.O = l(e) ? e : "Ia";
};
v(Ss, F);
d = Ss.prototype;
d.D = function() {
  return this.ra;
};
d.Ga = function() {
  return this.ud;
};
d.getState = function() {
  return this.O;
};
d.Sb = function(a) {
  a != this.O && (this.O = a, this.dispatchEvent("E"));
};
d.getInfo = function() {
  return this.AO;
};
d.zfa = function(a) {
  this.AO = a;
};
var Ts = function() {
  F.call(this);
};
v(Ts, F);
var Us = function(a) {
  E.call(this, "F");
  this.dF = z(a);
};
v(Us, E);
var Vs = function() {
  F.call(this);
  this.ll = !1;
};
v(Vs, F);
qa(Vs);
var Ws = function(a) {
  F.call(this);
  this.pk = a || window;
  this.hD = ud(this.pk, "resize", this.f6, !1, this);
  this.Ls = rk(this.pk || window);
};
v(Ws, F);
Ws.prototype.getSize = function() {
  return this.Ls ? this.Ls.clone() : null;
};
Ws.prototype.aa = function() {
  Ws.X.aa.call(this);
  this.hD && (Dd(this.hD), this.hD = null);
  this.Ls = this.pk = null;
};
Ws.prototype.f6 = function() {
  var a = rk(this.pk || window), b = this.Ls;
  a == b || a && b && a.width == b.width && a.height == b.height || (this.Ls = a, this.dispatchEvent("resize"));
};
var Xs = function(a) {
  F.call(this);
  this.pk = a ? a.getWindow() : window;
  this.hP = this.vL();
  this.ai = t(this.U5, this);
  this.gw = this.pk.matchMedia ? this.pk.matchMedia("(min-resolution: 1.5dppx), (-webkit-min-device-pixel-ratio: 1.5)") : null;
};
v(Xs, F);
Xs.prototype.start = function() {
  this.gw && this.gw.addListener(this.ai);
};
Xs.prototype.vL = function() {
  return 1.5 <= this.pk.devicePixelRatio ? 2 : 1;
};
Xs.prototype.U5 = function() {
  var a = this.vL();
  this.hP != a && (this.hP = a, this.dispatchEvent("J"));
};
Xs.prototype.aa = function() {
  this.gw && this.gw.removeListener(this.ai);
  Xs.X.aa.call(this);
};
var Ys = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Ys, N);
Ys.prototype.g = function(a) {
  return Zs(a, this);
};
var Zs = function(a, b) {
  var c, e = {Qwa:(c = b.QM()) && $s(a, c), psa:(c = b.yL()) && at(a, c), Msa:(c = b.IL()) && at(a, c), cva:(c = b.kM()) && bt(a, c)};
  a && (e.l = b);
  return e;
};
Ys.prototype.j = function() {
  var a = new W;
  ct(this, a);
  return a.h();
};
var ct = function(a, b) {
  var c;
  c = a.QM();
  null != c && b.b(1, c, dt);
  c = a.yL();
  null != c && b.b(2, c, et);
  c = a.IL();
  null != c && b.b(3, c, et);
  c = a.kM();
  null != c && b.b(4, c, ft);
};
Ys.prototype.QM = function() {
  return T(this, gt, 1);
};
Ys.prototype.yL = function() {
  return T(this, ht, 2);
};
Ys.prototype.IL = function() {
  return T(this, ht, 3);
};
Ys.prototype.kM = function() {
  return T(this, it, 4);
};
var gt = function(a) {
  O(this, a, 0, -1, null, null);
};
v(gt, N);
gt.prototype.g = function(a) {
  return $s(a, this);
};
var $s = function(a, b) {
  var c = {nqa:Q(b, 1), networkType:Q(b, 2)};
  a && (c.l = b);
  return c;
};
gt.prototype.j = function() {
  var a = new W;
  dt(this, a);
  return a.h();
};
var dt = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
}, ht = function(a) {
  O(this, a, 0, -1, null, null);
};
v(ht, N);
ht.prototype.g = function(a) {
  return at(a, this);
};
var at = function(a, b) {
  var c = {fva:Q(b, 1), zva:Q(b, 2), accuracy:Rr(b, 3)};
  a && (c.l = b);
  return c;
};
ht.prototype.j = function() {
  var a = new W;
  et(this, a);
  return a.h();
};
var et = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(1, c);
  c = Q(a, 2);
  null != c && b.s(2, c);
  c = Q(a, 3);
  null != c && b.aH(3, c);
}, it = function(a) {
  O(this, a, 0, -1, null, null);
};
v(it, N);
it.prototype.g = function(a) {
  return bt(a, this);
};
var bt = function(a, b) {
  var c = {ypa:Q(b, 1), xpa:Q(b, 2), vxa:Q(b, 3), Bya:Q(b, 4)};
  a && (c.l = b);
  return c;
};
it.prototype.j = function() {
  var a = new W;
  ft(this, a);
  return a.h();
};
var ft = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.ha(3, c);
  c = Q(a, 4);
  null != c && b.ha(4, c);
};
var jt = function(a) {
  O(this, a, 0, -1, null, null);
};
v(jt, N);
jt.prototype.g = function(a) {
  return kt(a, this);
};
var kt = function(a, b) {
  var c, e = {Bsa:Q(b, 1), yua:(c = b.fM()) && lt(a, c)};
  a && (e.l = b);
  return e;
};
jt.prototype.j = function() {
  var a = new W;
  mt(this, a);
  return a.h();
};
var mt = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = a.fM();
  null != c && b.b(2, c, nt);
};
jt.prototype.fM = function() {
  return T(this, ot, 2);
};
var ot = function(a) {
  O(this, a, 0, -1, null, null);
};
v(ot, N);
ot.prototype.g = function(a) {
  return lt(a, this);
};
var lt = function(a, b) {
  var c = {Jwa:Q(b, 1), Gua:Q(b, 2), Era:Q(b, 3), gca:Q(b, 4), Sua:Q(b, 5), VAa:R(b, 6, 99)};
  a && (c.l = b);
  return c;
};
ot.prototype.j = function() {
  var a = new W;
  nt(this, a);
  return a.h();
};
var nt = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.s(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = Q(a, 5);
  null != c && b.Z(5, c);
  c = Q(a, 6);
  null != c && b.A(6, c);
};
ot.prototype.mN = function() {
  return Q(this, 4);
};
ot.prototype.fU = function(a) {
  S(this, 4, a);
};
var pt = function(a) {
  O(this, a, 0, -1, null, null);
};
v(pt, N);
pt.prototype.g = function(a) {
  return qt(a, this);
};
var qt = function(a, b) {
  var c = {ka:Q(b, 1), YY:Q(b, 2)};
  a && (c.l = b);
  return c;
};
pt.prototype.j = function() {
  var a = new W;
  rt(this, a);
  return a.h();
};
var rt = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
};
pt.prototype.da = function() {
  return Q(this, 1);
};
pt.prototype.Y = function(a) {
  S(this, 1, a);
};
var st = function(a) {
  O(this, a, 0, 1, null, null);
};
v(st, N);
st.prototype.g = function(a) {
  return tt(a, this);
};
var tt = function(a, b) {
  var c = {}, e = ut, f = st.prototype.getExtension, h;
  for (h in e) {
    var k = e[h], p = f.call(b, k);
    if (p) {
      for (var r in k.v1) {
        if (k.v1.hasOwnProperty(r)) {
          break;
        }
      }
      c[r] = k.aV ? k.y7 ? P(p, k.aV, a) : k.aV(a, p) : p;
    }
  }
  a && (c.l = b);
  return c;
};
st.prototype.j = function() {
  var a = new W;
  vt(this, a);
  return a.h();
};
var vt = function(a, b) {
  var c = wt, e = st.prototype.getExtension, f;
  for (f in c) {
    var h = c[f], k = h.lta;
    if (!h.tI) {
      throw Error("Message extension present that was generated without binary serialization support");
    }
    var p = e.call(a, k);
    if (p) {
      if (k.TO()) {
        if (h.VY) {
          h.tI.call(b, k.iK, p, h.VY);
        } else {
          throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
        }
      } else {
        h.tI.call(b, k.iK, p);
      }
    }
  }
}, ut = {}, wt = {};
var yt = function(a) {
  O(this, a, 0, -1, xt, null);
};
v(yt, N);
var xt = [10];
yt.prototype.g = function(a) {
  return zt(a, this);
};
var zt = function(a, b) {
  var c = {ka:Q(b, 1), TZ:Q(b, 2), type:Q(b, 4), GU:Q(b, 5), Vsa:Q(b, 6), Isa:Q(b, 7), Eza:Q(b, 8), Zpa:Q(b, 9), Hxa:P(b.ZM(), At, a), language:Q(b, 11)};
  a && (c.l = b);
  return c;
};
yt.prototype.j = function() {
  var a = new W;
  Bt(this, a);
  return a.h();
};
var Bt = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.ha(2, c);
  c = Q(a, 4);
  null != c && b.A(4, c);
  c = Q(a, 5);
  null != c && b.ha(5, c);
  c = Q(a, 6);
  null != c && b.ha(6, c);
  c = Q(a, 7);
  null != c && b.ha(7, c);
  c = Q(a, 8);
  null != c && b.f(8, c);
  c = Q(a, 9);
  null != c && b.f(9, c);
  c = a.ZM();
  0 < c.length && b.B(10, c, Ct);
  c = Q(a, 11);
  null != c && b.f(11, c);
};
d = yt.prototype;
d.da = function() {
  return Q(this, 1);
};
d.Y = function(a) {
  S(this, 1, a);
};
d.W = function() {
  return Q(this, 4);
};
d.gh = function(a) {
  S(this, 4, a);
};
d.ZM = function() {
  return U(this, Dt, 10);
};
var Dt = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Dt, N);
Dt.prototype.g = function(a) {
  return At(a, this);
};
var At = function(a, b) {
  var c = {text:Q(b, 1), confidence:Rr(b, 2)};
  a && (c.l = b);
  return c;
};
Dt.prototype.j = function() {
  var a = new W;
  Ct(this, a);
  return a.h();
};
var Ct = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.Ib(2, c);
};
var Et = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Et, N);
Et.prototype.g = function(a) {
  return Ft(a, this);
};
var Ft = function(a, b) {
  var c = {ka:Q(b, 1), TZ:Q(b, 2)};
  a && (c.l = b);
  return c;
};
Et.prototype.j = function() {
  var a = new W;
  Gt(this, a);
  return a.h();
};
var Gt = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.ha(2, c);
};
Et.prototype.da = function() {
  return Q(this, 1);
};
Et.prototype.Y = function(a) {
  S(this, 1, a);
};
var Ht = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Ht, N);
Ht.prototype.g = function(a) {
  return It(a, this);
};
var It = function(a, b) {
  var c = {CAa:R(b, 1, !1), language:R(b, 2, "en-US")};
  a && (c.l = b);
  return c;
};
Ht.prototype.j = function() {
  var a = new W;
  Jt(this, a);
  return a.h();
};
var Jt = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.Z(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
};
var Kt = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Kt, N);
Kt.prototype.g = function(a) {
  return Lt(a, this);
};
var Lt = function(a, b) {
  var c = {Lua:Q(b, 1), Rpa:Q(b, 2)};
  a && (c.l = b);
  return c;
};
Kt.prototype.j = function() {
  var a = new W;
  Mt(this, a);
  return a.h();
};
var Mt = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.Z(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
};
var Nt = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Nt, N);
Nt.prototype.g = function(a) {
  return Ot(a, this);
};
var Ot = function(a, b) {
  var c = {IAa:Q(b, 1), qua:Q(b, 2), rua:Q(b, 3), version:Q(b, 4)};
  a && (c.l = b);
  return c;
};
Nt.prototype.j = function() {
  var a = new W;
  Pt(this, a);
  return a.h();
};
var Pt = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.nh(2, c);
  c = Q(a, 3);
  null != c && b.nh(3, c);
  c = Q(a, 4);
  null != c && b.nh(4, c);
};
Nt.prototype.Uf = function() {
  return Q(this, 4);
};
Nt.prototype.setVersion = function(a) {
  S(this, 4, a);
};
var Qt = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Qt, N);
Qt.prototype.g = function(a) {
  return Rt(a, this);
};
var Rt = function(a, b) {
  var c = {ui:Q(b, 1), clientId:Q(b, 2), Ada:Q(b, 3), Lj:Q(b, 4)};
  a && (c.l = b);
  return c;
};
Qt.prototype.j = function() {
  var a = new W;
  St(this, a);
  return a.h();
};
var St = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
};
d = Qt.prototype;
d.UF = function(a) {
  S(this, 1, a);
};
d.dd = function() {
  return Q(this, 2);
};
d.hg = function(a) {
  S(this, 2, a);
};
d.nj = function() {
  return Q(this, 4);
};
d.zi = function(a) {
  S(this, 4, a);
};
var Tt = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Tt, N);
Tt.prototype.g = function(a) {
  return Ut(a, this);
};
var Ut = function(a, b) {
  var c = {cra:Q(b, 1)};
  a && (c.l = b);
  return c;
};
Tt.prototype.j = function() {
  var a = new W;
  Vt(this, a);
  return a.h();
};
var Vt = function(a, b) {
  a = Q(a, 1);
  null != a && b.ha(1, a);
};
var Wt = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Wt, N);
Wt.prototype.g = function(a) {
  return Xt(a, this);
};
var Xt = function(a, b) {
  var c = {clientId:Q(b, 1), pqa:Q(b, 2), Eva:Q(b, 3), version:Q(b, 4), qsa:Q(b, 5), osa:Q(b, 6), Lpa:Q(b, 7)};
  a && (c.l = b);
  return c;
};
Wt.prototype.j = function() {
  var a = new W;
  Yt(this, a);
  return a.h();
};
var Yt = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.ha(4, c);
  c = Q(a, 5);
  null != c && b.f(5, c);
  c = Q(a, 6);
  null != c && b.f(6, c);
  c = Q(a, 7);
  null != c && b.s(7, c);
};
Wt.prototype.dd = function() {
  return Q(this, 1);
};
Wt.prototype.hg = function(a) {
  S(this, 1, a);
};
Wt.prototype.Uf = function() {
  return Q(this, 4);
};
Wt.prototype.setVersion = function(a) {
  S(this, 4, a);
};
var Zt = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Zt, N);
Zt.prototype.g = function(a) {
  return $t(a, this);
};
var $t = function(a, b) {
  var c = {id:Q(b, 1)};
  a && (c.l = b);
  return c;
};
Zt.prototype.j = function() {
  var a = new W;
  au(this, a);
  return a.h();
};
var au = function(a, b) {
  a = Q(a, 1);
  null != a && b.f(1, a);
};
Zt.prototype.getId = function() {
  return Q(this, 1);
};
Zt.prototype.ox = function(a) {
  S(this, 1, a);
};
var bu = function(a) {
  O(this, a, 0, -1, null, null);
};
v(bu, N);
bu.prototype.g = function(a) {
  return cu(a, this);
};
var cu = function(a, b) {
  var c = {vsa:Q(b, 1), dta:Q(b, 2)};
  a && (c.l = b);
  return c;
};
bu.prototype.j = function() {
  var a = new W;
  du(this, a);
  return a.h();
};
var du = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.Z(1, c);
  c = Q(a, 2);
  null != c && b.nh(2, c);
};
var eu = function(a) {
  O(this, a, 0, -1, null, null);
};
v(eu, N);
eu.prototype.g = function(a) {
  return fu(a, this);
};
var fu = function(a, b) {
  var c = {fAa:Q(b, 1), bta:Q(b, 2)};
  a && (c.l = b);
  return c;
};
eu.prototype.j = function() {
  var a = new W;
  gu(this, a);
  return a.h();
};
var gu = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.nh(2, c);
};
var iu = function(a) {
  O(this, a, 0, -1, hu, null);
};
v(iu, N);
var hu = [6];
iu.prototype.g = function(a) {
  return ju(a, this);
};
var ju = function(a, b) {
  var c = {ka:Q(b, 1), HY:Q(b, 2), Mpa:Q(b, 3), LS:Q(b, 4), Yza:Q(b, 5), rya:Q(b, 6), locale:Q(b, 7), action:Q(b, 8), title:Q(b, 9), body:Q(b, 10), iva:R(b, 11, 1)};
  a && (c.l = b);
  return c;
};
iu.prototype.j = function() {
  var a = new W;
  ku(this, a);
  return a.h();
};
var ku = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.A(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = Q(a, 5);
  null != c && b.f(5, c);
  c = a.w4();
  0 < c.length && b.$c(6, c);
  c = Q(a, 7);
  null != c && b.f(7, c);
  c = Q(a, 8);
  null != c && b.A(8, c);
  c = Q(a, 9);
  null != c && b.f(9, c);
  c = Q(a, 10);
  null != c && b.f(10, c);
  c = Q(a, 11);
  null != c && b.A(11, c);
};
d = iu.prototype;
d.da = function() {
  return Q(this, 1);
};
d.Y = function(a) {
  S(this, 1, a);
};
d.yN = function() {
  return Q(this, 4);
};
d.w4 = function() {
  return Q(this, 6);
};
d.getTitle = function() {
  return Q(this, 9);
};
d.setTitle = function(a) {
  S(this, 9, a);
};
d.vq = function() {
  return Q(this, 10);
};
d.vs = function(a) {
  S(this, 10, a);
};
var lu = function(a) {
  O(this, a, 0, -1, null, null);
};
v(lu, N);
lu.prototype.g = function(a) {
  return mu(a, this);
};
var mu = function(a, b) {
  var c = {ka:Q(b, 1), HY:Q(b, 2)};
  a && (c.l = b);
  return c;
};
lu.prototype.j = function() {
  var a = new W;
  nu(this, a);
  return a.h();
};
var nu = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
};
lu.prototype.da = function() {
  return Q(this, 1);
};
lu.prototype.Y = function(a) {
  S(this, 1, a);
};
var pu = function(a) {
  O(this, a, 0, -1, ou, null);
};
v(pu, N);
var ou = [1];
pu.prototype.g = function(a) {
  return qu(a, this);
};
var qu = function(a, b) {
  var c = {zsa:P(b.CL(), ru, a)};
  a && (c.l = b);
  return c;
};
pu.prototype.j = function() {
  var a = new W;
  su(this, a);
  return a.h();
};
var su = function(a, b) {
  a = a.CL();
  0 < a.length && b.B(1, a, tu);
};
pu.prototype.CL = function() {
  return U(this, uu, 1);
};
var uu = function(a) {
  O(this, a, 0, -1, null, null);
};
v(uu, N);
uu.prototype.g = function(a) {
  return ru(a, this);
};
var ru = function(a, b) {
  var c = {code:Q(b, 1)};
  a && (c.l = b);
  return c;
};
uu.prototype.j = function() {
  var a = new W;
  tu(this, a);
  return a.h();
};
var tu = function(a, b) {
  a = Q(a, 1);
  null != a && b.A(1, a);
};
uu.prototype.OA = function() {
  return Q(this, 1);
};
uu.prototype.EF = function(a) {
  S(this, 1, a);
};
var vu = function(a) {
  O(this, a, 0, -1, null, null);
};
v(vu, N);
vu.prototype.g = function(a) {
  return wu(a, this);
};
var wu = function(a, b) {
  var c = {service:Q(b, 1), value:Q(b, 2)};
  a && (c.l = b);
  return c;
};
vu.prototype.j = function() {
  var a = new W;
  xu(this, a);
  return a.h();
};
var xu = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
};
vu.prototype.getService = function() {
  return Q(this, 1);
};
vu.prototype.jha = function(a) {
  S(this, 1, a);
};
vu.prototype.zc = function() {
  return Q(this, 2);
};
vu.prototype.Hs = function(a) {
  S(this, 2, a);
};
var yu = function(a) {
  O(this, a, 0, -1, null, null);
};
v(yu, N);
yu.prototype.g = function(a) {
  return zu(a, this);
};
var zu = function(a, b) {
  var c = {ka:Q(b, 1)};
  a && (c.l = b);
  return c;
};
yu.prototype.j = function() {
  var a = new W;
  Au(this, a);
  return a.h();
};
var Au = function(a, b) {
  a = Q(a, 1);
  null != a && b.f(1, a);
};
yu.prototype.da = function() {
  return Q(this, 1);
};
yu.prototype.Y = function(a) {
  S(this, 1, a);
};
var Bu = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Bu, N);
Bu.prototype.g = function(a) {
  return Cu(a, this);
};
var Cu = function(a, b) {
  var c = {oya:Q(b, 1), Xya:Q(b, 2), xsa:R(b, 3, 0)};
  a && (c.l = b);
  return c;
};
Bu.prototype.j = function() {
  var a = new W;
  Du(this, a);
  return a.h();
};
var Du = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.ha(1, c);
  c = Q(a, 2);
  null != c && b.ha(2, c);
  c = Q(a, 3);
  null != c && b.A(3, c);
};
var Eu = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Eu, N);
Eu.prototype.g = function(a) {
  return Fu(a, this);
};
var Fu = function(a, b) {
  var c = {tua:R(b, 3, !1), Ura:R(b, 4, !1)};
  a && (c.l = b);
  return c;
};
Eu.prototype.j = function() {
  var a = new W;
  Gu(this, a);
  return a.h();
};
var Gu = function(a, b) {
  var c;
  c = Q(a, 3);
  null != c && b.Z(3, c);
  c = Q(a, 4);
  null != c && b.Z(4, c);
};
var Hu = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Hu, N);
Hu.prototype.g = function(a) {
  return Iu(a, this);
};
var Iu = function(a, b) {
  var c = {ka:Q(b, 1), Da:Q(b, 2)};
  a && (c.l = b);
  return c;
};
Hu.prototype.j = function() {
  var a = new W;
  Ju(this, a);
  return a.h();
};
var Ju = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
};
Hu.prototype.da = function() {
  return Q(this, 1);
};
Hu.prototype.Y = function(a) {
  S(this, 1, a);
};
Hu.prototype.D = function() {
  return Q(this, 2);
};
Hu.prototype.qb = function(a) {
  S(this, 2, a);
};
var Lu = function(a) {
  O(this, a, 0, -1, Ku, null);
};
v(Lu, N);
var Ku = [1];
Lu.prototype.g = function(a) {
  return Mu(a, this);
};
var Mu = function(a, b) {
  var c = {ura:Q(b, 1)};
  a && (c.l = b);
  return c;
};
Lu.prototype.j = function() {
  var a = new W;
  Nu(this, a);
  return a.h();
};
var Nu = function(a, b) {
  a = a.F2();
  0 < a.length && b.$c(1, a);
};
Lu.prototype.F2 = function() {
  return Q(this, 1);
};
var Ou = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Ou, N);
Ou.prototype.g = function(a) {
  return Pu(a, this);
};
var Pu = function(a, b) {
  var c = {rwa:Q(b, 1), Jva:Q(b, 2), Mza:Q(b, 3)};
  a && (c.l = b);
  return c;
};
Ou.prototype.j = function() {
  var a = new W;
  Qu(this, a);
  return a.h();
};
var Qu = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.Rd(1, c);
  c = Q(a, 2);
  null != c && b.Rd(2, c);
  c = Q(a, 3);
  null != c && b.Rd(3, c);
};
Ou.prototype.LT = function(a) {
  S(this, 1, a);
};
Ou.prototype.DT = function(a) {
  S(this, 2, a);
};
Ou.prototype.qU = function(a) {
  S(this, 3, a);
};
var Su = function(a) {
  O(this, a, 0, -1, Ru, null);
};
v(Su, N);
var Ru = [8];
Su.prototype.g = function(a) {
  return Tu(a, this);
};
var Tu = function(a, b) {
  var c = {Bxa:Q(b, 1), name:Q(b, 2), mediaType:Q(b, 3), Sxa:Q(b, 4), bitRate:Q(b, 5), sampleRate:Q(b, 6), channelCount:Q(b, 7), yxa:P(b.zB(), Uu, a)};
  a && (c.l = b);
  return c;
};
Su.prototype.j = function() {
  var a = new W;
  Vu(this, a);
  return a.h();
};
var Vu = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.A(3, c);
  c = Q(a, 4);
  null != c && b.s(4, c);
  c = Q(a, 5);
  null != c && b.s(5, c);
  c = Q(a, 6);
  null != c && b.s(6, c);
  c = Q(a, 7);
  null != c && b.s(7, c);
  c = a.zB();
  0 < c.length && b.B(8, c, Wu);
};
d = Su.prototype;
d.g4 = function() {
  return Q(this, 1);
};
d.Aga = function(a) {
  S(this, 1, a);
};
d.getName = function() {
  return Q(this, 2);
};
d.Ro = function(a) {
  S(this, 2, a);
};
d.$ = function() {
  return Q(this, 3);
};
d.uc = function(a) {
  S(this, 3, a);
};
d.vh = function() {
  S(this, 3, void 0);
};
d.m2 = function() {
  return Q(this, 5);
};
d.nea = function(a) {
  S(this, 5, a);
};
d.M4 = function() {
  return Q(this, 6);
};
d.bha = function(a) {
  S(this, 6, a);
};
d.y2 = function() {
  return Q(this, 7);
};
d.zea = function(a) {
  S(this, 7, a);
};
d.zB = function() {
  return U(this, Xu, 8);
};
d.yga = function(a) {
  Vr(this, 8, a);
};
var Xu = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Xu, N);
Xu.prototype.g = function(a) {
  return Uu(a, this);
};
var Uu = function(a, b) {
  var c = {key:Q(b, 1), value:Q(b, 2)};
  a && (c.l = b);
  return c;
};
Xu.prototype.j = function() {
  var a = new W;
  Wu(this, a);
  return a.h();
};
var Wu = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
};
Xu.prototype.getKey = function() {
  return Q(this, 1);
};
Xu.prototype.Ffa = function(a) {
  S(this, 1, a);
};
Xu.prototype.zc = function() {
  return Q(this, 2);
};
Xu.prototype.Hs = function(a) {
  S(this, 2, a);
};
var Yu = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Yu, N);
Yu.prototype.g = function(a) {
  return Zu(a, this);
};
var Zu = function(a, b) {
  var c = {Zza:Q(b, 1), Zua:Q(b, 2), uza:Q(b, 3), tag:Q(b, 4)};
  a && (c.l = b);
  return c;
};
Yu.prototype.j = function() {
  var a = new W;
  $u(this, a);
  return a.h();
};
var $u = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.s(4, c);
};
d = Yu.prototype;
d.sj = function() {
  return Q(this, 1);
};
d.zha = function(a) {
  S(this, 1, a);
};
d.Kn = function() {
  return Q(this, 2);
};
d.Gfa = function(a) {
  S(this, 2, a);
};
d.Yq = function() {
  return Q(this, 3);
};
d.mha = function(a) {
  S(this, 3, a);
};
d.dr = function() {
  return Q(this, 4);
};
d.Bha = function(a) {
  S(this, 4, a);
};
var av = function(a) {
  O(this, a, 0, -1, null, null);
};
v(av, N);
av.prototype.g = function(a) {
  return bv(a, this);
};
var bv = function(a, b) {
  var c = {component:Q(b, 1), protocol:Q(b, 2), ip:Q(b, 3), port:Q(b, 4), type:Q(b, 5), priority:Q(b, 6), network:Q(b, 7), Lta:Q(b, 8), mediaType:Q(b, 9)};
  a && (c.l = b);
  return c;
};
av.prototype.j = function() {
  var a = new W;
  cv(this, a);
  return a.h();
};
var cv = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.s(4, c);
  c = Q(a, 5);
  null != c && b.A(5, c);
  c = Q(a, 6);
  null != c && b.s(6, c);
  c = Q(a, 7);
  null != c && b.f(7, c);
  c = Q(a, 8);
  null != c && b.s(8, c);
  c = Q(a, 9);
  null != c && b.A(9, c);
};
d = av.prototype;
d.Wk = function() {
  return Q(this, 1);
};
d.Hea = function(a) {
  S(this, 1, a);
};
d.Th = function() {
  return Q(this, 2);
};
d.Bs = function(a) {
  S(this, 2, a);
};
d.In = function() {
  return Q(this, 3);
};
d.Bfa = function(a) {
  S(this, 3, a);
};
d.vb = function() {
  return Q(this, 4);
};
d.To = function(a) {
  S(this, 4, a);
};
d.wO = function() {
  return null != Q(this, 4);
};
d.W = function() {
  return Q(this, 5);
};
d.gh = function(a) {
  S(this, 5, a);
};
d.el = function() {
  return Q(this, 6);
};
d.aU = function(a) {
  S(this, 6, a);
};
d.Rq = function() {
  return Q(this, 7);
};
d.kga = function(a) {
  S(this, 7, a);
};
d.Hn = function() {
  return Q(this, 8);
};
d.rfa = function(a) {
  S(this, 8, a);
};
d.$ = function() {
  return Q(this, 9);
};
d.uc = function(a) {
  S(this, 9, a);
};
d.vh = function() {
  S(this, 9, void 0);
};
var dv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(dv, N);
dv.prototype.g = function(a) {
  return ev(a, this);
};
var ev = function(a, b) {
  var c = {id:Q(b, 1), uri:Q(b, 2), mediaType:Q(b, 3)};
  a && (c.l = b);
  return c;
};
dv.prototype.j = function() {
  var a = new W;
  fv(this, a);
  return a.h();
};
var fv = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.A(3, c);
};
d = dv.prototype;
d.getId = function() {
  return Q(this, 1);
};
d.ox = function(a) {
  S(this, 1, a);
};
d.Rn = function() {
  return Q(this, 2);
};
d.Lha = function(a) {
  S(this, 2, a);
};
d.$ = function() {
  return Q(this, 3);
};
d.uc = function(a) {
  S(this, 3, a);
};
d.vh = function() {
  S(this, 3, void 0);
};
var gv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(gv, N);
gv.prototype.g = function(a) {
  return hv(a, this);
};
var hv = function(a, b) {
  var c = {sessionId:Q(b, 1)};
  a && (c.l = b);
  return c;
};
gv.prototype.j = function() {
  var a = new W;
  iv(this, a);
  return a.h();
};
var iv = function(a, b) {
  a = Q(a, 1);
  null != a && b.f(1, a);
};
gv.prototype.K = function() {
  return Q(this, 1);
};
gv.prototype.ib = function(a) {
  S(this, 1, a);
};
var jv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(jv, N);
jv.prototype.g = function(a) {
  return kv(a, this);
};
var kv = function(a, b) {
  var c = {ka:Q(b, 1), Da:Q(b, 2), sourceId:Q(b, 3)};
  a && (c.l = b);
  return c;
};
jv.prototype.j = function() {
  var a = new W;
  lv(this, a);
  return a.h();
};
var lv = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
};
d = jv.prototype;
d.da = function() {
  return Q(this, 1);
};
d.Y = function(a) {
  S(this, 1, a);
};
d.D = function() {
  return Q(this, 2);
};
d.qb = function(a) {
  S(this, 2, a);
};
d.Ga = function() {
  return Q(this, 3);
};
d.fh = function(a) {
  S(this, 3, a);
};
var mv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(mv, N);
mv.prototype.g = function(a) {
  return nv(a, this);
};
var nv = function(a, b) {
  var c = {ka:Q(b, 1), sessionId:Q(b, 2), MU:Q(b, 3), direction:Q(b, 4)};
  a && (c.l = b);
  return c;
};
mv.prototype.j = function() {
  var a = new W;
  ov(this, a);
  return a.h();
};
var ov = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.A(4, c);
};
d = mv.prototype;
d.da = function() {
  return Q(this, 1);
};
d.Y = function(a) {
  S(this, 1, a);
};
d.K = function() {
  return Q(this, 2);
};
d.ib = function(a) {
  S(this, 2, a);
};
d.yc = function() {
  return Q(this, 3);
};
d.om = function(a) {
  S(this, 3, a);
};
d.Uc = function() {
  return Q(this, 4);
};
d.zf = function(a) {
  S(this, 4, a);
};
var pv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(pv, N);
pv.prototype.g = function(a) {
  return qv(a, this);
};
var qv = function(a, b) {
  var c = {reason:Q(b, 1)};
  a && (c.l = b);
  return c;
};
pv.prototype.j = function() {
  var a = new W;
  rv(this, a);
  return a.h();
};
var rv = function(a, b) {
  a = Q(a, 1);
  null != a && b.A(1, a);
};
var sv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(sv, N);
sv.prototype.g = function(a) {
  return tv(a, this);
};
var tv = function(a, b) {
  var c = {name:Q(b, 1), domain:Q(b, 2), Aqa:Q(b, 3), $sa:Q(b, 4)};
  a && (c.l = b);
  return c;
};
sv.prototype.j = function() {
  var a = new W;
  uv(this, a);
  return a.h();
};
var uv = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
};
d = sv.prototype;
d.getName = function() {
  return Q(this, 1);
};
d.Ro = function(a) {
  S(this, 1, a);
};
d.ij = function() {
  return Q(this, 2);
};
d.Po = function(a) {
  S(this, 2, a);
};
d.qv = function() {
  return null != Q(this, 2);
};
var vv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(vv, N);
vv.prototype.g = function(a) {
  return wv(a, this);
};
var wv = function(a, b) {
  var c = {Wxa:Q(b, 1), wz:Q(b, 2)};
  a && (c.l = b);
  return c;
};
vv.prototype.j = function() {
  var a = new W;
  xv(this, a);
  return a.h();
};
var xv = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
};
vv.prototype.o4 = function() {
  return Q(this, 1);
};
vv.prototype.Hga = function(a) {
  S(this, 1, a);
};
vv.prototype.Bn = function() {
  return Q(this, 2);
};
vv.prototype.No = function(a) {
  S(this, 2, a);
};
var yv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(yv, N);
yv.prototype.g = function(a) {
  return zv(a, this);
};
var zv = function(a, b) {
  var c = {channelId:Q(b, 1), format:Q(b, 2), ssrc:Q(b, 3), label:Q(b, 4), type:Q(b, 5)};
  a && (c.l = b);
  return c;
};
yv.prototype.j = function() {
  var a = new W;
  Av(this, a);
  return a.h();
};
var Av = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
  c = Q(a, 3);
  null != c && b.s(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = Q(a, 5);
  null != c && b.A(5, c);
};
d = yv.prototype;
d.getChannelId = function() {
  return Q(this, 1);
};
d.Aea = function(a) {
  S(this, 1, a);
};
d.ZA = function() {
  return Q(this, 2);
};
d.nfa = function(a) {
  S(this, 2, a);
};
d.Wh = function() {
  return Q(this, 3);
};
d.WF = function(a) {
  S(this, 3, a);
};
d.Ph = function() {
  return Q(this, 4);
};
d.Hfa = function(a) {
  S(this, 4, a);
};
d.W = function() {
  return Q(this, 5);
};
d.gh = function(a) {
  S(this, 5, a);
};
var Bv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Bv, N);
Bv.prototype.g = function(a) {
  return Cv(a, this);
};
var Cv = function(a, b) {
  var c = {action:Q(b, 1), Fza:Q(b, 2)};
  a && (c.l = b);
  return c;
};
Bv.prototype.j = function() {
  var a = new W;
  Dv(this, a);
  return a.h();
};
var Dv = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.s(2, c);
};
var Ev = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Ev, N);
Ev.prototype.g = function(a) {
  return Fv(a, this);
};
var Fv = function(a, b) {
  var c = {Da:Q(b, 1), SR:R(b, 2, 0)};
  a && (c.l = b);
  return c;
};
Ev.prototype.j = function() {
  var a = new W;
  Gv(this, a);
  return a.h();
};
var Gv = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
};
Ev.prototype.D = function() {
  return Q(this, 1);
};
Ev.prototype.qb = function(a) {
  S(this, 1, a);
};
var X = function(a) {
  O(this, a, 0, -1, null, null);
};
v(X, N);
X.prototype.g = function(a) {
  return Y(a, this);
};
var Y = function(a, b) {
  var c, e = {version:Q(b, 1), $qa:Q(b, 2), aua:(c = b.Hq()) && Hv(a, c)};
  a && (e.l = b);
  return e;
};
X.prototype.j = function() {
  var a = new W;
  Z(this, a);
  return a.h();
};
var Z = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.ha(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = a.Hq();
  null != c && b.b(3, c, Iv);
};
d = X.prototype;
d.Uf = function() {
  return Q(this, 1);
};
d.setVersion = function(a) {
  S(this, 1, a);
};
d.Hq = function() {
  return T(this, Jv, 3);
};
d.JF = function(a) {
  V(this, 3, a);
};
d.XI = function() {
  this.JF(void 0);
};
var Jv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Jv, N);
Jv.prototype.g = function(a) {
  return Hv(a, this);
};
var Hv = function(a, b) {
  var c = {cookie:Q(b, 1), timestamp:Q(b, 2)};
  a && (c.l = b);
  return c;
};
Jv.prototype.j = function() {
  var a = new W;
  Iv(this, a);
  return a.h();
};
var Iv = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.ha(2, c);
};
d = Jv.prototype;
d.J2 = function() {
  return Q(this, 1);
};
d.Lea = function(a) {
  S(this, 1, a);
};
d.WI = function() {
  S(this, 1, void 0);
};
d.yC = function() {
  return null != Q(this, 1);
};
d.Xh = function() {
  return Q(this, 2);
};
d.Bx = function(a) {
  S(this, 2, a);
};
var Kv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Kv, N);
Kv.prototype.g = function(a) {
  return Lv(a, this);
};
var Lv = function(a, b) {
  var c = {height:Q(b, 1), width:Q(b, 2), Eta:Q(b, 3)};
  a && (c.l = b);
  return c;
};
Kv.prototype.j = function() {
  var a = new W;
  Mv(this, a);
  return a.h();
};
var Mv = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(1, c);
  c = Q(a, 2);
  null != c && b.s(2, c);
  c = Q(a, 3);
  null != c && b.s(3, c);
};
d = Kv.prototype;
d.Hg = function() {
  return Q(this, 1);
};
d.lm = function(a) {
  S(this, 1, a);
};
d.Ng = function() {
  return Q(this, 2);
};
d.qm = function(a) {
  S(this, 2, a);
};
d.m3 = function() {
  return Q(this, 3);
};
d.sT = function(a) {
  S(this, 3, a);
};
var Ov = function(a) {
  O(this, a, "cl:plu", -1, Nv, null);
};
v(Ov, N);
var Nv = [1];
Ov.prototype.g = function(a) {
  var b = {yva:P(this.Zu(), Pv, a)};
  a && (b.l = this);
  return b;
};
Ov.prototype.j = function() {
  var a = new W, b;
  b = this.Zu();
  0 < b.length && a.B(1, b, Qv);
  return a.h();
};
es("cl:plu", Ov);
Ov.prototype.Zu = function() {
  return U(this, Rv, 1);
};
Ov.prototype.CT = function(a) {
  Vr(this, 1, a);
};
var Rv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Rv, N);
Rv.prototype.g = function(a) {
  return Pv(a, this);
};
var Pv = function(a, b) {
  var c = {Vpa:Q(b, 1), sessionId:Q(b, 2), timestamp:Q(b, 3)};
  a && (c.l = b);
  return c;
};
Rv.prototype.j = function() {
  var a = new W;
  Qv(this, a);
  return a.h();
};
var Qv = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.Rd(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.ha(3, c);
};
d = Rv.prototype;
d.MK = function() {
  return Q(this, 1);
};
d.iea = function(a) {
  S(this, 1, a);
};
d.K = function() {
  return Q(this, 2);
};
d.ib = function(a) {
  S(this, 2, a);
};
d.Xh = function() {
  return Q(this, 3);
};
d.Bx = function(a) {
  S(this, 3, a);
};
var Sv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Sv, N);
Sv.prototype.g = function(a) {
  return Tv(a, this);
};
var Tv = function(a, b) {
  var c = {EAa:R(b, 1, ""), value:b.m5()};
  a && (c.l = b);
  return c;
}, Uv = function(a, b) {
  for (;b.Zc() && !b.jd();) {
    switch(b.Wb) {
      case 1:
        var c = b.Ta();
        a.Kha(c);
        break;
      case 2:
        c = b.CE();
        a.Hs(c);
        break;
      default:
        b.wc();
    }
  }
  return a;
};
Sv.prototype.j = function() {
  var a = new W;
  Vv(this, a);
  return a.h();
};
var Vv = function(a, b) {
  var c;
  c = a.TN();
  0 < c.length && b.f(1, c);
  c = a.n5();
  0 < c.length && b.wp(2, c);
};
d = Sv.prototype;
d.TN = function() {
  return R(this, 1, "");
};
d.Kha = function(a) {
  S(this, 1, a);
};
d.zc = function() {
  return R(this, 2, "");
};
d.m5 = function() {
  return Sr(this.zc());
};
d.n5 = function() {
  var a;
  a = this.zc();
  null == a || a instanceof Uint8Array || (n(a) ? a = Wj(a) : (Ya("Cannot coerce to Uint8Array: " + ra(a)), a = null));
  return a;
};
d.Hs = function(a) {
  S(this, 2, a);
};
d.getTypeName = function() {
  return this.TN().split("/").pop();
};
var Wv = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Wv, N);
Wv.prototype.g = function(a) {
  return Xv(a, this);
};
var Xv = function(a, b) {
  var c = {jza:R(b, 1, 0), Iwa:R(b, 2, 0)};
  a && (c.l = b);
  return c;
}, Yv = function(a, b) {
  for (;b.Zc() && !b.jd();) {
    switch(b.Wb) {
      case 1:
        var c = b.zR();
        a.setSeconds(c);
        break;
      case 2:
        c = b.DE();
        a.dga(c);
        break;
      default:
        b.wc();
    }
  }
  return a;
};
Wv.prototype.j = function() {
  var a = new W;
  Zv(this, a);
  return a.h();
};
var Zv = function(a, b) {
  var c;
  c = a.getSeconds();
  0 !== c && b.ha(1, c);
  c = a.S3();
  0 !== c && b.s(2, c);
};
Wv.prototype.getSeconds = function() {
  return R(this, 1, 0);
};
Wv.prototype.setSeconds = function(a) {
  S(this, 1, a);
};
Wv.prototype.S3 = function() {
  return R(this, 2, 0);
};
Wv.prototype.dga = function(a) {
  S(this, 2, a);
};
var $v = function(a) {
  O(this, a, 0, -1, null, null);
};
v($v, N);
$v.prototype.g = function(a) {
  var b = {cs:R(this, 1, "")};
  a && (b.l = this);
  return b;
};
$v.prototype.j = function() {
  var a = new W, b;
  b = this.Ad();
  0 < b.length && a.f(1, b);
  return a.h();
};
$v.prototype.Ad = function() {
  return R(this, 1, "");
};
$v.prototype.Ke = function(a) {
  S(this, 1, a);
};
var aw = function(a) {
  O(this, a, 0, -1, null, null);
};
v(aw, N);
aw.prototype.g = function(a) {
  var b = {deviceId:R(this, 1, "")};
  a && (b.l = this);
  return b;
};
aw.prototype.j = function() {
  var a = new W, b;
  b = this.getDeviceId();
  0 < b.length && a.f(1, b);
  return a.h();
};
aw.prototype.getDeviceId = function() {
  return R(this, 1, "");
};
aw.prototype.iT = function(a) {
  S(this, 1, a);
};
var bw = function(a) {
  O(this, a, 0, -1, null, null);
};
v(bw, N);
bw.prototype.g = function(a) {
  var b = {Sg:R(this, 1, "")};
  a && (b.l = this);
  return b;
};
bw.prototype.j = function() {
  var a = new W, b;
  b = this.La();
  0 < b.length && a.f(1, b);
  return a.h();
};
bw.prototype.La = function() {
  return R(this, 1, "");
};
bw.prototype.Oa = function(a) {
  S(this, 1, a);
};
var cw = function(a) {
  O(this, a, 0, -1, null, null);
};
v(cw, N);
cw.prototype.g = function(a) {
  var b = {Sg:R(this, 1, "")};
  a && (b.l = this);
  return b;
};
cw.prototype.j = function() {
  var a = new W, b;
  b = this.La();
  0 < b.length && a.f(1, b);
  return a.h();
};
cw.prototype.La = function() {
  return R(this, 1, "");
};
cw.prototype.Oa = function(a) {
  S(this, 1, a);
};
var dw = function(a) {
  O(this, a, 0, -1, null, null);
};
v(dw, N);
dw.prototype.g = function(a) {
  var b = {Sg:R(this, 1, "")};
  a && (b.l = this);
  return b;
};
dw.prototype.j = function() {
  var a = new W, b;
  b = this.La();
  0 < b.length && a.f(1, b);
  return a.h();
};
dw.prototype.La = function() {
  return R(this, 1, "");
};
dw.prototype.Oa = function(a) {
  S(this, 1, a);
};
var fw = function(a) {
  O(this, a, 0, -1, ew, null);
};
v(fw, N);
var ew = [7, 13, 16, 17];
fw.prototype.g = function(a) {
  return gw(a, this);
};
var gw = function(a, b) {
  var c, e = {I8:R(b, 1, ""), displayName:R(b, 2, ""), pI:R(b, 3, ""), Xua:R(b, 4, 0), joined:R(b, 5, !1), V0:R(b, 6, ""), F8:Q(b, 7), Vta:R(b, 8, !1), fsa:R(b, 9, !1), gsa:R(b, 10, ""), r_:R(b, 11, 0), Wpa:(c = b.Lu()) && hw(a, c), aya:Q(b, 13), Xpa:(c = b.NK()) && iw(a, c), Npa:R(b, 15, !1), tya:P(b.iN(), jw, a), xya:P(b.lN(), kw, a)};
  a && (e.l = b);
  return e;
}, mw = function(a) {
  a = new Ks(a);
  var b = new fw;
  return lw(b, a);
}, lw = function(a, b) {
  for (;b.Zc() && !b.jd();) {
    switch(b.Wb) {
      case 1:
        var c = b.Ta();
        a.bk(c);
        break;
      case 2:
        c = b.Ta();
        a.kx(c);
        break;
      case 3:
        c = b.Ta();
        a.xF(c);
        break;
      case 4:
        c = b.Zg();
        a.xs(c);
        break;
      case 5:
        c = b.$r();
        a.zT(c);
        break;
      case 6:
        c = b.Ta();
        a.kT(c);
        break;
      case 7:
        c = b.Ta();
        a.RH(c);
        break;
      case 8:
        c = b.$r();
        a.tfa(c);
        break;
      case 9:
        c = b.$r();
        a.Uea(c);
        break;
      case 10:
        c = b.Ta();
        a.Vea(c);
        break;
      case 11:
        c = b.Zg();
        a.ZS(c);
        break;
      case 12:
        c = new nw;
        b.Fe(c, ow);
        a.SS(c);
        break;
      case 13:
        c = b.AR();
        a.Jga(c);
        break;
      case 14:
        c = new pw;
        b.Fe(c, qw);
        a.jea(c);
        break;
      case 15:
        c = b.$r();
        a.gea(c);
        break;
      case 16:
        c = new rw;
        b.Fe(c, sw);
        a.vY(c);
        break;
      case 17:
        c = new tw;
        b.Fe(c, uw);
        a.wY(c);
        break;
      default:
        b.wc();
    }
  }
  return a;
};
fw.prototype.j = function() {
  var a = new W;
  vw(this, a);
  return a.h();
};
var vw = function(a, b) {
  var c;
  c = a.df();
  0 < c.length && b.f(1, c);
  c = a.Lh();
  0 < c.length && b.f(2, c);
  c = a.HA();
  0 < c.length && b.f(3, c);
  c = a.Kq();
  0.0 !== c && b.A(4, c);
  (c = a.Wu()) && b.Z(5, c);
  c = a.GL();
  0 < c.length && b.f(6, c);
  c = a.nB();
  0 < c.length && b.$c(7, c);
  (c = a.o3()) && b.Z(8, c);
  (c = a.Q2()) && b.Z(9, c);
  c = a.R2();
  0 < c.length && b.f(10, c);
  c = a.jL();
  0.0 !== c && b.A(11, c);
  c = a.Lu();
  null != c && b.b(12, c, ww);
  c = a.q4();
  0 < c.length && b.kW(13, c);
  c = a.NK();
  null != c && b.b(14, c, xw);
  (c = a.Y1()) && b.Z(15, c);
  c = a.iN();
  0 < c.length && b.B(16, c, yw);
  c = a.lN();
  0 < c.length && b.B(17, c, zw);
};
d = fw.prototype;
d.df = function() {
  return R(this, 1, "");
};
d.bk = function(a) {
  S(this, 1, a);
};
d.Lh = function() {
  return R(this, 2, "");
};
d.kx = function(a) {
  S(this, 2, a);
};
d.HA = function() {
  return R(this, 3, "");
};
d.xF = function(a) {
  S(this, 3, a);
};
d.Kq = function() {
  return R(this, 4, 0);
};
d.xs = function(a) {
  S(this, 4, a);
};
d.Wu = function() {
  return R(this, 5, !1);
};
d.zT = function(a) {
  S(this, 5, a);
};
d.GL = function() {
  return R(this, 6, "");
};
d.kT = function(a) {
  S(this, 6, a);
};
d.nB = function() {
  return Q(this, 7);
};
d.rx = function(a) {
  S(this, 7, a || []);
};
d.RH = function(a, b) {
  Tr(this, 7, a, b);
};
d.o3 = function() {
  return R(this, 8, !1);
};
d.tfa = function(a) {
  S(this, 8, a);
};
d.Q2 = function() {
  return R(this, 9, !1);
};
d.Uea = function(a) {
  S(this, 9, a);
};
d.R2 = function() {
  return R(this, 10, "");
};
d.Vea = function(a) {
  S(this, 10, a);
};
d.jL = function() {
  return R(this, 11, 0);
};
d.ZS = function(a) {
  S(this, 11, a);
};
d.Lu = function() {
  return T(this, nw, 12);
};
d.SS = function(a) {
  V(this, 12, a);
};
d.q4 = function() {
  return Q(this, 13);
};
d.Jga = function(a) {
  S(this, 13, a || []);
};
d.NK = function() {
  return T(this, pw, 14);
};
d.jea = function(a) {
  V(this, 14, a);
};
d.Y1 = function() {
  return R(this, 15, !1);
};
d.gea = function(a) {
  S(this, 15, a);
};
d.iN = function() {
  return U(this, rw, 16);
};
d.vY = function(a, b) {
  return Wr(this, 16, a, rw, b);
};
d.lN = function() {
  return U(this, tw, 17);
};
d.wY = function(a, b) {
  return Wr(this, 17, a, tw, b);
};
var nw = function(a) {
  O(this, a, 0, -1, null, null);
};
v(nw, N);
nw.prototype.g = function(a) {
  return hw(a, this);
};
var hw = function(a, b) {
  var c = {uqa:R(b, 1, "")};
  a && (c.l = b);
  return c;
}, ow = function(a, b) {
  for (;b.Zc() && !b.jd();) {
    switch(b.Wb) {
      case 1:
        var c = b.Ta();
        a.tea(c);
        break;
      default:
        b.wc();
    }
  }
  return a;
};
nw.prototype.j = function() {
  var a = new W;
  ww(this, a);
  return a.h();
};
var ww = function(a, b) {
  a = a.TK();
  0 < a.length && b.f(1, a);
};
nw.prototype.TK = function() {
  return R(this, 1, "");
};
nw.prototype.tea = function(a) {
  S(this, 1, a);
};
var pw = function(a) {
  O(this, a, 0, -1, null, null);
};
v(pw, N);
pw.prototype.g = function(a) {
  return iw(a, this);
};
var iw = function(a, b) {
  var c = {Cwa:R(b, 1, "")};
  a && (c.l = b);
  return c;
}, qw = function(a, b) {
  for (;b.Zc() && !b.jd();) {
    switch(b.Wb) {
      case 1:
        var c = b.Ta();
        a.bga(c);
        break;
      default:
        b.wc();
    }
  }
  return a;
};
pw.prototype.j = function() {
  var a = new W;
  xw(this, a);
  return a.h();
};
var xw = function(a, b) {
  a = a.R3();
  0 < a.length && b.f(1, a);
};
pw.prototype.R3 = function() {
  return R(this, 1, "");
};
pw.prototype.bga = function(a) {
  S(this, 1, a);
};
var rw = function(a) {
  O(this, a, 0, -1, null, null);
};
v(rw, N);
rw.prototype.g = function(a) {
  return jw(a, this);
};
var jw = function(a, b) {
  var c = {cs:R(b, 1, ""), zpa:R(b, 2, 0)};
  a && (c.l = b);
  return c;
}, sw = function(a, b) {
  for (;b.Zc() && !b.jd();) {
    switch(b.Wb) {
      case 1:
        var c = b.Ta();
        a.Ke(c);
        break;
      case 2:
        c = b.Zg();
        a.bea(c);
        break;
      default:
        b.wc();
    }
  }
  return a;
};
rw.prototype.j = function() {
  var a = new W;
  yw(this, a);
  return a.h();
};
var yw = function(a, b) {
  var c;
  c = a.Ad();
  0 < c.length && b.f(1, c);
  c = a.T1();
  0.0 !== c && b.A(2, c);
};
rw.prototype.Ad = function() {
  return R(this, 1, "");
};
rw.prototype.Ke = function(a) {
  S(this, 1, a);
};
rw.prototype.T1 = function() {
  return R(this, 2, 0);
};
rw.prototype.bea = function(a) {
  S(this, 2, a);
};
var tw = function(a) {
  O(this, a, 0, -1, null, null);
};
v(tw, N);
tw.prototype.g = function(a) {
  return kw(a, this);
};
var kw = function(a, b) {
  var c = {cs:R(b, 1, ""), Cra:R(b, 2, 0)};
  a && (c.l = b);
  return c;
}, uw = function(a, b) {
  for (;b.Zc() && !b.jd();) {
    switch(b.Wb) {
      case 1:
        var c = b.Ta();
        a.Ke(c);
        break;
      case 2:
        c = b.Zg();
        a.Kea(c);
        break;
      default:
        b.wc();
    }
  }
  return a;
};
tw.prototype.j = function() {
  var a = new W;
  zw(this, a);
  return a.h();
};
var zw = function(a, b) {
  var c;
  c = a.Ad();
  0 < c.length && b.f(1, c);
  c = a.I2();
  0.0 !== c && b.A(2, c);
};
tw.prototype.Ad = function() {
  return R(this, 1, "");
};
tw.prototype.Ke = function(a) {
  S(this, 1, a);
};
tw.prototype.I2 = function() {
  return R(this, 2, 0);
};
tw.prototype.Kea = function(a) {
  S(this, 2, a);
};
var Bw = function(a) {
  O(this, a, 0, -1, Aw, null);
};
v(Bw, N);
var Aw = [5];
Bw.prototype.g = function(a) {
  return Cw(a, this);
};
var Cw = function(a, b) {
  var c, e = {Sg:R(b, 1, ""), sD:R(b, 2, ""), K8:R(b, 3, ""), Apa:R(b, 4, 0), Dxa:P(b.XM(), Dw, a), Cqa:(c = b.YK()) && Ew(a, c), G8:R(b, 7, "")};
  a && (e.l = b);
  return e;
}, Jw = function(a) {
  a = new Ks(a);
  for (var b = new Bw;a.Zc() && !a.jd();) {
    switch(a.Wb) {
      case 1:
        var c = a.Ta();
        b.Oa(c);
        break;
      case 2:
        c = a.Ta();
        b.eh(c);
        break;
      case 3:
        c = a.Ta();
        b.JT(c);
        break;
      case 4:
        c = a.Zg();
        b.cea(c);
        break;
      case 5:
        c = new Fw;
        a.Fe(c, Gw);
        b.sY(c);
        break;
      case 6:
        c = new Hw;
        a.Fe(c, Iw);
        b.VS(c);
        break;
      case 7:
        c = a.Ta();
        b.MF(c);
        break;
      default:
        a.wc();
    }
  }
  return b;
};
Bw.prototype.j = function() {
  var a = new W;
  Kw(this, a);
  return a.h();
};
var Kw = function(a, b) {
  var c;
  c = a.La();
  0 < c.length && b.f(1, c);
  c = a.lj();
  0 < c.length && b.f(2, c);
  c = a.vB();
  0 < c.length && b.f(3, c);
  c = a.U1();
  0.0 !== c && b.A(4, c);
  c = a.XM();
  0 < c.length && b.B(5, c, Lw);
  c = a.YK();
  null != c && b.b(6, c, Mw);
  c = a.tB();
  0 < c.length && b.f(7, c);
};
d = Bw.prototype;
d.La = function() {
  return R(this, 1, "");
};
d.Oa = function(a) {
  S(this, 1, a);
};
d.lj = function() {
  return R(this, 2, "");
};
d.eh = function(a) {
  S(this, 2, a);
};
d.vB = function() {
  return R(this, 3, "");
};
d.JT = function(a) {
  S(this, 3, a);
};
d.U1 = function() {
  return R(this, 4, 0);
};
d.cea = function(a) {
  S(this, 4, a);
};
d.XM = function() {
  return U(this, Fw, 5);
};
d.sY = function(a, b) {
  return Wr(this, 5, a, Fw, b);
};
d.YK = function() {
  return T(this, Hw, 6);
};
d.VS = function(a) {
  V(this, 6, a);
};
d.tB = function() {
  return R(this, 7, "");
};
d.MF = function(a) {
  S(this, 7, a);
};
var Fw = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Fw, N);
Fw.prototype.g = function(a) {
  return Dw(a, this);
};
var Dw = function(a, b) {
  var c = {eba:R(b, 1, ""), pin:R(b, 2, ""), gca:R(b, 3, ""), O7:R(b, 4, "")};
  a && (c.l = b);
  return c;
}, Gw = function(a, b) {
  for (;b.Zc() && !b.jd();) {
    switch(b.Wb) {
      case 1:
        var c = b.Ta();
        a.YT(c);
        break;
      case 2:
        c = b.Ta();
        a.Bga(c);
        break;
      case 3:
        c = b.Ta();
        a.fU(c);
        break;
      case 4:
        c = b.Ta();
        a.mm(c);
        break;
      default:
        b.wc();
    }
  }
  return a;
};
Fw.prototype.j = function() {
  var a = new W;
  Lw(this, a);
  return a.h();
};
var Lw = function(a, b) {
  var c;
  c = a.dv();
  0 < c.length && b.f(1, c);
  c = a.j4();
  0 < c.length && b.f(2, c);
  c = a.mN();
  0 < c.length && b.f(3, c);
  c = a.Yk();
  0 < c.length && b.f(4, c);
};
d = Fw.prototype;
d.dv = function() {
  return R(this, 1, "");
};
d.YT = function(a) {
  S(this, 1, a);
};
d.j4 = function() {
  return R(this, 2, "");
};
d.Bga = function(a) {
  S(this, 2, a);
};
d.mN = function() {
  return R(this, 3, "");
};
d.fU = function(a) {
  S(this, 3, a);
};
d.Yk = function() {
  return R(this, 4, "");
};
d.mm = function(a) {
  S(this, 4, a);
};
var Nw = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Nw, N);
Nw.prototype.g = function(a) {
  return Ow(a, this);
};
var Ow = function(a, b) {
  var c = {Vxa:R(b, 1, ""), sqa:R(b, 2, "")};
  a && (c.l = b);
  return c;
}, Pw = function(a, b) {
  for (;b.Zc() && !b.jd();) {
    switch(b.Wb) {
      case 1:
        var c = b.Ta();
        a.$T(c);
        break;
      case 2:
        c = b.Ta();
        a.sea(c);
        break;
      default:
        b.wc();
    }
  }
  return a;
};
Nw.prototype.j = function() {
  var a = new W;
  Qw(this, a);
  return a.h();
};
var Qw = function(a, b) {
  var c;
  c = a.n4();
  0 < c.length && b.f(1, c);
  c = a.s2();
  0 < c.length && b.f(2, c);
};
Nw.prototype.n4 = function() {
  return R(this, 1, "");
};
Nw.prototype.$T = function(a) {
  S(this, 1, a);
};
Nw.prototype.s2 = function() {
  return R(this, 2, "");
};
Nw.prototype.sea = function(a) {
  S(this, 2, a);
};
var Rw = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Rw, N);
Rw.prototype.g = function(a) {
  return Sw(a, this);
};
var Sw = function(a, b) {
  var c = {bca:R(b, 1, 0), cs:R(b, 2, "")};
  a && (c.l = b);
  return c;
}, Tw = function(a, b) {
  for (;b.Zc() && !b.jd();) {
    switch(b.Wb) {
      case 1:
        var c = b.Zg();
        a.eU(c);
        break;
      case 2:
        c = b.Ta();
        a.Ke(c);
        break;
      default:
        b.wc();
    }
  }
  return a;
};
Rw.prototype.j = function() {
  var a = new W;
  Uw(this, a);
  return a.h();
};
var Uw = function(a, b) {
  var c;
  c = a.fv();
  0.0 !== c && b.A(1, c);
  c = a.Ad();
  0 < c.length && b.f(2, c);
};
Rw.prototype.fv = function() {
  return R(this, 1, 0);
};
Rw.prototype.eU = function(a) {
  S(this, 1, a);
};
Rw.prototype.Ad = function() {
  return R(this, 2, "");
};
Rw.prototype.Ke = function(a) {
  S(this, 2, a);
};
var Hw = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Hw, N);
Hw.prototype.g = function(a) {
  return Ew(a, this);
};
var Ew = function(a, b) {
  var c, e = {nba:(c = b.dl()) && Ow(a, c), vya:(c = b.kN()) && Sw(a, c), zqa:R(b, 3, ""), mxa:R(b, 4, ""), G8:R(b, 5, "")};
  a && (e.l = b);
  return e;
}, Iw = function(a, b) {
  for (;b.Zc() && !b.jd();) {
    switch(b.Wb) {
      case 1:
        var c = new Nw;
        b.Fe(c, Pw);
        a.ux(c);
        break;
      case 2:
        c = new Rw;
        b.Fe(c, Tw);
        a.Pga(c);
        break;
      case 3:
        c = b.Ta();
        a.wea(c);
        break;
      case 4:
        c = b.Ta();
        a.sga(c);
        break;
      case 5:
        c = b.Ta();
        a.MF(c);
        break;
      default:
        b.wc();
    }
  }
  return a;
};
Hw.prototype.j = function() {
  var a = new W;
  Mw(this, a);
  return a.h();
};
var Mw = function(a, b) {
  var c;
  c = a.dl();
  null != c && b.b(1, c, Qw);
  c = a.kN();
  null != c && b.b(2, c, Uw);
  c = a.t2();
  0 < c.length && b.f(3, c);
  c = a.b4();
  0 < c.length && b.f(4, c);
  c = a.tB();
  0 < c.length && b.f(5, c);
};
d = Hw.prototype;
d.dl = function() {
  return T(this, Nw, 1);
};
d.ux = function(a) {
  V(this, 1, a);
};
d.kN = function() {
  return T(this, Rw, 2);
};
d.Pga = function(a) {
  V(this, 2, a);
};
d.t2 = function() {
  return R(this, 3, "");
};
d.wea = function(a) {
  S(this, 3, a);
};
d.b4 = function() {
  return R(this, 4, "");
};
d.sga = function(a) {
  S(this, 4, a);
};
d.tB = function() {
  return R(this, 5, "");
};
d.MF = function(a) {
  S(this, 5, a);
};
var Vw = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Vw, N);
d = Vw.prototype;
d.g = function(a) {
  var b = {sD:R(this, 1, ""), K8:R(this, 2, "")};
  a && (b.l = this);
  return b;
};
d.j = function() {
  var a = new W, b;
  b = this.lj();
  0 < b.length && a.f(1, b);
  b = this.vB();
  0 < b.length && a.f(2, b);
  return a.h();
};
d.lj = function() {
  return R(this, 1, "");
};
d.eh = function(a) {
  S(this, 1, a);
};
d.vB = function() {
  return R(this, 2, "");
};
d.JT = function(a) {
  S(this, 2, a);
};
var Ww = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Ww, N);
Ww.prototype.g = function(a) {
  return Xw(a, this);
};
var Xw = function(a, b) {
  var c = {version:R(b, 1, 0)};
  a && (c.l = b);
  return c;
};
Ww.prototype.j = function() {
  var a = new W;
  Yw(this, a);
  return a.h();
};
var Yw = function(a, b) {
  a = a.Uf();
  0 !== a && b.ha(1, a);
};
Ww.prototype.Uf = function() {
  return R(this, 1, 0);
};
Ww.prototype.setVersion = function(a) {
  S(this, 1, a);
};
var Zw = function(a, b) {
  $c.call(this);
  this.nb = a;
  b && this.xga(b);
};
v(Zw, $c);
Zw.prototype.xga = function(a) {
  if (this.cR) {
    throw Error("[fava.component.DomServices] Owner document already initialized");
  }
  this.pu = (this.cR = a) ? new xk(vk(a)) : Da || (Da = new xk);
  this.oy = new Ws(sk(a));
  this.oy.tx(this.nb.jq);
  this.rE = new Xs(this.pu);
  this.rE.start();
};
Zw.prototype.aa = function() {
  this.pu = this.cR = null;
  this.oy && (this.oy.ob(), this.oy = null);
  ad(this.rE);
  this.rE = null;
};
var $w = function() {
  $c.call(this);
};
v($w, $c);
$w.prototype.a = Nf("fava.debug.ErrorReporter");
$w.prototype.init = function() {
};
new $w;
var bx = function() {
  this.cg = new ax;
  this.Ut = null;
  this.version = 0;
};
v(bx, gq);
d = bx.prototype;
d.Eea = function(a) {
  this.Ut = a;
};
d.k1 = function(a) {
  $d(t(a.Pia, a));
};
d.Xe = function(a) {
  return this.$p(0, a);
};
d.Ye = function(a) {
  return this.$p(1, a);
};
d.ue = function(a, b) {
  return this.$p(2, a, b);
};
d.Ze = function(a) {
  return this.$p(3, [a]);
};
d.Gf = function() {
  return this.$p(4, []);
};
d.$p = function(a, b, c) {
  return new cx(this, a, b, c);
};
var ax = function() {
  F.call(this);
};
v(ax, Ls);
ax.prototype.execute = function(a) {
  a.execute();
};
var cx = function(a, b, c) {
  this.Cj = a;
  this.YD = b;
  this.ns = c;
  this.version = null;
  this.Qb = G();
  this.fK = !1;
};
d = cx.prototype;
d.execute = function() {
  this.fK = !0;
  this.Cj.k1(this);
};
d.P2 = function() {
  if (!this.Cj.Ut) {
    return null;
  }
  switch(this.YD) {
    case 0:
      return this.ns;
    case 1:
      var a = [];
      x(this.lK(this.ns), function(b, e) {
        null === b || a.push(this.ns[e]);
      }, this);
      return a;
    case 2:
    case 3:
      var b = this.lK(this.ns);
      xb(b, sa);
      return b;
    case 4:
      return this.Cj.Ut.get();
    default:
      return null;
  }
};
d.lK = function(a) {
  return y(a, this.E1, this);
};
d.E1 = function(a) {
  var b = this.Cj.Ut;
  if (!b) {
    return null;
  }
  var c = b.gd(a);
  return nb(b.get(), function(a) {
    return c.equals(b.gd(a));
  });
};
d.Pia = function(a, b) {
  if (a = a || this.P2()) {
    if (l(b)) {
      b > this.Cj.version && (this.Cj.version = b);
    } else {
      switch(this.YD) {
        case 0:
        case 1:
        case 2:
          this.Cj.version++;
      }
    }
    this.Qb.resolve(new Ip(a, l(b) ? b : this.Cj.version));
  } else {
    this.Qb.reject("Could not perform operation");
  }
};
d.vA = function(a) {
  this.Qb.reject(a);
};
d.dG = function(a) {
  this.version = a;
};
d.getPromise = function() {
  return this.Qb.promise;
};
d.kj = Jd(0);
d.Qo = pa;
d.tj = Jd(0);
d.pm = pa;
d.rv = function() {
  return this.fK;
};
d.lC = function() {
  return this.YD.toString();
};
d.OB = function() {
  return this.ns.toString();
};
var dx = function(a) {
  O(this, a, 0, -1, null, null);
};
v(dx, N);
dx.prototype.g = function(a) {
  return ex(a, this);
};
var ex = function(a, b) {
  var c = {hAa:R(b, 1, 30000), Uya:R(b, 2, 1000), gAa:R(b, 3, 60000), JAa:R(b, 4, 64), Tya:R(b, 5, 4), dAa:R(b, 6, 300000), Kva:R(b, 7, 0), Mya:R(b, 8, 60000), xta:R(b, 9, 90000), $za:R(b, 11, !1), qqa:R(b, 12, 10000)};
  a && (c.l = b);
  return c;
};
dx.prototype.j = function() {
  var a = new W;
  fx(this, a);
  return a.h();
};
var fx = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(1, c);
  c = Q(a, 2);
  null != c && b.s(2, c);
  c = Q(a, 3);
  null != c && b.s(3, c);
  c = Q(a, 4);
  null != c && b.s(4, c);
  c = Q(a, 5);
  null != c && b.s(5, c);
  c = Q(a, 6);
  null != c && b.s(6, c);
  c = Q(a, 7);
  null != c && b.s(7, c);
  c = Q(a, 8);
  null != c && b.s(8, c);
  c = Q(a, 9);
  null != c && b.s(9, c);
  c = Q(a, 11);
  null != c && b.Z(11, c);
  c = Q(a, 12);
  null != c && b.s(12, c);
};
d = dx.prototype;
d.ON = function() {
  return R(this, 1, 30000);
};
d.I4 = function() {
  return R(this, 2, 1000);
};
d.b5 = function() {
  return R(this, 3, 60000);
};
d.YN = function() {
  return R(this, 4, 64);
};
d.H4 = function() {
  return R(this, 5, 4);
};
d.jC = function() {
  return R(this, 6, 300000);
};
d.xM = function() {
  return R(this, 7, 0);
};
d.ET = function(a) {
  S(this, 7, a);
};
d.tN = function() {
  return R(this, 8, 60000);
};
d.Cs = function(a) {
  S(this, 8, a);
};
d.k3 = function() {
  return R(this, 9, 90000);
};
d.a5 = function() {
  return R(this, 11, !1);
};
var gx = function() {
  $c.call(this);
  this.a = Nf("realtime.diagnostics.DiagnosticDataService");
  this.bD = 0;
  this.uh = new H;
};
v(gx, $c);
var hx = function(a) {
  a.ql(wr) || a.oi(wr, new gx);
};
gx.prototype.aa = function() {
  var a = [];
  this.uh.forEach(function(b) {
    a.push(b.key);
  }, this);
  a.length && I(this.a, "Leftover callbacks for diagnostic data collection: " + a.join(", "));
  gx.X.aa.call(this);
};
gx.prototype.lb = function(a, b) {
  this.bD++;
  this.uh.set(this.bD, {key:a, Nt:b});
  return this.bD;
};
gx.prototype.PE = function(a) {
  null != a && this.uh.remove(a);
};
gx.prototype.na = function() {
  var a = {};
  this.isDisposed() || this.uh.forEach(function(b, c) {
    var e = b.Nt.call();
    a[Pb(a, b.key) ? b.key + c : b.key] = e;
  }, this);
  return a;
};
var ix = function() {
  this.a = Nf("realtime.media.api.webrtc.sdp.Parser");
  this.Yd = "session";
  this.ct = new H;
  this.BG = new H;
  this.CG = new H;
  this.jw = "";
  this.Vi = new Uq("ICE", "", "");
  this.te = [];
  this.rd = null;
  this.Tt = new H;
  this.aq = [];
  this.Io = [];
  this.Hx = new H;
  this.Ix = new H;
  this.GE = this.qF = !0;
};
d = ix.prototype;
d.Tca = function() {
  this.dc = null;
  this.Vi = new Uq("ICE", "", "");
  this.fS();
  this.Yd = "session";
  this.ct.clear();
  this.BG.clear();
  this.CG.clear();
};
d.fS = function() {
  this.jw = "";
  this.te = [];
  this.rd = null;
  this.Tt.clear();
  this.Io = [];
  this.Hx.clear();
  this.Ix.clear();
  this.GE = this.qF = !0;
};
d.parse = function(a) {
  this.dc && this.Tca();
  this.dc = new Ar;
  x(a.split(/\r?\n/), function(a) {
    Ha(a) || this.Naa(a);
  }, this);
  this.uJ();
  this.dc = this.dc.kt(this.Vi).UV(this.aq);
  J(this.a, "Parsed session data: " + this.dc.na());
  return this.dc;
};
d.Naa = function(a) {
  var b = Va(a, "=", 1), c = b[0];
  2 == b.length && 1 == c.length || this.jc("Invalid SDP line: " + a);
  var e = b[1].split(" "), f = e.shift().split(":");
  2 < f.length && this.jc("Invalid key parts: " + f);
  b = f[0];
  e = new hq(a, b, f[1], e);
  switch(this.Np(c, iq)) {
    case "m":
      this.uJ();
      this.fS();
      this.Yd = this.Np(b, jq);
      break;
    case "a":
      this.baa(e);
      break;
    default:
      this.Hp(this.ct, this.Yd, a);
  }
  return e;
};
d.baa = function(a) {
  switch(a.key) {
    case "group":
      this.yaa(a);
      break;
    case "mid":
      this.Gaa(a);
      break;
    case "ice-ufrag":
      this.Daa(a);
      break;
    case "ice-pwd":
      this.Caa(a);
      break;
    case "ice-options":
      this.Baa(a);
      break;
    case "fingerprint":
      this.waa(a);
      break;
    case "setup":
      this.Paa(a);
      break;
    case "extmap":
      this.Aaa(a);
      break;
    case "crypto":
      this.eE(a);
      break;
    case "rtpmap":
      this.dE(a);
      break;
    case "sctpmap":
      this.Maa(a);
      break;
    case "fmtp":
      this.oaa(a);
      break;
    case "rtcp-fb":
      this.paa(a);
      break;
    case "ssrc-group":
      this.hE(a);
      break;
    case "ssrc":
      this.yo(a);
      break;
    case "sendrecv":
    case "sendonly":
    case "recvonly":
    case "inactive":
      this.uaa(a);
      break;
    default:
      this.Hp(this.ct, this.Yd, a.Xb);
  }
};
d.yaa = function(a) {
  a.Ac || this.jc("Invalid group line: " + a.Xb);
  "BUNDLE" != a.Ac && this.Hp(this.ct, this.Yd, a.Xb);
};
d.Gaa = function(a) {
  this.jw = w(a.Ac, "Invalid mid line: " + a.Xb);
};
d.Daa = function(a) {
  var b = w(a.Ac, "Empty ice ufrag line: " + a.Xb);
  /^[0-9a-zA-Z\+\/]{4,256}$/.test(b) || this.jc("Invalid ice ufrag line: " + a.Xb);
  this.Vi = this.Vi.iW(b);
};
d.Caa = function(a) {
  var b = w(a.Ac, "Empty ice pwd line: " + a.Xb);
  /^[0-9a-zA-Z\+\/]{22,256}$/.test(b) || this.jc("Invalid ice pwd line: " + a.Xb);
  this.Vi = this.Vi.fW(b);
};
d.Baa = function(a) {
  var b = a.Ac;
  b || this.jc("Empty ice options line: " + a.Xb);
  J(this.a, "Ignoring unrecognized ice option: " + b);
};
d.waa = function(a) {
  var b = a.Ac;
  b || this.jc("Empty fingerprint hash type: " + a.Xb);
  1 != a.params.length && this.jc("Malformed fingerprint hash value: " + a.Xb);
  this.Vi = this.Vi.ZV(b + " " + a.params[0]);
};
d.Paa = function(a) {
  "actpass" != a.Ac && this.jc("Setup attribute was '" + a.Ac + "' instead of expected 'actpass'");
};
d.Aaa = function(a) {
  var b = parseInt(a.Ac, 10), c = a.params[0];
  (isNaN(b) || !c || 1 > a.params.length) && this.jc("Invalid extmap line: " + a.Xb);
  a = (new tq).lt(c).it(b);
  (b = mq[this.Yd]) && a.kb(b);
  this.Io.push(a.ga());
};
d.eE = function(a) {
  var b = parseInt(a.Ac, 10);
  (isNaN(b) || 2 > a.params.length) && this.jc("Invalid crypto line: " + a.Xb);
  a = (new rq).ZG(this.Np(a.params.shift(), qq)).VG(a.params.shift()).hW(a.params.join(" ")).$G(b).ga();
  this.aq.push(a);
};
d.dE = function(a) {
  var b = a.params[0].split("/"), c = b[0];
  (!a.Ac || 1 != a.params.length || 2 > b.length) && this.jc("Invalid rtpmap line: " + a.Xb);
  a = (new Rq).kb(mq[this.Yd]).Oc(c).ke(parseInt(a.Ac, 10)).Qe(b[2] ? parseInt(b[2], 10) : 1).Re(parseInt(b[1], 10));
  this.te.push(a.ga());
};
d.Maa = function(a) {
  "application" != this.Yd && "data" != this.Yd && this.jc("Sctpmap lines with incompatible media type: " + this.Yd);
  var b = parseInt(a.Ac, 10);
  (!b || 2 > a.params.length) && this.jc("Invalid sctpmap line: " + a.Xb);
  var c = a.params[0];
  a = parseInt(a.params[1], 10);
  this.rd = (new vq).ry(b).Oc(c).WG(a).ga();
};
d.oaa = function(a) {
  var b = a.Ac;
  a = a.params.join(" ").split(";");
  this.Tt.Ra(b) && this.jc("Duplicated fmtp line for payload " + b);
  this.Tt.set(b, a);
};
d.paa = function(a) {
  this.Hp(this.BG, parseInt(a.Ac, 10), a.Xb);
};
d.hE = function(a) {
  var b = w(a.Ac, "ssrc-group missing semantics: " + a.Xb);
  1 > a.params.length && this.jc("Invalid ssrc-group line: " + a.Xb);
  a = a.params.map(Number);
  var c = (new Tq).sy(b).qg(a).ga();
  x(a, function(a) {
    var b = this.Hx.get(a);
    b ? b.push(c) : b = [c];
    this.Hx.set(a, b);
  }, this);
};
d.yo = function(a) {
  (!a.Ac || 1 > a.params.length) && this.jc("Invalid ssrc line: " + a.Xb);
  var b = parseInt(a.Ac, 10), c = this.Z4(b), e = a.params[0].split(":");
  switch(e[0]) {
    case "cname":
      w(e[1], "Invalid ssrc cname line: " + a.Xb);
      c.mh(e[1]);
      break;
    case "msid":
      w(e[1] && a.params[1], "Invalid ssrc msid line: " + a.Xb);
      c.Km(a.params[1]).up(e[1]).cW(a.params[1]);
      break;
    default:
      this.Hp(this.CG, b, a.Xb);
  }
};
d.uaa = function(a) {
  if ("recvonly" == a.key || "inactive" == a.key) {
    this.qF = !1;
  }
  if ("sendonly" == a.key || "inactive" == a.key) {
    this.GE = !1;
  }
};
d.Z4 = function(a) {
  var b = this.Ix.get(a);
  if (b) {
    return b;
  }
  var b = this.Hx.get(a), c = [];
  b ? x(b, function(a) {
    c = c.concat(a.ze());
  }, this) : (c.push(a), b = []);
  b = (new er).kb(mq[this.Yd]).qg(c).YG(b);
  this.AY(b, c);
  return b;
};
d.AY = function(a, b) {
  x(b, function(b) {
    this.Ix.set(b, a);
  }, this);
};
d.t7 = function(a) {
  if (!Fa(a.getName(), "H264")) {
    return !1;
  }
  var b = !1;
  a.AB().forEach(function(a) {
    Fa(a.getKey(), "packetization-mode") && 1 == a.zc() && (b = !0);
  });
  return b;
};
d.uJ = function() {
  if ("session" != this.Yd) {
    var a = y(jb(this.Ix.T(), function(a, c, e) {
      return c == e.indexOf(a) && a.Vd();
    }), function(a) {
      return a.ga();
    });
    this.Tt.forEach(function(a, c) {
      var b = mb(this.te, function(a) {
        return c == a.od;
      });
      -1 == b && this.jc("fmtp line has no corresponding codec line, pt=" + c);
      a = a.reduce(function(a, b) {
        b = b.trim().split("=");
        return 2 != b.length ? a : (new Rq(a)).jt(b[0], b[1]).ga();
      }, this.te[b]);
      this.te[b] = a;
    }, this);
    this.te = jb(this.te, function(a, c, e) {
      var b = !0;
      e.forEach(function(e, f) {
        f != c && e.getName() == a.getName() && "v" == a.$() && (b = b && this.t7(a));
      }, this);
      return b;
    }, this);
    0 < this.te.length && this.rd && this.jc("Media " + this.jw + " contained both RTP and SCTP Settings.");
    a = (new br(mq[this.Yd], this.te, this.Io)).Qd(a).qy(this.jw).vp(this.rd).lh(this.qF).Jm(this.GE);
    switch(this.Yd) {
      case "audio":
        this.dc = this.dc.Bf(a);
        break;
      case "video":
        this.dc = this.dc.Se(a);
        break;
      case "application":
      case "data":
        this.dc = this.dc.Cf(a);
    }
  }
};
d.Np = function(a, b) {
  w(Qb(b, a), "Value '" + a + "' not found in enum type.");
  return w(a);
};
d.jc = function(a) {
  a = Error(a);
  Pf(this.a, "Parsing failed.", a);
  throw a;
};
d.faa = function(a) {
  a = a.candidate.trim().split(" ");
  var b = a[0].split(":")[1], c = Number(a[1]), e = this.Np(a[2].toUpperCase(), Zp), f = Number(a[3]), h = a[4], k = Number(a[5]);
  w("typ" == a[6]);
  var p = lq[this.Np(a[7], kq)], r;
  x(a, function(a, b) {
    "generation" == a && (r = b + 1);
  });
  switch(p) {
    case "LOCAL":
      break;
    case "STUN":
    case "RELAY":
    case "PEER_REFLEX":
      w("raddr" == a[8]);
      var A = a[9];
      w("rport" == a[10]);
      var C = Number(a[11]);
      break;
    default:
      this.jc("Unknown candidate type: " + p);
  }
  var da = 0;
  r && (da = Number(a[r]));
  return new Yp(c, f, p, e, h, k, b, da, "", A, C);
};
d.Hp = function(a, b, c) {
  var e = a.get(b);
  e || (e = [], a.set(b, e));
  e.push(c);
};
d.XN = function(a) {
  return this.ct.get(a);
};
d.g5 = function(a) {
  return this.BG.get(a);
};
d.i5 = function(a) {
  return this.CG.get(a);
};
var kx = function(a) {
  O(this, a, "hc:rc", -1, jx, null);
};
v(kx, N);
var jx = [7];
kx.prototype.g = function(a) {
  var b = {time:Q(this, 1), cza:Q(this, 2), ka:Q(this, 3), wba:Q(this, 4), oda:Q(this, 5), Lj:Q(this, 6), tza:P(this.rj(), lx, a), Gb:Q(this, 8), clientId:Q(this, 9), WU:Q(this, 10), q_:Q(this, 11), sD:Q(this, 12), Sg:Q(this, 13)};
  a && (b.l = this);
  return b;
};
kx.prototype.j = function() {
  var a = new W, b;
  b = Q(this, 1);
  null != b && a.ha(1, b);
  b = Q(this, 2);
  null != b && a.f(2, b);
  b = Q(this, 3);
  null != b && a.f(3, b);
  b = Q(this, 4);
  null != b && a.f(4, b);
  b = Q(this, 5);
  null != b && a.A(5, b);
  b = Q(this, 6);
  null != b && a.f(6, b);
  b = this.rj();
  0 < b.length && a.B(7, b, mx);
  b = Q(this, 8);
  null != b && a.s(8, b);
  b = Q(this, 9);
  null != b && a.A(9, b);
  b = Q(this, 10);
  null != b && a.f(10, b);
  b = Q(this, 11);
  null != b && a.f(11, b);
  b = Q(this, 12);
  null != b && a.f(12, b);
  b = Q(this, 13);
  null != b && a.f(13, b);
  return a.h();
};
es("hc:rc", kx);
d = kx.prototype;
d.getTime = function() {
  return Q(this, 1);
};
d.setTime = function(a) {
  S(this, 1, a);
};
d.L4 = function() {
  return Q(this, 2);
};
d.aha = function(a) {
  S(this, 2, a);
};
d.da = function() {
  return Q(this, 3);
};
d.Y = function(a) {
  S(this, 3, a);
};
d.Sh = function() {
  return Q(this, 4);
};
d.setProperty = function(a) {
  S(this, 4, a);
};
d.Lg = function() {
  return Q(this, 5);
};
d.wx = function(a) {
  S(this, 5, a);
};
d.nj = function() {
  return Q(this, 6);
};
d.zi = function(a) {
  S(this, 6, a);
};
d.rj = function() {
  return U(this, nx, 7);
};
d.kha = function(a) {
  Vr(this, 7, a);
};
d.XH = function(a, b) {
  return Wr(this, 7, a, nx, b);
};
d.Dn = function() {
  return Q(this, 8);
};
d.ws = function(a) {
  S(this, 8, a);
};
d.dd = function() {
  return Q(this, 9);
};
d.hg = function(a) {
  S(this, 9, a);
};
d.kv = function() {
  return Q(this, 10);
};
d.Vo = function(a) {
  S(this, 10, a);
};
d.yd = function() {
  return Q(this, 11);
};
d.Oo = function(a) {
  S(this, 11, a);
};
d.lj = function() {
  return Q(this, 12);
};
d.eh = function(a) {
  S(this, 12, a);
};
d.La = function() {
  return Q(this, 13);
};
d.Oa = function(a) {
  S(this, 13, a);
};
var nx = function(a) {
  O(this, a, 0, -1, null, null);
};
v(nx, N);
nx.prototype.g = function(a) {
  return lx(a, this);
};
var lx = function(a, b) {
  var c = {Dya:Q(b, 1), localId:Q(b, 2)};
  a && (c.l = b);
  return c;
};
nx.prototype.j = function() {
  var a = new W;
  mx(this, a);
  return a.h();
};
var mx = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
};
nx.prototype.NB = function() {
  return Q(this, 1);
};
nx.prototype.Rga = function(a) {
  S(this, 1, a);
};
nx.prototype.qM = function() {
  return Q(this, 2);
};
nx.prototype.Mfa = function(a) {
  S(this, 2, a);
};
var ox = function() {
  F.call(this);
};
v(ox, Qs);
var qx = function() {
  $c.call(this);
  this.w1 = [];
  this.Px = new px(t(this.tda, this));
  this.pa(this.Px);
};
v(qx, $c);
qx.prototype.refresh = function() {
  this.Px.KR();
};
qx.prototype.tda = function(a) {
  x(this.w1, function(b) {
    a = b.filter(a);
  });
  return a;
};
var px = function(a) {
  F.call(this);
  this.z1 = a;
  this.Rj = [];
  this.tA = !1;
};
v(px, Ts);
px.prototype.vS = function(a) {
  this.Rj = z(a);
  this.KR();
};
px.prototype.KR = function() {
  this.tA || (this.tA = !0, $d(this.E0, this));
};
px.prototype.E0 = function() {
  this.tA = !1;
  this.dispatchEvent(new Us(this.z1(this.Rj)));
};
var rx = {vma:"INITIAL", Koa:"STARTING", Joa:"STARTED", yma:"INPROGRESS", PAUSED:"PAUSED", STOPPED:"STOPPED", FINISHED:"FINISHED"}, sx = function(a, b, c) {
  E.call(this, "K");
  this.state = a;
  this.Gb = b;
  this.Yi = c;
};
v(sx, E);
var tx = function(a, b, c) {
  var e = a.S();
  Ss.call(this, e.D(), e.getId(), b, c);
  this.Mt = a;
};
v(tx, Ss);
var ux = function(a, b, c) {
  Ss.call(this, b.D(), b.Ga(), b, c);
  this.H = a;
  this.eS = !1;
};
v(ux, Ss);
ux.prototype.K = function() {
  return this.H;
};
ux.prototype.Vga = function(a) {
  a != this.eS && (this.eS = a, this.dispatchEvent("M"));
};
var vx = function(a) {
  O(this, a, 0, -1, null, null);
};
v(vx, N);
vx.prototype.g = function(a) {
  var b = {Sg:Q(this, 1)};
  a && (b.l = this);
  return b;
};
vx.prototype.j = function() {
  var a = new W, b;
  b = Q(this, 1);
  null != b && a.f(1, b);
  return a.h();
};
vx.prototype.La = function() {
  return Q(this, 1);
};
vx.prototype.Oa = function(a) {
  S(this, 1, a);
};
var wx = function(a) {
  O(this, a, 0, -1, null, null);
};
v(wx, N);
d = wx.prototype;
d.g = function(a) {
  var b = {Sg:Q(this, 1), I8:Q(this, 2)};
  a && (b.l = this);
  return b;
};
d.j = function() {
  var a = new W, b;
  b = Q(this, 1);
  null != b && a.f(1, b);
  b = Q(this, 2);
  null != b && a.f(2, b);
  return a.h();
};
d.La = function() {
  return Q(this, 1);
};
d.Oa = function(a) {
  S(this, 1, a);
};
d.df = function() {
  return Q(this, 2);
};
d.bk = function(a) {
  S(this, 2, a);
};
var xx = function(a) {
  O(this, a, 0, -1, null, null);
};
v(xx, N);
d = xx.prototype;
d.g = function(a) {
  var b = {Sg:Q(this, 1), cs:Q(this, 2)};
  a && (b.l = this);
  return b;
};
d.j = function() {
  var a = new W, b;
  b = Q(this, 1);
  null != b && a.f(1, b);
  b = Q(this, 2);
  null != b && a.f(2, b);
  return a.h();
};
d.La = function() {
  return Q(this, 1);
};
d.Oa = function(a) {
  S(this, 1, a);
};
d.Ad = function() {
  return Q(this, 2);
};
d.Ke = function(a) {
  S(this, 2, a);
};
var yx = function(a, b) {
  F.call(this);
  this.Ce = b;
  this.a = Nf("realtime.network.ApiaryClient");
  a.load(t(this.p9, this), t(this.q9, this));
  this.ZE = 0;
  this.ri = new H;
  this.pi = new H;
  J(this.a, "Created apiary client");
};
v(yx, F);
var zx = function(a, b, c, e) {
  var f = "\r\n\r\n--" + e + "\r\n";
  e = "\r\n\r\n--" + e + "--\r\n";
  var h = f + "Content-Type: " + a + "\r\n\r\n" + (b && !n(b) ? b.Ua() : b);
  x(c, function(a) {
    h += f + "Content-Type: " + a.type + "\r\nContent-transfer-encoding: " + a.encoding + "\r\n\r\n" + a.data + "\r\n\r\n";
  });
  return h += e;
};
d = yx.prototype;
d.Vk = null;
d.pr = function() {
  return null != this.Vk;
};
d.p9 = function(a) {
  this.Vk = a;
  this.dispatchEvent("N");
  J(this.a, "Apiary client loaded");
};
d.q9 = function() {
  this.isDisposed() || (this.Vk = null, J(this.a, "Apiary client unloaded"));
};
d.aa = function() {
  var a = this.ri.ub();
  x(a, ve);
  a = this.pi.ub();
  x(a, ve);
};
d.request = function(a) {
  this.aF(a);
};
d.aF = function(a) {
  if (!this.isDisposed() && !a.Rp) {
    if (this.pr()) {
      a.TF(this.ZE++);
      this.Ce && this.Ce.onRequest(a);
      var b = a.vq(), c = a.Xk(), e = a.mC(), f = a.SA();
      a.er() && (e.alt = "protojson", f = "application/json+protobuf", null != b && (b = JSON.parse(b.Ua())));
      var h = a.Yy;
      if (0 < h.length) {
        w("POST" == a.Iq(), "Media upload requires the POST method");
        w(null != b, "Media upload requires a request body");
        c["MIME-Version"] = "1.0";
        var k = "END_OF_PART_" + Sa();
        c["Content-Type"] = 'multipart/related; boundary="' + k + '"';
        b = zx(f, b, h, k);
      } else {
        null != b && (c["Content-Type"] = f);
      }
      c["Accept-Language"] = a.Yk();
      b = {method:a.Iq(), path:a.Vc(), params:e, headers:c, body:b};
      Ha(Qa(a.qj())) || (b.root = a.qj());
      J(this.a, "Sending request " + a);
      try {
        var p = this.Vk.client.request(b);
        a.ck("p");
        null != a.Xi && this.pi.set(a.qd, ue(t(this.$E, this, a), a.Xi || void 0));
        p.execute(t(this.sC, this, a));
      } catch (r) {
        Pf(this.a, "Failed to enqueue request " + tf(b), r), this.Og(a, new fr("fatal", "request_queuing", null, null), null, 0);
      }
    } else {
      I(this.a, "Request when client is not ready!");
    }
  }
};
d.$E = function(a) {
  I(this.a, "Request timed out: " + a);
  this.Og(a, new fr("retry", "deadline_exceeded", null, null), null, 0);
};
d.sC = function(a, b, c) {
  if (this.isDisposed() || !a.$n()) {
    this.gs(a);
  } else {
    var e = null, f = "ok", h;
    this.gs(a);
    var k = null, p = null;
    try {
      var r = sf(c), A = r.gapiRequest.data.body, k = r.gapiRequest.data.headers, e = Xp(A);
    } catch (C) {
      I(this.a, "Failed to parse the response for request " + a + ": " + c, C), h = "response_decoding", f = "retry";
    }
    null != b && null != b.error && (p = b.error.code, I(this.a, "Request failed: " + a + ": " + b.error.code + " - " + b.error.message), h = "network_or_frontend", f = "retry", 400 == b.error.code ? (h = "bad_request", f = "fatal") : 401 == b.error.code ? (h = "unauthorized", f = "fatal") : 402 == b.error.code ? (h = "payment_required", f = "fatal") : 403 == b.error.code && (h = "forbidden", f = "fatal"));
    "ok" == f && null != e.error && (I(this.a, "Server returned an error for request " + a + ": " + e.error.code + ' "' + e.error.message + '": ' + e.error.errors[0].Yi), h = "backend", f = "retry");
    "ok" == f && ((b = a.er()) && !ua(e) || !b && !wa(e)) && (I(this.a, "Apiary returned bad response type for request " + a + ": expected " + (b ? "Array" : "Object") + ", received " + ra(e)), h = "response_format", f = "retry");
    if ("ok" == f && (a.ck("o"), a.Xj.callback(e), "o" != a.eg)) {
      switch(h = "response_callback", a.eg) {
        case "r":
          I(this.a, "Error processing response for request " + a + ": should retry.");
          f = "retry";
          break;
        case "d":
          I(this.a, "Fatal error processing response for request " + a);
          f = "fatal";
          break;
        default:
          Pf(this.a, "Unexpected response state from processing the response for " + a + ": " + a.eg);
      }
    }
    if ("ok" == f) {
      J(this.a, "Response processed successfully for request " + a), this.Ce && this.Ce.UQ(a, w(e));
    } else {
      b = 0;
      if (null != k && null != k["Retry-After"]) {
        try {
          b = 1000 * parseInt(k["Retry-After"], 10), b = Math.min(Math.max(b, 0), 72E5);
        } catch (C) {
        }
      }
      this.Og(a, new fr(f, w(h), p, e), c, b);
    }
  }
  this.Tw(a);
};
d.gs = function(a) {
  var b = this.ri.get(a.qd);
  null != b && (this.ri.remove(a.qd), ve(b));
};
d.Tw = function(a) {
  var b = this.pi.get(a.qd);
  null != b && (this.pi.remove(a.qd), ve(b));
};
d.Og = function(a, b, c, e) {
  this.isDisposed() || !a.$n() && "r" != a.eg || (this.Ce && this.Ce.onError(a, b, c), c = a.MB(), "retry" == b.status && 0 < c ? (J(this.a, "Scheduling retry for request " + a), this.ri.set(a.qd, ue(t(this.request, this, a), Math.max(a.hz(), e)))) : (a.cancel(), a.Xj.cd(b)));
};
var Bx = function(a, b) {
  var c = a.vq(), c = c && c instanceof N ? c.Ua() : c, e = a.Xk(), f = a.mC(), h = a.SA();
  a.er() && (f.alt = "protojson", h = "application/json+protobuf");
  var k = a.Yy;
  if (0 < k.length) {
    w("POST" == a.Iq(), "Media upload requires the POST method");
    w(null != c, "Media upload requires a request body");
    w(n(c), "Media upload requires a string request body");
    e["MIME-Version"] = "1.0";
    var p = "END_OF_PART_" + Sa();
    e["Content-Type"] = 'multipart/related; boundary="' + p + '"';
    c = Ax(h, c, k, p);
  } else {
    "application/x-www-form-urlencoded" == h && (c = Vc(f), f = {}), null != c && (e["Content-Type"] = h);
  }
  e["Accept-Language"] = a.Yk();
  null != b && Lb(b, function(a, b) {
    null != e[b] || (e[b] = a);
  });
  b = {method:a.Iq(), path:a.Vc(), params:f, headers:e, body:c};
  Ha(Qa(a.qj())) || (b.root = a.qj());
  return b;
}, Ax = function(a, b, c, e) {
  var f = "\r\n\r\n--" + e + "\r\n";
  e = "\r\n\r\n--" + e + "--\r\n";
  var h = f + "Content-Type: " + a + "\r\n\r\n" + b;
  x(c, function(a) {
    h += f + "Content-Type: " + a.type + "\r\nContent-transfer-encoding: " + a.encoding + "\r\n\r\n" + a.data + "\r\n\r\n";
  });
  return h += e;
};
var Cx = function(a, b, c) {
  a = Wc(a, encodeURIComponent("$ct"), c);
  if (null == navigator.sendBeacon || !navigator.sendBeacon(a, b)) {
    c = a;
    var e = "POST", f = b;
    a = Wc(a, encodeURIComponent("$httpMethod"), "POST");
    a = Wc(a, encodeURIComponent("$req"), b);
    2048 > a.length && (c = a, e = "GET", f = null);
    try {
      var h = Rf.Yp();
      h.open(e, c, !1);
      h.send(f);
    } catch (k) {
      b = Nf("realtime.network.Beacon"), Pf(b, "Cannot fallback from sendBeacon", k);
    }
  }
};
var Dx = function(a) {
  return {q0:function(b) {
    return a.then(function(a) {
      b.uT("X-Goog-AuthUser", a.toString());
      b.uT("Authorization", Xq([]));
    });
  }};
};
var Ex = function(a, b) {
  F.call(this);
  this.aJ = !1;
  this.Jw = G();
  this.Pd = a;
  this.Pd.Jw.promise.then(function() {
    this.Jw.resolve(null);
    this.aJ = !0;
    this.dispatchEvent("O");
  }, null, this);
  this.Ce = b;
  this.a = Nf("realtime.network.RetryClient");
  this.ZE = 0;
  this.iu = [];
  this.ri = new H;
  this.pi = new H;
};
v(Ex, F);
d = Ex.prototype;
d.pr = function() {
  return this.aJ;
};
d.aa = function() {
  Ex.X.aa.call(this);
  var a = this.ri.ub();
  x(a, ve);
  a = this.pi.ub();
  x(a, ve);
};
d.Qy = function(a) {
  this.iu.push(a);
  return this;
};
d.r0 = function(a) {
  x(this.iu, function(b) {
    b.asa(a);
  }, this);
};
d.request = function(a) {
  this.aF(a);
};
d.aF = function(a) {
  if (!this.isDisposed() && !a.Rp) {
    if (this.pr()) {
      a.TF(this.ZE++);
      this.Ce && this.Ce.onRequest(a);
      try {
        J(this.a, "Sending request, path = " + a.Vc() + ", requestNum = " + a.qd), a.ck("p"), null != a.Xi && this.pi.set(a.qd, ue(t(this.$E, this, a), a.Xi || void 0)), this.r0(a), this.Pd.sendRequest(a, null).then(Ba(this.sC, a), Ba(this.A6, a), this);
      } catch (b) {
        Pf(this.a, "Failed to enqueue Apiary request: ", b), this.Og(a, new gr("fatal", "request_queuing", null, null), 0);
      }
    } else {
      I(this.a, "Apiary Client request while client is not ready");
    }
  }
};
d.$E = function(a) {
  this.Og(a, new gr("retry", "deadline_exceeded", null, null), 0);
};
d.sC = function(a, b) {
  this.gs(a);
  if (!this.isDisposed() && a.$n()) {
    var c = "ok", e;
    a.ck("o");
    a.Xj.callback(b);
    if ("o" != a.eg) {
      switch(e = "response_callback", a.eg) {
        case "r":
          c = "retry";
          break;
        case "d":
          c = "fatal";
          break;
        default:
          Pf(this.a, "Received an unexpected response state: " + a.eg);
      }
    }
    "ok" == c ? (K(this.a, "Apiary response succeeded."), this.Ce && this.Ce.UQ(a, b)) : this.Og(a, new gr(c, w(e), b.uj, b), 0);
  }
  this.Tw(a);
};
d.gs = function(a) {
  var b = this.ri.get(a.qd);
  null != b && (this.ri.remove(a.qd), ve(b));
};
d.Tw = function(a) {
  var b = this.pi.get(a.qd);
  null != b && (this.pi.remove(a.qd), ve(b));
};
d.A6 = function(a, b) {
  this.gs(a);
  if (!this.isDisposed() && a.$n()) {
    b = w(b);
    var c = b.Rk, e = b.status, f = 0;
    if ("network_or_frontend" == b.Rk) {
      switch(b.response.uj) {
        case 400:
          c = "bad_request";
          e = "fatal";
          break;
        case 401:
          c = "unauthorized";
          e = "fatal";
          break;
        case 402:
          c = "payment_required";
          e = "fatal";
          break;
        case 403:
          c = "forbidden";
          e = "fatal";
          break;
        case 102:
          c = "processing";
          break;
        case 500:
          c = "internal_server_error";
          break;
        case 503:
          c = "service_unavailable";
      }
      b.status = e;
      b.Rk = c;
      if (null != b.response.headers && null != b.response.headers["Retry-After"]) {
        try {
          f = 1000 * parseInt(b.response.headers["Retry-After"], 10), f = Math.min(Math.max(f, 0), 72E5);
        } catch (h) {
        }
      }
    }
    this.Og(a, b, f);
  }
  this.Tw(a);
};
d.Og = function(a, b, c) {
  if (!this.isDisposed() && (a.$n() || "r" == a.eg)) {
    J(this.a, "Request failed: " + a.qd + " to " + a.qj() + " for path " + a.Vc());
    this.Ce && this.Ce.onError(a, b);
    var e = a.MB();
    "retry" == b.status && 0 < e ? this.ri.set(a.qd, ue(t(this.request, this, a), Math.max(a.hz(), c))) : (a.cancel(), a.Xj.cd(b));
  }
};
var Gx = function(a, b, c) {
  K(Fx, "Asynchronously loading appContext service (" + b + ")");
  var e = G();
  try {
    null != c && va(c) ? (c(a), w(a.ql(b))) : w(a.s7(b)), a.ej(b).then(function(a) {
      e.resolve(a);
    }, function(a) {
      Pf(Fx, "Error getting service (" + b + "): " + a);
      e.reject(a);
    });
  } catch (f) {
    Pf(Fx, "Exception thrown getting service (" + b + ")", f), e.reject(f);
  }
  return e.promise;
}, Fx = Nf("realtime.util.AsyncServiceResolver");
var Hx = function(a, b, c) {
  $c.call(this);
  this.ai = null != c ? t(a, c) : a;
  this.Ae = b;
  this.yk = t(this.WD, this);
  this.jg = !1;
  this.dg = 0;
  this.Ab = null;
  this.uk = [];
};
v(Hx, $c);
d = Hx.prototype;
d.rq = function(a) {
  this.stop();
  this.uk = arguments;
  this.Ab = ue(this.yk, this.Ae);
};
d.stop = function() {
  this.Ab && (ve(this.Ab), this.Ab = null);
  this.jg = !1;
  this.uk = [];
};
d.pause = function() {
  ++this.dg;
};
d.resume = function() {
  this.dg && (--this.dg, !this.dg && this.jg && this.sn());
};
d.aa = function() {
  this.stop();
  Hx.X.aa.call(this);
};
d.WD = function() {
  this.Ab = null;
  this.dg ? this.jg = !0 : this.sn();
};
d.sn = function() {
  this.jg = !1;
  this.ai.apply(null, this.uk);
};
var Kx = function() {
  this.lq = [];
  this.cE = new H;
  this.fV = this.gV = this.hV = this.fk = 0;
  this.Rs = new H;
  this.gJ = this.eV = 0;
  this.so = 1;
  this.$J = new zq(0, 4000);
  this.$J.zh = function() {
    return new Ix;
  };
  this.IU = new zq(0, 50);
  this.IU.zh = function() {
    return new Jx;
  };
  var a = this;
  this.CC = new zq(0, 2000);
  this.CC.zh = function() {
    return String(a.so++);
  };
  this.CC.Nk = function() {
  };
};
Kx.prototype.a = Nf("goog.debug.Trace");
var Jx = function() {
  this.PG = this.time = this.count = 0;
};
Jx.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
  this.PG && a.push(" [VarAlloc = ", this.PG, "]");
  return a.join("");
};
var Ix = function() {
};
Ix.prototype.fja = function(a, b, c) {
  var e = [];
  -1 == b ? e.push("    ") : e.push(Lx(this.eventTime - b));
  e.push(" ", Mx(this.eventTime - a));
  0 == this.eventType ? e.push(" Start        ") : 1 == this.eventType ? (e.push(" Done "), e.push(Lx(this.Jia - this.startTime), " ms ")) : e.push(" Comment      ");
  e.push(c, this);
  0 < this.hja && e.push("[VarAlloc ", this.hja, "] ");
  return e.join("");
};
Ix.prototype.toString = function() {
  return null == this.type ? this.comment : "[" + this.type + "] " + this.comment;
};
Kx.prototype.reset = function() {
  this.tca();
  this.cE.clear();
  this.fk = u();
  this.gJ = this.eV = this.fV = this.gV = this.hV = 0;
  for (var a = this.Rs.ub(), b = 0;b < a.length;b++) {
    var c = this.Rs.get(a[b]);
    c.count = 0;
    c.time = 0;
    c.PG = 0;
    this.IU.$l(c);
  }
  this.Rs.clear();
};
Kx.prototype.tca = function() {
  for (var a = 0;a < this.lq.length;a++) {
    var b = this.lq[a];
    b.id && this.CC.$l(b.id);
    this.$J.$l(b);
  }
  this.lq.length = 0;
};
Kx.prototype.toString = function() {
  for (var a = [], b = -1, c = [], e = 0;e < this.lq.length;e++) {
    var f = this.lq[e];
    1 == f.eventType && c.pop();
    a.push(" ", f.fja(this.fk, b, c.join("")));
    b = f.eventTime;
    a.push("\n");
    0 == f.eventType && c.push("|  ");
  }
  if (0 != this.cE.ja()) {
    var h = u();
    a.push(" Unstopped timers:\n");
    Ae(this.cE, function(b) {
      a.push("  ", b, " (", h - b.startTime, " ms, started at ", Mx(b.startTime), ")\n");
    });
  }
  b = this.Rs.ub();
  for (e = 0;e < b.length;e++) {
    c = this.Rs.get(b[e]), 1 < c.count && a.push(" TOTAL ", c, "\n");
  }
  a.push("Total tracers created ", this.eV, "\n", "Total comments created ", this.gJ, "\n", "Overhead start: ", this.hV, " ms\n", "Overhead end: ", this.gV, " ms\n", "Overhead comment: ", this.fV, " ms\n");
  return a.join("");
};
var Lx = function(a) {
  a = Math.round(a);
  var b = "";
  1000 > a && (b = " ");
  100 > a && (b = "  ");
  10 > a && (b = "   ");
  return b + a;
}, Mx = function(a) {
  a = Math.round(a);
  return String(100 + a / 1000 % 60).substring(1, 3) + "." + String(1000 + a % 1000).substring(1, 4);
};
new Kx;
var Nx = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Nx, N);
Nx.prototype.g = function(a) {
  return Ox(a, this);
};
var Ox = function(a, b) {
  var c = {Kua:Q(b, 1), stream:Q(b, 2), J_:Q(b, 3), protocol:Q(b, 4)};
  a && (c.l = b);
  return c;
};
Nx.prototype.j = function() {
  var a = new W;
  Px(this, a);
  return a.h();
};
var Px = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
  c = Q(a, 3);
  null != c && b.A(3, c);
  c = Q(a, 4);
  null != c && b.A(4, c);
};
d = Nx.prototype;
d.wT = function(a) {
  S(this, 1, a);
};
d.cb = function() {
  return Q(this, 2);
};
d.nm = function(a) {
  S(this, 2, a);
};
d.jx = function(a) {
  S(this, 3, a);
};
d.Th = function() {
  return Q(this, 4);
};
d.Bs = function(a) {
  S(this, 4, a);
};
var Rx = function(a) {
  O(this, a, 0, -1, Qx, null);
};
v(Rx, N);
var Qx = [5];
Rx.prototype.g = function(a) {
  return Sx(a, this);
};
var Sx = function(a, b) {
  var c = {wza:Q(b, 1), Bua:Q(b, 2), nya:Q(b, 3), KAa:Q(b, 4), RAa:P(b.aO(), Tx, a)};
  a && (c.l = b);
  return c;
};
Rx.prototype.j = function() {
  var a = new W;
  Ux(this, a);
  return a.h();
};
var Ux = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.s(3, c);
  c = Q(a, 4);
  null != c && b.s(4, c);
  c = a.aO();
  0 < c.length && b.xp(5, c, Vx);
};
Rx.prototype.aO = function() {
  return U(this, Wx, 5);
};
var Wx = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Wx, N);
Wx.prototype.g = function(a) {
  return Tx(a, this);
};
var Tx = function(a, b) {
  var c = {mya:Q(b, 1), response:Q(b, 2)};
  a && (c.l = b);
  return c;
};
Wx.prototype.j = function() {
  var a = new W;
  Vx(this, a);
  return a.h();
};
var Vx = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(6, c);
  c = Q(a, 2);
  null != c && b.f(7, c);
};
Wx.prototype.vN = function() {
  return Q(this, 2);
};
var Xx = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Xx, N);
Xx.prototype.g = function(a) {
  return Yx(a, this);
};
var Yx = function(a, b) {
  var c, e = {wta:Q(b, 1), $wa:Q(b, 2), tta:Q(b, 3), Kya:Q(b, 4), Jsa:Q(b, 5), $Aa:(c = b.cO()) && Zx(a, c)};
  a && (e.l = b);
  return e;
};
Xx.prototype.j = function() {
  var a = new W;
  $x(this, a);
  return a.h();
};
var $x = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.s(4, c);
  c = Q(a, 5);
  null != c && b.s(5, c);
  c = a.cO();
  null != c && b.b(6, c, ay);
};
Xx.prototype.cO = function() {
  return T(this, by, 6);
};
var by = function(a) {
  O(this, a, 0, -1, null, null);
};
v(by, N);
by.prototype.g = function(a) {
  return Zx(a, this);
};
var Zx = function(a, b) {
  var c = {OAa:R(b, 1, !1), Ssa:R(b, 4, !1), Jpa:R(b, 7, !1), Rsa:R(b, 14, !1), fza:R(b, 15, 4000), eza:R(b, 16, 5000), swa:R(b, 31, 0), Osa:R(b, 33, !1), Qsa:R(b, 35, !1), Nsa:R(b, 36, !1), ssa:R(b, 37, !1), NAa:R(b, 38, !1)};
  a && (c.l = b);
  return c;
};
by.prototype.j = function() {
  var a = new W;
  ay(this, a);
  return a.h();
};
var ay = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.Z(1, c);
  c = Q(a, 4);
  null != c && b.Z(4, c);
  c = Q(a, 7);
  null != c && b.Z(7, c);
  c = Q(a, 14);
  null != c && b.Z(14, c);
  c = Q(a, 15);
  null != c && b.s(15, c);
  c = Q(a, 16);
  null != c && b.s(16, c);
  c = Q(a, 31);
  null != c && b.s(31, c);
  c = Q(a, 33);
  null != c && b.Z(33, c);
  c = Q(a, 35);
  null != c && b.Z(35, c);
  c = Q(a, 36);
  null != c && b.Z(36, c);
  c = Q(a, 37);
  null != c && b.Z(37, c);
  c = Q(a, 38);
  null != c && b.Z(38, c);
};
by.prototype.EK = function() {
  return R(this, 7, !1);
};
var cy = function(a) {
  O(this, a, 0, -1, null, null);
};
v(cy, N);
cy.prototype.g = function(a) {
  return dy(a, this);
};
var dy = function(a, b) {
  var c = {type:Q(b, 1), Zsa:Q(b, 2), Yxa:Q(b, 3), Swa:Q(b, 4), hra:Q(b, 5)};
  a && (c.l = b);
  return c;
};
cy.prototype.j = function() {
  var a = new W;
  ey(this, a);
  return a.h();
};
var ey = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = Q(a, 5);
  null != c && b.ha(5, c);
};
d = cy.prototype;
d.W = function() {
  return Q(this, 1);
};
d.gh = function(a) {
  S(this, 1, a);
};
d.ifa = function(a) {
  S(this, 2, a);
};
d.Iga = function(a) {
  S(this, 3, a);
};
d.lga = function(a) {
  S(this, 4, a);
};
d.Cea = function(a) {
  S(this, 5, a);
};
var fy = function(a) {
  O(this, a, 0, -1, null, null);
};
v(fy, N);
fy.prototype.g = function(a) {
  return gy(a, this);
};
var gy = function(a, b) {
  var c = {twa:Q(b, 1), Mva:Q(b, 2), Qva:Q(b, 3), Sza:Q(b, 4), count:Q(b, 5)};
  a && (c.l = b);
  return c;
};
fy.prototype.j = function() {
  var a = new W;
  hy(this, a);
  return a.h();
};
var hy = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(1, c);
  c = Q(a, 2);
  null != c && b.s(2, c);
  c = Q(a, 3);
  null != c && b.s(3, c);
  c = Q(a, 4);
  null != c && b.s(4, c);
  c = Q(a, 5);
  null != c && b.s(5, c);
};
fy.prototype.ja = function() {
  return Q(this, 5);
};
var iy = function(a) {
  O(this, a, 0, -1, null, null);
};
v(iy, N);
iy.prototype.g = function(a) {
  return jy(a, this);
};
var jy = function(a, b) {
  var c = {networkType:Q(b, 1), Oxa:Q(b, 2), Nxa:Q(b, 3), Qxa:Q(b, 4)};
  a && (c.l = b);
  return c;
};
iy.prototype.j = function() {
  var a = new W;
  ky(this, a);
  return a.h();
};
var ky = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(1, c);
  c = Q(a, 2);
  null != c && b.s(2, c);
  c = Q(a, 3);
  null != c && b.ha(3, c);
  c = Q(a, 4);
  null != c && b.ha(4, c);
};
var ly = function(a) {
  O(this, a, 0, -1, null, null);
};
v(ly, N);
ly.prototype.g = function(a) {
  return my(a, this);
};
var my = function(a, b) {
  var c, e = {local:(c = b.pM()) && ny(a, c), remote:(c = b.nN()) && ny(a, c), Wqa:Q(b, 3)};
  a && (e.l = b);
  return e;
};
ly.prototype.j = function() {
  var a = new W;
  oy(this, a);
  return a.h();
};
var oy = function(a, b) {
  var c;
  c = a.pM();
  null != c && b.b(1, c, py);
  c = a.nN();
  null != c && b.b(2, c, py);
  c = Q(a, 3);
  null != c && b.A(3, c);
};
ly.prototype.pM = function() {
  return T(this, qy, 1);
};
ly.prototype.nN = function() {
  return T(this, qy, 2);
};
var qy = function(a) {
  O(this, a, 0, -1, null, null);
};
v(qy, N);
qy.prototype.g = function(a) {
  return ny(a, this);
};
var ny = function(a, b) {
  var c = {Fxa:Q(b, 1), V0:Q(b, 2), Fva:Q(b, 3)};
  a && (c.l = b);
  return c;
};
qy.prototype.j = function() {
  var a = new W;
  py(this, a);
  return a.h();
};
var py = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
};
qy.prototype.GL = function() {
  return Q(this, 2);
};
qy.prototype.kT = function(a) {
  S(this, 2, a);
};
var ry = function(a) {
  O(this, a, 0, -1, null, null);
};
v(ry, N);
ry.prototype.g = function(a) {
  return sy(a, this);
};
var sy = function(a, b) {
  var c = {fta:Q(b, 1), gta:Q(b, 2), Rwa:Q(b, 3), Gwa:Q(b, 4), Hwa:Q(b, 5), ka:Q(b, 6), Jqa:Q(b, 7)};
  a && (c.l = b);
  return c;
};
ry.prototype.j = function() {
  var a = new W;
  ty(this, a);
  return a.h();
};
var ty = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.Z(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = Q(a, 5);
  null != c && b.f(5, c);
  c = Q(a, 6);
  null != c && b.f(6, c);
  c = Q(a, 7);
  null != c && b.A(7, c);
};
ry.prototype.da = function() {
  return Q(this, 6);
};
ry.prototype.Y = function(a) {
  S(this, 6, a);
};
var uy = function(a) {
  O(this, a, 0, -1, null, null);
};
v(uy, N);
uy.prototype.g = function(a) {
  return vy(a, this);
};
var vy = function(a, b) {
  var c, e = {oxa:Q(b, 1), Gra:Q(b, 2), Ira:Q(b, 3), Kra:Q(b, 4), Lra:Q(b, 5), O_:Q(b, 6), Jra:Q(b, 7), Qta:Q(b, 8), Uta:Q(b, 9), Rta:Q(b, 10), Sta:Q(b, 11), Tta:Q(b, 12), Ara:Q(b, 13), pxa:Q(b, 14), browser:Q(b, 15), mqa:Q(b, 16), Fra:Q(b, 17), Hra:Q(b, 18), Dva:Q(b, 19), Nqa:Q(b, 20), vwa:(c = b.LM()) && wy(a, c), Qpa:Q(b, 22), bBa:(c = b.dO()) && xy(a, c)};
  a && (e.l = b);
  return e;
};
uy.prototype.j = function() {
  var a = new W;
  yy(this, a);
  return a.h();
};
var yy = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.s(2, c);
  c = Q(a, 3);
  null != c && b.s(3, c);
  c = Q(a, 4);
  null != c && b.s(4, c);
  c = Q(a, 5);
  null != c && b.f(5, c);
  c = Q(a, 6);
  null != c && b.s(6, c);
  c = Q(a, 7);
  null != c && b.s(7, c);
  c = Q(a, 8);
  null != c && b.f(8, c);
  c = Q(a, 9);
  null != c && b.s(9, c);
  c = Q(a, 10);
  null != c && b.s(10, c);
  c = Q(a, 11);
  null != c && b.f(11, c);
  c = Q(a, 12);
  null != c && b.f(12, c);
  c = Q(a, 13);
  null != c && b.f(13, c);
  c = Q(a, 14);
  null != c && b.f(14, c);
  c = Q(a, 15);
  null != c && b.f(15, c);
  c = Q(a, 16);
  null != c && b.f(16, c);
  c = Q(a, 17);
  null != c && b.s(17, c);
  c = Q(a, 18);
  null != c && b.s(18, c);
  c = Q(a, 19);
  null != c && b.f(19, c);
  c = Q(a, 20);
  null != c && b.f(20, c);
  c = a.LM();
  null != c && b.b(21, c, zy);
  c = Q(a, 22);
  null != c && b.f(22, c);
  c = a.dO();
  null != c && b.b(23, c, Ay);
};
d = uy.prototype;
d.uga = function(a) {
  S(this, 1, a);
};
d.Nea = function(a) {
  S(this, 2, a);
};
d.Pea = function(a) {
  S(this, 3, a);
};
d.cT = function(a) {
  S(this, 5, a);
};
d.FF = function(a) {
  S(this, 6, a);
};
d.vga = function(a) {
  S(this, 14, a);
};
d.pea = function(a) {
  S(this, 15, a);
};
d.rea = function(a) {
  S(this, 16, a);
};
d.Oea = function(a) {
  S(this, 18, a);
};
d.LM = function() {
  return T(this, By, 21);
};
d.dO = function() {
  return T(this, Cy, 23);
};
var By = function(a) {
  O(this, a, 0, -1, null, null);
};
v(By, N);
By.prototype.g = function(a) {
  return wy(a, this);
};
var wy = function(a, b) {
  var c = {sua:Q(b, 1), gza:Q(b, 2), dza:Q(b, 3), Hta:Q(b, 4), dqa:Q(b, 5)};
  a && (c.l = b);
  return c;
};
By.prototype.j = function() {
  var a = new W;
  zy(this, a);
  return a.h();
};
var zy = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.Z(1, c);
  c = Q(a, 2);
  null != c && b.s(2, c);
  c = Q(a, 3);
  null != c && b.s(3, c);
  c = Q(a, 4);
  null != c && b.s(4, c);
  c = Q(a, 5);
  null != c && b.s(5, c);
}, Cy = function(a) {
  O(this, a, 0, -1, Dy, null);
};
v(Cy, N);
var Dy = [3];
Cy.prototype.g = function(a) {
  return xy(a, this);
};
var xy = function(a, b) {
  var c = {aAa:Q(b, 1), bAa:Q(b, 2), cAa:P(b.MN(), Ey, a)};
  a && (c.l = b);
  return c;
};
Cy.prototype.j = function() {
  var a = new W;
  Ay(this, a);
  return a.h();
};
var Ay = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(1, c);
  c = Q(a, 2);
  null != c && b.s(2, c);
  c = a.MN();
  0 < c.length && b.B(3, c, Fy);
};
Cy.prototype.MN = function() {
  return U(this, Gy, 3);
};
var Gy = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Gy, N);
Gy.prototype.g = function(a) {
  return Ey(a, this);
};
var Ey = function(a, b) {
  var c = {rra:Q(b, 1), Nva:Q(b, 2), Lva:Q(b, 4), Pva:Q(b, 3)};
  a && (c.l = b);
  return c;
};
Gy.prototype.j = function() {
  var a = new W;
  Fy(this, a);
  return a.h();
};
var Fy = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
  c = Q(a, 4);
  null != c && b.A(4, c);
  c = Q(a, 3);
  null != c && b.A(3, c);
};
var Hy = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Hy, N);
Hy.prototype.g = function(a) {
  return Iy(a, this);
};
var Iy = function(a, b) {
  var c = {device:Q(b, 1), Ppa:Q(b, 2), platform:Q(b, 3)};
  a && (c.l = b);
  return c;
};
Hy.prototype.j = function() {
  var a = new W;
  Jy(this, a);
  return a.h();
};
var Jy = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
  c = Q(a, 3);
  null != c && b.A(3, c);
};
Hy.prototype.getDevice = function() {
  return Q(this, 1);
};
Hy.prototype.Xea = function(a) {
  S(this, 1, a);
};
Hy.prototype.hea = function(a) {
  S(this, 2, a);
};
Hy.prototype.Cga = function(a) {
  S(this, 3, a);
};
var Ky = function() {
  this.rb = new is;
  this.ida = new Ne;
};
qa(Ky);
var Ly = [31, 37, 41, 43, 47, 53, 61, 67, 71, 73];
d = Ky.prototype;
d.a = Nf("talk.media.webrtc.PendingLogUploadManager");
d.DB = function(a) {
  for (var b = [], c = 0, e = 0;e < a.length;e++) {
    for (var f = a.charCodeAt(e);255 < f;) {
      b[c++] = f & 255, f >>= 8;
    }
    b[c++] = f;
  }
  for (a = 0;a < b.length;a++) {
    b[a] ^= Ly[a % Ly.length];
  }
  return "wrplumplu-" + Tj(b);
};
d.LL = function(a, b) {
  var c = u() - 432E6;
  a = this.rb.get(this.DB(a));
  if (null != a) {
    try {
      var e = cb(sf(a));
      if ("cl:plu" == e[0]) {
        var f = new Ov(e), h = jb(f.Zu(), function(a) {
          return null != a.MK() && null != a.K() && null != a.Xh() && 0 < a.MK() && a.Xh() > c && a.K() != b;
        });
        f.CT(h);
        return f;
      }
    } catch (k) {
      I(this.a, "Invalid pending JS log upload storage: " + a, k);
    }
  }
  return new Ov;
};
d.add = function(a, b) {
  J(this.a, "Recording pending upload for session " + b + " for " + a);
  this.ida.add(b);
  var c = this.LL(a, b), e = c.Zu(), f = new Rv;
  f.iea(5);
  f.ib(b);
  f.Bx(u());
  tb(e, void 0, 0, f);
  c.CT(e);
  this.rb.set(this.DB(a), c.Ua());
};
d.remove = function(a, b) {
  J(this.a, "Removing record for session " + b + " for " + a);
  b = this.LL(a, b);
  this.rb.set(this.DB(a), b.Ua());
};
var Ny = function(a) {
  O(this, a, 0, -1, My, null);
};
v(Ny, N);
var My = [14];
Ny.prototype.g = function(a) {
  return Oy(a, this);
};
var Oy = function(a, b) {
  var c, e = {ka:Q(b, 1), YY:Q(b, 2), projectId:Q(b, 3), resolution:Q(b, 4), uxa:Q(b, 10), dya:Q(b, 5), GAa:(c = b.VN()) && Py(a, c), Nya:Q(b, 7), uya:(c = b.jN()) && Qy(a, c), lva:(c = b.nM()) && Ry(a, c), mva:(c = b.oM()) && Sy(a, c), bca:(c = b.fv()) && Ty(a, c), MAa:Q(b, 13), eBa:Q(b, 14)};
  a && (e.l = b);
  return e;
};
Ny.prototype.j = function() {
  var a = new W;
  Uy(this, a);
  return a.h();
};
var Uy = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.A(4, c);
  c = Q(a, 10);
  null != c && b.f(10, c);
  c = Q(a, 5);
  null != c && b.f(5, c);
  c = a.VN();
  null != c && b.b(6, c, Vy);
  c = Q(a, 7);
  null != c && b.A(7, c);
  c = a.jN();
  null != c && b.b(8, c, Wy);
  c = a.nM();
  null != c && b.b(9, c, Xy);
  c = a.oM();
  null != c && b.b(11, c, Yy);
  c = a.fv();
  null != c && b.b(12, c, Zy);
  c = Q(a, 13);
  null != c && b.A(13, c);
  c = a.r5();
  0 < c.length && b.$c(14, c);
};
d = Ny.prototype;
d.da = function() {
  return Q(this, 1);
};
d.Y = function(a) {
  S(this, 1, a);
};
d.kc = function() {
  return Q(this, 4);
};
d.Ds = function(a) {
  S(this, 4, a);
};
d.VN = function() {
  return T(this, $y, 6);
};
d.jN = function() {
  return T(this, az, 8);
};
d.nM = function() {
  return T(this, bz, 9);
};
d.oM = function() {
  return T(this, cz, 11);
};
d.fv = function() {
  return T(this, dz, 12);
};
d.eU = function(a) {
  V(this, 12, a);
};
d.r5 = function() {
  return Q(this, 14);
};
var az = function(a) {
  O(this, a, 0, -1, null, null);
};
v(az, N);
az.prototype.g = function(a) {
  return Qy(a, this);
};
var Qy = function(a, b) {
  var c, e = {GU:Q(b, 1), Jia:(c = b.IN()) && ez(a, c), rta:Q(b, 3), nAa:(c = b.RN()) && fz(a, c), Ota:(c = b.PL()) && gz(a, c), tpa:(c = b.AK()) && hz(a, c), lsa:(c = b.wL()) && tt(a, c)};
  a && (e.l = b);
  return e;
};
az.prototype.j = function() {
  var a = new W;
  Wy(this, a);
  return a.h();
};
var Wy = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.ha(1, c);
  c = a.IN();
  null != c && b.b(2, c, iz);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = a.RN();
  null != c && b.b(4, c, jz);
  c = a.PL();
  null != c && b.b(5, c, kz);
  c = a.AK();
  null != c && b.b(6, c, lz);
  c = a.wL();
  null != c && b.b(7, c, vt);
};
d = az.prototype;
d.IN = function() {
  return T(this, mz, 2);
};
d.RN = function() {
  return T(this, nz, 4);
};
d.PL = function() {
  return T(this, oz, 5);
};
d.AK = function() {
  return T(this, pz, 6);
};
d.wL = function() {
  return T(this, st, 7);
};
var mz = function(a) {
  O(this, a, 0, -1, null, null);
};
v(mz, N);
mz.prototype.g = function(a) {
  return ez(a, this);
};
var ez = function(a, b) {
  var c = {fBa:Q(b, 1), dxa:Q(b, 2)};
  a && (c.l = b);
  return c;
};
mz.prototype.j = function() {
  var a = new W;
  iz(this, a);
  return a.h();
};
var iz = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.ha(1, c);
  c = Q(a, 2);
  null != c && b.ha(2, c);
}, $y = function(a) {
  O(this, a, 0, -1, null, null);
};
v($y, N);
$y.prototype.g = function(a) {
  return Py(a, this);
};
var Py = function(a, b) {
  var c = {Qra:Q(b, 1), Ita:Q(b, 2)};
  a && (c.l = b);
  return c;
};
$y.prototype.j = function() {
  var a = new W;
  Vy(this, a);
  return a.h();
};
var Vy = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
}, nz = function(a) {
  O(this, a, 0, -1, null, null);
};
v(nz, N);
nz.prototype.g = function(a) {
  return fz(a, this);
};
var fz = function(a, b) {
  var c = {roomName:Q(b, 1)};
  a && (c.l = b);
  return c;
};
nz.prototype.j = function() {
  var a = new W;
  jz(this, a);
  return a.h();
};
var jz = function(a, b) {
  a = Q(a, 1);
  null != a && b.f(1, a);
}, oz = function(a) {
  O(this, a, 0, -1, null, null);
};
v(oz, N);
oz.prototype.g = function(a) {
  return gz(a, this);
};
var gz = function(a, b) {
  var c = {txa:Q(b, 1), Ipa:Q(b, 2), title:Q(b, 3), Gxa:Q(b, 4)};
  a && (c.l = b);
  return c;
};
oz.prototype.j = function() {
  var a = new W;
  kz(this, a);
  return a.h();
};
var kz = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.ha(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
};
oz.prototype.getTitle = function() {
  return Q(this, 3);
};
oz.prototype.setTitle = function(a) {
  S(this, 3, a);
};
var bz = function(a) {
  O(this, a, 0, -1, qz, null);
};
v(bz, N);
var qz = [5];
bz.prototype.g = function(a) {
  return Ry(a, this);
};
var Ry = function(a, b) {
  var c = {hBa:Q(b, 1), topic:Q(b, 2), Psa:R(b, 3, !0), Zxa:Q(b, 4), Uia:Q(b, 5)};
  a && (c.l = b);
  return c;
};
bz.prototype.j = function() {
  var a = new W;
  Xy(this, a);
  return a.h();
};
var Xy = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.Z(3, c);
  c = Q(a, 4);
  null != c && b.A(4, c);
  c = a.kC();
  0 < c.length && b.$c(5, c);
};
bz.prototype.kC = function() {
  return Q(this, 5);
};
var pz = function(a) {
  O(this, a, 0, -1, null, null);
};
v(pz, N);
pz.prototype.g = function(a) {
  return hz(a, this);
};
var hz = function(a, b) {
  var c = {status:R(b, 1, 0), dsa:Q(b, 2), PAa:Q(b, 3)};
  a && (c.l = b);
  return c;
};
pz.prototype.j = function() {
  var a = new W;
  lz(this, a);
  return a.h();
};
var lz = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
};
pz.prototype.Sa = function() {
  return R(this, 1, 0);
};
var cz = function(a) {
  O(this, a, 0, -1, null, null);
};
v(cz, N);
cz.prototype.g = function(a) {
  return Sy(a, this);
};
var Sy = function(a, b) {
  var c = {Rra:Q(b, 3), kva:Q(b, 4), yza:R(b, 5, !1)};
  a && (c.l = b);
  return c;
};
cz.prototype.j = function() {
  var a = new W;
  Yy(this, a);
  return a.h();
};
var Yy = function(a, b) {
  var c;
  c = Q(a, 3);
  null != c && b.A(3, c);
  c = Q(a, 4);
  null != c && b.ha(4, c);
  c = Q(a, 5);
  null != c && b.Z(5, c);
}, dz = function(a) {
  O(this, a, 0, -1, null, null);
};
v(dz, N);
dz.prototype.g = function(a) {
  return Ty(a, this);
};
var Ty = function(a, b) {
  var c = {Sra:Q(b, 1), kAa:Q(b, 2)};
  a && (c.l = b);
  return c;
};
dz.prototype.j = function() {
  var a = new W;
  Zy(this, a);
  return a.h();
};
var Zy = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
};
var sz = function(a) {
  O(this, a, 0, -1, rz, null);
};
v(sz, N);
var rz = [2, 3];
sz.prototype.g = function(a) {
  return tz(a, this);
};
var tz = function(a, b) {
  var c = {lf:P(b.ua(), zt, a), Bh:P(b.ab(), Ft, a)};
  a && (c.l = b);
  return c;
};
sz.prototype.j = function() {
  var a = new W;
  uz(this, a);
  return a.h();
};
var uz = function(a, b) {
  var c;
  c = a.ua();
  0 < c.length && b.B(2, c, Bt);
  c = a.ab();
  0 < c.length && b.B(3, c, Gt);
};
sz.prototype.ua = function() {
  return U(this, yt, 2);
};
sz.prototype.ab = function() {
  return U(this, Et, 3);
};
var wz = function(a) {
  O(this, a, 0, -1, vz, null);
};
v(wz, N);
var vz = [6];
wz.prototype.g = function(a) {
  return xz(a, this);
};
var xz = function(a, b) {
  var c, e = {Jta:Q(b, 1), dra:Q(b, 2), bra:Q(b, 3), dba:(c = b.Tq()) && kt(a, c), ita:Q(b, 4), Ava:P(b.wM(), yz, a), jsa:b.W2()};
  a && (e.l = b);
  return e;
};
wz.prototype.j = function() {
  var a = new W;
  zz(this, a);
  return a.h();
};
var zz = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = a.Tq();
  null != c && b.b(7, c, mt);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = a.wM();
  0 < c.length && b.B(6, c, Az);
  c = Q(a, 5);
  null != c && b.wp(5, c);
};
wz.prototype.Tq = function() {
  return T(this, jt, 7);
};
wz.prototype.wM = function() {
  return U(this, Bz, 6);
};
wz.prototype.V2 = function() {
  return Q(this, 5);
};
wz.prototype.W2 = function() {
  return Sr(this.V2());
};
var Bz = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Bz, N);
Bz.prototype.g = function(a) {
  return yz(a, this);
};
var yz = function(a, b) {
  var c, e = {Exa:(c = b.YM()) && Cz(a, c), Lsa:(c = b.HL()) && Dz(a, c), Ewa:(c = b.OM()) && Ez(a, c)};
  a && (e.l = b);
  return e;
};
Bz.prototype.j = function() {
  var a = new W;
  Az(this, a);
  return a.h();
};
var Az = function(a, b) {
  var c;
  c = a.YM();
  null != c && b.b(1, c, Fz);
  c = a.HL();
  null != c && b.b(2, c, Gz);
  c = a.OM();
  null != c && b.b(3, c, Hz);
};
Bz.prototype.YM = function() {
  return T(this, Iz, 1);
};
Bz.prototype.HL = function() {
  return T(this, Jz, 2);
};
Bz.prototype.OM = function() {
  return T(this, Kz, 3);
};
var Iz = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Iz, N);
Iz.prototype.g = function(a) {
  return Cz(a, this);
};
var Cz = function(a, b) {
  var c, e = {eba:(c = b.dv()) && kt(a, c)};
  a && (e.l = b);
  return e;
};
Iz.prototype.j = function() {
  var a = new W;
  Fz(this, a);
  return a.h();
};
var Fz = function(a, b) {
  a = a.dv();
  null != a && b.b(1, a, mt);
};
Iz.prototype.dv = function() {
  return T(this, jt, 1);
};
Iz.prototype.YT = function(a) {
  V(this, 1, a);
};
var Jz = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Jz, N);
Jz.prototype.g = function(a) {
  return Dz(a, this);
};
var Dz = function(a, b) {
  var c = {email:Q(b, 1)};
  a && (c.l = b);
  return c;
};
Jz.prototype.j = function() {
  var a = new W;
  Gz(this, a);
  return a.h();
};
var Gz = function(a, b) {
  a = Q(a, 1);
  null != a && b.f(1, a);
};
Jz.prototype.getEmail = function() {
  return Q(this, 1);
};
var Kz = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Kz, N);
Kz.prototype.g = function(a) {
  return Ez(a, this);
};
var Ez = function(a, b) {
  var c = {zxa:Q(b, 1)};
  a && (c.l = b);
  return c;
};
Kz.prototype.j = function() {
  var a = new W;
  Hz(this, a);
  return a.h();
};
var Hz = function(a, b) {
  a = Q(a, 1);
  null != a && b.f(1, a);
};
var Lz = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Lz, N);
Lz.prototype.g = function(a) {
  return Mz(a, this);
};
var Mz = function(a, b) {
  var c, e = {usa:(c = b.AL()) && cu(a, c)};
  a && (e.l = b);
  return e;
};
Lz.prototype.j = function() {
  var a = new W;
  Nz(this, a);
  return a.h();
};
var Nz = function(a, b) {
  a = a.AL();
  null != a && b.b(1, a, du);
};
Lz.prototype.AL = function() {
  return T(this, bu, 1);
};
var Oz = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Oz, N);
Oz.prototype.g = function(a) {
  return Pz(a, this);
};
var Pz = function(a, b) {
  var c, e = {nra:(c = b.Ou()) && Xt(a, c), ira:(c = b.MA()) && Rt(a, c), kra:(c = b.iL()) && Ut(a, c), O7:Q(b, 4), Dua:R(b, 5, !1), Wya:R(b, 6, 0), $ya:(c = b.xN()) && Iy(a, c), YI:Q(b, 8), pva:(c = b.rM()) && Ot(a, c)};
  a && (e.l = b);
  return e;
};
Oz.prototype.j = function() {
  var a = new W;
  Qz(this, a);
  return a.h();
};
var Qz = function(a, b) {
  var c;
  c = a.Ou();
  null != c && b.b(1, c, Yt);
  c = a.MA();
  null != c && b.b(2, c, St);
  c = a.iL();
  null != c && b.b(3, c, Vt);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = Q(a, 5);
  null != c && b.Z(5, c);
  c = Q(a, 6);
  null != c && b.Rd(6, c);
  c = a.xN();
  null != c && b.b(7, c, Jy);
  c = Q(a, 8);
  null != c && b.f(8, c);
  c = a.rM();
  null != c && b.b(9, c, Pt);
};
d = Oz.prototype;
d.Ou = function() {
  return T(this, Wt, 1);
};
d.DF = function(a) {
  V(this, 1, a);
};
d.MA = function() {
  return T(this, Qt, 2);
};
d.CF = function(a) {
  V(this, 2, a);
};
d.iL = function() {
  return T(this, Tt, 3);
};
d.Yk = function() {
  return Q(this, 4);
};
d.mm = function(a) {
  S(this, 4, a);
};
d.xN = function() {
  return T(this, Hy, 7);
};
d.VF = function(a) {
  V(this, 7, a);
};
d.rM = function() {
  return T(this, Nt, 9);
};
var Rz = function(a) {
  O(this, a, 0, -1, null, null);
};
v(Rz, N);
Rz.prototype.g = function(a) {
  return Sz(a, this);
};
var Sz = function(a, b) {
  var c, e = {status:Q(b, 1), Xsa:Q(b, 2), Zra:Q(b, 3), Qca:Q(b, 4), oqa:Q(b, 10), ara:Q(b, 11), m0:Q(b, 5), eqa:Q(b, 6), YI:Q(b, 7), sva:Q(b, 8), eAa:(c = b.NN()) && fu(a, c)};
  a && (e.l = b);
  return e;
};
Rz.prototype.j = function() {
  var a = new W;
  Tz(this, a);
  return a.h();
};
var Tz = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.oW(4, c);
  c = Q(a, 10);
  null != c && b.f(10, c);
  c = Q(a, 11);
  null != c && b.s(11, c);
  c = Q(a, 5);
  null != c && b.nh(5, c);
  c = Q(a, 6);
  null != c && b.nh(6, c);
  c = Q(a, 7);
  null != c && b.f(7, c);
  c = Q(a, 8);
  null != c && b.f(8, c);
  c = a.NN();
  null != c && b.b(9, c, gu);
};
d = Rz.prototype;
d.Sa = function() {
  return Q(this, 1);
};
d.e3 = function() {
  return Q(this, 2);
};
d.uN = function() {
  return Q(this, 4);
};
d.C3 = function() {
  return Q(this, 8);
};
d.NN = function() {
  return T(this, eu, 9);
};
var Vz = function(a) {
  O(this, a, 0, -1, Uz, null);
};
v(Vz, N);
var Uz = [2, 3];
Vz.prototype.g = function(a) {
  return Wz(a, this);
};
var Wz = function(a, b) {
  var c, e = {V:(c = b.m()) && Y(a, c), lf:P(b.ua(), ju, a), Bh:P(b.ab(), mu, a), ah:(c = b.bb()) && mu(a, c)};
  a && (e.l = b);
  return e;
};
Vz.prototype.j = function() {
  var a = new W;
  Xz(this, a);
  return a.h();
};
var Xz = function(a, b) {
  var c;
  c = a.m();
  null != c && b.b(1, c, Z);
  c = a.ua();
  0 < c.length && b.B(2, c, ku);
  c = a.ab();
  0 < c.length && b.B(3, c, nu);
  c = a.bb();
  null != c && b.b(4, c, nu);
};
d = Vz.prototype;
d.m = function() {
  return T(this, X, 1);
};
d.u = function(a) {
  V(this, 1, a);
};
d.R = function() {
  this.u(void 0);
};
d.ua = function() {
  return U(this, iu, 2);
};
d.ab = function() {
  return U(this, lu, 3);
};
d.bb = function() {
  return T(this, lu, 4);
};
var Zz = function(a) {
  O(this, a, 0, -1, Yz, null);
};
v(Zz, N);
var Yz = [15, 26];
Zz.prototype.g = function(a) {
  return $z(a, this);
};
var $z = function(a, b) {
  var c, e = {ka:Q(b, 1), type:Q(b, 2), q1:(c = b.Fq()) && wu(a, c), active:Q(b, 4), Nra:Q(b, 6), bva:Q(b, 7), topic:Q(b, 8), L_:(c = b.yq()) && $t(a, c), tqa:Q(b, 10), GU:Q(b, 11), S0:Q(b, 12), nxa:Q(b, 13), mediaType:Q(b, 14), Uia:Q(b, 15), Kpa:Q(b, 16), Gpa:Q(b, 24), nba:(c = b.dl()) && wv(a, c), $ua:Q(b, 18), ava:Q(b, 25), caption:(c = b.dL()) && It(a, c), eta:Q(b, 21), exa:Q(b, 22), bsa:Q(b, 23), Cpa:Q(b, 26), wra:Q(b, 27), mwa:Q(b, 28), kwa:Q(b, 29), iG:Q(b, 30)};
  a && (e.l = b);
  return e;
};
Zz.prototype.j = function() {
  var a = new W;
  aA(this, a);
  return a.h();
};
var aA = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
  c = a.Fq();
  null != c && b.b(3, c, xu);
  c = Q(a, 4);
  null != c && b.Z(4, c);
  c = Q(a, 6);
  null != c && b.ha(6, c);
  c = Q(a, 7);
  null != c && b.ha(7, c);
  c = Q(a, 8);
  null != c && b.f(8, c);
  c = a.yq();
  null != c && b.b(9, c, au);
  c = Q(a, 10);
  null != c && b.Z(10, c);
  c = Q(a, 11);
  null != c && b.ha(11, c);
  c = Q(a, 12);
  null != c && b.ha(12, c);
  c = Q(a, 13);
  null != c && b.f(13, c);
  c = Q(a, 14);
  null != c && b.A(14, c);
  c = a.kC();
  0 < c.length && b.$c(15, c);
  c = Q(a, 16);
  null != c && b.Z(16, c);
  c = Q(a, 24);
  null != c && b.A(24, c);
  c = a.dl();
  null != c && b.b(17, c, xv);
  c = Q(a, 18);
  null != c && b.Z(18, c);
  c = Q(a, 25);
  null != c && b.A(25, c);
  c = a.dL();
  null != c && b.b(19, c, Jt);
  c = Q(a, 21);
  null != c && b.A(21, c);
  c = Q(a, 22);
  null != c && b.A(22, c);
  c = Q(a, 23);
  null != c && b.A(23, c);
  c = a.V1();
  0 < c.length && b.bH(26, c);
  c = Q(a, 27);
  null != c && b.f(27, c);
  c = Q(a, 28);
  null != c && b.f(28, c);
  c = Q(a, 29);
  null != c && b.f(29, c);
  c = Q(a, 30);
  null != c && b.f(30, c);
};
d = Zz.prototype;
d.da = function() {
  return Q(this, 1);
};
d.Y = function(a) {
  S(this, 1, a);
};
d.W = function() {
  return Q(this, 2);
};
d.gh = function(a) {
  S(this, 2, a);
};
d.Fq = function() {
  return T(this, vu, 3);
};
d.nT = function(a) {
  V(this, 3, a);
};
d.setActive = function(a) {
  S(this, 4, a);
};
d.yq = function() {
  return T(this, Zt, 9);
};
d.$ = function() {
  return Q(this, 14);
};
d.uc = function(a) {
  S(this, 14, a);
};
d.vh = function() {
  S(this, 14, void 0);
};
d.kC = function() {
  return Q(this, 15);
};
d.dl = function() {
  return T(this, vv, 17);
};
d.ux = function(a) {
  V(this, 17, a);
};
d.dL = function() {
  return T(this, Ht, 19);
};
d.V1 = function() {
  return Q(this, 26);
};
var bA = function(a) {
  O(this, a, 0, -1, null, null);
};
v(bA, N);
bA.prototype.g = function(a) {
  return cA(a, this);
};
var cA = function(a, b) {
  var c, e = {V:(c = b.m()) && Y(a, c), appId:Q(b, 2), data:Q(b, 3)};
  a && (e.l = b);
  return e;
};
bA.prototype.j = function() {
  var a = new W;
  dA(this, a);
  return a.h();
};
var dA = function(a, b) {
  var c;
  c = a.m();
  null != c && b.b(1, c, Z);
  c = Q(a, 2);
  null != c && b.ha(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
};
d = bA.prototype;
d.m = function() {
  return T(this, X, 1);
};
d.u = function(a) {
  V(this, 1, a);
};
d.R = function() {
  this.u(void 0);
};
d.getData = function() {
  return Q(this, 3);
};
d.setData = function(a) {
  S(this, 3, a);
};
d.clearData = function() {
  S(this, 3, void 0);
};
var fA = function(a) {
  O(this, a, 0, -1, eA, null);
};
v(fA, N);
var eA = [2];
fA.prototype.g = function(a) {
  return gA(a, this);
};
var gA = function(a, b) {
  var c, e = {j7:(c = b.Jq()) && hA(a, c), Zwa:Q(b, 2), displayName:Q(b, 3), pI:Q(b, 4)};
  a && (e.l = b);
  return e;
};
fA.prototype.j = function() {
  var a = new W;
  iA(this, a);
  return a.h();
};
var iA = function(a, b) {
  var c;
  c = a.Jq();
  null != c && b.b(1, c, jA);
  c = a.X3();
  0 < c.length && b.bH(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
};
d = fA.prototype;
d.Jq = function() {
  return T(this, kA, 1);
};
d.X3 = function() {
  return Q(this, 2);
};
d.Lh = function() {
  return Q(this, 3);
};
d.kx = function(a) {
  S(this, 3, a);
};
d.HA = function() {
  return Q(this, 4);
};
d.xF = function(a) {
  S(this, 4, a);
};
var kA = function(a) {
  O(this, a, 0, -1, null, null);
};
v(kA, N);
kA.prototype.g = function(a) {
  return hA(a, this);
};
var hA = function(a, b) {
  var c, e = {Cxa:(c = b.WM()) && lA(a, c), L_:(c = b.yq()) && $t(a, c)};
  a && (e.l = b);
  return e;
};
kA.prototype.j = function() {
  var a = new W;
  jA(this, a);
  return a.h();
};
var jA = function(a, b) {
  var c;
  c = a.WM();
  null != c && b.b(1, c, mA);
  c = a.yq();
  null != c && b.b(4, c, au);
};
kA.prototype.WM = function() {
  return T(this, nA, 1);
};
kA.prototype.yq = function() {
  return T(this, Zt, 4);
};
var nA = function(a) {
  O(this, a, 0, -1, null, null);
};
v(nA, N);
nA.prototype.g = function(a) {
  return lA(a, this);
};
var lA = function(a, b) {
  var c = {email:Q(b, 1), PV:Q(b, 2)};
  a && (c.l = b);
  return c;
};
nA.prototype.j = function() {
  var a = new W;
  mA(this, a);
  return a.h();
};
var mA = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
};
nA.prototype.getEmail = function() {
  return Q(this, 1);
};
var pA = function(a) {
  O(this, a, 0, -1, oA, null);
};
v(pA, N);
var oA = [20, 8, 19, 26];
pA.prototype.g = function(a) {
  return qA(a, this);
};
var qA = function(a, b) {
  var c, e = {ka:Q(b, 1), Da:Q(b, 2), PV:Q(b, 3), displayName:Q(b, 4), pI:Q(b, 5), IR:Q(b, 6), Xxa:Q(b, 7), jqa:P(b.OK(), rA, a), iqa:Q(b, 8), Aua:Q(b, 9), Nta:Q(b, 10), jta:Q(b, 11), role:Q(b, 12), r_:R(b, 13, 1), wwa:R(b, 14, 1), Axa:R(b, 17, 0), joined:R(b, 18, !1), $xa:Q(b, 19), wpa:R(b, 21, !1), Csa:(c = b.DL()) && Zs(a, c), KO:Q(b, 23), wya:R(b, 24, 0), SAa:Q(b, 25), F8:Q(b, 26)};
  a && (e.l = b);
  return e;
};
pA.prototype.j = function() {
  var a = new W;
  sA(this, a);
  return a.h();
};
var sA = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = Q(a, 5);
  null != c && b.f(5, c);
  c = Q(a, 6);
  null != c && b.Z(6, c);
  c = Q(a, 7);
  null != c && b.Z(7, c);
  c = a.OK();
  0 < c.length && b.B(20, c, tA);
  c = a.n2();
  0 < c.length && b.$c(8, c);
  c = Q(a, 9);
  null != c && b.Z(9, c);
  c = Q(a, 10);
  null != c && b.f(10, c);
  c = Q(a, 11);
  null != c && b.f(11, c);
  c = Q(a, 12);
  null != c && b.A(12, c);
  c = Q(a, 13);
  null != c && b.A(13, c);
  c = Q(a, 14);
  null != c && b.A(14, c);
  c = Q(a, 17);
  null != c && b.A(17, c);
  c = Q(a, 18);
  null != c && b.Z(18, c);
  c = a.p4();
  0 < c.length && b.bH(19, c);
  c = Q(a, 21);
  null != c && b.Z(21, c);
  c = a.DL();
  null != c && b.b(22, c, ct);
  c = Q(a, 23);
  null != c && b.ha(23, c);
  c = Q(a, 24);
  null != c && b.A(24, c);
  c = Q(a, 25);
  null != c && b.f(25, c);
  c = a.nB();
  0 < c.length && b.$c(26, c);
};
d = pA.prototype;
d.da = function() {
  return Q(this, 1);
};
d.Y = function(a) {
  S(this, 1, a);
};
d.D = function() {
  return Q(this, 2);
};
d.qb = function(a) {
  S(this, 2, a);
};
d.Lh = function() {
  return Q(this, 4);
};
d.kx = function(a) {
  S(this, 4, a);
};
d.HA = function() {
  return Q(this, 5);
};
d.xF = function(a) {
  S(this, 5, a);
};
d.On = function() {
  return Q(this, 6);
};
d.vx = function(a) {
  S(this, 6, a);
};
d.OK = function() {
  return U(this, uA, 20);
};
d.n2 = function() {
  return Q(this, 8);
};
d.getGivenName = function() {
  return Q(this, 10);
};
d.getFamilyName = function() {
  return Q(this, 11);
};
d.jL = function() {
  return R(this, 13, 1);
};
d.ZS = function(a) {
  S(this, 13, a);
};
d.e4 = function() {
  return R(this, 17, 0);
};
d.Wu = function() {
  return R(this, 18, !1);
};
d.zT = function(a) {
  S(this, 18, a);
};
d.p4 = function() {
  return Q(this, 19);
};
d.DL = function() {
  return T(this, Ys, 22);
};
d.nB = function() {
  return Q(this, 26);
};
d.rx = function(a) {
  S(this, 26, a || []);
};
d.RH = function(a, b) {
  Tr(this, 26, a, b);
};
var uA = function(a) {
  O(this, a, 0, -1, null, null);
};
v(uA, N);
uA.prototype.g = function(a) {
  return rA(a, this);
};
var rA = function(a, b) {
  var c = {PV:Q(b, 1), hqa:R(b, 2, 1)};
  a && (c.l = b);
  return c;
};
uA.prototype.j = function() {
  var a = new W;
  tA(this, a);
  return a.h();
};
var tA = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
};
var wA = function(a) {
  O(this, a, 0, -1, vA, null);
};
v(wA, N);
var vA = [3];
wA.prototype.g = function(a) {
  return xA(a, this);
};
var xA = function(a, b) {
  var c, e = {ka:Q(b, 1), qza:Q(b, 2), qya:Q(b, 3), rAa:Q(b, 9), eventType:Q(b, 4), ysa:(c = b.BL()) && qu(a, c), Cya:(c = b.oN()) && Cv(a, c), ywa:(c = b.NM()) && qv(a, c), xza:Q(b, 6)};
  a && (e.l = b);
  return e;
};
wA.prototype.j = function() {
  var a = new W;
  yA(this, a);
  return a.h();
};
var yA = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = a.u4();
  0 < c.length && b.$c(3, c);
  c = Q(a, 9);
  null != c && b.ha(9, c);
  c = Q(a, 4);
  null != c && b.A(4, c);
  c = a.BL();
  null != c && b.b(5, c, su);
  c = a.oN();
  null != c && b.b(7, c, Dv);
  c = a.NM();
  null != c && b.b(8, c, rv);
  c = Q(a, 6);
  null != c && b.Z(6, c);
};
d = wA.prototype;
d.da = function() {
  return Q(this, 1);
};
d.Y = function(a) {
  S(this, 1, a);
};
d.u4 = function() {
  return Q(this, 3);
};
d.KL = function() {
  return Q(this, 4);
};
d.BL = function() {
  return T(this, pu, 5);
};
d.oN = function() {
  return T(this, Bv, 7);
};
d.NM = function() {
  return T(this, pv, 8);
};
var zA = function(a) {
  O(this, a, 0, -1, null, null);
};
v(zA, N);
zA.prototype.g = function(a) {
  return AA(a, this);
};
var AA = function(a, b) {
  var c, e = {uua:(c = b.iB()) && Mu(a, c)};
  a && (e.l = b);
  return e;
};
zA.prototype.j = function() {
  var a = new W;
  BA(this, a);
  return a.h();
};
var BA = function(a, b) {
  a = a.iB();
  null != a && b.b(1, a, Nu);
};
zA.prototype.iB = function() {
  return T(this, Lu, 1);
};
var CA = function(a) {
  O(this, a, 0, -1, null, null);
};
v(CA, N);
CA.prototype.g = function(a) {
  return DA(a, this);
};
var DA = function(a, b) {
  var c, e = {ka:Q(b, 1), Da:Q(b, 2), sourceId:Q(b, 3), mediaType:Q(b, 4), g9:(c = b.ye()) && EA(a, c), zwa:(c = b.bl()) && FA(a, c), WAa:(c = b.il()) && GA(a, c), Kxa:(c = b.ev()) && HA(a, c)};
  a && (e.l = b);
  return e;
};
CA.prototype.j = function() {
  var a = new W;
  IA(this, a);
  return a.h();
};
var IA = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.A(4, c);
  c = a.ye();
  null != c && b.b(5, c, JA);
  c = a.bl();
  null != c && b.b(6, c, KA);
  c = a.il();
  null != c && b.b(7, c, LA);
  c = a.ev();
  null != c && b.b(8, c, MA);
};
d = CA.prototype;
d.da = function() {
  return Q(this, 1);
};
d.Y = function(a) {
  S(this, 1, a);
};
d.D = function() {
  return Q(this, 2);
};
d.qb = function(a) {
  S(this, 2, a);
};
d.Ga = function() {
  return Q(this, 3);
};
d.fh = function(a) {
  S(this, 3, a);
};
d.$ = function() {
  return Q(this, 4);
};
d.uc = function(a) {
  S(this, 4, a);
};
d.vh = function() {
  S(this, 4, void 0);
};
d.ye = function() {
  return T(this, NA, 5);
};
d.sx = function(a) {
  V(this, 5, a);
};
d.bl = function() {
  return T(this, OA, 6);
};
d.aga = function(a) {
  V(this, 6, a);
};
d.il = function() {
  return T(this, PA, 7);
};
d.Nha = function(a) {
  V(this, 7, a);
};
d.ev = function() {
  return T(this, QA, 8);
};
d.Dga = function(a) {
  V(this, 8, a);
};
var NA = function(a) {
  O(this, a, 0, -1, null, null);
};
v(NA, N);
NA.prototype.g = function(a) {
  return EA(a, this);
};
var EA = function(a, b) {
  var c = {muted:Q(b, 1), wz:Q(b, 2), gba:Rr(b, 3)};
  a && (c.l = b);
  return c;
};
NA.prototype.j = function() {
  var a = new W;
  JA(this, a);
  return a.h();
};
var JA = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.Z(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.Ib(3, c);
};
d = NA.prototype;
d.Mn = function() {
  return Q(this, 1);
};
d.ys = function(a) {
  S(this, 1, a);
};
d.Bn = function() {
  return Q(this, 2);
};
d.No = function(a) {
  S(this, 2, a);
};
d.$M = function() {
  return Rr(this, 3);
};
d.ZT = function(a) {
  S(this, 3, a);
};
var OA = function(a) {
  O(this, a, 0, -1, null, null);
};
v(OA, N);
OA.prototype.g = function(a) {
  return FA(a, this);
};
var FA = function(a, b) {
  var c = {wz:Q(b, 1)};
  a && (c.l = b);
  return c;
};
OA.prototype.j = function() {
  var a = new W;
  KA(this, a);
  return a.h();
};
var KA = function(a, b) {
  a = Q(a, 1);
  null != a && b.f(1, a);
};
OA.prototype.Bn = function() {
  return Q(this, 1);
};
OA.prototype.No = function(a) {
  S(this, 1, a);
};
var PA = function(a) {
  O(this, a, 0, -1, RA, null);
};
v(PA, N);
var RA = [3];
PA.prototype.g = function(a) {
  return GA(a, this);
};
var GA = function(a, b) {
  var c, e = {Uqa:Q(b, 1), Vqa:(c = b.fL()) && Lv(a, c), Eua:P(b.lB(), SA, a)};
  a && (e.l = b);
  return e;
};
PA.prototype.j = function() {
  var a = new W;
  LA(this, a);
  return a.h();
};
var LA = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = a.fL();
  null != c && b.b(2, c, Mv);
  c = a.lB();
  0 < c.length && b.B(3, c, TA);
};
d = PA.prototype;
d.x2 = function() {
  return Q(this, 1);
};
d.yea = function(a) {
  S(this, 1, a);
};
d.fL = function() {
  return T(this, Kv, 2);
};
d.lB = function() {
  return U(this, UA, 3);
};
d.Afa = function(a) {
  Vr(this, 3, a);
};
var UA = function(a) {
  O(this, a, 0, -1, null, null);
};
v(UA, N);
UA.prototype.g = function(a) {
  return SA(a, this);
};
var SA = function(a, b) {
  var c = {x:+Q(b, 1), y:+Q(b, 2), width:+Q(b, 3), height:+Q(b, 4)};
  a && (c.l = b);
  return c;
};
UA.prototype.j = function() {
  var a = new W;
  TA(this, a);
  return a.h();
};
var TA = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.Ib(1, c);
  c = Q(a, 2);
  null != c && b.Ib(2, c);
  c = Q(a, 3);
  null != c && b.Ib(3, c);
  c = Q(a, 4);
  null != c && b.Ib(4, c);
};
d = UA.prototype;
d.s5 = function() {
  return +Q(this, 1);
};
d.Pha = function(a) {
  S(this, 1, a);
};
d.t5 = function() {
  return +Q(this, 2);
};
d.Qha = function(a) {
  S(this, 2, a);
};
d.Ng = function() {
  return +Q(this, 3);
};
d.qm = function(a) {
  S(this, 3, a);
};
d.Hg = function() {
  return +Q(this, 4);
};
d.lm = function(a) {
  S(this, 4, a);
};
var QA = function(a) {
  O(this, a, 0, -1, null, null);
};
v(QA, N);
QA.prototype.g = function(a) {
  return HA(a, this);
};
var HA = function(a, b) {
  var c = {wz:Q(b, 1), gba:Rr(b, 2)};
  a && (c.l = b);
  return c;
};
QA.prototype.j = function() {
  var a = new W;
  MA(this, a);
  return a.h();
};
var MA = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.Ib(2, c);
};
QA.prototype.Bn = function() {
  return Q(this, 1);
};
QA.prototype.No = function(a) {
  S(this, 1, a);
};
QA.prototype.$M = function() {
  return Rr(this, 2);
};
QA.prototype.ZT = function(a) {
  S(this, 2, a);
};
var WA = function(a) {
  O(this, a, 0, -1, VA, null);
};
v(WA, N);
var VA = [3, 6];
WA.prototype.g = function(a) {
  return XA(a, this);
};
var XA = function(a, b) {
  var c, e = {zua:Q(b, 1), Hza:(c = b.eC()) && YA(a, c), lxa:Q(b, 3), username:Q(b, 4), password:Q(b, 5), Pqa:P(b.KA(), bv, a)};
  a && (e.l = b);
  return e;
};
WA.prototype.j = function() {
  var a = new W;
  ZA(this, a);
  return a.h();
};
var ZA = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = a.eC();
  null != c && b.b(2, c, $A);
  c = a.a4();
  0 < c.length && b.$c(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = Q(a, 5);
  null != c && b.f(5, c);
  c = a.KA();
  0 < c.length && b.B(6, c, cv);
};
d = WA.prototype;
d.t3 = function() {
  return Q(this, 1);
};
d.yfa = function(a) {
  S(this, 1, a);
};
d.eC = function() {
  return T(this, aB, 2);
};
d.nU = function(a) {
  V(this, 2, a);
};
d.a4 = function() {
  return Q(this, 3);
};
d.l5 = function() {
  return Q(this, 4);
};
d.wU = function(a) {
  S(this, 4, a);
};
d.f4 = function() {
  return Q(this, 5);
};
d.XT = function(a) {
  S(this, 5, a);
};
d.KA = function() {
  return U(this, av, 6);
};
d.YS = function(a) {
  Vr(this, 6, a);
};
var aB = function(a) {
  O(this, a, 0, -1, null, null);
};
v(aB, N);
aB.prototype.g = function(a) {
  return YA(a, this);
};
var YA = function(a, b) {
  var c = {algorithm:Q(b, 1), nta:Q(b, 2)};
  a && (c.l = b);
  return c;
};
aB.prototype.j = function() {
  var a = new W;
  $A(this, a);
  return a.h();
};
var $A = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
};
aB.prototype.X1 = function() {
  return Q(this, 1);
};
aB.prototype.PS = function(a) {
  S(this, 1, a);
};
aB.prototype.xe = function() {
  return Q(this, 2);
};
aB.prototype.oT = function(a) {
  S(this, 2, a);
};
var cB = function(a) {
  O(this, a, 0, -1, bB, null);
};
v(cB, N);
var bB = [5];
cB.prototype.g = function(a) {
  return dB(a, this);
};
var dB = function(a, b) {
  var c, e = {Jza:Q(b, 1), send:Q(b, 2), resolution:(c = b.kc()) && Lv(a, c), priority:Q(b, 4), lG:Q(b, 5)};
  a && (e.l = b);
  return e;
};
cB.prototype.j = function() {
  var a = new W;
  eB(this, a);
  return a.h();
};
var eB = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.Z(1, c);
  c = Q(a, 2);
  null != c && b.Z(2, c);
  c = a.kc();
  null != c && b.b(3, c, Mv);
  c = Q(a, 4);
  null != c && b.Rd(4, c);
  c = a.Tf();
  0 < c.length && b.lW(5, c);
};
d = cB.prototype;
d.qha = function(a) {
  S(this, 1, a);
};
d.ce = function() {
  return Q(this, 2);
};
d.lU = function(a) {
  S(this, 2, a);
};
d.kc = function() {
  return T(this, Kv, 3);
};
d.Ds = function(a) {
  V(this, 3, a);
};
d.el = function() {
  return Q(this, 4);
};
d.aU = function(a) {
  S(this, 4, a);
};
d.Tf = function() {
  return Q(this, 5);
};
d.Fs = function(a) {
  S(this, 5, a || []);
};
d.Gp = function(a, b) {
  Tr(this, 5, a, b);
};
var fB = function(a) {
  O(this, a, 0, -1, null, null);
};
v(fB, N);
fB.prototype.g = function(a) {
  return gB(a, this);
};
var gB = function(a, b) {
  var c, e = {Kqa:(c = b.bL()) && kt(a, c), Aza:b.U4(), Bza:Q(b, 3)};
  a && (e.l = b);
  return e;
};
fB.prototype.j = function() {
  var a = new W;
  hB(this, a);
  return a.h();
};
var hB = function(a, b) {
  var c;
  c = a.bL();
  null != c && b.b(1, c, mt);
  c = Q(a, 2);
  null != c && b.wp(2, c);
  c = Q(a, 3);
  null != c && b.nh(3, c);
};
fB.prototype.bL = function() {
  return T(this, jt, 1);
};
fB.prototype.T4 = function() {
  return Q(this, 2);
};
fB.prototype.U4 = function() {
  return Sr(this.T4());
};
var jB = function(a) {
  O(this, a, 0, -1, iB, null);
};
v(jB, N);
var iB = [3];
jB.prototype.g = function(a) {
  var b = {code:R(this, 1, 0), message:R(this, 2, ""), msa:P(this.xL(), Tv, a)};
  a && (b.l = this);
  return b;
};
var kB = function(a) {
  a = new Ks(a);
  for (var b = new jB;a.Zc() && !a.jd();) {
    switch(a.Wb) {
      case 1:
        var c = a.DE();
        b.EF(c);
        break;
      case 2:
        c = a.Ta();
        b.PF(c);
        break;
      case 3:
        c = new Sv;
        a.Fe(c, Uv);
        b.gY(c);
        break;
      default:
        a.wc();
    }
  }
  return b;
};
d = jB.prototype;
d.j = function() {
  var a = new W, b;
  b = this.OA();
  0 !== b && a.s(1, b);
  b = this.getMessage();
  0 < b.length && a.f(2, b);
  b = this.xL();
  0 < b.length && a.B(3, b, Vv);
  return a.h();
};
d.OA = function() {
  return R(this, 1, 0);
};
d.EF = function(a) {
  S(this, 1, a);
};
d.getMessage = function() {
  return R(this, 2, "");
};
d.PF = function(a) {
  S(this, 2, a);
};
d.xL = function() {
  return U(this, Sv, 3);
};
d.gY = function(a, b) {
  return Wr(this, 3, a, Sv, b);
};
var lB = function(a) {
  O(this, a, 0, -1, null, null);
};
v(lB, N);
d = lB.prototype;
d.g = function(a) {
  var b, c = {Sg:R(this, 1, ""), H8:(b = this.Nq()) && gw(a, b)};
  a && (c.l = this);
  return c;
};
d.j = function() {
  var a = new W, b;
  b = this.La();
  0 < b.length && a.f(1, b);
  b = this.Nq();
  null != b && a.b(2, b, vw);
  return a.h();
};
d.La = function() {
  return R(this, 1, "");
};
d.Oa = function(a) {
  S(this, 1, a);
};
d.Nq = function() {
  return T(this, fw, 2);
};
d.NF = function(a) {
  V(this, 2, a);
};
var mB = function(a) {
  O(this, a, 0, -1, null, null);
};
v(mB, N);
mB.prototype.g = function(a) {
  var b, c = {J8:(b = this.Oq()) && Cw(a, b)};
  a && (c.l = this);
  return c;
};
mB.prototype.j = function() {
  var a = new W, b;
  b = this.Oq();
  null != b && a.b(1, b, Kw);
  return a.h();
};
mB.prototype.Oq = function() {
  return T(this, Bw, 1);
};
mB.prototype.OF = function(a) {
  V(this, 1, a);
};
var oB = function(a) {
  O(this, a, 0, -1, nB, null);
};
v(oB, N);
var nB = [1];
oB.prototype.g = function(a) {
  var b = {jwa:P(this.uB(), gw, a)};
  a && (b.l = this);
  return b;
};
oB.prototype.j = function() {
  var a = new W, b;
  b = this.uB();
  0 < b.length && a.B(1, b, vw);
  return a.h();
};
oB.prototype.uB = function() {
  return U(this, fw, 1);
};
oB.prototype.nY = function(a, b) {
  return Wr(this, 1, a, fw, b);
};
var qB = function(a) {
  O(this, a, 0, -1, pB, null);
};
v(qB, N);
var pB = [2, 3];
qB.prototype.g = function(a) {
  return rB(a, this);
};
var rB = function(a, b) {
  var c, e = {V:(c = b.m()) && Xw(a, c), lf:P(b.ua(), gw, a), Bh:Q(b, 3), ah:R(b, 4, "")};
  a && (e.l = b);
  return e;
};
qB.prototype.j = function() {
  var a = new W;
  sB(this, a);
  return a.h();
};
var sB = function(a, b) {
  var c;
  c = a.m();
  null != c && b.b(1, c, Yw);
  c = a.ua();
  0 < c.length && b.B(2, c, vw);
  c = a.ab();
  0 < c.length && b.$c(3, c);
  c = a.bb();
  0 < c.length && b.f(4, c);
};
d = qB.prototype;
d.m = function() {
  return T(this, Ww, 1);
};
d.u = function(a) {
  V(this, 1, a);
};
d.R = function() {
  this.u(void 0);
};
d.ua = function() {
  return U(this, fw, 2);
};
d.ab = function() {
  return Q(this, 3);
};
d.bb = function() {
  return R(this, 4, "");
};
var tB = function(a) {
  O(this, a, 0, -1, null, null);
};
v(tB, N);
tB.prototype.g = function(a) {
  return uB(a, this);
};
var uB = function(a, b) {
  var c, e = {lwa:R(b, 1, ""), pza:R(b, 2, ""), gra:R(b, 3, 0), timestamp:(c = b.Xh()) && Xv(a, c), pwa:(c = b.JM()) && vB(a, c)};
  a && (e.l = b);
  return e;
};
tB.prototype.j = function() {
  var a = new W;
  wB(this, a);
  return a.h();
};
var wB = function(a, b) {
  var c;
  c = a.I3();
  0 < c.length && b.f(1, c);
  c = a.O4();
  0 < c.length && b.f(2, c);
  c = a.z2();
  0 !== c && b.ha(3, c);
  c = a.Xh();
  null != c && b.b(4, c, Zv);
  c = a.JM();
  null != c && b.b(5, c, xB);
};
d = tB.prototype;
d.I3 = function() {
  return R(this, 1, "");
};
d.O4 = function() {
  return R(this, 2, "");
};
d.z2 = function() {
  return R(this, 3, 0);
};
d.Xh = function() {
  return T(this, Wv, 4);
};
d.Bx = function(a) {
  V(this, 4, a);
};
d.JM = function() {
  return T(this, yB, 5);
};
var yB = function(a) {
  O(this, a, 0, -1, null, null);
};
v(yB, N);
yB.prototype.g = function(a) {
  return vB(a, this);
};
var vB = function(a, b) {
  var c = {qAa:R(b, 1, ""), Rua:R(b, 2, !1)};
  a && (c.l = b);
  return c;
};
yB.prototype.j = function() {
  var a = new W;
  xB(this, a);
  return a.h();
};
var xB = function(a, b) {
  var c;
  c = a.c5();
  0 < c.length && b.f(1, c);
  (c = a.w3()) && b.Z(2, c);
};
yB.prototype.c5 = function() {
  return R(this, 1, "");
};
yB.prototype.w3 = function() {
  return R(this, 2, !1);
};
var AB = function(a) {
  O(this, a, 0, -1, zB, null);
};
v(AB, N);
var zB = [10];
AB.prototype.g = function(a) {
  return BB(a, this);
};
var BB = function(a, b) {
  var c, e = {cs:R(b, 1, ""), title:R(b, 2, ""), resolution:R(b, 4, 0), vza:R(b, 5, 0), Oza:(c = b.HN()) && Xv(a, c), Tza:(c = b.JN()) && Xv(a, c), wsa:R(b, 9, ""), Bra:Q(b, 10)};
  a && (e.l = b);
  return e;
}, DB = function(a) {
  a = new Ks(a);
  var b = new AB;
  return CB(b, a);
}, CB = function(a, b) {
  for (;b.Zc() && !b.jd();) {
    switch(b.Wb) {
      case 1:
        var c = b.Ta();
        a.Ke(c);
        break;
      case 2:
        c = b.Ta();
        a.setTitle(c);
        break;
      case 4:
        c = b.Zg();
        a.Ds(c);
        break;
      case 5:
        c = b.Zg();
        a.nha(c);
        break;
      case 7:
        c = new Wv;
        b.Fe(c, Yv);
        a.sha(c);
        break;
      case 8:
        c = new Wv;
        b.Fe(c, Yv);
        a.uha(c);
        break;
      case 9:
        c = b.Ta();
        a.afa(c);
        break;
      case 10:
        c = b.AR();
        a.Jea(c);
        break;
      default:
        b.wc();
    }
  }
  return a;
};
AB.prototype.j = function() {
  var a = new W;
  EB(this, a);
  return a.h();
};
var EB = function(a, b) {
  var c;
  c = a.Ad();
  0 < c.length && b.f(1, c);
  c = a.getTitle();
  0 < c.length && b.f(2, c);
  c = a.kc();
  0.0 !== c && b.A(4, c);
  c = a.R4();
  0.0 !== c && b.A(5, c);
  c = a.HN();
  null != c && b.b(7, c, Zv);
  c = a.JN();
  null != c && b.b(8, c, Zv);
  c = a.b3();
  0 < c.length && b.f(9, c);
  c = a.H2();
  0 < c.length && b.kW(10, c);
};
d = AB.prototype;
d.Ad = function() {
  return R(this, 1, "");
};
d.Ke = function(a) {
  S(this, 1, a);
};
d.getTitle = function() {
  return R(this, 2, "");
};
d.setTitle = function(a) {
  S(this, 2, a);
};
d.kc = function() {
  return R(this, 4, 0);
};
d.Ds = function(a) {
  S(this, 4, a);
};
d.R4 = function() {
  return R(this, 5, 0);
};
d.nha = function(a) {
  S(this, 5, a);
};
d.HN = function() {
  return T(this, Wv, 7);
};
d.sha = function(a) {
  V(this, 7, a);
};
d.JN = function() {
  return T(this, Wv, 8);
};
d.uha = function(a) {
  V(this, 8, a);
};
d.b3 = function() {
  return R(this, 9, "");
};
d.afa = function(a) {
  S(this, 9, a);
};
d.H2 = function() {
  return Q(this, 10);
};
d.Jea = function(a) {
  S(this, 10, a || []);
};
var GB = function(a) {
  O(this, a, 0, -1, FB, null);
};
v(GB, N);
var FB = [2];
GB.prototype.g = function(a) {
  return HB(a, this);
};
var HB = function(a, b) {
  var c, e = {V:(c = b.m()) && Xw(a, c), lf:P(b.ua(), Cw, a), ah:R(b, 3, "")};
  a && (e.l = b);
  return e;
};
GB.prototype.j = function() {
  var a = new W;
  IB(this, a);
  return a.h();
};
var IB = function(a, b) {
  var c;
  c = a.m();
  null != c && b.b(1, c, Yw);
  c = a.ua();
  0 < c.length && b.B(2, c, Kw);
  c = a.bb();
  0 < c.length && b.f(3, c);
};
d = GB.prototype;
d.m = function() {
  return T(this, Ww, 1);
};
d.u = function(a) {
  V(this, 1, a);
};
d.R = function() {
  this.u(void 0);
};
d.ua = function() {
  return U(this, Bw, 2);
};
d.bb = function() {
  return R(this, 3, "");
};
var JB = function(a) {
  O(this, a, 0, -1, null, null);
};
v(JB, N);
JB.prototype.g = function(a) {
  var b, c = {H8:(b = this.Nq()) && gw(a, b)};
  a && (c.l = this);
  return c;
};
JB.prototype.j = function() {
  var a = new W, b;
  b = this.Nq();
  null != b && a.b(1, b, vw);
  return a.h();
};
JB.prototype.Nq = function() {
  return T(this, fw, 1);
};
JB.prototype.NF = function(a) {
  V(this, 1, a);
};
var KB = function(a) {
  O(this, a, 0, -1, null, null);
};
v(KB, N);
KB.prototype.g = function(a) {
  var b, c = {J8:(b = this.Oq()) && Cw(a, b)};
  a && (c.l = this);
  return c;
};
KB.prototype.j = function() {
  var a = new W, b;
  b = this.Oq();
  null != b && a.b(1, b, Kw);
  return a.h();
};
KB.prototype.Oq = function() {
  return T(this, Bw, 1);
};
KB.prototype.OF = function(a) {
  V(this, 1, a);
};
var MB = function(a) {
  O(this, a, 0, -1, LB, null);
};
v(MB, N);
var LB = [3];
MB.prototype.g = function(a) {
  return NB(a, this);
};
var NB = function(a, b) {
  var c = {uwa:R(b, 1, "3.17.0.0"), sya:R(b, 2, "3.18.0.0"), Oqa:P(b.cL(), OB, a)};
  a && (c.l = b);
  return c;
};
MB.prototype.j = function() {
  var a = new W;
  PB(this, a);
  return a.h();
};
var PB = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = a.cL();
  0 < c.length && b.B(3, c, QB);
};
MB.prototype.cL = function() {
  return U(this, RB, 3);
};
var RB = function(a) {
  O(this, a, 0, -1, null, null);
};
v(RB, N);
RB.prototype.g = function(a) {
  return OB(a, this);
};
var OB = function(a, b) {
  var c = {LAa:Q(b, 1), name:Q(b, 2), Rya:Q(b, 3), Qya:Q(b, 4), Fta:Q(b, 5)};
  a && (c.l = b);
  return c;
};
RB.prototype.j = function() {
  var a = new W;
  QB(this, a);
  return a.h();
};
var QB = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.s(3, c);
  c = Q(a, 4);
  null != c && b.s(4, c);
  c = Q(a, 5);
  null != c && b.s(5, c);
};
RB.prototype.getName = function() {
  return Q(this, 2);
};
RB.prototype.Ro = function(a) {
  S(this, 2, a);
};
RB.prototype.Gg = function() {
  return Q(this, 5);
};
var TB = function(a) {
  $c.call(this);
  this.id = SB++;
  this.Vda = [];
  this.yi = {};
  this.Br = {};
  this.sF = {};
  this.yf = {};
  this.Li = {};
  this.iQ = {};
  this.jq = a ? a.jq : new F;
  this.dia = !a;
  this.Ol = null;
  a ? (this.Ol = a, this.sF = a.sF, this.yf = a.yf, this.Br = a.Br, this.Li = a.Li) : u();
  a = this.TB();
  this != a && (a.Pt ? a.Pt.push(this) : a.Pt = [this]);
};
v(TB, $c);
var SB = 1, UB = 0.05 > Math.random();
d = TB.prototype;
d.TB = function() {
  for (var a = this;a.Ol;) {
    a = a.Ol;
  }
  return a;
};
d.z0 = function(a) {
  for (var b = this;b;) {
    if (b == a) {
      return !0;
    }
    b = b.Ol;
  }
  return !1;
};
d.get = function(a) {
  var b = this.Sq(a);
  null == b && this.tsa && (b = {BOGUS:"Service " + a + " was not registered"});
  if (null == b) {
    throw new VB(a);
  }
  return b;
};
d.ql = function(a) {
  return !(!this.yi[a] && !this.ZB(a));
};
d.s7 = function(a) {
  return !!(this.yi[a] || this.ZB(a) || (a instanceof L ? a.G6() : this.Br[a]));
};
d.Sq = function(a) {
  for (var b = this;b;b = b.Ol) {
    if (b.isDisposed()) {
      throw Error("AppContext is disposed.");
    }
    if (b.yi[a]) {
      return b.yi[a][0];
    }
    if (b.iQ[a]) {
      break;
    }
  }
  if (b = this.ZB(a)) {
    b = b(this);
    if (null == b) {
      throw Error("Factory method for service " + a + " returned null or undefined.");
    }
    this.oi(a, b);
    return b;
  }
  return null;
};
d.ej = function(a, b) {
  return this.d2([a], b)[a];
};
d.d2 = function(a, b) {
  var c = this.$u(), e = !b;
  b = {};
  for (var f = [], h = [], k = {}, p = {}, r = this.Sq(jr), A = 0;A < a.length;A++) {
    var C = a[A], da = this.Sq(C);
    if (da) {
      var ea = new js;
      b[C] = ea;
      da.ez && (ea.qI(da.ez()), ea.lb(Ba(function(a) {
        return a;
      }, da)));
      ea.callback(da);
    } else {
      if (this.Li[C]) {
        ea = this.Li[C].Jt(), ea.lb(t(this.YB, this, C)), b[C] = ea;
      } else {
        w(!e || c, "A module manager is required for async loading. (" + C + ")");
        var Bb;
        C instanceof L ? Bb = Nq([C]).a9 : (da = this.Br[C]) && (Bb = [da]);
        !e || Bb && Bb.length ? (Bb && (r && C instanceof L && r.zza() && (UB && (ea = r.Pza(WB), p[C] = ea), r.uva(C)), f.push.apply(f, Bb), k[C] = fb(Bb)), h.push(C)) : (ea = new js, b[C] = ea, ea.cd(new VB(C)));
      }
    }
  }
  if (e) {
    if (f.length) {
      this.fz && this.fz.push("loaded(" + h + "," + f + ")\n" + vf());
      for (A = 0;A < h.length;A++) {
        this.jq.dispatchEvent(new XB("o", h[A]));
      }
      a = this.$u().h8(f);
      for (A = 0;A < h.length;A++) {
        C = h[A], da = k[C], ea = a[da].Jt(), b[C] = ea, p[C] && ea.lb(function() {
          r.ota(p[C]);
        }), this.tY(ea, C, da);
      }
    }
  } else {
    for (A = 0;A < h.length;A++) {
      C = h[A], da = f[A], ea = new js(t(this.m_, this, C)), b[C] = ea, (a = this.yf[C]) || (this.yf[C] = a = []), da && this.cY(ea, C, da), ea.lb(t(this.$B, this, C, da)), a.push({mb:this, d:ea});
    }
  }
  return b;
};
d.cY = function(a, b, c) {
  a.lb(function() {
    this.fz && this.fz.push("loaded(" + b + "," + c + ")\n" + vf());
    return this.$u().load(c);
  }, this);
  a.rt(t(this.MM, this, b, c));
};
d.tY = function(a, b, c) {
  a.lb(function() {
    this.jq.dispatchEvent(new XB("p", b));
  }, this);
  a.rt(t(this.MM, this, b, c));
  a.lb(t(this.$B, this, b, c));
};
d.$B = function(a, b) {
  var c = this.Sq(a);
  if (null == c) {
    if (this.Li[a]) {
      var e = this.Li[a].Jt();
      e.lb(t(this.$B, this, a, b));
      return e;
    }
    throw new YB(a, b, "Module loaded but service or factory not registered with app contexts.");
  }
  return c.ez ? (e = new js, e.qI(c.ez()), e.callback(c), e.lb(t(this.YB, this, a)), e) : this.YB(a);
};
d.YB = function(a) {
  this.Li[a] && delete this.Li[a];
  return this.get(a);
};
d.MM = function(a, b, c) {
  return c instanceof ks ? c : new ZB(a, b, c);
};
d.oi = function(a, b, c) {
  if (this.isDisposed()) {
    c || ad(b);
  } else {
    w(!this.yi[a], 'Service for "%s" is already registered', a);
    this.Vda.push(a);
    this.yi[a] = [b, !c];
    c = this.G1(this, a);
    for (var e = 0;e < c.length;e++) {
      c[e].callback(null);
    }
    delete this.Br[a];
    return b;
  }
};
d.ZB = function(a) {
  return this.sF[a];
};
d.G1 = function(a, b) {
  var c = [], e = this.yf[b];
  e && (ib(e, function(b) {
    b.mb.z0(a) && (c.push(b.d), wb(e, b));
  }), 0 == e.length && delete this.yf[b]);
  return c;
};
d.n_ = function(a) {
  this.yf && Ke(this.yf, function(b, c, e) {
    ib(b, function(c) {
      c.mb == a && wb(b, c);
    });
    0 == b.length && delete e[c];
  });
};
d.m_ = function(a, b) {
  var c = this.yf && this.yf[a];
  if (c) {
    for (var e = 0;e < c.length;++e) {
      if (c[e].mb == this && c[e].d == b) {
        vb(c, e);
        break;
      }
    }
    0 == c.length && delete this.yf[a];
  }
};
d.aa = function() {
  if (this.TB() == this) {
    var a = this.Pt;
    if (a) {
      for (;a.length;) {
        a[0].ob();
      }
    }
  } else {
    for (var a = this.TB().Pt, b = 0;b < a.length;b++) {
      if (a[b] == this) {
        a.splice(b, 1);
        break;
      }
    }
  }
  for (var c in this.yi) {
    a = this.yi[c], a[1] && a[0].ob && a[0].ob();
  }
  this.yi = null;
  this.dia && this.jq.ob();
  this.n_(this);
  this.yf = null;
  ad(this.aaa);
  this.iQ = this.aaa = null;
  TB.X.aa.call(this);
};
d.$u = function() {
  return this.bQ ? this.bQ : this.Ol ? this.Ol.$u() : null;
};
d.Zfa = function(a) {
  this.bQ = a;
};
var VB = function(a) {
  Ca.call(this);
  this.id = a;
  this.message = 'Service for "' + a + '" is not registered';
};
v(VB, Ca);
var ZB = function(a, b, c) {
  Ca.call(this);
  this.cause = c;
  this.message = 'Module "' + b + '" failed to load when requesting the service "' + a + '" [cause: ' + c + "]";
  this.stack = c.stack + "\nWRAPPED BY:\n" + this.stack;
};
v(ZB, Ca);
var YB = function(a, b, c) {
  Ca.call(this);
  this.message = 'Configuration error when loading the module "' + b + '" for the service "' + a + '": ' + c;
};
v(YB, Ca);
var XB = function(a) {
  E.call(this, a);
};
v(XB, E);
var $B = new eq("fva"), WB = new Mq($B, 1);
Nf("fava.debug.errorContext");
var bC = function(a) {
  a.ql(yr) || a.oi(yr, aC.ea());
}, aC = function() {
  this.a = Nf("realtime.analytics.ImpressionLogger");
};
qa(aC);
aC.prototype.Xf = function(a, b, c, e, f, h, k) {
  a = "Impression: " + a;
  b && (a += " SID: " + b);
  c && (a += " PLID: " + c);
  e && (a += " HID: " + e);
  f && (a += " TS: " + f);
  h && (a += " XN: " + h);
  k && (a += " XS: " + k);
  J(this.a, a);
};
var cC = function(a) {
  var b = new Hy;
  b.hea(a);
  b.Xea(sc && mc ? 2 : sc ? 3 : tc ? 4 : uc ? 5 : 1);
  b.Cga(1);
  return b;
};
var eC = function(a, b, c, e, f, h, k) {
  F.call(this);
  this.cc = e;
  this.$D = f;
  this.dn = this.cc.zJ(c);
  this.eb = ++dC;
  this.w = Nf("realtime.collections.Collection." + this.eb);
  this.Rr = f.cg;
  this.cf = k || null;
  this.Pj = h && h.Pj || null;
  this.sG = f.jv();
  this.un = h && h.KL() || null;
  this.Hc = new Ik(this);
  this.pa(this.Hc);
  this.data = [];
  this.yu = [];
  this.kK = {};
  this.xb = -2;
  this.rl = !0;
  this.wj = G();
  this.state = "Pa";
  this.config = b.an();
  this.Ck = Vs.ea();
  this.Rj = {};
  this.jK = Ld;
};
v(eC, F);
var fC = new H(10, 67);
eC.prototype.lv = function(a) {
  return new gC(a.rp, a.data, [], "La");
};
var hC = function(a, b) {
  return new gC(b.rp, [], a, "La");
}, dC = 0, iC = 0;
d = eC.prototype;
d.Jc = function() {
  "Pa" != this.state || this.Ck.ll || (this.state = "Na", this.Pj && this.Hc.listen(this.Pj, w(this.un), this.MQ));
};
d.start = function(a) {
  a && (w(!this.jf()), this.dn = bs(a));
  "Pa" == this.state && this.Jc();
  if ("Na" != this.state || this.Ck.ll) {
    return null;
  }
  this.state = "Oa";
  this.OP();
  J(this.w, "Collection started: " + this.toString() + ", " + this.Fg());
  return null;
};
d.stop = function() {
  if ("Oa" == this.state || "Na" == this.state) {
    this.flush(), this.Lx(), this.state = "Pa", J(this.w, "Collection stopped: " + this.toString() + ": " + this.Fg());
  }
};
d.OP = function() {
  this.rl && this.wj && (J(this.w, "Initial data available: " + this.toString()), this.wj.resolve(this.yu), this.wj = null);
};
d.ae = function() {
  return this.config;
};
d.Lx = function() {
  this.Pj && this.Hc.vd(this.Pj, w(this.un), this.MQ);
};
d.Pu = function() {
  return bs(this.dn);
};
d.Ff = function(a) {
  return a ? this.cc.z7(a) ? (w(this.cc.ZO(this.dn, a)), this.cc.Ff(this.cc.hn(a))) : this.cc.Ff(this.cc.Zt(this.dn), a) : this.cc.Ff(this.cc.Zt(this.dn));
};
d.jf = function() {
  return "Oa" == this.state && !this.Ck.ll;
};
d.Dv = function() {
  return "Oa" == this.state;
};
d.x7 = function() {
  return ("Oa" == this.state || "Na" == this.state) && !this.Ck.ll;
};
d.aa = function() {
  this.flush();
  this.stop();
  null != this.wj && (I(this.w, "Never any data: " + this.toString()), this.wj.promise.cancel(), this.wj = null);
  eC.X.aa.call(this);
};
d.get = function() {
  return this.yu;
};
d.ej = function() {
  return null != this.wj ? this.wj.promise : ie(this.get());
};
d.flush = function() {
  var a;
  do {
    this.l_(), a = this.nq();
  } while (0 < a);
};
d.l_ = function() {
  Lb(this.Rj, function(a) {
    for (;a && 1 <= a.length && a[0].bx;) {
      a.shift();
    }
  });
};
d.na = function() {
  return y(this.data, function(a) {
    return a.Ua();
  });
};
d.add = function(a, b) {
  return this.xC(a) && this.sG ? (a = this.nA("Ra", a), $d(this.nq, this), a) : this.lo("Ra", this.Xe([a]), t(this.lv, this), a, b);
};
d.modify = function(a, b) {
  return this.xC(a) && this.sG ? (a = this.nA("Sa", a), $d(this.nq, this), a) : this.lo("Sa", this.Ye([a]), t(this.lv, this), a, b);
};
d.remove = function(a, b, c) {
  var e = this.Zx(a);
  return this.xC(a) && null == c && this.sG ? (a = this.nA("Ta", e, b), $d(this.nq, this), a) : this.lo("Ta", this.ue([e], b), Ba(hC, [e]), e, c);
};
d.nA = function(a, b, c) {
  var e = this.Zx(b).toString(), f = this.Rj[e] || [];
  this.Rj[e] = f;
  var e = null, h = f.length;
  if (1 <= h && !f[h - 1].bx) {
    if (h = f[h - 1], "Ra" == a) {
      if ("Ra" == h.type || "Sa" == h.type) {
        e = h.Pb, f.pop(), this.va("e");
      }
    } else {
      if ("Sa" == a && ("Ra" == h.type || "Sa" == h.type)) {
        return h.ui = this.M8(h.ui, b), this.va("d"), h.Pb.promise;
      }
    }
  }
  a = new jC(a, b, e, c);
  f.push(a);
  return a.Pb.promise;
};
d.nq = function() {
  var a = 0, b = {};
  Lb(this.Rj, function(c) {
    if (c && 1 <= c.length && (c = c[0], !c.bx)) {
      c.bx = !0;
      if ("Ta" == c.type && c.hI) {
        var e = [c.ui];
        this.Dx(this.ue(e, c.hI), Ba(hC, e), [c.Pb], e);
      } else {
        e = b[c.type] || [], e.push(c), b[c.type] = e;
      }
      a++;
    }
  }, this);
  Lb(b, function(a, b) {
    if (1 <= a.length) {
      var c = [], e = [];
      x(a, function(a) {
        c.push(a.ui);
        e.push(a.Pb);
      });
      switch(b) {
        case "Ra":
          this.Dx(this.Xe(c), t(this.lv, this), e, c);
          break;
        case "Sa":
          this.Dx(this.Ye(c), t(this.lv, this), e, c);
          break;
        case "Ta":
          this.Dx(this.ue(c), Ba(hC, c), e, c);
          break;
        default:
          Ya("A request with type " + b + " was put in the queue.");
      }
    }
  }, this);
  return a;
};
d.Dx = function(a, b, c, e) {
  null == a && x(c, function(a) {
    a.reject("Operation not available");
  });
  if (!this.Ck.ll) {
    a.Qo(this.config.xM());
    a.pm(this.config.tN());
    e = y(e, this.Zx, this);
    var f = a.getPromise();
    f.then(t(this.nK, this, e), t(this.nK, this, e));
    f.then(t(this.HQ, this, a, b, c, e)).zb(t(this.IQ, this, a, c));
    this.Rr.execute(a);
  }
};
d.Db = function() {
  return je("Resync not supported");
};
d.bo = function() {
  return !0;
};
d.Xe = function(a) {
  return this.$D.Xe(a);
};
d.Ye = function(a) {
  return this.$D.Ye(a);
};
d.ue = function(a, b) {
  return this.$D.ue(y(a, this.$t, this), b);
};
d.Hv = function(a) {
  return this.cc.NC(a);
};
d.xC = function(a) {
  return a instanceof kC ? this.cc.NC(this.$t(a)) : this.cc.NC(a);
};
d.gd = function(a) {
  return this.b0(this.cc.zJ(this.cc.hn(a)));
};
d.jz = function(a) {
  return this.cc.ZO(this.dn, this.$t(a));
};
d.lo = function(a, b, c, e, f) {
  if (null == b) {
    return je("Operation not available");
  }
  a = G();
  this.Xha(b, c, a, f);
  this.rA(b, null);
  return a.promise;
};
d.Xha = function(a, b, c, e) {
  e = null != e ? e : Za(this.config.xM());
  a.Qo(e);
  a.pm(a.tj() || Za(this.config.tN()));
  !this.Ck.ll && null != c && a.getPromise().then(t(this.HQ, this, a, b, [c], null)).zb(t(this.IQ, this, a, [c]));
};
d.rA = function(a, b) {
  this.Ck.ll || (J(this.w, "Executing operation: " + a), this.Rr.execute(a), null != b && a.getPromise().then(b, b));
};
d.HQ = function(a, b, c, e, f) {
  J(this.w, "Operation executed: " + a + ", result:" + f);
  this.va("b");
  null != b && (this.bo(f.rp) ? (a = b(f)) ? this.yE(a) : J(this.w, "Operation resulted in no update") : this.jf() && Ya("Result of an operation must have a valid version number, if the collection is active."));
  !e || null == f.data || 1 >= f.data.length ? (w(1 == c.length, "The result has only one resource but the length of resolver list is " + c.length), c[0].resolve(f.data)) : (w(c.length == e.length, "Resolver list and resource list have different length"), x(c, function(a, b) {
    var c = e[b];
    b = jb(f.data, function(a) {
      return this.Zx(a).equals(c);
    }, this);
    0 == b.length && Pf(this.w, "Result data is empty after filtering for target resource id " + c);
    a.resolve(b);
  }, this));
};
d.IQ = function(a, b, c) {
  var e = "Operation failed: " + c;
  Pf(this.w, e, c instanceof Error ? c : Error(e));
  this.va("a", new lC(a.lC(), a.OB(), c));
  x(b, function(a) {
    a.reject(c);
  });
  null != c.response && (a = c.response.getResponseHeader(), b = fC.get(a.Sa()), null != b && this.vA(b, "Collection apiary operation failed with response code " + a.Sa() + " triggering endcause " + b));
  return c;
};
d.nK = function(a) {
  var b = !1;
  x(a, function(a) {
    var c = this.Rj[a.toString()];
    c && 1 <= c.length ? (c.shift(), b = b || 1 <= c.length) : Pf(this.w, "A writing request with resource id " + a + " completed but it is not in the request queue.");
  }, this);
  b && this.nq();
};
d.MQ = function(a) {
  this.x7() && this.xE(a);
};
d.xE = function(a) {
  var b = this.bO(a);
  J(this.w, "Received push notification, version: " + b + ", checking if any updates apply to this collection " + this.toString());
  var c = this.P3(a);
  a = this.S2(a);
  c.length || a.length ? (J(this.w, "Notification applies to this collection: version: " + b + ", add/modify: " + c.length + ", remove:" + a.length), b = new gC(b, c, a, "Ka"), K(this.w, "Created partial update for notification: " + b), Of(this.w, Hf, "Add/modify: [" + b.Ys.join("|") + "], remove: [" + b.Zs.join("|") + "]"), this.va("f"), this.yE(b)) : J(this.w, "Notification does not apply to this collection, ignoring.");
};
d.Uz = function(a) {
  return this.cc.Uz(a);
};
d.Xt = function(a) {
  return this.cc.Xt(a);
};
d.bO = function() {
  return -2;
};
d.P3 = function(a) {
  var b = [];
  x(a.notification.ua(), function(a) {
    a = this.Uz(a);
    this.Hv(a) ? this.jz(this.gd(a)) && b.push(a) : this.va("z", "Pushed modified: " + a.Ua());
  }, this);
  return b;
};
d.S2 = function(a) {
  if (!a.notification.ab) {
    return [];
  }
  var b = [];
  x(a.notification.ab(), function(a) {
    var c = this.Xt(a);
    this.Hv(c) ? (a = this.gd(c), this.jz(a) && b.push(a)) : this.va("z", "Pushed deleted: " + a.Ua());
  }, this);
  return b;
};
d.yE = function(a) {
  K(this.w, "Begin processing update: " + a);
  a instanceof gC && (K(this.w, "Applying partial update: " + a), this.dz(a));
  K(this.w, "Finish processing update: " + a + ": " + this.Fg());
};
d.Fg = function() {
  return "state: " + this.state + ", local version: " + this.xb + ", snapshot size: " + this.data.length;
};
d.dz = function(a) {
  K(this.w, "Processing partial update: " + a);
  Of(this.w, Hf, "Add/modify: [" + a.Ys.join("|") + "], remove: [" + a.Zs.join("|") + "]");
  x(a.Ys, function(a) {
    if (this.Hv(a)) {
      var b = bs(a);
      xb(this.data, function(b) {
        return this.gd(b).equals(this.gd(a));
      }, this);
      this.data.push(b);
    } else {
      this.va("z", "Partial update: " + a.Ua());
    }
  }, this);
  var b = [];
  x(a.Zs, function(a) {
    xb(this.data, function(b) {
      return this.gd(b).equals(a);
    }, this) || b.push(a);
  }, this);
  0 < b.length && this.va("A", "Resources not found: " + tf(b));
  this.DG();
};
d.DG = function() {
  var a = jb(this.data, this.jK, this), b = this.A_(a), c = b.Mb, e = b.tk, b = b.removed;
  if (0 < c.length || 0 < e.length || 0 < b.length) {
    J(this.w, "Obtained update of the filtered view : modified: " + c.length + ", added: " + e.length + ", removed:" + b.length), Of(this.w, Hf, "Modified: [" + c.join("|") + "], added: [" + e.join("|") + "], removed: [" + b.join("|") + "]"), this.yu = a, this.dispatchEvent(new mC(c, e, b));
  }
};
d.A_ = function(a) {
  var b = {}, c = [], e = [];
  x(a, function(a) {
    var f = this.cc.hn(a), h = f.join("/"), r = b[h];
    r || (r = [], b[h] = r);
    r.push({key:f, ui:a});
    (h = (h = this.kK[h]) && nb(h, function(a) {
      return Jb(a.key, f);
    })) ? $r(a, h.ui) || c.push(a) : e.push(a);
  }, this);
  var f = [];
  x(this.yu, function(a) {
    var c = this.cc.hn(a), e = b[c.join("/")];
    e && -1 != mb(e, function(a) {
      return Jb(c, a.key);
    }) || f.push(a);
  }, this);
  this.kK = b;
  return {Mb:c, tk:e, removed:f};
};
d.f7 = function(a) {
  this.jK = a;
  this.DG();
};
d.va = function(a, b) {
  null != this.cf && this.cf.va(a, b);
};
d.M8 = function(a, b) {
  var c = JSON.parse(a.Ua());
  b = JSON.parse(b.Ua());
  for (var e = 0;e < b.length;e++) {
    null != b[e] && !Zr(c[e], b[e]) && (c[e] = b[e]);
  }
  return new a.constructor(c);
};
d.Zx = function(a) {
  return null == a || a instanceof kC ? a : this.gd(a);
};
var nC = function(a) {
  this.jb = a;
  this.id = ++iC;
}, gC = function(a, b, c, e) {
  nC.call(this, a);
  this.BV = e;
  this.Ys = b;
  this.Zs = c;
};
v(gC, nC);
gC.prototype.toString = function() {
  return "[Partial update id: " + this.id + ", version: " + this.jb + ", add/modify: " + this.Ys.length + ", remove: " + this.Zs.length + ", type: " + this.BV + "]";
};
eC.prototype.vA = function(a, b) {
  "Qa" != this.state && (this.Lx(), this.state = "Qa", Pf(this.w, "Collection failed: " + this.toString() + ": " + this.Fg(), Error(b)), this.dispatchEvent(new oC(a, b)));
};
var jC = function(a, b, c, e) {
  this.type = a;
  this.ui = b;
  this.Pb = c || G();
  this.hI = e || null;
  this.bx = !1;
};
eC.prototype.$t = function(a) {
  eb(a, kC);
  return a.vv;
};
eC.prototype.b0 = function(a) {
  return new kC(this.cc, a);
};
var kC = function(a, b) {
  this.dda = a;
  this.vv = b;
};
kC.prototype.equals = function(a) {
  eb(a, kC);
  return this.dda.$O(this.vv, a.vv);
};
kC.prototype.toString = function() {
  return this.vv.Ua();
};
var mC = function(a, b, c) {
  E.call(this, "P");
  this.tk = b;
  this.Mb = a;
  this.removed = c;
};
v(mC, E);
var oC = function(a, b) {
  E.call(this, "R");
  this.Gb = a;
  this.reason = b;
};
v(oC, E);
var lC = function(a, b, c) {
  uf(c);
  this.request = b;
  this.su = c;
};
v(lC, Error);
var pC = function() {
  this.fc = this.dc = null;
  this.im = [];
  this.AD = [];
  this.BD = new Ne;
  this.Ha = [];
  this.uv = "ICE";
  this.tv = "full";
  this.eH = [];
};
d = pC.prototype;
d.gF = function() {
  this.fc = this.dc = null;
  this.im = [];
  this.AD = [];
  this.BD.clear();
  this.Ha = [];
  this.uv = "ICE";
  this.tv = "full";
  this.eH = [];
};
d.toSdp = function(a, b, c) {
  this.dc && this.gF();
  this.dc = a;
  this.fc = c || null;
  this.eH = b || [];
  this.im = this.hZ();
  a = [this.dc.wa, this.dc.sa, this.dc.getData()];
  x(a, function(a) {
    null != a && this.mZ(a, this.dc.lc(), this.dc.hj());
  }, this);
  this.im.push(this.sb("group:BUNDLE", this.AD.join(" ")));
  this.im.push(this.sb("ice-options:trickle"));
  this.fc || (this.AI(this.im, this.uv, this.tv), a = this.sb("msid-semantic:", "WMS " + this.BD.T().join(" ")), this.im.push(a));
  this.Ha.push("");
  return this.im.concat(this.Ha).join("\r\n");
};
d.hZ = function() {
  if (this.fc) {
    return this.fc.XN("session");
  }
  var a = Math.pow(2, 53) * Math.random(), b = [];
  b.push("v=0");
  b.push("o=- " + a + " 2 IN IP4 127.0.0.1");
  b.push("s=-");
  b.push("t=0 0");
  return b;
};
d.mZ = function(a, b, c) {
  var e = a.W(), f = Xb(mq)[e], h = a.Qf();
  this.AD.push(h);
  var k = a.ed(), p = a.rd, r = "RTP/SAVPF";
  b && b.xe() && (r = p ? "DTLS/SCTP" : "UDP/TLS/RTP/SAVPF");
  var A = "m=" + f + " 9 " + r;
  "DTLS/SCTP" == r ? A += " " + p.vb() : x(k, function(a) {
    A += " " + a.od;
  }, this);
  this.Ha.push(A);
  r = "inactive";
  a.ce() && a.Kw ? r = "sendrecv" : a.Kw ? r = "recvonly" : a.ce() && (r = "sendonly");
  this.lZ(f, h, r);
  this.zZ(b);
  this.fZ(c);
  this.qZ(a.gl());
  this.dZ(k, e);
  (b = a.xd()) && this.ZY(0 < k.length ? k[0].od : null, b);
  this.sZ(p);
  this.xZ(a.Kb());
};
d.sb = function(a, b) {
  a = "a=" + a;
  null == b || Ha(b) || (a = a + " " + b);
  return a;
};
d.lZ = function(a, b, c) {
  if (this.fc) {
    if (a = this.fc.XN(a)) {
      this.Ha = this.Ha.concat(a);
    }
  } else {
    this.Ha.push("c=IN IP6 ::"), this.Ha.push(this.sb("rtcp:9", "IN IP6 ::")), this.Ha.push(this.sb("rtcp-mux"));
  }
  this.Ha.push(this.sb("mid:" + b));
  this.Ha.push(this.sb(c));
  b = y(this.eH, function(a) {
    return this.sb("x-google-flag:" + a);
  }, this);
  this.Ha = this.Ha.concat(b);
};
d.zZ = function(a) {
  var b = a && a.Qj || "123456789012345678901234";
  this.Ha.push(this.sb("ice-ufrag:" + (a && a.lk || "1234567890123456")));
  this.Ha.push(this.sb("ice-pwd:" + b));
  a && (this.uv = a.Uf(), this.tv = a.X8);
  this.AI(this.Ha, this.uv, this.tv);
  a && a.xe() && (this.Ha.push(this.sb("fingerprint:" + a.xe())), this.Ha.push(this.sb("setup:" + (a.XJ || "actpass"))));
};
d.AI = function(a, b, c) {
  "ICE" == b ? "lite" == c && a.push(this.sb("ice-lite")) : Ya("google-ice is no longer supported.");
};
d.fZ = function(a) {
  var b;
  0 < a.length && (b = a[0]);
  null != b && this.Ha.push(this.sb("crypto:" + b.dr(), b.sj() + " " + b.Kn()));
};
d.qZ = function(a) {
  x(a, function(a) {
    this.Ha.push(this.sb("extmap:" + a.getId(), a.Rn()));
  }, this);
};
d.dZ = function(a, b) {
  x(a, function(a) {
    var c = a.od, f = a.getName(), h = a.xh;
    if ("v" == b || "d" == b) {
      h = 90000;
    }
    f = f + "/" + h;
    "a" == b && 1 < a.xg && (f += "/" + a.xg);
    this.Ha.push(this.sb("rtpmap:" + c, f));
    a = a.AB();
    if (0 < a.length) {
      var k = [];
      x(a, function(a) {
        a.getKey() && a.zc() && k.push(a.getKey() + "=" + a.zc());
      }, this);
      a = "";
      0 < k.length && (a = k.join("; "));
      this.Ha.push(this.sb("fmtp:" + c, a));
    }
    "v" != b || 100 != c || this.fc || (a = "rtcp-fb:" + c, this.Ha = this.Ha.concat([this.sb(a, "ccm fir"), this.sb(a, "nack"), this.sb(a, "goog-remb")]));
    this.fc && (c = this.fc.g5(c)) && (this.Ha = this.Ha.concat(c));
  }, this);
};
d.ZY = function(a, b) {
  var c = b.ei;
  -1 != c && this.Ha.push("b=AS:" + c);
  qi && null != a && (a = "fmtp:" + a, c = b.sm, -1 != c && this.Ha.push(this.sb(a, "x-google-start-bitrate=" + c)), b = b.El, -1 != b && this.Ha.push(this.sb(a, "x-google-min-bitrate=" + b)));
};
d.sZ = function(a) {
  a && this.Ha.push(this.sb("sctpmap:" + a.vb() + " " + a.getName() + " " + a.Bl));
};
d.xZ = function(a) {
  x(a, function(a) {
    if (!Ha(Qa(a.Yf))) {
      var b = a.Ga(), e = w(a.Yf), f = a.Dl ? a.Dl : e;
      this.BD.add(e);
      var h = y(a.EN(), function(a) {
        return this.sb("ssrc-group:" + a.Xq(), a.ze().join(" "));
      }, this);
      this.Ha = this.Ha.concat(h);
      x(a.ze(), function(a) {
        var c = "ssrc:" + a, c = [this.sb(c, "cname:" + b), this.sb(c, "msid:" + e + " " + f)];
        null != this.fc && (a = this.fc.i5(a)) && (c = c.concat(a));
        this.Ha = this.Ha.concat(c);
      }, this);
    }
  }, this);
};
var qC = function(a) {
  F.call(this);
  this.dk = a;
  this.dk.tx(this);
  this.pa(this.dk);
};
v(qC, F);
d = qC.prototype;
d.Dh = "Xa";
d.na = function() {
  return {config:this.ae(), muted:this.rr(), state:this.Y2()};
};
d.S = function() {
  return this.dk;
};
d.rr = function() {
  return "za" == this.S().getState();
};
d.ae = function() {
  return null;
};
d.Y2 = function() {
  switch(this.Dh) {
    case "Wa":
      return chrome.i18n.getMessage("6950033741572394811");
    case "Xa":
      return chrome.i18n.getMessage("8757444822404164848");
    case "Ya":
      return chrome.i18n.getMessage("4782049665629043191");
    case "Za":
      return chrome.i18n.getMessage("2100823569845184829");
    case "$a":
      return chrome.i18n.getMessage("99290588561553105");
    case "ab":
      return chrome.i18n.getMessage("7017840133230118615");
  }
  return "";
};
d.jT = function(a) {
  this.Dh = a;
  this.dispatchEvent("U");
};
d.NR = pa;
d.AG = pa;
d.yU = pa;
var rC = function(a) {
  fw.call(this, a);
  this.oz = this.Bc = null;
};
v(rC, fw);
var sC = /^(spaces\/[a-zA-Z0-9_-]+)\//, tC = function(a) {
  return (a = sC.exec(a)) ? a[1] : null;
};
rC.prototype.La = function() {
  return tC(this.df()) || this.Bc;
};
rC.prototype.Oa = function(a) {
  w(!tC(this.df()));
  this.Bc = a;
};
rC.prototype.oea = function(a) {
  this.oz = a;
};
var uC = function(a) {
  if (n(a)) {
    w(/^spaces\/[a-zA-Z0-9_-]+$/.test(a));
    var b = new vx;
    b.Oa(a);
    return b;
  }
  return eb(a, vx);
};
var vC = function(a, b, c, e, f) {
  F.call(this);
  this.Lp = b;
  this.Mp = c;
  this.fg = f || "https://clients6.google.com";
  this.Sd = e;
  this.Qc = a;
  this.ao = a instanceof Ex;
  this.kba = "POST";
  this.Bj = G();
  this.Qc.pr() ? this.Bj.resolve() : this.Qc.io(this.ao ? "O" : "N", function() {
    this.Bj.resolve();
  }, !1, this);
};
v(vC, F);
d = vC.prototype;
d.Yk = function() {
};
d.Nu = function() {
  return this.Qc;
};
d.dj = function() {
  return this.Sd;
};
d.request = function(a, b, c, e, f, h, k) {
  this.Bj.promise.then(function() {
    var p = this.eu().zx(this.fg).Ai("/" + this.Lp + "/" + this.Mp + "/" + a).nx(b).bG(c).Cx(!l(k) || k).vs(e), r = G();
    r.promise.then(f, h || pa);
    p.Xj.ix(t(r.resolve, r)).lx(t(r.reject, r));
    this.Qc.request(p);
  }, null, this);
};
d.ko = function(a, b, c, e) {
  var f = Ha(Qa(this.dj())) ? {} : {key:this.dj()}, h = this.eu().zx(this.fg).Ai("/" + this.Lp + "/" + this.Mp + "/" + a).nx(this.kba).bG(f).Cx(!0).vs(b);
  null != c && h.GF(c);
  null != e && h.RF(e);
  var k = G();
  h.Xj.ix(t(function(a) {
    var b = null;
    try {
      b = this.p0(a);
    } catch (C) {
      a = this.ao ? new gr("fatal", "response_decoding", null, a) : new fr("fatal", "response_decoding", null, a);
      k.reject(a);
      return;
    }
    var c = this.E4(b);
    1 == c ? k.resolve(b) : this.B7(c) ? h.ck("r") : (a = this.ao ? new gr("fatal", "backend", null, a) : new fr("fatal", "backend", null, a), k.reject(a));
  }, this)).lx(t(k.reject, k));
  this.Bj.promise.then(t(this.Qc.request, this.Qc, h));
  return k.promise;
};
d.E4 = function(a) {
  var b = 0;
  a && va(a.getResponseHeader) && (a = a.getResponseHeader()) && va(a.Sa) && (b = a.Sa());
  return b;
};
d.B7 = function(a) {
  return this.ao ? 2 == a || 3 == a ? !0 : !1 : !1;
};
d.p0 = function(a) {
  a = cb(this.ao ? a.bd : a);
  if (0 < a.length) {
    var b = ds[a[0]];
    if (!b) {
      throw Error("Unknown JsPb message type: " + a[0]);
    }
    a = new b(a);
  } else {
    a = null;
  }
  return a;
};
d.eu = function() {
  return this.ao ? new ir : new rr;
};
var wC = function(a) {
  this.yg = null;
  this.R6 = !!a;
};
d = wC.prototype;
d.WI = function() {
  this.yg = null;
};
d.yC = function() {
  return !!this.yg;
};
d.xja = function(a) {
  this.R6 || this.sV(a);
};
d.tV = function(a) {
  if (a) {
    a = a.split(";");
    w(2 == a.length);
    var b = Number(a[0]);
    if (!isNaN(b)) {
      var c = new Jv;
      c.Bx(b);
      c.Lea(a[1]);
      this.sV(c);
    }
  }
};
d.sV = function(a) {
  if (!this.yg || this.yg.Xh() < a.Xh()) {
    this.yg = a.an();
  }
};
d.FA = function() {
  return this.yg ? this.yg.Xh() + ";" + this.yg.J2() : null;
};
var xC = function(a) {
  $c.call(this);
  this.Jw = G();
  this.XO = !1;
  a.then(function(a) {
    this.Bb = {Xda:a};
    this.XO = !0;
    this.Jw.resolve(null);
  }, pa, this);
  this.a = Nf("realtime.network.CorsApiaryTransport");
};
v(xC, $c);
xC.prototype.sendRequest = function(a, b) {
  var c = G();
  if (!this.XO) {
    return Pf(this.a, "Attempted to use Apiary transport when not ready."), c.reject(new gr("fatal", "transport_unavailable", null, null)), c.promise;
  }
  w(!Ha(Qa(a.qj())));
  b = Bx(a, b);
  var e = w(b.headers, "request headers must be provided"), f = e["Content-Type"], h = b.body;
  h && !f && (f = "application/json", e["Content-Type"] = f);
  "application/json" != f || b.params.alt || (b.params.alt = "json");
  !h || !wa(h) || h instanceof Uint8Array || (h = tf(h));
  Pb(e, "Authorization") && (w(this.Bb, "config should be set because the sesion index promise has resolved due to the isReady requirement"), e["X-Goog-AuthUser"] = this.Bb.Xda);
  f = Sc(Uc([b.path], b.params));
  f = Zc(b.root, f);
  Xf(f, t(this.RQ, this, c, a), b.method, h, e, a.Xi || 0, !0);
  return c.promise;
};
xC.prototype.RQ = function(a, b, c) {
  var e = c.target;
  c = {body:e.ef(), headers:e.QB(), status:e.Sa(), statusText:e.hC()};
  c = {uj:e.Sa(), headers:e.QB(), Sba:tf(c), bd:null};
  if (null != e.ef()) {
    try {
      var f = b.eA;
      if (f) {
        if (e.Ed()) {
          var h = "base64" == e.getResponseHeader("X-Goog-Safety-Encoding") ? Wj(e.ef()) : e.C4();
          c.bd = f(h);
        }
      } else {
        c.bd = Xp(e.ef());
      }
    } catch (k) {
      I(this.a, "Failed to parse response: " + k);
    }
  }
  e.zv() && e.Ed() ? null != c.bd ? null != c.bd && null != c.bd.error ? (c.uj = c.bd.error.code, I(this.a, "Request failed " + c.bd.error.code + ": " + c.bd.error.message), a.reject(new gr("retry", "network_or_frontend", c.uj, c))) : (f = Nf("realtime.network.ApiaryTransportHelper"), h = c.bd, (b = b.er()) && !ua(h) || !b && !wa(h) ? (I(f, "Apiary returned bad response type; expected " + (b ? "Array" : "Object") + ", received " + ra(h)), a.reject(new gr("retry", "response_format", c.uj, c))) : a.resolve(c)) : 
  a.reject(new gr("retry", "response_decoding", c.uj, c)) : (e.Sa() || (I(this.a, "Request failed: A network error occurred and the request could not be completed"), c.uj = -1), a.reject(new gr("retry", "network_or_frontend", c.uj, c)));
};
var yC = function(a, b, c) {
  F.call(this);
  this.fg = c;
  this.Sd = Qa(b);
  this.Qc = a;
  this.Bj = G();
  this.Qc.pr() ? this.Bj.resolve() : this.Qc.io("O", function() {
    this.Bj.resolve();
  }, !1, this);
};
v(yC, F);
yC.prototype.Yv = function(a, b, c, e, f, h, k) {
  e = t(ab(e.j, "Request JSPB was not compiled with binary support."), e);
  a = Vb(a);
  a["X-Goog-Encode-Response-If-Executable"] = "base64";
  this.Sd && (a["X-Goog-Api-Key"] = this.Sd);
  a = (new ir).zx(this.fg).Ai("/$rpc/" + b + "/" + c).vT(a).nx("POST").bT("application/x-protobuf").Cx(!1).Wea(f).vs(e());
  return this.Nda(a, h, k);
};
yC.prototype.Nda = function(a, b, c) {
  null != b && a.GF(b);
  null != c && a.RF(c);
  b = G();
  a.Xj.ix(t(b.resolve, b)).lx(t(b.reject, b));
  this.Bj.promise.then(t(this.Qc.request, this.Qc, a));
  return b.promise;
};
var zC = function() {
  $c.call(this);
  this.Fl = {};
  this.bi = [];
  this.ti = [];
  this.ms = [];
  this.Kd = [];
  this.ht = [];
  this.uh = {};
  this.TY = new sr([], "");
  this.U6 = new js;
  this.a = Nf("goog.module.ModuleManager");
  this.C_ = this.sI = !1;
  this.GP = null;
  this.Wt = 0;
  this.QV = this.fP = !1;
  this.Z8 = null;
};
v(zC, $c);
qa(zC);
d = zC.prototype;
d.Qq = function(a) {
  return this.Fl[a];
};
d.jf = function() {
  return 0 < this.bi.length;
};
d.F7 = function() {
  return 0 < this.ht.length;
};
d.iq = function() {
  var a = this.jf();
  a != this.fP && (this.vu(a ? "active" : "idle"), this.fP = a);
  a = this.F7();
  a != this.QV && (this.vu(a ? "userActive" : "userIdle"), this.QV = a);
};
d.FP = function(a, b) {
  var c = [];
  Db(a, c);
  a = [];
  for (var e = {}, f = 0;f < c.length;f++) {
    var h = c[f], k = this.Qq(h);
    if (!k) {
      throw Error("Unknown module: " + h);
    }
    var p = new js;
    e[h] = p;
    k.Bv() ? p.callback(this.Z8) : (this.nca(h, k, !!b, p), this.UO(h) || a.push(h));
  }
  0 < a.length && this.g8(a);
  return e;
};
d.nca = function(a, b, c, e) {
  b.LR(e.callback, e);
  b.lca(function(a) {
    e.cd(Error(a));
  });
  this.UO(a) ? c && (J(this.a, "User initiated module already loading: " + a), this.YH(a), this.iq()) : c ? (J(this.a, "User initiated module load: " + a), this.YH(a)) : J(this.a, "Initiating module load: " + a);
};
d.g8 = function(a) {
  this.C_ ? this.U6.lb(t(this.Uv, this, a)) : qb(this.bi) ? this.Uv(a) : (this.Kd.push(a), this.iq());
};
d.l2 = function() {
  return 5000 * Math.pow(this.Wt, 2);
};
d.Uv = function(a, b, c) {
  b || (this.Wt = 0);
  b = this.sba(a);
  J(this.a, "Loading module(s): " + b);
  this.bi = b;
  this.ti = this.sI ? a : z(b);
  this.iq();
  qb(b) || (this.ms.push.apply(this.ms, b), a = t(this.GP.nva, this.GP, z(b), this.Fl, null, t(this.P5, this, this.ti, b), t(this.Q5, this), !!c), (c = this.l2()) ? window.setTimeout(a, c) : a());
};
d.sba = function(a) {
  for (var b = 0;b < a.length;b++) {
    if (this.Fl[a[b]].Bv()) {
      throw Error("Module already loaded: " + a[b]);
    }
  }
  for (var c = [], b = 0;b < a.length;b++) {
    c = c.concat(this.SM(a[b]));
  }
  Db(c);
  return !this.sI && 1 < c.length ? (b = c.shift(), J(this.a, "Must load " + b + " module before " + a), this.Kd = y(c, function(a) {
    return [a];
  }).concat(this.Kd), [b]) : c;
};
d.SM = function(a) {
  var b = [];
  pb(this.ms, a) || b.push(a);
  for (a = z(this.Qq(a).Ru());a.length;) {
    var c = a.pop();
    this.Qq(c).Bv() || pb(this.ms, c) || (b.unshift(c), Array.prototype.unshift.apply(a, this.Qq(c).Ru()));
  }
  Db(b);
  return b;
};
d.UO = function(a) {
  if (pb(this.bi, a)) {
    return !0;
  }
  for (var b = 0;b < this.Kd.length;b++) {
    if (pb(this.Kd[b], a)) {
      return !0;
    }
  }
  return !1;
};
d.load = function(a, b) {
  return this.FP([a], b)[a];
};
d.h8 = function(a, b) {
  return this.FP(a, b);
};
d.YH = function(a) {
  pb(this.ht, a) || this.ht.push(a);
};
d.P5 = function(a, b, c) {
  this.Wt++;
  this.ti = a;
  x(b, Ba(wb, this.ms), this);
  401 == c ? (J(this.a, "Module loading unauthorized"), this.OJ(0), this.Kd.length = 0) : 410 == c ? (this.eF(3), this.kD()) : 3 <= this.Wt ? (J(this.a, "Aborting after failure to load: " + this.bi), this.eF(1), this.kD()) : (J(this.a, "Retrying after failure to load: " + this.bi), this.Uv(this.ti, !0, 8001 == c));
};
d.Q5 = function() {
  J(this.a, "Aborting after timeout: " + this.bi);
  this.eF(2);
  this.kD();
};
d.eF = function(a) {
  1 < this.ti.length ? this.Kd = y(this.ti, function(a) {
    return [a];
  }).concat(this.Kd) : this.OJ(a);
};
d.OJ = function(a) {
  var b = this.ti;
  this.bi.length = 0;
  for (var c = [], e = 0;e < this.Kd.length;e++) {
    var f = jb(this.Kd[e], function(a) {
      var c = this.SM(a);
      return kb(b, function(a) {
        return pb(c, a);
      });
    }, this);
    Ab(c, f);
  }
  for (e = 0;e < b.length;e++) {
    sb(c, b[e]);
  }
  for (e = 0;e < c.length;e++) {
    for (f = 0;f < this.Kd.length;f++) {
      wb(this.Kd[f], c[e]);
    }
    wb(this.ht, c[e]);
  }
  var h = this.uh.error;
  if (h) {
    for (e = 0;e < h.length;e++) {
      for (var k = h[e], f = 0;f < c.length;f++) {
        k("error", c[f], a);
      }
    }
  }
  for (e = 0;e < b.length;e++) {
    if (this.Fl[b[e]]) {
      this.Fl[b[e]].onError(a);
    }
  }
  this.ti.length = 0;
  this.iq();
};
d.kD = function() {
  for (;this.Kd.length;) {
    var a = jb(this.Kd.shift(), function(a) {
      return !this.Qq(a).Bv();
    }, this);
    if (0 < a.length) {
      this.Uv(a);
      return;
    }
  }
  this.iq();
};
d.LR = function(a, b) {
  ta(a) || (a = [a]);
  for (var c = 0;c < a.length;c++) {
    this.Sw(a[c], b);
  }
};
d.Sw = function(a, b) {
  var c = this.uh;
  c[a] || (c[a] = []);
  c[a].push(b);
};
d.vu = function(a) {
  for (var b = this.uh[a], c = 0;b && c < b.length;c++) {
    b[c](a);
  }
};
d.aa = function() {
  zC.X.aa.call(this);
  bd(Nb(this.Fl), this.TY);
  this.uh = this.Kd = this.ht = this.ti = this.bi = this.Fl = null;
};
var BC = function(a) {
  O(this, a, 0, -1, AC, null);
};
v(BC, N);
var AC = [5, 52];
BC.prototype.g = function(a) {
  return CC(a, this);
};
var CC = function(a, b) {
  var c, e = {Lqa:Q(b, 1), Qza:Q(b, 2), Eia:Q(b, 133), Mqa:Q(b, 3), Xta:Q(b, 105), Dqa:Q(b, 107), Eqa:Q(b, 104), rxa:Q(b, 4), qxa:Q(b, 43), Vra:P(b.pL(), DC, a), vpa:Q(b, 28), Ysa:Q(b, 29), pAa:Q(b, 30), Wia:Q(b, 112), ksa:Q(b, 106), Yi:Q(b, 100), pra:Q(b, 68), ora:(c = b.kL()) && EC(a, c), Kta:Q(b, 42), Yaa:P(b.Nn(), FC, a), hva:(c = b.mM()) && GC(a, c)};
  a && (e.l = b);
  return e;
};
BC.prototype.j = function() {
  var a = new W;
  HC(this, a);
  return a.h();
};
var HC = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 133);
  null != c && b.ha(133, c);
  c = Q(a, 3);
  null != c && b.s(3, c);
  c = Q(a, 105);
  null != c && b.A(105, c);
  c = Q(a, 107);
  null != c && b.ha(107, c);
  c = Q(a, 104);
  null != c && b.ha(104, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = Q(a, 43);
  null != c && b.f(43, c);
  c = a.pL();
  0 < c.length && b.xp(5, c, IC);
  c = Q(a, 28);
  null != c && b.Z(28, c);
  c = Q(a, 29);
  null != c && b.s(29, c);
  c = Q(a, 30);
  null != c && b.s(30, c);
  c = Q(a, 112);
  null != c && b.f(112, c);
  c = Q(a, 106);
  null != c && b.s(106, c);
  c = Q(a, 100);
  null != c && b.f(100, c);
  c = Q(a, 68);
  null != c && b.s(68, c);
  c = a.kL();
  null != c && b.b(69, c, JC);
  c = Q(a, 42);
  null != c && b.ha(42, c);
  c = a.Nn();
  0 < c.length && b.B(52, c, KC);
  c = a.mM();
  null != c && b.b(135, c, LC);
};
d = BC.prototype;
d.WS = function(a) {
  S(this, 1, a);
};
d.sU = function(a) {
  S(this, 2, a);
};
d.rU = function(a) {
  S(this, 133, a);
};
d.XS = function(a) {
  S(this, 3, a);
};
d.wga = function(a) {
  S(this, 4, a);
};
d.pL = function() {
  return U(this, MC, 5);
};
d.Sea = function(a) {
  Vr(this, 5, a);
};
d.hfa = function(a) {
  S(this, 29, a);
};
d.uU = function(a) {
  S(this, 30, a);
};
d.kL = function() {
  return T(this, NC, 69);
};
d.Nn = function() {
  return U(this, OC, 52);
};
d.mM = function() {
  return T(this, PC, 135);
};
var MC = function(a) {
  O(this, a, 0, -1, QC, null);
};
v(MC, N);
var QC = [2, 13];
MC.prototype.g = function(a) {
  return DC(a, this);
};
var DC = function(a, b) {
  var c, e = {kza:Q(b, 1), S0:Q(b, 113), bqa:Q(b, 118), Sva:P(b.Qh(), RC, a), xra:P(b.RA(), SC, a), cya:Q(b, 34), lqa:Q(b, 92), Pta:Q(b, 94), XAa:Q(b, 93), jAa:Q(b, 35), O_:Q(b, 36), Mxa:Q(b, 54), aBa:Q(b, 66), yta:Rr(b, 71), Tra:R(b, 72, -1), UAa:R(b, 73, -1), Uua:R(b, 74, !1), gqa:R(b, 75, -1), Wza:(c = b.LN()) && TC(a, c)};
  a && (e.l = b);
  return e;
};
MC.prototype.j = function() {
  var a = new W;
  IC(this, a);
  return a.h();
};
var IC = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(6, c);
  c = Q(a, 113);
  null != c && b.s(118, c);
  c = Q(a, 118);
  null != c && b.s(123, c);
  c = a.Qh();
  0 < c.length && b.xp(7, c, UC);
  c = a.RA();
  0 < c.length && b.xp(18, c, VC);
  c = Q(a, 34);
  null != c && b.s(39, c);
  c = Q(a, 92);
  null != c && b.s(97, c);
  c = Q(a, 94);
  null != c && b.s(99, c);
  c = Q(a, 93);
  null != c && b.s(98, c);
  c = Q(a, 35);
  null != c && b.s(40, c);
  c = Q(a, 36);
  null != c && b.s(41, c);
  c = Q(a, 54);
  null != c && b.s(59, c);
  c = Q(a, 66);
  null != c && b.A(71, c);
  c = Q(a, 71);
  null != c && b.Ib(76, c);
  c = Q(a, 72);
  null != c && b.s(77, c);
  c = Q(a, 73);
  null != c && b.s(78, c);
  c = Q(a, 74);
  null != c && b.Z(79, c);
  c = Q(a, 75);
  null != c && b.s(80, c);
  c = a.LN();
  null != c && b.b(134, c, WC);
};
d = MC.prototype;
d.gha = function(a) {
  S(this, 1, a);
};
d.Qh = function() {
  return U(this, XC, 2);
};
d.Sfa = function(a) {
  Vr(this, 2, a);
};
d.RA = function() {
  return U(this, YC, 13);
};
d.Iea = function(a) {
  Vr(this, 13, a);
};
d.Kga = function(a) {
  S(this, 34, a);
};
d.qea = function(a) {
  S(this, 92, a);
};
d.sfa = function(a) {
  S(this, 94, a);
};
d.Oha = function(a) {
  S(this, 93, a);
};
d.Aha = function(a) {
  S(this, 35, a);
};
d.FF = function(a) {
  S(this, 36, a);
};
d.LN = function() {
  return T(this, ZC, 129);
};
var XC = function(a) {
  O(this, a, 0, -1, $C, null);
};
v(XC, N);
var $C = [53, 54];
XC.prototype.g = function(a) {
  return RC(a, this);
};
var RC = function(a, b) {
  var c, e = {iwa:Q(b, 1), Dta:Q(b, 2), Pra:Q(b, 3), Ova:Q(b, 4), Vua:Q(b, 5), sS:Q(b, 6), yqa:Q(b, 7), xxa:Q(b, 8), vqa:Q(b, 9), wxa:Q(b, 10), direction:Q(b, 24), ssrc:Q(b, 25), Hpa:Rr(b, 117), Wsa:Q(b, 26), qta:Q(b, 27), Dwa:Q(b, 28), Dg:Q(b, 29), Ata:Q(b, 30), zta:Q(b, 31), Bta:Rr(b, 50), Iya:Rr(b, 87), Cta:Rr(b, 51), Jya:Rr(b, 88), Wua:Q(b, 37), Txa:Q(b, 38), BAa:Q(b, 39), aqa:Q(b, 40), $pa:Q(b, 41), DAa:Q(b, 42), Vya:Q(b, 43), lAa:Q(b, 124), Dpa:Q(b, 125), Aya:Q(b, 96), gva:Q(b, 80), rza:Q(b, 
  44), pya:Q(b, 94), Esa:Q(b, 46), Fsa:Q(b, 47), Gsa:Q(b, 48), Hsa:Q(b, 49), Dsa:Rr(b, 63), Oya:Rr(b, 129), Pya:Rr(b, 133), Kza:Q(b, 53), sia:P(b.Qn(), aD, a), width:Q(b, 57), height:Q(b, 58), dBa:Q(b, 114), cBa:Q(b, 115), lya:Q(b, 113), eva:Q(b, 78), dva:Q(b, 79), Qua:Q(b, 59), Tua:Q(b, 60), Fpa:Q(b, 65), Epa:Q(b, 95), ata:Rr(b, 68), Gza:Rr(b, 103), Rxa:Rr(b, 106), upa:Rr(b, 107), iza:Rr(b, 104), Sqa:Q(b, 74), cqa:Q(b, 75), Usa:Q(b, 76), Tqa:Q(b, 77), Lwa:Q(b, 81), Kwa:Q(b, 82), Nwa:Q(b, 83), Owa:Q(b, 
  84), Mwa:Q(b, 85), Pwa:Q(b, 86), gxa:Q(b, 89), hxa:Q(b, 112), jxa:Q(b, 118), ixa:Q(b, 119), fxa:(c = b.VM()) && gy(a, c), Rqa:(c = b.eL()) && gy(a, c), Tsa:(c = b.JL()) && gy(a, c), $ra:(c = b.tL()) && gy(a, c), Hya:(c = b.rN()) && gy(a, c), yAa:Q(b, 108), xAa:Q(b, 109), wAa:Q(b, 110), Gta:Q(b, 130), Yua:Q(b, 131)};
  a && (e.l = b);
  return e;
};
XC.prototype.j = function() {
  var a = new W;
  UC(this, a);
  return a.h();
};
var UC = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(8, c);
  c = Q(a, 2);
  null != c && b.s(9, c);
  c = Q(a, 3);
  null != c && b.s(10, c);
  c = Q(a, 4);
  null != c && b.s(11, c);
  c = Q(a, 5);
  null != c && b.s(12, c);
  c = Q(a, 6);
  null != c && b.s(13, c);
  c = Q(a, 7);
  null != c && b.ha(14, c);
  c = Q(a, 8);
  null != c && b.s(15, c);
  c = Q(a, 9);
  null != c && b.ha(16, c);
  c = Q(a, 10);
  null != c && b.s(17, c);
  c = Q(a, 24);
  null != c && b.A(31, c);
  c = Q(a, 25);
  null != c && b.jW(32, c);
  c = Q(a, 117);
  null != c && b.Ib(124, c);
  c = Q(a, 26);
  null != c && b.s(33, c);
  c = Q(a, 27);
  null != c && b.s(34, c);
  c = Q(a, 28);
  null != c && b.s(35, c);
  c = Q(a, 29);
  null != c && b.s(36, c);
  c = Q(a, 30);
  null != c && b.s(37, c);
  c = Q(a, 31);
  null != c && b.s(38, c);
  c = Q(a, 50);
  null != c && b.Ib(57, c);
  c = Q(a, 87);
  null != c && b.Ib(94, c);
  c = Q(a, 51);
  null != c && b.Ib(58, c);
  c = Q(a, 88);
  null != c && b.Ib(95, c);
  c = Q(a, 37);
  null != c && b.s(44, c);
  c = Q(a, 38);
  null != c && b.s(45, c);
  c = Q(a, 39);
  null != c && b.s(46, c);
  c = Q(a, 40);
  null != c && b.s(47, c);
  c = Q(a, 41);
  null != c && b.s(48, c);
  c = Q(a, 42);
  null != c && b.s(49, c);
  c = Q(a, 43);
  null != c && b.s(50, c);
  c = Q(a, 124);
  null != c && b.s(131, c);
  c = Q(a, 125);
  null != c && b.s(132, c);
  c = Q(a, 96);
  null != c && b.s(103, c);
  c = Q(a, 80);
  null != c && b.s(87, c);
  c = Q(a, 44);
  null != c && b.f(51, c);
  c = Q(a, 94);
  null != c && b.f(101, c);
  c = Q(a, 46);
  null != c && b.s(53, c);
  c = Q(a, 47);
  null != c && b.s(54, c);
  c = Q(a, 48);
  null != c && b.s(55, c);
  c = Q(a, 49);
  null != c && b.s(56, c);
  c = Q(a, 63);
  null != c && b.Ib(70, c);
  c = Q(a, 129);
  null != c && b.Ib(136, c);
  c = Q(a, 133);
  null != c && b.Ib(140, c);
  c = a.br();
  0 < c.length && b.uy(60, c);
  c = a.Qn();
  0 < c.length && b.xp(61, c, bD);
  c = Q(a, 57);
  null != c && b.s(64, c);
  c = Q(a, 58);
  null != c && b.s(65, c);
  c = Q(a, 114);
  null != c && b.s(121, c);
  c = Q(a, 115);
  null != c && b.s(122, c);
  c = Q(a, 113);
  null != c && b.s(120, c);
  c = Q(a, 78);
  null != c && b.s(85, c);
  c = Q(a, 79);
  null != c && b.s(86, c);
  c = Q(a, 59);
  null != c && b.Z(66, c);
  c = Q(a, 60);
  null != c && b.Z(67, c);
  c = Q(a, 65);
  null != c && b.s(72, c);
  c = Q(a, 95);
  null != c && b.s(102, c);
  c = Q(a, 68);
  null != c && b.Ib(75, c);
  c = Q(a, 103);
  null != c && b.Ib(110, c);
  c = Q(a, 106);
  null != c && b.Ib(113, c);
  c = Q(a, 107);
  null != c && b.Ib(114, c);
  c = Q(a, 104);
  null != c && b.Ib(111, c);
  c = Q(a, 74);
  null != c && b.s(81, c);
  c = Q(a, 75);
  null != c && b.s(82, c);
  c = Q(a, 76);
  null != c && b.s(83, c);
  c = Q(a, 77);
  null != c && b.s(84, c);
  c = Q(a, 81);
  null != c && b.s(88, c);
  c = Q(a, 82);
  null != c && b.s(89, c);
  c = Q(a, 83);
  null != c && b.s(90, c);
  c = Q(a, 84);
  null != c && b.s(91, c);
  c = Q(a, 85);
  null != c && b.s(92, c);
  c = Q(a, 86);
  null != c && b.s(93, c);
  c = Q(a, 89);
  null != c && b.s(96, c);
  c = Q(a, 112);
  null != c && b.s(119, c);
  c = Q(a, 118);
  null != c && b.s(125, c);
  c = Q(a, 119);
  null != c && b.s(126, c);
  c = a.VM();
  null != c && b.b(139, c, hy);
  c = a.eL();
  null != c && b.b(127, c, hy);
  c = a.JL();
  null != c && b.b(128, c, hy);
  c = a.tL();
  null != c && b.b(129, c, hy);
  c = a.rN();
  null != c && b.b(130, c, hy);
  c = Q(a, 108);
  null != c && b.s(115, c);
  c = Q(a, 109);
  null != c && b.s(116, c);
  c = Q(a, 110);
  null != c && b.s(117, c);
  c = Q(a, 130);
  null != c && b.ha(137, c);
  c = Q(a, 131);
  null != c && b.ha(138, c);
};
d = XC.prototype;
d.Mq = function() {
  return Q(this, 1);
};
d.IT = function(a) {
  S(this, 1, a);
};
d.IF = function(a) {
  S(this, 2, a);
};
d.eT = function(a) {
  S(this, 3, a);
};
d.FT = function(a) {
  S(this, 4, a);
};
d.yT = function(a) {
  S(this, 5, a);
};
d.Es = function(a) {
  S(this, 6, a);
};
d.XK = function() {
  return Q(this, 7);
};
d.US = function(a) {
  S(this, 7, a);
};
d.WT = function(a) {
  S(this, 8, a);
};
d.WK = function() {
  return Q(this, 9);
};
d.TS = function(a) {
  S(this, 9, a);
};
d.VT = function(a) {
  S(this, 10, a);
};
d.Uc = function() {
  return Q(this, 24);
};
d.zf = function(a) {
  S(this, 24, a);
};
d.Wh = function() {
  return Q(this, 25);
};
d.WF = function(a) {
  S(this, 25, a);
};
d.fea = function(a) {
  S(this, 117, a);
};
d.lT = function(a) {
  S(this, 26, a);
};
d.pT = function(a) {
  S(this, 27, a);
};
d.NT = function(a) {
  S(this, 28, a);
};
d.$A = function() {
  return Q(this, 29);
};
d.qT = function(a) {
  S(this, 29, a);
};
d.l3 = function() {
  return Q(this, 30);
};
d.rT = function(a) {
  S(this, 30, a);
};
d.ofa = function(a) {
  S(this, 31, a);
};
d.pfa = function(a) {
  S(this, 50, a);
};
d.qfa = function(a) {
  S(this, 51, a);
};
d.Gga = function(a) {
  S(this, 38, a);
};
d.Jha = function(a) {
  S(this, 39, a);
};
d.k2 = function() {
  return Q(this, 40);
};
d.lea = function(a) {
  S(this, 40, a);
};
d.kea = function(a) {
  S(this, 41, a);
};
d.vU = function(a) {
  S(this, 42, a);
};
d.Yga = function(a) {
  S(this, 43, a);
};
d.Cha = function(a) {
  S(this, 124, a);
};
d.dea = function(a) {
  S(this, 125, a);
};
d.Qga = function(a) {
  S(this, 96, a);
};
d.Lfa = function(a) {
  S(this, 80, a);
};
d.iha = function(a) {
  S(this, 44, a);
};
d.Mga = function(a) {
  S(this, 94, a);
};
d.dfa = function(a) {
  S(this, 46, a);
};
d.efa = function(a) {
  S(this, 47, a);
};
d.ffa = function(a) {
  S(this, 48, a);
};
d.gfa = function(a) {
  S(this, 49, a);
};
d.cfa = function(a) {
  S(this, 63, a);
};
d.Wga = function(a) {
  S(this, 129, a);
};
d.Xga = function(a) {
  S(this, 133, a);
};
d.br = function() {
  return Q(this, 53);
};
d.rha = function(a) {
  S(this, 53, a || []);
};
d.Qn = function() {
  return U(this, cD, 54);
};
d.oU = function(a) {
  Vr(this, 54, a);
};
d.Ng = function() {
  return Q(this, 57);
};
d.qm = function(a) {
  S(this, 57, a);
};
d.Hg = function() {
  return Q(this, 58);
};
d.lm = function(a) {
  S(this, 58, a);
};
d.bU = function(a) {
  S(this, 113, a);
};
d.Kfa = function(a) {
  S(this, 78, a);
};
d.Jfa = function(a) {
  S(this, 79, a);
};
d.Efa = function(a) {
  S(this, 59, a);
};
d.Ju = function() {
  return Q(this, 65);
};
d.OS = function(a) {
  S(this, 65, a);
};
d.eea = function(a) {
  S(this, 95, a);
};
d.kfa = function(a) {
  S(this, 68, a);
};
d.pha = function(a) {
  S(this, 103, a);
};
d.Fga = function(a) {
  S(this, 106, a);
};
d.aea = function(a) {
  S(this, 107, a);
};
d.fha = function(a) {
  S(this, 104, a);
};
d.mea = function(a) {
  S(this, 75, a);
};
d.fga = function(a) {
  S(this, 81, a);
};
d.ega = function(a) {
  S(this, 82, a);
};
d.hga = function(a) {
  S(this, 83, a);
};
d.iga = function(a) {
  S(this, 84, a);
};
d.gga = function(a) {
  S(this, 85, a);
};
d.jga = function(a) {
  S(this, 86, a);
};
d.oga = function(a) {
  S(this, 89, a);
};
d.pga = function(a) {
  S(this, 112, a);
};
d.rga = function(a) {
  S(this, 118, a);
};
d.qga = function(a) {
  S(this, 119, a);
};
d.VM = function() {
  return T(this, fy, 132);
};
d.eL = function() {
  return T(this, fy, 120);
};
d.JL = function() {
  return T(this, fy, 121);
};
d.tL = function() {
  return T(this, fy, 122);
};
d.rN = function() {
  return T(this, fy, 123);
};
var dD = {$oa:0, KX:1, Ky:2, Zoa:3}, eD = {pt:0, AH:1, Yoa:2}, fD = {jH:0, iH:1, hH:2, kH:4, Aka:8, Dka:16, Cka:32, Eka:64, Bka:128, wka:256, zka:512, yka:1024, xka:2048, Fka:1073741824}, cD = function(a) {
  O(this, a, 0, -1, gD, null);
};
v(cD, N);
var gD = [2];
cD.prototype.g = function(a) {
  return aD(a, this);
};
var aD = function(a, b) {
  var c = {Bda:Q(b, 1), lG:Q(b, 2)};
  a && (c.l = b);
  return c;
};
cD.prototype.j = function() {
  var a = new W;
  bD(this, a);
  return a.h();
};
var bD = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(62, c);
  c = a.Tf();
  0 < c.length && b.uy(63, c);
};
d = cD.prototype;
d.Xq = function() {
  return Q(this, 1);
};
d.kU = function(a) {
  S(this, 1, a);
};
d.Tf = function() {
  return Q(this, 2);
};
d.Fs = function(a) {
  S(this, 2, a || []);
};
d.Gp = function(a, b) {
  Tr(this, 2, a, b);
};
var YC = function(a) {
  O(this, a, 0, -1, null, null);
};
v(YC, N);
YC.prototype.g = function(a) {
  return SC(a, this);
};
var SC = function(a, b) {
  var c, e = {J_:Q(b, 1), sta:Q(b, 2), sS:Q(b, 3), AAa:Q(b, 4), xqa:Q(b, 5), vAa:Q(b, 90), uAa:Q(b, 91), zAa:Q(b, 6), wqa:Q(b, 7), Lya:(c = b.sN()) && Ox(a, c), Fya:(c = b.pN()) && Ox(a, c), networkType:Q(b, 55), fia:(c = b.Zq()) && hD(a, c)};
  a && (e.l = b);
  return e;
};
YC.prototype.j = function() {
  var a = new W;
  VC(this, a);
  return a.h();
};
var VC = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(19, c);
  c = Q(a, 2);
  null != c && b.s(20, c);
  c = Q(a, 3);
  null != c && b.s(21, c);
  c = Q(a, 4);
  null != c && b.ha(22, c);
  c = Q(a, 5);
  null != c && b.s(23, c);
  c = Q(a, 90);
  null != c && b.s(108, c);
  c = Q(a, 91);
  null != c && b.s(109, c);
  c = Q(a, 6);
  null != c && b.ha(24, c);
  c = Q(a, 7);
  null != c && b.s(25, c);
  c = a.sN();
  null != c && b.b(26, c, Px);
  c = a.pN();
  null != c && b.b(27, c, Px);
  c = Q(a, 55);
  null != c && b.s(73, c);
  c = a.Zq();
  null != c && b.b(74, c, iD);
};
d = YC.prototype;
d.jx = function(a) {
  S(this, 1, a);
};
d.mfa = function(a) {
  S(this, 2, a);
};
d.Es = function(a) {
  S(this, 3, a);
};
d.Iha = function(a) {
  S(this, 4, a);
};
d.vea = function(a) {
  S(this, 5, a);
};
d.Gha = function(a) {
  S(this, 90, a);
};
d.Fha = function(a) {
  S(this, 91, a);
};
d.Hha = function(a) {
  S(this, 6, a);
};
d.uea = function(a) {
  S(this, 7, a);
};
d.sN = function() {
  return T(this, Nx, 8, 1);
};
d.Tga = function(a) {
  V(this, 8, a);
};
d.pN = function() {
  return T(this, Nx, 9, 1);
};
d.Sga = function(a) {
  V(this, 9, a);
};
d.Zq = function() {
  return T(this, jD, 56);
};
var jD = function(a) {
  O(this, a, 0, -1, null, null);
};
v(jD, N);
jD.prototype.g = function(a) {
  return hD(a, this);
};
var hD = function(a, b) {
  var c = {gBa:Q(b, 1), Zqa:Q(b, 2), Yqa:Q(b, 3), Xqa:Q(b, 4)};
  a && (c.l = b);
  return c;
};
jD.prototype.j = function() {
  var a = new W;
  iD(this, a);
  return a.h();
};
var iD = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(1, c);
  c = Q(a, 2);
  null != c && b.s(2, c);
  c = Q(a, 3);
  null != c && b.s(3, c);
  c = Q(a, 4);
  null != c && b.s(4, c);
}, ZC = function(a) {
  O(this, a, 0, -1, kD, null);
};
v(ZC, N);
var kD = [3];
ZC.prototype.g = function(a) {
  return TC(a, this);
};
var TC = function(a, b) {
  var c = {Ixa:Q(b, 1), HAa:Q(b, 2), Jxa:Q(b, 3)};
  a && (c.l = b);
  return c;
};
ZC.prototype.j = function() {
  var a = new W;
  WC(this, a);
  return a.h();
};
var WC = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(1, c);
  c = Q(a, 2);
  null != c && b.s(2, c);
  c = a.k4();
  0 < c.length && b.lW(3, c);
};
ZC.prototype.k4 = function() {
  return Q(this, 3);
};
var NC = function(a) {
  O(this, a, 0, -1, null, null);
};
v(NC, N);
NC.prototype.g = function(a) {
  return EC(a, this);
};
var EC = function(a, b) {
  var c = {yra:Q(b, 1), xwa:Q(b, 2)};
  a && (c.l = b);
  return c;
};
NC.prototype.j = function() {
  var a = new W;
  JC(this, a);
  return a.h();
};
var JC = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.ha(2, c);
}, OC = function(a) {
  O(this, a, 0, -1, lD, null);
};
v(OC, N);
var lD = [3, 4];
OC.prototype.g = function(a) {
  return FC(a, this);
};
var FC = function(a, b) {
  var c = {Uwa:Q(b, 1), Tr:Q(b, 2), Ypa:Q(b, 3), ZAa:Q(b, 4)};
  a && (c.l = b);
  return c;
};
OC.prototype.j = function() {
  var a = new W;
  KC(this, a);
  return a.h();
};
var KC = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = a.g2();
  0 < c.length && b.uy(3, c);
  c = a.q5();
  0 < c.length && b.uy(4, c);
};
OC.prototype.fd = function() {
  return Q(this, 2);
};
OC.prototype.g2 = function() {
  return Q(this, 3);
};
OC.prototype.q5 = function() {
  return Q(this, 4);
};
var PC = function(a) {
  O(this, a, 0, -1, null, null);
};
v(PC, N);
PC.prototype.g = function(a) {
  return GC(a, this);
};
var GC = function(a, b) {
  var c = {Eya:Q(b, 1), protocol:Q(b, 2)};
  a && (c.l = b);
  return c;
};
PC.prototype.j = function() {
  var a = new W;
  LC(this, a);
  return a.h();
};
var LC = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
};
PC.prototype.Th = function() {
  return Q(this, 2);
};
PC.prototype.Bs = function(a) {
  S(this, 2, a);
};
var mD = function(a) {
  O(this, a, 0, -1, null, null);
};
v(mD, N);
mD.prototype.g = function(a) {
  return nD(a, this);
};
var nD = function(a, b) {
  var c, e = {code:Q(b, 1), Nza:(c = b.FN()) && sy(a, c), iya:(c = b.eN()) && my(a, c), Yya:Q(b, 3), jra:Q(b, 4), Lza:Q(b, 5), Eia:Q(b, 7), Wia:Q(b, 8)};
  a && (e.l = b);
  return e;
};
mD.prototype.j = function() {
  var a = new W;
  oD(this, a);
  return a.h();
};
var oD = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = a.FN();
  null != c && b.b(2, c, ty);
  c = a.eN();
  null != c && b.b(6, c, oy);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = Q(a, 5);
  null != c && b.s(5, c);
  c = Q(a, 7);
  null != c && b.ha(7, c);
  c = Q(a, 8);
  null != c && b.f(8, c);
};
d = mD.prototype;
d.OA = function() {
  return Q(this, 1);
};
d.EF = function(a) {
  S(this, 1, a);
};
d.FN = function() {
  return T(this, ry, 2);
};
d.eN = function() {
  return T(this, ly, 6);
};
d.rU = function(a) {
  S(this, 7, a);
};
var pD = function() {
}, qD = new Date(0) - new Date("1900/01/01 00:00 GMT");
d = pD.prototype;
d.tba = function(a, b, c) {
  b && this.x1(a);
  b = Number(a.ssrc);
  null != b && (this.rY(a, b, c), null != a.bytesReceived && this.zY(a, b, c), this.bY(a, b, c));
};
d.x1 = function(a) {
  Pb(a, "googFrameWidthSent") && (a.googFrameWidthSent = 0);
  Pb(a, "googFrameHeightSent") && (a.googFrameHeightSent = 0);
};
d.rY = function(a, b, c) {
  var e = a.googCaptureStartNtpTimeMs;
  null != e && 0 < e && (b = c.Bq(b), null != b && (e = e - qD + 1000 * b, a.oneWayDelayMs = u() - e));
};
d.zY = function(a, b, c) {
  b = c.n3(b);
  null != b && (null != b.eO && (a.fpsGraphicsInput = b.eO), null != b.fO && (a.fpsGraphicsOutput = b.fO));
};
d.bY = function(a) {
  var b = fD.jH, c = a.googCpuLimitedResolution, e = a.googBandwidthLimitedResolution, f = a.googViewLimitedResolution;
  if (null != c || null != e || null != f) {
    "true" == c && (b |= fD.iH), "true" == e && (b |= fD.hH), "true" == f && (b |= fD.kH), a.googAdaptationReason = b;
  }
};
var sD = function(a) {
  O(this, a, "chbarp", -1, rD, null);
};
v(sD, N);
var rD = [4];
sD.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), xI:(b = this.gj()) && Oy(a, b), V:(b = this.m()) && Y(a, b), Rb:P(this.I(), Oy, a)};
  a && (c.l = this);
  return c;
};
sD.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.gj();
  null != b && a.b(2, b, Uy);
  b = this.m();
  null != b && a.b(3, b, Z);
  b = this.I();
  0 < b.length && a.B(4, b, Uy);
  return a.h();
};
es("chbarp", sD);
d = sD.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.gj = function() {
  return T(this, Ny, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, Ny, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var uD = function(a) {
  O(this, a, "chbmrp", -1, tD, null);
};
v(uD, N);
var tD = [4];
uD.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), xI:(b = this.gj()) && Oy(a, b), V:(b = this.m()) && Y(a, b), Rb:P(this.I(), Oy, a)};
  a && (c.l = this);
  return c;
};
uD.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.gj();
  null != b && a.b(2, b, Uy);
  b = this.m();
  null != b && a.b(3, b, Z);
  b = this.I();
  0 < b.length && a.B(4, b, Uy);
  return a.h();
};
es("chbmrp", uD);
d = uD.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.gj = function() {
  return T(this, Ny, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, Ny, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var vD = function(a) {
  O(this, a, "chbqrp", -1, null, null);
};
v(vD, N);
vD.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), xI:(b = this.gj()) && Oy(a, b), V:(b = this.m()) && Y(a, b)};
  a && (c.l = this);
  return c;
};
vD.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.gj();
  null != b && a.b(2, b, Uy);
  b = this.m();
  null != b && a.b(3, b, Z);
  return a.h();
};
es("chbqrp", vD);
d = vD.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.gj = function() {
  return T(this, Ny, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var wD = function(a) {
  O(this, a, "chbrrp", -1, null, null);
};
v(wD, N);
wD.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), V:(b = this.m()) && Y(a, b)};
  a && (c.l = this);
  return c;
};
wD.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.m();
  null != b && a.b(2, b, Z);
  return a.h();
};
es("chbrrp", wD);
wD.prototype.getResponseHeader = function() {
  return T(this, Rz, 1);
};
wD.prototype.m = function() {
  return T(this, X, 2);
};
wD.prototype.u = function(a) {
  V(this, 2, a);
};
wD.prototype.R = function() {
  this.u(void 0);
};
var yD = function(a) {
  O(this, a, "chbsrp", -1, xD, null);
};
v(yD, N);
var xD = [2];
yD.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), kqa:P(this.PK(), Oy, a), V:(b = this.m()) && Y(a, b)};
  a && (c.l = this);
  return c;
};
yD.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.PK();
  0 < b.length && a.B(2, b, Uy);
  b = this.m();
  null != b && a.b(3, b, Z);
  return a.h();
};
es("chbsrp", yD);
d = yD.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.PK = function() {
  return U(this, Ny, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var AD = function(a) {
  O(this, a, 0, -1, zD, null);
};
v(AD, N);
var zD = [2, 3];
AD.prototype.g = function(a) {
  return BD(a, this);
};
var BD = function(a, b) {
  var c, e = {V:(c = b.m()) && Y(a, c), lf:P(b.ua(), Oy, a), Bh:P(b.ab(), qt, a), ah:(c = b.bb()) && qt(a, c)};
  a && (e.l = b);
  return e;
};
AD.prototype.j = function() {
  var a = new W;
  CD(this, a);
  return a.h();
};
var CD = function(a, b) {
  var c;
  c = a.m();
  null != c && b.b(1, c, Z);
  c = a.ua();
  0 < c.length && b.B(2, c, Uy);
  c = a.ab();
  0 < c.length && b.B(3, c, rt);
  c = a.bb();
  null != c && b.b(4, c, rt);
};
d = AD.prototype;
d.m = function() {
  return T(this, X, 1);
};
d.u = function(a) {
  V(this, 1, a);
};
d.R = function() {
  this.u(void 0);
};
d.ua = function() {
  return U(this, Ny, 2);
};
d.ab = function() {
  return U(this, pt, 3);
};
d.bb = function() {
  return T(this, pt, 4);
};
var ED = function(a) {
  O(this, a, "carp", -1, DD, null);
};
v(ED, N);
var DD = [2];
ED.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), Rb:P(this.I(), zt, a)};
  a && (c.l = this);
  return c;
};
ED.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.I();
  0 < b.length && a.B(2, b, Bt);
  return a.h();
};
es("carp", ED);
ED.prototype.getResponseHeader = function() {
  return T(this, Rz, 1);
};
ED.prototype.I = function() {
  return U(this, yt, 2);
};
ED.prototype.Fa = function(a) {
  Vr(this, 2, a);
};
var FD = function(a) {
  O(this, a, 0, -1, null, null);
};
v(FD, N);
FD.prototype.g = function(a) {
  return GD(a, this);
};
var GD = function(a, b) {
  var c, e = {Bpa:Q(b, 1), Wwa:(c = b.TM()) && Mz(a, c), Qca:Q(b, 3), m0:Q(b, 5), Spa:(c = b.KK()) && Lt(a, c), isa:b.U2(), YI:Q(b, 7), Ada:Q(b, 8)};
  a && (e.l = b);
  return e;
};
FD.prototype.j = function() {
  var a = new W;
  HD(this, a);
  return a.h();
};
var HD = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = a.TM();
  null != c && b.b(4, c, Nz);
  c = Q(a, 3);
  null != c && b.oW(3, c);
  c = Q(a, 5);
  null != c && b.nh(5, c);
  c = a.KK();
  null != c && b.b(6, c, Mt);
  c = Q(a, 2);
  null != c && b.wp(2, c);
  c = Q(a, 7);
  null != c && b.f(7, c);
  c = Q(a, 8);
  null != c && b.f(8, c);
};
d = FD.prototype;
d.TM = function() {
  return T(this, Lz, 4);
};
d.uN = function() {
  return Q(this, 3);
};
d.KK = function() {
  return T(this, Kt, 6);
};
d.T2 = function() {
  return Q(this, 2);
};
d.U2 = function() {
  return Sr(this.T2());
};
var JD = function(a) {
  O(this, a, 0, -1, ID, null);
};
v(JD, N);
var ID = [4];
JD.prototype.g = function(a) {
  return KD(a, this);
};
var KD = function(a, b) {
  var c, e = {Ob:(c = b.N()) && Pz(a, c), hangout:(c = b.zd()) && $z(a, c), V:(c = b.m()) && Y(a, c), Rb:P(b.I(), $z, a)};
  a && (e.l = b);
  return e;
};
JD.prototype.j = function() {
  var a = new W;
  LD(this, a);
  return a.h();
};
var LD = function(a, b) {
  var c;
  c = a.N();
  null != c && b.b(1, c, Qz);
  c = a.zd();
  null != c && b.b(2, c, aA);
  c = a.m();
  null != c && b.b(3, c, Z);
  c = a.I();
  0 < c.length && b.B(4, c, aA);
};
d = JD.prototype;
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.zd = function() {
  return T(this, Zz, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, Zz, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var ND = function(a) {
  O(this, a, "charp", -1, MD, null);
};
v(ND, N);
var MD = [5];
ND.prototype.g = function(a) {
  return OD(a, this);
};
var OD = function(a, b) {
  var c, e = {hb:(c = b.getResponseHeader()) && Sz(a, c), hangout:(c = b.zd()) && $z(a, c), iG:Q(b, 4), V:(c = b.m()) && Y(a, c), Rb:P(b.I(), $z, a)};
  a && (e.l = b);
  return e;
};
ND.prototype.j = function() {
  var a = new W;
  PD(this, a);
  return a.h();
};
var PD = function(a, b) {
  var c;
  c = a.getResponseHeader();
  null != c && b.b(1, c, Tz);
  c = a.zd();
  null != c && b.b(2, c, aA);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = a.m();
  null != c && b.b(3, c, Z);
  c = a.I();
  0 < c.length && b.B(5, c, aA);
};
es("charp", ND);
d = ND.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.zd = function() {
  return T(this, Zz, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, Zz, 5);
};
d.Fa = function(a) {
  Vr(this, 5, a);
};
var RD = function(a) {
  O(this, a, 0, -1, QD, null);
};
v(RD, N);
var QD = [11];
RD.prototype.g = function(a) {
  return SD(a, this);
};
var SD = function(a, b) {
  var c, e = {KO:R(b, 8, 0), ka:Q(b, 1), j7:(c = b.Jq()) && xz(a, c), Hua:P(b.gM(), gA, a), Ywa:R(b, 3, 1), Mra:Q(b, 4), Xwa:Q(b, 6), hsa:(c = b.uL()) && Cu(a, c), TAa:Q(b, 9), Fua:Q(b, 99)};
  a && (e.l = b);
  return e;
};
RD.prototype.j = function() {
  var a = new W;
  TD(this, a);
  return a.h();
};
var TD = function(a, b) {
  var c;
  c = Q(a, 8);
  null != c && b.ha(8, c);
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = a.Jq();
  null != c && b.b(2, c, zz);
  c = a.gM();
  0 < c.length && b.B(11, c, iA);
  c = Q(a, 3);
  null != c && b.A(3, c);
  c = Q(a, 4);
  null != c && b.Z(4, c);
  c = Q(a, 6);
  null != c && b.A(6, c);
  c = a.uL();
  null != c && b.b(7, c, Du);
  c = Q(a, 9);
  null != c && b.f(9, c);
  c = Q(a, 99);
  null != c && b.f(99, c);
};
d = RD.prototype;
d.da = function() {
  return Q(this, 1);
};
d.Y = function(a) {
  S(this, 1, a);
};
d.Jq = function() {
  return T(this, wz, 2);
};
d.gM = function() {
  return U(this, fA, 11);
};
d.uL = function() {
  return T(this, Bu, 7);
};
var VD = function(a) {
  O(this, a, 0, -1, UD, null);
};
v(VD, N);
var UD = [4];
d = VD.prototype;
d.g = function(a) {
  var b, c = {Ob:(b = this.N()) && Pz(a, b), hangout:(b = this.zd()) && $z(a, b), V:(b = this.m()) && Y(a, b), Rb:P(this.I(), $z, a)};
  a && (c.l = this);
  return c;
};
d.j = function() {
  var a = new W, b;
  b = this.N();
  null != b && a.b(1, b, Qz);
  b = this.zd();
  null != b && a.b(2, b, aA);
  b = this.m();
  null != b && a.b(3, b, Z);
  b = this.I();
  0 < b.length && a.B(4, b, aA);
  return a.h();
};
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.zd = function() {
  return T(this, Zz, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, Zz, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var XD = function(a) {
  O(this, a, "chmrp", -1, WD, null);
};
v(XD, N);
var WD = [4];
XD.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), hangout:(b = this.zd()) && $z(a, b), V:(b = this.m()) && Y(a, b), Rb:P(this.I(), $z, a)};
  a && (c.l = this);
  return c;
};
XD.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.zd();
  null != b && a.b(2, b, aA);
  b = this.m();
  null != b && a.b(3, b, Z);
  b = this.I();
  0 < b.length && a.B(4, b, aA);
  return a.h();
};
es("chmrp", XD);
d = XD.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.zd = function() {
  return T(this, Zz, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, Zz, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var ZD = function(a) {
  O(this, a, 0, -1, YD, null);
};
v(ZD, N);
var YD = [6];
ZD.prototype.g = function(a) {
  return $D(a, this);
};
var $D = function(a, b) {
  var c, e = {Ob:(c = b.N()) && Pz(a, c), Tr:(c = b.fd()) && qA(a, c), Uxa:(c = b.bN()) && Fu(a, c), sxa:Q(b, 4), V:(c = b.m()) && Y(a, c), Rb:P(b.I(), qA, a)};
  a && (e.l = b);
  return e;
};
ZD.prototype.j = function() {
  var a = new W;
  aE(this, a);
  return a.h();
};
var aE = function(a, b) {
  var c;
  c = a.N();
  null != c && b.b(1, c, Qz);
  c = a.fd();
  null != c && b.b(2, c, sA);
  c = a.bN();
  null != c && b.b(3, c, Gu);
  c = Q(a, 4);
  null != c && b.Z(4, c);
  c = a.m();
  null != c && b.b(5, c, Z);
  c = a.I();
  0 < c.length && b.B(6, c, sA);
};
d = ZD.prototype;
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.fd = function() {
  return T(this, pA, 2);
};
d.bN = function() {
  return T(this, Eu, 3);
};
d.m = function() {
  return T(this, X, 5);
};
d.u = function(a) {
  V(this, 5, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, pA, 6);
};
d.Fa = function(a) {
  Vr(this, 6, a);
};
var cE = function(a) {
  O(this, a, "chparp", -1, bE, null);
};
v(cE, N);
var bE = [5];
cE.prototype.g = function(a) {
  return dE(a, this);
};
var dE = function(a, b) {
  var c, e = {hb:(c = b.getResponseHeader()) && Sz(a, c), Tr:(c = b.fd()) && qA(a, c), V:(c = b.m()) && Y(a, c), errorCode:Q(b, 4), Rb:P(b.I(), qA, a)};
  a && (e.l = b);
  return e;
};
cE.prototype.j = function() {
  var a = new W;
  eE(this, a);
  return a.h();
};
var eE = function(a, b) {
  var c;
  c = a.getResponseHeader();
  null != c && b.b(1, c, Tz);
  c = a.fd();
  null != c && b.b(2, c, sA);
  c = a.m();
  null != c && b.b(3, c, Z);
  c = Q(a, 4);
  null != c && b.A(4, c);
  c = a.I();
  0 < c.length && b.B(5, c, sA);
};
es("chparp", cE);
d = cE.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.fd = function() {
  return T(this, pA, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.YA = function() {
  return Q(this, 4);
};
d.I = function() {
  return U(this, pA, 5);
};
d.Fa = function(a) {
  Vr(this, 5, a);
};
var gE = function(a) {
  O(this, a, 0, -1, fE, null);
};
v(gE, N);
var fE = [4];
d = gE.prototype;
d.g = function(a) {
  var b, c = {Ob:(b = this.N()) && Pz(a, b), Tr:(b = this.fd()) && qA(a, b), V:(b = this.m()) && Y(a, b), Rb:P(this.I(), qA, a)};
  a && (c.l = this);
  return c;
};
d.j = function() {
  var a = new W, b;
  b = this.N();
  null != b && a.b(1, b, Qz);
  b = this.fd();
  null != b && a.b(2, b, sA);
  b = this.m();
  null != b && a.b(3, b, Z);
  b = this.I();
  0 < b.length && a.B(4, b, sA);
  return a.h();
};
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.fd = function() {
  return T(this, pA, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, pA, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var iE = function(a) {
  O(this, a, "chpmrp", -1, hE, null);
};
v(iE, N);
var hE = [4];
iE.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), Tr:(b = this.fd()) && qA(a, b), V:(b = this.m()) && Y(a, b), Rb:P(this.I(), qA, a)};
  a && (c.l = this);
  return c;
};
iE.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.fd();
  null != b && a.b(2, b, sA);
  b = this.m();
  null != b && a.b(3, b, Z);
  b = this.I();
  0 < b.length && a.B(4, b, sA);
  return a.h();
};
es("chpmrp", iE);
d = iE.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.fd = function() {
  return T(this, pA, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, pA, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var jE = function(a) {
  O(this, a, 0, -1, null, null);
};
v(jE, N);
d = jE.prototype;
d.g = function(a) {
  var b, c = {Ob:(b = this.N()) && Pz(a, b), ka:Q(this, 2), Da:Q(this, 3), V:(b = this.m()) && Y(a, b)};
  a && (c.l = this);
  return c;
};
d.j = function() {
  var a = new W, b;
  b = this.N();
  null != b && a.b(1, b, Qz);
  b = Q(this, 2);
  null != b && a.f(2, b);
  b = Q(this, 3);
  null != b && a.f(3, b);
  b = this.m();
  null != b && a.b(4, b, Z);
  return a.h();
};
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.da = function() {
  return Q(this, 2);
};
d.Y = function(a) {
  S(this, 2, a);
};
d.D = function() {
  return Q(this, 3);
};
d.qb = function(a) {
  S(this, 3, a);
};
d.m = function() {
  return T(this, X, 4);
};
d.u = function(a) {
  V(this, 4, a);
};
d.R = function() {
  this.u(void 0);
};
var kE = function(a) {
  O(this, a, "chpqrp", -1, null, null);
};
v(kE, N);
kE.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), Tr:(b = this.fd()) && qA(a, b), V:(b = this.m()) && Y(a, b)};
  a && (c.l = this);
  return c;
};
kE.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.fd();
  null != b && a.b(2, b, sA);
  b = this.m();
  null != b && a.b(3, b, Z);
  return a.h();
};
es("chpqrp", kE);
d = kE.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.fd = function() {
  return T(this, pA, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var mE = function(a) {
  O(this, a, 0, -1, lE, null);
};
v(mE, N);
var lE = [6, 7];
d = mE.prototype;
d.g = function(a) {
  var b, c = {Ob:(b = this.N()) && Pz(a, b), ka:Q(this, 2), Da:Q(this, 3), Gb:Q(this, 5), V:(b = this.m()) && Y(a, b), Sya:Q(this, 6), Rb:P(this.I(), Iu, a)};
  a && (c.l = this);
  return c;
};
d.j = function() {
  var a = new W, b;
  b = this.N();
  null != b && a.b(1, b, Qz);
  b = Q(this, 2);
  null != b && a.f(2, b);
  b = Q(this, 3);
  null != b && a.f(3, b);
  b = Q(this, 5);
  null != b && a.A(5, b);
  b = this.m();
  null != b && a.b(4, b, Z);
  b = this.B4();
  0 < b.length && a.$c(6, b);
  b = this.I();
  0 < b.length && a.B(7, b, Ju);
  return a.h();
};
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.da = function() {
  return Q(this, 2);
};
d.Y = function(a) {
  S(this, 2, a);
};
d.D = function() {
  return Q(this, 3);
};
d.qb = function(a) {
  S(this, 3, a);
};
d.Dn = function() {
  return Q(this, 5);
};
d.ws = function(a) {
  S(this, 5, a);
};
d.m = function() {
  return T(this, X, 4);
};
d.u = function(a) {
  V(this, 4, a);
};
d.R = function() {
  this.u(void 0);
};
d.B4 = function() {
  return Q(this, 6);
};
d.I = function() {
  return U(this, Hu, 7);
};
d.Fa = function(a) {
  Vr(this, 7, a);
};
var nE = function(a) {
  O(this, a, "chprrp", -1, null, null);
};
v(nE, N);
nE.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), V:(b = this.m()) && Y(a, b), SR:Q(this, 3)};
  a && (c.l = this);
  return c;
};
nE.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.m();
  null != b && a.b(2, b, Z);
  b = Q(this, 3);
  null != b && a.A(3, b);
  return a.h();
};
es("chprrp", nE);
nE.prototype.getResponseHeader = function() {
  return T(this, Rz, 1);
};
nE.prototype.m = function() {
  return T(this, X, 2);
};
nE.prototype.u = function(a) {
  V(this, 2, a);
};
nE.prototype.R = function() {
  this.u(void 0);
};
var oE = function(a) {
  O(this, a, 0, -1, null, null);
};
v(oE, N);
oE.prototype.g = function(a) {
  return pE(a, this);
};
var pE = function(a, b) {
  var c, e = {Ob:(c = b.N()) && Pz(a, c), ka:Q(b, 2), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
oE.prototype.j = function() {
  var a = new W;
  qE(this, a);
  return a.h();
};
var qE = function(a, b) {
  var c;
  c = a.N();
  null != c && b.b(1, c, Qz);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = a.m();
  null != c && b.b(3, c, Z);
};
d = oE.prototype;
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.da = function() {
  return Q(this, 2);
};
d.Y = function(a) {
  S(this, 2, a);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var sE = function(a) {
  O(this, a, "chpsrp", -1, rE, null);
};
v(sE, N);
var rE = [2, 4];
sE.prototype.g = function(a) {
  return tE(a, this);
};
var tE = function(a, b) {
  var c, e = {hb:(c = b.getResponseHeader()) && Sz(a, c), Yaa:P(b.Nn(), qA, a), V:(c = b.m()) && Y(a, c), Gya:P(b.qN(), Fv, a)};
  a && (e.l = b);
  return e;
};
sE.prototype.j = function() {
  var a = new W;
  uE(this, a);
  return a.h();
};
var uE = function(a, b) {
  var c;
  c = a.getResponseHeader();
  null != c && b.b(1, c, Tz);
  c = a.Nn();
  0 < c.length && b.B(2, c, sA);
  c = a.m();
  null != c && b.b(3, c, Z);
  c = a.qN();
  0 < c.length && b.B(4, c, Gv);
};
es("chpsrp", sE);
d = sE.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.Nn = function() {
  return U(this, pA, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.qN = function() {
  return U(this, Ev, 4);
};
var wE = function(a) {
  O(this, a, 0, -1, vE, null);
};
v(wE, N);
var vE = [2, 3];
wE.prototype.g = function(a) {
  return xE(a, this);
};
var xE = function(a, b) {
  var c, e = {V:(c = b.m()) && Y(a, c), lf:P(b.ua(), qA, a), Bh:P(b.ab(), Iu, a), Gb:Q(b, 4), ah:(c = b.bb()) && Iu(a, c), SR:Q(b, 6)};
  a && (e.l = b);
  return e;
};
wE.prototype.j = function() {
  var a = new W;
  yE(this, a);
  return a.h();
};
var yE = function(a, b) {
  var c;
  c = a.m();
  null != c && b.b(1, c, Z);
  c = a.ua();
  0 < c.length && b.B(2, c, sA);
  c = a.ab();
  0 < c.length && b.B(3, c, Ju);
  c = Q(a, 4);
  null != c && b.A(4, c);
  c = a.bb();
  null != c && b.b(5, c, Ju);
  c = Q(a, 6);
  null != c && b.A(6, c);
};
d = wE.prototype;
d.m = function() {
  return T(this, X, 1);
};
d.u = function(a) {
  V(this, 1, a);
};
d.R = function() {
  this.u(void 0);
};
d.ua = function() {
  return U(this, pA, 2);
};
d.ab = function() {
  return U(this, Hu, 3);
};
d.Dn = function() {
  return Q(this, 4);
};
d.ws = function(a) {
  S(this, 4, a);
};
d.bb = function() {
  return T(this, Hu, 5);
};
var zE = function(a) {
  O(this, a, 0, -1, null, null);
};
v(zE, N);
zE.prototype.g = function(a) {
  return AE(a, this);
};
var AE = function(a, b) {
  var c, e = {KO:R(b, 1, 0), ka:Q(b, 2), dba:(c = b.Tq()) && kt(a, c), Nua:Q(b, 4), Mua:Q(b, 5), Ksa:(c = b.FL()) && gB(a, c)};
  a && (e.l = b);
  return e;
};
zE.prototype.j = function() {
  var a = new W;
  BE(this, a);
  return a.h();
};
var BE = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.ha(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = a.Tq();
  null != c && b.b(3, c, mt);
  c = Q(a, 4);
  null != c && b.Z(4, c);
  c = Q(a, 5);
  null != c && b.Z(5, c);
  c = a.FL();
  null != c && b.b(6, c, hB);
};
zE.prototype.da = function() {
  return Q(this, 2);
};
zE.prototype.Y = function(a) {
  S(this, 2, a);
};
zE.prototype.Tq = function() {
  return T(this, jt, 3);
};
zE.prototype.FL = function() {
  return T(this, fB, 6);
};
var DE = function(a) {
  O(this, a, 0, -1, CE, null);
};
v(DE, N);
var CE = [2];
DE.prototype.g = function(a) {
  return EE(a, this);
};
var EE = function(a, b) {
  var c, e = {V:(c = b.m()) && Y(a, c), lf:P(b.ua(), xA, a)};
  a && (e.l = b);
  return e;
};
DE.prototype.j = function() {
  var a = new W;
  FE(this, a);
  return a.h();
};
var FE = function(a, b) {
  var c;
  c = a.m();
  null != c && b.b(1, c, Z);
  c = a.ua();
  0 < c.length && b.B(2, c, yA);
};
DE.prototype.m = function() {
  return T(this, X, 1);
};
DE.prototype.u = function(a) {
  V(this, 1, a);
};
DE.prototype.R = function() {
  this.u(void 0);
};
DE.prototype.ua = function() {
  return U(this, wA, 2);
};
var GE = function(a) {
  O(this, a, 0, -1, null, null);
};
v(GE, N);
GE.prototype.g = function(a) {
  return HE(a, this);
};
var HE = function(a, b) {
  var c, e = {Ob:(c = b.N()) && Pz(a, c), ka:Q(b, 2), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
GE.prototype.j = function() {
  var a = new W;
  IE(this, a);
  return a.h();
};
var IE = function(a, b) {
  var c;
  c = a.N();
  null != c && b.b(1, c, Qz);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = a.m();
  null != c && b.b(3, c, Z);
};
d = GE.prototype;
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.da = function() {
  return Q(this, 2);
};
d.Y = function(a) {
  S(this, 2, a);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var JE = function(a) {
  O(this, a, "chqrp", -1, null, null);
};
v(JE, N);
JE.prototype.g = function(a) {
  return KE(a, this);
};
var KE = function(a, b) {
  var c, e = {hb:(c = b.getResponseHeader()) && Sz(a, c), hangout:(c = b.zd()) && $z(a, c), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
JE.prototype.j = function() {
  var a = new W;
  LE(this, a);
  return a.h();
};
var LE = function(a, b) {
  var c;
  c = a.getResponseHeader();
  null != c && b.b(1, c, Tz);
  c = a.zd();
  null != c && b.b(2, c, aA);
  c = a.m();
  null != c && b.b(3, c, Z);
};
es("chqrp", JE);
d = JE.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.zd = function() {
  return T(this, Zz, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var NE = function(a) {
  O(this, a, 0, -1, ME, null);
};
v(NE, N);
var ME = [3];
NE.prototype.g = function(a) {
  return OE(a, this);
};
var OE = function(a, b) {
  var c, e = {Ob:(c = b.N()) && Pz(a, c), q1:(c = b.Fq()) && wu(a, c), Iua:P(b.hM(), xz, a), Fwa:(c = b.PM()) && tv(a, c), Oua:R(b, 5, !1), mediaType:R(b, 6, 1), iG:Q(b, 7), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
NE.prototype.j = function() {
  var a = new W;
  PE(this, a);
  return a.h();
};
var PE = function(a, b) {
  var c;
  c = a.N();
  null != c && b.b(1, c, Qz);
  c = a.Fq();
  null != c && b.b(2, c, xu);
  c = a.hM();
  0 < c.length && b.B(3, c, zz);
  c = a.PM();
  null != c && b.b(4, c, uv);
  c = Q(a, 5);
  null != c && b.Z(5, c);
  c = Q(a, 6);
  null != c && b.A(6, c);
  c = Q(a, 7);
  null != c && b.f(7, c);
  c = a.m();
  null != c && b.b(8, c, Z);
};
d = NE.prototype;
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.Fq = function() {
  return T(this, vu, 2);
};
d.nT = function(a) {
  V(this, 2, a);
};
d.hM = function() {
  return U(this, wz, 3);
};
d.PM = function() {
  return T(this, sv, 4);
};
d.cga = function(a) {
  V(this, 4, a);
};
d.xT = function(a) {
  S(this, 5, a);
};
d.$ = function() {
  return R(this, 6, 1);
};
d.uc = function(a) {
  S(this, 6, a);
};
d.vh = function() {
  S(this, 6, void 0);
};
d.m = function() {
  return T(this, X, 8);
};
d.u = function(a) {
  V(this, 8, a);
};
d.R = function() {
  this.u(void 0);
};
var QE = function(a) {
  O(this, a, "chrrp", -1, null, null);
};
v(QE, N);
QE.prototype.g = function(a) {
  return RE(a, this);
};
var RE = function(a, b) {
  var c, e = {hb:(c = b.getResponseHeader()) && Sz(a, c), ka:Q(b, 2), errorCode:Q(b, 3), iG:Q(b, 4), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
QE.prototype.j = function() {
  var a = new W;
  SE(this, a);
  return a.h();
};
var SE = function(a, b) {
  var c;
  c = a.getResponseHeader();
  null != c && b.b(1, c, Tz);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.A(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = a.m();
  null != c && b.b(5, c, Z);
};
es("chrrp", QE);
d = QE.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.da = function() {
  return Q(this, 2);
};
d.Y = function(a) {
  S(this, 2, a);
};
d.YA = function() {
  return Q(this, 3);
};
d.m = function() {
  return T(this, X, 5);
};
d.u = function(a) {
  V(this, 5, a);
};
d.R = function() {
  this.u(void 0);
};
var UE = function(a) {
  O(this, a, 0, -1, TE, null);
};
v(UE, N);
var TE = [2, 3];
UE.prototype.g = function(a) {
  return VE(a, this);
};
var VE = function(a, b) {
  var c, e = {V:(c = b.m()) && Y(a, c), lf:P(b.ua(), $z, a), Bh:P(b.ab(), zu, a), ah:(c = b.bb()) && zu(a, c)};
  a && (e.l = b);
  return e;
};
UE.prototype.j = function() {
  var a = new W;
  WE(this, a);
  return a.h();
};
var WE = function(a, b) {
  var c;
  c = a.m();
  null != c && b.b(1, c, Z);
  c = a.ua();
  0 < c.length && b.B(2, c, aA);
  c = a.ab();
  0 < c.length && b.B(3, c, Au);
  c = a.bb();
  null != c && b.b(4, c, Au);
};
d = UE.prototype;
d.m = function() {
  return T(this, X, 1);
};
d.u = function(a) {
  V(this, 1, a);
};
d.R = function() {
  this.u(void 0);
};
d.ua = function() {
  return U(this, Zz, 2);
};
d.ab = function() {
  return U(this, yu, 3);
};
d.bb = function() {
  return T(this, yu, 4);
};
var XE = function(a) {
  O(this, a, 0, -1, null, null);
};
v(XE, N);
XE.prototype.g = function(a) {
  return YE(a, this);
};
var YE = function(a, b) {
  var c, e = {mediaType:Q(b, 1), Uza:(c = b.iC()) && dB(a, c)};
  a && (e.l = b);
  return e;
};
XE.prototype.j = function() {
  var a = new W;
  ZE(this, a);
  return a.h();
};
var ZE = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = a.iC();
  null != c && b.b(2, c, eB);
};
d = XE.prototype;
d.$ = function() {
  return Q(this, 1);
};
d.uc = function(a) {
  S(this, 1, a);
};
d.vh = function() {
  S(this, 1, void 0);
};
d.iC = function() {
  return T(this, cB, 2);
};
d.wha = function(a) {
  V(this, 2, a);
};
var $E = function(a) {
  O(this, a, "chselrp", -1, null, null);
};
v($E, N);
$E.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), V:(b = this.m()) && Y(a, b)};
  a && (c.l = this);
  return c;
};
$E.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.m();
  null != b && a.b(2, b, Z);
  return a.h();
};
es("chselrp", $E);
$E.prototype.getResponseHeader = function() {
  return T(this, Rz, 1);
};
$E.prototype.m = function() {
  return T(this, X, 2);
};
$E.prototype.u = function(a) {
  V(this, 2, a);
};
$E.prototype.R = function() {
  this.u(void 0);
};
var aF = function(a) {
  O(this, a, 0, -1, null, null);
};
v(aF, N);
aF.prototype.g = function(a) {
  return bF(a, this);
};
var bF = function(a, b) {
  var c, e = {Ob:(c = b.N()) && Pz(a, c), sessionId:Q(b, 2), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
aF.prototype.j = function() {
  var a = new W;
  cF(this, a);
  return a.h();
};
var cF = function(a, b) {
  var c;
  c = a.N();
  null != c && b.b(1, c, Qz);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = a.m();
  null != c && b.b(3, c, Z);
};
d = aF.prototype;
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.K = function() {
  return Q(this, 2);
};
d.ib = function(a) {
  S(this, 2, a);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var eF = function(a) {
  O(this, a, 0, -1, dF, null);
};
v(eF, N);
var dF = [4];
eF.prototype.g = function(a) {
  return fF(a, this);
};
var fF = function(a, b) {
  var c, e = {Ob:(c = b.N()) && Pz(a, c), source:(c = b.S()) && DA(a, c), V:(c = b.m()) && Y(a, c), Rb:P(b.I(), DA, a)};
  a && (e.l = b);
  return e;
};
eF.prototype.j = function() {
  var a = new W;
  gF(this, a);
  return a.h();
};
var gF = function(a, b) {
  var c;
  c = a.N();
  null != c && b.b(1, c, Qz);
  c = a.S();
  null != c && b.b(2, c, IA);
  c = a.m();
  null != c && b.b(3, c, Z);
  c = a.I();
  0 < c.length && b.B(4, c, IA);
};
d = eF.prototype;
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.S = function() {
  return T(this, CA, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, CA, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var iF = function(a) {
  O(this, a, "chsoarp", -1, hF, null);
};
v(iF, N);
var hF = [4];
iF.prototype.g = function(a) {
  return jF(a, this);
};
var jF = function(a, b) {
  var c, e = {hb:(c = b.getResponseHeader()) && Sz(a, c), source:(c = b.S()) && DA(a, c), V:(c = b.m()) && Y(a, c), Rb:P(b.I(), DA, a)};
  a && (e.l = b);
  return e;
};
iF.prototype.j = function() {
  var a = new W;
  kF(this, a);
  return a.h();
};
var kF = function(a, b) {
  var c;
  c = a.getResponseHeader();
  null != c && b.b(1, c, Tz);
  c = a.S();
  null != c && b.b(2, c, IA);
  c = a.m();
  null != c && b.b(3, c, Z);
  c = a.I();
  0 < c.length && b.B(4, c, IA);
};
es("chsoarp", iF);
d = iF.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.S = function() {
  return T(this, CA, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, CA, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var mF = function(a) {
  O(this, a, 0, -1, lF, null);
};
v(mF, N);
var lF = [4];
d = mF.prototype;
d.g = function(a) {
  var b, c = {Ob:(b = this.N()) && Pz(a, b), source:(b = this.S()) && DA(a, b), V:(b = this.m()) && Y(a, b), Rb:P(this.I(), DA, a)};
  a && (c.l = this);
  return c;
};
d.j = function() {
  var a = new W, b;
  b = this.N();
  null != b && a.b(1, b, Qz);
  b = this.S();
  null != b && a.b(2, b, IA);
  b = this.m();
  null != b && a.b(3, b, Z);
  b = this.I();
  0 < b.length && a.B(4, b, IA);
  return a.h();
};
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.S = function() {
  return T(this, CA, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, CA, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var oF = function(a) {
  O(this, a, "chsomrp", -1, nF, null);
};
v(oF, N);
var nF = [4];
oF.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), source:(b = this.S()) && DA(a, b), V:(b = this.m()) && Y(a, b), Rb:P(this.I(), DA, a)};
  a && (c.l = this);
  return c;
};
oF.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.S();
  null != b && a.b(2, b, IA);
  b = this.m();
  null != b && a.b(3, b, Z);
  b = this.I();
  0 < b.length && a.B(4, b, IA);
  return a.h();
};
es("chsomrp", oF);
d = oF.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.S = function() {
  return T(this, CA, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, CA, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var pF = function(a) {
  O(this, a, 0, -1, null, null);
};
v(pF, N);
d = pF.prototype;
d.g = function(a) {
  var b, c = {Ob:(b = this.N()) && Pz(a, b), ka:Q(this, 2), Da:Q(this, 3), sourceId:Q(this, 4)};
  a && (c.l = this);
  return c;
};
d.j = function() {
  var a = new W, b;
  b = this.N();
  null != b && a.b(1, b, Qz);
  b = Q(this, 2);
  null != b && a.f(2, b);
  b = Q(this, 3);
  null != b && a.f(3, b);
  b = Q(this, 4);
  null != b && a.f(4, b);
  return a.h();
};
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.da = function() {
  return Q(this, 2);
};
d.Y = function(a) {
  S(this, 2, a);
};
d.D = function() {
  return Q(this, 3);
};
d.qb = function(a) {
  S(this, 3, a);
};
d.Ga = function() {
  return Q(this, 4);
};
d.fh = function(a) {
  S(this, 4, a);
};
var qF = function(a) {
  O(this, a, "chsoqrp", -1, null, null);
};
v(qF, N);
qF.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), source:(b = this.S()) && DA(a, b)};
  a && (c.l = this);
  return c;
};
qF.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.S();
  null != b && a.b(2, b, IA);
  return a.h();
};
es("chsoqrp", qF);
qF.prototype.getResponseHeader = function() {
  return T(this, Rz, 1);
};
qF.prototype.S = function() {
  return T(this, CA, 2);
};
var rF = function(a) {
  O(this, a, 0, -1, null, null);
};
v(rF, N);
rF.prototype.g = function(a) {
  return sF(a, this);
};
var sF = function(a, b) {
  var c, e = {Ob:(c = b.N()) && Pz(a, c), ka:Q(b, 2), Da:Q(b, 3), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
rF.prototype.j = function() {
  var a = new W;
  tF(this, a);
  return a.h();
};
var tF = function(a, b) {
  var c;
  c = a.N();
  null != c && b.b(1, c, Qz);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = a.m();
  null != c && b.b(4, c, Z);
};
d = rF.prototype;
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.da = function() {
  return Q(this, 2);
};
d.Y = function(a) {
  S(this, 2, a);
};
d.D = function() {
  return Q(this, 3);
};
d.qb = function(a) {
  S(this, 3, a);
};
d.m = function() {
  return T(this, X, 4);
};
d.u = function(a) {
  V(this, 4, a);
};
d.R = function() {
  this.u(void 0);
};
var vF = function(a) {
  O(this, a, "chsosrp", -1, uF, null);
};
v(vF, N);
var uF = [2];
vF.prototype.g = function(a) {
  return wF(a, this);
};
var wF = function(a, b) {
  var c, e = {hb:(c = b.getResponseHeader()) && Sz(a, c), gda:P(b.fl(), DA, a), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
vF.prototype.j = function() {
  var a = new W;
  xF(this, a);
  return a.h();
};
var xF = function(a, b) {
  var c;
  c = a.getResponseHeader();
  null != c && b.b(1, c, Tz);
  c = a.fl();
  0 < c.length && b.B(2, c, IA);
  c = a.m();
  null != c && b.b(3, c, Z);
};
es("chsosrp", vF);
d = vF.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.fl = function() {
  return U(this, CA, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var zF = function(a) {
  O(this, a, 0, -1, yF, null);
};
v(zF, N);
var yF = [2, 3];
zF.prototype.g = function(a) {
  return AF(a, this);
};
var AF = function(a, b) {
  var c, e = {V:(c = b.m()) && Y(a, c), lf:P(b.ua(), DA, a), Bh:P(b.ab(), kv, a), ah:(c = b.bb()) && kv(a, c)};
  a && (e.l = b);
  return e;
};
zF.prototype.j = function() {
  var a = new W;
  BF(this, a);
  return a.h();
};
var BF = function(a, b) {
  var c;
  c = a.m();
  null != c && b.b(1, c, Z);
  c = a.ua();
  0 < c.length && b.B(2, c, IA);
  c = a.ab();
  0 < c.length && b.B(3, c, lv);
  c = a.bb();
  null != c && b.b(4, c, lv);
};
d = zF.prototype;
d.m = function() {
  return T(this, X, 1);
};
d.u = function(a) {
  V(this, 1, a);
};
d.R = function() {
  this.u(void 0);
};
d.ua = function() {
  return U(this, CA, 2);
};
d.ab = function() {
  return U(this, jv, 3);
};
d.bb = function() {
  return T(this, jv, 4);
};
var CF = function(a) {
  O(this, a, 0, -1, null, null);
};
v(CF, N);
CF.prototype.g = function(a) {
  return DF(a, this);
};
var DF = function(a, b) {
  var c, e = {direction:Q(b, 1), mediaType:Q(b, 2), sessionId:Q(b, 3), MU:Q(b, 4), ka:Q(b, 5), Da:Q(b, 6), sourceId:Q(b, 7), axa:(c = b.Jg()) && EF(a, c), request:(c = b.Vh()) && dB(a, c), g9:(c = b.ye()) && FF(a, c), YAa:Q(b, 11)};
  a && (e.l = b);
  return e;
};
CF.prototype.j = function() {
  var a = new W;
  GF(this, a);
  return a.h();
};
var GF = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = Q(a, 2);
  null != c && b.A(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = Q(a, 5);
  null != c && b.f(5, c);
  c = Q(a, 6);
  null != c && b.f(6, c);
  c = Q(a, 7);
  null != c && b.f(7, c);
  c = a.Jg();
  null != c && b.b(8, c, HF);
  c = a.Vh();
  null != c && b.b(9, c, eB);
  c = a.ye();
  null != c && b.b(10, c, IF);
  c = Q(a, 11);
  null != c && b.Z(11, c);
};
d = CF.prototype;
d.Uc = function() {
  return Q(this, 1);
};
d.zf = function(a) {
  S(this, 1, a);
};
d.$ = function() {
  return Q(this, 2);
};
d.uc = function(a) {
  S(this, 2, a);
};
d.vh = function() {
  S(this, 2, void 0);
};
d.K = function() {
  return Q(this, 3);
};
d.ib = function(a) {
  S(this, 3, a);
};
d.yc = function() {
  return Q(this, 4);
};
d.om = function(a) {
  S(this, 4, a);
};
d.da = function() {
  return Q(this, 5);
};
d.Y = function(a) {
  S(this, 5, a);
};
d.D = function() {
  return Q(this, 6);
};
d.qb = function(a) {
  S(this, 6, a);
};
d.Ga = function() {
  return Q(this, 7);
};
d.fh = function(a) {
  S(this, 7, a);
};
d.Jg = function() {
  return T(this, JF, 8);
};
d.OT = function(a) {
  V(this, 8, a);
};
d.Vh = function() {
  return T(this, cB, 9);
};
d.Uga = function(a) {
  V(this, 9, a);
};
d.ye = function() {
  return T(this, KF, 10);
};
d.sx = function(a) {
  V(this, 10, a);
};
d.p5 = function() {
  return Q(this, 11);
};
d.fG = function(a) {
  S(this, 11, a);
};
d.L6 = function() {
  return null != Q(this, 11);
};
var JF = function(a) {
  O(this, a, 0, -1, LF, null);
};
v(JF, N);
var LF = [1, 2];
JF.prototype.g = function(a) {
  return EF(a, this);
};
var EF = function(a, b) {
  var c = {lG:Q(b, 1), sia:P(b.Qn(), MF, a)};
  a && (c.l = b);
  return c;
};
JF.prototype.j = function() {
  var a = new W;
  HF(this, a);
  return a.h();
};
var HF = function(a, b) {
  var c;
  c = a.Tf();
  0 < c.length && b.mW(1, c);
  c = a.Qn();
  0 < c.length && b.B(2, c, NF);
};
d = JF.prototype;
d.Tf = function() {
  return Q(this, 1);
};
d.Fs = function(a) {
  S(this, 1, a || []);
};
d.Gp = function(a, b) {
  Tr(this, 1, a, b);
};
d.Qn = function() {
  return U(this, OF, 2);
};
d.oU = function(a) {
  Vr(this, 2, a);
};
var OF = function(a) {
  O(this, a, 0, -1, PF, null);
};
v(OF, N);
var PF = [2];
OF.prototype.g = function(a) {
  return MF(a, this);
};
var MF = function(a, b) {
  var c = {Bda:Q(b, 1), lG:Q(b, 2)};
  a && (c.l = b);
  return c;
};
OF.prototype.j = function() {
  var a = new W;
  NF(this, a);
  return a.h();
};
var NF = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = a.Tf();
  0 < c.length && b.mW(2, c);
};
d = OF.prototype;
d.Xq = function() {
  return Q(this, 1);
};
d.kU = function(a) {
  S(this, 1, a);
};
d.Tf = function() {
  return Q(this, 2);
};
d.Fs = function(a) {
  S(this, 2, a || []);
};
d.Gp = function(a, b) {
  Tr(this, 2, a, b);
};
var KF = function(a) {
  O(this, a, 0, -1, null, null);
};
v(KF, N);
KF.prototype.g = function(a) {
  return FF(a, this);
};
var FF = function(a, b) {
  var c = {muted:Q(b, 1)};
  a && (c.l = b);
  return c;
};
KF.prototype.j = function() {
  var a = new W;
  IF(this, a);
  return a.h();
};
var IF = function(a, b) {
  a = Q(a, 1);
  null != a && b.Z(1, a);
};
KF.prototype.Mn = function() {
  return Q(this, 1);
};
KF.prototype.ys = function(a) {
  S(this, 1, a);
};
var QF = function(a) {
  O(this, a, 0, -1, null, null);
};
v(QF, N);
d = QF.prototype;
d.g = function(a) {
  var b, c = {Ob:(b = this.N()) && Pz(a, b), direction:Q(this, 2), sessionId:Q(this, 3), MU:Q(this, 4), ka:Q(this, 5)};
  a && (c.l = this);
  return c;
};
d.j = function() {
  var a = new W, b;
  b = this.N();
  null != b && a.b(1, b, Qz);
  b = Q(this, 2);
  null != b && a.A(2, b);
  b = Q(this, 3);
  null != b && a.f(3, b);
  b = Q(this, 4);
  null != b && a.f(4, b);
  b = Q(this, 5);
  null != b && a.f(5, b);
  return a.h();
};
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.Uc = function() {
  return Q(this, 2);
};
d.zf = function(a) {
  S(this, 2, a);
};
d.K = function() {
  return Q(this, 3);
};
d.ib = function(a) {
  S(this, 3, a);
};
d.yc = function() {
  return Q(this, 4);
};
d.om = function(a) {
  S(this, 4, a);
};
d.da = function() {
  return Q(this, 5);
};
d.Y = function(a) {
  S(this, 5, a);
};
var RF = function(a) {
  O(this, a, 0, -1, null, null);
};
v(RF, N);
RF.prototype.g = function(a) {
  return SF(a, this);
};
var SF = function(a, b) {
  var c, e = {Ob:(c = b.N()) && Pz(a, c), direction:Q(b, 2), sessionId:Q(b, 3), ka:Q(b, 4), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
RF.prototype.j = function() {
  var a = new W;
  TF(this, a);
  return a.h();
};
var TF = function(a, b) {
  var c;
  c = a.N();
  null != c && b.b(1, c, Qz);
  c = Q(a, 2);
  null != c && b.A(2, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = Q(a, 4);
  null != c && b.f(4, c);
  c = a.m();
  null != c && b.b(5, c, Z);
};
d = RF.prototype;
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.Uc = function() {
  return Q(this, 2);
};
d.zf = function(a) {
  S(this, 2, a);
};
d.K = function() {
  return Q(this, 3);
};
d.ib = function(a) {
  S(this, 3, a);
};
d.da = function() {
  return Q(this, 4);
};
d.Y = function(a) {
  S(this, 4, a);
};
d.m = function() {
  return T(this, X, 5);
};
d.u = function(a) {
  V(this, 5, a);
};
d.R = function() {
  this.u(void 0);
};
var UF = function(a) {
  xC.call(this, ie(0));
  this.Dd = a;
};
la(UF, xC);
UF.prototype.sendRequest = function(a, b) {
  var c = this;
  return new ee(function(e, f) {
    c.Dd.getAuthToken().then(function(f) {
      null == b && (b = {});
      b.Authorization = "Bearer " + f;
      e(xC.prototype.sendRequest.call(c, a, b));
    }, f);
  });
};
var VF = function(a) {
  O(this, a, 0, -1, null, null);
};
v(VF, N);
d = VF.prototype;
d.g = function(a) {
  var b, c = {Sg:R(this, 1, ""), IR:(b = this.On()) && BB(a, b)};
  a && (c.l = this);
  return c;
};
d.j = function() {
  var a = new W, b;
  b = this.La();
  0 < b.length && a.f(1, b);
  b = this.On();
  null != b && a.b(2, b, EB);
  return a.h();
};
d.La = function() {
  return R(this, 1, "");
};
d.Oa = function(a) {
  S(this, 1, a);
};
d.On = function() {
  return T(this, AB, 2);
};
d.vx = function(a) {
  V(this, 2, a);
};
var XF = function(a) {
  O(this, a, 0, -1, WF, null);
};
v(XF, N);
var WF = [1];
XF.prototype.g = function(a) {
  var b = {yya:P(this.KB(), BB, a)};
  a && (b.l = this);
  return b;
};
XF.prototype.j = function() {
  var a = new W, b;
  b = this.KB();
  0 < b.length && a.B(1, b, EB);
  return a.h();
};
XF.prototype.KB = function() {
  return U(this, AB, 1);
};
XF.prototype.xY = function(a, b) {
  return Wr(this, 1, a, AB, b);
};
var ZF = function(a) {
  O(this, a, 0, -1, YF, null);
};
v(ZF, N);
var YF = [2];
ZF.prototype.g = function(a) {
  return $F(a, this);
};
var $F = function(a, b) {
  var c, e = {V:(c = b.m()) && Xw(a, c), lf:P(b.ua(), uB, a), ah:R(b, 3, "")};
  a && (e.l = b);
  return e;
};
ZF.prototype.j = function() {
  var a = new W;
  aG(this, a);
  return a.h();
};
var aG = function(a, b) {
  var c;
  c = a.m();
  null != c && b.b(1, c, Yw);
  c = a.ua();
  0 < c.length && b.B(2, c, wB);
  c = a.bb();
  0 < c.length && b.f(3, c);
};
d = ZF.prototype;
d.m = function() {
  return T(this, Ww, 1);
};
d.u = function(a) {
  V(this, 1, a);
};
d.R = function() {
  this.u(void 0);
};
d.ua = function() {
  return U(this, tB, 2);
};
d.bb = function() {
  return R(this, 3, "");
};
var cG = function(a) {
  O(this, a, 0, -1, bG, null);
};
v(cG, N);
var bG = [2, 3];
cG.prototype.g = function(a) {
  return dG(a, this);
};
var dG = function(a, b) {
  var c, e = {V:(c = b.m()) && Xw(a, c), lf:P(b.ua(), BB, a), Bh:Q(b, 3), ah:R(b, 4, "")};
  a && (e.l = b);
  return e;
};
cG.prototype.j = function() {
  var a = new W;
  eG(this, a);
  return a.h();
};
var eG = function(a, b) {
  var c;
  c = a.m();
  null != c && b.b(1, c, Yw);
  c = a.ua();
  0 < c.length && b.B(2, c, EB);
  c = a.ab();
  0 < c.length && b.$c(3, c);
  c = a.bb();
  0 < c.length && b.f(4, c);
};
d = cG.prototype;
d.m = function() {
  return T(this, Ww, 1);
};
d.u = function(a) {
  V(this, 1, a);
};
d.R = function() {
  this.u(void 0);
};
d.ua = function() {
  return U(this, AB, 2);
};
d.ab = function() {
  return Q(this, 3);
};
d.bb = function() {
  return R(this, 4, "");
};
var fG = function(a) {
  O(this, a, 0, -1, null, null);
};
v(fG, N);
fG.prototype.g = function(a) {
  var b, c = {IR:(b = this.On()) && BB(a, b)};
  a && (c.l = this);
  return c;
};
fG.prototype.j = function() {
  var a = new W, b;
  b = this.On();
  null != b && a.b(1, b, EB);
  return a.h();
};
fG.prototype.On = function() {
  return T(this, AB, 1);
};
fG.prototype.vx = function(a) {
  V(this, 1, a);
};
var hG = function(a, b, c, e, f) {
  $c.call(this);
  this.Lo = a;
  this.zz = b;
  this.Cd = f || {};
  this.cF = c;
  this.eA = e;
  this.Em = -1;
  this.Qb = G();
  this.jr = !1;
  this.kd = 0;
  this.mg = void 0;
  this.eb = ++gG;
};
v(hG, $c);
var gG = 0;
d = hG.prototype;
d.dG = function(a) {
  this.Em = a;
};
d.getPromise = function() {
  return this.Qb.promise;
};
d.rv = function() {
  return this.jr;
};
d.Ir = function() {
  this.jr = !0;
};
d.Xk = function() {
  return this.Cd;
};
d.RB = function(a) {
  return new Ip(this.SB(a), this.oC(a));
};
d.oC = function(a) {
  a = a.headers;
  a = parseInt(a.ETag || a.etag, 10);
  return isNaN(a) ? -1 : a;
};
d.Qo = function(a) {
  this.kd = a;
};
d.kj = function() {
  return this.kd;
};
d.pm = function(a) {
  this.mg = a;
};
d.tj = function() {
  return this.mg;
};
d.lC = function() {
  return this.Lo + "/" + this.zz;
};
d.OB = function() {
  return this.cF.Ua();
};
d.toString = function() {
  return "[Operation id: " + this.eb + ": service: " + this.Lo + ", call: " + this.zz + ", version: " + this.Em + "]";
};
d.SB = function(a) {
  return a.bd;
};
var jG = function() {
  Ca.call(this);
};
v(jG, Ca);
jG.prototype.message = "Operation has already been executed.";
jG.prototype.name = "AlreadyExecutedError";
var kG = function(a, b, c, e, f, h, k) {
  eC.call(this, a, b, c, e, f, h, k);
  this.VU = f;
  this.xb = -1;
  this.rl = !1;
  this.Nv = -1;
  this.Kc = [];
  this.Xw = this.Du = this.Ux = this.Pv = null;
  this.sr = !1;
  this.wP = 0;
  this.Vs = null;
  this.Di = new yq(this.config.I4(), this.config.b5());
  this.eI = new Hx(this.fI, 0, this);
};
v(kG, eC);
d = kG.prototype;
d.start = function(a) {
  kG.X.start.call(this, a);
  if ("Oa" != this.state) {
    return null;
  }
  this.Hc.listen(this.Rr, "v", this.qQ);
  this.fF(!0);
  J(this.w, "Starting initial resync.");
  return this.ep("cb", !0);
};
d.Lx = function() {
  kG.X.Lx.call(this);
  this.Hc.vd(this.Rr, "v", this.qQ);
  ve(this.Xw);
  this.Xw = null;
  this.Di.reset();
  ve(this.Ux);
  this.Ux = null;
  ve(this.Du);
  this.Vs = this.Du = null;
  this.rl = !1;
};
d.query = function(a, b) {
  return this.lo("Ua", this.Ze(a), null, null, b);
};
d.search = function(a) {
  return this.lo("Va", this.Gf(), null, null, a);
};
d.tG = function(a) {
  "bb" != a && 0 == this.Di.bq && this.Rr.Lca();
  K(this.w, "Starting sync. Type: " + a);
  var b = "db" == a || "eb" == a, c = this.Gf(), e = -2;
  this.config.a5() && (9E4 > u() - this.wP ? (e = this.xb, c.dG(e)) : this.wP = u());
  c = this.lo("Va", c, function(b) {
    return e != b.rp ? new lG(b.rp, b.data, a) : null;
  }, null);
  c.then(t(this.R$, this, b)).zb(t(this.Q$, this, b));
  this.Pv = c;
  this.Pv.zb(pa);
  return c;
};
d.bo = function(a) {
  return 0 <= a;
};
d.Gf = function() {
  return this.VU.Gf(this.Pu());
};
d.Ze = function(a) {
  return this.VU.Ze(this.$t(a));
};
d.qQ = function() {
  this.ep("bb", !0);
};
d.Db = function() {
  return null != this.ep("fb", !0) || this.Pv ? w(this.Pv) : je("Collection not yet started, so cannot resync.");
};
d.xE = function(a) {
  this.A7(a) ? this.Db() : kG.X.xE.call(this, a);
};
d.bO = function(a) {
  var b;
  va(a.notification.m) && null != a.notification.m() && (b = a.notification.m().Uf());
  w(null != b, "Received notification without a server version");
  return b;
};
d.A7 = function(a) {
  var b = !1;
  a = a.notification.bb();
  null != a && "" != a && (b = this.Xt(a), b = this.gd(b), b = this.jz(b));
  return b;
};
d.yE = function(a) {
  K(this.w, "Begin processing update: " + a);
  var b = a.jb == this.Nv;
  this.Zba(a.jb);
  this.fF(!1);
  if (a instanceof lG) {
    this.NY(a);
  } else {
    this.t8(a.Ys, a.Zs);
    if (this.bo(this.xb) && a.jb <= this.xb) {
      "Ka" == a.BV && this.va("h");
      var c = !1;
      b && (this.va("i"), c = !0);
      this.bP(a.jb) && (this.va("j"), c = !0);
      c && this.ep("gb", !0);
      this.va("g");
      K(this.w, "Ignoring update " + a + " below or equal to local version (" + this.xb + ")");
      return;
    }
    b = nb(this.Kc, function(b) {
      return b.jb <= a.jb;
    }, this);
    if (null != b && a.jb == b.jb) {
      this.va("g");
      I(this.w, "Duplicate update received, ignoring it.");
      return;
    }
    K(this.w, "Queuing partial update: " + a);
    ub(this.Kc, a, b);
  }
  a instanceof lG ? this.fI() : this.eI.rq();
  K(this.w, "Finish processing update: " + a + ": " + this.Fg());
};
d.t8 = function(a, b) {
  this.bo(this.xb) || (K(this.w, "Dispatch early notification: "), this.dispatchEvent(new mG(a, b)));
};
d.ep = function(a, b) {
  if (!this.jf() || this.sr) {
    return null;
  }
  this.Di.reset();
  var c = null;
  this.sr = !0;
  b ? c = this.tG(a) : this.mG();
  return c;
};
d.mA = function() {
  this.sr && (J(this.w, "Ending resync"), this.sr = !1, this.dispatchEvent("S"));
};
d.mG = function() {
  var a = this.Di.zc();
  this.va("m");
  J(this.w, "Scheduling resync timer, backoff count: " + this.Di.bq + ", backoff: " + a);
  this.Xw = ue(this.I$, a, this);
};
d.I$ = function() {
  J(this.w, "Resync timer triggered, " + this.Fg());
  this.Xw = null;
  this.jf() ? (this.va("n"), this.tG("gb")) : this.mA();
};
d.R$ = function(a) {
  J(this.w, (a ? "Poll" : "Resync") + " operation executed, " + this.Fg());
  this.OR(!1);
  if (this.rl || !this.jf()) {
    this.mA();
  } else {
    a = !1;
    var b = this.config.H4();
    this.Di.bq >= b ? (this.va("l"), J(this.w, "Hard sync threshold reached (" + b + "), doing a hard resync"), a = !0) : this.Kc.length > this.config.YN() && (this.va("k"), K(this.w, "Number of queued updates is larger than the max (" + this.config.YN() + "), clearing the queue"), a = !0);
    a ? (rb(this.Kc), this.Di.reset(), this.tG("hb")) : (this.Di.Ft(), this.mG());
  }
};
d.Q$ = function(a, b) {
  var c = (a ? "Poll" : "Resync") + " error: " + b;
  Pf(this.w, c, b instanceof Error ? b : Error(c));
  this.va(a ? "y" : "o");
  this.OR(!0);
  this.jf() ? (this.Di.Ft(), this.mG()) : this.mA();
};
d.Fg = function() {
  return kG.X.Fg.call(this) + ", is synced: " + this.rl + ", is resyncing: " + this.sr + ", queue size: " + this.Kc.length + ", highest observed server version: " + this.Nv + (0 < this.Kc.length ? ", smallest queued version: " + fb(this.Kc).jb + ", largest queued version: " + this.Kc[0].jb : "");
};
d.fI = function() {
  this.eI.stop();
  if (0 != this.Kc.length && this.bo(this.xb)) {
    K(this.w, "Trying to apply any queued updates, " + this.Fg());
    for (var a = 0;0 < this.Kc.length && fb(this.Kc).jb <= this.xb;) {
      var b = this.Kc.pop();
      K(this.w, "Tossing queued update " + b + " below or equal to local version (" + this.xb + ")");
      a++;
    }
    0 < a && K(this.w, "Tossed " + a + " queued old updates below or equal to local version (" + this.xb + ")");
    for (a = 0;0 < this.Kc.length;) {
      if (b = fb(this.Kc), b.jb == this.xb) {
        this.Kc.pop(), a++;
      } else {
        if (b.jb == this.xb + 1) {
          this.xb = b.jb, this.dz(b), this.Kc.pop(), a++;
        } else {
          K(this.w, "Unable to incrementally apply next queued update,  lowest queue update version: " + b.jb + ", local version:" + this.xb + ", remaining queue length: " + this.Kc.length);
          break;
        }
      }
    }
    K(this.w, "Applied " + a + " queued updates");
  }
  (this.rl = 0 == this.Kc.length && this.bo(this.xb)) ? this.OP() : this.ep("gb", !1);
};
d.ZQ = function(a) {
  this.jf() && (this.va("p"), J(this.w, "Executing poll sync operation"), this.ep(a, !0), this.fF(!0));
};
d.fF = function(a) {
  if (this.jf()) {
    J(this.w, "Scheduling next poll for " + this.config.ON() / 1000 + " seconds from now");
    ve(this.Ux);
    this.Ux = ue(Ba(this.ZQ, "db"), this.config.ON(), this);
    var b = this.config.k3();
    null != b || (b = 90000);
    a && 0 < b && (ve(this.Du), this.Du = ue(Ba(this.ZQ, "eb"), b, this));
  }
};
d.OR = function(a) {
  if (a) {
    if (null != this.Vs) {
      a = u() - this.Vs;
      var b = "Sync operations failing for a period of " + a / 1000 + " seconds (limit configured to: " + this.config.jC() / 1000 + " seconds).";
      I(this.w, b);
      a >= this.config.jC() && this.vA(22, b);
    } else {
      this.Vs = u(), I(this.w, "Sync operation failed, we will continue retrying for up to " + this.config.jC() / 1000 + " seconds before shutting down...");
    }
  } else {
    this.Vs = null;
  }
};
d.NY = function(a) {
  K(this.w, "Processing full update: " + a);
  Of(this.w, Hf, "Snapshot: [" + a.data.join("|") + "]");
  if (this.xb >= a.jb && 100 > this.xb - a.jb) {
    var b = [];
    this.xb == a.jb && (x(a.data, function(a) {
      var c = nb(this.data, function(b) {
        return this.gd(a).equals(this.gd(b));
      }, this);
      nG(c, a) || b.push({local:c && c.Ua(), server:a.Ua()});
    }, this), x(this.data, function(c) {
      null != nb(a.data, function(a) {
        return this.gd(c).equals(this.gd(a));
      }, this) || b.push({local:c.Ua(), server:null});
    }, this));
    if (0 != b.length) {
      I(this.w, "Reapplying update with version that's the same, update: " + a.jb + ", local: " + this.xb + ", type: " + a.Ws), this.va("x", b);
    } else {
      this.va("u");
      switch(a.Ws) {
        case "gb":
          this.va("v");
          break;
        case "db":
          this.va("w");
      }
      K(this.w, "Ignoring update with version not newer than local version, update: " + a.jb + ", local: " + this.xb + ", type: " + a.Ws);
      return;
    }
  }
  this.xb > a.jb && this.bP(a.jb) && this.va("j", "" + (this.xb - a.jb));
  this.va("q");
  switch(a.Ws) {
    case "db":
      this.va("s");
      break;
    case "gb":
      this.va("r");
      break;
    case "hb":
      this.va("t");
  }
  var c = jb(a.data, function(a) {
    if (this.Hv(a)) {
      return !0;
    }
    this.va("z", "Full update: " + a.Ua());
    return !1;
  }, this), e = [];
  x(this.data, function(a) {
    nb(c, function(b) {
      return this.gd(a).equals(this.gd(b));
    }, this) || e.push(this.gd(a));
  }, this);
  K(this.w, "Applying full update as partial and advancing version from " + this.xb + " to " + a.jb);
  this.xb = a.jb;
  this.dz(new gC(a.jb, c, e, "Ma"));
};
d.bP = function(a) {
  return 100 < this.xb - a;
};
d.Zba = function(a) {
  this.Nv = Math.max(this.Nv, a);
};
var nG = function(a, b) {
  return a == b || a instanceof b.constructor && oG(JSON.parse(a.Ua()), JSON.parse(b.Ua()));
}, oG = function(a, b) {
  var c = ta(a), e = ta(b);
  if (c && e) {
    var c = {}, f;
    for (f in a) {
      a.hasOwnProperty(f) && (c[f] = 0);
    }
    for (f in b) {
      b.hasOwnProperty(f) && (c[f] = 0);
    }
    for (f in c) {
      if (!oG(a[f], b[f])) {
        return !1;
      }
    }
    return !0;
  }
  return a == b || null == a && e && 0 == b.length || null == b && c && 0 == a.length;
}, lG = function(a, b, c) {
  nC.call(this, a);
  this.data = b;
  this.Ws = c;
};
v(lG, nC);
lG.prototype.toString = function() {
  return "[Full update id: " + this.id + ", version: " + this.jb + ", resource count: " + this.data.length + ", sync type: " + this.Ws + "]";
};
var mG = function(a, b) {
  E.call(this, "Q");
  this.Mb = a;
  this.removed = b;
};
v(mG, E);
var pG = function(a, b, c) {
  tx.call(this, a, c, "Ia");
  this.H = b;
  this.Va = new Ik(this);
  this.pa(this.Va);
  this.Va.listen(this.Mt, "V", function(a) {
    this.P$(a.Nia);
  });
};
v(pG, tx);
pG.prototype.K = function() {
  return this.H;
};
pG.prototype.P$ = function(a) {
  null == a || Ha(a) || this.dispatchEvent(new qG(this.H, a));
};
var qG = function(a, b) {
  E.call(this, "W");
  this.sessionId = a;
  this.url = b;
};
v(qG, E);
var sG = function(a) {
  O(this, a, "hc:cc", -1, rG, null);
};
v(sG, N);
var rG = [14, 15];
sG.prototype.g = function(a) {
  var b, c = {clientId:Q(this, 1), wba:Q(this, 2), appName:Q(this, 3), appVersion:Q(this, 4), oda:Q(this, 5), q_:Q(this, 6), QAa:Q(this, 7), iba:Q(this, 8), Xra:Rr(this, 9), Wra:Q(this, 10), Yra:Q(this, 11), oAa:Q(this, 12), tra:(b = this.Qu()) && ex(a, b), cta:Q(this, 14), uta:Q(this, 15), pda:Q(this, 16), Lxa:(b = this.EB()) && NB(a, b), Asa:Q(this, 18), nsa:(b = this.VA()) && tG(a, b)};
  a && (c.l = this);
  return c;
};
sG.prototype.j = function() {
  var a = new W, b;
  b = Q(this, 1);
  null != b && a.A(1, b);
  b = Q(this, 2);
  null != b && a.f(2, b);
  b = Q(this, 3);
  null != b && a.f(3, b);
  b = Q(this, 4);
  null != b && a.f(4, b);
  b = Q(this, 5);
  null != b && a.A(5, b);
  b = Q(this, 6);
  null != b && a.f(6, b);
  b = Q(this, 7);
  null != b && a.f(7, b);
  b = Q(this, 8);
  null != b && a.Z(8, b);
  b = Q(this, 9);
  null != b && a.Ib(9, b);
  b = Q(this, 10);
  null != b && a.f(10, b);
  b = Q(this, 11);
  null != b && a.f(11, b);
  b = Q(this, 12);
  null != b && a.f(12, b);
  b = this.Qu();
  null != b && a.b(13, b, fx);
  b = this.Tu();
  0 < b.length && a.$c(14, b);
  b = this.j3();
  0 < b.length && a.$c(15, b);
  b = Q(this, 16);
  null != b && a.Z(16, b);
  b = this.EB();
  null != b && a.b(17, b, PB);
  b = Q(this, 18);
  null != b && a.Z(18, b);
  b = this.VA();
  null != b && a.b(19, b, uG);
  return a.h();
};
es("hc:cc", sG);
d = sG.prototype;
d.dd = function() {
  return Q(this, 1);
};
d.hg = function(a) {
  S(this, 1, a);
};
d.Sh = function() {
  return Q(this, 2);
};
d.setProperty = function(a) {
  S(this, 2, a);
};
d.JK = function() {
  return Q(this, 3);
};
d.QS = function(a) {
  S(this, 3, a);
};
d.c2 = function() {
  return Q(this, 4);
};
d.RS = function(a) {
  S(this, 4, a);
};
d.Lg = function() {
  return Q(this, 5);
};
d.wx = function(a) {
  S(this, 5, a);
};
d.yd = function() {
  return Q(this, 6);
};
d.Oo = function(a) {
  S(this, 6, a);
};
d.mv = function() {
  return Q(this, 7);
};
d.Mha = function(a) {
  S(this, 7, a);
};
d.cl = function() {
  return Q(this, 8);
};
d.As = function(a) {
  S(this, 8, a);
};
d.rL = function() {
  return Rr(this, 9);
};
d.gT = function(a) {
  S(this, 9, a);
};
d.qL = function() {
  return Q(this, 10);
};
d.fT = function(a) {
  S(this, 10, a);
};
d.sL = function() {
  return Q(this, 11);
};
d.hT = function(a) {
  S(this, 11, a);
};
d.SN = function() {
  return Q(this, 12);
};
d.Dha = function(a) {
  S(this, 12, a);
};
d.Qu = function() {
  return T(this, dx, 13);
};
d.Fea = function(a) {
  V(this, 13, a);
};
d.Tu = function() {
  return Q(this, 14);
};
d.lfa = function(a) {
  S(this, 14, a || []);
};
d.j3 = function() {
  return Q(this, 15);
};
d.Pn = function() {
  return Q(this, 16);
};
d.xx = function(a) {
  S(this, 16, a);
};
d.EB = function() {
  return T(this, MB, 17);
};
d.Ega = function(a) {
  V(this, 17, a);
};
d.Su = function() {
  return Q(this, 18);
};
d.bfa = function(a) {
  S(this, 18, a);
};
d.VA = function() {
  return T(this, vG, 19);
};
var vG = function(a) {
  O(this, a, 0, -1, null, null);
};
v(vG, N);
vG.prototype.g = function(a) {
  return tG(a, this);
};
var tG = function(a, b) {
  var c = {Cva:R(b, 1, 60000), Bva:R(b, 2, 1), Gqa:R(b, 3, 0)};
  a && (c.l = b);
  return c;
};
vG.prototype.j = function() {
  var a = new W;
  uG(this, a);
  return a.h();
};
var uG = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(1, c);
  c = Q(a, 2);
  null != c && b.s(2, c);
  c = Q(a, 3);
  null != c && b.s(3, c);
};
vG.prototype.F3 = function() {
  return R(this, 1, 60000);
};
vG.prototype.E3 = function() {
  return R(this, 2, 1);
};
vG.prototype.ZK = function() {
  return R(this, 3, 0);
};
var wG = function() {
  this.Bc = this.Fj = this.hk = this.nw = this.Xg = null;
};
d = wG.prototype;
d.nj = function() {
  return this.Xg;
};
d.zi = function(a) {
  this.Xg = a;
  return this;
};
d.$fa = function(a) {
  this.nw = a;
  return this;
};
d.kv = function() {
  return this.hk;
};
d.Vo = function(a) {
  this.hk = a;
  return this;
};
d.lj = function() {
  return this.Fj;
};
d.eh = function(a) {
  this.Fj = a;
  return this;
};
d.La = function() {
  return this.Bc;
};
d.Oa = function(a) {
  this.Bc = a;
  return this;
};
d.LY = function(a) {
  if (this.nw) {
    var b = a.JA() || new BC;
    b.wga(this.nw);
    a.AF(b);
  }
  this.dI(a);
};
d.dI = function(a) {
  this.Xg && a.zi(this.Xg);
  this.hk && a.Vo(this.hk);
  this.Fj && a.eh(this.Fj);
  this.Bc && a.Oa(this.Bc);
};
d.toString = function() {
  return "{ ParticipantLogId: " + (this.Xg || "") + ", MucJid: " + (this.nw || "") + ", SyntheticId: " + (this.hk || "") + ", MeetingCode: " + (this.Fj || "") + ", MeetingSpaceId: " + (this.Bc || "") + " }";
};
var xG = function(a) {
  if (n(a)) {
    var b = tC(a);
    w(b);
    var c = new wx;
    c.Oa(b);
    c.bk(a);
    return c;
  }
  return eb(a, wx);
};
var yG = function(a) {
  AB.call(this, a);
  this.Bc = null;
};
v(yG, AB);
var zG = /^(spaces\/[a-zA-Z0-9_-]+)\//, AG = function(a) {
  return (a = zG.exec(a)) ? a[1] : null;
};
yG.prototype.La = function() {
  return AG(this.Ad()) || this.Bc;
};
yG.prototype.Oa = function(a) {
  w(!AG(this.Ad()));
  this.Bc = a;
};
var BG = function(a, b, c, e, f) {
  e = void 0 === e ? null : e;
  f = void 0 === f ? null : f;
  var h = c instanceof jB;
  bq.call(this, a, b, h ? null : c);
  this.Gia = h ? c : null;
  this.R8 = f;
  this.mq = e;
};
la(BG, bq);
BG.prototype.getMessage = function() {
  return this.R8;
};
var CG = function(a, b, c, e, f, h) {
  vC.call(this, a, b, c, e, f);
  this.We = h || new wC;
};
v(CG, vC);
d = CG.prototype;
d.T_ = function() {
  return new vC(this.Nu(), this.Lp, this.Mp, this.dj(), this.fg);
};
d.ko = function(a, b, c, e, f) {
  f || this.FO(b);
  return CG.X.ko.call(this, a, b, c, e).then(this.fE, null, this);
};
d.FO = function(a) {
  if (a && this.We.yC() && va(a.m) && va(a.u)) {
    var b = eb(a.m() || new X, X);
    b.JF(this.We.yg);
    a.u(b);
  }
};
d.fE = function(a) {
  va(a.getResponseHeader) && 1 == w(a.getResponseHeader()).Sa() && this.EG(a);
  return a;
};
d.EG = function(a) {
  (a = this.r1(a)) && this.We.xja(a);
};
d.r1 = function(a) {
  return (a = va(a.m) && a.m() || null) && a.Hq();
};
d.Hq = function() {
  return this.We.yg;
};
d.XI = function() {
  this.We.WI();
};
d.sendBeacon = function(a, b) {
  a = Zc(this.fg, "/" + this.Lp + "/" + this.Mp + "/" + a);
  this.dj() && (a = Wc(a, "key", this.dj()));
  this.FO(b);
  Cx(a, b.Ua(), "application/json+protobuf");
};
Nf("goog.debug.ErrorReporter");
var EG = function(a) {
  O(this, a, 0, -1, DG, null);
};
v(EG, N);
var DG = [1];
EG.prototype.g = function(a) {
  return FG(a, this);
};
var FG = function(a, b) {
  var c, e = {Twa:P(b.RM(), GG, a), reason:Q(b, 15), bza:Q(b, 16), networkType:Q(b, 17), fia:(c = b.Zq()) && hD(a, c)};
  a && (e.l = b);
  return e;
};
EG.prototype.j = function() {
  var a = new W;
  HG(this, a);
  return a.h();
};
var HG = function(a, b) {
  var c;
  c = a.RM();
  0 < c.length && b.xp(1, c, IG);
  c = Q(a, 15);
  null != c && b.A(15, c);
  c = Q(a, 16);
  null != c && b.s(16, c);
  c = Q(a, 17);
  null != c && b.s(17, c);
  c = a.Zq();
  null != c && b.b(18, c, iD);
};
EG.prototype.RM = function() {
  return U(this, JG, 1);
};
EG.prototype.Zq = function() {
  return T(this, jD, 18);
};
var JG = function(a) {
  O(this, a, 0, -1, KG, null);
};
v(JG, N);
var KG = [8, 9, 10, 11, 12, 13];
JG.prototype.g = function(a) {
  return GG(a, this);
};
var GG = function(a, b) {
  var c = {rva:Q(b, 1), hta:Q(b, 2), gya:Q(b, 3), Xza:Q(b, 4), hwa:Q(b, 5), hya:Q(b, 6), fya:Q(b, 7), Vza:P(b.KN(), LG, a), wua:P(b.dM(), LG, a), xua:P(b.eM(), LG, a), FAa:P(b.UN(), LG, a), mAa:P(b.QN(), LG, a), Iza:P(b.DN(), LG, a)};
  a && (c.l = b);
  return c;
};
JG.prototype.j = function() {
  var a = new W;
  IG(this, a);
  return a.h();
};
var IG = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(2, c);
  c = Q(a, 2);
  null != c && b.f(3, c);
  c = Q(a, 3);
  null != c && b.f(4, c);
  c = Q(a, 4);
  null != c && b.f(5, c);
  c = Q(a, 5);
  null != c && b.f(6, c);
  c = Q(a, 6);
  null != c && b.A(7, c);
  c = Q(a, 7);
  null != c && b.A(8, c);
  c = a.KN();
  0 < c.length && b.B(9, c, MG);
  c = a.dM();
  0 < c.length && b.B(10, c, MG);
  c = a.eM();
  0 < c.length && b.B(11, c, MG);
  c = a.UN();
  0 < c.length && b.B(12, c, MG);
  c = a.QN();
  0 < c.length && b.B(13, c, MG);
  c = a.DN();
  0 < c.length && b.B(14, c, MG);
};
d = JG.prototype;
d.KN = function() {
  return U(this, NG, 8);
};
d.dM = function() {
  return U(this, NG, 9);
};
d.eM = function() {
  return U(this, NG, 10);
};
d.UN = function() {
  return U(this, NG, 11);
};
d.QN = function() {
  return U(this, NG, 12);
};
d.DN = function() {
  return U(this, NG, 13);
};
var NG = function(a) {
  O(this, a, 0, -1, null, null);
};
v(NG, N);
NG.prototype.g = function(a) {
  return LG(a, this);
};
var LG = function(a, b) {
  var c = {sS:Q(b, 1), error:Q(b, 2)};
  a && (c.l = b);
  return c;
};
NG.prototype.j = function() {
  var a = new W;
  MG(this, a);
  return a.h();
};
var MG = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.s(1, c);
  c = Q(a, 2);
  null != c && b.s(2, c);
};
NG.prototype.Es = function(a) {
  S(this, 1, a);
};
NG.prototype.getError = function() {
  return Q(this, 2);
};
var OG = function(a) {
  O(this, a, 0, -1, null, null);
};
v(OG, N);
OG.prototype.g = function(a) {
  return PG(a, this);
};
var PG = function(a, b) {
  var c, e = {Ob:(c = b.N()) && Pz(a, c), invitation:(c = b.Pf()) && AE(a, c), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
OG.prototype.j = function() {
  var a = new W;
  QG(this, a);
  return a.h();
};
var QG = function(a, b) {
  var c;
  c = a.N();
  null != c && b.b(1, c, Qz);
  c = a.Pf();
  null != c && b.b(2, c, BE);
  c = a.m();
  null != c && b.b(3, c, Z);
};
d = OG.prototype;
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.Pf = function() {
  return T(this, zE, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var RG = function(a) {
  O(this, a, "chpara", -1, null, null);
};
v(RG, N);
RG.prototype.g = function(a) {
  return SG(a, this);
};
var SG = function(a, b) {
  var c, e = {hb:(c = b.getResponseHeader()) && Sz(a, c), invitation:(c = b.Pf()) && AE(a, c), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
RG.prototype.j = function() {
  var a = new W;
  TG(this, a);
  return a.h();
};
var TG = function(a, b) {
  var c;
  c = a.getResponseHeader();
  null != c && b.b(1, c, Tz);
  c = a.Pf();
  null != c && b.b(2, c, BE);
  c = a.m();
  null != c && b.b(3, c, Z);
};
es("chpara", RG);
d = RG.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.Pf = function() {
  return T(this, zE, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var UG = function(a) {
  O(this, a, 0, -1, null, null);
};
v(UG, N);
UG.prototype.g = function(a) {
  return VG(a, this);
};
var VG = function(a, b) {
  var c, e = {Ob:(c = b.N()) && Pz(a, c), invitation:(c = b.Pf()) && SD(a, c), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
UG.prototype.j = function() {
  var a = new W;
  WG(this, a);
  return a.h();
};
var WG = function(a, b) {
  var c;
  c = a.N();
  null != c && b.b(1, c, Qz);
  c = a.Pf();
  null != c && b.b(2, c, TD);
  c = a.m();
  null != c && b.b(3, c, Z);
};
d = UG.prototype;
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.Pf = function() {
  return T(this, RD, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var XG = function(a) {
  O(this, a, "chiarp", -1, null, null);
};
v(XG, N);
XG.prototype.g = function(a) {
  return YG(a, this);
};
var YG = function(a, b) {
  var c, e = {hb:(c = b.getResponseHeader()) && Sz(a, c), invitation:(c = b.Pf()) && SD(a, c), errorCode:Q(b, 3), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
XG.prototype.j = function() {
  var a = new W;
  ZG(this, a);
  return a.h();
};
var ZG = function(a, b) {
  var c;
  c = a.getResponseHeader();
  null != c && b.b(1, c, Tz);
  c = a.Pf();
  null != c && b.b(2, c, TD);
  c = Q(a, 3);
  null != c && b.A(3, c);
  c = a.m();
  null != c && b.b(4, c, Z);
};
es("chiarp", XG);
d = XG.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.Pf = function() {
  return T(this, RD, 2);
};
d.YA = function() {
  return Q(this, 3);
};
d.m = function() {
  return T(this, X, 4);
};
d.u = function(a) {
  V(this, 4, a);
};
d.R = function() {
  this.u(void 0);
};
var aH = function(a) {
  O(this, a, 0, -1, $G, null);
};
v(aH, N);
var $G = [3, 4, 5, 6];
aH.prototype.g = function(a) {
  return bH(a, this);
};
var bH = function(a, b) {
  var c, e = {mediaType:R(b, 1, 4), transport:(c = b.lc()) && XA(a, c), sra:P(b.PA(), Tu, a), Ora:P(b.TA(), Zu, a), aza:P(b.WB(), ev, a), csa:P(b.UA(), YE, a), Rva:(c = b.yM()) && Pu(a, c), hza:Q(b, 8)};
  a && (e.l = b);
  return e;
};
aH.prototype.j = function() {
  var a = new W;
  cH(this, a);
  return a.h();
};
var cH = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.A(1, c);
  c = a.lc();
  null != c && b.b(2, c, ZA);
  c = a.PA();
  0 < c.length && b.B(3, c, Vu);
  c = a.TA();
  0 < c.length && b.B(4, c, $u);
  c = a.WB();
  0 < c.length && b.B(5, c, fv);
  c = a.UA();
  0 < c.length && b.B(6, c, ZE);
  c = a.yM();
  null != c && b.b(7, c, Qu);
  c = Q(a, 8);
  null != c && b.f(8, c);
};
d = aH.prototype;
d.$ = function() {
  return R(this, 1, 4);
};
d.uc = function(a) {
  S(this, 1, a);
};
d.vh = function() {
  S(this, 1, void 0);
};
d.lc = function() {
  return T(this, WA, 2);
};
d.$F = function(a) {
  V(this, 2, a);
};
d.PA = function() {
  return U(this, Su, 3);
};
d.Dea = function(a) {
  Vr(this, 3, a);
};
d.TA = function() {
  return U(this, Yu, 4);
};
d.dT = function(a) {
  Vr(this, 4, a);
};
d.WB = function() {
  return U(this, dv, 5);
};
d.$ga = function(a) {
  Vr(this, 5, a);
};
d.UA = function() {
  return U(this, XE, 6);
};
d.Tea = function(a) {
  Vr(this, 6, a);
};
d.yM = function() {
  return T(this, Ou, 7);
};
d.GT = function(a) {
  V(this, 7, a);
};
d.N4 = function() {
  return Q(this, 8);
};
d.dha = function(a) {
  S(this, 8, a);
};
var eH = function(a) {
  O(this, a, 0, -1, dH, null);
};
v(eH, N);
var dH = [4];
eH.prototype.g = function(a) {
  return fH(a, this);
};
var fH = function(a, b) {
  var c, e = {Ob:(c = b.N()) && Pz(a, c), stream:(c = b.cb()) && DF(a, c), V:(c = b.m()) && Y(a, c), Rb:P(b.I(), DF, a)};
  a && (e.l = b);
  return e;
};
eH.prototype.j = function() {
  var a = new W;
  gH(this, a);
  return a.h();
};
var gH = function(a, b) {
  var c;
  c = a.N();
  null != c && b.b(1, c, Qz);
  c = a.cb();
  null != c && b.b(2, c, GF);
  c = a.m();
  null != c && b.b(3, c, Z);
  c = a.I();
  0 < c.length && b.B(4, c, GF);
};
d = eH.prototype;
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.cb = function() {
  return T(this, CF, 2);
};
d.nm = function(a) {
  V(this, 2, a);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, CF, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var iH = function(a) {
  O(this, a, "chstarp", -1, hH, null);
};
v(iH, N);
var hH = [4];
iH.prototype.g = function(a) {
  return jH(a, this);
};
var jH = function(a, b) {
  var c, e = {hb:(c = b.getResponseHeader()) && Sz(a, c), stream:(c = b.cb()) && DF(a, c), V:(c = b.m()) && Y(a, c), Rb:P(b.I(), DF, a)};
  a && (e.l = b);
  return e;
};
iH.prototype.j = function() {
  var a = new W;
  kH(this, a);
  return a.h();
};
var kH = function(a, b) {
  var c;
  c = a.getResponseHeader();
  null != c && b.b(1, c, Tz);
  c = a.cb();
  null != c && b.b(2, c, GF);
  c = a.m();
  null != c && b.b(3, c, Z);
  c = a.I();
  0 < c.length && b.B(4, c, GF);
};
es("chstarp", iH);
d = iH.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.cb = function() {
  return T(this, CF, 2);
};
d.nm = function(a) {
  V(this, 2, a);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, CF, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var mH = function(a) {
  O(this, a, 0, -1, lH, null);
};
v(mH, N);
var lH = [4];
d = mH.prototype;
d.g = function(a) {
  var b, c = {Ob:(b = this.N()) && Pz(a, b), stream:(b = this.cb()) && DF(a, b), V:(b = this.m()) && Y(a, b), Rb:P(this.I(), DF, a)};
  a && (c.l = this);
  return c;
};
d.j = function() {
  var a = new W, b;
  b = this.N();
  null != b && a.b(1, b, Qz);
  b = this.cb();
  null != b && a.b(2, b, GF);
  b = this.m();
  null != b && a.b(3, b, Z);
  b = this.I();
  0 < b.length && a.B(4, b, GF);
  return a.h();
};
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.cb = function() {
  return T(this, CF, 2);
};
d.nm = function(a) {
  V(this, 2, a);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, CF, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var oH = function(a) {
  O(this, a, "chstmrp", -1, nH, null);
};
v(oH, N);
var nH = [4];
oH.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), stream:(b = this.cb()) && DF(a, b), V:(b = this.m()) && Y(a, b), Rb:P(this.I(), DF, a)};
  a && (c.l = this);
  return c;
};
oH.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.cb();
  null != b && a.b(2, b, GF);
  b = this.m();
  null != b && a.b(3, b, Z);
  b = this.I();
  0 < b.length && a.B(4, b, GF);
  return a.h();
};
es("chstmrp", oH);
d = oH.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.cb = function() {
  return T(this, CF, 2);
};
d.nm = function(a) {
  V(this, 2, a);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, CF, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var pH = function(a) {
  O(this, a, "chstqrp", -1, null, null);
};
v(pH, N);
pH.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), stream:(b = this.cb()) && DF(a, b)};
  a && (c.l = this);
  return c;
};
pH.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.cb();
  null != b && a.b(2, b, GF);
  return a.h();
};
es("chstqrp", pH);
pH.prototype.getResponseHeader = function() {
  return T(this, Rz, 1);
};
pH.prototype.cb = function() {
  return T(this, CF, 2);
};
pH.prototype.nm = function(a) {
  V(this, 2, a);
};
var rH = function(a) {
  O(this, a, "chstsrp", -1, qH, null);
};
v(rH, N);
var qH = [2];
rH.prototype.g = function(a) {
  return sH(a, this);
};
var sH = function(a, b) {
  var c, e = {hb:(c = b.getResponseHeader()) && Sz(a, c), gda:P(b.fl(), DF, a), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
rH.prototype.j = function() {
  var a = new W;
  tH(this, a);
  return a.h();
};
var tH = function(a, b) {
  var c;
  c = a.getResponseHeader();
  null != c && b.b(1, c, Tz);
  c = a.fl();
  0 < c.length && b.B(2, c, GF);
  c = a.m();
  null != c && b.b(3, c, Z);
};
es("chstsrp", rH);
d = rH.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.fl = function() {
  return U(this, CF, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var vH = function(a) {
  O(this, a, 0, -1, uH, null);
};
v(vH, N);
var uH = [2, 3];
vH.prototype.g = function(a) {
  return wH(a, this);
};
var wH = function(a, b) {
  var c, e = {V:(c = b.m()) && Y(a, c), lf:P(b.ua(), DF, a), Bh:P(b.ab(), nv, a), ah:(c = b.bb()) && nv(a, c)};
  a && (e.l = b);
  return e;
};
vH.prototype.j = function() {
  var a = new W;
  xH(this, a);
  return a.h();
};
var xH = function(a, b) {
  var c;
  c = a.m();
  null != c && b.b(1, c, Z);
  c = a.ua();
  0 < c.length && b.B(2, c, GF);
  c = a.ab();
  0 < c.length && b.B(3, c, ov);
  c = a.bb();
  null != c && b.b(4, c, ov);
};
d = vH.prototype;
d.m = function() {
  return T(this, X, 1);
};
d.u = function(a) {
  V(this, 1, a);
};
d.R = function() {
  this.u(void 0);
};
d.ua = function() {
  return U(this, CF, 2);
};
d.ab = function() {
  return U(this, mv, 3);
};
d.bb = function() {
  return T(this, mv, 4);
};
var zH = function(a) {
  O(this, a, 0, -1, yH, null);
};
v(zH, N);
var yH = [11];
zH.prototype.g = function(a) {
  return AH(a, this);
};
var AH = function(a, b) {
  var c, e = {clientId:Q(b, 1), ka:Q(b, 2), Lj:Q(b, 14), ova:Q(b, 21), Da:Q(b, 3), Fqa:(c = b.JA()) && CC(a, c), Iqa:(c = b.aL()) && Sx(a, c), zra:(c = b.nL()) && FG(a, c), vta:(c = b.ML()) && Yx(a, c), iAa:(c = b.PN()) && vy(a, c), Hqa:(c = b.$K()) && nD(a, c), Pxa:(c = b.aN()) && jy(a, c), Wta:(c = b.QL()) && dy(a, c), rqa:Q(b, 11), iba:Q(b, 12), wva:Q(b, 9), vva:Q(b, 13), WU:Q(b, 16), pda:Q(b, 18), lra:Q(b, 19), mra:Q(b, 20), sD:Q(b, 22), Sg:Q(b, 23)};
  a && (e.l = b);
  return e;
};
zH.prototype.j = function() {
  var a = new W;
  BH(this, a);
  return a.h();
};
var BH = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = Q(a, 2);
  null != c && b.f(2, c);
  c = Q(a, 14);
  null != c && b.f(14, c);
  c = Q(a, 21);
  null != c && b.f(21, c);
  c = Q(a, 3);
  null != c && b.f(3, c);
  c = a.JA();
  null != c && b.b(4, c, HC);
  c = a.aL();
  null != c && b.b(5, c, Ux);
  c = a.nL();
  null != c && b.b(6, c, HG);
  c = a.ML();
  null != c && b.b(7, c, $x);
  c = a.PN();
  null != c && b.b(8, c, yy);
  c = a.$K();
  null != c && b.b(10, c, oD);
  c = a.aN();
  null != c && b.b(17, c, ky);
  c = a.QL();
  null != c && b.b(15, c, ey);
  c = a.r2();
  0 < c.length && b.$c(11, c);
  c = Q(a, 12);
  null != c && b.Z(12, c);
  c = Q(a, 9);
  null != c && b.A(9, c);
  c = Q(a, 13);
  null != c && b.f(13, c);
  c = Q(a, 16);
  null != c && b.f(16, c);
  c = Q(a, 18);
  null != c && b.Z(18, c);
  c = Q(a, 19);
  null != c && b.ha(19, c);
  c = Q(a, 20);
  null != c && b.ha(20, c);
  c = Q(a, 22);
  null != c && b.f(22, c);
  c = Q(a, 23);
  null != c && b.f(23, c);
};
d = zH.prototype;
d.dd = function() {
  return Q(this, 1);
};
d.hg = function(a) {
  S(this, 1, a);
};
d.da = function() {
  return Q(this, 2);
};
d.Y = function(a) {
  S(this, 2, a);
};
d.nj = function() {
  return Q(this, 14);
};
d.zi = function(a) {
  S(this, 14, a);
};
d.ya = function() {
  return Q(this, 21);
};
d.D = function() {
  return Q(this, 3);
};
d.qb = function(a) {
  S(this, 3, a);
};
d.JA = function() {
  return T(this, BC, 4);
};
d.AF = function(a) {
  V(this, 4, a);
};
d.aL = function() {
  return T(this, Rx, 5);
};
d.nL = function() {
  return T(this, EG, 6);
};
d.ML = function() {
  return T(this, Xx, 7);
};
d.PN = function() {
  return T(this, uy, 8);
};
d.$K = function() {
  return T(this, mD, 10);
};
d.aN = function() {
  return T(this, iy, 17);
};
d.QL = function() {
  return T(this, cy, 15);
};
d.ufa = function(a) {
  V(this, 15, a);
};
d.r2 = function() {
  return Q(this, 11);
};
d.zF = function(a) {
  S(this, 11, a || []);
};
d.cl = function() {
  return Q(this, 12);
};
d.As = function(a) {
  S(this, 12, a);
};
d.Pfa = function(a) {
  S(this, 9, a);
};
d.Ofa = function(a) {
  S(this, 13, a);
};
d.kv = function() {
  return Q(this, 16);
};
d.Vo = function(a) {
  S(this, 16, a);
};
d.Pn = function() {
  return Q(this, 18);
};
d.xx = function(a) {
  S(this, 18, a);
};
d.lj = function() {
  return Q(this, 22);
};
d.eh = function(a) {
  S(this, 22, a);
};
d.La = function() {
  return Q(this, 23);
};
d.Oa = function(a) {
  S(this, 23, a);
};
var CH = function(a) {
  O(this, a, 0, -1, null, null);
};
v(CH, N);
CH.prototype.g = function(a) {
  return DH(a, this);
};
var DH = function(a, b) {
  var c, e = {rsa:(c = b.WA()) && rB(a, c), Dza:(c = b.dC()) && HB(a, c), zya:(c = b.LB()) && dG(a, c), qwa:(c = b.yB()) && $F(a, c)};
  a && (e.l = b);
  return e;
};
CH.prototype.j = function() {
  var a = new W;
  EH(this, a);
  return a.h();
};
var EH = function(a, b) {
  var c;
  c = a.WA();
  null != c && b.b(1, c, sB);
  c = a.dC();
  null != c && b.b(2, c, IB);
  c = a.LB();
  null != c && b.b(3, c, eG);
  c = a.yB();
  null != c && b.b(4, c, aG);
};
CH.prototype.WA = function() {
  return T(this, qB, 1);
};
CH.prototype.dC = function() {
  return T(this, GB, 2);
};
CH.prototype.LB = function() {
  return T(this, cG, 3);
};
CH.prototype.yB = function() {
  return T(this, ZF, 4);
};
var FH = function() {
};
FH.prototype.a = Nf("fava.debug.DebugService");
FH.prototype.K7 = null;
var GH = new FH;
var HH = function(a) {
  F.call(this);
  this.a = Nf("realtime.collections.oneplatform.OperationExecutor");
  this.fQ = a.ej(Vq);
};
v(HH, Ls);
HH.prototype.execute = function(a, b) {
  a = eb(a, hG);
  if (a.rv()) {
    throw new jG(a);
  }
  this.rA(a, b);
};
HH.prototype.rA = function(a, b) {
  J(this.a, "Making request for operation: " + a);
  var c = l(b) ? b : a.tj();
  this.fQ.then(function(b) {
    b.Yv(a.Xk(), a.Lo, a.zz, a.cF, a.eA, c, a.kj()).then(t(this.ww, this, a)).zb(t(this.Sk, this, a));
  }, t(this.Sk, this, a), this);
};
HH.prototype.ww = function(a, b) {
  b = a.RB(b);
  a.Ir();
  a.Qb.resolve(b);
};
HH.prototype.Sk = function(a, b) {
  a.Ir();
  Pf(this.a, "OnePlatform operation failed for " + a + ": " + b);
  a.Qb.reject(b);
};
var IH = function() {
  return new Oq(CF, [CF.prototype.da, CF.prototype.Uc, CF.prototype.K], [CF.prototype.Y, CF.prototype.zf, CF.prototype.ib], [CF.prototype.yc], [CF.prototype.om], mv, [mv.prototype.da, mv.prototype.Uc, mv.prototype.K], [mv.prototype.Y, mv.prototype.zf, mv.prototype.ib], [mv.prototype.yc], [mv.prototype.om]);
};
var JH = function(a) {
  F.call(this);
  this.ku = a;
  this.RG = this.ku.ZK();
  this.Yz = 0;
  this.my = !1;
};
v(JH, F);
JH.prototype.B5 = function(a) {
  a = a.Qh();
  if (null != a) {
    for (var b = 0;b < a.length;++b) {
      if (0 == a[b].Uc() && 2 == a[b].Mq() && (0 == a[b].Ng() || 0 == a[b].Hg())) {
        this.Sca();
        return;
      }
    }
    for (b = 0;b < a.length;++b) {
      switch(a[b].Uc()) {
        case 2:
          this.e_(a[b]);
      }
    }
  }
};
JH.prototype.Sca = function() {
  this.RG = this.ku.ZK();
};
JH.prototype.e_ = function(a) {
  w(2 == a.Uc());
  0 < this.RG ? --this.RG : a.k2() < this.ku.F3() ? this.my || (++this.Yz, this.Yz >= this.ku.E3() && (this.dispatchEvent(new KH(0)), this.my = !0)) : (this.my && (this.dispatchEvent(new KH(1)), this.my = !1), this.Yz = 0);
};
var KH = function(a) {
  E.call(this, "Z");
  this.id = a;
};
v(KH, E);
var LH = function(a) {
  if (n(a)) {
    var b = AG(a);
    w(b);
    var c = new xx;
    c.Oa(b);
    c.Ke(a);
    return c;
  }
  return eb(a, xx);
};
var MH = function(a) {
  this.cg = a;
};
v(MH, gq);
d = MH.prototype;
d.jv = Kd;
d.Xe = function(a) {
  var b = a[0].oz, c = {};
  b && (c["X-Goog-Meeting-Botguardid"] = b);
  b = new lB;
  b.Oa(w(a[0].La()));
  b.NF(a[0]);
  return new hG("google.rtc.meetings.v1.MeetingDeviceService", "CreateMeetingDevice", b, function(a) {
    return NH([mw(a)]);
  }, c);
};
d.Ye = function(a) {
  var b = a[0].oz, c = {};
  b && (c["X-Goog-Meeting-Botguardid"] = b);
  b = new JB;
  b.NF(a[0]);
  return new hG("google.rtc.meetings.v1.MeetingDeviceService", "UpdateMeetingDevice", b, function(a) {
    return NH([mw(a)]);
  }, c);
};
d.ue = function() {
  throw Error("Invalid Operation: Meeting Device Remove");
};
d.Ze = function(a) {
  var b = new aw;
  b.iT(w(a.df()));
  return new hG("google.rtc.meetings.v1.MeetingDeviceService", "GetMeetingDevice", b, mw);
};
d.Gf = function(a) {
  var b = new cw;
  b.Oa(w(a.La()));
  return new hG("google.rtc.meetings.v1.MeetingDeviceService", "ListMeetingDevices", b, function(a) {
    var b = NH;
    a = new Ks(a);
    for (var c = new oB;a.Zc() && !a.jd();) {
      switch(a.Wb) {
        case 1:
          var h = new fw;
          a.Fe(h, lw);
          c.nY(h);
          break;
        default:
          a.wc();
      }
    }
    return b(c.uB());
  });
};
var NH = function(a) {
  return y(a, function(a) {
    return new rC(JSON.parse(a.Ua()));
  });
};
var OH = function(a) {
  this.cg = a;
};
v(OH, gq);
d = OH.prototype;
d.jv = Kd;
d.Xe = function(a) {
  var b = new VF;
  b.Oa(w(a[0].La()));
  b.vx(a[0]);
  a = new hG("google.rtc.meetings.v1.MeetingRecordingService", "CreateMeetingRecording", b, function(a) {
    return PH([DB(a)]);
  });
  a.pm(10000);
  return a;
};
d.Ye = function(a) {
  var b = new fG;
  b.vx(a[0]);
  return new hG("google.rtc.meetings.v1.MeetingRecordingService", "UpdateMeetingRecording", b, function(a) {
    return PH([DB(a)]);
  });
};
d.ue = function(a) {
  var b = new $v;
  b.Ke(w(a[0].Ad()));
  return new hG("google.rtc.meetings.v1.MeetingRecordingService", "DeleteMeetingRecording", b, function() {
    return [];
  });
};
d.Ze = function() {
  throw Error("Invalid Operation: Meeting Recording Query");
};
d.Gf = function(a) {
  var b = new dw;
  b.Oa(w(a.La()));
  return new hG("google.rtc.meetings.v1.MeetingRecordingService", "ListMeetingRecordings", b, function(a) {
    var b = PH;
    a = new Ks(a);
    for (var c = new XF;a.Zc() && !a.jd();) {
      switch(a.Wb) {
        case 1:
          var h = new AB;
          a.Fe(h, CB);
          c.xY(h);
          break;
        default:
          a.wc();
      }
    }
    return b(c.KB());
  });
};
var PH = function(a) {
  return y(a, function(a) {
    return new yG(JSON.parse(a.Ua()));
  });
};
var QH = function(a) {
  this.cg = a;
};
v(QH, gq);
d = QH.prototype;
d.jv = Kd;
d.Xe = function(a) {
  var b = new mB;
  b.OF(a[0]);
  return new hG("google.rtc.meetings.v1.MeetingSpaceService", "CreateMeetingSpace", b, function(a) {
    return [Jw(a)];
  });
};
d.Ye = function(a) {
  var b = new KB;
  b.OF(a[0]);
  return new hG("google.rtc.meetings.v1.MeetingSpaceService", "UpdateMeetingSpace", b, function(a) {
    return [Jw(a)];
  });
};
d.ue = function() {
  throw Error("Invalid Operation: Meeting Space Remove");
};
d.Ze = function(a) {
  var b = new bw;
  b.Oa(w(a.La()));
  return new hG("google.rtc.meetings.v1.MeetingSpaceService", "GetMeetingSpace", b, function(a) {
    return [Jw(a)];
  });
};
d.Gf = function(a) {
  return this.Ze(a);
};
var RH = "https://clients2.google.com/cr/report", UH = function(a, b, c, e) {
  var f = new FormData;
  f.append("prod", pc ? "Google_Talk_Plugin_Mac" : qc ? "Google_Talk_Plugin" : "Google_Talk_Plugin_Linux");
  f.append("ver", "10.0.0.0-calls");
  f.append("email", b);
  f.append("type", "log");
  f.append("log", new Blob([a]), e);
  if (a = c) {
    try {
      a = !!navigator.sendBeacon && navigator.sendBeacon(RH, f);
    } catch (k) {
      SH(k, "Failed to upload callgrok log with sendBeacon"), a = !1;
    }
  }
  if (a) {
    return os(new TH(200, ""));
  }
  try {
    var h = new js;
    Xf(RH, function(a) {
      a = a.target;
      a.Ed() ? h.callback(new TH(a.Sa(), a.ef())) : (a = Error(a.Wj + " " + a.Sa() + " " + a.ef()), h.cd(a), SH(a, "Failed to upload callgrok log with XhrIo"));
    }, "POST", f);
    return h;
  } catch (k) {
    return SH(k, "Failed to upload callgrok log with XhrIo"), ps(k);
  }
}, SH = function(a, b) {
  var c = GH.K7;
  c && c.mza(a, b);
}, TH = function(a, b) {
  this.hS = a;
  this.responseText = b;
};
var WH = function(a) {
  O(this, a, 0, -1, VH, null);
};
v(WH, N);
var VH = [3, 4, 5, 6];
WH.prototype.g = function(a) {
  return XH(a, this);
};
var XH = function(a, b) {
  var c = {sessionId:Q(b, 1), fra:P(b.gL(), bH, a), sza:P(b.XB(), bH, a), jya:P(b.HB(), zv, a), bua:Q(b, 6), type:Q(b, 7)};
  a && (c.l = b);
  return c;
};
WH.prototype.j = function() {
  var a = new W;
  YH(this, a);
  return a.h();
};
var YH = function(a, b) {
  var c;
  c = Q(a, 1);
  null != c && b.f(1, c);
  c = a.gL();
  0 < c.length && b.B(3, c, cH);
  c = a.XB();
  0 < c.length && b.B(4, c, cH);
  c = a.HB();
  0 < c.length && b.B(5, c, Av);
  c = a.p3();
  0 < c.length && b.$c(6, c);
  c = Q(a, 7);
  null != c && b.A(7, c);
};
d = WH.prototype;
d.K = function() {
  return Q(this, 1);
};
d.ib = function(a) {
  S(this, 1, a);
};
d.gL = function() {
  return U(this, aH, 3);
};
d.BF = function(a) {
  Vr(this, 3, a);
};
d.XB = function() {
  return U(this, aH, 4);
};
d.HB = function() {
  return U(this, yv, 5);
};
d.Lga = function(a) {
  Vr(this, 5, a);
};
d.p3 = function() {
  return Q(this, 6);
};
d.tT = function(a) {
  S(this, 6, a || []);
};
d.W = function() {
  return Q(this, 7);
};
d.gh = function(a) {
  S(this, 7, a);
};
var ZH = function(a) {
  O(this, a, 0, -1, null, null);
};
v(ZH, N);
d = ZH.prototype;
d.g = function(a) {
  var b, c = {Ob:(b = this.N()) && Pz(a, b), sessionId:Q(this, 2), tva:(b = this.uM()) && AH(a, b), V:(b = this.m()) && Y(a, b)};
  a && (c.l = this);
  return c;
};
d.j = function() {
  var a = new W, b;
  b = this.N();
  null != b && a.b(1, b, Qz);
  b = Q(this, 2);
  null != b && a.f(2, b);
  b = this.uM();
  null != b && a.b(3, b, BH);
  b = this.m();
  null != b && a.b(4, b, Z);
  return a.h();
};
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.K = function() {
  return Q(this, 2);
};
d.ib = function(a) {
  S(this, 2, a);
};
d.uM = function() {
  return T(this, zH, 3);
};
d.Nfa = function(a) {
  V(this, 3, a);
};
d.m = function() {
  return T(this, X, 4);
};
d.u = function(a) {
  V(this, 4, a);
};
d.R = function() {
  this.u(void 0);
};
var $H = function() {
  F.call(this);
  this.ka = this.uca = null;
};
v($H, F);
d = $H.prototype;
d.na = function() {
  return {hangoutId:this.ka, isInProgress:"INPROGRESS" == this.getState(), remoteJid:this.uca, sessionId:this.K(), state:this.getState()};
};
d.Db = pa;
d.update = function() {
  return !0;
};
d.Ym = pa;
d.jm = pa;
d.IH = pa;
d.Y = function(a) {
  this.ka = a;
};
var aI = function(a, b) {
  E.call(this, "aa");
  this.Wl = a;
  this.Xl = b;
};
v(aI, E);
var bI = function(a) {
  E.call(this, "ca");
  this.Sp = a;
};
v(bI, E);
var cI = function(a) {
  E.call(this, "ba");
  this.message = a;
};
v(cI, E);
var dI = function(a) {
  E.call(this, "ea");
  this.If = a;
};
v(dI, E);
var eI = function(a, b) {
  E.call(this, "da");
  this.d1 = a;
  this.Gb = b;
};
v(eI, E);
var fI = function(a, b, c) {
  E.call(this, "$");
  this.Da = a;
  this.label = b;
  this.payload = c;
};
v(fI, E);
var gI = function(a) {
  E.call(this, "ga");
  this.Gv = a;
};
v(gI, E);
var hI = function() {
  F.call(this);
};
v(hI, F);
hI.prototype.na = function() {
  return {id:this.K(), isInProgress:"INPROGRESS" == this.getState(), state:this.getState()};
};
hI.prototype.pause = pa;
hI.prototype.resume = pa;
hI.prototype.F9 = pa;
var iI = function(a, b, c) {
  E.call(this, "ja");
  this.tk = z(a);
  this.Mb = z(b);
  this.removed = z(c);
};
v(iI, E);
var jI = function(a) {
  E.call(this, "ka");
  this.XZ = z(a);
};
v(jI, E);
var kI = new Set([502, 504, 500, 503]), lI = {OG:function(a, b) {
  return ie(kI.has(b.oG) ? 2 : 0);
}};
var mI = function() {
};
mI.prototype.RQ = function(a, b, c) {
  try {
    var e = c.target, f = e.Sa(), h = e.QB(), k = new Uint8Array(eb(e.vN(), ArrayBuffer));
    Mb(h, function(a, b) {
      return "BASE64" == a.toUpperCase() && "X-GOOG-SAFETY-ENCODING" == b.toUpperCase();
    }) && (k = Wj(vi(k)));
    if (e.Ed()) {
      try {
        a.resolve(new xq(f, h, b ? b(k) : null));
      } catch (p) {
        a.resolve(new BG(10002, h, null, p, "Failed to decode response"));
      }
    } else {
      try {
        a.resolve(new BG(f, h, kB(k)));
      } catch (p) {
        a.resolve(new BG(f, h, null, p, "Failed to decode status"));
      }
    }
  } catch (p) {
    a.resolve(new BG(10005, {}, null, p, "Failure in XHR result processing"));
  }
};
var oI = function() {
  this.mD = !1;
  this.nG = null;
  this.DD = new Fs;
  this.di = {};
  this.lD = nI();
  this.lD.zb(pa);
  this.iR = Ky.ea();
  this.fq = null;
};
qa(oI);
d = oI.prototype;
d.ek = function(a) {
  w(null == this.di[a]);
  this.fq = a;
  this.di[a] = this.DD;
  this.DD = new Fs;
  this.di[a].open(this.lD, "hangouts-call-" + a + ".log");
  var b = new Date;
  this.ec(a, "### Start [" + b.toString() + "] ### " + a);
  this.ec(a, "Current time is " + b.toUTCString());
  this.ec(a, "Google Talk Plugin Version: 10.0.0.0");
  this.ec(a, "User agent: " + $b);
};
d.ec = function(a, b, c) {
  var e = u();
  null == this.nG && (this.nG = e);
  b = "[" + ((e - this.nG) / 1000).toFixed(3) + "s]" + (null != c ? c : 8) + " " + b + "\n";
  if (null != a) {
    a = this.di[a], null != a && a.write([b]);
  } else {
    for (a in this.di) {
      this.di[a].write([b]);
    }
    null != a || this.DD.write([b]);
  }
  this.mD && window.console.log(b);
};
d.gk = function(a) {
  w(null != this.di[a]);
  var b = new Date;
  this.ec(a, "### Stop [" + b.toString() + "] ### " + a);
  this.ec(a, "Current time is " + b.toUTCString());
  delete this.di[a];
};
d.Mja = function(a, b) {
  this.iR.add(b, a);
  return this.Nja(a, b);
};
d.Nja = function(a, b) {
  var c = "hangouts-call-" + a + ".log", e = this.di[a];
  if (null != e) {
    return UH(e.LK(), b, !0, c).lb(t(this.$Q, this, a, b)).rt(t(this.XD, this, a, b));
  }
  var e = new Fs, f = new js;
  e.open(this.lD, c, !0).then(function() {
    w(e).nc() ? (this.ec(this.fq, "JS log for " + a + " has no content", 9), f.callback(new TH(null, "No log content for session " + a))) : UH(e.LK(), b, !1).lb(t(this.$Q, this, a, b)).rt(t(this.XD, this, a, b)).LI(f);
  }, function(c) {
    this.XD(a, b, c);
    f.cd(c);
  }, this);
  return f;
};
var nI = function() {
  var a = g.requestFileSystem || g.webkitRequestFileSystem;
  if (!a) {
    return je("Filesystem API not accessible");
  }
  var b = G();
  a(window.TEMPORARY, 0, function(a) {
    a.root.getDirectory("log_v2", {create:!0}, t(b.resolve, b), t(b.reject, b));
  }, t(b.reject, b));
  return b.promise;
};
oI.prototype.$Q = function(a, b, c) {
  200 == c.hS ? (this.ec(this.fq, "JS log upload for " + a + " successful: " + c.responseText), this.iR.remove(b, a)) : this.ec(this.fq, "JS log upload for " + a + " failure " + c.hS + ": " + c.responseText, 10);
};
oI.prototype.XD = function(a, b, c) {
  this.ec(this.fq, "JS log upload for " + a + " failed: " + c, 10);
};
var qI = function(a) {
  O(this, a, 0, -1, pI, null);
};
v(qI, N);
var pI = [4];
qI.prototype.g = function(a) {
  return rI(a, this);
};
var rI = function(a, b) {
  var c, e = {Ob:(c = b.N()) && Pz(a, c), session:(c = b.Bd()) && XH(a, c), V:(c = b.m()) && Y(a, c), Rb:P(b.I(), XH, a)};
  a && (e.l = b);
  return e;
};
qI.prototype.j = function() {
  var a = new W;
  sI(this, a);
  return a.h();
};
var sI = function(a, b) {
  var c;
  c = a.N();
  null != c && b.b(1, c, Qz);
  c = a.Bd();
  null != c && b.b(2, c, YH);
  c = a.m();
  null != c && b.b(3, c, Z);
  c = a.I();
  0 < c.length && b.B(4, c, YH);
};
d = qI.prototype;
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.Bd = function() {
  return T(this, WH, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, WH, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var uI = function(a) {
  O(this, a, "chsearp", -1, tI, null);
};
v(uI, N);
var tI = [4];
uI.prototype.g = function(a) {
  return vI(a, this);
};
var vI = function(a, b) {
  var c, e = {hb:(c = b.getResponseHeader()) && Sz(a, c), session:(c = b.Bd()) && XH(a, c), V:(c = b.m()) && Y(a, c), Rb:P(b.I(), XH, a)};
  a && (e.l = b);
  return e;
};
uI.prototype.j = function() {
  var a = new W;
  wI(this, a);
  return a.h();
};
var wI = function(a, b) {
  var c;
  c = a.getResponseHeader();
  null != c && b.b(1, c, Tz);
  c = a.Bd();
  null != c && b.b(2, c, YH);
  c = a.m();
  null != c && b.b(3, c, Z);
  c = a.I();
  0 < c.length && b.B(4, c, YH);
};
es("chsearp", uI);
d = uI.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.Bd = function() {
  return T(this, WH, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, WH, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var yI = function(a) {
  O(this, a, 0, -1, xI, null);
};
v(yI, N);
var xI = [4];
d = yI.prototype;
d.g = function(a) {
  var b, c = {Ob:(b = this.N()) && Pz(a, b), session:(b = this.Bd()) && XH(a, b), V:(b = this.m()) && Y(a, b), Rb:P(this.I(), XH, a)};
  a && (c.l = this);
  return c;
};
d.j = function() {
  var a = new W, b;
  b = this.N();
  null != b && a.b(1, b, Qz);
  b = this.Bd();
  null != b && a.b(2, b, YH);
  b = this.m();
  null != b && a.b(3, b, Z);
  b = this.I();
  0 < b.length && a.B(4, b, YH);
  return a.h();
};
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.Bd = function() {
  return T(this, WH, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, WH, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var AI = function(a) {
  O(this, a, "chsemrp", -1, zI, null);
};
v(AI, N);
var zI = [4];
AI.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), session:(b = this.Bd()) && XH(a, b), V:(b = this.m()) && Y(a, b), Rb:P(this.I(), XH, a)};
  a && (c.l = this);
  return c;
};
AI.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.Bd();
  null != b && a.b(2, b, YH);
  b = this.m();
  null != b && a.b(3, b, Z);
  b = this.I();
  0 < b.length && a.B(4, b, YH);
  return a.h();
};
es("chsemrp", AI);
d = AI.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.Bd = function() {
  return T(this, WH, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
d.I = function() {
  return U(this, WH, 4);
};
d.Fa = function(a) {
  Vr(this, 4, a);
};
var BI = function(a) {
  O(this, a, "chseqrp", -1, null, null);
};
v(BI, N);
BI.prototype.g = function(a) {
  return CI(a, this);
};
var CI = function(a, b) {
  var c, e = {hb:(c = b.getResponseHeader()) && Sz(a, c), session:(c = b.Bd()) && XH(a, c), V:(c = b.m()) && Y(a, c)};
  a && (e.l = b);
  return e;
};
BI.prototype.j = function() {
  var a = new W;
  DI(this, a);
  return a.h();
};
var DI = function(a, b) {
  var c;
  c = a.getResponseHeader();
  null != c && b.b(1, c, Tz);
  c = a.Bd();
  null != c && b.b(2, c, YH);
  c = a.m();
  null != c && b.b(3, c, Z);
};
es("chseqrp", BI);
d = BI.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.Bd = function() {
  return T(this, WH, 2);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var FI = function(a) {
  O(this, a, 0, -1, EI, null);
};
v(FI, N);
var EI = [2, 3];
FI.prototype.g = function(a) {
  return GI(a, this);
};
var GI = function(a, b) {
  var c, e = {V:(c = b.m()) && Y(a, c), lf:P(b.ua(), XH, a), Bh:P(b.ab(), hv, a), ah:(c = b.bb()) && hv(a, c)};
  a && (e.l = b);
  return e;
};
FI.prototype.j = function() {
  var a = new W;
  HI(this, a);
  return a.h();
};
var HI = function(a, b) {
  var c;
  c = a.m();
  null != c && b.b(1, c, Z);
  c = a.ua();
  0 < c.length && b.B(2, c, YH);
  c = a.ab();
  0 < c.length && b.B(3, c, iv);
  c = a.bb();
  null != c && b.b(4, c, iv);
};
d = FI.prototype;
d.m = function() {
  return T(this, X, 1);
};
d.u = function(a) {
  V(this, 1, a);
};
d.R = function() {
  this.u(void 0);
};
d.ua = function() {
  return U(this, WH, 2);
};
d.ab = function() {
  return U(this, gv, 3);
};
d.bb = function() {
  return T(this, gv, 4);
};
var II = function() {
  this.a = Nf("realtime.media.apiary.Parser");
};
d = II.prototype;
d.vZ = function(a, b, c, e) {
  var f = new CA;
  f.Y(a);
  f.qb(b.D());
  f.fh(b.getId());
  f.uc(this.Oi(b.W()));
  a = "za" == b.getState();
  f.sx(new NA);
  f.ye().ys(a);
  "a" == b.W() ? (null != c && f.ye().No(c), null != e && (f.aga(new OA), f.bl().No(e)), null != b.Fo && (c = new QA, c.ZT(b.Fo), c.No(b.D()), f.Dga(c))) : "v" == b.W() && (f.Nha(new PA), f.il().yea(this.cZ(b.$b)), b = b.pC(), null != b && f.il().Afa(y(b, this.BZ, this)));
  return f;
};
d.fR = function(a) {
  var b = a.D(), c = a.Ga(), e = this.Pl(a.$()), f = "wa", h;
  null != a.il() && (f = this.naa(a.il().x2()), h = this.Wg(a.il().lB(), this.Xaa, this) || void 0);
  var k;
  if (null != a.ev()) {
    var p = a.ev().$M();
    k = q(p) ? p : void 0;
  }
  var r = a.ye() && a.ye().Mn() ? "za" : "ya", p = null;
  null != b && null != c && null != e && (p = new Ns(b, c, e, null != f ? f : void 0, r, k, h));
  b = null;
  null != a.ye() && (b = a.ye().Bn());
  c = null;
  null != a.bl() && (c = a.bl().Bn());
  return {source:p, Bwa:b, Awa:c};
};
d.BZ = function(a) {
  var b = new UA;
  b.Pha(a.left);
  b.Qha(a.top);
  b.qm(a.width);
  b.lm(a.height);
  return b;
};
d.Xaa = function(a) {
  var b = a.s5(), c = a.t5(), e = a.Ng();
  a = a.Hg();
  return null != b && null != c && null != e && null != a ? new Fr(b, c, e, a) : null;
};
d.cZ = function(a) {
  switch(a) {
    case "ua":
      return 1;
    case "va":
      return 2;
  }
  I(this.a, "Unknown media content: " + a);
};
d.naa = function(a) {
  switch(a) {
    case 1:
      return "ua";
    case 2:
      return "va";
  }
  I(this.a, "Unknown capture type: " + a);
  return "wa";
};
d.tZ = function(a, b, c, e, f) {
  e = new WH;
  null != a.K() && e.ib(a.K());
  e.gh(f ? 2 : 1);
  f = [];
  null != b && (e.tT([b]), null != c && (f = c));
  b = a.wa;
  w(b, "Empty audio description for bundled calls");
  f = f.concat(b.Of());
  b = a.sa;
  null != b && (f = f.concat(b.Of()));
  b = [];
  c = [a.wa, a.sa, a.getData()];
  c = this.EZ(c);
  f = this.kZ(c, f, a.lc(), a.hj());
  f.uc(4);
  b.push(f);
  e.BF(b);
  a = y(a.Ku(), function(a) {
    var b = new yv;
    b.Aea(a.getChannelId());
    b.nfa(a.ZA());
    var c = a.Ph();
    b.Hfa(c);
    switch(c) {
      case "collections":
        b.gh(1);
        break;
      case "msodc":
        b.gh(2);
    }
    a = a.Wh();
    null != a && b.WF(a);
    return b;
  });
  e.Lga(a);
  return e;
};
d.gE = function(a, b) {
  var c = null, e = null, f = null, h = null, k = [], p = l(b) ? b : !0;
  b = a.K();
  var r = a.XB();
  if (0 < r.length) {
    w(4 == r[0].$(), "Non-bundled calls are not supported.");
    var f = this.Faa(r[0], p), c = this.yG(f, "a"), e = this.yG(f, "v"), f = this.yG(f, "d"), A = r[0].lc();
    A && (h = this.Uaa(A, p));
    (p = r[0].TA()) && (k = this.Wg(p, this.eE, this) || []);
  }
  a = y(a.HB(), function(a) {
    return new Np($a(a.getChannelId()), a.ZA(), Za(a.Wh()), $a(a.Ph()));
  }, this);
  return new Ar(c, e, f, null == b ? void 0 : b, a, h, k);
};
d.yG = function(a, b) {
  var c = jb(a.ed(), function(a) {
    return a.$() == b;
  }), e = "d" == b ? a.rd : null;
  if (0 == c.length && null == e) {
    return null;
  }
  var f = jb(a.gl(), function(a) {
    return a.$() == b;
  });
  a = jb(a.Of(), function(a) {
    return a.$() == b;
  });
  return (new br(b, c, f)).Im(a).vp(e);
};
d.kZ = function(a, b, c, e) {
  var f = new aH;
  f.uc(this.Oi(a.W()) || void 0);
  f.Dea(y(a.ed(), this.eZ, this));
  f.dT(y(e, this.zI, this));
  f.$ga(y(a.gl(), this.rZ, this));
  null != c && f.$F(this.AZ(c));
  a.rd && f.dha(a.rd.getName());
  a.xd() && f.GT(this.jZ(a.xd()));
  f.Tea(y(b, this.nZ, this));
  return f;
};
d.nZ = function(a) {
  var b = new cB;
  b.lU(a.ce());
  var c = new Kv;
  c.lm(a.Hg());
  c.qm(a.Ng());
  c.sT(a.Gg());
  b.Ds(c);
  c = new XE;
  c.wha(b);
  c.uc(this.Oi(a.$()) || void 0);
  return c;
};
d.jZ = function(a) {
  var b = new Ou;
  -1 != a.El && b.LT(a.El);
  -1 != a.ei && b.DT(a.ei);
  -1 != a.sm && b.qU(a.sm);
  return b;
};
d.EZ = function(a) {
  for (var b = [], c = [], e = [], f = null, h = null, k = 0;k < a.length;k++) {
    null != a[k] && (b = b.concat(a[k].ed()), c = c.concat(a[k].gl()), e = e.concat(a[k].Of()), !f && a[k].rd && (f = a[k].rd), !h && a[k].xd() && (h = a[k].xd()));
  }
  return a[0].qk(b).gW(c).Im(e).py(h).vp(f);
};
d.Faa = function(a) {
  var b = this.Pl(a.$());
  if (null == b) {
    return null;
  }
  var c = this.Wg(a.PA(), this.dE, this) || [], e = this.Wg(a.WB(), t(function(a) {
    return this.Laa(a, b || void 0);
  }, this)) || [], f = [];
  x(a.UA(), function(a) {
    var b = this.Pl(a.$());
    null != b && (a = this.dR(a.iC(), b, "", ""), f.push(a));
  }, this);
  var h = null;
  (a = a.N4()) && (h = (new vq).Oc(a).ry(5000).WG(256).ga());
  return (new br(b, c, e)).Im(f).vp(h);
};
d.Oi = function(a) {
  switch(a) {
    case "a":
      return 1;
    case "v":
      return 2;
    case "d":
      return 3;
  }
  I(this.a, "Unknown media type: " + a);
};
d.Pl = function(a, b) {
  switch(a) {
    case 1:
      return "a";
    case 2:
      return "v";
    case 3:
      return "d";
    case 4:
      return "a";
  }
  if (l(b)) {
    return b;
  }
  I(this.a, "Unknown media type: " + a);
  return null;
};
d.eZ = function(a) {
  var b = new Su;
  b.uc(this.Oi(a.$()));
  b.Aga(a.od);
  b.Ro(a.getName());
  b.yga(y(a.AB(), function(a) {
    var b = new Xu;
    b.Ffa(a.getKey());
    b.Hs(a.zc());
    return b;
  }, this));
  b.nea(a.Ni);
  b.bha(a.xh);
  b.zea(a.xg);
  return b;
};
d.dE = function(a) {
  var b = this.Pl(a.$()), c = a.g4(), e = a.getName();
  if (null == b || null == c || null == e) {
    return I(this.a, "Bad codec: " + a), null;
  }
  var f = (new Rq).kb(b).ke(c).Oc(e), b = a.m2();
  null != b && f.pg(b);
  b = a.M4();
  null != b && f.Re(b);
  b = a.y2();
  null != b && f.Qe(b);
  x(a.zB(), function(a) {
    var b = a.getKey() || "";
    a = a.zc() || "";
    f.jt(b, a);
  }, this);
  return f.ga();
};
d.zI = function(a) {
  var b = this.gZ(a.sj());
  if (null == b) {
    return I(this.a, "Unknown crypto suite: " + a.sj()), null;
  }
  var c = new Yu;
  c.zha(b);
  c.Gfa(a.Kn());
  c.mha(a.Yq() || void 0);
  c.Bha(a.dr());
  return c;
};
d.eE = function(a) {
  var b = this.saa(a.sj());
  if (null == b) {
    return I(this.a, "Unknown crypto suite: " + a.sj()), null;
  }
  var c = a.Kn(), e = a.Yq();
  if (null == c) {
    return I(this.a, "Bad crypto: " + a), null;
  }
  a = (new rq).ZG(b).VG(c).$G(1);
  e && a.hW(e);
  return a.ga();
};
d.gZ = function(a) {
  switch(a) {
    case "AES_CM_128_HMAC_SHA1_32":
      return 2;
    case "AES_CM_128_HMAC_SHA1_80":
      return 1;
  }
  I(this.a, "Unknown crypto suite: " + a);
  return null;
};
d.saa = function(a) {
  switch(a) {
    case 2:
      return "AES_CM_128_HMAC_SHA1_32";
    case 1:
      return "AES_CM_128_HMAC_SHA1_80";
  }
  I(this.a, "Unknown crypto suite: " + a);
  return null;
};
d.rZ = function(a) {
  var b = new dv;
  b.Lha(a.Rn());
  b.ox(a.getId());
  a = a.$();
  b.uc(a ? this.Oi(a) : void 0);
  return b;
};
d.Laa = function(a, b) {
  var c = a.Rn() || "", e = a.getId();
  b = this.Pl(a.$(), b);
  if (null == c || null == e) {
    return I(this.a, "Missing RTP header extension id or uri: " + a), null;
  }
  a = (new tq).lt(c).it(e);
  b && a.kb(b);
  return a.ga();
};
d.AZ = function(a) {
  var b = new WA;
  b.yfa(this.iZ(a.Uf()));
  b.wU(a.lk);
  b.XT(a.Qj);
  b.YS(y(a.wq(), this.yI, this));
  var c = a.xe();
  c && (a = new aB, c = c.split(" "), w(2 == c.length), a.PS(c[0]), a.oT(c[1]), b.nU(a));
  return b;
};
d.Uaa = function(a, b) {
  var c = this.Eaa(a.t3());
  if (null == c) {
    return null;
  }
  b = b && "ICE" === c ? "lite" : "full";
  var e = a.l5() || "", f = a.f4() || "", h = this.maa(a.KA());
  a = a.eC();
  var k;
  a && (k = a.X1() + " " + a.xe());
  return new Uq(c, e, f, k, h, b);
};
d.maa = function(a) {
  return this.Wg(a, t(function(a) {
    return this.laa(a);
  }, this)) || [];
};
d.yI = function(a) {
  var b = new av;
  b.Hea(this.$Y(a.Wk()));
  b.Bs(this.aZ(a.Th()));
  b.Bfa(a.In());
  b.To(a.vb());
  b.gh(this.bZ(a.W()));
  b.aU(a.el());
  b.kga(a.Rq());
  b.rfa(a.Hn());
  return b;
};
d.laa = function(a) {
  var b = this.gaa(a.Wk()), c = a.el();
  null != c || (c = 0);
  var e = this.kaa(a.W()), f = this.jaa(a.Th()), h = a.In(), k = a.vb();
  if (!(b && e && f && h && k)) {
    return I(this.a, "Missing or unknown candidate parmeters: " + a), null;
  }
  var p = c.toString(), r = a.Rq() || "";
  a = a.Hn() || 0;
  return new Yp(b, c, e, f, h, k, p, a, r);
};
d.iZ = function(a) {
  switch(a) {
    case "GICE":
      return 1;
    case "ICE":
      return 2;
  }
  I(this.a, "Unknown ICE version: " + a);
};
d.Eaa = function(a) {
  switch(a) {
    case 1:
      return "GICE";
    case 2:
      return "ICE";
  }
  I(this.a, "Unknown ICE version: " + a);
  return null;
};
d.$Y = function(a) {
  switch(a) {
    case 1:
      return 1;
    case 2:
      return 2;
  }
  I(this.a, "Unknown ICE component: " + a);
};
d.gaa = function(a) {
  switch(a) {
    case 1:
      return 1;
    case 2:
      return 2;
  }
  I(this.a, "Unknown ICE component: " + a);
  return null;
};
d.aZ = function(a) {
  switch(a) {
    case "UDP":
      return 1;
    case "TCP":
      return 2;
    case "SSLTCP":
      return 3;
  }
  I(this.a, "Unknown candidate protocol: " + a);
};
d.jaa = function(a) {
  switch(a) {
    case 1:
      return "UDP";
    case 2:
      return "TCP";
    case 3:
      return "SSLTCP";
  }
  I(this.a, "Unknown candidate protocol: " + a);
  return null;
};
d.bZ = function(a) {
  switch(a) {
    case "LOCAL":
      return 1;
    case "PEER_REFLEX":
      return 2;
    case "STUN":
      return 3;
    case "RELAY":
      return 4;
  }
  I(this.a, "Unknown candidate type: " + a);
};
d.kaa = function(a) {
  switch(a) {
    case 1:
      return "LOCAL";
    case 2:
      return "PEER_REFLEX";
    case 3:
      return "STUN";
    case 4:
      return "RELAY";
  }
  I(this.a, "Unknown ICE type: " + a);
  return null;
};
d.yZ = function(a, b, c) {
  var e = new CF;
  e.zf(2);
  null != a && e.ib(a);
  e.Y(b);
  e.qb(c.D());
  e.uc(this.Oi(c.$()));
  e.fh(c.Ga());
  e.om(c.yc());
  "v" == c.$() && e.fG(c.Hf);
  a = new JF;
  a.Fs(c.ze());
  a.oU(y(c.EN(), this.wZ, this));
  e.OT(a);
  return e;
};
d.Saa = function(a) {
  return this.Wg(a, this.Raa, this) || [];
};
d.Raa = function(a) {
  var b = this.Pl(a.$());
  if (null == b) {
    return I(this.a, "Unknown stream media type: " + a), null;
  }
  var c = a.D(), e = a.Ga(), f = a.yc();
  if (null == c || null == e || null == f) {
    return I(this.a, "Missing stream parmeters: " + a), null;
  }
  var h = a.ye(), h = h && h.Mn() || !1, k = a.L6() ? a.p5() : !0, p = [], r = [];
  a = a.Jg();
  null != a && (p = this.Wg(a.Tf(), this.yo, this) || [], r = this.Wg(a.Qn(), this.hE, this) || []);
  return (new er).kb(b).XG(c).mh(e).Km(f).dW(h).$ja(k || !1).qg(p).YG(r).up(f).ga();
};
d.yo = function(a) {
  return a >>> 0;
};
d.wZ = function(a) {
  var b = new OF;
  b.kU(a.Xq());
  b.Fs(a.ze());
  return b;
};
d.hE = function(a) {
  var b = this.Wg(a.Tf(), this.yo) || [], c = a.Xq();
  return null == c ? (I(this.a, "Unknown ssrc group semantics: " + a), null) : (new Tq).sy(c).qg(b).ga();
};
d.oZ = function(a, b, c, e) {
  var f = new CF;
  f.zf(1);
  f.ib(a);
  f.Y(b);
  f.qb(c.D());
  f.uc(this.Oi(c.$()));
  f.fh(c.Ga());
  a = new cB;
  a.qha(!0);
  a.lU(e);
  e = c.kc();
  null != e && (b = new Kv, b.lm(e.height), b.qm(e.width), b.sT(c.Gg()), a.Ds(b));
  f.Uga(a);
  return f;
};
d.gR = function(a) {
  return this.Wg(a, this.Taa, this) || [];
};
d.Taa = function(a) {
  var b = this.Pl(a.$());
  if (null == b) {
    return I(this.a, "Unknown stream request media type: " + a), null;
  }
  var c = a.D(), e = a.Ga();
  if (null == c || null == e) {
    return I(this.a, "Missing stream request parmeters: " + a), null;
  }
  a = a.Vh();
  return this.dR(a, b, c, e);
};
d.dR = function(a, b, c, e) {
  var f = !1, h = void 0, k = void 0;
  if (null != a && a.ce() && (f = a.ce(), null == f && (f = void 0), null != a.kc())) {
    var p = a.kc().Ng(), r = a.kc().Hg(), k = a.kc().m3();
    null == k && (k = void 0);
    null != p && null != r && (h = new Yi(p, r));
  }
  return new $p(c, e, b, h, k, f);
};
d.Wg = function(a, b, c) {
  null != c && (b = t(b, c));
  if (null == a || !ta(a)) {
    return null;
  }
  c = [];
  for (var e = 0;e < a.length;e++) {
    var f = a[e];
    if (null == f) {
      return I(this.a, "Failed to parse: " + a), null;
    }
    var h = b(f);
    if (null == h) {
      return I(this.a, "Failed to parse: " + f), null;
    }
    c.push(h);
  }
  return c;
};
var JI = function(a, b, c, e) {
  if (null == a) {
    return e = Nf("realtime.media.apiary.RpcEventDispatcher"), Pf(e, "Failed to report impression on RPC request because thenable is null for rpc " + b + "with sessionId " + c), je();
  }
  a = a.then();
  e.dispatchEvent(new Ms(b, "Aa", c));
  var f = ue(a.cancel, 90000, a), h = !1;
  a.zb(function(a) {
    h = !0;
    return a;
  }).then(function(a) {
    ve(f);
    var e = "Ba";
    a instanceof de ? e = "Da" : h && (e = "Ca");
    Ha(Qa(c)) && (1 > a.length || !(a[0] instanceof WH) ? c = null : (a = a[0], c = null != a ? a.K() : null));
    this.dispatchEvent(new Ms(b, e, c));
  }, null, e);
  return a;
};
var KI = function() {
  F.call(this);
  this.O = "INITIAL";
  this.bj = void 0;
};
v(KI, F);
var LI = {xoa:"send initiate", eoa:"recv local description", foa:"recv remote description", goa:"recv view request", Xoa:"transport readable", IX:"transport writable", HX:"transport not writable", coa:"recv first audio packet", doa:"recv first video packet", rX:"render first video frame", woa:"send candidate ", boa:"recv candidate "};
d = KI.prototype;
d.na = function() {
  return {state:this.getState(), endCause:this.Dn(), id:this.K(), isInProgress:"INPROGRESS" == this.getState(), localId:this.ya(), localDescription:this.Ig().na(), localSession:this.ba.na(), options:this.Rf().na(), remoteAudioCodecs:y(this.A4(), function(a) {
    return a.toString();
  }), remoteSession:this.Ba.na(), useEarlyMedia:this.$N()};
};
d.getState = function() {
  return this.O;
};
d.jm = pa;
d.tha = function(a, b, c) {
  this.O != a && (this.O = a, this.bj = b, this.dispatchEvent(new sx(a, b, c)));
};
d.Dn = function() {
  return this.bj;
};
var MI = function(a) {
  E.call(this, "qa");
  this.If = a;
};
v(MI, E);
var NI = function(a) {
  E.call(this, "sa");
  this.sessionId = a;
};
v(NI, E);
var OI = function(a) {
  E.call(this, "ma");
  this.id = a;
};
v(OI, E);
var PI = function(a) {
  E.call(this, "na");
  this.sessionDescription = a;
};
v(PI, E);
var QI = function(a, b, c) {
  E.call(this, "va");
  this.Xy = a;
  this.VE = b;
  this.sessionId = c || null;
};
v(QI, E);
var RI = function() {
  E.call(this, "ta");
};
v(RI, E);
var SI = function(a, b) {
  E.call(this, "pa");
  this.Sp = a;
  this.sessionId = b;
};
v(SI, E);
var TI = new mI, UI = function(a) {
  this.Vg = void 0 === a ? null : a;
  this.Pd = this.kd = this.mg = this.bE = this.Sd = null;
  this.iu = [];
  this.Uja = [];
  this.O6 = [];
};
d = UI.prototype;
d.tga = function(a) {
  this.bE = a;
};
d.getOrigin = function() {
  return null != this.bE ? this.bE : this.Vg ? this.Vg.getOrigin() : "";
};
d.setApiKey = function(a) {
  this.Sd = a;
};
d.dj = function() {
  return null != this.Sd ? this.Sd : this.Vg ? this.Vg.dj() : "";
};
d.pm = function(a) {
  this.mg = a;
};
d.tj = function() {
  return null != this.mg ? this.mg : this.Vg ? this.Vg.tj() : 6E4;
};
d.Qo = function(a) {
  this.kd = a;
};
d.kj = function() {
  return null != this.kd ? this.kd : this.Vg ? this.Vg.kj() : 0;
};
d.$F = function(a) {
  this.Pd = a;
};
d.lc = function() {
  return this.Pd ? this.Pd : this.Vg ? this.Vg.lc() : TI;
};
d.Qy = function(a) {
  this.iu.push(a);
};
d.CY = function(a) {
  this.Uja.push(a);
};
d.LH = function(a) {
  this.O6.push(a);
};
var VI = function() {
  var a = sk(), b = null, c = a;
  try {
    do {
      try {
        c.location.origin == a.location.origin && (b = c.chrome && c.chrome.runtime || b);
      } catch (e) {
      }
      if (c == c.parent) {
        break;
      }
      c = c.parent;
    } while (null != c);
  } catch (e) {
  }
  return b;
}, WI = function() {
  return "https:" == sk().location.protocol ? "nkeimhogjdpnpccoofpliimaahmaaome" : "hoblmflfjcnhdllclikeemgdcbbflkhi";
}, YI = function(a) {
  oI.ea().ec(null, "talk.media.webrtc.Extension: Sending message " + tf(a));
  var b = new js, c = VI(), e = a.method;
  if (c && null != c.sendMessage) {
    var e = XI(b, e), f = sk().location;
    a.origin = f.origin + "/";
    var h = Yc(f.href, "tabId");
    h && (a.tabId = h);
    (f = Yc(f.href, "winUrl")) && (a.winUrl = f);
    c.sendMessage(WI(), a, e);
  } else {
    oI.ea().ec(null, "talk.media.webrtc.Extension: Cannot find appropriate chrome.runtime when sending " + e, 10), b.cd("Cannot find appropriate chrome.runtime");
  }
  return b;
}, ZI = function(a) {
  var b = VI();
  if (b && null != b.connect) {
    oI.ea().ec(null, "talk.media.webrtc.Extension: Opening port named " + a);
    a = b.connect(WI(), {name:a});
    var c = t(a.disconnect, a);
    ud(sk(), "unload", c);
    a.onDisconnect.addListener(function() {
      Cd(window, "unload", c);
    });
    return a;
  }
  return null;
}, XI = function(a, b) {
  return function(c) {
    var e = "No response from extension";
    if (null != c) {
      if (e = c.error, null != e) {
        e = "Extension reported " + e.name + ": " + e.message;
      } else {
        oI.ea().ec(null, "talk.media.webrtc.Extension: Received response to " + b + ": " + tf(c.value));
        a.callback(c.value);
        return;
      }
    }
    var f = VI();
    f && null != f.lastError && (e = e + " Chrome reported: " + f.lastError.message);
    oI.ea().ec(null, "talk.media.webrtc.Extension: Received error to " + b + ": " + e, 10);
    a.cd(e);
    w(null == c, e);
  };
};
var $I = function(a, b) {
  this.Ia = a;
  this.H = b || null;
  this.a = Nf(a);
  this.Gr = oI.ea();
};
d = $I.prototype;
d.hG = function(a) {
  Pf(this.a, a);
  this.Gr.ec(this.H, "Error(" + this.Ia + "): " + a, 10);
};
d.v = function(a) {
  I(this.a, a);
  this.Gr.ec(this.H, "Warning(" + this.Ia + "): " + a, 9);
};
d.info = function(a) {
  J(this.a, a);
  this.Gr.ec(this.H, this.Ia + ": " + a, 8);
};
d.config = function(a) {
  Of(this.a, Ff, a);
  this.Gr.ec(this.H, this.Ia + ": " + a, 7);
};
d.L = function(a) {
  K(this.a, a);
  this.Gr.ec(this.H, this.Ia + ": " + a, 8);
};
var aJ = function(a) {
  O(this, a, 0, -1, null, null);
};
v(aJ, N);
aJ.prototype.g = function(a) {
  return bJ(a, this);
};
var bJ = function(a, b) {
  var c, e = {gua:(c = b.XL()) && $D(a, c), Tva:(c = b.zM()) && rI(a, c), cwa:(c = b.GM()) && fH(a, c), ewa:(c = b.IM()) && SF(a, c), Yva:(c = b.DM()) && fF(a, c), $va:(c = b.FM()) && sF(a, c), iua:(c = b.ZL()) && pE(a, c), lua:(c = b.$L()) && HE(a, c), Yta:(c = b.RL()) && KD(a, c), nua:(c = b.aM()) && OE(a, c), eua:(c = b.VL()) && VG(a, c), cua:(c = b.TL()) && PG(a, c), Vva:(c = b.BM()) && bF(a, c)};
  a && (e.l = b);
  return e;
};
aJ.prototype.j = function() {
  var a = new W;
  cJ(this, a);
  return a.h();
};
var cJ = function(a, b) {
  var c;
  c = a.XL();
  null != c && b.b(1, c, aE);
  c = a.zM();
  null != c && b.b(2, c, sI);
  c = a.GM();
  null != c && b.b(3, c, gH);
  c = a.IM();
  null != c && b.b(4, c, TF);
  c = a.DM();
  null != c && b.b(5, c, gF);
  c = a.FM();
  null != c && b.b(6, c, tF);
  c = a.ZL();
  null != c && b.b(7, c, qE);
  c = a.$L();
  null != c && b.b(8, c, IE);
  c = a.RL();
  null != c && b.b(9, c, LD);
  c = a.aM();
  null != c && b.b(10, c, PE);
  c = a.VL();
  null != c && b.b(11, c, WG);
  c = a.TL();
  null != c && b.b(12, c, QG);
  c = a.BM();
  null != c && b.b(13, c, cF);
};
d = aJ.prototype;
d.XL = function() {
  return T(this, ZD, 1);
};
d.zM = function() {
  return T(this, qI, 2);
};
d.GM = function() {
  return T(this, eH, 3);
};
d.IM = function() {
  return T(this, RF, 4);
};
d.Ufa = function(a) {
  V(this, 4, a);
};
d.DM = function() {
  return T(this, eF, 5);
};
d.FM = function() {
  return T(this, rF, 6);
};
d.Tfa = function(a) {
  V(this, 6, a);
};
d.ZL = function() {
  return T(this, oE, 7);
};
d.vfa = function(a) {
  V(this, 7, a);
};
d.$L = function() {
  return T(this, GE, 8);
};
d.wfa = function(a) {
  V(this, 8, a);
};
d.RL = function() {
  return T(this, JD, 9);
};
d.aM = function() {
  return T(this, NE, 10);
};
d.VL = function() {
  return T(this, UG, 11);
};
d.TL = function() {
  return T(this, OG, 12);
};
d.BM = function() {
  return T(this, aF, 13);
};
var dJ = function(a) {
  O(this, a, 0, -1, null, null);
};
v(dJ, N);
dJ.prototype.g = function(a) {
  return eJ(a, this);
};
var eJ = function(a, b) {
  var c, e = {hua:(c = b.YL()) && dE(a, c), Uva:(c = b.AM()) && vI(a, c), dwa:(c = b.HM()) && jH(a, c), fwa:(c = b.rB()) && sH(a, c), Zva:(c = b.EM()) && jF(a, c), awa:(c = b.pB()) && wF(a, c), jua:(c = b.dB()) && tE(a, c), mua:(c = b.fB()) && KE(a, c), Zta:(c = b.SL()) && OD(a, c), oua:(c = b.bM()) && RE(a, c), fua:(c = b.WL()) && YG(a, c), dua:(c = b.UL()) && SG(a, c), Wva:(c = b.CM()) && CI(a, c)};
  a && (e.l = b);
  return e;
};
dJ.prototype.j = function() {
  var a = new W;
  fJ(this, a);
  return a.h();
};
var fJ = function(a, b) {
  var c;
  c = a.YL();
  null != c && b.b(1, c, eE);
  c = a.AM();
  null != c && b.b(2, c, wI);
  c = a.HM();
  null != c && b.b(3, c, kH);
  c = a.rB();
  null != c && b.b(4, c, tH);
  c = a.EM();
  null != c && b.b(5, c, kF);
  c = a.pB();
  null != c && b.b(6, c, xF);
  c = a.dB();
  null != c && b.b(7, c, uE);
  c = a.fB();
  null != c && b.b(8, c, LE);
  c = a.SL();
  null != c && b.b(9, c, PD);
  c = a.bM();
  null != c && b.b(10, c, SE);
  c = a.WL();
  null != c && b.b(11, c, ZG);
  c = a.UL();
  null != c && b.b(12, c, TG);
  c = a.CM();
  null != c && b.b(13, c, DI);
};
d = dJ.prototype;
d.YL = function() {
  return T(this, cE, 1);
};
d.AM = function() {
  return T(this, uI, 2);
};
d.HM = function() {
  return T(this, iH, 3);
};
d.rB = function() {
  return T(this, rH, 4);
};
d.EM = function() {
  return T(this, iF, 5);
};
d.pB = function() {
  return T(this, vF, 6);
};
d.dB = function() {
  return T(this, sE, 7);
};
d.fB = function() {
  return T(this, JE, 8);
};
d.SL = function() {
  return T(this, ND, 9);
};
d.bM = function() {
  return T(this, QE, 10);
};
d.WL = function() {
  return T(this, XG, 11);
};
d.UL = function() {
  return T(this, RG, 12);
};
d.CM = function() {
  return T(this, BI, 13);
};
var gJ = function(a) {
  O(this, a, 0, -1, null, null);
};
v(gJ, N);
gJ.prototype.g = function(a) {
  return hJ(a, this);
};
var hJ = function(a, b) {
  var c, e = {kua:(c = b.eB()) && xE(a, c), Xva:(c = b.oB()) && GI(a, c), gwa:(c = b.sB()) && wH(a, c), Opa:(c = b.DA()) && cA(a, c), bwa:(c = b.qB()) && AF(a, c), $ta:(c = b.bB()) && BD(a, c), pua:(c = b.gB()) && VE(a, c), vra:(c = b.QA()) && Wz(a, c), kya:(c = b.IB()) && EE(a, c), Qqa:(c = b.LA()) && tz(a, c), nwa:b.L3(), owa:(c = b.wB()) && DH(a, c)};
  a && (e.l = b);
  return e;
};
gJ.prototype.j = function() {
  var a = new W;
  iJ(this, a);
  return a.h();
};
var iJ = function(a, b) {
  var c;
  c = a.eB();
  null != c && b.b(1, c, yE);
  c = a.oB();
  null != c && b.b(2, c, HI);
  c = a.sB();
  null != c && b.b(3, c, xH);
  c = a.DA();
  null != c && b.b(4, c, dA);
  c = a.qB();
  null != c && b.b(5, c, BF);
  c = a.bB();
  null != c && b.b(7, c, CD);
  c = a.gB();
  null != c && b.b(8, c, WE);
  c = a.QA();
  null != c && b.b(9, c, Xz);
  c = a.IB();
  null != c && b.b(10, c, FE);
  c = a.LA();
  null != c && b.b(11, c, uz);
  c = Q(a, 12);
  null != c && b.wp(12, c);
  c = a.wB();
  null != c && b.b(13, c, EH);
};
d = gJ.prototype;
d.eB = function() {
  return T(this, wE, 1);
};
d.oB = function() {
  return T(this, FI, 2);
};
d.sB = function() {
  return T(this, vH, 3);
};
d.DA = function() {
  return T(this, bA, 4);
};
d.qB = function() {
  return T(this, zF, 5);
};
d.bB = function() {
  return T(this, AD, 7);
};
d.gB = function() {
  return T(this, UE, 8);
};
d.QA = function() {
  return T(this, Vz, 9);
};
d.IB = function() {
  return T(this, DE, 10);
};
d.LA = function() {
  return T(this, sz, 11);
};
d.K3 = function() {
  return Q(this, 12);
};
d.L3 = function() {
  return Sr(this.K3());
};
d.wB = function() {
  return T(this, CH, 13);
};
var jJ = function(a, b, c, e, f, h) {
  F.call(this);
  this.a = Nf("realtime.media.apiary.Client");
  this.xi = a;
  this.eda = b;
  this.xba = c;
  this.Ve = l(h) ? h : 8;
  this.Xg = f || Sa();
  this.kF = cC(e);
  this.dk = 37;
  "hangout_lite" == c && (this.dk = 55);
};
v(jJ, F);
d = jJ.prototype;
d.ET = function(a) {
  this.kd = a;
};
d.Cs = function(a) {
  this.mg = a;
};
d.Bba = function(a) {
  var b = new aF;
  b.setRequestHeader(this.xJ());
  b.ib(a);
  return this.IP("media_sessions/query", b).then(this.P4, null, this);
};
d.P4 = function(a) {
  return null != a ? a.Bd() : null;
};
d.np = function(a, b) {
  a = this.vJ(a, b);
  return this.IP("media_sessions/log", a).zb(function(a) {
    I(this.a, "Failed to upload log data: " + a);
    throw a;
  }, this);
};
d.vJ = function(a, b) {
  a = a.an();
  a.Pfa(this.dk);
  a.Ofa(this.xba);
  var c = new ZH;
  c.setRequestHeader(this.xJ());
  c.ib(b);
  c.Nfa(a);
  return c;
};
d.xJ = function() {
  var a = new Oz;
  a.DF(new Wt);
  a.Ou().hg(this.Ve);
  var b = new Qt;
  b.UF(this.eda);
  b.zi(this.Xg);
  a.CF(b);
  a.mm("en");
  a.VF(this.kF);
  return a;
};
d.g6 = function(a) {
  if (null == a) {
    throw new kJ("Got empty response.");
  }
  if (l(a.getResponseHeader)) {
    var b = a.getResponseHeader();
    if (null != b) {
      if (b = b.Sa(), 1 != b) {
        throw new kJ("Got bad status in response header.", b);
      }
    } else {
      throw new kJ("Missing response header.");
    }
  }
  return a;
};
d.IP = function(a, b) {
  if (null == this.xi) {
    var c = "Failed to " + a + " " + b + ": no service";
    I(this.a, c);
    return je(c);
  }
  return this.xi.ko(a, b, this.mg, this.kd).then(this.g6, function(c) {
    I(this.a, "Failed to " + a + " " + b + ": " + c);
    throw c;
  }, this);
};
var kJ = function(a, b) {
  Ca.call(this);
  this.desc = a;
  this.status = b || 0;
};
v(kJ, Ca);
var lJ = function() {
  var a = this;
  this.Ec = new Tp(100);
  this.N6 = {onRequest:function(b, c, e) {
    return a.aca(b, c, e);
  }};
};
lJ.prototype.aca = function(a, b, c) {
  this.Ec.add({name:b.wN(), initReq:mJ(a), req:mJ(b), resp:nJ(c)});
};
lJ.prototype.YJ = function(a, b) {
  a = void 0 === a ? "" : a;
  b = void 0 === b ? 100 : b;
  a = a.toLowerCase();
  var c = this.Ec.T().filter(function(b) {
    return -1 != b.name.toLowerCase().indexOf(a);
  });
  return c.slice(-Math.min(c.length, b));
};
var pJ = function(a) {
  var b = oJ();
  a.LH(b.N6);
}, oJ = function() {
  qJ || (qJ = new lJ);
  return qJ;
}, qJ = null, rJ = function(a) {
  if (a) {
    if (a.Ua) {
      return sf(a.Ua());
    }
    if (ua(a)) {
      return y(a, function(a) {
        return rJ(a);
      });
    }
  }
  return a;
}, mJ = function(a) {
  return {name:a.Lo + "/" + a.wN(), body:tf(rJ(a.cF)), head:a.DK()};
}, nJ = function(a) {
  var b = {code:a.oG, body:tf(rJ(a.fda)), head:a.DK()};
  a instanceof BG && (b.status = tf(rJ(a.Gia)), b.ex = a.mq, b.msg = a.getMessage());
  return b;
};
m("grpc_lookup", function(a) {
  return oJ().YJ(a, 1)[0];
}, void 0);
m("grpc_dump", function(a, b) {
  return oJ().YJ(a, b);
}, void 0);
var sJ = function() {
  Ik.call(this);
  this.Tv = new H;
  this.Ao = new H;
  this.xl = new H;
  this.Y7(document, "visibilitychange", this.qja, !1, this);
  this.nv = new $I("talk.media.webrtc.OutputTracker");
};
v(sJ, Ik);
var tJ = new L("Y2E25b"), uJ = function(a, b) {
  var c = b.fba - a.fba;
  0 == c && (c = b.$A() - a.$A());
  return c;
}, vJ = function(a) {
  this.bR = a;
};
vJ.prototype.Bq = function() {
  return this.bR.Bq();
};
d = sJ.prototype;
d.Yba = function(a, b) {
  this.xl.Ra(a) || this.xl.set(a, []);
  this.xl.get(a).push(new vJ(b));
};
d.GR = function(a, b) {
  var c = this.xl.get(a);
  null != c ? xb(c, function(a) {
    return a.bR == b;
  }, this) ? qb(c) && this.xl.remove(a) : this.nv.v("recordBeforeAudioStop: No matching element found for ssrc " + a) : this.nv.v("recordBeforeAudioStop: No info found for ssrc " + a);
};
d.n3 = function(a) {
  var b = this.Tv.get(a);
  null != b && (w(0 < b.length), x(b, function(b) {
    this.CV(a, b);
  }, this));
  var c = this.Ao.get(a);
  if (null == c) {
    return null;
  }
  this.Ao.remove(a);
  b = wJ(c);
  c = xJ(c);
  return null != b || null != c ? {eO:b, fO:c} : null;
};
d.CV = function(a, b) {
  b = b.Ae;
  b.end.hu < b.start.hu ? this.nv.v("Non-monotonic frame count: " + b.end.hu) : (this.Ao.Ra(a) || this.Ao.set(a, []), -1 > b.Mta() && this.nv.v("Negative fps! s:{" + b.start.toString() + "} e:{" + b.end.toString() + "}"), this.Ao.get(a).push(b));
};
d.qja = function() {
  this.Tv.forEach(function(a, b) {
    w(0 < a.length);
    x(a, function(a) {
      w(null != a);
      this.CV(b, a);
    }, this);
  }, this);
};
var wJ = function(a) {
  var b = 0, c = 0;
  x(a, function(a) {
    b += a.end.hu - a.start.hu;
    c += a.end.timestamp - a.start.timestamp;
  });
  return 0 == c ? null : b / c;
}, xJ = function(a) {
  var b = [];
  x(a, function(a) {
    a.hidden || (b.push({t:a.start.timestamp, c:1, i:a}), b.push({t:a.end.timestamp, c:-1, i:a}));
  });
  Hb(b, "t");
  var c = 0, e = 0, f = -Infinity, h = [];
  x(b, function(a) {
    var b = a.t, k = b - f;
    0 < h.length && (c += b - f, e += h[0].$A() * k);
    1 == a.c ? (sb(h, a.i), Fb(h, uJ)) : wb(h, a.i);
    f = b;
  });
  w(0 == h.length, "Open and close steps must balance");
  return 0 == c ? null : e / c;
};
sJ.prototype.Bq = function(a) {
  a = this.Tv.get(a) || this.xl.get(a);
  if (null == a) {
    return null;
  }
  w(0 < a.length);
  var b = 0, c = !1;
  x(a, function(a) {
    a = a.Bq();
    null != a && (b = Math.max(a, b), c = !0);
  });
  return c ? b : null;
};
sJ.prototype.aa = function() {
  this.Tv.clear();
  this.xl.clear();
  this.Ao.clear();
  sJ.X.aa.call(this);
};
var zJ = function(a) {
  O(this, a, 0, -1, yJ, null);
};
v(zJ, N);
var yJ = [2];
d = zJ.prototype;
d.g = function(a) {
  var b, c = {Ob:(b = this.N()) && Pz(a, b), f1:P(this.En(), bJ, a), V:(b = this.m()) && Y(a, b)};
  a && (c.l = this);
  return c;
};
d.j = function() {
  var a = new W, b;
  b = this.N();
  null != b && a.b(1, b, Qz);
  b = this.En();
  0 < b.length && a.B(2, b, cJ);
  b = this.m();
  null != b && a.b(3, b, Z);
  return a.h();
};
d.N = function() {
  return T(this, Oz, 1);
};
d.setRequestHeader = function(a) {
  V(this, 1, a);
};
d.En = function() {
  return U(this, aJ, 2);
};
d.mT = function(a) {
  Vr(this, 2, a);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var BJ = function(a) {
  O(this, a, "chbrp", -1, AJ, null);
};
v(BJ, N);
var AJ = [2];
BJ.prototype.g = function(a) {
  var b, c = {hb:(b = this.getResponseHeader()) && Sz(a, b), f1:P(this.En(), eJ, a), V:(b = this.m()) && Y(a, b)};
  a && (c.l = this);
  return c;
};
BJ.prototype.j = function() {
  var a = new W, b;
  b = this.getResponseHeader();
  null != b && a.b(1, b, Tz);
  b = this.En();
  0 < b.length && a.B(2, b, fJ);
  b = this.m();
  null != b && a.b(3, b, Z);
  return a.h();
};
es("chbrp", BJ);
d = BJ.prototype;
d.getResponseHeader = function() {
  return T(this, Rz, 1);
};
d.En = function() {
  return U(this, dJ, 2);
};
d.mT = function(a) {
  Vr(this, 2, a);
};
d.m = function() {
  return T(this, X, 3);
};
d.u = function(a) {
  V(this, 3, a);
};
d.R = function() {
  this.u(void 0);
};
var CJ = function(a) {
  O(this, a, 0, -1, null, null);
};
v(CJ, N);
CJ.prototype.g = function(a) {
  return DJ(a, this);
};
var DJ = function(a, b) {
  var c, e = {Rza:(c = b.gC()) && GD(a, c), notification:(c = b.bv()) && hJ(a, c), vua:(c = b.jB()) && AA(a, c)};
  a && (e.l = b);
  return e;
};
CJ.prototype.j = function() {
  var a = new W;
  EJ(this, a);
  return a.h();
};
var EJ = function(a, b) {
  var c;
  c = a.gC();
  null != c && b.b(1, c, HD);
  c = a.bv();
  null != c && b.b(2, c, iJ);
  c = a.jB();
  null != c && b.b(3, c, BA);
};
CJ.prototype.gC = function() {
  return T(this, FD, 1);
};
CJ.prototype.bv = function() {
  return T(this, gJ, 2);
};
CJ.prototype.jB = function() {
  return T(this, zA, 3);
};
var GJ = function(a, b, c, e, f) {
  $c.call(this);
  this.zD = a;
  this.pZ = b;
  this.F4 = c || this.G4;
  this.yF = e || null;
  this.RK = f || null;
  w(!(this.RK ^ this.yF), "Both bulk operation functions must be supplied, or none");
  this.Em = -1;
  this.Qb = G();
  this.ls = null;
  this.jr = !1;
  this.kd = 0;
  this.mg = void 0;
  this.eb = ++FJ;
};
v(GJ, $c);
var FJ = 0;
d = GJ.prototype;
d.dG = function(a) {
  this.Em = a;
  this.hU();
};
d.getPromise = function() {
  return this.Qb.promise;
};
d.rv = function() {
  return this.jr;
};
d.Ir = function() {
  this.jr = !0;
};
d.getMethodName = function() {
  return this.zD;
};
d.Ria = function() {
  return !!this.yF;
};
d.Vh = function() {
  null == this.ls && (this.ls = this.eu(), this.hU());
  return this.ls;
};
d.p2 = function(a) {
  var b = new aJ;
  w(this.yF).call(b, a);
  return b;
};
d.RB = function(a) {
  return new Ip(this.SB(a), this.oC(a));
};
d.q2 = function(a) {
  return w(w(this.RK).call(a), "Expected response in HangoutBulkResponseEntry was empty");
};
d.oC = function(a) {
  return va(a.m) && null != a.m() ? a.m().Uf() : -1;
};
d.Qo = function(a) {
  this.kd = a;
};
d.kj = function() {
  return this.kd;
};
d.pm = function(a) {
  this.mg = a;
};
d.tj = function() {
  return this.mg;
};
d.hU = function() {
  if (null != this.ls && -1 != this.Em) {
    var a = this.ls;
    if (va(a.u)) {
      var b = new X;
      b.setVersion(this.Em);
      a.u(b);
    } else {
      va(a.R) && a.R();
    }
  }
};
d.lC = function() {
  return this.zD;
};
d.OB = function() {
  return this.Vh().toString();
};
d.toString = function() {
  return "[Operation id: " + this.eb + ": " + this.zD + ", version: " + this.Em + "]";
};
d.eu = function() {
  return this.pZ();
};
d.SB = function(a) {
  return this.F4(a);
};
d.G4 = function() {
  return [];
};
var HJ = function() {
  Ca.call(this);
};
v(HJ, Ca);
HJ.prototype.message = "Operation has already been executed.";
HJ.prototype.name = "AlreadyExecutedError";
var IJ = function(a) {
  this.o = new $I(a);
};
IJ.prototype.error = function(a) {
  this.o.hG(a);
};
IJ.prototype.v = function(a) {
  this.o.v(a);
};
IJ.prototype.info = function(a) {
  this.o.info(a);
};
IJ.prototype.L = function(a) {
  this.o.L(a);
};
var JJ = ["ResolveMeetingSpace", "CreateMeetingSpace"], KJ = function(a, b, c, e, f, h) {
  h = void 0 === h ? new wC : h;
  c = Zc(f, "/" + c + "/${path}");
  e && (c = Wc(c, "key", e));
  this.UY = c;
  this.w5 = this.V_(f, e, b);
  this.U_(this.w5);
  this.Y$ = new yC(a, e, f);
  this.We = h;
  this.mo = null;
};
d = KJ.prototype;
d.Yv = function(a, b, c, e, f, h, k, p) {
  a = this.w8(c, a, void 0 === p ? !1 : p);
  return this.Y$.Yv(a, b, c, e, f, h, k).then(this.fE, null, this);
};
d.J3 = function() {
  return this.We.FA();
};
d.sendBeacon = function(a, b) {
  Cx(this.UY.replace("${path}", a), tf(b), "application/json");
};
d.V_ = function(a, b, c) {
  var e = this, f = new UI;
  f.setApiKey(b);
  f.tga(a);
  f.Qo(2);
  f.pm(2E4);
  f.Qy(Dx(c));
  f.CY(lI);
  f.LH({onRequest:function(a, b, c) {
    (a = c.hB("X-Goog-Meeting-Token")) && e.We.tV(a);
    if (c = c.hB("X-Goog-Meeting-Debugid")) {
      e.mo = c;
    }
  }});
  pJ(f);
  return f;
};
d.U_ = function(a) {
  var b = this;
  a = new UI(a);
  a.Qy({q0:function(a) {
    null != a.hB("X-Goog-Meeting-Token") || pb(JJ, a.wN()) || a.uT("X-Goog-Meeting-Token", b.We.FA());
  }});
  return a;
};
d.w8 = function(a, b, c) {
  c || pb(JJ, a) || !this.We.yC() || (b = Vb(b), b["X-Goog-Meeting-Token"] = this.We.FA());
  return b;
};
d.fE = function(a) {
  var b = a.headers, c = b["X-Goog-Meeting-Token"] || b["x-goog-meeting-token"];
  c && this.We.tV(c);
  if (b = b["X-Goog-Meeting-Debugid"] || b["x-goog-meeting-debugid"]) {
    this.mo = b;
  }
  return a;
};
var MJ = function(a) {
  O(this, a, "hcbu", -1, LJ, null);
};
v(MJ, N);
var LJ = [1];
MJ.prototype.g = function(a) {
  var b = {Vwa:P(this.cv(), DJ, a)};
  a && (b.l = this);
  return b;
};
MJ.prototype.j = function() {
  var a = new W, b;
  b = this.cv();
  0 < b.length && a.B(1, b, EJ);
  return a.h();
};
es("hcbu", MJ);
MJ.prototype.cv = function() {
  return U(this, CJ, 1);
};
var NJ = function(a, b, c, e, f) {
  F.call(this);
  this.a = Nf("realtime.collections.apiary.OperationExecutor");
  this.Pi = [];
  this.az = b;
  this.Lr = b instanceof CG ? b : null;
  this.OC = a;
  this.Xg = c || null;
  this.Ve = l(e) ? e : 8;
  this.kF = cC(f || 0);
};
v(NJ, Ls);
d = NJ.prototype;
d.An = function() {
  return this.az;
};
d.NA = function() {
  var a = new Oz;
  a.DF(new Wt);
  a.Ou().hg(this.Ve);
  var b = new Qt;
  null != this.Xg && b.zi(this.Xg);
  a.CF(b);
  a.MA().UF(this.OC);
  a.mm("en");
  a.VF(this.kF);
  return a;
};
d.execute = function(a, b) {
  a = eb(a, GJ);
  if (a.rv()) {
    throw new HJ(a);
  }
  this.Lr && !l(b) && a.Ria() ? (this.Pi.push(a), 1 == this.Pi.length && $d(this.j1, this)) : this.dK(a, b);
};
d.j1 = function() {
  for (var a = 0;a + 5 < this.Pi.length;) {
    this.cK(Cb(this.Pi, a, a + 5)), a += 5;
  }
  1 == this.Pi.length - a ? this.dK(this.Pi[a]) : this.cK(Cb(this.Pi, a));
  this.Pi.length = 0;
};
d.dK = function(a, b) {
  var c = a.getMethodName(), e = a.Vh();
  e.setRequestHeader(this.NA());
  J(this.a, "Making request for operation: " + a + ", jid: " + this.OC);
  var f = a.kj();
  b = l(b) ? b : a.tj();
  this.az.ko(c, e, b, f).then(t(this.ww, this, a)).zb(t(this.Sk, this, a));
};
d.ww = function(a, b) {
  var c = b.getResponseHeader();
  w(null != c, "Missing response header");
  if (1 == c.Sa()) {
    b = a.RB(b), J(this.a, "Apiary operation succeeded for " + a + ", result: " + b), a.Ir(), a.Qb.resolve(b);
  } else {
    var e = Error(c.C3());
    e.stack = c.e3();
    Pf(this.a, "Apiary operation " + a + " failed with status " + c.Sa(), e);
    this.Sk(a, new fr("fatal", "backend", null, b));
  }
};
d.Sk = function(a, b) {
  a.Ir();
  Pf(this.a, "Apiary operation failed for " + a + ": " + b);
  a.Qb.reject(b);
};
d.cK = function(a) {
  var b = new zJ;
  b.setRequestHeader(this.NA());
  b.mT(y(a, function(a) {
    var b = a.Vh();
    return a.p2(b);
  }, this));
  J(this.a, "Making bulk request for " + a.length + "operations , jid: " + this.OC);
  var c = Math.max.apply(null, y(a, function(a) {
    return a.kj();
  })), e = Math.min.apply(null, y(a, function(a) {
    return a.tj();
  }));
  this.az.ko("hangouts/bulk", b, e, c).then(t(this.DZ, this, a)).zb(t(this.CZ, this, a));
};
d.DZ = function(a, b) {
  this.Lr.EG(b);
  var c = b.En();
  x(a, function(a, f) {
    (f = a.q2(c[f])) ? (this.Lr.EG(f), this.ww(a, f)) : this.Sk(a, new fr("fatal", "backend", null, b));
  }, this);
};
d.CZ = function(a, b) {
  x(a, function(a) {
    this.Sk(a, b);
  }, this);
};
var OJ = function(a, b) {
  qC.call(this, a);
  this.oc = new IJ("realtime.media.api.webrtc.Capture");
  this.settings = b;
  this.wm = this.Ne = null;
  this.Fr = new Ne;
  this.vm = new H;
  this.ee = !1;
  this.RV = "";
  this.Wf = !1;
  this.Bb = null;
};
v(OJ, qC);
d = OJ.prototype;
d.aa = function() {
  this.gq();
  this.Fr.clear();
  this.Bb = null;
  OJ.X.aa.call(this);
};
d.toString = function() {
  return "Capture(source=" + this.S() + " muted=" + this.ee + " paused=" + this.Wf + " stream=" + (this.Ne ? this.Ne.id : null) + " streamUrl=" + this.wm + ")";
};
d.Ox = function(a) {
  a && x(zb(a.getAudioTracks(), a.getVideoTracks()), function(a) {
    Ed(a);
    a.stop();
  });
};
d.gq = function() {
  this.vm.forEach(this.Ox, this);
  this.vm.clear();
  this.Ox(this.Ne);
  this.Ne = null;
  this.wm && (window.URL.revokeObjectURL(this.wm), this.wm = null);
};
d.EU = function() {
  this.oc.info("Starting media for " + this);
  this.jT("Wa");
  return this.lp().then(Jd(this));
};
d.yU = function(a) {
  this.RV = a;
  if (this.Ne) {
    var b = zb([this.Ne], this.vm.T());
    x(b, function(b) {
      x(b.getVideoTracks(), function(b) {
        "contentHint" in b && (b.contentHint = a);
      });
    });
  }
};
d.iT = function(a) {
  this.Zea(a);
};
d.Zea = function(a) {
  this.oc.info("Setting device to deviceId=" + a + " for " + this);
  return a != this.settings.deviceId ? (this.settings = this.settings.aka(a), this.lp().then(Jd(this))) : ie(this);
};
d.getDeviceId = function() {
  return this.settings.deviceId;
};
d.ae = function() {
  return this.Bb;
};
d.cb = function(a) {
  return this.Ne ? this.vm.get(a, null) : null;
};
d.X_ = function(a, b) {
  return new pG(this, a, b);
};
d.NR = function(a) {
  this.oc.info("Registering sessionId=" + a + " with " + this);
  this.Fr.add(a);
  this.Ne && this.vm.set(a, this.Ne.clone());
};
d.AG = function(a) {
  this.oc.info("Unregistering sessionId=" + a + " with " + this);
  this.Fr.remove(a);
  this.Ox(this.cb(a));
  this.vm.remove(a);
};
d.Tia = pa;
d.stop = function() {
  this.oc.info("Stopping " + this);
  this.gq();
  this.Fr.clear();
  this.dispatchEvent(new PJ(this.wm));
  this.jT("ab");
  return !0;
};
d.Hl = function() {
  if ("ab" == this.Dh) {
    return !1;
  }
  this.eQ(!0);
  return !0;
};
d.oja = function() {
  if ("ab" == this.Dh) {
    return !1;
  }
  this.eQ(!1);
  return !0;
};
d.rr = function() {
  switch(this.Dh) {
    case "Ya":
    case "Za":
    case "$a":
      return !0;
    default:
      return this.ee;
  }
};
d.eQ = function(a) {
  this.oc.info("Setting mute state to mute=" + a + " for " + this);
  this.ee = a;
  this.settings = this.settings.fka(this.ee);
  this.ee ? this.gq() : this.lp();
  this.Ija();
  this.dispatchEvent("T");
};
d.pause = function() {
  this.Wf || "ab" == this.Dh || (this.oc.info("Pausing " + this), this.Wf = !0, this.gq());
};
d.resume = function() {
  this.Wf && "ab" != this.Dh && (this.oc.info("Resuming " + this), this.Wf = !1, this.lp());
};
d.Ija = function() {
  this.S().Sb(this.rr() ? "za" : "ya");
};
d.lp = function() {
  if ("Wa" != this.Dh) {
    return this.oc.info("Skipping update usermedia for " + this + " while device in state=" + this.Dh), ie();
  }
  if (null == this.settings.deviceId) {
    return this.oc.info("Skipping update usermedia for " + this + " with null deviceId."), ie();
  }
  if (this.ee) {
    return this.oc.info("Skipping update usermedia for " + this + " because capture is currently muted."), ie();
  }
  if (this.Wf) {
    return this.oc.info("Skipping update usermedia for " + this + " because capture is currently paused."), ie();
  }
  var a = this.k5();
  if (!a) {
    return a = "Attempting to update usermedia for " + this + " with null constraints", this.oc.error(a), je(a);
  }
  var b = this.settings;
  this.oc.info("Attempting to update UserMedia for " + this);
  return fs(a).then(function(a) {
    this.ee || this.Wf || !this.settings.equals(b) ? (this.oc.info("Capture settings changed during stream acquisition for " + this), this.Ox(a)) : this.zQ(a);
  }, function(a) {
    this.oc.v("Error calling getUserMedia=" + a + " in " + this);
    throw a;
  }, this);
};
d.k5 = function() {
  var a = {audio:!1, video:!1}, b = this.S().W();
  switch(b) {
    case "a":
      b = this.settings.hv();
      a.audio = b;
      break;
    case "v":
      b = this.settings.hv();
      a.video = b;
      break;
    default:
      return this.oc.error("Invalid mediaType=" + b + " for " + this), null;
  }
  return a;
};
d.zQ = function(a) {
  this.oc.info("getUserMedia success for stream=" + a.id + " in " + this);
  0 == a.getAudioTracks().length && 0 == a.getVideoTracks().length ? this.oc.v("No media tracks for stream=" + a.id + " in " + this) : (this.gq(), this.Ne = a, this.wm = window.URL.createObjectURL(a), x(zb(this.Ne.getAudioTracks(), this.Ne.getVideoTracks()), function(a) {
    ud(a, "ended", this.T$, void 0, this);
  }, this), x(this.Fr.T(), function(a) {
    this.vm.set(a, this.Ne.clone());
  }, this), this.oc.info("Stream changed in " + this), this.yU(this.RV), this.dispatchEvent(new PJ(this.wm)));
};
d.T$ = pa;
d.aY = function(a) {
  w(a.ce());
  w(a.$() == this.S().W());
  var b = a.kc();
  if (b) {
    w("v" == this.S().W());
    var c = this.settings;
    c.minHeight = b.height;
    c.maxHeight = b.height;
    c.minWidth = b.width;
    c.maxWidth = b.width;
  }
  if (a = a.Gg()) {
    w("v" == this.S().W()), c = this.settings, c.lw = a, c.aw = a;
  }
};
var PJ = function(a) {
  E.call(this, "V");
  this.Nia = a;
};
v(PJ, E);
var QJ = function() {
  this.o = new IJ("realtime.media.api.webrtc.ExtensionDelegate");
};
v(QJ, nr);
Gq(QJ, nr, 1);
d = QJ.prototype;
d.zq = function(a) {
  return YI({method:"cpu.getInfo"}).dY(function(b) {
    a(b);
  });
};
d.Aq = function() {
  return ZI("processCpu");
};
d.KT = function(a, b) {
  var c = YI({method:"logging.setMetadata", metaData:[{key:"sessionId", value:a}, {key:"url", value:window.location.href}]}).then(function() {
    this.o.L("Extension logging setMetadata succeeded for " + a);
  }, function(b) {
    this.o.L("Extension loggings setMetadata failed for session: " + a + ", error: " + b);
  }, this);
  b && c.zb(function() {
    return this.KT(a, !1);
  }, this);
  return c;
};
d.ek = function(a) {
  return this.KT(a, !0).then(function() {
    return this.DU(!0);
  }, void 0, this);
};
d.gk = function(a, b) {
  if (b) {
    return YI({method:"logging.stopAndUpload"}).then(function(a) {
      this.o.info("logging.stopAndUpload succeeded with result=" + tf(a));
    }, function(a) {
      this.o.v("logging.stopAndUpload failed with error=" + a);
      throw a;
    }, this);
  }
  this.bf(!1);
  return YI({method:"logging.stop"}).then(function() {
    this.o.info("logging.stop succeeded");
    if (a) {
      return (0 <= Ua(kk, 42) ? YI({method:"logging.store", logId:a}) : YI({method:"logging.stop"})).then();
    }
  }, void 0, this).zb(function(a) {
    this.o.v("logging.stop failed with error=" + a);
    throw a;
  }, this);
};
d.bf = function(a) {
  return a ? YI({method:"logging.startRtpDump", incoming:!0, outgoing:!0}).then(function() {
    this.o.info("logging.startRtpDump succeeded");
  }, function(a) {
    this.o.info("logging.startRtpDump failed with error=" + a);
    throw a;
  }, this) : YI({method:"logging.stopRtpDump", incoming:!0, outgoing:!0}).then(function() {
    this.o.info("logging.stopRtpDump succeeded");
  }, function(a) {
    this.o.info("logging.stopRtpDump failed with error=" + a);
    throw a;
  }, this);
};
d.DU = function(a) {
  var b = YI({method:"logging.start"}).then();
  a && b.zb(function() {
    return this.DU(!1);
  }, this);
  return b;
};
d.gy = function() {
  return YI({method:"logging.uploadOnRenderClose"}).then();
};
var RJ = function(a) {
  this.o = new IJ("realtime.media.api.webrtc.LoggingManager");
  this.de = Gx(a, yr, bC);
  this.NG = null;
  this.Mm = new Ne;
  this.hy = new Ne;
  this.Zn = !1;
  this.ow = this.Ss = this.Tg = null;
  this.YO = this.jG = !1;
};
d = RJ.prototype;
d.Xc = function(a) {
  this.o.info("Logging manager initialized with userId=" + a);
  this.NG = a;
  return ie(7);
};
d.bf = function(a, b) {
  this.o.info("enableRtpHeaderDump called with sessionId=" + a + " and enable=" + b);
  this.YO == b ? this.o.info("Ignoring enableRtpHeaderDump call for sessionId=" + a + " as header dump already in state with enable=" + b) : this.Zn ? lr.ea().bf(b).then(function() {
    this.o.info("RTP header dump succeeded for sessionId=" + a + " and enable=" + b);
    this.YO = b;
  }, function(c) {
    this.o.v("Error setting RTP header dump for sessionId=" + a + " and enable=" + b + ". Error=" + c);
    throw c;
  }, this) : this.Tg ? (this.o.info("Delaying rtp header dump request until native WebRTC logging has started."), this.Tg.then(function() {
    this.bf(a, b);
  }, void 0, this)) : this.o.v("enableRtpHeaderDump called when native logging is not active or pending");
};
d.ek = function(a) {
  w(!this.Mm.contains(a));
  this.o.info("Starting logging for sessionId=" + a);
  this.Mm.add(a);
  this.de.then(function(a) {
    a.Xf(3220);
  });
  oI.ea().ek(a);
  this.y8(a);
};
d.gk = function(a) {
  if (this.Mm.contains(a)) {
    this.o.info("Stopping logging for sessionId=" + a);
    this.Mm.remove(a);
    this.de.then(function(a) {
      a.Xf(3221);
    });
    var b = this.hy.contains(a);
    this.hy.remove(a);
    b ? (this.o.info("Uploading logs for " + a), this.de.then(function(a) {
      a.Xf(2494);
    }), this.NG ? (this.o.info("################# Save #################"), b = oI.ea().Mja(a, this.NG).then(function() {
      this.de.then(function(a) {
        a.Xf(2495);
      });
    }, function() {
      this.de.then(function(a) {
        a.Xf(2496);
      });
    }, this)) : (this.o.v("Failed to upload beacause of missing user identifier."), b = ie())) : b = ie();
    var c = this.RP();
    me([b, c]).jk(function() {
      oI.ea().gk(a);
    }, this);
  } else {
    this.o.info("Skipping stopLogging call for sessionId=" + a + " as logging is not active for this session.");
  }
};
d.mp = function(a) {
  this.o.info("Log upload requested for sessionId=" + a);
  this.hy.add(a);
  this.Zn ? this.bF() : this.Tg && this.Tg.then(this.bF, void 0, this);
};
d.y8 = function(a) {
  this.Zn || this.Tg || (this.o.info("Requesting native WebRTC logging for sessionId=" + a), this.Tg = lr.ea().ek(a).then(function() {
    this.Zn = !0;
    this.ow = a;
    this.o.info("Native WebRTC logging started for sessionId=" + a);
  }, function(b) {
    this.o.v("Native WebRTC logging failed to start for sessionId=" + a + ", error: " + b);
    throw b;
  }, this).jk(function() {
    this.Tg = null;
  }, this), this.hy.contains(a) && this.Tg.then(function() {
    this.bF();
  }, void 0, this));
};
d.RP = function() {
  if (this.Ss) {
    return this.Ss;
  }
  if (!this.Zn) {
    return ie();
  }
  if (this.Tg) {
    return this.Tg.then(function() {
      this.RP();
    }, void 0, this);
  }
  if (!this.Mm.nc()) {
    return this.o.info("Ignoring native WebRTC logging stop request due to active session ids=" + this.Mm.T()), ie();
  }
  w(null != this.ow);
  this.o.info("Stopping native WebRTC logging.");
  return this.Ss = lr.ea().gk(this.ow, this.jG).then(function() {
    this.o.info("Request to stop native WebRTC logging succeeded");
  }, function(a) {
    this.o.v("Request to stop native WebRTC logging failed with error=" + a);
    throw a;
  }, this).jk(function() {
    this.Zn = !1;
    this.Ss = this.ow = null;
  }, this);
};
d.bF = function() {
  this.jG || (this.o.info("Requesting upload of the native WebRTC logs"), this.jG = !0, lr.ea().gy().then(function() {
    this.o.info("Native uploadLogOnRenderClose succeeded.");
  }, function(a) {
    this.o.v("Native uploadLogOnRenderClose failed with error=" + a);
    throw a;
  }, this));
};
var SJ = function(a, b) {
  this.o = new IJ("realtime.media.api.webrtc.PeerConnection");
  this.Aa = this.$_(a, b);
};
d = SJ.prototype;
d.$_ = function(a, b) {
  var c = {iceServers:[{url:"stun:stun.l.google.com:19302"}, {url:"stun:stun1.l.google.com:19302"}, {url:"stun:stun2.l.google.com:19302"}, {url:"stun:stun3.l.google.com:19302"}, {url:"stun:stun4.l.google.com:19302"}], bundlePolicy:"max-bundle"};
  if (qi) {
    return a = {mandatory:{RtpDataChannels:!0, DtlsSrtpKeyAgreement:a}, optional:[{googHighStartBitrate:!0}, {googHighBitrate:!0}, {googPayloadPadding:!0}, {googSkipEncodingUnusedStreams:!0}, {googScreencastMinBitrate:400}, {googVeryHighBitrate:!0}]}, b ? (a.optional.push({googCpuOveruseDetection:!0}), a.optional.push({googCpuOveruseEncodeUsage:!0}), a.optional.push({googCpuUnderuseThreshold:55}), a.optional.push({googCpuOveruseThreshold:85})) : a.optional.push({googCpuOveruseDetection:!1}), this.o.info("Creating new PeerConnection with config=" + 
    tf(c) + " constraints=" + tf(a)), new webkitRTCPeerConnection(c, a);
  }
  if (mi) {
    return this.o.info("Creating new PeerConnection with config=" + tf(c)), new RTCPeerConnection(c);
  }
  Ya();
};
d.createDataChannel = function(a) {
  var b;
  qi && (b = {reliable:!1});
  return this.Aa.createDataChannel(a, b);
};
d.signalingState = function() {
  return this.Aa.signalingState;
};
d.iceConnectionState = function() {
  return this.Aa.iceConnectionState;
};
d.close = function() {
  "closed" != this.signalingState() && this.Aa.close();
  this.Aa.onicecandidate = null;
  this.Aa.oniceconnectionstatechange = null;
  this.Aa.onaddstream = null;
  this.Aa.onremovestream = null;
  this.Aa.ondatachannel = null;
};
d.addStream = function(a) {
  qi ? this.Aa.addStream(a) : x(a.getTracks(), function(b) {
    this.Aa.addTrack(b, a);
  }, this);
};
d.removeStream = function(a) {
  if (qi) {
    this.Aa.removeStream(a);
  } else {
    var b = !1;
    x(a.getTracks(), function(a) {
      x(this.Aa.getSenders(), function(c) {
        c.track.id == a.id && (this.Aa.removeTrack(c), b = !0);
      }, this);
    }, this);
    w(b, "Could not find sender for the given stream.");
  }
};
d.createOffer = function(a) {
  a = a || TJ();
  var b = G();
  if (qi) {
    return this.Aa.createOffer(function(a) {
      b.resolve(a);
    }, function(a) {
      b.reject(a);
    }, a), b.promise;
  }
  mi ? b.resolve(this.Aa.createOffer(a)) : b.reject("Unsupported platform");
  b.promise.zb(function(a) {
    this.o.error("createOffer Failed: " + a);
    throw a;
  }, this);
  return b.promise;
};
d.createAnswer = function() {
  var a = G();
  if (qi) {
    return this.Aa.createAnswer(function(b) {
      a.resolve(b);
    }, function(b) {
      a.reject(b);
    }), a.promise;
  }
  mi ? a.resolve(this.Aa.createAnswer()) : a.reject("Unsupported platform");
  a.promise.zb(function(a) {
    this.o.error("createAnswer Failed: " + a);
    throw a;
  }, this);
  return a.promise;
};
var TJ = function() {
  if (qi) {
    return {mandatory:{OfferToReceiveAudio:!0, OfferToReceiveVideo:!0}};
  }
  if (mi) {
    return {bxa:1, cxa:1};
  }
  Ya();
  return {};
};
d = SJ.prototype;
d.getStats = function() {
  var a = G();
  qi ? this.Aa.getStats(function(b) {
    a.resolve(b);
  }) : mi ? a.resolve(this.Aa.getStats()) : a.reject("Unsupported platform");
  return a.promise;
};
d.addIceCandidate = function(a) {
  var b = G();
  qi ? this.Aa.addIceCandidate(a, function() {
    b.resolve();
  }, function(a) {
    b.reject(a);
  }) : mi ? b.resolve(this.Aa.addIceCandidate(a)) : b.reject("Unsupported platform");
  b.promise.zb(function(a) {
    this.o.v("addIceCandidate Failed: " + a);
    throw a;
  }, this);
  return b.promise;
};
d.setLocalDescription = function(a) {
  var b = G();
  qi ? this.Aa.setLocalDescription(a, function() {
    b.resolve();
  }, function(a) {
    b.reject(a);
  }) : mi ? b.resolve(this.Aa.setLocalDescription(a)) : b.reject("Unsupported platform");
  b.promise.zb(function(b) {
    this.o.v("setLocalDescription Failed: " + b);
    this.o.v("The current signalingState is : " + this.signalingState());
    this.o.v("The offending SDP was: \n" + a.sdp);
    throw b;
  }, this);
  return b.promise;
};
d.setRemoteDescription = function(a) {
  var b = G();
  qi ? this.Aa.setRemoteDescription(a, function() {
    b.resolve();
  }, function(a) {
    b.reject(a);
  }) : mi ? b.resolve(this.Aa.setRemoteDescription(a)) : b.reject("Unsupported platform");
  b.promise.zb(function(b) {
    this.o.v("setRemoteDescription Failed: " + b);
    this.o.v("The current signalingState is : " + this.signalingState());
    this.o.v("The offending SDP was: \n" + a.sdp);
    throw b;
  }, this);
  return b.promise;
};
d.getLocalStreams = function() {
  return this.Aa.getLocalStreams();
};
var UJ = function() {
  this.o = new IJ("realtime.media.api.webrtc.Utils");
  this.rb = new is;
  this.BE = new zs(16, !1);
  this.Yt = {};
  this.c8();
  this.V6();
}, VJ = new H({neon:1, sse2:2, ssse3:4, sse4_1:8, sse4_2:16, avx:32});
d = UJ.prototype;
d.cr = function() {
  var a = new uy;
  a.uga(this.c4());
  a.vga(ur);
  a.pea(this.o2());
  a.rea(kk);
  this.LO() ? a.cT("ARM") : (a.Nea(6), a.Pea(14), a.cT("GenuineIntel"), a.Oea(this.raa(this.Yt)), a.FF(this.Yt.numOfProcessors));
  return a;
};
d.o2 = function() {
  var a = "Other";
  hc ? a = "Opera" : ic ? a = "Internet Explorer" : mi ? a = "Firefox" : qi ? a = "Chrome" : ri && (a = "Safari");
  return a;
};
d.c4 = function() {
  var a = "other";
  qc ? a = "windows" : pc ? a = -1 != oc.indexOf("Intel") ? "mac" : "mac-ppc" : 0 <= $b.indexOf("CrOS") ? a = "cros" : rc && (a = "linux");
  return a;
};
d.createOffer = function(a, b, c) {
  var e = this.S1(!!b), f = null;
  b || (f = [(new rq).ZG("AES_CM_128_HMAC_SHA1_80").VG(this.Q1(128, 112)).$G(1).ga()]);
  b = this.e2();
  a = this.o5(a);
  c = this.M2(!!c);
  return new Ar(b, a, c, void 0, null, e, f);
};
d.e2 = function() {
  var a = [(new Rq).kb("a").ke(103).Oc("ISAC").pg(0).Re(16000).Qe(1).ga(), (new Rq).kb("a").ke(111).Oc("opus").pg(0).Re(48000).Qe(2).ga(), (new Rq).kb("a").ke(0).Oc("PCMU").pg(64000).Re(8000).Qe(1).ga(), (new Rq).kb("a").ke(8).Oc("PCMA").pg(64000).Re(8000).Qe(1).ga(), (new Rq).kb("a").ke(106).Oc("CN").pg(0).Re(32000).Qe(1).ga(), (new Rq).kb("a").ke(105).Oc("CN").pg(0).Re(16000).Qe(1).ga(), (new Rq).kb("a").ke(13).Oc("CN").pg(0).Re(8000).Qe(1).ga(), (new Rq).kb("a").ke(126).Oc("telephone-event").pg(0).Re(8000).Qe(1).ga()], 
  b = [(new tq).lt("urn:ietf:params:rtp-hdrext:ssrc-audio-level").it(1).kb("a").ga()];
  return new br("a", a, b);
};
d.o5 = function(a) {
  var b = [(new Rq).kb("v").ke(100).Oc("VP8").pg(400).Re(30).Qe(640).ga(), (new Rq).kb("v").ke(96).Oc("rtx").Re(90000).Qe(1).ga()];
  a && b.push((new Rq).kb("v").ke(97).Oc("H264").pg(400).Re(30).Qe(640).ga());
  a = [(new tq).lt("urn:ietf:params:rtp-hdrext:toffset").it(2).kb("v").ga(), (new tq).lt("http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time").it(3).kb("v").ga()];
  return new br("v", b, a);
};
d.M2 = function(a) {
  var b = new br("d", [], []);
  a ? (a = (new vq).ry(5000).Oc("webrtc-datachannel").WG(256).eka(10000).ga(), b = b.vp(a)) : (a = [(new Rq).kb("d").ke(101).Oc("google-data").ga()], b = b.qk(a));
  return b;
};
d.S1 = function(a) {
  var b = Tj(this.JB(12)), c = Tj(this.JB(18)), b = new Uq("ICE", b, c);
  a && (b = b.ZV("fingerprint:sha-256 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00"));
  return b;
};
d.Q1 = function(a, b) {
  a = this.JB(Math.ceil((a + b) / 8));
  return "inline:" + Tj(a);
};
d.JB = function(a) {
  try {
    return this.BE.gN(a);
  } catch (b) {
    return this.o.v("Forced to collect entropy the slow way. This indicates a failure in js.crypto.random."), this.BE.x_(), this.BE.gN(a);
  }
};
d.rV = function(a) {
  lr.ea().zq(t(function(b) {
    b && a && a(b);
  }, this));
};
d.LO = function() {
  return -1 != oc.indexOf("armv7l");
};
d.raa = function(a) {
  if (null == a) {
    return this.o.v("Cannot get cpuFlags from null."), -1;
  }
  var b = a.features;
  if (b) {
    var c = 0;
    x(b, function(a) {
      c |= VJ.get(a, 0);
    });
    return c;
  }
  return a.cpuHasSSE2 ? 2 : -1;
};
d.V6 = function() {
  this.rV(t(function(a) {
    a && this.vda(a);
  }, this));
};
d.vda = function(a) {
  this.Yt = a;
  this.vha("scp", a);
};
d.c8 = function() {
  var a = this.k8("scp", t(this.O2, this));
  a && (this.Yt = a);
};
d.O2 = function() {
  return this.LO() ? {archName:"armv7l", modelName:"Unknown ARM device", numOfProcessors:2} : {archName:"x86", modelName:"Unknown x86 device", numOfProcessors:4};
};
d.vha = function(a, b) {
  this.rb.isAvailable() ? this.rb.set(a, tf(b)) : this.o.error("Error in saving " + a + " to local storage.");
};
d.k8 = function(a, b) {
  var c = null;
  if (this.rb.isAvailable()) {
    a = this.rb.get(a);
    var e = null != a;
    try {
      c = sf(a);
    } catch (f) {
      e = !1;
    }
    !e && b && (c = b());
  } else {
    this.o.error("Error in retrieving cpu info from local storage.");
  }
  return c;
};
var WJ = function(a) {
  this.cg = a;
};
v(WJ, gq);
d = WJ.prototype;
d.Xe = function(a) {
  return new GJ("hangout_participants/add", function() {
    var b = new ZD;
    b.Fa(a);
    return b;
  }, function(a) {
    return a.I();
  });
};
d.Ye = function(a) {
  return new GJ("hangout_participants/modify", function() {
    var b = new gE;
    b.Fa(a);
    return b;
  }, function(a) {
    return a.I();
  });
};
d.ue = function(a, b) {
  var c = b && b.jYdIne || 0;
  return new GJ("hangout_participants/remove", function() {
    var b = new mE;
    b.Fa(a);
    b.ws(c);
    return b;
  });
};
d.Ze = function(a) {
  return new GJ("hangout_participants/query", function() {
    var b = new jE;
    b.Y(a.da());
    b.qb(a.D());
    return b;
  }, function(a) {
    return [a.fd()];
  });
};
d.Gf = function(a) {
  return new GJ("hangout_participants/search", function() {
    var b = new oE;
    b.Y(a.da());
    return b;
  }, function(a) {
    return a.Nn();
  }, aJ.prototype.vfa, dJ.prototype.dB);
};
var XJ = function(a) {
  this.cg = a;
};
v(XJ, gq);
d = XJ.prototype;
d.Xe = function(a) {
  return new GJ("hangouts/add", function() {
    var b = new JD;
    b.Fa(a);
    return b;
  }, function(a) {
    return a.I();
  });
};
d.Ye = function(a) {
  return new GJ("hangouts/modify", function() {
    var b = new VD;
    b.Fa(a);
    return b;
  }, function(a) {
    return a.I();
  });
};
d.ue = function() {
  return null;
};
d.Ze = function(a) {
  return new GJ("hangouts/query", function() {
    var b = new GE;
    b.Y(a.da());
    return b;
  }, function(a) {
    return [a.zd()];
  }, aJ.prototype.wfa, dJ.prototype.fB);
};
d.Gf = function(a) {
  return this.Ze(a);
};
var YJ = function(a) {
  this.cg = a;
};
v(YJ, Wp);
YJ.prototype.Xe = function(a) {
  return new GJ("media_sessions/add", function() {
    var b = new qI;
    b.Fa(a);
    return b;
  }, function(a) {
    return a.I();
  });
};
YJ.prototype.Ye = function(a) {
  return new GJ("media_sessions/modify", function() {
    var b = new yI;
    b.Fa(a);
    return b;
  }, function(a) {
    return a.I();
  });
};
YJ.prototype.ue = function() {
  return null;
};
var ZJ = function(a) {
  this.cg = a;
};
v(ZJ, gq);
d = ZJ.prototype;
d.Xe = function(a) {
  return new GJ("media_sources/add", function() {
    var b = new eF;
    b.Fa(a);
    return b;
  }, function(a) {
    return a.I();
  });
};
d.Ye = function(a) {
  return new GJ("media_sources/modify", function() {
    var b = new mF;
    b.Fa(a);
    return b;
  }, function(a) {
    return a.I();
  });
};
d.ue = function() {
  return null;
};
d.Ze = function(a) {
  return new GJ("media_sources/query", function() {
    var b = new pF;
    b.Y(a.da());
    b.qb(a.D());
    b.fh(a.Ga());
    return b;
  }, function(a) {
    return [a.S()];
  });
};
d.Gf = function(a) {
  return new GJ("media_sources/search", t(function() {
    var b = new rF;
    b.Y(a.da());
    return b;
  }, this), function(a) {
    return a.fl();
  }, aJ.prototype.Tfa, dJ.prototype.pB);
};
var $J = function(a) {
  this.cg = a;
};
v($J, gq);
d = $J.prototype;
d.Xe = function(a) {
  return new GJ("media_streams/add", function() {
    var b = new eH;
    b.Fa(a);
    return b;
  }, function(a) {
    return a.I();
  });
};
d.Ye = function(a) {
  return new GJ("media_streams/modify", function() {
    var b = new mH;
    b.Fa(a);
    return b;
  }, function(a) {
    return a.I();
  });
};
d.ue = function() {
  return null;
};
d.Ze = function(a) {
  return new GJ("media_streams/query", function() {
    var b = new QF;
    b.Y(a.da());
    b.zf(a.Uc());
    b.ib(a.K());
    b.om(a.yc());
    return b;
  }, function(a) {
    return [a.cb()];
  });
};
d.Gf = function(a) {
  return new GJ("media_streams/search", t(function() {
    var b = new RF;
    b.Y(a.da());
    b.ib(a.K());
    b.zf(a.Uc());
    return b;
  }, this), function(a) {
    return a.fl();
  }, aJ.prototype.Ufa, dJ.prototype.rB);
};
var aK = function(a) {
  F.call(this);
  this.Gx = a;
  this.C = new Ik(this);
  this.pa(this.C);
};
v(aK, F);
var bK = function(a) {
  this.mb = a.mb;
  this.yt = a;
};
v(bK, Eq);
d = bK.prototype;
d.px = function(a) {
  this.yt.px(a);
};
d.Xc = Lq();
d.qr = Lq();
d.cr = Lq();
d.du = Lq();
d.bu = Lq();
d.$g = Lq();
d.Hk = Lq();
var cK = function(a) {
  this.o = new IJ("realtime.media.api.webrtc.DataPointManager");
  this.Nl = a;
  this.dP = new Cr;
  this.xr = -1;
  this.E8 = new pD;
  this.jl = new Vp;
  this.Tja = new UJ;
  this.Gk = null;
};
d = cK.prototype;
d.tia = function() {
  this.Gk || (this.Gk = lr.ea().Aq()) && this.Gk.onMessage.addListener(t(this.jl.uY, this.jl));
};
d.Hia = function() {
  this.Gk && (this.Gk.disconnect(), this.Gk = null);
};
d.S_ = function(a, b, c) {
  var e = new MC;
  x(a, function(a) {
    a.timestamp && 0 < a.timestamp.getTime() && this.jl.$ba(a.timestamp);
    switch(a.type) {
      case "ssrc":
        this.yo(this.YE(a), b, e);
        break;
      case "VideoBwe":
        this.daa(this.YE(a), e);
        break;
      case "googCandidatePair":
        this.iaa(this.YE(a), e);
    }
  }, this);
  this.Tja.rV(t(this.D9, this, e, c));
};
d.D9 = function(a, b, c) {
  var e = this.xaa(a);
  3 != e ? this.o.error("Uncompatible version number: " + e) : (this.jl.BY(c), c = this.jl.U0(), 0 > c || (a.gha(Math.round(c)), this.xr >= c && this.o.v("Elapsed time in jmidata decreased from " + this.xr + " to " + c), this.xr = c, this.jl.k_(), b(a)));
};
d.xaa = function(a) {
  var b = this.jl.toJson();
  if (null == b) {
    return 0;
  }
  q(b.tabCpuUsage) && a.Kga(Math.round(b.tabCpuUsage));
  q(b.browserCpuUsage) && a.qea(Math.round(b.browserCpuUsage));
  q(b.gpuCpuUsage) && a.sfa(Math.round(b.gpuCpuUsage));
  q(b.pluginCpuUsage) && a.Oha(Math.round(b.pluginCpuUsage));
  q(b.totalCpuUsage) && a.Aha(Math.round(b.totalCpuUsage));
  q(b.numOfProcessors) && a.FF(Math.round(b.numOfProcessors));
  return this.Z3(b.jmiVersion);
};
d.yo = function(a, b, c) {
  this.E8.tba(a, b, this.Nl);
  this.o.L("SSRC: " + tf(a));
  if (null != a) {
    b = Pb(a, "audioInputLevel") || Pb(a, "audioOutputLevel");
    var e = Pb(a, "bytesSent"), f = new XC;
    this.Qaa(a, f, e, b);
    b ? this.caa(a, f, e) : this.Waa(a, f, e);
    this.Aja(a, f, e, b);
    this.TH(c, f);
  }
};
d.Qaa = function(a, b, c, e) {
  b.IT(e ? 1 : 2);
  b.zf(c ? 0 : 1);
  q(a.ssrc) && (b.WF(a.ssrc), b.rha([a.ssrc]));
  b.IF(Math.round(Op(a.fractionLost)));
  b.eT(Math.round(Op(a.packetsLost)));
  b.FT(Math.round(Op(a.highestSequenceNumber)));
  b.yT(Math.round(Op(a.googJitterReceived)));
  b.Es(Math.round(Op(a.googRtt)));
  b.US(Math.round(Op(a.bytesSent)));
  b.WT(Math.round(Op(a.packetsSent)));
  b.TS(Math.round(Op(a.bytesReceived)));
  b.VT(Math.round(Op(a.packetsReceived)));
  c ? null != a.googCodecName && b.iha(a.googCodecName) : (null != a.googCodecName && b.Mga(a.googCodecName), q(a.oneWayDelayMs) && b.oga(Math.round(a.oneWayDelayMs)), q(a.oneWayMaxDelayMs) && b.pga(Math.round(a.oneWayMaxDelayMs)), q(a.oneWayStddevDelayMs) && b.rga(Math.round(a.oneWayStddevDelayMs)), q(a.oneWayMinDelayMs) && b.qga(Math.round(a.oneWayMinDelayMs)));
};
d.caa = function(a, b, c) {
  c ? (q(a.aecDivergentFilterFraction) && b.fea(a.aecDivergentFilterFraction), q(a.audioInputLevel) && b.lT(Math.round(a.audioInputLevel)), q(a.googEchoCancellationEchoDelayMedian) && b.dfa(Math.round(a.googEchoCancellationEchoDelayMedian)), q(a.googEchoCancellationEchoDelayStdDev) && b.efa(Math.round(a.googEchoCancellationEchoDelayStdDev)), q(a.googEchoCancellationReturnLoss) && b.ffa(Math.round(a.googEchoCancellationReturnLoss)), q(a.googEchoCancellationReturnLossEnhancement) && b.gfa(Math.round(a.googEchoCancellationReturnLossEnhancement)), 
  q(a.googEchoCancellationQualityMin) && b.cfa(a.googEchoCancellationQualityMin), q(a.googResidualEchoLikelihood) && b.Wga(a.googResidualEchoLikelihood), q(a.googResidualEchoLikelihoodRecentMax) && b.Xga(a.googResidualEchoLikelihoodRecentMax)) : (q(a.audioOutputLevel) && b.lT(Math.round(a.audioOutputLevel)), q(a.googPreferredJitterBufferMs) && b.Gga(Math.round(a.googPreferredJitterBufferMs)), q(a.googCurrentDelayMs) && b.Jha(Math.round(a.googCurrentDelayMs)), q(a.googExpandRate) && b.kfa(a.googExpandRate), 
  q(a.googSpeechExpandRate) && b.pha(a.googSpeechExpandRate), q(a.googPreemptiveExpandRate) && b.Fga(a.googPreemptiveExpandRate), q(a.googAccelerateRate) && b.aea(a.googAccelerateRate), q(a.googSecondaryDecodedRate) && b.fha(a.googSecondaryDecodedRate), q(a.googDecodingCTSG) && b.fga(Math.round(a.googDecodingCTSG)), q(a.googDecodingCTN) && b.ega(Math.round(a.googDecodingCTN)), q(a.googDecodingNormal) && b.hga(Math.round(a.googDecodingNormal)), q(a.googDecodingPLC) && b.iga(Math.round(a.googDecodingPLC)), 
  q(a.googDecodingCNG) && b.gga(Math.round(a.googDecodingCNG)), q(a.googDecodingPLCCNG) && b.jga(Math.round(a.googDecodingPLCCNG)));
};
d.Aja = function(a, b, c) {
  a = this.dP.zja(a, this.xr, c);
  null != a && (b.IF(a.p8), c ? b.vU(a.uI) : b.Qga(a.uI));
};
d.Waa = function(a, b, c) {
  c ? (q(a.googFirsReceived) && b.pT(Math.round(a.googFirsReceived)), q(a.googNacksReceived) && b.NT(Math.round(a.googNacksReceived)), q(a.googFrameRateInput) && b.qT(Math.round(a.googFrameRateInput)), q(a.googFrameRateSent) && b.rT(Math.round(a.googFrameRateSent)), q(a.googFrameWidthSent) && b.qm(Math.round(a.googFrameWidthSent)), q(a.googFrameHeightSent) && b.lm(Math.round(a.googFrameHeightSent)), q(a.googQpSent) && b.bU(Math.round(a.googQpSent)), q(a.googAdaptationChanges) && b.eea(Math.round(a.googAdaptationChanges)), 
  q(a.googAvgEncodeMs) && b.mea(Math.round(a.googAvgEncodeMs))) : (q(a.googFirsSent) && b.pT(Math.round(a.googFirsSent)), q(a.googNacksSent) && b.NT(Math.round(a.googNacksSent)), q(a.googFrameRateOutput) && b.qT(Math.round(a.googFrameRateOutput)), q(a.googFrameRateReceived) && b.rT(Math.round(a.googFrameRateReceived)), q(a.googFrameRateDecoded) && b.ofa(Math.round(a.googFrameRateDecoded)), q(a.fpsGraphicsInput) && b.pfa(a.fpsGraphicsInput), q(a.fpsGraphicsOutput) && b.qfa(a.fpsGraphicsOutput), q(a.googFrameWidthReceived) && 
  b.qm(Math.round(a.googFrameWidthReceived)), q(a.googFrameHeightReceived) && b.lm(Math.round(a.googFrameHeightReceived)), q(a.googQpReceived) && b.bU(Math.round(a.googQpReceived)));
  c && b.OS(this.z_(a));
};
d.z_ = function(a) {
  var b = fD.jH, c = dK(a.googCpuLimitedResolution), e = dK(a.googBandwidthLimitedResolution);
  a = dK(a.googViewLimitedResolution);
  null != c && null != e && null != a && (c && (b |= fD.iH), e && (b |= fD.hH), a && (b |= fD.kH));
  return b;
};
d.iaa = function(a, b) {
  this.o.L("CandidatePair: " + tf(a));
  if (null != a) {
    var c = b.RA(), e = new YC;
    e.Es(Math.round(Op(a.googRtt)));
    e.Iha(Math.round(Op(a.bytesSent)));
    q(a.packetsSent) && e.Gha(Math.round(a.packetsSent));
    q(a.packetsDiscardedOnSend) && e.Fha(Math.round(a.packetsDiscardedOnSend));
    e.Hha(Math.round(Op(a.bytesReceived)));
    e.mfa(this.B_(a));
    var f = new Nx, h = new Nx;
    this.haa(a, f, h);
    e.Tga(f);
    e.Sga(h);
    e.jx(f.cb());
    a = this.dP.sja(a, this.xr);
    e.vea(a ? a.Sda : -1);
    e.uea(a ? a.cca : -1);
    c.push(e);
    b.Iea(c);
  }
};
d.B_ = function(a) {
  var b = 0;
  "true" == a.googActiveConnection && (b |= 1);
  "true" == a.googWritable && (b |= 2);
  "true" == a.googReadable && (b |= 4);
  return b;
};
d.haa = function(a, b, c) {
  b.wT(a.googLocalAddress || "");
  c.wT(a.googRemoteAddress || "");
  var e = a.googChannelId, f = 0;
  Ea(e, "Channel-audio-") ? f = 1 : Ea(e, "Channel-video-") && (f = 2);
  b.nm(f);
  c.nm(f);
  e = {local:1, stun:2, relay:3};
  b.jx(e[a.googLocalCandidateType] || 0);
  c.jx(e[a.googRemoteCandidateType] || 0);
  a = {udp:1, tcp:2, ssltcp:3}[a.googTransportType] || 0;
  b.Bs(a);
  c.Bs(a);
};
d.daa = function(a, b) {
  this.o.L("Bwe: " + tf(a));
  if (null != a) {
    var c = new XC;
    c.IT(2);
    c.zf(2);
    q(a.googAvailableSendBandwidth) && c.lea(Math.round(a.googAvailableSendBandwidth));
    q(a.googAvailableReceiveBandwidth) && c.kea(Math.round(a.googAvailableReceiveBandwidth));
    q(a.googTransmitBitrate) && c.vU(Math.round(a.googTransmitBitrate));
    q(a.googRetransmitBitrate) && c.Yga(Math.round(a.googRetransmitBitrate));
    q(a.googTargetEncBitrate) && c.Cha(Math.round(a.googTargetEncBitrate));
    q(a.googActualEncBitrate) && c.dea(Math.round(a.googActualEncBitrate));
    q(a.googBucketDelay) && c.Lfa(Math.round(a.googBucketDelay));
    c.IF(-1);
    c.eT(-1);
    c.FT(-1);
    c.yT(-1);
    c.Es(-1);
    c.US(-1);
    c.WT(-1);
    c.TS(-1);
    c.VT(-1);
    this.TH(b, c);
  }
};
d.YE = function(a) {
  var b = {};
  x(a.names(), function(c) {
    var e = a.stat(c);
    null != e && (isNaN(e) || n(e) && Ha(e) || (e = Number(e)));
    b[c] = e;
  });
  return b;
};
d.TH = function(a, b) {
  b = b || new XC;
  var c = a.Qh();
  c.push(b);
  a.Sfa(c);
  return b;
};
d.Z3 = function(a, b) {
  return q(a) ? a : l(b) ? b : -1;
};
var dK = function(a) {
  return "true" != a && "false" != a ? null : "true" == a;
};
var eK = function() {
  F.call(this);
  this.a = Nf("realtime.pushnotifications.Dispatcher");
};
v(eK, F);
new L("GNN9hf");
var fK = [{Wc:gJ.prototype.oB, eventType:"$a"}, {Wc:gJ.prototype.sB, eventType:"bb"}, {Wc:gJ.prototype.gB, eventType:"Xa"}, {Wc:gJ.prototype.eB, eventType:"Ya"}, {Wc:gJ.prototype.qB, eventType:"ab"}, {Wc:gJ.prototype.DA, eventType:"Ta"}, {Wc:gJ.prototype.bB, eventType:"Ua"}, {Wc:gJ.prototype.LA, eventType:"Va"}, {Wc:gJ.prototype.IB, eventType:"hb"}, {Wc:gJ.prototype.QA, eventType:"Wa"}, {Wc:gJ.prototype.wB, eventType:"cb"}], gK = [{Wc:CH.prototype.WA, eventType:"db"}, {Wc:CH.prototype.yB, eventType:"eb"}, 
{Wc:CH.prototype.LB, eventType:"fb"}, {Wc:CH.prototype.dC, eventType:"gb"}];
eK.prototype.b6 = function(a) {
  a = Xp(a);
  a = new MJ(a);
  this.A5(a);
};
eK.prototype.A5 = function(a) {
  a = a.cv();
  J(this.a, "handlePushNotification invoked, batch size: " + a.length);
  x(a, this.D5, this);
};
eK.prototype.D5 = function(a) {
  var b = a.bv(), c, e;
  if (null != b) {
    for (a = 0;a < fK.length;a++) {
      if (e = fK[a].Wc.call(b), null != e) {
        if ("cb" == fK[a].eventType) {
          for (var f = e, h = gK, k = 0;k < fK.length;k++) {
            if (e = h[k].Wc.call(f), null != e) {
              c = h[k].eventType;
              break;
            }
          }
        } else {
          c = fK[a].eventType;
          break;
        }
      }
    }
  } else {
    b = a.jB(), null != b && (e = b.iB(), null != e && (c = "Za"));
  }
  w(null == e || null != c, "eventType must be set ifnotification is set");
  null != e ? (J(this.a, "Received notification of type " + c + "."), this.dispatchEvent(new hK(c, e))) : I(this.a, "A batch notification is empty.");
};
var hK = function(a, b) {
  E.call(this, a);
  this.notification = b;
};
v(hK, E);
var iK = function(a, b, c, e, f) {
  F.call(this);
  this.o = new IJ("realtime.media.api.webrtc.PeerController");
  this.Oja = e.NV;
  this.op = e.op;
  this.H = a;
  this.tn = b;
  this.Wr = e.Wr;
  this.Yn = e.JG;
  this.Bz = l(f) ? f : 3;
  this.ria = new Ir;
  this.Va = new Ik(this);
  this.pa(this.Va);
  this.xf = this.U = null;
  this.Ts = {};
  this.QR = [];
  this.Ew = [];
  this.Nl = c;
  this.$z = new cK(this.Nl);
  this.OV = {};
  this.yr = u();
  this.lP = 0;
  this.Wf = !1;
  this.by = 1;
  this.Rm = {};
  this.xw = {};
  this.remoteDescription = this.localDescription = null;
  this.Us = {};
  this.fu = new H;
  this.DJ = new H;
  this.yS = new ix;
  this.xS = new pC;
  this.cy = null;
  this.Jb = [];
  this.wk = null;
  this.Dw = !1;
  this.Gc = null;
  this.Kca = 0;
  this.Pd = null;
};
v(iK, F);
var jK = null, kK = null, lK = !qi || 0 <= Ua(kk, 40) ? 100 : 200;
d = iK.prototype;
d.toString = function() {
  return "PeerController(sessionId=" + this.H + ")";
};
d.za = function(a) {
  this.o.info("[" + this + "] " + a);
};
d.Fd = function(a) {
  this.o.v("[" + this + "] " + a);
};
d.Vv = function(a) {
  this.o.error("[" + this + "] " + a);
};
d.stopSession = function(a) {
  this.U && (this.oV(), this.U.close(), this.U = null);
  this.xf && (this.xf.close(), this.xf = null);
  this.Gc && (this.Gc.cancel(), this.Gc = null);
  this.wk && (this.wk.stop(), this.Dw = !1, this.yr = 0, this.dispatchEvent(new mK(a)));
  this.$z.Hia();
  for (var b in this.Us) {
    this.Us[b].Pb.promise.then(window.URL.revokeObjectURL);
  }
  this.Lz(0);
};
d.Dj = function(a) {
  this.OV[a] || (this.OV[a] = !0, this.dispatchEvent(new nK(this.H, a)));
};
d.MD = function(a) {
  null != a && (this.za("Got local candidate: " + a.candidate), a = this.yS.faa(a), w(null != a), this.dispatchEvent(new oK(this.H, [a])), a = a.W(), this.Dj("send candidate " + a));
};
d.oL = function(a) {
  this.za("Calling createOffer for credentials");
  var b = TJ();
  a && (b.IceRestart = !0);
  return this.U.createOffer(b).then(function(a) {
    this.za("createOffer for credentials successfully completed");
    a = this.yS.parse(w(a.sdp));
    this.Pd = w(a.lc());
    this.dispatchEvent(new pK(this.H, this.Pd.lk, this.Pd.Qj));
  }, function(a) {
    this.za("createOffer for credentials failed with error=" + a);
    throw a;
  }, this);
};
d.k9 = function(a) {
  w(null != a);
  w(null != this.remoteDescription);
  var b = a.getAudioTracks(), c = a.getVideoTracks(), e = a.id;
  this.za("Remote stream added with id=" + a.id + " audioTracks=" + b.length + " videoTracks=" + c.length);
  var f = function(a) {
    return a.Yf == e;
  };
  kb(this.remoteDescription.wa.Kb(), f) || kb(this.remoteDescription.sa.Kb(), f) ? 0 < b.length ? this.Wr ? (w(0 == c.length), this.za("Creating audio output for stream id=" + e), a = new Es(this.tn, a), this.Rm[e] = a, (b = this.f2(this.remoteDescription, e)) ? (this.Ts[e] = b, this.Nl.Yba(b, a)) : this.Fd("Participant left before their audio was added")) : this.za("Ignoring incoming audio track as audio output is disabled.") : (w(0 < c.length), b = Ub(this.Us, e, {Pb:G(), rK:!1}), a = window.URL.createObjectURL(a), 
  this.za("Creating video url for stream id=" + e + " url=" + a), b.Pb.resolve(a), b.rK = !0) : this.za("Ignoring incoming tracks with no matching msid.");
};
d.H$ = function(a) {
  if (null != a) {
    var b = a.id;
    if (0 < a.getAudioTracks().length) {
      var c = this.Rm[b];
      if (null != c) {
        var e = this.Ts[b];
        e && (delete this.Ts[b], this.Nl.GR(e, c));
        ad(c);
        delete this.Rm[b];
      } else {
        this.Fd("Audio stream was deleted before removal.");
      }
    }
    0 < a.getVideoTracks().length && (a = this.Us[b], delete this.Us[b], null != a ? a.rK ? this.Fd("Asked to remove stream that was never added.") : a.Pb.promise.then(window.URL.revokeObjectURL) : this.Fd("Video stream was deleted before removal."));
  } else {
    this.Fd("Stream remove handler called with null stream.");
  }
};
d.oe = function(a) {
  this.za("Adding capture=" + a);
  w(this.localDescription);
  sb(this.Jb, a);
  this.Va.listen(a, "V", this.hO);
  var b = a.cb(this.H);
  return b ? this.vV(b, a.S().W()) : this.sM(a.S().W());
};
d.vf = function(a) {
  this.za("Removing capture=" + a);
  var b = a.cb(this.H);
  this.ZR(b);
  wb(this.Jb, a);
  this.Va.vd(a, "V", this.hO);
};
d.G3 = function(a, b) {
  return nb(a.Kb(), function(a) {
    return a.Ga() == b;
  });
};
d.hO = function(a) {
  a = a.target;
  var b = a.cb(this.H);
  b && this.vV(b, a.S().W());
};
d.SH = function(a, b) {
  var c, e, f;
  switch(b) {
    case "a":
      c = a.getAudioTracks();
      e = this.localDescription.wa;
      f = "1";
      break;
    case "v":
      c = a.getVideoTracks();
      e = this.localDescription.sa;
      f = "2";
      break;
    default:
      return this.Vv("Unsupported media type encountered."), null;
  }
  if (null == e) {
    return this.Fd("MediaDescription cannot be null."), null;
  }
  a = (new er(this.G3(e, f))).up(a.id).cW(c[0].id).ga();
  this.localDescription = "a" == b ? this.localDescription.Bf(e.Qd([a])) : this.localDescription.Se(e.Qd([a]));
  this.za("New streamInfo=" + a + " added to local description");
  return a;
};
d.Sy = function(a) {
  a && !this.Wf && this.U && (this.za("Adding stream with id=" + a.id + " to peer"), this.U.addStream(a));
};
d.ZR = function(a) {
  a && this.U && (this.za("Removing stream with id=" + a.id + " to peer"), this.U.removeStream(a));
};
d.vV = function(a, b) {
  b = this.SH(a, b);
  this.Sy(a);
  this.WE();
  return b;
};
d.xia = function() {
  this.Dj("send initiate");
  this.Uca();
};
d.createOffer = function(a) {
  var b = a.op ? jK : kK;
  null == b && (this.Fd("PeerController must be initialized prior to using it.  Using an empty local offer."), Ya("PeerController must be initialized prior to using it.  Using an empty local offer."), b = new Ar);
  var c = a.xd();
  c && (b = b.Se(b.sa.py(c)));
  var c = a.Qa ? [8579373] : this.Iu(1), c = (new er).kb("a").mh("1").Km(this.Wz("1")).qg(c).ga(), e = a.LG ? 3 : 1, f = a.Qa ? [8579374] : this.Iu(e), h = [];
  1 < f.length && (e = (new Tq).sy("SIM").qg(f).ga(), h.push(e));
  e = !1;
  if (a.MV && (e = -1 != mb(b.sa.ed(), function(a) {
    return "rtx" == a.getName();
  }))) {
    for (var k = a.Qa ? [8579375] : this.Iu(f.length), p = 0;p < k.length;p++) {
      var r = (new Tq).sy("FID").qg([f[p], k[p]]).ga();
      f.push(k[p]);
      h.push(r);
    }
  }
  f = (new er).kb("v").mh("2").Km(this.Wz("2")).qg(f).YG(h).ga();
  h = this.Iu(1);
  h = (new er).kb("d").mh("3").Km(this.Wz("3")).qg(h);
  a.Qa || h.up("dataSendChannel");
  h = h.ga();
  b = this.y_(b, [c], [f], [h]);
  b = this.y1(b, e, a);
  (c = b.wa) && (b = b.Bf(c.qk(y(c.ed(), function(a) {
    return (new Rq(a)).gka([]).ga();
  }))));
  a.pp || (b = b.Se(null));
  a.KG || (b = b.Cf(null));
  return this.localDescription = b;
};
d.Iu = function(a) {
  for (var b = [], c = 0;c < a;c++) {
    b.push(this.ria.f0());
  }
  return b;
};
d.y_ = function(a, b, c, e) {
  null != a.wa && 0 == a.wa.Kb().length && (a = a.Bf(a.wa.Qd(b)));
  null != a.sa && 0 == a.sa.Kb().length && (a = a.Se(a.sa.Qd(c)));
  null != a.getData() && 0 == a.getData().Kb().length && (a = a.Cf(a.getData().Qd(e)));
  return a;
};
d.Wz = function(a) {
  return this.H + "/" + a;
};
d.y1 = function(a, b, c) {
  return Br(a, function(a) {
    a = a.getName();
    return Fa(a, "vp8") || Fa(a, "h264-svc") || b && Fa(a, "rtx") || c.bI && Fa(a, "vp9") || c.EK() && Fa(a, "h264");
  });
};
d.sM = function(a) {
  var b;
  switch(a) {
    case "a":
      b = this.localDescription.wa;
      break;
    case "v":
      b = this.localDescription.sa;
      break;
    case "d":
      b = this.localDescription.getData();
  }
  return null != b ? b.Kb()[0] : null;
};
var qK = function(a) {
  var b = new SJ(a, !0), c = b.createDataChannel("sendDataChannel");
  a = b.createOffer().then(function(a) {
    c.close();
    return null != a.sdp ? (a = (new ix).parse(a.sdp), a = a.Cf(a.getData().Qd([])), a = a.Bf(a.wa.lh(!0).Jm(!0)), a = a.Se(a.sa.lh(!0).Jm(!0)), a = a.Cf(a.getData().lh(!0).Jm(!0))) : null;
  });
  a.jk(function() {
    "closed" != b.signalingState() && b.close();
  });
  return a;
}, rK = function() {
  var a = qK(!0).then(function(a) {
    jK = a;
  }), b = qK(!1).then(function(a) {
    kK = a;
  });
  return me([a, b]).then(function(a) {
    return kb(a, sa) ? 2 : 7;
  });
};
d = iK.prototype;
d.Uca = function() {
  null != this.U && (this.oV(), this.U.close(), this.Lz(0));
  this.za("Instantiating new peer");
  this.U = new SJ(this.op, this.Oja);
  this.pca();
  this.by = 1;
  this.U.Aa.onicecandidate = t(function(a) {
    this.MD(a.candidate);
  }, this);
  this.U.Aa.oniceconnectionstatechange = t(this.W9, this);
  this.U.Aa.onaddstream = t(function(a) {
    this.k9(a.stream);
  }, this);
  this.U.Aa.onremovestream = t(function(a) {
    this.H$(a.stream);
  }, this);
  this.U.Aa.ondatachannel = t(function(a) {
    this.H9(a.channel);
  }, this);
  this.xf = this.U.createDataChannel("dataSendChannel");
  this.xf.onopen = t(function() {
    this.za("send datachannel is open.");
  }, this);
  this.xf.onclose = t(function() {
    this.za("send datachannel is closed.");
  }, this);
  this.xf.onerror = t(function(a) {
    this.Fd("send datachannel error: " + a);
  }, this);
  this.Ew = z(this.QR);
  this.Gc && this.Gc.cancel();
  this.Gc = this.oL();
  this.$z.tia();
  this.wk || (this.wk = new te(lK), this.Va.listen(this.wk, "tick", this.v8), 3 == this.Bz && this.wk.start());
  x(this.Jb, function(a) {
    a = a.cb(this.H);
    this.Sy(a);
  }, this);
};
d.W9 = function() {
  this.za("ICE connection state changed to: " + this.U.iceConnectionState());
  if ("disconnected" == this.U.iceConnectionState()) {
    w(this.localDescription), this.Dj("transport not writable"), this.dispatchEvent(new sK(!1)), this.za("Initiating ICE restart"), this.Gc && this.Gc.cancel(), this.Gc = this.oL(), w(this.localDescription), w(this.remoteDescription), this.WE();
  } else {
    if ("connected" == this.U.iceConnectionState() || "completed" == this.U.iceConnectionState()) {
      this.Lz(2), this.Dj("transport writable"), this.dispatchEvent(new sK(!0));
    }
  }
};
d.v8 = function() {
  !this.wk.enabled && 3 == this.Bz || this.Dw || (this.Dw = !0, this.U.getStats().then(this.uba, void 0, this));
};
d.uba = function(a) {
  this.Dw = !1;
  if (!mi) {
    a = a.result();
    this.Rja(a);
    this.Qja(a);
    var b = u();
    10000 <= b - this.yr && (this.yr = 0 == this.yr ? b : this.yr + 10000, b = kb(this.Jb, function(a) {
      return "v" == a.S().W() && !a.rr();
    }), kb(this.Jb, function(a) {
      return "va" == a.S().$b;
    }), this.$z.S_(a, !b, t(function(a) {
      this.dispatchEvent(new tK(a));
    }, this)));
  }
};
d.sJ = function(a) {
  var b = Number(a);
  a = 0 == b && Ha(a) ? NaN : b;
  w(0 <= a && 32768 >= a, "levelNum outside of valid range: " + a);
  for (var b = [2000, 4000, 10000, 19000, 22000, 32769], c = 0;b[c] <= a;) {
    ++c;
  }
  return c;
};
d.Qja = function(a) {
  var b = 0, c = new H;
  x(a, function(a) {
    var e = a.stat("ssrc"), h = a.stat("audioOutputLevel");
    Ha(Qa(e)) || Ha(Qa(h)) || c.set(e, this.sJ(h));
    a = a.stat("audioInputLevel");
    Ha(Qa(a)) || (b = this.sJ(a));
  }, this);
  this.dispatchEvent(new ws(this.H, b, c));
};
d.Rja = function(a) {
  var b = u();
  if (!(1000 > b - this.lP)) {
    this.lP = b;
    for (var c = b = !1, e = 0;e < a.length;++e) {
      var f = a[e];
      if ("ssrc" == f.type) {
        var h = f.names();
        if (pb(h, "packetsReceived")) {
          var k = Number(f.stat("ssrc"));
          this.xw[k] = this.xw[k] || 0;
          f = Number(f.stat("packetsReceived"));
          0 >= f - this.xw[k] || (this.xw[k] = f, pb(h, "audioOutputLevel") ? b = !0 : pb(h, "googFrameRateReceived") && (c = !0));
        }
      }
    }
    this.dispatchEvent(new uK(b, c));
  }
};
d.f2 = function(a, b) {
  return null == a.wa || (a = a.wa.Kb(), a = nb(a, function(a) {
    return a.yc() == b;
  }), null == a || (a = a.ze(), qb(a))) ? null : (w(1 == a.length), a[0]);
};
d.st = function(a) {
  x(a, function(a) {
    var b, e = a.Wk();
    b = a.Th();
    var f = a.In(), h = a.vb(), k = a.ds, p = a.es, r = a.W(), A = Xb(lq)[r], C = a.el(), da = a.Hn();
    a = [a.sq, e, b.toLowerCase(), C, f, h, "typ", A];
    switch(r) {
      case "LOCAL":
        "TCP" == b && a.push("tcptyp", "active");
        break;
      case "STUN":
      case "RELAY":
      case "PEER_REFLEX":
        k && p && a.push("raddr", k, "rport", p);
        break;
      default:
        Ya("Unexpected candidate type: " + r);
    }
    a.push("generation", da);
    b = new RTCIceCandidate({sdpMLineIndex:0, candidate:"candidate:" + a.join(" ")});
    null != b && (this.Dj("recv candidate "), this.U && this.U.Aa.remoteDescription && this.U.Aa.remoteDescription.sdp ? this.U.addIceCandidate(b) : this.Ew.push(b), this.QR.push(b));
  }, this);
};
d.Fia = function() {
  1 == this.by && 4 != this.Bz && (this.cy = ue(function() {
    1 == this.by && (this.Fd("Transport writable timeout failed, aborting."), this.dispatchEvent(new vK(27, this.H)));
  }, 55E3, this));
};
d.Lz = function(a) {
  w(1 != a);
  null != this.cy && (ve(this.cy), this.cy = null, this.by = a);
};
d.setLocalDescription = function(a) {
  w(null == this.remoteDescription);
  this.Dj("recv local description");
  this.localDescription = a;
  x(this.Jb, function(a) {
    var b = a.cb(this.H);
    b && this.SH(b, a.S().W());
  }, this);
  return this.Gc = this.Gc.then(function() {
    return this.AT("offer", a);
  }, void 0, this).then(function() {
    this.za("Initial setLocalDescription offer succeeded");
  }, function(a) {
    this.Fd("Initial setLocalDescription offer failed with error=" + a);
    if (a instanceof de) {
      throw a;
    }
    this.dispatchEvent(new vK(19, this.H, a.toString()));
    throw a;
  }, this);
};
d.AT = function(a, b) {
  b = this.xS.toSdp(this.FY(a, b));
  this.za("Calling setLocalDescription");
  return this.U.setLocalDescription(new RTCSessionDescription({type:a, sdp:b})).then(function() {
    this.za("setLocalDescription succeeded");
  }, function(a) {
    this.za("setLocalDescription failed with error=" + a);
    throw a;
  }, this);
};
d.FY = function(a, b) {
  var c = w(this.Pd);
  this.Pd.xe() && (c = c.XV("offer" == a ? "actpass" : "active"));
  b = b.kt(c);
  b = this.ZH(b, "local");
  kb(this.Jb, function(a) {
    return "a" == a.S().W();
  }) || (b = b.Bf(b.wa.Qd([])));
  kb(this.Jb, function(a) {
    return "v" == a.S().W();
  }) || (b = b.Se(b.sa.Qd([])));
  return b;
};
d.setRemoteDescription = function(a) {
  w(null != this.localDescription);
  this.Dj("recv remote description");
  var b = null == this.remoteDescription;
  this.remoteDescription = a;
  return b ? (this.Fia(), this.Gc = this.Gc.then(function() {
    return this.gU("answer", a);
  }, void 0, this).then(function() {
    this.za("Initial setRemoteDescription answer succeeded");
  }, function(a) {
    this.Fd("Initial setRemoteDescription answer failed for with error=" + a);
    if (a instanceof de) {
      throw a;
    }
    this.dispatchEvent(new vK(19, this.H, a.toString()));
    throw a;
  }, this)) : this.WE();
};
d.gU = function(a, b) {
  var c = [];
  this.Yn && c.push("conference");
  b = this.GY(a, b);
  var e = Kb(b.getData().Kb(), function(a) {
    return a.Yf || a.Ga();
  }, this);
  this.DJ = new H(e);
  b = this.xS.toSdp(b, c);
  this.za("Calling setRemoteDescription with type=" + a);
  return this.U.setRemoteDescription(new RTCSessionDescription({type:a, sdp:b})).then(function() {
    this.za("setRemoteDescription succeeded");
    x(this.Ew, function(a) {
      this.U.addIceCandidate(a);
    }, this);
    this.Ew.length = 0;
  }, function(a) {
    this.za("setRemoteDescription failed with error=" + a);
    throw a;
  }, this);
};
d.GY = function(a, b) {
  b = b.getData().rd ? b.Cf(b.getData().Qd([])) : this.hha(b);
  b.lc() && b.lc().xe() && (b = b.kt(b.lc().XV("offer" == a ? "actpass" : "active")));
  return b = this.ZH(b, "remote");
};
d.ZH = function(a, b) {
  if (!mi) {
    return a;
  }
  var c = t(function(a) {
    return !kb(a, function(a) {
      return 0 < jb(this.U.getLocalStreams(), function(b) {
        return b.id == a.Yf;
      }).length;
    }, this);
  }, this);
  "remote" == b ? (c(this.localDescription.wa.Kb()) && (a = a.Bf(a.wa.Jm(!1))), c(this.localDescription.sa.Kb()) && (a = a.Se(a.sa.Jm(!1))), c(this.localDescription.getData().Kb()) && (a = a.Cf(a.getData().Jm(!1)))) : (c(this.localDescription.wa.Kb()) && (a = a.Bf(a.wa.lh(!1))), c(this.localDescription.sa.Kb()) && (a = a.Se(a.sa.lh(!1))), c(this.localDescription.getData().Kb()) && (a = a.Cf(a.getData().lh(!1))));
  return a;
};
d.hha = function(a) {
  var b = (new er).kb("d").mh("dataSendChannel").Km("dataSendChannel").qg([0]).up("dataSendChannel").ga(), c = a.getData().Kb();
  c.push(b);
  b = a.getData().Qd(c);
  return a.Cf(b);
};
d.Zaa = function() {
  var a = this.U.getLocalStreams();
  x(a, function(a) {
    this.ZR(a);
  }, this);
  this.Wf = !0;
};
d.hda = function() {
  this.Wf = !1;
  x(this.Jb, function(a) {
    a = a.cb(this.H);
    this.Sy(a);
  }, this);
};
d.WE = function() {
  if (!this.U) {
    return ie();
  }
  if (!this.Gc) {
    var a = "Attempting to reneogitate before credentials were requested in " + this;
    this.Fd(a);
    return je(a);
  }
  var b = this.Kca++;
  this.za("Queuing renegotiation with id=" + b);
  return this.Gc = this.Gc.then(function() {
    this.za("Setting offer in renegotiation with id=" + b);
    return this.gU("offer", w(this.remoteDescription));
  }, void 0, this).then(function() {
    this.za("Creating answer for renegotiation with id=" + b);
    return this.U.createAnswer();
  }, void 0, this).then(function() {
    this.za("Setting answer in renegotiation with id=" + b);
    return this.AT("answer", w(this.localDescription));
  }, void 0, this).then(function() {
    this.za("Renegotiation successfull with id=" + b);
  }, function(a) {
    this.Fd("Renegotiation failed with id=" + b + " with error=" + a);
    if (a instanceof de) {
      throw a;
    }
    this.dispatchEvent(new vK(19, this.H, a.toString()));
    throw a;
  }, this);
};
d.aa = function() {
  for (var a in this.Rm) {
    var b = this.Rm[a], c = this.Ts[a];
    c && (delete this.Ts[a], this.Nl.GR(c, b));
    ad(b);
  }
  this.Rm = {};
  ad(this.Nl);
  this.U && (this.U.close(), this.U = null);
  this.xf && (this.xf.close(), this.xf = null);
  iK.X.aa.call(this);
};
d.Ym = function() {
  this.Dj("recv view request");
};
d.H9 = function(a) {
  this.fu.set(a.label, a);
  a.onopen = t(function(a) {
    this.za("receive datachannel " + a.label + " is open.");
  }, this, a);
  a.onclose = t(function(a) {
    this.za("receive datachannel " + a.label + " is closed.");
    this.fu.remove(a.label);
  }, this, a);
  a.onerror = t(function(a, c) {
    this.Fd("receive datachannel " + a.label + " threw error: " + c);
    this.fu.remove(a.label);
  }, this, a);
  a.onmessage = t(this.I9, this, a);
};
d.jm = function(a, b) {
  var c = this.fu.get(a) || this.xf;
  w(null != c);
  this.za("sendData: label:" + a + "data: " + b);
  if (null != c) {
    var e = c.readyState;
    "open" == e ? c.send(b) : this.za("Message dropped: dataChannel " + a + " is in " + e + " state");
  } else {
    this.Fd("Unknown dataChannel for label " + a + ", cannot send data: " + b);
  }
};
d.I9 = function(a, b) {
  w(a != this.xf);
  b = $a(b.data);
  var c = this.DJ.get(a.label), c = c ? c.D() : a.label;
  null != b && (this.za("dataReceived: participantId:" + c + " label:" + a.label + "data: " + b), this.dispatchEvent(new wK(this.H, c, a.label, b)));
};
d.pca = function() {
  this.Va.listen(this.U.Aa, "signalingstatechange", this.VQ);
};
d.oV = function() {
  this.Va.vd(this.U.Aa, "signalingstatechange", this.VQ);
};
d.VQ = function(a) {
  a.target == this.U.Aa && "closed" == this.U.signalingState() && this.dispatchEvent(new vK(4, this.H));
};
var uK = function(a, b) {
  E.call(this, "lb");
  this.Wl = a;
  this.Xl = b;
};
v(uK, E);
var tK = function(a) {
  E.call(this, "pb");
  this.If = a;
};
v(tK, E);
var mK = function(a) {
  E.call(this, "qb");
  this.Gb = a;
};
v(mK, E);
var oK = function(a, b) {
  E.call(this, "nb");
  this.sessionId = a;
  this.Sp = b;
};
v(oK, E);
var nK = function(a, b) {
  E.call(this, "mb");
  this.sessionId = a;
  this.message = b;
};
v(nK, E);
var pK = function(a, b, c) {
  E.call(this, "rb");
  this.sessionId = a;
  this.kja = b;
  this.Aba = c;
};
v(pK, E);
var sK = function(a) {
  E.call(this, "sb");
  this.Gv = a;
};
v(sK, E);
var wK = function(a, b, c, e) {
  E.call(this, "jb");
  this.sessionId = a;
  this.Da = b;
  this.label = c;
  this.payload = e;
};
v(wK, E);
var vK = function(a, b, c) {
  E.call(this, "kb");
  this.Gb = a;
  this.sessionId = b;
  this.Yi = c;
};
v(vK, E);
var yK = function(a, b) {
  sG.call(this, b);
  if (a instanceof CG) {
    b = a, a = a.T_();
  } else {
    if (a instanceof vC) {
      b = a;
      var c = new wC;
      b = new CG(b.Nu(), b.Lp, b.Mp, b.dj(), b.fg, c);
    } else {
      a = b = a;
    }
  }
  this.Lr = b;
  this.u5 = a;
  this.cf = new xK;
  this.Pj = new eK;
  null != this.dd() || this.hg(32);
  this.setProperty(this.Sh() || "rmjs");
  this.QS(this.JK() || "Unknown");
  this.RS(this.c2() || "0.0");
  null != this.Lg() || this.wx(0);
  this.Oo(this.yd() || this.Sh() + Sa().toUpperCase());
  this.Mha(this.mv() || this.yd() + "@fake.com");
  null != this.rL() || this.gT(0.01);
  this.fT(this.qL() || null);
  this.hT(this.sL() || "https://clients2.google.com/cr/report");
  this.Dha(this.SN() || null);
  this.Fea(this.Qu() || new dx);
  null != this.cl() || this.As(!1);
  null != this.Pn() || this.xx(!1);
  this.lfa(this.Tu() || []);
  this.Ega(this.EB() || new MB);
  this.bfa(this.Su() || null);
};
v(yK, sG);
var zK = new L("CgjDUd");
d = yK.prototype;
d.register = function(a) {
  a.oi(zK, this);
  return this;
};
d.Oo = function(a, b) {
  b = b ? Sa().toUpperCase() : "";
  yK.X.Oo.call(this, a + b);
};
d.An = function() {
  return this.Lr;
};
d.fr = function() {
  return new Pq(this.Tu(), this.cl() || !1, !!this.Pn());
};
d.Mh = function() {
  return this.cf;
};
d.Uh = function() {
  return this.Pj;
};
d.G2 = function() {
  var a = new Wt;
  a.hg(this.dd());
  var b = new Qt;
  b.UF(this.yd());
  var c = new Oz;
  c.DF(a);
  c.CF(b);
  c.mm("en");
  c.VF(cC(this.Lg()));
  return c;
};
var xK = function() {
};
xK.prototype.va = pa;
var AK = function(a, b, c) {
  F.call(this);
  this.G0 = b;
  this.cf = c;
  this.C = new Ik(this);
  this.pa(this.C);
  this.C.removeAll();
  this.C.listen(a, "u", this.w$);
};
v(AK, F);
AK.prototype.w$ = function(a) {
  this.cf.va("C");
  this.G0.b6(a.data);
  this.n8(a.data);
};
AK.prototype.n8 = function(a) {
  a = Xp(a);
  a = (new MJ(a)).cv();
  0 == a.length ? this.cf.va("G") : 1 == a.length ? x(a, this.l8, this) : this.cf.va("H");
};
AK.prototype.l8 = function(a) {
  var b = a.gC();
  (b = b && b.uN()) && this.cf.va("V", b);
  a = a.bv();
  if (null != a) {
    for (var c, e = 0;e < fK.length;e++) {
      if (b = fK[e].Wc.call(a), null != b) {
        c = fK[e].eventType;
        this.m8(c);
        break;
      }
    }
    c || this.cf.va("T");
  } else {
    this.cf.va("I");
  }
};
AK.prototype.m8 = function(a) {
  switch(a) {
    case "$a":
      a = "K";
      break;
    case "bb":
      a = "L";
      break;
    case "Xa":
      a = "M";
      break;
    case "Ya":
      a = "N";
      break;
    case "ab":
      a = "O";
      break;
    case "Ta":
      a = "P";
      break;
    case "Ua":
      a = "Q";
      break;
    case "Va":
      a = "R";
      break;
    case "hb":
      a = "S";
      break;
    case "Wa":
      a = "U";
      break;
    default:
      a = "J";
  }
  this.cf.va(a);
};
var BK = function() {
  Zq(this);
};
qa(BK);
BK.prototype.ae = function(a, b) {
  a = this.hc.ae(a, b);
  w(null != a, "Could not create config!");
  return a;
};
BK.prototype.Rh = function(a, b, c, e) {
  a = this.hc.Rh(a, b, c, e);
  w(null != a, "Could not create operation executor!");
  return a;
};
BK.prototype.Uh = function(a, b) {
  a = this.hc.Uh(a, b);
  w(null != a, "Could not create push notification dispatcher!");
  return a;
};
BK.prototype.Mh = function(a, b) {
  a = this.hc.Mh(a, b);
  w(null != a, "Could not create collection event reporter!");
  return a;
};
var CK = function() {
};
v(CK, Eq);
Fq(CK, BK);
CK.prototype.ae = Lq();
CK.prototype.Rh = Lq();
CK.prototype.Uh = Lq();
CK.prototype.Mh = Lq();
var DK = function(a) {
  F.call(this);
  this.mb = a;
  this.Xd = null;
  this.Rt = G();
  this.DO = 0;
  this.n1 = G();
  me([this.Rt.promise, this.n1.promise]);
  this.zo = null;
  Zq(this);
};
v(DK, F);
Fq(bK, DK);
var EK = function(a) {
  a.ql(zr) || (zr.Yfa(""), a.oi(zr, new DK(a)));
};
d = DK.prototype;
d.Xc = function(a) {
  null == this.zo && (this.zo = me([this.hc.Xc(a || {}) || ie(7), this.Rt.promise]).then(function(a) {
    return a[0];
  }), this.zo.then(this.px, this.px, this), this.zo.zb(t(function() {
    this.zo = null;
  }, this)));
  return this.zo;
};
d.px = function(a) {
  a != this.DO && q(a) && Qb(Kp, a) && (this.DO = a, this.dispatchEvent("q"));
};
d.qr = function() {
  var a = this.hc.qr();
  return null != a ? a : !0;
};
d.cr = function() {
  return this.hc.cr() || null;
};
d.Bea = function(a) {
  w(null === this.Xd, "setClientConfig can only be called once");
  this.Xd = a;
  this.Rt.resolve(a);
  return this;
};
d.du = function(a, b) {
  return w(this.hc.du(a, b), "Could not create remote session!");
};
d.bu = function(a, b, c) {
  return w(this.hc.bu(a, b, c), "Could not create local session!");
};
d.$g = function(a, b) {
  w(this.hc.$g(a, b), "Could not request log upload");
};
d.Hk = function(a) {
  return w(this.hc.Hk(a), "Could not create logger!");
};
var FK = function(a, b, c, e) {
  $H.call(this);
  this.o = new IJ("realtime.media.api.webrtc.LocalSession");
  this.H = a;
  this.ac = b;
  this.oa = c;
  this.zl = e;
  this.C = new Ik(this);
  this.pa(this.C);
  this.C.listen(this.ac, "jb", this.n$);
  this.C.listen(this.ac, "kb", this.o$);
  this.C.listen(this.ac, "lb", this.p$);
  this.C.listen(this.ac, "mb", this.q$);
  this.C.listen(this.ac, "nb", this.r$);
  this.C.listen(this.ac, "pb", this.t$);
  this.C.listen(this.ac, "qb", this.s$);
  this.C.listen(this.ac, "rb", this.u$);
  this.C.listen(this.ac, "sb", this.v$);
  this.O = "INITIAL";
  this.Jb = new Ne;
  this.bj = void 0;
  this.hi = this.Zp();
};
v(FK, $H);
d = FK.prototype;
d.vc = function(a, b, c) {
  this.O != a && (this.O = a, !q(this.bj) && q(b) && (this.bj = b), this.dispatchEvent(new sx(this.O, this.bj, c)));
};
d.getState = function() {
  return this.O;
};
d.K = function() {
  return this.H;
};
d.Jg = function() {
  return this.hi;
};
d.Zp = function() {
  return this.ac.createOffer(this.oa);
};
d.Jc = function() {
  if ("INITIAL" != this.O) {
    return this.o.v("Called prepare in a bad state."), !1;
  }
  this.zl.ek(this.H);
  this.ac.xia();
  this.ac.setLocalDescription(this.hi);
  this.vc("STARTING");
  return !0;
};
d.start = function(a) {
  if ("STARTING" != this.O) {
    return this.o.v("Called start in a bad state."), !1;
  }
  this.Kda("RemoteSessionId=" + a.K());
  this.vc("INPROGRESS");
  this.SF(a);
  return !0;
};
d.connect = pa;
d.update = function(a) {
  switch(this.O) {
    case "INITIAL":
      return this.o.v("Update called before started."), !1;
    case "STOPPED":
      return this.o.v("Update called after stopped."), !1;
  }
  this.SF(a);
  return !0;
};
d.stop = function(a, b) {
  if ("STOPPED" == this.O) {
    return !1;
  }
  this.vc("STOPPED", a, b);
  w(null != this.bj);
  this.ac.stopSession(this.bj);
  this.zl.gk(this.H);
  return !0;
};
d.pause = function() {
  if ("INPROGRESS" != this.getState()) {
    return !1;
  }
  this.ac.Zaa();
  this.vc("PAUSED");
  return !0;
};
d.resume = function() {
  if ("PAUSED" != this.getState()) {
    return !1;
  }
  this.ac.hda();
  this.vc("INPROGRESS");
  return !0;
};
d.mp = function() {
  this.zl.mp(this.H);
};
d.st = function(a) {
  this.ac.st(a);
};
d.oe = function(a) {
  var b = a.S().W();
  switch(this.O) {
    case "STOPPED":
    case "FINISHED":
      return this.o.v("Add local stream called after ended."), null;
  }
  var c = eb(a, OJ);
  if (this.Jb.contains(c)) {
    return this.o.error("Capture " + a + " has already been added."), null;
  }
  a.NR(this.H);
  c = this.ac.oe(c);
  if (null == c) {
    return this.o.error("A stream for capture of type: " + b + ", was not created."), null;
  }
  this.Jb.add(a);
  return c;
};
d.vf = function(a) {
  switch(this.O) {
    case "STOPPED":
      this.o.v("Remove local stream called after stopped.");
  }
  var b = eb(a, OJ);
  this.ac.vf(b);
  a.AG(this.H);
  this.Jb.remove(a);
};
d.OI = function(a) {
  if ("INPROGRESS" == this.O && 0 != a.length) {
    var b = a[0];
    x(this.Jb.T(), function(a) {
      b.$() == a.S().W() && a.aY(b);
    }, this);
  }
};
d.jm = function(a, b) {
  null != this.mB("d") ? this.ac.jm(a, b) : this.o.v("Sending data without data stream.");
};
d.bf = function(a) {
  this.o.info("enableRtpHeaderDump called with enable=" + a + " for sessionId=" + this.H);
  this.zl.bf(this.H, a);
};
d.wF = function(a) {
  null != a.wa && this.SF(a);
};
d.mB = function(a) {
  return this.ac.sM(a);
};
d.p$ = function(a) {
  this.dispatchEvent(new aI(a.Wl, a.Xl));
};
d.r$ = function(a) {
  a.sessionId == this.H && this.dispatchEvent(new bI(a.Sp));
};
d.q$ = function(a) {
  a.sessionId == this.H && this.dispatchEvent(new cI(a.message));
};
d.t$ = function(a) {
  this.dispatchEvent(new dI(a.If));
};
d.s$ = function(a) {
  this.dispatchEvent(new eI(0, a.Gb));
};
d.o$ = function(a) {
  a.sessionId == this.H && this.stop(a.Gb, a.Yi);
};
d.u$ = function(a) {
  this.H == a.sessionId && (a = this.hi.lc().iW(a.kja).fW(a.Aba), this.hi = this.hi.kt(a));
};
d.v$ = function(a) {
  this.dispatchEvent(new gI(a.Gv));
};
d.n$ = function(a) {
  this.H == a.sessionId && this.dispatchEvent(new fI(a.Da, a.label, a.payload));
};
d.IH = function(a) {
  var b = this.hi.getData().Kb();
  kb(b, function(b) {
    return b.Yf == a.Ph();
  }) || (b.push(this.vR(a)), b = this.hi.getData().Qd(b), this.hi = this.hi.Cf(b));
};
d.Kda = function(a) {
  this.o.info("sendLogComment: " + a);
};
d.SF = function(a) {
  if (null != a.fN() && null != a.getData()) {
    var b = y(a.Ku(), this.vR, this), b = a.getData().Qd(zb(a.getData().Kb(), b));
    a = a.Cf(b);
  }
  this.o.info("Session " + this.K() + " setting remote descriptions: " + tf(a.na()));
  this.ac.setRemoteDescription(a);
};
d.vR = function(a) {
  var b = a.Wh(), c = a.Ph() || "local_push_channel", e = a.getChannelId() || "";
  return (new er).kb("d").XG(e).mh(c).Km(b.toString()).Gp(b).up(a.Ph()).ga();
};
var GK = function(a) {
  bK.call(this, a);
  this.pu = new xk;
  this.PO = !1;
  this.zl = new RJ(this.mb);
};
la(GK, bK);
GK.prototype.Xc = function() {
  var a = this, b = [this.yt.Rt.promise.then(function(b) {
    return a.zl.Xc(b.mv());
  }), rK()];
  return me(b).then(function(b) {
    a.PO = b.every(function(a) {
      return 7 == a;
    });
    RH = w(a.mb.get(zK).sL());
    return b;
  });
};
GK.prototype.qr = function() {
  return this.PO;
};
GK.prototype.Hk = function(a) {
  return this.qr() ? new IJ(a) : null;
};
GK.prototype.bu = function(a, b, c) {
  if (this.qr()) {
    a.get(zK);
    var e = a.Sq(tJ);
    null == e && (e = new sJ(a), a.oi(tJ, e));
    a = new iK(b, this.pu, e, c);
    b = new FK(b, a, c, this.zl);
    b.pa(a);
    return b;
  }
  return null;
};
Gq(GK, bK, 6);
var IK = function(a, b) {
  OJ.call(this, a, HK);
  this.Yc = b;
};
la(IK, OJ);
IK.prototype.HT = function(a) {
  this.Yc = a;
  this.lp();
};
IK.prototype.lp = function() {
  this.zQ(this.Yc.clone());
  return ie();
};
var HK = new ar(!1, 30, 320, 180, 30, 640, 360);
var JK = function() {
  this.uA = null;
};
v(JK, CK);
Gq(JK, CK);
JK.prototype.ae = function(a, b) {
  return w(b.Qu());
};
JK.prototype.Rh = function(a, b, c) {
  if (c) {
    return new NJ(w(c || b.yd()), w(b.An()), void 0, b.dd(), b.Lg());
  }
  this.uA || (this.uA = new NJ(w(b.yd()), w(b.An()), void 0, b.dd(), b.Lg()));
  return this.uA;
};
JK.prototype.Uh = function(a, b) {
  return b.Uh();
};
JK.prototype.Mh = function(a, b) {
  return b.Mh();
};
var KK = function(a) {
  this.rb = new is;
  this.Bb = null;
  this.p_ = Gx(a, zK).then(function(a) {
    return this.Bb = a;
  }, null, this);
  this.Do = null;
  this.Vba = Gx(a, zr, EK).then(function(a) {
    return this.Do = a;
  }, null, this);
  this.BQ = G();
  this.AQ = this.BQ.promise;
  this.xt = null;
  this.rs = !1;
  this.Wy = [];
  this.uO = this.TI = !1;
}, LK = function(a) {
  a.ql(vr) || a.oi(vr, new KK(a));
};
d = KK.prototype;
d.zn = function() {
  this.NP();
  return this.xt || !1;
};
d.eY = function(a) {
  this.Bb = this.Bb || a.Pc;
  this.Do = this.Do || a.DR;
  this.NP();
  a.yb.Nm(this.zn());
  Math.random() <= this.Bb.rL() && a.yb.yA();
  this.Wy.push(a);
  a.onConnect.then(t(this.w9, this, a));
  a.onDisconnect.then(t(this.rQ, this, a), t(this.rQ, this, a));
};
d.$g = function(a, b) {
  var c = this.jD();
  null != c && c.da() == a && (b ? ie(!0) : this.AQ.then(function() {
    return this.zn();
  }, void 0, this)).then(function(a) {
    a && this.eK(t(function() {
      x(c.rj() || [], function(a) {
        this.Do.$g(w(a.qM()), c.da());
      }, this);
    }, this));
  }, void 0, this);
};
d.m1 = function(a) {
  this.Bb ? a() : this.p_.then(a);
};
d.eK = function(a) {
  this.Do ? a() : this.Vba.then(a);
};
d.w9 = function(a) {
  this.f_(a);
  this.tS(a);
};
d.rQ = function(a) {
  this.tS(a);
  wb(this.Wy, a);
};
d.NP = function() {
  this.uO || this.bK();
};
d.bK = function(a) {
  this.m1(t(function() {
    this.uO = !0;
    this.rs = null;
    var b = G();
    b.promise.then(t(this.g$, this), t(this.f$, this, a));
    var c = this.Bb.qL();
    if (null != c) {
      null != a && (c = Wc(c, "set", String(a)));
      var e = Rf.Yp();
      e.open("GET", c, !0);
      e.onreadystatechange = function() {
        4 == e.readyState && (200 == e.status ? b.resolve(e.responseText) : b.reject(null));
      };
      e.send(null);
    } else {
      b.reject(null);
    }
  }, this));
};
d.g$ = function(a) {
  this.rs = "true" == a;
  this.DQ();
};
d.f$ = function(a) {
  this.rs = l(a) ? a : this.zn();
  this.DQ();
};
d.DQ = function() {
  this.BQ.resolve();
  null === this.xt && (this.xt = this.rs, x(this.Wy, function(a) {
    a.yb.Nm(this.zn());
  }, this));
  this.rs != this.xt && this.bK(this.zn());
};
d.f_ = function(a) {
  if (!this.TI) {
    this.TI = !0;
    var b = this.jD();
    null != b && (null != b.Dn() && 3456E5 > u() - b.getTime() && this.Lja(b), a = a.ka, b.da() == a.get() && 6E4 > u() - b.getTime() && this.AQ.then(function() {
      this.zn() && this.eK(t(function() {
        x(b.rj() || [], function(a) {
          this.Do.$g(w(a.qM()), b.da());
        }, this);
      }, this));
    }, void 0, this));
  }
};
d.CI = function(a, b) {
  a += b;
  b = new cq;
  b.update(a, a.length);
  return String.fromCharCode.apply(String, b.digest());
};
d.Lja = function(a) {
  if (null != a.Sh() && null != a.Lg() && null != a.nj() && 0 != (a.rj() || []).length) {
    var b = this.GK(a);
    x(a.rj(), function(c) {
      b.np(this.vM(a, c), w(c.NB()));
    }, this);
  }
};
d.ZN = function() {
  var a = this.jD();
  if (null == a || null == a.Sh() || null == a.Lg() || null == a.nj() || 0 == (a.rj() || []).length) {
    return [];
  }
  var b = this.GK(a);
  return y(a.rj(), function(c) {
    return b.vJ(this.vM(a, c), w(c.NB()));
  }, this);
};
d.GK = function(a) {
  w(this.Bb, "ClientConfig not set.");
  return new jJ(this.Bb.u5, w(a.yd() || a.nj()), w(a.Sh()), a.Lg() || 0, void 0, a.dd() || this.Bb.dd());
};
d.vM = function(a, b) {
  w(this.Bb, "ClientConfig not set.");
  var c = new BC;
  c.sU((new Date(a.getTime())).toString());
  c.uU(a.Dn());
  c.XS(-2);
  c.WS(w(b.NB()));
  b = new zH;
  b.AF(c);
  b.Y(a.da());
  b.zF(this.Bb.Tu());
  b.As(this.Bb.cl());
  b.zi(a.nj());
  b.Vo(a.kv());
  b.eh(a.lj());
  b.Oa(a.La());
  return b;
};
d.jD = function() {
  if (!this.rb.isAvailable()) {
    return null;
  }
  w(this.Bb, "ClientConfig not set.");
  var a = this.rb.get("report_luak");
  this.rb.remove("report_luak");
  if ("hc:rc" != cb(sf(a || "[]"))[0]) {
    return null;
  }
  a = new kx(cb(sf(a)));
  return a.L4() == this.CI(w(this.Bb.mv()), a.getTime()) ? a : null;
};
d.tS = function(a) {
  if (this.rb.isAvailable()) {
    w(this.Bb, "ClientConfig not set.");
    var b = new kx;
    b.Y(a.ka.get());
    var c = u();
    b.setTime(c);
    b.aha(this.CI(w(this.Bb.mv()), c));
    b.setProperty(this.Bb.Sh());
    b.wx(this.Bb.Lg());
    b.zi(a.Lj);
    b.Oo(this.Bb.yd());
    var e = [];
    Lb(a.yb.y4(), function(a, b) {
      var c = new nx;
      c.Rga(a);
      c.Mfa(b);
      e.push(c);
    });
    0 != e.length && (b.kha(e), c = a.onDisconnect, c.Sc && b.ws(c.get()), a = a.ss, (c = a.kv()) && b.Vo(c), (c = a.lj()) && b.eh(c), (a = a.La()) && b.Oa(a), this.rb.set("report_luak", b.Ua()));
  }
};
var NK = function(a, b, c) {
  return MK(a, b, [c], new Oq(Zz, [Zz.prototype.da], [Zz.prototype.Y], [], [], yu, [yu.prototype.da], [yu.prototype.Y], [], []), XJ, "Xa");
}, OK = function(a, b, c) {
  return MK(a, b, [c], new Oq(CA, [CA.prototype.da], [CA.prototype.Y], [CA.prototype.D, CA.prototype.Ga], [CA.prototype.qb, CA.prototype.fh], jv, [jv.prototype.da], [jv.prototype.Y], [jv.prototype.D, jv.prototype.Ga], [jv.prototype.qb, jv.prototype.fh]), ZJ, "ab");
}, MK = function(a, b, c, e, f, h) {
  var k = BK.ea();
  f = new f(k.Rh(a, b));
  h = new Jp(k.Uh(a, b), h);
  return new kG(a, k.ae(a, b), c, e, f, h, k.Mh(a, b));
};
var PK = function(a, b, c, e) {
  var f = BK.ea(), h = new bx;
  a = new kG(a, f.ae(a, b), c, e, h);
  h.Eea(a);
  return a;
};
var QK = function(a, b, c, e, f) {
  KI.call(this);
  this.a = Nf("realtime.media.session.SessionImpl");
  this.o = b.Hk("realtime.media.session.SessionImpl");
  this.o.info("Creating a new session with localSessionId=" + c.K() + " remoteSessionId=" + e.hd() + " earlyMediaHangoutId=" + f.af + " P2P=" + f.Qa + " useAudio=" + f.et + " useVideo=" + f.pp);
  this.de = Gx(a, yr, bC);
  this.C = new Ik(this);
  this.pa(this.C);
  this.ba = c;
  this.pa(this.ba);
  this.C.listen(this.ba, "$", this.G9);
  this.C.listen(this.ba, "ca", this.OD);
  this.C.listen(this.ba, "aa", this.h$);
  this.C.listen(this.ba, "ba", this.b$);
  this.C.listen(this.ba, "ea", this.d$);
  this.C.listen(this.ba, "da", this.c$);
  this.C.listen(this.ba, "K", this.CQ);
  this.C.listen(this.ba, "ga", this.U$);
  this.Ba = e;
  this.pa(this.Ba);
  this.C.listen(this.Ba, "K", this.QQ);
  this.C.listen(this.Ba, "na", this.RD);
  this.C.listen(this.Ba, "ra", this.i$);
  this.C.listen(this.Ba, "ka", this.F$);
  this.C.listen(this.Ba, "la", this.G$);
  this.C.listen(this.Ba, "ja", this.SD, !0);
  this.xO = !1;
  this.fs = [];
  this.ME = G();
  this.ak = G();
  this.oa = f;
  this.Be = "";
  this.ci = {};
  this.ks = this.js = null;
  this.Os = new H;
  this.Eb = this.$C = null;
  this.mi = [];
  this.uf = [];
  this.lE = {};
  this.Qv = new Tp(20);
  this.sv = this.Dz = null;
  this.aD = this.ZC = this.fx = u();
  this.kP = this.jP = !1;
  this.wt = !0;
  this.as = this.kV = !1;
  this.VP = 0;
  this.Sj = b;
  a = (a = b.Xd) && a.VA() || new vG;
  this.eD = void 0;
  this.nJ = new JH(a);
  this.C.listen(this.nJ, "Z", this.B9);
  this.nu = G();
  this.mJ = this.Vp = null;
  this.nk = [];
};
v(QK, KI);
var RK = new Yi(1280, 720);
d = QK.prototype;
d.jm = function(a, b) {
  this.ba.jm(a, b);
};
d.Nm = function(a) {
  this.oa.Kk || (this.oa = w(this.oa).VV(a), this.oa.Lk && this.ba.mp());
};
d.yA = function() {
  this.oa.Lk || (this.oa = w(this.oa).WV(), this.oa.Kk && this.ba.mp());
};
d.bf = function(a) {
  this.ba.bf(a);
};
d.$N = function() {
  return null != this.oa.af && 0 < this.oa.Of().length;
};
d.Jc = function(a) {
  if ("INITIAL" != this.getState()) {
    return I(this.a, "Starting session after already started."), !1;
  }
  this.vc("STARTING");
  if (!this.ba.Jg()) {
    return this.o.v(this.ba.K() + " preparation failed because local session failed to create an offer."), !1;
  }
  null != a && (a = a.fN("msodc"), null != a && this.ba.IH(a));
  if (!this.ba.Jc()) {
    return this.o.v(this.ba.K() + " preparation failed because because local session failed to prepare."), !1;
  }
  this.ba.bf(this.oa.Su());
  this.oa.af && this.oa.Of().length && this.o.info("Request early media for hangout " + this.oa.af);
  a = this.$N() ? this.oa.af : null;
  return this.Ba.Jc(a) ? !0 : (this.o.v("Failed to prepare session because remote session failed to prepare."), !1);
};
d.start = function(a) {
  this.xO = !0;
  if ("INITIAL" == this.getState() && !this.Jc(a)) {
    return !1;
  }
  this.$C = a;
  this.o.info(this.ya() + " starting with remote description: " + tf(a));
  var b = a.wa;
  null != b && (a = a.Bf(b.qR("opus")), this.fs = b.ed(), this.dispatchEvent(new RI(this.fs)));
  a = Br(a, function(a) {
    return !Fa(a.getName(), "h264");
  });
  this.Eb = a = this.y0(a);
  b = a.K();
  if (null == b) {
    return I(this.a, "Received remote description without session id."), this.stop(16), !1;
  }
  x(this.mi, function(b) {
    a = a.fy(b.Xy, b.VE);
  }, this);
  rb(this.mi);
  this.ib(b);
  this.Ba.start(b);
  this.ba.start(a);
  this.ba.OI(this.nk);
  this.vc("STARTED");
  b = this.CK(a);
  0 < b.length && this.ba.st(b);
  this.Kx();
  this.cw();
  this.ME.resolve();
  this.oa.Lk && this.oa.Kk && this.ba.mp();
  return !0;
};
d.Db = function() {
  this.Ba.Db();
  this.ba.Db();
};
d.Vt = function(a, b, c) {
  this.o.info("Connecting session " + this.ba.K() + " to hangout id: " + a);
  this.Be = b;
  this.ba.Y(a);
  this.ba.connect();
  this.Ba.Vt(a, b, c);
  this.ME.promise.then(function() {
    this.Ba.np(w(this.Sj.cr()));
  }, null, this);
};
d.pause = function() {
  this.o.info("Attempting to pause session " + this.ba.K());
  if ("INPROGRESS" != this.getState()) {
    return !1;
  }
  x(this.uf, function(a) {
    "d" != a.getInfo().$() && a.Sb("Ja");
  });
  if (!this.ba.pause()) {
    return this.o.error("Failed to pause session " + this.ba.K()), !1;
  }
  this.Cz();
  this.vc("PAUSED");
  return !0;
};
d.resume = function() {
  this.o.info("Attempting to resume session " + this.ba.K());
  if ("PAUSED" != this.getState()) {
    return !1;
  }
  if (!this.ba.resume()) {
    return this.o.error("Failed to resume session " + this.ba.K()), !1;
  }
  this.Ba.resume();
  x(this.uf, function(a) {
    "d" != a.getInfo().$() && a.Sb("Ia");
  });
  this.dispatchEvent("ua");
  this.vc("INPROGRESS");
  this.dispatchEvent(new QI([], [], this.ya()));
  this.Kx();
  return !0;
};
d.stop = function(a, b) {
  if ("STOPPED" == this.getState() || "FINISHED" == this.getState()) {
    return this.o.info(this.ba.K() + " ignoring call to stop with endCause: " + a + " and debug information: " + b + ", because it has already stopped."), !0;
  }
  this.o.info(this.ba.K() + " stopping because stop called with endCause: " + a + " and debug information: " + b);
  this.C.vd(this.ba, "K", this.CQ);
  this.C.vd(this.Ba, "K", this.QQ);
  this.C.vd(this.js, "F", this.SQ);
  this.C.vd(this.ks, "F", this.TQ);
  var c;
  if (c = this.oa.Kk) {
    a: {
      switch(a) {
        case 3:
        case 8:
        case 10:
        case 102:
        case 13:
        case 58:
        case 19:
        case 15:
        case 16:
        case 17:
        case 23:
        case 26:
        case 28:
        case 29:
        case 32:
        case 33:
        case 34:
          c = !0;
          break a;
        default:
          c = !1;
      }
    }
  }
  c && this.ba.mp();
  this.Cz();
  this.ba.stop(a);
  this.Ba.stop(a, b);
  this.vc("STOPPED", a, b);
  we(2000).jk(this.nu.resolve, this.nu);
  return !0;
};
d.aa = function() {
  this.stop(this.xO ? 6 : 72);
  this.nu.promise.jk(F.prototype.aa, this);
};
d.oe = function(a) {
  switch(this.getState()) {
    case "STOPPED":
    case "FINISHED":
      return I(this.a, "Adding stream after end."), !1;
  }
  var b = a.S();
  if (this.ci[this.Ln(b)]) {
    return a.Tia(), !1;
  }
  var c = this.ba.oe(a);
  if (null == c) {
    return !1;
  }
  "v" == b.W() && this.ME.promise.then(function() {
    var a = [];
    if (this.oa.Qa) {
      var b = this.Eb.sa;
      null != b && (a = b.Of());
    } else {
      a.push(new $p("", "", "v", RK, 30, !0, this.K() || void 0));
    }
    0 < a.length && this.NI(a);
  }, null, this);
  this.Ba.lY([c]);
  "va" == b.$b ? this.Ba.oO() : "v" == b.W() && this.C.listen(b, "w", this.WQ);
  c = a.X_(this.ya(), c);
  this.ci[this.Ln(b)] = c;
  this.dispatchEvent(new QI([c.getInfo()], []));
  this.C.listen(a, "T", this.tQ);
  this.o.info(this.ya() + " successfully added capture: " + tf(a.na()));
  return !0;
};
d.Rf = function() {
  return this.oa;
};
d.vf = function(a) {
  switch(this.getState()) {
    case "STOPPED":
    case "FINISHED":
      return I(this.a, "Removing stream after end."), !1;
  }
  var b = a.S();
  "va" == b.$b ? this.Ba.nO() : "v" == b.W() && this.C.vd(b, "w", this.WQ);
  this.C.vd(a, "T", this.tQ);
  this.ba.vf(a);
  if (a = this.ci[this.Ln(b)]) {
    delete this.ci[this.Ln(b)], this.dispatchEvent(new QI([], [a.getInfo()]));
  }
  return !0;
};
d.WQ = function(a) {
  a = a.target;
  "va" == a.$b ? this.Ba.oO() : "ua" == a.$b && (this.Ba.nO(), this.Ba.zV(this.ci[this.Ln(a)].getInfo()));
};
d.So = function(a) {
  this.o.info(this.ba.K() + " now has these participants: " + tf(a));
  if (this.oa.Qa) {
    if (2 < a.length) {
      this.stop(51);
      return;
    }
    if (2 > a.length && "INPROGRESS" == this.getState()) {
      this.stop(52);
      return;
    }
  }
  this.Ba.So(a);
};
d.xha = function(a) {
  this.js = a;
  this.C.listen(this.js, "F", this.SQ);
};
d.vc = function(a, b, c) {
  this.o.info(this.ba.K() + " changed state from " + this.getState() + " to " + a);
  c && this.o.info("State change due to " + c);
  this.tha(a, b, c);
};
d.Ym = function(a) {
  switch(this.getState()) {
    case "STOPPED":
    case "FINISHED":
      return I(this.a, "Changing stream requests after end."), !1;
  }
  a = jb(a, function(a) {
    return null == this.tM(new Ns(a.D(), a.Ga(), a.$()));
  }, this);
  x(a, function(a) {
    this.o.info(this.ya() + " received stream request for DOWN stream from UI: " + a);
  }, this);
  if (null != this.js) {
    return this.js.vS(a), !0;
  }
  this.MI(a);
  return !0;
};
d.SQ = function(a) {
  this.pU(a.dF);
  this.MI(a.dF);
};
d.MI = function(a) {
  this.Ba.Ym(a);
  this.lE = {};
  x(a, function(a) {
    if (a.ce()) {
      var b = a.D();
      a = a.Ga();
      this.lE[b + a] = !0;
    }
  }, this);
  x(this.uf, this.XF, this);
};
d.XF = function(a) {
  var b = a.D(), c = a.Ga();
  a.Vga(this.lE[b + c] || !1);
};
d.pU = function(a) {
  for (var b = 0;b < a.length;b++) {
    if (null != a[b].ze()) {
      for (var c = a[b].ze(), e = 0;e < c.length;e++) {
        var f = c[e], h = a[b].Ju();
        null === f || null === h || this.Os.set(f, h);
      }
    }
  }
};
d.yha = function(a) {
  this.ks = a;
  this.C.listen(this.ks, "F", this.TQ);
};
d.NI = function(a) {
  J(this.a, "Stream Requests for UP streams received from remote side: " + tf(a));
  null != this.ks ? this.ks.vS(a) : this.mO(a);
};
d.tQ = function(a) {
  var b = a.target;
  a = b.rr();
  b = b.S();
  (b = this.ci[this.Ln(b)]) ? (a = (new er(b.getInfo())).dW(a).ga(), b.zfa(a), this.Ba.zV(a)) : this.o.v(this.ya() + " muted unknown capture.");
};
d.TQ = function(a) {
  this.mO(a.dF);
};
d.mO = function(a) {
  var b = jb(a, function(a) {
    a = a.K();
    return !(null != a && this.K() != a);
  }, this);
  if (0 != b.length) {
    this.pU(b);
    this.nk = zb(jb(this.nk, function(a) {
      return -1 == mb(b, function(b) {
        return a.KP(b);
      });
    }, this), jb(b, function(a) {
      return a.ce();
    }, this));
    var c = this.oa.UZ;
    void 0 != c && (this.nk = y(this.nk, function(a) {
      return a.Gg() > c ? a.$V(c) : a;
    }));
    J(this.a, "Sending stream requests for UP streams to local session: " + tf(this.nk));
    this.ba.OI(this.nk);
    this.Eb && this.Eb.sa && (a = this.Eb.sa.IA(), (this.Eb = this.EH(this.Eb)) && this.Eb.sa && this.Eb.sa.IA() != a && this.ba.update(this.Eb));
  }
};
d.EH = function(a) {
  if (!this.F6() || !this.oa.FV) {
    return a;
  }
  var b = nb(this.nk, function(a) {
    return !Ha(a.Ga()) && null != a.kc();
  }, this);
  if (!b) {
    return a;
  }
  var b = b.kc(), c = 2500;
  180 >= b.height && 320 >= b.width && (c = 100 + Math.floor(20 * Math.random()));
  return a.Se(a.sa.TV(c));
};
d.F6 = function() {
  return qi && 0 <= Ua(kk, 56);
};
d.Ig = function() {
  return w(this.ba.Jg());
};
d.cb = function(a) {
  var b = this.tM(a);
  return null != b ? b : ob(this.uf, function(b) {
    return b.getInfo().q8(a);
  }, this);
};
d.getLocalStreams = function() {
  return Nb(this.ci);
};
d.getRemoteStreams = function() {
  return this.uf;
};
d.na = function() {
  var a = QK.X.na.call(this), b = this.Sj.cr();
  Zb(a, {audioOptions:this.oa.Ct.na(), systemInfo:b ? b.Ua() : "Unavailable"});
  return a;
};
d.tM = function(a) {
  if (a.D() != this.Be && "" != a.D()) {
    return null;
  }
  var b = jb(Nb(this.ci), function(b) {
    b = b.Mt.S();
    return a.getId() == b.getId() && a.W() == b.W();
  });
  return 1 < b.length ? (w(2 == b.length), w("v" == a.W()), b = nb(b, function(a) {
    return "va" == a.Mt.S().$b;
  }), w(b), b) : 1 == b.length ? b[0] : null;
};
d.Ln = function(a) {
  return a.getId() + a.$b;
};
d.K = function() {
  return this.Ba.K();
};
d.ya = function() {
  return this.ba.K();
};
d.mB = function(a) {
  return this.ba.mB(a);
};
d.CK = function(a) {
  return (a = a.lc()) ? a.wq() : [];
};
d.OD = function(a) {
  switch(this.getState()) {
    case "INITIAL":
      I(this.a, "Received local candidates before starting.");
      return;
    case "STOPPED":
    case "FINISHED":
      I(this.a, "Received local candiates after stopped.");
      return;
  }
  x(a.Sp, function(a) {
    2 != a.Wk() && (this.oa.Qa && "UDP" != a.Th() || 0 > mb(this.Qv.T(), function(b) {
      return b == a ? !0 : b && a ? b.Rz === a.Rz && b.uE === a.uE && b.Oe === a.Oe && b.zE === a.zE && b.HC === a.HC && b.gb === a.gb && b.sq === a.sq && b.BA === a.BA && b.CD === a.CD && b.ds === a.ds && b.es === a.es : !1;
    }) && this.Qv.add(a));
  }, this);
  null == this.Dz && (this.Dz = ue(function() {
    this.ak.promise.then(this.Dda, null, this);
    this.Dz = null;
  }, 500, this));
};
d.Dda = function(a) {
  this.o.info(this.ya() + "Sending local candidates over to the other side: " + tf(this.Qv.T()));
  this.dispatchEvent(new SI(this.Qv.T(), a));
};
d.b7 = function(a) {
  a = a.Qh();
  if (null != a) {
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      if (null != c && 2 == c.Mq()) {
        var e = null != c.Ju() ? c.Ju() : 0;
        if (null != c.Wh() && null != this.Os.get(c.Wh())) {
          e |= this.Os.get(c.Wh());
        } else {
          if (null != c.br()) {
            for (var f = c.br(), h = 0;h < f.length;h++) {
              if (null != f[h] && null != this.Os.get(f[h])) {
                e |= this.Os.get(f[h]);
                break;
              }
            }
          }
        }
        c.OS(e);
      }
    }
  }
};
d.cha = function(a) {
  (a = a.Qh()) && x(a, function(a) {
    if (a && a.Mq() == dD.Ky) {
      var b = !1, e = a.br()[0];
      if (a.Uc() == eD.AH) {
        var f = ob(this.uf, function(a) {
          return a.getInfo().yc() == e;
        }, this);
        f && (b = !f.getInfo().Hf);
      } else {
        a.Uc() == eD.pt && (f = Rb(this.ci, function(a) {
          return a.getInfo().ze()[0] == e;
        }, this)) && (b = "va" == f.Mt.S().$b);
      }
      a.Efa(b);
    }
  }, this);
};
d.B9 = function(a) {
  this.dispatchEvent(new OI(a.id));
};
d.d$ = function(a) {
  null != a.If && (this.b7(a.If), this.cha(a.If), this.eD = a.If, this.wt || (this.wt = "PAUSED" != this.getState()), this.wt && 0 >= --this.VP && (this.VP = 1, this.Ba.Kja(a.If), this.eD = void 0, this.wt = "PAUSED" != this.getState()), this.nJ.B5(a.If), this.dispatchEvent(new MI(a.If)));
};
d.c$ = function(a) {
  this.Ba.A1(a.d1, a.Gb, this.eD);
};
d.b$ = function(a) {
  this.o.info(this.ya() + " latency event: " + a.message);
  a.message == LI.IX ? (this.kV = !0, this.oa.Qa && this.oa.o0 ? (this.de.then(function(a) {
    a.Xf(3261, this.K() || void 0);
  }, null, this), this.stop(54)) : (this.as || ue(this.y6, 10000, this), this.dispatchEvent(new QI([], [], this.ya())), this.cw())) : a.message == LI.rX ? (this.as = !0, this.cw()) : a.message == LI.HX && (this.oa.Qa ? this.stop(10, "P2P session ending. Falling back to cloud.") : this.Db());
};
d.y6 = function() {
  this.as || (this.as = !0, this.cw());
};
d.cw = function() {
  "STARTED" == this.getState() && this.kV && this.as && this.vc("INPROGRESS");
};
d.G9 = function(a) {
  switch(a.label) {
    case "collections":
      this.dispatchEvent(new ys(a.payload));
      break;
    case "msodc":
      this.Ba.F9(a.label, a.payload);
      break;
    case "dataSendChannel":
      this.o.error("Received data on the broadcast data channel. Data:" + a.payload);
      break;
    default:
      this.dispatchEvent(new xs(a.Da, a.payload));
  }
};
d.Kx = function() {
  this.sv = ue(this.S5, 5000, this);
};
d.Cz = function() {
  ve(this.sv);
  this.sv = null;
};
d.h$ = function(a) {
  if (null != this.sv) {
    a.Wl != this.jP && (a.Wl ? this.o.info(this.ya() + " started receiving audio") : this.o.v(this.ya() + " stopped receiving audio!"), this.jP = a.Wl);
    a.Xl != this.kP && (a.Xl ? this.o.info(this.ya() + " started receiving video") : this.o.v(this.ya() + " stopped receiving video!"), this.kP = a.Xl);
    var b = u();
    a.Wl && (this.ZC = b);
    a.Xl && (this.aD = b);
    if (a.Wl || a.Xl) {
      this.Cz(), this.Kx();
    }
  }
};
d.S5 = function() {
  var a = u(), b = (a - this.ZC) / 1000, a = (a - this.aD) / 1000;
  this.dispatchEvent(new NI(this.K(), b, a));
  this.ZC == this.fx ? this.o.info(this.ya() + " has never received audio") : 5000 < b && this.o.info(this.ya() + " has not received audio for " + b + " seconds");
  this.aD == this.fx ? this.o.info(this.ya() + " has never received video") : 5000 < a && this.o.info(this.ya() + " has not received video for " + a + " seconds");
  this.Kx();
};
d.CQ = function(a) {
  if ("STOPPED" == this.ba.getState()) {
    J(this.a, "Stopping session because local session stopped with endCause: " + a.Gb);
    w(null != a.Gb);
    switch(this.getState()) {
      case "INITIAL":
        I(this.a, "Local session stopped before starting.");
        this.vc("STOPPED", a.Gb, a.Yi);
        return;
      case "STOPPED":
        I(this.a, "Local session stopped after already stopped.");
        return;
    }
    this.stop(a.Gb, a.Yi);
  }
};
d.QQ = function(a) {
  if ("STOPPED" == this.Ba.getState()) {
    w(null != a.Gb);
    switch(this.getState()) {
      case "INITIAL":
        I(this.a, "Remote session stopped before starting.");
        return;
      case "STOPPED":
        I(this.a, "Remote session stopped after already stopped.");
        return;
    }
    this.stop(a.Gb, a.Yi);
  }
};
d.U$ = function(a) {
  this.o.info(this.ya() + " transport state event: transport IS " + (a.Gv ? "" : "NOT ") + "writable");
  if (a.Gv) {
    if (null != this.Vp) {
      var b = Math.round((u() - this.mJ) / 1000);
      ve(this.Vp);
      this.Vp = null;
      this.de.then(function(a) {
        a.Xf(3062, this.K() || void 0, void 0, void 0, void 0, b);
      }, null, this);
    }
  } else {
    null == this.Vp && (this.mJ = u(), this.Vp = ue(t(this.stop, this, 10), 4E4), this.de.then(function(a) {
      a.Xf(3061);
    }, null, this));
  }
};
d.RD = function(a) {
  this.dispatchEvent(a);
};
d.Bja = function(a) {
  switch(this.getState()) {
    case "INITIAL":
    case "STARTING":
      I(this.a, "Remote description changed before starting.");
      return;
    case "STOPPED":
    case "FINISHED":
      I(this.a, "Remote description changed after end.");
      return;
  }
  if (this.Wda(this.$C, a)) {
    this.$C = Wb(a);
    this.o.info(this.ya() + " received modified remote description: " + tf(a));
    var b = this.CK(a);
    0 < b.length && this.ba.st(b);
    a = this.cI(a);
    a = this.EH(a);
    a = Br(a, function(a) {
      return !Fa(a.getName(), "h264");
    });
    this.Eb = this.Eb.kt(a.lc()).UV(a.hj());
    this.Eb = this.Eb.L8(a);
    a = this.Eb.wa;
    null != a && (this.fs = a.ed(), this.dispatchEvent(new RI(this.fs)));
    null == a && null == this.Eb.sa || this.ba.update(this.Eb);
  }
};
d.ib = function(a) {
  null != a && null == this.Ba.K() && (this.Ba.ib(a), this.ak.resolve(a), this.o.info("Session IDs are now set: LocalSession ID: " + this.ya() + ", RemoteSession ID: " + this.Ba.hd()), this.o.info("Note: Session " + this.ya() + " is not yet active."));
};
d.Wda = function(a, b) {
  return null != a ? this.UP(a.wa, b.wa) || this.UP(a.sa, b.sa) || this.ija(a.lc(), b.lc()) || this.j0(a.hj(), b.hj()) : !0;
};
d.UP = function(a, b) {
  return null != a || null != b ? null != a && null != b ? this.w_(a.ed(), b.ed()) || this.vX(a.gl(), b.gl()) : !0 : !1;
};
d.w_ = function(a, b) {
  if (a.length != b.length) {
    return !0;
  }
  for (var c = 0;c < a.length;c++) {
    var e = a[c], f = b[c];
    if (e.od != f.od || e.getName() != f.getName() || e.Ni != f.Ni || e.xh != f.xh || e.xg != f.xg) {
      return !0;
    }
  }
  return !1;
};
d.j0 = function(a, b) {
  if (a.length != b.length) {
    return !0;
  }
  for (var c = 0;c < a.length;c++) {
    var e = a[c], f = b[c];
    if (e.sj() != f.sj() || e.Kn() != f.Kn() || e.Yq() != f.Yq() || e.dr() != f.dr()) {
      return !0;
    }
  }
  return !1;
};
d.vX = function(a, b) {
  if (a.length != b.length) {
    return !0;
  }
  for (var c = 0;c < a.length;c++) {
    var e = a[c], f = b[c];
    if (e.Rn() != f.Rn() || e.getId() != f.getId()) {
      return !0;
    }
  }
  return !1;
};
d.ija = function(a, b) {
  return null == a && null == b ? !1 : null == a || null == b || a.Uf() != b.Uf() || a.lk != b.lk || a.Qj != b.Qj || this.RZ(a.wq(), b.wq()) ? !0 : !1;
};
d.RZ = function(a, b) {
  if (a.length != b.length) {
    return !0;
  }
  for (var c = 0;c < a.length;c++) {
    var e = a[c], f = b[c];
    if (e.Wk() != f.Wk() || e.el() != f.el() || e.W() != f.W() || e.Th() != f.Th() || e.In() != f.In() || e.vb() != f.vb() || e.sq != f.sq || e.Hn() != f.Hn() || e.Rq() != f.Rq() || e.ds != f.ds || e.es != f.es) {
      return !0;
    }
  }
  return !1;
};
d.i$ = function() {
  "STOPPED" != this.getState() ? I(this.a, "Logging finished before media stopped!") : (this.vc("FINISHED"), this.nu.resolve());
};
d.SD = function(a) {
  switch(this.getState()) {
    case "INITIAL":
      this.o.v("Received remote streams before starting.");
      return;
    case "STOPPED":
    case "FINISHED":
      I(this.a, "Received remote streams after end.");
      return;
  }
  var b = jb(a.tk, function(a) {
    return "a" != a.$() ? !0 : this.oa.et;
  }, this);
  "STARTING" == this.getState() ? (this.o.info(this.ya() + " queuing stream changes:."), this.mi.push({Xy:b, VE:a.removed})) : (this.o.info(this.ya() + " sending stream adds."), this.Eb = this.Eb.fy(b, a.removed), this.ba.update(this.Eb));
  x(a.removed, this.Fca, this);
  x(a.Mb, this.Cja, this);
  x(b, this.yY, this);
  (0 < a.removed.length || 0 < a.Mb.length || 0 < b.length) && this.dispatchEvent(new QI(zb(b, a.Mb), a.removed));
};
d.yY = function(a) {
  a = new ux(this.ba.K(), a);
  this.XF(a);
  this.uf.push(a);
};
d.Cja = function(a) {
  var b = mb(this.uf, function(b) {
    return b.getInfo().matches(a);
  }, this);
  if (-1 == b) {
    I(this.a, "Tried to update non-existant remote stream: " + a);
  } else {
    var c = new ux(this.ba.K(), a);
    this.XF(c);
    this.uf[b] = c;
  }
};
d.Fca = function(a) {
  var b = mb(this.uf, function(b) {
    return b.getInfo().matches(a);
  }, this);
  if (-1 == b) {
    I(this.a, "Tried to remove non-existant remote stream: " + a);
  } else {
    var c = this.uf[b];
    vb(this.uf, b);
    c.Sb("Ja");
  }
};
d.F$ = function(a) {
  switch(this.getState()) {
    case "INITIAL":
      this.o.v("Received remote stream requests before starting.");
      return;
    case "STOPPED":
    case "FINISHED":
      I(this.a, "Received remote stream requests after end.");
      return;
  }
  this.NI(a.XZ);
};
d.G$ = function(a) {
  this.jm(a.label, a.payload);
};
d.wF = function(a) {
  null != a && (this.o.info(this.ya() + " setting audio options to: " + tf(a.na())), this.oa = this.oa.Yja(a), this.Eb = this.cI(w(this.Eb)), this.ba.wF(this.Eb, a));
};
d.cI = function(a) {
  var b = a.wa, c = this.oa.Ct;
  c.zS || (b = b.Cca("CN"));
  var e = b.ed(), f = mb(e, function(a) {
    return a.$v("OPUS");
  });
  if (-1 != f) {
    if (!c.GS && 1 < e.length) {
      vb(e, f);
    } else {
      var h = c.HV && !(qi && !(0 <= Ua(kk, "48")));
      e[f] = (new Rq(e[f])).jt("stereo", c.KS ? "1" : "0").jt("useinbandfec", c.JV ? "1" : "0").jt("usedtx", h ? "1" : "0").ga();
    }
    b = b.qk(e);
  }
  c = c.lR;
  null != c && (b = b.qR(c));
  return a.Bf(b);
};
d.y0 = function(a) {
  if (a.wa && a.wa.Qf() != this.Ig().wa.Qf()) {
    var b = this.Ig().wa.Qf();
    a = a.Bf(a.wa.qy(b));
  }
  a.sa && a.sa.Qf() != this.Ig().sa.Qf() && (b = this.Ig().sa.Qf(), a = a.Se(a.sa.qy(b)));
  a.getData() && a.getData().Qf() != this.Ig().getData().Qf() && (b = this.Ig().getData().Qf(), a = a.Cf(a.getData().qy(b)));
  return a;
};
d.A4 = function() {
  return z(this.fs);
};
d.toString = function() {
  return "Session(Id=" + this.K() + " p2p=" + this.oa.Qa + " useAudio=" + this.oa.et + " useVideo=" + this.oa.pp + ")";
};
var SK = function() {
};
v(SK, CK);
Gq(SK, CK, 10);
SK.prototype.Rh = function(a, b, c, e) {
  return e ? new HH(a) : null;
};
var TK = function(a, b, c, e, f, h) {
  var k = BK.ea();
  f = new f(k.Rh(a, b, void 0, !0));
  h = new Jp(k.Uh(a, b), h);
  return new kG(a, k.ae(a, b), c, e, f, h, k.Mh(a, b));
};
var UK = function(a, b, c, e, f, h) {
  F.call(this);
  this.a = Nf("realtime.media.api.apiary.RemoteSession");
  this.o = b.Hk("realtime.media.api.apiary.RemoteSession");
  this.nb = a;
  this.Xd = w(b.Xd, "A ClientConfig was not registered on the Media Api before creating the RemoteSession.");
  this.Ve = c;
  this.gg = this.ra = this.Ma = this.uF = this.H = null;
  this.Qc = e;
  this.Qc.ET(8);
  this.Qc.Cs(3E3);
  this.kh = f;
  this.oa = h;
  this.o.info("Creating a new remote session with earlyMediaHangoutId=" + h.af + " P2P=" + h.Qa + " useAudio=" + h.et + " useVideo=" + h.pp);
  this.Nb = this.fb = null;
  this.cS = !1;
  this.C = new Ik(this);
  this.pa(this.C);
  this.Cc = new II;
  this.O = "INITIAL";
  this.Ik = [];
  this.Iw = [];
  this.mi = [];
  this.St = {};
  this.ho = {};
  this.Kf = {};
  this.pP = {};
  this.Tz = G();
  this.GO = G();
  this.sK = new Ne;
  this.SC = null;
  hx(a);
  a.ej(wr).then(function(a) {
    var b = [a.lb("mediaSessionStartTime", t(this.GN, this)), a.lb("mediaUpStreams", t(this.j5, this)), a.lb("mediaDownStreams", t(this.c3, this)), a.lb("mediaPerfDataPoint", t(this.i4, this))];
    this.UH(function() {
      x(b, a.PE, a);
    });
  }, function(a) {
    I(this.a, "Error getting DiagnosticDataService: " + a);
  }, this);
  this.ak = G();
  this.ak.promise.then(function() {
    this.lF();
  }, null, this);
};
v(UK, hI);
d = UK.prototype;
d.GN = function() {
  return (new Date(this.EI)).toString();
};
d.j5 = function() {
  return null != this.fb ? this.fb.na() : null;
};
d.c3 = function() {
  return null != this.Nb ? this.Nb.na() : null;
};
d.i4 = function() {
  return null != this.SC ? this.SC.Ua() : null;
};
d.vc = function(a, b, c) {
  this.O != a && (this.o.info("Session " + this.hd() + " state changed from " + this.O + " to " + a), this.O = a, this.dispatchEvent(new sx(a, b, c)));
};
d.getState = function() {
  return this.O;
};
d.Z6 = function(a, b) {
  null != this.fb ? (Pf(this.a, "Local streams collection already initiated"), w(!1, "Local streams collection already initiated")) : (this.oa.Qa ? (J(this.a, "Preparing p2p local streams collection."), this.fb = PK(this.nb, this.Xd, [b, 2, a], IH())) : (J(this.a, "Starting normal local streams collection."), this.fb = MK(this.nb, this.Xd, [b, 2, a], IH(), $J, "bb"), this.C.listen(this.fb, "R", this.YQ), this.fb.start()), this.C.listen(this.fb, "P", this.e$), this.pa(this.fb));
};
d.mba = function(a) {
  null != this.Nb ? (Pf(this.a, "Remote streams collection already initiated"), w(!1, "Remote streams collection already initiated")) : (this.oa.Qa ? (J(this.a, "Preparing p2p remote streams collection."), this.Nb = PK(this.nb, this.Xd, [a, 1, ""], IH())) : (J(this.a, "Preparing normal remote streams collection."), this.Nb = MK(this.nb, this.Xd, [a, 1, ""], IH(), $J, "bb"), this.C.listen(this.Nb, "R", this.YQ), this.C.listen(this.Nb, "Q", this.S9)), this.pa(this.Nb), this.Nb.Jc(), this.C.listen(this.Nb, 
  "P", this.SD));
};
d.Aia = function(a, b) {
  w(null != this.Nb, "Remote streams collection has not been initiated");
  var c = this.Nb, e = c.Pu();
  e.ib(a);
  e.Y(b);
  b = c.start(e);
  this.e7();
  this.oa.Qa || JI(b, "Ea", a, this).zb(function() {
    this.o.error("Stopping session " + this.hd() + " because downstream search failed.");
    this.stop(16);
  }, this);
};
d.e7 = function() {
  this.oa.Qa || (null == this.Ik ? I(this.a, "Attempting to install collection filters with null participants. setParticipants() must be called prior to this call!") : this.Nb.f7(t(function(a) {
    return pb(this.Ik, a.D() || "");
  }, this)));
};
d.Jc = function(a) {
  if ("INITIAL" != this.O) {
    return !1;
  }
  this.cS = null != a;
  this.mba(a || "");
  this.vc("STARTING");
  return !0;
};
d.start = function(a) {
  this.ib(a);
  this.vc("STARTED");
  this.Tz.promise.then(this.B1, null, this);
  return !0;
};
d.Vt = function(a, b, c) {
  this.o.info("Attempting to connect session " + this.hd() + " to Hangout: " + a);
  switch(this.O) {
    case "INITIAL":
      I(this.a, "Connect to hangout called before starting.");
      return;
    case "STOPPED":
    case "FINISHED":
      I(this.a, "Connect to hangout called after end.");
      return;
  }
  null != this.Ma ? Pf(this.a, "Multiple hangouts per RemoteSession not yet supported.") : (this.Ma = a, this.ra = b, this.gg = c, this.EI = u(), this.DI = this.XU(), this.Tz.resolve());
};
d.B1 = function() {
  w(this.H, "Remote session running with no sessionId.");
  w(this.Ma, "Remote session running with no hangoutId.");
  var a = this.gg && this.gg.nj() || "";
  this.o.info("Session " + this.hd() + " is started and connected to Hangout: " + this.Ma + " with participantId: " + this.ra + " and participantLogId: " + a);
  this.Z6(this.H, this.Ma);
  this.NH(this.H, this.Ma, this.Iw);
  rb(this.Iw);
  this.Aia(this.H, this.Ma);
  0 < this.mi.length && (this.qC(this.mi), rb(this.mi));
  this.vc("INPROGRESS");
  this.GO.resolve();
  this.wE();
};
d.So = function(a) {
  this.Ik = a;
  null != this.Nb && this.Nb.DG();
  this.oa.Qa && this.Tz.promise.then(function() {
    var b = jb(a, function(a) {
      return a != this.ra;
    }, this);
    if (1 != b.length) {
      1 < b.length && this.stop(51);
    } else {
      var c = new CF([1, 1, this.H, "8579373", this.Ma, b[0], "1", [[8579373], []]]), b = new CF([1, 2, this.H, "8579374", this.Ma, b[0], "2", [[8579374, 8579375], [["FID", [8579374, 8579375]]]]]);
      this.Nb.add(c);
      this.Nb.add(b);
    }
  }, null, this);
};
d.Db = function() {
  this.fb && this.fb.Db();
  this.Nb && this.Nb.Db();
};
d.resume = function() {
  this.ho = {};
};
d.stop = function(a, b) {
  this.o.info("Session " + this.hd() + " stopping because stop was called with endCause: " + a);
  if ("STOPPED" == this.O) {
    return !1;
  }
  null == this.K() || "STARTING" != this.O && "INPROGRESS" != this.O || (ad(this.fb), this.fb = null, ad(this.Nb), this.Nb = null, Lb(this.Kf, function(a) {
    a.cancel();
  }), this.Kf = {});
  this.vc("STOPPED", a, b);
  return !0;
};
d.np = function(a) {
  var b = this.K(), c = this.Ma, e = this.ra;
  null != b ? null != c ? (a.Y(c), null != this.Ve && a.hg(this.Ve), null != e && a.qb(e), a.zF(this.kh.SK()), a.As(this.kh.cl()), a.xx(this.kh.Pn()), this.gg && this.gg.dI(a), this.Qc.np(a, b)) : I(this.a, "UploadLogData before we have a hangoutId.") : I(this.a, "UploadLogData before we have a sessionId.");
};
d.Kja = function(a) {
  var b = this.K(), c = this.Ma;
  null != b ? null != c ? (this.SC = a = this.uja(a), this.EV(b, c, a)) : I(this.a, "Upload log data before we have a hangoutId.") : I(this.a, "Upload log data before we have a sessionId.");
};
d.A1 = function(a, b, c) {
  var e = this.K(), f = this.Ma;
  null != e ? null != f ? this.EV(e, f, c, a, b).then(function() {
    this.dispatchEvent("ra");
  }, null, this) : I(this.a, "Finalize log data uploads before we have a hangoutId.") : I(this.a, "Finalize log data uploads before we have a sessionId.");
};
d.XU = function() {
  return window.performance && window.performance.now ? window.performance.now() : u();
};
d.lF = function() {
  this.isDisposed() || "STOPPED" == this.O || "FINISHED" == this.O || ue(function() {
    var a = this.K();
    w(a);
    this.Qc.Bba(a).then(this.y$, this.x$, this);
  }, 1E4, this);
};
d.y$ = function(a) {
  this.isDisposed() || (null != a ? (a = this.Cc.gE(a, !this.oa.Qa), null != a ? (this.dispatchEvent(new PI(a)), this.lF()) : this.o.info("Session " + this.hd() + " could not parse description from session query.")) : I(this.a, "Received null session proto."));
};
d.x$ = function(a) {
  if (!this.isDisposed()) {
    switch(a.status) {
      case 4:
      case 5:
      case 7:
        this.stop(15, "ClientResponseStatus: " + a.status + " with desc: " + a.desc);
        break;
      case 11:
        this.stop(41, "ClientResponseStatus: " + a.status + " with desc: " + a.desc);
        break;
      default:
        this.lF();
    }
  }
};
d.NU = function(a, b) {
  return a.ce() != b.ce() || a.Gg() != b.Gg() || this.Wca(a.kc(), b.kc());
};
d.Wca = function(a, b) {
  return null != a || null != b ? null != a && null != b ? a.width != b.width || a.height != b.height : !0 : !1;
};
d.uja = function(a) {
  null != a.Qh() && (a = a.an(), x(a.Qh(), function(a) {
    if (2 == a.Mq()) {
      var b = a.br()[0] >>> 0, e = this.pP[b];
      null != e && (a.Kfa(e.width), a.Jfa(e.height), K(this.a, "Set last request width/height " + e.width + "/" + e.height + " for ssrc " + b + " in jmidata"));
    }
  }, this));
  return a;
};
d.EV = function(a, b, c, e, f) {
  if (null == c && null == e) {
    return je("Nothing to upload");
  }
  var h = new BC;
  h.sU(this.GN());
  h.rU(this.EI);
  var k = -2;
  null != this.DI && (k = (this.XU() - this.DI) / 1000, k = Math.round(k));
  h.XS(k);
  null != a && h.WS(a);
  null != e && h.hfa(e);
  null != f && h.uU(f);
  null != c && h.Sea([c]);
  c = new zH;
  c.AF(h);
  c.Y(b);
  null != this.ra && c.qb(this.ra);
  null != this.Ve && c.hg(this.Ve);
  c.zF(this.kh.SK());
  c.As(this.kh.cl());
  c.xx(this.kh.Pn());
  this.gg && this.gg.LY(c);
  return this.Qc.np(c, a);
};
d.lY = function(a) {
  switch(this.O) {
    case "INITIAL":
    case "STARTING":
    case "STARTED":
      Ab(this.Iw, a);
      return;
    case "STOPPED":
    case "FINISHED":
      I(this.a, "Add local streams called after end.");
      return;
  }
  var b = this.K(), c = this.Ma;
  null == b ? this.o.error("Attempting to add local streams before we have a sessionId.") : null != c ? this.NH(b, c, a) : Ab(this.Iw, a);
};
d.NH = function(a, b, c) {
  w(this.fb, "Local streams collection unavailable.");
  x(c, function(c) {
    c = (new er(c)).XG(w(this.ra)).ga();
    var e = this.Cc.yZ(a, b, c), h = this.fb.cc, k = !!nb(this.fb.get(), function(a) {
      return h.$O(e, a);
    }), k = JI(k ? this.fb.modify(e) : this.fb.add(e), "Ga", a, this);
    "d" != c.$() && k.zb(function(a) {
      this.o.error("Stopping because addLocalStream failed with error: " + a);
      this.stop(16);
    }, this);
  }, this);
};
d.zV = function(a) {
  this.GO.promise.then(t(function() {
    w(this.Ma);
    var b = a.yc(), b = this.fb.Ff(b);
    b.uc(2);
    var c = new KF;
    c.ys(a.Mn());
    b.sx(c);
    this.fb.modify(b);
  }, this));
};
d.K = function() {
  return this.H;
};
d.ib = function(a) {
  this.H != a && (this.o.info("Session id changing from " + this.hd() + " to " + (a || "{unset}")), w(null == this.H), this.H = a, this.ak.resolve());
};
d.hd = function() {
  if (null == this.H) {
    return "{unset}";
  }
  null == this.uF && (this.uF = this.H.substring(0, 6) + "{#" + (this.H.length - 7) + "}" + this.H.substring(this.H.length - 1));
  return this.uF;
};
d.oO = function() {
  if (null != this.fb) {
    var a = nb(this.fb.get(), function(a) {
      return 2 == a.$();
    });
    if (null == a) {
      this.o.v("Attempting to signal screencast started, but no video stream found!");
    } else {
      a = this.fb.Ff(a);
      a.uc(2);
      a.fG(!1);
      var b = new KF;
      b.ys(!1);
      a.sx(b);
      this.fb.modify(a);
    }
  }
};
d.nO = function() {
  if (null != this.fb) {
    var a = nb(this.fb.get(), function(a) {
      return 2 == a.$();
    });
    null == a ? this.o.v("Attempting to signal screencast ended, but no video stream found!") : (a = this.fb.Ff(a), a.uc(2), a.fG(!0), this.fb.modify(a));
  }
};
d.Ym = function(a) {
  this.St = {};
  x(a, function(a) {
    this.St[this.yJ(a)] = a;
  }, this);
  this.wE();
};
d.wE = function() {
  switch(this.O) {
    case "INITIAL":
    case "STARTING":
    case "STOPPED":
    case "FINISHED":
      return;
  }
  if (null == this.K()) {
    this.o.error("Ignoring changed stream requests because we don't have a sessionId.");
  } else {
    if (null == this.Ma) {
      this.o.error("Ignoring changed stream requests because we don't have a hangoutId.");
    } else {
      var a = {}, b = this.Cc.Oi("v");
      x(this.Nb.get(), function(c) {
        c.$() == b && (a[this.yJ(c)] = c);
      }, this);
      Lb(this.St, function(b, e) {
        if (a[e]) {
          var c = a[e], h = c.yc(), k = this.ho[h];
          if (!k || this.NU(k, b)) {
            this.ho[h] = b, this.Fz(c, b), this.Kf[e] && this.Kf[e].cancel(), delete this.Kf[e];
          }
        } else {
          J(this.a, "Skipping stream request for " + b.D() + " (no matching stream was found).");
        }
      }, this);
      Lb(a, function(a, b) {
        var c = a.yc();
        if (!this.St[b]) {
          var e = this.ho[c];
          if (e) {
            var k = e.bW(0, 0).aW(0).lh(!1);
            this.NU(e, k) && (this.ho[c] = k, this.Fz(a, k));
          } else {
            if (!this.Kf[b]) {
              var p = this.Cc.gR([a])[0].bW(0, 0).aW(0).lh(!1);
              this.Kf[b] = we(2E3);
              this.Kf[b].then(function() {
                delete this.Kf[b];
                this.ho[c] = p;
                this.Fz(a, p);
              }, void 0, this);
            }
          }
        }
      }, this);
      Lb(this.Kf, function(b, e) {
        a[e] || (b.cancel(), delete this.Kf[e]);
      }, this);
    }
  }
};
d.Fz = function(a, b) {
  if ("STOPPED" != this.O && "FINISHED" != this.O) {
    this.sK.contains(b.D()) && (b = b.mh(""));
    var c = a.yc(), e = b.ce();
    if (!b.kc() || 0 >= b.kc().height || 0 >= b.kc().width || 0 >= b.Gg()) {
      e = !1;
    }
    var f = w(this.K()), h = w(this.Ma), e = this.Cc.oZ(f, h, b, e);
    e.om(c);
    this.o.info("Session " + this.hd() + " sending stream request: " + b.toString() + " with streamId: " + c);
    e.OT(a.Jg());
    this.Nb.modify(e);
    b = b.kc();
    null != b && null != a.Jg() && null != a.Jg().Tf() && (a = a.Jg().Tf()[0] >>> 0, null != a && (this.pP[a] = b, K(this.a, "Building map: last request width/height " + b.width + "/" + b.height + " for ssrc " + a)));
  }
};
d.yJ = function(a) {
  return (a.D() || "") + "/" + (a.Ga() || "");
};
d.SD = function(a) {
  null != a.tk && 0 < a.tk.length && this.qC(a.tk);
  null != a.Mb && 0 < a.Mb.length && this.X5(a.Mb);
  null != a.removed && 0 < a.removed.length && this.d6(a.removed);
};
d.S9 = function(a) {
  var b = a.Mb ? a.Mb.length : 0;
  K(this.a, "Received early streams push notification with " + b + " modified streams");
  if (this.cS && 0 != b) {
    if ("INPROGRESS" == this.O) {
      this.qC(a.Mb);
    } else {
      if ("STARTING" == this.O || "STARTED" == this.O) {
        this.mi = zb(this.mi, a.Mb);
      }
    }
  }
};
d.qC = function(a) {
  var b = this.iE(a);
  null != b ? 0 == b.length ? I(this.a, "Got empty streamInfos: " + a) : (a = jb(b, function(a) {
    return a.D() != this.ra;
  }, this), this.wE(), x(a, function(a) {
    this.o.info("Session " + this.hd() + " notified of new remote stream: " + a.toString());
  }, this), this.dispatchEvent(new iI(a, [], []))) : I(this.a, "Failed to parse streamInfos: " + b);
};
d.X5 = function(a) {
  var b = this.iE(a);
  null == b ? I(this.a, "Failed to parse streamInfos: " + b) : 0 == b.length ? I(this.a, "Got empty streamInfos: " + a) : (x(b, function(a) {
    this.o.info("Session " + this.hd() + " received modified remote stream: " + a.toString());
  }, this), this.dispatchEvent(new iI([], b, [])));
};
d.d6 = function(a) {
  var b = this.iE(a);
  null != b ? 0 == b.length ? I(this.a, "Got empty streamInfos: " + a) : (x(b, function(a) {
    this.o.info("Session " + this.hd() + " removing remote stream: " + a.toString());
  }, this), this.dispatchEvent(new iI([], [], b))) : I(this.a, "Failed to parse streamInfos: " + b);
};
d.iE = function(a) {
  a = this.Cc.Saa(a);
  return a = y(a, function(a) {
    if ("" == a.Ga()) {
      var b;
      "a" == a.$() ? b = "1" : "v" == a.$() ? b = "2" : "d" == a.$() && (b = "3");
      a = (new er(a)).mh(w(b)).ga();
      this.sK.add(a.D());
    }
    return a;
  }, this);
};
d.e$ = function(a) {
  if (ta(a.removed) && 0 < a.removed.length) {
    0 == this.fb.get().length && (this.o.info("Session " + this.hd() + " terminating to handle Reflector failover."), this.vc("STOPPED", 26));
  } else {
    if (ta(a.Mb) && 0 < a.Mb.length) {
      var b = this.Cc.gR(a.Mb);
      null != b ? 0 == b.length ? I(this.a, "Got empty stream requests: " + a) : this.dispatchEvent(new jI(b)) : I(this.a, "Failed to parse stream requests: " + a);
    }
  }
};
d.YQ = function(a) {
  this.o.error("Stopping session " + this.K() + " because stream collection failed, with reason: " + a.reason);
  this.stop(a.Gb);
};
var VK = function(a, b, c, e) {
  var f = 0;
  l(e) && (c = c.an(), c.xT(!0), f = u() + e);
  var h = G(), k = function(a) {
    u() >= f ? h.reject(a) : ue(r, 5000);
  }, p = function(c) {
    var e = c.getResponseHeader();
    w(null != e, "Missing response header");
    1 == e.Sa() ? (c = $a(c.da(), "Resolve response missing hangout id"), h.resolve(NK(a, b, c))) : k(new fr("fatal", "backend", null, c));
  }, r = function() {
    var e = c, f = eb(BK.ea().Rh(a, b), NJ), h = f.An(), e = e.an();
    e.setRequestHeader(f.NA());
    h.ko("hangouts/resolve", e).then(p).zb(k);
  };
  r();
  return h.promise;
};
var WK = function(a, b, c, e) {
  F.call(this);
  this.a = Nf("realtime.media.session.SessionManager");
  this.Sj = b;
  this.Xd = w(this.Sj.Xd, "A ClientConfig was not registered on the Media Api before creating the SessionManager.");
  this.o = this.Sj.Hk("realtime.media.session.SessionManager");
  this.C = new Ik(this);
  this.pa(this.C);
  this.nb = a;
  this.gg = this.ra = this.Ma = null;
  this.O = "INITIAL";
  this.dh = null;
  this.Le = new H;
  Ke(rx, function(a) {
    this.Le.set(a, new Ne);
  }, this);
  this.wd = new Ne;
  this.dx = new H;
  this.yh = null;
  this.$e = new wq;
  this.Cc = new II;
  this.pja = c;
  this.R0 = e;
  this.Dp = [];
  this.Ik = [];
  this.BO = new or(this.nb);
  this.pn = this.we = null;
  this.T6();
  this.WO = G();
  this.cB = G();
  me([this.WO.promise, this.cB.promise]).then(function() {
    this.Ty(!0);
  }, null, this);
  this.de = Gx(a, yr, bC);
};
v(WK, F);
var XK = new $p("", "", "a"), YK = new $p("", "", "v", new Yi(320, 180), 30), ZK = new $p("", "", "v", RK, 30);
d = WK.prototype;
d.T6 = function() {
  hx(this.nb);
  this.nb.ej(wr).then(function(a) {
    this.we = a;
    this.pn = [this.we.lb("sessionManagerState", t(this.getState, this)), this.we.lb("p2pSessionActive", t(function() {
      return kb(this.Nh(), function(a) {
        return a.Rf().Qa;
      });
    }, this)), this.we.lb("sessions", t(function() {
      return y(this.wd.T(), function(a) {
        return a.na();
      }, this);
    }, this))];
  }, function(a) {
    I(this.a, "Error getting DiagnosticDataService: " + a);
  }, this);
};
d.aa = function() {
  x(this.wd.T(), ad);
  null != this.we && x(this.pn, this.we.PE, this.we);
  WK.X.aa.call(this);
};
d.getState = function() {
  return this.O;
};
d.Sb = function(a, b, c) {
  a != this.O && (this.o.info("SessionManager changed state from " + this.O + " to " + a), this.O = a, this.dispatchEvent(new sx(a, b, c)));
};
d.Jc = function(a) {
  if ("INITIAL" != this.getState()) {
    return !1;
  }
  this.a7();
  this.vja(a);
  this.yh = this.Ty(!1);
  if (null == this.yh) {
    return this.o.error("Failed to create the cloud session."), this.stop(16), !1;
  }
  this.Sb("STARTING");
  return !0;
};
d.start = function() {
};
d.Db = function() {
  this.dh && this.dh.Db();
  x(this.wd.T(), function(a) {
    a.Db();
  });
};
d.connect = function(a, b, c) {
  if ("STARTING" != this.getState() && "INPROGRESS" != this.getState()) {
    return !1;
  }
  this.Ma = a;
  this.ra = b;
  this.gg = c;
  this.o.info("Connecting to hangoutId: " + a + ", with participantId: " + b + " and sessionLogData: " + c);
  this.cB.resolve(this.Ma);
  var e = zb(this.Nh(), this.CB(), this.iv());
  x(e, function(e) {
    e.Vt(a, b, c);
  }, this);
  return !0;
};
d.vja = function(a) {
  this.o.info("Updating desfault options to: " + tf(a.na()));
  this.$e = a;
  this.$e.Qa && this.WO.resolve(!0);
  if (null == this.Ma || Ha(this.Ma)) {
    this.Ma = this.$e.af;
  }
  null == this.Ma || Ha(this.Ma) || this.cB.resolve(this.Ma);
};
d.D_ = function(a, b) {
  b.Qa || (b.yd() ? a = a.eW(new Np("call/" + b.yd(), 1, null, "collections")) : I(this.a, "Collections' push channel not added. ClientResource not available"), b.KV && (a = a.eW(new Np("msodc", 3, null, "msodc"))));
  return a;
};
d.y4 = function() {
  var a = {};
  x(this.wd.T(), function(b) {
    b.Rf().Qa || (a[b.ya()] = b.K());
  });
  return a;
};
d.getLocalStreams = function() {
  var a = [];
  x(this.Nh(), function(b) {
    Ab(a, b.getLocalStreams());
  });
  return a;
};
d.getRemoteStreams = function() {
  var a = [];
  x(this.Nh(), function(b) {
    Ab(a, b.getRemoteStreams());
  });
  return a;
};
d.Nm = function(a) {
  x(this.wd.T(), function(b) {
    b.Nm(a);
  });
  this.$e = this.$e.VV(a);
};
d.yA = function() {
  this.$e.Lk || (x(this.wd.T(), function(a) {
    a.yA();
  }), this.$e = this.$e.WV());
};
d.bC = function() {
  return this.$e;
};
d.oe = function(a) {
  this.o.info("Adding capture: " + tf(a.na()));
  var b = !0;
  x(this.BK(), function(c) {
    c = c.oe(a);
    b = b && c;
  });
  "va" == a.S().$b && (b = !0);
  b ? this.Dp.push(a) : this.vf(a);
  return b;
};
d.vf = function(a) {
  var b = !0;
  x(this.BK(), function(c) {
    w(a);
    b = b && c.vf(a);
  });
  return b = b && wb(this.Dp, a);
};
d.Cn = function() {
  return this.Dp.concat();
};
d.cb = function(a, b) {
  var c = zb(this.Nh(), this.iv(), this.fC());
  if (null != b) {
    var e = nb(this.wd.T(), function(a) {
      return a.ya() == b;
    });
    e && c.unshift(e);
  }
  if (0 == c.length) {
    return this.o.info("No active session to get stream from to render source: " + a), null;
  }
  for (e = 0;e < c.length;e++) {
    var f = c[e], h = f.cb(a);
    if (null != h) {
      return this.o.info("Using stream: " + h.getInfo() + " from " + f.ya() + " to render source: " + a), h;
    }
  }
  this.o.v("Unable to find stream to use to render source: " + a);
  return null;
};
d.Ym = function(a) {
  var b = zb(this.fC(), this.iv(), this.Nh());
  x(b, function(b) {
    b.Ym(a);
  });
};
d.So = function(a) {
  x(this.wd.T(), function(b) {
    b.So(a);
  }, this);
  this.Ik = a;
};
d.stop = function(a, b) {
  this.o.info("Stopping video call because stop called with endCause: " + a);
  if ("INITIAL" == this.getState() || "STOPPED" == this.getState() || "FINISHED" == this.getState()) {
    return !1;
  }
  this.Sb("STOPPED", a, b);
  x(this.wd.T(), function(c) {
    c.stop(a, b);
  });
  return !0;
};
d.Ty = function(a) {
  var b = this.Q4(this.$e, a);
  if (null == b) {
    return null;
  }
  var c = this.uZ(b);
  if (null == c) {
    return this.o.v("Failed to build session."), null;
  }
  var e = this.D_(c.Ig(), b);
  a = this.Cc.tZ(e, b.af, b.Of(), b.yd(), a);
  if (null == a) {
    return this.o.v("Failed to parse session info."), null;
  }
  a = this.dh.add(a);
  a.then(function(a) {
    w(null != b);
    w(null != c);
    this.y5(c, a, b);
    return a;
  }, null, this).zb(function(a) {
    this.o.v("Failed to add session to collection. Error: " + a);
    c.stop(16);
    throw a;
  }, this);
  JI(a, "Fa", null, this);
  return c;
};
d.c0 = function(a) {
  a.xd() || (a = a.py(this.BO.xd()));
  var b = this.Sj.bu(this.nb, this.R1(a), a);
  if (a.Qa && 2 < this.Ik.length) {
    return this.o.info("Not creating p2p session due to too many participants."), null;
  }
  var c = this.Sj.du(this.nb, a);
  return new QK(this.nb, this.Sj, b, c, a);
};
d.uZ = function(a) {
  a = this.c0(a);
  if (null == a) {
    return null;
  }
  this.wd.add(a);
  this.Le.get(a.getState()).add(a);
  this.dx.set(a.ya(), a.getState());
  a.xha(this.R0);
  a.yha(this.pja);
  a.So(this.Ik);
  this.C.listen(a, ["t", "u", "sa", "va", "qa"], this.dispatchEvent);
  this.C.listen(a.Ba, "ja", this.dispatchEvent);
  this.C.listen(a, "K", this.TD);
  this.C.listen(a, "pa", this.OD);
  this.C.listen(a, "na", this.RD);
  this.C.listen(a, "oa", this.Z9);
  return a;
};
d.Bia = function(a, b) {
  a.start(b);
  x(this.Dp, function(b) {
    a.oe(b);
  });
};
d.Via = function(a) {
  this.Le.get(a.getState()).remove(a);
  this.dx.remove(a.ya());
  this.wd.remove(a);
  ad(a);
};
d.BK = function() {
  return zb(this.v3(), this.fC(), this.iv(), this.CB(), this.Nh());
};
d.CB = function() {
  return this.Le.get("PAUSED").T();
};
d.Nh = function() {
  return this.Le.get("INPROGRESS").T();
};
d.iv = function() {
  return this.Le.get("STARTED").T();
};
d.fC = function() {
  return this.Le.get("STARTING").T();
};
d.v3 = function() {
  return this.Le.get("INITIAL").T();
};
d.y5 = function(a, b, c) {
  J(this.a, "Session add response received.");
  1 > b.length || !(b[0] instanceof WH) ? (this.o.info("Stopping remote session due to receiving null session proto."), a.stop(16)) : (b = b[0], null != b ? (c = this.Cc.gE(b, !c.Qa), null != c ? this.rC(a, c) : (this.o.info("Stopping session due to inability to parse session proto."), a.stop(16))) : (this.o.info("Stopping session due to inability to parse session proto."), a.stop(16)));
};
d.a7 = function() {
  var a = this.nb, b = this.Xd, c = new Oq(WH, [], [], [WH.prototype.K], [WH.prototype.ib], gv, [], [], [gv.prototype.K], [gv.prototype.ib]), e = BK.ea(), f = new YJ(e.Rh(a, b)), h = new Jp(e.Uh(a, b), "$a");
  this.dh = new eC(a, e.ae(a, b), [], c, f, h, e.Mh(a, b));
  this.pa(this.dh);
  this.dh.Jc();
  this.C.listen(this.dh, "P", this.M$);
  this.C.listen(this.dh, "R", this.N$);
};
d.R1 = function(a) {
  return "c" + Math.round(2147483648 * Math.random()) + Math.round(2147483648 * Math.random()) + (a.Qa ? "_P2P" : "_NMS");
};
d.Q4 = function(a, b) {
  var c = a.af || this.Ma;
  null != c && a.$H ? (a = a.Im([XK, YK]), a = a.YV(c)) : a = a.YV(null);
  a = a.lka(b);
  if (b) {
    a = a.mka(!1);
    if (null == this.yh) {
      return Pf(this.a, "P2P session starting first! This is bad!"), w(!1), null;
    }
    a = a.ika(!1);
    a = a.Im([XK, ZK]);
  }
  return a;
};
d.M$ = function(a) {
  null != a.Mb && 0 < a.Mb.length && this.Y5(a.Mb);
  null != a.removed && 0 < a.removed.length && this.e6(a.removed);
};
d.N$ = function(a) {
  this.o.error("Stopping video call because session collection failed, with reason: " + a.reason);
  this.stop(a.Gb);
};
d.Y5 = function(a) {
  x(a, function(a) {
    var b = nb(this.wd.T(), function(b) {
      return a.K() == b.K();
    });
    if (b) {
      var e = !b.Rf().Qa, e = this.Cc.gE(a, e);
      null != e && this.rC(b, e);
    } else {
      Pf(this.a, "Received modification for a session that we don't have!");
    }
  }, this);
};
d.e6 = function(a) {
  x(a, function(a) {
    var b = nb(this.wd.T(), function(b) {
      return a.K() == b.K();
    });
    b ? b.stop(25) : this.o.error("Received removal of a session that we don't have! Session id: " + a.K());
  }, this);
};
d.RD = function(a) {
  this.rC(a.currentTarget, a.sessionDescription);
};
d.rC = function(a, b) {
  var c = a.getState(), e = "INITIAL" == c, f = "INITIAL" == c || "STARTING" == c, c = "INITIAL" != c && "STARTING" != c;
  b.K6() || (f = e = !1);
  var h = b.lc();
  null != h && null != h.lk && null != h.Qj && 0 != h.wq().length || (f = !1);
  h = b.K();
  null != h && a.ib(h);
  e && (this.o.info("Received remote description for session " + a.Ba.hd() + " with sufficient data to allow session preparation."), a.Jc(b));
  f ? (this.o.info("Received remote description for session " + a.Ba.hd() + " with sufficient data to allow starting the session."), this.Bia(a, b)) : c && a.Bja(b);
};
d.Z9 = function(a) {
  if ("INPROGRESS" != this.getState()) {
    I(this.a, "Ingress bandwidth updated before started.");
  } else {
    var b = this.BO.xd(), c = new Ou;
    -1 != b.El && c.LT(b.El);
    -1 != b.ei && c.DT(b.ei);
    -1 != b.sm && c.qU(b.sm);
    b = new aH;
    b.GT(c);
    c = new WH;
    c.ib(a.sessionId);
    a = this.Ma || this.$e.af;
    null === a || c.tT([a]);
    c.BF([b]);
    this.dh.modify(c);
  }
};
d.OD = function(a) {
  switch(this.getState()) {
    case "INITIAL":
      I(this.a, "Received local candidates before starting.");
      return;
    case "STOPPED":
    case "FINISHED":
      I(this.a, "Received local candiates after end.");
      return;
  }
  var b = a.target, c = [];
  x(a.Sp, function(a) {
    a = this.Cc.yI(a);
    c.push(a);
    a.vh();
  }, this);
  if (!(1 > c.length)) {
    var e = new WA;
    e.YS(c);
    var f = b.Ig().lc();
    if (f && (e.wU(f.lk), e.XT(f.Qj), f.xe())) {
      var h = new aB;
      h.PS(f.xe().split(" ")[0]);
      h.oT(f.xe().split(" ")[1]);
      e.nU(h);
    }
    var k = [];
    x(b.Ig().hj(), function(a) {
      k.push(this.Cc.zI(a));
    }, this);
    b = new aH;
    b.uc(4);
    b.$F(e);
    b.dT(k);
    e = new WH;
    e.ib(a.sessionId);
    e.BF([b]);
    this.dh.modify(e);
  }
};
d.TD = function(a) {
  var b = a.target, c = this.dx.get(b.ya()), e = b.getState();
  if (c != e) {
    this.dx.set(b.ya(), e);
    this.Le.get(c).remove(b);
    this.Le.get(e).add(b);
    switch(e) {
      case "STARTED":
        this.k6(b);
        break;
      case "INPROGRESS":
        this.j6(b);
        break;
      case "STOPPED":
        w(null != a.Gb);
        this.m6(b, a.Gb, a.Yi);
        break;
      case "FINISHED":
        this.i6(b);
    }
    this.dispatchEvent(a);
  }
};
d.k6 = function(a) {
  null != this.Ma && null != this.ra && null != this.gg && a.Vt(this.Ma, this.ra, this.gg);
};
d.j6 = function(a) {
  if ("INITIAL" == this.getState() || "STOPPED" == this.getState() || "FINISHED" == this.getState()) {
    Pf(this.a, "Should not have new active sessions now.");
  } else {
    "STARTING" == this.getState() && this.Sb("INPROGRESS");
    a.wF(this.$e.Ct);
    var b = a.ya(), c = this.Nh();
    x(c, function(c) {
      b != c.ya() && (c.pause(), this.XE(c, a));
    }, this);
  }
};
d.m6 = function(a, b, c) {
  x(this.Dp, function(b) {
    b.AG(a.ya());
  });
  if (26 == b) {
    b = this.yh, this.yh = this.Ty(!1), b && (this.yh ? this.XE(b, this.yh) : this.o.error("Cloud session" + b.K() + " to cloud handoff failed"));
  } else {
    55 == b && this.de.then(function(b) {
      b.Xf(3262, a.K() || void 0);
    }, null, this);
    var e = this.Le.get("STOPPED").ja() + this.Le.get("FINISHED").ja();
    this.wd.ja() == e ? "STOPPED" != this.O && (this.o.info("All sessions now stopped."), this.stop(b, c)) : 0 == this.Nh().length && x(this.CB(), function(b) {
      b.resume();
      this.XE(a, b);
    }, this);
  }
};
d.i6 = function(a) {
  this.Via(a);
  this.wd.ja() == this.Le.get("FINISHED").ja() && ("STOPPED" != this.O ? I(this.a, "Session Manager finished before stopping.") : this.Sb("FINISHED"));
};
d.XE = function(a, b) {
  var c;
  c = a.Rf().Qa ? 5 : b.Rf().Qa ? 4 : 6;
  var e = new cy;
  e.gh(c);
  e.ifa(0);
  e.Iga(a.K());
  e.lga(b.K());
  e.Cea(u());
  var f = new zH;
  f.ufa(e);
  a.Ba.np(f);
  4 == c && this.de.then(function(a) {
    a.Xf(3260, b.K() || void 0);
  }, null, this);
  this.o.info("Handing off from " + (a.Rf().Qa ? "P2P" : "RF") + " session to " + (b.Rf().Qa ? "P2P" : "RF") + " session");
};
var aL = function(a, b, c, e) {
  a = BK.ea().Rh(a, b, void 0, !0);
  return eb(a, HH).fQ.then(function(a) {
    return $K(a, c, e);
  });
}, $K = function(a, b, c) {
  b = bL(b);
  return cL(a, b, c).then(function(a) {
    return a.bd;
  });
}, cL = function(a, b, c) {
  var e = {};
  c && (e["X-Goog-Meeting-Botguardid"] = c);
  return a.Yv(e, "google.rtc.meetings.v1.MeetingSpaceService", "ResolveMeetingSpace", b, Jw);
}, bL = function(a) {
  var b = new Vw;
  b.eh(a);
  return b;
};
var dL = function(a) {
  bK.call(this, a);
};
v(dL, bK);
Gq(dL, bK, 1);
dL.prototype.du = function(a, b) {
  var c = w(this.yt.Xd, "ClientConfig is missing"), e = new jJ(c.An(), w(c.yd()), w(c.Sh()), c.Lg(), void 0, c.dd());
  a = new UK(a, this.yt, c.yd(), e, c.fr(), b);
  a.pa(e);
  return a;
};
var eL = function(a, b) {
  Ik.call(this);
  this.ge = a;
  this.xa = b;
  this.me = null;
  this.Jb = [];
  this.wC = this.zC = !1;
  this.Cc = new II;
  this.cD = null;
};
v(eL, Ik);
d = eL.prototype;
d.aa = function() {
  x(this.Jb, function(a) {
    this.ge.vf(a);
  }, this);
  this.Jb = [];
  this.me = null;
  eL.X.aa.call(this);
};
d.oe = function(a) {
  this.listen(a.S(), ["w", "x", "y", "z"], this.SP);
  this.Jb.push(a);
  this.ge.oe(a);
  this.Sz();
};
d.vf = function(a) {
  this.vd(a.S(), ["w", "x", "y", "z"], this.SP);
  wb(this.Jb, a);
  this.ge.vf(a);
  this.Sz();
};
d.sO = function(a) {
  return pb(this.Jb, a);
};
d.Sz = function() {
  var a = this.me, b = this.Jb[this.Jb.length - 1] || null;
  x(this.Jb, function(a) {
    "va" == a.S().$b && (b = a);
  });
  a != b && (this.me = b, this.oD());
};
d.SP = function(a) {
  var b = this.me;
  this.Sz();
  b && b == this.me && a.target == b.S() && this.oD();
};
d.oD = function() {
  this.isDisposed() || (this.wC ? this.zC = !0 : (this.zC = !1, this.wC = !0, me([this.xa.ka, this.xa.Da, this.xa.Lc]).then(function(a) {
    this.yba(a[0], a[1], a[2]);
  }, this.tw, this)));
};
d.yba = function(a, b, c) {
  var e;
  null != this.me ? (e = this.Cc.vZ(a, this.me.S()), e.Y(a), e.qb(b), e.fh(this.me.S().getId()), this.cD = e) : this.cD && (e = this.cD, e.ye().ys(!0));
  e ? c.add(e).then(this.tw, this.tw, this) : this.tw();
};
d.tw = function() {
  this.wC = !1;
  this.zC && this.oD();
};
var fL = function(a, b, c, e, f) {
  F.call(this);
  this.Cc = new II;
  this.Be = a;
  this.ih = b;
  this.Bw = c;
  this.ge = f;
  this.Dc = new H;
  this.yl = new Os;
  this.C = new Ik(this);
  this.pa(this.C);
  this.C.listen(this.ih, "P", this.ym);
  this.C.listen(this.ge, ["va", "K"], this.ym);
  x(e, this.Ep, this);
};
v(fL, ox);
d = fL.prototype;
d.Ep = function(a) {
  this.yl.add(a);
};
d.RE = function(a) {
  this.yl.remove(a);
};
d.ar = function(a) {
  return a == this.Be ? this.yl : this.Dc.get(a, null);
};
d.zs = function(a) {
  var b = new Ne;
  x(a, function(a) {
    if (a != this.Be && (b.add(a), !this.Dc.Ra(a))) {
      var c = new Os;
      this.Dc.set(a, c);
      this.dispatchEvent(new Rs("C", $a(a), c));
    }
  }, this);
  x(this.Dc.ub(), function(a) {
    if (!b.contains(a)) {
      var c = this.Dc.get(a);
      this.Dc.remove(a) && this.dispatchEvent(new Rs("D", a, c));
    }
  }, this);
  this.ym();
};
d.ym = function() {
  var a = new Ne;
  x(this.ih.get(), function(b) {
    this.tC(b);
    a.add(this.cj(w(b.D()), w(b.Ga())));
  }, this);
  x(this.ge.getRemoteStreams(), function(b) {
    var c = b.D(), e = b.Ga();
    if (c != this.Be && !a.contains(this.cj(c, e))) {
      b = b.getInfo().$();
      var f = this.Dc.get(c);
      null != f && !f.vn(b, e, c) && f.add(new Ns(c, e, b));
      a.add(this.cj(c, e));
    }
  }, this);
  x(this.Dc.T(), function(b) {
    x(b.getSources(), function(c) {
      a.contains(this.cj(w(c.D()), w(c.getId()))) || b.remove(c);
    }, this);
  }, this);
};
d.cj = function(a, b) {
  return a + "/" + b;
};
d.tC = function(a) {
  var b = this.Dc.get(a.D());
  if (null != b && (a = this.Cc.fR(a).source, null != a)) {
    var c = b.vn(a.W(), a.getId(), a.D());
    null != c ? (c.aT(a.$b), c.iU(a.Fo), c.Sb(a.getState()), c.eG(a.pC())) : b.add(a);
  }
};
var hL = function(a, b, c) {
  F.call(this);
  this.ge = w(a);
  this.Gx = w(b);
  this.Be = w(c);
  this.a = Nf("realtime.media.detours.FreezeDetector");
  this.C = new Ik(this);
  this.pa(this.C);
  this.Ns = new H;
  this.sc = new H;
  this.sc.set(c, new gL);
  var e = this.Gx.ar(c);
  null != e && x(e.getSources(), function(a) {
    a = e.vn(a.W(), a.getId(), a.D());
    null == a || "v" != a.W() && "a" != a.W() || (this.iV(a), (a = this.ge.cb(a)) && this.jV(a.getInfo()));
  }, this);
  this.C.listen(this.ge, "qa", this.T5).listen(this.ge, "va", this.v6).listen(this.Gx, "C", this.r6).listen(this.Gx, "D", this.s6).listen(e, "A", this.rO).listen(e, "B", this.q6);
};
v(hL, F);
d = hL.prototype;
d.T5 = function(a) {
  a = a.If.Qh();
  if (null != a) {
    var b = u();
    x(a, function(a) {
      var c = a.Wh();
      if (null != c && this.Ns.Ra(c)) {
        var f = this.Ns.get(c);
        if (this.sc.Ra(f)) {
          var h = "", f = this.sc.get(f), k = a.Mq(), p = a.Uc(), r;
          k == dD.Ky ? (h = Ra(h, "Video "), r = f.cp.get(c)) : (h = Ra(h, "Audio "), r = f.bp.get(c));
          null != r && (k == dD.KX ? (k = 0, p == eD.pt ? (k = a.XK() - r.xz, h = Ra(h, "Sent: ")) : p == eD.AH && (k = a.WK() - r.xz, h = Ra(h, "Received: ")), 0 <= k && b > r.zj ? (0 != r.zj ? r.bitRate = 8000 * k / (b - r.zj) : "ya" == f.rh && (r.bitRate = 1500), r.zj = b, r.xz = p == eD.pt ? a.XK() : a.WK(), h = Ra(h, r.bitRate.toString(), " Bps")) : (r.bitRate = 1500, h = Ra(h, "Negative bits or time"))) : k == dD.Ky && (a = a.l3(), 0 == r.zj && "ya" == f.Fi && (a = 24), 0 <= a && b > r.zj ? 
          (r.WC = r.Dg, r.Dg = a, h = Ra(h, p == eD.pt ? "Sent: " : "Received: ", a.toString(), " Fps")) : (r.WC = r.Dg, r.Dg = 15, h = Ra(h, "Negative fps or time")), r.zj = b), h = Ra(h, " Ssrc: ", c), J(this.a, h));
        } else {
          I(this.a, "Received media info for unknown participant with id: " + f);
        }
      }
    }, this);
    this.d_(b);
  }
};
d.d_ = function(a) {
  x(this.sc.ub(), function(b) {
    var c = this.sc.get(b);
    "xa" != c.rh && this.RI(b, c, a, "a");
    "xa" != c.Fi && this.RI(b, c, a, "v");
  }, this);
};
d.RI = function(a, b, c, e) {
  var f = null;
  "a" == e ? f = b.bp.T() : "v" == e && (f = b.cp.T());
  var h = !0, k = 0;
  x(f, function(a) {
    "a" == e ? (1500 <= a.bitRate && (h = !1), a.bitRate > k && (k = a.bitRate)) : "v" == e && (24 <= a.Dg || 24 <= a.WC && 15 <= a.Dg ? h = !1 : "va" == b.ny && 0 < a.Dg && (h = !1), a.Dg > k && (k = a.Dg));
  }, this);
  h ? 0 < f.length && ("a" == e && "ya" == b.rh && 11000 < c - b.Xx ? b.Qm || (b.Qm = !0, this.dispatchEvent(new iL("tb", a))) : "v" == e && "ya" == b.Fi && 11000 < c - b.Xs && !b.sp && (b.sp = !0, this.dispatchEvent(new iL("ub", a)))) : ("a" == e && b.Qm ? (b.Qm = !1, this.dispatchEvent(new iL("vb", a))) : "v" == e && b.sp && (b.sp = !1, this.dispatchEvent(new iL("wb", a))), this.Tda(e, b, k, c) && this.dispatchEvent(new iL("a" == e ? "yb" : "xb", a)));
};
d.Tda = function(a, b, c, e) {
  return "a" == a && "za" == b.rh && 2000 <= c && 11000 < e - b.Xx || "v" == a && "za" == b.Fi && 11000 < e - b.Xs ? !0 : !1;
};
d.v6 = function(a) {
  x(a.Xy, function(a) {
    this.jV(a);
  }, this);
  x(a.VE, function(a) {
    this.J1(a);
  }, this);
};
d.jV = function(a) {
  var b = "" == a.D() ? this.Be : a.D();
  if (this.sc.Ra(b)) {
    var c = this.sc.get(b);
    x(a.ze(), function(e) {
      "a" == a.$() ? (c.bp.Ra(e) || c.bp.set(e, new jL), this.Ns.set(e, b)) : "v" == a.$() && (c.cp.Ra(e) || c.cp.set(e, new kL), this.Ns.set(e, b));
    }, this);
  } else {
    I(this.a, "Attempted to track new stream for unknown participant with id: " + b);
  }
};
d.J1 = function(a) {
  var b = "" == a.D() ? this.Be : a.D();
  if (this.sc.Ra(b)) {
    var c = this.sc.get(b);
    x(a.ze(), function(b) {
      "a" == a.$() ? c.bp.remove(b) : "v" == a.$() && c.cp.remove(b);
      this.Ns.remove(b);
    }, this);
  } else {
    I(this.a, "Attempted to forget stream for unknown participant with id: " + b);
  }
};
d.t6 = function(a) {
  var b = "" == a.D() ? this.Be : a.D();
  if (this.sc.Ra(b)) {
    var c = this.sc.get(b);
    "a" == a.W() ? (c.Xx = u(), "ya" == c.rh && "za" == a.getState() && c.Qm && (c.Qm = !1, this.dispatchEvent(new iL("vb", b))), c.rh = a.getState()) : "v" == a.W() && (c.Xs = u(), "ya" == c.Fi && "za" == a.getState() && c.sp && (c.sp = !1, this.dispatchEvent(new iL("wb", b))), c.Fi = a.getState());
  } else {
    I(this.a, "Source state changed for unknown participant with id: " + b);
  }
};
d.p6 = function(a) {
  var b = "" == a.D() ? this.Be : a.D();
  this.sc.Ra(b) ? (b = this.sc.get(b), "v" == a.W() && ("va" == b.ny && "ua" == a.$b && (b.Xs = u()), b.ny = a.$b)) : I(this.a, "Source content changed for unknown participant with id: " + b);
};
d.r6 = function(a) {
  this.sc.set(a.D(), new gL);
  this.C.listen(a.ar(), "A", this.rO);
};
d.rO = function(a) {
  this.iV(a.source);
};
d.s6 = function(a) {
  this.sc.Ra(a.D()) ? (a = this.sc.get(a.D()), a.rh = "xa", a.Fi = "xa", a.bp.clear(), a.cp.clear()) : I(this.a, "Sourceset removed for unknown participant with id: " + a.D());
};
d.q6 = function(a) {
  var b = "" == a.source.D() ? this.Be : a.source.D();
  this.sc.Ra(b) ? (b = this.sc.get(b), "a" == a.source.W() ? b.rh = "xa" : "v" == a.source.W() && (b.Fi = "xa")) : I(this.a, "Source removed from unknown participant  with id: " + b);
};
d.iV = function(a) {
  var b = "" == a.D() ? this.Be : a.D();
  this.sc.Ra(b) ? (b = this.sc.get(b), "a" == a.W() ? (b.rh = a.getState(), b.Xx = u()) : "v" == a.W() && (b.Fi = a.getState(), b.Xs = u(), b.ny = a.$b, this.C.listen(a, "w", Ba(this.p6, a))), this.C.listen(a, "y", Ba(this.t6, a))) : I(this.a, "Attempted to track a source associated with an unknown participant with id: " + b);
};
var jL = function() {
  this.bitRate = this.zj = this.xz = 0;
}, kL = function() {
  this.Dg = 0;
  this.WC = 24;
  this.zj = 0;
}, gL = function() {
  this.Fi = this.rh = "ya";
  this.ny = "wa";
  this.sp = this.Qm = !1;
  this.Xx = this.Xs = 0;
  this.bp = new H;
  this.cp = new H;
}, iL = function(a, b) {
  E.call(this, a);
  this.Da = b;
};
v(iL, E);
var lL = function(a, b, c, e, f) {
  F.call(this);
  this.Cc = new II;
  this.hw = a;
  this.ih = b;
  this.Gd = c;
  this.ge = f;
  this.Dc = new H;
  this.yl = new Os;
  this.C = new Ik(this);
  this.pa(this.C);
  this.C.listen(this.ih, "P", this.ym);
  this.C.listen(this.ge, ["va", "K"], this.ym);
  x(e, this.Ep, this);
};
v(lL, ox);
d = lL.prototype;
d.Ep = function(a) {
  this.yl.add(a);
};
d.RE = function(a) {
  this.yl.remove(a);
};
d.ar = function(a) {
  return a == this.hw ? this.yl : this.Dc.get(a, null);
};
d.zs = function(a) {
  var b = new Ne;
  x(a, function(a) {
    if (a != this.hw && (b.add(a), !this.Dc.Ra(a))) {
      var c = new Os;
      this.Dc.set(a, c);
      this.dispatchEvent(new Rs("C", $a(a), c));
    }
  }, this);
  x(this.Dc.ub(), function(a) {
    if (!b.contains(a)) {
      var c = this.Dc.get(a);
      this.Dc.remove(a) && this.dispatchEvent(new Rs("D", a, c));
    }
  }, this);
  this.ym();
};
d.ym = function() {
  var a = new Ne;
  x(this.ih.get(), function(b) {
    this.tC(b);
    a.add(this.cj(w(b.D()), w(b.Ga())));
  }, this);
  var b = zb(this.ge.getRemoteStreams(), this.ge.getLocalStreams());
  x(b, function(b) {
    var c = b.D() || this.hw, f = b.Ga(), h = this.cj(c, f);
    if (!a.contains(h)) {
      a.add(h);
      h = this.ar(c);
      null == h && (h = new Os, this.Dc.set(c, h));
      b = b.getInfo();
      var k = b.$(), p = b.Mn() ? "za" : "ya", r = h.vn(k, f, c);
      null == r ? (r = new Ns(c, f, k, void 0, p), h.add(r)) : "" != r.D() && r.D() != this.hw && r.Sb(p);
      r.Qea(b.Hf);
    }
  }, this);
  x(this.Dc.T(), function(b) {
    x(b.getSources(), function(c) {
      a.contains(this.cj(w(c.D()), w(c.getId()))) || b.remove(c);
    }, this);
  }, this);
};
d.cj = function(a, b) {
  return a + "/" + b;
};
d.tC = function(a) {
  var b = this.Dc.get(a.D());
  if (null != b && (a = this.Cc.fR(a).source, null != a)) {
    var c = b.vn(a.W(), a.getId(), a.D());
    null != c ? (c.aT(a.$b), c.iU(a.Fo), c.Sb(a.getState()), c.eG(a.pC())) : b.add(a);
  }
};
var mL = function(a) {
  F.call(this);
  this.AA = this.ra = null;
  this.a = Nf("realtime.media.detours.DetoursManager");
  this.C = new Ik(this);
  this.pa(this.C);
  this.de = Gx(a, yr, bC);
};
v(mL, F);
mL.prototype.connect = function(a, b, c) {
  this.AA = new hL(a, b, c);
  this.pa(this.AA);
  this.ra = c;
  this.C.listen(this.AA, "tb ub vb wb yb xb".split(" "), this.M5);
};
mL.prototype.M5 = function(a) {
  var b = "" == a.Da || a.Da == this.ra ? "Self" : a.Da;
  "tb" == a.type ? (J(this.a, b + " Audio Frozen."), this.Wv(3325)) : "ub" == a.type ? (J(this.a, b + " Video Frozen."), this.Wv(3324)) : "vb" == a.type ? (J(this.a, b + " Audio Unfrozen."), this.Wv(3330)) : "wb" == a.type ? (J(this.a, b + " Video Unfrozen."), this.Wv(3329)) : "yb" == a.type ? J(this.a, b + " Audio Sent While Muted.") : "xb" == a.type && J(this.a, b + " Video Sent While Muted.");
  this.dispatchEvent(a);
};
mL.prototype.Wv = function(a) {
  this.de.then(function(b) {
    b.Xf(a);
  }, null, this);
};
var oL = function(a, b) {
  F.call(this);
  this.Pr = new hs;
  this.onConnect = this.Pr.provider;
  this.xQ = new hs;
  this.onDisconnect = this.xQ.provider;
  this.QD = new hs;
  this.KQ = this.QD.provider;
  this.mb = new nL(a, this);
  this.pa(this.mb);
  this.DR = b;
  this.Pc = w(this.DR.Xd, "A ClientConfig was not registered on the Media Api before creating the call.");
  this.w = Nf("realtime.media.call.BaseCall");
  this.Hc = new Ik(this);
  this.pa(this.Hc);
  this.Ma = new hs;
  this.ka = this.Ma.provider;
  this.ra = new hs;
  this.Da = this.ra.provider;
  this.kE = [];
  this.Lj = this.Pc.Sh() + "^" + Sa();
  this.ss = new wG;
  this.Ms = new hs;
  this.Lc = this.Ms.provider;
  this.Fx = new hs;
  this.hh = this.Fx.provider;
  this.hR = new hs;
  this.pV = new qx;
  this.pa(this.pV);
  this.WJ = new qx;
  this.pa(this.WJ);
  this.yb = new WK(a, b, this.pV.Px, this.WJ.Px);
  this.pa(this.yb);
  this.fA = null;
  (new hs).resolve(this.yb);
  this.Wm = {};
  this.O = 0;
  this.Hc.listen(this.yb, ["t", "qa"], this.dispatchEvent);
  this.Hc.listen(this.yb, "K", this.TD);
  Gx(a, vr, LK).then(function(a) {
    a.eY(this);
  }, null, this);
  this.pn = [];
  Gx(a, wr, hx).then(function(a) {
    this.we = a;
    Lb(this.Dq(), function(a, b) {
      this.pn.push(this.we.lb(b, a));
    }, this);
  }, null, this);
};
v(oL, F);
d = oL.prototype;
d.xB = function() {
  return this.Pc.An();
};
d.Jc = function(a) {
  a.KG && (a = a.Zja(this.Pc.yd()));
  mi && (a = a.kka(!0));
  var b = this.Pc.Su();
  null != b && (a = a.bka(b));
  K(this.w, "Starting the media session.");
  this.yb.Jc(a);
  this.QD.resolve(null);
};
d.Dq = function() {
  return {callState:t(this.getState, this), hangoutId:t(this.ka.get, this.ka), pid:t(this.Da.get, this.Da), plid:Jd(this.Lj), sessionId:t(this.Zk, this)};
};
d.Eq = function() {
  return {callState:Jd(this.getState()), hangoutId:Jd(this.ka.get()), pid:Jd(this.Da.get()), plid:Jd(this.Lj), sessionId:Jd(this.Zk())};
};
d.aa = function() {
  K(this.w, "Disposing call.");
  this.disconnect(0);
  w(this.we);
  cb(this.pn);
  x(this.pn, this.we.PE, this.we);
  Lb(this.Eq(), t(function(a, b) {
    this.we.lb(b, a);
  }, this));
  oL.X.aa.call(this);
};
d.Sb = function(a) {
  a != this.O && (J(this.w, "Call state changed from " + this.O + " to " + a), this.O = a, this.dispatchEvent("Ab"));
};
d.Zk = function() {
  return this.yb.yh && this.yb.yh.ya();
};
d.getState = function() {
  return this.O;
};
d.lV = function(a, b, c) {
  J(this.w, "triggerConnected() called. HangoutId: " + b + " ParticipantId: " + c);
  this.Ma.resolve(b);
  this.ra.resolve(c);
  this.BJ();
  this.hh.then(function(a) {
    a = new aK(a, this.yb);
    this.hR.resolve(a);
    this.pa(a);
  }, void 0, this);
  a.resolve();
  this.Pr.resolve(null);
  this.Sb(2);
  this.ss.zi(this.Lj).$fa("jid");
  this.yb.connect(b, c, this.ss);
  this.bC().GV && this.hh.then(function() {
    this.fA = new mL(this.mb);
    this.pa(this.fA);
    this.fA.connect(this.yb, this.hh.get(), this.Da.get());
  }, void 0, this);
  this.pa(new AK(this.yb, this.Pc.Uh(), this.Pc.Mh()));
  J(this.w, "Call connected");
};
d.pa = function(a) {
  a = t(F.prototype.pa, this, a);
  this.onDisconnect.Sc ? a() : this.onDisconnect.then(a, a);
};
d.Db = function() {
  this.yb.Db();
};
d.zs = function(a) {
  this.kE = z(a);
  this.yb.So(this.kE);
  this.hh.then(function(a) {
    a.zs(this.kE);
  }, void 0, this);
};
d.disconnect = function(a) {
  if (3 == this.getState() || 4 == this.getState()) {
    return J(this.w, "disconnect() skipped, already disconnecting."), this.onDisconnect;
  }
  J(this.w, "disconnect() called. Endcause: " + a);
  var b = 2 == this.getState();
  this.Sb(3);
  this.$s(b, a);
  return this.onDisconnect;
};
d.$s = function(a, b) {
  J(this.w, "triggerDisconnected(). Endcause: " + b);
  a = new pL(b);
  this.Ma.reject(a);
  this.ra.reject(a);
  this.Fx.reject(a);
  this.hR.reject(a);
  this.Pr.reject(a);
  this.QD.reject(a);
  Lb(this.Wm, function(a) {
    ad(a);
  });
  Tb(this.Wm);
  this.xB().XI();
  this.xQ.resolve(b);
  this.Sb(4);
  this.yb.stop(b);
};
d.oe = function(a) {
  if (3 == this.getState() || 4 == this.getState()) {
    return J(this.w, "addCapture() failed, because we are disconnecting"), !1;
  }
  var b = this.Wm[a.S().getId()];
  if (b && b.sO(a)) {
    return I(this.w, "addCapture() failed, because we already added this capture"), !1;
  }
  b || (b = new eL(this.yb, this), this.Wm[a.S().getId()] = b);
  J(this.w, "addCapture() succeeded. Capture Id:" + a.S().getId());
  var c = b.me;
  b.oe(a);
  a = b.me;
  this.hh.Sc && c != a && a != c && (c && this.hh.get().RE(c.S()), a && this.hh.get().Ep(a.S()));
  return !0;
};
d.vf = function(a) {
  J(this.w, "removeCapture() called. Capture Id:" + a.S().getId());
  var b = this.Wm[a.S().getId()];
  if (b && b.sO(a)) {
    var c = b.me;
    b.vf(a);
    a = b.me;
    this.hh.Sc && a != c && (c && this.hh.get().RE(c.S()), a && this.hh.get().Ep(a.S()));
    return !0;
  }
  return !1;
};
d.Nm = function() {
  this.yb.Nm(!0);
};
d.Cn = function() {
  return y(Nb(this.Wm), function(a) {
    return a.me;
  });
};
d.TD = function(a) {
  a.target == this.yb && ("STOPPED" == a.state ? (J(this.w, "Disconnect received from session. Endcause: " + a.Gb), w(null != a.Gb), this.disconnect(a.Gb)) : "INPROGRESS" == a.state && this.dispatchEvent("zb"));
};
d.bC = function() {
  return this.yb.bC();
};
var qL = function() {
}, pL = function(a) {
  this.Gb = a;
}, nL = function(a, b) {
  TB.call(this, a);
  this.xa = b;
};
v(nL, TB);
var rL = function(a, b, c) {
  oL.call(this, a, b);
  this.Ql = !1;
  this.uC = new hs;
  this.Pg = this.uC.provider;
  this.Bw = new hs;
  this.Ee = this.Bw.provider;
  this.Ee.then(function(a) {
    this.Hc.listen(a, "P", Ba(this.UU, a));
    this.UU(a);
  }, null, this);
  this.Jk = this.mk = this.Mi = this.Rl = null;
  a.ej(vr, !1).then(t(function(a) {
    this.Jk = a;
  }, this));
  c && this.Jc(c);
};
v(rL, oL);
var sL = {1:200, 2:201, 3:202, 4:206, 5:207, 6:209, 7:216, 11:223, 17:235, 12:236, 13:237, 14:238, 15:239, 16:240}, tL = {1:0, 2:307, 3:303, 4:217, 5:305, 6:307, 7:307, 8:306, 11:217};
d = rL.prototype;
d.Db = function() {
  rL.X.Db.call(this);
  this.Lc.get() && this.Lc.get().Db();
  this.Ee.get() && this.Ee.get().Db();
  this.Pg.get() && this.Pg.get().Db();
};
d.UU = function(a) {
  this.zs(y(a.get(), function(a) {
    return a.D();
  }));
};
d.connect = function(a, b) {
  return this.KQ.then(function() {
    J(this.w, "connect() was called");
    if (0 != this.getState()) {
      return I(this.w, "connect() failed. Not in INITIALIZED. State: " + this.getState()), je(new qL(0, this.getState()));
    }
    var c = G();
    this.Sb(1);
    n(a) ? this.I_(c, a, b) : this.H_(c, a, b);
    return c.promise;
  }, void 0, this);
};
d.H_ = function(a, b, c) {
  K(this.w, "Resolving Hangout");
  b.then(function(b) {
    this.lJ(a, b, c || null);
  }, function(b) {
    I(this.w, "Hangout resolve failed, reverting to INITIALIZED state");
    this.Sb(0);
    a.reject(new uL(306, b));
  }, this);
};
d.I_ = function(a, b, c) {
  K(this.w, "Skipping Hangout resolution");
  b = NK(this.mb, this.Pc, $a(b));
  this.lJ(a, b, c || null);
};
d.lJ = function(a, b, c) {
  var e = w(b.Pu().da());
  K(this.w, "connectToHangout(). HangoutId: " + e);
  1 != this.getState() ? (I(this.w, "connectToHangout() failed, not in CONNECTING state. State: " + this.getState()), a.reject(new uL(302, new qL(1, this.getState()))), ad(b)) : (this.P6(e, c), this.nI(e, c, a, b, 0));
};
d.nI = function(a, b, c, e, f) {
  a = MK(this.mb, this.Pc, [a], new Oq(pA, [pA.prototype.da], [pA.prototype.Y], [pA.prototype.D], [pA.prototype.qb], Hu, [Hu.prototype.da], [Hu.prototype.Y], [Hu.prototype.D], [Hu.prototype.qb]), WJ, "Ya");
  K(this.w, "Adding participant");
  var h = a.Ff();
  Ha(b || "") || h.qb(b);
  a.add(h).then(t(this.l$, this, c, e, a, f), t(this.JQ, this, c, e, a));
};
d.l$ = function(a, b, c, e, f) {
  if (1 != this.getState()) {
    I(this.w, "add participant succeeded, but we are no longer CONNECTING. State: " + this.getState()), a.reject(new uL(302, new qL(1, this.getState()))), a = new pA, a.Y(f[0].da()), a.qb(f[0].D()), c.remove(a).then(this.Fh, null, this), ad(b), ad(c);
  } else {
    J(this.w, "add participant succeeded");
    var h = w(f[0].D());
    10 == f[0].e4() ? (J(this.w, "participant in knocking state"), 30 > e ? (J(this.w, "will attempt again after delay"), we(1000).then(t(this.nI, this, f[0].da(), f[0].D(), a, b, e + 1))) : (J(this.w, "max knock attempt, failing join"), this.JQ(a, b, c, 234))) : (J(this.w, "success adding and not a knock result"), this.wG(a, b, c, h));
  }
};
d.JQ = function(a, b, c, e) {
  this.Fh();
  I(this.w, "add participant failed, moving back to INITIALIZED state");
  this.Sb(0);
  ad(b);
  ad(c);
  a.reject(new uL(this.w2(e), e));
};
d.Dq = function() {
  var a = rL.X.Dq.call(this);
  a.hangout = t(function() {
    return this.Pg.get() && this.Pg.get().na();
  }, this);
  a.participants = t(function() {
    return this.Ee.get() && this.Ee.get().na();
  }, this);
  a.mediaSources = t(function() {
    return this.Lc.get() && this.Lc.get().na();
  }, this);
  return a;
};
d.Eq = function() {
  var a = rL.X.Eq.call(this);
  a.hangout = Jd(this.Pg.get() && this.Pg.get().na());
  a.participants = Jd(this.Ee.get() && this.Ee.get().na());
  a.mediaSources = Jd(this.Lc.get() && this.Lc.get().na());
  return a;
};
d.wG = function(a, b, c, e) {
  var f = w(b.Pu().da());
  this.uC.resolve(b);
  this.Bw.resolve(c);
  this.pa(b);
  this.pa(c);
  this.lV(a, f, e);
  b.start();
  c.start();
};
d.BJ = function() {
  me([this.ka, this.Da, this.Ee]).then(function() {
    var a = OK(this.mb, this.Pc, this.ka.get());
    this.pa(a);
    this.Ms.resolve(a);
    a.start();
    a = new fL(this.Da.get(), a, this.Ee.get(), y(this.Cn(), function(a) {
      return a.S();
    }), this.yb);
    this.pa(a);
    this.Fx.resolve(a);
  }, void 0, this);
};
d.$s = function(a, b) {
  this.Rl = b;
  if (a && !this.Ql) {
    J(this.w, "Removing participant on disconnect");
    var c = new pA;
    c.Y(this.ka.get());
    c.qb(this.Da.get());
    var e = {};
    e.jYdIne = b;
    this.Ee.get().remove(c, e, 2).then(this.Fh, null, this);
  }
  rL.X.$s.call(this, a, b);
  a = new pL(b);
  this.uC.reject(a);
  this.Bw.reject(a);
  this.Ms.reject(a);
  null != this.Pg.get() && this.Pg.get().stop();
  null != this.Ee.get() && this.Ee.get().stop();
  null != this.Lc.get() && this.Lc.get().stop();
};
d.P6 = function(a, b) {
  this.Mi = Bd(sk(), "beforeunload", t(this.Qr, this, a, b));
  this.mk = Bd(sk(), "unload", t(this.Qr, this, a, b));
};
d.Fh = function() {
  null != this.Mi && Dd(this.Mi);
  null != this.mk && Dd(this.mk);
};
d.Qr = function(a, b) {
  this.Fh();
  var c = this.Pc.SN(), e = null != this.Rl ? this.Rl : 63;
  if (null != c) {
    var f = new mE;
    f.ws(e);
    var h = new Hu;
    h.Y(a);
    Ha(b || "") || h.qb(b);
    f.Fa([h]);
    f.setRequestHeader(this.Pc.G2());
    a = new X;
    a.JF(this.xB().Hq());
    f.u(a);
    f = f.Ua();
    a = this.Jk ? this.Jk.ZN() : [];
    a = y(a, function(a) {
      return a.Ua();
    }, this);
    if (null != navigator.sendBeacon) {
      var k = new FormData;
      k.append("r", f);
      x(a, function(a) {
        k.append("l", a);
      });
      this.Ql = navigator.sendBeacon(c, k);
    }
    this.Ql || (c = Wc(c, "r", f), c = Wc(c, "l", a), f = Rf.Yp(), f.open("GET", c, !1), f.send(null));
    this.Ql = !0;
  }
  this.disconnect(e);
};
d.w2 = function(a) {
  var b;
  if (a && a.response instanceof cE) {
    a = a.response;
    var c = a.getResponseHeader();
    c && (b = 10 == c.Sa() ? sL[a.YA()] : tL[c.Sa()]);
  } else {
    q(a) && (b = a);
  }
  return l(b) ? b : 302;
};
var uL = function(a, b) {
  this.HU = a;
  this.su = b;
};
var vL = function(a, b, c) {
  oL.call(this, a, b);
  this.o = b.Hk("realtime.meetings.call.MeetingCall");
  this.Zh = !!c;
  this.Yia = a.ej(Vq).then();
  this.tD = 5000;
  this.oo = null;
  this.xD = new hs;
  this.fi = this.xD.provider;
  this.wD = new hs;
  this.no = this.wD.provider;
  this.Gd = null;
  this.vD = new hs;
  this.Hd = this.vD.provider;
  this.Fj = null;
  this.Bc = new hs;
  this.mo = new hs;
  this.uD = this.mo.provider;
  this.hk = new hs;
  this.WU = this.hk.provider;
  this.eP = G();
  this.JR = G();
  this.mk = this.Mi = this.Rl = this.Fw = null;
  this.Ql = !1;
  this.Jk = null;
  a.ej(vr, !1).lb(function(a) {
    this.Jk = a;
  }, this);
  this.aE = new Tp(20);
  this.ak = new hs;
  this.H = this.ak.provider;
  this.Zd = null;
  this.$x = new te(3E4);
  this.pa(this.$x);
  this.Hc.listen(this.$x, "tick", this.fca);
  this.Jv = null;
  this.Zh && (this.eP.resolve(!0), this.JR.resolve(!1));
  this.Hd.then(function(a) {
    this.Hc.listen(a, "P", this.TU);
    this.TU();
  }, pa, this);
  this.Hc.listen(this.yb, "K", this.l6);
};
v(vL, oL);
var wL = {404:217, 401:300}, xL = {400:324, 429:216}, yL = {403:200};
d = vL.prototype;
d.Db = function() {
  vL.X.Db.call(this);
  this.Lc.get() && this.Lc.get().Db();
  this.Hd.get() && this.Hd.get().Db();
  this.fi.get() && this.fi.get().Db();
};
d.Dq = function() {
  var a = vL.X.Dq.call(this);
  a.meetingSpace = t(function() {
    return this.fi.get() && this.fi.get().na();
  }, this);
  a.meetingDevices = t(function() {
    return this.Hd.get() && this.Hd.get().na();
  }, this);
  a.meetingRecordings = t(function() {
    return this.no.get() && this.no.get().na();
  }, this);
  a.mediaSources = t(function() {
    return this.Lc.get() && this.Lc.get().na();
  }, this);
  a.recentMeetingOperations = t(function() {
    return this.aE.T();
  }, this);
  return a;
};
d.Eq = function() {
  var a = vL.X.Eq.call(this);
  a.meetingSpace = Jd(this.fi.get() && this.fi.get().na());
  a.meetingDevices = Jd(this.Hd.get() && this.Hd.get().na());
  a.meetingRecordings = Jd(this.no.get() && this.no.get().na());
  a.mediaSources = Jd(this.Lc.get() && this.Lc.get().na());
  a.recentMeetingOperations = t(function() {
    return this.aE.T();
  }, this);
  return a;
};
d.$s = function(a, b) {
  var c = ie(b);
  67 == b && this.Zd && (c = this.Gd.search().then(function(a) {
    return (a = nb(a, function(a) {
      return a.df() == this.Zd;
    }, this)) && 7 == a.Kq() ? 43 : b;
  }, void 0, this));
  c.then(function(b) {
    var c;
    this.Rl = b;
    this.Ql || !a && !this.Zd ? c = ie() : (J(this.w, "Removing meeting device on disconnect"), c = this.Da.get() || this.Zd, c = this.Gd.Ff(w(c)), c.xs(6), c = this.Gd.modify(c, 2));
    this.Jv && this.Jv.cancel();
    c.jk(function() {
      this.Fh();
      this.Zd = null;
      oL.prototype.$s.call(this, a, b);
    }, this);
    c = new pL(b);
    this.xD.reject(c);
    this.wD.reject(c);
    this.vD.reject(c);
    this.Ms.reject(c);
    this.fi.get() && this.fi.get().stop();
    this.Hd.get() && this.Hd.get().stop();
    this.Lc.get() && this.Lc.get().stop();
    this.no.get() && this.no.get().stop();
  }, void 0, this);
};
d.resolve = function(a, b) {
  if (this.Fj) {
    return je(this.Xp("Meeting already resolved"));
  }
  var c = this.QG(0, "resolve");
  if (c) {
    return je(c);
  }
  this.Fj = w(a);
  return aL(this.mb, this.Pc, a, b).then(function(b) {
    var c = b.La();
    this.oo = TK(this.mb, this.Pc, [c], new Oq(Bw, [Bw.prototype.La], [Bw.prototype.Oa], [], [], vx, [vx.prototype.La], [vx.prototype.Oa], [], [], uC), QH, "gb");
    this.oo.ae().Cs(this.tD);
    this.pa(this.oo);
    this.Gd = TK(this.mb, this.Pc, [c], new Oq(rC, [rC.prototype.La], [rC.prototype.Oa], [rC.prototype.df], [rC.prototype.bk], wx, [wx.prototype.La], [wx.prototype.Oa], [wx.prototype.df], [wx.prototype.bk], xG), MH, "db");
    this.Gd.ae().Cs(this.tD);
    this.pa(this.Gd);
    this.Zh && this.$x.start();
    this.Bc.resolve(c);
    this.ss.eh(a).Oa(c);
    return b;
  }, function(b) {
    var c = "Resolve code " + a;
    b instanceof gr ? c += ", errorType: " + b.Rk : b instanceof BG && (c += ", error message: " + b.getMessage());
    var e = 306, k = this.Uu(b);
    null != k && (c += ", statusCode: " + k, e = wL[k] || e, this.Zh && (e = yL[k] || e), b.response && (c += ", response: " + this.PB(b.response)));
    this.aE.add(c);
    this.o.error(c);
    b = new zL(e, b);
    this.Bc.reject(b);
    this.Bc = new hs;
    throw b;
  }, this);
};
d.Jc = function(a) {
  this.Zh ? this.Bc.provider.then(function() {
    oL.prototype.Jc.call(this, a);
  }, void 0, this) : vL.X.Jc.call(this, a);
};
d.connect = function(a, b) {
  return this.Zh && !a ? je(new zL(302, "Missing name for anonymous user")) : this.KQ.then(function() {
    J(this.w, "connect() was called");
    var c = this.QG(0, "connect");
    if (c) {
      return je(c);
    }
    this.Sb(1);
    this.$x.stop();
    return this.Fw ? this.Fw.then(function() {
      return this.E_();
    }, void 0, this) : this.hY(1, a, b).then(function(a) {
      this.JR.resolve(!1);
      this.eP.resolve(3 == a.Kq());
      return this.Iz(a, u());
    }, void 0, this);
  }, void 0, this);
};
d.l6 = function(a) {
  if (a.target != this.yb) {
    var b = eb(a.target, KI);
    "STARTING" == a.state && (a = w(b.K()), this.H.Sc ? this.Fja(a) : this.ak.resolve(a));
  }
};
d.Fja = function(a) {
  var b;
  if (this.H.get() == a) {
    b = "Should not update the same session id.", Pf(this.w, b), this.o.error(b);
  } else {
    b = "Modifying the session id: " + a;
    K(this.w, b);
    this.o.info(b);
    var c = new rC;
    c.bk(w(this.Zd));
    c.rx([a]);
    this.Gd.modify(c).zb(function() {
      b = "Failed to update the session id: " + a;
      Pf(this.w, b);
      this.o.error(b);
    }, this);
  }
};
d.TU = function() {
  var a = w(this.Hd.get()).get(), b = jb(a, function(a) {
    return a.Wu();
  }), b = y(b, function(a) {
    return a.df();
  });
  this.zs(b);
  J(this.w, a.length + " raw devices; " + b.length + " joined.");
};
d.Z1 = function() {
  return this.Zd.split("/")[3] || this.Lj;
};
d.hY = function(a, b, c) {
  return me([this.Bc.provider, this.H]).then(function() {
    var e = this.Bc.provider.get(), f = this.H.get(), h = new rC;
    h.Oa(e);
    h.xs(a);
    h.rx([f]);
    this.Zh && (h.kx(w(b)), c && h.oea(c));
    return this.Yia.then(function(a) {
      this.Q6(a, e);
      return this.Gd.add(h).then(function(b) {
        b = w(b[0], "No device in add response");
        this.Zd = b.df();
        var c = this.Z1();
        this.Zh && (this.ss.Vo(c), this.hk.resolve(c));
        this.mo.resolve(w(a.mo));
        return b;
      }, this.J9, this);
    }, function(a) {
      throw this.Xp(a);
    }, this);
  }, function(a) {
    throw this.Xp(a);
  }, this);
};
d.J9 = function(a) {
  this.Fh();
  I(this.w, "add device failed, moving back to INITIALIZED state");
  this.Sb(0);
  this.Fw = null;
  var b = 325, c = this.Uu(a);
  null != c && (b = xL[c] || b, this.Zh && (b = yL[c] || b), a.response && this.o.error("Device add error: " + this.PB(a.response)));
  throw new zL(b, a);
};
d.E_ = function() {
  return this.H.then(function(a) {
    K(this.w, "Modifying the meeting device as JOINED");
    var b = new rC;
    b.bk(w(this.Zd));
    b.rx([a]);
    b.xs(1);
    return this.Gd.modify(b).then(function(a) {
      return this.Iz(a[0], u());
    }, function(a) {
      var b = 303, c = this.Uu(a);
      null != c && (b = xL[c] || b, a.response && this.o.error("Device add error: " + this.PB(a.response)));
      return this.Jj(new zL(b, a));
    }, this);
  }, function(a) {
    return this.Jj(this.Xp(a));
  }, this);
};
d.Iz = function(a, b) {
  var c = this.QG(1, "checkJoinState");
  if (c) {
    return this.Jj(c);
  }
  J(this.w, "checking the join state.");
  switch(a.Kq()) {
    case 1:
      return this.wG();
    case 3:
      return 6E5 <= u() - b ? this.Jj(new zL(234)) : this.Jv = we(5000).then(function() {
        return this.yda(b);
      }, function() {
        this.Jj(new zL(219));
      }, this);
    case 4:
      return this.Jj(new zL(233));
    default:
      return a = "Unexpected join state: " + a.Kq(), Pf(this.w, a), this.Jj(a);
  }
};
d.yda = function(a) {
  return this.Gd.search().then(function(b) {
    b = w(nb(b, function(a) {
      return a.df() == this.Zd;
    }, this));
    return this.Iz(b, a);
  }, function(a) {
    var b = 303, e = this.Uu(a);
    null != e && (b = xL[e] || b);
    return this.Jj(new zL(b, a));
  }, this);
};
d.wG = function() {
  var a = w(this.Bc.provider.get());
  this.xD.resolve(w(this.oo));
  this.oo.start();
  this.vD.resolve(w(this.Gd));
  this.Gd.start();
  a = TK(this.mb, this.Pc, [a], new Oq(yG, [yG.prototype.La], [yG.prototype.Oa], [yG.prototype.Ad], [yG.prototype.Ke], xx, [xx.prototype.La], [xx.prototype.Oa], [xx.prototype.Ad], [xx.prototype.Ke], LH), OH, "fb");
  a.ae().Cs(this.tD);
  this.wD.resolve(a);
  this.pa(a);
  a = G();
  this.lV(a, this.uD.get(), w(this.Zd));
  return a.promise;
};
d.BJ = function() {
  me([this.uD, this.Da, this.Hd]).then(function() {
    var a = OK(this.mb, this.Pc, this.uD.get());
    this.pa(a);
    this.Ms.resolve(a);
    a.start();
    a = new lL(this.Da.get(), a, this.Hd.get(), y(this.Cn(), function(a) {
      return a.S();
    }), this.yb);
    this.pa(a);
    this.Fx.resolve(a);
  }, void 0, this);
};
d.Jj = function(a) {
  I(this.w, "connect failed, moving back to DISCONNECTED state");
  this.Sb(4);
  if (this.Zd) {
    var b = new rC;
    b.bk(this.Zd);
    b.xs(6);
    w(this.Gd).modify(b, 2).jk(function() {
      this.Fh();
    }, this);
    this.Fw = this.Zd = null;
  }
  return je(this.Xp(a));
};
d.Q6 = function(a, b) {
  this.Mi = Bd(sk(), "beforeunload", t(this.Qr, this, a, b));
  this.mk = Bd(sk(), "unload", t(this.Qr, this, a, b));
};
d.Fh = function() {
  null != this.Mi && (Dd(this.Mi), this.Mi = null);
  null != this.mk && (Dd(this.mk), this.mk = null);
};
d.Qr = function(a, b) {
  this.Fh();
  var c = {meetingToken:w(a.J3())};
  a.sendBeacon(b + "/devices:close", c);
  this.Ql = !0;
  this.Jk && x(this.Jk.ZN(), function(a) {
    this.xB().sendBeacon("media_sessions/log", a);
  }, this);
  this.disconnect(null != this.Rl ? this.Rl : 63);
};
d.fca = function() {
  this.Zh ? w(this.oo).search() : w(this.Gd).search();
};
d.QG = function(a, b) {
  return this.getState() != a ? (I(this.w, "Unexpected state while in " + b + ": " + this.getState() + " != " + a), new zL(302, new qL(a, this.getState()))) : null;
};
d.PB = function(a) {
  a = a.Sba || "";
  try {
    return sf(a).body || a;
  } catch (b) {
    return a;
  }
};
d.Xp = function(a) {
  return a instanceof zL || a instanceof de ? a : new zL(302, a);
};
d.Uu = function(a) {
  return a instanceof gr ? a.nl : a instanceof BG ? a.oG : null;
};
var zL = function(a, b) {
  Ca.call(this, "startupCode: " + a + ", error = " + uf(b));
  this.HU = a;
  this.su = b;
};
v(zL, Ca);
var AL = function(a, b, c, e) {
  this.a = D("mr.mirror.hangouts.HangoutCallService");
  this.nb = a;
  this.Yb = e;
  this.Va = new Ik(this);
  this.xa = null;
  this.MC = !1;
  this.Az = new Oc;
  this.gn = new Oc;
  this.pG = !1;
  this.Nx = new Oc;
  this.Gm = this.vk = null;
  this.NO = this.oR = !1;
  this.Q_(b, c);
};
d = AL.prototype;
d.Q_ = function(a, b) {
  var c = this;
  this.Yb(new Uh("REFRESH_AUTH"));
  a.then(function() {
    return b;
  }).then(function(a) {
    if (!c.NO) {
      c.a.L("Creating call for hangout id: " + a.ka + " resolvedId: " + a.dm + " conferenceMode: " + a.Ek);
      var b = (new wq).nka(!0).hka(!1);
      void 0 != a.Ek && (b = b.jka(a.Ek));
      EK(c.nb);
      a.Vf ? (c.xa = new vL(c.nb, c.nb.get(zr), !1), c.xa.Jc(b), c.xa.Hd.then(c.Rha, null, c)) : (c.xa = new rL(c.nb, c.nb.get(zr), b), c.xa.Ee.then(c.Yha, null, c));
      c.xa.Lc.then(c.$ha, null, c);
      c.xa.onConnect.then(c.H5, null, c);
      c.xa.onDisconnect.then(c.J5, function(a) {
        c.a.v("Error on disconnect: " + a);
      }, c);
      c.Az.resolve(a);
    }
  });
};
d.kJ = function(a) {
  var b = this;
  this.a.info("Connecting to hangout");
  setTimeout(function() {
    b.gn.reject(Error("Timed out before connecting"));
  }, 3E4);
  this.Az.promise.then(function(a) {
    b.a.L("Call ready.");
    b.MC = a.Vf;
    return b.MC ? b.G_(a) : b.F_(a);
  }).then(null, function(a) {
    return b.G5(a);
  });
  return this.gn.promise.then(function() {
    return b.xa.Da;
  }).then(function(c) {
    b.xV(a, c);
    if (b.MC) {
      return b.Y8(c);
    }
    b.$P(c);
    b.Vha(b.xa.Pg.get());
  });
};
d.G_ = function(a) {
  var b = this;
  return this.xa.resolve(a.ka).then(function() {
    return b.xa.connect();
  });
};
d.F_ = function(a) {
  var b = a.ka;
  a = a.dm;
  var c = this.nb.get(zK);
  a ? (this.a.L("Already resolved id: " + a), b = ie(NK(this.nb, c, a))) : (this.a.L("resolving hangout id: " + b), b = VK(this.nb, c, this.a0(b)));
  return this.xa.connect(b);
};
d.G5 = function(a) {
  this.Vv("Connect error", a);
  if (a.su) {
    for (var b = "", c = ka(Object.entries(Up)), e = c.next();!e.done;e = c.next()) {
      var f = ka(e.value), e = f.next().value, f = f.next().value;
      if (f == a.HU) {
        b = e + "(" + f + ")";
        break;
      }
    }
    this.a.error("Call connect error startupCode: " + b);
    a = a.su;
  }
  b = "SESSION_FAILURE";
  a.response && a.response.x3 && "chrrp" == a.response.iw && (b = "HANGOUT_INVALID");
  this.Yb(new Uh(b));
  this.gn.reject(a);
  this.Mx(16);
};
d.rja = function(a) {
  var b = this;
  return new Promise(function(c, e) {
    b.xa.Da.then(function(e) {
      b.xV(a, e);
      b.oR || b.$P(e);
      c();
    }, e);
  });
};
d.a0 = function(a) {
  a = a.split("@");
  var b = new NE;
  b.xT(!0);
  if (-1 != a[1].indexOf(".")) {
    var c = new sv;
    c.Ro(a[0]);
    c.Po(a[1]);
    b.cga(c);
  } else {
    c = new vu, c.jha(a[1]), c.Hs(a[0]), b.nT(c);
  }
  return b;
};
d.xV = function(a, b) {
  0 < a.getAudioTracks().length && (this.vk ? this.vk.HT(a) : (this.vk = new IK(new Ns(w(b), "1", "a"), a), this.vk.EU(), this.xa.oe(this.vk)));
  this.Gm ? this.Gm.HT(a) : (b = new Ns(w(b), "2", "v", "va"), b.eG([new Fr(0, 0, 1, 1)]), this.Gm = new IK(b, a), this.Gm.EU(), this.xa.oe(this.Gm));
};
d.Y8 = function(a) {
  var b = new Nw;
  b.$T(a);
  var c = this.xa.fi.get();
  a = new Hw;
  a.ux(b);
  var e = c.Ff();
  e.VS(a);
  return new Promise(function(a, b) {
    c.modify(e).then(a, b);
  });
};
d.$P = function(a) {
  var b = new vv;
  b.Hga(a);
  a = new Zz;
  a.ux(b);
  a.Y(this.xa.ka.get());
  this.xa.Pg.get().modify(a);
};
d.Vha = function(a) {
  var b = this;
  this.Va.listen(a, "P", function(a) {
    b.xa.Da.then(function(c) {
      b.oR = Array.prototype.some.call(a.target.get(), function(a) {
        return a.dl() && a.dl().o4() == c;
      });
    });
  });
};
d.Rha = function(a) {
  this.Va.listen(a, "P", this.R9);
};
d.R9 = function(a) {
  var b = this;
  a.Mb.forEach(function(a) {
    if (a.Lu() && a.Lu().TK()) {
      var c = w(a.df());
      b.xa.Da.get() == c && b.xa.Cn().forEach(function(c) {
        "a" == c.S().W() && (c.Hl(), b.Yb(new Uh("STATUS_RESPONSE", {mute:!0})), c = b.xa.Hd.get().Ff(a), c.SS(new nw), b.xa.Hd.get().modify(c).zb(function(a) {
          b.Vv("Failed to clear AudioMuteRequest", a);
        }));
      });
    }
  });
};
d.Yha = function(a) {
  var b = this;
  this.Va.listen(a, "P", function(a) {
    b.m$(a);
  });
  this.Va.listen(a, "R", function(a) {
    b.uQ(a);
  });
};
d.m$ = function(a) {
  var b = a.target;
  this.a.L(function() {
    return "Participants updated: " + b.get().filter(function(a) {
      return a.Wu();
    }).map(function(a) {
      return a.Lh();
    }).join(", ");
  });
  !this.pG && 2 > b.get().length && (this.Yb(new Uh("HANGOUT_INACTIVE")), this.Mx(61));
};
d.$ha = function(a) {
  var b = this;
  this.Va.listen(a, "P", function(a) {
    b.O$(w(b.xa), a);
  });
  this.Va.listen(a, "R", function(a) {
    b.uQ(a);
  });
};
d.O$ = function(a, b) {
  for (var c = this, e = {}, f = 0;f < b.Mb.length;e = {source:e.source}, f++) {
    e.source = b.Mb[f], e.source.D() == a.Da.get() && e.source.bl() && e.source.bl().Bn() && a.Cn().forEach(function(a) {
      return function(b) {
        b.S().getId() == a.source.Ga() && (b.Hl(), c.Yb(new Uh("STATUS_RESPONSE", {mute:!0})));
      };
    }(e));
  }
};
d.wV = function(a) {
  this.xa.Cn().forEach(function(b) {
    "a" == b.S().W() && (a ? b.Hl() : b.oja());
  });
};
d.uQ = function(a) {
  this.a.error("Failure in collection: " + a.reason);
  this.gn.reject(a.reason);
  this.Mx(3);
};
d.H5 = function() {
  this.a.info("Call connected");
  this.Yb(new Uh("SESSION_START_SUCCESS"));
  this.gn.resolve(void 0);
};
d.J5 = function(a) {
  this.Yb(new Uh("SESSION_END"));
  var b = "", c;
  for (c in Lp) {
    if (Lp[c] == a) {
      b = c + "(" + a + ")";
      break;
    }
  }
  this.a.info("Call ended with endcause: " + b);
  0 != a && 61 != a && 16 != a && this.Yb(new Uh("SESSION_FAILURE"));
};
d.stop = function() {
  this.Mx(0);
  return this.Nx.promise;
};
d.Mx = function(a) {
  var b = this;
  this.a.info("Stopping call with end Cause: " + a);
  this.pG ? this.a.info("Ignore stop, already stopping.") : (this.pG = !0, this.xa ? this.xa.disconnect(a).then(function(a) {
    b.a.L("Call disconnected with endCause: " + a);
    b.Nx.resolve(void 0);
  }) : this.Nx.resolve(void 0));
};
d.ob = function() {
  var a = this;
  this.NO = !0;
  this.Va.ob();
  this.vk && this.vk.ob();
  this.Gm && this.Gm.ob();
  this.Az.reject(Error("Disposed"));
  this.gn.reject(Error("Disposed"));
  setTimeout(function() {
    a.Nx.reject(Error("Timed out before stopping"));
  }, 1E4);
  this.xa && this.xa.ob();
};
d.Vv = function(a, b) {
  b instanceof Error ? this.a.error(a, b) : ua(b) ? this.a.error(function() {
    return a + ": " + JSON.stringify(b);
  }) : wa(b) ? this.a.error(a + ": " + JSON.stringify(b)) : this.a.error(a + ": " + b);
};
d.Zk = function() {
  return this.xa ? this.xa.Zk() : null;
};
var BL = function(a, b, c) {
  Rh.call(this, a);
  this.nb = b;
  this.Om = c;
  this.a = D("mr.mirror.hangouts.HangoutSession");
  this.Id = Tg.Vu(a.id);
  this.Ka = new Oc;
  this.pl = !1;
  this.Yn = !0;
  this.Me = this.Yc = null;
  this.cn = new Oc;
  this.fe = this.vF = null;
  this.Gs();
  this.xc = null;
};
la(BL, Rh);
d = BL.prototype;
d.start = function(a) {
  var b = this;
  this.a.L("Starting new hangouts mirror session.");
  this.Yc = a;
  if (this.xc) {
    return Promise.reject(Error("Mirroring already started"));
  }
  if (this.Me) {
    return Promise.reject(Error("Session permanently stopped"));
  }
  this.vF = new fh("MediaRouter.Hangouts.Session.Launch");
  this.xc = new AL(this.nb, this.Om, this.cn.promise, t(this.Zj, this));
  this.xc.kJ(this.Yc).then(function() {
    b.a.L("Call connected");
    b.Zj(new Uh("SESSION_START_SUCCESS"));
    b.vF.end();
    b.vF = null;
    b.fe = new kh("MediaRouter.Hangouts.Session.Length");
    b.Ka.resolve(b);
  }, function(a) {
    b.Ka.reject(a);
    b.stop();
  });
  return this.Ka.promise;
};
d.Rca = function() {
  var a = this;
  if (!this.xc || this.Me) {
    return Promise.resolve();
  }
  this.a.L("Resetting session call.");
  return this.xc.stop().then(function() {
    if (a.Me) {
      return Promise.resolve();
    }
    a.pl = !1;
    a.cn = new Oc;
    a.xc.ob();
    a.xc = new AL(a.nb, a.Om, a.cn.promise, t(a.Zj, a));
    a.Yc.getTracks().forEach(function(a) {
      a.enabled = !0;
    });
    return a.xc.kJ(w(a.Yc)).then(function() {
      a.a.L("Reset call connected");
    }, function() {
      a.stop();
    });
  });
};
d.RU = function() {
  return !0;
};
d.yV = function(a) {
  var b = this;
  return new Promise(function(c, e) {
    b.xc ? b.xc.rja(a).then(function() {
      b.Yc = a;
      c();
    }, e) : e(Error("Mirroring was never started"));
  });
};
d.stop = function() {
  var a = this;
  this.a.L("Stopping hangouts mirror session.");
  this.Ka.reject(Error("Session stop requested."));
  this.fe && (this.fe.end(), this.fe = null);
  if (!this.xc) {
    return Promise.resolve();
  }
  if (this.Me) {
    return this.Me;
  }
  this.Ka.reject(Error("Stopped"));
  this.cn.reject(Error("Stopped"));
  var b = function() {
    try {
      a.Id.ob();
    } catch (c) {
      a.a.error("Error while disposing message port", c);
    }
    try {
      a.xc.ob();
    } catch (c) {
      a.a.error("Error while disposing call service", c);
    }
  };
  return this.Me = new Promise(function(c, e) {
    setTimeout(function() {
      b();
      e(Error("Timed out before stopping"));
    }, 1E4);
    a.xc.stop().then(function() {
      b();
      c();
    }).catch(function(a) {
      b();
      e(a);
    });
  });
};
d.Gs = function() {
  var a = this;
  this.Id.onMessage = function(b) {
    if (n(b)) {
      b = JSON.parse(b);
      var c = b.clientId;
      if (c) {
        "client_connect" == b.type ? a.Zj({message:{sessionId:"castouts"}, clientId:c, type:"new_session"}) : "v2_message" == b.type && "STOP" == b.message.type && a.Zj({message:"castouts", clientId:c, type:"remove_session"});
        return;
      }
    }
    if (!b.type) {
      throw Error("Message has no type.");
    }
    switch(b.type) {
      case "AUTH_READY":
        var e = b.data;
        if (void 0 != e.Ek && e.Ek != a.Yn) {
          a.a.L("received auth ready message with new conference mode");
          a.Yn = e.Ek;
          var f = a.pl;
          a.Rca().then(function() {
            a.pl = f;
            a.xc && a.xc.wV(f);
            a.cn.resolve(e);
          });
        } else {
          a.a.L("received auth ready message"), e.Ek = a.Yn, a.cn.resolve(e);
        }
        break;
      case "LOCAL_PRESENT":
        a.a.L("local present message");
        a.Zj(b);
        break;
      case "MUTE":
        b.data && (a.pl = !!b.data.mute, a.xc && a.xc.wV(a.pl));
        break;
      case "STATUS_RESPONSE":
        a.a.L("route status response message");
        b.data && (a.pl = !!b.data.mute);
        break;
      case "STATUS_REQUEST":
        a.a.L("route status request message");
        a.Zj(new Uh("STATUS_RESPONSE", {routeDescription:a.pb.description, mute:a.pl, local:!a.Yn}));
        break;
      default:
        throw Error("Unknown message type: " + b.type);
    }
  };
};
d.Zj = function(a) {
  this.a.L(function() {
    return "sending message to mrp: " + JSON.stringify(a);
  });
  this.Id.sendMessage(a, CL);
};
d.Zk = function() {
  return this.xc ? this.xc.Zk() : null;
};
var CL = {channelType:"mesi"};
var DL = function(a) {
  Ph.call(this, a);
  this.mb = new TB;
  this.mb.Zfa(zC.ea());
  a = this.mb;
  var b = new Zw(a, document);
  a.oi(kr, b);
  this.ul = this.$y = this.Om = this.qs = null;
  this.tJ = new wC;
};
la(DL, Ph);
d = DL.prototype;
d.ou = function() {
  this.X6();
  ei(this);
};
d.jj = function() {
  return Tk.ea().jj();
};
d.Ca = function() {
  throw Error("not implemented");
};
d.getData = function() {
  return [{lastSessionId:this.ul}];
};
d.wb = function() {
  var a = bi(this);
  a && a.lastSessionId && (this.ul = a.lastSessionId);
};
d.$g = function() {
  var a = this;
  return this.ul ? new Promise(function(b, c) {
    setTimeout(c, 5E3);
    a.Om.then(function() {
      a.ul || c(Error("No session to upload"));
      a.$y.$g(a.ul);
      a.ul = null;
      b("");
    });
  }) : Promise.reject(Error("No session to upload"));
};
d.iz = function(a) {
  this.ul = a.Zk();
  return Promise.resolve();
};
d.cu = function(a, b) {
  a = new BL(b, this.mb, w(this.Om));
  this.qs = a.Zj.bind(a);
  return a;
};
d.Qw = function() {
  Bq(0);
};
d.Mw = function() {
  Bq(1);
};
d.Nw = function() {
  nh("MediaRouter.Hangouts.Session.End");
};
d.Ow = function(a) {
  oh("MediaRouter.Hangouts.Start.Failure", a, qh);
};
d.Pw = function() {
  nh("MediaRouter.Hangouts.Stream.End");
};
d.bh = function(a) {
  this.qs && this.qs(a);
};
d.cM = function() {
  return "v1_today";
};
d.X6 = function() {
  var a = this, b = new yx(new Js, new rs(this.bh.bind(this))), b = new CG(b, "hangouts", this.cM(), "", "https://www.googleapis.com", this.tJ), c = new yK(b);
  c.hg(39);
  c.wx(158);
  c.setProperty("castouts");
  c.QS("castouts");
  c.RS(chrome.runtime.id + chrome.runtime.getManifest().version);
  c.Oo("castouts", !0);
  c.gT(1);
  c.fT("https://hangouts.google.com/hangouts/_/logpref");
  c.hT("https://clients2.google.com/cr/report");
  c.register(this.mb);
  EK(this.mb);
  this.Om = new Promise(function(b, f) {
    a.$y = a.mb.get(zr);
    a.$y.Bea(c).Xc().then(b, f);
  });
};
var EL = function() {
  DL.call(this, "hangouts");
};
la(EL, DL);
EL.prototype.Ca = function() {
  return "HangoutsService";
};
var FL = new EL;
Nh("mr.mirror.hangouts.HangoutsService", FL);
var GL = function() {
  DL.call(this, "meetings");
};
la(GL, DL);
GL.prototype.Ca = function() {
  return "MeetingsService";
};
GL.prototype.cM = function() {
  return "v1_meetings";
};
GL.prototype.ou = function() {
  DL.prototype.ou.call(this);
  var a = new UF(this.jj()), a = new Ex(a), a = new KJ(a, ie(0), "v1", "", "https://meetings.clients6.google.com", this.tJ);
  this.mb.oi(Vq, a);
};
var HL = new GL;
Nh("mr.mirror.hangouts.MeetingsService", HL);

