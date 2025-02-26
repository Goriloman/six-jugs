"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./node_modules/nouislider/dist/nouislider.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipsMode: () => (/* binding */ PipsMode),
/* harmony export */   PipsType: () => (/* binding */ PipsType),
/* harmony export */   create: () => (/* binding */ initialize),
/* harmony export */   cssClasses: () => (/* binding */ cssClasses),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var PipsMode;
(function (PipsMode) {
    PipsMode["Range"] = "range";
    PipsMode["Steps"] = "steps";
    PipsMode["Positions"] = "positions";
    PipsMode["Count"] = "count";
    PipsMode["Values"] = "values";
})(PipsMode || (PipsMode = {}));
var PipsType;
(function (PipsType) {
    PipsType[PipsType["None"] = -1] = "None";
    PipsType[PipsType["NoValue"] = 0] = "NoValue";
    PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
    PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
})(PipsType || (PipsType = {}));
//region Helper Methods
function isValidFormatter(entry) {
    return isValidPartialFormatter(entry) && typeof entry.from === "function";
}
function isValidPartialFormatter(entry) {
    // partial formatters only need a to function and not a from function
    return typeof entry === "object" && typeof entry.to === "function";
}
function removeElement(el) {
    el.parentElement.removeChild(el);
}
function isSet(value) {
    return value !== null && value !== undefined;
}
// Bindable version
function preventDefault(e) {
    e.preventDefault();
}
// Removes duplicates from an array.
function unique(array) {
    return array.filter(function (a) {
        return !this[a] ? (this[a] = true) : false;
    }, {});
}
// Round a value to the closest 'to'.
function closest(value, to) {
    return Math.round(value / to) * to;
}
// Current position of an element relative to the document.
function offset(elem, orientation) {
    var rect = elem.getBoundingClientRect();
    var doc = elem.ownerDocument;
    var docElem = doc.documentElement;
    var pageOffset = getPageOffset(doc);
    // getBoundingClientRect contains left scroll in Chrome on Android.
    // I haven't found a feature detection that proves this. Worst case
    // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
        pageOffset.x = 0;
    }
    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
}
// Checks whether a value is numerical.
function isNumeric(a) {
    return typeof a === "number" && !isNaN(a) && isFinite(a);
}
// Sets a class and removes it after [duration] ms.
function addClassFor(element, className, duration) {
    if (duration > 0) {
        addClass(element, className);
        setTimeout(function () {
            removeClass(element, className);
        }, duration);
    }
}
// Limits a value to 0 - 100
function limit(a) {
    return Math.max(Math.min(a, 100), 0);
}
// Wraps a variable as an array, if it isn't one yet.
// Note that an input array is returned by reference!
function asArray(a) {
    return Array.isArray(a) ? a : [a];
}
// Counts decimals
function countDecimals(numStr) {
    numStr = String(numStr);
    var pieces = numStr.split(".");
    return pieces.length > 1 ? pieces[1].length : 0;
}
// http://youmightnotneedjquery.com/#add_class
function addClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.add(className);
    }
    else {
        el.className += " " + className;
    }
}
// http://youmightnotneedjquery.com/#remove_class
function removeClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.remove(className);
    }
    else {
        el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
}
// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
}
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
function getPageOffset(doc) {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
    var x = supportPageOffset
        ? window.pageXOffset
        : isCSS1Compat
            ? doc.documentElement.scrollLeft
            : doc.body.scrollLeft;
    var y = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
            ? doc.documentElement.scrollTop
            : doc.body.scrollTop;
    return {
        x: x,
        y: y,
    };
}
// we provide a function to compute constants instead
// of accessing window.* as soon as the module needs it
// so that we do not compute anything if not needed
function getActions() {
    // Determine the events to bind. IE11 implements pointerEvents without
    // a prefix, which breaks compatibility with the IE10 implementation.
    return window.navigator.pointerEnabled
        ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup",
        }
        : window.navigator.msPointerEnabled
            ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp",
            }
            : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend",
            };
}
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
// Issue #785
function getSupportsPassive() {
    var supportsPassive = false;
    /* eslint-disable */
    try {
        var opts = Object.defineProperty({}, "passive", {
            get: function () {
                supportsPassive = true;
            },
        });
        // @ts-ignore
        window.addEventListener("test", null, opts);
    }
    catch (e) { }
    /* eslint-enable */
    return supportsPassive;
}
function getSupportsTouchActionNone() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
//endregion
//region Range Calculation
// Determine the size of a sub-range in relation to a full range.
function subRangeRatio(pa, pb) {
    return 100 / (pb - pa);
}
// (percentage) How many percent is this value of this range?
function fromPercentage(range, value, startRange) {
    return (value * 100) / (range[startRange + 1] - range[startRange]);
}
// (percentage) Where is this value on this range?
function toPercentage(range, value) {
    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
}
// (value) How much is this percentage on this range?
function isPercentage(range, value) {
    return (value * (range[1] - range[0])) / 100 + range[0];
}
function getJ(value, arr) {
    var j = 1;
    while (value >= arr[j]) {
        j += 1;
    }
    return j;
}
// (percentage) Input a value, find where, on a scale of 0-100, it applies.
function toStepping(xVal, xPct, value) {
    if (value >= xVal.slice(-1)[0]) {
        return 100;
    }
    var j = getJ(value, xVal);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
}
// (value) Input a percentage, find where it is on the specified range.
function fromStepping(xVal, xPct, value) {
    // There is no range group that fits 100
    if (value >= 100) {
        return xVal.slice(-1)[0];
    }
    var j = getJ(value, xPct);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
}
// (percentage) Get the step that applies at a certain value.
function getStep(xPct, xSteps, snap, value) {
    if (value === 100) {
        return value;
    }
    var j = getJ(value, xPct);
    var a = xPct[j - 1];
    var b = xPct[j];
    // If 'snap' is set, steps are used as fixed points on the slider.
    if (snap) {
        // Find the closest position, a or b.
        if (value - a > (b - a) / 2) {
            return b;
        }
        return a;
    }
    if (!xSteps[j - 1]) {
        return value;
    }
    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
}
//endregion
//region Spectrum
var Spectrum = /** @class */ (function () {
    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [];
        this.xNumSteps = [];
        this.xHighestCompleteStep = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.snap = snap;
        var index;
        var ordered = [];
        // Map the object keys to an array.
        Object.keys(entry).forEach(function (index) {
            ordered.push([asArray(entry[index]), index]);
        });
        // Sort all entries by value (numeric sort).
        ordered.sort(function (a, b) {
            return a[0][0] - b[0][0];
        });
        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            this.handleEntryPoint(ordered[index][1], ordered[index][0]);
        }
        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);
        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            this.handleStepPoint(index, this.xNumSteps[index]);
        }
    }
    Spectrum.prototype.getDistance = function (value) {
        var distances = [];
        for (var index = 0; index < this.xNumSteps.length - 1; index++) {
            distances[index] = fromPercentage(this.xVal, value, index);
        }
        return distances;
    };
    // Calculate the percentual distance over the whole scale of ranges.
    // direction: 0 = backwards / 1 = forwards
    Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
        var xPct_index = 0;
        // Calculate range where to start calculation
        if (value < this.xPct[this.xPct.length - 1]) {
            while (value > this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
        }
        else if (value === this.xPct[this.xPct.length - 1]) {
            xPct_index = this.xPct.length - 2;
        }
        // If looking backwards and the value is exactly at a range separator then look one range further
        if (!direction && value === this.xPct[xPct_index + 1]) {
            xPct_index++;
        }
        if (distances === null) {
            distances = [];
        }
        var start_factor;
        var rest_factor = 1;
        var rest_rel_distance = distances[xPct_index];
        var range_pct = 0;
        var rel_range_distance = 0;
        var abs_distance_counter = 0;
        var range_counter = 0;
        // Calculate what part of the start range the value is
        if (direction) {
            start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        else {
            start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        // Do until the complete distance across ranges is calculated
        while (rest_rel_distance > 0) {
            // Calculate the percentage of total range
            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
            // Detect if the margin, padding or limit is larger then the current range and calculate
            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                // If larger then take the percentual distance of the whole range
                rel_range_distance = range_pct * start_factor;
                // Rest factor of relative percentual distance still to be calculated
                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                // Set start factor to 1 as for next range it does not apply.
                start_factor = 1;
            }
            else {
                // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                // No rest left as the rest fits in current range
                rest_factor = 0;
            }
            if (direction) {
                abs_distance_counter = abs_distance_counter - rel_range_distance;
                // Limit range to first range when distance becomes outside of minimum range
                if (this.xPct.length + range_counter >= 1) {
                    range_counter--;
                }
            }
            else {
                abs_distance_counter = abs_distance_counter + rel_range_distance;
                // Limit range to last range when distance becomes outside of maximum range
                if (this.xPct.length - range_counter >= 1) {
                    range_counter++;
                }
            }
            // Rest of relative percentual distance still to be calculated
            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
        }
        return value + abs_distance_counter;
    };
    Spectrum.prototype.toStepping = function (value) {
        value = toStepping(this.xVal, this.xPct, value);
        return value;
    };
    Spectrum.prototype.fromStepping = function (value) {
        return fromStepping(this.xVal, this.xPct, value);
    };
    Spectrum.prototype.getStep = function (value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);
        return value;
    };
    Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
        var j = getJ(value, this.xPct);
        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }
        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };
    Spectrum.prototype.getNearbySteps = function (value) {
        var j = getJ(value, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2],
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1],
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j],
            },
        };
    };
    Spectrum.prototype.countStepDecimals = function () {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };
    Spectrum.prototype.hasNoSize = function () {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
    };
    // Outside testing
    Spectrum.prototype.convert = function (value) {
        return this.getStep(this.toStepping(value));
    };
    Spectrum.prototype.handleEntryPoint = function (index, value) {
        var percentage;
        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        }
        else if (index === "max") {
            percentage = 100;
        }
        else {
            percentage = parseFloat(index);
        }
        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider: 'range' value isn't numeric.");
        }
        // Store values.
        this.xPct.push(percentage);
        this.xVal.push(value[0]);
        var value1 = Number(value[1]);
        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value1)) {
                this.xSteps[0] = value1;
            }
        }
        else {
            this.xSteps.push(isNaN(value1) ? false : value1);
        }
        this.xHighestCompleteStep.push(0);
    };
    Spectrum.prototype.handleStepPoint = function (i, n) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }
        // Step over zero-length ranges (#948);
        if (this.xVal[i] === this.xVal[i + 1]) {
            this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
            return;
        }
        // Factor to range ratio
        this.xSteps[i] =
            fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
        var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
        this.xHighestCompleteStep[i] = step;
    };
    return Spectrum;
}());
//endregion
//region Options
/*	Every input option is tested and parsed. This will prevent
    endless validation in internal methods. These tests are
    structured with an item for every option available. An
    option can be marked as required by setting the 'r' flag.
    The testing function is provided with three arguments:
        - The provided value for the option;
        - A reference to the options object;
        - The name for the option;

    The testing function returns false when an error is detected,
    or true when everything is OK. It can also modify the option
    object, to make sure all values can be correctly looped elsewhere. */
