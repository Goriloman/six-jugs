"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/files/functions.js":
/*!***********************************!*\
  !*** ./src/js/files/functions.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FLS: () => (/* binding */ FLS),
/* harmony export */   _slideDown: () => (/* binding */ _slideDown),
/* harmony export */   _slideToggle: () => (/* binding */ _slideToggle),
/* harmony export */   _slideUp: () => (/* binding */ _slideUp),
/* harmony export */   addLoadedClass: () => (/* binding */ addLoadedClass),
/* harmony export */   addTouchClass: () => (/* binding */ addTouchClass),
/* harmony export */   bodyLock: () => (/* binding */ bodyLock),
/* harmony export */   bodyLockStatus: () => (/* binding */ bodyLockStatus),
/* harmony export */   bodyLockToggle: () => (/* binding */ bodyLockToggle),
/* harmony export */   bodyUnlock: () => (/* binding */ bodyUnlock),
/* harmony export */   dataMediaQueries: () => (/* binding */ dataMediaQueries),
/* harmony export */   fullVHfix: () => (/* binding */ fullVHfix),
/* harmony export */   getDigFormat: () => (/* binding */ getDigFormat),
/* harmony export */   getDigFromString: () => (/* binding */ getDigFromString),
/* harmony export */   getHash: () => (/* binding */ getHash),
/* harmony export */   indexInParent: () => (/* binding */ indexInParent),
/* harmony export */   isMobile: () => (/* binding */ isMobile),
/* harmony export */   isWebp: () => (/* binding */ isWebp),
/* harmony export */   menuClose: () => (/* binding */ menuClose),
/* harmony export */   menuInit: () => (/* binding */ menuInit),
/* harmony export */   menuOpen: () => (/* binding */ menuOpen),
/* harmony export */   removeClasses: () => (/* binding */ removeClasses),
/* harmony export */   setHash: () => (/* binding */ setHash),
/* harmony export */   showMore: () => (/* binding */ showMore),
/* harmony export */   spollers: () => (/* binding */ spollers),
/* harmony export */   tabs: () => (/* binding */ tabs),
/* harmony export */   uniqArray: () => (/* binding */ uniqArray)
/* harmony export */ });
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules.js */ "./src/js/files/modules.js");
// Подключение списка активных модулей


