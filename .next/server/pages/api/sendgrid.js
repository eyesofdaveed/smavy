"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendgrid";
exports.ids = ["pages/api/sendgrid"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "(api)/./src/pages/api/sendgrid.js":
/*!***********************************!*\
  !*** ./src/pages/api/sendgrid.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey(process.env.SENDGRID_API_KEY);\nasync function sendEmail(req, res) {\n    console.log(req.body);\n    try {\n        await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send({\n            to: \"smavyip@gmail.com\",\n            from: \"smavyip@gmail.com\",\n            subject: `Новый запрос с сайта ${req.body.email}`,\n            html: `\n        <div>Имя: ${req.body.name}</div>\n        <div>Email: ${req.body.email}</div>\n        <div>Телефон: ${req.body.phone}</div>\n        <div>Направление: ${req.body.option}</div>\n      `\n        });\n    } catch (error) {\n        // console.log(error);\n        return res.status(error.statusCode || 500).json({\n            error: error.message\n        });\n    }\n    return res.status(200).json({\n        error: \"\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEmail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NlbmRncmlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0Q0EsK0RBQWtCLENBQUNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRWpELGVBQWVDLFNBQVMsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDakNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUk7UUFDRixNQUFNViwwREFBYSxDQUFDO1lBQ2xCWSxFQUFFLEVBQUUsbUJBQW1CO1lBQ3ZCQyxJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRVIsR0FBRyxDQUFDSSxJQUFJLENBQUNLLEtBQUssQ0FBQyxDQUFDO1lBQ2pEQyxJQUFJLEVBQUUsQ0FBQztrQkFDSyxFQUFFVixHQUFHLENBQUNJLElBQUksQ0FBQ08sSUFBSSxDQUFDO29CQUNkLEVBQUVYLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDSyxLQUFLLENBQUM7c0JBQ2YsRUFBRVQsR0FBRyxDQUFDSSxJQUFJLENBQUNRLEtBQUssQ0FBQzswQkFDYixFQUFFWixHQUFHLENBQUNJLElBQUksQ0FBQ1MsTUFBTSxDQUFDO01BQ3RDLENBQUM7U0FDRixDQUFDLENBQUM7S0FDSixDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNkLHNCQUFzQjtRQUN0QixPQUFPYixHQUFHLENBQUNjLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDRSxVQUFVLElBQUksR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFSCxLQUFLLEVBQUVBLEtBQUssQ0FBQ0ksT0FBTztTQUFFLENBQUMsQ0FBQztLQUMzRTtJQUVELE9BQU9qQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0UsSUFBSSxDQUFDO1FBQUVILEtBQUssRUFBRSxFQUFFO0tBQUUsQ0FBQyxDQUFDO0NBQzVDO0FBRUQsaUVBQWVmLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2l0ZWNrLy4vc3JjL3BhZ2VzL2FwaS9zZW5kZ3JpZC5qcz8yMGEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZW5kZ3JpZCBmcm9tIFwiQHNlbmRncmlkL21haWxcIjtcblxuc2VuZGdyaWQuc2V0QXBpS2V5KHByb2Nlc3MuZW52LlNFTkRHUklEX0FQSV9LRVkpO1xuXG5hc3luYyBmdW5jdGlvbiBzZW5kRW1haWwocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xuICB0cnkge1xuICAgIGF3YWl0IHNlbmRncmlkLnNlbmQoe1xuICAgICAgdG86IFwic21hdnlpcEBnbWFpbC5jb21cIixcbiAgICAgIGZyb206IFwic21hdnlpcEBnbWFpbC5jb21cIixcbiAgICAgIHN1YmplY3Q6IGDQndC+0LLRi9C5INC30LDQv9GA0L7RgSDRgSDRgdCw0LnRgtCwICR7cmVxLmJvZHkuZW1haWx9YCxcbiAgICAgIGh0bWw6IGBcbiAgICAgICAgPGRpdj7QmNC80Y86ICR7cmVxLmJvZHkubmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdj5FbWFpbDogJHtyZXEuYm9keS5lbWFpbH08L2Rpdj5cbiAgICAgICAgPGRpdj7QotC10LvQtdGE0L7QvTogJHtyZXEuYm9keS5waG9uZX08L2Rpdj5cbiAgICAgICAgPGRpdj7QndCw0L/RgNCw0LLQu9C10L3QuNC1OiAke3JlcS5ib2R5Lm9wdGlvbn08L2Rpdj5cbiAgICAgIGAsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKGVycm9yLnN0YXR1c0NvZGUgfHwgNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBlcnJvcjogXCJcIiB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VuZEVtYWlsO1xuIl0sIm5hbWVzIjpbInNlbmRncmlkIiwic2V0QXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlNFTkRHUklEX0FQSV9LRVkiLCJzZW5kRW1haWwiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInNlbmQiLCJ0byIsImZyb20iLCJzdWJqZWN0IiwiZW1haWwiLCJodG1sIiwibmFtZSIsInBob25lIiwib3B0aW9uIiwiZXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNDb2RlIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/sendgrid.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/sendgrid.js"));
module.exports = __webpack_exports__;

})();