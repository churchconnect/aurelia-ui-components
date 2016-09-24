define(['exports', './pull-to-refresh', './page-header', './page-body', './page-message'], function (exports, _pullToRefresh, _pageHeader, _pageBody, _pageMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_pullToRefresh).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _pullToRefresh[key];
      }
    });
  });
  Object.keys(_pageHeader).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _pageHeader[key];
      }
    });
  });
  Object.keys(_pageBody).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _pageBody[key];
      }
    });
  });
  Object.keys(_pageMessage).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _pageMessage[key];
      }
    });
  });
});