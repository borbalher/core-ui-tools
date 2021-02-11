/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/browser/core/application/error/application-not-running.js":
/*!***********************************************************************!*\
  !*** ./src/browser/core/application/error/application-not-running.js ***!
  \***********************************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ApplicationNotRunningError = /*#__PURE__*/function (_Error) {
  _inherits(ApplicationNotRunningError, _Error);

  var _super = _createSuper(ApplicationNotRunningError);

  function ApplicationNotRunningError() {
    var _this;

    _classCallCheck(this, ApplicationNotRunningError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'APPLICATION_NOT_RUNNING';
    return _this;
  }

  return ApplicationNotRunningError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = ApplicationNotRunningError;

/***/ }),

/***/ "./src/browser/core/application/error/application-running.js":
/*!*******************************************************************!*\
  !*** ./src/browser/core/application/error/application-running.js ***!
  \*******************************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ApplicationRunningError = /*#__PURE__*/function (_Error) {
  _inherits(ApplicationRunningError, _Error);

  var _super = _createSuper(ApplicationRunningError);

  function ApplicationRunningError() {
    var _this;

    _classCallCheck(this, ApplicationRunningError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'APPLICATION_RUNNING';
    return _this;
  }

  return ApplicationRunningError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = ApplicationRunningError;

/***/ }),

/***/ "./src/browser/core/application/index.js":
/*!***********************************************!*\
  !*** ./src/browser/core/application/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CoreFactory = __webpack_require__(/*! ../factory */ "./src/browser/core/factory.js"),
    ApplicationRunningError = __webpack_require__(/*! ./error/application-running */ "./src/browser/core/application/error/application-running.js"),
    ApplicationNotRunningError = __webpack_require__(/*! ./error/application-not-running */ "./src/browser/core/application/error/application-not-running.js");
/**
 * @implements Application
 */


var BrowserApplication = /*#__PURE__*/function () {
  function BrowserApplication(components) {
    _classCallCheck(this, BrowserApplication);

    var coreFactory = new CoreFactory();
    this.core = coreFactory.create(components);
    this.eventbus = undefined;
    this.isRunning = false;
  }

  _createClass(BrowserApplication, [{
    key: "isIE",
    value: function isIE() {
      return !(!document.attachEvent || typeof document.attachEvent === 'undefined');
    }
  }, {
    key: "domReady",
    value: function domReady(callback) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.isIE()) {
        document.attachEvent('onreadystatechange', function () {
          if (document.readyState === 'complete') return callback(args);
        });
      } else {
        document.addEventListener('DOMContentLoaded', function () {
          return callback(args);
        });
      }
    }
  }, {
    key: "locate",
    value: function locate(service) {
      return this.core ? this.core.locator.locate(service) : undefined;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.isRunning) throw new ApplicationNotRunningError('Application is not running'); // TODO remove all listeners ?
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (_this.isRunning) reject(new ApplicationRunningError('Application already running'));

        var metrics = _this.locate('core/metrics');

        metrics.start('dom-ready');

        _this.domReady(function () {
          metrics.end('dom-ready');
          metrics.start('core-load');

          _this.core.load().then(function () {
            metrics.end('core-load');
            metrics.start('core-bootstrap');

            _this.core.locate('core/bootstrap').bootstrap().then(function () {
              metrics.end('core-bootstrap');
              _this.eventbus = _this.core.locate('infrastructure/bus').getChannel('app');

              var eventComposer = _this.core.locate('core/event/composer'),
                  appInitializedEvent = eventComposer.compose('app.initialized', {
                components: _this.core.components,
                totalcomponents: Object.keys(_this.core.components).length,
                metrics: _objectSpread({}, metrics.getReport())
              });

              _this.eventbus.emit(appInitializedEvent);

              _this.running = true;
              resolve();
            });
          });
        });
      });
    }
  }, {
    key: "isRunning",
    get: function get() {
      return this.running;
    }
  }]);

  return BrowserApplication;
}();

module.exports = BrowserApplication;

/***/ }),

/***/ "./src/browser/core/console/defaults.js":
/*!**********************************************!*\
  !*** ./src/browser/core/console/defaults.js ***!
  \**********************************************/
/***/ ((module) => {

module.exports = {
  maxObjectDepth: 10,
  maxStringLength: 300,
  date: true,
  dateFormat: 'yyyy-mm-dd HH:MM:ss',
  debug: true,
  index: false,
  prefix: false,
  stringify: {
    space: '\t'
  },
  separator: '\n'
};

/***/ }),

/***/ "./src/browser/core/console/factory.js":
/*!*********************************************!*\
  !*** ./src/browser/core/console/factory.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Console = __webpack_require__(/*! . */ "./src/browser/core/console/index.js");

var BrowserConsoleFactory = /*#__PURE__*/function () {
  function BrowserConsoleFactory(dateformat, console, defaults, string) {
    _classCallCheck(this, BrowserConsoleFactory);

    this.dateformat = dateformat;
    this.console = console;
    this.defaults = defaults;
    this.string = string;
  }

  _createClass(BrowserConsoleFactory, [{
    key: "create",
    value: function create() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Console(this.dateformat, _objectSpread(_objectSpread({}, this.defaults), config), console, this.string);
    }
  }]);

  return BrowserConsoleFactory;
}();

module.exports = BrowserConsoleFactory;

/***/ }),

/***/ "./src/browser/core/console/index.js":
/*!*******************************************!*\
  !*** ./src/browser/core/console/index.js ***!
  \*******************************************/
