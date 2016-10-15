define(['exports', './validation-error-list', './validated-input-wrapper'], function (exports, _validationErrorList, _validatedInputWrapper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_validationErrorList).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _validationErrorList[key];
      }
    });
  });
  Object.keys(_validatedInputWrapper).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _validatedInputWrapper[key];
      }
    });
  });
});