/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}
/* Проверка мобильного браузера */
let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
/* Добавление класса touch для HTML если браузер мобильный */
function addTouchClass() {
  // Добавление класса _touch для HTML если браузер мобильный
  if (isMobile.any()) document.documentElement.classList.add("touch");
}
// Добавление loaded для HTML после полной загрузки страницы
function addLoadedClass() {
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.documentElement.classList.add("loaded");
    }, 0);
  });
}
// Получение хеша в адресе сайта
function getHash() {
  if (location.hash) {
    return location.hash.replace("#", "");
  }
}
// Указание хеша в адресе сайта
function setHash(hash) {
  hash = hash ? `#${hash}` : window.location.href.split("#")[0];
  history.pushState("", "", hash);
}
// Учет плавающей панели на мобильных устройствах при 100vh
function fullVHfix() {
  const fullScreens = document.querySelectorAll("[data-fullscreen]");
  if (fullScreens.length && isMobile.any()) {
    window.addEventListener("resize", fixHeight);
    function fixHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    fixHeight();
  }
}
// Вспомогательные модули плавного расскрытия и закрытия объекта ======================================================================================================================================================================
let _slideUp = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty("height") : null;
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      !showmore ? target.style.removeProperty("overflow") : null;
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      // Создаем событие
      document.dispatchEvent(
        new CustomEvent("slideUpDone", {
          detail: {
            target: target,
          },
        })
      );
    }, duration);
  }
};
let _slideDown = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty("height") : null;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      // Создаем событие
      document.dispatchEvent(
        new CustomEvent("slideDownDone", {
          detail: {
            target: target,
          },
        })
      );
    }, duration);
  }
};
let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};
// Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
let bodyLockStatus = true;
let bodyLockToggle = (delay = 500) => {
  if (document.documentElement.classList.contains("lock")) {
    bodyUnlock(delay);
  } else {
    bodyLock(delay);
  }
};
let bodyUnlock = (delay = 500) => {
  let body = document.querySelector("body");
  if (bodyLockStatus) {
    let lock_padding = document.querySelectorAll("[data-lp]");
    setTimeout(() => {
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight = "0px";
      }
      body.style.paddingRight = "0px";
      document.documentElement.classList.remove("lock");
    }, delay);
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
let bodyLock = (delay = 500) => {
  let body = document.querySelector("body");
  if (bodyLockStatus) {
    let lock_padding = document.querySelectorAll("[data-lp]");
    for (let index = 0; index < lock_padding.length; index++) {
      const el = lock_padding[index];
      el.style.paddingRight =
        window.innerWidth -
        document.querySelector(".wrapper").offsetWidth +
        "px";
    }
    body.style.paddingRight =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    document.documentElement.classList.add("lock");

    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
// Модуль работы со спойлерами =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-spojlery.html
Сниппет (HTML): spollers
*/
function spollers() {
  const spollersArray = document.querySelectorAll("[data-spollers]");
  if (spollersArray.length > 0) {
    // Получение обычных слойлеров
    const spollersRegular = Array.from(spollersArray).filter(
      function (item, index, self) {
        return !item.dataset.spollers.split(",")[0];
      }
    );
    // Инициализация обычных слойлеров
    if (spollersRegular.length) {
      initSpollers(spollersRegular);
    }
    // Получение слойлеров с медиа запросами
    let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
    if (mdQueriesArray && mdQueriesArray.length) {
      mdQueriesArray.forEach((mdQueriesItem) => {
        // Событие
        mdQueriesItem.matchMedia.addEventListener("change", function () {
          initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
    }
    // Инициализация
    function initSpollers(spollersArray, matchMedia = false) {
      spollersArray.forEach((spollersBlock) => {
        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
        if (matchMedia.matches || !matchMedia) {
          spollersBlock.classList.add("_spoller-init");
          initSpollerBody(spollersBlock);
          spollersBlock.addEventListener("click", setSpollerAction);
        } else {
          spollersBlock.classList.remove("_spoller-init");
          initSpollerBody(spollersBlock, false);
          spollersBlock.removeEventListener("click", setSpollerAction);
        }
      });
    }
    // Работа с контентом
    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
      let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
      if (spollerTitles.length) {
        spollerTitles = Array.from(spollerTitles).filter(
          (item) => item.closest("[data-spollers]") === spollersBlock
        );
        spollerTitles.forEach((spollerTitle) => {
          if (hideSpollerBody) {
            spollerTitle.removeAttribute("tabindex");
            if (!spollerTitle.classList.contains("_spoller-active")) {
              spollerTitle.nextElementSibling.hidden = true;
            }
          } else {
            spollerTitle.setAttribute("tabindex", "-1");
            spollerTitle.nextElementSibling.hidden = false;
          }
        });
      }
    }
    function setSpollerAction(e) {
      const el = e.target;
      if (el.closest("[data-spoller]")) {
        const spollerTitle = el.closest("[data-spoller]");
        const spollersBlock = spollerTitle.closest("[data-spollers]");
        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
        const spollerSpeed = spollersBlock.dataset.spollersSpeed
          ? parseInt(spollersBlock.dataset.spollersSpeed)
          : 500;
        if (!spollersBlock.querySelectorAll("._slide").length) {
          if (
            oneSpoller &&
            !spollerTitle.classList.contains("_spoller-active")
          ) {
            hideSpollersBody(spollersBlock);
          }
          spollerTitle.classList.toggle("_spoller-active");
          _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
        }
        e.preventDefault();
      }
    }
    function hideSpollersBody(spollersBlock) {
      const spollerActiveTitle = spollersBlock.querySelector(
        "[data-spoller]._spoller-active"
      );
      const spollerSpeed = spollersBlock.dataset.spollersSpeed
        ? parseInt(spollersBlock.dataset.spollersSpeed)
        : 500;
      if (
        spollerActiveTitle &&
        !spollersBlock.querySelectorAll("._slide").length
      ) {
        spollerActiveTitle.classList.remove("_spoller-active");
        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
      }
    }
    // Закрытие при клике вне спойлера
    const spollersClose = document.querySelectorAll("[data-spoller-close]");
    if (spollersClose.length) {
      document.addEventListener("click", function (e) {
        const el = e.target;
        if (!el.closest("[data-spollers]")) {
          spollersClose.forEach((spollerClose) => {
            const spollersBlock = spollerClose.closest("[data-spollers]");
            const spollerSpeed = spollersBlock.dataset.spollersSpeed
              ? parseInt(spollersBlock.dataset.spollersSpeed)
              : 500;
            spollerClose.classList.remove("_spoller-active");
            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
          });
        }
      });
    }
  }
}
// Модуь работы с табами =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-taby.html
Сниппет (HTML): tabs
*/
function tabs() {
  const tabs = document.querySelectorAll("[data-tabs]");
  let tabsActiveHash = [];

  if (tabs.length > 0) {
    const hash = getHash();
    if (hash && hash.startsWith("tab-")) {
      tabsActiveHash = hash.replace("tab-", "").split("-");
    }
    tabs.forEach((tabsBlock, index) => {
      tabsBlock.classList.add("_tab-init");
      tabsBlock.setAttribute("data-tabs-index", index);
      tabsBlock.addEventListener("click", setTabsAction);
      initTabs(tabsBlock);
    });

    // Получение слойлеров с медиа запросами
    let mdQueriesArray = dataMediaQueries(tabs, "tabs");
    if (mdQueriesArray && mdQueriesArray.length) {
      mdQueriesArray.forEach((mdQueriesItem) => {
        // Событие
        mdQueriesItem.matchMedia.addEventListener("change", function () {
          setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
    }
  }
  // Установка позиций заголовков
  function setTitlePosition(tabsMediaArray, matchMedia) {
    tabsMediaArray.forEach((tabsMediaItem) => {
      tabsMediaItem = tabsMediaItem.item;
      let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
      let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
      let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
      let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
      tabsTitleItems = Array.from(tabsTitleItems).filter(
        (item) => item.closest("[data-tabs]") === tabsMediaItem
      );
      tabsContentItems = Array.from(tabsContentItems).filter(
        (item) => item.closest("[data-tabs]") === tabsMediaItem
      );
      tabsContentItems.forEach((tabsContentItem, index) => {
        if (matchMedia.matches) {
          tabsContent.append(tabsTitleItems[index]);
          tabsContent.append(tabsContentItem);
          tabsMediaItem.classList.add("_tab-spoller");
        } else {
          tabsTitles.append(tabsTitleItems[index]);
          tabsMediaItem.classList.remove("_tab-spoller");
        }
      });
    });
  }
  // Работа с контентом
  function initTabs(tabsBlock) {
    let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
    let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
    const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
    const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

    if (tabsActiveHashBlock) {
      const tabsActiveTitle = tabsBlock.querySelector(
        "[data-tabs-titles]>._tab-active"
      );
      tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
    }
    if (tabsContent.length) {
      tabsContent = Array.from(tabsContent).filter(
        (item) => item.closest("[data-tabs]") === tabsBlock
      );
      tabsTitles = Array.from(tabsTitles).filter(
        (item) => item.closest("[data-tabs]") === tabsBlock
      );
      tabsContent.forEach((tabsContentItem, index) => {
        tabsTitles[index].setAttribute("data-tabs-title", "");
        tabsContentItem.setAttribute("data-tabs-item", "");

        if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
          tabsTitles[index].classList.add("_tab-active");
        }
        tabsContentItem.hidden =
          !tabsTitles[index].classList.contains("_tab-active");
      });
    }
  }
  function setTabsStatus(tabsBlock) {
    let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
    let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
    const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
    function isTabsAnamate(tabsBlock) {
      if (tabsBlock.hasAttribute("data-tabs-animate")) {
        return tabsBlock.dataset.tabsAnimate > 0
          ? Number(tabsBlock.dataset.tabsAnimate)
          : 500;
      }
    }
    const tabsBlockAnimate = isTabsAnamate(tabsBlock);
    if (tabsContent.length > 0) {
      const isHash = tabsBlock.hasAttribute("data-tabs-hash");
      tabsContent = Array.from(tabsContent).filter(
        (item) => item.closest("[data-tabs]") === tabsBlock
      );
      tabsTitles = Array.from(tabsTitles).filter(
        (item) => item.closest("[data-tabs]") === tabsBlock
      );
      tabsContent.forEach((tabsContentItem, index) => {
        if (tabsTitles[index].classList.contains("_tab-active")) {
          if (tabsBlockAnimate) {
            _slideDown(tabsContentItem, tabsBlockAnimate);
          } else {
            tabsContentItem.hidden = false;
          }
          if (isHash && !tabsContentItem.closest(".popup")) {
            setHash(`tab-${tabsBlockIndex}-${index}`);
          }
        } else {
          if (tabsBlockAnimate) {
            _slideUp(tabsContentItem, tabsBlockAnimate);
          } else {
            tabsContentItem.hidden = true;
          }
        }
      });
    }
  }
  function setTabsAction(e) {
    const el = e.target;
    if (el.closest("[data-tabs-title]")) {
      const tabTitle = el.closest("[data-tabs-title]");
      const tabsBlock = tabTitle.closest("[data-tabs]");
      if (
        !tabTitle.classList.contains("_tab-active") &&
        !tabsBlock.querySelector("._slide")
      ) {
        let tabActiveTitle = tabsBlock.querySelectorAll(
          "[data-tabs-title]._tab-active"
        );
        tabActiveTitle.length
          ? (tabActiveTitle = Array.from(tabActiveTitle).filter(
              (item) => item.closest("[data-tabs]") === tabsBlock
            ))
          : null;
        tabActiveTitle.length
          ? tabActiveTitle[0].classList.remove("_tab-active")
          : null;
        tabTitle.classList.add("_tab-active");
        setTabsStatus(tabsBlock);
      }
      e.preventDefault();
    }
  }
}
// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://template.fls.guru/template-docs/menu-burger.html
Сниппет (HTML): menu
*/
function menuInit() {
  if (document.querySelector(".icon-menu")) {
    document.addEventListener("click", function (e) {
      if (bodyLockStatus && e.target.closest(".icon-menu")) {
        bodyLockToggle();
        document.documentElement.classList.toggle("menu-open");
      }
    });
  }
  if (document.querySelector(".icon-money")) {
    document.addEventListener("click", function (e) {
      if (bodyLockStatus && e.target.closest(".icon-money")) {
        bodyLockToggle();
        document.documentElement.classList.toggle("money-open");
      }
    });
  }
  if (document.querySelector(".icon-history")) {
    document.addEventListener("click", function (e) {
      if (bodyLockStatus && e.target.closest(".icon-money")) {
        bodyLockToggle();
        document.documentElement.classList.toggle("history-open");
      }
    });
  }
}
function menuOpen() {
  bodyLock();
  document.documentElement.classList.add("menu-open");
}
function menuClose() {
  bodyUnlock();
  document.documentElement.classList.remove("menu-open");
}
// Модуль "показать еще" =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сниппет (HTML): showmore
*/
function showMore() {
  window.addEventListener("load", function (e) {
    const showMoreBlocks = document.querySelectorAll("[data-showmore]");
    let showMoreBlocksRegular;
    let mdQueriesArray;
    if (showMoreBlocks.length) {
      // Получение обычных объектов
      showMoreBlocksRegular = Array.from(showMoreBlocks).filter(
        function (item, index, self) {
          return !item.dataset.showmoreMedia;
        }
      );
      // Инициализация обычных объектов
      showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;

      document.addEventListener("click", showMoreActions);
      window.addEventListener("resize", showMoreActions);

      // Получение объектов с медиа запросами
      mdQueriesArray = dataMediaQueries(showMoreBlocks, "showmoreMedia");
      if (mdQueriesArray && mdQueriesArray.length) {
        mdQueriesArray.forEach((mdQueriesItem) => {
          // Событие
          mdQueriesItem.matchMedia.addEventListener("change", function () {
            initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
          });
        });
        initItemsMedia(mdQueriesArray);
      }
    }
    function initItemsMedia(mdQueriesArray) {
      mdQueriesArray.forEach((mdQueriesItem) => {
        initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
    }
    function initItems(showMoreBlocks, matchMedia) {
      showMoreBlocks.forEach((showMoreBlock) => {
        initItem(showMoreBlock, matchMedia);
      });
    }
    function initItem(showMoreBlock, matchMedia = false) {
      showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;
      let showMoreContent = showMoreBlock.querySelectorAll(
        "[data-showmore-content]"
      );
      let showMoreButton = showMoreBlock.querySelectorAll(
        "[data-showmore-button]"
      );
      showMoreContent = Array.from(showMoreContent).filter(
        (item) => item.closest("[data-showmore]") === showMoreBlock
      )[0];
      showMoreButton = Array.from(showMoreButton).filter(
        (item) => item.closest("[data-showmore]") === showMoreBlock
      )[0];
      const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
      if (matchMedia.matches || !matchMedia) {
        if (hiddenHeight < getOriginalHeight(showMoreContent)) {
          _slideUp(showMoreContent, 0, hiddenHeight);
          showMoreButton.hidden = false;
        } else {
          _slideDown(showMoreContent, 0, hiddenHeight);
          showMoreButton.hidden = true;
        }
      } else {
        _slideDown(showMoreContent, 0, hiddenHeight);
        showMoreButton.hidden = true;
      }
    }
    function getHeight(showMoreBlock, showMoreContent) {
      let hiddenHeight = 0;
      const showMoreType = showMoreBlock.dataset.showmore
        ? showMoreBlock.dataset.showmore
        : "size";
      if (showMoreType === "items") {
        const showMoreTypeValue = showMoreContent.dataset.showmoreContent
          ? showMoreContent.dataset.showmoreContent
          : 3;
        const showMoreItems = showMoreContent.children;
        for (let index = 1; index < showMoreItems.length; index++) {
          const showMoreItem = showMoreItems[index - 1];
          hiddenHeight += showMoreItem.offsetHeight;
          if (index == showMoreTypeValue) break;
        }
      } else {
        const showMoreTypeValue = showMoreContent.dataset.showmoreContent
          ? showMoreContent.dataset.showmoreContent
          : 150;
        hiddenHeight = showMoreTypeValue;
      }
      return hiddenHeight;
    }
    function getOriginalHeight(showMoreContent) {
      let parentHidden;
      let hiddenHeight = showMoreContent.offsetHeight;
      showMoreContent.style.removeProperty("height");
      if (showMoreContent.closest(`[hidden]`)) {
        parentHidden = showMoreContent.closest(`[hidden]`);
        parentHidden.hidden = false;
      }
      let originalHeight = showMoreContent.offsetHeight;
      parentHidden ? (parentHidden.hidden = true) : null;
      showMoreContent.style.height = `${hiddenHeight}px`;
      return originalHeight;
    }
    function showMoreActions(e) {
      const targetEvent = e.target;
      const targetType = e.type;
      if (targetType === "click") {
        if (targetEvent.closest("[data-showmore-button]")) {
          const showMoreButton = targetEvent.closest("[data-showmore-button]");
          const showMoreBlock = showMoreButton.closest("[data-showmore]");
          const showMoreContent = showMoreBlock.querySelector(
            "[data-showmore-content]"
          );
          const showMoreSpeed = showMoreBlock.dataset.showmoreButton
            ? showMoreBlock.dataset.showmoreButton
            : "500";
          const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
          if (!showMoreContent.classList.contains("_slide")) {
            showMoreBlock.classList.contains("_showmore-active")
              ? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight)
              : _slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
            showMoreBlock.classList.toggle("_showmore-active");
          }
        }
      } else if (targetType === "resize") {
        showMoreBlocksRegular && showMoreBlocksRegular.length
          ? initItems(showMoreBlocksRegular)
          : null;
        mdQueriesArray && mdQueriesArray.length
          ? initItemsMedia(mdQueriesArray)
          : null;
      }
    }
  });
}
//================================================================================================================================================================================================================================================================================================================
// Прочие полезные функции ================================================================================================================================================================================================================================================================================================================
//================================================================================================================================================================================================================================================================================================================
// FLS (Full Logging System)
function FLS(message) {
  setTimeout(() => {
    if (window.FLS) {
      console.log(message);
    }
  }, 0);
}
// Получить цифры из строки
function getDigFromString(item) {
  return parseInt(item.replace(/[^\d]/g, ""));
}
// Форматирование цифр типа 100 000 000
function getDigFormat(item) {
  return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}
// Убрать класс из всех элементов массива
function removeClasses(array, className) {
  for (var i = 0; i < array.length; i++) {
    array[i].classList.remove(className);
  }
}
// Уникализация массива
function uniqArray(array) {
  return array.filter(function (item, index, self) {
    return self.indexOf(item) === index;
  });
}
// Функция получения индекса внутри родителя
function indexInParent(parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
}
// Обработа медиа запросов из атрибутов
function dataMediaQueries(array, dataSetValue) {
  // Получение объектов с медиа запросами
  const media = Array.from(array).filter(function (item, index, self) {
    if (item.dataset[dataSetValue]) {
      return item.dataset[dataSetValue].split(",")[0];
    }
  });
  // Инициализация объектов с медиа запросами
  if (media.length) {
    const breakpointsArray = [];
    media.forEach((item) => {
      const params = item.dataset[dataSetValue];
      const breakpoint = {};
      const paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });
    // Получаем уникальные брейкпоинты
    let mdQueries = breakpointsArray.map(function (item) {
      return (
        "(" +
        item.type +
        "-width: " +
        item.value +
        "px)," +
        item.value +
        "," +
        item.type
      );
    });
    mdQueries = uniqArray(mdQueries);
    const mdQueriesArray = [];

    if (mdQueries.length) {
      // Работаем с каждым брейкпоинтом
      mdQueries.forEach((breakpoint) => {
        const paramsArray = breakpoint.split(",");
        const mediaBreakpoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]);
        // Объекты с нужными условиями
        const itemsArray = breakpointsArray.filter(function (item) {
          if (item.value === mediaBreakpoint && item.type === mediaType) {
            return true;
          }
        });
        mdQueriesArray.push({
          itemsArray,
          matchMedia,
        });
      });
      return mdQueriesArray;
    }
  }
}
//================================================================================================================================================================================================================================================================================================================


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b5b22f40dafafbb8d1b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NDc2N2NjNzIwM2JjODg1ZGQ0Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwQztBQUMxQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG9CQUFvQixLQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxHQUFHO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9CQUFvQjtBQUNqRDtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkJBQTZCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlLEdBQUcsTUFBTTtBQUNuRDtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4QkFBOEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxhQUFhO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUMzdkJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2ZpbGVzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHQv9C40YHQutCwINCw0LrRgtC40LLQvdGL0YUg0LzQvtC00YPQu9C10LlcclxuaW1wb3J0IHsgZmxzTW9kdWxlcyB9IGZyb20gXCIuL21vZHVsZXMuanNcIjtcclxuXHJcbi8qINCf0YDQvtCy0LXRgNC60LAg0L/QvtC00LTQtdGA0LbQutC4IHdlYnAsINC00L7QsdCw0LLQu9C10L3QuNC1INC60LvQsNGB0YHQsCB3ZWJwINC40LvQuCBuby13ZWJwINC00LvRjyBIVE1MICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1dlYnAoKSB7XHJcbiAgLy8g0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LTQtNC10YDQttC60Lggd2VicFxyXG4gIGZ1bmN0aW9uIHRlc3RXZWJQKGNhbGxiYWNrKSB7XHJcbiAgICBsZXQgd2ViUCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgd2ViUC5vbmxvYWQgPSB3ZWJQLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNhbGxiYWNrKHdlYlAuaGVpZ2h0ID09IDIpO1xyXG4gICAgfTtcclxuICAgIHdlYlAuc3JjID1cclxuICAgICAgXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSam9BQUFCWFJVSlFWbEE0SUM0QUFBQ3lBZ0NkQVNvQ0FBSUFMbWswbWswaUlpSWlJZ0JvU3lnQUJjNldXZ0FBL3ZlZmYvMFBQOGJBLy9Md1lBQUFcIjtcclxuICB9XHJcbiAgLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0LrQu9Cw0YHRgdCwIF93ZWJwINC40LvQuCBfbm8td2VicCDQtNC70Y8gSFRNTFxyXG4gIHRlc3RXZWJQKGZ1bmN0aW9uIChzdXBwb3J0KSB7XHJcbiAgICBsZXQgY2xhc3NOYW1lID0gc3VwcG9ydCA9PT0gdHJ1ZSA/IFwid2VicFwiIDogXCJuby13ZWJwXCI7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIH0pO1xyXG59XHJcbi8qINCf0YDQvtCy0LXRgNC60LAg0LzQvtCx0LjQu9GM0L3QvtCz0L4g0LHRgNCw0YPQt9C10YDQsCAqL1xyXG5leHBvcnQgbGV0IGlzTW9iaWxlID0ge1xyXG4gIEFuZHJvaWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpO1xyXG4gIH0sXHJcbiAgQmxhY2tCZXJyeTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSk7XHJcbiAgfSxcclxuICBpT1M6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kL2kpO1xyXG4gIH0sXHJcbiAgT3BlcmE6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9PcGVyYSBNaW5pL2kpO1xyXG4gIH0sXHJcbiAgV2luZG93czogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpO1xyXG4gIH0sXHJcbiAgYW55OiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBpc01vYmlsZS5BbmRyb2lkKCkgfHxcclxuICAgICAgaXNNb2JpbGUuQmxhY2tCZXJyeSgpIHx8XHJcbiAgICAgIGlzTW9iaWxlLmlPUygpIHx8XHJcbiAgICAgIGlzTW9iaWxlLk9wZXJhKCkgfHxcclxuICAgICAgaXNNb2JpbGUuV2luZG93cygpXHJcbiAgICApO1xyXG4gIH0sXHJcbn07XHJcbi8qINCU0L7QsdCw0LLQu9C10L3QuNC1INC60LvQsNGB0YHQsCB0b3VjaCDQtNC70Y8gSFRNTCDQtdGB0LvQuCDQsdGA0LDRg9C30LXRgCDQvNC+0LHQuNC70YzQvdGL0LkgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvdWNoQ2xhc3MoKSB7XHJcbiAgLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0LrQu9Cw0YHRgdCwIF90b3VjaCDQtNC70Y8gSFRNTCDQtdGB0LvQuCDQsdGA0LDRg9C30LXRgCDQvNC+0LHQuNC70YzQvdGL0LlcclxuICBpZiAoaXNNb2JpbGUuYW55KCkpIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG91Y2hcIik7XHJcbn1cclxuLy8g0JTQvtCx0LDQstC70LXQvdC40LUgbG9hZGVkINC00LvRjyBIVE1MINC/0L7RgdC70LUg0L/QvtC70L3QvtC5INC30LDQs9GA0YPQt9C60Lgg0YHRgtGA0LDQvdC40YbRi1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9hZGVkQ2xhc3MoKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxvYWRlZFwiKTtcclxuICAgIH0sIDApO1xyXG4gIH0pO1xyXG59XHJcbi8vINCf0L7Qu9GD0YfQtdC90LjQtSDRhdC10YjQsCDQsiDQsNC00YDQtdGB0LUg0YHQsNC50YLQsFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGFzaCgpIHtcclxuICBpZiAobG9jYXRpb24uaGFzaCkge1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcbiAgfVxyXG59XHJcbi8vINCj0LrQsNC30LDQvdC40LUg0YXQtdGI0LAg0LIg0LDQtNGA0LXRgdC1INGB0LDQudGC0LBcclxuZXhwb3J0IGZ1bmN0aW9uIHNldEhhc2goaGFzaCkge1xyXG4gIGhhc2ggPSBoYXNoID8gYCMke2hhc2h9YCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVswXTtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZShcIlwiLCBcIlwiLCBoYXNoKTtcclxufVxyXG4vLyDQo9GH0LXRgiDQv9C70LDQstCw0Y7RidC10Lkg0L/QsNC90LXQu9C4INC90LAg0LzQvtCx0LjQu9GM0L3Ri9GFINGD0YHRgtGA0L7QudGB0YLQstCw0YUg0L/RgNC4IDEwMHZoXHJcbmV4cG9ydCBmdW5jdGlvbiBmdWxsVkhmaXgoKSB7XHJcbiAgY29uc3QgZnVsbFNjcmVlbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZnVsbHNjcmVlbl1cIik7XHJcbiAgaWYgKGZ1bGxTY3JlZW5zLmxlbmd0aCAmJiBpc01vYmlsZS5hbnkoKSkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZml4SGVpZ2h0KTtcclxuICAgIGZ1bmN0aW9uIGZpeEhlaWdodCgpIHtcclxuICAgICAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS12aFwiLCBgJHt2aH1weGApO1xyXG4gICAgfVxyXG4gICAgZml4SGVpZ2h0KCk7XHJcbiAgfVxyXG59XHJcbi8vINCS0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQtSDQvNC+0LTRg9C70Lgg0L/Qu9Cw0LLQvdC+0LPQviDRgNCw0YHRgdC60YDRi9GC0LjRjyDQuCDQt9Cw0LrRgNGL0YLQuNGPINC+0LHRitC10LrRgtCwID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGxldCBfc2xpZGVVcCA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcclxuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJfc2xpZGVcIikpIHtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiX3NsaWRlXCIpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdcIjtcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArIFwibXNcIjtcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cHhgIDogYDBweGA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0YXJnZXQuaGlkZGVuID0gIXNob3dtb3JlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIikgOiBudWxsO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJwYWRkaW5nLXRvcFwiKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicGFkZGluZy1ib3R0b21cIik7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi10b3BcIik7XHJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi1ib3R0b21cIik7XHJcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpIDogbnVsbDtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJfc2xpZGVcIik7XHJcbiAgICAgIC8vINCh0L7Qt9C00LDQtdC8INGB0L7QsdGL0YLQuNC1XHJcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwic2xpZGVVcERvbmVcIiwge1xyXG4gICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSwgZHVyYXRpb24pO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGxldCBfc2xpZGVEb3duID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xyXG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIl9zbGlkZVwiKSkge1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJfc2xpZGVcIik7XHJcbiAgICB0YXJnZXQuaGlkZGVuID0gdGFyZ2V0LmhpZGRlbiA/IGZhbHNlIDogbnVsbDtcclxuICAgIHNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpIDogbnVsbDtcclxuICAgIGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXB4YCA6IGAwcHhgO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ1wiO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgXCJtc1wiO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInBhZGRpbmctdG9wXCIpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicGFkZGluZy1ib3R0b21cIik7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tdG9wXCIpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWFyZ2luLWJvdHRvbVwiKTtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKTtcclxuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJfc2xpZGVcIik7XHJcbiAgICAgIC8vINCh0L7Qt9C00LDQtdC8INGB0L7QsdGL0YLQuNC1XHJcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwic2xpZGVEb3duRG9uZVwiLCB7XHJcbiAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgbGV0IF9zbGlkZVRvZ2dsZSA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwKSA9PiB7XHJcbiAgaWYgKHRhcmdldC5oaWRkZW4pIHtcclxuICAgIHJldHVybiBfc2xpZGVEb3duKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gX3NsaWRlVXAodGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59O1xyXG4vLyDQktGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdGL0LUg0LzQvtC00YPQu9C4INCx0LvQvtC60LjRgNC+0LLQutC4INC/0YDQvtC60YDRg9GC0LrQuCDQuCDRgdC60L7Rh9C60LAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBsZXQgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG5leHBvcnQgbGV0IGJvZHlMb2NrVG9nZ2xlID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJsb2NrXCIpKSB7XHJcbiAgICBib2R5VW5sb2NrKGRlbGF5KTtcclxuICB9IGVsc2Uge1xyXG4gICAgYm9keUxvY2soZGVsYXkpO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGxldCBib2R5VW5sb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XHJcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcclxuICAgIGxldCBsb2NrX3BhZGRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbHBdXCIpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsb2NrX3BhZGRpbmcubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBsb2NrX3BhZGRpbmdbaW5kZXhdO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgIH1cclxuICAgICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjBweFwiO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuICAgIH0sIGRlbGF5KTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBsZXQgYm9keUxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcclxuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xyXG4gICAgbGV0IGxvY2tfcGFkZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1scF1cIik7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbG9ja19wYWRkaW5nLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBlbCA9IGxvY2tfcGFkZGluZ1tpbmRleF07XHJcbiAgICAgIGVsLnN0eWxlLnBhZGRpbmdSaWdodCA9XHJcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGggLVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKS5vZmZzZXRXaWR0aCArXHJcbiAgICAgICAgXCJweFwiO1xyXG4gICAgfVxyXG4gICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPVxyXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKS5vZmZzZXRXaWR0aCArIFwicHhcIjtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKTtcclxuXHJcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuICAgIH0sIGRlbGF5KTtcclxuICB9XHJcbn07XHJcbi8vINCc0L7QtNGD0LvRjCDRgNCw0LHQvtGC0Ysg0YHQviDRgdC/0L7QudC70LXRgNCw0LzQuCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vKlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1zcG9qbGVyeS5odG1sXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTogc3BvbGxlcnNcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwb2xsZXJzKCkge1xyXG4gIGNvbnN0IHNwb2xsZXJzQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc3BvbGxlcnNdXCIpO1xyXG4gIGlmIChzcG9sbGVyc0FycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgIC8vINCf0L7Qu9GD0YfQtdC90LjQtSDQvtCx0YvRh9C90YvRhSDRgdC70L7QudC70LXRgNC+0LJcclxuICAgIGNvbnN0IHNwb2xsZXJzUmVndWxhciA9IEFycmF5LmZyb20oc3BvbGxlcnNBcnJheSkuZmlsdGVyKFxyXG4gICAgICBmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuICAgICAgICByZXR1cm4gIWl0ZW0uZGF0YXNldC5zcG9sbGVycy5zcGxpdChcIixcIilbMF07XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICAvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQvtCx0YvRh9C90YvRhSDRgdC70L7QudC70LXRgNC+0LJcclxuICAgIGlmIChzcG9sbGVyc1JlZ3VsYXIubGVuZ3RoKSB7XHJcbiAgICAgIGluaXRTcG9sbGVycyhzcG9sbGVyc1JlZ3VsYXIpO1xyXG4gICAgfVxyXG4gICAgLy8g0J/QvtC70YPRh9C10L3QuNC1INGB0LvQvtC50LvQtdGA0L7QsiDRgSDQvNC10LTQuNCwINC30LDQv9GA0L7RgdCw0LzQuFxyXG4gICAgbGV0IG1kUXVlcmllc0FycmF5ID0gZGF0YU1lZGlhUXVlcmllcyhzcG9sbGVyc0FycmF5LCBcInNwb2xsZXJzXCIpO1xyXG4gICAgaWYgKG1kUXVlcmllc0FycmF5ICYmIG1kUXVlcmllc0FycmF5Lmxlbmd0aCkge1xyXG4gICAgICBtZFF1ZXJpZXNBcnJheS5mb3JFYWNoKChtZFF1ZXJpZXNJdGVtKSA9PiB7XHJcbiAgICAgICAgLy8g0KHQvtCx0YvRgtC40LVcclxuICAgICAgICBtZFF1ZXJpZXNJdGVtLm1hdGNoTWVkaWEuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpbml0U3BvbGxlcnMobWRRdWVyaWVzSXRlbS5pdGVtc0FycmF5LCBtZFF1ZXJpZXNJdGVtLm1hdGNoTWVkaWEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGluaXRTcG9sbGVycyhtZFF1ZXJpZXNJdGVtLml0ZW1zQXJyYXksIG1kUXVlcmllc0l0ZW0ubWF0Y2hNZWRpYSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y9cclxuICAgIGZ1bmN0aW9uIGluaXRTcG9sbGVycyhzcG9sbGVyc0FycmF5LCBtYXRjaE1lZGlhID0gZmFsc2UpIHtcclxuICAgICAgc3BvbGxlcnNBcnJheS5mb3JFYWNoKChzcG9sbGVyc0Jsb2NrKSA9PiB7XHJcbiAgICAgICAgc3BvbGxlcnNCbG9jayA9IG1hdGNoTWVkaWEgPyBzcG9sbGVyc0Jsb2NrLml0ZW0gOiBzcG9sbGVyc0Jsb2NrO1xyXG4gICAgICAgIGlmIChtYXRjaE1lZGlhLm1hdGNoZXMgfHwgIW1hdGNoTWVkaWEpIHtcclxuICAgICAgICAgIHNwb2xsZXJzQmxvY2suY2xhc3NMaXN0LmFkZChcIl9zcG9sbGVyLWluaXRcIik7XHJcbiAgICAgICAgICBpbml0U3BvbGxlckJvZHkoc3BvbGxlcnNCbG9jayk7XHJcbiAgICAgICAgICBzcG9sbGVyc0Jsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRTcG9sbGVyQWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BvbGxlcnNCbG9jay5jbGFzc0xpc3QucmVtb3ZlKFwiX3Nwb2xsZXItaW5pdFwiKTtcclxuICAgICAgICAgIGluaXRTcG9sbGVyQm9keShzcG9sbGVyc0Jsb2NrLCBmYWxzZSk7XHJcbiAgICAgICAgICBzcG9sbGVyc0Jsb2NrLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRTcG9sbGVyQWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8g0KDQsNCx0L7RgtCwINGBINC60L7QvdGC0LXQvdGC0L7QvFxyXG4gICAgZnVuY3Rpb24gaW5pdFNwb2xsZXJCb2R5KHNwb2xsZXJzQmxvY2ssIGhpZGVTcG9sbGVyQm9keSA9IHRydWUpIHtcclxuICAgICAgbGV0IHNwb2xsZXJUaXRsZXMgPSBzcG9sbGVyc0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zcG9sbGVyXVwiKTtcclxuICAgICAgaWYgKHNwb2xsZXJUaXRsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgc3BvbGxlclRpdGxlcyA9IEFycmF5LmZyb20oc3BvbGxlclRpdGxlcykuZmlsdGVyKFxyXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uY2xvc2VzdChcIltkYXRhLXNwb2xsZXJzXVwiKSA9PT0gc3BvbGxlcnNCbG9ja1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgc3BvbGxlclRpdGxlcy5mb3JFYWNoKChzcG9sbGVyVGl0bGUpID0+IHtcclxuICAgICAgICAgIGlmIChoaWRlU3BvbGxlckJvZHkpIHtcclxuICAgICAgICAgICAgc3BvbGxlclRpdGxlLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICAgICAgICBpZiAoIXNwb2xsZXJUaXRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJfc3BvbGxlci1hY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgICBzcG9sbGVyVGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwb2xsZXJUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICAgICAgICBzcG9sbGVyVGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRTcG9sbGVyQWN0aW9uKGUpIHtcclxuICAgICAgY29uc3QgZWwgPSBlLnRhcmdldDtcclxuICAgICAgaWYgKGVsLmNsb3Nlc3QoXCJbZGF0YS1zcG9sbGVyXVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHNwb2xsZXJUaXRsZSA9IGVsLmNsb3Nlc3QoXCJbZGF0YS1zcG9sbGVyXVwiKTtcclxuICAgICAgICBjb25zdCBzcG9sbGVyc0Jsb2NrID0gc3BvbGxlclRpdGxlLmNsb3Nlc3QoXCJbZGF0YS1zcG9sbGVyc11cIik7XHJcbiAgICAgICAgY29uc3Qgb25lU3BvbGxlciA9IHNwb2xsZXJzQmxvY2suaGFzQXR0cmlidXRlKFwiZGF0YS1vbmUtc3BvbGxlclwiKTtcclxuICAgICAgICBjb25zdCBzcG9sbGVyU3BlZWQgPSBzcG9sbGVyc0Jsb2NrLmRhdGFzZXQuc3BvbGxlcnNTcGVlZFxyXG4gICAgICAgICAgPyBwYXJzZUludChzcG9sbGVyc0Jsb2NrLmRhdGFzZXQuc3BvbGxlcnNTcGVlZClcclxuICAgICAgICAgIDogNTAwO1xyXG4gICAgICAgIGlmICghc3BvbGxlcnNCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFwiLl9zbGlkZVwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgb25lU3BvbGxlciAmJlxyXG4gICAgICAgICAgICAhc3BvbGxlclRpdGxlLmNsYXNzTGlzdC5jb250YWlucyhcIl9zcG9sbGVyLWFjdGl2ZVwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGhpZGVTcG9sbGVyc0JvZHkoc3BvbGxlcnNCbG9jayk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzcG9sbGVyVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZShcIl9zcG9sbGVyLWFjdGl2ZVwiKTtcclxuICAgICAgICAgIF9zbGlkZVRvZ2dsZShzcG9sbGVyVGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nLCBzcG9sbGVyU3BlZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhpZGVTcG9sbGVyc0JvZHkoc3BvbGxlcnNCbG9jaykge1xyXG4gICAgICBjb25zdCBzcG9sbGVyQWN0aXZlVGl0bGUgPSBzcG9sbGVyc0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCJbZGF0YS1zcG9sbGVyXS5fc3BvbGxlci1hY3RpdmVcIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzcG9sbGVyU3BlZWQgPSBzcG9sbGVyc0Jsb2NrLmRhdGFzZXQuc3BvbGxlcnNTcGVlZFxyXG4gICAgICAgID8gcGFyc2VJbnQoc3BvbGxlcnNCbG9jay5kYXRhc2V0LnNwb2xsZXJzU3BlZWQpXHJcbiAgICAgICAgOiA1MDA7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBzcG9sbGVyQWN0aXZlVGl0bGUgJiZcclxuICAgICAgICAhc3BvbGxlcnNCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFwiLl9zbGlkZVwiKS5sZW5ndGhcclxuICAgICAgKSB7XHJcbiAgICAgICAgc3BvbGxlckFjdGl2ZVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJfc3BvbGxlci1hY3RpdmVcIik7XHJcbiAgICAgICAgX3NsaWRlVXAoc3BvbGxlckFjdGl2ZVRpdGxlLm5leHRFbGVtZW50U2libGluZywgc3BvbGxlclNwZWVkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g0JfQsNC60YDRi9GC0LjQtSDQv9GA0Lgg0LrQu9C40LrQtSDQstC90LUg0YHQv9C+0LnQu9C10YDQsFxyXG4gICAgY29uc3Qgc3BvbGxlcnNDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zcG9sbGVyLWNsb3NlXVwiKTtcclxuICAgIGlmIChzcG9sbGVyc0Nsb3NlLmxlbmd0aCkge1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCBlbCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmICghZWwuY2xvc2VzdChcIltkYXRhLXNwb2xsZXJzXVwiKSkge1xyXG4gICAgICAgICAgc3BvbGxlcnNDbG9zZS5mb3JFYWNoKChzcG9sbGVyQ2xvc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3BvbGxlcnNCbG9jayA9IHNwb2xsZXJDbG9zZS5jbG9zZXN0KFwiW2RhdGEtc3BvbGxlcnNdXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBzcG9sbGVyU3BlZWQgPSBzcG9sbGVyc0Jsb2NrLmRhdGFzZXQuc3BvbGxlcnNTcGVlZFxyXG4gICAgICAgICAgICAgID8gcGFyc2VJbnQoc3BvbGxlcnNCbG9jay5kYXRhc2V0LnNwb2xsZXJzU3BlZWQpXHJcbiAgICAgICAgICAgICAgOiA1MDA7XHJcbiAgICAgICAgICAgIHNwb2xsZXJDbG9zZS5jbGFzc0xpc3QucmVtb3ZlKFwiX3Nwb2xsZXItYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBfc2xpZGVVcChzcG9sbGVyQ2xvc2UubmV4dEVsZW1lbnRTaWJsaW5nLCBzcG9sbGVyU3BlZWQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8g0JzQvtC00YPRjCDRgNCw0LHQvtGC0Ysg0YEg0YLQsNCx0LDQvNC4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8qXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLXRhYnkuaHRtbFxyXG7QodC90LjQv9C/0LXRgiAoSFRNTCk6IHRhYnNcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRhYnMoKSB7XHJcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10YWJzXVwiKTtcclxuICBsZXQgdGFic0FjdGl2ZUhhc2ggPSBbXTtcclxuXHJcbiAgaWYgKHRhYnMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgaGFzaCA9IGdldEhhc2goKTtcclxuICAgIGlmIChoYXNoICYmIGhhc2guc3RhcnRzV2l0aChcInRhYi1cIikpIHtcclxuICAgICAgdGFic0FjdGl2ZUhhc2ggPSBoYXNoLnJlcGxhY2UoXCJ0YWItXCIsIFwiXCIpLnNwbGl0KFwiLVwiKTtcclxuICAgIH1cclxuICAgIHRhYnMuZm9yRWFjaCgodGFic0Jsb2NrLCBpbmRleCkgPT4ge1xyXG4gICAgICB0YWJzQmxvY2suY2xhc3NMaXN0LmFkZChcIl90YWItaW5pdFwiKTtcclxuICAgICAgdGFic0Jsb2NrLnNldEF0dHJpYnV0ZShcImRhdGEtdGFicy1pbmRleFwiLCBpbmRleCk7XHJcbiAgICAgIHRhYnNCbG9jay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2V0VGFic0FjdGlvbik7XHJcbiAgICAgIGluaXRUYWJzKHRhYnNCbG9jayk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQn9C+0LvRg9GH0LXQvdC40LUg0YHQu9C+0LnQu9C10YDQvtCyINGBINC80LXQtNC40LAg0LfQsNC/0YDQvtGB0LDQvNC4XHJcbiAgICBsZXQgbWRRdWVyaWVzQXJyYXkgPSBkYXRhTWVkaWFRdWVyaWVzKHRhYnMsIFwidGFic1wiKTtcclxuICAgIGlmIChtZFF1ZXJpZXNBcnJheSAmJiBtZFF1ZXJpZXNBcnJheS5sZW5ndGgpIHtcclxuICAgICAgbWRRdWVyaWVzQXJyYXkuZm9yRWFjaCgobWRRdWVyaWVzSXRlbSkgPT4ge1xyXG4gICAgICAgIC8vINCh0L7QsdGL0YLQuNC1XHJcbiAgICAgICAgbWRRdWVyaWVzSXRlbS5tYXRjaE1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2V0VGl0bGVQb3NpdGlvbihtZFF1ZXJpZXNJdGVtLml0ZW1zQXJyYXksIG1kUXVlcmllc0l0ZW0ubWF0Y2hNZWRpYSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGl0bGVQb3NpdGlvbihtZFF1ZXJpZXNJdGVtLml0ZW1zQXJyYXksIG1kUXVlcmllc0l0ZW0ubWF0Y2hNZWRpYSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyDQo9GB0YLQsNC90L7QstC60LAg0L/QvtC30LjRhtC40Lkg0LfQsNCz0L7Qu9C+0LLQutC+0LJcclxuICBmdW5jdGlvbiBzZXRUaXRsZVBvc2l0aW9uKHRhYnNNZWRpYUFycmF5LCBtYXRjaE1lZGlhKSB7XHJcbiAgICB0YWJzTWVkaWFBcnJheS5mb3JFYWNoKCh0YWJzTWVkaWFJdGVtKSA9PiB7XHJcbiAgICAgIHRhYnNNZWRpYUl0ZW0gPSB0YWJzTWVkaWFJdGVtLml0ZW07XHJcbiAgICAgIGxldCB0YWJzVGl0bGVzID0gdGFic01lZGlhSXRlbS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFicy10aXRsZXNdXCIpO1xyXG4gICAgICBsZXQgdGFic1RpdGxlSXRlbXMgPSB0YWJzTWVkaWFJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10YWJzLXRpdGxlXVwiKTtcclxuICAgICAgbGV0IHRhYnNDb250ZW50ID0gdGFic01lZGlhSXRlbS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFicy1ib2R5XVwiKTtcclxuICAgICAgbGV0IHRhYnNDb250ZW50SXRlbXMgPSB0YWJzTWVkaWFJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10YWJzLWl0ZW1dXCIpO1xyXG4gICAgICB0YWJzVGl0bGVJdGVtcyA9IEFycmF5LmZyb20odGFic1RpdGxlSXRlbXMpLmZpbHRlcihcclxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5jbG9zZXN0KFwiW2RhdGEtdGFic11cIikgPT09IHRhYnNNZWRpYUl0ZW1cclxuICAgICAgKTtcclxuICAgICAgdGFic0NvbnRlbnRJdGVtcyA9IEFycmF5LmZyb20odGFic0NvbnRlbnRJdGVtcykuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmNsb3Nlc3QoXCJbZGF0YS10YWJzXVwiKSA9PT0gdGFic01lZGlhSXRlbVxyXG4gICAgICApO1xyXG4gICAgICB0YWJzQ29udGVudEl0ZW1zLmZvckVhY2goKHRhYnNDb250ZW50SXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAobWF0Y2hNZWRpYS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICB0YWJzQ29udGVudC5hcHBlbmQodGFic1RpdGxlSXRlbXNbaW5kZXhdKTtcclxuICAgICAgICAgIHRhYnNDb250ZW50LmFwcGVuZCh0YWJzQ29udGVudEl0ZW0pO1xyXG4gICAgICAgICAgdGFic01lZGlhSXRlbS5jbGFzc0xpc3QuYWRkKFwiX3RhYi1zcG9sbGVyXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0YWJzVGl0bGVzLmFwcGVuZCh0YWJzVGl0bGVJdGVtc1tpbmRleF0pO1xyXG4gICAgICAgICAgdGFic01lZGlhSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiX3RhYi1zcG9sbGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8g0KDQsNCx0L7RgtCwINGBINC60L7QvdGC0LXQvdGC0L7QvFxyXG4gIGZ1bmN0aW9uIGluaXRUYWJzKHRhYnNCbG9jaykge1xyXG4gICAgbGV0IHRhYnNUaXRsZXMgPSB0YWJzQmxvY2sucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRhYnMtdGl0bGVzXT4qXCIpO1xyXG4gICAgbGV0IHRhYnNDb250ZW50ID0gdGFic0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10YWJzLWJvZHldPipcIik7XHJcbiAgICBjb25zdCB0YWJzQmxvY2tJbmRleCA9IHRhYnNCbG9jay5kYXRhc2V0LnRhYnNJbmRleDtcclxuICAgIGNvbnN0IHRhYnNBY3RpdmVIYXNoQmxvY2sgPSB0YWJzQWN0aXZlSGFzaFswXSA9PSB0YWJzQmxvY2tJbmRleDtcclxuXHJcbiAgICBpZiAodGFic0FjdGl2ZUhhc2hCbG9jaykge1xyXG4gICAgICBjb25zdCB0YWJzQWN0aXZlVGl0bGUgPSB0YWJzQmxvY2sucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIltkYXRhLXRhYnMtdGl0bGVzXT4uX3RhYi1hY3RpdmVcIlxyXG4gICAgICApO1xyXG4gICAgICB0YWJzQWN0aXZlVGl0bGUgPyB0YWJzQWN0aXZlVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcIl90YWItYWN0aXZlXCIpIDogbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0YWJzQ29udGVudC5sZW5ndGgpIHtcclxuICAgICAgdGFic0NvbnRlbnQgPSBBcnJheS5mcm9tKHRhYnNDb250ZW50KS5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uY2xvc2VzdChcIltkYXRhLXRhYnNdXCIpID09PSB0YWJzQmxvY2tcclxuICAgICAgKTtcclxuICAgICAgdGFic1RpdGxlcyA9IEFycmF5LmZyb20odGFic1RpdGxlcykuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmNsb3Nlc3QoXCJbZGF0YS10YWJzXVwiKSA9PT0gdGFic0Jsb2NrXHJcbiAgICAgICk7XHJcbiAgICAgIHRhYnNDb250ZW50LmZvckVhY2goKHRhYnNDb250ZW50SXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICB0YWJzVGl0bGVzW2luZGV4XS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYnMtdGl0bGVcIiwgXCJcIik7XHJcbiAgICAgICAgdGFic0NvbnRlbnRJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtdGFicy1pdGVtXCIsIFwiXCIpO1xyXG5cclxuICAgICAgICBpZiAodGFic0FjdGl2ZUhhc2hCbG9jayAmJiBpbmRleCA9PSB0YWJzQWN0aXZlSGFzaFsxXSkge1xyXG4gICAgICAgICAgdGFic1RpdGxlc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcIl90YWItYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJzQ29udGVudEl0ZW0uaGlkZGVuID1cclxuICAgICAgICAgICF0YWJzVGl0bGVzW2luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoXCJfdGFiLWFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNldFRhYnNTdGF0dXModGFic0Jsb2NrKSB7XHJcbiAgICBsZXQgdGFic1RpdGxlcyA9IHRhYnNCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdGFicy10aXRsZV1cIik7XHJcbiAgICBsZXQgdGFic0NvbnRlbnQgPSB0YWJzQmxvY2sucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRhYnMtaXRlbV1cIik7XHJcbiAgICBjb25zdCB0YWJzQmxvY2tJbmRleCA9IHRhYnNCbG9jay5kYXRhc2V0LnRhYnNJbmRleDtcclxuICAgIGZ1bmN0aW9uIGlzVGFic0FuYW1hdGUodGFic0Jsb2NrKSB7XHJcbiAgICAgIGlmICh0YWJzQmxvY2suaGFzQXR0cmlidXRlKFwiZGF0YS10YWJzLWFuaW1hdGVcIikpIHtcclxuICAgICAgICByZXR1cm4gdGFic0Jsb2NrLmRhdGFzZXQudGFic0FuaW1hdGUgPiAwXHJcbiAgICAgICAgICA/IE51bWJlcih0YWJzQmxvY2suZGF0YXNldC50YWJzQW5pbWF0ZSlcclxuICAgICAgICAgIDogNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YWJzQmxvY2tBbmltYXRlID0gaXNUYWJzQW5hbWF0ZSh0YWJzQmxvY2spO1xyXG4gICAgaWYgKHRhYnNDb250ZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgaXNIYXNoID0gdGFic0Jsb2NrLmhhc0F0dHJpYnV0ZShcImRhdGEtdGFicy1oYXNoXCIpO1xyXG4gICAgICB0YWJzQ29udGVudCA9IEFycmF5LmZyb20odGFic0NvbnRlbnQpLmZpbHRlcihcclxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5jbG9zZXN0KFwiW2RhdGEtdGFic11cIikgPT09IHRhYnNCbG9ja1xyXG4gICAgICApO1xyXG4gICAgICB0YWJzVGl0bGVzID0gQXJyYXkuZnJvbSh0YWJzVGl0bGVzKS5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uY2xvc2VzdChcIltkYXRhLXRhYnNdXCIpID09PSB0YWJzQmxvY2tcclxuICAgICAgKTtcclxuICAgICAgdGFic0NvbnRlbnQuZm9yRWFjaCgodGFic0NvbnRlbnRJdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmICh0YWJzVGl0bGVzW2luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoXCJfdGFiLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgaWYgKHRhYnNCbG9ja0FuaW1hdGUpIHtcclxuICAgICAgICAgICAgX3NsaWRlRG93bih0YWJzQ29udGVudEl0ZW0sIHRhYnNCbG9ja0FuaW1hdGUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFic0NvbnRlbnRJdGVtLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGlzSGFzaCAmJiAhdGFic0NvbnRlbnRJdGVtLmNsb3Nlc3QoXCIucG9wdXBcIikpIHtcclxuICAgICAgICAgICAgc2V0SGFzaChgdGFiLSR7dGFic0Jsb2NrSW5kZXh9LSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0YWJzQmxvY2tBbmltYXRlKSB7XHJcbiAgICAgICAgICAgIF9zbGlkZVVwKHRhYnNDb250ZW50SXRlbSwgdGFic0Jsb2NrQW5pbWF0ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YWJzQ29udGVudEl0ZW0uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBzZXRUYWJzQWN0aW9uKGUpIHtcclxuICAgIGNvbnN0IGVsID0gZS50YXJnZXQ7XHJcbiAgICBpZiAoZWwuY2xvc2VzdChcIltkYXRhLXRhYnMtdGl0bGVdXCIpKSB7XHJcbiAgICAgIGNvbnN0IHRhYlRpdGxlID0gZWwuY2xvc2VzdChcIltkYXRhLXRhYnMtdGl0bGVdXCIpO1xyXG4gICAgICBjb25zdCB0YWJzQmxvY2sgPSB0YWJUaXRsZS5jbG9zZXN0KFwiW2RhdGEtdGFic11cIik7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhdGFiVGl0bGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX3RhYi1hY3RpdmVcIikgJiZcclxuICAgICAgICAhdGFic0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoXCIuX3NsaWRlXCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGxldCB0YWJBY3RpdmVUaXRsZSA9IHRhYnNCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgXCJbZGF0YS10YWJzLXRpdGxlXS5fdGFiLWFjdGl2ZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0YWJBY3RpdmVUaXRsZS5sZW5ndGhcclxuICAgICAgICAgID8gKHRhYkFjdGl2ZVRpdGxlID0gQXJyYXkuZnJvbSh0YWJBY3RpdmVUaXRsZSkuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmNsb3Nlc3QoXCJbZGF0YS10YWJzXVwiKSA9PT0gdGFic0Jsb2NrXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgdGFiQWN0aXZlVGl0bGUubGVuZ3RoXHJcbiAgICAgICAgICA/IHRhYkFjdGl2ZVRpdGxlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJfdGFiLWFjdGl2ZVwiKVxyXG4gICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIHRhYlRpdGxlLmNsYXNzTGlzdC5hZGQoXCJfdGFiLWFjdGl2ZVwiKTtcclxuICAgICAgICBzZXRUYWJzU3RhdHVzKHRhYnNCbG9jayk7XHJcbiAgICAgIH1cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyDQnNC+0LTRg9C70Ywg0YDQsNCx0L7RgtGLINGBINC80LXQvdGOICjQsdGD0YDQs9C10YApID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8qXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21lbnUtYnVyZ2VyLmh0bWxcclxu0KHQvdC40L/Qv9C10YIgKEhUTUwpOiBtZW51XHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZW51SW5pdCgpIHtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uLW1lbnVcIikpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAoYm9keUxvY2tTdGF0dXMgJiYgZS50YXJnZXQuY2xvc2VzdChcIi5pY29uLW1lbnVcIikpIHtcclxuICAgICAgICBib2R5TG9ja1RvZ2dsZSgpO1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwibWVudS1vcGVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi1tb25leVwiKSkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmIChib2R5TG9ja1N0YXR1cyAmJiBlLnRhcmdldC5jbG9zZXN0KFwiLmljb24tbW9uZXlcIikpIHtcclxuICAgICAgICBib2R5TG9ja1RvZ2dsZSgpO1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwibW9uZXktb3BlblwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmljb24taGlzdG9yeVwiKSkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmIChib2R5TG9ja1N0YXR1cyAmJiBlLnRhcmdldC5jbG9zZXN0KFwiLmljb24tbW9uZXlcIikpIHtcclxuICAgICAgICBib2R5TG9ja1RvZ2dsZSgpO1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlzdG9yeS1vcGVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVPcGVuKCkge1xyXG4gIGJvZHlMb2NrKCk7XHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LW9wZW5cIik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVDbG9zZSgpIHtcclxuICBib2R5VW5sb2NrKCk7XHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LW9wZW5cIik7XHJcbn1cclxuLy8g0JzQvtC00YPQu9GMIFwi0L/QvtC60LDQt9Cw0YLRjCDQtdGJ0LVcIiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vKlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1wb2themF0LWVzaGhqby5odG1sXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTogc2hvd21vcmVcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb3JlKCkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc3Qgc2hvd01vcmVCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2hvd21vcmVdXCIpO1xyXG4gICAgbGV0IHNob3dNb3JlQmxvY2tzUmVndWxhcjtcclxuICAgIGxldCBtZFF1ZXJpZXNBcnJheTtcclxuICAgIGlmIChzaG93TW9yZUJsb2Nrcy5sZW5ndGgpIHtcclxuICAgICAgLy8g0J/QvtC70YPRh9C10L3QuNC1INC+0LHRi9GH0L3Ri9GFINC+0LHRitC10LrRgtC+0LJcclxuICAgICAgc2hvd01vcmVCbG9ja3NSZWd1bGFyID0gQXJyYXkuZnJvbShzaG93TW9yZUJsb2NrcykuZmlsdGVyKFxyXG4gICAgICAgIGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xyXG4gICAgICAgICAgcmV0dXJuICFpdGVtLmRhdGFzZXQuc2hvd21vcmVNZWRpYTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC+0LHRi9GH0L3Ri9GFINC+0LHRitC10LrRgtC+0LJcclxuICAgICAgc2hvd01vcmVCbG9ja3NSZWd1bGFyLmxlbmd0aCA/IGluaXRJdGVtcyhzaG93TW9yZUJsb2Nrc1JlZ3VsYXIpIDogbnVsbDtcclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TW9yZUFjdGlvbnMpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBzaG93TW9yZUFjdGlvbnMpO1xyXG5cclxuICAgICAgLy8g0J/QvtC70YPRh9C10L3QuNC1INC+0LHRitC10LrRgtC+0LIg0YEg0LzQtdC00LjQsCDQt9Cw0L/RgNC+0YHQsNC80LhcclxuICAgICAgbWRRdWVyaWVzQXJyYXkgPSBkYXRhTWVkaWFRdWVyaWVzKHNob3dNb3JlQmxvY2tzLCBcInNob3dtb3JlTWVkaWFcIik7XHJcbiAgICAgIGlmIChtZFF1ZXJpZXNBcnJheSAmJiBtZFF1ZXJpZXNBcnJheS5sZW5ndGgpIHtcclxuICAgICAgICBtZFF1ZXJpZXNBcnJheS5mb3JFYWNoKChtZFF1ZXJpZXNJdGVtKSA9PiB7XHJcbiAgICAgICAgICAvLyDQodC+0LHRi9GC0LjQtVxyXG4gICAgICAgICAgbWRRdWVyaWVzSXRlbS5tYXRjaE1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbml0SXRlbXMobWRRdWVyaWVzSXRlbS5pdGVtc0FycmF5LCBtZFF1ZXJpZXNJdGVtLm1hdGNoTWVkaWEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5pdEl0ZW1zTWVkaWEobWRRdWVyaWVzQXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbml0SXRlbXNNZWRpYShtZFF1ZXJpZXNBcnJheSkge1xyXG4gICAgICBtZFF1ZXJpZXNBcnJheS5mb3JFYWNoKChtZFF1ZXJpZXNJdGVtKSA9PiB7XHJcbiAgICAgICAgaW5pdEl0ZW1zKG1kUXVlcmllc0l0ZW0uaXRlbXNBcnJheSwgbWRRdWVyaWVzSXRlbS5tYXRjaE1lZGlhKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbml0SXRlbXMoc2hvd01vcmVCbG9ja3MsIG1hdGNoTWVkaWEpIHtcclxuICAgICAgc2hvd01vcmVCbG9ja3MuZm9yRWFjaCgoc2hvd01vcmVCbG9jaykgPT4ge1xyXG4gICAgICAgIGluaXRJdGVtKHNob3dNb3JlQmxvY2ssIG1hdGNoTWVkaWEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGluaXRJdGVtKHNob3dNb3JlQmxvY2ssIG1hdGNoTWVkaWEgPSBmYWxzZSkge1xyXG4gICAgICBzaG93TW9yZUJsb2NrID0gbWF0Y2hNZWRpYSA/IHNob3dNb3JlQmxvY2suaXRlbSA6IHNob3dNb3JlQmxvY2s7XHJcbiAgICAgIGxldCBzaG93TW9yZUNvbnRlbnQgPSBzaG93TW9yZUJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCJbZGF0YS1zaG93bW9yZS1jb250ZW50XVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBzaG93TW9yZUJ1dHRvbiA9IHNob3dNb3JlQmxvY2sucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIltkYXRhLXNob3dtb3JlLWJ1dHRvbl1cIlxyXG4gICAgICApO1xyXG4gICAgICBzaG93TW9yZUNvbnRlbnQgPSBBcnJheS5mcm9tKHNob3dNb3JlQ29udGVudCkuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmNsb3Nlc3QoXCJbZGF0YS1zaG93bW9yZV1cIikgPT09IHNob3dNb3JlQmxvY2tcclxuICAgICAgKVswXTtcclxuICAgICAgc2hvd01vcmVCdXR0b24gPSBBcnJheS5mcm9tKHNob3dNb3JlQnV0dG9uKS5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uY2xvc2VzdChcIltkYXRhLXNob3dtb3JlXVwiKSA9PT0gc2hvd01vcmVCbG9ja1xyXG4gICAgICApWzBdO1xyXG4gICAgICBjb25zdCBoaWRkZW5IZWlnaHQgPSBnZXRIZWlnaHQoc2hvd01vcmVCbG9jaywgc2hvd01vcmVDb250ZW50KTtcclxuICAgICAgaWYgKG1hdGNoTWVkaWEubWF0Y2hlcyB8fCAhbWF0Y2hNZWRpYSkge1xyXG4gICAgICAgIGlmIChoaWRkZW5IZWlnaHQgPCBnZXRPcmlnaW5hbEhlaWdodChzaG93TW9yZUNvbnRlbnQpKSB7XHJcbiAgICAgICAgICBfc2xpZGVVcChzaG93TW9yZUNvbnRlbnQsIDAsIGhpZGRlbkhlaWdodCk7XHJcbiAgICAgICAgICBzaG93TW9yZUJ1dHRvbi5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgX3NsaWRlRG93bihzaG93TW9yZUNvbnRlbnQsIDAsIGhpZGRlbkhlaWdodCk7XHJcbiAgICAgICAgICBzaG93TW9yZUJ1dHRvbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBfc2xpZGVEb3duKHNob3dNb3JlQ29udGVudCwgMCwgaGlkZGVuSGVpZ2h0KTtcclxuICAgICAgICBzaG93TW9yZUJ1dHRvbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRIZWlnaHQoc2hvd01vcmVCbG9jaywgc2hvd01vcmVDb250ZW50KSB7XHJcbiAgICAgIGxldCBoaWRkZW5IZWlnaHQgPSAwO1xyXG4gICAgICBjb25zdCBzaG93TW9yZVR5cGUgPSBzaG93TW9yZUJsb2NrLmRhdGFzZXQuc2hvd21vcmVcclxuICAgICAgICA/IHNob3dNb3JlQmxvY2suZGF0YXNldC5zaG93bW9yZVxyXG4gICAgICAgIDogXCJzaXplXCI7XHJcbiAgICAgIGlmIChzaG93TW9yZVR5cGUgPT09IFwiaXRlbXNcIikge1xyXG4gICAgICAgIGNvbnN0IHNob3dNb3JlVHlwZVZhbHVlID0gc2hvd01vcmVDb250ZW50LmRhdGFzZXQuc2hvd21vcmVDb250ZW50XHJcbiAgICAgICAgICA/IHNob3dNb3JlQ29udGVudC5kYXRhc2V0LnNob3dtb3JlQ29udGVudFxyXG4gICAgICAgICAgOiAzO1xyXG4gICAgICAgIGNvbnN0IHNob3dNb3JlSXRlbXMgPSBzaG93TW9yZUNvbnRlbnQuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IHNob3dNb3JlSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICBjb25zdCBzaG93TW9yZUl0ZW0gPSBzaG93TW9yZUl0ZW1zW2luZGV4IC0gMV07XHJcbiAgICAgICAgICBoaWRkZW5IZWlnaHQgKz0gc2hvd01vcmVJdGVtLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgIGlmIChpbmRleCA9PSBzaG93TW9yZVR5cGVWYWx1ZSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNob3dNb3JlVHlwZVZhbHVlID0gc2hvd01vcmVDb250ZW50LmRhdGFzZXQuc2hvd21vcmVDb250ZW50XHJcbiAgICAgICAgICA/IHNob3dNb3JlQ29udGVudC5kYXRhc2V0LnNob3dtb3JlQ29udGVudFxyXG4gICAgICAgICAgOiAxNTA7XHJcbiAgICAgICAgaGlkZGVuSGVpZ2h0ID0gc2hvd01vcmVUeXBlVmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpZGRlbkhlaWdodDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE9yaWdpbmFsSGVpZ2h0KHNob3dNb3JlQ29udGVudCkge1xyXG4gICAgICBsZXQgcGFyZW50SGlkZGVuO1xyXG4gICAgICBsZXQgaGlkZGVuSGVpZ2h0ID0gc2hvd01vcmVDb250ZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgc2hvd01vcmVDb250ZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xyXG4gICAgICBpZiAoc2hvd01vcmVDb250ZW50LmNsb3Nlc3QoYFtoaWRkZW5dYCkpIHtcclxuICAgICAgICBwYXJlbnRIaWRkZW4gPSBzaG93TW9yZUNvbnRlbnQuY2xvc2VzdChgW2hpZGRlbl1gKTtcclxuICAgICAgICBwYXJlbnRIaWRkZW4uaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG9yaWdpbmFsSGVpZ2h0ID0gc2hvd01vcmVDb250ZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgcGFyZW50SGlkZGVuID8gKHBhcmVudEhpZGRlbi5oaWRkZW4gPSB0cnVlKSA6IG51bGw7XHJcbiAgICAgIHNob3dNb3JlQ29udGVudC5zdHlsZS5oZWlnaHQgPSBgJHtoaWRkZW5IZWlnaHR9cHhgO1xyXG4gICAgICByZXR1cm4gb3JpZ2luYWxIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93TW9yZUFjdGlvbnMoZSkge1xyXG4gICAgICBjb25zdCB0YXJnZXRFdmVudCA9IGUudGFyZ2V0O1xyXG4gICAgICBjb25zdCB0YXJnZXRUeXBlID0gZS50eXBlO1xyXG4gICAgICBpZiAodGFyZ2V0VHlwZSA9PT0gXCJjbGlja1wiKSB7XHJcbiAgICAgICAgaWYgKHRhcmdldEV2ZW50LmNsb3Nlc3QoXCJbZGF0YS1zaG93bW9yZS1idXR0b25dXCIpKSB7XHJcbiAgICAgICAgICBjb25zdCBzaG93TW9yZUJ1dHRvbiA9IHRhcmdldEV2ZW50LmNsb3Nlc3QoXCJbZGF0YS1zaG93bW9yZS1idXR0b25dXCIpO1xyXG4gICAgICAgICAgY29uc3Qgc2hvd01vcmVCbG9jayA9IHNob3dNb3JlQnV0dG9uLmNsb3Nlc3QoXCJbZGF0YS1zaG93bW9yZV1cIik7XHJcbiAgICAgICAgICBjb25zdCBzaG93TW9yZUNvbnRlbnQgPSBzaG93TW9yZUJsb2NrLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIFwiW2RhdGEtc2hvd21vcmUtY29udGVudF1cIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IHNob3dNb3JlU3BlZWQgPSBzaG93TW9yZUJsb2NrLmRhdGFzZXQuc2hvd21vcmVCdXR0b25cclxuICAgICAgICAgICAgPyBzaG93TW9yZUJsb2NrLmRhdGFzZXQuc2hvd21vcmVCdXR0b25cclxuICAgICAgICAgICAgOiBcIjUwMFwiO1xyXG4gICAgICAgICAgY29uc3QgaGlkZGVuSGVpZ2h0ID0gZ2V0SGVpZ2h0KHNob3dNb3JlQmxvY2ssIHNob3dNb3JlQ29udGVudCk7XHJcbiAgICAgICAgICBpZiAoIXNob3dNb3JlQ29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJfc2xpZGVcIikpIHtcclxuICAgICAgICAgICAgc2hvd01vcmVCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoXCJfc2hvd21vcmUtYWN0aXZlXCIpXHJcbiAgICAgICAgICAgICAgPyBfc2xpZGVVcChzaG93TW9yZUNvbnRlbnQsIHNob3dNb3JlU3BlZWQsIGhpZGRlbkhlaWdodClcclxuICAgICAgICAgICAgICA6IF9zbGlkZURvd24oc2hvd01vcmVDb250ZW50LCBzaG93TW9yZVNwZWVkLCBoaWRkZW5IZWlnaHQpO1xyXG4gICAgICAgICAgICBzaG93TW9yZUJsb2NrLmNsYXNzTGlzdC50b2dnbGUoXCJfc2hvd21vcmUtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0YXJnZXRUeXBlID09PSBcInJlc2l6ZVwiKSB7XHJcbiAgICAgICAgc2hvd01vcmVCbG9ja3NSZWd1bGFyICYmIHNob3dNb3JlQmxvY2tzUmVndWxhci5sZW5ndGhcclxuICAgICAgICAgID8gaW5pdEl0ZW1zKHNob3dNb3JlQmxvY2tzUmVndWxhcilcclxuICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICBtZFF1ZXJpZXNBcnJheSAmJiBtZFF1ZXJpZXNBcnJheS5sZW5ndGhcclxuICAgICAgICAgID8gaW5pdEl0ZW1zTWVkaWEobWRRdWVyaWVzQXJyYXkpXHJcbiAgICAgICAgICA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0J/RgNC+0YfQuNC1INC/0L7Qu9C10LfQvdGL0LUg0YTRg9C90LrRhtC40LggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRkxTIChGdWxsIExvZ2dpbmcgU3lzdGVtKVxyXG5leHBvcnQgZnVuY3Rpb24gRkxTKG1lc3NhZ2UpIHtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuRkxTKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0sIDApO1xyXG59XHJcbi8vINCf0L7Qu9GD0YfQuNGC0Ywg0YbQuNGE0YDRiyDQuNC3INGB0YLRgNC+0LrQuFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlnRnJvbVN0cmluZyhpdGVtKSB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KGl0ZW0ucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpKTtcclxufVxyXG4vLyDQpNC+0YDQvNCw0YLQuNGA0L7QstCw0L3QuNC1INGG0LjRhNGAINGC0LjQv9CwIDEwMCAwMDAgMDAwXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREaWdGb3JtYXQoaXRlbSkge1xyXG4gIHJldHVybiBpdGVtLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCBcIiQxIFwiKTtcclxufVxyXG4vLyDQo9Cx0YDQsNGC0Ywg0LrQu9Cw0YHRgSDQuNC3INCy0YHQtdGFINGN0LvQtdC80LXQvdGC0L7QsiDQvNCw0YHRgdC40LLQsFxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcyhhcnJheSwgY2xhc3NOYW1lKSB7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgYXJyYXlbaV0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gIH1cclxufVxyXG4vLyDQo9C90LjQutCw0LvQuNC30LDRhtC40Y8g0LzQsNGB0YHQuNCy0LBcclxuZXhwb3J0IGZ1bmN0aW9uIHVuaXFBcnJheShhcnJheSkge1xyXG4gIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XHJcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKGl0ZW0pID09PSBpbmRleDtcclxuICB9KTtcclxufVxyXG4vLyDQpNGD0L3QutGG0LjRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0LjQvdC00LXQutGB0LAg0LLQvdGD0YLRgNC4INGA0L7QtNC40YLQtdC70Y9cclxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4SW5QYXJlbnQocGFyZW50LCBlbGVtZW50KSB7XHJcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXJlbnQuY2hpbGRyZW4pO1xyXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGFycmF5LCBlbGVtZW50KTtcclxufVxyXG4vLyDQntCx0YDQsNCx0L7RgtCwINC80LXQtNC40LAg0LfQsNC/0YDQvtGB0L7QsiDQuNC3INCw0YLRgNC40LHRg9GC0L7QslxyXG5leHBvcnQgZnVuY3Rpb24gZGF0YU1lZGlhUXVlcmllcyhhcnJheSwgZGF0YVNldFZhbHVlKSB7XHJcbiAgLy8g0J/QvtC70YPRh9C10L3QuNC1INC+0LHRitC10LrRgtC+0LIg0YEg0LzQtdC00LjQsCDQt9Cw0L/RgNC+0YHQsNC80LhcclxuICBjb25zdCBtZWRpYSA9IEFycmF5LmZyb20oYXJyYXkpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuICAgIGlmIChpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXSkge1xyXG4gICAgICByZXR1cm4gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0uc3BsaXQoXCIsXCIpWzBdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC+0LHRitC10LrRgtC+0LIg0YEg0LzQtdC00LjQsCDQt9Cw0L/RgNC+0YHQsNC80LhcclxuICBpZiAobWVkaWEubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBicmVha3BvaW50c0FycmF5ID0gW107XHJcbiAgICBtZWRpYS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcmFtcyA9IGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdO1xyXG4gICAgICBjb25zdCBicmVha3BvaW50ID0ge307XHJcbiAgICAgIGNvbnN0IHBhcmFtc0FycmF5ID0gcGFyYW1zLnNwbGl0KFwiLFwiKTtcclxuICAgICAgYnJlYWtwb2ludC52YWx1ZSA9IHBhcmFtc0FycmF5WzBdO1xyXG4gICAgICBicmVha3BvaW50LnR5cGUgPSBwYXJhbXNBcnJheVsxXSA/IHBhcmFtc0FycmF5WzFdLnRyaW0oKSA6IFwibWF4XCI7XHJcbiAgICAgIGJyZWFrcG9pbnQuaXRlbSA9IGl0ZW07XHJcbiAgICAgIGJyZWFrcG9pbnRzQXJyYXkucHVzaChicmVha3BvaW50KTtcclxuICAgIH0pO1xyXG4gICAgLy8g0J/QvtC70YPRh9Cw0LXQvCDRg9C90LjQutCw0LvRjNC90YvQtSDQsdGA0LXQudC60L/QvtC40L3RgtGLXHJcbiAgICBsZXQgbWRRdWVyaWVzID0gYnJlYWtwb2ludHNBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBcIihcIiArXHJcbiAgICAgICAgaXRlbS50eXBlICtcclxuICAgICAgICBcIi13aWR0aDogXCIgK1xyXG4gICAgICAgIGl0ZW0udmFsdWUgK1xyXG4gICAgICAgIFwicHgpLFwiICtcclxuICAgICAgICBpdGVtLnZhbHVlICtcclxuICAgICAgICBcIixcIiArXHJcbiAgICAgICAgaXRlbS50eXBlXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIG1kUXVlcmllcyA9IHVuaXFBcnJheShtZFF1ZXJpZXMpO1xyXG4gICAgY29uc3QgbWRRdWVyaWVzQXJyYXkgPSBbXTtcclxuXHJcbiAgICBpZiAobWRRdWVyaWVzLmxlbmd0aCkge1xyXG4gICAgICAvLyDQoNCw0LHQvtGC0LDQtdC8INGBINC60LDQttC00YvQvCDQsdGA0LXQudC60L/QvtC40L3RgtC+0LxcclxuICAgICAgbWRRdWVyaWVzLmZvckVhY2goKGJyZWFrcG9pbnQpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJhbXNBcnJheSA9IGJyZWFrcG9pbnQuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IHBhcmFtc0FycmF5WzFdO1xyXG4gICAgICAgIGNvbnN0IG1lZGlhVHlwZSA9IHBhcmFtc0FycmF5WzJdO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShwYXJhbXNBcnJheVswXSk7XHJcbiAgICAgICAgLy8g0J7QsdGK0LXQutGC0Ysg0YEg0L3Rg9C20L3Ri9C80Lgg0YPRgdC70L7QstC40Y/QvNC4XHJcbiAgICAgICAgY29uc3QgaXRlbXNBcnJheSA9IGJyZWFrcG9pbnRzQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gbWVkaWFCcmVha3BvaW50ICYmIGl0ZW0udHlwZSA9PT0gbWVkaWFUeXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1kUXVlcmllc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgaXRlbXNBcnJheSxcclxuICAgICAgICAgIG1hdGNoTWVkaWEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gbWRRdWVyaWVzQXJyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwYjViMjJmNDBkYWZhZmJiOGQxYlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==