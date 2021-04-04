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
          metrics.start('core-bootstrap');
          metrics.end('core-load');
          metrics.start('core-bootstrap');

          _this.core.locate('core/bootstrap').bootstrap().then(function () {
            metrics.end('core-bootstrap');
            _this.eventbus = _this.core.locate('infrastructure/bus').getChannel('app');

            var eventComposer = _this.core.locate('core/event/composer'),
                appInitializedEvent = eventComposer.compose('app.initialized', {
              components: _this.core.locator.services,
              totalcomponents: Object.keys(_this.core.locator.services).length,
              metrics: _objectSpread({}, metrics.getReport())
            });

            _this.eventbus.emit(appInitializedEvent);

            _this.running = true;
            resolve();
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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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
    value: function create(configurations) {
      var locator = this.createLocator(),
          core = new Core({
        locator: locator,
        configurations: configurations
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

/***/ "./src/browser/view/entrypoints/index.js":
/*!***********************************************!*\
  !*** ./src/browser/view/entrypoints/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_view_styles_globals_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/view/styles/globals.scss */ "./src/common/view/styles/globals.scss");


var Application = __webpack_require__(/*! browser/core/application */ "./src/browser/core/application/index.js"),
    app = new Application({
  'schema': __webpack_require__(/*! schema/config */ "./src/schema/config.js"),
  'infrastructure/bus': __webpack_require__(/*! common/infrastructure/bus/config */ "./src/common/infrastructure/bus/config.js"),
  'core/event/composer': __webpack_require__(/*! common/core/event/composer/config */ "./src/common/core/event/composer/config.js"),
  'core/listener': __webpack_require__(/*! common/core/listener/config */ "./src/common/core/listener/config.js"),
  'core/bootstrap': __webpack_require__(/*! common/core/bootstrap/config */ "./src/common/core/bootstrap/config.js"),
  'view/components': __webpack_require__(/*! common/view/components/config */ "./src/common/view/components/config.js"),
  'view/documents': __webpack_require__(/*! common/view/document/config */ "./src/common/view/document/config.js"),
  'view/app': __webpack_require__(/*! common/view/app/config */ "./src/common/view/app/config.js"),
  'view/hooks': __webpack_require__(/*! common/view/hooks/config */ "./src/common/view/hooks/config.js"),
  'view/hydrate': __webpack_require__(/*! browser/view/hydrate/config */ "./src/browser/view/hydrate/config.js"),
  'view/strategies': __webpack_require__(/*! common/view/strategies/config */ "./src/common/view/strategies/config.js"),
  'core/internationalization': __webpack_require__(/*! common/core/internationalization/config */ "./src/common/core/internationalization/config.js")
});

app.run();

/***/ }),

/***/ "./src/browser/view/hydrate/bootstrap/index.js":
/*!*****************************************************!*\
  !*** ./src/browser/view/hydrate/bootstrap/index.js ***!
  \*****************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HydrateBootstrap = /*#__PURE__*/function () {
  function HydrateBootstrap(_ref) {
    var locator = _ref.locator;

    _classCallCheck(this, HydrateBootstrap);

    this.locator = locator;
  }

  _createClass(HydrateBootstrap, [{
    key: "bootstrap",
    value: function bootstrap() {
      var hydrate = this.locator.locate('view/hydrate');
      hydrate.hydrate();
    }
  }]);

  return HydrateBootstrap;
}();

module.exports = HydrateBootstrap;

/***/ }),

/***/ "./src/browser/view/hydrate/bootstrap/locator.js":
/*!*******************************************************!*\
  !*** ./src/browser/view/hydrate/bootstrap/locator.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HydrateBootstrap = __webpack_require__(/*! . */ "./src/browser/view/hydrate/bootstrap/index.js");
/**
 * @implements {superhero/core/locator/constituent}
 */


var HydrateBootstrapLocator = /*#__PURE__*/function () {
  function HydrateBootstrapLocator(locator) {
    _classCallCheck(this, HydrateBootstrapLocator);

    this.locator = locator;
  }
  /**
   * @returns {HydrateBootstrap}
   */


  _createClass(HydrateBootstrapLocator, [{
    key: "locate",
    value: function locate() {
      return new HydrateBootstrap({
        locator: this.locator
      });
    }
  }]);

  return HydrateBootstrapLocator;
}();

module.exports = HydrateBootstrapLocator;

/***/ }),

/***/ "./src/browser/view/hydrate/config.js":
/*!********************************************!*\
  !*** ./src/browser/view/hydrate/config.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  core: {
    bootstrap: {
      hydrate: 'view/hydrate/bootstrap'
    },
    locator: {
      'view/hydrate': __webpack_require__(/*! ./locator */ "./src/browser/view/hydrate/locator.js"),
      'view/hydrate/bootstrap': __webpack_require__(/*! ./bootstrap/locator */ "./src/browser/view/hydrate/bootstrap/locator.js")
    }
  }
};

/***/ }),

/***/ "./src/browser/view/hydrate/index.js":
/*!*******************************************!*\
  !*** ./src/browser/view/hydrate/index.js ***!
  \*******************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["<", " ...", "/>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hydrator = /*#__PURE__*/function () {
  function Hydrator(_ref) {
    var render = _ref.render,
        html = _ref.html,
        hydrator = _ref.hydrator,
        App = _ref.App;

    _classCallCheck(this, Hydrator);

    this.html = html;
    this.render = render;
    this.hydrator = hydrator;
    this.App = App;
  }

  _createClass(Hydrator, [{
    key: "hydrate",
    value: function hydrate() {
      var app = document.getElementById({"HTTP_PORT":"2432","PLATFORM":"browser","HASH":"9GZK7D1UZBCM6LP","APP_SELECTOR":"app"}.APP_SELECTOR),
          props = window._PROPS_ || {};
      this.hydrator(this.html(_templateObject(), this.App, props), app); // switch(process.env.HYDRATION_STRATEGY.toUpperCase())
      // {
      // case 'RENDER':
      //   this.render(this.html`<${this.App} ...${props}/>`, app, app.lastChild)
      //   return
      // default:
      //   this.hydrator(this.html`<${this.App} ...${props}/>`, app)
      //   return
      // }
    }
  }]);

  return Hydrator;
}();

module.exports = Hydrator;

/***/ }),

/***/ "./src/browser/view/hydrate/locator.js":
/*!*********************************************!*\
  !*** ./src/browser/view/hydrate/locator.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hydrator = __webpack_require__(/*! . */ "./src/browser/view/hydrate/index.js"),
    _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
    html = _require.html,
    _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js"),
    hydrate = _require2.hydrate,
    render = _require2.render;

var HydratorLocator = /*#__PURE__*/function () {
  function HydratorLocator(locator) {
    _classCallCheck(this, HydratorLocator);

    this.locator = locator;
  }

  _createClass(HydratorLocator, [{
    key: "locate",
    value: function locate() {
      var App = this.locator.locate("view/app");
      return new Hydrator({
        html: html,
        App: App,
        hydrator: hydrate,
        render: render
      });
    }
  }]);

  return HydratorLocator;
}();

module.exports = HydratorLocator;

/***/ }),

/***/ "./src/common/core/bootstrap/config.js":
/*!*********************************************!*\
  !*** ./src/common/core/bootstrap/config.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dto = {
  core: {
    locator: {
      'core/bootstrap': __webpack_require__(/*! ./src/common/core/bootstrap/locator */ "./src/common/core/bootstrap/locator.js")
    }
  }
};
module.exports = dto;

/***/ }),

/***/ "./src/common/core/bootstrap/index.js":
/*!********************************************!*\
  !*** ./src/common/core/bootstrap/index.js ***!
  \********************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bootstrap = /*#__PURE__*/function () {
  function Bootstrap(locator) {
    _classCallCheck(this, Bootstrap);

    this.locator = locator;
  }

  _createClass(Bootstrap, [{
    key: "bootstrap",
    value: function () {
      var _bootstrap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var configuration, bootstrapMap, key, _bootstrap2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                configuration = this.locator.locate('core/configuration'), bootstrapMap = configuration.find('core.bootstrap');
                _context.t0 = regeneratorRuntime.keys(bootstrapMap);

              case 2:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 9;
                  break;
                }

                key = _context.t1.value;
                _bootstrap2 = this.locator.locate(bootstrapMap[key]);
                _context.next = 7;
                return _bootstrap2.bootstrap();

              case 7:
                _context.next = 2;
                break;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function bootstrap() {
        return _bootstrap.apply(this, arguments);
      }

      return bootstrap;
    }()
  }]);

  return Bootstrap;
}();

module.exports = Bootstrap;

/***/ }),

/***/ "./src/common/core/bootstrap/locator.js":
/*!**********************************************!*\
  !*** ./src/common/core/bootstrap/locator.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bootstrap = __webpack_require__(/*! . */ "./src/common/core/bootstrap/index.js");

var BootstrapLocator = /*#__PURE__*/function () {
  function BootstrapLocator(locator) {
    _classCallCheck(this, BootstrapLocator);

    this.locator = locator;
  }

  _createClass(BootstrapLocator, [{
    key: "locate",
    value: function locate() {
      return new Bootstrap(this.locator);
    }
  }]);

  return BootstrapLocator;
}();

module.exports = BootstrapLocator;

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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
      this.items.delete(key);
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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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

    this[Symbol.for('id')] = id;
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
                  this.console.warning("event: \"".concat(name, "\" does not have a defined listener in channel ").concat(this[Symbol.for('id')]));
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

/***/ "./src/common/core/event/composer/config.js":
/*!**************************************************!*\
  !*** ./src/common/core/event/composer/config.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  core: {
    locator: {
      'core/event/composer': __webpack_require__(/*! ./src/common/core/event/composer/locator */ "./src/common/core/event/composer/locator.js")
    }
  }
};

/***/ }),

/***/ "./src/common/core/event/composer/index.js":
/*!*************************************************!*\
  !*** ./src/common/core/event/composer/index.js ***!
  \*************************************************/
/***/ ((module) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventComposer = /*#__PURE__*/function () {
  function EventComposer() {
    _classCallCheck(this, EventComposer);
  }

  _createClass(EventComposer, [{
    key: "compose",

    /**
     * Creates an event
     * @param {string} name - Event name
     * @param {Object} data - Event payload
     * @param {Object} meta - Event meta
     * @returns {Ation} event
     */
    value: function compose(name, data, meta) {
      return {
        meta: _objectSpread({
          timestamp: new Date().toISOString(),
          name: name
        }, meta),
        data: data
      };
    }
  }]);

  return EventComposer;
}();

module.exports = EventComposer;

/***/ }),

/***/ "./src/common/core/event/composer/locator.js":
/*!***************************************************!*\
  !*** ./src/common/core/event/composer/locator.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventComposer = __webpack_require__(/*! . */ "./src/common/core/event/composer/index.js");

var EventComposerLocator = /*#__PURE__*/function () {
  function EventComposerLocator(locator) {
    _classCallCheck(this, EventComposerLocator);

    this.locator = locator;
  }

  _createClass(EventComposerLocator, [{
    key: "locate",
    value: function locate() {
      return new EventComposer();
    }
  }]);

  return EventComposerLocator;
}();

module.exports = EventComposerLocator;

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

/***/ "./src/common/core/internationalization/config.js":
/*!********************************************************!*\
  !*** ./src/common/core/internationalization/config.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  core: {
    internationalization: {
      locale: {
        locale: 'es'
      },
      fallbackLocale: {
        locale: 'es'
      },
      dictionaries: {}
    },
    locator: {
      'core/internationalization': __webpack_require__(/*! ./src/common/core/internationalization/locator */ "./src/common/core/internationalization/locator.js")
    }
  }
};

/***/ }),

/***/ "./src/common/core/internationalization/index.js":
/*!*******************************************************!*\
  !*** ./src/common/core/internationalization/index.js ***!
  \*******************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Internationalization = /*#__PURE__*/function () {
  function Internationalization(_ref) {
    var dictionaries = _ref.dictionaries,
        fallbackLocale = _ref.fallbackLocale,
        locale = _ref.locale;

    _classCallCheck(this, Internationalization);

    this.fallbackLocale = this.buildLocale(fallbackLocale);
    if (locale) this.locale = this.buildLocale(locale);
    this.dictionaries = dictionaries;
  }

  _createClass(Internationalization, [{
    key: "buildLocale",
    value: function buildLocale(_ref2) {
      var locale = _ref2.locale,
          _ref2$options = _ref2.options;
      _ref2$options = _ref2$options === void 0 ? {} : _ref2$options;
      var script = _ref2$options.script,
          region = _ref2$options.region,
          hourCycle = _ref2$options.hourCycle,
          calendar = _ref2$options.calendar;
      return new Intl.Locale(locale, {
        script: script,
        region: region,
        hourCycle: hourCycle,
        calendar: calendar
      });
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale ? this.locale.toString() : this.fallbackLocale.toString();
    }
  }, {
    key: "getLocaleBaseName",
    value: function getLocaleBaseName() {
      return this.locale ? this.locale.baseName : this.fallbackLocale.baseName;
    }
  }, {
    key: "getDictionary",
    value: function getDictionary(locale) {
      return this.dictionaries[locale] || {};
    } // addDictionary(name, dictionary)
    // {
    //   this.dictionaries[name] = dictionary
    // }
    // deleteDictionary(name)
    // {
    //   delete this.dictionaries[name]
    // }
    // addWordToDictionary(lang, key, value)
    // {
    //   if(!this.dictionaries[lang])
    //     this.dictionaries[lang] = {}
    //   this.dictionaries[lang][key] = value
    // }

  }, {
    key: "translate",
    value: function translate(_ref3) {
      var id = _ref3.id,
          plural = _ref3.plural,
          fields = _ref3.fields,
          fallback = _ref3.fallback;
      var locale = this.getLocaleBaseName(),
          dictionary = this.getDictionary(locale),
          text = dictionary[id];

      if (text) {
        if (plural) {
          if (fields && typeof text[plural] === 'function') return text[plural](fields);else if (typeof text[plural] === 'string') return text[plural];
        } else {
          if (fields && typeof text === 'function') return text(fields);else if (typeof text === 'string') return text;
        }
      }

      return fallback ? fallback : id;
    }
  }, {
    key: "formatRelativeTime",
    value: function formatRelativeTime(_ref4) {
      var value = _ref4.value,
          unit = _ref4.unit,
          _ref4$options = _ref4.options;
      _ref4$options = _ref4$options === void 0 ? this.options.relativeTime : _ref4$options;
      var localeMatcher = _ref4$options.localeMatcher,
          numeric = _ref4$options.numeric,
          style = _ref4$options.style,
          split = _ref4$options.split;
      var rtf = new Intl.RelativeTimeFormat(this.getLocale(), {
        localeMatcher: localeMatcher,
        numeric: numeric,
        style: style
      });
      if (split) return rtf.formatToParts(value, unit);
      return rtf.format(value, unit);
    }
  }, {
    key: "formatList",
    value: function formatList(_ref5) {
      var list = _ref5.list,
          _ref5$options = _ref5.options;
      _ref5$options = _ref5$options === void 0 ? {} : _ref5$options;
      var localeMatcher = _ref5$options.localeMatcher,
          type = _ref5$options.type,
          style = _ref5$options.style;
      var lf = new Intl.ListFormat(this.getLocale(), {
        localeMatcher: localeMatcher,
        type: type,
        style: style
      });
      return lf.format(list);
    }
  }, {
    key: "formatNumber",
    value: function formatNumber(_ref6) {
      var number = _ref6.number,
          _ref6$options = _ref6.options;
      _ref6$options = _ref6$options === void 0 ? {} : _ref6$options;
      var compactDisplay = _ref6$options.compactDisplay,
          currency = _ref6$options.currency,
          currencyDisplay = _ref6$options.currencyDisplay,
          currencySign = _ref6$options.currencySign,
          localeMatcher = _ref6$options.localeMatcher,
          notation = _ref6$options.notation,
          numberingSystem = _ref6$options.numberingSystem,
          signDisplay = _ref6$options.signDisplay,
          style = _ref6$options.style,
          unit = _ref6$options.unit,
          unitDisplay = _ref6$options.unitDisplay,
          useGrouping = _ref6$options.useGrouping,
          minimumIntegerDigits = _ref6$options.minimumIntegerDigits,
          minimumFractionDigits = _ref6$options.minimumFractionDigits,
          minimumSignificantDigits = _ref6$options.minimumSignificantDigits,
          maximumSignificantDigits = _ref6$options.maximumSignificantDigits;
      var nf = new Intl.NumberFormat(this.getLocale(), {
        compactDisplay: compactDisplay,
        currency: currency,
        currencyDisplay: currencyDisplay,
        currencySign: currencySign,
        localeMatcher: localeMatcher,
        notation: notation,
        numberingSystem: numberingSystem,
        signDisplay: signDisplay,
        style: style,
        unit: unit,
        unitDisplay: unitDisplay,
        useGrouping: useGrouping,
        minimumIntegerDigits: minimumIntegerDigits,
        minimumFractionDigits: minimumFractionDigits,
        minimumSignificantDigits: minimumSignificantDigits,
        maximumSignificantDigits: maximumSignificantDigits
      });
      return nf.format(number);
    }
  }, {
    key: "formatDate",
    value: function formatDate(_ref7) {
      var date = _ref7.date,
          _ref7$options = _ref7.options;
      _ref7$options = _ref7$options === void 0 ? {} : _ref7$options;
      var dateStyle = _ref7$options.dateStyle,
          timeStyle = _ref7$options.timeStyle,
          calendar = _ref7$options.calendar,
          dayPeriod = _ref7$options.dayPeriod,
          numberingSystem = _ref7$options.numberingSystem,
          localeMatcher = _ref7$options.localeMatcher,
          timeZone = _ref7$options.timeZone,
          hour12 = _ref7$options.hour12,
          hourCycle = _ref7$options.hourCycle,
          formatMatcher = _ref7$options.formatMatcher,
          weekday = _ref7$options.weekday,
          era = _ref7$options.era,
          year = _ref7$options.year,
          month = _ref7$options.month,
          day = _ref7$options.day,
          hour = _ref7$options.hour,
          minute = _ref7$options.minute,
          second = _ref7$options.second,
          fractionalSecondDigits = _ref7$options.fractionalSecondDigits,
          timeZoneName = _ref7$options.timeZoneName;
      var dtf = new Intl.DateTimeFormat(this.getLocale(), {
        dateStyle: dateStyle,
        timeStyle: timeStyle,
        calendar: calendar,
        dayPeriod: dayPeriod,
        numberingSystem: numberingSystem,
        localeMatcher: localeMatcher,
        timeZone: timeZone,
        hour12: hour12,
        hourCycle: hourCycle,
        formatMatcher: formatMatcher,
        weekday: weekday,
        era: era,
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        fractionalSecondDigits: fractionalSecondDigits,
        timeZoneName: timeZoneName
      });
      return dtf.format(date);
    }
  }, {
    key: "getPluralRules",
    value: function getPluralRules(_ref8) {
      var number = _ref8.number,
          _ref8$options = _ref8.options,
          localeMatcher = _ref8$options.localeMatcher,
          type = _ref8$options.type,
          minimumIntegerDigits = _ref8$options.minimumIntegerDigits,
          minimumFractionDigits = _ref8$options.minimumFractionDigits,
          maximumFractionDigits = _ref8$options.maximumFractionDigits,
          minimumSignificantDigits = _ref8$options.minimumSignificantDigits,
          maximumSignificantDigits = _ref8$options.maximumSignificantDigits;
      var pr = new Intl.PluralRules(this.getLocale(), {
        localeMatcher: localeMatcher,
        type: type,
        minimumIntegerDigits: minimumIntegerDigits,
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits,
        minimumSignificantDigits: minimumSignificantDigits,
        maximumSignificantDigits: maximumSignificantDigits
      });
      return pr.select(number);
    }
  }]);

  return Internationalization;
}();

module.exports = Internationalization;

/***/ }),

/***/ "./src/common/core/internationalization/locator.js":
/*!*********************************************************!*\
  !*** ./src/common/core/internationalization/locator.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InternationalizationFactory = __webpack_require__(/*! . */ "./src/common/core/internationalization/index.js");

var InternationalizationFactoryLocator = /*#__PURE__*/function () {
  function InternationalizationFactoryLocator(locator) {
    _classCallCheck(this, InternationalizationFactoryLocator);

    this.locator = locator;
  }

  _createClass(InternationalizationFactoryLocator, [{
    key: "locate",
    value: function locate() {
      var configuration = this.locator.locate('core/configuration'),
          options = configuration.find('core.internationalization'),
          dictionaries = options.dictionaries,
          fallbackLocale = options.fallbackLocale,
          locale = options.locale;
      return new InternationalizationFactory({
        dictionaries: dictionaries,
        fallbackLocale: fallbackLocale,
        locale: locale
      });
    }
  }]);

  return InternationalizationFactoryLocator;
}();

module.exports = InternationalizationFactoryLocator;

/***/ }),

/***/ "./src/common/core/listener/app-initialized/index.js":
/*!***********************************************************!*\
  !*** ./src/common/core/listener/app-initialized/index.js ***!
  \***********************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {superhero/core/eventbus/observer}
 */
var AppInitializedListener = /*#__PURE__*/function () {
  function AppInitializedListener(console) {
    _classCallCheck(this, AppInitializedListener);

    this.console = console;
  }

  _createClass(AppInitializedListener, [{
    key: "execute",
    value: function execute(data) {
      this.console.log(data);
    }
  }]);

  return AppInitializedListener;
}();

module.exports = AppInitializedListener;

/***/ }),

/***/ "./src/common/core/listener/app-initialized/locator.js":
/*!*************************************************************!*\
  !*** ./src/common/core/listener/app-initialized/locator.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppInitializedListener = __webpack_require__(/*! . */ "./src/common/core/listener/app-initialized/index.js");

var AppInitializedListenerLocator = /*#__PURE__*/function () {
  function AppInitializedListenerLocator(locator) {
    _classCallCheck(this, AppInitializedListenerLocator);

    this.locator = locator;
  }

  _createClass(AppInitializedListenerLocator, [{
    key: "locate",
    value: function locate() {
      var consoleFactory = this.locator.locate('core/console/factory'),
          console = consoleFactory.create();
      return new AppInitializedListener(console);
    }
  }]);

  return AppInitializedListenerLocator;
}();

module.exports = AppInitializedListenerLocator;

/***/ }),

/***/ "./src/common/core/listener/config.js":
/*!********************************************!*\
  !*** ./src/common/core/listener/config.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  core: {
    locator: {
      'core/listener/error': __webpack_require__(/*! ./src/common/core/listener/error/locator */ "./src/common/core/listener/error/locator.js"),
      'core/listener/info': __webpack_require__(/*! ./src/common/core/listener/info/locator */ "./src/common/core/listener/info/locator.js"),
      'core/listener/warning': __webpack_require__(/*! ./src/common/core/listener/warning/locator */ "./src/common/core/listener/warning/locator.js"),
      'core/listener/app-initialized': __webpack_require__(/*! ./src/common/core/listener/app-initialized/locator */ "./src/common/core/listener/app-initialized/locator.js")
    }
  }
};

/***/ }),

/***/ "./src/common/core/listener/error/index.js":
/*!*************************************************!*\
  !*** ./src/common/core/listener/error/index.js ***!
  \*************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsoleListenerError = /*#__PURE__*/function () {
  function ConsoleListenerError(errorConsole) {
    _classCallCheck(this, ConsoleListenerError);

    this.console = errorConsole;
  }

  _createClass(ConsoleListenerError, [{
    key: "execute",
    value: function execute(event) {
      this.console.error(event.name, event.data);
    }
  }]);

  return ConsoleListenerError;
}();

module.exports = ConsoleListenerError;

/***/ }),

/***/ "./src/common/core/listener/error/locator.js":
/*!***************************************************!*\
  !*** ./src/common/core/listener/error/locator.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsoleListenerError = __webpack_require__(/*! . */ "./src/common/core/listener/error/index.js");

var ConsoleListenerErrorLocator = /*#__PURE__*/function () {
  function ConsoleListenerErrorLocator(locator) {
    _classCallCheck(this, ConsoleListenerErrorLocator);

    this.locator = locator;
  }

  _createClass(ConsoleListenerErrorLocator, [{
    key: "locate",
    value: function locate() {
      var consoleFactory = this.locator.locate('core/console/factory'),
          console = consoleFactory.create({
        prefix: 'ERR',
        color: 'white',
        background: 'red'
      });
      return new ConsoleListenerError(console);
    }
  }]);

  return ConsoleListenerErrorLocator;
}();

module.exports = ConsoleListenerErrorLocator;

/***/ }),

/***/ "./src/common/core/listener/info/index.js":
/*!************************************************!*\
  !*** ./src/common/core/listener/info/index.js ***!
  \************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsoleListenerInfo = /*#__PURE__*/function () {
  function ConsoleListenerInfo(infoConsole) {
    _classCallCheck(this, ConsoleListenerInfo);

    this.console = infoConsole;
  }

  _createClass(ConsoleListenerInfo, [{
    key: "execute",
    value: function execute(event) {
      this.console.info(event.name, event.data);
    }
  }]);

  return ConsoleListenerInfo;
}();

module.exports = ConsoleListenerInfo;

/***/ }),

/***/ "./src/common/core/listener/info/locator.js":
/*!**************************************************!*\
  !*** ./src/common/core/listener/info/locator.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsoleListenerInfo = __webpack_require__(/*! . */ "./src/common/core/listener/info/index.js");

var ConsoleListenerInfoLocator = /*#__PURE__*/function () {
  function ConsoleListenerInfoLocator(locator) {
    _classCallCheck(this, ConsoleListenerInfoLocator);

    this.locator = locator;
  }

  _createClass(ConsoleListenerInfoLocator, [{
    key: "locate",
    value: function locate() {
      var consoleFactory = this.locator.locate('core/console/factory'),
          console = consoleFactory.create({
        prefix: 'INF'
      });
      return new ConsoleListenerInfo(console);
    }
  }]);

  return ConsoleListenerInfoLocator;
}();

module.exports = ConsoleListenerInfoLocator;

/***/ }),

/***/ "./src/common/core/listener/warning/index.js":
/*!***************************************************!*\
  !*** ./src/common/core/listener/warning/index.js ***!
  \***************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsoleListenerWarning = /*#__PURE__*/function () {
  function ConsoleListenerWarning(warningConsole) {
    _classCallCheck(this, ConsoleListenerWarning);

    this.console = warningConsole;
  }

  _createClass(ConsoleListenerWarning, [{
    key: "execute",
    value: function execute(event) {
      this.console.warning(event.name, event.data);
    }
  }]);

  return ConsoleListenerWarning;
}();

module.exports = ConsoleListenerWarning;

/***/ }),

/***/ "./src/common/core/listener/warning/locator.js":
/*!*****************************************************!*\
  !*** ./src/common/core/listener/warning/locator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsoleListenerWarning = __webpack_require__(/*! . */ "./src/common/core/listener/warning/index.js");

var ConsoleListenerWarningLocator = /*#__PURE__*/function () {
  function ConsoleListenerWarningLocator(locator) {
    _classCallCheck(this, ConsoleListenerWarningLocator);

    this.locator = locator;
  }

  _createClass(ConsoleListenerWarningLocator, [{
    key: "locate",
    value: function locate() {
      var consoleFactory = this.locator.locate('core/console/factory'),
          console = consoleFactory.create({
        prefix: 'WARN',
        color: 'black',
        background: 'yellow'
      });
      return new ConsoleListenerWarning(console);
    }
  }]);

  return ConsoleListenerWarningLocator;
}();

module.exports = ConsoleListenerWarningLocator;

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

/***/ "./src/common/infrastructure/bus/bootstrap/error/listener-contract-not-honered.js":
/*!****************************************************************************************!*\
  !*** ./src/common/infrastructure/bus/bootstrap/error/listener-contract-not-honered.js ***!
  \****************************************************************************************/
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

var ListenerContractNotHoneredError = /*#__PURE__*/function (_Error) {
  _inherits(ListenerContractNotHoneredError, _Error);

  var _super = _createSuper(ListenerContractNotHoneredError);

  function ListenerContractNotHoneredError() {
    var _this;

    _classCallCheck(this, ListenerContractNotHoneredError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_BUS_LISTENER_CONTRACT_NOT_HONERED';
    return _this;
  }

  return ListenerContractNotHoneredError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = ListenerContractNotHoneredError;

/***/ }),

/***/ "./src/common/infrastructure/bus/bootstrap/index.js":
/*!**********************************************************!*\
  !*** ./src/common/infrastructure/bus/bootstrap/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ListenerContractNotHoneredError = __webpack_require__(/*! ./error/listener-contract-not-honered */ "./src/common/infrastructure/bus/bootstrap/error/listener-contract-not-honered.js");

var BusBootstrap = /*#__PURE__*/function () {
  function BusBootstrap(locator, bus, channels) {
    _classCallCheck(this, BusBootstrap);

    this.locator = locator;
    this.bus = bus;
    this.channels = channels;
  }

  _createClass(BusBootstrap, [{
    key: "addChannels",
    value: function addChannels(bus, channels) {
      for (var channel in channels) {
        if (!bus.getChannel(channel)) bus.createChannel(channel);
        var listeners = channels[channel].listeners;

        for (var event in listeners) {
          for (var listenerPath in listeners[event]) {
            if (!listeners[event][listenerPath]) continue;
            var listener = this.locator.locate(listenerPath);
            if (typeof listener.execute !== 'function') throw new ListenerContractNotHoneredError("\"".concat(listenerPath, "\" does not implement the Listener interface"));
            bus.on(channel, event, listener.execute.bind(listener));
          }
        }
      }
    }
  }, {
    key: "bootstrap",
    value: function bootstrap() {
      this.addChannels(this.bus, this.channels);
    }
  }]);

  return BusBootstrap;
}();

module.exports = BusBootstrap;

/***/ }),

/***/ "./src/common/infrastructure/bus/bootstrap/locator.js":
/*!************************************************************!*\
  !*** ./src/common/infrastructure/bus/bootstrap/locator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BusBootstrap = __webpack_require__(/*! . */ "./src/common/infrastructure/bus/bootstrap/index.js");

var BusBootstrapLocator = /*#__PURE__*/function () {
  function BusBootstrapLocator(locator) {
    _classCallCheck(this, BusBootstrapLocator);

    this.locator = locator;
  }

  _createClass(BusBootstrapLocator, [{
    key: "locate",
    value: function locate() {
      var bus = this.locator.locate('infrastructure/bus'),
          configuration = this.locator.locate('core/configuration'),
          channels = configuration.find('infrastructure.bus.channels');
      return new BusBootstrap(this.locator, bus, channels);
    }
  }]);

  return BusBootstrapLocator;
}();

module.exports = BusBootstrapLocator;

/***/ }),

