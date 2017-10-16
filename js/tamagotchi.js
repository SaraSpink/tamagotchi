export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 10000);
  }

  didYouDie() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
      console.log("test did you die");
    }
  }

  feed(amount) {
    this.foodLevel += amount;
  }
}
