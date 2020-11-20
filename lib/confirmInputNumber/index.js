import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import _createSuper from '@babel/runtime/helpers/esm/createSuper';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import { jsxs, jsx } from 'react/jsx-runtime';
import react, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classCallCheck from '@babel/runtime/helpers/classCallCheck';
import createClass from '@babel/runtime/helpers/createClass';
import possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import inherits from '@babel/runtime/helpers/inherits';
import _typeof from '@babel/runtime/helpers/typeof';
import objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _extends from '@babel/runtime/helpers/extends';
import isEqual from 'lodash/isEqual';
import { SelectMenu } from '../select';
import { InputActionButton } from '../numberInput';
import { setNumberValue, trimList, getOtherProps } from '../util';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

var reactEventListener_cjs = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _classCallCheck = _interopDefault(classCallCheck);
var _createClass = _interopDefault(createClass);
var _possibleConstructorReturn = _interopDefault(possibleConstructorReturn);
var _getPrototypeOf = _interopDefault(getPrototypeOf);
var _inherits = _interopDefault(inherits);
var _typeof$1 = _interopDefault(_typeof);
var _objectWithoutProperties = _interopDefault(objectWithoutProperties);
var _extends$1 = _interopDefault(_extends);
var React = _interopDefault(react);
var PropTypes$1 = _interopDefault(PropTypes);
var warning = _interopDefault(warning_1);

function defineProperty(object, property, attr) {
  return Object.defineProperty(object, property, attr);
} // Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js


var passiveOption = function () {
  var cache = null;
  return function () {
    if (cache !== null) {
      return cache;
    }

    var supportsPassiveOption = false;

    try {
      window.addEventListener('test', null, defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    } catch (err) {//
    }

    cache = supportsPassiveOption;
    return supportsPassiveOption;
  }();
}();

var defaultEventOptions = {
  capture: false,
  passive: false
};

function mergeDefaultEventOptions(options) {
  return _extends$1({}, defaultEventOptions, options);
}

function getEventListenerArgs(eventName, callback, options) {
  var args = [eventName, callback];
  args.push(passiveOption ? options : options.capture);
  return args;
}

function on(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function off(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function forEachListener(props, iteratee) {
  var children = props.children,
      target = props.target,
      eventProps = _objectWithoutProperties(props, ["children", "target"]);

  Object.keys(eventProps).forEach(function (name) {
    if (name.substring(0, 2) !== 'on') {
      return;
    }

    var prop = eventProps[name];

    var type = _typeof$1(prop);

    var isObject = type === 'object';
    var isFunction = type === 'function';

    if (!isObject && !isFunction) {
      return;
    }

    var capture = name.substr(-7).toLowerCase() === 'capture';
    var eventName = name.substring(2).toLowerCase();
    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

    if (isObject) {
      iteratee(eventName, prop.handler, prop.options);
    } else {
      iteratee(eventName, prop, mergeDefaultEventOptions({
        capture: capture
      }));
    }
  });
}

function withOptions(handler, options) {
  process.env.NODE_ENV !== "production" ? warning(options, 'react-event-listener: should be specified options in withOptions.') : void 0;
  return {
    handler: handler,
    options: mergeDefaultEventOptions(options)
  };
}

var EventListener =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(EventListener, _React$PureComponent);

  function EventListener() {
    _classCallCheck(this, EventListener);

    return _possibleConstructorReturn(this, _getPrototypeOf(EventListener).apply(this, arguments));
  }

  _createClass(EventListener, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.applyListeners(on);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.applyListeners(off, prevProps);
      this.applyListeners(on);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.applyListeners(off);
    }
  }, {
    key: "applyListeners",
    value: function applyListeners(onOrOff) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
      var target = props.target;

      if (target) {
        var element = target;

        if (typeof target === 'string') {
          element = window[target];
        }

        forEachListener(props, onOrOff.bind(null, element));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children || null;
    }
  }]);

  return EventListener;
}(React.PureComponent);