/***/ "./src/common/infrastructure/bus/config.js":
/*!*************************************************!*\
  !*** ./src/common/infrastructure/bus/config.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  core: {
    bootstrap: {
      bus: 'infrastructure/bus/bootstrap'
    },
    locator: {
      'infrastructure/bus/bootstrap': __webpack_require__(/*! ./src/common/infrastructure/bus/bootstrap/locator */ "./src/common/infrastructure/bus/bootstrap/locator.js"),
      'infrastructure/bus': __webpack_require__(/*! ./src/common/infrastructure/bus/locator */ "./src/common/infrastructure/bus/locator.js")
    }
  },
  infrastructure: {
    bus: {
      channels: {
        'app': {
          listeners: {
            'core.error': {
              'core/listener/error': true
            },
            'core.warning': {
              'core/listener/warning': true
            },
            'core.info': {
              'core/listener/info': true
            }
          }
        }
      }
    }
  }
};

/***/ }),

/***/ "./src/common/infrastructure/bus/index.js":
/*!************************************************!*\
  !*** ./src/common/infrastructure/bus/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AssociativeArray = __webpack_require__(/*! common/core/data-structure/associative-array */ "./src/common/core/data-structure/associative-array/index.js");

var Bus = /*#__PURE__*/function () {
  function Bus(channelFactory) {
    _classCallCheck(this, Bus);

    this.channelFactory = channelFactory;
    this.channels = new AssociativeArray();
  }

  _createClass(Bus, [{
    key: "createChannel",
    value: function createChannel(id) {
      return this.getChannel(id);
    }
  }, {
    key: "deleteChannel",
    value: function deleteChannel(id) {
      this.channels.removeItem(id);
    }
  }, {
    key: "getChannel",
    value: function getChannel(id) {
      var existsChannel = this.channels.getItem(id);

      if (!existsChannel) {
        var channel = this.channelFactory.create(id);
        this.channels.setItem(id, channel);
        return channel;
      }

      return existsChannel;
    }
  }, {
    key: "emit",
    value: function () {
      var _emit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(channelId, event) {
        var channel;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                channel = this.getChannel(channelId);
                _context.next = 3;
                return channel.emit(event);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function emit(_x, _x2) {
        return _emit.apply(this, arguments);
      }

      return emit;
    }()
  }, {
    key: "on",
    value: function on(channelId, event, listener) {
      var channel = this.getChannel(channelId);
      return channel.on(event, listener);
    }
  }, {
    key: "once",
    value: function once(channelId, event, listener) {
      this.getChannel(channelId).once(event, listener);
    }
  }, {
    key: "onAll",
    value: function onAll(channelId, listener) {
      this.getChannel(channelId).onAll(listener);
    }
  }, {
    key: "removeListener",
    value: function removeListener(channelId, event, listener) {
      this.getChannel(channelId).removeListener(event, listener);
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(channelId, event) {
      this.getChannel(channelId).removeAllListeners(event);
    }
  }, {
    key: "clear",
    value: function clear(channelId) {
      this.getChannel(channelId).clear();
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'Bus';
    }
  }]);

  return Bus;
}();

module.exports = Bus;

/***/ }),

/***/ "./src/common/infrastructure/bus/locator.js":
/*!**************************************************!*\
  !*** ./src/common/infrastructure/bus/locator.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bus = __webpack_require__(/*! . */ "./src/common/infrastructure/bus/index.js");

var BusLocator = /*#__PURE__*/function () {
  function BusLocator(locator) {
    _classCallCheck(this, BusLocator);

    this.locator = locator;
  }

  _createClass(BusLocator, [{
    key: "locate",
    value: function locate() {
      var channelFactory = this.locator.locate('core/event-emitter/factory'),
          bus = new Bus(channelFactory);
      return bus;
    }
  }]);

  return BusLocator;
}();

module.exports = BusLocator;

/***/ }),

/***/ "./src/common/view/app/config.js":
/*!***************************************!*\
  !*** ./src/common/view/app/config.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  core: {
    locator: {
      'view/app': __webpack_require__(/*! ./locator */ "./src/common/view/app/locator.js")
    }
  },
  view: {
    'user-agents': ['googlebot', 'google-structured-data-testing-tool', 'bingbot', 'linkedinbot', 'mediapartners-google', 'yandexbot']
  }
};

/***/ }),

/***/ "./src/common/view/app/index.js":
/*!**************************************!*\
  !*** ./src/common/view/app/index.js ***!
  \**************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " value=", ">\n      <", " url=", ">\n        <", "                 path=\"/to-dos\"/>\n        <", "     isBot=", " path=\"/dynamic-rendering\" />\n        <", " path=\"/progressive-rendering\" />\n        <", "        path=\"/static-content\" />\n        <", "           path=\"/\"/>\n      </", ">\n    </", ">"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = function (_ref) {
  var html = _ref.html,
      BOTS_USER_AGENTS = _ref.BOTS_USER_AGENTS,
      BotContext = _ref.BotContext,
      Router = _ref.Router,
      ToDo = _ref.ToDo,
      DynamicRendering = _ref.DynamicRendering,
      ProgressiveRendering = _ref.ProgressiveRendering,
      StaticContent = _ref.StaticContent,
      Playground = _ref.Playground;

  var App = function App(_ref2) {
    var isBot = _ref2.isBot,
        url = _ref2.url;
    return html(_templateObject(), BotContext.Provider, isBot, Router, url, ToDo, DynamicRendering, isBot, ProgressiveRendering, StaticContent, Playground, Router, BotContext.Provider);
  };

  App.getServerSideProps = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref3) {
      var ctx, request;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ctx = _ref3.ctx;
              request = ctx.request;
              userAgent = request ? request.headers['user-agent'] : navigator.userAgent, isBot = BOTS_USER_AGENTS.some(function (bot) {
                return userAgent.toLowerCase().includes(bot);
              }), props = {
                isBot: isBot
              };
              return _context.abrupt("return", props);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  return App;
};

/***/ }),

/***/ "./src/common/view/app/locator.js":
/*!****************************************!*\
  !*** ./src/common/view/app/locator.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = __webpack_require__(/*! . */ "./src/common/view/app/index.js"),
    _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
    html = _require.html,
    _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js"),
    createContext = _require2.createContext;

var AppLocator = /*#__PURE__*/function () {
  function AppLocator(locator) {
    _classCallCheck(this, AppLocator);

    this.locator = locator;
  }

  _createClass(AppLocator, [{
    key: "locate",
    value: function locate() {
      var BOTS_USER_AGENTS = this.locator.locate('core/configuration').find('view.user-agents'),
          BotContext = createContext(),
          _require3 = __webpack_require__(/*! preact-router */ "./node_modules/preact-router/dist/preact-router.es.js"),
          Router = _require3.Router,
          ToDo = this.locator.locate('view/component/todos'),
          DynamicRendering = this.locator.locate('view/component/dynamic-rendering'),
          ProgressiveRendering = this.locator.locate('view/component/progressive-hydration'),
          StaticContent = this.locator.locate('view/component/static-content'),
          Counter = this.locator.locate('view/component/counter'),
          Playground = this.locator.locate('view/pages/playground');

      return App({
        html: html,
        BOTS_USER_AGENTS: BOTS_USER_AGENTS,
        BotContext: BotContext,
        Router: Router,
        ToDo: ToDo,
        DynamicRendering: DynamicRendering,
        ProgressiveRendering: ProgressiveRendering,
        StaticContent: StaticContent,
        Playground: Playground
      });
    }
  }]);

  return AppLocator;
}();

module.exports = AppLocator;

/***/ }),

/***/ "./src/common/view/components/atoms/button/index.js":
/*!**********************************************************!*\
  !*** ./src/common/view/components/atoms/button/index.js ***!
  \**********************************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["<button type=", " disabled=", " class=", " onClick=", ">\n      ", "\n    </button>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = function Button(_ref) {
  var html = _ref.html;
  return function (_ref2) {
    var classes = _ref2.classes,
        onClick = _ref2.onClick,
        text = _ref2.text,
        disabled = _ref2.disabled,
        type = _ref2.type;
    return html(_templateObject(), type, disabled, classes, onClick, text);
  };
};

module.exports = Button;

/***/ }),

/***/ "./src/common/view/components/atoms/button/locator.js":
/*!************************************************************!*\
  !*** ./src/common/view/components/atoms/button/locator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Button = __webpack_require__(/*! . */ "./src/common/view/components/atoms/button/index.js");

var ButtonLocator = /*#__PURE__*/function () {
  function ButtonLocator(locator) {
    _classCallCheck(this, ButtonLocator);

    this.locator = locator;
  }

  _createClass(ButtonLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html;

      return Button({
        html: html
      });
    }
  }]);

  return ButtonLocator;
}();

module.exports = ButtonLocator;

/***/ }),

/***/ "./src/common/view/components/atoms/label/index.js":
/*!*********************************************************!*\
  !*** ./src/common/view/components/atoms/label/index.js ***!
  \*********************************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["<label class=", " for=", ">", "</label>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = function Label(_ref) {
  var html = _ref.html,
      internationalization = _ref.internationalization;
  return function (_ref2) {
    var classes = _ref2.classes,
        labelFor = _ref2.labelFor,
        text = _ref2.text;
    return html(_templateObject(), classes, labelFor, internationalization.translate({
      id: text
    }));
  };
};

module.exports = Label;

/***/ }),

/***/ "./src/common/view/components/atoms/label/locator.js":
/*!***********************************************************!*\
  !*** ./src/common/view/components/atoms/label/locator.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Label = __webpack_require__(/*! . */ "./src/common/view/components/atoms/label/index.js");

var LabelLocator = /*#__PURE__*/function () {
  function LabelLocator(locator) {
    _classCallCheck(this, LabelLocator);

    this.locator = locator;
  }

  _createClass(LabelLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          internationalization = this.locator.locate('core/internationalization');

      return Label({
        html: html,
        internationalization: internationalization
      });
    }
  }]);

  return LabelLocator;
}();

module.exports = LabelLocator;

/***/ }),

/***/ "./src/common/view/components/clock/index.js":
/*!***************************************************!*\
  !*** ./src/common/view/components/clock/index.js ***!
  \***************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["<span>", "</span>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

module.exports = function (_ref) {
  var html = _ref.html,
      Component = _ref.Component;
  return /*#__PURE__*/function (_Component) {
    _inherits(_class, _Component);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this);
      _this.state = {
        time: Date.now()
      };
      return _this;
    } // Lifecycle: Called whenever our component is created


    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // update time every second
        this.timer = setInterval(function () {
          _this2.setState({
            time: Date.now()
          });
        }, 1000);
      } // Lifecycle: Called just before our component will be destroyed

    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // stop when not renderable
        clearInterval(this.timer);
      }
    }, {
      key: "render",
      value: function render() {
        var time = new Date(this.state.time).toLocaleTimeString();
        return html(_templateObject(), time);
      }
    }]);

    return _class;
  }(Component);
};

/***/ }),

/***/ "./src/common/view/components/clock/locator.js":
/*!*****************************************************!*\
  !*** ./src/common/view/components/clock/locator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Clock = __webpack_require__(/*! . */ "./src/common/view/components/clock/index.js");

var ClockLocator = /*#__PURE__*/function () {
  function ClockLocator(locator) {
    _classCallCheck(this, ClockLocator);

    this.locator = locator;
  }

  _createClass(ClockLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          Component = _require.Component;

      return Clock({
        html: html,
        Component: Component
      });
    }
  }]);

  return ClockLocator;
}();

module.exports = ClockLocator;

/***/ }),

/***/ "./src/common/view/components/config.js":
/*!**********************************************!*\
  !*** ./src/common/view/components/config.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  core: {
    locator: {
      'view/atoms/button': __webpack_require__(/*! ./atoms/button/locator */ "./src/common/view/components/atoms/button/locator.js"),
      'view/atoms/label': __webpack_require__(/*! ./atoms/label/locator */ "./src/common/view/components/atoms/label/locator.js"),
      'view/component/clock': __webpack_require__(/*! ./clock/locator */ "./src/common/view/components/clock/locator.js"),
      'view/component/counter': __webpack_require__(/*! ./counter/locator */ "./src/common/view/components/counter/locator.js"),
      'view/component/dynamic-rendering': __webpack_require__(/*! ./dynamic-rendering/locator */ "./src/common/view/components/dynamic-rendering/locator.js"),
      'view/component/progressive-hydration': __webpack_require__(/*! ./progressive-hydration/locator */ "./src/common/view/components/progressive-hydration/locator.js"),
      'view/component/static-content': __webpack_require__(/*! ./static-content/locator */ "./src/common/view/components/static-content/locator.js"),
      'view/component/todos': __webpack_require__(/*! ./todos/locator */ "./src/common/view/components/todos/locator.js"),
      'view/molecules/checkbox-input': __webpack_require__(/*! ./molecules/checkbox-input/locator */ "./src/common/view/components/molecules/checkbox-input/locator.js"),
      'view/molecules/fieldset': __webpack_require__(/*! ./molecules/fieldset/locator */ "./src/common/view/components/molecules/fieldset/locator.js"),
      'view/molecules/form': __webpack_require__(/*! ./molecules/form/locator */ "./src/common/view/components/molecules/form/locator.js"),
      'view/molecules/input-group': __webpack_require__(/*! ./molecules/input-group/locator */ "./src/common/view/components/molecules/input-group/locator.js"),
      'view/molecules/number-input': __webpack_require__(/*! ./molecules/number-input/locator */ "./src/common/view/components/molecules/number-input/locator.js"),
      'view/molecules/password-input': __webpack_require__(/*! ./molecules/password-input/locator */ "./src/common/view/components/molecules/password-input/locator.js"),
      'view/molecules/radio-input': __webpack_require__(/*! ./molecules/radio-input/locator */ "./src/common/view/components/molecules/radio-input/locator.js"),
      'view/molecules/select': __webpack_require__(/*! ./molecules/select/locator */ "./src/common/view/components/molecules/select/locator.js"),
      'view/molecules/text-input': __webpack_require__(/*! ./molecules/text-input/locator */ "./src/common/view/components/molecules/text-input/locator.js"),
      'view/molecules/textarea': __webpack_require__(/*! ./molecules/textarea/locator */ "./src/common/view/components/molecules/textarea/locator.js"),
      'view/molecules/toggeable-fieldset': __webpack_require__(/*! ./molecules/toggeable-fieldset/locator */ "./src/common/view/components/molecules/toggeable-fieldset/locator.js"),
      'view/organisms/login': __webpack_require__(/*! ./organisms/login/locator */ "./src/common/view/components/organisms/login/locator.js"),
      'view/pages/playground': __webpack_require__(/*! ./pages/playground/locator */ "./src/common/view/components/pages/playground/locator.js")
    }
  }
};

/***/ }),

/***/ "./src/common/view/components/counter/index.js":
/*!*****************************************************!*\
  !*** ./src/common/view/components/counter/index.js ***!
  \*****************************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <div>\n      <p>Count: ", "</p>\n      <button onClick=", ">Increment</button>\n      <button onClick=", ">Decrement</button>\n    </div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function (_ref) {
  var html = _ref.html,
      useState = _ref.useState,
      useRef = _ref.useRef;
  return function (_ref2) {
    var _ref2$initialCount = _ref2.initialCount,
        initialCount = _ref2$initialCount === void 0 ? 0 : _ref2$initialCount;

    var _useState = useState(initialCount),
        _useState2 = _slicedToArray(_useState, 2),
        count = _useState2[0],
        setCount = _useState2[1];

    var increment = function increment() {
      return setCount(count + 1);
    };

    var decrement = function decrement() {
      return setCount(function (currentCount) {
        return currentCount - 1;
      });
    };

    return html(_templateObject(), count, increment, decrement);
  };
};

/***/ }),

/***/ "./src/common/view/components/counter/locator.js":
/*!*******************************************************!*\
  !*** ./src/common/view/components/counter/locator.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Counter = __webpack_require__(/*! . */ "./src/common/view/components/counter/index.js");

var CounterLocator = /*#__PURE__*/function () {
  function CounterLocator(locator) {
    _classCallCheck(this, CounterLocator);

    this.locator = locator;
  }

  _createClass(CounterLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require.useState,
          _require2 = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require2.html;

      return Counter({
        html: html,
        useState: useState
      });
    }
  }]);

  return CounterLocator;
}();

module.exports = CounterLocator;

/***/ }),

/***/ "./src/common/view/components/dynamic-rendering/index.js":
/*!***************************************************************!*\
  !*** ./src/common/view/components/dynamic-rendering/index.js ***!
  \***************************************************************/
/***/ ((module) => {

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<", " isBot=", "><li>", "</li></", ">"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["<h1>Dynamic Strategy</h1>\n    <div>\n      ", "\n    </div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function (_ref) {
  var html = _ref.html,
      useState = _ref.useState,
      DynamicRenderingStrategy = _ref.DynamicRenderingStrategy;
  return function (_ref2) {
    var isBot = _ref2.isBot;
    var array = new Array(1000).fill(1);

    for (var index in array) {
      array[index] = Number(index) + 1;
    }

    var _useState = useState(array),
        _useState2 = _slicedToArray(_useState, 2),
        numbers = _useState2[0],
        setNumbers = _useState2[1];

    return html(_templateObject(), numbers.map(function (number, index) {
      return html(_templateObject2(), DynamicRenderingStrategy, isBot, index, DynamicRenderingStrategy);
    }));
  };
};

/***/ }),

/***/ "./src/common/view/components/dynamic-rendering/locator.js":
/*!*****************************************************************!*\
  !*** ./src/common/view/components/dynamic-rendering/locator.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DynamicRendering = __webpack_require__(/*! . */ "./src/common/view/components/dynamic-rendering/index.js");

var DynamicRenderingLocator = /*#__PURE__*/function () {
  function DynamicRenderingLocator(locator) {
    _classCallCheck(this, DynamicRenderingLocator);

    this.locator = locator;
  }

  _createClass(DynamicRenderingLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require.useState,
          _require2 = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require2.html,
          DynamicRenderingStrategy = this.locator.locate('view/strategies/dynamic');

      return DynamicRendering({
        html: html,
        useState: useState,
        DynamicRenderingStrategy: DynamicRenderingStrategy
      });
    }
  }]);

  return DynamicRenderingLocator;
}();

module.exports = DynamicRenderingLocator;

/***/ }),

/***/ "./src/common/view/components/molecules/checkbox-input/index.js":
/*!**********************************************************************!*\
  !*** ./src/common/view/components/molecules/checkbox-input/index.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", "\n      big=", "\n      class=", "\n      error=", "\n      id=", "\n      label=", "\n      required=", "\n      template=", "\n    >\n      <label for=", " class=", ">\n        ", "\n        <input\n          id=", "\n          class=", "\n          name=", "\n          checked=", "\n          required=", "\n          readonly=", "\n          disabled=", "\n          onChange=", "\n          type='checkbox' />\n        <span class='checkbox__checkmark'></span>\n      </label>\n    </", ">"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CheckboxInput = function CheckboxInput(_ref) {
  var html = _ref.html,
      internationalization = _ref.internationalization,
      useState = _ref.useState,
      InputGroup = _ref.InputGroup,
      useEffect = _ref.useEffect;

  var getErrorMessage = function getErrorMessage(_ref2) {
    var required = _ref2.required,
        checked = _ref2.checked,
        label = _ref2.label;

    if (required && !checked) {
      return internationalization.translate({
        id: 'IS_REQUIRED',
        fields: {
          label: label
        }
      });
    }
  };

  return function (props) {
    var big = props.big,
        classes = props.classes,
        disabled = props.disabled,
        id = props.id,
        label = props.label,
        name = props.name,
        readonly = props.readonly,
        required = props.required,
        template = props.template,
        _props$checked = props.checked,
        checked = _props$checked === void 0 ? false : _props$checked,
        _props$onChange = props.onChange,
        onChange = _props$onChange === void 0 ? function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$target = _ref3.target;

      _ref3$target = _ref3$target === void 0 ? {} : _ref3$target;
      var checked = _ref3$target.checked;
      setData(checked);
      setError(getErrorMessage({
        required: required,
        checked: checked,
        label: label
      }));
    } : _props$onChange,
        _useState = useState(checked),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1],
        _useState3 = useState(getErrorMessage({
      required: required,
      checked: checked,
      label: label
    })),
        _useState4 = _slicedToArray(_useState3, 2),
        error = _useState4[0],
        setError = _useState4[1];

    useEffect(function () {
      setData(checked);
      setError(getErrorMessage({
        required: required,
        checked: checked,
        label: label
      }));
    }, [checked]);
    return html(_templateObject(), InputGroup, big, classes, error, id, label, required, template, id, 'checkbox', label, id, "checkbox__input", name, data, required, readonly, disabled, onChange, InputGroup);
  };
};

module.exports = CheckboxInput;

/***/ }),

/***/ "./src/common/view/components/molecules/checkbox-input/locator.js":
/*!************************************************************************!*\
  !*** ./src/common/view/components/molecules/checkbox-input/locator.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CheckboxInput = __webpack_require__(/*! . */ "./src/common/view/components/molecules/checkbox-input/index.js");

var CheckboxInputLocator = /*#__PURE__*/function () {
  function CheckboxInputLocator(locator) {
    _classCallCheck(this, CheckboxInputLocator);

    this.locator = locator;
  }

  _createClass(CheckboxInputLocator, [{
    key: "locate",
    value: function locate() {
      var _CheckboxInput;

      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          _require2 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require2.useState,
          useEffect = _require2.useEffect,
          internationalization = this.locator.locate('core/internationalization'),
          InputGroup = this.locator.locate('view/molecules/input-group');

      return CheckboxInput((_CheckboxInput = {
        html: html,
        internationalization: internationalization,
        InputGroup: InputGroup
      }, _defineProperty(_CheckboxInput, "html", html), _defineProperty(_CheckboxInput, "useState", useState), _defineProperty(_CheckboxInput, "useEffect", useEffect), _CheckboxInput));
    }
  }]);

  return CheckboxInputLocator;
}();

module.exports = CheckboxInputLocator;

/***/ }),

/***/ "./src/common/view/components/molecules/fieldset/index.js":
/*!****************************************************************!*\
  !*** ./src/common/view/components/molecules/fieldset/index.js ***!
  \****************************************************************/
/***/ ((module) => {

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<legend><span>", "</span></legend>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <fieldset\n        id=", "\n        form=", "\n        name=", "\n        class=", "\n        disabled=", ">\n\n      ", "\n      ", "\n\n      </fieldset>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Fieldset = function Fieldset(_ref) {
  var html = _ref.html,
      internationalization = _ref.internationalization;
  return function (props) {
    var id = props.id,
        children = props.children,
        name = props.name,
        form = props.form,
        disabled = props.disabled,
        classes = props.classes,
        legend = props.legend;
    return html(_templateObject(), id, form, name, classes, disabled, legend && html(_templateObject2(), internationalization.translate({
      id: legend
    })), children);
  };
};

module.exports = Fieldset;

/***/ }),

/***/ "./src/common/view/components/molecules/fieldset/locator.js":
/*!******************************************************************!*\
  !*** ./src/common/view/components/molecules/fieldset/locator.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fieldset = __webpack_require__(/*! . */ "./src/common/view/components/molecules/fieldset/index.js");

var FieldsetLocator = /*#__PURE__*/function () {
  function FieldsetLocator(locator) {
    _classCallCheck(this, FieldsetLocator);

    this.locator = locator;
  }

  _createClass(FieldsetLocator, [{
    key: "locate",
    value: function locate() {
      var _Fieldset;

      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          _require2 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require2.useState,
          useEffect = _require2.useEffect,
          internationalization = this.locator.locate('core/internationalization'),
          InputGroup = this.locator.locate('view/molecules/input-group');

      return Fieldset((_Fieldset = {
        html: html,
        internationalization: internationalization,
        InputGroup: InputGroup
      }, _defineProperty(_Fieldset, "html", html), _defineProperty(_Fieldset, "useState", useState), _defineProperty(_Fieldset, "useEffect", useEffect), _Fieldset));
    }
  }]);

  return FieldsetLocator;
}();

module.exports = FieldsetLocator;

/***/ }),

/***/ "./src/common/view/components/molecules/form/index.js":
/*!************************************************************!*\
  !*** ./src/common/view/components/molecules/form/index.js ***!
  \************************************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <form\n        id=", "\n        onSubmit=", "\n        onBlur=", "\n        onChange=", "\n        onReset=", ">\n        ", "\n      </form>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Form = function Form(_ref) {
  var html = _ref.html;
  return function (props) {
    var id = props.id,
        children = props.children,
        _props$onSubmit = props.onSubmit,
        onSubmit = _props$onSubmit === void 0 ? function () {} : _props$onSubmit,
        _props$onChange = props.onChange,
        onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
        _props$onReset = props.onReset,
        onReset = _props$onReset === void 0 ? function () {} : _props$onReset,
        _props$onBlur = props.onBlur,
        onBlur = _props$onBlur === void 0 ? function () {} : _props$onBlur;
    return html(_templateObject(), id, onSubmit, onBlur, onChange, onReset, children);
  };
};

module.exports = Form;

/***/ }),

/***/ "./src/common/view/components/molecules/form/locator.js":
/*!**************************************************************!*\
  !*** ./src/common/view/components/molecules/form/locator.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form = __webpack_require__(/*! . */ "./src/common/view/components/molecules/form/index.js");

var FormLocator = /*#__PURE__*/function () {
  function FormLocator(locator) {
    _classCallCheck(this, FormLocator);

    this.locator = locator;
  }

  _createClass(FormLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html;

      return Form({
        html: html
      });
    }
  }]);

  return FormLocator;
}();

module.exports = FormLocator;

/***/ }),

/***/ "./src/common/view/components/molecules/input-group/index.js":
/*!*******************************************************************!*\
  !*** ./src/common/view/components/molecules/input-group/index.js ***!
  \*******************************************************************/
/***/ ((module) => {

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<span  class='input-group__optional-label'>\n          ", "\n        </span>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<", " classes=\"input-group__label\" labelFor=", " text=", "/>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class=", ">\n\n      ", "\n\n      <div class='input-group__label-wrapper'>\n\n        ", "\n\n        ", "\n      </div>\n\n      <div class=", ">\n        ", "\n      </div>\n    </div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputGroup = function InputGroup(_ref) {
  var html = _ref.html,
      internationalization = _ref.internationalization,
      Label = _ref.Label;
  return function (_ref2) {
    var big = _ref2.big,
        children = _ref2.children,
        classes = _ref2.classes,
        error = _ref2.error,
        id = _ref2.id,
        label = _ref2.label,
        required = _ref2.required;
    return html(_templateObject(), "input-group\n        ".concat(big ? 'input-group--xl' : '', "\n        ").concat(error ? '--error' : '', "\n        ").concat(classes ? classes : ''), children, label && html(_templateObject2(), Label, id, label), !required && html(_templateObject3(), internationalization.translate({
      id: 'OPTIONAL'
    })), "input-group__error ".concat(error ? '--visible' : '--hidden'), internationalization.translate({
      id: error
    }));
  };
};

module.exports = InputGroup;

/***/ }),

/***/ "./src/common/view/components/molecules/input-group/locator.js":
/*!*********************************************************************!*\
  !*** ./src/common/view/components/molecules/input-group/locator.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InputGroup = __webpack_require__(/*! . */ "./src/common/view/components/molecules/input-group/index.js");

var InputGroupLocator = /*#__PURE__*/function () {
  function InputGroupLocator(locator) {
    _classCallCheck(this, InputGroupLocator);

    this.locator = locator;
  }

  _createClass(InputGroupLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          internationalization = this.locator.locate('core/internationalization'),
          Label = this.locator.locate('view/atoms/label');

      return InputGroup({
        html: html,
        internationalization: internationalization,
        Label: Label
      });
    }
  }]);

  return InputGroupLocator;
}();

module.exports = InputGroupLocator;

/***/ }),

