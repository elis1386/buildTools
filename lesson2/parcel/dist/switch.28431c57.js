// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/output.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printError = printError;
exports.clearParagraph = clearParagraph;
exports.timerHTML = exports.calcHTML = exports.printResult = void 0;
var paragraph = document.getElementById('output');

function printError(errorText) {
  if (paragraph === undefined) return;else paragraph.innerHTML = errorText;
}

function clearParagraph() {
  paragraph.innerHTML = '';
}

var printResult = function printResult(_ref) {
  var years = _ref.years,
      months = _ref.months,
      days = _ref.days;
  paragraph.innerHTML = "\n        ".concat(years, " \u043B\u0435\u0442\n        ").concat(months, " \u043C\u0435\u0441\u044F\u0446\u0435\u0432\n        ").concat(days, " \u0434\u043D\u0435\u0439\n    ");
};

exports.printResult = printResult;
var calcHTML = "<h2 class=\"text\">\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u0434\u0430\u0442</h2>\n                <form id=\"calcDate\">\n                    <label for=\"dateFrom\">\n                        \u041F\u0435\u0440\u0432\u0430\u044F \u0434\u0430\u0442\u0430:\n                        <input type=\"date\" name=\"dateFrom\">\n                    </label>\n                    <label for=\"dateTo\">\n                        \u0412\u0442\u043E\u0440\u0430\u044F \u0434\u0430\u0442\u0430:\n                        <input type=\"date\" name=\"dateTo\">\n                    </label>\n                    <button type=\"submit\">\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u043A</button>\n                </form>";
exports.calcHTML = calcHTML;
var timerHTML = "<h2 class=\"text\">\u0422\u0430\u0439\u043C\u0435\u0440</h2>\n                 <div class=\"timer\" style=\"float: left; margin-right: 10px;\"></div>\n                 <input type=\"text\" name=\"time\" class=\"time\" placeholder=\"\u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445...\">\n                 <button class=\"start\">\u0421\u0442\u0430\u0440\u0442</button>\n                 <button class=\"pause\">\u0421\u0442\u043E\u043F</button>";
exports.timerHTML = timerHTML;
},{}],"js/luxon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Zone = exports.VERSION = exports.SystemZone = exports.Settings = exports.InvalidZone = exports.Interval = exports.Info = exports.IANAZone = exports.FixedOffsetZone = exports.Duration = exports.DateTime = void 0;
var _excluded = ["base"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e30) { throw _e30; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e31) { didErr = true; err = _e31; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var e = /*#__PURE__*/function (_Error) {
  _inherits(e, _Error);

  var _super = _createSuper(e);

  function e() {
    _classCallCheck(this, e);

    return _super.apply(this, arguments);
  }

  return e;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var r = /*#__PURE__*/function (_e2) {
  _inherits(r, _e2);

  var _super2 = _createSuper(r);

  function r(e) {
    _classCallCheck(this, r);

    return _super2.call(this, "Invalid DateTime: ".concat(e.toMessage()));
  }

  return r;
}(e);

var n = /*#__PURE__*/function (_e3) {
  _inherits(n, _e3);

  var _super3 = _createSuper(n);

  function n(e) {
    _classCallCheck(this, n);

    return _super3.call(this, "Invalid Interval: ".concat(e.toMessage()));
  }

  return n;
}(e);

var s = /*#__PURE__*/function (_e4) {
  _inherits(s, _e4);

  var _super4 = _createSuper(s);

  function s(e) {
    _classCallCheck(this, s);

    return _super4.call(this, "Invalid Duration: ".concat(e.toMessage()));
  }

  return s;
}(e);

var N = /*#__PURE__*/function (_e5) {
  _inherits(N, _e5);

  var _super5 = _createSuper(N);

  function N() {
    _classCallCheck(this, N);

    return _super5.apply(this, arguments);
  }

  return N;
}(e);

var i = /*#__PURE__*/function (_e6) {
  _inherits(i, _e6);

  var _super6 = _createSuper(i);

  function i(e) {
    _classCallCheck(this, i);

    return _super6.call(this, "Invalid unit ".concat(e));
  }

  return i;
}(e);

var a = /*#__PURE__*/function (_e7) {
  _inherits(a, _e7);

  var _super7 = _createSuper(a);

  function a() {
    _classCallCheck(this, a);

    return _super7.apply(this, arguments);
  }

  return a;
}(e);

var o = /*#__PURE__*/function (_e8) {
  _inherits(o, _e8);

  var _super8 = _createSuper(o);

  function o() {
    _classCallCheck(this, o);

    return _super8.call(this, "Zone is an abstract class");
  }

  return o;
}(e);

var t = "numeric",
    u = "short",
    l = "long";
var c = {
  year: t,
  month: t,
  day: t
},
    h = {
  year: t,
  month: u,
  day: t
},
    d = {
  year: t,
  month: u,
  day: t,
  weekday: u
},
    m = {
  year: t,
  month: l,
  day: t
},
    f = {
  year: t,
  month: l,
  day: t,
  weekday: l
},
    y = {
  hour: t,
  minute: t
},
    g = {
  hour: t,
  minute: t,
  second: t
},
    w = {
  hour: t,
  minute: t,
  second: t,
  timeZoneName: u
},
    p = {
  hour: t,
  minute: t,
  second: t,
  timeZoneName: l
},
    v = {
  hour: t,
  minute: t,
  hourCycle: "h23"
},
    T = {
  hour: t,
  minute: t,
  second: t,
  hourCycle: "h23"
},
    S = {
  hour: t,
  minute: t,
  second: t,
  hourCycle: "h23",
  timeZoneName: u
},
    O = {
  hour: t,
  minute: t,
  second: t,
  hourCycle: "h23",
  timeZoneName: l
},
    b = {
  year: t,
  month: t,
  day: t,
  hour: t,
  minute: t
},
    M = {
  year: t,
  month: t,
  day: t,
  hour: t,
  minute: t,
  second: t
},
    k = {
  year: t,
  month: u,
  day: t,
  hour: t,
  minute: t
},
    D = {
  year: t,
  month: u,
  day: t,
  hour: t,
  minute: t,
  second: t
},
    E = {
  year: t,
  month: u,
  day: t,
  weekday: u,
  hour: t,
  minute: t
},
    V = {
  year: t,
  month: l,
  day: t,
  hour: t,
  minute: t,
  timeZoneName: u
},
    I = {
  year: t,
  month: l,
  day: t,
  hour: t,
  minute: t,
  second: t,
  timeZoneName: u
},
    x = {
  year: t,
  month: l,
  day: t,
  weekday: l,
  hour: t,
  minute: t,
  timeZoneName: l
},
    C = {
  year: t,
  month: l,
  day: t,
  weekday: l,
  hour: t,
  minute: t,
  second: t,
  timeZoneName: l
};

function $(e) {
  return void 0 === e;
}

function Z(e) {
  return "number" == typeof e;
}

function F(e) {
  return "number" == typeof e && e % 1 == 0;
}

function L() {
  try {
    return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return !1;
  }
}

function z(e, r, n) {
  if (0 !== e.length) return e.reduce(function (e, t) {
    t = [r(t), t];
    return e && n(e[0], t[0]) === e[0] ? e : t;
  }, null)[1];
}

function q(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}

function A(e, t, r) {
  return F(e) && t <= e && e <= r;
}

function j(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var r = e < 0 ? "-" : "";
  var n = r ? -1 * e : e;
  var s;
  return s = n.toString().length < t ? ("0".repeat(t) + n).slice(-t) : n.toString(), "".concat(r).concat(s);
}

function _(e) {
  if (!$(e) && null !== e && "" !== e) return parseInt(e, 10);
}

function U(e) {
  if (!$(e) && null !== e && "" !== e) {
    e = 1e3 * parseFloat("0." + e);
    return Math.floor(e);
  }
}

function H(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var n = Math.pow(10, t),
      s = r ? Math.trunc : Math.round;
  return s(e * n) / n;
}

function W(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}

function R(e) {
  return W(e) ? 366 : 365;
}

function P(e, t) {
  var r,
      n,
      n = (r = t - 1) - (n = 12) * Math.floor(r / n) + 1;
  return 2 == n ? W(e + (t - n) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}

function J(e) {
  var t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
  return e.year < 100 && 0 <= e.year && (t = new Date(t), t.setUTCFullYear(t.getUTCFullYear() - 1900)), +t;
}

function Y(e) {
  var t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7,
      e = e - 1,
      e = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7;
  return 4 == t || 3 == e ? 53 : 52;
}

function G(e) {
  return 99 < e ? e : 60 < e ? 1900 + e : 2e3 + e;
}

function B(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var s = new Date(e),
      i = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  n && (i.timeZone = n);
  t = _objectSpread({
    timeZoneName: t
  }, i), t = new Intl.DateTimeFormat(r, t).formatToParts(s).find(function (e) {
    return "timezonename" === e.type.toLowerCase();
  });
  return t ? t.value : null;
}

function Q(e, t) {
  var r = parseInt(e, 10);
  Number.isNaN(r) && (r = 0);
  t = parseInt(t, 10) || 0, t = r < 0 || Object.is(r, -0) ? -t : t;
  return 60 * r + t;
}

function K(e) {
  var t = Number(e);
  if ("boolean" == typeof e || "" === e || Number.isNaN(t)) throw new a("Invalid unit value ".concat(e));
  return t;
}

function X(e, t) {
  var r = {};

  for (var _s in e) {
    var n;
    !q(e, _s) || null != (n = e[_s]) && (r[t(_s)] = K(n));
  }

  return r;
}

function ee(e, t) {
  var r = Math.trunc(Math.abs(e / 60)),
      n = Math.trunc(Math.abs(e % 60)),
      s = 0 <= e ? "+" : "-";

  switch (t) {
    case "short":
      return "".concat(s).concat(j(r, 2), ":").concat(j(n, 2));

    case "narrow":
      return "".concat(s).concat(r).concat(0 < n ? ":".concat(n) : "");

    case "techie":
      return "".concat(s).concat(j(r, 2)).concat(j(n, 2));

    default:
      throw new RangeError("Value format ".concat(t, " is out of range for property format"));
  }
}

function te(e) {
  return r = e, ["hour", "minute", "second", "millisecond"].reduce(function (e, t) {
    return e[t] = r[t], e;
  }, {});
  var r;
}

var re = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
var ne = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    se = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    ie = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function ae(e) {
  switch (e) {
    case "narrow":
      return [].concat(ie);

    case "short":
      return [].concat(se);

    case "long":
      return [].concat(ne);

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}

var oe = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    ue = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    le = ["M", "T", "W", "T", "F", "S", "S"];

function ce(e) {
  switch (e) {
    case "narrow":
      return [].concat(le);

    case "short":
      return [].concat(ue);

    case "long":
      return [].concat(oe);

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}

var he = ["AM", "PM"],
    de = ["Before Christ", "Anno Domini"],
    me = ["BC", "AD"],
    fe = ["B", "A"];

function ye(e) {
  switch (e) {
    case "narrow":
      return [].concat(fe);

    case "short":
      return [].concat(me);

    case "long":
      return [].concat(de);

    default:
      return null;
  }
}

function ge(e, t) {
  var r = "";

  var _iterator = _createForOfIteratorHelper(e),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _n = _step.value;
      _n.literal ? r += _n.val : r += t(_n.val);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return r;
}

var we = {
  D: c,
  DD: h,
  DDD: m,
  DDDD: f,
  t: y,
  tt: g,
  ttt: w,
  tttt: p,
  T: v,
  TT: T,
  TTT: S,
  TTTT: O,
  f: b,
  ff: k,
  fff: V,
  ffff: x,
  F: M,
  FF: D,
  FFF: I,
  FFFF: C
};

var pe = /*#__PURE__*/function () {
  function pe(e, t) {
    _classCallCheck(this, pe);

    this.opts = t, this.loc = e, this.systemLoc = null;
  }

  _createClass(pe, [{
    key: "formatWithSystemDefault",
    value: function formatWithSystemDefault(e, t) {
      null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem());
      var r = this.systemLoc.dtFormatter(e, _objectSpread(_objectSpread({}, this.opts), t));
      return r.format();
    }
  }, {
    key: "formatDateTime",
    value: function formatDateTime(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var r = this.loc.dtFormatter(e, _objectSpread(_objectSpread({}, this.opts), t));
      return r.format();
    }
  }, {
    key: "formatDateTimeParts",
    value: function formatDateTimeParts(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var r = this.loc.dtFormatter(e, _objectSpread(_objectSpread({}, this.opts), t));
      return r.formatToParts();
    }
  }, {
    key: "resolvedOptions",
    value: function resolvedOptions(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var r = this.loc.dtFormatter(e, _objectSpread(_objectSpread({}, this.opts), t));
      return r.resolvedOptions();
    }
  }, {
    key: "num",
    value: function num(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (this.opts.forceSimple) return j(e, t);

      var r = _objectSpread({}, this.opts);

      return 0 < t && (r.padTo = t), this.loc.numberFormatter(r).format(e);
    }
  }, {
    key: "formatDateTimeFromString",
    value: function formatDateTimeFromString(r, e) {
      var _this = this;

      var n = "en" === this.loc.listingMode(),
          t = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar,
          s = function s(e, t) {
        return _this.loc.extract(r, e, t);
      },
          i = function i(e) {
        return r.isOffsetFixed && 0 === r.offset && e.allowZ ? "Z" : r.isValid ? r.zone.formatOffset(r.ts, e.format) : "";
      },
          a = function a() {
        return n ? function (e) {
          return he[e.hour < 12 ? 0 : 1];
        }(r) : s({
          hour: "numeric",
          hourCycle: "h12"
        }, "dayperiod");
      },
          o = function o(e, t) {
        return n ? function (e, t) {
          return ae(t)[e.month - 1];
        }(r, e) : s(t ? {
          month: e
        } : {
          month: e,
          day: "numeric"
        }, "month");
      },
          u = function u(e, t) {
        return n ? function (e, t) {
          return ce(t)[e.weekday - 1];
        }(r, e) : s(t ? {
          weekday: e
        } : {
          weekday: e,
          month: "long",
          day: "numeric"
        }, "weekday");
      },
          l = function l(e) {
        var t = pe.macroTokenToFormatOpts(e);
        return t ? _this.formatWithSystemDefault(r, t) : e;
      },
          c = function c(e) {
        return n ? function (e, t) {
          return ye(t)[e.year < 0 ? 0 : 1];
        }(r, e) : s({
          era: e
        }, "era");
      };

      return ge(pe.parseFormat(e), function (e) {
        switch (e) {
          case "S":
            return _this.num(r.millisecond);

          case "u":
          case "SSS":
            return _this.num(r.millisecond, 3);

          case "s":
            return _this.num(r.second);

          case "ss":
            return _this.num(r.second, 2);

          case "m":
            return _this.num(r.minute);

          case "mm":
            return _this.num(r.minute, 2);

          case "h":
            return _this.num(r.hour % 12 == 0 ? 12 : r.hour % 12);

          case "hh":
            return _this.num(r.hour % 12 == 0 ? 12 : r.hour % 12, 2);

          case "H":
            return _this.num(r.hour);

          case "HH":
            return _this.num(r.hour, 2);

          case "Z":
            return i({
              format: "narrow",
              allowZ: _this.opts.allowZ
            });

          case "ZZ":
            return i({
              format: "short",
              allowZ: _this.opts.allowZ
            });

          case "ZZZ":
            return i({
              format: "techie",
              allowZ: _this.opts.allowZ
            });

          case "ZZZZ":
            return r.zone.offsetName(r.ts, {
              format: "short",
              locale: _this.loc.locale
            });

          case "ZZZZZ":
            return r.zone.offsetName(r.ts, {
              format: "long",
              locale: _this.loc.locale
            });

          case "z":
            return r.zoneName;

          case "a":
            return a();

          case "d":
            return t ? s({
              day: "numeric"
            }, "day") : _this.num(r.day);

          case "dd":
            return t ? s({
              day: "2-digit"
            }, "day") : _this.num(r.day, 2);

          case "c":
            return _this.num(r.weekday);

          case "ccc":
            return u("short", !0);

          case "cccc":
            return u("long", !0);

          case "ccccc":
            return u("narrow", !0);

          case "E":
            return _this.num(r.weekday);

          case "EEE":
            return u("short", !1);

          case "EEEE":
            return u("long", !1);

          case "EEEEE":
            return u("narrow", !1);

          case "L":
            return t ? s({
              month: "numeric",
              day: "numeric"
            }, "month") : _this.num(r.month);

          case "LL":
            return t ? s({
              month: "2-digit",
              day: "numeric"
            }, "month") : _this.num(r.month, 2);

          case "LLL":
            return o("short", !0);

          case "LLLL":
            return o("long", !0);

          case "LLLLL":
            return o("narrow", !0);

          case "M":
            return t ? s({
              month: "numeric"
            }, "month") : _this.num(r.month);

          case "MM":
            return t ? s({
              month: "2-digit"
            }, "month") : _this.num(r.month, 2);

          case "MMM":
            return o("short", !1);

          case "MMMM":
            return o("long", !1);

          case "MMMMM":
            return o("narrow", !1);

          case "y":
            return t ? s({
              year: "numeric"
            }, "year") : _this.num(r.year);

          case "yy":
            return t ? s({
              year: "2-digit"
            }, "year") : _this.num(r.year.toString().slice(-2), 2);

          case "yyyy":
            return t ? s({
              year: "numeric"
            }, "year") : _this.num(r.year, 4);

          case "yyyyyy":
            return t ? s({
              year: "numeric"
            }, "year") : _this.num(r.year, 6);

          case "G":
            return c("short");

          case "GG":
            return c("long");

          case "GGGGG":
            return c("narrow");

          case "kk":
            return _this.num(r.weekYear.toString().slice(-2), 2);

          case "kkkk":
            return _this.num(r.weekYear, 4);

          case "W":
            return _this.num(r.weekNumber);

          case "WW":
            return _this.num(r.weekNumber, 2);

          case "o":
            return _this.num(r.ordinal);

          case "ooo":
            return _this.num(r.ordinal, 3);

          case "q":
            return _this.num(r.quarter);

          case "qq":
            return _this.num(r.quarter, 2);

          case "X":
            return _this.num(Math.floor(r.ts / 1e3));

          case "x":
            return _this.num(r.ts);

          default:
            return l(e);
        }
      });
    }
  }, {
    key: "formatDurationFromString",
    value: function formatDurationFromString(e, t) {
      var _this2 = this;

      var r = function r(e) {
        switch (e[0]) {
          case "S":
            return "millisecond";

          case "s":
            return "second";

          case "m":
            return "minute";

          case "h":
            return "hour";

          case "d":
            return "day";

          case "M":
            return "month";

          case "y":
            return "year";

          default:
            return null;
        }
      },
          n = pe.parseFormat(t),
          s = n.reduce(function (e, _ref) {
        var t = _ref.literal,
            r = _ref.val;
        return t ? e : e.concat(r);
      }, []),
          i = e.shiftTo.apply(e, _toConsumableArray(s.map(r).filter(function (e) {
        return e;
      })));

      return ge(n, (a = i, function (e) {
        var t = r(e);
        return t ? _this2.num(a.get(t), e.length) : e;
      }));
      var a;
    }
  }], [{
    key: "create",
    value: function create(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new pe(e, t);
    }
  }, {
    key: "parseFormat",
    value: function parseFormat(t) {
      var r = null,
          n = "",
          s = !1;
      var i = [];

      for (var _e9 = 0; _e9 < t.length; _e9++) {
        var a = t.charAt(_e9);
        "'" === a ? (0 < n.length && i.push({
          literal: s,
          val: n
        }), r = null, n = "", s = !s) : s || a === r ? n += a : (0 < n.length && i.push({
          literal: !1,
          val: n
        }), n = a, r = a);
      }

      return 0 < n.length && i.push({
        literal: s,
        val: n
      }), i;
    }
  }, {
    key: "macroTokenToFormatOpts",
    value: function macroTokenToFormatOpts(e) {
      return we[e];
    }
  }]);

  return pe;
}();

var ve = /*#__PURE__*/function () {
  function ve(e, t) {
    _classCallCheck(this, ve);

    this.reason = e, this.explanation = t;
  }

  _createClass(ve, [{
    key: "toMessage",
    value: function toMessage() {
      return this.explanation ? "".concat(this.reason, ": ").concat(this.explanation) : this.reason;
    }
  }]);

  return ve;
}();

var Te = /*#__PURE__*/function () {
  function Te() {
    _classCallCheck(this, Te);
  }

  _createClass(Te, [{
    key: "type",
    get: function get() {
      throw new o();
    }
  }, {
    key: "name",
    get: function get() {
      throw new o();
    }
  }, {
    key: "isUniversal",
    get: function get() {
      throw new o();
    }
  }, {
    key: "offsetName",
    value: function offsetName(e, t) {
      throw new o();
    }
  }, {
    key: "formatOffset",
    value: function formatOffset(e, t) {
      throw new o();
    }
  }, {
    key: "offset",
    value: function offset(e) {
      throw new o();
    }
  }, {
    key: "equals",
    value: function equals(e) {
      throw new o();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new o();
    }
  }]);

  return Te;
}();

exports.Zone = Te;
var Se = null;

var Oe = /*#__PURE__*/function (_Te) {
  _inherits(Oe, _Te);

  var _super9 = _createSuper(Oe);

  function Oe() {
    _classCallCheck(this, Oe);

    return _super9.apply(this, arguments);
  }

  _createClass(Oe, [{
    key: "type",
    get: function get() {
      return "system";
    }
  }, {
    key: "name",
    get: function get() {
      return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
  }, {
    key: "isUniversal",
    get: function get() {
      return !1;
    }
  }, {
    key: "offsetName",
    value: function offsetName(e, _ref2) {
      var t = _ref2.format,
          r = _ref2.locale;
      return B(e, t, r);
    }
  }, {
    key: "formatOffset",
    value: function formatOffset(e, t) {
      return ee(this.offset(e), t);
    }
  }, {
    key: "offset",
    value: function offset(e) {
      return -new Date(e).getTimezoneOffset();
    }
  }, {
    key: "equals",
    value: function equals(e) {
      return "system" === e.type;
    }
  }, {
    key: "isValid",
    get: function get() {
      return !0;
    }
  }], [{
    key: "instance",
    get: function get() {
      return null === Se && (Se = new Oe()), Se;
    }
  }]);

  return Oe;
}(Te);

exports.SystemZone = Oe;
var be = RegExp("^".concat(re.source, "$"));
var Me = {};
var ke = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
var Ne = {};

var De = /*#__PURE__*/function (_Te2) {
  _inherits(De, _Te2);

  var _super10 = _createSuper(De);

  function De(e) {
    var _this3;

    _classCallCheck(this, De);

    _this3 = _super10.call(this), _this3.zoneName = e, _this3.valid = De.isValidZone(e);
    return _this3;
  }

  _createClass(De, [{
    key: "type",
    get: function get() {
      return "iana";
    }
  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
  }, {
    key: "isUniversal",
    get: function get() {
      return !1;
    }
  }, {
    key: "offsetName",
    value: function offsetName(e, _ref3) {
      var t = _ref3.format,
          r = _ref3.locale;
      return B(e, t, r, this.name);
    }
  }, {
    key: "formatOffset",
    value: function formatOffset(e, t) {
      return ee(this.offset(e), t);
    }
  }, {
    key: "offset",
    value: function offset(e) {
      var t = new Date(e);
      if (isNaN(t)) return NaN;

      var r = (o = this.name, Me[o] || (Me[o] = new Intl.DateTimeFormat("en-US", {
        hourCycle: "h23",
        timeZone: o,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })), Me[o]),
          _ref4 = (r.formatToParts ? function (e, t) {
        var r = e.formatToParts(t),
            n = [];

        for (var _e10 = 0; _e10 < r.length; _e10++) {
          var _r$_e = r[_e10],
              s = _r$_e.type,
              i = _r$_e.value,
              s = ke[s];
          $(s) || (n[s] = parseInt(i, 10));
        }

        return n;
      } : function (e, t) {
        var r = e.format(t).replace(/\u200E/g, ""),
            _$exec = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r),
            _$exec2 = _slicedToArray(_$exec, 7),
            n = _$exec2[1],
            s = _$exec2[2],
            i = _$exec2[3],
            e = _$exec2[4],
            t = _$exec2[5],
            r = _$exec2[6];

        return [i, n, s, e, t, r];
      })(r, t),
          _ref5 = _slicedToArray(_ref4, 6),
          n = _ref5[0],
          s = _ref5[1],
          i = _ref5[2],
          a = _ref5[3],
          e = _ref5[4],
          o = _ref5[5],
          r = +t,
          t = r % 1e3;

      return (J({
        year: n,
        month: s,
        day: i,
        hour: a,
        minute: e,
        second: o,
        millisecond: 0
      }) - (r -= 0 <= t ? t : 1e3 + t)) / 6e4;
    }
  }, {
    key: "equals",
    value: function equals(e) {
      return "iana" === e.type && e.name === this.name;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }], [{
    key: "create",
    value: function create(e) {
      return Ne[e] || (Ne[e] = new De(e)), Ne[e];
    }
  }, {
    key: "resetCache",
    value: function resetCache() {
      Ne = {}, Me = {};
    }
  }, {
    key: "isValidSpecifier",
    value: function isValidSpecifier(e) {
      return !(!e || !e.match(be));
    }
  }, {
    key: "isValidZone",
    value: function isValidZone(e) {
      try {
        return new Intl.DateTimeFormat("en-US", {
          timeZone: e
        }).format(), !0;
      } catch (e) {
        return !1;
      }
    }
  }, {
    key: "parseGMTOffset",
    value: function parseGMTOffset(e) {
      if (e) {
        e = e.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
        if (e) return -60 * parseInt(e[1]);
      }

      return null;
    }
  }]);

  return De;
}(Te);

exports.IANAZone = De;
var Ee = null;

var Ve = /*#__PURE__*/function (_Te3) {
  _inherits(Ve, _Te3);

  var _super11 = _createSuper(Ve);

  function Ve(e) {
    var _this4;

    _classCallCheck(this, Ve);

    _this4 = _super11.call(this), _this4.fixed = e;
    return _this4;
  }

  _createClass(Ve, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
  }, {
    key: "name",
    get: function get() {
      return 0 === this.fixed ? "UTC" : "UTC".concat(ee(this.fixed, "narrow"));
    }
  }, {
    key: "offsetName",
    value: function offsetName() {
      return this.name;
    }
  }, {
    key: "formatOffset",
    value: function formatOffset(e, t) {
      return ee(this.fixed, t);
    }
  }, {
    key: "isUniversal",
    get: function get() {
      return !0;
    }
  }, {
    key: "offset",
    value: function offset() {
      return this.fixed;
    }
  }, {
    key: "equals",
    value: function equals(e) {
      return "fixed" === e.type && e.fixed === this.fixed;
    }
  }, {
    key: "isValid",
    get: function get() {
      return !0;
    }
  }], [{
    key: "utcInstance",
    get: function get() {
      return null === Ee && (Ee = new Ve(0)), Ee;
    }
  }, {
    key: "instance",
    value: function instance(e) {
      return 0 === e ? Ve.utcInstance : new Ve(e);
    }
  }, {
    key: "parseSpecifier",
    value: function parseSpecifier(e) {
      if (e) {
        e = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (e) return new Ve(Q(e[1], e[2]));
      }

      return null;
    }
  }]);

  return Ve;
}(Te);

exports.FixedOffsetZone = Ve;

var Ie = /*#__PURE__*/function (_Te4) {
  _inherits(Ie, _Te4);

  var _super12 = _createSuper(Ie);

  function Ie(e) {
    var _this5;

    _classCallCheck(this, Ie);

    _this5 = _super12.call(this), _this5.zoneName = e;
    return _this5;
  }

  _createClass(Ie, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
  }, {
    key: "isUniversal",
    get: function get() {
      return !1;
    }
  }, {
    key: "offsetName",
    value: function offsetName() {
      return null;
    }
  }, {
    key: "formatOffset",
    value: function formatOffset() {
      return "";
    }
  }, {
    key: "offset",
    value: function offset() {
      return NaN;
    }
  }, {
    key: "equals",
    value: function equals() {
      return !1;
    }
  }, {
    key: "isValid",
    get: function get() {
      return !1;
    }
  }]);

  return Ie;
}(Te);

exports.InvalidZone = Ie;

function xe(e, t) {
  if ($(e) || null === e) return t;
  if (e instanceof Te) return e;
  if ("string" != typeof e) return Z(e) ? Ve.instance(e) : "object" == _typeof(e) && e.offset && "number" == typeof e.offset ? e : new Ie(e);
  var r = e.toLowerCase();
  return "local" === r || "system" === r ? t : "utc" === r || "gmt" === r ? Ve.utcInstance : null != (t = De.parseGMTOffset(e)) ? Ve.instance(t) : De.isValidSpecifier(r) ? De.create(e) : Ve.parseSpecifier(r) || new Ie(e);
}

var Ce = function Ce() {
  return Date.now();
},
    $e = "system",
    Ze = null,
    Fe = null,
    Le = null,
    ze;

var qe = /*#__PURE__*/function () {
  function qe() {
    _classCallCheck(this, qe);
  }

  _createClass(qe, null, [{
    key: "now",
    get: function get() {
      return Ce;
    },
    set: function set(e) {
      Ce = e;
    }
  }, {
    key: "defaultZone",
    get: function get() {
      return xe($e, Oe.instance);
    },
    set: function set(e) {
      $e = e;
    }
  }, {
    key: "defaultLocale",
    get: function get() {
      return Ze;
    },
    set: function set(e) {
      Ze = e;
    }
  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return Fe;
    },
    set: function set(e) {
      Fe = e;
    }
  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return Le;
    },
    set: function set(e) {
      Le = e;
    }
  }, {
    key: "throwOnInvalid",
    get: function get() {
      return ze;
    },
    set: function set(e) {
      ze = e;
    }
  }, {
    key: "resetCaches",
    value: function resetCaches() {
      Ye.resetCache(), De.resetCache();
    }
  }]);

  return qe;
}();

