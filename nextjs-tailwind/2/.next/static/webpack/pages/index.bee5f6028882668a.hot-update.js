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

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n// import { Transition } from \"@headlessui/react\";\n// import { Link } from \"react-scroll\";\nvar Navbar = function() {\n    var Links = [\n        {\n            name: \"HOME\",\n            link: \"/\"\n        },\n        {\n            name: \"SERVICE\",\n            link: \"/\"\n        },\n        {\n            name: \"ABOUT\",\n            link: \"/\"\n        },\n        {\n            name: \"BLOG'S\",\n            link: \"/\"\n        },\n        {\n            name: \"CONTACT\",\n            link: \"/\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"shadow-md w-full fixed top-0 left-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md:flex items-center justify-between bg-white py-4 md:px-10 px-7\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-3xl text-indigo-600 mr-1 pt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ion-icon\", {\n                                name: \"logo-ionic\"\n                            }, void 0, false, {\n                                fileName: \"/Users/m/Desktop/dev/navbars/nextjs-tailwind/2/components/Navbar.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/m/Desktop/dev/navbars/nextjs-tailwind/2/components/Navbar.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, _this),\n                        \"Designer\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/m/Desktop/dev/navbars/nextjs-tailwind/2/components/Navbar.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: function() {\n                        return setOpen(!open);\n                    },\n                    className: \"text-3xl absolute right-8 top-6 cursor-pointer md:hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ion-icon\", {\n                        name: open ? \"close\" : \"menu\"\n                    }, void 0, false, {\n                        fileName: \"/Users/m/Desktop/dev/navbars/nextjs-tailwind/2/components/Navbar.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/m/Desktop/dev/navbars/nextjs-tailwind/2/components/Navbar.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in \".concat(open ? \"top-20 \" : \"top-[-490px]\"),\n                    children: Links.map(function(link) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"md:ml-8 text-xl md:my-0 my-7\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: link.link,\n                                className: \"text-gray-800 hover:text-gray-400 duration-500\",\n                                children: link.name\n                            }, void 0, false, {\n                                fileName: \"/Users/m/Desktop/dev/navbars/nextjs-tailwind/2/components/Navbar.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, _this)\n                        }, link.name, false, {\n                            fileName: \"/Users/m/Desktop/dev/navbars/nextjs-tailwind/2/components/Navbar.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/m/Desktop/dev/navbars/nextjs-tailwind/2/components/Navbar.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/m/Desktop/dev/navbars/nextjs-tailwind/2/components/Navbar.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/m/Desktop/dev/navbars/nextjs-tailwind/2/components/Navbar.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUEwQjtBQUMxQixrREFBa0Q7QUFDbEQsdUNBQXVDO0FBRXZDLElBQU1DLE1BQU0sR0FBRyxXQUFNO0lBQ25CLElBQUlDLEtBQUssR0FBRztRQUNWO1lBQUVDLElBQUksRUFBRSxNQUFNO1lBQUVDLElBQUksRUFBRSxHQUFHO1NBQUU7UUFDM0I7WUFBRUQsSUFBSSxFQUFFLFNBQVM7WUFBRUMsSUFBSSxFQUFFLEdBQUc7U0FBRTtRQUM5QjtZQUFFRCxJQUFJLEVBQUUsT0FBTztZQUFFQyxJQUFJLEVBQUUsR0FBRztTQUFFO1FBQzVCO1lBQUVELElBQUksRUFBRSxRQUFRO1lBQUVDLElBQUksRUFBRSxHQUFHO1NBQUU7UUFDN0I7WUFBRUQsSUFBSSxFQUFFLFNBQVM7WUFBRUMsSUFBSSxFQUFFLEdBQUc7U0FBRTtLQUMvQjtJQUNELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxxQ0FBcUM7a0JBQ2xELDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxrRUFBa0U7OzhCQUMvRSw4REFBQ0QsS0FBRztvQkFDRkMsU0FBUyxFQUFDLGtGQUNBOztzQ0FFViw4REFBQ0MsTUFBSTs0QkFBQ0QsU0FBUyxFQUFDLG9DQUFvQztzQ0FDbEQsNEVBQUNFLFVBQVE7Z0NBQUNMLElBQUksRUFBQyxZQUFZOzs7OztxQ0FBWTs7Ozs7aUNBQ2xDO3dCQUFBLFVBRVQ7Ozs7Ozt5QkFBTTs4QkFFTiw4REFBQ0UsS0FBRztvQkFDRkksT0FBTyxFQUFFOytCQUFNQyxPQUFPLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO3FCQUFBO29CQUM3QkwsU0FBUyxFQUFDLDBEQUEwRDs4QkFFcEUsNEVBQUNFLFVBQVE7d0JBQUNMLElBQUksRUFBRVEsSUFBSSxHQUFHLE9BQU8sR0FBRyxNQUFNOzs7Ozs2QkFBYTs7Ozs7eUJBQ2hEOzhCQUVOLDhEQUFDQyxJQUFFO29CQUNETixTQUFTLEVBQUUsOEpBQTZKLENBRXZLLE9BRENLLElBQUksR0FBRyxTQUFTLEdBQUcsY0FBYyxDQUNqQzs4QkFFRFQsS0FBSyxDQUFDVyxHQUFHLENBQUMsU0FBQ1QsSUFBSTs2Q0FDZCw4REFBQ1UsSUFBRTs0QkFBaUJSLFNBQVMsRUFBQyw4QkFBOEI7c0NBQzFELDRFQUFDUyxHQUFDO2dDQUNBQyxJQUFJLEVBQUVaLElBQUksQ0FBQ0EsSUFBSTtnQ0FDZkUsU0FBUyxFQUFDLGdEQUFnRDswQ0FFekRGLElBQUksQ0FBQ0QsSUFBSTs7Ozs7cUNBQ1I7MkJBTkdDLElBQUksQ0FBQ0QsSUFBSTs7OztpQ0FPYjtxQkFDTixDQUFDOzs7Ozt5QkFJQzs7Ozs7O2lCQUNEOzs7OzthQUNGLENBQ047QUFDSixDQUFDO0FBbERLRixLQUFBQSxNQUFNO0FBb0RaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGxldCBMaW5rcyA9IFtcbiAgICB7IG5hbWU6IFwiSE9NRVwiLCBsaW5rOiBcIi9cIiB9LFxuICAgIHsgbmFtZTogXCJTRVJWSUNFXCIsIGxpbms6IFwiL1wiIH0sXG4gICAgeyBuYW1lOiBcIkFCT1VUXCIsIGxpbms6IFwiL1wiIH0sXG4gICAgeyBuYW1lOiBcIkJMT0cnU1wiLCBsaW5rOiBcIi9cIiB9LFxuICAgIHsgbmFtZTogXCJDT05UQUNUXCIsIGxpbms6IFwiL1wiIH0sXG4gIF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbWQgdy1mdWxsIGZpeGVkIHRvcC0wIGxlZnQtMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctd2hpdGUgcHktNCBtZDpweC0xMCBweC03XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgZm9udC1bUG9wcGluc10gXG4gICAgICB0ZXh0LWdyYXktODAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtaW5kaWdvLTYwMCBtci0xIHB0LTJcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1pb25pY1wiPjwvaW9uLWljb24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIERlc2lnbmVyXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBhYnNvbHV0ZSByaWdodC04IHRvcC02IGN1cnNvci1wb2ludGVyIG1kOmhpZGRlblwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW9uLWljb24gbmFtZT17b3BlbiA/IFwiY2xvc2VcIiA6IFwibWVudVwifT48L2lvbi1pY29uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dWxcbiAgICAgICAgICBjbGFzc05hbWU9e2BtZDpmbGV4IG1kOml0ZW1zLWNlbnRlciBtZDpwYi0wIHBiLTEyIGFic29sdXRlIG1kOnN0YXRpYyBiZy13aGl0ZSBtZDp6LWF1dG8gei1bLTFdIGxlZnQtMCB3LWZ1bGwgbWQ6dy1hdXRvIG1kOnBsLTAgcGwtOSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbiAke1xuICAgICAgICAgICAgb3BlbiA/IFwidG9wLTIwIFwiIDogXCJ0b3AtWy00OTBweF1cIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAge0xpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17bGluay5uYW1lfSBjbGFzc05hbWU9XCJtZDptbC04IHRleHQteGwgbWQ6bXktMCBteS03XCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17bGluay5saW5rfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTQwMCBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7LyogPEJ1dHRvbj5cbiAgICAgICAgICBHZXQgU3RhcnRlZFxuICAgICAgICA8L0J1dHRvbj4gKi99XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsIkxpbmtzIiwibmFtZSIsImxpbmsiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiaW9uLWljb24iLCJvbkNsaWNrIiwic2V0T3BlbiIsIm9wZW4iLCJ1bCIsIm1hcCIsImxpIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});