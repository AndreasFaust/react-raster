import React, { useState, useEffect, useContext, useMemo } from 'react';
import styled, { css } from 'styled-components';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

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

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var Context = React.createContext();

var isArray = (function (prop) {
  if (!prop) return false;
  return prop.constructor === Array;
});

function addValues(_ref) {
  var array = _ref.array,
      breakpointsLength = _ref.breakpointsLength;
  var lastKnownValue = array[array.length - 1];

  while (array.length < breakpointsLength) {
    array.push(lastKnownValue);
  }

  return array;
}

function getArray(prop, defaultProp) {
  if (!prop) {
    if (isArray(defaultProp)) return defaultProp;
    return defaultProp ? [defaultProp] : [prop];
  }

  if (!isArray(prop)) return [prop];
  return prop;
}

var normalizeProps = (function (_ref2) {
  var prop = _ref2.prop,
      defaultProp = _ref2.defaultProp,
      breakpoints = _ref2.breakpoints;
  var breakpointsLength = breakpoints.length;
  var array = getArray(prop, defaultProp);
  if (array.length < breakpointsLength) array = addValues({
    array: array,
    breakpointsLength: breakpointsLength
  });
  if (array.length > breakpointsLength) array = array.splice(breakpointsLength);
  return array;
});

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      @media (min-width: ", "px)", " {\n        ", ";\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var getMediaQueries = (function (breakpoints) {
  var breakpointsLength = breakpoints.length;
  return breakpoints.map(function (bp, index) {
    var max = index !== breakpointsLength - 1 ? " and (max-width: ".concat(breakpoints[index + 1] - 1, "px)") : '';
    return function () {
      return css(_templateObject(), bp, max, css.apply(void 0, arguments));
    };
  });
});

var getAlign = (function (align, cssMode, hasChildBoxes) {
  return cssMode === 'grid' && hasChildBoxes ? align.map(function (al) {
    switch (al) {
      case 'left':
        return 'start';

      case 'right':
        return 'end';

      case 'top':
        return 'start';

      case 'bottom':
        return 'end';

      default:
        return al;
    }
  }) : align.map(function (al) {
    switch (al) {
      case 'left':
        return 'flex-start';

      case 'right':
        return 'flex-end';

      case 'top':
        return 'flex-start';

      case 'bottom':
        return 'flex-end';

      default:
        return al;
    }
  });
});

var useControl = function useControl(control) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  useEffect(function () {
    function onKeyup(event) {
      if (event.keyCode !== 27) return;
      setIsVisible(function (prevState) {
        return !prevState;
      });
    }

    if (!control) return;
    document.addEventListener('keyup', onKeyup);
    return function () {
      return document.removeEventListener('keyup', onKeyup);
    };
  }, []);
  return isVisible;
};

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ", "   \n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      align-items: ", ";\n      justify-content: ", ";    \n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["  \n  display: flex;\n  position: relative;\n  flex-wrap: wrap;\n  width: 100%;\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var InnerTag = function InnerTag(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement("div", {
    className: className
  }, children);
};

var StyledInner = styled(InnerTag)(_templateObject$1(), function (props) {
  return props.media.map(function (media, index) {
    return media(_templateObject2(), props.alignY[index], props.alignX[index]);
  });
});
var StyledInnerCustom = styled(StyledInner)(_templateObject3(), function (props) {
  return props.media.map(function (media, index) {
    return media(_templateObject4(), props.style[index]);
  });
});
var StyledInnerControl = styled('div')(_templateObject5(), function (props) {
  return props.controlColor;
});

