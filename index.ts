import {
    Creature, Chromosome, Gender, Guid
} from './entities';

let adam: Creature = new Creature(Guid.MakeNew(), Chromosome.Random(), Gender.Male);
let eve: Creature = new Creature(Guid.MakeNew(), Chromosome.Random(), Gender.Female);

let population: Creature[] = [];

