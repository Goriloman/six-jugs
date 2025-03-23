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
  // Получаем текущую дату
  const today = new Date();
  // Форматируем дату для сегодняшнего дня (день/месяц)
  const dataToday = `${today.getDate()}/${today.getMonth() + 1}`;
  // Находим элемент списка истории в документе
  const historyList = document.querySelector(".history__list");
  // Создаем фрагмент документа для более эффективного добавления элементов
  const fragment = document.createDocumentFragment();

  // Проходим по каждой дате в объекте history
  for (const date in history) {
    // Проверяем, что свойство принадлежит самому объекту history
    if (Object.prototype.hasOwnProperty.call(history, date)) {
      const elements = history[date]; // Элементы для данной даты
      let historyDataLabel;

      // Сравниваем дату с сегодняшней
      if (date === dataToday) {
        historyDataLabel = "Сегодня"; // Если даты совпадают, используем "Сегодня"
      } else {
        // Иначе форматируем дату для отображения
        const [day, month] = date.split("/").map(Number); // Разделяем день и месяц
        const formattedDate = new Date(); // Создаем новый объект даты
        formattedDate.setDate(day); // Устанавливаем день
        formattedDate.setMonth(month - 1); // Устанавливаем месяц (минус 1, так как месяцы нумеруются с 0)
        const options = { day: "numeric", month: "long" }; // Опции для форматирования
        historyDataLabel = formattedDate.toLocaleDateString("ru-RU", options); // Форматируем дату в русской локали
      }

      // Создаем HTML для элементов истории для данной даты
      const historyItems = elements
        .map((item) => {
          // Определяем тип элемента (доход или расход)
          let res;
          if (item[0] === "-") {
            res = "expense";
            item = "+" + item;
          } else {
            res = "income";
          }
          return `<div class="item-history__element ${res}">${item}</div>`;
        })
        .join(""); // Объединяем элементы в строку

      // Создаем разметку для данной даты и ее элементов
      const historyItemHTML = `
                <div class="item-history__data">${historyDataLabel}</div>
                <div class="item-history__body">
                    ${historyItems}
                </div>
            `;

      // Добавляем элемент в фрагмент
      const tempLi = document.createElement("li"); // Временный элемент для парсинга HTML
      tempLi.innerHTML = historyItemHTML;
      tempLi.classList.add("history__item", "item-history");
      fragment.appendChild(tempLi);
    }
  }

  // Добавляем все элементы из фрагмента в элемент списка истории
  historyList.innerHTML = "";
  historyList.appendChild(fragment);
}

