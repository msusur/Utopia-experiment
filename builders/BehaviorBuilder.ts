import { Creature, Gender, Guid } from '../entities';

export class BehaviorBuilder {
    public static Crossover(female: Creature, male: Creature): Creature {
        if (female.gender === Gender.Female && male.gender === Gender.Male) {
            return new Creature(Guid.MakeNew(), null, null);
        }
        return null;
    }
}