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
  font-size: 0.875rem;
  border: 0.125rem solid #000;
  border-radius: 0.9375rem;
  background: inherit;
  width: 100%;
  display: block;
  padding: 8px 11px;
}
.input::placeholder {
  color: rgba(0, 0, 0, 0.42);
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
  position: relative;
  z-index: 1;
  color: inherit;
  text-align: left;
  background-color: inherit;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
}
.select__value {
  font-size: 0.875rem;
  color: rgb(0, 0, 0);
  border: 0.125rem solid #000;
  border-radius: 0.9375rem;
  padding: 8px 11px;
  display: flex;
  align-items: center;
  height: 1.875rem;
  gap: 0.625rem;
}
.select__value > * {
  border-radius: 0.9375rem;
  flex: 1 1 auto;
}
.select__value:after {
  content: ">";
  align-self: stretch;
  flex: 0 0 10px;
  transition: all 0.3s ease 0s;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
}
._select-open .select__value:after {
  transform: rotate(-90deg);
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
  top: 18px;
  border-radius: 0 0 4px 4px;
  min-width: 100%;
  left: 0;
  background-color: #d5cccc;
  border-top: 0;
  border: 2px solid #000;
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
.setting__top,
.money-entry__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;
}
.setting__top span, .setting__top::before, .setting__top::after,
.money-entry__top span,
.money-entry__top::before,
.money-entry__top::after {
  content: "";
  transition: all 0.3s ease 0s;
  right: 0;
  position: absolute;
  width: 100%;
  height: 0.125rem;
  background-color: #000;
}
.setting__top span,
.money-entry__top span {
  width: 0;
}
.setting__top::before,
.money-entry__top::before {
  top: calc(50% - 0.0625rem);
  transform: rotate(-45deg);
}
.setting__top::after,
.money-entry__top::after {
  bottom: calc(50% - 0.0625rem);
  transform: rotate(45deg);
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

.money-entry {
  z-index: 6;
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
.item-setting .select, .item-setting__input,
.item-money-entry .select,
.item-money-entry__input {
  margin-top: 0.625rem;
}
.item-setting__button,
.item-money-entry__button {
  margin-top: 0.9375rem;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/fonts/fonts.scss","webpack://./src/scss/fonts/icons.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base/forms/input.scss","webpack://./src/scss/base/forms/select.scss","webpack://./src/scss/base/forms/range.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/home.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"sass:math\";\r\n\r\n// Подключение миксинов ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Подключение шрифтов ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - добавить при подключении через плагин\r\n//&display=swap - добавить при подключении через плагин\r\n\r\n// Подключить если есть локальные файлы шрифтов\r\n@import \"fonts/fonts\";\r\n\r\n// Подключение иконочных шрифтов ==============================================================================================================================================================================================================================================================================\r\n// Подключить если есть файл иконочного шрифта\r\n@import \"fonts/icons\";\r\n\r\n// Шрифт по умолчанию ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Roboto\";\r\n$fontSize: rem(14); // где 14(px) - размер шрифта по умолчанию из макета\r\n\r\n// Основные цвета\r\n$mainColor: #000; // Цвет шрифта по умолчанию\r\n\r\n// НАСТРОЙКИ ===============================================================================================================================================================================================================================================================================================\r\n// Минимальная ширина страницы\r\n$minWidth: 320;\r\n// Ширина полотна (макета)\r\n$maxWidth: 1920;\r\n// Ширина ограничивающего контейнера (0 = нет ограничения)\r\n$maxWidthContainer: 1100;\r\n// Общий отступ у контейнера\r\n// (30 = по 15px слева и справа, 0 = нет отступа)\r\n$containerPadding: 30;\r\n\r\n// Ширина срабатывания первого брейкпоинта\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поинты\r\n$pc: em(\r\n  $containerWidth\r\n); // ПК, ноутбуки, некоторые планшеты в горизонтальном положении\r\n$tablet: em(991.98); // Планшеты, некоторые телефоны в горизонтальном положении\r\n$mobile: em(767.98); // Телефоны L\r\n$mobileSmall: em(479.98); // Телефоны S\r\n\r\n// Тип адаптива:\r\n// 1 = отзывчивость (у контейнера нет брейкпоинтов),\r\n// 2 = по брейк-поинтам (контейнер меняет свою ширину по брейк-поинтам)\r\n$responsiveType: 1;\r\n\r\n// Обнуление и общие параметры ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\nbody {\r\n  background: #faf2f2;\r\n  scrollbar-width: thin; /* \"auto\" или \"thin\"  */\r\n  scrollbar-color: rgb(0, 0, 0) rgb(255, 255, 255);\r\n  // Скролл заблокирован\r\n  .lock & {\r\n    overflow: hidden;\r\n    touch-action: none;\r\n  }\r\n  // Сайт загружен\r\n  .loaded & {\r\n  }\r\n}\r\n// Оболочка ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n  // Прижимаем footer\r\n  > main {\r\n    flex: 1 1 auto;\r\n  }\r\n  // Фикс для слайдеров\r\n  > * {\r\n    min-width: 0;\r\n  }\r\n}\r\n// Ограничивающий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стили будут применяться ко \r\nвсем классам содержащим *__container\r\nНапример header__container, main__container и т.д.\r\nСнипет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n  // Отзывчивая\r\n  [class*=\"__container\"] {\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($maxWidthContainer);\r\n      box-sizing: content-box;\r\n      margin: 0 auto;\r\n    }\r\n    @if ($containerPadding>0) {\r\n      padding: 0 rem(math.div($containerPadding, 2));\r\n    }\r\n  }\r\n} @else {\r\n  // По брейк-поинтам\r\n  [class*=\"__container\"] {\r\n    margin: 0 auto;\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($maxWidthContainer);\r\n      box-sizing: content-box;\r\n    } @else {\r\n      @if ($containerPadding>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n    @media (max-width: $pc) {\r\n      max-width: rem(970);\r\n    }\r\n    @media (max-width: $tablet) {\r\n      max-width: rem(750);\r\n    }\r\n    @media (max-width: $mobile) {\r\n      max-width: none;\r\n      @if ($containerPadding>0 and $maxWidthContainer>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Подключение базовых стилей, шаблонов (заготовок) и вспомогательных  классов\r\n// Для подключения/отключения конкретных стилей смотри base.scss\r\n@import \"base\";\r\n\r\n// Подключение стилей общих элементов проекта\r\n@import \"common\";\r\n\r\n// Подключение стилей отдельных блоков\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Подключение стилей отдельных страниц\r\n@import \"home\";\r\n","@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-Black.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-Black.woff\") format(\"woff\");\n  font-weight: 900;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-Bold.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-Bold.woff\") format(\"woff\");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-ExtraBold.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-ExtraBold.woff\") format(\"woff\");\n  font-weight: 800;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-ExtraLight.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-ExtraLight.woff\") format(\"woff\");\n  font-weight: 200;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-Light.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-Light.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-Medium.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-Regular.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-SemiBold.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-SemiBold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  font-display: swap;\n  src:\n    url(\"../fonts/Roboto-Thin.woff2\") format(\"woff2\"),\n    url(\"../fonts/Roboto-Thin.woff\") format(\"woff\");\n  font-weight: 100;\n  font-style: normal;\n}\n","%ic {\r\n\tfont-family: \"icons\";\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\tfont-variant: normal;\r\n\ttext-transform: none;\r\n\tline-height: 1;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n[class*=\"icon-\"] {\r\n\t&:before {\r\n\t\t@extend %ic;\r\n\t\tdisplay: block;\r\n\t}\r\n}\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: inherit;\r\n}\r\na {\r\n\tcolor: inherit;\r\n}\r\na:link,\r\na:visited {\r\n\ttext-decoration: none;\r\n}\r\na:hover {\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","//<INPUT>\r\n// Снипет (HTML): inp\r\ninput[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"tel\"],\r\ntextarea {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n.input {\r\n  font-size: rem(14);\r\n\r\n  border: rem(2) solid #000;\r\n  border-radius: rem(15);\r\n  background: inherit;\r\n\r\n  width: 100%;\r\n  display: block;\r\n  padding: 8px 11px;\r\n  &::placeholder {\r\n    color: rgba(0, 0, 0, 0.42);\r\n  }\r\n  &._form-focus {\r\n  }\r\n  &._form-error {\r\n  }\r\n}\r\ntextarea.input {\r\n  resize: none;\r\n  padding: 0px 0px;\r\n}\r\n","// <SELECT>\r\n// Снипет (HTML): sel\r\n.select {\r\n  position: relative;\r\n  // .select__body\r\n  &__body {\r\n    position: relative;\r\n  }\r\n  // .select__title\r\n  &__title {\r\n    position: relative;\r\n    z-index: 1;\r\n    color: inherit;\r\n    text-align: left;\r\n    background-color: inherit;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    border-radius: 4px;\r\n  }\r\n  // .select__value\r\n  &__value {\r\n    font-size: rem(14);\r\n    color: rgba(0, 0, 0, 1);\r\n    border: rem(2) solid #000;\r\n    border-radius: rem(15);\r\n    padding: 8px 11px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    height: rem(30);\r\n    gap: rem(10);\r\n    > * {\r\n      border-radius: rem(15);\r\n      flex: 1 1 auto;\r\n    }\r\n    &:after {\r\n      content: \">\";\r\n      align-self: stretch;\r\n      flex: 0 0 10px;\r\n      transition: all 0.3s ease 0s;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      transform: rotate(90deg);\r\n      ._select-open & {\r\n        transform: rotate(-90deg);\r\n      }\r\n    }\r\n    &._select-pseudo-label {\r\n      &::before {\r\n        content: attr(data-pseudo-label);\r\n        opacity: 0.5;\r\n      }\r\n    }\r\n  }\r\n  // .select__text\r\n  &__text {\r\n    flex: 1 1 auto;\r\n  }\r\n  &__input {\r\n    width: 100%;\r\n    background-color: transparent;\r\n    height: 100%;\r\n  }\r\n  // .select__options\r\n  &__options {\r\n    color: #000;\r\n    position: absolute;\r\n    top: 18px;\r\n    border-radius: 0 0 4px 4px;\r\n    min-width: 100%;\r\n    left: 0;\r\n    background-color: #d5cccc;\r\n    border-top: 0;\r\n    border: 2px solid #000;\r\n    border-top: 0;\r\n    padding: 10px 0px 5px 0px;\r\n  }\r\n  // .select__scroll\r\n  &__scroll {\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    // Максимальная высота\r\n    max-height: 200px;\r\n    // Стили скроллбара\r\n    .simplebar-scrollbar {\r\n      &::before {\r\n        //opacity: 1;\r\n      }\r\n    }\r\n  }\r\n  // .select__option\r\n  &__option {\r\n    width: 100%;\r\n    text-align: left;\r\n    cursor: pointer;\r\n    padding: 5px 15px;\r\n    color: inherit;\r\n    &._select-selected {\r\n      background-color: #eee;\r\n    }\r\n    @media (any-hover: hover) {\r\n      &:hover {\r\n        background: #d9d9d9;\r\n      }\r\n    }\r\n  }\r\n\r\n  // Конструкция дополнительных данных\r\n  &__row {\r\n    display: inline-flex;\r\n    align-items: center;\r\n  }\r\n  &__asset {\r\n  }\r\n  &__text {\r\n  }\r\n\r\n  // Состояния селекта\r\n  &._select-open {\r\n    z-index: 5;\r\n  }\r\n  &._select-disabled {\r\n  }\r\n  &._select-active {\r\n  }\r\n  &._select-focus {\r\n  }\r\n  &._select-multiple {\r\n  }\r\n  &._select-checkbox {\r\n  }\r\n}\r\n\r\n// Тег\r\n._select-tag {\r\n  cursor: pointer;\r\n}\r\n","/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n\t-webkit-touch-callout: none;\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\t-webkit-user-select: none;\n\t-ms-touch-action: none;\n\ttouch-action: none;\n\t-ms-user-select: none;\n\t-moz-user-select: none;\n\tuser-select: none;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n}\n.noUi-target {\n\tposition: relative;\n}\n.noUi-base,\n.noUi-connects {\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n\tz-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n\toverflow: hidden;\n\tz-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n\twill-change: transform;\n\tposition: absolute;\n\tz-index: 1;\n\ttop: 0;\n\tright: 0;\n\theight: 100%;\n\twidth: 100%;\n\t-ms-transform-origin: 0 0;\n\t-webkit-transform-origin: 0 0;\n\t-webkit-transform-style: preserve-3d;\n\ttransform-origin: 0 0;\n\ttransform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n\tleft: 0;\n\tright: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n\ttop: -100%;\n\twidth: 0;\n}\n.noUi-horizontal .noUi-origin {\n\theight: 0;\n}\n.noUi-handle {\n\tbackface-visibility: hidden;\n\tposition: absolute;\n}\n.noUi-touch-area {\n\theight: 100%;\n\twidth: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n\ttransition: transform 0.3s;\n}\n.noUi-state-drag * {\n\tcursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n\theight: 18px;\n}\n.noUi-horizontal .noUi-handle {\n\twidth: 34px;\n\theight: 28px;\n\tright: -17px;\n\ttop: -6px;\n}\n.noUi-vertical {\n\twidth: 18px;\n}\n.noUi-vertical .noUi-handle {\n\twidth: 28px;\n\theight: 34px;\n\tright: -6px;\n\tbottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n\tleft: -17px;\n\tright: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n\tbackground: #fafafa;\n\tborder-radius: 4px;\n\tborder: 1px solid #d3d3d3;\n\tbox-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;\n}\n.noUi-connects {\n\tborder-radius: 3px;\n}\n.noUi-connect {\n\tbackground: #3fb8af;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n\tcursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n\tcursor: ns-resize;\n}\n.noUi-handle {\n\tborder: 1px solid #d9d9d9;\n\tborder-radius: 3px;\n\tbackground: #fff;\n\tcursor: default;\n\tbox-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ebebeb, 0 3px 6px -3px #bbb;\n}\n.noUi-active {\n\tbox-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ddd, 0 3px 6px -3px #bbb;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n\tcontent: \"\";\n\tdisplay: block;\n\tposition: absolute;\n\theight: 14px;\n\twidth: 1px;\n\tbackground: #e8e7e6;\n\tleft: 14px;\n\ttop: 6px;\n}\n.noUi-handle:after {\n\tleft: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n\twidth: 14px;\n\theight: 1px;\n\tleft: 6px;\n\ttop: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n\ttop: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n\tbackground: #b8b8b8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n\tcursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n\tbox-sizing: border-box;\n}\n.noUi-pips {\n\tposition: absolute;\n\tcolor: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n\tposition: absolute;\n\twhite-space: nowrap;\n\ttext-align: center;\n}\n.noUi-value-sub {\n\tcolor: #ccc;\n\tfont-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n\tposition: absolute;\n\tbackground: #ccc;\n}\n.noUi-marker-sub {\n\tbackground: #aaa;\n}\n.noUi-marker-large {\n\tbackground: #aaa;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n\tpadding: 10px 0;\n\theight: 80px;\n\ttop: 100%;\n\tleft: 0;\n\twidth: 100%;\n}\n.noUi-value-horizontal {\n\ttransform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n\ttransform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n\tmargin-left: -1px;\n\twidth: 2px;\n\theight: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n\theight: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n\theight: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n\tpadding: 0 10px;\n\theight: 100%;\n\ttop: 0;\n\tleft: 100%;\n}\n.noUi-value-vertical {\n\ttransform: translate(0, -50%);\n\tpadding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n\ttransform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n\twidth: 5px;\n\theight: 2px;\n\tmargin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n\twidth: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n\twidth: 15px;\n}\n.noUi-tooltip {\n\tdisplay: block;\n\tposition: absolute;\n\tborder: 1px solid #d9d9d9;\n\tborder-radius: 3px;\n\tbackground: #fff;\n\tcolor: #000;\n\tpadding: 5px;\n\ttext-align: center;\n\twhite-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n\ttransform: translate(-50%, 0);\n\tleft: 50%;\n\tbottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n\ttransform: translate(0, -50%);\n\ttop: 50%;\n\tright: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n\ttransform: translate(50%, 0);\n\tleft: auto;\n\tbottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n\ttransform: translate(0, -18px);\n\ttop: auto;\n\tright: 28px;\n}\n","// Общий файл элементов форм\r\n// Для подключения/отключения стилей конкретного єлемента формы смотри base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стили попапов\r\n// @import \"base/popup\";\r\n\r\n// Стили спойлеров\r\n// @import \"base/spollers\";\r\n\r\n// Стили табов\r\n// @import \"base/tabs\";\r\n\r\n// Стили карт\r\n// @import \"base/maps\";\r\n\r\n// Стили блока \"показать еще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стили для полноэкранного блока\r\n// @import \"base/fullscreen\";\r\n\r\n// Стили для липкого блока\r\n// @import \"base/sticky\";\r\n\r\n// Стили для отзывчивых картинок (IBG)\r\n// Сниппет (HTML): ibg (div c картинкой и классами)\r\n// Сниппет (HTML): ibga (a c картинкой и классами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблоны (заготовки)\r\n// @extend %имя шаблона;\r\n// Сниппет (SCSS): ex\r\n\r\n// Счетчик для списка\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивное видео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Видео в качестве фона\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Серый фильтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Отменить выделение\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Зеркальное отображение\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавный скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Скрыть скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","//=============================== Header ===============================\r\n.header {\r\n  background: #d9d9d9;\r\n  &__container {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    min-height: rem(48);\r\n    justify-content: space-between;\r\n  }\r\n\r\n  &__logo {\r\n    width: 100%;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    font-size: rem(25);\r\n    text-align: center;\r\n    color: #000;\r\n  }\r\n\r\n  &__action {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: rem(10);\r\n  }\r\n\r\n  &__menu {\r\n  }\r\n}\r\n\r\n//=============================== Menu ===============================\r\n.menu {\r\n  &__icon {\r\n  }\r\n\r\n  &__body {\r\n    // display: none;\r\n  }\r\n\r\n  &__list {\r\n  }\r\n\r\n  &__item {\r\n  }\r\n}\r\n.menu-open {\r\n  .setting {\r\n    right: 0;\r\n  }\r\n}\r\n.money-open {\r\n  .money-entry {\r\n    right: 0;\r\n  }\r\n}\r\n.setting,\r\n.money-entry {\r\n  position: absolute;\r\n  height: 100vh;\r\n  overflow: auto;\r\n  background: #d5cccc;\r\n  transition: all 0.3s ease 0s;\r\n  right: -900px;\r\n  // right: 0;\r\n  top: 0;\r\n  max-width: 478px;\r\n  width: 100%;\r\n  padding: rem(10) rem(20) rem(40);\r\n  z-index: 4;\r\n\r\n  overflow: auto;\r\n  scrollbar-width: thin;\r\n  scrollbar-color: hsl(0 0% 50%);\r\n\r\n  &__top {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: rem(10);\r\n\r\n    span,\r\n    &::before,\r\n    &::after {\r\n      content: \"\";\r\n      transition: all 0.3s ease 0s;\r\n      right: 0;\r\n      position: absolute;\r\n      width: 100%;\r\n      height: rem(2);\r\n      background-color: #000;\r\n    }\r\n    span {\r\n      width: 0;\r\n    }\r\n    &::before {\r\n      top: calc(50% - rem(1));\r\n      transform: rotate(-45deg);\r\n    }\r\n    &::after {\r\n      bottom: calc(50% - rem(1));\r\n      transform: rotate(45deg);\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    font-weight: 400;\r\n    @include adaptiveValue(\"font-size\", 30, 20);\r\n    color: #000;\r\n  }\r\n\r\n  &__list {\r\n    margin-top: rem(25);\r\n    max-width: 60.8%;\r\n  }\r\n\r\n  &__item {\r\n    &:not(:last-child) {\r\n      margin-bottom: rem(18);\r\n    }\r\n  }\r\n\r\n  &__button {\r\n    margin-top: rem(20);\r\n    max-width: 60.8%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: rem(10);\r\n  }\r\n}\r\n.money-entry {\r\n  z-index: 6;\r\n}\r\n.item-setting,\r\n.item-money-entry {\r\n  &__title {\r\n    font-family: var(--font-family);\r\n    font-weight: 400;\r\n    @include adaptiveValue(\"font-size\", 25, 16);\r\n    color: #000;\r\n  }\r\n\r\n  &__slider {\r\n    margin-top: rem(11);\r\n    &.noUi-horizontal {\r\n      height: 7px;\r\n    }\r\n    &.noUi-target {\r\n      background-color: #fff;\r\n    }\r\n    &.noUi-horizontal .noUi-handle {\r\n      width: 24px;\r\n      height: 24px;\r\n      border-radius: 100%;\r\n      right: -17px;\r\n      top: -9px;\r\n      cursor: pointer;\r\n    }\r\n    &.noUi-connect {\r\n      background: #ffffff03;\r\n    }\r\n    & .noUi-connect {\r\n      background: #000;\r\n    }\r\n    & .noUi-handle:before,\r\n    & .noUi-handle:after {\r\n      height: 16px;\r\n      width: 16px;\r\n      background: #000;\r\n      left: 3px;\r\n      top: 3px;\r\n      border-radius: 100%;\r\n    }\r\n  }\r\n\r\n  & .select,\r\n  &__input {\r\n    margin-top: rem(10);\r\n  }\r\n  &__button {\r\n    margin-top: rem(15);\r\n  }\r\n  &__value {\r\n    margin-top: rem(12);\r\n    font-size: rem(13);\r\n    span {\r\n      font-size: rem(16);\r\n    }\r\n  }\r\n}\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n.icon-menu {\r\n  display: block;\r\n  position: relative;\r\n  width: rem(30);\r\n  height: rem(18);\r\n  cursor: pointer;\r\n  z-index: 5;\r\n  span,\r\n  &::before,\r\n  &::after {\r\n    content: \"\";\r\n    transition: all 0.3s ease 0s;\r\n    right: 0;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: rem(2);\r\n    background-color: #000;\r\n  }\r\n  &::before {\r\n    top: 0;\r\n  }\r\n  &::after {\r\n    bottom: 0;\r\n  }\r\n  span {\r\n    top: calc(50% - rem(1));\r\n  }\r\n  .menu-open & {\r\n    span {\r\n      width: 0;\r\n    }\r\n    &::before,\r\n    &::after {\r\n    }\r\n    &::before {\r\n      top: calc(50% - rem(1));\r\n      transform: rotate(-45deg);\r\n    }\r\n    &::after {\r\n      bottom: calc(50% - rem(1));\r\n      transform: rotate(45deg);\r\n    }\r\n  }\r\n}\r\n\r\n.icon-money {\r\n  svg {\r\n    width: 100%;\r\n    max-width: rem(34.7);\r\n  }\r\n}\r\n","//Подключение шрифта\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n//Адаптивное свойство\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивное свойство (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $widthFrom: $containerWidth, $widthTo: $minWidth, $keepSize: 0) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поинты в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плавающего значения\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Получение значения свойства\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Если отрицательные значения\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Если поддерживается clamp();\r\n\t@supports (#{$property}: $propertyValue) {\r\n\t\t#{$property}: $propertyValue;\r\n\t}\r\n\t// Если не поддерживается clamp();\r\n\t@supports not (#{$property}: $propertyValue) {\r\n\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t}\r\n\r\n\t// Устанавливаем значения по умолчанию\r\n\t@if $widthFrom != $containerWidth and $widthFrom != $maxWidth and $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: inherit;\r\n\t\t}\r\n\t}\r\n\t@if $widthTo != $minWidth and $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: inherit;\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.section {\r\n  &__jugs {\r\n  }\r\n}\r\n.jugs {\r\n  margin-top: rem(17);\r\n  &__items {\r\n    display: grid;\r\n    @include adaptiveValue(\"gap\", 43, 10);\r\n    grid-template-columns: repeat(3, 1fr);\r\n    justify-items: center;\r\n    @media (max-width: $mobile) {\r\n      grid-template-columns: repeat(2, 1fr);\r\n    }\r\n  }\r\n\r\n  &__item {\r\n    max-width: rem(250);\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    gap: rem(10);\r\n  }\r\n}\r\n.item-jugs {\r\n  &__title {\r\n    font-weight: 400;\r\n    @include adaptiveValue(\"font-size\", 25, 16);\r\n    text-align: center;\r\n    color: #000;\r\n  }\r\n\r\n  &__body {\r\n    position: relative;\r\n    font-weight: 400;\r\n    @include adaptiveValue(\"font-size\", 25, 16);\r\n    text-align: center;\r\n    color: #000;\r\n  }\r\n\r\n  &__body-top {\r\n    position: absolute;\r\n    top: 19.8%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n\r\n  &__body-top-percent {\r\n    @include adaptiveValue(\"font-size\", 36, 23);\r\n  }\r\n\r\n  &__body-top-money {\r\n  }\r\n\r\n  &__body-bottom {\r\n    position: absolute;\r\n    bottom: 11.1%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n\r\n  &__body-bottom-text {\r\n  }\r\n\r\n  &__body-bottom-money {\r\n  }\r\n}\r\n.button {\r\n  font-size: rem(14);\r\n  color: #fff;\r\n  background: #000;\r\n  border-radius: rem(25);\r\n  padding: rem(10) rem(25);\r\n  @media (any-hover: hover) {\r\n    &:hover {\r\n      color: black;\r\n      background: #fff;\r\n      line {\r\n        stroke: #000;\r\n      }\r\n    }\r\n  }\r\n  &:active {\r\n    transform: translateY(5px) scale(1.01);\r\n  }\r\n\r\n  &.good {\r\n    animation: animation-good 8s ease;\r\n  }\r\n  &.error {\r\n    animation: animation-error 8s ease;\r\n  }\r\n  @keyframes animation-good {\r\n    0% {\r\n      background-color: #18ab30;\r\n    }\r\n    100% {\r\n      background-color: #000;\r\n    }\r\n  }\r\n  @keyframes animation-error {\r\n    0% {\r\n      background-color: #d31616;\r\n    }\r\n    100% {\r\n      background-color: #000;\r\n    }\r\n  }\r\n}\r\n\r\n//====================================================================================================\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9915edcf200214e75072")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NWRmNmQyNGM0NDZmOWMxZjEwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdlQUF3ZSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxRQUFRLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxRQUFRLFlBQVksWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxzQkFBc0IsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLFNBQVMsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLFFBQVEsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE9BQU8sUUFBUSxXQUFXLE9BQU8sT0FBTyxLQUFLLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxRQUFRLE9BQU8sVUFBVSxRQUFRLFFBQVEsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sUUFBUSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sUUFBUSxVQUFVLE9BQU8sUUFBUSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxPQUFPLFFBQVEsV0FBVyxVQUFVLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxRQUFRLFdBQVcsV0FBVyxPQUFPLFFBQVEsV0FBVyxPQUFPLFFBQVEsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxRQUFRLE9BQU8sVUFBVSxRQUFRLFFBQVEsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFFBQVEsV0FBVyxPQUFPLFFBQVEsVUFBVSxPQUFPLFFBQVEsV0FBVyxPQUFPLFFBQVEsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxRQUFRLFdBQVcsT0FBTyxRQUFRLFdBQVcsT0FBTyxTQUFTLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sU0FBUyxXQUFXLE9BQU8sUUFBUSxXQUFXLE9BQU8sUUFBUSxXQUFXLFdBQVcsT0FBTyxRQUFRLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUs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c0RBQXNELE9BQU8sNkJBQTZCLE9BQU8sMEJBQTBCLDJCQUEyQixzQkFBc0Isa0JBQWtCLG9DQUFvQyxPQUFPLCtCQUErQixPQUFPLGdDQUFnQyxPQUFPLEtBQUssYUFBYSx5QkFBeUIsa0JBQWtCLHVCQUF1Qiw2QkFBNkIsK0JBQStCLGlDQUFpQyxpQkFBaUIsdUJBQXVCLDJCQUEyQixnQkFBZ0IseUJBQXlCLFdBQVcsU0FBUyxPQUFPLGdCQUFnQiwrQ0FBK0MsT0FBTyxrQkFBa0IsMENBQTBDLE9BQU8sZUFBZSwyQ0FBMkMsT0FBTyxpQ0FBaUMsWUFBWSxvQ0FBb0MsU0FBUyxjQUFjLGlDQUFpQyxTQUFTLE9BQU8sa0NBQWtDLFlBQVksb0NBQW9DLFNBQVMsY0FBYyxpQ0FBaUMsU0FBUyxPQUFPLEtBQUsscUlBQXFJO0FBQ3pxdUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDMWhDdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Zscy1zdGFydC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvUm9ib3RvLUJsYWNrLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9mb250cy9Sb2JvdG8tQmxhY2sud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybChcIi4uL2ZvbnRzL1JvYm90by1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9mb250cy9Sb2JvdG8tQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvUm9ib3RvLUV4dHJhQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vZm9udHMvUm9ib3RvLUV4dHJhQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvUm9ib3RvLUV4dHJhTGlnaHQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2ZvbnRzL1JvYm90by1FeHRyYUxpZ2h0LndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoXCIuLi9mb250cy9Sb2JvdG8tTGlnaHQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2ZvbnRzL1JvYm90by1MaWdodC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvUm9ib3RvLU1lZGl1bS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vZm9udHMvUm9ib3RvLU1lZGl1bS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2ZvbnRzL1JvYm90by1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoXCIuLi9mb250cy9Sb2JvdG8tU2VtaUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2ZvbnRzL1JvYm90by1TZW1pQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvUm9ib3RvLVRoaW4ud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2ZvbnRzL1JvYm90by1UaGluLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuW2NsYXNzKj1pY29uLV06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiaWNvbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzKj1pY29uLV06YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYTpsaW5rLFxuYTp2aXNpdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZmFmMmYyO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47IC8qIFwiYXV0b1wiINC40LvQuCBcInRoaW5cIiAgKi9cbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2IoMCwgMCwgMCkgcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuLmxvY2sgYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cbi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53cmFwcGVyID4gbWFpbiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLndyYXBwZXIgPiAqIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4vKlxuKGkpINCh0YLQuNC70Lgg0LHRg9C00YPRgiDQv9GA0LjQvNC10L3Rj9GC0YzRgdGPINC60L4gXG7QstGB0LXQvCDQutC70LDRgdGB0LDQvCDRgdC+0LTQtdGA0LbQsNGJ0LjQvCAqX19jb250YWluZXJcbtCd0LDQv9GA0LjQvNC10YAgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDQuCDRgi7QtC5cbtCh0L3QuNC/0LXRgiAoSFRNTCk6IGNudFxuKi9cbltjbGFzcyo9X19jb250YWluZXJdIHtcbiAgbWF4LXdpZHRoOiA2OC43NXJlbTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDAuOTM3NXJlbTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT10ZWxdLFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmlucHV0IHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjkzNzVyZW07XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4IDExcHg7XG59XG4uaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG59XG50ZXh0YXJlYS5pbnB1dCB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZzogMHB4IDBweDtcbn1cblxuLnNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3RfX2JvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VsZWN0X190aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5zZWxlY3RfX3ZhbHVlIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjkzNzVyZW07XG4gIHBhZGRpbmc6IDhweCAxMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEuODc1cmVtO1xuICBnYXA6IDAuNjI1cmVtO1xufVxuLnNlbGVjdF9fdmFsdWUgPiAqIHtcbiAgYm9yZGVyLXJhZGl1czogMC45Mzc1cmVtO1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5zZWxlY3RfX3ZhbHVlOmFmdGVyIHtcbiAgY29udGVudDogXCI+XCI7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGZsZXg6IDAgMCAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLl9zZWxlY3Qtb3BlbiAuc2VsZWN0X192YWx1ZTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG4uc2VsZWN0X192YWx1ZS5fc2VsZWN0LXBzZXVkby1sYWJlbDo6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXBzZXVkby1sYWJlbCk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5zZWxlY3RfX3RleHQge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5zZWxlY3RfX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2VsZWN0X19vcHRpb25zIHtcbiAgY29sb3I6ICMwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVjY2NjO1xuICBib3JkZXItdG9wOiAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBib3JkZXItdG9wOiAwO1xuICBwYWRkaW5nOiAxMHB4IDBweCA1cHggMHB4O1xufVxuLnNlbGVjdF9fc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cbi5zZWxlY3RfX29wdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5zZWxlY3RfX29wdGlvbi5fc2VsZWN0LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAuc2VsZWN0X19vcHRpb246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG4gIH1cbn1cbi5zZWxlY3RfX3JvdyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlbGVjdC5fc2VsZWN0LW9wZW4ge1xuICB6LWluZGV4OiA1O1xufVxuLl9zZWxlY3QtdGFnIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBGdW5jdGlvbmFsIHN0eWxpbmc7XG4gKiBUaGVzZSBzdHlsZXMgYXJlIHJlcXVpcmVkIGZvciBub1VpU2xpZGVyIHRvIGZ1bmN0aW9uLlxuICogWW91IGRvbid0IG5lZWQgdG8gY2hhbmdlIHRoZXNlIHJ1bGVzIHRvIGFwcGx5IHlvdXIgZGVzaWduLlxuICovXG4ubm9VaS10YXJnZXQsXG4ubm9VaS10YXJnZXQgKiB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm5vVWktdGFyZ2V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubm9VaS1iYXNlLFxuLm5vVWktY29ubmVjdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIFdyYXBwZXIgZm9yIGFsbCBjb25uZWN0IGVsZW1lbnRzLlxuICovXG4ubm9VaS1jb25uZWN0cyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDA7XG59XG5cbi5ub1VpLWNvbm5lY3QsXG4ubm9VaS1vcmlnaW4ge1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xufVxuXG4vKiBPZmZzZXQgZGlyZWN0aW9uXG4gKi9cbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbn1cblxuLyogR2l2ZSBvcmlnaW5zIDAgaGVpZ2h0L3dpZHRoIHNvIHRoZXkgZG9uJ3QgaW50ZXJmZXJlIHdpdGggY2xpY2tpbmcgdGhlXG4gKiBjb25uZWN0IGVsZW1lbnRzLlxuICovXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4ge1xuICB0b3A6IC0xMDAlO1xuICB3aWR0aDogMDtcbn1cblxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xuICBoZWlnaHQ6IDA7XG59XG5cbi5ub1VpLWhhbmRsZSB7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubm9VaS10b3VjaC1hcmVhIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLWNvbm5lY3QsXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktb3JpZ2luIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG5cbi5ub1VpLXN0YXRlLWRyYWcgKiB7XG4gIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4vKiBTbGlkZXIgc2l6ZSBhbmQgaGFuZGxlIHBsYWNlbWVudDtcbiAqL1xuLm5vVWktaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogMThweDtcbn1cblxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICByaWdodDogLTE3cHg7XG4gIHRvcDogLTZweDtcbn1cblxuLm5vVWktdmVydGljYWwge1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMzRweDtcbiAgcmlnaHQ6IC02cHg7XG4gIGJvdHRvbTogLTE3cHg7XG59XG5cbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xuICBsZWZ0OiAtMTdweDtcbiAgcmlnaHQ6IGF1dG87XG59XG5cbi8qIFN0eWxpbmc7XG4gKiBHaXZpbmcgdGhlIGNvbm5lY3QgZWxlbWVudCBhIGJvcmRlciByYWRpdXMgY2F1c2VzIGlzc3VlcyB3aXRoIHVzaW5nIHRyYW5zZm9ybTogc2NhbGVcbiAqL1xuLm5vVWktdGFyZ2V0IHtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI2YwZjBmMCwgMCAzcHggNnB4IC01cHggI2JiYjtcbn1cblxuLm5vVWktY29ubmVjdHMge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5ub1VpLWNvbm5lY3Qge1xuICBiYWNrZ3JvdW5kOiAjM2ZiOGFmO1xufVxuXG4vKiBIYW5kbGVzIGFuZCBjdXJzb3JzO1xuICovXG4ubm9VaS1kcmFnZ2FibGUge1xuICBjdXJzb3I6IGV3LXJlc2l6ZTtcbn1cblxuLm5vVWktdmVydGljYWwgLm5vVWktZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBucy1yZXNpemU7XG59XG5cbi5ub1VpLWhhbmRsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNmZmYsIGluc2V0IDAgMXB4IDdweCAjZWJlYmViLCAwIDNweCA2cHggLTNweCAjYmJiO1xufVxuXG4ubm9VaS1hY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNmZmYsIGluc2V0IDAgMXB4IDdweCAjZGRkLCAwIDNweCA2cHggLTNweCAjYmJiO1xufVxuXG4vKiBIYW5kbGUgc3RyaXBlcztcbiAqL1xuLm5vVWktaGFuZGxlOmJlZm9yZSxcbi5ub1VpLWhhbmRsZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZDogI2U4ZTdlNjtcbiAgbGVmdDogMTRweDtcbiAgdG9wOiA2cHg7XG59XG5cbi5ub1VpLWhhbmRsZTphZnRlciB7XG4gIGxlZnQ6IDE3cHg7XG59XG5cbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTpiZWZvcmUsXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGxlZnQ6IDZweDtcbiAgdG9wOiAxNHB4O1xufVxuXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xuICB0b3A6IDE3cHg7XG59XG5cbi8qIERpc2FibGVkIHN0YXRlO1xuICovXG5bZGlzYWJsZWRdIC5ub1VpLWNvbm5lY3Qge1xuICBiYWNrZ3JvdW5kOiAjYjhiOGI4O1xufVxuXG5bZGlzYWJsZWRdLm5vVWktdGFyZ2V0LFxuW2Rpc2FibGVkXS5ub1VpLWhhbmRsZSxcbltkaXNhYmxlZF0gLm5vVWktaGFuZGxlIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLyogQmFzZTtcbiAqXG4gKi9cbi5ub1VpLXBpcHMsXG4ubm9VaS1waXBzICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubm9VaS1waXBzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogIzk5OTtcbn1cblxuLyogVmFsdWVzO1xuICpcbiAqL1xuLm5vVWktdmFsdWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vVWktdmFsdWUtc3ViIHtcbiAgY29sb3I6ICNjY2M7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLyogTWFya2luZ3M7XG4gKlxuICovXG4ubm9VaS1tYXJrZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi5ub1VpLW1hcmtlci1zdWIge1xuICBiYWNrZ3JvdW5kOiAjYWFhO1xufVxuXG4ubm9VaS1tYXJrZXItbGFyZ2Uge1xuICBiYWNrZ3JvdW5kOiAjYWFhO1xufVxuXG4vKiBIb3Jpem9udGFsIGxheW91dDtcbiAqXG4gKi9cbi5ub1VpLXBpcHMtaG9yaXpvbnRhbCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbn1cblxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLWhvcml6b250YWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XG59XG5cbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogNXB4O1xufVxuXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1zdWIge1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLWxhcmdlIHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4vKiBWZXJ0aWNhbCBsYXlvdXQ7XG4gKlxuICovXG4ubm9VaS1waXBzLXZlcnRpY2FsIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMTAwJTtcbn1cblxuLm5vVWktdmFsdWUtdmVydGljYWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtdmVydGljYWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xufVxuXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXIge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogLTFweDtcbn1cblxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLXN1YiB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItbGFyZ2Uge1xuICB3aWR0aDogMTVweDtcbn1cblxuLm5vVWktdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLXRvb2x0aXAge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IDEyMCU7XG59XG5cbi5ub1VpLXZlcnRpY2FsIC5ub1VpLXRvb2x0aXAge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAxMjAlO1xufVxuXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xuICBsZWZ0OiBhdXRvO1xuICBib3R0b206IDEwcHg7XG59XG5cbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMThweCk7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IDI4cHg7XG59XG5cbltjbGFzcyo9LWliZ10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5bY2xhc3MqPS1pYmddIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuW2NsYXNzKj0taWJnX2NvbnRhaW5dIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xufVxuLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjU2MjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDA7XG59XG4uaGVhZGVyX19hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNjI1cmVtO1xufVxuLm1lbnUtb3BlbiAuc2V0dGluZyB7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubW9uZXktb3BlbiAubW9uZXktZW50cnkge1xuICByaWdodDogMDtcbn1cblxuLnNldHRpbmcsXG4ubW9uZXktZW50cnkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZDVjY2NjO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICByaWdodDogLTkwMHB4O1xuICB0b3A6IDA7XG4gIG1heC13aWR0aDogNDc4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjYyNXJlbSAxLjI1cmVtIDIuNXJlbTtcbiAgei1pbmRleDogNDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgc2Nyb2xsYmFyLWNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XG59XG4uc2V0dGluZ19fdG9wLFxuLm1vbmV5LWVudHJ5X190b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMC42MjVyZW07XG59XG4uc2V0dGluZ19fdG9wIHNwYW4sIC5zZXR0aW5nX190b3A6OmJlZm9yZSwgLnNldHRpbmdfX3RvcDo6YWZ0ZXIsXG4ubW9uZXktZW50cnlfX3RvcCBzcGFuLFxuLm1vbmV5LWVudHJ5X190b3A6OmJlZm9yZSxcbi5tb25leS1lbnRyeV9fdG9wOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHJpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDAuMTI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuLnNldHRpbmdfX3RvcCBzcGFuLFxuLm1vbmV5LWVudHJ5X190b3Agc3BhbiB7XG4gIHdpZHRoOiAwO1xufVxuLnNldHRpbmdfX3RvcDo6YmVmb3JlLFxuLm1vbmV5LWVudHJ5X190b3A6OmJlZm9yZSB7XG4gIHRvcDogY2FsYyg1MCUgLSAwLjA2MjVyZW0pO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLnNldHRpbmdfX3RvcDo6YWZ0ZXIsXG4ubW9uZXktZW50cnlfX3RvcDo6YWZ0ZXIge1xuICBib3R0b206IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnNldHRpbmdfX3RpdGxlLFxuLm1vbmV5LWVudHJ5X190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjI1cmVtICwgMS4wMDMwODY0MTk4cmVtICArICAxLjIzNDU2NzkwMTJ2dyAsIDEuODc1cmVtICkpIHtcbiAgLnNldHRpbmdfX3RpdGxlLFxuICAubW9uZXktZW50cnlfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IGNsYW1wKCAxLjI1cmVtICwgMS4wMDMwODY0MTk4cmVtICArICAxLjIzNDU2NzkwMTJ2dyAsIDEuODc1cmVtICk7XG4gIH1cbn1cbkBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMjVyZW0gLCAxLjAwMzA4NjQxOThyZW0gICsgIDEuMjM0NTY3OTAxMnZ3ICwgMS44NzVyZW0gKSkge1xuICAuc2V0dGluZ19fdGl0bGUsXG4gIC5tb25leS1lbnRyeV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxLjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1MC42MjUpO1xuICB9XG59XG4uc2V0dGluZ19fbGlzdCxcbi5tb25leS1lbnRyeV9fbGlzdCB7XG4gIG1hcmdpbi10b3A6IDEuNTYyNXJlbTtcbiAgbWF4LXdpZHRoOiA2MC44JTtcbn1cbi5zZXR0aW5nX19pdGVtOm5vdCg6bGFzdC1jaGlsZCksXG4ubW9uZXktZW50cnlfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDEuMTI1cmVtO1xufVxuLnNldHRpbmdfX2J1dHRvbixcbi5tb25leS1lbnRyeV9fYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgbWF4LXdpZHRoOiA2MC44JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjYyNXJlbTtcbn1cblxuLm1vbmV5LWVudHJ5IHtcbiAgei1pbmRleDogNjtcbn1cblxuLml0ZW0tc2V0dGluZ19fdGl0bGUsXG4uaXRlbS1tb25leS1lbnRyeV9fdGl0bGUge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDtcbn1cbkBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuNzc3Nzc3Nzc3OHJlbSAgKyAgMS4xMTExMTExMTExdncgLCAxLjU2MjVyZW0gKSkge1xuICAuaXRlbS1zZXR0aW5nX190aXRsZSxcbiAgLml0ZW0tbW9uZXktZW50cnlfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC43Nzc3Nzc3Nzc4cmVtICArICAxLjExMTExMTExMTF2dyAsIDEuNTYyNXJlbSApO1xuICB9XG59XG5Ac3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC43Nzc3Nzc3Nzc4cmVtICArICAxLjExMTExMTExMTF2dyAsIDEuNTYyNXJlbSApKSB7XG4gIC5pdGVtLXNldHRpbmdfX3RpdGxlLFxuICAuaXRlbS1tb25leS1lbnRyeV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTAuNjI1KTtcbiAgfVxufVxuLml0ZW0tc2V0dGluZ19fc2xpZGVyLFxuLml0ZW0tbW9uZXktZW50cnlfX3NsaWRlciB7XG4gIG1hcmdpbi10b3A6IDAuNjg3NXJlbTtcbn1cbi5pdGVtLXNldHRpbmdfX3NsaWRlci5ub1VpLWhvcml6b250YWwsXG4uaXRlbS1tb25leS1lbnRyeV9fc2xpZGVyLm5vVWktaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogN3B4O1xufVxuLml0ZW0tc2V0dGluZ19fc2xpZGVyLm5vVWktdGFyZ2V0LFxuLml0ZW0tbW9uZXktZW50cnlfX3NsaWRlci5ub1VpLXRhcmdldCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uaXRlbS1zZXR0aW5nX19zbGlkZXIubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSxcbi5pdGVtLW1vbmV5LWVudHJ5X19zbGlkZXIubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHJpZ2h0OiAtMTdweDtcbiAgdG9wOiAtOXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaXRlbS1zZXR0aW5nX19zbGlkZXIubm9VaS1jb25uZWN0LFxuLml0ZW0tbW9uZXktZW50cnlfX3NsaWRlci5ub1VpLWNvbm5lY3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDExNzY0NzA1OSk7XG59XG4uaXRlbS1zZXR0aW5nX19zbGlkZXIgLm5vVWktY29ubmVjdCxcbi5pdGVtLW1vbmV5LWVudHJ5X19zbGlkZXIgLm5vVWktY29ubmVjdCB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG4uaXRlbS1zZXR0aW5nX19zbGlkZXIgLm5vVWktaGFuZGxlOmJlZm9yZSwgLml0ZW0tc2V0dGluZ19fc2xpZGVyIC5ub1VpLWhhbmRsZTphZnRlcixcbi5pdGVtLW1vbmV5LWVudHJ5X19zbGlkZXIgLm5vVWktaGFuZGxlOmJlZm9yZSxcbi5pdGVtLW1vbmV5LWVudHJ5X19zbGlkZXIgLm5vVWktaGFuZGxlOmFmdGVyIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgbGVmdDogM3B4O1xuICB0b3A6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5pdGVtLXNldHRpbmcgLnNlbGVjdCwgLml0ZW0tc2V0dGluZ19faW5wdXQsXG4uaXRlbS1tb25leS1lbnRyeSAuc2VsZWN0LFxuLml0ZW0tbW9uZXktZW50cnlfX2lucHV0IHtcbiAgbWFyZ2luLXRvcDogMC42MjVyZW07XG59XG4uaXRlbS1zZXR0aW5nX19idXR0b24sXG4uaXRlbS1tb25leS1lbnRyeV9fYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMC45Mzc1cmVtO1xufVxuLml0ZW0tc2V0dGluZ19fdmFsdWUsXG4uaXRlbS1tb25leS1lbnRyeV9fdmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbn1cbi5pdGVtLXNldHRpbmdfX3ZhbHVlIHNwYW4sXG4uaXRlbS1tb25leS1lbnRyeV9fdmFsdWUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmljb24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxLjg3NXJlbTtcbiAgaGVpZ2h0OiAxLjEyNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA1O1xufVxuLmljb24tbWVudSBzcGFuLCAuaWNvbi1tZW51OjpiZWZvcmUsIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMC4xMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4uaWNvbi1tZW51OjpiZWZvcmUge1xuICB0b3A6IDA7XG59XG4uaWNvbi1tZW51OjphZnRlciB7XG4gIGJvdHRvbTogMDtcbn1cbi5pY29uLW1lbnUgc3BhbiB7XG4gIHRvcDogY2FsYyg1MCUgLSAwLjA2MjVyZW0pO1xufVxuLm1lbnUtb3BlbiAuaWNvbi1tZW51IHNwYW4ge1xuICB3aWR0aDogMDtcbn1cbi5tZW51LW9wZW4gLmljb24tbWVudTo6YmVmb3JlIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4ubWVudS1vcGVuIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgYm90dG9tOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmljb24tbW9uZXkgc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMi4xNjg3NXJlbTtcbn1cblxuLmp1Z3Mge1xuICBtYXJnaW4tdG9wOiAxLjA2MjVyZW07XG59XG4uanVnc19faXRlbXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5Ac3VwcG9ydHMgKGdhcDogY2xhbXAoIDAuNjI1cmVtICwgLTAuMTg5ODE0ODE0OHJlbSAgKyAgNC4wNzQwNzQwNzQxdncgLCAyLjY4NzVyZW0gKSkge1xuICAuanVnc19faXRlbXMge1xuICAgIGdhcDogY2xhbXAoIDAuNjI1cmVtICwgLTAuMTg5ODE0ODE0OHJlbSAgKyAgNC4wNzQwNzQwNzQxdncgLCAyLjY4NzVyZW0gKTtcbiAgfVxufVxuQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMC42MjVyZW0gLCAtMC4xODk4MTQ4MTQ4cmVtICArICA0LjA3NDA3NDA3NDF2dyAsIDIuNjg3NXJlbSApKSB7XG4gIC5qdWdzX19pdGVtcyB7XG4gICAgZ2FwOiBjYWxjKDAuNjI1cmVtICsgMi4wNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTAuNjI1KTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmp1Z3NfX2l0ZW1zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59XG4uanVnc19faXRlbSB7XG4gIG1heC13aWR0aDogMTUuNjI1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuNjI1cmVtO1xufVxuXG4uaXRlbS1qdWdzX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDA7XG59XG5Ac3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjc3Nzc3Nzc3NzhyZW0gICsgIDEuMTExMTExMTExMXZ3ICwgMS41NjI1cmVtICkpIHtcbiAgLml0ZW0tanVnc19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjc3Nzc3Nzc3NzhyZW0gICsgIDEuMTExMTExMTExMXZ3ICwgMS41NjI1cmVtICk7XG4gIH1cbn1cbkBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjc3Nzc3Nzc3NzhyZW0gICsgIDEuMTExMTExMTExMXZ3ICwgMS41NjI1cmVtICkpIHtcbiAgLml0ZW0tanVnc19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTAuNjI1KTtcbiAgfVxufVxuLml0ZW0tanVnc19fYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDtcbn1cbkBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuNzc3Nzc3Nzc3OHJlbSAgKyAgMS4xMTExMTExMTExdncgLCAxLjU2MjVyZW0gKSkge1xuICAuaXRlbS1qdWdzX19ib2R5IHtcbiAgICBmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC43Nzc3Nzc3Nzc4cmVtICArICAxLjExMTExMTExMTF2dyAsIDEuNTYyNXJlbSApO1xuICB9XG59XG5Ac3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC43Nzc3Nzc3Nzc4cmVtICArICAxLjExMTExMTExMTF2dyAsIDEuNTYyNXJlbSApKSB7XG4gIC5pdGVtLWp1Z3NfX2JvZHkge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTAuNjI1KTtcbiAgfVxufVxuLml0ZW0tanVnc19fYm9keS10b3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTkuOCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjQzNzVyZW0gLCAxLjExNjUxMjM0NTdyZW0gICsgIDEuNjA0OTM4MjcxNnZ3ICwgMi4yNXJlbSApKSB7XG4gIC5pdGVtLWp1Z3NfX2JvZHktdG9wLXBlcmNlbnQge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuNDM3NXJlbSAsIDEuMTE2NTEyMzQ1N3JlbSAgKyAgMS42MDQ5MzgyNzE2dncgLCAyLjI1cmVtICk7XG4gIH1cbn1cbkBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNDM3NXJlbSAsIDEuMTE2NTEyMzQ1N3JlbSAgKyAgMS42MDQ5MzgyNzE2dncgLCAyLjI1cmVtICkpIHtcbiAgLml0ZW0tanVnc19fYm9keS10b3AtcGVyY2VudCB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEuNDM3NXJlbSArIDAuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDUwLjYyNSk7XG4gIH1cbn1cbi5pdGVtLWp1Z3NfX2JvZHktYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDExLjElO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5idXR0b24ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMS41NjI1cmVtO1xuICBwYWRkaW5nOiAwLjYyNXJlbSAxLjU2MjVyZW07XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLmJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbiAgLmJ1dHRvbjpob3ZlciBsaW5lIHtcbiAgICBzdHJva2U6ICMwMDA7XG4gIH1cbn1cbi5idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgc2NhbGUoMS4wMSk7XG59XG4uYnV0dG9uLmdvb2Qge1xuICBhbmltYXRpb246IGFuaW1hdGlvbi1nb29kIDhzIGVhc2U7XG59XG4uYnV0dG9uLmVycm9yIHtcbiAgYW5pbWF0aW9uOiBhbmltYXRpb24tZXJyb3IgOHMgZWFzZTtcbn1cbkBrZXlmcmFtZXMgYW5pbWF0aW9uLWdvb2Qge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4YWIzMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1lcnJvciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMxNjE2O1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2ZvbnRzL2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2ZvbnRzL2ljb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbnVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL2Zvcm1zL2lucHV0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvZm9ybXMvc2VsZWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvZm9ybXMvcmFuZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvaG9tZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxc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QVVsNkJFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtBVm02Qko7QVM1M0JDO0VDNUNDO0lENkNBLHlFQVJlO0VUdTRCZjtBQUNGO0FTNzNCQztFQ2hEQztJRGlEQSx5REFBQTtFVGc0QkE7QUFDRjtBVTE2QkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QVY0NkJKO0FTNTRCQztFQzdCQztJRDhCQSw0RUFSZTtFVHU1QmY7QUFDRjtBUzc0QkM7RUNqQ0M7SURrQ0EsOERBQUE7RVRnNUJBO0FBQ0Y7QVU1NkJFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FWODZCSjtBVXI2QkE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QVZ1NkJGO0FVdDZCRTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGdCQUFBO0VWdzZCSjtFVXY2Qkk7SUFDRSxZQUFBO0VWeTZCTjtBQUNGO0FVdDZCRTtFQUNFLHNDQUFBO0FWdzZCSjtBVXI2QkU7RUFDRSxpQ0FBQTtBVnU2Qko7QVVyNkJFO0VBQ0Usa0NBQUE7QVZ1NkJKO0FVcjZCRTtFQUNFO0lBQ0UseUJBQUE7RVZ1NkJKO0VVcjZCRTtJQUNFLHNCQUFBO0VWdTZCSjtBQUNGO0FVcjZCRTtFQUNFO0lBQ0UseUJBQUE7RVZ1NkJKO0VVcjZCRTtJQUNFLHNCQUFBO0VWdTZCSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxyXFxuXFxyXFxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDQvNC40LrRgdC40L3QvtCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGI0YDQuNGE0YLQvtCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vJmRpc3BsYXk9c3dhcCAtINC00L7QsdCw0LLQuNGC0Ywg0L/RgNC4INC/0L7QtNC60LvRjtGH0LXQvdC40Lgg0YfQtdGA0LXQtyDQv9C70LDQs9C40L1cXHJcXG4vLyZkaXNwbGF5PXN3YXAgLSDQtNC+0LHQsNCy0LjRgtGMINC/0YDQuCDQv9C+0LTQutC70Y7Rh9C10L3QuNC4INGH0LXRgNC10Lcg0L/Qu9Cw0LPQuNC9XFxyXFxuXFxyXFxuLy8g0J/QvtC00LrQu9GO0YfQuNGC0Ywg0LXRgdC70Lgg0LXRgdGC0Ywg0LvQvtC60LDQu9GM0L3Ri9C1INGE0LDQudC70Ysg0YjRgNC40YTRgtC+0LJcXHJcXG5AaW1wb3J0IFxcXCJmb250cy9mb250c1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDQuNC60L7QvdC+0YfQvdGL0YUg0YjRgNC40YTRgtC+0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J/QvtC00LrQu9GO0YfQuNGC0Ywg0LXRgdC70Lgg0LXRgdGC0Ywg0YTQsNC50Lsg0LjQutC+0L3QvtGH0L3QvtCz0L4g0YjRgNC40YTRgtCwXFxyXFxuQGltcG9ydCBcXFwiZm9udHMvaWNvbnNcXFwiO1xcclxcblxcclxcbi8vINCo0YDQuNGE0YIg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuJGZvbnRGYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcclxcbiRmb250U2l6ZTogcmVtKDE0KTsgLy8g0LPQtNC1IDE0KHB4KSAtINGA0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LjQtyDQvNCw0LrQtdGC0LBcXHJcXG5cXHJcXG4vLyDQntGB0L3QvtCy0L3Ri9C1INGG0LLQtdGC0LBcXHJcXG4kbWFpbkNvbG9yOiAjMDAwOyAvLyDQptCy0LXRgiDRiNGA0LjRhNGC0LAg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cXHJcXG5cXHJcXG4vLyDQndCQ0KHQotCg0J7QmdCa0JggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQnNC40L3QuNC80LDQu9GM0L3QsNGPINGI0LjRgNC40L3QsCDRgdGC0YDQsNC90LjRhtGLXFxyXFxuJG1pbldpZHRoOiAzMjA7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC/0L7Qu9C+0YLQvdCwICjQvNCw0LrQtdGC0LApXFxyXFxuJG1heFdpZHRoOiAxOTIwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQvtCz0YDQsNC90LjRh9C40LLQsNGO0YnQtdCz0L4g0LrQvtC90YLQtdC50L3QtdGA0LAgKDAgPSDQvdC10YIg0L7Qs9GA0LDQvdC40YfQtdC90LjRjylcXHJcXG4kbWF4V2lkdGhDb250YWluZXI6IDExMDA7XFxyXFxuLy8g0J7QsdGJ0LjQuSDQvtGC0YHRgtGD0L8g0YMg0LrQvtC90YLQtdC50L3QtdGA0LBcXHJcXG4vLyAoMzAgPSDQv9C+IDE1cHgg0YHQu9C10LLQsCDQuCDRgdC/0YDQsNCy0LAsIDAgPSDQvdC10YIg0L7RgtGB0YLRg9C/0LApXFxyXFxuJGNvbnRhaW5lclBhZGRpbmc6IDMwO1xcclxcblxcclxcbi8vINCo0LjRgNC40L3QsCDRgdGA0LDQsdCw0YLRi9Cy0LDQvdC40Y8g0L/QtdGA0LLQvtCz0L4g0LHRgNC10LnQutC/0L7QuNC90YLQsFxcclxcbiRjb250YWluZXJXaWR0aDogJG1heFdpZHRoQ29udGFpbmVyICsgJGNvbnRhaW5lclBhZGRpbmc7XFxyXFxuXFxyXFxuLy8g0JHRgNC10LnQui3Qv9C+0LjQvdGC0YtcXHJcXG4kcGM6IGVtKFxcclxcbiAgJGNvbnRhaW5lcldpZHRoXFxyXFxuKTsgLy8g0J/Qmiwg0L3QvtGD0YLQsdGD0LrQuCwg0L3QtdC60L7RgtC+0YDRi9C1INC/0LvQsNC90YjQtdGC0Ysg0LIg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvCDQv9C+0LvQvtC20LXQvdC40LhcXHJcXG4kdGFibGV0OiBlbSg5OTEuOTgpOyAvLyDQn9C70LDQvdGI0LXRgtGLLCDQvdC10LrQvtGC0L7RgNGL0LUg0YLQtdC70LXRhNC+0L3RiyDQsiDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC8INC/0L7Qu9C+0LbQtdC90LjQuFxcclxcbiRtb2JpbGU6IGVtKDc2Ny45OCk7IC8vINCi0LXQu9C10YTQvtC90YsgTFxcclxcbiRtb2JpbGVTbWFsbDogZW0oNDc5Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3RiyBTXFxyXFxuXFxyXFxuLy8g0KLQuNC/INCw0LTQsNC/0YLQuNCy0LA6XFxyXFxuLy8gMSA9INC+0YLQt9GL0LLRh9C40LLQvtGB0YLRjCAo0YMg0LrQvtC90YLQtdC50L3QtdGA0LAg0L3QtdGCINCx0YDQtdC50LrQv9C+0LjQvdGC0L7QsiksXFxyXFxuLy8gMiA9INC/0L4g0LHRgNC10LnQui3Qv9C+0LjQvdGC0LDQvCAo0LrQvtC90YLQtdC50L3QtdGAINC80LXQvdGP0LXRgiDRgdCy0L7RjiDRiNC40YDQuNC90YMg0L/QviDQsdGA0LXQudC6LdC/0L7QuNC90YLQsNC8KVxcclxcbiRyZXNwb25zaXZlVHlwZTogMTtcXHJcXG5cXHJcXG4vLyDQntCx0L3Rg9C70LXQvdC40LUg0Lgg0L7QsdGJ0LjQtSDQv9Cw0YDQsNC80LXRgtGA0YsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbnVsbFxcXCI7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmFmMmYyO1xcclxcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluOyAvKiBcXFwiYXV0b1xcXCIg0LjQu9C4IFxcXCJ0aGluXFxcIiAgKi9cXHJcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiKDAsIDAsIDApIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIC8vINCh0LrRgNC+0LvQuyDQt9Cw0LHQu9C+0LrQuNGA0L7QstCw0L1cXHJcXG4gIC5sb2NrICYge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICAvLyDQodCw0LnRgiDQt9Cw0LPRgNGD0LbQtdC9XFxyXFxuICAubG9hZGVkICYge1xcclxcbiAgfVxcclxcbn1cXHJcXG4vLyDQntCx0L7Qu9C+0YfQutCwID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLndyYXBwZXIge1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIC8vINCf0YDQuNC20LjQvNCw0LXQvCBmb290ZXJcXHJcXG4gID4gbWFpbiB7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgfVxcclxcbiAgLy8g0KTQuNC60YEg0LTQu9GPINGB0LvQsNC50LTQtdGA0L7QslxcclxcbiAgPiAqIHtcXHJcXG4gICAgbWluLXdpZHRoOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG4vLyDQntCz0YDQsNC90LjRh9C40LLQsNGO0YnQuNC5INC60L7QvdGC0LXQudC90LXRgCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLypcXHJcXG4oaSkg0KHRgtC40LvQuCDQsdGD0LTRg9GCINC/0YDQuNC80LXQvdGP0YLRjNGB0Y8g0LrQviBcXHJcXG7QstGB0LXQvCDQutC70LDRgdGB0LDQvCDRgdC+0LTQtdGA0LbQsNGJ0LjQvCAqX19jb250YWluZXJcXHJcXG7QndCw0L/RgNC40LzQtdGAIGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0Lgg0YIu0LQuXFxyXFxu0KHQvdC40L/QtdGCIChIVE1MKTogY250XFxyXFxuKi9cXHJcXG5AaWYgKCRyZXNwb25zaXZlVHlwZT09MSkge1xcclxcbiAgLy8g0J7RgtC30YvQstGH0LjQstCw0Y9cXHJcXG4gIFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcbiAgICBAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiByZW0oJG1heFdpZHRoQ29udGFpbmVyKTtcXHJcXG4gICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICBAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG4gICAgICBwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufSBAZWxzZSB7XFxyXFxuICAvLyDQn9C+INCx0YDQtdC50Lot0L/QvtC40L3RgtCw0LxcXHJcXG4gIFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgQGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcbiAgICAgIG1heC13aWR0aDogcmVtKCRtYXhXaWR0aENvbnRhaW5lcik7XFxyXFxuICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIH0gQGVsc2Uge1xcclxcbiAgICAgIEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcbiAgICAgICAgcGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRwYykge1xcclxcbiAgICAgIG1heC13aWR0aDogcmVtKDk3MCk7XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IHJlbSg3NTApO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiBub25lO1xcclxcbiAgICAgIEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCBhbmQgJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0LHQsNC30L7QstGL0YUg0YHRgtC40LvQtdC5LCDRiNCw0LHQu9C+0L3QvtCyICjQt9Cw0LPQvtGC0L7QstC+0LopINC4INCy0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvRhSAg0LrQu9Cw0YHRgdC+0LJcXHJcXG4vLyDQlNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjy/QvtGC0LrQu9GO0YfQtdC90LjRjyDQutC+0L3QutGA0LXRgtC90YvRhSDRgdGC0LjQu9C10Lkg0YHQvNC+0YLRgNC4IGJhc2Uuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2VcXFwiO1xcclxcblxcclxcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHRgtC40LvQtdC5INC+0LHRidC40YUg0Y3Qu9C10LzQtdC90YLQvtCyINC/0YDQvtC10LrRgtCwXFxyXFxuQGltcG9ydCBcXFwiY29tbW9uXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0YLQuNC70LXQuSDQvtGC0LTQtdC70YzQvdGL0YUg0LHQu9C+0LrQvtCyXFxyXFxuQGltcG9ydCBcXFwiaGVhZGVyXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJmb290ZXJcXFwiO1xcclxcblxcclxcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHRgtC40LvQtdC5INC+0YLQtNC10LvRjNC90YvRhSDRgdGC0YDQsNC90LjRhlxcclxcbkBpbXBvcnQgXFxcImhvbWVcXFwiO1xcclxcblwiLFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOlxcbiAgICB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1CbGFjay53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tQmxhY2sud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOlxcbiAgICB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1Cb2xkLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1Cb2xkLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzpcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tRXh0cmFCb2xkLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1FeHRyYUJvbGQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOlxcbiAgICB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1FeHRyYUxpZ2h0LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1FeHRyYUxpZ2h0LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzpcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tTGlnaHQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi4vZm9udHMvUm9ib3RvLUxpZ2h0LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzpcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tTWVkaXVtLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1NZWRpdW0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOlxcbiAgICB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1SZWd1bGFyLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2ZvbnRzL1JvYm90by1SZWd1bGFyLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzpcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tU2VtaUJvbGQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi4vZm9udHMvUm9ib3RvLVNlbWlCb2xkLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzpcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tVGhpbi53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9mb250cy9Sb2JvdG8tVGhpbi53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cIixcIiVpYyB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJpY29uc1xcXCI7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuXFx0Zm9udC12YXJpYW50OiBub3JtYWw7XFxyXFxuXFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuW2NsYXNzKj1cXFwiaWNvbi1cXFwiXSB7XFxyXFxuXFx0JjpiZWZvcmUge1xcclxcblxcdFxcdEBleHRlbmQgJWljO1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIqIHtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxuXFx0Ym9yZGVyOiAwcHg7XFxyXFxufVxcclxcbiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOmZvY3VzLFxcclxcbjphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmE6Zm9jdXMsXFxyXFxuYTphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG1pbi13aWR0aDogJG1pbldpZHRoICsgcHg7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGNvbG9yOiAkbWFpbkNvbG9yO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6ICRmb250U2l6ZTtcXHJcXG5cXHQvL3RleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuXFx0LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEge1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcbmEge1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5hOmxpbmssXFxyXFxuYTp2aXNpdGVkIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbmE6aG92ZXIge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxudWwgbGkge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmltZyB7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXCIsXCIvLzxJTlBVVD5cXHJcXG4vLyDQodC90LjQv9C10YIgKEhUTUwpOiBpbnBcXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXSxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG4uaW5wdXQge1xcclxcbiAgZm9udC1zaXplOiByZW0oMTQpO1xcclxcblxcclxcbiAgYm9yZGVyOiByZW0oMikgc29saWQgIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHJlbSgxNSk7XFxyXFxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDhweCAxMXB4O1xcclxcbiAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcXHJcXG4gIH1cXHJcXG4gICYuX2Zvcm0tZm9jdXMge1xcclxcbiAgfVxcclxcbiAgJi5fZm9ybS1lcnJvciB7XFxyXFxuICB9XFxyXFxufVxcclxcbnRleHRhcmVhLmlucHV0IHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDBweCAwcHg7XFxyXFxufVxcclxcblwiLFwiLy8gPFNFTEVDVD5cXHJcXG4vLyDQodC90LjQv9C10YIgKEhUTUwpOiBzZWxcXHJcXG4uc2VsZWN0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIC8vIC5zZWxlY3RfX2JvZHlcXHJcXG4gICZfX2JvZHkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuICAvLyAuc2VsZWN0X190aXRsZVxcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICB9XFxyXFxuICAvLyAuc2VsZWN0X192YWx1ZVxcclxcbiAgJl9fdmFsdWUge1xcclxcbiAgICBmb250LXNpemU6IHJlbSgxNCk7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgICBib3JkZXI6IHJlbSgyKSBzb2xpZCAjMDAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiByZW0oMTUpO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTFweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiByZW0oMzApO1xcclxcbiAgICBnYXA6IHJlbSgxMCk7XFxyXFxuICAgID4gKiB7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogcmVtKDE1KTtcXHJcXG4gICAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAmOmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwiPlxcXCI7XFxyXFxuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG4gICAgICBmbGV4OiAwIDAgMTBweDtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICAgICAgLl9zZWxlY3Qtb3BlbiAmIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICYuX3NlbGVjdC1wc2V1ZG8tbGFiZWwge1xcclxcbiAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtcHNldWRvLWxhYmVsKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC8vIC5zZWxlY3RfX3RleHRcXHJcXG4gICZfX3RleHQge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIH1cXHJcXG4gICZfX2lucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAvLyAuc2VsZWN0X19vcHRpb25zXFxyXFxuICAmX19vcHRpb25zIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVjY2NjO1xcclxcbiAgICBib3JkZXItdG9wOiAwO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgICBib3JkZXItdG9wOiAwO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDBweCA1cHggMHB4O1xcclxcbiAgfVxcclxcbiAgLy8gLnNlbGVjdF9fc2Nyb2xsXFxyXFxuICAmX19zY3JvbGwge1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIC8vINCc0LDQutGB0LjQvNCw0LvRjNC90LDRjyDQstGL0YHQvtGC0LBcXHJcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICAgIC8vINCh0YLQuNC70Lgg0YHQutGA0L7Qu9C70LHQsNGA0LBcXHJcXG4gICAgLnNpbXBsZWJhci1zY3JvbGxiYXIge1xcclxcbiAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAvL29wYWNpdHk6IDE7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAvLyAuc2VsZWN0X19vcHRpb25cXHJcXG4gICZfX29wdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgJi5fc2VsZWN0LXNlbGVjdGVkIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vINCa0L7QvdGB0YLRgNGD0LrRhtC40Y8g0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvRhSDQtNCw0L3QvdGL0YVcXHJcXG4gICZfX3JvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgJl9fYXNzZXQge1xcclxcbiAgfVxcclxcbiAgJl9fdGV4dCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyDQodC+0YHRgtC+0Y/QvdC40Y8g0YHQtdC70LXQutGC0LBcXHJcXG4gICYuX3NlbGVjdC1vcGVuIHtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG4gIH1cXHJcXG4gICYuX3NlbGVjdC1kaXNhYmxlZCB7XFxyXFxuICB9XFxyXFxuICAmLl9zZWxlY3QtYWN0aXZlIHtcXHJcXG4gIH1cXHJcXG4gICYuX3NlbGVjdC1mb2N1cyB7XFxyXFxuICB9XFxyXFxuICAmLl9zZWxlY3QtbXVsdGlwbGUge1xcclxcbiAgfVxcclxcbiAgJi5fc2VsZWN0LWNoZWNrYm94IHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0KLQtdCzXFxyXFxuLl9zZWxlY3QtdGFnIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCIsXCIvKiBGdW5jdGlvbmFsIHN0eWxpbmc7XFxuICogVGhlc2Ugc3R5bGVzIGFyZSByZXF1aXJlZCBmb3Igbm9VaVNsaWRlciB0byBmdW5jdGlvbi5cXG4gKiBZb3UgZG9uJ3QgbmVlZCB0byBjaGFuZ2UgdGhlc2UgcnVsZXMgdG8gYXBwbHkgeW91ciBkZXNpZ24uXFxuICovXFxuLm5vVWktdGFyZ2V0LFxcbi5ub1VpLXRhcmdldCAqIHtcXG5cXHQtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuXFx0LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcXG5cXHR0b3VjaC1hY3Rpb246IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXRhcmdldCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubm9VaS1iYXNlLFxcbi5ub1VpLWNvbm5lY3RzIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IDE7XFxufVxcbi8qIFdyYXBwZXIgZm9yIGFsbCBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLWNvbm5lY3RzIHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHotaW5kZXg6IDA7XFxufVxcbi5ub1VpLWNvbm5lY3QsXFxuLm5vVWktb3JpZ2luIHtcXG5cXHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR6LWluZGV4OiAxO1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcblxcdHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcXG59XFxuLyogT2Zmc2V0IGRpcmVjdGlvblxcbiAqL1xcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IGF1dG87XFxufVxcbi8qIEdpdmUgb3JpZ2lucyAwIGhlaWdodC93aWR0aCBzbyB0aGV5IGRvbid0IGludGVyZmVyZSB3aXRoIGNsaWNraW5nIHRoZVxcbiAqIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luIHtcXG5cXHR0b3A6IC0xMDAlO1xcblxcdHdpZHRoOiAwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuXFx0aGVpZ2h0OiAwO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcblxcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5ub1VpLXRvdWNoLWFyZWEge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLWNvbm5lY3QsXFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLW9yaWdpbiB7XFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcbi5ub1VpLXN0YXRlLWRyYWcgKiB7XFxuXFx0Y3Vyc29yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxufVxcbi8qIFNsaWRlciBzaXplIGFuZCBoYW5kbGUgcGxhY2VtZW50O1xcbiAqL1xcbi5ub1VpLWhvcml6b250YWwge1xcblxcdGhlaWdodDogMThweDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcblxcdHdpZHRoOiAzNHB4O1xcblxcdGhlaWdodDogMjhweDtcXG5cXHRyaWdodDogLTE3cHg7XFxuXFx0dG9wOiAtNnB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCB7XFxuXFx0d2lkdGg6IDE4cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZSB7XFxuXFx0d2lkdGg6IDI4cHg7XFxuXFx0aGVpZ2h0OiAzNHB4O1xcblxcdHJpZ2h0OiAtNnB4O1xcblxcdGJvdHRvbTogLTE3cHg7XFxufVxcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcblxcdGxlZnQ6IC0xN3B4O1xcblxcdHJpZ2h0OiBhdXRvO1xcbn1cXG4vKiBTdHlsaW5nO1xcbiAqIEdpdmluZyB0aGUgY29ubmVjdCBlbGVtZW50IGEgYm9yZGVyIHJhZGl1cyBjYXVzZXMgaXNzdWVzIHdpdGggdXNpbmcgdHJhbnNmb3JtOiBzY2FsZVxcbiAqL1xcbi5ub1VpLXRhcmdldCB7XFxuXFx0YmFja2dyb3VuZDogI2ZhZmFmYTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2QzZDNkMztcXG5cXHRib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI2YwZjBmMCwgMCAzcHggNnB4IC01cHggI2JiYjtcXG59XFxuLm5vVWktY29ubmVjdHMge1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLm5vVWktY29ubmVjdCB7XFxuXFx0YmFja2dyb3VuZDogIzNmYjhhZjtcXG59XFxuLyogSGFuZGxlcyBhbmQgY3Vyc29ycztcXG4gKi9cXG4ubm9VaS1kcmFnZ2FibGUge1xcblxcdGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1kcmFnZ2FibGUge1xcblxcdGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0Y3Vyc29yOiBkZWZhdWx0O1xcblxcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI2ZmZiwgaW5zZXQgMCAxcHggN3B4ICNlYmViZWIsIDAgM3B4IDZweCAtM3B4ICNiYmI7XFxufVxcbi5ub1VpLWFjdGl2ZSB7XFxuXFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmLCBpbnNldCAwIDFweCA3cHggI2RkZCwgMCAzcHggNnB4IC0zcHggI2JiYjtcXG59XFxuLyogSGFuZGxlIHN0cmlwZXM7XFxuICovXFxuLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRoZWlnaHQ6IDE0cHg7XFxuXFx0d2lkdGg6IDFweDtcXG5cXHRiYWNrZ3JvdW5kOiAjZThlN2U2O1xcblxcdGxlZnQ6IDE0cHg7XFxuXFx0dG9wOiA2cHg7XFxufVxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuXFx0bGVmdDogMTdweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcblxcdHdpZHRoOiAxNHB4O1xcblxcdGhlaWdodDogMXB4O1xcblxcdGxlZnQ6IDZweDtcXG5cXHR0b3A6IDE0cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuXFx0dG9wOiAxN3B4O1xcbn1cXG4vKiBEaXNhYmxlZCBzdGF0ZTtcXG4gKi9cXG5bZGlzYWJsZWRdIC5ub1VpLWNvbm5lY3Qge1xcblxcdGJhY2tncm91bmQ6ICNiOGI4Yjg7XFxufVxcbltkaXNhYmxlZF0ubm9VaS10YXJnZXQsXFxuW2Rpc2FibGVkXS5ub1VpLWhhbmRsZSxcXG5bZGlzYWJsZWRdIC5ub1VpLWhhbmRsZSB7XFxuXFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLyogQmFzZTtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMsXFxuLm5vVWktcGlwcyAqIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubm9VaS1waXBzIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Y29sb3I6ICM5OTk7XFxufVxcbi8qIFZhbHVlcztcXG4gKlxcbiAqL1xcbi5ub1VpLXZhbHVlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ub1VpLXZhbHVlLXN1YiB7XFxuXFx0Y29sb3I6ICNjY2M7XFxuXFx0Zm9udC1zaXplOiAxMHB4O1xcbn1cXG4vKiBNYXJraW5ncztcXG4gKlxcbiAqL1xcbi5ub1VpLW1hcmtlciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJhY2tncm91bmQ6ICNjY2M7XFxufVxcbi5ub1VpLW1hcmtlci1zdWIge1xcblxcdGJhY2tncm91bmQ6ICNhYWE7XFxufVxcbi5ub1VpLW1hcmtlci1sYXJnZSB7XFxuXFx0YmFja2dyb3VuZDogI2FhYTtcXG59XFxuLyogSG9yaXpvbnRhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLWhvcml6b250YWwge1xcblxcdHBhZGRpbmc6IDEwcHggMDtcXG5cXHRoZWlnaHQ6IDgwcHg7XFxuXFx0dG9wOiAxMDAlO1xcblxcdGxlZnQ6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbi5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxufVxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyIHtcXG5cXHRtYXJnaW4tbGVmdDogLTFweDtcXG5cXHR3aWR0aDogMnB4O1xcblxcdGhlaWdodDogNXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1zdWIge1xcblxcdGhlaWdodDogMTBweDtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcblxcdGhlaWdodDogMTVweDtcXG59XFxuLyogVmVydGljYWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy12ZXJ0aWNhbCB7XFxuXFx0cGFkZGluZzogMCAxMHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtdmVydGljYWwge1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcblxcdHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXIge1xcblxcdHdpZHRoOiA1cHg7XFxuXFx0aGVpZ2h0OiAycHg7XFxuXFx0bWFyZ2luLXRvcDogLTFweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLXN1YiB7XFxuXFx0d2lkdGg6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuXFx0d2lkdGg6IDE1cHg7XFxufVxcbi5ub1VpLXRvb2x0aXAge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdGNvbG9yOiAjMDAwO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS10b29sdGlwIHtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0Ym90dG9tOiAxMjAlO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS10b29sdGlwIHtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRyaWdodDogMTIwJTtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xcblxcdGxlZnQ6IGF1dG87XFxuXFx0Ym90dG9tOiAxMHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMThweCk7XFxuXFx0dG9wOiBhdXRvO1xcblxcdHJpZ2h0OiAyOHB4O1xcbn1cXG5cIixcIi8vINCe0LHRidC40Lkg0YTQsNC50Lsg0Y3Qu9C10LzQtdC90YLQvtCyINGE0L7RgNC8XFxyXFxuLy8g0JTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8v0L7RgtC60LvRjtGH0LXQvdC40Y8g0YHRgtC40LvQtdC5INC60L7QvdC60YDQtdGC0L3QvtCz0L4g0ZTQu9C10LzQtdC90YLQsCDRhNC+0YDQvNGLINGB0LzQvtGC0YDQuCBiYXNlL2Zvcm1zL2Zvcm1zLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlL2Zvcm1zL2Zvcm1zXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9C4INC/0L7Qv9Cw0L/QvtCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9wb3B1cFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvQuCDRgdC/0L7QudC70LXRgNC+0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nwb2xsZXJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9C4INGC0LDQsdC+0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3RhYnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70Lgg0LrQsNGA0YJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL21hcHNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70Lgg0LHQu9C+0LrQsCBcXFwi0L/QvtC60LDQt9Cw0YLRjCDQtdGJ0LVcXFwiXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zaG93bW9yZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvQuCDQtNC70Y8g0L/QvtC70L3QvtGN0LrRgNCw0L3QvdC+0LPQviDQsdC70L7QutCwXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxsc2NyZWVuXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9C4INC00LvRjyDQu9C40L/QutC+0LPQviDQsdC70L7QutCwXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zdGlja3lcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70Lgg0LTQu9GPINC+0YLQt9GL0LLRh9C40LLRi9GFINC60LDRgNGC0LjQvdC+0LogKElCRylcXHJcXG4vLyDQodC90LjQv9C/0LXRgiAoSFRNTCk6IGliZyAoZGl2IGMg0LrQsNGA0YLQuNC90LrQvtC5INC4INC60LvQsNGB0YHQsNC80LgpXFxyXFxuLy8g0KHQvdC40L/Qv9C10YIgKEhUTUwpOiBpYmdhIChhIGMg0LrQsNGA0YLQuNC90LrQvtC5INC4INC60LvQsNGB0YHQsNC80LgpXFxyXFxuW2NsYXNzKj1cXFwiLWliZ1xcXCJdIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuW2NsYXNzKj1cXFwiLWliZ19jb250YWluXFxcIl0ge1xcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCo0LDQsdC70L7QvdGLICjQt9Cw0LPQvtGC0L7QstC60LgpXFxyXFxuLy8gQGV4dGVuZCAl0LjQvNGPINGI0LDQsdC70L7QvdCwO1xcclxcbi8vINCh0L3QuNC/0L/QtdGCIChTQ1NTKTogZXhcXHJcXG5cXHJcXG4vLyDQodGH0LXRgtGH0LjQuiDQtNC70Y8g0YHQv9C40YHQutCwXFxyXFxuJWxpc3RDb3VudGVyIHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0Y291bnRlci1yZXNldDogaXRlbTtcXHJcXG5cXHRsaSB7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdCY6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRjb3VudGVyLWluY3JlbWVudDogaXRlbTtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBjb3VudGVyKGl0ZW0pO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90L7QtSDQstC40LTQtdC+XFxyXFxuJXJlc3BvbnNpdmVWaWRlbyB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XFxyXFxuXFx0dmlkZW8sXFxyXFxuXFx0aWZyYW1lLFxcclxcblxcdG9iamVjdCxcXHJcXG5cXHRlbWJlZCB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCS0LjQtNC10L4g0LIg0LrQsNGH0LXRgdGC0LLQtSDRhNC+0L3QsFxcclxcbiV2aWRlb0JhY2tncm91bmQge1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdHotaW5kZXg6IC0xMDA7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0LXRgNGL0Lkg0YTQuNC70YzRgtGAXFxyXFxuJWdyYXlmaWx0ZXIge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxyXFxuXFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0J7RgtC80LXQvdC40YLRjCDQstGL0LTQtdC70LXQvdC40LVcXHJcXG4lbm9zZWxlY3Qge1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4vLyDQl9C10YDQutCw0LvRjNC90L7QtSDQvtGC0L7QsdGA0LDQttC10L3QuNC1XFxyXFxuJW1pcnJvciB7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxyXFxufVxcclxcbi8vINCf0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQu1xcclxcbiVzbW9vdGhzY3JvbGwge1xcclxcblxcdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG59XFxyXFxuLy8g0KHQutGA0YvRgtGMINGB0LrRgNC+0LvQu1xcclxcbiVoaWRlc2Nyb2xsIHtcXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhlYWRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xcclxcbiAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiByZW0oNDgpO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiByZW0oMjUpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fYWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiByZW0oMTApO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbWVudSB7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNZW51ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4ubWVudSB7XFxyXFxuICAmX19pY29uIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2JvZHkge1xcclxcbiAgICAvLyBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbGlzdCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm1lbnUtb3BlbiB7XFxyXFxuICAuc2V0dGluZyB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubW9uZXktb3BlbiB7XFxyXFxuICAubW9uZXktZW50cnkge1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLnNldHRpbmcsXFxyXFxuLm1vbmV5LWVudHJ5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6ICNkNWNjY2M7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbiAgcmlnaHQ6IC05MDBweDtcXHJcXG4gIC8vIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbWF4LXdpZHRoOiA0NzhweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogcmVtKDEwKSByZW0oMjApIHJlbSg0MCk7XFxyXFxuICB6LWluZGV4OiA0O1xcclxcblxcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxuICBzY3JvbGxiYXItY29sb3I6IGhzbCgwIDAlIDUwJSk7XFxyXFxuXFxyXFxuICAmX190b3Age1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogcmVtKDEwKTtcXHJcXG5cXHJcXG4gICAgc3BhbixcXHJcXG4gICAgJjo6YmVmb3JlLFxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gICAgICByaWdodDogMDtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiByZW0oMik7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgfVxcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICB3aWR0aDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgIHRvcDogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIGJvdHRvbTogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAzMCwgMjApO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xpc3Qge1xcclxcbiAgICBtYXJnaW4tdG9wOiByZW0oMjUpO1xcclxcbiAgICBtYXgtd2lkdGg6IDYwLjglO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbSB7XFxyXFxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogcmVtKDE4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogcmVtKDIwKTtcXHJcXG4gICAgbWF4LXdpZHRoOiA2MC44JTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiByZW0oMTApO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubW9uZXktZW50cnkge1xcclxcbiAgei1pbmRleDogNjtcXHJcXG59XFxyXFxuLml0ZW0tc2V0dGluZyxcXHJcXG4uaXRlbS1tb25leS1lbnRyeSB7XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI1LCAxNik7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fc2xpZGVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogcmVtKDExKTtcXHJcXG4gICAgJi5ub1VpLWhvcml6b250YWwge1xcclxcbiAgICAgIGhlaWdodDogN3B4O1xcclxcbiAgICB9XFxyXFxuICAgICYubm9VaS10YXJnZXQge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIH1cXHJcXG4gICAgJi5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXHJcXG4gICAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgICByaWdodDogLTE3cHg7XFxyXFxuICAgICAgdG9wOiAtOXB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAmLm5vVWktY29ubmVjdCB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjAzO1xcclxcbiAgICB9XFxyXFxuICAgICYgLm5vVWktY29ubmVjdCB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gICAgfVxcclxcbiAgICAmIC5ub1VpLWhhbmRsZTpiZWZvcmUsXFxyXFxuICAgICYgLm5vVWktaGFuZGxlOmFmdGVyIHtcXHJcXG4gICAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gICAgICBsZWZ0OiAzcHg7XFxyXFxuICAgICAgdG9wOiAzcHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJiAuc2VsZWN0LFxcclxcbiAgJl9faW5wdXQge1xcclxcbiAgICBtYXJnaW4tdG9wOiByZW0oMTApO1xcclxcbiAgfVxcclxcbiAgJl9fYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogcmVtKDE1KTtcXHJcXG4gIH1cXHJcXG4gICZfX3ZhbHVlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogcmVtKDEyKTtcXHJcXG4gICAgZm9udC1zaXplOiByZW0oMTMpO1xcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICBmb250LXNpemU6IHJlbSgxNik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy9CdXJnZXJcXHJcXG4uaWNvbi1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHJlbSgzMCk7XFxyXFxuICBoZWlnaHQ6IHJlbSgxOCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB6LWluZGV4OiA1O1xcclxcbiAgc3BhbixcXHJcXG4gICY6OmJlZm9yZSxcXHJcXG4gICY6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IHJlbSgyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG4gICY6OmJlZm9yZSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gIH1cXHJcXG4gICY6OmFmdGVyIHtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgfVxcclxcbiAgc3BhbiB7XFxyXFxuICAgIHRvcDogY2FsYyg1MCUgLSByZW0oMSkpO1xcclxcbiAgfVxcclxcbiAgLm1lbnUtb3BlbiAmIHtcXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgd2lkdGg6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YmVmb3JlLFxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICB0b3A6IGNhbGMoNTAlIC0gcmVtKDEpKTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICBib3R0b206IGNhbGMoNTAlIC0gcmVtKDEpKTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbW9uZXkge1xcclxcbiAgc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogcmVtKDM0LjcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi8v0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRiNGA0LjRhNGC0LBcXHJcXG5AbWl4aW4gZm9udCgkZm9udF9uYW1lLCAkZmlsZV9uYW1lLCAkd2VpZ2h0LCAkc3R5bGUpIHtcXHJcXG5cXHRAZm9udC1mYWNlIHtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJGZvbnRfbmFtZTtcXHJcXG5cXHRcXHRmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuXFx0XFx0c3JjOiB1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiLi4vZm9udHMvI3skZmlsZV9uYW1lfS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6ICN7JHdlaWdodH07XFxyXFxuXFx0XFx0Zm9udC1zdHlsZTogI3skc3R5bGV9O1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy9QZXJjZW50XFxyXFxuQGZ1bmN0aW9uIHBlcmNlbnQoJHB4LCAkZnJvbSkge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGZyb20pICogMTAwJTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vUkVNXFxyXFxuQGZ1bmN0aW9uIHJlbSgkcHgpIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsIDE2KSArIHJlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vRU1cXHJcXG5AZnVuY3Rpb24gZW0oJHB4LCAkY3VycmVudDogMTYpIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRjdXJyZW50KSArIGVtO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy/QkNC00LDQv9GC0LjQstC90L7QtSDRgdCy0L7QudGB0YLQstC+XFxyXFxuXFxyXFxuLy9DdXJyZW5jeVxcclxcbkBtaXhpbiBjdXJyZW5jeSgkc3ltKSB7XFxyXFxuXFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdGNvbnRlbnQ6IFxcXCIjeyRzeW19XFxcIjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vIEdyaWRzXFxyXFxuQG1peGluIGdyaWRDYXJkcygkdHlwZTogZml0LCAkbWluOiAyODBweCwgJG1heDogMWZyLCAkZ2FwOiAzMHB4KSB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRnYXA6ICRnYXA7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by0jeyR0eXBlfSwgbWlubWF4KCRtaW4sICRtYXgpKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdC+0LUg0YHQstC+0LnRgdGC0LLQviAoY2xhbXApXFxyXFxuQG1peGluIGFkYXB0aXZlVmFsdWUoJHByb3BlcnR5LCAkc3RhcnRTaXplLCAkbWluU2l6ZSwgJHdpZHRoRnJvbTogJGNvbnRhaW5lcldpZHRoLCAkd2lkdGhUbzogJG1pbldpZHRoLCAka2VlcFNpemU6IDApIHtcXHJcXG5cXHRAaWYgKCRzdGFydFNpemU9PTApIHtcXHJcXG5cXHRcXHQkc3RhcnRTaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0QGlmICgkbWluU2l6ZT09MCkge1xcclxcblxcdFxcdCRtaW5TaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JTQu9GPIGNhbGMoKTtcXHJcXG5cXHQkYWRkU2l6ZTogbWF0aC5kaXYoJHN0YXJ0U2l6ZSAtICRtaW5TaXplLCAxNik7XFxyXFxuXFxyXFxuXFx0QGlmICgkd2lkdGhGcm9tID09ICRjb250YWluZXJXaWR0aCBhbmQgJG1heFdpZHRoQ29udGFpbmVyID09IDApIHtcXHJcXG5cXHRcXHQkd2lkdGhGcm9tOiAkbWF4V2lkdGg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCR0YDQtdC50Lot0L/QvtC40L3RgtGLINCyIEVNXFxyXFxuXFx0JHdpZHRoRnJvbU1lZGlhOiBlbSgkd2lkdGhGcm9tKTtcXHJcXG5cXHQkd2lkdGhUb01lZGlhOiBlbSgkd2lkdGhUbyk7XFxyXFxuXFxyXFxuXFx0Ly8g0KTQvtGA0LzRg9C70LAg0L/Qu9Cw0LLQsNGO0YnQtdCz0L4g0LfQvdCw0YfQtdC90LjRj1xcclxcblxcdC8vINCY0YHRgtC+0YfQvdC40Lo6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vbGluZWFybHktc2NhbGUtZm9udC1zaXplLXdpdGgtY3NzLWNsYW1wLWJhc2VkLW9uLXRoZS12aWV3cG9ydC9cXHJcXG5cXHQkc2xvcGU6IG1hdGguZGl2KCgkc3RhcnRTaXplIC0gJG1pblNpemUpLCAoJHdpZHRoRnJvbSAtICR3aWR0aFRvKSk7XFxyXFxuXFx0JHlJbnRlcnNlY3Rpb246IC0kd2lkdGhUbyAqICRzbG9wZSArICRtaW5TaXplO1xcclxcblxcdEBpZiAoJHlJbnRlcnNlY3Rpb249PTApIHtcXHJcXG5cXHRcXHQkeUludGVyc2VjdGlvbjogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdCRmbHlWYWx1ZTogI3tyZW0oJHlJbnRlcnNlY3Rpb24pfVxcXCIgKyBcXFwiICN7JHNsb3BlICogMTAwfXZ3O1xcclxcblxcclxcblxcdC8vINCf0L7Qu9GD0YfQtdC90LjQtSDQt9C90LDRh9C10L3QuNGPINGB0LLQvtC50YHRgtCy0LBcXHJcXG5cXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiByZW0oJG1pblNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdC8vINCV0YHQu9C4INC+0YLRgNC40YbQsNGC0LXQu9GM0L3Ri9C1INC30L3QsNGH0LXQvdC40Y9cXHJcXG5cXHRAaWYgKCRtaW5TaXplID4gJHN0YXJ0U2l6ZSkge1xcclxcblxcdFxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiByZW0oJG1pblNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCV0YHQu9C4INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRAc3VwcG9ydHMgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHQjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQldGB0LvQuCDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRAc3VwcG9ydHMgbm90ICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0I3skcHJvcGVydHl9OiBjYWxjKCN7cmVtKCRtaW5TaXplKX0gKyAjeyRhZGRTaXplfSAqICgxMDB2dyAtICN7cmVtKCR3aWR0aFRvKX0pIC8gI3ttYXRoLmRpdigkd2lkdGhGcm9tLCAxNikgLSBtYXRoLmRpdigkd2lkdGhUbywgMTYpfSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC30L3QsNGH0LXQvdC40Y8g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cXHJcXG5cXHRAaWYgJHdpZHRoRnJvbSAhPSAkY29udGFpbmVyV2lkdGggYW5kICR3aWR0aEZyb20gIT0gJG1heFdpZHRoIGFuZCAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDIge1xcclxcblxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IGluaGVyaXQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRAaWYgJHdpZHRoVG8gIT0gJG1pbldpZHRoIGFuZCAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDMge1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkd2lkdGhUb01lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiBpbmhlcml0O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgJl9fanVncyB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5qdWdzIHtcXHJcXG4gIG1hcmdpbi10b3A6IHJlbSgxNyk7XFxyXFxuICAmX19pdGVtcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDQzLCAxMCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICAgbWF4LXdpZHRoOiByZW0oMjUwKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiByZW0oMTApO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uaXRlbS1qdWdzIHtcXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjUsIDE2KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2JvZHkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI1LCAxNik7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19ib2R5LXRvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxOS44JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19ib2R5LXRvcC1wZXJjZW50IHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMzYsIDIzKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2JvZHktdG9wLW1vbmV5IHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2JvZHktYm90dG9tIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDExLjElO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2JvZHktYm90dG9tLXRleHQge1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fYm9keS1ib3R0b20tbW9uZXkge1xcclxcbiAgfVxcclxcbn1cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogcmVtKDE0KTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHJlbSgyNSk7XFxyXFxuICBwYWRkaW5nOiByZW0oMTApIHJlbSgyNSk7XFxyXFxuICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgbGluZSB7XFxyXFxuICAgICAgICBzdHJva2U6ICMwMDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHNjYWxlKDEuMDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5nb29kIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb24tZ29vZCA4cyBlYXNlO1xcclxcbiAgfVxcclxcbiAgJi5lcnJvciB7XFxyXFxuICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLWVycm9yIDhzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIGFuaW1hdGlvbi1nb29kIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOGFiMzA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBhbmltYXRpb24tZXJyb3Ige1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzMTYxNjtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5OTE1ZWRjZjIwMDIxNGU3NTA3MlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==