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

/***/ "./src/components/Navbars/TopNav.jsx":
/*!*******************************************!*\
  !*** ./src/components/Navbars/TopNav.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar TopNav = function(param) {\n    var style = param.style;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var sections = document.querySelectorAll(\"[data-scroll-index]\");\n        window.addEventListener(\"scroll\", function() {\n            sections.forEach(function(section) {\n                var index = section.getAttribute(\"data-scroll-index\");\n                var offset = section.offsetTop;\n                var height = section.offsetHeight;\n                var scroll = window.scrollY;\n                if (scroll + 200 > offset && scroll + 200 < offset + height) {\n                    var ref, ref1;\n                    (ref = document.querySelector('[data-scroll-nav=\"'.concat(index, '\"]'))) === null || ref === void 0 ? void 0 : (ref1 = ref.classList) === null || ref1 === void 0 ? void 0 : ref1.add(\"active\");\n                } else {\n                    var ref2, ref3;\n                    (ref2 = document.querySelector('[data-scroll-nav=\"'.concat(index, '\"]'))) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.classList) === null || ref3 === void 0 ? void 0 : ref3.remove(\"active\");\n                }\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"top-navbar style-\".concat(style),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"btn sm-butn bg-white py-0 px-2 me-2 fs-10px\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            className: \"fs-10px\",\n                            children: \"Акция\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/TopNav.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/TopNav.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/assets/img/icons/nav_icon/imoj_heart.png\",\n                        alt: \"\",\n                        className: \"icon-15 me-1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/TopNav.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"fs-10px op-6 me-1\",\n                        children: [\n                            \"Получи\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/TopNav.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        className: \"op-10 fs-10px\",\n                        children: \"20% скидки\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/TopNav.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"#contact\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"fs-10px text-decoration-underline ms-2\",\n                            children: \"Свяжись с нами\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/TopNav.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/TopNav.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/TopNav.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/TopNav.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dauitbek/Desktop/smavy/website/main-files/webapp/src/components/Navbars/TopNav.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(TopNav, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFOQSxLQUFBQSxNQUFNO0FBaURaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFycy9Ub3BOYXYuanN4PzljMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRvcE5hdiA9ICh7IHN0eWxlIH0pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2Nyb2xsLWluZGV4XVwiKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zY3JvbGwtaW5kZXhcIik7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc2VjdGlvbi5vZmZzZXRUb3A7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2VjdGlvbi5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGwgKyAyMDAgPiBvZmZzZXQgJiYgc2Nyb2xsICsgMjAwIDwgb2Zmc2V0ICsgaGVpZ2h0KSB7XHJcbiAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtc2Nyb2xsLW5hdj1cIiR7aW5kZXh9XCJdYClcclxuICAgICAgICAgICAgPy5jbGFzc0xpc3Q/LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNjcm9sbC1uYXY9XCIke2luZGV4fVwiXWApXHJcbiAgICAgICAgICAgID8uY2xhc3NMaXN0Py5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9wLW5hdmJhciBzdHlsZS0ke3N0eWxlfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4gc20tYnV0biBiZy13aGl0ZSBweS0wIHB4LTIgbWUtMiBmcy0xMHB4XCI+XHJcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmcy0xMHB4XCI+e1wi0JDQutGG0LjRj1wifTwvc21hbGw+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL25hdl9pY29uL2ltb2pfaGVhcnQucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi0xNSBtZS0xXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmcy0xMHB4IG9wLTYgbWUtMVwiPntcItCf0L7Qu9GD0YfQuFwifSA8L3NwYW4+XHJcbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwib3AtMTAgZnMtMTBweFwiPntcIjIwJSDRgdC60LjQtNC60LhcIn08L3NtYWxsPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIiNjb250YWN0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZzLTEwcHggdGV4dC1kZWNvcmF0aW9uLXVuZGVybGluZSBtcy0yXCI+XHJcbiAgICAgICAgICAgICAge1wi0KHQstGP0LbQuNGB0Ywg0YEg0L3QsNC80LhcIn1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwiVG9wTmF2Iiwic3R5bGUiLCJzZWN0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwic2VjdGlvbiIsImluZGV4IiwiZ2V0QXR0cmlidXRlIiwib2Zmc2V0Iiwib2Zmc2V0VG9wIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsIiwic2Nyb2xsWSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwic21hbGwiLCJpbWciLCJzcmMiLCJhbHQiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbars/TopNav.jsx\n"));

/***/ })

});