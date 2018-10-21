const Gene = require('./Gene');

class Chromosome {

  constructor(strength, intelligence, dexterity, constitution) {
    this.strength = strength;
    this.intelligence = intelligence;
    this.dexterity = dexterity;
    this.constitution = constitution;
  }

  static Random() {
    return new Chromosome(Gene.Random(), Gene.Random(), Gene.Random(), Gene.Random());
  }
}
module.exports = Chromosome;