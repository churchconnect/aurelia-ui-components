'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imageEmbed = require('./image-embed');

Object.keys(_imageEmbed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _imageEmbed[key];
    }
  });
});

var _videoEmbed = require('./video-embed');

Object.keys(_videoEmbed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _videoEmbed[key];
    }
  });
});

var _slider = require('./slider');

Object.keys(_slider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _slider[key];
    }
  });
});

var _slide = require('./slide');

Object.keys(_slide).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _slide[key];
    }
  });
});

var _responsiveIframe = require('./responsive-iframe');

Object.keys(_responsiveIframe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _responsiveIframe[key];
    }
  });
});