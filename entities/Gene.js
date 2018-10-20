const RandomHelper = require('../helpers/RandomHelper');

class Gene {

  constructor(stat) {}

  static Random() {
    return new Gene(RandomHelper.GenerateUpTo(25));
  }
}

module.exports = Gene;