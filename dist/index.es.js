import React, { useRef, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';

var Context = React.createContext({
    breakpoint: 0,
});
function useRaster() {
    return React.useContext(Context);
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

function useCombinedRefs(ref) {
    var targetRef = React.useRef();
    React.useEffect(function () {
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
    React.useEffect(function () {
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

function useColspanEffective(cols, colspan, spacing) {
    return React.useMemo(function () {
        if (typeof cols === "number")
            return cols;
        var left = typeof spacing.left === "number" ? spacing.left : 0;
        var right = typeof spacing.right === "number" ? spacing.right : 0;
        return colspan - left - right;
    }, [cols, colspan, spacing.left, spacing.right]);
}

function convertStringToNumber(prop) {
    if (typeof prop !== "string")
        return prop;
    var parsed = +prop;
    if (Object.is(NaN, parsed))
        return prop;
    return parsed;
}
function getProp(prop, breakpoint) {
    if (!Array.isArray(prop)) {
        return prop;
    }
    if (prop.length >= breakpoint)
        return prop[breakpoint];
    return prop[prop.length - 1];
}
function normalizeProp(breakpoint, prop, defaultValue) {
    if (typeof prop === "undefined" || prop === null) {
        return defaultValue;
    }
    return convertStringToNumber(getProp(prop, breakpoint));
}
function useProp(breakpoint, prop, defaultValue) {
    var validProp = React.useMemo(function () { return normalizeProp(breakpoint, prop, defaultValue); }, [breakpoint, prop, defaultValue]);
    return validProp;
}

function convertIfNumber(string) {
    var parsed = +string;
    if (Object.is(NaN, parsed))
        return string;
    return parsed;
}

function getShortArray(spacing) {
    if (typeof spacing === "number") {
        return [spacing];
    }
    return spacing.split(" ").map(function (string) { return convertIfNumber(string); });
}
function getShortObject(spacing) {
    if (!spacing)
        return { top: null, bottom: null, left: null, right: null };
    var shortArray = getShortArray(spacing);
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
function useSpacingShort(breakpoint, spacing) {
    var spacingNormalized = useProp(breakpoint, spacing);
    var _a = React.useState(getShortObject(spacingNormalized)), spacingObject = _a[0], setSpacingObject = _a[1];
    React.useEffect(function () {
        setSpacingObject(getShortObject(spacingNormalized));
    }, [spacingNormalized]);
    return spacingObject;
}

function useSpacing(breakpoint, short, left, right, top, bottom) {
    var shortNormalized = useSpacingShort(breakpoint, short);
    var leftNormalized = useProp(breakpoint, left);
    var rightNormalized = useProp(breakpoint, right);
    var topNormalized = useProp(breakpoint, top);
    var bottomNormalized = useProp(breakpoint, bottom);
    return React.useMemo(function () { return ({
        left: (leftNormalized || shortNormalized.left),
        right: (rightNormalized || shortNormalized.right),
        top: (topNormalized || shortNormalized.top),
        bottom: (bottomNormalized || shortNormalized.bottom),
    }); }, [
        shortNormalized,
        leftNormalized,
        rightNormalized,
        topNormalized,
        bottomNormalized,
    ]);
}

function useColspan(colspanProps, colspanTotal, padding, colsEffective) {
    return React.useMemo(function () {
        if (colspanProps) {
            var left = typeof padding.left === "number" ? padding.left : 0;
            var right = typeof padding.right === "number" ? padding.right : 0;
            return colspanTotal - left - right;
        }
        return colsEffective;
    }, [colspanProps, colspanTotal, padding.left, padding.right]);
}

var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useBreakpoint(breakpoints, contextBreakpoint, propsBreakpoints, propsColspan) {
    var _a = React.useState(contextBreakpoint), currentBp = _a[0], setCurrentBp = _a[1];
    useIsomorphicLayoutEffect(function () {
        function onResize() {
            var w = window.innerWidth;
            var bp = breakpoints.findIndex(function (breakpoint) { return breakpoint > w; }) - 1;
            setCurrentBp(bp === -2 ? breakpoints.length - 1 : bp);
        }
        if (propsBreakpoints || propsColspan) {
            onResize();
            var dOnResize_1 = debounce(onResize, 100);
            window.addEventListener("resize", dOnResize_1);
            return function () { return window.removeEventListener("resize", dOnResize_1); };
        }
    }, []);
    React.useEffect(function () {
        if (propsBreakpoints || propsColspan)
            return;
        setCurrentBp(contextBreakpoint);
    }, [contextBreakpoint]);
    return currentBp;
}

function useDisplay(breakpoint, display, hasChildBoxes) {
    var displayNormalized = useProp(breakpoint, display);
    return displayNormalized || (hasChildBoxes ? "grid" : "block");
}

function getGapObject(gap) {
    if (!gap)
        return { row: null, column: null };
    var _a = gap.split(" "), row = _a[0], column = _a[1];
    return { row: row, column: column };
}
function useGapShort(breakpoint, gap) {
    var gapNormalized = useProp(breakpoint, gap);
    var _a = React.useState(getGapObject(gapNormalized)), gapObject = _a[0], setGapObject = _a[1];
    React.useEffect(function () {
        setGapObject(getGapObject(gapNormalized));
    }, [gapNormalized]);
    return gapObject;
}

function getGap(_a) {
    var contextGap = _a.contextGap, gap = _a.gap, gridGap = _a.gridGap, rowGap = _a.rowGap, columnGap = _a.columnGap, gridColumnGap = _a.gridColumnGap, gridRowGap = _a.gridRowGap;
    if (!gap &&
        !gridGap &&
        !rowGap &&
        !columnGap &&
        !gridColumnGap &&
        !gridRowGap) {
        return contextGap || { row: "0px", column: "0px" };
    }
    return {
        row: gridRowGap || rowGap || gap.row || gridGap.row || "0px",
        column: columnGap || gridColumnGap || gap.column || gridGap.column || "0px",
    };
}

var useGap = function (props) {
    var gap = useGapShort(props.breakpoint, props.propsGap);
    var gridGap = useGapShort(props.breakpoint, props.gridGap);
    var rowGap = useProp(props.breakpoint, props.rowGap);
    var columnGap = useProp(props.breakpoint, props.columnGap);
    var gridColumnGap = useProp(props.breakpoint, props.gridColumnGap);
    var gridRowGap = useProp(props.breakpoint, props.gridRowGap);
    return React.useMemo(function () {
        return getGap({
            contextGap: props.contextGap,
            gap: gap,
            gridGap: gridGap,
            rowGap: rowGap,
            columnGap: columnGap,
            gridColumnGap: gridColumnGap,
            gridRowGap: gridRowGap,
        });
    }, [
        props.contextGap,
        gap,
        gridGap,
        rowGap,
        columnGap,
        gridColumnGap,
        gridRowGap,
    ]);
};

function useBreakpoints(propsBreakpoints, contextBreakpoints) {
    var breakpoints = React.useState(propsBreakpoints || contextBreakpoints || [0, 432, 768, 1024, 1200, 1400])[0];
    return breakpoints;
}

function useSpacingValue(gap, colspan, prop, counterProp) {
    return React.useMemo(function () {
        switch (typeof prop) {
            case "number":
                if (counterProp) {
                    return "calc(((100% + " + gap + " - " + (typeof counterProp === "string" ? counterProp : "0px") + ") / " + colspan + ") * " + prop + ")";
                }
                return "calc(((100% + " + gap + ") / " + colspan + ") * " + prop + ")";
            default:
                return prop;
        }
    }, [gap, colspan, prop, counterProp]);
}
function useSpacingCSS(gap, colspan, spacing) {
    var left = useSpacingValue(gap.column, colspan, spacing.left, spacing.right);
    var right = useSpacingValue(gap.column, colspan, spacing.right, spacing.left);
    var top = useSpacingValue(gap.column, colspan, spacing.top, spacing.bottom);
    var bottom = useSpacingValue(gap.column, colspan, spacing.bottom, spacing.top);
    return { left: left, right: right, top: top, bottom: bottom };
}

function useNormalize(props, context, hasChildBoxes) {
    var breakpoints = useBreakpoints(props.breakpoints, context.breakpoints);
    var breakpoint = useBreakpoint(breakpoints, context.breakpoint, props.breakpoints, props.colspan);
    var display = useDisplay(breakpoint, props.display, hasChildBoxes);
    var gap = useGap({
        contextGap: context.gap,
        propsGap: props.gap,
        gridGap: props.gridGap,
        rowGap: props.rowGap,
        columnGap: props.columnGap,
        gridColumnGap: props.gridColumnGap,
        gridRowGap: props.gridRowGap,
        breakpoint: breakpoint,
    });
    var marginRaw = useSpacing(breakpoint, props.margin, props.marginLeft, props.marginRight, props.marginTop, props.marginBottom);
    var paddingRaw = useSpacing(breakpoint, props.padding, props.paddingLeft, props.paddingRight, props.paddingTop, props.paddingBottom);
    var colspanTotal = useProp(breakpoint, props.colspan || context.colspan || 1);
    var cols = useProp(breakpoint, props.cols);
    var colsEffective = useColspanEffective(cols, colspanTotal, paddingRaw);
    // this gets applied to StyledBox
    var colspan = useColspan(props.colspan, colspanTotal, paddingRaw, colsEffective);
    // this gets applied to StyledBox
    var colsTotal = useColspanEffective(cols, colspanTotal, marginRaw);
    var margin = useSpacingCSS(gap, colsTotal, marginRaw);
    var padding = useSpacingCSS(gap, colsTotal, paddingRaw);
    var styles = useProp(breakpoint, props.styles);
    var width = useProp(breakpoint, props.width);
    var minWidth = useProp(breakpoint, props.minWidth);
    var maxWidth = useProp(breakpoint, props.maxWidth);
    var height = useProp(breakpoint, props.height);
    var minHeight = useProp(breakpoint, props.minHeight);
    var maxHeight = useProp(breakpoint, props.maxHeight);
    var position = useProp(breakpoint, props.position, "relative");
    var zIndex = useProp(breakpoint, props.zIndex);
    var left = useProp(breakpoint, props.left);
    var right = useProp(breakpoint, props.right);
    var top = useProp(breakpoint, props.top);
    var bottom = useProp(breakpoint, props.bottom);
    var pointerEvents = useProp(breakpoint, props.pointerEvents);
    var cursor = useProp(breakpoint, props.cursor);
    var gridTemplateRows = useProp(breakpoint, props.gridTemplateRows);
    var gridColumn = useProp(breakpoint, props.gridColumn);
    var gridAutoRows = useProp(breakpoint, props.gridAutoRows);
    var gridTemplateColumns = useProp(breakpoint, props.gridTemplateColumns);
    var autoFlow = useProp(breakpoint, props.autoFlow);
    var order = useProp(breakpoint, props.order);
    var alignItems = useProp(breakpoint, props.alignItems);
    var alignContent = useProp(breakpoint, props.alignContent);
    var alignSelf = useProp(breakpoint, props.alignSelf);
    var justifyContent = useProp(breakpoint, props.justifyContent);
    var justifyItems = useProp(breakpoint, props.justifyItems);
    var justifySelf = useProp(breakpoint, props.justifySelf);
    var flexDirection = useProp(breakpoint, props.flexDirection);
    var flexWrap = useProp(breakpoint, props.flexWrap);
    var flexShrink = useProp(breakpoint, props.flexShrink);
    var flexGrow = useProp(breakpoint, props.flexGrow);
    var border = useProp(breakpoint, props.border);
    var borderLeft = useProp(breakpoint, props.borderLeft);
    var borderRight = useProp(breakpoint, props.borderRight);
    var borderTop = useProp(breakpoint, props.borderTop);
    var borderBottom = useProp(breakpoint, props.borderBottom);
    var background = useProp(breakpoint, props.background);
    var backgroundColor = useProp(breakpoint, props.backgroundColor);
    var backgroundImage = useProp(breakpoint, props.backgroundImage);
    var backgroundPosition = useProp(breakpoint, props.backgroundPosition);
    var backgroundAttachment = useProp(breakpoint, props.backgroundAttachment);
    var backgroundSize = useProp(breakpoint, props.backgroundSize);
    var filter = useProp(breakpoint, props.filter);
    var backdropFilter = useProp(breakpoint, props.backdropFilter);
    var mixBlendMode = useProp(breakpoint, props.mixBlendMode);
    var backgroundBlendMode = useProp(breakpoint, props.backgroundBlendMode);
    var textShadow = useProp(breakpoint, props.textShadow);
    var boxShadow = useProp(breakpoint, props.boxShadow);
    var textStroke = useProp(breakpoint, props.textStroke);
    var fontFamily = useProp(breakpoint, props.fontFamily);
    var fontSize = useProp(breakpoint, props.fontSize);
    var fontWeight = useProp(breakpoint, props.fontWeight);
    var fontStyle = useProp(breakpoint, props.fontStyle);
    var textAlign = useProp(breakpoint, props.textAlign);
    var color = useProp(breakpoint, props.color);
    var lineHeight = useProp(breakpoint, props.lineHeight);
    var letterSpacing = useProp(breakpoint, props.letterSpacing);
    var textDecoration = useProp(breakpoint, props.textDecoration);
    var hyphens = useProp(breakpoint, props.hyphens);
    var transform = useProp(breakpoint, props.transform);
    var transition = useProp(breakpoint, props.transition);
    var animation = useProp(breakpoint, props.animation);
    var opacity = useProp(breakpoint, props.opacity);
    var overflow = useProp(breakpoint, props.overflow);
    var overflowX = useProp(breakpoint, props.overflowX);
    var overflowY = useProp(breakpoint, props.overflowY);
    return {
        breakpoints: breakpoints,
        breakpoint: breakpoint,
        colsTotal: colsTotal,
        colspanTotal: colspanTotal,
        colspan: colspan,
        margin: margin,
        padding: padding,
        marginRaw: marginRaw,
        paddingRaw: paddingRaw,
        display: display,
        gap: gap,
        controlColor: props.controlColor || context.controlColor,
        styles: styles,
        width: width,
        minWidth: minWidth,
        maxWidth: maxWidth,
        height: height,
        minHeight: minHeight,
        maxHeight: maxHeight,
        position: position,
        zIndex: zIndex,
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        pointerEvents: pointerEvents,
        cursor: cursor,
        gridTemplateRows: gridTemplateRows,
        gridColumn: gridColumn,
        gridAutoRows: gridAutoRows,
        gridTemplateColumns: gridTemplateColumns,
        autoFlow: autoFlow,
        order: order,
        alignItems: alignItems,
        alignContent: alignContent,
        alignSelf: alignSelf,
        justifyContent: justifyContent,
        justifyItems: justifyItems,
        justifySelf: justifySelf,
        flexDirection: flexDirection,
        flexWrap: flexWrap,
        flexShrink: flexShrink,
        flexGrow: flexGrow,
        border: border,
        borderLeft: borderLeft,
        borderRight: borderRight,
        borderTop: borderTop,
        borderBottom: borderBottom,
        background: background,
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage,
        backgroundPosition: backgroundPosition,
        backgroundAttachment: backgroundAttachment,
        backgroundSize: backgroundSize,
        filter: filter,
        backdropFilter: backdropFilter,
        mixBlendMode: mixBlendMode,
        backgroundBlendMode: backgroundBlendMode,
        textShadow: textShadow,
        boxShadow: boxShadow,
        textStroke: textStroke,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontStyle: fontStyle,
        textAlign: textAlign,
        color: color,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
        textDecoration: textDecoration,
        hyphens: hyphens,
        transform: transform,
        transition: transition,
        animation: animation,
        opacity: opacity,
        overflow: overflow,
        overflowX: overflowX,
        overflowY: overflowY,
    };
}

var useControl = function (control, controlIsVisible) {
    var _a = React.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    React.useEffect(function () {
        setIsVisible(!!controlIsVisible);
    }, [controlIsVisible]);
    React.useEffect(function () {
        function onKeyup(event) {
            if (event.keyCode !== 27)
                return;
            setIsVisible(function (prevState) { return !prevState; });
        }
        if (control) {
            document.addEventListener("keyup", onKeyup);
            return function () { return document.removeEventListener("keyup", onKeyup); };
        }
    }, []);
    return isVisible;
};

function useUndefinedProps(props) {
    props.display; props.breakpoints; props.width; props.minWidth; props.maxWidth; props.height; props.minHeight; props.maxHeight; props.colspan; props.cols; props.margin; props.marginLeft; props.marginRight; props.marginTop; props.marginBottom; props.padding; props.paddingLeft; props.paddingRight; props.paddingTop; props.paddingBottom; props.gap; props.gridRowGap; props.rowGap; props.gridColumnGap; props.columnGap; props.gridTemplateRows; props.gridAutoRows; props.gridTemplateColumns; props.autoFlow; props.component; props.innerHTML; props.cursor; props.pointerEvents; props.onResize; props.onIntersect; props.root; props.rootMargin; props.threshold; props.styles; props.as; props.control; props.controlColor; props.order; props.position; props.zIndex; props.top; props.bottom; props.left; props.right; props.alignItems; props.alignContent; props.alignSelf; props.justifyContent; props.justifyItems; props.justifySelf; props.flexDirection; props.flexWrap; props.flexShrink; props.flexGrow; props.background; props.backgroundColor; props.backgroundImage; props.backgroundPosition; props.backgroundSize; props.backgroundAttachment; props.filter; props.backdropFilter; props.mixBlendMode; props.backgroundBlendMode; props.textShadow; props.boxShadow; props.textStroke; props.border; props.borderLeft; props.borderRight; props.borderTop; props.borderBottom; props.fontFamily; props.fontSize; props.fontWeight; props.fontStyle; props.textAlign; props.color; props.lineHeight; props.letterSpacing; props.textDecoration; props.hyphens; props.overflow; props.overflowX; props.overflowY; props.transition; props.animation; props.opacity; props.transform; props.className; props.children; props.isControl; props.ref; var rest = __rest(props, ["display", "breakpoints", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "colspan", "cols", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom", "padding", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "gap", "gridRowGap", "rowGap", "gridColumnGap", "columnGap", "gridTemplateRows", "gridAutoRows", "gridTemplateColumns", "autoFlow", "component", "innerHTML", "cursor", "pointerEvents", "onResize", "onIntersect", "root", "rootMargin", "threshold", "styles", "as", "control", "controlColor", "order", "position", "zIndex", "top", "bottom", "left", "right", "alignItems", "alignContent", "alignSelf", "justifyContent", "justifyItems", "justifySelf", "flexDirection", "flexWrap", "flexShrink", "flexGrow", "background", "backgroundColor", "backgroundImage", "backgroundPosition", "backgroundSize", "backgroundAttachment", "filter", "backdropFilter", "mixBlendMode", "backgroundBlendMode", "textShadow", "boxShadow", "textStroke", "border", "borderLeft", "borderRight", "borderTop", "borderBottom", "fontFamily", "fontSize", "fontWeight", "fontStyle", "textAlign", "color", "lineHeight", "letterSpacing", "textDecoration", "hyphens", "overflow", "overflowX", "overflowY", "transition", "animation", "opacity", "transform", "className", "children", "isControl", "ref"]);
    return rest;
}

function onIntersect(_a) {
    var ref = _a.ref, _b = _a.root, root = _b === void 0 ? null : _b, rootMargin = _a.rootMargin, _c = _a.threshold, threshold = _c === void 0 ? 0 : _c, onIntersect = _a.onIntersect;
    var observer = useRef(null);
    useEffect(function () {
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

var Container = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, component = _a.component, _b = _a.attrs, attrs = _b === void 0 ? {} : _b, _c = _a.tag, tag = _c === void 0 ? "div" : _c;
    if (component) {
        return React.cloneElement(component, __assign({ children: children, className: className }, attrs));
    }
    return React.createElement(tag, __assign(__assign({}, attrs), { className: className, ref: ref }), tag !== "img" && !attrs.dangerouslySetInnerHTML ? children : null);
});

var StyledBoxStyles = styled(Container)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) { return css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    position: ", ";\n    z-index: ", ";\n    display: ", ";\n    pointer-events: ", ";\n    cursor: ", ";\n\n    width: ", ";\n    min-width: ", ";\n    max-width: ", ";\n    height: ", ";\n    min-height: ", ";\n    max-height: ", ";\n\n    padding-left: ", ";\n    padding-right: ", ";\n    padding-top: ", ";\n    padding-bottom: ", ";\n\n    margin-left: ", ";\n    margin-right: ", ";\n    margin-top: ", ";\n    margin-bottom: ", ";\n\n    order: ", ";\n\n    top: ", ";\n    bottom: ", ";\n    left: ", ";\n    right: ", ";\n\n    align-items: ", ";\n    align-content: ", ";\n    align-self: ", ";\n    justify-content: ", ";\n    justify-items: ", ";\n    justify-self: ", ";\n\n    flex-direction: ", ";\n    flex-wrap: ", ";\n    flex-shrink: ", ";\n    flex-grow: ", ";\n\n    background: ", ";\n    background-color: ", ";\n    background-image: ", ";\n    background-position: ", ";\n    background-size: ", ";\n    background-attachment: ", ";\n\n    filter: ", ";\n    backdrop-filter: ", ";\n    mix-blend-mode: ", ";\n    background-blend-mode: ", ";\n    text-shadow: ", ";\n    box-shadow: ", ";\n    -webkit-text-stroke: ", ";\n    text-stroke: ", ";\n\n    border: ", ";\n    border-left: ", ";\n    border-right: ", ";\n    border-top: ", ";\n    border-bottom: ", ";\n\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    font-style: ", ";\n    text-align: ", ";\n    color: ", ";\n    line-height: ", ";\n    letter-spacing: ", ";\n    text-decoration: ", ";\n    hyphens: ", ";\n\n    transition: ", ";\n    transform: ", ";\n    animation: ", ";\n    opacity: ", ";\n\n    overflow: ", ";\n    overflow-x: ", ";\n    overflow-y: ", ";\n\n    ", "\n  "], ["\n    position: ", ";\n    z-index: ", ";\n    display: ", ";\n    pointer-events: ", ";\n    cursor: ", ";\n\n    width: ", ";\n    min-width: ", ";\n    max-width: ", ";\n    height: ", ";\n    min-height: ", ";\n    max-height: ", ";\n\n    padding-left: ", ";\n    padding-right: ", ";\n    padding-top: ", ";\n    padding-bottom: ", ";\n\n    margin-left: ", ";\n    margin-right: ", ";\n    margin-top: ", ";\n    margin-bottom: ", ";\n\n    order: ", ";\n\n    top: ", ";\n    bottom: ", ";\n    left: ", ";\n    right: ", ";\n\n    align-items: ", ";\n    align-content: ", ";\n    align-self: ", ";\n    justify-content: ", ";\n    justify-items: ", ";\n    justify-self: ", ";\n\n    flex-direction: ", ";\n    flex-wrap: ", ";\n    flex-shrink: ", ";\n    flex-grow: ", ";\n\n    background: ", ";\n    background-color: ", ";\n    background-image: ", ";\n    background-position: ", ";\n    background-size: ", ";\n    background-attachment: ", ";\n\n    filter: ", ";\n    backdrop-filter: ", ";\n    mix-blend-mode: ", ";\n    background-blend-mode: ", ";\n    text-shadow: ", ";\n    box-shadow: ", ";\n    -webkit-text-stroke: ", ";\n    text-stroke: ", ";\n\n    border: ", ";\n    border-left: ", ";\n    border-right: ", ";\n    border-top: ", ";\n    border-bottom: ", ";\n\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    font-style: ", ";\n    text-align: ", ";\n    color: ", ";\n    line-height: ", ";\n    letter-spacing: ", ";\n    text-decoration: ", ";\n    hyphens: ", ";\n\n    transition: ", ";\n    transform: ", ";\n    animation: ", ";\n    opacity: ", ";\n\n    overflow: ", ";\n    overflow-x: ", ";\n    overflow-y: ", ";\n\n    ", "\n  "])), props.position, props.zIndex, props.display, props.pointerEvents, props.cursor, props.width, props.minWidth, props.maxWidth, props.height, props.minHeight, props.maxHeight, props.padding.left, props.padding.right, props.padding.top, props.padding.bottom, props.margin.left, props.margin.right, props.margin.top, props.margin.bottom, props.order, props.top, props.bottom, props.left, props.right, props.alignItems, props.alignContent, props.alignSelf, props.justifyContent, props.justifyItems, props.justifySelf, props.flexDirection, props.flexWrap, props.flexShrink, props.flexGrow, props.background, props.backgroundColor, props.backgroundImage, props.backgroundPosition, props.backgroundSize, props.backgroundAttachment, props.filter, props.backdropFilter, props.mixBlendMode, props.backgroundBlendMode, props.textShadow, props.boxShadow, props.textStroke, props.textStroke, props.border, props.borderLeft, props.borderRight, props.borderTop, props.borderBottom, props.fontFamily, props.fontSize, props.fontWeight, props.fontStyle, props.textAlign, props.color, props.lineHeight, props.letterSpacing, props.textDecoration, props.hyphens, props.transition, props.transform, props.animation, props.opacity, props.overflow, props.overflowX, props.overflowY, props.styles ? props.styles : ""); }, function (props) {
    return props.display === "grid" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      grid-template-columns: repeat(", ", 1fr);\n\n      grid-auto-rows: ", ";\n      grid-template-rows: ", ";\n      grid-template-columns: ", ";\n      grid-auto-flow: ", ";\n\n      grid-gap: ", " ", ";\n\n      ", "\n    "], ["\n      grid-template-columns: repeat(", ", 1fr);\n\n      grid-auto-rows: ", ";\n      grid-template-rows: ", ";\n      grid-template-columns: ", ";\n      grid-auto-flow: ", ";\n\n      grid-gap: ", " ", ";\n\n      ", "\n    "])), props.colspan, props.gridAutoRows, props.gridTemplateRows, props.gridTemplateColumns, props.autoFlow, props.gap.row, props.gap.column, props.isControl && props.gap.column === "0px"
        ? "grid-column-gap: 1px;"
        : "");
}, function (props) {
    return props.display === "flex" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      gap: ", " ", ";\n    "], ["\n      gap: ", " ", ";\n    "])), props.gap.row, props.gap.column);
}, function (props) { return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    grid-column: auto / span ", ";\n    grid-column: ", ";\n  "], ["\n    grid-column: auto / span ", ";\n    grid-column: ", ";\n  "])), props.colsTotal, props.gridColumn); }, function (props) {
    return props.as === "img" &&
        props.controlIsVisible && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      box-shadow: 0 0 999em ", " inset;\n    "], ["\n      box-shadow: 0 0 999em ", " inset;\n    "])), props.controlColor);
});
var StyledBox = React.forwardRef(function (props, ref) {
    return React.createElement(StyledBoxStyles, __assign({}, props, { ref: ref }));
});
var StyledBox$1 = React.memo(StyledBox);
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

function getSideBearing(padding) {
    return typeof padding === "number" ? 0 : padding;
}
var ControlGrid = function (props) {
    var colspanTotal = props.colspanTotal;
    return (React.createElement(Box$1, { position: "absolute", className: "GridControl", zIndex: 1000, colspan: colspanTotal, gridColumnGap: props.gridColumnGap, gridAutoRows: "100%", top: 0, bottom: 0, left: 0, right: 0, marginLeft: getSideBearing(props.paddingRaw.left), marginRight: getSideBearing(props.paddingRaw.right), marginTop: getSideBearing(props.paddingRaw.top), marginBottom: getSideBearing(props.paddingRaw.bottom), pointerEvents: "none", isControl: true }, __spreadArray([], Array(colspanTotal)).map(function (_, index) { return (React.createElement(Box$1, { key: index, display: "flex", alignSelf: "stretch", cols: 1, backgroundColor: props.controlColor || "rgba(0,0,0,0.12)" })); })));
};
var ControlBox = styled("span")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  pointer-events: none;\n"], ["\n  position: absolute;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  pointer-events: none;\n"])), function (props) { return props.controlColor || "rgba(0,0,0,0.12)"; });
var Control = function (props) {
    return props.isNewGrid ? (React.createElement(ControlGrid, __assign({}, props))) : (React.createElement(ControlBox, { controlColor: props.controlColor }));
};
var templateObject_1;

var Box = React.forwardRef(function (props, ref) {
    var context = useContext(Context);
    var _a = React.useState(false), hasChildBoxes = _a[0], registerChildBox = _a[1];
    React.useEffect(function () {
        if (typeof context.registerChildBox === "function") {
            context.registerChildBox();
        }
    }, []);
    var propsNormalized = useNormalize(props, context, hasChildBoxes);
    var controlIsVisible = useControl(props.control, context.controlIsVisible);
    var boxRef = useCombinedRefs(ref);
    var undefinedProps = useUndefinedProps(props);
    var breakpoint = {
        index: propsNormalized.breakpoint + 1,
        value: propsNormalized.breakpoints[propsNormalized.breakpoint],
    };
    var defaultClass = "Box bp-" + breakpoint.value + " bp-" + breakpoint.index;
    useResizeObserver(boxRef, props.onResize);
    onIntersect({
        ref: boxRef,
        root: props.root,
        rootMargin: props.rootMargin,
        threshold: props.threshold,
        onIntersect: props.onIntersect,
    });
    return (React.createElement(StyledBox$1, __assign({}, propsNormalized, { tag: props.as, component: props.component, className: props.className
            ? [defaultClass, props.className].join(" ")
            : defaultClass, controlIsVisible: controlIsVisible, ref: boxRef, styles: propsNormalized.styles, isControl: props.isControl, attrs: __assign(__assign({}, undefinedProps), (props.innerHTML && {
            dangerouslySetInnerHTML: { __html: props.innerHTML },
        })) }),
        React.createElement(React.Fragment, null,
            controlIsVisible && (React.createElement(Control, __assign({ isNewGrid: !!props.colspan }, propsNormalized))),
            React.createElement(Context.Provider, { value: {
                    breakpoints: propsNormalized.breakpoints,
                    breakpoint: propsNormalized.breakpoint,
                    gap: propsNormalized.gap,
                    colspan: propsNormalized.colspan,
                    controlIsVisible: controlIsVisible,
                    controlColor: propsNormalized.controlColor,
                    registerChildBox: function () { return registerChildBox(true); },
                } }, props.children))));
});
Box.displayName = "Box";
var Box$1 = React.memo(Box);

export default Box$1;
export { useRaster };
//# sourceMappingURL=index.es.js.map
