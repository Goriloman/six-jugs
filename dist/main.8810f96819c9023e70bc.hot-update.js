"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _files_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files/forms/forms.js */ "./src/js/files/forms/forms.js");
/* harmony import */ var _libs_select_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/select.js */ "./src/js/libs/select.js");
/* harmony import */ var _files_forms_range_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files/forms/range.js */ "./src/js/files/forms/range.js");
/* harmony import */ var _files_scroll_scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files/scroll/scroll.js */ "./src/js/files/scroll/scroll.js");
/* harmony import */ var _files_script_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files/script.js */ "./src/js/files/script.js");
/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить FLS (Full Logging System) (в работе)
window["FLS"] = true;

// Подключение основного файла стилей


// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================


/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
_files_functions_js__WEBPACK_IMPORTED_MODULE_1__.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
// flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
// flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
_files_functions_js__WEBPACK_IMPORTED_MODULE_1__.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// flsFunctions.fullVHfix();

/*
Модуль работы со спойлерами
Документация: https://template.fls.guru/template-docs/modul-spojlery.html
Сниппет (HTML): spollers
*/
// flsFunctions.spollers();

/*
Модуль работы с табами
Документация: https://template.fls.guru/template-docs/modul-taby.html
Сниппет (HTML): tabs
*/
// flsFunctions.tabs();

/*
Модуль "показать еще"
Документация: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сниппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Попапы
Документация: https://template.fls.guru/template-docs/funkcional-popup.html
Сниппет (HTML): pl
*/
// import './libs/popup.js'

/*
Модуль параллакса мышью
Документация: 
Сниппет (HTML): 
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Работа с формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================


/* Работа с полями формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formFieldsInit({ viewPass: false });

/* Oтправка формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Модуль формы "колличество" */
// flsForms.formQuantity();

/* Модуль звездного рейтинга */
// flsForms.formRating();

/* Модуль работы с select. */


/* (В работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
Документация по работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль работы с ползунком */
/*
Подключение и настройка выполняется в файле js/files/forms/range.js
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/


/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
// import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем к блоку атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок
// Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
// import './files/scroll/lazyload.js';

// Наблюдатель за объектами c атрибутом data-watch
// Документация: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сниппет(HTML):
// import './libs/watcher.js'

// Функции работы скроллом


// Плавная навигация по странице
// Документация: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
// Документация: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();

// Функционал липкого блока
// flsScroll.stickyBlock();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: 
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Прочие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптив */
// Документация: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
// import "./libs/dynamic_adapt.js";

/* Форматирование чисел */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Прочее ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */

//============================================================================================================================================================================================================================================


/***/ }),

/***/ "./src/js/libs/select.js":
/*!*******************************!*\
  !*** ./src/js/libs/select.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _files_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../files/functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _files_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../files/modules.js */ "./src/js/files/modules.js");
/* harmony import */ var _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files/forms/forms.js */ "./src/js/files/forms/forms.js");
// Подключение функционала "Чертогов Фрилансера"




// Подключение файла стилей
// Базовые стили поключаются в src/scss/forms.scss
// Файл базовых стилей src/scss/forms/select.scss

/*
Документация:
Снипет (HTML): sel
*/
/*
// Настройки
Для селекта (select):
class="имя класса" - модификатор к конкретному селекту
multiple - мультивыбор
data-class-modif= "имя модификатора"
data-tags - режим тегов, только для (только для multiple)
data-scroll - включит прокрутку для выпадающего списка, дополнительно можно подключить кастомный скролл simplebar в app.js. Указанное число для атрибута ограничит высоту
data-checkbox - стилизация элементов по checkbox (только для multiple)
data-show-selected - отключает скрытие выбранного элемента
data-search - позволяет искать по выпадающему списку
data-open - селект открыт сразу
data-submit - отправляет форму при изменении селекта

data-one-select - селекты внутри оболочки с атрибутом будут показываться только по одному
data-pseudo-label - добавляет псевдоэлемент к заголовку селекта с указанным текстом

Для плейсхолдера (Плейсхолдер - это option с value=""):
data-label для плейсхолдера, добавляет label к селекту
data-show для плейсхолдера, показывает его в списке (только для единичного выбора)

Для элемента (option):
data-class="имя класса" - добавляет класс
data-asset="путь к картинке или текст" - добавляет структуру 2х колонок и данными
data-href="адрес ссылки" - добавляет ссылку в элемент списка
data-href-blank - откроет ссылку в новом окне
*/

/*
// Возможные доработки:
попап на мобилке
*/

