const Age = require('./creatures/entities/Age'),
  Creature = require('./creatures/entities/Creature'),
  Chromosome = require('./creatures/entities/Chromosome'),
  Gender = require('./creatures/entities/Gender'),
  Guid = require('./creatures/entities/Guid'),
  Map = require('./geography/map'),
  World = require('./world'),
  Brain = require('./ai/brain');

const brain = new Brain();

const adam = new Creature(Guid.MakeNew(),
  Chromosome.Random(),
  Gender.Male, Age.FromYears(10),
  brain);

const eve = new Creature(Guid.MakeNew(),
  Chromosome.Random(),
  Gender.Female,
  Age.FromYears(10),
  brain);

const map = new Map();
map.addCreature({ x: 10, y: 10 }, adam);
map.addCreature({ x: 10, y: 11 }, eve);
map.addFood({ x: 3, y: 3 });
map.addWater({ x: 2, y: 3 });

console.log(adam);
console.log(eve);
const world = new World(map, [adam, eve]);

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let iteration = 0;
while (world.iterate()) {
  console.log(`Eve: [${eve.location.x}, ${eve.location.y}]`);
  console.log(`Adam: [${adam.location.x}, ${adam.location.y}]`);
  iteration++;
}
console.log(`They all died after ${iteration} iterations.`);
console.log(`Eve: [${eve.location.x}, ${eve.location.y}]`);
console.log(`Adam: [${adam.location.x}, ${adam.location.y}]`);
process.exit();