class Age {
  constructor(totalDays) {
    this.totalDays = totalDays;
  }

  InYears() {
    if (this.totalDays === 0) {
      return 0;
    }
    return this.totalDays / 365;
  }

  InDays() {
    return this.totalDays;
  }

  AddDay(days) {
    this.totalDays += days;
  }

  static FromDays(days) {
    return new Age(0);
  }

  static FromYears(years) {
    return new Age(years * 365);
  }
}

module.exports = Age;