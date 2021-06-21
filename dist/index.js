'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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

function debounce(callback, delay) {
    var timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
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
        return ((col ? col : colspan[index]) +
            (marginLeft[index] || 0) +
            (marginRight[index] || 0));
    });
}

function getColsEffective(_a) {
    var cols = _a.cols, colspan = _a.colspan, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight;
    if (!cols) {
        return colspan.map(function (parentCols, index) {
            return (parentCols - (paddingLeft[index] || 0) - (paddingRight[index] || 0));
        });
    }
    return cols.map(function (col, index) {
        return col - (paddingLeft[index] || 0) - (paddingRight[index] || 0);
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
        return prop;
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

function getSpacingValue(_a) {
    var display = _a.display, gap = _a.gap, colspan = _a.colspan, breakpoints = _a.breakpoints, prop = _a.prop, counterProp = _a.counterProp;
    var propNormalized = normalizeProps(breakpoints, prop);
    var counterPropNormalized = normalizeProps(breakpoints, counterProp);
    return propNormalized.map(function (propAtBreakpoint, index) {
        switch (typeof propAtBreakpoint) {
            case "number":
                if (display[index] !== "grid")
                    return null;
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
    var display = _a.display, rowGap = _a.rowGap, columnGap = _a.columnGap, colspan = _a.colspan, breakpoints = _a.breakpoints, props = _a.props, prop = _a.prop;
    return {
        left: getSpacingValue({
            display: display,
            gap: columnGap,
            colspan: colspan,
            breakpoints: breakpoints,
            prop: props[prop + "Left"],
            counterProp: props[prop + "Right"],
        }),
        right: getSpacingValue({
            display: display,
            gap: columnGap,
            colspan: colspan,
            breakpoints: breakpoints,
            prop: props[prop + "Right"],
            counterProp: props[prop + "Left"],
        }),
        top: getSpacingValue({
            display: display,
            gap: rowGap,
            colspan: colspan,
            breakpoints: breakpoints,
            prop: props[prop + "Top"],
        }),
        bottom: getSpacingValue({
            display: display,
            gap: rowGap,
            colspan: colspan,
            breakpoints: breakpoints,
            prop: props[prop + "Bottom"],
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
        window.addEventListener("resize", onResize);
        return function () { return window.removeEventListener("resize", onResize); };
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

function normalizeDisplay(breakpoints, props) {
    var displayNormalized = normalizeProps(breakpoints, props.display);
    return displayNormalized.map(function (display, index) {
        if (display)
            return display;
        return "grid";
    });
}

function getPosition(position) {
    return position.map(function (propAtBreakpoint) {
        return !propAtBreakpoint ? "relative" : propAtBreakpoint;
    });
}

function useNormalize(props, context) {
    var breakpoints = props.breakpoints ||
        context.breakpoints || [0, 432, 768, 1024, 1200, 1400];
    var mergedProps = __assign(__assign({}, context), props);
    var breakpoint = useCurrentBreakpoint({
        activateEventListener: props.breakpoints,
        contextBreakpoint: context.breakpoint,
        breakpoints: breakpoints,
    });
    var display = normalizeDisplay(breakpoints, mergedProps);
    var rowGap = normalizeProps(breakpoints, mergedProps.rowGap, "0px");
    var columnGap = normalizeProps(breakpoints, mergedProps.columnGap, "0px");
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
    var colspan = getColspan(props.colspan ? colspanTotal : colsEffective, paddingLeftInCols, paddingRightInCols);
    var colsTotal = getColsTotal({
        cols: normalizeProps(breakpoints, mergedProps.cols),
        colspan: colspanTotal,
        marginLeft: marginLeftInCols,
        marginRight: marginRightInCols,
    });
    var margin = getSpacing({
        display: display,
        breakpoints: breakpoints,
        rowGap: rowGap,
        columnGap: columnGap,
        colspan: colsTotal,
        prop: "margin",
        props: mergedProps,
    });
    var padding = getSpacing({
        display: display,
        breakpoints: breakpoints,
        rowGap: rowGap,
        columnGap: columnGap,
        colspan: colsTotal,
        prop: "padding",
        props: mergedProps,
    });
    return {
        breakpoints: breakpoints,
        breakpoint: breakpoint,
        // cols,
        colsTotal: colsTotal,
        colspanTotal: colspanTotal,
        colspan: colspan,
        margin: margin,
        padding: padding,
        paddingLeftInCols: paddingLeftInCols,
        paddingRightInCols: paddingRightInCols,
        display: display,
        rowGap: rowGap,
        columnGap: columnGap,
        controlColor: mergedProps.controlColor,
        media: getMediaQueries(breakpoints),
        css: normalizeProps(breakpoints, mergedProps.css),
        width: normalizeProps(breakpoints, mergedProps.width),
        height: normalizeProps(breakpoints, mergedProps.height),
        position: getPosition(normalizeProps(breakpoints, mergedProps.position)),
        zIndex: normalizeProps(breakpoints, mergedProps.zIndex),
        left: normalizeProps(breakpoints, mergedProps.left),
        right: normalizeProps(breakpoints, mergedProps.right),
        top: normalizeProps(breakpoints, mergedProps.top),
        bottom: normalizeProps(breakpoints, mergedProps.bottom),
        templateRows: normalizeProps(breakpoints, mergedProps.templateRows),
        autoRows: normalizeProps(breakpoints, mergedProps.autoRows),
        templateColumns: normalizeProps(breakpoints, mergedProps.templateColumns),
        autoFlow: normalizeProps(breakpoints, mergedProps.autoFlow),
        order: normalizeProps(breakpoints, mergedProps.order),
        alignItems: normalizeProps(breakpoints, mergedProps.alignItems),
        alignContent: normalizeProps(breakpoints, mergedProps.alignContent),
        alignSelf: normalizeProps(breakpoints, mergedProps.alignSelf),
        justifyContent: normalizeProps(breakpoints, mergedProps.justifyContent),
        justifySelf: normalizeProps(breakpoints, mergedProps.justifySelf),
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
    props.display; props.breakpoints; props.width; props.height; props.colspan; props.cols; props.marginLeft; props.marginRight; props.marginTop; props.marginBottom; props.paddingLeft; props.paddingRight; props.paddingTop; props.paddingBottom; props.rowGap; props.columnGap; props.templateRows; props.autoRows; props.templateColumns; props.autoFlow; props.component; props.innerHTML; props.onResize; props.css; props.tag; props.control; props.controlColor; props.order; props.position; props.zIndex; props.top; props.bottom; props.left; props.right; props.alignItems; props.alignContent; props.alignSelf; props.justifyContent; props.justifySelf; props.background; props.backgroundColor; props.backgroundImage; props.backgroundPosition; props.backgroundSize; props.backgroundAttachment; props.border; props.borderLeft; props.borderRight; props.borderTop; props.borderBottom; props.className; props.children; props.isControl; props.ref; var rest = __rest(props, ["display", "breakpoints", "width", "height", "colspan", "cols", "marginLeft", "marginRight", "marginTop", "marginBottom", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "rowGap", "columnGap", "templateRows", "autoRows", "templateColumns", "autoFlow", "component", "innerHTML", "onResize", "css", "tag", "control", "controlColor", "order", "position", "zIndex", "top", "bottom", "left", "right", "alignItems", "alignContent", "alignSelf", "justifyContent", "justifySelf", "background", "backgroundColor", "backgroundImage", "backgroundPosition", "backgroundSize", "backgroundAttachment", "border", "borderLeft", "borderRight", "borderTop", "borderBottom", "className", "children", "isControl", "ref"]);
    return rest;
}

var Context = React__default['default'].createContext({});
function useRaster() {
    return React__default['default'].useContext(Context);
}

var Container = React__default['default'].forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, component = _a.component, _b = _a.attrs, attrs = _b === void 0 ? {} : _b, _c = _a.tag, tag = _c === void 0 ? "div" : _c;
    if (component) {
        return React__default['default'].cloneElement(component, __assign({ children: children, className: className }, attrs));
    }
    return React__default['default'].createElement(tag, __assign(__assign({}, attrs), { className: className, ref: ref }), tag !== "img" && !attrs.dangerouslySetInnerHTML ? children : null);
});

var StyledBoxStyles = styled__default['default'](Container)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n\n\n  ", "\n"], ["\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n\n\n  ", "\n"])), function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n        position: ", ";\n        z-index: ", ";\n        display: ", ";\n        width: ", ";\n        height: ", ";\n\n        padding-left: ", ";\n        padding-right: ", ";\n        padding-top: ", ";\n        padding-bottom: ", ";\n\n        margin-left: ", ";\n        margin-right: ", ";\n        margin-top: ", ";\n        margin-bottom: ", ";\n        \n        order: ", ";\n\n        top: ", ";\n        bottom: ", ";\n        left: ", ";\n        right: ", ";\n\n        align-items: ", ";\n        align-content: ", ";\n        align-self: ", ";\n        justify-content: ", ";\n        justify-Self: ", ";\n\n        background: ", ";\n        background-color: ", ";\n        background-image: ", ";\n        background-position: ", ";\n        background-Size: ", ";\n        background-attachment: ", ";\n\n        border: ", ";\n        border-left: ", ";\n        border-right: ", ";\n        border-top: ", ";\n        border-bottom: ", ";\n\n        ", "\n      "], ["\n        position: ", ";\n        z-index: ", ";\n        display: ", ";\n        width: ", ";\n        height: ", ";\n\n        padding-left: ", ";\n        padding-right: ", ";\n        padding-top: ", ";\n        padding-bottom: ", ";\n\n        margin-left: ", ";\n        margin-right: ", ";\n        margin-top: ", ";\n        margin-bottom: ", ";\n        \n        order: ", ";\n\n        top: ", ";\n        bottom: ", ";\n        left: ", ";\n        right: ", ";\n\n        align-items: ", ";\n        align-content: ", ";\n        align-self: ", ";\n        justify-content: ", ";\n        justify-Self: ", ";\n\n        background: ", ";\n        background-color: ", ";\n        background-image: ", ";\n        background-position: ", ";\n        background-Size: ", ";\n        background-attachment: ", ";\n\n        border: ", ";\n        border-left: ", ";\n        border-right: ", ";\n        border-top: ", ";\n        border-bottom: ", ";\n\n        ", "\n      "])), props.position[index], props.zIndex[index], props.display[index], props.width[index], props.height[index], props.padding.left[index], props.padding.right[index], props.padding.top[index], props.padding.bottom[index], props.margin.left[index], props.margin.right[index], props.margin.top[index], props.margin.bottom[index], props.order[index], props.top[index], props.bottom[index], props.left[index], props.right[index], props.alignItems[index], props.alignContent[index], props.alignSelf[index], props.justifyContent[index], props.justifySelf[index], props.background[index], props.backgroundColor[index], props.backgroundImage[index], props.backgroundPosition[index], props.backgroundSize[index], props.backgroundAttachment[index], props.border[index], props.borderLeft[index], props.borderRight[index], props.borderTop[index], props.borderBottom[index], props.css[index]);
    });
}, function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        grid-template-columns: repeat(", ", 1fr);\n        grid-column: auto / span ", ";\n\n        grid-auto-rows: ", ";\n        grid-template-rows: ", ";\n        grid-template-columns: ", ";\n        grid-auto-flow: ", ";\n\n        grid-column-gap: ", ";\n        grid-row-gap: ", ";\n\n        ", "\n      "], ["\n        grid-template-columns: repeat(", ", 1fr);\n        grid-column: auto / span ", ";\n\n        grid-auto-rows: ", ";\n        grid-template-rows: ", ";\n        grid-template-columns: ", ";\n        grid-auto-flow: ", ";\n\n        grid-column-gap: ", ";\n        grid-row-gap: ", ";\n\n        ", "\n      "])), function (props) { return props.colspan[index]; }, props.colsTotal[index], function (props) { return props.autoRows[index]; }, function (props) { return props.templateRows[index]; }, function (props) { return props.templateColumns[index]; }, function (props) { return props.autoFlow[index]; }, props.columnGap[index], props.rowGap[index], props.isControl && props.columnGap[index] === "0px"
            ? "grid-column-gap: 1px;"
            : "");
    });
}, function (props) {
    return props.as === "img" &&
        props.controlIsVisible &&
        "\n    box-shadow: 0 0 999em " + props.controlColor + " inset;\n  ";
});
var StyledBox = React__default['default'].forwardRef(function (props, ref) {
    return React__default['default'].createElement(StyledBoxStyles, __assign({}, props, { ref: ref }));
});
var templateObject_1$1, templateObject_2, templateObject_3;

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
    return (React__default['default'].createElement(Box, { position: "absolute", className: "GridControl", zIndex: 1000, colspan: colspanTotal, columnGap: props.columnGap, autoRows: "100%", left: getSideBearing("left", props), right: getSideBearing("right", props), top: getTopBottomBearing("top", props), bottom: getTopBottomBearing("bottom", props), isControl: true }, __spreadArray([], Array(colspanTotal[breakpoint.index])).map(function (_, index) { return (React__default['default'].createElement(Box, { key: index, display: "flex", alignSelf: "stretch", cols: 1, backgroundColor: props.controlColor || "rgba(0,0,0,0.12)" })); })));
};
var ControlBox = styled__default['default']("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  pointer-events: none;\n"], ["\n  position: absolute;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  pointer-events: none;\n"])), function (props) { return props.controlColor || "rgba(0,0,0,0.12)"; });
var Control = function (props) {
    return props.isNewGrid ? (React__default['default'].createElement(ControlGrid, __assign({}, props))) : (React__default['default'].createElement(ControlBox, { controlColor: props.controlColor }));
};
var templateObject_1;

