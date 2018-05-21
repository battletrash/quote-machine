"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var API = 'https://talaikis.com/api/quotes/random/';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.componentDidMount = _this.componentDidMount.bind(_this);
        _this.state = {
            quote: [],
            author: []
        };
        return _this;
    }

    _createClass(App, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            fetch(API).then(function (response) {
                return response.json();
            }).then(function (data) {
                return _this2.setState({
                    quote: data.quote,
                    author: data.author
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Random Quote Generator";
            var subtitle = "Just like every other one, but I made it in React.";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, {
                    title: title,
                    subtitle: subtitle
                }),
                React.createElement(Quote, {
                    rawQuote: this.state.quote,
                    rawAuthor: this.state.author,
                    refresh: this.componentDidMount
                })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

var Quote = function (_React$Component2) {
    _inherits(Quote, _React$Component2);

    function Quote() {
        _classCallCheck(this, Quote);

        return _possibleConstructorReturn(this, (Quote.__proto__ || Object.getPrototypeOf(Quote)).apply(this, arguments));
    }

    _createClass(Quote, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "\"",
                    this.props.rawQuote,
                    "\""
                ),
                React.createElement(
                    "h6",
                    null,
                    this.props.rawAuthor
                ),
                React.createElement(
                    "button",
                    { onClick: this.props.refresh },
                    "Get Quote"
                )
            );
        }
    }]);

    return Quote;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
