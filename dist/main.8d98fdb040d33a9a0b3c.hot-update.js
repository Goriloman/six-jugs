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

let jugs = {
  monthly: {
    money: 0,
    percent: 20,
  },
  entertainment: {
    money: 0,
    percent: 20,
  },
  saving: {
    money: 0,
    percent: 20,
  },
  development: {
    money: 0,
    percent: 20,
  },
  safety: {
    money: 0,
    percent: 20,
  },
  present: {
    money: 0,
    percent: 20,
  },
};

// Получение данных форм
function getInfoForm(form) {
  form.preventDefault();
  let formInfo = Object.fromEntries(new FormData(form.target).entries());
  console.log(formInfo, form.submitter);

  dataProcessing(formInfo, form.submitter);
}

// Обработка данных
function dataProcessing(formInfo, button) {
  // Внос средст
  if ("moneyInput" in formInfo) {
    formInfo.moneyInput = Number(formInfo.moneyInput);
    if (formInfo.jugs == "unspecified") {
      button.classList.remove("good", "error");
      if (Number(formInfo.moneyInput) > 100) {
        setTimeout(() => {
          button.classList.add("good");
        }, 0);
        amount += formInfo.moneyInput;
        // какая-то функция для подсчета
      } else {
        setTimeout(() => {
          button.classList.add("error");
        }, 0);
      }
    } else if (formInfo.jugs) {
      console.log(jugs[formInfo.jugs]);

      jugs[formInfo.jugs].money += formInfo.moneyInput;
      setTimeout(() => {
        button.classList.add("good");
      }, 0);
    } else {
      setTimeout(() => {
        button.classList.add("error");
      }, 0);
    }
  }

  // Вынос средств
  if ("moneyOutput" in formInfo) {
    formInfo.moneyOutput = Number(formInfo.moneyOutput);
    button.classList.remove("good", "error");
    console.log(jugs[formInfo.jugs].money);
    console.log(formInfo.moneyInput);

    console.log(jugs[formInfo.jugs].money >= formInfo.moneyInput);

    if (jugs[formInfo.jugs].money >= formInfo.moneyInput) {
      jugs[formInfo.jugs].money += formInfo.moneyInput;
      setTimeout(() => {
        button.classList.add("good");
      }, 0);
    } else {
      setTimeout(() => {
        button.classList.add("error");
      }, 0);
    }
  }

  console.log(amount);
  console.log(jugs);
}

// Получение данных при вносе средств
let formInput = document.querySelector(".money-form-input");
formInput.addEventListener("submit", getInfoForm);

