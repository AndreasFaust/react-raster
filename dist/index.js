'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var Context = React__default['default'].createContext({});
function useRaster() {
    return React__default['default'].useContext(Context);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';

let nanoid = (size = 21) => {
  let id = '';
  // A compact alternative for `for (var i = 0; i < step; i++)`.
  let i = size;
  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    id += urlAlphabet[(Math.random() * 64) | 0];
  }
  return id
};

function useCombinedRefs(ref) {
    var targetRef = React__default['default'].useRef();
    React__default['default'].useEffect(function () {
        if (!ref)
            return;
        if (typeof ref === "function") {
            ref(targetRef.current);
        }
        else {
            ref.current = targetRef.current;
        }
    }, [ref]);
    return targetRef;
}

function debounce(func, delay) {
    var _this = this;
    if (delay === void 0) { delay = 300; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(_this, args);
        }, delay);
    };
}

function useResizeObserver(ref, onResize) {
    React__default['default'].useEffect(function () {
        if (!ref.current || !onResize)
            return;
        var dOnResize = debounce(function () {
            if (onResize && ref.current)
                onResize(ref.current);
        }, 150);
        var observer = new ResizeObserver(dOnResize);
        observer.observe(ref.current);
        return function () {
            if (ref.current)
                observer.unobserve(ref.current);
        };
    }, [ref.current]);
}

function getColsTotal(_a) {
    var cols = _a.cols, colspan = _a.colspan, marginLeft = _a.marginLeft, marginRight = _a.marginRight;
    return cols.map(function (col, index) {
        return ((typeof col === "number" ? col : colspan[index]) +
            (marginLeft[index] || 0) +
            (marginRight[index] || 0));
    });
}

function getColsEffective(_a) {
    var cols = _a.cols, colspan = _a.colspan, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight;
    return cols.map(function (col, index) {
        return ((typeof col === "number" ? col : colspan[index]) -
            (paddingLeft[index] || 0) -
            (paddingRight[index] || 0));
    });
}

function addValues(_a) {
    var propArray = _a.propArray, breakpointsLength = _a.breakpointsLength;
    var lastKnownValue = propArray[propArray.length - 1];
    while (propArray.length < breakpointsLength) {
        propArray.push(lastKnownValue);
    }
    return propArray;
}
function makeArray(prop) {
    if (Array.isArray(prop))
        return __spreadArray([], prop);
    else
        return [prop];
}
function normalizeProps(breakpoints, prop, defaultValue) {
    var breakpointsLength = breakpoints.length;
    var propArray = makeArray(prop);
    if (propArray.length < breakpointsLength)
        propArray = addValues({ propArray: propArray, breakpointsLength: breakpointsLength });
    if (propArray.length > breakpointsLength)
        propArray = propArray.splice(breakpointsLength);
    return propArray.map(function (prop) {
        if (typeof prop === "undefined") {
            return defaultValue;
        }
        else {
            return prop;
        }
    });
}

function convertIfNumber(string) {
    var parsed = +string;
    if (Object.is(NaN, parsed))
        return string;
    return parsed;
}
function analyzeString(short) {
    var shortArray = short.split(" ").map(function (string) { return convertIfNumber(string); });
    switch (shortArray.length) {
        case 1:
            return {
                top: shortArray[0],
                right: shortArray[0],
                bottom: shortArray[0],
                left: shortArray[0],
            };
        case 2:
            return {
                top: shortArray[0],
                right: shortArray[1],
                bottom: shortArray[0],
                left: shortArray[1],
            };
        case 3:
            return {
                top: shortArray[0],
                right: shortArray[1],
                bottom: shortArray[2],
                left: shortArray[1],
            };
        default:
            return {
                top: shortArray[0],
                right: shortArray[1],
                bottom: shortArray[2],
                left: shortArray[3],
            };
    }
}

