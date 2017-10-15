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

__webpack_require__(131);

__webpack_require__(100);

__webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

/***/ })

})