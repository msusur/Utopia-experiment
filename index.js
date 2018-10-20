const Age = require('./creatures/entities/Age'),
  Creature = require('./creatures/entities/Creature'),
  Chromosome = require('./creatures/entities/Chromosome'),
  Gender = require('./creatures/entities/Gender'),
  Guid = require('./creatures/entities/Guid'),
  Map = require('./geography/map');
// BehaviorBuilder = require('./builders/BehaviorBuilder');

const adam = new Creature(Guid.MakeNew(),
  Chromosome.Random(),
  Gender.Male, Age.FromYears(10));

const eve = new Creature(Guid.MakeNew(),
  Chromosome.Random(),
  Gender.Female,
  Age.FromYears(10));

const map = new Map();
map.addCreature({ x: 10, y: 10 }, adam);
map.addCreature({ x: 10, y: 11 }, eve);
map.addFood({ x: 3, y: 3 });
map.addWater({ x: 2, y: 3 });

console.log(adam);
console.log(eve);

// let daysPast = 0;

// while (daysPast < 365 * 20) {
//   console.log(`Days past ${daysPast}`);
//   if (eve.CanDie()) {
//     console.log('Eve is dead.');
//     break;
//   }

//   if (adam.CanDie()) {
//     console.log('Adam is dead.');
//     break;
//   }
//   let child = BehaviorBuilder.Crossover(eve, adam);
//   console.log('New child is born:');
//   console.log(child);
//   eve.age.AddDay(1);
//   adam.age.AddDay(1);
//   daysPast++;
// }