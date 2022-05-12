"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.png */ "./src/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Exo+2:200i);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: 'Exo 2', sans-serif;\n  font-size: 10px;\n\n  --font-color: #5400c7;\n  --neon-text-color: #f40;\n  --neon-border-color: #08f;\n  --shadow-color: #a01276;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")  no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  padding: 10px 50px;\n}\n\nbutton {\n  border: var(--font-color) 1px solid;\n  box-shadow: 3px 3px var(--font-color);\n  color: var(--font-color);\n  font-weight: bold;\n  height: min-content;\n  padding: 2px;\n}\n\nh1,\nh2,\ninput {\n  margin-bottom: 20px;\n  width: 100%;\n}\n\nh1 {\n  color: white;\n  font-style: italic;\n  text-align: center;\n  border: 0.4rem solid white;\n  border-radius: 2rem;\n  text-transform: uppercase;\n  animation: flicker 1.5s infinite alternate;\n}\n\nh1::-moz-selection {\n  background-color: var(--neon-border-color);\n  color: var(--neon-text-color);\n}\n\nh1::selection {\n  background-color: var(--neon-border-color);\n  color: var(--neon-text-color);\n}\n\nh1:focus {\n  outline: none;\n}\n\n/* Animate neon flicker */\n@keyframes flicker {\n  0%,\n  19%,\n  21%,\n  23%,\n  25%,\n  54%,\n  56%,\n  100% {\n    text-shadow:\n      -0.2rem -0.2rem 1rem white,\n      0.2rem 0.2rem 1rem white,\n      0 0 2rem var(--neon-text-color),\n      0 0 4rem var(--neon-text-color),\n      0 0 6rem var(--neon-text-color),\n      0 0 8rem var(--neon-text-color),\n      0 0 10rem var(--neon-text-color);\n    box-shadow:\n      0 0 0.5rem white,\n      inset 0 0 0.5rem white,\n      0 0 2rem var(--neon-border-color),\n      inset 0 0 2rem var(--neon-border-color),\n      0 0 4rem var(--neon-border-color),\n      inset 0 0 4rem var(--neon-border-color);\n  }\n\n  20%,\n  24%,\n  55% {\n    text-shadow: none;\n    box-shadow: none;\n  }\n}\n\nh2 {\n  color: white;\n  text-shadow:\n    0 0 7px var(--shadow-color),\n    0 0 10px var(--shadow-color),\n    0 0 21px var(--shadow-color),\n    0 0 42px white,\n    0 0 82px white,\n    0 0 92px white,\n    0 0 102px white,\n    0 0 151px white;\n}\n\ninput {\n  background-color: lightgrey;\n  border: lightgrey 2px solid;\n  border-radius: 4px;\n  color: var(--font-color);\n  font-size: medium;\n  margin: 10px 0;\n}\n\nsection {\n  align-items: flex-start;\n}\n\nul {\n  background-color: var(--font-color);\n  border: white 2px solid;\n  border-radius: 8px;\n  color: white;\n  font-weight: bold;\n  min-height: 25px;\n  padding: 8px;\n  width: 100%;\n}\n\nli {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  font-size: medium;\n  list-style-type: none;\n  border-radius: 4px;\n  padding: 4px;\n}\n\nli:nth-child(even) {\n  background-color: lightgrey;\n  color: var(--font-color);\n}\n\n.flex-column {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.form-content {\n  background-color: var(--font-color);\n  border: white 2px solid;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  padding: 8px;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.justify-end {\n  align-self: flex-end;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;EACE,gCAAgC;EAChC,eAAe;;EAEf,qBAAqB;EACrB,uBAAuB;EACvB,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kFAAgE;EAChE,8BAA8B;EAC9B,2BAA2B;EAC3B,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,qCAAqC;EACrC,wBAAwB;EACxB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;AACd;;AAEA;;;EAGE,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,0BAA0B;EAC1B,mBAAmB;EACnB,yBAAyB;EACzB,0CAA0C;AAC5C;;AAEA;EACE,0CAA0C;EAC1C,6BAA6B;AAC/B;;AAEA;EACE,0CAA0C;EAC1C,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA,yBAAyB;AACzB;EACE;;;;;;;;IAQE;;;;;;;sCAOkC;IAClC;;;;;;6CAMyC;EAC3C;;EAEA;;;IAGE,iBAAiB;IACjB,gBAAgB;EAClB;AACF;;AAEA;EACE,YAAY;EACZ;;;;;;;;mBAQiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,kBAAkB;EAClB,wBAAwB;EACxB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":["@import url(https://fonts.googleapis.com/css?family=Exo+2:200i);\n\n:root {\n  font-family: 'Exo 2', sans-serif;\n  font-size: 10px;\n\n  --font-color: #5400c7;\n  --neon-text-color: #f40;\n  --neon-border-color: #08f;\n  --shadow-color: #a01276;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: url(./background.png)  no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  padding: 10px 50px;\n}\n\nbutton {\n  border: var(--font-color) 1px solid;\n  box-shadow: 3px 3px var(--font-color);\n  color: var(--font-color);\n  font-weight: bold;\n  height: min-content;\n  padding: 2px;\n}\n\nh1,\nh2,\ninput {\n  margin-bottom: 20px;\n  width: 100%;\n}\n\nh1 {\n  color: white;\n  font-style: italic;\n  text-align: center;\n  border: 0.4rem solid white;\n  border-radius: 2rem;\n  text-transform: uppercase;\n  animation: flicker 1.5s infinite alternate;\n}\n\nh1::-moz-selection {\n  background-color: var(--neon-border-color);\n  color: var(--neon-text-color);\n}\n\nh1::selection {\n  background-color: var(--neon-border-color);\n  color: var(--neon-text-color);\n}\n\nh1:focus {\n  outline: none;\n}\n\n/* Animate neon flicker */\n@keyframes flicker {\n  0%,\n  19%,\n  21%,\n  23%,\n  25%,\n  54%,\n  56%,\n  100% {\n    text-shadow:\n      -0.2rem -0.2rem 1rem white,\n      0.2rem 0.2rem 1rem white,\n      0 0 2rem var(--neon-text-color),\n      0 0 4rem var(--neon-text-color),\n      0 0 6rem var(--neon-text-color),\n      0 0 8rem var(--neon-text-color),\n      0 0 10rem var(--neon-text-color);\n    box-shadow:\n      0 0 0.5rem white,\n      inset 0 0 0.5rem white,\n      0 0 2rem var(--neon-border-color),\n      inset 0 0 2rem var(--neon-border-color),\n      0 0 4rem var(--neon-border-color),\n      inset 0 0 4rem var(--neon-border-color);\n  }\n\n  20%,\n  24%,\n  55% {\n    text-shadow: none;\n    box-shadow: none;\n  }\n}\n\nh2 {\n  color: white;\n  text-shadow:\n    0 0 7px var(--shadow-color),\n    0 0 10px var(--shadow-color),\n    0 0 21px var(--shadow-color),\n    0 0 42px white,\n    0 0 82px white,\n    0 0 92px white,\n    0 0 102px white,\n    0 0 151px white;\n}\n\ninput {\n  background-color: lightgrey;\n  border: lightgrey 2px solid;\n  border-radius: 4px;\n  color: var(--font-color);\n  font-size: medium;\n  margin: 10px 0;\n}\n\nsection {\n  align-items: flex-start;\n}\n\nul {\n  background-color: var(--font-color);\n  border: white 2px solid;\n  border-radius: 8px;\n  color: white;\n  font-weight: bold;\n  min-height: 25px;\n  padding: 8px;\n  width: 100%;\n}\n\nli {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  font-size: medium;\n  list-style-type: none;\n  border-radius: 4px;\n  padding: 4px;\n}\n\nli:nth-child(even) {\n  background-color: lightgrey;\n  color: var(--font-color);\n}\n\n.flex-column {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.form-content {\n  background-color: var(--font-color);\n  border: white 2px solid;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  padding: 8px;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.justify-end {\n  align-self: flex-end;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Api.js":
/*!********************!*\
  !*** ./src/Api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const scoresUrl = '/scores/';

class Api {
  constructor() {
    this.baseUrl = baseUrl;
    this.scoresUrl = scoresUrl;
  }

  sendNewGame = async (body) => fetch(this.baseUrl, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json.result)
    .catch((error) => {
      throw error;
    });

  sendScore = async (gameId, body) => fetch(`${this.baseUrl + gameId}/scores/`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json.result)
    .catch((error) => {
      throw error;
    });

  getScores = async (gameId) => fetch(`${this.baseUrl + gameId}/scores/`)
    .then((response) => response.json())
    .then((json) => json.result)
    .catch((error) => {
      throw error;
    });
}

const api = new Api();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ }),

/***/ "./src/Leaderboard.js":
/*!****************************!*\
  !*** ./src/Leaderboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScoreList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScoreList.js */ "./src/ScoreList.js");


