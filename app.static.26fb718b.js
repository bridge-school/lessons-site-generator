(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(4);

var _app = __webpack_require__(5);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Render your app
if (typeof document !== "undefined") {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate;

  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById("root"));
  };

  // Render!
  render(_app2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept("./components/app", function () {
      render(require("./components/app").default);
    });
  }
}

// Export your top level component as JSX (for static rendering)


// Your top level component
exports.default = _app2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactStaticRoutes = __webpack_require__(6);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(17);

__webpack_require__(18);

__webpack_require__(19);

var _navbar = __webpack_require__(20);

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_navbar2.default, null),
      _react2.default.createElement(
        "div",
        { className: "content" },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _module = __webpack_require__(8);

var _module2 = _interopRequireDefault(_module);

var _modules = __webpack_require__(11);

var _modules2 = _interopRequireDefault(_modules);

var _about = __webpack_require__(14);

var _about2 = _interopRequireDefault(_about);

var _ = __webpack_require__(16);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Template Imports


// Template Map
var templateMap = {
  t_0: _module2.default,
  t_1: _modules2.default,
  t_2: _about2.default,
  t_3: _2.default

  // Template Tree
};var templateTree = { c: { "404": { t: "t_3" }, "modules": { c: { "1-Javascript-General-Topics": { c: { "functions": { t: "t_0" }, "immutability": { t: "t_0" }, "javascript-interpreter": { t: "t_0" }, "js-eventloop": { t: "t_0" }, "promises": { t: "t_0" } } }, "2-Working-With-Arrays": { c: { "array-filter": { t: "t_0" }, "array-map": { t: "t_0" }, "array-reduce": { t: "t_0" } } }, "3-Functional-Programming": { c: { "functional-programming": { t: "t_0" } } }, "4-Observables": { c: { "observable-switchmap-vs-mergemap": { t: "t_0" }, "observables-create": { t: "t_0" }, "observables-intro": { t: "t_0" } } }, "5-React": { c: { "react-component": { t: "t_0" }, "react-container": { t: "t_0" }, "react-intro": { t: "t_0" }, "react-lifecycles": { t: "t_0" }, "react-outline": { t: "t_0" }, "react-summary": { t: "t_0" } } }, "6-Redux": { c: { "redux-action-reducer": { t: "t_0" }, "redux-connect": { t: "t_0" }, "redux-hello": { t: "t_0" }, "redux-intro": { t: "t_0" }, "redux-logging": { t: "t_0" }, "redux-merge": { t: "t_0" }, "redux-store": { t: "t_0" }, "redux-thunk": { t: "t_0" } } }, "7-Git": { c: { "git-branch-stage-commit": { t: "t_0" }, "git-cheatsheet": { t: "t_0" }, "git-fork": { t: "t_0" }, "git-intro": { t: "t_0" }, "git-rebase": { t: "t_0" } } }, "8-Other": { c: { "resources": { t: "t_0" }, "set-up-node": { t: "t_0" }, "tips-and-tricks": { t: "t_0" } } } } }, "/": { t: "t_1" }, "about": { t: "t_2" } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Button = __webpack_require__(9);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.getRouteProps)(function (_ref) {
  var module = _ref.module;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _reactStatic.Link,
      { to: "/" },
      _react2.default.createElement(
        _Button.Button,
        { stroked: true },
        "Back to Modules"
      )
    ),
    _react2.default.createElement("br", null),
    _react2.default.createElement(
      "h3",
      null,
      module.title
    ),
    _react2.default.createElement("p", { dangerouslySetInnerHTML: { __html: module.body } })
  );
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("rmwc/Button");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _lodash = __webpack_require__(12);

var _footer = __webpack_require__(13);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var getModuleFromPath = function getModuleFromPath(modules, modulePath) {
  return modules.find(function (bridgeModule) {
    return bridgeModule.path === modulePath;
  });
};

var convertFilePathToJSON = function convertFilePathToJSON(modules, filePath) {
  var acc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var DELIMITER = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";

  if (!filePath) {
    return acc;
  }

  var _filePath$split = filePath.split(DELIMITER),
      _filePath$split2 = _toArray(_filePath$split),
      childDir = _filePath$split2[0],
      nestedPath = _filePath$split2.slice(1);

  if (childDir) {
    if (nestedPath.length > 1) {
      return _extends({}, acc, _defineProperty({}, childDir, _extends({}, convertFilePathToJSON(modules, nestedPath.join(DELIMITER), acc, DELIMITER))));
    }

    // nestedPath.length === <= 1

    var fullPath = [childDir].concat(nestedPath).join(DELIMITER);
    var remainingPath = nestedPath.join(DELIMITER);

    var leaf = convertFilePathToJSON(modules, remainingPath, (0, _lodash.get)(acc, childDir, {}), DELIMITER);

    return _extends({}, acc, _defineProperty({}, childDir, (0, _lodash.merge)(leaf, nestedPath.length ? _defineProperty({}, remainingPath, getModuleFromPath(modules, fullPath)) // nestedPath === 1
    : getModuleFromPath(modules, fullPath) // nestedPath === 0
    )));
  }

  return acc;
};

var getFileTree = function getFileTree(modules) {
  return modules.map(function (bridgeModule) {
    return bridgeModule.path;
  }).reduce(function (acc, next) {
    return _extends({}, acc, convertFilePathToJSON(modules, next, acc));
  }, {});
};

var getModuleLink = function getModuleLink(bridgeModule) {
  var withPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var DELIMITER = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/";
  return (withPrefix ? ["modules"] : []).concat([bridgeModule.path]).join(DELIMITER);
};

var makeModuleLink = function makeModuleLink(bridgeModule) {
  return _react2.default.createElement(
    "li",
    { style: { listStyle: "none" }, key: bridgeModule.id },
    _react2.default.createElement(
      _reactStatic.Link,
      { to: getModuleLink(bridgeModule) },
      bridgeModule.title
    )
  );
};

var makeModuleLinks = function makeModuleLinks(modules) {
  return modules.map(makeModuleLink);
};

var makeModuleTree = function makeModuleTree(rootModulesWithChildren) {
  return Object.entries(rootModulesWithChildren).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        rootModuleKey = _ref3[0],
        rootModule = _ref3[1];

    if (rootModule.title) {
      // if the module is a leaf in the tree, don't recurse
      return makeModuleLink(rootModule);
    }

    var rootModuleName = /^\d+/.test(rootModuleKey) ? rootModuleKey.split("-").slice(1) // name started with number; remove first chunk
    .join(" ") // replace what would have been dashes with spaces
    : rootModuleKey;

    return _react2.default.createElement(
      "li",
      { style: { listStyle: "none" }, key: rootModuleKey },
      rootModuleName,
      " ",
      _react2.default.createElement(
        "ul",
        null,
        makeModuleTree(rootModule)
      )
    );
  });
};