/***/ "./src/common/view/components/molecules/number-input/index.js":
/*!********************************************************************!*\
  !*** ./src/common/view/components/molecules/number-input/index.js ***!
  \********************************************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", "\n      big=", "\n      class=", "\n      error=", "\n      id=", "\n      label=", "\n      required=", "\n      template=", "\n    >\n      <input\n        autocomplete=", "\n        class=", "\n        disabled=", "\n        id=", "\n        max=", "\n        min=", "\n        name=", "\n        onChange=", "\n        pattern=", "\n        placeholder=", "\n        readOnly=", "\n        required=", "\n        title=", "\n        type='number'\n        value=", "\n      />\n    </", ">"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NumberInput = function NumberInput(_ref) {
  var html = _ref.html,
      internationalization = _ref.internationalization,
      useState = _ref.useState,
      InputGroup = _ref.InputGroup,
      useEffect = _ref.useEffect;

  var getDecimalsRegexp = function getDecimalsRegexp(_ref2) {
    var acceptDecimals = _ref2.acceptDecimals,
        maxDecimals = _ref2.maxDecimals;
    if (acceptDecimals) return "(\\.\\d{0,".concat(maxDecimals ? maxDecimals : '', "})?");
    return '';
  },
      getNegativeSignRegexp = function getNegativeSignRegexp(_ref3) {
    var acceptNegatives = _ref3.acceptNegatives;
    return acceptNegatives ? '-?' : '';
  },
      getRegexp = function getRegexp(_ref4) {
    var acceptDecimals = _ref4.acceptDecimals,
        maxDecimals = _ref4.maxDecimals,
        acceptNegatives = _ref4.acceptNegatives;
    var negativeRegexp = getNegativeSignRegexp({
      acceptNegatives: acceptNegatives
    }),
        decimalsRegexp = getDecimalsRegexp({
      acceptDecimals: acceptDecimals,
      maxDecimals: maxDecimals
    }),
        regexpStr = "^".concat(negativeRegexp, "\\d+").concat(decimalsRegexp, "$");
    return new RegExp(regexpStr);
  },
      getRange = function getRange(_ref5) {
    var min = _ref5.min,
        max = _ref5.max;
    if (min && max) return internationalization.translate({
      id: 'BETWEEN_MIN_MAX',
      fields: {
        min: min,
        max: max
      }
    });else if (min) return internationalization.translate({
      id: 'BIGGER_OR_EQUAL',
      fields: {
        min: min
      }
    });else if (max) return internationalization.translate({
      id: 'LESSER_OR_EQUAL',
      fields: {
        max: max
      }
    });
  },
      getSet = function getSet(_ref6) {
    var acceptDecimals = _ref6.acceptDecimals,
        acceptNegatives = _ref6.acceptNegatives,
        maxDecimals = _ref6.maxDecimals;
    if (!acceptDecimals && !acceptNegatives) return internationalization.translate({
      id: 'NATURAL_NUMBERS'
    });else if (!acceptDecimals) return internationalization.translate({
      id: 'INTEGER_NUMBERS'
    });else if (acceptDecimals && maxDecimals) return internationalization.translate({
      id: 'RATIONAL_NUMBERS_UP_TO_MAX_DECIMALS',
      fields: {
        maxDecimals: maxDecimals
      }
    });
    return internationalization.translate({
      id: 'RATIONAL_NUMBERS'
    });
  },
      getFormatError = function getFormatError(_ref7) {
    var acceptDecimals = _ref7.acceptDecimals,
        acceptNegatives = _ref7.acceptNegatives,
        maxDecimals = _ref7.maxDecimals,
        min = _ref7.min,
        max = _ref7.max;
    var range = getRange({
      min: min,
      max: max
    }),
        set = getSet({
      acceptDecimals: acceptDecimals,
      acceptNegatives: acceptNegatives,
      maxDecimals: maxDecimals
    });
    if (range) return internationalization.translate({
      id: 'ONLY_SET_ALLOWED',
      fields: {
        set: set,
        range: range
      }
    });
    return internationalization.translate({
      id: 'ONLY_SET_ALLOWED',
      fields: {
        set: set
      }
    });
  },
      getErrorMessage = function getErrorMessage(_ref8) {
    var required = _ref8.required,
        value = _ref8.value,
        acceptDecimals = _ref8.acceptDecimals,
        acceptNegatives = _ref8.acceptNegatives,
        maxDecimals = _ref8.maxDecimals,
        min = _ref8.min,
        max = _ref8.max,
        label = _ref8.label;
    if (required && (!value || value.trim() === '')) return internationalization.translate({
      id: 'IS_REQUIRED',
      fields: {
        label: label
      }
    });

    if (value) {
      var regexp = getRegexp({
        acceptDecimals: acceptDecimals,
        maxDecimals: maxDecimals,
        acceptNegatives: acceptNegatives
      });
      if (min && Number(value) < Number(min)) return internationalization.translate({
        id: 'MINIMUN_VALUE_IS',
        fields: {
          min: min
        }
      });else if (max && Number(value) > Number(max)) return internationalization.translate({
        id: 'MAXIMUM_VALUE_IS',
        fields: {
          max: max
        }
      });else if (!regexp.exec(value)) return getFormatError({
        acceptDecimals: acceptDecimals,
        acceptNegatives: acceptNegatives,
        maxDecimals: maxDecimals,
        min: min,
        max: max
      });
    }
  };

  return function (props) {
    var acceptDecimals = props.acceptDecimals,
        acceptNegatives = props.acceptNegatives,
        maxDecimals = props.maxDecimals,
        autocomplete = props.autocomplete,
        big = props.big,
        classes = props.classes,
        disabled = props.disabled,
        id = props.id,
        label = props.label,
        max = props.max,
        min = props.min,
        name = props.name,
        pattern = props.pattern,
        placeholder = props.placeholder,
        readonly = props.readonly,
        required = props.required,
        template = props.template,
        title = props.title,
        _props$value = props.value,
        value = _props$value === void 0 ? '' : _props$value,
        _props$onChange = props.onChange,
        onChange = _props$onChange === void 0 ? function () {
      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref9$target = _ref9.target;

      _ref9$target = _ref9$target === void 0 ? {} : _ref9$target;
      var value = _ref9$target.value;
      setData(value);
      setError(getErrorMessage({
        required: required,
        value: value,
        acceptDecimals: acceptDecimals,
        acceptNegatives: acceptNegatives,
        maxDecimals: maxDecimals,
        min: min,
        max: max,
        label: label
      }));
    } : _props$onChange,
        _useState = useState(value),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1],
        _useState3 = useState(getErrorMessage({
      required: required,
      value: value,
      acceptDecimals: acceptDecimals,
      acceptNegatives: acceptNegatives,
      maxDecimals: maxDecimals,
      min: min,
      max: max,
      label: label
    })),
        _useState4 = _slicedToArray(_useState3, 2),
        error = _useState4[0],
        setError = _useState4[1];

    useEffect(function () {
      setData(value);
      setError(getErrorMessage({
        required: required,
        value: value,
        acceptDecimals: acceptDecimals,
        acceptNegatives: acceptNegatives,
        maxDecimals: maxDecimals,
        min: min,
        max: max,
        label: label
      }));
    }, [value]);
    return html(_templateObject(), InputGroup, big, classes, error, id, label, required, template, autocomplete ? 'on' : 'off', 'input-group__input', disabled, id, max, min, name, onChange, pattern, internationalization.translate({
      id: placeholder
    }), readonly, required, internationalization.translate({
      id: title
    }), data, InputGroup);
  };
};

module.exports = NumberInput;

/***/ }),

/***/ "./src/common/view/components/molecules/number-input/locator.js":
/*!**********************************************************************!*\
  !*** ./src/common/view/components/molecules/number-input/locator.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NumberInput = __webpack_require__(/*! . */ "./src/common/view/components/molecules/number-input/index.js");

var NumberInputLocator = /*#__PURE__*/function () {
  function NumberInputLocator(locator) {
    _classCallCheck(this, NumberInputLocator);

    this.locator = locator;
  }

  _createClass(NumberInputLocator, [{
    key: "locate",
    value: function locate() {
      var _NumberInput;

      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          _require2 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require2.useState,
          useEffect = _require2.useEffect,
          internationalization = this.locator.locate('core/internationalization'),
          InputGroup = this.locator.locate('view/molecules/input-group');

      return NumberInput((_NumberInput = {
        html: html,
        internationalization: internationalization,
        InputGroup: InputGroup
      }, _defineProperty(_NumberInput, "html", html), _defineProperty(_NumberInput, "useState", useState), _defineProperty(_NumberInput, "useEffect", useEffect), _NumberInput));
    }
  }]);

  return NumberInputLocator;
}();

module.exports = NumberInputLocator;

/***/ }),

/***/ "./src/common/view/components/molecules/password-input/index.js":
/*!**********************************************************************!*\
  !*** ./src/common/view/components/molecules/password-input/index.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<i class=\"fas fa-eye-slash\"></i>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<i class=\"fas fa-eye\"></i>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", "\n      big=", "\n      class=", "\n      error=", "\n      id=", "\n      label=", "\n      required=", "\n      template=", "\n    >\n      <input\n        autocomplete=", "\n        class=", "\n        disabled=", "\n        id=", "\n        maxLength=", "\n        minLength=", "\n        name=", "\n        pattern=", "\n        placeholder=", "\n        readOnly=", "\n        required=", "\n        title=", "\n        type=", "\n        value=", "\n        onChange=", "\n      />\n      <span class=\"visibility\" onClick=", ">\n        ", "\n      </span>\n    </", ">"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PasswordInput = function PasswordInput(_ref) {
  var html = _ref.html,
      internationalization = _ref.internationalization,
      useState = _ref.useState,
      InputGroup = _ref.InputGroup,
      useEffect = _ref.useEffect;

  var getErrorMessage = function getErrorMessage(_ref2) {
    var required = _ref2.required,
        pattern = _ref2.pattern,
        value = _ref2.value,
        title = _ref2.title,
        label = _ref2.label;

    if (required && (!value || value.trim() === '')) {
      return internationalization.translate({
        id: 'IS_REQUIRED',
        fields: {
          label: label
        }
      });
    } else if (value && pattern) {
      var regexp = new RegExp(pattern),
          match = regexp.exec(value);
      if (!match) return title ? title : internationalization.translate({
        id: 'INVALID_FORMAT'
      });
    }
  };

  return function (props) {
    var autocomplete = props.autocomplete,
        big = props.big,
        classes = props.classes,
        disabled = props.disabled,
        id = props.id,
        label = props.label,
        maxlength = props.maxlength,
        minlength = props.minlength,
        name = props.name,
        pattern = props.pattern,
        placeholder = props.placeholder,
        readonly = props.readonly,
        required = props.required,
        template = props.template,
        title = props.title,
        _props$value = props.value,
        value = _props$value === void 0 ? '' : _props$value,
        _props$visible = props.visible,
        visible = _props$visible === void 0 ? false : _props$visible,
        _props$onChange = props.onChange,
        onChange = _props$onChange === void 0 ? function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$target = _ref3.target;

      _ref3$target = _ref3$target === void 0 ? {} : _ref3$target;
      var value = _ref3$target.value;
      setData(value);
      setError(getErrorMessage({
        required: required,
        value: value,
        pattern: pattern,
        title: title,
        label: label
      }));
    } : _props$onChange,
        _useState = useState(value),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1],
        _useState3 = useState(visible),
        _useState4 = _slicedToArray(_useState3, 2),
        visibility = _useState4[0],
        setVisibility = _useState4[1],
        _useState5 = useState(getErrorMessage({
      required: required,
      value: value,
      pattern: pattern,
      title: title,
      label: label
    })),
        _useState6 = _slicedToArray(_useState5, 2),
        error = _useState6[0],
        setError = _useState6[1];

    useEffect(function () {
      setData(value);
      setError(getErrorMessage({
        required: required,
        value: value,
        pattern: pattern,
        title: title,
        label: label
      }));
    }, [value]);
    return html(_templateObject(), InputGroup, big, classes, error, id, label, required, template, autocomplete ? 'on' : 'off', 'input-group__input', disabled, id, maxlength, minlength, name, pattern, internationalization.translate({
      id: placeholder
    }), readonly, required, internationalization.translate({
      id: title
    }), visibility ? 'text' : 'password', data, onChange, function () {
      setVisibility(!visibility);
    }, visibility ? html(_templateObject2()) : html(_templateObject3()), InputGroup);
  };
};

module.exports = PasswordInput;

/***/ }),

/***/ "./src/common/view/components/molecules/password-input/locator.js":
/*!************************************************************************!*\
  !*** ./src/common/view/components/molecules/password-input/locator.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PasswordInput = __webpack_require__(/*! . */ "./src/common/view/components/molecules/password-input/index.js");

var PasswordInputLocator = /*#__PURE__*/function () {
  function PasswordInputLocator(locator) {
    _classCallCheck(this, PasswordInputLocator);

    this.locator = locator;
  }

  _createClass(PasswordInputLocator, [{
    key: "locate",
    value: function locate() {
      var _PasswordInput;

      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          _require2 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require2.useState,
          useEffect = _require2.useEffect,
          internationalization = this.locator.locate('core/internationalization'),
          InputGroup = this.locator.locate('view/molecules/input-group');

      return PasswordInput((_PasswordInput = {
        html: html,
        internationalization: internationalization,
        InputGroup: InputGroup
      }, _defineProperty(_PasswordInput, "html", html), _defineProperty(_PasswordInput, "useState", useState), _defineProperty(_PasswordInput, "useEffect", useEffect), _PasswordInput));
    }
  }]);

  return PasswordInputLocator;
}();

module.exports = PasswordInputLocator;

/***/ }),

/***/ "./src/common/view/components/molecules/radio-input/index.js":
/*!*******************************************************************!*\
  !*** ./src/common/view/components/molecules/radio-input/index.js ***!
  \*******************************************************************/
/***/ ((module) => {

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<div key=", " class='btn-group__button-container'>\n                  <input\n                    type='radio'\n                    id=", "\n                    value=", "\n                    checked=", "\n                    name=", "\n                    disabled=", "\n                    readOnly=", "\n                    required=", "\n                    onChange=", "/>\n\n                  <label className='btn-group__button' for=", ">\n                    ", "\n                  </label>\n                </div>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", "\n      big=", "\n      class=", "\n      error=", "\n      id=", "\n      label=", "\n      required=", "\n      template=", "\n    >\n      <div className='btn-group__buttons'>\n        ", "\n      </div>\n\n    </", ">"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RadioInput = function RadioInput(_ref) {
  var html = _ref.html,
      internationalization = _ref.internationalization,
      useState = _ref.useState,
      InputGroup = _ref.InputGroup,
      useEffect = _ref.useEffect;

  var getErrorMessage = function getErrorMessage(_ref2) {
    var required = _ref2.required,
        value = _ref2.value,
        label = _ref2.label;

    if (required && !value) {
      return internationalization.translate({
        id: 'IS_REQUIRED',
        fields: {
          label: label
        }
      });
    }
  };

  return function (props) {
    var big = props.big,
        classes = props.classes,
        disabled = props.disabled,
        id = props.id,
        label = props.label,
        name = props.name,
        readonly = props.readonly,
        required = props.required,
        buttons = props.buttons,
        template = props.template,
        _props$value = props.value,
        value = _props$value === void 0 ? '' : _props$value,
        _props$onChange = props.onChange,
        onChange = _props$onChange === void 0 ? function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$target = _ref3.target;

      _ref3$target = _ref3$target === void 0 ? {} : _ref3$target;
      var value = _ref3$target.value;
      setData(value);
      setError(getErrorMessage({
        required: required,
        value: value,
        label: label
      }));
    } : _props$onChange,
        _useState = useState(value),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1],
        _useState3 = useState(getErrorMessage({
      required: required,
      value: value,
      label: label
    })),
        _useState4 = _slicedToArray(_useState3, 2),
        error = _useState4[0],
        setError = _useState4[1];

    useEffect(function () {
      setData(value);
      setError(getErrorMessage({
        required: required,
        value: value,
        label: label
      }));
    }, [value]);
    return html(_templateObject(), InputGroup, big, classes, error, id, label, required, template, buttons.map(function (button, index) {
      return html(_templateObject2(), index, button, button, data === button, name, disabled, readonly, required, onChange, button, internationalization.translate({
        id: button
      }));
    }), InputGroup);
  };
};

module.exports = RadioInput;

/***/ }),

/***/ "./src/common/view/components/molecules/radio-input/locator.js":
/*!*********************************************************************!*\
  !*** ./src/common/view/components/molecules/radio-input/locator.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextInput = __webpack_require__(/*! . */ "./src/common/view/components/molecules/radio-input/index.js");

var TextInputLocator = /*#__PURE__*/function () {
  function TextInputLocator(locator) {
    _classCallCheck(this, TextInputLocator);

    this.locator = locator;
  }

  _createClass(TextInputLocator, [{
    key: "locate",
    value: function locate() {
      var _TextInput;

      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          _require2 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require2.useState,
          useEffect = _require2.useEffect,
          internationalization = this.locator.locate('core/internationalization'),
          InputGroup = this.locator.locate('view/molecules/input-group');

      return TextInput((_TextInput = {
        html: html,
        internationalization: internationalization,
        InputGroup: InputGroup
      }, _defineProperty(_TextInput, "html", html), _defineProperty(_TextInput, "useState", useState), _defineProperty(_TextInput, "useEffect", useEffect), _TextInput));
    }
  }]);

  return TextInputLocator;
}();

module.exports = TextInputLocator;

/***/ }),

/***/ "./src/common/view/components/molecules/select/index.js":
/*!**************************************************************!*\
  !*** ./src/common/view/components/molecules/select/index.js ***!
  \**************************************************************/
/***/ ((module) => {

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<option selected=", "value=", ">", "</option>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", "\n      big=", "\n      class=", "\n      error=", "\n      id=", "\n      label=", "\n      required=", "\n      template=", "\n    >\n      <select\n        class=", "\n        id=", "\n        name=", "\n        required=", "\n        disabled=", "\n        autocomplete=", "\n        size=", "\n        multiple=", "\n        onChange=", ">\n        ", "\n      </select>\n    </", ">"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Select = function Select(_ref) {
  var html = _ref.html,
      internationalization = _ref.internationalization,
      useState = _ref.useState,
      InputGroup = _ref.InputGroup,
      useEffect = _ref.useEffect;

  var getErrorMessage = function getErrorMessage(_ref2) {
    var required = _ref2.required,
        selected = _ref2.selected;

    if (required && (!selected || selected.length === 0)) {
      return internationalization.translate({
        id: 'IS_REQUIRED',
        fields: {
          label: label
        }
      });
    }
  };

  return function (props) {
    var autocomplete = props.autocomplete,
        big = props.big,
        classes = props.classes,
        disabled = props.disabled,
        id = props.id,
        label = props.label,
        _props$size = props.size,
        size = _props$size === void 0 ? 1 : _props$size,
        _props$multiple = props.multiple,
        multiple = _props$multiple === void 0 ? false : _props$multiple,
        name = props.name,
        required = props.required,
        template = props.template,
        _props$options = props.options,
        options = _props$options === void 0 ? [] : _props$options,
        _props$selected = props.selected,
        selected = _props$selected === void 0 ? [] : _props$selected,
        _props$onChange = props.onChange,
        onChange = _props$onChange === void 0 ? function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          target = _ref3.target;

      var selectedOptions = _toConsumableArray(target.selectedOptions).map(function (option) {
        return option.value;
      });

      setData(selectedOptions);
      setError(getErrorMessage({
        required: required,
        selected: selected,
        label: label
      }));
    } : _props$onChange,
        _useState = useState(selected),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1],
        _useState3 = useState(getErrorMessage({
      required: required,
      selected: selected,
      label: label
    })),
        _useState4 = _slicedToArray(_useState3, 2),
        error = _useState4[0],
        setError = _useState4[1];

    useEffect(function () {
      setData(selected);
      setError(getErrorMessage({
        required: required,
        selected: selected,
        label: label
      }));
    }, [selected]);
    return html(_templateObject(), InputGroup, big, classes, error, id, label, required, template, 'input-group__input', id, name, required, disabled, autocomplete ? 'on' : 'off', size, multiple, onChange, options.map(function (option) {
      return html(_templateObject2(), data.indexOf(option) !== -1, option, internationalization.translate({
        id: option
      }));
    }), InputGroup);
  };
};

module.exports = Select;

/***/ }),

/***/ "./src/common/view/components/molecules/select/locator.js":
/*!****************************************************************!*\
  !*** ./src/common/view/components/molecules/select/locator.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Select = __webpack_require__(/*! . */ "./src/common/view/components/molecules/select/index.js");

var SelectLocator = /*#__PURE__*/function () {
  function SelectLocator(locator) {
    _classCallCheck(this, SelectLocator);

    this.locator = locator;
  }

  _createClass(SelectLocator, [{
    key: "locate",
    value: function locate() {
      var _Select;

      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          _require2 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require2.useState,
          useEffect = _require2.useEffect,
          internationalization = this.locator.locate('core/internationalization'),
          InputGroup = this.locator.locate('view/molecules/input-group');

      return Select((_Select = {
        html: html,
        internationalization: internationalization,
        InputGroup: InputGroup
      }, _defineProperty(_Select, "html", html), _defineProperty(_Select, "useState", useState), _defineProperty(_Select, "useEffect", useEffect), _Select));
    }
  }]);

  return SelectLocator;
}();

module.exports = SelectLocator;

/***/ }),

/***/ "./src/common/view/components/molecules/text-input/index.js":
/*!******************************************************************!*\
  !*** ./src/common/view/components/molecules/text-input/index.js ***!
  \******************************************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", "\n      big=", "\n      class=", "\n      error=", "\n      id=", "\n      label=", "\n      required=", "\n      template=", "\n    >\n      <input\n        autocomplete=", "\n        class=", "\n        disabled=", "\n        id=", "\n        maxLength=", "\n        minLength=", "\n        name=", "\n        pattern=", "\n        placeholder=", "\n        readOnly=", "\n        required=", "\n        title=", "\n        type='text'\n        value=", "\n        onChange=", "\n      />\n    </", ">"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TextInput = function TextInput(_ref) {
  var html = _ref.html,
      internationalization = _ref.internationalization,
      useState = _ref.useState,
      InputGroup = _ref.InputGroup,
      useEffect = _ref.useEffect;

  var getErrorMessage = function getErrorMessage(_ref2) {
    var required = _ref2.required,
        pattern = _ref2.pattern,
        value = _ref2.value,
        title = _ref2.title,
        label = _ref2.label;

    if (required && (!value || value.trim() === '')) {
      return internationalization.translate({
        id: 'IS_REQUIRED',
        fields: {
          label: label
        }
      });
    } else if (value && pattern) {
      var regexp = new RegExp(pattern),
          match = regexp.exec(value);
      if (!match) return title ? title : internationalization.translate({
        id: 'INVALID_FORMAT'
      });
    }
  };

  return function (props) {
    var autocomplete = props.autocomplete,
        big = props.big,
        classes = props.classes,
        disabled = props.disabled,
        id = props.id,
        label = props.label,
        maxlength = props.maxlength,
        minlength = props.minlength,
        name = props.name,
        pattern = props.pattern,
        placeholder = props.placeholder,
        readonly = props.readonly,
        required = props.required,
        template = props.template,
        title = props.title,
        _props$value = props.value,
        value = _props$value === void 0 ? '' : _props$value,
        _props$onChange = props.onChange,
        onChange = _props$onChange === void 0 ? function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$target = _ref3.target;

      _ref3$target = _ref3$target === void 0 ? {} : _ref3$target;
      var value = _ref3$target.value;
      setData(value);
      setError(getErrorMessage({
        required: required,
        value: value,
        pattern: pattern,
        title: title,
        label: label
      }));
    } : _props$onChange,
        _useState = useState(value),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1],
        _useState3 = useState(getErrorMessage({
      required: required,
      value: value,
      pattern: pattern,
      title: title,
      label: label
    })),
        _useState4 = _slicedToArray(_useState3, 2),
        error = _useState4[0],
        setError = _useState4[1];

    useEffect(function () {
      setData(value);
      setError(getErrorMessage({
        required: required,
        value: value,
        pattern: pattern,
        title: title,
        label: label
      }));
    }, [value]);
    return html(_templateObject(), InputGroup, big, classes, error, id, label, required, template, autocomplete ? 'on' : 'off', 'input-group__input', disabled, id, maxlength, minlength, name, pattern, internationalization.translate({
      id: placeholder
    }), readonly, required, internationalization.translate({
      id: title
    }), data, onChange, InputGroup);
  };
};

module.exports = TextInput;

/***/ }),

/***/ "./src/common/view/components/molecules/text-input/locator.js":
/*!********************************************************************!*\
  !*** ./src/common/view/components/molecules/text-input/locator.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextInput = __webpack_require__(/*! . */ "./src/common/view/components/molecules/text-input/index.js");

var TextInputLocator = /*#__PURE__*/function () {
  function TextInputLocator(locator) {
    _classCallCheck(this, TextInputLocator);

    this.locator = locator;
  }

  _createClass(TextInputLocator, [{
    key: "locate",
    value: function locate() {
      var _TextInput;

      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          _require2 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require2.useState,
          useEffect = _require2.useEffect,
          internationalization = this.locator.locate('core/internationalization'),
          InputGroup = this.locator.locate('view/molecules/input-group');

      return TextInput((_TextInput = {
        html: html,
        internationalization: internationalization,
        InputGroup: InputGroup
      }, _defineProperty(_TextInput, "html", html), _defineProperty(_TextInput, "useState", useState), _defineProperty(_TextInput, "useEffect", useEffect), _TextInput));
    }
  }]);

  return TextInputLocator;
}();

module.exports = TextInputLocator;

/***/ }),

/***/ "./src/common/view/components/molecules/textarea/index.js":
/*!****************************************************************!*\
  !*** ./src/common/view/components/molecules/textarea/index.js ***!
  \****************************************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <", "\n        big=", "\n        class=", "\n        error=", "\n        id=", "\n        label=", "\n        required=", "\n        template=", "\n      >\n        <textarea\n          class=", "\n          id=", "\n          rows=", "\n          columns=", "\n          name=", "\n          value=", "\n          required=", "\n          disabled=", "\n          readOnly=", "\n          maxLength=", "\n          placeholder=", "\n          title=", "\n          autoComplete=", "\n          onChange=", "\n        />\n      </", ">"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Textarea = function Textarea(_ref) {
  var html = _ref.html,
      internationalization = _ref.internationalization,
      useState = _ref.useState,
      InputGroup = _ref.InputGroup,
      useEffect = _ref.useEffect;

  var getErrorMessage = function getErrorMessage(_ref2) {
    var required = _ref2.required,
        value = _ref2.value,
        label = _ref2.label;

    if (required && (!value || value.trim() === '')) {
      return internationalization.translate({
        id: 'IS_REQUIRED',
        fields: {
          label: label
        }
      });
    }
  };

  return function (props) {
    var autocomplete = props.autocomplete,
        big = props.big,
        classes = props.classes,
        disabled = props.disabled,
        id = props.id,
        label = props.label,
        maxlength = props.maxlength,
        name = props.name,
        pattern = props.pattern,
        placeholder = props.placeholder,
        readonly = props.readonly,
        required = props.required,
        template = props.template,
        title = props.title,
        rows = props.rows,
        columns = props.columns,
        _props$value = props.value,
        value = _props$value === void 0 ? '' : _props$value,
        _props$onChange = props.onChange,
        onChange = _props$onChange === void 0 ? function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$target = _ref3.target;

      _ref3$target = _ref3$target === void 0 ? {} : _ref3$target;
      var value = _ref3$target.value;
      setData(value);
      setError(getErrorMessage({
        required: required,
        value: value,
        pattern: pattern,
        title: title,
        label: label
      }));
    } : _props$onChange,
        _useState = useState(value),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1],
        _useState3 = useState(getErrorMessage({
      required: required,
      value: value,
      pattern: pattern,
      title: title,
      label: label
    })),
        _useState4 = _slicedToArray(_useState3, 2),
        error = _useState4[0],
        setError = _useState4[1];

    useEffect(function () {
      setData(value);
      setError(getErrorMessage({
        required: required,
        value: value,
        pattern: pattern,
        title: title,
        label: label
      }));
    }, [value]);
    return html(_templateObject(), InputGroup, big, classes, error, id, label, required, template, 'input-group__input', id, rows, columns, name, data, required, disabled, readonly, maxlength, internationalization.translate({
      id: placeholder
    }), internationalization.translate({
      id: title
    }), autocomplete ? 'on' : 'off', onChange, InputGroup);
  };
};

module.exports = Textarea;

/***/ }),

/***/ "./src/common/view/components/molecules/textarea/locator.js":
/*!******************************************************************!*\
  !*** ./src/common/view/components/molecules/textarea/locator.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Textarea = __webpack_require__(/*! . */ "./src/common/view/components/molecules/textarea/index.js");

var TextareaLocator = /*#__PURE__*/function () {
  function TextareaLocator(locator) {
    _classCallCheck(this, TextareaLocator);

    this.locator = locator;
  }

  _createClass(TextareaLocator, [{
    key: "locate",
    value: function locate() {
      var _Textarea;

      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          _require2 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require2.useState,
          useEffect = _require2.useEffect,
          internationalization = this.locator.locate('core/internationalization'),
          InputGroup = this.locator.locate('view/molecules/input-group');

      return Textarea((_Textarea = {
        html: html,
        internationalization: internationalization,
        InputGroup: InputGroup
      }, _defineProperty(_Textarea, "html", html), _defineProperty(_Textarea, "useState", useState), _defineProperty(_Textarea, "useEffect", useEffect), _Textarea));
    }
  }]);

  return TextareaLocator;
}();

module.exports = TextareaLocator;

/***/ }),

/***/ "./src/common/view/components/molecules/toggeable-fieldset/index.js":
/*!**************************************************************************!*\
  !*** ./src/common/view/components/molecules/toggeable-fieldset/index.js ***!
  \**************************************************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <", "\n        checked=", "\n        class='toggeable-fieldset__checkbox'\n        label=", "\n        onChange=", "\n      />\n\n      <", "\n        classes=", "\n        form=", "\n        legend=", "\n        disabled=", ">\n        ", "\n      </", ">"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ToggeableFieldset = function ToggeableFieldset(_ref) {
  var html = _ref.html,
      useState = _ref.useState,
      CheckboxInputGroup = _ref.CheckboxInputGroup,
      Fieldset = _ref.Fieldset,
      useEffect = _ref.useEffect;

  var getIsVisible = function getIsVisible(_ref2) {
    var checked = _ref2.checked,
        showWhenChecked = _ref2.showWhenChecked;
    return !checked && !showWhenChecked || checked && showWhenChecked;
  };

  return function (props) {
    var children = props.children,
        label = props.label,
        form = props.form,
        legend = props.legend,
        _props$showWhenChecke = props.showWhenChecked,
        showWhenChecked = _props$showWhenChecke === void 0 ? true : _props$showWhenChecke,
        _props$checked = props.checked,
        checked = _props$checked === void 0 ? false : _props$checked,
        _useState = useState({
      checked: checked,
      showWhenChecked: showWhenChecked
    }),
        _useState2 = _slicedToArray(_useState, 2),
        isVisible = _useState2[0],
        setIsVisible = _useState2[1],
        _useState3 = useState(checked),
        _useState4 = _slicedToArray(_useState3, 2),
        isChecked = _useState4[0],
        setIsChecked = _useState4[1],
        onChange = function onChange() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$target = _ref3.target;

      _ref3$target = _ref3$target === void 0 ? {} : _ref3$target;
      var checked = _ref3$target.checked;
      setIsChecked(checked);
      setIsVisible(getIsVisible({
        checked: checked,
        showWhenChecked: showWhenChecked
      }));
    };

    return html(_templateObject(), CheckboxInputGroup, isChecked, label, onChange, Fieldset, isVisible ? '--visible' : '--hidden', form, legend, !isVisible, children, Fieldset);
  };
};

module.exports = ToggeableFieldset;

/***/ }),

/***/ "./src/common/view/components/molecules/toggeable-fieldset/locator.js":
/*!****************************************************************************!*\
  !*** ./src/common/view/components/molecules/toggeable-fieldset/locator.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ToggeableFieldset = __webpack_require__(/*! . */ "./src/common/view/components/molecules/toggeable-fieldset/index.js");

var ToggeableFieldsetLocator = /*#__PURE__*/function () {
  function ToggeableFieldsetLocator(locator) {
    _classCallCheck(this, ToggeableFieldsetLocator);

    this.locator = locator;
  }

  _createClass(ToggeableFieldsetLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          _require2 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require2.useState,
          useEffect = _require2.useEffect,
          CheckboxInputGroup = this.locator.locate('view/molecules/checkbox-input'),
          Fieldset = this.locator.locate('view/molecules/fieldset');

      return ToggeableFieldset({
        html: html,
        useState: useState,
        CheckboxInputGroup: CheckboxInputGroup,
        useEffect: useEffect,
        Fieldset: Fieldset
      });
    }
  }]);

  return ToggeableFieldsetLocator;
}();

module.exports = ToggeableFieldsetLocator;

/***/ }),

