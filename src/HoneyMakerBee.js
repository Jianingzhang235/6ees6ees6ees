class HoneyMakerBee extends Bee {
  // TODO..
  constructor() {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney() {
    this.honeyPot++;
  }
  giveHoney() {
    if (this.honeyPot > 0) {
      this.honeyPot--;
    }
  }
};