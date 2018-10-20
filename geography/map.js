const Food = require('./items/food'),
  Water = require('./items/water');

class Map2D {
  constructor() {
    this.locations = [, ];
  }

  addFood({ x, y }) {
    return this.addItem({ x, y }, new Food({ health: 10 }));
  }

  addWater({ x, y }) {
    return this.addItem({ x, y }, new Water({ health: 10 }));
  }

  addCreature({ x, y }, creature) {
    return this.addItem({ x, y }, creature);
  }

  addItem({ x, y }, item) {
    if (this.isEmpty({ x, y })) {
      return;
    }
    this.locations[x, y] = item;
    item.location = { x, y };
    return { x, y };
  }

  isEmpty({ x, y }) {
    return typeof this.locations[x, y] === 'undefined';
  }

  getItemOn({ x, y }) {
    return this.locations[x, y];
  }
}

module.exports = Map2D;