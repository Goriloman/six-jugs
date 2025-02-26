// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

function menuInit() {
  if (document.querySelector(".icon-menu")) {
    document.addEventListener("click", function (e) {
      if (bodyLockStatus && e.target.closest(".icon-menu")) {
        bodyLockToggle();
        document.documentElement.classList.toggle("menu-open");
      }
    });
  }
}

window.onload = function () {
  window.addEventListener("click", documentActions);

  function documentActions(e) {
    let targetElement = e.target;
    if (targetElement.closest(`.button-reset`)) {
      // Сброс значений настроек
      let buttonReset = document.querySelector("button-reset");
      let settingSliders = document.querySelectorAll(
        ".item-setting .item-setting__slider"
      );
      settingSliders.forEach((settingSlider) => {
        settingSlider.noUiSlider.set([20]);
      });
    }
  }
};
