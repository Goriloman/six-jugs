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
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");
// Подключение функционала "Чертогов Фрилансера"

// Подключение списка активных модулей


// import { document, setCookie, getCookie, deleteCookie } from "cookielib";

// Cookie js
function getCookie(name, json = false) {
  if (!name) {
    return undefined;
  }
  /*
  Returns cookie with specified name (str) if exists, else - undefined
  if returning value is JSON and json parameter is true, returns json, otherwise str
  */
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, "\\$1") + "=([^;]*)"
    )
  );
  if (matches) {
    let res = decodeURIComponent(matches[1]);
    if (json) {
      try {
        return JSON.parse(res);
      } catch (e) {}
    }
    return res;
  }

  return undefined;
}
function setCookie(name, value, options = { path: "/" }) {
  /*
  Sets a cookie with specified name (str), value (str) & options (dict)

  options keys:
    - path (str) - URL, for which this cookie is available (must be absolute!)
    - domain (str) - domain, for which this cookie is available
    - expires (Date object) - expiration date&time of cookie
    - max-age (int) - cookie lifetime in seconds (alternative for expires option)
    - secure (bool) - if true, cookie will be available only for HTTPS.
                      IT CAN'T BE FALSE
    - samesite (str) - XSRF protection setting.
                       Can be strict or lax
                       Read https://web.dev/samesite-cookies-explained/ for details
    - httpOnly (bool) - if true, cookie won't be available for using in JavaScript
                        IT CAN'T BE FALSE
  */
  if (!name) {
    return;
  }

  options = options || {};

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  if (value instanceof Object) {
    value = JSON.stringify(value);
  }
  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}
function deleteCookie(name) {
  /*
  Deletes a cookie with specified name.
  Returns true when cookie was successfully deleted, otherwise false
  */
  setCookie(name, null, {
    expires: new Date(),
    path: "/",
  });
}

// -------------------------------------------------------------------------
// Логика приложения

// Действия при клике
window.onload = function () {
  window.addEventListener("click", documentActions);

  function documentActions(e) {
    let targetElement = e.target;

    // Сброс значений настроек
    if (targetElement.closest(`.button-reset`)) {
      let buttonReset = document.querySelector(".button-reset");
      let settingSliders = document.querySelectorAll(
        ".item-setting .item-setting__slider"
      );

      let jugIndex = 0;
      const values = [55, 10, 10, 10, 10, 5]; // Значения для присвоения

      for (const jug in jugs) {
        if (Object.prototype.hasOwnProperty.call(jugs, jug)) {
          const elementJug = jugs[jug];
          if (jugIndex < values.length) {
            elementJug.percent = values[jugIndex]; // Присвоение значения
            jugIndex++; // Увеличиваем индекс
          }
        }
      }

      updateSetting();
      displayData();

      userMessage("good", buttonReset);
    }

    // Сброс всех средств
    if (targetElement.closest(`.button-reset-money`)) {
      let buttonReset = document.querySelector(".button-reset-money");
      for (const jug in jugs) {
        if (Object.prototype.hasOwnProperty.call(jugs, jug)) {
          const jugElement = jugs[jug];
          jugElement.money = 0;
        }
      }
      userMessage("good", buttonReset);

      jugs = JSON.parse(getCookie("jugs", true));
      displayData();
    }

    // Применить настройки
    if (targetElement.closest(".button-apply")) {
      const buttonApply = document.querySelector(".button-apply");
      const settingSliders = document.querySelectorAll(".item-setting__slider");
      const itemSetting = document.querySelectorAll(".item-setting");

      let totalSliderValue = 0;

      // Вычисляем сумму значений слайдеров
      settingSliders.forEach((slider) => {
        totalSliderValue += Number(slider.noUiSlider.get());
      });

      if (totalSliderValue === 100) {
        userMessage("good", buttonApply);

        // Обновляем значения в объекте jugs
        itemSetting.forEach((sliderWrapper) => {
          const slider = sliderWrapper.querySelector(".item-setting__slider");
          const sliderWrapperClasses = Array.from(sliderWrapper.classList);
          const specificClass = sliderWrapperClasses.find((className) =>
            className.startsWith("item-setting-")
          );

          if (specificClass) {
            console.log(specificClass); // Выводим полный класс
            const classWithoutPrefix = specificClass.replace(
              "item-setting-",
              ""
            );
            console.log("hi");
            jugs[classWithoutPrefix].percent = Number(slider.noUiSlider.get());
            console.log(
              `jugs[${classWithoutPrefix}].percent = Number(${slider.noUiSlider.get()})`
            );
          }
        });

        jugs = JSON.parse(getCookie("jugs", true));
        displayData();
      } else {
        userMessage("error", buttonApply);
      }
      console.log(jugs);
    }
  }
};

