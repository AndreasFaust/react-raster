'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var types = /*#__PURE__*/Object.freeze({
    __proto__: null
});

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

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

var classnames = createCommonjsModule(function (module) {
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

var Context = React__default['default'].createContext({
    breakpoint: { index: 0, value: 0 },
    breakpoints: null,
    cssMode: null,
    gutterX: null,
    gutterY: null,
    colspan: null,
    parentCols: null,
    media: null,
    controlIsVisible: null,
    controlColor: null,
    rest: null,
    registerChildBox: null,
});
function useRaster() {
    return React__default['default'].useContext(Context);
}

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
    var className = _a.className, innerHTML = _a.innerHTML, children = _a.children;
    return innerHTML ? (React__default['default'].createElement("div", { className: className, dangerouslySetInnerHTML: { __html: innerHTML } })) : (React__default['default'].createElement("div", { className: className }, children));
};
var StyledInner = styled__default['default'](InnerTag)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n\n  ",
    "\n"])), function (props) {
    return props.media.map(function (media, index) {
        return props.hasChildBoxes
            ? media(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n          display: flex;\n          align-items: stretch;\n          justify-content: stretch;\n          ", "\n        "], ["\n          display: flex;\n          align-items: stretch;\n          justify-content: stretch;\n          ", "\n        "])), props.style && props.style[index]) : media(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          ", "\n          ", "\n          ", "\n          ", "\n        "], ["\n          ", "\n          ", "\n          ", "\n          ", "\n        "])), (props.alignX[index] || props.alignY[index]) && "display: flex;", props.alignX[index] && "justify-content: " + props.alignX[index] + ";", props.alignY[index] && "align-items: " + props.alignY[index] + ";", props.style && props.style[index]);
    });
});
var Inner = function (_a) {
    var media = _a.media, className = _a.className, alignX = _a.alignX, alignY = _a.alignY, style = _a.style, children = _a.children, cssMode = _a.cssMode, hasChildBoxes = _a.hasChildBoxes, innerHTML = _a.innerHTML;
    if (cssMode === "grid")
        return children;
    return (React__default['default'].createElement(StyledInner, { className: className, media: media, cssMode: cssMode, alignX: alignX, alignY: alignY, style: style, hasChildBoxes: hasChildBoxes, innerHTML: innerHTML }, children));
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
    if (props.cssMode === "grid" || !props.hasChildBoxes)
        return props.children;
    return React__default['default'].createElement(StyledResetter, __assign({}, props));
};
var templateObject_1$2, templateObject_2$1;

function useCssMode(cssModeFromProps) {
    var _a = React__default['default'].useState("grid"), cssMode = _a[0], setCssMode = _a[1];
    React__default['default'].useEffect(function () {
        if (cssModeFromProps) {
            setCssMode(cssModeFromProps);
            return;
        }
        var supportsCSS = (window.CSS && window.CSS.supports) || false;
        var supportsGrid = supportsCSS
            ? supportsCSS("grid-template-rows", "none")
            : false;
        if (supportsGrid) {
            setCssMode("grid");
        }
        else {
            setCssMode("flex");
        }
    }, [cssMode, cssModeFromProps]);
    return cssMode;
}

var Container = React__default['default'].forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, component = _a.component, _b = _a.attrs, attrs = _b === void 0 ? {} : _b, _c = _a.tag, tag = _c === void 0 ? "div" : _c, cssMode = _a.cssMode;
    if (component) {
        return React__default['default'].cloneElement(component, __assign({ children: children, className: className }, attrs));
    }
    return React__default['default'].createElement(tag, __assign(__assign({}, attrs), { className: className,
        ref: ref }), (tag !== "img" && !attrs.dangerouslySetInnerHTML) || cssMode === "flex"
        ? children
        : null);
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

function getColsPercent(_a) {
    var cols = _a.cols, left = _a.left, right = _a.right, parentCols = _a.parentCols, cssMode = _a.cssMode;
    if (cssMode === "grid") {
        return cols.map(function (col, index) { return col + left[index] + right[index]; });
    }
    return cols.map(function (col, index) { return (col * 100) / parentCols[index]; });
}