class Leaderboard {
  #formFocus = () => {
    document.querySelector('#user-name').focus();
  };

  setup = async () => {
    this.showScores();
    this.setupRefreshButton();
    this.setupSubmitButton();
    this.#formFocus();
  };

  addScore = async (event) => {
    const self = this;
    const form = document.querySelector('#form');
    const userElement = document.querySelector('#user-name');
    const scoreElement = document.querySelector('#user-score');
    const user = (userElement.value || '').trim();
    const score = parseInt((scoreElement.value || '').trim(), 10);

    self.#formFocus();
    if (user !== '' && !Number.isNaN(score)) {
      event.preventDefault();
      form.reset();
      await _ScoreList_js__WEBPACK_IMPORTED_MODULE_0__["default"].addScore(user, parseInt(score, 10));
      self.showScores();
    }
  };

  #numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  showScore = async (ulElement, score) => {
    const formated = this.#numberWithCommas(score.score);
    ulElement.innerHTML += `<li><span>${score.user}</span><span>${formated}</span></li>`;
  };

  showScores = async () => {
    const ulElement = document.querySelector('#scores');
    ulElement.innerHTML = '';
    const list = await _ScoreList_js__WEBPACK_IMPORTED_MODULE_0__["default"].getScores();
    list.sort((a, b) => b.score - a.score + a.user.localeCompare(b.user));
    list.forEach((score) => this.showScore(ulElement, score));
  };

  setupRefreshButton = async () => {
    document.querySelector('#refresh').addEventListener('click', this.showScores);
  };

  setupSubmitButton = async () => {
    document.querySelector('#submit').addEventListener('click', this.addScore);
  };
}