exports.Settings = qe;
var Ae = {};

function je(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var r = JSON.stringify([e, t]);
  var n = Ae[r];
  return n || (n = new Intl.DateTimeFormat(e, t), Ae[r] = n), n;
}

var _e = {};
var Ue = {};
var He = null;

function We(e, t, r, n, s) {
  r = e.listingMode(r);
  return "error" === r ? null : ("en" === r ? n : s)(t);
}

var Re = /*#__PURE__*/function () {
  function Re(e, t, r) {
    _classCallCheck(this, Re);

    if (this.padTo = r.padTo || 0, this.floor = r.floor || !1, !t) {
      var _n2 = {
        useGrouping: !1
      };
      0 < r.padTo && (_n2.minimumIntegerDigits = r.padTo), this.inf = function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var r = JSON.stringify([e, t]);
        var n = _e[r];
        return n || (n = new Intl.NumberFormat(e, t), _e[r] = n), n;
      }(e, _n2);
    }
  }

  _createClass(Re, [{
    key: "format",
    value: function format(e) {
      if (this.inf) {
        var t = this.floor ? Math.floor(e) : e;
        return this.inf.format(t);
      }

      return j(this.floor ? Math.floor(e) : H(e, 3), this.padTo);
    }
  }]);

  return Re;
}();

