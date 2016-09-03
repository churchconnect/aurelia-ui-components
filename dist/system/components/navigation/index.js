'use strict';

System.register(['./navigation', './navigation-link'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_navigation) {
      var _exportObj = {};

      for (var _key in _navigation) {
        if (_key !== "default") _exportObj[_key] = _navigation[_key];
      }

      _export(_exportObj);
    }, function (_navigationLink) {
      var _exportObj2 = {};

      for (var _key2 in _navigationLink) {
        if (_key2 !== "default") _exportObj2[_key2] = _navigationLink[_key2];
      }

      _export(_exportObj2);
    }],
    execute: function () {}
  };
});