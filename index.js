const Age = require('./entities/Age'),
  Creature = require('./entities/Creature'),
  Chromosome = require('./entities/Chromosome'),
  Gender = require('./entities/Gender'),
  Guid = require('./entities/Guid'),
  BehaviorBuilder = require('./builders/BehaviorBuilder');

let adam = new Creature(Guid.MakeNew(),
  Chromosome.Random(),
  Gender.Male, Age.FromYears(10));

let eve = new Creature(Guid.MakeNew(),
  Chromosome.Random(),
  Gender.Female,
  Age.FromYears(10));

console.log(adam);
console.log(eve);

let daysPast = 0;

while (daysPast < 365 * 20) {
  console.log(`Days past ${daysPast}`);
  if (eve.CanDie()) {
    console.log('Eve is dead.');
    break;
  }

  if (adam.CanDie()) {
    console.log('Adam is dead.');
    break;
  }
  let child = BehaviorBuilder.Crossover(eve, adam);
  console.log('New child is born:');
  console.log(child);
  eve.age.AddDay(1);
  adam.age.AddDay(1);
  daysPast++;
}