const Gene = require('./Gene');

class Chromosome {

  constructor(strength, intelligence, dexterity, constitution, wisdom, charisma) {
    this.strength = strength;
    this.intelligence = intelligence;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.wisdom = wisdom;
    this.charisma = charisma;
  }

  static Random() {
    return new Chromosome(Gene.Random(), Gene.Random(), Gene.Random(), Gene.Random(), Gene.Random(), Gene.Random());
  }
}
module.exports = Chromosome;