// Все переменные
let amount = 0;
let jugs = {
  monthly: {
    money: 0,
    percent: 55,
    title: "Ежемесячные траты",
  },
  entertainment: {
    money: 0,
    percent: 10,
    title: "Развлечения",
  },
  saving: {
    money: 0,
    percent: 10,
    title: "Накопления",
  },
  development: {
    money: 0,
    percent: 10,
    title: "Саморазвитие",
  },
  safety: {
    money: 0,
    percent: 10,
    title: "Подушка безопасности",
  },
  present: {
    money: 0,
    percent: 5,
    title: "Подарки",
  },
};

setCookie("jugs", JSON.stringify(jugs));

setCookie("name", jugs);

console.log(getCookie("name"));

// Отображение данных на экране
function displayData() {
  // Отображение кувшинов
  let jugsItems = document.querySelector(".jugs__items");
  jugsItems.innerHTML = "";

  for (const jug in jugs) {
    if (Object.prototype.hasOwnProperty.call(jugs, jug)) {
      const jugElement = jugs[jug];

      let item = `
        <div class="jugs__item item-jugs item-jugs-${jug}">
            <div class="item-jugs__title">${jugElement.title}</div>
            <div class="item-jugs__body">
              <img class="item-jugs__img" src="img/icon/jar.svg" alt="">
              <div class="item-jugs__body-top">
                <span class="item-jugs__body-top-percent">${jugElement.percent}%</span>
                <br>
              </div>
              <div class="item-jugs__body-bottom">
                <span class="item-jugs__body-bottom-text">осталось:</span>
                <br><span class="item-jugs__body-bottom-money">${jugElement.money} p.</span>
              </div>
            </div>
        </div>
      `;

      jugsItems.innerHTML += item;
    }
  }

  rangeInit();
  jugs = JSON.parse(getCookie("jugs", true));
}
displayData();

// Отображение настроек
function rangeInit() {
  const settingList = document.querySelector(".setting__list");
  settingList.innerHTML = ""; // Очищаем предыдущий контент

  const fragment = document.createDocumentFragment(); // Создаем временный фрагмент для улучшенной производительности

  for (const jug in jugs) {
    if (Object.prototype.hasOwnProperty.call(jugs, jug)) {
      const jugElement = jugs[jug];

      // Создаем элемент списка
      const itemElement = document.createElement("li");
      itemElement.className = `menu__item setting__item item-setting item-setting-${jug}`;

      // Добавляем содержимое в новый элемент
      itemElement.innerHTML = `
              <div class="item-setting__title">${jugElement.title}</div>
              <div class="item-setting__slider "></div>
              <div class="item-setting__value">Значение: <span>${jugElement.percent}%</span></div>
            `;

      // Добавляем элемент в фрагмент
      fragment.appendChild(itemElement);
    }
  }

  // Добавляем все элементы за один раз в DOM
  settingList.appendChild(fragment);

  // Инициализируем слайдеры
  for (const jug in jugs) {
    if (Object.prototype.hasOwnProperty.call(jugs, jug)) {
      const jugElement = jugs[jug];

      const settingSliderWrapper = document.querySelector(
        `.item-setting-${jug}`
      );
      const settingSlider = settingSliderWrapper.querySelector(
        ".item-setting__slider"
      );
      const settingSliderValue = settingSliderWrapper.querySelector(
        ".item-setting__value span"
      );
      console.log(settingSlider);

      // Инициализация noUiSlider
      nouislider__WEBPACK_IMPORTED_MODULE_2__.create(settingSlider, {
        start: [jugElement.percent],
        step: 1,
        range: {
          min: [0],
          max: [100],
        },
      });

      // Обновление значения при изменении слайдера
      settingSlider.noUiSlider.on("update", function (values, handle) {
        settingSliderValue.innerHTML = `${Number(values[handle]).toFixed(0)}%`;
      });
    }
  }
}
rangeInit();

// Обновление настроек
function updateSetting() {
  // Инициализируем слайдеры
  for (const jug in jugs) {
    if (Object.prototype.hasOwnProperty.call(jugs, jug)) {
      const jugElement = jugs[jug];

      const settingSliderWrapper = document.querySelector(
        `.item-setting-${jug}`
      );
      const settingSlider = settingSliderWrapper.querySelector(
        ".item-setting__slider"
      );
      settingSlider.noUiSlider.set([jugElement.percent]);
    }
  }

  jugs = JSON.parse(getCookie("jugs", true));
}

// Ответ пользователю
function userMessage(text, element) {
  element.classList.remove("good", "error");
  setTimeout(() => {
    element.classList.add(text);
  }, 0);
}

