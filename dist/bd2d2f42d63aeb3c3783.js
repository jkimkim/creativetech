var $jscomp = $jscomp || {};
$jscomp.scope = {};

$jscomp.checkStringArgs = function (a, b, c) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
  if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
  return a + "";
};

$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
};

$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};

$jscomp.global = $jscomp.getGlobal(this);

$jscomp.polyfill = function (a, b, c, e) {
  if (b) {
    c = $jscomp.global;
    a = a.split(".");

    for (e = 0; e < a.length - 1; e++) {
      var d = a[e];
      d in c || (c[d] = {});
      c = c[d];
    }

    a = a[a.length - 1];
    e = c[a];
    b = b(e);
    b != e && null != b && $jscomp.defineProperty(c, a, {
      configurable: !0,
      writable: !0,
      value: b
    });
  }
};

$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (a, c) {
    var b = $jscomp.checkStringArgs(this, a, "startsWith");
    a += "";
    var d = b.length,
        f = a.length;
    c = Math.max(0, Math.min(c | 0, b.length));

    for (var g = 0; g < f && c < d;) {
      if (b[c++] != a[g++]) return !1;
    }

    return g >= f;
  };
}, "es6", "es3");

$jscomp.findInternal = function (a, b, c) {
  a instanceof String && (a = String(a));

  for (var e = a.length, d = 0; d < e; d++) {
    var f = a[d];
    if (b.call(c, f, d, a)) return {
      i: d,
      v: f
    };
  }

  return {
    i: -1,
    v: void 0
  };
};

$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (a, c) {
    return $jscomp.findInternal(this, a, c).v;
  };
}, "es6", "es3");

function setActiveCarouselItem(a) {
  var b = a.querySelector(".carousel-item");
  a = a.querySelector(".carousel-indicators > li");
  b.classList.add("active");
  a && a.classList.add("active");
}

function initTestimonialsCarousel(a) {
  var b = a.getAttribute("id") + "-carousel",
      c = a.getAttribute("data-bs-version") && a.getAttribute("data-bs-version").startsWith("5");
  a.querySelectorAll(".carousel").forEach(function (a) {
    return a.setAttribute("id", b);
  });
  a.querySelector(".carousel-controls") && a.querySelectorAll(".carousel-controls").forEach(function (a) {
    a.querySelectorAll("a").forEach(function (a) {
      a.setAttribute("href", "#" + b);
      c ? a.setAttribute("data-bs-target", "#" + b) : a.setAttribute("data-target", "#" + b);
    });
  });
  a.querySelectorAll(".carousel-indicators > li").forEach(function (a) {
    c ? a.setAttribute("data-bs-target", "#" + b) : a.setAttribute("data-target", "#" + b);
  });
  setActiveCarouselItem(a);
}

var $,
    isJQuery = "function" == typeof jQuery;
isJQuery && ($ = jQuery);
var isBuilder = document.querySelector("html").classList.contains("is-builder");
if (isBuilder && isJQuery) $(document).on("add.cards", function (a) {
  $(a.target).hasClass("testimonials-slider") && initTestimonialsCarousel(a.target);
}).on("changeParameter.cards", function (a, b, c) {
  "testimonialsSlides" === b && 0 == $(a.target).find(".carousel-item.active").length && setActiveCarouselItem(a.target);
});else "undefined" === typeof window.initTestimonialsPlugin && (window.initTestimonialsPlugin = !0, document.querySelectorAll(".testimonials-slider").forEach(function (a) {
  initTestimonialsCarousel(a);
}));