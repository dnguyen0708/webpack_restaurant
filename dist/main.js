/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,*::before,*::after{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n    box-sizing: border-box;\r\n}\r\n:root{\r\n    \r\n}\r\nbody{\r\n    /* background: url(\"./img/mae-mu-Ey2Y2vAmx7Q-unsplash.jpg\"); */\r\n    background-position: center;\r\n    background-size: cover;\r\n    display: grid;\r\n    grid-template-rows: 100px 1fr 75px;\r\n    justify-items: center;\r\n    min-height: 100vh;\r\n}\r\n#header,#footer{\r\n    color:white;\r\n    font-size: 24px;\r\n    font-weight: 450;\r\n}\r\n#header{\r\n    display: flex;\r\n    justify-content: center;\r\n    gap:60px;\r\n    align-items: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n}\r\n#header div{\r\n    cursor: pointer;\r\n}\r\n#footer{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    width: 100%;\r\n    background-color: rgba(18, 18, 18, 0.2);\r\n}\r\n#content{\r\n    width:50%;\r\n}\r\n.header-home:hover,.header-contact:hover,.header-menu:hover{\r\n    text-shadow: 5px 5px 12px #A31116;\r\n}\r\n.home,.menu{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    border-radius: 50px;\r\n    min-height: 90%;\r\n}\r\n\r\n/* Home Component */\r\n.banner{\r\n    width: 80%;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.banner-title{\r\n    color:white;\r\n    font-size: 90px;\r\n    font-weight: 500;\r\n    margin: auto;\r\n    text-align: center;\r\n    text-shadow: 0px -2px 4px #fff, 0px -2px 10px \r\n        #FF3, 0px -10px 20px        \r\n        #F90, 0px -20px 40px #C33;\r\n}\r\n.banner .introText{\r\n    font-size: 50px;\r\n    font-weight: 400;\r\n    background: -webkit-linear-gradient(left,#870009,#B30041,#D7008A);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    text-align: center;\r\n}\r\n.storeInfo{\r\n    /* width: auto;*/\r\n    min-height: 100px; \r\n    background-color: rgba(18, 18, 18, 0.7);\r\n    display: flex;\r\n    gap:50px;\r\n    padding: 22px;\r\n    border-radius: 1rem;\r\n}\r\n.hours,.location{\r\n    color:#fff6da;\r\n}\r\n\r\n/* Menu components */\r\n.menu{\r\n    background-color: white;\r\n    padding: 30px 50px;\r\n    display: grid;\r\n    grid-template-columns: repeat(2,minmax(150px,1fr));\r\n    grid-template-rows: minmax(0, 1fr) 300px;\r\n    gap:100px;\r\n}\r\n.menu-card{\r\n    /* border: 1px solid black; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 16px;\r\n    gap:10px;\r\n    text-align: center;\r\n}\r\n.menu-item-img{\r\n    width: 230px;\r\n    height: auto;\r\n    border-radius: 10rem;\r\n}\r\n.devil{\r\n    width: 165px;\r\n}\r\n\r\n/* Contact component */\r\n.contact{\r\n    /* background-color: #FF7F7F; */\r\n    border-radius: 5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    height: 500px;\r\n    align-items: center;\r\n    color: white;\r\n    width: 100%;\r\n    background-color: rgba(18, 18, 18, 0.5);\r\n}\r\n\r\n.contact-header,.contact-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 22px;\r\n    gap:16px;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.menu-btn {\r\n    background-color: #fa2a55;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    border-radius: .5rem;\r\n    cursor: pointer;\r\n  }\r\n\r\n@media only screen and (max-width: 756px) {\r\n    .menu{\r\n        grid-template-columns: repeat(1,minmax(150px,1fr));\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,iCAAiC;IACjC,sBAAsB;AAC1B;AACA;;AAEA;AACA;IACI,8DAA8D;IAC9D,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,kCAAkC;IAClC,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,QAAQ;IACR,mBAAmB;IACnB,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,WAAW;IACX,uCAAuC;AAC3C;AACA;IACI,SAAS;AACb;AACA;IACI,iCAAiC;AACrC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB;;iCAE6B;AACjC;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,iEAAiE;IACjE,6BAA6B;IAC7B,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,uCAAuC;IACvC,aAAa;IACb,QAAQ;IACR,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;AACjB;;AAEA,oBAAoB;AACpB;IACI,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,kDAAkD;IAClD,wCAAwC;IACxC,SAAS;AACb;AACA;IACI,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,QAAQ;IACR,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,YAAY;AAChB;;AAEA,sBAAsB;AACtB;IACI,+BAA+B;IAC/B,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,QAAQ;IACR,kBAAkB;;AAEtB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,oBAAoB;IACpB,eAAe;EACjB;;AAEF;IACI;QACI,kDAAkD;IACtD;AACJ","sourcesContent":["*,*::before,*::after{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n    box-sizing: border-box;\r\n}\r\n:root{\r\n    \r\n}\r\nbody{\r\n    /* background: url(\"./img/mae-mu-Ey2Y2vAmx7Q-unsplash.jpg\"); */\r\n    background-position: center;\r\n    background-size: cover;\r\n    display: grid;\r\n    grid-template-rows: 100px 1fr 75px;\r\n    justify-items: center;\r\n    min-height: 100vh;\r\n}\r\n#header,#footer{\r\n    color:white;\r\n    font-size: 24px;\r\n    font-weight: 450;\r\n}\r\n#header{\r\n    display: flex;\r\n    justify-content: center;\r\n    gap:60px;\r\n    align-items: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n}\r\n#header div{\r\n    cursor: pointer;\r\n}\r\n#footer{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    width: 100%;\r\n    background-color: rgba(18, 18, 18, 0.2);\r\n}\r\n#content{\r\n    width:50%;\r\n}\r\n.header-home:hover,.header-contact:hover,.header-menu:hover{\r\n    text-shadow: 5px 5px 12px #A31116;\r\n}\r\n.home,.menu{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    border-radius: 50px;\r\n    min-height: 90%;\r\n}\r\n\r\n/* Home Component */\r\n.banner{\r\n    width: 80%;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.banner-title{\r\n    color:white;\r\n    font-size: 90px;\r\n    font-weight: 500;\r\n    margin: auto;\r\n    text-align: center;\r\n    text-shadow: 0px -2px 4px #fff, 0px -2px 10px \r\n        #FF3, 0px -10px 20px        \r\n        #F90, 0px -20px 40px #C33;\r\n}\r\n.banner .introText{\r\n    font-size: 50px;\r\n    font-weight: 400;\r\n    background: -webkit-linear-gradient(left,#870009,#B30041,#D7008A);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    text-align: center;\r\n}\r\n.storeInfo{\r\n    /* width: auto;*/\r\n    min-height: 100px; \r\n    background-color: rgba(18, 18, 18, 0.7);\r\n    display: flex;\r\n    gap:50px;\r\n    padding: 22px;\r\n    border-radius: 1rem;\r\n}\r\n.hours,.location{\r\n    color:#fff6da;\r\n}\r\n\r\n/* Menu components */\r\n.menu{\r\n    background-color: white;\r\n    padding: 30px 50px;\r\n    display: grid;\r\n    grid-template-columns: repeat(2,minmax(150px,1fr));\r\n    grid-template-rows: minmax(0, 1fr) 300px;\r\n    gap:100px;\r\n}\r\n.menu-card{\r\n    /* border: 1px solid black; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 16px;\r\n    gap:10px;\r\n    text-align: center;\r\n}\r\n.menu-item-img{\r\n    width: 230px;\r\n    height: auto;\r\n    border-radius: 10rem;\r\n}\r\n.devil{\r\n    width: 165px;\r\n}\r\n\r\n/* Contact component */\r\n.contact{\r\n    /* background-color: #FF7F7F; */\r\n    border-radius: 5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    height: 500px;\r\n    align-items: center;\r\n    color: white;\r\n    width: 100%;\r\n    background-color: rgba(18, 18, 18, 0.5);\r\n}\r\n\r\n.contact-header,.contact-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 22px;\r\n    gap:16px;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.menu-btn {\r\n    background-color: #fa2a55;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    border-radius: .5rem;\r\n    cursor: pointer;\r\n  }\r\n\r\n@media only screen and (max-width: 756px) {\r\n    .menu{\r\n        grid-template-columns: repeat(1,minmax(150px,1fr));\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/img/blackgarlic.jpg":
/*!*********************************!*\
  !*** ./src/img/blackgarlic.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/blackgarlic.jpg");

/***/ }),

