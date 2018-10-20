const Age = require('../entities/Age'),
  Creature = require('../entities/Creature'),
  Chromosome = require('../entities/Chromosome'),
  Gender = require('../entities/Gender'),
  Gene = require('../entities/Gene'),
  Guid = require('../entities/Guid'),
  RandomHelper = require('../helpers/RandomHelper');

class BehaviorBuilder {
  static Crossover(female, male) {
    if (female.gender === Gender.Female && male.gender === Gender.Male) {
      const femaleChromosome = female.genome;
      const maleChromosome = male.genome;

      const childChromosome =
        BehaviorBuilder.PopulateChromosome(femaleChromosome, maleChromosome);

      const gender = RandomHelper.GenerateUpTo(2);

      return new Creature(Guid.MakeNew(), childChromosome, gender, Age.FromDays(0));
    }
    return null;
  }

  static PopulateChromosome(female, male) {
    return new Chromosome(
      new Gene(RandomHelper.PickOneOrRandomize(female.strength.stat, male.strength.stat, 25)),
      new Gene(RandomHelper.PickOneOrRandomize(female.intelligence.stat, male.intelligence.stat, 25)),
      new Gene(RandomHelper.PickOneOrRandomize(female.dexterity.stat, male.dexterity.stat, 25)),
      new Gene(RandomHelper.PickOneOrRandomize(female.constitution.stat, male.constitution.stat, 25)),
      new Gene(RandomHelper.PickOneOrRandomize(female.wisdom.stat, male.wisdom.stat, 25)),
      new Gene(RandomHelper.PickOneOrRandomize(female.charisma.stat, male.charisma.stat, 25)),
    );
  }
}

module.exports = BehaviorBuilder;