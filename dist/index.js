'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var Context = React__default['default'].createContext(null);

function isArray(prop) {
    if (!prop)
        return false;
    return prop.constructor === Array;
}

function addValues(_a) {
    var array = _a.array, breakpointsLength = _a.breakpointsLength;
    var lastKnownValue = array[array.length - 1];
    while (array.length < breakpointsLength) {
        array.push(lastKnownValue);
    }
    return array;
}
function getArray(prop, defaultProp) {
    if (!prop) {
        if (isArray(defaultProp))
            return defaultProp;
        return defaultProp ? [defaultProp] : [prop];
    }
    if (!isArray(prop))
        return [prop];
    return prop;
}
function normalizeProps(_a) {
    var prop = _a.prop, defaultProp = _a.defaultProp, breakpoints = _a.breakpoints;
    var breakpointsLength = breakpoints.length;
    var array = getArray(prop, defaultProp);
    if (array.length < breakpointsLength)
        array = addValues({ array: array, breakpointsLength: breakpointsLength });
    if (array.length > breakpointsLength)
        array = array.splice(breakpointsLength);
    return array;
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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
            return styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        @media (min-width: ", "px) ", " {\n          ", ";\n        }\n      "], ["\n        @media (min-width: ", "px) ", " {\n          ", ";\n        }\n      "])), bp, max, styled.css.apply(void 0, args));
        };
    });
}
var templateObject_1;

function getAlign(_a) {
    var align = _a.align, cssMode = _a.cssMode, hasChildBoxes = _a.hasChildBoxes;
    return cssMode === "grid" && hasChildBoxes
        ? align.map(function (al) {
            switch (al) {
                case "left":
                    return "start";
                case "right":
                    return "end";
                case "top":
                    return "start";
                case "bottom":
                    return "end";
                default:
                    return al;
            }
        })
        : align.map(function (al) {
            switch (al) {
                case "left":
                    return "flex-start";
                case "right":
                    return "flex-end";
                case "top":
                    return "flex-start";
                case "bottom":
                    return "flex-end";
                default:
                    return al;
            }
        });
}

var useControl = function (control) {
    var _a = React__default['default'].useState(false), isVisible = _a[0], setIsVisible = _a[1];
    React__default['default'].useEffect(function () {
        function onKeyup(event) {
            if (event.keyCode !== 27)
                return;
            setIsVisible(function (prevState) { return !prevState; });
        }
        if (!control)
            return;
        document.addEventListener("keyup", onKeyup);
        return function () { return document.removeEventListener("keyup", onKeyup); };
    }, []);
    return isVisible;
};

var InnerTag = function (_a) {
    var className = _a.className, children = _a.children;
    return (React__default['default'].createElement("div", { className: className }, children));
};
var StyledInner = styled__default['default'](InnerTag)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n\n  ",
    "\n"])), function (props) {
    return props.media.map(function (media, index) {
        return props.hasChildBoxes
            ? media(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n        display: flex;\n        align-items: stretch;\n        justify-content: stretch;\n      "], ["\n        display: flex;\n        align-items: stretch;\n        justify-content: stretch;\n      "]))) : media(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        ", "\n        ", "\n        ", "\n      "], ["\n        ",
            "\n        ", "\n        ", "\n      "])), (props.alignX[index] || props.alignY[index]) &&
            "\n          display: flex;\n        ", props.alignX[index] && "justify-content: " + props.alignX[index] + ";", props.alignY[index] && "align-items: " + props.alignY[index] + ";");
    });
});
var Inner = function (_a) {
    var media = _a.media, className = _a.className, alignX = _a.alignX, alignY = _a.alignY, children = _a.children, cssMode = _a.cssMode, hasChildBoxes = _a.hasChildBoxes;
    if (cssMode === "grid")
        return children;
    return (React__default['default'].createElement(StyledInner, { className: className, media: media, alignX: alignX, alignY: alignY, hasChildBoxes: hasChildBoxes }, children));
};
var templateObject_1$1, templateObject_2, templateObject_3;