function getWidth(alignX, cols, rowWidth) {
    switch (alignX) {
        case "center":
            return (cols - rowWidth) / 2;
        case "end":
            return cols - rowWidth;
        default:
            return null;
    }
}
function getBreakpointRows(_a) {
    var index = _a.index, cols = _a.cols, children = _a.children, alignX = _a.alignX;
    var rows = [{ ids: [], width: 0 }];
    children.map(function (child) {
        var currentRow = rows[rows.length - 1];
        if (currentRow.width + child.width[index] <= cols) {
            rows[rows.length - 1] = {
                ids: __spreadArrays(currentRow.ids, [child.id]),
                width: currentRow.width + child.width[index],
            };
        }
        else {
            rows.push({
                ids: [child.id],
                width: child.width[index],
            });
        }
    });
    return rows.map(function (row) { return (__assign(__assign({}, row), { width: getWidth(alignX, cols, row.width) })); });
}

function sumup(a, b, c) {
    return a.map(function (el, i) { return el + b[i] + c[i]; });
}
function getAlignmentXRest(_a) {
    var childBoxes = _a.childBoxes, alignX = _a.alignX, cssMode = _a.cssMode, cols = _a.cols, breakpoints = _a.breakpoints;
    if (!childBoxes.length || cssMode === "flex")
        return null;
    if (childBoxes.length === 1) {
        return [
            {
                id: childBoxes[0].id,
                width: sumup(childBoxes[0].cols, childBoxes[0].left, childBoxes[0].right).map(function (width, index) {
                    return alignX[index] === "center" ? (cols[index] - width) / 2 : null;
                }),
            },
        ];
    }
    var children = childBoxes.map(function (childBox) { return ({
        width: sumup(childBox.cols, childBox.left, childBox.right),
        id: childBox.id,
    }); });
    var breakpointRows = breakpoints.map(function (_, index) {
        return getBreakpointRows({
            index: index,
            children: children,
            cols: cols[index],
            alignX: alignX[index],
        });
    });
    var rest = children.map(function (child) {
        return {
            id: child.id,
            width: breakpointRows.map(function (breakpointRow) {
                return breakpointRow.find(function (row) {
                    return row.ids.find(function (id) { return id === child.id; });
                }).width;
            }),
        };
    });
    return rest;
}

function normalizeRest(_a) {
    var rest = _a.rest, id = _a.id, breakpoints = _a.breakpoints;
    if (!rest) {
        return normalizeProps({ prop: null, breakpoints: breakpoints });
    }
    var thisRest = rest.find(function (r) { return r.id === id; });
    return thisRest
        ? thisRest.width
        : normalizeProps({ prop: null, breakpoints: breakpoints });
}

function getReset(_a) {
    var hasChildBoxesFromProps = _a.hasChildBoxesFromProps, hasChildBoxesFromRegister = _a.hasChildBoxesFromRegister;
    return typeof hasChildBoxesFromProps === "boolean"
        ? hasChildBoxesFromProps
        : hasChildBoxesFromRegister;
}

var ErrorMessage = function () {
    console.error("Error in react-raster! Boxes always need a wrapping Grid!");
    return (React__default['default'].createElement("div", { style: {
            background: "red",
            padding: "0.5em",
            fontFamily: "sans-serif",
        } },
        React__default['default'].createElement("strong", null, "Error!"),
        " This is a fallback, because this Box is not child of a Grid!"));
};

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
        return media(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n        ", "\n        position: relative;\n        grid-column: auto / span ", ";\n        left: ", ";\n        margin-left: ", ";\n        margin-right: ", ";\n        margin-top: ", ";\n        margin-bottom: ", ";\n        align-content: ", ";\n        align-items: ", ";\n        padding: ", ";\n        order: ", ";\n        ", "\n      "], ["\n        ", "\n        position: relative;\n        grid-column: auto / span ", ";\n        left: ", ";\n        margin-left: ", ";\n        margin-right: ", ";\n        margin-top: ", ";\n        margin-bottom: ", ";\n        align-content: ", ";\n        align-items: ", ";\n        padding: ", ";\n        order: ", ";\n        ", "\n      "])), !props.colspan[index] ? "display: none;" : "", props.cols[index], props.rest[index], props.left[index], props.right[index], props.top[index], props.bottom[index], props.alignY[index], props.alignY[index], props.padding[index], props.order[index], props.style[index]);
    });
}, function (props) {
    return props.tag === "img" &&
        props.controlIsVisible &&
        "\n    box-shadow: 0 0 999em " + props.controlColor + " inset;\n  ";
});
var FlexBox$1 = styled__default['default'](Container)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  box-sizing: border-box;\n\n  ", "\n"], ["\n  display: flex;\n  box-sizing: border-box;\n\n  ",
    "\n"])), function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        width: ", "%;\n        \n        padding-left: calc(", " / 2);\n        padding-right: calc(", " / 2);\n        padding-top: calc(", " / 2);\n        padding-bottom: calc(", " / 2);\n\n        margin-left: ", ";\n        margin-right: ", ";\n        margin-top: ", ";\n        margin-bottom: ", ";\n\n        order: ", ";\n      "], ["\n        width: ", "%;\n        \n        padding-left: calc(", " / 2);\n        padding-right: calc(", " / 2);\n        padding-top: calc(", " / 2);\n        padding-bottom: calc(", " / 2);\n\n        margin-left: ", ";\n        margin-right: ", ";\n        margin-top: ", ";\n        margin-bottom: ", ";\n\n        order: ", ";\n      "])), props.cols[index], props.gutterX[index], props.gutterX[index], props.gutterY[index], props.gutterY[index], props.left[index], props.right[index], props.top[index], props.bottom[index], props.order[index]);
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
    attrs: {},
    alignX: null,
    alignY: null,
    bottom: 0,
    children: null,
    className: null,
    cols: null,
    component: null,
    hasChildBoxes: null,
    href: null,
    left: 0,
    onClick: null,
    padding: null,
    right: 0,
    style: null,
    tag: "div",
    top: 0,
    order: null,
    innerHTML: null,
};

