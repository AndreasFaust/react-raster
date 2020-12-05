webpackHotUpdate_N_E("pages/test",{

/***/ "./raster/utils/getColsPercent.ts":
/*!****************************************!*\
  !*** ./raster/utils/getColsPercent.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getColsPercent; });\nfunction getColsPercent(_ref) {\n  var cols = _ref.cols,\n      left = _ref.left,\n      right = _ref.right,\n      parentCols = _ref.parentCols,\n      cssMode = _ref.cssMode;\n\n  if (cssMode === \"grid\") {\n    return cols.map(function (col, index) {\n      return col + left[index] + right[index];\n    });\n  }\n\n  return cols.map(function (col, index) {\n    return col * 100 / parentCols[index];\n  });\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmFzdGVyL3V0aWxzL2dldENvbHNQZXJjZW50LnRzP2ZkYmUiXSwibmFtZXMiOlsiZ2V0Q29sc1BlcmNlbnQiLCJjb2xzIiwibGVmdCIsInJpZ2h0IiwicGFyZW50Q29scyIsImNzc01vZGUiLCJtYXAiLCJjb2wiLCJpbmRleCJdLCJtYXBwaW5ncyI6IkFBUUE7QUFBQTtBQUFlLFNBQVNBLGNBQVQsT0FNSztBQUFBLE1BTGxCQyxJQUtrQixRQUxsQkEsSUFLa0I7QUFBQSxNQUpsQkMsSUFJa0IsUUFKbEJBLElBSWtCO0FBQUEsTUFIbEJDLEtBR2tCLFFBSGxCQSxLQUdrQjtBQUFBLE1BRmxCQyxVQUVrQixRQUZsQkEsVUFFa0I7QUFBQSxNQURsQkMsT0FDa0IsUUFEbEJBLE9BQ2tCOztBQUNsQixNQUFJQSxPQUFPLEtBQUssTUFBaEIsRUFBd0I7QUFDdEIsV0FBT0osSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOO0FBQUEsYUFBZ0JELEdBQUcsR0FBR0wsSUFBSSxDQUFDTSxLQUFELENBQVYsR0FBb0JMLEtBQUssQ0FBQ0ssS0FBRCxDQUF6QztBQUFBLEtBQVQsQ0FBUDtBQUNEOztBQUNELFNBQU9QLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNDLEdBQUQsRUFBTUMsS0FBTjtBQUFBLFdBQWlCRCxHQUFHLEdBQUcsR0FBUCxHQUFjSCxVQUFVLENBQUNJLEtBQUQsQ0FBeEM7QUFBQSxHQUFULENBQVA7QUFDRCIsImZpbGUiOiIuL3Jhc3Rlci91dGlscy9nZXRDb2xzUGVyY2VudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBQcm9wcyB7XG4gIGNvbHM6IG51bWJlcltdO1xuICBsZWZ0OiBudW1iZXJbXTtcbiAgcmlnaHQ6IG51bWJlcltdO1xuICBwYXJlbnRDb2xzOiBudW1iZXJbXTtcbiAgY3NzTW9kZTogXCJncmlkXCIgfCBcImZsZXhcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29sc1BlcmNlbnQoe1xuICBjb2xzLFxuICBsZWZ0LFxuICByaWdodCxcbiAgcGFyZW50Q29scyxcbiAgY3NzTW9kZSxcbn06IFByb3BzKTogbnVtYmVyW10ge1xuICBpZiAoY3NzTW9kZSA9PT0gXCJncmlkXCIpIHtcbiAgICByZXR1cm4gY29scy5tYXAoKGNvbCwgaW5kZXgpID0+IGNvbCArIGxlZnRbaW5kZXhdICsgcmlnaHRbaW5kZXhdKTtcbiAgfVxuICByZXR1cm4gY29scy5tYXAoKGNvbCwgaW5kZXgpID0+IChjb2wgKiAxMDApIC8gcGFyZW50Q29sc1tpbmRleF0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./raster/utils/getColsPercent.ts\n");

/***/ })

})