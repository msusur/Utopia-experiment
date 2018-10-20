const RandomHelper = require('../helpers/RandomHelper');

class Gene {

  constructor(stat) {
    this.stat = stat;
  }

  static Random() {
    return new Gene(RandomHelper.GenerateUpTo(25));
  }
}

module.exports = Gene;