var getBarrenRootModules = function getBarrenRootModules(modules) {
  return Object.entries(getFileTree(modules))
  // eslint-disable-next-line no-unused-vars
  .filter(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        value = _ref5[1];

    return !!value.title;
  }) // TODO: match to whole interface (check for id, path, contents, data, etc)
  // eslint-disable-next-line no-unused-vars
  .map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        _ = _ref7[0],
        moduleMetadata = _ref7[1];

    return moduleMetadata;
  });
}; // only keep the module metadata

var getRootModulesWithChildren = function getRootModulesWithChildren(modules) {
  var moduleTree = getFileTree(modules);

  return _lodash.merge.apply(undefined, _toConsumableArray(Object.entries(moduleTree)
  // eslint-disable-next-line no-unused-vars
  .filter(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
        key = _ref9[0],
        value = _ref9[1];

    return !value.title;
  }) // TODO: match to whole interface (check for id, path, contents, data, etc)
  // eslint-disable-next-line no-unused-vars
  .map(function (_ref10) {
    var _ref11 = _slicedToArray(_ref10, 2),
        moduleKey = _ref11[0],
        _ = _ref11[1];

    return _defineProperty({}, moduleKey, (0, _lodash.get)(moduleTree, moduleKey, {}));
  })));
};

var makeModuleList = function makeModuleList(modules) {
  return _react2.default.createElement(
    "ul",
    null,
    makeModuleLinks(getBarrenRootModules(modules)),
    makeModuleTree(getRootModulesWithChildren(modules))
  );
};

