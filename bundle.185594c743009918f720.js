/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sal.js/dist/sal.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sal.js/dist/sal.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"[data-sal]{transition-duration:.2s;transition-duration:var(--sal-duration,.2s);transition-delay:0s;transition-delay:var(--sal-delay,0s);transition-timing-function:ease;transition-timing-function:var(--sal-easing,ease)}[data-sal][data-sal-duration=\\\"200\\\"]{transition-duration:.2s}[data-sal][data-sal-duration=\\\"250\\\"]{transition-duration:.25s}[data-sal][data-sal-duration=\\\"300\\\"]{transition-duration:.3s}[data-sal][data-sal-duration=\\\"350\\\"]{transition-duration:.35s}[data-sal][data-sal-duration=\\\"400\\\"]{transition-duration:.4s}[data-sal][data-sal-duration=\\\"450\\\"]{transition-duration:.45s}[data-sal][data-sal-duration=\\\"500\\\"]{transition-duration:.5s}[data-sal][data-sal-duration=\\\"550\\\"]{transition-duration:.55s}[data-sal][data-sal-duration=\\\"600\\\"]{transition-duration:.6s}[data-sal][data-sal-duration=\\\"650\\\"]{transition-duration:.65s}[data-sal][data-sal-duration=\\\"700\\\"]{transition-duration:.7s}[data-sal][data-sal-duration=\\\"750\\\"]{transition-duration:.75s}[data-sal][data-sal-duration=\\\"800\\\"]{transition-duration:.8s}[data-sal][data-sal-duration=\\\"850\\\"]{transition-duration:.85s}[data-sal][data-sal-duration=\\\"900\\\"]{transition-duration:.9s}[data-sal][data-sal-duration=\\\"950\\\"]{transition-duration:.95s}[data-sal][data-sal-duration=\\\"1000\\\"]{transition-duration:1s}[data-sal][data-sal-duration=\\\"1050\\\"]{transition-duration:1.05s}[data-sal][data-sal-duration=\\\"1100\\\"]{transition-duration:1.1s}[data-sal][data-sal-duration=\\\"1150\\\"]{transition-duration:1.15s}[data-sal][data-sal-duration=\\\"1200\\\"]{transition-duration:1.2s}[data-sal][data-sal-duration=\\\"1250\\\"]{transition-duration:1.25s}[data-sal][data-sal-duration=\\\"1300\\\"]{transition-duration:1.3s}[data-sal][data-sal-duration=\\\"1350\\\"]{transition-duration:1.35s}[data-sal][data-sal-duration=\\\"1400\\\"]{transition-duration:1.4s}[data-sal][data-sal-duration=\\\"1450\\\"]{transition-duration:1.45s}[data-sal][data-sal-duration=\\\"1500\\\"]{transition-duration:1.5s}[data-sal][data-sal-duration=\\\"1550\\\"]{transition-duration:1.55s}[data-sal][data-sal-duration=\\\"1600\\\"]{transition-duration:1.6s}[data-sal][data-sal-duration=\\\"1650\\\"]{transition-duration:1.65s}[data-sal][data-sal-duration=\\\"1700\\\"]{transition-duration:1.7s}[data-sal][data-sal-duration=\\\"1750\\\"]{transition-duration:1.75s}[data-sal][data-sal-duration=\\\"1800\\\"]{transition-duration:1.8s}[data-sal][data-sal-duration=\\\"1850\\\"]{transition-duration:1.85s}[data-sal][data-sal-duration=\\\"1900\\\"]{transition-duration:1.9s}[data-sal][data-sal-duration=\\\"1950\\\"]{transition-duration:1.95s}[data-sal][data-sal-duration=\\\"2000\\\"]{transition-duration:2s}[data-sal][data-sal-delay=\\\"50\\\"]{transition-delay:.05s}[data-sal][data-sal-delay=\\\"100\\\"]{transition-delay:.1s}[data-sal][data-sal-delay=\\\"150\\\"]{transition-delay:.15s}[data-sal][data-sal-delay=\\\"200\\\"]{transition-delay:.2s}[data-sal][data-sal-delay=\\\"250\\\"]{transition-delay:.25s}[data-sal][data-sal-delay=\\\"300\\\"]{transition-delay:.3s}[data-sal][data-sal-delay=\\\"350\\\"]{transition-delay:.35s}[data-sal][data-sal-delay=\\\"400\\\"]{transition-delay:.4s}[data-sal][data-sal-delay=\\\"450\\\"]{transition-delay:.45s}[data-sal][data-sal-delay=\\\"500\\\"]{transition-delay:.5s}[data-sal][data-sal-delay=\\\"550\\\"]{transition-delay:.55s}[data-sal][data-sal-delay=\\\"600\\\"]{transition-delay:.6s}[data-sal][data-sal-delay=\\\"650\\\"]{transition-delay:.65s}[data-sal][data-sal-delay=\\\"700\\\"]{transition-delay:.7s}[data-sal][data-sal-delay=\\\"750\\\"]{transition-delay:.75s}[data-sal][data-sal-delay=\\\"800\\\"]{transition-delay:.8s}[data-sal][data-sal-delay=\\\"850\\\"]{transition-delay:.85s}[data-sal][data-sal-delay=\\\"900\\\"]{transition-delay:.9s}[data-sal][data-sal-delay=\\\"950\\\"]{transition-delay:.95s}[data-sal][data-sal-delay=\\\"1000\\\"]{transition-delay:1s}[data-sal][data-sal-easing=linear]{transition-timing-function:linear}[data-sal][data-sal-easing=ease]{transition-timing-function:ease}[data-sal][data-sal-easing=ease-in]{transition-timing-function:ease-in}[data-sal][data-sal-easing=ease-out]{transition-timing-function:ease-out}[data-sal][data-sal-easing=ease-in-out]{transition-timing-function:ease-in-out}[data-sal][data-sal-easing=ease-in-cubic]{transition-timing-function:cubic-bezier(.55,.055,.675,.19)}[data-sal][data-sal-easing=ease-out-cubic]{transition-timing-function:cubic-bezier(.215,.61,.355,1)}[data-sal][data-sal-easing=ease-in-out-cubic]{transition-timing-function:cubic-bezier(.645,.045,.355,1)}[data-sal][data-sal-easing=ease-in-circ]{transition-timing-function:cubic-bezier(.6,.04,.98,.335)}[data-sal][data-sal-easing=ease-out-circ]{transition-timing-function:cubic-bezier(.075,.82,.165,1)}[data-sal][data-sal-easing=ease-in-out-circ]{transition-timing-function:cubic-bezier(.785,.135,.15,.86)}[data-sal][data-sal-easing=ease-in-expo]{transition-timing-function:cubic-bezier(.95,.05,.795,.035)}[data-sal][data-sal-easing=ease-out-expo]{transition-timing-function:cubic-bezier(.19,1,.22,1)}[data-sal][data-sal-easing=ease-in-out-expo]{transition-timing-function:cubic-bezier(1,0,0,1)}[data-sal][data-sal-easing=ease-in-quad]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-sal][data-sal-easing=ease-out-quad]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-sal][data-sal-easing=ease-in-out-quad]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-sal][data-sal-easing=ease-in-quart]{transition-timing-function:cubic-bezier(.895,.03,.685,.22)}[data-sal][data-sal-easing=ease-out-quart]{transition-timing-function:cubic-bezier(.165,.84,.44,1)}[data-sal][data-sal-easing=ease-in-out-quart]{transition-timing-function:cubic-bezier(.77,0,.175,1)}[data-sal][data-sal-easing=ease-in-quint]{transition-timing-function:cubic-bezier(.755,.05,.855,.06)}[data-sal][data-sal-easing=ease-out-quint]{transition-timing-function:cubic-bezier(.23,1,.32,1)}[data-sal][data-sal-easing=ease-in-out-quint]{transition-timing-function:cubic-bezier(.86,0,.07,1)}[data-sal][data-sal-easing=ease-in-sine]{transition-timing-function:cubic-bezier(.47,0,.745,.715)}[data-sal][data-sal-easing=ease-out-sine]{transition-timing-function:cubic-bezier(.39,.575,.565,1)}[data-sal][data-sal-easing=ease-in-out-sine]{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}[data-sal][data-sal-easing=ease-in-back]{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}[data-sal][data-sal-easing=ease-out-back]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}[data-sal][data-sal-easing=ease-in-out-back]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}[data-sal|=fade]{opacity:0;transition-property:opacity}[data-sal|=fade].sal-animate,body.sal-disabled [data-sal|=fade]{opacity:1}[data-sal|=slide]{opacity:0;transition-property:opacity,transform}[data-sal=slide-up]{transform:translateY(20%)}[data-sal=slide-down]{transform:translateY(-20%)}[data-sal=slide-left]{transform:translateX(20%)}[data-sal=slide-right]{transform:translateX(-20%)}[data-sal|=slide].sal-animate,body.sal-disabled [data-sal|=slide]{opacity:1;transform:none}[data-sal|=zoom]{opacity:0;transition-property:opacity,transform}[data-sal=zoom-in]{transform:scale(.5)}[data-sal=zoom-out]{transform:scale(1.1)}[data-sal|=zoom].sal-animate,body.sal-disabled [data-sal|=zoom]{opacity:1;transform:none}[data-sal|=flip]{-webkit-backface-visibility:hidden;backface-visibility:hidden;transition-property:transform}[data-sal=flip-left]{transform:perspective(2000px) rotateY(-91deg)}[data-sal=flip-right]{transform:perspective(2000px) rotateY(91deg)}[data-sal=flip-up]{transform:perspective(2000px) rotateX(-91deg)}[data-sal=flip-down]{transform:perspective(2000px) rotateX(91deg)}[data-sal|=flip].sal-animate,body.sal-disabled [data-sal|=flip]{transform:none}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./node_modules/sal.js/dist/sal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/sal.js/dist/sal.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sal.js/dist/sal.css\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./tag.svg */ \"./src/tag.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"/*GENERAL SETTINGS*/\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\n::selection {\\n  color: #63D488; }\\n\\nbody {\\n  position: relative;\\n  font-family: 'Open Sans', sans-serif;\\n  background-color: #FBFBFB; }\\n\\nhtml {\\n  font-size: 62.5%;\\n  scroll-behavior: smooth; }\\n\\n@media (max-width: 800px) {\\n  html {\\n    font-size: 52.5%; } }\\n\\n@media (max-width: 500px) {\\n  html {\\n    font-size: 47.5%; } }\\n\\n.container {\\n  margin: 0 auto;\\n  max-width: 1360px;\\n  padding: 0 6rem; }\\n\\n@media (max-width: 800px) {\\n  .container {\\n    padding: 0 4rem; } }\\n\\n@media (max-width: 500px) {\\n  .container {\\n    padding: 0 2rem; } }\\n\\n.link_primary {\\n  color: #63D488;\\n  font-weight: bold; }\\n\\n.link_primary:hover {\\n  color: #36c464; }\\n\\nimg {\\n  width: 100%; }\\n\\nsection {\\n  margin-bottom: 6rem; }\\n\\n/*NAVIGARION*/\\n.logo {\\n  font-size: 1.8rem;\\n  font-weight: 600; }\\n\\n.nav {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: 60px; }\\n\\n.nav_links {\\n  display: flex;\\n  list-style-type: none; }\\n\\n@media (max-width: 400px) {\\n  .nav_links {\\n    flex-direction: column;\\n    padding-top: 6.5rem; } }\\n\\n.nav_item {\\n  padding-right: 2rem;\\n  font-size: 1.8rem; }\\n\\n/*HEADER*/\\n.header {\\n  position: relative;\\n  font-size: 1.6rem;\\n  line-height: 1.7;\\n  height: 100vh;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: contain;\\n  background-position: right bottom; }\\n\\n@media (max-width: 500px) {\\n  .header {\\n    background-image: none; } }\\n\\n.header_content {\\n  position: absolute;\\n  top: 60%;\\n  transform: translateY(-50%); }\\n\\n.header_secondary,\\n.header_contact {\\n  margin-top: 1.2rem;\\n  max-width: 70%;\\n  color: #666666; }\\n\\n/*ARROWS*/\\n.chevron-down-solid {\\n  padding: 1rem;\\n  width: 50px;\\n  padding-top: 12rem;\\n  position: relative; }\\n\\n@media (max-width: 600px) {\\n  .chevron-down-solid {\\n    padding-top: 6rem; } }\\n\\n@media (max-height: 600px) {\\n  .chevron-down-solid {\\n    padding-top: 6rem; } }\\n\\n.chevron-down-solid:hover {\\n  cursor: pointer; }\\n\\n.bounce {\\n  animation: bounce 4s infinite; }\\n\\n.header a {\\n  align-self: flex-start; }\\n\\n.chevron-up-solid {\\n  padding: 1rem;\\n  width: 50px;\\n  position: fixed;\\n  right: 2.5rem;\\n  top: calc(100vh - 10rem);\\n  transition: linear .2s; }\\n\\n.chevron-up-solid:hover {\\n  transform: translateY(-5px);\\n  transition: ease-out .2s;\\n  cursor: pointer; }\\n\\n@keyframes bounce {\\n  0%, 20%, 50%, 80%, 100% {\\n    transform: translateY(0); }\\n  40% {\\n    transform: translateY(-10px); }\\n  60% {\\n    transform: translateY(-5px); } }\\n\\n/*ABOUT ME*/\\n.section_title {\\n  font-size: 5rem;\\n  padding: 3rem 0;\\n  color: #bcbcbc; }\\n\\n.about-me_container {\\n  display: grid;\\n  gap: 6rem;\\n  grid-template-areas: \\\"a c\\\"\\r \\\"b c\\\";\\n  grid-template-columns: 1.5fr 2fr; }\\n\\n.about-me {\\n  font-size: 2.2rem;\\n  font-weight: lighter; }\\n\\n.about-me_text {\\n  grid-area: a; }\\n\\n.list-of-skills {\\n  grid-area: c;\\n  list-style-type: none; }\\n\\n.skill {\\n  font-size: 2.4rem;\\n  padding-bottom: 1rem; }\\n\\n.skill_details {\\n  font-size: 2rem;\\n  font-weight: lighter;\\n  color: #666666; }\\n\\n.me {\\n  grid-area: b;\\n  box-shadow: 0.35em 0.35em 0 #63D488; }\\n\\n@media (max-width: 600px) {\\n  .about-me_container {\\n    display: block; }\\n  .about-me_text {\\n    padding-bottom: 2rem; }\\n  .me {\\n    padding: 2rem;\\n    box-shadow: none; } }\\n\\n/*PROJECTS*/\\n.project {\\n  display: grid;\\n  gap: 6rem;\\n  padding-bottom: 8rem;\\n  grid-template-columns: 1fr 1fr; }\\n\\n.project_text {\\n  font-size: 2rem;\\n  padding-bottom: 2rem; }\\n\\n.project_details {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: flex-start;\\n  padding-right: 6rem; }\\n\\n@media (max-width: 700px) {\\n  .project {\\n    display: flex;\\n    flex-direction: column; }\\n  .project_details {\\n    order: 2; }\\n  .project-image {\\n    padding-bottom: 2rem; } }\\n\\n/*BUTTON*/\\n.primary {\\n  font-size: 1.2rem;\\n  background: #fff;\\n  border: 0.2rem solid #000;\\n  padding: 1em 1.75em;\\n  margin-right: 1rem;\\n  font-weight: bold;\\n  box-shadow: 0.35em 0.35em 0 black;\\n  position: relative;\\n  cursor: pointer;\\n  transition: position 200ms ease-in-out; }\\n  .primary:hover {\\n    top: 0.15em;\\n    left: 0.15em;\\n    box-shadow: 0.2em 0.2em 0 black; }\\n  .primary:active {\\n    top: 0.35em;\\n    left: 0.35em;\\n    box-shadow: 0 0 0 black; }\\n  .primary:focus {\\n    outline: none; }\\n\\n/*CONTACT*/\\n.contact_text {\\n  font-size: 2.2rem;\\n  max-width: 40%;\\n  margin-bottom: 2rem; }\\n\\n/*FOOTER*/\\n.footer {\\n  background-color: #272727;\\n  font-size: 2rem;\\n  color: #bcbcbc;\\n  padding: 3rem 0 2rem 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n\\n.footer img {\\n  width: 6rem;\\n  padding: 1rem;\\n  cursor: pointer; }\\n\\n.footer img:hover {\\n  fill: red; }\\n\\n.footer_copyright {\\n  text-align: center; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/sal.js/dist/sal.js":
/*!*****************************************!*\
  !*** ./node_modules/sal.js/dist/sal.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"dist/\",n(n.s=0)}([function(e,t,n){\"use strict\";n.r(t);n(1);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=\"Sal was not initialised! Probably it is used in SSR.\",a=\"Your browser does not support IntersectionObserver!\\nGet a polyfill from here:\\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill\",s={rootMargin:\"0% 50%\",threshold:.5,animateClassName:\"sal-animate\",disabledClassName:\"sal-disabled\",enterEventName:\"sal:in\",exitEventName:\"sal:out\",selector:\"[data-sal]\",once:!0,disabled:!1},l=[],c=null,u=function(e){e&&e!==s&&(s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s,{},e))},f=function(e){e.classList.remove(s.animateClassName)},d=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},b=function(){document.body.classList.add(s.disabledClassName)},p=function(){c.disconnect(),c=null},m=function(){return s.disabled||\"function\"==typeof s.disabled&&s.disabled()},y=function(e,t){e.forEach((function(e){e.intersectionRatio>=s.threshold?(!function(e){e.target.classList.add(s.animateClassName),d(s.enterEventName,e)}(e),s.once&&t.unobserve(e.target)):s.once||function(e){f(e.target),d(s.exitEventName,e)}(e)}))},v=function(){b(),p()},O=function(){document.body.classList.remove(s.disabledClassName),c=new IntersectionObserver(y,{rootMargin:s.rootMargin,threshold:s.threshold}),(l=[].filter.call(document.querySelectorAll(s.selector),(function(e){return!function(e){return e.classList.contains(s.animateClassName)}(e,s.animateClassName)}))).forEach((function(e){return c.observe(e)}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(),Array.from(document.querySelectorAll(s.selector)).forEach(f),u(e),O()};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;if(u(e),\"undefined\"==typeof window)return console.warn(i),{elements:l,disable:v,enable:O,reset:g};if(!window.IntersectionObserver)throw b(),Error(a);return m()?b():O(),{elements:l,disable:v,enable:O,reset:g}}},function(e,t,n){}]).default}));\n//# sourceMappingURL=sal.js.map\n\n//# sourceURL=webpack:///./node_modules/sal.js/dist/sal.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\nvar sal = __webpack_require__(/*! sal.js */ \"./node_modules/sal.js/dist/sal.js\");\r\n\r\n\r\n\r\nconst body = document.querySelector(\".header\");\r\n\r\nconst arrow = document.querySelector(\".chevron-up-solid\");\r\n\r\nlet options = {\r\n  threshold: 0.5\r\n}\r\n\r\nconst observer1 = new IntersectionObserver(function(entries, observer) {\r\n  entries.forEach(entry => {\r\n    if (entry.isIntersecting) {\r\n      arrow.style.display = 'none';\r\n    } else {\r\n      arrow.style.display = 'block';\r\n    }\r\n  })\r\n}, options)\r\n\r\nobserver1.observe(body);\r\n\r\n//SAL\r\n\r\nsal();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ "./src/tag.svg":
/*!*********************!*\
  !*** ./src/tag.svg ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"imgs/tag.55dfbb3780f6e6ce4c88d51cff694dfe.svg\";\n\n//# sourceURL=webpack:///./src/tag.svg?");

/***/ })

/******/ });