var Box = React__default['default'].forwardRef(function (props, ref) {
    var context = React.useContext(Context);
    var propsNormalized = useNormalize(props, context);
    var id = React__default['default'].useRef(nanoid());
    var controlIsVisible = useControl(props.control, context.controlIsVisible);
    var boxRef = useCombinedRefs(ref);
    var undefinedProps = useUndefinedProps(props);
    useResizeObserver(boxRef, props.onResize);
    return (React__default['default'].createElement(StyledBox, __assign({}, propsNormalized, { id: id.current, tag: props.as, component: props.component, className: props.className ? ["Box", props.className].join(" ") : "Box", controlIsVisible: controlIsVisible, ref: boxRef, css: propsNormalized.css, isControl: props.isControl, attrs: __assign(__assign({}, undefinedProps), (props.innerHTML && {
            dangerouslySetInnerHTML: { __html: props.innerHTML },
        })) }, propsNormalized),
        React__default['default'].createElement(React__default['default'].Fragment, null,
            controlIsVisible && (React__default['default'].createElement(Control, __assign({ isNewGrid: !!props.colspan }, propsNormalized))),
            React__default['default'].createElement(Context.Provider, { value: {
                    breakpoints: propsNormalized.breakpoints,
                    breakpoint: propsNormalized.breakpoint,
                    rowGap: propsNormalized.rowGap,
                    columnGap: propsNormalized.columnGap,
                    colspan: propsNormalized.colspan,
                    media: propsNormalized.media,
                    controlIsVisible: controlIsVisible,
                    controlColor: propsNormalized.controlColor,
                } }, props.children))));
});
Box.displayName = "Box";

exports.default = Box;
exports.useRaster = useRaster;
//# sourceMappingURL=index.js.map