function normalizeShortProp(short) {
    if (!short)
        return { left: null, right: null, top: null, bottom: null };
    if (typeof short === "number") {
        return {
            left: short,
            right: short,
            top: short,
            bottom: short,
        };
    }
    if (typeof short === "string") {
        return analyzeString(short);
    }
    if (Array.isArray(short)) {
        return short.reduce(function (acc, current, index) {
            if (typeof current === "number") {
                return {
                    left: __spreadArray(__spreadArray([], acc.left), [current]),
                    right: __spreadArray(__spreadArray([], acc.right), [current]),
                    top: __spreadArray(__spreadArray([], acc.top), [current]),
                    bottom: __spreadArray(__spreadArray([], acc.bottom), [current]),
                };
            }
            if (typeof current === "string") {
                var currentObj = analyzeString(current);
                return {
                    left: __spreadArray(__spreadArray([], acc.left), [currentObj.left]),
                    right: __spreadArray(__spreadArray([], acc.right), [currentObj.right]),
                    top: __spreadArray(__spreadArray([], acc.top), [currentObj.top]),
                    bottom: __spreadArray(__spreadArray([], acc.bottom), [currentObj.bottom]),
                };
            }
            return {
                left: __spreadArray(__spreadArray([], acc.left), [acc.left[index - 1]]),
                right: __spreadArray(__spreadArray([], acc.right), [acc.right[index - 1]]),
                top: __spreadArray(__spreadArray([], acc.top), [acc.top[index - 1]]),
                bottom: __spreadArray(__spreadArray([], acc.bottom), [acc.bottom[index - 1]]),
            };
        }, { left: [], right: [], top: [], bottom: [] });
    }
}

function getSpacingValue(_a) {
    var gap = _a.gap, colspan = _a.colspan, breakpoints = _a.breakpoints, prop = _a.prop, counterProp = _a.counterProp;
    var propNormalized = normalizeProps(breakpoints, prop);
    var counterPropNormalized = normalizeProps(breakpoints, counterProp);
    return propNormalized.map(function (propAtBreakpoint, index) {
        switch (typeof propAtBreakpoint) {
            case "number":
                if (counterPropNormalized[index]) {
                    return "calc(((100% + " + gap[index] + " - " + (typeof counterPropNormalized[index] === "string"
                        ? counterPropNormalized[index]
                        : "0px") + ") / " + colspan[index] + ") * " + propAtBreakpoint + ")";
                }
                return "calc(((100% + " + gap[index] + ") / " + colspan[index] + ") * " + propAtBreakpoint + ")";
            default:
                return propAtBreakpoint;
        }
    });
}
function getSpacing(_a) {
    var display = _a.display, gridRowGap = _a.gridRowGap, gridColumnGap = _a.gridColumnGap, colspan = _a.colspan, breakpoints = _a.breakpoints, props = _a.props, prop = _a.prop;
    var short = normalizeShortProp(props[prop]);
    return {
        left: getSpacingValue({
            display: display,
            gap: gridColumnGap,
            colspan: colspan,
            breakpoints: breakpoints,
            prop: props[prop + "Left"] || short.left,
            counterProp: props[prop + "Right"] || short.right,
        }),
        right: getSpacingValue({
            display: display,
            gap: gridColumnGap,
            colspan: colspan,
            breakpoints: breakpoints,
            prop: props[prop + "Right"] || short.right,
            counterProp: props[prop + "Left"] || short.left,
        }),
        top: getSpacingValue({
            display: display,
            gap: gridRowGap,
            colspan: colspan,
            breakpoints: breakpoints,
            prop: props[prop + "Top"] || short.top,
        }),
        bottom: getSpacingValue({
            display: display,
            gap: gridRowGap,
            colspan: colspan,
            breakpoints: breakpoints,
            prop: props[prop + "Bottom"] || short.bottom,
        }),
    };
}

function getColspan(colspan, paddingLeft, paddingRight) {
    return colspan.map(function (colspanAtBreakpoint, index) {
        return (colspanAtBreakpoint -
            (paddingLeft[index] || 0) -
            (paddingRight[index] || 0));
    });
}

function getMediaQueries(breakpoints) {
    var breakpointsLength = breakpoints.length;
    return breakpoints.map(function (bp, index) {
        var max = index !== breakpointsLength - 1
            ? " and (max-width: " + (breakpoints[index + 1] - 1) + "px)"
            : "";
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return styled.css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n        @media (min-width: ", "px) ", " {\n          ", ";\n        }\n      "], ["\n        @media (min-width: ", "px) ", " {\n          ", ";\n        }\n      "])), bp, max, styled.css.apply(void 0, args));
        };
    });
}
var templateObject_1$2;