/***/ ((module) => {

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-control-regex */
var Console = /*#__PURE__*/function () {
  function Console(dateformat, config, console, coreString) {
    _classCallCheck(this, Console);

    this.index = 0;
    this.coreString = coreString;
    this.dateformat = dateformat;
    this.config = config;
    this.console = console;
    this.color = this.config.color;
    this.background = this.config.background;
  }

  _createClass(Console, [{
    key: "shortenString",
    value: function shortenString(s) {
      if (this.config.maxStringLength && s.length > this.config.maxStringLength) return this.coreString.shorten(s, this.config.maxStringLength);
      return s;
    }
  }, {
    key: "formatOutputString",
    value: function formatOutputString(s) {
      return this.shortenString(s);
    }
  }, {
    key: "getCurrentDate",
    value: function getCurrentDate() {
      if (this.config.dateFormat) return this.dateformat(new Date(), this.config.dateFormat);
      return new Date().toISOString();
    }
  }, {
    key: "stringifyObject",
    value: function stringifyObject(arg) {
      var replacer = this.config.stringify && this.config.stringify.replacer ? this.config.stringify.replacer : null,
          space = this.config.stringify && this.config.stringify.space ? this.config.stringify.space : ' ';
      return JSON.stringify(arg, replacer, space);
    }
  }, {
    key: "buildArg",
    value: function buildArg(arg) {
      if (_typeof(arg) === 'object' && this.config.stringify) return this.stringifyObject(arg);else if (typeof arg === 'string') return this.formatOutputString(arg);
      return arg;
    }
  }, {
    key: "buildArgs",
    value: function buildArgs(args) {
      var output = [];

      var _iterator = _createForOfIteratorHelper(args),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var arg = _step.value;
          output.push(this.buildArg(arg));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return output;
    }
  }, {
    key: "colorize",
    value: function colorize(output) {
      var css = '';
      if (this.color) css = "color:".concat(this.color, ";");
      if (this.background) css = "".concat(css, "background-color:").concat(this.background, ";");
      if (this.config.css) css = "".concat(css).concat(this.config.css);
      return this.coreString.trim(css) !== '' ? ["%c".concat(output[0]), css] : output;
    }
  }, {
    key: "buildOutput",
    value: function buildOutput(args) {
      var output = [];
      if (this.config.date) output.push(this.getCurrentDate());
      if (this.config.prefix) output.push(this.config.prefix);
      if (this.config.index) output.push(this.index);
      output = [output.concat(this.buildArgs(args)).join(this.config.separator)];
      return this.colorize(output);
    }
  }, {
    key: "output",
    value: function output(args, cb) {
      this.index = this.index < Number.MAX_SAFE_INTEGER ? this.index + 1 : 0;

      if (this.config.debug) {
        var output = this.buildOutput(args);
        cb.apply(this, output);
      }
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.output(args, this.console.log);
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.output(args, this.console.log);
    }
  }, {
    key: "warning",
    value: function warning() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.output(args, this.console.warn);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this.output(args, this.console.error);
    }
  }, {
    key: "trace",
    value: function trace() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      this.output(args, this.console.trace);
    }
  }, {
    key: "table",
    value: function table() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      this.output(args, this.console.table);
    }
  }, {
    key: "startTimer",
    value: function startTimer(label) {
      this.console.time(label);
    }
  }, {
    key: "getTimeLog",
    value: function getTimeLog(label) {
      this.console.timeLog(label);
    }
  }, {
    key: "finishTimer",
    value: function finishTimer(label) {
      this.console.timeEnd(label);
    }
  }, {
    key: "group",
    value: function group(collapsed, label) {
      if (collapsed) this.console.groupCollapsed(label);else this.console.group(label);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.console.clear();
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      this.console.groupEnd();
    }
  }, {
    key: "measureTime",
    value: function () {
      var _measureTime = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(label, cb) {
        var _this = this;

        var _len7,
            args,
            _key7,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len7 = _args2.length, args = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
                  args[_key7 - 2] = _args2[_key7];
                }

                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                    var result;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.prev = 0;

                            _this.startTimer(label);

                            _context.next = 4;
                            return cb(args);

                          case 4:
                            result = _context.sent;

                            _this.finishTimer(label);

                            resolve(result);
                            _context.next = 13;
                            break;

                          case 9:
                            _context.prev = 9;
                            _context.t0 = _context["catch"](0);

                            _this.finishTimer(label);

                            reject(_context.t0);

                          case 13:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[0, 9]]);
                  }));

                  return function (_x3, _x4) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function measureTime(_x, _x2) {
        return _measureTime.apply(this, arguments);
      }

      return measureTime;
    }()
  }]);

  return Console;
}();

module.exports = Console;

var BrowserConsole = /*#__PURE__*/function (_Console) {
  _inherits(BrowserConsole, _Console);

  var _super = _createSuper(BrowserConsole);

  function BrowserConsole() {
    var _this2;

    _classCallCheck(this, BrowserConsole);

    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));
    _this2.color = _this2.config.color;
    _this2.background = _this2.config.background;
    return _this2;
  }

  _createClass(BrowserConsole, [{
    key: "buildOutput",
    value: function buildOutput(args) {
      var output = _get(_getPrototypeOf(BrowserConsole.prototype), "buildOutput", this).call(this, args),
          colorized = this.colorize(output);

      return colorized;
    }
  }, {
    key: "colorize",
    value: function colorize(output) {
      var css = '';
      if (this.color) css = "color:".concat(this.color, ";");
      if (this.background) css = "".concat(css, "background-color:").concat(this.background, ";");
      if (this.config.css) css = "".concat(css).concat(this.config.css);
      return this.coreString.trim(css) !== '' ? ["%c".concat(output[0]), css] : output;
    }
  }]);

  return BrowserConsole;
}(Console);

module.exports = BrowserConsole;

/***/ }),

/***/ "./src/browser/core/factory.js":
/*!*************************************!*\
  !*** ./src/browser/core/factory.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dateformat = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js"),
    Core = __webpack_require__(/*! common/core */ "./src/common/core/index.js"),
    consoleDefaults = __webpack_require__(/*! browser/core/console/defaults */ "./src/browser/core/console/defaults.js"),
    ConsoleFactory = __webpack_require__(/*! browser/core/console/factory */ "./src/browser/core/console/factory.js"),
    Locator = __webpack_require__(/*! common/core/locator */ "./src/common/core/locator/index.js"),
    Deepclone = __webpack_require__(/*! common/core/deepclone */ "./src/common/core/deepclone/index.js"),
    Deepfreeze = __webpack_require__(/*! common/core/deepfreeze */ "./src/common/core/deepfreeze/index.js"),
    Deepfind = __webpack_require__(/*! common/core/deepfind */ "./src/common/core/deepfind/index.js"),
    Deepmerge = __webpack_require__(/*! common/core/deepmerge */ "./src/common/core/deepmerge/index.js"),
    DeepAssign = __webpack_require__(/*! common/core/deepassign */ "./src/common/core/deepassign/index.js"),
    CoreString = __webpack_require__(/*! common/core/string */ "./src/common/core/string/index.js"),
    Configuration = __webpack_require__(/*! common/core/configuration */ "./src/common/core/configuration/index.js"),
    Metrics = __webpack_require__(/*! common/core/metrics */ "./src/common/core/metrics/index.js"),
    Timer = __webpack_require__(/*! common/core/timer */ "./src/common/core/timer/index.js"),
    EventEmitterFactory = __webpack_require__(/*! common/core/event-emitter/factory */ "./src/common/core/event-emitter/factory.js");