var ResetterTag = function (_a) {
    var className = _a.className, children = _a.children;
    return React__default['default'].createElement("div", { className: className }, children);
};
var StyledResetter = styled__default['default'](ResetterTag)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  ", "\n"], ["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  ",
    "\n"])), function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n      width: calc(100% + (", "));      \n      margin-left: calc(-", " / 2);\n      margin-right: calc(-", " / 2);\n      margin-top: calc(-", " / 2);\n      margin-bottom: calc(-", " / 2);\n\n      align-items: ", ";\n      justify-content: ", ";    \n      \n      padding: ", ";\n    "], ["\n      width: calc(100% + (", "));      \n      margin-left: calc(-", " / 2);\n      margin-right: calc(-", " / 2);\n      margin-top: calc(-", " / 2);\n      margin-bottom: calc(-", " / 2);\n\n      align-items: ", ";\n      justify-content: ", ";    \n      \n      padding: ", ";\n    "])), props.gutterX[index], props.gutterX[index], props.gutterX[index], props.gutterY[index], props.gutterY[index], props.alignY[index], props.alignX[index], props.padding && props.padding[index]);
    });
});
var Resetter = function (props) {
    if (props.cssMode === "grid")
        return props.children;
    return props.hasChildBoxes ? React__default['default'].createElement(StyledResetter, __assign({}, props)) : props.children;
};
var templateObject_1$2, templateObject_2$1;

function useCssMode(initialValue) {
    var _a = React__default['default'].useState(initialValue), cssMode = _a[0], setCssMode = _a[1];
    React__default['default'].useEffect(function () {
        if (cssMode)
            return;
        var supportsCSS = (window.CSS && window.CSS.supports) || false;
        var supportsGrid = supportsCSS
            ? supportsCSS("grid-template-rows", "none")
            : false;
        if (!supportsGrid) {
            setCssMode("flex");
        }
    }, []);
    return cssMode;
}

var Container = React__default['default'].forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, _b = _a.attrs, attrs = _b === void 0 ? {} : _b, _c = _a.tag, tag = _c === void 0 ? "div" : _c;
    return React__default['default'].createElement(tag, __assign(__assign({}, attrs), { className: className, ref: ref }), tag !== "img" ? children : undefined);
});

var controlStyles = "\n  width: 100%;\n  z-index: 10000;\n  left: 0; \n  top: 0; \n  bottom: 0;\n  margin: 0;\n  grid-auto-rows: auto;\n  pointer-events: none;\n";
var GridLayout = styled__default['default'](Container)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  grid-auto-columns: ", "fr;\n  grid-auto-rows: min-content;\n  box-sizing: border-box;\n  ", "\n  ", "\n"], ["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  grid-auto-columns: ", "fr;\n  grid-auto-rows: min-content;\n  box-sizing: border-box;\n  ",
    "\n  ", "\n"])), function (props) { return props.colspan; }, function (props) { return props.colspan; }, function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n      position: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n      padding-top: ", ";\n      padding-bottom: ", ";\n      grid-column-gap: ", ";\n      grid-row-gap: ", ";\n      align-content: ", ";\n      align-items: ", ";\n      ", "\n      ", "\n    "], ["\n      position: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n      padding-top: ", ";\n      padding-bottom: ", ";\n      grid-column-gap: ", ";\n      grid-row-gap: ", ";\n      align-content: ", ";\n      align-items: ", ";\n      ", "\n      ",
            "\n    "])), function (props) { return props.position[index]; }, props.left[index], props.right[index], props.top[index], props.bottom[index], props.gutterX[index], props.gutterY[index], function (props) { return props.alignY[index]; }, function (props) { return props.alignY[index]; }, props.style[index], props.isControl && props.gutterX[index] === "0px"
            ? "grid-column-gap: 1px;"
            : "");
    });
}, function (props) { return props.isControl && controlStyles; });
var FlexBox = styled__default['default'](Container)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: stretch;\n  box-sizing: border-box;\n\n  ", "\n  ", "\n"], ["\n  display: flex;\n  align-items: stretch;\n  box-sizing: border-box;\n\n  ",
    "\n  ", "\n"])), function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n      position: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n      padding-top: ", ";\n      padding-bottom: ", ";\n      ", "\n    "], ["\n      position: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n      padding-top: ", ";\n      padding-bottom: ", ";\n      ", "\n    "])), function (props) { return props.position[index]; }, props.left[index], props.right[index], props.top[index], props.bottom[index], props.style[index]);
    });
}, function (props) { return props.isControl && controlStyles; });
var StyledGrid = React__default['default'].forwardRef(function (props, ref) {
    switch (props.cssMode) {
        case "flex":
            return React__default['default'].createElement(FlexBox, __assign({}, props, { ref: ref }));
        case "grid":
            return React__default['default'].createElement(GridLayout, __assign({}, props, { ref: ref }));
    }
});
var templateObject_1$3, templateObject_2$2, templateObject_3$1, templateObject_4;