/***/ "./src/img/chicken.jpg":
/*!*****************************!*\
  !*** ./src/img/chicken.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/chicken.jpg");

/***/ }),

/***/ "./src/img/devil.jpg":
/*!***************************!*\
  !*** ./src/img/devil.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/devil.jpg");

/***/ }),

/***/ "./src/img/mae-mu-Ey2Y2vAmx7Q-unsplash.jpg":
/*!*************************************************!*\
  !*** ./src/img/mae-mu-Ey2Y2vAmx7Q-unsplash.jpg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/mae-mu-Ey2Y2vAmx7Q-unsplash.jpg");

/***/ }),

/***/ "./src/img/miso.jpg":
/*!**************************!*\
  !*** ./src/img/miso.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/miso.jpg");

/***/ }),

/***/ "./src/img/seafood.jpg":
/*!*****************************!*\
  !*** ./src/img/seafood.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/seafood.jpg");

/***/ }),

/***/ "./src/img/shoyu.jpg":
/*!***************************!*\
  !*** ./src/img/shoyu.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/shoyu.jpg");

/***/ }),

/***/ "./src/img/tonkotsu.jpg":
/*!******************************!*\
  !*** ./src/img/tonkotsu.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/tonkotsu.jpg");

/***/ }),

/***/ "./src/img/veggie.jpg":
/*!****************************!*\
  !*** ./src/img/veggie.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/veggie.jpg");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");


function Contact() {
    const contact = document.createElement('div');
    const header = document.createElement('div');
    const content = document.createElement('div');
    const title = document.createElement('h1');
    const phone = document.createElement('h2');
    const address = document.createElement('p');
    const menuBtn = document.createElement('btn');

    title.textContent = "Contact Us";
    phone.textContent = "Phone: 202-456-1111";
    address.textContent = "1600 Pennsylvania Avenue NW, Washington, DC 20500";
    menuBtn.innerHTML = "MENU";

    menuBtn.classList.add('menu-btn');
    contact.className = "contact";
    header.className = "contact-header";
    content.className = "contact-content";

    menuBtn.addEventListener('click', function () {
        const content = document.querySelector('#content');
        content.removeChild(content.firstChild);
        content.append((0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])());
    });

    header.append(title, menuBtn);
    content.append(phone, address);
    contact.append(header, content);



    return contact;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Footer() {

    const footer = document.createElement('div');
    const imgCredit = document.createElement('div');
    const creator = document.createElement('div');

    footer.id = "footer";
    imgCredit.className = "image-src";
    creator.className = "createdby";

    imgCredit.textContent = "background-image-by: Mae Mu";
    creator.textContent = "Created By: Dan N";

    footer.append(imgCredit, creator);

    return footer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Header() {
    const header = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');

    header.id = "header";
    home.className = "header-home";
    menu.className = "header-menu";
    contact.className = "header-contact";

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    header.append(home, menu, contact);

    return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Home() {
    const home = document.createElement('div');
    const banner = document.createElement('div');
    const storeInfo = document.createElement('div');
    const hours = document.createElement('h2');
    const location = document.createElement('h2');
    const title = document.createElement('p');
    const introText = document.createElement('p');
    banner.classList.add('banner');
    storeInfo.classList.add('storeInfo');
    hours.classList.add('hours');
    location.classList.add('location');
    home.classList.add('home');
    title.className = "banner-title";
    introText.className = "introText";

    title.textContent = "Devil Anus's Ramen";
    introText.textContent = "Set Your Tongue, Stomach and Ass Ablaze";
    hours.innerHTML = "Mon-Fri: 10am - 10pm <br> Sat: 12pm - 8pm <br> Sun: Closed"
    location.innerHTML = "2-10-9 Kajicho, Chiyoda 101-0044 <br> Tokyo Prefecture"

    storeInfo.append(hours, location)
    banner.append(title, introText);
    home.append(banner, storeInfo);
    return home;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_items */ "./src/menu_items.js");