//region Defaults
var defaultFormatter = {
    to: function (value) {
        return value === undefined ? "" : value.toFixed(2);
    },
    from: Number,
};
var cssClasses = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub",
};
// Namespaces of internal event listeners
var INTERNAL_EVENT_NS = {
    tooltips: ".__tooltips",
    aria: ".__aria",
};
//endregion
function testStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'step' is not numeric.");
    }
    // The step option can still be used to set stepping
    // for linear sliders. Overwritten if set in 'range'.
    parsed.singleStep = entry;
}
function testKeyboardPageMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
    }
    parsed.keyboardPageMultiplier = entry;
}
function testKeyboardMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
    }
    parsed.keyboardMultiplier = entry;
}
function testKeyboardDefaultStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
    }
    parsed.keyboardDefaultStep = entry;
}
function testRange(parsed, entry) {
    // Filter incorrect input.
    if (typeof entry !== "object" || Array.isArray(entry)) {
        throw new Error("noUiSlider: 'range' is not an object.");
    }
    // Catch missing start or end.
    if (entry.min === undefined || entry.max === undefined) {
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    }
    parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
}
function testStart(parsed, entry) {
    entry = asArray(entry);
    // Validate input. Values aren't tested, as the public .val method
    // will always provide a valid location.
    if (!Array.isArray(entry) || !entry.length) {
        throw new Error("noUiSlider: 'start' option is incorrect.");
    }
    // Store the number of handles.
    parsed.handles = entry.length;
    // When the slider is initialized, the .val method will
    // be called with the start options.
    parsed.start = entry;
}
function testSnap(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.snap = entry;
}
function testAnimate(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.animate = entry;
}
function testAnimationDuration(parsed, entry) {
    if (typeof entry !== "number") {
        throw new Error("noUiSlider: 'animationDuration' option must be a number.");
    }
    parsed.animationDuration = entry;
}
function testConnect(parsed, entry) {
    var connect = [false];
    var i;
    // Map legacy options
    if (entry === "lower") {
        entry = [true, false];
    }
    else if (entry === "upper") {
        entry = [false, true];
    }
    // Handle boolean options
    if (entry === true || entry === false) {
        for (i = 1; i < parsed.handles; i++) {
            connect.push(entry);
        }
        connect.push(false);
    }
    // Reject invalid input
    else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
        throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
    }
    else {
        connect = entry;
    }
    parsed.connect = connect;
}
function testOrientation(parsed, entry) {
    // Set orientation to an a numerical value for easy
    // array selection.
    switch (entry) {
        case "horizontal":
            parsed.ort = 0;
            break;
        case "vertical":
            parsed.ort = 1;
            break;
        default:
            throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
}
function testMargin(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'margin' option must be numeric.");
    }
    // Issue #582
    if (entry === 0) {
        return;
    }
    parsed.margin = parsed.spectrum.getDistance(entry);
}
function testLimit(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'limit' option must be numeric.");
    }
    parsed.limit = parsed.spectrum.getDistance(entry);
    if (!parsed.limit || parsed.handles < 2) {
        throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
}
function testPadding(parsed, entry) {
    var index;
    if (!isNumeric(entry) && !Array.isArray(entry)) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (entry === 0) {
        return;
    }
    if (!Array.isArray(entry)) {
        entry = [entry, entry];
    }
    // 'getDistance' returns false for invalid values.
    parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
        // last "range" can't contain step size as it is purely an endpoint.
        if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
            throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        }
    }
    var totalPadding = entry[0] + entry[1];
    var firstValue = parsed.spectrum.xVal[0];
    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
    if (totalPadding / (lastValue - firstValue) > 1) {
        throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
    }
}
function testDirection(parsed, entry) {
    // Set direction as a numerical value for easy parsing.
    // Invert connection for RTL sliders, so that the proper
    // handles get the connect/background classes.
    switch (entry) {
        case "ltr":
            parsed.dir = 0;
            break;
        case "rtl":
            parsed.dir = 1;
            break;
        default:
            throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
}
function testBehaviour(parsed, entry) {
    // Make sure the input is a string.
    if (typeof entry !== "string") {
        throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
    }
    // Check if the string contains any keywords.
    // None are required.
    var tap = entry.indexOf("tap") >= 0;
    var drag = entry.indexOf("drag") >= 0;
    var fixed = entry.indexOf("fixed") >= 0;
    var snap = entry.indexOf("snap") >= 0;
    var hover = entry.indexOf("hover") >= 0;
    var unconstrained = entry.indexOf("unconstrained") >= 0;
    var dragAll = entry.indexOf("drag-all") >= 0;
    var smoothSteps = entry.indexOf("smooth-steps") >= 0;
    if (fixed) {
        if (parsed.handles !== 2) {
            throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        }
        // Use margin to enforce fixed state
        testMargin(parsed, parsed.start[1] - parsed.start[0]);
    }
    if (unconstrained && (parsed.margin || parsed.limit)) {
        throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
    }
    parsed.events = {
        tap: tap || snap,
        drag: drag,
        dragAll: dragAll,
        smoothSteps: smoothSteps,
        fixed: fixed,
        snap: snap,
        hover: hover,
        unconstrained: unconstrained,
    };
}
function testTooltips(parsed, entry) {
    if (entry === false) {
        return;
    }
    if (entry === true || isValidPartialFormatter(entry)) {
        parsed.tooltips = [];
        for (var i = 0; i < parsed.handles; i++) {
            parsed.tooltips.push(entry);
        }
    }
    else {
        entry = asArray(entry);
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a formatter for all handles.");
        }
        entry.forEach(function (formatter) {
            if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
            }
        });
        parsed.tooltips = entry;
    }
}
function testHandleAttributes(parsed, entry) {
    if (entry.length !== parsed.handles) {
        throw new Error("noUiSlider: must pass a attributes for all handles.");
    }
    parsed.handleAttributes = entry;
}
function testAriaFormat(parsed, entry) {
    if (!isValidPartialFormatter(entry)) {
        throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
    }
    parsed.ariaFormat = entry;
}
function testFormat(parsed, entry) {
    if (!isValidFormatter(entry)) {
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    }
    parsed.format = entry;
}
function testKeyboardSupport(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
    }
    parsed.keyboardSupport = entry;
}
function testDocumentElement(parsed, entry) {
    // This is an advanced option. Passed values are used without validation.
    parsed.documentElement = entry;
}
function testCssPrefix(parsed, entry) {
    if (typeof entry !== "string" && entry !== false) {
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
    }
    parsed.cssPrefix = entry;
}
function testCssClasses(parsed, entry) {
    if (typeof entry !== "object") {
        throw new Error("noUiSlider: 'cssClasses' must be an object.");
    }
    if (typeof parsed.cssPrefix === "string") {
        parsed.cssClasses = {};
        Object.keys(entry).forEach(function (key) {
            parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
        });
    }
    else {
        parsed.cssClasses = entry;
    }
}
// Test all developer settings and parse to assumption-safe values.
function testOptions(options) {
    // To prove a fix for #537, freeze options here.
    // If the object is modified, an error will be thrown.
    // Object.freeze(options);
    var parsed = {
        margin: null,
        limit: null,
        padding: null,
        animate: true,
        animationDuration: 300,
        ariaFormat: defaultFormatter,
        format: defaultFormatter,
    };
    // Tests are executed in the order they are presented here.
    var tests = {
        step: { r: false, t: testStep },
        keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
        keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
        keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
        start: { r: true, t: testStart },
        connect: { r: true, t: testConnect },
        direction: { r: true, t: testDirection },
        snap: { r: false, t: testSnap },
        animate: { r: false, t: testAnimate },
        animationDuration: { r: false, t: testAnimationDuration },
        range: { r: true, t: testRange },
        orientation: { r: false, t: testOrientation },
        margin: { r: false, t: testMargin },
        limit: { r: false, t: testLimit },
        padding: { r: false, t: testPadding },
        behaviour: { r: true, t: testBehaviour },
        ariaFormat: { r: false, t: testAriaFormat },
        format: { r: false, t: testFormat },
        tooltips: { r: false, t: testTooltips },
        keyboardSupport: { r: true, t: testKeyboardSupport },
        documentElement: { r: false, t: testDocumentElement },
        cssPrefix: { r: true, t: testCssPrefix },
        cssClasses: { r: true, t: testCssClasses },
        handleAttributes: { r: false, t: testHandleAttributes },
    };
    var defaults = {
        connect: false,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: true,
        cssPrefix: "noUi-",
        cssClasses: cssClasses,
        keyboardPageMultiplier: 5,
        keyboardMultiplier: 1,
        keyboardDefaultStep: 10,
    };
    // AriaFormat defaults to regular format, if any.
    if (options.format && !options.ariaFormat) {
        options.ariaFormat = options.format;
    }
    // Run all options through a testing mechanism to ensure correct
    // input. It should be noted that options might get modified to
    // be handled properly. E.g. wrapping integers in arrays.
    Object.keys(tests).forEach(function (name) {
        // If the option isn't set, but it is required, throw an error.
        if (!isSet(options[name]) && defaults[name] === undefined) {
            if (tests[name].r) {
                throw new Error("noUiSlider: '" + name + "' is required.");
            }
            return;
        }
        tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
    });
    // Forward pips options
    parsed.pips = options.pips;
    // All recent browsers accept unprefixed transform.
    // We need -ms- for IE9 and -webkit- for older Android;
    // Assume use of -webkit- if unprefixed and -ms- are not supported.
    // https://caniuse.com/#feat=transforms2d
    var d = document.createElement("div");
    var msPrefix = d.style.msTransform !== undefined;
    var noPrefix = d.style.transform !== undefined;
    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
    // Pips don't move, so we can place them using left/top.
    var styles = [
        ["left", "top"],
        ["right", "bottom"],
    ];
    parsed.style = styles[parsed.dir][parsed.ort];
    return parsed;
}
//endregion
function scope(target, options, originalOptions) {
    var actions = getActions();
    var supportsTouchActionNone = getSupportsTouchActionNone();
    var supportsPassive = supportsTouchActionNone && getSupportsPassive();
    // All variables local to 'scope' are prefixed with 'scope_'
    // Slider DOM Nodes
    var scope_Target = target;
    var scope_Base;
    var scope_Handles;
    var scope_Connects;
    var scope_Pips;
    var scope_Tooltips;
    // Slider state values
    var scope_Spectrum = options.spectrum;
    var scope_Values = [];
    var scope_Locations = [];
    var scope_HandleNumbers = [];
    var scope_ActiveHandlesCount = 0;
    var scope_Events = {};
    // Document Nodes
    var scope_Document = target.ownerDocument;
    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
    var scope_Body = scope_Document.body;
    // For horizontal sliders in standard ltr documents,
    // make .noUi-origin overflow to the left so the document doesn't scroll.
    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
    // Creates a node, adds it to target, returns the new node.
    function addNodeTo(addTarget, className) {
        var div = scope_Document.createElement("div");
        if (className) {
            addClass(div, className);
        }
        addTarget.appendChild(div);
        return div;
    }
    // Append a origin to the base
    function addOrigin(base, handleNumber) {
        var origin = addNodeTo(base, options.cssClasses.origin);
        var handle = addNodeTo(origin, options.cssClasses.handle);
        addNodeTo(handle, options.cssClasses.touchArea);
        handle.setAttribute("data-handle", String(handleNumber));
        if (options.keyboardSupport) {
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
            // 0 = focusable and reachable
            handle.setAttribute("tabindex", "0");
            handle.addEventListener("keydown", function (event) {
                return eventKeydown(event, handleNumber);
            });
        }
        if (options.handleAttributes !== undefined) {
            var attributes_1 = options.handleAttributes[handleNumber];
            Object.keys(attributes_1).forEach(function (attribute) {
                handle.setAttribute(attribute, attributes_1[attribute]);
            });
        }
        handle.setAttribute("role", "slider");
        handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
        if (handleNumber === 0) {
            addClass(handle, options.cssClasses.handleLower);
        }
        else if (handleNumber === options.handles - 1) {
            addClass(handle, options.cssClasses.handleUpper);
        }
        origin.handle = handle;
        return origin;
    }
    // Insert nodes for connect elements
    function addConnect(base, add) {
        if (!add) {
            return false;
        }
        return addNodeTo(base, options.cssClasses.connect);
    }
    // Add handles to the slider base.
    function addElements(connectOptions, base) {
        var connectBase = addNodeTo(base, options.cssClasses.connects);
        scope_Handles = [];
        scope_Connects = [];
        scope_Connects.push(addConnect(connectBase, connectOptions[0]));
        // [::::O====O====O====]
        // connectOptions = [0, 1, 1, 1]
        for (var i = 0; i < options.handles; i++) {
            // Keep a list of all added handles.
            scope_Handles.push(addOrigin(base, i));
            scope_HandleNumbers[i] = i;
            scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
        }
    }
    // Initialize a single slider.
    function addSlider(addTarget) {
        // Apply classes and data to the target.
        addClass(addTarget, options.cssClasses.target);
        if (options.dir === 0) {
            addClass(addTarget, options.cssClasses.ltr);
        }
        else {
            addClass(addTarget, options.cssClasses.rtl);
        }
        if (options.ort === 0) {
            addClass(addTarget, options.cssClasses.horizontal);
        }
        else {
            addClass(addTarget, options.cssClasses.vertical);
        }
        var textDirection = getComputedStyle(addTarget).direction;
        if (textDirection === "rtl") {
            addClass(addTarget, options.cssClasses.textDirectionRtl);
        }
        else {
            addClass(addTarget, options.cssClasses.textDirectionLtr);
        }
        return addNodeTo(addTarget, options.cssClasses.base);
    }
    function addTooltip(handle, handleNumber) {
        if (!options.tooltips || !options.tooltips[handleNumber]) {
            return false;
        }
        return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
    }
    function isSliderDisabled() {
        return scope_Target.hasAttribute("disabled");
    }
    // Disable the slider dragging if any handle is disabled
    function isHandleDisabled(handleNumber) {
        var handleOrigin = scope_Handles[handleNumber];
        return handleOrigin.hasAttribute("disabled");
    }
    function disable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].setAttribute("disabled", "");
            scope_Handles[handleNumber].handle.removeAttribute("tabindex");
        }
        else {
            scope_Target.setAttribute("disabled", "");
            scope_Handles.forEach(function (handle) {
                handle.handle.removeAttribute("tabindex");
            });
        }
    }
    function enable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].removeAttribute("disabled");
            scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
        }
        else {
            scope_Target.removeAttribute("disabled");
            scope_Handles.forEach(function (handle) {
                handle.removeAttribute("disabled");
                handle.handle.setAttribute("tabindex", "0");
            });
        }
    }
    function removeTooltips() {
        if (scope_Tooltips) {
            removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
            scope_Tooltips.forEach(function (tooltip) {
                if (tooltip) {
                    removeElement(tooltip);
                }
            });
            scope_Tooltips = null;
        }
    }
    // The tooltips option is a shorthand for using the 'update' event.
    function tooltips() {
        removeTooltips();
        // Tooltips are added with options.tooltips in original order.
        scope_Tooltips = scope_Handles.map(addTooltip);
        bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
            if (!scope_Tooltips || !options.tooltips) {
                return;
            }
            if (scope_Tooltips[handleNumber] === false) {
                return;
            }
            var formattedValue = values[handleNumber];
            if (options.tooltips[handleNumber] !== true) {
                formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
            }
            scope_Tooltips[handleNumber].innerHTML = formattedValue;
        });
    }
    function aria() {
        removeEvent("update" + INTERNAL_EVENT_NS.aria);
        bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
            // Update Aria Values for all handles, as a change in one changes min and max values for the next.
            scope_HandleNumbers.forEach(function (index) {
                var handle = scope_Handles[index];
                var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                var now = positions[index];
                // Formatted value for display
                var text = String(options.ariaFormat.to(unencoded[index]));
                // Map to slider range values
                min = scope_Spectrum.fromStepping(min).toFixed(1);
                max = scope_Spectrum.fromStepping(max).toFixed(1);
                now = scope_Spectrum.fromStepping(now).toFixed(1);
                handle.children[0].setAttribute("aria-valuemin", min);
                handle.children[0].setAttribute("aria-valuemax", max);
                handle.children[0].setAttribute("aria-valuenow", now);
                handle.children[0].setAttribute("aria-valuetext", text);
            });
        });
    }
    function getGroup(pips) {
        // Use the range.
        if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) {
            return scope_Spectrum.xVal;
        }
        if (pips.mode === PipsMode.Count) {
            if (pips.values < 2) {
                throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
            }
            // Divide 0 - 100 in 'count' parts.
            var interval = pips.values - 1;
            var spread = 100 / interval;
            var values = [];
            // List these parts and have them handled as 'positions'.
            while (interval--) {
                values[interval] = interval * spread;
            }
            values.push(100);
            return mapToRange(values, pips.stepped);
        }
        if (pips.mode === PipsMode.Positions) {
            // Map all percentages to on-range values.
            return mapToRange(pips.values, pips.stepped);
        }
        if (pips.mode === PipsMode.Values) {
            // If the value must be stepped, it needs to be converted to a percentage first.
            if (pips.stepped) {
                return pips.values.map(function (value) {
                    // Convert to percentage, apply step, return to value.
                    return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                });
            }
            // Otherwise, we can simply use the values.
            return pips.values;
        }
        return []; // pips.mode = never
    }
    function mapToRange(values, stepped) {
        return values.map(function (value) {
            return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
        });
    }
    function generateSpread(pips) {
        function safeIncrement(value, increment) {
            // Avoid floating point variance by dropping the smallest decimal places.
            return Number((value + increment).toFixed(7));
        }
        var group = getGroup(pips);
        var indexes = {};
        var firstInRange = scope_Spectrum.xVal[0];
        var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
        var ignoreFirst = false;
        var ignoreLast = false;
        var prevPct = 0;
        // Create a copy of the group, sort it and filter away all duplicates.
        group = unique(group.slice().sort(function (a, b) {
            return a - b;
        }));
        // Make sure the range starts with the first element.
        if (group[0] !== firstInRange) {
            group.unshift(firstInRange);
            ignoreFirst = true;
        }
        // Likewise for the last one.
        if (group[group.length - 1] !== lastInRange) {
            group.push(lastInRange);
            ignoreLast = true;
        }
        group.forEach(function (current, index) {
            // Get the current step and the lower + upper positions.
            var step;
            var i;
            var q;
            var low = current;
            var high = group[index + 1];
            var newPct;
            var pctDifference;
            var pctPos;
            var type;
            var steps;
            var realSteps;
            var stepSize;
            var isSteps = pips.mode === PipsMode.Steps;
            // When using 'steps' mode, use the provided steps.
            // Otherwise, we'll step on to the next subrange.
            if (isSteps) {
                step = scope_Spectrum.xNumSteps[index];
            }
            // Default to a 'full' step.
            if (!step) {
                step = high - low;
            }
            // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
            if (high === undefined) {
                high = low;
            }
            // Make sure step isn't 0, which would cause an infinite loop (#654)
            step = Math.max(step, 0.0000001);
            // Find all steps in the subrange.
            for (i = low; i <= high; i = safeIncrement(i, step)) {
                // Get the percentage value for the current step,
                // calculate the size for the subrange.
                newPct = scope_Spectrum.toStepping(i);
                pctDifference = newPct - prevPct;
                steps = pctDifference / (pips.density || 1);
                realSteps = Math.round(steps);
                // This ratio represents the amount of percentage-space a point indicates.
                // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                // Round the percentage offset to an even number, then divide by two
                // to spread the offset on both sides of the range.
                stepSize = pctDifference / realSteps;
                // Divide all points evenly, adding the correct number to this subrange.
                // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                for (q = 1; q <= realSteps; q += 1) {
                    // The ratio between the rounded value and the actual size might be ~1% off.
                    // Correct the percentage offset by the number of points
                    // per subrange. density = 1 will result in 100 points on the
                    // full range, 2 for 50, 4 for 25, etc.
                    pctPos = prevPct + q * stepSize;
                    indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                }
                // Determine the point type.
                type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                if (!index && ignoreFirst && i !== high) {
                    type = 0;
                }
                if (!(i === high && ignoreLast)) {
                    // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                    indexes[newPct.toFixed(5)] = [i, type];
                }
                // Update the percentage count.
                prevPct = newPct;
            }
        });
        return indexes;
    }
    function addMarking(spread, filterFunc, formatter) {
        var _a, _b;
        var element = scope_Document.createElement("div");
        var valueSizeClasses = (_a = {},
            _a[PipsType.None] = "",
            _a[PipsType.NoValue] = options.cssClasses.valueNormal,
            _a[PipsType.LargeValue] = options.cssClasses.valueLarge,
            _a[PipsType.SmallValue] = options.cssClasses.valueSub,
            _a);
        var markerSizeClasses = (_b = {},
            _b[PipsType.None] = "",
            _b[PipsType.NoValue] = options.cssClasses.markerNormal,
            _b[PipsType.LargeValue] = options.cssClasses.markerLarge,
            _b[PipsType.SmallValue] = options.cssClasses.markerSub,
            _b);
        var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
        var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
        addClass(element, options.cssClasses.pips);
        addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
        function getClasses(type, source) {
            var a = source === options.cssClasses.value;
            var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
            var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
            return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
        }
        function addSpread(offset, value, type) {
            // Apply the filter function, if it is set.
            type = filterFunc ? filterFunc(value, type) : type;
            if (type === PipsType.None) {
                return;
            }
            // Add a marker for every point
            var node = addNodeTo(element, false);
            node.className = getClasses(type, options.cssClasses.marker);
            node.style[options.style] = offset + "%";
            // Values are only appended for points marked '1' or '2'.
            if (type > PipsType.NoValue) {
                node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.value);
                node.setAttribute("data-value", String(value));
                node.style[options.style] = offset + "%";
                node.innerHTML = String(formatter.to(value));
            }
        }
        // Append all points.
        Object.keys(spread).forEach(function (offset) {
            addSpread(offset, spread[offset][0], spread[offset][1]);
        });
        return element;
    }
    function removePips() {
        if (scope_Pips) {
            removeElement(scope_Pips);
            scope_Pips = null;
        }
    }
    function pips(pips) {
        // Fix #669
        removePips();
        var spread = generateSpread(pips);
        var filter = pips.filter;
        var format = pips.format || {
            to: function (value) {
                return String(Math.round(value));
            },
        };
        scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
        return scope_Pips;
    }
    // Shorthand for base dimensions.
    function baseSize() {
        var rect = scope_Base.getBoundingClientRect();
        var alt = ("offset" + ["Width", "Height"][options.ort]);
        return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
    }
    // Handler for attaching events trough a proxy.
    function attachEvent(events, element, callback, data) {
        // This function can be used to 'filter' events to the slider.
        // element is a node, not a nodeList
        var method = function (event) {
            var e = fixEvent(event, data.pageOffset, data.target || element);
            // fixEvent returns false if this event has a different target
            // when handling (multi-) touch events;
            if (!e) {
                return false;
            }
            // doNotReject is passed by all end events to make sure released touches
            // are not rejected, leaving the slider "stuck" to the cursor;
            if (isSliderDisabled() && !data.doNotReject) {
                return false;
            }
            // Stop if an active 'tap' transition is taking place.
            if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (data.hover && e.buttons) {
                return false;
            }
            // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
            // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
            // touch-action: manipulation, but that allows panning, which breaks
            // sliders after zooming/on non-responsive pages.
            // See: https://bugs.webkit.org/show_bug.cgi?id=133112
            if (!supportsPassive) {
                e.preventDefault();
            }
            e.calcPoint = e.points[options.ort];
            // Call the event handler with the event [ and additional data ].
            callback(e, data);
            return;
        };
        var methods = [];
        // Bind a closure on the target for every event type.
        events.split(" ").forEach(function (eventName) {
            element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
            methods.push([eventName, method]);
        });
        return methods;
    }
    // Provide a clean event with standardized offset values.
    function fixEvent(e, pageOffset, eventTarget) {
        // Filter the event to register the type, which can be
        // touch, mouse or pointer. Offset changes need to be
        // made on an event specific basis.
        var touch = e.type.indexOf("touch") === 0;
        var mouse = e.type.indexOf("mouse") === 0;
        var pointer = e.type.indexOf("pointer") === 0;
        var x = 0;
        var y = 0;
        // IE10 implemented pointer events with a prefix;
        if (e.type.indexOf("MSPointer") === 0) {
            pointer = true;
        }
        // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
        // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
        // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
        if (e.type === "mousedown" && !e.buttons && !e.touches) {
            return false;
        }
        // The only thing one handle should be concerned about is the touches that originated on top of it.
        if (touch) {
            // Returns true if a touch originated on the target.
            var isTouchOnTarget = function (checkTouch) {
                var target = checkTouch.target;
                return (target === eventTarget ||
                    eventTarget.contains(target) ||
                    (e.composed && e.composedPath().shift() === eventTarget));
            };
            // In the case of touchstart events, we need to make sure there is still no more than one
            // touch on the target so we look amongst all touches.
            if (e.type === "touchstart") {
                var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                // Do not support more than one touch per handle.
                if (targetTouches.length > 1) {
                    return false;
                }
                x = targetTouches[0].pageX;
                y = targetTouches[0].pageY;
            }
            else {
                // In the other cases, find on changedTouches is enough.
                var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                // Cancel if the target touch has not moved.
                if (!targetTouch) {
                    return false;
                }
                x = targetTouch.pageX;
                y = targetTouch.pageY;
            }
        }
        pageOffset = pageOffset || getPageOffset(scope_Document);
        if (mouse || pointer) {
            x = e.clientX + pageOffset.x;
            y = e.clientY + pageOffset.y;
        }
        e.pageOffset = pageOffset;
        e.points = [x, y];
        e.cursor = mouse || pointer; // Fix #435
        return e;
    }
    // Translate a coordinate in the document to a percentage on the slider
    function calcPointToPercentage(calcPoint) {
        var location = calcPoint - offset(scope_Base, options.ort);
        var proposal = (location * 100) / baseSize();
        // Clamp proposal between 0% and 100%
        // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
        // are used (e.g. contained handles feature)
        proposal = limit(proposal);
        return options.dir ? 100 - proposal : proposal;
    }
    // Find handle closest to a certain percentage on the slider
    function getClosestHandle(clickedPosition) {
        var smallestDifference = 100;
        var handleNumber = false;
        scope_Handles.forEach(function (handle, index) {
            // Disabled handles are ignored
            if (isHandleDisabled(index)) {
                return;
            }
            var handlePosition = scope_Locations[index];
            var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
            // Initial state
            var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
            // Difference with this handle is smaller than the previously checked handle
            var isCloser = differenceWithThisHandle < smallestDifference;
            var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
            if (isCloser || isCloserAfter || clickAtEdge) {
                handleNumber = index;
                smallestDifference = differenceWithThisHandle;
            }
        });
        return handleNumber;
    }
    // Fire 'end' when a mouse or pen leaves the document.
    function documentLeave(event, data) {
        if (event.type === "mouseout" &&
            event.target.nodeName === "HTML" &&
            event.relatedTarget === null) {
            eventEnd(event, data);
        }
    }
    // Handle movement on document for handle and range drag.
    function eventMove(event, data) {
        // Fix #498
        // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
        // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
        // IE9 has .buttons and .which zero on mousemove.
        // Firefox breaks the spec MDN defines.
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
            return eventEnd(event, data);
        }
        // Check if we are moving up or down
        var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
        // Convert the movement into a percentage of the slider width/height
        var proposal = (movement * 100) / data.baseSize;
        moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
    }
    // Unbind move events on document, call callbacks.
    function eventEnd(event, data) {
        // The handle is no longer active, so remove the class.
        if (data.handle) {
            removeClass(data.handle, options.cssClasses.active);
            scope_ActiveHandlesCount -= 1;
        }
        // Unbind the move and end events, which are added on 'start'.
        data.listeners.forEach(function (c) {
            scope_DocumentElement.removeEventListener(c[0], c[1]);
        });
        if (scope_ActiveHandlesCount === 0) {
            // Remove dragging class.
            removeClass(scope_Target, options.cssClasses.drag);
            setZindex();
            // Remove cursor styles and text-selection events bound to the body.
            if (event.cursor) {
                scope_Body.style.cursor = "";
                scope_Body.removeEventListener("selectstart", preventDefault);
            }
        }
        if (options.events.smoothSteps) {
            data.handleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
            });
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
            });
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            fireEvent("end", handleNumber);
        });
    }
    // Bind move events on document.
    function eventStart(event, data) {
        // Ignore event if any handle is disabled
        if (data.handleNumbers.some(isHandleDisabled)) {
            return;
        }
        var handle;
        if (data.handleNumbers.length === 1) {
            var handleOrigin = scope_Handles[data.handleNumbers[0]];
            handle = handleOrigin.children[0];
            scope_ActiveHandlesCount += 1;
            // Mark the handle as 'active' so it can be styled.
            addClass(handle, options.cssClasses.active);
        }
        // A drag should never propagate up to the 'tap' event.
        event.stopPropagation();
        // Record the event listeners.
        var listeners = [];
        // Attach the move and end events.
        var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
            // The event target has changed so we need to propagate the original one so that we keep
            // relying on it to extract target touches.
            target: event.target,
            handle: handle,
            connect: data.connect,
            listeners: listeners,
            startCalcPoint: event.calcPoint,
            baseSize: baseSize(),
            pageOffset: event.pageOffset,
            handleNumbers: data.handleNumbers,
            buttonsProperty: event.buttons,
            locations: scope_Locations.slice(),
        });
        var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        // We want to make sure we pushed the listeners in the listener list rather than creating
        // a new one as it has already been passed to the event handlers.
        listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
        // Text selection isn't an issue on touch devices,
        // so adding cursor styles can be skipped.
        if (event.cursor) {
            // Prevent the 'I' cursor and extend the range-drag cursor.
            scope_Body.style.cursor = getComputedStyle(event.target).cursor;
            // Mark the target with a dragging state.
            if (scope_Handles.length > 1) {
                addClass(scope_Target, options.cssClasses.drag);
            }
            // Prevent text selection when dragging the handles.
            // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
            // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
            // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
            // The 'cursor' flag is false.
            // See: http://caniuse.com/#search=selectstart
            scope_Body.addEventListener("selectstart", preventDefault, false);
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("start", handleNumber);
        });
    }
    // Move closest handle to tapped location.
    function eventTap(event) {
        // The tap event shouldn't propagate up
        event.stopPropagation();
        var proposal = calcPointToPercentage(event.calcPoint);
        var handleNumber = getClosestHandle(proposal);
        // Tackle the case that all handles are 'disabled'.
        if (handleNumber === false) {
            return;
        }
        // Flag the slider as it is now in a transitional state.
        // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
        if (!options.events.snap) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        setHandle(handleNumber, proposal, true, true);
        setZindex();
        fireEvent("slide", handleNumber, true);
        fireEvent("update", handleNumber, true);
        if (!options.events.snap) {
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);
        }
        else {
            eventStart(event, { handleNumbers: [handleNumber] });
        }
    }
    // Fires a 'hover' event for a hovered mouse/pen position.
    function eventHover(event) {
        var proposal = calcPointToPercentage(event.calcPoint);
        var to = scope_Spectrum.getStep(proposal);
        var value = scope_Spectrum.fromStepping(to);
        Object.keys(scope_Events).forEach(function (targetEvent) {
            if ("hover" === targetEvent.split(".")[0]) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(scope_Self, value);
                });
            }
        });
    }
    // Handles keydown on focused handles
    // Don't move the document when pressing arrow keys on focused handles
    function eventKeydown(event, handleNumber) {
        if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
            return false;
        }
        var horizontalKeys = ["Left", "Right"];
        var verticalKeys = ["Down", "Up"];
        var largeStepKeys = ["PageDown", "PageUp"];
        var edgeKeys = ["Home", "End"];
        if (options.dir && !options.ort) {
            // On an right-to-left slider, the left and right keys act inverted
            horizontalKeys.reverse();
        }
        else if (options.ort && !options.dir) {
            // On a top-to-bottom slider, the up and down keys act inverted
            verticalKeys.reverse();
            largeStepKeys.reverse();
        }
        // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
        var key = event.key.replace("Arrow", "");
        var isLargeDown = key === largeStepKeys[0];
        var isLargeUp = key === largeStepKeys[1];
        var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
        var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
        var isMin = key === edgeKeys[0];
        var isMax = key === edgeKeys[1];
        if (!isDown && !isUp && !isMin && !isMax) {
            return true;
        }
        event.preventDefault();
        var to;
        if (isUp || isDown) {
            var direction = isDown ? 0 : 1;
            var steps = getNextStepsForHandle(handleNumber);
            var step = steps[direction];
            // At the edge of a slider, do nothing
            if (step === null) {
                return false;
            }
            // No step set, use the default of 10% of the sub-range
            if (step === false) {
                step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
            }
            if (isLargeUp || isLargeDown) {
                step *= options.keyboardPageMultiplier;
            }
            else {
                step *= options.keyboardMultiplier;
            }
            // Step over zero-length ranges (#948);
            step = Math.max(step, 0.0000001);
            // Decrement for down steps
            step = (isDown ? -1 : 1) * step;
            to = scope_Values[handleNumber] + step;
        }
        else if (isMax) {
            // End key
            to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
        }
        else {
            // Home key
            to = options.spectrum.xVal[0];
        }
        setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
        fireEvent("slide", handleNumber);
        fireEvent("update", handleNumber);
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        return false;
    }
    // Attach events to several slider parts.
    function bindSliderEvents(behaviour) {
        // Attach the standard drag event to the handles.
        if (!behaviour.fixed) {
            scope_Handles.forEach(function (handle, index) {
                // These events are only bound to the visual handle
                // element, not the 'real' origin element.
                attachEvent(actions.start, handle.children[0], eventStart, {
                    handleNumbers: [index],
                });
            });
        }
        // Attach the tap event to the slider base.
        if (behaviour.tap) {
            attachEvent(actions.start, scope_Base, eventTap, {});
        }
        // Fire hover events
        if (behaviour.hover) {
            attachEvent(actions.move, scope_Base, eventHover, {
                hover: true,
            });
        }
        // Make the range draggable.
        if (behaviour.drag) {
            scope_Connects.forEach(function (connect, index) {
                if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                    return;
                }
                var handleBefore = scope_Handles[index - 1];
                var handleAfter = scope_Handles[index];
                var eventHolders = [connect];
                var handlesToDrag = [handleBefore, handleAfter];
                var handleNumbersToDrag = [index - 1, index];
                addClass(connect, options.cssClasses.draggable);
                // When the range is fixed, the entire range can
                // be dragged by the handles. The handle in the first
                // origin will propagate the start event upward,
                // but it needs to be bound manually on the other.
                if (behaviour.fixed) {
                    eventHolders.push(handleBefore.children[0]);
                    eventHolders.push(handleAfter.children[0]);
                }
                if (behaviour.dragAll) {
                    handlesToDrag = scope_Handles;
                    handleNumbersToDrag = scope_HandleNumbers;
                }
                eventHolders.forEach(function (eventHolder) {
                    attachEvent(actions.start, eventHolder, eventStart, {
                        handles: handlesToDrag,
                        handleNumbers: handleNumbersToDrag,
                        connect: connect,
                    });
                });
            });
        }
    }
    // Attach an event to this slider, possibly including a namespace
    function bindEvent(namespacedEvent, callback) {
        scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
        scope_Events[namespacedEvent].push(callback);
        // If the event bound is 'update,' fire it immediately for all handles.
        if (namespacedEvent.split(".")[0] === "update") {
            scope_Handles.forEach(function (a, index) {
                fireEvent("update", index);
            });
        }
    }
    function isInternalNamespace(namespace) {
        return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
    }
    // Undo attachment of event
    function removeEvent(namespacedEvent) {
        var event = namespacedEvent && namespacedEvent.split(".")[0];
        var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
        Object.keys(scope_Events).forEach(function (bind) {
            var tEvent = bind.split(".")[0];
            var tNamespace = bind.substring(tEvent.length);
            if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                // only delete protected internal event if intentional
                if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                    delete scope_Events[bind];
                }
            }
        });
    }
    // External event handling
    function fireEvent(eventName, handleNumber, tap) {
        Object.keys(scope_Events).forEach(function (targetEvent) {
            var eventType = targetEvent.split(".")[0];
            if (eventName === eventType) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(
                    // Use the slider public API as the scope ('this')
                    scope_Self, 
                    // Return values as array, so arg_1[arg_2] is always valid.
                    scope_Values.map(options.format.to), 
                    // Handle index, 0 or 1
                    handleNumber, 
                    // Un-formatted slider values
                    scope_Values.slice(), 
                    // Event is fired by tap, true or false
                    tap || false, 
                    // Left offset of the handle, in relation to the slider
                    scope_Locations.slice(), 
                    // add the slider public API to an accessible parameter when this is unavailable
                    scope_Self);
                });
            }
        });
    }
    // Split out the handle positioning logic so the Move event can use it, too
    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
        var distance;
        // For sliders with multiple handles, limit movement to the other handle.
        // Apply the margin option by adding it to the handle positions.
        if (scope_Handles.length > 1 && !options.events.unconstrained) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                to = Math.max(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                to = Math.min(to, distance);
            }
        }
        // The limit option has the opposite effect, limiting handles to a
        // maximum distance from another. Limit must be > 0, as otherwise
        // handles would be unmovable.
        if (scope_Handles.length > 1 && options.limit) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                to = Math.min(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                to = Math.max(to, distance);
            }
        }
        // The padding option keeps the handles a certain distance from the
        // edges of the slider. Padding must be > 0.
        if (options.padding) {
            if (handleNumber === 0) {
                distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                to = Math.max(to, distance);
            }
            if (handleNumber === scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                to = Math.min(to, distance);
            }
        }
        if (!smoothSteps) {
            to = scope_Spectrum.getStep(to);
        }
        // Limit percentage to the 0 - 100 range
        to = limit(to);
        // Return false if handle can't move
        if (to === reference[handleNumber] && !getValue) {
            return false;
        }
        return to;
    }
    // Uses slider orientation to create CSS rules. a = base value;
    function inRuleOrder(v, a) {
        var o = options.ort;
        return (o ? a : v) + ", " + (o ? v : a);
    }
    // Moves handle(s) by a percentage
    // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
    function moveHandles(upward, proposal, locations, handleNumbers, connect) {
        var proposals = locations.slice();
        // Store first handle now, so we still have it in case handleNumbers is reversed
        var firstHandle = handleNumbers[0];
        var smoothSteps = options.events.smoothSteps;
        var b = [!upward, upward];
        var f = [upward, !upward];
        // Copy handleNumbers so we don't change the dataset
        handleNumbers = handleNumbers.slice();
        // Check to see which handle is 'leading'.
        // If that one can't move the second can't either.
        if (upward) {
            handleNumbers.reverse();
        }
        // Step 1: get the maximum percentage that any of the handles can move
        if (handleNumbers.length > 1) {
            handleNumbers.forEach(function (handleNumber, o) {
                var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                // Stop if one of the handles can't move.
                if (to === false) {
                    proposal = 0;
                }
                else {
                    proposal = to - proposals[handleNumber];
                    proposals[handleNumber] = to;
                }
            });
        }
        // If using one handle, check backward AND forward
        else {
            b = f = [true];
        }
        var state = false;
        // Step 2: Try to set the handles with the found percentage
        handleNumbers.forEach(function (handleNumber, o) {
            state =
                setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
        });
        // Step 3: If a handle moved, fire events
        if (state) {
            handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                fireEvent("slide", handleNumber);
            });
            // If target is a connect, then fire drag event
            if (connect != undefined) {
                fireEvent("drag", firstHandle);
            }
        }
    }
    // Takes a base value and an offset. This offset is used for the connect bar size.
    // In the initial design for this feature, the origin element was 1% wide.
    // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
    // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
    function transformDirection(a, b) {
        return options.dir ? 100 - a - b : a;
    }
    // Updates scope_Locations and scope_Values, updates visual state
    function updateHandlePosition(handleNumber, to) {
        // Update locations.
        scope_Locations[handleNumber] = to;
        // Convert the value to the slider stepping/range.
        scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
        var translation = transformDirection(to, 0) - scope_DirOffset;
        var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
        scope_Handles[handleNumber].style[options.transformRule] = translateRule;
        updateConnect(handleNumber);
        updateConnect(handleNumber + 1);
    }
    // Handles before the slider middle are stacked later = higher,
    // Handles after the middle later is lower
    // [[7] [8] .......... | .......... [5] [4]
    function setZindex() {
        scope_HandleNumbers.forEach(function (handleNumber) {
            var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
            var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
            scope_Handles[handleNumber].style.zIndex = String(zIndex);
        });
    }
    // Test suggested values and apply margin, step.
    // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
        if (!exactInput) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
        }
        if (to === false) {
            return false;
        }
        updateHandlePosition(handleNumber, to);
        return true;
    }
    // Updates style attribute for connect nodes
    function updateConnect(index) {
        // Skip connects set to false
        if (!scope_Connects[index]) {
            return;
        }
        var l = 0;
        var h = 100;
        if (index !== 0) {
            l = scope_Locations[index - 1];
        }
        if (index !== scope_Connects.length - 1) {
            h = scope_Locations[index];
        }
        // We use two rules:
        // 'translate' to change the left/top offset;
        // 'scale' to change the width of the element;
        // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
        var connectWidth = h - l;
        var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
        var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
        scope_Connects[index].style[options.transformRule] =
            translateRule + " " + scaleRule;
    }
    // Parses value passed to .set method. Returns current value if not parse-able.
    function resolveToValue(to, handleNumber) {
        // Setting with null indicates an 'ignore'.
        // Inputting 'false' is invalid.
        if (to === null || to === false || to === undefined) {
            return scope_Locations[handleNumber];
        }
        // If a formatted number was passed, attempt to decode it.
        if (typeof to === "number") {
            to = String(to);
        }
        to = options.format.from(to);
        if (to !== false) {
            to = scope_Spectrum.toStepping(to);
        }
        // If parsing the number failed, use the current value.
        if (to === false || isNaN(to)) {
            return scope_Locations[handleNumber];
        }
        return to;
    }
    // Set the slider value.
    function valueSet(input, fireSetEvent, exactInput) {
        var values = asArray(input);
        var isInit = scope_Locations[0] === undefined;
        // Event fires by default
        fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
        // Animation is optional.
        // Make sure the initial values were set before using animated placement.
        if (options.animate && !isInit) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        // First pass, without lookAhead but with lookBackward. Values are set from left to right.
        scope_HandleNumbers.forEach(function (handleNumber) {
            setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
        });
        var i = scope_HandleNumbers.length === 1 ? 0 : 1;
        // Spread handles evenly across the slider if the range has no size (min=max)
        if (isInit && scope_Spectrum.hasNoSize()) {
            exactInput = true;
            scope_Locations[0] = 0;
            if (scope_HandleNumbers.length > 1) {
                var space_1 = 100 / (scope_HandleNumbers.length - 1);
                scope_HandleNumbers.forEach(function (handleNumber) {
                    scope_Locations[handleNumber] = handleNumber * space_1;
                });
            }
        }
        // Secondary passes. Now that all base values are set, apply constraints.
        // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
        for (; i < scope_HandleNumbers.length; ++i) {
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
            });
        }
        setZindex();
        scope_HandleNumbers.forEach(function (handleNumber) {
            fireEvent("update", handleNumber);
            // Fire the event only for handles that received a new value, as per #579
            if (values[handleNumber] !== null && fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        });
    }
    // Reset slider to initial values
    function valueReset(fireSetEvent) {
        valueSet(options.start, fireSetEvent);
    }
    // Set value for a single handle
    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
        // Ensure numeric input
        handleNumber = Number(handleNumber);
        if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
            throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
        }
        // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
        // The exactInput argument can be used to ignore slider stepping (#436)
        setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
        fireEvent("update", handleNumber);
        if (fireSetEvent) {
            fireEvent("set", handleNumber);
        }
    }
    // Get the slider value.
    function valueGet(unencoded) {
        if (unencoded === void 0) { unencoded = false; }
        if (unencoded) {
            // return a copy of the raw values
            return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
        }
        var values = scope_Values.map(options.format.to);
        // If only one handle is used, return a single value.
        if (values.length === 1) {
            return values[0];
        }
        return values;
    }
    // Removes classes from the root and empties it.
    function destroy() {
        // remove protected internal listeners
        removeEvent(INTERNAL_EVENT_NS.aria);
        removeEvent(INTERNAL_EVENT_NS.tooltips);
        Object.keys(options.cssClasses).forEach(function (key) {
            removeClass(scope_Target, options.cssClasses[key]);
        });
        while (scope_Target.firstChild) {
            scope_Target.removeChild(scope_Target.firstChild);
        }
        delete scope_Target.noUiSlider;
    }
    function getNextStepsForHandle(handleNumber) {
        var location = scope_Locations[handleNumber];
        var nearbySteps = scope_Spectrum.getNearbySteps(location);
        var value = scope_Values[handleNumber];
        var increment = nearbySteps.thisStep.step;
        var decrement = null;
        // If snapped, directly use defined step value
        if (options.snap) {
            return [
                value - nearbySteps.stepBefore.startValue || null,
                nearbySteps.stepAfter.startValue - value || null,
            ];
        }
        // If the next value in this step moves into the next step,
        // the increment is the start of the next step - the current value
        if (increment !== false) {
            if (value + increment > nearbySteps.stepAfter.startValue) {
                increment = nearbySteps.stepAfter.startValue - value;
            }
        }
        // If the value is beyond the starting point
        if (value > nearbySteps.thisStep.startValue) {
            decrement = nearbySteps.thisStep.step;
        }
        else if (nearbySteps.stepBefore.step === false) {
            decrement = false;
        }
        // If a handle is at the start of a step, it always steps back into the previous step first
        else {
            decrement = value - nearbySteps.stepBefore.highestStep;
        }
        // Now, if at the slider edges, there is no in/decrement
        if (location === 100) {
            increment = null;
        }
        else if (location === 0) {
            decrement = null;
        }
        // As per #391, the comparison for the decrement step can have some rounding issues.
        var stepDecimals = scope_Spectrum.countStepDecimals();
        // Round per #391
        if (increment !== null && increment !== false) {
            increment = Number(increment.toFixed(stepDecimals));
        }
        if (decrement !== null && decrement !== false) {
            decrement = Number(decrement.toFixed(stepDecimals));
        }
        return [decrement, increment];
    }
    // Get the current step size for the slider.
    function getNextSteps() {
        return scope_HandleNumbers.map(getNextStepsForHandle);
    }
    // Updatable: margin, limit, padding, step, range, animate, snap
    function updateOptions(optionsToUpdate, fireSetEvent) {
        // Spectrum is created using the range, snap, direction and step options.
        // 'snap' and 'step' can be updated.
        // If 'snap' and 'step' are not passed, they should remain unchanged.
        var v = valueGet();
        var updateAble = [
            "margin",
            "limit",
            "padding",
            "range",
            "animate",
            "snap",
            "step",
            "format",
            "pips",
            "tooltips",
        ];
        // Only change options that we're actually passed to update.
        updateAble.forEach(function (name) {
            // Check for undefined. null removes the value.
            if (optionsToUpdate[name] !== undefined) {
                originalOptions[name] = optionsToUpdate[name];
            }
        });
        var newOptions = testOptions(originalOptions);
        // Load new options into the slider state
        updateAble.forEach(function (name) {
            if (optionsToUpdate[name] !== undefined) {
                options[name] = newOptions[name];
            }
        });
        scope_Spectrum = newOptions.spectrum;
        // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
        options.margin = newOptions.margin;
        options.limit = newOptions.limit;
        options.padding = newOptions.padding;
        // Update pips, removes existing.
        if (options.pips) {
            pips(options.pips);
        }
        else {
            removePips();
        }
        // Update tooltips, removes existing.
        if (options.tooltips) {
            tooltips();
        }
        else {
            removeTooltips();
        }
        // Invalidate the current positioning so valueSet forces an update.
        scope_Locations = [];
        valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
    }
    // Initialization steps
    function setupSlider() {
        // Create the base element, initialize HTML and set classes.
        // Add handles and connect elements.
        scope_Base = addSlider(scope_Target);
        addElements(options.connect, scope_Base);
        // Attach user events.
        bindSliderEvents(options.events);
        // Use the public value method to set the start values.
        valueSet(options.start);
        if (options.pips) {
            pips(options.pips);
        }
        if (options.tooltips) {
            tooltips();
        }
        aria();
    }
    setupSlider();
    var scope_Self = {
        destroy: destroy,
        steps: getNextSteps,
        on: bindEvent,
        off: removeEvent,
        get: valueGet,
        set: valueSet,
        setHandle: valueSetHandle,
        reset: valueReset,
        disable: disable,
        enable: enable,
        // Exposed for unit testing, don't use this in your application.
        __moveHandles: function (upward, proposal, handleNumbers) {
            moveHandles(upward, proposal, scope_Locations, handleNumbers);
        },
        options: originalOptions,
        updateOptions: updateOptions,
        target: scope_Target,
        removePips: removePips,
        removeTooltips: removeTooltips,
        getPositions: function () {
            return scope_Locations.slice();
        },
        getTooltips: function () {
            return scope_Tooltips;
        },
        getOrigins: function () {
            return scope_Handles;
        },
        pips: pips, // Issue #594
    };
    return scope_Self;
}
// Run the standard initializer
function initialize(target, originalOptions) {
    if (!target || !target.nodeName) {
        throw new Error("noUiSlider: create requires a single element, got: " + target);
    }
    // Throw an error if the slider was already initialized.
    if (target.noUiSlider) {
        throw new Error("noUiSlider: Slider was already initialized.");
    }
    // Test the options and create the slider environment;
    var options = testOptions(originalOptions);
    var api = scope(target, options, originalOptions);
    target.noUiSlider = api;
    return api;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // Exposed for unit testing, don't use this in your application.
    __spectrum: Spectrum,
    // A reference to the default classes, allows global changes.
    // Use the cssClasses option for changes to one slider.
    cssClasses: cssClasses,
    create: initialize,
});


