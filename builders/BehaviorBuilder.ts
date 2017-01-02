import { Age, Creature, Chromosome, Gender, Gene, Guid } from '../entities';
import { RandomHelper } from '../helpers';

export class BehaviorBuilder {
    public static Crossover(female: Creature, male: Creature): Creature {
        if (female.gender === Gender.Female && male.gender === Gender.Male) {
            const femaleChromosome: Chromosome = female.genome;
            const maleChromosome: Chromosome = male.genome;

            const childChromosome: Chromosome =
                BehaviorBuilder.PopulateChromosome(femaleChromosome, maleChromosome);

            const gender: Gender = RandomHelper.GenerateUpTo(2);

            return new Creature(Guid.MakeNew(), childChromosome, gender, Age.FromDays(0));
        }
        return null;
    }

    private static PopulateChromosome(female: Chromosome, male: Chromosome): Chromosome {

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