var CoreFactory = /*#__PURE__*/function () {
  function CoreFactory() {
    _classCallCheck(this, CoreFactory);
  }

  _createClass(CoreFactory, [{
    key: "create",
    value: function create(components) {
      var locator = this.createLocator(),
          core = new Core({
        locator: locator,
        components: components
      });
      return core;
    }
  }, {
    key: "createLocator",
    value: function createLocator() {
      var locator = new Locator(),
          deepclone = new Deepclone(),
          deepfreeze = new Deepfreeze(),
          deepmerge = new Deepmerge(),
          deepfind = new Deepfind(),
          deepassign = new DeepAssign(deepclone),
          configuration = new Configuration(deepclone, deepmerge, deepfind, deepfreeze),
          timer = new Timer(),
          metrics = new Metrics(timer),
          coreString = new CoreString(),
          consoleFactory = new ConsoleFactory(dateformat, console, consoleDefaults, coreString),
          eventEmitterFactory = new EventEmitterFactory(consoleFactory);
      locator.set('core/timer', timer);
      locator.set('core/string', coreString);
      locator.set('core/deepclone', deepclone);
      locator.set('core/metrics', metrics);
      locator.set('core/console/factory', consoleFactory);
      locator.set('core/event-emitter/factory', eventEmitterFactory);
      locator.set('core/deepfreeze', deepfreeze);
      locator.set('core/deepmerge', deepmerge);
      locator.set('core/deepfind', deepfind);
      locator.set('core/deepassign', deepassign);
      locator.set('core/configuration', configuration);
      return locator;
    }
  }]);

  return CoreFactory;
}();

module.exports = CoreFactory;

/***/ }),

/***/ "./src/common/core/configuration/index.js":
/*!************************************************!*\
  !*** ./src/common/core/configuration/index.js ***!
  \************************************************/
/***/ ((module) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Configuration = /*#__PURE__*/function () {
  function Configuration(deepclone, deepmerge, deepfind, deepfreeze) {
    _classCallCheck(this, Configuration);

    this.deepclone = deepclone;
    this.deepmerge = deepmerge;
    this.deepfind = deepfind;
    this.deepfreeze = deepfreeze;
    this.config = {
      core: {}
    };
  }

  _createClass(Configuration, [{
    key: "extend",
    value: function extend(config) {
      this.config = this.deepmerge.merge(this.config, _objectSpread({}, config));
    }
  }, {
    key: "find",
    value: function find(path) {
      return this.deepfind.find(path, this.config);
    }
  }, {
    key: "freeze",
    value: function freeze() {
      this.config = this.deepfreeze.freeze(this.config);
    }
  }]);

  return Configuration;
}();

module.exports = Configuration;

/***/ }),

/***/ "./src/common/core/data-structure/associative-array/index.js":
/*!*******************************************************************!*\
  !*** ./src/common/core/data-structure/associative-array/index.js ***!
  \*******************************************************************/
/***/ ((module) => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AssociativeArray = /*#__PURE__*/function () {
  function AssociativeArray(iterable) {
    _classCallCheck(this, AssociativeArray);

    this.items = new Map(iterable);
  }

  _createClass(AssociativeArray, [{
    key: "getItem",
    value: function getItem(key) {
      return this.items.get(key);
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      this.items.set(key, value);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      this.items["delete"](key);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.items.clear();
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};

      var _iterator = _createForOfIteratorHelper(this.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          json[key] = value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return json;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return {
        keys: _toConsumableArray(this.items.keys()),
        values: _toConsumableArray(this.items.values())
      };
    }
  }, {
    key: "toLinearArray",
    value: function toLinearArray() {
      var array = [];

      var _iterator2 = _createForOfIteratorHelper(this.items),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              key = _step2$value[0],
              value = _step2$value[1];

          array = [].concat(_toConsumableArray(array), [[key, value]]);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return array;
    }
  }, {
    key: "setFromJSON",
    value: function setFromJSON(json) {
      this.items = new Map();

      for (var _i2 = 0, _Object$keys = Object.keys(json); _i2 < _Object$keys.length; _i2++) {
        var key = _Object$keys[_i2];
        this.items.set(key, json[key]);
      }
    }
  }, {
    key: "setFromKeyValuedArray",
    value: function setFromKeyValuedArray(kvArray) {
      this.items = new Map(kvArray);
    }
  }, {
    key: "length",
    value: function length() {
      return this.items.size;
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      var values = _toConsumableArray(this.items.values());

      var index = 0;
      return {
        next: function next() {
          if (index < values.length) {
            return {
              value: values[index++],
              done: false
            };
          } else {
            return {
              done: true
            };
          }
        }
      };
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'AssociativeArray';
    }
  }]);

  return AssociativeArray;
}();

module.exports = AssociativeArray;

/***/ }),

/***/ "./src/common/core/data-structure/multiple-associative-array/index.js":
/*!****************************************************************************!*\
  !*** ./src/common/core/data-structure/multiple-associative-array/index.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AssociativeArray = __webpack_require__(/*! ../associative-array */ "./src/common/core/data-structure/associative-array/index.js");

