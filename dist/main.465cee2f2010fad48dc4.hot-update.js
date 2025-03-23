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
let history = {};

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
          const res = item[0] === "-" ? "expense" : "income";
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
  historyList.innerHTML = fragment;
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
/******/ 	__webpack_require__.h = () => ("193f0e15fca6407aea0b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlLEdBQUcsb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ3JnQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvc2NyaXB0LmpzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRhNGD0L3QutGG0LjQvtC90LDQu9CwIFwi0KfQtdGA0YLQvtCz0L7QsiDQpNGA0LjQu9Cw0L3RgdC10YDQsFwiXHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XHJcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHQv9C40YHQutCwINCw0LrRgtC40LLQvdGL0YUg0LzQvtC00YPQu9C10LlcclxuaW1wb3J0IHsgZmxzTW9kdWxlcyB9IGZyb20gXCIuL21vZHVsZXMuanNcIjtcclxuaW1wb3J0ICogYXMgbm9VaVNsaWRlciBmcm9tIFwibm91aXNsaWRlclwiO1xyXG5cclxuLy8gQ29va2llIGpzXHJcbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lLCBqc29uID0gZmFsc2UpIHtcclxuICBpZiAoIW5hbWUpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIC8qXHJcbiAgUmV0dXJucyBjb29raWUgd2l0aCBzcGVjaWZpZWQgbmFtZSAoc3RyKSBpZiBleGlzdHMsIGVsc2UgLSB1bmRlZmluZWRcclxuICBpZiByZXR1cm5pbmcgdmFsdWUgaXMgSlNPTiBhbmQganNvbiBwYXJhbWV0ZXIgaXMgdHJ1ZSwgcmV0dXJucyBqc29uLCBvdGhlcndpc2Ugc3RyXHJcbiAgKi9cclxuICBsZXQgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChcclxuICAgIG5ldyBSZWdFeHAoXHJcbiAgICAgIFwiKD86Xnw7IClcIiArIG5hbWUucmVwbGFjZSgvKFsuJD8qfHt9KClcXFtcXF1cXFxcXFwvK15dKS9nLCBcIlxcXFwkMVwiKSArIFwiPShbXjtdKilcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgaWYgKG1hdGNoZXMpIHtcclxuICAgIGxldCByZXMgPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSk7XHJcbiAgICBpZiAoanNvbikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlcyk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5mdW5jdGlvbiBzZXRDb29raWUobmFtZSwgdmFsdWUsIG9wdGlvbnMgPSB7IHBhdGg6IFwiL1wiIH0pIHtcclxuICAvKlxyXG4gIFNldHMgYSBjb29raWUgd2l0aCBzcGVjaWZpZWQgbmFtZSAoc3RyKSwgdmFsdWUgKHN0cikgJiBvcHRpb25zIChkaWN0KVxyXG5cclxuICBvcHRpb25zIGtleXM6XHJcbiAgICAtIHBhdGggKHN0cikgLSBVUkwsIGZvciB3aGljaCB0aGlzIGNvb2tpZSBpcyBhdmFpbGFibGUgKG11c3QgYmUgYWJzb2x1dGUhKVxyXG4gICAgLSBkb21haW4gKHN0cikgLSBkb21haW4sIGZvciB3aGljaCB0aGlzIGNvb2tpZSBpcyBhdmFpbGFibGVcclxuICAgIC0gZXhwaXJlcyAoRGF0ZSBvYmplY3QpIC0gZXhwaXJhdGlvbiBkYXRlJnRpbWUgb2YgY29va2llXHJcbiAgICAtIG1heC1hZ2UgKGludCkgLSBjb29raWUgbGlmZXRpbWUgaW4gc2Vjb25kcyAoYWx0ZXJuYXRpdmUgZm9yIGV4cGlyZXMgb3B0aW9uKVxyXG4gICAgLSBzZWN1cmUgKGJvb2wpIC0gaWYgdHJ1ZSwgY29va2llIHdpbGwgYmUgYXZhaWxhYmxlIG9ubHkgZm9yIEhUVFBTLlxyXG4gICAgICAgICAgICAgICAgICAgICAgSVQgQ0FOJ1QgQkUgRkFMU0VcclxuICAgIC0gc2FtZXNpdGUgKHN0cikgLSBYU1JGIHByb3RlY3Rpb24gc2V0dGluZy5cclxuICAgICAgICAgICAgICAgICAgICAgICBDYW4gYmUgc3RyaWN0IG9yIGxheFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFJlYWQgaHR0cHM6Ly93ZWIuZGV2L3NhbWVzaXRlLWNvb2tpZXMtZXhwbGFpbmVkLyBmb3IgZGV0YWlsc1xyXG4gICAgLSBodHRwT25seSAoYm9vbCkgLSBpZiB0cnVlLCBjb29raWUgd29uJ3QgYmUgYXZhaWxhYmxlIGZvciB1c2luZyBpbiBKYXZhU2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElUIENBTidUIEJFIEZBTFNFXHJcbiAgKi9cclxuICBpZiAoIW5hbWUpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICBpZiAob3B0aW9ucy5leHBpcmVzIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgb3B0aW9ucy5leHBpcmVzID0gb3B0aW9ucy5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gIH1cclxuICBsZXQgdXBkYXRlZENvb2tpZSA9XHJcbiAgICBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgZm9yIChsZXQgb3B0aW9uS2V5IGluIG9wdGlvbnMpIHtcclxuICAgIHVwZGF0ZWRDb29raWUgKz0gXCI7IFwiICsgb3B0aW9uS2V5O1xyXG4gICAgbGV0IG9wdGlvblZhbHVlID0gb3B0aW9uc1tvcHRpb25LZXldO1xyXG4gICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XHJcbiAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI9XCIgKyBvcHRpb25WYWx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcclxufVxyXG5mdW5jdGlvbiBkZWxldGVDb29raWUobmFtZSkge1xyXG4gIC8qXHJcbiAgRGVsZXRlcyBhIGNvb2tpZSB3aXRoIHNwZWNpZmllZCBuYW1lLlxyXG4gIFJldHVybnMgdHJ1ZSB3aGVuIGNvb2tpZSB3YXMgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQsIG90aGVyd2lzZSBmYWxzZVxyXG4gICovXHJcbiAgc2V0Q29va2llKG5hbWUsIG51bGwsIHtcclxuICAgIGV4cGlyZXM6IG5ldyBEYXRlKCksXHJcbiAgICBwYXRoOiBcIi9cIixcclxuICB9KTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyDQm9C+0LPQuNC60LAg0L/RgNC40LvQvtC20LXQvdC40Y9cclxuXHJcbi8vINCU0LXQudGB0YLQstC40Y8g0L/RgNC4INC60LvQuNC60LVcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvY3VtZW50QWN0aW9ucyk7XHJcblxyXG4gIGZ1bmN0aW9uIGRvY3VtZW50QWN0aW9ucyhlKSB7XHJcbiAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xyXG5cclxuICAgIC8vINCh0LHRgNC+0YEg0LfQvdCw0YfQtdC90LjQuSDQvdCw0YHRgtGA0L7QtdC6XHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KGAuYnV0dG9uLXJlc2V0YCkpIHtcclxuICAgICAgbGV0IGJ1dHRvblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tcmVzZXRcIik7XHJcbiAgICAgIGxldCBzZXR0aW5nU2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuaXRlbS1zZXR0aW5nIC5pdGVtLXNldHRpbmdfX3NsaWRlclwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBsZXQganVnSW5kZXggPSAwO1xyXG4gICAgICBjb25zdCB2YWx1ZXMgPSBbNTUsIDEwLCAxMCwgMTAsIDEwLCA1XTsgLy8g0JfQvdCw0YfQtdC90LjRjyDQtNC70Y8g0L/RgNC40YHQstC+0LXQvdC40Y9cclxuXHJcbiAgICAgIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnRKdWcgPSBqdWdzW2p1Z107XHJcbiAgICAgICAgICBpZiAoanVnSW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRKdWcucGVyY2VudCA9IHZhbHVlc1tqdWdJbmRleF07IC8vINCf0YDQuNGB0LLQvtC10L3QuNC1INC30L3QsNGH0LXQvdC40Y9cclxuICAgICAgICAgICAganVnSW5kZXgrKzsgLy8g0KPQstC10LvQuNGH0LjQstCw0LXQvCDQuNC90LTQtdC60YFcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVwZGF0ZVNldHRpbmcoKTtcclxuICAgICAgZGlzcGxheURhdGEoKTtcclxuXHJcbiAgICAgIHVzZXJNZXNzYWdlKFwiZ29vZFwiLCBidXR0b25SZXNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0KHQsdGA0L7RgSDQstGB0LXRhSDRgdGA0LXQtNGB0YLQslxyXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdChgLmJ1dHRvbi1yZXNldC1tb25leWApKSB7XHJcbiAgICAgIGxldCBidXR0b25SZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXJlc2V0LW1vbmV5XCIpO1xyXG4gICAgICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG4gICAgICAgICAganVnRWxlbWVudC5tb25leSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJNZXNzYWdlKFwiZ29vZFwiLCBidXR0b25SZXNldCk7XHJcblxyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCf0YDQuNC80LXQvdC40YLRjCDQvdCw0YHRgtGA0L7QudC60LhcclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoXCIuYnV0dG9uLWFwcGx5XCIpKSB7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbkFwcGx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tYXBwbHlcIik7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiKTtcclxuICAgICAgY29uc3QgaXRlbVNldHRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tc2V0dGluZ1wiKTtcclxuXHJcbiAgICAgIGxldCB0b3RhbFNsaWRlclZhbHVlID0gMDtcclxuXHJcbiAgICAgIC8vINCS0YvRh9C40YHQu9GP0LXQvCDRgdGD0LzQvNGDINC30L3QsNGH0LXQvdC40Lkg0YHQu9Cw0LnQtNC10YDQvtCyXHJcbiAgICAgIHNldHRpbmdTbGlkZXJzLmZvckVhY2goKHNsaWRlcikgPT4ge1xyXG4gICAgICAgIHRvdGFsU2xpZGVyVmFsdWUgKz0gTnVtYmVyKHNsaWRlci5ub1VpU2xpZGVyLmdldCgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodG90YWxTbGlkZXJWYWx1ZSA9PT0gMTAwKSB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbkFwcGx5KTtcclxuXHJcbiAgICAgICAgLy8g0J7QsdC90L7QstC70Y/QtdC8INC30L3QsNGH0LXQvdC40Y8g0LIg0L7QsdGK0LXQutGC0LUganVnc1xyXG4gICAgICAgIGl0ZW1TZXR0aW5nLmZvckVhY2goKHNsaWRlcldyYXBwZXIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHNsaWRlciA9IHNsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiKTtcclxuICAgICAgICAgIGNvbnN0IHNsaWRlcldyYXBwZXJDbGFzc2VzID0gQXJyYXkuZnJvbShzbGlkZXJXcmFwcGVyLmNsYXNzTGlzdCk7XHJcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NsYXNzID0gc2xpZGVyV3JhcHBlckNsYXNzZXMuZmluZCgoY2xhc3NOYW1lKSA9PlxyXG4gICAgICAgICAgICBjbGFzc05hbWUuc3RhcnRzV2l0aChcIml0ZW0tc2V0dGluZy1cIilcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgaWYgKHNwZWNpZmljQ2xhc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgY2xhc3NXaXRob3V0UHJlZml4ID0gc3BlY2lmaWNDbGFzcy5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgIFwiaXRlbS1zZXR0aW5nLVwiLFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAganVnc1tjbGFzc1dpdGhvdXRQcmVmaXhdLnBlcmNlbnQgPSBOdW1iZXIoc2xpZGVyLm5vVWlTbGlkZXIuZ2V0KCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVzZXJNZXNzYWdlKFwiZXJyb3JcIiwgYnV0dG9uQXBwbHkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8g0JLRgdC1INC/0LXRgNC10LzQtdC90L3Ri9C1XHJcbmxldCBhbW91bnQgPSAwO1xyXG5sZXQganVncyA9IHtcclxuICBtb250aGx5OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDU1LFxyXG4gICAgdGl0bGU6IFwi0JXQttC10LzQtdGB0Y/Rh9C90YvQtSDRgtGA0LDRgtGLXCIsXHJcbiAgfSxcclxuICBlbnRlcnRhaW5tZW50OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0KDQsNC30LLQu9C10YfQtdC90LjRj1wiLFxyXG4gIH0sXHJcbiAgc2F2aW5nOiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0J3QsNC60L7Qv9C70LXQvdC40Y9cIixcclxuICB9LFxyXG4gIGRldmVsb3BtZW50OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0KHQsNC80L7RgNCw0LfQstC40YLQuNC1XCIsXHJcbiAgfSxcclxuICBzYWZldHk6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMTAsXHJcbiAgICB0aXRsZTogXCLQn9C+0LTRg9GI0LrQsCDQsdC10LfQvtC/0LDRgdC90L7RgdGC0LhcIixcclxuICB9LFxyXG4gIHByZXNlbnQ6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogNSxcclxuICAgIHRpdGxlOiBcItCf0L7QtNCw0YDQutC4XCIsXHJcbiAgfSxcclxufTtcclxubGV0IGhpc3RvcnkgPSB7fTtcclxuXHJcbmlmIChnZXRDb29raWUoXCJqdWdzXCIpKSB7XHJcbiAganVncyA9IGdldENvb2tpZShcImp1Z3NcIiwgdHJ1ZSk7XHJcbn1cclxuaWYgKGdldENvb2tpZShcImhpc3RvcnlcIikpIHtcclxuICBoaXN0b3J5ID0gZ2V0Q29va2llKFwiaGlzdG9yeVwiLCB0cnVlKTtcclxufVxyXG5cclxuLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L3QsCDRjdC60YDQsNC90LVcclxuZnVuY3Rpb24gZGlzcGxheURhdGEoKSB7XHJcbiAgLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQutGD0LLRiNC40L3QvtCyXHJcbiAgbGV0IGp1Z3NJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanVnc19faXRlbXNcIik7XHJcbiAganVnc0l0ZW1zLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG5cclxuICAgICAgbGV0IGl0ZW0gPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImp1Z3NfX2l0ZW0gaXRlbS1qdWdzIGl0ZW0tanVncy0ke2p1Z31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tanVnc19fdGl0bGVcIj4ke2p1Z0VsZW1lbnQudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHlcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaXRlbS1qdWdzX19pbWdcIiBzcmM9XCJpbWcvaWNvbi9qYXIuc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LXRvcC1wZXJjZW50XCI+JHtqdWdFbGVtZW50LnBlcmNlbnR9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktYm90dG9tLXRleHRcIj7QvtGB0YLQsNC70L7RgdGMOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxicj48c3BhbiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS1ib3R0b20tbW9uZXlcIj4ke2p1Z0VsZW1lbnQubW9uZXl9IHAuPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuXHJcbiAgICAgIGp1Z3NJdGVtcy5pbm5lckhUTUwgKz0gaXRlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0L3QsNGB0YLRgNC+0LXQulxyXG4gIHJhbmdlSW5pdCgpO1xyXG4gIGhpc3RvcnlJbml0KCk7XHJcbiAgc2V0Q29va2llKFwianVnc1wiLCBqdWdzKTtcclxufVxyXG5kaXNwbGF5RGF0YSgpO1xyXG5cclxuLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQvdCw0YHRgtGA0L7QtdC6XHJcbmZ1bmN0aW9uIHJhbmdlSW5pdCgpIHtcclxuICBjb25zdCBzZXR0aW5nQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ19fY291bnRlciBzcGFuXCIpO1xyXG4gIGNvbnN0IHNldHRpbmdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXR0aW5nX19saXN0XCIpO1xyXG4gIHNldHRpbmdMaXN0LmlubmVySFRNTCA9IFwiXCI7IC8vINCe0YfQuNGJ0LDQtdC8INC/0YDQtdC00YvQtNGD0YnQuNC5INC60L7QvdGC0LXQvdGCXHJcblxyXG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvLyDQodC+0LfQtNCw0LXQvCDQstGA0LXQvNC10L3QvdGL0Lkg0YTRgNCw0LPQvNC10L3RgiDQtNC70Y8g0YPQu9GD0YfRiNC10L3QvdC+0Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YzQvdC+0YHRgtC4XHJcblxyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG5cclxuICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0Y3Qu9C10LzQtdC90YIg0YHQv9C40YHQutCwXHJcbiAgICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBpdGVtRWxlbWVudC5jbGFzc05hbWUgPSBgbWVudV9faXRlbSBzZXR0aW5nX19pdGVtIGl0ZW0tc2V0dGluZyBpdGVtLXNldHRpbmctJHtqdWd9YDtcclxuXHJcbiAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDQsiDQvdC+0LLRi9C5INGN0LvQtdC80LXQvdGCXHJcbiAgICAgIGl0ZW1FbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1zZXR0aW5nX190aXRsZVwiPiR7anVnRWxlbWVudC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1zZXR0aW5nX19zbGlkZXIgXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tc2V0dGluZ19fdmFsdWVcIj7Ql9C90LDRh9C10L3QuNC1OiA8c3Bhbj4ke2p1Z0VsZW1lbnQucGVyY2VudH0lPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGN0LvQtdC80LXQvdGCINCyINGE0YDQsNCz0LzQtdC90YJcclxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaXRlbUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INCy0YHQtSDRjdC70LXQvNC10L3RgtGLINC30LAg0L7QtNC40L0g0YDQsNC3INCyIERPTVxyXG4gIHNldHRpbmdMaXN0LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuXHJcbiAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDRgdC70LDQudC00LXRgNGLXHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcblxyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYC5pdGVtLXNldHRpbmctJHtqdWd9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXJWYWx1ZSA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuaXRlbS1zZXR0aW5nX192YWx1ZSBzcGFuXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPIG5vVWlTbGlkZXJcclxuICAgICAgbm9VaVNsaWRlci5jcmVhdGUoc2V0dGluZ1NsaWRlciwge1xyXG4gICAgICAgIHN0YXJ0OiBbanVnRWxlbWVudC5wZXJjZW50XSxcclxuICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICBtaW46IFswXSxcclxuICAgICAgICAgIG1heDogWzEwMF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyDQntCx0L3QvtCy0LvQtdC90LjQtSDQt9C90LDRh9C10L3QuNGPINC/0YDQuCDQuNC30LzQtdC90LXQvdC40Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICBzZXR0aW5nU2xpZGVyLm5vVWlTbGlkZXIub24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgICAgICAgc2V0dGluZ1NsaWRlclZhbHVlLmlubmVySFRNTCA9IGAke051bWJlcih2YWx1ZXNbaGFuZGxlXSkudG9GaXhlZCgwKX0lYDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgaXRlbVNldHRpbmdTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiKTtcclxuICBpdGVtU2V0dGluZ1NsaWRlcnMuZm9yRWFjaCgoc2xpZGVyKSA9PiB7XHJcbiAgICBzbGlkZXIubm9VaVNsaWRlci5vbihcInVwZGF0ZVwiLCB1cGRhdGVTdW0pO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTdW0oKSB7XHJcbiAgICBsZXQgdG90YWxTdW0gPSBBcnJheS5mcm9tKGl0ZW1TZXR0aW5nU2xpZGVycykucmVkdWNlKChzdW0sIHNsaWRlcikgPT4ge1xyXG4gICAgICByZXR1cm4gc3VtICsgTnVtYmVyKHNsaWRlci5ub1VpU2xpZGVyLmdldCgpKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIHNldHRpbmdDb3VudGVyLmlubmVySFRNTCA9IHRvdGFsU3VtO1xyXG4gIH1cclxufVxyXG5yYW5nZUluaXQoKTtcclxuXHJcbi8vINCe0LHQvdC+0LLQu9C10L3QuNC1INC90LDRgdGC0YDQvtC10LpcclxuZnVuY3Rpb24gdXBkYXRlU2V0dGluZygpIHtcclxuICAvLyDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INGB0LvQsNC50LTQtdGA0YtcclxuICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuXHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgLml0ZW0tc2V0dGluZy0ke2p1Z31gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXIgPSBzZXR0aW5nU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICAgKTtcclxuICAgICAgc2V0dGluZ1NsaWRlci5ub1VpU2xpZGVyLnNldChbanVnRWxlbWVudC5wZXJjZW50XSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDb29raWUoXCJqdWdzXCIsIGp1Z3MpO1xyXG59XHJcblxyXG4vLyDQntGC0L7QsdGA0LDQttC10L3QuNC1INC40YHRgtC+0YDQuNC4XHJcbmZ1bmN0aW9uIGhpc3RvcnlJbml0KCkge1xyXG4gIC8vINCf0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YPRidGD0Y4g0LTQsNGC0YNcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgLy8g0KTQvtGA0LzQsNGC0LjRgNGD0LXQvCDQtNCw0YLRgyDQtNC70Y8g0YHQtdCz0L7QtNC90Y/RiNC90LXQs9C+INC00L3RjyAo0LTQtdC90Ywv0LzQtdGB0Y/RhilcclxuICBjb25zdCBkYXRhVG9kYXkgPSBgJHt0b2RheS5nZXREYXRlKCl9LyR7dG9kYXkuZ2V0TW9udGgoKSArIDF9YDtcclxuICAvLyDQndCw0YXQvtC00LjQvCDRjdC70LXQvNC10L3RgiDRgdC/0LjRgdC60LAg0LjRgdGC0L7RgNC40Lgg0LIg0LTQvtC60YPQvNC10L3RgtC1XHJcbiAgY29uc3QgaGlzdG9yeUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlfX2xpc3RcIik7XHJcbiAgLy8g0KHQvtC30LTQsNC10Lwg0YTRgNCw0LPQvNC10L3RgiDQtNC+0LrRg9C80LXQvdGC0LAg0LTQu9GPINCx0L7Qu9C10LUg0Y3RhNGE0LXQutGC0LjQstC90L7Qs9C+INC00L7QsdCw0LLQu9C10L3QuNGPINGN0LvQtdC80LXQvdGC0L7QslxyXG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAvLyDQn9GA0L7RhdC+0LTQuNC8INC/0L4g0LrQsNC20LTQvtC5INC00LDRgtC1INCyINC+0LHRitC10LrRgtC1IGhpc3RvcnlcclxuICBmb3IgKGNvbnN0IGRhdGUgaW4gaGlzdG9yeSkge1xyXG4gICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDRh9GC0L4g0YHQstC+0LnRgdGC0LLQviDQv9GA0LjQvdCw0LTQu9C10LbQuNGCINGB0LDQvNC+0LzRgyDQvtCx0YrQtdC60YLRgyBoaXN0b3J5XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhpc3RvcnksIGRhdGUpKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gaGlzdG9yeVtkYXRlXTsgLy8g0K3Qu9C10LzQtdC90YLRiyDQtNC70Y8g0LTQsNC90L3QvtC5INC00LDRgtGLXHJcbiAgICAgIGxldCBoaXN0b3J5RGF0YUxhYmVsO1xyXG5cclxuICAgICAgLy8g0KHRgNCw0LLQvdC40LLQsNC10Lwg0LTQsNGC0YMg0YEg0YHQtdCz0L7QtNC90Y/RiNC90LXQuVxyXG4gICAgICBpZiAoZGF0ZSA9PT0gZGF0YVRvZGF5KSB7XHJcbiAgICAgICAgaGlzdG9yeURhdGFMYWJlbCA9IFwi0KHQtdCz0L7QtNC90Y9cIjsgLy8g0JXRgdC70Lgg0LTQsNGC0Ysg0YHQvtCy0L/QsNC00LDRjtGCLCDQuNGB0L/QvtC70YzQt9GD0LXQvCBcItCh0LXQs9C+0LTQvdGPXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyDQmNC90LDRh9C1INGE0L7RgNC80LDRgtC40YDRg9C10Lwg0LTQsNGC0YMg0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y9cclxuICAgICAgICBjb25zdCBbZGF5LCBtb250aF0gPSBkYXRlLnNwbGl0KFwiL1wiKS5tYXAoTnVtYmVyKTsgLy8g0KDQsNC30LTQtdC70Y/QtdC8INC00LXQvdGMINC4INC80LXRgdGP0YZcclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gbmV3IERhdGUoKTsgLy8g0KHQvtC30LTQsNC10Lwg0L3QvtCy0YvQuSDQvtCx0YrQtdC60YIg0LTQsNGC0YtcclxuICAgICAgICBmb3JtYXR0ZWREYXRlLnNldERhdGUoZGF5KTsgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LTQtdC90YxcclxuICAgICAgICBmb3JtYXR0ZWREYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7IC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC80LXRgdGP0YYgKNC80LjQvdGD0YEgMSwg0YLQsNC6INC60LDQuiDQvNC10YHRj9GG0Ysg0L3Rg9C80LXRgNGD0Y7RgtGB0Y8g0YEgMClcclxuICAgICAgICBjb25zdCBvcHRpb25zID0geyBkYXk6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIgfTsgLy8g0J7Qv9GG0LjQuCDQtNC70Y8g0YTQvtGA0LzQsNGC0LjRgNC+0LLQsNC90LjRj1xyXG4gICAgICAgIGhpc3RvcnlEYXRhTGFiZWwgPSBmb3JtYXR0ZWREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcInJ1LVJVXCIsIG9wdGlvbnMpOyAvLyDQpNC+0YDQvNCw0YLQuNGA0YPQtdC8INC00LDRgtGDINCyINGA0YPRgdGB0LrQvtC5INC70L7QutCw0LvQuFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDQodC+0LfQtNCw0LXQvCBIVE1MINC00LvRjyDRjdC70LXQvNC10L3RgtC+0LIg0LjRgdGC0L7RgNC40Lgg0LTQu9GPINC00LDQvdC90L7QuSDQtNCw0YLRi1xyXG4gICAgICBjb25zdCBoaXN0b3J5SXRlbXMgPSBlbGVtZW50c1xyXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIC8vINCe0L/RgNC10LTQtdC70Y/QtdC8INGC0LjQvyDRjdC70LXQvNC10L3RgtCwICjQtNC+0YXQvtC0INC40LvQuCDRgNCw0YHRhdC+0LQpXHJcbiAgICAgICAgICBjb25zdCByZXMgPSBpdGVtWzBdID09PSBcIi1cIiA/IFwiZXhwZW5zZVwiIDogXCJpbmNvbWVcIjtcclxuICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIml0ZW0taGlzdG9yeV9fZWxlbWVudCAke3Jlc31cIj4ke2l0ZW19PC9kaXY+YDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5qb2luKFwiXCIpOyAvLyDQntCx0YrQtdC00LjQvdGP0LXQvCDRjdC70LXQvNC10L3RgtGLINCyINGB0YLRgNC+0LrRg1xyXG5cclxuICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0YDQsNC30LzQtdGC0LrRgyDQtNC70Y8g0LTQsNC90L3QvtC5INC00LDRgtGLINC4INC10LUg0Y3Qu9C10LzQtdC90YLQvtCyXHJcbiAgICAgIGNvbnN0IGhpc3RvcnlJdGVtSFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWhpc3RvcnlfX2RhdGFcIj4ke2hpc3RvcnlEYXRhTGFiZWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1oaXN0b3J5X19ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtoaXN0b3J5SXRlbXN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRjdC70LXQvNC10L3RgiDQsiDRhNGA0LDQs9C80LXQvdGCXHJcbiAgICAgIGNvbnN0IHRlbXBMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTsgLy8g0JLRgNC10LzQtdC90L3Ri9C5INGN0LvQtdC80LXQvdGCINC00LvRjyDQv9Cw0YDRgdC40L3Qs9CwIEhUTUxcclxuICAgICAgdGVtcExpLmlubmVySFRNTCA9IGhpc3RvcnlJdGVtSFRNTDtcclxuICAgICAgdGVtcExpLmNsYXNzTGlzdC5hZGQoXCJoaXN0b3J5X19pdGVtXCIsIFwiaXRlbS1oaXN0b3J5XCIpO1xyXG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0ZW1wTGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INCy0YHQtSDRjdC70LXQvNC10L3RgtGLINC40Lcg0YTRgNCw0LPQvNC10L3RgtCwINCyINGN0LvQtdC80LXQvdGCINGB0L/QuNGB0LrQsCDQuNGB0YLQvtGA0LjQuFxyXG4gIGhpc3RvcnlMaXN0LmlubmVySFRNTCA9IGZyYWdtZW50O1xyXG59XHJcblxyXG4vLyDQtNC+0LHQvtCy0LvQtdC90LjQtSDQvtC/0LXRgNCw0YbQuNC4INCyINC40YHRgtC+0YDQuNGOXHJcbmZ1bmN0aW9uIGFkZFRyYW5zYWN0aW9uKGRhdGUsIGFtb3VudCkge1xyXG4gIC8vINCf0YDQvtCy0LXRgNC60LAsINGB0YPRidC10YHRgtCy0YPQtdGCINC70Lgg0LTQsNGC0LAg0LIg0L7QsdGK0LXQutGC0LVcclxuICBpZiAoaGlzdG9yeS5oYXNPd25Qcm9wZXJ0eShkYXRlKSkge1xyXG4gICAgLy8g0JXRgdC70Lgg0YHRg9GJ0LXRgdGC0LLRg9C10YIsINC00L7QsdCw0LLQu9GP0LXQvCDQvtC/0LXRgNCw0YbQuNGOINCyINGB0YPRidC10YHRgtCy0YPRjtGJ0LjQuSDQvNCw0YHRgdC40LJcclxuICAgIGhpc3RvcnlbZGF0ZV0ucHVzaChhbW91bnQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyDQldGB0LvQuCDQvdC1INGB0YPRidC10YHRgtCy0YPQtdGCLCDRgdC+0LfQtNCw0LXQvCDQvdC+0LLRi9C5INC80LDRgdGB0LjQsiDRgSDQvdC+0LLQvtC5INC+0L/QtdGA0LDRhtC40LXQuVxyXG4gICAgaGlzdG9yeVtkYXRlXSA9IFthbW91bnRdO1xyXG4gIH1cclxuICBoaXN0b3J5SW5pdCgpO1xyXG59XHJcblxyXG4vLyDQntGC0LLQtdGCINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjlxyXG5mdW5jdGlvbiB1c2VyTWVzc2FnZSh0ZXh0LCBlbGVtZW50KSB7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZ29vZFwiLCBcImVycm9yXCIpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRleHQpO1xyXG4gIH0sIDApO1xyXG59XHJcblxyXG4vLyDRgNCw0YHRh9C10YIg0YHRgNC10LTRgdGCINC80LXQttC00YMg0LrRg9Cy0YjQuNC90LDQvNC4XHJcbmZ1bmN0aW9uIGNhbGN1bGF0aW9uSnVncygpIHtcclxuICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuICAgICAganVnRWxlbWVudC5tb25leSArPSBhbW91bnQgKiAoanVnRWxlbWVudC5wZXJjZW50IC8gMTAwKTtcclxuICAgICAgLy8g0J7Qs9GA0LDQvdC40YfQuNCy0LDQtdC8INC60L7Qu9C40YfQtdGB0YLQstC+INGG0LjRhNGAINC/0L7RgdC70LUg0LfQsNC/0Y/RgtC+0Lkg0LTQviAyXHJcbiAgICAgIGp1Z0VsZW1lbnQubW9uZXkgPSBwYXJzZUZsb2F0KGp1Z0VsZW1lbnQubW9uZXkudG9GaXhlZCgyKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFtb3VudCA9IDA7XHJcbiAgZGlzcGxheURhdGEoKTsgLy8g0YTRg9C90LrRhtC40Y8g0LTQu9GPINCy0YvQstC+0LTQsCDQtNCw0L3QvdGL0YUg0L3QsCDRjdC60YDQsNC9XHJcbn1cclxuXHJcbi8vINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0YTQvtGA0LxcclxuZnVuY3Rpb24gZ2V0SW5mb0Zvcm0oZm9ybSkge1xyXG4gIGZvcm0ucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgZm9ybUluZm8gPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGZvcm0udGFyZ2V0KS5lbnRyaWVzKCkpO1xyXG5cclxuICBkYXRhUHJvY2Vzc2luZyhmb3JtSW5mbywgZm9ybS5zdWJtaXR0ZXIpO1xyXG59XHJcblxyXG4vLyDQntCx0YDQsNCx0L7RgtC60LAg0LTQsNC90L3Ri9GFXHJcbmZ1bmN0aW9uIGRhdGFQcm9jZXNzaW5nKGZvcm1JbmZvLCBidXR0b24pIHtcclxuICAvLyDQktC90L7RgSDRgdGA0LXQtNGB0YJcclxuICBpZiAoXCJtb25leUlucHV0XCIgaW4gZm9ybUluZm8pIHtcclxuICAgIGZvcm1JbmZvLm1vbmV5SW5wdXQgPSBOdW1iZXIoZm9ybUluZm8ubW9uZXlJbnB1dCk7XHJcblxyXG4gICAgaWYgKGZvcm1JbmZvLmp1Z3MgPT0gXCJ1bnNwZWNpZmllZFwiKSB7XHJcbiAgICAgIGlmIChmb3JtSW5mby5tb25leUlucHV0ID49IDEwMCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbik7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgYW1vdW50ICs9IGZvcm1JbmZvLm1vbmV5SW5wdXQ7XHJcbiAgICAgICAgY2FsY3VsYXRpb25KdWdzKCk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gbmV3IERhdGUoKTtcclxuICAgICAgICBhZGRUcmFuc2FjdGlvbihcclxuICAgICAgICAgIGAke2RhdGEuZ2V0RGF0ZSgpfS8ke2RhdGEuZ2V0TW9udGgoKSArIDF9YCxcclxuICAgICAgICAgIGZvcm1JbmZvLm1vbmV5SW5wdXRcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b24pO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGZvcm1JbmZvLmp1Z3MpIHtcclxuICAgICAganVnc1tmb3JtSW5mby5qdWdzXS5tb25leSArPSBmb3JtSW5mby5tb25leUlucHV0O1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICAgIGRpc3BsYXlEYXRhKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImVycm9yXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0JLRi9C90L7RgSDRgdGA0LXQtNGB0YLQslxyXG4gIGlmIChcIm1vbmV5T3V0cHV0XCIgaW4gZm9ybUluZm8pIHtcclxuICAgIGZvcm1JbmZvLm1vbmV5T3V0cHV0ID0gTnVtYmVyKGZvcm1JbmZvLm1vbmV5T3V0cHV0KTtcclxuXHJcbiAgICBpZiAoanVnc1tmb3JtSW5mby5qdWdzXS5tb25leSA+PSBmb3JtSW5mby5tb25leU91dHB1dCkge1xyXG4gICAgICBqdWdzW2Zvcm1JbmZvLmp1Z3NdLm1vbmV5IC09IGZvcm1JbmZvLm1vbmV5T3V0cHV0O1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICAgIGRpc3BsYXlEYXRhKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImVycm9yXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8g0J/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhSDQv9GA0Lgg0LLQvdC+0YHQtSDRgdGA0LXQtNGB0YLQslxyXG5sZXQgZm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb25leS1mb3JtLWlucHV0XCIpO1xyXG5mb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRJbmZvRm9ybSk7XHJcblxyXG5sZXQgZm9ybU91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9uZXktZm9ybS1vdXRwdXRcIik7XHJcbmZvcm1PdXRwdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRJbmZvRm9ybSk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE5M2YwZTE1ZmNhNjQwN2FlYTBiXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9