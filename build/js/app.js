(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// import { Tamagotchi } from './../js/tamagotchi.js';
// let pinky = new Tamagotchi("Pinky");
// pinky.setHunger();
// let timer = pinky.setTimer();
// pinky.counter = 100;
//
// // if (pinky.counter === 0 && pinky.foodLevel > 0) {
// //   alert("Don't forget to feed your Flamingo")
// // }
// //
//
//   let popup = setInterval(function() {
//     $('#status').text(pinky.foodLevel);
//     $('#hunger').text(pinky.counter);
//       if (pinky.foodLevel === 0) {
//       alert('You are a stone-cold killer');
//       clearInterval(popup);
//     }
//     // clearInterval(timer);
//     });
//
//
//   $(document).ready(function() {
//     $('#mealForm').submit(function(event) {
//     event.preventDefault();
//     pinky.counter = 100;
//
//     let mealSize = $("input:radio[name=mealSize]:checked").val();
//     if (mealSize === "small") {
//       pinky.feed(5);
//     } else if (mealSize === "medium") {
//       pinky.feed(10);
//     } else {
//       pinky.feed(15);
//     }
//
//     // let request = new XMLHttpRequest();
//     // let url = `https://i.imgur.com/RPrtIX1.gif`;
//     //
//     // request.onreadystatechange = function() {
//     //   if (this.readyState === 4 && this.status === 200) {
//     //     let response = JSON.parse(this.responseText);
//     //     getElements(response);
//     //   }
//     // };
//     //
//     // request.open("GET", url, true);
//     // request.send();
//
//   });
// });
//
// document.addEventListener('DOMContentLoaded', function () {
// 	q = "flamingo"; // search query
//
// 	request = new XMLHttpRequest;
// 	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=vcgwlSAXXns3QIxoVnvbm0600IboLLtG&tag='+q, true);
//
// 	request.onload = function() {
// 		if (request.status >= 200 && request.status < 400){
// 			data = JSON.parse(request.responseText).data.image_url;
// 			console.log(data);
// 			document.getElementById("flamingoGif").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
// 		} else {
// 			console.log('reached giphy, but API returned an error');
// 		 }
// 	};
//
// 	request.onerror = function() {
// 		console.log('connection error');
// 	};
//
// 	request.send();
// });

$(document).ready(function () {

  $('#flamingoGif').click(function () {

    var request = new XMLHttpRequest();
    var url = 'http://api.giphy.com/v1/gifs/search?q=flamingo&api_key=vcgwlSAXXns3QIxoVnvbm0600IboLLtG&limit=1';

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    getElements = function getElements(response) {
      $('.showGif').show('' + response.data[0].images.original.url);
    };
  });
});

},{}]},{},[1]);
