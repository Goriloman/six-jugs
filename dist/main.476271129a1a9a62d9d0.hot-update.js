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


// Действия при клике
window.onload = function () {
  window.addEventListener("click", documentActions);

  function documentActions(e) {
    let targetElement = e.target;

    // Сброс значений настроек
    if (targetElement.closest(`.button-reset`)) {
      let buttonReset = document.querySelector("button-reset");
      let settingSliders = document.querySelectorAll(
        ".item-setting .item-setting__slider"
      );

      settingSliders.forEach((settingSlider) => {
        settingSlider.noUiSlider.set([20]);
      });
    }

    // Внос средств
    if (targetElement.closest(".money-entry-input")) {
      let input = document.querySelector(".item-money-entry__input");
      let inputValue = input.value;
      targetElement.classList.remove("good", "error");

      if (Number(inputValue) + amount >= 100) {
        amount += Number(inputValue);
        setTimeout(() => {
          targetElement.classList.add("good");
        }, 0);
      } else {
        setTimeout(() => {
          targetElement.classList.add("error");
        }, 0);
      }
      input.value = "";
    }

    // Вынос средств
    if (targetElement.closest(".money-entry-output")) {
    }
  }
};

// Логика приложения

// Все переменные
let amount = 0; // Сумма

let jugsPercent = {
  monthly: 20,
  entertainment: 20,
  saving: 20,
  development: 20,
  safety: 20,
  present: 20,
};

let jugs = {
  monthly: 0,
  entertainment: 0,
  saving: 0,
  development: 0,
  safety: 0,
  present: 0,
};

// Получение данных при вносе средств
let formInput = document.querySelector(".money-form-input");
formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target).entries());
  console.log(formData);
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c00850b4a80bbe57077b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40NzYyNzExMjlhMWE5YTYyZDlkMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBDO0FBQzFDO0FBQzBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7O1VDOUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2ZpbGVzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YTRg9C90LrRhtC40L7QvdCw0LvQsCBcItCn0LXRgNGC0L7Qs9C+0LIg0KTRgNC40LvQsNC90YHQtdGA0LBcIlxyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xyXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0L/QuNGB0LrQsCDQsNC60YLQuNCy0L3Ri9GFINC80L7QtNGD0LvQtdC5XHJcbmltcG9ydCB7IGZsc01vZHVsZXMgfSBmcm9tIFwiLi9tb2R1bGVzLmpzXCI7XHJcblxyXG4vLyDQlNC10LnRgdGC0LLQuNGPINC/0YDQuCDQutC70LjQutC1XHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudEFjdGlvbnMpO1xyXG5cclxuICBmdW5jdGlvbiBkb2N1bWVudEFjdGlvbnMoZSkge1xyXG4gICAgbGV0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAvLyDQodCx0YDQvtGBINC30L3QsNGH0LXQvdC40Lkg0L3QsNGB0YLRgNC+0LXQulxyXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdChgLmJ1dHRvbi1yZXNldGApKSB7XHJcbiAgICAgIGxldCBidXR0b25SZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24tcmVzZXRcIik7XHJcbiAgICAgIGxldCBzZXR0aW5nU2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuaXRlbS1zZXR0aW5nIC5pdGVtLXNldHRpbmdfX3NsaWRlclwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzZXR0aW5nU2xpZGVycy5mb3JFYWNoKChzZXR0aW5nU2xpZGVyKSA9PiB7XHJcbiAgICAgICAgc2V0dGluZ1NsaWRlci5ub1VpU2xpZGVyLnNldChbMjBdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0JLQvdC+0YEg0YHRgNC10LTRgdGC0LJcclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoXCIubW9uZXktZW50cnktaW5wdXRcIikpIHtcclxuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtLW1vbmV5LWVudHJ5X19pbnB1dFwiKTtcclxuICAgICAgbGV0IGlucHV0VmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZ29vZFwiLCBcImVycm9yXCIpO1xyXG5cclxuICAgICAgaWYgKE51bWJlcihpbnB1dFZhbHVlKSArIGFtb3VudCA+PSAxMDApIHtcclxuICAgICAgICBhbW91bnQgKz0gTnVtYmVyKGlucHV0VmFsdWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZ29vZFwiKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQktGL0L3QvtGBINGB0YDQtdC00YHRgtCyXHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KFwiLm1vbmV5LWVudHJ5LW91dHB1dFwiKSkge1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8vINCb0L7Qs9C40LrQsCDQv9GA0LjQu9C+0LbQtdC90LjRj1xyXG5cclxuLy8g0JLRgdC1INC/0LXRgNC10LzQtdC90L3Ri9C1XHJcbmxldCBhbW91bnQgPSAwOyAvLyDQodGD0LzQvNCwXHJcblxyXG5sZXQganVnc1BlcmNlbnQgPSB7XHJcbiAgbW9udGhseTogMjAsXHJcbiAgZW50ZXJ0YWlubWVudDogMjAsXHJcbiAgc2F2aW5nOiAyMCxcclxuICBkZXZlbG9wbWVudDogMjAsXHJcbiAgc2FmZXR5OiAyMCxcclxuICBwcmVzZW50OiAyMCxcclxufTtcclxuXHJcbmxldCBqdWdzID0ge1xyXG4gIG1vbnRobHk6IDAsXHJcbiAgZW50ZXJ0YWlubWVudDogMCxcclxuICBzYXZpbmc6IDAsXHJcbiAgZGV2ZWxvcG1lbnQ6IDAsXHJcbiAgc2FmZXR5OiAwLFxyXG4gIHByZXNlbnQ6IDAsXHJcbn07XHJcblxyXG4vLyDQn9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFINC/0YDQuCDQstC90L7RgdC1INGB0YDQtdC00YHRgtCyXHJcbmxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vbmV5LWZvcm0taW5wdXRcIik7XHJcbmZvcm1JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGZvcm1EYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkuZW50cmllcygpKTtcclxuICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbn0pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjMDA4NTBiNGE4MGJiZTU3MDc3YlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==