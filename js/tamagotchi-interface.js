import { Tamagotchi } from './../js/tamagotchi.js';
let pinky = new Tamagotchi("Pinky")
pinky.setHunger()
pinky.setTimer()

setInterval(function() {
  $('#status').text(pinky.foodLevel);
  $('#hunger').text(pinky.counter);
});

  $(document).ready(function() {
    $('#mealForm').submit(function(event) {
    event.preventDefault();
    let mealSize = $("input:radio[name=mealSize]:checked").val()
    if (mealSize === "small") {
      pinky.feed(5)
    } else if (mealSize === "medium") {
      pinky.feed(10)
    } else {
      pinky.feed(15)
    }


    });

  });
