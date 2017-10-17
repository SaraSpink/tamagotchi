import { Tamagotchi } from './../js/tamagotchi.js';
let pinky = new Tamagotchi("Pinky");
pinky.setHunger();
let timer = pinky.setTimer();
pinky.counter = 100;

// if (pinky.counter === 0 && pinky.foodLevel > 0) {
//   alert("Don't forget to feed your Flamingo")
// }
//

  let popup = setInterval(function() {
    $('#status').text(pinky.foodLevel);
    $('#hunger').text(pinky.counter);
      if (pinky.foodLevel === 0) {
      alert('You are a stone-cold killer');
      clearInterval(popup);
    }
    // clearInterval(timer);
    });


  $(document).ready(function() {
    $('#mealForm').submit(function(event) {
    event.preventDefault();
    pinky.counter = 100;

    let mealSize = $("input:radio[name=mealSize]:checked").val();
    if (mealSize === "small") {
      pinky.feed(5);
    } else if (mealSize === "medium") {
      pinky.feed(10);
    } else {
      pinky.feed(15);
    }

    $('#flamingoGif').click(function() {

      let request = new XMLHttpRequest();
      let url = `http://api.giphy.com/v1/gifs/search?q=flamingo&api_key=vcgwlSAXXns3QIxoVnvbm0600IboLLtG&limit=1`;

      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          let response = JSON.parse(this.responseText);
          let gif = getElements(response);
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