var MultipleAssociativeArray = /*#__PURE__*/function (_AssociativeArray) {
  _inherits(MultipleAssociativeArray, _AssociativeArray);

  var _super = _createSuper(MultipleAssociativeArray);

  function MultipleAssociativeArray(iterable, object) {
    var _this;

    _classCallCheck(this, MultipleAssociativeArray);

    _this = _super.call(this, iterable);
    _this.object = object;
    return _this;
  }

  _createClass(MultipleAssociativeArray, [{
    key: "setItem",
    value: function setItem(key, value) {
      var prepend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (_get(_getPrototypeOf(MultipleAssociativeArray.prototype), "getItem", this).call(this, key)) {
        var elements = _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "getItem", this).call(this, key);

        if (prepend) elements.unshift(value);else elements.push(value);

        _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "setItem", this).call(this, key, elements);
      } else {
        _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "setItem", this).call(this, key, [value]);
      }
    }
  }, {
    key: "hasElements",
    value: function hasElements(key) {
      return Array.isArray(_get(_getPrototypeOf(MultipleAssociativeArray.prototype), "getItem", this).call(this, key)) && _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "getItem", this).call(this, key).length !== 0;
    }
  }, {
    key: "getElementIndex",
    value: function getElementIndex(key, value) {
      var hasElements = this.hasElements(key);

      if (hasElements && _typeof(value) !== 'object') {
        return _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "getItem", this).call(this, key).indexOf(value);
      } else if (hasElements && _typeof(value) === 'object') {
        var elements = this.getItem(key);

        for (var i = 0; i < elements.length; i++) {
          if (this.object.isEqual(elements[i], value)) return i;
        }
      }

      return -1;
    }
  }, {
    key: "removeElement",
    value: function removeElement(key, value) {
      var index = this.getElementIndex(key, value);

      if (index > -1) {
        var elements = _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "getItem", this).call(this, key);

        elements.splice(index, 1);

        _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "getItem", this).call(this, key, elements);
      }
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'MultipleAssociativeArray';
    }
  }]);

  return MultipleAssociativeArray;
}(AssociativeArray);

module.exports = MultipleAssociativeArray;

/***/ }),

/***/ "./src/common/core/deepassign/error/not-an-object.js":
/*!***********************************************************!*\
  !*** ./src/common/core/deepassign/error/not-an-object.js ***!
  \***********************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NotAnObjectError = /*#__PURE__*/function (_Error) {
  _inherits(NotAnObjectError, _Error);

  var _super = _createSuper(NotAnObjectError);

  function NotAnObjectError() {
    var _this;

    _classCallCheck(this, NotAnObjectError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.code = 'E_NOT_AN_OBJECT';
    return _this;
  }

  return NotAnObjectError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = NotAnObjectError;

/***/ }),

/***/ "./src/common/core/deepassign/index.js":
/*!*********************************************!*\
  !*** ./src/common/core/deepassign/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NotAnObjectError = __webpack_require__(/*! ./error/not-an-object */ "./src/common/core/deepassign/error/not-an-object.js");

var DeepAssign = /*#__PURE__*/function () {
  function DeepAssign() {
    _classCallCheck(this, DeepAssign);

    this.arrayPropertyRegexp = /(\w+)\[([0-9]+)\]/i;
  }

  _createClass(DeepAssign, [{
    key: "getPath",
    value: function getPath(keys, index) {
      var path = '';

      for (var i = 0; i < index; i++) {
        path += "".concat(keys[i], ".");
      }

      return "".concat(path).concat(keys[index]);
    }
  }, {
    key: "isAssignableObject",
    value: function isAssignableObject(obj) {
      return obj && _typeof(obj) === 'object';
    }
  }, {
    key: "isArrayProperty",
    value: function isArrayProperty(key) {
      var match = this.arrayPropertyRegexp.exec(key);
      return !!match;
    }
  }, {
    key: "getArrayPropertyIndex",
    value: function getArrayPropertyIndex(key) {
      var match = this.arrayPropertyRegexp.exec(key);
      return {
        name: match[1],
        position: Number(match[2])
      };
    }
  }, {
    key: "isLastKey",
    value: function isLastKey(keys, index) {
      return index === keys.length - 1;
    }
  }, {
    key: "objectProperty",
    value: function objectProperty(obj, value, key, index, keys) {
      // if(!this.isAssignableObject(obj[key]) && !this.isLastKey(keys, index))
      //   throw new NotAnObjectError(`Expected and object for assigning properties: ${this.getPath(keys, index)}`)
      if (!this.isAssignableObject(obj[key]) && !this.isLastKey(keys, index)) {
        obj[key] = {};
        obj = obj[key];
      } else if (this.isLastKey(keys, index)) {
        obj[key] = value;
      } else {
        obj = obj[key];
      }

      return obj;
    }
  }, {
    key: "arrayProperty",
    value: function arrayProperty(obj, value, key, index, keys) {
      var _this$getArrayPropert = this.getArrayPropertyIndex(key),
          name = _this$getArrayPropert.name,
          position = _this$getArrayPropert.position;

      if (!obj[name]) obj[name] = [];
      if (!this.isAssignableObject(obj[name][position]) && !this.isLastKey(keys, index)) throw new NotAnObjectError("Expected and object for assigning properties: ".concat(this.getPath(keys, index)));else if (this.isLastKey(keys, index)) obj[name][position] = value;else obj = obj[name][position];
      return obj;
    }
  }, {
    key: "assignPath",
    value: function assignPath(obj, keys, value) {
      var _this = this;

      var pointer = obj;
      keys.forEach(function (key, index) {
        if (_this.isArrayProperty(key)) pointer = _this.arrayProperty(pointer, value, key, index, keys);else pointer = _this.objectProperty(pointer, value, key, index, keys);
      });
      return obj;
    }
  }, {
    key: "assign",
    value: function assign(obj, path, value) {
      var keys = path.split(/\.|\//),
          copy = _objectSpread({}, obj);

      return this.assignPath(copy, keys, value);
    }
  }]);

  return DeepAssign;
}();

module.exports = DeepAssign;

/***/ }),

/***/ "./src/common/core/deepclone/error/failed-to-clone.js":
/*!************************************************************!*\
  !*** ./src/common/core/deepclone/error/failed-to-clone.js ***!
  \************************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FailedToCloneError = /*#__PURE__*/function (_Error) {
  _inherits(FailedToCloneError, _Error);

  var _super = _createSuper(FailedToCloneError);

  function FailedToCloneError() {
    var _this;

    _classCallCheck(this, FailedToCloneError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.code = 'E_FAILED_TO_CLONE';
    return _this;
  }

  return FailedToCloneError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = FailedToCloneError;

/***/ }),

/***/ "./src/common/core/deepclone/index.js":
/*!********************************************!*\
  !*** ./src/common/core/deepclone/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FailedToCloneError = __webpack_require__(/*! ./error/failed-to-clone */ "./src/common/core/deepclone/error/failed-to-clone.js");

