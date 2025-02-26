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
      start: [20],
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
      console.log(typeof values[handle]);
      settingSliderValue.innerHTML = Number(values[handle]).toFixed(0) + "%";
    });
  });

  // Сброс значений
  let buttonReset = document.querySelector("button-reset");
  if (buttonReset) {
    buttonReset.addEventListener("click", function () {
      console.log("hi");

      settingSlidersWrapper.forEach((settingSliderWrapper) => {
        let settingSlider = settingSliderWrapper.querySelector(
          ".item-setting__slider"
        );
        settingSlider.noUiSlider.set([20]);
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  rangeInit();
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("33ca1c556e8bd1be79c4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZWQ5Y2E5NDQ0MzgyMGY1MGI2Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7VUNqREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvZm9ybXMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INC40Lcgbm9kZV9tb2R1bGVzXHJcbmltcG9ydCAqIGFzIG5vVWlTbGlkZXIgZnJvbSBcIm5vdWlzbGlkZXJcIjtcclxuXHJcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHRgtC40LvQtdC5INC40Lcgc2Nzcy9iYXNlL2Zvcm1zL3JhbmdlLnNjc3NcclxuLy8g0LIg0YTQsNC50LvQtSBzY3NzL2Zvcm1zL2Zvcm1zLnNjc3NcclxuXHJcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUgY9GC0LjQu9C10Lkg0LjQtyBub2RlX21vZHVsZXNcclxuLy8gaW1wb3J0IFwibm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VJbml0KCkge1xyXG4gIGNvbnN0IHNldHRpbmdTbGlkZXJzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1zZXR0aW5nXCIpO1xyXG4gIHNldHRpbmdTbGlkZXJzV3JhcHBlci5mb3JFYWNoKChzZXR0aW5nU2xpZGVyV3JhcHBlcikgPT4ge1xyXG4gICAgbGV0IHNldHRpbmdTbGlkZXIgPSBzZXR0aW5nU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiXHJcbiAgICApO1xyXG4gICAgbm9VaVNsaWRlci5jcmVhdGUoc2V0dGluZ1NsaWRlciwge1xyXG4gICAgICBzdGFydDogWzIwXSxcclxuICAgICAgc3RlcDogNSxcclxuICAgICAgcmFuZ2U6IHtcclxuICAgICAgICBtaW46IFswXSxcclxuICAgICAgICBtYXg6IFsxMDBdLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBsZXQgc2V0dGluZ1NsaWRlclZhbHVlID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuaXRlbS1zZXR0aW5nX192YWx1ZSBzcGFuXCJcclxuICAgICk7XHJcbiAgICBzZXR0aW5nU2xpZGVyLm5vVWlTbGlkZXIub24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiB2YWx1ZXNbaGFuZGxlXSk7XHJcbiAgICAgIHNldHRpbmdTbGlkZXJWYWx1ZS5pbm5lckhUTUwgPSBOdW1iZXIodmFsdWVzW2hhbmRsZV0pLnRvRml4ZWQoMCkgKyBcIiVcIjtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyDQodCx0YDQvtGBINC30L3QsNGH0LXQvdC40LlcclxuICBsZXQgYnV0dG9uUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLXJlc2V0XCIpO1xyXG4gIGlmIChidXR0b25SZXNldCkge1xyXG4gICAgYnV0dG9uUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJoaVwiKTtcclxuXHJcbiAgICAgIHNldHRpbmdTbGlkZXJzV3JhcHBlci5mb3JFYWNoKChzZXR0aW5nU2xpZGVyV3JhcHBlcikgPT4ge1xyXG4gICAgICAgIGxldCBzZXR0aW5nU2xpZGVyID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldHRpbmdTbGlkZXIubm9VaVNsaWRlci5zZXQoWzIwXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICByYW5nZUluaXQoKTtcclxufSk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMzY2ExYzU1NmU4YmQxYmU3OWM0XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9