/***/ "./src/common/view/components/organisms/login/index.js":
/*!*************************************************************!*\
  !*** ./src/common/view/components/organisms/login/index.js ***!
  \*************************************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " onSubmit=", ">\n      <", "     name=\"username\" required=\"true\" value=\"", "\" onChange=", "/>\n      <", " name=\"password\" required=\"true\" value=\"", "\" onChange=", "/>\n      <", "        type=\"submit\" text=", "/>\n    </", ">"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function (_ref) {
  var html = _ref.html,
      useState = _ref.useState,
      Form = _ref.Form,
      TextInput = _ref.TextInput,
      PasswordInput = _ref.PasswordInput,
      Button = _ref.Button,
      internationalization = _ref.internationalization;
  return function (props) {
    var _useState = useState(props.username),
        _useState2 = _slicedToArray(_useState, 2),
        username = _useState2[0],
        setUsername = _useState2[1],
        onUsernameChange = function onUsernameChange(_ref2) {
      var value = _ref2.target.value;
      console.log(value);
      setUsername(value);
    },
        _useState3 = useState(props.password),
        _useState4 = _slicedToArray(_useState3, 2),
        password = _useState4[0],
        setPassword = _useState4[1],
        onPasswordChange = function onPasswordChange(_ref3) {
      var value = _ref3.target.value;
      console.log(value);
      setPassword(value);
    },
        onSubmit = function onSubmit(event) {
      event.preventDefault();
      console.log(event);
    };

    return html(_templateObject(), Form, onSubmit, TextInput, username, onUsernameChange, PasswordInput, password, onPasswordChange, Button, internationalization.translate({
      id: 'LOGIN'
    }), Form);
  };
};

/***/ }),

/***/ "./src/common/view/components/organisms/login/locator.js":
/*!***************************************************************!*\
  !*** ./src/common/view/components/organisms/login/locator.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Login = __webpack_require__(/*! . */ "./src/common/view/components/organisms/login/index.js");

var LoginLocator = /*#__PURE__*/function () {
  function LoginLocator(locator) {
    _classCallCheck(this, LoginLocator);

    this.locator = locator;
  }

  _createClass(LoginLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require.useState,
          _require2 = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require2.html,
          internationalization = this.locator.locate('core/internationalization'),
          TextInput = this.locator.locate('view/molecules/text-input'),
          PasswordInput = this.locator.locate('view/molecules/password-input'),
          Form = this.locator.locate('view/molecules/form'),
          Button = this.locator.locate('view/atoms/button');

      return Login({
        internationalization: internationalization,
        html: html,
        useState: useState,
        Form: Form,
        TextInput: TextInput,
        PasswordInput: PasswordInput,
        Button: Button
      });
    }
  }]);

  return LoginLocator;
}();

module.exports = LoginLocator;

/***/ }),

/***/ "./src/common/view/components/pages/playground/index.js":
/*!**************************************************************!*\
  !*** ./src/common/view/components/pages/playground/index.js ***!
  \**************************************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["<", "/>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = function (_ref) {
  var Login = _ref.Login,
      Form = _ref.Form,
      RadioInput = _ref.RadioInput,
      html = _ref.html,
      TextInput = _ref.TextInput,
      useState = _ref.useState,
      PasswordInput = _ref.PasswordInput,
      NumberInput = _ref.NumberInput,
      CheckboxInput = _ref.CheckboxInput,
      Select = _ref.Select,
      Textarea = _ref.Textarea,
      ToggeableFieldset = _ref.ToggeableFieldset;
  return function (props) {
    return html(_templateObject(), Login); // const
    // [username, setUsername] = useState(props.username),
    // onUsernameChange        = ({ target: { value } }) =>
    // {
    //   console.log(value)
    //   setUsername(value)
    // },
    // [password, setPassword] = useState(props.password),
    // onPasswordChange        = ({ target: { value } }) =>
    // {
    //   console.log(value)
    //   setPassword(value)
    // },
    // [accept, setAccept] = useState(props.accept),
    // onAcceptChange      = ({ target: { checked } }) =>
    // {
    //   console.log(checked)
    //   setAccept(checked)
    // },
    // options  = ['A', 'B', 'C'],
    // selected = ['C'],
    // onSubmit = (event) =>
    // {
    //   event.preventDefault()
    //   console.log(event)
    // }
    // return html`
    //   <${Form} onSubmit=${onSubmit}>
    //     <${RadioInput} buttons=${options}/>
    //     <${ToggeableFieldset}>
    //       <${Select} options=${options} selected=${selected}/>
    //       <${CheckboxInput} onChange=${onAcceptChange} checked=${accept} required="true"/>
    //       <${NumberInput} min="0" max="1" step="0.1" maxDecimals="2" acceptDecimals="true" acceptNegatives="false"/>
    //       <${TextInput} required="true" value="${username}"/>
    //       <${Textarea} rows="10" />
    //       <${PasswordInput} value="${password}" required="true" />
    //     </${ToggeableFieldset}>
    //     <input type="submit" />
    //   </${Form}>
    // `
    // return html`<${TextInput} onChange=${onUsernameChange} required="true" value="${username}"/> <${PasswordInput} onChange=${onPasswordChange} value="${password}" required="true" />`
  };
};

/***/ }),

/***/ "./src/common/view/components/pages/playground/locator.js":
/*!****************************************************************!*\
  !*** ./src/common/view/components/pages/playground/locator.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Playground = __webpack_require__(/*! . */ "./src/common/view/components/pages/playground/index.js");

var PlaygroundLocator = /*#__PURE__*/function () {
  function PlaygroundLocator(locator) {
    _classCallCheck(this, PlaygroundLocator);

    this.locator = locator;
  }

  _createClass(PlaygroundLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          TextInput = this.locator.locate('view/molecules/text-input'),
          PasswordInput = this.locator.locate('view/molecules/password-input'),
          NumberInput = this.locator.locate('view/molecules/number-input'),
          CheckboxInput = this.locator.locate('view/molecules/checkbox-input'),
          Select = this.locator.locate('view/molecules/select'),
          Form = this.locator.locate('view/molecules/form'),
          Textarea = this.locator.locate('view/molecules/textarea'),
          ToggeableFieldset = this.locator.locate('view/molecules/toggeable-fieldset'),
          RadioInput = this.locator.locate('view/molecules/radio-input'),
          Login = this.locator.locate('view/organisms/login'),
          _require2 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require2.useState;

      return Playground({
        Login: Login,
        Form: Form,
        RadioInput: RadioInput,
        html: html,
        useState: useState,
        TextInput: TextInput,
        PasswordInput: PasswordInput,
        NumberInput: NumberInput,
        CheckboxInput: CheckboxInput,
        Select: Select,
        Textarea: Textarea,
        ToggeableFieldset: ToggeableFieldset
      });
    }
  }]);

  return PlaygroundLocator;
}();

module.exports = PlaygroundLocator;

/***/ }),

/***/ "./src/common/view/components/progressive-hydration/index.js":
/*!*******************************************************************!*\
  !*** ./src/common/view/components/progressive-hydration/index.js ***!
  \*******************************************************************/
/***/ ((module) => {

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<", " force=", "><li>", "</li></", ">"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["<h1>Progressive strategy</h1>\n    <div>\n      ", "\n    </div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function (_ref) {
  var html = _ref.html,
      useState = _ref.useState,
      ProgressiveRenderingStrategy = _ref.ProgressiveRenderingStrategy;
  return function (_ref2) {
    var isBot = _ref2.isBot;
    var array = new Array(1000).fill(1);

    for (var index in array) {
      array[index] = Number(index) + 1;
    }

    var _useState = useState(array),
        _useState2 = _slicedToArray(_useState, 2),
        numbers = _useState2[0],
        setNumbers = _useState2[1];

    return html(_templateObject(), numbers.map(function (number, index) {
      return html(_templateObject2(), ProgressiveRenderingStrategy, index <= 10, index, ProgressiveRenderingStrategy);
    }));
  };
};

/***/ }),

/***/ "./src/common/view/components/progressive-hydration/locator.js":
/*!*********************************************************************!*\
  !*** ./src/common/view/components/progressive-hydration/locator.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProgressiveRendering = __webpack_require__(/*! . */ "./src/common/view/components/progressive-hydration/index.js");

var ProgressiveRenderingLocator = /*#__PURE__*/function () {
  function ProgressiveRenderingLocator(locator) {
    _classCallCheck(this, ProgressiveRenderingLocator);

    this.locator = locator;
  }

  _createClass(ProgressiveRenderingLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require.useState,
          _require2 = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require2.html,
          ProgressiveRenderingStrategy = this.locator.locate('view/strategies/progressive');

      return ProgressiveRendering({
        html: html,
        useState: useState,
        ProgressiveRenderingStrategy: ProgressiveRenderingStrategy
      });
    }
  }]);

  return ProgressiveRenderingLocator;
}();

module.exports = ProgressiveRenderingLocator;

/***/ }),

/***/ "./src/common/view/components/static-content/index.js":
/*!************************************************************!*\
  !*** ./src/common/view/components/static-content/index.js ***!
  \************************************************************/
/***/ ((module) => {

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<", "><li>", "</li></", ">"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["<h1>Static strategy</h1>\n    <div>\n      ", "\n    </div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function (_ref) {
  var html = _ref.html,
      useState = _ref.useState,
      StaticContentStrategy = _ref.StaticContentStrategy;
  return function (_ref2) {
    var isBot = _ref2.isBot;
    var array = new Array(1000).fill(1);

    for (var index in array) {
      array[index] = Number(index) + 1;
    }

    var _useState = useState(array),
        _useState2 = _slicedToArray(_useState, 2),
        numbers = _useState2[0],
        setNumbers = _useState2[1];

    return html(_templateObject(), numbers.map(function (number, index) {
      return html(_templateObject2(), StaticContentStrategy, index, StaticContentStrategy);
    }));
  };
};

/***/ }),

/***/ "./src/common/view/components/static-content/locator.js":
/*!**************************************************************!*\
  !*** ./src/common/view/components/static-content/locator.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StaticContent = __webpack_require__(/*! . */ "./src/common/view/components/static-content/index.js");

var StaticContentLocator = /*#__PURE__*/function () {
  function StaticContentLocator(locator) {
    _classCallCheck(this, StaticContentLocator);

    this.locator = locator;
  }

  _createClass(StaticContentLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require.useState,
          _require2 = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require2.html,
          StaticContentStrategy = this.locator.locate('view/strategies/static');

      return StaticContent({
        html: html,
        useState: useState,
        StaticContentStrategy: StaticContentStrategy
      });
    }
  }]);

  return StaticContentLocator;
}();

module.exports = StaticContentLocator;

/***/ }),

/***/ "./src/common/view/components/todos/index.js":
/*!***************************************************!*\
  !*** ./src/common/view/components/todos/index.js ***!
  \***************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<li>", "</li>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <form onSubmit=", ">\n            <input type=\"text\" value=", " onInput=", "/>\n            <button type=\"submit\">Add</button>\n            <ul>\n                ", "\n            </ul>\n        </form>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

module.exports = function (_ref) {
  var html = _ref.html,
      Component = _ref.Component;
  return /*#__PURE__*/function (_Component) {
    _inherits(_class, _Component);

    var _super = _createSuper(_class);

    function _class(_ref2) {
      var _this;

      var props = _ref2.props;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);
      _this.props = props;
      _this.state = {
        todos: [{
          text: 'a'
        }],
        text: ''
      };
      return _this;
    }

    _createClass(_class, [{
      key: "setText",
      value: function setText(text) {
        console.log('Lets add a log here');
        this.setState({
          text: text
        });
      }
    }, {
      key: "addTodo",
      value: function addTodo(event) {
        event.preventDefault();
        var _this$state = this.state,
            todos = _this$state.todos,
            text = _this$state.text;
        todos = todos.concat({
          text: text
        });
        this.setState({
          todos: todos,
          text: ''
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return html(_templateObject(), function (event) {
          _this2.addTodo(event);
        }, this.state.text, function (event) {
          _this2.setText(event.target.value);
        }, this.state.todos.map(function (todo) {
          return html(_templateObject2(), todo.text);
        }));
      }
    }]);

    return _class;
  }(Component);
};

/***/ }),

/***/ "./src/common/view/components/todos/locator.js":
/*!*****************************************************!*\
  !*** ./src/common/view/components/todos/locator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ToDosComponent = __webpack_require__(/*! . */ "./src/common/view/components/todos/index.js");

var ToDosComponentLocator = /*#__PURE__*/function () {
  function ToDosComponentLocator(locator) {
    _classCallCheck(this, ToDosComponentLocator);

    this.locator = locator;
  }

  _createClass(ToDosComponentLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          Component = _require.Component;

      return ToDosComponent({
        html: html,
        Component: Component
      });
    }
  }]);

  return ToDosComponentLocator;
}();

module.exports = ToDosComponentLocator;

/***/ }),

/***/ "./src/common/view/document/base/index.js":
/*!************************************************!*\
  !*** ./src/common/view/document/base/index.js ***!
  \************************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <head>\n      </head>\n      <body>\n        <div id=\"", "\">\n          <", " ...", "/>\n        </div>\n        <script type=\"text/javascript\" dangerouslySetInnerHTML=", "/>\n        <script type=\"text/javascript\" dangerouslySetInnerHTML=", "/>\n        <script type=\"text/javascript\" src=\"/resources/js/bundle/vendors.bundle.js?", "\"></script>\n        <script type=\"text/javascript\" src=\"/resources/js/bundle/polyfills.bundle.js?", "\"></script>\n        <script type=\"text/javascript\" src=\"/resources/js/bundle/index.bundle.js?", "\"></script>\n        <script type=\"text/javascript\" src=\"https://kit.fontawesome.com/d7797a6589.js?", "\" crossorigin=\"anonymous\"></script>\n      </body>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Base = /*#__PURE__*/function () {
  function Base(_ref) {
    var html = _ref.html,
        App = _ref.App;

    _classCallCheck(this, Base);

    this.html = html;
    this.App = App;
  }

  _createClass(Base, [{
    key: "serializeProps",
    value: function serializeProps(_ref2) {
      var _ref2$props = _ref2.props,
          props = _ref2$props === void 0 ? {} : _ref2$props;
      return {
        __html: "window._PROPS_=".concat(JSON.stringify(props))
      };
    }
  }, {
    key: "serializeState",
    value: function serializeState(_ref3) {
      var _ref3$state = _ref3.state,
          state = _ref3$state === void 0 ? {} : _ref3$state;
      return {
        __html: "window._STATE_=".concat(JSON.stringify(state))
      };
    }
  }, {
    key: "render",
    value: function render(_ref4) {
      var props = _ref4.props,
          _ref4$hash = _ref4.hash,
          hash = _ref4$hash === void 0 ? {"HTTP_PORT":"2432","PLATFORM":"browser","HASH":"9GZK7D1UZBCM6LP","APP_SELECTOR":"app"}.HASH : _ref4$hash,
          state = _ref4.state;
      return this.html(_templateObject(), {"HTTP_PORT":"2432","PLATFORM":"browser","HASH":"9GZK7D1UZBCM6LP","APP_SELECTOR":"app"}.APP_SELECTOR, this.App, props, this.serializeProps({
        props: props
      }), this.serializeState({
        state: state
      }), hash, hash, hash, hash);
    }
  }]);

  return Base;
}();

module.exports = Base;

/***/ }),

/***/ "./src/common/view/document/base/locator.js":
/*!**************************************************!*\
  !*** ./src/common/view/document/base/locator.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Base = __webpack_require__(/*! . */ "./src/common/view/document/base/index.js");

var BaseLocator = /*#__PURE__*/function () {
  function BaseLocator(locator) {
    _classCallCheck(this, BaseLocator);

    this.locator = locator;
  }

  _createClass(BaseLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require.html,
          App = this.locator.locate("view/app");

      return new Base({
        html: html,
        App: App
      });
    }
  }]);

  return BaseLocator;
}();

module.exports = BaseLocator;

/***/ }),

/***/ "./src/common/view/document/config.js":
/*!********************************************!*\
  !*** ./src/common/view/document/config.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  core: {
    locator: {
      'view/document/base': __webpack_require__(/*! ./base/locator */ "./src/common/view/document/base/locator.js")
    }
  }
};

/***/ }),

/***/ "./src/common/view/hooks/config.js":
/*!*****************************************!*\
  !*** ./src/common/view/hooks/config.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  core: {
    locator: {
      'view/hooks/near-screen': __webpack_require__(/*! ./near-screen/locator */ "./src/common/view/hooks/near-screen/locator.js")
    }
  }
};

/***/ }),

/***/ "./src/common/view/hooks/near-screen/index.js":
/*!****************************************************!*\
  !*** ./src/common/view/hooks/near-screen/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function (_ref) {
  var useState = _ref.useState,
      useEffect = _ref.useEffect;
  var observer;

  var isClient = typeof window !== 'undefined',
      hasIntersectionObserverSupport = function hasIntersectionObserverSupport() {
    return typeof window.IntersectionObserver !== 'undefined';
  },
      getIntersectionObserver = function getIntersectionObserver() // import intersection observer polyfill only if on client and if not supported by browser
  {
    return Promise.resolve(isClient && !hasIntersectionObserverSupport() && __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js"));
  },
      intersectionObserverOptions = // options for intersection observer in order to improve the effect
  {
    root: null,
    // windows viewport will be used
    rootMargin: '200px 0px 0px 0px'
  },
      handleIntersect = function handleIntersect(entries, observer) {
    entries.filter(function (entry) {
      return entry.isIntersecting;
    }).forEach(function (entry) {
      var target = entry.target;

      target._onIntersect(observer);
    });
  },
      getObserver = function getObserver() {
    return getIntersectionObserver().then(function (_) {
      if (observer) return observer;
      if (isClient) return new window.IntersectionObserver(handleIntersect, intersectionObserverOptions);
    });
  };

  return function (_ref2) {
    var ref = _ref2.ref;

    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        show = _useState2[0],
        setShow = _useState2[1];

    useEffect(function () {
      var current = ref.current;
      if (!current) return; // get observer async and only when needed

      getObserver().then(function (observer) {
        return observer.observe(current);
      }); // mutate the current target to add a method to be executed when intersecting

      current._onIntersect = function (observer) {
        setShow(true);
        observer.unobserve(current);
      }; // clean observed element when unmounted


      return function () {
        current._isSubscribed = false;
      };
    }, [ref]);
    return show;
  };
};

/***/ }),

/***/ "./src/common/view/hooks/near-screen/locator.js":
/*!******************************************************!*\
  !*** ./src/common/view/hooks/near-screen/locator.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NearScreen = __webpack_require__(/*! . */ "./src/common/view/hooks/near-screen/index.js");

var NearScreenLocator = /*#__PURE__*/function () {
  function NearScreenLocator(locator) {
    _classCallCheck(this, NearScreenLocator);

    this.locator = locator;
  }

  _createClass(NearScreenLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require.useState,
          useEffect = _require.useEffect,
          _require2 = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require2.html;

      return NearScreen({
        html: html,
        useState: useState,
        useEffect: useEffect
      });
    }
  }]);

  return NearScreenLocator;
}();

module.exports = NearScreenLocator;

/***/ }),

/***/ "./src/common/view/strategies/config.js":
/*!**********************************************!*\
  !*** ./src/common/view/strategies/config.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  core: {
    locator: {
      'view/strategies/static': __webpack_require__(/*! ./static/locator */ "./src/common/view/strategies/static/locator.js"),
      'view/strategies/dynamic': __webpack_require__(/*! ./dynamic/locator */ "./src/common/view/strategies/dynamic/locator.js"),
      'view/strategies/progressive': __webpack_require__(/*! ./progressive/locator */ "./src/common/view/strategies/progressive/locator.js")
    }
  }
};

/***/ }),

/***/ "./src/common/view/strategies/dynamic/index.js":
/*!*****************************************************!*\
  !*** ./src/common/view/strategies/dynamic/index.js ***!
  \*****************************************************/
/***/ ((module) => {

function _templateObject() {
  var data = _taggedTemplateLiteral(["<div ref=", "/>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = function (_ref) {
  var useRef = _ref.useRef,
      html = _ref.html,
      useNearScreen = _ref.useNearScreen;
  return function (_ref2) {
    var children = _ref2.children,
        isBot = _ref2.isBot,
        force = _ref2.force;
    var ref = useRef(null),
        isNearScreen = useNearScreen({
      ref: ref
    });
    if (isBot || isNearScreen || force) return children;else return html(_templateObject(), ref);
  };
};

/***/ }),

/***/ "./src/common/view/strategies/dynamic/locator.js":
/*!*******************************************************!*\
  !*** ./src/common/view/strategies/dynamic/locator.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DynamicLocator = /*#__PURE__*/function () {
  function DynamicLocator(locator) {
    _classCallCheck(this, DynamicLocator);

    this.locator = locator;
  }

  _createClass(DynamicLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useRef = _require.useRef,
          _require2 = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require2.html,
          Dynamic = __webpack_require__(/*! . */ "./src/common/view/strategies/dynamic/index.js"),
          useNearScreen = this.locator.locate('view/hooks/near-screen');

      return Dynamic({
        html: html,
        useRef: useRef,
        useNearScreen: useNearScreen
      });
    }
  }]);

  return DynamicLocator;
}();

module.exports = DynamicLocator;

/***/ }),

/***/ "./src/common/view/strategies/progressive/index.js":
/*!*********************************************************!*\
  !*** ./src/common/view/strategies/progressive/index.js ***!
  \*********************************************************/
/***/ ((module) => {

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      <div\n        ref=", "\n        suppressHydrationWarning\n        dangerouslySetInnerHTML=", "\n      />"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<div ref=", ">", "</div"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = function (_ref) {
  var isServer = _ref.isServer,
      html = _ref.html,
      useRef = _ref.useRef,
      useEffect = _ref.useEffect,
      render = _ref.render,
      hydrate = _ref.hydrate,
      useNearScreen = _ref.useNearScreen,
      EMPTY_HTML = _ref.EMPTY_HTML;
  return function (_ref2) {
    var children = _ref2.children;
    var ref = useRef(null),
        isNearScreen = useNearScreen({
      ref: ref
    });
    useEffect(function () {
      var el = ref.current;

      if (isNearScreen) // CLIENT: If we want to force the hydration OR the element is near screen then we hydrate the content to get the functionality ready
        {
          var action = el.hasChildNodes() ? 'hydrate' : 'render';

          switch (action) {
            case 'hydrate':
              hydrate(html(_templateObject(), children), el);
              break;

            case 'render':
              render(html(_templateObject2(), children), el);
              break;
          }
        }
    }, [children, isNearScreen]); // SERVER: Just render the content as usual

    if (isServer) return html(_templateObject3(), ref, children); // CLIENT: Avoid hydration until we say so
    // avoid re-render on the client

    return html(_templateObject4(), ref, EMPTY_HTML);
  };
};

/***/ }),

/***/ "./src/common/view/strategies/progressive/locator.js":
/*!***********************************************************!*\
  !*** ./src/common/view/strategies/progressive/locator.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProgressiveLocator = /*#__PURE__*/function () {
  function ProgressiveLocator(locator) {
    _classCallCheck(this, ProgressiveLocator);

    this.locator = locator;
  }

  _createClass(ProgressiveLocator, [{
    key: "locate",
    value: function locate() {
      var Progressive = __webpack_require__(/*! . */ "./src/common/view/strategies/progressive/index.js"),
          _require = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useEffect = _require.useEffect,
          useRef = _require.useRef,
          _require2 = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require2.html,
          render = _require2.render,
          hydrate = _require2.hydrate,
          useNearScreen = this.locator.locate('view/hooks/near-screen'),
          EMPTY_HTML = {
        __html: ''
      },
          isServer = {"HTTP_PORT":"2432","PLATFORM":"browser","HASH":"9GZK7D1UZBCM6LP","APP_SELECTOR":"app"}.PLATFORM === 'node';

      return Progressive({
        isServer: isServer,
        html: html,
        useRef: useRef,
        useEffect: useEffect,
        render: render,
        hydrate: hydrate,
        useNearScreen: useNearScreen,
        EMPTY_HTML: EMPTY_HTML
      });
    }
  }]);

  return ProgressiveLocator;
}();

module.exports = ProgressiveLocator;

/***/ }),

/***/ "./src/common/view/strategies/static/index.js":
/*!****************************************************!*\
  !*** ./src/common/view/strategies/static/index.js ***!
  \****************************************************/
/***/ ((module) => {

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <div\n        ref=", "\n        suppressHydrationWarning\n        dangerouslySetInnerHTML=", "\n      />"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function (_ref) {
  var useState = _ref.useState,
      useRef = _ref.useRef,
      useEffect = _ref.useEffect,
      html = _ref.html,
      EMPTY_HTML = _ref.EMPTY_HTML;
  return function (_ref2) {
    var children = _ref2.children;

    var ref = useRef(null),
        _useState = useState(typeof window === 'undefined'),
        _useState2 = _slicedToArray(_useState, 2),
        render = _useState2[0],
        setRender = _useState2[1];

    useEffect(function () {
      var isEmpty = ref.current.innerHTML === ''; // check if the innerHTML is empty as client side navigation need to render the component without server-side backup

      if (isEmpty) setRender(true);
    }, []);
    if (render) return html(_templateObject(), children); // if we're in the server or a spa navigation, just render it
    // avoid re-render on the client

    return html(_templateObject2(), ref, EMPTY_HTML);
  };
};

/***/ }),

/***/ "./src/common/view/strategies/static/locator.js":
/*!******************************************************!*\
  !*** ./src/common/view/strategies/static/locator.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StaticRenderStrategy = __webpack_require__(/*! . */ "./src/common/view/strategies/static/index.js");

var StaticRenderStrategyLocator = /*#__PURE__*/function () {
  function StaticRenderStrategyLocator(locator) {
    _classCallCheck(this, StaticRenderStrategyLocator);

    this.locator = locator;
  }

  _createClass(StaticRenderStrategyLocator, [{
    key: "locate",
    value: function locate() {
      var _require = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js"),
          useState = _require.useState,
          useRef = _require.useRef,
          useEffect = _require.useEffect,
          _require2 = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js"),
          html = _require2.html,
          EMPTY_HTML = {
        __html: ''
      };

      return StaticRenderStrategy({
        html: html,
        useState: useState,
        useRef: useRef,
        useEffect: useEffect,
        EMPTY_HTML: EMPTY_HTML
      });
    }
  }]);

  return StaticRenderStrategyLocator;
}();

module.exports = StaticRenderStrategyLocator;

/***/ }),

/***/ "./src/schema/composer/error/filter-is-not-honoring-contract.js":
/*!**********************************************************************!*\
  !*** ./src/schema/composer/error/filter-is-not-honoring-contract.js ***!
  \**********************************************************************/
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

/**
 * @extends {Error}
 */
var FilterIsNotHonoringContractError = /*#__PURE__*/function (_Error) {
  _inherits(FilterIsNotHonoringContractError, _Error);

  var _super = _createSuper(FilterIsNotHonoringContractError);

  function FilterIsNotHonoringContractError() {
    var _this;

    _classCallCheck(this, FilterIsNotHonoringContractError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_FILTER_IS_NOT_HONORING_CONTRACT';
    return _this;
  }

  return FilterIsNotHonoringContractError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = FilterIsNotHonoringContractError;

/***/ }),

/***/ "./src/schema/composer/error/invalid-attribute.js":
/*!********************************************************!*\
  !*** ./src/schema/composer/error/invalid-attribute.js ***!
  \********************************************************/
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

/**
 * @extends {Error}
 */
var InvalidAttributeError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidAttributeError, _Error);

  var _super = _createSuper(InvalidAttributeError);

  function InvalidAttributeError() {
    var _this;

    _classCallCheck(this, InvalidAttributeError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_SCHEMA_INVALID_ATTRIBUTE';
    return _this;
  }

  return InvalidAttributeError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = InvalidAttributeError;

/***/ }),

/***/ "./src/schema/composer/error/invalid-collection.js":
/*!*********************************************************!*\
  !*** ./src/schema/composer/error/invalid-collection.js ***!
  \*********************************************************/
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

/**
 * @extends {Error}
 */
var InvalidCollectionError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidCollectionError, _Error);

  var _super = _createSuper(InvalidCollectionError);

  function InvalidCollectionError() {
    var _this;

    _classCallCheck(this, InvalidCollectionError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_INVALID_COLLECTION';
    return _this;
  }

  return InvalidCollectionError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = InvalidCollectionError;

/***/ }),

/***/ "./src/schema/composer/error/invalid-schema.js":
/*!*****************************************************!*\
  !*** ./src/schema/composer/error/invalid-schema.js ***!
  \*****************************************************/
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

/**
 * @extends {Error}
 */
var InvalidSchemaError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidSchemaError, _Error);

  var _super = _createSuper(InvalidSchemaError);

  function InvalidSchemaError() {
    var _this;

    _classCallCheck(this, InvalidSchemaError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_SCHEMA_INVALID_SCHEMA';
    return _this;
  }

  return InvalidSchemaError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = InvalidSchemaError;

/***/ }),

/***/ "./src/schema/composer/error/schema-not-found.js":
/*!*******************************************************!*\
  !*** ./src/schema/composer/error/schema-not-found.js ***!
  \*******************************************************/
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

/**
 * @extends {Error}
 */
var SchemaNotFoundError = /*#__PURE__*/function (_Error) {
  _inherits(SchemaNotFoundError, _Error);

  var _super = _createSuper(SchemaNotFoundError);

  function SchemaNotFoundError() {
    var _this;

    _classCallCheck(this, SchemaNotFoundError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_SCHEMA_NOT_FOUND';
    return _this;
  }

  return SchemaNotFoundError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = SchemaNotFoundError;

/***/ }),

/***/ "./src/schema/composer/error/validator-is-not-honoring-contract.js":
/*!*************************************************************************!*\
  !*** ./src/schema/composer/error/validator-is-not-honoring-contract.js ***!
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

/**
 * @extends {Error}
 */
var ValidatorIsNotHonoringContractError = /*#__PURE__*/function (_Error) {
  _inherits(ValidatorIsNotHonoringContractError, _Error);

  var _super = _createSuper(ValidatorIsNotHonoringContractError);

  function ValidatorIsNotHonoringContractError() {
    var _this;

    _classCallCheck(this, ValidatorIsNotHonoringContractError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_VALIDATOR_IS_NOT_HONORING_CONTRACT';
    return _this;
  }

  return ValidatorIsNotHonoringContractError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = ValidatorIsNotHonoringContractError;

/***/ }),

/***/ "./src/schema/composer/error/validator-not-found.js":
/*!**********************************************************!*\
  !*** ./src/schema/composer/error/validator-not-found.js ***!
  \**********************************************************/
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

/**
 * @extends {Error}
 */
var ValidatorNotFoundError = /*#__PURE__*/function (_Error) {
  _inherits(ValidatorNotFoundError, _Error);

  var _super = _createSuper(ValidatorNotFoundError);

  function ValidatorNotFoundError() {
    var _this;

    _classCallCheck(this, ValidatorNotFoundError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_VALIDATOR_NOT_FOUND';
    return _this;
  }

  return ValidatorNotFoundError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = ValidatorNotFoundError;

/***/ }),

/***/ "./src/schema/composer/index.js":
/*!**************************************!*\
  !*** ./src/schema/composer/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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

var InvalidAttributeError = __webpack_require__(/*! ./error/invalid-attribute */ "./src/schema/composer/error/invalid-attribute.js"),
    InvalidCollectionError = __webpack_require__(/*! ./error/invalid-collection */ "./src/schema/composer/error/invalid-collection.js"),
    SchemaNotFoundError = __webpack_require__(/*! ./error/schema-not-found */ "./src/schema/composer/error/schema-not-found.js"),
    ValidatorNotFoundError = __webpack_require__(/*! ./error/validator-not-found */ "./src/schema/composer/error/validator-not-found.js");