const leaderboard = new Leaderboard();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leaderboard);


/***/ }),

/***/ "./src/ScoreList.js":
/*!**************************!*\
  !*** ./src/ScoreList.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api.js */ "./src/Api.js");


const gameKey = 'gameKey';
const gameName = 'RBA-game';

class ScoreList {
  constructor() {
    this.gameKey = gameKey;
    this.gameName = gameName;
    this.gameId = localStorage.getItem(this.gameKey);
    if (this.gameId == null) {
      this.createGame();
    }
  }

  createGame = async () => {
    const response = await _Api_js__WEBPACK_IMPORTED_MODULE_0__["default"].sendNewGame({ name: this.gameName });
    this.gameId = response.slice(14, 35).trim();
    localStorage.setItem(gameKey, this.gameId);
  };

  addScore = async (user, score) => {
    const newScore = { user, score };
    const result = await _Api_js__WEBPACK_IMPORTED_MODULE_0__["default"].sendScore(this.gameId, newScore);
    return result === 'Leaderboard score created correctly.';
  };

  getScores = async () => {
    if (this.gameId !== null) {
      return _Api_js__WEBPACK_IMPORTED_MODULE_0__["default"].getScores(this.gameId);
    }

    return Promise.resolve([]);
  };
}

const scoreList = new ScoreList();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scoreList);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _Leaderboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Leaderboard.js */ "./src/Leaderboard.js");



window.addEventListener('DOMContentLoaded', _Leaderboard_js__WEBPACK_IMPORTED_MODULE_1__["default"].setup);


/***/ }),

