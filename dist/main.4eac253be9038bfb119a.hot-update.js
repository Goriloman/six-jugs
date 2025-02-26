"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/files/script.js":
/*!********************************!*\
  !*** ./src/js/files/script.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules.js */ "./src/js/files/modules.js");
// Подключение функционала "Чертогов Фрилансера"

// Подключение списка активных модулей


function menuInit() {
  if (document.querySelector(".icon-menu")) {
    document.addEventListener("click", function (e) {
      if (bodyLockStatus && e.target.closest(".icon-menu")) {
        bodyLockToggle();
        document.documentElement.classList.toggle("menu-open");
      }
    });
  }
}

window.onload = function () {
  window.addEventListener("click", documentActions);

  function documentActions(e) {
    let targetElement = e.target;
    if (targetElement.closest(`button-reset`)) {
      // Сброс значений настроек
      let buttonReset = document.querySelector("button-reset");
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
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e97daecf2ecde8e56d72")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZWFjMjUzYmU5MDM4YmZiMTE5YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBDO0FBQzFDO0FBQzBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDcENBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2ZpbGVzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YTRg9C90LrRhtC40L7QvdCw0LvQsCBcItCn0LXRgNGC0L7Qs9C+0LIg0KTRgNC40LvQsNC90YHQtdGA0LBcIlxyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xyXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0L/QuNGB0LrQsCDQsNC60YLQuNCy0L3Ri9GFINC80L7QtNGD0LvQtdC5XHJcbmltcG9ydCB7IGZsc01vZHVsZXMgfSBmcm9tIFwiLi9tb2R1bGVzLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBtZW51SW5pdCgpIHtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uLW1lbnVcIikpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAoYm9keUxvY2tTdGF0dXMgJiYgZS50YXJnZXQuY2xvc2VzdChcIi5pY29uLW1lbnVcIikpIHtcclxuICAgICAgICBib2R5TG9ja1RvZ2dsZSgpO1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwibWVudS1vcGVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudEFjdGlvbnMpO1xyXG5cclxuICBmdW5jdGlvbiBkb2N1bWVudEFjdGlvbnMoZSkge1xyXG4gICAgbGV0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoYGJ1dHRvbi1yZXNldGApKSB7XHJcbiAgICAgIC8vINCh0LHRgNC+0YEg0LfQvdCw0YfQtdC90LjQuSDQvdCw0YHRgtGA0L7QtdC6XHJcbiAgICAgIGxldCBidXR0b25SZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24tcmVzZXRcIik7XHJcbiAgICAgIGJ1dHRvblJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoaVwiKTtcclxuXHJcbiAgICAgICAgc2V0dGluZ1NsaWRlcnNXcmFwcGVyLmZvckVhY2goKHNldHRpbmdTbGlkZXJXcmFwcGVyKSA9PiB7XHJcbiAgICAgICAgICBsZXQgc2V0dGluZ1NsaWRlciA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXR0aW5nU2xpZGVyLm5vVWlTbGlkZXIuc2V0KFsyMF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU5N2RhZWNmMmVjZGU4ZTU2ZDcyXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9