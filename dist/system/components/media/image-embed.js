'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inlineView, bindable, _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, ImageEmbed;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      inlineView = _aureliaFramework.inlineView;
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      _export('ImageEmbed', ImageEmbed = (_dec = inlineView('\n<template class="image" class.bind="fullWidth ? \'full-width\' : \'\'">\n        <img src.bind="source">\n</template>\n'), _dec(_class = (_class2 = function ImageEmbed() {
        _classCallCheck(this, ImageEmbed);

        _initDefineProp(this, 'source', _descriptor, this);

        _initDefineProp(this, 'fullWidth', _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'source', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'fullWidth', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _export('ImageEmbed', ImageEmbed);
    }
  };
});