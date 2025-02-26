"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/files/forms/range.js":
/*!*************************************!*\
  !*** ./src/js/files/forms/range.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rangeInit: () => (/* binding */ rangeInit)
/* harmony export */ });
/* harmony import */ var gulp_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gulp-util */ "./node_modules/gulp-util/index.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");
// Подключение из node_modules



// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import "nouislider/dist/nouislider.css";

function rangeInit() {
  const settingSlidersWrapper = document.querySelectorAll(".item-setting");
  settingSlidersWrapper.forEach((settingSliderWrapper) => {
    let settingSlider = settingSliderWrapper.querySelector(
      ".item-setting__slider"
    );
    nouislider__WEBPACK_IMPORTED_MODULE_1__.create(settingSlider, {
      start: [0],
      step: 5,
      range: {
        min: [0],
        max: [100],
      },
    });
    let settingSliderValue = settingSliderWrapper.querySelector(
      ".item-setting__value span"
    );
    settingSlider.noUiSlider.on("update", function (values, handle) {
      settingSliderValue.innerHTML = values[handle];
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  rangeInit();
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("efb3e13e1855a815c7ee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MTZiNzYzNTc0YTU2NjVkNTdjOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dDO0FBQ1M7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7VUNsQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvZm9ybXMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INC40Lcgbm9kZV9tb2R1bGVzXHJcbmltcG9ydCB7IGxvZyB9IGZyb20gXCJndWxwLXV0aWxcIjtcclxuaW1wb3J0ICogYXMgbm9VaVNsaWRlciBmcm9tIFwibm91aXNsaWRlclwiO1xyXG5cclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRgdGC0LjQu9C10Lkg0LjQtyBzY3NzL2Jhc2UvZm9ybXMvcmFuZ2Uuc2Nzc1xyXG4vLyDQsiDRhNCw0LnQu9C1IHNjc3MvZm9ybXMvZm9ybXMuc2Nzc1xyXG5cclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSBj0YLQuNC70LXQuSDQuNC3IG5vZGVfbW9kdWxlc1xyXG4vLyBpbXBvcnQgXCJub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZUluaXQoKSB7XHJcbiAgY29uc3Qgc2V0dGluZ1NsaWRlcnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLXNldHRpbmdcIik7XHJcbiAgc2V0dGluZ1NsaWRlcnNXcmFwcGVyLmZvckVhY2goKHNldHRpbmdTbGlkZXJXcmFwcGVyKSA9PiB7XHJcbiAgICBsZXQgc2V0dGluZ1NsaWRlciA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICk7XHJcbiAgICBub1VpU2xpZGVyLmNyZWF0ZShzZXR0aW5nU2xpZGVyLCB7XHJcbiAgICAgIHN0YXJ0OiBbMF0sXHJcbiAgICAgIHN0ZXA6IDUsXHJcbiAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgbWluOiBbMF0sXHJcbiAgICAgICAgbWF4OiBbMTAwXSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgbGV0IHNldHRpbmdTbGlkZXJWYWx1ZSA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLml0ZW0tc2V0dGluZ19fdmFsdWUgc3BhblwiXHJcbiAgICApO1xyXG4gICAgc2V0dGluZ1NsaWRlci5ub1VpU2xpZGVyLm9uKFwidXBkYXRlXCIsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gICAgICBzZXR0aW5nU2xpZGVyVmFsdWUuaW5uZXJIVE1MID0gdmFsdWVzW2hhbmRsZV07XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgcmFuZ2VJbml0KCk7XHJcbn0pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlZmIzZTEzZTE4NTVhODE1YzdlZVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==