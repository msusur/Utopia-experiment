import { RandomHelper } from '../helpers';

export class Gene {

    constructor(public stat: number) {
    }

    public static Random(): Gene {
        return new Gene(RandomHelper.GenerateUpTo(25));
    }
}