function useCurrentBreakpoint(_a) {
    var activateEventListener = _a.activateEventListener, contextBreakpoint = _a.contextBreakpoint, breakpoints = _a.breakpoints;
    var _b = React__default['default'].useState(contextBreakpoint || {
        index: 1,
        value: 0,
    }), currentBp = _b[0], setCurrentBp = _b[1];
    React__default['default'].useEffect(function () {
        if (!activateEventListener)
            return;
        function onResize() {
            var w = window.innerWidth;
            var bp = { index: 1, value: 0 };
            breakpoints.forEach(function (breakpoint, index) {
                if (breakpoint <= w) {
                    bp = { index: index + 1, value: breakpoint };
                }
            });
            setCurrentBp(bp);
        }
        onResize();
        var dOnResize = debounce(onResize, 100);
        window.addEventListener("resize", dOnResize);
        return function () { return window.removeEventListener("resize", dOnResize); };
    }, []);
    return currentBp;
}

function normalizeSpacing(breakpoints, spacing) {
    return normalizeProps(breakpoints, spacing).map(function (spacingAtBreakpoint) {
        if (typeof spacingAtBreakpoint !== "number")
            return null;
        return spacingAtBreakpoint;
    });
}

function normalizeDisplay(breakpoints, props, hasChildBoxes) {
    var displayNormalized = normalizeProps(breakpoints, props.display);
    return displayNormalized.map(function (display) {
        if (display)
            return display;
        return hasChildBoxes ? "grid" : "block";
    });
}

function getPosition(position) {
    return position.map(function (propAtBreakpoint) {
        return !propAtBreakpoint ? "relative" : propAtBreakpoint;
    });
}

