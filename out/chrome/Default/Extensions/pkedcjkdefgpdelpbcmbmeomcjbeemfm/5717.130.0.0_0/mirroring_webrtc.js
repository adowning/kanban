'use strict';var IL = {TAB:0, pH:1, bX:2}, JL = function(a) {
  oh("MediaRouter.WebRtc.Start.Success", a, IL);
};
var KL = function(a, b) {
  Rh.call(this, b);
  this.Ya = a;
  this.ki = new Oc;
  this.Id = Tg.Vu(b.id);
  this.Ka = new Oc;
  this.ie = !1;
  this.Me = null;
  this.KC = !1;
  this.fe = this.Rg = null;
  this.Gs();
  this.aG();
  this.Yb(new Uh("GET_TURN_CREDENTIALS"));
};
la(KL, Rh);
d = KL.prototype;
d.start = function(a) {
  var b = this;
  return this.ki.promise.then(function(c) {
    if (c.Dv()) {
      return Promise.reject(new rh("Mirroring already started"));
    }
    if (b.Me) {
      return Promise.reject(new rh("Session permanently stopped"));
    }
    b.Rg = new fh("MediaRouter.WebRtc.Session.Launch");
    c.addStream(a);
    c.start();
    return b.Ka.promise;
  });
};
d.stop = function() {
  var a = this;
  this.Ka.reject(new rh("Session stop requested."));
  this.fe && (this.fe.end(), this.fe = null);
  if (this.Me) {
    return this.Me;
  }
  this.KC = this.ie = !1;
  this.Rg = null;
  return this.Me = this.ki.promise.then(function(a) {
    a.stop();
  }).then(function() {
    return a.Id.ob();
  }).catch(function(b) {
    a.Id.ob();
    throw b;
  });
};
d.Gs = function() {
  var a = this;
  this.Id.onMessage = function(b) {
    if (!b.type) {
      throw Error("Message has no type.");
    }
    switch(b.type) {
      case "TURN_CREDENTIALS":
        a.ki.resolve(new Yh(a.pb.id, b.data.credentials));
        break;
      case "ANSWER":
        a.ki.promise.then(function(a) {
          a.setRemoteDescription(b.data);
        });
        break;
      case "KNOCK_ANSWER":
        a.KC = !0;
        a.ki.promise.then(function(a) {
          a.setRemoteDescription(b.data);
        });
        break;
      case "STOP":
        a.Ka.reject(new rh("Stop signal received"));
        a.stop();
        break;
      default:
        throw new rh("Unknown message type: " + b.type);
    }
  };
};
d.aG = function() {
  var a = this;
  this.ki.promise.then(function(b) {
    b.TT(function(b) {
      a.Yb(new Uh("OFFER", new Wh(b, a.Ya, Xh)));
    });
    b.ST(function(b) {
      a.Yb(Vh(b));
    });
    b.RT(function() {
      a.ie = !0;
      a.Yb(new Uh("SESSION_START_SUCCESS"));
      !a.KC && a.Rg && a.Rg.end();
      a.Rg = null;
      a.fe = new kh("MediaRouter.WebRtc.Session.Length");
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
  this.Id.sendMessage(a, LL);
};
var LL = {channelType:"cloud"};
var ML = function() {
  Ph.call(this, "webrtc");
};
la(ML, Ph);
d = ML.prototype;
d.cu = function(a, b) {
  return new KL(a, b);
};
d.Qw = function() {
  JL(0);
};
d.Mw = function() {
  JL(1);
};
d.HE = function() {
  JL(2);
};
d.Nw = function() {
  nh("MediaRouter.WebRtc.Session.End");
};
d.Ow = function(a) {
  oh("MediaRouter.WebRtc.Start.Failure", a, qh);
};
d.Pw = function() {
  nh("MediaRouter.WebRtc.Stream.End");
};
var NL = new ML;
Nh("mr.mirror.webrtc.WebRtcService", NL);

