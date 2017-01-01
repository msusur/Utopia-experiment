export class RandomHelper  {
    public static GenerateUpTo(maxValue: number): number {
        return Math.floor(Math.random() * maxValue * 1024) % maxValue;
    }
}