function useNormalize(props, context, hasChildBoxes) {
    var breakpoints = props.breakpoints ||
        context.breakpoints || [0, 432, 768, 1024, 1200, 1400];
    var mergedProps = __assign(__assign({}, context), props);
    var breakpoint = useCurrentBreakpoint({
        activateEventListener: !!props.breakpoints || !!props.colspan,
        contextBreakpoint: context.breakpoint,
        breakpoints: breakpoints,
    });
    var display = normalizeDisplay(breakpoints, mergedProps, hasChildBoxes);
    var gridRowGap = normalizeProps(breakpoints, mergedProps.gridRowGap, "0px");
    var gridColumnGap = normalizeProps(breakpoints, mergedProps.gridColumnGap, "0px");
    var marginLeftInCols = normalizeSpacing(breakpoints, mergedProps.marginLeft);
    var marginRightInCols = normalizeSpacing(breakpoints, mergedProps.marginRight);
    var paddingLeftInCols = normalizeSpacing(breakpoints, mergedProps.paddingLeft);
    var paddingRightInCols = normalizeSpacing(breakpoints, mergedProps.paddingRight);
    var colspanTotal = normalizeProps(breakpoints, props.colspan || context.colspan || 1);
    var colsEffective = getColsEffective({
        cols: normalizeProps(breakpoints, mergedProps.cols),
        colspan: colspanTotal,
        paddingLeft: paddingLeftInCols,
        paddingRight: paddingRightInCols,
    });
    var colspan = props.colspan
        ? getColspan(colspanTotal, paddingLeftInCols, paddingRightInCols)
        : colsEffective;
    var colsTotal = getColsTotal({
        cols: normalizeProps(breakpoints, mergedProps.cols),
        colspan: colspanTotal,
        marginLeft: marginLeftInCols,
        marginRight: marginRightInCols,
    });
    var margin = getSpacing({
        display: display,
        breakpoints: breakpoints,
        gridRowGap: gridRowGap,
        gridColumnGap: gridColumnGap,
        colspan: colsTotal,
        prop: "margin",
        props: mergedProps,
    });
    var padding = getSpacing({
        display: display,
        breakpoints: breakpoints,
        gridRowGap: gridRowGap,
        gridColumnGap: gridColumnGap,
        colspan: colsTotal,
        prop: "padding",
        props: mergedProps,
    });
    return {
        breakpoints: breakpoints,
        breakpoint: breakpoint,
        colsTotal: colsTotal,
        colspanTotal: colspanTotal,
        colspan: colspan,
        margin: margin,
        padding: padding,
        paddingLeftInCols: paddingLeftInCols,
        paddingRightInCols: paddingRightInCols,
        display: display,
        gridRowGap: gridRowGap,
        gridColumnGap: gridColumnGap,
        controlColor: mergedProps.controlColor,
        media: getMediaQueries(breakpoints),
        styles: normalizeProps(breakpoints, mergedProps.styles),
        width: normalizeProps(breakpoints, mergedProps.width),
        minWidth: normalizeProps(breakpoints, mergedProps.minWidth),
        maxWidth: normalizeProps(breakpoints, mergedProps.maxWidth),
        height: normalizeProps(breakpoints, mergedProps.height),
        minHeight: normalizeProps(breakpoints, mergedProps.minHeight),
        maxHeight: normalizeProps(breakpoints, mergedProps.maxHeight),
        position: getPosition(normalizeProps(breakpoints, mergedProps.position)),
        zIndex: normalizeProps(breakpoints, mergedProps.zIndex),
        left: normalizeProps(breakpoints, mergedProps.left),
        right: normalizeProps(breakpoints, mergedProps.right),
        top: normalizeProps(breakpoints, mergedProps.top),
        bottom: normalizeProps(breakpoints, mergedProps.bottom),
        pointerEvents: normalizeProps(breakpoints, mergedProps.pointerEvents),
        gridTemplateRows: normalizeProps(breakpoints, mergedProps.gridTemplateRows),
        gridColumn: normalizeProps(breakpoints, mergedProps.gridColumn),
        gridAutoRows: normalizeProps(breakpoints, mergedProps.gridAutoRows),
        gridTemplateColumns: normalizeProps(breakpoints, mergedProps.gridTemplateColumns),
        autoFlow: normalizeProps(breakpoints, mergedProps.autoFlow),
        order: normalizeProps(breakpoints, mergedProps.order),
        alignItems: normalizeProps(breakpoints, mergedProps.alignItems),
        alignContent: normalizeProps(breakpoints, mergedProps.alignContent),
        alignSelf: normalizeProps(breakpoints, mergedProps.alignSelf),
        justifyContent: normalizeProps(breakpoints, mergedProps.justifyContent),
        justifyItems: normalizeProps(breakpoints, mergedProps.justifyItems),
        justifySelf: normalizeProps(breakpoints, mergedProps.justifySelf),
        flexDirection: normalizeProps(breakpoints, mergedProps.flexDirection),
        flexWrap: normalizeProps(breakpoints, mergedProps.flexWrap),
        flexShrink: normalizeProps(breakpoints, mergedProps.flexShrink),
        flexGrow: normalizeProps(breakpoints, mergedProps.flexGrow),
        border: normalizeProps(breakpoints, mergedProps.border),
        borderLeft: normalizeProps(breakpoints, mergedProps.borderLeft),
        borderRight: normalizeProps(breakpoints, mergedProps.borderRight),
        borderTop: normalizeProps(breakpoints, mergedProps.borderTop),
        borderBottom: normalizeProps(breakpoints, mergedProps.borderBottom),
        background: normalizeProps(breakpoints, mergedProps.background),
        backgroundColor: normalizeProps(breakpoints, mergedProps.backgroundColor),
        backgroundImage: normalizeProps(breakpoints, mergedProps.backgroundImage),
        backgroundPosition: normalizeProps(breakpoints, mergedProps.backgroundPosition),
        backgroundAttachment: normalizeProps(breakpoints, mergedProps.backgroundAttachment),
        backgroundSize: normalizeProps(breakpoints, mergedProps.backgroundSize),
        filter: normalizeProps(breakpoints, mergedProps.filter),
        backdropFilter: normalizeProps(breakpoints, mergedProps.backdropFilter),
        mixBlendMode: normalizeProps(breakpoints, mergedProps.mixBlendMode),
        backgroundBlendMode: normalizeProps(breakpoints, mergedProps.backgroundBlendMode),
        textShadow: normalizeProps(breakpoints, mergedProps.textShadow),
        boxShadow: normalizeProps(breakpoints, mergedProps.boxShadow),
        textStroke: normalizeProps(breakpoints, mergedProps.textStroke),
        fontFamily: normalizeProps(breakpoints, mergedProps.fontFamily),
        fontSize: normalizeProps(breakpoints, mergedProps.fontSize),
        color: normalizeProps(breakpoints, mergedProps.color),
        lineHeight: normalizeProps(breakpoints, mergedProps.lineHeight),
        letterSpacing: normalizeProps(breakpoints, mergedProps.letterSpacing),
        textDecoration: normalizeProps(breakpoints, mergedProps.textDecoration),
        hyphens: normalizeProps(breakpoints, mergedProps.hyphens),
        transform: normalizeProps(breakpoints, mergedProps.transform),
        transition: normalizeProps(breakpoints, mergedProps.transition),
        animation: normalizeProps(breakpoints, mergedProps.animation),
        opacity: normalizeProps(breakpoints, mergedProps.opacity),
        overflow: normalizeProps(breakpoints, mergedProps.overflow),
        overflowX: normalizeProps(breakpoints, mergedProps.overflowX),
        overflowY: normalizeProps(breakpoints, mergedProps.overflowY),
    };
}

