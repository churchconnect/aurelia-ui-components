define(['exports', './pull-to-refresh'], function (exports, _pullToRefresh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_pullToRefresh).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _pullToRefresh[key];
      }
    });
  });
});