var SchemaComposer = /*#__PURE__*/function () {
  function SchemaComposer(_ref) {
    var deepclone = _ref.deepclone,
        deepfreeze = _ref.deepfreeze,
        deepmerge = _ref.deepmerge,
        filters = _ref.filters,
        schemas = _ref.schemas,
        validators = _ref.validators;

    _classCallCheck(this, SchemaComposer);

    this.deepclone = deepclone;
    this.deepfreeze = deepfreeze;
    this.deepmerge = deepmerge;
    this.filters = filters;
    this.schemas = schemas;
    this.validators = validators;
  }
  /**
   * @param {string} schemaName
   * @param {Object|Array<Object>} dto
   * @param {boolean} [removeUndefinedProperties=true]
   * @throws {E_SCHEMA_NOT_FOUND}
   * @throws {E_VALIDATOR_NOT_FOUND}
   * @throws {E_SCHEMA_INVALID_ATTRIBUTE}
   *
   * @returns {Object}
   */


  _createClass(SchemaComposer, [{
    key: "compose",
    value: function compose(_ref2) {
      var _this$deepmerge;

      var schemaName = _ref2.schemaName,
          dto = _ref2.dto,
          _ref2$removeUndefined = _ref2.removeUndefinedProperties,
          removeUndefinedProperties = _ref2$removeUndefined === void 0 ? true : _ref2$removeUndefined;
      var schema = this.composeSchema(schemaName),
          output = {};
      if (Array.isArray(dto)) dto = (_this$deepmerge = this.deepmerge).merge.apply(_this$deepmerge, [{}].concat(_toConsumableArray(dto)));

      for (var attribute in schema) {
        try {
          output[attribute] = this.attribute({
            schemaName: schemaName,
            schema: schema,
            attribute: attribute,
            data: dto[attribute],
            removeUndefinedProperties: removeUndefinedProperties
          });
        } catch (error) {
          throw new InvalidAttributeError(error.message + '; in root schema: "' + schemaName + '" and root attribute: "' + attribute + '"');
        }
      }

      if (Object.isFrozen(schema)) this.deepfreeze.freeze(output);
      return removeUndefinedProperties ? JSON.parse(JSON.stringify(output)) : output;
    }
    /**
     * @param {string} schemaName
     * @param {boolean} [includeOptional=false]
     * @param {boolean} [removeUndefinedProperties=true]
     * @throws {E_SCHEMA_NOT_FOUND}
     *
     * @returns {Object}
     */

  }, {
    key: "composeExample",
    value: function composeExample(_ref3) {
      var schemaName = _ref3.schemaName,
          includeOptional = _ref3.includeOptional,
          _ref3$removeUndefined = _ref3.removeUndefinedProperties,
          removeUndefinedProperties = _ref3$removeUndefined === void 0 ? true : _ref3$removeUndefined;
      var schema = this.composeSchema(schemaName),
          output = {};

      for (var attribute in schema) {
        if (schema[attribute].optional && includeOptional) {
          output[attribute] = this.composeExampleValue({
            options: schema[attribute],
            includeOptional: includeOptional,
            removeUndefinedProperties: removeUndefinedProperties
          });
        } else if (!schema[attribute].optional) {
          output[attribute] = this.composeExampleValue({
            options: schema[attribute],
            includeOptional: includeOptional,
            removeUndefinedProperties: removeUndefinedProperties
          });
        }
      }

      if (Object.isFrozen(schema)) this.deepfreeze.freeze(output);
      return removeUndefinedProperties ? JSON.parse(JSON.stringify(output)) : output;
    }
    /**
     * @param {Object} options
     * @param {boolean} includeOptional
     * @param {boolean} removeUndefinedProperties
     * @throws {E_SCHEMA_NOT_FOUND}
     * @returns {Object|undefined}
     */

  }, {
    key: "composeExampleValue",
    value: function composeExampleValue(_ref4) {
      var options = _ref4.options,
          includeOptional = _ref4.includeOptional,
          removeUndefinedProperties = _ref4.removeUndefinedProperties;
      var output;

      if ('example' in options) {
        output = options.example;
      } else if (typeof options.schema === 'string') {
        var schema = this.composeExample({
          schemaName: options.schema,
          includeOptional: includeOptional,
          removeUndefinedProperties: removeUndefinedProperties
        });
        output = options.trait ? schema[options.trait] : schema;
      }

      if (options.collection) return output ? [output] : [];else return output;
    }
    /**
     * @param {string} schemaName
     *
     * @throws {E_SCHEMA_NOT_FOUND}
     *
     * @returns {Object}
     */

  }, {
    key: "composeSchema",
    value: function composeSchema(_ref5) {
      var schemaName = _ref5.schemaName;
      if (!this.schemas.has(schemaName)) throw new SchemaNotFoundError("Schema: \"".concat(schemaName, "\" not found"));
      var schema = this.buildSchema({
        schema: this.schemas.get(schemaName)
      });
      return schema;
    }
    /**
     * @param {string} schemaName
     * @param {string} attribute
     * @param {Object} data
     * @param {boolean} removeUndefinedProperties
     * @throws {E_SCHEMA_NOT_FOUND}
     * @throws {E_VALIDATOR_NOT_FOUND}
     * @throws {E_SCHEMA_INVALID_ATTRIBUTE}
     *
     * @returns {*}
     */

  }, {
    key: "trait",
    value: function trait(_ref6) {
      var schemaName = _ref6.schemaName,
          attribute = _ref6.attribute,
          data = _ref6.data,
          removeUndefinedProperties = _ref6.removeUndefinedProperties;
      if (schemaName in this.schemas === false) throw new SchemaNotFoundError("Schema: \"".concat(schemaName, "\" not found"));
      var schema = this.schemas[schemaName],
          output = this.attribute({
        schemaName: schemaName,
        schema: schema,
        attribute: attribute,
        data: data,
        removeUndefinedProperties: removeUndefinedProperties
      });
      return output;
    }
    /**
     * @param {string} schemaName
     * @param {Object} schema
     * @param {string} attribute
     * @param {Object} data
     * @param {boolean} removeUndefinedProperties
     * @throws {E_VALIDATOR_NOT_FOUND}
     * @throws {E_INVALID_COLLECTION}
     * @throws {E_SCHEMA_INVALID_ATTRIBUTE}
     * @throws {E_IN
     */

  }, {
    key: "attribute",
    value: function attribute(_ref7) {
      var schemaName = _ref7.schemaName,
          schema = _ref7.schema,
          _attribute = _ref7.attribute,
          data = _ref7.data,
          removeUndefinedProperties = _ref7.removeUndefinedProperties;
      var options = schema[_attribute];
      if ('default' in options && data === undefined) data = options.default; // if optional, and undefined or null, then we don't need to filter or validate

      if (options.optional === true && data === undefined) return data;
      if (options.nullable === true && data === null) return data;
      if (options.type === 'schema' && data === undefined) data = this.compose({
        schemaName: options.schema,
        dto: {},
        removeUndefinedProperties: removeUndefinedProperties
      }); // Filtering datasets if a filter has been defined for the type

      if (this.filters.has(options.type)) {
        var filter = this.filters.get(options.type);
        data = filter.filter(options, data);
      } // Validating type


      if (!this.validators.has(options.type)) throw new ValidatorNotFoundError("In schema: \"".concat(schemaName, "\", validator: \"").concat(options.type, "\" not found"));

      try {
        var validator = this.validators.get(options.type);

        if (options.collection) {
          if (!Array.isArray(data)) throw new InvalidCollectionError("In schema: \"".concat(schemaName, "\", invalid type: \"").concat(_typeof(data), "\", array expected"));
          if (options['collection-size-min'] && options['collection-size-min'] > data.length) throw new InvalidCollectionError("In schema: \"".concat(schemaName, " invalid collection size, expected min ").concat(options['collection-size-min'], ", received size ").concat(data.length));
          if (options['collection-size-max'] && options['collection-size-max'] > data.length) throw new InvalidCollectionError("In schema: \"".concat(schemaName, " invalid collection size, expected max ").concat(options['collection-size-max'], ", received size ").concat(data.length));

          var _iterator = _createForOfIteratorHelper(data),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              validator.valid(options, item);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          validator.valid(options, data);
        }
      } catch (error) {
        throw new InvalidAttributeError("Invalid attribute: \"".concat(_attribute, "\", schema: \"").concat(schemaName, "\", error: ").concat(error.message));
      }

      return data;
    }
    /**
     * The schema could have declared a meta field that requires a building process before used
     * The build process will alter the schema provided through an argument
     *
     * @param {Object} schema
     * @throws {E_SCHEMA_NOT_FOUND}
     * @return {Object} Same instance as provided through argument
     */

  }, {
    key: "buildSchema",
    value: function buildSchema(_ref8) {
      var schema = _ref8.schema;

      if ('@meta' in schema) {
        if ('extends' in schema['@meta'] || 'extend' in schema['@meta']) {
          var extendList = schema['@meta'].extends || schema['@meta'].extend;
          var extendedSchema = {};

          var _iterator2 = _createForOfIteratorHelper(Array.isArray(extendList) ? extendList : [extendList]),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var extendSchemaName = _step2.value;
              if (!this.schemas.has(extendSchemaName)) throw new SchemaNotFoundError("Schema: \"".concat(extendSchemaName, "\" not found"));
              var extend = this.buildSchema({
                schema: this.schemas.get(extendSchemaName)
              });
              extendedSchema = this.deepmerge.merge(extendedSchema, extend);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          schema = _objectSpread(_objectSpread({}, extendedSchema), schema);
        }

        if (schema['@meta'].immutable || schema['@meta'].immutable === undefined) // TODO makes sense if not exist to make the schema frozen?
          {
            delete schema['@meta'];
            Object.freeze(schema);
          } else {
          delete schema['@meta'];
        }
      }

      return schema;
    }
  }]);

  return SchemaComposer;
}();

module.exports = SchemaComposer;

/***/ }),

/***/ "./src/schema/composer/locator.js":
/*!****************************************!*\
  !*** ./src/schema/composer/locator.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Composer = __webpack_require__(/*! . */ "./src/schema/composer/index.js"),
    InvalidSchemaError = __webpack_require__(/*! ./error/invalid-schema */ "./src/schema/composer/error/invalid-schema.js"),
    FilterIsNotHonoringContractError = __webpack_require__(/*! ./error/filter-is-not-honoring-contract */ "./src/schema/composer/error/filter-is-not-honoring-contract.js"),
    ValidatorIsNotHonoringContractError = __webpack_require__(/*! ./error/validator-is-not-honoring-contract */ "./src/schema/composer/error/validator-is-not-honoring-contract.js");

var ComposerLocator = /*#__PURE__*/function () {
  function ComposerLocator(locator) {
    _classCallCheck(this, ComposerLocator);

    this.locator = locator;
  }

  _createClass(ComposerLocator, [{
    key: "getSchemas",
    value: function getSchemas(schemas) {
      var _this = this;

      var map = new Map();
      Object.entries(schemas).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            type = _ref2[0],
            service = _ref2[1];

        var instance = _this.locator.locate(service);

        if (_typeof(instance) !== 'object') throw new InvalidSchemaError("Schema \"".concat(type, "\" must be an object"));
        map.set(type, instance);
      });
      return map;
    }
  }, {
    key: "getValidators",
    value: function getValidators(validators) {
      var _this2 = this;

      var map = new Map();
      Object.entries(validators).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            type = _ref4[0],
            service = _ref4[1];

        var instance = _this2.locator.locate(service);

        if (typeof instance.valid !== 'function') throw new ValidatorIsNotHonoringContractError("Validator \"".concat(type, "\" not honoring contract"));
        map.set(type, instance);
      });
      return map;
    }
  }, {
    key: "getFilters",
    value: function getFilters(filters) {
      var _this3 = this;

      var map = new Map();
      Object.entries(filters).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            type = _ref6[0],
            service = _ref6[1];

        var instance = _this3.locator.locate(service);

        if (typeof instance.filter !== 'function') throw new FilterIsNotHonoringContractError("Filter \"".concat(type, "\" not honoring contract"));
        map.set(type, instance);
      });
      return map;
    }
  }, {
    key: "locate",
    value: function locate() {
      var configuration = this.locator.locate('core/configuration'),
          _configuration$find = configuration.find('schema'),
          _configuration$find$s = _configuration$find.schema,
          schema = _configuration$find$s === void 0 ? {} : _configuration$find$s,
          _configuration$find$f = _configuration$find.filter,
          filter = _configuration$find$f === void 0 ? {} : _configuration$find$f,
          _configuration$find$v = _configuration$find.validator,
          validator = _configuration$find$v === void 0 ? {} : _configuration$find$v;

      return new Composer({
        deepclone: this.locator.locate('core/deepmerge'),
        deepfreeze: this.locator.locate('core/deepclone'),
        deepmerge: this.locator.locate('core/deepfreeze'),
        filters: this.getFilters(filter),
        schemas: this.getSchemas(schema),
        validators: this.getValidators(validator)
      });
    }
  }]);

  return ComposerLocator;
}();

module.exports = ComposerLocator;

/***/ }),

/***/ "./src/schema/config.js":
/*!******************************!*\
  !*** ./src/schema/config.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var config = {
  core: {
    locator: {
      'schema/composer': __webpack_require__(/*! ./src/schema/composer/locator */ "./src/schema/composer/locator.js"),
      'schema/entity/button': __webpack_require__(/*! ./src/schema/entity/button */ "./src/schema/entity/button.js"),
      'schema/entity/checkbox-input-group': __webpack_require__(/*! ./src/schema/entity/checkbox-input-group */ "./src/schema/entity/checkbox-input-group.js"),
      'schema/entity/component': __webpack_require__(/*! ./src/schema/entity/component */ "./src/schema/entity/component.js"),
      'schema/entity/date-input-group': __webpack_require__(/*! ./src/schema/entity/date-input-group */ "./src/schema/entity/date-input-group.js"),
      'schema/entity/error': __webpack_require__(/*! ./src/schema/entity/error */ "./src/schema/entity/error.js"),
      'schema/entity/fieldset': __webpack_require__(/*! ./src/schema/entity/fieldset */ "./src/schema/entity/fieldset.js"),
      'schema/entity/form': __webpack_require__(/*! ./src/schema/entity/form */ "./src/schema/entity/form.js"),
      'schema/entity/graph': __webpack_require__(/*! ./src/schema/entity/graph */ "./src/schema/entity/graph.js"),
      'schema/entity/input-group': __webpack_require__(/*! ./src/schema/entity/input-group */ "./src/schema/entity/input-group.js"),
      'schema/entity/input': __webpack_require__(/*! ./src/schema/entity/input */ "./src/schema/entity/input.js"),
      'schema/entity/modal-action': __webpack_require__(/*! ./src/schema/entity/modal-action */ "./src/schema/entity/modal-action.js"),
      'schema/entity/modal': __webpack_require__(/*! ./src/schema/entity/modal */ "./src/schema/entity/modal.js"),
      'schema/entity/node': __webpack_require__(/*! ./src/schema/entity/node */ "./src/schema/entity/node.js"),
      'schema/entity/number-input-group': __webpack_require__(/*! ./src/schema/entity/text-input-group */ "./src/schema/entity/text-input-group.js"),
      'schema/entity/page-blocker': __webpack_require__(/*! ./src/schema/entity/page-blocker */ "./src/schema/entity/page-blocker.js"),
      'schema/entity/page': __webpack_require__(/*! ./src/schema/entity/page */ "./src/schema/entity/page.js"),
      'schema/entity/pagination': __webpack_require__(/*! ./src/schema/entity/pagination */ "./src/schema/entity/pagination.js"),
      'schema/entity/password-input-group': __webpack_require__(/*! ./src/schema/entity/password-input-group */ "./src/schema/entity/password-input-group.js"),
      'schema/entity/password-input': __webpack_require__(/*! ./src/schema/entity/password-input */ "./src/schema/entity/password-input.js"),
      'schema/entity/radio-button-input-group': __webpack_require__(/*! ./src/schema/entity/radio-button-input-group */ "./src/schema/entity/radio-button-input-group.js"),
      'schema/entity/radio-button-input': __webpack_require__(/*! ./src/schema/entity/radio-button-input */ "./src/schema/entity/radio-button-input.js"),
      'schema/entity/radio-fieldset': __webpack_require__(/*! ./src/schema/entity/radio-fieldset */ "./src/schema/entity/radio-fieldset.js"),
      'schema/entity/select-input-group': __webpack_require__(/*! ./src/schema/entity/select-input-group */ "./src/schema/entity/select-input-group.js"),
      'schema/entity/select-input-item': __webpack_require__(/*! ./src/schema/entity/select-input-item */ "./src/schema/entity/select-input-item.js"),
      'schema/entity/table': __webpack_require__(/*! ./src/schema/entity/table */ "./src/schema/entity/table.js"),
      'schema/entity/text-input-group': __webpack_require__(/*! ./src/schema/entity/text-input-group */ "./src/schema/entity/text-input-group.js"),
      'schema/entity/textarea-input-group': __webpack_require__(/*! ./src/schema/entity/textarea-input-group */ "./src/schema/entity/textarea-input-group.js"),
      'schema/entity/toggeable-fieldset': __webpack_require__(/*! ./src/schema/entity/toggeable-fieldset */ "./src/schema/entity/toggeable-fieldset.js"),
      'schema/entity/tree-node': __webpack_require__(/*! ./src/schema/entity/tree-node */ "./src/schema/entity/tree-node.js"),
      'schema/entity/tree': __webpack_require__(/*! ./src/schema/entity/tree */ "./src/schema/entity/tree.js"),
      'schema/filter/boolean': __webpack_require__(/*! ./src/schema/filter/boolean/locator */ "./src/schema/filter/boolean/locator.js"),
      'schema/filter/csv': __webpack_require__(/*! ./src/schema/filter/csv/locator */ "./src/schema/filter/csv/locator.js"),
      'schema/filter/decimal': __webpack_require__(/*! ./src/schema/filter/decimal/locator */ "./src/schema/filter/decimal/locator.js"),
      'schema/filter/integer': __webpack_require__(/*! ./src/schema/filter/integer/locator */ "./src/schema/filter/integer/locator.js"),
      'schema/filter/json': __webpack_require__(/*! ./src/schema/filter/json/locator */ "./src/schema/filter/json/locator.js"),
      'schema/filter/schema': __webpack_require__(/*! ./src/schema/filter/schema/locator */ "./src/schema/filter/schema/locator.js"),
      'schema/filter/string': __webpack_require__(/*! ./src/schema/filter/string/locator */ "./src/schema/filter/string/locator.js"),
      'schema/filter/timestamp': __webpack_require__(/*! ./src/schema/filter/timestamp/locator */ "./src/schema/filter/timestamp/locator.js"),
      'schema/validator/boolean': __webpack_require__(/*! ./src/schema/validator/boolean/locator */ "./src/schema/validator/boolean/locator.js"),
      'schema/validator/csv': __webpack_require__(/*! ./src/schema/validator/csv/locator */ "./src/schema/validator/csv/locator.js"),
      'schema/validator/decimal': __webpack_require__(/*! ./src/schema/validator/decimal/locator */ "./src/schema/validator/decimal/locator.js"),
      'schema/validator/integer': __webpack_require__(/*! ./src/schema/validator/integer/locator */ "./src/schema/validator/integer/locator.js"),
      'schema/validator/json': __webpack_require__(/*! ./src/schema/validator/json/locator */ "./src/schema/validator/json/locator.js"),
      'schema/validator/regexp': __webpack_require__(/*! ./src/schema/validator/regexp/locator */ "./src/schema/validator/regexp/locator.js"),
      'schema/validator/schema': __webpack_require__(/*! ./src/schema/validator/schema/locator */ "./src/schema/validator/schema/locator.js"),
      'schema/validator/string': __webpack_require__(/*! ./src/schema/validator/string/locator */ "./src/schema/validator/string/locator.js"),
      'schema/validator/timestamp': __webpack_require__(/*! ./src/schema/validator/timestamp/locator */ "./src/schema/validator/timestamp/locator.js"),
      'schema/value/binding': __webpack_require__(/*! ./src/schema/value/binding */ "./src/schema/value/binding.js"),
      'schema/value/dataset': __webpack_require__(/*! ./src/schema/value/dataset */ "./src/schema/value/dataset.js"),
      'schema/value/edge': __webpack_require__(/*! ./src/schema/value/edge */ "./src/schema/value/edge.js"),
      'schema/value/error': __webpack_require__(/*! ./src/schema/value/error */ "./src/schema/value/error.js"),
      'schema/value/listener': __webpack_require__(/*! ./src/schema/value/listener */ "./src/schema/value/listener.js"),
      'schema/value/partial': __webpack_require__(/*! ./src/schema/value/partial */ "./src/schema/value/partial.js")
    }
  },
  schema: {
    schema: {
      'entity/button': 'schema/entity/button',
      'entity/checkbox-input-group': 'schema/entity/checkbox-input-group',
      'entity/component': 'schema/entity/component',
      'entity/date-input-group': 'schema/entity/date-input-group',
      'entity/error': 'schema/entity/error',
      'entity/fieldset': 'schema/entity/fieldset',
      'entity/form': 'schema/entity/form',
      'entity/graph': 'schema/entity/graph',
      'entity/input-group': 'schema/entity/input-group',
      'entity/input': 'schema/entity/input',
      'entity/modal-action': 'schema/entity/modal-action',
      'entity/modal': 'schema/entity/modal',
      'entity/node': 'schema/entity/node',
      'entity/number-input-group': 'schema/entity/number-input-group',
      'entity/page-blocker': 'schema/entity/page-blocker',
      'entity/page': 'schema/entity/page',
      'entity/pagination': 'schema/entity/pagination',
      'entity/password-input-group': 'schema/entity/password-input-group',
      'entity/password-input': 'schema/entity/password-input',
      'entity/radio-button-input-group': 'schema/entity/radio-button-input-group',
      'entity/radio-button-input': 'schema/entity/radio-button-input',
      'entity/radio-fieldset': 'schema/entity/radio-fieldset',
      'entity/select-input-group': 'schema/entity/select-input-group',
      'entity/select-input-item': 'schema/entity/select-input-item',
      'entity/table': 'schema/entity/table',
      'entity/text-input-group': 'schema/entity/text-input-group',
      'entity/textarea-input-group': 'schema/entity/textarea-input-group',
      'entity/toggeable-fieldset': 'schema/entity/toggeable-fieldset',
      'entity/tree-node': 'schema/entity/tree-node',
      'entity/tree': 'schema/entity/tree',
      'value/binding': 'schema/value/binding',
      'value/dataset': 'schema/value/dataset',
      'value/edge': 'schema/value/edge',
      'value/error': 'schema/value/error',
      'value/listener': 'schema/value/listener',
      'value/partial': 'schema/value/partial'
    },
    filter: {
      'boolean': 'schema/filter/boolean',
      'csv': 'schema/filter/csv',
      'decimal': 'schema/filter/decimal',
      'integer': 'schema/filter/integer',
      'json': 'schema/filter/json',
      'schema': 'schema/filter/schema',
      'string': 'schema/filter/string',
      'timestamp': 'schema/filter/timestamp'
    },
    validator: {
      'boolean': 'schema/validator/boolean',
      'csv': 'schema/validator/csv',
      'decimal': 'schema/validator/decimal',
      'integer': 'schema/validator/integer',
      'json': 'schema/validator/json',
      'schema': 'schema/validator/schema',
      'string': 'schema/validator/string',
      'regexp': 'schema/validator/regexp',
      'timestamp': 'schema/validator/timestamp'
    }
  }
};
module.exports = config;

/***/ }),

/***/ "./src/schema/entity/button.js":
/*!*************************************!*\
  !*** ./src/schema/entity/button.js ***!
  \*************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/component'
  },
  text: {
    type: 'string',
    'not-empty': true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/checkbox-input-group.js":
/*!***************************************************!*\
  !*** ./src/schema/entity/checkbox-input-group.js ***!
  \***************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/input-group'
  },
  value: {
    type: 'boolean',
    default: false
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/component.js":
/*!****************************************!*\
  !*** ./src/schema/entity/component.js ***!
  \****************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/tree-node'
  },
  template: {
    type: 'string',
    'not-empty': true
  },
  schema: {
    type: 'string',
    'not-empty': true
  },
  renderonchange: {
    type: 'boolean',
    default: true
  },
  classes: {
    optional: true,
    type: 'string',
    'not-empty': true
  },
  bindings: // TODO
  {
    type: 'schema',
    collection: true,
    default: [],
    schema: 'value/binding'
  },
  listeners: {
    type: 'schema',
    collection: true,
    default: [],
    schema: 'value/listener'
  },
  options: {
    type: 'json',
    optional: true
  },
  datasets: {
    type: 'schema',
    schema: 'value/dataset',
    collection: true,
    default: []
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/date-input-group.js":
/*!***********************************************!*\
  !*** ./src/schema/entity/date-input-group.js ***!
  \***********************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/input-group'
  },
  autocomplete: {
    type: 'boolean',
    default: false
  },
  max: {
    type: 'string',
    optional: true
  },
  min: {
    type: 'string',
    optional: true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/error.js":
/*!************************************!*\
  !*** ./src/schema/entity/error.js ***!
  \************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/component'
  },
  code: {
    type: 'string',
    optional: true,
    'not-empty': true
  },
  message: {
    type: 'string',
    optional: true,
    'not-empty': true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/fieldset.js":
/*!***************************************!*\
  !*** ./src/schema/entity/fieldset.js ***!
  \***************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/component'
  },
  legend: {
    type: 'string',
    optional: true
  },
  disabled: {
    type: 'boolean',
    default: false
  },
  formId: {
    type: 'string',
    'not-empty': true,
    optional: true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/form.js":
/*!***********************************!*\
  !*** ./src/schema/entity/form.js ***!
  \***********************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/component'
  },
  title: {
    type: 'string',
    optional: true
  },
  isValid: {
    type: 'boolean',
    default: false
  },
  data: {
    type: 'json',
    default: {}
  },
  disabled: {
    type: 'boolean',
    default: false
  } // inputs :
  // {
  //   type       : 'schema',
  //   schema     : 'value/reference',
  //   collection : true,
  //   default    : []
  // },
  // fieldsets :
  // {
  //   type       : 'schema',
  //   schema     : 'value/reference',
  //   collection : true,
  //   default    : []
  // }

};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/graph.js":
/*!************************************!*\
  !*** ./src/schema/entity/graph.js ***!
  \************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  id: {
    type: 'string',
    'not-empty': false
  },
  isDirected: {
    type: 'boolean',
    default: false
  },
  nodes: {
    type: 'schema',
    schema: 'entity/node',
    collection: true,
    default: []
  },
  edges: {
    type: 'schema',
    schema: 'value/edge',
    collection: true,
    default: []
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/input-group.js":
/*!******************************************!*\
  !*** ./src/schema/entity/input-group.js ***!
  \******************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/input'
  },
  label: {
    type: 'string',
    optional: true,
    'not-empty': true
  },
  error: {
    type: 'string',
    optional: true,
    'not-empty': true
  },
  big: {
    type: 'boolean',
    default: false
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/input.js":
/*!************************************!*\
  !*** ./src/schema/entity/input.js ***!
  \************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/component'
  },
  attribute: {
    type: 'string',
    'not-empty': true,
    optional: true
  },
  title: {
    type: 'string',
    'not-empty': true,
    optional: true
  },
  value: {
    type: 'json',
    optional: true
  },
  required: {
    type: 'boolean',
    default: true
  },
  disabled: {
    type: 'boolean',
    default: false
  },
  readonly: {
    type: 'boolean',
    default: false
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/modal-action.js":
/*!*******************************************!*\
  !*** ./src/schema/entity/modal-action.js ***!
  \*******************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/node'
  },
  submit: {
    type: 'boolean',
    default: false
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/modal.js":
/*!************************************!*\
  !*** ./src/schema/entity/modal.js ***!
  \************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/component'
  },
  headerText: {
    type: 'string',
    optional: true
  },
  formId: {
    type: 'string',
    'not-empty': true,
    optional: true
  },
  isOpen: {
    type: 'boolean',
    default: false
  },
  actions: {
    type: 'schema',
    schema: 'entity/modal-action',
    collection: true,
    default: []
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/node.js":
/*!***********************************!*\
  !*** ./src/schema/entity/node.js ***!
  \***********************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  id: {
    type: 'string',
    'not-empty': true
  },
  name: {
    type: 'string',
    'not-empty': true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/page-blocker.js":
/*!*******************************************!*\
  !*** ./src/schema/entity/page-blocker.js ***!
  \*******************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/component'
  },
  isBlocked: {
    type: 'boolean',
    default: false
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/page.js":
/*!***********************************!*\
  !*** ./src/schema/entity/page.js ***!
  \***********************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/component'
  },
  title: {
    type: 'string',
    'not-empty': true
  },
  lang: {
    type: 'string',
    'not-empty': true
  },
  script: {
    type: 'string',
    collection: true,
    default: []
  },
  css: {
    type: 'string',
    collection: true,
    default: []
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/pagination.js":
/*!*****************************************!*\
  !*** ./src/schema/entity/pagination.js ***!
  \*****************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/component'
  },
  totalElements: {
    type: 'integer',
    min: 0,
    default: 0
  },
  totalPages: {
    type: 'integer',
    min: 0,
    default: 0
  },
  limit: {
    type: 'integer',
    min: 1,
    default: 1
  },
  offset: {
    type: 'integer',
    min: 2,
    default: 2
  },
  selectedPage: {
    type: 'integer',
    min: 1,
    default: 1
  },
  firstPage: {
    type: 'integer',
    min: 1,
    max: 1,
    default: 1
  },
  pages: {
    type: 'integer',
    collection: true,
    default: []
  },
  lastPage: {
    type: 'integer',
    min: 1
  },
  leftOverflow: {
    type: 'boolean',
    default: false
  },
  rightOverflow: {
    type: 'boolean',
    default: false
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/password-input-group.js":
/*!***************************************************!*\
  !*** ./src/schema/entity/password-input-group.js ***!
  \***************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/input-group'
  },
  value: {
    type: 'string',
    optional: true
  },
  autocomplete: {
    type: 'boolean',
    default: false
  },
  maxLength: {
    type: 'integer',
    optional: true
  },
  placeholder: {
    type: 'string',
    optional: true
  },
  pattern: {
    type: 'string',
    optional: true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/password-input.js":
/*!*********************************************!*\
  !*** ./src/schema/entity/password-input.js ***!
  \*********************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/input'
  },
  placeholder: {
    type: 'string',
    optional: true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/radio-button-input-group.js":
/*!*******************************************************!*\
  !*** ./src/schema/entity/radio-button-input-group.js ***!
  \*******************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/input-group'
  },
  value: {
    type: 'string',
    optional: true
  },
  buttons: {
    type: 'schema',
    schema: 'entity/radio-button-input',
    collection: true,
    default: []
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/radio-button-input.js":
/*!*************************************************!*\
  !*** ./src/schema/entity/radio-button-input.js ***!
  \*************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/node'
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/radio-fieldset.js":
/*!*********************************************!*\
  !*** ./src/schema/entity/radio-fieldset.js ***!
  \*********************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/component'
  },
  fieldsets: {
    type: 'string',
    'not-empty': true,
    collection: true,
    default: []
  },
  selectedFieldset: {
    type: 'string',
    'not-empty': true
  },
  defaultFieldset: {
    type: 'string',
    'not-empty': true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/select-input-group.js":
/*!*************************************************!*\
  !*** ./src/schema/entity/select-input-group.js ***!
  \*************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/input-group'
  },
  autocomplete: {
    type: 'boolean',
    default: false
  },
  size: {
    type: 'integer',
    min: 1,
    optional: true
  },
  multiple: {
    type: 'boolean',
    default: false
  },
  items: {
    type: 'schema',
    schema: 'entity/select-input-item',
    collection: true,
    default: []
  },
  value: {
    type: 'string',
    optional: true,
    collection: true,
    default: []
  },
  placeholder: {
    type: 'string',
    optional: true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/select-input-item.js":
/*!************************************************!*\
  !*** ./src/schema/entity/select-input-item.js ***!
  \************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/node'
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/table.js":
/*!************************************!*\
  !*** ./src/schema/entity/table.js ***!
  \************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/component'
  },
  hasActions: {
    type: 'boolean',
    default: false
  },
  formatted: {
    type: 'boolean',
    default: false
  },
  condensed: {
    type: 'boolean',
    default: false
  },
  isExpandable: {
    type: 'boolean',
    default: false
  },
  showHeaders: {
    type: 'boolean',
    default: true
  },
  panelColspan: {
    type: 'integer',
    optional: true
  },
  headers: {
    type: 'schema',
    schema: 'value/partial',
    collection: true,
    default: []
  },
  rows: {
    type: 'json',
    collection: true,
    default: []
  },
  actions: {
    type: 'schema',
    schema: 'value/partial',
    collection: true,
    default: []
  },
  panels: {
    type: 'schema',
    schema: 'entity/component',
    collection: true,
    default: []
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/text-input-group.js":
/*!***********************************************!*\
  !*** ./src/schema/entity/text-input-group.js ***!
  \***********************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/input-group'
  },
  value: {
    type: 'string',
    optional: true
  },
  autocomplete: {
    type: 'boolean',
    default: false
  },
  maxLength: {
    type: 'integer',
    optional: true
  },
  placeholder: {
    type: 'string',
    optional: true
  },
  pattern: {
    type: 'string',
    optional: true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/textarea-input-group.js":
/*!***************************************************!*\
  !*** ./src/schema/entity/textarea-input-group.js ***!
  \***************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/input-group'
  },
  value: {
    type: 'string',
    optional: true
  },
  maxLength: {
    type: 'integer',
    optional: true
  },
  placeholder: {
    type: 'string',
    optional: true
  },
  rows: {
    type: 'integer',
    optional: true
  },
  columns: {
    type: 'integer',
    optional: true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/toggeable-fieldset.js":
/*!*************************************************!*\
  !*** ./src/schema/entity/toggeable-fieldset.js ***!
  \*************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/component'
  },
  showWhenToggled: {
    type: 'boolean',
    default: true
  },
  isToggled: {
    type: 'boolean',
    default: false
  },
  isVisible: {
    type: 'boolean',
    default: false
  },
  toggle: {
    type: 'schema',
    schema: 'entity/checkbox-input-group'
  },
  label: {
    type: 'string',
    optional: true,
    'not-empty': true
  },
  formId: {
    type: 'string',
    'not-empty': true,
    optional: true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/tree-node.js":
/*!****************************************!*\
  !*** ./src/schema/entity/tree-node.js ***!
  \****************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    extends: 'entity/node'
  },
  parentId: {
    type: 'string',
    'not-empty': true,
    optional: true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/entity/tree.js":
/*!***********************************!*\
  !*** ./src/schema/entity/tree.js ***!
  \***********************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  '@meta': {
    immutable: false,
    extends: 'entity/graph'
  },
  isDirected: {
    type: 'boolean',
    enum: [true],
    default: true
  },
  root: {
    type: 'string',
    optional: true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/filter/boolean/index.js":
/*!********************************************!*\
  !*** ./src/schema/filter/boolean/index.js ***!
  \********************************************/
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterBoolean = /*#__PURE__*/function () {
  function SchemaFilterBoolean() {
    _classCallCheck(this, SchemaFilterBoolean);
  }

  _createClass(SchemaFilterBoolean, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(data) : this.filterSingle(data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(data) {
      if (!Array.isArray(data)) return data;
      var collection = [];

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var filtered = this.filterSingle(item);
          collection.push(filtered);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(data) {
      if (typeof data === 'string') {
        if (data.toLowerCase() === 'true') return true;
        if (data.toLowerCase() === 'false') return false;
      }

      return data;
    }
  }]);

  return SchemaFilterBoolean;
}();