function getMarginsPercent(_a) {
    var margin = _a.margin, cols = _a.cols, parentCols = _a.parentCols, cssMode = _a.cssMode, gutterX = _a.gutterX;
    if (cssMode === "grid") {
        return margin.map(function (mar, index) {
            return mar
                ? "calc(((100% + " + gutterX[index] + ") / " + cols[index] + ") * " + mar + ")"
                : null;
        });
    }
    return margin.map(function (mar, index) {
        return mar ? (mar * 100) / parentCols[index] + "%" : undefined;
    });
}

function useMarginPercent(_a) {
    var prop = _a.prop, cols = _a.cols;
    var _b = React.useContext(Context), cssMode = _b.cssMode, gutterX = _b.gutterX, parentCols = _b.parentCols;
    var percentValue = getMarginsPercent({
        margin: prop,
        cols: cols,
        gutterX: gutterX,
        parentCols: parentCols,
        cssMode: cssMode,
    });
    return percentValue;
}

var Box = React__default['default'].forwardRef(function (_a, ref) {
    var alignX = _a.alignX, alignY = _a.alignY, attrs = _a.attrs, bottom = _a.bottom, className = _a.className, cols = _a.cols, component = _a.component, children = _a.children, hasChildBoxes = _a.hasChildBoxes, href = _a.href, innerHTML = _a.innerHTML, padding = _a.padding, left = _a.left, onClick = _a.onClick, right = _a.right, style = _a.style, top = _a.top, tag = _a.tag, order = _a.order;
    var context = React.useContext(Context);
    if (!context) {
        return React__default['default'].createElement(ErrorMessage, null);
    }
    var breakpoint = context.breakpoint, breakpoints = context.breakpoints, colspan = context.colspan, controlColor = context.controlColor, controlIsVisible = context.controlIsVisible, cssMode = context.cssMode, gutterX = context.gutterX, gutterY = context.gutterY, media = context.media, parentCols = context.parentCols, rest = context.rest, registerChildBox = context.registerChildBox;
    var id = React__default['default'].useState(nanoid)[0];
    var _b = React.useState([]), childBoxes = _b[0], setChildBoxes = _b[1];
    var hasChildBoxesNormalized = getReset({
        hasChildBoxesFromProps: hasChildBoxes,
        hasChildBoxesFromRegister: !!childBoxes.length,
    });
    var alignXNormalized = getAlign({
        align: normalizeProps({ prop: alignX, breakpoints: breakpoints }),
        cssMode: cssMode,
        hasChildBoxes: hasChildBoxesNormalized,
    });
    var alignYNormalized = getAlign({
        align: normalizeProps({ prop: alignY, breakpoints: breakpoints }),
        cssMode: cssMode,
        hasChildBoxes: hasChildBoxesNormalized,
    });
    var restNormalized = normalizeRest({ rest: rest, breakpoints: breakpoints, id: id });
    var leftNormalized = normalizeProps({ prop: left, breakpoints: breakpoints });
    var rightNormalized = normalizeProps({ prop: right, breakpoints: breakpoints });
    var topNormalized = normalizeProps({ prop: top, breakpoints: breakpoints });
    var bottomNormalized = normalizeProps({ prop: bottom, breakpoints: breakpoints });
    var paddingNormalized = normalizeProps({ prop: padding, breakpoints: breakpoints });
    var styleNormalized = normalizeProps({ prop: style, breakpoints: breakpoints });
    var orderNormalized = normalizeProps({ prop: order, breakpoints: breakpoints });
    var colsNormalized = normalizeProps({
        prop: cols,
        defaultProp: parentCols,
        breakpoints: breakpoints,
    });
    var colsPercent = getColsPercent({
        cols: colsNormalized,
        left: leftNormalized,
        right: rightNormalized,
        parentCols: parentCols,
        cssMode: cssMode,
    });
    var restPercent = useMarginPercent({
        prop: restNormalized,
        cols: colsPercent,
    });
    var leftPercent = useMarginPercent({
        prop: leftNormalized,
        cols: colsPercent,
    });
    var rightPercent = useMarginPercent({
        prop: rightNormalized,
        cols: colsPercent,
    });
    var topPercent = useMarginPercent({
        prop: topNormalized,
        cols: colsPercent,
    });
    var bottomPercent = useMarginPercent({
        prop: bottomNormalized,
        cols: colsPercent,
    });
    var alignmentXRest = getAlignmentXRest({
        breakpoints: breakpoints,
        childBoxes: childBoxes,
        cssMode: cssMode,
        alignX: alignXNormalized,
        cols: colsNormalized,
    });
    React.useEffect(function () {
        if (registerChildBox)
            registerChildBox({
                left: leftNormalized,
                right: rightNormalized,
                cols: colsNormalized,
                id: id,
            });
    }, []);
    return (React__default['default'].createElement(StyledBox, { component: component, cssMode: cssMode, breakpoints: breakpoints, className: cssMode === "grid" ? classnames(["Box", className]) : "Box", cols: colsPercent, rest: restPercent, media: media, gutterX: gutterX, gutterY: gutterY, colspan: colsNormalized, hasChildBoxes: hasChildBoxesNormalized, alignX: alignXNormalized, alignY: alignYNormalized, tag: tag, left: leftPercent, right: rightPercent, top: topPercent, bottom: bottomPercent, padding: paddingNormalized, controlIsVisible: controlIsVisible, controlColor: controlColor, order: orderNormalized, style: cssMode === "grid" && styleNormalized, ref: ref, attrs: __assign(__assign(__assign(__assign({}, attrs), (innerHTML &&
            cssMode === "grid" && {
            dangerouslySetInnerHTML: { __html: innerHTML },
        })), (href && { href: href })), (onClick && { onClick: onClick })) },
        React__default['default'].createElement(Inner, { cssMode: cssMode, media: media, alignX: alignXNormalized, alignY: alignYNormalized, style: styleNormalized, hasChildBoxes: hasChildBoxes, innerHTML: innerHTML, className: classnames(["Box__Inner", className]) },
            React__default['default'].createElement(React__default['default'].Fragment, null,
                controlIsVisible && React__default['default'].createElement(ControlBox, { controlColor: controlColor }),
                React__default['default'].createElement(Resetter, { cssMode: cssMode, className: "Box__Resetter", hasChildBoxes: hasChildBoxesNormalized, media: media, gutterX: gutterX, gutterY: gutterY, alignX: alignXNormalized, alignY: alignYNormalized, padding: paddingNormalized },
                    React__default['default'].createElement(Context.Provider, { value: {
                            breakpoints: breakpoints,
                            breakpoint: breakpoint,
                            gutterX: gutterX,
                            gutterY: gutterY,
                            colspan: colspan,
                            media: media,
                            parentCols: colsNormalized,
                            controlIsVisible: controlIsVisible,
                            controlColor: controlColor,
                            cssMode: cssMode,
                            rest: alignmentXRest,
                            registerChildBox: function (childBox) {
                                setChildBoxes(function (childBoxes) { return __spreadArrays(childBoxes, [childBox]); });
                            },
                        } }, children))))));
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
    alignX: null,
    alignY: null,
    attrs: {},
    bottom: "0",
    breakpoints: [0, 432, 768, 1024, 1200, 1400],
    children: null,
    className: null,
    colspan: 1,
    component: null,
    control: false,
    controlColor: "rgba(0, 0, 0, 0.1)",
    cssMode: null,
    gutterX: "0px",
    gutterY: "0px",
    isControl: false,
    left: "0",
    position: "relative",
    right: "0",
    tag: "div",
    top: "0",
    style: null,
};

var Grid = React__default['default'].forwardRef(function (_a, ref) {
    var breakpoints = _a.breakpoints, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom, gutterX = _a.gutterX, gutterY = _a.gutterY, alignX = _a.alignX, alignY = _a.alignY, colspan = _a.colspan, control = _a.control, controlColor = _a.controlColor, position = _a.position, style = _a.style, className = _a.className, children = _a.children, cssMode = _a.cssMode, component = _a.component, tag = _a.tag, attrs = _a.attrs, isControl = _a.isControl;
    var controlIsVisible = useControl(control);
    var cssModeNormalized = useCssMode(cssMode);
    var _b = React__default['default'].useState([]), childBoxes = _b[0], setChildBoxes = _b[1];
    var currentBreakpoint = useCurrentBreakpoint(breakpoints);
    var gutterXNormalized = normalizeProps({ prop: gutterX, breakpoints: breakpoints });
    var gutterYNormalized = normalizeProps({ prop: gutterY, breakpoints: breakpoints });
    var alignXNormalized = getAlign({
        align: normalizeProps({ prop: alignX, breakpoints: breakpoints }),
        cssMode: cssModeNormalized,
        hasChildBoxes: true,
    });
    var alignYNormalized = getAlign({
        align: normalizeProps({ prop: alignY, breakpoints: breakpoints }),
        cssMode: cssModeNormalized,
        hasChildBoxes: true,
    });
    var media = getMediaQueries(breakpoints);
    var colsNormalized = normalizeProps({ prop: colspan, breakpoints: breakpoints });
    var leftNormalized = normalizeProps({ prop: left, breakpoints: breakpoints });
    var rightNormalized = normalizeProps({ prop: right, breakpoints: breakpoints });
    var topNormalized = normalizeProps({ prop: top, breakpoints: breakpoints });
    var bottomNormalized = normalizeProps({ prop: bottom, breakpoints: breakpoints });
    var positionNormalized = normalizeProps({ prop: position, breakpoints: breakpoints });
    var styleNormalized = normalizeProps({ prop: style, breakpoints: breakpoints });
    var alignmentXRest = getAlignmentXRest({
        breakpoints: breakpoints,
        childBoxes: childBoxes,
        cssMode: cssMode,
        alignX: alignXNormalized,
        cols: colsNormalized,
    });
    return (React__default['default'].createElement(StyledGrid, { alignX: alignXNormalized, alignY: alignYNormalized, attrs: attrs, bottom: bottomNormalized, cssMode: cssModeNormalized, colspan: colspan, component: component, className: classnames([
            "Grid",
            "bp-" + currentBreakpoint.index,
            "bp-" + currentBreakpoint.value,
            className,
        ]), gutterX: gutterXNormalized, gutterY: gutterYNormalized, isControl: isControl, left: leftNormalized, media: media, position: positionNormalized, ref: ref, right: rightNormalized, style: styleNormalized, tag: tag, top: topNormalized },
        control && controlIsVisible && (React__default['default'].createElement(ControlGrid, { cssMode: cssModeNormalized, colspan: colspan, breakpoints: breakpoints, gutterX: gutterXNormalized, gutterY: gutterYNormalized, left: leftNormalized, right: rightNormalized, top: topNormalized, bottom: bottomNormalized, controlColor: controlColor, media: media })),
        React__default['default'].createElement(Inner, { cssMode: cssModeNormalized, className: "Grid__Inner", alignX: alignXNormalized, alignY: alignYNormalized, style: styleNormalized, media: media, hasChildBoxes: true },
            React__default['default'].createElement(Resetter, { cssMode: cssModeNormalized, className: "Grid__Resetter", hasChildBoxes: true, gutterX: gutterXNormalized, gutterY: gutterYNormalized, alignX: alignXNormalized, alignY: alignYNormalized, media: media },
                React__default['default'].createElement(Context.Provider, { value: {
                        cssMode: cssModeNormalized,
                        breakpoint: currentBreakpoint,
                        breakpoints: breakpoints,
                        gutterX: gutterXNormalized,
                        gutterY: gutterYNormalized,
                        media: media,
                        colspan: colspan,
                        parentCols: colsNormalized,
                        controlIsVisible: controlIsVisible,
                        controlColor: controlColor,
                        rest: alignmentXRest,
                        registerChildBox: function (childBox) {
                            setChildBoxes(function (childBoxes) { return __spreadArrays(childBoxes, [childBox]); });
                        },
                    } }, children)))));
});
Grid.defaultProps = defaultProps$1;

exports.Box = Box;
exports.Grid = Grid;
exports.Types = types;
exports.useRaster = useRaster;
//# sourceMappingURL=index.js.map
