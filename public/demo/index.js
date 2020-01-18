(function (three) {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var Event = function Event(type) {
    _classCallCheck(this, Event);

    this.type = type;
    this.target = null;
  };

  var EventTarget = function () {
    function EventTarget() {
      _classCallCheck(this, EventTarget);

      this.listenerFunctions = new Map();
      this.listenerObjects = new Map();
    }

    _createClass(EventTarget, [{
      key: "addEventListener",
      value: function addEventListener(type, listener) {
        var m = typeof listener === "function" ? this.listenerFunctions : this.listenerObjects;

        if (m.has(type)) {
          m.get(type).add(listener);
        } else {
          m.set(type, new Set([listener]));
        }
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(type, listener) {
        var m = typeof listener === "function" ? this.listenerFunctions : this.listenerObjects;

        if (m.has(type)) {
          var listeners = m.get(type);
          listeners["delete"](listener);

          if (listeners.size === 0) {
            m["delete"](type);
          }
        }
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        var listenerFunctions = target.listenerFunctions;
        var listenerObjects = target.listenerObjects;
        var listeners, listener;
        event.target = target;

        if (listenerFunctions.has(event.type)) {
          listeners = listenerFunctions.get(event.type);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              listener = _step.value;
              listener.call(target, event);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        if (listenerObjects.has(event.type)) {
          listeners = listenerObjects.get(event.type);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = listeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              listener = _step2.value;
              listener.handleEvent(event);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }
    }]);

    return EventTarget;
  }();

  function ___$insertStyle(css) {
    if (!css) {
      return;
    }

    if (typeof window === 'undefined') {
      return;
    }

    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
  }

  function colorToString(color, forceCSSHex) {
    var colorFormat = color.__state.conversionName.toString();

    var r = Math.round(color.r);
    var g = Math.round(color.g);
    var b = Math.round(color.b);
    var a = color.a;
    var h = Math.round(color.h);
    var s = color.s.toFixed(1);
    var v = color.v.toFixed(1);

    if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
      var str = color.hex.toString(16);

      while (str.length < 6) {
        str = '0' + str;
      }

      return '#' + str;
    } else if (colorFormat === 'CSS_RGB') {
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    } else if (colorFormat === 'CSS_RGBA') {
      return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    } else if (colorFormat === 'HEX') {
      return '0x' + color.hex.toString(16);
    } else if (colorFormat === 'RGB_ARRAY') {
      return '[' + r + ',' + g + ',' + b + ']';
    } else if (colorFormat === 'RGBA_ARRAY') {
      return '[' + r + ',' + g + ',' + b + ',' + a + ']';
    } else if (colorFormat === 'RGB_OBJ') {
      return '{r:' + r + ',g:' + g + ',b:' + b + '}';
    } else if (colorFormat === 'RGBA_OBJ') {
      return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
    } else if (colorFormat === 'HSV_OBJ') {
      return '{h:' + h + ',s:' + s + ',v:' + v + '}';
    } else if (colorFormat === 'HSVA_OBJ') {
      return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
    }

    return 'unknown format';
  }

  var ARR_EACH = Array.prototype.forEach;
  var ARR_SLICE = Array.prototype.slice;
  var Common = {
    BREAK: {},
    extend: function extend(target) {
      this.each(ARR_SLICE.call(arguments, 1), function (obj) {
        var keys = this.isObject(obj) ? Object.keys(obj) : [];
        keys.forEach(function (key) {
          if (!this.isUndefined(obj[key])) {
            target[key] = obj[key];
          }
        }.bind(this));
      }, this);
      return target;
    },
    defaults: function defaults(target) {
      this.each(ARR_SLICE.call(arguments, 1), function (obj) {
        var keys = this.isObject(obj) ? Object.keys(obj) : [];
        keys.forEach(function (key) {
          if (this.isUndefined(target[key])) {
            target[key] = obj[key];
          }
        }.bind(this));
      }, this);
      return target;
    },
    compose: function compose() {
      var toCall = ARR_SLICE.call(arguments);
      return function () {
        var args = ARR_SLICE.call(arguments);

        for (var i = toCall.length - 1; i >= 0; i--) {
          args = [toCall[i].apply(this, args)];
        }

        return args[0];
      };
    },
    each: function each(obj, itr, scope) {
      if (!obj) {
        return;
      }

      if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
        obj.forEach(itr, scope);
      } else if (obj.length === obj.length + 0) {
        var key = void 0;
        var l = void 0;

        for (key = 0, l = obj.length; key < l; key++) {
          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
            return;
          }
        }
      } else {
        for (var _key in obj) {
          if (itr.call(scope, obj[_key], _key) === this.BREAK) {
            return;
          }
        }
      }
    },
    defer: function defer(fnc) {
      setTimeout(fnc, 0);
    },
    debounce: function debounce(func, threshold, callImmediately) {
      var timeout = void 0;
      return function () {
        var obj = this;
        var args = arguments;

        function delayed() {
          timeout = null;
          if (!callImmediately) func.apply(obj, args);
        }

        var callNow = callImmediately || !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(delayed, threshold);

        if (callNow) {
          func.apply(obj, args);
        }
      };
    },
    toArray: function toArray(obj) {
      if (obj.toArray) return obj.toArray();
      return ARR_SLICE.call(obj);
    },
    isUndefined: function isUndefined(obj) {
      return obj === undefined;
    },
    isNull: function isNull(obj) {
      return obj === null;
    },
    isNaN: function (_isNaN) {
      function isNaN(_x) {
        return _isNaN.apply(this, arguments);
      }

      isNaN.toString = function () {
        return _isNaN.toString();
      };

      return isNaN;
    }(function (obj) {
      return isNaN(obj);
    }),
    isArray: Array.isArray || function (obj) {
      return obj.constructor === Array;
    },
    isObject: function isObject(obj) {
      return obj === Object(obj);
    },
    isNumber: function isNumber(obj) {
      return obj === obj + 0;
    },
    isString: function isString(obj) {
      return obj === obj + '';
    },
    isBoolean: function isBoolean(obj) {
      return obj === false || obj === true;
    },
    isFunction: function isFunction(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    }
  };
  var INTERPRETATIONS = [{
    litmus: Common.isString,
    conversions: {
      THREE_CHAR_HEX: {
        read: function read(original) {
          var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);

          if (test === null) {
            return false;
          }

          return {
            space: 'HEX',
            hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
          };
        },
        write: colorToString
      },
      SIX_CHAR_HEX: {
        read: function read(original) {
          var test = original.match(/^#([A-F0-9]{6})$/i);

          if (test === null) {
            return false;
          }

          return {
            space: 'HEX',
            hex: parseInt('0x' + test[1].toString(), 0)
          };
        },
        write: colorToString
      },
      CSS_RGB: {
        read: function read(original) {
          var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);

          if (test === null) {
            return false;
          }

          return {
            space: 'RGB',
            r: parseFloat(test[1]),
            g: parseFloat(test[2]),
            b: parseFloat(test[3])
          };
        },
        write: colorToString
      },
      CSS_RGBA: {
        read: function read(original) {
          var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);

          if (test === null) {
            return false;
          }

          return {
            space: 'RGB',
            r: parseFloat(test[1]),
            g: parseFloat(test[2]),
            b: parseFloat(test[3]),
            a: parseFloat(test[4])
          };
        },
        write: colorToString
      }
    }
  }, {
    litmus: Common.isNumber,
    conversions: {
      HEX: {
        read: function read(original) {
          return {
            space: 'HEX',
            hex: original,
            conversionName: 'HEX'
          };
        },
        write: function write(color) {
          return color.hex;
        }
      }
    }
  }, {
    litmus: Common.isArray,
    conversions: {
      RGB_ARRAY: {
        read: function read(original) {
          if (original.length !== 3) {
            return false;
          }

          return {
            space: 'RGB',
            r: original[0],
            g: original[1],
            b: original[2]
          };
        },
        write: function write(color) {
          return [color.r, color.g, color.b];
        }
      },
      RGBA_ARRAY: {
        read: function read(original) {
          if (original.length !== 4) return false;
          return {
            space: 'RGB',
            r: original[0],
            g: original[1],
            b: original[2],
            a: original[3]
          };
        },
        write: function write(color) {
          return [color.r, color.g, color.b, color.a];
        }
      }
    }
  }, {
    litmus: Common.isObject,
    conversions: {
      RGBA_OBJ: {
        read: function read(original) {
          if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b) && Common.isNumber(original.a)) {
            return {
              space: 'RGB',
              r: original.r,
              g: original.g,
              b: original.b,
              a: original.a
            };
          }

          return false;
        },
        write: function write(color) {
          return {
            r: color.r,
            g: color.g,
            b: color.b,
            a: color.a
          };
        }
      },
      RGB_OBJ: {
        read: function read(original) {
          if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b)) {
            return {
              space: 'RGB',
              r: original.r,
              g: original.g,
              b: original.b
            };
          }

          return false;
        },
        write: function write(color) {
          return {
            r: color.r,
            g: color.g,
            b: color.b
          };
        }
      },
      HSVA_OBJ: {
        read: function read(original) {
          if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v) && Common.isNumber(original.a)) {
            return {
              space: 'HSV',
              h: original.h,
              s: original.s,
              v: original.v,
              a: original.a
            };
          }

          return false;
        },
        write: function write(color) {
          return {
            h: color.h,
            s: color.s,
            v: color.v,
            a: color.a
          };
        }
      },
      HSV_OBJ: {
        read: function read(original) {
          if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v)) {
            return {
              space: 'HSV',
              h: original.h,
              s: original.s,
              v: original.v
            };
          }

          return false;
        },
        write: function write(color) {
          return {
            h: color.h,
            s: color.s,
            v: color.v
          };
        }
      }
    }
  }];
  var result = void 0;
  var toReturn = void 0;

  var interpret = function interpret() {
    toReturn = false;
    var original = arguments.length > 1 ? Common.toArray(arguments) : arguments[0];
    Common.each(INTERPRETATIONS, function (family) {
      if (family.litmus(original)) {
        Common.each(family.conversions, function (conversion, conversionName) {
          result = conversion.read(original);

          if (toReturn === false && result !== false) {
            toReturn = result;
            result.conversionName = conversionName;
            result.conversion = conversion;
            return Common.BREAK;
          }
        });
        return Common.BREAK;
      }
    });
    return toReturn;
  };

  var tmpComponent = void 0;
  var ColorMath = {
    hsv_to_rgb: function hsv_to_rgb(h, s, v) {
      var hi = Math.floor(h / 60) % 6;
      var f = h / 60 - Math.floor(h / 60);
      var p = v * (1.0 - s);
      var q = v * (1.0 - f * s);
      var t = v * (1.0 - (1.0 - f) * s);
      var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
      return {
        r: c[0] * 255,
        g: c[1] * 255,
        b: c[2] * 255
      };
    },
    rgb_to_hsv: function rgb_to_hsv(r, g, b) {
      var min = Math.min(r, g, b);
      var max = Math.max(r, g, b);
      var delta = max - min;
      var h = void 0;
      var s = void 0;

      if (max !== 0) {
        s = delta / max;
      } else {
        return {
          h: NaN,
          s: 0,
          v: 0
        };
      }

      if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }

      h /= 6;

      if (h < 0) {
        h += 1;
      }

      return {
        h: h * 360,
        s: s,
        v: max / 255
      };
    },
    rgb_to_hex: function rgb_to_hex(r, g, b) {
      var hex = this.hex_with_component(0, 2, r);
      hex = this.hex_with_component(hex, 1, g);
      hex = this.hex_with_component(hex, 0, b);
      return hex;
    },
    component_from_hex: function component_from_hex(hex, componentIndex) {
      return hex >> componentIndex * 8 & 0xFF;
    },
    hex_with_component: function hex_with_component(hex, componentIndex, value) {
      return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
    }
  };

  var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
  };

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
  };

  var Color = function () {
    function Color() {
      classCallCheck(this, Color);
      this.__state = interpret.apply(this, arguments);

      if (this.__state === false) {
        throw new Error('Failed to interpret color arguments');
      }

      this.__state.a = this.__state.a || 1;
    }

    createClass(Color, [{
      key: 'toString',
      value: function toString() {
        return colorToString(this);
      }
    }, {
      key: 'toHexString',
      value: function toHexString() {
        return colorToString(this, true);
      }
    }, {
      key: 'toOriginal',
      value: function toOriginal() {
        return this.__state.conversion.write(this);
      }
    }]);
    return Color;
  }();

  function defineRGBComponent(target, component, componentHexIndex) {
    Object.defineProperty(target, component, {
      get: function get$$1() {
        if (this.__state.space === 'RGB') {
          return this.__state[component];
        }

        Color.recalculateRGB(this, component, componentHexIndex);
        return this.__state[component];
      },
      set: function set$$1(v) {
        if (this.__state.space !== 'RGB') {
          Color.recalculateRGB(this, component, componentHexIndex);
          this.__state.space = 'RGB';
        }

        this.__state[component] = v;
      }
    });
  }

  function defineHSVComponent(target, component) {
    Object.defineProperty(target, component, {
      get: function get$$1() {
        if (this.__state.space === 'HSV') {
          return this.__state[component];
        }

        Color.recalculateHSV(this);
        return this.__state[component];
      },
      set: function set$$1(v) {
        if (this.__state.space !== 'HSV') {
          Color.recalculateHSV(this);
          this.__state.space = 'HSV';
        }

        this.__state[component] = v;
      }
    });
  }

  Color.recalculateRGB = function (color, component, componentHexIndex) {
    if (color.__state.space === 'HEX') {
      color.__state[component] = ColorMath.component_from_hex(color.__state.hex, componentHexIndex);
    } else if (color.__state.space === 'HSV') {
      Common.extend(color.__state, ColorMath.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
    } else {
      throw new Error('Corrupted color state');
    }
  };

  Color.recalculateHSV = function (color) {
    var result = ColorMath.rgb_to_hsv(color.r, color.g, color.b);
    Common.extend(color.__state, {
      s: result.s,
      v: result.v
    });

    if (!Common.isNaN(result.h)) {
      color.__state.h = result.h;
    } else if (Common.isUndefined(color.__state.h)) {
      color.__state.h = 0;
    }
  };

  Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
  defineRGBComponent(Color.prototype, 'r', 2);
  defineRGBComponent(Color.prototype, 'g', 1);
  defineRGBComponent(Color.prototype, 'b', 0);
  defineHSVComponent(Color.prototype, 'h');
  defineHSVComponent(Color.prototype, 's');
  defineHSVComponent(Color.prototype, 'v');
  Object.defineProperty(Color.prototype, 'a', {
    get: function get$$1() {
      return this.__state.a;
    },
    set: function set$$1(v) {
      this.__state.a = v;
    }
  });
  Object.defineProperty(Color.prototype, 'hex', {
    get: function get$$1() {
      if (!this.__state.space !== 'HEX') {
        this.__state.hex = ColorMath.rgb_to_hex(this.r, this.g, this.b);
      }

      return this.__state.hex;
    },
    set: function set$$1(v) {
      this.__state.space = 'HEX';
      this.__state.hex = v;
    }
  });

  var Controller = function () {
    function Controller(object, property) {
      classCallCheck(this, Controller);
      this.initialValue = object[property];
      this.domElement = document.createElement('div');
      this.object = object;
      this.property = property;
      this.__onChange = undefined;
      this.__onFinishChange = undefined;
    }

    createClass(Controller, [{
      key: 'onChange',
      value: function onChange(fnc) {
        this.__onChange = fnc;
        return this;
      }
    }, {
      key: 'onFinishChange',
      value: function onFinishChange(fnc) {
        this.__onFinishChange = fnc;
        return this;
      }
    }, {
      key: 'setValue',
      value: function setValue(newValue) {
        this.object[this.property] = newValue;

        if (this.__onChange) {
          this.__onChange.call(this, newValue);
        }

        this.updateDisplay();
        return this;
      }
    }, {
      key: 'getValue',
      value: function getValue() {
        return this.object[this.property];
      }
    }, {
      key: 'updateDisplay',
      value: function updateDisplay() {
        return this;
      }
    }, {
      key: 'isModified',
      value: function isModified() {
        return this.initialValue !== this.getValue();
      }
    }]);
    return Controller;
  }();

  var EVENT_MAP = {
    HTMLEvents: ['change'],
    MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
    KeyboardEvents: ['keydown']
  };
  var EVENT_MAP_INV = {};
  Common.each(EVENT_MAP, function (v, k) {
    Common.each(v, function (e) {
      EVENT_MAP_INV[e] = k;
    });
  });
  var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;

  function cssValueToPixels(val) {
    if (val === '0' || Common.isUndefined(val)) {
      return 0;
    }

    var match = val.match(CSS_VALUE_PIXELS);

    if (!Common.isNull(match)) {
      return parseFloat(match[1]);
    }

    return 0;
  }

  var dom = {
    makeSelectable: function makeSelectable(elem, selectable) {
      if (elem === undefined || elem.style === undefined) return;
      elem.onselectstart = selectable ? function () {
        return false;
      } : function () {};
      elem.style.MozUserSelect = selectable ? 'auto' : 'none';
      elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
      elem.unselectable = selectable ? 'on' : 'off';
    },
    makeFullscreen: function makeFullscreen(elem, hor, vert) {
      var vertical = vert;
      var horizontal = hor;

      if (Common.isUndefined(horizontal)) {
        horizontal = true;
      }

      if (Common.isUndefined(vertical)) {
        vertical = true;
      }

      elem.style.position = 'absolute';

      if (horizontal) {
        elem.style.left = 0;
        elem.style.right = 0;
      }

      if (vertical) {
        elem.style.top = 0;
        elem.style.bottom = 0;
      }
    },
    fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
      var params = pars || {};
      var className = EVENT_MAP_INV[eventType];

      if (!className) {
        throw new Error('Event type ' + eventType + ' not supported.');
      }

      var evt = document.createEvent(className);

      switch (className) {
        case 'MouseEvents':
          {
            var clientX = params.x || params.clientX || 0;
            var clientY = params.y || params.clientY || 0;
            evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0, 0, clientX, clientY, false, false, false, false, 0, null);
            break;
          }

        case 'KeyboardEvents':
          {
            var init = evt.initKeyboardEvent || evt.initKeyEvent;
            Common.defaults(params, {
              cancelable: true,
              ctrlKey: false,
              altKey: false,
              shiftKey: false,
              metaKey: false,
              keyCode: undefined,
              charCode: undefined
            });
            init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
            break;
          }

        default:
          {
            evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
            break;
          }
      }

      Common.defaults(evt, aux);
      elem.dispatchEvent(evt);
    },
    bind: function bind(elem, event, func, newBool) {
      var bool = newBool || false;

      if (elem.addEventListener) {
        elem.addEventListener(event, func, bool);
      } else if (elem.attachEvent) {
        elem.attachEvent('on' + event, func);
      }

      return dom;
    },
    unbind: function unbind(elem, event, func, newBool) {
      var bool = newBool || false;

      if (elem.removeEventListener) {
        elem.removeEventListener(event, func, bool);
      } else if (elem.detachEvent) {
        elem.detachEvent('on' + event, func);
      }

      return dom;
    },
    addClass: function addClass(elem, className) {
      if (elem.className === undefined) {
        elem.className = className;
      } else if (elem.className !== className) {
        var classes = elem.className.split(/ +/);

        if (classes.indexOf(className) === -1) {
          classes.push(className);
          elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
        }
      }

      return dom;
    },
    removeClass: function removeClass(elem, className) {
      if (className) {
        if (elem.className === className) {
          elem.removeAttribute('class');
        } else {
          var classes = elem.className.split(/ +/);
          var index = classes.indexOf(className);

          if (index !== -1) {
            classes.splice(index, 1);
            elem.className = classes.join(' ');
          }
        }
      } else {
        elem.className = undefined;
      }

      return dom;
    },
    hasClass: function hasClass(elem, className) {
      return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
    },
    getWidth: function getWidth(elem) {
      var style = getComputedStyle(elem);
      return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
    },
    getHeight: function getHeight(elem) {
      var style = getComputedStyle(elem);
      return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
    },
    getOffset: function getOffset(el) {
      var elem = el;
      var offset = {
        left: 0,
        top: 0
      };

      if (elem.offsetParent) {
        do {
          offset.left += elem.offsetLeft;
          offset.top += elem.offsetTop;
          elem = elem.offsetParent;
        } while (elem);
      }

      return offset;
    },
    isActive: function isActive(elem) {
      return elem === document.activeElement && (elem.type || elem.href);
    }
  };

  var BooleanController = function (_Controller) {
    inherits(BooleanController, _Controller);

    function BooleanController(object, property) {
      classCallCheck(this, BooleanController);

      var _this2 = possibleConstructorReturn(this, (BooleanController.__proto__ || Object.getPrototypeOf(BooleanController)).call(this, object, property));

      var _this = _this2;
      _this2.__prev = _this2.getValue();
      _this2.__checkbox = document.createElement('input');

      _this2.__checkbox.setAttribute('type', 'checkbox');

      function onChange() {
        _this.setValue(!_this.__prev);
      }

      dom.bind(_this2.__checkbox, 'change', onChange, false);

      _this2.domElement.appendChild(_this2.__checkbox);

      _this2.updateDisplay();

      return _this2;
    }

    createClass(BooleanController, [{
      key: 'setValue',
      value: function setValue(v) {
        var toReturn = get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'setValue', this).call(this, v);

        if (this.__onFinishChange) {
          this.__onFinishChange.call(this, this.getValue());
        }

        this.__prev = this.getValue();
        return toReturn;
      }
    }, {
      key: 'updateDisplay',
      value: function updateDisplay() {
        if (this.getValue() === true) {
          this.__checkbox.setAttribute('checked', 'checked');

          this.__checkbox.checked = true;
          this.__prev = true;
        } else {
          this.__checkbox.checked = false;
          this.__prev = false;
        }

        return get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'updateDisplay', this).call(this);
      }
    }]);
    return BooleanController;
  }(Controller);

  var OptionController = function (_Controller) {
    inherits(OptionController, _Controller);

    function OptionController(object, property, opts) {
      classCallCheck(this, OptionController);

      var _this2 = possibleConstructorReturn(this, (OptionController.__proto__ || Object.getPrototypeOf(OptionController)).call(this, object, property));

      var options = opts;
      var _this = _this2;
      _this2.__select = document.createElement('select');

      if (Common.isArray(options)) {
        var map = {};
        Common.each(options, function (element) {
          map[element] = element;
        });
        options = map;
      }

      Common.each(options, function (value, key) {
        var opt = document.createElement('option');
        opt.innerHTML = key;
        opt.setAttribute('value', value);

        _this.__select.appendChild(opt);
      });

      _this2.updateDisplay();

      dom.bind(_this2.__select, 'change', function () {
        var desiredValue = this.options[this.selectedIndex].value;

        _this.setValue(desiredValue);
      });

      _this2.domElement.appendChild(_this2.__select);

      return _this2;
    }

    createClass(OptionController, [{
      key: 'setValue',
      value: function setValue(v) {
        var toReturn = get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'setValue', this).call(this, v);

        if (this.__onFinishChange) {
          this.__onFinishChange.call(this, this.getValue());
        }

        return toReturn;
      }
    }, {
      key: 'updateDisplay',
      value: function updateDisplay() {
        if (dom.isActive(this.__select)) return this;
        this.__select.value = this.getValue();
        return get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'updateDisplay', this).call(this);
      }
    }]);
    return OptionController;
  }(Controller);

  var StringController = function (_Controller) {
    inherits(StringController, _Controller);

    function StringController(object, property) {
      classCallCheck(this, StringController);

      var _this2 = possibleConstructorReturn(this, (StringController.__proto__ || Object.getPrototypeOf(StringController)).call(this, object, property));

      var _this = _this2;

      function onChange() {
        _this.setValue(_this.__input.value);
      }

      function onBlur() {
        if (_this.__onFinishChange) {
          _this.__onFinishChange.call(_this, _this.getValue());
        }
      }

      _this2.__input = document.createElement('input');

      _this2.__input.setAttribute('type', 'text');

      dom.bind(_this2.__input, 'keyup', onChange);
      dom.bind(_this2.__input, 'change', onChange);
      dom.bind(_this2.__input, 'blur', onBlur);
      dom.bind(_this2.__input, 'keydown', function (e) {
        if (e.keyCode === 13) {
          this.blur();
        }
      });

      _this2.updateDisplay();

      _this2.domElement.appendChild(_this2.__input);

      return _this2;
    }

    createClass(StringController, [{
      key: 'updateDisplay',
      value: function updateDisplay() {
        if (!dom.isActive(this.__input)) {
          this.__input.value = this.getValue();
        }

        return get(StringController.prototype.__proto__ || Object.getPrototypeOf(StringController.prototype), 'updateDisplay', this).call(this);
      }
    }]);
    return StringController;
  }(Controller);

  function numDecimals(x) {
    var _x = x.toString();

    if (_x.indexOf('.') > -1) {
      return _x.length - _x.indexOf('.') - 1;
    }

    return 0;
  }

  var NumberController = function (_Controller) {
    inherits(NumberController, _Controller);

    function NumberController(object, property, params) {
      classCallCheck(this, NumberController);

      var _this = possibleConstructorReturn(this, (NumberController.__proto__ || Object.getPrototypeOf(NumberController)).call(this, object, property));

      var _params = params || {};

      _this.__min = _params.min;
      _this.__max = _params.max;
      _this.__step = _params.step;

      if (Common.isUndefined(_this.__step)) {
        if (_this.initialValue === 0) {
          _this.__impliedStep = 1;
        } else {
          _this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
        }
      } else {
        _this.__impliedStep = _this.__step;
      }

      _this.__precision = numDecimals(_this.__impliedStep);
      return _this;
    }

    createClass(NumberController, [{
      key: 'setValue',
      value: function setValue(v) {
        var _v = v;

        if (this.__min !== undefined && _v < this.__min) {
          _v = this.__min;
        } else if (this.__max !== undefined && _v > this.__max) {
          _v = this.__max;
        }

        if (this.__step !== undefined && _v % this.__step !== 0) {
          _v = Math.round(_v / this.__step) * this.__step;
        }

        return get(NumberController.prototype.__proto__ || Object.getPrototypeOf(NumberController.prototype), 'setValue', this).call(this, _v);
      }
    }, {
      key: 'min',
      value: function min(minValue) {
        this.__min = minValue;
        return this;
      }
    }, {
      key: 'max',
      value: function max(maxValue) {
        this.__max = maxValue;
        return this;
      }
    }, {
      key: 'step',
      value: function step(stepValue) {
        this.__step = stepValue;
        this.__impliedStep = stepValue;
        this.__precision = numDecimals(stepValue);
        return this;
      }
    }]);
    return NumberController;
  }(Controller);

  function roundToDecimal(value, decimals) {
    var tenTo = Math.pow(10, decimals);
    return Math.round(value * tenTo) / tenTo;
  }

  var NumberControllerBox = function (_NumberController) {
    inherits(NumberControllerBox, _NumberController);

    function NumberControllerBox(object, property, params) {
      classCallCheck(this, NumberControllerBox);

      var _this2 = possibleConstructorReturn(this, (NumberControllerBox.__proto__ || Object.getPrototypeOf(NumberControllerBox)).call(this, object, property, params));

      _this2.__truncationSuspended = false;
      var _this = _this2;
      var prevY = void 0;

      function onChange() {
        var attempted = parseFloat(_this.__input.value);

        if (!Common.isNaN(attempted)) {
          _this.setValue(attempted);
        }
      }

      function onFinish() {
        if (_this.__onFinishChange) {
          _this.__onFinishChange.call(_this, _this.getValue());
        }
      }

      function onBlur() {
        onFinish();
      }

      function onMouseDrag(e) {
        var diff = prevY - e.clientY;

        _this.setValue(_this.getValue() + diff * _this.__impliedStep);

        prevY = e.clientY;
      }

      function onMouseUp() {
        dom.unbind(window, 'mousemove', onMouseDrag);
        dom.unbind(window, 'mouseup', onMouseUp);
        onFinish();
      }

      function onMouseDown(e) {
        dom.bind(window, 'mousemove', onMouseDrag);
        dom.bind(window, 'mouseup', onMouseUp);
        prevY = e.clientY;
      }

      _this2.__input = document.createElement('input');

      _this2.__input.setAttribute('type', 'text');

      dom.bind(_this2.__input, 'change', onChange);
      dom.bind(_this2.__input, 'blur', onBlur);
      dom.bind(_this2.__input, 'mousedown', onMouseDown);
      dom.bind(_this2.__input, 'keydown', function (e) {
        if (e.keyCode === 13) {
          _this.__truncationSuspended = true;
          this.blur();
          _this.__truncationSuspended = false;
          onFinish();
        }
      });

      _this2.updateDisplay();

      _this2.domElement.appendChild(_this2.__input);

      return _this2;
    }

    createClass(NumberControllerBox, [{
      key: 'updateDisplay',
      value: function updateDisplay() {
        this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
        return get(NumberControllerBox.prototype.__proto__ || Object.getPrototypeOf(NumberControllerBox.prototype), 'updateDisplay', this).call(this);
      }
    }]);
    return NumberControllerBox;
  }(NumberController);

  function map(v, i1, i2, o1, o2) {
    return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
  }

  var NumberControllerSlider = function (_NumberController) {
    inherits(NumberControllerSlider, _NumberController);

    function NumberControllerSlider(object, property, min, max, step) {
      classCallCheck(this, NumberControllerSlider);

      var _this2 = possibleConstructorReturn(this, (NumberControllerSlider.__proto__ || Object.getPrototypeOf(NumberControllerSlider)).call(this, object, property, {
        min: min,
        max: max,
        step: step
      }));

      var _this = _this2;
      _this2.__background = document.createElement('div');
      _this2.__foreground = document.createElement('div');
      dom.bind(_this2.__background, 'mousedown', onMouseDown);
      dom.bind(_this2.__background, 'touchstart', onTouchStart);
      dom.addClass(_this2.__background, 'slider');
      dom.addClass(_this2.__foreground, 'slider-fg');

      function onMouseDown(e) {
        document.activeElement.blur();
        dom.bind(window, 'mousemove', onMouseDrag);
        dom.bind(window, 'mouseup', onMouseUp);
        onMouseDrag(e);
      }

      function onMouseDrag(e) {
        e.preventDefault();

        var bgRect = _this.__background.getBoundingClientRect();

        _this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));

        return false;
      }

      function onMouseUp() {
        dom.unbind(window, 'mousemove', onMouseDrag);
        dom.unbind(window, 'mouseup', onMouseUp);

        if (_this.__onFinishChange) {
          _this.__onFinishChange.call(_this, _this.getValue());
        }
      }

      function onTouchStart(e) {
        if (e.touches.length !== 1) {
          return;
        }

        dom.bind(window, 'touchmove', onTouchMove);
        dom.bind(window, 'touchend', onTouchEnd);
        onTouchMove(e);
      }

      function onTouchMove(e) {
        var clientX = e.touches[0].clientX;

        var bgRect = _this.__background.getBoundingClientRect();

        _this.setValue(map(clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
      }

      function onTouchEnd() {
        dom.unbind(window, 'touchmove', onTouchMove);
        dom.unbind(window, 'touchend', onTouchEnd);

        if (_this.__onFinishChange) {
          _this.__onFinishChange.call(_this, _this.getValue());
        }
      }

      _this2.updateDisplay();

      _this2.__background.appendChild(_this2.__foreground);

      _this2.domElement.appendChild(_this2.__background);

      return _this2;
    }

    createClass(NumberControllerSlider, [{
      key: 'updateDisplay',
      value: function updateDisplay() {
        var pct = (this.getValue() - this.__min) / (this.__max - this.__min);

        this.__foreground.style.width = pct * 100 + '%';
        return get(NumberControllerSlider.prototype.__proto__ || Object.getPrototypeOf(NumberControllerSlider.prototype), 'updateDisplay', this).call(this);
      }
    }]);
    return NumberControllerSlider;
  }(NumberController);

  var FunctionController = function (_Controller) {
    inherits(FunctionController, _Controller);

    function FunctionController(object, property, text) {
      classCallCheck(this, FunctionController);

      var _this2 = possibleConstructorReturn(this, (FunctionController.__proto__ || Object.getPrototypeOf(FunctionController)).call(this, object, property));

      var _this = _this2;
      _this2.__button = document.createElement('div');
      _this2.__button.innerHTML = text === undefined ? 'Fire' : text;
      dom.bind(_this2.__button, 'click', function (e) {
        e.preventDefault();

        _this.fire();

        return false;
      });
      dom.addClass(_this2.__button, 'button');

      _this2.domElement.appendChild(_this2.__button);

      return _this2;
    }

    createClass(FunctionController, [{
      key: 'fire',
      value: function fire() {
        if (this.__onChange) {
          this.__onChange.call(this);
        }

        this.getValue().call(this.object);

        if (this.__onFinishChange) {
          this.__onFinishChange.call(this, this.getValue());
        }
      }
    }]);
    return FunctionController;
  }(Controller);

  var ColorController = function (_Controller) {
    inherits(ColorController, _Controller);

    function ColorController(object, property) {
      classCallCheck(this, ColorController);

      var _this2 = possibleConstructorReturn(this, (ColorController.__proto__ || Object.getPrototypeOf(ColorController)).call(this, object, property));

      _this2.__color = new Color(_this2.getValue());
      _this2.__temp = new Color(0);
      var _this = _this2;
      _this2.domElement = document.createElement('div');
      dom.makeSelectable(_this2.domElement, false);
      _this2.__selector = document.createElement('div');
      _this2.__selector.className = 'selector';
      _this2.__saturation_field = document.createElement('div');
      _this2.__saturation_field.className = 'saturation-field';
      _this2.__field_knob = document.createElement('div');
      _this2.__field_knob.className = 'field-knob';
      _this2.__field_knob_border = '2px solid ';
      _this2.__hue_knob = document.createElement('div');
      _this2.__hue_knob.className = 'hue-knob';
      _this2.__hue_field = document.createElement('div');
      _this2.__hue_field.className = 'hue-field';
      _this2.__input = document.createElement('input');
      _this2.__input.type = 'text';
      _this2.__input_textShadow = '0 1px 1px ';
      dom.bind(_this2.__input, 'keydown', function (e) {
        if (e.keyCode === 13) {
          onBlur.call(this);
        }
      });
      dom.bind(_this2.__input, 'blur', onBlur);
      dom.bind(_this2.__selector, 'mousedown', function () {
        dom.addClass(this, 'drag').bind(window, 'mouseup', function () {
          dom.removeClass(_this.__selector, 'drag');
        });
      });
      dom.bind(_this2.__selector, 'touchstart', function () {
        dom.addClass(this, 'drag').bind(window, 'touchend', function () {
          dom.removeClass(_this.__selector, 'drag');
        });
      });
      var valueField = document.createElement('div');
      Common.extend(_this2.__selector.style, {
        width: '122px',
        height: '102px',
        padding: '3px',
        backgroundColor: '#222',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
      });
      Common.extend(_this2.__field_knob.style, {
        position: 'absolute',
        width: '12px',
        height: '12px',
        border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
        boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
        borderRadius: '12px',
        zIndex: 1
      });
      Common.extend(_this2.__hue_knob.style, {
        position: 'absolute',
        width: '15px',
        height: '2px',
        borderRight: '4px solid #fff',
        zIndex: 1
      });
      Common.extend(_this2.__saturation_field.style, {
        width: '100px',
        height: '100px',
        border: '1px solid #555',
        marginRight: '3px',
        display: 'inline-block',
        cursor: 'pointer'
      });
      Common.extend(valueField.style, {
        width: '100%',
        height: '100%',
        background: 'none'
      });
      linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');
      Common.extend(_this2.__hue_field.style, {
        width: '15px',
        height: '100px',
        border: '1px solid #555',
        cursor: 'ns-resize',
        position: 'absolute',
        top: '3px',
        right: '3px'
      });
      hueGradient(_this2.__hue_field);
      Common.extend(_this2.__input.style, {
        outline: 'none',
        textAlign: 'center',
        color: '#fff',
        border: 0,
        fontWeight: 'bold',
        textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
      });
      dom.bind(_this2.__saturation_field, 'mousedown', fieldDown);
      dom.bind(_this2.__saturation_field, 'touchstart', fieldDown);
      dom.bind(_this2.__field_knob, 'mousedown', fieldDown);
      dom.bind(_this2.__field_knob, 'touchstart', fieldDown);
      dom.bind(_this2.__hue_field, 'mousedown', fieldDownH);
      dom.bind(_this2.__hue_field, 'touchstart', fieldDownH);

      function fieldDown(e) {
        setSV(e);
        dom.bind(window, 'mousemove', setSV);
        dom.bind(window, 'touchmove', setSV);
        dom.bind(window, 'mouseup', fieldUpSV);
        dom.bind(window, 'touchend', fieldUpSV);
      }

      function fieldDownH(e) {
        setH(e);
        dom.bind(window, 'mousemove', setH);
        dom.bind(window, 'touchmove', setH);
        dom.bind(window, 'mouseup', fieldUpH);
        dom.bind(window, 'touchend', fieldUpH);
      }

      function fieldUpSV() {
        dom.unbind(window, 'mousemove', setSV);
        dom.unbind(window, 'touchmove', setSV);
        dom.unbind(window, 'mouseup', fieldUpSV);
        dom.unbind(window, 'touchend', fieldUpSV);
        onFinish();
      }

      function fieldUpH() {
        dom.unbind(window, 'mousemove', setH);
        dom.unbind(window, 'touchmove', setH);
        dom.unbind(window, 'mouseup', fieldUpH);
        dom.unbind(window, 'touchend', fieldUpH);
        onFinish();
      }

      function onBlur() {
        var i = interpret(this.value);

        if (i !== false) {
          _this.__color.__state = i;

          _this.setValue(_this.__color.toOriginal());
        } else {
          this.value = _this.__color.toString();
        }
      }

      function onFinish() {
        if (_this.__onFinishChange) {
          _this.__onFinishChange.call(_this, _this.__color.toOriginal());
        }
      }

      _this2.__saturation_field.appendChild(valueField);

      _this2.__selector.appendChild(_this2.__field_knob);

      _this2.__selector.appendChild(_this2.__saturation_field);

      _this2.__selector.appendChild(_this2.__hue_field);

      _this2.__hue_field.appendChild(_this2.__hue_knob);

      _this2.domElement.appendChild(_this2.__input);

      _this2.domElement.appendChild(_this2.__selector);

      _this2.updateDisplay();

      function setSV(e) {
        if (e.type.indexOf('touch') === -1) {
          e.preventDefault();
        }

        var fieldRect = _this.__saturation_field.getBoundingClientRect();

        var _ref = e.touches && e.touches[0] || e,
            clientX = _ref.clientX,
            clientY = _ref.clientY;

        var s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
        var v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);

        if (v > 1) {
          v = 1;
        } else if (v < 0) {
          v = 0;
        }

        if (s > 1) {
          s = 1;
        } else if (s < 0) {
          s = 0;
        }

        _this.__color.v = v;
        _this.__color.s = s;

        _this.setValue(_this.__color.toOriginal());

        return false;
      }

      function setH(e) {
        if (e.type.indexOf('touch') === -1) {
          e.preventDefault();
        }

        var fieldRect = _this.__hue_field.getBoundingClientRect();

        var _ref2 = e.touches && e.touches[0] || e,
            clientY = _ref2.clientY;

        var h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);

        if (h > 1) {
          h = 1;
        } else if (h < 0) {
          h = 0;
        }

        _this.__color.h = h * 360;

        _this.setValue(_this.__color.toOriginal());

        return false;
      }

      return _this2;
    }

    createClass(ColorController, [{
      key: 'updateDisplay',
      value: function updateDisplay() {
        var i = interpret(this.getValue());

        if (i !== false) {
          var mismatch = false;
          Common.each(Color.COMPONENTS, function (component) {
            if (!Common.isUndefined(i[component]) && !Common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
              mismatch = true;
              return {};
            }
          }, this);

          if (mismatch) {
            Common.extend(this.__color.__state, i);
          }
        }

        Common.extend(this.__temp.__state, this.__color.__state);
        this.__temp.a = 1;
        var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;

        var _flip = 255 - flip;

        Common.extend(this.__field_knob.style, {
          marginLeft: 100 * this.__color.s - 7 + 'px',
          marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
          backgroundColor: this.__temp.toHexString(),
          border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
        });
        this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
        this.__temp.s = 1;
        this.__temp.v = 1;
        linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());
        this.__input.value = this.__color.toString();
        Common.extend(this.__input.style, {
          backgroundColor: this.__color.toHexString(),
          color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
          textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
        });
      }
    }]);
    return ColorController;
  }(Controller);

  var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];

  function linearGradient(elem, x, a, b) {
    elem.style.background = '';
    Common.each(vendors, function (vendor) {
      elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
    });
  }

  function hueGradient(elem) {
    elem.style.background = '';
    elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
    elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
    elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
    elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
    elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  }

  var css = {
    load: function load(url, indoc) {
      var doc = indoc || document;
      var link = doc.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      doc.getElementsByTagName('head')[0].appendChild(link);
    },
    inject: function inject(cssContent, indoc) {
      var doc = indoc || document;
      var injected = document.createElement('style');
      injected.type = 'text/css';
      injected.innerHTML = cssContent;
      var head = doc.getElementsByTagName('head')[0];

      try {
        head.appendChild(injected);
      } catch (e) {}
    }
  };
  var saveDialogContents = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

  var ControllerFactory = function ControllerFactory(object, property) {
    var initialValue = object[property];

    if (Common.isArray(arguments[2]) || Common.isObject(arguments[2])) {
      return new OptionController(object, property, arguments[2]);
    }

    if (Common.isNumber(initialValue)) {
      if (Common.isNumber(arguments[2]) && Common.isNumber(arguments[3])) {
        if (Common.isNumber(arguments[4])) {
          return new NumberControllerSlider(object, property, arguments[2], arguments[3], arguments[4]);
        }

        return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
      }

      if (Common.isNumber(arguments[4])) {
        return new NumberControllerBox(object, property, {
          min: arguments[2],
          max: arguments[3],
          step: arguments[4]
        });
      }

      return new NumberControllerBox(object, property, {
        min: arguments[2],
        max: arguments[3]
      });
    }

    if (Common.isString(initialValue)) {
      return new StringController(object, property);
    }

    if (Common.isFunction(initialValue)) {
      return new FunctionController(object, property, '');
    }

    if (Common.isBoolean(initialValue)) {
      return new BooleanController(object, property);
    }

    return null;
  };

  function requestAnimationFrame$1(callback) {
    setTimeout(callback, 1000 / 60);
  }

  var requestAnimationFrame$1$1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame$1;

  var CenteredDiv = function () {
    function CenteredDiv() {
      classCallCheck(this, CenteredDiv);
      this.backgroundElement = document.createElement('div');
      Common.extend(this.backgroundElement.style, {
        backgroundColor: 'rgba(0,0,0,0.8)',
        top: 0,
        left: 0,
        display: 'none',
        zIndex: '1000',
        opacity: 0,
        WebkitTransition: 'opacity 0.2s linear',
        transition: 'opacity 0.2s linear'
      });
      dom.makeFullscreen(this.backgroundElement);
      this.backgroundElement.style.position = 'fixed';
      this.domElement = document.createElement('div');
      Common.extend(this.domElement.style, {
        position: 'fixed',
        display: 'none',
        zIndex: '1001',
        opacity: 0,
        WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
        transition: 'transform 0.2s ease-out, opacity 0.2s linear'
      });
      document.body.appendChild(this.backgroundElement);
      document.body.appendChild(this.domElement);

      var _this = this;

      dom.bind(this.backgroundElement, 'click', function () {
        _this.hide();
      });
    }

    createClass(CenteredDiv, [{
      key: 'show',
      value: function show() {
        var _this = this;

        this.backgroundElement.style.display = 'block';
        this.domElement.style.display = 'block';
        this.domElement.style.opacity = 0;
        this.domElement.style.webkitTransform = 'scale(1.1)';
        this.layout();
        Common.defer(function () {
          _this.backgroundElement.style.opacity = 1;
          _this.domElement.style.opacity = 1;
          _this.domElement.style.webkitTransform = 'scale(1)';
        });
      }
    }, {
      key: 'hide',
      value: function hide() {
        var _this = this;

        var hide = function hide() {
          _this.domElement.style.display = 'none';
          _this.backgroundElement.style.display = 'none';
          dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
          dom.unbind(_this.domElement, 'transitionend', hide);
          dom.unbind(_this.domElement, 'oTransitionEnd', hide);
        };

        dom.bind(this.domElement, 'webkitTransitionEnd', hide);
        dom.bind(this.domElement, 'transitionend', hide);
        dom.bind(this.domElement, 'oTransitionEnd', hide);
        this.backgroundElement.style.opacity = 0;
        this.domElement.style.opacity = 0;
        this.domElement.style.webkitTransform = 'scale(1.1)';
      }
    }, {
      key: 'layout',
      value: function layout() {
        this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
        this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
      }
    }]);
    return CenteredDiv;
  }();

  var styleSheet = ___$insertStyle(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");

  css.inject(styleSheet);
  var CSS_NAMESPACE = 'dg';
  var HIDE_KEY_CODE = 72;
  var CLOSE_BUTTON_HEIGHT = 20;
  var DEFAULT_DEFAULT_PRESET_NAME = 'Default';

  var SUPPORTS_LOCAL_STORAGE = function () {
    try {
      return !!window.localStorage;
    } catch (e) {
      return false;
    }
  }();

  var SAVE_DIALOGUE = void 0;
  var autoPlaceVirgin = true;
  var autoPlaceContainer = void 0;
  var hide = false;
  var hideableGuis = [];

  var GUI = function GUI(pars) {
    var _this = this;

    var params = pars || {};
    this.domElement = document.createElement('div');
    this.__ul = document.createElement('ul');
    this.domElement.appendChild(this.__ul);
    dom.addClass(this.domElement, CSS_NAMESPACE);
    this.__folders = {};
    this.__controllers = [];
    this.__rememberedObjects = [];
    this.__rememberedObjectIndecesToControllers = [];
    this.__listening = [];
    params = Common.defaults(params, {
      closeOnTop: false,
      autoPlace: true,
      width: GUI.DEFAULT_WIDTH
    });
    params = Common.defaults(params, {
      resizable: params.autoPlace,
      hideable: params.autoPlace
    });

    if (!Common.isUndefined(params.load)) {
      if (params.preset) {
        params.load.preset = params.preset;
      }
    } else {
      params.load = {
        preset: DEFAULT_DEFAULT_PRESET_NAME
      };
    }

    if (Common.isUndefined(params.parent) && params.hideable) {
      hideableGuis.push(this);
    }

    params.resizable = Common.isUndefined(params.parent) && params.resizable;

    if (params.autoPlace && Common.isUndefined(params.scrollable)) {
      params.scrollable = true;
    }

    var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
    var saveToLocalStorage = void 0;
    var titleRow = void 0;
    Object.defineProperties(this, {
      parent: {
        get: function get$$1() {
          return params.parent;
        }
      },
      scrollable: {
        get: function get$$1() {
          return params.scrollable;
        }
      },
      autoPlace: {
        get: function get$$1() {
          return params.autoPlace;
        }
      },
      closeOnTop: {
        get: function get$$1() {
          return params.closeOnTop;
        }
      },
      preset: {
        get: function get$$1() {
          if (_this.parent) {
            return _this.getRoot().preset;
          }

          return params.load.preset;
        },
        set: function set$$1(v) {
          if (_this.parent) {
            _this.getRoot().preset = v;
          } else {
            params.load.preset = v;
          }

          setPresetSelectIndex(this);

          _this.revert();
        }
      },
      width: {
        get: function get$$1() {
          return params.width;
        },
        set: function set$$1(v) {
          params.width = v;
          setWidth(_this, v);
        }
      },
      name: {
        get: function get$$1() {
          return params.name;
        },
        set: function set$$1(v) {
          params.name = v;

          if (titleRow) {
            titleRow.innerHTML = params.name;
          }
        }
      },
      closed: {
        get: function get$$1() {
          return params.closed;
        },
        set: function set$$1(v) {
          params.closed = v;

          if (params.closed) {
            dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
          } else {
            dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
          }

          this.onResize();

          if (_this.__closeButton) {
            _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
          }
        }
      },
      load: {
        get: function get$$1() {
          return params.load;
        }
      },
      useLocalStorage: {
        get: function get$$1() {
          return useLocalStorage;
        },
        set: function set$$1(bool) {
          if (SUPPORTS_LOCAL_STORAGE) {
            useLocalStorage = bool;

            if (bool) {
              dom.bind(window, 'unload', saveToLocalStorage);
            } else {
              dom.unbind(window, 'unload', saveToLocalStorage);
            }

            localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
          }
        }
      }
    });

    if (Common.isUndefined(params.parent)) {
      this.closed = params.closed || false;
      dom.addClass(this.domElement, GUI.CLASS_MAIN);
      dom.makeSelectable(this.domElement, false);

      if (SUPPORTS_LOCAL_STORAGE) {
        if (useLocalStorage) {
          _this.useLocalStorage = true;
          var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));

          if (savedGui) {
            params.load = JSON.parse(savedGui);
          }
        }
      }

      this.__closeButton = document.createElement('div');
      this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);

      if (params.closeOnTop) {
        dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
        this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
      } else {
        dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
        this.domElement.appendChild(this.__closeButton);
      }

      dom.bind(this.__closeButton, 'click', function () {
        _this.closed = !_this.closed;
      });
    } else {
      if (params.closed === undefined) {
        params.closed = true;
      }

      var titleRowName = document.createTextNode(params.name);
      dom.addClass(titleRowName, 'controller-name');
      titleRow = addRow(_this, titleRowName);

      var onClickTitle = function onClickTitle(e) {
        e.preventDefault();
        _this.closed = !_this.closed;
        return false;
      };

      dom.addClass(this.__ul, GUI.CLASS_CLOSED);
      dom.addClass(titleRow, 'title');
      dom.bind(titleRow, 'click', onClickTitle);

      if (!params.closed) {
        this.closed = false;
      }
    }

    if (params.autoPlace) {
      if (Common.isUndefined(params.parent)) {
        if (autoPlaceVirgin) {
          autoPlaceContainer = document.createElement('div');
          dom.addClass(autoPlaceContainer, CSS_NAMESPACE);
          dom.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
          document.body.appendChild(autoPlaceContainer);
          autoPlaceVirgin = false;
        }

        autoPlaceContainer.appendChild(this.domElement);
        dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
      }

      if (!this.parent) {
        setWidth(_this, params.width);
      }
    }

    this.__resizeHandler = function () {
      _this.onResizeDebounced();
    };

    dom.bind(window, 'resize', this.__resizeHandler);
    dom.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
    dom.bind(this.__ul, 'transitionend', this.__resizeHandler);
    dom.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
    this.onResize();

    if (params.resizable) {
      addResizeHandle(this);
    }

    saveToLocalStorage = function saveToLocalStorage() {
      if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
        localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
      }
    };

    this.saveToLocalStorageIfPossible = saveToLocalStorage;

    function resetWidth() {
      var root = _this.getRoot();

      root.width += 1;
      Common.defer(function () {
        root.width -= 1;
      });
    }

    if (!params.parent) {
      resetWidth();
    }
  };

  GUI.toggleHide = function () {
    hide = !hide;
    Common.each(hideableGuis, function (gui) {
      gui.domElement.style.display = hide ? 'none' : '';
    });
  };

  GUI.CLASS_AUTO_PLACE = 'a';
  GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
  GUI.CLASS_MAIN = 'main';
  GUI.CLASS_CONTROLLER_ROW = 'cr';
  GUI.CLASS_TOO_TALL = 'taller-than-window';
  GUI.CLASS_CLOSED = 'closed';
  GUI.CLASS_CLOSE_BUTTON = 'close-button';
  GUI.CLASS_CLOSE_TOP = 'close-top';
  GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
  GUI.CLASS_DRAG = 'drag';
  GUI.DEFAULT_WIDTH = 245;
  GUI.TEXT_CLOSED = 'Close Controls';
  GUI.TEXT_OPEN = 'Open Controls';

  GUI._keydownHandler = function (e) {
    if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
      GUI.toggleHide();
    }
  };

  dom.bind(window, 'keydown', GUI._keydownHandler, false);
  Common.extend(GUI.prototype, {
    add: function add(object, property) {
      return _add(this, object, property, {
        factoryArgs: Array.prototype.slice.call(arguments, 2)
      });
    },
    addColor: function addColor(object, property) {
      return _add(this, object, property, {
        color: true
      });
    },
    remove: function remove(controller) {
      this.__ul.removeChild(controller.__li);

      this.__controllers.splice(this.__controllers.indexOf(controller), 1);

      var _this = this;

      Common.defer(function () {
        _this.onResize();
      });
    },
    destroy: function destroy() {
      if (this.parent) {
        throw new Error('Only the root GUI should be removed with .destroy(). ' + 'For subfolders, use gui.removeFolder(folder) instead.');
      }

      if (this.autoPlace) {
        autoPlaceContainer.removeChild(this.domElement);
      }

      var _this = this;

      Common.each(this.__folders, function (subfolder) {
        _this.removeFolder(subfolder);
      });
      dom.unbind(window, 'keydown', GUI._keydownHandler, false);
      removeListeners(this);
    },
    addFolder: function addFolder(name) {
      if (this.__folders[name] !== undefined) {
        throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
      }

      var newGuiParams = {
        name: name,
        parent: this
      };
      newGuiParams.autoPlace = this.autoPlace;

      if (this.load && this.load.folders && this.load.folders[name]) {
        newGuiParams.closed = this.load.folders[name].closed;
        newGuiParams.load = this.load.folders[name];
      }

      var gui = new GUI(newGuiParams);
      this.__folders[name] = gui;
      var li = addRow(this, gui.domElement);
      dom.addClass(li, 'folder');
      return gui;
    },
    removeFolder: function removeFolder(folder) {
      this.__ul.removeChild(folder.domElement.parentElement);

      delete this.__folders[folder.name];

      if (this.load && this.load.folders && this.load.folders[folder.name]) {
        delete this.load.folders[folder.name];
      }

      removeListeners(folder);

      var _this = this;

      Common.each(folder.__folders, function (subfolder) {
        folder.removeFolder(subfolder);
      });
      Common.defer(function () {
        _this.onResize();
      });
    },
    open: function open() {
      this.closed = false;
    },
    close: function close() {
      this.closed = true;
    },
    hide: function hide() {
      this.domElement.style.display = 'none';
    },
    show: function show() {
      this.domElement.style.display = '';
    },
    onResize: function onResize() {
      var root = this.getRoot();

      if (root.scrollable) {
        var top = dom.getOffset(root.__ul).top;
        var h = 0;
        Common.each(root.__ul.childNodes, function (node) {
          if (!(root.autoPlace && node === root.__save_row)) {
            h += dom.getHeight(node);
          }
        });

        if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
          dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
          root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
        } else {
          dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
          root.__ul.style.height = 'auto';
        }
      }

      if (root.__resize_handle) {
        Common.defer(function () {
          root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
        });
      }

      if (root.__closeButton) {
        root.__closeButton.style.width = root.width + 'px';
      }
    },
    onResizeDebounced: Common.debounce(function () {
      this.onResize();
    }, 50),
    remember: function remember() {
      if (Common.isUndefined(SAVE_DIALOGUE)) {
        SAVE_DIALOGUE = new CenteredDiv();
        SAVE_DIALOGUE.domElement.innerHTML = saveDialogContents;
      }

      if (this.parent) {
        throw new Error('You can only call remember on a top level GUI.');
      }

      var _this = this;

      Common.each(Array.prototype.slice.call(arguments), function (object) {
        if (_this.__rememberedObjects.length === 0) {
          addSaveMenu(_this);
        }

        if (_this.__rememberedObjects.indexOf(object) === -1) {
          _this.__rememberedObjects.push(object);
        }
      });

      if (this.autoPlace) {
        setWidth(this, this.width);
      }
    },
    getRoot: function getRoot() {
      var gui = this;

      while (gui.parent) {
        gui = gui.parent;
      }

      return gui;
    },
    getSaveObject: function getSaveObject() {
      var toReturn = this.load;
      toReturn.closed = this.closed;

      if (this.__rememberedObjects.length > 0) {
        toReturn.preset = this.preset;

        if (!toReturn.remembered) {
          toReturn.remembered = {};
        }

        toReturn.remembered[this.preset] = getCurrentPreset(this);
      }

      toReturn.folders = {};
      Common.each(this.__folders, function (element, key) {
        toReturn.folders[key] = element.getSaveObject();
      });
      return toReturn;
    },
    save: function save() {
      if (!this.load.remembered) {
        this.load.remembered = {};
      }

      this.load.remembered[this.preset] = getCurrentPreset(this);
      markPresetModified(this, false);
      this.saveToLocalStorageIfPossible();
    },
    saveAs: function saveAs(presetName) {
      if (!this.load.remembered) {
        this.load.remembered = {};
        this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
      }

      this.load.remembered[presetName] = getCurrentPreset(this);
      this.preset = presetName;
      addPresetOption(this, presetName, true);
      this.saveToLocalStorageIfPossible();
    },
    revert: function revert(gui) {
      Common.each(this.__controllers, function (controller) {
        if (!this.getRoot().load.remembered) {
          controller.setValue(controller.initialValue);
        } else {
          recallSavedValue(gui || this.getRoot(), controller);
        }

        if (controller.__onFinishChange) {
          controller.__onFinishChange.call(controller, controller.getValue());
        }
      }, this);
      Common.each(this.__folders, function (folder) {
        folder.revert(folder);
      });

      if (!gui) {
        markPresetModified(this.getRoot(), false);
      }
    },
    listen: function listen(controller) {
      var init = this.__listening.length === 0;

      this.__listening.push(controller);

      if (init) {
        updateDisplays(this.__listening);
      }
    },
    updateDisplay: function updateDisplay() {
      Common.each(this.__controllers, function (controller) {
        controller.updateDisplay();
      });
      Common.each(this.__folders, function (folder) {
        folder.updateDisplay();
      });
    }
  });

  function addRow(gui, newDom, liBefore) {
    var li = document.createElement('li');

    if (newDom) {
      li.appendChild(newDom);
    }

    if (liBefore) {
      gui.__ul.insertBefore(li, liBefore);
    } else {
      gui.__ul.appendChild(li);
    }

    gui.onResize();
    return li;
  }

  function removeListeners(gui) {
    dom.unbind(window, 'resize', gui.__resizeHandler);

    if (gui.saveToLocalStorageIfPossible) {
      dom.unbind(window, 'unload', gui.saveToLocalStorageIfPossible);
    }
  }

  function markPresetModified(gui, modified) {
    var opt = gui.__preset_select[gui.__preset_select.selectedIndex];

    if (modified) {
      opt.innerHTML = opt.value + '*';
    } else {
      opt.innerHTML = opt.value;
    }
  }

  function augmentController(gui, li, controller) {
    controller.__li = li;
    controller.__gui = gui;
    Common.extend(controller, {
      options: function options(_options) {
        if (arguments.length > 1) {
          var nextSibling = controller.__li.nextElementSibling;
          controller.remove();
          return _add(gui, controller.object, controller.property, {
            before: nextSibling,
            factoryArgs: [Common.toArray(arguments)]
          });
        }

        if (Common.isArray(_options) || Common.isObject(_options)) {
          var _nextSibling = controller.__li.nextElementSibling;
          controller.remove();
          return _add(gui, controller.object, controller.property, {
            before: _nextSibling,
            factoryArgs: [_options]
          });
        }
      },
      name: function name(_name) {
        controller.__li.firstElementChild.firstElementChild.innerHTML = _name;
        return controller;
      },
      listen: function listen() {
        controller.__gui.listen(controller);

        return controller;
      },
      remove: function remove() {
        controller.__gui.remove(controller);

        return controller;
      }
    });

    if (controller instanceof NumberControllerSlider) {
      var box = new NumberControllerBox(controller.object, controller.property, {
        min: controller.__min,
        max: controller.__max,
        step: controller.__step
      });
      Common.each(['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'], function (method) {
        var pc = controller[method];
        var pb = box[method];

        controller[method] = box[method] = function () {
          var args = Array.prototype.slice.call(arguments);
          pb.apply(box, args);
          return pc.apply(controller, args);
        };
      });
      dom.addClass(li, 'has-slider');
      controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
    } else if (controller instanceof NumberControllerBox) {
      var r = function r(returned) {
        if (Common.isNumber(controller.__min) && Common.isNumber(controller.__max)) {
          var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
          var wasListening = controller.__gui.__listening.indexOf(controller) > -1;
          controller.remove();

          var newController = _add(gui, controller.object, controller.property, {
            before: controller.__li.nextElementSibling,
            factoryArgs: [controller.__min, controller.__max, controller.__step]
          });

          newController.name(oldName);
          if (wasListening) newController.listen();
          return newController;
        }

        return returned;
      };

      controller.min = Common.compose(r, controller.min);
      controller.max = Common.compose(r, controller.max);
    } else if (controller instanceof BooleanController) {
      dom.bind(li, 'click', function () {
        dom.fakeEvent(controller.__checkbox, 'click');
      });
      dom.bind(controller.__checkbox, 'click', function (e) {
        e.stopPropagation();
      });
    } else if (controller instanceof FunctionController) {
      dom.bind(li, 'click', function () {
        dom.fakeEvent(controller.__button, 'click');
      });
      dom.bind(li, 'mouseover', function () {
        dom.addClass(controller.__button, 'hover');
      });
      dom.bind(li, 'mouseout', function () {
        dom.removeClass(controller.__button, 'hover');
      });
    } else if (controller instanceof ColorController) {
      dom.addClass(li, 'color');
      controller.updateDisplay = Common.compose(function (val) {
        li.style.borderLeftColor = controller.__color.toString();
        return val;
      }, controller.updateDisplay);
      controller.updateDisplay();
    }

    controller.setValue = Common.compose(function (val) {
      if (gui.getRoot().__preset_select && controller.isModified()) {
        markPresetModified(gui.getRoot(), true);
      }

      return val;
    }, controller.setValue);
  }

  function recallSavedValue(gui, controller) {
    var root = gui.getRoot();

    var matchedIndex = root.__rememberedObjects.indexOf(controller.object);

    if (matchedIndex !== -1) {
      var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];

      if (controllerMap === undefined) {
        controllerMap = {};
        root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
      }

      controllerMap[controller.property] = controller;

      if (root.load && root.load.remembered) {
        var presetMap = root.load.remembered;
        var preset = void 0;

        if (presetMap[gui.preset]) {
          preset = presetMap[gui.preset];
        } else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
          preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
        } else {
          return;
        }

        if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
          var value = preset[matchedIndex][controller.property];
          controller.initialValue = value;
          controller.setValue(value);
        }
      }
    }
  }

  function _add(gui, object, property, params) {
    if (object[property] === undefined) {
      throw new Error('Object "' + object + '" has no property "' + property + '"');
    }

    var controller = void 0;

    if (params.color) {
      controller = new ColorController(object, property);
    } else {
      var factoryArgs = [object, property].concat(params.factoryArgs);
      controller = ControllerFactory.apply(gui, factoryArgs);
    }

    if (params.before instanceof Controller) {
      params.before = params.before.__li;
    }

    recallSavedValue(gui, controller);
    dom.addClass(controller.domElement, 'c');
    var name = document.createElement('span');
    dom.addClass(name, 'property-name');
    name.innerHTML = controller.property;
    var container = document.createElement('div');
    container.appendChild(name);
    container.appendChild(controller.domElement);
    var li = addRow(gui, container, params.before);
    dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);

    if (controller instanceof ColorController) {
      dom.addClass(li, 'color');
    } else {
      dom.addClass(li, _typeof$1(controller.getValue()));
    }

    augmentController(gui, li, controller);

    gui.__controllers.push(controller);

    return controller;
  }

  function getLocalStorageHash(gui, key) {
    return document.location.href + '.' + key;
  }

  function addPresetOption(gui, name, setSelected) {
    var opt = document.createElement('option');
    opt.innerHTML = name;
    opt.value = name;

    gui.__preset_select.appendChild(opt);

    if (setSelected) {
      gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
    }
  }

  function showHideExplain(gui, explain) {
    explain.style.display = gui.useLocalStorage ? 'block' : 'none';
  }

  function addSaveMenu(gui) {
    var div = gui.__save_row = document.createElement('li');
    dom.addClass(gui.domElement, 'has-save');

    gui.__ul.insertBefore(div, gui.__ul.firstChild);

    dom.addClass(div, 'save-row');
    var gears = document.createElement('span');
    gears.innerHTML = '&nbsp;';
    dom.addClass(gears, 'button gears');
    var button = document.createElement('span');
    button.innerHTML = 'Save';
    dom.addClass(button, 'button');
    dom.addClass(button, 'save');
    var button2 = document.createElement('span');
    button2.innerHTML = 'New';
    dom.addClass(button2, 'button');
    dom.addClass(button2, 'save-as');
    var button3 = document.createElement('span');
    button3.innerHTML = 'Revert';
    dom.addClass(button3, 'button');
    dom.addClass(button3, 'revert');
    var select = gui.__preset_select = document.createElement('select');

    if (gui.load && gui.load.remembered) {
      Common.each(gui.load.remembered, function (value, key) {
        addPresetOption(gui, key, key === gui.preset);
      });
    } else {
      addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
    }

    dom.bind(select, 'change', function () {
      for (var index = 0; index < gui.__preset_select.length; index++) {
        gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
      }

      gui.preset = this.value;
    });
    div.appendChild(select);
    div.appendChild(gears);
    div.appendChild(button);
    div.appendChild(button2);
    div.appendChild(button3);

    if (SUPPORTS_LOCAL_STORAGE) {
      var explain = document.getElementById('dg-local-explain');
      var localStorageCheckBox = document.getElementById('dg-local-storage');
      var saveLocally = document.getElementById('dg-save-locally');
      saveLocally.style.display = 'block';

      if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
        localStorageCheckBox.setAttribute('checked', 'checked');
      }

      showHideExplain(gui, explain);
      dom.bind(localStorageCheckBox, 'change', function () {
        gui.useLocalStorage = !gui.useLocalStorage;
        showHideExplain(gui, explain);
      });
    }

    var newConstructorTextArea = document.getElementById('dg-new-constructor');
    dom.bind(newConstructorTextArea, 'keydown', function (e) {
      if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
        SAVE_DIALOGUE.hide();
      }
    });
    dom.bind(gears, 'click', function () {
      newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
      SAVE_DIALOGUE.show();
      newConstructorTextArea.focus();
      newConstructorTextArea.select();
    });
    dom.bind(button, 'click', function () {
      gui.save();
    });
    dom.bind(button2, 'click', function () {
      var presetName = prompt('Enter a new preset name.');

      if (presetName) {
        gui.saveAs(presetName);
      }
    });
    dom.bind(button3, 'click', function () {
      gui.revert();
    });
  }

  function addResizeHandle(gui) {
    var pmouseX = void 0;
    gui.__resize_handle = document.createElement('div');
    Common.extend(gui.__resize_handle.style, {
      width: '6px',
      marginLeft: '-3px',
      height: '200px',
      cursor: 'ew-resize',
      position: 'absolute'
    });

    function drag(e) {
      e.preventDefault();
      gui.width += pmouseX - e.clientX;
      gui.onResize();
      pmouseX = e.clientX;
      return false;
    }

    function dragStop() {
      dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.unbind(window, 'mousemove', drag);
      dom.unbind(window, 'mouseup', dragStop);
    }

    function dragStart(e) {
      e.preventDefault();
      pmouseX = e.clientX;
      dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.bind(window, 'mousemove', drag);
      dom.bind(window, 'mouseup', dragStop);
      return false;
    }

    dom.bind(gui.__resize_handle, 'mousedown', dragStart);
    dom.bind(gui.__closeButton, 'mousedown', dragStart);
    gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
  }

  function setWidth(gui, w) {
    gui.domElement.style.width = w + 'px';

    if (gui.__save_row && gui.autoPlace) {
      gui.__save_row.style.width = w + 'px';
    }

    if (gui.__closeButton) {
      gui.__closeButton.style.width = w + 'px';
    }
  }

  function getCurrentPreset(gui, useInitialValues) {
    var toReturn = {};
    Common.each(gui.__rememberedObjects, function (val, index) {
      var savedValues = {};
      var controllerMap = gui.__rememberedObjectIndecesToControllers[index];
      Common.each(controllerMap, function (controller, property) {
        savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
      });
      toReturn[index] = savedValues;
    });
    return toReturn;
  }

  function setPresetSelectIndex(gui) {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      if (gui.__preset_select[index].value === gui.preset) {
        gui.__preset_select.selectedIndex = index;
      }
    }
  }

  function updateDisplays(controllerArray) {
    if (controllerArray.length !== 0) {
      requestAnimationFrame$1$1.call(window, function () {
        updateDisplays(controllerArray);
      });
    }

    Common.each(controllerArray, function (c) {
      c.updateDisplay();
    });
  }

  var GUI$1 = GUI;

  var Demo = function () {
    function Demo() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "demo";

      _classCallCheck(this, Demo);

      this.id = id;
      this.renderer = null;
      this.loadingManager = new three.LoadingManager();
      this.assets = new Map();
      this.scene = new three.Scene();
      this.camera = null;
      this.controls = null;
      this.ready = false;
    }

    _createClass(Demo, [{
      key: "setRenderer",
      value: function setRenderer(renderer) {
        this.renderer = renderer;
        return this;
      }
    }, {
      key: "load",
      value: function load() {
        return Promise.resolve();
      }
    }, {
      key: "initialize",
      value: function initialize() {}
    }, {
      key: "render",
      value: function render(delta) {
        this.renderer.render(this.scene, this.camera);
      }
    }, {
      key: "registerOptions",
      value: function registerOptions(menu) {}
    }, {
      key: "reset",
      value: function reset() {
        this.scene = new three.Scene();
        this.camera = null;

        if (this.controls !== null) {
          this.controls.dispose();
          this.controls = null;
        }

        this.ready = false;
        return this;
      }
    }]);

    return Demo;
  }();

  var DemoManagerEvent = function (_Event) {
    _inherits(DemoManagerEvent, _Event);

    function DemoManagerEvent(type) {
      var _this3;

      _classCallCheck(this, DemoManagerEvent);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(DemoManagerEvent).call(this, type));
      _this3.previousDemo = null;
      _this3.demo = null;
      return _this3;
    }

    return DemoManagerEvent;
  }(Event);

  var change = new DemoManagerEvent("change");
  var load = new DemoManagerEvent("load");

  var DemoManager = function (_EventTarget) {
    _inherits(DemoManager, _EventTarget);

    function DemoManager(viewport) {
      var _this4;

      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$aside = _ref3.aside,
          aside = _ref3$aside === void 0 ? viewport : _ref3$aside,
          renderer = _ref3.renderer;

      _classCallCheck(this, DemoManager);

      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(DemoManager).call(this));
      _this4.renderer = renderer !== undefined ? renderer : function () {
        var renderer = new three.WebGLRenderer();
        renderer.setSize(viewport.clientWidth, viewport.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        return renderer;
      }();
      viewport.appendChild(_this4.renderer.domElement);
      _this4.clock = new three.Clock();
      _this4.menu = new GUI$1({
        autoPlace: false
      });
      aside.appendChild(_this4.menu.domElement);
      _this4.demos = new Map();
      _this4.demo = null;
      _this4.currentDemo = null;
      return _this4;
    }

    _createClass(DemoManager, [{
      key: "resetMenu",
      value: function resetMenu() {
        var _this5 = this;

        var node = this.menu.domElement.parentNode;
        var menu = new GUI$1({
          autoPlace: false
        });

        if (this.demos.size > 1) {
          var selection = menu.add(this, "demo", Array.from(this.demos.keys()));
          selection.onChange(function () {
            return _this5.loadDemo();
          });
        }

        node.removeChild(this.menu.domElement);
        node.appendChild(menu.domElement);
        this.menu.destroy();
        this.menu = menu;
        return menu;
      }
    }, {
      key: "startDemo",
      value: function startDemo(demo) {
        if (demo.id === this.demo) {
          demo.initialize();
          demo.registerOptions(this.resetMenu());
          demo.ready = true;
          load.demo = demo;
          this.dispatchEvent(load);
        }
      }
    }, {
      key: "loadDemo",
      value: function loadDemo() {
        var _this6 = this;

        var nextDemo = this.demos.get(this.demo);
        var currentDemo = this.currentDemo;
        var renderer = this.renderer;
        window.location.hash = nextDemo.id;

        if (currentDemo !== null) {
          currentDemo.reset();
        }

        this.menu.domElement.style.display = "none";
        change.previousDemo = currentDemo;
        change.demo = nextDemo;
        this.currentDemo = nextDemo;
        this.dispatchEvent(change);
        renderer.clear();
        nextDemo.load().then(function () {
          return _this6.startDemo(nextDemo);
        })["catch"](console.error);
      }
    }, {
      key: "addDemo",
      value: function addDemo(demo) {
        var hash = window.location.hash.slice(1);
        var currentDemo = this.currentDemo;
        this.demos.set(demo.id, demo.setRenderer(this.renderer));

        if (this.demo === null && hash.length === 0 || demo.id === hash) {
          this.demo = demo.id;
          this.loadDemo();
        }

        this.resetMenu();

        if (currentDemo !== null && currentDemo.ready) {
          currentDemo.registerOptions(this.menu);
        }

        return this;
      }
    }, {
      key: "removeDemo",
      value: function removeDemo(id) {
        var demos = this.demos;
        var firstEntry;

        if (demos.has(id)) {
          demos["delete"](id);

          if (this.demo === id && demos.size > 0) {
            firstEntry = demos.entries().next().value;
            this.demo = firstEntry[0];
            this.currentDemo = firstEntry[1];
            this.loadDemo();
          } else {
            this.demo = null;
            this.currentDemo = null;
            this.renderer.clear();
          }
        }

        return this;
      }
    }, {
      key: "setSize",
      value: function setSize(width, height, updateStyle) {
        var demo = this.currentDemo;
        this.renderer.setSize(width, height, updateStyle);

        if (demo !== null && demo.camera !== null) {
          var camera = demo.camera;

          if (camera instanceof three.OrthographicCamera) {
            camera.left = width / -2.0;
            camera.right = width / 2.0;
            camera.top = height / 2.0;
            camera.bottom = height / -2.0;
            camera.updateProjectionMatrix();
          } else if (!(camera instanceof three.CubeCamera)) {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
          }
        }
      }
    }, {
      key: "render",
      value: function render(now) {
        var demo = this.currentDemo;
        var delta = this.clock.getDelta();

        if (demo !== null && demo.ready) {
          demo.render(delta);
        }
      }
    }]);

    return DemoManager;
  }(EventTarget);

  var Action = {
    MOVE_FORWARD: 0,
    MOVE_LEFT: 1,
    MOVE_BACKWARD: 2,
    MOVE_RIGHT: 3,
    MOVE_DOWN: 4,
    MOVE_UP: 5,
    ZOOM_OUT: 6,
    ZOOM_IN: 7
  };

  var Vector3 = function () {
    function Vector3() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, Vector3);

      this.x = x;
      this.y = y;
      this.z = z;
    }

    _createClass(Vector3, [{
      key: "set",
      value: function set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
      }
    }, {
      key: "copy",
      value: function copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.x, this.y, this.z);
      }
    }, {
      key: "fromArray",
      value: function fromArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        this.x = array[offset];
        this.y = array[offset + 1];
        this.z = array[offset + 2];
        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        array[offset] = this.x;
        array[offset + 1] = this.y;
        array[offset + 2] = this.z;
        return array;
      }
    }, {
      key: "setFromSpherical",
      value: function setFromSpherical(s) {
        this.setFromSphericalCoords(s.radius, s.phi, s.theta);
      }
    }, {
      key: "setFromSphericalCoords",
      value: function setFromSphericalCoords(radius, phi, theta) {
        var sinPhiRadius = Math.sin(phi) * radius;
        this.x = sinPhiRadius * Math.sin(theta);
        this.y = Math.cos(phi) * radius;
        this.z = sinPhiRadius * Math.cos(theta);
        return this;
      }
    }, {
      key: "setFromCylindrical",
      value: function setFromCylindrical(c) {
        this.setFromCylindricalCoords(c.radius, c.theta, c.y);
      }
    }, {
      key: "setFromCylindricalCoords",
      value: function setFromCylindricalCoords(radius, theta, y) {
        this.x = radius * Math.sin(theta);
        this.y = y;
        this.z = radius * Math.cos(theta);
        return this;
      }
    }, {
      key: "setFromMatrixColumn",
      value: function setFromMatrixColumn(m, index) {
        return this.fromArray(m.elements, index * 4);
      }
    }, {
      key: "setFromMatrixPosition",
      value: function setFromMatrixPosition(m) {
        var me = m.elements;
        this.x = me[12];
        this.y = me[13];
        this.z = me[14];
        return this;
      }
    }, {
      key: "setFromMatrixScale",
      value: function setFromMatrixScale(m) {
        var sx = this.setFromMatrixColumn(m, 0).length();
        var sy = this.setFromMatrixColumn(m, 1).length();
        var sz = this.setFromMatrixColumn(m, 2).length();
        this.x = sx;
        this.y = sy;
        this.z = sz;
        return this;
      }
    }, {
      key: "add",
      value: function add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
      }
    }, {
      key: "addScalar",
      value: function addScalar(s) {
        this.x += s;
        this.y += s;
        this.z += s;
        return this;
      }
    }, {
      key: "addVectors",
      value: function addVectors(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        return this;
      }
    }, {
      key: "addScaledVector",
      value: function addScaledVector(v, s) {
        this.x += v.x * s;
        this.y += v.y * s;
        this.z += v.z * s;
        return this;
      }
    }, {
      key: "sub",
      value: function sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
      }
    }, {
      key: "subScalar",
      value: function subScalar(s) {
        this.x -= s;
        this.y -= s;
        this.z -= s;
        return this;
      }
    }, {
      key: "subVectors",
      value: function subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        return this;
      }
    }, {
      key: "multiply",
      value: function multiply(v) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
      }
    }, {
      key: "multiplyVectors",
      value: function multiplyVectors(a, b) {
        this.x = a.x * b.x;
        this.y = a.y * b.y;
        this.z = a.z * b.z;
        return this;
      }
    }, {
      key: "divide",
      value: function divide(v) {
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;
        return this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(s) {
        this.x /= s;
        this.y /= s;
        this.z /= s;
        return this;
      }
    }, {
      key: "crossVectors",
      value: function crossVectors(a, b) {
        var ax = a.x,
            ay = a.y,
            az = a.z;
        var bx = b.x,
            by = b.y,
            bz = b.z;
        this.x = ay * bz - az * by;
        this.y = az * bx - ax * bz;
        this.z = ax * by - ay * bx;
        return this;
      }
    }, {
      key: "cross",
      value: function cross(v) {
        return this.crossVectors(this, v);
      }
    }, {
      key: "transformDirection",
      value: function transformDirection(m) {
        var x = this.x,
            y = this.y,
            z = this.z;
        var e = m.elements;
        this.x = e[0] * x + e[4] * y + e[8] * z;
        this.y = e[1] * x + e[5] * y + e[9] * z;
        this.z = e[2] * x + e[6] * y + e[10] * z;
        return this.normalize();
      }
    }, {
      key: "applyMatrix3",
      value: function applyMatrix3(m) {
        var x = this.x,
            y = this.y,
            z = this.z;
        var e = m.elements;
        this.x = e[0] * x + e[3] * y + e[6] * z;
        this.y = e[1] * x + e[4] * y + e[7] * z;
        this.z = e[2] * x + e[5] * y + e[8] * z;
        return this;
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(m) {
        var x = this.x,
            y = this.y,
            z = this.z;
        var e = m.elements;
        this.x = e[0] * x + e[4] * y + e[8] * z + e[12];
        this.y = e[1] * x + e[5] * y + e[9] * z + e[13];
        this.z = e[2] * x + e[6] * y + e[10] * z + e[14];
        return this;
      }
    }, {
      key: "applyQuaternion",
      value: function applyQuaternion(q) {
        var x = this.x,
            y = this.y,
            z = this.z;
        var qx = q.x,
            qy = q.y,
            qz = q.z,
            qw = q.w;
        var ix = qw * x + qy * z - qz * y;
        var iy = qw * y + qz * x - qx * z;
        var iz = qw * z + qx * y - qy * x;
        var iw = -qx * x - qy * y - qz * z;
        this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return this;
      }
    }, {
      key: "negate",
      value: function negate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
      }
    }, {
      key: "dot",
      value: function dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
      }
    }, {
      key: "reflect",
      value: function reflect(n) {
        var nx = n.x;
        var ny = n.y;
        var nz = n.z;
        this.sub(n.multiplyScalar(2 * this.dot(n)));
        n.set(nx, ny, nz);
        return this;
      }
    }, {
      key: "angleTo",
      value: function angleTo(v) {
        var theta = this.dot(v) / Math.sqrt(this.lengthSquared() * v.lengthSquared());
        return Math.acos(Math.min(Math.max(theta, -1), 1));
      }
    }, {
      key: "manhattanLength",
      value: function manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
      }
    }, {
      key: "lengthSquared",
      value: function lengthSquared() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      }
    }, {
      key: "manhattanDistanceTo",
      value: function manhattanDistanceTo(v) {
        return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
      }
    }, {
      key: "distanceToSquared",
      value: function distanceToSquared(v) {
        var dx = this.x - v.x;
        var dy = this.y - v.y;
        var dz = this.z - v.z;
        return dx * dx + dy * dy + dz * dz;
      }
    }, {
      key: "distanceTo",
      value: function distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return this.divideScalar(this.length());
      }
    }, {
      key: "setLength",
      value: function setLength(length) {
        return this.normalize().multiplyScalar(length);
      }
    }, {
      key: "min",
      value: function min(v) {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);
        this.z = Math.min(this.z, v.z);
        return this;
      }
    }, {
      key: "max",
      value: function max(v) {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);
        this.z = Math.max(this.z, v.z);
        return this;
      }
    }, {
      key: "clamp",
      value: function clamp(min, max) {
        this.x = Math.max(min.x, Math.min(max.x, this.x));
        this.y = Math.max(min.y, Math.min(max.y, this.y));
        this.z = Math.max(min.z, Math.min(max.z, this.z));
        return this;
      }
    }, {
      key: "floor",
      value: function floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
      }
    }, {
      key: "ceil",
      value: function ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
      }
    }, {
      key: "round",
      value: function round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
      }
    }, {
      key: "lerp",
      value: function lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        this.z += (v.z - this.z) * alpha;
        return this;
      }
    }, {
      key: "lerpVectors",
      value: function lerpVectors(v1, v2, alpha) {
        return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
      }
    }, {
      key: "equals",
      value: function equals(v) {
        return v.x === this.x && v.y === this.y && v.z === this.z;
      }
    }]);

    return Vector3;
  }();

  var Vector2 = function () {
    function Vector2() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, Vector2);

      this.x = x;
      this.y = y;
    }

    _createClass(Vector2, [{
      key: "set",
      value: function set(x, y) {
        this.x = x;
        this.y = y;
        return this;
      }
    }, {
      key: "copy",
      value: function copy(v) {
        this.x = v.x;
        this.y = v.y;
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.x, this.y);
      }
    }, {
      key: "fromArray",
      value: function fromArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        this.x = array[offset];
        this.y = array[offset + 1];
        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        array[offset] = this.x;
        array[offset + 1] = this.y;
        return array;
      }
    }, {
      key: "add",
      value: function add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
      }
    }, {
      key: "addScalar",
      value: function addScalar(s) {
        this.x += s;
        this.y += s;
        return this;
      }
    }, {
      key: "addVectors",
      value: function addVectors(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        return this;
      }
    }, {
      key: "addScaledVector",
      value: function addScaledVector(v, s) {
        this.x += v.x * s;
        this.y += v.y * s;
        return this;
      }
    }, {
      key: "sub",
      value: function sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
      }
    }, {
      key: "subScalar",
      value: function subScalar(s) {
        this.x -= s;
        this.y -= s;
        return this;
      }
    }, {
      key: "subVectors",
      value: function subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this;
      }
    }, {
      key: "multiply",
      value: function multiply(v) {
        this.x *= v.x;
        this.y *= v.y;
        return this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(s) {
        this.x *= s;
        this.y *= s;
        return this;
      }
    }, {
      key: "divide",
      value: function divide(v) {
        this.x /= v.x;
        this.y /= v.y;
        return this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(s) {
        this.x /= s;
        this.y /= s;
        return this;
      }
    }, {
      key: "applyMatrix3",
      value: function applyMatrix3(m) {
        var x = this.x,
            y = this.y;
        var e = m.elements;
        this.x = e[0] * x + e[3] * y + e[6];
        this.y = e[1] * x + e[4] * y + e[7];
        return this;
      }
    }, {
      key: "dot",
      value: function dot(v) {
        return this.x * v.x + this.y * v.y;
      }
    }, {
      key: "cross",
      value: function cross(v) {
        return this.x * v.y - this.y * v.x;
      }
    }, {
      key: "manhattanLength",
      value: function manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y);
      }
    }, {
      key: "lengthSquared",
      value: function lengthSquared() {
        return this.x * this.x + this.y * this.y;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
    }, {
      key: "manhattanDistanceTo",
      value: function manhattanDistanceTo(v) {
        return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
      }
    }, {
      key: "distanceToSquared",
      value: function distanceToSquared(v) {
        var dx = this.x - v.x;
        var dy = this.y - v.y;
        return dx * dx + dy * dy;
      }
    }, {
      key: "distanceTo",
      value: function distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return this.divideScalar(this.length());
      }
    }, {
      key: "setLength",
      value: function setLength(length) {
        return this.normalize().multiplyScalar(length);
      }
    }, {
      key: "min",
      value: function min(v) {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);
        return this;
      }
    }, {
      key: "max",
      value: function max(v) {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);
        return this;
      }
    }, {
      key: "clamp",
      value: function clamp(min, max) {
        this.x = Math.max(min.x, Math.min(max.x, this.x));
        this.y = Math.max(min.y, Math.min(max.y, this.y));
        return this;
      }
    }, {
      key: "floor",
      value: function floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
      }
    }, {
      key: "ceil",
      value: function ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
      }
    }, {
      key: "round",
      value: function round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
      }
    }, {
      key: "negate",
      value: function negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
      }
    }, {
      key: "angle",
      value: function angle() {
        var angle = Math.atan2(this.y, this.x);

        if (angle < 0) {
          angle += 2 * Math.PI;
        }

        return angle;
      }
    }, {
      key: "lerp",
      value: function lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        return this;
      }
    }, {
      key: "lerpVectors",
      value: function lerpVectors(v1, v2, alpha) {
        return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
      }
    }, {
      key: "rotateAround",
      value: function rotateAround(center, angle) {
        var c = Math.cos(angle),
            s = Math.sin(angle);
        var x = this.x - center.x;
        var y = this.y - center.y;
        this.x = x * c - y * s + center.x;
        this.y = x * s + y * c + center.y;
        return this;
      }
    }, {
      key: "equals",
      value: function equals(v) {
        return v.x === this.x && v.y === this.y;
      }
    }, {
      key: "width",
      get: function get() {
        return this.x;
      },
      set: function set(value) {
        return this.x = value;
      }
    }, {
      key: "height",
      get: function get() {
        return this.y;
      },
      set: function set(value) {
        return this.y = value;
      }
    }]);

    return Vector2;
  }();

  var RotationOrder = {
    XYZ: "XYZ",
    YZX: "YZX",
    ZXY: "ZXY",
    XZY: "XZY",
    YXZ: "YXZ",
    ZYX: "ZYX"
  };
  var a$2 = new Vector3();
  var b$2 = new Vector3();
  var c = new Vector3();

  var Matrix4 = function () {
    function Matrix4() {
      _classCallCheck(this, Matrix4);

      this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }

    _createClass(Matrix4, [{
      key: "set",
      value: function set(n00, n01, n02, n03, n10, n11, n12, n13, n20, n21, n22, n23, n30, n31, n32, n33) {
        var te = this.elements;
        te[0] = n00;
        te[4] = n01;
        te[8] = n02;
        te[12] = n03;
        te[1] = n10;
        te[5] = n11;
        te[9] = n12;
        te[13] = n13;
        te[2] = n20;
        te[6] = n21;
        te[10] = n22;
        te[14] = n23;
        te[3] = n30;
        te[7] = n31;
        te[11] = n32;
        te[15] = n33;
        return this;
      }
    }, {
      key: "identity",
      value: function identity() {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
      }
    }, {
      key: "copy",
      value: function copy(matrix) {
        var me = matrix.elements;
        var te = this.elements;
        te[0] = me[0];
        te[1] = me[1];
        te[2] = me[2];
        te[3] = me[3];
        te[4] = me[4];
        te[5] = me[5];
        te[6] = me[6];
        te[7] = me[7];
        te[8] = me[8];
        te[9] = me[9];
        te[10] = me[10];
        te[11] = me[11];
        te[12] = me[12];
        te[13] = me[13];
        te[14] = me[14];
        te[15] = me[15];
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().fromArray(this.elements);
      }
    }, {
      key: "fromArray",
      value: function fromArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var te = this.elements;
        var i;

        for (i = 0; i < 16; ++i) {
          te[i] = array[i + offset];
        }

        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var te = this.elements;
        var i;

        for (i = 0; i < 16; ++i) {
          array[i + offset] = te[i];
        }

        return array;
      }
    }, {
      key: "getMaxScaleOnAxis",
      value: function getMaxScaleOnAxis() {
        var te = this.elements;
        var scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
        var scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
        var scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
        return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
      }
    }, {
      key: "copyPosition",
      value: function copyPosition(matrix) {
        var te = this.elements;
        var me = matrix.elements;
        te[12] = me[12];
        te[13] = me[13];
        te[14] = me[14];
        return this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(p) {
        var te = this.elements;
        te[12] = p.x;
        te[13] = p.y;
        te[14] = p.z;
        return this;
      }
    }, {
      key: "extractBasis",
      value: function extractBasis(xAxis, yAxis, zAxis) {
        xAxis.setFromMatrixColumn(this, 0);
        yAxis.setFromMatrixColumn(this, 1);
        zAxis.setFromMatrixColumn(this, 2);
        return this;
      }
    }, {
      key: "makeBasis",
      value: function makeBasis(xAxis, yAxis, zAxis) {
        this.set(xAxis.x, yAxis.x, zAxis.x, 0, xAxis.y, yAxis.y, zAxis.y, 0, xAxis.z, yAxis.z, zAxis.z, 0, 0, 0, 0, 1);
        return this;
      }
    }, {
      key: "extractRotation",
      value: function extractRotation(m) {
        var te = this.elements;
        var me = m.elements;
        var scaleX = 1.0 / a$2.setFromMatrixColumn(m, 0).length();
        var scaleY = 1.0 / a$2.setFromMatrixColumn(m, 1).length();
        var scaleZ = 1.0 / a$2.setFromMatrixColumn(m, 2).length();
        te[0] = me[0] * scaleX;
        te[1] = me[1] * scaleX;
        te[2] = me[2] * scaleX;
        te[3] = 0;
        te[4] = me[4] * scaleY;
        te[5] = me[5] * scaleY;
        te[6] = me[6] * scaleY;
        te[7] = 0;
        te[8] = me[8] * scaleZ;
        te[9] = me[9] * scaleZ;
        te[10] = me[10] * scaleZ;
        te[11] = 0;
        te[12] = 0;
        te[13] = 0;
        te[14] = 0;
        te[15] = 1;
        return this;
      }
    }, {
      key: "makeRotationFromEuler",
      value: function makeRotationFromEuler(euler) {
        var te = this.elements;
        var x = euler.x;
        var y = euler.y;
        var z = euler.z;
        var a = Math.cos(x),
            b = Math.sin(x);
        var c = Math.cos(y),
            d = Math.sin(y);
        var e = Math.cos(z),
            f = Math.sin(z);
        var ae, af, be, bf;
        var ce, cf, de, df;
        var ac, ad, bc, bd;

        switch (euler.order) {
          case RotationOrder.XYZ:
            {
              ae = a * e, af = a * f, be = b * e, bf = b * f;
              te[0] = c * e;
              te[4] = -c * f;
              te[8] = d;
              te[1] = af + be * d;
              te[5] = ae - bf * d;
              te[9] = -b * c;
              te[2] = bf - ae * d;
              te[6] = be + af * d;
              te[10] = a * c;
              break;
            }

          case RotationOrder.YXZ:
            {
              ce = c * e, cf = c * f, de = d * e, df = d * f;
              te[0] = ce + df * b;
              te[4] = de * b - cf;
              te[8] = a * d;
              te[1] = a * f;
              te[5] = a * e;
              te[9] = -b;
              te[2] = cf * b - de;
              te[6] = df + ce * b;
              te[10] = a * c;
              break;
            }

          case RotationOrder.ZXY:
            {
              ce = c * e, cf = c * f, de = d * e, df = d * f;
              te[0] = ce - df * b;
              te[4] = -a * f;
              te[8] = de + cf * b;
              te[1] = cf + de * b;
              te[5] = a * e;
              te[9] = df - ce * b;
              te[2] = -a * d;
              te[6] = b;
              te[10] = a * c;
              break;
            }

          case RotationOrder.ZYX:
            {
              ae = a * e, af = a * f, be = b * e, bf = b * f;
              te[0] = c * e;
              te[4] = be * d - af;
              te[8] = ae * d + bf;
              te[1] = c * f;
              te[5] = bf * d + ae;
              te[9] = af * d - be;
              te[2] = -d;
              te[6] = b * c;
              te[10] = a * c;
              break;
            }

          case RotationOrder.YZX:
            {
              ac = a * c, ad = a * d, bc = b * c, bd = b * d;
              te[0] = c * e;
              te[4] = bd - ac * f;
              te[8] = bc * f + ad;
              te[1] = f;
              te[5] = a * e;
              te[9] = -b * e;
              te[2] = -d * e;
              te[6] = ad * f + bc;
              te[10] = ac - bd * f;
              break;
            }

          case RotationOrder.XZY:
            {
              ac = a * c, ad = a * d, bc = b * c, bd = b * d;
              te[0] = c * e;
              te[4] = -f;
              te[8] = d * e;
              te[1] = ac * f + bd;
              te[5] = a * e;
              te[9] = ad * f - bc;
              te[2] = bc * f - ad;
              te[6] = b * e;
              te[10] = bd * f + ac;
              break;
            }
        }

        te[3] = 0;
        te[7] = 0;
        te[11] = 0;
        te[12] = 0;
        te[13] = 0;
        te[14] = 0;
        te[15] = 1;
        return this;
      }
    }, {
      key: "makeRotationFromQuaternion",
      value: function makeRotationFromQuaternion(q) {
        return this.compose(a$2.set(0, 0, 0), q, b$2.set(1, 1, 1));
      }
    }, {
      key: "lookAt",
      value: function lookAt(eye, target, up) {
        var te = this.elements;
        var x = a$2,
            y = b$2,
            z = c;
        z.subVectors(eye, target);

        if (z.lengthSquared() === 0) {
          z.z = 1;
        }

        z.normalize();
        x.crossVectors(up, z);

        if (x.lengthSquared() === 0) {
          if (Math.abs(up.z) === 1) {
            z.x += 1e-4;
          } else {
            z.z += 1e-4;
          }

          z.normalize();
          x.crossVectors(up, z);
        }

        x.normalize();
        y.crossVectors(z, x);
        te[0] = x.x;
        te[4] = y.x;
        te[8] = z.x;
        te[1] = x.y;
        te[5] = y.y;
        te[9] = z.y;
        te[2] = x.z;
        te[6] = y.z;
        te[10] = z.z;
        return this;
      }
    }, {
      key: "multiplyMatrices",
      value: function multiplyMatrices(a, b) {
        var te = this.elements;
        var ae = a.elements;
        var be = b.elements;
        var a00 = ae[0],
            a01 = ae[4],
            a02 = ae[8],
            a03 = ae[12];
        var a10 = ae[1],
            a11 = ae[5],
            a12 = ae[9],
            a13 = ae[13];
        var a20 = ae[2],
            a21 = ae[6],
            a22 = ae[10],
            a23 = ae[14];
        var a30 = ae[3],
            a31 = ae[7],
            a32 = ae[11],
            a33 = ae[15];
        var b00 = be[0],
            b01 = be[4],
            b02 = be[8],
            b03 = be[12];
        var b10 = be[1],
            b11 = be[5],
            b12 = be[9],
            b13 = be[13];
        var b20 = be[2],
            b21 = be[6],
            b22 = be[10],
            b23 = be[14];
        var b30 = be[3],
            b31 = be[7],
            b32 = be[11],
            b33 = be[15];
        te[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
        te[4] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
        te[8] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
        te[12] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;
        te[1] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
        te[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
        te[9] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
        te[13] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;
        te[2] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
        te[6] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
        te[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
        te[14] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;
        te[3] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
        te[7] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
        te[11] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
        te[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;
        return this;
      }
    }, {
      key: "multiply",
      value: function multiply(m) {
        return this.multiplyMatrices(this, m);
      }
    }, {
      key: "premultiply",
      value: function premultiply(m) {
        return this.multiplyMatrices(m, this);
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(s) {
        var te = this.elements;
        te[0] *= s;
        te[4] *= s;
        te[8] *= s;
        te[12] *= s;
        te[1] *= s;
        te[5] *= s;
        te[9] *= s;
        te[13] *= s;
        te[2] *= s;
        te[6] *= s;
        te[10] *= s;
        te[14] *= s;
        te[3] *= s;
        te[7] *= s;
        te[11] *= s;
        te[15] *= s;
        return this;
      }
    }, {
      key: "determinant",
      value: function determinant() {
        var te = this.elements;
        var n00 = te[0],
            n01 = te[4],
            n02 = te[8],
            n03 = te[12];
        var n10 = te[1],
            n11 = te[5],
            n12 = te[9],
            n13 = te[13];
        var n20 = te[2],
            n21 = te[6],
            n22 = te[10],
            n23 = te[14];
        var n30 = te[3],
            n31 = te[7],
            n32 = te[11],
            n33 = te[15];
        var n00n11 = n00 * n11,
            n00n12 = n00 * n12,
            n00n13 = n00 * n13;
        var n01n10 = n01 * n10,
            n01n12 = n01 * n12,
            n01n13 = n01 * n13;
        var n02n10 = n02 * n10,
            n02n11 = n02 * n11,
            n02n13 = n02 * n13;
        var n03n10 = n03 * n10,
            n03n11 = n03 * n11,
            n03n12 = n03 * n12;
        return n30 * (n03n12 * n21 - n02n13 * n21 - n03n11 * n22 + n01n13 * n22 + n02n11 * n23 - n01n12 * n23) + n31 * (n00n12 * n23 - n00n13 * n22 + n03n10 * n22 - n02n10 * n23 + n02n13 * n20 - n03n12 * n20) + n32 * (n00n13 * n21 - n00n11 * n23 - n03n10 * n21 + n01n10 * n23 + n03n11 * n20 - n01n13 * n20) + n33 * (-n02n11 * n20 - n00n12 * n21 + n00n11 * n22 + n02n10 * n21 - n01n10 * n22 + n01n12 * n20);
      }
    }, {
      key: "getInverse",
      value: function getInverse(matrix) {
        var te = this.elements;
        var me = matrix.elements;
        var n00 = me[0],
            n10 = me[1],
            n20 = me[2],
            n30 = me[3];
        var n01 = me[4],
            n11 = me[5],
            n21 = me[6],
            n31 = me[7];
        var n02 = me[8],
            n12 = me[9],
            n22 = me[10],
            n32 = me[11];
        var n03 = me[12],
            n13 = me[13],
            n23 = me[14],
            n33 = me[15];
        var t00 = n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33;
        var t01 = n03 * n22 * n31 - n02 * n23 * n31 - n03 * n21 * n32 + n01 * n23 * n32 + n02 * n21 * n33 - n01 * n22 * n33;
        var t02 = n02 * n13 * n31 - n03 * n12 * n31 + n03 * n11 * n32 - n01 * n13 * n32 - n02 * n11 * n33 + n01 * n12 * n33;
        var t03 = n03 * n12 * n21 - n02 * n13 * n21 - n03 * n11 * n22 + n01 * n13 * n22 + n02 * n11 * n23 - n01 * n12 * n23;
        var det = n00 * t00 + n10 * t01 + n20 * t02 + n30 * t03;
        var invDet;

        if (det !== 0) {
          invDet = 1.0 / det;
          te[0] = t00 * invDet;
          te[1] = (n13 * n22 * n30 - n12 * n23 * n30 - n13 * n20 * n32 + n10 * n23 * n32 + n12 * n20 * n33 - n10 * n22 * n33) * invDet;
          te[2] = (n11 * n23 * n30 - n13 * n21 * n30 + n13 * n20 * n31 - n10 * n23 * n31 - n11 * n20 * n33 + n10 * n21 * n33) * invDet;
          te[3] = (n12 * n21 * n30 - n11 * n22 * n30 - n12 * n20 * n31 + n10 * n22 * n31 + n11 * n20 * n32 - n10 * n21 * n32) * invDet;
          te[4] = t01 * invDet;
          te[5] = (n02 * n23 * n30 - n03 * n22 * n30 + n03 * n20 * n32 - n00 * n23 * n32 - n02 * n20 * n33 + n00 * n22 * n33) * invDet;
          te[6] = (n03 * n21 * n30 - n01 * n23 * n30 - n03 * n20 * n31 + n00 * n23 * n31 + n01 * n20 * n33 - n00 * n21 * n33) * invDet;
          te[7] = (n01 * n22 * n30 - n02 * n21 * n30 + n02 * n20 * n31 - n00 * n22 * n31 - n01 * n20 * n32 + n00 * n21 * n32) * invDet;
          te[8] = t02 * invDet;
          te[9] = (n03 * n12 * n30 - n02 * n13 * n30 - n03 * n10 * n32 + n00 * n13 * n32 + n02 * n10 * n33 - n00 * n12 * n33) * invDet;
          te[10] = (n01 * n13 * n30 - n03 * n11 * n30 + n03 * n10 * n31 - n00 * n13 * n31 - n01 * n10 * n33 + n00 * n11 * n33) * invDet;
          te[11] = (n02 * n11 * n30 - n01 * n12 * n30 - n02 * n10 * n31 + n00 * n12 * n31 + n01 * n10 * n32 - n00 * n11 * n32) * invDet;
          te[12] = t03 * invDet;
          te[13] = (n02 * n13 * n20 - n03 * n12 * n20 + n03 * n10 * n22 - n00 * n13 * n22 - n02 * n10 * n23 + n00 * n12 * n23) * invDet;
          te[14] = (n03 * n11 * n20 - n01 * n13 * n20 - n03 * n10 * n21 + n00 * n13 * n21 + n01 * n10 * n23 - n00 * n11 * n23) * invDet;
          te[15] = (n01 * n12 * n20 - n02 * n11 * n20 + n02 * n10 * n21 - n00 * n12 * n21 - n01 * n10 * n22 + n00 * n11 * n22) * invDet;
        } else {
          console.error("Can't invert matrix, determinant is zero", matrix);
          this.identity();
        }

        return this;
      }
    }, {
      key: "transpose",
      value: function transpose() {
        var te = this.elements;
        var t;
        t = te[1];
        te[1] = te[4];
        te[4] = t;
        t = te[2];
        te[2] = te[8];
        te[8] = t;
        t = te[6];
        te[6] = te[9];
        te[9] = t;
        t = te[3];
        te[3] = te[12];
        te[12] = t;
        t = te[7];
        te[7] = te[13];
        te[13] = t;
        t = te[11];
        te[11] = te[14];
        te[14] = t;
        return this;
      }
    }, {
      key: "scale",
      value: function scale(sx, sy, sz) {
        var te = this.elements;
        te[0] *= sx;
        te[4] *= sy;
        te[8] *= sz;
        te[1] *= sx;
        te[5] *= sy;
        te[9] *= sz;
        te[2] *= sx;
        te[6] *= sy;
        te[10] *= sz;
        te[3] *= sx;
        te[7] *= sy;
        te[11] *= sz;
        return this;
      }
    }, {
      key: "makeScale",
      value: function makeScale(x, y, z) {
        this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
        return this;
      }
    }, {
      key: "makeTranslation",
      value: function makeTranslation(x, y, z) {
        this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);
        return this;
      }
    }, {
      key: "makeRotationX",
      value: function makeRotationX(theta) {
        var c = Math.cos(theta),
            s = Math.sin(theta);
        this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
        return this;
      }
    }, {
      key: "makeRotationY",
      value: function makeRotationY(theta) {
        var c = Math.cos(theta),
            s = Math.sin(theta);
        this.set(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1);
        return this;
      }
    }, {
      key: "makeRotationZ",
      value: function makeRotationZ(theta) {
        var c = Math.cos(theta),
            s = Math.sin(theta);
        this.set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
      }
    }, {
      key: "makeRotationAxis",
      value: function makeRotationAxis(axis, angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        var t = 1.0 - c;
        var x = axis.x,
            y = axis.y,
            z = axis.z;
        var tx = t * x,
            ty = t * y;
        this.set(tx * x + c, tx * y - s * z, tx * z + s * y, 0, tx * y + s * z, ty * y + c, ty * z - s * x, 0, tx * z - s * y, ty * z + s * x, t * z * z + c, 0, 0, 0, 0, 1);
        return this;
      }
    }, {
      key: "makeShear",
      value: function makeShear(x, y, z) {
        this.set(1, y, z, 0, x, 1, z, 0, x, y, 1, 0, 0, 0, 0, 1);
        return this;
      }
    }, {
      key: "compose",
      value: function compose(position, quaternion, scale) {
        var te = this.elements;
        var x = quaternion.x,
            y = quaternion.y,
            z = quaternion.z,
            w = quaternion.w;
        var x2 = x + x,
            y2 = y + y,
            z2 = z + z;
        var xx = x * x2,
            xy = x * y2,
            xz = x * z2;
        var yy = y * y2,
            yz = y * z2,
            zz = z * z2;
        var wx = w * x2,
            wy = w * y2,
            wz = w * z2;
        var sx = scale.x,
            sy = scale.y,
            sz = scale.z;
        te[0] = (1 - (yy + zz)) * sx;
        te[1] = (xy + wz) * sx;
        te[2] = (xz - wy) * sx;
        te[3] = 0;
        te[4] = (xy - wz) * sy;
        te[5] = (1 - (xx + zz)) * sy;
        te[6] = (yz + wx) * sy;
        te[7] = 0;
        te[8] = (xz + wy) * sz;
        te[9] = (yz - wx) * sz;
        te[10] = (1 - (xx + yy)) * sz;
        te[11] = 0;
        te[12] = position.x;
        te[13] = position.y;
        te[14] = position.z;
        te[15] = 1;
        return this;
      }
    }, {
      key: "decompose",
      value: function decompose(position, quaternion, scale) {
        var te = this.elements;
        var n00 = te[0],
            n10 = te[1],
            n20 = te[2];
        var n01 = te[4],
            n11 = te[5],
            n21 = te[6];
        var n02 = te[8],
            n12 = te[9],
            n22 = te[10];
        var det = this.determinant();
        var sx = a$2.set(n00, n10, n20).length() * (det < 0 ? -1 : 1);
        var sy = a$2.set(n01, n11, n21).length();
        var sz = a$2.set(n02, n12, n22).length();
        var invSX = 1.0 / sx;
        var invSY = 1.0 / sy;
        var invSZ = 1.0 / sz;
        position.x = te[12];
        position.y = te[13];
        position.z = te[14];
        te[0] *= invSX;
        te[1] *= invSX;
        te[2] *= invSX;
        te[4] *= invSY;
        te[5] *= invSY;
        te[6] *= invSY;
        te[8] *= invSZ;
        te[9] *= invSZ;
        te[10] *= invSZ;
        quaternion.setFromRotationMatrix(this);
        te[0] = n00;
        te[1] = n10;
        te[2] = n20;
        te[4] = n01;
        te[5] = n11;
        te[6] = n21;
        te[8] = n02;
        te[9] = n12;
        te[10] = n22;
        scale.x = sx;
        scale.y = sy;
        scale.z = sz;
        return this;
      }
    }, {
      key: "makePerspective",
      value: function makePerspective(left, right, top, bottom, near, far) {
        var te = this.elements;
        var x = 2 * near / (right - left);
        var y = 2 * near / (top - bottom);
        var a = (right + left) / (right - left);
        var b = (top + bottom) / (top - bottom);
        var c = -(far + near) / (far - near);
        var d = -2 * far * near / (far - near);
        te[0] = x;
        te[4] = 0;
        te[8] = a;
        te[12] = 0;
        te[1] = 0;
        te[5] = y;
        te[9] = b;
        te[13] = 0;
        te[2] = 0;
        te[6] = 0;
        te[10] = c;
        te[14] = d;
        te[3] = 0;
        te[7] = 0;
        te[11] = -1;
        te[15] = 0;
        return this;
      }
    }, {
      key: "makeOrthographic",
      value: function makeOrthographic(left, right, top, bottom, near, far) {
        var te = this.elements;
        var w = 1.0 / (right - left);
        var h = 1.0 / (top - bottom);
        var p = 1.0 / (far - near);
        var x = (right + left) * w;
        var y = (top + bottom) * h;
        var z = (far + near) * p;
        te[0] = 2 * w;
        te[4] = 0;
        te[8] = 0;
        te[12] = -x;
        te[1] = 0;
        te[5] = 2 * h;
        te[9] = 0;
        te[13] = -y;
        te[2] = 0;
        te[6] = 0;
        te[10] = -2 * p;
        te[14] = -z;
        te[3] = 0;
        te[7] = 0;
        te[11] = 0;
        te[15] = 1;
        return this;
      }
    }, {
      key: "equals",
      value: function equals(m) {
        var te = this.elements;
        var me = m.elements;
        var result = true;
        var i;

        for (i = 0; result && i < 16; ++i) {
          if (te[i] !== me[i]) {
            result = false;
          }
        }

        return result;
      }
    }]);

    return Matrix4;
  }();

  var Spherical = function () {
    function Spherical() {
      var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var phi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var theta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, Spherical);

      this.radius = radius;
      this.phi = phi;
      this.theta = theta;
    }

    _createClass(Spherical, [{
      key: "set",
      value: function set(radius, phi, theta) {
        this.radius = radius;
        this.phi = phi;
        this.theta = theta;
        return this;
      }
    }, {
      key: "copy",
      value: function copy(s) {
        this.radius = s.radius;
        this.phi = s.phi;
        this.theta = s.theta;
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "makeSafe",
      value: function makeSafe() {
        this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi));
        return this;
      }
    }, {
      key: "setFromVector3",
      value: function setFromVector3(v) {
        return this.setFromCartesianCoords(v.x, v.y, v.z);
      }
    }, {
      key: "setFromCartesianCoords",
      value: function setFromCartesianCoords(x, y, z) {
        this.radius = Math.sqrt(x * x + y * y + z * z);

        if (this.radius === 0) {
          this.theta = 0;
          this.phi = 0;
        } else {
          this.theta = Math.atan2(x, z);
          this.phi = Math.acos(Math.min(Math.max(y / this.radius, -1), 1));
        }

        return this;
      }
    }]);

    return Spherical;
  }();

  var PointerButton = {
    MAIN: 0,
    AUXILIARY: 1,
    SECONDARY: 2
  };
  var TWO_PI = Math.PI * 2;
  var v = new Vector3();
  var m = new Matrix4();

  var RotationManager = function () {
    function RotationManager(position, quaternion, target, settings) {
      _classCallCheck(this, RotationManager);

      this.position = position;
      this.quaternion = quaternion;
      this.target = target;
      this.settings = settings;
      this.spherical = new Spherical();
    }

    _createClass(RotationManager, [{
      key: "setPosition",
      value: function setPosition(position) {
        this.position = position;
        return this;
      }
    }, {
      key: "setQuaternion",
      value: function setQuaternion(quaternion) {
        this.quaternion = quaternion;
        return this;
      }
    }, {
      key: "setTarget",
      value: function setTarget(target) {
        this.target = target;
        return this;
      }
    }, {
      key: "updateQuaternion",
      value: function updateQuaternion() {
        var settings = this.settings;
        var rotation = settings.rotation;

        if (settings.general.orbit) {
          m.lookAt(v.subVectors(this.position, this.target), rotation.pivotOffset, rotation.up);
        } else {
          m.lookAt(v.set(0, 0, 0), this.target.setFromSpherical(this.spherical), rotation.up);
        }

        this.quaternion.setFromRotationMatrix(m);
        return this;
      }
    }, {
      key: "adjustSpherical",
      value: function adjustSpherical(theta, phi) {
        var settings = this.settings;
        var orbit = settings.general.orbit;
        var rotation = settings.rotation;
        var s = this.spherical;
        s.theta = !rotation.invertX ? s.theta - theta : s.theta + theta;
        s.phi = (orbit || rotation.invertY) && !(orbit && rotation.invertY) ? s.phi - phi : s.phi + phi;
        s.theta = Math.min(Math.max(s.theta, rotation.minAzimuthalAngle), rotation.maxAzimuthalAngle);
        s.phi = Math.min(Math.max(s.phi, rotation.minPolarAngle), rotation.maxPolarAngle);
        s.theta %= TWO_PI;
        s.makeSafe();

        if (orbit) {
          this.position.setFromSpherical(s).add(this.target);
        }

        return this;
      }
    }, {
      key: "zoom",
      value: function zoom(sign) {
        var settings = this.settings;
        var general = settings.general;
        var sensitivity = settings.sensitivity;
        var zoom = settings.zoom;
        var s = this.spherical;
        var amount, min, max;

        if (general.orbit && zoom.enabled) {
          amount = sign * sensitivity.zoom;

          if (zoom.invert) {
            amount = -amount;
          }

          min = Math.max(zoom.minDistance, 1e-6);
          max = Math.min(zoom.maxDistance, Infinity);
          s.radius = Math.min(Math.max(s.radius + amount, min), max);
          this.position.setFromSpherical(s).add(this.target);
        }

        return this;
      }
    }, {
      key: "update",
      value: function update(delta) {}
    }, {
      key: "lookAt",
      value: function lookAt(point) {
        var spherical = this.spherical;
        var position = this.position;
        var target = this.target;
        target.copy(point);

        if (this.settings.general.orbit) {
          v.subVectors(position, target);
        } else {
          v.subVectors(target, position).normalize();
        }

        spherical.setFromVector3(v);
        spherical.radius = Math.max(spherical.radius, 1e-6);
        this.updateQuaternion();
        return this;
      }
    }, {
      key: "getViewDirection",
      value: function getViewDirection() {
        var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Vector3();
        view.setFromSpherical(this.spherical).normalize();

        if (this.settings.general.orbit) {
          view.negate();
        }

        return view;
      }
    }]);

    return RotationManager;
  }();

  var MovementState = function () {
    function MovementState() {
      _classCallCheck(this, MovementState);

      this.left = false;
      this.right = false;
      this.forward = false;
      this.backward = false;
      this.up = false;
      this.down = false;
    }

    _createClass(MovementState, [{
      key: "reset",
      value: function reset() {
        this.left = false;
        this.right = false;
        this.forward = false;
        this.backward = false;
        this.up = false;
        this.down = false;
        return this;
      }
    }]);

    return MovementState;
  }();

  var x = new Vector3(1, 0, 0);
  var y = new Vector3(0, 1, 0);
  var z = new Vector3(0, 0, 1);
  var v$1 = new Vector3();

  var TranslationManager = function () {
    function TranslationManager(position, quaternion, target, settings) {
      _classCallCheck(this, TranslationManager);

      this.position = position;
      this.quaternion = quaternion;
      this.target = target;
      this.settings = settings;
      this.movementState = new MovementState();
    }

    _createClass(TranslationManager, [{
      key: "setPosition",
      value: function setPosition(position) {
        this.position = position;
        return this;
      }
    }, {
      key: "setQuaternion",
      value: function setQuaternion(quaternion) {
        this.quaternion = quaternion;
        return this;
      }
    }, {
      key: "setTarget",
      value: function setTarget(target) {
        this.target = target;
        return this;
      }
    }, {
      key: "translateOnAxis",
      value: function translateOnAxis(axis, distance) {
        v$1.copy(axis).applyQuaternion(this.quaternion).multiplyScalar(distance);
        this.position.add(v$1);

        if (this.settings.general.orbit) {
          this.target.add(v$1);
        }
      }
    }, {
      key: "translate",
      value: function translate(delta) {
        var sensitivity = this.settings.sensitivity;
        var state = this.movementState;
        var step = delta * sensitivity.translation;

        if (state.backward) {
          this.translateOnAxis(z, step);
        } else if (state.forward) {
          this.translateOnAxis(z, -step);
        }

        if (state.right) {
          this.translateOnAxis(x, step);
        } else if (state.left) {
          this.translateOnAxis(x, -step);
        }

        if (state.up) {
          this.translateOnAxis(y, step);
        } else if (state.down) {
          this.translateOnAxis(y, -step);
        }
      }
    }, {
      key: "update",
      value: function update(delta) {
        if (this.settings.translation.enabled) {
          this.translate(delta);
        }
      }
    }, {
      key: "moveTo",
      value: function moveTo(position) {
        if (this.settings.general.orbit) {
          this.target.copy(position);
        } else {
          this.position.copy(position);
        }

        return this;
      }
    }]);

    return TranslationManager;
  }();

  var KeyCodeHandler = {
    get: function get(target, name) {
      return name in target ? target[name] : name.length === 1 ? name.toUpperCase().charCodeAt(0) : undefined;
    }
  };
  var KeyCode = new Proxy({
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESCAPE: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    INSERT: 45,
    DELETE: 46,
    META_LEFT: 91,
    META_RIGHT: 92,
    SELECT: 93,
    NUMPAD_0: 96,
    NUMPAD_1: 97,
    NUMPAD_2: 98,
    NUMPAD_3: 99,
    NUMPAD_4: 100,
    NUMPAD_5: 101,
    NUMPAD_6: 102,
    NUMPAD_7: 103,
    NUMPAD_8: 104,
    NUMPAD_9: 105,
    MULTIPLY: 106,
    ADD: 107,
    SUBTRACT: 109,
    DECIMAL_POINT: 110,
    DIVIDE: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUM_LOCK: 144,
    SCROLL_LOCK: 145,
    SEMICOLON: 186,
    EQUAL_SIGN: 187,
    COMMA: 188,
    DASH: 189,
    PERIOD: 190,
    FORWARD_SLASH: 191,
    GRAVE_ACCENT: 192,
    OPEN_BRACKET: 219,
    BACK_SLASH: 220,
    CLOSE_BRACKET: 221,
    SINGLE_QUOTE: 222
  }, KeyCodeHandler);

  var GeneralSettings = function () {
    function GeneralSettings() {
      _classCallCheck(this, GeneralSettings);

      this.orbit = true;
    }

    _createClass(GeneralSettings, [{
      key: "copy",
      value: function copy(settings) {
        this.orbit = settings.orbit;
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return GeneralSettings;
  }();

  var KeyBindings = function () {
    function KeyBindings() {
      _classCallCheck(this, KeyBindings);

      this.defaultActions = new Map();
      this.actions = new Map();
    }

    _createClass(KeyBindings, [{
      key: "reset",
      value: function reset() {
        this.actions = new Map(this.defaultActions);
        return this;
      }
    }, {
      key: "setDefault",
      value: function setDefault(actions) {
        this.defaultActions = actions;
        return this.reset();
      }
    }, {
      key: "copy",
      value: function copy(keyBindings) {
        this.defaultActions = new Map(keyBindings.defaultActions);
        this.actions = new Map(keyBindings.actions);
        return this;
      }
    }, {
      key: "clearDefault",
      value: function clearDefault() {
        this.defaultActions.clear();
        return this;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.actions.clear();
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "has",
      value: function has(keyCode) {
        return this.actions.has(keyCode);
      }
    }, {
      key: "get",
      value: function get(keyCode) {
        return this.actions.get(keyCode);
      }
    }, {
      key: "set",
      value: function set(keyCode, action) {
        this.actions.set(keyCode, action);
        return this;
      }
    }, {
      key: "delete",
      value: function _delete(keyCode) {
        return this.actions["delete"](keyCode);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          defaultActions: _toConsumableArray(this.defaultActions),
          actions: _toConsumableArray(this.actions)
        };
      }
    }]);

    return KeyBindings;
  }();

  var PointerSettings = function () {
    function PointerSettings() {
      _classCallCheck(this, PointerSettings);

      this.hold = false;
      this.lock = true;
    }

    _createClass(PointerSettings, [{
      key: "copy",
      value: function copy(settings) {
        this.hold = settings.hold;
        this.lock = settings.lock;
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return PointerSettings;
  }();

  var RotationSettings = function () {
    function RotationSettings() {
      _classCallCheck(this, RotationSettings);

      this.up = new Vector3();
      this.up.copy(y);
      this.pivotOffset = new Vector3();
      this.minAzimuthalAngle = -Infinity;
      this.maxAzimuthalAngle = Infinity;
      this.minPolarAngle = 0.0;
      this.maxPolarAngle = Math.PI;
      this.invertX = false;
      this.invertY = false;
    }

    _createClass(RotationSettings, [{
      key: "copy",
      value: function copy(settings) {
        this.up.copy(settings.up);
        this.pivotOffset.copy(settings.pivotOffset);
        this.minAzimuthalAngle = settings.minAzimuthalAngle !== null ? settings.minAzimuthalAngle : -Infinity;
        this.maxAzimuthalAngle = settings.maxAzimuthalAngle !== null ? settings.maxAzimuthalAngle : Infinity;
        this.minPolarAngle = settings.minPolarAngle;
        this.maxPolarAngle = settings.maxPolarAngle;
        this.invertX = settings.invertX;
        this.invertY = settings.invertY;
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return RotationSettings;
  }();

  var SensitivitySettings = function () {
    function SensitivitySettings() {
      _classCallCheck(this, SensitivitySettings);

      this.rotation = 0.0025;
      this.translation = 1.0;
      this.zoom = 0.1;
    }

    _createClass(SensitivitySettings, [{
      key: "copy",
      value: function copy(settings) {
        this.rotation = settings.rotation;
        this.translation = settings.translation;
        this.zoom = settings.zoom;
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return SensitivitySettings;
  }();

  var TranslationSettings = function () {
    function TranslationSettings() {
      _classCallCheck(this, TranslationSettings);

      this.enabled = true;
    }

    _createClass(TranslationSettings, [{
      key: "copy",
      value: function copy(settings) {
        this.enabled = settings.enabled;
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return TranslationSettings;
  }();

  var ZoomSettings = function () {
    function ZoomSettings() {
      _classCallCheck(this, ZoomSettings);

      this.enabled = true;
      this.invert = false;
      this.minDistance = 1e-6;
      this.maxDistance = Infinity;
    }

    _createClass(ZoomSettings, [{
      key: "copy",
      value: function copy(settings) {
        this.enabled = settings.enabled;
        this.invert = settings.invert;
        this.minDistance = settings.minDistance;
        this.maxDistance = settings.maxDistance;
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return ZoomSettings;
  }();

  var Settings = function () {
    function Settings() {
      _classCallCheck(this, Settings);

      this.general = new GeneralSettings();
      this.keyBindings = new KeyBindings();
      this.keyBindings.setDefault(new Map([[KeyCode.W, Action.MOVE_FORWARD], [KeyCode.UP, Action.MOVE_FORWARD], [KeyCode.A, Action.MOVE_LEFT], [KeyCode.LEFT, Action.MOVE_LEFT], [KeyCode.S, Action.MOVE_BACKWARD], [KeyCode.DOWN, Action.MOVE_BACKWARD], [KeyCode.D, Action.MOVE_RIGHT], [KeyCode.RIGHT, Action.MOVE_RIGHT], [KeyCode.X, Action.MOVE_DOWN], [KeyCode.SPACE, Action.MOVE_UP], [KeyCode.PAGE_DOWN, Action.ZOOM_OUT], [KeyCode.PAGE_UP, Action.ZOOM_IN]]));
      this.pointer = new PointerSettings();
      this.rotation = new RotationSettings();
      this.sensitivity = new SensitivitySettings();
      this.translation = new TranslationSettings();
      this.zoom = new ZoomSettings();
    }

    _createClass(Settings, [{
      key: "copy",
      value: function copy(settings) {
        this.general.copy(settings.general);
        this.keyBindings.copy(settings.keyBindings);
        this.pointer.copy(settings.pointer);
        this.rotation.copy(settings.rotation);
        this.sensitivity.copy(settings.sensitivity);
        this.translation.copy(settings.translation);
        this.zoom.copy(settings.zoom);
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "toDataURL",
      value: function toDataURL() {
        return URL.createObjectURL(new Blob([JSON.stringify(this)], {
          type: "text/json"
        }));
      }
    }]);

    return Settings;
  }();

  var Strategy = function () {
    function Strategy() {
      _classCallCheck(this, Strategy);
    }

    _createClass(Strategy, [{
      key: "execute",
      value: function execute(flag) {
        throw new Error("Strategy#execute method not implemented!");
      }
    }]);

    return Strategy;
  }();

  var MovementStrategy = function (_Strategy) {
    _inherits(MovementStrategy, _Strategy);

    function MovementStrategy(movementState, direction) {
      var _this7;

      _classCallCheck(this, MovementStrategy);

      _this7 = _possibleConstructorReturn(this, _getPrototypeOf(MovementStrategy).call(this));
      _this7.movementState = movementState;
      _this7.direction = direction;
      return _this7;
    }

    _createClass(MovementStrategy, [{
      key: "execute",
      value: function execute(flag) {
        var state = this.movementState;

        switch (this.direction) {
          case Direction.FORWARD:
            state.forward = flag;
            break;

          case Direction.LEFT:
            state.left = flag;
            break;

          case Direction.BACKWARD:
            state.backward = flag;
            break;

          case Direction.RIGHT:
            state.right = flag;
            break;

          case Direction.DOWN:
            state.down = flag;
            break;

          case Direction.UP:
            state.up = flag;
            break;
        }
      }
    }]);

    return MovementStrategy;
  }(Strategy);

  var Direction = {
    FORWARD: 0,
    LEFT: 1,
    BACKWARD: 2,
    RIGHT: 3,
    DOWN: 4,
    UP: 5
  };

  var ZoomStrategy = function (_Strategy2) {
    _inherits(ZoomStrategy, _Strategy2);

    function ZoomStrategy(rotationManager, zoomIn) {
      var _this8;

      _classCallCheck(this, ZoomStrategy);

      _this8 = _possibleConstructorReturn(this, _getPrototypeOf(ZoomStrategy).call(this));
      _this8.rotationManager = rotationManager;
      _this8.zoomIn = zoomIn;
      return _this8;
    }

    _createClass(ZoomStrategy, [{
      key: "execute",
      value: function execute(flag) {
        if (flag) {
          this.rotationManager.zoom(this.zoomIn ? -1 : 1);
        }
      }
    }]);

    return ZoomStrategy;
  }(Strategy);

  var DeltaControls = function () {
    function DeltaControls() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var quaternion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var dom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.body;

      _classCallCheck(this, DeltaControls);

      this.dom = dom;
      this.position = position;
      this.quaternion = quaternion;
      this.target = new Vector3();
      this.settings = new Settings();
      this.rotationManager = new RotationManager(position, quaternion, this.target, this.settings);
      this.translationManager = new TranslationManager(position, quaternion, this.target, this.settings);

      this.strategies = function (rotationManager, translationManager) {
        var state = translationManager.movementState;
        return new Map([[Action.MOVE_FORWARD, new MovementStrategy(state, Direction.FORWARD)], [Action.MOVE_LEFT, new MovementStrategy(state, Direction.LEFT)], [Action.MOVE_BACKWARD, new MovementStrategy(state, Direction.BACKWARD)], [Action.MOVE_RIGHT, new MovementStrategy(state, Direction.RIGHT)], [Action.MOVE_DOWN, new MovementStrategy(state, Direction.DOWN)], [Action.MOVE_UP, new MovementStrategy(state, Direction.UP)], [Action.ZOOM_OUT, new ZoomStrategy(rotationManager, false)], [Action.ZOOM_IN, new ZoomStrategy(rotationManager, true)]]);
      }(this.rotationManager, this.translationManager);

      this.lastScreenPosition = new Vector2();
      this.dragging = false;
      this.enabled = false;

      if (position !== null && quaternion !== null) {
        this.lookAt(this.target);

        if (dom !== null) {
          this.setEnabled();
        }
      }
    }

    _createClass(DeltaControls, [{
      key: "getDom",
      value: function getDom() {
        return this.dom;
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return this.position;
      }
    }, {
      key: "getQuaternion",
      value: function getQuaternion() {
        return this.quaternion;
      }
    }, {
      key: "getTarget",
      value: function getTarget() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Vector3();
        target.copy(this.target);

        if (!this.settings.general.orbit) {
          target.add(this.position);
        }

        return target;
      }
    }, {
      key: "getViewDirection",
      value: function getViewDirection() {
        var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Vector3();
        return this.rotationManager.getViewDirection(view);
      }
    }, {
      key: "setDom",
      value: function setDom(dom) {
        var enabled = this.enabled;

        if (dom !== null) {
          if (enabled) {
            this.setEnabled(false);
          }

          this.dom = dom;
          this.setEnabled(enabled);
        }

        return this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(position) {
        this.position = position;
        this.rotationManager.setPosition(position);
        this.translationManager.setPosition(position);
        return this.lookAt(this.target);
      }
    }, {
      key: "setQuaternion",
      value: function setQuaternion(quaternion) {
        this.quaternion = quaternion;
        this.rotationManager.setQuaternion(quaternion);
        this.translationManager.setQuaternion(quaternion);
        return this.lookAt(this.target);
      }
    }, {
      key: "setTarget",
      value: function setTarget(target) {
        this.target = target;
        this.rotationManager.setTarget(target);
        this.translationManager.setTarget(target);
        return this.lookAt(this.target);
      }
    }, {
      key: "setOrbitEnabled",
      value: function setOrbitEnabled(orbit) {
        var general = this.settings.general;

        if (general.orbit !== orbit) {
          this.getTarget(this.target);
          general.orbit = orbit;
          this.lookAt(this.target);
        }

        return this;
      }
    }, {
      key: "copy",
      value: function copy(controls) {
        this.dom = controls.getDom();
        this.position = controls.getPosition();
        this.quaternion = controls.getQuaternion();
        this.target = controls.getTarget();
        this.settings.copy(controls.settings);
        this.rotationManager.setPosition(this.position).setQuaternion(this.quaternion).setTarget(this.target);
        this.translationManager.setPosition(this.position).setQuaternion(this.quaternion).setTarget(this.target);
        return this.lookAt(this.target);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "handlePointerMoveEvent",
      value: function handlePointerMoveEvent(event) {
        var settings = this.settings;
        var pointer = settings.pointer;
        var sensitivity = settings.sensitivity;
        var rotationManager = this.rotationManager;
        var lastScreenPosition = this.lastScreenPosition;
        var movementX, movementY;

        if (document.pointerLockElement === this.dom) {
          if (!pointer.hold || this.dragging) {
            rotationManager.adjustSpherical(event.movementX * sensitivity.rotation, event.movementY * sensitivity.rotation).updateQuaternion();
          }
        } else {
          movementX = event.screenX - lastScreenPosition.x;
          movementY = event.screenY - lastScreenPosition.y;
          lastScreenPosition.set(event.screenX, event.screenY);
          rotationManager.adjustSpherical(movementX * sensitivity.rotation, movementY * sensitivity.rotation).updateQuaternion();
        }
      }
    }, {
      key: "handleTouchMoveEvent",
      value: function handleTouchMoveEvent(event) {
        var sensitivity = this.settings.sensitivity;
        var rotationManager = this.rotationManager;
        var lastScreenPosition = this.lastScreenPosition;
        var touch = event.touches[0];
        var movementX = touch.screenX - lastScreenPosition.x;
        var movementY = touch.screenY - lastScreenPosition.y;
        lastScreenPosition.set(touch.screenX, touch.screenY);
        event.preventDefault();
        rotationManager.adjustSpherical(movementX * sensitivity.rotation, movementY * sensitivity.rotation).updateQuaternion();
      }
    }, {
      key: "handleMainPointerButton",
      value: function handleMainPointerButton(event, pressed) {
        this.dragging = pressed;

        if (this.settings.pointer.lock) {
          this.setPointerLocked();
        } else {
          if (pressed) {
            this.lastScreenPosition.set(event.screenX, event.screenY);
            this.dom.addEventListener("mousemove", this);
          } else {
            this.dom.removeEventListener("mousemove", this);
          }
        }
      }
    }, {
      key: "handleAuxiliaryPointerButton",
      value: function handleAuxiliaryPointerButton(event, pressed) {}
    }, {
      key: "handleSecondaryPointerButton",
      value: function handleSecondaryPointerButton(event, pressed) {}
    }, {
      key: "handlePointerButtonEvent",
      value: function handlePointerButtonEvent(event, pressed) {
        event.preventDefault();

        switch (event.button) {
          case PointerButton.MAIN:
            this.handleMainPointerButton(event, pressed);
            break;

          case PointerButton.AUXILIARY:
            this.handleAuxiliaryPointerButton(event, pressed);
            break;

          case PointerButton.SECONDARY:
            this.handleSecondaryPointerButton(event, pressed);
            break;
        }
      }
    }, {
      key: "handleTouchEvent",
      value: function handleTouchEvent(event, start) {
        var touch = event.touches[0];
        event.preventDefault();

        if (start) {
          this.lastScreenPosition.set(touch.screenX, touch.screenY);
          this.dom.addEventListener("touchmove", this);
        } else {
          this.dom.removeEventListener("touchmove", this);
        }
      }
    }, {
      key: "handleKeyboardEvent",
      value: function handleKeyboardEvent(event, pressed) {
        var keyBindings = this.settings.keyBindings;

        if (keyBindings.has(event.keyCode)) {
          event.preventDefault();
          this.strategies.get(keyBindings.get(event.keyCode)).execute(pressed);
        }
      }
    }, {
      key: "handleWheelEvent",
      value: function handleWheelEvent(event) {
        this.rotationManager.zoom(Math.sign(event.deltaY));
      }
    }, {
      key: "handlePointerLockEvent",
      value: function handlePointerLockEvent() {
        if (document.pointerLockElement === this.dom) {
          this.dom.addEventListener("mousemove", this);
        } else {
          this.dom.removeEventListener("mousemove", this);
        }
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(event) {
        switch (event.type) {
          case "mousemove":
            this.handlePointerMoveEvent(event);
            break;

          case "touchmove":
            this.handleTouchMoveEvent(event);
            break;

          case "mousedown":
            this.handlePointerButtonEvent(event, true);
            break;

          case "mouseup":
            this.handlePointerButtonEvent(event, false);
            break;

          case "touchstart":
            this.handleTouchEvent(event, true);
            break;

          case "touchend":
            this.handleTouchEvent(event, false);
            break;

          case "keydown":
            this.handleKeyboardEvent(event, true);
            break;

          case "keyup":
            this.handleKeyboardEvent(event, false);
            break;

          case "wheel":
            this.handleWheelEvent(event);
            break;

          case "pointerlockchange":
            this.handlePointerLockEvent();
            break;
        }
      }
    }, {
      key: "update",
      value: function update(delta) {
        this.rotationManager.update(delta);
        this.translationManager.update(delta);
      }
    }, {
      key: "moveTo",
      value: function moveTo(position) {
        this.rotationManager.moveTo(position);
        return this;
      }
    }, {
      key: "lookAt",
      value: function lookAt(point) {
        this.rotationManager.lookAt(point);
        return this;
      }
    }, {
      key: "setPointerLocked",
      value: function setPointerLocked() {
        var locked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (locked) {
          if (document.pointerLockElement !== this.dom && this.dom.requestPointerLock !== undefined) {
            this.dom.requestPointerLock();
          }
        } else if (document.exitPointerLock !== undefined) {
          document.exitPointerLock();
        }
      }
    }, {
      key: "setEnabled",
      value: function setEnabled() {
        var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var dom = this.dom;
        this.translationManager.movementState.reset();

        if (enabled && !this.enabled) {
          document.addEventListener("pointerlockchange", this);
          document.body.addEventListener("keyup", this);
          document.body.addEventListener("keydown", this);
          dom.addEventListener("mousedown", this);
          dom.addEventListener("mouseup", this);
          dom.addEventListener("touchstart", this);
          dom.addEventListener("touchend", this);
          dom.addEventListener("wheel", this);
        } else if (!enabled && this.enabled) {
          document.removeEventListener("pointerlockchange", this);
          document.body.removeEventListener("keyup", this);
          document.body.removeEventListener("keydown", this);
          dom.removeEventListener("mousedown", this);
          dom.removeEventListener("mouseup", this);
          dom.removeEventListener("touchstart", this);
          dom.removeEventListener("touchend", this);
          dom.removeEventListener("wheel", this);
          dom.removeEventListener("mousemove", this);
          dom.removeEventListener("touchmove", this);
        }

        this.setPointerLocked(false);
        this.enabled = enabled;
        return this;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.setEnabled(false);
      }
    }]);

    return DeltaControls;
  }();

  var OctreeDemo = function (_Demo) {
    _inherits(OctreeDemo, _Demo);

    function OctreeDemo() {
      var _this9;

      _classCallCheck(this, OctreeDemo);

      _this9 = _possibleConstructorReturn(this, _getPrototypeOf(OctreeDemo).call(this, "octree"));
      _this9.octreeHelper = null;
      return _this9;
    }

    _createClass(OctreeDemo, [{
      key: "initialize",
      value: function initialize() {
        var scene = this.scene;
        var renderer = this.renderer;
        var camera = new three.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.3, 2000);
        camera.position.set(10, 6, 10);
        this.camera = camera;
        var controls = new DeltaControls(camera.position, camera.quaternion, renderer.domElement);
        controls.settings.pointer.lock = false;
        controls.settings.zoom.maxDistance = 60.0;
        controls.settings.sensitivity.translation = 10.0;
        controls.settings.sensitivity.zoom = 1.0;
        controls.lookAt(scene.position);
        this.controls = controls;
        scene.fog = new three.FogExp2(0x0d0d0d, 0.025);
        renderer.setClearColor(scene.fog.color);
      }
    }, {
      key: "render",
      value: function render(delta) {
        this.controls.update(delta);

        _get(_getPrototypeOf(OctreeDemo.prototype), "render", this).call(this, delta);
      }
    }, {
      key: "registerOptions",
      value: function registerOptions(menu) {
        var points = this.points;
        var octreeHelper = this.octreeHelper;
        this.raycaster.registerOptions(menu);
        this.frustumCuller.registerOptions(menu);
      }
    }]);

    return OctreeDemo;
  }(Demo);

  var manager;

  function render(now) {
    requestAnimationFrame(render);
    manager.render(now);
  }

  function onChange(event) {
    document.getElementById("viewport").children[0].style.display = "initial";
  }

  function onLoad(event) {
    document.getElementById("viewport").children[0].style.display = "none";
  }

  window.addEventListener("load", function main(event) {
    var viewport = document.getElementById("viewport");
    var renderer = new three.WebGLRenderer({
      antialias: true
    });
    renderer.setSize(viewport.clientWidth, viewport.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000);
    manager = new DemoManager(viewport, {
      aside: document.getElementById("aside"),
      renderer: renderer
    });
    manager.addEventListener("change", onChange);
    manager.addEventListener("load", onLoad);
    var demo = new OctreeDemo();

    if (demo.id !== window.location.hash.slice(1)) {
      window.location.hash = "";
    }

    manager.addDemo(demo);
    render();
  });
  window.addEventListener("resize", function () {
    var timeoutId = 0;

    function handleResize(event) {
      var width = event.target.innerWidth;
      var height = event.target.innerHeight;
      manager.setSize(width, height);
      timeoutId = 0;
    }

    return function onResize(event) {
      if (timeoutId === 0) {
        timeoutId = setTimeout(handleResize, 66, event);
      }
    };
  }());
  document.addEventListener("keydown", function onKeyDown(event) {
    var aside = this.getElementById("aside");

    if (event.altKey && aside !== null) {
      event.preventDefault();
      aside.style.visibility = aside.style.visibility === "hidden" ? "visible" : "hidden";
    }
  });

}(THREE));