function Menu() {
    const menu = document.createElement('div');
    // const menuCard = document.createElement('div');

    // menuCard.className = "menu-card";
    menu.className = "menu";

    for (let item of _menu_items__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        const menuCard = document.createElement('div');

        const img = document.createElement('img');
        const title = document.createElement('h2');
        const desc = document.createElement('p');


        menuCard.classList.add("menu-card");
        if (item.title.includes("DEVIL")) {
            img.classList.add('devil');
        }
        img.classList.add('menu-item-img');

        img.src = item.image;
        title.textContent = item.title;
        desc.textContent = item.desc;

        menuCard.append(img, title, desc)
        menu.append(menuCard);
    }


    return menu;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/menu_items.js":
/*!***************************!*\
  !*** ./src/menu_items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_tonkotsu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/tonkotsu.jpg */ "./src/img/tonkotsu.jpg");
/* harmony import */ var _img_blackgarlic_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/blackgarlic.jpg */ "./src/img/blackgarlic.jpg");
/* harmony import */ var _img_miso_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/miso.jpg */ "./src/img/miso.jpg");
/* harmony import */ var _img_shoyu_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/shoyu.jpg */ "./src/img/shoyu.jpg");
/* harmony import */ var _img_seafood_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/seafood.jpg */ "./src/img/seafood.jpg");
/* harmony import */ var _img_chicken_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/chicken.jpg */ "./src/img/chicken.jpg");
/* harmony import */ var _img_veggie_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/veggie.jpg */ "./src/img/veggie.jpg");
/* harmony import */ var _img_devil_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/devil.jpg */ "./src/img/devil.jpg");









