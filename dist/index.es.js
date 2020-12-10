import React, { useContext, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

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

var Context = React.createContext(null);

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
            return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        @media (min-width: ", "px) ", " {\n          ", ";\n        }\n      "], ["\n        @media (min-width: ", "px) ", " {\n          ", ";\n        }\n      "])), bp, max, css.apply(void 0, args));
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
    var _a = React.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    React.useEffect(function () {
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
    return (React.createElement("div", { className: className }, children));
};
var StyledInner = styled(InnerTag)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n\n  ",
    "\n"])), function (props) {
    return props.media.map(function (media, index) {
        return props.hasChildBoxes
            ? media(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n          display: flex;\n          align-items: stretch;\n          justify-content: stretch;\n          ", "\n        "], ["\n          display: flex;\n          align-items: stretch;\n          justify-content: stretch;\n          ", "\n        "])), props.style && props.style[index]) : media(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          ", "\n          ", "\n          ", "\n          ", "\n        "], ["\n          ", "\n          ", "\n          ", "\n          ", "\n        "])), (props.alignX[index] || props.alignY[index]) && "display: flex;", props.alignX[index] && "justify-content: " + props.alignX[index] + ";", props.alignY[index] && "align-items: " + props.alignY[index] + ";", props.style[index]);
    });
});
var Inner = function (_a) {
    var media = _a.media, className = _a.className, alignX = _a.alignX, alignY = _a.alignY, style = _a.style, children = _a.children, cssMode = _a.cssMode, hasChildBoxes = _a.hasChildBoxes;
    if (cssMode === "grid")
        return children;
    return (React.createElement(StyledInner, { className: className, media: media, alignX: alignX, alignY: alignY, style: style, hasChildBoxes: hasChildBoxes }, children));
};
var templateObject_1$1, templateObject_2, templateObject_3;

var ResetterTag = function (_a) {
    var className = _a.className, children = _a.children;
    return React.createElement("div", { className: className }, children);
};
var StyledResetter = styled(ResetterTag)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  ", "\n"], ["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  ",
    "\n"])), function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n      width: calc(100% + (", "));      \n      margin-left: calc(-", " / 2);\n      margin-right: calc(-", " / 2);\n      margin-top: calc(-", " / 2);\n      margin-bottom: calc(-", " / 2);\n\n      align-items: ", ";\n      justify-content: ", ";    \n      \n      padding: ", ";\n    "], ["\n      width: calc(100% + (", "));      \n      margin-left: calc(-", " / 2);\n      margin-right: calc(-", " / 2);\n      margin-top: calc(-", " / 2);\n      margin-bottom: calc(-", " / 2);\n\n      align-items: ", ";\n      justify-content: ", ";    \n      \n      padding: ", ";\n    "])), props.gutterX[index], props.gutterX[index], props.gutterX[index], props.gutterY[index], props.gutterY[index], props.alignY[index], props.alignX[index], props.padding && props.padding[index]);
    });
});
var Resetter = function (props) {
    if (props.cssMode === "grid" || !props.hasChildBoxes)
        return props.children;
    return React.createElement(StyledResetter, __assign({}, props));
};
var templateObject_1$2, templateObject_2$1;

