const moveCreatures = (map, creatures) => {
  for (let idx = 0; idx < creatures.length; idx++) {
    const creature = creatures[idx];
    const newLocation = creature.move();
    const itemOnLocation = map.getItemOn(newLocation);
    if (typeof itemOnLocation !== 'undefined') {
      creature.interactWith(itemOnLocation);
    }
    map.addItem(creature.location, creature)
  }
};

class World {
  constructor(map, creatures) {
    this.map = map;
    this.creatures = creatures;
  }

  iterate() {
    moveCreatures(this.map, this.creatures);
    return true;
  }
}

module.exports = World;