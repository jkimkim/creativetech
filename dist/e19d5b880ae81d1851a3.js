function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
  * Bootstrap v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(this, function () {
  "use strict";

  var t = {
    find: function find(t) {
      var _ref;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref2;

      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var i = [];
      var n = t.parentNode;

      for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) {
        n.matches(e) && i.push(n), n = n.parentNode;
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    }
  },
      e = function e(t) {
    do {
      t += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  },
      i = function i(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i = t.getAttribute("href");

      if (!_i || !_i.includes("#") && !_i.startsWith(".")) return null;
      _i.includes("#") && !_i.startsWith("#") && (_i = "#" + _i.split("#")[1]), e = _i && "#" !== _i ? _i.trim() : null;
    }

    return e;
  },
      n = function n(t) {
    var e = i(t);
    return e && document.querySelector(e) ? e : null;
  },
      s = function s(t) {
    var e = i(t);
    return e ? document.querySelector(e) : null;
  },
      o = function o(t) {
    if (!t) return 0;

    var _window$getComputedSt = window.getComputedStyle(t),
        e = _window$getComputedSt.transitionDuration,
        i = _window$getComputedSt.transitionDelay;

    var n = Number.parseFloat(e),
        s = Number.parseFloat(i);
    return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
  },
      r = function r(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      a = function a(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      l = function l(e) {
    return a(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? t.findOne(e) : null;
  },
      c = function c(t, e) {
    var i = !1;
    var n = e + 5;
    t.addEventListener("transitionend", function e() {
      i = !0, t.removeEventListener("transitionend", e);
    }), setTimeout(function () {
      i || r(t);
    }, n);
  },
      d = function d(t, e, i) {
    Object.keys(i).forEach(function (n) {
      var s = i[n],
          o = e[n],
          r = o && a(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
      var l;
      if (!new RegExp(s).test(r)) throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(n, "\" provided type \"").concat(r, "\" but expected type \"").concat(s, "\"."));
    });
  },
      h = function h(t) {
    if (!t) return !1;

    if (t.style && t.parentNode && t.parentNode.style) {
      var _e2 = getComputedStyle(t),
          _i2 = getComputedStyle(t.parentNode);

      return "none" !== _e2.display && "none" !== _i2.display && "hidden" !== _e2.visibility;
    }

    return !1;
  },
      u = function u(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      f = function f(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e3 = t.getRootNode();

      return _e3 instanceof ShadowRoot ? _e3 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? f(t.parentNode) : null;
  },
      p = function p() {},
      m = function m(t) {
    return t.offsetHeight;
  },
      g = function g() {
    var _window = window,
        t = _window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      _ = function _() {
    return "rtl" === document.documentElement.dir;
  },
      b = function b(t) {
    var e;
    e = function e() {
      var e = g();

      if (e) {
        var _i3 = t.NAME,
            _n = e.fn[_i3];
        e.fn[_i3] = t.jQueryInterface, e.fn[_i3].Constructor = t, e.fn[_i3].noConflict = function () {
          return e.fn[_i3] = _n, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e();
  },
      v = function v(t) {
    "function" == typeof t && t();
  },
      y = new Map();

  var w = {
    set: function set(t, e, i) {
      y.has(t) || y.set(t, new Map());
      var n = y.get(t);
      n.has(e) || 0 === n.size ? n.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
    },
    get: function get(t, e) {
      return y.has(t) && y.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!y.has(t)) return;
      var i = y.get(t);
      i["delete"](e), 0 === i.size && y["delete"](t);
    }
  };
  var E = /[^.]*(?=\..*)\.|.*/,
      T = /\..*/,
      A = /::\d+$/,
      L = {};
  var O = 1;
  var k = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      C = /^(mouseenter|mouseleave)/i,
      x = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function D(t, e) {
    return e && "".concat(e, "::").concat(O++) || t.uidEvent || O++;
  }

  function N(t) {
    var e = D(t);
    return t.uidEvent = e, L[e] = L[e] || {}, L[e];
  }

  function S(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var n = Object.keys(t);

    for (var _s = 0, _o = n.length; _s < _o; _s++) {
      var _o2 = t[n[_s]];
      if (_o2.originalHandler === e && _o2.delegationSelector === i) return _o2;
    }

    return null;
  }

  function I(t, e, i) {
    var n = "string" == typeof e,
        s = n ? i : e;
    var o = M(t);
    return x.has(o) || (o = t), [n, s, o];
  }

  function j(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;

    if (i || (i = n, n = null), C.test(e)) {
      var _t2 = function _t2(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      n ? n = _t2(n) : i = _t2(i);
    }

    var _I = I(e, i, n),
        _I2 = _slicedToArray(_I, 3),
        o = _I2[0],
        r = _I2[1],
        a = _I2[2],
        l = N(t),
        c = l[a] || (l[a] = {}),
        d = S(c, r, o ? i : null);

    if (d) return void (d.oneOff = d.oneOff && s);
    var h = D(r, e.replace(E, "")),
        u = o ? function (t, e, i) {
      return function n(s) {
        var o = t.querySelectorAll(e);

        for (var _r = s.target; _r && _r !== this; _r = _r.parentNode) {
          for (var _a = o.length; _a--;) {
            if (o[_a] === _r) return s.delegateTarget = _r, n.oneOff && H.off(t, s.type, e, i), i.apply(_r, [s]);
          }
        }

        return null;
      };
    }(t, i, n) : function (t, e) {
      return function i(n) {
        return n.delegateTarget = t, i.oneOff && H.off(t, n.type, e), e.apply(t, [n]);
      };
    }(t, i);
    u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = h, c[h] = u, t.addEventListener(a, u, o);
  }

  function P(t, e, i, n, s) {
    var o = S(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function M(t) {
    return t = t.replace(T, ""), k[t] || t;
  }

  var H = {
    on: function on(t, e, i, n) {
      j(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      j(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;

      var _I3 = I(e, i, n),
          _I4 = _slicedToArray(_I3, 3),
          s = _I4[0],
          o = _I4[1],
          r = _I4[2],
          a = r !== e,
          l = N(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void P(t, l, r, o, s ? i : null);
      }

      c && Object.keys(l).forEach(function (i) {
        !function (t, e, i, n) {
          var s = e[i] || {};
          Object.keys(s).forEach(function (o) {
            if (o.includes(n)) {
              var _n2 = s[o];
              P(t, e, i, _n2.originalHandler, _n2.delegationSelector);
            }
          });
        }(t, l, i, e.slice(1));
      });
      var d = l[r] || {};
      Object.keys(d).forEach(function (i) {
        var n = i.replace(A, "");

        if (!a || e.includes(n)) {
          var _e4 = d[i];
          P(t, l, r, _e4.originalHandler, _e4.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = g(),
          s = M(e),
          o = e !== s,
          r = x.has(s);
      var a,
          l = !0,
          c = !0,
          d = !1,
          h = null;
      return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (h = document.createEvent("HTMLEvents"), h.initEvent(s, l, !0)) : h = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== i && Object.keys(i).forEach(function (t) {
        Object.defineProperty(h, t, {
          get: function get() {
            return i[t];
          }
        });
      }), d && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h;
    }
  };

  var R = /*#__PURE__*/function () {
    function R(t) {
      _classCallCheck(this, R);

      (t = l(t)) && (this._element = t, w.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(R, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        w.remove(this._element, this.constructor.DATA_KEY), H.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (t) {
          _this[t] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        if (!i) return void v(t);
        var n = o(e);
        H.one(e, "transitionend", function () {
          return v(t);
        }), c(e, n);
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return w.get(t, this.DATA_KEY);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.0.1";
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs." + this.NAME;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return "." + this.DATA_KEY;
      }
    }]);

    return R;
  }();

  var B = /*#__PURE__*/function (_R) {
    _inherits(B, _R);

    var _super = _createSuper(B);

    function B() {
      _classCallCheck(this, B);

      return _super.apply(this, arguments);
    }

    _createClass(B, [{
      key: "close",
      value: function close(t) {
        var e = t ? this._getRootElement(t) : this._element,
            i = this._triggerCloseEvent(e);

        null === i || i.defaultPrevented || this._removeElement(e);
      }
    }, {
      key: "_getRootElement",
      value: function _getRootElement(t) {
        return s(t) || t.closest(".alert");
      }
    }, {
      key: "_triggerCloseEvent",
      value: function _triggerCloseEvent(t) {
        return H.trigger(t, "close.bs.alert");
      }
    }, {
      key: "_removeElement",
      value: function _removeElement(t) {
        var _this2 = this;

        t.classList.remove("show");
        var e = t.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement(t);
        }, t, e);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement(t) {
        t.parentNode && t.parentNode.removeChild(t), H.trigger(t, "closed.bs.alert");
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.alert");
          e || (e = new B(this)), "close" === t && e[t](this);
        });
      }
    }, {
      key: "handleDismiss",
      value: function handleDismiss(t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }
    }]);

    return B;
  }(R);

  H.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', B.handleDismiss(new B())), b(B);

  var W = /*#__PURE__*/function (_R2) {
    _inherits(W, _R2);

    var _super2 = _createSuper(W);

    function W() {
      _classCallCheck(this, W);

      return _super2.apply(this, arguments);
    }

    _createClass(W, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "button";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.button");
          e || (e = new W(this)), "toggle" === t && e[t]();
        });
      }
    }]);

    return W;
  }(R);

  function q(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function z(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  H.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]');
    var i = w.get(e, "bs.button");
    i || (i = new W(e)), i.toggle();
  }), b(W);
  var U = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-" + z(e), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + z(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (i) {
        var n = i.replace(/^bs/, "");
        n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = q(t.dataset[i]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return q(t.getAttribute("data-bs-" + z(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      $ = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      F = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      V = "next",
      K = "prev",
      X = "left",
      Y = "right";

  var Q = /*#__PURE__*/function (_R3) {
    _inherits(Q, _R3);

    var _super3 = _createSuper(Q);

    function Q(e, i) {
      var _this3;

      _classCallCheck(this, Q);

      _this3 = _super3.call(this, e), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(i), _this3._indicatorsElement = t.findOne(".carousel-indicators", _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
      return _this3;
    }

    _createClass(Q, [{
      key: "next",
      value: function next() {
        this._isSliding || this._slide(V);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && h(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._isSliding || this._slide(K);
      }
    }, {
      key: "pause",
      value: function pause(e) {
        e || (this._isPaused = !0), t.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (r(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(e) {
        var _this4 = this;

        this._activeElement = t.findOne(".active.carousel-item", this._element);

        var i = this._getItemIndex(this._activeElement);

        if (e > this._items.length - 1 || e < 0) return;
        if (this._isSliding) return void H.one(this._element, "slid.bs.carousel", function () {
          return _this4.to(e);
        });
        if (i === e) return this.pause(), void this.cycle();
        var n = e > i ? V : K;

        this._slide(n, this._items[e]);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread({}, $), t), d("carousel", t, F), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? Y : X);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        this._config.keyboard && H.on(this._element, "keydown.bs.carousel", function (t) {
          return _this5._keydown(t);
        }), "hover" === this._config.pause && (H.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this5.pause(t);
        }), H.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this5.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var e = function e(t) {
          !_this6._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? _this6._pointerEvent || (_this6.touchStartX = t.touches[0].clientX) : _this6.touchStartX = t.clientX;
        },
            i = function i(t) {
          _this6.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this6.touchStartX;
        },
            n = function n(t) {
          !_this6._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (_this6.touchDeltaX = t.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (t) {
            return _this6.cycle(t);
          }, 500 + _this6._config.interval));
        };

        t.find(".carousel-item img", this._element).forEach(function (t) {
          H.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (H.on(this._element, "pointerdown.bs.carousel", function (t) {
          return e(t);
        }), H.on(this._element, "pointerup.bs.carousel", function (t) {
          return n(t);
        }), this._element.classList.add("pointer-event")) : (H.on(this._element, "touchstart.bs.carousel", function (t) {
          return e(t);
        }), H.on(this._element, "touchmove.bs.carousel", function (t) {
          return i(t);
        }), H.on(this._element, "touchend.bs.carousel", function (t) {
          return n(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(Y)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(X)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(e) {
        return this._items = e && e.parentNode ? t.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var i = t === V,
            n = t === K,
            s = this._getItemIndex(e),
            o = this._items.length - 1;

        if ((n && 0 === s || i && s === o) && !this._config.wrap) return e;
        var r = (s + (n ? -1 : 1)) % this._items.length;
        return -1 === r ? this._items[this._items.length - 1] : this._items[r];
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(e, i) {
        var n = this._getItemIndex(e),
            s = this._getItemIndex(t.findOne(".active.carousel-item", this._element));

        return H.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: e,
          direction: i,
          from: s,
          to: n
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(e) {
        if (this._indicatorsElement) {
          var _i4 = t.findOne(".active", this._indicatorsElement);

          _i4.classList.remove("active"), _i4.removeAttribute("aria-current");

          var _n3 = t.find("[data-bs-target]", this._indicatorsElement);

          for (var _t3 = 0; _t3 < _n3.length; _t3++) {
            if (Number.parseInt(_n3[_t3].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
              _n3[_t3].classList.add("active"), _n3[_t3].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var e = this._activeElement || t.findOne(".active.carousel-item", this._element);
        if (!e) return;
        var i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        i ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = i) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(e, i) {
        var _this7 = this;

        var n = this._directionToOrder(e),
            s = t.findOne(".active.carousel-item", this._element),
            o = this._getItemIndex(s),
            r = i || this._getItemByOrder(n, s),
            a = this._getItemIndex(r),
            l = Boolean(this._interval),
            c = n === V,
            d = c ? "carousel-item-start" : "carousel-item-end",
            h = c ? "carousel-item-next" : "carousel-item-prev",
            u = this._orderToDirection(n);

        if (r && r.classList.contains("active")) return void (this._isSliding = !1);
        if (this._triggerSlideEvent(r, u).defaultPrevented) return;
        if (!s || !r) return;
        this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;

        var f = function f() {
          H.trigger(_this7._element, "slid.bs.carousel", {
            relatedTarget: r,
            direction: u,
            from: o,
            to: a
          });
        };

        if (this._element.classList.contains("slide")) {
          r.classList.add(h), m(r), s.classList.add(d), r.classList.add(d);

          var _t4 = function _t4() {
            r.classList.remove(d, h), r.classList.add("active"), s.classList.remove("active", h, d), _this7._isSliding = !1, setTimeout(f, 0);
          };

          this._queueCallback(_t4, s, !0);
        } else s.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, f();

        l && this.cycle();
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [Y, X].includes(t) ? _() ? t === X ? K : V : t === X ? V : K : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [V, K].includes(t) ? _() ? t === K ? X : Y : t === K ? Y : X : t;
      }
    }], [{
      key: "Default",
      get: function get() {
        return $;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }, {
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var i = w.get(t, "bs.carousel"),
            n = _objectSpread(_objectSpread({}, $), U.getDataAttributes(t));

        "object" == _typeof(e) && (n = _objectSpread(_objectSpread({}, n), e));
        var s = "string" == typeof e ? e : n.slide;
        if (i || (i = new Q(t, n)), "number" == typeof e) i.to(e);else if ("string" == typeof s) {
          if (void 0 === i[s]) throw new TypeError("No method named \"".concat(s, "\""));
          i[s]();
        } else n.interval && n.ride && (i.pause(), i.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          Q.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = s(this);
        if (!e || !e.classList.contains("carousel")) return;

        var i = _objectSpread(_objectSpread({}, U.getDataAttributes(e)), U.getDataAttributes(this)),
            n = this.getAttribute("data-bs-slide-to");

        n && (i.interval = !1), Q.carouselInterface(e, i), n && w.get(e, "bs.carousel").to(n), t.preventDefault();
      }
    }]);

    return Q;
  }(R);

  H.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Q.dataApiClickHandler), H.on(window, "load.bs.carousel.data-api", function () {
    var e = t.find('[data-bs-ride="carousel"]');

    for (var _t5 = 0, _i5 = e.length; _t5 < _i5; _t5++) {
      Q.carouselInterface(e[_t5], w.get(e[_t5], "bs.carousel"));
    }
  }), b(Q);
  var G = {
    toggle: !0,
    parent: ""
  },
      Z = {
    toggle: "boolean",
    parent: "(string|element)"
  };

  var J = /*#__PURE__*/function (_R4) {
    _inherits(J, _R4);

    var _super4 = _createSuper(J);

    function J(e, i) {
      var _this8;

      _classCallCheck(this, J);

      _this8 = _super4.call(this, e), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(i), _this8._triggerArray = t.find("[data-bs-toggle=\"collapse\"][href=\"#".concat(_this8._element.id, "\"],[data-bs-toggle=\"collapse\"][data-bs-target=\"#").concat(_this8._element.id, "\"]"));
      var s = t.find('[data-bs-toggle="collapse"]');

      for (var _e5 = 0, _i6 = s.length; _e5 < _i6; _e5++) {
        var _i7 = s[_e5],
            _o3 = n(_i7),
            _r2 = t.find(_o3).filter(function (t) {
          return t === _this8._element;
        });

        null !== _o3 && _r2.length && (_this8._selector = _o3, _this8._triggerArray.push(_i7));
      }

      _this8._parent = _this8._config.parent ? _this8._getParent() : null, _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._element, _this8._triggerArray), _this8._config.toggle && _this8.toggle();
      return _this8;
    }

    _createClass(J, [{
      key: "toggle",
      value: function toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._element.classList.contains("show")) return;
        var e, i;
        this._parent && (e = t.find(".show, .collapsing", this._parent).filter(function (t) {
          return "string" == typeof _this9._config.parent ? t.getAttribute("data-bs-parent") === _this9._config.parent : t.classList.contains("collapse");
        }), 0 === e.length && (e = null));
        var n = t.findOne(this._selector);

        if (e) {
          var _t6 = e.find(function (t) {
            return n !== t;
          });

          if (i = _t6 ? w.get(_t6, "bs.collapse") : null, i && i._isTransitioning) return;
        }

        if (H.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        e && e.forEach(function (t) {
          n !== t && J.collapseInterface(t, "hide"), i || w.set(t, "bs.collapse", null);
        });

        var s = this._getDimension();

        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
          t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
        }), this.setTransitioning(!0);
        var o = "scroll" + (s[0].toUpperCase() + s.slice(1));
        this._queueCallback(function () {
          _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse", "show"), _this9._element.style[s] = "", _this9.setTransitioning(!1), H.trigger(_this9._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[s] = this._element[o] + "px";
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._element.classList.contains("show")) return;
        if (H.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", m(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var e = this._triggerArray.length;
        if (e > 0) for (var _t7 = 0; _t7 < e; _t7++) {
          var _e6 = this._triggerArray[_t7],
              _i8 = s(_e6);

          _i8 && !_i8.classList.contains("show") && (_e6.classList.add("collapsed"), _e6.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(function () {
          _this10.setTransitioning(!1), _this10._element.classList.remove("collapsing"), _this10._element.classList.add("collapse"), H.trigger(_this10._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "setTransitioning",
      value: function setTransitioning(t) {
        this._isTransitioning = t;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, G), t)).toggle = Boolean(t.toggle), d("collapse", t, Z), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height";
      }
    }, {
      key: "_getParent",
      value: function _getParent() {
        var _this11 = this;

        var e = this._config.parent;
        e = l(e);
        var i = "[data-bs-toggle=\"collapse\"][data-bs-parent=\"".concat(e, "\"]");
        return t.find(i, e).forEach(function (t) {
          var e = s(t);

          _this11._addAriaAndCollapsedClass(e, [t]);
        }), e;
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;
        var i = t.classList.contains("show");
        e.forEach(function (t) {
          i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i);
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return G;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }, {
      key: "collapseInterface",
      value: function collapseInterface(t, e) {
        var i = w.get(t, "bs.collapse");

        var n = _objectSpread(_objectSpread(_objectSpread({}, G), U.getDataAttributes(t)), "object" == _typeof(e) && e ? e : {});

        if (!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), i || (i = new J(t, n)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          J.collapseInterface(this, t);
        });
      }
    }]);

    return J;
  }(R);

  H.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (e) {
    ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
    var i = U.getDataAttributes(this),
        s = n(this);
    t.find(s).forEach(function (t) {
      var e = w.get(t, "bs.collapse");
      var n;
      e ? (null === e._parent && "string" == typeof i.parent && (e._config.parent = i.parent, e._parent = e._getParent()), n = "toggle") : n = i, J.collapseInterface(t, n);
    });
  }), b(J);
  var tt = "top",
      et = "bottom",
      it = "right",
      nt = "left",
      st = [tt, et, it, nt],
      ot = st.reduce(function (t, e) {
    return t.concat([e + "-start", e + "-end"]);
  }, []),
      rt = [].concat(st, ["auto"]).reduce(function (t, e) {
    return t.concat([e, e + "-start", e + "-end"]);
  }, []),
      at = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function lt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function ct(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function dt(t) {
    return t instanceof ct(t).Element || t instanceof Element;
  }

  function ht(t) {
    return t instanceof ct(t).HTMLElement || t instanceof HTMLElement;
  }

  function ut(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof ct(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var ft = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
        ht(s) && lt(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
          i = {
        popper: {
          position: e.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
            return t[e] = "", t;
          }, {});
          ht(n) && lt(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function pt(t) {
    return t.split("-")[0];
  }

  function mt(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    };
  }

  function gt(t) {
    var e = mt(t),
        i = t.offsetWidth,
        n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }

  function _t(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && ut(i)) {
      var n = e;

      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function bt(t) {
    return ct(t).getComputedStyle(t);
  }

  function vt(t) {
    return ["table", "td", "th"].indexOf(lt(t)) >= 0;
  }

  function yt(t) {
    return ((dt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function wt(t) {
    return "html" === lt(t) ? t : t.assignedSlot || t.parentNode || (ut(t) ? t.host : null) || yt(t);
  }

  function Et(t) {
    return ht(t) && "fixed" !== bt(t).position ? t.offsetParent : null;
  }

  function Tt(t) {
    for (var e = ct(t), i = Et(t); i && vt(i) && "static" === bt(i).position;) {
      i = Et(i);
    }

    return i && ("html" === lt(i) || "body" === lt(i) && "static" === bt(i).position) ? e : i || function (t) {
      var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && ht(t) && "fixed" === bt(t).position) return null;

      for (var i = wt(t); ht(i) && ["html", "body"].indexOf(lt(i)) < 0;) {
        var n = bt(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function At(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  var Lt = Math.max,
      Ot = Math.min,
      kt = Math.round;

  function Ct(t, e, i) {
    return Lt(t, Ot(e, i));
  }

  function xt(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function Dt(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var Nt = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
          i = t.state,
          n = t.name,
          s = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = pt(i.placement),
          l = At(a),
          c = [nt, it].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var d = function (t, e) {
          return xt("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : Dt(t, st));
        }(s.padding, i),
            h = gt(o),
            u = "y" === l ? tt : nt,
            f = "y" === l ? et : it,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = Tt(o),
            _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            b = p / 2 - m / 2,
            v = d[u],
            y = _ - h[c] - d[f],
            w = _ / 2 - h[c] / 2 + b,
            E = Ct(v, w, y),
            T = l;

        i.modifiersData[n] = ((e = {})[T] = E, e.centerOffset = E - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && _t(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  },
      St = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function It(t) {
    var e,
        i = t.popper,
        n = t.popperRect,
        s = t.placement,
        o = t.offsets,
        r = t.position,
        a = t.gpuAcceleration,
        l = t.adaptive,
        c = t.roundOffsets,
        d = !0 === c ? function (t) {
      var e = t.x,
          i = t.y,
          n = window.devicePixelRatio || 1;
      return {
        x: kt(kt(e * n) / n) || 0,
        y: kt(kt(i * n) / n) || 0
      };
    }(o) : "function" == typeof c ? c(o) : o,
        h = d.x,
        u = void 0 === h ? 0 : h,
        f = d.y,
        p = void 0 === f ? 0 : f,
        m = o.hasOwnProperty("x"),
        g = o.hasOwnProperty("y"),
        _ = nt,
        b = tt,
        v = window;

    if (l) {
      var y = Tt(i),
          w = "clientHeight",
          E = "clientWidth";
      y === ct(i) && "static" !== bt(y = yt(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, s === tt && (b = et, p -= y[w] - n.height, p *= a ? 1 : -1), s === nt && (_ = it, u -= y[E] - n.width, u *= a ? 1 : -1);
    }

    var T,
        A = Object.assign({
      position: r
    }, l && St);
    return a ? Object.assign({}, A, ((T = {})[b] = g ? "0" : "", T[_] = m ? "0" : "", T.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)", T)) : Object.assign({}, A, ((e = {})[b] = g ? p + "px" : "", e[_] = m ? u + "px" : "", e.transform = "", e));
  }

  var jt = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = i.gpuAcceleration,
          s = void 0 === n || n,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = {
        placement: pt(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, It(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, It(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  },
      Pt = {
    passive: !0
  },
      Mt = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
          i = t.instance,
          n = t.options,
          s = n.scroll,
          o = void 0 === s || s,
          r = n.resize,
          a = void 0 === r || r,
          l = ct(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, Pt);
      }), a && l.addEventListener("resize", i.update, Pt), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, Pt);
        }), a && l.removeEventListener("resize", i.update, Pt);
      };
    },
    data: {}
  },
      Ht = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Rt(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Ht[t];
    });
  }

  var Bt = {
    start: "end",
    end: "start"
  };

  function Wt(t) {
    return t.replace(/start|end/g, function (t) {
      return Bt[t];
    });
  }

  function qt(t) {
    var e = ct(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function zt(t) {
    return mt(yt(t)).left + qt(t).scrollLeft;
  }

  function Ut(t) {
    var e = bt(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }

  function $t(t, e) {
    var i;
    void 0 === e && (e = []);

    var n = function t(e) {
      return ["html", "body", "#document"].indexOf(lt(e)) >= 0 ? e.ownerDocument.body : ht(e) && Ut(e) ? e : t(wt(e));
    }(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = ct(n),
        r = s ? [o].concat(o.visualViewport || [], Ut(n) ? n : []) : n,
        a = e.concat(r);

    return s ? a : a.concat($t(wt(r)));
  }

  function Ft(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function Vt(t, e) {
    return "viewport" === e ? Ft(function (t) {
      var e = ct(t),
          i = yt(t),
          n = e.visualViewport,
          s = i.clientWidth,
          o = i.clientHeight,
          r = 0,
          a = 0;
      return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
        width: s,
        height: o,
        x: r + zt(t),
        y: a
      };
    }(t)) : ht(e) ? function (t) {
      var e = mt(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }(e) : Ft(function (t) {
      var e,
          i = yt(t),
          n = qt(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = Lt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = Lt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + zt(t),
          l = -n.scrollTop;
      return "rtl" === bt(s || i).direction && (a += Lt(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(yt(t)));
  }

  function Kt(t) {
    return t.split("-")[1];
  }

  function Xt(t) {
    var e,
        i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? pt(s) : null,
        r = s ? Kt(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (o) {
      case tt:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;

      case et:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case it:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case nt:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;

      default:
        e = {
          x: i.x,
          y: i.y
        };
    }

    var c = o ? At(o) : null;

    if (null != c) {
      var d = "y" === c ? "height" : "width";

      switch (r) {
        case "start":
          e[c] = e[c] - (i[d] / 2 - n[d] / 2);
          break;

        case "end":
          e[c] = e[c] + (i[d] / 2 - n[d] / 2);
      }
    }

    return e;
  }

  function Yt(t, e) {
    void 0 === e && (e = {});

    var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.boundary,
        r = void 0 === o ? "clippingParents" : o,
        a = i.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        c = i.elementContext,
        d = void 0 === c ? "popper" : c,
        h = i.altBoundary,
        u = void 0 !== h && h,
        f = i.padding,
        p = void 0 === f ? 0 : f,
        m = xt("number" != typeof p ? p : Dt(p, st)),
        g = "popper" === d ? "reference" : "popper",
        _ = t.elements.reference,
        b = t.rects.popper,
        v = t.elements[u ? g : d],
        y = function (t, e, i) {
      var n = "clippingParents" === e ? function (t) {
        var e = $t(wt(t)),
            i = ["absolute", "fixed"].indexOf(bt(t).position) >= 0 && ht(t) ? Tt(t) : t;
        return dt(i) ? e.filter(function (t) {
          return dt(t) && _t(t, i) && "body" !== lt(t);
        }) : [];
      }(t) : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
        var n = Vt(t, i);
        return e.top = Lt(n.top, e.top), e.right = Ot(n.right, e.right), e.bottom = Ot(n.bottom, e.bottom), e.left = Lt(n.left, e.left), e;
      }, Vt(t, o));
      return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
    }(dt(v) ? v : v.contextElement || yt(t.elements.popper), r, l),
        w = mt(_),
        E = Xt({
      reference: w,
      element: b,
      strategy: "absolute",
      placement: s
    }),
        T = Ft(Object.assign({}, b, E)),
        A = "popper" === d ? T : w,
        L = {
      top: y.top - A.top + m.top,
      bottom: A.bottom - y.bottom + m.bottom,
      left: y.left - A.left + m.left,
      right: A.right - y.right + m.right
    },
        O = t.modifiersData.offset;

    if ("popper" === d && O) {
      var k = O[s];
      Object.keys(L).forEach(function (t) {
        var e = [it, et].indexOf(t) >= 0 ? 1 : -1,
            i = [tt, et].indexOf(t) >= 0 ? "y" : "x";
        L[t] += k[i] * e;
      });
    }

    return L;
  }

  function Qt(t, e) {
    void 0 === e && (e = {});
    var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? rt : l,
        d = Kt(n),
        h = d ? a ? ot : ot.filter(function (t) {
      return Kt(t) === d;
    }) : st,
        u = h.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === u.length && (u = h);
    var f = u.reduce(function (e, i) {
      return e[i] = Yt(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[pt(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }

  var Gt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name;

      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, d = i.boundary, h = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = pt(g), b = l || (_ !== g && p ? function (t) {
          if ("auto" === pt(t)) return [];
          var e = Rt(t);
          return [Wt(t), e, Wt(e)];
        }(g) : [Rt(g)]), v = [g].concat(b).reduce(function (t, i) {
          return t.concat("auto" === pt(i) ? Qt(e, {
            placement: i,
            boundary: d,
            rootBoundary: h,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: m
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), T = !0, A = v[0], L = 0; L < v.length; L++) {
          var O = v[L],
              k = pt(O),
              C = "start" === Kt(O),
              x = [tt, et].indexOf(k) >= 0,
              D = x ? "width" : "height",
              N = Yt(e, {
            placement: O,
            boundary: d,
            rootBoundary: h,
            altBoundary: u,
            padding: c
          }),
              S = x ? C ? it : nt : C ? et : tt;
          y[D] > w[D] && (S = Rt(S));
          var I = Rt(S),
              j = [];

          if (o && j.push(N[k] <= 0), a && j.push(N[S] <= 0, N[I] <= 0), j.every(function (t) {
            return t;
          })) {
            A = O, T = !1;
            break;
          }

          E.set(O, j);
        }

        if (T) for (var P = function P(t) {
          var e = v.find(function (e) {
            var i = E.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return A = e, "break";
        }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--) {
          ;
        }
        e.placement !== A && (e.modifiersData[n]._skip = !0, e.placement = A, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function Zt(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }

  function Jt(t) {
    return [tt, it, et, nt].some(function (e) {
      return t[e] >= 0;
    });
  }

  var te = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(t) {
      var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Yt(e, {
        elementContext: "reference"
      }),
          a = Yt(e, {
        altBoundary: !0
      }),
          l = Zt(r, n),
          c = Zt(a, s, o),
          d = Jt(l),
          h = Jt(c);
      e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: d,
        hasPopperEscaped: h
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": d,
        "data-popper-escaped": h
      });
    }
  },
      ee = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = rt.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var n = pt(t),
              s = [nt, tt].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];
          return r = r || 0, a = (a || 0) * s, [nt, it].indexOf(n) >= 0 ? {
            x: a,
            y: r
          } : {
            x: r,
            y: a
          };
        }(i, e.rects, o), t;
      }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
      null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
    }
  },
      ie = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = Xt({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  },
      ne = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          d = i.altBoundary,
          h = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = Yt(e, {
        boundary: l,
        rootBoundary: c,
        padding: h,
        altBoundary: d
      }),
          _ = pt(e.placement),
          b = Kt(e.placement),
          v = !b,
          y = At(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          T = e.rects.reference,
          A = e.rects.popper,
          L = "function" == typeof m ? m(Object.assign({}, e.rects, {
        placement: e.placement
      })) : m,
          O = {
        x: 0,
        y: 0
      };

      if (E) {
        if (o || a) {
          var k = "y" === y ? tt : nt,
              C = "y" === y ? et : it,
              x = "y" === y ? "height" : "width",
              D = E[y],
              N = E[y] + g[k],
              S = E[y] - g[C],
              I = f ? -A[x] / 2 : 0,
              j = "start" === b ? T[x] : A[x],
              P = "start" === b ? -A[x] : -T[x],
              M = e.elements.arrow,
              H = f && M ? gt(M) : {
            width: 0,
            height: 0
          },
              R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              B = R[k],
              W = R[C],
              q = Ct(0, T[x], H[x]),
              z = v ? T[x] / 2 - I - q - B - L : j - q - B - L,
              U = v ? -T[x] / 2 + I + q + W + L : P + q + W + L,
              $ = e.elements.arrow && Tt(e.elements.arrow),
              F = $ ? "y" === y ? $.clientTop || 0 : $.clientLeft || 0 : 0,
              V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
              K = E[y] + z - V - F,
              X = E[y] + U - V;

          if (o) {
            var Y = Ct(f ? Ot(N, K) : N, D, f ? Lt(S, X) : S);
            E[y] = Y, O[y] = Y - D;
          }

          if (a) {
            var Q = "x" === y ? tt : nt,
                G = "x" === y ? et : it,
                Z = E[w],
                J = Z + g[Q],
                st = Z - g[G],
                ot = Ct(f ? Ot(J, K) : J, Z, f ? Lt(st, X) : st);
            E[w] = ot, O[w] = ot - Z;
          }
        }

        e.modifiersData[n] = O;
      }
    },
    requiresIfExists: ["offset"]
  };

  function se(t, e, i) {
    void 0 === i && (i = !1);
    var n,
        s,
        o = yt(e),
        r = mt(t),
        a = ht(e),
        l = {
      scrollLeft: 0,
      scrollTop: 0
    },
        c = {
      x: 0,
      y: 0
    };
    return (a || !a && !i) && (("body" !== lt(e) || Ut(o)) && (l = (n = e) !== ct(n) && ht(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : qt(n)), ht(e) ? ((c = mt(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = zt(o))), {
      x: r.left + l.scrollLeft - c.x,
      y: r.top + l.scrollTop - c.y,
      width: r.width,
      height: r.height
    };
  }

  var oe = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function re() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function ae(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? oe : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, oe, o),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      },
          l = [],
          c = !1,
          d = {
        state: a,
        setOptions: function setOptions(i) {
          h(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = {
            reference: dt(t) ? $t(t) : t.contextElement ? $t(t.contextElement) : [],
            popper: $t(e)
          };

          var s,
              r,
              c = function (t) {
            var e = function (t) {
              var e = new Map(),
                  i = new Set(),
                  n = [];
              return t.forEach(function (t) {
                e.set(t.name, t);
              }), t.forEach(function (t) {
                i.has(t.name) || function t(s) {
                  i.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach(function (n) {
                    if (!i.has(n)) {
                      var s = e.get(n);
                      s && t(s);
                    }
                  }), n.push(s);
                }(t);
              }), n;
            }(t);

            return at.reduce(function (t, i) {
              return t.concat(e.filter(function (t) {
                return t.phase === i;
              }));
            }, []);
          }((s = [].concat(n, a.options.modifiers), r = s.reduce(function (t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e, t;
          }, {}), Object.keys(r).map(function (t) {
            return r[t];
          })));

          return a.orderedModifiers = c.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;

            if ("function" == typeof s) {
              var o = s({
                state: a,
                name: e,
                instance: d,
                options: n
              });
              l.push(o || function () {});
            }
          }), d.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                i = t.popper;

            if (re(e, i)) {
              a.rects = {
                reference: se(e, Tt(i), "fixed" === a.options.strategy),
                popper: gt(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      h = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: h,
                    instance: d
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          }
        },
        update: (s = function s() {
          return new Promise(function (t) {
            d.forceUpdate(), t(a);
          });
        }, function () {
          return r || (r = new Promise(function (t) {
            Promise.resolve().then(function () {
              r = void 0, t(s());
            });
          })), r;
        }),
        destroy: function destroy() {
          h(), c = !0;
        }
      };
      if (!re(t, e)) return d;

      function h() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return d.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), d;
    };
  }

  var le = ae(),
      ce = ae({
    defaultModifiers: [Mt, ie, jt, ft]
  }),
      de = ae({
    defaultModifiers: [Mt, ie, jt, ft, ee, Gt, ne, Nt, te]
  }),
      he = Object.freeze({
    __proto__: null,
    popperGenerator: ae,
    detectOverflow: Yt,
    createPopperBase: le,
    createPopper: de,
    createPopperLite: ce,
    top: tt,
    bottom: et,
    right: it,
    left: nt,
    auto: "auto",
    basePlacements: st,
    start: "start",
    end: "end",
    clippingParents: "clippingParents",
    viewport: "viewport",
    popper: "popper",
    reference: "reference",
    variationPlacements: ot,
    placements: rt,
    beforeRead: "beforeRead",
    read: "read",
    afterRead: "afterRead",
    beforeMain: "beforeMain",
    main: "main",
    afterMain: "afterMain",
    beforeWrite: "beforeWrite",
    write: "write",
    afterWrite: "afterWrite",
    modifierPhases: at,
    applyStyles: ft,
    arrow: Nt,
    computeStyles: jt,
    eventListeners: Mt,
    flip: Gt,
    hide: te,
    offset: ee,
    popperOffsets: ie,
    preventOverflow: ne
  });

  var ue = new RegExp("ArrowUp|ArrowDown|Escape"),
      fe = _() ? "top-end" : "top-start",
      pe = _() ? "top-start" : "top-end",
      me = _() ? "bottom-end" : "bottom-start",
      ge = _() ? "bottom-start" : "bottom-end",
      _e = _() ? "left-start" : "right-start",
      be = _() ? "right-start" : "left-start",
      ve = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
      ye = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  var we = /*#__PURE__*/function (_R5) {
    _inherits(we, _R5);

    var _super5 = _createSuper(we);

    function we(t, e) {
      var _this12;

      _classCallCheck(this, we);

      _this12 = _super5.call(this, t), _this12._popper = null, _this12._config = _this12._getConfig(e), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar(), _this12._addEventListeners();
      return _this12;
    }

    _createClass(we, [{
      key: "toggle",
      value: function toggle() {
        u(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
      }
    }, {
      key: "show",
      value: function show() {
        if (u(this._element) || this._menu.classList.contains("show")) return;
        var t = we.getParentFromElement(this._element),
            e = {
          relatedTarget: this._element
        };

        if (!H.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          var _ref3;

          if (this._inNavbar) U.setDataAttribute(this._menu, "popper", "none");else {
            if (void 0 === he) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var _e7 = this._element;
            "parent" === this._config.reference ? _e7 = t : a(this._config.reference) ? _e7 = l(this._config.reference) : "object" == _typeof(this._config.reference) && (_e7 = this._config.reference);

            var _i9 = this._getPopperConfig(),
                _n4 = _i9.modifiers.find(function (t) {
              return "applyStyles" === t.name && !1 === t.enabled;
            });

            this._popper = de(_e7, this._menu, _i9), _n4 && U.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (_ref3 = []).concat.apply(_ref3, _toConsumableArray(document.body.children)).forEach(function (t) {
            return H.on(t, "mouseover", p);
          }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), H.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (u(this._element) || !this._menu.classList.contains("show")) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(we.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this13 = this;

        H.on(this._element, "click.bs.dropdown", function (t) {
          t.preventDefault(), _this13.toggle();
        });
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        var _ref4;

        H.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
          return H.off(t, "mouseover", p);
        }), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), H.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), U.getDataAttributes(this._element)), t), d("dropdown", t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !a(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t;
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return t.next(this._element, ".dropdown-menu")[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return _e;
        if (t.classList.contains("dropstart")) return be;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? pe : fe : e ? ge : me;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this14 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this14._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(e) {
        var i = t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(h);
        if (!i.length) return;
        var n = i.indexOf(e.target);
        "ArrowUp" === e.key && n > 0 && n--, "ArrowDown" === e.key && n < i.length - 1 && n++, n = -1 === n ? 0 : n, i[n].focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return ve;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ye;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "dropdown";
      }
    }, {
      key: "dropdownInterface",
      value: function dropdownInterface(t, e) {
        var i = w.get(t, "bs.dropdown");

        if (i || (i = new we(t, "object" == _typeof(e) ? e : null)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          we.dropdownInterface(this, t);
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(e) {
        if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
        var i = t.find('[data-bs-toggle="dropdown"]');

        for (var _t8 = 0, _n5 = i.length; _t8 < _n5; _t8++) {
          var _n6 = w.get(i[_t8], "bs.dropdown");

          if (!_n6 || !1 === _n6._config.autoClose) continue;
          if (!_n6._element.classList.contains("show")) continue;
          var _s2 = {
            relatedTarget: _n6._element
          };

          if (e) {
            var _t9 = e.composedPath(),
                _i10 = _t9.includes(_n6._menu);

            if (_t9.includes(_n6._element) || "inside" === _n6._config.autoClose && !_i10 || "outside" === _n6._config.autoClose && _i10) continue;
            if (_n6._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
            "click" === e.type && (_s2.clickEvent = e);
          }

          _n6._completeHide(_s2);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return s(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(e) {
        var _this15 = this;

        if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(".dropdown-menu")) : !ue.test(e.key)) return;
        var i = this.classList.contains("show");
        if (!i && "Escape" === e.key) return;
        if (e.preventDefault(), e.stopPropagation(), u(this)) return;

        var n = function n() {
          return _this15.matches('[data-bs-toggle="dropdown"]') ? _this15 : t.prev(_this15, '[data-bs-toggle="dropdown"]')[0];
        };

        if ("Escape" === e.key) return n().focus(), void we.clearMenus();
        i || "ArrowUp" !== e.key && "ArrowDown" !== e.key ? i && "Space" !== e.key ? we.getInstance(n())._selectMenuItem(e) : we.clearMenus() : n().click();
      }
    }]);

    return we;
  }(R);

  H.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', we.dataApiKeydownHandler), H.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", we.dataApiKeydownHandler), H.on(document, "click.bs.dropdown.data-api", we.clearMenus), H.on(document, "keyup.bs.dropdown.data-api", we.clearMenus), H.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), we.dropdownInterface(this);
  }), b(we);

  var Ee = function Ee() {
    var t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  },
      Te = function Te() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Ee();
    Ae(), Le("body", "paddingRight", function (e) {
      return e + t;
    }), Le(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (e) {
      return e + t;
    }), Le(".sticky-top", "marginRight", function (e) {
      return e - t;
    });
  },
      Ae = function Ae() {
    var t = document.body.style.overflow;
    t && U.setDataAttribute(document.body, "overflow", t), document.body.style.overflow = "hidden";
  },
      Le = function Le(e, i, n) {
    var s = Ee();
    t.find(e).forEach(function (t) {
      if (t !== document.body && window.innerWidth > t.clientWidth + s) return;
      var e = t.style[i],
          o = window.getComputedStyle(t)[i];
      U.setDataAttribute(t, i, e), t.style[i] = n(Number.parseFloat(o)) + "px";
    });
  },
      Oe = function Oe() {
    ke("body", "overflow"), ke("body", "paddingRight"), ke(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), ke(".sticky-top", "marginRight");
  },
      ke = function ke(e, i) {
    t.find(e).forEach(function (t) {
      var e = U.getDataAttribute(t, i);
      void 0 === e ? t.style.removeProperty(i) : (U.removeDataAttribute(t, i), t.style[i] = e);
    });
  },
      Ce = {
    isVisible: !0,
    isAnimated: !1,
    rootElement: document.body,
    clickCallback: null
  },
      xe = {
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "element",
    clickCallback: "(function|null)"
  };

  var De = /*#__PURE__*/function () {
    function De(t) {
      _classCallCheck(this, De);

      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    _createClass(De, [{
      key: "show",
      value: function show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && m(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function () {
          v(t);
        })) : v(t);
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this16 = this;

        this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
          _this16.dispose(), v(t);
        })) : v(t);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t10 = document.createElement("div");

          _t10.className = "modal-backdrop", this._config.isAnimated && _t10.classList.add("fade"), this._element = _t10;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, Ce), "object" == _typeof(t) ? t : {})).rootElement = t.rootElement || document.body, d("backdrop", t, xe), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this17 = this;

        this._isAppended || (this._config.rootElement.appendChild(this._getElement()), H.on(this._getElement(), "mousedown.bs.backdrop", function () {
          v(_this17._config.clickCallback);
        }), this._isAppended = !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (H.off(this._element, "mousedown.bs.backdrop"), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1);
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        if (!this._config.isAnimated) return void v(t);
        var e = o(this._getElement());
        H.one(this._getElement(), "transitionend", function () {
          return v(t);
        }), c(this._getElement(), e);
      }
    }]);

    return De;
  }();

  var Ne = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      Se = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  var Ie = /*#__PURE__*/function (_R6) {
    _inherits(Ie, _R6);

    var _super6 = _createSuper(Ie);

    function Ie(e, i) {
      var _this18;

      _classCallCheck(this, Ie);

      _this18 = _super6.call(this, e), _this18._config = _this18._getConfig(i), _this18._dialog = t.findOne(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1;
      return _this18;
    }

    _createClass(Ie, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this19 = this;

        if (this._isShown || this._isTransitioning) return;
        this._isAnimated() && (this._isTransitioning = !0);
        var e = H.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        });
        this._isShown || e.defaultPrevented || (this._isShown = !0, Te(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), H.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', function (t) {
          return _this19.hide(t);
        }), H.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          H.one(_this19._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this19._element && (_this19._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this19._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this20 = this;

        if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
        if (H.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var e = this._isAnimated();

        e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), H.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), H.off(this._element, "click.dismiss.bs.modal"), H.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(function () {
          return _this20._hideModal();
        }, this._element, e);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (t) {
          return H.off(t, ".bs.modal");
        }), this._backdrop.dispose(), _get(_getPrototypeOf(Ie.prototype), "dispose", this).call(this), H.off(document, "focusin.bs.modal");
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new De({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Ne), U.getDataAttributes(this._element)), t), d("modal", t, Se), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(e) {
        var _this21 = this;

        var i = this._isAnimated(),
            n = t.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), i && m(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(function () {
          _this21._config.focus && _this21._element.focus(), _this21._isTransitioning = !1, H.trigger(_this21._element, "shown.bs.modal", {
            relatedTarget: e
          });
        }, this._dialog, i);
      }
    }, {
      key: "_enforceFocus",
      value: function _enforceFocus() {
        var _this22 = this;

        H.off(document, "focusin.bs.modal"), H.on(document, "focusin.bs.modal", function (t) {
          document === t.target || _this22._element === t.target || _this22._element.contains(t.target) || _this22._element.focus();
        });
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this23 = this;

        this._isShown ? H.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          _this23._config.keyboard && "Escape" === t.key ? (t.preventDefault(), _this23.hide()) : _this23._config.keyboard || "Escape" !== t.key || _this23._triggerBackdropTransition();
        }) : H.off(this._element, "keydown.dismiss.bs.modal");
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this24 = this;

        this._isShown ? H.on(window, "resize.bs.modal", function () {
          return _this24._adjustDialog();
        }) : H.off(window, "resize.bs.modal");
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this25 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove("modal-open"), _this25._resetAdjustments(), Oe(), H.trigger(_this25._element, "hidden.bs.modal");
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this26 = this;

        H.on(this._element, "click.dismiss.bs.modal", function (t) {
          _this26._ignoreBackdropClick ? _this26._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this26._config.backdrop ? _this26.hide() : "static" === _this26._config.backdrop && _this26._triggerBackdropTransition());
        }), this._backdrop.show(t);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this27 = this;

        if (H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
        var e = o(this._dialog);
        H.off(this._element, "transitionend"), H.one(this._element, "transitionend", function () {
          _this27._element.classList.remove("modal-static"), t || (H.one(_this27._element, "transitionend", function () {
            _this27._element.style.overflowY = "";
          }), c(_this27._element, e));
        }), c(this._element, e), this._element.focus();
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = Ee(),
            i = e > 0;
        (!i && t && !_() || i && !t && _()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !_() || !i && t && _()) && (this._element.style.paddingRight = e + "px");
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ne;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = Ie.getInstance(this) || new Ie(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }]);

    return Ie;
  }(R);

  H.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this28 = this;

    var e = s(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), H.one(e, "show.bs.modal", function (t) {
      t.defaultPrevented || H.one(e, "hidden.bs.modal", function () {
        h(_this28) && _this28.focus();
      });
    }), (Ie.getInstance(e) || new Ie(e)).toggle(this);
  }), b(Ie);
  var je = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Pe = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var Me = /*#__PURE__*/function (_R7) {
    _inherits(Me, _R7);

    var _super7 = _createSuper(Me);

    function Me(t, e) {
      var _this29;

      _classCallCheck(this, Me);

      _this29 = _super7.call(this, t), _this29._config = _this29._getConfig(e), _this29._isShown = !1, _this29._backdrop = _this29._initializeBackDrop(), _this29._addEventListeners();
      return _this29;
    }

    _createClass(Me, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this30 = this;

        this._isShown || H.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (Te(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(function () {
          H.trigger(_this30._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this31 = this;

        this._isShown && (H.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (H.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(function () {
          _this31._element.setAttribute("aria-hidden", !0), _this31._element.removeAttribute("aria-modal"), _this31._element.removeAttribute("role"), _this31._element.style.visibility = "hidden", _this31._config.scroll || Oe(), H.trigger(_this31._element, "hidden.bs.offcanvas");
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), _get(_getPrototypeOf(Me.prototype), "dispose", this).call(this), H.off(document, "focusin.bs.offcanvas");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, je), U.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), d("offcanvas", t, Pe), t;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this32 = this;

        return new De({
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this32.hide();
          }
        });
      }
    }, {
      key: "_enforceFocusOnElement",
      value: function _enforceFocusOnElement(t) {
        H.off(document, "focusin.bs.offcanvas"), H.on(document, "focusin.bs.offcanvas", function (e) {
          document === e.target || t === e.target || t.contains(e.target) || t.focus();
        }), t.focus();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this33 = this;

        H.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', function () {
          return _this33.hide();
        }), H.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          _this33._config.keyboard && "Escape" === t.key && _this33.hide();
        });
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "Default",
      get: function get() {
        return je;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.offcanvas") || new Me(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return Me;
  }(R);

  H.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (e) {
    var _this34 = this;

    var i = s(this);
    if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this)) return;
    H.one(i, "hidden.bs.offcanvas", function () {
      h(_this34) && _this34.focus();
    });
    var n = t.findOne(".offcanvas.show");
    n && n !== i && Me.getInstance(n).hide(), (w.get(i, "bs.offcanvas") || new Me(i)).toggle(this);
  }), H.on(window, "load.bs.offcanvas.data-api", function () {
    t.find(".offcanvas.show").forEach(function (t) {
      return (w.get(t, "bs.offcanvas") || new Me(t)).show();
    });
  }), b(Me);

  var He = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Re = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      Be = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      We = function We(t, e) {
    var i = t.nodeName.toLowerCase();
    if (e.includes(i)) return !He.has(i) || Boolean(Re.test(t.nodeValue) || Be.test(t.nodeValue));
    var n = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t11 = 0, _e8 = n.length; _t11 < _e8; _t11++) {
      if (n[_t11].test(i)) return !0;
    }

    return !1;
  };

  function qe(t, e, i) {
    var _ref5;

    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);

    var n = new window.DOMParser().parseFromString(t, "text/html"),
        s = Object.keys(e),
        o = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(n.body.querySelectorAll("*")));

    var _loop = function _loop(_t12, _i11) {
      var _ref6;

      var i = o[_t12],
          n = i.nodeName.toLowerCase();

      if (!s.includes(n)) {
        i.parentNode.removeChild(i);
        return "continue";
      }

      var r = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(i.attributes)),
          a = [].concat(e["*"] || [], e[n] || []);

      r.forEach(function (t) {
        We(t, a) || i.removeAttribute(t.nodeName);
      });
    };

    for (var _t12 = 0, _i11 = o.length; _t12 < _i11; _t12++) {
      var _ret = _loop(_t12, _i11);

      if (_ret === "continue") continue;
    }

    return n.body.innerHTML;
  }

  var ze = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Ue = new Set(["sanitize", "allowList", "sanitizeFn"]),
      $e = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  },
      Fe = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: _() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: _() ? "right" : "left"
  },
      Ve = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  },
      Ke = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  };

  var Xe = /*#__PURE__*/function (_R8) {
    _inherits(Xe, _R8);

    var _super8 = _createSuper(Xe);

    function Xe(t, e) {
      var _this35;

      _classCallCheck(this, Xe);

      if (void 0 === he) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this35 = _super8.call(this, t), _this35._isEnabled = !0, _this35._timeout = 0, _this35._hoverState = "", _this35._activeTrigger = {}, _this35._popper = null, _this35._config = _this35._getConfig(e), _this35.tip = null, _this35._setListeners();
      return _this35;
    }

    _createClass(Xe, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e9 = this._initializeOnDelegatedTarget(t);

          _e9._activeTrigger.click = !_e9._activeTrigger.click, _e9._isWithActiveTrigger() ? _e9._enter(null, _e9) : _e9._leave(null, _e9);
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), H.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._popper && this._popper.destroy(), _get(_getPrototypeOf(Xe.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _s$classList,
            _ref7,
            _this36 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var t = H.trigger(this._element, this.constructor.Event.SHOW),
            i = f(this._element),
            n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
        if (t.defaultPrevented || !n) return;
        var s = this.getTipElement(),
            o = e(this.constructor.NAME);
        s.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this.setContent(), this._config.animation && s.classList.add("fade");

        var r = "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement,
            a = this._getAttachment(r);

        this._addAttachmentClass(a);

        var l = this._config.container;
        w.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.appendChild(s), H.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = de(this._element, s, this._getPopperConfig(a)), s.classList.add("show");
        var c = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
        c && (_s$classList = s.classList).add.apply(_s$classList, _toConsumableArray(c.split(" "))), "ontouchstart" in document.documentElement && (_ref7 = []).concat.apply(_ref7, _toConsumableArray(document.body.children)).forEach(function (t) {
          H.on(t, "mouseover", p);
        });
        var d = this.tip.classList.contains("fade");

        this._queueCallback(function () {
          var t = _this36._hoverState;
          _this36._hoverState = null, H.trigger(_this36._element, _this36.constructor.Event.SHOWN), "out" === t && _this36._leave(null, _this36);
        }, this.tip, d);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _ref8,
            _this37 = this;

        if (!this._popper) return;
        var t = this.getTipElement();
        if (H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
        t.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (t) {
          return H.off(t, "mouseover", p);
        }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
        var e = this.tip.classList.contains("fade");
        this._queueCallback(function () {
          _this37._isWithActiveTrigger() || ("show" !== _this37._hoverState && t.parentNode && t.parentNode.removeChild(t), _this37._cleanTipClass(), _this37._element.removeAttribute("aria-describedby"), H.trigger(_this37._element, _this37.constructor.Event.HIDDEN), _this37._popper && (_this37._popper.destroy(), _this37._popper = null));
        }, this.tip, e), this._hoverState = "";
      }
    }, {
      key: "update",
      value: function update() {
        null !== this._popper && this._popper.update();
      }
    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) return this.tip;
        var t = document.createElement("div");
        return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var e = this.getTipElement();
        this.setElementContent(t.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove("fade", "show");
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return a(e) ? (e = l(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = qe(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title");

        return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t;
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        var i = this.constructor.DATA_KEY;
        return (e = e || w.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), w.set(t.delegateTarget, i, e)), e;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this38 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this38._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this39 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: function fn(t) {
              return _this39._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this39._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return Fe[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this40 = this;

        this._config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) H.on(_this40._element, _this40.constructor.Event.CLICK, _this40._config.selector, function (t) {
            return _this40.toggle(t);
          });else if ("manual" !== t) {
            var _e10 = "hover" === t ? _this40.constructor.Event.MOUSEENTER : _this40.constructor.Event.FOCUSIN,
                _i12 = "hover" === t ? _this40.constructor.Event.MOUSELEAVE : _this40.constructor.Event.FOCUSOUT;

            H.on(_this40._element, _e10, _this40._config.selector, function (t) {
              return _this40._enter(t);
            }), H.on(_this40._element, _i12, _this40._config.selector, function (t) {
              return _this40._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this40._element && _this40.hide();
        }, H.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
            e = _typeof(this._element.getAttribute("data-bs-original-title"));

        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show();
        }, e._config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide();
        }, e._config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t13 in this._activeTrigger) {
          if (this._activeTrigger[_t13]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = U.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          Ue.has(t) && delete e[t];
        }), (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), e), "object" == _typeof(t) && t ? t : {})).container = !1 === t.container ? document.body : l(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), d("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = qe(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        if (this._config) for (var _e11 in this._config) {
          this.constructor.Default[_e11] !== this._config[_e11] && (t[_e11] = this._config[_e11]);
        }
        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(ze);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ve;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Ke;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return $e;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.tooltip");
          var i = "object" == _typeof(t) && t;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Xe(this, i)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Xe;
  }(R);

  b(Xe);

  var Ye = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Qe = _objectSpread(_objectSpread({}, Xe.Default), {}, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Ge = _objectSpread(_objectSpread({}, Xe.DefaultType), {}, {
    content: "(string|element|function)"
  }),
      Ze = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  };

  var Je = /*#__PURE__*/function (_Xe) {
    _inherits(Je, _Xe);

    var _super9 = _createSuper(Je);

    function Je() {
      _classCallCheck(this, Je);

      return _super9.apply(this, arguments);
    }

    _createClass(Je, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var e = this.getTipElement();
        this.setElementContent(t.findOne(".popover-header", e), this.getTitle());

        var i = this._getContent();

        "function" == typeof i && (i = i.call(this._element)), this.setElementContent(t.findOne(".popover-body", e), i), e.classList.remove("fade", "show");
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._element.getAttribute("data-bs-content") || this._config.content;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(Ye);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return Qe;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return Ze;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ge;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.popover");
          var i = "object" == _typeof(t) ? t : null;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Je(this, i), w.set(this, "bs.popover", e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Je;
  }(Xe);

  b(Je);
  var ti = {
    offset: 10,
    method: "auto",
    target: ""
  },
      ei = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  };

  var ii = /*#__PURE__*/function (_R9) {
    _inherits(ii, _R9);

    var _super10 = _createSuper(ii);

    function ii(t, e) {
      var _this41;

      _classCallCheck(this, ii);

      _this41 = _super10.call(this, t), _this41._scrollElement = "BODY" === _this41._element.tagName ? window : _this41._element, _this41._config = _this41._getConfig(e), _this41._selector = "".concat(_this41._config.target, " .nav-link, ").concat(_this41._config.target, " .list-group-item, ").concat(_this41._config.target, " .dropdown-item"), _this41._offsets = [], _this41._targets = [], _this41._activeTarget = null, _this41._scrollHeight = 0, H.on(_this41._scrollElement, "scroll.bs.scrollspy", function () {
        return _this41._process();
      }), _this41.refresh(), _this41._process();
      return _this41;
    }

    _createClass(ii, [{
      key: "refresh",
      value: function refresh() {
        var _this42 = this;

        var e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            i = "auto" === this._config.method ? e : this._config.method,
            s = "position" === i ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.find(this._selector).map(function (e) {
          var o = n(e),
              r = o ? t.findOne(o) : null;

          if (r) {
            var _t14 = r.getBoundingClientRect();

            if (_t14.width || _t14.height) return [U[i](r).top + s, o];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this42._offsets.push(t[0]), _this42._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        H.off(this._scrollElement, ".bs.scrollspy"), _get(_getPrototypeOf(ii.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("string" != typeof (t = _objectSpread(_objectSpread(_objectSpread({}, ti), U.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {})).target && a(t.target)) {
          var _i13 = t.target.id;
          _i13 || (_i13 = e("scrollspy"), t.target.id = _i13), t.target = "#" + _i13;
        }

        return d("scrollspy", t, ei), t;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            i = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= i) {
          var _t15 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t15 && this._activate(_t15);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var _e12 = this._offsets.length; _e12--;) {
            this._activeTarget !== this._targets[_e12] && t >= this._offsets[_e12] && (void 0 === this._offsets[_e12 + 1] || t < this._offsets[_e12 + 1]) && this._activate(this._targets[_e12]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(e) {
        this._activeTarget = e, this._clear();

        var i = this._selector.split(",").map(function (t) {
          return "".concat(t, "[data-bs-target=\"").concat(e, "\"],").concat(t, "[href=\"").concat(e, "\"]");
        }),
            n = t.findOne(i.join(","));

        n.classList.contains("dropdown-item") ? (t.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), t.parents(n, ".nav, .list-group").forEach(function (e) {
          t.prev(e, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add("active");
          }), t.prev(e, ".nav-item").forEach(function (e) {
            t.children(e, ".nav-link").forEach(function (t) {
              return t.classList.add("active");
            });
          });
        })), H.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: e
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        t.find(this._selector).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return ti;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ii.getInstance(this) || new ii(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return ii;
  }(R);

  H.on(window, "load.bs.scrollspy.data-api", function () {
    t.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new ii(t);
    });
  }), b(ii);

  var ni = /*#__PURE__*/function (_R10) {
    _inherits(ni, _R10);

    var _super11 = _createSuper(ni);

    function ni() {
      _classCallCheck(this, ni);

      return _super11.apply(this, arguments);
    }

    _createClass(ni, [{
      key: "show",
      value: function show() {
        var _this43 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
        var e;

        var i = s(this._element),
            n = this._element.closest(".nav, .list-group");

        if (n) {
          var _i14 = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";

          e = t.find(_i14, n), e = e[e.length - 1];
        }

        var o = e ? H.trigger(e, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (H.trigger(this._element, "show.bs.tab", {
          relatedTarget: e
        }).defaultPrevented || null !== o && o.defaultPrevented) return;

        this._activate(this._element, n);

        var r = function r() {
          H.trigger(e, "hidden.bs.tab", {
            relatedTarget: _this43._element
          }), H.trigger(_this43._element, "shown.bs.tab", {
            relatedTarget: e
          });
        };

        i ? this._activate(i, i.parentNode, r) : r();
      }
    }, {
      key: "_activate",
      value: function _activate(e, i, n) {
        var _this44 = this;

        var s = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t.children(i, ".active") : t.find(":scope > li > .active", i))[0],
            o = n && s && s.classList.contains("fade"),
            r = function r() {
          return _this44._transitionComplete(e, s, n);
        };

        s && o ? (s.classList.remove("show"), this._queueCallback(r, e, !0)) : r();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(e, i, n) {
        if (i) {
          i.classList.remove("active");

          var _e13 = t.findOne(":scope > .dropdown-menu .active", i.parentNode);

          _e13 && _e13.classList.remove("active"), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1);
        }

        e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), m(e), e.classList.contains("fade") && e.classList.add("show");
        var s = e.parentNode;

        if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) {
          var _i15 = e.closest(".dropdown");

          _i15 && t.find(".dropdown-toggle", _i15).forEach(function (t) {
            return t.classList.add("active");
          }), e.setAttribute("aria-expanded", !0);
        }

        n && n();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.tab") || new ni(this);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return ni;
  }(R);

  H.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this) || (w.get(this, "bs.tab") || new ni(this)).show();
  }), b(ni);
  var si = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      oi = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var ri = /*#__PURE__*/function (_R11) {
    _inherits(ri, _R11);

    var _super12 = _createSuper(ri);

    function ri(t, e) {
      var _this45;

      _classCallCheck(this, ri);

      _this45 = _super12.call(this, t), _this45._config = _this45._getConfig(e), _this45._timeout = null, _this45._hasMouseInteraction = !1, _this45._hasKeyboardInteraction = !1, _this45._setListeners();
      return _this45;
    }

    _createClass(ri, [{
      key: "show",
      value: function show() {
        var _this46 = this;

        H.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), m(this._element), this._element.classList.add("showing"), this._queueCallback(function () {
          _this46._element.classList.remove("showing"), _this46._element.classList.add("show"), H.trigger(_this46._element, "shown.bs.toast"), _this46._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this47 = this;

        this._element.classList.contains("show") && (H.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(function () {
          _this47._element.classList.add("hide"), H.trigger(_this47._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), _get(_getPrototypeOf(ri.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, oi), U.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {}), d("toast", t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this48 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this48.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this49 = this;

        H.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', function () {
          return _this49.hide();
        }), H.on(this._element, "mouseover.bs.toast", function (t) {
          return _this49._onInteraction(t, !0);
        }), H.on(this._element, "mouseout.bs.toast", function (t) {
          return _this49._onInteraction(t, !1);
        }), H.on(this._element, "focusin.bs.toast", function (t) {
          return _this49._onInteraction(t, !0);
        }), H.on(this._element, "focusout.bs.toast", function (t) {
          return _this49._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "DefaultType",
      get: function get() {
        return si;
      }
    }, {
      key: "Default",
      get: function get() {
        return oi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.toast");

          if (e || (e = new ri(this, "object" == _typeof(t) && t)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return ri;
  }(R);

  return b(ri), {
    Alert: B,
    Button: W,
    Carousel: Q,
    Collapse: J,
    Dropdown: we,
    Modal: Ie,
    Offcanvas: Me,
    Popover: Je,
    ScrollSpy: ii,
    Tab: ni,
    Toast: ri,
    Tooltip: Xe
  };
});