// расчет средст между кувшинами
function calculationJugs() {
  for (const jug in jugs) {
    if (Object.prototype.hasOwnProperty.call(jugs, jug)) {
      const jugElement = jugs[jug];
      jugElement.money += amount * (jugElement.percent / 100);
      // Ограничиваем количество цифр после запятой до 2
      jugElement.money = parseFloat(jugElement.money.toFixed(2));
      console.log(jugElement);
    }
  }
  amount = 0;
  displayData(); // функция для вывода данных на экран
  console.log(jugs);
}

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
      if (Number(formInfo.moneyInput) >= 100) {
        setTimeout(() => {
          userMessage("good", button);
        }, 0);
        amount += formInfo.moneyInput;
        calculationJugs();
      } else {
        console.log("Общая сумма менее 100руб");
        setTimeout(() => {
          userMessage("error", button);
        }, 0);
      }
    } else if (formInfo.jugs) {
      console.log(jugs[formInfo.jugs]);

      jugs[formInfo.jugs].money += formInfo.moneyInput;
      setTimeout(() => {
        userMessage("good", button);
      }, 0);
      displayData();
    } else {
      setTimeout(() => {
        console.log("Кувшин не найден");
        userMessage("error", button);
      }, 0);
    }
  }

  // Вынос средств
  if ("moneyOutput" in formInfo) {
    formInfo.moneyOutput = Number(formInfo.moneyOutput);

    if (jugs[formInfo.jugs].money >= formInfo.moneyOutput) {
      jugs[formInfo.jugs].money -= formInfo.moneyOutput;
      setTimeout(() => {
        userMessage("good", button);
      }, 0);
      displayData();
    } else {
      setTimeout(() => {
        userMessage("error", button);
      }, 0);
    }
  }
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
/******/ 	__webpack_require__.h = () => ("50d55bdc140987543e4a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7VUNwYkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvc2NyaXB0LmpzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRhNGD0L3QutGG0LjQvtC90LDQu9CwIFwi0KfQtdGA0YLQvtCz0L7QsiDQpNGA0LjQu9Cw0L3RgdC10YDQsFwiXHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XHJcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHQv9C40YHQutCwINCw0LrRgtC40LLQvdGL0YUg0LzQvtC00YPQu9C10LlcclxuaW1wb3J0IHsgZmxzTW9kdWxlcyB9IGZyb20gXCIuL21vZHVsZXMuanNcIjtcclxuaW1wb3J0ICogYXMgbm9VaVNsaWRlciBmcm9tIFwibm91aXNsaWRlclwiO1xyXG4vLyBpbXBvcnQgeyBkb2N1bWVudCwgc2V0Q29va2llLCBnZXRDb29raWUsIGRlbGV0ZUNvb2tpZSB9IGZyb20gXCJjb29raWVsaWJcIjtcclxuXHJcbi8vIENvb2tpZSBqc1xyXG5mdW5jdGlvbiBnZXRDb29raWUobmFtZSwganNvbiA9IGZhbHNlKSB7XHJcbiAgaWYgKCFuYW1lKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuICAvKlxyXG4gIFJldHVybnMgY29va2llIHdpdGggc3BlY2lmaWVkIG5hbWUgKHN0cikgaWYgZXhpc3RzLCBlbHNlIC0gdW5kZWZpbmVkXHJcbiAgaWYgcmV0dXJuaW5nIHZhbHVlIGlzIEpTT04gYW5kIGpzb24gcGFyYW1ldGVyIGlzIHRydWUsIHJldHVybnMganNvbiwgb3RoZXJ3aXNlIHN0clxyXG4gICovXHJcbiAgbGV0IG1hdGNoZXMgPSBkb2N1bWVudC5jb29raWUubWF0Y2goXHJcbiAgICBuZXcgUmVnRXhwKFxyXG4gICAgICBcIig/Ol58OyApXCIgKyBuYW1lLnJlcGxhY2UoLyhbLiQ/Knx7fSgpXFxbXFxdXFxcXFxcLyteXSkvZywgXCJcXFxcJDFcIikgKyBcIj0oW147XSopXCJcclxuICAgIClcclxuICApO1xyXG4gIGlmIChtYXRjaGVzKSB7XHJcbiAgICBsZXQgcmVzID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pO1xyXG4gICAgaWYgKGpzb24pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXMpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuZnVuY3Rpb24gc2V0Q29va2llKG5hbWUsIHZhbHVlLCBvcHRpb25zID0geyBwYXRoOiBcIi9cIiB9KSB7XHJcbiAgLypcclxuICBTZXRzIGEgY29va2llIHdpdGggc3BlY2lmaWVkIG5hbWUgKHN0ciksIHZhbHVlIChzdHIpICYgb3B0aW9ucyAoZGljdClcclxuXHJcbiAgb3B0aW9ucyBrZXlzOlxyXG4gICAgLSBwYXRoIChzdHIpIC0gVVJMLCBmb3Igd2hpY2ggdGhpcyBjb29raWUgaXMgYXZhaWxhYmxlIChtdXN0IGJlIGFic29sdXRlISlcclxuICAgIC0gZG9tYWluIChzdHIpIC0gZG9tYWluLCBmb3Igd2hpY2ggdGhpcyBjb29raWUgaXMgYXZhaWxhYmxlXHJcbiAgICAtIGV4cGlyZXMgKERhdGUgb2JqZWN0KSAtIGV4cGlyYXRpb24gZGF0ZSZ0aW1lIG9mIGNvb2tpZVxyXG4gICAgLSBtYXgtYWdlIChpbnQpIC0gY29va2llIGxpZmV0aW1lIGluIHNlY29uZHMgKGFsdGVybmF0aXZlIGZvciBleHBpcmVzIG9wdGlvbilcclxuICAgIC0gc2VjdXJlIChib29sKSAtIGlmIHRydWUsIGNvb2tpZSB3aWxsIGJlIGF2YWlsYWJsZSBvbmx5IGZvciBIVFRQUy5cclxuICAgICAgICAgICAgICAgICAgICAgIElUIENBTidUIEJFIEZBTFNFXHJcbiAgICAtIHNhbWVzaXRlIChzdHIpIC0gWFNSRiBwcm90ZWN0aW9uIHNldHRpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgQ2FuIGJlIHN0cmljdCBvciBsYXhcclxuICAgICAgICAgICAgICAgICAgICAgICBSZWFkIGh0dHBzOi8vd2ViLmRldi9zYW1lc2l0ZS1jb29raWVzLWV4cGxhaW5lZC8gZm9yIGRldGFpbHNcclxuICAgIC0gaHR0cE9ubHkgKGJvb2wpIC0gaWYgdHJ1ZSwgY29va2llIHdvbid0IGJlIGF2YWlsYWJsZSBmb3IgdXNpbmcgaW4gSmF2YVNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJVCBDQU4nVCBCRSBGQUxTRVxyXG4gICovXHJcbiAgaWYgKCFuYW1lKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgaWYgKG9wdGlvbnMuZXhwaXJlcyBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgIG9wdGlvbnMuZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICB9XHJcbiAgbGV0IHVwZGF0ZWRDb29raWUgPVxyXG4gICAgZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gIGZvciAobGV0IG9wdGlvbktleSBpbiBvcHRpb25zKSB7XHJcbiAgICB1cGRhdGVkQ29va2llICs9IFwiOyBcIiArIG9wdGlvbktleTtcclxuICAgIGxldCBvcHRpb25WYWx1ZSA9IG9wdGlvbnNbb3B0aW9uS2V5XTtcclxuICAgIGlmIChvcHRpb25WYWx1ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICB1cGRhdGVkQ29va2llICs9IFwiPVwiICsgb3B0aW9uVmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlQ29va2llKG5hbWUpIHtcclxuICAvKlxyXG4gIERlbGV0ZXMgYSBjb29raWUgd2l0aCBzcGVjaWZpZWQgbmFtZS5cclxuICBSZXR1cm5zIHRydWUgd2hlbiBjb29raWUgd2FzIHN1Y2Nlc3NmdWxseSBkZWxldGVkLCBvdGhlcndpc2UgZmFsc2VcclxuICAqL1xyXG4gIHNldENvb2tpZShuYW1lLCBudWxsLCB7XHJcbiAgICBleHBpcmVzOiBuZXcgRGF0ZSgpLFxyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8g0JvQvtCz0LjQutCwINC/0YDQuNC70L7QttC10L3QuNGPXHJcblxyXG4vLyDQlNC10LnRgdGC0LLQuNGPINC/0YDQuCDQutC70LjQutC1XHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudEFjdGlvbnMpO1xyXG5cclxuICBmdW5jdGlvbiBkb2N1bWVudEFjdGlvbnMoZSkge1xyXG4gICAgbGV0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAvLyDQodCx0YDQvtGBINC30L3QsNGH0LXQvdC40Lkg0L3QsNGB0YLRgNC+0LXQulxyXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdChgLmJ1dHRvbi1yZXNldGApKSB7XHJcbiAgICAgIGxldCBidXR0b25SZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXJlc2V0XCIpO1xyXG4gICAgICBsZXQgc2V0dGluZ1NsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLml0ZW0tc2V0dGluZyAuaXRlbS1zZXR0aW5nX19zbGlkZXJcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IGp1Z0luZGV4ID0gMDtcclxuICAgICAgY29uc3QgdmFsdWVzID0gWzU1LCAxMCwgMTAsIDEwLCAxMCwgNV07IC8vINCX0L3QsNGH0LXQvdC40Y8g0LTQu9GPINC/0YDQuNGB0LLQvtC10L3QuNGPXHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgICAgICBjb25zdCBlbGVtZW50SnVnID0ganVnc1tqdWddO1xyXG4gICAgICAgICAgaWYgKGp1Z0luZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBlbGVtZW50SnVnLnBlcmNlbnQgPSB2YWx1ZXNbanVnSW5kZXhdOyAvLyDQn9GA0LjRgdCy0L7QtdC90LjQtSDQt9C90LDRh9C10L3QuNGPXHJcbiAgICAgICAgICAgIGp1Z0luZGV4Kys7IC8vINCj0LLQtdC70LjRh9C40LLQsNC10Lwg0LjQvdC00LXQutGBXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB1cGRhdGVTZXR0aW5nKCk7XHJcbiAgICAgIGRpc3BsYXlEYXRhKCk7XHJcblxyXG4gICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uUmVzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCh0LHRgNC+0YEg0LLRgdC10YUg0YHRgNC10LTRgdGC0LJcclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoYC5idXR0b24tcmVzZXQtbW9uZXlgKSkge1xyXG4gICAgICBsZXQgYnV0dG9uUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1yZXNldC1tb25leVwiKTtcclxuICAgICAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuICAgICAgICAgIGp1Z0VsZW1lbnQubW9uZXkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uUmVzZXQpO1xyXG5cclxuICAgICAganVncyA9IEpTT04ucGFyc2UoZ2V0Q29va2llKFwianVnc1wiLCB0cnVlKSk7XHJcbiAgICAgIGRpc3BsYXlEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J/RgNC40LzQtdC90LjRgtGMINC90LDRgdGC0YDQvtC50LrQuFxyXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdChcIi5idXR0b24tYXBwbHlcIikpIHtcclxuICAgICAgY29uc3QgYnV0dG9uQXBwbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1hcHBseVwiKTtcclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCIpO1xyXG4gICAgICBjb25zdCBpdGVtU2V0dGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1zZXR0aW5nXCIpO1xyXG5cclxuICAgICAgbGV0IHRvdGFsU2xpZGVyVmFsdWUgPSAwO1xyXG5cclxuICAgICAgLy8g0JLRi9GH0LjRgdC70Y/QtdC8INGB0YPQvNC80YMg0LfQvdCw0YfQtdC90LjQuSDRgdC70LDQudC00LXRgNC+0LJcclxuICAgICAgc2V0dGluZ1NsaWRlcnMuZm9yRWFjaCgoc2xpZGVyKSA9PiB7XHJcbiAgICAgICAgdG90YWxTbGlkZXJWYWx1ZSArPSBOdW1iZXIoc2xpZGVyLm5vVWlTbGlkZXIuZ2V0KCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0b3RhbFNsaWRlclZhbHVlID09PSAxMDApIHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uQXBwbHkpO1xyXG5cclxuICAgICAgICAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0LfQvdCw0YfQtdC90LjRjyDQsiDQvtCx0YrQtdC60YLQtSBqdWdzXHJcbiAgICAgICAgaXRlbVNldHRpbmcuZm9yRWFjaCgoc2xpZGVyV3JhcHBlcikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc2xpZGVyID0gc2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCIpO1xyXG4gICAgICAgICAgY29uc3Qgc2xpZGVyV3JhcHBlckNsYXNzZXMgPSBBcnJheS5mcm9tKHNsaWRlcldyYXBwZXIuY2xhc3NMaXN0KTtcclxuICAgICAgICAgIGNvbnN0IHNwZWNpZmljQ2xhc3MgPSBzbGlkZXJXcmFwcGVyQ2xhc3Nlcy5maW5kKChjbGFzc05hbWUpID0+XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZS5zdGFydHNXaXRoKFwiaXRlbS1zZXR0aW5nLVwiKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoc3BlY2lmaWNDbGFzcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzcGVjaWZpY0NsYXNzKTsgLy8g0JLRi9Cy0L7QtNC40Lwg0L/QvtC70L3Ri9C5INC60LvQsNGB0YFcclxuICAgICAgICAgICAgY29uc3QgY2xhc3NXaXRob3V0UHJlZml4ID0gc3BlY2lmaWNDbGFzcy5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgIFwiaXRlbS1zZXR0aW5nLVwiLFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaVwiKTtcclxuICAgICAgICAgICAganVnc1tjbGFzc1dpdGhvdXRQcmVmaXhdLnBlcmNlbnQgPSBOdW1iZXIoc2xpZGVyLm5vVWlTbGlkZXIuZ2V0KCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICBganVnc1ske2NsYXNzV2l0aG91dFByZWZpeH1dLnBlcmNlbnQgPSBOdW1iZXIoJHtzbGlkZXIubm9VaVNsaWRlci5nZXQoKX0pYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqdWdzID0gSlNPTi5wYXJzZShnZXRDb29raWUoXCJqdWdzXCIsIHRydWUpKTtcclxuICAgICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVzZXJNZXNzYWdlKFwiZXJyb3JcIiwgYnV0dG9uQXBwbHkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGp1Z3MpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8vINCS0YHQtSDQv9C10YDQtdC80LXQvdC90YvQtVxyXG5sZXQgYW1vdW50ID0gMDtcclxubGV0IGp1Z3MgPSB7XHJcbiAgbW9udGhseToge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiA1NSxcclxuICAgIHRpdGxlOiBcItCV0LbQtdC80LXRgdGP0YfQvdGL0LUg0YLRgNCw0YLRi1wiLFxyXG4gIH0sXHJcbiAgZW50ZXJ0YWlubWVudDoge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiAxMCxcclxuICAgIHRpdGxlOiBcItCg0LDQt9Cy0LvQtdGH0LXQvdC40Y9cIixcclxuICB9LFxyXG4gIHNhdmluZzoge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiAxMCxcclxuICAgIHRpdGxlOiBcItCd0LDQutC+0L/Qu9C10L3QuNGPXCIsXHJcbiAgfSxcclxuICBkZXZlbG9wbWVudDoge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiAxMCxcclxuICAgIHRpdGxlOiBcItCh0LDQvNC+0YDQsNC30LLQuNGC0LjQtVwiLFxyXG4gIH0sXHJcbiAgc2FmZXR5OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0J/QvtC00YPRiNC60LAg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4XCIsXHJcbiAgfSxcclxuICBwcmVzZW50OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDUsXHJcbiAgICB0aXRsZTogXCLQn9C+0LTQsNGA0LrQuFwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5zZXRDb29raWUoXCJqdWdzXCIsIEpTT04uc3RyaW5naWZ5KGp1Z3MpKTtcclxuXHJcbnNldENvb2tpZShcIm5hbWVcIiwganVncyk7XHJcblxyXG5jb25zb2xlLmxvZyhnZXRDb29raWUoXCJuYW1lXCIpKTtcclxuXHJcbi8vINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0LTQsNC90L3Ri9GFINC90LAg0Y3QutGA0LDQvdC1XHJcbmZ1bmN0aW9uIGRpc3BsYXlEYXRhKCkge1xyXG4gIC8vINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0LrRg9Cy0YjQuNC90L7QslxyXG4gIGxldCBqdWdzSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmp1Z3NfX2l0ZW1zXCIpO1xyXG4gIGp1Z3NJdGVtcy5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuXHJcbiAgICAgIGxldCBpdGVtID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdWdzX19pdGVtIGl0ZW0tanVncyBpdGVtLWp1Z3MtJHtqdWd9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWp1Z3NfX3RpdGxlXCI+JHtqdWdFbGVtZW50LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIml0ZW0tanVnc19faW1nXCIgc3JjPVwiaW1nL2ljb24vamFyLnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktdG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS10b3AtcGVyY2VudFwiPiR7anVnRWxlbWVudC5wZXJjZW50fSU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LWJvdHRvbS10ZXh0XCI+0L7RgdGC0LDQu9C+0YHRjDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnI+PHNwYW4gY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktYm90dG9tLW1vbmV5XCI+JHtqdWdFbGVtZW50Lm1vbmV5fSBwLjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcblxyXG4gICAgICBqdWdzSXRlbXMuaW5uZXJIVE1MICs9IGl0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByYW5nZUluaXQoKTtcclxuICBqdWdzID0gSlNPTi5wYXJzZShnZXRDb29raWUoXCJqdWdzXCIsIHRydWUpKTtcclxufVxyXG5kaXNwbGF5RGF0YSgpO1xyXG5cclxuLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQvdCw0YHRgtGA0L7QtdC6XHJcbmZ1bmN0aW9uIHJhbmdlSW5pdCgpIHtcclxuICBjb25zdCBzZXR0aW5nTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ19fbGlzdFwiKTtcclxuICBzZXR0aW5nTGlzdC5pbm5lckhUTUwgPSBcIlwiOyAvLyDQntGH0LjRidCw0LXQvCDQv9GA0LXQtNGL0LTRg9GJ0LjQuSDQutC+0L3RgtC10L3RglxyXG5cclxuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTsgLy8g0KHQvtC30LTQsNC10Lwg0LLRgNC10LzQtdC90L3Ri9C5INGE0YDQsNCz0LzQtdC90YIg0LTQu9GPINGD0LvRg9GH0YjQtdC90L3QvtC5INC/0YDQvtC40LfQstC+0LTQuNGC0LXQu9GM0L3QvtGB0YLQuFxyXG5cclxuICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuXHJcbiAgICAgIC8vINCh0L7Qt9C00LDQtdC8INGN0LvQtdC80LXQvdGCINGB0L/QuNGB0LrQsFxyXG4gICAgICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgaXRlbUVsZW1lbnQuY2xhc3NOYW1lID0gYG1lbnVfX2l0ZW0gc2V0dGluZ19faXRlbSBpdGVtLXNldHRpbmcgaXRlbS1zZXR0aW5nLSR7anVnfWA7XHJcblxyXG4gICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0YHQvtC00LXRgNC20LjQvNC+0LUg0LIg0L3QvtCy0YvQuSDRjdC70LXQvNC10L3RglxyXG4gICAgICBpdGVtRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tc2V0dGluZ19fdGl0bGVcIj4ke2p1Z0VsZW1lbnQudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tc2V0dGluZ19fc2xpZGVyIFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXNldHRpbmdfX3ZhbHVlXCI+0JfQvdCw0YfQtdC90LjQtTogPHNwYW4+JHtqdWdFbGVtZW50LnBlcmNlbnR9JTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRjdC70LXQvNC10L3RgiDQsiDRhNGA0LDQs9C80LXQvdGCXHJcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGl0ZW1FbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiyDQt9CwINC+0LTQuNC9INGA0LDQtyDQsiBET01cclxuICBzZXR0aW5nTGlzdC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcblxyXG4gIC8vINCY0L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0YHQu9Cw0LnQtNC10YDRi1xyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG5cclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGAuaXRlbS1zZXR0aW5nLSR7anVnfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlciA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyVmFsdWUgPSBzZXR0aW5nU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLml0ZW0tc2V0dGluZ19fdmFsdWUgc3BhblwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNldHRpbmdTbGlkZXIpO1xyXG5cclxuICAgICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8gbm9VaVNsaWRlclxyXG4gICAgICBub1VpU2xpZGVyLmNyZWF0ZShzZXR0aW5nU2xpZGVyLCB7XHJcbiAgICAgICAgc3RhcnQ6IFtqdWdFbGVtZW50LnBlcmNlbnRdLFxyXG4gICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgIG1pbjogWzBdLFxyXG4gICAgICAgICAgbWF4OiBbMTAwXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vINCe0LHQvdC+0LLQu9C10L3QuNC1INC30L3QsNGH0LXQvdC40Y8g0L/RgNC4INC40LfQvNC10L3QtdC90LjQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIHNldHRpbmdTbGlkZXIubm9VaVNsaWRlci5vbihcInVwZGF0ZVwiLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgICBzZXR0aW5nU2xpZGVyVmFsdWUuaW5uZXJIVE1MID0gYCR7TnVtYmVyKHZhbHVlc1toYW5kbGVdKS50b0ZpeGVkKDApfSVgO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxucmFuZ2VJbml0KCk7XHJcblxyXG4vLyDQntCx0L3QvtCy0LvQtdC90LjQtSDQvdCw0YHRgtGA0L7QtdC6XHJcbmZ1bmN0aW9uIHVwZGF0ZVNldHRpbmcoKSB7XHJcbiAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDRgdC70LDQudC00LXRgNGLXHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcblxyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYC5pdGVtLXNldHRpbmctJHtqdWd9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiXHJcbiAgICAgICk7XHJcbiAgICAgIHNldHRpbmdTbGlkZXIubm9VaVNsaWRlci5zZXQoW2p1Z0VsZW1lbnQucGVyY2VudF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAganVncyA9IEpTT04ucGFyc2UoZ2V0Q29va2llKFwianVnc1wiLCB0cnVlKSk7XHJcbn1cclxuXHJcbi8vINCe0YLQstC10YIg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GOXHJcbmZ1bmN0aW9uIHVzZXJNZXNzYWdlKHRleHQsIGVsZW1lbnQpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJnb29kXCIsIFwiZXJyb3JcIik7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGV4dCk7XHJcbiAgfSwgMCk7XHJcbn1cclxuXHJcbi8vINGA0LDRgdGH0LXRgiDRgdGA0LXQtNGB0YIg0LzQtdC20LTRgyDQutGD0LLRiNC40L3QsNC80LhcclxuZnVuY3Rpb24gY2FsY3VsYXRpb25KdWdzKCkge1xyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG4gICAgICBqdWdFbGVtZW50Lm1vbmV5ICs9IGFtb3VudCAqIChqdWdFbGVtZW50LnBlcmNlbnQgLyAxMDApO1xyXG4gICAgICAvLyDQntCz0YDQsNC90LjRh9C40LLQsNC10Lwg0LrQvtC70LjRh9C10YHRgtCy0L4g0YbQuNGE0YAg0L/QvtGB0LvQtSDQt9Cw0L/Rj9GC0L7QuSDQtNC+IDJcclxuICAgICAganVnRWxlbWVudC5tb25leSA9IHBhcnNlRmxvYXQoanVnRWxlbWVudC5tb25leS50b0ZpeGVkKDIpKTtcclxuICAgICAgY29uc29sZS5sb2coanVnRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFtb3VudCA9IDA7XHJcbiAgZGlzcGxheURhdGEoKTsgLy8g0YTRg9C90LrRhtC40Y8g0LTQu9GPINCy0YvQstC+0LTQsCDQtNCw0L3QvdGL0YUg0L3QsCDRjdC60YDQsNC9XHJcbiAgY29uc29sZS5sb2coanVncyk7XHJcbn1cclxuXHJcbi8vINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0YTQvtGA0LxcclxuZnVuY3Rpb24gZ2V0SW5mb0Zvcm0oZm9ybSkge1xyXG4gIGZvcm0ucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgZm9ybUluZm8gPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGZvcm0udGFyZ2V0KS5lbnRyaWVzKCkpO1xyXG4gIGNvbnNvbGUubG9nKGZvcm1JbmZvLCBmb3JtLnN1Ym1pdHRlcik7XHJcblxyXG4gIGRhdGFQcm9jZXNzaW5nKGZvcm1JbmZvLCBmb3JtLnN1Ym1pdHRlcik7XHJcbn1cclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0LrQsCDQtNCw0L3QvdGL0YVcclxuZnVuY3Rpb24gZGF0YVByb2Nlc3NpbmcoZm9ybUluZm8sIGJ1dHRvbikge1xyXG4gIC8vINCS0L3QvtGBINGB0YDQtdC00YHRglxyXG4gIGlmIChcIm1vbmV5SW5wdXRcIiBpbiBmb3JtSW5mbykge1xyXG4gICAgZm9ybUluZm8ubW9uZXlJbnB1dCA9IE51bWJlcihmb3JtSW5mby5tb25leUlucHV0KTtcclxuICAgIGlmIChmb3JtSW5mby5qdWdzID09IFwidW5zcGVjaWZpZWRcIikge1xyXG4gICAgICBpZiAoTnVtYmVyKGZvcm1JbmZvLm1vbmV5SW5wdXQpID49IDEwMCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbik7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgYW1vdW50ICs9IGZvcm1JbmZvLm1vbmV5SW5wdXQ7XHJcbiAgICAgICAgY2FsY3VsYXRpb25KdWdzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLQntCx0YnQsNGPINGB0YPQvNC80LAg0LzQtdC90LXQtSAxMDDRgNGD0LFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB1c2VyTWVzc2FnZShcImVycm9yXCIsIGJ1dHRvbik7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZm9ybUluZm8uanVncykge1xyXG4gICAgICBjb25zb2xlLmxvZyhqdWdzW2Zvcm1JbmZvLmp1Z3NdKTtcclxuXHJcbiAgICAgIGp1Z3NbZm9ybUluZm8uanVnc10ubW9uZXkgKz0gZm9ybUluZm8ubW9uZXlJbnB1dDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLQmtGD0LLRiNC40L0g0L3QtSDQvdCw0LnQtNC10L1cIik7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b24pO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCS0YvQvdC+0YEg0YHRgNC10LTRgdGC0LJcclxuICBpZiAoXCJtb25leU91dHB1dFwiIGluIGZvcm1JbmZvKSB7XHJcbiAgICBmb3JtSW5mby5tb25leU91dHB1dCA9IE51bWJlcihmb3JtSW5mby5tb25leU91dHB1dCk7XHJcblxyXG4gICAgaWYgKGp1Z3NbZm9ybUluZm8uanVnc10ubW9uZXkgPj0gZm9ybUluZm8ubW9uZXlPdXRwdXQpIHtcclxuICAgICAganVnc1tmb3JtSW5mby5qdWdzXS5tb25leSAtPSBmb3JtSW5mby5tb25leU91dHB1dDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b24pO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L/RgNC4INCy0L3QvtGB0LUg0YHRgNC10LTRgdGC0LJcclxubGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9uZXktZm9ybS1pbnB1dFwiKTtcclxuZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5mb0Zvcm0pO1xyXG5cclxubGV0IGZvcm1PdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vbmV5LWZvcm0tb3V0cHV0XCIpO1xyXG5mb3JtT3V0cHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5mb0Zvcm0pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MGQ1NWJkYzE0MDk4NzU0M2U0YVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==