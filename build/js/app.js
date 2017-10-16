(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tamagotchi = exports.Tamagotchi = function () {
  function Tamagotchi(name) {
    _classCallCheck(this, Tamagotchi);

    this.name = name;
    this.foodLevel = 10;
    this.timer = 0;
    this.counter = 0;
  }

  _createClass(Tamagotchi, [{
    key: "hungerCounter",
    value: function hungerCounter() {
      if (this.foodLevel > 0) {
        --this.foodLevel;
      }
    }
  }, {
    key: "timeCounter",
    value: function timeCounter() {
      return ++this.counter;
    }
  }, {
    key: "setHunger",
    value: function setHunger() {
      var _this = this;

      this.timer = setInterval(function () {
        _this.hungerCounter();
      }, 10000);
    }
  }, {
    key: "setTimer",
    value: function setTimer() {
      var _this2 = this;

      this.counter = setInterval(function () {
        _this2.timeCounter();
      }, 1000);
    }
  }, {
    key: "didYouDie",
    value: function didYouDie() {
      if (this.foodLevel > 0) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "feed",
    value: function feed(amount) {
      this.foodLevel += amount;
    }
  }]);

  return Tamagotchi;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _tamagotchi = require('./../js/tamagotchi.js');

var pinky = new _tamagotchi.Tamagotchi("Pinky");
pinky.setHunger();
pinky.setTimer();

setInterval(function () {
  $('#status').text(pinky.foodLevel);
  $('#hunger').text(pinky.counter);
});

$(document).ready(function () {
  $('#mealForm').submit(function (event) {
    event.preventDefault();
    var mealSize = $("input:radio[name=mealSize]:checked").val();
    if (mealSize === "small") {
      pinky.feed(5);
    } else if (mealSize === "medium") {
      pinky.feed(10);
    } else {
      pinky.feed(15);
    }
  });
});

},{"./../js/tamagotchi.js":1}]},{},[2]);
