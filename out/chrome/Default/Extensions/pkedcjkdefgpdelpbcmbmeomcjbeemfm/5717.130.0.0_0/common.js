'use strict';var d, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  if (c.get || c.set) {
    throw new TypeError("ES3 does not support getters and setters.");
  }
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
}, ba = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, ca = function() {
  ca = function() {
  };
  ba.Symbol || (ba.Symbol = fa);
}, ga = 0, fa = function(a) {
  return "jscomp_symbol_" + (a || "") + ga++;
}, ia = function() {
  ca();
  var a = ba.Symbol.iterator;
  a || (a = ba.Symbol.iterator = ba.Symbol("iterator"));
  "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return ha(this);
  }});
  ia = function() {
  };
}, ha = function(a) {
  var b = 0;
  return ja(function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  });
}, ja = function(a) {
  ia();
  a = {next:a};
  a[ba.Symbol.iterator] = function() {
    return this;
  };
  return a;
}, ka = function(a) {
  ia();
  var b = a[Symbol.iterator];
  return b ? b.call(a) : ha(a);
}, la = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  for (var e in b) {
    if (Object.defineProperties) {
      var f = Object.getOwnPropertyDescriptor(b, e);
      f && Object.defineProperty(a, e, f);
    } else {
      a[e] = b[e];
    }
  }
}, ma = function(a) {
  if (!(a instanceof Array)) {
    a = ka(a);
    for (var b, c = [];!(b = a.next()).done;) {
      c.push(b.value);
    }
    a = c;
  }
  return a;
}, na = na || {}, g = this, l = function(a) {
  return void 0 !== a;
}, m = function(a, b, c) {
  a = a.split(".");
  c = c || g;
  a[0] in c || !c.execScript || c.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && l(b) ? c[e] = b : c = c[e] && Object.prototype.hasOwnProperty.call(c, e) ? c[e] : c[e] = {};
  }
}, oa = function(a, b) {
  a = a.split(".");
  b = b || g;
  for (var c;c = a.shift();) {
    if (null != b[c]) {
      b = b[c];
    } else {
      return null;
    }
  }
  return b;
}, pa = function() {
}, qa = function(a) {
  a.FC = void 0;
  a.ea = function() {
    return a.FC ? a.FC : a.FC = new a;
  };
}, ra = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}, sa = function(a) {
  return null === a;
}, ta = function(a) {
  return "array" == ra(a);
}, ua = function(a) {
  var b = ra(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}, n = function(a) {
  return "string" == typeof a;
}, q = function(a) {
  return "number" == typeof a;
}, va = function(a) {
  return "function" == ra(a);
}, wa = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}, xa = "closure_uid_" + (1e9 * Math.random() >>> 0), ya = 0, za = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
}, Aa = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, e);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}, t = function(a, b, c) {
  t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? za : Aa;
  return t.apply(null, arguments);
}, Ba = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}, u = Date.now || function() {
  return +new Date;
}, v = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.X = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.fqa = function(a, c, h) {
    for (var e = Array(arguments.length - 2), f = 2;f < arguments.length;f++) {
      e[f - 2] = arguments[f];
    }
    return b.prototype[c].apply(a, e);
  };
};
var chrome = chrome || window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var Ca = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Ca);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
};
v(Ca, Error);
Ca.prototype.name = "CustomError";
var Da;
var Ea = function(a, b) {
  return 0 == a.lastIndexOf(b, 0);
}, Fa = function(a, b) {
  return a.toLowerCase() == b.toLowerCase();
}, Ga = function(a, b) {
  for (var c = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < c.length;) {
    e += c.shift() + f.shift();
  }
  return e + c.join("%s");
}, Ha = function(a) {
  return /^[\s\xa0]*$/.test(a);
}, Ia = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}, Ja = /&/g, Ka = /</g, La = />/g, Ma = /"/g, Na = /'/g, Oa = /\x00/g, Pa = /[\x00&<>"']/, Qa = function(a) {
  return null == a ? "" : String(a);
}, Ra = function(a) {
  return Array.prototype.join.call(arguments, "");
}, Sa = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ u()).toString(36);
}, Ua = function(a, b) {
  var c = 0;
  a = Ia(String(a)).split(".");
  b = Ia(String(b)).split(".");
  for (var e = Math.max(a.length, b.length), f = 0;0 == c && f < e;f++) {
    var h = a[f] || "", k = b[f] || "";
    do {
      h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
      k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
      if (0 == h[0].length && 0 == k[0].length) {
        break;
      }
      c = Ta(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || Ta(0 == h[2].length, 0 == k[2].length) || Ta(h[2], k[2]);
      h = h[3];
      k = k[3];
    } while (0 == c);
  }
  return c;
}, Ta = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}, Va = function(a, b, c) {
  a = a.split(b);
  for (var e = [];0 < c && a.length;) {
    e.push(a.shift()), c--;
  }
  a.length && e.push(a.join(b));
  return e;
};
var Wa = function(a, b) {
  b.unshift(a);
  Ca.call(this, Ga.apply(null, b));
  b.shift();
};
v(Wa, Ca);
Wa.prototype.name = "AssertionError";
var Xa = function(a, b, c, e) {
  var f = "Assertion failed";
  if (c) {
    var f = f + (": " + c), h = e;
  } else {
    a && (f += ": " + a, h = b);
  }
  throw new Wa("" + f, h || []);
}, w = function(a, b, c) {
  a || Xa("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
}, Ya = function(a, b) {
  throw new Wa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}, Za = function(a, b, c) {
  q(a) || Xa("Expected number but got %s: %s.", [ra(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}, $a = function(a, b, c) {
  n(a) || Xa("Expected string but got %s: %s.", [ra(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}, ab = function(a, b, c) {
  va(a) || Xa("Expected function but got %s: %s.", [ra(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}, bb = function(a, b, c) {
  wa(a) || Xa("Expected object but got %s: %s.", [ra(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}, cb = function(a, b, c) {
  ta(a) || Xa("Expected array but got %s: %s.", [ra(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}, eb = function(a, b, c, e) {
  a instanceof b || Xa("Expected instanceof %s but got %s.", [db(b), db(a)], c, Array.prototype.slice.call(arguments, 3));
  return a;
}, db = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
var fb = function(a) {
  return a[a.length - 1];
}, gb = Array.prototype.indexOf ? function(a, b, c) {
  w(null != a.length);
  return Array.prototype.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (n(a)) {
    return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
}, hb = Array.prototype.lastIndexOf ? function(a, b, c) {
  w(null != a.length);
  return Array.prototype.lastIndexOf.call(a, b, null == c ? a.length - 1 : c);
} : function(a, b, c) {
  c = null == c ? a.length - 1 : c;
  0 > c && (c = Math.max(0, a.length + c));
  if (n(a)) {
    return n(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
  }
  for (;0 <= c;c--) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
}, x = Array.prototype.forEach ? function(a, b, c) {
  w(null != a.length);
  Array.prototype.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var e = a.length, f = n(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in f && b.call(c, f[h], h, a);
  }
}, ib = function(a, b, c) {
  for (var e = n(a) ? a.split("") : a, f = a.length - 1;0 <= f;--f) {
    f in e && b.call(c, e[f], f, a);
  }
}, jb = Array.prototype.filter ? function(a, b, c) {
  w(null != a.length);
  return Array.prototype.filter.call(a, b, c);
} : function(a, b, c) {
  for (var e = a.length, f = [], h = 0, k = n(a) ? a.split("") : a, p = 0;p < e;p++) {
    if (p in k) {
      var r = k[p];
      b.call(c, r, p, a) && (f[h++] = r);
    }
  }
  return f;
}, y = Array.prototype.map ? function(a, b, c) {
  w(null != a.length);
  return Array.prototype.map.call(a, b, c);
} : function(a, b, c) {
  for (var e = a.length, f = Array(e), h = n(a) ? a.split("") : a, k = 0;k < e;k++) {
    k in h && (f[k] = b.call(c, h[k], k, a));
  }
  return f;
}, kb = Array.prototype.some ? function(a, b, c) {
  w(null != a.length);
  return Array.prototype.some.call(a, b, c);
} : function(a, b, c) {
  for (var e = a.length, f = n(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && b.call(c, f[h], h, a)) {
      return !0;
    }
  }
  return !1;
}, lb = Array.prototype.every ? function(a, b, c) {
  w(null != a.length);
  return Array.prototype.every.call(a, b, c);
} : function(a, b, c) {
  for (var e = a.length, f = n(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && !b.call(c, f[h], h, a)) {
      return !1;
    }
  }
  return !0;
}, nb = function(a, b, c) {
  b = mb(a, b, c);
  return 0 > b ? null : n(a) ? a.charAt(b) : a[b];
}, mb = function(a, b, c) {
  for (var e = a.length, f = n(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && b.call(c, f[h], h, a)) {
      return h;
    }
  }
  return -1;
}, ob = function(a, b, c) {
  a: {
    for (var e = n(a) ? a.split("") : a, f = a.length - 1;0 <= f;f--) {
      if (f in e && b.call(c, e[f], f, a)) {
        b = f;
        break a;
      }
    }
    b = -1;
  }
  return 0 > b ? null : n(a) ? a.charAt(b) : a[b];
}, pb = function(a, b) {
  return 0 <= gb(a, b);
}, qb = function(a) {
  return 0 == a.length;
}, rb = function(a) {
  if (!ta(a)) {
    for (var b = a.length - 1;0 <= b;b--) {
      delete a[b];
    }
  }
  a.length = 0;
}, sb = function(a, b) {
  pb(a, b) || a.push(b);
}, ub = function(a, b, c) {
  var e;
  2 == arguments.length || 0 > (e = gb(a, c)) ? a.push(b) : tb(a, e, 0, b);
}, wb = function(a, b) {
  b = gb(a, b);
  var c;
  (c = 0 <= b) && vb(a, b);
  return c;
}, vb = function(a, b) {
  w(null != a.length);
  return 1 == Array.prototype.splice.call(a, b, 1).length;
}, xb = function(a, b, c) {
  b = mb(a, b, c);
  return 0 <= b ? (vb(a, b), !0) : !1;
}, yb = function(a, b, c) {
  var e = 0;
  ib(a, function(f, h) {
    b.call(c, f, h, a) && vb(a, h) && e++;
  });
  return e;
}, zb = function(a) {
  return Array.prototype.concat.apply(Array.prototype, arguments);
}, z = function(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), e = 0;e < b;e++) {
      c[e] = a[e];
    }
    return c;
  }
  return [];
}, Ab = function(a, b) {
  for (var c = 1;c < arguments.length;c++) {
    var e = arguments[c];
    if (ua(e)) {
      var f = a.length || 0, h = e.length || 0;
      a.length = f + h;
      for (var k = 0;k < h;k++) {
        a[f + k] = e[k];
      }
    } else {
      a.push(e);
    }
  }
}, tb = function(a, b, c, e) {
  w(null != a.length);
  return Array.prototype.splice.apply(a, Cb(arguments, 1));
}, Cb = function(a, b, c) {
  w(null != a.length);
  return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
}, Db = function(a, b, c) {
  b = b || a;
  var e = function(a) {
    return wa(a) ? "o" + (a[xa] || (a[xa] = ++ya)) : (typeof a).charAt(0) + a;
  };
  c = c || e;
  for (var e = {}, f = 0, h = 0;h < a.length;) {
    var k = a[h++], p = c(k);
    Object.prototype.hasOwnProperty.call(e, p) || (e[p] = !0, b[f++] = k);
  }
  b.length = f;
}, Fb = function(a, b) {
  a.sort(b || Eb);
}, Gb = function(a, b, c) {
  var e = c || Eb;
  Fb(a, function(a, c) {
    return e(b(a), b(c));
  });
}, Hb = function(a, b, c) {
  Gb(a, function(a) {
    return a[b];
  }, c);
}, Jb = function(a, b, c) {
  if (!ua(a) || !ua(b) || a.length != b.length) {
    return !1;
  }
  var e = a.length;
  c = c || Ib;
  for (var f = 0;f < e;f++) {
    if (!c(a[f], b[f])) {
      return !1;
    }
  }
  return !0;
}, Eb = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}, Ib = function(a, b) {
  return a === b;
}, Kb = function(a, b, c) {
  var e = {};
  x(a, function(f, h) {
    e[b.call(c, f, h, a)] = f;
  });
  return e;
};
var Lb = function(a, b, c) {
  for (var e in a) {
    b.call(c, a[e], e, a);
  }
}, Mb = function(a, b, c) {
  for (var e in a) {
    if (b.call(c, a[e], e, a)) {
      return !0;
    }
  }
  return !1;
}, Nb = function(a) {
  var b = [], c = 0, e;
  for (e in a) {
    b[c++] = a[e];
  }
  return b;
}, Ob = function(a) {
  var b = [], c = 0, e;
  for (e in a) {
    b[c++] = e;
  }
  return b;
}, Pb = function(a, b) {
  return null !== a && b in a;
}, Qb = function(a, b) {
  for (var c in a) {
    if (a[c] == b) {
      return !0;
    }
  }
  return !1;
}, Rb = function(a, b, c) {
  a: {
    for (var e in a) {
      if (b.call(c, a[e], e, a)) {
        b = e;
        break a;
      }
    }
    b = void 0;
  }
  return b && a[b];
}, Sb = function(a) {
  for (var b in a) {
    return !1;
  }
  return !0;
}, Tb = function(a) {
  for (var b in a) {
    delete a[b];
  }
}, Ub = function(a, b, c) {
  return b in a ? a[b] : a[b] = c;
}, Vb = function(a) {
  var b = {}, c;
  for (c in a) {
    b[c] = a[c];
  }
  return b;
}, Wb = function(a) {
  var b = ra(a);
  if ("object" == b || "array" == b) {
    if (va(a.clone)) {
      return a.clone();
    }
    var b = "array" == b ? [] : {}, c;
    for (c in a) {
      b[c] = Wb(a[c]);
    }
    return b;
  }
  return a;
}, Xb = function(a) {
  var b = {}, c;
  for (c in a) {
    b[a[c]] = c;
  }
  return b;
}, Yb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Zb = function(a, b) {
  for (var c, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (c in e) {
      a[c] = e[c];
    }
    for (var h = 0;h < Yb.length;h++) {
      c = Yb[h], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
    }
  }
};
var $b;
a: {
  var ac = g.navigator;
  if (ac) {
    var bc = ac.userAgent;
    if (bc) {
      $b = bc;
      break a;
    }
  }
  $b = "";
}
var B = function(a) {
  return -1 != $b.indexOf(a);
};
var cc = function() {
  return (B("Chrome") || B("CriOS")) && !B("Edge");
};
var dc = function() {
  return B("iPhone") && !B("iPod") && !B("iPad");
};
var ec = function(a) {
  ec[" "](a);
  return a;
};
ec[" "] = pa;
var fc = function(a, b) {
  try {
    return ec(a[b]), !0;
  } catch (c) {
  }
  return !1;
}, gc = function(a, b, c, e) {
  e = e ? e(b) : b;
  return Object.prototype.hasOwnProperty.call(a, e) ? a[e] : a[e] = c(b);
};
var hc = B("Opera"), ic = B("Trident") || B("MSIE"), jc = B("Edge"), kc = B("Gecko") && !(-1 != $b.toLowerCase().indexOf("webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"), lc = -1 != $b.toLowerCase().indexOf("webkit") && !B("Edge"), mc = lc && B("Mobile"), nc = g.navigator || null, oc = nc && nc.platform || "", pc = B("Macintosh"), qc = B("Windows"), rc = B("Linux") || B("CrOS"), sc = B("Android"), tc = dc(), uc = B("iPad"), vc = B("iPod"), wc = function() {
  var a = g.document;
  return a ? a.documentMode : void 0;
}, xc;
a: {
  var yc = "", zc = function() {
    var a = $b;
    if (kc) {
      return /rv\:([^\);]+)(\)|;)/.exec(a);
    }
    if (jc) {
      return /Edge\/([\d\.]+)/.exec(a);
    }
    if (ic) {
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    }
    if (lc) {
      return /WebKit\/(\S+)/.exec(a);
    }
    if (hc) {
      return /(?:Version)[ \/]?(\S+)/.exec(a);
    }
  }();
  zc && (yc = zc ? zc[1] : "");
  if (ic) {
    var Ac = wc();
    if (null != Ac && Ac > parseFloat(yc)) {
      xc = String(Ac);
      break a;
    }
  }
  xc = yc;
}
var Bc = xc, Cc = {}, Dc = function(a) {
  return gc(Cc, a, function() {
    return 0 <= Ua(Bc, a);
  });
}, Ec;
var Fc = g.document;
Ec = Fc && ic ? wc() || ("CSS1Compat" == Fc.compatMode ? parseInt(Bc, 10) : 5) : void 0;
var Gc = function(a) {
  this.Ia = a;
}, D = function(a) {
  var b = Hc.get(a);
  b || (b = new Gc(a), Hc.set(a, b));
  return b;
}, Kc = function(a) {
  a.level >= Ic && Jc.forEach(function(b) {
    return b(a);
  });
};
d = Gc.prototype;
d.log = function(a, b, c) {
  if (a >= Ic) {
    "function" == typeof b && (b = b());
    var e = {w:this.Ia, level:a, time:Date.now(), message:b, Hh:c};
    Jc.forEach(function(a) {
      return a(e);
    });
  }
};
d.error = function(a, b) {
  this.log(3, a, b);
};
d.v = function(a, b) {
  this.log(2, a, b);
};
d.info = function(a, b) {
  this.log(1, a, b);
};
d.L = function(a, b) {
  this.log(0, a, b);
};
var Mc = function(a, b) {
  a = Lc.indexOf(a);
  return -1 == a ? b : a;
}, Nc = function(a) {
  return 600 >= a ? 0 : 850 >= a ? 1 : 950 >= a ? 2 : 3;
}, Jc = [], Hc = new Map, Lc = ["FINE", "INFO", "WARNING", "SEVERE"], Ic = 1;
var Oc = function() {
  var a = this;
  this.promise = new Promise(function(b, c) {
    a.Xca = b;
    a.rca = c;
  });
};
Oc.prototype.resolve = function(a) {
  this.Xca(a);
};
Oc.prototype.reject = function(a) {
  this.rca(a);
};
var Pc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/, Qc = function(a, b) {
  return a ? b ? decodeURI(a) : decodeURIComponent(a) : a;
}, Rc = function(a, b) {
  if (a) {
    a = a.split("&");
    for (var c = 0;c < a.length;c++) {
      var e = a[c].indexOf("="), f, h = null;
      0 <= e ? (f = a[c].substring(0, e), h = a[c].substring(e + 1)) : f = a[c];
      b(f, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "");
    }
  }
}, Sc = function(a) {
  if (a[1]) {
    var b = a[0], c = b.indexOf("#");
    0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
    c = b.indexOf("?");
    0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0);
  }
  return a.join("");
}, Tc = function(a, b, c) {
  if (ta(b)) {
    cb(b);
    for (var e = 0;e < b.length;e++) {
      Tc(a, String(b[e]), c);
    }
  } else {
    null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)));
  }
}, Uc = function(a, b) {
  for (var c in b) {
    Tc(c, b[c], a);
  }
  return a;
}, Vc = function(a) {
  a = Uc([], a);
  a[0] = "";
  return a.join("");
}, Wc = function(a, b, c) {
  a = [a, "&", b];
  null != c && a.push("=", encodeURIComponent(String(c)));
  return Sc(a);
}, Xc = /#|$/, Yc = function(a, b) {
  var c = a.search(Xc), e;
  a: {
    e = 0;
    for (var f = b.length;0 <= (e = a.indexOf(b, e)) && e < c;) {
      var h = a.charCodeAt(e - 1);
      if (38 == h || 63 == h) {
        if (h = a.charCodeAt(e + f), !h || 61 == h || 38 == h || 35 == h) {
          break a;
        }
      }
      e += f + 1;
    }
    e = -1;
  }
  if (0 > e) {
    return null;
  }
  f = a.indexOf("&", e);
  if (0 > f || f > c) {
    f = c;
  }
  e += b.length + 1;
  return decodeURIComponent(a.substr(e, f - e).replace(/\+/g, " "));
}, Zc = function(a, b) {
  w(0 > a.indexOf("#") && 0 > a.indexOf("?"), "goog.uri.utils: Fragment or query identifiers are not supported: [%s]", a);
  var c = a.length - 1;
  0 <= c && a.indexOf("/", c) == c && (a = a.substr(0, a.length - 1));
  Ea(b, "/") && (b = b.substr(1));
  return Ra(a, "/", b);
};
var $c = function() {
  this.rn = this.rn;
  this.Jl = this.Jl;
};
d = $c.prototype;
d.rn = !1;
d.isDisposed = function() {
  return this.rn;
};
d.ob = function() {
  this.rn || (this.rn = !0, this.aa());
};
d.pa = function(a) {
  this.UH(Ba(ad, a));
};
d.UH = function(a, b) {
  this.rn ? l(b) ? a.call(b) : a() : (this.Jl || (this.Jl = []), this.Jl.push(l(b) ? t(a, b) : a));
};
d.aa = function() {
  if (this.Jl) {
    for (;this.Jl.length;) {
      this.Jl.shift()();
    }
  }
};
var ad = function(a) {
  a && "function" == typeof a.ob && a.ob();
}, bd = function(a) {
  for (var b = 0, c = arguments.length;b < c;++b) {
    var e = arguments[b];
    ua(e) ? bd.apply(null, e) : ad(e);
  }
};
var E = function(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Ul = !1;
  this.kS = !0;
};
E.prototype.stopPropagation = function() {
  this.Ul = !0;
};
E.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.kS = !1;
};
var cd = !ic || 9 <= Number(Ec), dd = ic && !Dc("9");
!lc || Dc("528");
kc && Dc("1.9b") || ic && Dc("8") || hc && Dc("9.5") || lc && Dc("528");
kc && !Dc("8") || ic && Dc("9");
var ed = function(a) {
  return lc ? "webkit" + a : hc ? "o" + a.toLowerCase() : a.toLowerCase();
}, fd = ed("AnimationStart"), gd = ed("AnimationEnd"), hd = ed("AnimationIteration"), id = ed("TransitionEnd");
var jd = function(a, b) {
  E.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.kq = this.state = null;
  a && this.init(a, b);
};
v(jd, E);
jd.prototype.init = function(a, b) {
  var c = this.type = a.type, e = a.changedTouches ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  (b = a.relatedTarget) ? kc && (fc(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
  this.relatedTarget = b;
  null === e ? (this.offsetX = lc || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = lc || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 
  0);
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.kq = a;
  a.defaultPrevented && this.preventDefault();
};
jd.prototype.stopPropagation = function() {
  jd.X.stopPropagation.call(this);
  this.kq.stopPropagation ? this.kq.stopPropagation() : this.kq.cancelBubble = !0;
};
jd.prototype.preventDefault = function() {
  jd.X.preventDefault.call(this);
  var a = this.kq;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, dd) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var kd = "closure_listenable_" + (1e6 * Math.random() | 0), ld = function(a) {
  return !(!a || !a[kd]);
}, nd = 0;
var od = function(a, b, c, e, f, h) {
  this.listener = a;
  this.proxy = b;
  this.src = c;
  this.type = e;
  this.capture = !!f;
  this.Hc = h;
  this.key = ++nd;
  this.removed = this.Lt = !1;
};
od.prototype.Zv = function() {
  this.removed = !0;
  this.Hc = this.src = this.proxy = this.listener = null;
};
var pd = function(a) {
  this.src = a;
  this.Ic = {};
  this.bt = 0;
};
d = pd.prototype;
d.add = function(a, b, c, e, f) {
  var h = a.toString();
  a = this.Ic[h];
  a || (a = this.Ic[h] = [], this.bt++);
  var k = qd(a, b, e, f);
  -1 < k ? (b = a[k], c || (b.Lt = !1)) : (b = new od(b, null, this.src, h, !!e, f), b.Lt = c, a.push(b));
  return b;
};
d.remove = function(a, b, c, e) {
  a = a.toString();
  if (!(a in this.Ic)) {
    return !1;
  }
  var f = this.Ic[a];
  b = qd(f, b, c, e);
  return -1 < b ? (f[b].Zv(), vb(f, b), 0 == f.length && (delete this.Ic[a], this.bt--), !0) : !1;
};
d.UR = function(a) {
  var b = a.type;
  if (!(b in this.Ic)) {
    return !1;
  }
  var c = wb(this.Ic[b], a);
  c && (a.Zv(), 0 == this.Ic[b].length && (delete this.Ic[b], this.bt--));
  return c;
};
d.removeAll = function(a) {
  a = a && a.toString();
  var b = 0, c;
  for (c in this.Ic) {
    if (!a || c == a) {
      for (var e = this.Ic[c], f = 0;f < e.length;f++) {
        ++b, e[f].Zv();
      }
      delete this.Ic[c];
      this.bt--;
    }
  }
  return b;
};
d.Lq = function(a, b, c, e) {
  a = this.Ic[a.toString()];
  var f = -1;
  a && (f = qd(a, b, c, e));
  return -1 < f ? a[f] : null;
};
d.hasListener = function(a, b) {
  var c = l(a), e = c ? a.toString() : "", f = l(b);
  return Mb(this.Ic, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(c && a[h].type != e || f && a[h].capture != b)) {
        return !0;
      }
    }
    return !1;
  });
};
var qd = function(a, b, c, e) {
  for (var f = 0;f < a.length;++f) {
    var h = a[f];
    if (!h.removed && h.listener == b && h.capture == !!c && h.Hc == e) {
      return f;
    }
  }
  return -1;
};
var rd = "closure_lm_" + (1e6 * Math.random() | 0), sd = {}, td = 0, ud = function(a, b, c, e, f) {
  if (ta(b)) {
    for (var h = 0;h < b.length;h++) {
      ud(a, b[h], c, e, f);
    }
    return null;
  }
  c = vd(c);
  return ld(a) ? a.listen(b, c, e, f) : wd(a, b, c, !1, e, f);
}, wd = function(a, b, c, e, f, h) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var k = !!f, p = xd(a);
  p || (a[rd] = p = new pd(a));
  c = p.add(b, c, e, f, h);
  if (c.proxy) {
    return c;
  }
  e = yd();
  c.proxy = e;
  e.src = a;
  e.listener = c;
  if (a.addEventListener) {
    a.addEventListener(b.toString(), e, k);
  } else {
    if (a.attachEvent) {
      a.attachEvent(zd(b.toString()), e);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  td++;
  return c;
}, yd = function() {
  var a = Ad, b = cd ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}, Bd = function(a, b, c, e, f) {
  if (ta(b)) {
    for (var h = 0;h < b.length;h++) {
      Bd(a, b[h], c, e, f);
    }
    return null;
  }
  c = vd(c);
  return ld(a) ? a.io(b, c, e, f) : wd(a, b, c, !0, e, f);
}, Cd = function(a, b, c, e, f) {
  if (ta(b)) {
    for (var h = 0;h < b.length;h++) {
      Cd(a, b[h], c, e, f);
    }
    return null;
  }
  c = vd(c);
  if (ld(a)) {
    return a.vd(b, c, e, f);
  }
  if (!a) {
    return !1;
  }
  if (a = xd(a)) {
    if (b = a.Lq(b, c, !!e, f)) {
      return Dd(b);
    }
  }
  return !1;
}, Dd = function(a) {
  if (q(a) || !a || a.removed) {
    return !1;
  }
  var b = a.src;
  if (ld(b)) {
    return b.nV(a);
  }
  var c = a.type, e = a.proxy;
  b.removeEventListener ? b.removeEventListener(c, e, a.capture) : b.detachEvent && b.detachEvent(zd(c), e);
  td--;
  (c = xd(b)) ? (c.UR(a), 0 == c.bt && (c.src = null, b[rd] = null)) : a.Zv();
  return !0;
}, Ed = function(a, b) {
  if (!a) {
    return 0;
  }
  if (ld(a)) {
    return a.TR(b);
  }
  a = xd(a);
  if (!a) {
    return 0;
  }
  var c = 0;
  b = b && b.toString();
  for (var e in a.Ic) {
    if (!b || e == b) {
      for (var f = a.Ic[e].concat(), h = 0;h < f.length;++h) {
        Dd(f[h]) && ++c;
      }
    }
  }
  return c;
}, zd = function(a) {
  return a in sd ? sd[a] : sd[a] = "on" + a;
}, Gd = function(a, b, c, e) {
  var f = !0;
  if (a = xd(a)) {
    if (b = a.Ic[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var h = b[a];
        h && h.capture == c && !h.removed && (h = Fd(h, e), f = f && !1 !== h);
      }
    }
  }
  return f;
}, Fd = function(a, b) {
  var c = a.listener, e = a.Hc || a.src;
  a.Lt && Dd(a);
  return c.call(e, b);
}, Ad = function(a, b) {
  if (a.removed) {
    return !0;
  }
  if (!cd) {
    var c = b || oa("window.event");
    b = new jd(c, this);
    var e = !0;
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {
      a: {
        var f = !1;
        if (0 == c.keyCode) {
          try {
            c.keyCode = -1;
            break a;
          } catch (k) {
            f = !0;
          }
        }
        if (f || void 0 == c.returnValue) {
          c.returnValue = !0;
        }
      }
      c = [];
      for (f = b.currentTarget;f;f = f.parentNode) {
        c.push(f);
      }
      a = a.type;
      for (f = c.length - 1;!b.Ul && 0 <= f;f--) {
        b.currentTarget = c[f];
        var h = Gd(c[f], a, !0, b), e = e && h;
      }
      for (f = 0;!b.Ul && f < c.length;f++) {
        b.currentTarget = c[f], h = Gd(c[f], a, !1, b), e = e && h;
      }
    }
    return e;
  }
  return Fd(a, new jd(b, this));
}, xd = function(a) {
  a = a[rd];
  return a instanceof pd ? a : null;
}, Hd = "__closure_events_fn_" + (1e9 * Math.random() >>> 0), vd = function(a) {
  w(a, "Listener can not be null.");
  if (va(a)) {
    return a;
  }
  w(a.handleEvent, "An object listener must have handleEvent method.");
  a[Hd] || (a[Hd] = function(b) {
    return a.handleEvent(b);
  });
  return a[Hd];
};
var F = function() {
  $c.call(this);
  this.Cg = new pd(this);
  this.$X = this;
  this.Sr = null;
};
v(F, $c);
F.prototype[kd] = !0;
d = F.prototype;
d.tx = function(a) {
  this.Sr = a;
};
d.addEventListener = function(a, b, c, e) {
  ud(this, a, b, c, e);
};
d.removeEventListener = function(a, b, c, e) {
  Cd(this, a, b, c, e);
};
d.dispatchEvent = function(a) {
  this.jI();
  var b, c = this.Sr;
  if (c) {
    b = [];
    for (var e = 1;c;c = c.Sr) {
      b.push(c), w(1000 > ++e, "infinite loop");
    }
  }
  c = this.$X;
  e = a.type || a;
  if (n(a)) {
    a = new E(a, c);
  } else {
    if (a instanceof E) {
      a.target = a.target || c;
    } else {
      var f = a;
      a = new E(e, c);
      Zb(a, f);
    }
  }
  var f = !0, h;
  if (b) {
    for (var k = b.length - 1;!a.Ul && 0 <= k;k--) {
      h = a.currentTarget = b[k], f = h.Bu(e, !0, a) && f;
    }
  }
  a.Ul || (h = a.currentTarget = c, f = h.Bu(e, !0, a) && f, a.Ul || (f = h.Bu(e, !1, a) && f));
  if (b) {
    for (k = 0;!a.Ul && k < b.length;k++) {
      h = a.currentTarget = b[k], f = h.Bu(e, !1, a) && f;
    }
  }
  return f;
};
d.aa = function() {
  F.X.aa.call(this);
  this.TR();
  this.Sr = null;
};
d.listen = function(a, b, c, e) {
  this.jI();
  return this.Cg.add(String(a), b, !1, c, e);
};
d.io = function(a, b, c, e) {
  return this.Cg.add(String(a), b, !0, c, e);
};
d.vd = function(a, b, c, e) {
  return this.Cg.remove(String(a), b, c, e);
};
d.nV = function(a) {
  return this.Cg.UR(a);
};
d.TR = function(a) {
  return this.Cg ? this.Cg.removeAll(a) : 0;
};
d.Bu = function(a, b, c) {
  a = this.Cg.Ic[String(a)];
  if (!a) {
    return !0;
  }
  a = a.concat();
  for (var e = !0, f = 0;f < a.length;++f) {
    var h = a[f];
    if (h && !h.removed && h.capture == b) {
      var k = h.listener, p = h.Hc || h.src;
      h.Lt && this.nV(h);
      e = !1 !== k.call(p, c) && e;
    }
  }
  return e && 0 != c.kS;
};
d.Lq = function(a, b, c, e) {
  return this.Cg.Lq(String(a), b, c, e);
};
d.hasListener = function(a, b) {
  return this.Cg.hasListener(l(a) ? String(a) : void 0, b);
};
d.jI = function() {
  w(this.Cg, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
};
var Id = function(a, b, c) {
  this.U7 = c;
  this.i0 = a;
  this.gF = b;
  this.rw = 0;
  this.gf = null;
};
Id.prototype.get = function() {
  var a;
  0 < this.rw ? (this.rw--, a = this.gf, this.gf = a.next, a.next = null) : a = this.i0();
  return a;
};
Id.prototype.put = function(a) {
  this.gF(a);
  this.rw < this.U7 && (this.rw++, a.next = this.gf, this.gf = a);
};
var Jd = function(a) {
  return function() {
    return a;
  };
}, Kd = Jd(!1), Ld = Jd(!0), Md = function(a) {
  return a;
}, Nd = function(a) {
  return function() {
    throw Error(a);
  };
}, Od = function(a) {
  return function() {
    return !a.apply(this, arguments);
  };
};
var Pd = function(a) {
  g.setTimeout(function() {
    throw a;
  }, 0);
}, Qd, Sd = function() {
  var a = g.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !B("Presto") && (a = function() {
    var a = document.createElement("IFRAME");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), e = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = t(function(a) {
      if (("*" == e || a.origin == e) && a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, e);
    }};
  });
  if ("undefined" !== typeof a && !B("Trident") && !B("MSIE")) {
    var b = new a, c = {}, e = c;
    b.port1.onmessage = function() {
      if (l(c.next)) {
        c = c.next;
        var a = c.Nt;
        c.Nt = null;
        a();
      }
    };
    return function(a) {
      e.next = {Nt:a};
      e = e.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
    var b = document.createElement("SCRIPT");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    g.setTimeout(a, 0);
  };
};
var Td = function() {
  this.ty = this.Lm = null;
}, Vd = new Id(function() {
  return new Ud;
}, function(a) {
  a.reset();
}, 100);
Td.prototype.add = function(a, b) {
  var c = this.h5();
  c.set(a, b);
  this.ty ? this.ty.next = c : (w(!this.Lm), this.Lm = c);
  this.ty = c;
};
Td.prototype.remove = function() {
  var a = null;
  this.Lm && (a = this.Lm, this.Lm = this.Lm.next, this.Lm || (this.ty = null), a.next = null);
  return a;
};
Td.prototype.jda = function(a) {
  Vd.put(a);
};
Td.prototype.h5 = function() {
  return Vd.get();
};
var Ud = function() {
  this.next = this.scope = this.xA = null;
};
Ud.prototype.set = function(a, b) {
  this.xA = a;
  this.scope = b;
  this.next = null;
};
Ud.prototype.reset = function() {
  this.next = this.scope = this.xA = null;
};
var $d = function(a, b) {
  Wd || Xd();
  Yd || (Wd(), Yd = !0);
  Zd.add(a, b);
}, Wd, Xd = function() {
  if (-1 != String(g.Promise).indexOf("[native code]")) {
    var a = g.Promise.resolve(void 0);
    Wd = function() {
      a.then(ae);
    };
  } else {
    Wd = function() {
      var a = ae;
      !va(g.setImmediate) || g.Window && g.Window.prototype && !B("Edge") && g.Window.prototype.setImmediate == g.setImmediate ? (Qd || (Qd = Sd()), Qd(a)) : g.setImmediate(a);
    };
  }
}, Yd = !1, Zd = new Td, ae = function() {
  for (var a;a = Zd.remove();) {
    try {
      a.xA.call(a.scope);
    } catch (b) {
      Pd(b);
    }
    Zd.jda(a);
  }
  Yd = !1;
};
var be = function(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_Thenable = !0;
}, ce = function(a) {
  if (!a) {
    return !1;
  }
  try {
    return !!a.$goog_Thenable;
  } catch (b) {
    return !1;
  }
};
var ee = function(a, b) {
  this.O = 0;
  this.vi = void 0;
  this.Um = this.th = this.qc = null;
  this.ov = this.sA = !1;
  if (a != pa) {
    try {
      var c = this;
      a.call(b, function(a) {
        c.cm(2, a);
      }, function(a) {
        if (!(a instanceof de)) {
          try {
            if (a instanceof Error) {
              throw a;
            }
            throw Error("Promise rejected.");
          } catch (f) {
          }
        }
        c.cm(3, a);
      });
    } catch (e) {
      this.cm(3, e);
    }
  }
}, fe = function() {
  this.next = this.context = this.wo = this.Kl = this.Bk = null;
  this.Kp = !1;
};
fe.prototype.reset = function() {
  this.context = this.wo = this.Kl = this.Bk = null;
  this.Kp = !1;
};
var ge = new Id(function() {
  return new fe;
}, function(a) {
  a.reset();
}, 100), he = function(a, b, c) {
  var e = ge.get();
  e.Kl = a;
  e.wo = b;
  e.context = c;
  return e;
}, ie = function(a) {
  if (a instanceof ee) {
    return a;
  }
  var b = new ee(pa);
  b.cm(2, a);
  return b;
}, je = function(a) {
  return new ee(function(b, c) {
    c(a);
  });
}, le = function(a, b, c) {
  ke(a, b, c, null) || $d(Ba(b, a));
}, me = function(a) {
  return new ee(function(b, c) {
    var e = a.length, f = [];
    if (e) {
      for (var h = function(a, c) {
        e--;
        f[a] = c;
        0 == e && b(f);
      }, k = function(a) {
        c(a);
      }, p = 0, r;p < a.length;p++) {
        r = a[p], le(r, Ba(h, p), k);
      }
    } else {
      b(f);
    }
  });
}, ne = function(a) {
  return new ee(function(b) {
    var c = a.length, e = [];
    if (c) {
      for (var f = function(a, f, h) {
        c--;
        e[a] = f ? {Gu:!0, value:h} : {Gu:!1, reason:h};
        0 == c && b(e);
      }, h = 0, k;h < a.length;h++) {
        k = a[h], le(k, Ba(f, h, !0), Ba(f, h, !1));
      }
    } else {
      b(e);
    }
  });
}, G = function() {
  var a, b, c = new ee(function(c, f) {
    a = c;
    b = f;
  });
  return new oe(c, a, b);
};
ee.prototype.then = function(a, b, c) {
  null != a && ab(a, "opt_onFulfilled should be a function.");
  null != b && ab(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  return this.GH(va(a) ? a : null, va(b) ? b : null, c);
};
be(ee);
d = ee.prototype;
d.Xia = function(a, b, c) {
  null != a && ab(a, "opt_onFulfilled should be a function.");
  null != b && ab(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  this.Oy(he(a || pa, b || null, c));
};
d.jk = function(a, b) {
  a = he(a, a, b);
  a.Kp = !0;
  this.Oy(a);
  return this;
};
d.zb = function(a, b) {
  return this.GH(null, a, b);
};
d.cancel = function(a) {
  0 == this.O && $d(function() {
    var b = new de(a);
    this.GI(b);
  }, this);
};
d.GI = function(a) {
  0 == this.O && (this.qc ? (this.qc.PZ(this, a), this.qc = null) : this.cm(3, a));
};
d.PZ = function(a, b) {
  if (this.th) {
    for (var c = 0, e = null, f = null, h = this.th;h && (h.Kp || (c++, h.Bk == a && (e = h), !(e && 1 < c)));h = h.next) {
      e || (f = h);
    }
    e && (0 == this.O && 1 == c ? this.GI(b) : (f ? this.yca(f) : this.jR(), this.aK(e, 3, b)));
  }
};
d.Oy = function(a) {
  this.C6() || 2 != this.O && 3 != this.O || this.uS();
  this.Fba(a);
};
d.GH = function(a, b, c) {
  var e = he(null, null, null);
  e.Bk = new ee(function(f, h) {
    e.Kl = a ? function(b) {
      try {
        var e = a.call(c, b);
        f(e);
      } catch (r) {
        h(r);
      }
    } : f;
    e.wo = b ? function(a) {
      try {
        var e = b.call(c, a);
        !l(e) && a instanceof de ? h(a) : f(e);
      } catch (r) {
        h(r);
      }
    } : h;
  });
  e.Bk.qc = this;
  this.Oy(e);
  return e.Bk;
};
d.mja = function(a) {
  w(1 == this.O);
  this.O = 0;
  this.cm(2, a);
};
d.nja = function(a) {
  w(1 == this.O);
  this.O = 0;
  this.cm(3, a);
};
d.cm = function(a, b) {
  0 == this.O && (this === b && (a = 3, b = new TypeError("Promise cannot resolve to itself")), this.O = 1, ke(b, this.mja, this.nja, this) || (this.vi = b, this.O = a, this.qc = null, this.uS(), 3 != a || b instanceof de || pe(this, b)));
};
var ke = function(a, b, c, e) {
  if (a instanceof ee) {
    return a.Xia(b, c, e), !0;
  }
  if (ce(a)) {
    return a.then(b, c, e), !0;
  }
  if (wa(a)) {
    try {
      var f = a.then;
      if (va(f)) {
        return qe(a, f, b, c, e), !0;
      }
    } catch (h) {
      return c.call(e, h), !0;
    }
  }
  return !1;
}, qe = function(a, b, c, e, f) {
  var h = !1, k = function(a) {
    h || (h = !0, c.call(f, a));
  }, p = function(a) {
    h || (h = !0, e.call(f, a));
  };
  try {
    b.call(a, k, p);
  } catch (r) {
    p(r);
  }
};
d = ee.prototype;
d.uS = function() {
  this.sA || (this.sA = !0, $d(this.vu, this));
};
d.C6 = function() {
  return !!this.th;
};
d.Fba = function(a) {
  w(null != a.Kl);
  this.Um ? this.Um.next = a : this.th = a;
  this.Um = a;
};
d.jR = function() {
  var a = null;
  this.th && (a = this.th, this.th = a.next, a.next = null);
  this.th || (this.Um = null);
  null != a && w(null != a.Kl);
  return a;
};
d.yca = function(a) {
  w(this.th);
  w(null != a);
  a.next == this.Um && (this.Um = a);
  a.next = a.next.next;
};
d.vu = function() {
  for (var a;a = this.jR();) {
    this.aK(a, this.O, this.vi);
  }
  this.sA = !1;
};
d.aK = function(a, b, c) {
  3 == b && a.wo && !a.Kp && this.Ica();
  if (a.Bk) {
    a.Bk.qc = null, re(a, b, c);
  } else {
    try {
      a.Kp ? a.Kl.call(a.context) : re(a, b, c);
    } catch (e) {
      se.call(null, e);
    }
  }
  ge.put(a);
};
var re = function(a, b, c) {
  2 == b ? a.Kl.call(a.context, c) : a.wo && a.wo.call(a.context, c);
};
ee.prototype.Ica = function() {
  var a;
  for (a = this;a && a.ov;a = a.qc) {
    a.ov = !1;
  }
};
var pe = function(a, b) {
  a.ov = !0;
  $d(function() {
    a.ov && se.call(null, b);
  });
}, se = Pd, de = function(a) {
  Ca.call(this, a);
};
v(de, Ca);
de.prototype.name = "cancel";
var oe = function(a, b, c) {
  this.promise = a;
  this.resolve = b;
  this.reject = c;
};
var te = function(a, b) {
  F.call(this);
  this.Ae = a || 1;
  this.jp = b || g;
  this.pz = t(this.$ia, this);
  this.dD = u();
};
v(te, F);
d = te.prototype;
d.enabled = !1;
d.Ab = null;
d.setInterval = function(a) {
  this.Ae = a;
  this.Ab && this.enabled ? (this.stop(), this.start()) : this.Ab && this.stop();
};
d.$ia = function() {
  if (this.enabled) {
    var a = u() - this.dD;
    0 < a && a < 0.8 * this.Ae ? this.Ab = this.jp.setTimeout(this.pz, this.Ae - a) : (this.Ab && (this.jp.clearTimeout(this.Ab), this.Ab = null), this.F0(), this.enabled && (this.Ab = this.jp.setTimeout(this.pz, this.Ae), this.dD = u()));
  }
};
d.F0 = function() {
  this.dispatchEvent("tick");
};
d.start = function() {
  this.enabled = !0;
  this.Ab || (this.Ab = this.jp.setTimeout(this.pz, this.Ae), this.dD = u());
};
d.stop = function() {
  this.enabled = !1;
  this.Ab && (this.jp.clearTimeout(this.Ab), this.Ab = null);
};
d.aa = function() {
  te.X.aa.call(this);
  this.stop();
  delete this.jp;
};
var ue = function(a, b, c) {
  if (va(a)) {
    c && (a = t(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = t(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < Number(b) ? -1 : g.setTimeout(a, b || 0);
}, ve = function(a) {
  g.clearTimeout(a);
}, we = function(a, b) {
  var c = null;
  return (new ee(function(e, f) {
    c = ue(function() {
      e(b);
    }, a);
    -1 == c && f(Error("Failed to schedule timer."));
  })).zb(function(a) {
    ve(c);
    throw a;
  });
};
var xe = "StopIteration" in g ? g.StopIteration : {message:"StopIteration", stack:""}, ye = function() {
};
ye.prototype.next = function() {
  throw xe;
};
ye.prototype.rg = function() {
  return this;
};
var ze = function(a) {
  if (a instanceof ye) {
    return a;
  }
  if ("function" == typeof a.rg) {
    return a.rg(!1);
  }
  if (ua(a)) {
    var b = 0, c = new ye;
    c.next = function() {
      for (;;) {
        if (b >= a.length) {
          throw xe;
        }
        if (b in a) {
          return a[b++];
        }
        b++;
      }
    };
    return c;
  }
  throw Error("Not implemented");
}, Ae = function(a, b, c) {
  if (ua(a)) {
    try {
      x(a, b, c);
    } catch (e) {
      if (e !== xe) {
        throw e;
      }
    }
  } else {
    a = ze(a);
    try {
      for (;;) {
        b.call(c, a.next(), void 0, a);
      }
    } catch (e) {
      if (e !== xe) {
        throw e;
      }
    }
  }
}, Be = function(a, b, c) {
  a = ze(a);
  try {
    for (;;) {
      if (b.call(c, a.next(), void 0, a)) {
        return !0;
      }
    }
  } catch (e) {
    if (e !== xe) {
      throw e;
    }
  }
  return !1;
}, De = function(a) {
  if (ua(a)) {
    return z(a);
  }
  a = ze(a);
  var b = [];
  Ae(a, function(a) {
    b.push(a);
  });
  return b;
};
var H = function(a, b) {
  this.Lb = {};
  this.Wa = [];
  this.Fm = this.tb = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < c;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.addAll(a);
  }
};
d = H.prototype;
d.ja = function() {
  return this.tb;
};
d.T = function() {
  this.Zm();
  for (var a = [], b = 0;b < this.Wa.length;b++) {
    a.push(this.Lb[this.Wa[b]]);
  }
  return a;
};
d.ub = function() {
  this.Zm();
  return this.Wa.concat();
};
d.Ra = function(a) {
  return Ee(this.Lb, a);
};
d.Fk = function(a) {
  for (var b = 0;b < this.Wa.length;b++) {
    var c = this.Wa[b];
    if (Ee(this.Lb, c) && this.Lb[c] == a) {
      return !0;
    }
  }
  return !1;
};
d.equals = function(a, b) {
  if (this === a) {
    return !0;
  }
  if (this.tb != a.ja()) {
    return !1;
  }
  b = b || Fe;
  this.Zm();
  for (var c, e = 0;c = this.Wa[e];e++) {
    if (!b(this.get(c), a.get(c))) {
      return !1;
    }
  }
  return !0;
};
var Fe = function(a, b) {
  return a === b;
};
d = H.prototype;
d.nc = function() {
  return 0 == this.tb;
};
d.clear = function() {
  this.Lb = {};
  this.Fm = this.tb = this.Wa.length = 0;
};
d.remove = function(a) {
  return Ee(this.Lb, a) ? (delete this.Lb[a], this.tb--, this.Fm++, this.Wa.length > 2 * this.tb && this.Zm(), !0) : !1;
};
d.Zm = function() {
  if (this.tb != this.Wa.length) {
    for (var a = 0, b = 0;a < this.Wa.length;) {
      var c = this.Wa[a];
      Ee(this.Lb, c) && (this.Wa[b++] = c);
      a++;
    }
    this.Wa.length = b;
  }
  if (this.tb != this.Wa.length) {
    for (var e = {}, b = a = 0;a < this.Wa.length;) {
      c = this.Wa[a], Ee(e, c) || (this.Wa[b++] = c, e[c] = 1), a++;
    }
    this.Wa.length = b;
  }
};
d.get = function(a, b) {
  return Ee(this.Lb, a) ? this.Lb[a] : b;
};
d.set = function(a, b) {
  Ee(this.Lb, a) || (this.tb++, this.Wa.push(a), this.Fm++);
  this.Lb[a] = b;
};
d.addAll = function(a) {
  var b;
  a instanceof H ? (b = a.ub(), a = a.T()) : (b = Ob(a), a = Nb(a));
  for (var c = 0;c < b.length;c++) {
    this.set(b[c], a[c]);
  }
};
d.forEach = function(a, b) {
  for (var c = this.ub(), e = 0;e < c.length;e++) {
    var f = c[e], h = this.get(f);
    a.call(b, h, f, this);
  }
};
d.clone = function() {
  return new H(this);
};
d.g = function() {
  this.Zm();
  for (var a = {}, b = 0;b < this.Wa.length;b++) {
    var c = this.Wa[b];
    a[c] = this.Lb[c];
  }
  return a;
};
d.jM = function() {
  return this.rg(!0);
};
d.nC = function() {
  return this.rg(!1);
};
d.rg = function(a) {
  this.Zm();
  var b = 0, c = this.Fm, e = this, f = new ye;
  f.next = function() {
    if (c != e.Fm) {
      throw Error("The map has changed since the iterator was created");
    }
    if (b >= e.Wa.length) {
      throw xe;
    }
    var f = e.Wa[b++];
    return a ? f : e.Lb[f];
  };
  return f;
};
var Ee = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
var Ge = function(a) {
  if (a.ja && "function" == typeof a.ja) {
    a = a.ja();
  } else {
    if (ua(a) || n(a)) {
      a = a.length;
    } else {
      var b = 0, c;
      for (c in a) {
        b++;
      }
      a = b;
    }
  }
  return a;
}, He = function(a) {
  if (a.T && "function" == typeof a.T) {
    return a.T();
  }
  if (n(a)) {
    return a.split("");
  }
  if (ua(a)) {
    for (var b = [], c = a.length, e = 0;e < c;e++) {
      b.push(a[e]);
    }
    return b;
  }
  return Nb(a);
}, Ie = function(a) {
  if (a.ub && "function" == typeof a.ub) {
    return a.ub();
  }
  if (!a.T || "function" != typeof a.T) {
    if (ua(a) || n(a)) {
      var b = [];
      a = a.length;
      for (var c = 0;c < a;c++) {
        b.push(c);
      }
      return b;
    }
    return Ob(a);
  }
}, Je = function(a) {
  return a.nc && "function" == typeof a.nc ? a.nc() : ua(a) || n(a) ? qb(a) : Sb(a);
}, Ke = function(a, b, c) {
  if (a.forEach && "function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (ua(a) || n(a)) {
      x(a, b, c);
    } else {
      for (var e = Ie(a), f = He(a), h = f.length, k = 0;k < h;k++) {
        b.call(c, f[k], e && e[k], a);
      }
    }
  }
}, Le = function(a, b, c) {
  if ("function" == typeof a.map) {
    return a.map(b, c);
  }
  if (ua(a) || n(a)) {
    return y(a, b, c);
  }
  var e, f = Ie(a), h = He(a), k = h.length;
  if (f) {
    e = {};
    for (var p = 0;p < k;p++) {
      e[f[p]] = b.call(c, h[p], f[p], a);
    }
  } else {
    for (e = [], p = 0;p < k;p++) {
      e[p] = b.call(c, h[p], void 0, a);
    }
  }
  return e;
}, Me = function(a, b, c) {
  if ("function" == typeof a.every) {
    return a.every(b, c);
  }
  if (ua(a) || n(a)) {
    return lb(a, b, c);
  }
  for (var e = Ie(a), f = He(a), h = f.length, k = 0;k < h;k++) {
    if (!b.call(c, f[k], e && e[k], a)) {
      return !1;
    }
  }
  return !0;
};
var Ne = function(a) {
  this.Lb = new H;
  a && this.addAll(a);
}, Oe = function(a) {
  var b = typeof a;
  return "object" == b && a || "function" == b ? "o" + (a[xa] || (a[xa] = ++ya)) : b.substr(0, 1) + a;
};
d = Ne.prototype;
d.ja = function() {
  return this.Lb.ja();
};
d.add = function(a) {
  this.Lb.set(Oe(a), a);
};
d.addAll = function(a) {
  a = He(a);
  for (var b = a.length, c = 0;c < b;c++) {
    this.add(a[c]);
  }
};
d.removeAll = function(a) {
  a = He(a);
  for (var b = a.length, c = 0;c < b;c++) {
    this.remove(a[c]);
  }
};
d.remove = function(a) {
  return this.Lb.remove(Oe(a));
};
d.clear = function() {
  this.Lb.clear();
};
d.nc = function() {
  return this.Lb.nc();
};
d.contains = function(a) {
  return this.Lb.Ra(Oe(a));
};
d.T = function() {
  return this.Lb.T();
};
d.clone = function() {
  return new Ne(this);
};
d.equals = function(a) {
  return this.ja() == Ge(a) && this.E7(a);
};
d.E7 = function(a) {
  var b = Ge(a);
  if (this.ja() > b) {
    return !1;
  }
  !(a instanceof Ne) && 5 < b && (a = new Ne(a));
  return Me(this, function(b) {
    var c = a;
    return c.contains && "function" == typeof c.contains ? c.contains(b) : c.Fk && "function" == typeof c.Fk ? c.Fk(b) : ua(c) || n(c) ? pb(c, b) : Qb(c, b);
  });
};
d.rg = function() {
  return this.Lb.rg(!1);
};
var Pe = function(a, b, c) {
  this.t9 = a;
  this.jF = 0 < b ? b : 10;
  this.r8 = 0 < c ? c : 1;
  this.LP = 0;
  this.Gt = 1;
  this.lQ = 0;
  this.OO = !1;
  this.Qb = this.ng = null;
};
d = Pe.prototype;
d.start = function() {
  if (null != this.Qb) {
    return Promise.reject(Error("Cannot call Retry.start more than once."));
  }
  this.Qb = new Oc;
  this.iS();
  return this.Qb.promise;
};
d.iS = function() {
  var a = this;
  this.ng = null;
  this.OO || (this.lQ++, this.t9().then(function(b) {
    a.Ti();
    a.Qb.resolve(b);
  }, function() {
    a.lQ >= a.r8 ? (a.Ti(), a.Qb.reject(Error("Max attempts reached"))) : (a.ng = ue(a.iS, a.jF, a), a.Dja());
  }));
};
d.Dja = function() {
  var a = this.jF * this.Gt;
  0 < this.LP && (a = Math.min(a, this.LP));
  this.jF = a;
};
d.gx = function(a) {
  w(1 <= a);
  this.Gt = a;
  return this;
};
d.abort = function() {
  this.Ti();
  this.Qb.reject(Error("abort"));
};
d.Ti = function() {
  null != this.ng && (ve(this.ng), this.ng = null);
  this.OO = !0;
};
var Qe = function(a, b, c, e, f) {
  c = "[" + b + "]: " + c + " " + e.Yu() + " => " + e.Sa() + " (" + e.hC() + ")";
  e.Ed() ? (a.L(c), f && (e = e.ef()) && 0 < e.length && a.L("[" + b + "]: " + e)) : (c += ", error = " + e.xj + " (" + e.lM() + ")", a.info(c));
}, Re = function(a) {
  a = (new DOMParser).parseFromString(a, "text/xml");
  return a.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "parsererror").length ? null : a;
};
var Se = /<[^>]*>|&[^;]+;/g, Te = function(a, b) {
  return b ? a.replace(Se, "") : a;
}, Ue = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/, Ve = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/, We = /^http:\/\/.*/, Xe = /\s+/, Ye = /[\d\u06f0-\u06f9]/;
var $e = function() {
  this.qG = "";
  this.CX = Ze;
};
$e.prototype.Vn = !0;
$e.prototype.toString = function() {
  return "Const{" + this.qG + "}";
};
var Ze = {}, af = function(a) {
  var b = new $e;
  b.qG = a;
  return b;
};
af("");
var cf = function() {
  this.rR = "";
  this.xX = bf;
};
cf.prototype.Vn = !0;
var bf = {};
cf.prototype.toString = function() {
  return "SafeScript{" + this.rR + "}";
};
var df = function(a) {
  if (a instanceof cf && a.constructor === cf && a.xX === bf) {
    return a.rR;
  }
  Ya("expected object of type SafeScript, got '" + a + "' of type " + ra(a));
  return "type_error:SafeScript";
};
var ff = function() {
  this.sR = "";
  this.yX = ef;
};
ff.prototype.Vn = !0;
var ef = {};
ff.prototype.toString = function() {
  return "SafeStyle{" + this.sR + "}";
};
var gf = function(a) {
  if (a instanceof ff && a.constructor === ff && a.yX === ef) {
    return a.sR;
  }
  Ya("expected object of type SafeStyle, got '" + a + "' of type " + ra(a));
  return "type_error:SafeStyle";
};
var jf = function() {
  this.vE = "";
  this.JX = hf;
};
jf.prototype.Vn = !0;
jf.prototype.Uc = function() {
  return 1;
};
jf.prototype.toString = function() {
  return "TrustedResourceUrl{" + this.vE + "}";
};
var kf = function(a) {
  if (a instanceof jf && a.constructor === jf && a.JX === hf) {
    return a.vE;
  }
  Ya("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ra(a));
  return "type_error:TrustedResourceUrl";
}, hf = {};
var mf = function() {
  this.Zr = "";
  this.zX = lf;
};
mf.prototype.Vn = !0;
mf.prototype.Uc = function() {
  return 1;
};
mf.prototype.toString = function() {
  return "SafeUrl{" + this.Zr + "}";
};
var nf = function(a) {
  if (a instanceof mf && a.constructor === mf && a.zX === lf) {
    return a.Zr;
  }
  Ya("expected object of type SafeUrl, got '" + a + "' of type " + ra(a));
  return "type_error:SafeUrl";
}, lf = {};
var pf = function() {
  this.Zr = "";
  this.wX = of;
  this.hq = null;
};
pf.prototype.Uc = function() {
  return this.hq;
};
pf.prototype.Vn = !0;
pf.prototype.toString = function() {
  return "SafeHtml{" + this.Zr + "}";
};
var qf = function(a) {
  if (a instanceof pf && a.constructor === pf && a.wX === of) {
    return a.Zr;
  }
  Ya("expected object of type SafeHtml, got '" + a + "' of type " + ra(a));
  return "type_error:SafeHtml";
}, of = {};
var rf = function(a) {
  switch(a) {
    case 0:
      return "No Error";
    case 1:
      return "Access denied to content document";
    case 2:
      return "File not found";
    case 3:
      return "Firefox silently errored";
    case 4:
      return "Application custom error";
    case 5:
      return "An exception occurred";
    case 6:
      return "Http response at 400 or 500 level";
    case 7:
      return "Request was aborted";
    case 8:
      return "Request timed out";
    case 9:
      return "The resource is not available offline";
    default:
      return "Unrecognized error code";
  }
};
var sf = g.JSON.parse, tf = g.JSON.stringify;
var uf = function(a, b) {
  var c = [], e = function(a, h, k) {
    var f = h + "  ";
    k = new Ne(k);
    try {
      if (l(a)) {
        if (null === a) {
          c.push("NULL");
        } else {
          if (n(a)) {
            c.push('"' + a.replace(/\n/g, "\n" + h) + '"');
          } else {
            if (va(a)) {
              c.push(String(a).replace(/\n/g, "\n" + h));
            } else {
              if (wa(a)) {
                if (k.contains(a)) {
                  c.push("*** reference loop detected ***");
                } else {
                  k.add(a);
                  c.push("{");
                  for (var r in a) {
                    if (b || !va(a[r])) {
                      c.push("\n"), c.push(f), c.push(r + " = "), e(a[r], f, k);
                    }
                  }
                  c.push("\n" + h + "}");
                }
              } else {
                c.push(a);
              }
            }
          }
        }
      } else {
        c.push("undefined");
      }
    } catch (A) {
      c.push("*** " + A + " ***");
    }
  };
  e(a, "", new Ne);
  return c.join("");
}, vf = function(a) {
  var b;
  b = Error();
  if (Error.captureStackTrace) {
    Error.captureStackTrace(b, vf), b = String(b.stack);
  } else {
    try {
      throw b;
    } catch (f) {
      b = f;
    }
    b = (b = b.stack) ? String(b) : null;
  }
  if (b) {
    return b;
  }
  b = [];
  for (var c = arguments.callee.caller, e = 0;c && (!a || e < a);) {
    b.push(wf(c));
    b.push("()\n");
    try {
      c = c.caller;
    } catch (f) {
      b.push("[exception trying to get caller]\n");
      break;
    }
    e++;
    if (50 <= e) {
      b.push("[...long stack...]");
      break;
    }
  }
  a && e >= a ? b.push("[...reached max depth limit...]") : b.push("[end]");
  return b.join("");
}, wf = function(a) {
  if (xf[a]) {
    return xf[a];
  }
  a = String(a);
  if (!xf[a]) {
    var b = /function ([^\(]+)/.exec(a);
    xf[a] = b ? b[1] : "[Anonymous]";
  }
  return xf[a];
}, xf = {};
var yf = function(a, b, c, e, f) {
  this.reset(a, b, c, e, f);
};
yf.prototype.km = 0;
yf.prototype.mq = null;
var zf = 0;
d = yf.prototype;
d.reset = function(a, b, c, e, f) {
  this.km = "number" == typeof f ? f : zf++;
  this.aja = e || u();
  this.wl = a;
  this.dQ = b;
  this.o8 = c;
  delete this.mq;
};
d.jfa = function(a) {
  this.mq = a;
};
d.qx = function(a) {
  this.wl = a;
};
d.getMessage = function() {
  return this.dQ;
};
d.PF = function(a) {
  this.dQ = a;
};
var Af = function(a) {
  this.Ia = a;
  this.hr = this.Jz = this.wl = this.qc = null;
}, Bf = function(a, b) {
  this.name = a;
  this.value = b;
};
Bf.prototype.toString = function() {
  return this.name;
};
var Cf = new Bf("SEVERE", 1000), Df = new Bf("WARNING", 900), Ef = new Bf("INFO", 800), Ff = new Bf("CONFIG", 700), Gf = new Bf("FINE", 500), Hf = new Bf("FINER", 400), If = new Bf("ALL", 0);
d = Af.prototype;
d.getName = function() {
  return this.Ia;
};
d.kY = function(a) {
  this.hr || (this.hr = []);
  this.hr.push(a);
};
d.getParent = function() {
  return this.qc;
};
d.getChildren = function() {
  this.Jz || (this.Jz = {});
  return this.Jz;
};
d.qx = function(a) {
  this.wl = a;
};
d.EL = function() {
  if (this.wl) {
    return this.wl;
  }
  if (this.qc) {
    return this.qc.EL();
  }
  Ya("Root logger has no level set.");
  return null;
};
d.RO = function(a) {
  return a.value >= this.EL().value;
};
d.log = function(a, b, c) {
  this.RO(a) && (va(b) && (b = b()), this.RJ(this.D3(a, b, c)));
};
d.D3 = function(a, b, c) {
  a = new yf(a, String(b), this.Ia);
  c && a.jfa(c);
  return a;
};
d.hG = function(a, b) {
  this.log(Cf, a, b);
};
d.v = function(a, b) {
  this.log(Df, a, b);
};
d.info = function(a, b) {
  this.log(Ef, a, b);
};
d.config = function(a, b) {
  this.log(Ff, a, b);
};
d.L = function(a, b) {
  this.log(Gf, a, b);
};
d.logRecord = function(a) {
  this.RO(a.wl) && this.RJ(a);
};
d.RJ = function(a) {
  var b = "log:" + a.getMessage();
  g.console && (g.console.timeStamp ? g.console.timeStamp(b) : g.console.markTimeline && g.console.markTimeline(b));
  g.msWriteProfilerMark && g.msWriteProfilerMark(b);
  for (b = this;b;) {
    b.JZ(a), b = b.getParent();
  }
};
d.JZ = function(a) {
  if (this.hr) {
    for (var b = 0, c;c = this.hr[b];b++) {
      c(a);
    }
  }
};
d.zga = function(a) {
  this.qc = a;
};
d.fY = function(a, b) {
  this.getChildren()[a] = b;
};
var Jf = {}, Kf = null, Lf = function() {
  Kf || (Kf = new Af(""), Jf[""] = Kf, Kf.qx(Ff));
}, Mf = function(a) {
  Lf();
  var b;
  if (!(b = Jf[a])) {
    b = new Af(a);
    var c = a.lastIndexOf("."), e = a.substr(c + 1), c = Mf(a.substr(0, c));
    c.fY(e, b);
    b.zga(c);
    Jf[a] = b;
  }
  return b;
};
var Nf = function(a, b) {
  a = Mf(a);
  b && a && a.qx(b);
  return a;
}, Of = function(a, b, c, e) {
  a && a.log(b, c, e);
}, Pf = function(a, b, c) {
  a && a.hG(b, c);
}, I = function(a, b, c) {
  a && a.v(b, c);
}, J = function(a, b, c) {
  a && a.info(b, c);
}, K = function(a, b, c) {
  a && a.L(b, c);
};
var Qf = function() {
};
Qf.prototype.BI = null;
Qf.prototype.Rf = function() {
  return this.BI || (this.BI = this.h7());
};
var Rf, Sf = function() {
};
v(Sf, Qf);
Sf.prototype.Yp = function() {
  var a = this.cN();
  return a ? new ActiveXObject(a) : new XMLHttpRequest;
};
Sf.prototype.h7 = function() {
  var a = {};
  this.cN() && (a[0] = !0, a[1] = !0);
  return a;
};
Sf.prototype.cN = function() {
  if (!this.zO && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        return new ActiveXObject(c), this.zO = c;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return this.zO;
};
Rf = new Sf;
var Tf = function(a) {
  F.call(this);
  this.headers = new H;
  this.yy = a || null;
  this.Ji = !1;
  this.xy = this.fa = null;
  this.nP = this.zr = "";
  this.xj = 0;
  this.yj = "";
  this.ol = this.DC = this.wv = this.pA = !1;
  this.Ei = 0;
  this.lg = null;
  this.Wj = "";
  this.ky = this.vba = this.Hi = !1;
};
v(Tf, F);
Tf.prototype.a = Nf("goog.net.XhrIo");
var Uf = /^https?$/i, Vf = ["POST", "PUT"], Wf = [], Xf = function(a, b, c, e, f, h, k) {
  var p = new Tf;
  Wf.push(p);
  b && p.listen("complete", b);
  p.io("ready", p.j_);
  h && p.Ax(h);
  k && p.gG(k);
  p.send(a, c, e, f);
  return p;
};
d = Tf.prototype;
d.j_ = function() {
  this.ob();
  wb(Wf, this);
};
d.Ax = function(a) {
  this.Ei = Math.max(0, a);
};
d.jU = function(a) {
  this.Wj = a;
};
d.gG = function(a) {
  this.Hi = a;
};
d.send = function(a, b, c, e) {
  if (this.fa) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.zr + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.zr = a;
  this.yj = "";
  this.xj = 0;
  this.nP = b;
  this.pA = !1;
  this.Ji = !0;
  this.fa = this.h0();
  this.xy = this.yy ? this.yy.Rf() : Rf.Rf();
  this.fa.onreadystatechange = t(this.OQ, this);
  this.vba && "onprogress" in this.fa && (this.fa.onprogress = t(function(a) {
    this.LQ(a, !0);
  }, this), this.fa.upload && (this.fa.upload.onprogress = t(this.LQ, this)));
  try {
    K(this.a, this.Ih("Opening Xhr")), this.DC = !0, this.fa.open(b, String(a), !0), this.DC = !1;
  } catch (h) {
    K(this.a, this.Ih("Error opening Xhr: " + h.message));
    this.$d(5, h);
    return;
  }
  a = c || "";
  var f = this.headers.clone();
  e && Ke(e, function(a, b) {
    f.set(b, a);
  });
  e = nb(f.ub(), Yf);
  c = g.FormData && a instanceof g.FormData;
  !pb(Vf, b) || e || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  f.forEach(function(a, b) {
    this.fa.setRequestHeader(b, a);
  }, this);
  this.Wj && (this.fa.responseType = this.Wj);
  "withCredentials" in this.fa && this.fa.withCredentials !== this.Hi && (this.fa.withCredentials = this.Hi);
  try {
    this.VI(), 0 < this.Ei && (this.ky = Zf(this.fa), K(this.a, this.Ih("Will abort after " + this.Ei + "ms if incomplete, xhr2 " + this.ky)), this.ky ? (this.fa.timeout = this.Ei, this.fa.ontimeout = t(this.ZU, this)) : this.lg = ue(this.ZU, this.Ei, this)), K(this.a, this.Ih("Sending request")), this.wv = !0, this.fa.send(a), this.wv = !1;
  } catch (h) {
    K(this.a, this.Ih("Send error: " + h.message)), this.$d(5, h);
  }
};
var Zf = function(a) {
  return ic && Dc(9) && q(a.timeout) && l(a.ontimeout);
}, Yf = function(a) {
  return Fa("Content-Type", a);
};
d = Tf.prototype;
d.h0 = function() {
  return this.yy ? this.yy.Yp() : Rf.Yp();
};
d.ZU = function() {
  "undefined" != typeof na && this.fa && (this.yj = "Timed out after " + this.Ei + "ms, aborting", this.xj = 8, K(this.a, this.Ih(this.yj)), this.dispatchEvent("timeout"), this.abort(8));
};
d.$d = function(a, b) {
  this.Ji = !1;
  this.fa && (this.ol = !0, this.fa.abort(), this.ol = !1);
  this.yj = b;
  this.xj = a;
  this.NJ();
  this.Qt();
};
d.NJ = function() {
  this.pA || (this.pA = !0, this.dispatchEvent("complete"), this.dispatchEvent("error"));
};
d.abort = function(a) {
  this.fa && this.Ji && (K(this.a, this.Ih("Aborting")), this.Ji = !1, this.ol = !0, this.fa.abort(), this.ol = !1, this.xj = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.Qt());
};
d.aa = function() {
  this.fa && (this.Ji && (this.Ji = !1, this.ol = !0, this.fa.abort(), this.ol = !1), this.Qt(!0));
  Tf.X.aa.call(this);
};
d.OQ = function() {
  this.isDisposed() || (this.DC || this.wv || this.ol ? this.NQ() : this.z$());
};
d.z$ = function() {
  this.NQ();
};
d.NQ = function() {
  if (this.Ji && "undefined" != typeof na) {
    if (this.xy[1] && 4 == this.Uq() && 2 == this.Sa()) {
      K(this.a, this.Ih("Local request error detected and ignored"));
    } else {
      if (this.wv && 4 == this.Uq()) {
        ue(this.OQ, 0, this);
      } else {
        if (this.dispatchEvent("readystatechange"), this.zv()) {
          K(this.a, this.Ih("Request complete"));
          this.Ji = !1;
          try {
            this.Ed() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : (this.xj = 6, this.yj = this.hC() + " [" + this.Sa() + "]", this.NJ());
          } finally {
            this.Qt();
          }
        }
      }
    }
  }
};
d.LQ = function(a, b) {
  w("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
  this.dispatchEvent($f(a, "progress"));
  this.dispatchEvent($f(a, b ? "downloadprogress" : "uploadprogress"));
};
var $f = function(a, b) {
  return {type:b, lengthComputable:a.lengthComputable, loaded:a.loaded, total:a.total};
};
d = Tf.prototype;
d.Qt = function(a) {
  if (this.fa) {
    this.VI();
    var b = this.fa, c = this.xy[0] ? pa : null;
    this.xy = this.fa = null;
    a || this.dispatchEvent("ready");
    try {
      b.onreadystatechange = c;
    } catch (e) {
      Pf(this.a, "Problem encountered resetting onreadystatechange: " + e.message);
    }
  }
};
d.VI = function() {
  this.fa && this.ky && (this.fa.ontimeout = null);
  q(this.lg) && (ve(this.lg), this.lg = null);
};
d.jf = function() {
  return !!this.fa;
};
d.zv = function() {
  return 4 == this.Uq();
};
d.Ed = function() {
  var a = this.Sa(), b;
  a: {
    switch(a) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        b = !0;
        break a;
      default:
        b = !1;
    }
  }
  return b || 0 === a && !this.r7();
};
d.r7 = function() {
  var a = String(this.zr).match(Pc)[1] || null;
  !a && g.self && g.self.location && (a = g.self.location.protocol, a = a.substr(0, a.length - 1));
  return Uf.test(a ? a.toLowerCase() : "");
};
d.Uq = function() {
  return this.fa ? this.fa.readyState : 0;
};
d.Sa = function() {
  try {
    return 2 < this.Uq() ? this.fa.status : -1;
  } catch (a) {
    return -1;
  }
};
d.hC = function() {
  try {
    return 2 < this.Uq() ? this.fa.statusText : "";
  } catch (a) {
    return K(this.a, "Can not get status: " + a.message), "";
  }
};
d.Yu = function() {
  return String(this.zr);
};
d.ef = function() {
  try {
    return this.fa ? this.fa.responseText : "";
  } catch (a) {
    return K(this.a, "Can not get responseText: " + a.message), "";
  }
};
d.C4 = function() {
  try {
    if (this.fa && "responseBody" in this.fa) {
      return this.fa.responseBody;
    }
  } catch (a) {
    K(this.a, "Can not get responseBody: " + a.message);
  }
  return null;
};
d.D4 = function(a) {
  if (this.fa) {
    var b = this.fa.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return sf(b);
  }
};
d.vN = function() {
  try {
    if (!this.fa) {
      return null;
    }
    if ("response" in this.fa) {
      return this.fa.response;
    }
    switch(this.Wj) {
      case "":
      case "text":
        return this.fa.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in this.fa) {
          return this.fa.mozResponseArrayBuffer;
        }
    }
    Pf(this.a, "Response type " + this.Wj + " is not supported on this browser");
    return null;
  } catch (a) {
    return K(this.a, "Can not get response: " + a.message), null;
  }
};
d.getResponseHeader = function(a) {
  if (this.fa && this.zv()) {
    return a = this.fa.getResponseHeader(a), null === a ? void 0 : a;
  }
};
d.getAllResponseHeaders = function() {
  return this.fa && this.zv() ? this.fa.getAllResponseHeaders() : "";
};
d.QB = function() {
  for (var a = {}, b = this.getAllResponseHeaders().split("\r\n"), c = 0;c < b.length;c++) {
    if (!Ha(b[c])) {
      var e = Va(b[c], ": ", 2);
      a[e[0]] = a[e[0]] ? a[e[0]] + (", " + e[1]) : e[1];
    }
  }
  return a;
};
d.lM = function() {
  return n(this.yj) ? this.yj : String(this.yj);
};
d.Ih = function(a) {
  return a + " [" + this.nP + " " + this.zr + " " + this.Sa() + "]";
};
var ag = function(a, b, c) {
  this.source = a;
  this.type = b;
  this.message = c;
};
var bg = D("mr.DongleUtils"), cg = function(a) {
  return "https://crash.corp.google.com/samples?stbtiq=" + a;
}, dg = function(a, b, c) {
  var e = new Tf;
  e.jU("text");
  e.Ax(3E5);
  ud(e, "complete", function(a) {
    a = a.target;
    var e, f;
    a.Ed() ? (e = "ok", f = cg(b)) : (e = "error", f = "Unable to retrieve " + a.Yu() + ", error = " + a.lM());
    c(e, f);
    a.ob();
  });
  e.send("http://" + a + ":8008/setup/send_log_report", "POST", JSON.stringify({uuid:b}), {"Content-Type":"application/json"});
  return cg(b);
}, eg = null, fg = function(a) {
  if (!n(a)) {
    return Promise.resolve();
  }
  if (eg && eg.ip == a && eg.time > Date.now() - 36E5) {
    return eg.version;
  }
  var b = new Oc;
  eg = {version:b.promise, ip:a || "", time:Date.now()};
  Xf("http://" + a + ":8008/setup/eureka_info", function(a) {
    a = a.target;
    Qe(bg, "getBuildVersion", "GET", a, !1);
    if (a.Ed()) {
      try {
        var c = JSON.parse(a.ef());
        b.resolve(c.cast_build_revision || c.build_version);
      } catch (f) {
        b.resolve(void 0);
      }
    } else {
      b.resolve(void 0);
    }
  }, "GET", void 0, void 0, 3E3);
  return b.promise;
};