EventListener.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * You can provide a single child too.
   */
  children: PropTypes$1.node,

  /**
   * The DOM target to listen to.
   */
  target: PropTypes$1.oneOfType([PropTypes$1.object, PropTypes$1.string]).isRequired
} : {};

exports.withOptions = withOptions;
exports.default = EventListener;
});

var EventListener = unwrapExports(reactEventListener_cjs);
var reactEventListener_cjs_1 = reactEventListener_cjs.withOptions;

var LONG_PRESSED_THRESHOLD = 500;
var LONG_PRESSED_STEPPING_INTERVAL = 30;

var toFixed = function toFixed(num, precision) {
  return Number(Number(num).toFixed(precision));
};
/**
 * 根据按键来决定step大小
 *
 * @param {Event}
 * @param {Number} step
 * @return {Number} final step
 */


var getStep = function getStep(_ref) {
  var shiftKey = _ref.shiftKey,
      metaKey = _ref.metaKey;
  var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return shiftKey ? step * 10 : metaKey ? step * 100 : step;
};

var checkSettability = function checkSettability(value) {
  return value === '' || /^0?[\+\-]0*$/.test(value) // Starting with a plus/minus
  || /^[\+\-]?\d*\.$/.test(value) // Ending with a dot
  ;
};

var defaultOnFocus = function defaultOnFocus(_ref2) {
  var $input = _ref2.currentTarget;
  return setTimeout(function () {
    return $input.select();
  }, 50);
};

