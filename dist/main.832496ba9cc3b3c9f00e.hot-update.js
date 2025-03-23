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
  "23/03": ["-89", "+1000"],
  "23/03": ["-89", "+1000"],
  "23/03": ["-89", "+1000"],
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
  let today = new Date();
  let dataToday = `${today.getDate()}/${today.getMonth()}`;
  let historyList = document.querySelector(".history__list");
  const fragment = document.createDocumentFragment(); // Создаем временный фрагмент для улучшенной производительности

  // перебор объекта
  for (const data in history) {
    if (Object.prototype.hasOwnProperty.call(history, data)) {
      const element = history[data];
      let historyData = dataToday == data ? "Сегодня" : data;

      let body;
      element.forEach((e) => {
        body += `<div class="item-history__element">${e}</div>`;
      });

      let wrapper = `
        <li class="history__item item-history">
          <div class="item-history__data">${historyData}</div>
          <div class="item-history__body">
            ${body}
          </div>
        </li>
      `;
    }
  }
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
/******/ 	__webpack_require__.h = () => ("fd0214ea6457e1b1d91c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ3ZkQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9maWxlcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGE0YPQvdC60YbQuNC+0L3QsNC70LAgXCLQp9C10YDRgtC+0LPQvtCyINCk0YDQuNC70LDQvdGB0LXRgNCwXCJcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tIFwiLi9mdW5jdGlvbnMuanNcIjtcclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRgdC/0LjRgdC60LAg0LDQutGC0LjQstC90YvRhSDQvNC+0LTRg9C70LXQuVxyXG5pbXBvcnQgeyBmbHNNb2R1bGVzIH0gZnJvbSBcIi4vbW9kdWxlcy5qc1wiO1xyXG5pbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gXCJub3Vpc2xpZGVyXCI7XHJcblxyXG4vLyBDb29raWUganNcclxuZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUsIGpzb24gPSBmYWxzZSkge1xyXG4gIGlmICghbmFtZSkge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbiAgLypcclxuICBSZXR1cm5zIGNvb2tpZSB3aXRoIHNwZWNpZmllZCBuYW1lIChzdHIpIGlmIGV4aXN0cywgZWxzZSAtIHVuZGVmaW5lZFxyXG4gIGlmIHJldHVybmluZyB2YWx1ZSBpcyBKU09OIGFuZCBqc29uIHBhcmFtZXRlciBpcyB0cnVlLCByZXR1cm5zIGpzb24sIG90aGVyd2lzZSBzdHJcclxuICAqL1xyXG4gIGxldCBtYXRjaGVzID0gZG9jdW1lbnQuY29va2llLm1hdGNoKFxyXG4gICAgbmV3IFJlZ0V4cChcclxuICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oWy4kPyp8e30oKVxcW1xcXVxcXFxcXC8rXl0pL2csIFwiXFxcXCQxXCIpICsgXCI9KFteO10qKVwiXHJcbiAgICApXHJcbiAgKTtcclxuICBpZiAobWF0Y2hlcykge1xyXG4gICAgbGV0IHJlcyA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKTtcclxuICAgIGlmIChqc29uKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVzKTtcclxuICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IHsgcGF0aDogXCIvXCIgfSkge1xyXG4gIC8qXHJcbiAgU2V0cyBhIGNvb2tpZSB3aXRoIHNwZWNpZmllZCBuYW1lIChzdHIpLCB2YWx1ZSAoc3RyKSAmIG9wdGlvbnMgKGRpY3QpXHJcblxyXG4gIG9wdGlvbnMga2V5czpcclxuICAgIC0gcGF0aCAoc3RyKSAtIFVSTCwgZm9yIHdoaWNoIHRoaXMgY29va2llIGlzIGF2YWlsYWJsZSAobXVzdCBiZSBhYnNvbHV0ZSEpXHJcbiAgICAtIGRvbWFpbiAoc3RyKSAtIGRvbWFpbiwgZm9yIHdoaWNoIHRoaXMgY29va2llIGlzIGF2YWlsYWJsZVxyXG4gICAgLSBleHBpcmVzIChEYXRlIG9iamVjdCkgLSBleHBpcmF0aW9uIGRhdGUmdGltZSBvZiBjb29raWVcclxuICAgIC0gbWF4LWFnZSAoaW50KSAtIGNvb2tpZSBsaWZldGltZSBpbiBzZWNvbmRzIChhbHRlcm5hdGl2ZSBmb3IgZXhwaXJlcyBvcHRpb24pXHJcbiAgICAtIHNlY3VyZSAoYm9vbCkgLSBpZiB0cnVlLCBjb29raWUgd2lsbCBiZSBhdmFpbGFibGUgb25seSBmb3IgSFRUUFMuXHJcbiAgICAgICAgICAgICAgICAgICAgICBJVCBDQU4nVCBCRSBGQUxTRVxyXG4gICAgLSBzYW1lc2l0ZSAoc3RyKSAtIFhTUkYgcHJvdGVjdGlvbiBzZXR0aW5nLlxyXG4gICAgICAgICAgICAgICAgICAgICAgIENhbiBiZSBzdHJpY3Qgb3IgbGF4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBodHRwczovL3dlYi5kZXYvc2FtZXNpdGUtY29va2llcy1leHBsYWluZWQvIGZvciBkZXRhaWxzXHJcbiAgICAtIGh0dHBPbmx5IChib29sKSAtIGlmIHRydWUsIGNvb2tpZSB3b24ndCBiZSBhdmFpbGFibGUgZm9yIHVzaW5nIGluIEphdmFTY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgSVQgQ0FOJ1QgQkUgRkFMU0VcclxuICAqL1xyXG4gIGlmICghbmFtZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gIGlmIChvcHRpb25zLmV4cGlyZXMgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICBvcHRpb25zLmV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXMudG9VVENTdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgfVxyXG4gIGxldCB1cGRhdGVkQ29va2llID1cclxuICAgIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICBmb3IgKGxldCBvcHRpb25LZXkgaW4gb3B0aW9ucykge1xyXG4gICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBvcHRpb25LZXk7XHJcbiAgICBsZXQgb3B0aW9uVmFsdWUgPSBvcHRpb25zW29wdGlvbktleV07XHJcbiAgICBpZiAob3B0aW9uVmFsdWUgIT09IHRydWUpIHtcclxuICAgICAgdXBkYXRlZENvb2tpZSArPSBcIj1cIiArIG9wdGlvblZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBkb2N1bWVudC5jb29raWUgPSB1cGRhdGVkQ29va2llO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lKSB7XHJcbiAgLypcclxuICBEZWxldGVzIGEgY29va2llIHdpdGggc3BlY2lmaWVkIG5hbWUuXHJcbiAgUmV0dXJucyB0cnVlIHdoZW4gY29va2llIHdhcyBzdWNjZXNzZnVsbHkgZGVsZXRlZCwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAgKi9cclxuICBzZXRDb29raWUobmFtZSwgbnVsbCwge1xyXG4gICAgZXhwaXJlczogbmV3IERhdGUoKSxcclxuICAgIHBhdGg6IFwiL1wiLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vINCb0L7Qs9C40LrQsCDQv9GA0LjQu9C+0LbQtdC90LjRj1xyXG5cclxuLy8g0JTQtdC50YHRgtCy0LjRjyDQv9GA0Lgg0LrQu9C40LrQtVxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9jdW1lbnRBY3Rpb25zKTtcclxuXHJcbiAgZnVuY3Rpb24gZG9jdW1lbnRBY3Rpb25zKGUpIHtcclxuICAgIGxldCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgLy8g0KHQsdGA0L7RgSDQt9C90LDRh9C10L3QuNC5INC90LDRgdGC0YDQvtC10LpcclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoYC5idXR0b24tcmVzZXRgKSkge1xyXG4gICAgICBsZXQgYnV0dG9uUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1yZXNldFwiKTtcclxuICAgICAgbGV0IHNldHRpbmdTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5pdGVtLXNldHRpbmcgLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGxldCBqdWdJbmRleCA9IDA7XHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFs1NSwgMTAsIDEwLCAxMCwgMTAsIDVdOyAvLyDQl9C90LDRh9C10L3QuNGPINC00LvRjyDQv9GA0LjRgdCy0L7QtdC90LjRj1xyXG5cclxuICAgICAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudEp1ZyA9IGp1Z3NbanVnXTtcclxuICAgICAgICAgIGlmIChqdWdJbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZWxlbWVudEp1Zy5wZXJjZW50ID0gdmFsdWVzW2p1Z0luZGV4XTsgLy8g0J/RgNC40YHQstC+0LXQvdC40LUg0LfQvdCw0YfQtdC90LjRj1xyXG4gICAgICAgICAgICBqdWdJbmRleCsrOyAvLyDQo9Cy0LXQu9C40YfQuNCy0LDQtdC8INC40L3QtNC10LrRgVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdXBkYXRlU2V0dGluZygpO1xyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG5cclxuICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvblJlc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQodCx0YDQvtGBINCy0YHQtdGFINGB0YDQtdC00YHRgtCyXHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KGAuYnV0dG9uLXJlc2V0LW1vbmV5YCkpIHtcclxuICAgICAgbGV0IGJ1dHRvblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tcmVzZXQtbW9uZXlcIik7XHJcbiAgICAgIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcbiAgICAgICAgICBqdWdFbGVtZW50Lm1vbmV5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvblJlc2V0KTtcclxuXHJcbiAgICAgIGRpc3BsYXlEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J/RgNC40LzQtdC90LjRgtGMINC90LDRgdGC0YDQvtC50LrQuFxyXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdChcIi5idXR0b24tYXBwbHlcIikpIHtcclxuICAgICAgY29uc3QgYnV0dG9uQXBwbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1hcHBseVwiKTtcclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCIpO1xyXG4gICAgICBjb25zdCBpdGVtU2V0dGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1zZXR0aW5nXCIpO1xyXG5cclxuICAgICAgbGV0IHRvdGFsU2xpZGVyVmFsdWUgPSAwO1xyXG5cclxuICAgICAgLy8g0JLRi9GH0LjRgdC70Y/QtdC8INGB0YPQvNC80YMg0LfQvdCw0YfQtdC90LjQuSDRgdC70LDQudC00LXRgNC+0LJcclxuICAgICAgc2V0dGluZ1NsaWRlcnMuZm9yRWFjaCgoc2xpZGVyKSA9PiB7XHJcbiAgICAgICAgdG90YWxTbGlkZXJWYWx1ZSArPSBOdW1iZXIoc2xpZGVyLm5vVWlTbGlkZXIuZ2V0KCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0b3RhbFNsaWRlclZhbHVlID09PSAxMDApIHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uQXBwbHkpO1xyXG5cclxuICAgICAgICAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0LfQvdCw0YfQtdC90LjRjyDQsiDQvtCx0YrQtdC60YLQtSBqdWdzXHJcbiAgICAgICAgaXRlbVNldHRpbmcuZm9yRWFjaCgoc2xpZGVyV3JhcHBlcikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc2xpZGVyID0gc2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCIpO1xyXG4gICAgICAgICAgY29uc3Qgc2xpZGVyV3JhcHBlckNsYXNzZXMgPSBBcnJheS5mcm9tKHNsaWRlcldyYXBwZXIuY2xhc3NMaXN0KTtcclxuICAgICAgICAgIGNvbnN0IHNwZWNpZmljQ2xhc3MgPSBzbGlkZXJXcmFwcGVyQ2xhc3Nlcy5maW5kKChjbGFzc05hbWUpID0+XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZS5zdGFydHNXaXRoKFwiaXRlbS1zZXR0aW5nLVwiKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoc3BlY2lmaWNDbGFzcykge1xyXG4gICAgICAgICAgICBjb25zdCBjbGFzc1dpdGhvdXRQcmVmaXggPSBzcGVjaWZpY0NsYXNzLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgXCJpdGVtLXNldHRpbmctXCIsXHJcbiAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBqdWdzW2NsYXNzV2l0aG91dFByZWZpeF0ucGVyY2VudCA9IE51bWJlcihzbGlkZXIubm9VaVNsaWRlci5nZXQoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXlEYXRhKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b25BcHBseSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vLyDQktGB0LUg0L/QtdGA0LXQvNC10L3QvdGL0LVcclxubGV0IGFtb3VudCA9IDA7XHJcbmxldCBqdWdzID0ge1xyXG4gIG1vbnRobHk6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogNTUsXHJcbiAgICB0aXRsZTogXCLQldC20LXQvNC10YHRj9GH0L3Ri9C1INGC0YDQsNGC0YtcIixcclxuICB9LFxyXG4gIGVudGVydGFpbm1lbnQ6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMTAsXHJcbiAgICB0aXRsZTogXCLQoNCw0LfQstC70LXRh9C10L3QuNGPXCIsXHJcbiAgfSxcclxuICBzYXZpbmc6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMTAsXHJcbiAgICB0aXRsZTogXCLQndCw0LrQvtC/0LvQtdC90LjRj1wiLFxyXG4gIH0sXHJcbiAgZGV2ZWxvcG1lbnQ6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMTAsXHJcbiAgICB0aXRsZTogXCLQodCw0LzQvtGA0LDQt9Cy0LjRgtC40LVcIixcclxuICB9LFxyXG4gIHNhZmV0eToge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiAxMCxcclxuICAgIHRpdGxlOiBcItCf0L7QtNGD0YjQutCwINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuFwiLFxyXG4gIH0sXHJcbiAgcHJlc2VudDoge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiA1LFxyXG4gICAgdGl0bGU6IFwi0J/QvtC00LDRgNC60LhcIixcclxuICB9LFxyXG59O1xyXG5sZXQgaGlzdG9yeSA9IHtcclxuICBcIjIzLzAzXCI6IFtcIi04OVwiLCBcIisxMDAwXCJdLFxyXG4gIFwiMjMvMDNcIjogW1wiLTg5XCIsIFwiKzEwMDBcIl0sXHJcbiAgXCIyMy8wM1wiOiBbXCItODlcIiwgXCIrMTAwMFwiXSxcclxufTtcclxuXHJcbmlmIChnZXRDb29raWUoXCJqdWdzXCIpKSB7XHJcbiAganVncyA9IGdldENvb2tpZShcImp1Z3NcIiwgdHJ1ZSk7XHJcbn1cclxuaWYgKGdldENvb2tpZShcImhpc3RvcnlcIikpIHtcclxuICBoaXN0b3J5ID0gZ2V0Q29va2llKFwiaGlzdG9yeVwiLCB0cnVlKTtcclxufVxyXG5cclxuLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L3QsCDRjdC60YDQsNC90LVcclxuZnVuY3Rpb24gZGlzcGxheURhdGEoKSB7XHJcbiAgLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQutGD0LLRiNC40L3QvtCyXHJcbiAgbGV0IGp1Z3NJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanVnc19faXRlbXNcIik7XHJcbiAganVnc0l0ZW1zLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG5cclxuICAgICAgbGV0IGl0ZW0gPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImp1Z3NfX2l0ZW0gaXRlbS1qdWdzIGl0ZW0tanVncy0ke2p1Z31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tanVnc19fdGl0bGVcIj4ke2p1Z0VsZW1lbnQudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHlcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaXRlbS1qdWdzX19pbWdcIiBzcmM9XCJpbWcvaWNvbi9qYXIuc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LXRvcC1wZXJjZW50XCI+JHtqdWdFbGVtZW50LnBlcmNlbnR9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktYm90dG9tLXRleHRcIj7QvtGB0YLQsNC70L7RgdGMOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxicj48c3BhbiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS1ib3R0b20tbW9uZXlcIj4ke2p1Z0VsZW1lbnQubW9uZXl9IHAuPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuXHJcbiAgICAgIGp1Z3NJdGVtcy5pbm5lckhUTUwgKz0gaXRlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0L3QsNGB0YLRgNC+0LXQulxyXG4gIHJhbmdlSW5pdCgpO1xyXG4gIGhpc3RvcnlJbml0KCk7XHJcbiAgc2V0Q29va2llKFwianVnc1wiLCBqdWdzKTtcclxufVxyXG5kaXNwbGF5RGF0YSgpO1xyXG5cclxuLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQvdCw0YHRgtGA0L7QtdC6XHJcbmZ1bmN0aW9uIHJhbmdlSW5pdCgpIHtcclxuICBjb25zdCBzZXR0aW5nQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ19fY291bnRlciBzcGFuXCIpO1xyXG4gIGNvbnN0IHNldHRpbmdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXR0aW5nX19saXN0XCIpO1xyXG4gIHNldHRpbmdMaXN0LmlubmVySFRNTCA9IFwiXCI7IC8vINCe0YfQuNGJ0LDQtdC8INC/0YDQtdC00YvQtNGD0YnQuNC5INC60L7QvdGC0LXQvdGCXHJcblxyXG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvLyDQodC+0LfQtNCw0LXQvCDQstGA0LXQvNC10L3QvdGL0Lkg0YTRgNCw0LPQvNC10L3RgiDQtNC70Y8g0YPQu9GD0YfRiNC10L3QvdC+0Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YzQvdC+0YHRgtC4XHJcblxyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG5cclxuICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0Y3Qu9C10LzQtdC90YIg0YHQv9C40YHQutCwXHJcbiAgICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBpdGVtRWxlbWVudC5jbGFzc05hbWUgPSBgbWVudV9faXRlbSBzZXR0aW5nX19pdGVtIGl0ZW0tc2V0dGluZyBpdGVtLXNldHRpbmctJHtqdWd9YDtcclxuXHJcbiAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDQsiDQvdC+0LLRi9C5INGN0LvQtdC80LXQvdGCXHJcbiAgICAgIGl0ZW1FbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1zZXR0aW5nX190aXRsZVwiPiR7anVnRWxlbWVudC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1zZXR0aW5nX19zbGlkZXIgXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tc2V0dGluZ19fdmFsdWVcIj7Ql9C90LDRh9C10L3QuNC1OiA8c3Bhbj4ke2p1Z0VsZW1lbnQucGVyY2VudH0lPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGN0LvQtdC80LXQvdGCINCyINGE0YDQsNCz0LzQtdC90YJcclxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaXRlbUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INCy0YHQtSDRjdC70LXQvNC10L3RgtGLINC30LAg0L7QtNC40L0g0YDQsNC3INCyIERPTVxyXG4gIHNldHRpbmdMaXN0LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuXHJcbiAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDRgdC70LDQudC00LXRgNGLXHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcblxyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYC5pdGVtLXNldHRpbmctJHtqdWd9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXJWYWx1ZSA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuaXRlbS1zZXR0aW5nX192YWx1ZSBzcGFuXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPIG5vVWlTbGlkZXJcclxuICAgICAgbm9VaVNsaWRlci5jcmVhdGUoc2V0dGluZ1NsaWRlciwge1xyXG4gICAgICAgIHN0YXJ0OiBbanVnRWxlbWVudC5wZXJjZW50XSxcclxuICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICBtaW46IFswXSxcclxuICAgICAgICAgIG1heDogWzEwMF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyDQntCx0L3QvtCy0LvQtdC90LjQtSDQt9C90LDRh9C10L3QuNGPINC/0YDQuCDQuNC30LzQtdC90LXQvdC40Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICBzZXR0aW5nU2xpZGVyLm5vVWlTbGlkZXIub24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgICAgICAgc2V0dGluZ1NsaWRlclZhbHVlLmlubmVySFRNTCA9IGAke051bWJlcih2YWx1ZXNbaGFuZGxlXSkudG9GaXhlZCgwKX0lYDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgaXRlbVNldHRpbmdTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiKTtcclxuICBpdGVtU2V0dGluZ1NsaWRlcnMuZm9yRWFjaCgoc2xpZGVyKSA9PiB7XHJcbiAgICBzbGlkZXIubm9VaVNsaWRlci5vbihcInVwZGF0ZVwiLCB1cGRhdGVTdW0pO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTdW0oKSB7XHJcbiAgICBsZXQgdG90YWxTdW0gPSBBcnJheS5mcm9tKGl0ZW1TZXR0aW5nU2xpZGVycykucmVkdWNlKChzdW0sIHNsaWRlcikgPT4ge1xyXG4gICAgICByZXR1cm4gc3VtICsgTnVtYmVyKHNsaWRlci5ub1VpU2xpZGVyLmdldCgpKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIHNldHRpbmdDb3VudGVyLmlubmVySFRNTCA9IHRvdGFsU3VtO1xyXG4gIH1cclxufVxyXG5yYW5nZUluaXQoKTtcclxuXHJcbi8vINCe0LHQvdC+0LLQu9C10L3QuNC1INC90LDRgdGC0YDQvtC10LpcclxuZnVuY3Rpb24gdXBkYXRlU2V0dGluZygpIHtcclxuICAvLyDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INGB0LvQsNC50LTQtdGA0YtcclxuICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuXHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgLml0ZW0tc2V0dGluZy0ke2p1Z31gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXIgPSBzZXR0aW5nU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICAgKTtcclxuICAgICAgc2V0dGluZ1NsaWRlci5ub1VpU2xpZGVyLnNldChbanVnRWxlbWVudC5wZXJjZW50XSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDb29raWUoXCJqdWdzXCIsIGp1Z3MpO1xyXG59XHJcblxyXG4vLyDQntGC0L7QsdGA0LDQttC10L3QuNC1INC40YHRgtC+0YDQuNC4XHJcbmZ1bmN0aW9uIGhpc3RvcnlJbml0KCkge1xyXG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IGRhdGFUb2RheSA9IGAke3RvZGF5LmdldERhdGUoKX0vJHt0b2RheS5nZXRNb250aCgpfWA7XHJcbiAgbGV0IGhpc3RvcnlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5X19saXN0XCIpO1xyXG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvLyDQodC+0LfQtNCw0LXQvCDQstGA0LXQvNC10L3QvdGL0Lkg0YTRgNCw0LPQvNC10L3RgiDQtNC70Y8g0YPQu9GD0YfRiNC10L3QvdC+0Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YzQvdC+0YHRgtC4XHJcblxyXG4gIC8vINC/0LXRgNC10LHQvtGAINC+0LHRitC10LrRgtCwXHJcbiAgZm9yIChjb25zdCBkYXRhIGluIGhpc3RvcnkpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGlzdG9yeSwgZGF0YSkpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGhpc3RvcnlbZGF0YV07XHJcbiAgICAgIGxldCBoaXN0b3J5RGF0YSA9IGRhdGFUb2RheSA9PSBkYXRhID8gXCLQodC10LPQvtC00L3Rj1wiIDogZGF0YTtcclxuXHJcbiAgICAgIGxldCBib2R5O1xyXG4gICAgICBlbGVtZW50LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICBib2R5ICs9IGA8ZGl2IGNsYXNzPVwiaXRlbS1oaXN0b3J5X19lbGVtZW50XCI+JHtlfTwvZGl2PmA7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IHdyYXBwZXIgPSBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGlzdG9yeV9faXRlbSBpdGVtLWhpc3RvcnlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWhpc3RvcnlfX2RhdGFcIj4ke2hpc3RvcnlEYXRhfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0taGlzdG9yeV9fYm9keVwiPlxyXG4gICAgICAgICAgICAke2JvZHl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8g0J7RgtCy0LXRgiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y5cclxuZnVuY3Rpb24gdXNlck1lc3NhZ2UodGV4dCwgZWxlbWVudCkge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImdvb2RcIiwgXCJlcnJvclwiKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0ZXh0KTtcclxuICB9LCAwKTtcclxufVxyXG5cclxuLy8g0YDQsNGB0YfQtdGCINGB0YDQtdC00YHRgiDQvNC10LbQtNGDINC60YPQstGI0LjQvdCw0LzQuFxyXG5mdW5jdGlvbiBjYWxjdWxhdGlvbkp1Z3MoKSB7XHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcbiAgICAgIGp1Z0VsZW1lbnQubW9uZXkgKz0gYW1vdW50ICogKGp1Z0VsZW1lbnQucGVyY2VudCAvIDEwMCk7XHJcbiAgICAgIC8vINCe0LPRgNCw0L3QuNGH0LjQstCw0LXQvCDQutC+0LvQuNGH0LXRgdGC0LLQviDRhtC40YTRgCDQv9C+0YHQu9C1INC30LDQv9GP0YLQvtC5INC00L4gMlxyXG4gICAgICBqdWdFbGVtZW50Lm1vbmV5ID0gcGFyc2VGbG9hdChqdWdFbGVtZW50Lm1vbmV5LnRvRml4ZWQoMikpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhbW91bnQgPSAwO1xyXG4gIGRpc3BsYXlEYXRhKCk7IC8vINGE0YPQvdC60YbQuNGPINC00LvRjyDQstGL0LLQvtC00LAg0LTQsNC90L3Ri9GFINC90LAg0Y3QutGA0LDQvVxyXG59XHJcblxyXG4vLyDQn9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFINGE0L7RgNC8XHJcbmZ1bmN0aW9uIGdldEluZm9Gb3JtKGZvcm0pIHtcclxuICBmb3JtLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGZvcm1JbmZvID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShmb3JtLnRhcmdldCkuZW50cmllcygpKTtcclxuXHJcbiAgZGF0YVByb2Nlc3NpbmcoZm9ybUluZm8sIGZvcm0uc3VibWl0dGVyKTtcclxufVxyXG5cclxuLy8g0J7QsdGA0LDQsdC+0YLQutCwINC00LDQvdC90YvRhVxyXG5mdW5jdGlvbiBkYXRhUHJvY2Vzc2luZyhmb3JtSW5mbywgYnV0dG9uKSB7XHJcbiAgLy8g0JLQvdC+0YEg0YHRgNC10LTRgdGCXHJcbiAgaWYgKFwibW9uZXlJbnB1dFwiIGluIGZvcm1JbmZvKSB7XHJcbiAgICBmb3JtSW5mby5tb25leUlucHV0ID0gTnVtYmVyKGZvcm1JbmZvLm1vbmV5SW5wdXQpO1xyXG4gICAgaWYgKGZvcm1JbmZvLmp1Z3MgPT0gXCJ1bnNwZWNpZmllZFwiKSB7XHJcbiAgICAgIGlmIChOdW1iZXIoZm9ybUluZm8ubW9uZXlJbnB1dCkgPj0gMTAwKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICBhbW91bnQgKz0gZm9ybUluZm8ubW9uZXlJbnB1dDtcclxuICAgICAgICBjYWxjdWxhdGlvbkp1Z3MoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHVzZXJNZXNzYWdlKFwiZXJyb3JcIiwgYnV0dG9uKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChmb3JtSW5mby5qdWdzKSB7XHJcbiAgICAgIGp1Z3NbZm9ybUluZm8uanVnc10ubW9uZXkgKz0gZm9ybUluZm8ubW9uZXlJbnB1dDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b24pO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCS0YvQvdC+0YEg0YHRgNC10LTRgdGC0LJcclxuICBpZiAoXCJtb25leU91dHB1dFwiIGluIGZvcm1JbmZvKSB7XHJcbiAgICBmb3JtSW5mby5tb25leU91dHB1dCA9IE51bWJlcihmb3JtSW5mby5tb25leU91dHB1dCk7XHJcblxyXG4gICAgaWYgKGp1Z3NbZm9ybUluZm8uanVnc10ubW9uZXkgPj0gZm9ybUluZm8ubW9uZXlPdXRwdXQpIHtcclxuICAgICAganVnc1tmb3JtSW5mby5qdWdzXS5tb25leSAtPSBmb3JtSW5mby5tb25leU91dHB1dDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b24pO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L/RgNC4INCy0L3QvtGB0LUg0YHRgNC10LTRgdGC0LJcclxubGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9uZXktZm9ybS1pbnB1dFwiKTtcclxuZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5mb0Zvcm0pO1xyXG5cclxubGV0IGZvcm1PdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vbmV5LWZvcm0tb3V0cHV0XCIpO1xyXG5mb3JtT3V0cHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5mb0Zvcm0pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZDAyMTRlYTY0NTdlMWIxZDkxY1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==