var Pe = /*#__PURE__*/function () {
  function Pe(e, t, r) {
    _classCallCheck(this, Pe);

    this.opts = r;
    var n;
    var s, i;
    e.zone.isUniversal ? (s = 0 <= (i = e.offset / 60 * -1) ? "Etc/GMT+".concat(i) : "Etc/GMT".concat(i), i = De.isValidZone(s), 0 !== e.offset && i ? (n = s, this.dt = e) : (n = "UTC", r.timeZoneName ? this.dt = e : this.dt = 0 === e.offset ? e : Wr.fromMillis(e.ts + 60 * e.offset * 1e3))) : "system" === e.zone.type ? this.dt = e : (this.dt = e, n = e.zone.name);

    var a = _objectSpread({}, this.opts);

    n && (a.timeZone = n), this.dtf = je(t, a);
  }

  _createClass(Pe, [{
    key: "format",
    value: function format() {
      return this.dtf.format(this.dt.toJSDate());
    }
  }, {
    key: "formatToParts",
    value: function formatToParts() {
      return this.dtf.formatToParts(this.dt.toJSDate());
    }
  }, {
    key: "resolvedOptions",
    value: function resolvedOptions() {
      return this.dtf.resolvedOptions();
    }
  }]);

  return Pe;
}();

var Je = /*#__PURE__*/function () {
  function Je(e, t, r) {
    _classCallCheck(this, Je);

    this.opts = _objectSpread({
      style: "long"
    }, r), !t && L() && (this.rtf = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var r = t.base,
          n = _objectWithoutProperties(t, _excluded);

      var s = JSON.stringify([e, n]);
      var i = Ue[s];
      return i || (i = new Intl.RelativeTimeFormat(e, t), Ue[s] = i), i;
    }(e, r));
  }

  _createClass(Je, [{
    key: "format",
    value: function format(e, t) {
      return this.rtf ? this.rtf.format(e, t) : function (e, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "always";
        var n = arguments.length > 3 ? arguments[3] : undefined;
        return function (t) {
          var s = {
            years: ["year", "yr."],
            quarters: ["quarter", "qtr."],
            months: ["month", "mo."],
            weeks: ["week", "wk."],
            days: ["day", "day", "days"],
            hours: ["hour", "hr."],
            minutes: ["minute", "min."],
            seconds: ["second", "sec."]
          },
              i = -1 === ["hours", "minutes", "seconds"].indexOf(e);

          if ("auto" === r && i) {
            var a = "days" === e;

            switch (t) {
              case 1:
                return a ? "tomorrow" : "next ".concat(s[e][0]);

              case -1:
                return a ? "yesterday" : "last ".concat(s[e][0]);

              case 0:
                return a ? "today" : "this ".concat(s[e][0]);
            }
          }

          var o = Object.is(t, -0) || t < 0,
              i = 1 === (r = Math.abs(t)),
              t = s[e],
              i = n ? !i && t[2] || t[1] : i ? s[e][0] : e;
          return o ? "".concat(r, " ").concat(i, " ago") : "in ".concat(r, " ").concat(i);
        }(t);
      }(t, e, this.opts.numeric, "long" !== this.opts.style);
    }
  }, {
    key: "formatToParts",
    value: function formatToParts(e, t) {
      return this.rtf ? this.rtf.formatToParts(e, t) : [];
    }
  }]);

  return Je;
}();

var Ye = /*#__PURE__*/function () {
  function Ye(e, t, r, n) {
    _classCallCheck(this, Ye);

    var _ref6 = function (e) {
      if (-1 === (n = e.indexOf("-u-"))) return [e];
      {
        var _t2;

        var r = e.substring(0, n);

        try {
          _t2 = je(e).resolvedOptions();
        } catch (e) {
          _t2 = je(r).resolvedOptions();
        }

        var _t3 = _t2,
            n = _t3.numberingSystem,
            e = _t3.calendar;
        return [r, n, e];
      }
    }(e),
        _ref7 = _slicedToArray(_ref6, 3),
        s = _ref7[0],
        i = _ref7[1],
        e = _ref7[2];

    this.locale = s, this.numberingSystem = t || i || null, this.outputCalendar = r || e || null, this.intl = (i = this.locale, r = this.numberingSystem, ((e = this.outputCalendar) || r) && (i += "-u", e && (i += "-ca-".concat(e)), r && (i += "-nu-".concat(r))), i), this.weekdaysCache = {
      format: {},
      standalone: {}
    }, this.monthsCache = {
      format: {},
      standalone: {}
    }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = n, this.fastNumbersCached = null;
  }

  _createClass(Ye, [{
    key: "fastNumbers",
    get: function get() {
      var e;
      return null == this.fastNumbersCached && (this.fastNumbersCached = (!(e = this).numberingSystem || "latn" === e.numberingSystem) && ("latn" === e.numberingSystem || !e.locale || e.locale.startsWith("en") || "latn" === new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)), this.fastNumbersCached;
    }
  }, {
    key: "listingMode",
    value: function listingMode() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = this.isEnglish(),
          r = !(null !== this.numberingSystem && "latn" !== this.numberingSystem || null !== this.outputCalendar && "gregory" !== this.outputCalendar);
      return t && r ? "en" : "intl";
    }
  }, {
    key: "clone",
    value: function clone(e) {
      return e && 0 !== Object.getOwnPropertyNames(e).length ? Ye.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, e.defaultToEN || !1) : this;
    }
  }, {
    key: "redefaultToEN",
    value: function redefaultToEN() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.clone(_objectSpread(_objectSpread({}, e), {}, {
        defaultToEN: !0
      }));
    }
  }, {
    key: "redefaultToSystem",
    value: function redefaultToSystem() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.clone(_objectSpread(_objectSpread({}, e), {}, {
        defaultToEN: !1
      }));
    }
  }, {
    key: "months",
    value: function months(r) {
      var _this6 = this;

      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      return We(this, r, e, ae, function () {
        var t = n ? {
          month: r,
          day: "numeric"
        } : {
          month: r
        },
            e = n ? "format" : "standalone";
        return _this6.monthsCache[e][r] || (_this6.monthsCache[e][r] = function (t) {
          var r = [];

          for (var _e11 = 1; _e11 <= 12; _e11++) {
            var n = Wr.utc(2016, _e11, 1);
            r.push(t(n));
          }

          return r;
        }(function (e) {
          return _this6.extract(e, t, "month");
        })), _this6.monthsCache[e][r];
      });
    }
  }, {
    key: "weekdays",
    value: function weekdays(r) {
      var _this7 = this;

      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      return We(this, r, e, ce, function () {
        var t = n ? {
          weekday: r,
          year: "numeric",
          month: "long",
          day: "numeric"
        } : {
          weekday: r
        },
            e = n ? "format" : "standalone";
        return _this7.weekdaysCache[e][r] || (_this7.weekdaysCache[e][r] = function (t) {
          var r = [];

          for (var _e12 = 1; _e12 <= 7; _e12++) {
            var n = Wr.utc(2016, 11, 13 + _e12);
            r.push(t(n));
          }

          return r;
        }(function (e) {
          return _this7.extract(e, t, "weekday");
        })), _this7.weekdaysCache[e][r];
      });
    }
  }, {
    key: "meridiems",
    value: function meridiems() {
      var _this8 = this;

      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      return We(this, void 0, e, function () {
        return he;
      }, function () {
        if (!_this8.meridiemCache) {
          var _t4 = {
            hour: "numeric",
            hourCycle: "h12"
          };
          _this8.meridiemCache = [Wr.utc(2016, 11, 13, 9), Wr.utc(2016, 11, 13, 19)].map(function (e) {
            return _this8.extract(e, _t4, "dayperiod");
          });
        }

        return _this8.meridiemCache;
      });
    }
  }, {
    key: "eras",
    value: function eras(e) {
      var _this9 = this;

      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      return We(this, e, t, ye, function () {
        var t = {
          era: e
        };
        return _this9.eraCache[e] || (_this9.eraCache[e] = [Wr.utc(-40, 1, 1), Wr.utc(2017, 1, 1)].map(function (e) {
          return _this9.extract(e, t, "era");
        })), _this9.eraCache[e];
      });
    }
  }, {
    key: "extract",
    value: function extract(e, t, r) {
      var n = this.dtFormatter(e, t),
          s = n.formatToParts(),
          i = s.find(function (e) {
        return e.type.toLowerCase() === r;
      });
      return i ? i.value : null;
    }
  }, {
    key: "numberFormatter",
    value: function numberFormatter() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Re(this.intl, e.forceSimple || this.fastNumbers, e);
    }
  }, {
    key: "dtFormatter",
    value: function dtFormatter(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Pe(e, this.intl, t);
    }
  }, {
    key: "relFormatter",
    value: function relFormatter() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Je(this.intl, this.isEnglish(), e);
    }
  }, {
    key: "isEnglish",
    value: function isEnglish() {
      return "en" === this.locale || "en-us" === this.locale.toLowerCase() || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
    }
  }, {
    key: "equals",
    value: function equals(e) {
      return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
    }
  }], [{
    key: "fromOpts",
    value: function fromOpts(e) {
      return Ye.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN);
    }
  }, {
    key: "create",
    value: function create(e, t, r) {
      var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      e = e || qe.defaultLocale, n = e || (n ? "en-US" : He || (He = new Intl.DateTimeFormat().resolvedOptions().locale, He)), t = t || qe.defaultNumberingSystem, r = r || qe.defaultOutputCalendar;
      return new Ye(n, t, r, e);
    }
  }, {
    key: "resetCache",
    value: function resetCache() {
      He = null, Ae = {}, _e = {}, Ue = {};
    }
  }, {
    key: "fromObject",
    value: function fromObject() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          e = _ref8.locale,
          t = _ref8.numberingSystem,
          r = _ref8.outputCalendar;

      return Ye.create(e, t, r);
    }
  }]);

  return Ye;
}();

function Ge() {
  for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
    e[_key] = arguments[_key];
  }

  e = e.reduce(function (e, t) {
    return e + t.source;
  }, "");
  return RegExp("^".concat(e, "$"));
}

function Be() {
  for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    e[_key2] = arguments[_key2];
  }

  return function (i) {
    return e.reduce(function (_ref9, n) {
      var _ref10 = _slicedToArray(_ref9, 3),
          e = _ref10[0],
          t = _ref10[1],
          r = _ref10[2];

      return function (r, n) {
        var _n3 = n(i, r),
            _n4 = _slicedToArray(_n3, 3),
            s = _n4[0],
            n = _n4[1],
            r = _n4[2];

        return [_objectSpread(_objectSpread({}, e), s), t || n, r];
      }(r, n);
    }, [{}, null, 1]).slice(0, 2);
  };
}

function Qe(e) {
  if (null == e) return [null, null];

  for (var _len3 = arguments.length, t = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    t[_key3 - 1] = arguments[_key3];
  }

  for (var _i2 = 0, _t5 = t; _i2 < _t5.length; _i2++) {
    var _t5$_i = _slicedToArray(_t5[_i2], 2),
        r = _t5$_i[0],
        n = _t5$_i[1];

    r = r.exec(e);
    if (r) return n(r);
  }

  return [null, null];
}

function Ke() {
  for (var _len4 = arguments.length, s = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    s[_key4] = arguments[_key4];
  }

  return function (e, t) {
    var r = {};
    var n;

    for (n = 0; n < s.length; n++) {
      r[s[n]] = _(e[t + n]);
    }

    return [r, null, t + n];
  };
}

var Xe = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    et = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
    tt = RegExp("".concat(et.source).concat(Xe.source, "?")),
    u = RegExp("(?:T".concat(tt.source, ")?")),
    t = Ke("weekYear", "weekNumber", "weekDay"),
    l = Ke("year", "ordinal"),
    Xe = RegExp("".concat(et.source, " ?(?:").concat(Xe.source, "|(").concat(re.source, "))?")),
    re = RegExp("(?: ".concat(Xe.source, ")?"));
exports.VERSION = Xe;

function rt(e, t, r) {
  t = e[t];
  return $(t) ? r : _(t);
}

function nt(e, t) {
  return [{
    year: rt(e, t),
    month: rt(e, t + 1, 1),
    day: rt(e, t + 2, 1)
  }, null, t + 3];
}

function st(e, t) {
  return [{
    hours: rt(e, t, 0),
    minutes: rt(e, t + 1, 0),
    seconds: rt(e, t + 2, 0),
    milliseconds: U(e[t + 3])
  }, null, t + 4];
}

function it(e, t) {
  var r = !e[t] && !e[t + 1],
      e = Q(e[t + 1], e[t + 2]);
  return [{}, r ? null : Ve.instance(e), t + 3];
}

function at(e, t) {
  return [{}, e[t] ? De.create(e[t]) : null, t + 1];
}

