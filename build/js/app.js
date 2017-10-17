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

    this.foodLevel = 1;
    this.counter = 100;
    this.timer = 0;
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
      if (this.counter > 0) {
        --this.counter;
      }
    }

    // setHungerTimeout() {
    //   this.timer = setTimeout(() => {
    //     this.hungerCounter();
    //   });
    // }


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
        this.clearInterval();
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
var timer = pinky.setTimer();
pinky.counter = 100;

// if (pinky.counter === 0 && pinky.foodLevel > 0) {
//   alert("Don't forget to feed your Flamingo")
// }
//

var popup = setInterval(function () {
  $('#status').text(pinky.foodLevel);
  $('#hunger').text(pinky.counter);
  if (pinky.foodLevel === 0) {
    alert('You are a stone-cold killer');
    clearInterval(popup);
  }
  // clearInterval(timer);
});

$(document).ready(function () {
  $('#mealForm').submit(function (event) {
    event.preventDefault();
    pinky.counter = 100;

    var mealSize = $("input:radio[name=mealSize]:checked").val();
    if (mealSize === "small") {
      pinky.feed(5);
    } else if (mealSize === "medium") {
      pinky.feed(10);
    } else {
      pinky.feed(15);
    }

    $('#flamingoGif').click(function () {

      var request = new XMLHttpRequest();
      var url = 'http://api.giphy.com/v1/gifs/search?q=flamingo&api_key=vcgwlSAXXns3QIxoVnvbm0600IboLLtG&limit=1';

      request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          var response = JSON.parse(this.responseText);
          var gif = getElements(response);
          debugger;
        }
      };

      request.open("GET", url, true);
      request.send();

      $('#flamingoGif').html('<img src=' + json[0].data[0].images.downsized.url + ' >');

      debugger;

      // getElements = function(response.data[0].images.downsized.url) {
      //   $('#showGif').show();
      // };
    });
  });
});

// $(document).ready(function() {
//
//   $('#flamingoGif').click(function() {
//
//     let request = new XMLHttpRequest();
//     let url = `http://api.giphy.com/v1/gifs/search?q=flamingo&api_key=vcgwlSAXXns3QIxoVnvbm0600IboLLtG&limit=1`;
//
//     request.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//         let response = JSON.parse(this.responseText);
//         getElements(response.data[0].images.downsized.url);
//         debugger;
//
//       }
//     };
//
//     request.open("GET", url, true);
//     request.send();
//
//
//
//     getElements = function(response.data[0].images.downsized.url) {
//       $('#showGif').show();
//     };
//   });
// });

// `${response.data[0].images.original.url}`

},{"./../js/tamagotchi.js":1}]},{},[2]);
