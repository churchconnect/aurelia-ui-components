define(['exports', './image-embed', './video-embed', './slider', './slide', './responsive-iframe'], function (exports, _imageEmbed, _videoEmbed, _slider, _slide, _responsiveIframe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_imageEmbed).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _imageEmbed[key];
      }
    });
  });
  Object.keys(_videoEmbed).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _videoEmbed[key];
      }
    });
  });
  Object.keys(_slider).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _slider[key];
      }
    });
  });
  Object.keys(_slide).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _slide[key];
      }
    });
  });
  Object.keys(_responsiveIframe).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _responsiveIframe[key];
      }
    });
  });
});