function useCssMode(cssModeFromProps) {
    var _a = React.useState("grid"), cssMode = _a[0], setCssMode = _a[1];
    React.useEffect(function () {
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

var Container = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, _b = _a.attrs, attrs = _b === void 0 ? {} : _b, _c = _a.tag, tag = _c === void 0 ? "div" : _c;
    return React.createElement(tag, __assign(__assign({}, attrs), { className: className, ref: ref }), tag !== "img" ? children : undefined);
});

var controlStyles = "\n  width: 100%;\n  z-index: 10000;\n  left: 0; \n  top: 0; \n  bottom: 0;\n  margin: 0;\n  grid-auto-rows: auto;\n  pointer-events: none;\n";
var GridLayout = styled(Container)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  grid-auto-columns: ", "fr;\n  grid-auto-rows: min-content;\n  box-sizing: border-box;\n  ", "\n  ", "\n"], ["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  grid-auto-columns: ", "fr;\n  grid-auto-rows: min-content;\n  box-sizing: border-box;\n  ",
    "\n  ", "\n"])), function (props) { return props.colspan; }, function (props) { return props.colspan; }, function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n      position: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n      padding-top: ", ";\n      padding-bottom: ", ";\n      grid-column-gap: ", ";\n      grid-row-gap: ", ";\n      align-content: ", ";\n      align-items: ", ";\n      ", "\n      ", "\n    "], ["\n      position: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n      padding-top: ", ";\n      padding-bottom: ", ";\n      grid-column-gap: ", ";\n      grid-row-gap: ", ";\n      align-content: ", ";\n      align-items: ", ";\n      ", "\n      ",
            "\n    "])), function (props) { return props.position[index]; }, props.left[index], props.right[index], props.top[index], props.bottom[index], props.gutterX[index], props.gutterY[index], function (props) { return props.alignY[index]; }, function (props) { return props.alignY[index]; }, props.style[index], props.isControl && props.gutterX[index] === "0px"
            ? "grid-column-gap: 1px;"
            : "");
    });
}, function (props) { return props.isControl && controlStyles; });
var FlexBox = styled(Container)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: stretch;\n  box-sizing: border-box;\n\n  ", "\n  ", "\n"], ["\n  display: flex;\n  align-items: stretch;\n  box-sizing: border-box;\n\n  ",
    "\n  ", "\n"])), function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n      position: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n      padding-top: ", ";\n      padding-bottom: ", ";\n      ", "\n    "], ["\n      position: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n      padding-top: ", ";\n      padding-bottom: ", ";\n      ", "\n    "])), function (props) { return props.position[index]; }, props.left[index], props.right[index], props.top[index], props.bottom[index], props.style[index]);
    });
}, function (props) { return props.isControl && controlStyles; });
var StyledGrid = React.forwardRef(function (props, ref) {
    switch (props.cssMode) {
        case "flex":
            return React.createElement(FlexBox, __assign({}, props, { ref: ref }));
        case "grid":
            return React.createElement(GridLayout, __assign({}, props, { ref: ref }));
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
    return (React.createElement("div", { style: {
            background: "red",
            padding: "0.5em",
            fontFamily: "sans-serif",
        } },
        React.createElement("strong", null, "Error!"),
        " This is a fallback, because this Box is not child of a Grid!"));
};

var GridLayout$1 = styled(Container)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  ", ";\n\n  ", "\n  ", "\n    \n  ", "\n\n  ", "\n"], ["\n  box-sizing: border-box;\n  ", ";\n\n  ",
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
var FlexBox$1 = styled(Container)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  box-sizing: border-box;\n\n  ", "\n"], ["\n  display: flex;\n  box-sizing: border-box;\n\n  ",
    "\n"])), function (props) {
    return props.media.map(function (media, index) {
        return media(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        width: ", "%;\n        \n        padding-left: calc(", " / 2);\n        padding-right: calc(", " / 2);\n        padding-top: calc(", " / 2);\n        padding-bottom: calc(", " / 2);\n\n        margin-left: ", ";\n        margin-right: ", ";\n        margin-top: ", ";\n        margin-bottom: ", ";\n      "], ["\n        width: ", "%;\n        \n        padding-left: calc(", " / 2);\n        padding-right: calc(", " / 2);\n        padding-top: calc(", " / 2);\n        padding-bottom: calc(", " / 2);\n\n        margin-left: ", ";\n        margin-right: ", ";\n        margin-top: ", ";\n        margin-bottom: ", ";\n      "])), props.cols[index], props.gutterX[index], props.gutterX[index], props.gutterY[index], props.gutterY[index], props.left[index], props.right[index], props.top[index], props.bottom[index]);
    });
});
var StyledBox = React.forwardRef(function (props, ref) {
    switch (props.cssMode) {
        case "flex":
            return React.createElement(FlexBox$1, __assign({}, props, { ref: ref }));
        case "grid":
            return React.createElement(GridLayout$1, __assign({}, props, { ref: ref }));
    }
});
var templateObject_1$4, templateObject_2$3, templateObject_3$2, templateObject_4$1, templateObject_5, templateObject_6;

var defaultProps = {
    className: null,
    cols: null,
    alignX: null,
    alignY: null,
    children: null,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: null,
    style: null,
    hasChildBoxes: null,
    tag: "div",
    attrs: {},
    href: null,
    onClick: null,
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
    var _b = useContext(Context), cssMode = _b.cssMode, gutterX = _b.gutterX, parentCols = _b.parentCols;
    var percentValue = getMarginsPercent({
        margin: prop,
        cols: cols,
        gutterX: gutterX,
        parentCols: parentCols,
        cssMode: cssMode,
    });
    return percentValue;
}

