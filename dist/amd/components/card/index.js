define(['exports', './card', './card-header', './card-image', './card-links'], function (exports, _card, _cardHeader, _cardImage, _cardLinks) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_card).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _card[key];
      }
    });
  });
  Object.keys(_cardHeader).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _cardHeader[key];
      }
    });
  });
  Object.keys(_cardImage).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _cardImage[key];
      }
    });
  });
  Object.keys(_cardLinks).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _cardLinks[key];
      }
    });
  });
});