/***/ "./src/background.png":
/*!****************************!*\
  !*** ./src/background.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81e661119bde9a2edfe9.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQWtCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQsRUFBRTs7QUFFOUQ7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLGVBQWUsU0FBUztBQUMzRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0RBQW1CO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekRBOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQiwyREFBZSxHQUFHLHFCQUFxQjtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkIseUJBQXlCLHlEQUFhO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEseURBQWE7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0o7QUFDc0I7O0FBRTNDLDRDQUE0Qyw2REFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvQXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL0xlYWRlcmJvYXJkLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL1Njb3JlTGlzdC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1FeG8rMjoyMDBpKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiAnRXhvIDInLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcblxcbiAgLS1mb250LWNvbG9yOiAjNTQwMGM3O1xcbiAgLS1uZW9uLXRleHQtY29sb3I6ICNmNDA7XFxuICAtLW5lb24tYm9yZGVyLWNvbG9yOiAjMDhmO1xcbiAgLS1zaGFkb3ctY29sb3I6ICNhMDEyNzY7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSAgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBhZGRpbmc6IDEwcHggNTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogdmFyKC0tZm9udC1jb2xvcikgMXB4IHNvbGlkO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDAuNHJlbSBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYW5pbWF0aW9uOiBmbGlja2VyIDEuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG5oMTo6LW1vei1zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmVvbi1ib3JkZXItY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW5lb24tdGV4dC1jb2xvcik7XFxufVxcblxcbmgxOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmVvbi1ib3JkZXItY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW5lb24tdGV4dC1jb2xvcik7XFxufVxcblxcbmgxOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIEFuaW1hdGUgbmVvbiBmbGlja2VyICovXFxuQGtleWZyYW1lcyBmbGlja2VyIHtcXG4gIDAlLFxcbiAgMTklLFxcbiAgMjElLFxcbiAgMjMlLFxcbiAgMjUlLFxcbiAgNTQlLFxcbiAgNTYlLFxcbiAgMTAwJSB7XFxuICAgIHRleHQtc2hhZG93OlxcbiAgICAgIC0wLjJyZW0gLTAuMnJlbSAxcmVtIHdoaXRlLFxcbiAgICAgIDAuMnJlbSAwLjJyZW0gMXJlbSB3aGl0ZSxcXG4gICAgICAwIDAgMnJlbSB2YXIoLS1uZW9uLXRleHQtY29sb3IpLFxcbiAgICAgIDAgMCA0cmVtIHZhcigtLW5lb24tdGV4dC1jb2xvciksXFxuICAgICAgMCAwIDZyZW0gdmFyKC0tbmVvbi10ZXh0LWNvbG9yKSxcXG4gICAgICAwIDAgOHJlbSB2YXIoLS1uZW9uLXRleHQtY29sb3IpLFxcbiAgICAgIDAgMCAxMHJlbSB2YXIoLS1uZW9uLXRleHQtY29sb3IpO1xcbiAgICBib3gtc2hhZG93OlxcbiAgICAgIDAgMCAwLjVyZW0gd2hpdGUsXFxuICAgICAgaW5zZXQgMCAwIDAuNXJlbSB3aGl0ZSxcXG4gICAgICAwIDAgMnJlbSB2YXIoLS1uZW9uLWJvcmRlci1jb2xvciksXFxuICAgICAgaW5zZXQgMCAwIDJyZW0gdmFyKC0tbmVvbi1ib3JkZXItY29sb3IpLFxcbiAgICAgIDAgMCA0cmVtIHZhcigtLW5lb24tYm9yZGVyLWNvbG9yKSxcXG4gICAgICBpbnNldCAwIDAgNHJlbSB2YXIoLS1uZW9uLWJvcmRlci1jb2xvcik7XFxuICB9XFxuXFxuICAyMCUsXFxuICAyNCUsXFxuICA1NSUge1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIH1cXG59XFxuXFxuaDIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6XFxuICAgIDAgMCA3cHggdmFyKC0tc2hhZG93LWNvbG9yKSxcXG4gICAgMCAwIDEwcHggdmFyKC0tc2hhZG93LWNvbG9yKSxcXG4gICAgMCAwIDIxcHggdmFyKC0tc2hhZG93LWNvbG9yKSxcXG4gICAgMCAwIDQycHggd2hpdGUsXFxuICAgIDAgMCA4MnB4IHdoaXRlLFxcbiAgICAwIDAgOTJweCB3aGl0ZSxcXG4gICAgMCAwIDEwMnB4IHdoaXRlLFxcbiAgICAwIDAgMTUxcHggd2hpdGU7XFxufVxcblxcbmlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGJvcmRlcjogbGlnaHRncmV5IDJweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbnVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyOiB3aGl0ZSAycHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1pbi1oZWlnaHQ6IDI1cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbmxpOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5mbGV4LWNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZvcm0tY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ud2lkdGgtNTAge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLndpZHRoLTEwMCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmp1c3RpZnktZW5kIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7O0VBRWYscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrRkFBZ0U7RUFDaEUsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxxQ0FBcUM7RUFDckMsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0U7Ozs7Ozs7O0lBUUU7Ozs7Ozs7c0NBT2tDO0lBQ2xDOzs7Ozs7NkNBTXlDO0VBQzNDOztFQUVBOzs7SUFHRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1o7Ozs7Ozs7O21CQVFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUV4bysyOjIwMGkpO1xcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiAnRXhvIDInLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcblxcbiAgLS1mb250LWNvbG9yOiAjNTQwMGM3O1xcbiAgLS1uZW9uLXRleHQtY29sb3I6ICNmNDA7XFxuICAtLW5lb24tYm9yZGVyLWNvbG9yOiAjMDhmO1xcbiAgLS1zaGFkb3ctY29sb3I6ICNhMDEyNzY7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogdXJsKC4vYmFja2dyb3VuZC5wbmcpICBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcGFkZGluZzogMTBweCA1MHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiB2YXIoLS1mb250LWNvbG9yKSAxcHggc29saWQ7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG5oMSxcXG5oMixcXG5pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMC40cmVtIHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBhbmltYXRpb246IGZsaWNrZXIgMS41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbmgxOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZW9uLWJvcmRlci1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbmVvbi10ZXh0LWNvbG9yKTtcXG59XFxuXFxuaDE6OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZW9uLWJvcmRlci1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbmVvbi10ZXh0LWNvbG9yKTtcXG59XFxuXFxuaDE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogQW5pbWF0ZSBuZW9uIGZsaWNrZXIgKi9cXG5Aa2V5ZnJhbWVzIGZsaWNrZXIge1xcbiAgMCUsXFxuICAxOSUsXFxuICAyMSUsXFxuICAyMyUsXFxuICAyNSUsXFxuICA1NCUsXFxuICA1NiUsXFxuICAxMDAlIHtcXG4gICAgdGV4dC1zaGFkb3c6XFxuICAgICAgLTAuMnJlbSAtMC4ycmVtIDFyZW0gd2hpdGUsXFxuICAgICAgMC4ycmVtIDAuMnJlbSAxcmVtIHdoaXRlLFxcbiAgICAgIDAgMCAycmVtIHZhcigtLW5lb24tdGV4dC1jb2xvciksXFxuICAgICAgMCAwIDRyZW0gdmFyKC0tbmVvbi10ZXh0LWNvbG9yKSxcXG4gICAgICAwIDAgNnJlbSB2YXIoLS1uZW9uLXRleHQtY29sb3IpLFxcbiAgICAgIDAgMCA4cmVtIHZhcigtLW5lb24tdGV4dC1jb2xvciksXFxuICAgICAgMCAwIDEwcmVtIHZhcigtLW5lb24tdGV4dC1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6XFxuICAgICAgMCAwIDAuNXJlbSB3aGl0ZSxcXG4gICAgICBpbnNldCAwIDAgMC41cmVtIHdoaXRlLFxcbiAgICAgIDAgMCAycmVtIHZhcigtLW5lb24tYm9yZGVyLWNvbG9yKSxcXG4gICAgICBpbnNldCAwIDAgMnJlbSB2YXIoLS1uZW9uLWJvcmRlci1jb2xvciksXFxuICAgICAgMCAwIDRyZW0gdmFyKC0tbmVvbi1ib3JkZXItY29sb3IpLFxcbiAgICAgIGluc2V0IDAgMCA0cmVtIHZhcigtLW5lb24tYm9yZGVyLWNvbG9yKTtcXG4gIH1cXG5cXG4gIDIwJSxcXG4gIDI0JSxcXG4gIDU1JSB7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgfVxcbn1cXG5cXG5oMiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzpcXG4gICAgMCAwIDdweCB2YXIoLS1zaGFkb3ctY29sb3IpLFxcbiAgICAwIDAgMTBweCB2YXIoLS1zaGFkb3ctY29sb3IpLFxcbiAgICAwIDAgMjFweCB2YXIoLS1zaGFkb3ctY29sb3IpLFxcbiAgICAwIDAgNDJweCB3aGl0ZSxcXG4gICAgMCAwIDgycHggd2hpdGUsXFxuICAgIDAgMCA5MnB4IHdoaXRlLFxcbiAgICAwIDAgMTAycHggd2hpdGUsXFxuICAgIDAgMCAxNTFweCB3aGl0ZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgYm9yZGVyOiBsaWdodGdyZXkgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxudWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBib3JkZXI6IHdoaXRlIDJweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWluLWhlaWdodDogMjVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5saSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxubGk6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmZsZXgtY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyOiB3aGl0ZSAycHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi53aWR0aC01MCB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ud2lkdGgtMTAwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uanVzdGlmeS1lbmQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzLyc7XG5jb25zdCBzY29yZXNVcmwgPSAnL3Njb3Jlcy8nO1xuXG5jbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xuICAgIHRoaXMuc2NvcmVzVXJsID0gc2NvcmVzVXJsO1xuICB9XG5cbiAgc2VuZE5ld0dhbWUgPSBhc3luYyAoYm9keSkgPT4gZmV0Y2godGhpcy5iYXNlVXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3VsdClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KTtcblxuICBzZW5kU2NvcmUgPSBhc3luYyAoZ2FtZUlkLCBib2R5KSA9PiBmZXRjaChgJHt0aGlzLmJhc2VVcmwgKyBnYW1lSWR9L3Njb3Jlcy9gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3VsdClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KTtcblxuICBnZXRTY29yZXMgPSBhc3luYyAoZ2FtZUlkKSA9PiBmZXRjaChgJHt0aGlzLmJhc2VVcmwgKyBnYW1lSWR9L3Njb3Jlcy9gKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3VsdClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KTtcbn1cblxuY29uc3QgYXBpID0gbmV3IEFwaSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG4iLCJpbXBvcnQgc2NvcmVMaXN0IGZyb20gJy4vU2NvcmVMaXN0LmpzJztcblxuY2xhc3MgTGVhZGVyYm9hcmQge1xuICAjZm9ybUZvY3VzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLW5hbWUnKS5mb2N1cygpO1xuICB9O1xuXG4gIHNldHVwID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMuc2hvd1Njb3JlcygpO1xuICAgIHRoaXMuc2V0dXBSZWZyZXNoQnV0dG9uKCk7XG4gICAgdGhpcy5zZXR1cFN1Ym1pdEJ1dHRvbigpO1xuICAgIHRoaXMuI2Zvcm1Gb2N1cygpO1xuICB9O1xuXG4gIGFkZFNjb3JlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJyk7XG4gICAgY29uc3QgdXNlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1uYW1lJyk7XG4gICAgY29uc3Qgc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXItc2NvcmUnKTtcbiAgICBjb25zdCB1c2VyID0gKHVzZXJFbGVtZW50LnZhbHVlIHx8ICcnKS50cmltKCk7XG4gICAgY29uc3Qgc2NvcmUgPSBwYXJzZUludCgoc2NvcmVFbGVtZW50LnZhbHVlIHx8ICcnKS50cmltKCksIDEwKTtcblxuICAgIHNlbGYuI2Zvcm1Gb2N1cygpO1xuICAgIGlmICh1c2VyICE9PSAnJyAmJiAhTnVtYmVyLmlzTmFOKHNjb3JlKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIGF3YWl0IHNjb3JlTGlzdC5hZGRTY29yZSh1c2VyLCBwYXJzZUludChzY29yZSwgMTApKTtcbiAgICAgIHNlbGYuc2hvd1Njb3JlcygpO1xuICAgIH1cbiAgfTtcblxuICAjbnVtYmVyV2l0aENvbW1hcyA9ICh4KSA9PiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKTtcblxuICBzaG93U2NvcmUgPSBhc3luYyAodWxFbGVtZW50LCBzY29yZSkgPT4ge1xuICAgIGNvbnN0IGZvcm1hdGVkID0gdGhpcy4jbnVtYmVyV2l0aENvbW1hcyhzY29yZS5zY29yZSk7XG4gICAgdWxFbGVtZW50LmlubmVySFRNTCArPSBgPGxpPjxzcGFuPiR7c2NvcmUudXNlcn08L3NwYW4+PHNwYW4+JHtmb3JtYXRlZH08L3NwYW4+PC9saT5gO1xuICB9O1xuXG4gIHNob3dTY29yZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlcycpO1xuICAgIHVsRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBsaXN0ID0gYXdhaXQgc2NvcmVMaXN0LmdldFNjb3JlcygpO1xuICAgIGxpc3Quc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUgKyBhLnVzZXIubG9jYWxlQ29tcGFyZShiLnVzZXIpKTtcbiAgICBsaXN0LmZvckVhY2goKHNjb3JlKSA9PiB0aGlzLnNob3dTY29yZSh1bEVsZW1lbnQsIHNjb3JlKSk7XG4gIH07XG5cbiAgc2V0dXBSZWZyZXNoQnV0dG9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWZyZXNoJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dTY29yZXMpO1xuICB9O1xuXG4gIHNldHVwU3VibWl0QnV0dG9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkU2NvcmUpO1xuICB9O1xufVxuXG5jb25zdCBsZWFkZXJib2FyZCA9IG5ldyBMZWFkZXJib2FyZCgpO1xuXG5leHBvcnQgZGVmYXVsdCBsZWFkZXJib2FyZDtcbiIsImltcG9ydCBhcGkgZnJvbSAnLi9BcGkuanMnO1xuXG5jb25zdCBnYW1lS2V5ID0gJ2dhbWVLZXknO1xuY29uc3QgZ2FtZU5hbWUgPSAnUkJBLWdhbWUnO1xuXG5jbGFzcyBTY29yZUxpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVLZXkgPSBnYW1lS2V5O1xuICAgIHRoaXMuZ2FtZU5hbWUgPSBnYW1lTmFtZTtcbiAgICB0aGlzLmdhbWVJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZ2FtZUtleSk7XG4gICAgaWYgKHRoaXMuZ2FtZUlkID09IG51bGwpIHtcbiAgICAgIHRoaXMuY3JlYXRlR2FtZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUdhbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuc2VuZE5ld0dhbWUoeyBuYW1lOiB0aGlzLmdhbWVOYW1lIH0pO1xuICAgIHRoaXMuZ2FtZUlkID0gcmVzcG9uc2Uuc2xpY2UoMTQsIDM1KS50cmltKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ2FtZUtleSwgdGhpcy5nYW1lSWQpO1xuICB9O1xuXG4gIGFkZFNjb3JlID0gYXN5bmMgKHVzZXIsIHNjb3JlKSA9PiB7XG4gICAgY29uc3QgbmV3U2NvcmUgPSB7IHVzZXIsIHNjb3JlIH07XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnNlbmRTY29yZSh0aGlzLmdhbWVJZCwgbmV3U2NvcmUpO1xuICAgIHJldHVybiByZXN1bHQgPT09ICdMZWFkZXJib2FyZCBzY29yZSBjcmVhdGVkIGNvcnJlY3RseS4nO1xuICB9O1xuXG4gIGdldFNjb3JlcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodGhpcy5nYW1lSWQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhcGkuZ2V0U2NvcmVzKHRoaXMuZ2FtZUlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgfTtcbn1cblxuY29uc3Qgc2NvcmVMaXN0ID0gbmV3IFNjb3JlTGlzdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBzY29yZUxpc3Q7XG4iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBsZWFkZXJib2FyZCBmcm9tICcuL0xlYWRlcmJvYXJkLmpzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsZWFkZXJib2FyZC5zZXR1cCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=