const moveCreatures = (map, creatures) => {
  for (let idx = 0; idx < creatures.length; idx++) {
    const creature = creatures[idx];
    const nearLocations = map.getLocationsAround(creature);

    const newLocation = creature.move(nearLocations, map);
    if (creature.isInNeed()) {
      console.log(`this one can't move anymore. food: ${creature.needs.food}, water: ${creature.needs.water}`);

    } else {
      const itemOnLocation = map.getItemOn(newLocation);
      if (typeof itemOnLocation !== 'undefined') {
        creature.interactWith(itemOnLocation);
      }
      creature.location = newLocation;
    }
  }
};

class World {
  constructor(map, creatures) {
    this.map = map;
    this.creatures = creatures;
  }

  iterate() {
    moveCreatures(this.map, this.creatures);
    let canContinue = true;
    for (let idx = 0; idx < this.creatures.length; idx++) {
      if (this.creatures[idx].isInNeed()) {
        canContinue = false;
        break;
      }
    }
    return canContinue;
  }
}

module.exports = World;