/***/ }),

/***/ "./src/js/files/forms/range.js":
/*!*************************************!*\
  !*** ./src/js/files/forms/range.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rangeInit: () => (/* binding */ rangeInit)
/* harmony export */ });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");
// Подключение из node_modules


// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import "nouislider/dist/nouislider.css";

function rangeInit() {
  const settingSlidersWrapper = document.querySelectorAll(".item-setting");
  settingSlidersWrapper.forEach((settingSliderWrapper) => {
    let settingSlider = settingSliderWrapper.querySelector(
      ".item-setting__slider"
    );
    nouislider__WEBPACK_IMPORTED_MODULE_0__.create(settingSlider, {
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

  // Сброс значений
  let buttonReset = document.querySelector("button-reset");
  if (buttonReset) {
    buttonReset.addEventListener("click", function () {
      settingSlidersWrapper.forEach((settingSliderWrapper) => {
        let settingSlider = settingSliderWrapper.querySelector(
          ".item-setting__slider"
        );
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  rangeInit();
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8a7f479d101029b7bc72")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZDYwZWViYzVjMDEzYWZiM2JmOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWE7QUFDTjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCO0FBQ3RCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtCQUErQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUE4QztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QyxrQ0FBa0MseUNBQXlDO0FBQzNFLDhCQUE4QixxQ0FBcUM7QUFDbkUsK0JBQStCLHNDQUFzQztBQUNyRSxpQkFBaUIsdUJBQXVCO0FBQ3hDLG1CQUFtQix5QkFBeUI7QUFDNUMscUJBQXFCLDJCQUEyQjtBQUNoRCxnQkFBZ0IsdUJBQXVCO0FBQ3ZDLG1CQUFtQiwwQkFBMEI7QUFDN0MsNkJBQTZCLG9DQUFvQztBQUNqRSxpQkFBaUIsdUJBQXVCO0FBQ3hDLHVCQUF1Qiw4QkFBOEI7QUFDckQsa0JBQWtCLHlCQUF5QjtBQUMzQyxpQkFBaUIsd0JBQXdCO0FBQ3pDLG1CQUFtQiwwQkFBMEI7QUFDN0MscUJBQXFCLDJCQUEyQjtBQUNoRCxzQkFBc0IsNkJBQTZCO0FBQ25ELGtCQUFrQix5QkFBeUI7QUFDM0Msb0JBQW9CLDJCQUEyQjtBQUMvQywyQkFBMkIsaUNBQWlDO0FBQzVELDJCQUEyQixrQ0FBa0M7QUFDN0QscUJBQXFCLDJCQUEyQjtBQUNoRCxzQkFBc0IsNEJBQTRCO0FBQ2xELDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsZ0JBQWdCO0FBQzVGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0JBQStCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0NBQWdDO0FBQy9DO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dDO0FBQ1Y7QUFDdEIsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5dEVGO0FBQ3lDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7O1VDOUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLm1qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvZm9ybXMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydCB2YXIgUGlwc01vZGU7XG4oZnVuY3Rpb24gKFBpcHNNb2RlKSB7XG4gICAgUGlwc01vZGVbXCJSYW5nZVwiXSA9IFwicmFuZ2VcIjtcbiAgICBQaXBzTW9kZVtcIlN0ZXBzXCJdID0gXCJzdGVwc1wiO1xuICAgIFBpcHNNb2RlW1wiUG9zaXRpb25zXCJdID0gXCJwb3NpdGlvbnNcIjtcbiAgICBQaXBzTW9kZVtcIkNvdW50XCJdID0gXCJjb3VudFwiO1xuICAgIFBpcHNNb2RlW1wiVmFsdWVzXCJdID0gXCJ2YWx1ZXNcIjtcbn0pKFBpcHNNb2RlIHx8IChQaXBzTW9kZSA9IHt9KSk7XG5leHBvcnQgdmFyIFBpcHNUeXBlO1xuKGZ1bmN0aW9uIChQaXBzVHlwZSkge1xuICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTm9uZVwiXSA9IC0xXSA9IFwiTm9uZVwiO1xuICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTm9WYWx1ZVwiXSA9IDBdID0gXCJOb1ZhbHVlXCI7XG4gICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJMYXJnZVZhbHVlXCJdID0gMV0gPSBcIkxhcmdlVmFsdWVcIjtcbiAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIlNtYWxsVmFsdWVcIl0gPSAyXSA9IFwiU21hbGxWYWx1ZVwiO1xufSkoUGlwc1R5cGUgfHwgKFBpcHNUeXBlID0ge30pKTtcbi8vcmVnaW9uIEhlbHBlciBNZXRob2RzXG5mdW5jdGlvbiBpc1ZhbGlkRm9ybWF0dGVyKGVudHJ5KSB7XG4gICAgcmV0dXJuIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSAmJiB0eXBlb2YgZW50cnkuZnJvbSA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24gaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpIHtcbiAgICAvLyBwYXJ0aWFsIGZvcm1hdHRlcnMgb25seSBuZWVkIGEgdG8gZnVuY3Rpb24gYW5kIG5vdCBhIGZyb20gZnVuY3Rpb25cbiAgICByZXR1cm4gdHlwZW9mIGVudHJ5ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBlbnRyeS50byA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbCkge1xuICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpO1xufVxuZnVuY3Rpb24gaXNTZXQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZDtcbn1cbi8vIEJpbmRhYmxlIHZlcnNpb25cbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG4vLyBSZW1vdmVzIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheS5cbmZ1bmN0aW9uIHVuaXF1ZShhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzW2FdID8gKHRoaXNbYV0gPSB0cnVlKSA6IGZhbHNlO1xuICAgIH0sIHt9KTtcbn1cbi8vIFJvdW5kIGEgdmFsdWUgdG8gdGhlIGNsb3Nlc3QgJ3RvJy5cbmZ1bmN0aW9uIGNsb3Nlc3QodmFsdWUsIHRvKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyB0bykgKiB0bztcbn1cbi8vIEN1cnJlbnQgcG9zaXRpb24gb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXG5mdW5jdGlvbiBvZmZzZXQoZWxlbSwgb3JpZW50YXRpb24pIHtcbiAgICB2YXIgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgICB2YXIgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIHBhZ2VPZmZzZXQgPSBnZXRQYWdlT2Zmc2V0KGRvYyk7XG4gICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGNvbnRhaW5zIGxlZnQgc2Nyb2xsIGluIENocm9tZSBvbiBBbmRyb2lkLlxuICAgIC8vIEkgaGF2ZW4ndCBmb3VuZCBhIGZlYXR1cmUgZGV0ZWN0aW9uIHRoYXQgcHJvdmVzIHRoaXMuIFdvcnN0IGNhc2VcbiAgICAvLyBzY2VuYXJpbyBvbiBtaXMtbWF0Y2g6IHRoZSAndGFwJyBmZWF0dXJlIG9uIGhvcml6b250YWwgc2xpZGVycyBicmVha3MuXG4gICAgaWYgKC93ZWJraXQuKkNocm9tZS4qTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICBwYWdlT2Zmc2V0LnggPSAwO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZW50YXRpb24gPyByZWN0LnRvcCArIHBhZ2VPZmZzZXQueSAtIGRvY0VsZW0uY2xpZW50VG9wIDogcmVjdC5sZWZ0ICsgcGFnZU9mZnNldC54IC0gZG9jRWxlbS5jbGllbnRMZWZ0O1xufVxuLy8gQ2hlY2tzIHdoZXRoZXIgYSB2YWx1ZSBpcyBudW1lcmljYWwuXG5mdW5jdGlvbiBpc051bWVyaWMoYSkge1xuICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4oYSkgJiYgaXNGaW5pdGUoYSk7XG59XG4vLyBTZXRzIGEgY2xhc3MgYW5kIHJlbW92ZXMgaXQgYWZ0ZXIgW2R1cmF0aW9uXSBtcy5cbmZ1bmN0aW9uIGFkZENsYXNzRm9yKGVsZW1lbnQsIGNsYXNzTmFtZSwgZHVyYXRpb24pIHtcbiAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgIH1cbn1cbi8vIExpbWl0cyBhIHZhbHVlIHRvIDAgLSAxMDBcbmZ1bmN0aW9uIGxpbWl0KGEpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oYSwgMTAwKSwgMCk7XG59XG4vLyBXcmFwcyBhIHZhcmlhYmxlIGFzIGFuIGFycmF5LCBpZiBpdCBpc24ndCBvbmUgeWV0LlxuLy8gTm90ZSB0aGF0IGFuIGlucHV0IGFycmF5IGlzIHJldHVybmVkIGJ5IHJlZmVyZW5jZSFcbmZ1bmN0aW9uIGFzQXJyYXkoYSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpID8gYSA6IFthXTtcbn1cbi8vIENvdW50cyBkZWNpbWFsc1xuZnVuY3Rpb24gY291bnREZWNpbWFscyhudW1TdHIpIHtcbiAgICBudW1TdHIgPSBTdHJpbmcobnVtU3RyKTtcbiAgICB2YXIgcGllY2VzID0gbnVtU3RyLnNwbGl0KFwiLlwiKTtcbiAgICByZXR1cm4gcGllY2VzLmxlbmd0aCA+IDEgPyBwaWVjZXNbMV0ubGVuZ3RoIDogMDtcbn1cbi8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNhZGRfY2xhc3NcbmZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lICs9IFwiIFwiICsgY2xhc3NOYW1lO1xuICAgIH1cbn1cbi8vIGh0dHA6Ly95b3VtaWdodG5vdG5lZWRqcXVlcnkuY29tLyNyZW1vdmVfY2xhc3NcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxiKVwiICsgY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKSArIFwiKFxcXFxifCQpXCIsIFwiZ2lcIiksIFwiIFwiKTtcbiAgICB9XG59XG4vLyBodHRwczovL3BsYWluanMuY29tL2phdmFzY3JpcHQvYXR0cmlidXRlcy9hZGRpbmctcmVtb3ZpbmctYW5kLXRlc3RpbmctZm9yLWNsYXNzZXMtOS9cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gZWwuY2xhc3NMaXN0ID8gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOiBuZXcgUmVnRXhwKFwiXFxcXGJcIiArIGNsYXNzTmFtZSArIFwiXFxcXGJcIikudGVzdChlbC5jbGFzc05hbWUpO1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9zY3JvbGxZI05vdGVzXG5mdW5jdGlvbiBnZXRQYWdlT2Zmc2V0KGRvYykge1xuICAgIHZhciBzdXBwb3J0UGFnZU9mZnNldCA9IHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpc0NTUzFDb21wYXQgPSAoZG9jLmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiO1xuICAgIHZhciB4ID0gc3VwcG9ydFBhZ2VPZmZzZXRcbiAgICAgICAgPyB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgID8gZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICA6IGRvYy5ib2R5LnNjcm9sbExlZnQ7XG4gICAgdmFyIHkgPSBzdXBwb3J0UGFnZU9mZnNldFxuICAgICAgICA/IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICA6IGlzQ1NTMUNvbXBhdFxuICAgICAgICAgICAgPyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxUb3A7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeSxcbiAgICB9O1xufVxuLy8gd2UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgY29uc3RhbnRzIGluc3RlYWRcbi8vIG9mIGFjY2Vzc2luZyB3aW5kb3cuKiBhcyBzb29uIGFzIHRoZSBtb2R1bGUgbmVlZHMgaXRcbi8vIHNvIHRoYXQgd2UgZG8gbm90IGNvbXB1dGUgYW55dGhpbmcgaWYgbm90IG5lZWRlZFxuZnVuY3Rpb24gZ2V0QWN0aW9ucygpIHtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIGV2ZW50cyB0byBiaW5kLiBJRTExIGltcGxlbWVudHMgcG9pbnRlckV2ZW50cyB3aXRob3V0XG4gICAgLy8gYSBwcmVmaXgsIHdoaWNoIGJyZWFrcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIElFMTAgaW1wbGVtZW50YXRpb24uXG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBzdGFydDogXCJwb2ludGVyZG93blwiLFxuICAgICAgICAgICAgbW92ZTogXCJwb2ludGVybW92ZVwiLFxuICAgICAgICAgICAgZW5kOiBcInBvaW50ZXJ1cFwiLFxuICAgICAgICB9XG4gICAgICAgIDogd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBzdGFydDogXCJNU1BvaW50ZXJEb3duXCIsXG4gICAgICAgICAgICAgICAgbW92ZTogXCJNU1BvaW50ZXJNb3ZlXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcIk1TUG9pbnRlclVwXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBzdGFydDogXCJtb3VzZWRvd24gdG91Y2hzdGFydFwiLFxuICAgICAgICAgICAgICAgIG1vdmU6IFwibW91c2Vtb3ZlIHRvdWNobW92ZVwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJtb3VzZXVwIHRvdWNoZW5kXCIsXG4gICAgICAgICAgICB9O1xufVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWRcbi8vIElzc3VlICM3ODVcbmZ1bmN0aW9uIGdldFN1cHBvcnRzUGFzc2l2ZSgpIHtcbiAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICB0cnkge1xuICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgbnVsbCwgb3B0cyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7IH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbn1cbmZ1bmN0aW9uIGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCkge1xuICAgIHJldHVybiB3aW5kb3cuQ1NTICYmIENTUy5zdXBwb3J0cyAmJiBDU1Muc3VwcG9ydHMoXCJ0b3VjaC1hY3Rpb25cIiwgXCJub25lXCIpO1xufVxuLy9lbmRyZWdpb25cbi8vcmVnaW9uIFJhbmdlIENhbGN1bGF0aW9uXG4vLyBEZXRlcm1pbmUgdGhlIHNpemUgb2YgYSBzdWItcmFuZ2UgaW4gcmVsYXRpb24gdG8gYSBmdWxsIHJhbmdlLlxuZnVuY3Rpb24gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpIHtcbiAgICByZXR1cm4gMTAwIC8gKHBiIC0gcGEpO1xufVxuLy8gKHBlcmNlbnRhZ2UpIEhvdyBtYW55IHBlcmNlbnQgaXMgdGhpcyB2YWx1ZSBvZiB0aGlzIHJhbmdlP1xuZnVuY3Rpb24gZnJvbVBlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlLCBzdGFydFJhbmdlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkgLyAocmFuZ2Vbc3RhcnRSYW5nZSArIDFdIC0gcmFuZ2Vbc3RhcnRSYW5nZV0pO1xufVxuLy8gKHBlcmNlbnRhZ2UpIFdoZXJlIGlzIHRoaXMgdmFsdWUgb24gdGhpcyByYW5nZT9cbmZ1bmN0aW9uIHRvUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gZnJvbVBlcmNlbnRhZ2UocmFuZ2UsIHJhbmdlWzBdIDwgMCA/IHZhbHVlICsgTWF0aC5hYnMocmFuZ2VbMF0pIDogdmFsdWUgLSByYW5nZVswXSwgMCk7XG59XG4vLyAodmFsdWUpIEhvdyBtdWNoIGlzIHRoaXMgcGVyY2VudGFnZSBvbiB0aGlzIHJhbmdlP1xuZnVuY3Rpb24gaXNQZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgKiAocmFuZ2VbMV0gLSByYW5nZVswXSkpIC8gMTAwICsgcmFuZ2VbMF07XG59XG5mdW5jdGlvbiBnZXRKKHZhbHVlLCBhcnIpIHtcbiAgICB2YXIgaiA9IDE7XG4gICAgd2hpbGUgKHZhbHVlID49IGFycltqXSkge1xuICAgICAgICBqICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBqO1xufVxuLy8gKHBlcmNlbnRhZ2UpIElucHV0IGEgdmFsdWUsIGZpbmQgd2hlcmUsIG9uIGEgc2NhbGUgb2YgMC0xMDAsIGl0IGFwcGxpZXMuXG5mdW5jdGlvbiB0b1N0ZXBwaW5nKHhWYWwsIHhQY3QsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID49IHhWYWwuc2xpY2UoLTEpWzBdKSB7XG4gICAgICAgIHJldHVybiAxMDA7XG4gICAgfVxuICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFZhbCk7XG4gICAgdmFyIHZhID0geFZhbFtqIC0gMV07XG4gICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICB2YXIgcGIgPSB4UGN0W2pdO1xuICAgIHJldHVybiBwYSArIHRvUGVyY2VudGFnZShbdmEsIHZiXSwgdmFsdWUpIC8gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpO1xufVxuLy8gKHZhbHVlKSBJbnB1dCBhIHBlcmNlbnRhZ2UsIGZpbmQgd2hlcmUgaXQgaXMgb24gdGhlIHNwZWNpZmllZCByYW5nZS5cbmZ1bmN0aW9uIGZyb21TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgIC8vIFRoZXJlIGlzIG5vIHJhbmdlIGdyb3VwIHRoYXQgZml0cyAxMDBcbiAgICBpZiAodmFsdWUgPj0gMTAwKSB7XG4gICAgICAgIHJldHVybiB4VmFsLnNsaWNlKC0xKVswXTtcbiAgICB9XG4gICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4UGN0KTtcbiAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICB2YXIgdmIgPSB4VmFsW2pdO1xuICAgIHZhciBwYSA9IHhQY3RbaiAtIDFdO1xuICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgcmV0dXJuIGlzUGVyY2VudGFnZShbdmEsIHZiXSwgKHZhbHVlIC0gcGEpICogc3ViUmFuZ2VSYXRpbyhwYSwgcGIpKTtcbn1cbi8vIChwZXJjZW50YWdlKSBHZXQgdGhlIHN0ZXAgdGhhdCBhcHBsaWVzIGF0IGEgY2VydGFpbiB2YWx1ZS5cbmZ1bmN0aW9uIGdldFN0ZXAoeFBjdCwgeFN0ZXBzLCBzbmFwLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gMTAwKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdmFyIGogPSBnZXRKKHZhbHVlLCB4UGN0KTtcbiAgICB2YXIgYSA9IHhQY3RbaiAtIDFdO1xuICAgIHZhciBiID0geFBjdFtqXTtcbiAgICAvLyBJZiAnc25hcCcgaXMgc2V0LCBzdGVwcyBhcmUgdXNlZCBhcyBmaXhlZCBwb2ludHMgb24gdGhlIHNsaWRlci5cbiAgICBpZiAoc25hcCkge1xuICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IHBvc2l0aW9uLCBhIG9yIGIuXG4gICAgICAgIGlmICh2YWx1ZSAtIGEgPiAoYiAtIGEpIC8gMikge1xuICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGlmICgheFN0ZXBzW2ogLSAxXSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB4UGN0W2ogLSAxXSArIGNsb3Nlc3QodmFsdWUgLSB4UGN0W2ogLSAxXSwgeFN0ZXBzW2ogLSAxXSk7XG59XG4vL2VuZHJlZ2lvblxuLy9yZWdpb24gU3BlY3RydW1cbnZhciBTcGVjdHJ1bSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTcGVjdHJ1bShlbnRyeSwgc25hcCwgc2luZ2xlU3RlcCkge1xuICAgICAgICB0aGlzLnhQY3QgPSBbXTtcbiAgICAgICAgdGhpcy54VmFsID0gW107XG4gICAgICAgIHRoaXMueFN0ZXBzID0gW107XG4gICAgICAgIHRoaXMueE51bVN0ZXBzID0gW107XG4gICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXAgPSBbXTtcbiAgICAgICAgdGhpcy54U3RlcHMgPSBbc2luZ2xlU3RlcCB8fCBmYWxzZV07XG4gICAgICAgIHRoaXMueE51bVN0ZXBzID0gW2ZhbHNlXTtcbiAgICAgICAgdGhpcy5zbmFwID0gc25hcDtcbiAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICB2YXIgb3JkZXJlZCA9IFtdO1xuICAgICAgICAvLyBNYXAgdGhlIG9iamVjdCBrZXlzIHRvIGFuIGFycmF5LlxuICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIG9yZGVyZWQucHVzaChbYXNBcnJheShlbnRyeVtpbmRleF0pLCBpbmRleF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gU29ydCBhbGwgZW50cmllcyBieSB2YWx1ZSAobnVtZXJpYyBzb3J0KS5cbiAgICAgICAgb3JkZXJlZC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYVswXVswXSAtIGJbMF1bMF07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDb252ZXJ0IGFsbCBlbnRyaWVzIHRvIHN1YnJhbmdlcy5cbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgb3JkZXJlZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50cnlQb2ludChvcmRlcmVkW2luZGV4XVsxXSwgb3JkZXJlZFtpbmRleF1bMF0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0b3JlIHRoZSBhY3R1YWwgc3RlcCB2YWx1ZXMuXG4gICAgICAgIC8vIHhTdGVwcyBpcyBzb3J0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgeFBjdCBhbmQgeFZhbC5cbiAgICAgICAgdGhpcy54TnVtU3RlcHMgPSB0aGlzLnhTdGVwcy5zbGljZSgwKTtcbiAgICAgICAgLy8gQ29udmVydCBhbGwgbnVtZXJpYyBzdGVwcyB0byB0aGUgcGVyY2VudGFnZSBvZiB0aGUgc3VicmFuZ2UgdGhleSByZXByZXNlbnQuXG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGVwUG9pbnQoaW5kZXgsIHRoaXMueE51bVN0ZXBzW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmdldERpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGRpc3RhbmNlc1tpbmRleF0gPSBmcm9tUGVyY2VudGFnZSh0aGlzLnhWYWwsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlcztcbiAgICB9O1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvdmVyIHRoZSB3aG9sZSBzY2FsZSBvZiByYW5nZXMuXG4gICAgLy8gZGlyZWN0aW9uOiAwID0gYmFja3dhcmRzIC8gMSA9IGZvcndhcmRzXG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmdldEFic29sdXRlRGlzdGFuY2UgPSBmdW5jdGlvbiAodmFsdWUsIGRpc3RhbmNlcywgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciB4UGN0X2luZGV4ID0gMDtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHJhbmdlIHdoZXJlIHRvIHN0YXJ0IGNhbGN1bGF0aW9uXG4gICAgICAgIGlmICh2YWx1ZSA8IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIHdoaWxlICh2YWx1ZSA+IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIHhQY3RfaW5kZXggPSB0aGlzLnhQY3QubGVuZ3RoIC0gMjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBsb29raW5nIGJhY2t3YXJkcyBhbmQgdGhlIHZhbHVlIGlzIGV4YWN0bHkgYXQgYSByYW5nZSBzZXBhcmF0b3IgdGhlbiBsb29rIG9uZSByYW5nZSBmdXJ0aGVyXG4gICAgICAgIGlmICghZGlyZWN0aW9uICYmIHZhbHVlID09PSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpc3RhbmNlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGlzdGFuY2VzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgdmFyIHJlc3RfZmFjdG9yID0gMTtcbiAgICAgICAgdmFyIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXhdO1xuICAgICAgICB2YXIgcmFuZ2VfcGN0ID0gMDtcbiAgICAgICAgdmFyIHJlbF9yYW5nZV9kaXN0YW5jZSA9IDA7XG4gICAgICAgIHZhciBhYnNfZGlzdGFuY2VfY291bnRlciA9IDA7XG4gICAgICAgIHZhciByYW5nZV9jb3VudGVyID0gMDtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHdoYXQgcGFydCBvZiB0aGUgc3RhcnQgcmFuZ2UgdGhlIHZhbHVlIGlzXG4gICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9ICh2YWx1ZSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHZhbHVlKSAvICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEbyB1bnRpbCB0aGUgY29tcGxldGUgZGlzdGFuY2UgYWNyb3NzIHJhbmdlcyBpcyBjYWxjdWxhdGVkXG4gICAgICAgIHdoaWxlIChyZXN0X3JlbF9kaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcGVyY2VudGFnZSBvZiB0b3RhbCByYW5nZVxuICAgICAgICAgICAgcmFuZ2VfcGN0ID0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxICsgcmFuZ2VfY291bnRlcl0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgLy8gRGV0ZWN0IGlmIHRoZSBtYXJnaW4sIHBhZGRpbmcgb3IgbGltaXQgaXMgbGFyZ2VyIHRoZW4gdGhlIGN1cnJlbnQgcmFuZ2UgYW5kIGNhbGN1bGF0ZVxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByZXN0X2ZhY3RvciArIDEwMCAtIHN0YXJ0X2ZhY3RvciAqIDEwMCA+IDEwMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGxhcmdlciB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIHdob2xlIHJhbmdlXG4gICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gcmFuZ2VfcGN0ICogc3RhcnRfZmFjdG9yO1xuICAgICAgICAgICAgICAgIC8vIFJlc3QgZmFjdG9yIG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gKHJlc3RfcmVsX2Rpc3RhbmNlIC0gMTAwICogc3RhcnRfZmFjdG9yKSAvIGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl07XG4gICAgICAgICAgICAgICAgLy8gU2V0IHN0YXJ0IGZhY3RvciB0byAxIGFzIGZvciBuZXh0IHJhbmdlIGl0IGRvZXMgbm90IGFwcGx5LlxuICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzbWFsbGVyIG9yIGVxdWFsIHRoZW4gdGFrZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvZiB0aGUgY2FsY3VsYXRlIHBlcmNlbnR1YWwgcGFydCBvZiB0aGF0IHJhbmdlXG4gICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gKChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmFuZ2VfcGN0KSAvIDEwMCkgKiByZXN0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAvLyBObyByZXN0IGxlZnQgYXMgdGhlIHJlc3QgZml0cyBpbiBjdXJyZW50IHJhbmdlXG4gICAgICAgICAgICAgICAgcmVzdF9mYWN0b3IgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIGFic19kaXN0YW5jZV9jb3VudGVyID0gYWJzX2Rpc3RhbmNlX2NvdW50ZXIgLSByZWxfcmFuZ2VfZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgLy8gTGltaXQgcmFuZ2UgdG8gZmlyc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWluaW11bSByYW5nZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnhQY3QubGVuZ3RoICsgcmFuZ2VfY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXItLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyICsgcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgIC8vIExpbWl0IHJhbmdlIHRvIGxhc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWF4aW11bSByYW5nZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnhQY3QubGVuZ3RoIC0gcmFuZ2VfY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXN0IG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgcmVzdF9yZWxfZGlzdGFuY2UgPSBkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlICsgYWJzX2Rpc3RhbmNlX2NvdW50ZXI7XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUudG9TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IHRvU3RlcHBpbmcodGhpcy54VmFsLCB0aGlzLnhQY3QsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmZyb21TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnJvbVN0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IGdldFN0ZXAodGhpcy54UGN0LCB0aGlzLnhTdGVwcywgdGhpcy5zbmFwLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREZWZhdWx0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSwgaXNEb3duLCBzaXplKSB7XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgdGhpcy54UGN0KTtcbiAgICAgICAgLy8gV2hlbiBhdCB0aGUgdG9wIG9yIHN0ZXBwaW5nIGRvd24sIGxvb2sgYXQgdGhlIHByZXZpb3VzIHN1Yi1yYW5nZVxuICAgICAgICBpZiAodmFsdWUgPT09IDEwMCB8fCAoaXNEb3duICYmIHZhbHVlID09PSB0aGlzLnhQY3RbaiAtIDFdKSkge1xuICAgICAgICAgICAgaiA9IE1hdGgubWF4KGogLSAxLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMueFZhbFtqXSAtIHRoaXMueFZhbFtqIC0gMV0pIC8gc2l6ZTtcbiAgICB9O1xuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXROZWFyYnlTdGVwcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGVwQmVmb3JlOiB7XG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAyXSxcbiAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqIC0gMl0sXG4gICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXNTdGVwOiB7XG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAxXSxcbiAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqIC0gMV0sXG4gICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDFdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0ZXBBZnRlcjoge1xuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqXSxcbiAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqXSxcbiAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY291bnRTdGVwRGVjaW1hbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSB0aGlzLnhOdW1TdGVwcy5tYXAoY291bnREZWNpbWFscyk7XG4gICAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBzdGVwRGVjaW1hbHMpO1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmhhc05vU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueFZhbFswXSA9PT0gdGhpcy54VmFsW3RoaXMueFZhbC5sZW5ndGggLSAxXTtcbiAgICB9O1xuICAgIC8vIE91dHNpZGUgdGVzdGluZ1xuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0ZXAodGhpcy50b1N0ZXBwaW5nKHZhbHVlKSk7XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlRW50cnlQb2ludCA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHBlcmNlbnRhZ2U7XG4gICAgICAgIC8vIENvdmVydCBtaW4vbWF4IHN5bnRheCB0byAwIGFuZCAxMDAuXG4gICAgICAgIGlmIChpbmRleCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgcGVyY2VudGFnZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwZXJjZW50YWdlID0gcGFyc2VGbG9hdChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgZm9yIGNvcnJlY3QgaW5wdXQuXG4gICAgICAgIGlmICghaXNOdW1lcmljKHBlcmNlbnRhZ2UpIHx8ICFpc051bWVyaWModmFsdWVbMF0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncmFuZ2UnIHZhbHVlIGlzbid0IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0b3JlIHZhbHVlcy5cbiAgICAgICAgdGhpcy54UGN0LnB1c2gocGVyY2VudGFnZSk7XG4gICAgICAgIHRoaXMueFZhbC5wdXNoKHZhbHVlWzBdKTtcbiAgICAgICAgdmFyIHZhbHVlMSA9IE51bWJlcih2YWx1ZVsxXSk7XG4gICAgICAgIC8vIE5hTiB3aWxsIGV2YWx1YXRlIHRvIGZhbHNlIHRvbywgYnV0IHRvIGtlZXBcbiAgICAgICAgLy8gbG9nZ2luZyBjbGVhciwgc2V0IHN0ZXAgZXhwbGljaXRseS4gTWFrZSBzdXJlXG4gICAgICAgIC8vIG5vdCB0byBvdmVycmlkZSB0aGUgJ3N0ZXAnIHNldHRpbmcgd2l0aCBmYWxzZS5cbiAgICAgICAgaWYgKCFwZXJjZW50YWdlKSB7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKHZhbHVlMSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhTdGVwc1swXSA9IHZhbHVlMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueFN0ZXBzLnB1c2goaXNOYU4odmFsdWUxKSA/IGZhbHNlIDogdmFsdWUxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwLnB1c2goMCk7XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlU3RlcFBvaW50ID0gZnVuY3Rpb24gKGksIG4pIHtcbiAgICAgICAgLy8gSWdub3JlICdmYWxzZScgc3RlcHBpbmcuXG4gICAgICAgIGlmICghbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICBpZiAodGhpcy54VmFsW2ldID09PSB0aGlzLnhWYWxbaSArIDFdKSB7XG4gICAgICAgICAgICB0aGlzLnhTdGVwc1tpXSA9IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSB0aGlzLnhWYWxbaV07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmFjdG9yIHRvIHJhbmdlIHJhdGlvXG4gICAgICAgIHRoaXMueFN0ZXBzW2ldID1cbiAgICAgICAgICAgIGZyb21QZXJjZW50YWdlKFt0aGlzLnhWYWxbaV0sIHRoaXMueFZhbFtpICsgMV1dLCBuLCAwKSAvIHN1YlJhbmdlUmF0aW8odGhpcy54UGN0W2ldLCB0aGlzLnhQY3RbaSArIDFdKTtcbiAgICAgICAgdmFyIHRvdGFsU3RlcHMgPSAodGhpcy54VmFsW2kgKyAxXSAtIHRoaXMueFZhbFtpXSkgLyB0aGlzLnhOdW1TdGVwc1tpXTtcbiAgICAgICAgdmFyIGhpZ2hlc3RTdGVwID0gTWF0aC5jZWlsKE51bWJlcih0b3RhbFN0ZXBzLnRvRml4ZWQoMykpIC0gMSk7XG4gICAgICAgIHZhciBzdGVwID0gdGhpcy54VmFsW2ldICsgdGhpcy54TnVtU3RlcHNbaV0gKiBoaWdoZXN0U3RlcDtcbiAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtpXSA9IHN0ZXA7XG4gICAgfTtcbiAgICByZXR1cm4gU3BlY3RydW07XG59KCkpO1xuLy9lbmRyZWdpb25cbi8vcmVnaW9uIE9wdGlvbnNcbi8qXHRFdmVyeSBpbnB1dCBvcHRpb24gaXMgdGVzdGVkIGFuZCBwYXJzZWQuIFRoaXMgd2lsbCBwcmV2ZW50XG4gICAgZW5kbGVzcyB2YWxpZGF0aW9uIGluIGludGVybmFsIG1ldGhvZHMuIFRoZXNlIHRlc3RzIGFyZVxuICAgIHN0cnVjdHVyZWQgd2l0aCBhbiBpdGVtIGZvciBldmVyeSBvcHRpb24gYXZhaWxhYmxlLiBBblxuICAgIG9wdGlvbiBjYW4gYmUgbWFya2VkIGFzIHJlcXVpcmVkIGJ5IHNldHRpbmcgdGhlICdyJyBmbGFnLlxuICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICAgICAgICAtIFRoZSBwcm92aWRlZCB2YWx1ZSBmb3IgdGhlIG9wdGlvbjtcbiAgICAgICAgLSBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBvYmplY3Q7XG4gICAgICAgIC0gVGhlIG5hbWUgZm9yIHRoZSBvcHRpb247XG5cbiAgICBUaGUgdGVzdGluZyBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIHdoZW4gYW4gZXJyb3IgaXMgZGV0ZWN0ZWQsXG4gICAgb3IgdHJ1ZSB3aGVuIGV2ZXJ5dGhpbmcgaXMgT0suIEl0IGNhbiBhbHNvIG1vZGlmeSB0aGUgb3B0aW9uXG4gICAgb2JqZWN0LCB0byBtYWtlIHN1cmUgYWxsIHZhbHVlcyBjYW4gYmUgY29ycmVjdGx5IGxvb3BlZCBlbHNld2hlcmUuICovXG4vL3JlZ2lvbiBEZWZhdWx0c1xudmFyIGRlZmF1bHRGb3JtYXR0ZXIgPSB7XG4gICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiB2YWx1ZS50b0ZpeGVkKDIpO1xuICAgIH0sXG4gICAgZnJvbTogTnVtYmVyLFxufTtcbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIHRhcmdldDogXCJ0YXJnZXRcIixcbiAgICBiYXNlOiBcImJhc2VcIixcbiAgICBvcmlnaW46IFwib3JpZ2luXCIsXG4gICAgaGFuZGxlOiBcImhhbmRsZVwiLFxuICAgIGhhbmRsZUxvd2VyOiBcImhhbmRsZS1sb3dlclwiLFxuICAgIGhhbmRsZVVwcGVyOiBcImhhbmRsZS11cHBlclwiLFxuICAgIHRvdWNoQXJlYTogXCJ0b3VjaC1hcmVhXCIsXG4gICAgaG9yaXpvbnRhbDogXCJob3Jpem9udGFsXCIsXG4gICAgdmVydGljYWw6IFwidmVydGljYWxcIixcbiAgICBiYWNrZ3JvdW5kOiBcImJhY2tncm91bmRcIixcbiAgICBjb25uZWN0OiBcImNvbm5lY3RcIixcbiAgICBjb25uZWN0czogXCJjb25uZWN0c1wiLFxuICAgIGx0cjogXCJsdHJcIixcbiAgICBydGw6IFwicnRsXCIsXG4gICAgdGV4dERpcmVjdGlvbkx0cjogXCJ0eHQtZGlyLWx0clwiLFxuICAgIHRleHREaXJlY3Rpb25SdGw6IFwidHh0LWRpci1ydGxcIixcbiAgICBkcmFnZ2FibGU6IFwiZHJhZ2dhYmxlXCIsXG4gICAgZHJhZzogXCJzdGF0ZS1kcmFnXCIsXG4gICAgdGFwOiBcInN0YXRlLXRhcFwiLFxuICAgIGFjdGl2ZTogXCJhY3RpdmVcIixcbiAgICB0b29sdGlwOiBcInRvb2x0aXBcIixcbiAgICBwaXBzOiBcInBpcHNcIixcbiAgICBwaXBzSG9yaXpvbnRhbDogXCJwaXBzLWhvcml6b250YWxcIixcbiAgICBwaXBzVmVydGljYWw6IFwicGlwcy12ZXJ0aWNhbFwiLFxuICAgIG1hcmtlcjogXCJtYXJrZXJcIixcbiAgICBtYXJrZXJIb3Jpem9udGFsOiBcIm1hcmtlci1ob3Jpem9udGFsXCIsXG4gICAgbWFya2VyVmVydGljYWw6IFwibWFya2VyLXZlcnRpY2FsXCIsXG4gICAgbWFya2VyTm9ybWFsOiBcIm1hcmtlci1ub3JtYWxcIixcbiAgICBtYXJrZXJMYXJnZTogXCJtYXJrZXItbGFyZ2VcIixcbiAgICBtYXJrZXJTdWI6IFwibWFya2VyLXN1YlwiLFxuICAgIHZhbHVlOiBcInZhbHVlXCIsXG4gICAgdmFsdWVIb3Jpem9udGFsOiBcInZhbHVlLWhvcml6b250YWxcIixcbiAgICB2YWx1ZVZlcnRpY2FsOiBcInZhbHVlLXZlcnRpY2FsXCIsXG4gICAgdmFsdWVOb3JtYWw6IFwidmFsdWUtbm9ybWFsXCIsXG4gICAgdmFsdWVMYXJnZTogXCJ2YWx1ZS1sYXJnZVwiLFxuICAgIHZhbHVlU3ViOiBcInZhbHVlLXN1YlwiLFxufTtcbi8vIE5hbWVzcGFjZXMgb2YgaW50ZXJuYWwgZXZlbnQgbGlzdGVuZXJzXG52YXIgSU5URVJOQUxfRVZFTlRfTlMgPSB7XG4gICAgdG9vbHRpcHM6IFwiLl9fdG9vbHRpcHNcIixcbiAgICBhcmlhOiBcIi5fX2FyaWFcIixcbn07XG4vL2VuZHJlZ2lvblxuZnVuY3Rpb24gdGVzdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgIH1cbiAgICAvLyBUaGUgc3RlcCBvcHRpb24gY2FuIHN0aWxsIGJlIHVzZWQgdG8gc2V0IHN0ZXBwaW5nXG4gICAgLy8gZm9yIGxpbmVhciBzbGlkZXJzLiBPdmVyd3JpdHRlbiBpZiBzZXQgaW4gJ3JhbmdlJy5cbiAgICBwYXJzZWQuc2luZ2xlU3RlcCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRQYWdlTXVsdGlwbGllcicgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQua2V5Ym9hcmRQYWdlTXVsdGlwbGllciA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEtleWJvYXJkTXVsdGlwbGllcihwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZE11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmtleWJvYXJkTXVsdGlwbGllciA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmREZWZhdWx0U3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQua2V5Ym9hcmREZWZhdWx0U3RlcCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdFJhbmdlKHBhcnNlZCwgZW50cnkpIHtcbiAgICAvLyBGaWx0ZXIgaW5jb3JyZWN0IGlucHV0LlxuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyBpcyBub3QgYW4gb2JqZWN0LlwiKTtcbiAgICB9XG4gICAgLy8gQ2F0Y2ggbWlzc2luZyBzdGFydCBvciBlbmQuXG4gICAgaWYgKGVudHJ5Lm1pbiA9PT0gdW5kZWZpbmVkIHx8IGVudHJ5Lm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IE1pc3NpbmcgJ21pbicgb3IgJ21heCcgaW4gJ3JhbmdlJy5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5zcGVjdHJ1bSA9IG5ldyBTcGVjdHJ1bShlbnRyeSwgcGFyc2VkLnNuYXAgfHwgZmFsc2UsIHBhcnNlZC5zaW5nbGVTdGVwKTtcbn1cbmZ1bmN0aW9uIHRlc3RTdGFydChwYXJzZWQsIGVudHJ5KSB7XG4gICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dC4gVmFsdWVzIGFyZW4ndCB0ZXN0ZWQsIGFzIHRoZSBwdWJsaWMgLnZhbCBtZXRob2RcbiAgICAvLyB3aWxsIGFsd2F5cyBwcm92aWRlIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzdGFydCcgb3B0aW9uIGlzIGluY29ycmVjdC5cIik7XG4gICAgfVxuICAgIC8vIFN0b3JlIHRoZSBudW1iZXIgb2YgaGFuZGxlcy5cbiAgICBwYXJzZWQuaGFuZGxlcyA9IGVudHJ5Lmxlbmd0aDtcbiAgICAvLyBXaGVuIHRoZSBzbGlkZXIgaXMgaW5pdGlhbGl6ZWQsIHRoZSAudmFsIG1ldGhvZCB3aWxsXG4gICAgLy8gYmUgY2FsbGVkIHdpdGggdGhlIHN0YXJ0IG9wdGlvbnMuXG4gICAgcGFyc2VkLnN0YXJ0ID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0U25hcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3NuYXAnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgfVxuICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxuICAgIHBhcnNlZC5zbmFwID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0QW5pbWF0ZShwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGUnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgfVxuICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxuICAgIHBhcnNlZC5hbmltYXRlID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGlvbkR1cmF0aW9uJyBvcHRpb24gbXVzdCBiZSBhIG51bWJlci5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5hbmltYXRpb25EdXJhdGlvbiA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdENvbm5lY3QocGFyc2VkLCBlbnRyeSkge1xuICAgIHZhciBjb25uZWN0ID0gW2ZhbHNlXTtcbiAgICB2YXIgaTtcbiAgICAvLyBNYXAgbGVnYWN5IG9wdGlvbnNcbiAgICBpZiAoZW50cnkgPT09IFwibG93ZXJcIikge1xuICAgICAgICBlbnRyeSA9IFt0cnVlLCBmYWxzZV07XG4gICAgfVxuICAgIGVsc2UgaWYgKGVudHJ5ID09PSBcInVwcGVyXCIpIHtcbiAgICAgICAgZW50cnkgPSBbZmFsc2UsIHRydWVdO1xuICAgIH1cbiAgICAvLyBIYW5kbGUgYm9vbGVhbiBvcHRpb25zXG4gICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGVudHJ5ID09PSBmYWxzZSkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgcGFyc2VkLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgY29ubmVjdC5wdXNoKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0LnB1c2goZmFsc2UpO1xuICAgIH1cbiAgICAvLyBSZWplY3QgaW52YWxpZCBpbnB1dFxuICAgIGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoIHx8IGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMgKyAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjb25uZWN0JyBvcHRpb24gZG9lc24ndCBtYXRjaCBoYW5kbGUgY291bnQuXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29ubmVjdCA9IGVudHJ5O1xuICAgIH1cbiAgICBwYXJzZWQuY29ubmVjdCA9IGNvbm5lY3Q7XG59XG5mdW5jdGlvbiB0ZXN0T3JpZW50YXRpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgIC8vIFNldCBvcmllbnRhdGlvbiB0byBhbiBhIG51bWVyaWNhbCB2YWx1ZSBmb3IgZWFzeVxuICAgIC8vIGFycmF5IHNlbGVjdGlvbi5cbiAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgICAgICBwYXJzZWQub3J0ID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidmVydGljYWxcIjpcbiAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnb3JpZW50YXRpb24nIG9wdGlvbiBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0ZXN0TWFyZ2luKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ21hcmdpbicgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgfVxuICAgIC8vIElzc3VlICM1ODJcbiAgICBpZiAoZW50cnkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwYXJzZWQubWFyZ2luID0gcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5KTtcbn1cbmZ1bmN0aW9uIHRlc3RMaW1pdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5saW1pdCA9IHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeSk7XG4gICAgaWYgKCFwYXJzZWQubGltaXQgfHwgcGFyc2VkLmhhbmRsZXMgPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIGlzIG9ubHkgc3VwcG9ydGVkIG9uIGxpbmVhciBzbGlkZXJzIHdpdGggMiBvciBtb3JlIGhhbmRsZXMuXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRlc3RQYWRkaW5nKHBhcnNlZCwgZW50cnkpIHtcbiAgICB2YXIgaW5kZXg7XG4gICAgaWYgKCFpc051bWVyaWMoZW50cnkpICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSAmJiAhKGVudHJ5Lmxlbmd0aCA9PT0gMiB8fCBpc051bWVyaWMoZW50cnlbMF0pIHx8IGlzTnVtZXJpYyhlbnRyeVsxXSkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBudW1lcmljIG9yIGFycmF5IG9mIGV4YWN0bHkgMiBudW1iZXJzLlwiKTtcbiAgICB9XG4gICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICBlbnRyeSA9IFtlbnRyeSwgZW50cnldO1xuICAgIH1cbiAgICAvLyAnZ2V0RGlzdGFuY2UnIHJldHVybnMgZmFsc2UgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgIHBhcnNlZC5wYWRkaW5nID0gW3BhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVswXSksIHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVsxXSldO1xuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHBhcnNlZC5zcGVjdHJ1bS54TnVtU3RlcHMubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAvLyBsYXN0IFwicmFuZ2VcIiBjYW4ndCBjb250YWluIHN0ZXAgc2l6ZSBhcyBpdCBpcyBwdXJlbHkgYW4gZW5kcG9pbnQuXG4gICAgICAgIGlmIChwYXJzZWQucGFkZGluZ1swXVtpbmRleF0gPCAwIHx8IHBhcnNlZC5wYWRkaW5nWzFdW2luZGV4XSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcihzKS5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHRvdGFsUGFkZGluZyA9IGVudHJ5WzBdICsgZW50cnlbMV07XG4gICAgdmFyIGZpcnN0VmFsdWUgPSBwYXJzZWQuc3BlY3RydW0ueFZhbFswXTtcbiAgICB2YXIgbGFzdFZhbHVlID0gcGFyc2VkLnNwZWN0cnVtLnhWYWxbcGFyc2VkLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgaWYgKHRvdGFsUGFkZGluZyAvIChsYXN0VmFsdWUgLSBmaXJzdFZhbHVlKSA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IG5vdCBleGNlZWQgMTAwJSBvZiB0aGUgcmFuZ2UuXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRlc3REaXJlY3Rpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgIC8vIFNldCBkaXJlY3Rpb24gYXMgYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3kgcGFyc2luZy5cbiAgICAvLyBJbnZlcnQgY29ubmVjdGlvbiBmb3IgUlRMIHNsaWRlcnMsIHNvIHRoYXQgdGhlIHByb3BlclxuICAgIC8vIGhhbmRsZXMgZ2V0IHRoZSBjb25uZWN0L2JhY2tncm91bmQgY2xhc3Nlcy5cbiAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgIGNhc2UgXCJsdHJcIjpcbiAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJydGxcIjpcbiAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZGlyZWN0aW9uJyBvcHRpb24gd2FzIG5vdCByZWNvZ25pemVkLlwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0ZXN0QmVoYXZpb3VyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIGlucHV0IGlzIGEgc3RyaW5nLlxuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2JlaGF2aW91cicgbXVzdCBiZSBhIHN0cmluZyBjb250YWluaW5nIG9wdGlvbnMuXCIpO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIGFueSBrZXl3b3Jkcy5cbiAgICAvLyBOb25lIGFyZSByZXF1aXJlZC5cbiAgICB2YXIgdGFwID0gZW50cnkuaW5kZXhPZihcInRhcFwiKSA+PSAwO1xuICAgIHZhciBkcmFnID0gZW50cnkuaW5kZXhPZihcImRyYWdcIikgPj0gMDtcbiAgICB2YXIgZml4ZWQgPSBlbnRyeS5pbmRleE9mKFwiZml4ZWRcIikgPj0gMDtcbiAgICB2YXIgc25hcCA9IGVudHJ5LmluZGV4T2YoXCJzbmFwXCIpID49IDA7XG4gICAgdmFyIGhvdmVyID0gZW50cnkuaW5kZXhPZihcImhvdmVyXCIpID49IDA7XG4gICAgdmFyIHVuY29uc3RyYWluZWQgPSBlbnRyeS5pbmRleE9mKFwidW5jb25zdHJhaW5lZFwiKSA+PSAwO1xuICAgIHZhciBkcmFnQWxsID0gZW50cnkuaW5kZXhPZihcImRyYWctYWxsXCIpID49IDA7XG4gICAgdmFyIHNtb290aFN0ZXBzID0gZW50cnkuaW5kZXhPZihcInNtb290aC1zdGVwc1wiKSA+PSAwO1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgICBpZiAocGFyc2VkLmhhbmRsZXMgIT09IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdmaXhlZCcgYmVoYXZpb3VyIG11c3QgYmUgdXNlZCB3aXRoIDIgaGFuZGxlc1wiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVc2UgbWFyZ2luIHRvIGVuZm9yY2UgZml4ZWQgc3RhdGVcbiAgICAgICAgdGVzdE1hcmdpbihwYXJzZWQsIHBhcnNlZC5zdGFydFsxXSAtIHBhcnNlZC5zdGFydFswXSk7XG4gICAgfVxuICAgIGlmICh1bmNvbnN0cmFpbmVkICYmIChwYXJzZWQubWFyZ2luIHx8IHBhcnNlZC5saW1pdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3VuY29uc3RyYWluZWQnIGJlaGF2aW91ciBjYW5ub3QgYmUgdXNlZCB3aXRoIG1hcmdpbiBvciBsaW1pdFwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmV2ZW50cyA9IHtcbiAgICAgICAgdGFwOiB0YXAgfHwgc25hcCxcbiAgICAgICAgZHJhZzogZHJhZyxcbiAgICAgICAgZHJhZ0FsbDogZHJhZ0FsbCxcbiAgICAgICAgc21vb3RoU3RlcHM6IHNtb290aFN0ZXBzLFxuICAgICAgICBmaXhlZDogZml4ZWQsXG4gICAgICAgIHNuYXA6IHNuYXAsXG4gICAgICAgIGhvdmVyOiBob3ZlcixcbiAgICAgICAgdW5jb25zdHJhaW5lZDogdW5jb25zdHJhaW5lZCxcbiAgICB9O1xufVxuZnVuY3Rpb24gdGVzdFRvb2x0aXBzKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoZW50cnkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICBwYXJzZWQudG9vbHRpcHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMucHVzaChlbnRyeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVudHJ5ID0gYXNBcnJheShlbnRyeSk7XG4gICAgICAgIGlmIChlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBtdXN0IHBhc3MgYSBmb3JtYXR0ZXIgZm9yIGFsbCBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm9ybWF0dGVyICE9PSBcImJvb2xlYW5cIiAmJiAhaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZm9ybWF0dGVyKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd0b29sdGlwcycgbXVzdCBiZSBwYXNzZWQgYSBmb3JtYXR0ZXIgb3IgJ2ZhbHNlJy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBwYXJzZWQudG9vbHRpcHMgPSBlbnRyeTtcbiAgICB9XG59XG5mdW5jdGlvbiB0ZXN0SGFuZGxlQXR0cmlidXRlcyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogbXVzdCBwYXNzIGEgYXR0cmlidXRlcyBmb3IgYWxsIGhhbmRsZXMuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQuaGFuZGxlQXR0cmlidXRlcyA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEFyaWFGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhcmlhRm9ybWF0JyByZXF1aXJlcyAndG8nIG1ldGhvZC5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5hcmlhRm9ybWF0ID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0Rm9ybWF0KHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoIWlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdmb3JtYXQnIHJlcXVpcmVzICd0bycgYW5kICdmcm9tJyBtZXRob2RzLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmZvcm1hdCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEtleWJvYXJkU3VwcG9ydChwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkU3VwcG9ydCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmtleWJvYXJkU3VwcG9ydCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdERvY3VtZW50RWxlbWVudChwYXJzZWQsIGVudHJ5KSB7XG4gICAgLy8gVGhpcyBpcyBhbiBhZHZhbmNlZCBvcHRpb24uIFBhc3NlZCB2YWx1ZXMgYXJlIHVzZWQgd2l0aG91dCB2YWxpZGF0aW9uLlxuICAgIHBhcnNlZC5kb2N1bWVudEVsZW1lbnQgPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RDc3NQcmVmaXgocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwic3RyaW5nXCIgJiYgZW50cnkgIT09IGZhbHNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjc3NQcmVmaXgnIG11c3QgYmUgYSBzdHJpbmcgb3IgYGZhbHNlYC5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5jc3NQcmVmaXggPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RDc3NDbGFzc2VzKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjc3NDbGFzc2VzJyBtdXN0IGJlIGFuIG9iamVjdC5cIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcGFyc2VkLmNzc1ByZWZpeCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3Nlc1trZXldID0gcGFyc2VkLmNzc1ByZWZpeCArIGVudHJ5W2tleV07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXMgPSBlbnRyeTtcbiAgICB9XG59XG4vLyBUZXN0IGFsbCBkZXZlbG9wZXIgc2V0dGluZ3MgYW5kIHBhcnNlIHRvIGFzc3VtcHRpb24tc2FmZSB2YWx1ZXMuXG5mdW5jdGlvbiB0ZXN0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgLy8gVG8gcHJvdmUgYSBmaXggZm9yICM1MzcsIGZyZWV6ZSBvcHRpb25zIGhlcmUuXG4gICAgLy8gSWYgdGhlIG9iamVjdCBpcyBtb2RpZmllZCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gICAgLy8gT2JqZWN0LmZyZWV6ZShvcHRpb25zKTtcbiAgICB2YXIgcGFyc2VkID0ge1xuICAgICAgICBtYXJnaW46IG51bGwsXG4gICAgICAgIGxpbWl0OiBudWxsLFxuICAgICAgICBwYWRkaW5nOiBudWxsLFxuICAgICAgICBhbmltYXRlOiB0cnVlLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuICAgICAgICBhcmlhRm9ybWF0OiBkZWZhdWx0Rm9ybWF0dGVyLFxuICAgICAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXR0ZXIsXG4gICAgfTtcbiAgICAvLyBUZXN0cyBhcmUgZXhlY3V0ZWQgaW4gdGhlIG9yZGVyIHRoZXkgYXJlIHByZXNlbnRlZCBoZXJlLlxuICAgIHZhciB0ZXN0cyA9IHtcbiAgICAgICAgc3RlcDogeyByOiBmYWxzZSwgdDogdGVzdFN0ZXAgfSxcbiAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIgfSxcbiAgICAgICAga2V5Ym9hcmRNdWx0aXBsaWVyOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmRNdWx0aXBsaWVyIH0sXG4gICAgICAgIGtleWJvYXJkRGVmYXVsdFN0ZXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZERlZmF1bHRTdGVwIH0sXG4gICAgICAgIHN0YXJ0OiB7IHI6IHRydWUsIHQ6IHRlc3RTdGFydCB9LFxuICAgICAgICBjb25uZWN0OiB7IHI6IHRydWUsIHQ6IHRlc3RDb25uZWN0IH0sXG4gICAgICAgIGRpcmVjdGlvbjogeyByOiB0cnVlLCB0OiB0ZXN0RGlyZWN0aW9uIH0sXG4gICAgICAgIHNuYXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RTbmFwIH0sXG4gICAgICAgIGFuaW1hdGU6IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRlIH0sXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24gfSxcbiAgICAgICAgcmFuZ2U6IHsgcjogdHJ1ZSwgdDogdGVzdFJhbmdlIH0sXG4gICAgICAgIG9yaWVudGF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0T3JpZW50YXRpb24gfSxcbiAgICAgICAgbWFyZ2luOiB7IHI6IGZhbHNlLCB0OiB0ZXN0TWFyZ2luIH0sXG4gICAgICAgIGxpbWl0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0TGltaXQgfSxcbiAgICAgICAgcGFkZGluZzogeyByOiBmYWxzZSwgdDogdGVzdFBhZGRpbmcgfSxcbiAgICAgICAgYmVoYXZpb3VyOiB7IHI6IHRydWUsIHQ6IHRlc3RCZWhhdmlvdXIgfSxcbiAgICAgICAgYXJpYUZvcm1hdDogeyByOiBmYWxzZSwgdDogdGVzdEFyaWFGb3JtYXQgfSxcbiAgICAgICAgZm9ybWF0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0Rm9ybWF0IH0sXG4gICAgICAgIHRvb2x0aXBzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0VG9vbHRpcHMgfSxcbiAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB7IHI6IHRydWUsIHQ6IHRlc3RLZXlib2FyZFN1cHBvcnQgfSxcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50OiB7IHI6IGZhbHNlLCB0OiB0ZXN0RG9jdW1lbnRFbGVtZW50IH0sXG4gICAgICAgIGNzc1ByZWZpeDogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzUHJlZml4IH0sXG4gICAgICAgIGNzc0NsYXNzZXM6IHsgcjogdHJ1ZSwgdDogdGVzdENzc0NsYXNzZXMgfSxcbiAgICAgICAgaGFuZGxlQXR0cmlidXRlczogeyByOiBmYWxzZSwgdDogdGVzdEhhbmRsZUF0dHJpYnV0ZXMgfSxcbiAgICB9O1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgY29ubmVjdDogZmFsc2UsXG4gICAgICAgIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgICAgICAgYmVoYXZpb3VyOiBcInRhcFwiLFxuICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgIGtleWJvYXJkU3VwcG9ydDogdHJ1ZSxcbiAgICAgICAgY3NzUHJlZml4OiBcIm5vVWktXCIsXG4gICAgICAgIGNzc0NsYXNzZXM6IGNzc0NsYXNzZXMsXG4gICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IDUsXG4gICAgICAgIGtleWJvYXJkTXVsdGlwbGllcjogMSxcbiAgICAgICAga2V5Ym9hcmREZWZhdWx0U3RlcDogMTAsXG4gICAgfTtcbiAgICAvLyBBcmlhRm9ybWF0IGRlZmF1bHRzIHRvIHJlZ3VsYXIgZm9ybWF0LCBpZiBhbnkuXG4gICAgaWYgKG9wdGlvbnMuZm9ybWF0ICYmICFvcHRpb25zLmFyaWFGb3JtYXQpIHtcbiAgICAgICAgb3B0aW9ucy5hcmlhRm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQ7XG4gICAgfVxuICAgIC8vIFJ1biBhbGwgb3B0aW9ucyB0aHJvdWdoIGEgdGVzdGluZyBtZWNoYW5pc20gdG8gZW5zdXJlIGNvcnJlY3RcbiAgICAvLyBpbnB1dC4gSXQgc2hvdWxkIGJlIG5vdGVkIHRoYXQgb3B0aW9ucyBtaWdodCBnZXQgbW9kaWZpZWQgdG9cbiAgICAvLyBiZSBoYW5kbGVkIHByb3Blcmx5LiBFLmcuIHdyYXBwaW5nIGludGVnZXJzIGluIGFycmF5cy5cbiAgICBPYmplY3Qua2V5cyh0ZXN0cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAvLyBJZiB0aGUgb3B0aW9uIGlzbid0IHNldCwgYnV0IGl0IGlzIHJlcXVpcmVkLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgaWYgKCFpc1NldChvcHRpb25zW25hbWVdKSAmJiBkZWZhdWx0c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGVzdHNbbmFtZV0ucikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdcIiArIG5hbWUgKyBcIicgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRlc3RzW25hbWVdLnQocGFyc2VkLCAhaXNTZXQob3B0aW9uc1tuYW1lXSkgPyBkZWZhdWx0c1tuYW1lXSA6IG9wdGlvbnNbbmFtZV0pO1xuICAgIH0pO1xuICAgIC8vIEZvcndhcmQgcGlwcyBvcHRpb25zXG4gICAgcGFyc2VkLnBpcHMgPSBvcHRpb25zLnBpcHM7XG4gICAgLy8gQWxsIHJlY2VudCBicm93c2VycyBhY2NlcHQgdW5wcmVmaXhlZCB0cmFuc2Zvcm0uXG4gICAgLy8gV2UgbmVlZCAtbXMtIGZvciBJRTkgYW5kIC13ZWJraXQtIGZvciBvbGRlciBBbmRyb2lkO1xuICAgIC8vIEFzc3VtZSB1c2Ugb2YgLXdlYmtpdC0gaWYgdW5wcmVmaXhlZCBhbmQgLW1zLSBhcmUgbm90IHN1cHBvcnRlZC5cbiAgICAvLyBodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PXRyYW5zZm9ybXMyZFxuICAgIHZhciBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2YXIgbXNQcmVmaXggPSBkLnN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIG5vUHJlZml4ID0gZC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcbiAgICBwYXJzZWQudHJhbnNmb3JtUnVsZSA9IG5vUHJlZml4ID8gXCJ0cmFuc2Zvcm1cIiA6IG1zUHJlZml4ID8gXCJtc1RyYW5zZm9ybVwiIDogXCJ3ZWJraXRUcmFuc2Zvcm1cIjtcbiAgICAvLyBQaXBzIGRvbid0IG1vdmUsIHNvIHdlIGNhbiBwbGFjZSB0aGVtIHVzaW5nIGxlZnQvdG9wLlxuICAgIHZhciBzdHlsZXMgPSBbXG4gICAgICAgIFtcImxlZnRcIiwgXCJ0b3BcIl0sXG4gICAgICAgIFtcInJpZ2h0XCIsIFwiYm90dG9tXCJdLFxuICAgIF07XG4gICAgcGFyc2VkLnN0eWxlID0gc3R5bGVzW3BhcnNlZC5kaXJdW3BhcnNlZC5vcnRdO1xuICAgIHJldHVybiBwYXJzZWQ7XG59XG4vL2VuZHJlZ2lvblxuZnVuY3Rpb24gc2NvcGUodGFyZ2V0LCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgICB2YXIgc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgPSBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpO1xuICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSAmJiBnZXRTdXBwb3J0c1Bhc3NpdmUoKTtcbiAgICAvLyBBbGwgdmFyaWFibGVzIGxvY2FsIHRvICdzY29wZScgYXJlIHByZWZpeGVkIHdpdGggJ3Njb3BlXydcbiAgICAvLyBTbGlkZXIgRE9NIE5vZGVzXG4gICAgdmFyIHNjb3BlX1RhcmdldCA9IHRhcmdldDtcbiAgICB2YXIgc2NvcGVfQmFzZTtcbiAgICB2YXIgc2NvcGVfSGFuZGxlcztcbiAgICB2YXIgc2NvcGVfQ29ubmVjdHM7XG4gICAgdmFyIHNjb3BlX1BpcHM7XG4gICAgdmFyIHNjb3BlX1Rvb2x0aXBzO1xuICAgIC8vIFNsaWRlciBzdGF0ZSB2YWx1ZXNcbiAgICB2YXIgc2NvcGVfU3BlY3RydW0gPSBvcHRpb25zLnNwZWN0cnVtO1xuICAgIHZhciBzY29wZV9WYWx1ZXMgPSBbXTtcbiAgICB2YXIgc2NvcGVfTG9jYXRpb25zID0gW107XG4gICAgdmFyIHNjb3BlX0hhbmRsZU51bWJlcnMgPSBbXTtcbiAgICB2YXIgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID0gMDtcbiAgICB2YXIgc2NvcGVfRXZlbnRzID0ge307XG4gICAgLy8gRG9jdW1lbnQgTm9kZXNcbiAgICB2YXIgc2NvcGVfRG9jdW1lbnQgPSB0YXJnZXQub3duZXJEb2N1bWVudDtcbiAgICB2YXIgc2NvcGVfRG9jdW1lbnRFbGVtZW50ID0gb3B0aW9ucy5kb2N1bWVudEVsZW1lbnQgfHwgc2NvcGVfRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBzY29wZV9Cb2R5ID0gc2NvcGVfRG9jdW1lbnQuYm9keTtcbiAgICAvLyBGb3IgaG9yaXpvbnRhbCBzbGlkZXJzIGluIHN0YW5kYXJkIGx0ciBkb2N1bWVudHMsXG4gICAgLy8gbWFrZSAubm9VaS1vcmlnaW4gb3ZlcmZsb3cgdG8gdGhlIGxlZnQgc28gdGhlIGRvY3VtZW50IGRvZXNuJ3Qgc2Nyb2xsLlxuICAgIHZhciBzY29wZV9EaXJPZmZzZXQgPSBzY29wZV9Eb2N1bWVudC5kaXIgPT09IFwicnRsXCIgfHwgb3B0aW9ucy5vcnQgPT09IDEgPyAwIDogMTAwO1xuICAgIC8vIENyZWF0ZXMgYSBub2RlLCBhZGRzIGl0IHRvIHRhcmdldCwgcmV0dXJucyB0aGUgbmV3IG5vZGUuXG4gICAgZnVuY3Rpb24gYWRkTm9kZVRvKGFkZFRhcmdldCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIHZhciBkaXYgPSBzY29wZV9Eb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkVGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuICAgIC8vIEFwcGVuZCBhIG9yaWdpbiB0byB0aGUgYmFzZVxuICAgIGZ1bmN0aW9uIGFkZE9yaWdpbihiYXNlLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgdmFyIG9yaWdpbiA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMub3JpZ2luKTtcbiAgICAgICAgdmFyIGhhbmRsZSA9IGFkZE5vZGVUbyhvcmlnaW4sIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGUpO1xuICAgICAgICBhZGROb2RlVG8oaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMudG91Y2hBcmVhKTtcbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImRhdGEtaGFuZGxlXCIsIFN0cmluZyhoYW5kbGVOdW1iZXIpKTtcbiAgICAgICAgaWYgKG9wdGlvbnMua2V5Ym9hcmRTdXBwb3J0KSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0dsb2JhbF9hdHRyaWJ1dGVzL3RhYmluZGV4XG4gICAgICAgICAgICAvLyAwID0gZm9jdXNhYmxlIGFuZCByZWFjaGFibGVcbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmhhbmRsZUF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXNfMSA9IG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlc18xKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlc18xW2F0dHJpYnV0ZV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJzbGlkZXJcIik7XG4gICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLW9yaWVudGF0aW9uXCIsIG9wdGlvbnMub3J0ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCIpO1xuICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVMb3dlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGFuZGxlTnVtYmVyID09PSBvcHRpb25zLmhhbmRsZXMgLSAxKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVVcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgb3JpZ2luLmhhbmRsZSA9IGhhbmRsZTtcbiAgICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICB9XG4gICAgLy8gSW5zZXJ0IG5vZGVzIGZvciBjb25uZWN0IGVsZW1lbnRzXG4gICAgZnVuY3Rpb24gYWRkQ29ubmVjdChiYXNlLCBhZGQpIHtcbiAgICAgICAgaWYgKCFhZGQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5jb25uZWN0KTtcbiAgICB9XG4gICAgLy8gQWRkIGhhbmRsZXMgdG8gdGhlIHNsaWRlciBiYXNlLlxuICAgIGZ1bmN0aW9uIGFkZEVsZW1lbnRzKGNvbm5lY3RPcHRpb25zLCBiYXNlKSB7XG4gICAgICAgIHZhciBjb25uZWN0QmFzZSA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMuY29ubmVjdHMpO1xuICAgICAgICBzY29wZV9IYW5kbGVzID0gW107XG4gICAgICAgIHNjb3BlX0Nvbm5lY3RzID0gW107XG4gICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbMF0pKTtcbiAgICAgICAgLy8gWzo6OjpPPT09PU89PT09Tz09PT1dXG4gICAgICAgIC8vIGNvbm5lY3RPcHRpb25zID0gWzAsIDEsIDEsIDFdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEtlZXAgYSBsaXN0IG9mIGFsbCBhZGRlZCBoYW5kbGVzLlxuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5wdXNoKGFkZE9yaWdpbihiYXNlLCBpKSk7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzW2ldID0gaTtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbaSArIDFdKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSW5pdGlhbGl6ZSBhIHNpbmdsZSBzbGlkZXIuXG4gICAgZnVuY3Rpb24gYWRkU2xpZGVyKGFkZFRhcmdldCkge1xuICAgICAgICAvLyBBcHBseSBjbGFzc2VzIGFuZCBkYXRhIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcmdldCk7XG4gICAgICAgIGlmIChvcHRpb25zLmRpciA9PT0gMCkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMubHRyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnJ0bCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMub3J0ID09PSAwKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ob3Jpem9udGFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnZlcnRpY2FsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGV4dERpcmVjdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoYWRkVGFyZ2V0KS5kaXJlY3Rpb247XG4gICAgICAgIGlmICh0ZXh0RGlyZWN0aW9uID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uUnRsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRleHREaXJlY3Rpb25MdHIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuYmFzZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFRvb2x0aXAoaGFuZGxlLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLnRvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGhhbmRsZS5maXJzdENoaWxkLCBvcHRpb25zLmNzc0NsYXNzZXMudG9vbHRpcCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzU2xpZGVyRGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiBzY29wZV9UYXJnZXQuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuICAgIC8vIERpc2FibGUgdGhlIHNsaWRlciBkcmFnZ2luZyBpZiBhbnkgaGFuZGxlIGlzIGRpc2FibGVkXG4gICAgZnVuY3Rpb24gaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZU9yaWdpbiA9IHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZU9yaWdpbi5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzYWJsZShoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgaWYgKGhhbmRsZU51bWJlciAhPT0gbnVsbCAmJiBoYW5kbGVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLmhhbmRsZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNjb3BlX1RhcmdldC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmhhbmRsZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVuYWJsZShoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgaWYgKGhhbmRsZU51bWJlciAhPT0gbnVsbCAmJiBoYW5kbGVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLmhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY29wZV9UYXJnZXQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICBoYW5kbGUuaGFuZGxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgICAgICBpZiAoc2NvcGVfVG9vbHRpcHMpIHtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgICAgICBzY29wZV9Ub29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudCh0b29sdGlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGUgdG9vbHRpcHMgb3B0aW9uIGlzIGEgc2hvcnRoYW5kIGZvciB1c2luZyB0aGUgJ3VwZGF0ZScgZXZlbnQuXG4gICAgZnVuY3Rpb24gdG9vbHRpcHMoKSB7XG4gICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgIC8vIFRvb2x0aXBzIGFyZSBhZGRlZCB3aXRoIG9wdGlvbnMudG9vbHRpcHMgaW4gb3JpZ2luYWwgb3JkZXIuXG4gICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gc2NvcGVfSGFuZGxlcy5tYXAoYWRkVG9vbHRpcCk7XG4gICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZU51bWJlciwgdW5lbmNvZGVkKSB7XG4gICAgICAgICAgICBpZiAoIXNjb3BlX1Rvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzW2hhbmRsZU51bWJlcl0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0udG8odW5lbmNvZGVkW2hhbmRsZU51bWJlcl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXS5pbm5lckhUTUwgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFyaWEoKSB7XG4gICAgICAgIHJlbW92ZUV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhKTtcbiAgICAgICAgYmluZEV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCwgdGFwLCBwb3NpdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBBcmlhIFZhbHVlcyBmb3IgYWxsIGhhbmRsZXMsIGFzIGEgY2hhbmdlIGluIG9uZSBjaGFuZ2VzIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgdGhlIG5leHQuXG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciBtaW4gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciBtYXggPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDEwMCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgLy8gRm9ybWF0dGVkIHZhbHVlIGZvciBkaXNwbGF5XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBTdHJpbmcob3B0aW9ucy5hcmlhRm9ybWF0LnRvKHVuZW5jb2RlZFtpbmRleF0pKTtcbiAgICAgICAgICAgICAgICAvLyBNYXAgdG8gc2xpZGVyIHJhbmdlIHZhbHVlc1xuICAgICAgICAgICAgICAgIG1pbiA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtaW4pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgbWF4ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG1heCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICBub3cgPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobm93KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWluXCIsIG1pbik7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtYXhcIiwgbWF4KTtcbiAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW5vd1wiLCBub3cpO1xuICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiLCB0ZXh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0R3JvdXAocGlwcykge1xuICAgICAgICAvLyBVc2UgdGhlIHJhbmdlLlxuICAgICAgICBpZiAocGlwcy5tb2RlID09PSBQaXBzTW9kZS5SYW5nZSB8fCBwaXBzLm1vZGUgPT09IFBpcHNNb2RlLlN0ZXBzKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0ueFZhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGlwcy5tb2RlID09PSBQaXBzTW9kZS5Db3VudCkge1xuICAgICAgICAgICAgaWYgKHBpcHMudmFsdWVzIDwgMikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd2YWx1ZXMnICg+PSAyKSByZXF1aXJlZCBmb3IgbW9kZSAnY291bnQnLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERpdmlkZSAwIC0gMTAwIGluICdjb3VudCcgcGFydHMuXG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSBwaXBzLnZhbHVlcyAtIDE7XG4gICAgICAgICAgICB2YXIgc3ByZWFkID0gMTAwIC8gaW50ZXJ2YWw7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgICAgICAvLyBMaXN0IHRoZXNlIHBhcnRzIGFuZCBoYXZlIHRoZW0gaGFuZGxlZCBhcyAncG9zaXRpb25zJy5cbiAgICAgICAgICAgIHdoaWxlIChpbnRlcnZhbC0tKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2ludGVydmFsXSA9IGludGVydmFsICogc3ByZWFkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVzLnB1c2goMTAwKTtcbiAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHZhbHVlcywgcGlwcy5zdGVwcGVkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGlwcy5tb2RlID09PSBQaXBzTW9kZS5Qb3NpdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIE1hcCBhbGwgcGVyY2VudGFnZXMgdG8gb24tcmFuZ2UgdmFsdWVzLlxuICAgICAgICAgICAgcmV0dXJuIG1hcFRvUmFuZ2UocGlwcy52YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gUGlwc01vZGUuVmFsdWVzKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgbXVzdCBiZSBzdGVwcGVkLCBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBwZXJjZW50YWdlIGZpcnN0LlxuICAgICAgICAgICAgaWYgKHBpcHMuc3RlcHBlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwaXBzLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gcGVyY2VudGFnZSwgYXBwbHkgc3RlcCwgcmV0dXJuIHRvIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAoc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh2YWx1ZSkpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UgY2FuIHNpbXBseSB1c2UgdGhlIHZhbHVlcy5cbiAgICAgICAgICAgIHJldHVybiBwaXBzLnZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107IC8vIHBpcHMubW9kZSA9IG5ldmVyXG4gICAgfVxuICAgIGZ1bmN0aW9uIG1hcFRvUmFuZ2UodmFsdWVzLCBzdGVwcGVkKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzdGVwcGVkID8gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcCh2YWx1ZSkgOiB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVNwcmVhZChwaXBzKSB7XG4gICAgICAgIGZ1bmN0aW9uIHNhZmVJbmNyZW1lbnQodmFsdWUsIGluY3JlbWVudCkge1xuICAgICAgICAgICAgLy8gQXZvaWQgZmxvYXRpbmcgcG9pbnQgdmFyaWFuY2UgYnkgZHJvcHBpbmcgdGhlIHNtYWxsZXN0IGRlY2ltYWwgcGxhY2VzLlxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcigodmFsdWUgKyBpbmNyZW1lbnQpLnRvRml4ZWQoNykpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBncm91cCA9IGdldEdyb3VwKHBpcHMpO1xuICAgICAgICB2YXIgaW5kZXhlcyA9IHt9O1xuICAgICAgICB2YXIgZmlyc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgdmFyIGxhc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFtzY29wZV9TcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaWdub3JlRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgdmFyIGlnbm9yZUxhc3QgPSBmYWxzZTtcbiAgICAgICAgdmFyIHByZXZQY3QgPSAwO1xuICAgICAgICAvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBncm91cCwgc29ydCBpdCBhbmQgZmlsdGVyIGF3YXkgYWxsIGR1cGxpY2F0ZXMuXG4gICAgICAgIGdyb3VwID0gdW5pcXVlKGdyb3VwLnNsaWNlKCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICB9KSk7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcmFuZ2Ugc3RhcnRzIHdpdGggdGhlIGZpcnN0IGVsZW1lbnQuXG4gICAgICAgIGlmIChncm91cFswXSAhPT0gZmlyc3RJblJhbmdlKSB7XG4gICAgICAgICAgICBncm91cC51bnNoaWZ0KGZpcnN0SW5SYW5nZSk7XG4gICAgICAgICAgICBpZ25vcmVGaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGlrZXdpc2UgZm9yIHRoZSBsYXN0IG9uZS5cbiAgICAgICAgaWYgKGdyb3VwW2dyb3VwLmxlbmd0aCAtIDFdICE9PSBsYXN0SW5SYW5nZSkge1xuICAgICAgICAgICAgZ3JvdXAucHVzaChsYXN0SW5SYW5nZSk7XG4gICAgICAgICAgICBpZ25vcmVMYXN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50LCBpbmRleCkge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0ZXAgYW5kIHRoZSBsb3dlciArIHVwcGVyIHBvc2l0aW9ucy5cbiAgICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgcTtcbiAgICAgICAgICAgIHZhciBsb3cgPSBjdXJyZW50O1xuICAgICAgICAgICAgdmFyIGhpZ2ggPSBncm91cFtpbmRleCArIDFdO1xuICAgICAgICAgICAgdmFyIG5ld1BjdDtcbiAgICAgICAgICAgIHZhciBwY3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgdmFyIHBjdFBvcztcbiAgICAgICAgICAgIHZhciB0eXBlO1xuICAgICAgICAgICAgdmFyIHN0ZXBzO1xuICAgICAgICAgICAgdmFyIHJlYWxTdGVwcztcbiAgICAgICAgICAgIHZhciBzdGVwU2l6ZTtcbiAgICAgICAgICAgIHZhciBpc1N0ZXBzID0gcGlwcy5tb2RlID09PSBQaXBzTW9kZS5TdGVwcztcbiAgICAgICAgICAgIC8vIFdoZW4gdXNpbmcgJ3N0ZXBzJyBtb2RlLCB1c2UgdGhlIHByb3ZpZGVkIHN0ZXBzLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSdsbCBzdGVwIG9uIHRvIHRoZSBuZXh0IHN1YnJhbmdlLlxuICAgICAgICAgICAgaWYgKGlzU3RlcHMpIHtcbiAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0ueE51bVN0ZXBzW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSAnZnVsbCcgc3RlcC5cbiAgICAgICAgICAgIGlmICghc3RlcCkge1xuICAgICAgICAgICAgICAgIHN0ZXAgPSBoaWdoIC0gbG93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgaGlnaCBpcyB1bmRlZmluZWQgd2UgYXJlIGF0IHRoZSBsYXN0IHN1YnJhbmdlLiBNYWtlIHN1cmUgaXQgaXRlcmF0ZXMgb25jZSAoIzEwODgpXG4gICAgICAgICAgICBpZiAoaGlnaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaGlnaCA9IGxvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBzdGVwIGlzbid0IDAsIHdoaWNoIHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AgKCM2NTQpXG4gICAgICAgICAgICBzdGVwID0gTWF0aC5tYXgoc3RlcCwgMC4wMDAwMDAxKTtcbiAgICAgICAgICAgIC8vIEZpbmQgYWxsIHN0ZXBzIGluIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpID0gc2FmZUluY3JlbWVudChpLCBzdGVwKSkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgcGVyY2VudGFnZSB2YWx1ZSBmb3IgdGhlIGN1cnJlbnQgc3RlcCxcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHNpemUgZm9yIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBuZXdQY3QgPSBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKGkpO1xuICAgICAgICAgICAgICAgIHBjdERpZmZlcmVuY2UgPSBuZXdQY3QgLSBwcmV2UGN0O1xuICAgICAgICAgICAgICAgIHN0ZXBzID0gcGN0RGlmZmVyZW5jZSAvIChwaXBzLmRlbnNpdHkgfHwgMSk7XG4gICAgICAgICAgICAgICAgcmVhbFN0ZXBzID0gTWF0aC5yb3VuZChzdGVwcyk7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyByYXRpbyByZXByZXNlbnRzIHRoZSBhbW91bnQgb2YgcGVyY2VudGFnZS1zcGFjZSBhIHBvaW50IGluZGljYXRlcy5cbiAgICAgICAgICAgICAgICAvLyBGb3IgYSBkZW5zaXR5IDEgdGhlIHBvaW50cy9wZXJjZW50YWdlID0gMS4gRm9yIGRlbnNpdHkgMiwgdGhhdCBwZXJjZW50YWdlIG5lZWRzIHRvIGJlIHJlLWRpdmlkZWQuXG4gICAgICAgICAgICAgICAgLy8gUm91bmQgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IHRvIGFuIGV2ZW4gbnVtYmVyLCB0aGVuIGRpdmlkZSBieSB0d29cbiAgICAgICAgICAgICAgICAvLyB0byBzcHJlYWQgdGhlIG9mZnNldCBvbiBib3RoIHNpZGVzIG9mIHRoZSByYW5nZS5cbiAgICAgICAgICAgICAgICBzdGVwU2l6ZSA9IHBjdERpZmZlcmVuY2UgLyByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgLy8gRGl2aWRlIGFsbCBwb2ludHMgZXZlbmx5LCBhZGRpbmcgdGhlIGNvcnJlY3QgbnVtYmVyIHRvIHRoaXMgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgLy8gUnVuIHVwIHRvIDw9IHNvIHRoYXQgMTAwJSBnZXRzIGEgcG9pbnQsIGV2ZW50IGlmIGlnbm9yZUxhc3QgaXMgc2V0LlxuICAgICAgICAgICAgICAgIGZvciAocSA9IDE7IHEgPD0gcmVhbFN0ZXBzOyBxICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJhdGlvIGJldHdlZW4gdGhlIHJvdW5kZWQgdmFsdWUgYW5kIHRoZSBhY3R1YWwgc2l6ZSBtaWdodCBiZSB+MSUgb2ZmLlxuICAgICAgICAgICAgICAgICAgICAvLyBDb3JyZWN0IHRoZSBwZXJjZW50YWdlIG9mZnNldCBieSB0aGUgbnVtYmVyIG9mIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICAvLyBwZXIgc3VicmFuZ2UuIGRlbnNpdHkgPSAxIHdpbGwgcmVzdWx0IGluIDEwMCBwb2ludHMgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIGZ1bGwgcmFuZ2UsIDIgZm9yIDUwLCA0IGZvciAyNSwgZXRjLlxuICAgICAgICAgICAgICAgICAgICBwY3RQb3MgPSBwcmV2UGN0ICsgcSAqIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgICAgICBpbmRleGVzW3BjdFBvcy50b0ZpeGVkKDUpXSA9IFtzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcocGN0UG9zKSwgMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERldGVybWluZSB0aGUgcG9pbnQgdHlwZS5cbiAgICAgICAgICAgICAgICB0eXBlID0gZ3JvdXAuaW5kZXhPZihpKSA+IC0xID8gUGlwc1R5cGUuTGFyZ2VWYWx1ZSA6IGlzU3RlcHMgPyBQaXBzVHlwZS5TbWFsbFZhbHVlIDogUGlwc1R5cGUuTm9WYWx1ZTtcbiAgICAgICAgICAgICAgICAvLyBFbmZvcmNlIHRoZSAnaWdub3JlRmlyc3QnIG9wdGlvbiBieSBvdmVyd3JpdGluZyB0aGUgdHlwZSBmb3IgMC5cbiAgICAgICAgICAgICAgICBpZiAoIWluZGV4ICYmIGlnbm9yZUZpcnN0ICYmIGkgIT09IGhpZ2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghKGkgPT09IGhpZ2ggJiYgaWdub3JlTGFzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgJ3R5cGUnIG9mIHRoaXMgcG9pbnQuIDAgPSBwbGFpbiwgMSA9IHJlYWwgdmFsdWUsIDIgPSBzdGVwIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICBpbmRleGVzW25ld1BjdC50b0ZpeGVkKDUpXSA9IFtpLCB0eXBlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBwZXJjZW50YWdlIGNvdW50LlxuICAgICAgICAgICAgICAgIHByZXZQY3QgPSBuZXdQY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaW5kZXhlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlckZ1bmMsIGZvcm1hdHRlcikge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciB2YWx1ZVNpemVDbGFzc2VzID0gKF9hID0ge30sXG4gICAgICAgICAgICBfYVtQaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICBfYVtQaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZU5vcm1hbCxcbiAgICAgICAgICAgIF9hW1BpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTGFyZ2UsXG4gICAgICAgICAgICBfYVtQaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVN1YixcbiAgICAgICAgICAgIF9hKTtcbiAgICAgICAgdmFyIG1hcmtlclNpemVDbGFzc2VzID0gKF9iID0ge30sXG4gICAgICAgICAgICBfYltQaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICBfYltQaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJOb3JtYWwsXG4gICAgICAgICAgICBfYltQaXBzVHlwZS5MYXJnZVZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJMYXJnZSxcbiAgICAgICAgICAgIF9iW1BpcHNUeXBlLlNtYWxsVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlclN1YixcbiAgICAgICAgICAgIF9iKTtcbiAgICAgICAgdmFyIHZhbHVlT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVZlcnRpY2FsXTtcbiAgICAgICAgdmFyIG1hcmtlck9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMubWFya2VySG9yaXpvbnRhbCwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlclZlcnRpY2FsXTtcbiAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHMpO1xuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBvcHRpb25zLm9ydCA9PT0gMCA/IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzSG9yaXpvbnRhbCA6IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzVmVydGljYWwpO1xuICAgICAgICBmdW5jdGlvbiBnZXRDbGFzc2VzKHR5cGUsIHNvdXJjZSkge1xuICAgICAgICAgICAgdmFyIGEgPSBzb3VyY2UgPT09IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZTtcbiAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbkNsYXNzZXMgPSBhID8gdmFsdWVPcmllbnRhdGlvbkNsYXNzZXMgOiBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXM7XG4gICAgICAgICAgICB2YXIgc2l6ZUNsYXNzZXMgPSBhID8gdmFsdWVTaXplQ2xhc3NlcyA6IG1hcmtlclNpemVDbGFzc2VzO1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSArIFwiIFwiICsgb3JpZW50YXRpb25DbGFzc2VzW29wdGlvbnMub3J0XSArIFwiIFwiICsgc2l6ZUNsYXNzZXNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkU3ByZWFkKG9mZnNldCwgdmFsdWUsIHR5cGUpIHtcbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBmaWx0ZXIgZnVuY3Rpb24sIGlmIGl0IGlzIHNldC5cbiAgICAgICAgICAgIHR5cGUgPSBmaWx0ZXJGdW5jID8gZmlsdGVyRnVuYyh2YWx1ZSwgdHlwZSkgOiB0eXBlO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFBpcHNUeXBlLk5vbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBZGQgYSBtYXJrZXIgZm9yIGV2ZXJ5IHBvaW50XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGFkZE5vZGVUbyhlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlcik7XG4gICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAvLyBWYWx1ZXMgYXJlIG9ubHkgYXBwZW5kZWQgZm9yIHBvaW50cyBtYXJrZWQgJzEnIG9yICcyJy5cbiAgICAgICAgICAgIGlmICh0eXBlID4gUGlwc1R5cGUuTm9WYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBTdHJpbmcoZm9ybWF0dGVyLnRvKHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIGFsbCBwb2ludHMuXG4gICAgICAgIE9iamVjdC5rZXlzKHNwcmVhZCkuZm9yRWFjaChmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICBhZGRTcHJlYWQob2Zmc2V0LCBzcHJlYWRbb2Zmc2V0XVswXSwgc3ByZWFkW29mZnNldF1bMV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVBpcHMoKSB7XG4gICAgICAgIGlmIChzY29wZV9QaXBzKSB7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50KHNjb3BlX1BpcHMpO1xuICAgICAgICAgICAgc2NvcGVfUGlwcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcGlwcyhwaXBzKSB7XG4gICAgICAgIC8vIEZpeCAjNjY5XG4gICAgICAgIHJlbW92ZVBpcHMoKTtcbiAgICAgICAgdmFyIHNwcmVhZCA9IGdlbmVyYXRlU3ByZWFkKHBpcHMpO1xuICAgICAgICB2YXIgZmlsdGVyID0gcGlwcy5maWx0ZXI7XG4gICAgICAgIHZhciBmb3JtYXQgPSBwaXBzLmZvcm1hdCB8fCB7XG4gICAgICAgICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhNYXRoLnJvdW5kKHZhbHVlKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBzY29wZV9QaXBzID0gc2NvcGVfVGFyZ2V0LmFwcGVuZENoaWxkKGFkZE1hcmtpbmcoc3ByZWFkLCBmaWx0ZXIsIGZvcm1hdCkpO1xuICAgICAgICByZXR1cm4gc2NvcGVfUGlwcztcbiAgICB9XG4gICAgLy8gU2hvcnRoYW5kIGZvciBiYXNlIGRpbWVuc2lvbnMuXG4gICAgZnVuY3Rpb24gYmFzZVNpemUoKSB7XG4gICAgICAgIHZhciByZWN0ID0gc2NvcGVfQmFzZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGFsdCA9IChcIm9mZnNldFwiICsgW1wiV2lkdGhcIiwgXCJIZWlnaHRcIl1bb3B0aW9ucy5vcnRdKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMub3J0ID09PSAwID8gcmVjdC53aWR0aCB8fCBzY29wZV9CYXNlW2FsdF0gOiByZWN0LmhlaWdodCB8fCBzY29wZV9CYXNlW2FsdF07XG4gICAgfVxuICAgIC8vIEhhbmRsZXIgZm9yIGF0dGFjaGluZyBldmVudHMgdHJvdWdoIGEgcHJveHkuXG4gICAgZnVuY3Rpb24gYXR0YWNoRXZlbnQoZXZlbnRzLCBlbGVtZW50LCBjYWxsYmFjaywgZGF0YSkge1xuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvICdmaWx0ZXInIGV2ZW50cyB0byB0aGUgc2xpZGVyLlxuICAgICAgICAvLyBlbGVtZW50IGlzIGEgbm9kZSwgbm90IGEgbm9kZUxpc3RcbiAgICAgICAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGUgPSBmaXhFdmVudChldmVudCwgZGF0YS5wYWdlT2Zmc2V0LCBkYXRhLnRhcmdldCB8fCBlbGVtZW50KTtcbiAgICAgICAgICAgIC8vIGZpeEV2ZW50IHJldHVybnMgZmFsc2UgaWYgdGhpcyBldmVudCBoYXMgYSBkaWZmZXJlbnQgdGFyZ2V0XG4gICAgICAgICAgICAvLyB3aGVuIGhhbmRsaW5nIChtdWx0aS0pIHRvdWNoIGV2ZW50cztcbiAgICAgICAgICAgIGlmICghZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRvTm90UmVqZWN0IGlzIHBhc3NlZCBieSBhbGwgZW5kIGV2ZW50cyB0byBtYWtlIHN1cmUgcmVsZWFzZWQgdG91Y2hlc1xuICAgICAgICAgICAgLy8gYXJlIG5vdCByZWplY3RlZCwgbGVhdmluZyB0aGUgc2xpZGVyIFwic3R1Y2tcIiB0byB0aGUgY3Vyc29yO1xuICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSAmJiAhZGF0YS5kb05vdFJlamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0b3AgaWYgYW4gYWN0aXZlICd0YXAnIHRyYW5zaXRpb24gaXMgdGFraW5nIHBsYWNlLlxuICAgICAgICAgICAgaWYgKGhhc0NsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCkgJiYgIWRhdGEuZG9Ob3RSZWplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XG4gICAgICAgICAgICBpZiAoZXZlbnRzID09PSBhY3Rpb25zLnN0YXJ0ICYmIGUuYnV0dG9ucyAhPT0gdW5kZWZpbmVkICYmIGUuYnV0dG9ucyA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XG4gICAgICAgICAgICBpZiAoZGF0YS5ob3ZlciAmJiBlLmJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAnc3VwcG9ydHNQYXNzaXZlJyBpcyBvbmx5IHRydWUgaWYgYSBicm93c2VyIGFsc28gc3VwcG9ydHMgdG91Y2gtYWN0aW9uOiBub25lIGluIENTUy5cbiAgICAgICAgICAgIC8vIGlPUyBzYWZhcmkgZG9lcyBub3QsIHNvIGl0IGRvZXNuJ3QgZ2V0IHRvIGJlbmVmaXQgZnJvbSBwYXNzaXZlIHNjcm9sbGluZy4gaU9TIGRvZXMgc3VwcG9ydFxuICAgICAgICAgICAgLy8gdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb24sIGJ1dCB0aGF0IGFsbG93cyBwYW5uaW5nLCB3aGljaCBicmVha3NcbiAgICAgICAgICAgIC8vIHNsaWRlcnMgYWZ0ZXIgem9vbWluZy9vbiBub24tcmVzcG9uc2l2ZSBwYWdlcy5cbiAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzMzExMlxuICAgICAgICAgICAgaWYgKCFzdXBwb3J0c1Bhc3NpdmUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLmNhbGNQb2ludCA9IGUucG9pbnRzW29wdGlvbnMub3J0XTtcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIGV2ZW50IGhhbmRsZXIgd2l0aCB0aGUgZXZlbnQgWyBhbmQgYWRkaXRpb25hbCBkYXRhIF0uXG4gICAgICAgICAgICBjYWxsYmFjayhlLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG1ldGhvZHMgPSBbXTtcbiAgICAgICAgLy8gQmluZCBhIGNsb3N1cmUgb24gdGhlIHRhcmdldCBmb3IgZXZlcnkgZXZlbnQgdHlwZS5cbiAgICAgICAgZXZlbnRzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG1ldGhvZCwgc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZSk7XG4gICAgICAgICAgICBtZXRob2RzLnB1c2goW2V2ZW50TmFtZSwgbWV0aG9kXSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWV0aG9kcztcbiAgICB9XG4gICAgLy8gUHJvdmlkZSBhIGNsZWFuIGV2ZW50IHdpdGggc3RhbmRhcmRpemVkIG9mZnNldCB2YWx1ZXMuXG4gICAgZnVuY3Rpb24gZml4RXZlbnQoZSwgcGFnZU9mZnNldCwgZXZlbnRUYXJnZXQpIHtcbiAgICAgICAgLy8gRmlsdGVyIHRoZSBldmVudCB0byByZWdpc3RlciB0aGUgdHlwZSwgd2hpY2ggY2FuIGJlXG4gICAgICAgIC8vIHRvdWNoLCBtb3VzZSBvciBwb2ludGVyLiBPZmZzZXQgY2hhbmdlcyBuZWVkIHRvIGJlXG4gICAgICAgIC8vIG1hZGUgb24gYW4gZXZlbnQgc3BlY2lmaWMgYmFzaXMuXG4gICAgICAgIHZhciB0b3VjaCA9IGUudHlwZS5pbmRleE9mKFwidG91Y2hcIikgPT09IDA7XG4gICAgICAgIHZhciBtb3VzZSA9IGUudHlwZS5pbmRleE9mKFwibW91c2VcIikgPT09IDA7XG4gICAgICAgIHZhciBwb2ludGVyID0gZS50eXBlLmluZGV4T2YoXCJwb2ludGVyXCIpID09PSAwO1xuICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgIHZhciB5ID0gMDtcbiAgICAgICAgLy8gSUUxMCBpbXBsZW1lbnRlZCBwb2ludGVyIGV2ZW50cyB3aXRoIGEgcHJlZml4O1xuICAgICAgICBpZiAoZS50eXBlLmluZGV4T2YoXCJNU1BvaW50ZXJcIikgPT09IDApIHtcbiAgICAgICAgICAgIHBvaW50ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVycm9uZW91cyBldmVudHMgc2VlbSB0byBiZSBwYXNzZWQgaW4gb2NjYXNpb25hbGx5IG9uIGlPUy9pUGFkT1MgYWZ0ZXIgdXNlciBmaW5pc2hlcyBpbnRlcmFjdGluZyB3aXRoXG4gICAgICAgIC8vIHRoZSBzbGlkZXIuIFRoZXkgYXBwZWFyIHRvIGJlIG9mIHR5cGUgTW91c2VFdmVudCwgeWV0IHRoZXkgZG9uJ3QgaGF2ZSB1c3VhbCBwcm9wZXJ0aWVzIHNldC4gSWdub3JlXG4gICAgICAgIC8vIGV2ZW50cyB0aGF0IGhhdmUgbm8gdG91Y2hlcyBvciBidXR0b25zIGFzc29jaWF0ZWQgd2l0aCB0aGVtLiAoIzEwNTcsICMxMDc5LCAjMTA5NSlcbiAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIiAmJiAhZS5idXR0b25zICYmICFlLnRvdWNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgb25seSB0aGluZyBvbmUgaGFuZGxlIHNob3VsZCBiZSBjb25jZXJuZWQgYWJvdXQgaXMgdGhlIHRvdWNoZXMgdGhhdCBvcmlnaW5hdGVkIG9uIHRvcCBvZiBpdC5cbiAgICAgICAgaWYgKHRvdWNoKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm5zIHRydWUgaWYgYSB0b3VjaCBvcmlnaW5hdGVkIG9uIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICB2YXIgaXNUb3VjaE9uVGFyZ2V0ID0gZnVuY3Rpb24gKGNoZWNrVG91Y2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gY2hlY2tUb3VjaC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0YXJnZXQgPT09IGV2ZW50VGFyZ2V0IHx8XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmNvbnRhaW5zKHRhcmdldCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGUuY29tcG9zZWQgJiYgZS5jb21wb3NlZFBhdGgoKS5zaGlmdCgpID09PSBldmVudFRhcmdldCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIEluIHRoZSBjYXNlIG9mIHRvdWNoc3RhcnQgZXZlbnRzLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGVyZSBpcyBzdGlsbCBubyBtb3JlIHRoYW4gb25lXG4gICAgICAgICAgICAvLyB0b3VjaCBvbiB0aGUgdGFyZ2V0IHNvIHdlIGxvb2sgYW1vbmdzdCBhbGwgdG91Y2hlcy5cbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwidG91Y2hzdGFydFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldFRvdWNoZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZS50b3VjaGVzLCBpc1RvdWNoT25UYXJnZXQpO1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdCBzdXBwb3J0IG1vcmUgdGhhbiBvbmUgdG91Y2ggcGVyIGhhbmRsZS5cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgb3RoZXIgY2FzZXMsIGZpbmQgb24gY2hhbmdlZFRvdWNoZXMgaXMgZW5vdWdoLlxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaCA9IEFycmF5LnByb3RvdHlwZS5maW5kLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAvLyBDYW5jZWwgaWYgdGhlIHRhcmdldCB0b3VjaCBoYXMgbm90IG1vdmVkLlxuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0VG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB4ID0gdGFyZ2V0VG91Y2gucGFnZVg7XG4gICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoLnBhZ2VZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0IHx8IGdldFBhZ2VPZmZzZXQoc2NvcGVfRG9jdW1lbnQpO1xuICAgICAgICBpZiAobW91c2UgfHwgcG9pbnRlcikge1xuICAgICAgICAgICAgeCA9IGUuY2xpZW50WCArIHBhZ2VPZmZzZXQueDtcbiAgICAgICAgICAgIHkgPSBlLmNsaWVudFkgKyBwYWdlT2Zmc2V0Lnk7XG4gICAgICAgIH1cbiAgICAgICAgZS5wYWdlT2Zmc2V0ID0gcGFnZU9mZnNldDtcbiAgICAgICAgZS5wb2ludHMgPSBbeCwgeV07XG4gICAgICAgIGUuY3Vyc29yID0gbW91c2UgfHwgcG9pbnRlcjsgLy8gRml4ICM0MzVcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIC8vIFRyYW5zbGF0ZSBhIGNvb3JkaW5hdGUgaW4gdGhlIGRvY3VtZW50IHRvIGEgcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXG4gICAgZnVuY3Rpb24gY2FsY1BvaW50VG9QZXJjZW50YWdlKGNhbGNQb2ludCkge1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBjYWxjUG9pbnQgLSBvZmZzZXQoc2NvcGVfQmFzZSwgb3B0aW9ucy5vcnQpO1xuICAgICAgICB2YXIgcHJvcG9zYWwgPSAobG9jYXRpb24gKiAxMDApIC8gYmFzZVNpemUoKTtcbiAgICAgICAgLy8gQ2xhbXAgcHJvcG9zYWwgYmV0d2VlbiAwJSBhbmQgMTAwJVxuICAgICAgICAvLyBPdXQtb2YtYm91bmQgY29vcmRpbmF0ZXMgbWF5IG9jY3VyIHdoZW4gLm5vVWktYmFzZSBwc2V1ZG8tZWxlbWVudHNcbiAgICAgICAgLy8gYXJlIHVzZWQgKGUuZy4gY29udGFpbmVkIGhhbmRsZXMgZmVhdHVyZSlcbiAgICAgICAgcHJvcG9zYWwgPSBsaW1pdChwcm9wb3NhbCk7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIHByb3Bvc2FsIDogcHJvcG9zYWw7XG4gICAgfVxuICAgIC8vIEZpbmQgaGFuZGxlIGNsb3Nlc3QgdG8gYSBjZXJ0YWluIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgIGZ1bmN0aW9uIGdldENsb3Nlc3RIYW5kbGUoY2xpY2tlZFBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBzbWFsbGVzdERpZmZlcmVuY2UgPSAxMDA7XG4gICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBmYWxzZTtcbiAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAvLyBEaXNhYmxlZCBoYW5kbGVzIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICBpZiAoaXNIYW5kbGVEaXNhYmxlZChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlUG9zaXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9IE1hdGguYWJzKGhhbmRsZVBvc2l0aW9uIC0gY2xpY2tlZFBvc2l0aW9uKTtcbiAgICAgICAgICAgIC8vIEluaXRpYWwgc3RhdGVcbiAgICAgICAgICAgIHZhciBjbGlja0F0RWRnZSA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9PT0gMTAwICYmIHNtYWxsZXN0RGlmZmVyZW5jZSA9PT0gMTAwO1xuICAgICAgICAgICAgLy8gRGlmZmVyZW5jZSB3aXRoIHRoaXMgaGFuZGxlIGlzIHNtYWxsZXIgdGhhbiB0aGUgcHJldmlvdXNseSBjaGVja2VkIGhhbmRsZVxuICAgICAgICAgICAgdmFyIGlzQ2xvc2VyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDwgc21hbGxlc3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgdmFyIGlzQ2xvc2VyQWZ0ZXIgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPD0gc21hbGxlc3REaWZmZXJlbmNlICYmIGNsaWNrZWRQb3NpdGlvbiA+IGhhbmRsZVBvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKGlzQ2xvc2VyIHx8IGlzQ2xvc2VyQWZ0ZXIgfHwgY2xpY2tBdEVkZ2UpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBpbmRleDtcbiAgICAgICAgICAgICAgICBzbWFsbGVzdERpZmZlcmVuY2UgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFuZGxlTnVtYmVyO1xuICAgIH1cbiAgICAvLyBGaXJlICdlbmQnIHdoZW4gYSBtb3VzZSBvciBwZW4gbGVhdmVzIHRoZSBkb2N1bWVudC5cbiAgICBmdW5jdGlvbiBkb2N1bWVudExlYXZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlb3V0XCIgJiZcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gXCJIVE1MXCIgJiZcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBIYW5kbGUgbW92ZW1lbnQgb24gZG9jdW1lbnQgZm9yIGhhbmRsZSBhbmQgcmFuZ2UgZHJhZy5cbiAgICBmdW5jdGlvbiBldmVudE1vdmUoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgLy8gRml4ICM0OThcbiAgICAgICAgLy8gQ2hlY2sgdmFsdWUgb2YgLmJ1dHRvbnMgaW4gJ3N0YXJ0JyB0byB3b3JrIGFyb3VuZCBhIGJ1ZyBpbiBJRTEwIG1vYmlsZSAoZGF0YS5idXR0b25zUHJvcGVydHkpLlxuICAgICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzkyNzAwNS9tb2JpbGUtaWUxMC13aW5kb3dzLXBob25lLWJ1dHRvbnMtcHJvcGVydHktb2YtcG9pbnRlcm1vdmUtZXZlbnQtYWx3YXlzLXplcm9cbiAgICAgICAgLy8gSUU5IGhhcyAuYnV0dG9ucyBhbmQgLndoaWNoIHplcm8gb24gbW91c2Vtb3ZlLlxuICAgICAgICAvLyBGaXJlZm94IGJyZWFrcyB0aGUgc3BlYyBNRE4gZGVmaW5lcy5cbiAgICAgICAgaWYgKG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNU0lFIDlcIikgPT09IC0xICYmIGV2ZW50LmJ1dHRvbnMgPT09IDAgJiYgZGF0YS5idXR0b25zUHJvcGVydHkgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBldmVudEVuZChldmVudCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgYXJlIG1vdmluZyB1cCBvciBkb3duXG4gICAgICAgIHZhciBtb3ZlbWVudCA9IChvcHRpb25zLmRpciA/IC0xIDogMSkgKiAoZXZlbnQuY2FsY1BvaW50IC0gZGF0YS5zdGFydENhbGNQb2ludCk7XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIG1vdmVtZW50IGludG8gYSBwZXJjZW50YWdlIG9mIHRoZSBzbGlkZXIgd2lkdGgvaGVpZ2h0XG4gICAgICAgIHZhciBwcm9wb3NhbCA9IChtb3ZlbWVudCAqIDEwMCkgLyBkYXRhLmJhc2VTaXplO1xuICAgICAgICBtb3ZlSGFuZGxlcyhtb3ZlbWVudCA+IDAsIHByb3Bvc2FsLCBkYXRhLmxvY2F0aW9ucywgZGF0YS5oYW5kbGVOdW1iZXJzLCBkYXRhLmNvbm5lY3QpO1xuICAgIH1cbiAgICAvLyBVbmJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQsIGNhbGwgY2FsbGJhY2tzLlxuICAgIGZ1bmN0aW9uIGV2ZW50RW5kKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIC8vIFRoZSBoYW5kbGUgaXMgbm8gbG9uZ2VyIGFjdGl2ZSwgc28gcmVtb3ZlIHRoZSBjbGFzcy5cbiAgICAgICAgaWYgKGRhdGEuaGFuZGxlKSB7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhkYXRhLmhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgLT0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVbmJpbmQgdGhlIG1vdmUgYW5kIGVuZCBldmVudHMsIHdoaWNoIGFyZSBhZGRlZCBvbiAnc3RhcnQnLlxuICAgICAgICBkYXRhLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBzY29wZV9Eb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihjWzBdLCBjWzFdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBkcmFnZ2luZyBjbGFzcy5cbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWcpO1xuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICAvLyBSZW1vdmUgY3Vyc29yIHN0eWxlcyBhbmQgdGV4dC1zZWxlY3Rpb24gZXZlbnRzIGJvdW5kIHRvIHRoZSBib2R5LlxuICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xuICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gXCJcIjtcbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuZXZlbnRzLnNtb290aFN0ZXBzKSB7XG4gICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJlbmRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQuXG4gICAgZnVuY3Rpb24gZXZlbnRTdGFydChldmVudCwgZGF0YSkge1xuICAgICAgICAvLyBJZ25vcmUgZXZlbnQgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxuICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLnNvbWUoaXNIYW5kbGVEaXNhYmxlZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFuZGxlO1xuICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZU9yaWdpbiA9IHNjb3BlX0hhbmRsZXNbZGF0YS5oYW5kbGVOdW1iZXJzWzBdXTtcbiAgICAgICAgICAgIGhhbmRsZSA9IGhhbmRsZU9yaWdpbi5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCArPSAxO1xuICAgICAgICAgICAgLy8gTWFyayB0aGUgaGFuZGxlIGFzICdhY3RpdmUnIHNvIGl0IGNhbiBiZSBzdHlsZWQuXG4gICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEEgZHJhZyBzaG91bGQgbmV2ZXIgcHJvcGFnYXRlIHVwIHRvIHRoZSAndGFwJyBldmVudC5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIFJlY29yZCB0aGUgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgICAgIC8vIEF0dGFjaCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cy5cbiAgICAgICAgdmFyIG1vdmVFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBldmVudE1vdmUsIHtcbiAgICAgICAgICAgIC8vIFRoZSBldmVudCB0YXJnZXQgaGFzIGNoYW5nZWQgc28gd2UgbmVlZCB0byBwcm9wYWdhdGUgdGhlIG9yaWdpbmFsIG9uZSBzbyB0aGF0IHdlIGtlZXBcbiAgICAgICAgICAgIC8vIHJlbHlpbmcgb24gaXQgdG8gZXh0cmFjdCB0YXJnZXQgdG91Y2hlcy5cbiAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICBjb25uZWN0OiBkYXRhLmNvbm5lY3QsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgIHN0YXJ0Q2FsY1BvaW50OiBldmVudC5jYWxjUG9pbnQsXG4gICAgICAgICAgICBiYXNlU2l6ZTogYmFzZVNpemUoKSxcbiAgICAgICAgICAgIHBhZ2VPZmZzZXQ6IGV2ZW50LnBhZ2VPZmZzZXQsXG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnMsXG4gICAgICAgICAgICBidXR0b25zUHJvcGVydHk6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICBsb2NhdGlvbnM6IHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGVuZEV2ZW50ID0gYXR0YWNoRXZlbnQoYWN0aW9ucy5lbmQsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRFbmQsIHtcbiAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgIGRvTm90UmVqZWN0OiB0cnVlLFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG91dEV2ZW50ID0gYXR0YWNoRXZlbnQoXCJtb3VzZW91dFwiLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50TGVhdmUsIHtcbiAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgIGRvTm90UmVqZWN0OiB0cnVlLFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gV2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgcHVzaGVkIHRoZSBsaXN0ZW5lcnMgaW4gdGhlIGxpc3RlbmVyIGxpc3QgcmF0aGVyIHRoYW4gY3JlYXRpbmdcbiAgICAgICAgLy8gYSBuZXcgb25lIGFzIGl0IGhhcyBhbHJlYWR5IGJlZW4gcGFzc2VkIHRvIHRoZSBldmVudCBoYW5kbGVycy5cbiAgICAgICAgbGlzdGVuZXJzLnB1c2guYXBwbHkobGlzdGVuZXJzLCBtb3ZlRXZlbnQuY29uY2F0KGVuZEV2ZW50LCBvdXRFdmVudCkpO1xuICAgICAgICAvLyBUZXh0IHNlbGVjdGlvbiBpc24ndCBhbiBpc3N1ZSBvbiB0b3VjaCBkZXZpY2VzLFxuICAgICAgICAvLyBzbyBhZGRpbmcgY3Vyc29yIHN0eWxlcyBjYW4gYmUgc2tpcHBlZC5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xuICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgJ0knIGN1cnNvciBhbmQgZXh0ZW5kIHRoZSByYW5nZS1kcmFnIGN1cnNvci5cbiAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQpLmN1cnNvcjtcbiAgICAgICAgICAgIC8vIE1hcmsgdGhlIHRhcmdldCB3aXRoIGEgZHJhZ2dpbmcgc3RhdGUuXG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmV2ZW50IHRleHQgc2VsZWN0aW9uIHdoZW4gZHJhZ2dpbmcgdGhlIGhhbmRsZXMuXG4gICAgICAgICAgICAvLyBJbiBub1VpU2xpZGVyIDw9IDkuMi4wLCB0aGlzIHdhcyBoYW5kbGVkIGJ5IGNhbGxpbmcgcHJldmVudERlZmF1bHQgb24gbW91c2UvdG91Y2ggc3RhcnQvbW92ZSxcbiAgICAgICAgICAgIC8vIHdoaWNoIGlzIHNjcm9sbCBibG9ja2luZy4gVGhlIHNlbGVjdHN0YXJ0IGV2ZW50IGlzIHN1cHBvcnRlZCBieSBGaXJlRm94IHN0YXJ0aW5nIGZyb20gdmVyc2lvbiA1MixcbiAgICAgICAgICAgIC8vIG1lYW5pbmcgdGhlIG9ubHkgaG9sZG91dCBpcyBpT1MgU2FmYXJpLiBUaGlzIGRvZXNuJ3QgbWF0dGVyOiB0ZXh0IHNlbGVjdGlvbiBpc24ndCB0cmlnZ2VyZWQgdGhlcmUuXG4gICAgICAgICAgICAvLyBUaGUgJ2N1cnNvcicgZmxhZyBpcyBmYWxzZS5cbiAgICAgICAgICAgIC8vIFNlZTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9c2VsZWN0c3RhcnRcbiAgICAgICAgICAgIHNjb3BlX0JvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic3RhcnRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIE1vdmUgY2xvc2VzdCBoYW5kbGUgdG8gdGFwcGVkIGxvY2F0aW9uLlxuICAgIGZ1bmN0aW9uIGV2ZW50VGFwKGV2ZW50KSB7XG4gICAgICAgIC8vIFRoZSB0YXAgZXZlbnQgc2hvdWxkbid0IHByb3BhZ2F0ZSB1cFxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdmFyIHByb3Bvc2FsID0gY2FsY1BvaW50VG9QZXJjZW50YWdlKGV2ZW50LmNhbGNQb2ludCk7XG4gICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBnZXRDbG9zZXN0SGFuZGxlKHByb3Bvc2FsKTtcbiAgICAgICAgLy8gVGFja2xlIHRoZSBjYXNlIHRoYXQgYWxsIGhhbmRsZXMgYXJlICdkaXNhYmxlZCcuXG4gICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmxhZyB0aGUgc2xpZGVyIGFzIGl0IGlzIG5vdyBpbiBhIHRyYW5zaXRpb25hbCBzdGF0ZS5cbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0YWtlcyBhIGNvbmZpZ3VyYWJsZSBhbW91bnQgb2YgbXMgKGRlZmF1bHQgMzAwKS4gUmUtZW5hYmxlIHRoZSBzbGlkZXIgYWZ0ZXIgdGhhdC5cbiAgICAgICAgaWYgKCFvcHRpb25zLmV2ZW50cy5zbmFwKSB7XG4gICAgICAgICAgICBhZGRDbGFzc0ZvcihzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXAsIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHByb3Bvc2FsLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudFN0YXJ0KGV2ZW50LCB7IGhhbmRsZU51bWJlcnM6IFtoYW5kbGVOdW1iZXJdIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEZpcmVzIGEgJ2hvdmVyJyBldmVudCBmb3IgYSBob3ZlcmVkIG1vdXNlL3BlbiBwb3NpdGlvbi5cbiAgICBmdW5jdGlvbiBldmVudEhvdmVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBwcm9wb3NhbCA9IGNhbGNQb2ludFRvUGVyY2VudGFnZShldmVudC5jYWxjUG9pbnQpO1xuICAgICAgICB2YXIgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHByb3Bvc2FsKTtcbiAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRFdmVudCkge1xuICAgICAgICAgICAgaWYgKFwiaG92ZXJcIiA9PT0gdGFyZ2V0RXZlbnQuc3BsaXQoXCIuXCIpWzBdKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHNjb3BlX1NlbGYsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEhhbmRsZXMga2V5ZG93biBvbiBmb2N1c2VkIGhhbmRsZXNcbiAgICAvLyBEb24ndCBtb3ZlIHRoZSBkb2N1bWVudCB3aGVuIHByZXNzaW5nIGFycm93IGtleXMgb24gZm9jdXNlZCBoYW5kbGVzXG4gICAgZnVuY3Rpb24gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSB8fCBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaG9yaXpvbnRhbEtleXMgPSBbXCJMZWZ0XCIsIFwiUmlnaHRcIl07XG4gICAgICAgIHZhciB2ZXJ0aWNhbEtleXMgPSBbXCJEb3duXCIsIFwiVXBcIl07XG4gICAgICAgIHZhciBsYXJnZVN0ZXBLZXlzID0gW1wiUGFnZURvd25cIiwgXCJQYWdlVXBcIl07XG4gICAgICAgIHZhciBlZGdlS2V5cyA9IFtcIkhvbWVcIiwgXCJFbmRcIl07XG4gICAgICAgIGlmIChvcHRpb25zLmRpciAmJiAhb3B0aW9ucy5vcnQpIHtcbiAgICAgICAgICAgIC8vIE9uIGFuIHJpZ2h0LXRvLWxlZnQgc2xpZGVyLCB0aGUgbGVmdCBhbmQgcmlnaHQga2V5cyBhY3QgaW52ZXJ0ZWRcbiAgICAgICAgICAgIGhvcml6b250YWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLm9ydCAmJiAhb3B0aW9ucy5kaXIpIHtcbiAgICAgICAgICAgIC8vIE9uIGEgdG9wLXRvLWJvdHRvbSBzbGlkZXIsIHRoZSB1cCBhbmQgZG93biBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgdmVydGljYWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIGxhcmdlU3RlcEtleXMucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0cmlwIFwiQXJyb3dcIiBmb3IgSUUgY29tcGF0aWJpbGl0eS4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5XG4gICAgICAgIHZhciBrZXkgPSBldmVudC5rZXkucmVwbGFjZShcIkFycm93XCIsIFwiXCIpO1xuICAgICAgICB2YXIgaXNMYXJnZURvd24gPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMF07XG4gICAgICAgIHZhciBpc0xhcmdlVXAgPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMV07XG4gICAgICAgIHZhciBpc0Rvd24gPSBrZXkgPT09IHZlcnRpY2FsS2V5c1swXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzBdIHx8IGlzTGFyZ2VEb3duO1xuICAgICAgICB2YXIgaXNVcCA9IGtleSA9PT0gdmVydGljYWxLZXlzWzFdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMV0gfHwgaXNMYXJnZVVwO1xuICAgICAgICB2YXIgaXNNaW4gPSBrZXkgPT09IGVkZ2VLZXlzWzBdO1xuICAgICAgICB2YXIgaXNNYXggPSBrZXkgPT09IGVkZ2VLZXlzWzFdO1xuICAgICAgICBpZiAoIWlzRG93biAmJiAhaXNVcCAmJiAhaXNNaW4gJiYgIWlzTWF4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgdG87XG4gICAgICAgIGlmIChpc1VwIHx8IGlzRG93bikge1xuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlzRG93biA/IDAgOiAxO1xuICAgICAgICAgICAgdmFyIHN0ZXBzID0gZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB2YXIgc3RlcCA9IHN0ZXBzW2RpcmVjdGlvbl07XG4gICAgICAgICAgICAvLyBBdCB0aGUgZWRnZSBvZiBhIHNsaWRlciwgZG8gbm90aGluZ1xuICAgICAgICAgICAgaWYgKHN0ZXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBObyBzdGVwIHNldCwgdXNlIHRoZSBkZWZhdWx0IG9mIDEwJSBvZiB0aGUgc3ViLXJhbmdlXG4gICAgICAgICAgICBpZiAoc3RlcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0uZ2V0RGVmYXVsdFN0ZXAoc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIGlzRG93biwgb3B0aW9ucy5rZXlib2FyZERlZmF1bHRTdGVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0xhcmdlVXAgfHwgaXNMYXJnZURvd24pIHtcbiAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRQYWdlTXVsdGlwbGllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0ZXAgKj0gb3B0aW9ucy5rZXlib2FyZE11bHRpcGxpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGVwIG92ZXIgemVyby1sZW5ndGggcmFuZ2VzICgjOTQ4KTtcbiAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgLy8gRGVjcmVtZW50IGZvciBkb3duIHN0ZXBzXG4gICAgICAgICAgICBzdGVwID0gKGlzRG93biA/IC0xIDogMSkgKiBzdGVwO1xuICAgICAgICAgICAgdG8gPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSArIHN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNNYXgpIHtcbiAgICAgICAgICAgIC8vIEVuZCBrZXlcbiAgICAgICAgICAgIHRvID0gb3B0aW9ucy5zcGVjdHJ1bS54VmFsW29wdGlvbnMuc3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhvbWUga2V5XG4gICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgfVxuICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHRvKSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gQXR0YWNoIGV2ZW50cyB0byBzZXZlcmFsIHNsaWRlciBwYXJ0cy5cbiAgICBmdW5jdGlvbiBiaW5kU2xpZGVyRXZlbnRzKGJlaGF2aW91cikge1xuICAgICAgICAvLyBBdHRhY2ggdGhlIHN0YW5kYXJkIGRyYWcgZXZlbnQgdG8gdGhlIGhhbmRsZXMuXG4gICAgICAgIGlmICghYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBldmVudHMgYXJlIG9ubHkgYm91bmQgdG8gdGhlIHZpc3VhbCBoYW5kbGVcbiAgICAgICAgICAgICAgICAvLyBlbGVtZW50LCBub3QgdGhlICdyZWFsJyBvcmlnaW4gZWxlbWVudC5cbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBoYW5kbGUuY2hpbGRyZW5bMF0sIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogW2luZGV4XSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF0dGFjaCB0aGUgdGFwIGV2ZW50IHRvIHRoZSBzbGlkZXIgYmFzZS5cbiAgICAgICAgaWYgKGJlaGF2aW91ci50YXApIHtcbiAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIHNjb3BlX0Jhc2UsIGV2ZW50VGFwLCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZSBob3ZlciBldmVudHNcbiAgICAgICAgaWYgKGJlaGF2aW91ci5ob3Zlcikge1xuICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5tb3ZlLCBzY29wZV9CYXNlLCBldmVudEhvdmVyLCB7XG4gICAgICAgICAgICAgICAgaG92ZXI6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNYWtlIHRoZSByYW5nZSBkcmFnZ2FibGUuXG4gICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZykge1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMuZm9yRWFjaChmdW5jdGlvbiAoY29ubmVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdCA9PT0gZmFsc2UgfHwgaW5kZXggPT09IDAgfHwgaW5kZXggPT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQmVmb3JlID0gc2NvcGVfSGFuZGxlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVBZnRlciA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciBldmVudEhvbGRlcnMgPSBbY29ubmVjdF07XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZXNUb0RyYWcgPSBbaGFuZGxlQmVmb3JlLCBoYW5kbGVBZnRlcl07XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBbaW5kZXggLSAxLCBpbmRleF07XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoY29ubmVjdCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWdnYWJsZSk7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgcmFuZ2UgaXMgZml4ZWQsIHRoZSBlbnRpcmUgcmFuZ2UgY2FuXG4gICAgICAgICAgICAgICAgLy8gYmUgZHJhZ2dlZCBieSB0aGUgaGFuZGxlcy4gVGhlIGhhbmRsZSBpbiB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAvLyBvcmlnaW4gd2lsbCBwcm9wYWdhdGUgdGhlIHN0YXJ0IGV2ZW50IHVwd2FyZCxcbiAgICAgICAgICAgICAgICAvLyBidXQgaXQgbmVlZHMgdG8gYmUgYm91bmQgbWFudWFsbHkgb24gdGhlIG90aGVyLlxuICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQmVmb3JlLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQWZ0ZXIuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWdBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlc1RvRHJhZyA9IHNjb3BlX0hhbmRsZXM7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBzY29wZV9IYW5kbGVOdW1iZXJzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIb2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgZXZlbnRIb2xkZXIsIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXM6IGhhbmRsZXNUb0RyYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBoYW5kbGVOdW1iZXJzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogY29ubmVjdCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBdHRhY2ggYW4gZXZlbnQgdG8gdGhpcyBzbGlkZXIsIHBvc3NpYmx5IGluY2x1ZGluZyBhIG5hbWVzcGFjZVxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudChuYW1lc3BhY2VkRXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdID0gc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gfHwgW107XG4gICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAvLyBJZiB0aGUgZXZlbnQgYm91bmQgaXMgJ3VwZGF0ZSwnIGZpcmUgaXQgaW1tZWRpYXRlbHkgZm9yIGFsbCBoYW5kbGVzLlxuICAgICAgICBpZiAobmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpc0ludGVybmFsTmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gbmFtZXNwYWNlID09PSBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhIHx8IG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHM7XG4gICAgfVxuICAgIC8vIFVuZG8gYXR0YWNobWVudCBvZiBldmVudFxuICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5hbWVzcGFjZWRFdmVudCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBuYW1lc3BhY2VkRXZlbnQgJiYgbmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGV2ZW50ID8gbmFtZXNwYWNlZEV2ZW50LnN1YnN0cmluZyhldmVudC5sZW5ndGgpIDogbmFtZXNwYWNlZEV2ZW50O1xuICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGJpbmQpIHtcbiAgICAgICAgICAgIHZhciB0RXZlbnQgPSBiaW5kLnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgIHZhciB0TmFtZXNwYWNlID0gYmluZC5zdWJzdHJpbmcodEV2ZW50Lmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoKCFldmVudCB8fCBldmVudCA9PT0gdEV2ZW50KSAmJiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpKSB7XG4gICAgICAgICAgICAgICAgLy8gb25seSBkZWxldGUgcHJvdGVjdGVkIGludGVybmFsIGV2ZW50IGlmIGludGVudGlvbmFsXG4gICAgICAgICAgICAgICAgaWYgKCFpc0ludGVybmFsTmFtZXNwYWNlKHROYW1lc3BhY2UpIHx8IG5hbWVzcGFjZSA9PT0gdE5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2NvcGVfRXZlbnRzW2JpbmRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEV4dGVybmFsIGV2ZW50IGhhbmRsaW5nXG4gICAgZnVuY3Rpb24gZmlyZUV2ZW50KGV2ZW50TmFtZSwgaGFuZGxlTnVtYmVyLCB0YXApIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRFdmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50VHlwZSA9IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09IGV2ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0V2ZW50c1t0YXJnZXRFdmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBzbGlkZXIgcHVibGljIEFQSSBhcyB0aGUgc2NvcGUgKCd0aGlzJylcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfU2VsZiwgXG4gICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiB2YWx1ZXMgYXMgYXJyYXksIHNvIGFyZ18xW2FyZ18yXSBpcyBhbHdheXMgdmFsaWQuXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGluZGV4LCAwIG9yIDFcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gVW4tZm9ybWF0dGVkIHNsaWRlciB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfVmFsdWVzLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAvLyBFdmVudCBpcyBmaXJlZCBieSB0YXAsIHRydWUgb3IgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFwIHx8IGZhbHNlLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gTGVmdCBvZmZzZXQgb2YgdGhlIGhhbmRsZSwgaW4gcmVsYXRpb24gdG8gdGhlIHNsaWRlclxuICAgICAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgdG8gYW4gYWNjZXNzaWJsZSBwYXJhbWV0ZXIgd2hlbiB0aGlzIGlzIHVuYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX1NlbGYpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gU3BsaXQgb3V0IHRoZSBoYW5kbGUgcG9zaXRpb25pbmcgbG9naWMgc28gdGhlIE1vdmUgZXZlbnQgY2FuIHVzZSBpdCwgdG9vXG4gICAgZnVuY3Rpb24gY2hlY2tIYW5kbGVQb3NpdGlvbihyZWZlcmVuY2UsIGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGdldFZhbHVlLCBzbW9vdGhTdGVwcykge1xuICAgICAgICB2YXIgZGlzdGFuY2U7XG4gICAgICAgIC8vIEZvciBzbGlkZXJzIHdpdGggbXVsdGlwbGUgaGFuZGxlcywgbGltaXQgbW92ZW1lbnQgdG8gdGhlIG90aGVyIGhhbmRsZS5cbiAgICAgICAgLy8gQXBwbHkgdGhlIG1hcmdpbiBvcHRpb24gYnkgYWRkaW5nIGl0IHRvIHRoZSBoYW5kbGUgcG9zaXRpb25zLlxuICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxICYmICFvcHRpb25zLmV2ZW50cy51bmNvbnN0cmFpbmVkKSB7XG4gICAgICAgICAgICBpZiAobG9va0JhY2t3YXJkICYmIGhhbmRsZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLm1hcmdpbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsb29rRm9yd2FyZCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLm1hcmdpbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSBsaW1pdCBvcHRpb24gaGFzIHRoZSBvcHBvc2l0ZSBlZmZlY3QsIGxpbWl0aW5nIGhhbmRsZXMgdG8gYVxuICAgICAgICAvLyBtYXhpbXVtIGRpc3RhbmNlIGZyb20gYW5vdGhlci4gTGltaXQgbXVzdCBiZSA+IDAsIGFzIG90aGVyd2lzZVxuICAgICAgICAvLyBoYW5kbGVzIHdvdWxkIGJlIHVubW92YWJsZS5cbiAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSAmJiBvcHRpb25zLmxpbWl0KSB7XG4gICAgICAgICAgICBpZiAobG9va0JhY2t3YXJkICYmIGhhbmRsZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLmxpbWl0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyICsgMV0sIG9wdGlvbnMubGltaXQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgcGFkZGluZyBvcHRpb24ga2VlcHMgdGhlIGhhbmRsZXMgYSBjZXJ0YWluIGRpc3RhbmNlIGZyb20gdGhlXG4gICAgICAgIC8vIGVkZ2VzIG9mIHRoZSBzbGlkZXIuIFBhZGRpbmcgbXVzdCBiZSA+IDAuXG4gICAgICAgIGlmIChvcHRpb25zLnBhZGRpbmcpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UoMCwgb3B0aW9ucy5wYWRkaW5nWzBdLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKDEwMCwgb3B0aW9ucy5wYWRkaW5nWzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0byA9IE1hdGgubWluKHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzbW9vdGhTdGVwcykge1xuICAgICAgICAgICAgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHRvKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMaW1pdCBwZXJjZW50YWdlIHRvIHRoZSAwIC0gMTAwIHJhbmdlXG4gICAgICAgIHRvID0gbGltaXQodG8pO1xuICAgICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgaGFuZGxlIGNhbid0IG1vdmVcbiAgICAgICAgaWYgKHRvID09PSByZWZlcmVuY2VbaGFuZGxlTnVtYmVyXSAmJiAhZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG87XG4gICAgfVxuICAgIC8vIFVzZXMgc2xpZGVyIG9yaWVudGF0aW9uIHRvIGNyZWF0ZSBDU1MgcnVsZXMuIGEgPSBiYXNlIHZhbHVlO1xuICAgIGZ1bmN0aW9uIGluUnVsZU9yZGVyKHYsIGEpIHtcbiAgICAgICAgdmFyIG8gPSBvcHRpb25zLm9ydDtcbiAgICAgICAgcmV0dXJuIChvID8gYSA6IHYpICsgXCIsIFwiICsgKG8gPyB2IDogYSk7XG4gICAgfVxuICAgIC8vIE1vdmVzIGhhbmRsZShzKSBieSBhIHBlcmNlbnRhZ2VcbiAgICAvLyAoYm9vbCwgJSB0byBtb3ZlLCBbJSB3aGVyZSBoYW5kbGUgc3RhcnRlZCwgLi4uXSwgW2luZGV4IGluIHNjb3BlX0hhbmRsZXMsIC4uLl0pXG4gICAgZnVuY3Rpb24gbW92ZUhhbmRsZXModXB3YXJkLCBwcm9wb3NhbCwgbG9jYXRpb25zLCBoYW5kbGVOdW1iZXJzLCBjb25uZWN0KSB7XG4gICAgICAgIHZhciBwcm9wb3NhbHMgPSBsb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgLy8gU3RvcmUgZmlyc3QgaGFuZGxlIG5vdywgc28gd2Ugc3RpbGwgaGF2ZSBpdCBpbiBjYXNlIGhhbmRsZU51bWJlcnMgaXMgcmV2ZXJzZWRcbiAgICAgICAgdmFyIGZpcnN0SGFuZGxlID0gaGFuZGxlTnVtYmVyc1swXTtcbiAgICAgICAgdmFyIHNtb290aFN0ZXBzID0gb3B0aW9ucy5ldmVudHMuc21vb3RoU3RlcHM7XG4gICAgICAgIHZhciBiID0gWyF1cHdhcmQsIHVwd2FyZF07XG4gICAgICAgIHZhciBmID0gW3Vwd2FyZCwgIXVwd2FyZF07XG4gICAgICAgIC8vIENvcHkgaGFuZGxlTnVtYmVycyBzbyB3ZSBkb24ndCBjaGFuZ2UgdGhlIGRhdGFzZXRcbiAgICAgICAgaGFuZGxlTnVtYmVycyA9IGhhbmRsZU51bWJlcnMuc2xpY2UoKTtcbiAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIHdoaWNoIGhhbmRsZSBpcyAnbGVhZGluZycuXG4gICAgICAgIC8vIElmIHRoYXQgb25lIGNhbid0IG1vdmUgdGhlIHNlY29uZCBjYW4ndCBlaXRoZXIuXG4gICAgICAgIGlmICh1cHdhcmQpIHtcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0ZXAgMTogZ2V0IHRoZSBtYXhpbXVtIHBlcmNlbnRhZ2UgdGhhdCBhbnkgb2YgdGhlIGhhbmRsZXMgY2FuIG1vdmVcbiAgICAgICAgaWYgKGhhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHByb3Bvc2FscywgaGFuZGxlTnVtYmVyLCBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSArIHByb3Bvc2FsLCBiW29dLCBmW29dLCBmYWxzZSwgc21vb3RoU3RlcHMpO1xuICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgb25lIG9mIHRoZSBoYW5kbGVzIGNhbid0IG1vdmUuXG4gICAgICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IHRvIC0gcHJvcG9zYWxzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgICAgIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdID0gdG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdXNpbmcgb25lIGhhbmRsZSwgY2hlY2sgYmFja3dhcmQgQU5EIGZvcndhcmRcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiID0gZiA9IFt0cnVlXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgLy8gU3RlcCAyOiBUcnkgdG8gc2V0IHRoZSBoYW5kbGVzIHdpdGggdGhlIGZvdW5kIHBlcmNlbnRhZ2VcbiAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgIHN0YXRlID1cbiAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBsb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSArIHByb3Bvc2FsLCBiW29dLCBmW29dLCBmYWxzZSwgc21vb3RoU3RlcHMpIHx8IHN0YXRlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gU3RlcCAzOiBJZiBhIGhhbmRsZSBtb3ZlZCwgZmlyZSBldmVudHNcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGNvbm5lY3QsIHRoZW4gZmlyZSBkcmFnIGV2ZW50XG4gICAgICAgICAgICBpZiAoY29ubmVjdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJkcmFnXCIsIGZpcnN0SGFuZGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUYWtlcyBhIGJhc2UgdmFsdWUgYW5kIGFuIG9mZnNldC4gVGhpcyBvZmZzZXQgaXMgdXNlZCBmb3IgdGhlIGNvbm5lY3QgYmFyIHNpemUuXG4gICAgLy8gSW4gdGhlIGluaXRpYWwgZGVzaWduIGZvciB0aGlzIGZlYXR1cmUsIHRoZSBvcmlnaW4gZWxlbWVudCB3YXMgMSUgd2lkZS5cbiAgICAvLyBVbmZvcnR1bmF0ZWx5LCBhIHJvdW5kaW5nIGJ1ZyBpbiBDaHJvbWUgbWFrZXMgaXQgaW1wb3NzaWJsZSB0byBpbXBsZW1lbnQgdGhpcyBmZWF0dXJlXG4gICAgLy8gaW4gdGhpcyBtYW5uZXI6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc5ODIyM1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybURpcmVjdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIGEgLSBiIDogYTtcbiAgICB9XG4gICAgLy8gVXBkYXRlcyBzY29wZV9Mb2NhdGlvbnMgYW5kIHNjb3BlX1ZhbHVlcywgdXBkYXRlcyB2aXN1YWwgc3RhdGVcbiAgICBmdW5jdGlvbiB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvbnMuXG4gICAgICAgIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID0gdG87XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvIHRoZSBzbGlkZXIgc3RlcHBpbmcvcmFuZ2UuXG4gICAgICAgIHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgdmFyIHRyYW5zbGF0aW9uID0gdHJhbnNmb3JtRGlyZWN0aW9uKHRvLCAwKSAtIHNjb3BlX0Rpck9mZnNldDtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zbGF0aW9uICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9IHRyYW5zbGF0ZVJ1bGU7XG4gICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIgKyAxKTtcbiAgICB9XG4gICAgLy8gSGFuZGxlcyBiZWZvcmUgdGhlIHNsaWRlciBtaWRkbGUgYXJlIHN0YWNrZWQgbGF0ZXIgPSBoaWdoZXIsXG4gICAgLy8gSGFuZGxlcyBhZnRlciB0aGUgbWlkZGxlIGxhdGVyIGlzIGxvd2VyXG4gICAgLy8gW1s3XSBbOF0gLi4uLi4uLi4uLiB8IC4uLi4uLi4uLi4gWzVdIFs0XVxuICAgIGZ1bmN0aW9uIHNldFppbmRleCgpIHtcbiAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBkaXIgPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA+IDUwID8gLTEgOiAxO1xuICAgICAgICAgICAgdmFyIHpJbmRleCA9IDMgKyAoc2NvcGVfSGFuZGxlcy5sZW5ndGggKyBkaXIgKiBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlLnpJbmRleCA9IFN0cmluZyh6SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gVGVzdCBzdWdnZXN0ZWQgdmFsdWVzIGFuZCBhcHBseSBtYXJnaW4sIHN0ZXAuXG4gICAgLy8gaWYgZXhhY3RJbnB1dCBpcyB0cnVlLCBkb24ndCBydW4gY2hlY2tIYW5kbGVQb3NpdGlvbiwgdGhlbiB0aGUgaGFuZGxlIGNhbiBiZSBwbGFjZWQgaW4gYmV0d2VlbiBzdGVwcyAoIzQzNilcbiAgICBmdW5jdGlvbiBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZXhhY3RJbnB1dCwgc21vb3RoU3RlcHMpIHtcbiAgICAgICAgaWYgKCFleGFjdElucHV0KSB7XG4gICAgICAgICAgICB0byA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBmYWxzZSwgc21vb3RoU3RlcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIFVwZGF0ZXMgc3R5bGUgYXR0cmlidXRlIGZvciBjb25uZWN0IG5vZGVzXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29ubmVjdChpbmRleCkge1xuICAgICAgICAvLyBTa2lwIGNvbm5lY3RzIHNldCB0byBmYWxzZVxuICAgICAgICBpZiAoIXNjb3BlX0Nvbm5lY3RzW2luZGV4XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsID0gMDtcbiAgICAgICAgdmFyIGggPSAxMDA7XG4gICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgbCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCAhPT0gc2NvcGVfQ29ubmVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgaCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgdXNlIHR3byBydWxlczpcbiAgICAgICAgLy8gJ3RyYW5zbGF0ZScgdG8gY2hhbmdlIHRoZSBsZWZ0L3RvcCBvZmZzZXQ7XG4gICAgICAgIC8vICdzY2FsZScgdG8gY2hhbmdlIHRoZSB3aWR0aCBvZiB0aGUgZWxlbWVudDtcbiAgICAgICAgLy8gQXMgdGhlIGVsZW1lbnQgaGFzIGEgd2lkdGggb2YgMTAwJSwgYSB0cmFuc2xhdGlvbiBvZiAxMDAlIGlzIGVxdWFsIHRvIDEwMCUgb2YgdGhlIHBhcmVudCAoLm5vVWktYmFzZSlcbiAgICAgICAgdmFyIGNvbm5lY3RXaWR0aCA9IGggLSBsO1xuICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNmb3JtRGlyZWN0aW9uKGwsIGNvbm5lY3RXaWR0aCkgKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XG4gICAgICAgIHZhciBzY2FsZVJ1bGUgPSBcInNjYWxlKFwiICsgaW5SdWxlT3JkZXIoY29ubmVjdFdpZHRoIC8gMTAwLCBcIjFcIikgKyBcIilcIjtcbiAgICAgICAgc2NvcGVfQ29ubmVjdHNbaW5kZXhdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPVxuICAgICAgICAgICAgdHJhbnNsYXRlUnVsZSArIFwiIFwiICsgc2NhbGVSdWxlO1xuICAgIH1cbiAgICAvLyBQYXJzZXMgdmFsdWUgcGFzc2VkIHRvIC5zZXQgbWV0aG9kLiBSZXR1cm5zIGN1cnJlbnQgdmFsdWUgaWYgbm90IHBhcnNlLWFibGUuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVRvVmFsdWUodG8sIGhhbmRsZU51bWJlcikge1xuICAgICAgICAvLyBTZXR0aW5nIHdpdGggbnVsbCBpbmRpY2F0ZXMgYW4gJ2lnbm9yZScuXG4gICAgICAgIC8vIElucHV0dGluZyAnZmFsc2UnIGlzIGludmFsaWQuXG4gICAgICAgIGlmICh0byA9PT0gbnVsbCB8fCB0byA9PT0gZmFsc2UgfHwgdG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGEgZm9ybWF0dGVkIG51bWJlciB3YXMgcGFzc2VkLCBhdHRlbXB0IHRvIGRlY29kZSBpdC5cbiAgICAgICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdG8gPSBTdHJpbmcodG8pO1xuICAgICAgICB9XG4gICAgICAgIHRvID0gb3B0aW9ucy5mb3JtYXQuZnJvbSh0byk7XG4gICAgICAgIGlmICh0byAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgcGFyc2luZyB0aGUgbnVtYmVyIGZhaWxlZCwgdXNlIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgICAgICBpZiAodG8gPT09IGZhbHNlIHx8IGlzTmFOKHRvKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0bztcbiAgICB9XG4gICAgLy8gU2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgZnVuY3Rpb24gdmFsdWVTZXQoaW5wdXQsIGZpcmVTZXRFdmVudCwgZXhhY3RJbnB1dCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gYXNBcnJheShpbnB1dCk7XG4gICAgICAgIHZhciBpc0luaXQgPSBzY29wZV9Mb2NhdGlvbnNbMF0gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gRXZlbnQgZmlyZXMgYnkgZGVmYXVsdFxuICAgICAgICBmaXJlU2V0RXZlbnQgPSBmaXJlU2V0RXZlbnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmaXJlU2V0RXZlbnQ7XG4gICAgICAgIC8vIEFuaW1hdGlvbiBpcyBvcHRpb25hbC5cbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbml0aWFsIHZhbHVlcyB3ZXJlIHNldCBiZWZvcmUgdXNpbmcgYW5pbWF0ZWQgcGxhY2VtZW50LlxuICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRlICYmICFpc0luaXQpIHtcbiAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3QgcGFzcywgd2l0aG91dCBsb29rQWhlYWQgYnV0IHdpdGggbG9va0JhY2t3YXJkLiBWYWx1ZXMgYXJlIHNldCBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCByZXNvbHZlVG9WYWx1ZSh2YWx1ZXNbaGFuZGxlTnVtYmVyXSwgaGFuZGxlTnVtYmVyKSwgdHJ1ZSwgZmFsc2UsIGV4YWN0SW5wdXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGkgPSBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSA/IDAgOiAxO1xuICAgICAgICAvLyBTcHJlYWQgaGFuZGxlcyBldmVubHkgYWNyb3NzIHRoZSBzbGlkZXIgaWYgdGhlIHJhbmdlIGhhcyBubyBzaXplIChtaW49bWF4KVxuICAgICAgICBpZiAoaXNJbml0ICYmIHNjb3BlX1NwZWN0cnVtLmhhc05vU2l6ZSgpKSB7XG4gICAgICAgICAgICBleGFjdElucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1swXSA9IDA7XG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNwYWNlXzEgPSAxMDAgLyAoc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA9IGhhbmRsZU51bWJlciAqIHNwYWNlXzE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2Vjb25kYXJ5IHBhc3Nlcy4gTm93IHRoYXQgYWxsIGJhc2UgdmFsdWVzIGFyZSBzZXQsIGFwcGx5IGNvbnN0cmFpbnRzLlxuICAgICAgICAvLyBJdGVyYXRlIGFsbCBoYW5kbGVzIHRvIGVuc3VyZSBjb25zdHJhaW50cyBhcmUgYXBwbGllZCBmb3IgdGhlIGVudGlyZSBzbGlkZXIgKElzc3VlICMxMDA5KVxuICAgICAgICBmb3IgKDsgaSA8IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIC8vIEZpcmUgdGhlIGV2ZW50IG9ubHkgZm9yIGhhbmRsZXMgdGhhdCByZWNlaXZlZCBhIG5ldyB2YWx1ZSwgYXMgcGVyICM1NzlcbiAgICAgICAgICAgIGlmICh2YWx1ZXNbaGFuZGxlTnVtYmVyXSAhPT0gbnVsbCAmJiBmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFJlc2V0IHNsaWRlciB0byBpbml0aWFsIHZhbHVlc1xuICAgIGZ1bmN0aW9uIHZhbHVlUmVzZXQoZmlyZVNldEV2ZW50KSB7XG4gICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQsIGZpcmVTZXRFdmVudCk7XG4gICAgfVxuICAgIC8vIFNldCB2YWx1ZSBmb3IgYSBzaW5nbGUgaGFuZGxlXG4gICAgZnVuY3Rpb24gdmFsdWVTZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB2YWx1ZSwgZmlyZVNldEV2ZW50LCBleGFjdElucHV0KSB7XG4gICAgICAgIC8vIEVuc3VyZSBudW1lcmljIGlucHV0XG4gICAgICAgIGhhbmRsZU51bWJlciA9IE51bWJlcihoYW5kbGVOdW1iZXIpO1xuICAgICAgICBpZiAoIShoYW5kbGVOdW1iZXIgPj0gMCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGludmFsaWQgaGFuZGxlIG51bWJlciwgZ290OiBcIiArIGhhbmRsZU51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9vayBib3RoIGJhY2t3YXJkIGFuZCBmb3J3YXJkLCBzaW5jZSB3ZSBkb24ndCB3YW50IHRoaXMgaGFuZGxlIHRvIFwicHVzaFwiIG90aGVyIGhhbmRsZXMgKCM5NjApO1xuICAgICAgICAvLyBUaGUgZXhhY3RJbnB1dCBhcmd1bWVudCBjYW4gYmUgdXNlZCB0byBpZ25vcmUgc2xpZGVyIHN0ZXBwaW5nICgjNDM2KVxuICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCByZXNvbHZlVG9WYWx1ZSh2YWx1ZSwgaGFuZGxlTnVtYmVyKSwgdHJ1ZSwgdHJ1ZSwgZXhhY3RJbnB1dCk7XG4gICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICBpZiAoZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBHZXQgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICBmdW5jdGlvbiB2YWx1ZUdldCh1bmVuY29kZWQpIHtcbiAgICAgICAgaWYgKHVuZW5jb2RlZCA9PT0gdm9pZCAwKSB7IHVuZW5jb2RlZCA9IGZhbHNlOyB9XG4gICAgICAgIGlmICh1bmVuY29kZWQpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBhIGNvcHkgb2YgdGhlIHJhdyB2YWx1ZXNcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9WYWx1ZXMubGVuZ3RoID09PSAxID8gc2NvcGVfVmFsdWVzWzBdIDogc2NvcGVfVmFsdWVzLnNsaWNlKDApO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZXMgPSBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKTtcbiAgICAgICAgLy8gSWYgb25seSBvbmUgaGFuZGxlIGlzIHVzZWQsIHJldHVybiBhIHNpbmdsZSB2YWx1ZS5cbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG4gICAgLy8gUmVtb3ZlcyBjbGFzc2VzIGZyb20gdGhlIHJvb3QgYW5kIGVtcHRpZXMgaXQuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHByb3RlY3RlZCBpbnRlcm5hbCBsaXN0ZW5lcnNcbiAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgIHJlbW92ZUV2ZW50KElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzKTtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5jc3NDbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgd2hpbGUgKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBzY29wZV9UYXJnZXQucmVtb3ZlQ2hpbGQoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzY29wZV9UYXJnZXQubm9VaVNsaWRlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKGhhbmRsZU51bWJlcikge1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgdmFyIG5lYXJieVN0ZXBzID0gc2NvcGVfU3BlY3RydW0uZ2V0TmVhcmJ5U3RlcHMobG9jYXRpb24pO1xuICAgICAgICB2YXIgdmFsdWUgPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgdmFyIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgIHZhciBkZWNyZW1lbnQgPSBudWxsO1xuICAgICAgICAvLyBJZiBzbmFwcGVkLCBkaXJlY3RseSB1c2UgZGVmaW5lZCBzdGVwIHZhbHVlXG4gICAgICAgIGlmIChvcHRpb25zLnNuYXApIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgdmFsdWUgLSBuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLnN0YXJ0VmFsdWUgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBuZXh0IHZhbHVlIGluIHRoaXMgc3RlcCBtb3ZlcyBpbnRvIHRoZSBuZXh0IHN0ZXAsXG4gICAgICAgIC8vIHRoZSBpbmNyZW1lbnQgaXMgdGhlIHN0YXJ0IG9mIHRoZSBuZXh0IHN0ZXAgLSB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICsgaW5jcmVtZW50ID4gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBiZXlvbmQgdGhlIHN0YXJ0aW5nIHBvaW50XG4gICAgICAgIGlmICh2YWx1ZSA+IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgIGRlY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVjcmVtZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYSBoYW5kbGUgaXMgYXQgdGhlIHN0YXJ0IG9mIGEgc3RlcCwgaXQgYWx3YXlzIHN0ZXBzIGJhY2sgaW50byB0aGUgcHJldmlvdXMgc3RlcCBmaXJzdFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudCA9IHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5oaWdoZXN0U3RlcDtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3csIGlmIGF0IHRoZSBzbGlkZXIgZWRnZXMsIHRoZXJlIGlzIG5vIGluL2RlY3JlbWVudFxuICAgICAgICBpZiAobG9jYXRpb24gPT09IDEwMCkge1xuICAgICAgICAgICAgaW5jcmVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsb2NhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcyBwZXIgIzM5MSwgdGhlIGNvbXBhcmlzb24gZm9yIHRoZSBkZWNyZW1lbnQgc3RlcCBjYW4gaGF2ZSBzb21lIHJvdW5kaW5nIGlzc3Vlcy5cbiAgICAgICAgdmFyIHN0ZXBEZWNpbWFscyA9IHNjb3BlX1NwZWN0cnVtLmNvdW50U3RlcERlY2ltYWxzKCk7XG4gICAgICAgIC8vIFJvdW5kIHBlciAjMzkxXG4gICAgICAgIGlmIChpbmNyZW1lbnQgIT09IG51bGwgJiYgaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgaW5jcmVtZW50ID0gTnVtYmVyKGluY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWNyZW1lbnQgIT09IG51bGwgJiYgZGVjcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVjcmVtZW50ID0gTnVtYmVyKGRlY3JlbWVudC50b0ZpeGVkKHN0ZXBEZWNpbWFscykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZGVjcmVtZW50LCBpbmNyZW1lbnRdO1xuICAgIH1cbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBzaXplIGZvciB0aGUgc2xpZGVyLlxuICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwcygpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZU51bWJlcnMubWFwKGdldE5leHRTdGVwc0ZvckhhbmRsZSk7XG4gICAgfVxuICAgIC8vIFVwZGF0YWJsZTogbWFyZ2luLCBsaW1pdCwgcGFkZGluZywgc3RlcCwgcmFuZ2UsIGFuaW1hdGUsIHNuYXBcbiAgICBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKG9wdGlvbnNUb1VwZGF0ZSwgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgIC8vIFNwZWN0cnVtIGlzIGNyZWF0ZWQgdXNpbmcgdGhlIHJhbmdlLCBzbmFwLCBkaXJlY3Rpb24gYW5kIHN0ZXAgb3B0aW9ucy5cbiAgICAgICAgLy8gJ3NuYXAnIGFuZCAnc3RlcCcgY2FuIGJlIHVwZGF0ZWQuXG4gICAgICAgIC8vIElmICdzbmFwJyBhbmQgJ3N0ZXAnIGFyZSBub3QgcGFzc2VkLCB0aGV5IHNob3VsZCByZW1haW4gdW5jaGFuZ2VkLlxuICAgICAgICB2YXIgdiA9IHZhbHVlR2V0KCk7XG4gICAgICAgIHZhciB1cGRhdGVBYmxlID0gW1xuICAgICAgICAgICAgXCJtYXJnaW5cIixcbiAgICAgICAgICAgIFwibGltaXRcIixcbiAgICAgICAgICAgIFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgXCJyYW5nZVwiLFxuICAgICAgICAgICAgXCJhbmltYXRlXCIsXG4gICAgICAgICAgICBcInNuYXBcIixcbiAgICAgICAgICAgIFwic3RlcFwiLFxuICAgICAgICAgICAgXCJmb3JtYXRcIixcbiAgICAgICAgICAgIFwicGlwc1wiLFxuICAgICAgICAgICAgXCJ0b29sdGlwc1wiLFxuICAgICAgICBdO1xuICAgICAgICAvLyBPbmx5IGNoYW5nZSBvcHRpb25zIHRoYXQgd2UncmUgYWN0dWFsbHkgcGFzc2VkIHRvIHVwZGF0ZS5cbiAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5kZWZpbmVkLiBudWxsIHJlbW92ZXMgdGhlIHZhbHVlLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxPcHRpb25zW25hbWVdID0gb3B0aW9uc1RvVXBkYXRlW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG5ld09wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICAvLyBMb2FkIG5ldyBvcHRpb25zIGludG8gdGhlIHNsaWRlciBzdGF0ZVxuICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSBuZXdPcHRpb25zW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2NvcGVfU3BlY3RydW0gPSBuZXdPcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICAvLyBMaW1pdCwgbWFyZ2luIGFuZCBwYWRkaW5nIGRlcGVuZCBvbiB0aGUgc3BlY3RydW0gYnV0IGFyZSBzdG9yZWQgb3V0c2lkZSBvZiBpdC4gKCM2NzcpXG4gICAgICAgIG9wdGlvbnMubWFyZ2luID0gbmV3T3B0aW9ucy5tYXJnaW47XG4gICAgICAgIG9wdGlvbnMubGltaXQgPSBuZXdPcHRpb25zLmxpbWl0O1xuICAgICAgICBvcHRpb25zLnBhZGRpbmcgPSBuZXdPcHRpb25zLnBhZGRpbmc7XG4gICAgICAgIC8vIFVwZGF0ZSBwaXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIHRvb2x0aXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW52YWxpZGF0ZSB0aGUgY3VycmVudCBwb3NpdGlvbmluZyBzbyB2YWx1ZVNldCBmb3JjZXMgYW4gdXBkYXRlLlxuICAgICAgICBzY29wZV9Mb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgdmFsdWVTZXQoaXNTZXQob3B0aW9uc1RvVXBkYXRlLnN0YXJ0KSA/IG9wdGlvbnNUb1VwZGF0ZS5zdGFydCA6IHYsIGZpcmVTZXRFdmVudCk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemF0aW9uIHN0ZXBzXG4gICAgZnVuY3Rpb24gc2V0dXBTbGlkZXIoKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBlbGVtZW50LCBpbml0aWFsaXplIEhUTUwgYW5kIHNldCBjbGFzc2VzLlxuICAgICAgICAvLyBBZGQgaGFuZGxlcyBhbmQgY29ubmVjdCBlbGVtZW50cy5cbiAgICAgICAgc2NvcGVfQmFzZSA9IGFkZFNsaWRlcihzY29wZV9UYXJnZXQpO1xuICAgICAgICBhZGRFbGVtZW50cyhvcHRpb25zLmNvbm5lY3QsIHNjb3BlX0Jhc2UpO1xuICAgICAgICAvLyBBdHRhY2ggdXNlciBldmVudHMuXG4gICAgICAgIGJpbmRTbGlkZXJFdmVudHMob3B0aW9ucy5ldmVudHMpO1xuICAgICAgICAvLyBVc2UgdGhlIHB1YmxpYyB2YWx1ZSBtZXRob2QgdG8gc2V0IHRoZSBzdGFydCB2YWx1ZXMuXG4gICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQpO1xuICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgIHRvb2x0aXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYXJpYSgpO1xuICAgIH1cbiAgICBzZXR1cFNsaWRlcigpO1xuICAgIHZhciBzY29wZV9TZWxmID0ge1xuICAgICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgICBzdGVwczogZ2V0TmV4dFN0ZXBzLFxuICAgICAgICBvbjogYmluZEV2ZW50LFxuICAgICAgICBvZmY6IHJlbW92ZUV2ZW50LFxuICAgICAgICBnZXQ6IHZhbHVlR2V0LFxuICAgICAgICBzZXQ6IHZhbHVlU2V0LFxuICAgICAgICBzZXRIYW5kbGU6IHZhbHVlU2V0SGFuZGxlLFxuICAgICAgICByZXNldDogdmFsdWVSZXNldCxcbiAgICAgICAgZGlzYWJsZTogZGlzYWJsZSxcbiAgICAgICAgZW5hYmxlOiBlbmFibGUsXG4gICAgICAgIC8vIEV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZywgZG9uJ3QgdXNlIHRoaXMgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgX19tb3ZlSGFuZGxlczogZnVuY3Rpb24gKHVwd2FyZCwgcHJvcG9zYWwsIGhhbmRsZU51bWJlcnMpIHtcbiAgICAgICAgICAgIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVycyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IG9yaWdpbmFsT3B0aW9ucyxcbiAgICAgICAgdXBkYXRlT3B0aW9uczogdXBkYXRlT3B0aW9ucyxcbiAgICAgICAgdGFyZ2V0OiBzY29wZV9UYXJnZXQsXG4gICAgICAgIHJlbW92ZVBpcHM6IHJlbW92ZVBpcHMsXG4gICAgICAgIHJlbW92ZVRvb2x0aXBzOiByZW1vdmVUb29sdGlwcyxcbiAgICAgICAgZ2V0UG9zaXRpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRvb2x0aXBzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldE9yaWdpbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVzO1xuICAgICAgICB9LFxuICAgICAgICBwaXBzOiBwaXBzLCAvLyBJc3N1ZSAjNTk0XG4gICAgfTtcbiAgICByZXR1cm4gc2NvcGVfU2VsZjtcbn1cbi8vIFJ1biB0aGUgc3RhbmRhcmQgaW5pdGlhbGl6ZXJcbmZ1bmN0aW9uIGluaXRpYWxpemUodGFyZ2V0LCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0Lm5vZGVOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGNyZWF0ZSByZXF1aXJlcyBhIHNpbmdsZSBlbGVtZW50LCBnb3Q6IFwiICsgdGFyZ2V0KTtcbiAgICB9XG4gICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgdGhlIHNsaWRlciB3YXMgYWxyZWFkeSBpbml0aWFsaXplZC5cbiAgICBpZiAodGFyZ2V0Lm5vVWlTbGlkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogU2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlwiKTtcbiAgICB9XG4gICAgLy8gVGVzdCB0aGUgb3B0aW9ucyBhbmQgY3JlYXRlIHRoZSBzbGlkZXIgZW52aXJvbm1lbnQ7XG4gICAgdmFyIG9wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgIHZhciBhcGkgPSBzY29wZSh0YXJnZXQsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgdGFyZ2V0Lm5vVWlTbGlkZXIgPSBhcGk7XG4gICAgcmV0dXJuIGFwaTtcbn1cbmV4cG9ydCB7IGluaXRpYWxpemUgYXMgY3JlYXRlIH07XG5leHBvcnQgeyBjc3NDbGFzc2VzIH07XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgIF9fc3BlY3RydW06IFNwZWN0cnVtLFxuICAgIC8vIEEgcmVmZXJlbmNlIHRvIHRoZSBkZWZhdWx0IGNsYXNzZXMsIGFsbG93cyBnbG9iYWwgY2hhbmdlcy5cbiAgICAvLyBVc2UgdGhlIGNzc0NsYXNzZXMgb3B0aW9uIGZvciBjaGFuZ2VzIHRvIG9uZSBzbGlkZXIuXG4gICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICBjcmVhdGU6IGluaXRpYWxpemUsXG59O1xuIiwiLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDQuNC3IG5vZGVfbW9kdWxlc1xyXG5pbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gXCJub3Vpc2xpZGVyXCI7XHJcblxyXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0YLQuNC70LXQuSDQuNC3IHNjc3MvYmFzZS9mb3Jtcy9yYW5nZS5zY3NzXHJcbi8vINCyINGE0LDQudC70LUgc2Nzcy9mb3Jtcy9mb3Jtcy5zY3NzXHJcblxyXG4vLyDQn9C+0LTQutC70Y7Rh9C10L3QuNC1IGPRgtC40LvQtdC5INC40Lcgbm9kZV9tb2R1bGVzXHJcbi8vIGltcG9ydCBcIm5vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlSW5pdCgpIHtcclxuICBjb25zdCBzZXR0aW5nU2xpZGVyc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tc2V0dGluZ1wiKTtcclxuICBzZXR0aW5nU2xpZGVyc1dyYXBwZXIuZm9yRWFjaCgoc2V0dGluZ1NsaWRlcldyYXBwZXIpID0+IHtcclxuICAgIGxldCBzZXR0aW5nU2xpZGVyID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuaXRlbS1zZXR0aW5nX19zbGlkZXJcIlxyXG4gICAgKTtcclxuICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNldHRpbmdTbGlkZXIsIHtcclxuICAgICAgc3RhcnQ6IFsyMF0sXHJcbiAgICAgIHN0ZXA6IDUsXHJcbiAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgbWluOiBbMF0sXHJcbiAgICAgICAgbWF4OiBbMTAwXSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgbGV0IHNldHRpbmdTbGlkZXJWYWx1ZSA9IHNldHRpbmdTbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLml0ZW0tc2V0dGluZ19fdmFsdWUgc3BhblwiXHJcbiAgICApO1xyXG4gICAgc2V0dGluZ1NsaWRlci5ub1VpU2xpZGVyLm9uKFwidXBkYXRlXCIsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdmFsdWVzW2hhbmRsZV0pO1xyXG4gICAgICBzZXR0aW5nU2xpZGVyVmFsdWUuaW5uZXJIVE1MID0gTnVtYmVyKHZhbHVlc1toYW5kbGVdKS50b0ZpeGVkKDApICsgXCIlXCI7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8g0KHQsdGA0L7RgSDQt9C90LDRh9C10L3QuNC5XHJcbiAgbGV0IGJ1dHRvblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi1yZXNldFwiKTtcclxuICBpZiAoYnV0dG9uUmVzZXQpIHtcclxuICAgIGJ1dHRvblJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldHRpbmdTbGlkZXJzV3JhcHBlci5mb3JFYWNoKChzZXR0aW5nU2xpZGVyV3JhcHBlcikgPT4ge1xyXG4gICAgICAgIGxldCBzZXR0aW5nU2xpZGVyID0gc2V0dGluZ1NsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIFwiLml0ZW0tc2V0dGluZ19fc2xpZGVyXCJcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgcmFuZ2VJbml0KCk7XHJcbn0pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4YTdmNDc5ZDEwMTAyOWI3YmM3MlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==