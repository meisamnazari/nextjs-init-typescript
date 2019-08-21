webpackHotUpdate("static\\development\\pages\\user.js",{

/***/ "./src/actions/index.js":
false,

/***/ "./src/actions/userActions.js":
false,

/***/ "./src/components/reduxHOC.tsx":
/*!*************************************!*\
  !*** ./src/components/reduxHOC.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");






var _jsxFileName = "D:\\next-project\\src\\components\\reduxHOC.tsx";






var ReduxHOC = function ReduxHOC(Page) {
  var PageWrapper =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PageWrapper, _Component);

    function PageWrapper() {
      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PageWrapper);

      return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PageWrapper).apply(this, arguments));
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PageWrapper, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
          store: Object(redux__WEBPACK_IMPORTED_MODULE_8__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["default"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_8__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_9__["default"])),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Page, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        })));
      }
    }]);

    return PageWrapper;
  }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

  return PageWrapper;
};

/* harmony default export */ __webpack_exports__["default"] = (ReduxHOC);

/***/ })

})
//# sourceMappingURL=user.js.567ead713a1efea0561d.hot-update.js.map