const RandomHelper = require('../helpers/RandomHelper');

class Creature {
  constructor(id, genome, gender, age) {
    this.type = 'creature';
    this.id = id;
    this.genome = genome;
    this.gender = gender;
    this.age = age;
    this.location = { x: 0, y: 0 };
    this.locations = [];
  }

  move() {
    const xMovement = RandomHelper.PickOneItem([-1, 0, 1]);
    const yMovement = RandomHelper.PickOneItem([-1, 0, 1]);

    this.locations.push(this.location);
    this.location.x += xMovement;
    this.location.y += yMovement;
    return this.location;
  }

  interactWith(thing) {
    if (thing.type === 'creature') {
      this.backOff();
    } else if (thing.type === 'food') {
      this.eat(thing);
    } else if (thing.type === 'water') {
      this.drink(thing);
    }
  }

  eat(food) {
    console.log(`Fooood!! I found food at ${this.location.x}x${this.location.y}`);
  }

  drink(water) {
    console.log(`Water!! I found water at ${this.location.x}x${this.location.y}`);
  }

  backOff() {
    this.location = this.locations[this.locations.length - 1];
    this.locations.splice(-1, 1);
  }

}

module.exports = Creature;