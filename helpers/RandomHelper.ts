import { MathHelper } from './MathHelper';

export class RandomHelper {
    public static GenerateUpTo(maxValue: number): number {
        return Math.floor(Math.random() * maxValue * 1024) % maxValue;
    }

    public static IsPercent(percent: number): boolean {
        const precision = MathHelper.GetPrecision(percent);
        return RandomHelper.GenerateUpTo(100 ^ precision) <= (percent * 10 ^ precision);
    }

    public static PickOneOrRandomize(first: number, second: number, maxValue: number): number {
        let result = 0;
        while (result <= 0) {
            const randomize = RandomHelper.IsPercent(2);
            if (randomize) {
                return RandomHelper.GenerateUpTo(maxValue);
            }
            const selected = RandomHelper.PickOne(first, second);
            const factor = RandomHelper.IsPercent(50) ? -1 : 1;

            result = selected + (factor * RandomHelper.GenerateUpTo(10));
        }
        return result;
    }

    public static PickOne(first: number, second: number): number {
        const random: boolean = RandomHelper.IsPercent(50);
        if (random) {
            return first;
        }
        return second;
    }
}