var useControl = function (control, controlIsVisible) {
    var _a = React__default['default'].useState(false), isVisible = _a[0], setIsVisible = _a[1];
    React__default['default'].useEffect(function () {
        function onKeyup(event) {
            if (event.keyCode !== 27)
                return;
            setIsVisible(function (prevState) { return !prevState; });
        }
        if (!control) {
            setIsVisible(controlIsVisible);
            return;
        }
        document.addEventListener("keyup", onKeyup);
        return function () { return document.removeEventListener("keyup", onKeyup); };
    }, []);
    return isVisible;
};

function useUndefinedProps(props) {
    props.display; props.breakpoints; props.width; props.minWidth; props.maxWidth; props.height; props.minHeight; props.maxHeight; props.colspan; props.cols; props.margin; props.marginLeft; props.marginRight; props.marginTop; props.marginBottom; props.padding; props.paddingLeft; props.paddingRight; props.paddingTop; props.paddingBottom; props.gridRowGap; props.gridColumnGap; props.gridTemplateRows; props.gridAutoRows; props.gridTemplateColumns; props.autoFlow; props.component; props.innerHTML; props.pointerEvents; props.onResize; props.onIntersect; props.root; props.rootMargin; props.threshold; props.styles; props.as; props.control; props.controlColor; props.order; props.position; props.zIndex; props.top; props.bottom; props.left; props.right; props.alignItems; props.alignContent; props.alignSelf; props.justifyContent; props.justifyItems; props.justifySelf; props.flexDirection; props.flexWrap; props.flexShrink; props.flexGrow; props.background; props.backgroundColor; props.backgroundImage; props.backgroundPosition; props.backgroundSize; props.backgroundAttachment; props.filter; props.backdropFilter; props.mixBlendMode; props.backgroundBlendMode; props.textShadow; props.boxShadow; props.textStroke; props.border; props.borderLeft; props.borderRight; props.borderTop; props.borderBottom; props.fontFamily; props.fontSize; props.color; props.lineHeight; props.letterSpacing; props.textDecoration; props.hyphens; props.overflow; props.overflowX; props.overflowY; props.transition; props.animation; props.opacity; props.transform; props.className; props.children; props.isControl; props.ref; var rest = __rest(props, ["display", "breakpoints", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "colspan", "cols", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom", "padding", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "gridRowGap", "gridColumnGap", "gridTemplateRows", "gridAutoRows", "gridTemplateColumns", "autoFlow", "component", "innerHTML", "pointerEvents", "onResize", "onIntersect", "root", "rootMargin", "threshold", "styles", "as", "control", "controlColor", "order", "position", "zIndex", "top", "bottom", "left", "right", "alignItems", "alignContent", "alignSelf", "justifyContent", "justifyItems", "justifySelf", "flexDirection", "flexWrap", "flexShrink", "flexGrow", "background", "backgroundColor", "backgroundImage", "backgroundPosition", "backgroundSize", "backgroundAttachment", "filter", "backdropFilter", "mixBlendMode", "backgroundBlendMode", "textShadow", "boxShadow", "textStroke", "border", "borderLeft", "borderRight", "borderTop", "borderBottom", "fontFamily", "fontSize", "color", "lineHeight", "letterSpacing", "textDecoration", "hyphens", "overflow", "overflowX", "overflowY", "transition", "animation", "opacity", "transform", "className", "children", "isControl", "ref"]);
    return rest;
}

function onIntersect(_a) {
    var ref = _a.ref, _b = _a.root, root = _b === void 0 ? null : _b, rootMargin = _a.rootMargin, _c = _a.threshold, threshold = _c === void 0 ? 0 : _c, onIntersect = _a.onIntersect;
    var observer = React.useRef(null);
    React.useEffect(function () {
        if (typeof onIntersect !== "function")
            return;
        observer.current = new IntersectionObserver(function (_a, observer) {
            var entry = _a[0];
            return onIntersect(entry, observer);
        }, {
            root: root,
            rootMargin: rootMargin,
            threshold: threshold,
        });
        if (ref.current && observer.current)
            observer.current.observe(ref.current);
        return function () { return observer.current && observer.current.disconnect(); };
    }, []);
}

var Container = React__default['default'].forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, component = _a.component, _b = _a.attrs, attrs = _b === void 0 ? {} : _b, _c = _a.tag, tag = _c === void 0 ? "div" : _c;
    if (component) {
        return React__default['default'].cloneElement(component, __assign({ children: children, className: className }, attrs));
    }
    return React__default['default'].createElement(tag, __assign(__assign({}, attrs), { className: className, ref: ref }), tag !== "img" && !attrs.dangerouslySetInnerHTML ? children : null);
});