var ot = RegExp("^T?".concat(et.source, "$")),
    ut = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function lt(e) {
  var _e13 = e,
      _e14 = _slicedToArray(_e13, 9),
      t = _e14[0],
      r = _e14[1],
      n = _e14[2],
      s = _e14[3],
      i = _e14[4],
      a = _e14[5],
      o = _e14[6],
      u = _e14[7],
      l = _e14[8];

  var c = "-" === t[0];
  e = u && "-" === u[0], t = function t(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    return void 0 !== e && (t || e && c) ? -e : e;
  };
  return [{
    years: t(_(r)),
    months: t(_(n)),
    weeks: t(_(s)),
    days: t(_(i)),
    hours: t(_(a)),
    minutes: t(_(o)),
    seconds: t(_(u), "-0" === u),
    milliseconds: t(U(l), e)
  }];
}

var ct = {
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480
};

function ht(e, t, r, n, s, i, a) {
  var o = {
    year: 2 === t.length ? G(_(t)) : _(t),
    month: se.indexOf(r) + 1,
    day: _(n),
    hour: _(s),
    minute: _(i)
  };
  return a && (o.second = _(a)), e && (o.weekday = 3 < e.length ? oe.indexOf(e) + 1 : ue.indexOf(e) + 1), o;
}

var dt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function mt(e) {
  var _e15 = e,
      _e16 = _slicedToArray(_e15, 12),
      t = _e16[1],
      r = _e16[2],
      n = _e16[3],
      s = _e16[4],
      i = _e16[5],
      a = _e16[6],
      o = _e16[7],
      u = _e16[8],
      l = _e16[9],
      c = _e16[10],
      e = _e16[11],
      o = ht(t, s, n, r, i, a, o);

  var h;
  return h = u ? ct[u] : l ? 0 : Q(c, e), [o, new Ve(h)];
}

var ft = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    yt = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    gt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function wt(e) {
  var _e17 = e,
      _e18 = _slicedToArray(_e17, 8),
      t = _e18[1],
      r = _e18[2],
      n = _e18[3],
      s = _e18[4],
      i = _e18[5],
      a = _e18[6],
      e = _e18[7];

  return [ht(t, s, n, r, i, a, e), Ve.utcInstance];
}

function pt(e) {
  var _e19 = e,
      _e20 = _slicedToArray(_e19, 8),
      t = _e20[1],
      r = _e20[2],
      n = _e20[3],
      s = _e20[4],
      i = _e20[5],
      a = _e20[6],
      e = _e20[7];

  return [ht(t, e, r, n, s, i, a), Ve.utcInstance];
}

var vt = Ge(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, u),
    Tt = Ge(/(\d{4})-?W(\d\d)(?:-?(\d))?/, u),
    St = Ge(/(\d{4})-?(\d{3})/, u),
    Ot = Ge(tt),
    bt = Be(nt, st, it),
    Mt = Be(t, st, it),
    kt = Be(l, st, it),
    Nt = Be(st, it);
var Dt = Be(st);
var Et = Ge(/(\d{4})-(\d\d)-(\d\d)/, re),
    Vt = Ge(Xe),
    It = Be(nt, st, it, at),
    xt = Be(st, it, at);

var Ct = {
  weeks: {
    days: 7,
    hours: 168,
    minutes: 10080,
    seconds: 604800,
    milliseconds: 6048e5
  },
  days: {
    hours: 24,
    minutes: 1440,
    seconds: 86400,
    milliseconds: 864e5
  },
  hours: {
    minutes: 60,
    seconds: 3600,
    milliseconds: 36e5
  },
  minutes: {
    seconds: 60,
    milliseconds: 6e4
  },
  seconds: {
    milliseconds: 1e3
  }
},
    $t = _objectSpread({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 8760,
    minutes: 525600,
    seconds: 31536e3,
    milliseconds: 31536e6
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 2184,
    minutes: 131040,
    seconds: 7862400,
    milliseconds: 78624e5
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 720,
    minutes: 43200,
    seconds: 2592e3,
    milliseconds: 2592e6
  }
}, Ct),
    Zt = 365.2425,
    Ft = 30.436875,
    Lt = _objectSpread({
  years: {
    quarters: 4,
    months: 12,
    weeks: Zt / 7,
    days: Zt,
    hours: 24 * Zt,
    minutes: 525949.2,
    seconds: 525949.2 * 60,
    milliseconds: 525949.2 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Zt / 28,
    days: Zt / 4,
    hours: 24 * Zt / 4,
    minutes: 131487.3,
    seconds: 525949.2 * 60 / 4,
    milliseconds: 7889237999.999999
  },
  months: {
    weeks: Ft / 7,
    days: Ft,
    hours: 24 * Ft,
    minutes: 43829.1,
    seconds: 2629746,
    milliseconds: 2629746e3
  }
}, Ct),
    zt = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"],
    qt = zt.slice(0).reverse();

function At(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  e = {
    values: r ? t.values : _objectSpread(_objectSpread({}, e.values), t.values || {}),
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy
  };
  return new _t(e);
}

function jt(e, t, r, n, s) {
  var i = e[s][r],
      a = t[r] / i,
      a = !(Math.sign(a) === Math.sign(n[s])) && 0 !== n[s] && Math.abs(a) <= 1 ? (e = a) < 0 ? Math.floor(e) : Math.ceil(e) : Math.trunc(a);
  n[s] += a, t[r] -= a * i;
}

var _t = /*#__PURE__*/function () {
  function _t(e) {
    _classCallCheck(this, _t);

    var t = "longterm" === e.conversionAccuracy || !1;
    this.values = e.values, this.loc = e.loc || Ye.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = t ? Lt : $t, this.isLuxonDuration = !0;
  }

  _createClass(_t, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "toFormat",
    value: function toFormat(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      t = _objectSpread(_objectSpread({}, t), {}, {
        floor: !1 !== t.round && !1 !== t.floor
      });
      return this.isValid ? pe.create(this.loc, t).formatDurationFromString(this, e) : "Invalid Duration";
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return this.isValid ? _objectSpread({}, this.values) : {};
    }
  }, {
    key: "toISO",
    value: function toISO() {
      if (!this.isValid) return null;
      var e = "P";
      return 0 !== this.years && (e += this.years + "Y"), 0 === this.months && 0 === this.quarters || (e += this.months + 3 * this.quarters + "M"), 0 !== this.weeks && (e += this.weeks + "W"), 0 !== this.days && (e += this.days + "D"), 0 === this.hours && 0 === this.minutes && 0 === this.seconds && 0 === this.milliseconds || (e += "T"), 0 !== this.hours && (e += this.hours + "H"), 0 !== this.minutes && (e += this.minutes + "M"), 0 === this.seconds && 0 === this.milliseconds || (e += H(this.seconds + this.milliseconds / 1e3, 3) + "S"), "P" === e && (e += "T0S"), e;
    }
  }, {
    key: "toISOTime",
    value: function toISOTime() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.isValid) return null;
      var t = this.toMillis();
      if (t < 0 || 864e5 <= t) return null;
      e = _objectSpread({
        suppressMilliseconds: !1,
        suppressSeconds: !1,
        includePrefix: !1,
        format: "extended"
      }, e);
      var r = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
      var n = "basic" === e.format ? "hhmm" : "hh:mm";
      e.suppressSeconds && 0 === r.seconds && 0 === r.milliseconds || (n += "basic" === e.format ? "ss" : ":ss", e.suppressMilliseconds && 0 === r.milliseconds || (n += ".SSS"));
      var s = r.toFormat(n);
      return e.includePrefix && (s = "T" + s), s;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toISO();
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.toISO();
    }
  }, {
    key: "toMillis",
    value: function toMillis() {
      return this.as("milliseconds");
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toMillis();
    }
  }, {
    key: "plus",
    value: function plus(e) {
      if (!this.isValid) return this;
      var t = Ut(e),
          r = {};

      var _iterator2 = _createForOfIteratorHelper(zt),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _n5 = _step2.value;
          (q(t.values, _n5) || q(this.values, _n5)) && (r[_n5] = t.get(_n5) + this.get(_n5));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return At(this, {
        values: r
      }, !0);
    }
  }, {
    key: "minus",
    value: function minus(e) {
      if (!this.isValid) return this;
      var t = Ut(e);
      return this.plus(t.negate());
    }
  }, {
    key: "mapUnits",
    value: function mapUnits(e) {
      if (!this.isValid) return this;
      var t = {};

      for (var _i3 = 0, _Object$keys = Object.keys(this.values); _i3 < _Object$keys.length; _i3++) {
        var _r2 = _Object$keys[_i3];
        t[_r2] = K(e(this.values[_r2], _r2));
      }

      return At(this, {
        values: t
      }, !0);
    }
  }, {
    key: "get",
    value: function get(e) {
      return this[_t.normalizeUnit(e)];
    }
  }, {
    key: "set",
    value: function set(e) {
      return this.isValid ? At(this, {
        values: _objectSpread(_objectSpread({}, this.values), X(e, _t.normalizeUnit))
      }) : this;
    }
  }, {
    key: "reconfigure",
    value: function reconfigure() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          e = _ref11.locale,
          t = _ref11.numberingSystem,
          r = _ref11.conversionAccuracy;

      var n = this.loc.clone({
        locale: e,
        numberingSystem: t
      }),
          s = {
        loc: n
      };
      return r && (s.conversionAccuracy = r), At(this, s);
    }
  }, {
    key: "as",
    value: function as(e) {
      return this.isValid ? this.shiftTo(e).get(e) : NaN;
    }
  }, {
    key: "normalize",
    value: function normalize() {
      if (!this.isValid) return this;
      var r,
          n,
          e = this.toObject();
      return r = this.matrix, n = e, qt.reduce(function (e, t) {
        return $(n[t]) ? e : (e && jt(r, n, e, n, t), t);
      }, null), At(this, {
        values: e
      }, !0);
    }
  }, {
    key: "shiftTo",
    value: function shiftTo() {
      for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        e[_key5] = arguments[_key5];
      }

      if (!this.isValid) return this;
      if (0 === e.length) return this;
      e = e.map(function (e) {
        return _t.normalizeUnit(e);
      });
      var t = {},
          r = {},
          n = this.toObject();
      var s;

      var _iterator3 = _createForOfIteratorHelper(zt),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _a = _step3.value;

          if (0 <= e.indexOf(_a)) {
            s = _a;
            var _e21 = 0;

            for (var _o in r) {
              _e21 += this.matrix[_o][_a] * r[_o], r[_o] = 0;
            }

            Z(n[_a]) && (_e21 += n[_a]);
            var i = Math.trunc(_e21);
            t[_a] = i, r[_a] = _e21 - i;

            for (var _u in n) {
              zt.indexOf(_u) > zt.indexOf(_a) && jt(this.matrix, n, _u, t, _a);
            }
          } else Z(n[_a]) && (r[_a] = n[_a]);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      for (var _l in r) {
        0 !== r[_l] && (t[s] += _l === s ? r[_l] : r[_l] / this.matrix[s][_l]);
      }

      return At(this, {
        values: t
      }, !0).normalize();
    }
  }, {
    key: "negate",
    value: function negate() {
      if (!this.isValid) return this;
      var e = {};

      for (var _i4 = 0, _Object$keys2 = Object.keys(this.values); _i4 < _Object$keys2.length; _i4++) {
        var _t6 = _Object$keys2[_i4];
        e[_t6] = -this.values[_t6];
      }

      return At(this, {
        values: e
      }, !0);
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
  }, {
    key: "isValid",
    get: function get() {
      return null === this.invalid;
    }
  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }, {
    key: "equals",
    value: function equals(e) {
      if (!this.isValid || !e.isValid) return !1;
      if (!this.loc.equals(e.loc)) return !1;

      var _iterator4 = _createForOfIteratorHelper(zt),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _n6 = _step4.value;
          if (t = this.values[_n6], r = e.values[_n6], !(void 0 === t || 0 === t ? void 0 === r || 0 === r : t === r)) return !1;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var t, r;
      return !0;
    }
  }], [{
    key: "fromMillis",
    value: function fromMillis(e, t) {
      return _t.fromObject({
        milliseconds: e
      }, t);
    }
  }, {
    key: "fromObject",
    value: function fromObject(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (null == e || "object" != _typeof(e)) throw new a("Duration.fromObject: argument expected to be an object, got ".concat(null === e ? "null" : _typeof(e)));
      return new _t({
        values: X(e, _t.normalizeUnit),
        loc: Ye.fromObject(t),
        conversionAccuracy: t.conversionAccuracy
      });
    }
  }, {
    key: "fromISO",
    value: function fromISO(e, t) {
      var _Qe = Qe(e, [ut, lt]),
          _Qe2 = _slicedToArray(_Qe, 1),
          r = _Qe2[0];

      return r ? _t.fromObject(r, t) : _t.invalid("unparsable", "the input \"".concat(e, "\" can't be parsed as ISO 8601"));
    }
  }, {
    key: "fromISOTime",
    value: function fromISOTime(e, t) {
      var _Qe3 = Qe(e, [ot, Dt]),
          _Qe4 = _slicedToArray(_Qe3, 1),
          r = _Qe4[0];

      return r ? _t.fromObject(r, t) : _t.invalid("unparsable", "the input \"".concat(e, "\" can't be parsed as ISO 8601"));
    }
  }, {
    key: "invalid",
    value: function invalid(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!e) throw new a("need to specify a reason the Duration is invalid");
      t = e instanceof ve ? e : new ve(e, t);
      if (qe.throwOnInvalid) throw new s(t);
      return new _t({
        invalid: t
      });
    }
  }, {
    key: "normalizeUnit",
    value: function normalizeUnit(e) {
      var t = {
        year: "years",
        years: "years",
        quarter: "quarters",
        quarters: "quarters",
        month: "months",
        months: "months",
        week: "weeks",
        weeks: "weeks",
        day: "days",
        days: "days",
        hour: "hours",
        hours: "hours",
        minute: "minutes",
        minutes: "minutes",
        second: "seconds",
        seconds: "seconds",
        millisecond: "milliseconds",
        milliseconds: "milliseconds"
      }[e && e.toLowerCase()];
      if (!t) throw new i(e);
      return t;
    }
  }, {
    key: "isDuration",
    value: function isDuration(e) {
      return e && e.isLuxonDuration || !1;
    }
  }]);

  return _t;
}();

exports.Duration = _t;

function Ut(e) {
  if (Z(e)) return _t.fromMillis(e);
  if (_t.isDuration(e)) return e;
  if ("object" == _typeof(e)) return _t.fromObject(e);
  throw new a("Unknown duration argument ".concat(e, " of type ").concat(_typeof(e)));
}

var Ht = "Invalid Interval";

