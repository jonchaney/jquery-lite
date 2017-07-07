/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = (e) => {
  switch (typeof e) {
    case "string":
      return NodeList(e);
    case "function":
    case "object":
    default:
  }
  // console.log(typeof e);
  // return document.getElementsByTagName(e);
};

function NodeList(arg) {
  const nodeList = document.querySelectorAll(arg);
  const nodeArray = Array.from(nodeList);
  return new DOMNodeCollection(nodeArray);
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(node) {
    this.nodeCollection = node;
  }

  each(cb) {
    this.nodeCollection.forEach(cb);
  }

  html(string) {
    if (string) {
      for (let i = 0; i < this.nodeCollection.length; i++) {
        this.nodeCollection[i].innerHTML = string;
      }
    } else {
      return this.nodeCollection[0].innerHTML;
    }
  }

  empty() {
    for (let i = 0; i < this.nodeCollection.length; i++) {
      this.nodeCollection[i].innerHTML = "";
    }
  }

  append(children) {
    if (this.nodeCollection.length === 0) return;

    if (typeof children === 'object' &&
      !(children instanceof DOMNodeCollection)) {
        children = new DOMNodeCollection(children);
      }

    if (typeof children === 'string') {
      this.each(node => node.innerHTML += children);
    } else if (children instanceof DOMNodeCollection) {
      this.each(node => {
       children.each(childNode => {
         childNode.appendChild(childNode.cloneNode(true));
       });
     });
    }
    }

    addClass(newClass) {
      this.each(node => node.classList.add(newClass));
     }

    removeClass(newClass) {
      this.each(node => node.classList.remove(newClass));
     }

    attr(elem) {
      return this.nodeCollection[0].getAttribute(elem);
     }



}

// export default DOMNodeCollection;
module.exports = DOMNodeCollection;


/***/ })
/******/ ]);