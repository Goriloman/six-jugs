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
/* harmony import */ var cookielib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookielib */ "./node_modules/cookielib/src/cookie.js");
// Подключение функционала "Чертогов Фрилансера"

// Подключение списка активных модулей




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

// setCookie("jugs", "jugs");

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
/******/ 	__webpack_require__.h = () => ("a3a3f5f3fb29c571a10d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDN1ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2ZpbGVzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YTRg9C90LrRhtC40L7QvdCw0LvQsCBcItCn0LXRgNGC0L7Qs9C+0LIg0KTRgNC40LvQsNC90YHQtdGA0LBcIlxyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xyXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0L/QuNGB0LrQsCDQsNC60YLQuNCy0L3Ri9GFINC80L7QtNGD0LvQtdC5XHJcbmltcG9ydCB7IGZsc01vZHVsZXMgfSBmcm9tIFwiLi9tb2R1bGVzLmpzXCI7XHJcbmltcG9ydCAqIGFzIG5vVWlTbGlkZXIgZnJvbSBcIm5vdWlzbGlkZXJcIjtcclxuaW1wb3J0IHsgZ2V0Q29va2llLCBzZXRDb29raWUsIGRlbGV0ZUNvb2tpZSB9IGZyb20gXCJjb29raWVsaWJcIjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8g0JvQvtCz0LjQutCwINC/0YDQuNC70L7QttC10L3QuNGPXHJcblxyXG4vLyDQlNC10LnRgdGC0LLQuNGPINC/0YDQuCDQutC70LjQutC1XHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudEFjdGlvbnMpO1xyXG5cclxuICBmdW5jdGlvbiBkb2N1bWVudEFjdGlvbnMoZSkge1xyXG4gICAgbGV0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAvLyDQodCx0YDQvtGBINC30L3QsNGH0LXQvdC40Lkg0L3QsNGB0YLRgNC+0LXQulxyXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdChgLmJ1dHRvbi1yZXNldGApKSB7XHJcbiAgICAgIGxldCBidXR0b25SZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXJlc2V0XCIpO1xyXG4gICAgICBsZXQgc2V0dGluZ1NsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLml0ZW0tc2V0dGluZyAuaXRlbS1zZXR0aW5nX19zbGlkZXJcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IGp1Z0luZGV4ID0gMDtcclxuICAgICAgY29uc3QgdmFsdWVzID0gWzU1LCAxMCwgMTAsIDEwLCAxMCwgNV07IC8vINCX0L3QsNGH0LXQvdC40Y8g0LTQu9GPINC/0YDQuNGB0LLQvtC10L3QuNGPXHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgICAgICBjb25zdCBlbGVtZW50SnVnID0ganVnc1tqdWddO1xyXG4gICAgICAgICAgaWYgKGp1Z0luZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBlbGVtZW50SnVnLnBlcmNlbnQgPSB2YWx1ZXNbanVnSW5kZXhdOyAvLyDQn9GA0LjRgdCy0L7QtdC90LjQtSDQt9C90LDRh9C10L3QuNGPXHJcbiAgICAgICAgICAgIGp1Z0luZGV4Kys7IC8vINCj0LLQtdC70LjRh9C40LLQsNC10Lwg0LjQvdC00LXQutGBXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB1cGRhdGVTZXR0aW5nKCk7XHJcbiAgICAgIGRpc3BsYXlEYXRhKCk7XHJcblxyXG4gICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uUmVzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCh0LHRgNC+0YEg0LLRgdC10YUg0YHRgNC10LTRgdGC0LJcclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoYC5idXR0b24tcmVzZXQtbW9uZXlgKSkge1xyXG4gICAgICBsZXQgYnV0dG9uUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1yZXNldC1tb25leVwiKTtcclxuICAgICAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuICAgICAgICAgIGp1Z0VsZW1lbnQubW9uZXkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uUmVzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCf0YDQuNC80LXQvdC40YLRjCDQvdCw0YHRgtGA0L7QudC60LhcclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoXCIuYnV0dG9uLWFwcGx5XCIpKSB7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbkFwcGx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tYXBwbHlcIik7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiKTtcclxuICAgICAgY29uc3QgaXRlbVNldHRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tc2V0dGluZ1wiKTtcclxuXHJcbiAgICAgIGxldCB0b3RhbFNsaWRlclZhbHVlID0gMDtcclxuXHJcbiAgICAgIC8vINCS0YvRh9C40YHQu9GP0LXQvCDRgdGD0LzQvNGDINC30L3QsNGH0LXQvdC40Lkg0YHQu9Cw0LnQtNC10YDQvtCyXHJcbiAgICAgIHNldHRpbmdTbGlkZXJzLmZvckVhY2goKHNsaWRlcikgPT4ge1xyXG4gICAgICAgIHRvdGFsU2xpZGVyVmFsdWUgKz0gTnVtYmVyKHNsaWRlci5ub1VpU2xpZGVyLmdldCgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodG90YWxTbGlkZXJWYWx1ZSA9PT0gMTAwKSB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJnb29kXCIsIGJ1dHRvbkFwcGx5KTtcclxuXHJcbiAgICAgICAgLy8g0J7QsdC90L7QstC70Y/QtdC8INC30L3QsNGH0LXQvdC40Y8g0LIg0L7QsdGK0LXQutGC0LUganVnc1xyXG4gICAgICAgIGl0ZW1TZXR0aW5nLmZvckVhY2goKHNsaWRlcldyYXBwZXIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHNsaWRlciA9IHNsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiKTtcclxuICAgICAgICAgIGNvbnN0IHNsaWRlcldyYXBwZXJDbGFzc2VzID0gQXJyYXkuZnJvbShzbGlkZXJXcmFwcGVyLmNsYXNzTGlzdCk7XHJcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NsYXNzID0gc2xpZGVyV3JhcHBlckNsYXNzZXMuZmluZCgoY2xhc3NOYW1lKSA9PlxyXG4gICAgICAgICAgICBjbGFzc05hbWUuc3RhcnRzV2l0aChcIml0ZW0tc2V0dGluZy1cIilcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgaWYgKHNwZWNpZmljQ2xhc3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3BlY2lmaWNDbGFzcyk7IC8vINCS0YvQstC+0LTQuNC8INC/0L7Qu9C90YvQuSDQutC70LDRgdGBXHJcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzV2l0aG91dFByZWZpeCA9IHNwZWNpZmljQ2xhc3MucmVwbGFjZShcclxuICAgICAgICAgICAgICBcIml0ZW0tc2V0dGluZy1cIixcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGlcIik7XHJcbiAgICAgICAgICAgIGp1Z3NbY2xhc3NXaXRob3V0UHJlZml4XS5wZXJjZW50ID0gTnVtYmVyKHNsaWRlci5ub1VpU2xpZGVyLmdldCgpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgYGp1Z3NbJHtjbGFzc1dpdGhvdXRQcmVmaXh9XS5wZXJjZW50ID0gTnVtYmVyKCR7c2xpZGVyLm5vVWlTbGlkZXIuZ2V0KCl9KWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGlzcGxheURhdGEoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImVycm9yXCIsIGJ1dHRvbkFwcGx5KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhqdWdzKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vLyDQktGB0LUg0L/QtdGA0LXQvNC10L3QvdGL0LVcclxubGV0IGFtb3VudCA9IDA7XHJcbmxldCBqdWdzID0ge1xyXG4gIG1vbnRobHk6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogNTUsXHJcbiAgICB0aXRsZTogXCLQldC20LXQvNC10YHRj9GH0L3Ri9C1INGC0YDQsNGC0YtcIixcclxuICB9LFxyXG4gIGVudGVydGFpbm1lbnQ6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMTAsXHJcbiAgICB0aXRsZTogXCLQoNCw0LfQstC70LXRh9C10L3QuNGPXCIsXHJcbiAgfSxcclxuICBzYXZpbmc6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMTAsXHJcbiAgICB0aXRsZTogXCLQndCw0LrQvtC/0LvQtdC90LjRj1wiLFxyXG4gIH0sXHJcbiAgZGV2ZWxvcG1lbnQ6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMTAsXHJcbiAgICB0aXRsZTogXCLQodCw0LzQvtGA0LDQt9Cy0LjRgtC40LVcIixcclxuICB9LFxyXG4gIHNhZmV0eToge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiAxMCxcclxuICAgIHRpdGxlOiBcItCf0L7QtNGD0YjQutCwINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuFwiLFxyXG4gIH0sXHJcbiAgcHJlc2VudDoge1xyXG4gICAgbW9uZXk6IDAsXHJcbiAgICBwZXJjZW50OiA1LFxyXG4gICAgdGl0bGU6IFwi0J/QvtC00LDRgNC60LhcIixcclxuICB9LFxyXG59O1xyXG5cclxuLy8gc2V0Q29va2llKFwianVnc1wiLCBcImp1Z3NcIik7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhnZXRDb29raWUoXCJqdWdzXCIpKTtcclxuXHJcbi8vINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0LTQsNC90L3Ri9GFINC90LAg0Y3QutGA0LDQvdC1XHJcbmZ1bmN0aW9uIGRpc3BsYXlEYXRhKCkge1xyXG4gIC8vINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0LrRg9Cy0YjQuNC90L7QslxyXG4gIGxldCBqdWdzSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmp1Z3NfX2l0ZW1zXCIpO1xyXG4gIGp1Z3NJdGVtcy5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuXHJcbiAgICAgIGxldCBpdGVtID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdWdzX19pdGVtIGl0ZW0tanVncyBpdGVtLWp1Z3MtJHtqdWd9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWp1Z3NfX3RpdGxlXCI+JHtqdWdFbGVtZW50LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIml0ZW0tanVnc19faW1nXCIgc3JjPVwiaW1nL2ljb24vamFyLnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktdG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS10b3AtcGVyY2VudFwiPiR7anVnRWxlbWVudC5wZXJjZW50fSU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LWJvdHRvbS10ZXh0XCI+0L7RgdGC0LDQu9C+0YHRjDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnI+PHNwYW4gY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktYm90dG9tLW1vbmV5XCI+JHtqdWdFbGVtZW50Lm1vbmV5fSBwLjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcblxyXG4gICAgICBqdWdzSXRlbXMuaW5uZXJIVE1MICs9IGl0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByYW5nZUluaXQoKTtcclxufVxyXG5kaXNwbGF5RGF0YSgpO1xyXG5cclxuLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQvdCw0YHRgtGA0L7QtdC6XHJcbmZ1bmN0aW9uIHJhbmdlSW5pdCgpIHtcclxuICBjb25zdCBzZXR0aW5nTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ19fbGlzdFwiKTtcclxuICBzZXR0aW5nTGlzdC5pbm5lckhUTUwgPSBcIlwiOyAvLyDQntGH0LjRidCw0LXQvCDQv9GA0LXQtNGL0LTRg9GJ0LjQuSDQutC+0L3RgtC10L3RglxyXG5cclxuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTsgLy8g0KHQvtC30LTQsNC10Lwg0LLRgNC10LzQtdC90L3Ri9C5INGE0YDQsNCz0LzQtdC90YIg0LTQu9GPINGD0LvRg9GH0YjQtdC90L3QvtC5INC/0YDQvtC40LfQstC+0LTQuNGC0LXQu9GM0L3QvtGB0YLQuFxyXG5cclxuICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuXHJcbiAgICAgIC8vINCh0L7Qt9C00LDQtdC8INGN0LvQtdC80LXQvdGCINGB0L/QuNGB0LrQsFxyXG4gICAgICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgaXRlbUVsZW1lbnQuY2xhc3NOYW1lID0gYG1lbnVfX2l0ZW0gc2V0dGluZ19faXRlbSBpdGVtLXNldHRpbmcgaXRlbS1zZXR0aW5nLSR7anVnfWA7XHJcblxyXG4gICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0YHQvtC00LXRgNC20LjQvNC+0LUg0LIg0L3QvtCy0YvQuSDRjdC70LXQvNC10L3RglxyXG4gICAgICBpdGVtRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tc2V0dGluZ19fdGl0bGVcIj4ke2p1Z0VsZW1lbnQudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tc2V0dGluZ19fc2xpZGVyIFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXNldHRpbmdfX3ZhbHVlXCI+0JfQvdCw0YfQtdC90LjQtTogPHNwYW4+JHtqdWdFbGVtZW50LnBlcmNlbnR9JTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRjdC70LXQvNC10L3RgiDQsiDRhNGA0LDQs9C80LXQvdGCXHJcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGl0ZW1FbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiyDQt9CwINC+0LTQuNC9INGA0LDQtyDQsiBET01cclxuICBzZXR0aW5nTGlzdC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcblxyXG4gIC8vINCY0L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0YHQu9Cw0LnQtNC10YDRi1xyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG5cclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGAuaXRlbS1zZXR0aW5nLSR7anVnfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgc2V0dGluZ1NsaWRlciA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyVmFsdWUgPSBzZXR0aW5nU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLml0ZW0tc2V0dGluZ19fdmFsdWUgc3BhblwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNldHRpbmdTbGlkZXIpO1xyXG5cclxuICAgICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8gbm9VaVNsaWRlclxyXG4gICAgICBub1VpU2xpZGVyLmNyZWF0ZShzZXR0aW5nU2xpZGVyLCB7XHJcbiAgICAgICAgc3RhcnQ6IFtqdWdFbGVtZW50LnBlcmNlbnRdLFxyXG4gICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgIG1pbjogWzBdLFxyXG4gICAgICAgICAgbWF4OiBbMTAwXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vINCe0LHQvdC+0LLQu9C10L3QuNC1INC30L3QsNGH0LXQvdC40Y8g0L/RgNC4INC40LfQvNC10L3QtdC90LjQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIHNldHRpbmdTbGlkZXIubm9VaVNsaWRlci5vbihcInVwZGF0ZVwiLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgICBzZXR0aW5nU2xpZGVyVmFsdWUuaW5uZXJIVE1MID0gYCR7TnVtYmVyKHZhbHVlc1toYW5kbGVdKS50b0ZpeGVkKDApfSVgO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxucmFuZ2VJbml0KCk7XHJcblxyXG4vLyDQntCx0L3QvtCy0LvQtdC90LjQtSDQvdCw0YHRgtGA0L7QtdC6XHJcbmZ1bmN0aW9uIHVwZGF0ZVNldHRpbmcoKSB7XHJcbiAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDRgdC70LDQudC00LXRgNGLXHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcblxyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYC5pdGVtLXNldHRpbmctJHtqdWd9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiXHJcbiAgICAgICk7XHJcbiAgICAgIHNldHRpbmdTbGlkZXIubm9VaVNsaWRlci5zZXQoW2p1Z0VsZW1lbnQucGVyY2VudF0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8g0J7RgtCy0LXRgiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y5cclxuZnVuY3Rpb24gdXNlck1lc3NhZ2UodGV4dCwgZWxlbWVudCkge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImdvb2RcIiwgXCJlcnJvclwiKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0ZXh0KTtcclxuICB9LCAwKTtcclxufVxyXG5cclxuLy8g0YDQsNGB0YfQtdGCINGB0YDQtdC00YHRgiDQvNC10LbQtNGDINC60YPQstGI0LjQvdCw0LzQuFxyXG5mdW5jdGlvbiBjYWxjdWxhdGlvbkp1Z3MoKSB7XHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcbiAgICAgIGp1Z0VsZW1lbnQubW9uZXkgKz0gYW1vdW50ICogKGp1Z0VsZW1lbnQucGVyY2VudCAvIDEwMCk7XHJcbiAgICAgIC8vINCe0LPRgNCw0L3QuNGH0LjQstCw0LXQvCDQutC+0LvQuNGH0LXRgdGC0LLQviDRhtC40YTRgCDQv9C+0YHQu9C1INC30LDQv9GP0YLQvtC5INC00L4gMlxyXG4gICAgICBqdWdFbGVtZW50Lm1vbmV5ID0gcGFyc2VGbG9hdChqdWdFbGVtZW50Lm1vbmV5LnRvRml4ZWQoMikpO1xyXG4gICAgICBjb25zb2xlLmxvZyhqdWdFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcbiAgYW1vdW50ID0gMDtcclxuICBkaXNwbGF5RGF0YSgpOyAvLyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0LLRi9Cy0L7QtNCwINC00LDQvdC90YvRhSDQvdCwINGN0LrRgNCw0L1cclxuICBjb25zb2xlLmxvZyhqdWdzKTtcclxufVxyXG5cclxuLy8g0J/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhSDRhNC+0YDQvFxyXG5mdW5jdGlvbiBnZXRJbmZvRm9ybShmb3JtKSB7XHJcbiAgZm9ybS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCBmb3JtSW5mbyA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybS50YXJnZXQpLmVudHJpZXMoKSk7XHJcbiAgY29uc29sZS5sb2coZm9ybUluZm8sIGZvcm0uc3VibWl0dGVyKTtcclxuXHJcbiAgZGF0YVByb2Nlc3NpbmcoZm9ybUluZm8sIGZvcm0uc3VibWl0dGVyKTtcclxufVxyXG5cclxuLy8g0J7QsdGA0LDQsdC+0YLQutCwINC00LDQvdC90YvRhVxyXG5mdW5jdGlvbiBkYXRhUHJvY2Vzc2luZyhmb3JtSW5mbywgYnV0dG9uKSB7XHJcbiAgLy8g0JLQvdC+0YEg0YHRgNC10LTRgdGCXHJcbiAgaWYgKFwibW9uZXlJbnB1dFwiIGluIGZvcm1JbmZvKSB7XHJcbiAgICBmb3JtSW5mby5tb25leUlucHV0ID0gTnVtYmVyKGZvcm1JbmZvLm1vbmV5SW5wdXQpO1xyXG4gICAgaWYgKGZvcm1JbmZvLmp1Z3MgPT0gXCJ1bnNwZWNpZmllZFwiKSB7XHJcbiAgICAgIGlmIChOdW1iZXIoZm9ybUluZm8ubW9uZXlJbnB1dCkgPj0gMTAwKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICBhbW91bnQgKz0gZm9ybUluZm8ubW9uZXlJbnB1dDtcclxuICAgICAgICBjYWxjdWxhdGlvbkp1Z3MoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItCe0LHRidCw0Y8g0YHRg9C80LzQsCDQvNC10L3QtdC1IDEwMNGA0YPQsVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHVzZXJNZXNzYWdlKFwiZXJyb3JcIiwgYnV0dG9uKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChmb3JtSW5mby5qdWdzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGp1Z3NbZm9ybUluZm8uanVnc10pO1xyXG5cclxuICAgICAganVnc1tmb3JtSW5mby5qdWdzXS5tb25leSArPSBmb3JtSW5mby5tb25leUlucHV0O1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICAgIGRpc3BsYXlEYXRhKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItCa0YPQstGI0LjQvSDQvdC1INC90LDQudC00LXQvVwiKTtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImVycm9yXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0JLRi9C90L7RgSDRgdGA0LXQtNGB0YLQslxyXG4gIGlmIChcIm1vbmV5T3V0cHV0XCIgaW4gZm9ybUluZm8pIHtcclxuICAgIGZvcm1JbmZvLm1vbmV5T3V0cHV0ID0gTnVtYmVyKGZvcm1JbmZvLm1vbmV5T3V0cHV0KTtcclxuXHJcbiAgICBpZiAoanVnc1tmb3JtSW5mby5qdWdzXS5tb25leSA+PSBmb3JtSW5mby5tb25leU91dHB1dCkge1xyXG4gICAgICBqdWdzW2Zvcm1JbmZvLmp1Z3NdLm1vbmV5IC09IGZvcm1JbmZvLm1vbmV5T3V0cHV0O1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICAgIGRpc3BsYXlEYXRhKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImVycm9yXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8g0J/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhSDQv9GA0Lgg0LLQvdC+0YHQtSDRgdGA0LXQtNGB0YLQslxyXG5sZXQgZm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb25leS1mb3JtLWlucHV0XCIpO1xyXG5mb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRJbmZvRm9ybSk7XHJcblxyXG5sZXQgZm9ybU91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9uZXktZm9ybS1vdXRwdXRcIik7XHJcbmZvcm1PdXRwdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRJbmZvRm9ybSk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImEzYTNmNWYzZmIyOWM1NzFhMTBkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9