const menuItems = [
    {
        title: "DEVIL'S RAMEN",
        desc: "The Devil of Fire Ramen earn its stamp as the spiciest instant noodles in the world is that the broth is made with the world's hottest pepper, the Carolina Reaper",
        image: _img_devil_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
    },
    {
        title: "TONKOTSU RAMEN",
        desc: "Roasted Pork, Boiled Egg, Kikurage Mushrooms, Bamboo Shoots, Green Onions, Sprouts, Fish Cake, Seaweed",
        image: _img_tonkotsu_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
    {
        title: "BLACK GARLIC RAMEN",
        desc: "Roasted Pork, Bamboo Shoots, Green Onions, Fried Garlic, Sprouts, Corn, Seaweed",
        image: _img_blackgarlic_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
    },
    {
        title: "MISO RAMEN",
        desc: "Roasted Pork, Boiled Egg, Kikurage Mushrooms, Bamboo Shoots, Green Onions, Sprouts, Fish Cake, Seaweed",
        image: _img_miso_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    },
    {
        title: "SHOYU RAMEN",
        desc: "Roasted Pork, Boiled Egg, Kikurage Mushrooms, Bamboo Shoots, Green Onions, Sprouts, Fish Cake, Seaweed",
        image: _img_shoyu_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
    },
    {
        title: "SEAFOOD RAMEN",
        desc: "Shrimp, Fish Cake, Boiled Egg, Bamboo Shoots, Scallop, Green Onions, Sprouts, Corn, Seaweed",
        image: _img_seafood_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
    },
    {
        title: "CHICKEN RAMEN",
        desc: "Grilled Chicken, Boiled Egg, Kikurage Mushrooms, Bamboo Shoots, Green Onions, Sprouts, Corn, Seaweed",
        image: _img_chicken_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
    },
    {
        title: "VEGGIE RAMEN",
        desc: "Tofu, Kikurage Mushrooms, Bamboo Shoots, Green Onions, Sprouts, Corn, Seaweed",
        image: _img_veggie_jpg__WEBPACK_IMPORTED_MODULE_6__["default"],
    },

]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuItems);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _img_mae_mu_Ey2Y2vAmx7Q_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/mae-mu-Ey2Y2vAmx7Q-unsplash.jpg */ "./src/img/mae-mu-Ey2Y2vAmx7Q-unsplash.jpg");








document.body.style.backgroundImage = `url(${_img_mae_mu_Ey2Y2vAmx7Q_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__["default"]})`;
document.body.prepend((0,_header__WEBPACK_IMPORTED_MODULE_4__["default"])());
document.body.append((0,_footer__WEBPACK_IMPORTED_MODULE_5__["default"])());

