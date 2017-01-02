import { Age, Creature, Chromosome, Gender, Guid } from './entities';
import { BehaviorBuilder } from './builders';

let adam: Creature = new Creature(Guid.MakeNew(),
    Chromosome.Random(),
    Gender.Male, Age.FromYears(10));
let eve: Creature = new Creature(Guid.MakeNew(),
    Chromosome.Random(),
    Gender.Female,
    Age.FromYears(10));

console.log(adam);
console.log(eve);

let population: Creature[] = [];

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
    let child: Creature = BehaviorBuilder.Crossover(eve, adam);
    console.log('New child is born:');
    console.log(child);
    eve.age.AddDay(1);
    adam.age.AddDay(1);
    daysPast++;
}

