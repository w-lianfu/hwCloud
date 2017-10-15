webpackHotUpdate(0,{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(27, function() {
			var newContent = __webpack_require__(27);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/ajax-loader.c5cd7.gif";

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/slick.b7c9e.woff";

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/slick.d41f5.ttf";

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/slick.f97e3.svg";

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(34);

var _reactSlick = __webpack_require__(111);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

__webpack_require__(131);

__webpack_require__(100);

__webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import '../../scss/slick.scss'
// import '../../scss/slick-theme.scss'


var CDCarousel = function (_Component) {
  _inherits(CDCarousel, _Component);

  function CDCarousel(props) {
    _classCallCheck(this, CDCarousel);

    return _possibleConstructorReturn(this, (CDCarousel.__proto__ || Object.getPrototypeOf(CDCarousel)).call(this, props));
  }

  _createClass(CDCarousel, [{
    key: 'render',
    value: function render() {

      var setting = {
        dots: true,
        infinite: true
        // autoplay: true
      };

      return _react2.default.createElement(
        _reactSlick2.default,
        setting,
        _react2.default.createElement(
          'div',
          { className: 'carousel-img' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/product' },
            _react2.default.createElement('img', { src: '/img/c01.jpg' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'carousel-img' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/product' },
            _react2.default.createElement('img', { src: '/img/c02.jpg' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'carousel-img' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/product' },
            _react2.default.createElement('img', { src: '/img/c03.jpg' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'carousel-img' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/product' },
            _react2.default.createElement('img', { src: '/img/c04.jpg' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'carousel-img' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/product' },
            _react2.default.createElement('img', { src: '/img/c05.jpg' })
          )
        )
      );
    }
  }]);

  return CDCarousel;
}(_react.Component);

exports.default = CDCarousel;

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/lianfu/Documents/hwCloud/node_modules/slick-carousel/slick/slick.scss Unexpected token (3:0)\nYou may need an appropriate loader to handle this file type.\n| /* Slider */\n| \n| .slick-slider {\n|     position: relative;\n|     display: block;");

/***/ }),

/***/ 133:
false,

/***/ 134:
false,

/***/ 135:
false,

/***/ 136:
false,

/***/ 137:
false,

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, "@charset 'UTF-8';\n/* Slider */\n.slick-loading .slick-list\n{\n    background: #fff url(" + __webpack_require__(101) + ") center center no-repeat;\n}\n\n/* Icons */\n@font-face\n{\n    font-family: 'slick';\n    font-weight: normal;\n    font-style: normal;\n\n    src: url(" + __webpack_require__(44) + ");\n    src: url(" + __webpack_require__(44) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(102) + ") format('woff'), url(" + __webpack_require__(103) + ") format('truetype'), url(" + __webpack_require__(104) + "#slick) format('svg');\n}\n/* Arrows */\n.slick-prev,\n.slick-next\n{\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus\n{\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before\n{\n    opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before\n{\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before\n{\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev\n{\n    left: -25px;\n}\n[dir='rtl'] .slick-prev\n{\n    right: -25px;\n    left: auto;\n}\n.slick-prev:before\n{\n    content: '\\2190';\n}\n[dir='rtl'] .slick-prev:before\n{\n    content: '\\2192';\n}\n\n.slick-next\n{\n    right: -25px;\n}\n[dir='rtl'] .slick-next\n{\n    right: auto;\n    left: -25px;\n}\n.slick-next:before\n{\n    content: '\\2192';\n}\n[dir='rtl'] .slick-next:before\n{\n    content: '\\2190';\n}\n\n/* Dots */\n.slick-dotted.slick-slider\n{\n    margin-bottom: 30px;\n}\n\n.slick-dots\n{\n    position: absolute;\n    bottom: -25px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n.slick-dots li\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n}\n.slick-dots li button\n{\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n    outline: none;\n}\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n    opacity: 1;\n}\n.slick-dots li button:before\n{\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: '\\2022';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before\n{\n    opacity: .75;\n    color: black;\n}\n", ""]);

// exports


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/slick.ced61.eot";

/***/ })

})