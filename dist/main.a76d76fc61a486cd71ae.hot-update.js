"use strict";
self["webpackHotUpdatefls_start"]("main",{

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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/style.scss":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/style.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("../fonts/Roboto-Black.woff2") format("woff2"), url("../fonts/Roboto-Black.woff") format("woff");
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("../fonts/Roboto-Bold.woff2") format("woff2"), url("../fonts/Roboto-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("../fonts/Roboto-ExtraBold.woff2") format("woff2"), url("../fonts/Roboto-ExtraBold.woff") format("woff");
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("../fonts/Roboto-ExtraLight.woff2") format("woff2"), url("../fonts/Roboto-ExtraLight.woff") format("woff");
  font-weight: 200;
  font-style: normal;
}
@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("../fonts/Roboto-Light.woff2") format("woff2"), url("../fonts/Roboto-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("../fonts/Roboto-Medium.woff2") format("woff2"), url("../fonts/Roboto-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("../fonts/Roboto-Regular.woff2") format("woff2"), url("../fonts/Roboto-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("../fonts/Roboto-SemiBold.woff2") format("woff2"), url("../fonts/Roboto-SemiBold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: Roboto;
  font-display: swap;
  src: url("../fonts/Roboto-Thin.woff2") format("woff2"), url("../fonts/Roboto-Thin.woff") format("woff");
  font-weight: 100;
  font-style: normal;
}
[class*=icon-]:before {
  font-family: "icons";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class*=icon-]:before {
  display: block;
}

* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  min-width: 320px;
}

body {
  color: #000;
  line-height: 1;
  font-family: "Roboto";
  font-size: 0.875rem;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input,
button,
textarea {
  font-family: "Roboto";
  font-size: inherit;
}

button {
  cursor: pointer;
  color: inherit;
  background-color: inherit;
}

a {
  color: inherit;
}

a:link,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

body {
  background: #faf2f2;
  scrollbar-width: thin; /* "auto" или "thin"  */
  scrollbar-color: rgb(0, 0, 0) rgb(255, 255, 255);
}
.lock body {
  overflow: hidden;
  touch-action: none;
}
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.wrapper > main {
  flex: 1 1 auto;
}
.wrapper > * {
  min-width: 0;
}

/*
(i) Стили будут применяться ко 
всем классам содержащим *__container
Например header__container, main__container и т.д.
Снипет (HTML): cnt
*/
[class*=__container] {
  max-width: 68.75rem;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 0.9375rem;
}

input[type=text],
input[type=email],
input[type=tel],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.input {
  border-radius: 0 !important;
  width: 100%;
  display: block;
  padding: 0px 20px;
  border: 1px solid #eee;
}
textarea.input {
  resize: none;
  padding: 0px 0px;
}

.select {
  position: relative;
}
.select__body {
  position: relative;
}
.select__title {
  color: inherit;
  text-align: left;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
}
.select__value {
  display: flex;
  align-items: center;
  height: 1.875rem;
  padding: 0 0.9375rem;
  gap: 0.625rem;
}
.select__value > * {
  flex: 1 1 auto;
}
.select__value:after {
  content: "";
  align-self: stretch;
  flex: 0 0 10px;
  transition: all 0.3s ease 0s;
  display: flex;
  justify-content: center;
  align-items: center;
}
._select-open .select__value:after {
  transform: rotate(-180deg);
}
.select__value._select-pseudo-label::before {
  content: attr(data-pseudo-label);
  opacity: 0.5;
}
.select__text {
  flex: 1 1 auto;
}
.select__input {
  width: 100%;
  background-color: transparent;
  height: 100%;
}
.select__options {
  color: #000;
  position: absolute;
  top: 29px;
  border-radius: 0 0 4px 4px;
  min-width: 100%;
  left: 0;
  background-color: #fff;
  border-top: 0;
  border: 1px solid #d9d9d9;
  border-top: 0;
  padding: 10px 0px 5px 0px;
}
.select__scroll {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 200px;
}
.select__option {
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 5px 15px;
  color: inherit;
}
.select__option._select-selected {
  background-color: #eee;
}
@media (any-hover: hover) {
  .select__option:hover {
    background: #d9d9d9;
  }
}
.select__row {
  display: inline-flex;
  align-items: center;
}
.select._select-open {
  z-index: 5;
}
._select-tag {
  cursor: pointer;
}

/* Functional styling;
 * These styles are required for noUiSlider to function.
 * You don't need to change these rules to apply your design.
 */
.noUi-target,
.noUi-target * {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -ms-touch-action: none;
  touch-action: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.noUi-target {
  position: relative;
}

.noUi-base,
.noUi-connects {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}

/* Wrapper for all connect elements.
 */
.noUi-connects {
  overflow: hidden;
  z-index: 0;
}

.noUi-connect,
.noUi-origin {
  will-change: transform;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -webkit-transform-style: preserve-3d;
  transform-origin: 0 0;
  transform-style: flat;
}

/* Offset direction
 */
.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {
  left: 0;
  right: auto;
}

/* Give origins 0 height/width so they don't interfere with clicking the
 * connect elements.
 */
.noUi-vertical .noUi-origin {
  top: -100%;
  width: 0;
}

.noUi-horizontal .noUi-origin {
  height: 0;
}

.noUi-handle {
  backface-visibility: hidden;
  position: absolute;
}

.noUi-touch-area {
  height: 100%;
  width: 100%;
}

.noUi-state-tap .noUi-connect,
.noUi-state-tap .noUi-origin {
  transition: transform 0.3s;
}

.noUi-state-drag * {
  cursor: inherit !important;
}

/* Slider size and handle placement;
 */
.noUi-horizontal {
  height: 18px;
}

.noUi-horizontal .noUi-handle {
  width: 34px;
  height: 28px;
  right: -17px;
  top: -6px;
}

.noUi-vertical {
  width: 18px;
}

.noUi-vertical .noUi-handle {
  width: 28px;
  height: 34px;
  right: -6px;
  bottom: -17px;
}

.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {
  left: -17px;
  right: auto;
}

/* Styling;
 * Giving the connect element a border radius causes issues with using transform: scale
 */
.noUi-target {
  background: #fafafa;
  border-radius: 4px;
  border: 1px solid #d3d3d3;
  box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;
}

.noUi-connects {
  border-radius: 3px;
}

.noUi-connect {
  background: #3fb8af;
}

/* Handles and cursors;
 */
.noUi-draggable {
  cursor: ew-resize;
}

.noUi-vertical .noUi-draggable {
  cursor: ns-resize;
}

.noUi-handle {
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  background: #fff;
  cursor: default;
  box-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ebebeb, 0 3px 6px -3px #bbb;
}

.noUi-active {
  box-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ddd, 0 3px 6px -3px #bbb;
}

/* Handle stripes;
 */
.noUi-handle:before,
.noUi-handle:after {
  content: "";
  display: block;
  position: absolute;
  height: 14px;
  width: 1px;
  background: #e8e7e6;
  left: 14px;
  top: 6px;
}

.noUi-handle:after {
  left: 17px;
}

.noUi-vertical .noUi-handle:before,
.noUi-vertical .noUi-handle:after {
  width: 14px;
  height: 1px;
  left: 6px;
  top: 14px;
}

.noUi-vertical .noUi-handle:after {
  top: 17px;
}

/* Disabled state;
 */
[disabled] .noUi-connect {
  background: #b8b8b8;
}

[disabled].noUi-target,
[disabled].noUi-handle,
[disabled] .noUi-handle {
  cursor: not-allowed;
}

/* Base;
 *
 */
.noUi-pips,
.noUi-pips * {
  box-sizing: border-box;
}

.noUi-pips {
  position: absolute;
  color: #999;
}

/* Values;
 *
 */
.noUi-value {
  position: absolute;
  white-space: nowrap;
  text-align: center;
}

.noUi-value-sub {
  color: #ccc;
  font-size: 10px;
}

/* Markings;
 *
 */
.noUi-marker {
  position: absolute;
  background: #ccc;
}

.noUi-marker-sub {
  background: #aaa;
}

.noUi-marker-large {
  background: #aaa;
}

/* Horizontal layout;
 *
 */
.noUi-pips-horizontal {
  padding: 10px 0;
  height: 80px;
  top: 100%;
  left: 0;
  width: 100%;
}

.noUi-value-horizontal {
  transform: translate(-50%, 50%);
}

.noUi-rtl .noUi-value-horizontal {
  transform: translate(50%, 50%);
}

.noUi-marker-horizontal.noUi-marker {
  margin-left: -1px;
  width: 2px;
  height: 5px;
}

.noUi-marker-horizontal.noUi-marker-sub {
  height: 10px;
}

.noUi-marker-horizontal.noUi-marker-large {
  height: 15px;
}

/* Vertical layout;
 *
 */
.noUi-pips-vertical {
  padding: 0 10px;
  height: 100%;
  top: 0;
  left: 100%;
}

.noUi-value-vertical {
  transform: translate(0, -50%);
  padding-left: 25px;
}

.noUi-rtl .noUi-value-vertical {
  transform: translate(0, 50%);
}

.noUi-marker-vertical.noUi-marker {
  width: 5px;
  height: 2px;
  margin-top: -1px;
}

.noUi-marker-vertical.noUi-marker-sub {
  width: 10px;
}

.noUi-marker-vertical.noUi-marker-large {
  width: 15px;
}

.noUi-tooltip {
  display: block;
  position: absolute;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  background: #fff;
  color: #000;
  padding: 5px;
  text-align: center;
  white-space: nowrap;
}

.noUi-horizontal .noUi-tooltip {
  transform: translate(-50%, 0);
  left: 50%;
  bottom: 120%;
}

.noUi-vertical .noUi-tooltip {
  transform: translate(0, -50%);
  top: 50%;
  right: 120%;
}

.noUi-horizontal .noUi-origin > .noUi-tooltip {
  transform: translate(50%, 0);
  left: auto;
  bottom: 10px;
}

.noUi-vertical .noUi-origin > .noUi-tooltip {
  transform: translate(0, -18px);
  top: auto;
  right: 28px;
}

[class*=-ibg] {
  position: relative;
}
[class*=-ibg] img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}

[class*=-ibg_contain] img {
  object-fit: contain;
}

.header {
  background: #d9d9d9;
}
.header__container {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 3rem;
  justify-content: space-between;
}
.header__logo {
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 1.5625rem;
  text-align: center;
  color: #000;
}
.header__action {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}
.menu-open .setting {
  right: 0;
}

.money-open .money-entry {
  right: 0;
}

.setting,
.money-entry {
  position: absolute;
  height: 100vh;
  overflow: auto;
  background: #d5cccc;
  transition: all 0.3s ease 0s;
  right: -900px;
  top: 0;
  max-width: 478px;
  width: 100%;
  padding: 0.625rem 1.25rem 2.5rem;
  z-index: 4;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: hsl(0, 0%, 50%);
}
.setting__title,
.money-entry__title {
  font-weight: 400;
  color: #000;
}
@supports (font-size: clamp( 1.25rem , 1.0030864198rem  +  1.2345679012vw , 1.875rem )) {
  .setting__title,
  .money-entry__title {
    font-size: clamp( 1.25rem , 1.0030864198rem  +  1.2345679012vw , 1.875rem );
  }
}
@supports not (font-size: clamp( 1.25rem , 1.0030864198rem  +  1.2345679012vw , 1.875rem )) {
  .setting__title,
  .money-entry__title {
    font-size: calc(1.25rem + 0.625 * (100vw - 20rem) / 50.625);
  }
}
.setting__list,
.money-entry__list {
  margin-top: 1.5625rem;
  max-width: 60.8%;
}
.setting__item:not(:last-child),
.money-entry__item:not(:last-child) {
  margin-bottom: 1.125rem;
}
.setting__button,
.money-entry__button {
  margin-top: 1.25rem;
  max-width: 60.8%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.625rem;
}

.item-setting__title,
.item-money-entry__title {
  font-family: var(--font-family);
  font-weight: 400;
  color: #000;
}
@supports (font-size: clamp( 1rem , 0.7777777778rem  +  1.1111111111vw , 1.5625rem )) {
  .item-setting__title,
  .item-money-entry__title {
    font-size: clamp( 1rem , 0.7777777778rem  +  1.1111111111vw , 1.5625rem );
  }
}
@supports not (font-size: clamp( 1rem , 0.7777777778rem  +  1.1111111111vw , 1.5625rem )) {
  .item-setting__title,
  .item-money-entry__title {
    font-size: calc(1rem + 0.5625 * (100vw - 20rem) / 50.625);
  }
}
.item-setting__slider,
.item-money-entry__slider {
  margin-top: 0.6875rem;
}
.item-setting__slider.noUi-horizontal,
.item-money-entry__slider.noUi-horizontal {
  height: 7px;
}
.item-setting__slider.noUi-target,
.item-money-entry__slider.noUi-target {
  background-color: #fff;
}
.item-setting__slider.noUi-horizontal .noUi-handle,
.item-money-entry__slider.noUi-horizontal .noUi-handle {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  right: -17px;
  top: -9px;
  cursor: pointer;
}
.item-setting__slider.noUi-connect,
.item-money-entry__slider.noUi-connect {
  background: rgba(255, 255, 255, 0.0117647059);
}
.item-setting__slider .noUi-connect,
.item-money-entry__slider .noUi-connect {
  background: #000;
}
.item-setting__slider .noUi-handle:before, .item-setting__slider .noUi-handle:after,
.item-money-entry__slider .noUi-handle:before,
.item-money-entry__slider .noUi-handle:after {
  height: 16px;
  width: 16px;
  background: #000;
  left: 3px;
  top: 3px;
  border-radius: 100%;
}
.item-setting__select,
.item-money-entry__select {
  margin-top: 1.125rem;
}
.item-setting__value,
.item-money-entry__value {
  margin-top: 0.75rem;
  font-size: 0.8125rem;
}
.item-setting__value span,
.item-money-entry__value span {
  font-size: 1rem;
}

.icon-menu {
  display: block;
  position: relative;
  width: 1.875rem;
  height: 1.125rem;
  cursor: pointer;
  z-index: 5;
}
.icon-menu span, .icon-menu::before, .icon-menu::after {
  content: "";
  transition: all 0.3s ease 0s;
  right: 0;
  position: absolute;
  width: 100%;
  height: 0.125rem;
  background-color: #000;
}
.icon-menu::before {
  top: 0;
}
.icon-menu::after {
  bottom: 0;
}
.icon-menu span {
  top: calc(50% - 0.0625rem);
}
.menu-open .icon-menu span {
  width: 0;
}
.menu-open .icon-menu::before {
  top: calc(50% - 0.0625rem);
  transform: rotate(-45deg);
}
.menu-open .icon-menu::after {
  bottom: calc(50% - 0.0625rem);
  transform: rotate(45deg);
}

.icon-money svg {
  width: 100%;
  max-width: 2.16875rem;
}

.jugs {
  margin-top: 1.0625rem;
}
.jugs__items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}
@supports (gap: clamp( 0.625rem , -0.1898148148rem  +  4.0740740741vw , 2.6875rem )) {
  .jugs__items {
    gap: clamp( 0.625rem , -0.1898148148rem  +  4.0740740741vw , 2.6875rem );
  }
}
@supports not (gap: clamp( 0.625rem , -0.1898148148rem  +  4.0740740741vw , 2.6875rem )) {
  .jugs__items {
    gap: calc(0.625rem + 2.0625 * (100vw - 20rem) / 50.625);
  }
}
@media (max-width: 47.99875em) {
  .jugs__items {
    grid-template-columns: repeat(2, 1fr);
  }
}
.jugs__item {
  max-width: 15.625rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.625rem;
}

.item-jugs__title {
  font-weight: 400;
  text-align: center;
  color: #000;
}
@supports (font-size: clamp( 1rem , 0.7777777778rem  +  1.1111111111vw , 1.5625rem )) {
  .item-jugs__title {
    font-size: clamp( 1rem , 0.7777777778rem  +  1.1111111111vw , 1.5625rem );
  }
}
@supports not (font-size: clamp( 1rem , 0.7777777778rem  +  1.1111111111vw , 1.5625rem )) {
  .item-jugs__title {
    font-size: calc(1rem + 0.5625 * (100vw - 20rem) / 50.625);
  }
}
.item-jugs__body {
  position: relative;
  font-weight: 400;
  text-align: center;
  color: #000;
}
@supports (font-size: clamp( 1rem , 0.7777777778rem  +  1.1111111111vw , 1.5625rem )) {
  .item-jugs__body {
    font-size: clamp( 1rem , 0.7777777778rem  +  1.1111111111vw , 1.5625rem );
  }
}
@supports not (font-size: clamp( 1rem , 0.7777777778rem  +  1.1111111111vw , 1.5625rem )) {
  .item-jugs__body {
    font-size: calc(1rem + 0.5625 * (100vw - 20rem) / 50.625);
  }
}
.item-jugs__body-top {
  position: absolute;
  top: 19.8%;
  left: 50%;
  transform: translateX(-50%);
}
@supports (font-size: clamp( 1.4375rem , 1.1165123457rem  +  1.6049382716vw , 2.25rem )) {
  .item-jugs__body-top-percent {
    font-size: clamp( 1.4375rem , 1.1165123457rem  +  1.6049382716vw , 2.25rem );
  }
}
@supports not (font-size: clamp( 1.4375rem , 1.1165123457rem  +  1.6049382716vw , 2.25rem )) {
  .item-jugs__body-top-percent {
    font-size: calc(1.4375rem + 0.8125 * (100vw - 20rem) / 50.625);
  }
}
.item-jugs__body-bottom {
  position: absolute;
  bottom: 11.1%;
  left: 50%;
  transform: translateX(-50%);
}
.button {
  font-size: 0.875rem;
  color: #fff;
  background: #000;
  border-radius: 1.5625rem;
  padding: 0.625rem 1.5625rem;
}
@media (any-hover: hover) {
  .button:hover {
    color: black;
    background: #fff;
  }
  .button:hover line {
    stroke: #000;
  }
}
.button:active {
  transform: translateY(5px) scale(1.01);
}
.button.good {
  animation: animation-good 8s ease;
}
.button.error {
  animation: animation-error 8s ease;
}
@keyframes animation-good {
  0% {
    background-color: #18ab30;
  }
  100% {
    background-color: #000;
  }
}
@keyframes animation-error {
  0% {
    background-color: #d31616;
  }
  100% {
    background-color: #000;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/fonts/fonts.scss","webpack://./src/scss/fonts/icons.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base/forms/input.scss","webpack://./src/scss/base/forms/select.scss","webpack://./src/scss/base/forms/range.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/home.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,mBAAA;EACA,kBAAA;EACA,yGACE;EAEF,gBAAA;EACA,kBAAA;ADAF;ACEA;EACE,mBAAA;EACA,kBAAA;EACA,uGACE;EAEF,gBAAA;EACA,kBAAA;ADFF;ACIA;EACE,mBAAA;EACA,kBAAA;EACA,iHACE;EAEF,gBAAA;EACA,kBAAA;ADJF;ACMA;EACE,mBAAA;EACA,kBAAA;EACA,mHACE;EAEF,gBAAA;EACA,kBAAA;ADNF;ACQA;EACE,mBAAA;EACA,kBAAA;EACA,yGACE;EAEF,gBAAA;EACA,kBAAA;ADRF;ACUA;EACE,mBAAA;EACA,kBAAA;EACA,2GACE;EAEF,gBAAA;EACA,kBAAA;ADVF;ACYA;EACE,mBAAA;EACA,kBAAA;EACA,6GACE;EAEF,gBAAA;EACA,kBAAA;ADZF;ACcA;EACE,mBAAA;EACA,kBAAA;EACA,+GACE;EAEF,gBAAA;EACA,kBAAA;ADdF;ACgBA;EACE,mBAAA;EACA,kBAAA;EACA,uGACE;EAEF,gBAAA;EACA,kBAAA;ADhBF;AE/DA;EACC,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EACA,oBAAA;EACA,cAAA;EACA,mCAAA;EACA,kCAAA;AFiED;;AE9DC;EAEC,cAAA;AFgEF;;AG7EA;EACC,YAAA;EACA,WAAA;EACA,WAAA;AHgFD;;AG9EA;;;EAGC,sBAAA;AHiFD;;AGvEA;;EAEC,YAAA;EACA,gBAAA;AH0ED;;AGxEA;EACC,WHHW;EGIX,cAAA;EACA,qBHTY;EGUZ,mBHTU;EGWV,0BAAA;EACA,2BAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;AH0ED;;AGxEA;;;EAGC,qBHrBY;EGsBZ,kBAAA;AH2ED;;AGzEA;EACC,eAAA;EACA,cAAA;EACA,yBAAA;AH4ED;;AG1EA;EACC,cAAA;AH6ED;;AG3EA;;EAEC,qBAAA;AH8ED;;AG5EA;EACC,qBAAA;AH+ED;;AG7EA;EACC,gBAAA;AHgFD;;AG9EA;EACC,mBAAA;AHiFD;;AG/EA;;;;;;EAMC,oBAAA;EACA,kBAAA;AHkFD;;AAlGA;EACE,mBAAA;EACA,qBAAA,EAAA,uBAAA;EACA,gDAAA;AAqGF;AAnGE;EACE,gBAAA;EACA,kBAAA;AAqGJ;AA9FA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AAgGF;AA9FE;EACE,cAAA;AAgGJ;AA7FE;EACE,YAAA;AA+FJ;;AA1FA;;;;;CAAA;AAQE;EAEI,mBAAA;EACA,uBAAA;EACA,cAAA;EAGA,oBAAA;AAwFN;;AIxLA;;;;EAIC,wBAAA;EACA,qBAAA;EACA,gBAAA;AJ2LD;;AIzLA;EACC,2BAAA;EACA,WAAA;EACA,cAAA;EACA,iBAAA;EACA,sBAAA;AJ4LD;AItLA;EACC,YAAA;EACA,gBAAA;AJwLD;;AK7MA;EACC,kBAAA;ALgND;AK9MC;EACC,kBAAA;ALgNF;AK7MC;EACC,cAAA;EACA,gBAAA;EACA,yBAAA;EACA,sBAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;AL+MF;AK5MC;EACC,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;AL8MF;AK7ME;EACC,cAAA;AL+MH;AK7ME;EACC,WAAA;EACA,mBAAA;EACA,cAAA;EACA,4BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AL+MH;AK9MG;EACC,0BAAA;ALgNJ;AK5MG;EACC,gCAAA;EACA,YAAA;AL8MJ;AKzMC;EACC,cAAA;AL2MF;AKzMC;EACC,WAAA;EACA,6BAAA;EACA,YAAA;AL2MF;AKxMC;EACC,WAAA;EACA,kBAAA;EACA,SAAA;EACA,0BAAA;EACA,eAAA;EACA,OAAA;EACA,sBAAA;EACA,aAAA;EACA,yBAAA;EACA,aAAA;EACA,yBAAA;AL0MF;AKvMC;EACC,gBAAA;EACA,kBAAA;EAEA,iBAAA;ALwMF;AK/LC;EACC,WAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;ALiMF;AKhME;EACC,sBAAA;ALkMH;AKhME;EACC;IACC,mBAAA;ELkMF;AACF;AK7LC;EACC,oBAAA;EACA,mBAAA;AL+LF;AKvLC;EACC,UAAA;ALyLF;AK1KA;EACC,eAAA;AL4KD;;AM5SA;;;EAAA;AAIA;;EAEC,2BAAA;EACA,6CAAA;EACA,yBAAA;EACA,sBAAA;EACA,kBAAA;EACA,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,2BAAA;EACA,sBAAA;AN+SD;;AM7SA;EACC,kBAAA;ANgTD;;AM9SA;;EAEC,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;ANiTD;;AM/SA;EAAA;AAEA;EACC,gBAAA;EACA,UAAA;ANkTD;;AMhTA;;EAEC,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,MAAA;EACA,QAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;EACA,6BAAA;EACA,oCAAA;EACA,qBAAA;EACA,qBAAA;ANmTD;;AMjTA;EAAA;AAEA;EACC,OAAA;EACA,WAAA;ANoTD;;AMlTA;;EAAA;AAGA;EACC,UAAA;EACA,QAAA;ANqTD;;AMnTA;EACC,SAAA;ANsTD;;AMpTA;EACC,2BAAA;EACA,kBAAA;ANuTD;;AMrTA;EACC,YAAA;EACA,WAAA;ANwTD;;AMtTA;;EAEC,0BAAA;ANyTD;;AMvTA;EACC,0BAAA;AN0TD;;AMxTA;EAAA;AAEA;EACC,YAAA;AN2TD;;AMzTA;EACC,WAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AN4TD;;AM1TA;EACC,WAAA;AN6TD;;AM3TA;EACC,WAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;AN8TD;;AM5TA;EACC,WAAA;EACA,WAAA;AN+TD;;AM7TA;;EAAA;AAGA;EACC,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,wDAAA;ANgUD;;AM9TA;EACC,kBAAA;ANiUD;;AM/TA;EACC,mBAAA;ANkUD;;AMhUA;EAAA;AAEA;EACC,iBAAA;ANmUD;;AMjUA;EACC,iBAAA;ANoUD;;AMlUA;EACC,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,4EAAA;ANqUD;;AMnUA;EACC,yEAAA;ANsUD;;AMpUA;EAAA;AAEA;;EAEC,WAAA;EACA,cAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,mBAAA;EACA,UAAA;EACA,QAAA;ANuUD;;AMrUA;EACC,UAAA;ANwUD;;AMtUA;;EAEC,WAAA;EACA,WAAA;EACA,SAAA;EACA,SAAA;ANyUD;;AMvUA;EACC,SAAA;AN0UD;;AMxUA;EAAA;AAEA;EACC,mBAAA;AN2UD;;AMzUA;;;EAGC,mBAAA;AN4UD;;AM1UA;;EAAA;AAGA;;EAEC,sBAAA;AN6UD;;AM3UA;EACC,kBAAA;EACA,WAAA;AN8UD;;AM5UA;;EAAA;AAGA;EACC,kBAAA;EACA,mBAAA;EACA,kBAAA;AN+UD;;AM7UA;EACC,WAAA;EACA,eAAA;ANgVD;;AM9UA;;EAAA;AAGA;EACC,kBAAA;EACA,gBAAA;ANiVD;;AM/UA;EACC,gBAAA;ANkVD;;AMhVA;EACC,gBAAA;ANmVD;;AMjVA;;EAAA;AAGA;EACC,eAAA;EACA,YAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;ANoVD;;AMlVA;EACC,+BAAA;ANqVD;;AMnVA;EACC,8BAAA;ANsVD;;AMpVA;EACC,iBAAA;EACA,UAAA;EACA,WAAA;ANuVD;;AMrVA;EACC,YAAA;ANwVD;;AMtVA;EACC,YAAA;ANyVD;;AMvVA;;EAAA;AAGA;EACC,eAAA;EACA,YAAA;EACA,MAAA;EACA,UAAA;AN0VD;;AMxVA;EACC,6BAAA;EACA,kBAAA;AN2VD;;AMzVA;EACC,4BAAA;AN4VD;;AM1VA;EACC,UAAA;EACA,WAAA;EACA,gBAAA;AN6VD;;AM3VA;EACC,WAAA;AN8VD;;AM5VA;EACC,WAAA;AN+VD;;AM7VA;EACC,cAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;ANgWD;;AM9VA;EACC,6BAAA;EACA,SAAA;EACA,YAAA;ANiWD;;AM/VA;EACC,6BAAA;EACA,QAAA;EACA,WAAA;ANkWD;;AMhWA;EACC,4BAAA;EACA,UAAA;EACA,YAAA;ANmWD;;AMjWA;EACC,8BAAA;EACA,SAAA;EACA,WAAA;ANoWD;;AO3mBA;EACC,kBAAA;AP8mBD;AO7mBC;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,iBAAA;AP+mBF;;AO3mBC;EACC,mBAAA;AP8mBF;;AQtpBA;EACE,mBAAA;ARypBF;AQxpBE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,8BAAA;AR0pBJ;AQvpBE;EACE,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,WAAA;ARypBJ;AQtpBE;EACE,aAAA;EACA,mBAAA;EACA,aAAA;ARwpBJ;AQjoBE;EACE,QAAA;ARmoBJ;;AQ/nBE;EACE,QAAA;ARkoBJ;;AQ/nBA;;EAEE,kBAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,4BAAA;EACA,aAAA;EAEA,MAAA;EACA,gBAAA;EACA,WAAA;EACA,gCAAA;EACA,UAAA;EAEA,cAAA;EACA,qBAAA;EACA,gCAAA;ARgoBF;AQ/nBE;;EACE,gBAAA;EAEA,WAAA;ARioBJ;AS/nBC;EDLC;;ICMA,2EARe;ET2oBf;AACF;ASjoBC;EDTC;;ICUA,2DAAA;ETqoBA;AACF;AQ1oBE;;EACE,qBAAA;EACA,gBAAA;AR6oBJ;AQzoBI;;EACE,uBAAA;AR4oBN;AQxoBE;;EACE,mBAAA;EACA,gBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;AR2oBJ;;AQtoBE;;EACE,+BAAA;EACA,gBAAA;EAEA,WAAA;ARyoBJ;ASrqBC;EDwBC;;ICvBA,yEARe;ETirBf;AACF;ASvqBC;EDoBC;;ICnBA,yDAAA;ET2qBA;AACF;AQlpBE;;EACE,qBAAA;ARqpBJ;AQppBI;;EACE,WAAA;ARupBN;AQrpBI;;EACE,sBAAA;ARwpBN;AQtpBI;;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,SAAA;EACA,eAAA;ARypBN;AQvpBI;;EACE,6CAAA;AR0pBN;AQxpBI;;EACE,gBAAA;AR2pBN;AQzpBI;;;EAEE,YAAA;EACA,WAAA;EACA,gBAAA;EACA,SAAA;EACA,QAAA;EACA,mBAAA;AR4pBN;AQxpBE;;EACE,oBAAA;AR2pBJ;AQzpBE;;EACE,mBAAA;EACA,oBAAA;AR4pBJ;AQ3pBI;;EACE,eAAA;AR8pBN;;AQrpBA;EACE,cAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,UAAA;ARwpBF;AQvpBE;EAGE,WAAA;EACA,4BAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,sBAAA;ARupBJ;AQrpBE;EACE,MAAA;ARupBJ;AQrpBE;EACE,SAAA;ARupBJ;AQrpBE;EACE,0BAAA;ARupBJ;AQppBI;EACE,QAAA;ARspBN;AQjpBI;EACE,0BAAA;EACA,yBAAA;ARmpBN;AQjpBI;EACE,6BAAA;EACA,wBAAA;ARmpBN;;AQ7oBE;EACE,WAAA;EACA,qBAAA;ARgpBJ;;AUz1BA;EACE,qBAAA;AV41BF;AU31BE;EACE,aAAA;EAEA,qCAAA;EACA,qBAAA;AV41BJ;ASzxBC;ECvEC;IDwEA,wEARe;EToyBf;AACF;AS1xBC;EC3EC;ID4EA,uDAAA;ET6xBA;AACF;AUr2BI;EALF;IAMI,qCAAA;EVw2BJ;AACF;AUr2BE;EACE,oBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,aAAA;AVu2BJ;;AUn2BE;EACE,gBAAA;EAEA,kBAAA;EACA,WAAA;AVq2BJ;AStzBC;ECnDC;IDoDA,yEARe;ETi0Bf;AACF;ASvzBC;ECvDC;IDwDA,yDAAA;ET0zBA;AACF;AU52BE;EACE,kBAAA;EACA,gBAAA;EAEA,kBAAA;EACA,WAAA;AV62BJ;ASt0BC;EC5CC;ID6CA,yEARe;ETi1Bf;AACF;ASv0BC;EChDC;IDiDA,yDAAA;ET00BA;AACF;AUp3BE;EACE,kBAAA;EACA,UAAA;EACA,SAAA;EACA,2BAAA;AVs3BJ;ASt1BC;EC7BC;ID8BA,4EARe;ETi2Bf;AACF;ASv1BC;ECjCC;IDkCA,8DAAA;ET01BA;AACF;AUt3BE;EACE,kBAAA;EACA,aAAA;EACA,SAAA;EACA,2BAAA;AVw3BJ;AU/2BA;EACE,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,wBAAA;EACA,2BAAA;AVi3BF;AUh3BE;EACE;IACE,YAAA;IACA,gBAAA;EVk3BJ;EUj3BI;IACE,YAAA;EVm3BN;AACF;AUh3BE;EACE,sCAAA;AVk3BJ;AU/2BE;EACE,iCAAA;AVi3BJ;AU/2BE;EACE,kCAAA;AVi3BJ;AU/2BE;EACE;IACE,yBAAA;EVi3BJ;EU/2BE;IACE,sBAAA;EVi3BJ;AACF;AU/2BE;EACE;IACE,yBAAA;EVi3BJ;EU/2BE;IACE,sBAAA;EVi3BJ;AACF","sourcesContent":["@use \"sass:math\";\r\n\r\n// Подключение миксинов ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Подключение шрифтов ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - добавить при подключении через плагин\r\n//&display=swap - добавить при подключении через плагин\r\n\r\n// Подключить если есть локальные файлы шрифтов\r\n@import \"fonts/fonts\";\r\n\r\n// Подключение иконочных шрифтов ==============================================================================================================================================================================================================================================================================\r\n// Подключить если есть файл иконочного шрифта\r\n@import \"fonts/icons\";\r\n\r\n// Шрифт по умолчанию ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Roboto\";\r\n$fontSize: rem(14); // где 14(px) - размер шрифта по умолчанию из макета\r\n\r\n// Основные цвета\r\n$mainColor: #000; // Цвет шрифта по умолчанию\r\n\r\n// НАСТРОЙКИ ===============================================================================================================================================================================================================================================================================================\r\n// Минимальная ширина страницы\r\n$minWidth: 320;\r\n// Ширина полотна (макета)\r\n$maxWidth: 1920;\r\n// Ширина ограничивающего контейнера (0 = нет ограничения)\r\n$maxWidthContainer: 1100;\r\n// Общий отступ у контейнера\r\n// (30 = по 15px слева и справа, 0 = нет отступа)\r\n$containerPadding: 30;\r\n\r\n// Ширина срабатывания первого брейкпоинта\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поинты\r\n$pc: em(\r\n  $containerWidth\r\n); // ПК, ноутбуки, некоторые планшеты в горизонтальном положении\r\n$tablet: em(991.98); // Планшеты, некоторые телефоны в горизонтальном положении\r\n$mobile: em(767.98); // Телефоны L\r\n$mobileSmall: em(479.98); // Телефоны S\r\n\r\n// Тип адаптива:\r\n// 1 = отзывчивость (у контейнера нет брейкпоинтов),\r\n// 2 = по брейк-поинтам (контейнер меняет свою ширину по брейк-поинтам)\r\n$responsiveType: 1;\r\n\r\n// Обнуление и общие параметры ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\nbody {\r\n  background: #faf2f2;\r\n  scrollbar-width: thin; /* \"auto\" или \"thin\"  */\r\n  scrollbar-color: rgb(0, 0, 0) rgb(255, 255, 255);\r\n  // Скролл заблокирован\r\n  .lock & {\r\n    overflow: hidden;\r\n    touch-action: none;\r\n  }\r\n  // Сайт загружен\r\n  .loaded & {\r\n  }\r\n}\r\n// Оболочка ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n  // Прижимаем footer\r\n  > main {\r\n    flex: 1 1 auto;\r\n  }\r\n  // Фикс для слайдеров\r\n  > * {\r\n    min-width: 0;\r\n  }\r\n}\r\n// Ограничивающий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стили будут применяться ко \r\nвсем классам содержащим *__container\r\nНапример header__container, main__container и т.д.\r\nСнипет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n  // Отзывчивая\r\n  [class*=\"__container\"] {\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($maxWidthContainer);\r\n      box-sizing: content-box;\r\n      margin: 0 auto;\r\n    }\r\n    @if ($containerPadding>0) {\r\n      padding: 0 rem(math.div($containerPadding, 2));\r\n    }\r\n  }\r\n} @else {\r\n  // По брейк-поинтам\r\n  [class*=\"__container\"] {\r\n    margin: 0 auto;\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($maxWidthContainer);\r\n      box-sizing: content-box;\r\n    } @else {\r\n      @if ($containerPadding>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n    @media (max-width: $pc) {\r\n      max-width: rem(970);\r\n    }\r\n    @media (max-width: $tablet) {\r\n      max-width: rem(750);\r\n    }\r\n    @media (max-width: $mobile) {\r\n      max-width: none;\r\n      @if ($containerPadding>0 and $maxWidthContainer>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Подключение базовых стилей, шаблонов (заготовок) и вспомогательных  классов\r\n// Для подключения/отключения конкретных стилей смотри base.scss\r\n@import \"base\";\r\n\r\n// Подключение стилей общих элементов проекта\r\n@import \"common\";\r\n\r\n// Подключение стилей отдельных блоков\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Подключение стилей отдельных страниц\r\n@import \"home\";\r\n","@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-Black.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-Black.woff\") format(\"woff\");\n  font-weight: 900;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-Bold.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-Bold.woff\") format(\"woff\");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-ExtraBold.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-ExtraBold.woff\") format(\"woff\");\n  font-weight: 800;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-ExtraLight.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-ExtraLight.woff\") format(\"woff\");\n  font-weight: 200;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-Light.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-Light.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-Medium.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-Regular.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-SemiBold.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-SemiBold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-Thin.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-Thin.woff\") format(\"woff\");\n  font-weight: 100;\n  font-style: normal;\n}\n","%ic {\r\n\tfont-family: \"icons\";\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\tfont-variant: normal;\r\n\ttext-transform: none;\r\n\tline-height: 1;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n[class*=\"icon-\"] {\r\n\t&:before {\r\n\t\t@extend %ic;\r\n\t\tdisplay: block;\r\n\t}\r\n}\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: inherit;\r\n}\r\na {\r\n\tcolor: inherit;\r\n}\r\na:link,\r\na:visited {\r\n\ttext-decoration: none;\r\n}\r\na:hover {\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","//<INPUT>\r\n// Снипет (HTML): inp\r\ninput[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"tel\"],\r\ntextarea {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\n.input {\r\n\tborder-radius: 0 !important;\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tpadding: 0px 20px;\r\n\tborder: 1px solid #eee;\r\n\t&._form-focus {\r\n\t}\r\n\t&._form-error {\r\n\t}\r\n}\r\ntextarea.input {\r\n\tresize: none;\r\n\tpadding: 0px 0px;\r\n}\r\n","// <SELECT>\r\n// Снипет (HTML): sel\r\n.select {\r\n\tposition: relative;\r\n\t// .select__body\r\n\t&__body {\r\n\t\tposition: relative;\r\n\t}\r\n\t// .select__title\r\n\t&__title {\r\n\t\tcolor: inherit;\r\n\t\ttext-align: left;\r\n\t\tborder: 1px solid #d9d9d9;\r\n\t\tbackground-color: #fff;\r\n\t\tcursor: pointer;\r\n\t\twidth: 100%;\r\n\t\tborder-radius: 4px;\r\n\t}\r\n\t// .select__value\r\n\t&__value {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\theight: rem(30);\r\n\t\tpadding: 0 rem(15);\r\n\t\tgap: rem(10);\r\n\t\t> * {\r\n\t\t\tflex: 1 1 auto;\r\n\t\t}\r\n\t\t&:after {\r\n\t\t\tcontent: \"\";\r\n\t\t\talign-self: stretch;\r\n\t\t\tflex: 0 0 10px;\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\t._select-open & {\r\n\t\t\t\ttransform: rotate(-180deg);\r\n\t\t\t}\r\n\t\t}\r\n\t\t&._select-pseudo-label {\r\n\t\t\t&::before {\r\n\t\t\t\tcontent: attr(data-pseudo-label);\r\n\t\t\t\topacity: 0.5;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t// .select__text\r\n\t&__text {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t&__input {\r\n\t\twidth: 100%;\r\n\t\tbackground-color: transparent;\r\n\t\theight: 100%;\r\n\t}\r\n\t// .select__options\r\n\t&__options {\r\n\t\tcolor: #000;\r\n\t\tposition: absolute;\r\n\t\ttop: 29px;\r\n\t\tborder-radius: 0 0 4px 4px;\r\n\t\tmin-width: 100%;\r\n\t\tleft: 0;\r\n\t\tbackground-color: #fff;\r\n\t\tborder-top: 0;\r\n\t\tborder: 1px solid #d9d9d9;\r\n\t\tborder-top: 0;\r\n\t\tpadding: 10px 0px 5px 0px;\r\n\t}\r\n\t// .select__scroll\r\n\t&__scroll {\r\n\t\toverflow-y: auto;\r\n\t\toverflow-x: hidden;\r\n\t\t// Максимальная высота\r\n\t\tmax-height: 200px;\r\n\t\t// Стили скроллбара\r\n\t\t.simplebar-scrollbar {\r\n\t\t\t&::before {\r\n\t\t\t\t//opacity: 1;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t// .select__option\r\n\t&__option {\r\n\t\twidth: 100%;\r\n\t\ttext-align: left;\r\n\t\tcursor: pointer;\r\n\t\tpadding: 5px 15px;\r\n\t\tcolor: inherit;\r\n\t\t&._select-selected {\r\n\t\t\tbackground-color: #eee;\r\n\t\t}\r\n\t\t@media (any-hover: hover) {\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground: #d9d9d9;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t// Конструкция дополнительных данных\r\n\t&__row {\r\n\t\tdisplay: inline-flex;\r\n\t\talign-items: center;\r\n\t}\r\n\t&__asset {\r\n\t}\r\n\t&__text {\r\n\t}\r\n\r\n\t// Состояния селекта\r\n\t&._select-open {\r\n\t\tz-index: 5;\r\n\t}\r\n\t&._select-disabled {\r\n\t}\r\n\t&._select-active {\r\n\t}\r\n\t&._select-focus {\r\n\t}\r\n\t&._select-multiple {\r\n\t}\r\n\t&._select-checkbox {\r\n\t}\r\n}\r\n\r\n// Тег\r\n._select-tag {\r\n\tcursor: pointer;\r\n}\r\n","/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n\t-webkit-touch-callout: none;\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\t-webkit-user-select: none;\n\t-ms-touch-action: none;\n\ttouch-action: none;\n\t-ms-user-select: none;\n\t-moz-user-select: none;\n\tuser-select: none;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n}\n.noUi-target {\n\tposition: relative;\n}\n.noUi-base,\n.noUi-connects {\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n\tz-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n\toverflow: hidden;\n\tz-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n\twill-change: transform;\n\tposition: absolute;\n\tz-index: 1;\n\ttop: 0;\n\tright: 0;\n\theight: 100%;\n\twidth: 100%;\n\t-ms-transform-origin: 0 0;\n\t-webkit-transform-origin: 0 0;\n\t-webkit-transform-style: preserve-3d;\n\ttransform-origin: 0 0;\n\ttransform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n\tleft: 0;\n\tright: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n\ttop: -100%;\n\twidth: 0;\n}\n.noUi-horizontal .noUi-origin {\n\theight: 0;\n}\n.noUi-handle {\n\tbackface-visibility: hidden;\n\tposition: absolute;\n}\n.noUi-touch-area {\n\theight: 100%;\n\twidth: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n\ttransition: transform 0.3s;\n}\n.noUi-state-drag * {\n\tcursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n\theight: 18px;\n}\n.noUi-horizontal .noUi-handle {\n\twidth: 34px;\n\theight: 28px;\n\tright: -17px;\n\ttop: -6px;\n}\n.noUi-vertical {\n\twidth: 18px;\n}\n.noUi-vertical .noUi-handle {\n\twidth: 28px;\n\theight: 34px;\n\tright: -6px;\n\tbottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n\tleft: -17px;\n\tright: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n\tbackground: #fafafa;\n\tborder-radius: 4px;\n\tborder: 1px solid #d3d3d3;\n\tbox-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;\n}\n.noUi-connects {\n\tborder-radius: 3px;\n}\n.noUi-connect {\n\tbackground: #3fb8af;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n\tcursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n\tcursor: ns-resize;\n}\n.noUi-handle {\n\tborder: 1px solid #d9d9d9;\n\tborder-radius: 3px;\n\tbackground: #fff;\n\tcursor: default;\n\tbox-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ebebeb, 0 3px 6px -3px #bbb;\n}\n.noUi-active {\n\tbox-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ddd, 0 3px 6px -3px #bbb;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n\tcontent: \"\";\n\tdisplay: block;\n\tposition: absolute;\n\theight: 14px;\n\twidth: 1px;\n\tbackground: #e8e7e6;\n\tleft: 14px;\n\ttop: 6px;\n}\n.noUi-handle:after {\n\tleft: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n\twidth: 14px;\n\theight: 1px;\n\tleft: 6px;\n\ttop: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n\ttop: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n\tbackground: #b8b8b8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n\tcursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n\tbox-sizing: border-box;\n}\n.noUi-pips {\n\tposition: absolute;\n\tcolor: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n\tposition: absolute;\n\twhite-space: nowrap;\n\ttext-align: center;\n}\n.noUi-value-sub {\n\tcolor: #ccc;\n\tfont-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n\tposition: absolute;\n\tbackground: #ccc;\n}\n.noUi-marker-sub {\n\tbackground: #aaa;\n}\n.noUi-marker-large {\n\tbackground: #aaa;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n\tpadding: 10px 0;\n\theight: 80px;\n\ttop: 100%;\n\tleft: 0;\n\twidth: 100%;\n}\n.noUi-value-horizontal {\n\ttransform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n\ttransform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n\tmargin-left: -1px;\n\twidth: 2px;\n\theight: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n\theight: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n\theight: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n\tpadding: 0 10px;\n\theight: 100%;\n\ttop: 0;\n\tleft: 100%;\n}\n.noUi-value-vertical {\n\ttransform: translate(0, -50%);\n\tpadding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n\ttransform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n\twidth: 5px;\n\theight: 2px;\n\tmargin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n\twidth: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n\twidth: 15px;\n}\n.noUi-tooltip {\n\tdisplay: block;\n\tposition: absolute;\n\tborder: 1px solid #d9d9d9;\n\tborder-radius: 3px;\n\tbackground: #fff;\n\tcolor: #000;\n\tpadding: 5px;\n\ttext-align: center;\n\twhite-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n\ttransform: translate(-50%, 0);\n\tleft: 50%;\n\tbottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n\ttransform: translate(0, -50%);\n\ttop: 50%;\n\tright: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n\ttransform: translate(50%, 0);\n\tleft: auto;\n\tbottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n\ttransform: translate(0, -18px);\n\ttop: auto;\n\tright: 28px;\n}\n","// Общий файл элементов форм\r\n// Для подключения/отключения стилей конкретного єлемента формы смотри base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стили попапов\r\n// @import \"base/popup\";\r\n\r\n// Стили спойлеров\r\n// @import \"base/spollers\";\r\n\r\n// Стили табов\r\n// @import \"base/tabs\";\r\n\r\n// Стили карт\r\n// @import \"base/maps\";\r\n\r\n// Стили блока \"показать еще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стили для полноэкранного блока\r\n// @import \"base/fullscreen\";\r\n\r\n// Стили для липкого блока\r\n// @import \"base/sticky\";\r\n\r\n// Стили для отзывчивых картинок (IBG)\r\n// Сниппет (HTML): ibg (div c картинкой и классами)\r\n// Сниппет (HTML): ibga (a c картинкой и классами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблоны (заготовки)\r\n// @extend %имя шаблона;\r\n// Сниппет (SCSS): ex\r\n\r\n// Счетчик для списка\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивное видео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Видео в качестве фона\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Серый фильтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Отменить выделение\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Зеркальное отображение\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавный скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Скрыть скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n  background: #d9d9d9;\r\n  &__container {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    min-height: rem(48);\r\n    justify-content: space-between;\r\n  }\r\n\r\n  &__logo {\r\n    width: 100%;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    font-size: rem(25);\r\n    text-align: center;\r\n    color: #000;\r\n  }\r\n\r\n  &__action {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: rem(10);\r\n  }\r\n\r\n  &__menu {\r\n  }\r\n}\r\n.menu {\r\n  &__icon {\r\n  }\r\n\r\n  &__body {\r\n    // display: none;\r\n  }\r\n\r\n  &__list {\r\n  }\r\n\r\n  &__item {\r\n  }\r\n}\r\n.icon-menu {\r\n}\r\n.menu-open {\r\n  .setting {\r\n    right: 0;\r\n  }\r\n}\r\n.money-open {\r\n  .money-entry {\r\n    right: 0;\r\n  }\r\n}\r\n.setting,\r\n.money-entry {\r\n  position: absolute;\r\n  height: 100vh;\r\n  overflow: auto;\r\n  background: #d5cccc;\r\n  transition: all 0.3s ease 0s;\r\n  right: -900px;\r\n  // right: 0;\r\n  top: 0;\r\n  max-width: 478px;\r\n  width: 100%;\r\n  padding: rem(10) rem(20) rem(40);\r\n  z-index: 4;\r\n\r\n  overflow: auto;\r\n  scrollbar-width: thin;\r\n  scrollbar-color: hsl(0 0% 50%);\r\n  &__title {\r\n    font-weight: 400;\r\n    @include adaptiveValue(\"font-size\", 30, 20);\r\n    color: #000;\r\n  }\r\n\r\n  &__list {\r\n    margin-top: rem(25);\r\n    max-width: 60.8%;\r\n  }\r\n\r\n  &__item {\r\n    &:not(:last-child) {\r\n      margin-bottom: rem(18);\r\n    }\r\n  }\r\n\r\n  &__button {\r\n    margin-top: rem(20);\r\n    max-width: 60.8%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: rem(10);\r\n  }\r\n}\r\n.item-setting,\r\n.item-money-entry {\r\n  &__title {\r\n    font-family: var(--font-family);\r\n    font-weight: 400;\r\n    @include adaptiveValue(\"font-size\", 25, 16);\r\n    color: #000;\r\n  }\r\n\r\n  &__slider {\r\n    margin-top: rem(11);\r\n    &.noUi-horizontal {\r\n      height: 7px;\r\n    }\r\n    &.noUi-target {\r\n      background-color: #fff;\r\n    }\r\n    &.noUi-horizontal .noUi-handle {\r\n      width: 24px;\r\n      height: 24px;\r\n      border-radius: 100%;\r\n      right: -17px;\r\n      top: -9px;\r\n      cursor: pointer;\r\n    }\r\n    &.noUi-connect {\r\n      background: #ffffff03;\r\n    }\r\n    & .noUi-connect {\r\n      background: #000;\r\n    }\r\n    & .noUi-handle:before,\r\n    & .noUi-handle:after {\r\n      height: 16px;\r\n      width: 16px;\r\n      background: #000;\r\n      left: 3px;\r\n      top: 3px;\r\n      border-radius: 100%;\r\n    }\r\n  }\r\n\r\n  &__select {\r\n    margin-top: rem(18);\r\n  }\r\n  &__value {\r\n    margin-top: rem(12);\r\n    font-size: rem(13);\r\n    span {\r\n      font-size: rem(16);\r\n    }\r\n  }\r\n}\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n  display: block;\r\n  position: relative;\r\n  width: rem(30);\r\n  height: rem(18);\r\n  cursor: pointer;\r\n  z-index: 5;\r\n  span,\r\n  &::before,\r\n  &::after {\r\n    content: \"\";\r\n    transition: all 0.3s ease 0s;\r\n    right: 0;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: rem(2);\r\n    background-color: #000;\r\n  }\r\n  &::before {\r\n    top: 0;\r\n  }\r\n  &::after {\r\n    bottom: 0;\r\n  }\r\n  span {\r\n    top: calc(50% - rem(1));\r\n  }\r\n  .menu-open & {\r\n    span {\r\n      width: 0;\r\n    }\r\n    &::before,\r\n    &::after {\r\n    }\r\n    &::before {\r\n      top: calc(50% - rem(1));\r\n      transform: rotate(-45deg);\r\n    }\r\n    &::after {\r\n      bottom: calc(50% - rem(1));\r\n      transform: rotate(45deg);\r\n    }\r\n  }\r\n}\r\n\r\n.icon-money {\r\n  svg {\r\n    width: 100%;\r\n    max-width: rem(34.7);\r\n  }\r\n}\r\n","//Подключение шрифта\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n//Адаптивное свойство\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивное свойство (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $widthFrom: $containerWidth, $widthTo: $minWidth, $keepSize: 0) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поинты в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плавающего значения\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Получение значения свойства\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Если отрицательные значения\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Если поддерживается clamp();\r\n\t@supports (#{$property}: $propertyValue) {\r\n\t\t#{$property}: $propertyValue;\r\n\t}\r\n\t// Если не поддерживается clamp();\r\n\t@supports not (#{$property}: $propertyValue) {\r\n\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t}\r\n\r\n\t// Устанавливаем значения по умолчанию\r\n\t@if $widthFrom != $containerWidth and $widthFrom != $maxWidth and $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: inherit;\r\n\t\t}\r\n\t}\r\n\t@if $widthTo != $minWidth and $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: inherit;\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.section {\r\n  &__jugs {\r\n  }\r\n}\r\n.jugs {\r\n  margin-top: rem(17);\r\n  &__items {\r\n    display: grid;\r\n    @include adaptiveValue(\"gap\", 43, 10);\r\n    grid-template-columns: repeat(3, 1fr);\r\n    justify-items: center;\r\n    @media (max-width: $mobile) {\r\n      grid-template-columns: repeat(2, 1fr);\r\n    }\r\n  }\r\n\r\n  &__item {\r\n    max-width: rem(250);\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    gap: rem(10);\r\n  }\r\n}\r\n.item-jugs {\r\n  &__title {\r\n    font-weight: 400;\r\n    @include adaptiveValue(\"font-size\", 25, 16);\r\n    text-align: center;\r\n    color: #000;\r\n  }\r\n\r\n  &__body {\r\n    position: relative;\r\n    font-weight: 400;\r\n    @include adaptiveValue(\"font-size\", 25, 16);\r\n    text-align: center;\r\n    color: #000;\r\n  }\r\n\r\n  &__body-top {\r\n    position: absolute;\r\n    top: 19.8%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n\r\n  &__body-top-percent {\r\n    @include adaptiveValue(\"font-size\", 36, 23);\r\n  }\r\n\r\n  &__body-top-money {\r\n  }\r\n\r\n  &__body-bottom {\r\n    position: absolute;\r\n    bottom: 11.1%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n\r\n  &__body-bottom-text {\r\n  }\r\n\r\n  &__body-bottom-money {\r\n  }\r\n}\r\n.button {\r\n  font-size: rem(14);\r\n  color: #fff;\r\n  background: #000;\r\n  border-radius: rem(25);\r\n  padding: rem(10) rem(25);\r\n  @media (any-hover: hover) {\r\n    &:hover {\r\n      color: black;\r\n      background: #fff;\r\n      line {\r\n        stroke: #000;\r\n      }\r\n    }\r\n  }\r\n  &:active {\r\n    transform: translateY(5px) scale(1.01);\r\n  }\r\n\r\n  &.good {\r\n    animation: animation-good 8s ease;\r\n  }\r\n  &.error {\r\n    animation: animation-error 8s ease;\r\n  }\r\n  @keyframes animation-good {\r\n    0% {\r\n      background-color: #18ab30;\r\n    }\r\n    100% {\r\n      background-color: #000;\r\n    }\r\n  }\r\n  @keyframes animation-error {\r\n    0% {\r\n      background-color: #d31616;\r\n    }\r\n    100% {\r\n      background-color: #000;\r\n    }\r\n  }\r\n}\r\n\r\n//====================================================================================================\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("38ebb9f5ce76f9bc2502")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNzZkNzZmYzYxYTQ4NmNkNzFhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3ZUFBd2UsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sUUFBUSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sUUFBUSxZQUFZLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsc0JBQXNCLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxTQUFTLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxRQUFRLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLFFBQVEsV0FBVyxPQUFPLE9BQU8sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFBUSxRQUFRLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLFFBQVEsV0FBVyxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxRQUFRLFdBQVcsV0FBVyxPQUFPLFFBQVEsV0FBVyxPQUFPLFFBQVEsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxRQUFRLFFBQVEsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFFBQVEsV0FBVyxPQUFPLFFBQVEsVUFBVSxPQUFPLFFBQVEsV0FBVyxPQUFPLFFBQVEsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxRQUFRLFdBQVcsT0FBTyxRQUFRLFdBQVcsT0FBTyxTQUFTLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sUUFBUSxXQUFXLE9BQU8sUUFBUSxXQUFXLFdBQVcsT0FBTyxRQUFRLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxX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Z0JBQWdCLHlCQUF5QixzREFBc0QsMkJBQTJCLG9CQUFvQixPQUFPLG1CQUFtQiwyQkFBMkIseUJBQXlCLHNEQUFzRCwyQkFBMkIsb0JBQW9CLE9BQU8sdUJBQXVCLDJCQUEyQixtQkFBbUIsa0JBQWtCLG9DQUFvQyxPQUFPLCtCQUErQixzREFBc0QsT0FBTyw2QkFBNkIsT0FBTywwQkFBMEIsMkJBQTJCLHNCQUFzQixrQkFBa0Isb0NBQW9DLE9BQU8sK0JBQStCLE9BQU8sZ0NBQWdDLE9BQU8sS0FBSyxhQUFhLHlCQUF5QixrQkFBa0IsdUJBQXVCLDZCQUE2QiwrQkFBK0IsaUNBQWlDLGlCQUFpQix1QkFBdUIsMkJBQTJCLGdCQUFnQix5QkFBeUIsV0FBVyxTQUFTLE9BQU8sZ0JBQWdCLCtDQUErQyxPQUFPLGtCQUFrQiwwQ0FBMEMsT0FBTyxlQUFlLDJDQUEyQyxPQUFPLGlDQUFpQyxZQUFZLG9DQUFvQyxTQUFTLGNBQWMsaUNBQWlDLFNBQVMsT0FBTyxrQ0FBa0MsWUFBWSxvQ0FBb0MsU0FBUyxjQUFjLGlDQUFpQyxTQUFTLE9BQU8sS0FBSyxxSUFBcUk7QUFDN3JyQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUNwK0J2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoXCIuLi9mb250cy9Sb2JvdG8tQmxhY2sud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2ZvbnRzL1JvYm90by1CbGFjay53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvUm9ib3RvLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2ZvbnRzL1JvYm90by1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoXCIuLi9mb250cy9Sb2JvdG8tRXh0cmFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9mb250cy9Sb2JvdG8tRXh0cmFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoXCIuLi9mb250cy9Sb2JvdG8tRXh0cmFMaWdodC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vZm9udHMvUm9ib3RvLUV4dHJhTGlnaHQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybChcIi4uL2ZvbnRzL1JvYm90by1MaWdodC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vZm9udHMvUm9ib3RvLUxpZ2h0LndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoXCIuLi9mb250cy9Sb2JvdG8tTWVkaXVtLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9mb250cy9Sb2JvdG8tTWVkaXVtLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoXCIuLi9mb250cy9Sb2JvdG8tUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybChcIi4uL2ZvbnRzL1JvYm90by1TZW1pQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vZm9udHMvUm9ib3RvLVNlbWlCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoXCIuLi9mb250cy9Sb2JvdG8tVGhpbi53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vZm9udHMvUm9ib3RvLVRoaW4ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5bY2xhc3MqPWljb24tXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJpY29uc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3MqPWljb24tXTpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMzIwcHg7XG59XG5cbmJvZHkge1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5hOmxpbmssXG5hOnZpc2l0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmYWYyZjI7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjsgLyogXCJhdXRvXCIg0LjQu9C4IFwidGhpblwiICAqL1xuICBzY3JvbGxiYXItY29sb3I6IHJnYigwLCAwLCAwKSByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG4ubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xufVxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndyYXBwZXIgPiBtYWluIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4ud3JhcHBlciA+ICoge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi8qXG4oaSkg0KHRgtC40LvQuCDQsdGD0LTRg9GCINC/0YDQuNC80LXQvdGP0YLRjNGB0Y8g0LrQviBcbtCy0YHQtdC8INC60LvQsNGB0YHQsNC8INGB0L7QtNC10YDQttCw0YnQuNC8ICpfX2NvbnRhaW5lclxu0J3QsNC/0YDQuNC80LXRgCBoZWFkZXJfX2NvbnRhaW5lciwgbWFpbl9fY29udGFpbmVyINC4INGCLtC0Llxu0KHQvdC40L/QtdGCIChIVE1MKTogY250XG4qL1xuW2NsYXNzKj1fX2NvbnRhaW5lcl0ge1xuICBtYXgtd2lkdGg6IDY4Ljc1cmVtO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMC45Mzc1cmVtO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPXRlbF0sXG50ZXh0YXJlYSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG4uaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG50ZXh0YXJlYS5pbnB1dCB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZzogMHB4IDBweDtcbn1cblxuLnNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3RfX2JvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VsZWN0X190aXRsZSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uc2VsZWN0X192YWx1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMS44NzVyZW07XG4gIHBhZGRpbmc6IDAgMC45Mzc1cmVtO1xuICBnYXA6IDAuNjI1cmVtO1xufVxuLnNlbGVjdF9fdmFsdWUgPiAqIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uc2VsZWN0X192YWx1ZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGZsZXg6IDAgMCAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5fc2VsZWN0LW9wZW4gLnNlbGVjdF9fdmFsdWU6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cbi5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtcHNldWRvLWxhYmVsOjpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtcHNldWRvLWxhYmVsKTtcbiAgb3BhY2l0eTogMC41O1xufVxuLnNlbGVjdF9fdGV4dCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLnNlbGVjdF9faW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zZWxlY3RfX29wdGlvbnMge1xuICBjb2xvcjogIzAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGJvcmRlci10b3A6IDA7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDVweCAwcHg7XG59XG4uc2VsZWN0X19zY3JvbGwge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuLnNlbGVjdF9fb3B0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLnNlbGVjdF9fb3B0aW9uLl9zZWxlY3Qtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XG4gIC5zZWxlY3RfX29wdGlvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgfVxufVxuLnNlbGVjdF9fcm93IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VsZWN0Ll9zZWxlY3Qtb3BlbiB7XG4gIHotaW5kZXg6IDU7XG59XG4uX3NlbGVjdC10YWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIEZ1bmN0aW9uYWwgc3R5bGluZztcbiAqIFRoZXNlIHN0eWxlcyBhcmUgcmVxdWlyZWQgZm9yIG5vVWlTbGlkZXIgdG8gZnVuY3Rpb24uXG4gKiBZb3UgZG9uJ3QgbmVlZCB0byBjaGFuZ2UgdGhlc2UgcnVsZXMgdG8gYXBwbHkgeW91ciBkZXNpZ24uXG4gKi9cbi5ub1VpLXRhcmdldCxcbi5ub1VpLXRhcmdldCAqIHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubm9VaS10YXJnZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ub1VpLWJhc2UsXG4ubm9VaS1jb25uZWN0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLyogV3JhcHBlciBmb3IgYWxsIGNvbm5lY3QgZWxlbWVudHMuXG4gKi9cbi5ub1VpLWNvbm5lY3RzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMDtcbn1cblxuLm5vVWktY29ubmVjdCxcbi5ub1VpLW9yaWdpbiB7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG59XG5cbi8qIE9mZnNldCBkaXJlY3Rpb25cbiAqL1xuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiBhdXRvO1xufVxuXG4vKiBHaXZlIG9yaWdpbnMgMCBoZWlnaHQvd2lkdGggc28gdGhleSBkb24ndCBpbnRlcmZlcmUgd2l0aCBjbGlja2luZyB0aGVcbiAqIGNvbm5lY3QgZWxlbWVudHMuXG4gKi9cbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiB7XG4gIHRvcDogLTEwMCU7XG4gIHdpZHRoOiAwO1xufVxuXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XG4gIGhlaWdodDogMDtcbn1cblxuLm5vVWktaGFuZGxlIHtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5ub1VpLXRvdWNoLWFyZWEge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktY29ubmVjdCxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1vcmlnaW4ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cblxuLm5vVWktc3RhdGUtZHJhZyAqIHtcbiAgY3Vyc29yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFNsaWRlciBzaXplIGFuZCBoYW5kbGUgcGxhY2VtZW50O1xuICovXG4ubm9VaS1ob3Jpem9udGFsIHtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIHJpZ2h0OiAtMTdweDtcbiAgdG9wOiAtNnB4O1xufVxuXG4ubm9VaS12ZXJ0aWNhbCB7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGUge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICByaWdodDogLTZweDtcbiAgYm90dG9tOiAtMTdweDtcbn1cblxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XG4gIGxlZnQ6IC0xN3B4O1xuICByaWdodDogYXV0bztcbn1cblxuLyogU3R5bGluZztcbiAqIEdpdmluZyB0aGUgY29ubmVjdCBlbGVtZW50IGEgYm9yZGVyIHJhZGl1cyBjYXVzZXMgaXNzdWVzIHdpdGggdXNpbmcgdHJhbnNmb3JtOiBzY2FsZVxuICovXG4ubm9VaS10YXJnZXQge1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjZjBmMGYwLCAwIDNweCA2cHggLTVweCAjYmJiO1xufVxuXG4ubm9VaS1jb25uZWN0cyB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLm5vVWktY29ubmVjdCB7XG4gIGJhY2tncm91bmQ6ICMzZmI4YWY7XG59XG5cbi8qIEhhbmRsZXMgYW5kIGN1cnNvcnM7XG4gKi9cbi5ub1VpLWRyYWdnYWJsZSB7XG4gIGN1cnNvcjogZXctcmVzaXplO1xufVxuXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1kcmFnZ2FibGUge1xuICBjdXJzb3I6IG5zLXJlc2l6ZTtcbn1cblxuLm5vVWktaGFuZGxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI2ZmZiwgaW5zZXQgMCAxcHggN3B4ICNlYmViZWIsIDAgM3B4IDZweCAtM3B4ICNiYmI7XG59XG5cbi5ub1VpLWFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI2ZmZiwgaW5zZXQgMCAxcHggN3B4ICNkZGQsIDAgM3B4IDZweCAtM3B4ICNiYmI7XG59XG5cbi8qIEhhbmRsZSBzdHJpcGVzO1xuICovXG4ubm9VaS1oYW5kbGU6YmVmb3JlLFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlN2U2O1xuICBsZWZ0OiAxNHB4O1xuICB0b3A6IDZweDtcbn1cblxuLm5vVWktaGFuZGxlOmFmdGVyIHtcbiAgbGVmdDogMTdweDtcbn1cblxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmJlZm9yZSxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgbGVmdDogNnB4O1xuICB0b3A6IDE0cHg7XG59XG5cbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XG4gIHRvcDogMTdweDtcbn1cblxuLyogRGlzYWJsZWQgc3RhdGU7XG4gKi9cbltkaXNhYmxlZF0gLm5vVWktY29ubmVjdCB7XG4gIGJhY2tncm91bmQ6ICNiOGI4Yjg7XG59XG5cbltkaXNhYmxlZF0ubm9VaS10YXJnZXQsXG5bZGlzYWJsZWRdLm5vVWktaGFuZGxlLFxuW2Rpc2FibGVkXSAubm9VaS1oYW5kbGUge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4vKiBCYXNlO1xuICpcbiAqL1xuLm5vVWktcGlwcyxcbi5ub1VpLXBpcHMgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5ub1VpLXBpcHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4vKiBWYWx1ZXM7XG4gKlxuICovXG4ubm9VaS12YWx1ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm9VaS12YWx1ZS1zdWIge1xuICBjb2xvcjogI2NjYztcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4vKiBNYXJraW5ncztcbiAqXG4gKi9cbi5ub1VpLW1hcmtlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLm5vVWktbWFya2VyLXN1YiB7XG4gIGJhY2tncm91bmQ6ICNhYWE7XG59XG5cbi5ub1VpLW1hcmtlci1sYXJnZSB7XG4gIGJhY2tncm91bmQ6ICNhYWE7XG59XG5cbi8qIEhvcml6b250YWwgbGF5b3V0O1xuICpcbiAqL1xuLm5vVWktcGlwcy1ob3Jpem9udGFsIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ub1VpLXZhbHVlLWhvcml6b250YWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xufVxuXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcbn1cblxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXIge1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiA1cHg7XG59XG5cbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLXN1YiB7XG4gIGhlaWdodDogMTBweDtcbn1cblxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItbGFyZ2Uge1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi8qIFZlcnRpY2FsIGxheW91dDtcbiAqXG4gKi9cbi5ub1VpLXBpcHMtdmVydGljYWwge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxMDAlO1xufVxuXG4ubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XG59XG5cbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlciB7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMnB4O1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItc3ViIHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1sYXJnZSB7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG4ubm9VaS10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5ub1VpLWhvcml6b250YWwgLm5vVWktdG9vbHRpcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogMTIwJTtcbn1cblxuLm5vVWktdmVydGljYWwgLm5vVWktdG9vbHRpcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDEyMCU7XG59XG5cbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XG4gIGxlZnQ6IGF1dG87XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogMjhweDtcbn1cblxuW2NsYXNzKj0taWJnXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbltjbGFzcyo9LWliZ10gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5bY2xhc3MqPS1pYmdfY29udGFpbl0gaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG59XG4uaGVhZGVyX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDNyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oZWFkZXJfX2xvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuNTYyNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDtcbn1cbi5oZWFkZXJfX2FjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC42MjVyZW07XG59XG4ubWVudS1vcGVuIC5zZXR0aW5nIHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5tb25leS1vcGVuIC5tb25leS1lbnRyeSB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc2V0dGluZyxcbi5tb25leS1lbnRyeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNkNWNjY2M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHJpZ2h0OiAtOTAwcHg7XG4gIHRvcDogMDtcbiAgbWF4LXdpZHRoOiA0NzhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNjI1cmVtIDEuMjVyZW0gMi41cmVtO1xuICB6LWluZGV4OiA0O1xuICBvdmVyZmxvdzogYXV0bztcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcbn1cbi5zZXR0aW5nX190aXRsZSxcbi5tb25leS1lbnRyeV9fdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDtcbn1cbkBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDEuMDAzMDg2NDE5OHJlbSAgKyAgMS4yMzQ1Njc5MDEydncgLCAxLjg3NXJlbSApKSB7XG4gIC5zZXR0aW5nX190aXRsZSxcbiAgLm1vbmV5LWVudHJ5X190aXRsZSB7XG4gICAgZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDEuMDAzMDg2NDE5OHJlbSAgKyAgMS4yMzQ1Njc5MDEydncgLCAxLjg3NXJlbSApO1xuICB9XG59XG5Ac3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxLjI1cmVtICwgMS4wMDMwODY0MTk4cmVtICArICAxLjIzNDU2NzkwMTJ2dyAsIDEuODc1cmVtICkpIHtcbiAgLnNldHRpbmdfX3RpdGxlLFxuICAubW9uZXktZW50cnlfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IGNhbGMoMS4yNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTAuNjI1KTtcbiAgfVxufVxuLnNldHRpbmdfX2xpc3QsXG4ubW9uZXktZW50cnlfX2xpc3Qge1xuICBtYXJnaW4tdG9wOiAxLjU2MjVyZW07XG4gIG1heC13aWR0aDogNjAuOCU7XG59XG4uc2V0dGluZ19faXRlbTpub3QoOmxhc3QtY2hpbGQpLFxuLm1vbmV5LWVudHJ5X19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAxLjEyNXJlbTtcbn1cbi5zZXR0aW5nX19idXR0b24sXG4ubW9uZXktZW50cnlfX2J1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gIG1heC13aWR0aDogNjAuOCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC42MjVyZW07XG59XG5cbi5pdGVtLXNldHRpbmdfX3RpdGxlLFxuLml0ZW0tbW9uZXktZW50cnlfX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5Ac3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjc3Nzc3Nzc3NzhyZW0gICsgIDEuMTExMTExMTExMXZ3ICwgMS41NjI1cmVtICkpIHtcbiAgLml0ZW0tc2V0dGluZ19fdGl0bGUsXG4gIC5pdGVtLW1vbmV5LWVudHJ5X190aXRsZSB7XG4gICAgZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuNzc3Nzc3Nzc3OHJlbSAgKyAgMS4xMTExMTExMTExdncgLCAxLjU2MjVyZW0gKTtcbiAgfVxufVxuQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuNzc3Nzc3Nzc3OHJlbSAgKyAgMS4xMTExMTExMTExdncgLCAxLjU2MjVyZW0gKSkge1xuICAuaXRlbS1zZXR0aW5nX190aXRsZSxcbiAgLml0ZW0tbW9uZXktZW50cnlfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IGNhbGMoMXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDUwLjYyNSk7XG4gIH1cbn1cbi5pdGVtLXNldHRpbmdfX3NsaWRlcixcbi5pdGVtLW1vbmV5LWVudHJ5X19zbGlkZXIge1xuICBtYXJnaW4tdG9wOiAwLjY4NzVyZW07XG59XG4uaXRlbS1zZXR0aW5nX19zbGlkZXIubm9VaS1ob3Jpem9udGFsLFxuLml0ZW0tbW9uZXktZW50cnlfX3NsaWRlci5ub1VpLWhvcml6b250YWwge1xuICBoZWlnaHQ6IDdweDtcbn1cbi5pdGVtLXNldHRpbmdfX3NsaWRlci5ub1VpLXRhcmdldCxcbi5pdGVtLW1vbmV5LWVudHJ5X19zbGlkZXIubm9VaS10YXJnZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLml0ZW0tc2V0dGluZ19fc2xpZGVyLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUsXG4uaXRlbS1tb25leS1lbnRyeV9fc2xpZGVyLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICByaWdodDogLTE3cHg7XG4gIHRvcDogLTlweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLml0ZW0tc2V0dGluZ19fc2xpZGVyLm5vVWktY29ubmVjdCxcbi5pdGVtLW1vbmV5LWVudHJ5X19zbGlkZXIubm9VaS1jb25uZWN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxMTc2NDcwNTkpO1xufVxuLml0ZW0tc2V0dGluZ19fc2xpZGVyIC5ub1VpLWNvbm5lY3QsXG4uaXRlbS1tb25leS1lbnRyeV9fc2xpZGVyIC5ub1VpLWNvbm5lY3Qge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuLml0ZW0tc2V0dGluZ19fc2xpZGVyIC5ub1VpLWhhbmRsZTpiZWZvcmUsIC5pdGVtLXNldHRpbmdfX3NsaWRlciAubm9VaS1oYW5kbGU6YWZ0ZXIsXG4uaXRlbS1tb25leS1lbnRyeV9fc2xpZGVyIC5ub1VpLWhhbmRsZTpiZWZvcmUsXG4uaXRlbS1tb25leS1lbnRyeV9fc2xpZGVyIC5ub1VpLWhhbmRsZTphZnRlciB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGxlZnQ6IDNweDtcbiAgdG9wOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uaXRlbS1zZXR0aW5nX19zZWxlY3QsXG4uaXRlbS1tb25leS1lbnRyeV9fc2VsZWN0IHtcbiAgbWFyZ2luLXRvcDogMS4xMjVyZW07XG59XG4uaXRlbS1zZXR0aW5nX192YWx1ZSxcbi5pdGVtLW1vbmV5LWVudHJ5X192YWx1ZSB7XG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xufVxuLml0ZW0tc2V0dGluZ19fdmFsdWUgc3Bhbixcbi5pdGVtLW1vbmV5LWVudHJ5X192YWx1ZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uaWNvbi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEuODc1cmVtO1xuICBoZWlnaHQ6IDEuMTI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDU7XG59XG4uaWNvbi1tZW51IHNwYW4sIC5pY29uLW1lbnU6OmJlZm9yZSwgLmljb24tbWVudTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwLjEyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5pY29uLW1lbnU6OmJlZm9yZSB7XG4gIHRvcDogMDtcbn1cbi5pY29uLW1lbnU6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xufVxuLmljb24tbWVudSBzcGFuIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG59XG4ubWVudS1vcGVuIC5pY29uLW1lbnUgc3BhbiB7XG4gIHdpZHRoOiAwO1xufVxuLm1lbnUtb3BlbiAuaWNvbi1tZW51OjpiZWZvcmUge1xuICB0b3A6IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5tZW51LW9wZW4gLmljb24tbWVudTo6YWZ0ZXIge1xuICBib3R0b206IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uaWNvbi1tb25leSBzdmcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyLjE2ODc1cmVtO1xufVxuXG4uanVncyB7XG4gIG1hcmdpbi10b3A6IDEuMDYyNXJlbTtcbn1cbi5qdWdzX19pdGVtcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbkBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMC42MjVyZW0gLCAtMC4xODk4MTQ4MTQ4cmVtICArICA0LjA3NDA3NDA3NDF2dyAsIDIuNjg3NXJlbSApKSB7XG4gIC5qdWdzX19pdGVtcyB7XG4gICAgZ2FwOiBjbGFtcCggMC42MjVyZW0gLCAtMC4xODk4MTQ4MTQ4cmVtICArICA0LjA3NDA3NDA3NDF2dyAsIDIuNjg3NXJlbSApO1xuICB9XG59XG5Ac3VwcG9ydHMgbm90IChnYXA6IGNsYW1wKCAwLjYyNXJlbSAsIC0wLjE4OTgxNDgxNDhyZW0gICsgIDQuMDc0MDc0MDc0MXZ3ICwgMi42ODc1cmVtICkpIHtcbiAgLmp1Z3NfX2l0ZW1zIHtcbiAgICBnYXA6IGNhbGMoMC42MjVyZW0gKyAyLjA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1MC42MjUpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuanVnc19faXRlbXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbn1cbi5qdWdzX19pdGVtIHtcbiAgbWF4LXdpZHRoOiAxNS42MjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMC42MjVyZW07XG59XG5cbi5pdGVtLWp1Z3NfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDtcbn1cbkBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuNzc3Nzc3Nzc3OHJlbSAgKyAgMS4xMTExMTExMTExdncgLCAxLjU2MjVyZW0gKSkge1xuICAuaXRlbS1qdWdzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuNzc3Nzc3Nzc3OHJlbSAgKyAgMS4xMTExMTExMTExdncgLCAxLjU2MjVyZW0gKTtcbiAgfVxufVxuQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuNzc3Nzc3Nzc3OHJlbSAgKyAgMS4xMTExMTExMTExdncgLCAxLjU2MjVyZW0gKSkge1xuICAuaXRlbS1qdWdzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1MC42MjUpO1xuICB9XG59XG4uaXRlbS1qdWdzX19ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwO1xufVxuQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC43Nzc3Nzc3Nzc4cmVtICArICAxLjExMTExMTExMTF2dyAsIDEuNTYyNXJlbSApKSB7XG4gIC5pdGVtLWp1Z3NfX2JvZHkge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjc3Nzc3Nzc3NzhyZW0gICsgIDEuMTExMTExMTExMXZ3ICwgMS41NjI1cmVtICk7XG4gIH1cbn1cbkBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjc3Nzc3Nzc3NzhyZW0gICsgIDEuMTExMTExMTExMXZ3ICwgMS41NjI1cmVtICkpIHtcbiAgLml0ZW0tanVnc19fYm9keSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1MC42MjUpO1xuICB9XG59XG4uaXRlbS1qdWdzX19ib2R5LXRvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOS44JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5Ac3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNDM3NXJlbSAsIDEuMTE2NTEyMzQ1N3JlbSAgKyAgMS42MDQ5MzgyNzE2dncgLCAyLjI1cmVtICkpIHtcbiAgLml0ZW0tanVnc19fYm9keS10b3AtcGVyY2VudCB7XG4gICAgZm9udC1zaXplOiBjbGFtcCggMS40Mzc1cmVtICwgMS4xMTY1MTIzNDU3cmVtICArICAxLjYwNDkzODI3MTZ2dyAsIDIuMjVyZW0gKTtcbiAgfVxufVxuQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS40Mzc1cmVtICwgMS4xMTY1MTIzNDU3cmVtICArICAxLjYwNDkzODI3MTZ2dyAsIDIuMjVyZW0gKSkge1xuICAuaXRlbS1qdWdzX19ib2R5LXRvcC1wZXJjZW50IHtcbiAgICBmb250LXNpemU6IGNhbGMoMS40Mzc1cmVtICsgMC44MTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTAuNjI1KTtcbiAgfVxufVxuLml0ZW0tanVnc19fYm9keS1ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTEuMSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAxLjU2MjVyZW07XG4gIHBhZGRpbmc6IDAuNjI1cmVtIDEuNTYyNXJlbTtcbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAuYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuICAuYnV0dG9uOmhvdmVyIGxpbmUge1xuICAgIHN0cm9rZTogIzAwMDtcbiAgfVxufVxuLmJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSBzY2FsZSgxLjAxKTtcbn1cbi5idXR0b24uZ29vZCB7XG4gIGFuaW1hdGlvbjogYW5pbWF0aW9uLWdvb2QgOHMgZWFzZTtcbn1cbi5idXR0b24uZXJyb3Ige1xuICBhbmltYXRpb246IGFuaW1hdGlvbi1lcnJvciA4cyBlYXNlO1xufVxuQGtleWZyYW1lcyBhbmltYXRpb24tZ29vZCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThhYjMwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0aW9uLWVycm9yIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzE2MTY7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZm9udHMvZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZm9udHMvaWNvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9udWxsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvZm9ybXMvaW5wdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9mb3Jtcy9zZWxlY3Quc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9mb3Jtcy9yYW5nZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9ob21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlHQUNFO0VBRUYsZ0JBQUE7RUFDQSxrQkFBQTtBREFGO0FDRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUdBQ0U7RUFFRixnQkFBQTtFQUNBLGtC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QkFBQTtFVmkzQko7QUFDRjtBVS8yQkU7RUFDRTtJQUNFLHlCQUFBO0VWaTNCSjtFVS8yQkU7SUFDRSxzQkFBQTtFVmkzQko7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcclxcblxcclxcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0LzQuNC60YHQuNC90L7QsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRiNGA0LjRhNGC0L7QsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyZkaXNwbGF5PXN3YXAgLSDQtNC+0LHQsNCy0LjRgtGMINC/0YDQuCDQv9C+0LTQutC70Y7Rh9C10L3QuNC4INGH0LXRgNC10Lcg0L/Qu9Cw0LPQuNC9XFxyXFxuLy8mZGlzcGxheT1zd2FwIC0g0LTQvtCx0LDQstC40YLRjCDQv9GA0Lgg0L/QvtC00LrQu9GO0YfQtdC90LjQuCDRh9C10YDQtdC3INC/0LvQsNCz0LjQvVxcclxcblxcclxcbi8vINCf0L7QtNC60LvRjtGH0LjRgtGMINC10YHQu9C4INC10YHRgtGMINC70L7QutCw0LvRjNC90YvQtSDRhNCw0LnQu9GLINGI0YDQuNGE0YLQvtCyXFxyXFxuQGltcG9ydCBcXFwiZm9udHMvZm9udHNcXFwiO1xcclxcblxcclxcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0LjQutC+0L3QvtGH0L3Ri9GFINGI0YDQuNGE0YLQvtCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vINCf0L7QtNC60LvRjtGH0LjRgtGMINC10YHQu9C4INC10YHRgtGMINGE0LDQudC7INC40LrQvtC90L7Rh9C90L7Qs9C+INGI0YDQuNGE0YLQsFxcclxcbkBpbXBvcnQgXFxcImZvbnRzL2ljb25zXFxcIjtcXHJcXG5cXHJcXG4vLyDQqNGA0LjRhNGCINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiRmb250RmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4kZm9udFNpemU6IHJlbSgxNCk7IC8vINCz0LTQtSAxNChweCkgLSDRgNCw0LfQvNC10YAg0YjRgNC40YTRgtCwINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC40Lcg0LzQsNC60LXRgtCwXFxyXFxuXFxyXFxuLy8g0J7RgdC90L7QstC90YvQtSDRhtCy0LXRgtCwXFxyXFxuJG1haW5Db2xvcjogIzAwMDsgLy8g0KbQstC10YIg0YjRgNC40YTRgtCwINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOXFxyXFxuXFxyXFxuLy8g0J3QkNCh0KLQoNCe0JnQmtCYID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0JzQuNC90LjQvNCw0LvRjNC90LDRjyDRiNC40YDQuNC90LAg0YHRgtGA0LDQvdC40YbRi1xcclxcbiRtaW5XaWR0aDogMzIwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQv9C+0LvQvtGC0L3QsCAo0LzQsNC60LXRgtCwKVxcclxcbiRtYXhXaWR0aDogMTkyMDtcXHJcXG4vLyDQqNC40YDQuNC90LAg0L7Qs9GA0LDQvdC40YfQuNCy0LDRjtGJ0LXQs9C+INC60L7QvdGC0LXQudC90LXRgNCwICgwID0g0L3QtdGCINC+0LPRgNCw0L3QuNGH0LXQvdC40Y8pXFxyXFxuJG1heFdpZHRoQ29udGFpbmVyOiAxMTAwO1xcclxcbi8vINCe0LHRidC40Lkg0L7RgtGB0YLRg9C/INGDINC60L7QvdGC0LXQudC90LXRgNCwXFxyXFxuLy8gKDMwID0g0L/QviAxNXB4INGB0LvQtdCy0LAg0Lgg0YHQv9GA0LDQstCwLCAwID0g0L3QtdGCINC+0YLRgdGC0YPQv9CwKVxcclxcbiRjb250YWluZXJQYWRkaW5nOiAzMDtcXHJcXG5cXHJcXG4vLyDQqNC40YDQuNC90LAg0YHRgNCw0LHQsNGC0YvQstCw0L3QuNGPINC/0LXRgNCy0L7Qs9C+INCx0YDQtdC50LrQv9C+0LjQvdGC0LBcXHJcXG4kY29udGFpbmVyV2lkdGg6ICRtYXhXaWR0aENvbnRhaW5lciArICRjb250YWluZXJQYWRkaW5nO1xcclxcblxcclxcbi8vINCR0YDQtdC50Lot0L/QvtC40L3RgtGLXFxyXFxuJHBjOiBlbShcXHJcXG4gICRjb250YWluZXJXaWR0aFxcclxcbik7IC8vINCf0JosINC90L7Rg9GC0LHRg9C60LgsINC90LXQutC+0YLQvtGA0YvQtSDQv9C70LDQvdGI0LXRgtGLINCyINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0Lwg0L/QvtC70L7QttC10L3QuNC4XFxyXFxuJHRhYmxldDogZW0oOTkxLjk4KTsgLy8g0J/Qu9Cw0L3RiNC10YLRiywg0L3QtdC60L7RgtC+0YDRi9C1INGC0LXQu9C10YTQvtC90Ysg0LIg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvCDQv9C+0LvQvtC20LXQvdC40LhcXHJcXG4kbW9iaWxlOiBlbSg3NjcuOTgpOyAvLyDQotC10LvQtdGE0L7QvdGLIExcXHJcXG4kbW9iaWxlU21hbGw6IGVtKDQ3OS45OCk7IC8vINCi0LXQu9C10YTQvtC90YsgU1xcclxcblxcclxcbi8vINCi0LjQvyDQsNC00LDQv9GC0LjQstCwOlxcclxcbi8vIDEgPSDQvtGC0LfRi9Cy0YfQuNCy0L7RgdGC0YwgKNGDINC60L7QvdGC0LXQudC90LXRgNCwINC90LXRgiDQsdGA0LXQudC60L/QvtC40L3RgtC+0LIpLFxcclxcbi8vIDIgPSDQv9C+INCx0YDQtdC50Lot0L/QvtC40L3RgtCw0LwgKNC60L7QvdGC0LXQudC90LXRgCDQvNC10L3Rj9C10YIg0YHQstC+0Y4g0YjQuNGA0LjQvdGDINC/0L4g0LHRgNC10LnQui3Qv9C+0LjQvdGC0LDQvClcXHJcXG4kcmVzcG9uc2l2ZVR5cGU6IDE7XFxyXFxuXFxyXFxuLy8g0J7QsdC90YPQu9C10L3QuNC1INC4INC+0LHRidC40LUg0L/QsNGA0LDQvNC10YLRgNGLID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL251bGxcXFwiO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogI2ZhZjJmMjtcXHJcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjsgLyogXFxcImF1dG9cXFwiINC40LvQuCBcXFwidGhpblxcXCIgICovXFxyXFxuICBzY3JvbGxiYXItY29sb3I6IHJnYigwLCAwLCAwKSByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAvLyDQodC60YDQvtC70Lsg0LfQsNCx0LvQvtC60LjRgNC+0LLQsNC9XFxyXFxuICAubG9jayAmIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xcclxcbiAgfVxcclxcbiAgLy8g0KHQsNC50YIg0LfQsNCz0YDRg9C20LXQvVxcclxcbiAgLmxvYWRlZCAmIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLy8g0J7QsdC+0LvQvtGH0LrQsCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi53cmFwcGVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAvLyDQn9GA0LjQttC40LzQsNC10LwgZm9vdGVyXFxyXFxuICA+IG1haW4ge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIH1cXHJcXG4gIC8vINCk0LjQutGBINC00LvRjyDRgdC70LDQudC00LXRgNC+0LJcXHJcXG4gID4gKiB7XFxyXFxuICAgIG1pbi13aWR0aDogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLy8g0J7Qs9GA0LDQvdC40YfQuNCy0LDRjtGJ0LjQuSDQutC+0L3RgtC10LnQvdC10YAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8qXFxyXFxuKGkpINCh0YLQuNC70Lgg0LHRg9C00YPRgiDQv9GA0LjQvNC10L3Rj9GC0YzRgdGPINC60L4gXFxyXFxu0LLRgdC10Lwg0LrQu9Cw0YHRgdCw0Lwg0YHQvtC00LXRgNC20LDRidC40LwgKl9fY29udGFpbmVyXFxyXFxu0J3QsNC/0YDQuNC80LXRgCBoZWFkZXJfX2NvbnRhaW5lciwgbWFpbl9fY29udGFpbmVyINC4INGCLtC0LlxcclxcbtCh0L3QuNC/0LXRgiAoSFRNTCk6IGNudFxcclxcbiovXFxyXFxuQGlmICgkcmVzcG9uc2l2ZVR5cGU9PTEpIHtcXHJcXG4gIC8vINCe0YLQt9GL0LLRh9C40LLQsNGPXFxyXFxuICBbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG4gICAgQGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcbiAgICAgIG1heC13aWR0aDogcmVtKCRtYXhXaWR0aENvbnRhaW5lcik7XFxyXFxuICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgQGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuICAgICAgcGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn0gQGVsc2Uge1xcclxcbiAgLy8g0J/QviDQsdGA0LXQudC6LdC/0L7QuNC90YLQsNC8XFxyXFxuICBbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IHJlbSgkbWF4V2lkdGhDb250YWluZXIpO1xcclxcbiAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICB9IEBlbHNlIHtcXHJcXG4gICAgICBAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkcGMpIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IHJlbSg5NzApO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiByZW0oNzUwKTtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgIG1heC13aWR0aDogbm9uZTtcXHJcXG4gICAgICBAaWYgKCRjb250YWluZXJQYWRkaW5nPjAgYW5kICRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INCx0LDQt9C+0LLRi9GFINGB0YLQuNC70LXQuSwg0YjQsNCx0LvQvtC90L7QsiAo0LfQsNCz0L7RgtC+0LLQvtC6KSDQuCDQstGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdGL0YUgINC60LvQsNGB0YHQvtCyXFxyXFxuLy8g0JTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8v0L7RgtC60LvRjtGH0LXQvdC40Y8g0LrQvtC90LrRgNC10YLQvdGL0YUg0YHRgtC40LvQtdC5INGB0LzQvtGC0YDQuCBiYXNlLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0YLQuNC70LXQuSDQvtCx0YnQuNGFINGN0LvQtdC80LXQvdGC0L7QsiDQv9GA0L7QtdC60YLQsFxcclxcbkBpbXBvcnQgXFxcImNvbW1vblxcXCI7XFxyXFxuXFxyXFxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRgdGC0LjQu9C10Lkg0L7RgtC00LXQu9GM0L3Ri9GFINCx0LvQvtC60L7QslxcclxcbkBpbXBvcnQgXFxcImhlYWRlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwiZm9vdGVyXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0YLQuNC70LXQuSDQvtGC0LTQtdC70YzQvdGL0YUg0YHRgtGA0LDQvdC40YZcXHJcXG5AaW1wb3J0IFxcXCJob21lXFxcIjtcXHJcXG5cIixcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzpcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tQmxhY2sud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi4vZm9udHMvUm9ib3RvLUJsYWNrLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzpcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tQm9sZC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tQm9sZC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6XFxuICAgIHVybChcXFwiLi4vZm9udHMvUm9ib3RvLUV4dHJhQm9sZC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tRXh0cmFCb2xkLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzpcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tRXh0cmFMaWdodC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tRXh0cmFMaWdodC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6XFxuICAgIHVybChcXFwiLi4vZm9udHMvUm9ib3RvLUxpZ2h0LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1MaWdodC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6XFxuICAgIHVybChcXFwiLi4vZm9udHMvUm9ib3RvLU1lZGl1bS53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tTWVkaXVtLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzpcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tUmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tUmVndWxhci53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6XFxuICAgIHVybChcXFwiLi4vZm9udHMvUm9ib3RvLVNlbWlCb2xkLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1TZW1pQm9sZC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6XFxuICAgIHVybChcXFwiLi4vZm9udHMvUm9ib3RvLVRoaW4ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi4vZm9udHMvUm9ib3RvLVRoaW4ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXCIsXCIlaWMge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiaWNvbnNcXFwiO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcblxcdGZvbnQtdmFyaWFudDogbm9ybWFsO1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcbltjbGFzcyo9XFxcImljb24tXFxcIl0ge1xcclxcblxcdCY6YmVmb3JlIHtcXHJcXG5cXHRcXHRAZXh0ZW5kICVpYztcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiKiB7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcblxcdGJvcmRlcjogMHB4O1xcclxcbn1cXHJcXG4qLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpmb2N1cyxcXHJcXG46YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5hOmZvY3VzLFxcclxcbmE6YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRtaW4td2lkdGg6ICRtaW5XaWR0aCArIHB4O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRjb2xvcjogJG1haW5Db2xvcjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiAkZm9udFNpemU7XFxyXFxuXFx0Ly90ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcblxcdC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5hIHtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuYTpsaW5rLFxcclxcbmE6dmlzaXRlZCB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5hOmhvdmVyIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbnVsIGxpIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5pbWcge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG5cXHRmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcblwiLFwiLy88SU5QVVQ+XFxyXFxuLy8g0KHQvdC40L/QtdGCIChIVE1MKTogaW5wXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl0sXFxyXFxudGV4dGFyZWEge1xcclxcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG5cXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuLmlucHV0IHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0cGFkZGluZzogMHB4IDIwcHg7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG5cXHQmLl9mb3JtLWZvY3VzIHtcXHJcXG5cXHR9XFxyXFxuXFx0Ji5fZm9ybS1lcnJvciB7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG50ZXh0YXJlYS5pbnB1dCB7XFxyXFxuXFx0cmVzaXplOiBub25lO1xcclxcblxcdHBhZGRpbmc6IDBweCAwcHg7XFxyXFxufVxcclxcblwiLFwiLy8gPFNFTEVDVD5cXHJcXG4vLyDQodC90LjQv9C10YIgKEhUTUwpOiBzZWxcXHJcXG4uc2VsZWN0IHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0Ly8gLnNlbGVjdF9fYm9keVxcclxcblxcdCZfX2JvZHkge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8gLnNlbGVjdF9fdGl0bGVcXHJcXG5cXHQmX190aXRsZSB7XFxyXFxuXFx0XFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8gLnNlbGVjdF9fdmFsdWVcXHJcXG5cXHQmX192YWx1ZSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdGhlaWdodDogcmVtKDMwKTtcXHJcXG5cXHRcXHRwYWRkaW5nOiAwIHJlbSgxNSk7XFxyXFxuXFx0XFx0Z2FwOiByZW0oMTApO1xcclxcblxcdFxcdD4gKiB7XFxyXFxuXFx0XFx0XFx0ZmxleDogMSAxIGF1dG87XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCY6YWZ0ZXIge1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdFxcdGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuXFx0XFx0XFx0ZmxleDogMCAwIDEwcHg7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0Ll9zZWxlY3Qtb3BlbiAmIHtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCYuX3NlbGVjdC1wc2V1ZG8tbGFiZWwge1xcclxcblxcdFxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0XFx0Y29udGVudDogYXR0cihkYXRhLXBzZXVkby1sYWJlbCk7XFxyXFxuXFx0XFx0XFx0XFx0b3BhY2l0eTogMC41O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdC8vIC5zZWxlY3RfX3RleHRcXHJcXG5cXHQmX190ZXh0IHtcXHJcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXHJcXG5cXHR9XFxyXFxuXFx0Jl9faW5wdXQge1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8gLnNlbGVjdF9fb3B0aW9uc1xcclxcblxcdCZfX29wdGlvbnMge1xcclxcblxcdFxcdGNvbG9yOiAjMDAwO1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR0b3A6IDI5cHg7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHRib3JkZXItdG9wOiAwO1xcclxcblxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XFxyXFxuXFx0XFx0Ym9yZGVyLXRvcDogMDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxMHB4IDBweCA1cHggMHB4O1xcclxcblxcdH1cXHJcXG5cXHQvLyAuc2VsZWN0X19zY3JvbGxcXHJcXG5cXHQmX19zY3JvbGwge1xcclxcblxcdFxcdG92ZXJmbG93LXk6IGF1dG87XFxyXFxuXFx0XFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcclxcblxcdFxcdC8vINCc0LDQutGB0LjQvNCw0LvRjNC90LDRjyDQstGL0YHQvtGC0LBcXHJcXG5cXHRcXHRtYXgtaGVpZ2h0OiAyMDBweDtcXHJcXG5cXHRcXHQvLyDQodGC0LjQu9C4INGB0LrRgNC+0LvQu9Cx0LDRgNCwXFxyXFxuXFx0XFx0LnNpbXBsZWJhci1zY3JvbGxiYXIge1xcclxcblxcdFxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0XFx0Ly9vcGFjaXR5OiAxO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdC8vIC5zZWxlY3RfX29wdGlvblxcclxcblxcdCZfX29wdGlvbiB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0cGFkZGluZzogNXB4IDE1cHg7XFxyXFxuXFx0XFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0XFx0Ji5fc2VsZWN0LXNlbGVjdGVkIHtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG5cXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCa0L7QvdGB0YLRgNGD0LrRhtC40Y8g0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvRhSDQtNCw0L3QvdGL0YVcXHJcXG5cXHQmX19yb3cge1xcclxcblxcdFxcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcblxcdCZfX2Fzc2V0IHtcXHJcXG5cXHR9XFxyXFxuXFx0Jl9fdGV4dCB7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCh0L7RgdGC0L7Rj9C90LjRjyDRgdC10LvQtdC60YLQsFxcclxcblxcdCYuX3NlbGVjdC1vcGVuIHtcXHJcXG5cXHRcXHR6LWluZGV4OiA1O1xcclxcblxcdH1cXHJcXG5cXHQmLl9zZWxlY3QtZGlzYWJsZWQge1xcclxcblxcdH1cXHJcXG5cXHQmLl9zZWxlY3QtYWN0aXZlIHtcXHJcXG5cXHR9XFxyXFxuXFx0Ji5fc2VsZWN0LWZvY3VzIHtcXHJcXG5cXHR9XFxyXFxuXFx0Ji5fc2VsZWN0LW11bHRpcGxlIHtcXHJcXG5cXHR9XFxyXFxuXFx0Ji5fc2VsZWN0LWNoZWNrYm94IHtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCi0LXQs1xcclxcbi5fc2VsZWN0LXRhZyB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIixcIi8qIEZ1bmN0aW9uYWwgc3R5bGluZztcXG4gKiBUaGVzZSBzdHlsZXMgYXJlIHJlcXVpcmVkIGZvciBub1VpU2xpZGVyIHRvIGZ1bmN0aW9uLlxcbiAqIFlvdSBkb24ndCBuZWVkIHRvIGNoYW5nZSB0aGVzZSBydWxlcyB0byBhcHBseSB5b3VyIGRlc2lnbi5cXG4gKi9cXG4ubm9VaS10YXJnZXQsXFxuLm5vVWktdGFyZ2V0ICoge1xcblxcdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG5cXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcblxcdHRvdWNoLWFjdGlvbjogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm5vVWktdGFyZ2V0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ub1VpLWJhc2UsXFxuLm5vVWktY29ubmVjdHMge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuLyogV3JhcHBlciBmb3IgYWxsIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktY29ubmVjdHMge1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0ei1pbmRleDogMDtcXG59XFxuLm5vVWktY29ubmVjdCxcXG4ubm9VaS1vcmlnaW4ge1xcblxcdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcblxcdC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuXFx0dHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcbn1cXG4vKiBPZmZzZXQgZGlyZWN0aW9uXFxuICovXFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuXFx0bGVmdDogMDtcXG5cXHRyaWdodDogYXV0bztcXG59XFxuLyogR2l2ZSBvcmlnaW5zIDAgaGVpZ2h0L3dpZHRoIHNvIHRoZXkgZG9uJ3QgaW50ZXJmZXJlIHdpdGggY2xpY2tpbmcgdGhlXFxuICogY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4ge1xcblxcdHRvcDogLTEwMCU7XFxuXFx0d2lkdGg6IDA7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG5cXHRoZWlnaHQ6IDA7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuXFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLm5vVWktdG91Y2gtYXJlYSB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktY29ubmVjdCxcXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktb3JpZ2luIHtcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuLm5vVWktc3RhdGUtZHJhZyAqIHtcXG5cXHRjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcXG59XFxuLyogU2xpZGVyIHNpemUgYW5kIGhhbmRsZSBwbGFjZW1lbnQ7XFxuICovXFxuLm5vVWktaG9yaXpvbnRhbCB7XFxuXFx0aGVpZ2h0OiAxOHB4O1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuXFx0d2lkdGg6IDM0cHg7XFxuXFx0aGVpZ2h0OiAyOHB4O1xcblxcdHJpZ2h0OiAtMTdweDtcXG5cXHR0b3A6IC02cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIHtcXG5cXHR3aWR0aDogMThweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlIHtcXG5cXHR3aWR0aDogMjhweDtcXG5cXHRoZWlnaHQ6IDM0cHg7XFxuXFx0cmlnaHQ6IC02cHg7XFxuXFx0Ym90dG9tOiAtMTdweDtcXG59XFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuXFx0bGVmdDogLTE3cHg7XFxuXFx0cmlnaHQ6IGF1dG87XFxufVxcbi8qIFN0eWxpbmc7XFxuICogR2l2aW5nIHRoZSBjb25uZWN0IGVsZW1lbnQgYSBib3JkZXIgcmFkaXVzIGNhdXNlcyBpc3N1ZXMgd2l0aCB1c2luZyB0cmFuc2Zvcm06IHNjYWxlXFxuICovXFxuLm5vVWktdGFyZ2V0IHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xcblxcdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjZjBmMGYwLCAwIDNweCA2cHggLTVweCAjYmJiO1xcbn1cXG4ubm9VaS1jb25uZWN0cyB7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ubm9VaS1jb25uZWN0IHtcXG5cXHRiYWNrZ3JvdW5kOiAjM2ZiOGFmO1xcbn1cXG4vKiBIYW5kbGVzIGFuZCBjdXJzb3JzO1xcbiAqL1xcbi5ub1VpLWRyYWdnYWJsZSB7XFxuXFx0Y3Vyc29yOiBldy1yZXNpemU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWRyYWdnYWJsZSB7XFxuXFx0Y3Vyc29yOiBucy1yZXNpemU7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuXFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmLCBpbnNldCAwIDFweCA3cHggI2ViZWJlYiwgMCAzcHggNnB4IC0zcHggI2JiYjtcXG59XFxuLm5vVWktYWN0aXZlIHtcXG5cXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNmZmYsIGluc2V0IDAgMXB4IDdweCAjZGRkLCAwIDNweCA2cHggLTNweCAjYmJiO1xcbn1cXG4vKiBIYW5kbGUgc3RyaXBlcztcXG4gKi9cXG4ubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGhlaWdodDogMTRweDtcXG5cXHR3aWR0aDogMXB4O1xcblxcdGJhY2tncm91bmQ6ICNlOGU3ZTY7XFxuXFx0bGVmdDogMTRweDtcXG5cXHR0b3A6IDZweDtcXG59XFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG5cXHRsZWZ0OiAxN3B4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuXFx0d2lkdGg6IDE0cHg7XFxuXFx0aGVpZ2h0OiAxcHg7XFxuXFx0bGVmdDogNnB4O1xcblxcdHRvcDogMTRweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG5cXHR0b3A6IDE3cHg7XFxufVxcbi8qIERpc2FibGVkIHN0YXRlO1xcbiAqL1xcbltkaXNhYmxlZF0gLm5vVWktY29ubmVjdCB7XFxuXFx0YmFja2dyb3VuZDogI2I4YjhiODtcXG59XFxuW2Rpc2FibGVkXS5ub1VpLXRhcmdldCxcXG5bZGlzYWJsZWRdLm5vVWktaGFuZGxlLFxcbltkaXNhYmxlZF0gLm5vVWktaGFuZGxlIHtcXG5cXHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4vKiBCYXNlO1xcbiAqXFxuICovXFxuLm5vVWktcGlwcyxcXG4ubm9VaS1waXBzICoge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXBpcHMge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRjb2xvcjogIzk5OTtcXG59XFxuLyogVmFsdWVzO1xcbiAqXFxuICovXFxuLm5vVWktdmFsdWUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm5vVWktdmFsdWUtc3ViIHtcXG5cXHRjb2xvcjogI2NjYztcXG5cXHRmb250LXNpemU6IDEwcHg7XFxufVxcbi8qIE1hcmtpbmdzO1xcbiAqXFxuICovXFxuLm5vVWktbWFya2VyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0YmFja2dyb3VuZDogI2NjYztcXG59XFxuLm5vVWktbWFya2VyLXN1YiB7XFxuXFx0YmFja2dyb3VuZDogI2FhYTtcXG59XFxuLm5vVWktbWFya2VyLWxhcmdlIHtcXG5cXHRiYWNrZ3JvdW5kOiAjYWFhO1xcbn1cXG4vKiBIb3Jpem9udGFsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtaG9yaXpvbnRhbCB7XFxuXFx0cGFkZGluZzogMTBweCAwO1xcblxcdGhlaWdodDogODBweDtcXG5cXHR0b3A6IDEwMCU7XFxuXFx0bGVmdDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXIge1xcblxcdG1hcmdpbi1sZWZ0OiAtMXB4O1xcblxcdHdpZHRoOiAycHg7XFxuXFx0aGVpZ2h0OiA1cHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLXN1YiB7XFxuXFx0aGVpZ2h0OiAxMHB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuXFx0aGVpZ2h0OiAxNXB4O1xcbn1cXG4vKiBWZXJ0aWNhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLXZlcnRpY2FsIHtcXG5cXHRwYWRkaW5nOiAwIDEwcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuXFx0cGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtdmVydGljYWwge1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlciB7XFxuXFx0d2lkdGg6IDVweDtcXG5cXHRoZWlnaHQ6IDJweDtcXG5cXHRtYXJnaW4tdG9wOiAtMXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItc3ViIHtcXG5cXHR3aWR0aDogMTBweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLWxhcmdlIHtcXG5cXHR3aWR0aDogMTVweDtcXG59XFxuLm5vVWktdG9vbHRpcCB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0Y29sb3I6ICMwMDA7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLXRvb2x0aXAge1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcblxcdGxlZnQ6IDUwJTtcXG5cXHRib3R0b206IDEyMCU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLXRvb2x0aXAge1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcblxcdHRvcDogNTAlO1xcblxcdHJpZ2h0OiAxMjAlO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuXFx0bGVmdDogYXV0bztcXG5cXHRib3R0b206IDEwcHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG5cXHR0b3A6IGF1dG87XFxuXFx0cmlnaHQ6IDI4cHg7XFxufVxcblwiLFwiLy8g0J7QsdGJ0LjQuSDRhNCw0LnQuyDRjdC70LXQvNC10L3RgtC+0LIg0YTQvtGA0LxcXHJcXG4vLyDQlNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjy/QvtGC0LrQu9GO0YfQtdC90LjRjyDRgdGC0LjQu9C10Lkg0LrQvtC90LrRgNC10YLQvdC+0LPQviDRlNC70LXQvNC10L3RgtCwINGE0L7RgNC80Ysg0YHQvNC+0YLRgNC4IGJhc2UvZm9ybXMvZm9ybXMuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2UvZm9ybXMvZm9ybXNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70Lgg0L/QvtC/0LDQv9C+0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3BvcHVwXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9C4INGB0L/QvtC50LvQtdGA0L7Qslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3BvbGxlcnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70Lgg0YLQsNCx0L7Qslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvdGFic1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvQuCDQutCw0YDRglxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvbWFwc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvQuCDQsdC70L7QutCwIFxcXCLQv9C+0LrQsNC30LDRgtGMINC10YnQtVxcXCJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nob3dtb3JlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9C4INC00LvRjyDQv9C+0LvQvdC+0Y3QutGA0LDQvdC90L7Qs9C+INCx0LvQvtC60LBcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxzY3JlZW5cXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70Lgg0LTQu9GPINC70LjQv9C60L7Qs9C+INCx0LvQvtC60LBcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3N0aWNreVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvQuCDQtNC70Y8g0L7RgtC30YvQstGH0LjQstGL0YUg0LrQsNGA0YLQuNC90L7QuiAoSUJHKVxcclxcbi8vINCh0L3QuNC/0L/QtdGCIChIVE1MKTogaWJnIChkaXYgYyDQutCw0YDRgtC40L3QutC+0Lkg0Lgg0LrQu9Cw0YHRgdCw0LzQuClcXHJcXG4vLyDQodC90LjQv9C/0LXRgiAoSFRNTCk6IGliZ2EgKGEgYyDQutCw0YDRgtC40L3QutC+0Lkg0Lgg0LrQu9Cw0YHRgdCw0LzQuClcXHJcXG5bY2xhc3MqPVxcXCItaWJnXFxcIl0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5bY2xhc3MqPVxcXCItaWJnX2NvbnRhaW5cXFwiXSB7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0KjQsNCx0LvQvtC90YsgKNC30LDQs9C+0YLQvtCy0LrQuClcXHJcXG4vLyBAZXh0ZW5kICXQuNC80Y8g0YjQsNCx0LvQvtC90LA7XFxyXFxuLy8g0KHQvdC40L/Qv9C10YIgKFNDU1MpOiBleFxcclxcblxcclxcbi8vINCh0YfQtdGC0YfQuNC6INC00LvRjyDRgdC/0LjRgdC60LBcXHJcXG4lbGlzdENvdW50ZXIge1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHRjb3VudGVyLXJlc2V0OiBpdGVtO1xcclxcblxcdGxpIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0JjpiZWZvcmUge1xcclxcblxcdFxcdFxcdGNvdW50ZXItaW5jcmVtZW50OiBpdGVtO1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IGNvdW50ZXIoaXRlbSk7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QvtC1INCy0LjQtNC10L5cXHJcXG4lcmVzcG9uc2l2ZVZpZGVvIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDU2LjI1JTtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JLQuNC00LXQviDQsiDQutCw0YfQtdGB0YLQstC1INGE0L7QvdCwXFxyXFxuJXZpZGVvQmFja2dyb3VuZCB7XFxyXFxuXFx0dmlkZW8sXFxyXFxuXFx0aWZyYW1lLFxcclxcblxcdG9iamVjdCxcXHJcXG5cXHRlbWJlZCB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHRvcDogNTAlO1xcclxcblxcdFxcdGxlZnQ6IDUwJTtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR3aWR0aDogYXV0bztcXHJcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0ei1pbmRleDogLTEwMDtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHQtdGA0YvQuSDRhNC40LvRjNGC0YBcXHJcXG4lZ3JheWZpbHRlciB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcXHJcXG5cXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQntGC0LzQtdC90LjRgtGMINCy0YvQtNC10LvQtdC90LjQtVxcclxcbiVub3NlbGVjdCB7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi8vINCX0LXRgNC60LDQu9GM0L3QvtC1INC+0YLQvtCx0YDQsNC20LXQvdC40LVcXHJcXG4lbWlycm9yIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXHJcXG59XFxyXFxuLy8g0J/Qu9Cw0LLQvdGL0Lkg0YHQutGA0L7Qu9C7XFxyXFxuJXNtb290aHNjcm9sbCB7XFxyXFxuXFx0LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbn1cXHJcXG4vLyDQodC60YDRi9GC0Ywg0YHQutGA0L7Qu9C7XFxyXFxuJWhpZGVzY3JvbGwge1xcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XFxyXFxuICAmX19jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IHJlbSg0OCk7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xvZ28ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IHJlbSgyNSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19hY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IHJlbSgxMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19tZW51IHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm1lbnUge1xcclxcbiAgJl9faWNvbiB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19ib2R5IHtcXHJcXG4gICAgLy8gZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xpc3Qge1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbSB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5pY29uLW1lbnUge1xcclxcbn1cXHJcXG4ubWVudS1vcGVuIHtcXHJcXG4gIC5zZXR0aW5nIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcbi5tb25leS1vcGVuIHtcXHJcXG4gIC5tb25leS1lbnRyeSB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uc2V0dGluZyxcXHJcXG4ubW9uZXktZW50cnkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZDogI2Q1Y2NjYztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICByaWdodDogLTkwMHB4O1xcclxcbiAgLy8gcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBtYXgtd2lkdGg6IDQ3OHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiByZW0oMTApIHJlbSgyMCkgcmVtKDQwKTtcXHJcXG4gIHotaW5kZXg6IDQ7XFxyXFxuXFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG4gIHNjcm9sbGJhci1jb2xvcjogaHNsKDAgMCUgNTAlKTtcXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMzAsIDIwKTtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19saXN0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogcmVtKDI1KTtcXHJcXG4gICAgbWF4LXdpZHRoOiA2MC44JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW0ge1xcclxcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IHJlbSgxOCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2J1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IHJlbSgyMCk7XFxyXFxuICAgIG1heC13aWR0aDogNjAuOCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogcmVtKDEwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLml0ZW0tc2V0dGluZyxcXHJcXG4uaXRlbS1tb25leS1lbnRyeSB7XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI1LCAxNik7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fc2xpZGVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogcmVtKDExKTtcXHJcXG4gICAgJi5ub1VpLWhvcml6b250YWwge1xcclxcbiAgICAgIGhlaWdodDogN3B4O1xcclxcbiAgICB9XFxyXFxuICAgICYubm9VaS10YXJnZXQge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIH1cXHJcXG4gICAgJi5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXHJcXG4gICAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgICByaWdodDogLTE3cHg7XFxyXFxuICAgICAgdG9wOiAtOXB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAmLm5vVWktY29ubmVjdCB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjAzO1xcclxcbiAgICB9XFxyXFxuICAgICYgLm5vVWktY29ubmVjdCB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gICAgfVxcclxcbiAgICAmIC5ub1VpLWhhbmRsZTpiZWZvcmUsXFxyXFxuICAgICYgLm5vVWktaGFuZGxlOmFmdGVyIHtcXHJcXG4gICAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gICAgICBsZWZ0OiAzcHg7XFxyXFxuICAgICAgdG9wOiAzcHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fc2VsZWN0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogcmVtKDE4KTtcXHJcXG4gIH1cXHJcXG4gICZfX3ZhbHVlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogcmVtKDEyKTtcXHJcXG4gICAgZm9udC1zaXplOiByZW0oMTMpO1xcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICBmb250LXNpemU6IHJlbSgxNik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy9CdXJnZXJcXHJcXG5cXHJcXG4uaWNvbi1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHJlbSgzMCk7XFxyXFxuICBoZWlnaHQ6IHJlbSgxOCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB6LWluZGV4OiA1O1xcclxcbiAgc3BhbixcXHJcXG4gICY6OmJlZm9yZSxcXHJcXG4gICY6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IHJlbSgyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG4gICY6OmJlZm9yZSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gIH1cXHJcXG4gICY6OmFmdGVyIHtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgfVxcclxcbiAgc3BhbiB7XFxyXFxuICAgIHRvcDogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcbiAgfVxcclxcbiAgLm1lbnUtb3BlbiAmIHtcXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgd2lkdGg6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YmVmb3JlLFxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICB0b3A6IGNhbGMoNTAlIC0gcmVtKDEpKTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICBib3R0b206IGNhbGMoNTAlIC0gcmVtKDEpKTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbW9uZXkge1xcclxcbiAgc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogcmVtKDM0LjcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi8v0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRiNGA0LjRhNGC0LBcXHJcXG5AbWl4aW4gZm9udCgkZm9udF9uYW1lLCAkZmlsZV9uYW1lLCAkd2VpZ2h0LCAkc3R5bGUpIHtcXHJcXG5cXHRAZm9udC1mYWNlIHtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJGZvbnRfbmFtZTtcXHJcXG5cXHRcXHRmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuXFx0XFx0c3JjOiB1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiLi4vZm9udHMvI3skZmlsZV9uYW1lfS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6ICN7JHdlaWdodH07XFxyXFxuXFx0XFx0Zm9udC1zdHlsZTogI3skc3R5bGV9O1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy9QZXJjZW50XFxyXFxuQGZ1bmN0aW9uIHBlcmNlbnQoJHB4LCAkZnJvbSkge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGZyb20pICogMTAwJTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vUkVNXFxyXFxuQGZ1bmN0aW9uIHJlbSgkcHgpIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsIDE2KSArIHJlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vRU1cXHJcXG5AZnVuY3Rpb24gZW0oJHB4LCAkY3VycmVudDogMTYpIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRjdXJyZW50KSArIGVtO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy/QkNC00LDQv9GC0LjQstC90L7QtSDRgdCy0L7QudGB0YLQstC+XFxyXFxuXFxyXFxuLy9DdXJyZW5jeVxcclxcbkBtaXhpbiBjdXJyZW5jeSgkc3ltKSB7XFxyXFxuXFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdGNvbnRlbnQ6IFxcXCIjeyRzeW19XFxcIjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vIEdyaWRzXFxyXFxuQG1peGluIGdyaWRDYXJkcygkdHlwZTogZml0LCAkbWluOiAyODBweCwgJG1heDogMWZyLCAkZ2FwOiAzMHB4KSB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRnYXA6ICRnYXA7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by0jeyR0eXBlfSwgbWlubWF4KCRtaW4sICRtYXgpKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdC+0LUg0YHQstC+0LnRgdGC0LLQviAoY2xhbXApXFxyXFxuQG1peGluIGFkYXB0aXZlVmFsdWUoJHByb3BlcnR5LCAkc3RhcnRTaXplLCAkbWluU2l6ZSwgJHdpZHRoRnJvbTogJGNvbnRhaW5lcldpZHRoLCAkd2lkdGhUbzogJG1pbldpZHRoLCAka2VlcFNpemU6IDApIHtcXHJcXG5cXHRAaWYgKCRzdGFydFNpemU9PTApIHtcXHJcXG5cXHRcXHQkc3RhcnRTaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0QGlmICgkbWluU2l6ZT09MCkge1xcclxcblxcdFxcdCRtaW5TaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JTQu9GPIGNhbGMoKTtcXHJcXG5cXHQkYWRkU2l6ZTogbWF0aC5kaXYoJHN0YXJ0U2l6ZSAtICRtaW5TaXplLCAxNik7XFxyXFxuXFxyXFxuXFx0QGlmICgkd2lkdGhGcm9tID09ICRjb250YWluZXJXaWR0aCBhbmQgJG1heFdpZHRoQ29udGFpbmVyID09IDApIHtcXHJcXG5cXHRcXHQkd2lkdGhGcm9tOiAkbWF4V2lkdGg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCR0YDQtdC50Lot0L/QvtC40L3RgtGLINCyIEVNXFxyXFxuXFx0JHdpZHRoRnJvbU1lZGlhOiBlbSgkd2lkdGhGcm9tKTtcXHJcXG5cXHQkd2lkdGhUb01lZGlhOiBlbSgkd2lkdGhUbyk7XFxyXFxuXFxyXFxuXFx0Ly8g0KTQvtGA0LzRg9C70LAg0L/Qu9Cw0LLQsNGO0YnQtdCz0L4g0LfQvdCw0YfQtdC90LjRj1xcclxcblxcdC8vINCY0YHRgtC+0YfQvdC40Lo6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vbGluZWFybHktc2NhbGUtZm9udC1zaXplLXdpdGgtY3NzLWNsYW1wLWJhc2VkLW9uLXRoZS12aWV3cG9ydC9cXHJcXG5cXHQkc2xvcGU6IG1hdGguZGl2KCgkc3RhcnRTaXplIC0gJG1pblNpemUpLCAoJHdpZHRoRnJvbSAtICR3aWR0aFRvKSk7XFxyXFxuXFx0JHlJbnRlcnNlY3Rpb246IC0kd2lkdGhUbyAqICRzbG9wZSArICRtaW5TaXplO1xcclxcblxcdEBpZiAoJHlJbnRlcnNlY3Rpb249PTApIHtcXHJcXG5cXHRcXHQkeUludGVyc2VjdGlvbjogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdCRmbHlWYWx1ZTogI3tyZW0oJHlJbnRlcnNlY3Rpb24pfVxcXCIgKyBcXFwiICN7JHNsb3BlICogMTAwfXZ3O1xcclxcblxcclxcblxcdC8vINCf0L7Qu9GD0YfQtdC90LjQtSDQt9C90LDRh9C10L3QuNGPINGB0LLQvtC50YHRgtCy0LBcXHJcXG5cXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiByZW0oJG1pblNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdC8vINCV0YHQu9C4INC+0YLRgNC40YbQsNGC0LXQu9GM0L3Ri9C1INC30L3QsNGH0LXQvdC40Y9cXHJcXG5cXHRAaWYgKCRtaW5TaXplID4gJHN0YXJ0U2l6ZSkge1xcclxcblxcdFxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiByZW0oJG1pblNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCV0YHQu9C4INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRAc3VwcG9ydHMgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHQjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQldGB0LvQuCDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRAc3VwcG9ydHMgbm90ICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0I3skcHJvcGVydHl9OiBjYWxjKCN7cmVtKCRtaW5TaXplKX0gKyAjeyRhZGRTaXplfSAqICgxMDB2dyAtICN7cmVtKCR3aWR0aFRvKX0pIC8gI3ttYXRoLmRpdigkd2lkdGhGcm9tLCAxNikgLSBtYXRoLmRpdigkd2lkdGhUbywgMTYpfSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC30L3QsNGH0LXQvdC40Y8g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cXHJcXG5cXHRAaWYgJHdpZHRoRnJvbSAhPSAkY29udGFpbmVyV2lkdGggYW5kICR3aWR0aEZyb20gIT0gJG1heFdpZHRoIGFuZCAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDIge1xcclxcblxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IGluaGVyaXQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRAaWYgJHdpZHRoVG8gIT0gJG1pbldpZHRoIGFuZCAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDMge1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkd2lkdGhUb01lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiBpbmhlcml0O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgJl9fanVncyB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5qdWdzIHtcXHJcXG4gIG1hcmdpbi10b3A6IHJlbSgxNyk7XFxyXFxuICAmX19pdGVtcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDQzLCAxMCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICAgbWF4LXdpZHRoOiByZW0oMjUwKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiByZW0oMTApO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uaXRlbS1qdWdzIHtcXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjUsIDE2KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2JvZHkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI1LCAxNik7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19ib2R5LXRvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxOS44JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19ib2R5LXRvcC1wZXJjZW50IHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMzYsIDIzKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2JvZHktdG9wLW1vbmV5IHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2JvZHktYm90dG9tIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDExLjElO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2JvZHktYm90dG9tLXRleHQge1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fYm9keS1ib3R0b20tbW9uZXkge1xcclxcbiAgfVxcclxcbn1cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogcmVtKDE0KTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHJlbSgyNSk7XFxyXFxuICBwYWRkaW5nOiByZW0oMTApIHJlbSgyNSk7XFxyXFxuICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgbGluZSB7XFxyXFxuICAgICAgICBzdHJva2U6ICMwMDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHNjYWxlKDEuMDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5nb29kIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb24tZ29vZCA4cyBlYXNlO1xcclxcbiAgfVxcclxcbiAgJi5lcnJvciB7XFxyXFxuICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLWVycm9yIDhzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIGFuaW1hdGlvbi1nb29kIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOGFiMzA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBhbmltYXRpb24tZXJyb3Ige1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzMTYxNjtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzOGViYjlmNWNlNzZmOWJjMjUwMlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==