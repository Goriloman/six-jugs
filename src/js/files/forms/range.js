// Подключение из node_modules
import * as noUiSlider from "nouislider";

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import "nouislider/dist/nouislider.css";

export function rangeInit() {
  const settingSlidersWrapper = document.querySelectorAll(".item-setting");
  settingSlidersWrapper.forEach((settingSliderWrapper) => {
    let settingSlider = settingSliderWrapper.querySelector(
      ".item-setting__slider"
    );
    noUiSlider.create(settingSlider, {
      start: [20],
      step: 5,
      range: {
        min: [0],
        max: [100],
      },
    });
    let settingSliderValue = settingSliderWrapper.querySelector(
      ".item-setting__value span"
    );
    settingSlider.noUiSlider.on("update", function (values, handle) {
      console.log(typeof values[handle]);
      settingSliderValue.innerHTML = Number(values[handle]).toFixed(0) + "%";
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  rangeInit();
});