var Inner = function Inner(_ref2) {
  var media = _ref2.media,
      className = _ref2.className,
      alignX = _ref2.alignX,
      alignY = _ref2.alignY,
      style = _ref2.style,
      controlIsVisible = _ref2.controlIsVisible,
      controlColor = _ref2.controlColor,
      children = _ref2.children,
      cssMode = _ref2.cssMode;
  if (cssMode === 'grid') return children;
  return React.createElement(StyledInnerCustom, {
    className: className,
    media: media,
    alignX: alignX,
    alignY: alignY,
    style: style
  }, controlIsVisible ? React.createElement(React.Fragment, null, React.createElement(StyledInnerControl, {
    controlColor: controlColor
  }), children) : children);
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n      width: calc(100% + (", "));\n      \n      margin-left: calc(-", " / 2);\n      margin-right: calc(-", " / 2);\n      margin-top: calc(-", " / 2);\n      margin-bottom: calc(-", " / 2);\n\n      align-items: ", ";\n      justify-content: ", ";    \n    "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["  \n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var ResetterTag = function ResetterTag(_ref) {
  var reset = _ref.reset,
      className = _ref.className,
      children = _ref.children;
  return React.createElement("div", {
    className: className
  }, children);
};

var StyledResetter = styled(ResetterTag)(_templateObject$2(), function (props) {
  return props.media.map(function (media, index) {
    return media(_templateObject2$1(), props.gutterX[index], props.gutterX[index], props.gutterX[index], props.gutterY[index], props.gutterY[index], function (props) {
      return props.alignY[index];
    }, function (props) {
      return props.alignX[index];
    });
  });
});

var Resetter = function Resetter(props) {
  if (props.cssMode === 'grid') return props.children;
  return props.hasChildBoxes ? React.createElement(StyledResetter, props) : props.children;
};

var useCssMode = (function (initialValue) {
  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      cssMode = _useState2[0],
      setCssMode = _useState2[1];

  useEffect(function () {
    if (cssMode) return;
    var supportsCSS = window.CSS && window.CSS.supports || window.supportsCSS || false;
    var supportsGrid = supportsCSS ? supportsCSS('grid-template-rows', 'none') : false;

    if (!supportsGrid) {
      setCssMode('flex');
    }
  }, []);
  return cssMode;
});

var Container = React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? 'div' : _ref$tag;
  return React.createElement(tag, {
    className: className,
    ref: ref
  }, children);
});

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n      position: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n      padding-top: ", ";\n      padding-bottom: ", ";\n      ", "\n    "]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: stretch;\n  box-sizing: border-box;\n\n  ", "\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n      position: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n      padding-top: ", ";\n      padding-bottom: ", ";\n      grid-column-gap: ", ";\n      grid-row-gap: ", ";\n      ", "\n      align-content: ", ";\n      align-items: ", ";\n      // justify-content: ", ";\n    "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  grid-auto-columns: ", "fr;\n  grid-auto-rows: min-content;\n  box-sizing: border-box;\n\n  ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var GridContainer = styled(Container)(_templateObject$3(), function (props) {
  return props.colspan;
}, function (props) {
  return props.colspan;
}, function (props) {
  return props.media.map(function (media, index) {
    return media(_templateObject2$2(), function (props) {
      return props.position[index];
    }, props.left[index], props.right[index], props.top[index], props.bottom[index], props.gutterX[index], props.gutterY[index], props.style[index], function (props) {
      return props.alignY[index];
    }, function (props) {
      return props.alignY[index];
    }, function (props) {
      return props.alignX[index];
    });
  });
});
var FlexContainer = styled(Container)(_templateObject3$1(), function (props) {
  return props.media.map(function (media, index) {
    return media(_templateObject4$1(), function (props) {
      return props.position[index];
    }, props.left[index], props.right[index], props.top[index], props.bottom[index], props.style[index]);
  });
});
var StyledContainer = React.forwardRef(function (props, ref) {
  if (props.cssMode === 'flex') {
    return React.createElement(FlexContainer, _extends({}, props, {
      ref: ref
    }));
  }

  return React.createElement(GridContainer, _extends({}, props, {
    ref: ref
  }));
});

var getReset = (function (hasChildBoxesFromProps, hasChildBoxesFromRegister) {
  if (typeof hasChildBoxesFromProps === 'boolean') return hasChildBoxesFromProps;
  return hasChildBoxesFromRegister;
});

var getColsPercent = (function (_ref) {
  var cols = _ref.cols,
      left = _ref.left,
      right = _ref.right,
      parent = _ref.parent,
      cssMode = _ref.cssMode;

  if (cssMode === 'grid') {
    return cols.map(function (col, index) {
      return col + left[index] + right[index];
    });
  }

  return cols.map(function (col, index) {
    return col * 100 / parent[index];
  });
});

