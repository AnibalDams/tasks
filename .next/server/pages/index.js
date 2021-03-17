module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/theme.js":
/*!*****************************!*\
  !*** ./components/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ \"@fluentui/react\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fluentui_react___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react/ */ \"@fluentui/react/\");\n/* harmony import */ var _fluentui_react___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react___WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst theme = () => {\n  const myTheme = Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[\"createTheme\"])({\n    palette: {\n      themePrimary: '#d40000',\n      themeLighterAlt: '#fdf3f3',\n      themeLighter: '#f8d0d0',\n      themeLight: '#f2a9a9',\n      themeTertiary: '#e55c5c',\n      themeSecondary: '#d91a1a',\n      themeDarkAlt: '#be0000',\n      themeDark: '#a10000',\n      themeDarker: '#770000',\n      neutralLighterAlt: '#faf9f8',\n      neutralLighter: '#f3f2f1',\n      neutralLight: '#edebe9',\n      neutralQuaternaryAlt: '#e1dfdd',\n      neutralQuaternary: '#d0d0d0',\n      neutralTertiaryAlt: '#c8c6c4',\n      neutralTertiary: '#a19f9d',\n      neutralSecondary: '#605e5c',\n      neutralPrimaryAlt: '#3b3a39',\n      neutralPrimary: '#323130',\n      neutralDark: '#201f1e',\n      black: '#000000',\n      white: '#ffffff'\n    }\n  });\n  Object(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[\"loadTheme\"])(myTheme);\n  Object(_fluentui_react___WEBPACK_IMPORTED_MODULE_1__[\"initializeIcons\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RoZW1lLmpzP2Q0YzUiXSwibmFtZXMiOlsidGhlbWUiLCJteVRoZW1lIiwiY3JlYXRlVGhlbWUiLCJwYWxldHRlIiwidGhlbWVQcmltYXJ5IiwidGhlbWVMaWdodGVyQWx0IiwidGhlbWVMaWdodGVyIiwidGhlbWVMaWdodCIsInRoZW1lVGVydGlhcnkiLCJ0aGVtZVNlY29uZGFyeSIsInRoZW1lRGFya0FsdCIsInRoZW1lRGFyayIsInRoZW1lRGFya2VyIiwibmV1dHJhbExpZ2h0ZXJBbHQiLCJuZXV0cmFsTGlnaHRlciIsIm5ldXRyYWxMaWdodCIsIm5ldXRyYWxRdWF0ZXJuYXJ5QWx0IiwibmV1dHJhbFF1YXRlcm5hcnkiLCJuZXV0cmFsVGVydGlhcnlBbHQiLCJuZXV0cmFsVGVydGlhcnkiLCJuZXV0cmFsU2Vjb25kYXJ5IiwibmV1dHJhbFByaW1hcnlBbHQiLCJuZXV0cmFsUHJpbWFyeSIsIm5ldXRyYWxEYXJrIiwiYmxhY2siLCJ3aGl0ZSIsImxvYWRUaGVtZSIsImluaXRpYWxpemVJY29ucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQUs7QUFDakIsUUFBTUMsT0FBTyxHQUFHQyxtRUFBVyxDQUFDO0FBQzVCQyxXQUFPLEVBQUU7QUFDUEMsa0JBQVksRUFBRSxTQURQO0FBRVBDLHFCQUFlLEVBQUUsU0FGVjtBQUdQQyxrQkFBWSxFQUFFLFNBSFA7QUFJUEMsZ0JBQVUsRUFBRSxTQUpMO0FBS1BDLG1CQUFhLEVBQUUsU0FMUjtBQU1QQyxvQkFBYyxFQUFFLFNBTlQ7QUFPUEMsa0JBQVksRUFBRSxTQVBQO0FBUVBDLGVBQVMsRUFBRSxTQVJKO0FBU1BDLGlCQUFXLEVBQUUsU0FUTjtBQVVQQyx1QkFBaUIsRUFBRSxTQVZaO0FBV1BDLG9CQUFjLEVBQUUsU0FYVDtBQVlQQyxrQkFBWSxFQUFFLFNBWlA7QUFhUEMsMEJBQW9CLEVBQUUsU0FiZjtBQWNQQyx1QkFBaUIsRUFBRSxTQWRaO0FBZVBDLHdCQUFrQixFQUFFLFNBZmI7QUFnQlBDLHFCQUFlLEVBQUUsU0FoQlY7QUFpQlBDLHNCQUFnQixFQUFFLFNBakJYO0FBa0JQQyx1QkFBaUIsRUFBRSxTQWxCWjtBQW1CUEMsb0JBQWMsRUFBRSxTQW5CVDtBQW9CUEMsaUJBQVcsRUFBRSxTQXBCTjtBQXFCUEMsV0FBSyxFQUFFLFNBckJBO0FBc0JQQyxXQUFLLEVBQUU7QUF0QkE7QUFEbUIsR0FBRCxDQUEzQjtBQTBCQUMsbUVBQVMsQ0FBQ3pCLE9BQUQsQ0FBVDtBQUNBMEIsMEVBQWU7QUFDaEIsQ0E3QkQ7O0FBK0JlM0Isb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsb2FkVGhlbWUsIGNyZWF0ZVRoZW1lfSBmcm9tICdAZmx1ZW50dWkvcmVhY3QnXG5pbXBvcnQgeyBpbml0aWFsaXplSWNvbnMgfSBmcm9tICdAZmx1ZW50dWkvcmVhY3QvJztcblxuY29uc3QgdGhlbWUgPSAoKSA9PntcbiAgY29uc3QgbXlUaGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHRoZW1lUHJpbWFyeTogJyNkNDAwMDAnLFxuICAgIHRoZW1lTGlnaHRlckFsdDogJyNmZGYzZjMnLFxuICAgIHRoZW1lTGlnaHRlcjogJyNmOGQwZDAnLFxuICAgIHRoZW1lTGlnaHQ6ICcjZjJhOWE5JyxcbiAgICB0aGVtZVRlcnRpYXJ5OiAnI2U1NWM1YycsXG4gICAgdGhlbWVTZWNvbmRhcnk6ICcjZDkxYTFhJyxcbiAgICB0aGVtZURhcmtBbHQ6ICcjYmUwMDAwJyxcbiAgICB0aGVtZURhcms6ICcjYTEwMDAwJyxcbiAgICB0aGVtZURhcmtlcjogJyM3NzAwMDAnLFxuICAgIG5ldXRyYWxMaWdodGVyQWx0OiAnI2ZhZjlmOCcsXG4gICAgbmV1dHJhbExpZ2h0ZXI6ICcjZjNmMmYxJyxcbiAgICBuZXV0cmFsTGlnaHQ6ICcjZWRlYmU5JyxcbiAgICBuZXV0cmFsUXVhdGVybmFyeUFsdDogJyNlMWRmZGQnLFxuICAgIG5ldXRyYWxRdWF0ZXJuYXJ5OiAnI2QwZDBkMCcsXG4gICAgbmV1dHJhbFRlcnRpYXJ5QWx0OiAnI2M4YzZjNCcsXG4gICAgbmV1dHJhbFRlcnRpYXJ5OiAnI2ExOWY5ZCcsXG4gICAgbmV1dHJhbFNlY29uZGFyeTogJyM2MDVlNWMnLFxuICAgIG5ldXRyYWxQcmltYXJ5QWx0OiAnIzNiM2EzOScsXG4gICAgbmV1dHJhbFByaW1hcnk6ICcjMzIzMTMwJyxcbiAgICBuZXV0cmFsRGFyazogJyMyMDFmMWUnLFxuICAgIGJsYWNrOiAnIzAwMDAwMCcsXG4gICAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgfX0pO1xuXG4gIGxvYWRUaGVtZShteVRoZW1lKVxuICBpbml0aWFsaXplSWNvbnMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/theme.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/theme */ \"./components/theme.js\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ \"@fluentui/react\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/anibal/Desktop/task-app/pages/index.js\";\n\n\n\n\n\nconst options = [{\n  text: 'Title',\n  itemType: _fluentui_react__WEBPACK_IMPORTED_MODULE_5__[\"DropdownMenuItemType\"].Header\n}, {\n  text: '-',\n  itemType: _fluentui_react__WEBPACK_IMPORTED_MODULE_5__[\"DropdownMenuItemType\"].Divider\n}, {\n  text: 'New'\n}, {\n  text: 'All'\n}];\nfunction Home(props) {\n  Object(_components_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__[\"PrimaryButton\"], {\n      children: \"Hi\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__[\"Dropdown\"], {\n      style: {\n        width: 300\n      },\n      placeholder: \"select an aption\",\n      label: \"Dropdown\",\n      options: options\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 43\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIm9wdGlvbnMiLCJ0ZXh0IiwiaXRlbVR5cGUiLCJEcm9wZG93bk1lbnVJdGVtVHlwZSIsIkhlYWRlciIsIkRpdmlkZXIiLCJIb21lIiwicHJvcHMiLCJ0aGVtZSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLE9BQU8sR0FBRSxDQUNiO0FBQUVDLE1BQUksRUFBQyxPQUFQO0FBQWdCQyxVQUFRLEVBQUVDLG9FQUFvQixDQUFDQztBQUEvQyxDQURhLEVBRWI7QUFBQ0gsTUFBSSxFQUFDLEdBQU47QUFBV0MsVUFBUSxFQUFDQyxvRUFBb0IsQ0FBQ0U7QUFBekMsQ0FGYSxFQUdiO0FBQUNKLE1BQUksRUFBQztBQUFOLENBSGEsRUFJYjtBQUFDQSxNQUFJLEVBQUM7QUFBTixDQUphLENBQWY7QUFPZSxTQUFTSyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDbENDLG1FQUFLO0FBRUwsc0JBQ0k7QUFBQSw0QkFBRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFGLG9CQUFvQyxxRUFBQyx3REFBRDtBQUFVLFdBQUssRUFBRTtBQUFDQyxhQUFLLEVBQUM7QUFBUCxPQUFqQjtBQUE4QixpQkFBVyxFQUFDLGtCQUExQztBQUE2RCxXQUFLLEVBQUMsVUFBbkU7QUFBOEUsYUFBTyxFQUFFVDtBQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXBDO0FBQUEsa0JBREo7QUFHRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9jb21wb25lbnRzL3RoZW1lJ1xuaW1wb3J0IHtQcmltYXJ5QnV0dG9uLCBEcm9wZG93biwgRHJvcGRvd25NZW51SXRlbVR5cGV9IGZyb20gJ0BmbHVlbnR1aS9yZWFjdCdcblxuXG5jb25zdCBvcHRpb25zID1bXG4gIHsgdGV4dDonVGl0bGUnLCBpdGVtVHlwZTogRHJvcGRvd25NZW51SXRlbVR5cGUuSGVhZGVyfSxcbiAge3RleHQ6Jy0nLCBpdGVtVHlwZTpEcm9wZG93bk1lbnVJdGVtVHlwZS5EaXZpZGVyfSxcbiAge3RleHQ6J05ldyd9LFxuICB7dGV4dDonQWxsJ30sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgdGhlbWUoKVxuXG4gIHJldHVybiAoXG4gICAgICA8PjxQcmltYXJ5QnV0dG9uPkhpPC9QcmltYXJ5QnV0dG9uPiA8RHJvcGRvd24gc3R5bGU9e3t3aWR0aDozMDB9fSBwbGFjZWhvbGRlcj1cInNlbGVjdCBhbiBhcHRpb25cIiBsYWJlbD1cIkRyb3Bkb3duXCIgb3B0aW9ucz17b3B0aW9uc30vPjwvPlxuKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@fluentui/react":
/*!**********************************!*\
  !*** external "@fluentui/react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fluentui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZmx1ZW50dWkvcmVhY3RcIj9iYmFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBmbHVlbnR1aS9yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmbHVlbnR1aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@fluentui/react\n");

/***/ }),

/***/ "@fluentui/react/":
/*!***********************************!*\
  !*** external "@fluentui/react/" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fluentui/react/\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZmx1ZW50dWkvcmVhY3QvXCI/Y2IzYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAZmx1ZW50dWkvcmVhY3QvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZsdWVudHVpL3JlYWN0L1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@fluentui/react/\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });