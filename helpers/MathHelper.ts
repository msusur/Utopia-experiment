export class MathHelper {
    public static GetPrecision(value: number): number {
        if (!isFinite(value)) {
            return 0;
        }
        var e = 1, p = 0;
        while (Math.round(value * e) / e !== value) {
            e *= 10; p++;
        }
        return p;
    }
}