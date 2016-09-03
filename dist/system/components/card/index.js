'use strict';

System.register(['./card', './card-header', './card-links', './card-actions', './card-input-amount'], function (_export, _context) {
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
    }, function (_cardLinks) {
      var _exportObj3 = {};

      for (var _key3 in _cardLinks) {
        if (_key3 !== "default") _exportObj3[_key3] = _cardLinks[_key3];
      }

      _export(_exportObj3);
    }, function (_cardActions) {
      var _exportObj4 = {};

      for (var _key4 in _cardActions) {
        if (_key4 !== "default") _exportObj4[_key4] = _cardActions[_key4];
      }

      _export(_exportObj4);
    }, function (_cardInputAmount) {
      var _exportObj5 = {};

      for (var _key5 in _cardInputAmount) {
        if (_key5 !== "default") _exportObj5[_key5] = _cardInputAmount[_key5];
      }

      _export(_exportObj5);
    }],
    execute: function () {}
  };
});