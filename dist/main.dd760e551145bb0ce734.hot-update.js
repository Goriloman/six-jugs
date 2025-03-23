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
  "23/3": ["-89", "1000"],
  "23/2": ["-89", "1000"],
  "23/1": ["-89", "1000"],
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

      const className =  true ? "expense" : 0;

      // Создаем HTML для элементов истории для данной даты
      const historyItems = elements
        .map((item) => {
          // Определяем тип элемента (доход или расход)
          let isExpense = item[0] == "-";
          const className = isExpense ? "expense" : "income";
          const formattedItem = isExpense ? item : `+${item}`;
          console.log(item);
          console.log(isExpense);
          return `<div class="item-history__element ${className}">${formattedItem}</div>`;
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

        // Добавление истории в объект
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

      // Добавление истории в объект
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

      // Добавление истории в объект
      let data = new Date();
      addTransaction(
        `${data.getDate()}/${data.getMonth() + 1}`,
        formInfo.moneyOutput
      );
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
/******/ 	__webpack_require__.h = () => ("187752f6c9350106a814")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlLEdBQUcsb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZSxHQUFHLG9CQUFvQjtBQUNqRDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlLEdBQUcsb0JBQW9CO0FBQ2pEO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDL2hCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9maWxlcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGE0YPQvdC60YbQuNC+0L3QsNC70LAgXCLQp9C10YDRgtC+0LPQvtCyINCk0YDQuNC70LDQvdGB0LXRgNCwXCJcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tIFwiLi9mdW5jdGlvbnMuanNcIjtcclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRgdC/0LjRgdC60LAg0LDQutGC0LjQstC90YvRhSDQvNC+0LTRg9C70LXQuVxyXG5pbXBvcnQgeyBmbHNNb2R1bGVzIH0gZnJvbSBcIi4vbW9kdWxlcy5qc1wiO1xyXG5pbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gXCJub3Vpc2xpZGVyXCI7XHJcblxyXG4vLyBDb29raWUganNcclxuZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUsIGpzb24gPSBmYWxzZSkge1xyXG4gIGlmICghbmFtZSkge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbiAgLypcclxuICBSZXR1cm5zIGNvb2tpZSB3aXRoIHNwZWNpZmllZCBuYW1lIChzdHIpIGlmIGV4aXN0cywgZWxzZSAtIHVuZGVmaW5lZFxyXG4gIGlmIHJldHVybmluZyB2YWx1ZSBpcyBKU09OIGFuZCBqc29uIHBhcmFtZXRlciBpcyB0cnVlLCByZXR1cm5zIGpzb24sIG90aGVyd2lzZSBzdHJcclxuICAqL1xyXG4gIGxldCBtYXRjaGVzID0gZG9jdW1lbnQuY29va2llLm1hdGNoKFxyXG4gICAgbmV3IFJlZ0V4cChcclxuICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oWy4kPyp8e30oKVxcW1xcXVxcXFxcXC8rXl0pL2csIFwiXFxcXCQxXCIpICsgXCI9KFteO10qKVwiXHJcbiAgICApXHJcbiAgKTtcclxuICBpZiAobWF0Y2hlcykge1xyXG4gICAgbGV0IHJlcyA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKTtcclxuICAgIGlmIChqc29uKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVzKTtcclxuICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IHsgcGF0aDogXCIvXCIgfSkge1xyXG4gIC8qXHJcbiAgU2V0cyBhIGNvb2tpZSB3aXRoIHNwZWNpZmllZCBuYW1lIChzdHIpLCB2YWx1ZSAoc3RyKSAmIG9wdGlvbnMgKGRpY3QpXHJcblxyXG4gIG9wdGlvbnMga2V5czpcclxuICAgIC0gcGF0aCAoc3RyKSAtIFVSTCwgZm9yIHdoaWNoIHRoaXMgY29va2llIGlzIGF2YWlsYWJsZSAobXVzdCBiZSBhYnNvbHV0ZSEpXHJcbiAgICAtIGRvbWFpbiAoc3RyKSAtIGRvbWFpbiwgZm9yIHdoaWNoIHRoaXMgY29va2llIGlzIGF2YWlsYWJsZVxyXG4gICAgLSBleHBpcmVzIChEYXRlIG9iamVjdCkgLSBleHBpcmF0aW9uIGRhdGUmdGltZSBvZiBjb29raWVcclxuICAgIC0gbWF4LWFnZSAoaW50KSAtIGNvb2tpZSBsaWZldGltZSBpbiBzZWNvbmRzIChhbHRlcm5hdGl2ZSBmb3IgZXhwaXJlcyBvcHRpb24pXHJcbiAgICAtIHNlY3VyZSAoYm9vbCkgLSBpZiB0cnVlLCBjb29raWUgd2lsbCBiZSBhdmFpbGFibGUgb25seSBmb3IgSFRUUFMuXHJcbiAgICAgICAgICAgICAgICAgICAgICBJVCBDQU4nVCBCRSBGQUxTRVxyXG4gICAgLSBzYW1lc2l0ZSAoc3RyKSAtIFhTUkYgcHJvdGVjdGlvbiBzZXR0aW5nLlxyXG4gICAgICAgICAgICAgICAgICAgICAgIENhbiBiZSBzdHJpY3Qgb3IgbGF4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBodHRwczovL3dlYi5kZXYvc2FtZXNpdGUtY29va2llcy1leHBsYWluZWQvIGZvciBkZXRhaWxzXHJcbiAgICAtIGh0dHBPbmx5IChib29sKSAtIGlmIHRydWUsIGNvb2tpZSB3b24ndCBiZSBhdmFpbGFibGUgZm9yIHVzaW5nIGluIEphdmFTY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgSVQgQ0FOJ1QgQkUgRkFMU0VcclxuICAqL1xyXG4gIGlmICghbmFtZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gIGlmIChvcHRpb25zLmV4cGlyZXMgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICBvcHRpb25zLmV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXMudG9VVENTdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgfVxyXG4gIGxldCB1cGRhdGVkQ29va2llID1cclxuICAgIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICBmb3IgKGxldCBvcHRpb25LZXkgaW4gb3B0aW9ucykge1xyXG4gICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBvcHRpb25LZXk7XHJcbiAgICBsZXQgb3B0aW9uVmFsdWUgPSBvcHRpb25zW29wdGlvbktleV07XHJcbiAgICBpZiAob3B0aW9uVmFsdWUgIT09IHRydWUpIHtcclxuICAgICAgdXBkYXRlZENvb2tpZSArPSBcIj1cIiArIG9wdGlvblZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBkb2N1bWVudC5jb29raWUgPSB1cGRhdGVkQ29va2llO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lKSB7XHJcbiAgLypcclxuICBEZWxldGVzIGEgY29va2llIHdpdGggc3BlY2lmaWVkIG5hbWUuXHJcbiAgUmV0dXJucyB0cnVlIHdoZW4gY29va2llIHdhcyBzdWNjZXNzZnVsbHkgZGVsZXRlZCwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAgKi9cclxuICBzZXRDb29raWUobmFtZSwgbnVsbCwge1xyXG4gICAgZXhwaXJlczogbmV3IERhdGUoKSxcclxuICAgIHBhdGg6IFwiL1wiLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vINCb0L7Qs9C40LrQsCDQv9GA0LjQu9C+0LbQtdC90LjRj1xyXG5cclxuLy8g0JTQtdC50YHRgtCy0LjRjyDQv9GA0Lgg0LrQu9C40LrQtVxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9jdW1lbnRBY3Rpb25zKTtcclxuXHJcbiAgZnVuY3Rpb24gZG9jdW1lbnRBY3Rpb25zKGUpIHtcclxuICAgIGxldCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgLy8g0KHQsdGA0L7RgSDQt9C90LDRh9C10L3QuNC5INC90LDRgdGC0YDQvtC10LpcclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoYC5idXR0b24tcmVzZXRgKSkge1xyXG4gICAgICBsZXQgYnV0dG9uUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1yZXNldFwiKTtcclxuICAgICAgbGV0IHNldHRpbmdTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5pdGVtLXNldHRpbmcgLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGxldCBqdWdJbmRleCA9IDA7XHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFs1NSwgMTAsIDEwLCAxMCwgMTAsIDVdOyAvLyDQl9C90LDRh9C10L3QuNGPINC00LvRjyDQv9GA0LjRgdCy0L7QtdC90LjRj1xyXG5cclxuICAgICAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudEp1ZyA9IGp1Z3NbanVnXTtcclxuICAgICAgICAgIGlmIChqdWdJbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZWxlbWVudEp1Zy5wZXJjZW50ID0gdmFsdWVzW2p1Z0luZGV4XTsgLy8g0J/RgNC40YHQstC+0LXQvdC40LUg0LfQvdCw0YfQtdC90LjRj1xyXG4gICAgICAgICAgICBqdWdJbmRleCsrOyAvLyDQo9Cy0LXQu9C40YfQuNCy0LDQtdC8INC40L3QtNC10LrRgVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdXBkYXRlU2V0dGluZygpO1xyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG5cclxuICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvblJlc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQodCx0YDQvtGBINCy0YHQtdGFINGB0YDQtdC00YHRgtCyXHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KGAuYnV0dG9uLXJlc2V0LW1vbmV5YCkpIHtcclxuICAgICAgbGV0IGJ1dHRvblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tcmVzZXQtbW9uZXlcIik7XHJcbiAgICAgIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcbiAgICAgICAgICBqdWdFbGVtZW50Lm1vbmV5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvblJlc2V0KTtcclxuXHJcbiAgICAgIGRpc3BsYXlEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J/RgNC40LzQtdC90LjRgtGMINC90LDRgdGC0YDQvtC50LrQuFxyXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdChcIi5idXR0b24tYXBwbHlcIikpIHtcclxuICAgICAgY29uc3QgYnV0dG9uQXBwbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1hcHBseVwiKTtcclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCIpO1xyXG4gICAgICBjb25zdCBpdGVtU2V0dGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1zZXR0aW5nXCIpO1xyXG5cclxuICAgICAgbGV0IHRvdGFsU2xpZGVyVmFsdWUgPSAwO1xyXG5cclxuICAgICAgLy8g0JLRi9GH0LjRgdC70Y/QtdC8INGB0YPQvNC80YMg0LfQvdCw0YfQtdC90LjQuSDRgdC70LDQudC00LXRgNC+0LJcclxuICAgICAgc2V0dGluZ1NsaWRlcnMuZm9yRWFjaCgoc2xpZGVyKSA9PiB7XHJcbiAgICAgICAgdG90YWxTbGlkZXJWYWx1ZSArPSBOdW1iZXIoc2xpZGVyLm5vVWlTbGlkZXIuZ2V0KCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0b3RhbFNsaWRlclZhbHVlID09PSAxMDApIHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uQXBwbHkpO1xyXG5cclxuICAgICAgICAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0LfQvdCw0YfQtdC90LjRjyDQsiDQvtCx0YrQtdC60YLQtSBqdWdzXHJcbiAgICAgICAgaXRlbVNldHRpbmcuZm9yRWFjaCgoc2xpZGVyV3JhcHBlcikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc2xpZGVyID0gc2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCIpO1xyXG4gICAgICAgICAgY29uc3Qgc2xpZGVyV3JhcHBlckNsYXNzZXMgPSBBcnJheS5mcm9tKHNsaWRlcldyYXBwZXIuY2xhc3NMaXN0KTtcclxuICAgICAgICAgIGNvbnN0IHNwZWNpZmljQ2xhc3MgPSBzbGlkZXJXcmFwcGVyQ2xhc3Nlcy5maW5kKChjbGFzc05hbWUpID0+XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZS5zdGFydHNXaXRoKFwiaXRlbS1zZXR0aW5nLVwiKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoc3BlY2lmaWNDbGFzcykge1xyXG4gICAgICAgICAgICBjb25zdCBjbGFzc1dpdGhvdXRQcmVmaXggPSBzcGVjaWZpY0NsYXNzLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgXCJpdGVtLXNldHRpbmctXCIsXHJcbiAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBqdWdzW2NsYXNzV2l0aG91dFByZWZpeF0ucGVyY2VudCA9IE51bWJlcihzbGlkZXIubm9VaVNsaWRlci5nZXQoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXlEYXRhKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b25BcHBseSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vLyDQktGB0LUg0L/QtdGA0LXQvNC10L3QvdGL0LVcclxubGV0IGFtb3VudCA9IDA7XHJcbmxldCBqdWdzID0ge1xyXG4gIG1vbnRobHk6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogNTUsXHJcbiAgICB0aXRsZTogXCLQldC20LXQvNC10YHRj9GH0L3Ri9C1INGC0YDQsNGC0YtcIixcclxuICB9LFxyXG4gIGVudGVydGFpbm1lbnQ6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMTAsXHJcbiAgICB0aXRsZTogXCLQoNCw0LfQstC70LXRh9C10L3QuNGPXCIsXHJcbiAgfSxcclxuICBzYXZpbmc6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMTAsXHJcbiAgICB0aXRsZTogXCLQndCw0LrQvtC/0LvQtdC90LjRj1wiLFxyXG4gIH0sXHJcbiAgZGV2ZWxvcG1lbnQ6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMTAsXHJcbiAgICB0aXRsZTogXCLQodCw0LzQvtGA0LDQt9Cy0LjRgtC40LVcIixcclxuICB9LFxyXG4gIHNhZmV0eToge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiAxMCxcclxuICAgIHRpdGxlOiBcItCf0L7QtNGD0YjQutCwINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuFwiLFxyXG4gIH0sXHJcbiAgcHJlc2VudDoge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiA1LFxyXG4gICAgdGl0bGU6IFwi0J/QvtC00LDRgNC60LhcIixcclxuICB9LFxyXG59O1xyXG5sZXQgaGlzdG9yeSA9IHtcclxuICBcIjIzLzNcIjogW1wiLTg5XCIsIFwiMTAwMFwiXSxcclxuICBcIjIzLzJcIjogW1wiLTg5XCIsIFwiMTAwMFwiXSxcclxuICBcIjIzLzFcIjogW1wiLTg5XCIsIFwiMTAwMFwiXSxcclxufTtcclxuXHJcbmlmIChnZXRDb29raWUoXCJqdWdzXCIpKSB7XHJcbiAganVncyA9IGdldENvb2tpZShcImp1Z3NcIiwgdHJ1ZSk7XHJcbn1cclxuaWYgKGdldENvb2tpZShcImhpc3RvcnlcIikpIHtcclxuICBoaXN0b3J5ID0gZ2V0Q29va2llKFwiaGlzdG9yeVwiLCB0cnVlKTtcclxufVxyXG5cclxuLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L3QsCDRjdC60YDQsNC90LVcclxuZnVuY3Rpb24gZGlzcGxheURhdGEoKSB7XHJcbiAgLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQutGD0LLRiNC40L3QvtCyXHJcbiAgbGV0IGp1Z3NJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanVnc19faXRlbXNcIik7XHJcbiAganVnc0l0ZW1zLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG5cclxuICAgICAgbGV0IGl0ZW0gPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImp1Z3NfX2l0ZW0gaXRlbS1qdWdzIGl0ZW0tanVncy0ke2p1Z31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tanVnc19fdGl0bGVcIj4ke2p1Z0VsZW1lbnQudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHlcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaXRlbS1qdWdzX19pbWdcIiBzcmM9XCJpbWcvaWNvbi9qYXIuc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LXRvcC1wZXJjZW50XCI+JHtqdWdFbGVtZW50LnBlcmNlbnR9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktYm90dG9tLXRleHRcIj7QvtGB0YLQsNC70L7RgdGMOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxicj48c3BhbiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS1ib3R0b20tbW9uZXlcIj4ke2p1Z0VsZW1lbnQubW9uZXl9IHAuPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuXHJcbiAgICAgIGp1Z3NJdGVtcy5pbm5lckhUTUwgKz0gaXRlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0L3QsNGB0YLRgNC+0LXQulxyXG4gIHJhbmdlSW5pdCgpO1xyXG4gIGhpc3RvcnlJbml0KCk7XHJcbiAgc2V0Q29va2llKFwianVnc1wiLCBqdWdzKTtcclxufVxyXG5kaXNwbGF5RGF0YSgpO1xyXG5cclxuLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQvdCw0YHRgtGA0L7QtdC6XHJcbmZ1bmN0aW9uIHJhbmdlSW5pdCgpIHtcclxuICBjb25zdCBzZXR0aW5nQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ19fY291bnRlciBzcGFuXCIpO1xyXG4gIGNvbnN0IHNldHRpbmdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXR0aW5nX19saXN0XCIpO1xyXG4gIHNldHRpbmdMaXN0LmlubmVySFRNTCA9IFwiXCI7IC8vINCe0YfQuNGJ0LDQtdC8INC/0YDQtdC00YvQtNGD0YnQuNC5INC60L7QvdGC0LXQvdGCXHJcblxyXG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvLyDQodC+0LfQtNCw0LXQvCDQstGA0LXQvNC10L3QvdGL0Lkg0YTRgNCw0LPQvNC10L3RgiDQtNC70Y8g0YPQu9GD0YfRiNC10L3QvdC+0Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YzQvdC+0YHRgtC4XHJcblxyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG5cclxuICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0Y3Qu9C10LzQtdC90YIg0YHQv9C40YHQutCwXHJcbiAgICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBpdGVtRWxlbWVudC5jbGFzc05hbWUgPSBgbWVudV9faXRlbSBzZXR0aW5nX19pdGVtIGl0ZW0tc2V0dGluZyBpdGVtLXNldHRpbmctJHtqdWd9YDtcclxuXHJcbiAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDQsiDQvdC+0LLRi9C5INGN0LvQtdC80LXQvdGCXHJcbiAgICAgIGl0ZW1FbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1zZXR0aW5nX190aXRsZVwiPiR7anVnRWxlbWVudC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1zZXR0aW5nX19zbGlkZXIgXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tc2V0dGluZ19fdmFsdWVcIj7Ql9C90LDRh9C10L3QuNC1OiA8c3Bhbj4ke2p1Z0VsZW1lbnQucGVyY2VudH0lPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGN0LvQtdC80LXQvdGCINCyINGE0YDQsNCz0LzQtdC90YJcclxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaXRlbUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INCy0YHQtSDRjdC70LXQvNC10L3RgtGLINC30LAg0L7QtNC40L0g0YDQsNC3INCyIERPTVxyXG4gIHNldHRpbmdMaXN0LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuXHJcbiAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDRgdC70LDQudC00LXRgNGLXHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcblxyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYC5pdGVtLXNldHRpbmctJHtqdWd9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXJWYWx1ZSA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuaXRlbS1zZXR0aW5nX192YWx1ZSBzcGFuXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPIG5vVWlTbGlkZXJcclxuICAgICAgbm9VaVNsaWRlci5jcmVhdGUoc2V0dGluZ1NsaWRlciwge1xyXG4gICAgICAgIHN0YXJ0OiBbanVnRWxlbWVudC5wZXJjZW50XSxcclxuICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICBtaW46IFswXSxcclxuICAgICAgICAgIG1heDogWzEwMF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyDQntCx0L3QvtCy0LvQtdC90LjQtSDQt9C90LDRh9C10L3QuNGPINC/0YDQuCDQuNC30LzQtdC90LXQvdC40Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICBzZXR0aW5nU2xpZGVyLm5vVWlTbGlkZXIub24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgICAgICAgc2V0dGluZ1NsaWRlclZhbHVlLmlubmVySFRNTCA9IGAke051bWJlcih2YWx1ZXNbaGFuZGxlXSkudG9GaXhlZCgwKX0lYDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgaXRlbVNldHRpbmdTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiKTtcclxuICBpdGVtU2V0dGluZ1NsaWRlcnMuZm9yRWFjaCgoc2xpZGVyKSA9PiB7XHJcbiAgICBzbGlkZXIubm9VaVNsaWRlci5vbihcInVwZGF0ZVwiLCB1cGRhdGVTdW0pO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTdW0oKSB7XHJcbiAgICBsZXQgdG90YWxTdW0gPSBBcnJheS5mcm9tKGl0ZW1TZXR0aW5nU2xpZGVycykucmVkdWNlKChzdW0sIHNsaWRlcikgPT4ge1xyXG4gICAgICByZXR1cm4gc3VtICsgTnVtYmVyKHNsaWRlci5ub1VpU2xpZGVyLmdldCgpKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIHNldHRpbmdDb3VudGVyLmlubmVySFRNTCA9IHRvdGFsU3VtO1xyXG4gIH1cclxufVxyXG5yYW5nZUluaXQoKTtcclxuXHJcbi8vINCe0LHQvdC+0LLQu9C10L3QuNC1INC90LDRgdGC0YDQvtC10LpcclxuZnVuY3Rpb24gdXBkYXRlU2V0dGluZygpIHtcclxuICAvLyDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INGB0LvQsNC50LTQtdGA0YtcclxuICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuXHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgLml0ZW0tc2V0dGluZy0ke2p1Z31gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXIgPSBzZXR0aW5nU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICAgKTtcclxuICAgICAgc2V0dGluZ1NsaWRlci5ub1VpU2xpZGVyLnNldChbanVnRWxlbWVudC5wZXJjZW50XSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDb29raWUoXCJqdWdzXCIsIGp1Z3MpO1xyXG59XHJcblxyXG4vLyDQntGC0L7QsdGA0LDQttC10L3QuNC1INC40YHRgtC+0YDQuNC4XHJcbmZ1bmN0aW9uIGhpc3RvcnlJbml0KCkge1xyXG4gIC8vINCf0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YPRidGD0Y4g0LTQsNGC0YNcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgLy8g0KTQvtGA0LzQsNGC0LjRgNGD0LXQvCDQtNCw0YLRgyDQtNC70Y8g0YHQtdCz0L7QtNC90Y/RiNC90LXQs9C+INC00L3RjyAo0LTQtdC90Ywv0LzQtdGB0Y/RhilcclxuICBjb25zdCBkYXRhVG9kYXkgPSBgJHt0b2RheS5nZXREYXRlKCl9LyR7dG9kYXkuZ2V0TW9udGgoKSArIDF9YDtcclxuICAvLyDQndCw0YXQvtC00LjQvCDRjdC70LXQvNC10L3RgiDRgdC/0LjRgdC60LAg0LjRgdGC0L7RgNC40Lgg0LIg0LTQvtC60YPQvNC10L3RgtC1XHJcbiAgY29uc3QgaGlzdG9yeUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlfX2xpc3RcIik7XHJcbiAgLy8g0KHQvtC30LTQsNC10Lwg0YTRgNCw0LPQvNC10L3RgiDQtNC+0LrRg9C80LXQvdGC0LAg0LTQu9GPINCx0L7Qu9C10LUg0Y3RhNGE0LXQutGC0LjQstC90L7Qs9C+INC00L7QsdCw0LLQu9C10L3QuNGPINGN0LvQtdC80LXQvdGC0L7QslxyXG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAvLyDQn9GA0L7RhdC+0LTQuNC8INC/0L4g0LrQsNC20LTQvtC5INC00LDRgtC1INCyINC+0LHRitC10LrRgtC1IGhpc3RvcnlcclxuICBmb3IgKGNvbnN0IGRhdGUgaW4gaGlzdG9yeSkge1xyXG4gICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDRh9GC0L4g0YHQstC+0LnRgdGC0LLQviDQv9GA0LjQvdCw0LTQu9C10LbQuNGCINGB0LDQvNC+0LzRgyDQvtCx0YrQtdC60YLRgyBoaXN0b3J5XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhpc3RvcnksIGRhdGUpKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gaGlzdG9yeVtkYXRlXTsgLy8g0K3Qu9C10LzQtdC90YLRiyDQtNC70Y8g0LTQsNC90L3QvtC5INC00LDRgtGLXHJcbiAgICAgIGxldCBoaXN0b3J5RGF0YUxhYmVsO1xyXG5cclxuICAgICAgLy8g0KHRgNCw0LLQvdC40LLQsNC10Lwg0LTQsNGC0YMg0YEg0YHQtdCz0L7QtNC90Y/RiNC90LXQuVxyXG4gICAgICBpZiAoZGF0ZSA9PT0gZGF0YVRvZGF5KSB7XHJcbiAgICAgICAgaGlzdG9yeURhdGFMYWJlbCA9IFwi0KHQtdCz0L7QtNC90Y9cIjsgLy8g0JXRgdC70Lgg0LTQsNGC0Ysg0YHQvtCy0L/QsNC00LDRjtGCLCDQuNGB0L/QvtC70YzQt9GD0LXQvCBcItCh0LXQs9C+0LTQvdGPXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyDQmNC90LDRh9C1INGE0L7RgNC80LDRgtC40YDRg9C10Lwg0LTQsNGC0YMg0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y9cclxuICAgICAgICBjb25zdCBbZGF5LCBtb250aF0gPSBkYXRlLnNwbGl0KFwiL1wiKS5tYXAoTnVtYmVyKTsgLy8g0KDQsNC30LTQtdC70Y/QtdC8INC00LXQvdGMINC4INC80LXRgdGP0YZcclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gbmV3IERhdGUoKTsgLy8g0KHQvtC30LTQsNC10Lwg0L3QvtCy0YvQuSDQvtCx0YrQtdC60YIg0LTQsNGC0YtcclxuICAgICAgICBmb3JtYXR0ZWREYXRlLnNldERhdGUoZGF5KTsgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LTQtdC90YxcclxuICAgICAgICBmb3JtYXR0ZWREYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7IC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC80LXRgdGP0YYgKNC80LjQvdGD0YEgMSwg0YLQsNC6INC60LDQuiDQvNC10YHRj9GG0Ysg0L3Rg9C80LXRgNGD0Y7RgtGB0Y8g0YEgMClcclxuICAgICAgICBjb25zdCBvcHRpb25zID0geyBkYXk6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIgfTsgLy8g0J7Qv9GG0LjQuCDQtNC70Y8g0YTQvtGA0LzQsNGC0LjRgNC+0LLQsNC90LjRj1xyXG4gICAgICAgIGhpc3RvcnlEYXRhTGFiZWwgPSBmb3JtYXR0ZWREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcInJ1LVJVXCIsIG9wdGlvbnMpOyAvLyDQpNC+0YDQvNCw0YLQuNGA0YPQtdC8INC00LDRgtGDINCyINGA0YPRgdGB0LrQvtC5INC70L7QutCw0LvQuFxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSBcIi1cIiA/IFwiZXhwZW5zZVwiIDogXCJpbmNvbWVcIjtcclxuXHJcbiAgICAgIC8vINCh0L7Qt9C00LDQtdC8IEhUTUwg0LTQu9GPINGN0LvQtdC80LXQvdGC0L7QsiDQuNGB0YLQvtGA0LjQuCDQtNC70Y8g0LTQsNC90L3QvtC5INC00LDRgtGLXHJcbiAgICAgIGNvbnN0IGhpc3RvcnlJdGVtcyA9IGVsZW1lbnRzXHJcbiAgICAgICAgLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgLy8g0J7Qv9GA0LXQtNC10LvRj9C10Lwg0YLQuNC/INGN0LvQtdC80LXQvdGC0LAgKNC00L7RhdC+0LQg0LjQu9C4INGA0LDRgdGF0L7QtClcclxuICAgICAgICAgIGxldCBpc0V4cGVuc2UgPSBpdGVtWzBdID09IFwiLVwiO1xyXG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gaXNFeHBlbnNlID8gXCJleHBlbnNlXCIgOiBcImluY29tZVwiO1xyXG4gICAgICAgICAgY29uc3QgZm9ybWF0dGVkSXRlbSA9IGlzRXhwZW5zZSA/IGl0ZW0gOiBgKyR7aXRlbX1gO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpc0V4cGVuc2UpO1xyXG4gICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiaXRlbS1oaXN0b3J5X19lbGVtZW50ICR7Y2xhc3NOYW1lfVwiPiR7Zm9ybWF0dGVkSXRlbX08L2Rpdj5gO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmpvaW4oXCJcIik7IC8vINCe0LHRitC10LTQuNC90Y/QtdC8INGN0LvQtdC80LXQvdGC0Ysg0LIg0YHRgtGA0L7QutGDXHJcblxyXG4gICAgICAvLyDQodC+0LfQtNCw0LXQvCDRgNCw0LfQvNC10YLQutGDINC00LvRjyDQtNCw0L3QvdC+0Lkg0LTQsNGC0Ysg0Lgg0LXQtSDRjdC70LXQvNC10L3RgtC+0LJcclxuICAgICAgY29uc3QgaGlzdG9yeUl0ZW1IVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0taGlzdG9yeV9fZGF0YVwiPiR7aGlzdG9yeURhdGFMYWJlbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWhpc3RvcnlfX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2hpc3RvcnlJdGVtc31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGN0LvQtdC80LXQvdGCINCyINGE0YDQsNCz0LzQtdC90YJcclxuICAgICAgY29uc3QgdGVtcExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpOyAvLyDQktGA0LXQvNC10L3QvdGL0Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINC/0LDRgNGB0LjQvdCz0LAgSFRNTFxyXG4gICAgICB0ZW1wTGkuaW5uZXJIVE1MID0gaGlzdG9yeUl0ZW1IVE1MO1xyXG4gICAgICB0ZW1wTGkuY2xhc3NMaXN0LmFkZChcImhpc3RvcnlfX2l0ZW1cIiwgXCJpdGVtLWhpc3RvcnlcIik7XHJcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRlbXBMaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0LLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0LjQtyDRhNGA0LDQs9C80LXQvdGC0LAg0LIg0Y3Qu9C10LzQtdC90YIg0YHQv9C40YHQutCwINC40YHRgtC+0YDQuNC4XHJcbiAgaGlzdG9yeUxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICBoaXN0b3J5TGlzdC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcbn1cclxuXHJcbi8vINC00L7QsdC+0LLQu9C10L3QuNC1INC+0L/QtdGA0LDRhtC40Lgg0LIg0LjRgdGC0L7RgNC40Y5cclxuZnVuY3Rpb24gYWRkVHJhbnNhY3Rpb24oZGF0ZSwgYW1vdW50KSB7XHJcbiAgLy8g0J/RgNC+0LLQtdGA0LrQsCwg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LvQuCDQtNCw0YLQsCDQsiDQvtCx0YrQtdC60YLQtVxyXG4gIGlmIChoaXN0b3J5Lmhhc093blByb3BlcnR5KGRhdGUpKSB7XHJcbiAgICAvLyDQldGB0LvQuCDRgdGD0YnQtdGB0YLQstGD0LXRgiwg0LTQvtCx0LDQstC70Y/QtdC8INC+0L/QtdGA0LDRhtC40Y4g0LIg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC5INC80LDRgdGB0LjQslxyXG4gICAgaGlzdG9yeVtkYXRlXS5wdXNoKGFtb3VudCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vINCV0YHQu9C4INC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YIsINGB0L7Qt9C00LDQtdC8INC90L7QstGL0Lkg0LzQsNGB0YHQuNCyINGBINC90L7QstC+0Lkg0L7Qv9C10YDQsNGG0LjQtdC5XHJcbiAgICBoaXN0b3J5W2RhdGVdID0gW2Ftb3VudF07XHJcbiAgfVxyXG4gIGhpc3RvcnlJbml0KCk7XHJcbn1cclxuXHJcbi8vINCe0YLQstC10YIg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GOXHJcbmZ1bmN0aW9uIHVzZXJNZXNzYWdlKHRleHQsIGVsZW1lbnQpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJnb29kXCIsIFwiZXJyb3JcIik7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGV4dCk7XHJcbiAgfSwgMCk7XHJcbn1cclxuXHJcbi8vINGA0LDRgdGH0LXRgiDRgdGA0LXQtNGB0YIg0LzQtdC20LTRgyDQutGD0LLRiNC40L3QsNC80LhcclxuZnVuY3Rpb24gY2FsY3VsYXRpb25KdWdzKCkge1xyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG4gICAgICBqdWdFbGVtZW50Lm1vbmV5ICs9IGFtb3VudCAqIChqdWdFbGVtZW50LnBlcmNlbnQgLyAxMDApO1xyXG4gICAgICAvLyDQntCz0YDQsNC90LjRh9C40LLQsNC10Lwg0LrQvtC70LjRh9C10YHRgtCy0L4g0YbQuNGE0YAg0L/QvtGB0LvQtSDQt9Cw0L/Rj9GC0L7QuSDQtNC+IDJcclxuICAgICAganVnRWxlbWVudC5tb25leSA9IHBhcnNlRmxvYXQoanVnRWxlbWVudC5tb25leS50b0ZpeGVkKDIpKTtcclxuICAgIH1cclxuICB9XHJcbiAgYW1vdW50ID0gMDtcclxuICBkaXNwbGF5RGF0YSgpOyAvLyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0LLRi9Cy0L7QtNCwINC00LDQvdC90YvRhSDQvdCwINGN0LrRgNCw0L1cclxufVxyXG5cclxuLy8g0J/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhSDRhNC+0YDQvFxyXG5mdW5jdGlvbiBnZXRJbmZvRm9ybShmb3JtKSB7XHJcbiAgZm9ybS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCBmb3JtSW5mbyA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybS50YXJnZXQpLmVudHJpZXMoKSk7XHJcblxyXG4gIGRhdGFQcm9jZXNzaW5nKGZvcm1JbmZvLCBmb3JtLnN1Ym1pdHRlcik7XHJcbn1cclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0LrQsCDQtNCw0L3QvdGL0YVcclxuZnVuY3Rpb24gZGF0YVByb2Nlc3NpbmcoZm9ybUluZm8sIGJ1dHRvbikge1xyXG4gIC8vINCS0L3QvtGBINGB0YDQtdC00YHRglxyXG4gIGlmIChcIm1vbmV5SW5wdXRcIiBpbiBmb3JtSW5mbykge1xyXG4gICAgZm9ybUluZm8ubW9uZXlJbnB1dCA9IE51bWJlcihmb3JtSW5mby5tb25leUlucHV0KTtcclxuXHJcbiAgICBpZiAoZm9ybUluZm8uanVncyA9PSBcInVuc3BlY2lmaWVkXCIpIHtcclxuICAgICAgaWYgKGZvcm1JbmZvLm1vbmV5SW5wdXQgPj0gMTAwKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICBhbW91bnQgKz0gZm9ybUluZm8ubW9uZXlJbnB1dDtcclxuICAgICAgICBjYWxjdWxhdGlvbkp1Z3MoKTtcclxuXHJcbiAgICAgICAgLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0LjRgdGC0L7RgNC40Lgg0LIg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGFkZFRyYW5zYWN0aW9uKFxyXG4gICAgICAgICAgYCR7ZGF0YS5nZXREYXRlKCl9LyR7ZGF0YS5nZXRNb250aCgpICsgMX1gLFxyXG4gICAgICAgICAgZm9ybUluZm8ubW9uZXlJbnB1dFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB1c2VyTWVzc2FnZShcImVycm9yXCIsIGJ1dHRvbik7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZm9ybUluZm8uanVncykge1xyXG4gICAgICBqdWdzW2Zvcm1JbmZvLmp1Z3NdLm1vbmV5ICs9IGZvcm1JbmZvLm1vbmV5SW5wdXQ7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHVzZXJNZXNzYWdlKFwiZ29vZFwiLCBidXR0b24pO1xyXG4gICAgICB9LCAwKTtcclxuICAgICAgZGlzcGxheURhdGEoKTtcclxuXHJcbiAgICAgIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC40YHRgtC+0YDQuNC4INCyINC+0LHRitC10LrRglxyXG4gICAgICBsZXQgZGF0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGFkZFRyYW5zYWN0aW9uKFxyXG4gICAgICAgIGAke2RhdGEuZ2V0RGF0ZSgpfS8ke2RhdGEuZ2V0TW9udGgoKSArIDF9YCxcclxuICAgICAgICBmb3JtSW5mby5tb25leUlucHV0XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImVycm9yXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0JLRi9C90L7RgSDRgdGA0LXQtNGB0YLQslxyXG4gIGlmIChcIm1vbmV5T3V0cHV0XCIgaW4gZm9ybUluZm8pIHtcclxuICAgIGZvcm1JbmZvLm1vbmV5T3V0cHV0ID0gTnVtYmVyKGZvcm1JbmZvLm1vbmV5T3V0cHV0KTtcclxuXHJcbiAgICBpZiAoanVnc1tmb3JtSW5mby5qdWdzXS5tb25leSA+PSBmb3JtSW5mby5tb25leU91dHB1dCkge1xyXG4gICAgICBqdWdzW2Zvcm1JbmZvLmp1Z3NdLm1vbmV5IC09IGZvcm1JbmZvLm1vbmV5T3V0cHV0O1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICAgIGRpc3BsYXlEYXRhKCk7XHJcblxyXG4gICAgICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQuNGB0YLQvtGA0LjQuCDQsiDQvtCx0YrQtdC60YJcclxuICAgICAgbGV0IGRhdGEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBhZGRUcmFuc2FjdGlvbihcclxuICAgICAgICBgJHtkYXRhLmdldERhdGUoKX0vJHtkYXRhLmdldE1vbnRoKCkgKyAxfWAsXHJcbiAgICAgICAgZm9ybUluZm8ubW9uZXlPdXRwdXRcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHVzZXJNZXNzYWdlKFwiZXJyb3JcIiwgYnV0dG9uKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyDQn9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFINC/0YDQuCDQstC90L7RgdC1INGB0YDQtdC00YHRgtCyXHJcbmxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vbmV5LWZvcm0taW5wdXRcIik7XHJcbmZvcm1JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGdldEluZm9Gb3JtKTtcclxuXHJcbmxldCBmb3JtT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb25leS1mb3JtLW91dHB1dFwiKTtcclxuZm9ybU91dHB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGdldEluZm9Gb3JtKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTg3NzUyZjZjOTM1MDEwNmE4MTRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=