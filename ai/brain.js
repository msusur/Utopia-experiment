const brain = require('brain.js'),
  { items, data } = require('./training.js');

class Brain {
  constructor() {
    this.net = new brain.NeuralNetwork({
      hiddenLayers: [2, 5, 3]
    });
    this.net.train(data, { iterations: 100, log: true, learningRate: 0.5 });
  }

  thinkNextMove(intelligence, creature, item) {
    // Need water more than food.
    const input = {
      foodNeed: creature.needs.food > 20,
      waterNeed: creature.needs.water > 10,
      // intelligence,
      item: items[item]
    };

    const output = this.net.run(input);
    return output;
  }
}

module.exports = Brain;