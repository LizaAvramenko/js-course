/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://typescript/./src/styles/styles.css?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var css = __webpack_require__(/*! ../styles/styles.css */ \"./src/styles/styles.css\");\r\n// 4.\r\nvar userName1 = prompt('Enter your name!');\r\nvar userSurname1 = prompt('Enter your surname! ');\r\nalert(userName1 + ' ' + userSurname1);\r\n//5\r\nfunction areaRectangle(width, length) {\r\n    var area = width * length;\r\n    return area;\r\n}\r\nvar width = 10.83;\r\nvar lengthRectangle = 8.45;\r\nalert('Area= ' + areaRectangle(width, lengthRectangle).toFixed(1));\r\n//6\r\nvar userName = prompt('Enter your name!');\r\nalert(\"Hello\" + ',' + \" \" + userName);\r\n// 7\r\nvar result = Math.pow(2, 5);\r\nconsole.log(result);\r\n//8\r\nvar MINIMUM_AGE = 20;\r\nvar userAge = Number(prompt('Enter your age!'));\r\nif (userAge <= MINIMUM_AGE) {\r\n    alert('Привет!');\r\n}\r\nif (userAge > MINIMUM_AGE) {\r\n    alert('Здравствуйте!');\r\n}\r\n// //9\r\nvar userAnswer = Number(prompt('Отгадайте загадку: В семье было два отца и два сына. Сколько это человек?'));\r\nvar requaredAnswer = 3;\r\nif (userAnswer == requaredAnswer) {\r\n    alert('Молодец! Правильный ответ');\r\n}\r\nelse {\r\n    alert('Неправильный ответ!');\r\n}\r\n//10 \r\nvar userPassword = prompt('Enter password');\r\nif ((userPassword.length >= 8) &&\r\n    (userPassword.length <= 20) &&\r\n    (userPassword.includes('@')) &&\r\n    (userPassword.includes('#')) &&\r\n    (userPassword.includes('$')) &&\r\n    (userPassword.includes('%'))) {\r\n    alert('Valid!');\r\n}\r\nelse {\r\n    alert('Not valid!');\r\n}\r\n//11\r\nvar userYear = Number(prompt('Введите год!'));\r\nif (userYear <= 0) {\r\n    alert('Число должно быть больше нуля');\r\n}\r\nelse if (userYear % 400 == 0) {\r\n    alert(' высокосный');\r\n}\r\nelse if (userYear % 4 == 0 && userYear % 100 != 0) {\r\n    alert('высокосный');\r\n}\r\nelse {\r\n    alert(' невысокосный ');\r\n}\r\n\n\n//# sourceURL=webpack://typescript/./src/ts/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;