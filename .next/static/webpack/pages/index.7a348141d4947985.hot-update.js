"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Navbars/AppNav/OnePageNav.jsx":
/*!******************************************************!*\
  !*** ./src/components/Navbars/AppNav/OnePageNav.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_scrollToSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/scrollToSection */ \"./src/common/scrollToSection.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar OnePageNav = function(param) {\n    var navbarRef = param.navbarRef;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var sections = document.querySelectorAll(\"[data-scroll-index]\");\n        window.addEventListener(\"scroll\", function() {\n            sections.forEach(function(section) {\n                var index = section.getAttribute(\"data-scroll-index\");\n                var offset = section.offsetTop;\n                var height = section.offsetHeight;\n                var scroll = window.scrollY;\n                if (scroll + 200 > offset && scroll + 200 < offset + height) {\n                    var ref, ref1;\n                    (ref = document.querySelector('[data-scroll-nav=\"'.concat(index, '\"]'))) === null || ref === void 0 ? void 0 : (ref1 = ref.classList) === null || ref1 === void 0 ? void 0 : ref1.add(\"active\");\n                } else {\n                    var ref2, ref3;\n                    (ref2 = document.querySelector('[data-scroll-nav=\"'.concat(index, '\"]'))) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.classList) === null || ref3 === void 0 ? void 0 : ref3.remove(\"active\");\n                }\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg navbar-light style-4\",\n        id: \"main-nav\",\n        ref: navbarRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"navbar-brand\",\n                    href: \"#\",\n                    \"data-scroll-nav\": \"0\",\n                    onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/assets/img/logo_lgr.png\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"navbar-toggler\",\n                    type: \"button\",\n                    \"data-bs-toggle\": \"collapse\",\n                    \"data-bs-target\": \"#navbarSupportedContent\",\n                    \"aria-controls\": \"navbarSupportedContent\",\n                    \"aria-expanded\": \"false\",\n                    \"aria-label\": \"Toggle navigation\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"navbar-toggler-icon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse\",\n                    id: \"navbarSupportedContent\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"navbar-nav m-auto mb-2 mb-lg-0 text-uppercase\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"#about\",\n                                    \"data-scroll-nav\": \"2\",\n                                    onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    children: \"О нас\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"#courses\",\n                                    \"data-scroll-nav\": \"1\",\n                                    onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    children: \"Курсы\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"#testimonials\",\n                                    \"data-scroll-nav\": \"5\",\n                                    onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    children: \"Отзывы\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"#price\",\n                                    \"data-scroll-nav\": \"6\",\n                                    onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    children: \"Прайс\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"#contact\",\n                                    \"data-scroll-nav\": \"8\",\n                                    onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    children: \"Контакты\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/AppNav/OnePageNav.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(OnePageNav, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = OnePageNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OnePageNav);\nvar _c;\n$RefreshReg$(_c, \"OnePageNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXJzL0FwcE5hdi9PbmVQYWdlTmF2LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFrQztBQUNMO0FBQ3lCOztBQUV0RCxJQUFNRyxVQUFVLEdBQUcsZ0JBQW1CO1FBQWhCQyxTQUFTLFNBQVRBLFNBQVM7O0lBQzdCSixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNSyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7UUFFakVDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFdBQU07WUFDdENKLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDLFNBQUNDLE9BQU8sRUFBSztnQkFDNUIsSUFBTUMsS0FBSyxHQUFHRCxPQUFPLENBQUNFLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztnQkFDdkQsSUFBTUMsTUFBTSxHQUFHSCxPQUFPLENBQUNJLFNBQVM7Z0JBQ2hDLElBQU1DLE1BQU0sR0FBR0wsT0FBTyxDQUFDTSxZQUFZO2dCQUNuQyxJQUFNQyxNQUFNLEdBQUdWLE1BQU0sQ0FBQ1csT0FBTztnQkFFN0IsSUFBSUQsTUFBTSxHQUFHLEdBQUcsR0FBR0osTUFBTSxJQUFJSSxNQUFNLEdBQUcsR0FBRyxHQUFHSixNQUFNLEdBQUdFLE1BQU0sRUFBRTt3QkFDM0RWLEdBQ2dEO29CQURoREEsQ0FBQUEsR0FDZ0QsR0FEaERBLFFBQVEsQ0FDTGMsYUFBYSxDQUFDLG9CQUFtQixDQUFRLE1BQUUsQ0FBUlIsS0FBSyxFQUFDLElBQUUsQ0FBQyxDQUFDLGNBRGhETixHQUNnRCxXQUNuQyxHQUZiQSxLQUFBQSxDQUVhLEdBRmJBLFFBQUFBLEdBQ2dELENBQzVDZSxTQUFTLGdDQUZiZixLQUFBQSxDQUVhLEdBRmJBLEtBRWVnQixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCLE1BQU07d0JBQ0xoQixJQUNnRDtvQkFEaERBLENBQUFBLElBQ2dELEdBRGhEQSxRQUFRLENBQ0xjLGFB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QkFBZSxFQUFDLEdBQUc7b0NBQ25CQyxPQUFPLEVBQUU5QiwrREFBZTs4Q0FFdkIsVUFBVTs7Ozs7eUNBQ1Q7Ozs7O3FDQUNEOzs7Ozs7NkJBQ0Y7Ozs7O3lCQUNEOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBM0dLQyxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUE2R2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFycy9BcHBOYXYvT25lUGFnZU5hdi5qc3g/ZTA3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc2Nyb2xsVG9TZWN0aW9uIGZyb20gXCJAY29tbW9uL3Njcm9sbFRvU2VjdGlvblwiO1xyXG5cclxuY29uc3QgT25lUGFnZU5hdiA9ICh7IG5hdmJhclJlZiB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNjcm9sbC1pbmRleF1cIik7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWN0aW9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2Nyb2xsLWluZGV4XCIpO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHNlY3Rpb24ub2Zmc2V0VG9wO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNlY3Rpb24ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsICsgMjAwID4gb2Zmc2V0ICYmIHNjcm9sbCArIDIwMCA8IG9mZnNldCArIGhlaWdodCkge1xyXG4gICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNjcm9sbC1uYXY9XCIke2luZGV4fVwiXWApXHJcbiAgICAgICAgICAgID8uY2xhc3NMaXN0Py5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zY3JvbGwtbmF2PVwiJHtpbmRleH1cIl1gKVxyXG4gICAgICAgICAgICA/LmNsYXNzTGlzdD8ucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2XHJcbiAgICAgIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBzdHlsZS00XCJcclxuICAgICAgaWQ9XCJtYWluLW5hdlwiXHJcbiAgICAgIHJlZj17bmF2YmFyUmVmfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgZGF0YS1zY3JvbGwtbmF2PVwiMFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb1NlY3Rpb259XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9sb2dvX2xnci5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXHJcbiAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXHJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtLWF1dG8gbWItMiBtYi1sZy0wIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI2Fib3V0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtc2Nyb2xsLW5hdj1cIjJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2Nyb2xsVG9TZWN0aW9ufVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcItCeINC90LDRgVwifVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjY291cnNlc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXNjcm9sbC1uYXY9XCIxXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvU2VjdGlvbn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XCLQmtGD0YDRgdGLXCJ9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiN0ZXN0aW1vbmlhbHNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1zY3JvbGwtbmF2PVwiNVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb1NlY3Rpb259XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1wi0J7RgtC30YvQstGLXCJ9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNwcmljZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXNjcm9sbC1uYXY9XCI2XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvU2VjdGlvbn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XCLQn9GA0LDQudGBXCJ9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNjb250YWN0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtc2Nyb2xsLW5hdj1cIjhcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2Nyb2xsVG9TZWN0aW9ufVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcItCa0L7QvdGC0LDQutGC0YtcIn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPbmVQYWdlTmF2O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiTGluayIsInNjcm9sbFRvU2VjdGlvbiIsIk9uZVBhZ2VOYXYiLCJuYXZiYXJSZWYiLCJzZWN0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwic2VjdGlvbiIsImluZGV4IiwiZ2V0QXR0cmlidXRlIiwib2Zmc2V0Iiwib2Zmc2V0VG9wIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsIiwic2Nyb2xsWSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuYXYiLCJjbGFzc05hbWUiLCJpZCIsInJlZiIsImRpdiIsImEiLCJocmVmIiwiZGF0YS1zY3JvbGwtbmF2Iiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsImJ1dHRvbiIsInR5cGUiLCJkYXRhLWJzLXRvZ2dsZSIsImRhdGEtYnMtdGFyZ2V0IiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJhcmlhLWxhYmVsIiwic3BhbiIsInVsIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbars/AppNav/OnePageNav.jsx\n"));

/***/ })

});