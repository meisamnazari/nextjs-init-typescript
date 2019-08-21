webpackHotUpdate("static\\development\\pages\\hook.js",{

/***/ "./pages/hook.tsx":
/*!************************!*\
  !*** ./pages/hook.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_reduxHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/reduxHOC */ "./src/components/reduxHOC.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _jsxFileName = "D:\\next-project\\pages\\hook.tsx";




var Hook = function Hook() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 1),
      count = _useState2[0];

  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  });
  console.log('user', user);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, count);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_components_reduxHOC__WEBPACK_IMPORTED_MODULE_2__["default"])(Hook));

/***/ })

})
//# sourceMappingURL=hook.js.059f19fc4eb3985d918f.hot-update.js.map