exports.default = (0, _reactStatic.getRouteProps)(function (_ref13) {
  var modules = _ref13.modules;
  return _react2.default.createElement(
    "div",
    null,
    makeModuleList(modules),
    _react2.default.createElement(_footer2.default, null)
  );
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'p',
        { style: {
            float: 'left',
            width: '100%',
            textAlign: 'center'
          } },
        'Feedback? Let us know at',
        _react2.default.createElement(
          'a',
          { style: { paddingLeft: '5px' }, href: 'mailto:hello@bridgeschool.io' },
          'hello@bridgeschool.io'
        )
      );
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

__webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.getRouteProps)(function (_ref) {
  var licenses = _ref.licenses;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "p",
      null,
      "What is Bridge?"
    ),
    _react2.default.createElement(
      "blockquote",
      null,
      "Bridge brings together people who believe that we can and should remove barriers preventing members of marginalized groups from participating fully and equally in the technology industry. We do this by skilling up and supporting women via a free-for-students, 11 week front-end development course in Toronto. In small classes, and through hands-on project-based work, we improve junior developer\u2019s technical skills and greatly increase their confidence. We leverage the desire of more advanced developers to instruct, providing a way to improve their soft skills through teaching and mentorship. If your question is: \u201CHow do I foster a more diverse team?\u201D Bridge is the answer."
    ),
    _react2.default.createElement(
      "p",
      {
        style: {
          marginBottom: "25%",
          textAlign: "center"
        }
      },
      "Visit ",
      _react2.default.createElement(
        "a",
        { href: "//bridgeschool.io" },
        "bridgeschool.io"
      ),
      " for more, or contact",
      " ",
      _react2.default.createElement(
        "a",
        { href: "mailto://hello@bridgeschool.io" },
        "hello@bridgeschool.io"
      ),
      " with questions."
    ),
    _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: licenses.content } }),
    _react2.default.createElement(
      "div",
      null,
      "(This website and the project behind producing it are also licensed under a Creative Commons Attribution 4.0 International License)"
    )
  );
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "404 - Oh no's! We couldn't find that page :("
    )
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("material-components-web/dist/material-components-web.css");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Toolbar = __webpack_require__(21);

__webpack_require__(22);

