const RandomHelper = require('../helpers/RandomHelper'),
  MathHelper = require('../helpers/mathHelper');

class Creature {
  constructor(id, genome, gender, age, brain) {
    this.type = 'creature';
    this.id = id;
    this.genome = genome;
    this.gender = gender;
    this.age = age;
    this.location = { x: 0, y: 0 };
    this.locations = [];
    this.needs = { food: 0, water: 0 };
    this.needsOnEachIteration = {
      food: RandomHelper.GenerateUpTo(3) + 1,
      water: RandomHelper.GenerateUpTo(5) + 1
    };
    this.brain = brain;
  }

  increaseNeeds() {
    this.needs.food += MathHelper.addPercent(this.needsOnEachIteration.food, this.genome.strength.stat);
    this.needs.water += MathHelper.addPercent(this.needsOnEachIteration.water, this.genome.strength.stat);
  }

  move(nearLocations, map) {
    this.increaseNeeds();
    let hasChanged = false;
    for (let idx = 0; idx < nearLocations.length; idx++) {
      const location = nearLocations[idx];
      let item = map.getItemOn({ x: location.x, y: location.y });
      item = item ? item.type : null;
      const result = this.brain.thinkNextMove(this.genome.intelligence, this, item);
      if (result.action > 0.75) {
        hasChanged = true;
        console.log(`I choose to move to: ${location.x}x${location.y}`);
        this.location = location;
        break;
      }
    }
    if (!hasChanged) {
      this.location = nearLocations[RandomHelper.GenerateUpTo(nearLocations.length - 1)];
      console.log(`I choose a random move to: ${this.location.x}x${this.location.y}`);
    }
    return this.location;
  }

  isInNeed() {
    return (this.needs.food > 100 || this.needs.water > 140);
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
    this.needs.food += food.damage;
    this.needs.food -= food.health;
  }

  drink(water) {
    console.log(`Water!! I found water at ${this.location.x}x${this.location.y}`);
    this.needs.water += water.damage;
    this.needs.water -= water.health;
  }

  backOff() {
    this.location = this.locations[this.locations.length - 1];
    this.locations.splice(-1, 1);
  }

}

module.exports = Creature;