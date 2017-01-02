import { Gene } from './Gene';

export class Chromosome {

    constructor(public strength: Gene,
        public intelligence: Gene,
        public dexterity: Gene,
        public constitution: Gene,
        public wisdom: Gene,
        public charisma: Gene) {
    }

    public static Random(): Chromosome {
        return new Chromosome(Gene.Random(), Gene.Random(), Gene.Random(), Gene.Random(), Gene.Random(), Gene.Random());
    }
}
