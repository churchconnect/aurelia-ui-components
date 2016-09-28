'use strict';

System.register(['./validation-error-list', './validated-input'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_validationErrorList) {
      var _exportObj = {};

      for (var _key in _validationErrorList) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _validationErrorList[_key];
      }

      _export(_exportObj);
    }, function (_validatedInput) {
      var _exportObj2 = {};

      for (var _key2 in _validatedInput) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _validatedInput[_key2];
      }

      _export(_exportObj2);
    }],
    execute: function () {}
  };
});