var getMarginsPercent = (function (_ref) {
  var margin = _ref.margin,
      cols = _ref.cols,
      parent = _ref.parent,
      cssMode = _ref.cssMode,
      gutterX = _ref.gutterX;

  if (cssMode === 'grid') {
    return margin.map(function (mar, index) {
      return mar ? "calc(((100% + ".concat(gutterX[index], ") / ").concat(cols[index], ") * ").concat(mar, ")") : undefined;
    });
  }

  return margin.map(function (mar, index) {
    return mar ? "".concat(mar * 100 / parent[index], "%") : undefined;
  });
});

var mergeStyles = (function (style, inner, outer) {
  return style.map(function (s, i) {
    return outer[i] + inner[i] + s;
  });
});

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n      width: ", "%;\n      \n      padding-left: calc(", " / 2);\n      padding-right: calc(", " / 2);\n      padding-top: calc(", " / 2);\n      padding-bottom: calc(", " / 2);\n\n      margin-left: ", ";\n      margin-right: ", ";\n      margin-top: ", ";\n      margin-bottom: ", ";\n      ", "\n    "]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  \n  ", "\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      grid-column: auto / span ", ";\n      margin-left: ", ";\n      margin-right: ", ";\n      margin-top: ", ";\n      margin-bottom: ", ";\n      ", "\n\n      align-content: ", ";\n      align-items: ", ";\n      // justify-content: ", ";    \n    "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n      grid-template-columns: repeat(", ", 1fr);\n      grid-auto-columns: ", "fr;\n      grid-auto-rows: min-content;\n      grid-column-gap: ", ";\n      grid-row-gap: ", ";\n    "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: ", ";\n\n  ", "\n  ", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var GridContainer$1 = styled(Container)(_templateObject$4(), function (props) {
  return props.hasChildBoxes ? 'grid' : 'flex';
}, function (props) {
  return props.hasChildBoxes && props.media.map(function (media, index) {
    return media(_templateObject2$3(), function (props) {
      return props.colspan[index];
    }, function (props) {
      return props.colspan[index];
    }, props.gutterX[index], props.gutterY[index]);
  });
}, function (props) {
  return props.media.map(function (media, index) {
    return media(_templateObject3$2(), !props.colsNumber[index] ? 'display: none;' : '', props.cols[index], props.left[index], props.right[index], props.top[index], props.bottom[index], props.style[index], function (props) {
      return props.alignY[index];
    }, function (props) {
      return props.alignY[index];
    }, function (props) {
      return props.alignX[index];
    });
  });
});
var FlexContainer$1 = styled(Container)(_templateObject4$2(), function (props) {
  return props.media.map(function (media, index) {
    return media(_templateObject5$1(), props.cols[index], props.gutterX[index], props.gutterX[index], props.gutterY[index], props.gutterY[index], props.left[index], props.right[index], props.top[index], props.bottom[index], props.style[index]);
  });
});
var StyledContainer$1 = React.forwardRef(function (props, ref) {
  if (props.cssMode === 'flex') {
    return React.createElement(FlexContainer$1, _extends({}, props, {
      ref: ref
    }));
  }

  return React.createElement(GridContainer$1, _extends({}, props, {
    ref: ref
  }));
});

