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
    }
  }
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9ed9ca94443820f50b6b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45YzNiZmFlMTZkYjU0ZGIxMzQ0NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBDO0FBQzFDO0FBQzBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUN4QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvc2NyaXB0LmpzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRhNGD0L3QutGG0LjQvtC90LDQu9CwIFwi0KfQtdGA0YLQvtCz0L7QsiDQpNGA0LjQu9Cw0L3RgdC10YDQsFwiXHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XHJcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHQv9C40YHQutCwINCw0LrRgtC40LLQvdGL0YUg0LzQvtC00YPQu9C10LlcclxuaW1wb3J0IHsgZmxzTW9kdWxlcyB9IGZyb20gXCIuL21vZHVsZXMuanNcIjtcclxuXHJcbmZ1bmN0aW9uIG1lbnVJbml0KCkge1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmljb24tbWVudVwiKSkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmIChib2R5TG9ja1N0YXR1cyAmJiBlLnRhcmdldC5jbG9zZXN0KFwiLmljb24tbWVudVwiKSkge1xyXG4gICAgICAgIGJvZHlMb2NrVG9nZ2xlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LW9wZW5cIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvY3VtZW50QWN0aW9ucyk7XHJcblxyXG4gIGZ1bmN0aW9uIGRvY3VtZW50QWN0aW9ucyhlKSB7XHJcbiAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdChgYnV0dG9uLXJlc2V0YCkpIHtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjllZDljYTk0NDQzODIwZjUwYjZiXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9