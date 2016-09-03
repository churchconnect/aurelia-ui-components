define(['exports', './navigation', './navigation-link'], function (exports, _navigation, _navigationLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_navigation).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _navigation[key];
      }
    });
  });
  Object.keys(_navigationLink).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _navigationLink[key];
      }
    });
  });
});