var Box = React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      cols = _ref.cols,
      alignX = _ref.alignX,
      alignY = _ref.alignY,
      children = _ref.children,
      left = _ref.left,
      right = _ref.right,
      top = _ref.top,
      bottom = _ref.bottom,
      style = _ref.style,
      styleInner = _ref.styleInner,
      styleOuter = _ref.styleOuter,
      hasChildBoxes = _ref.hasChildBoxes,
      refCallback = _ref.refCallback;

  var _useContext = useContext(Context),
      cssMode = _useContext.cssMode,
      breakpoints = _useContext.breakpoints,
      gutterX = _useContext.gutterX,
      gutterY = _useContext.gutterY,
      alignXContext = _useContext.alignX,
      alignYContext = _useContext.alignY,
      colspan = _useContext.colspan,
      parent = _useContext.parent,
      media = _useContext.media,
      controlIsVisible = _useContext.controlIsVisible,
      controlColor = _useContext.controlColor,
      register = _useContext.register;

  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      hasChildBoxesRegistered = _useState2[0],
      setHasChildBoxes = _useState2[1];

  var hasChildBoxesNormalized = useMemo(function () {
    return getReset(hasChildBoxes, hasChildBoxesRegistered);
  }, [hasChildBoxes, hasChildBoxesRegistered]);
  var alignXNormalized = useMemo(function () {
    return getAlign(normalizeProps({
      prop: alignX,
      defaultProp: alignXContext,
      breakpoints: breakpoints
    }), cssMode);
  }, [alignX, alignXContext, breakpoints, cssMode]);
  var alignYNormalized = useMemo(function () {
    return getAlign(normalizeProps({
      prop: alignY,
      defaultProp: alignYContext,
      breakpoints: breakpoints
    }), cssMode);
  }, [alignY, alignYContext, breakpoints, cssMode]);
  var leftNormalized = useMemo(function () {
    return normalizeProps({
      prop: left,
      breakpoints: breakpoints
    });
  }, [left, breakpoints]);
  var rightNormalized = useMemo(function () {
    return normalizeProps({
      prop: right,
      breakpoints: breakpoints
    });
  }, [right, breakpoints]);
  var topNormalized = useMemo(function () {
    return normalizeProps({
      prop: top,
      breakpoints: breakpoints
    });
  }, [top, breakpoints]);
  var bottomNormalized = useMemo(function () {
    return normalizeProps({
      prop: bottom,
      breakpoints: breakpoints
    });
  }, [bottom, breakpoints]);
  var colsNormalized = useMemo(function () {
    return normalizeProps({
      prop: cols,
      defaultProp: parent,
      breakpoints: breakpoints
    });
  }, [cols, parent, breakpoints]);
  var colsPercent = useMemo(function () {
    return getColsPercent({
      cols: colsNormalized,
      left: leftNormalized,
      right: rightNormalized,
      parent: parent,
      cssMode: cssMode
    });
  }, [colsNormalized, leftNormalized, rightNormalized, parent, cssMode]);
  var leftPercent = useMemo(function () {
    return getMarginsPercent({
      margin: leftNormalized,
      cols: colsPercent,
      gutterX: gutterX,
      parent: parent,
      cssMode: cssMode
    });
  }, [leftNormalized, colsPercent, gutterX, parent, cssMode]);
  var rightPercent = useMemo(function () {
    return getMarginsPercent({
      margin: rightNormalized,
      cols: colsPercent,
      gutterX: gutterX,
      parent: parent,
      cssMode: cssMode
    });
  }, [rightNormalized, colsPercent, gutterX, parent, cssMode]);
  var topPercent = useMemo(function () {
    return getMarginsPercent({
      margin: topNormalized,
      cols: colsPercent,
      gutterX: gutterX,
      parent: parent,
      cssMode: cssMode
    });
  }, [topNormalized, colsPercent, gutterX, parent, cssMode]);
  var bottomPercent = useMemo(function () {
    return getMarginsPercent({
      margin: bottomNormalized,
      cols: colsPercent,
      gutterX: gutterX,
      parent: parent,
      cssMode: cssMode
    });
  }, [bottomNormalized, colsPercent, gutterX, parent, cssMode]);
  var styleOuterNormalized = useMemo(function () {
    return normalizeProps({
      prop: styleOuter,
      breakpoints: breakpoints
    });
  }, [styleOuter, breakpoints]);
  var styleInnerNormalized = useMemo(function () {
    return normalizeProps({
      prop: styleInner,
      breakpoints: breakpoints
    });
  }, [styleInner, breakpoints]);
  var styleNormalized = useMemo(function () {
    return mergeStyles(normalizeProps({
      prop: style,
      breakpoints: breakpoints
    }), styleInnerNormalized, styleOuterNormalized);
  }, [style, breakpoints, styleInnerNormalized, styleOuterNormalized]);
  if (register) register();
  return React.createElement(StyledContainer$1, {
    cssMode: cssMode,
    breakpoints: breakpoints,
    className: classnames(['Box', className]),
    cols: colsPercent,
    colsNumber: colsNormalized,
    media: media,
    gutterX: gutterX,
    gutterY: gutterY,
    colspan: colsNormalized,
    hasChildBoxes: hasChildBoxesNormalized,
    alignX: alignXNormalized,
    alignY: alignYNormalized,
    left: leftPercent,
    right: rightPercent,
    top: topPercent,
    bottom: bottomPercent,
    style: cssMode === 'grid' ? styleNormalized : styleOuterNormalized,
    ref: ref
  }, React.createElement(Inner, {
    cssMode: cssMode,
    className: "Box__Inner",
    gutterX: gutterX,
    gutterY: gutterY,
    media: media,
    alignX: alignXNormalized,
    alignY: alignYNormalized,
    style: styleInnerNormalized,
    breakpoints: breakpoints,
    controlIsVisible: controlIsVisible,
    controlColor: controlColor
  }, React.createElement(Resetter, {
    cssMode: cssMode,
    className: "Box__Resetter",
    hasChildBoxes: hasChildBoxesNormalized,
    media: media,
    gutterX: gutterX,
    gutterY: gutterY,
    alignX: alignXNormalized,
    alignY: alignYNormalized,
    breakpoints: breakpoints
  }, React.createElement(Context.Provider, {
    value: {
      breakpoints: breakpoints,
      gutterX: gutterX,
      gutterY: gutterY,
      alignX: alignXNormalized,
      alignY: alignYNormalized,
      colspan: colspan,
      media: media,
      parent: colsNormalized,
      controlIsVisible: controlIsVisible,
      cssMode: cssMode,
      register: function register() {
        if (!hasChildBoxesRegistered) {
          setHasChildBoxes(true);
        }
      }
    }
  }, children))));
});
Box.displayName = 'Box';
Box.propTypes = {
  /**  Width of the Box. Falls back to width of parent Box or Grid. Unit: Grid columns defined with the prop "colspan" */
  cols: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.number]),

  /**  Left margin of the Box. Unit: Grid-columns. */
  left: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.number]),

  /**  Right margin of the Box. Unit: Grid-columns. */
  right: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.number]),

  /**  Top margin of the Box. Unit: Grid-columns. */
  top: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.number]),

  /**  Bottom margin of the Box. Unit: Grid-columns. */
  bottom: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.number]),

  /**  cssMode={flex} only! Horizontal Align of child elements. */
  alignX: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  Vertical Align of child elements. */
  alignY: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  cssMode={grid} only! Custom styles with styled-components. */
  style: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  cssMode={flex} only! Styles Box-Inner-Container with styled-components. */
  styleInner: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  cssMode={flex} only! Styles Box-Outer-Container with styled-components. */
  styleOuter: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  Tell react-raster that you have child-Boxes inside this Grid- or Box-Component. See the topic "Resetting Boxes" */
  hasChildBoxes: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node
};
Box.defaultProps = {
  className: '',
  cols: undefined,
  alignX: '',
  alignY: '',
  children: null,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  style: '',
  styleInner: '',
  styleOuter: '',
  hasChildBoxes: undefined
};