var StyledBoxStyles = styled__default['default'](Container)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n\n  ", "\n\n\n  ", "\n"], ["\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n\n  ", "\n\n\n  ", "\n"])), function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n        position: ", ";\n        z-index: ", ";\n        display: ", ";\n        pointer-events: ", ";\n\n        width: ", ";\n        min-width: ", ";\n        max-width: ", ";\n        height: ", ";\n        min-height: ", ";\n        max-height: ", ";\n\n        padding-left: ", ";\n        padding-right: ", ";\n        padding-top: ", ";\n        padding-bottom: ", ";\n\n        margin-left: ", ";\n        margin-right: ", ";\n        margin-top: ", ";\n        margin-bottom: ", ";\n        \n        order: ", ";\n\n        top: ", ";\n        bottom: ", ";\n        left: ", ";\n        right: ", ";\n\n        align-items: ", ";\n        align-content: ", ";\n        align-self: ", ";\n        justify-content: ", ";\n        justify-items: ", ";\n        justify-self: ", ";\n\n        flex-direction: ", ";\n        flex-wrap: ", ";\n        flex-shrink: ", ";\n        flex-grow: ", ";\n\n        background: ", ";\n        background-color: ", ";\n        background-image: ", ";\n        background-position: ", ";\n        background-size: ", ";\n        background-attachment: ", ";\n\n        filter: ", ";\n        backdrop-filter: ", ";\n        mix-blend-mode: ", ";\n        background-blend-mode: ", ";\n        text-shadow: ", ";\n        box-shadow: ", ";\n        -webkit-text-stroke: ", ";\n        text-stroke: ", ";\n\n        border: ", ";\n        border-left: ", ";\n        border-right: ", ";\n        border-top: ", ";\n        border-bottom: ", ";\n\n        font-family: ", ";\n        font-size: ", ";\n        color: ", ";\n        line-height: ", ";\n        letter-spacing: ", ";\n        text-decoration: ", ";\n        hyphens: ", ";\n\n        transition: ", ";\n        transform: ", ";\n        animation: ", ";\n        opacity: ", ";\n\n        overflow: ", ";\n        overflow-x: ", ";\n        overflow-y: ", ";\n\n        ", "\n      "], ["\n        position: ", ";\n        z-index: ", ";\n        display: ", ";\n        pointer-events: ", ";\n\n        width: ", ";\n        min-width: ", ";\n        max-width: ", ";\n        height: ", ";\n        min-height: ", ";\n        max-height: ", ";\n\n        padding-left: ", ";\n        padding-right: ", ";\n        padding-top: ", ";\n        padding-bottom: ", ";\n\n        margin-left: ", ";\n        margin-right: ", ";\n        margin-top: ", ";\n        margin-bottom: ", ";\n        \n        order: ", ";\n\n        top: ", ";\n        bottom: ", ";\n        left: ", ";\n        right: ", ";\n\n        align-items: ", ";\n        align-content: ", ";\n        align-self: ", ";\n        justify-content: ", ";\n        justify-items: ", ";\n        justify-self: ", ";\n\n        flex-direction: ", ";\n        flex-wrap: ", ";\n        flex-shrink: ", ";\n        flex-grow: ", ";\n\n        background: ", ";\n        background-color: ", ";\n        background-image: ", ";\n        background-position: ", ";\n        background-size: ", ";\n        background-attachment: ", ";\n\n        filter: ", ";\n        backdrop-filter: ", ";\n        mix-blend-mode: ", ";\n        background-blend-mode: ", ";\n        text-shadow: ", ";\n        box-shadow: ", ";\n        -webkit-text-stroke: ", ";\n        text-stroke: ", ";\n\n        border: ", ";\n        border-left: ", ";\n        border-right: ", ";\n        border-top: ", ";\n        border-bottom: ", ";\n\n        font-family: ", ";\n        font-size: ", ";\n        color: ", ";\n        line-height: ", ";\n        letter-spacing: ", ";\n        text-decoration: ", ";\n        hyphens: ", ";\n\n        transition: ", ";\n        transform: ", ";\n        animation: ", ";\n        opacity: ", ";\n\n        overflow: ", ";\n        overflow-x: ", ";\n        overflow-y: ", ";\n\n        ", "\n      "])), props.position[index], props.zIndex[index], props.display[index], props.pointerEvents[index], props.width[index], props.minWidth[index], props.maxWidth[index], props.height[index], props.minHeight[index], props.maxHeight[index], props.padding.left[index], props.padding.right[index], props.padding.top[index], props.padding.bottom[index], props.margin.left[index], props.margin.right[index], props.margin.top[index], props.margin.bottom[index], props.order[index], props.top[index], props.bottom[index], props.left[index], props.right[index], props.alignItems[index], props.alignContent[index], props.alignSelf[index], props.justifyContent[index], props.justifyItems[index], props.justifySelf[index], props.flexDirection[index], props.flexWrap[index], props.flexShrink[index], props.flexGrow[index], props.background[index], props.backgroundColor[index], props.backgroundImage[index], props.backgroundPosition[index], props.backgroundSize[index], props.backgroundAttachment[index], props.filter[index], props.backdropFilter[index], props.mixBlendMode[index], props.backgroundBlendMode[index], props.textShadow[index], props.boxShadow[index], props.textStroke[index], props.textStroke[index], props.border[index], props.borderLeft[index], props.borderRight[index], props.borderTop[index], props.borderBottom[index], props.fontFamily[index], props.fontSize[index], props.color[index], props.lineHeight[index], props.letterSpacing[index], props.textDecoration[index], props.hyphens[index], props.transition[index], props.transform[index], props.animation[index], props.opacity[index], props.overflow[index], props.overflowX[index], props.overflowY[index], props.styles[index] ? props.styles[index] : "");
    });
}, function (props) {
    return props.media.map(function (media, index) {
        return (props.display[index] === "grid" && media(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        grid-template-columns: repeat(", ", 1fr);\n\n        grid-auto-rows: ", ";\n        grid-template-rows: ", ";\n        grid-template-columns: ", ";\n        grid-auto-flow: ", ";\n\n        grid-column-gap: ", ";\n        grid-row-gap: ", ";\n\n        ", "\n      "], ["\n        grid-template-columns: repeat(", ", 1fr);\n\n        grid-auto-rows: ", ";\n        grid-template-rows: ", ";\n        grid-template-columns: ", ";\n        grid-auto-flow: ", ";\n\n        grid-column-gap: ", ";\n        grid-row-gap: ", ";\n\n        ", "\n      "])), function (props) { return props.colspan[index]; }, function (props) { return props.gridAutoRows[index]; }, function (props) { return props.gridTemplateRows[index]; }, function (props) { return props.gridTemplateColumns[index]; }, function (props) { return props.autoFlow[index]; }, props.gridColumnGap[index], props.gridRowGap[index], props.isControl && props.gridColumnGap[index] === "0px"
            ? "grid-column-gap: 1px;"
            : ""));
    });
}, function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        grid-column: auto / span ", ";\n        grid-column: ", ";      "], ["\n        grid-column: auto / span ", ";\n        grid-column: ", ";      "])), props.colsTotal[index], function (props) { return props.gridColumn[index]; });
    });
}, function (props) {
    return props.as === "img" &&
        props.controlIsVisible &&
        "\n    box-shadow: 0 0 999em " + props.controlColor + " inset;\n  ";
});
var StyledBox = React__default['default'].forwardRef(function (props, ref) {
    return React__default['default'].createElement(StyledBoxStyles, __assign({}, props, { ref: ref }));
});
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4;

