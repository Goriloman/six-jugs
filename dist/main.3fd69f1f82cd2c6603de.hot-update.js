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
            const classWithoutPrefix = specificClass.replace(
              "item-setting-",
              ""
            );
            jugs[classWithoutPrefix].percent = Number(slider.noUiSlider.get());
          }
        });

        displayData();
      } else {
        userMessage("error", buttonApply);
      }
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
let history = {
  "23/3": ["-89", "+1000"],
  "23/2": ["-89", "+1000"],
  "23/1": ["-89", "+1000"],
};

if (getCookie("jugs")) {
  jugs = getCookie("jugs", true);
}
if (getCookie("history")) {
  history = getCookie("history", true);
}

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

  // Отображение настроек
  rangeInit();
  historyInit();
  setCookie("jugs", jugs);
}
displayData();

// Отображение настроек
function rangeInit() {
  const settingCounter = document.querySelector(".setting__counter span");
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

  let itemSettingSliders = document.querySelectorAll(".item-setting__slider");
  itemSettingSliders.forEach((slider) => {
    slider.noUiSlider.on("update", updateSum);
  });

  function updateSum() {
    let totalSum = Array.from(itemSettingSliders).reduce((sum, slider) => {
      return sum + Number(slider.noUiSlider.get());
    }, 0);

    settingCounter.innerHTML = totalSum;
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

  setCookie("jugs", jugs);
}

// Отображение истории
function historyInit() {
  const today = new Date();
  const dataToday = `${today.getDate()}/${today.getMonth() + 1}`;
  const historyList = document.querySelector(".history__list");
  const fragment = document.createDocumentFragment();

  // Перебор объекта истории
  for (const date in history) {
    if (Object.prototype.hasOwnProperty.call(history, date)) {
      const elements = history[date];
      const historyDataLabel = date == dataToday ? "Сегодня" : date;

      // Создание элементов для истории
      log;
      const historyItems = elements
        .map(function (item) {
          let res = item[0] == "+" ? "expense" : "income";
          `<div class="item-history__element ${res}">${item}</div>`;
        })
        .join("");

      // Формирование HTML-контейнера для списка истории
      const historyItemHTML = `
          <div class="item-history__data">${historyDataLabel}</div>
          <div class="item-history__body">
            ${historyItems}
          </div>
      `;

      // Добавляем элемент в фрагмент
      const tempLi = document.createElement("li"); // Временный элемент для парсинга HTML
      tempLi.classList.add("history__item", "item-history");
      tempLi.innerHTML = historyItemHTML;

      fragment.appendChild(tempLi);
    }
  }

  // Добавляем все элементы за один раз в DOM
  historyList.appendChild(fragment);
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
    }
  }
  amount = 0;
  displayData(); // функция для вывода данных на экран
}

