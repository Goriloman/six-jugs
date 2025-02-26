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
}
document.addEventListener("DOMContentLoaded", function () {
  rangeInit();
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("01c8fda09f522c852600")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zNzcwNDZlMTEzMjVmYWJhMTBjOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7OztVQ2xDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9maWxlcy9mb3Jtcy9yYW5nZS5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0LjQtyBub2RlX21vZHVsZXNcclxuaW1wb3J0ICogYXMgbm9VaVNsaWRlciBmcm9tIFwibm91aXNsaWRlclwiO1xyXG5cclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRgdGC0LjQu9C10Lkg0LjQtyBzY3NzL2Jhc2UvZm9ybXMvcmFuZ2Uuc2Nzc1xyXG4vLyDQsiDRhNCw0LnQu9C1IHNjc3MvZm9ybXMvZm9ybXMuc2Nzc1xyXG5cclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSBj0YLQuNC70LXQuSDQuNC3IG5vZGVfbW9kdWxlc1xyXG4vLyBpbXBvcnQgXCJub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZUluaXQoKSB7XHJcbiAgY29uc3Qgc2V0dGluZ1NsaWRlcnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLXNldHRpbmdcIik7XHJcbiAgc2V0dGluZ1NsaWRlcnNXcmFwcGVyLmZvckVhY2goKHNldHRpbmdTbGlkZXJXcmFwcGVyKSA9PiB7XHJcbiAgICBsZXQgc2V0dGluZ1NsaWRlciA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICk7XHJcbiAgICBub1VpU2xpZGVyLmNyZWF0ZShzZXR0aW5nU2xpZGVyLCB7XHJcbiAgICAgIHN0YXJ0OiBbMjBdLFxyXG4gICAgICBzdGVwOiA1LFxyXG4gICAgICByYW5nZToge1xyXG4gICAgICAgIG1pbjogWzBdLFxyXG4gICAgICAgIG1heDogWzEwMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGxldCBzZXR0aW5nU2xpZGVyVmFsdWUgPSBzZXR0aW5nU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5pdGVtLXNldHRpbmdfX3ZhbHVlIHNwYW5cIlxyXG4gICAgKTtcclxuICAgIHNldHRpbmdTbGlkZXIubm9VaVNsaWRlci5vbihcInVwZGF0ZVwiLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgY29uc29sZS5sb2codHlwZW9mIHZhbHVlc1toYW5kbGVdKTtcclxuICAgICAgc2V0dGluZ1NsaWRlclZhbHVlLmlubmVySFRNTCA9IE51bWJlcih2YWx1ZXNbaGFuZGxlXSkudG9GaXhlZCgwKSArIFwiJVwiO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHJhbmdlSW5pdCgpO1xyXG59KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDFjOGZkYTA5ZjUyMmM4NTI2MDBcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=