var DeepClone = /*#__PURE__*/function () {
  function DeepClone() {
    _classCallCheck(this, DeepClone);
  }

  _createClass(DeepClone, [{
    key: "clone",
    value: function clone(obj) {
      try {
        return JSON.parse(JSON.stringify(obj));
      } catch (error) {
        throw new FailedToCloneError(error.message);
      }
    }
  }]);

  return DeepClone;
}();

module.exports = DeepClone;

/***/ }),

/***/ "./src/common/core/deepfind/index.js":
/*!*******************************************!*\
  !*** ./src/common/core/deepfind/index.js ***!
  \*******************************************/
/***/ ((module) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DeepFind = /*#__PURE__*/function () {
  function DeepFind() {
    _classCallCheck(this, DeepFind);

    this.arrayPropertyRegexp = /(\w+)\[([0-9]+)\]/i;
  }

  _createClass(DeepFind, [{
    key: "getPath",
    value: function getPath(keys, index) {
      var path = '';

      for (var i = 0; i < index; i++) {
        path += "".concat(keys[i], ".");
      }

      return "".concat(path).concat(keys[index]);
    }
  }, {
    key: "isObject",
    value: function isObject(obj) {
      return obj && _typeof(obj) === 'object';
    }
  }, {
    key: "isArrayProperty",
    value: function isArrayProperty(key) {
      var match = this.arrayPropertyRegexp.exec(key);
      return !!match;
    }
  }, {
    key: "getArrayPropertyIndex",
    value: function getArrayPropertyIndex(key) {
      var match = this.arrayPropertyRegexp.exec(key);
      return {
        name: match[1],
        position: Number(match[2])
      };
    }
  }, {
    key: "isLastKey",
    value: function isLastKey(keys, index) {
      return index === keys.length - 1;
    }
  }, {
    key: "objectProperty",
    value: function objectProperty(obj, key, index, keys) {
      if (!this.isObject(obj[key]) && !this.isLastKey(keys, index)) return undefined;else return obj[key];
    }
  }, {
    key: "arrayProperty",
    value: function arrayProperty(obj, key, index, keys) {
      var _this$getArrayPropert = this.getArrayPropertyIndex(key),
          name = _this$getArrayPropert.name,
          position = _this$getArrayPropert.position;

      if (!this.isObject(obj[name][position]) && !this.isLastKey(keys, index)) return undefined;else return obj[name][position];
    }
  }, {
    key: "findPath",
    value: function findPath(obj, keys) {
      var pointer = obj;

      var _iterator = _createForOfIteratorHelper(keys.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              key = _step$value[1];

          if (this.isArrayProperty(key)) pointer = this.arrayProperty(pointer, key, index, keys);else pointer = this.objectProperty(pointer, key, index, keys);
          if (pointer === undefined) break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return pointer;
    }
  }, {
    key: "find",
    value: function find(path, obj) {
      var keys = path.split(/\./),
          copy = _objectSpread({}, obj);

      return this.findPath(copy, keys);
    }
  }]);

  return DeepFind;
}();

module.exports = DeepFind;

/***/ }),

/***/ "./src/common/core/deepfreeze/index.js":
/*!*********************************************!*\
  !*** ./src/common/core/deepfreeze/index.js ***!
  \*********************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DeepFreeze = /*#__PURE__*/function () {
  function DeepFreeze() {
    _classCallCheck(this, DeepFreeze);
  }

  _createClass(DeepFreeze, [{
    key: "freeze",
    value: function freeze(obj) {
      if (!Object.isFrozen(obj)) {
        var propNames = Object.getOwnPropertyNames(obj);

        var _iterator = _createForOfIteratorHelper(propNames),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var name = _step.value;
            var value = obj[name];
            obj[name] = value && _typeof(value) === 'object' ? this.freeze(value) : value;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return Object.freeze(obj);
      } else {
        return obj;
      }
    }
  }]);

  return DeepFreeze;
}();

module.exports = DeepFreeze;

/***/ }),

/***/ "./src/common/core/deepmerge/index.js":
/*!********************************************!*\
  !*** ./src/common/core/deepmerge/index.js ***!
  \********************************************/
/***/ ((module) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DeepMerge = /*#__PURE__*/function () {
  function DeepMerge() {
    _classCallCheck(this, DeepMerge);
  }

  _createClass(DeepMerge, [{
    key: "merge",
    value: function merge(a, b) {
      var result = this._merge(a, b);

      for (var _len = arguments.length, c = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        c[_key - 2] = arguments[_key];
      }

      return c.length ? this.merge.apply(this, [result, c[0]].concat(_toConsumableArray(c.slice(1)))) : result;
    }
  }, {
    key: "_merge",
    value: function _merge(a, b) {
      if (_typeof(a) !== 'object' || a === null) return b;
      return Array.isArray(a) ? this._mergeArray(a, b) : this._mergeObject(a, b);
    }
  }, {
    key: "_mergeArray",
    value: function _mergeArray(a, b) {
      if (!Array.isArray(b)) return b;
      return _toConsumableArray(new Set([].concat(_toConsumableArray(a), _toConsumableArray(b))));
    }
  }, {
    key: "_mergeObject",
    value: function _mergeObject(a, b) {
      var output = _objectSpread({}, a);

      for (var key in b) {
        output[key] = key in output ? this._merge(output[key], b[key]) : b[key];
      }

      return output;
    }
  }]);

  return DeepMerge;
}();

module.exports = DeepMerge;

/***/ }),

/***/ "./src/common/core/error/service-unable-to-resolve-dependencies.js":
/*!*************************************************************************!*\
  !*** ./src/common/core/error/service-unable-to-resolve-dependencies.js ***!
  \*************************************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ServiceUnableToResolveDependenciesError = /*#__PURE__*/function (_Error) {
  _inherits(ServiceUnableToResolveDependenciesError, _Error);

  var _super = _createSuper(ServiceUnableToResolveDependenciesError);

  function ServiceUnableToResolveDependenciesError() {
    var _this;

    _classCallCheck(this, ServiceUnableToResolveDependenciesError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_SERVICE_UNABLE_TO_RESOLVE_DEPENDENCIES';
    return _this;
  }

  return ServiceUnableToResolveDependenciesError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = ServiceUnableToResolveDependenciesError;

/***/ }),

