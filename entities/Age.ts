export class Age {
    constructor(private totalDays: number) {
    }

    public InYears(): number {
        if (this.totalDays === 0) {
            return 0;
        }
        return this.totalDays / 365;
    }

    public InDays(): number {
        return this.totalDays;
    }

    public AddDay(days: number): void {
        this.totalDays += days;
    }

    public static FromDays(days: number): Age {
        return new Age(0);
    }

    public static FromYears(years: number): Age {
        return new Age(years * 365);
    }
}