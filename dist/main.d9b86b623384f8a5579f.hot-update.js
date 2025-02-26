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
  const totalSliders = settingSlidersWrapper.length;
  let values = new Array(totalSliders).fill(0); // Хранит текущие значения ползунков

  settingSlidersWrapper.forEach((settingSliderWrapper, index) => {
    let settingSlider = settingSliderWrapper.querySelector(
      ".item-setting__slider"
    );

    // Создание ползунка
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
      // Обновляем текущее значение ползунка
      values[index] = Number(values[handle]);
      settingSliderValue.innerHTML = values[index].toFixed(0) + "%";

      // Вычисляем сумму значений всех ползунков
      let totalValue = values.reduce((a, b) => a + b, 0);

      // Если сумма не превышает 100, обновляем значения других ползунков
      if (totalValue <= 100 && totalValue !== 0) {
        // Изменяем значения остальных ползунков
        for (let i = 0; i < totalSliders; i++) {
          if (i !== index) {
            let remainingValue = 100 - totalValue + values[index]; // Остаток для остальных ползунков
            values[i] = Math.max(0, remainingValue / (totalSliders - 1)); // Распределяем поровну
            settingSlidersWrapper[i]
              .querySelector(".item-setting__slider")
              .noUiSlider.set(values[i]);
          }
        }
      } else if (totalValue > 100) {
        // Если сумма больше 100, необходимо уменьшить значение текущего ползунка
        values[index] = Math.max(0, values[index] - (totalValue - 100));
        settingSlider.noUiSlider.set(values[index]);
      }
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
/******/ 	__webpack_require__.h = () => ("bffb98c5f6c7703e3920")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kOWI4NmI2MjMzODRmOGE1NTc5Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQSxtRUFBbUU7QUFDbkUsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7OztVQy9ERCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9maWxlcy9mb3Jtcy9yYW5nZS5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0LjQtyBub2RlX21vZHVsZXNcclxuaW1wb3J0ICogYXMgbm9VaVNsaWRlciBmcm9tIFwibm91aXNsaWRlclwiO1xyXG5cclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRgdGC0LjQu9C10Lkg0LjQtyBzY3NzL2Jhc2UvZm9ybXMvcmFuZ2Uuc2Nzc1xyXG4vLyDQsiDRhNCw0LnQu9C1IHNjc3MvZm9ybXMvZm9ybXMuc2Nzc1xyXG5cclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSBj0YLQuNC70LXQuSDQuNC3IG5vZGVfbW9kdWxlc1xyXG4vLyBpbXBvcnQgXCJub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZUluaXQoKSB7XHJcbiAgY29uc3Qgc2V0dGluZ1NsaWRlcnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLXNldHRpbmdcIik7XHJcbiAgY29uc3QgdG90YWxTbGlkZXJzID0gc2V0dGluZ1NsaWRlcnNXcmFwcGVyLmxlbmd0aDtcclxuICBsZXQgdmFsdWVzID0gbmV3IEFycmF5KHRvdGFsU2xpZGVycykuZmlsbCgwKTsgLy8g0KXRgNCw0L3QuNGCINGC0LXQutGD0YnQuNC1INC30L3QsNGH0LXQvdC40Y8g0L/QvtC70LfRg9C90LrQvtCyXHJcblxyXG4gIHNldHRpbmdTbGlkZXJzV3JhcHBlci5mb3JFYWNoKChzZXR0aW5nU2xpZGVyV3JhcHBlciwgaW5kZXgpID0+IHtcclxuICAgIGxldCBzZXR0aW5nU2xpZGVyID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIlxyXG4gICAgKTtcclxuXHJcbiAgICAvLyDQodC+0LfQtNCw0L3QuNC1INC/0L7Qu9C30YPQvdC60LBcclxuICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNldHRpbmdTbGlkZXIsIHtcclxuICAgICAgc3RhcnQ6IFswXSxcclxuICAgICAgc3RlcDogNSxcclxuICAgICAgcmFuZ2U6IHtcclxuICAgICAgICBtaW46IFswXSxcclxuICAgICAgICBtYXg6IFsxMDBdLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHNldHRpbmdTbGlkZXJWYWx1ZSA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLml0ZW0tc2V0dGluZ19fdmFsdWUgc3BhblwiXHJcbiAgICApO1xyXG5cclxuICAgIHNldHRpbmdTbGlkZXIubm9VaVNsaWRlci5vbihcInVwZGF0ZVwiLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgLy8g0J7QsdC90L7QstC70Y/QtdC8INGC0LXQutGD0YnQtdC1INC30L3QsNGH0LXQvdC40LUg0L/QvtC70LfRg9C90LrQsFxyXG4gICAgICB2YWx1ZXNbaW5kZXhdID0gTnVtYmVyKHZhbHVlc1toYW5kbGVdKTtcclxuICAgICAgc2V0dGluZ1NsaWRlclZhbHVlLmlubmVySFRNTCA9IHZhbHVlc1tpbmRleF0udG9GaXhlZCgwKSArIFwiJVwiO1xyXG5cclxuICAgICAgLy8g0JLRi9GH0LjRgdC70Y/QtdC8INGB0YPQvNC80YMg0LfQvdCw0YfQtdC90LjQuSDQstGB0LXRhSDQv9C+0LvQt9GD0L3QutC+0LJcclxuICAgICAgbGV0IHRvdGFsVmFsdWUgPSB2YWx1ZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcblxyXG4gICAgICAvLyDQldGB0LvQuCDRgdGD0LzQvNCwINC90LUg0L/RgNC10LLRi9GI0LDQtdGCIDEwMCwg0L7QsdC90L7QstC70Y/QtdC8INC30L3QsNGH0LXQvdC40Y8g0LTRgNGD0LPQuNGFINC/0L7Qu9C30YPQvdC60L7QslxyXG4gICAgICBpZiAodG90YWxWYWx1ZSA8PSAxMDAgJiYgdG90YWxWYWx1ZSAhPT0gMCkge1xyXG4gICAgICAgIC8vINCY0LfQvNC10L3Rj9C10Lwg0LfQvdCw0YfQtdC90LjRjyDQvtGB0YLQsNC70YzQvdGL0YUg0L/QvtC70LfRg9C90LrQvtCyXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFNsaWRlcnM7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgIGxldCByZW1haW5pbmdWYWx1ZSA9IDEwMCAtIHRvdGFsVmFsdWUgKyB2YWx1ZXNbaW5kZXhdOyAvLyDQntGB0YLQsNGC0L7QuiDQtNC70Y8g0L7RgdGC0LDQu9GM0L3Ri9GFINC/0L7Qu9C30YPQvdC60L7QslxyXG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSBNYXRoLm1heCgwLCByZW1haW5pbmdWYWx1ZSAvICh0b3RhbFNsaWRlcnMgLSAxKSk7IC8vINCg0LDRgdC/0YDQtdC00LXQu9GP0LXQvCDQv9C+0YDQvtCy0L3Rg1xyXG4gICAgICAgICAgICBzZXR0aW5nU2xpZGVyc1dyYXBwZXJbaV1cclxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiKVxyXG4gICAgICAgICAgICAgIC5ub1VpU2xpZGVyLnNldCh2YWx1ZXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0b3RhbFZhbHVlID4gMTAwKSB7XHJcbiAgICAgICAgLy8g0JXRgdC70Lgg0YHRg9C80LzQsCDQsdC+0LvRjNGI0LUgMTAwLCDQvdC10L7QsdGF0L7QtNC40LzQviDRg9C80LXQvdGM0YjQuNGC0Ywg0LfQvdCw0YfQtdC90LjQtSDRgtC10LrRg9GJ0LXQs9C+INC/0L7Qu9C30YPQvdC60LBcclxuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gTWF0aC5tYXgoMCwgdmFsdWVzW2luZGV4XSAtICh0b3RhbFZhbHVlIC0gMTAwKSk7XHJcbiAgICAgICAgc2V0dGluZ1NsaWRlci5ub1VpU2xpZGVyLnNldCh2YWx1ZXNbaW5kZXhdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHJhbmdlSW5pdCgpO1xyXG59KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmZmYjk4YzVmNmM3NzAzZTM5MjBcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=