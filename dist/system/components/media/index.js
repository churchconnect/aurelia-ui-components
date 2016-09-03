'use strict';

System.register(['./image-embed', './video-embed', './slider', './slide', './responsive-iframe'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_imageEmbed) {
      var _exportObj = {};

      for (var _key in _imageEmbed) {
        if (_key !== "default") _exportObj[_key] = _imageEmbed[_key];
      }

      _export(_exportObj);
    }, function (_videoEmbed) {
      var _exportObj2 = {};

      for (var _key2 in _videoEmbed) {
        if (_key2 !== "default") _exportObj2[_key2] = _videoEmbed[_key2];
      }

      _export(_exportObj2);
    }, function (_slider) {
      var _exportObj3 = {};

      for (var _key3 in _slider) {
        if (_key3 !== "default") _exportObj3[_key3] = _slider[_key3];
      }

      _export(_exportObj3);
    }, function (_slide) {
      var _exportObj4 = {};

      for (var _key4 in _slide) {
        if (_key4 !== "default") _exportObj4[_key4] = _slide[_key4];
      }

      _export(_exportObj4);
    }, function (_responsiveIframe) {
      var _exportObj5 = {};

      for (var _key5 in _responsiveIframe) {
        if (_key5 !== "default") _exportObj5[_key5] = _responsiveIframe[_key5];
      }

      _export(_exportObj5);
    }],
    execute: function () {}
  };
});