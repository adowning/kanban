(function() {'use strict';var e, aa = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  for (var d in b) {
    if (Object.defineProperties) {
      var f = Object.getOwnPropertyDescriptor(b, d);
      f && Object.defineProperty(a, d, f);
    } else {
      a[d] = b[d];
    }
  }
}, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  if (c.get || c.set) {
    throw new TypeError("ES3 does not support getters and setters.");
  }
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
}, h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, ca = function() {
  ca = function() {
  };
  h.Symbol || (h.Symbol = da);
}, ea = 0, da = function(a) {
  return "jscomp_symbol_" + (a || "") + ea++;
}, ga = function() {
  ca();
  var a = h.Symbol.iterator;
  a || (a = h.Symbol.iterator = h.Symbol("iterator"));
  "function" != typeof Array.prototype[a] && ba(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return fa(this);
  }});
  ga = function() {
  };
}, fa = function(a) {
  var b = 0;
  return ha(function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  });
}, ha = function(a) {
  ga();
  a = {next:a};
  a[h.Symbol.iterator] = function() {
    return this;
  };
  return a;
}, ia = function(a) {
  ga();
  var b = a[Symbol.iterator];
  return b ? b.call(a) : fa(a);
}, l = this, n = function(a, b, c) {
  a = a.split(".");
  c = c || l;
  a[0] in c || !c.execScript || c.execScript("var " + a[0]);
  for (var d;a.length && (d = a.shift());) {
    a.length || void 0 === b ? c = c[d] && Object.prototype.hasOwnProperty.call(c, d) ? c[d] : c[d] = {} : c[d] = b;
  }
}, ja = function() {
}, p = function(a) {
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
}, q = function(a) {
  var b = p(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}, r = function(a) {
  return "string" == typeof a;
}, ka = "closure_uid_" + (1e9 * Math.random() >>> 0), la = 0, na = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
}, oa = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}, t = function(a, b, c) {
  t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
  return t.apply(null, arguments);
}, pa = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ge = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.ce = function(a, c, g) {
    for (var d = Array(arguments.length - 2), f = 2;f < arguments.length;f++) {
      d[f - 2] = arguments[f];
    }
    return b.prototype[c].apply(a, d);
  };
};
var chrome = chrome || window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
chrome.cast.VERSION = [1, 2];
n("chrome.cast.VERSION", chrome.cast.VERSION, void 0);
chrome.cast.ae = !0;
n("chrome.cast.usingPresentationApi", chrome.cast.ae, void 0);
chrome.cast.Error = function(a, b, c) {
  this.code = a;
  this.description = b || null;
  this.details = c || null;
};
n("chrome.cast.Error", chrome.cast.Error, void 0);
chrome.cast.uc = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
n("chrome.cast.SenderApplication", chrome.cast.uc, void 0);
chrome.cast.Image = function(a) {
  this.url = a;
  this.width = this.height = null;
};
n("chrome.cast.Image", chrome.cast.Image, void 0);
chrome.cast.Volume = function(a, b) {
  this.level = void 0 !== a ? a : null;
  this.muted = void 0 !== b ? b : null;
};
n("chrome.cast.Volume", chrome.cast.Volume, void 0);
var qa = function(a, b) {
  for (var c = a.split("%s"), d = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < c.length;) {
    d += c.shift() + f.shift();
  }
  return d + c.join("%s");
}, ra = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}, sa = /&/g, ta = /</g, ua = />/g, va = /"/g, wa = /'/g, xa = /\x00/g, ya = /[\x00&<>"']/, Aa = function(a, b) {
  var c = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, d;
  d = b ? b.createElement("div") : l.document.createElement("div");
  return a.replace(za, function(a, b) {
    var f = c[a];
    if (f) {
      return f;
    }
    "#" == b.charAt(0) && (b = Number("0" + b.substr(1)), isNaN(b) || (f = String.fromCharCode(b)));
    f || (d.innerHTML = a + " ", f = d.firstChild.nodeValue.slice(0, -1));
    return c[a] = f;
  });
}, Ba = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c);
    }
  });
}, za = /&([^;\s<&]+);?/g, Ca = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
chrome.cast.bb = {CUSTOM_CONTROLLER_SCOPED:"custom_controller_scoped", TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
n("chrome.cast.AutoJoinPolicy", chrome.cast.bb, void 0);
chrome.cast.cb = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
n("chrome.cast.DefaultActionPolicy", chrome.cast.cb, void 0);
chrome.cast.Ca = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in", MULTIZONE_GROUP:"multizone_group"};
n("chrome.cast.Capability", chrome.cast.Ca, void 0);
chrome.cast.u = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
n("chrome.cast.ErrorCode", chrome.cast.u, void 0);
chrome.cast.ha = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
n("chrome.cast.ReceiverAvailability", chrome.cast.ha, void 0);
chrome.cast.vc = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
n("chrome.cast.SenderPlatform", chrome.cast.vc, void 0);
chrome.cast.mb = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
n("chrome.cast.ReceiverType", chrome.cast.mb, void 0);
chrome.cast.Zb = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
n("chrome.cast.DialAppState", chrome.cast.Zb, void 0);
chrome.cast.qc = {CAST:"cast", STOP:"stop"};
n("chrome.cast.ReceiverAction", chrome.cast.qc, void 0);
chrome.cast.U = {CONNECTED:"connected", DISCONNECTED:"disconnected", STOPPED:"stopped"};
n("chrome.cast.SessionStatus", chrome.cast.U, void 0);
chrome.cast.Xb = function(a, b, c, d, f) {
  this.sessionRequest = a;
  this.sessionListener = b;
  this.receiverListener = c;
  this.autoJoinPolicy = d || chrome.cast.bb.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.cb.CREATE_SESSION;
  this.customDialLaunchCallback = null;
  this.invisibleSender = !1;
  this.additionalSessionRequests = [];
};
n("chrome.cast.ApiConfig", chrome.cast.Xb, void 0);
chrome.cast.bc = function(a, b) {
  this.appName = a;
  this.launchParameter = b || null;
};
n("chrome.cast.DialRequest", chrome.cast.bc, void 0);
chrome.cast.$b = function(a, b, c) {
  this.receiver = a;
  this.appState = b;
  this.extraData = c || null;
};
n("chrome.cast.DialLaunchData", chrome.cast.$b, void 0);
chrome.cast.ac = function(a, b) {
  this.doLaunch = a;
  this.launchParameter = b || null;
};
n("chrome.cast.DialLaunchResponse", chrome.cast.ac, void 0);
chrome.cast.wc = function(a, b, c) {
  this.appId = a;
  this.capabilities = "array" == p(b) ? b : [chrome.cast.Ca.VIDEO_OUT, chrome.cast.Ca.AUDIO_OUT];
  this.requestSessionTimeout = c || chrome.cast.timeout.requestSession;
  this.dialRequest = this.language = null;
};
n("chrome.cast.SessionRequest", chrome.cast.wc, void 0);
chrome.cast.pc = function(a, b, c, d) {
  this.label = a;
  a = b;
  ya.test(a) && (-1 != a.indexOf("&") && (a = a.replace(sa, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(ta, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(ua, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(va, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(wa, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(xa, "&#0;")));
  this.friendlyName = a;
  this.capabilities = c || [];
  this.volume = d || null;
  this.receiverType = chrome.cast.mb.CAST;
  this.displayStatus = this.isActiveInput = null;
};
n("chrome.cast.Receiver", chrome.cast.pc, void 0);
chrome.cast.rc = function(a, b) {
  this.statusText = a;
  this.appImages = b;
  this.showStop = null;
};
n("chrome.cast.ReceiverDisplayStatus", chrome.cast.rc, void 0);
chrome.cast.pb = function() {
  this.requestSession = 60000;
  this.sendCustomMessage = this.setReceiverVolume = this.stopSession = this.leaveSession = 3000;
};
n("chrome.cast.Timeout", chrome.cast.pb, void 0);
chrome.cast.timeout = new chrome.cast.pb;
n("chrome.cast.timeout", chrome.cast.timeout, void 0);
chrome.cast.Wb = "auto-join";
chrome.cast.kc = "cast-session_";
chrome.cast.media.gc = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
n("chrome.cast.media.MediaCommand", chrome.cast.media.gc, void 0);
chrome.cast.media.s = {GENERIC:0, MOVIE:1, TV_SHOW:2, MUSIC_TRACK:3, PHOTO:4};
n("chrome.cast.media.MetadataType", chrome.cast.media.s, void 0);
chrome.cast.media.T = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
n("chrome.cast.media.PlayerState", chrome.cast.media.T, void 0);
chrome.cast.media.Da = {OFF:"REPEAT_OFF", ALL:"REPEAT_ALL", SINGLE:"REPEAT_SINGLE", ALL_AND_SHUFFLE:"REPEAT_ALL_AND_SHUFFLE"};
n("chrome.cast.media.RepeatMode", chrome.cast.media.Da, void 0);
chrome.cast.media.sc = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
n("chrome.cast.media.ResumeState", chrome.cast.media.sc, void 0);
chrome.cast.media.ob = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
n("chrome.cast.media.StreamType", chrome.cast.media.ob, void 0);
chrome.cast.media.ec = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
n("chrome.cast.media.IdleReason", chrome.cast.media.ec, void 0);
chrome.cast.media.Ec = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
n("chrome.cast.media.TrackType", chrome.cast.media.Ec, void 0);
chrome.cast.media.Bc = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
n("chrome.cast.media.TextTrackType", chrome.cast.media.Bc, void 0);
chrome.cast.media.xc = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
n("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.xc, void 0);
chrome.cast.media.Cc = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
n("chrome.cast.media.TextTrackWindowType", chrome.cast.media.Cc, void 0);
chrome.cast.media.yc = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
n("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.yc, void 0);
chrome.cast.media.zc = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
n("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.zc, void 0);
chrome.cast.media.eb = function() {
  this.customData = null;
};
n("chrome.cast.media.GetStatusRequest", chrome.cast.media.eb, void 0);
chrome.cast.media.fb = function() {
  this.customData = null;
};
n("chrome.cast.media.PauseRequest", chrome.cast.media.fb, void 0);
chrome.cast.media.gb = function() {
  this.customData = null;
};
n("chrome.cast.media.PlayRequest", chrome.cast.media.gb, void 0);
chrome.cast.media.tc = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
n("chrome.cast.media.SeekRequest", chrome.cast.media.tc, void 0);
chrome.cast.media.nb = function() {
  this.customData = null;
};
n("chrome.cast.media.StopRequest", chrome.cast.media.nb, void 0);
chrome.cast.media.Gc = function(a) {
  this.volume = a;
  this.customData = null;
};
n("chrome.cast.media.VolumeRequest", chrome.cast.media.Gc, void 0);
chrome.cast.media.fc = function(a) {
  this.type = "LOAD";
  this.requestId = 0;
  this.sessionId = null;
  this.media = a;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
n("chrome.cast.media.LoadRequest", chrome.cast.media.fc, void 0);
chrome.cast.media.mc = function(a) {
  this.type = "PRECACHE";
  this.requestId = 0;
  this.data = a;
};
chrome.cast.media.cc = function(a, b) {
  this.requestId = 0;
  this.activeTrackIds = a || null;
  this.textTrackStyle = b || null;
};
n("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.cc, void 0);
chrome.cast.media.dc = function() {
  this.metadataType = this.type = chrome.cast.media.s.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
n("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.dc, void 0);
chrome.cast.media.ic = function() {
  this.metadataType = this.type = chrome.cast.media.s.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
n("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.ic, void 0);
chrome.cast.media.Fc = function() {
  this.metadataType = this.type = chrome.cast.media.s.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
n("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.Fc, void 0);
chrome.cast.media.jc = function() {
  this.metadataType = this.type = chrome.cast.media.s.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
n("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.jc, void 0);
chrome.cast.media.lc = function() {
  this.metadataType = this.type = chrome.cast.media.s.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
n("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.lc, void 0);
chrome.cast.media.hc = function(a, b) {
  this.contentId = a;
  this.streamType = chrome.cast.media.ob.BUFFERED;
  this.contentType = b;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
n("chrome.cast.media.MediaInfo", chrome.cast.media.hc, void 0);
chrome.cast.media.ib = function(a) {
  this.itemId = null;
  this.media = a;
  this.autoplay = !0;
  this.startTime = 0;
  this.playbackDuration = null;
  this.preloadTime = 0;
  this.customData = this.activeTrackIds = null;
};
n("chrome.cast.media.QueueItem", chrome.cast.media.ib, void 0);
chrome.cast.media.Yb = "CC1AD845";
n("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Yb, void 0);
chrome.cast.media.timeout = {};
n("chrome.cast.media.timeout", chrome.cast.media.timeout, void 0);
chrome.cast.media.timeout.load = 0;
chrome.cast.media.timeout.load = chrome.cast.media.timeout.load;
chrome.cast.media.timeout.ma = 0;
chrome.cast.media.timeout.getStatus = chrome.cast.media.timeout.ma;
chrome.cast.media.timeout.play = 0;
chrome.cast.media.timeout.play = chrome.cast.media.timeout.play;
chrome.cast.media.timeout.pause = 0;
chrome.cast.media.timeout.pause = chrome.cast.media.timeout.pause;
chrome.cast.media.timeout.seek = 0;
chrome.cast.media.timeout.seek = chrome.cast.media.timeout.seek;
chrome.cast.media.timeout.stop = 0;
chrome.cast.media.timeout.stop = chrome.cast.media.timeout.stop;
chrome.cast.media.timeout.Ba = 0;
chrome.cast.media.timeout.setVolume = chrome.cast.media.timeout.Ba;
chrome.cast.media.timeout.ka = 0;
chrome.cast.media.timeout.editTracksInfo = chrome.cast.media.timeout.ka;
chrome.cast.media.timeout.o = 0;
chrome.cast.media.timeout.queue = chrome.cast.media.timeout.o;
chrome.cast.media.Dc = function(a, b) {
  this.trackId = a;
  this.trackContentType = this.trackContentId = null;
  this.type = b;
  this.customData = this.subtype = this.language = this.name = null;
};
n("chrome.cast.media.Track", chrome.cast.media.Dc, void 0);
chrome.cast.media.Ac = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
n("chrome.cast.media.TextTrackStyle", chrome.cast.media.Ac, void 0);
chrome.cast.media.nc = function(a) {
  this.type = "QUEUE_LOAD";
  this.sessionId = this.requestId = null;
  this.items = a;
  this.startIndex = 0;
  this.repeatMode = chrome.cast.media.Da.OFF;
  this.customData = null;
};
n("chrome.cast.media.QueueLoadRequest", chrome.cast.media.nc, void 0);
chrome.cast.media.hb = function(a) {
  this.type = "QUEUE_INSERT";
  this.sessionId = this.requestId = null;
  this.items = a;
  this.customData = this.insertBefore = null;
};
n("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.hb, void 0);
chrome.cast.media.oc = function(a) {
  this.type = "QUEUE_UPDATE";
  this.sessionId = this.requestId = null;
  this.items = a;
  this.customData = null;
};
n("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.oc, void 0);
chrome.cast.media.ga = function() {
  this.type = "QUEUE_UPDATE";
  this.customData = this.jump = this.currentItemId = this.sessionId = this.requestId = null;
};
n("chrome.cast.media.QueueJumpRequest", chrome.cast.media.ga, void 0);
chrome.cast.media.lb = function() {
  this.type = "QUEUE_UPDATE";
  this.customData = this.repeatMode = this.sessionId = this.requestId = null;
};
n("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.lb, void 0);
chrome.cast.media.jb = function(a) {
  this.type = "QUEUE_REMOVE";
  this.sessionId = this.requestId = null;
  this.itemIds = a;
  this.customData = null;
};
n("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.jb, void 0);
chrome.cast.media.kb = function(a) {
  this.type = "QUEUE_REORDER";
  this.sessionId = this.requestId = null;
  this.itemIds = a;
  this.customData = this.insertBefore = null;
};
n("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.kb, void 0);
var u = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, u);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
};
pa(u, Error);
u.prototype.name = "CustomError";
var Da = function(a, b) {
  b.unshift(a);
  u.call(this, qa.apply(null, b));
  b.shift();
};
pa(Da, u);
Da.prototype.name = "AssertionError";
var Ea = function(a, b, c, d) {
  var f = "Assertion failed";
  if (c) {
    var f = f + (": " + c), g = d;
  } else {
    a && (f += ": " + a, g = b);
  }
  throw new Da("" + f, g || []);
}, v = function(a, b, c) {
  a || Ea("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
}, x = function(a, b, c) {
  "number" == typeof a || Ea("Expected number but got %s: %s.", [p(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
var y = Array.prototype.forEach ? function(a, b, c) {
  v(null != a.length);
  Array.prototype.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, f = r(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a);
  }
}, Fa = function(a, b, c) {
  for (var d = a.length, f = r(a) ? a.split("") : a, g = 0;g < d;g++) {
    if (g in f && b.call(c, f[g], g, a)) {
      return g;
    }
  }
  return -1;
}, Ga = function(a) {
  return Array.prototype.concat.apply(Array.prototype, arguments);
}, Ha = function(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return [];
};
chrome.cast.media.a = function(a, b) {
  this.sessionId = a;
  this.mediaSessionId = b;
  this.media = null;
  this.playbackRate = 1.0;
  this.playerState = chrome.cast.media.T.IDLE;
  this.currentTime = 0.0;
  this.Pa = -1;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Volume;
  this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
  this.repeatMode = chrome.cast.media.Da.OFF;
  this.na = !1;
  this.da = [];
};
n("chrome.cast.media.Media", chrome.cast.media.a, void 0);
chrome.cast.media.a.prototype.ma = function(a, b, c) {
  a || (a = new chrome.cast.media.eb);
  z.i(this, "MEDIA_GET_STATUS", a, b, c, chrome.cast.media.timeout.ma);
};
chrome.cast.media.a.prototype.getStatus = chrome.cast.media.a.prototype.ma;
chrome.cast.media.a.prototype.play = function(a, b, c) {
  this.Gb(v(z), a, b, c);
};
chrome.cast.media.a.prototype.play = chrome.cast.media.a.prototype.play;
chrome.cast.media.a.prototype.Gb = function(a, b, c, d) {
  b || (b = new chrome.cast.media.gb);
  a.i(this, "PLAY", b, c, d, chrome.cast.media.timeout.play);
};
chrome.cast.media.a.prototype.playWithContext = chrome.cast.media.a.prototype.Gb;
chrome.cast.media.a.prototype.pause = function(a, b, c) {
  this.Fb(v(z), a, b, c);
};
chrome.cast.media.a.prototype.pause = chrome.cast.media.a.prototype.pause;
chrome.cast.media.a.prototype.Fb = function(a, b, c, d) {
  b || (b = new chrome.cast.media.fb);
  a.i(this, "PAUSE", b, c, d, chrome.cast.media.timeout.pause);
};
chrome.cast.media.a.prototype.pauseWithContext = chrome.cast.media.a.prototype.Fb;
chrome.cast.media.a.prototype.seek = function(a, b, c) {
  z.i(this, "SEEK", a, b, c, chrome.cast.media.timeout.seek);
};
chrome.cast.media.a.prototype.seek = chrome.cast.media.a.prototype.seek;
chrome.cast.media.a.prototype.stop = function(a, b, c) {
  a || (a = new chrome.cast.media.nb);
  z.i(this, "STOP_MEDIA", a, b, c, chrome.cast.media.timeout.stop);
};
chrome.cast.media.a.prototype.stop = chrome.cast.media.a.prototype.stop;
chrome.cast.media.a.prototype.Ba = function(a, b, c) {
  z.i(this, "MEDIA_SET_VOLUME", a, b, c, chrome.cast.media.timeout.Ba);
};
chrome.cast.media.a.prototype.setVolume = chrome.cast.media.a.prototype.Ba;
chrome.cast.media.a.prototype.ka = function(a, b, c) {
  z.i(this, "EDIT_TRACKS_INFO", a, b, c, chrome.cast.media.timeout.ka);
};
chrome.cast.media.a.prototype.editTracksInfo = chrome.cast.media.a.prototype.ka;
chrome.cast.media.a.prototype.Ad = function(a, b, c) {
  z.i(this, "QUEUE_INSERT", a, b, c, chrome.cast.media.timeout.o);
};
chrome.cast.media.a.prototype.queueInsertItems = chrome.cast.media.a.prototype.Ad;
chrome.cast.media.a.prototype.zd = function(a, b, c) {
  z.i(this, "QUEUE_INSERT", new chrome.cast.media.hb([a]), b, c, chrome.cast.media.timeout.o);
};
chrome.cast.media.a.prototype.queueAppendItem = chrome.cast.media.a.prototype.zd;
chrome.cast.media.a.prototype.Kd = function(a, b, c) {
  z.i(this, "QUEUE_UPDATE", a, b, c, chrome.cast.media.timeout.o);
};
chrome.cast.media.a.prototype.queueUpdateItems = chrome.cast.media.a.prototype.Kd;
chrome.cast.media.a.prototype.Fd = function(a, b) {
  var c = new chrome.cast.media.ga;
  c.jump = -1;
  z.i(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.o);
};
chrome.cast.media.a.prototype.queuePrev = chrome.cast.media.a.prototype.Fd;
chrome.cast.media.a.prototype.Ed = function(a, b) {
  var c = new chrome.cast.media.ga;
  c.jump = 1;
  z.i(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.o);
};
chrome.cast.media.a.prototype.queueNext = chrome.cast.media.a.prototype.Ed;
chrome.cast.media.a.prototype.Bd = function(a, b, c) {
  if (!(0 > this.Na(a))) {
    var d = new chrome.cast.media.ga;
    d.currentItemId = a;
    z.i(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.o);
  }
};
chrome.cast.media.a.prototype.queueJumpToItem = chrome.cast.media.a.prototype.Bd;
chrome.cast.media.a.prototype.Jd = function(a, b, c) {
  var d = new chrome.cast.media.lb;
  d.repeatMode = a;
  z.i(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.o);
};
chrome.cast.media.a.prototype.queueSetRepeatMode = chrome.cast.media.a.prototype.Jd;
chrome.cast.media.a.prototype.Hd = function(a, b, c) {
  z.i(this, "QUEUE_REMOVE", a, b, c, chrome.cast.media.timeout.o);
};
chrome.cast.media.a.prototype.queueRemoveItems = chrome.cast.media.a.prototype.Hd;
chrome.cast.media.a.prototype.Gd = function(a, b, c) {
  0 > this.Na(a) || z.i(this, "QUEUE_REMOVE", new chrome.cast.media.jb([a]), b, c, chrome.cast.media.timeout.o);
};
chrome.cast.media.a.prototype.queueRemoveItem = chrome.cast.media.a.prototype.Gd;
chrome.cast.media.a.prototype.Id = function(a, b, c) {
  z.i(this, "QUEUE_REORDER", a, b, c, chrome.cast.media.timeout.o);
};
chrome.cast.media.a.prototype.queueReorderItems = chrome.cast.media.a.prototype.Id;
chrome.cast.media.a.prototype.Dd = function(a, b, c, d) {
  var f = this.Na(a);
  if (!(0 > f)) {
    if (0 > b) {
      d && d(new chrome.cast.Error(chrome.cast.u.INVALID_PARAMETER));
    } else {
      if (f == b) {
        c && c();
      } else {
        var g = null;
        b = b > f ? b + 1 : b;
        b < this.items.length && (g = this.items[b]);
        a = new chrome.cast.media.kb([a]);
        a.insertBefore = g ? g.itemId : null;
        z.i(this, "QUEUE_REORDER", a, c, d, chrome.cast.media.timeout.o);
      }
    }
  }
};
chrome.cast.media.a.prototype.queueMoveItemToNewIndex = chrome.cast.media.a.prototype.Dd;
chrome.cast.media.a.prototype.Zd = function(a) {
  return -1 < this.supportedMediaCommands.indexOf(a);
};
chrome.cast.media.a.prototype.supportsCommand = chrome.cast.media.a.prototype.Zd;
chrome.cast.media.a.prototype.Uc = function() {
  if (this.playerState == chrome.cast.media.T.PLAYING && 0 <= this.Pa) {
    var a = this.currentTime + (Date.now() - this.Pa) / 1000 * this.playbackRate;
    this.media && null != this.media.duration && a > this.media.duration && (a = this.media.duration);
    0 > a && (a = 0);
    return a;
  }
  return this.currentTime;
};
chrome.cast.media.a.prototype.getEstimatedTime = chrome.cast.media.a.prototype.Uc;
chrome.cast.media.a.prototype.Ga = function(a) {
  this.V(v(z), a);
};
chrome.cast.media.a.prototype.addUpdateListener = chrome.cast.media.a.prototype.Ga;
chrome.cast.media.a.prototype.V = function(a, b) {
  a.Ic(this, b);
};
chrome.cast.media.a.prototype.addUpdateListenerWithContext = chrome.cast.media.a.prototype.V;
chrome.cast.media.a.prototype.Sa = function(a) {
  this.aa(v(z), a);
};
chrome.cast.media.a.prototype.removeUpdateListener = chrome.cast.media.a.prototype.Sa;
chrome.cast.media.a.prototype.aa = function(a, b) {
  z.Nd(this, b);
};
chrome.cast.media.a.prototype.removeUpdateListenerWithContext = chrome.cast.media.a.prototype.aa;
chrome.cast.media.a.prototype.Na = function(a) {
  return Fa(this.items, function(b) {
    return b.itemId == a;
  });
};
var z = null;
var Ia = function(a, b, c) {
  this.sessionId = a;
  this.namespaceName = b;
  this.message = c;
};
var Ja = function(a, b) {
  this.type = "SET_VOLUME";
  this.requestId = 0;
  this.volume = a;
  this.expectedVolume = b || null;
};
var Ka = function(a) {
  this.type = "STOP";
  this.requestId = 0;
  this.sessionId = a || null;
};
chrome.cast.b = function(a, b, c, d, f) {
  this.sessionId = a;
  this.appId = b;
  this.displayName = c;
  this.statusText = null;
  this.appImages = d;
  this.receiver = f;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.U.CONNECTED;
  this.transportId = "";
};
n("chrome.cast.Session", chrome.cast.b, void 0);
chrome.cast.b.prototype.Wd = function(a, b, c) {
  this.Sb(v(z), a, b, c);
};
chrome.cast.b.prototype.setReceiverVolumeLevel = chrome.cast.b.prototype.Wd;
chrome.cast.b.prototype.Sb = function(a, b, c, d) {
  b = new Ja(new chrome.cast.Volume(b, null), this.receiver.volume);
  a.setReceiverVolume(this.sessionId, b, c, d);
};
chrome.cast.b.prototype.setReceiverVolumeLevelWithContext = chrome.cast.b.prototype.Sb;
chrome.cast.b.prototype.Vd = function(a, b, c) {
  this.Rb(v(z), a, b, c);
};
chrome.cast.b.prototype.setReceiverMuted = chrome.cast.b.prototype.Vd;
chrome.cast.b.prototype.Rb = function(a, b, c, d) {
  a = new Ja(new chrome.cast.Volume(null, b), this.receiver.volume);
  z.setReceiverVolume(this.sessionId, a, c, d);
};
chrome.cast.b.prototype.setReceiverMutedWithContext = chrome.cast.b.prototype.Rb;
chrome.cast.b.prototype.fd = function(a, b) {
  z.leaveSession(this.sessionId, a, b);
};
chrome.cast.b.prototype.leave = chrome.cast.b.prototype.fd;
chrome.cast.b.prototype.stop = function(a, b) {
  this.Ub(v(z), a, b);
};
chrome.cast.b.prototype.stop = chrome.cast.b.prototype.stop;
chrome.cast.b.prototype.Ub = function(a, b, c) {
  a.Nb(new Ka(this.sessionId), b, c, chrome.cast.timeout.stopSession);
};
chrome.cast.b.prototype.stopWithContext = chrome.cast.b.prototype.Ub;
chrome.cast.b.prototype.sendMessage = function(a, b, c, d) {
  this.Pb(v(z), a, b, c, d);
};
chrome.cast.b.prototype.sendMessage = chrome.cast.b.prototype.sendMessage;
chrome.cast.b.prototype.Pb = function(a, b, c, d, f) {
  a.Rd(new Ia(this.sessionId, b, c), d, f);
};
chrome.cast.b.prototype.sendMessageWithContext = chrome.cast.b.prototype.Pb;
chrome.cast.b.prototype.Ga = function(a) {
  this.V(v(z), a);
};
chrome.cast.b.prototype.addUpdateListener = chrome.cast.b.prototype.Ga;
chrome.cast.b.prototype.V = function(a, b) {
  a.Lc(this.sessionId, b);
};
chrome.cast.b.prototype.addUpdateListenerWithContext = chrome.cast.b.prototype.V;
chrome.cast.b.prototype.Sa = function(a) {
  this.aa(v(z), a);
};
chrome.cast.b.prototype.removeUpdateListener = chrome.cast.b.prototype.Sa;
chrome.cast.b.prototype.aa = function(a, b) {
  a.Qd(this.sessionId, b);
};
chrome.cast.b.prototype.removeUpdateListenerWithContext = chrome.cast.b.prototype.aa;
chrome.cast.b.prototype.Jc = function(a, b) {
  this.rb(v(z), a, b);
};
chrome.cast.b.prototype.addMessageListener = chrome.cast.b.prototype.Jc;
chrome.cast.b.prototype.rb = function(a, b, c) {
  a.Hc(this.sessionId, b, c);
};
chrome.cast.b.prototype.addMessageListenerWithContext = chrome.cast.b.prototype.rb;
chrome.cast.b.prototype.Ea = function(a) {
  this.qb(v(z), a);
};
chrome.cast.b.prototype.addMediaListener = chrome.cast.b.prototype.Ea;
chrome.cast.b.prototype.qb = function(a, b) {
  a.Ea(this.sessionId, b);
};
chrome.cast.b.prototype.addMediaListenerWithContext = chrome.cast.b.prototype.qb;
chrome.cast.b.prototype.Qa = function(a) {
  this.Ib(v(z), a);
};
chrome.cast.b.prototype.removeMediaListener = chrome.cast.b.prototype.Qa;
chrome.cast.b.prototype.Ib = function(a, b) {
  a.Qa(this.sessionId, b);
};
chrome.cast.b.prototype.removeMediaListenerWithContext = chrome.cast.b.prototype.Ib;
chrome.cast.b.prototype.Od = function(a, b) {
  this.Jb(v(z), a, b);
};
chrome.cast.b.prototype.removeMessageListener = chrome.cast.b.prototype.Od;
chrome.cast.b.prototype.Jb = function(a, b, c) {
  a.Ld(this.sessionId, b, c);
};
chrome.cast.b.prototype.removeMessageListenerWithContext = chrome.cast.b.prototype.Jb;
chrome.cast.b.prototype.hd = function(a, b, c) {
  a.sessionId = this.sessionId;
  z.Ob(a, "LOAD", b, c);
};
chrome.cast.b.prototype.loadMedia = chrome.cast.b.prototype.hd;
chrome.cast.b.prototype.Cd = function(a, b, c) {
  a.sessionId = this.sessionId;
  z.Ob(a, "QUEUE_LOAD", b, c);
};
chrome.cast.b.prototype.queueLoad = chrome.cast.b.prototype.Cd;
var La = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}, Ma = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
};
var A = "StopIteration" in l ? l.StopIteration : {message:"StopIteration", stack:""}, B = function() {
};
B.prototype.next = function() {
  throw A;
};
B.prototype.v = function() {
  return this;
};
var Na = function(a) {
  if (a instanceof B) {
    return a;
  }
  if ("function" == typeof a.v) {
    return a.v(!1);
  }
  if (q(a)) {
    var b = 0, c = new B;
    c.next = function() {
      for (;;) {
        if (b >= a.length) {
          throw A;
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
}, C = function(a, b, c) {
  if (q(a)) {
    try {
      y(a, b, c);
    } catch (d) {
      if (d !== A) {
        throw d;
      }
    }
  } else {
    a = Na(a);
    try {
      for (;;) {
        b.call(c, a.next(), void 0, a);
      }
    } catch (d) {
      if (d !== A) {
        throw d;
      }
    }
  }
};
var D = function(a, b) {
  this.h = {};
  this.g = [];
  this.fa = this.f = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    a && this.addAll(a);
  }
};
e = D.prototype;
e.l = function() {
  this.ia();
  for (var a = [], b = 0;b < this.g.length;b++) {
    a.push(this.h[this.g[b]]);
  }
  return a;
};
e.B = function() {
  this.ia();
  return this.g.concat();
};
e.M = function(a) {
  return E(this.h, a);
};
e.clear = function() {
  this.h = {};
  this.fa = this.f = this.g.length = 0;
};
e.remove = function(a) {
  return E(this.h, a) ? (delete this.h[a], this.f--, this.fa++, this.g.length > 2 * this.f && this.ia(), !0) : !1;
};
e.ia = function() {
  if (this.f != this.g.length) {
    for (var a = 0, b = 0;a < this.g.length;) {
      var c = this.g[a];
      E(this.h, c) && (this.g[b++] = c);
      a++;
    }
    this.g.length = b;
  }
  if (this.f != this.g.length) {
    for (var d = {}, b = a = 0;a < this.g.length;) {
      c = this.g[a], E(d, c) || (this.g[b++] = c, d[c] = 1), a++;
    }
    this.g.length = b;
  }
};
e.get = function(a, b) {
  return E(this.h, a) ? this.h[a] : b;
};
e.set = function(a, b) {
  E(this.h, a) || (this.f++, this.g.push(a), this.fa++);
  this.h[a] = b;
};
e.addAll = function(a) {
  var b;
  a instanceof D ? (b = a.B(), a = a.l()) : (b = Ma(a), a = La(a));
  for (var c = 0;c < b.length;c++) {
    this.set(b[c], a[c]);
  }
};
e.forEach = function(a, b) {
  for (var c = this.B(), d = 0;d < c.length;d++) {
    var f = c[d], g = this.get(f);
    a.call(b, g, f, this);
  }
};
e.clone = function() {
  return new D(this);
};
e.v = function(a) {
  this.ia();
  var b = 0, c = this.fa, d = this, f = new B;
  f.next = function() {
    if (c != d.fa) {
      throw Error("The map has changed since the iterator was created");
    }
    if (b >= d.g.length) {
      throw A;
    }
    var f = d.g[b++];
    return a ? f : d.h[f];
  };
  return f;
};
var E = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
var Oa = function(a, b) {
  this.requestId = a;
  this.$d = b;
  this.Vb = null;
};
Oa.prototype.Eb = function() {
};
var F = function() {
  this.ta = new D;
};
F.prototype.Kc = function(a) {
  var b = this;
  this.ta.set(a.requestId, a);
  a.Vb = setTimeout(function() {
    return b.ud(a);
  }, a.$d);
};
F.prototype.Kb = function(a) {
  var b = this.ta.get(a);
  if (!b) {
    return null;
  }
  clearTimeout(b.Vb);
  this.ta.remove(a);
  return b;
};
F.prototype.ud = function(a) {
  this.ta.remove(a.requestId);
  a.Eb();
};
var Pa = function(a) {
  this.ld = a;
}, Ra = function(a) {
  var b = Qa.get(a);
  b || (b = new Pa(a), Qa.set(a, b));
  return b;
};
e = Pa.prototype;
e.log = function(a, b, c) {
  if (1 <= a) {
    "function" == typeof b && (b = b());
    var d = {fe:this.ld, level:a, time:Date.now(), message:b, de:c};
    Sa.forEach(function(a) {
      return a(d);
    });
  }
};
e.error = function(a, b) {
  this.log(3, a, b);
};
e.be = function(a, b) {
  this.log(2, a, b);
};
e.info = function(a, b) {
  this.log(1, a, b);
};
e.Bb = function(a, b) {
  this.log(0, a, b);
};
var Sa = [], Qa = new Map;
var G = function() {
  this.Ka = this.Ka;
  this.pd = this.pd;
};
G.prototype.Ka = !1;
G.prototype.isDisposed = function() {
  return this.Ka;
};
var Ta = function(a, b, c, d) {
  d = d ? d(b) : b;
  return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b);
};
var H;
a: {
  var Ua = l.navigator;
  if (Ua) {
    var Va = Ua.userAgent;
    if (Va) {
      H = Va;
      break a;
    }
  }
  H = "";
}
var I = function(a) {
  return -1 != H.indexOf(a);
};
var Wa = I("Opera"), J = I("Trident") || I("MSIE"), Xa = I("Edge"), K = I("Gecko") && !(-1 != H.toLowerCase().indexOf("webkit") && !I("Edge")) && !(I("Trident") || I("MSIE")) && !I("Edge"), L = -1 != H.toLowerCase().indexOf("webkit") && !I("Edge"), Ya;
a: {
  var Za = "", $a = function() {
    var a = H;
    if (K) {
      return /rv\:([^\);]+)(\)|;)/.exec(a);
    }
    if (Xa) {
      return /Edge\/([\d\.]+)/.exec(a);
    }
    if (J) {
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    }
    if (L) {
      return /WebKit\/(\S+)/.exec(a);
    }
    if (Wa) {
      return /(?:Version)[ \/]?(\S+)/.exec(a);
    }
  }();
  $a && (Za = $a ? $a[1] : "");
  if (J) {
    var M, ab = l.document;
    M = ab ? ab.documentMode : void 0;
    if (null != M && M > parseFloat(Za)) {
      Ya = String(M);
      break a;
    }
  }
  Ya = Za;
}
var bb = Ya, cb = {}, N = function(a) {
  return Ta(cb, a, function() {
    for (var b = 0, c = ra(String(bb)).split("."), d = ra(String(a)).split("."), f = Math.max(c.length, d.length), g = 0;0 == b && g < f;g++) {
      var k = c[g] || "", m = d[g] || "";
      do {
        k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
        m = /(\d*)(\D*)(.*)/.exec(m) || ["", "", "", ""];
        if (0 == k[0].length && 0 == m[0].length) {
          break;
        }
        b = Ca(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || Ca(0 == k[2].length, 0 == m[2].length) || Ca(k[2], m[2]);
        k = k[3];
        m = m[3];
      } while (0 == b);
    }
    return 0 <= b;
  });
};
J && N("9");
!L || N("528");
K && N("1.9b") || J && N("8") || Wa && N("9.5") || L && N("528");
K && !N("8") || J && N("9");
var db = function(a, b, c) {
  G.call(this);
  this.gd = null != c ? t(a, c) : a;
  this.ad = b;
  this.Ia = t(this.vd, this);
  this.Ha = [];
};
pa(db, G);
e = db.prototype;
e.S = !1;
e.$ = 0;
e.J = null;
e.Sc = function(a) {
  this.Ha = arguments;
  this.J || this.$ ? this.S = !0 : this.La();
};
e.stop = function() {
  this.J && (l.clearTimeout(this.J), this.J = null, this.S = !1, this.Ha = []);
};
e.pause = function() {
  this.$++;
};
e.resume = function() {
  this.$--;
  this.$ || !this.S || this.J || (this.S = !1, this.La());
};
e.vd = function() {
  this.J = null;
  this.S && !this.$ && (this.S = !1, this.La());
};
e.La = function() {
  var a = this.Ia, b = this.ad;
  if ("function" != p(a)) {
    if (a && "function" == typeof a.handleEvent) {
      a = t(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  this.J = 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
  this.gd.apply(null, this.Ha);
};
var eb = I("Safari") && !((I("Chrome") || I("CriOS")) && !I("Edge") || I("Coast") || I("Opera") || I("Edge") || I("Silk") || I("Android")) && !(I("iPhone") && !I("iPod") && !I("iPad") || I("iPad") || I("iPod"));
var O = null, fb = null, gb = K || L && !eb || Wa || "function" == typeof l.btoa, hb = function(a, b) {
  var c;
  if (gb && !b) {
    c = l.btoa(a);
  } else {
    c = [];
    for (var d = 0, f = 0;f < a.length;f++) {
      for (var g = a.charCodeAt(f);255 < g;) {
        c[d++] = g & 255, g >>= 8;
      }
      c[d++] = g;
    }
    v(q(c), "encodeByteArray takes an array as a parameter");
    if (!O) {
      for (O = {}, fb = {}, a = 0;65 > a;a++) {
        O[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), fb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a);
      }
    }
    b = b ? fb : O;
    a = [];
    for (d = 0;d < c.length;d += 3) {
      var k = c[d], m = (f = d + 1 < c.length) ? c[d + 1] : 0, w = (g = d + 2 < c.length) ? c[d + 2] : 0, ma = k >> 2, k = (k & 3) << 4 | m >> 4, m = (m & 15) << 2 | w >> 6, w = w & 63;
      g || (w = 64, f || (m = 64));
      a.push(b[ma], b[k], b[m], b[w]);
    }
    c = a.join("");
  }
  return c;
};
var ib = function(a) {
  if (a.l && "function" == typeof a.l) {
    return a.l();
  }
  if (r(a)) {
    return a.split("");
  }
  if (q(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return La(a);
}, jb = function(a, b, c) {
  if (a.forEach && "function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (q(a) || r(a)) {
      y(a, b, c);
    } else {
      var d;
      if (a.B && "function" == typeof a.B) {
        d = a.B();
      } else {
        if (a.l && "function" == typeof a.l) {
          d = void 0;
        } else {
          if (q(a) || r(a)) {
            d = [];
            for (var f = a.length, g = 0;g < f;g++) {
              d.push(g);
            }
          } else {
            d = Ma(a);
          }
        }
      }
      for (var f = ib(a), g = f.length, k = 0;k < g;k++) {
        b.call(c, f[k], d && d[k], a);
      }
    }
  }
};
var P = function(a) {
  this.h = new D;
  a && this.addAll(a);
}, kb = function(a) {
  var b = typeof a;
  return "object" == b && a || "function" == b ? "o" + (a[ka] || (a[ka] = ++la)) : b.substr(0, 1) + a;
};
e = P.prototype;
e.add = function(a) {
  this.h.set(kb(a), a);
};
e.addAll = function(a) {
  a = ib(a);
  for (var b = a.length, c = 0;c < b;c++) {
    this.add(a[c]);
  }
};
e.removeAll = function(a) {
  a = ib(a);
  for (var b = a.length, c = 0;c < b;c++) {
    this.remove(a[c]);
  }
};
e.remove = function(a) {
  return this.h.remove(kb(a));
};
e.clear = function() {
  this.h.clear();
};
e.contains = function(a) {
  return this.h.M(kb(a));
};
e.l = function() {
  return this.h.l();
};
e.clone = function() {
  return new P(this);
};
e.v = function() {
  return this.h.v(!1);
};
var lb = function(a, b, c, d) {
  Oa.call(this, a, d || 6E5);
  this.Yd = b;
  this.Ma = c;
};
aa(lb, Oa);
lb.prototype.Eb = function() {
  this.Ma(new chrome.cast.Error(chrome.cast.u.TIMEOUT));
};
var Q = function(a, b, c, d) {
  this.type = a;
  this.message = b;
  this.sequenceNumber = void 0 !== c ? c : -1;
  this.timeoutMillis = d || 0;
  this.clientId = "";
};
var R = function(a, b) {
  this.Ia = a;
  this.D = b || String(Date.now()) + String(Math.floor(1e5 * Math.random()));
  this.L = null;
};
R.prototype.Qb = function(a) {
  if (!this.L) {
    return S.error("No active session"), "No active session";
  }
  a.clientId = this.D;
  a = JSON.stringify(a);
  if (32768 < a.length) {
    return S.error("Message length over limit"), "Message length over limit";
  }
  S.Bb("Send " + a);
  this.L.send(a);
  return null;
};
R.prototype.connect = function(a) {
  this.L = a;
  this.L.onmessage = t(this.qd, this);
  this.Qb(new Q("client_connect", this.D));
};
R.prototype.disconnect = function() {
  this.L.close();
  this.L = null;
};
R.prototype.qd = function(a) {
  S.Bb("Receive " + a.data);
  a = JSON.parse(a.data);
  if (a.clientId == this.D) {
    this.Ia.onMessage(a);
  }
};
var S = Ra("mr.cast.ExtensionMessenger");
var mb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/, nb = function(a, b) {
  if (a) {
    a = a.split("&");
    for (var c = 0;c < a.length;c++) {
      var d = a[c].indexOf("="), f, g = null;
      0 <= d ? (f = a[c].substring(0, d), g = a[c].substring(d + 1)) : f = a[c];
      b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "");
    }
  }
};
var T = function(a, b) {
  this.X = this.ea = this.C = "";
  this.P = null;
  this.Z = this.H = "";
  this.m = this.ed = !1;
  var c;
  a instanceof T ? (this.m = void 0 !== b ? b : a.m, this.Aa(a.C), this.$a(a.ea), this.xa(a.X), this.Ya(a.P), this.za(a.H), this.Za(a.w.clone()), this.ya(a.Z)) : a && (c = String(a).match(mb)) ? (this.m = !!b, this.Aa(c[1] || "", !0), this.$a(c[2] || "", !0), this.xa(c[3] || "", !0), this.Ya(c[4]), this.za(c[5] || "", !0), this.Za(c[6] || "", !0), this.ya(c[7] || "", !0)) : (this.m = !!b, this.w = new U(null, null, this.m));
};
e = T.prototype;
e.toString = function() {
  var a = [], b = this.C;
  b && a.push(V(b, ob, !0), ":");
  var c = this.X;
  if (c || "file" == b) {
    a.push("//"), (b = this.ea) && a.push(V(b, ob, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.P, null != c && a.push(":", String(c));
  }
  if (c = this.H) {
    this.Oa() && "/" != c.charAt(0) && a.push("/"), a.push(V(c, "/" == c.charAt(0) ? pb : qb, !0));
  }
  (c = this.Tc()) && a.push("?", c);
  (c = this.Z) && a.push("#", V(c, rb));
  return a.join("");
};
e.resolve = function(a) {
  var b = this.clone(), c = a.Yc();
  c ? b.Aa(a.C) : c = a.Zc();
  c ? b.$a(a.ea) : c = a.Oa();
  c ? b.xa(a.X) : c = a.Wc();
  var d = a.H;
  if (c) {
    b.Ya(a.P);
  } else {
    if (c = a.Cb()) {
      if ("/" != d.charAt(0)) {
        if (this.Oa() && !this.Cb()) {
          d = "/" + d;
        } else {
          var f = b.H.lastIndexOf("/");
          -1 != f && (d = b.H.substr(0, f + 1) + d);
        }
      }
      f = d;
      if (".." == f || "." == f) {
        d = "";
      } else {
        if (-1 != f.indexOf("./") || -1 != f.indexOf("/.")) {
          for (var d = 0 == f.lastIndexOf("/", 0), f = f.split("/"), g = [], k = 0;k < f.length;) {
            var m = f[k++];
            "." == m ? d && k == f.length && g.push("") : ".." == m ? ((1 < g.length || 1 == g.length && "" != g[0]) && g.pop(), d && k == f.length && g.push("")) : (g.push(m), d = !0);
          }
          d = g.join("/");
        } else {
          d = f;
        }
      }
    }
  }
  c ? b.za(d) : c = a.Xc();
  c ? b.Za(a.w.clone()) : c = a.Vc();
  c && b.ya(a.Z);
  return b;
};
e.clone = function() {
  return new T(this);
};
e.Aa = function(a, b) {
  this.F();
  if (this.C = b ? W(a, !0) : a) {
    this.C = this.C.replace(/:$/, "");
  }
  return this;
};
e.Yc = function() {
  return !!this.C;
};
e.$a = function(a, b) {
  this.F();
  this.ea = b ? W(a) : a;
  return this;
};
e.Zc = function() {
  return !!this.ea;
};
e.xa = function(a, b) {
  this.F();
  this.X = b ? W(a, !0) : a;
  return this;
};
e.Oa = function() {
  return !!this.X;
};
e.Ya = function(a) {
  this.F();
  if (a) {
    a = Number(a);
    if (isNaN(a) || 0 > a) {
      throw Error("Bad port number " + a);
    }
    this.P = a;
  } else {
    this.P = null;
  }
  return this;
};
e.Wc = function() {
  return null != this.P;
};
e.za = function(a, b) {
  this.F();
  this.H = b ? W(a, !0) : a;
  return this;
};
e.Cb = function() {
  return !!this.H;
};
e.Xc = function() {
  return "" !== this.w.toString();
};
e.Za = function(a, b) {
  this.F();
  a instanceof U ? (this.w = a, this.w.Wa(this.m)) : (b || (a = V(a, sb)), this.w = new U(a, null, this.m));
  return this;
};
e.Tc = function() {
  return this.w.toString();
};
e.ya = function(a, b) {
  this.F();
  this.Z = b ? W(a) : a;
  return this;
};
e.Vc = function() {
  return !!this.Z;
};
e.F = function() {
  if (this.ed) {
    throw Error("Tried to modify a read-only Uri");
  }
};
e.Wa = function(a) {
  this.m = a;
  this.w && this.w.Wa(a);
  return this;
};
var W = function(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}, V = function(a, b, c) {
  return r(a) ? (a = encodeURI(a).replace(b, tb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}, tb = function(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}, ob = /[#\/\?@]/g, qb = /[\#\?:]/g, pb = /[\#\?]/g, sb = /[\#\?@]/g, rb = /#/g, U = function(a, b, c) {
  this.f = this.c = null;
  this.A = a || null;
  this.m = !!c;
};
e = U.prototype;
e.G = function() {
  if (!this.c && (this.c = new D, this.f = 0, this.A)) {
    var a = this;
    nb(this.A, function(b, c) {
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
    });
  }
};
e.add = function(a, b) {
  this.G();
  this.O();
  a = this.N(a);
  var c = this.c.get(a);
  c || this.c.set(a, c = []);
  c.push(b);
  this.f = x(this.f) + 1;
  return this;
};
e.remove = function(a) {
  this.G();
  a = this.N(a);
  return this.c.M(a) ? (this.O(), this.f = x(this.f) - this.c.get(a).length, this.c.remove(a)) : !1;
};
e.clear = function() {
  this.O();
  this.c = null;
  this.f = 0;
};
e.M = function(a) {
  this.G();
  a = this.N(a);
  return this.c.M(a);
};
e.B = function() {
  this.G();
  for (var a = this.c.l(), b = this.c.B(), c = [], d = 0;d < b.length;d++) {
    for (var f = a[d], g = 0;g < f.length;g++) {
      c.push(b[d]);
    }
  }
  return c;
};
e.l = function(a) {
  this.G();
  var b = [];
  if (r(a)) {
    this.M(a) && (b = Ga(b, this.c.get(this.N(a))));
  } else {
    a = this.c.l();
    for (var c = 0;c < a.length;c++) {
      b = Ga(b, a[c]);
    }
  }
  return b;
};
e.set = function(a, b) {
  this.G();
  this.O();
  a = this.N(a);
  this.M(a) && (this.f = x(this.f) - this.c.get(a).length);
  this.c.set(a, [b]);
  this.f = x(this.f) + 1;
  return this;
};
e.get = function(a, b) {
  a = a ? this.l(a) : [];
  return 0 < a.length ? String(a[0]) : b;
};
e.Xd = function(a, b) {
  this.remove(a);
  0 < b.length && (this.O(), this.c.set(this.N(a), Ha(b)), this.f = x(this.f) + b.length);
};
e.toString = function() {
  if (this.A) {
    return this.A;
  }
  if (!this.c) {
    return "";
  }
  for (var a = [], b = this.c.B(), c = 0;c < b.length;c++) {
    for (var d = b[c], f = encodeURIComponent(String(d)), d = this.l(d), g = 0;g < d.length;g++) {
      var k = f;
      "" !== d[g] && (k += "=" + encodeURIComponent(String(d[g])));
      a.push(k);
    }
  }
  return this.A = a.join("&");
};
e.O = function() {
  this.A = null;
};
e.clone = function() {
  var a = new U;
  a.A = this.A;
  this.c && (a.c = this.c.clone(), a.f = this.f);
  return a;
};
e.N = function(a) {
  a = String(a);
  this.m && (a = a.toLowerCase());
  return a;
};
e.Wa = function(a) {
  a && !this.m && (this.G(), this.O(), this.c.forEach(function(a, c) {
    var b = c.toLowerCase();
    c != b && (this.remove(c), this.Xd(b, a));
  }, this));
  this.m = a;
};
e.extend = function(a) {
  for (var b = 0;b < arguments.length;b++) {
    jb(arguments[b], function(a, b) {
      this.add(b, a);
    }, this);
  }
};
var ub = function(a, b, c, d, f, g, k, m, w, ma) {
  this.Mc = a;
  this.D = b || null;
  this.tb = c || null;
  this.yb = d || null;
  this.Db = void 0 !== f ? f : null;
  this.sb = g || null;
  this.Ab = k || null;
  this.bd = m || !1;
  this.vb = w || null;
  this.ub = ma || null;
};
ub.prototype.toString = function() {
  var a = new T;
  a.Aa("https");
  a.xa("google.com");
  a.za("/cast");
  var b = [];
  y(this.Mc, function(a) {
    var c = "__castAppId__=" + a.appId;
    a.capabilities && 0 < a.capabilities.length && (c = c + "(" + a.capabilities.join(","), c += ")");
    b.push(c);
  });
  this.D && b.push("__castClientId__=" + this.D);
  this.tb && b.push("__castAutoJoinPolicy__=" + this.tb);
  this.yb && b.push("__castDefaultActionPolicy__=" + this.yb);
  null != this.Db && b.push("__castLaunchTimeout__=" + this.Db);
  this.sb && b.push("__dialAppName__=" + this.sb);
  this.Ab && b.push("__dialPostData__=" + this.Ab);
  this.bd && b.push("__castInvisibleSender__=true");
  this.vb && (b.push("__castBroadcastNamespace__=" + this.vb), b.push("__castBroadcastId__=" + Math.random()));
  this.ub && b.push("__castBroadcastMessage__=" + encodeURIComponent(JSON.stringify(this.ub)));
  a.ya(b.join("/"));
  return a.toString();
};
var X = function() {
  this.R = {};
  this.ra = {};
};
X.prototype.Pd = function(a, b) {
  var c = this, d = this.R[a];
  return d ? (d.status = b, d.media.forEach(function(a) {
    delete c.ra[a.sessionId + "#" + a.mediaSessionId];
  }), delete this.R[a], !0) : !1;
};
X.prototype.Rc = function(a) {
  var b = this, c = this.R[a.sessionId];
  if (c) {
    return c.statusText = a.statusText, c.namespaces = a.namespaces || [], c.receiver.volume = a.receiver.volume, c;
  }
  var c = new chrome.cast.b(a.sessionId, a.appId, a.displayName, a.appImages, a.receiver), d;
  for (d in a) {
    "media" == d ? c.media = a.media.map(function(a) {
      a = b.xb(a);
      a.ee = !1;
      a.na = !0;
      return a;
    }) : a.hasOwnProperty(d) && (c[d] = a[d]);
  }
  return this.R[a.sessionId] = c;
};
X.prototype.xb = function(a) {
  var b = a.sessionId + "#" + a.mediaSessionId, c = this.ra[b];
  c || (c = new chrome.cast.media.a(a.sessionId, a.mediaSessionId), this.ra[b] = c, (b = this.R[a.sessionId]) && b.media.push(c));
  b = c;
  b.currentItemId = null;
  b.loadingItemId = null;
  b.preloadedItemId = null;
  for (var d in a) {
    "items" != d && a.hasOwnProperty(d) && ("volume" == d ? (b.volume.level = a.volume.level, b.volume.muted = a.volume.muted) : b[d] = a[d]);
  }
  d = ia(["idleReason", "extendedStatus"]);
  for (var f = d.next();!f.done;f = d.next()) {
    f = f.value, a.hasOwnProperty(f) || (b[f] = null);
  }
  "currentTime" in a && (b.Pa = Date.now());
  if (b.playerState == chrome.cast.media.T.IDLE && null == b.loadingItemId) {
    b.currentItemId = null, b.loadingItemId = null, b.preloadedItemId = null, b.items = null;
  } else {
    if (a.hasOwnProperty("items") && a.items) {
      d = [];
      var g = b.items, f = {};
      if (g) {
        for (var k = 0;k < g.length;k++) {
          f[g[k].itemId] = k;
        }
      }
      a = ia(a.items);
      for (g = a.next();!g.done;g = a.next()) {
        g = g.value;
        if (!g.media) {
          var k = g.itemId, m = b.items ? b.items[f[k]] : null;
          m && m.media ? g.media = m.media : k == b.currentItemId && b.media && (g.media = b.media);
        }
        d.push(vb(g));
      }
      b.items = d;
    }
  }
  return c;
};
X.prototype.Md = function(a) {
  delete this.ra[a.sessionId + "#" + a.mediaSessionId];
  var b = this.R[a.sessionId];
  b && (a = b.media.indexOf(a), -1 != a && b.media.splice(a, 1));
};
var vb = function(a) {
  var b = new chrome.cast.media.ib(a.media), c;
  for (c in a) {
    a.hasOwnProperty(c) && (b[c] = a[c]);
  }
  return b;
};
var wb = function() {
  this.Y = new R(this);
  this.j = null;
  this.wa = new X;
  this.va = 0;
  this.Ja = new F;
  this.ca = new D;
  this.Hb = !1;
  this.W = new D;
  this.qa = new D;
  this.ua = [];
  this.Pc = this.Qc.bind(this);
  this.I = null;
  this.pa = 0;
  this.K = null;
  this.Oc = new db(this.Sd, 200, this);
  this.zb = null;
}, xb = function(a, b) {
  a && a(b);
};
e = wb.prototype;
e.ja = function(a, b, c) {
  return new lb(this.va, a, b, c);
};
e.ba = function(a, b, c) {
  b && this.Ja.Kc(b);
  void 0 !== c ? a.sequenceNumber = c : (a.sequenceNumber = this.va, this.va = (this.va + 1) % 9007199254740992);
  c = this.Y.Qb(a);
  b && c && (a = this.Ja.Kb(a.sequenceNumber), b = new chrome.cast.Error(chrome.cast.u.INVALID_PARAMETER, c), (a = a.Ma) && a(b));
};
e.oa = function(a, b) {
  var c = this;
  z = this;
  this.j || (this.j = a, a.invisibleSender || (a = new PresentationRequest(this.la()), a.getAvailability().then(function(a) {
    a.onchange = function() {
      c.Hb = !!a.value;
      c.j.receiverListener(a.value ? chrome.cast.ha.AVAILABLE : chrome.cast.ha.UNAVAILABLE);
    };
    a.onchange();
  }, function() {
    c.j.receiverListener(chrome.cast.ha.AVAILABLE);
  }), a.onconnectionavailable = function(a) {
    c.sa(a.connection);
  }, this.zb = (l.navigator || null).presentation.defaultRequest = a, a.reconnect(chrome.cast.Wb).then(function(a) {
    c.sa(a);
  }, ja)));
  b && b(void 0);
};
e.Xa = function(a) {
  a.navigator.presentation.defaultRequest = this.zb;
};
e.sa = function(a, b) {
  b = void 0 === b ? null : b;
  var c = this;
  a.onclose = function(a) {
    c.I = null;
    switch(a.reason) {
      case "closed":
        c.od();
        break;
      case "error":
        b && (a = new chrome.cast.Error(chrome.cast.u.SESSION_ERROR), b && b(a));
    }
  };
  a.onterminate = function() {
    c.td();
  };
  "connected" == a.state ? this.Y.connect(a) : a.onconnect = function() {
    c.Y.connect(a);
  };
};
e.Nc = function(a, b) {
  "urn:x-cast:com.google.cast.media" != a ? Y.error("Unsupported broadcast message namespace - " + a) : yb.has(b.type) ? this.Hb && (this.K ? (b.sessionId = this.K, this.Va(null, b.type, b, function() {
    Y.info("Send Broadcast directly succeeded");
  }, function(a) {
    Y.error("Send Broadcast directly failed with code " + a.code);
  })) : this.Oc.Sc(this.la(void 0, a, b))) : Y.error("Unsupported broadcast message type - " + b.type);
};
e.Sd = function(a) {
  Y.info("Broadcast request " + a);
  (a = (new PresentationRequest(a)).getAvailability()) ? a.then(function() {
    Y.info("Broadcast succeeded");
  }, function() {
    Y.be("Broadcast failed");
  }) : Y.error("presentationRequest.getAvailability return undefined");
};
e.requestSession = function(a, b, c) {
  var d = this;
  this.I ? xb(b, new chrome.cast.Error(chrome.cast.u.INVALID_PARAMETER, "Already requesting session")) : (c = this.la(c), this.I = a, (new PresentationRequest(c.toString())).start().then(function(a) {
    d.sa(a, b);
  }).catch(function(a) {
    d.I = null;
    a = new chrome.cast.Error("AbortError" == a.name || "NotAllowedError" == a.name ? chrome.cast.u.CANCEL : chrome.cast.u.SESSION_ERROR);
    b && b(a);
  }));
};
e.la = function(a, b, c) {
  var d = null, f = null, g = a || this.j.sessionRequest, k = g.dialRequest;
  k && (d = k.appName, (f = k.launchParameter) && !f.match(zb) && (f = hb(f)));
  var m = [];
  m.push({appId:g.appId, capabilities:g.capabilities});
  a || y(this.j.additionalSessionRequests, function(a) {
    m.push({appId:a.appId, capabilities:a.capabilities});
  });
  return (new ub(m, this.Y.D, this.j.autoJoinPolicy, this.j.defaultActionPolicy, g.requestSessionTimeout, d, f, this.j.invisibleSender, b, c)).toString();
};
e.Ob = function(a, b, c, d) {
  var f = this;
  this.pa++;
  this.Va(null, b, a, function(a) {
    f.pa--;
    a.na = !0;
    c && c(a);
  }, function(a) {
    f.pa--;
    d(a);
  }, chrome.cast.media.timeout.load);
};
e.i = function(a, b, c, d, f, g) {
  var k = this;
  this.Va(a, b, c, function(a) {
    k.wb(a);
    d && d(void 0);
  }, f, g);
};
e.Va = function(a, b, c, d, f, g) {
  c.type = b;
  null != a && (c.mediaSessionId = a.mediaSessionId, c.sessionId = a.sessionId);
  this.Nb(c, function(a) {
    a.status && 1 == a.status.length ? d && d(a.status[0]) : (a = new chrome.cast.Error(chrome.cast.u.SESSION_ERROR), f && f(a));
  }, f, g);
};
e.setReceiverVolume = function(a, b, c, d) {
  b.sessionId = a;
  this.ba(new Q("v2_message", b, void 0, chrome.cast.timeout.setReceiverVolume), this.ja(c, d, chrome.cast.timeout.sendCustomMessage));
};
e.Ta = function(a) {
  var b = this;
  (new PresentationRequest(this.la())).reconnect(chrome.cast.kc + a).then(function(a) {
    b.sa(a);
  }, ja);
};
e.leaveSession = function(a, b, c) {
  this.ba(new Q("leave_session", a, void 0, chrome.cast.timeout.leaveSession), this.ja(b, c, chrome.cast.timeout.leaveSession));
};
e.Rd = function(a, b, c) {
  this.ba(new Q("app_message", a, void 0, chrome.cast.timeout.sendCustomMessage), this.ja(b, c, chrome.cast.timeout.sendCustomMessage));
};
e.Nb = function(a, b, c, d) {
  this.ba(new Q("v2_message", a, void 0, d), this.ja(b, c, d));
};
var Ab = function(a, b, c) {
  var d = a.get(b);
  d || (d = new P, a.set(b, d));
  d.add(c);
};
e = wb.prototype;
e.Lc = function(a, b) {
  Ab(this.ca, a, b);
};
e.Qd = function(a, b) {
  (a = this.ca.get(a)) && a.remove(b);
};
e.Fa = function(a) {
  this.ua.push(a);
};
e.Ra = function(a) {
  a = this.ua.indexOf(a);
  0 <= a && this.ua.splice(a, 1);
};
e.Hc = function(a, b, c) {
  var d = this.W.get(a);
  d || (d = new D, this.W.set(a, d));
  a = d.get(b);
  a || (a = new P, d.set(b, a));
  a.add(c);
};
e.Ld = function(a, b, c) {
  (a = this.W.get(a)) && (b = a.get(b)) && b.remove(c);
};
e.Ea = function(a, b) {
  Ab(this.qa, a, b);
};
e.Qa = function(a, b) {
  (a = this.qa.get(a)) && a.remove(b);
};
e.Ic = function(a, b) {
  -1 == a.da.indexOf(b) && a.da.push(b);
};
e.Nd = function(a, b) {
  b = a.da.indexOf(b);
  -1 != b && a.da.splice(b, 1);
};
e.cd = function(a) {
  var b = this.Ja.Kb(a.sequenceNumber);
  b && (b = "error" == a.type ? b.Ma : b.Yd) && b(a.message);
};
e.dd = function(a) {
  return a.playerState != chrome.cast.media.T.IDLE || null != a.loadingItemId;
};
e.wb = function(a) {
  if (a.na) {
    var b = this.dd(a);
    a.da.forEach(function(a) {
      a(b);
    });
    b || this.wa.Md(a);
  } else {
    if (!(0 < this.pa)) {
      a.na = !0;
      var c = this.qa.get(a.sessionId);
      c && C(c.v(), function(b) {
        b(a);
      });
    }
  }
};
e.Qc = function(a) {
  return this.wa.xb(a);
};
e.kd = function(a) {
  switch(a.type) {
    case "new_session":
    case "update_session":
      a.message = this.wa.Rc(a.message);
      break;
    case "v2_message":
      (a = a.message) && "MEDIA_STATUS" == a.type && a.status && (a.status = a.status.map(this.Pc));
  }
};
e.Lb = function(a) {
  if (this.K) {
    var b = this.K;
    this.K = null;
    this.Y.disconnect();
    var c = a != chrome.cast.U.STOPPED;
    this.wa.Pd(b, a) && (this.W.remove(b), this.qa.remove(b), a = this.ca.get(b)) && (this.ca.remove(b), C(a.v(), function(a) {
      a(c);
    }));
  }
};
e.onMessage = function(a) {
  this.kd(a);
  this.cd(a);
  var b = a.message;
  if (b) {
    switch(a.type) {
      case "receiver_action":
        this.sd(b);
        break;
      case "new_session":
        this.rd(b);
        break;
      case "update_session":
        this.wd(b);
        break;
      case "app_message":
        this.md(b);
        break;
      case "v2_message":
        this.xd(b);
        break;
      case "custom_dial_launch":
        this.nd(a.sequenceNumber, b);
    }
  }
};
e.rd = function(a) {
  this.K = a.sessionId;
  this.I ? (this.I(a), this.I = null) : this.j && this.j.sessionListener(a);
};
e.wd = function(a) {
  (a = this.ca.get(a.sessionId)) && C(a.v(), function(a) {
    a(!0);
  });
};
e.sd = function(a) {
  this.ua.forEach(function(b) {
    b(a.receiver, a.action);
  });
};
e.od = function() {
  this.Lb(chrome.cast.U.DISCONNECTED);
};
e.td = function() {
  this.Lb(chrome.cast.U.STOPPED);
};
e.md = function(a) {
  var b = this.W.get(a.sessionId);
  b && (b = b.get(a.namespaceName)) && C(b.v(), function(b) {
    b(a.namespaceName, a.message);
  });
};
e.xd = function(a) {
  "MEDIA_STATUS" == a.type && a.status.forEach(this.wb.bind(this));
};
e.Ua = function(a, b) {
  this.ba(new Q("custom_dial_launch", b, void 0, chrome.cast.timeout.sendCustomMessage), null, a);
};
e.nd = function(a, b) {
  var c = this;
  this.j.customDialLaunchCallback ? this.j.customDialLaunchCallback(b).then(function(b) {
    c.Ua(a, b);
  }, function() {
    c.Ua(a);
  }) : this.Ua(a);
};
var zb = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, yb = new Set(["PRECACHE"]), Z = new wb, Y = Ra("mr.cast.Api");
chrome.cast.oa = function(a, b, c) {
  Z.oa(a, b, c);
};
n("chrome.cast.initialize", chrome.cast.oa, void 0);
chrome.cast.$c = function(a, b, c) {
  var d = new wb;
  d.oa(a, b, c);
  return d;
};
n("chrome.cast.initializeWithContext", chrome.cast.$c, void 0);
chrome.cast.Xa = function(a) {
  Z.Xa(a);
};
n("chrome.cast.setPageContext", chrome.cast.Xa, void 0);
chrome.cast.requestSession = function(a, b, c) {
  Z.requestSession(a, b, c);
};
n("chrome.cast.requestSession", chrome.cast.requestSession, void 0);
chrome.cast.yd = function(a) {
  Z.Nc("urn:x-cast:com.google.cast.media", new chrome.cast.media.mc(a));
};
n("chrome.cast.precache", chrome.cast.yd, void 0);
chrome.cast.Ta = function(a) {
  chrome.cast.Mb(Z, a);
};
n("chrome.cast.requestSessionById", chrome.cast.Ta, void 0);
chrome.cast.Mb = function(a, b) {
  a.Ta(b);
};
n("chrome.cast.requestSessionByIdWithContext", chrome.cast.Mb, void 0);
chrome.cast.Fa = function(a) {
  Z.Fa(a);
};
n("chrome.cast.addReceiverActionListener", chrome.cast.Fa, void 0);
chrome.cast.Ra = function(a) {
  Z.Ra(a);
};
n("chrome.cast.removeReceiverActionListener", chrome.cast.Ra, void 0);
chrome.cast.jd = function() {
};
n("chrome.cast.logMessage", chrome.cast.jd, void 0);
chrome.cast.Td = function(a, b) {
  b();
};
n("chrome.cast.setCustomReceivers", chrome.cast.Td, void 0);
chrome.cast.Ud = function(a, b) {
  b();
};
n("chrome.cast.setReceiverDisplayStatus", chrome.cast.Ud, void 0);
chrome.cast.unescape = function(a) {
  return -1 != a.indexOf("&") ? "document" in l ? Aa(a) : Ba(a) : a;
};
n("chrome.cast.unescape", chrome.cast.unescape, void 0);
chrome.cast.isAvailable = !1;
n("chrome.cast.isAvailable", chrome.cast.isAvailable, void 0);
chrome.cast.Tb = !1;
chrome.cast.ab = function() {
  if (!chrome.cast.Tb) {
    chrome.cast.Tb = !0;
    chrome.cast.isAvailable = !0;
    var a = window.__onGCastApiAvailable;
    a && "function" == typeof a && a(!0);
  }
};
"complete" == document.readyState ? chrome.cast.ab() : (window.addEventListener("load", chrome.cast.ab, !1), window.addEventListener("DOMContentLoaded", chrome.cast.ab, !1));
}).call(window);