/***/ "./src/common/core/event-emitter/factory.js":
/*!**************************************************!*\
  !*** ./src/common/core/event-emitter/factory.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmitter = __webpack_require__(/*! . */ "./src/common/core/event-emitter/index.js");

var EventEmitterFactory = /*#__PURE__*/function () {
  function EventEmitterFactory(consoleFactory) {
    _classCallCheck(this, EventEmitterFactory);

    this.consoleFactory = consoleFactory;
  }

  _createClass(EventEmitterFactory, [{
    key: "createConsole",
    value: function createConsole(options) {
      return this.consoleFactory.create(options);
    }
  }, {
    key: "create",
    value: function create(id) {
      var consoleOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var console = this.createConsole(consoleOptions);
      return new EventEmitter(id, console);
    }
  }]);

  return EventEmitterFactory;
}();

module.exports = EventEmitterFactory;

/***/ }),

/***/ "./src/common/core/event-emitter/index.js":
/*!************************************************!*\
  !*** ./src/common/core/event-emitter/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MultipleAssociativeArray = __webpack_require__(/*! ../data-structure/multiple-associative-array */ "./src/common/core/data-structure/multiple-associative-array/index.js");
/**
 * EventEmitter class
 * @class
 */


var EventEmitter = /*#__PURE__*/function () {
  /**
   * Creates a basic EventEmitter
   */
  function EventEmitter(id, console) {
    var maxListeners = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    _classCallCheck(this, EventEmitter);

    this[Symbol["for"]('id')] = id;
    this.console = console;
    this.listeners = new MultipleAssociativeArray();
    this.warnings = [];
    this.maxListeners = maxListeners;
  }
  /**
   * Returns an array listing the events for which the emitter has registered listeners. The values in the array are strings or Symbols
   * @returns {Array<string|Symbol>}
   */


  _createClass(EventEmitter, [{
    key: "eventNames",
    value: function eventNames() {
      return this.listeners.toArray().keys || [];
    }
    /**
     * Returns the current max listener value for the EventEmitter which is either set by emitter.setMaxListeners(n) or default (10).
     */

  }, {
    key: "getMaxListeners",
    value: function getMaxListeners() {
      return this.maxListeners;
    }
    /**
     * By default EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default that helps finding memory leaks. The emitter.setMaxListeners() method allows the limit to be modified for this specific EventEmitter instance. The value can be set to Infinity (or 0) to indicate an unlimited number of listeners.
     * @returns {EventEmitter}
     */

  }, {
    key: "setMaxListeners",
    value: function setMaxListeners(maxListeners) {
      this.maxListeners = maxListeners;
      return this;
    }
    /**
     * Adds a listener to an event
     * @param {string} eventName - Event name
     * @param {function} listener - Listener function
     * @returns {EventEmitter}
     */

  }, {
    key: "on",
    value: function on(eventName, listener) {
      this.listeners.setItem(eventName, listener);
      return this;
    }
    /**
     * Returns a copy of the array of listeners for the event named eventName, including any wrappers (such as those created by .once()).
     * @param {string} eventName - Event name
     * @returns {Array<function>}
     */

  }, {
    key: "rawListeners",
    value: function rawListeners(eventName) {
      return _toConsumableArray(this.listeners.getItem(eventName));
    }
    /**
     * Alias for on function
     * @param {string} event - Event name
     * @param {function} listener - Listener function
     * @returns {function} - Returns its remove function
     */

  }, {
    key: "addListener",
    value: function addListener(eventName, listener) {
      return this.on(eventName, listener);
    }
    /**
     * Adds a listener to all events
     * @param {function} listener - Observer function
     * @returns {function} - Returns its remove function
     */

  }, {
    key: "onAll",
    value: function onAll(listener) {
      return this.on('*', listener);
    }
    /**
     * Removes the listener function for the specified event name
     * @param {string} eventName - Event name
     * @param {function} listener - Listener function
     * @returns {EventEmitter}
     */

  }, {
    key: "removeListener",
    value: function removeListener(eventName, listener) {
      this.listeners.removeElement(eventName, listener);
      return this;
    }
    /**
     * Alias for removeListener
     * @param {string} eventName - Event name
     * @param {function} listener - Listener function
     * @returns {EventEmitter}
     */

  }, {
    key: "off",
    value: function off(eventName, listener) {
      return this.removeListener(eventName, listener);
    }
    /**
     * Removes all listeners functions for the specified event name.
     * @param {string} eventName - Event name
     * @returns {EventEmitter}
     */

  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(eventName) {
      this.listeners.removeItem(eventName);
      return this;
    }
    /**
     * Checks if an event has listeners
     * @param {string} eventName - Event name
     * @returns {boolean} - Flag indicating if the event has listeners
     */

  }, {
    key: "hasListeners",
    value: function hasListeners(eventName) {
      return this.listeners.hasElements(eventName);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.listeners.clear();
    }
    /**
     * Publish an event
     * @param {event} event - Event
     * @returns {boolean} - Flag indicating if the event has listeners
     */

  }, {
    key: "emit",
    value: function () {
      var _emit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var _this = this;

        var _len,
            args,
            _key,
            name,
            globalListeners,
            eventListeners,
            listeners,
            promises,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (_len = _args.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = _args[_key];
                }

                name = event.meta.name, globalListeners = this.listeners.getItem('*') || [], eventListeners = this.listeners.getItem(name) || [], listeners = globalListeners.concat(eventListeners);

                if (listeners.length === 0 && !this.warnings.includes(name)) {
                  this.warnings.push(name);
                  this.console.warning("event: \"".concat(name, "\" does not have a defined listener in channel ").concat(this[Symbol["for"]('id')]));
                }

                promises = listeners.map(function (listener) {
                  return listener.call.apply(listener, [_this, event].concat(args));
                });
                return _context.abrupt("return", Promise.all(promises));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function emit(_x) {
        return _emit.apply(this, arguments);
      }

      return emit;
    }()
    /**
     * Returns the number of listeners listening to the event named eventName
     * @param {event} eventName - Event
     * @returns {boolean} - Flag indicating if the event has listeners
     */

  }, {
    key: "listenerCount",
    value: function listenerCount(eventName) {
      var listeners = this.listeners.getItem(eventName) || [];
      return listeners.length;
    }
    /**
     * Returns a copy of the array of listeners for the event named eventName
     * @param {event} eventName - Event name
     * @returns {Array<function>} - listeners
     */

  }, {
    key: "listeners",
    value: function listeners(eventName) {
      return this.listeners.getItem(eventName) || [];
    } // /**
    //  * Executes the listeners of the specified event
    //  * @param {function} listener - listener
    //  * @param {Event} event - Event
    //  */
    // async executeListeners(listeners, event, ...args)
    // {
    //   const promises = listeners.map((listener) =>
    //   {
    //     return listener.call(this, event, ...args)
    //   })
    //   return Promise.all(promises)
    // }

    /**
     * Adds a one-time listener function for the event named eventName to the beginning of the listeners array. The next time eventName is triggered, this listener is removed, and then invoked.
     * @param {string} eventName - Event name
     * @param {function} listener - Listener function
     * @returns {EventEmitter}
     */

  }, {
    key: "prependOnceListener",
    value: function prependOnceListener(eventName, listener) {
      var _this2 = this;

      var callback = function callback() {
        _this2.removeListener(eventName, callback);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        listener.call(_this2, args);
      };

      this.on(eventName, callback);
      return this;
    }
    /**
     * Adds the listener function to the beginning of the listeners array for the event named eventName.
     * No checks are made to see if the listener has already been added.
     * Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.
     * @param {string} eventName - Event name
     * @param {function} listener - Listener function
     * @returns {EventEmitter}
     */

  }, {
    key: "prependListener",
    value: function prependListener(eventName, listener) {
      this.listeners.setItem(eventName, listener, true);
      return this;
    }
    /**
     * Adds a listener to an event that only executes once
     * @param {string} eventName - Event name
     * @param {function} listener - Listener function
     */

  }, {
    key: "once",
    value: function once(eventName, listener) {
      var _this3 = this;

      var callback = function callback() {
        _this3.removeListener(eventName, callback);

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        listener.call(_this3, args);
      };

      this.on(eventName, callback);
      return this;
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'EventEmitter';
    }
  }]);

  return EventEmitter;
}();