// добовление операции в историю
function addTransaction(date, amount) {
  // Проверка, существует ли дата в объекте
  if (history.hasOwnProperty(date)) {
    // Если существует, добавляем операцию в существующий массив
    history[date].push(amount);
  } else {
    // Если не существует, создаем новый массив с новой операцией
    history[date] = [amount];
  }
  historyInit();
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
      if (formInfo.moneyInput >= 100) {
        setTimeout(() => {
          userMessage("good", button);
        }, 0);
        amount += formInfo.moneyInput;
        calculationJugs();

        let data = new Date();
        addTransaction(
          `${data.getDate()}/${data.getMonth() + 1}`,
          formInfo.moneyInput
        );
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
/******/ 	__webpack_require__.h = () => ("912b0ad501a17aaad494")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlLEdBQUcsb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ2hoQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvc2NyaXB0LmpzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRhNGD0L3QutGG0LjQvtC90LDQu9CwIFwi0KfQtdGA0YLQvtCz0L7QsiDQpNGA0LjQu9Cw0L3RgdC10YDQsFwiXHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XHJcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHQv9C40YHQutCwINCw0LrRgtC40LLQvdGL0YUg0LzQvtC00YPQu9C10LlcclxuaW1wb3J0IHsgZmxzTW9kdWxlcyB9IGZyb20gXCIuL21vZHVsZXMuanNcIjtcclxuaW1wb3J0ICogYXMgbm9VaVNsaWRlciBmcm9tIFwibm91aXNsaWRlclwiO1xyXG5cclxuLy8gQ29va2llIGpzXHJcbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lLCBqc29uID0gZmFsc2UpIHtcclxuICBpZiAoIW5hbWUpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIC8qXHJcbiAgUmV0dXJucyBjb29raWUgd2l0aCBzcGVjaWZpZWQgbmFtZSAoc3RyKSBpZiBleGlzdHMsIGVsc2UgLSB1bmRlZmluZWRcclxuICBpZiByZXR1cm5pbmcgdmFsdWUgaXMgSlNPTiBhbmQganNvbiBwYXJhbWV0ZXIgaXMgdHJ1ZSwgcmV0dXJucyBqc29uLCBvdGhlcndpc2Ugc3RyXHJcbiAgKi9cclxuICBsZXQgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChcclxuICAgIG5ldyBSZWdFeHAoXHJcbiAgICAgIFwiKD86Xnw7IClcIiArIG5hbWUucmVwbGFjZSgvKFsuJD8qfHt9KClcXFtcXF1cXFxcXFwvK15dKS9nLCBcIlxcXFwkMVwiKSArIFwiPShbXjtdKilcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgaWYgKG1hdGNoZXMpIHtcclxuICAgIGxldCByZXMgPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSk7XHJcbiAgICBpZiAoanNvbikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlcyk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5mdW5jdGlvbiBzZXRDb29raWUobmFtZSwgdmFsdWUsIG9wdGlvbnMgPSB7IHBhdGg6IFwiL1wiIH0pIHtcclxuICAvKlxyXG4gIFNldHMgYSBjb29raWUgd2l0aCBzcGVjaWZpZWQgbmFtZSAoc3RyKSwgdmFsdWUgKHN0cikgJiBvcHRpb25zIChkaWN0KVxyXG5cclxuICBvcHRpb25zIGtleXM6XHJcbiAgICAtIHBhdGggKHN0cikgLSBVUkwsIGZvciB3aGljaCB0aGlzIGNvb2tpZSBpcyBhdmFpbGFibGUgKG11c3QgYmUgYWJzb2x1dGUhKVxyXG4gICAgLSBkb21haW4gKHN0cikgLSBkb21haW4sIGZvciB3aGljaCB0aGlzIGNvb2tpZSBpcyBhdmFpbGFibGVcclxuICAgIC0gZXhwaXJlcyAoRGF0ZSBvYmplY3QpIC0gZXhwaXJhdGlvbiBkYXRlJnRpbWUgb2YgY29va2llXHJcbiAgICAtIG1heC1hZ2UgKGludCkgLSBjb29raWUgbGlmZXRpbWUgaW4gc2Vjb25kcyAoYWx0ZXJuYXRpdmUgZm9yIGV4cGlyZXMgb3B0aW9uKVxyXG4gICAgLSBzZWN1cmUgKGJvb2wpIC0gaWYgdHJ1ZSwgY29va2llIHdpbGwgYmUgYXZhaWxhYmxlIG9ubHkgZm9yIEhUVFBTLlxyXG4gICAgICAgICAgICAgICAgICAgICAgSVQgQ0FOJ1QgQkUgRkFMU0VcclxuICAgIC0gc2FtZXNpdGUgKHN0cikgLSBYU1JGIHByb3RlY3Rpb24gc2V0dGluZy5cclxuICAgICAgICAgICAgICAgICAgICAgICBDYW4gYmUgc3RyaWN0IG9yIGxheFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFJlYWQgaHR0cHM6Ly93ZWIuZGV2L3NhbWVzaXRlLWNvb2tpZXMtZXhwbGFpbmVkLyBmb3IgZGV0YWlsc1xyXG4gICAgLSBodHRwT25seSAoYm9vbCkgLSBpZiB0cnVlLCBjb29raWUgd29uJ3QgYmUgYXZhaWxhYmxlIGZvciB1c2luZyBpbiBKYXZhU2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElUIENBTidUIEJFIEZBTFNFXHJcbiAgKi9cclxuICBpZiAoIW5hbWUpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICBpZiAob3B0aW9ucy5leHBpcmVzIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgb3B0aW9ucy5leHBpcmVzID0gb3B0aW9ucy5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gIH1cclxuICBsZXQgdXBkYXRlZENvb2tpZSA9XHJcbiAgICBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgZm9yIChsZXQgb3B0aW9uS2V5IGluIG9wdGlvbnMpIHtcclxuICAgIHVwZGF0ZWRDb29raWUgKz0gXCI7IFwiICsgb3B0aW9uS2V5O1xyXG4gICAgbGV0IG9wdGlvblZhbHVlID0gb3B0aW9uc1tvcHRpb25LZXldO1xyXG4gICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XHJcbiAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI9XCIgKyBvcHRpb25WYWx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcclxufVxyXG5mdW5jdGlvbiBkZWxldGVDb29raWUobmFtZSkge1xyXG4gIC8qXHJcbiAgRGVsZXRlcyBhIGNvb2tpZSB3aXRoIHNwZWNpZmllZCBuYW1lLlxyXG4gIFJldHVybnMgdHJ1ZSB3aGVuIGNvb2tpZSB3YXMgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQsIG90aGVyd2lzZSBmYWxzZVxyXG4gICovXHJcbiAgc2V0Q29va2llKG5hbWUsIG51bGwsIHtcclxuICAgIGV4cGlyZXM6IG5ldyBEYXRlKCksXHJcbiAgICBwYXRoOiBcIi9cIixcclxuICB9KTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyDQm9C+0LPQuNC60LAg0L/RgNC40LvQvtC20LXQvdC40Y9cclxuXHJcbi8vINCU0LXQudGB0YLQstC40Y8g0L/RgNC4INC60LvQuNC60LVcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvY3VtZW50QWN0aW9ucyk7XHJcblxyXG4gIGZ1bmN0aW9uIGRvY3VtZW50QWN0aW9ucyhlKSB7XHJcbiAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xyXG5cclxuICAgIC8vINCh0LHRgNC+0YEg0LfQvdCw0YfQtdC90LjQuSDQvdCw0YHRgtGA0L7QtdC6XHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KGAuYnV0dG9uLXJlc2V0YCkpIHtcclxuICAgICAgbGV0IGJ1dHRvblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tcmVzZXRcIik7XHJcbiAgICAgIGxldCBzZXR0aW5nU2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuaXRlbS1zZXR0aW5nIC5pdGVtLXNldHRpbmdfX3NsaWRlclwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBsZXQganVnSW5kZXggPSAwO1xyXG4gICAgICBjb25zdCB2YWx1ZXMgPSBbNTUsIDEwLCAxMCwgMTAsIDEwLCA1XTsgLy8g0JfQvdCw0YfQtdC90LjRjyDQtNC70Y8g0L/RgNC40YHQstC+0LXQvdC40Y9cclxuXHJcbiAgICAgIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnRKdWcgPSBqdWdzW2p1Z107XHJcbiAgICAgICAgICBpZiAoanVnSW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRKdWcucGVyY2VudCA9IHZhbHVlc1tqdWdJbmRleF07IC8vINCf0YDQuNGB0LLQvtC10L3QuNC1INC30L3QsNGH0LXQvdC40Y9cclxuICAgICAgICAgICAganVnSW5kZXgrKzsgLy8g0KPQstC10LvQuNGH0LjQstCw0LXQvCDQuNC90LTQtdC60YFcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVwZGF0ZVNldHRpbmcoKTtcclxuICAgICAgZGlzcGxheURhdGEoKTtcclxuXHJcbiAgICAgIHVzZXJNZXNzYWdlKFwiZ29vZFwiLCBidXR0b25SZXNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0KHQsdGA0L7RgSDQstGB0LXRhSDRgdGA0LXQtNGB0YLQslxyXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdChgLmJ1dHRvbi1yZXNldC1tb25leWApKSB7XHJcbiAgICAgIGxldCBidXR0b25SZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXJlc2V0LW1vbmV5XCIpO1xyXG4gICAgICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG4gICAgICAgICAganVnRWxlbWVudC5tb25leSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJNZXNzYWdlKFwiZ29vZFwiLCBidXR0b25SZXNldCk7XHJcblxyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCf0YDQuNC80LXQvdC40YLRjCDQvdCw0YHRgtGA0L7QudC60LhcclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoXCIuYnV0dG9uLWFwcGx5XCIpKSB7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbkFwcGx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tYXBwbHlcIik7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiKTtcclxuICAgICAgY29uc3QgaXRlbVNldHRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tc2V0dGluZ1wiKTtcclxuXHJcbiAgICAgIGxldCB0b3RhbFNsaWRlclZhbHVlID0gMDtcclxuXHJcbiAgICAgIC8vINCS0YvRh9C40YHQu9GP0LXQvCDRgdGD0LzQvNGDINC30L3QsNGH0LXQvdC40Lkg0YHQu9Cw0LnQtNC10YDQvtCyXHJcbiAgICAgIHNldHRpbmdTbGlkZXJzLmZvckVhY2goKHNsaWRlcikgPT4ge1xyXG4gICAgICAgIHRvdGFsU2xpZGVyVmFsdWUgKz0gTnVtYmVyKHNsaWRlci5ub1VpU2xpZGVyLmdldCgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodG90YWxTbGlkZXJWYWx1ZSA9PT0gMTAwKSB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbkFwcGx5KTtcclxuXHJcbiAgICAgICAgLy8g0J7QsdC90L7QstC70Y/QtdC8INC30L3QsNGH0LXQvdC40Y8g0LIg0L7QsdGK0LXQutGC0LUganVnc1xyXG4gICAgICAgIGl0ZW1TZXR0aW5nLmZvckVhY2goKHNsaWRlcldyYXBwZXIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHNsaWRlciA9IHNsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiKTtcclxuICAgICAgICAgIGNvbnN0IHNsaWRlcldyYXBwZXJDbGFzc2VzID0gQXJyYXkuZnJvbShzbGlkZXJXcmFwcGVyLmNsYXNzTGlzdCk7XHJcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NsYXNzID0gc2xpZGVyV3JhcHBlckNsYXNzZXMuZmluZCgoY2xhc3NOYW1lKSA9PlxyXG4gICAgICAgICAgICBjbGFzc05hbWUuc3RhcnRzV2l0aChcIml0ZW0tc2V0dGluZy1cIilcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgaWYgKHNwZWNpZmljQ2xhc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgY2xhc3NXaXRob3V0UHJlZml4ID0gc3BlY2lmaWNDbGFzcy5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgIFwiaXRlbS1zZXR0aW5nLVwiLFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAganVnc1tjbGFzc1dpdGhvdXRQcmVmaXhdLnBlcmNlbnQgPSBOdW1iZXIoc2xpZGVyLm5vVWlTbGlkZXIuZ2V0KCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVzZXJNZXNzYWdlKFwiZXJyb3JcIiwgYnV0dG9uQXBwbHkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8g0JLRgdC1INC/0LXRgNC10LzQtdC90L3Ri9C1XHJcbmxldCBhbW91bnQgPSAwO1xyXG5sZXQganVncyA9IHtcclxuICBtb250aGx5OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDU1LFxyXG4gICAgdGl0bGU6IFwi0JXQttC10LzQtdGB0Y/Rh9C90YvQtSDRgtGA0LDRgtGLXCIsXHJcbiAgfSxcclxuICBlbnRlcnRhaW5tZW50OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0KDQsNC30LLQu9C10YfQtdC90LjRj1wiLFxyXG4gIH0sXHJcbiAgc2F2aW5nOiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0J3QsNC60L7Qv9C70LXQvdC40Y9cIixcclxuICB9LFxyXG4gIGRldmVsb3BtZW50OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0KHQsNC80L7RgNCw0LfQstC40YLQuNC1XCIsXHJcbiAgfSxcclxuICBzYWZldHk6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMTAsXHJcbiAgICB0aXRsZTogXCLQn9C+0LTRg9GI0LrQsCDQsdC10LfQvtC/0LDRgdC90L7RgdGC0LhcIixcclxuICB9LFxyXG4gIHByZXNlbnQ6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogNSxcclxuICAgIHRpdGxlOiBcItCf0L7QtNCw0YDQutC4XCIsXHJcbiAgfSxcclxufTtcclxubGV0IGhpc3RvcnkgPSB7XHJcbiAgXCIyMy8zXCI6IFtcIi04OVwiLCBcIisxMDAwXCJdLFxyXG4gIFwiMjMvMlwiOiBbXCItODlcIiwgXCIrMTAwMFwiXSxcclxuICBcIjIzLzFcIjogW1wiLTg5XCIsIFwiKzEwMDBcIl0sXHJcbn07XHJcblxyXG5pZiAoZ2V0Q29va2llKFwianVnc1wiKSkge1xyXG4gIGp1Z3MgPSBnZXRDb29raWUoXCJqdWdzXCIsIHRydWUpO1xyXG59XHJcbmlmIChnZXRDb29raWUoXCJoaXN0b3J5XCIpKSB7XHJcbiAgaGlzdG9yeSA9IGdldENvb2tpZShcImhpc3RvcnlcIiwgdHJ1ZSk7XHJcbn1cclxuXHJcbi8vINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0LTQsNC90L3Ri9GFINC90LAg0Y3QutGA0LDQvdC1XHJcbmZ1bmN0aW9uIGRpc3BsYXlEYXRhKCkge1xyXG4gIC8vINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0LrRg9Cy0YjQuNC90L7QslxyXG4gIGxldCBqdWdzSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmp1Z3NfX2l0ZW1zXCIpO1xyXG4gIGp1Z3NJdGVtcy5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuXHJcbiAgICAgIGxldCBpdGVtID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdWdzX19pdGVtIGl0ZW0tanVncyBpdGVtLWp1Z3MtJHtqdWd9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWp1Z3NfX3RpdGxlXCI+JHtqdWdFbGVtZW50LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIml0ZW0tanVnc19faW1nXCIgc3JjPVwiaW1nL2ljb24vamFyLnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktdG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS10b3AtcGVyY2VudFwiPiR7anVnRWxlbWVudC5wZXJjZW50fSU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LWJvdHRvbS10ZXh0XCI+0L7RgdGC0LDQu9C+0YHRjDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnI+PHNwYW4gY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktYm90dG9tLW1vbmV5XCI+JHtqdWdFbGVtZW50Lm1vbmV5fSBwLjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcblxyXG4gICAgICBqdWdzSXRlbXMuaW5uZXJIVE1MICs9IGl0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDQntGC0L7QsdGA0LDQttC10L3QuNC1INC90LDRgdGC0YDQvtC10LpcclxuICByYW5nZUluaXQoKTtcclxuICBoaXN0b3J5SW5pdCgpO1xyXG4gIHNldENvb2tpZShcImp1Z3NcIiwganVncyk7XHJcbn1cclxuZGlzcGxheURhdGEoKTtcclxuXHJcbi8vINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0L3QsNGB0YLRgNC+0LXQulxyXG5mdW5jdGlvbiByYW5nZUluaXQoKSB7XHJcbiAgY29uc3Qgc2V0dGluZ0NvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdfX2NvdW50ZXIgc3BhblwiKTtcclxuICBjb25zdCBzZXR0aW5nTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ19fbGlzdFwiKTtcclxuICBzZXR0aW5nTGlzdC5pbm5lckhUTUwgPSBcIlwiOyAvLyDQntGH0LjRidCw0LXQvCDQv9GA0LXQtNGL0LTRg9GJ0LjQuSDQutC+0L3RgtC10L3RglxyXG5cclxuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTsgLy8g0KHQvtC30LTQsNC10Lwg0LLRgNC10LzQtdC90L3Ri9C5INGE0YDQsNCz0LzQtdC90YIg0LTQu9GPINGD0LvRg9GH0YjQtdC90L3QvtC5INC/0YDQvtC40LfQstC+0LTQuNGC0LXQu9GM0L3QvtGB0YLQuFxyXG5cclxuICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuXHJcbiAgICAgIC8vINCh0L7Qt9C00LDQtdC8INGN0LvQtdC80LXQvdGCINGB0L/QuNGB0LrQsFxyXG4gICAgICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgaXRlbUVsZW1lbnQuY2xhc3NOYW1lID0gYG1lbnVfX2l0ZW0gc2V0dGluZ19faXRlbSBpdGVtLXNldHRpbmcgaXRlbS1zZXR0aW5nLSR7anVnfWA7XHJcblxyXG4gICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0YHQvtC00LXRgNC20LjQvNC+0LUg0LIg0L3QvtCy0YvQuSDRjdC70LXQvNC10L3RglxyXG4gICAgICBpdGVtRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tc2V0dGluZ19fdGl0bGVcIj4ke2p1Z0VsZW1lbnQudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tc2V0dGluZ19fc2xpZGVyIFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXNldHRpbmdfX3ZhbHVlXCI+0JfQvdCw0YfQtdC90LjQtTogPHNwYW4+JHtqdWdFbGVtZW50LnBlcmNlbnR9JTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRjdC70LXQvNC10L3RgiDQsiDRhNGA0LDQs9C80LXQvdGCXHJcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGl0ZW1FbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiyDQt9CwINC+0LTQuNC9INGA0LDQtyDQsiBET01cclxuICBzZXR0aW5nTGlzdC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcblxyXG4gIC8vINCY0L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0YHQu9Cw0LnQtNC10YDRi1xyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG5cclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGAuaXRlbS1zZXR0aW5nLSR7anVnfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlciA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyVmFsdWUgPSBzZXR0aW5nU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLml0ZW0tc2V0dGluZ19fdmFsdWUgc3BhblwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyBub1VpU2xpZGVyXHJcbiAgICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNldHRpbmdTbGlkZXIsIHtcclxuICAgICAgICBzdGFydDogW2p1Z0VsZW1lbnQucGVyY2VudF0sXHJcbiAgICAgICAgc3RlcDogMSxcclxuICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgbWluOiBbMF0sXHJcbiAgICAgICAgICBtYXg6IFsxMDBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g0J7QsdC90L7QstC70LXQvdC40LUg0LfQvdCw0YfQtdC90LjRjyDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgc2V0dGluZ1NsaWRlci5ub1VpU2xpZGVyLm9uKFwidXBkYXRlXCIsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gICAgICAgIHNldHRpbmdTbGlkZXJWYWx1ZS5pbm5lckhUTUwgPSBgJHtOdW1iZXIodmFsdWVzW2hhbmRsZV0pLnRvRml4ZWQoMCl9JWA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGl0ZW1TZXR0aW5nU2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIik7XHJcbiAgaXRlbVNldHRpbmdTbGlkZXJzLmZvckVhY2goKHNsaWRlcikgPT4ge1xyXG4gICAgc2xpZGVyLm5vVWlTbGlkZXIub24oXCJ1cGRhdGVcIiwgdXBkYXRlU3VtKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU3VtKCkge1xyXG4gICAgbGV0IHRvdGFsU3VtID0gQXJyYXkuZnJvbShpdGVtU2V0dGluZ1NsaWRlcnMpLnJlZHVjZSgoc3VtLCBzbGlkZXIpID0+IHtcclxuICAgICAgcmV0dXJuIHN1bSArIE51bWJlcihzbGlkZXIubm9VaVNsaWRlci5nZXQoKSk7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICBzZXR0aW5nQ291bnRlci5pbm5lckhUTUwgPSB0b3RhbFN1bTtcclxuICB9XHJcbn1cclxucmFuZ2VJbml0KCk7XHJcblxyXG4vLyDQntCx0L3QvtCy0LvQtdC90LjQtSDQvdCw0YHRgtGA0L7QtdC6XHJcbmZ1bmN0aW9uIHVwZGF0ZVNldHRpbmcoKSB7XHJcbiAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDRgdC70LDQudC00LXRgNGLXHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcblxyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYC5pdGVtLXNldHRpbmctJHtqdWd9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiXHJcbiAgICAgICk7XHJcbiAgICAgIHNldHRpbmdTbGlkZXIubm9VaVNsaWRlci5zZXQoW2p1Z0VsZW1lbnQucGVyY2VudF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q29va2llKFwianVnc1wiLCBqdWdzKTtcclxufVxyXG5cclxuLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQuNGB0YLQvtGA0LjQuFxyXG5mdW5jdGlvbiBoaXN0b3J5SW5pdCgpIHtcclxuICAvLyDQn9C+0LvRg9GH0LDQtdC8INGC0LXQutGD0YnRg9GOINC00LDRgtGDXHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIC8vINCk0L7RgNC80LDRgtC40YDRg9C10Lwg0LTQsNGC0YMg0LTQu9GPINGB0LXQs9C+0LTQvdGP0YjQvdC10LPQviDQtNC90Y8gKNC00LXQvdGML9C80LXRgdGP0YYpXHJcbiAgY29uc3QgZGF0YVRvZGF5ID0gYCR7dG9kYXkuZ2V0RGF0ZSgpfS8ke3RvZGF5LmdldE1vbnRoKCkgKyAxfWA7XHJcbiAgLy8g0J3QsNGF0L7QtNC40Lwg0Y3Qu9C10LzQtdC90YIg0YHQv9C40YHQutCwINC40YHRgtC+0YDQuNC4INCyINC00L7QutGD0LzQtdC90YLQtVxyXG4gIGNvbnN0IGhpc3RvcnlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5X19saXN0XCIpO1xyXG4gIC8vINCh0L7Qt9C00LDQtdC8INGE0YDQsNCz0LzQtdC90YIg0LTQvtC60YPQvNC10L3RgtCwINC00LvRjyDQsdC+0LvQtdC1INGN0YTRhNC10LrRgtC40LLQvdC+0LPQviDQtNC+0LHQsNCy0LvQtdC90LjRjyDRjdC70LXQvNC10L3RgtC+0LJcclxuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgLy8g0J/RgNC+0YXQvtC00LjQvCDQv9C+INC60LDQttC00L7QuSDQtNCw0YLQtSDQsiDQvtCx0YrQtdC60YLQtSBoaXN0b3J5XHJcbiAgZm9yIChjb25zdCBkYXRlIGluIGhpc3RvcnkpIHtcclxuICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0YfRgtC+INGB0LLQvtC50YHRgtCy0L4g0L/RgNC40L3QsNC00LvQtdC20LjRgiDRgdCw0LzQvtC80YMg0L7QsdGK0LXQutGC0YMgaGlzdG9yeVxyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoaXN0b3J5LCBkYXRlKSkge1xyXG4gICAgICBjb25zdCBlbGVtZW50cyA9IGhpc3RvcnlbZGF0ZV07IC8vINCt0LvQtdC80LXQvdGC0Ysg0LTQu9GPINC00LDQvdC90L7QuSDQtNCw0YLRi1xyXG4gICAgICBsZXQgaGlzdG9yeURhdGFMYWJlbDtcclxuXHJcbiAgICAgIC8vINCh0YDQsNCy0L3QuNCy0LDQtdC8INC00LDRgtGDINGBINGB0LXQs9C+0LTQvdGP0YjQvdC10LlcclxuICAgICAgaWYgKGRhdGUgPT09IGRhdGFUb2RheSkge1xyXG4gICAgICAgIGhpc3RvcnlEYXRhTGFiZWwgPSBcItCh0LXQs9C+0LTQvdGPXCI7IC8vINCV0YHQu9C4INC00LDRgtGLINGB0L7QstC/0LDQtNCw0Y7Rgiwg0LjRgdC/0L7Qu9GM0LfRg9C10LwgXCLQodC10LPQvtC00L3Rj1wiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8g0JjQvdCw0YfQtSDRhNC+0YDQvNCw0YLQuNGA0YPQtdC8INC00LDRgtGDINC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGPXHJcbiAgICAgICAgY29uc3QgW2RheSwgbW9udGhdID0gZGF0ZS5zcGxpdChcIi9cIikubWFwKE51bWJlcik7IC8vINCg0LDQt9C00LXQu9GP0LXQvCDQtNC10L3RjCDQuCDQvNC10YHRj9GGXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IG5ldyBEYXRlKCk7IC8vINCh0L7Qt9C00LDQtdC8INC90L7QstGL0Lkg0L7QsdGK0LXQutGCINC00LDRgtGLXHJcbiAgICAgICAgZm9ybWF0dGVkRGF0ZS5zZXREYXRlKGRheSk7IC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC00LXQvdGMXHJcbiAgICAgICAgZm9ybWF0dGVkRGF0ZS5zZXRNb250aChtb250aCAtIDEpOyAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQvNC10YHRj9GGICjQvNC40L3Rg9GBIDEsINGC0LDQuiDQutCw0Log0LzQtdGB0Y/RhtGLINC90YPQvNC10YDRg9GO0YLRgdGPINGBIDApXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgZGF5OiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiIH07IC8vINCe0L/RhtC40Lgg0LTQu9GPINGE0L7RgNC80LDRgtC40YDQvtCy0LDQvdC40Y9cclxuICAgICAgICBoaXN0b3J5RGF0YUxhYmVsID0gZm9ybWF0dGVkRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJydS1SVVwiLCBvcHRpb25zKTsgLy8g0KTQvtGA0LzQsNGC0LjRgNGD0LXQvCDQtNCw0YLRgyDQsiDRgNGD0YHRgdC60L7QuSDQu9C+0LrQsNC70LhcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g0KHQvtC30LTQsNC10LwgSFRNTCDQtNC70Y8g0Y3Qu9C10LzQtdC90YLQvtCyINC40YHRgtC+0YDQuNC4INC00LvRjyDQtNCw0L3QvdC+0Lkg0LTQsNGC0YtcclxuICAgICAgY29uc3QgaGlzdG9yeUl0ZW1zID0gZWxlbWVudHNcclxuICAgICAgICAubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAvLyDQntC/0YDQtdC00LXQu9GP0LXQvCDRgtC40L8g0Y3Qu9C10LzQtdC90YLQsCAo0LTQvtGF0L7QtCDQuNC70Lgg0YDQsNGB0YXQvtC0KVxyXG4gICAgICAgICAgbGV0IHJlcztcclxuICAgICAgICAgIGlmIChpdGVtWzBdID09PSBcIi1cIikge1xyXG4gICAgICAgICAgICByZXMgPSBcImV4cGVuc2VcIjtcclxuICAgICAgICAgICAgaXRlbSA9IFwiK1wiICsgaXRlbTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcyA9IFwiaW5jb21lXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJpdGVtLWhpc3RvcnlfX2VsZW1lbnQgJHtyZXN9XCI+JHtpdGVtfTwvZGl2PmA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuam9pbihcIlwiKTsgLy8g0J7QsdGK0LXQtNC40L3Rj9C10Lwg0Y3Qu9C10LzQtdC90YLRiyDQsiDRgdGC0YDQvtC60YNcclxuXHJcbiAgICAgIC8vINCh0L7Qt9C00LDQtdC8INGA0LDQt9C80LXRgtC60YMg0LTQu9GPINC00LDQvdC90L7QuSDQtNCw0YLRiyDQuCDQtdC1INGN0LvQtdC80LXQvdGC0L7QslxyXG4gICAgICBjb25zdCBoaXN0b3J5SXRlbUhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1oaXN0b3J5X19kYXRhXCI+JHtoaXN0b3J5RGF0YUxhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0taGlzdG9yeV9fYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aGlzdG9yeUl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0Y3Qu9C10LzQtdC90YIg0LIg0YTRgNCw0LPQvNC10L3RglxyXG4gICAgICBjb25zdCB0ZW1wTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7IC8vINCS0YDQtdC80LXQvdC90YvQuSDRjdC70LXQvNC10L3RgiDQtNC70Y8g0L/QsNGA0YHQuNC90LPQsCBIVE1MXHJcbiAgICAgIHRlbXBMaS5pbm5lckhUTUwgPSBoaXN0b3J5SXRlbUhUTUw7XHJcbiAgICAgIHRlbXBMaS5jbGFzc0xpc3QuYWRkKFwiaGlzdG9yeV9faXRlbVwiLCBcIml0ZW0taGlzdG9yeVwiKTtcclxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGVtcExpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiyDQuNC3INGE0YDQsNCz0LzQtdC90YLQsCDQsiDRjdC70LXQvNC10L3RgiDRgdC/0LjRgdC60LAg0LjRgdGC0L7RgNC40LhcclxuICBoaXN0b3J5TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGhpc3RvcnlMaXN0LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxufVxyXG5cclxuLy8g0LTQvtCx0L7QstC70LXQvdC40LUg0L7Qv9C10YDQsNGG0LjQuCDQsiDQuNGB0YLQvtGA0LjRjlxyXG5mdW5jdGlvbiBhZGRUcmFuc2FjdGlvbihkYXRlLCBhbW91bnQpIHtcclxuICAvLyDQn9GA0L7QstC10YDQutCwLCDRgdGD0YnQtdGB0YLQstGD0LXRgiDQu9C4INC00LDRgtCwINCyINC+0LHRitC10LrRgtC1XHJcbiAgaWYgKGhpc3RvcnkuaGFzT3duUHJvcGVydHkoZGF0ZSkpIHtcclxuICAgIC8vINCV0YHQu9C4INGB0YPRidC10YHRgtCy0YPQtdGCLCDQtNC+0LHQsNCy0LvRj9C10Lwg0L7Qv9C10YDQsNGG0LjRjiDQsiDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LzQsNGB0YHQuNCyXHJcbiAgICBoaXN0b3J5W2RhdGVdLnB1c2goYW1vdW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8g0JXRgdC70Lgg0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRgiwg0YHQvtC30LTQsNC10Lwg0L3QvtCy0YvQuSDQvNCw0YHRgdC40LIg0YEg0L3QvtCy0L7QuSDQvtC/0LXRgNCw0YbQuNC10LlcclxuICAgIGhpc3RvcnlbZGF0ZV0gPSBbYW1vdW50XTtcclxuICB9XHJcbiAgaGlzdG9yeUluaXQoKTtcclxufVxyXG5cclxuLy8g0J7RgtCy0LXRgiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y5cclxuZnVuY3Rpb24gdXNlck1lc3NhZ2UodGV4dCwgZWxlbWVudCkge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImdvb2RcIiwgXCJlcnJvclwiKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0ZXh0KTtcclxuICB9LCAwKTtcclxufVxyXG5cclxuLy8g0YDQsNGB0YfQtdGCINGB0YDQtdC00YHRgiDQvNC10LbQtNGDINC60YPQstGI0LjQvdCw0LzQuFxyXG5mdW5jdGlvbiBjYWxjdWxhdGlvbkp1Z3MoKSB7XHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcbiAgICAgIGp1Z0VsZW1lbnQubW9uZXkgKz0gYW1vdW50ICogKGp1Z0VsZW1lbnQucGVyY2VudCAvIDEwMCk7XHJcbiAgICAgIC8vINCe0LPRgNCw0L3QuNGH0LjQstCw0LXQvCDQutC+0LvQuNGH0LXRgdGC0LLQviDRhtC40YTRgCDQv9C+0YHQu9C1INC30LDQv9GP0YLQvtC5INC00L4gMlxyXG4gICAgICBqdWdFbGVtZW50Lm1vbmV5ID0gcGFyc2VGbG9hdChqdWdFbGVtZW50Lm1vbmV5LnRvRml4ZWQoMikpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhbW91bnQgPSAwO1xyXG4gIGRpc3BsYXlEYXRhKCk7IC8vINGE0YPQvdC60YbQuNGPINC00LvRjyDQstGL0LLQvtC00LAg0LTQsNC90L3Ri9GFINC90LAg0Y3QutGA0LDQvVxyXG59XHJcblxyXG4vLyDQn9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFINGE0L7RgNC8XHJcbmZ1bmN0aW9uIGdldEluZm9Gb3JtKGZvcm0pIHtcclxuICBmb3JtLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGZvcm1JbmZvID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShmb3JtLnRhcmdldCkuZW50cmllcygpKTtcclxuXHJcbiAgZGF0YVByb2Nlc3NpbmcoZm9ybUluZm8sIGZvcm0uc3VibWl0dGVyKTtcclxufVxyXG5cclxuLy8g0J7QsdGA0LDQsdC+0YLQutCwINC00LDQvdC90YvRhVxyXG5mdW5jdGlvbiBkYXRhUHJvY2Vzc2luZyhmb3JtSW5mbywgYnV0dG9uKSB7XHJcbiAgLy8g0JLQvdC+0YEg0YHRgNC10LTRgdGCXHJcbiAgaWYgKFwibW9uZXlJbnB1dFwiIGluIGZvcm1JbmZvKSB7XHJcbiAgICBmb3JtSW5mby5tb25leUlucHV0ID0gTnVtYmVyKGZvcm1JbmZvLm1vbmV5SW5wdXQpO1xyXG5cclxuICAgIGlmIChmb3JtSW5mby5qdWdzID09IFwidW5zcGVjaWZpZWRcIikge1xyXG4gICAgICBpZiAoZm9ybUluZm8ubW9uZXlJbnB1dCA+PSAxMDApIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHVzZXJNZXNzYWdlKFwiZ29vZFwiLCBidXR0b24pO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIGFtb3VudCArPSBmb3JtSW5mby5tb25leUlucHV0O1xyXG4gICAgICAgIGNhbGN1bGF0aW9uSnVncygpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgYWRkVHJhbnNhY3Rpb24oXHJcbiAgICAgICAgICBgJHtkYXRhLmdldERhdGUoKX0vJHtkYXRhLmdldE1vbnRoKCkgKyAxfWAsXHJcbiAgICAgICAgICBmb3JtSW5mby5tb25leUlucHV0XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHVzZXJNZXNzYWdlKFwiZXJyb3JcIiwgYnV0dG9uKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChmb3JtSW5mby5qdWdzKSB7XHJcbiAgICAgIGp1Z3NbZm9ybUluZm8uanVnc10ubW9uZXkgKz0gZm9ybUluZm8ubW9uZXlJbnB1dDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b24pO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCS0YvQvdC+0YEg0YHRgNC10LTRgdGC0LJcclxuICBpZiAoXCJtb25leU91dHB1dFwiIGluIGZvcm1JbmZvKSB7XHJcbiAgICBmb3JtSW5mby5tb25leU91dHB1dCA9IE51bWJlcihmb3JtSW5mby5tb25leU91dHB1dCk7XHJcblxyXG4gICAgaWYgKGp1Z3NbZm9ybUluZm8uanVnc10ubW9uZXkgPj0gZm9ybUluZm8ubW9uZXlPdXRwdXQpIHtcclxuICAgICAganVnc1tmb3JtSW5mby5qdWdzXS5tb25leSAtPSBmb3JtSW5mby5tb25leU91dHB1dDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b24pO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L/RgNC4INCy0L3QvtGB0LUg0YHRgNC10LTRgdGC0LJcclxubGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9uZXktZm9ybS1pbnB1dFwiKTtcclxuZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5mb0Zvcm0pO1xyXG5cclxubGV0IGZvcm1PdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vbmV5LWZvcm0tb3V0cHV0XCIpO1xyXG5mb3JtT3V0cHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5mb0Zvcm0pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5MTJiMGFkNTAxYTE3YWFhZDQ5NFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==