import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function () {
  let pinky = new Tamagotchi("Pinky Flamingo");

  beforeEach(function() {
    jasmine.clock().install();
    pinky.foodLevel = 10;
    pinky.setHunger();

  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(pinky.name).toEqual("Pinky Flamingo");
    expect(pinky.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 30001 miliseconds', function() {
    jasmine.clock().tick(30001);
    expect(pinky.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops to zero', function() {
    pinky.foodLevel = 0;
    expect(pinky.didYouDie()).toEqual(true);
  });

  it('should get very hungry if 100 seconds pass without feeding', function() {
    jasmine.clock().tick(100001);
    expect(pinky.didYouDie()).toEqual(true);
  });

  it('should add any number to food level and increase food level by that amount', function() {
    jasmine.clock().tick(20001);
    pinky.feed(22)
    expect(pinky.foodLevel).toEqual(30);
  });
});
