define(['exports', './tabs', './tab'], function (exports, _tabs, _tab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_tabs).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _tabs[key];
      }
    });
  });
  Object.keys(_tab).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _tab[key];
      }
    });
  });
});