function getReset(_a) {
    var hasChildBoxesFromProps = _a.hasChildBoxesFromProps, hasChildBoxesFromRegister = _a.hasChildBoxesFromRegister;
    return typeof hasChildBoxesFromProps === "boolean"
        ? hasChildBoxesFromProps
        : hasChildBoxesFromRegister;
}

function getColsPercent(_a) {
    var cols = _a.cols, left = _a.left, right = _a.right, parent = _a.parent, cssMode = _a.cssMode;
    if (cssMode === "grid") {
        return cols.map(function (col, index) { return col + left[index] + right[index]; });
    }
    return cols.map(function (col, index) { return (col * 100) / parent[index]; });
}

function getMarginsPercent(_a) {
    var margin = _a.margin, cols = _a.cols, parent = _a.parent, cssMode = _a.cssMode, gutterX = _a.gutterX;
    if (cssMode === "grid") {
        return margin.map(function (mar, index) {
            return mar
                ? "calc(((100% + " + gutterX[index] + ") / " + cols[index] + ") * " + mar + ")"
                : undefined;
        });
    }
    return margin.map(function (mar, index) {
        return mar ? (mar * 100) / parent[index] + "%" : undefined;
    });
}

function sumup(a, b, c) {
    return a.map(function (el, i) { return el + b[i] + c[i]; });
}
function getElements(_a) {
    var children = _a.children, breakpoints = _a.breakpoints, colsTotal = _a.colsTotal;
    return React__default['default'].Children.map(children, function (child) {
        if (!React__default['default'].isValidElement(child)) {
            return null;
        }
        var props = child.props;
        var left = normalizeProps({ prop: props.left, breakpoints: breakpoints });
        var right = normalizeProps({ prop: props.right, breakpoints: breakpoints });
        var cols = normalizeProps({
            prop: props.cols,
            defaultProp: colsTotal,
            breakpoints: breakpoints,
        });
        var total = sumup(cols, left, right);
        return { left: left, right: right, cols: cols, total: total };
    }).filter(function (el) { return el; });
}

function getRest(_a) {
    var stack = _a.stack, rest = _a.rest, alignX = _a.alignX;
    return stack.map(function () {
        switch (alignX) {
            case "start":
                return 0;
            case "center":
                return rest / 2;
            default:
                return rest;
        }
    });
}
function restArrayGroupedByBreakpoint(_a) {
    var breakpoints = _a.breakpoints, colsTotal = _a.colsTotal, alignX = _a.alignX;
    return breakpoints.map(function (breakpoint, index) {
        if (!breakpoint.length)
            return breakpoint;
        var totalWidth = 0;
        var newBreakpoint = [];
        var elementStack = [];
        for (var i = 0; i < breakpoint.length + 1; i++) {
            var current = breakpoint[i];
            if (current) {
                if (totalWidth + current.total > colsTotal[index]) {
                    newBreakpoint = __spreadArrays(newBreakpoint, getRest({
                        stack: elementStack,
                        rest: colsTotal[index] - totalWidth,
                        alignX: alignX[index],
                    }));
                    elementStack = [current];
                    totalWidth = 0;
                    totalWidth += current.total;
                }
                else if (totalWidth + current.total === colsTotal[index]) {
                    elementStack.push(current);
                    newBreakpoint = __spreadArrays(newBreakpoint, elementStack.map(function () { return 0; }));
                    elementStack = [];
                    totalWidth = 0;
                }
                else {
                    elementStack.push(current);
                    totalWidth += current.total;
                }
            }
            else {
                if (totalWidth) {
                    newBreakpoint = __spreadArrays(newBreakpoint, getRest({
                        stack: elementStack,
                        rest: colsTotal[index] - totalWidth,
                        alignX: alignX[index],
                    }));
                }
            }
        }
        return newBreakpoint;
    });
}