var styleOuter = "\n  width: 100%;\n  z-index: 10000;\n  left: 0; \n  top: 0; \n  bottom: 0;\n  margin: 0;\n";

var Control = function Control(props) {
  return React.createElement(Grid, _extends({}, props, {
    position: "absolute",
    className: "Grid--Control",
    alignY: "stretch",
    styleOuter: props.cssMode === 'grid' ? styleOuter : styleOuter + 'margin: 0;',
    styleInner: "\n        grid-auto-rows: auto;\n      "
  }), _toConsumableArray(Array(props.colspan)).map(function (col, index) {
    return React.createElement(Box, {
      key: index,
      cols: 1,
      styleInner: "\n            background-color: ".concat(props.controlColor, ";\n          ")
    });
  }));
};

var useCurrentBreakpoint = (function (breakpoints) {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentBp = _useState2[0],
      setCurrentBp = _useState2[1];

  useEffect(function () {
    function onResize() {
      var w = window.innerWidth;
      var bp = 0;
      breakpoints.forEach(function (breakpoint) {
        if (breakpoint <= w) {
          bp = breakpoint;
        }
      });
      setCurrentBp(bp);
    }

    onResize();
    window.addEventListener('resize', onResize);
    return function () {
      return window.removeEventListener('resize', onResize);
    };
  }, []);
  return currentBp;
});