module.exports = SchemaFilterBoolean;

/***/ }),

/***/ "./src/schema/filter/boolean/locator.js":
/*!**********************************************!*\
  !*** ./src/schema/filter/boolean/locator.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterBoolean = __webpack_require__(/*! . */ "./src/schema/filter/boolean/index.js");

var SchemaFilterBooleanLocator = /*#__PURE__*/function () {
  function SchemaFilterBooleanLocator() {
    _classCallCheck(this, SchemaFilterBooleanLocator);
  }

  _createClass(SchemaFilterBooleanLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterBoolean();
    }
  }]);

  return SchemaFilterBooleanLocator;
}();

module.exports = SchemaFilterBooleanLocator;

/***/ }),

/***/ "./src/schema/filter/csv/index.js":
/*!****************************************!*\
  !*** ./src/schema/filter/csv/index.js ***!
  \****************************************/
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterCsv = /*#__PURE__*/function () {
  function SchemaFilterCsv() {
    _classCallCheck(this, SchemaFilterCsv);
  }

  _createClass(SchemaFilterCsv, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(options, data) : this.filterSingle(options, data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(options, data) {
      if (!Array.isArray(data)) return data;
      var collection = [];

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var filtered = this.filterSingle(options, item);
          collection.push(filtered);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(options, data) {
      if (typeof data === 'string') {
        if (options.uppercase) data = data.toUpperCase();
        if (options.lowercase) data = data.toLowerCase();
        data = data.split(',');
      }

      return data;
    }
  }]);

  return SchemaFilterCsv;
}();

module.exports = SchemaFilterCsv;

/***/ }),

/***/ "./src/schema/filter/csv/locator.js":
/*!******************************************!*\
  !*** ./src/schema/filter/csv/locator.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterCsv = __webpack_require__(/*! . */ "./src/schema/filter/csv/index.js");

var SchemaFilterCsvLocator = /*#__PURE__*/function () {
  function SchemaFilterCsvLocator() {
    _classCallCheck(this, SchemaFilterCsvLocator);
  }

  _createClass(SchemaFilterCsvLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterCsv();
    }
  }]);

  return SchemaFilterCsvLocator;
}();

module.exports = SchemaFilterCsvLocator;

/***/ }),

/***/ "./src/schema/filter/decimal/index.js":
/*!********************************************!*\
  !*** ./src/schema/filter/decimal/index.js ***!
  \********************************************/
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterDecimal = /*#__PURE__*/function () {
  function SchemaFilterDecimal() {
    _classCallCheck(this, SchemaFilterDecimal);
  }

  _createClass(SchemaFilterDecimal, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(data) : this.filterSingle(data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(data) {
      if (!Array.isArray(data)) return data;
      var collection = [];

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var filtered = this.filterSingle(item);
          collection.push(filtered);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(data) {
      if (isNaN(data) === false) return +data;
      return data;
    }
  }]);

  return SchemaFilterDecimal;
}();

module.exports = SchemaFilterDecimal;

/***/ }),

/***/ "./src/schema/filter/decimal/locator.js":
/*!**********************************************!*\
  !*** ./src/schema/filter/decimal/locator.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterDecimal = __webpack_require__(/*! . */ "./src/schema/filter/decimal/index.js");

var SchemaFilterDecimalLocator = /*#__PURE__*/function () {
  function SchemaFilterDecimalLocator() {
    _classCallCheck(this, SchemaFilterDecimalLocator);
  }

  _createClass(SchemaFilterDecimalLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterDecimal();
    }
  }]);

  return SchemaFilterDecimalLocator;
}();

module.exports = SchemaFilterDecimalLocator;

/***/ }),

/***/ "./src/schema/filter/integer/index.js":
/*!********************************************!*\
  !*** ./src/schema/filter/integer/index.js ***!
  \********************************************/
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterInteger = /*#__PURE__*/function () {
  function SchemaFilterInteger() {
    _classCallCheck(this, SchemaFilterInteger);
  }

  _createClass(SchemaFilterInteger, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(data) : this.filterSingle(data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(data) {
      if (!Array.isArray(data)) return data;
      var collection = [];

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var filtered = this.filterSingle(item);
          collection.push(filtered);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(data) {
      if (isNaN(data) === false) return +data;
      return data;
    }
  }]);

  return SchemaFilterInteger;
}();

module.exports = SchemaFilterInteger;

/***/ }),

/***/ "./src/schema/filter/integer/locator.js":
/*!**********************************************!*\
  !*** ./src/schema/filter/integer/locator.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterInteger = __webpack_require__(/*! . */ "./src/schema/filter/integer/index.js");

var SchemaFilterIntegerLocator = /*#__PURE__*/function () {
  function SchemaFilterIntegerLocator() {
    _classCallCheck(this, SchemaFilterIntegerLocator);
  }

  _createClass(SchemaFilterIntegerLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterInteger();
    }
  }]);

  return SchemaFilterIntegerLocator;
}();

module.exports = SchemaFilterIntegerLocator;

/***/ }),

/***/ "./src/schema/filter/json/index.js":
/*!*****************************************!*\
  !*** ./src/schema/filter/json/index.js ***!
  \*****************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterJson = /*#__PURE__*/function () {
  function SchemaFilterJson() {
    _classCallCheck(this, SchemaFilterJson);
  }

  _createClass(SchemaFilterJson, [{
    key: "filter",
    value: function filter(options, data) {
      try {
        return options.stringified ? JSON.stringify(data, null, options.indentation) : data;
      } catch (error) {
        // it's not up to the filter to validate
        // if we can't filter the data, then we simply pass the data forward
        return data;
      }
    }
  }]);

  return SchemaFilterJson;
}();

module.exports = SchemaFilterJson;

/***/ }),

/***/ "./src/schema/filter/json/locator.js":
/*!*******************************************!*\
  !*** ./src/schema/filter/json/locator.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterJson = __webpack_require__(/*! . */ "./src/schema/filter/json/index.js");

var SchemaFilterJsonLocator = /*#__PURE__*/function () {
  function SchemaFilterJsonLocator() {
    _classCallCheck(this, SchemaFilterJsonLocator);
  }

  _createClass(SchemaFilterJsonLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterJson();
    }
  }]);

  return SchemaFilterJsonLocator;
}();

module.exports = SchemaFilterJsonLocator;

/***/ }),

/***/ "./src/schema/filter/schema/error/missing-schema-definition.js":
/*!*********************************************************************!*\
  !*** ./src/schema/filter/schema/error/missing-schema-definition.js ***!
  \*********************************************************************/
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

/**
 * @extends {Error}
 */
var MissingSchemaDefinitionError = /*#__PURE__*/function (_Error) {
  _inherits(MissingSchemaDefinitionError, _Error);

  var _super = _createSuper(MissingSchemaDefinitionError);

  function MissingSchemaDefinitionError() {
    var _this;

    _classCallCheck(this, MissingSchemaDefinitionError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_MISSING_SCHEMA_DEFINITION';
    return _this;
  }

  return MissingSchemaDefinitionError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = MissingSchemaDefinitionError;

/***/ }),

/***/ "./src/schema/filter/schema/index.js":
/*!*******************************************!*\
  !*** ./src/schema/filter/schema/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MissingSchemaDefinitionError = __webpack_require__(/*! ./error/missing-schema-definition */ "./src/schema/filter/schema/error/missing-schema-definition.js");
/**
 * @implements {SchemaFilter}
 */


var SchemaFilterSchema = /*#__PURE__*/function () {
  function SchemaFilterSchema(locator) {
    _classCallCheck(this, SchemaFilterSchema);

    this.locator = locator;
  }

  _createClass(SchemaFilterSchema, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(options, data) : this.filterSingle(options, data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(options, data) {
      if (!Array.isArray(data)) return data;
      var collection = [];

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var filtered = this.filterSingle(options, item);
          collection.push(filtered);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(options, data) {
      if (typeof options.schema === 'string') {
        var composer = this.locator.locate('core/schema/composer');
        return options.trait ? composer.trait(options.schema, options.trait, data) : composer.compose(options.schema, data);
      } else {
        throw new MissingSchemaDefinitionError('Expected the attribute "schema" to declare what type of schema ');
      }
    }
  }]);

  return SchemaFilterSchema;
}();

module.exports = SchemaFilterSchema;

/***/ }),

/***/ "./src/schema/filter/schema/locator.js":
/*!*********************************************!*\
  !*** ./src/schema/filter/schema/locator.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterSchema = __webpack_require__(/*! . */ "./src/schema/filter/schema/index.js");

var SchemaFilterSchemaLocator = /*#__PURE__*/function () {
  function SchemaFilterSchemaLocator(locator) {
    _classCallCheck(this, SchemaFilterSchemaLocator);

    this.locator = locator;
  }

  _createClass(SchemaFilterSchemaLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterSchema(this.locator);
    }
  }]);

  return SchemaFilterSchemaLocator;
}();

module.exports = SchemaFilterSchemaLocator;

/***/ }),

/***/ "./src/schema/filter/string/index.js":
/*!*******************************************!*\
  !*** ./src/schema/filter/string/index.js ***!
  \*******************************************/
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterString = /*#__PURE__*/function () {
  function SchemaFilterString() {
    _classCallCheck(this, SchemaFilterString);
  }

  _createClass(SchemaFilterString, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(options, data) : this.filterSingle(options, data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(options, data) {
      if (!Array.isArray(data)) return data;
      var collection = [];

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var filtered = this.filterSingle(options, item);
          collection.push(filtered);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(options, data) {
      if (typeof data === 'number') data = "".concat(data);
      if (typeof data === 'boolean') data = "".concat(data);

      if (typeof data === 'string') {
        if (options.uppercase) data = data.toUpperCase();
        if (options.lowercase) data = data.toLowerCase();
      }

      return data;
    }
  }]);

  return SchemaFilterString;
}();

module.exports = SchemaFilterString;

/***/ }),

/***/ "./src/schema/filter/string/locator.js":
/*!*********************************************!*\
  !*** ./src/schema/filter/string/locator.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterString = __webpack_require__(/*! . */ "./src/schema/filter/string/index.js");

var SchemaFilterStringLocator = /*#__PURE__*/function () {
  function SchemaFilterStringLocator() {
    _classCallCheck(this, SchemaFilterStringLocator);
  }

  _createClass(SchemaFilterStringLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterString();
    }
  }]);

  return SchemaFilterStringLocator;
}();

module.exports = SchemaFilterStringLocator;

/***/ }),

/***/ "./src/schema/filter/timestamp/index.js":
/*!**********************************************!*\
  !*** ./src/schema/filter/timestamp/index.js ***!
  \**********************************************/
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterTimestamp = /*#__PURE__*/function () {
  function SchemaFilterTimestamp() {
    _classCallCheck(this, SchemaFilterTimestamp);
  }

  _createClass(SchemaFilterTimestamp, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(options, data) : this.filterSingle(options, data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(options, data) {
      if (!Array.isArray(data)) return data;
      var collection = [];

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var filtered = this.filterSingle(options, item);
          collection.push(filtered);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(options, data) {
      var intData = parseInt(data);
      if (intData == data) data = intData;
      if (options.utc) data = new Date(data).toUTCString();
      if (options.json) data = new Date(data).toJSON();
      return data;
    }
  }]);

  return SchemaFilterTimestamp;
}();

module.exports = SchemaFilterTimestamp;

/***/ }),

/***/ "./src/schema/filter/timestamp/locator.js":
/*!************************************************!*\
  !*** ./src/schema/filter/timestamp/locator.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterTimestamp = __webpack_require__(/*! . */ "./src/schema/filter/timestamp/index.js");

var SchemaFilterTimestampLocator = /*#__PURE__*/function () {
  function SchemaFilterTimestampLocator() {
    _classCallCheck(this, SchemaFilterTimestampLocator);
  }

  _createClass(SchemaFilterTimestampLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterTimestamp();
    }
  }]);

  return SchemaFilterTimestampLocator;
}();

module.exports = SchemaFilterTimestampLocator;

/***/ }),

/***/ "./src/schema/validator/boolean/error/invalid.js":
/*!*******************************************************!*\
  !*** ./src/schema/validator/boolean/error/invalid.js ***!
  \*******************************************************/
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

/**
 * @extends {Error}
 */
var InvalidBooleanError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidBooleanError, _Error);

  var _super = _createSuper(InvalidBooleanError);

  function InvalidBooleanError() {
    var _this;

    _classCallCheck(this, InvalidBooleanError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_INVALID_BOOLEAN';
    return _this;
  }

  return InvalidBooleanError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = InvalidBooleanError;

/***/ }),

/***/ "./src/schema/validator/boolean/index.js":
/*!***********************************************!*\
  !*** ./src/schema/validator/boolean/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidBooleanError = __webpack_require__(/*! ./error/invalid */ "./src/schema/validator/boolean/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorBoolean = /*#__PURE__*/function () {
  function SchemaValidatorBoolean() {
    _classCallCheck(this, SchemaValidatorBoolean);
  }

  _createClass(SchemaValidatorBoolean, [{
    key: "valid",
    value: function valid(options, data) {
      if (typeof data !== 'boolean') {
        var msg = "Invalid type: \"".concat(_typeof(data), "\", boolean expected");
        throw new InvalidBooleanError(msg);
      }
    }
  }]);

  return SchemaValidatorBoolean;
}();

module.exports = SchemaValidatorBoolean;

/***/ }),

/***/ "./src/schema/validator/boolean/locator.js":
/*!*************************************************!*\
  !*** ./src/schema/validator/boolean/locator.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorBoolean = __webpack_require__(/*! . */ "./src/schema/validator/boolean/index.js");

var SchemaValidatorBooleanLocator = /*#__PURE__*/function () {
  function SchemaValidatorBooleanLocator() {
    _classCallCheck(this, SchemaValidatorBooleanLocator);
  }

  _createClass(SchemaValidatorBooleanLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorBoolean();
    }
  }]);

  return SchemaValidatorBooleanLocator;
}();

module.exports = SchemaValidatorBooleanLocator;

/***/ }),

/***/ "./src/schema/validator/csv/error/invalid.js":
/*!***************************************************!*\
  !*** ./src/schema/validator/csv/error/invalid.js ***!
  \***************************************************/
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

/**
 * @extends {Error}
 */
var InvalidCsvError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidCsvError, _Error);

  var _super = _createSuper(InvalidCsvError);

  function InvalidCsvError() {
    var _this;

    _classCallCheck(this, InvalidCsvError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_INVALID_CSV';
    return _this;
  }

  return InvalidCsvError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = InvalidCsvError;

/***/ }),

/***/ "./src/schema/validator/csv/index.js":
/*!*******************************************!*\
  !*** ./src/schema/validator/csv/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidCsvError = __webpack_require__(/*! ./error/invalid */ "./src/schema/validator/csv/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorCsv = /*#__PURE__*/function () {
  function SchemaValidatorCsv() {
    _classCallCheck(this, SchemaValidatorCsv);
  }

  _createClass(SchemaValidatorCsv, [{
    key: "valid",
    value: function valid(options, data) {
      if (Array.isArray(data) === false) throw new InvalidCsvError("Invalid type: \"".concat(_typeof(data), "\", csv (comma seperated values) string expected"));
      if (options['not-empty'] && !data.length) throw new InvalidCsvError("Must not be empty");
      if ('min' in options && data.length < options.min) throw new InvalidCsvError("Length of values must be minimum: \"".concat(options.min, "\" long"));
      if ('max' in options && data.length > options.max) throw new InvalidCsvError("Length of values can't be more then: \"".concat(options.max, "\" long"));
      if (options.enum && !data.every(function (value) {
        return options.enum.includes(value);
      })) throw new InvalidCsvError("Expected all values of the csv to be one of the enumeral values: \"".concat(options.enum, "\""));
      if (options.uppercase && !data.every(function (value) {
        return value === data.toUpperCase();
      })) throw new InvalidCsvError("Upper case string expected");
      if (options.lowercase && !data.every(function (value) {
        return value === data.toLowerCase();
      })) throw new InvalidCsvError("Lower case string expected");
    }
  }]);

  return SchemaValidatorCsv;
}();

module.exports = SchemaValidatorCsv;

/***/ }),

/***/ "./src/schema/validator/csv/locator.js":
/*!*********************************************!*\
  !*** ./src/schema/validator/csv/locator.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorString = __webpack_require__(/*! . */ "./src/schema/validator/csv/index.js");

var SchemaValidatorStringLocator = /*#__PURE__*/function () {
  function SchemaValidatorStringLocator() {
    _classCallCheck(this, SchemaValidatorStringLocator);
  }

  _createClass(SchemaValidatorStringLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorString();
    }
  }]);

  return SchemaValidatorStringLocator;
}();

module.exports = SchemaValidatorStringLocator;

/***/ }),

/***/ "./src/schema/validator/decimal/error/invalid.js":
/*!*******************************************************!*\
  !*** ./src/schema/validator/decimal/error/invalid.js ***!
  \*******************************************************/
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

/**
 * @extends {Error}
 */
var InvalidDecimalError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidDecimalError, _Error);

  var _super = _createSuper(InvalidDecimalError);

  function InvalidDecimalError() {
    var _this;

    _classCallCheck(this, InvalidDecimalError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_INVALID_DECIMAL';
    return _this;
  }

  return InvalidDecimalError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = InvalidDecimalError;

/***/ }),

/***/ "./src/schema/validator/decimal/index.js":
/*!***********************************************!*\
  !*** ./src/schema/validator/decimal/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidDecimalError = __webpack_require__(/*! ./error/invalid */ "./src/schema/validator/decimal/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorDecimal = /*#__PURE__*/function () {
  function SchemaValidatorDecimal() {
    _classCallCheck(this, SchemaValidatorDecimal);
  }

  _createClass(SchemaValidatorDecimal, [{
    key: "valid",
    value: function valid(options, data) {
      if (typeof data !== 'number') throw new InvalidDecimalError("Invalid type: \"".concat(_typeof(data), "\", number expected"));
      if (options.unsigned && data < 0) throw new InvalidDecimalError("Expected an unsigned decimal");
      if ('min' in options && data < options.min) throw new InvalidDecimalError("Decimal must be minimum: \"".concat(options.min, "\""));
      if ('max' in options && data > options.max) throw new InvalidDecimalError("Decimal can't be more then: \"".concat(options.max, "\""));
      if ('gt' in options && data > options.gt) throw new InvalidDecimalError("Decimal must be more then: \"".concat(options.gt, "\""));
      if ('lt' in options && data < options.lt) throw new InvalidDecimalError("Decimal must be less then: \"".concat(options.lt, "\""));
      if (options.enum && !options.enum.includes(data)) throw new InvalidDecimalError("Expected one of the enumeral values: \"".concat(options.enum, "\""));
    }
  }]);

  return SchemaValidatorDecimal;
}();

module.exports = SchemaValidatorDecimal;

/***/ }),

/***/ "./src/schema/validator/decimal/locator.js":
/*!*************************************************!*\
  !*** ./src/schema/validator/decimal/locator.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorDecimal = __webpack_require__(/*! . */ "./src/schema/validator/decimal/index.js");

var SchemaValidatorDecimalLocator = /*#__PURE__*/function () {
  function SchemaValidatorDecimalLocator() {
    _classCallCheck(this, SchemaValidatorDecimalLocator);
  }

  _createClass(SchemaValidatorDecimalLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorDecimal();
    }
  }]);

  return SchemaValidatorDecimalLocator;
}();

module.exports = SchemaValidatorDecimalLocator;

/***/ }),

/***/ "./src/schema/validator/integer/error/invalid.js":
/*!*******************************************************!*\
  !*** ./src/schema/validator/integer/error/invalid.js ***!
  \*******************************************************/
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

/**
 * @extends {Error}
 */
var InvalidIntegerError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidIntegerError, _Error);

  var _super = _createSuper(InvalidIntegerError);

  function InvalidIntegerError() {
    var _this;

    _classCallCheck(this, InvalidIntegerError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_INVALID_INTEGER';
    return _this;
  }

  return InvalidIntegerError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = InvalidIntegerError;

/***/ }),

/***/ "./src/schema/validator/integer/index.js":
/*!***********************************************!*\
  !*** ./src/schema/validator/integer/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidIntegerError = __webpack_require__(/*! ./error/invalid */ "./src/schema/validator/integer/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorInteger = /*#__PURE__*/function () {
  function SchemaValidatorInteger() {
    _classCallCheck(this, SchemaValidatorInteger);
  }

  _createClass(SchemaValidatorInteger, [{
    key: "valid",
    value: function valid(options, data) {
      if (typeof data !== 'number') throw new InvalidIntegerError("Invalid type: \"".concat(_typeof(data), "\", number expected"));
      if (data !== parseInt(data)) throw new InvalidIntegerError("Integer expected, found decimals");
      if (options.unsigned && data < 0) throw new InvalidIntegerError("Expected an unsigned integer");
      if ('min' in options && data < options.min) throw new InvalidIntegerError("Integer must be minimum: \"".concat(options.min, "\""));
      if ('max' in options && data > options.max) throw new InvalidIntegerError("Integer can't be more then: \"".concat(options.max, "\""));
      if ('gt' in options && data < options.gt) throw new InvalidIntegerError("Integer must be more then: \"".concat(options.gt, "\""));
      if ('lt' in options && data > options.lt) throw new InvalidIntegerError("Integer must be less then: \"".concat(options.lt, "\""));
      if (options.enum && !options.enum.includes(data)) throw new InvalidIntegerError("Expected one of the enumeral values: \"".concat(options.enum, "\""));
    }
  }]);

  return SchemaValidatorInteger;
}();

module.exports = SchemaValidatorInteger;

/***/ }),

/***/ "./src/schema/validator/integer/locator.js":
/*!*************************************************!*\
  !*** ./src/schema/validator/integer/locator.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorInteger = __webpack_require__(/*! . */ "./src/schema/validator/integer/index.js");

var SchemaValidatorIntegerLocator = /*#__PURE__*/function () {
  function SchemaValidatorIntegerLocator() {
    _classCallCheck(this, SchemaValidatorIntegerLocator);
  }

  _createClass(SchemaValidatorIntegerLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorInteger();
    }
  }]);

  return SchemaValidatorIntegerLocator;
}();

module.exports = SchemaValidatorIntegerLocator;

/***/ }),

/***/ "./src/schema/validator/json/error/invalid.js":
/*!****************************************************!*\
  !*** ./src/schema/validator/json/error/invalid.js ***!
  \****************************************************/
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

/**
 * @extends {Error}
 */
var InvalidJsonError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidJsonError, _Error);

  var _super = _createSuper(InvalidJsonError);

  function InvalidJsonError() {
    var _this;

    _classCallCheck(this, InvalidJsonError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_INVALID_JSON';
    return _this;
  }

  return InvalidJsonError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = InvalidJsonError;

/***/ }),

/***/ "./src/schema/validator/json/index.js":
/*!********************************************!*\
  !*** ./src/schema/validator/json/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidJsonError = __webpack_require__(/*! ./error/invalid */ "./src/schema/validator/json/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorJson = /*#__PURE__*/function () {
  function SchemaValidatorJson() {
    _classCallCheck(this, SchemaValidatorJson);
  }

  _createClass(SchemaValidatorJson, [{
    key: "valid",
    value: function valid(options, data) {
      try {
        options.stringified ? JSON.parse(data) : JSON.stringify(data);
      } catch (error) {
        var msg = "Unparsable JSON provided";
        throw new InvalidJsonError(msg);
      }
    }
  }]);

  return SchemaValidatorJson;
}();

module.exports = SchemaValidatorJson;

/***/ }),

/***/ "./src/schema/validator/json/locator.js":
/*!**********************************************!*\
  !*** ./src/schema/validator/json/locator.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorJson = __webpack_require__(/*! . */ "./src/schema/validator/json/index.js");

var SchemaValidatorJsonLocator = /*#__PURE__*/function () {
  function SchemaValidatorJsonLocator() {
    _classCallCheck(this, SchemaValidatorJsonLocator);
  }

  _createClass(SchemaValidatorJsonLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorJson();
    }
  }]);

  return SchemaValidatorJsonLocator;
}();

module.exports = SchemaValidatorJsonLocator;

/***/ }),

/***/ "./src/schema/validator/regexp/error/invalid.js":
/*!******************************************************!*\
  !*** ./src/schema/validator/regexp/error/invalid.js ***!
  \******************************************************/
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

/**
 * @extends {Error}
 */
var InvalidRegexpError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidRegexpError, _Error);

  var _super = _createSuper(InvalidRegexpError);

  function InvalidRegexpError() {
    var _this;

    _classCallCheck(this, InvalidRegexpError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_INVALID_REGEXP';
    return _this;
  }

  return InvalidRegexpError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = InvalidRegexpError;

/***/ }),

/***/ "./src/schema/validator/regexp/index.js":
/*!**********************************************!*\
  !*** ./src/schema/validator/regexp/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidRegexpError = __webpack_require__(/*! ./error/invalid */ "./src/schema/validator/regexp/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorRegexp = /*#__PURE__*/function () {
  function SchemaValidatorRegexp() {
    _classCallCheck(this, SchemaValidatorRegexp);
  }

  _createClass(SchemaValidatorRegexp, [{
    key: "valid",
    value: function valid(options, data) {
      if (_typeof(data) !== 'object') throw new InvalidRegexpError("Invalid type: \"".concat(_typeof(data), "\", object expected"));
      if (Object.prototype.toString.call(data) !== '[object RegExp]') throw new InvalidRegexpError('Invalid object, regexp expected');
    }
  }]);

  return SchemaValidatorRegexp;
}();

module.exports = SchemaValidatorRegexp;

/***/ }),