let formOutput = document.querySelector(".money-form-output");
formOutput.addEventListener("submit", getInfoForm);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a210233aa178588542c1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ZDk4ZmRiMDQwZDMzYTlhMGIzYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBDO0FBQzFDO0FBQzBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ3hKQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9maWxlcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGE0YPQvdC60YbQuNC+0L3QsNC70LAgXCLQp9C10YDRgtC+0LPQvtCyINCk0YDQuNC70LDQvdGB0LXRgNCwXCJcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tIFwiLi9mdW5jdGlvbnMuanNcIjtcclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRgdC/0LjRgdC60LAg0LDQutGC0LjQstC90YvRhSDQvNC+0LTRg9C70LXQuVxyXG5pbXBvcnQgeyBmbHNNb2R1bGVzIH0gZnJvbSBcIi4vbW9kdWxlcy5qc1wiO1xyXG5cclxuLy8g0JTQtdC50YHRgtCy0LjRjyDQv9GA0Lgg0LrQu9C40LrQtVxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9jdW1lbnRBY3Rpb25zKTtcclxuXHJcbiAgZnVuY3Rpb24gZG9jdW1lbnRBY3Rpb25zKGUpIHtcclxuICAgIGxldCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgLy8g0KHQsdGA0L7RgSDQt9C90LDRh9C10L3QuNC5INC90LDRgdGC0YDQvtC10LpcclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoYC5idXR0b24tcmVzZXRgKSkge1xyXG4gICAgICBsZXQgYnV0dG9uUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLXJlc2V0XCIpO1xyXG4gICAgICBsZXQgc2V0dGluZ1NsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLml0ZW0tc2V0dGluZyAuaXRlbS1zZXR0aW5nX19zbGlkZXJcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgc2V0dGluZ1NsaWRlcnMuZm9yRWFjaCgoc2V0dGluZ1NsaWRlcikgPT4ge1xyXG4gICAgICAgIHNldHRpbmdTbGlkZXIubm9VaVNsaWRlci5zZXQoWzIwXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCS0L3QvtGBINGB0YDQtdC00YHRgtCyXHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KFwiLm1vbmV5LWVudHJ5LWlucHV0XCIpKSB7XHJcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1tb25leS1lbnRyeV9faW5wdXRcIik7XHJcbiAgICAgIGxldCBpbnB1dFZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImdvb2RcIiwgXCJlcnJvclwiKTtcclxuXHJcbiAgICAgIGlmIChOdW1iZXIoaW5wdXRWYWx1ZSkgKyBhbW91bnQgPj0gMTAwKSB7XHJcbiAgICAgICAgYW1vdW50ICs9IE51bWJlcihpbnB1dFZhbHVlKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImdvb2RcIik7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0JLRi9C90L7RgSDRgdGA0LXQtNGB0YLQslxyXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdChcIi5tb25leS1lbnRyeS1vdXRwdXRcIikpIHtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vLyDQm9C+0LPQuNC60LAg0L/RgNC40LvQvtC20LXQvdC40Y9cclxuXHJcbi8vINCS0YHQtSDQv9C10YDQtdC80LXQvdC90YvQtVxyXG5sZXQgYW1vdW50ID0gMDsgLy8g0KHRg9C80LzQsFxyXG5cclxubGV0IGp1Z3MgPSB7XHJcbiAgbW9udGhseToge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiAyMCxcclxuICB9LFxyXG4gIGVudGVydGFpbm1lbnQ6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMjAsXHJcbiAgfSxcclxuICBzYXZpbmc6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMjAsXHJcbiAgfSxcclxuICBkZXZlbG9wbWVudDoge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiAyMCxcclxuICB9LFxyXG4gIHNhZmV0eToge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiAyMCxcclxuICB9LFxyXG4gIHByZXNlbnQ6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMjAsXHJcbiAgfSxcclxufTtcclxuXHJcbi8vINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0YTQvtGA0LxcclxuZnVuY3Rpb24gZ2V0SW5mb0Zvcm0oZm9ybSkge1xyXG4gIGZvcm0ucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgZm9ybUluZm8gPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGZvcm0udGFyZ2V0KS5lbnRyaWVzKCkpO1xyXG4gIGNvbnNvbGUubG9nKGZvcm1JbmZvLCBmb3JtLnN1Ym1pdHRlcik7XHJcblxyXG4gIGRhdGFQcm9jZXNzaW5nKGZvcm1JbmZvLCBmb3JtLnN1Ym1pdHRlcik7XHJcbn1cclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0LrQsCDQtNCw0L3QvdGL0YVcclxuZnVuY3Rpb24gZGF0YVByb2Nlc3NpbmcoZm9ybUluZm8sIGJ1dHRvbikge1xyXG4gIC8vINCS0L3QvtGBINGB0YDQtdC00YHRglxyXG4gIGlmIChcIm1vbmV5SW5wdXRcIiBpbiBmb3JtSW5mbykge1xyXG4gICAgZm9ybUluZm8ubW9uZXlJbnB1dCA9IE51bWJlcihmb3JtSW5mby5tb25leUlucHV0KTtcclxuICAgIGlmIChmb3JtSW5mby5qdWdzID09IFwidW5zcGVjaWZpZWRcIikge1xyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImdvb2RcIiwgXCJlcnJvclwiKTtcclxuICAgICAgaWYgKE51bWJlcihmb3JtSW5mby5tb25leUlucHV0KSA+IDEwMCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJnb29kXCIpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIGFtb3VudCArPSBmb3JtSW5mby5tb25leUlucHV0O1xyXG4gICAgICAgIC8vINC60LDQutCw0Y8t0YLQviDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QvtC00YHRh9C10YLQsFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChmb3JtSW5mby5qdWdzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGp1Z3NbZm9ybUluZm8uanVnc10pO1xyXG5cclxuICAgICAganVnc1tmb3JtSW5mby5qdWdzXS5tb25leSArPSBmb3JtSW5mby5tb25leUlucHV0O1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImdvb2RcIik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDQktGL0L3QvtGBINGB0YDQtdC00YHRgtCyXHJcbiAgaWYgKFwibW9uZXlPdXRwdXRcIiBpbiBmb3JtSW5mbykge1xyXG4gICAgZm9ybUluZm8ubW9uZXlPdXRwdXQgPSBOdW1iZXIoZm9ybUluZm8ubW9uZXlPdXRwdXQpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJnb29kXCIsIFwiZXJyb3JcIik7XHJcbiAgICBjb25zb2xlLmxvZyhqdWdzW2Zvcm1JbmZvLmp1Z3NdLm1vbmV5KTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1JbmZvLm1vbmV5SW5wdXQpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGp1Z3NbZm9ybUluZm8uanVnc10ubW9uZXkgPj0gZm9ybUluZm8ubW9uZXlJbnB1dCk7XHJcblxyXG4gICAgaWYgKGp1Z3NbZm9ybUluZm8uanVnc10ubW9uZXkgPj0gZm9ybUluZm8ubW9uZXlJbnB1dCkge1xyXG4gICAgICBqdWdzW2Zvcm1JbmZvLmp1Z3NdLm1vbmV5ICs9IGZvcm1JbmZvLm1vbmV5SW5wdXQ7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZ29vZFwiKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGFtb3VudCk7XHJcbiAgY29uc29sZS5sb2coanVncyk7XHJcbn1cclxuXHJcbi8vINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L/RgNC4INCy0L3QvtGB0LUg0YHRgNC10LTRgdGC0LJcclxubGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9uZXktZm9ybS1pbnB1dFwiKTtcclxuZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5mb0Zvcm0pO1xyXG5cclxubGV0IGZvcm1PdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vbmV5LWZvcm0tb3V0cHV0XCIpO1xyXG5mb3JtT3V0cHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5mb0Zvcm0pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhMjEwMjMzYWExNzg1ODg1NDJjMVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==