var Grid = React.forwardRef(function (props, ref) {
  var breakpoints = props.breakpoints,
      left = props.left,
      right = props.right,
      top = props.top,
      bottom = props.bottom,
      gutterX = props.gutterX,
      gutterY = props.gutterY,
      alignX = props.alignX,
      alignY = props.alignY,
      colspan = props.colspan,
      control = props.control,
      controlColor = props.controlColor,
      position = props.position,
      className = props.className,
      style = props.style,
      styleInner = props.styleInner,
      styleOuter = props.styleOuter,
      children = props.children,
      cssMode = props.cssMode,
      tag = props.tag;
  var controlIsVisible = useControl(control);
  var cssModeNormalized = useCssMode(cssMode || 'grid');
  var breakpointsNormalized = useMemo(function () {
    return breakpoints;
  }, [breakpoints]);
  var currentBreakpoint = useCurrentBreakpoint(breakpointsNormalized);
  var gutterXNormalized = useMemo(function () {
    return normalizeProps({
      prop: gutterX,
      breakpoints: breakpointsNormalized
    });
  }, [gutterX, breakpointsNormalized]);
  var gutterYNormalized = useMemo(function () {
    return normalizeProps({
      prop: gutterY,
      breakpoints: breakpointsNormalized
    });
  }, [gutterY, breakpointsNormalized]);
  var alignXNormalized = useMemo(function () {
    return getAlign(normalizeProps({
      prop: alignX,
      breakpoints: breakpointsNormalized
    }), cssModeNormalized, true);
  }, [alignX, breakpointsNormalized, cssModeNormalized]);
  var alignYNormalized = useMemo(function () {
    return getAlign(normalizeProps({
      prop: alignY,
      breakpoints: breakpointsNormalized
    }), cssModeNormalized, true);
  }, [alignY, breakpointsNormalized, cssModeNormalized]);
  var media = useMemo(function () {
    return getMediaQueries(breakpointsNormalized);
  }, [breakpointsNormalized]);
  var parent = useMemo(function () {
    return normalizeProps({
      prop: colspan,
      breakpoints: breakpointsNormalized
    });
  }, [colspan, breakpointsNormalized]);
  var leftNormalized = useMemo(function () {
    return normalizeProps({
      prop: left,
      breakpoints: breakpointsNormalized
    });
  }, [left, breakpointsNormalized]);
  var rightNormalized = useMemo(function () {
    return normalizeProps({
      prop: right,
      breakpoints: breakpointsNormalized
    });
  }, [right, breakpointsNormalized]);
  var topNormalized = useMemo(function () {
    return normalizeProps({
      prop: top,
      breakpoints: breakpointsNormalized
    });
  }, [top, breakpointsNormalized]);
  var bottomNormalized = useMemo(function () {
    return normalizeProps({
      prop: bottom,
      breakpoints: breakpointsNormalized
    });
  }, [bottom, breakpointsNormalized]);
  var positionNormalized = useMemo(function () {
    return normalizeProps({
      prop: position,
      breakpoints: breakpointsNormalized
    });
  }, [position, breakpointsNormalized]);
  var styleOuterNormalized = useMemo(function () {
    return normalizeProps({
      prop: styleOuter,
      breakpoints: breakpoints
    });
  }, [styleOuter, breakpoints]);
  var styleInnerNormalized = useMemo(function () {
    return normalizeProps({
      prop: styleInner,
      breakpoints: breakpoints
    });
  }, [styleInner, breakpoints]);
  var styleNormalized = useMemo(function () {
    return mergeStyles(normalizeProps({
      prop: style,
      breakpoints: breakpoints
    }), styleInnerNormalized, styleOuterNormalized);
  }, [style, breakpoints, styleInnerNormalized, styleOuterNormalized]);
  return React.createElement(StyledContainer, {
    cssMode: cssModeNormalized,
    colspan: colspan,
    className: classnames(['Grid', "bp-".concat(currentBreakpoint), className]),
    gutterX: gutterXNormalized,
    gutterY: gutterYNormalized,
    alignX: alignXNormalized,
    alignY: alignYNormalized,
    media: media,
    left: leftNormalized,
    right: rightNormalized,
    top: topNormalized,
    bottom: bottomNormalized,
    position: positionNormalized,
    tag: tag,
    style: cssModeNormalized === 'grid' ? styleNormalized : styleOuterNormalized,
    ref: ref
  }, control && controlIsVisible && React.createElement(Control, {
    cssMode: cssModeNormalized,
    colspan: colspan,
    breakpoints: breakpoints,
    gutterX: gutterX,
    gutterY: gutterY,
    left: left,
    right: right,
    top: top,
    bottom: bottom,
    controlColor: controlColor
  }), React.createElement(Inner, {
    cssMode: cssModeNormalized,
    className: "Grid__Inner",
    gutterX: gutterXNormalized,
    gutterY: gutterYNormalized,
    alignX: alignXNormalized,
    alignY: alignYNormalized,
    media: media,
    style: styleInnerNormalized,
    controlColor: controlColor
  }, React.createElement(Resetter, {
    cssMode: cssModeNormalized,
    className: "Grid__Resetter",
    hasChildBoxes: true,
    gutterX: gutterXNormalized,
    gutterY: gutterYNormalized,
    alignX: alignXNormalized,
    alignY: alignYNormalized,
    media: media
  }, React.createElement(Context.Provider, {
    value: {
      cssMode: cssModeNormalized,
      breakpoints: breakpointsNormalized,
      gutterX: gutterXNormalized,
      gutterY: gutterYNormalized,
      alignX: alignXNormalized,
      alignY: alignYNormalized,
      media: media,
      colspan: colspan,
      parent: parent,
      controlIsVisible: controlIsVisible,
      controlColor: controlColor
    }
  }, children))));
});
Grid.propTypes = {
  /** Breakpoints in Pixels, in ascending order starting with zero. */
  breakpoints: propTypes.array,

  /** Number of columns. */
  colspan: propTypes.number,

  /**  Left padding of the Grid. */
  left: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  Right padding of the Grid. */
  right: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  Top padding of the Grid. */
  top: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  Bottom padding of the Grid. */
  bottom: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  Horizontal gutter. */
  gutterX: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  Verical gutter. */
  gutterY: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  Horizontal align of child elements. Works only when: cssMode={flex}  */
  alignX: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  Vertical align of child elements. */
  alignY: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  Enable visual control via ESC-Key. */
  control: propTypes.bool,

  /**  Custom color for the grid-control. */
  controlColor: propTypes.string,

  /**  CSS-position. */
  position: propTypes.oneOfType([propTypes.array, propTypes.string]),
  className: propTypes.string,

  /**  cssMode={grid} only! Custom styles with styled-components. */
  style: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  cssMode={flex} only! Styles Grid-Inner-Container with styled-components. */
  styleInner: propTypes.oneOfType([propTypes.array, propTypes.string]),

  /**  cssMode={flex} only! Styles Grid-Outer-Container with styled-components. */
  styleOuter: propTypes.oneOfType([propTypes.array, propTypes.string]),
  children: propTypes.node,

  /**  Use CSS Grid Layout or Flexbox. Override automatic detection of Grid-Layout-support. */
  cssMode: propTypes.string,
  tag: propTypes.string
  /**  cssMode={flex} only!  Tell react-raster that you have child-Boxes inside this Grid- or Box-Component. See the topic "Group Boxes inside custom components" for more information. If the Boxes are nested inside other components react-raster does not know, that you are sitll using its grid. */
  // reset: PropTypes.bool

};
Grid.defaultProps = {
  breakpoints: [0, 432, 768, 1024, 1200, 1400],
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',
  gutterX: '0',
  gutterY: '0',
  alignX: '',
  alignY: '',
  colspan: 1,
  control: false,
  controlColor: 'rgba(0, 0, 0, 0.1)',
  position: 'relative',
  style: '',
  styleOuter: '',
  styleInner: '',
  className: '',
  children: null,
  cssMode: undefined,
  tag: 'div' // reset: undefined

};

export { Box, Grid };
//# sourceMappingURL=index.es.js.map