/***/ "./src/schema/validator/regexp/locator.js":
/*!************************************************!*\
  !*** ./src/schema/validator/regexp/locator.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorRegexp = __webpack_require__(/*! . */ "./src/schema/validator/regexp/index.js");

var SchemaValidatorRegexpLocator = /*#__PURE__*/function () {
  function SchemaValidatorRegexpLocator() {
    _classCallCheck(this, SchemaValidatorRegexpLocator);
  }

  _createClass(SchemaValidatorRegexpLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorRegexp();
    }
  }]);

  return SchemaValidatorRegexpLocator;
}();

module.exports = SchemaValidatorRegexpLocator;

/***/ }),

/***/ "./src/schema/validator/schema/index.js":
/*!**********************************************!*\
  !*** ./src/schema/validator/schema/index.js ***!
  \**********************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const InvalidSchemaError = require('common/core/schema/validator/schema/error/invalid')

/**
 * @implements {SchemaValidator}
 */
var SchemaValidatorSchema = /*#__PURE__*/function () {
  function SchemaValidatorSchema() {
    _classCallCheck(this, SchemaValidatorSchema);
  }

  _createClass(SchemaValidatorSchema, [{
    key: "valid",
    value: function valid(options, data) {// nothing to validate
    }
  }]);

  return SchemaValidatorSchema;
}();

module.exports = SchemaValidatorSchema;

/***/ }),

/***/ "./src/schema/validator/schema/locator.js":
/*!************************************************!*\
  !*** ./src/schema/validator/schema/locator.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorSchema = __webpack_require__(/*! . */ "./src/schema/validator/schema/index.js");

var SchemaValidatorSchemaLocator = /*#__PURE__*/function () {
  function SchemaValidatorSchemaLocator() {
    _classCallCheck(this, SchemaValidatorSchemaLocator);
  }

  _createClass(SchemaValidatorSchemaLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorSchema();
    }
  }]);

  return SchemaValidatorSchemaLocator;
}();

module.exports = SchemaValidatorSchemaLocator;

/***/ }),

/***/ "./src/schema/validator/string/error/invalid.js":
/*!******************************************************!*\
  !*** ./src/schema/validator/string/error/invalid.js ***!
  \******************************************************/
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

/**
 * @extends {Error}
 */
var InvalidStringError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidStringError, _Error);

  var _super = _createSuper(InvalidStringError);

  function InvalidStringError() {
    var _this;

    _classCallCheck(this, InvalidStringError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_INVALID_STRING';
    return _this;
  }

  return InvalidStringError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = InvalidStringError;

/***/ }),

/***/ "./src/schema/validator/string/index.js":
/*!**********************************************!*\
  !*** ./src/schema/validator/string/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidStringError = __webpack_require__(/*! ./error/invalid */ "./src/schema/validator/string/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorString = /*#__PURE__*/function () {
  function SchemaValidatorString() {
    _classCallCheck(this, SchemaValidatorString);
  }

  _createClass(SchemaValidatorString, [{
    key: "valid",
    value: function valid(options, data) {
      if (typeof data !== 'string') throw new InvalidStringError("Invalid type: \"".concat(_typeof(data), "\", string expected"));
      if (options['not-empty'] && !data.length) throw new InvalidStringError("Must not be empty");
      if ('min' in options && data.length < options.min) throw new InvalidStringError("String length must be minimum: \"".concat(options.min, "\" long"));
      if ('max' in options && data.length > options.max) throw new InvalidStringError("String length can't be more then: \"".concat(options.max, "\" long"));
      if (options.enum && !options.enum.includes(data)) throw new InvalidStringError("Expected one of the enumeral values: \"".concat(options.enum, "\""));
      if (options.uppercase && data !== data.toUpperCase()) throw new InvalidStringError("Upper case string expected");
      if (options.lowercase && data !== data.toLowerCase()) throw new InvalidStringError("Lower case string expected");
    }
  }]);

  return SchemaValidatorString;
}();

module.exports = SchemaValidatorString;

/***/ }),

/***/ "./src/schema/validator/string/locator.js":
/*!************************************************!*\
  !*** ./src/schema/validator/string/locator.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorString = __webpack_require__(/*! . */ "./src/schema/validator/string/index.js");

var SchemaValidatorStringLocator = /*#__PURE__*/function () {
  function SchemaValidatorStringLocator() {
    _classCallCheck(this, SchemaValidatorStringLocator);
  }

  _createClass(SchemaValidatorStringLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorString();
    }
  }]);

  return SchemaValidatorStringLocator;
}();

module.exports = SchemaValidatorStringLocator;

/***/ }),

/***/ "./src/schema/validator/timestamp/error/invalid.js":
/*!*********************************************************!*\
  !*** ./src/schema/validator/timestamp/error/invalid.js ***!
  \*********************************************************/
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

/**
 * @extends {Error}
 */
var InvalidTimestampError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidTimestampError, _Error);

  var _super = _createSuper(InvalidTimestampError);

  function InvalidTimestampError() {
    var _this;

    _classCallCheck(this, InvalidTimestampError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(a));
    _this.code = 'E_INVALID_TIMESTAMP';
    return _this;
  }

  return InvalidTimestampError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = InvalidTimestampError;

/***/ }),

/***/ "./src/schema/validator/timestamp/index.js":
/*!*************************************************!*\
  !*** ./src/schema/validator/timestamp/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidTimestampError = __webpack_require__(/*! ./error/invalid */ "./src/schema/validator/timestamp/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorTimestamp = /*#__PURE__*/function () {
  function SchemaValidatorTimestamp() {
    _classCallCheck(this, SchemaValidatorTimestamp);
  }

  _createClass(SchemaValidatorTimestamp, [{
    key: "valid",
    value: function valid(options, data) {
      if (typeof data !== 'string') throw new InvalidTimestampError("Invalid type: \"".concat(_typeof(data), "\", string expected"));
      var date = new Date(data);
      if ('min' in options && date.getTime() < new Date(options.min).getTime()) throw new InvalidTimestampError("Timestamp must be at least: \"".concat(options.min, "\""));
      if ('max' in options && date.getTime() > new Date(options.max).getTime()) throw new InvalidTimestampError("Timestamp can't be more then: \"".concat(options.max, "\""));
      if ('gt' in options && date.getTime() > new Date(options.gt).getTime()) throw new InvalidTimestampError("Timestamp must be more then: \"".concat(options.gt, "\" long"));
      if ('lt' in options && date.getTime() < new Date(options.lt).getTime()) throw new InvalidTimestampError("Timestamp must be less then: \"".concat(options.lt, "\" long"));
      if (options.enum && !options.enum.includes(data)) throw new InvalidTimestampError("Expected one of the enumeral values: \"".concat(options.enum, "\""));
    }
  }]);

  return SchemaValidatorTimestamp;
}();

module.exports = SchemaValidatorTimestamp;

/***/ }),

/***/ "./src/schema/validator/timestamp/locator.js":
/*!***************************************************!*\
  !*** ./src/schema/validator/timestamp/locator.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorString = __webpack_require__(/*! . */ "./src/schema/validator/timestamp/index.js");

var SchemaValidatorStringLocator = /*#__PURE__*/function () {
  function SchemaValidatorStringLocator() {
    _classCallCheck(this, SchemaValidatorStringLocator);
  }

  _createClass(SchemaValidatorStringLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorString();
    }
  }]);

  return SchemaValidatorStringLocator;
}();

module.exports = SchemaValidatorStringLocator;

/***/ }),