var Wt = /*#__PURE__*/function () {
  function Wt(e) {
    _classCallCheck(this, Wt);

    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }

  _createClass(Wt, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
  }, {
    key: "isValid",
    get: function get() {
      return null === this.invalidReason;
    }
  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }, {
    key: "length",
    value: function length() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "milliseconds";
      return this.isValid ? this.toDuration(e).get(e) : NaN;
    }
  }, {
    key: "count",
    value: function count() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "milliseconds";
      if (!this.isValid) return NaN;
      var t = this.start.startOf(e),
          r = this.end.startOf(e);
      return Math.floor(r.diff(t, e).get(e)) + 1;
    }
  }, {
    key: "hasSame",
    value: function hasSame(e) {
      return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e));
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.s.valueOf() === this.e.valueOf();
    }
  }, {
    key: "isAfter",
    value: function isAfter(e) {
      return !!this.isValid && this.s > e;
    }
  }, {
    key: "isBefore",
    value: function isBefore(e) {
      return !!this.isValid && this.e <= e;
    }
  }, {
    key: "contains",
    value: function contains(e) {
      return !!this.isValid && this.s <= e && this.e > e;
    }
  }, {
    key: "set",
    value: function set() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          e = _ref12.start,
          t = _ref12.end;

      return this.isValid ? Wt.fromDateTimes(e || this.s, t || this.e) : this;
    }
  }, {
    key: "splitAt",
    value: function splitAt() {
      var _this10 = this;

      if (!this.isValid) return [];

      for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        e[_key6] = arguments[_key6];
      }

      var t = e.map(Rr).filter(function (e) {
        return _this10.contains(e);
      }).sort(),
          r = [];
      var n = this.s,
          s = 0;

      for (; n < this.e;) {
        var i = t[s] || this.e,
            i = +i > +this.e ? this.e : i;
        r.push(Wt.fromDateTimes(n, i)), n = i, s += 1;
      }

      return r;
    }
  }, {
    key: "splitBy",
    value: function splitBy(e) {
      var t = Ut(e);
      if (!this.isValid || !t.isValid || 0 === t.as("milliseconds")) return [];
      var r = this.s,
          n = 1,
          s;
      var i = [];

      for (; r < this.e;) {
        var a = this.start.plus(t.mapUnits(function (e) {
          return e * n;
        }));
        s = +a > +this.e ? this.e : a, i.push(Wt.fromDateTimes(r, s)), r = s, n += 1;
      }

      return i;
    }
  }, {
    key: "divideEqually",
    value: function divideEqually(e) {
      return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
    }
  }, {
    key: "overlaps",
    value: function overlaps(e) {
      return this.e > e.s && this.s < e.e;
    }
  }, {
    key: "abutsStart",
    value: function abutsStart(e) {
      return !!this.isValid && +this.e == +e.s;
    }
  }, {
    key: "abutsEnd",
    value: function abutsEnd(e) {
      return !!this.isValid && +e.e == +this.s;
    }
  }, {
    key: "engulfs",
    value: function engulfs(e) {
      return !!this.isValid && this.s <= e.s && this.e >= e.e;
    }
  }, {
    key: "equals",
    value: function equals(e) {
      return !(!this.isValid || !e.isValid) && this.s.equals(e.s) && this.e.equals(e.e);
    }
  }, {
    key: "intersection",
    value: function intersection(e) {
      if (!this.isValid) return this;
      var t = (this.s > e.s ? this : e).s,
          e = (this.e < e.e ? this : e).e;
      return e <= t ? null : Wt.fromDateTimes(t, e);
    }
  }, {
    key: "union",
    value: function union(e) {
      if (!this.isValid) return this;
      var t = (this.s < e.s ? this : e).s,
          e = (this.e > e.e ? this : e).e;
      return Wt.fromDateTimes(t, e);
    }
  }, {
    key: "difference",
    value: function difference() {
      var _this11 = this;

      for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        e[_key7] = arguments[_key7];
      }

      return Wt.xor([this].concat(e)).map(function (e) {
        return _this11.intersection(e);
      }).filter(function (e) {
        return e && !e.isEmpty();
      });
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.isValid ? "[".concat(this.s.toISO(), " \u2013 ").concat(this.e.toISO(), ")") : Ht;
    }
  }, {
    key: "toISO",
    value: function toISO(e) {
      return this.isValid ? "".concat(this.s.toISO(e), "/").concat(this.e.toISO(e)) : Ht;
    }
  }, {
    key: "toISODate",
    value: function toISODate() {
      return this.isValid ? "".concat(this.s.toISODate(), "/").concat(this.e.toISODate()) : Ht;
    }
  }, {
    key: "toISOTime",
    value: function toISOTime(e) {
      return this.isValid ? "".concat(this.s.toISOTime(e), "/").concat(this.e.toISOTime(e)) : Ht;
    }
  }, {
    key: "toFormat",
    value: function toFormat(e) {
      var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref13$separator = _ref13.separator,
          t = _ref13$separator === void 0 ? " – " : _ref13$separator;

      return this.isValid ? "".concat(this.s.toFormat(e)).concat(t).concat(this.e.toFormat(e)) : Ht;
    }
  }, {
    key: "toDuration",
    value: function toDuration(e, t) {
      return this.isValid ? this.e.diff(this.s, e, t) : _t.invalid(this.invalidReason);
    }
  }, {
    key: "mapEndpoints",
    value: function mapEndpoints(e) {
      return Wt.fromDateTimes(e(this.s), e(this.e));
    }
  }], [{
    key: "invalid",
    value: function invalid(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!e) throw new a("need to specify a reason the Interval is invalid");
      t = e instanceof ve ? e : new ve(e, t);
      if (qe.throwOnInvalid) throw new n(t);
      return new Wt({
        invalid: t
      });
    }
  }, {
    key: "fromDateTimes",
    value: function fromDateTimes(e, t) {
      var r = Rr(e),
          n = Rr(t),
          e = (e = n, (t = r) && t.isValid ? e && e.isValid ? e < t ? Wt.invalid("end before start", "The end of an interval must be after its start, but you had start=".concat(t.toISO(), " and end=").concat(e.toISO())) : null : Wt.invalid("missing or invalid end") : Wt.invalid("missing or invalid start"));
      return null == e ? new Wt({
        start: r,
        end: n
      }) : e;
    }
  }, {
    key: "after",
    value: function after(e, t) {
      var r = Ut(t),
          n = Rr(e);
      return Wt.fromDateTimes(n, n.plus(r));
    }
  }, {
    key: "before",
    value: function before(e, t) {
      var r = Ut(t),
          n = Rr(e);
      return Wt.fromDateTimes(n.minus(r), n);
    }
  }, {
    key: "fromISO",
    value: function fromISO(e, s) {
      var _split = (e || "").split("/", 2),
          _split2 = _slicedToArray(_split, 2),
          i = _split2[0],
          a = _split2[1];

      if (i && a) {
        var _e22, _t7;

        try {
          _e22 = Wr.fromISO(i, s), _t7 = _e22.isValid;
        } catch (a) {
          _t7 = !1;
        }

        var _r3, _n7;

        try {
          _r3 = Wr.fromISO(a, s), _n7 = _r3.isValid;
        } catch (a) {
          _n7 = !1;
        }

        if (_t7 && _n7) return Wt.fromDateTimes(_e22, _r3);

        if (_t7) {
          var o = _t.fromISO(a, s);

          if (o.isValid) return Wt.after(_e22, o);
        } else if (_n7) {
          s = _t.fromISO(i, s);
          if (s.isValid) return Wt.before(_r3, s);
        }
      }

      return Wt.invalid("unparsable", "the input \"".concat(e, "\" can't be parsed as ISO 8601"));
    }
  }, {
    key: "isInterval",
    value: function isInterval(e) {
      return e && e.isLuxonInterval || !1;
    }
  }, {
    key: "merge",
    value: function merge(e) {
      var _e$sort$reduce = e.sort(function (e, t) {
        return e.s - t.s;
      }).reduce(function (_ref14, r) {
        var _ref15 = _slicedToArray(_ref14, 2),
            e = _ref15[0],
            t = _ref15[1];

        return t ? t.overlaps(r) || t.abutsStart(r) ? [e, t.union(r)] : [e.concat([t]), r] : [e, r];
      }, [[], null]),
          _e$sort$reduce2 = _slicedToArray(_e$sort$reduce, 2),
          t = _e$sort$reduce2[0],
          r = _e$sort$reduce2[1];

      return r && t.push(r), t;
    }
  }, {
    key: "xor",
    value: function xor(e) {
      var _Array$prototype;

      var t = null,
          r = 0;

      var n = [],
          s = e.map(function (e) {
        return [{
          time: e.s,
          type: "s"
        }, {
          time: e.e,
          type: "e"
        }];
      }),
          i = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, _toConsumableArray(s)),
          a = i.sort(function (e, t) {
        return e.time - t.time;
      });

      var _iterator5 = _createForOfIteratorHelper(a),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _o2 = _step5.value;
          r += "s" === _o2.type ? 1 : -1, t = 1 === r ? _o2.time : (t && +t != +_o2.time && n.push(Wt.fromDateTimes(t, _o2.time)), null);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return Wt.merge(n);
    }
  }]);

  return Wt;
}();

exports.Interval = Wt;

var Rt = /*#__PURE__*/function () {
  function Rt() {
    _classCallCheck(this, Rt);
  }

  _createClass(Rt, null, [{
    key: "hasDST",
    value: function hasDST() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : qe.defaultZone;
      var t = Wr.now().setZone(e).set({
        month: 12
      });
      return !e.isUniversal && t.offset !== t.set({
        month: 6
      }).offset;
    }
  }, {
    key: "isValidIANAZone",
    value: function isValidIANAZone(e) {
      return De.isValidSpecifier(e) && De.isValidZone(e);
    }
  }, {
    key: "normalizeZone",
    value: function normalizeZone(e) {
      return xe(e, qe.defaultZone);
    }
  }, {
    key: "months",
    value: function months() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "long";

      var _ref16 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref16$locale = _ref16.locale,
          t = _ref16$locale === void 0 ? null : _ref16$locale,
          _ref16$numberingSyste = _ref16.numberingSystem,
          r = _ref16$numberingSyste === void 0 ? null : _ref16$numberingSyste,
          _ref16$locObj = _ref16.locObj,
          n = _ref16$locObj === void 0 ? null : _ref16$locObj,
          _ref16$outputCalendar = _ref16.outputCalendar,
          s = _ref16$outputCalendar === void 0 ? "gregory" : _ref16$outputCalendar;

      return (n || Ye.create(t, r, s)).months(e);
    }
  }, {
    key: "monthsFormat",
    value: function monthsFormat() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "long";

      var _ref17 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref17$locale = _ref17.locale,
          t = _ref17$locale === void 0 ? null : _ref17$locale,
          _ref17$numberingSyste = _ref17.numberingSystem,
          r = _ref17$numberingSyste === void 0 ? null : _ref17$numberingSyste,
          _ref17$locObj = _ref17.locObj,
          n = _ref17$locObj === void 0 ? null : _ref17$locObj,
          _ref17$outputCalendar = _ref17.outputCalendar,
          s = _ref17$outputCalendar === void 0 ? "gregory" : _ref17$outputCalendar;

      return (n || Ye.create(t, r, s)).months(e, !0);
    }
  }, {
    key: "weekdays",
    value: function weekdays() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "long";

      var _ref18 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref18$locale = _ref18.locale,
          t = _ref18$locale === void 0 ? null : _ref18$locale,
          _ref18$numberingSyste = _ref18.numberingSystem,
          r = _ref18$numberingSyste === void 0 ? null : _ref18$numberingSyste,
          _ref18$locObj = _ref18.locObj,
          n = _ref18$locObj === void 0 ? null : _ref18$locObj;

      return (n || Ye.create(t, r, null)).weekdays(e);
    }
  }, {
    key: "weekdaysFormat",
    value: function weekdaysFormat() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "long";

      var _ref19 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref19$locale = _ref19.locale,
          t = _ref19$locale === void 0 ? null : _ref19$locale,
          _ref19$numberingSyste = _ref19.numberingSystem,
          r = _ref19$numberingSyste === void 0 ? null : _ref19$numberingSyste,
          _ref19$locObj = _ref19.locObj,
          n = _ref19$locObj === void 0 ? null : _ref19$locObj;

      return (n || Ye.create(t, r, null)).weekdays(e, !0);
    }
  }, {
    key: "meridiems",
    value: function meridiems() {
      var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref20$locale = _ref20.locale,
          e = _ref20$locale === void 0 ? null : _ref20$locale;

      return Ye.create(e).meridiems();
    }
  }, {
    key: "eras",
    value: function eras() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "short";

      var _ref21 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref21$locale = _ref21.locale,
          t = _ref21$locale === void 0 ? null : _ref21$locale;

      return Ye.create(t, null, "gregory").eras(e);
    }
  }, {
    key: "features",
    value: function features() {
      return {
        relative: L()
      };
    }
  }]);

  return Rt;
}();

exports.Info = Rt;

function Pt(e, t) {
  var r = function r(e) {
    return e.toUTC(0, {
      keepLocalTime: !0
    }).startOf("day").valueOf();
  },
      e = r(t) - r(e);

  return Math.floor(_t.fromMillis(e).as("days"));
}

function Jt(e, t, r, n) {
  var _t$fromMillis;

  var _ref22 = function (t, r, e) {
    var n, s;
    var i = {};
    var a, o;

    for (var _i5 = 0, _arr2 = [["years", function (e, t) {
      return t.year - e.year;
    }], ["quarters", function (e, t) {
      return t.quarter - e.quarter;
    }], ["months", function (e, t) {
      return t.month - e.month + 12 * (t.year - e.year);
    }], ["weeks", function (e, t) {
      t = Pt(e, t);
      return (t - t % 7) / 7;
    }], ["days", Pt]]; _i5 < _arr2.length; _i5++) {
      var _arr2$_i = _slicedToArray(_arr2[_i5], 2);

      n = _arr2$_i[0];
      s = _arr2$_i[1];

      if (0 <= e.indexOf(n)) {
        a = n;

        var _e23 = s(t, r);

        o = t.plus(_defineProperty({}, n, _e23)), o > r ? (t = t.plus(_defineProperty({}, n, _e23 - 1)), --_e23) : t = o, i[n] = _e23;
      }
    }

    return [t, i, o, a];
  }(e, t, r),
      _ref23 = _slicedToArray(_ref22, 4),
      s = _ref23[0],
      i = _ref23[1],
      a = _ref23[2],
      o = _ref23[3];

  e = t - s, r = r.filter(function (e) {
    return 0 <= ["hours", "minutes", "seconds", "milliseconds"].indexOf(e);
  });
  0 === r.length && (a < t && (a = s.plus(_defineProperty({}, o, 1))), a !== s && (i[o] = (i[o] || 0) + e / (a - s)));
  t = _t.fromObject(i, n);
  return 0 < r.length ? (_t$fromMillis = _t.fromMillis(e, n)).shiftTo.apply(_t$fromMillis, _toConsumableArray(r)).plus(t) : t;
}