module.exports = EventEmitter;

/***/ }),

/***/ "./src/common/core/index.js":
/*!**********************************!*\
  !*** ./src/common/core/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ServiceUnableToResolveDependenciesError = __webpack_require__(/*! ./error/service-unable-to-resolve-dependencies */ "./src/common/core/error/service-unable-to-resolve-dependencies.js");

var Core = /*#__PURE__*/function () {
  function Core(_ref) {
    var locator = _ref.locator,
        _ref$configurations = _ref.configurations,
        configurations = _ref$configurations === void 0 ? [] : _ref$configurations;

    _classCallCheck(this, Core);

    this.locator = locator;
    this.load(configurations);
  }

  _createClass(Core, [{
    key: "load",
    value: function load(configurations) {
      var configuration = this.locate('core/configuration'); // extending the configurations of every component

      for (var _i = 0, _Object$entries = Object.entries(configurations); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            name = _Object$entries$_i[0],
            config = _Object$entries$_i[1];

        configuration.extend(config);
      }

      configuration.freeze();
      var services = configuration.find('core.locator') || {},
          map = new Map();

      for (var _i2 = 0, _Object$entries2 = Object.entries(services); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            _name = _Object$entries2$_i[0],
            locator = _Object$entries2$_i[1];

        map.set(_name, locator);
      }

      this.addServicesToLocator(map);
    }
    /**
     * Eager loading the services in the sevice locator.
     * Recursion queue to complete loading all services.
     * @param {Map<Locator>} services  services
     */

  }, {
    key: "addServicesToLocator",
    value: function addServicesToLocator(services) {
      var _this = this;

      // when the queu is empty, then we are done
      if (services.size === 0) return; // incomplete services that could not be loaded in the declared order

      var queue = new Map();
      services.forEach(function (Locator, service) {
        try {
          var locator = new Locator(_this.locator);

          _this.locator.set(service, locator.locate());
        } catch (error) {
          queue.set(service, Locator);
        }
      }); // if the new queue is the same as the old queue, then no progress has taken place

      if (services.size === queue.size) throw new ServiceUnableToResolveDependenciesError("Unmet dependencies found, could not resolve dependencies for ".concat(Array.from(queue.keys()).join(', '))); // recursion until the queue is empty

      this.addServicesToLocator(queue);
    }
  }, {
    key: "locate",
    value: function locate(service) {
      return this.locator.locate(service);
    }
  }]);

  return Core;
}();

module.exports = Core;

/***/ }),

/***/ "./src/common/core/locator/error/service-undefined.js":
/*!************************************************************!*\
  !*** ./src/common/core/locator/error/service-undefined.js ***!
  \************************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ServiceUndefinedError = /*#__PURE__*/function (_ReferenceError) {
  _inherits(ServiceUndefinedError, _ReferenceError);

  var _super = _createSuper(ServiceUndefinedError);

  function ServiceUndefinedError() {
    var _this;

    _classCallCheck(this, ServiceUndefinedError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_SERVICE_UNDEFINED';
    return _this;
  }

  return ServiceUndefinedError;
}( /*#__PURE__*/_wrapNativeSuper(ReferenceError));

module.exports = ServiceUndefinedError;

/***/ }),

/***/ "./src/common/core/locator/index.js":
/*!******************************************!*\
  !*** ./src/common/core/locator/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ServiceUndefinedError = __webpack_require__(/*! ./error/service-undefined */ "./src/common/core/locator/error/service-undefined.js");

var Locator = /*#__PURE__*/function () {
  function Locator() {
    _classCallCheck(this, Locator);

    this.services = {};
  }

  _createClass(Locator, [{
    key: "set",
    value: function set(name, service) {
      this.services[name] = service;
    }
  }, {
    key: "has",
    value: function has(name) {
      return name in this.services;
    }
  }, {
    key: "locate",
    value: function locate(service) {
      if (service in this.services) return this.services[service];
      throw new ServiceUndefinedError("\"".concat(service, "\" can not be located"));
    }
  }]);

  return Locator;
}();

module.exports = Locator;

/***/ }),

