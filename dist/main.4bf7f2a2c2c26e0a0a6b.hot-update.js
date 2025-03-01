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


const { document, setCookie, getCookie, deleteCookie } = require("cookelib");

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

setCookie("jugs", "jugs");

// console.log(getCookie("jugs"));

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
/******/ 	__webpack_require__.h = () => ("4a6cb2db86c143ea496e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40YmY3ZjJhMmMyYzI2ZTBhMGE2Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwQztBQUMxQztBQUMwQztBQUNEO0FBQ3pDLFFBQVEsK0NBQStDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUIscUJBQXFCLHdCQUF3QjtBQUN0RjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELElBQUk7QUFDekQsNENBQTRDLGlCQUFpQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsbUJBQW1CO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGtCQUFrQjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixJQUFJO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEU7QUFDQSxpRUFBaUUsbUJBQW1CO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLElBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFpQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsa0NBQWtDO0FBQzVFLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUM3VkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvc2NyaXB0LmpzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRhNGD0L3QutGG0LjQvtC90LDQu9CwIFwi0KfQtdGA0YLQvtCz0L7QsiDQpNGA0LjQu9Cw0L3RgdC10YDQsFwiXHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XHJcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHQv9C40YHQutCwINCw0LrRgtC40LLQvdGL0YUg0LzQvtC00YPQu9C10LlcclxuaW1wb3J0IHsgZmxzTW9kdWxlcyB9IGZyb20gXCIuL21vZHVsZXMuanNcIjtcclxuaW1wb3J0ICogYXMgbm9VaVNsaWRlciBmcm9tIFwibm91aXNsaWRlclwiO1xyXG5jb25zdCB7IGRvY3VtZW50LCBzZXRDb29raWUsIGdldENvb2tpZSwgZGVsZXRlQ29va2llIH0gPSByZXF1aXJlKFwiY29va2VsaWJcIik7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vINCb0L7Qs9C40LrQsCDQv9GA0LjQu9C+0LbQtdC90LjRj1xyXG5cclxuLy8g0JTQtdC50YHRgtCy0LjRjyDQv9GA0Lgg0LrQu9C40LrQtVxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9jdW1lbnRBY3Rpb25zKTtcclxuXHJcbiAgZnVuY3Rpb24gZG9jdW1lbnRBY3Rpb25zKGUpIHtcclxuICAgIGxldCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgLy8g0KHQsdGA0L7RgSDQt9C90LDRh9C10L3QuNC5INC90LDRgdGC0YDQvtC10LpcclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoYC5idXR0b24tcmVzZXRgKSkge1xyXG4gICAgICBsZXQgYnV0dG9uUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1yZXNldFwiKTtcclxuICAgICAgbGV0IHNldHRpbmdTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5pdGVtLXNldHRpbmcgLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGxldCBqdWdJbmRleCA9IDA7XHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFs1NSwgMTAsIDEwLCAxMCwgMTAsIDVdOyAvLyDQl9C90LDRh9C10L3QuNGPINC00LvRjyDQv9GA0LjRgdCy0L7QtdC90LjRj1xyXG5cclxuICAgICAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudEp1ZyA9IGp1Z3NbanVnXTtcclxuICAgICAgICAgIGlmIChqdWdJbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZWxlbWVudEp1Zy5wZXJjZW50ID0gdmFsdWVzW2p1Z0luZGV4XTsgLy8g0J/RgNC40YHQstC+0LXQvdC40LUg0LfQvdCw0YfQtdC90LjRj1xyXG4gICAgICAgICAgICBqdWdJbmRleCsrOyAvLyDQo9Cy0LXQu9C40YfQuNCy0LDQtdC8INC40L3QtNC10LrRgVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdXBkYXRlU2V0dGluZygpO1xyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG5cclxuICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvblJlc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQodCx0YDQvtGBINCy0YHQtdGFINGB0YDQtdC00YHRgtCyXHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KGAuYnV0dG9uLXJlc2V0LW1vbmV5YCkpIHtcclxuICAgICAgbGV0IGJ1dHRvblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tcmVzZXQtbW9uZXlcIik7XHJcbiAgICAgIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcbiAgICAgICAgICBqdWdFbGVtZW50Lm1vbmV5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvblJlc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQn9GA0LjQvNC10L3QuNGC0Ywg0L3QsNGB0YLRgNC+0LnQutC4XHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KFwiLmJ1dHRvbi1hcHBseVwiKSkge1xyXG4gICAgICBjb25zdCBidXR0b25BcHBseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWFwcGx5XCIpO1xyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIik7XHJcbiAgICAgIGNvbnN0IGl0ZW1TZXR0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLXNldHRpbmdcIik7XHJcblxyXG4gICAgICBsZXQgdG90YWxTbGlkZXJWYWx1ZSA9IDA7XHJcblxyXG4gICAgICAvLyDQktGL0YfQuNGB0LvRj9C10Lwg0YHRg9C80LzRgyDQt9C90LDRh9C10L3QuNC5INGB0LvQsNC50LTQtdGA0L7QslxyXG4gICAgICBzZXR0aW5nU2xpZGVycy5mb3JFYWNoKChzbGlkZXIpID0+IHtcclxuICAgICAgICB0b3RhbFNsaWRlclZhbHVlICs9IE51bWJlcihzbGlkZXIubm9VaVNsaWRlci5nZXQoKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRvdGFsU2xpZGVyVmFsdWUgPT09IDEwMCkge1xyXG4gICAgICAgIHVzZXJNZXNzYWdlKFwiZ29vZFwiLCBidXR0b25BcHBseSk7XHJcblxyXG4gICAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQt9C90LDRh9C10L3QuNGPINCyINC+0LHRitC10LrRgtC1IGp1Z3NcclxuICAgICAgICBpdGVtU2V0dGluZy5mb3JFYWNoKChzbGlkZXJXcmFwcGVyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzbGlkZXIgPSBzbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIik7XHJcbiAgICAgICAgICBjb25zdCBzbGlkZXJXcmFwcGVyQ2xhc3NlcyA9IEFycmF5LmZyb20oc2xpZGVyV3JhcHBlci5jbGFzc0xpc3QpO1xyXG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNDbGFzcyA9IHNsaWRlcldyYXBwZXJDbGFzc2VzLmZpbmQoKGNsYXNzTmFtZSkgPT5cclxuICAgICAgICAgICAgY2xhc3NOYW1lLnN0YXJ0c1dpdGgoXCJpdGVtLXNldHRpbmctXCIpXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmIChzcGVjaWZpY0NsYXNzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWNpZmljQ2xhc3MpOyAvLyDQktGL0LLQvtC00LjQvCDQv9C+0LvQvdGL0Lkg0LrQu9Cw0YHRgVxyXG4gICAgICAgICAgICBjb25zdCBjbGFzc1dpdGhvdXRQcmVmaXggPSBzcGVjaWZpY0NsYXNzLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgXCJpdGVtLXNldHRpbmctXCIsXHJcbiAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xyXG4gICAgICAgICAgICBqdWdzW2NsYXNzV2l0aG91dFByZWZpeF0ucGVyY2VudCA9IE51bWJlcihzbGlkZXIubm9VaVNsaWRlci5nZXQoKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgIGBqdWdzWyR7Y2xhc3NXaXRob3V0UHJlZml4fV0ucGVyY2VudCA9IE51bWJlcigke3NsaWRlci5ub1VpU2xpZGVyLmdldCgpfSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXlEYXRhKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b25BcHBseSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coanVncyk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8g0JLRgdC1INC/0LXRgNC10LzQtdC90L3Ri9C1XHJcbmxldCBhbW91bnQgPSAwO1xyXG5sZXQganVncyA9IHtcclxuICBtb250aGx5OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDU1LFxyXG4gICAgdGl0bGU6IFwi0JXQttC10LzQtdGB0Y/Rh9C90YvQtSDRgtGA0LDRgtGLXCIsXHJcbiAgfSxcclxuICBlbnRlcnRhaW5tZW50OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0KDQsNC30LLQu9C10YfQtdC90LjRj1wiLFxyXG4gIH0sXHJcbiAgc2F2aW5nOiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0J3QsNC60L7Qv9C70LXQvdC40Y9cIixcclxuICB9LFxyXG4gIGRldmVsb3BtZW50OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0KHQsNC80L7RgNCw0LfQstC40YLQuNC1XCIsXHJcbiAgfSxcclxuICBzYWZldHk6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMTAsXHJcbiAgICB0aXRsZTogXCLQn9C+0LTRg9GI0LrQsCDQsdC10LfQvtC/0LDRgdC90L7RgdGC0LhcIixcclxuICB9LFxyXG4gIHByZXNlbnQ6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogNSxcclxuICAgIHRpdGxlOiBcItCf0L7QtNCw0YDQutC4XCIsXHJcbiAgfSxcclxufTtcclxuXHJcbnNldENvb2tpZShcImp1Z3NcIiwgXCJqdWdzXCIpO1xyXG5cclxuLy8gY29uc29sZS5sb2coZ2V0Q29va2llKFwianVnc1wiKSk7XHJcblxyXG4vLyDQntGC0L7QsdGA0LDQttC10L3QuNC1INC00LDQvdC90YvRhSDQvdCwINGN0LrRgNCw0L3QtVxyXG5mdW5jdGlvbiBkaXNwbGF5RGF0YSgpIHtcclxuICAvLyDQntGC0L7QsdGA0LDQttC10L3QuNC1INC60YPQstGI0LjQvdC+0LJcclxuICBsZXQganVnc0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qdWdzX19pdGVtc1wiKTtcclxuICBqdWdzSXRlbXMuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcblxyXG4gICAgICBsZXQgaXRlbSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwianVnc19faXRlbSBpdGVtLWp1Z3MgaXRlbS1qdWdzLSR7anVnfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1qdWdzX190aXRsZVwiPiR7anVnRWxlbWVudC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tanVnc19fYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpdGVtLWp1Z3NfX2ltZ1wiIHNyYz1cImltZy9pY29uL2phci5zdmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktdG9wLXBlcmNlbnRcIj4ke2p1Z0VsZW1lbnQucGVyY2VudH0lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS1ib3R0b20tdGV4dFwiPtC+0YHRgtCw0LvQvtGB0Yw6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJyPjxzcGFuIGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LWJvdHRvbS1tb25leVwiPiR7anVnRWxlbWVudC5tb25leX0gcC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG5cclxuICAgICAganVnc0l0ZW1zLmlubmVySFRNTCArPSBpdGVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmFuZ2VJbml0KCk7XHJcbn1cclxuZGlzcGxheURhdGEoKTtcclxuXHJcbi8vINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0L3QsNGB0YLRgNC+0LXQulxyXG5mdW5jdGlvbiByYW5nZUluaXQoKSB7XHJcbiAgY29uc3Qgc2V0dGluZ0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdfX2xpc3RcIik7XHJcbiAgc2V0dGluZ0xpc3QuaW5uZXJIVE1MID0gXCJcIjsgLy8g0J7Rh9C40YnQsNC10Lwg0L/RgNC10LTRi9C00YPRidC40Lkg0LrQvtC90YLQtdC90YJcclxuXHJcbiAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7IC8vINCh0L7Qt9C00LDQtdC8INCy0YDQtdC80LXQvdC90YvQuSDRhNGA0LDQs9C80LXQvdGCINC00LvRjyDRg9C70YPRh9GI0LXQvdC90L7QuSDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjNC90L7RgdGC0LhcclxuXHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcblxyXG4gICAgICAvLyDQodC+0LfQtNCw0LXQvCDRjdC70LXQvNC10L3RgiDRgdC/0LjRgdC60LBcclxuICAgICAgY29uc3QgaXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGl0ZW1FbGVtZW50LmNsYXNzTmFtZSA9IGBtZW51X19pdGVtIHNldHRpbmdfX2l0ZW0gaXRlbS1zZXR0aW5nIGl0ZW0tc2V0dGluZy0ke2p1Z31gO1xyXG5cclxuICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGB0L7QtNC10YDQttC40LzQvtC1INCyINC90L7QstGL0Lkg0Y3Qu9C10LzQtdC90YJcclxuICAgICAgaXRlbUVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXNldHRpbmdfX3RpdGxlXCI+JHtqdWdFbGVtZW50LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXNldHRpbmdfX3NsaWRlciBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1zZXR0aW5nX192YWx1ZVwiPtCX0L3QsNGH0LXQvdC40LU6IDxzcGFuPiR7anVnRWxlbWVudC5wZXJjZW50fSU8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0Y3Qu9C10LzQtdC90YIg0LIg0YTRgNCw0LPQvNC10L3RglxyXG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpdGVtRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0LLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0LfQsCDQvtC00LjQvSDRgNCw0Lcg0LIgRE9NXHJcbiAgc2V0dGluZ0xpc3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG5cclxuICAvLyDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INGB0LvQsNC50LTQtdGA0YtcclxuICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuXHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgLml0ZW0tc2V0dGluZy0ke2p1Z31gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXIgPSBzZXR0aW5nU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlclZhbHVlID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5pdGVtLXNldHRpbmdfX3ZhbHVlIHNwYW5cIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhzZXR0aW5nU2xpZGVyKTtcclxuXHJcbiAgICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPIG5vVWlTbGlkZXJcclxuICAgICAgbm9VaVNsaWRlci5jcmVhdGUoc2V0dGluZ1NsaWRlciwge1xyXG4gICAgICAgIHN0YXJ0OiBbanVnRWxlbWVudC5wZXJjZW50XSxcclxuICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICBtaW46IFswXSxcclxuICAgICAgICAgIG1heDogWzEwMF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyDQntCx0L3QvtCy0LvQtdC90LjQtSDQt9C90LDRh9C10L3QuNGPINC/0YDQuCDQuNC30LzQtdC90LXQvdC40Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICBzZXR0aW5nU2xpZGVyLm5vVWlTbGlkZXIub24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgICAgICAgc2V0dGluZ1NsaWRlclZhbHVlLmlubmVySFRNTCA9IGAke051bWJlcih2YWx1ZXNbaGFuZGxlXSkudG9GaXhlZCgwKX0lYDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbnJhbmdlSW5pdCgpO1xyXG5cclxuLy8g0J7QsdC90L7QstC70LXQvdC40LUg0L3QsNGB0YLRgNC+0LXQulxyXG5mdW5jdGlvbiB1cGRhdGVTZXR0aW5nKCkge1xyXG4gIC8vINCY0L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0YHQu9Cw0LnQtNC10YDRi1xyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG5cclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGAuaXRlbS1zZXR0aW5nLSR7anVnfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlciA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIlxyXG4gICAgICApO1xyXG4gICAgICBzZXR0aW5nU2xpZGVyLm5vVWlTbGlkZXIuc2V0KFtqdWdFbGVtZW50LnBlcmNlbnRdKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vINCe0YLQstC10YIg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GOXHJcbmZ1bmN0aW9uIHVzZXJNZXNzYWdlKHRleHQsIGVsZW1lbnQpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJnb29kXCIsIFwiZXJyb3JcIik7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGV4dCk7XHJcbiAgfSwgMCk7XHJcbn1cclxuXHJcbi8vINGA0LDRgdGH0LXRgiDRgdGA0LXQtNGB0YIg0LzQtdC20LTRgyDQutGD0LLRiNC40L3QsNC80LhcclxuZnVuY3Rpb24gY2FsY3VsYXRpb25KdWdzKCkge1xyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG4gICAgICBqdWdFbGVtZW50Lm1vbmV5ICs9IGFtb3VudCAqIChqdWdFbGVtZW50LnBlcmNlbnQgLyAxMDApO1xyXG4gICAgICAvLyDQntCz0YDQsNC90LjRh9C40LLQsNC10Lwg0LrQvtC70LjRh9C10YHRgtCy0L4g0YbQuNGE0YAg0L/QvtGB0LvQtSDQt9Cw0L/Rj9GC0L7QuSDQtNC+IDJcclxuICAgICAganVnRWxlbWVudC5tb25leSA9IHBhcnNlRmxvYXQoanVnRWxlbWVudC5tb25leS50b0ZpeGVkKDIpKTtcclxuICAgICAgY29uc29sZS5sb2coanVnRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFtb3VudCA9IDA7XHJcbiAgZGlzcGxheURhdGEoKTsgLy8g0YTRg9C90LrRhtC40Y8g0LTQu9GPINCy0YvQstC+0LTQsCDQtNCw0L3QvdGL0YUg0L3QsCDRjdC60YDQsNC9XHJcbiAgY29uc29sZS5sb2coanVncyk7XHJcbn1cclxuXHJcbi8vINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0YTQvtGA0LxcclxuZnVuY3Rpb24gZ2V0SW5mb0Zvcm0oZm9ybSkge1xyXG4gIGZvcm0ucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgZm9ybUluZm8gPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGZvcm0udGFyZ2V0KS5lbnRyaWVzKCkpO1xyXG4gIGNvbnNvbGUubG9nKGZvcm1JbmZvLCBmb3JtLnN1Ym1pdHRlcik7XHJcblxyXG4gIGRhdGFQcm9jZXNzaW5nKGZvcm1JbmZvLCBmb3JtLnN1Ym1pdHRlcik7XHJcbn1cclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0LrQsCDQtNCw0L3QvdGL0YVcclxuZnVuY3Rpb24gZGF0YVByb2Nlc3NpbmcoZm9ybUluZm8sIGJ1dHRvbikge1xyXG4gIC8vINCS0L3QvtGBINGB0YDQtdC00YHRglxyXG4gIGlmIChcIm1vbmV5SW5wdXRcIiBpbiBmb3JtSW5mbykge1xyXG4gICAgZm9ybUluZm8ubW9uZXlJbnB1dCA9IE51bWJlcihmb3JtSW5mby5tb25leUlucHV0KTtcclxuICAgIGlmIChmb3JtSW5mby5qdWdzID09IFwidW5zcGVjaWZpZWRcIikge1xyXG4gICAgICBpZiAoTnVtYmVyKGZvcm1JbmZvLm1vbmV5SW5wdXQpID49IDEwMCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbik7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgYW1vdW50ICs9IGZvcm1JbmZvLm1vbmV5SW5wdXQ7XHJcbiAgICAgICAgY2FsY3VsYXRpb25KdWdzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLQntCx0YnQsNGPINGB0YPQvNC80LAg0LzQtdC90LXQtSAxMDDRgNGD0LFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB1c2VyTWVzc2FnZShcImVycm9yXCIsIGJ1dHRvbik7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZm9ybUluZm8uanVncykge1xyXG4gICAgICBjb25zb2xlLmxvZyhqdWdzW2Zvcm1JbmZvLmp1Z3NdKTtcclxuXHJcbiAgICAgIGp1Z3NbZm9ybUluZm8uanVnc10ubW9uZXkgKz0gZm9ybUluZm8ubW9uZXlJbnB1dDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLQmtGD0LLRiNC40L0g0L3QtSDQvdCw0LnQtNC10L1cIik7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b24pO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCS0YvQvdC+0YEg0YHRgNC10LTRgdGC0LJcclxuICBpZiAoXCJtb25leU91dHB1dFwiIGluIGZvcm1JbmZvKSB7XHJcbiAgICBmb3JtSW5mby5tb25leU91dHB1dCA9IE51bWJlcihmb3JtSW5mby5tb25leU91dHB1dCk7XHJcblxyXG4gICAgaWYgKGp1Z3NbZm9ybUluZm8uanVnc10ubW9uZXkgPj0gZm9ybUluZm8ubW9uZXlPdXRwdXQpIHtcclxuICAgICAganVnc1tmb3JtSW5mby5qdWdzXS5tb25leSAtPSBmb3JtSW5mby5tb25leU91dHB1dDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgICBkaXNwbGF5RGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b24pO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L/RgNC4INCy0L3QvtGB0LUg0YHRgNC10LTRgdGC0LJcclxubGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9uZXktZm9ybS1pbnB1dFwiKTtcclxuZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5mb0Zvcm0pO1xyXG5cclxubGV0IGZvcm1PdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vbmV5LWZvcm0tb3V0cHV0XCIpO1xyXG5mb3JtT3V0cHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0SW5mb0Zvcm0pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0YTZjYjJkYjg2YzE0M2VhNDk2ZVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==