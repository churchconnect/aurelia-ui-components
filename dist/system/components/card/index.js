'use strict';

System.register(['./card', './card-header'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_card) {
      var _exportObj = {};

      for (var _key in _card) {
        if (_key !== "default") _exportObj[_key] = _card[_key];
      }

      _export(_exportObj);
    }, function (_cardHeader) {
      var _exportObj2 = {};

      for (var _key2 in _cardHeader) {
        if (_key2 !== "default") _exportObj2[_key2] = _cardHeader[_key2];
      }

      _export(_exportObj2);
    }],
    execute: function () {}
  };
});