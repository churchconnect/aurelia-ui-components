'use strict';

System.register(['./pull-to-refresh', './page-header', './page-body'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_pullToRefresh) {
      var _exportObj = {};

      for (var _key in _pullToRefresh) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _pullToRefresh[_key];
      }

      _export(_exportObj);
    }, function (_pageHeader) {
      var _exportObj2 = {};

      for (var _key2 in _pageHeader) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _pageHeader[_key2];
      }

      _export(_exportObj2);
    }, function (_pageBody) {
      var _exportObj3 = {};

      for (var _key3 in _pageBody) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _pageBody[_key3];
      }

      _export(_exportObj3);
    }],
    execute: function () {}
  };
});