function getSideBearing(side, props) {
    var sideUppercase = side.replace(/^\w/, function (c) { return c.toUpperCase(); });
    return props["padding" + sideUppercase + "InCols"].map(function (padding, index) {
        if (typeof padding === "number") {
            return 0;
        }
        return props.padding[side][index] || 0;
    });
}
function getTopBottomBearing(side, props) {
    return props.padding[side].map(function (padding, index) {
        return padding || 0;
    });
}
var ControlGrid = function (props) {
    var breakpoint = props.breakpoint, colspanTotal = props.colspanTotal;
    return (React__default['default'].createElement(Box, { position: "absolute", className: "GridControl", zIndex: 1000, colspan: colspanTotal, gridColumnGap: props.gridColumnGap, gridAutoRows: "100%", top: 0, bottom: 0, left: 0, right: 0, marginLeft: getSideBearing("left", props), marginRight: getSideBearing("right", props), marginTop: getTopBottomBearing("top", props), marginBottom: getTopBottomBearing("bottom", props), isControl: true }, __spreadArray([], Array(colspanTotal[breakpoint.index - 1])).map(function (_, index) { return (React__default['default'].createElement(Box, { key: index, display: "flex", alignSelf: "stretch", cols: 1, backgroundColor: props.controlColor || "rgba(0,0,0,0.12)" })); })));
};
var ControlBox = styled__default['default']("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  pointer-events: none;\n"], ["\n  position: absolute;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  pointer-events: none;\n"])), function (props) { return props.controlColor || "rgba(0,0,0,0.12)"; });
var Control = function (props) {
    return props.isNewGrid ? (React__default['default'].createElement(ControlGrid, __assign({}, props))) : (React__default['default'].createElement(ControlBox, { controlColor: props.controlColor }));
};
var templateObject_1;