function groupElementsByBreakpoint(_a) {
    var breakpoints = _a.breakpoints, elements = _a.elements;
    var elementsRestructured = [];
    breakpoints.forEach(function (_, index) {
        var elementAtBreakpoint = [];
        elements.forEach(function (element) {
            elementAtBreakpoint.push({
                cols: element.cols[index],
                left: element.left[index],
                right: element.right[index],
                total: element.total[index],
            });
        });
        elementsRestructured.push(elementAtBreakpoint);
    });
    return elementsRestructured;
}

function regroupRestByElement(rest) {
    var rests = [];
    rest.forEach(function (breakpoint) {
        breakpoint.forEach(function (rest, bpIndex) {
            if (!rests[bpIndex]) {
                rests[bpIndex] = [rest];
            }
            else {
                rests[bpIndex] = __spreadArrays(rests[bpIndex], [rest]);
            }
        });
    });
    return rests;
}

function getAlignmentXRest(_a) {
    var children = _a.children, breakpoints = _a.breakpoints, colsTotal = _a.colsTotal, alignX = _a.alignX, alignXRaw = _a.alignXRaw, cssMode = _a.cssMode;
    if (!children || cssMode === "flex" || !alignXRaw)
        return null;
    var elements = getElements({ children: children, breakpoints: breakpoints, colsTotal: colsTotal });
    var elementsGroupedByBreakpoint = groupElementsByBreakpoint({
        breakpoints: breakpoints,
        elements: elements,
    });
    var rest = restArrayGroupedByBreakpoint({
        alignX: alignX,
        breakpoints: elementsGroupedByBreakpoint,
        colsTotal: colsTotal,
    });
    return regroupRestByElement(rest);
}

var GridLayout$1 = styled__default['default'](Container)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  ", ";\n\n  ", "\n  ", "\n    \n  ", "\n\n  ", "\n"], ["\n  box-sizing: border-box;\n  ", ";\n\n  ",
    "\n  ",
    "\n    \n  ",
    "\n\n  ",
    "\n"])), function (props) { return props.hasChildBoxes && "display: grid;"; }, function (props) {
    return props.hasChildBoxes &&
        props.media.map(function (media, index) {
            return media(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n      grid-template-columns: repeat(", ", 1fr);\n      grid-auto-columns: ", "fr;\n      grid-auto-rows: min-content;\n      grid-column-gap: ", ";\n      grid-row-gap: ", ";\n    "], ["\n      grid-template-columns: repeat(", ", 1fr);\n      grid-auto-columns: ", "fr;\n      grid-auto-rows: min-content;\n      grid-column-gap: ", ";\n      grid-row-gap: ", ";\n    "])), function (props) { return props.colspan[index]; }, function (props) { return props.colspan[index]; }, props.gutterX[index], props.gutterY[index]);
        });
}, function (props) {
    return !props.hasChildBoxes &&
        props.media.map(function (media, index) {
            if (props.alignX[index] === "flex-start" &&
                props.alignY[index] === "flex-start")
                return "";
            return media(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n        ", "\n        ", "\n        ", "\n      "], ["\n        ", "\n        ", "\n        ", "\n      "])), (props.alignX[index] || props.alignY[index]) && "display: flex;", props.alignX[index] && "justify-content: " + props.alignX[index] + ";", props.alignY[index] && "align-items: " + props.alignY[index] + ";");
        });
}, function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n        ", "\n        position: relative;\n        grid-column: auto / span ", ";\n        left: ", ";\n        margin-left: ", ";\n        margin-right: ", ";\n        margin-top: ", ";\n        margin-bottom: ", ";\n        align-content: ", ";\n        align-items: ", ";\n        padding: ", ";\n        ", "\n      "], ["\n        ", "\n        position: relative;\n        grid-column: auto / span ", ";\n        left: ", ";\n        margin-left: ", ";\n        margin-right: ", ";\n        margin-top: ", ";\n        margin-bottom: ", ";\n        align-content: ", ";\n        align-items: ", ";\n        padding: ", ";\n        ", "\n      "])), !props.colspan[index] ? "display: none;" : "", props.cols[index], props.rest[index], props.left[index], props.right[index], props.top[index], props.bottom[index], props.alignY[index], props.alignY[index], props.padding[index], props.style[index]);
    });
}, function (props) {
    return props.tag === "img" &&
        props.controlIsVisible &&
        "\n    box-shadow: 0 0 999em " + props.controlColor + " inset;\n  ";
});
var FlexBox$1 = styled__default['default'](Container)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  box-sizing: border-box;\n\n  ", "\n"], ["\n  display: flex;\n  box-sizing: border-box;\n\n  ",
    "\n"])), function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      width: ", "%;\n      \n      padding-left: calc(", " / 2);\n      padding-right: calc(", " / 2);\n      padding-top: calc(", " / 2);\n      padding-bottom: calc(", " / 2);\n\n      margin-left: ", ";\n      margin-right: ", ";\n      margin-top: ", ";\n      margin-bottom: ", ";\n    "], ["\n      width: ", "%;\n      \n      padding-left: calc(", " / 2);\n      padding-right: calc(", " / 2);\n      padding-top: calc(", " / 2);\n      padding-bottom: calc(", " / 2);\n\n      margin-left: ", ";\n      margin-right: ", ";\n      margin-top: ", ";\n      margin-bottom: ", ";\n    "])), props.cols[index], props.gutterX[index], props.gutterX[index], props.gutterY[index], props.gutterY[index], props.left[index], props.right[index], props.top[index], props.bottom[index]);
    });
});
var StyledBox = React__default['default'].forwardRef(function (props, ref) {
    switch (props.cssMode) {
        case "flex":
            return React__default['default'].createElement(FlexBox$1, __assign({}, props, { ref: ref }));
        case "grid":
            return React__default['default'].createElement(GridLayout$1, __assign({}, props, { ref: ref }));
    }
});
var templateObject_1$4, templateObject_2$3, templateObject_3$2, templateObject_4$1, templateObject_5, templateObject_6;

