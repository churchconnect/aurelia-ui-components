'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var noView, containerless, _dec, _class, Button;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      noView = _aureliaFramework.noView;
      containerless = _aureliaFramework.containerless;
    }],
    execute: function () {
      _export('Button', Button = (_dec = containerless(), _dec(_class = noView(_class = function Button() {
        _classCallCheck(this, Button);
      }) || _class) || _class));

      _export('Button', Button);
    }
  };
});