/***/ "./src/common/core/metrics/index.js":
/*!******************************************!*\
  !*** ./src/common/core/metrics/index.js ***!
  \******************************************/
/***/ ((module) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Metrics = /*#__PURE__*/function () {
  function Metrics(timer) {
    _classCallCheck(this, Metrics);

    this.metrics = {};
    this.timer = timer;
  }

  _createClass(Metrics, [{
    key: "start",
    value: function start(name) {
      this.metrics[name] = {
        start: this.timer.now()
      };
    }
  }, {
    key: "end",
    value: function end(name) {
      this.metrics[name] = _objectSpread(_objectSpread({}, this.metrics[name]), {}, {
        end: this.timer.now()
      });
    }
  }, {
    key: "remove",
    value: function remove(name) {
      delete this.metrics[name];
    }
  }, {
    key: "get",
    value: function get(metric) {
      return this.metrics[metric];
    }
  }, {
    key: "getEllapsedTime",
    value: function getEllapsedTime(metric) {
      var _ref = this.get(metric) || {},
          start = _ref.start,
          end = _ref.end;

      if (start && end) return end - start;
    }
  }, {
    key: "getEllapsedTimeIn",
    value: function getEllapsedTimeIn(metric, format) {
      var ellapsedTimeInMilliseconds = this.getEllapsedTime(metric);
      if (ellapsedTimeInMilliseconds) return this.timer.convert(ellapsedTimeInMilliseconds, format);
    }
  }, {
    key: "getReport",
    value: function getReport() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ms';
      var report = {
        format: format
      };

      for (var key in this.metrics) {
        report[key] = this.getEllapsedTimeIn(key, format);
      }

      return report;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.metrics = {};
    }
  }]);

  return Metrics;
}();

module.exports = Metrics;

/***/ }),

/***/ "./src/common/core/string/index.js":
/*!*****************************************!*\
  !*** ./src/common/core/string/index.js ***!
  \*****************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CoreString = /*#__PURE__*/function () {
  function CoreString() {
    _classCallCheck(this, CoreString);
  }

  _createClass(CoreString, [{
    key: "convertToUint8Array",
    value: function convertToUint8Array(str) {
      var rawLength = str.length,
          array = new Uint8Array(new ArrayBuffer(rawLength));

      for (var i = 0; i < rawLength; i++) {
        array[i] = str.charCodeAt(i);
      }

      return array;
    }
  }, {
    key: "trim",
    value: function trim(s) {
      return s.replace(/\s/g, '');
    }
  }, {
    key: "ellipsis",
    value: function ellipsis(s, maxLength) {
      var _ellipsis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';

      var ellipsed = s;
      if (s && s.length > maxLength) ellipsed = "".concat(s.substr(0, maxLength)).concat(_ellipsis);
      return ellipsed;
    }
  }, {
    key: "shorten",
    value: function shorten(s, maxLength) {
      var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';
      var shortened = s;

      if (s && s.length > maxLength) {
        var segment = Math.floor(maxLength / 2);
        shortened = [s.substr(0, segment).trim(), s.substr(-segment).trim()].join(fill);
      }

      return shortened;
    }
    /**
     * @example "foobar" => "Foobar"
     * @param {string} s input to be manipulated
     * @returns {string}
     */

  }, {
    key: "capitalize",
    value: function capitalize(s) {
      return s[0].toUpperCase() + s.slice(1);
    }
    /**
     * @example "Foo BAR baz" => "foo-bar-baz"
     * @param {string} s input to be manipulated
     * @param {string} [separator='-'] string to be used as the separator
     * @returns {string} A string that has replaced the spaces with dashes and lowercased the string
     */

  }, {
    key: "hyphenate",
    value: function hyphenate(s) {
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
      return s.replace(/\W+/g, separator).toLowerCase();
    }
    /**
     * @example "foo-bar-baz" => "fooBarBaz"
     * @param {string} s input to be manipulated
     * @returns {string} A string that has replaced the spaces with dashes and lowercased the string
     */

  }, {
    key: "camelCase",
    value: function camelCase(s) {
      var _this = this;

      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
      s = this.lowercase(s);
      s = s.split(separator).map(function (substring, i) {
        return i === 0 ? substring : _this.capitalize(substring);
      }).join('');
      return s;
    }
  }, {
    key: "lowercase",
    value: function lowercase(s) {
      return s.toLowerCase();
    }
  }, {
    key: "uppercase",
    value: function uppercase(s) {
      return s.toLowerCase();
    }
  }]);

  return CoreString;
}();

module.exports = CoreString;

/***/ }),

/***/ "./src/common/core/timer/index.js":
/*!****************************************!*\
  !*** ./src/common/core/timer/index.js ***!
  \****************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timer = /*#__PURE__*/function () {
  function Timer() {
    _classCallCheck(this, Timer);
  }

  _createClass(Timer, [{
    key: "now",
    value: function now() {
      return new Date().getTime();
    }
  }, {
    key: "msToSeconds",
    value: function msToSeconds(ms) {
      return ms / 1000;
    }
  }, {
    key: "msToMinutes",
    value: function msToMinutes(ms) {
      return this.msToSeconds(ms) / 60;
    }
  }, {
    key: "msToMinutesWithSeconds",
    value: function msToMinutesWithSeconds(ms) {
      var date = new Date(ms),
          minutes = "".concat(date.getUTCMinutes()).slice(-2),
          seconds = "".concat(date.getUTCMinutes()).slice(-2);
      return "".concat(minutes, ":").concat(seconds);
    }
  }, {
    key: "convert",
    value: function convert(time, format) {
      switch (format) {
        case 's':
          return this.msToSeconds(time);

        case 'm':
          return this.msToMinutes(time);

        case 'mm:ss':
          return this.msToMinutesWithSeconds(time);

        default:
          return time;
      }
    }
  }]);

  return Timer;
}();

module.exports = Timer;

/***/ }),

/***/ "./src/common/view/entrypoints/index.js":
/*!**********************************************!*\
  !*** ./src/common/view/entrypoints/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var Application = __webpack_require__(/*! browser/core/application */ "./src/browser/core/application/index.js"),
    app = new Application();

app.run();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/common/view/entrypoints/index.js","vendors"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcore_ui_tools"] = self["webpackChunkcore_ui_tools"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map