var Box = React__default['default'].forwardRef(function (props, ref) {
    var context = React.useContext(Context);
    var id = React__default['default'].useRef(nanoid());
    var _a = React__default['default'].useState(false), hasChildBoxes = _a[0], registerChildBox = _a[1];
    React__default['default'].useEffect(function () {
        if (typeof context.registerChildBox === "function") {
            context.registerChildBox();
        }
    }, []);
    var propsNormalized = useNormalize(props, context, hasChildBoxes);
    var controlIsVisible = useControl(props.control, context.controlIsVisible);
    var boxRef = useCombinedRefs(ref);
    var undefinedProps = useUndefinedProps(props);
    var defaultClass = "Box bp-" + propsNormalized.breakpoint.value + " bp-" + propsNormalized.breakpoint.index;
    useResizeObserver(boxRef, props.onResize);
    onIntersect({
        ref: boxRef,
        root: props.root,
        rootMargin: props.rootMargin,
        threshold: props.threshold,
        onIntersect: props.onIntersect,
    });
    return (React__default['default'].createElement(StyledBox, __assign({}, propsNormalized, { id: id.current, tag: props.as, component: props.component, className: props.className
            ? [defaultClass, props.className].join(" ")
            : defaultClass, controlIsVisible: controlIsVisible, ref: boxRef, styles: propsNormalized.styles, isControl: props.isControl, attrs: __assign(__assign({}, undefinedProps), (props.innerHTML && {
            dangerouslySetInnerHTML: { __html: props.innerHTML },
        })) }),
        React__default['default'].createElement(React__default['default'].Fragment, null,
            controlIsVisible && (React__default['default'].createElement(Control, __assign({ isNewGrid: !!props.colspan }, propsNormalized))),
            React__default['default'].createElement(Context.Provider, { value: {
                    breakpoints: propsNormalized.breakpoints,
                    breakpoint: propsNormalized.breakpoint,
                    gridRowGap: propsNormalized.gridRowGap,
                    gridColumnGap: propsNormalized.gridColumnGap,
                    colspan: propsNormalized.colspan,
                    media: propsNormalized.media,
                    controlIsVisible: controlIsVisible,
                    controlColor: propsNormalized.controlColor,
                    registerChildBox: function () { return registerChildBox(true); },
                } }, props.children))));
});
Box.displayName = "Box";

exports.default = Box;
exports.useRaster = useRaster;
//# sourceMappingURL=index.js.map