/***/ "./src/schema/value/binding.js":
/*!*************************************!*\
  !*** ./src/schema/value/binding.js ***!
  \*************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  selector: {
    type: 'string',
    'not-empty': true,
    optional: true
  },
  domEvent: {
    type: 'string',
    'not-empty': true
  },
  locator: {
    type: 'string',
    'not-empty': true,
    optional: true
  },
  event: {
    type: 'string',
    'not-empty': true,
    optional: true
  },
  dispatch: {
    type: 'boolean',
    default: false
  },
  domEventMapper: {
    type: 'string',
    'not-empty': true,
    optional: true
  },
  preventDefault: {
    type: 'boolean',
    default: false
  },
  stopPropagation: {
    type: 'boolean',
    default: false
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/value/dataset.js":
/*!*************************************!*\
  !*** ./src/schema/value/dataset.js ***!
  \*************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  value: {
    type: 'string',
    'not-empty': true
  },
  name: {
    type: 'string',
    'not-empty': true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/value/edge.js":
/*!**********************************!*\
  !*** ./src/schema/value/edge.js ***!
  \**********************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  source: {
    type: 'string',
    'not-empty': true
  },
  target: {
    type: 'string',
    'not-empty': true
  },
  payload: {
    type: 'json'
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/value/error.js":
/*!***********************************!*\
  !*** ./src/schema/value/error.js ***!
  \***********************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  code: {
    type: 'string',
    optional: true,
    'not-empty': true
  },
  message: {
    type: 'string',
    optional: true,
    'not-empty': true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/value/listener.js":
/*!**************************************!*\
  !*** ./src/schema/value/listener.js ***!
  \**************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  channel: {
    type: 'string',
    'not-empty': true,
    optional: true
  },
  event: {
    type: 'string',
    'not-empty': true,
    optional: true
  },
  eventMapper: {
    type: 'string',
    'not-empty': true,
    optional: true
  },
  map: {
    type: 'string',
    'not-empty': true,
    optional: true
  },
  locator: {
    type: 'string',
    'not-empty': true,
    optional: true
  },
  dispatch: {
    type: 'boolean',
    default: false
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./src/schema/value/partial.js":
/*!*************************************!*\
  !*** ./src/schema/value/partial.js ***!
  \*************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dto = {
  context: {
    type: 'json',
    optional: true
  },
  template: {
    type: 'string',
    'not-empty': true
  }
};

module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "locate",
    value: function locate() {
      return dto;
    }
  }]);

  return _class;
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/common/view/styles/globals.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/common/view/styles/globals.scss ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  line-height: 1.5rem;\n  vertical-align: baseline; }\n\n*,\n*:after,\n*:before {\n  box-sizing: border-box; }\n\nhtml, body {\n  height: 100%;\n  min-height: 100%;\n  width: 100%; }\n\n.grid-container {\n  max-width: 1440px;\n  min-height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  position: relative; }\n  .grid-container--fluid {\n    max-width: 100%;\n    margin: 0;\n    padding: 0; }\n  .grid-container:before, .grid-container:after {\n    content: '';\n    display: table;\n    clear: both; }\n  .grid-container .header-form {\n    position: relative;\n    width: calc(100% - 20rem + 1px);\n    background-color: #fff;\n    padding: .75rem 1.5rem 0;\n    margin-top: -5.25rem;\n    z-index: 5; }\n    .grid-container .header-form .header__prev-button {\n      font-size: 2rem;\n      line-height: 2rem;\n      color: #3f9fca;\n      display: inline-block;\n      padding-right: 1.5rem; }\n      .grid-container .header-form .header__prev-button + * {\n        width: calc(100% - 3.375rem);\n        display: inline-block; }\n    .grid-container .header-form .header-form__address .input-group__optional-label {\n      display: none; }\n  .grid-container.grid-container--fluid .main {\n    padding: 0; }\n  .grid-container.grid-container--fluid .sidebar,\n  .grid-container.grid-container--fluid .header-form {\n    margin-top: 0; }\n  .grid-container:not(.grid-container--fluid) .sidebar + .main {\n    width: calc(100vw - 20rem);\n    max-width: calc(1440px - 20rem);\n    padding: 8.25rem 1.5rem 1rem;\n    display: table-cell; }\n    .grid-container:not(.grid-container--fluid) .sidebar + .main .header-form {\n      margin-top: -11.5rem;\n      position: fixed;\n      max-width: calc(1440px - 21.5rem);\n      z-index: 5; }\n  .grid-container .main {\n    left: 0;\n    width: 100%;\n    padding: 8.25rem 0 1rem; }\n    @supports (display: flex) {\n      .grid-container .main {\n        display: flex;\n        align-items: stretch;\n        flex-wrap: wrap; } }\n    .grid-container .main .main__block {\n      margin-bottom: 3.5rem; }\n    .grid-container .main__buttons {\n      text-align: right; }\n  .grid-container .sidebar {\n    float: right;\n    width: 20rem;\n    bottom: 0vh;\n    top: 6.25rem;\n    position: absolute; }\n    @supports (display: flex) {\n      .grid-container .sidebar {\n        display: flex; } }\n    @supports (position: sticky) {\n      .grid-container .sidebar {\n        position: sticky;\n        margin-top: 6.25rem;\n        bottom: 0; } }\n\n.grid-container [class*='rsp'] {\n  float: left;\n  flex-wrap: wrap; }\n  .grid-container [class*='rsp'][class*='__centered'] {\n    text-align: center; }\n  .grid-container [class*='rsp'][class*='__right'] {\n    float: right; }\n\n@media screen and (min-width: 480px) {\n  .grid-container [class*='rsp'][class*='__xs100'] {\n    width: 100%; }\n  .grid-container [class*='rsp'][class*='__xs75'] {\n    width: 75%; }\n    .grid-container [class*='rsp'][class*='__xs75'][class*='__centered'] {\n      margin-left: 12.5%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__xs75'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__xs66'] {\n    width: 66.66666667%; }\n    .grid-container [class*='rsp'][class*='__xs66'][class*='__centered'] {\n      margin-left: 16.666666665%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__xs66'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__xs50'] {\n    width: 50%; }\n    .grid-container [class*='rsp'][class*='__xs50'][class*='__centered'] {\n      margin-left: 25%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__xs50'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__xs33'] {\n    width: 33.33333333%; }\n    .grid-container [class*='rsp'][class*='__xs33'][class*='__centered'] {\n      margin-left: 33.33333333%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__xs33'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__xs25'] {\n    width: 25%; }\n    .grid-container [class*='rsp'][class*='__xs25'][class*='__centered'] {\n      margin-left: 37.5%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__xs25'][class*='__centered'] {\n          margin-left: 0; } } }\n\n@media screen and (min-width: 768px) {\n  .grid-container [class*='rsp'][class*='__sm100'] {\n    width: 100%; }\n  .grid-container [class*='rsp'][class*='__sm75'] {\n    width: 75%; }\n    .grid-container [class*='rsp'][class*='__sm75'][class*='__centered'] {\n      margin-left: 12.5%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__sm75'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__sm66'] {\n    width: 66.66666667%; }\n    .grid-container [class*='rsp'][class*='__sm66'][class*='__centered'] {\n      margin-left: 16.666666665%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__sm66'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__sm50'] {\n    width: 50%; }\n    .grid-container [class*='rsp'][class*='__sm50'][class*='__centered'] {\n      margin-left: 25%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__sm50'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__sm33'] {\n    width: 33.33333333%; }\n    .grid-container [class*='rsp'][class*='__sm33'][class*='__centered'] {\n      margin-left: 33.33333333%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__sm33'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__sm25'] {\n    width: 25%; }\n    .grid-container [class*='rsp'][class*='__sm25'][class*='__centered'] {\n      margin-left: 37.5%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__sm25'][class*='__centered'] {\n          margin-left: 0; } } }\n\n@media screen and (min-width: 992px) {\n  .grid-container [class*='rsp'][class*='__md100'] {\n    width: 100%; }\n  .grid-container [class*='rsp'][class*='__md75'] {\n    width: 75%; }\n    .grid-container [class*='rsp'][class*='__md75'][class*='__centered'] {\n      margin-left: 12.5%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__md75'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__md66'] {\n    width: 66.66666667%; }\n    .grid-container [class*='rsp'][class*='__md66'][class*='__centered'] {\n      margin-left: 16.666666665%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__md66'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__md50'] {\n    width: 50%; }\n    .grid-container [class*='rsp'][class*='__md50'][class*='__centered'] {\n      margin-left: 25%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__md50'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__md33'] {\n    width: 33.33333333%; }\n    .grid-container [class*='rsp'][class*='__md33'][class*='__centered'] {\n      margin-left: 33.33333333%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__md33'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__md25'] {\n    width: 25%; }\n    .grid-container [class*='rsp'][class*='__md25'][class*='__centered'] {\n      margin-left: 37.5%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__md25'][class*='__centered'] {\n          margin-left: 0; } } }\n\n@media screen and (min-width: 1200px) {\n  .grid-container [class*='rsp'][class*='__lg100'] {\n    width: 100%; }\n  .grid-container [class*='rsp'][class*='__lg75'] {\n    width: 75%; }\n    .grid-container [class*='rsp'][class*='__lg75'][class*='__centered'] {\n      margin-left: 12.5%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__lg75'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__lg66'] {\n    width: 66.66666667%; }\n    .grid-container [class*='rsp'][class*='__lg66'][class*='__centered'] {\n      margin-left: 16.666666665%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__lg66'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__lg50'] {\n    width: 50%; }\n    .grid-container [class*='rsp'][class*='__lg50'][class*='__centered'] {\n      margin-left: 25%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__lg50'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__lg33'] {\n    width: 33.33333333%; }\n    .grid-container [class*='rsp'][class*='__lg33'][class*='__centered'] {\n      margin-left: 33.33333333%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__lg33'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__lg25'] {\n    width: 25%; }\n    .grid-container [class*='rsp'][class*='__lg25'][class*='__centered'] {\n      margin-left: 37.5%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__lg25'][class*='__centered'] {\n          margin-left: 0; } } }\n\n@media screen and (min-width: 1440px) {\n  .grid-container [class*='rsp'][class*='__xl100'] {\n    width: 100%; }\n  .grid-container [class*='rsp'][class*='__xl75'] {\n    width: 75%; }\n    .grid-container [class*='rsp'][class*='__xl75'][class*='__centered'] {\n      margin-left: 12.5%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__xl75'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__xl66'] {\n    width: 66.66666667%; }\n    .grid-container [class*='rsp'][class*='__xl66'][class*='__centered'] {\n      margin-left: 16.666666665%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__xl66'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__xl50'] {\n    width: 50%; }\n    .grid-container [class*='rsp'][class*='__xl50'][class*='__centered'] {\n      margin-left: 25%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__xl50'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__xl33'] {\n    width: 33.33333333%; }\n    .grid-container [class*='rsp'][class*='__xl33'][class*='__centered'] {\n      margin-left: 33.33333333%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__xl33'][class*='__centered'] {\n          margin-left: 0; } }\n  .grid-container [class*='rsp'][class*='__xl25'] {\n    width: 25%; }\n    .grid-container [class*='rsp'][class*='__xl25'][class*='__centered'] {\n      margin-left: 37.5%; }\n      @supports (display: flex) {\n        .grid-container [class*='rsp'][class*='__xl25'][class*='__centered'] {\n          margin-left: 0; } } }\n\nbody {\n  color: #000;\n  font-family: \"Open Sans\", sans-serif;\n  overflow-y: auto;\n  position: relative; }\n\n#page-wrapper {\n  white-space: nowrap;\n  display: block; }\n\na {\n  color: #fc7a00; }\n  a:hover {\n    text-decoration: underline; }\n  a.--negative {\n    color: #fff; }\n\n.input-error {\n  color: #f53663;\n  padding: 0 .5rem;\n  display: block; }\n\n::selection {\n  color: #fff;\n  background: #3f9fca; }\n\n.form-actions {\n  padding: 1rem 0;\n  text-align: right; }\n\n.--visible {\n  display: inherit; }\n\n.--hidden {\n  display: none; }\n\n.input-group {\n  margin: 0 .5rem 1rem;\n  outline: none;\n  position: relative;\n  box-shadow: none;\n  cursor: pointer; }\n  .input-group__input {\n    transition: all 300ms ease 0s;\n    font-size: 1.125rem;\n    line-height: 1.375rem;\n    padding: .5rem 1rem;\n    box-sizing: border-box;\n    height: 4rem;\n    width: 100%;\n    color: #000;\n    border: 2px solid #000; }\n    .input-group__input:focus, .input-group__input:not(:placeholder-shown) {\n      border: 4px solid #000;\n      padding-top: 1.5rem; }\n      .input-group__input:focus + .input-group__label-wrapper .input-group__label, .input-group__input:not(:placeholder-shown) + .input-group__label-wrapper .input-group__label {\n        transform: translateY(-110%);\n        font-size: .75rem;\n        opacity: .75;\n        color: #000;\n        top: 1.5rem; }\n    .input-group__input::placeholder {\n      color: transparent; }\n  .input-group__optional-label, .input-group__label {\n    font-size: 0.75rem;\n    line-height: .75rem;\n    position: absolute; }\n  .input-group:not(select) .input-group__label {\n    top: 1.75rem;\n    left: 1rem;\n    color: #495057;\n    font-size: 1.125rem;\n    transition: all 300ms ease 0s; }\n  .input-group__optional-label {\n    color: #fc7a00;\n    text-transform: uppercase;\n    top: .75rem;\n    right: 1rem; }\n  .input-group[disabled], .input-group [disabled] {\n    background-color: #dadada;\n    color: #495057;\n    cursor: not-allowed;\n    pointer-events: none; }\n    .input-group[disabled]:focus, .input-group[disabled]:not(:placeholder-shown), .input-group [disabled]:focus, .input-group [disabled]:not(:placeholder-shown) {\n      border-width: 2px; }\n    .input-group[disabled] + .input-group__label-wrapper .input-group__optional-label, .input-group [disabled] + .input-group__label-wrapper .input-group__optional-label {\n      color: #000; }\n  .input-group__input:required + .input-group__label + .input-group__optional-label {\n    display: none; }\n  .input-group__error {\n    font-weight: 700;\n    display: none; }\n  .input-group.--error .input-group__input, .input-group.--error .input-group__optional-label {\n    color: #f53663;\n    border-color: #f53663; }\n  .input-group.--error .input-group__error {\n    display: block;\n    color: #b14f83;\n    text-align: left;\n    margin-bottom: 1rem;\n    padding-left: 0.25rem; }\n  .input-group .textarea-input,\n  .input-group .date-input {\n    font-family: \"Open Sans\", sans-serif; }\n  .input-group .textarea-input {\n    height: 8rem;\n    max-width: 100%;\n    min-width: 100%; }\n  .input-group--xl {\n    margin: 0 1rem 1.5rem; }\n    .input-group--xl .input-group__input {\n      font-size: 1.75rem;\n      line-height: 2rem;\n      padding: 1.5rem 1rem 0;\n      height: 5rem; }\n      .input-group--xl .input-group__input:focus, .input-group--xl .input-group__input:not(:placeholder-shown) {\n        padding-top: 1.5rem; }\n        .input-group--xl .input-group__input:focus + .input-group__label-wrapper .input-group__label, .input-group--xl .input-group__input:not(:placeholder-shown) + .input-group__label-wrapper .input-group__label {\n          top: 2.25rem;\n          font-size: 1rem; }\n    .input-group--xl .input-group__optional-label,\n    .input-group--xl .input-group__label {\n      font-size: 1.75rem;\n      line-height: 1.75rem; }\n    .input-group--xl .input-group__label {\n      margin-bottom: .75rem; }\n    .input-group--xl .input-group__optional-label {\n      padding-right: .25rem; }\n    .input-group--xl .input-group__error {\n      font-size: 1rem; }\n\n.input-group input[type=\"radio\"] {\n  position: absolute;\n  opacity: 0;\n  bottom: 0;\n  left: 50%; }\n  .input-group input[type=\"radio\"]:checked + .btn-group__button {\n    color: #fff;\n    background: #000; }\n\n.input-group .btn-group__buttons {\n  display: inline-block;\n  font-size: 0; }\n  .input-group .btn-group__buttons .btn-group__button-container {\n    display: inline-block;\n    cursor: pointer;\n    box-sizing: border-box;\n    position: relative; }\n    .input-group .btn-group__buttons .btn-group__button-container:first-child .btn-group__button {\n      border-top-left-radius: 1.5rem;\n      border-bottom-left-radius: 1.5rem;\n      border-left-style: solid; }\n    .input-group .btn-group__buttons .btn-group__button-container:last-child .btn-group__button {\n      border-top-right-radius: 1.5rem;\n      border-bottom-right-radius: 1.5rem; }\n    .input-group .btn-group__buttons .btn-group__button-container .btn-group__button {\n      background: #fff;\n      -webkit-appearance: none;\n      font-size: 12px;\n      font-weight: 700;\n      border: 2px solid #000;\n      border-left-style: none;\n      outline: 0;\n      cursor: pointer;\n      padding: 4px 10px;\n      display: block;\n      background: #fff; }\n      .input-group .btn-group__buttons .btn-group__button-container .btn-group__button:hover {\n        background: #495057;\n        color: #fff; }\n\n.button-group-input-group .input-group__label {\n  font-size: 14px;\n  color: #6f6f6e;\n  display: inline-block; }\n  .button-group-input-group .input-group__label:after {\n    content: ':';\n    margin-right: 10px; }\n\n.checkbox {\n  display: block;\n  position: relative;\n  padding-left: 2rem;\n  line-height: 1.5rem;\n  height: 1.5rem;\n  margin: .75rem .25rem .5rem 0;\n  cursor: pointer;\n  user-select: none; }\n  .checkbox > * {\n    pointer-events: none; }\n  .checkbox:hover .checkbox__input:not(:disabled) ~ .checkbox__checkmark {\n    background-color: #495057;\n    border-color: #000; }\n  .checkbox .checkbox__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    bottom: 0;\n    left: 0; }\n    .checkbox .checkbox__input:disabled ~ .checkbox__checkmark {\n      border: 2px solid #6f6f6e;\n      background: #dadada; }\n      .checkbox .checkbox__input:disabled ~ .checkbox__checkmark:after {\n        border-color: #dadada; }\n    .checkbox .checkbox__input:disabled:checked ~ .checkbox__checkmark {\n      border: 2px solid #6f6f6e;\n      background: #6f6f6e; }\n      .checkbox .checkbox__input:disabled:checked ~ .checkbox__checkmark:after {\n        border-color: #fff; }\n    .checkbox .checkbox__input:checked ~ .checkbox__checkmark {\n      background-color: #000;\n      border-color: #000; }\n      .checkbox .checkbox__input:checked ~ .checkbox__checkmark:after {\n        display: block; }\n  .checkbox .checkbox__checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1.25rem;\n    width: 1.25rem;\n    border: 2px solid #000;\n    background: #fff;\n    border-radius: 2px;\n    box-sizing: border-box; }\n    .checkbox .checkbox__checkmark:after {\n      -webkit-transform: rotate(45deg);\n      border: solid #fff;\n      border-width: 0 2px 2px 0;\n      content: \"\";\n      height: 1rem;\n      left: .25rem;\n      position: absolute;\n      top: -2px;\n      transform: rotate(45deg);\n      width: .5rem; }\n\n/***************RESET**************/\n*,\n*:after,\n*:before {\n  box-sizing: border-box; }\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  line-height: 1.5rem;\n  vertical-align: baseline; }\n\nhtml, body {\n  height: 100%;\n  min-height: 100%;\n  width: 100%; }\n\nbody {\n  color: #000;\n  font-family: \"Open Sans\", sans-serif;\n  overflow-y: auto;\n  position: relative; }\n\n#page-wrapper {\n  white-space: nowrap;\n  display: block; }\n\na {\n  color: #fc7a00; }\n  a:hover {\n    text-decoration: underline; }\n  a.--negative {\n    color: #fff; }\n\n.input-error {\n  color: #f53663;\n  padding: 0 .5rem;\n  display: block; }\n\n::selection {\n  color: #fff;\n  background: #3f9fca; }\n\n.form-actions {\n  padding: 1rem 0;\n  text-align: right; }\n\n.--visible {\n  display: inherit; }\n\n.--hidden {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/common/view/styles/reset.scss","webpack://./src/common/view/styles/_layout.scss","webpack://./src/common/view/styles/_colors.scss","webpack://./src/common/view/styles/_responsive.scss","webpack://./src/common/view/styles/base.scss","webpack://./src/common/view/styles/inputs.scss","webpack://./src/common/view/styles/input-radio.scss","webpack://./src/common/view/styles/checkbox.scss","webpack://./src/common/view/styles/globals.scss"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;EAaC,SAAS;EACT,UAAU;EACT,SAAS;EACV,eAAe;EACf,mBAAmB;EACnB,wBAAwB,EAAA;;AAGzB;;;EAGE,sBAAsB,EAAA;;AAGxB;EACE,YAAY;EACZ,gBAAgB;EAChB,WAAW,EAAA;;AC9Bb;EACE,iBAAiB;EACjB,gBAAgB;EAChB,WAAY;EACZ,cAAc;EAEd,kBAAkB,EAAA;EAElB;IACE,eAAe;IACf,SAAS;IACT,UAAU,EAAA;EAXd;IAgBM,WAAW;IACX,cAAc;IACd,WAAW,EAAA;EAlBjB;IAsBI,kBAAkB;IAClB,+BAA8B;IAC9B,sBCNQ;IDOR,wBAAwB;IACxB,oBAAoB;IACpB,UAAU,EAAA;IA3Bd;MA8BM,eAAe;MACf,iBAAiB;MACjB,cCPiB;MDQjB,qBAAqB;MACrB,qBAAqB,EAAA;MAlC3B;QAqCQ,4BAA4B;QAC5B,qBAAqB,EAAA;IAtC7B;MA4CQ,aAAa,EAAA;EA5CrB;IAmDM,UAAU,EAAA;EAnDhB;;IAwDM,aAAa,EAAA;EAxDnB;IA+DM,0BAA0B;IAC1B,+BAA+B;IAC/B,4BAA4B;IAC5B,mBAAmB,EAAA;IAlEzB;MAqEQ,oBAAoB;MACpB,eAAe;MACf,iCAAiC;MACjC,UAAU,EAAA;EAxElB;IA8EI,OAAO;IACP,WAAU;IACV,uBAAuB,EAAA;IAEE;MAlF7B;QAmFM,aAAa;QACb,oBAAoB;QACpB,eAAe,EAAA,EAUlB;IA/FH;MAyFM,qBAAqB,EAAA;IAzF3B;MA6FM,iBAAiB,EAAA;EA7FvB;IAkGI,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,kBAAkB,EAAA;IAEO;MAxG7B;QAyGM,aAAa,EAAA,EAQhB;IAL6B;MA5GhC;QA6GM,gBAAgB;QAChB,mBAAmB;QACnB,SAAS,EAAA,EAEZ;;AEjHH;EAEI,WAAW;EACX,eAAe,EAAA;EAHnB;IAMM,kBAAkB,EAAA;EANxB;IAWM,YAAY,EAAA;;AAKd;EAhBJ;IAkBQ,WAAW,EAAA;EAlBnB;IAqBQ,UAAU,EAAA;IArBlB;MAwBU,kBAAkB,EAAA;MAEO;QA1BnC;UA2BY,cAAc,EAAA,EAEjB;EA7BT;IAgCQ,mBAAmB,EAAA;IAhC3B;MAmCU,0BAA0B,EAAA;MAED;QArCnC;UAsCY,cAAc,EAAA,EAEjB;EAxCT;IA2CQ,UAAU,EAAA;IA3ClB;MA8CU,gBAAgB,EAAA;MAES;QAhDnC;UAiDY,cAAc,EAAA,EAEjB;EAnDT;IAsDQ,mBAAmB,EAAA;IAtD3B;MAyDU,yBAAyB,EAAA;MAEA;QA3DnC;UA4DY,cAAc,EAAA,EAEjB;EA9DT;IAiEQ,UAAU,EAAA;IAjElB;MAoEU,kBAAkB,EAAA;MAEO;QAtEnC;UAuEY,cAAc,EAAA,EAEjB,EAAA;;AAIL;EA7EJ;IA+EQ,WAAW,EAAA;EA/EnB;IAkFQ,UAAU,EAAA;IAlFlB;MAqFU,kBAAkB,EAAA;MAEO;QAvFnC;UAwFY,cAAc,EAAA,EAEjB;EA1FT;IA6FQ,mBAAmB,EAAA;IA7F3B;MAgGU,0BAA0B,EAAA;MAED;QAlGnC;UAmGY,cAAc,EAAA,EAEjB;EArGT;IAwGQ,UAAU,EAAA;IAxGlB;MA2GU,gBAAgB,EAAA;MAES;QA7GnC;UA8GY,cAAc,EAAA,EAEjB;EAhHT;IAmHQ,mBAAmB,EAAA;IAnH3B;MAsHU,yBAAyB,EAAA;MAEA;QAxHnC;UAyHY,cAAc,EAAA,EAEjB;EA3HT;IA8HQ,UAAU,EAAA;IA9HlB;MAiIU,kBAAkB,EAAA;MAEO;QAnInC;UAoIY,cAAc,EAAA,EAEjB,EAAA;;AAIL;EA1IJ;IA4IQ,WAAW,EAAA;EA5InB;IA+IQ,UAAU,EAAA;IA/IlB;MAkJU,kBAAkB,EAAA;MAEO;QApJnC;UAqJY,cAAc,EAAA,EAEjB;EAvJT;IA0JQ,mBAAmB,EAAA;IA1J3B;MA6JU,0BAA0B,EAAA;MAED;QA/JnC;UAgKY,cAAc,EAAA,EAEjB;EAlKT;IAqKQ,UAAU,EAAA;IArKlB;MAwKU,gBAAgB,EAAA;MAES;QA1KnC;UA2KY,cAAc,EAAA,EAEjB;EA7KT;IAgLQ,mBAAmB,EAAA;IAhL3B;MAmLU,yBAAyB,EAAA;MAEA;QArLnC;UAsLY,cAAc,EAAA,EAEjB;EAxLT;IA2LQ,UAAU,EAAA;IA3LlB;MA8LU,kBAAkB,EAAA;MAEO;QAhMnC;UAiMY,cAAc,EAAA,EAEjB,EAAA;;AAIL;EAvMJ;IAyMQ,WAAW,EAAA;EAzMnB;IA4MQ,UAAU,EAAA;IA5MlB;MA+MU,kBAAkB,EAAA;MAEO;QAjNnC;UAkNY,cAAc,EAAA,EAEjB;EApNT;IAuNQ,mBAAmB,EAAA;IAvN3B;MA0NU,0BAA0B,EAAA;MAED;QA5NnC;UA6NY,cAAc,EAAA,EAEjB;EA/NT;IAkOQ,UAAU,EAAA;IAlOlB;MAqOU,gBAAgB,EAAA;MAES;QAvOnC;UAwOY,cAAc,EAAA,EAEjB;EA1OT;IA6OQ,mBAAmB,EAAA;IA7O3B;MAgPU,yBAAyB,EAAA;MAEA;QAlPnC;UAmPY,cAAc,EAAA,EAEjB;EArPT;IAwPQ,UAAU,EAAA;IAxPlB;MA2PU,kBAAkB,EAAA;MAEO;QA7PnC;UA8PY,cAAc,EAAA,EAEjB,EAAA;;AAIL;EApQJ;IAsQQ,WAAW,EAAA;EAtQnB;IAyQQ,UAAU,EAAA;IAzQlB;MA4QU,kBAAkB,EAAA;MAEO;QA9QnC;UA+QY,cAAc,EAAA,EAEjB;EAjRT;IAoRQ,mBAAmB,EAAA;IApR3B;MAuRU,0BAA0B,EAAA;MAED;QAzRnC;UA0RY,cAAc,EAAA,EAEjB;EA5RT;IA+RQ,UAAU,EAAA;IA/RlB;MAkSU,gBAAgB,EAAA;MAES;QApSnC;UAqSY,cAAc,EAAA,EAEjB;EAvST;IA0SQ,mBAAmB,EAAA;IA1S3B;MA6SU,yBAAyB,EAAA;MAEA;QA/SnC;UAgTY,cAAc,EAAA,EAEjB;EAlTT;IAqTQ,UAAU,EAAA;IArTlB;MAwTU,kBAAkB,EAAA;MAEO;QA1TnC;UA2TY,cAAc,EAAA,EAEjB,EAAA;;ACxTT;EACE,WFWU;EEVV,oCFPiC;EEQjC,gBAAgB;EAChB,kBAAkB,EAAA;;AAGpB;EACE,mBAAmB;EACnB,cAAa,EAAA;;AAGf;EACE,cFIsB,EAAA;EELxB;IAII,0BAA0B,EAAA;EAJ9B;IAQI,WFPQ,EAAA;;AEWZ;EACE,cFMuB;EELvB,gBAAgB;EAChB,cAAc,EAAA;;AAEhB;EACE,WFjBU;EEkBV,mBFXqB,EAAA;;AEavB;EACE,eAAe;EACf,iBAAiB,EAAA;;AAgBnB;EACE,gBAAgB,EAAA;;AAGlB;EACE,aAAa,EAAA;;AC1Df;EACE,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,eAAe,EAAA;EAEf;IACE,6BAA6B;IAC7B,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,WHDQ;IGER,sBHFQ,EAAA;IGPT;MAaG,sBHNM;MGON,mBAAmB,EAAA;MAdtB;QAiBK,4BAA4B;QAC5B,iBAAiB;QACjB,YAAY;QACZ,WHbI;QGcJ,WAAW,EAAA;IArBhB;MA0BG,kBAAkB,EAAA;EAItB;IAEE,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB,EAAA;EAzCtB;IA6CI,YAAY;IACZ,UAAU;IACV,cH9Be;IG+Bf,mBAAmB;IACnB,6BAA6B,EAAA;EAG/B;IACE,cHlCoB;IGmCpB,yBAAyB;IACzB,WAAW;IACX,WAAW,EAAA;EAxDf;IA4DI,yBH5CgB;IG6ChB,cH5Ce;IG6Cf,mBAAmB;IACnB,oBAAoB,EAAA;IA/DxB;MAmEM,iBAAiB,EAAA;IAnEvB;MAuEM,WHzDM,EAAA;EG6DV;IACE,aAAa,EAAA;EAGf;IACE,gBAAgB;IAChB,aAAa,EAAA;EAjFjB;IAyFQ,cHxDiB;IGyDjB,qBHzDiB,EAAA;EGjCzB;IA8FM,cAAc;IACd,cH7DmB;IG8DnB,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB,EAAA;EAlG3B;;IAwGI,oCH3G+B,EAAA;EGGnC;IA4GI,YAAY;IACZ,eAAe;IACf,eAAe,EAAA;EAIjB;IACE,qBAAqB,EAAA;IADtB;MAIG,kBAAkB;MAClB,iBAAiB;MACjB,sBAAsB;MACtB,YAAY,EAAA;MAPf;QAWK,mBAAmB,EAAA;QAXxB;UAcO,YAAY;UACZ,eAAe,EAAA;IAftB;;MAsBG,kBAAkB;MAClB,oBAAoB,EAAA;IAvBvB;MA2BG,qBAAqB,EAAA;IA3BxB;MA+BG,qBAAqB,EAAA;IA/BxB;MAkCG,eAAc,EAAA;;ACrJpB;EAGI,kBAAkB;EAClB,UAAS;EACT,SAAS;EACT,SAAS,EAAA;EANb;IAQM,WJQM;IIPN,gBJMM,EAAA;;AIfZ;EAcM,qBAAqB;EACrB,YAAY,EAAA;EAflB;IAiBQ,qBAAqB;IACrB,eAAe;IACf,sBAAsB;IACtB,kBAAkB,EAAA;IApB1B;MAuBU,8BAA8B;MAC9B,iCAAiC;MACjC,wBAAwB,EAAA;IAzBlC;MA4BU,+BAA+B;MAC/B,kCAAkC,EAAA;IA7B5C;MAgCU,gBJhBE;MIiBF,wBAAwB;MACxB,eAAe;MACf,gBAAgB;MAChB,sBJrBE;MIsBF,uBAAuB;MACvB,UAAU;MACV,eAAe;MACf,iBAAiB;MACjB,cAAc;MACd,gBJ1BE,EAAA;MIhBZ;QA6CY,mBJ3BO;QI4BP,WJ9BA,EAAA;;AIsCZ;EAEI,eAAe;EACf,cJ7CiB;EI8CjB,qBAAqB,EAAA;EAJzB;IAMM,YAAY;IACZ,kBAAkB,EAAA;;AC7DxB;EACE,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,6BAA6B;EAC7B,eAAe;EACf,iBAAiB,EAAA;EARnB;IAUI,oBAAoB,EAAA;EAVxB;IAeQ,yBLGW;IKFX,kBLDI,EAAA;EKfZ;IAqBI,kBAAkB;IAClB,UAAU;IACV,eAAe;IACf,SAAS;IACT,OAAO,EAAA;IAzBX;MA4BQ,yBLhBa;MKiBb,mBLZY,EAAA;MKjBpB;QA+BU,qBLdU,EAAA;IKjBpB;MAoCU,yBLxBW;MKyBX,mBLzBW,EAAA;MKZrB;QAuCY,kBLvBA,EAAA;IKhBZ;MA8CQ,sBL/BI;MKgCJ,kBLhCI,EAAA;MKfZ;QAiDU,cAAc,EAAA;EAjDxB;IAuDI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,eAAe;IACf,cAAc;IACd,sBL7CQ;IK8CR,gBL7CQ;IK8CR,kBAAkB;IAClB,sBAAsB,EAAA;IA/D1B;MAiEM,gCAAgC;MAChC,kBLlDM;MKmDN,yBAAyB;MACzB,WAAW;MACX,YAAY;MACZ,YAAY;MACZ,kBAAkB;MAClB,SAAS;MACT,wBAAwB;MACxB,YAAY,EAAA;;ACrElB,mCAAA;AACA;;;EAGE,sBAAsB,EAAA;;AAExB;;;;;;;;;;;;;EAaC,SAAS;EACT,UAAU;EACT,SAAS;EACV,eAAe;EACf,mBAAmB;EACnB,wBAAwB,EAAA;;AAEzB;EACE,YAAY;EACZ,gBAAgB;EAChB,WAAW,EAAA;;AAEb;EACE,WNtBU;EMuBV,oCNxCiC;EMyCjC,gBAAgB;EAChB,kBAAkB,EAAA;;AAEpB;EACE,mBAAmB;EACnB,cAAa,EAAA;;AAGf;EACE,cN5BsB,EAAA;EM2BxB;IAII,0BAA0B,EAAA;EAJ9B;IAQI,WNvCQ,EAAA;;AM2CZ;EACE,cN1BuB;EM2BvB,gBAAgB;EAChB,cAAc,EAAA;;AAEhB;EACE,WNjDU;EMkDV,mBN3CqB,EAAA;;AM6CvB;EACE,eAAe;EACf,iBAAiB,EAAA;;AAgBnB;EACE,gBAAgB,EAAA;;AAGlB;EACE,aAAa,EAAA","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n  border: 0;\n\tfont-size: 100%;\n\tline-height: 1.5rem;\n\tvertical-align: baseline;\n}\n\n*,\n*:after,\n*:before {\n  box-sizing: border-box;\n}\n\nhtml,body{\n  height: 100%;\n  min-height: 100%;\n  width: 100%;\n}",".grid-container {\n  max-width: 1440px;\n  min-height: 100%;\n  width : 100%;\n  margin: 0 auto;\n  //padding: 1rem .5rem;\n  position: relative;\n\n  &--fluid{\n    max-width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  &:before,\n  &:after {\n      content: '';\n      display: table;\n      clear: both;\n  }\n\n  .header-form{\n    position: relative;\n    width:calc(100% - 20rem + 1px);\n    background-color: $white;\n    padding: .75rem 1.5rem 0;\n    margin-top: -5.25rem;\n    z-index: 5;\n\n    .header__prev-button{\n      font-size: 2rem;\n      line-height: 2rem;\n      color: $primary-blue2;\n      display: inline-block;\n      padding-right: 1.5rem;\n\n      & + *{\n        width: calc(100% - 3.375rem);\n        display: inline-block;\n      }\n    }\n\n    .header-form__address{\n      .input-group__optional-label{\n        display: none;\n      }\n    }\n  }\n  \n  &.grid-container--fluid{\n    .main{\n      padding: 0;\n    }\n\n    .sidebar,\n    .header-form{\n      margin-top: 0;\n    }\n\n  }\n\n  &:not(.grid-container--fluid) {\n    .sidebar + .main{\n      width: calc(100vw - 20rem);\n      max-width: calc(1440px - 20rem);\n      padding: 8.25rem 1.5rem 1rem;\n      display: table-cell;\n\n      .header-form{\n        margin-top: -11.5rem;\n        position: fixed;\n        max-width: calc(1440px - 21.5rem);\n        z-index: 5;\n      }\n    }\n  }\n\n  .main{\n    left: 0;\n    width:100%;\n    padding: 8.25rem 0 1rem;\n\n    @supports (display: flex) {\n      display: flex;\n      align-items: stretch;\n      flex-wrap: wrap;\n    }\n\n    .main__block{\n      margin-bottom: 3.5rem;\n    }\n    \n    &__buttons{\n      text-align: right;\n    }\n  }\n\n  .sidebar{\n    float: right;\n    width: 20rem;\n    bottom: 0vh;\n    top: 6.25rem;\n    position: absolute;    \n\n    @supports (display: flex) {\n      display: flex;\n    }\n\n    @supports (position: sticky) {\n      position: sticky;\n      margin-top: 6.25rem;\n      bottom: 0;\n    }\n  }\n}","$font-body: 'Open Sans', sans-serif;\n$font-title: 'Monserrat', serif;\n\n$column-gutter: 0.75rem;\n$border-radius: 0.5rem;\n\n$palette: (\n  color-primary: #ec6907,\n  color-secondary: #3f9fca,\n  color-accent: #9775A5,\n\n  color-success: #569F69,\n  color-error: #e42328,\n\n  color-grey: #6f6f6e\n);\n\n$black: #000;\n$white: #fff;\n$grey-light: #dadada;\n$grey-dark: #495057;\n\n$primary-orange: #fc7a00;\n$primary-green: #1cb261;\n$primary-blue: #00c7ff;\n$primary-blue2: #3f9fca;\n$primary-purple: #734fd9;\n$primary-pink: #fa6199;\n$primary-yellow: #ffb500;\n\n$secondary-orange: #fc7a00;\n$secondary-green1: #2bc46e;\n$secondary-green2: #00f0b0;\n$secondary-green3: #00ffd4;\n$secondary-blue: #00e8ff;\n$secondary-purple: #6661f0;\n$secondary-pink1: #f53663;\n$secondary-pink2: #b14f83;\n\n$corporate-gradient: radial-gradient(102.6% 213.01% at -1.67% 90.17%,#1cb261 0,#1cb261 .01%,#00c7ff 32.29%,#734fd9 67.71%,#fa6199 100%);\n\n$body-copy: #333;\n$body-light: #fff;\n$secondary-bg: #e9ecef;\n$secondary-gradient: linear-gradient(90deg, rgba(0,192,255,1) 0%, rgba(10,139,228,1) 35%, rgba(163,44,223,1) 100%);\n$secondary-gradient-inverse: linear-gradient(90deg, rgba(163,44,223,1) 0%, rgba(10,139,228,1) 65%, rgba(0,192,255,1) 100%);\n\n@function delta-shades(\n  $tokens,\n  $colors: color-primary color-secondary color-accent color-success color-error color-grey,\n  $dark_shades: (D1: 25%, D2: 50%, D3: 70%, D4: 90%),\n  $light_shades: (L1: 30%, L2: 45%, L3: 60%, L4: 75%, L5: 90%)\n) {\n  $temp: ();\n\n  @each $color in $colors {\n\n    $temp: map-merge($temp, ('#{$color}': map-get($tokens, $color)));\n\n    @each $shade, $percentage in $dark_shades {\n      $temp: map-merge(\n        $temp,\n        ('#{$color}_#{$shade}': mix(black, map-get($tokens, $color), $percentage))\n      );\n    }\n\n    @each $shade, $percentage in $light_shades {\n      $temp: map-merge(\n        $temp,\n        ('#{$color}_#{$shade}': mix(white, map-get($tokens, $color), $percentage))\n      );\n    }\n  }\n\n  @return $temp;\n};\n\n$palette: delta-shades($palette);",".grid-container {\n  [class*='rsp'] {\n    float: left;\n    flex-wrap: wrap;\n\n    &[class*='__centered']{\n      text-align: center;\n\n    }\n     \n    &[class*='__right']{\n      float: right;\n\n    }\n  }\n  [class*='rsp'] {\n    @media screen and (min-width: 480px) {\n      &[class*='__xs100'] {\n        width: 100%;\n      }\n      &[class*='__xs75'] {\n        width: 75%;\n\n          &[class*='__centered']{\n          margin-left: 12.5%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__xs66'] {\n        width: 66.66666667%;\n \n        &[class*='__centered']{\n          margin-left: 16.666666665%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__xs50'] {\n        width: 50%;\n        \n        &[class*='__centered']{\n          margin-left: 25%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__xs33'] {\n        width: 33.33333333%;\n        \n        &[class*='__centered']{\n          margin-left: 33.33333333%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__xs25'] {\n        width: 25%;\n        \n        &[class*='__centered']{\n          margin-left: 37.5%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n    }\n\n    @media screen and (min-width: 768px) {\n      &[class*='__sm100'] {\n        width: 100%;\n      }\n      &[class*='__sm75'] {\n        width: 75%;\n\n        &[class*='__centered']{\n          margin-left: 12.5%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__sm66'] {\n        width: 66.66666667%;\n\n        &[class*='__centered']{\n          margin-left: 16.666666665%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__sm50'] {\n        width: 50%;\n        \n        &[class*='__centered']{\n          margin-left: 25%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__sm33'] {\n        width: 33.33333333%;\n        \n        &[class*='__centered']{\n          margin-left: 33.33333333%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__sm25'] {\n        width: 25%;\n        \n        &[class*='__centered']{\n          margin-left: 37.5%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n    }\n\n    @media screen and (min-width: 992px) {\n      &[class*='__md100'] {\n        width: 100%;\n      }\n      &[class*='__md75'] {\n        width: 75%;\n\n        &[class*='__centered']{\n          margin-left: 12.5%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__md66'] {\n        width: 66.66666667%;\n\n        &[class*='__centered']{\n          margin-left: 16.666666665%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__md50'] {\n        width: 50%;\n        \n        &[class*='__centered']{\n          margin-left: 25%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__md33'] {\n        width: 33.33333333%;\n        \n        &[class*='__centered']{\n          margin-left: 33.33333333%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__md25'] {\n        width: 25%;\n        \n        &[class*='__centered']{\n          margin-left: 37.5%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n    }\n\n    @media screen and (min-width: 1200px) {\n      &[class*='__lg100'] {\n        width: 100%;\n      }\n      &[class*='__lg75'] {\n        width: 75%;\n\n        &[class*='__centered']{\n          margin-left: 12.5%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__lg66'] {\n        width: 66.66666667%;\n\n        &[class*='__centered']{\n          margin-left: 16.666666665%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__lg50'] {\n        width: 50%;\n        \n        &[class*='__centered']{\n          margin-left: 25%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__lg33'] {\n        width: 33.33333333%;\n        \n        &[class*='__centered']{\n          margin-left: 33.33333333%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__lg25'] {\n        width: 25%;\n        \n        &[class*='__centered']{\n          margin-left: 37.5%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n    }\n\n    @media screen and (min-width: 1440px) {\n      &[class*='__xl100'] {\n        width: 100%;\n      }\n      &[class*='__xl75'] {\n        width: 75%;\n\n        &[class*='__centered']{\n          margin-left: 12.5%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__xl66'] {\n        width: 66.66666667%;\n\n        &[class*='__centered']{\n          margin-left: 16.666666665%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__xl50'] {\n        width: 50%;\n        \n        &[class*='__centered']{\n          margin-left: 25%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__xl33'] {\n        width: 33.33333333%;\n        \n        &[class*='__centered']{\n          margin-left: 33.33333333%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n      &[class*='__xl25'] {\n        width: 25%;\n        \n        &[class*='__centered']{\n          margin-left: 37.5%;\n\n          @supports (display: flex) {\n            margin-left: 0;\n          }\n        }\n      }\n    }\n\n  }\n}","@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');\n@import '_colors.scss';\n@import '_layout.scss';\n@import '_responsive.scss';\n\nbody{\n  color: $black;\n  font-family: $font-body;\n  overflow-y: auto;\n  position: relative;\n}\n\n#page-wrapper{\n  white-space: nowrap;\n  display:block;\n}\n\na{\n  color: $primary-orange;\n\n  &:hover{\n    text-decoration: underline;\n  }\n\n  &.--negative{\n    color: $white;\n  }\n}\n\n.input-error{\n  color: $secondary-pink1;\n  padding: 0 .5rem;\n  display: block;\n}\n::selection {\n  color: $white;\n  background: $primary-blue2;\n}\n.form-actions{\n  padding: 1rem 0;\n  text-align: right;\n}\n// .secondary-title{\n//   font-size: 1.125rem;\n//   font-weight: 700;\n//   color:  $grey-light;\n//   margin-bottom: 1rem;\n//   text-transform: uppercase;\n// }\n// .primary-title{\n//   font-size: 1.5rem;\n//   font-weight: 700;\n//   color: $black;\n//   margin-bottom: 2.5rem;\n// }\n\n.--visible{\n  display: inherit;\n}\n\n.--hidden{\n  display: none;\n}","@import './_colors.scss';\n//@import './_gutters.scss';\n\n.input-group{\n  margin: 0 .5rem 1rem;\n  outline: none;\n  position: relative;\n  box-shadow: none;\n  cursor: pointer;\n  \n  &__input{\n    transition: all 300ms ease 0s;\n    font-size: 1.125rem;\n    line-height: 1.375rem;\n    padding: .5rem 1rem;\n    box-sizing: border-box;\n    height: 4rem;\n    width: 100%;\n    color: $black;\n    border: 2px solid $black;\n\n    &:focus,\n    &:not(:placeholder-shown){\n      border: 4px solid $black;\n      padding-top: 1.5rem;\n\n      & + .input-group__label-wrapper .input-group__label {\n        transform: translateY(-110%);\n        font-size: .75rem;\n        opacity: .75;\n        color: $black;\n        top: 1.5rem;\n      }\n    }\n\n    &::placeholder{\n      color: transparent;\n    }\n  }\n\n  &__optional-label,\n  &__label{\n    font-size: 0.75rem;\n    line-height: .75rem;\n    position: absolute;\n  }\n  \n  &:not(select) .input-group__label{\n    top: 1.75rem;\n    left: 1rem;\n    color: $grey-dark;\n    font-size: 1.125rem;\n    transition: all 300ms ease 0s;\n  }\n  \n  &__optional-label{\n    color: $primary-orange;\n    text-transform: uppercase;\n    top: .75rem;\n    right: 1rem;\n  }\n\n  &[disabled], [disabled]{\n    background-color: $grey-light;\n    color: $grey-dark;\n    cursor: not-allowed;\n    pointer-events: none;\n\n    &:focus,\n    &:not(:placeholder-shown){\n      border-width: 2px;\n    }\n\n    & + .input-group__label-wrapper .input-group__optional-label{\n      color: $black;\n    }\n  }\n\n  &__input:required + .input-group__label + .input-group__optional-label{\n    display: none;\n  }\n\n  &__error{\n    font-weight: 700;\n    display: none;\n  }\n\n  &.--error{\n\n    .input-group{\n      &__input,\n      &__optional-label{\n        color: $secondary-pink1;\n        border-color: $secondary-pink1;\n      }\n    }\n    & .input-group__error {\n      display: block;\n      color: $secondary-pink2;\n      text-align: left;\n      margin-bottom: 1rem;\n      padding-left: 0.25rem;\n    }\n  }\n\n  .textarea-input,\n  .date-input{\n    font-family: $font-body;\n  }\n\n  .textarea-input{\n    height: 8rem;\n    max-width: 100%;\n    min-width: 100%;\n  }\n\n  //SIZES\n  &--xl{\n    margin: 0 1rem 1.5rem;\n    \n    .input-group__input {\n      font-size: 1.75rem;\n      line-height: 2rem;\n      padding: 1.5rem 1rem 0;\n      height: 5rem;\n\n      &:focus,\n      &:not(:placeholder-shown){\n        padding-top: 1.5rem;\n  \n        & + .input-group__label-wrapper .input-group__label {\n          top: 2.25rem;\n          font-size: 1rem;\n        }\n      }\n    }\n  \n    .input-group__optional-label,\n    .input-group__label{\n      font-size: 1.75rem;\n      line-height: 1.75rem;\n    }\n  \n    .input-group__label{\n      margin-bottom: .75rem;\n    }\n  \n    .input-group__optional-label{\n      padding-right: .25rem;\n    }\n    .input-group__error{\n      font-size:1rem;\n    }\n  }\n}","@import '_colors.scss';\n\n.input-group {\n  input[type=\"radio\"]\n  {\n    position: absolute;\n    opacity:0;\n    bottom: 0;\n    left: 50%;\n    &:checked + .btn-group__button{\n      color: $white;\n      background: $black;\n    }\n  }\n  .btn-group{\n    &__buttons{\n      display: inline-block;\n      font-size: 0;\n      .btn-group__button-container{\n        display: inline-block;\n        cursor: pointer;\n        box-sizing: border-box;\n        position: relative;\n\n        &:first-child .btn-group__button{\n          border-top-left-radius: 1.5rem;\n          border-bottom-left-radius: 1.5rem;\n          border-left-style: solid;\n        }\n        &:last-child .btn-group__button{\n          border-top-right-radius: 1.5rem;\n          border-bottom-right-radius: 1.5rem;\n        }\n        .btn-group__button{\n          background: $white;\n          -webkit-appearance: none;\n          font-size: 12px;\n          font-weight: 700;\n          border: 2px solid $black;\n          border-left-style: none;\n          outline: 0;\n          cursor: pointer;\n          padding: 4px 10px;\n          display: block;\n          background: $white;\n\n          &:hover{\n            background: $grey-dark;\n            color: $white;\n          }\n        }\n      }\n    }\n  }\n}\n\n.button-group-input-group {\n  .input-group__label{\n    font-size: 14px;\n    color: map-get($palette, color-grey);\n    display: inline-block;\n    &:after{\n      content: ':';\n      margin-right: 10px;\n    }\n  }\n}","@import '_colors.scss';\n\n.checkbox {\n  display: block;\n  position: relative;\n  padding-left: 2rem;\n  line-height: 1.5rem;\n  height: 1.5rem;\n  margin: .75rem .25rem .5rem 0;\n  cursor: pointer;\n  user-select: none;\n  & > * {\n    pointer-events: none;\n  }\n  &:hover{\n    .checkbox__input:not(:disabled) {\n      & ~ .checkbox__checkmark {\n        background-color: $grey-dark;\n        border-color: $black;\n      }\n    }\n  }\n  .checkbox__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    bottom: 0;\n    left: 0;\n    &:disabled {\n      & ~ .checkbox__checkmark {\n        border: 2px solid map-get($palette, color-grey);\n        background: $grey-light;\n        &:after {\n          border-color: $grey-light;\n        }\n      }\n      &:checked {\n        &  ~ .checkbox__checkmark {\n          border: 2px solid map-get($palette, color-grey);\n          background: map-get($palette, color-grey);\n          &:after {\n            border-color: $white;\n          }\n        }\n      }\n    }\n    &:checked {\n      &~ .checkbox__checkmark {\n        background-color: $black;\n        border-color: $black;\n        &:after {\n          display: block;\n        }\n      }\n    }\n  }\n  .checkbox__checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1.25rem;\n    width: 1.25rem;\n    border: 2px solid $black;\n    background: $white;\n    border-radius: 2px;\n    box-sizing: border-box;\n    &:after {\n      -webkit-transform: rotate(45deg);\n      border: solid $white;\n      border-width: 0 2px 2px 0;\n      content: \"\";\n      height: 1rem;\n      left: .25rem;\n      position: absolute;\n      top: -2px;\n      transform: rotate(45deg);\n      width: .5rem;\n    }\n  }\n}\n\n","@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');\n@import 'reset.scss';\n@import 'base.scss';\n@import 'inputs.scss';\n@import 'input-radio.scss';\n@import 'checkbox.scss';\n\n/***************RESET**************/\n*,\n*:after,\n*:before {\n  box-sizing: border-box;\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n  border: 0;\n\tfont-size: 100%;\n\tline-height: 1.5rem;\n\tvertical-align: baseline;\n}\nhtml,body{\n  height: 100%;\n  min-height: 100%;\n  width: 100%;\n}\nbody{\n  color: $black;\n  font-family: $font-body;\n  overflow-y: auto;\n  position: relative;\n}\n#page-wrapper{\n  white-space: nowrap;\n  display:block;\n}\n\na{\n  color: $primary-orange;\n\n  &:hover{\n    text-decoration: underline;\n  }\n\n  &.--negative{\n    color: $white;\n  }\n}\n\n.input-error{\n  color: $secondary-pink1;\n  padding: 0 .5rem;\n  display: block;\n}\n::selection {\n  color: $white;\n  background: $primary-blue2;\n}\n.form-actions{\n  padding: 1rem 0;\n  text-align: right;\n}\n// .secondary-title{\n//   font-size: 1.125rem;\n//   font-weight: 700;\n//   color:  $grey-light;\n//   margin-bottom: 1rem;\n//   text-transform: uppercase;\n// }\n// .primary-title{\n//   font-size: 1.5rem;\n//   font-weight: 700;\n//   color: $black;\n//   margin-bottom: 2.5rem;\n// }\n\n.--visible{\n  display: inherit;\n}\n\n.--hidden{\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/common/view/styles/globals.scss":
/*!*********************************************!*\
  !*** ./src/common/view/styles/globals.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./globals.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/common/view/styles/globals.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_globals_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_globals_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 			["./src/browser/view/entrypoints/index.js","vendors"]
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