function removeChildElement(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function component() {

    const home = document.querySelector('.header-home');
    const menu = document.querySelector('.header-menu');
    const contact = document.querySelector('.header-contact');
    const content = document.querySelector('#content');


    home.addEventListener('click', function () {
        removeChildElement(content);
        content.append((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
    })

    menu.addEventListener('click', function () {
        removeChildElement(content);
        content.append((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
    })

    contact.addEventListener('click', function () {
        removeChildElement(content);
        content.append((0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])());
    })

    content.append((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
}

component();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmb0I7QUFDTTtBQUNBO0FBQ007QUFDRjtBQUNBO0FBQ29DO0FBQ2xFO0FBQ0EsNkNBQTZDLDRFQUFhLENBQUM7QUFDM0Qsc0JBQXNCLG1EQUFNO0FBQzVCLHFCQUFxQixtREFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFJO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQUk7QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvREFBTztBQUM5QixLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsaURBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50Ly4vc3JjL2ltZy9ibGFja2dhcmxpYy5qcGciLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50Ly4vc3JjL2ltZy9jaGlja2VuLmpwZyIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnQvLi9zcmMvaW1nL2RldmlsLmpwZyIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnQvLi9zcmMvaW1nL21hZS1tdS1FeTJZMnZBbXg3US11bnNwbGFzaC5qcGciLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50Ly4vc3JjL2ltZy9taXNvLmpwZyIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnQvLi9zcmMvaW1nL3NlYWZvb2QuanBnIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudC8uL3NyYy9pbWcvc2hveXUuanBnIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudC8uL3NyYy9pbWcvdG9ua290c3UuanBnIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudC8uL3NyYy9pbWcvdmVnZ2llLmpwZyIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnQvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50Ly4vc3JjL21lbnVfaXRlbXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCo6OmJlZm9yZSwqOjphZnRlcntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290e1xcclxcbiAgICBcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKFxcXCIuL2ltZy9tYWUtbXUtRXkyWTJ2QW14N1EtdW5zcGxhc2guanBnXFxcIik7ICovXFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNzVweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuI2hlYWRlciwjZm9vdGVye1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDUwO1xcclxcbn1cXHJcXG4jaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOjYwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4jaGVhZGVyIGRpdntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jZm9vdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDE4LCAxOCwgMC4yKTtcXHJcXG59XFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIHdpZHRoOjUwJTtcXHJcXG59XFxyXFxuLmhlYWRlci1ob21lOmhvdmVyLC5oZWFkZXItY29udGFjdDpob3ZlciwuaGVhZGVyLW1lbnU6aG92ZXJ7XFxyXFxuICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDEycHggI0EzMTExNjtcXHJcXG59XFxyXFxuLmhvbWUsLm1lbnV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA5MCU7XFxyXFxufVxcclxcblxcclxcbi8qIEhvbWUgQ29tcG9uZW50ICovXFxyXFxuLmJhbm5lcntcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5iYW5uZXItdGl0bGV7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDkwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IC0ycHggNHB4ICNmZmYsIDBweCAtMnB4IDEwcHggXFxyXFxuICAgICAgICAjRkYzLCAwcHggLTEwcHggMjBweCAgICAgICAgXFxyXFxuICAgICAgICAjRjkwLCAwcHggLTIwcHggNDBweCAjQzMzO1xcclxcbn1cXHJcXG4uYmFubmVyIC5pbnRyb1RleHR7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwjODcwMDA5LCNCMzAwNDEsI0Q3MDA4QSk7XFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnN0b3JlSW5mb3tcXHJcXG4gICAgLyogd2lkdGg6IGF1dG87Ki9cXHJcXG4gICAgbWluLWhlaWdodDogMTAwcHg7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4LCAxOCwgMTgsIDAuNyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDo1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG4uaG91cnMsLmxvY2F0aW9ue1xcclxcbiAgICBjb2xvcjojZmZmNmRhO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZW51IGNvbXBvbmVudHMgKi9cXHJcXG4ubWVudXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMixtaW5tYXgoMTUwcHgsMWZyKSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDAsIDFmcikgMzAwcHg7XFxyXFxuICAgIGdhcDoxMDBweDtcXHJcXG59XFxyXFxuLm1lbnUtY2FyZHtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICBnYXA6MTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtLWltZ3tcXHJcXG4gICAgd2lkdGg6IDIzMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcclxcbn1cXHJcXG4uZGV2aWx7XFxyXFxuICAgIHdpZHRoOiAxNjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFjdCBjb21wb25lbnQgKi9cXHJcXG4uY29udGFjdHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0ZGN0Y3RjsgKi9cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDE4LCAxOCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaGVhZGVyLC5jb250YWN0LWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyMnB4O1xcclxcbiAgICBnYXA6MTZweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmEyYTU1O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTZweCkge1xcclxcbiAgICAubWVudXtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsbWlubWF4KDE1MHB4LDFmcikpO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxzQkFBc0I7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0lBQ0ksOERBQThEO0lBQzlELDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEI7O2lDQUU2QjtBQUNqQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpRUFBaUU7SUFDakUsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixRQUFRO0lBQ1IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsd0NBQXdDO0lBQ3hDLFNBQVM7QUFDYjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsUUFBUTtJQUNSLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0ksK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixRQUFRO0lBQ1Isa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGVBQWU7RUFDakI7O0FBRUY7SUFDSTtRQUNJLGtEQUFrRDtJQUN0RDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosKjo6YmVmb3JlLCo6OmFmdGVye1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOnJvb3R7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1nL21hZS1tdS1FeTJZMnZBbXg3US11bnNwbGFzaC5qcGdcXFwiKTsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA3NXB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG4jaGVhZGVyLCNmb290ZXJ7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0NTA7XFxyXFxufVxcclxcbiNoZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6NjBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbiNoZWFkZXIgZGl2e1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiNmb290ZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOCwgMTgsIDE4LCAwLjIpO1xcclxcbn1cXHJcXG4jY29udGVudHtcXHJcXG4gICAgd2lkdGg6NTAlO1xcclxcbn1cXHJcXG4uaGVhZGVyLWhvbWU6aG92ZXIsLmhlYWRlci1jb250YWN0OmhvdmVyLC5oZWFkZXItbWVudTpob3ZlcntcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDVweCA1cHggMTJweCAjQTMxMTE2O1xcclxcbn1cXHJcXG4uaG9tZSwubWVudXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9tZSBDb21wb25lbnQgKi9cXHJcXG4uYmFubmVye1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJhbm5lci10aXRsZXtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogOTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggLTJweCA0cHggI2ZmZiwgMHB4IC0ycHggMTBweCBcXHJcXG4gICAgICAgICNGRjMsIDBweCAtMTBweCAyMHB4ICAgICAgICBcXHJcXG4gICAgICAgICNGOTAsIDBweCAtMjBweCA0MHB4ICNDMzM7XFxyXFxufVxcclxcbi5iYW5uZXIgLmludHJvVGV4dHtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCM4NzAwMDksI0IzMDA0MSwjRDcwMDhBKTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uc3RvcmVJbmZve1xcclxcbiAgICAvKiB3aWR0aDogYXV0bzsqL1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDBweDsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDE4LCAxOCwgMC43KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOjUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcbi5ob3VycywubG9jYXRpb257XFxyXFxuICAgIGNvbG9yOiNmZmY2ZGE7XFxyXFxufVxcclxcblxcclxcbi8qIE1lbnUgY29tcG9uZW50cyAqL1xcclxcbi5tZW51e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLG1pbm1heCgxNTBweCwxZnIpKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMCwgMWZyKSAzMDBweDtcXHJcXG4gICAgZ2FwOjEwMHB4O1xcclxcbn1cXHJcXG4ubWVudS1jYXJke1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgIGdhcDoxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5tZW51LWl0ZW0taW1ne1xcclxcbiAgICB3aWR0aDogMjMwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XFxyXFxufVxcclxcbi5kZXZpbHtcXHJcXG4gICAgd2lkdGg6IDE2NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWN0IGNvbXBvbmVudCAqL1xcclxcbi5jb250YWN0e1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3RjdGOyAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOCwgMTgsIDE4LCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1oZWFkZXIsLmNvbnRhY3QtY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDIycHg7XFxyXFxuICAgIGdhcDoxNnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5tZW51LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYTJhNTU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1NnB4KSB7XFxyXFxuICAgIC5tZW51e1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSxtaW5tYXgoMTUwcHgsMWZyKSk7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYmxhY2tnYXJsaWMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9jaGlja2VuLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZGV2aWwuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tYWUtbXUtRXkyWTJ2QW14N1EtdW5zcGxhc2guanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9taXNvLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvc2VhZm9vZC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Nob3l1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdG9ua290c3UuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy92ZWdnaWUuanBnXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XHJcblxyXG5mdW5jdGlvbiBDb250YWN0KCkge1xyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J0bicpO1xyXG5cclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XHJcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9IFwiUGhvbmU6IDIwMi00NTYtMTExMVwiO1xyXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMTYwMCBQZW5uc3lsdmFuaWEgQXZlbnVlIE5XLCBXYXNoaW5ndG9uLCBEQyAyMDUwMFwiO1xyXG4gICAgbWVudUJ0bi5pbm5lckhUTUwgPSBcIk1FTlVcIjtcclxuXHJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnRuJyk7XHJcbiAgICBjb250YWN0LmNsYXNzTmFtZSA9IFwiY29udGFjdFwiO1xyXG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiY29udGFjdC1oZWFkZXJcIjtcclxuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250YWN0LWNvbnRlbnRcIjtcclxuXHJcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZChNZW51KCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSwgbWVudUJ0bik7XHJcbiAgICBjb250ZW50LmFwcGVuZChwaG9uZSwgYWRkcmVzcyk7XHJcbiAgICBjb250YWN0LmFwcGVuZChoZWFkZXIsIGNvbnRlbnQpO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7IiwiZnVuY3Rpb24gRm9vdGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaW1nQ3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjcmVhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgZm9vdGVyLmlkID0gXCJmb290ZXJcIjtcclxuICAgIGltZ0NyZWRpdC5jbGFzc05hbWUgPSBcImltYWdlLXNyY1wiO1xyXG4gICAgY3JlYXRvci5jbGFzc05hbWUgPSBcImNyZWF0ZWRieVwiO1xyXG5cclxuICAgIGltZ0NyZWRpdC50ZXh0Q29udGVudCA9IFwiYmFja2dyb3VuZC1pbWFnZS1ieTogTWFlIE11XCI7XHJcbiAgICBjcmVhdG9yLnRleHRDb250ZW50ID0gXCJDcmVhdGVkIEJ5OiBEYW4gTlwiO1xyXG5cclxuICAgIGZvb3Rlci5hcHBlbmQoaW1nQ3JlZGl0LCBjcmVhdG9yKTtcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuICAgIGhvbWUuY2xhc3NOYW1lID0gXCJoZWFkZXItaG9tZVwiO1xyXG4gICAgbWVudS5jbGFzc05hbWUgPSBcImhlYWRlci1tZW51XCI7XHJcbiAgICBjb250YWN0LmNsYXNzTmFtZSA9IFwiaGVhZGVyLWNvbnRhY3RcIjtcclxuXHJcbiAgICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZChob21lLCBtZW51LCBjb250YWN0KTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3Qgc3RvcmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGludHJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKCdiYW5uZXInKTtcclxuICAgIHN0b3JlSW5mby5jbGFzc0xpc3QuYWRkKCdzdG9yZUluZm8nKTtcclxuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XHJcbiAgICB0aXRsZS5jbGFzc05hbWUgPSBcImJhbm5lci10aXRsZVwiO1xyXG4gICAgaW50cm9UZXh0LmNsYXNzTmFtZSA9IFwiaW50cm9UZXh0XCI7XHJcblxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkRldmlsIEFudXMncyBSYW1lblwiO1xyXG4gICAgaW50cm9UZXh0LnRleHRDb250ZW50ID0gXCJTZXQgWW91ciBUb25ndWUsIFN0b21hY2ggYW5kIEFzcyBBYmxhemVcIjtcclxuICAgIGhvdXJzLmlubmVySFRNTCA9IFwiTW9uLUZyaTogMTBhbSAtIDEwcG0gPGJyPiBTYXQ6IDEycG0gLSA4cG0gPGJyPiBTdW46IENsb3NlZFwiXHJcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSBcIjItMTAtOSBLYWppY2hvLCBDaGl5b2RhIDEwMS0wMDQ0IDxicj4gVG9reW8gUHJlZmVjdHVyZVwiXHJcblxyXG4gICAgc3RvcmVJbmZvLmFwcGVuZChob3VycywgbG9jYXRpb24pXHJcbiAgICBiYW5uZXIuYXBwZW5kKHRpdGxlLCBpbnRyb1RleHQpO1xyXG4gICAgaG9tZS5hcHBlbmQoYmFubmVyLCBzdG9yZUluZm8pO1xyXG4gICAgcmV0dXJuIGhvbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IG1lbnVJdGVtcyBmcm9tIFwiLi9tZW51X2l0ZW1zXCI7XHJcblxyXG5mdW5jdGlvbiBNZW51KCkge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAvLyBtZW51Q2FyZC5jbGFzc05hbWUgPSBcIm1lbnUtY2FyZFwiO1xyXG4gICAgbWVudS5jbGFzc05hbWUgPSBcIm1lbnVcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIG1lbnVJdGVtcykge1xyXG4gICAgICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuXHJcbiAgICAgICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKTtcclxuICAgICAgICBpZiAoaXRlbS50aXRsZS5pbmNsdWRlcyhcIkRFVklMXCIpKSB7XHJcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdkZXZpbCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWltZycpO1xyXG5cclxuICAgICAgICBpbWcuc3JjID0gaXRlbS5pbWFnZTtcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzYztcclxuXHJcbiAgICAgICAgbWVudUNhcmQuYXBwZW5kKGltZywgdGl0bGUsIGRlc2MpXHJcbiAgICAgICAgbWVudS5hcHBlbmQobWVudUNhcmQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gbWVudTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJpbXBvcnQgdG9ua290c3UgZnJvbSAnLi9pbWcvdG9ua290c3UuanBnJztcclxuaW1wb3J0IGJsYWNrR2FybGljIGZyb20gJy4vaW1nL2JsYWNrZ2FybGljLmpwZyc7XHJcbmltcG9ydCBtaXNvIGZyb20gJy4vaW1nL21pc28uanBnJztcclxuaW1wb3J0IHNob3l1IGZyb20gJy4vaW1nL3Nob3l1LmpwZyc7XHJcbmltcG9ydCBzZWFmb29kIGZyb20gJy4vaW1nL3NlYWZvb2QuanBnJztcclxuaW1wb3J0IGNoaWNrZW4gZnJvbSAnLi9pbWcvY2hpY2tlbi5qcGcnO1xyXG5pbXBvcnQgdmVnZ2llIGZyb20gJy4vaW1nL3ZlZ2dpZS5qcGcnO1xyXG5pbXBvcnQgZGV2aWwgZnJvbSAnLi9pbWcvZGV2aWwuanBnJztcclxuXHJcbmNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJERVZJTCdTIFJBTUVOXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgRGV2aWwgb2YgRmlyZSBSYW1lbiBlYXJuIGl0cyBzdGFtcCBhcyB0aGUgc3BpY2llc3QgaW5zdGFudCBub29kbGVzIGluIHRoZSB3b3JsZCBpcyB0aGF0IHRoZSBicm90aCBpcyBtYWRlIHdpdGggdGhlIHdvcmxkJ3MgaG90dGVzdCBwZXBwZXIsIHRoZSBDYXJvbGluYSBSZWFwZXJcIixcclxuICAgICAgICBpbWFnZTogZGV2aWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlRPTktPVFNVIFJBTUVOXCIsXHJcbiAgICAgICAgZGVzYzogXCJSb2FzdGVkIFBvcmssIEJvaWxlZCBFZ2csIEtpa3VyYWdlIE11c2hyb29tcywgQmFtYm9vIFNob290cywgR3JlZW4gT25pb25zLCBTcHJvdXRzLCBGaXNoIENha2UsIFNlYXdlZWRcIixcclxuICAgICAgICBpbWFnZTogdG9ua290c3UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkJMQUNLIEdBUkxJQyBSQU1FTlwiLFxyXG4gICAgICAgIGRlc2M6IFwiUm9hc3RlZCBQb3JrLCBCYW1ib28gU2hvb3RzLCBHcmVlbiBPbmlvbnMsIEZyaWVkIEdhcmxpYywgU3Byb3V0cywgQ29ybiwgU2Vhd2VlZFwiLFxyXG4gICAgICAgIGltYWdlOiBibGFja0dhcmxpYyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTUlTTyBSQU1FTlwiLFxyXG4gICAgICAgIGRlc2M6IFwiUm9hc3RlZCBQb3JrLCBCb2lsZWQgRWdnLCBLaWt1cmFnZSBNdXNocm9vbXMsIEJhbWJvbyBTaG9vdHMsIEdyZWVuIE9uaW9ucywgU3Byb3V0cywgRmlzaCBDYWtlLCBTZWF3ZWVkXCIsXHJcbiAgICAgICAgaW1hZ2U6IG1pc28sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNIT1lVIFJBTUVOXCIsXHJcbiAgICAgICAgZGVzYzogXCJSb2FzdGVkIFBvcmssIEJvaWxlZCBFZ2csIEtpa3VyYWdlIE11c2hyb29tcywgQmFtYm9vIFNob290cywgR3JlZW4gT25pb25zLCBTcHJvdXRzLCBGaXNoIENha2UsIFNlYXdlZWRcIixcclxuICAgICAgICBpbWFnZTogc2hveXUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNFQUZPT0QgUkFNRU5cIixcclxuICAgICAgICBkZXNjOiBcIlNocmltcCwgRmlzaCBDYWtlLCBCb2lsZWQgRWdnLCBCYW1ib28gU2hvb3RzLCBTY2FsbG9wLCBHcmVlbiBPbmlvbnMsIFNwcm91dHMsIENvcm4sIFNlYXdlZWRcIixcclxuICAgICAgICBpbWFnZTogc2VhZm9vZCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQ0hJQ0tFTiBSQU1FTlwiLFxyXG4gICAgICAgIGRlc2M6IFwiR3JpbGxlZCBDaGlja2VuLCBCb2lsZWQgRWdnLCBLaWt1cmFnZSBNdXNocm9vbXMsIEJhbWJvbyBTaG9vdHMsIEdyZWVuIE9uaW9ucywgU3Byb3V0cywgQ29ybiwgU2Vhd2VlZFwiLFxyXG4gICAgICAgIGltYWdlOiBjaGlja2VuLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJWRUdHSUUgUkFNRU5cIixcclxuICAgICAgICBkZXNjOiBcIlRvZnUsIEtpa3VyYWdlIE11c2hyb29tcywgQmFtYm9vIFNob290cywgR3JlZW4gT25pb25zLCBTcHJvdXRzLCBDb3JuLCBTZWF3ZWVkXCIsXHJcbiAgICAgICAgaW1hZ2U6IHZlZ2dpZSxcclxuICAgIH0sXHJcblxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51SXRlbXM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcclxuaW1wb3J0IGJhY2tncm91bmRJbWcgZnJvbSAnLi9pbWcvbWFlLW11LUV5MlkydkFteDdRLXVuc3BsYXNoLmpwZyc7XHJcblxyXG5kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiYWNrZ3JvdW5kSW1nfSlgO1xyXG5kb2N1bWVudC5ib2R5LnByZXBlbmQoSGVhZGVyKCkpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChGb290ZXIoKSk7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDaGlsZEVsZW1lbnQocGFyZW50KSB7XHJcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcblxyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItaG9tZScpO1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbWVudScpO1xyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItY29udGFjdCcpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblxyXG5cclxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2hpbGRFbGVtZW50KGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKEhvbWUoKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2hpbGRFbGVtZW50KGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKE1lbnUoKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2hpbGRFbGVtZW50KGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKENvbnRhY3QoKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKEhvbWUoKSk7XHJcbn1cclxuXHJcbmNvbXBvbmVudCgpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9