class MathHelper {
  static GetPrecision(value) {
    if (!isFinite(value)) {
      return 0;
    }
    let e = 1,
      p = 0;
    while (Math.round(value * e) / e !== value) {
      e *= 10;
      p++;
    }
    return p;
  }

  static addPercent(value, percent) {
    return value + value * (percent / 100);
  }
}

module.exports = MathHelper;