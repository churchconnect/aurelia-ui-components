'use strict';

System.register(['./tabs', './tab'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_tabs) {
      var _exportObj = {};

      for (var _key in _tabs) {
        if (_key !== "default") _exportObj[_key] = _tabs[_key];
      }

      _export(_exportObj);
    }, function (_tab) {
      var _exportObj2 = {};

      for (var _key2 in _tab) {
        if (_key2 !== "default") _exportObj2[_key2] = _tab[_key2];
      }

      _export(_exportObj2);
    }],
    execute: function () {}
  };
});