var defaultProps = {
    className: "",
    cols: undefined,
    alignX: "",
    alignY: "",
    children: null,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: null,
    style: "",
    hasChildBoxes: undefined,
    tag: "div",
    attrs: {},
    rest: [0],
    href: "",
    onClick: null,
};

var Box = React__default['default'].forwardRef(function (_a, ref) {
    var className = _a.className, cols = _a.cols, alignX = _a.alignX, alignY = _a.alignY, children = _a.children, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom, padding = _a.padding, style = _a.style, hasChildBoxes = _a.hasChildBoxes, tag = _a.tag, attrs = _a.attrs, rest = _a.rest, href = _a.href, onClick = _a.onClick;
    var _b = React.useContext(Context), cssMode = _b.cssMode, breakpoints = _b.breakpoints, gutterX = _b.gutterX, gutterY = _b.gutterY, colspan = _b.colspan, parent = _b.parent, media = _b.media, controlIsVisible = _b.controlIsVisible, controlColor = _b.controlColor, register = _b.register;
    var _c = React.useState(undefined), hasChildBoxesRegistered = _c[0], setHasChildBoxes = _c[1];
    var hasChildBoxesNormalized = React.useMemo(function () {
        return getReset({
            hasChildBoxesFromProps: hasChildBoxes,
            hasChildBoxesFromRegister: hasChildBoxesRegistered,
        });
    }, [hasChildBoxes, hasChildBoxesRegistered]);
    var alignXNormalized = React.useMemo(function () {
        return getAlign({
            align: normalizeProps({ prop: alignX, breakpoints: breakpoints }),
            cssMode: cssMode,
            hasChildBoxes: hasChildBoxesNormalized,
        });
    }, [alignX, breakpoints, cssMode, hasChildBoxesNormalized]);
    var alignYNormalized = React.useMemo(function () {
        return getAlign({
            align: normalizeProps({ prop: alignY, breakpoints: breakpoints }),
            cssMode: cssMode,
            hasChildBoxes: hasChildBoxesNormalized,
        });
    }, [alignY, breakpoints, cssMode, hasChildBoxesNormalized]);
    var leftNormalized = React.useMemo(function () { return normalizeProps({ prop: left, breakpoints: breakpoints }); }, [left, breakpoints]);
    var rightNormalized = React.useMemo(function () { return normalizeProps({ prop: right, breakpoints: breakpoints }); }, [right, breakpoints]);
    var restNormalized = React.useMemo(function () { return normalizeProps({ prop: rest, breakpoints: breakpoints }); }, [rest, breakpoints]);
    var colsNormalized = React.useMemo(function () { return normalizeProps({ prop: cols, defaultProp: parent, breakpoints: breakpoints }); }, [cols, parent, breakpoints]);
    var topNormalized = React.useMemo(function () { return normalizeProps({ prop: top, breakpoints: breakpoints }); }, [top, breakpoints]);
    var bottomNormalized = React.useMemo(function () { return normalizeProps({ prop: bottom, breakpoints: breakpoints }); }, [bottom, breakpoints]);
    var paddingNormalized = React.useMemo(function () { return normalizeProps({ prop: padding, breakpoints: breakpoints }); }, [padding, breakpoints]);
    var colsPercent = React.useMemo(function () {
        return getColsPercent({
            cols: colsNormalized,
            left: leftNormalized,
            right: rightNormalized,
            parent: parent,
            cssMode: cssMode,
        });
    }, [colsNormalized, leftNormalized, rightNormalized, parent, cssMode]);
    var restPercent = React.useMemo(function () {
        return getMarginsPercent({
            margin: restNormalized,
            cols: colsPercent,
            gutterX: gutterX,
            parent: parent,
            cssMode: cssMode,
        });
    }, [restNormalized, colsPercent, gutterX, parent, cssMode]);
    var leftPercent = React.useMemo(function () {
        return getMarginsPercent({
            margin: leftNormalized,
            cols: colsPercent,
            gutterX: gutterX,
            parent: parent,
            cssMode: cssMode,
        });
    }, [leftNormalized, colsPercent, gutterX, parent, cssMode]);
    var rightPercent = React.useMemo(function () {
        return getMarginsPercent({
            margin: rightNormalized,
            cols: colsPercent,
            gutterX: gutterX,
            parent: parent,
            cssMode: cssMode,
        });
    }, [rightNormalized, colsPercent, gutterX, parent, cssMode]);
    var topPercent = React.useMemo(function () {
        return getMarginsPercent({
            margin: topNormalized,
            cols: colsPercent,
            gutterX: gutterX,
            parent: parent,
            cssMode: cssMode,
        });
    }, [topNormalized, colsPercent, gutterX, parent, cssMode]);
    var bottomPercent = React.useMemo(function () {
        return getMarginsPercent({
            margin: bottomNormalized,
            cols: colsPercent,
            gutterX: gutterX,
            parent: parent,
            cssMode: cssMode,
        });
    }, [bottomNormalized, colsPercent, gutterX, parent, cssMode]);
    var styleNormalized = React.useMemo(function () { return normalizeProps({ prop: style, breakpoints: breakpoints }); }, [style, breakpoints]);
    var alignmentXRest = React.useMemo(function () {
        return getAlignmentXRest({
            children: children,
            breakpoints: breakpoints,
            cssMode: cssMode,
            colsTotal: colsNormalized,
            alignX: alignXNormalized,
            alignXRaw: alignX,
        });
    }, [alignX, alignXNormalized, breakpoints, children, colsNormalized, cssMode]);
    React.useEffect(function () {
        if (register)
            register();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (React__default['default'].createElement(StyledBox, { cssMode: cssMode, breakpoints: breakpoints, className: cssMode === "grid" ? classnames(["Box", className]) : "Box", cols: colsPercent, rest: restPercent, media: media, gutterX: gutterX, gutterY: gutterY, colspan: colsNormalized, hasChildBoxes: hasChildBoxesNormalized, alignX: alignXNormalized, alignY: alignYNormalized, tag: tag, left: leftPercent, right: rightPercent, top: topPercent, bottom: bottomPercent, padding: paddingNormalized, controlIsVisible: controlIsVisible, controlColor: controlColor, style: cssMode === "grid" && styleNormalized, ref: ref, attrs: __assign(__assign(__assign({}, attrs), (href && { href: href })), (onClick && { onClick: onClick })) },
        React__default['default'].createElement(Inner, { cssMode: cssMode, media: media, alignX: alignXNormalized, alignY: alignYNormalized, hasChildBoxes: hasChildBoxes, className: classnames(["Box__Inner", className]) },
            React__default['default'].createElement(React__default['default'].Fragment, null,
                controlIsVisible && React__default['default'].createElement(ControlBox, { controlColor: controlColor }),
                React__default['default'].createElement(Resetter, { cssMode: cssMode, className: "Box__Resetter", hasChildBoxes: hasChildBoxesNormalized, media: media, gutterX: gutterX, gutterY: gutterY, alignX: alignXNormalized, alignY: alignYNormalized, padding: paddingNormalized },
                    React__default['default'].createElement(Context.Provider, { value: {
                            breakpoints: breakpoints,
                            gutterX: gutterX,
                            gutterY: gutterY,
                            colspan: colspan,
                            media: media,
                            parent: colsNormalized,
                            controlIsVisible: controlIsVisible,
                            controlColor: controlColor,
                            cssMode: cssMode,
                            register: function () {
                                if (!hasChildBoxesRegistered) {
                                    setHasChildBoxes(true);
                                }
                            },
                        } }, React__default['default'].Children.toArray(children).map(function (child, index) {
                        return React__default['default'].isValidElement(child)
                            ? React__default['default'].cloneElement(child, {
                                rest: alignmentXRest && alignmentXRest[index],
                            })
                            : child;
                    })))))));
});
Box.displayName = "Box";
Box.defaultProps = defaultProps;

var ControlGrid = function (props) {
    return (React__default['default'].createElement(Grid, __assign({}, props, { position: "absolute", className: "Grid--Control", alignY: "stretch", isControl: true }), __spreadArrays(Array(props.colspan)).map(function (col, index) { return (React__default['default'].createElement(Box, { key: index, cols: 1, style: "\n            background-color: " + props.controlColor + ";\n          " })); })));
};
var StyledControlBox = styled__default['default']("div")(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  pointer-events: none;\n"], ["\n  position: absolute;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  pointer-events: none;\n"])), function (props) { return props.controlColor; });
var ControlBox = function (props) {
    return React__default['default'].createElement(StyledControlBox, __assign({}, props));
};
var templateObject_1$5;

function useCurrentBreakpoint(breakpoints) {
    var _a = React__default['default'].useState({
        index: 1,
        value: 0,
    }), currentBp = _a[0], setCurrentBp = _a[1];
    React__default['default'].useEffect(function () {
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

var defaultProps$1 = {
    breakpoints: [0, 432, 768, 1024, 1200, 1400],
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    gutterX: "0px",
    gutterY: "0px",
    alignX: null,
    alignY: null,
    colspan: 1,
    control: false,
    controlColor: "rgba(0, 0, 0, 0.1)",
    position: "relative",
    style: "",
    className: "",
    children: null,
    cssMode: undefined,
    tag: "div",
    attrs: {},
    isControl: false,
};

var Grid = React__default['default'].forwardRef(function (_a, ref) {
    var breakpoints = _a.breakpoints, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom, gutterX = _a.gutterX, gutterY = _a.gutterY, alignX = _a.alignX, alignY = _a.alignY, colspan = _a.colspan, control = _a.control, controlColor = _a.controlColor, position = _a.position, style = _a.style, className = _a.className, children = _a.children, cssMode = _a.cssMode, tag = _a.tag, attrs = _a.attrs, isControl = _a.isControl;
    var controlIsVisible = useControl(control);
    var cssModeNormalized = useCssMode(cssMode || "grid");
    var breakpointsNormalized = React.useMemo(function () { return breakpoints; }, [breakpoints]);
    var currentBreakpoint = useCurrentBreakpoint(breakpointsNormalized);
    var gutterXNormalized = React.useMemo(function () {
        return normalizeProps({ prop: gutterX, breakpoints: breakpointsNormalized });
    }, [gutterX, breakpointsNormalized]);
    var gutterYNormalized = React.useMemo(function () {
        return normalizeProps({ prop: gutterY, breakpoints: breakpointsNormalized });
    }, [gutterY, breakpointsNormalized]);
    var alignXNormalized = React.useMemo(function () {
        return getAlign({
            align: normalizeProps({
                prop: alignX,
                breakpoints: breakpointsNormalized,
            }),
            cssMode: cssModeNormalized,
            hasChildBoxes: true,
        });
    }, [alignX, breakpointsNormalized, cssModeNormalized]);
    var alignYNormalized = React.useMemo(function () {
        return getAlign({
            align: normalizeProps({
                prop: alignY,
                breakpoints: breakpointsNormalized,
            }),
            cssMode: cssModeNormalized,
            hasChildBoxes: true,
        });
    }, [alignY, breakpointsNormalized, cssModeNormalized]);
    var media = React.useMemo(function () { return getMediaQueries(breakpointsNormalized); }, [
        breakpointsNormalized,
    ]);
    var parent = React.useMemo(function () {
        return normalizeProps({ prop: colspan, breakpoints: breakpointsNormalized });
    }, [colspan, breakpointsNormalized]);
    var leftNormalized = React.useMemo(function () { return normalizeProps({ prop: left, breakpoints: breakpointsNormalized }); }, [left, breakpointsNormalized]);
    var rightNormalized = React.useMemo(function () { return normalizeProps({ prop: right, breakpoints: breakpointsNormalized }); }, [right, breakpointsNormalized]);
    var topNormalized = React.useMemo(function () { return normalizeProps({ prop: top, breakpoints: breakpointsNormalized }); }, [top, breakpointsNormalized]);
    var bottomNormalized = React.useMemo(function () {
        return normalizeProps({ prop: bottom, breakpoints: breakpointsNormalized });
    }, [bottom, breakpointsNormalized]);
    var positionNormalized = React.useMemo(function () {
        return normalizeProps({ prop: position, breakpoints: breakpointsNormalized });
    }, [position, breakpointsNormalized]);
    var styleNormalized = React.useMemo(function () { return normalizeProps({ prop: style, breakpoints: breakpoints }); }, [style, breakpoints]);
    var alignmentXRest = React.useMemo(function () {
        return getAlignmentXRest({
            children: children,
            breakpoints: breakpoints,
            colsTotal: normalizeProps({ prop: colspan, breakpoints: breakpoints }),
            alignX: alignXNormalized,
            cssMode: cssMode,
            alignXRaw: alignX,
        });
    }, [alignX, alignXNormalized, breakpoints, children, colspan, cssMode]);
    return (React__default['default'].createElement(StyledGrid, { cssMode: cssModeNormalized, colspan: colspan, className: classnames([
            "Grid",
            "bp-" + currentBreakpoint.index,
            "bp-" + currentBreakpoint.value,
            className,
        ]), gutterX: gutterXNormalized, gutterY: gutterYNormalized, alignX: alignXNormalized, alignY: alignYNormalized, media: media, left: leftNormalized, right: rightNormalized, top: topNormalized, bottom: bottomNormalized, position: positionNormalized, tag: tag, attrs: attrs, style: styleNormalized, ref: ref, isControl: isControl },
        control && controlIsVisible && (React__default['default'].createElement(ControlGrid, { cssMode: cssModeNormalized, colspan: colspan, breakpoints: breakpoints, gutterX: gutterXNormalized, gutterY: gutterYNormalized, left: leftNormalized, right: rightNormalized, top: topNormalized, bottom: bottomNormalized, controlColor: controlColor, media: media })),
        React__default['default'].createElement(Inner, { cssMode: cssModeNormalized, className: "Grid__Inner", alignX: alignXNormalized, alignY: alignYNormalized, media: media, hasChildBoxes: true },
            React__default['default'].createElement(Resetter, { cssMode: cssModeNormalized, className: "Grid__Resetter", hasChildBoxes: true, gutterX: gutterXNormalized, gutterY: gutterYNormalized, alignX: alignXNormalized, alignY: alignYNormalized, media: media },
                React__default['default'].createElement(Context.Provider, { value: {
                        cssMode: cssModeNormalized,
                        breakpoints: breakpointsNormalized,
                        gutterX: gutterXNormalized,
                        gutterY: gutterYNormalized,
                        media: media,
                        colspan: colspan,
                        parent: parent,
                        controlIsVisible: controlIsVisible,
                        controlColor: controlColor,
                    } }, alignmentXRest
                    ? React__default['default'].Children.map(children, function (child, index) {
                        return React__default['default'].cloneElement(child, {
                            rest: alignmentXRest && alignmentXRest[index],
                        });
                    })
                    : children)))));
});
Grid.defaultProps = defaultProps$1;

exports.Box = Box;
exports.Grid = Grid;
//# sourceMappingURL=index.js.map
