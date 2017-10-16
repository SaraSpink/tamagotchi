export class Tamagotchi {
  constructor(name) {
    this.name = name;

    this.foodLevel = 10;
    this.counter = 100;
    this.timer = 0;
  }

  hungerCounter() {
    if (this.foodLevel > 0) {
      --this.foodLevel;
    }
  }

  timeCounter() {
    return --this.counter;
  }

  setHunger() {
    this.timer = setInterval(() => {
      this.hungerCounter();
    }, 10000);
  }

  setTimer() {
    this.counter = setInterval(() => {
      this.timeCounter();
    }, 1000);
  }

  didYouDie() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed(amount) {
    this.foodLevel += amount;
  }
}