// Получение данных форм
function getInfoForm(form) {
  form.preventDefault();
  let formInfo = Object.fromEntries(new FormData(form.target).entries());

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
        setTimeout(() => {
          userMessage("error", button);
        }, 0);
      }
    } else if (formInfo.jugs) {
      jugs[formInfo.jugs].money += formInfo.moneyInput;
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
/******/ 	__webpack_require__.h = () => ("04b0bc06cf435a947a4b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDcGVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2ZpbGVzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YTRg9C90LrRhtC40L7QvdCw0LvQsCBcItCn0LXRgNGC0L7Qs9C+0LIg0KTRgNC40LvQsNC90YHQtdGA0LBcIlxyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xyXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0L/QuNGB0LrQsCDQsNC60YLQuNCy0L3Ri9GFINC80L7QtNGD0LvQtdC5XHJcbmltcG9ydCB7IGZsc01vZHVsZXMgfSBmcm9tIFwiLi9tb2R1bGVzLmpzXCI7XHJcbmltcG9ydCAqIGFzIG5vVWlTbGlkZXIgZnJvbSBcIm5vdWlzbGlkZXJcIjtcclxuXHJcbi8vIENvb2tpZSBqc1xyXG5mdW5jdGlvbiBnZXRDb29raWUobmFtZSwganNvbiA9IGZhbHNlKSB7XHJcbiAgaWYgKCFuYW1lKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuICAvKlxyXG4gIFJldHVybnMgY29va2llIHdpdGggc3BlY2lmaWVkIG5hbWUgKHN0cikgaWYgZXhpc3RzLCBlbHNlIC0gdW5kZWZpbmVkXHJcbiAgaWYgcmV0dXJuaW5nIHZhbHVlIGlzIEpTT04gYW5kIGpzb24gcGFyYW1ldGVyIGlzIHRydWUsIHJldHVybnMganNvbiwgb3RoZXJ3aXNlIHN0clxyXG4gICovXHJcbiAgbGV0IG1hdGNoZXMgPSBkb2N1bWVudC5jb29raWUubWF0Y2goXHJcbiAgICBuZXcgUmVnRXhwKFxyXG4gICAgICBcIig/Ol58OyApXCIgKyBuYW1lLnJlcGxhY2UoLyhbLiQ/Knx7fSgpXFxbXFxdXFxcXFxcLyteXSkvZywgXCJcXFxcJDFcIikgKyBcIj0oW147XSopXCJcclxuICAgIClcclxuICApO1xyXG4gIGlmIChtYXRjaGVzKSB7XHJcbiAgICBsZXQgcmVzID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pO1xyXG4gICAgaWYgKGpzb24pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXMpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuZnVuY3Rpb24gc2V0Q29va2llKG5hbWUsIHZhbHVlLCBvcHRpb25zID0geyBwYXRoOiBcIi9cIiB9KSB7XHJcbiAgLypcclxuICBTZXRzIGEgY29va2llIHdpdGggc3BlY2lmaWVkIG5hbWUgKHN0ciksIHZhbHVlIChzdHIpICYgb3B0aW9ucyAoZGljdClcclxuXHJcbiAgb3B0aW9ucyBrZXlzOlxyXG4gICAgLSBwYXRoIChzdHIpIC0gVVJMLCBmb3Igd2hpY2ggdGhpcyBjb29raWUgaXMgYXZhaWxhYmxlIChtdXN0IGJlIGFic29sdXRlISlcclxuICAgIC0gZG9tYWluIChzdHIpIC0gZG9tYWluLCBmb3Igd2hpY2ggdGhpcyBjb29raWUgaXMgYXZhaWxhYmxlXHJcbiAgICAtIGV4cGlyZXMgKERhdGUgb2JqZWN0KSAtIGV4cGlyYXRpb24gZGF0ZSZ0aW1lIG9mIGNvb2tpZVxyXG4gICAgLSBtYXgtYWdlIChpbnQpIC0gY29va2llIGxpZmV0aW1lIGluIHNlY29uZHMgKGFsdGVybmF0aXZlIGZvciBleHBpcmVzIG9wdGlvbilcclxuICAgIC0gc2VjdXJlIChib29sKSAtIGlmIHRydWUsIGNvb2tpZSB3aWxsIGJlIGF2YWlsYWJsZSBvbmx5IGZvciBIVFRQUy5cclxuICAgICAgICAgICAgICAgICAgICAgIElUIENBTidUIEJFIEZBTFNFXHJcbiAgICAtIHNhbWVzaXRlIChzdHIpIC0gWFNSRiBwcm90ZWN0aW9uIHNldHRpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgQ2FuIGJlIHN0cmljdCBvciBsYXhcclxuICAgICAgICAgICAgICAgICAgICAgICBSZWFkIGh0dHBzOi8vd2ViLmRldi9zYW1lc2l0ZS1jb29raWVzLWV4cGxhaW5lZC8gZm9yIGRldGFpbHNcclxuICAgIC0gaHR0cE9ubHkgKGJvb2wpIC0gaWYgdHJ1ZSwgY29va2llIHdvbid0IGJlIGF2YWlsYWJsZSBmb3IgdXNpbmcgaW4gSmF2YVNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJVCBDQU4nVCBCRSBGQUxTRVxyXG4gICovXHJcbiAgaWYgKCFuYW1lKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgaWYgKG9wdGlvbnMuZXhwaXJlcyBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgIG9wdGlvbnMuZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICB9XHJcbiAgbGV0IHVwZGF0ZWRDb29raWUgPVxyXG4gICAgZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gIGZvciAobGV0IG9wdGlvbktleSBpbiBvcHRpb25zKSB7XHJcbiAgICB1cGRhdGVkQ29va2llICs9IFwiOyBcIiArIG9wdGlvbktleTtcclxuICAgIGxldCBvcHRpb25WYWx1ZSA9IG9wdGlvbnNbb3B0aW9uS2V5XTtcclxuICAgIGlmIChvcHRpb25WYWx1ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICB1cGRhdGVkQ29va2llICs9IFwiPVwiICsgb3B0aW9uVmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlQ29va2llKG5hbWUpIHtcclxuICAvKlxyXG4gIERlbGV0ZXMgYSBjb29raWUgd2l0aCBzcGVjaWZpZWQgbmFtZS5cclxuICBSZXR1cm5zIHRydWUgd2hlbiBjb29raWUgd2FzIHN1Y2Nlc3NmdWxseSBkZWxldGVkLCBvdGhlcndpc2UgZmFsc2VcclxuICAqL1xyXG4gIHNldENvb2tpZShuYW1lLCBudWxsLCB7XHJcbiAgICBleHBpcmVzOiBuZXcgRGF0ZSgpLFxyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8g0JvQvtCz0LjQutCwINC/0YDQuNC70L7QttC10L3QuNGPXHJcblxyXG4vLyDQlNC10LnRgdGC0LLQuNGPINC/0YDQuCDQutC70LjQutC1XHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudEFjdGlvbnMpO1xyXG5cclxuICBmdW5jdGlvbiBkb2N1bWVudEFjdGlvbnMoZSkge1xyXG4gICAgbGV0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAvLyDQodCx0YDQvtGBINC30L3QsNGH0LXQvdC40Lkg0L3QsNGB0YLRgNC+0LXQulxyXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdChgLmJ1dHRvbi1yZXNldGApKSB7XHJcbiAgICAgIGxldCBidXR0b25SZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXJlc2V0XCIpO1xyXG4gICAgICBsZXQgc2V0dGluZ1NsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLml0ZW0tc2V0dGluZyAuaXRlbS1zZXR0aW5nX19zbGlkZXJcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IGp1Z0luZGV4ID0gMDtcclxuICAgICAgY29uc3QgdmFsdWVzID0gWzU1LCAxMCwgMTAsIDEwLCAxMCwgNV07IC8vINCX0L3QsNGH0LXQvdC40Y8g0LTQu9GPINC/0YDQuNGB0LLQvtC10L3QuNGPXHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgICAgICBjb25zdCBlbGVtZW50SnVnID0ganVnc1tqdWddO1xyXG4gICAgICAgICAgaWYgKGp1Z0luZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBlbGVtZW50SnVnLnBlcmNlbnQgPSB2YWx1ZXNbanVnSW5kZXhdOyAvLyDQn9GA0LjRgdCy0L7QtdC90LjQtSDQt9C90LDRh9C10L3QuNGPXHJcbiAgICAgICAgICAgIGp1Z0luZGV4Kys7IC8vINCj0LLQtdC70LjRh9C40LLQsNC10Lwg0LjQvdC00LXQutGBXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB1cGRhdGVTZXR0aW5nKCk7XHJcbiAgICAgIGRpc3BsYXlEYXRhKCk7XHJcblxyXG4gICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uUmVzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCh0LHRgNC+0YEg0LLRgdC10YUg0YHRgNC10LTRgdGC0LJcclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoYC5idXR0b24tcmVzZXQtbW9uZXlgKSkge1xyXG4gICAgICBsZXQgYnV0dG9uUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1yZXNldC1tb25leVwiKTtcclxuICAgICAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuICAgICAgICAgIGp1Z0VsZW1lbnQubW9uZXkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uUmVzZXQpO1xyXG5cclxuICAgICAgZGlzcGxheURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQn9GA0LjQvNC10L3QuNGC0Ywg0L3QsNGB0YLRgNC+0LnQutC4XHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KFwiLmJ1dHRvbi1hcHBseVwiKSkge1xyXG4gICAgICBjb25zdCBidXR0b25BcHBseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWFwcGx5XCIpO1xyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIik7XHJcbiAgICAgIGNvbnN0IGl0ZW1TZXR0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLXNldHRpbmdcIik7XHJcblxyXG4gICAgICBsZXQgdG90YWxTbGlkZXJWYWx1ZSA9IDA7XHJcblxyXG4gICAgICAvLyDQktGL0YfQuNGB0LvRj9C10Lwg0YHRg9C80LzRgyDQt9C90LDRh9C10L3QuNC5INGB0LvQsNC50LTQtdGA0L7QslxyXG4gICAgICBzZXR0aW5nU2xpZGVycy5mb3JFYWNoKChzbGlkZXIpID0+IHtcclxuICAgICAgICB0b3RhbFNsaWRlclZhbHVlICs9IE51bWJlcihzbGlkZXIubm9VaVNsaWRlci5nZXQoKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRvdGFsU2xpZGVyVmFsdWUgPT09IDEwMCkge1xyXG4gICAgICAgIHVzZXJNZXNzYWdlKFwiZ29vZFwiLCBidXR0b25BcHBseSk7XHJcblxyXG4gICAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQt9C90LDRh9C10L3QuNGPINCyINC+0LHRitC10LrRgtC1IGp1Z3NcclxuICAgICAgICBpdGVtU2V0dGluZy5mb3JFYWNoKChzbGlkZXJXcmFwcGVyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzbGlkZXIgPSBzbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIik7XHJcbiAgICAgICAgICBjb25zdCBzbGlkZXJXcmFwcGVyQ2xhc3NlcyA9IEFycmF5LmZyb20oc2xpZGVyV3JhcHBlci5jbGFzc0xpc3QpO1xyXG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNDbGFzcyA9IHNsaWRlcldyYXBwZXJDbGFzc2VzLmZpbmQoKGNsYXNzTmFtZSkgPT5cclxuICAgICAgICAgICAgY2xhc3NOYW1lLnN0YXJ0c1dpdGgoXCJpdGVtLXNldHRpbmctXCIpXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmIChzcGVjaWZpY0NsYXNzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzV2l0aG91dFByZWZpeCA9IHNwZWNpZmljQ2xhc3MucmVwbGFjZShcclxuICAgICAgICAgICAgICBcIml0ZW0tc2V0dGluZy1cIixcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGp1Z3NbY2xhc3NXaXRob3V0UHJlZml4XS5wZXJjZW50ID0gTnVtYmVyKHNsaWRlci5ub1VpU2xpZGVyLmdldCgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGlzcGxheURhdGEoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImVycm9yXCIsIGJ1dHRvbkFwcGx5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8vINCS0YHQtSDQv9C10YDQtdC80LXQvdC90YvQtVxyXG5sZXQgYW1vdW50ID0gMDtcclxubGV0IGp1Z3MgPSB7XHJcbiAgbW9udGhseToge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiA1NSxcclxuICAgIHRpdGxlOiBcItCV0LbQtdC80LXRgdGP0YfQvdGL0LUg0YLRgNCw0YLRi1wiLFxyXG4gIH0sXHJcbiAgZW50ZXJ0YWlubWVudDoge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiAxMCxcclxuICAgIHRpdGxlOiBcItCg0LDQt9Cy0LvQtdGH0LXQvdC40Y9cIixcclxuICB9LFxyXG4gIHNhdmluZzoge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiAxMCxcclxuICAgIHRpdGxlOiBcItCd0LDQutC+0L/Qu9C10L3QuNGPXCIsXHJcbiAgfSxcclxuICBkZXZlbG9wbWVudDoge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiAxMCxcclxuICAgIHRpdGxlOiBcItCh0LDQvNC+0YDQsNC30LLQuNGC0LjQtVwiLFxyXG4gIH0sXHJcbiAgc2FmZXR5OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0J/QvtC00YPRiNC60LAg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4XCIsXHJcbiAgfSxcclxuICBwcmVzZW50OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDUsXHJcbiAgICB0aXRsZTogXCLQn9C+0LTQsNGA0LrQuFwiLFxyXG4gIH0sXHJcbn07XHJcbmxldCBoaXN0b3J5ID0ge1xyXG4gIFwiMjMvM1wiOiBbXCItODlcIiwgXCIrMTAwMFwiXSxcclxuICBcIjIzLzJcIjogW1wiLTg5XCIsIFwiKzEwMDBcIl0sXHJcbiAgXCIyMy8xXCI6IFtcIi04OVwiLCBcIisxMDAwXCJdLFxyXG59O1xyXG5cclxuaWYgKGdldENvb2tpZShcImp1Z3NcIikpIHtcclxuICBqdWdzID0gZ2V0Q29va2llKFwianVnc1wiLCB0cnVlKTtcclxufVxyXG5pZiAoZ2V0Q29va2llKFwiaGlzdG9yeVwiKSkge1xyXG4gIGhpc3RvcnkgPSBnZXRDb29raWUoXCJoaXN0b3J5XCIsIHRydWUpO1xyXG59XHJcblxyXG4vLyDQntGC0L7QsdGA0LDQttC10L3QuNC1INC00LDQvdC90YvRhSDQvdCwINGN0LrRgNCw0L3QtVxyXG5mdW5jdGlvbiBkaXNwbGF5RGF0YSgpIHtcclxuICAvLyDQntGC0L7QsdGA0LDQttC10L3QuNC1INC60YPQstGI0LjQvdC+0LJcclxuICBsZXQganVnc0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qdWdzX19pdGVtc1wiKTtcclxuICBqdWdzSXRlbXMuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcblxyXG4gICAgICBsZXQgaXRlbSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwianVnc19faXRlbSBpdGVtLWp1Z3MgaXRlbS1qdWdzLSR7anVnfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1qdWdzX190aXRsZVwiPiR7anVnRWxlbWVudC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tanVnc19fYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpdGVtLWp1Z3NfX2ltZ1wiIHNyYz1cImltZy9pY29uL2phci5zdmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktdG9wLXBlcmNlbnRcIj4ke2p1Z0VsZW1lbnQucGVyY2VudH0lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS1ib3R0b20tdGV4dFwiPtC+0YHRgtCw0LvQvtGB0Yw6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJyPjxzcGFuIGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LWJvdHRvbS1tb25leVwiPiR7anVnRWxlbWVudC5tb25leX0gcC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG5cclxuICAgICAganVnc0l0ZW1zLmlubmVySFRNTCArPSBpdGVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQvdCw0YHRgtGA0L7QtdC6XHJcbiAgcmFuZ2VJbml0KCk7XHJcbiAgaGlzdG9yeUluaXQoKTtcclxuICBzZXRDb29raWUoXCJqdWdzXCIsIGp1Z3MpO1xyXG59XHJcbmRpc3BsYXlEYXRhKCk7XHJcblxyXG4vLyDQntGC0L7QsdGA0LDQttC10L3QuNC1INC90LDRgdGC0YDQvtC10LpcclxuZnVuY3Rpb24gcmFuZ2VJbml0KCkge1xyXG4gIGNvbnN0IHNldHRpbmdDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXR0aW5nX19jb3VudGVyIHNwYW5cIik7XHJcbiAgY29uc3Qgc2V0dGluZ0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdfX2xpc3RcIik7XHJcbiAgc2V0dGluZ0xpc3QuaW5uZXJIVE1MID0gXCJcIjsgLy8g0J7Rh9C40YnQsNC10Lwg0L/RgNC10LTRi9C00YPRidC40Lkg0LrQvtC90YLQtdC90YJcclxuXHJcbiAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7IC8vINCh0L7Qt9C00LDQtdC8INCy0YDQtdC80LXQvdC90YvQuSDRhNGA0LDQs9C80LXQvdGCINC00LvRjyDRg9C70YPRh9GI0LXQvdC90L7QuSDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjNC90L7RgdGC0LhcclxuXHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcblxyXG4gICAgICAvLyDQodC+0LfQtNCw0LXQvCDRjdC70LXQvNC10L3RgiDRgdC/0LjRgdC60LBcclxuICAgICAgY29uc3QgaXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGl0ZW1FbGVtZW50LmNsYXNzTmFtZSA9IGBtZW51X19pdGVtIHNldHRpbmdfX2l0ZW0gaXRlbS1zZXR0aW5nIGl0ZW0tc2V0dGluZy0ke2p1Z31gO1xyXG5cclxuICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGB0L7QtNC10YDQttC40LzQvtC1INCyINC90L7QstGL0Lkg0Y3Qu9C10LzQtdC90YJcclxuICAgICAgaXRlbUVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXNldHRpbmdfX3RpdGxlXCI+JHtqdWdFbGVtZW50LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXNldHRpbmdfX3NsaWRlciBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1zZXR0aW5nX192YWx1ZVwiPtCX0L3QsNGH0LXQvdC40LU6IDxzcGFuPiR7anVnRWxlbWVudC5wZXJjZW50fSU8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0Y3Qu9C10LzQtdC90YIg0LIg0YTRgNCw0LPQvNC10L3RglxyXG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpdGVtRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0LLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0LfQsCDQvtC00LjQvSDRgNCw0Lcg0LIgRE9NXHJcbiAgc2V0dGluZ0xpc3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG5cclxuICAvLyDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INGB0LvQsNC50LTQtdGA0YtcclxuICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuXHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgLml0ZW0tc2V0dGluZy0ke2p1Z31gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXIgPSBzZXR0aW5nU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlclZhbHVlID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5pdGVtLXNldHRpbmdfX3ZhbHVlIHNwYW5cIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8gbm9VaVNsaWRlclxyXG4gICAgICBub1VpU2xpZGVyLmNyZWF0ZShzZXR0aW5nU2xpZGVyLCB7XHJcbiAgICAgICAgc3RhcnQ6IFtqdWdFbGVtZW50LnBlcmNlbnRdLFxyXG4gICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgIG1pbjogWzBdLFxyXG4gICAgICAgICAgbWF4OiBbMTAwXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vINCe0LHQvdC+0LLQu9C10L3QuNC1INC30L3QsNGH0LXQvdC40Y8g0L/RgNC4INC40LfQvNC10L3QtdC90LjQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIHNldHRpbmdTbGlkZXIubm9VaVNsaWRlci5vbihcInVwZGF0ZVwiLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgICBzZXR0aW5nU2xpZGVyVmFsdWUuaW5uZXJIVE1MID0gYCR7TnVtYmVyKHZhbHVlc1toYW5kbGVdKS50b0ZpeGVkKDApfSVgO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBpdGVtU2V0dGluZ1NsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCIpO1xyXG4gIGl0ZW1TZXR0aW5nU2xpZGVycy5mb3JFYWNoKChzbGlkZXIpID0+IHtcclxuICAgIHNsaWRlci5ub1VpU2xpZGVyLm9uKFwidXBkYXRlXCIsIHVwZGF0ZVN1bSk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVN1bSgpIHtcclxuICAgIGxldCB0b3RhbFN1bSA9IEFycmF5LmZyb20oaXRlbVNldHRpbmdTbGlkZXJzKS5yZWR1Y2UoKHN1bSwgc2xpZGVyKSA9PiB7XHJcbiAgICAgIHJldHVybiBzdW0gKyBOdW1iZXIoc2xpZGVyLm5vVWlTbGlkZXIuZ2V0KCkpO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgc2V0dGluZ0NvdW50ZXIuaW5uZXJIVE1MID0gdG90YWxTdW07XHJcbiAgfVxyXG59XHJcbnJhbmdlSW5pdCgpO1xyXG5cclxuLy8g0J7QsdC90L7QstC70LXQvdC40LUg0L3QsNGB0YLRgNC+0LXQulxyXG5mdW5jdGlvbiB1cGRhdGVTZXR0aW5nKCkge1xyXG4gIC8vINCY0L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0YHQu9Cw0LnQtNC10YDRi1xyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG5cclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGAuaXRlbS1zZXR0aW5nLSR7anVnfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlciA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIlxyXG4gICAgICApO1xyXG4gICAgICBzZXR0aW5nU2xpZGVyLm5vVWlTbGlkZXIuc2V0KFtqdWdFbGVtZW50LnBlcmNlbnRdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENvb2tpZShcImp1Z3NcIiwganVncyk7XHJcbn1cclxuXHJcbi8vINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0LjRgdGC0L7RgNC40LhcclxuZnVuY3Rpb24gaGlzdG9yeUluaXQoKSB7XHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGRhdGFUb2RheSA9IGAke3RvZGF5LmdldERhdGUoKX0vJHt0b2RheS5nZXRNb250aCgpICsgMX1gO1xyXG4gIGNvbnN0IGhpc3RvcnlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5X19saXN0XCIpO1xyXG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAvLyDQn9C10YDQtdCx0L7RgCDQvtCx0YrQtdC60YLQsCDQuNGB0YLQvtGA0LjQuFxyXG4gIGZvciAoY29uc3QgZGF0ZSBpbiBoaXN0b3J5KSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhpc3RvcnksIGRhdGUpKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gaGlzdG9yeVtkYXRlXTtcclxuICAgICAgY29uc3QgaGlzdG9yeURhdGFMYWJlbCA9IGRhdGUgPT0gZGF0YVRvZGF5ID8gXCLQodC10LPQvtC00L3Rj1wiIDogZGF0ZTtcclxuXHJcbiAgICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0Y3Qu9C10LzQtdC90YLQvtCyINC00LvRjyDQuNGB0YLQvtGA0LjQuFxyXG4gICAgICBsb2c7XHJcbiAgICAgIGNvbnN0IGhpc3RvcnlJdGVtcyA9IGVsZW1lbnRzXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgbGV0IHJlcyA9IGl0ZW1bMF0gPT0gXCIrXCIgPyBcImV4cGVuc2VcIiA6IFwiaW5jb21lXCI7XHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cIml0ZW0taGlzdG9yeV9fZWxlbWVudCAke3Jlc31cIj4ke2l0ZW19PC9kaXY+YDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgLy8g0KTQvtGA0LzQuNGA0L7QstCw0L3QuNC1IEhUTUwt0LrQvtC90YLQtdC50L3QtdGA0LAg0LTQu9GPINGB0L/QuNGB0LrQsCDQuNGB0YLQvtGA0LjQuFxyXG4gICAgICBjb25zdCBoaXN0b3J5SXRlbUhUTUwgPSBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1oaXN0b3J5X19kYXRhXCI+JHtoaXN0b3J5RGF0YUxhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0taGlzdG9yeV9fYm9keVwiPlxyXG4gICAgICAgICAgICAke2hpc3RvcnlJdGVtc31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGN0LvQtdC80LXQvdGCINCyINGE0YDQsNCz0LzQtdC90YJcclxuICAgICAgY29uc3QgdGVtcExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpOyAvLyDQktGA0LXQvNC10L3QvdGL0Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINC/0LDRgNGB0LjQvdCz0LAgSFRNTFxyXG4gICAgICB0ZW1wTGkuY2xhc3NMaXN0LmFkZChcImhpc3RvcnlfX2l0ZW1cIiwgXCJpdGVtLWhpc3RvcnlcIik7XHJcbiAgICAgIHRlbXBMaS5pbm5lckhUTUwgPSBoaXN0b3J5SXRlbUhUTUw7XHJcblxyXG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0ZW1wTGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INCy0YHQtSDRjdC70LXQvNC10L3RgtGLINC30LAg0L7QtNC40L0g0YDQsNC3INCyIERPTVxyXG4gIGhpc3RvcnlMaXN0LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxufVxyXG5cclxuLy8g0J7RgtCy0LXRgiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y5cclxuZnVuY3Rpb24gdXNlck1lc3NhZ2UodGV4dCwgZWxlbWVudCkge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImdvb2RcIiwgXCJlcnJvclwiKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0ZXh0KTtcclxuICB9LCAwKTtcclxufVxyXG5cclxuLy8g0YDQsNGB0YfQtdGCINGB0YDQtdC00YHRgiDQvNC10LbQtNGDINC60YPQstGI0LjQvdCw0LzQuFxyXG5mdW5jdGlvbiBjYWxjdWxhdGlvbkp1Z3MoKSB7XHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcbiAgICAgIGp1Z0VsZW1lbnQubW9uZXkgKz0gYW1vdW50ICogKGp1Z0VsZW1lbnQucGVyY2VudCAvIDEwMCk7XHJcbiAgICAgIC8vINCe0LPRgNCw0L3QuNGH0LjQstCw0LXQvCDQutC+0LvQuNGH0LXRgdGC0LLQviDRhtC40YTRgCDQv9C+0YHQu9C1INC30LDQv9GP0YLQvtC5INC00L4gMlxyXG4gICAgICBqdWdFbGVtZW50Lm1vbmV5ID0gcGFyc2VGbG9hdChqdWdFbGVtZW50Lm1vbmV5LnRvRml4ZWQoMikpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhbW91bnQgPSAwO1xyXG4gIGRpc3BsYXlEYXRhKCk7IC8vINGE0YPQvdC60YbQuNGPINC00LvRjyDQstGL0LLQvtC00LAg0LTQsNC90L3Ri9GFINC90LAg0Y3QutGA0LDQvVxyXG59XHJcblxyXG4vLyDQn9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFINGE0L7RgNC8XHJcbmZ1bmN0aW9uIGdldEluZm9Gb3JtKGZvcm0pIHtcclxuICBmb3JtLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGZvcm1JbmZvID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShmb3JtLnRhcmdldCkuZW50cmllcygpKTtcclxuXHJcbiAgZGF0YVByb2Nlc3NpbmcoZm9ybUluZm8sIGZvcm0uc3VibWl0dGVyKTtcclxufVxyXG5cclxuLy8g0J7QsdGA0LDQsdC+0YLQutCwINC00LDQvdC90YvRhVxyXG5mdW5jdGlvbiBkYXRhUHJvY2Vzc2luZyhmb3JtSW5mbywgYnV0dG9uKSB7XHJcbiAgLy8g0JLQvdC+0YEg0YHRgNC10LTRgdGCXHJcbiAgaWYgKFwibW9uZXlJbnB1dFwiIGluIGZvcm1JbmZvKSB7XHJcbiAgICBmb3JtSW5mby5tb25leUlucHV0ID0gTnVtYmVyKGZvcm1JbmZvLm1vbmV5SW5wdXQpO1xyXG4gICAgaWYgKGZvcm1JbmZvLmp1Z3MgPT0gXCJ1bnNwZWNpZmllZFwiKSB7XHJcbiAgICAgIGlmIChOdW1iZXIoZm9ybUluZm8ubW9uZXlJbnB1dCkgPj0gMTAwKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICBhbW91bnQgKz0gZm9ybUluZm8ubW9uZXlJbnB1dDtcclxuICAgICAgICBjYWxjdWxhdGlvbkp1Z3MoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHVzZXJNZXNzYWdlKFwiZXJyb3JcIiwgYnV0dG9uKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChmb3JtSW5mby5qdWdzKSB7XHJcbiAgICAgIGp1Z3NbZm9ybUluZm8uanVnc10ubW9uZXkgKz0gZm9ybUluZm8ubW9uZXlJbnB1dDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b24pO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCS0YvQvdC+0YEg0YHRgNC10LTRgdGC0LJcclxuICBpZiAoXCJtb25leU91dHB1dFwiIGluIGZvcm1JbmZvKSB7XHJcbiAgICBmb3JtSW5mby5tb25leU91dHB1dCA9IE51bWJlcihmb3JtSW5mby5tb25leU91dHB1dCk7XHJcblxyXG4gICAgaWYgKGp1Z3NbZm9ybUluZm8uanVnc10ubW9uZXkgPj0gZm9ybUluZm8ubW9uZXlPdXRwdXQpIHtcclxuICAgICAganVnc1tmb3JtSW5mby5qdWdzXS5tb25leSAtPSBmb3JtSW5mby5tb25leU91dHB1dDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b24pO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L/RgNC4INCy0L3QvtGB0LUg0YHRgNC10LTRgdGC0LJcclxubGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9uZXktZm9ybS1pbnB1dFwiKTtcclxuZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5mb0Zvcm0pO1xyXG5cclxubGV0IGZvcm1PdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vbmV5LWZvcm0tb3V0cHV0XCIpO1xyXG5mb3JtT3V0cHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5mb0Zvcm0pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwNGIwYmMwNmNmNDM1YTk0N2E0YlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==