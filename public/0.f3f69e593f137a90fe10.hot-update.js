webpackHotUpdate(0,{

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

__webpack_require__(135);

__webpack_require__(136);

__webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import "slick-carousel/slick/slick.scss"
// import "slick-carousel/slick/slick-theme.css"


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

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, "/* Slider */\n.slick-slider {\n  position: relative;\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent; }\n\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0; }\n  .slick-list:focus {\n    outline: none; }\n  .slick-list.dragging {\n    cursor: pointer;\n    cursor: hand; }\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n  .slick-track:before, .slick-track:after {\n    content: \"\";\n    display: table; }\n  .slick-track:after {\n    clear: both; }\n  .slick-loading .slick-track {\n    visibility: hidden; }\n\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none; }\n  [dir=\"rtl\"] .slick-slide {\n    float: right; }\n  .slick-slide img {\n    display: block; }\n  .slick-slide.slick-loading img {\n    display: none; }\n  .slick-slide.dragging img {\n    pointer-events: none; }\n  .slick-initialized .slick-slide {\n    display: block; }\n  .slick-loading .slick-slide {\n    visibility: hidden; }\n  .slick-vertical .slick-slide {\n    display: block;\n    height: auto;\n    border: 1px solid transparent; }\n\n.slick-arrow.slick-hidden {\n  display: none; }\n", ""]);

// exports


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/* Slider */\n.slick-loading .slick-list {\n  background: #fff url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./ajax-loader.gif\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") center center no-repeat; }\n\n/* Icons */\n@font-face {\n  font-family: \"slick\";\n  src: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./fonts/slick.eot\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ");\n  src: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./fonts/slick.eot\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./fonts/slick.woff\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") format(\"woff\"), url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./fonts/slick.ttf\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") format(\"truetype\"), url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./fonts/slick.svg\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + "#slick) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n/* Arrows */\n.slick-prev,\n.slick-next {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  font-size: 0px;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding: 0;\n  border: none;\n  outline: none; }\n  .slick-prev:hover, .slick-prev:focus,\n  .slick-next:hover,\n  .slick-next:focus {\n    outline: none;\n    background: transparent;\n    color: transparent; }\n    .slick-prev:hover:before, .slick-prev:focus:before,\n    .slick-next:hover:before,\n    .slick-next:focus:before {\n      opacity: 1; }\n  .slick-prev.slick-disabled:before,\n  .slick-next.slick-disabled:before {\n    opacity: 0.25; }\n  .slick-prev:before,\n  .slick-next:before {\n    font-family: \"slick\";\n    font-size: 20px;\n    line-height: 1;\n    color: white;\n    opacity: 0.75;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n.slick-prev {\n  left: -25px; }\n  [dir=\"rtl\"] .slick-prev {\n    left: auto;\n    right: -25px; }\n  .slick-prev:before {\n    content: \"\\2190\"; }\n    [dir=\"rtl\"] .slick-prev:before {\n      content: \"\\2192\"; }\n\n.slick-next {\n  right: -25px; }\n  [dir=\"rtl\"] .slick-next {\n    left: -25px;\n    right: auto; }\n  .slick-next:before {\n    content: \"\\2192\"; }\n    [dir=\"rtl\"] .slick-next:before {\n      content: \"\\2190\"; }\n\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px; }\n\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  width: 100%; }\n  .slick-dots li {\n    position: relative;\n    display: inline-block;\n    height: 20px;\n    width: 20px;\n    margin: 0 5px;\n    padding: 0;\n    cursor: pointer; }\n    .slick-dots li button {\n      border: 0;\n      background: transparent;\n      display: block;\n      height: 20px;\n      width: 20px;\n      outline: none;\n      line-height: 0px;\n      font-size: 0px;\n      color: transparent;\n      padding: 5px;\n      cursor: pointer; }\n      .slick-dots li button:hover, .slick-dots li button:focus {\n        outline: none; }\n        .slick-dots li button:hover:before, .slick-dots li button:focus:before {\n          opacity: 1; }\n      .slick-dots li button:before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        content: \"\\2022\";\n        width: 20px;\n        height: 20px;\n        font-family: \"slick\";\n        font-size: 6px;\n        line-height: 20px;\n        text-align: center;\n        color: black;\n        opacity: 0.25;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale; }\n    .slick-dots li.slick-active button:before {\n      color: black;\n      opacity: 0.75; }\n", ""]);

// exports


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
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
		module.hot.accept(133, function() {
			var newContent = __webpack_require__(133);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
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
		module.hot.accept(134, function() {
			var newContent = __webpack_require__(134);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

})