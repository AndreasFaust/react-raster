webpackHotUpdate_N_E("pages/test",{

/***/ "./raster/utils/getAlignmentXRest.ts":
/*!*******************************************!*\
  !*** ./raster/utils/getAlignmentXRest.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getAlignmentXRest; });\nfunction sumup(a, b, c) {\n  return a.map(function (el, i) {\n    return el + b[i] + c[i];\n  });\n}\n\nfunction getAlignmentXRest(_ref) {\n  var childBoxes = _ref.childBoxes,\n      alignX = _ref.alignX,\n      cssMode = _ref.cssMode,\n      cols = _ref.cols;\n  if (!childBoxes.length || cssMode === \"flex\") return null;\n\n  if (childBoxes.length === 1) {\n    return sumup(childBoxes[0].cols, childBoxes[0].left, childBoxes[0].right).map(function (width, index) {\n      return alignX[index] === \"center\" ? (cols[index] - width) / 2 : null;\n    });\n  }\n\n  var rest = childBoxes.map(function (childBox) {\n    return sumup(childBox.cols, childBox.left, childBox.right);\n  }).reduce(function (acc, currentValue, _, array) {\n    return acc.map(function (accWidth, index) {\n      return alignX[index] === \"center\" ? (cols[index] - (accWidth + currentValue[index])) / 2 : null;\n    });\n  });\n  return rest;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmFzdGVyL3V0aWxzL2dldEFsaWdubWVudFhSZXN0LnRzPzg4M2IiXSwibmFtZXMiOlsic3VtdXAiLCJhIiwiYiIsImMiLCJtYXAiLCJlbCIsImkiLCJnZXRBbGlnbm1lbnRYUmVzdCIsImNoaWxkQm94ZXMiLCJhbGlnblgiLCJjc3NNb2RlIiwiY29scyIsImxlbmd0aCIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaW5kZXgiLCJyZXN0IiwiY2hpbGRCb3giLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50VmFsdWUiLCJfIiwiYXJyYXkiLCJhY2NXaWR0aCJdLCJtYXBwaW5ncyI6IkFBT0E7QUFBQTtBQUFBLFNBQVNBLEtBQVQsQ0FBZUMsQ0FBZixFQUE0QkMsQ0FBNUIsRUFBeUNDLENBQXpDLEVBQWdFO0FBQzlELFNBQU9GLENBQUMsQ0FBQ0csR0FBRixDQUFNLFVBQUNDLEVBQUQsRUFBS0MsQ0FBTDtBQUFBLFdBQVdELEVBQUUsR0FBR0gsQ0FBQyxDQUFDSSxDQUFELENBQU4sR0FBWUgsQ0FBQyxDQUFDRyxDQUFELENBQXhCO0FBQUEsR0FBTixDQUFQO0FBQ0Q7O0FBRWMsU0FBU0MsaUJBQVQsT0FLTDtBQUFBLE1BSlJDLFVBSVEsUUFKUkEsVUFJUTtBQUFBLE1BSFJDLE1BR1EsUUFIUkEsTUFHUTtBQUFBLE1BRlJDLE9BRVEsUUFGUkEsT0FFUTtBQUFBLE1BRFJDLElBQ1EsUUFEUkEsSUFDUTtBQUNSLE1BQUksQ0FBQ0gsVUFBVSxDQUFDSSxNQUFaLElBQXNCRixPQUFPLEtBQUssTUFBdEMsRUFBOEMsT0FBTyxJQUFQOztBQUM5QyxNQUFJRixVQUFVLENBQUNJLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0IsV0FBT1osS0FBSyxDQUNWUSxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNHLElBREosRUFFVkgsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjSyxJQUZKLEVBR1ZMLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY00sS0FISixDQUFMLENBSUxWLEdBSkssQ0FJRCxVQUFDVyxLQUFELEVBQWdCQyxLQUFoQixFQUFrQztBQUN0QyxhQUFPUCxNQUFNLENBQUNPLEtBQUQsQ0FBTixLQUFrQixRQUFsQixHQUE2QixDQUFDTCxJQUFJLENBQUNLLEtBQUQsQ0FBSixHQUFjRCxLQUFmLElBQXdCLENBQXJELEdBQXlELElBQWhFO0FBQ0QsS0FOTSxDQUFQO0FBT0Q7O0FBQ0QsTUFBTUUsSUFBSSxHQUFHVCxVQUFVLENBQ3BCSixHQURVLENBQ04sVUFBQ2MsUUFBRDtBQUFBLFdBQWNsQixLQUFLLENBQUNrQixRQUFRLENBQUNQLElBQVYsRUFBZ0JPLFFBQVEsQ0FBQ0wsSUFBekIsRUFBK0JLLFFBQVEsQ0FBQ0osS0FBeEMsQ0FBbkI7QUFBQSxHQURNLEVBRVZLLE1BRlUsQ0FFSCxVQUFDQyxHQUFELEVBQU1DLFlBQU4sRUFBb0JDLENBQXBCLEVBQXVCQyxLQUF2QixFQUFpQztBQUN2QyxXQUFPSCxHQUFHLENBQUNoQixHQUFKLENBQVEsVUFBQ29CLFFBQUQsRUFBV1IsS0FBWDtBQUFBLGFBQ2JQLE1BQU0sQ0FBQ08sS0FBRCxDQUFOLEtBQWtCLFFBQWxCLEdBQ0ksQ0FBQ0wsSUFBSSxDQUFDSyxLQUFELENBQUosSUFBZVEsUUFBUSxHQUFHSCxZQUFZLENBQUNMLEtBQUQsQ0FBdEMsQ0FBRCxJQUFtRCxDQUR2RCxHQUVJLElBSFM7QUFBQSxLQUFSLENBQVA7QUFLRCxHQVJVLENBQWI7QUFTQSxTQUFPQyxJQUFQO0FBQ0QiLCJmaWxlIjoiLi9yYXN0ZXIvdXRpbHMvZ2V0QWxpZ25tZW50WFJlc3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZEJveGVzOiB7IGxlZnQ6IG51bWJlcltdOyByaWdodDogbnVtYmVyW107IGNvbHM6IG51bWJlcltdIH1bXTtcbiAgY29sczogbnVtYmVyW107XG4gIGFsaWduWDogc3RyaW5nW107XG4gIGNzc01vZGU6IFwiZmxleFwiIHwgXCJncmlkXCI7XG59XG5cbmZ1bmN0aW9uIHN1bXVwKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gIHJldHVybiBhLm1hcCgoZWwsIGkpID0+IGVsICsgYltpXSArIGNbaV0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbGlnbm1lbnRYUmVzdCh7XG4gIGNoaWxkQm94ZXMsXG4gIGFsaWduWCxcbiAgY3NzTW9kZSxcbiAgY29scyxcbn06IFByb3BzKSB7XG4gIGlmICghY2hpbGRCb3hlcy5sZW5ndGggfHwgY3NzTW9kZSA9PT0gXCJmbGV4XCIpIHJldHVybiBudWxsO1xuICBpZiAoY2hpbGRCb3hlcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gc3VtdXAoXG4gICAgICBjaGlsZEJveGVzWzBdLmNvbHMsXG4gICAgICBjaGlsZEJveGVzWzBdLmxlZnQsXG4gICAgICBjaGlsZEJveGVzWzBdLnJpZ2h0XG4gICAgKS5tYXAoKHdpZHRoOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiBhbGlnblhbaW5kZXhdID09PSBcImNlbnRlclwiID8gKGNvbHNbaW5kZXhdIC0gd2lkdGgpIC8gMiA6IG51bGw7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgcmVzdCA9IGNoaWxkQm94ZXNcbiAgICAubWFwKChjaGlsZEJveCkgPT4gc3VtdXAoY2hpbGRCb3guY29scywgY2hpbGRCb3gubGVmdCwgY2hpbGRCb3gucmlnaHQpKVxuICAgIC5yZWR1Y2UoKGFjYywgY3VycmVudFZhbHVlLCBfLCBhcnJheSkgPT4ge1xuICAgICAgcmV0dXJuIGFjYy5tYXAoKGFjY1dpZHRoLCBpbmRleCkgPT5cbiAgICAgICAgYWxpZ25YW2luZGV4XSA9PT0gXCJjZW50ZXJcIlxuICAgICAgICAgID8gKGNvbHNbaW5kZXhdIC0gKGFjY1dpZHRoICsgY3VycmVudFZhbHVlW2luZGV4XSkpIC8gMlxuICAgICAgICAgIDogbnVsbFxuICAgICAgKTtcbiAgICB9KTtcbiAgcmV0dXJuIHJlc3Q7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./raster/utils/getAlignmentXRest.ts\n");

/***/ })

})