// Класс построения Select
class SelectConstructor {
	constructor(props, data = null) {
		let defaultConfig = {
			init: true,
			logging: true,
		}
		this.config = Object.assign(defaultConfig, props);
		// CSS классы модуля
		this.selectClasses = {
			classSelect: "select", // Главный блок
			classSelectBody: "select__body", // Тело селекта
			classSelectTitle: "select__title", // Заголовок
			classSelectValue: "select__value", // Значение в заголовке
			classSelectLabel: "select__label", // Лабел
			classSelectInput: "select__input", // Поле ввода
			classSelectText: "select__text", // Оболочка текстовых данных
			classSelectLink: "select__link", // Ссылка в элементе
			classSelectOptions: "select__options", // Выпадающий список
			classSelectOptionsScroll: "select__scroll", // Оболочка при скролле
			classSelectOption: "select__option", // Пункт
			classSelectContent: "select__content", // Оболочка контента в заголовке
			classSelectRow: "select__row", // Ряд
			classSelectData: "select__asset", // Дополнительные данные
			classSelectDisabled: "_select-disabled", // Запрешен
			classSelectTag: "_select-tag", // Класс тега
			classSelectOpen: "_select-open", // Список открыт
			classSelectActive: "_select-active", // Список выбран
			classSelectFocus: "_select-focus", // Список в фокусе
			classSelectMultiple: "_select-multiple", // Мультивыбор
			classSelectCheckBox: "_select-checkbox", // Стиль чекбокса
			classSelectOptionSelected: "_select-selected", // Выбранный пункт
			classSelectPseudoLabel: "_select-pseudo-label", // Псевдолейбл
		}
		this._this = this;
		// Запуск инициализации
		if (this.config.init) {
			// Получение всех select на странице
			const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll('select');
			if (selectItems.length) {
				this.selectsInit(selectItems);
				this.setLogging(`Проснулся, построил селектов: (${selectItems.length})`);
			} else {
				this.setLogging('Сплю, нет ни одного select zzZZZzZZz');
			}
		}
	}
	// Конструктор CSS класса
	getSelectClass(className) {
		return `.${className}`;
	}
	// Геттер элементов псевдоселекта
	getSelectElement(selectItem, className) {
		return {
			originalSelect: selectItem.querySelector('select'),
			selectElement: selectItem.querySelector(this.getSelectClass(className)),
		}
	}
	// Функция инициализации всех селектов
	selectsInit(selectItems) {
		selectItems.forEach((originalSelect, index) => {
			this.selectInit(originalSelect, index + 1);
		});
		// Обработчики событий...
		// ...при клике
		document.addEventListener('click', function (e) {
			this.selectsActions(e);
		}.bind(this));
		// ...при нажатии клавиши
		document.addEventListener('keydown', function (e) {
			this.selectsActions(e);
		}.bind(this));
		// ...при фокусе
		document.addEventListener('focusin', function (e) {
			this.selectsActions(e);
		}.bind(this));
		// ...при потере фокуса
		document.addEventListener('focusout', function (e) {
			this.selectsActions(e);
		}.bind(this));
	}
	// Функция инициализации конкретного селекта
	selectInit(originalSelect, index) {
		const _this = this;
		// Создаем оболочку
		let selectItem = document.createElement("div");
		selectItem.classList.add(this.selectClasses.classSelect);
		// Выводим оболочку перед оригинальным селектом
		originalSelect.parentNode.insertBefore(selectItem, originalSelect);
		// Помещаем оригинальный селект в оболочку
		selectItem.appendChild(originalSelect);
		// Скрываем оригинальный селект
		originalSelect.hidden = true;
		// Присваиваем уникальный ID
		index ? originalSelect.dataset.id = index : null;

		// Работа с плейсхолдером
		if (this.getSelectPlaceholder(originalSelect)) {
			// Запоминаем плейсхолдер
			originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
			// Если включен режим label
			if (this.getSelectPlaceholder(originalSelect).label.show) {
				const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
				selectItemTitle.insertAdjacentHTML('afterbegin', `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
			}
		}
		// Конструктор основных элементов
		selectItem.insertAdjacentHTML('beforeend', `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
		// Запускаем конструктор псевдоселекта
		this.selectBuild(originalSelect);

		// Запоминаем скорость
		originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : "150";
		// Событие при изменении оригинального select
		originalSelect.addEventListener('change', function (e) {
			_this.selectChange(e);
		});
	}
	// Конструктор псевдоселекта
	selectBuild(originalSelect) {
		const selectItem = originalSelect.parentElement;
		// Добавляем ID селекта
		selectItem.dataset.id = originalSelect.dataset.id;
		// Получаем класс оригинального селекта, создаем модификатор и добавляем его
		originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
		// Если множественный выбор, добавляем класс
		originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
		// Cтилизация элементов под checkbox (только для multiple)
		originalSelect.hasAttribute('data-checkbox') && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
		// Сеттер значения заголовка селекта
		this.setSelectTitleValue(selectItem, originalSelect);
		// Сеттер элементов списка (options)
		this.setOptions(selectItem, originalSelect);
		// Если включена опция поиска data-search, запускаем обработчик
		originalSelect.hasAttribute('data-search') ? this.searchActions(selectItem) : null;
		// Если указана настройка data-open, открываем селект
		originalSelect.hasAttribute('data-open') ? this.selectAction(selectItem) : null;
		// Обработчик disabled
		this.selectDisabled(selectItem, originalSelect);
	}
	// Функция реакций на события
	selectsActions(e) {
		const targetElement = e.target;
		const targetType = e.type;
		if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
			const selectItem = targetElement.closest('.select') ? targetElement.closest('.select') : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
			const originalSelect = this.getSelectElement(selectItem).originalSelect;
			if (targetType === 'click') {
				if (!originalSelect.disabled) {
					if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
						// Обработка клика на тег
						const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
						const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
						this.optionAction(selectItem, originalSelect, optionItem);
					} else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) {
						// Обработка клика на заголовок селекта
						this.selectAction(selectItem);
					} else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
						// Обработка клика на элемент селекта
						const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
						this.optionAction(selectItem, originalSelect, optionItem);
					}
				}
			} else if (targetType === 'focusin' || targetType === 'focusout') {
				if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) {
					targetType === 'focusin' ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
				}
			} else if (targetType === 'keydown' && e.code === 'Escape') {
				this.selectsСlose();
			}
		} else {
			this.selectsСlose();
		}
	}
	// Функция закрытия всех селектов
	selectsСlose(selectOneGroup) {
		const selectsGroup = selectOneGroup ? selectOneGroup : document;
		const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
		if (selectActiveItems.length) {
			selectActiveItems.forEach(selectActiveItem => {
				this.selectСlose(selectActiveItem);
			});
		}
	}
	// Функция закрытия конкретного селекта
	selectСlose(selectItem) {
		const originalSelect = this.getSelectElement(selectItem).originalSelect;
		const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
		if (!selectOptions.classList.contains('_slide')) {
			selectItem.classList.remove(this.selectClasses.classSelectOpen);
			(0,_files_functions_js__WEBPACK_IMPORTED_MODULE_0__._slideUp)(selectOptions, originalSelect.dataset.speed);
		}
	}
	// Функция открытия/закрытия конкретного селекта
	selectAction(selectItem) {
		const originalSelect = this.getSelectElement(selectItem).originalSelect;
		const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;

		// Если селекты помещенны в элемент с дата атрибутом data-one-select
		// закрываем все открытые селекты
		if (originalSelect.closest('[data-one-select]')) {
			const selectOneGroup = originalSelect.closest('[data-one-select]');
			this.selectsСlose(selectOneGroup);
		}

		if (!selectOptions.classList.contains('_slide')) {
			selectItem.classList.toggle(this.selectClasses.classSelectOpen);
			(0,_files_functions_js__WEBPACK_IMPORTED_MODULE_0__._slideToggle)(selectOptions, originalSelect.dataset.speed);
		}
	}
	// Сеттер значения заголовка селекта
	setSelectTitleValue(selectItem, originalSelect) {
		const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
		const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
		if (selectItemTitle) selectItemTitle.remove();
		selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
	}
	// Конструктор значения заголовка
	getSelectTitleValue(selectItem, originalSelect) {
		// Получаем выбранные текстовые значения
		let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
		// Обработка значений мультивыбора
		// Если включен режим тегов (указана настройка data-tags)
		if (originalSelect.multiple && originalSelect.hasAttribute('data-tags')) {
			selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map(option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`).join('');
			// Если вывод тегов во внешний блок
			if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
				document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
				if (originalSelect.hasAttribute('data-search')) selectTitleValue = false;
			}
		}
		// Значение(я) или плейсхолдер
		selectTitleValue = selectTitleValue.length ? selectTitleValue : (originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : '');
		// Если включен режим pseudo
		let pseudoAttribute = '';
		let pseudoAttributeClass = '';
		if (originalSelect.hasAttribute('data-pseudo-label')) {
			pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заполните атрибут"`;
			pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
		}
		// Если есть значение, добавляем класс
		this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
		// Возвращаем поле ввода для поиска или текст
		if (originalSelect.hasAttribute('data-search')) {
			// Выводим поле ввода для поиска
			return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`;
		} else {
			// Если выбран элемент со своим классом
			const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : '';
			// Выводим текстовое значение
			return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
		}
	}
	// Конструктор данных для значения заголовка
	getSelectElementContent(selectOption) {
		// Если для элемента указан вывод картинки или текста, перестраиваем конструкцию
		const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : '';
		const selectOptionDataHTML = selectOptionData.indexOf('img') >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
		let selectOptionContentHTML = ``;
		selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : '';
		selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : '';
		selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : '';
		selectOptionContentHTML += selectOptionData ? `</span>` : '';
		selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : '';
		selectOptionContentHTML += selectOption.textContent;
		selectOptionContentHTML += selectOptionData ? `</span>` : '';
		selectOptionContentHTML += selectOptionData ? `</span>` : '';
		return selectOptionContentHTML;
	}
	// Получение данных плейсхолдера
	getSelectPlaceholder(originalSelect) {
		const selectPlaceholder = Array.from(originalSelect.options).find(option => !option.value);
		if (selectPlaceholder) {
			return {
				value: selectPlaceholder.textContent,
				show: selectPlaceholder.hasAttribute("data-show"),
				label: {
					show: selectPlaceholder.hasAttribute("data-label"),
					text: selectPlaceholder.dataset.label
				}
			}
		}
	}
	// Получение данных из выбранных элементов
	getSelectedOptionsData(originalSelect, type) {
		// Получаем все выбранные объекты из select
		let selectedOptions = [];
		if (originalSelect.multiple) {
			// Если мультивыбор
			// Убираем плейсхолдер, получаем остальные выбранные элементы
			selectedOptions = Array.from(originalSelect.options).filter(option => option.value).filter(option => option.selected);
		} else {
			// Если единичный выбор
			selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
		}
		return {
			elements: selectedOptions.map(option => option),
			values: selectedOptions.filter(option => option.value).map(option => option.value),
			html: selectedOptions.map(option => this.getSelectElementContent(option))
		}
	}
	// Конструктор элементов списка
	getOptions(originalSelect) {
		// Настрока скролла элементов
		let selectOptionsScroll = originalSelect.hasAttribute('data-scroll') ? `data-simplebar` : '';
		let selectOptionsScrollHeight = originalSelect.dataset.scroll ? `style="max-height:${originalSelect.dataset.scroll}px"` : '';
		// Получаем элементы списка
		let selectOptions = Array.from(originalSelect.options);
		if (selectOptions.length > 0) {
			let selectOptionsHTML = ``;
			// Если указана настройка data-show, показываем плейсхолдер в списке
			if ((this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show) || originalSelect.multiple) {
				selectOptions = selectOptions.filter(option => option.value);
			}
			// Строим и выводим основную конструкцию
			selectOptionsHTML += selectOptionsScroll ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} class="${this.selectClasses.classSelectOptionsScroll}">` : '';
			selectOptions.forEach(selectOption => {
				// Получаем конструкцию конкретного элемента списка
				selectOptionsHTML += this.getOption(selectOption, originalSelect);
			});
			selectOptionsHTML += selectOptionsScroll ? `</div>` : '';
			return selectOptionsHTML;
		}
	}
	// Конструктор конкретного элемента списка
	getOption(selectOption, originalSelect) {
		// Если элемент выбран и включен режим мультивыбора, добавляем класс
		const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : '';
		// Если элемент выбрани и нет настройки data-show-selected, скрываем элемент
		const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute('data-show-selected') && !originalSelect.multiple ? `hidden` : ``;
		// Если для элемента указан класс добавляем
		const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : '';
		// Если указан режим ссылки
		const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
		const selectOptionLinkTarget = selectOption.hasAttribute('data-href-blank') ? `target="_blank"` : '';
		// Строим и возвращаем конструкцию элемента
		let selectOptionHTML = ``;
		selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
		selectOptionHTML += this.getSelectElementContent(selectOption);
		selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
		return selectOptionHTML;
	}
	// Сеттер элементов списка (options)
	setOptions(selectItem, originalSelect) {
		// Получаем объект тела псевдоселекта
		const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
		// Запускаем конструктор элементов списка (options) и добавляем в тело псевдоселекта
		selectItemOptions.innerHTML = this.getOptions(originalSelect);
	}
	// Обработчик клика на элемент списка
	optionAction(selectItem, originalSelect, optionItem) {
		if (originalSelect.multiple) { // Если мультивыбор
			// Выделяем классом элемент
			optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
			// Очищаем выбранные элементы 
			const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
			originalSelectSelectedItems.forEach(originalSelectSelectedItem => {
				originalSelectSelectedItem.removeAttribute('selected');
			});
			// Выбираем элементы 
			const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
			selectSelectedItems.forEach(selectSelectedItems => {
				originalSelect.querySelector(`option[value="${selectSelectedItems.dataset.value}"]`).setAttribute('selected', 'selected');
			});
		} else { // Если единичный выбор
			// Если не указана настройка data-show-selected, скрываем выбранный элемент
			if (!originalSelect.hasAttribute('data-show-selected')) {
				// Сначала все показать
				if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) {
					selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
				}
				// Скрываем выбранную
				optionItem.hidden = true;
			}
			originalSelect.value = optionItem.hasAttribute('data-value') ? optionItem.dataset.value : optionItem.textContent;
			this.selectAction(selectItem);
		}
		// Обновляем заголовок селекта
		this.setSelectTitleValue(selectItem, originalSelect);
		// Вызываем реакцию на изменение селекта
		this.setSelectChange(originalSelect);
	}
	// Реакция на измененение оригинального select
	selectChange(e) {
		const originalSelect = e.target;
		this.selectBuild(originalSelect);
		this.setSelectChange(originalSelect);
	}
	// Обработчик изменения в селекте
	setSelectChange(originalSelect) {
		// Моментальная валидация селекта
		if (originalSelect.hasAttribute('data-validate')) {
			_files_forms_forms_js__WEBPACK_IMPORTED_MODULE_2__.formValidate.validateInput(originalSelect);
		}
		// При изменении селекта отправляем форму
		if (originalSelect.hasAttribute('data-submit') && originalSelect.value) {
			let tempButton = document.createElement("button");
			tempButton.type = "submit";
			originalSelect.closest('form').append(tempButton);
			tempButton.click();
			tempButton.remove();
		}
		const selectItem = originalSelect.parentElement;
		// Вызов коллбэк функции
		this.selectCallback(selectItem, originalSelect);
	}
	// Обработчик disabled
	selectDisabled(selectItem, originalSelect) {
		if (originalSelect.disabled) {
			selectItem.classList.add(this.selectClasses.classSelectDisabled);
			this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
		} else {
			selectItem.classList.remove(this.selectClasses.classSelectDisabled);
			this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
		}
	}
	// Обработчик поиска по элементам списка
	searchActions(selectItem) {
		const originalSelect = this.getSelectElement(selectItem).originalSelect;
		const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
		const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
		const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption}`);
		const _this = this;
		selectInput.addEventListener("input", function () {
			selectOptionsItems.forEach(selectOptionsItem => {
				if (selectOptionsItem.textContent.toUpperCase().indexOf(selectInput.value.toUpperCase()) >= 0) {
					selectOptionsItem.hidden = false;
				} else {
					selectOptionsItem.hidden = true;
				}
			});
			// Если список закрыт открываем
			selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
		});
	}
	// Коллбэк функция
	selectCallback(selectItem, originalSelect) {
		document.dispatchEvent(new CustomEvent("selectCallback", {
			detail: {
				select: originalSelect
			}
		}));
	}
	// Логгинг в консоль
	setLogging(message) {
		this.config.logging ? (0,_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.FLS)(`[select]: ${message}`) : null;
	}
}
// Запускаем и добавляем в объект модулей
_files_modules_js__WEBPACK_IMPORTED_MODULE_1__.flsModules.select = new SelectConstructor({});




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0ce2b62a0e62cf2169c1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ODEwZjk2ODE5YzkwMjNlNzBiYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQSx1REFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQzNCOzs7Ozs7Ozs7Ozs7Ozs7QUNsTUE7QUFDMEY7QUFDekM7QUFDTTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELG1CQUFtQjtBQUN6RSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLG9DQUFvQyxJQUFJLDhKQUE4SjtBQUMzUTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsbUNBQW1DLHVCQUF1QixzQ0FBc0M7QUFDNUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxrQ0FBa0M7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVIQUF1SCwrQkFBK0IsWUFBWSwrRkFBK0Y7QUFDalE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELCtCQUErQixZQUFZLDJCQUEyQixpQ0FBaUMsd0JBQXdCO0FBQ25MO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsb0RBQW9ELEVBQUUsd0RBQXdEO0FBQzNLO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyw2REFBUTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxpRUFBWTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0lBQWdJLHNCQUFzQixnQkFBZ0IsYUFBYSx3QkFBd0IscUNBQXFDO0FBQ2hQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRixtQ0FBbUM7QUFDcEgsOEJBQThCLDBDQUEwQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0NBQW9DLFNBQVMsaUJBQWlCLFNBQVMsb0NBQW9DLHVEQUF1RCxpQkFBaUIsc0JBQXNCLGlCQUFpQixXQUFXLG9DQUFvQztBQUNsUyxJQUFJO0FBQ0o7QUFDQSxrS0FBa0ssc0VBQXNFO0FBQ3hPO0FBQ0EsMENBQTBDLG9DQUFvQyxTQUFTLGlCQUFpQixTQUFTLG9DQUFvQyxFQUFFLHFCQUFxQixpQkFBaUIsc0NBQXNDLEVBQUUsWUFBWSxJQUFJLGlCQUFpQjtBQUN0UTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDJCQUEyQjtBQUN0RixtRkFBbUYsaUJBQWlCO0FBQ3BHO0FBQ0EsZ0VBQWdFLGtDQUFrQztBQUNsRyxnRUFBZ0UsbUNBQW1DO0FBQ25HO0FBQ0E7QUFDQSxnRUFBZ0UsbUNBQW1DO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1Riw4QkFBOEI7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHFCQUFxQixFQUFFLDJCQUEyQixTQUFTLDRDQUE0QztBQUM3SjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsNkNBQTZDO0FBQ25JO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCwyQkFBMkI7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3QkFBd0IsRUFBRSxrQkFBa0IsUUFBUSxpQkFBaUIsZ0JBQWdCLG1CQUFtQixXQUFXLHFDQUFxQyxFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixpQkFBaUIsa0JBQWtCLFNBQVMscUNBQXFDLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLGdCQUFnQixtQkFBbUI7QUFDalo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxrQ0FBa0M7QUFDcEYsSUFBSTtBQUNKLElBQUksT0FBTztBQUNYO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywwREFBMEQ7QUFDOUYsaUNBQWlDLDBEQUEwRDtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsK0RBQVk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLHFDQUFxQztBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQUcsY0FBYyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLHlEQUFVLGtDQUFrQztBQUM1QztBQUNBOzs7Ozs7Ozs7VUNqZkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9saWJzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbihpKSDQmtC+0LQg0L/QvtC/0LDQtNCw0LXRgiDQsiDQuNGC0L7Qs9C+0LLRi9C5INGE0LDQudC7LFxyXG7RgtC+0LvRjNC60L4g0LrQvtCz0LTQsCDQstGL0LfQstCw0L3QsCDRhNGD0L3QutGG0LjRjyxcclxu0L3QsNC/0YDQuNC80LXRgCBmbHNGdW5jdGlvbnMuc3BvbGxlcnMoKTtcclxu0JjQu9C4INC60L7Qs9C00LAg0LjQvNC/0L7RgNGC0LjRgNC+0LLQsNC9INCy0LXRgdGMINGE0LDQudC7LFxyXG7QvdCw0L/RgNC40LzQtdGAIGltcG9ydCBcImZpbGVzL3NjcmlwdC5qc1wiO1xyXG7QndC10LjRgdC/0L7Qu9GM0LfRg9C10LzRi9C5ICjQvdC1INCy0YvQt9Cy0LDQvdC90YvQuSlcclxu0LrQvtC0INCyINC40YLQvtCz0L7QstGL0Lkg0YTQsNC50Lsg0L3QtSDQv9C+0L/QsNC00LDQtdGCLlxyXG5cclxu0JXRgdC70Lgg0LzRiyDRhdC+0YLQuNC8INC00L7QsdCw0LLQuNGC0Ywg0LzQvtC00YPQu9GMXHJcbtGB0LvQtdC00YPQtdGCINC10LPQviDRgNCw0YHRgdC60L7QvNC10L3RgtC40YDQvtCy0LDRgtGMXHJcbiovXHJcblxyXG4vLyDQktC60LvRjtGH0LjRgtGML9Cy0YvQutC70Y7Rh9C40YLRjCBGTFMgKEZ1bGwgTG9nZ2luZyBTeXN0ZW0pICjQsiDRgNCw0LHQvtGC0LUpXHJcbndpbmRvd1tcIkZMU1wiXSA9IHRydWU7XHJcblxyXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INC+0YHQvdC+0LLQvdC+0LPQviDRhNCw0LnQu9CwINGB0YLQuNC70LXQuVxyXG5pbXBvcnQgXCIuLi9zY3NzL3N0eWxlLnNjc3NcIjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vINCk0YPQvdC60YbQuNC+0L3QsNC7ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCAqIGFzIGZsc0Z1bmN0aW9ucyBmcm9tIFwiLi9maWxlcy9mdW5jdGlvbnMuanNcIjtcclxuXHJcbi8qINCf0YDQvtCy0LXRgNC60LAg0L/QvtC00LTQtdGA0LbQutC4IHdlYnAsINC00L7QsdCw0LLQu9C10L3QuNC1INC60LvQsNGB0YHQsCB3ZWJwINC40LvQuCBuby13ZWJwINC00LvRjyBIVE1MICovXHJcbi8qIChpKSDQvdC10L7QsdGF0L7QtNC40LzQviDQtNC70Y8g0LrQvtGA0YDQtdC60YLQvdC+0LPQviDQvtGC0L7QsdGA0LDQttC10L3QuNGPIHdlYnAg0LjQtyBjc3MgICovXHJcbmZsc0Z1bmN0aW9ucy5pc1dlYnAoKTtcclxuLyog0JTQvtCx0LDQstC70LXQvdC40LUg0LrQu9Cw0YHRgdCwIHRvdWNoINC00LvRjyBIVE1MINC10YHQu9C4INCx0YDQsNGD0LfQtdGAINC80L7QsdC40LvRjNC90YvQuSAqL1xyXG4vLyBmbHNGdW5jdGlvbnMuYWRkVG91Y2hDbGFzcygpO1xyXG4vKiDQlNC+0LHQsNCy0LvQtdC90LjQtSBsb2FkZWQg0LTQu9GPIEhUTUwg0L/QvtGB0LvQtSDQv9C+0LvQvdC+0Lkg0LfQsNCz0YDRg9C30LrQuCDRgdGC0YDQsNC90LjRhtGLICovXHJcbi8vIGZsc0Z1bmN0aW9ucy5hZGRMb2FkZWRDbGFzcygpO1xyXG4vKiDQnNC+0LTRg9C70Ywg0LTQu9GPINGA0LDQsdC+0YLRiyDRgSDQvNC10L3RjiAo0JHRg9GA0LPQtdGAKSAqL1xyXG5mbHNGdW5jdGlvbnMubWVudUluaXQoKTtcclxuLyog0KPRh9C10YIg0L/Qu9Cw0LLQsNGO0YnQtdC5INC/0LDQvdC10LvQuCDQvdCwINC80L7QsdC40LvRjNC90YvRhSDRg9GB0YLRgNC+0LnRgdGC0LLQsNGFINC/0YDQuCAxMDB2aCAqL1xyXG4vLyBmbHNGdW5jdGlvbnMuZnVsbFZIZml4KCk7XHJcblxyXG4vKlxyXG7QnNC+0LTRg9C70Ywg0YDQsNCx0L7RgtGLINGB0L4g0YHQv9C+0LnQu9C10YDQsNC80Lhcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtc3BvamxlcnkuaHRtbFxyXG7QodC90LjQv9C/0LXRgiAoSFRNTCk6IHNwb2xsZXJzXHJcbiovXHJcbi8vIGZsc0Z1bmN0aW9ucy5zcG9sbGVycygpO1xyXG5cclxuLypcclxu0JzQvtC00YPQu9GMINGA0LDQsdC+0YLRiyDRgSDRgtCw0LHQsNC80Lhcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtdGFieS5odG1sXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTogdGFic1xyXG4qL1xyXG4vLyBmbHNGdW5jdGlvbnMudGFicygpO1xyXG5cclxuLypcclxu0JzQvtC00YPQu9GMIFwi0L/QvtC60LDQt9Cw0YLRjCDQtdGJ0LVcIlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1wb2themF0LWVzaGhqby5odG1sXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTogc2hvd21vcmVcclxuKi9cclxuLy8gZmxzRnVuY3Rpb25zLnNob3dNb3JlKCk7XHJcblxyXG4vKlxyXG7Qn9C+0L/QsNC/0Ytcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvZnVua2Npb25hbC1wb3B1cC5odG1sXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTogcGxcclxuKi9cclxuLy8gaW1wb3J0ICcuL2xpYnMvcG9wdXAuanMnXHJcblxyXG4vKlxyXG7QnNC+0LTRg9C70Ywg0L/QsNGA0LDQu9C70LDQutGB0LAg0LzRi9GI0YzRjlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IFxyXG7QodC90LjQv9C/0LXRgiAoSFRNTCk6IFxyXG4qL1xyXG4vLyBpbXBvcnQgJy4vbGlicy9wYXJhbGxheC1tb3VzZS5qcydcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vINCg0LDQsdC+0YLQsCDRgSDRhNC+0YDQvNCw0LzQuCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQgKiBhcyBmbHNGb3JtcyBmcm9tIFwiLi9maWxlcy9mb3Jtcy9mb3Jtcy5qc1wiO1xyXG5cclxuLyog0KDQsNCx0L7RgtCwINGBINC/0L7Qu9GP0LzQuCDRhNC+0YDQvNGLICovXHJcbi8qINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL3JhYm90YS1zLWZvcm1hbWkuaHRtbCAqL1xyXG4vLyBmbHNGb3Jtcy5mb3JtRmllbGRzSW5pdCh7IHZpZXdQYXNzOiBmYWxzZSB9KTtcclxuXHJcbi8qIE/RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvNGLICovXHJcbi8qINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL3JhYm90YS1zLWZvcm1hbWkuaHRtbCAqL1xyXG4vLyBmbHNGb3Jtcy5mb3JtU3VibWl0KCk7XHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0YTQvtGA0LzRiyBcItC60L7Qu9C70LjRh9C10YHRgtCy0L5cIiAqL1xyXG4vLyBmbHNGb3Jtcy5mb3JtUXVhbnRpdHkoKTtcclxuXHJcbi8qINCc0L7QtNGD0LvRjCDQt9Cy0LXQt9C00L3QvtCz0L4g0YDQtdC50YLQuNC90LPQsCAqL1xyXG4vLyBmbHNGb3Jtcy5mb3JtUmF0aW5nKCk7XHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0YDQsNCx0L7RgtGLINGBIHNlbGVjdC4gKi9cclxuaW1wb3J0IFwiLi9saWJzL3NlbGVjdC5qc1wiO1xyXG5cclxuLyogKNCSINGA0LDQsdC+0YLQtSkg0JzQvtC00YPQu9GMINGA0LDQsdC+0YLRiyDRgSDQvNCw0YHQutCw0LzQuC4qL1xyXG4vKlxyXG7Qn9C+0LTQutC70Y7Rh9C10L3QuNC1INC4INC90LDRgdGC0YDQvtC50LrQsCDQstGL0L/QvtC70L3Rj9C10YLRgdGPINCyINGE0LDQudC70LUganMvZmlsZXMvZm9ybXMvaW5wdXRtYXNrLmpzXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTpcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0LvQsNCz0LjQvdCwOiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL2lucHV0bWFza1xyXG7QodC90LjQv9C/0LXRgihIVE1MKTpcclxuKi9cclxuLy8gaW1wb3J0IFwiLi9maWxlcy9mb3Jtcy9pbnB1dG1hc2suanNcIjtcclxuXHJcbi8qINCc0L7QtNGD0LvRjCDRgNCw0LHQvtGC0Ysg0YEg0L/QvtC70LfRg9C90LrQvtC8ICovXHJcbi8qXHJcbtCf0L7QtNC60LvRjtGH0LXQvdC40LUg0Lgg0L3QsNGB0YLRgNC+0LnQutCwINCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0LIg0YTQsNC50LvQtSBqcy9maWxlcy9mb3Jtcy9yYW5nZS5qc1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6XHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C70LDQs9C40L3QsDogaHR0cHM6Ly9yZWZyZXNobGVzcy5jb20vbm91aXNsaWRlci9cclxu0KHQvdC40L/Qv9C10YIgKEhUTUwpOiByYW5nZVxyXG4qL1xyXG5pbXBvcnQgXCIuL2ZpbGVzL2Zvcm1zL3JhbmdlLmpzXCI7XHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0YDQsNCx0L7RgtGLINGBINC/0L7QtNGB0LrQsNC30LrQsNC80LggKHRpcHB5KSAqL1xyXG4vKlxyXG7Qn9C+0LTQutC70Y7Rh9C10L3QuNC1INC/0LvQsNCz0LjQvdCwIFRpcHB5LmpzINC4INC90LDRgdGC0YDQvtC50LrQsCDQstGL0L/QvtC70L3Rj9C10YLRgdGPINCyINGE0LDQudC70LUganMvZmlsZXMvdGlwcHkuanNcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0L4g0YDQsNCx0L7RgtC1INCyINGI0LDQsdC70L7QvdC1OlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/Qu9Cw0LPQuNC90LA6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy9cclxu0KHQvdC40L/Qv9C10YIgKEhUTUwpOiB0aXAgKNC00L7QsdCw0LLQu9GP0LXRgiDQsNGC0YDQuNCx0YPRgiDRgSDQv9C+0LTRgdC60LDQt9C60L7QuSDQtNC70Y8gaHRtbCDRgtC10LPQsClcclxuKi9cclxuLy8gaW1wb3J0IFwiLi9maWxlcy90aXBweS5qc1wiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0KDQsNCx0L7RgtCwINGB0L4g0YHQu9Cw0LnQtNC10YDQvtC8IChTd2lwZXIpID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8qXHJcbtCd0LDRgdGC0YDQvtC50LrQsCDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC/0LvQsNCz0LjQvdCwINGB0LvQsNC50LTQtdGA0LAgU3dpcGVyINC4INC90L7QstGL0YUg0YHQu9Cw0LnQtNC10YDQvtCyINCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0LIg0YTQsNC50LvQtSBqcy9maWxlcy9zbGlkZXJzLmpzXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL3JhYm90YS1zby1zbGFqZGVyb20tc3dpcGVyLmh0bWxcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0LvQsNCz0LjQvdCwOiBodHRwczovL3N3aXBlcmpzLmNvbS9cclxu0KHQvdC40L/Qv9C10YIoSFRNTCk6IHN3aXBlclxyXG4qL1xyXG4vLyBpbXBvcnQgXCIuL2ZpbGVzL3NsaWRlcnMuanNcIjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vINCc0L7QtNGD0LvQuCDRgNCw0LHQvtGC0Ysg0YEg0L/RgNC+0LrRgNGD0YLQutC+0Lkg0YHRgtGA0LDQvdC40YbRiyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLypcclxu0JjQt9C80LXQvdC10L3QuNC1INC00LjQt9Cw0LnQvdCwINGB0LrRgNC+0LvQu9Cx0LDRgNCwXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTog0JIgSFRNTCDQtNC+0LHQsNCy0LvRj9C10Lwg0Log0LHQu9C+0LrRgyDQsNGC0YDQuNCx0YPRgiBkYXRhLXNpbXBsZWJhclxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/Qu9Cw0LPQuNC90LA6IGh0dHBzOi8vZ2l0aHViLmNvbS9HcnNtdG8vc2ltcGxlYmFyL3RyZWUvbWFzdGVyL3BhY2thZ2VzL3NpbXBsZWJhclxyXG7QodC90LjQv9C/0LXRgihIVE1MKTogXHJcbiovXHJcbi8vIGltcG9ydCAnLi9maWxlcy9zY3JvbGwvc2ltcGxlYmFyLmpzJztcclxuXHJcbi8vINCb0LXQvdC40LLQsNGPICjQvtGC0LvQvtC20LXQvdC90LDRjykg0LfQsNCz0YDRg9C30LrQsCDQutCw0YDRgtC40L3QvtC6XHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLWxlbml2YXlhLXBvZGdydXprYS1sYXp5LWxvYWRpbmcuaHRtbFxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/Qu9Cw0LPQuNC90LA6IGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJsb2svdmFuaWxsYS1sYXp5bG9hZFxyXG4vLyDQodC90LjQv9C/0LXRgihIVE1MKTpcclxuLy8gaW1wb3J0ICcuL2ZpbGVzL3Njcm9sbC9sYXp5bG9hZC5qcyc7XHJcblxyXG4vLyDQndCw0LHQu9GO0LTQsNGC0LXQu9GMINC30LAg0L7QsdGK0LXQutGC0LDQvNC4IGMg0LDRgtGA0LjQsdGD0YLQvtC8IGRhdGEtd2F0Y2hcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtbmFibGp1ZGF0ZWwtemEtcG95YXZsZW5pZW0tZWxlbWVudGEtcHJpLXNrcm9sbGUuaHRtbFxyXG4vLyDQodC90LjQv9C/0LXRgihIVE1MKTpcclxuLy8gaW1wb3J0ICcuL2xpYnMvd2F0Y2hlci5qcydcclxuXHJcbi8vINCk0YPQvdC60YbQuNC4INGA0LDQsdC+0YLRiyDRgdC60YDQvtC70LvQvtC8XHJcbmltcG9ydCAqIGFzIGZsc1Njcm9sbCBmcm9tIFwiLi9maWxlcy9zY3JvbGwvc2Nyb2xsLmpzXCI7XHJcblxyXG4vLyDQn9C70LDQstC90LDRjyDQvdCw0LLQuNCz0LDRhtC40Y8g0L/QviDRgdGC0YDQsNC90LjRhtC1XHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLXBsYXZub2otbmF2aWdhY2lpLXBvLXN0cmFuaWNlLmh0bWxcclxuLy8gZmxzU2Nyb2xsLnBhZ2VOYXZpZ2F0aW9uKCk7XHJcblxyXG4vLyDQpNGD0L3QutGG0LjQvtC90LDQuyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQutC70LDRgdGB0L7QsiDQuiDRhdC10LTQtdGA0YMg0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtVxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1kb2Jhdmxlbml5YS1rbGFzc292LWstc2hhcGtlLXByaS1wcm9rcnV0a2Utc3RyYW5pY3kuaHRtbFxyXG4vLyBmbHNTY3JvbGwuaGVhZGVyU2Nyb2xsKCk7XHJcblxyXG4vLyDQpNGD0L3QutGG0LjQvtC90LDQuyDQu9C40L/QutC+0LPQviDQsdC70L7QutCwXHJcbi8vIGZsc1Njcm9sbC5zdGlja3lCbG9jaygpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0JPQsNC70LXRgNC10Y8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLypcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0L4g0YDQsNCx0L7RgtC1INCyINGI0LDQsdC70L7QvdC1OiBcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0LvQsNCz0LjQvdCwOiBodHRwczovL3d3dy5saWdodGdhbGxlcnlqcy5jb20vZG9jcy9cclxu0KHQvdC40L/Qv9C10YIoSFRNTCk6XHJcbiovXHJcbi8vIGltcG9ydCBcIi4vZmlsZXMvZ2FsbGVyeS5qc1wiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0J/RgNC+0YfQuNC1INC/0LvQsNCz0LjQvdGLID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyog0JTQuNC90LDQvNC40YfQtdGB0LrQuNC5INCw0LTQsNC/0YLQuNCyICovXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL2RpbmFtaWNoZXNraWotYWRhcHRpdi5odG1sXHJcbi8vIGltcG9ydCBcIi4vbGlicy9keW5hbWljX2FkYXB0LmpzXCI7XHJcblxyXG4vKiDQpNC+0YDQvNCw0YLQuNGA0L7QstCw0L3QuNC1INGH0LjRgdC10LsgKi9cclxuLy8gaW1wb3J0ICcuL2xpYnMvd051bWIubWluLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vINCf0YDQvtGH0LXQtSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vKiDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDRhNCw0LnQu9GLINGB0L4g0YHQstC+0LjQvCDQutC+0LTQvtC8ICovXHJcbmltcG9ydCBcIi4vZmlsZXMvc2NyaXB0LmpzXCI7XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuIiwiLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRhNGD0L3QutGG0LjQvtC90LDQu9CwIFwi0KfQtdGA0YLQvtCz0L7QsiDQpNGA0LjQu9Cw0L3RgdC10YDQsFwiXHJcbmltcG9ydCB7IGlzTW9iaWxlLCBfc2xpZGVVcCwgX3NsaWRlRG93biwgX3NsaWRlVG9nZ2xlLCBGTFMgfSBmcm9tIFwiLi4vZmlsZXMvZnVuY3Rpb25zLmpzXCI7XHJcbmltcG9ydCB7IGZsc01vZHVsZXMgfSBmcm9tIFwiLi4vZmlsZXMvbW9kdWxlcy5qc1wiO1xyXG5pbXBvcnQgeyBmb3JtVmFsaWRhdGUgfSBmcm9tIFwiLi4vZmlsZXMvZm9ybXMvZm9ybXMuanNcIjtcclxuXHJcbi8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YTQsNC50LvQsCDRgdGC0LjQu9C10LlcclxuLy8g0JHQsNC30L7QstGL0LUg0YHRgtC40LvQuCDQv9C+0LrQu9GO0YfQsNGO0YLRgdGPINCyIHNyYy9zY3NzL2Zvcm1zLnNjc3NcclxuLy8g0KTQsNC50Lsg0LHQsNC30L7QstGL0YUg0YHRgtC40LvQtdC5IHNyYy9zY3NzL2Zvcm1zL3NlbGVjdC5zY3NzXHJcblxyXG4vKlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86XHJcbtCh0L3QuNC/0LXRgiAoSFRNTCk6IHNlbFxyXG4qL1xyXG4vKlxyXG4vLyDQndCw0YHRgtGA0L7QudC60Lhcclxu0JTQu9GPINGB0LXQu9C10LrRgtCwIChzZWxlY3QpOlxyXG5jbGFzcz1cItC40LzRjyDQutC70LDRgdGB0LBcIiAtINC80L7QtNC40YTQuNC60LDRgtC+0YAg0Log0LrQvtC90LrRgNC10YLQvdC+0LzRgyDRgdC10LvQtdC60YLRg1xyXG5tdWx0aXBsZSAtINC80YPQu9GM0YLQuNCy0YvQsdC+0YBcclxuZGF0YS1jbGFzcy1tb2RpZj0gXCLQuNC80Y8g0LzQvtC00LjRhNC40LrQsNGC0L7RgNCwXCJcclxuZGF0YS10YWdzIC0g0YDQtdC20LjQvCDRgtC10LPQvtCyLCDRgtC+0LvRjNC60L4g0LTQu9GPICjRgtC+0LvRjNC60L4g0LTQu9GPIG11bHRpcGxlKVxyXG5kYXRhLXNjcm9sbCAtINCy0LrQu9GO0YfQuNGCINC/0YDQvtC60YDRg9GC0LrRgyDQtNC70Y8g0LLRi9C/0LDQtNCw0Y7RidC10LPQviDRgdC/0LjRgdC60LAsINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+INC80L7QttC90L4g0L/QvtC00LrQu9GO0YfQuNGC0Ywg0LrQsNGB0YLQvtC80L3Ri9C5INGB0LrRgNC+0LvQuyBzaW1wbGViYXIg0LIgYXBwLmpzLiDQo9C60LDQt9Cw0L3QvdC+0LUg0YfQuNGB0LvQviDQtNC70Y8g0LDRgtGA0LjQsdGD0YLQsCDQvtCz0YDQsNC90LjRh9C40YIg0LLRi9GB0L7RgtGDXHJcbmRhdGEtY2hlY2tib3ggLSDRgdGC0LjQu9C40LfQsNGG0LjRjyDRjdC70LXQvNC10L3RgtC+0LIg0L/QviBjaGVja2JveCAo0YLQvtC70YzQutC+INC00LvRjyBtdWx0aXBsZSlcclxuZGF0YS1zaG93LXNlbGVjdGVkIC0g0L7RgtC60LvRjtGH0LDQtdGCINGB0LrRgNGL0YLQuNC1INCy0YvQsdGA0LDQvdC90L7Qs9C+INGN0LvQtdC80LXQvdGC0LBcclxuZGF0YS1zZWFyY2ggLSDQv9C+0LfQstC+0LvRj9C10YIg0LjRgdC60LDRgtGMINC/0L4g0LLRi9C/0LDQtNCw0Y7RidC10LzRgyDRgdC/0LjRgdC60YNcclxuZGF0YS1vcGVuIC0g0YHQtdC70LXQutGCINC+0YLQutGA0YvRgiDRgdGA0LDQt9GDXHJcbmRhdGEtc3VibWl0IC0g0L7RgtC/0YDQsNCy0LvRj9C10YIg0YTQvtGA0LzRgyDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INGB0LXQu9C10LrRgtCwXHJcblxyXG5kYXRhLW9uZS1zZWxlY3QgLSDRgdC10LvQtdC60YLRiyDQstC90YPRgtGA0Lgg0L7QsdC+0LvQvtGH0LrQuCDRgSDQsNGC0YDQuNCx0YPRgtC+0Lwg0LHRg9C00YPRgiDQv9C+0LrQsNC30YvQstCw0YLRjNGB0Y8g0YLQvtC70YzQutC+INC/0L4g0L7QtNC90L7QvNGDXHJcbmRhdGEtcHNldWRvLWxhYmVsIC0g0LTQvtCx0LDQstC70Y/QtdGCINC/0YHQtdCy0LTQvtGN0LvQtdC80LXQvdGCINC6INC30LDQs9C+0LvQvtCy0LrRgyDRgdC10LvQtdC60YLQsCDRgSDRg9C60LDQt9Cw0L3QvdGL0Lwg0YLQtdC60YHRgtC+0LxcclxuXHJcbtCU0LvRjyDQv9C70LXQudGB0YXQvtC70LTQtdGA0LAgKNCf0LvQtdC50YHRhdC+0LvQtNC10YAgLSDRjdGC0L4gb3B0aW9uINGBIHZhbHVlPVwiXCIpOlxyXG5kYXRhLWxhYmVsINC00LvRjyDQv9C70LXQudGB0YXQvtC70LTQtdGA0LAsINC00L7QsdCw0LLQu9GP0LXRgiBsYWJlbCDQuiDRgdC10LvQtdC60YLRg1xyXG5kYXRhLXNob3cg0LTQu9GPINC/0LvQtdC50YHRhdC+0LvQtNC10YDQsCwg0L/QvtC60LDQt9GL0LLQsNC10YIg0LXQs9C+INCyINGB0L/QuNGB0LrQtSAo0YLQvtC70YzQutC+INC00LvRjyDQtdC00LjQvdC40YfQvdC+0LPQviDQstGL0LHQvtGA0LApXHJcblxyXG7QlNC70Y8g0Y3Qu9C10LzQtdC90YLQsCAob3B0aW9uKTpcclxuZGF0YS1jbGFzcz1cItC40LzRjyDQutC70LDRgdGB0LBcIiAtINC00L7QsdCw0LLQu9GP0LXRgiDQutC70LDRgdGBXHJcbmRhdGEtYXNzZXQ9XCLQv9GD0YLRjCDQuiDQutCw0YDRgtC40L3QutC1INC40LvQuCDRgtC10LrRgdGCXCIgLSDQtNC+0LHQsNCy0LvRj9C10YIg0YHRgtGA0YPQutGC0YPRgNGDIDLRhSDQutC+0LvQvtC90L7QuiDQuCDQtNCw0L3QvdGL0LzQuFxyXG5kYXRhLWhyZWY9XCLQsNC00YDQtdGBINGB0YHRi9C70LrQuFwiIC0g0LTQvtCx0LDQstC70Y/QtdGCINGB0YHRi9C70LrRgyDQsiDRjdC70LXQvNC10L3RgiDRgdC/0LjRgdC60LBcclxuZGF0YS1ocmVmLWJsYW5rIC0g0L7RgtC60YDQvtC10YIg0YHRgdGL0LvQutGDINCyINC90L7QstC+0Lwg0L7QutC90LVcclxuKi9cclxuXHJcbi8qXHJcbi8vINCS0L7Qt9C80L7QttC90YvQtSDQtNC+0YDQsNCx0L7RgtC60Lg6XHJcbtC/0L7Qv9Cw0L8g0L3QsCDQvNC+0LHQuNC70LrQtVxyXG4qL1xyXG5cclxuLy8g0JrQu9Cw0YHRgSDQv9C+0YHRgtGA0L7QtdC90LjRjyBTZWxlY3RcclxuY2xhc3MgU2VsZWN0Q29uc3RydWN0b3Ige1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzLCBkYXRhID0gbnVsbCkge1xyXG5cdFx0bGV0IGRlZmF1bHRDb25maWcgPSB7XHJcblx0XHRcdGluaXQ6IHRydWUsXHJcblx0XHRcdGxvZ2dpbmc6IHRydWUsXHJcblx0XHR9XHJcblx0XHR0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgcHJvcHMpO1xyXG5cdFx0Ly8gQ1NTINC60LvQsNGB0YHRiyDQvNC+0LTRg9C70Y9cclxuXHRcdHRoaXMuc2VsZWN0Q2xhc3NlcyA9IHtcclxuXHRcdFx0Y2xhc3NTZWxlY3Q6IFwic2VsZWN0XCIsIC8vINCT0LvQsNCy0L3Ri9C5INCx0LvQvtC6XHJcblx0XHRcdGNsYXNzU2VsZWN0Qm9keTogXCJzZWxlY3RfX2JvZHlcIiwgLy8g0KLQtdC70L4g0YHQtdC70LXQutGC0LBcclxuXHRcdFx0Y2xhc3NTZWxlY3RUaXRsZTogXCJzZWxlY3RfX3RpdGxlXCIsIC8vINCX0LDQs9C+0LvQvtCy0L7QulxyXG5cdFx0XHRjbGFzc1NlbGVjdFZhbHVlOiBcInNlbGVjdF9fdmFsdWVcIiwgLy8g0JfQvdCw0YfQtdC90LjQtSDQsiDQt9Cw0LPQvtC70L7QstC60LVcclxuXHRcdFx0Y2xhc3NTZWxlY3RMYWJlbDogXCJzZWxlY3RfX2xhYmVsXCIsIC8vINCb0LDQsdC10LtcclxuXHRcdFx0Y2xhc3NTZWxlY3RJbnB1dDogXCJzZWxlY3RfX2lucHV0XCIsIC8vINCf0L7Qu9C1INCy0LLQvtC00LBcclxuXHRcdFx0Y2xhc3NTZWxlY3RUZXh0OiBcInNlbGVjdF9fdGV4dFwiLCAvLyDQntCx0L7Qu9C+0YfQutCwINGC0LXQutGB0YLQvtCy0YvRhSDQtNCw0L3QvdGL0YVcclxuXHRcdFx0Y2xhc3NTZWxlY3RMaW5rOiBcInNlbGVjdF9fbGlua1wiLCAvLyDQodGB0YvQu9C60LAg0LIg0Y3Qu9C10LzQtdC90YLQtVxyXG5cdFx0XHRjbGFzc1NlbGVjdE9wdGlvbnM6IFwic2VsZWN0X19vcHRpb25zXCIsIC8vINCS0YvQv9Cw0LTQsNGO0YnQuNC5INGB0L/QuNGB0L7QulxyXG5cdFx0XHRjbGFzc1NlbGVjdE9wdGlvbnNTY3JvbGw6IFwic2VsZWN0X19zY3JvbGxcIiwgLy8g0J7QsdC+0LvQvtGH0LrQsCDQv9GA0Lgg0YHQutGA0L7Qu9C70LVcclxuXHRcdFx0Y2xhc3NTZWxlY3RPcHRpb246IFwic2VsZWN0X19vcHRpb25cIiwgLy8g0J/Rg9C90LrRglxyXG5cdFx0XHRjbGFzc1NlbGVjdENvbnRlbnQ6IFwic2VsZWN0X19jb250ZW50XCIsIC8vINCe0LHQvtC70L7Rh9C60LAg0LrQvtC90YLQtdC90YLQsCDQsiDQt9Cw0LPQvtC70L7QstC60LVcclxuXHRcdFx0Y2xhc3NTZWxlY3RSb3c6IFwic2VsZWN0X19yb3dcIiwgLy8g0KDRj9C0XHJcblx0XHRcdGNsYXNzU2VsZWN0RGF0YTogXCJzZWxlY3RfX2Fzc2V0XCIsIC8vINCU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0LUg0LTQsNC90L3Ri9C1XHJcblx0XHRcdGNsYXNzU2VsZWN0RGlzYWJsZWQ6IFwiX3NlbGVjdC1kaXNhYmxlZFwiLCAvLyDQl9Cw0L/RgNC10YjQtdC9XHJcblx0XHRcdGNsYXNzU2VsZWN0VGFnOiBcIl9zZWxlY3QtdGFnXCIsIC8vINCa0LvQsNGB0YEg0YLQtdCz0LBcclxuXHRcdFx0Y2xhc3NTZWxlY3RPcGVuOiBcIl9zZWxlY3Qtb3BlblwiLCAvLyDQodC/0LjRgdC+0Log0L7RgtC60YDRi9GCXHJcblx0XHRcdGNsYXNzU2VsZWN0QWN0aXZlOiBcIl9zZWxlY3QtYWN0aXZlXCIsIC8vINCh0L/QuNGB0L7QuiDQstGL0LHRgNCw0L1cclxuXHRcdFx0Y2xhc3NTZWxlY3RGb2N1czogXCJfc2VsZWN0LWZvY3VzXCIsIC8vINCh0L/QuNGB0L7QuiDQsiDRhNC+0LrRg9GB0LVcclxuXHRcdFx0Y2xhc3NTZWxlY3RNdWx0aXBsZTogXCJfc2VsZWN0LW11bHRpcGxlXCIsIC8vINCc0YPQu9GM0YLQuNCy0YvQsdC+0YBcclxuXHRcdFx0Y2xhc3NTZWxlY3RDaGVja0JveDogXCJfc2VsZWN0LWNoZWNrYm94XCIsIC8vINCh0YLQuNC70Ywg0YfQtdC60LHQvtC60YHQsFxyXG5cdFx0XHRjbGFzc1NlbGVjdE9wdGlvblNlbGVjdGVkOiBcIl9zZWxlY3Qtc2VsZWN0ZWRcIiwgLy8g0JLRi9Cx0YDQsNC90L3Ri9C5INC/0YPQvdC60YJcclxuXHRcdFx0Y2xhc3NTZWxlY3RQc2V1ZG9MYWJlbDogXCJfc2VsZWN0LXBzZXVkby1sYWJlbFwiLCAvLyDQn9GB0LXQstC00L7Qu9C10LnQsdC7XHJcblx0XHR9XHJcblx0XHR0aGlzLl90aGlzID0gdGhpcztcclxuXHRcdC8vINCX0LDQv9GD0YHQuiDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuFxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmluaXQpIHtcclxuXHRcdFx0Ly8g0J/QvtC70YPRh9C10L3QuNC1INCy0YHQtdGFIHNlbGVjdCDQvdCwINGB0YLRgNCw0L3QuNGG0LVcclxuXHRcdFx0Y29uc3Qgc2VsZWN0SXRlbXMgPSBkYXRhID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChkYXRhKSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG5cdFx0XHRpZiAoc2VsZWN0SXRlbXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RzSW5pdChzZWxlY3RJdGVtcyk7XHJcblx0XHRcdFx0dGhpcy5zZXRMb2dnaW5nKGDQn9GA0L7RgdC90YPQu9GB0Y8sINC/0L7RgdGC0YDQvtC40Lsg0YHQtdC70LXQutGC0L7QsjogKCR7c2VsZWN0SXRlbXMubGVuZ3RofSlgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnNldExvZ2dpbmcoJ9Ch0L/Qu9GOLCDQvdC10YIg0L3QuCDQvtC00L3QvtCz0L4gc2VsZWN0IHp6WlpaelpaeicpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAgQ1NTINC60LvQsNGB0YHQsFxyXG5cdGdldFNlbGVjdENsYXNzKGNsYXNzTmFtZSkge1xyXG5cdFx0cmV0dXJuIGAuJHtjbGFzc05hbWV9YDtcclxuXHR9XHJcblx0Ly8g0JPQtdGC0YLQtdGAINGN0LvQtdC80LXQvdGC0L7QsiDQv9GB0LXQstC00L7RgdC10LvQtdC60YLQsFxyXG5cdGdldFNlbGVjdEVsZW1lbnQoc2VsZWN0SXRlbSwgY2xhc3NOYW1lKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRvcmlnaW5hbFNlbGVjdDogc2VsZWN0SXRlbS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuXHRcdFx0c2VsZWN0RWxlbWVudDogc2VsZWN0SXRlbS5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0U2VsZWN0Q2xhc3MoY2xhc3NOYW1lKSksXHJcblx0XHR9XHJcblx0fVxyXG5cdC8vINCk0YPQvdC60YbQuNGPINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INCy0YHQtdGFINGB0LXQu9C10LrRgtC+0LJcclxuXHRzZWxlY3RzSW5pdChzZWxlY3RJdGVtcykge1xyXG5cdFx0c2VsZWN0SXRlbXMuZm9yRWFjaCgob3JpZ2luYWxTZWxlY3QsIGluZGV4KSA9PiB7XHJcblx0XHRcdHRoaXMuc2VsZWN0SW5pdChvcmlnaW5hbFNlbGVjdCwgaW5kZXggKyAxKTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8g0J7QsdGA0LDQsdC+0YLRh9C40LrQuCDRgdC+0LHRi9GC0LjQuS4uLlxyXG5cdFx0Ly8gLi4u0L/RgNC4INC60LvQuNC60LVcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RzQWN0aW9ucyhlKTtcclxuXHRcdH0uYmluZCh0aGlzKSk7XHJcblx0XHQvLyAuLi7Qv9GA0Lgg0L3QsNC20LDRgtC40Lgg0LrQu9Cw0LLQuNGI0LhcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdHNBY3Rpb25zKGUpO1xyXG5cdFx0fS5iaW5kKHRoaXMpKTtcclxuXHRcdC8vIC4uLtC/0YDQuCDRhNC+0LrRg9GB0LVcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdHNBY3Rpb25zKGUpO1xyXG5cdFx0fS5iaW5kKHRoaXMpKTtcclxuXHRcdC8vIC4uLtC/0YDQuCDQv9C+0YLQtdGA0LUg0YTQvtC60YPRgdCwXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0c0FjdGlvbnMoZSk7XHJcblx0XHR9LmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHQvLyDQpNGD0L3QutGG0LjRjyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQutC+0L3QutGA0LXRgtC90L7Qs9C+INGB0LXQu9C10LrRgtCwXHJcblx0c2VsZWN0SW5pdChvcmlnaW5hbFNlbGVjdCwgaW5kZXgpIHtcclxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcclxuXHRcdC8vINCh0L7Qt9C00LDQtdC8INC+0LHQvtC70L7Rh9C60YNcclxuXHRcdGxldCBzZWxlY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNlbGVjdEl0ZW0uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3QpO1xyXG5cdFx0Ly8g0JLRi9Cy0L7QtNC40Lwg0L7QsdC+0LvQvtGH0LrRgyDQv9C10YDQtdC0INC+0YDQuNCz0LjQvdCw0LvRjNC90YvQvCDRgdC10LvQtdC60YLQvtC8XHJcblx0XHRvcmlnaW5hbFNlbGVjdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxlY3RJdGVtLCBvcmlnaW5hbFNlbGVjdCk7XHJcblx0XHQvLyDQn9C+0LzQtdGJ0LDQtdC8INC+0YDQuNCz0LjQvdCw0LvRjNC90YvQuSDRgdC10LvQtdC60YIg0LIg0L7QsdC+0LvQvtGH0LrRg1xyXG5cdFx0c2VsZWN0SXRlbS5hcHBlbmRDaGlsZChvcmlnaW5hbFNlbGVjdCk7XHJcblx0XHQvLyDQodC60YDRi9Cy0LDQtdC8INC+0YDQuNCz0LjQvdCw0LvRjNC90YvQuSDRgdC10LvQtdC60YJcclxuXHRcdG9yaWdpbmFsU2VsZWN0LmhpZGRlbiA9IHRydWU7XHJcblx0XHQvLyDQn9GA0LjRgdCy0LDQuNCy0LDQtdC8INGD0L3QuNC60LDQu9GM0L3Ri9C5IElEXHJcblx0XHRpbmRleCA/IG9yaWdpbmFsU2VsZWN0LmRhdGFzZXQuaWQgPSBpbmRleCA6IG51bGw7XHJcblxyXG5cdFx0Ly8g0KDQsNCx0L7RgtCwINGBINC/0LvQtdC50YHRhdC+0LvQtNC10YDQvtC8XHJcblx0XHRpZiAodGhpcy5nZXRTZWxlY3RQbGFjZWhvbGRlcihvcmlnaW5hbFNlbGVjdCkpIHtcclxuXHRcdFx0Ly8g0JfQsNC/0L7QvNC40L3QsNC10Lwg0L/Qu9C10LnRgdGF0L7Qu9C00LXRgFxyXG5cdFx0XHRvcmlnaW5hbFNlbGVjdC5kYXRhc2V0LnBsYWNlaG9sZGVyID0gdGhpcy5nZXRTZWxlY3RQbGFjZWhvbGRlcihvcmlnaW5hbFNlbGVjdCkudmFsdWU7XHJcblx0XHRcdC8vINCV0YHQu9C4INCy0LrQu9GO0YfQtdC9INGA0LXQttC40LwgbGFiZWxcclxuXHRcdFx0aWYgKHRoaXMuZ2V0U2VsZWN0UGxhY2Vob2xkZXIob3JpZ2luYWxTZWxlY3QpLmxhYmVsLnNob3cpIHtcclxuXHRcdFx0XHRjb25zdCBzZWxlY3RJdGVtVGl0bGUgPSB0aGlzLmdldFNlbGVjdEVsZW1lbnQoc2VsZWN0SXRlbSwgdGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0VGl0bGUpLnNlbGVjdEVsZW1lbnQ7XHJcblx0XHRcdFx0c2VsZWN0SXRlbVRpdGxlLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0TGFiZWx9XCI+JHt0aGlzLmdldFNlbGVjdFBsYWNlaG9sZGVyKG9yaWdpbmFsU2VsZWN0KS5sYWJlbC50ZXh0ID8gdGhpcy5nZXRTZWxlY3RQbGFjZWhvbGRlcihvcmlnaW5hbFNlbGVjdCkubGFiZWwudGV4dCA6IHRoaXMuZ2V0U2VsZWN0UGxhY2Vob2xkZXIob3JpZ2luYWxTZWxlY3QpLnZhbHVlfTwvc3Bhbj5gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8g0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQvtGB0L3QvtCy0L3Ri9GFINGN0LvQtdC80LXQvdGC0L7QslxyXG5cdFx0c2VsZWN0SXRlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8ZGl2IGNsYXNzPVwiJHt0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RCb2R5fVwiPjxkaXYgaGlkZGVuIGNsYXNzPVwiJHt0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RPcHRpb25zfVwiPjwvZGl2PjwvZGl2PmApO1xyXG5cdFx0Ly8g0JfQsNC/0YPRgdC60LDQtdC8INC60L7QvdGB0YLRgNGD0LrRgtC+0YAg0L/RgdC10LLQtNC+0YHQtdC70LXQutGC0LBcclxuXHRcdHRoaXMuc2VsZWN0QnVpbGQob3JpZ2luYWxTZWxlY3QpO1xyXG5cclxuXHRcdC8vINCX0LDQv9C+0LzQuNC90LDQtdC8INGB0LrQvtGA0L7RgdGC0YxcclxuXHRcdG9yaWdpbmFsU2VsZWN0LmRhdGFzZXQuc3BlZWQgPSBvcmlnaW5hbFNlbGVjdC5kYXRhc2V0LnNwZWVkID8gb3JpZ2luYWxTZWxlY3QuZGF0YXNldC5zcGVlZCA6IFwiMTUwXCI7XHJcblx0XHQvLyDQodC+0LHRi9GC0LjQtSDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INC+0YDQuNCz0LjQvdCw0LvRjNC90L7Qs9C+IHNlbGVjdFxyXG5cdFx0b3JpZ2luYWxTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0X3RoaXMuc2VsZWN0Q2hhbmdlKGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdC8vINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0L/RgdC10LLQtNC+0YHQtdC70LXQutGC0LBcclxuXHRzZWxlY3RCdWlsZChvcmlnaW5hbFNlbGVjdCkge1xyXG5cdFx0Y29uc3Qgc2VsZWN0SXRlbSA9IG9yaWdpbmFsU2VsZWN0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHQvLyDQlNC+0LHQsNCy0LvRj9C10LwgSUQg0YHQtdC70LXQutGC0LBcclxuXHRcdHNlbGVjdEl0ZW0uZGF0YXNldC5pZCA9IG9yaWdpbmFsU2VsZWN0LmRhdGFzZXQuaWQ7XHJcblx0XHQvLyDQn9C+0LvRg9GH0LDQtdC8INC60LvQsNGB0YEg0L7RgNC40LPQuNC90LDQu9GM0L3QvtCz0L4g0YHQtdC70LXQutGC0LAsINGB0L7Qt9C00LDQtdC8INC80L7QtNC40YTQuNC60LDRgtC+0YAg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INC10LPQvlxyXG5cdFx0b3JpZ2luYWxTZWxlY3QuZGF0YXNldC5jbGFzc01vZGlmID8gc2VsZWN0SXRlbS5jbGFzc0xpc3QuYWRkKGBzZWxlY3RfJHtvcmlnaW5hbFNlbGVjdC5kYXRhc2V0LmNsYXNzTW9kaWZ9YCkgOiBudWxsO1xyXG5cdFx0Ly8g0JXRgdC70Lgg0LzQvdC+0LbQtdGB0YLQstC10L3QvdGL0Lkg0LLRi9Cx0L7RgCwg0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YFcclxuXHRcdG9yaWdpbmFsU2VsZWN0Lm11bHRpcGxlID8gc2VsZWN0SXRlbS5jbGFzc0xpc3QuYWRkKHRoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdE11bHRpcGxlKSA6IHNlbGVjdEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RNdWx0aXBsZSk7XHJcblx0XHQvLyBD0YLQuNC70LjQt9Cw0YbQuNGPINGN0LvQtdC80LXQvdGC0L7QsiDQv9C+0LQgY2hlY2tib3ggKNGC0L7Qu9GM0LrQviDQtNC70Y8gbXVsdGlwbGUpXHJcblx0XHRvcmlnaW5hbFNlbGVjdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtY2hlY2tib3gnKSAmJiBvcmlnaW5hbFNlbGVjdC5tdWx0aXBsZSA/IHNlbGVjdEl0ZW0uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RDaGVja0JveCkgOiBzZWxlY3RJdGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0Q2hlY2tCb3gpO1xyXG5cdFx0Ly8g0KHQtdGC0YLQtdGAINC30L3QsNGH0LXQvdC40Y8g0LfQsNCz0L7Qu9C+0LLQutCwINGB0LXQu9C10LrRgtCwXHJcblx0XHR0aGlzLnNldFNlbGVjdFRpdGxlVmFsdWUoc2VsZWN0SXRlbSwgb3JpZ2luYWxTZWxlY3QpO1xyXG5cdFx0Ly8g0KHQtdGC0YLQtdGAINGN0LvQtdC80LXQvdGC0L7QsiDRgdC/0LjRgdC60LAgKG9wdGlvbnMpXHJcblx0XHR0aGlzLnNldE9wdGlvbnMoc2VsZWN0SXRlbSwgb3JpZ2luYWxTZWxlY3QpO1xyXG5cdFx0Ly8g0JXRgdC70Lgg0LLQutC70Y7Rh9C10L3QsCDQvtC/0YbQuNGPINC/0L7QuNGB0LrQsCBkYXRhLXNlYXJjaCwg0LfQsNC/0YPRgdC60LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6XHJcblx0XHRvcmlnaW5hbFNlbGVjdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VhcmNoJykgPyB0aGlzLnNlYXJjaEFjdGlvbnMoc2VsZWN0SXRlbSkgOiBudWxsO1xyXG5cdFx0Ly8g0JXRgdC70Lgg0YPQutCw0LfQsNC90LAg0L3QsNGB0YLRgNC+0LnQutCwIGRhdGEtb3Blbiwg0L7RgtC60YDRi9Cy0LDQtdC8INGB0LXQu9C10LrRglxyXG5cdFx0b3JpZ2luYWxTZWxlY3QuaGFzQXR0cmlidXRlKCdkYXRhLW9wZW4nKSA/IHRoaXMuc2VsZWN0QWN0aW9uKHNlbGVjdEl0ZW0pIDogbnVsbDtcclxuXHRcdC8vINCe0LHRgNCw0LHQvtGC0YfQuNC6IGRpc2FibGVkXHJcblx0XHR0aGlzLnNlbGVjdERpc2FibGVkKHNlbGVjdEl0ZW0sIG9yaWdpbmFsU2VsZWN0KTtcclxuXHR9XHJcblx0Ly8g0KTRg9C90LrRhtC40Y8g0YDQtdCw0LrRhtC40Lkg0L3QsCDRgdC+0LHRi9GC0LjRj1xyXG5cdHNlbGVjdHNBY3Rpb25zKGUpIHtcclxuXHRcdGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcclxuXHRcdGNvbnN0IHRhcmdldFR5cGUgPSBlLnR5cGU7XHJcblx0XHRpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KHRoaXMuZ2V0U2VsZWN0Q2xhc3ModGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0KSkgfHwgdGFyZ2V0RWxlbWVudC5jbG9zZXN0KHRoaXMuZ2V0U2VsZWN0Q2xhc3ModGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0VGFnKSkpIHtcclxuXHRcdFx0Y29uc3Qgc2VsZWN0SXRlbSA9IHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLnNlbGVjdCcpID8gdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuc2VsZWN0JykgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3R9W2RhdGEtaWQ9XCIke3RhcmdldEVsZW1lbnQuY2xvc2VzdCh0aGlzLmdldFNlbGVjdENsYXNzKHRoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdFRhZykpLmRhdGFzZXQuc2VsZWN0SWR9XCJdYCk7XHJcblx0XHRcdGNvbnN0IG9yaWdpbmFsU2VsZWN0ID0gdGhpcy5nZXRTZWxlY3RFbGVtZW50KHNlbGVjdEl0ZW0pLm9yaWdpbmFsU2VsZWN0O1xyXG5cdFx0XHRpZiAodGFyZ2V0VHlwZSA9PT0gJ2NsaWNrJykge1xyXG5cdFx0XHRcdGlmICghb3JpZ2luYWxTZWxlY3QuZGlzYWJsZWQpIHtcclxuXHRcdFx0XHRcdGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QodGhpcy5nZXRTZWxlY3RDbGFzcyh0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RUYWcpKSkge1xyXG5cdFx0XHRcdFx0XHQvLyDQntCx0YDQsNCx0L7RgtC60LAg0LrQu9C40LrQsCDQvdCwINGC0LXQs1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXRUYWcgPSB0YXJnZXRFbGVtZW50LmNsb3Nlc3QodGhpcy5nZXRTZWxlY3RDbGFzcyh0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RUYWcpKTtcclxuXHRcdFx0XHRcdFx0Y29uc3Qgb3B0aW9uSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdH1bZGF0YS1pZD1cIiR7dGFyZ2V0VGFnLmRhdGFzZXQuc2VsZWN0SWR9XCJdIC5zZWxlY3RfX29wdGlvbltkYXRhLXZhbHVlPVwiJHt0YXJnZXRUYWcuZGF0YXNldC52YWx1ZX1cIl1gKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25BY3Rpb24oc2VsZWN0SXRlbSwgb3JpZ2luYWxTZWxlY3QsIG9wdGlvbkl0ZW0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QodGhpcy5nZXRTZWxlY3RDbGFzcyh0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RUaXRsZSkpKSB7XHJcblx0XHRcdFx0XHRcdC8vINCe0LHRgNCw0LHQvtGC0LrQsCDQutC70LjQutCwINC90LAg0LfQsNCz0L7Qu9C+0LLQvtC6INGB0LXQu9C10LrRgtCwXHJcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0QWN0aW9uKHNlbGVjdEl0ZW0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QodGhpcy5nZXRTZWxlY3RDbGFzcyh0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RPcHRpb24pKSkge1xyXG5cdFx0XHRcdFx0XHQvLyDQntCx0YDQsNCx0L7RgtC60LAg0LrQu9C40LrQsCDQvdCwINGN0LvQtdC80LXQvdGCINGB0LXQu9C10LrRgtCwXHJcblx0XHRcdFx0XHRcdGNvbnN0IG9wdGlvbkl0ZW0gPSB0YXJnZXRFbGVtZW50LmNsb3Nlc3QodGhpcy5nZXRTZWxlY3RDbGFzcyh0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RPcHRpb24pKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25BY3Rpb24oc2VsZWN0SXRlbSwgb3JpZ2luYWxTZWxlY3QsIG9wdGlvbkl0ZW0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmICh0YXJnZXRUeXBlID09PSAnZm9jdXNpbicgfHwgdGFyZ2V0VHlwZSA9PT0gJ2ZvY3Vzb3V0Jykge1xyXG5cdFx0XHRcdGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QodGhpcy5nZXRTZWxlY3RDbGFzcyh0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3QpKSkge1xyXG5cdFx0XHRcdFx0dGFyZ2V0VHlwZSA9PT0gJ2ZvY3VzaW4nID8gc2VsZWN0SXRlbS5jbGFzc0xpc3QuYWRkKHRoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdEZvY3VzKSA6IHNlbGVjdEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RGb2N1cyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHRhcmdldFR5cGUgPT09ICdrZXlkb3duJyAmJiBlLmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3Rz0KFsb3NlKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0c9ChbG9zZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyDQpNGD0L3QutGG0LjRjyDQt9Cw0LrRgNGL0YLQuNGPINCy0YHQtdGFINGB0LXQu9C10LrRgtC+0LJcclxuXHRzZWxlY3Rz0KFsb3NlKHNlbGVjdE9uZUdyb3VwKSB7XHJcblx0XHRjb25zdCBzZWxlY3RzR3JvdXAgPSBzZWxlY3RPbmVHcm91cCA/IHNlbGVjdE9uZUdyb3VwIDogZG9jdW1lbnQ7XHJcblx0XHRjb25zdCBzZWxlY3RBY3RpdmVJdGVtcyA9IHNlbGVjdHNHcm91cC5xdWVyeVNlbGVjdG9yQWxsKGAke3RoaXMuZ2V0U2VsZWN0Q2xhc3ModGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0KX0ke3RoaXMuZ2V0U2VsZWN0Q2xhc3ModGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0T3Blbil9YCk7XHJcblx0XHRpZiAoc2VsZWN0QWN0aXZlSXRlbXMubGVuZ3RoKSB7XHJcblx0XHRcdHNlbGVjdEFjdGl2ZUl0ZW1zLmZvckVhY2goc2VsZWN0QWN0aXZlSXRlbSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3TQoWxvc2Uoc2VsZWN0QWN0aXZlSXRlbSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyDQpNGD0L3QutGG0LjRjyDQt9Cw0LrRgNGL0YLQuNGPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0YHQtdC70LXQutGC0LBcclxuXHRzZWxlY3TQoWxvc2Uoc2VsZWN0SXRlbSkge1xyXG5cdFx0Y29uc3Qgb3JpZ2luYWxTZWxlY3QgPSB0aGlzLmdldFNlbGVjdEVsZW1lbnQoc2VsZWN0SXRlbSkub3JpZ2luYWxTZWxlY3Q7XHJcblx0XHRjb25zdCBzZWxlY3RPcHRpb25zID0gdGhpcy5nZXRTZWxlY3RFbGVtZW50KHNlbGVjdEl0ZW0sIHRoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdE9wdGlvbnMpLnNlbGVjdEVsZW1lbnQ7XHJcblx0XHRpZiAoIXNlbGVjdE9wdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG5cdFx0XHRzZWxlY3RJdGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0T3Blbik7XHJcblx0XHRcdF9zbGlkZVVwKHNlbGVjdE9wdGlvbnMsIG9yaWdpbmFsU2VsZWN0LmRhdGFzZXQuc3BlZWQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyDQpNGD0L3QutGG0LjRjyDQvtGC0LrRgNGL0YLQuNGPL9C30LDQutGA0YvRgtC40Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDRgdC10LvQtdC60YLQsFxyXG5cdHNlbGVjdEFjdGlvbihzZWxlY3RJdGVtKSB7XHJcblx0XHRjb25zdCBvcmlnaW5hbFNlbGVjdCA9IHRoaXMuZ2V0U2VsZWN0RWxlbWVudChzZWxlY3RJdGVtKS5vcmlnaW5hbFNlbGVjdDtcclxuXHRcdGNvbnN0IHNlbGVjdE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdEVsZW1lbnQoc2VsZWN0SXRlbSwgdGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0T3B0aW9ucykuc2VsZWN0RWxlbWVudDtcclxuXHJcblx0XHQvLyDQldGB0LvQuCDRgdC10LvQtdC60YLRiyDQv9C+0LzQtdGJ0LXQvdC90Ysg0LIg0Y3Qu9C10LzQtdC90YIg0YEg0LTQsNGC0LAg0LDRgtGA0LjQsdGD0YLQvtC8IGRhdGEtb25lLXNlbGVjdFxyXG5cdFx0Ly8g0LfQsNC60YDRi9Cy0LDQtdC8INCy0YHQtSDQvtGC0LrRgNGL0YLRi9C1INGB0LXQu9C10LrRgtGLXHJcblx0XHRpZiAob3JpZ2luYWxTZWxlY3QuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKSkge1xyXG5cdFx0XHRjb25zdCBzZWxlY3RPbmVHcm91cCA9IG9yaWdpbmFsU2VsZWN0LmNsb3Nlc3QoJ1tkYXRhLW9uZS1zZWxlY3RdJyk7XHJcblx0XHRcdHRoaXMuc2VsZWN0c9ChbG9zZShzZWxlY3RPbmVHcm91cCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFzZWxlY3RPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuXHRcdFx0c2VsZWN0SXRlbS5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdE9wZW4pO1xyXG5cdFx0XHRfc2xpZGVUb2dnbGUoc2VsZWN0T3B0aW9ucywgb3JpZ2luYWxTZWxlY3QuZGF0YXNldC5zcGVlZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vINCh0LXRgtGC0LXRgCDQt9C90LDRh9C10L3QuNGPINC30LDQs9C+0LvQvtCy0LrQsCDRgdC10LvQtdC60YLQsFxyXG5cdHNldFNlbGVjdFRpdGxlVmFsdWUoc2VsZWN0SXRlbSwgb3JpZ2luYWxTZWxlY3QpIHtcclxuXHRcdGNvbnN0IHNlbGVjdEl0ZW1Cb2R5ID0gdGhpcy5nZXRTZWxlY3RFbGVtZW50KHNlbGVjdEl0ZW0sIHRoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdEJvZHkpLnNlbGVjdEVsZW1lbnQ7XHJcblx0XHRjb25zdCBzZWxlY3RJdGVtVGl0bGUgPSB0aGlzLmdldFNlbGVjdEVsZW1lbnQoc2VsZWN0SXRlbSwgdGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0VGl0bGUpLnNlbGVjdEVsZW1lbnQ7XHJcblx0XHRpZiAoc2VsZWN0SXRlbVRpdGxlKSBzZWxlY3RJdGVtVGl0bGUucmVtb3ZlKCk7XHJcblx0XHRzZWxlY3RJdGVtQm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHRoaXMuZ2V0U2VsZWN0VGl0bGVWYWx1ZShzZWxlY3RJdGVtLCBvcmlnaW5hbFNlbGVjdCkpO1xyXG5cdH1cclxuXHQvLyDQmtC+0L3RgdGC0YDRg9C60YLQvtGAINC30L3QsNGH0LXQvdC40Y8g0LfQsNCz0L7Qu9C+0LLQutCwXHJcblx0Z2V0U2VsZWN0VGl0bGVWYWx1ZShzZWxlY3RJdGVtLCBvcmlnaW5hbFNlbGVjdCkge1xyXG5cdFx0Ly8g0J/QvtC70YPRh9Cw0LXQvCDQstGL0LHRgNCw0L3QvdGL0LUg0YLQtdC60YHRgtC+0LLRi9C1INC30L3QsNGH0LXQvdC40Y9cclxuXHRcdGxldCBzZWxlY3RUaXRsZVZhbHVlID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnNEYXRhKG9yaWdpbmFsU2VsZWN0LCAyKS5odG1sO1xyXG5cdFx0Ly8g0J7QsdGA0LDQsdC+0YLQutCwINC30L3QsNGH0LXQvdC40Lkg0LzRg9C70YzRgtC40LLRi9Cx0L7RgNCwXHJcblx0XHQvLyDQldGB0LvQuCDQstC60LvRjtGH0LXQvSDRgNC10LbQuNC8INGC0LXQs9C+0LIgKNGD0LrQsNC30LDQvdCwINC90LDRgdGC0YDQvtC50LrQsCBkYXRhLXRhZ3MpXHJcblx0XHRpZiAob3JpZ2luYWxTZWxlY3QubXVsdGlwbGUgJiYgb3JpZ2luYWxTZWxlY3QuaGFzQXR0cmlidXRlKCdkYXRhLXRhZ3MnKSkge1xyXG5cdFx0XHRzZWxlY3RUaXRsZVZhbHVlID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnNEYXRhKG9yaWdpbmFsU2VsZWN0KS5lbGVtZW50cy5tYXAob3B0aW9uID0+IGA8c3BhbiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zZWxlY3QtaWQ9XCIke3NlbGVjdEl0ZW0uZGF0YXNldC5pZH1cIiBkYXRhLXZhbHVlPVwiJHtvcHRpb24udmFsdWV9XCIgY2xhc3M9XCJfc2VsZWN0LXRhZ1wiPiR7dGhpcy5nZXRTZWxlY3RFbGVtZW50Q29udGVudChvcHRpb24pfTwvc3Bhbj5gKS5qb2luKCcnKTtcclxuXHRcdFx0Ly8g0JXRgdC70Lgg0LLRi9Cy0L7QtCDRgtC10LPQvtCyINCy0L4g0LLQvdC10YjQvdC40Lkg0LHQu9C+0LpcclxuXHRcdFx0aWYgKG9yaWdpbmFsU2VsZWN0LmRhdGFzZXQudGFncyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9yaWdpbmFsU2VsZWN0LmRhdGFzZXQudGFncykpIHtcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9yaWdpbmFsU2VsZWN0LmRhdGFzZXQudGFncykuaW5uZXJIVE1MID0gc2VsZWN0VGl0bGVWYWx1ZTtcclxuXHRcdFx0XHRpZiAob3JpZ2luYWxTZWxlY3QuaGFzQXR0cmlidXRlKCdkYXRhLXNlYXJjaCcpKSBzZWxlY3RUaXRsZVZhbHVlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vINCX0L3QsNGH0LXQvdC40LUo0Y8pINC40LvQuCDQv9C70LXQudGB0YXQvtC70LTQtdGAXHJcblx0XHRzZWxlY3RUaXRsZVZhbHVlID0gc2VsZWN0VGl0bGVWYWx1ZS5sZW5ndGggPyBzZWxlY3RUaXRsZVZhbHVlIDogKG9yaWdpbmFsU2VsZWN0LmRhdGFzZXQucGxhY2Vob2xkZXIgPyBvcmlnaW5hbFNlbGVjdC5kYXRhc2V0LnBsYWNlaG9sZGVyIDogJycpO1xyXG5cdFx0Ly8g0JXRgdC70Lgg0LLQutC70Y7Rh9C10L0g0YDQtdC20LjQvCBwc2V1ZG9cclxuXHRcdGxldCBwc2V1ZG9BdHRyaWJ1dGUgPSAnJztcclxuXHRcdGxldCBwc2V1ZG9BdHRyaWJ1dGVDbGFzcyA9ICcnO1xyXG5cdFx0aWYgKG9yaWdpbmFsU2VsZWN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1wc2V1ZG8tbGFiZWwnKSkge1xyXG5cdFx0XHRwc2V1ZG9BdHRyaWJ1dGUgPSBvcmlnaW5hbFNlbGVjdC5kYXRhc2V0LnBzZXVkb0xhYmVsID8gYCBkYXRhLXBzZXVkby1sYWJlbD1cIiR7b3JpZ2luYWxTZWxlY3QuZGF0YXNldC5wc2V1ZG9MYWJlbH1cImAgOiBgIGRhdGEtcHNldWRvLWxhYmVsPVwi0JfQsNC/0L7Qu9C90LjRgtC1INCw0YLRgNC40LHRg9GCXCJgO1xyXG5cdFx0XHRwc2V1ZG9BdHRyaWJ1dGVDbGFzcyA9IGAgJHt0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RQc2V1ZG9MYWJlbH1gO1xyXG5cdFx0fVxyXG5cdFx0Ly8g0JXRgdC70Lgg0LXRgdGC0Ywg0LfQvdCw0YfQtdC90LjQtSwg0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YFcclxuXHRcdHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zRGF0YShvcmlnaW5hbFNlbGVjdCkudmFsdWVzLmxlbmd0aCA/IHNlbGVjdEl0ZW0uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RBY3RpdmUpIDogc2VsZWN0SXRlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdEFjdGl2ZSk7XHJcblx0XHQvLyDQktC+0LfQstGA0LDRidCw0LXQvCDQv9C+0LvQtSDQstCy0L7QtNCwINC00LvRjyDQv9C+0LjRgdC60LAg0LjQu9C4INGC0LXQutGB0YJcclxuXHRcdGlmIChvcmlnaW5hbFNlbGVjdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VhcmNoJykpIHtcclxuXHRcdFx0Ly8g0JLRi9Cy0L7QtNC40Lwg0L/QvtC70LUg0LLQstC+0LTQsCDQtNC70Y8g0L/QvtC40YHQutCwXHJcblx0XHRcdHJldHVybiBgPGRpdiBjbGFzcz1cIiR7dGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0VGl0bGV9XCI+PHNwYW4ke3BzZXVkb0F0dHJpYnV0ZX0gY2xhc3M9XCIke3RoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdFZhbHVlfVwiPjxpbnB1dCBhdXRvY29tcGxldGU9XCJvZmZcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiJHtzZWxlY3RUaXRsZVZhbHVlfVwiIGRhdGEtcGxhY2Vob2xkZXI9XCIke3NlbGVjdFRpdGxlVmFsdWV9XCIgY2xhc3M9XCIke3RoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdElucHV0fVwiPjwvc3Bhbj48L2Rpdj5gO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8g0JXRgdC70Lgg0LLRi9Cx0YDQsNC9INGN0LvQtdC80LXQvdGCINGB0L4g0YHQstC+0LjQvCDQutC70LDRgdGB0L7QvFxyXG5cdFx0XHRjb25zdCBjdXN0b21DbGFzcyA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zRGF0YShvcmlnaW5hbFNlbGVjdCkuZWxlbWVudHMubGVuZ3RoICYmIHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zRGF0YShvcmlnaW5hbFNlbGVjdCkuZWxlbWVudHNbMF0uZGF0YXNldC5jbGFzcyA/IGAgJHt0aGlzLmdldFNlbGVjdGVkT3B0aW9uc0RhdGEob3JpZ2luYWxTZWxlY3QpLmVsZW1lbnRzWzBdLmRhdGFzZXQuY2xhc3N9YCA6ICcnO1xyXG5cdFx0XHQvLyDQktGL0LLQvtC00LjQvCDRgtC10LrRgdGC0L7QstC+0LUg0LfQvdCw0YfQtdC90LjQtVxyXG5cdFx0XHRyZXR1cm4gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHt0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RUaXRsZX1cIj48c3BhbiR7cHNldWRvQXR0cmlidXRlfSBjbGFzcz1cIiR7dGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0VmFsdWV9JHtwc2V1ZG9BdHRyaWJ1dGVDbGFzc31cIj48c3BhbiBjbGFzcz1cIiR7dGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0Q29udGVudH0ke2N1c3RvbUNsYXNzfVwiPiR7c2VsZWN0VGl0bGVWYWx1ZX08L3NwYW4+PC9zcGFuPjwvYnV0dG9uPmA7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0LTQsNC90L3Ri9GFINC00LvRjyDQt9C90LDRh9C10L3QuNGPINC30LDQs9C+0LvQvtCy0LrQsFxyXG5cdGdldFNlbGVjdEVsZW1lbnRDb250ZW50KHNlbGVjdE9wdGlvbikge1xyXG5cdFx0Ly8g0JXRgdC70Lgg0LTQu9GPINGN0LvQtdC80LXQvdGC0LAg0YPQutCw0LfQsNC9INCy0YvQstC+0LQg0LrQsNGA0YLQuNC90LrQuCDQuNC70Lgg0YLQtdC60YHRgtCwLCDQv9C10YDQtdGB0YLRgNCw0LjQstCw0LXQvCDQutC+0L3RgdGC0YDRg9C60YbQuNGOXHJcblx0XHRjb25zdCBzZWxlY3RPcHRpb25EYXRhID0gc2VsZWN0T3B0aW9uLmRhdGFzZXQuYXNzZXQgPyBgJHtzZWxlY3RPcHRpb24uZGF0YXNldC5hc3NldH1gIDogJyc7XHJcblx0XHRjb25zdCBzZWxlY3RPcHRpb25EYXRhSFRNTCA9IHNlbGVjdE9wdGlvbkRhdGEuaW5kZXhPZignaW1nJykgPj0gMCA/IGA8aW1nIHNyYz1cIiR7c2VsZWN0T3B0aW9uRGF0YX1cIiBhbHQ9XCJcIj5gIDogc2VsZWN0T3B0aW9uRGF0YTtcclxuXHRcdGxldCBzZWxlY3RPcHRpb25Db250ZW50SFRNTCA9IGBgO1xyXG5cdFx0c2VsZWN0T3B0aW9uQ29udGVudEhUTUwgKz0gc2VsZWN0T3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0Um93fVwiPmAgOiAnJztcclxuXHRcdHNlbGVjdE9wdGlvbkNvbnRlbnRIVE1MICs9IHNlbGVjdE9wdGlvbkRhdGEgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdERhdGF9XCI+YCA6ICcnO1xyXG5cdFx0c2VsZWN0T3B0aW9uQ29udGVudEhUTUwgKz0gc2VsZWN0T3B0aW9uRGF0YSA/IHNlbGVjdE9wdGlvbkRhdGFIVE1MIDogJyc7XHJcblx0XHRzZWxlY3RPcHRpb25Db250ZW50SFRNTCArPSBzZWxlY3RPcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XHJcblx0XHRzZWxlY3RPcHRpb25Db250ZW50SFRNTCArPSBzZWxlY3RPcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RUZXh0fVwiPmAgOiAnJztcclxuXHRcdHNlbGVjdE9wdGlvbkNvbnRlbnRIVE1MICs9IHNlbGVjdE9wdGlvbi50ZXh0Q29udGVudDtcclxuXHRcdHNlbGVjdE9wdGlvbkNvbnRlbnRIVE1MICs9IHNlbGVjdE9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcclxuXHRcdHNlbGVjdE9wdGlvbkNvbnRlbnRIVE1MICs9IHNlbGVjdE9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcclxuXHRcdHJldHVybiBzZWxlY3RPcHRpb25Db250ZW50SFRNTDtcclxuXHR9XHJcblx0Ly8g0J/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhSDQv9C70LXQudGB0YXQvtC70LTQtdGA0LBcclxuXHRnZXRTZWxlY3RQbGFjZWhvbGRlcihvcmlnaW5hbFNlbGVjdCkge1xyXG5cdFx0Y29uc3Qgc2VsZWN0UGxhY2Vob2xkZXIgPSBBcnJheS5mcm9tKG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnMpLmZpbmQob3B0aW9uID0+ICFvcHRpb24udmFsdWUpO1xyXG5cdFx0aWYgKHNlbGVjdFBsYWNlaG9sZGVyKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dmFsdWU6IHNlbGVjdFBsYWNlaG9sZGVyLnRleHRDb250ZW50LFxyXG5cdFx0XHRcdHNob3c6IHNlbGVjdFBsYWNlaG9sZGVyLmhhc0F0dHJpYnV0ZShcImRhdGEtc2hvd1wiKSxcclxuXHRcdFx0XHRsYWJlbDoge1xyXG5cdFx0XHRcdFx0c2hvdzogc2VsZWN0UGxhY2Vob2xkZXIuaGFzQXR0cmlidXRlKFwiZGF0YS1sYWJlbFwiKSxcclxuXHRcdFx0XHRcdHRleHQ6IHNlbGVjdFBsYWNlaG9sZGVyLmRhdGFzZXQubGFiZWxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Ly8g0J/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhSDQuNC3INCy0YvQsdGA0LDQvdC90YvRhSDRjdC70LXQvNC10L3RgtC+0LJcclxuXHRnZXRTZWxlY3RlZE9wdGlvbnNEYXRhKG9yaWdpbmFsU2VsZWN0LCB0eXBlKSB7XHJcblx0XHQvLyDQn9C+0LvRg9GH0LDQtdC8INCy0YHQtSDQstGL0LHRgNCw0L3QvdGL0LUg0L7QsdGK0LXQutGC0Ysg0LjQtyBzZWxlY3RcclxuXHRcdGxldCBzZWxlY3RlZE9wdGlvbnMgPSBbXTtcclxuXHRcdGlmIChvcmlnaW5hbFNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHQvLyDQldGB0LvQuCDQvNGD0LvRjNGC0LjQstGL0LHQvtGAXHJcblx0XHRcdC8vINCj0LHQuNGA0LDQtdC8INC/0LvQtdC50YHRhdC+0LvQtNC10YAsINC/0L7Qu9GD0YfQsNC10Lwg0L7RgdGC0LDQu9GM0L3Ri9C1INCy0YvQsdGA0LDQvdC90YvQtSDRjdC70LXQvNC10L3RgtGLXHJcblx0XHRcdHNlbGVjdGVkT3B0aW9ucyA9IEFycmF5LmZyb20ob3JpZ2luYWxTZWxlY3Qub3B0aW9ucykuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vINCV0YHQu9C4INC10LTQuNC90LjRh9C90YvQuSDQstGL0LHQvtGAXHJcblx0XHRcdHNlbGVjdGVkT3B0aW9ucy5wdXNoKG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbb3JpZ2luYWxTZWxlY3Quc2VsZWN0ZWRJbmRleF0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZWxlbWVudHM6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbiksXHJcblx0XHRcdHZhbHVlczogc2VsZWN0ZWRPcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnZhbHVlKS5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSksXHJcblx0XHRcdGh0bWw6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IHRoaXMuZ2V0U2VsZWN0RWxlbWVudENvbnRlbnQob3B0aW9uKSlcclxuXHRcdH1cclxuXHR9XHJcblx0Ly8g0JrQvtC90YHRgtGA0YPQutGC0L7RgCDRjdC70LXQvNC10L3RgtC+0LIg0YHQv9C40YHQutCwXHJcblx0Z2V0T3B0aW9ucyhvcmlnaW5hbFNlbGVjdCkge1xyXG5cdFx0Ly8g0J3QsNGB0YLRgNC+0LrQsCDRgdC60YDQvtC70LvQsCDRjdC70LXQvNC10L3RgtC+0LJcclxuXHRcdGxldCBzZWxlY3RPcHRpb25zU2Nyb2xsID0gb3JpZ2luYWxTZWxlY3QuaGFzQXR0cmlidXRlKCdkYXRhLXNjcm9sbCcpID8gYGRhdGEtc2ltcGxlYmFyYCA6ICcnO1xyXG5cdFx0bGV0IHNlbGVjdE9wdGlvbnNTY3JvbGxIZWlnaHQgPSBvcmlnaW5hbFNlbGVjdC5kYXRhc2V0LnNjcm9sbCA/IGBzdHlsZT1cIm1heC1oZWlnaHQ6JHtvcmlnaW5hbFNlbGVjdC5kYXRhc2V0LnNjcm9sbH1weFwiYCA6ICcnO1xyXG5cdFx0Ly8g0J/QvtC70YPRh9Cw0LXQvCDRjdC70LXQvNC10L3RgtGLINGB0L/QuNGB0LrQsFxyXG5cdFx0bGV0IHNlbGVjdE9wdGlvbnMgPSBBcnJheS5mcm9tKG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnMpO1xyXG5cdFx0aWYgKHNlbGVjdE9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRsZXQgc2VsZWN0T3B0aW9uc0hUTUwgPSBgYDtcclxuXHRcdFx0Ly8g0JXRgdC70Lgg0YPQutCw0LfQsNC90LAg0L3QsNGB0YLRgNC+0LnQutCwIGRhdGEtc2hvdywg0L/QvtC60LDQt9GL0LLQsNC10Lwg0L/Qu9C10LnRgdGF0L7Qu9C00LXRgCDQsiDRgdC/0LjRgdC60LVcclxuXHRcdFx0aWYgKCh0aGlzLmdldFNlbGVjdFBsYWNlaG9sZGVyKG9yaWdpbmFsU2VsZWN0KSAmJiAhdGhpcy5nZXRTZWxlY3RQbGFjZWhvbGRlcihvcmlnaW5hbFNlbGVjdCkuc2hvdykgfHwgb3JpZ2luYWxTZWxlY3QubXVsdGlwbGUpIHtcclxuXHRcdFx0XHRzZWxlY3RPcHRpb25zID0gc2VsZWN0T3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8g0KHRgtGA0L7QuNC8INC4INCy0YvQstC+0LTQuNC8INC+0YHQvdC+0LLQvdGD0Y4g0LrQvtC90YHRgtGA0YPQutGG0LjRjlxyXG5cdFx0XHRzZWxlY3RPcHRpb25zSFRNTCArPSBzZWxlY3RPcHRpb25zU2Nyb2xsID8gYDxkaXYgJHtzZWxlY3RPcHRpb25zU2Nyb2xsfSAke3NlbGVjdE9wdGlvbnNTY3JvbGxIZWlnaHR9IGNsYXNzPVwiJHt0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RPcHRpb25zU2Nyb2xsfVwiPmAgOiAnJztcclxuXHRcdFx0c2VsZWN0T3B0aW9ucy5mb3JFYWNoKHNlbGVjdE9wdGlvbiA9PiB7XHJcblx0XHRcdFx0Ly8g0J/QvtC70YPRh9Cw0LXQvCDQutC+0L3RgdGC0YDRg9C60YbQuNGOINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0Y3Qu9C10LzQtdC90YLQsCDRgdC/0LjRgdC60LBcclxuXHRcdFx0XHRzZWxlY3RPcHRpb25zSFRNTCArPSB0aGlzLmdldE9wdGlvbihzZWxlY3RPcHRpb24sIG9yaWdpbmFsU2VsZWN0KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNlbGVjdE9wdGlvbnNIVE1MICs9IHNlbGVjdE9wdGlvbnNTY3JvbGwgPyBgPC9kaXY+YCA6ICcnO1xyXG5cdFx0XHRyZXR1cm4gc2VsZWN0T3B0aW9uc0hUTUw7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0LrQvtC90LrRgNC10YLQvdC+0LPQviDRjdC70LXQvNC10L3RgtCwINGB0L/QuNGB0LrQsFxyXG5cdGdldE9wdGlvbihzZWxlY3RPcHRpb24sIG9yaWdpbmFsU2VsZWN0KSB7XHJcblx0XHQvLyDQldGB0LvQuCDRjdC70LXQvNC10L3RgiDQstGL0LHRgNCw0L0g0Lgg0LLQutC70Y7Rh9C10L0g0YDQtdC20LjQvCDQvNGD0LvRjNGC0LjQstGL0LHQvtGA0LAsINC00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBXHJcblx0XHRjb25zdCBzZWxlY3RPcHRpb25TZWxlY3RlZCA9IHNlbGVjdE9wdGlvbi5zZWxlY3RlZCAmJiBvcmlnaW5hbFNlbGVjdC5tdWx0aXBsZSA/IGAgJHt0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RPcHRpb25TZWxlY3RlZH1gIDogJyc7XHJcblx0XHQvLyDQldGB0LvQuCDRjdC70LXQvNC10L3RgiDQstGL0LHRgNCw0L3QuCDQuCDQvdC10YIg0L3QsNGB0YLRgNC+0LnQutC4IGRhdGEtc2hvdy1zZWxlY3RlZCwg0YHQutGA0YvQstCw0LXQvCDRjdC70LXQvNC10L3RglxyXG5cdFx0Y29uc3Qgc2VsZWN0T3B0aW9uSGlkZSA9IHNlbGVjdE9wdGlvbi5zZWxlY3RlZCAmJiAhb3JpZ2luYWxTZWxlY3QuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctc2VsZWN0ZWQnKSAmJiAhb3JpZ2luYWxTZWxlY3QubXVsdGlwbGUgPyBgaGlkZGVuYCA6IGBgO1xyXG5cdFx0Ly8g0JXRgdC70Lgg0LTQu9GPINGN0LvQtdC80LXQvdGC0LAg0YPQutCw0LfQsNC9INC60LvQsNGB0YEg0LTQvtCx0LDQstC70Y/QtdC8XHJcblx0XHRjb25zdCBzZWxlY3RPcHRpb25DbGFzcyA9IHNlbGVjdE9wdGlvbi5kYXRhc2V0LmNsYXNzID8gYCAke3NlbGVjdE9wdGlvbi5kYXRhc2V0LmNsYXNzfWAgOiAnJztcclxuXHRcdC8vINCV0YHQu9C4INGD0LrQsNC30LDQvSDRgNC10LbQuNC8INGB0YHRi9C70LrQuFxyXG5cdFx0Y29uc3Qgc2VsZWN0T3B0aW9uTGluayA9IHNlbGVjdE9wdGlvbi5kYXRhc2V0LmhyZWYgPyBzZWxlY3RPcHRpb24uZGF0YXNldC5ocmVmIDogZmFsc2U7XHJcblx0XHRjb25zdCBzZWxlY3RPcHRpb25MaW5rVGFyZ2V0ID0gc2VsZWN0T3B0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1ocmVmLWJsYW5rJykgPyBgdGFyZ2V0PVwiX2JsYW5rXCJgIDogJyc7XHJcblx0XHQvLyDQodGC0YDQvtC40Lwg0Lgg0LLQvtC30LLRgNCw0YnQsNC10Lwg0LrQvtC90YHRgtGA0YPQutGG0LjRjiDRjdC70LXQvNC10L3RgtCwXHJcblx0XHRsZXQgc2VsZWN0T3B0aW9uSFRNTCA9IGBgO1xyXG5cdFx0c2VsZWN0T3B0aW9uSFRNTCArPSBzZWxlY3RPcHRpb25MaW5rID8gYDxhICR7c2VsZWN0T3B0aW9uTGlua1RhcmdldH0gJHtzZWxlY3RPcHRpb25IaWRlfSBocmVmPVwiJHtzZWxlY3RPcHRpb25MaW5rfVwiIGRhdGEtdmFsdWU9XCIke3NlbGVjdE9wdGlvbi52YWx1ZX1cIiBjbGFzcz1cIiR7dGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0T3B0aW9ufSR7c2VsZWN0T3B0aW9uQ2xhc3N9JHtzZWxlY3RPcHRpb25TZWxlY3RlZH1cIj5gIDogYDxidXR0b24gJHtzZWxlY3RPcHRpb25IaWRlfSBjbGFzcz1cIiR7dGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0T3B0aW9ufSR7c2VsZWN0T3B0aW9uQ2xhc3N9JHtzZWxlY3RPcHRpb25TZWxlY3RlZH1cIiBkYXRhLXZhbHVlPVwiJHtzZWxlY3RPcHRpb24udmFsdWV9XCIgdHlwZT1cImJ1dHRvblwiPmA7XHJcblx0XHRzZWxlY3RPcHRpb25IVE1MICs9IHRoaXMuZ2V0U2VsZWN0RWxlbWVudENvbnRlbnQoc2VsZWN0T3B0aW9uKTtcclxuXHRcdHNlbGVjdE9wdGlvbkhUTUwgKz0gc2VsZWN0T3B0aW9uTGluayA/IGA8L2E+YCA6IGA8L2J1dHRvbj5gO1xyXG5cdFx0cmV0dXJuIHNlbGVjdE9wdGlvbkhUTUw7XHJcblx0fVxyXG5cdC8vINCh0LXRgtGC0LXRgCDRjdC70LXQvNC10L3RgtC+0LIg0YHQv9C40YHQutCwIChvcHRpb25zKVxyXG5cdHNldE9wdGlvbnMoc2VsZWN0SXRlbSwgb3JpZ2luYWxTZWxlY3QpIHtcclxuXHRcdC8vINCf0L7Qu9GD0YfQsNC10Lwg0L7QsdGK0LXQutGCINGC0LXQu9CwINC/0YHQtdCy0LTQvtGB0LXQu9C10LrRgtCwXHJcblx0XHRjb25zdCBzZWxlY3RJdGVtT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0RWxlbWVudChzZWxlY3RJdGVtLCB0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RPcHRpb25zKS5zZWxlY3RFbGVtZW50O1xyXG5cdFx0Ly8g0JfQsNC/0YPRgdC60LDQtdC8INC60L7QvdGB0YLRgNGD0LrRgtC+0YAg0Y3Qu9C10LzQtdC90YLQvtCyINGB0L/QuNGB0LrQsCAob3B0aW9ucykg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INCyINGC0LXQu9C+INC/0YHQtdCy0LTQvtGB0LXQu9C10LrRgtCwXHJcblx0XHRzZWxlY3RJdGVtT3B0aW9ucy5pbm5lckhUTUwgPSB0aGlzLmdldE9wdGlvbnMob3JpZ2luYWxTZWxlY3QpO1xyXG5cdH1cclxuXHQvLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwINC90LAg0Y3Qu9C10LzQtdC90YIg0YHQv9C40YHQutCwXHJcblx0b3B0aW9uQWN0aW9uKHNlbGVjdEl0ZW0sIG9yaWdpbmFsU2VsZWN0LCBvcHRpb25JdGVtKSB7XHJcblx0XHRpZiAob3JpZ2luYWxTZWxlY3QubXVsdGlwbGUpIHsgLy8g0JXRgdC70Lgg0LzRg9C70YzRgtC40LLRi9Cx0L7RgFxyXG5cdFx0XHQvLyDQktGL0LTQtdC70Y/QtdC8INC60LvQsNGB0YHQvtC8INGN0LvQtdC80LXQvdGCXHJcblx0XHRcdG9wdGlvbkl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RPcHRpb25TZWxlY3RlZCk7XHJcblx0XHRcdC8vINCe0YfQuNGJ0LDQtdC8INCy0YvQsdGA0LDQvdC90YvQtSDRjdC70LXQvNC10L3RgtGLIFxyXG5cdFx0XHRjb25zdCBvcmlnaW5hbFNlbGVjdFNlbGVjdGVkSXRlbXMgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9uc0RhdGEob3JpZ2luYWxTZWxlY3QpLmVsZW1lbnRzO1xyXG5cdFx0XHRvcmlnaW5hbFNlbGVjdFNlbGVjdGVkSXRlbXMuZm9yRWFjaChvcmlnaW5hbFNlbGVjdFNlbGVjdGVkSXRlbSA9PiB7XHJcblx0XHRcdFx0b3JpZ2luYWxTZWxlY3RTZWxlY3RlZEl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8g0JLRi9Cx0LjRgNCw0LXQvCDRjdC70LXQvNC10L3RgtGLIFxyXG5cdFx0XHRjb25zdCBzZWxlY3RTZWxlY3RlZEl0ZW1zID0gc2VsZWN0SXRlbS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZ2V0U2VsZWN0Q2xhc3ModGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0T3B0aW9uU2VsZWN0ZWQpKTtcclxuXHRcdFx0c2VsZWN0U2VsZWN0ZWRJdGVtcy5mb3JFYWNoKHNlbGVjdFNlbGVjdGVkSXRlbXMgPT4ge1xyXG5cdFx0XHRcdG9yaWdpbmFsU2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7c2VsZWN0U2VsZWN0ZWRJdGVtcy5kYXRhc2V0LnZhbHVlfVwiXWApLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2UgeyAvLyDQldGB0LvQuCDQtdC00LjQvdC40YfQvdGL0Lkg0LLRi9Cx0L7RgFxyXG5cdFx0XHQvLyDQldGB0LvQuCDQvdC1INGD0LrQsNC30LDQvdCwINC90LDRgdGC0YDQvtC50LrQsCBkYXRhLXNob3ctc2VsZWN0ZWQsINGB0LrRgNGL0LLQsNC10Lwg0LLRi9Cx0YDQsNC90L3Ri9C5INGN0LvQtdC80LXQvdGCXHJcblx0XHRcdGlmICghb3JpZ2luYWxTZWxlY3QuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctc2VsZWN0ZWQnKSkge1xyXG5cdFx0XHRcdC8vINCh0L3QsNGH0LDQu9CwINCy0YHQtSDQv9C+0LrQsNC30LDRgtGMXHJcblx0XHRcdFx0aWYgKHNlbGVjdEl0ZW0ucXVlcnlTZWxlY3RvcihgJHt0aGlzLmdldFNlbGVjdENsYXNzKHRoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdE9wdGlvbil9W2hpZGRlbl1gKSkge1xyXG5cdFx0XHRcdFx0c2VsZWN0SXRlbS5xdWVyeVNlbGVjdG9yKGAke3RoaXMuZ2V0U2VsZWN0Q2xhc3ModGhpcy5zZWxlY3RDbGFzc2VzLmNsYXNzU2VsZWN0T3B0aW9uKX1baGlkZGVuXWApLmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDQodC60YDRi9Cy0LDQtdC8INCy0YvQsdGA0LDQvdC90YPRjlxyXG5cdFx0XHRcdG9wdGlvbkl0ZW0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRvcmlnaW5hbFNlbGVjdC52YWx1ZSA9IG9wdGlvbkl0ZW0uaGFzQXR0cmlidXRlKCdkYXRhLXZhbHVlJykgPyBvcHRpb25JdGVtLmRhdGFzZXQudmFsdWUgOiBvcHRpb25JdGVtLnRleHRDb250ZW50O1xyXG5cdFx0XHR0aGlzLnNlbGVjdEFjdGlvbihzZWxlY3RJdGVtKTtcclxuXHRcdH1cclxuXHRcdC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQt9Cw0LPQvtC70L7QstC+0Log0YHQtdC70LXQutGC0LBcclxuXHRcdHRoaXMuc2V0U2VsZWN0VGl0bGVWYWx1ZShzZWxlY3RJdGVtLCBvcmlnaW5hbFNlbGVjdCk7XHJcblx0XHQvLyDQktGL0LfRi9Cy0LDQtdC8INGA0LXQsNC60YbQuNGOINC90LAg0LjQt9C80LXQvdC10L3QuNC1INGB0LXQu9C10LrRgtCwXHJcblx0XHR0aGlzLnNldFNlbGVjdENoYW5nZShvcmlnaW5hbFNlbGVjdCk7XHJcblx0fVxyXG5cdC8vINCg0LXQsNC60YbQuNGPINC90LAg0LjQt9C80LXQvdC10L3QtdC90LjQtSDQvtGA0LjQs9C40L3QsNC70YzQvdC+0LPQviBzZWxlY3RcclxuXHRzZWxlY3RDaGFuZ2UoZSkge1xyXG5cdFx0Y29uc3Qgb3JpZ2luYWxTZWxlY3QgPSBlLnRhcmdldDtcclxuXHRcdHRoaXMuc2VsZWN0QnVpbGQob3JpZ2luYWxTZWxlY3QpO1xyXG5cdFx0dGhpcy5zZXRTZWxlY3RDaGFuZ2Uob3JpZ2luYWxTZWxlY3QpO1xyXG5cdH1cclxuXHQvLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQuNC30LzQtdC90LXQvdC40Y8g0LIg0YHQtdC70LXQutGC0LVcclxuXHRzZXRTZWxlY3RDaGFuZ2Uob3JpZ2luYWxTZWxlY3QpIHtcclxuXHRcdC8vINCc0L7QvNC10L3RgtCw0LvRjNC90LDRjyDQstCw0LvQuNC00LDRhtC40Y8g0YHQtdC70LXQutGC0LBcclxuXHRcdGlmIChvcmlnaW5hbFNlbGVjdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUnKSkge1xyXG5cdFx0XHRmb3JtVmFsaWRhdGUudmFsaWRhdGVJbnB1dChvcmlnaW5hbFNlbGVjdCk7XHJcblx0XHR9XHJcblx0XHQvLyDQn9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INGB0LXQu9C10LrRgtCwINC+0YLQv9GA0LDQstC70Y/QtdC8INGE0L7RgNC80YNcclxuXHRcdGlmIChvcmlnaW5hbFNlbGVjdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3VibWl0JykgJiYgb3JpZ2luYWxTZWxlY3QudmFsdWUpIHtcclxuXHRcdFx0bGV0IHRlbXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cdFx0XHR0ZW1wQnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG5cdFx0XHRvcmlnaW5hbFNlbGVjdC5jbG9zZXN0KCdmb3JtJykuYXBwZW5kKHRlbXBCdXR0b24pO1xyXG5cdFx0XHR0ZW1wQnV0dG9uLmNsaWNrKCk7XHJcblx0XHRcdHRlbXBCdXR0b24ucmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBzZWxlY3RJdGVtID0gb3JpZ2luYWxTZWxlY3QucGFyZW50RWxlbWVudDtcclxuXHRcdC8vINCS0YvQt9C+0LIg0LrQvtC70LvQsdGN0Log0YTRg9C90LrRhtC40LhcclxuXHRcdHRoaXMuc2VsZWN0Q2FsbGJhY2soc2VsZWN0SXRlbSwgb3JpZ2luYWxTZWxlY3QpO1xyXG5cdH1cclxuXHQvLyDQntCx0YDQsNCx0L7RgtGH0LjQuiBkaXNhYmxlZFxyXG5cdHNlbGVjdERpc2FibGVkKHNlbGVjdEl0ZW0sIG9yaWdpbmFsU2VsZWN0KSB7XHJcblx0XHRpZiAob3JpZ2luYWxTZWxlY3QuZGlzYWJsZWQpIHtcclxuXHRcdFx0c2VsZWN0SXRlbS5jbGFzc0xpc3QuYWRkKHRoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdERpc2FibGVkKTtcclxuXHRcdFx0dGhpcy5nZXRTZWxlY3RFbGVtZW50KHNlbGVjdEl0ZW0sIHRoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdFRpdGxlKS5zZWxlY3RFbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNlbGVjdEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3REaXNhYmxlZCk7XHJcblx0XHRcdHRoaXMuZ2V0U2VsZWN0RWxlbWVudChzZWxlY3RJdGVtLCB0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RUaXRsZSkuc2VsZWN0RWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQv9C+0LjRgdC60LAg0L/QviDRjdC70LXQvNC10L3RgtCw0Lwg0YHQv9C40YHQutCwXHJcblx0c2VhcmNoQWN0aW9ucyhzZWxlY3RJdGVtKSB7XHJcblx0XHRjb25zdCBvcmlnaW5hbFNlbGVjdCA9IHRoaXMuZ2V0U2VsZWN0RWxlbWVudChzZWxlY3RJdGVtKS5vcmlnaW5hbFNlbGVjdDtcclxuXHRcdGNvbnN0IHNlbGVjdElucHV0ID0gdGhpcy5nZXRTZWxlY3RFbGVtZW50KHNlbGVjdEl0ZW0sIHRoaXMuc2VsZWN0Q2xhc3Nlcy5jbGFzc1NlbGVjdElucHV0KS5zZWxlY3RFbGVtZW50O1xyXG5cdFx0Y29uc3Qgc2VsZWN0T3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0RWxlbWVudChzZWxlY3RJdGVtLCB0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RPcHRpb25zKS5zZWxlY3RFbGVtZW50O1xyXG5cdFx0Y29uc3Qgc2VsZWN0T3B0aW9uc0l0ZW1zID0gc2VsZWN0T3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0aGlzLnNlbGVjdENsYXNzZXMuY2xhc3NTZWxlY3RPcHRpb259YCk7XHJcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblx0XHRzZWxlY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRzZWxlY3RPcHRpb25zSXRlbXMuZm9yRWFjaChzZWxlY3RPcHRpb25zSXRlbSA9PiB7XHJcblx0XHRcdFx0aWYgKHNlbGVjdE9wdGlvbnNJdGVtLnRleHRDb250ZW50LnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzZWxlY3RJbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwKSB7XHJcblx0XHRcdFx0XHRzZWxlY3RPcHRpb25zSXRlbS5oaWRkZW4gPSBmYWxzZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c2VsZWN0T3B0aW9uc0l0ZW0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvLyDQldGB0LvQuCDRgdC/0LjRgdC+0Log0LfQsNC60YDRi9GCINC+0YLQutGA0YvQstCw0LXQvFxyXG5cdFx0XHRzZWxlY3RPcHRpb25zLmhpZGRlbiA9PT0gdHJ1ZSA/IF90aGlzLnNlbGVjdEFjdGlvbihzZWxlY3RJdGVtKSA6IG51bGw7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Ly8g0JrQvtC70LvQsdGN0Log0YTRg9C90LrRhtC40Y9cclxuXHRzZWxlY3RDYWxsYmFjayhzZWxlY3RJdGVtLCBvcmlnaW5hbFNlbGVjdCkge1xyXG5cdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJzZWxlY3RDYWxsYmFja1wiLCB7XHJcblx0XHRcdGRldGFpbDoge1xyXG5cdFx0XHRcdHNlbGVjdDogb3JpZ2luYWxTZWxlY3RcclxuXHRcdFx0fVxyXG5cdFx0fSkpO1xyXG5cdH1cclxuXHQvLyDQm9C+0LPQs9C40L3QsyDQsiDQutC+0L3RgdC+0LvRjFxyXG5cdHNldExvZ2dpbmcobWVzc2FnZSkge1xyXG5cdFx0dGhpcy5jb25maWcubG9nZ2luZyA/IEZMUyhgW3NlbGVjdF06ICR7bWVzc2FnZX1gKSA6IG51bGw7XHJcblx0fVxyXG59XHJcbi8vINCX0LDQv9GD0YHQutCw0LXQvCDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LIg0L7QsdGK0LXQutGCINC80L7QtNGD0LvQtdC5XHJcbmZsc01vZHVsZXMuc2VsZWN0ID0gbmV3IFNlbGVjdENvbnN0cnVjdG9yKHt9KTtcclxuXHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwY2UyYjYyYTBlNjJjZjIxNjljMVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==