var Yt = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
},
    Gt = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
},
    Bt = Yt.hanidec.replace(/[\[|\]]/g, "").split("");

function Qt(_ref24) {
  var e = _ref24.numberingSystem;
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return new RegExp("".concat(Yt[e || "latn"]).concat(t));
}

var Kt = "missing Intl.DateTimeFormat.formatToParts support";

function Xt(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (e) {
    return e;
  };
  return {
    regex: e,
    deser: function deser(_ref25) {
      var _ref26 = _slicedToArray(_ref25, 1),
          e = _ref26[0];

      return t(function (t) {
        var r = parseInt(t, 10);

        if (isNaN(r)) {
          r = "";

          for (var _e24 = 0; _e24 < t.length; _e24++) {
            var n = t.charCodeAt(_e24);
            if (-1 !== t[_e24].search(Yt.hanidec)) r += Bt.indexOf(t[_e24]);else for (var _a2 in Gt) {
              var _Gt$_a = _slicedToArray(Gt[_a2], 2),
                  s = _Gt$_a[0],
                  i = _Gt$_a[1];

              s <= n && n <= i && (r += n - s);
            }
          }

          return parseInt(r, 10);
        }

        return r;
      }(e));
    }
  };
}

var er = "( |".concat(String.fromCharCode(160), ")"),
    tr = new RegExp(er, "g");

function rr(e) {
  return e.replace(/\./g, "\\.?").replace(tr, er);
}

function nr(e) {
  return e.replace(/\./g, "").replace(tr, " ").toLowerCase();
}

function sr(e, r) {
  return null === e ? null : {
    regex: RegExp(e.map(rr).join("|")),
    deser: function deser(_ref27) {
      var _ref28 = _slicedToArray(_ref27, 1),
          t = _ref28[0];

      return e.findIndex(function (e) {
        return nr(t) === nr(e);
      }) + r;
    }
  };
}

function ir(e, t) {
  return {
    regex: e,
    deser: function deser(_ref29) {
      var _ref30 = _slicedToArray(_ref29, 3),
          e = _ref30[1],
          t = _ref30[2];

      return Q(e, t);
    },
    groups: t
  };
}

function ar(e) {
  return {
    regex: e,
    deser: function deser(_ref31) {
      var _ref32 = _slicedToArray(_ref31, 1),
          e = _ref32[0];

      return e;
    }
  };
}

var or = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};
var ur = null;

function lr(e, t) {
  if (e.literal) return e;
  var r = pe.macroTokenToFormatOpts(e.val);
  if (!r) return e;
  var n = pe.create(t, r),
      s = n.formatDateTimeParts((ur = ur || Wr.fromMillis(1555555555555), ur)),
      i = s.map(function (e) {
    return function (e, t) {
      var _e25 = e,
          r = _e25.type,
          e = _e25.value;
      if ("literal" === r) return {
        literal: !0,
        val: e
      };
      t = t[r];
      var n = or[r];
      return "object" == _typeof(n) && (n = n[t]), n ? {
        literal: !1,
        val: n
      } : void 0;
    }(e, r);
  });
  return i.includes(void 0) ? e : i;
}

function cr(t, e, r) {
  var _Array$prototype2;

  var n = (l = pe.parseFormat(r), a = t, (_Array$prototype2 = Array.prototype).concat.apply(_Array$prototype2, _toConsumableArray(l.map(function (e) {
    return lr(e, a);
  })))),
      s = n.map(function (e) {
    return function (t, r) {
      var n = Qt(r),
          s = Qt(r, "{2}"),
          i = Qt(r, "{3}"),
          a = Qt(r, "{4}"),
          o = Qt(r, "{6}"),
          u = Qt(r, "{1,2}"),
          l = Qt(r, "{1,3}"),
          c = Qt(r, "{1,6}"),
          h = Qt(r, "{1,9}"),
          d = Qt(r, "{2,4}"),
          m = Qt(r, "{4,6}"),
          f = function f(e) {
        return {
          regex: RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")),
          deser: function deser(_ref33) {
            var _ref34 = _slicedToArray(_ref33, 1),
                e = _ref34[0];

            return e;
          },
          literal: !0
        };
      },
          e = function (e) {
        if (t.literal) return f(e);

        switch (e.val) {
          case "G":
            return sr(r.eras("short", !1), 0);

          case "GG":
            return sr(r.eras("long", !1), 0);

          case "y":
            return Xt(c);

          case "yy":
            return Xt(d, G);

          case "yyyy":
            return Xt(a);

          case "yyyyy":
            return Xt(m);

          case "yyyyyy":
            return Xt(o);

          case "M":
            return Xt(u);

          case "MM":
            return Xt(s);

          case "MMM":
            return sr(r.months("short", !0, !1), 1);

          case "MMMM":
            return sr(r.months("long", !0, !1), 1);

          case "L":
            return Xt(u);

          case "LL":
            return Xt(s);

          case "LLL":
            return sr(r.months("short", !1, !1), 1);

          case "LLLL":
            return sr(r.months("long", !1, !1), 1);

          case "d":
            return Xt(u);

          case "dd":
            return Xt(s);

          case "o":
            return Xt(l);

          case "ooo":
            return Xt(i);

          case "HH":
            return Xt(s);

          case "H":
            return Xt(u);

          case "hh":
            return Xt(s);

          case "h":
            return Xt(u);

          case "mm":
            return Xt(s);

          case "m":
          case "q":
            return Xt(u);

          case "qq":
            return Xt(s);

          case "s":
            return Xt(u);

          case "ss":
            return Xt(s);

          case "S":
            return Xt(l);

          case "SSS":
            return Xt(i);

          case "u":
            return ar(h);

          case "a":
            return sr(r.meridiems(), 0);

          case "kkkk":
            return Xt(a);

          case "kk":
            return Xt(d, G);

          case "W":
            return Xt(u);

          case "WW":
            return Xt(s);

          case "E":
          case "c":
            return Xt(n);

          case "EEE":
            return sr(r.weekdays("short", !1, !1), 1);

          case "EEEE":
            return sr(r.weekdays("long", !1, !1), 1);

          case "ccc":
            return sr(r.weekdays("short", !0, !1), 1);

          case "cccc":
            return sr(r.weekdays("long", !0, !1), 1);

          case "Z":
          case "ZZ":
            return ir(new RegExp("([+-]".concat(u.source, ")(?::(").concat(s.source, "))?")), 2);

          case "ZZZ":
            return ir(new RegExp("([+-]".concat(u.source, ")(").concat(s.source, ")?")), 2);

          case "z":
            return ar(/[a-z_+-/]{1,256}?/i);

          default:
            return f(e);
        }
      }(t) || {
        invalidReason: Kt
      };

      return e.token = t, e;
    }(e, t);
  }),
      i = s.find(function (e) {
    return e.invalidReason;
  });
  var a;
  if (i) return {
    input: e,
    tokens: n,
    invalidReason: i.invalidReason
  };

  var o = "^".concat((c = s).map(function (e) {
    return e.regex;
  }).reduce(function (e, t) {
    return "".concat(e, "(").concat(t.source, ")");
  }, ""), "$"),
      u = c,
      r = RegExp(o, "i"),
      _ref35 = function (e, t, r) {
    var n = e.match(t);

    if (n) {
      var _s2 = {};
      var _e26 = 1;

      for (var _i6 in r) {
        if (q(r, _i6)) {
          var _a3 = r[_i6],
              _o3 = _a3.groups ? _a3.groups + 1 : 1;

          !_a3.literal && _a3.token && (_s2[_a3.token.val[0]] = _a3.deser(n.slice(_e26, _e26 + _o3))), _e26 += _o3;
        }
      }

      return [n, _s2];
    }

    return [n, {}];
  }(e, r, u),
      _ref36 = _slicedToArray(_ref35, 2),
      l = _ref36[0],
      c = _ref36[1],
      _ref37 = c ? function (n) {
    var e;
    return e = $(n.Z) ? $(n.z) ? null : De.create(n.z) : new Ve(n.Z), $(n.q) || (n.M = 3 * (n.q - 1) + 1), $(n.h) || (n.h < 12 && 1 === n.a ? n.h += 12 : 12 === n.h && 0 === n.a && (n.h = 0)), 0 === n.G && n.y && (n.y = -n.y), $(n.u) || (n.S = U(n.u)), [Object.keys(n).reduce(function (e, t) {
      var r = function (e) {
        switch (e) {
          case "S":
            return "millisecond";

          case "s":
            return "second";

          case "m":
            return "minute";

          case "h":
          case "H":
            return "hour";

          case "d":
            return "day";

          case "o":
            return "ordinal";

          case "L":
          case "M":
            return "month";

          case "y":
            return "year";

          case "E":
          case "c":
            return "weekday";

          case "W":
            return "weekNumber";

          case "k":
            return "weekYear";

          case "q":
            return "quarter";

          default:
            return null;
        }
      }(t);

      return r && (e[r] = n[t]), e;
    }, {}), e];
  }(c) : [null, null],
      _ref38 = _slicedToArray(_ref37, 2),
      o = _ref38[0],
      u = _ref38[1];

  if (q(c, "a") && q(c, "H")) throw new N("Can't include meridiem when specifying 24-hour format");
  return {
    input: e,
    tokens: n,
    regex: r,
    rawMatches: l,
    matches: c,
    result: o,
    zone: u
  };
}

var hr = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    dr = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function mr(e, t) {
  return new ve("unit out of range", "you specified ".concat(t, " (of type ").concat(_typeof(t), ") as a ").concat(e, ", which is invalid"));
}

function fr(e, t, r) {
  r = new Date(Date.UTC(e, t - 1, r)).getUTCDay();
  return 0 === r ? 7 : r;
}

function yr(e, t, r) {
  return r + (W(e) ? dr : hr)[t - 1];
}

function gr(e, t) {
  var r = W(e) ? dr : hr,
      n = r.findIndex(function (e) {
    return e < t;
  }),
      s = t - r[n];
  return {
    month: n + 1,
    day: s
  };
}

function wr(e) {
  var t = e.year,
      r = e.month,
      n = e.day,
      s = yr(t, r, n),
      n = fr(t, r, n);
  var i = Math.floor((s - n + 10) / 7),
      a;
  return i < 1 ? (a = t - 1, i = Y(a)) : i > Y(t) ? (a = t + 1, i = 1) : a = t, _objectSpread({
    weekYear: a,
    weekNumber: i,
    weekday: n
  }, te(e));
}

function pr(e) {
  var t = e.weekYear,
      r = e.weekNumber,
      n = e.weekday,
      s = fr(t, 1, 4),
      i = R(t);
  var a = 7 * r + n - s - 3,
      o;
  a < 1 ? (o = t - 1, a += R(o)) : a > i ? (o = t + 1, a -= R(t)) : o = t;

  var _gr = gr(o, a),
      i = _gr.month,
      t = _gr.day;

  return _objectSpread({
    year: o,
    month: i,
    day: t
  }, te(e));
}

function vr(e) {
  var t = e.year,
      r = e.month,
      n = e.day;
  return _objectSpread({
    year: t,
    ordinal: yr(t, r, n)
  }, te(e));
}

function Tr(e) {
  var t = e.year,
      r = e.ordinal,
      _gr2 = gr(t, r),
      n = _gr2.month,
      r = _gr2.day;

  return _objectSpread({
    year: t,
    month: n,
    day: r
  }, te(e));
}

function Sr(e) {
  var t = F(e.year),
      r = A(e.month, 1, 12),
      n = A(e.day, 1, P(e.year, e.month));
  return t ? r ? !n && mr("day", e.day) : mr("month", e.month) : mr("year", e.year);
}

function Or(e) {
  var _e27 = e,
      t = _e27.hour,
      r = _e27.minute,
      n = _e27.second,
      s = _e27.millisecond,
      i = A(t, 0, 23) || 24 === t && 0 === r && 0 === n && 0 === s,
      a = A(r, 0, 59),
      o = A(n, 0, 59),
      e = A(s, 0, 999);
  return i ? a ? o ? !e && mr("millisecond", s) : mr("second", n) : mr("minute", r) : mr("hour", t);
}

var br = "Invalid DateTime";

function Mr(e) {
  return new ve("unsupported zone", "the zone \"".concat(e.name, "\" is not supported"));
}

function kr(e) {
  return null === e.weekData && (e.weekData = wr(e.c)), e.weekData;
}

function Nr(e, t) {
  e = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid
  };
  return new Wr(_objectSpread(_objectSpread(_objectSpread({}, e), t), {}, {
    old: e
  }));
}

function Dr(e, t, r) {
  var n = e - 60 * t * 1e3;
  var s = r.offset(n);
  if (t === s) return [n, t];
  n -= 60 * (s - t) * 1e3;
  r = r.offset(n);
  return s === r ? [n, s] : [e - 60 * Math.min(s, r) * 1e3, Math.max(s, r)];
}

function Er(e, t) {
  e += 60 * t * 1e3;
  var r = new Date(e);
  return {
    year: r.getUTCFullYear(),
    month: r.getUTCMonth() + 1,
    day: r.getUTCDate(),
    hour: r.getUTCHours(),
    minute: r.getUTCMinutes(),
    second: r.getUTCSeconds(),
    millisecond: r.getUTCMilliseconds()
  };
}

function Vr(e, t, r) {
  return Dr(J(e), t, r);
}

function Ir(e, t) {
  var r = e.o,
      n = e.c.year + Math.trunc(t.years),
      s = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters),
      s = _objectSpread(_objectSpread({}, e.c), {}, {
    year: n,
    month: s,
    day: Math.min(e.c.day, P(n, s)) + Math.trunc(t.days) + 7 * Math.trunc(t.weeks)
  }),
      t = _t.fromObject({
    years: t.years - Math.trunc(t.years),
    quarters: t.quarters - Math.trunc(t.quarters),
    months: t.months - Math.trunc(t.months),
    weeks: t.weeks - Math.trunc(t.weeks),
    days: t.days - Math.trunc(t.days),
    hours: t.hours,
    minutes: t.minutes,
    seconds: t.seconds,
    milliseconds: t.milliseconds
  }).as("milliseconds");

  var _Dr = Dr(J(s), r, e.zone),
      _Dr2 = _slicedToArray(_Dr, 2),
      i = _Dr2[0],
      a = _Dr2[1];

  return 0 !== t && (i += t, a = e.zone.offset(i)), {
    ts: i,
    o: a
  };
}

function xr(e, t, r, n, s) {
  var i = r.setZone,
      a = r.zone;

  if (e && 0 !== Object.keys(e).length) {
    var _o4 = t || a,
        _u2 = Wr.fromObject(e, _objectSpread(_objectSpread({}, r), {}, {
      zone: _o4
    }));

    return i ? _u2 : _u2.setZone(a);
  }

  return Wr.invalid(new ve("unparsable", "the input \"".concat(s, "\" can't be parsed as ").concat(n)));
}