var Box = React.forwardRef(function (_a, ref) {
    var className = _a.className, cols = _a.cols, alignX = _a.alignX, alignY = _a.alignY, children = _a.children, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom, padding = _a.padding, style = _a.style, hasChildBoxes = _a.hasChildBoxes, tag = _a.tag, attrs = _a.attrs, href = _a.href, onClick = _a.onClick;
    var context = useContext(Context);
    if (!context) {
        return React.createElement(ErrorMessage, null);
    }
    var cssMode = context.cssMode, breakpoints = context.breakpoints, gutterX = context.gutterX, gutterY = context.gutterY, colspan = context.colspan, parentCols = context.parentCols, media = context.media, controlIsVisible = context.controlIsVisible, controlColor = context.controlColor, rest = context.rest, registerChildBox = context.registerChildBox;
    var id = React.useState(nanoid)[0];
    var _b = useState([]), childBoxes = _b[0], setChildBoxes = _b[1];
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
    useEffect(function () {
        if (registerChildBox)
            registerChildBox({
                left: leftNormalized,
                right: rightNormalized,
                cols: colsNormalized,
                id: id,
            });
    }, []);
    return (React.createElement(StyledBox, { cssMode: cssMode, breakpoints: breakpoints, className: cssMode === "grid" ? classnames(["Box", className]) : "Box", cols: colsPercent, rest: restPercent, media: media, gutterX: gutterX, gutterY: gutterY, colspan: colsNormalized, hasChildBoxes: hasChildBoxesNormalized, alignX: alignXNormalized, alignY: alignYNormalized, tag: tag, left: leftPercent, right: rightPercent, top: topPercent, bottom: bottomPercent, padding: paddingNormalized, controlIsVisible: controlIsVisible, controlColor: controlColor, style: cssMode === "grid" && styleNormalized, ref: ref, attrs: __assign(__assign(__assign({}, attrs), (href && { href: href })), (onClick && { onClick: onClick })) },
        React.createElement(Inner, { cssMode: cssMode, media: media, alignX: alignXNormalized, alignY: alignYNormalized, style: styleNormalized, hasChildBoxes: hasChildBoxes, className: classnames(["Box__Inner", className]) },
            React.createElement(React.Fragment, null,
                controlIsVisible && React.createElement(ControlBox, { controlColor: controlColor }),
                React.createElement(Resetter, { cssMode: cssMode, className: "Box__Resetter", hasChildBoxes: hasChildBoxesNormalized, media: media, gutterX: gutterX, gutterY: gutterY, alignX: alignXNormalized, alignY: alignYNormalized, padding: paddingNormalized },
                    React.createElement(Context.Provider, { value: {
                            breakpoints: breakpoints,
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
    return (React.createElement(Grid, __assign({}, props, { position: "absolute", className: "Grid--Control", alignY: "stretch", isControl: true }), __spreadArrays(Array(props.colspan)).map(function (col, index) { return (React.createElement(Box, { key: index, cols: 1, style: "\n            background-color: " + props.controlColor + ";\n          " })); })));
};
var StyledControlBox = styled("div")(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  pointer-events: none;\n"], ["\n  position: absolute;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  pointer-events: none;\n"])), function (props) { return props.controlColor; });
var ControlBox = function (props) {
    return React.createElement(StyledControlBox, __assign({}, props));
};
var templateObject_1$5;

function useCurrentBreakpoint(breakpoints) {
    var _a = React.useState({
        index: 1,
        value: 0,
    }), currentBp = _a[0], setCurrentBp = _a[1];
    React.useEffect(function () {
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
    style: null,
    className: null,
    children: null,
    cssMode: null,
    tag: "div",
    attrs: {},
    isControl: false,
};

var Grid = React.forwardRef(function (_a, ref) {
    var breakpoints = _a.breakpoints, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom, gutterX = _a.gutterX, gutterY = _a.gutterY, alignX = _a.alignX, alignY = _a.alignY, colspan = _a.colspan, control = _a.control, controlColor = _a.controlColor, position = _a.position, style = _a.style, className = _a.className, children = _a.children, cssMode = _a.cssMode, tag = _a.tag, attrs = _a.attrs, isControl = _a.isControl;
    var controlIsVisible = useControl(control);
    var cssModeNormalized = useCssMode(cssMode);
    var _b = React.useState([]), childBoxes = _b[0], setChildBoxes = _b[1];
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
    return (React.createElement(StyledGrid, { cssMode: cssModeNormalized, colspan: colspan, className: classnames([
            "Grid",
            "bp-" + currentBreakpoint.index,
            "bp-" + currentBreakpoint.value,
            className,
        ]), gutterX: gutterXNormalized, gutterY: gutterYNormalized, alignX: alignXNormalized, alignY: alignYNormalized, media: media, left: leftNormalized, right: rightNormalized, top: topNormalized, bottom: bottomNormalized, position: positionNormalized, tag: tag, attrs: attrs, style: styleNormalized, ref: ref, isControl: isControl },
        control && controlIsVisible && (React.createElement(ControlGrid, { cssMode: cssModeNormalized, colspan: colspan, breakpoints: breakpoints, gutterX: gutterXNormalized, gutterY: gutterYNormalized, left: leftNormalized, right: rightNormalized, top: topNormalized, bottom: bottomNormalized, controlColor: controlColor, media: media })),
        React.createElement(Inner, { cssMode: cssModeNormalized, className: "Grid__Inner", alignX: alignXNormalized, alignY: alignYNormalized, style: styleNormalized, media: media, hasChildBoxes: true },
            React.createElement(Resetter, { cssMode: cssModeNormalized, className: "Grid__Resetter", hasChildBoxes: true, gutterX: gutterXNormalized, gutterY: gutterYNormalized, alignX: alignXNormalized, alignY: alignYNormalized, media: media },
                React.createElement(Context.Provider, { value: {
                        cssMode: cssModeNormalized,
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

export { Box, Grid };
//# sourceMappingURL=index.es.js.map
