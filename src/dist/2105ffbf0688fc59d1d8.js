function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var VanillaTilt = function () {
  'use strict';
  /**
   * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
   * Original idea: https://github.com/gijsroge/tilt.js
   * MIT License.
   * Version 1.7.0
   */

  var VanillaTilt = /*#__PURE__*/function () {
    function VanillaTilt(element) {
      var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, VanillaTilt);

      if (!(element instanceof Node)) {
        throw "Can't initialize VanillaTilt because " + element + " is not a Node.";
      }

      this.width = null;
      this.height = null;
      this.clientWidth = null;
      this.clientHeight = null;
      this.left = null;
      this.top = null; // for Gyroscope sampling

      this.gammazero = null;
      this.betazero = null;
      this.lastgammazero = null;
      this.lastbetazero = null;
      this.transitionTimeout = null;
      this.updateCall = null;
      this.event = null;
      this.updateBind = this.update.bind(this);
      this.resetBind = this.reset.bind(this);
      this.element = element;
      this.settings = this.extendSettings(settings);
      this.reverse = this.settings.reverse ? -1 : 1;
      this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
      this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
      this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
      this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
      this.gyroscopeSamples = this.settings.gyroscopeSamples;
      this.elementListener = this.getElementListener();

      if (this.glare) {
        this.prepareGlare();
      }

      if (this.fullPageListening) {
        this.updateClientSize();
      }

      this.addEventListeners();
      this.updateInitialPosition();
    }

    _createClass(VanillaTilt, [{
      key: "getElementListener",
      value:
      /**
       * Method returns element what will be listen mouse events
       * @return {Node}
       */
      function getElementListener() {
        if (this.fullPageListening) {
          return window.document;
        }

        if (typeof this.settings["mouse-event-element"] === "string") {
          var mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);

          if (mouseEventElement) {
            return mouseEventElement;
          }
        }

        if (this.settings["mouse-event-element"] instanceof Node) {
          return this.settings["mouse-event-element"];
        }

        return this.element;
      }
      /**
       * Method set listen methods for this.elementListener
       * @return {Node}
       */

    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        this.onMouseEnterBind = this.onMouseEnter.bind(this);
        this.onMouseMoveBind = this.onMouseMove.bind(this);
        this.onMouseLeaveBind = this.onMouseLeave.bind(this);
        this.onWindowResizeBind = this.onWindowResize.bind(this);
        this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);
        this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);

        if (this.glare || this.fullPageListening) {
          window.addEventListener("resize", this.onWindowResizeBind);
        }

        if (this.gyroscope) {
          window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
        }
      }
      /**
       * Method remove event listeners from current this.elementListener
       */

    }, {
      key: "removeEventListeners",
      value: function removeEventListeners() {
        this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);

        if (this.gyroscope) {
          window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
        }

        if (this.glare || this.fullPageListening) {
          window.removeEventListener("resize", this.onWindowResizeBind);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        clearTimeout(this.transitionTimeout);

        if (this.updateCall !== null) {
          cancelAnimationFrame(this.updateCall);
        }

        this.reset();
        this.removeEventListeners();
        this.element.vanillaTilt = null;
        delete this.element.vanillaTilt;
        this.element = null;
      }
    }, {
      key: "onDeviceOrientation",
      value: function onDeviceOrientation(event) {
        if (event.gamma === null || event.beta === null) {
          return;
        }

        this.updateElementPosition();

        if (this.gyroscopeSamples > 0) {
          this.lastgammazero = this.gammazero;
          this.lastbetazero = this.betazero;

          if (this.gammazero === null) {
            this.gammazero = event.gamma;
            this.betazero = event.beta;
          } else {
            this.gammazero = (event.gamma + this.lastgammazero) / 2;
            this.betazero = (event.beta + this.lastbetazero) / 2;
          }

          this.gyroscopeSamples -= 1;
        }

        var totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
        var totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;
        var degreesPerPixelX = totalAngleX / this.width;
        var degreesPerPixelY = totalAngleY / this.height;
        var angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
        var angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);
        var posX = angleX / degreesPerPixelX;
        var posY = angleY / degreesPerPixelY;

        if (this.updateCall !== null) {
          cancelAnimationFrame(this.updateCall);
        }

        this.event = {
          clientX: posX + this.left,
          clientY: posY + this.top
        };
        this.updateCall = requestAnimationFrame(this.updateBind);
      }
    }, {
      key: "onMouseEnter",
      value: function onMouseEnter() {
        this.updateElementPosition();
        this.element.style.willChange = "transform";
        this.setTransition();
      }
    }, {
      key: "onMouseMove",
      value: function onMouseMove(event) {
        if (this.updateCall !== null) {
          cancelAnimationFrame(this.updateCall);
        }

        this.event = event;
        this.updateCall = requestAnimationFrame(this.updateBind);
      }
    }, {
      key: "onMouseLeave",
      value: function onMouseLeave() {
        this.setTransition();

        if (this.settings.reset) {
          requestAnimationFrame(this.resetBind);
        }
      }
    }, {
      key: "reset",
      value: function reset() {
        this.event = {
          clientX: this.left + this.width / 2,
          clientY: this.top + this.height / 2
        };

        if (this.element && this.element.style) {
          this.element.style.transform = "perspective(".concat(this.settings.perspective, "px) ") + "rotateX(0deg) " + "rotateY(0deg) " + "scale3d(1, 1, 1)";
        }

        this.resetGlare();
      }
    }, {
      key: "resetGlare",
      value: function resetGlare() {
        if (this.glare) {
          this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
          this.glareElement.style.opacity = "0";
        }
      }
    }, {
      key: "updateInitialPosition",
      value: function updateInitialPosition() {
        if (this.settings.startX === 0 && this.settings.startY === 0) {
          return;
        }

        this.onMouseEnter();

        if (this.fullPageListening) {
          this.event = {
            clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
            clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
          };
        } else {
          this.event = {
            clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
            clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
          };
        }

        var backupScale = this.settings.scale;
        this.settings.scale = 1;
        this.update();
        this.settings.scale = backupScale;
        this.resetGlare();
      }
    }, {
      key: "getValues",
      value: function getValues() {
        var x, y;

        if (this.fullPageListening) {
          x = this.event.clientX / this.clientWidth;
          y = this.event.clientY / this.clientHeight;
        } else {
          x = (this.event.clientX - this.left) / this.width;
          y = (this.event.clientY - this.top) / this.height;
        }

        x = Math.min(Math.max(x, 0), 1);
        y = Math.min(Math.max(y, 0), 1);
        var tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
        var tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
        var angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);
        return {
          tiltX: tiltX,
          tiltY: tiltY,
          percentageX: x * 100,
          percentageY: y * 100,
          angle: angle
        };
      }
    }, {
      key: "updateElementPosition",
      value: function updateElementPosition() {
        var rect = this.element.getBoundingClientRect();
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.left = rect.left;
        this.top = rect.top;
      }
    }, {
      key: "update",
      value: function update() {
        var values = this.getValues();
        this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " + "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " + "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";

        if (this.glare) {
          this.glareElement.style.transform = "rotate(".concat(values.angle, "deg) translate(-50%, -50%)");
          this.glareElement.style.opacity = "".concat(values.percentageY * this.settings["max-glare"] / 100);
        }

        this.element.dispatchEvent(new CustomEvent("tiltChange", {
          "detail": values
        }));
        this.updateCall = null;
      }
      /**
       * Appends the glare element (if glarePrerender equals false)
       * and sets the default style
       */

    }, {
      key: "prepareGlare",
      value: function prepareGlare() {
        // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
        if (!this.glarePrerender) {
          // Create glare element
          var jsTiltGlare = document.createElement("div");
          jsTiltGlare.classList.add("js-tilt-glare");
          var jsTiltGlareInner = document.createElement("div");
          jsTiltGlareInner.classList.add("js-tilt-glare-inner");
          jsTiltGlare.appendChild(jsTiltGlareInner);
          this.element.appendChild(jsTiltGlare);
        }

        this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
        this.glareElement = this.element.querySelector(".js-tilt-glare-inner");

        if (this.glarePrerender) {
          return;
        }

        Object.assign(this.glareElementWrapper.style, {
          "position": "absolute",
          "top": "0",
          "left": "0",
          "width": "100%",
          "height": "100%",
          "overflow": "hidden",
          "pointer-events": "none"
        });
        Object.assign(this.glareElement.style, {
          "position": "absolute",
          "top": "50%",
          "left": "50%",
          "pointer-events": "none",
          "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
          "width": "".concat(this.element.offsetWidth * 2, "px"),
          "height": "".concat(this.element.offsetWidth * 2, "px"),
          "transform": "rotate(180deg) translate(-50%, -50%)",
          "transform-origin": "0% 0%",
          "opacity": "0"
        });
      }
    }, {
      key: "updateGlareSize",
      value: function updateGlareSize() {
        if (this.glare) {
          Object.assign(this.glareElement.style, {
            "width": "".concat(this.element.offsetWidth * 2),
            "height": "".concat(this.element.offsetWidth * 2)
          });
        }
      }
    }, {
      key: "updateClientSize",
      value: function updateClientSize() {
        this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      }
    }, {
      key: "onWindowResize",
      value: function onWindowResize() {
        this.updateGlareSize();
        this.updateClientSize();
      }
    }, {
      key: "setTransition",
      value: function setTransition() {
        var _this = this;

        clearTimeout(this.transitionTimeout);
        this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
        if (this.glare) this.glareElement.style.transition = "opacity ".concat(this.settings.speed, "ms ").concat(this.settings.easing);
        this.transitionTimeout = setTimeout(function () {
          _this.element.style.transition = "";

          if (_this.glare) {
            _this.glareElement.style.transition = "";
          }
        }, this.settings.speed);
      }
      /**
       * Method return patched settings of instance
       * @param {boolean} settings.reverse - reverse the tilt direction
       * @param {number} settings.max - max tilt rotation (degrees)
       * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
       * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
       * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
       * @param {string} settings.easing - Easing on enter/exit
       * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
       * @param {number} settings.speed - Speed of the enter/exit transition
       * @param {boolean} settings.transition - Set a transition on enter/exit
       * @param {string|null} settings.axis - What axis should be disabled. Can be X or Y
       * @param {boolean} settings.glare - What axis should be disabled. Can be X or Y
       * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
       * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
       * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
       * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
       * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
       * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
       * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
       * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
       */

    }, {
      key: "extendSettings",
      value: function extendSettings(settings) {
        var defaultSettings = {
          reverse: false,
          max: 15,
          startX: 0,
          startY: 0,
          perspective: 1000,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          scale: 1,
          speed: 300,
          transition: true,
          axis: null,
          glare: false,
          "max-glare": 1,
          "glare-prerender": false,
          "full-page-listening": false,
          "mouse-event-element": null,
          reset: true,
          gyroscope: true,
          gyroscopeMinAngleX: -45,
          gyroscopeMaxAngleX: 45,
          gyroscopeMinAngleY: -45,
          gyroscopeMaxAngleY: 45,
          gyroscopeSamples: 10
        };
        var newSettings = {};

        for (var property in defaultSettings) {
          if (property in settings) {
            newSettings[property] = settings[property];
          } else if (this.element.hasAttribute("data-tilt-" + property)) {
            var attribute = this.element.getAttribute("data-tilt-" + property);

            try {
              newSettings[property] = JSON.parse(attribute);
            } catch (e) {
              newSettings[property] = attribute;
            }
          } else {
            newSettings[property] = defaultSettings[property];
          }
        }

        return newSettings;
      }
    }], [{
      key: "isSettingTrue",
      value: function isSettingTrue(setting) {
        return setting === "" || setting === true || setting === 1;
      }
    }, {
      key: "init",
      value: function init(elements, settings) {
        if (elements instanceof Node) {
          elements = [elements];
        }

        if (elements instanceof NodeList) {
          elements = [].slice.call(elements);
        }

        if (!(elements instanceof Array)) {
          return;
        }

        elements.forEach(function (element) {
          if (!("vanillaTilt" in element)) {
            element.vanillaTilt = new VanillaTilt(element, settings);
          }
        });
      }
    }]);

    return VanillaTilt;
  }();

  if (typeof document !== "undefined") {
    /* expose the class to window */
    window.VanillaTilt = VanillaTilt;
    /**
     * Auto load
     */

    VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
  }

  return VanillaTilt;
}();