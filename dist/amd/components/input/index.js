define(['exports', './validation-error-list', './validated-input'], function (exports, _validationErrorList, _validatedInput) {
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
  Object.keys(_validatedInput).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _validatedInput[key];
      }
    });
  });
});