function Cr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  return e.isValid ? pe.create(Ye.create("en-US"), {
    allowZ: r,
    forceSimple: !0
  }).formatDateTimeFromString(e, t) : null;
}

function $r(e, _ref39) {
  var _ref39$suppressSecond = _ref39.suppressSeconds,
      t = _ref39$suppressSecond === void 0 ? !1 : _ref39$suppressSecond,
      _ref39$suppressMillis = _ref39.suppressMilliseconds,
      r = _ref39$suppressMillis === void 0 ? !1 : _ref39$suppressMillis,
      n = _ref39.includeOffset,
      _ref39$includePrefix = _ref39.includePrefix,
      s = _ref39$includePrefix === void 0 ? !1 : _ref39$includePrefix,
      _ref39$includeZone = _ref39.includeZone,
      i = _ref39$includeZone === void 0 ? !1 : _ref39$includeZone,
      _ref39$spaceZone = _ref39.spaceZone,
      a = _ref39$spaceZone === void 0 ? !1 : _ref39$spaceZone,
      _ref39$format = _ref39.format,
      o = _ref39$format === void 0 ? "extended" : _ref39$format;
  var u = "basic" === o ? "HHmm" : "HH:mm";
  t && 0 === e.second && 0 === e.millisecond || (u += "basic" === o ? "ss" : ":ss", r && 0 === e.millisecond || (u += ".SSS")), (i || n) && a && (u += " "), i ? u += "z" : n && (u += "basic" === o ? "ZZZ" : "ZZ");
  var l = Cr(e, u);
  return s && (l = "T" + l), l;
}

var Zr = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    Fr = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    Lr = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    zr = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    qr = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    Ar = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

function jr(e) {
  var t = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[e.toLowerCase()];
  if (!t) throw new i(e);
  return t;
}

function _r(e, t) {
  var r = xe(t.zone, qe.defaultZone),
      n = Ye.fromObject(t),
      s = qe.now();
  var i, a;
  if ($(e.year)) i = s;else {
    var _iterator6 = _createForOfIteratorHelper(zr),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _o5 = _step6.value;
        $(e[_o5]) && (e[_o5] = Zr[_o5]);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    t = Sr(e) || Or(e);
    if (t) return Wr.invalid(t);
    t = r.offset(s);

    var _Vr = Vr(e, t, r);

    var _Vr2 = _slicedToArray(_Vr, 2);

    i = _Vr2[0];
    a = _Vr2[1];
  }
  return new Wr({
    ts: i,
    zone: r,
    loc: n,
    o: a
  });
}

function Ur(t, n, s) {
  var i = !!$(s.round) || s.round,
      e = function e(_e28, t) {
    _e28 = H(_e28, i || s.calendary ? 0 : 2, !0);
    var r = n.loc.clone(s).relFormatter(s);
    return r.format(_e28, t);
  },
      r = function r(e) {
    return s.calendary ? n.hasSame(t, e) ? 0 : n.startOf(e).diff(t.startOf(e), e).get(e) : n.diff(t, e).get(e);
  };

  if (s.unit) return e(r(s.unit), s.unit);

  var _iterator7 = _createForOfIteratorHelper(s.units),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _o6 = _step7.value;
      var a = r(_o6);
      if (1 <= Math.abs(a)) return e(a, _o6);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  return e(n < t ? -0 : 0, s.units[s.units.length - 1]);
}

function Hr(e) {
  var t = {},
      r;
  return r = 0 < e.length && "object" == _typeof(e[e.length - 1]) ? (t = e[e.length - 1], Array.from(e).slice(0, e.length - 1)) : Array.from(e), [t, r];
}

var Wr = /*#__PURE__*/function () {
  function Wr(e) {
    var _ref40;

    _classCallCheck(this, Wr);

    var t = e.zone || qe.defaultZone;
    var r = e.invalid || (Number.isNaN(e.ts) ? new ve("invalid input") : null) || (t.isValid ? null : Mr(t));
    this.ts = $(e.ts) ? qe.now() : e.ts;
    var n = null,
        s = null;
    var i;
    r || (e.old && e.old.ts === this.ts && e.old.zone.equals(t) ? (_ref40 = [e.old.c, e.old.o], n = _ref40[0], s = _ref40[1], _ref40) : (i = t.offset(this.ts), n = Er(this.ts, i), r = Number.isNaN(n.year) ? new ve("invalid input") : null, n = r ? null : n, s = r ? null : i)), this._zone = t, this.loc = e.loc || Ye.create(), this.invalid = r, this.weekData = null, this.c = n, this.o = s, this.isLuxonDateTime = !0;
  }

  _createClass(Wr, [{
    key: "get",
    value: function get(e) {
      return this[e];
    }
  }, {
    key: "isValid",
    get: function get() {
      return null === this.invalid;
    }
  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? kr(this).weekYear : NaN;
    }
  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? kr(this).weekNumber : NaN;
    }
  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? kr(this).weekday : NaN;
    }
  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? vr(this.c).ordinal : NaN;
    }
  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Rt.months("short", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Rt.months("long", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Rt.weekdays("short", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Rt.weekdays("long", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }
  }, {
    key: "offsetNameShort",
    get: function get() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      }) : null;
    }
  }, {
    key: "offsetNameLong",
    get: function get() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      }) : null;
    }
  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.isUniversal : null;
    }
  }, {
    key: "isInDST",
    get: function get() {
      return !this.isOffsetFixed && (this.offset > this.set({
        month: 1
      }).offset || this.offset > this.set({
        month: 5
      }).offset);
    }
  }, {
    key: "isInLeapYear",
    get: function get() {
      return W(this.year);
    }
  }, {
    key: "daysInMonth",
    get: function get() {
      return P(this.year, this.month);
    }
  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? R(this.year) : NaN;
    }
  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? Y(this.weekYear) : NaN;
    }
  }, {
    key: "resolvedLocaleOptions",
    value: function resolvedLocaleOptions() {
      var _this12 = this;

      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return function (e) {
        var _pe$create$resolvedOp = pe.create(_this12.loc.clone(e), e).resolvedOptions(_this12),
            t = _pe$create$resolvedOp.locale,
            r = _pe$create$resolvedOp.numberingSystem,
            e = _pe$create$resolvedOp.calendar;

        return {
          locale: t,
          numberingSystem: r,
          outputCalendar: e
        };
      }(e);
    }
  }, {
    key: "toUTC",
    value: function toUTC() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.setZone(Ve.instance(e), t);
    }
  }, {
    key: "toLocal",
    value: function toLocal() {
      return this.setZone(qe.defaultZone);
    }
  }, {
    key: "setZone",
    value: function setZone(t) {
      var _ref41 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref41$keepLocalTime = _ref41.keepLocalTime,
          r = _ref41$keepLocalTime === void 0 ? !1 : _ref41$keepLocalTime,
          _ref41$keepCalendarTi = _ref41.keepCalendarTime,
          n = _ref41$keepCalendarTi === void 0 ? !1 : _ref41$keepCalendarTi;

      if ((t = xe(t, qe.defaultZone)).equals(this.zone)) return this;

      if (t.isValid) {
        var _Vr3, _Vr4;

        var _e29 = this.ts;
        return (r || n) && (r = t.offset(this.ts), n = this.toObject(), (_Vr3 = Vr(n, r, t), _Vr4 = _slicedToArray(_Vr3, 1), _e29 = _Vr4[0], _Vr3)), Nr(this, {
          ts: _e29,
          zone: t
        });
      }

      return Wr.invalid(Mr(t));
    }
  }, {
    key: "reconfigure",
    value: function reconfigure() {
      var _ref42 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          e = _ref42.locale,
          t = _ref42.numberingSystem,
          r = _ref42.outputCalendar;

      r = this.loc.clone({
        locale: e,
        numberingSystem: t,
        outputCalendar: r
      });
      return Nr(this, {
        loc: r
      });
    }
  }, {
    key: "setLocale",
    value: function setLocale(e) {
      return this.reconfigure({
        locale: e
      });
    }
  }, {
    key: "set",
    value: function set(e) {
      if (!this.isValid) return this;
      var t = X(e, jr),
          r = !$(t.weekYear) || !$(t.weekNumber) || !$(t.weekday),
          n = !$(t.ordinal),
          s = !$(t.year),
          i = !$(t.month) || !$(t.day),
          e = t.weekYear || t.weekNumber;
      if ((s || i || n) && e) throw new N("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      if (i && n) throw new N("Can't mix ordinal dates with month/day");
      var a;
      r ? a = pr(_objectSpread(_objectSpread({}, wr(this.c)), t)) : $(t.ordinal) ? (a = _objectSpread(_objectSpread({}, this.toObject()), t), $(t.day) && (a.day = Math.min(P(a.year, a.month), a.day))) : a = Tr(_objectSpread(_objectSpread({}, vr(this.c)), t));

      var _Vr5 = Vr(a, this.o, this.zone),
          _Vr6 = _slicedToArray(_Vr5, 2),
          r = _Vr6[0],
          t = _Vr6[1];

      return Nr(this, {
        ts: r,
        o: t
      });
    }
  }, {
    key: "plus",
    value: function plus(e) {
      return this.isValid ? Nr(this, Ir(this, Ut(e))) : this;
    }
  }, {
    key: "minus",
    value: function minus(e) {
      return this.isValid ? Nr(this, Ir(this, Ut(e).negate())) : this;
    }
  }, {
    key: "startOf",
    value: function startOf(e) {
      if (!this.isValid) return this;

      var t = {},
          r = _t.normalizeUnit(e);

      switch (r) {
        case "years":
          t.month = 1;

        case "quarters":
        case "months":
          t.day = 1;

        case "weeks":
        case "days":
          t.hour = 0;

        case "hours":
          t.minute = 0;

        case "minutes":
          t.second = 0;

        case "seconds":
          t.millisecond = 0;
      }

      return "weeks" === r && (t.weekday = 1), "quarters" === r && (e = Math.ceil(this.month / 3), t.month = 3 * (e - 1) + 1), this.set(t);
    }
  }, {
    key: "endOf",
    value: function endOf(e) {
      return this.isValid ? this.plus(_defineProperty({}, e, 1)).startOf(e).minus(1) : this;
    }
  }, {
    key: "toFormat",
    value: function toFormat(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.isValid ? pe.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : br;
    }
  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : c;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.isValid ? pe.create(this.loc.clone(t), e).formatDateTime(this) : br;
    }
  }, {
    key: "toLocaleParts",
    value: function toLocaleParts() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.isValid ? pe.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
    }
  }, {
    key: "toISO",
    value: function toISO() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.isValid ? "".concat(this.toISODate(e), "T").concat(this.toISOTime(e)) : null;
    }
  }, {
    key: "toISODate",
    value: function toISODate() {
      var _ref43 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref43$format = _ref43.format,
          e = _ref43$format === void 0 ? "extended" : _ref43$format;

      var t = "basic" === e ? "yyyyMMdd" : "yyyy-MM-dd";
      return 9999 < this.year && (t = "+" + t), Cr(this, t);
    }
  }, {
    key: "toISOWeekDate",
    value: function toISOWeekDate() {
      return Cr(this, "kkkk-'W'WW-c");
    }
  }, {
    key: "toISOTime",
    value: function toISOTime() {
      var _ref44 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref44$suppressMillis = _ref44.suppressMilliseconds,
          e = _ref44$suppressMillis === void 0 ? !1 : _ref44$suppressMillis,
          _ref44$suppressSecond = _ref44.suppressSeconds,
          t = _ref44$suppressSecond === void 0 ? !1 : _ref44$suppressSecond,
          _ref44$includeOffset = _ref44.includeOffset,
          r = _ref44$includeOffset === void 0 ? !0 : _ref44$includeOffset,
          _ref44$includePrefix = _ref44.includePrefix,
          n = _ref44$includePrefix === void 0 ? !1 : _ref44$includePrefix,
          _ref44$format = _ref44.format,
          s = _ref44$format === void 0 ? "extended" : _ref44$format;

      return $r(this, {
        suppressSeconds: t,
        suppressMilliseconds: e,
        includeOffset: r,
        includePrefix: n,
        format: s
      });
    }
  }, {
    key: "toRFC2822",
    value: function toRFC2822() {
      return Cr(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
    }
  }, {
    key: "toHTTP",
    value: function toHTTP() {
      return Cr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }
  }, {
    key: "toSQLDate",
    value: function toSQLDate() {
      return Cr(this, "yyyy-MM-dd");
    }
  }, {
    key: "toSQLTime",
    value: function toSQLTime() {
      var _ref45 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref45$includeOffset = _ref45.includeOffset,
          e = _ref45$includeOffset === void 0 ? !0 : _ref45$includeOffset,
          _ref45$includeZone = _ref45.includeZone,
          t = _ref45$includeZone === void 0 ? !1 : _ref45$includeZone;

      return $r(this, {
        includeOffset: e,
        includeZone: t,
        spaceZone: !0
      });
    }
  }, {
    key: "toSQL",
    value: function toSQL() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.isValid ? "".concat(this.toSQLDate(), " ").concat(this.toSQLTime(e)) : null;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.isValid ? this.toISO() : br;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toMillis();
    }
  }, {
    key: "toMillis",
    value: function toMillis() {
      return this.isValid ? this.ts : NaN;
    }
  }, {
    key: "toSeconds",
    value: function toSeconds() {
      return this.isValid ? this.ts / 1e3 : NaN;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toISO();
    }
  }, {
    key: "toBSON",
    value: function toBSON() {
      return this.toJSDate();
    }
  }, {
    key: "toObject",
    value: function toObject() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.isValid) return {};

      var t = _objectSpread({}, this.c);

      return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t;
    }
  }, {
    key: "toJSDate",
    value: function toJSDate() {
      return new Date(this.isValid ? this.ts : NaN);
    }
  }, {
    key: "diff",
    value: function diff(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "milliseconds";
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!this.isValid || !e.isValid) return _t.invalid("created by diffing an invalid DateTime");
      r = _objectSpread({
        locale: this.locale,
        numberingSystem: this.numberingSystem
      }, r);
      var n = (t = t, (Array.isArray(t) ? t : [t]).map(_t.normalizeUnit)),
          s = e.valueOf() > this.valueOf(),
          i = s ? this : e,
          a = s ? e : this,
          o = Jt(i, a, n, r);
      return s ? o.negate() : o;
    }
  }, {
    key: "diffNow",
    value: function diffNow() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "milliseconds";
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.diff(Wr.now(), e, t);
    }
  }, {
    key: "until",
    value: function until(e) {
      return this.isValid ? Wt.fromDateTimes(this, e) : this;
    }
  }, {
    key: "hasSame",
    value: function hasSame(e, t) {
      if (!this.isValid) return !1;
      var r = e.valueOf();
      var n = this.setZone(e.zone, {
        keepLocalTime: !0
      });
      return n.startOf(t) <= r && r <= n.endOf(t);
    }
  }, {
    key: "equals",
    value: function equals(e) {
      return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
    }
  }, {
    key: "toRelative",
    value: function toRelative() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.isValid) return null;
      var t = e.base || Wr.fromObject({}, {
        zone: this.zone
      }),
          r = e.padding ? this < t ? -e.padding : e.padding : 0;
      var n = ["years", "months", "days", "hours", "minutes", "seconds"],
          s = e.unit;
      return Array.isArray(e.unit) && (n = e.unit, s = void 0), Ur(t, this.plus(r), _objectSpread(_objectSpread({}, e), {}, {
        numeric: "always",
        units: n,
        unit: s
      }));
    }
  }, {
    key: "toRelativeCalendar",
    value: function toRelativeCalendar() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.isValid ? Ur(e.base || Wr.fromObject({}, {
        zone: this.zone
      }), this, _objectSpread(_objectSpread({}, e), {}, {
        numeric: "auto",
        units: ["years", "months", "days"],
        calendary: !0
      })) : null;
    }
  }], [{
    key: "now",
    value: function now() {
      return new Wr({});
    }
  }, {
    key: "local",
    value: function local() {
      var _Hr = Hr(arguments),
          _Hr2 = _slicedToArray(_Hr, 2),
          e = _Hr2[0],
          t = _Hr2[1],
          _t8 = t,
          _t9 = _slicedToArray(_t8, 7),
          r = _t9[0],
          n = _t9[1],
          s = _t9[2],
          i = _t9[3],
          a = _t9[4],
          o = _t9[5],
          t = _t9[6];

      return _r({
        year: r,
        month: n,
        day: s,
        hour: i,
        minute: a,
        second: o,
        millisecond: t
      }, e);
    }
  }, {
    key: "utc",
    value: function utc() {
      var _Hr3 = Hr(arguments),
          _Hr4 = _slicedToArray(_Hr3, 2),
          e = _Hr4[0],
          t = _Hr4[1],
          _t10 = _slicedToArray(t, 7),
          r = _t10[0],
          n = _t10[1],
          s = _t10[2],
          i = _t10[3],
          a = _t10[4],
          o = _t10[5],
          u = _t10[6];

      return e.zone = Ve.utcInstance, _r({
        year: r,
        month: n,
        day: s,
        hour: i,
        minute: a,
        second: o,
        millisecond: u
      }, e);
    }
  }, {
    key: "fromJSDate",
    value: function fromJSDate(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var r = "[object Date]" === Object.prototype.toString.call(e) ? e.valueOf() : NaN;
      if (Number.isNaN(r)) return Wr.invalid("invalid input");
      e = xe(t.zone, qe.defaultZone);
      return e.isValid ? new Wr({
        ts: r,
        zone: e,
        loc: Ye.fromObject(t)
      }) : Wr.invalid(Mr(e));
    }
  }, {
    key: "fromMillis",
    value: function fromMillis(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (Z(e)) return e < -864e13 || 864e13 < e ? Wr.invalid("Timestamp out of range") : new Wr({
        ts: e,
        zone: xe(t.zone, qe.defaultZone),
        loc: Ye.fromObject(t)
      });
      throw new a("fromMillis requires a numerical input, but received a ".concat(_typeof(e), " with value ").concat(e));
    }
  }, {
    key: "fromSeconds",
    value: function fromSeconds(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (Z(e)) return new Wr({
        ts: 1e3 * e,
        zone: xe(t.zone, qe.defaultZone),
        loc: Ye.fromObject(t)
      });
      throw new a("fromSeconds requires a numerical input");
    }
  }, {
    key: "fromObject",
    value: function fromObject(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      e = e || {};
      var r = xe(t.zone, qe.defaultZone);
      if (!r.isValid) return Wr.invalid(Mr(r));
      var n = qe.now(),
          s = r.offset(n),
          i = X(e, jr),
          a = !$(i.ordinal),
          o = !$(i.year),
          u = !$(i.month) || !$(i.day),
          l = o || u,
          c = i.weekYear || i.weekNumber,
          h = Ye.fromObject(t);
      if ((l || a) && c) throw new N("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      if (u && a) throw new N("Can't mix ordinal dates with month/day");
      var d = c || i.weekday && !l;
      var m,
          f,
          y = Er(n, s);
      d ? (m = qr, f = Fr, y = wr(y)) : a ? (m = Ar, f = Lr, y = vr(y)) : (m = zr, f = Zr);
      var g = !1;

      var _iterator8 = _createForOfIteratorHelper(m),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _k = _step8.value;
          $(i[_k]) ? g ? i[_k] = f[_k] : i[_k] = y[_k] : g = !0;
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      var w,
          p,
          v,
          T,
          w = (d ? (p = i, v = F(p.weekYear), t = A(p.weekNumber, 1, Y(p.weekYear)), T = A(p.weekday, 1, 7), v ? t ? !T && mr("weekday", p.weekday) : mr("week", p.week) : mr("weekYear", p.weekYear)) : a ? (w = i, T = F(w.year), p = A(w.ordinal, 1, R(w.year)), T ? !p && mr("ordinal", w.ordinal) : mr("year", w.year)) : Sr(i)) || Or(i);
      if (w) return Wr.invalid(w);

      var S = d ? pr(i) : a ? Tr(i) : i,
          _Vr7 = Vr(S, s, r),
          _Vr8 = _slicedToArray(_Vr7, 2),
          O = _Vr8[0],
          b = _Vr8[1],
          M = new Wr({
        ts: O,
        zone: r,
        o: b,
        loc: h
      });

      return i.weekday && l && e.weekday !== M.weekday ? Wr.invalid("mismatched weekday", "you can't specify both a weekday of ".concat(i.weekday, " and a date of ").concat(M.toISO())) : M;
    }
  }, {
    key: "fromISO",
    value: function fromISO(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _Qe5 = Qe(e, [vt, bt], [Tt, Mt], [St, kt], [Ot, Nt]),
          _Qe6 = _slicedToArray(_Qe5, 2),
          r = _Qe6[0],
          n = _Qe6[1];

      return xr(r, n, t, "ISO 8601", e);
    }
  }, {
    key: "fromRFC2822",
    value: function fromRFC2822(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _Qe7 = Qe(e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim(), [dt, mt]),
          _Qe8 = _slicedToArray(_Qe7, 2),
          r = _Qe8[0],
          n = _Qe8[1];

      return xr(r, n, t, "RFC 2822", e);
    }
  }, {
    key: "fromHTTP",
    value: function fromHTTP(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return function (e) {
        var _Qe9 = Qe(e, [ft, wt], [yt, wt], [gt, pt]),
            _Qe10 = _slicedToArray(_Qe9, 2),
            r = _Qe10[0],
            e = _Qe10[1];

        return xr(r, e, t, "HTTP", t);
      }(e);
    }
  }, {
    key: "fromFormat",
    value: function fromFormat(e, t) {
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if ($(e) || $(t)) throw new a("fromFormat requires an input string and a format");

      var _r$locale = r.locale,
          n = _r$locale === void 0 ? null : _r$locale,
          _r$numberingSystem = r.numberingSystem,
          s = _r$numberingSystem === void 0 ? null : _r$numberingSystem,
          _ref46 = function (e, t, r) {
        var _cr = cr(e, t, r),
            e = _cr.result,
            t = _cr.zone,
            r = _cr.invalidReason;

        return [e, t, r];
      }(Ye.fromOpts({
        locale: n,
        numberingSystem: s,
        defaultToEN: !0
      }), e, t),
          _ref47 = _slicedToArray(_ref46, 3),
          i = _ref47[0],
          n = _ref47[1],
          s = _ref47[2];

      return s ? Wr.invalid(s) : xr(i, n, r, "format ".concat(t), e);
    }
  }, {
    key: "fromString",
    value: function fromString(e, t) {
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return Wr.fromFormat(e, t, r);
    }
  }, {
    key: "fromSQL",
    value: function fromSQL(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _Qe11 = Qe(e, [Et, It], [Vt, xt]),
          _Qe12 = _slicedToArray(_Qe11, 2),
          r = _Qe12[0],
          n = _Qe12[1];

      return xr(r, n, t, "SQL", e);
    }
  }, {
    key: "invalid",
    value: function invalid(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!e) throw new a("need to specify a reason the DateTime is invalid");
      t = e instanceof ve ? e : new ve(e, t);
      if (qe.throwOnInvalid) throw new r(t);
      return new Wr({
        invalid: t
      });
    }
  }, {
    key: "isDateTime",
    value: function isDateTime(e) {
      return e && e.isLuxonDateTime || !1;
    }
  }, {
    key: "min",
    value: function min() {
      for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        e[_key8] = arguments[_key8];
      }

      if (!e.every(Wr.isDateTime)) throw new a("min requires all arguments be DateTimes");
      return z(e, function (e) {
        return e.valueOf();
      }, Math.min);
    }
  }, {
    key: "max",
    value: function max() {
      for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        e[_key9] = arguments[_key9];
      }

      if (!e.every(Wr.isDateTime)) throw new a("max requires all arguments be DateTimes");
      return z(e, function (e) {
        return e.valueOf();
      }, Math.max);
    }
  }, {
    key: "fromFormatExplain",
    value: function fromFormatExplain(e, t) {
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return function (r) {
        var _r4 = r,
            _r4$locale = _r4.locale,
            n = _r4$locale === void 0 ? null : _r4$locale,
            _r4$numberingSystem = _r4.numberingSystem,
            r = _r4$numberingSystem === void 0 ? null : _r4$numberingSystem;
        return cr(Ye.fromOpts({
          locale: n,
          numberingSystem: r,
          defaultToEN: !0
        }), e, t);
      }(r);
    }
  }, {
    key: "fromStringExplain",
    value: function fromStringExplain(e, t) {
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return Wr.fromFormatExplain(e, t, r);
    }
  }, {
    key: "DATE_SHORT",
    get: function get() {
      return c;
    }
  }, {
    key: "DATE_MED",
    get: function get() {
      return h;
    }
  }, {
    key: "DATE_MED_WITH_WEEKDAY",
    get: function get() {
      return d;
    }
  }, {
    key: "DATE_FULL",
    get: function get() {
      return m;
    }
  }, {
    key: "DATE_HUGE",
    get: function get() {
      return f;
    }
  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return y;
    }
  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return g;
    }
  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return w;
    }
  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return p;
    }
  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return v;
    }
  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return T;
    }
  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return S;
    }
  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return O;
    }
  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return b;
    }
  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return M;
    }
  }, {
    key: "DATETIME_MED",
    get: function get() {
      return k;
    }
  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return D;
    }
  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return E;
    }
  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return V;
    }
  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return I;
    }
  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return x;
    }
  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return C;
    }
  }]);

  return Wr;
}();

