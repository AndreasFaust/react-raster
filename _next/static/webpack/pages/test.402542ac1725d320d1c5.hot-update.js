webpackHotUpdate_N_E("pages/test",{

/***/ "./raster/utils/getAlignmentXRest.ts":
/*!*******************************************!*\
  !*** ./raster/utils/getAlignmentXRest.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getAlignmentXRest; });\nfunction sumup(a, b, c) {\n  return a.map(function (el, i) {\n    return el + b[i] + c[i];\n  });\n}\n\nfunction getAlignmentXRest(_ref) {\n  var childBoxes = _ref.childBoxes,\n      alignX = _ref.alignX,\n      cssMode = _ref.cssMode,\n      cols = _ref.cols;\n  if (!childBoxes.length || cssMode === \"flex\") return null;\n\n  if (childBoxes.length === 1) {\n    return sumup(childBoxes[0].cols, childBoxes[0].left, childBoxes[0].right).map(function (width, index) {\n      return alignX[index] === \"center\" ? (cols[index] - width) / 2 : null;\n    });\n  }\n\n  var rest = childBoxes.map(function (childBox) {\n    return sumup(childBox.cols, childBox.left, childBox.right);\n  }).reduce(function (acc, currentValue, _, array) {\n    return acc.map(function (accWidth, index) {\n      return alignX[index] === \"center\" ? (cols[index] - (accWidth + currentValue[index])) / 2 : null;\n    });\n  });\n  console.log(rest);\n  return rest;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmFzdGVyL3V0aWxzL2dldEFsaWdubWVudFhSZXN0LnRzPzg4M2IiXSwibmFtZXMiOlsic3VtdXAiLCJhIiwiYiIsImMiLCJtYXAiLCJlbCIsImkiLCJnZXRBbGlnbm1lbnRYUmVzdCIsImNoaWxkQm94ZXMiLCJhbGlnblgiLCJjc3NNb2RlIiwiY29scyIsImxlbmd0aCIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaW5kZXgiLCJyZXN0IiwiY2hpbGRCb3giLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50VmFsdWUiLCJfIiwiYXJyYXkiLCJhY2NXaWR0aCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQU9BO0FBQUE7QUFBQSxTQUFTQSxLQUFULENBQWVDLENBQWYsRUFBNEJDLENBQTVCLEVBQXlDQyxDQUF6QyxFQUFnRTtBQUM5RCxTQUFPRixDQUFDLENBQUNHLEdBQUYsQ0FBTSxVQUFDQyxFQUFELEVBQUtDLENBQUw7QUFBQSxXQUFXRCxFQUFFLEdBQUdILENBQUMsQ0FBQ0ksQ0FBRCxDQUFOLEdBQVlILENBQUMsQ0FBQ0csQ0FBRCxDQUF4QjtBQUFBLEdBQU4sQ0FBUDtBQUNEOztBQUVjLFNBQVNDLGlCQUFULE9BS0w7QUFBQSxNQUpSQyxVQUlRLFFBSlJBLFVBSVE7QUFBQSxNQUhSQyxNQUdRLFFBSFJBLE1BR1E7QUFBQSxNQUZSQyxPQUVRLFFBRlJBLE9BRVE7QUFBQSxNQURSQyxJQUNRLFFBRFJBLElBQ1E7QUFDUixNQUFJLENBQUNILFVBQVUsQ0FBQ0ksTUFBWixJQUFzQkYsT0FBTyxLQUFLLE1BQXRDLEVBQThDLE9BQU8sSUFBUDs7QUFDOUMsTUFBSUYsVUFBVSxDQUFDSSxNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBQzNCLFdBQU9aLEtBQUssQ0FDVlEsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjRyxJQURKLEVBRVZILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0ssSUFGSixFQUdWTCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNNLEtBSEosQ0FBTCxDQUlMVixHQUpLLENBSUQsVUFBQ1csS0FBRCxFQUFnQkMsS0FBaEIsRUFBa0M7QUFDdEMsYUFBT1AsTUFBTSxDQUFDTyxLQUFELENBQU4sS0FBa0IsUUFBbEIsR0FBNkIsQ0FBQ0wsSUFBSSxDQUFDSyxLQUFELENBQUosR0FBY0QsS0FBZixJQUF3QixDQUFyRCxHQUF5RCxJQUFoRTtBQUNELEtBTk0sQ0FBUDtBQU9EOztBQUNELE1BQU1FLElBQUksR0FBR1QsVUFBVSxDQUNwQkosR0FEVSxDQUNOLFVBQUNjLFFBQUQ7QUFBQSxXQUFjbEIsS0FBSyxDQUFDa0IsUUFBUSxDQUFDUCxJQUFWLEVBQWdCTyxRQUFRLENBQUNMLElBQXpCLEVBQStCSyxRQUFRLENBQUNKLEtBQXhDLENBQW5CO0FBQUEsR0FETSxFQUVWSyxNQUZVLENBRUgsVUFBQ0MsR0FBRCxFQUFNQyxZQUFOLEVBQW9CQyxDQUFwQixFQUF1QkMsS0FBdkIsRUFBaUM7QUFDdkMsV0FBT0gsR0FBRyxDQUFDaEIsR0FBSixDQUFRLFVBQUNvQixRQUFELEVBQVdSLEtBQVg7QUFBQSxhQUNiUCxNQUFNLENBQUNPLEtBQUQsQ0FBTixLQUFrQixRQUFsQixHQUNJLENBQUNMLElBQUksQ0FBQ0ssS0FBRCxDQUFKLElBQWVRLFFBQVEsR0FBR0gsWUFBWSxDQUFDTCxLQUFELENBQXRDLENBQUQsSUFBbUQsQ0FEdkQsR0FFSSxJQUhTO0FBQUEsS0FBUixDQUFQO0FBS0QsR0FSVSxDQUFiO0FBU0FTLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxJQUFaO0FBQ0EsU0FBT0EsSUFBUDtBQUNEIiwiZmlsZSI6Ii4vcmFzdGVyL3V0aWxzL2dldEFsaWdubWVudFhSZXN0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRCb3hlczogeyBsZWZ0OiBudW1iZXJbXTsgcmlnaHQ6IG51bWJlcltdOyBjb2xzOiBudW1iZXJbXSB9W107XG4gIGNvbHM6IG51bWJlcltdO1xuICBhbGlnblg6IHN0cmluZ1tdO1xuICBjc3NNb2RlOiBcImZsZXhcIiB8IFwiZ3JpZFwiO1xufVxuXG5mdW5jdGlvbiBzdW11cChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICByZXR1cm4gYS5tYXAoKGVsLCBpKSA9PiBlbCArIGJbaV0gKyBjW2ldKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWxpZ25tZW50WFJlc3Qoe1xuICBjaGlsZEJveGVzLFxuICBhbGlnblgsXG4gIGNzc01vZGUsXG4gIGNvbHMsXG59OiBQcm9wcykge1xuICBpZiAoIWNoaWxkQm94ZXMubGVuZ3RoIHx8IGNzc01vZGUgPT09IFwiZmxleFwiKSByZXR1cm4gbnVsbDtcbiAgaWYgKGNoaWxkQm94ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHN1bXVwKFxuICAgICAgY2hpbGRCb3hlc1swXS5jb2xzLFxuICAgICAgY2hpbGRCb3hlc1swXS5sZWZ0LFxuICAgICAgY2hpbGRCb3hlc1swXS5yaWdodFxuICAgICkubWFwKCh3aWR0aDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gYWxpZ25YW2luZGV4XSA9PT0gXCJjZW50ZXJcIiA/IChjb2xzW2luZGV4XSAtIHdpZHRoKSAvIDIgOiBudWxsO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHJlc3QgPSBjaGlsZEJveGVzXG4gICAgLm1hcCgoY2hpbGRCb3gpID0+IHN1bXVwKGNoaWxkQm94LmNvbHMsIGNoaWxkQm94LmxlZnQsIGNoaWxkQm94LnJpZ2h0KSlcbiAgICAucmVkdWNlKChhY2MsIGN1cnJlbnRWYWx1ZSwgXywgYXJyYXkpID0+IHtcbiAgICAgIHJldHVybiBhY2MubWFwKChhY2NXaWR0aCwgaW5kZXgpID0+XG4gICAgICAgIGFsaWduWFtpbmRleF0gPT09IFwiY2VudGVyXCJcbiAgICAgICAgICA/IChjb2xzW2luZGV4XSAtIChhY2NXaWR0aCArIGN1cnJlbnRWYWx1ZVtpbmRleF0pKSAvIDJcbiAgICAgICAgICA6IG51bGxcbiAgICAgICk7XG4gICAgfSk7XG4gIGNvbnNvbGUubG9nKHJlc3QpO1xuICByZXR1cm4gcmVzdDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./raster/utils/getAlignmentXRest.ts\n");

/***/ })

})