var _logo = __webpack_require__(23);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _Toolbar.Toolbar,
    null,
    _react2.default.createElement(
      _Toolbar.ToolbarRow,
      null,
      _react2.default.createElement(
        _Toolbar.ToolbarSection,
        { alignStart: true, className: "brand" },
        _react2.default.createElement(_logo2.default, { width: 48, height: 48 })
      ),
      _react2.default.createElement(
        _Toolbar.ToolbarSection,
        { className: "navigation" },
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            _reactStatic.Link,
            { to: "/" },
            "Modules"
          ),
          _react2.default.createElement(
            _reactStatic.Link,
            { to: "/about" },
            "About"
          )
        )
      )
    )
  );
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("rmwc/Toolbar");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({ width: "1205", height: "863", viewBox: "0 0 1205 863", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props), _react2.default.createElement("title", null, "white bridge logo"), _react2.default.createElement("desc", null, "white bridge logo"), _react2.default.createElement("use", { xlinkHref: "#a", transform: "translate(0 485.01)", fill: "#FAFAFA" }), _react2.default.createElement("use", { xlinkHref: "#b", transform: "translate(246.1 572.65)", fill: "#FAFAFA" }), _react2.default.createElement("use", { xlinkHref: "#c", transform: "translate(412.5 486)", fill: "#FAFAFA" }), _react2.default.createElement("use", { xlinkHref: "#d", transform: "translate(522.1 486)", fill: "#FAFAFA" }), _react2.default.createElement("use", { xlinkHref: "#e", transform: "translate(768.2 573.64)", fill: "#FAFAFA" }), _react2.default.createElement("use", { xlinkHref: "#f", transform: "translate(1013.3 573.64)", fill: "#FAFAFA" }), _react2.default.createElement("g", null, _react2.default.createElement("use", { xlinkHref: "#g", transform: "translate(198.3 1)", fill: "#FAFAFA" }), _react2.default.createElement("use", { xlinkHref: "#h", transform: "translate(859.9)", fill: "#FAFAFA" }), _react2.default.createElement("use", { xlinkHref: "#i", transform: "translate(382.6)", fill: "#FAFAFA" }), _react2.default.createElement("use", { xlinkHref: "#j", transform: "translate(381.6 106.56)", fill: "#FAFAFA" })), _react2.default.createElement("defs", null, _react2.default.createElement("path", { id: "a", d: "M57.792 297.776H0V0h57.792v110.546c8.967-10.955 29.892-21.91 50.816-21.91 59.785 0 92.666 48.799 92.666 107.557 0 58.759-33.878 106.562-92.666 106.562-21.92 0-42.845-10.955-50.816-21.91v16.931zm0-68.718c6.974 13.943 21.92 23.902 37.863 23.902 30.889 0 48.824-24.898 48.824-57.763 0-32.864-17.935-57.762-48.824-57.762-15.942 0-31.885 9.959-37.863 23.902v67.721z" }), _react2.default.createElement("path", { id: "b", d: "M125.547 61.746c-7.971-4.98-17.935-6.971-28.895-6.971-18.932 0-34.875 9.959-39.857 28.881v126.48H0V4.98h56.795v19.918C65.763 9.959 82.702 0 102.63 0c9.964 0 17.935 1.992 21.921 2.988l.996 58.758z" }), _react2.default.createElement("path", { id: "c", d: "M33.878 65.73C15.943 65.73 0 52.783 0 32.865 0 14.939 14.946 0 33.878 0c17.935 0 33.878 12.947 33.878 32.865-.997 19.918-16.94 32.865-33.878 32.865zm27.9 231.05H4.981V92.62h56.795v204.16z" }), _react2.default.createElement("path", { id: "d", d: "M143.483 279.849c-8.968 10.955-29.893 21.91-50.817 21.91C32.88 301.759 0 253.956 0 195.197 0 136.439 33.878 87.64 92.666 87.64c21.921 0 42.845 10.955 50.817 21.91V0h57.791v297.776h-57.791v-17.927zm0-118.512c-6.975-12.947-21.921-23.902-37.864-23.902-30.888 0-48.824 24.897-48.824 57.762s17.936 57.763 48.824 57.763c16.939 0 31.885-9.959 37.864-23.902v-67.721z" }), _react2.default.createElement("path", { id: "e", d: "M142.486 184.242c-8.967 10.955-27.899 20.914-49.82 20.914C32.882 205.156 0 157.353 0 102.578 0 47.803 33.878 0 92.666 0c22.917 0 40.853 9.959 49.82 19.918V3.984h56.795v182.25c0 69.714-42.845 102.578-100.637 102.578-52.81 0-89.676-26.889-95.655-72.701h54.803c4.982 18.923 17.935 28.882 39.856 28.882 28.896 0 43.842-16.931 43.842-49.796l.996-10.955zm0-115.524c-6.975-11.951-21.921-20.915-37.863-20.915-30.889 0-47.828 22.906-47.828 54.775s17.936 54.775 47.828 54.775c16.939 0 31.885-9.959 37.863-21.91V68.717z" }), _react2.default.createElement("path", { id: "f", d: "M190.314 142.414c-7.972 42.824-39.857 71.706-90.673 71.706C39.856 214.12 0 171.296 0 107.558 0 44.816 40.853 0 98.644 0c60.781 0 92.666 40.832 92.666 101.582v16.931H54.802c1.993 30.873 18.932 48.799 43.842 48.799 18.932 0 33.878-7.967 37.864-25.893l53.806.995zM56.795 84.652h78.716c0-21.91-12.953-37.844-36.867-37.844-21.92 0-37.863 12.946-41.849 37.844z" }), _react2.default.createElement("path", { id: "g", d: "M85.69 302.755c0 8.963 4.983 13.943 13.95 13.943h46.832v42.824H99.641c-36.867 0-62.774-23.902-62.774-60.75V214.12c0-8.964-4.982-13.943-13.95-13.943H0v-43.82h23.914c8.967 0 13.95-4.979 13.95-13.943V60.75C37.863 22.906 63.77 0 100.636 0h45.835v42.824H99.641c-8.968 0-13.95 4.98-13.95 13.943v80.668c0 20.914-9.964 31.869-22.917 39.836 12.953 7.967 22.917 18.922 22.917 39.836v85.648z" }), _react2.default.createElement("path", { id: "h", d: "M60.78 217.107c0-20.914 9.965-31.869 22.918-39.836-12.953-7.967-22.917-18.922-22.917-39.836V55.771c0-8.963-4.982-13.943-13.95-13.943H0V0h45.835c36.867 0 62.773 23.902 62.773 60.75v79.673c0 8.963 4.982 13.942 13.95 13.942h23.914v44.816h-23.914c-8.968 0-13.95 4.98-13.95 13.943v84.652c0 37.844-25.906 60.75-62.773 60.75H0v-42.824h46.831c8.968 0 13.95-4.98 13.95-13.943v-84.652z" }), _react2.default.createElement("path", { id: "i", d: "M220.206 0H0v41.828H439.415V0H220.206z" }), _react2.default.createElement("path", { id: "j", d: "M374.649 210.136v-59.754C374.649 65.73 307.89 0 222.199 0h-3.986c-85.691 0-152.45 65.73-152.45 150.382v59.754H0v42.824h107.612V151.378c0-60.75 48.824-108.554 110.601-108.554h3.986c61.777 0 110.601 47.803 110.601 108.554V252.96h107.612v-42.824h-65.763z" })));
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.26fb718b.js.map