exports.DateTime = Wr;

function Rr(e) {
  if (Wr.isDateTime(e)) return e;
  if (e && e.valueOf && Z(e.valueOf())) return Wr.fromJSDate(e);
  if (e && "object" == _typeof(e)) return Wr.fromObject(e);
  throw new a("Unknown datetime argument: ".concat(e, ", of type ").concat(_typeof(e)));
}

exports.VERSION = Xe = "2.0.2";
},{}],"js/calcDateDiff.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleForm = handleForm;
exports.diff = diff;

var _luxon = require("./luxon.js");

var _output = require("./output.js");

function handleForm() {
  var form = document.getElementById('calcDate');

  form.onsubmit = function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var dateFrom = formData.get('dateFrom');
    var dateTo = formData.get('dateTo');
    if (dateFrom === '' || dateTo === '') (0, _output.printError)('Укажите оба значения дат!');else {
      var dateDiff = diff(dateFrom, dateTo);
      (0, _output.printResult)(dateDiff);
    }
  };
}

function diff(dateFromString, dateToString) {
  if (dateFromString < dateToString) {
    var _ref = [dateToString, dateFromString];
    dateFromString = _ref[0];
    dateToString = _ref[1];
  }

  var dateFrom = _luxon.DateTime.fromISO(dateFromString);

  var dateTo = _luxon.DateTime.fromISO(dateToString);

  var diff = dateFrom.diff(dateTo, ['years', 'months', 'days']).toObject();
  return diff;
}
},{"./luxon.js":"js/luxon.js","./output.js":"js/output.js"}],"js/timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listener;

function listener() {
  var timerInput = document.querySelector(".time");
  var buttonRun = document.querySelector(".start");
  var timerShow = document.querySelector(".timer");
  var buttonPause = document.querySelector(".pause");
  var pause = false;
  var counter = 0;
  buttonPause.addEventListener('click', function () {
    pause = !pause;
    if (pause) buttonPause.innerHTML = 'Стоп';
    counter += 1;
    if (!pause) counter -= 1;
    buttonPause.innerHTML = 'Продолжить';
  });
  buttonRun.addEventListener('click', function () {
    var time = parseInt(timerInput.value);
    counter = time;
    var timer = setInterval(function () {
      var seconds = counter;

      if (counter <= 0) {
        var sound = new Howl({
          src: ['alarm.mp3']
        });
        sound.play();
        clearInterval(timer);
        timerShow.innerHTML = '';
      } else {
        var strTimer = "".concat(seconds);
        timerShow.innerHTML = strTimer;
      }

      if (!pause) --counter;
    }, 1000);
  });
}
},{}],"bundler.png":[function(require,module,exports) {
module.exports = "/bundler.840a00ef.png";
},{}],"js/switch.js":[function(require,module,exports) {
"use strict";

var _output = require("./output.js");

var _calcDateDiff = require("./calcDateDiff.js");

var _timer = _interopRequireDefault(require("./timer.js"));

var _bundler = _interopRequireDefault(require("../bundler.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pic = document.createElement('img');
pic.src = _bundler.default;

pic.onload = function () {
  document.body.appendChild(pic);
};

document.querySelectorAll('.switchBtn').forEach(function (btn) {
  var outputBlock = document.querySelector('.service');
  btn.addEventListener('click', function (event) {
    if (event.target.dataset.id === '1') {
      outputBlock.innerHTML = "".concat(_output.calcHTML);
      (0, _calcDateDiff.handleForm)();
      (0, _calcDateDiff.diff)();
    }

    if (event.target.dataset.id === '2') {
      (0, _output.clearParagraph)();
      outputBlock.innerHTML = "".concat(_output.timerHTML);
      (0, _timer.default)();
    }
  });
});
},{"./output.js":"js/output.js","./calcDateDiff.js":"js/calcDateDiff.js","./timer.js":"js/timer.js","../bundler.png":"bundler.png"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54863" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/switch.js"], null)
//# sourceMappingURL=/switch.28431c57.js.map