var ConfirmInputNumber = /*#__PURE__*/function (_PureComponent) {
  _inherits(ConfirmInputNumber, _PureComponent);

  var _super = _createSuper(ConfirmInputNumber);

  function ConfirmInputNumber() {
    var _this;

    _classCallCheck(this, ConfirmInputNumber);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      prevProps: _this.props,
      value: setNumberValue(_this.props.value),
      isHover: false,
      isActive: false,
      isValid: true,
      isMenuOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var value = e.target.value;

      _this.setValue(value.trim(), e);
    });

    _defineProperty(_assertThisInitialized(_this), "correctNumber", function (number) {
      var _this$props = _this.props,
          originalValue = _this$props.value,
          min = _this$props.min,
          max = _this$props.max,
          precision = _this$props.precision;
      var correctedNumber = toFixed(Math.min(Math.max(number, min), max), precision);
      return isNaN(correctedNumber) ? originalValue : correctedNumber;
    });

    _defineProperty(_assertThisInitialized(_this), "checkValidity", function (number) {
      return /^\+$/.test(number) ? _this.canBePositive : /^\-$/.test(number) ? _this.canBeNegative : number === '' || isFinite(number) && _this.correctNumber(number) === Number(number);
    });

    _defineProperty(_assertThisInitialized(_this), "setValue", function (v, e, callback) {
      if (e.persist) {
        e.persist();
      }

      var _this$props2 = _this.props,
          originalValue = _this$props2.value,
          parser = _this$props2.parser,
          placeholder = _this$props2.placeholder,
          onConfirm = _this$props2.onConfirm;
      var value = parser(v.toString()).toString();

      var isValid = _this.checkValidity(value);

      var isNumber = v !== '' && isFinite(value);
      var isSettable = checkSettability(value);
      if (!isNumber && !isSettable) return;

      var correctedNumber = _this.correctNumber(value);

      var finalNumber = isNaN(correctedNumber) ? originalValue : correctedNumber;
      var settingNumber = isSettable || !isValid ? value : finalNumber;

      _this.setState({
        value: settingNumber,
        isValid: isValid
      }, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "setConfirmedValue", function (v, e) {
      return _this.setValue(v, e, function () {
        return _this.onConfirm(e);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onConfirm", function (e) {
      var _this$props3 = _this.props,
          originalValue = _this$props3.value,
          precision = _this$props3.precision,
          onConfirm = _this$props3.onConfirm,
          shouldCorrectOnConfirm = _this$props3.shouldCorrectOnConfirm;
      var value = _this.state.value;

      var isValid = _this.checkValidity(value);

      var isDisabled = _this.props.isDisabled || _this.props.disabled;

      if (isDisabled) {
        return;
      }

      if (e.persist) {
        e.persist();
      }

      var correctedNumber = _this.correctNumber(value);

      var finalNumber = isNaN(correctedNumber) ? originalValue : correctedNumber;
      var settingNumber = value === '' ? originalValue : isValid ? /^[\+\-]$/.test(value) ? 0 : value : correctedNumber === toFixed(value, precision) ? correctedNumber : shouldCorrectOnConfirm ? finalNumber : originalValue || finalNumber;
      return _this.setState({
        value: settingNumber,
        isValid: true
      }, function () {
        return onConfirm(settingNumber, e);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "focusOnInput", function (e) {
      try {
        var $input = e.currentTarget.closest('label').querySelector('input');
        setTimeout(function () {
          return $input.focus();
        });
      } catch (e) {
        /* eslint-disable-next-line no-console */
        console.error(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onStep", function (e) {
      e.persist();
      e.nativeEvent.stopPropagation();
      var action = e.currentTarget.dataset.action;
      var step = getStep(e, _this.props.step) * (action === 'up' ? 1 : -1);

      _this.setConfirmedValue(_this.correctNumber(Number(_this.state.value) + step), e);

      _this.focusOnInput(e); // 长按500毫秒后，进入递增/减模式


      Object.assign(_assertThisInitialized(_this), {
        longPressedTimeout: setTimeout(function () {
          return Object.assign(_assertThisInitialized(_this), {
            steppingInterval: setInterval(function () {
              return _this.setConfirmedValue(_this.correctNumber(Number(_this.state.value) + step), e);
            }, LONG_PRESSED_STEPPING_INTERVAL)
          });
        }, LONG_PRESSED_THRESHOLD)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onRelease", function () {
      clearTimeout(_this.longPressedTimeout);
      clearInterval(_this.steppingInterval);
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      var key = e.key,
          currentTarget = e.currentTarget;
      var action = key === 'ArrowUp' ? 'up' : key === 'ArrowDown' ? 'down' : key === 'Enter' ? 'enter' : key === 'Tab' ? 'tab' : null;
      var isOn$input = currentTarget instanceof Element && currentTarget.matches('input');
      if (!action) return;

      if (e.persist) {
        e.persist();
      }

      if (action !== 'tab') {
        e.preventDefault();
      }

      if (isOn$input && action === 'tab') {
        _this.setInactive();

        return _this.onConfirm(e);
      } else if (isOn$input && action === 'enter') {
        _this.onConfirm(e);

        _this.$label.querySelector('input').select();

        return;
      }

      if (isOn$input) {
        var step = getStep(e, _this.props.step) * (action === 'up' ? 1 : -1);

        _this.setConfirmedValue(_this.correctNumber(Number(_this.state.value) + step), e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "set$label", function ($label) {
      return Object.assign(_assertThisInitialized(_this), {
        $label: $label
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setActive", function () {
      return _this.setState({
        isActive: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setInactive", function () {
      return _this.setState({
        isActive: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onHover", function () {
      return _this.setState({
        isHover: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLeave", function () {
      return _this.setState({
        isHover: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMenu", function () {
      return _this.setState({
        isMenuOpen: !_this.state.isMenuOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      return _this.setState({
        isMenuOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (e) {
      e.persist();
      var $opt = e.currentTarget;

      _this.setConfirmedValue($opt.dataset.value, e);

      _this.closeMenu();
    });

    _defineProperty(_assertThisInitialized(_this), "onClickOutside", function (e) {
      var target = e.target;

      if (!(target.closest('label') && _this.$label.contains(target))) {
        _this.onConfirm(e);

        _this.setInactive();
      }
    });

    return _this;
  }

  _createClass(ConfirmInputNumber, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.positionEverything();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref3) {
      var prevTitle = _ref3.title,
          prevPrefix = _ref3.prefix,
          prevSuffix = _ref3.suffix;
      var _this$props4 = this.props,
          title = _this$props4.title,
          prefix = _this$props4.prefix,
          suffix = _this$props4.suffix;

      if (!isEqual(prevTitle, title) || !isEqual(prevPrefix, prefix) || !isEqual(prevSuffix, suffix)) {
        this.positionEverything();
      }
    }
  }, {
    key: "positionEverything",
    value: function positionEverything() {
      var $label = this.$label;
      var _this$props5 = this.props,
          value = _this$props5.value,
          title = _this$props5.title,
          prefix = _this$props5.prefix,
          suffix = _this$props5.suffix;
      var isValid = this.checkValidity(value);
      this.setState({
        isValid: isValid
      });
      if (!title && !prefix && !suffix) return;
      var $input = $label.querySelector('input');
      var $action = $label.querySelector('.action');
      var $title = $label.querySelector('.title');
      var $prefix = $label.querySelector('.prefix');
      var $suffix = $label.querySelector('.suffix span');
      $input.style.paddingLeft = null;
      var originalPaddingLeft = parseInt(getComputedStyle($input).getPropertyValue('padding-left'));

      if (title || prefix) {
        var space = ($title ? $title.clientWidth + 6 : 0) + ($prefix ? $prefix.clientWidth : 0);
        var style = {
          paddingLeft: "".concat(space + originalPaddingLeft, "px")
        };
        Object.assign($input.style, style);

        if (title && prefix) {
          Object.assign($prefix.style, {
            left: "".concat($title.clientWidth + 6, "px")
          });
        }

        if (suffix) {
          Object.assign($suffix.parentNode.style, style);
        }
      }

      if (suffix) {
        var _space = $action.clientWidth + $suffix.clientWidth;

        Object.assign($input.style, {
          paddingRight: "".concat(_space, "px")
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          className = _this$props6.className,
          size = _this$props6.size,
          theme = _this$props6.theme,
          unstyled = _this$props6.unstyled,
          readOnly = _this$props6.readOnly,
          placeholder = _this$props6.placeholder,
          prefix = _this$props6.prefix,
          suffix = _this$props6.suffix,
          title = _this$props6.title,
          desc = _this$props6.desc,
          formatter = _this$props6.formatter,
          dontSelectOnFocus = _this$props6.dontSelectOnFocus,
          _this$props6$onFocus = _this$props6.onFocus,
          onFocus = _this$props6$onFocus === void 0 ? !dontSelectOnFocus ? defaultOnFocus : undefined : _this$props6$onFocus,
          optionList = _this$props6.optionList,
          menuX = _this$props6.menuX;
      var _this$state = this.state,
          value = _this$state.value,
          isHover = _this$state.isHover,
          isActive = _this$state.isActive,
          isValid = _this$state.isValid,
          isMenuOpen = _this$state.isMenuOpen;
      var isEmpty = value === '';
      var isDisabled = this.props.isDisabled || this.props.disabled;
      var klass = trimList([theme === 'core' ? 'CoreInput CoreInputNumber CoreConfirmInputNumber' : 'Input InputNumber ConfirmInputNumber', size, unstyled && 'unstyled', className, isHover && !isDisabled && !readOnly && 'is-hover', isActive && !isDisabled && !readOnly && 'is-active', isMenuOpen && 'is-menu-open', isDisabled && 'is-disabled', readOnly && 'is-readonly', isValid ? 'is-valid' : 'isnt-valid', isEmpty ? 'is-empty' : 'isnt-empty', !!title && 'with-title', !!desc && 'with-desc', !!prefix && 'with-prefix', !!suffix && 'with-suffix']);
      var hasMenu = optionList && optionList.length > 0;
      return /*#__PURE__*/jsxs("label", {
        className: klass,
        ref: this.set$label,
        onMouseEnter: this.onHover,
        onMouseLeave: this.onLeave,
        onMouseDown: this.setActive,
        children: [title && /*#__PURE__*/jsx("span", {
          className: "title",
          children: title
        }), desc && /*#__PURE__*/jsx("span", {
          className: "desc",
          children: desc
        }), prefix && /*#__PURE__*/jsx("span", {
          className: "prefix",
          children: prefix
        }), /*#__PURE__*/jsx("input", _objectSpread({
          /**
           * There are unsolved issues with [type=number] inputs,
           * so we currently use regular text input instead.
           */
          type: "text",
          value: formatter(value),
          placeholder: placeholder,
          disabled: isDisabled,
          readOnly: readOnly,
          onChange: this.onChange,
          onKeyDown: this.onKeyDown,
          onFocus: onFocus
        }, getOtherProps(this.constructor, this.props))), suffix && /*#__PURE__*/jsx("span", {
          className: "suffix",
          "data-value": formatter(value),
          "data-suffix": suffix,
          children: /*#__PURE__*/jsx("span", {
            children: suffix
          })
        }), /*#__PURE__*/jsx(InputActionButton, {
          hasMenu: hasMenu,
          onToggleMenu: this.toggleMenu,
          onStep: this.onStep,
          onRelease: this.onRelease
        }), hasMenu && /*#__PURE__*/jsx(SelectMenu, {
          isOpen: isMenuOpen,
          menuClassName: "SelectNumberMenu",
          $select: this.$label,
          optionList: optionList,
          value: value,
          menuX: menuX,
          onChange: this.onSelect,
          onClose: this.closeMenu
        }), (isActive || isMenuOpen) && /*#__PURE__*/jsx(EventListener, {
          target: document,
          onClick: this.onClickOutside,
          onKeyDown: this.onKeyDown
        })]
      });
    }
  }, {
    key: "canBePositive",
    get: function get() {
      return this.props.max > 0;
    }
  }, {
    key: "canBeNegative",
    get: function get() {
      return this.props.min < 0;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref4) {
      var prevProps = _ref4.prevProps,
          value = _ref4.value;

      if (!isEqual(prevProps, props)) {
        return {
          prevProps: props,
          value: setNumberValue(props.value)
        };
      }

      return null;
    }
  }]);

  return ConfirmInputNumber;
}(PureComponent);

_defineProperty(ConfirmInputNumber, "propTypes", {
  size: PropTypes.oneOf(['regular', 'small']),
  theme: PropTypes.oneOf(['core', 'plain']),
  unstyled: PropTypes.bool,
  step: PropTypes.number,
  precision: PropTypes.number,
  formatter: PropTypes.func,
  parser: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  optionList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  menuX: PropTypes.oneOf(['left', 'center']),
  dontSelectOnFocus: PropTypes.bool,
  title: PropTypes.node,
  desc: PropTypes.node,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  min: PropTypes.number,
  max: PropTypes.number,
  isDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onFocus: PropTypes.func,
  onConfirm: PropTypes.func.isRequired,
  shouldCorrectOnConfirm: PropTypes.bool,
  className: PropTypes.string
});

_defineProperty(ConfirmInputNumber, "defaultProps", {
  size: 'regular',
  theme: 'plain',
  unstyled: false,
  value: '',
  placeholder: '',
  step: 1,
  precision: 1,
  parser: function parser(v) {
    return v;
  },
  formatter: function formatter(v) {
    return v;
  },
  min: 0,
  max: Infinity,
  isDisabled: false,
  disabled: false,
  readOnly: false,
  onConfirm: function onConfirm() {
    return null;
  },
  shouldCorrectOnConfirm: false
});

export default ConfirmInputNumber;