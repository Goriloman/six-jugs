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
/******/ 	__webpack_require__.h = () => ("0438962b1042371c5a0f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9maWxlcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGE0YPQvdC60YbQuNC+0L3QsNC70LAgXCLQp9C10YDRgtC+0LPQvtCyINCk0YDQuNC70LDQvdGB0LXRgNCwXCJcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tIFwiLi9mdW5jdGlvbnMuanNcIjtcclxuLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRgdC/0LjRgdC60LAg0LDQutGC0LjQstC90YvRhSDQvNC+0LTRg9C70LXQuVxyXG5pbXBvcnQgeyBmbHNNb2R1bGVzIH0gZnJvbSBcIi4vbW9kdWxlcy5qc1wiO1xyXG5pbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gXCJub3Vpc2xpZGVyXCI7XHJcbi8vIGltcG9ydCB7IGRvY3VtZW50LCBzZXRDb29raWUsIGdldENvb2tpZSwgZGVsZXRlQ29va2llIH0gZnJvbSBcImNvb2tpZWxpYlwiO1xyXG5cclxuLy8gQ29va2llIGpzXHJcbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lLCBqc29uID0gZmFsc2UpIHtcclxuICBpZiAoIW5hbWUpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIC8qXHJcbiAgUmV0dXJucyBjb29raWUgd2l0aCBzcGVjaWZpZWQgbmFtZSAoc3RyKSBpZiBleGlzdHMsIGVsc2UgLSB1bmRlZmluZWRcclxuICBpZiByZXR1cm5pbmcgdmFsdWUgaXMgSlNPTiBhbmQganNvbiBwYXJhbWV0ZXIgaXMgdHJ1ZSwgcmV0dXJucyBqc29uLCBvdGhlcndpc2Ugc3RyXHJcbiAgKi9cclxuICBsZXQgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChcclxuICAgIG5ldyBSZWdFeHAoXHJcbiAgICAgIFwiKD86Xnw7IClcIiArIG5hbWUucmVwbGFjZSgvKFsuJD8qfHt9KClcXFtcXF1cXFxcXFwvK15dKS9nLCBcIlxcXFwkMVwiKSArIFwiPShbXjtdKilcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgaWYgKG1hdGNoZXMpIHtcclxuICAgIGxldCByZXMgPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSk7XHJcbiAgICBpZiAoanNvbikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlcyk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5mdW5jdGlvbiBzZXRDb29raWUobmFtZSwgdmFsdWUsIG9wdGlvbnMgPSB7IHBhdGg6IFwiL1wiIH0pIHtcclxuICAvKlxyXG4gIFNldHMgYSBjb29raWUgd2l0aCBzcGVjaWZpZWQgbmFtZSAoc3RyKSwgdmFsdWUgKHN0cikgJiBvcHRpb25zIChkaWN0KVxyXG5cclxuICBvcHRpb25zIGtleXM6XHJcbiAgICAtIHBhdGggKHN0cikgLSBVUkwsIGZvciB3aGljaCB0aGlzIGNvb2tpZSBpcyBhdmFpbGFibGUgKG11c3QgYmUgYWJzb2x1dGUhKVxyXG4gICAgLSBkb21haW4gKHN0cikgLSBkb21haW4sIGZvciB3aGljaCB0aGlzIGNvb2tpZSBpcyBhdmFpbGFibGVcclxuICAgIC0gZXhwaXJlcyAoRGF0ZSBvYmplY3QpIC0gZXhwaXJhdGlvbiBkYXRlJnRpbWUgb2YgY29va2llXHJcbiAgICAtIG1heC1hZ2UgKGludCkgLSBjb29raWUgbGlmZXRpbWUgaW4gc2Vjb25kcyAoYWx0ZXJuYXRpdmUgZm9yIGV4cGlyZXMgb3B0aW9uKVxyXG4gICAgLSBzZWN1cmUgKGJvb2wpIC0gaWYgdHJ1ZSwgY29va2llIHdpbGwgYmUgYXZhaWxhYmxlIG9ubHkgZm9yIEhUVFBTLlxyXG4gICAgICAgICAgICAgICAgICAgICAgSVQgQ0FOJ1QgQkUgRkFMU0VcclxuICAgIC0gc2FtZXNpdGUgKHN0cikgLSBYU1JGIHByb3RlY3Rpb24gc2V0dGluZy5cclxuICAgICAgICAgICAgICAgICAgICAgICBDYW4gYmUgc3RyaWN0IG9yIGxheFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFJlYWQgaHR0cHM6Ly93ZWIuZGV2L3NhbWVzaXRlLWNvb2tpZXMtZXhwbGFpbmVkLyBmb3IgZGV0YWlsc1xyXG4gICAgLSBodHRwT25seSAoYm9vbCkgLSBpZiB0cnVlLCBjb29raWUgd29uJ3QgYmUgYXZhaWxhYmxlIGZvciB1c2luZyBpbiBKYXZhU2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElUIENBTidUIEJFIEZBTFNFXHJcbiAgKi9cclxuICBpZiAoIW5hbWUpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICBpZiAob3B0aW9ucy5leHBpcmVzIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgb3B0aW9ucy5leHBpcmVzID0gb3B0aW9ucy5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gIH1cclxuICBsZXQgdXBkYXRlZENvb2tpZSA9XHJcbiAgICBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgZm9yIChsZXQgb3B0aW9uS2V5IGluIG9wdGlvbnMpIHtcclxuICAgIHVwZGF0ZWRDb29raWUgKz0gXCI7IFwiICsgb3B0aW9uS2V5O1xyXG4gICAgbGV0IG9wdGlvblZhbHVlID0gb3B0aW9uc1tvcHRpb25LZXldO1xyXG4gICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XHJcbiAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI9XCIgKyBvcHRpb25WYWx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcclxufVxyXG5mdW5jdGlvbiBkZWxldGVDb29raWUobmFtZSkge1xyXG4gIC8qXHJcbiAgRGVsZXRlcyBhIGNvb2tpZSB3aXRoIHNwZWNpZmllZCBuYW1lLlxyXG4gIFJldHVybnMgdHJ1ZSB3aGVuIGNvb2tpZSB3YXMgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQsIG90aGVyd2lzZSBmYWxzZVxyXG4gICovXHJcbiAgc2V0Q29va2llKG5hbWUsIG51bGwsIHtcclxuICAgIGV4cGlyZXM6IG5ldyBEYXRlKCksXHJcbiAgICBwYXRoOiBcIi9cIixcclxuICB9KTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyDQm9C+0LPQuNC60LAg0L/RgNC40LvQvtC20LXQvdC40Y9cclxuXHJcbi8vINCU0LXQudGB0YLQstC40Y8g0L/RgNC4INC60LvQuNC60LVcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvY3VtZW50QWN0aW9ucyk7XHJcblxyXG4gIGZ1bmN0aW9uIGRvY3VtZW50QWN0aW9ucyhlKSB7XHJcbiAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xyXG5cclxuICAgIC8vINCh0LHRgNC+0YEg0LfQvdCw0YfQtdC90LjQuSDQvdCw0YHRgtGA0L7QtdC6XHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KGAuYnV0dG9uLXJlc2V0YCkpIHtcclxuICAgICAgbGV0IGJ1dHRvblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tcmVzZXRcIik7XHJcbiAgICAgIGxldCBzZXR0aW5nU2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuaXRlbS1zZXR0aW5nIC5pdGVtLXNldHRpbmdfX3NsaWRlclwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBsZXQganVnSW5kZXggPSAwO1xyXG4gICAgICBjb25zdCB2YWx1ZXMgPSBbNTUsIDEwLCAxMCwgMTAsIDEwLCA1XTsgLy8g0JfQvdCw0YfQtdC90LjRjyDQtNC70Y8g0L/RgNC40YHQstC+0LXQvdC40Y9cclxuXHJcbiAgICAgIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnRKdWcgPSBqdWdzW2p1Z107XHJcbiAgICAgICAgICBpZiAoanVnSW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRKdWcucGVyY2VudCA9IHZhbHVlc1tqdWdJbmRleF07IC8vINCf0YDQuNGB0LLQvtC10L3QuNC1INC30L3QsNGH0LXQvdC40Y9cclxuICAgICAgICAgICAganVnSW5kZXgrKzsgLy8g0KPQstC10LvQuNGH0LjQstCw0LXQvCDQuNC90LTQtdC60YFcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVwZGF0ZVNldHRpbmcoKTtcclxuICAgICAgZGlzcGxheURhdGEoKTtcclxuXHJcbiAgICAgIHVzZXJNZXNzYWdlKFwiZ29vZFwiLCBidXR0b25SZXNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0KHQsdGA0L7RgSDQstGB0LXRhSDRgdGA0LXQtNGB0YLQslxyXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdChgLmJ1dHRvbi1yZXNldC1tb25leWApKSB7XHJcbiAgICAgIGxldCBidXR0b25SZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXJlc2V0LW1vbmV5XCIpO1xyXG4gICAgICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG4gICAgICAgICAganVnRWxlbWVudC5tb25leSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJNZXNzYWdlKFwiZ29vZFwiLCBidXR0b25SZXNldCk7XHJcblxyXG4gICAgICBqdWdzID0gSlNPTi5wYXJzZShnZXRDb29raWUoXCJqdWdzXCIsIHRydWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQn9GA0LjQvNC10L3QuNGC0Ywg0L3QsNGB0YLRgNC+0LnQutC4XHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KFwiLmJ1dHRvbi1hcHBseVwiKSkge1xyXG4gICAgICBjb25zdCBidXR0b25BcHBseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWFwcGx5XCIpO1xyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIik7XHJcbiAgICAgIGNvbnN0IGl0ZW1TZXR0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtLXNldHRpbmdcIik7XHJcblxyXG4gICAgICBsZXQgdG90YWxTbGlkZXJWYWx1ZSA9IDA7XHJcblxyXG4gICAgICAvLyDQktGL0YfQuNGB0LvRj9C10Lwg0YHRg9C80LzRgyDQt9C90LDRh9C10L3QuNC5INGB0LvQsNC50LTQtdGA0L7QslxyXG4gICAgICBzZXR0aW5nU2xpZGVycy5mb3JFYWNoKChzbGlkZXIpID0+IHtcclxuICAgICAgICB0b3RhbFNsaWRlclZhbHVlICs9IE51bWJlcihzbGlkZXIubm9VaVNsaWRlci5nZXQoKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRvdGFsU2xpZGVyVmFsdWUgPT09IDEwMCkge1xyXG4gICAgICAgIHVzZXJNZXNzYWdlKFwiZ29vZFwiLCBidXR0b25BcHBseSk7XHJcblxyXG4gICAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQt9C90LDRh9C10L3QuNGPINCyINC+0LHRitC10LrRgtC1IGp1Z3NcclxuICAgICAgICBpdGVtU2V0dGluZy5mb3JFYWNoKChzbGlkZXJXcmFwcGVyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzbGlkZXIgPSBzbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIik7XHJcbiAgICAgICAgICBjb25zdCBzbGlkZXJXcmFwcGVyQ2xhc3NlcyA9IEFycmF5LmZyb20oc2xpZGVyV3JhcHBlci5jbGFzc0xpc3QpO1xyXG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNDbGFzcyA9IHNsaWRlcldyYXBwZXJDbGFzc2VzLmZpbmQoKGNsYXNzTmFtZSkgPT5cclxuICAgICAgICAgICAgY2xhc3NOYW1lLnN0YXJ0c1dpdGgoXCJpdGVtLXNldHRpbmctXCIpXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmIChzcGVjaWZpY0NsYXNzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWNpZmljQ2xhc3MpOyAvLyDQktGL0LLQvtC00LjQvCDQv9C+0LvQvdGL0Lkg0LrQu9Cw0YHRgVxyXG4gICAgICAgICAgICBjb25zdCBjbGFzc1dpdGhvdXRQcmVmaXggPSBzcGVjaWZpY0NsYXNzLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgXCJpdGVtLXNldHRpbmctXCIsXHJcbiAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xyXG4gICAgICAgICAgICBqdWdzW2NsYXNzV2l0aG91dFByZWZpeF0ucGVyY2VudCA9IE51bWJlcihzbGlkZXIubm9VaVNsaWRlci5nZXQoKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgIGBqdWdzWyR7Y2xhc3NXaXRob3V0UHJlZml4fV0ucGVyY2VudCA9IE51bWJlcigke3NsaWRlci5ub1VpU2xpZGVyLmdldCgpfSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXlEYXRhKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UoXCJlcnJvclwiLCBidXR0b25BcHBseSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coanVncyk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8g0JLRgdC1INC/0LXRgNC10LzQtdC90L3Ri9C1XHJcbmxldCBhbW91bnQgPSAwO1xyXG5sZXQganVncyA9IHtcclxuICBtb250aGx5OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDU1LFxyXG4gICAgdGl0bGU6IFwi0JXQttC10LzQtdGB0Y/Rh9C90YvQtSDRgtGA0LDRgtGLXCIsXHJcbiAgfSxcclxuICBlbnRlcnRhaW5tZW50OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0KDQsNC30LLQu9C10YfQtdC90LjRj1wiLFxyXG4gIH0sXHJcbiAgc2F2aW5nOiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0J3QsNC60L7Qv9C70LXQvdC40Y9cIixcclxuICB9LFxyXG4gIGRldmVsb3BtZW50OiB7XHJcbiAgICBtb25leTogMCxcclxuICAgIHBlcmNlbnQ6IDEwLFxyXG4gICAgdGl0bGU6IFwi0KHQsNC80L7RgNCw0LfQstC40YLQuNC1XCIsXHJcbiAgfSxcclxuICBzYWZldHk6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogMTAsXHJcbiAgICB0aXRsZTogXCLQn9C+0LTRg9GI0LrQsCDQsdC10LfQvtC/0LDRgdC90L7RgdGC0LhcIixcclxuICB9LFxyXG4gIHByZXNlbnQ6IHtcclxuICAgIG1vbmV5OiAwLFxyXG4gICAgcGVyY2VudDogNSxcclxuICAgIHRpdGxlOiBcItCf0L7QtNCw0YDQutC4XCIsXHJcbiAgfSxcclxufTtcclxuXHJcbnNldENvb2tpZShcImp1Z3NcIiwgSlNPTi5zdHJpbmdpZnkoanVncykpO1xyXG5cclxuc2V0Q29va2llKFwibmFtZVwiLCBqdWdzKTtcclxuXHJcbmNvbnNvbGUubG9nKGdldENvb2tpZShcIm5hbWVcIikpO1xyXG5cclxuLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L3QsCDRjdC60YDQsNC90LVcclxuZnVuY3Rpb24gZGlzcGxheURhdGEoKSB7XHJcbiAgLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQutGD0LLRiNC40L3QvtCyXHJcbiAgbGV0IGp1Z3NJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanVnc19faXRlbXNcIik7XHJcbiAganVnc0l0ZW1zLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG5cclxuICAgICAgbGV0IGl0ZW0gPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImp1Z3NfX2l0ZW0gaXRlbS1qdWdzIGl0ZW0tanVncy0ke2p1Z31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tanVnc19fdGl0bGVcIj4ke2p1Z0VsZW1lbnQudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHlcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaXRlbS1qdWdzX19pbWdcIiBzcmM9XCJpbWcvaWNvbi9qYXIuc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LXRvcC1wZXJjZW50XCI+JHtqdWdFbGVtZW50LnBlcmNlbnR9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1qdWdzX19ib2R5LWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWp1Z3NfX2JvZHktYm90dG9tLXRleHRcIj7QvtGB0YLQsNC70L7RgdGMOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxicj48c3BhbiBjbGFzcz1cIml0ZW0tanVnc19fYm9keS1ib3R0b20tbW9uZXlcIj4ke2p1Z0VsZW1lbnQubW9uZXl9IHAuPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuXHJcbiAgICAgIGp1Z3NJdGVtcy5pbm5lckhUTUwgKz0gaXRlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJhbmdlSW5pdCgpO1xyXG4gIGp1Z3MgPSBKU09OLnBhcnNlKGdldENvb2tpZShcImp1Z3NcIiwgdHJ1ZSkpO1xyXG59XHJcbmRpc3BsYXlEYXRhKCk7XHJcblxyXG4vLyDQntGC0L7QsdGA0LDQttC10L3QuNC1INC90LDRgdGC0YDQvtC10LpcclxuZnVuY3Rpb24gcmFuZ2VJbml0KCkge1xyXG4gIGNvbnN0IHNldHRpbmdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXR0aW5nX19saXN0XCIpO1xyXG4gIHNldHRpbmdMaXN0LmlubmVySFRNTCA9IFwiXCI7IC8vINCe0YfQuNGJ0LDQtdC8INC/0YDQtdC00YvQtNGD0YnQuNC5INC60L7QvdGC0LXQvdGCXHJcblxyXG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvLyDQodC+0LfQtNCw0LXQvCDQstGA0LXQvNC10L3QvdGL0Lkg0YTRgNCw0LPQvNC10L3RgiDQtNC70Y8g0YPQu9GD0YfRiNC10L3QvdC+0Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YzQvdC+0YHRgtC4XHJcblxyXG4gIGZvciAoY29uc3QganVnIGluIGp1Z3MpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanVncywganVnKSkge1xyXG4gICAgICBjb25zdCBqdWdFbGVtZW50ID0ganVnc1tqdWddO1xyXG5cclxuICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0Y3Qu9C10LzQtdC90YIg0YHQv9C40YHQutCwXHJcbiAgICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBpdGVtRWxlbWVudC5jbGFzc05hbWUgPSBgbWVudV9faXRlbSBzZXR0aW5nX19pdGVtIGl0ZW0tc2V0dGluZyBpdGVtLXNldHRpbmctJHtqdWd9YDtcclxuXHJcbiAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDQsiDQvdC+0LLRi9C5INGN0LvQtdC80LXQvdGCXHJcbiAgICAgIGl0ZW1FbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1zZXR0aW5nX190aXRsZVwiPiR7anVnRWxlbWVudC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1zZXR0aW5nX19zbGlkZXIgXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tc2V0dGluZ19fdmFsdWVcIj7Ql9C90LDRh9C10L3QuNC1OiA8c3Bhbj4ke2p1Z0VsZW1lbnQucGVyY2VudH0lPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGN0LvQtdC80LXQvdGCINCyINGE0YDQsNCz0LzQtdC90YJcclxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaXRlbUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INCy0YHQtSDRjdC70LXQvNC10L3RgtGLINC30LAg0L7QtNC40L0g0YDQsNC3INCyIERPTVxyXG4gIHNldHRpbmdMaXN0LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuXHJcbiAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDRgdC70LDQudC00LXRgNGLXHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcblxyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYC5pdGVtLXNldHRpbmctJHtqdWd9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzZXR0aW5nU2xpZGVyID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5pdGVtLXNldHRpbmdfX3NsaWRlclwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXJWYWx1ZSA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuaXRlbS1zZXR0aW5nX192YWx1ZSBzcGFuXCJcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coc2V0dGluZ1NsaWRlcik7XHJcblxyXG4gICAgICAvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyBub1VpU2xpZGVyXHJcbiAgICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNldHRpbmdTbGlkZXIsIHtcclxuICAgICAgICBzdGFydDogW2p1Z0VsZW1lbnQucGVyY2VudF0sXHJcbiAgICAgICAgc3RlcDogMSxcclxuICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgbWluOiBbMF0sXHJcbiAgICAgICAgICBtYXg6IFsxMDBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g0J7QsdC90L7QstC70LXQvdC40LUg0LfQvdCw0YfQtdC90LjRjyDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgc2V0dGluZ1NsaWRlci5ub1VpU2xpZGVyLm9uKFwidXBkYXRlXCIsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gICAgICAgIHNldHRpbmdTbGlkZXJWYWx1ZS5pbm5lckhUTUwgPSBgJHtOdW1iZXIodmFsdWVzW2hhbmRsZV0pLnRvRml4ZWQoMCl9JWA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5yYW5nZUluaXQoKTtcclxuXHJcbi8vINCe0LHQvdC+0LLQu9C10L3QuNC1INC90LDRgdGC0YDQvtC10LpcclxuZnVuY3Rpb24gdXBkYXRlU2V0dGluZygpIHtcclxuICAvLyDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INGB0LvQsNC50LTQtdGA0YtcclxuICBmb3IgKGNvbnN0IGp1ZyBpbiBqdWdzKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGp1Z3MsIGp1ZykpIHtcclxuICAgICAgY29uc3QganVnRWxlbWVudCA9IGp1Z3NbanVnXTtcclxuXHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgLml0ZW0tc2V0dGluZy0ke2p1Z31gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdTbGlkZXIgPSBzZXR0aW5nU2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICAgKTtcclxuICAgICAgc2V0dGluZ1NsaWRlci5ub1VpU2xpZGVyLnNldChbanVnRWxlbWVudC5wZXJjZW50XSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBqdWdzID0gSlNPTi5wYXJzZShnZXRDb29raWUoXCJqdWdzXCIsIHRydWUpKTtcclxufVxyXG5cclxuLy8g0J7RgtCy0LXRgiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y5cclxuZnVuY3Rpb24gdXNlck1lc3NhZ2UodGV4dCwgZWxlbWVudCkge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImdvb2RcIiwgXCJlcnJvclwiKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0ZXh0KTtcclxuICB9LCAwKTtcclxufVxyXG5cclxuLy8g0YDQsNGB0YfQtdGCINGB0YDQtdC00YHRgiDQvNC10LbQtNGDINC60YPQstGI0LjQvdCw0LzQuFxyXG5mdW5jdGlvbiBjYWxjdWxhdGlvbkp1Z3MoKSB7XHJcbiAgZm9yIChjb25zdCBqdWcgaW4ganVncykge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqdWdzLCBqdWcpKSB7XHJcbiAgICAgIGNvbnN0IGp1Z0VsZW1lbnQgPSBqdWdzW2p1Z107XHJcbiAgICAgIGp1Z0VsZW1lbnQubW9uZXkgKz0gYW1vdW50ICogKGp1Z0VsZW1lbnQucGVyY2VudCAvIDEwMCk7XHJcbiAgICAgIC8vINCe0LPRgNCw0L3QuNGH0LjQstCw0LXQvCDQutC+0LvQuNGH0LXRgdGC0LLQviDRhtC40YTRgCDQv9C+0YHQu9C1INC30LDQv9GP0YLQvtC5INC00L4gMlxyXG4gICAgICBqdWdFbGVtZW50Lm1vbmV5ID0gcGFyc2VGbG9hdChqdWdFbGVtZW50Lm1vbmV5LnRvRml4ZWQoMikpO1xyXG4gICAgICBjb25zb2xlLmxvZyhqdWdFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcbiAgYW1vdW50ID0gMDtcclxuICBkaXNwbGF5RGF0YSgpOyAvLyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0LLRi9Cy0L7QtNCwINC00LDQvdC90YvRhSDQvdCwINGN0LrRgNCw0L1cclxuICBjb25zb2xlLmxvZyhqdWdzKTtcclxufVxyXG5cclxuLy8g0J/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhSDRhNC+0YDQvFxyXG5mdW5jdGlvbiBnZXRJbmZvRm9ybShmb3JtKSB7XHJcbiAgZm9ybS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCBmb3JtSW5mbyA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybS50YXJnZXQpLmVudHJpZXMoKSk7XHJcbiAgY29uc29sZS5sb2coZm9ybUluZm8sIGZvcm0uc3VibWl0dGVyKTtcclxuXHJcbiAgZGF0YVByb2Nlc3NpbmcoZm9ybUluZm8sIGZvcm0uc3VibWl0dGVyKTtcclxufVxyXG5cclxuLy8g0J7QsdGA0LDQsdC+0YLQutCwINC00LDQvdC90YvRhVxyXG5mdW5jdGlvbiBkYXRhUHJvY2Vzc2luZyhmb3JtSW5mbywgYnV0dG9uKSB7XHJcbiAgLy8g0JLQvdC+0YEg0YHRgNC10LTRgdGCXHJcbiAgaWYgKFwibW9uZXlJbnB1dFwiIGluIGZvcm1JbmZvKSB7XHJcbiAgICBmb3JtSW5mby5tb25leUlucHV0ID0gTnVtYmVyKGZvcm1JbmZvLm1vbmV5SW5wdXQpO1xyXG4gICAgaWYgKGZvcm1JbmZvLmp1Z3MgPT0gXCJ1bnNwZWNpZmllZFwiKSB7XHJcbiAgICAgIGlmIChOdW1iZXIoZm9ybUluZm8ubW9uZXlJbnB1dCkgPj0gMTAwKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICBhbW91bnQgKz0gZm9ybUluZm8ubW9uZXlJbnB1dDtcclxuICAgICAgICBjYWxjdWxhdGlvbkp1Z3MoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItCe0LHRidCw0Y8g0YHRg9C80LzQsCDQvNC10L3QtdC1IDEwMNGA0YPQsVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHVzZXJNZXNzYWdlKFwiZXJyb3JcIiwgYnV0dG9uKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChmb3JtSW5mby5qdWdzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGp1Z3NbZm9ybUluZm8uanVnc10pO1xyXG5cclxuICAgICAganVnc1tmb3JtSW5mby5qdWdzXS5tb25leSArPSBmb3JtSW5mby5tb25leUlucHV0O1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICAgIGRpc3BsYXlEYXRhKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItCa0YPQstGI0LjQvSDQvdC1INC90LDQudC00LXQvVwiKTtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImVycm9yXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0JLRi9C90L7RgSDRgdGA0LXQtNGB0YLQslxyXG4gIGlmIChcIm1vbmV5T3V0cHV0XCIgaW4gZm9ybUluZm8pIHtcclxuICAgIGZvcm1JbmZvLm1vbmV5T3V0cHV0ID0gTnVtYmVyKGZvcm1JbmZvLm1vbmV5T3V0cHV0KTtcclxuXHJcbiAgICBpZiAoanVnc1tmb3JtSW5mby5qdWdzXS5tb25leSA+PSBmb3JtSW5mby5tb25leU91dHB1dCkge1xyXG4gICAgICBqdWdzW2Zvcm1JbmZvLmp1Z3NdLm1vbmV5IC09IGZvcm1JbmZvLm1vbmV5T3V0cHV0O1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImdvb2RcIiwgYnV0dG9uKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICAgIGRpc3BsYXlEYXRhKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTWVzc2FnZShcImVycm9yXCIsIGJ1dHRvbik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8g0J/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhSDQv9GA0Lgg0LLQvdC+0YHQtSDRgdGA0LXQtNGB0YLQslxyXG5sZXQgZm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb25leS1mb3JtLWlucHV0XCIpO1xyXG5mb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRJbmZvRm9ybSk7XHJcblxyXG5sZXQgZm9ybU91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9uZXktZm9ybS1vdXRwdXRcIik7XHJcbmZvcm1PdXRwdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRJbmZvRm9ybSk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA0Mzg5NjJiMTA0MjM3MWM1YTBmXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9