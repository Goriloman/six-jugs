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
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");
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
    nouislider__WEBPACK_IMPORTED_MODULE_0__.create(settingSlider, {
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
/******/ 	__webpack_require__.h = () => ("6eb8a6459c2c44651dfc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lZmIzZTEzZTE4NTVhODE1YzdlZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7VUNqQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvZm9ybXMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INC40Lcgbm9kZV9tb2R1bGVzXHJcbmltcG9ydCAqIGFzIG5vVWlTbGlkZXIgZnJvbSBcIm5vdWlzbGlkZXJcIjtcclxuXHJcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHRgtC40LvQtdC5INC40Lcgc2Nzcy9iYXNlL2Zvcm1zL3JhbmdlLnNjc3NcclxuLy8g0LIg0YTQsNC50LvQtSBzY3NzL2Zvcm1zL2Zvcm1zLnNjc3NcclxuXHJcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUgY9GC0LjQu9C10Lkg0LjQtyBub2RlX21vZHVsZXNcclxuLy8gaW1wb3J0IFwibm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VJbml0KCkge1xyXG4gIGNvbnN0IHNldHRpbmdTbGlkZXJzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1zZXR0aW5nXCIpO1xyXG4gIHNldHRpbmdTbGlkZXJzV3JhcHBlci5mb3JFYWNoKChzZXR0aW5nU2xpZGVyV3JhcHBlcikgPT4ge1xyXG4gICAgbGV0IHNldHRpbmdTbGlkZXIgPSBzZXR0aW5nU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiXHJcbiAgICApO1xyXG4gICAgbm9VaVNsaWRlci5jcmVhdGUoc2V0dGluZ1NsaWRlciwge1xyXG4gICAgICBzdGFydDogWzBdLFxyXG4gICAgICBzdGVwOiA1LFxyXG4gICAgICByYW5nZToge1xyXG4gICAgICAgIG1pbjogWzBdLFxyXG4gICAgICAgIG1heDogWzEwMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGxldCBzZXR0aW5nU2xpZGVyVmFsdWUgPSBzZXR0aW5nU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5pdGVtLXNldHRpbmdfX3ZhbHVlIHNwYW5cIlxyXG4gICAgKTtcclxuICAgIHNldHRpbmdTbGlkZXIubm9VaVNsaWRlci5vbihcInVwZGF0ZVwiLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgc2V0dGluZ1NsaWRlclZhbHVlLmlubmVySFRNTCA9IHZhbHVlc1toYW5kbGVdO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHJhbmdlSW5pdCgpO1xyXG59KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmViOGE2NDU5YzJjNDQ2NTFkZmNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=