const MathHelper = require('./MathHelper');

class RandomHelper {
  static GenerateUpTo(maxValue) {
    return Math.floor(Math.random() * maxValue * 1024) % maxValue;
  }

  static IsPercent(percent) {
    const precision = MathHelper.GetPrecision(percent);
    return RandomHelper.GenerateUpTo(100 ^ precision) <= (percent * 10 ^ precision);
  }

  static PickOneItem(items) {
    if (!items.length) {
      throw new Error('Not an array.');
    }

    return items[Math.floor(Math.random() * items.length)];
  }

  static PickOneOrRandomize(first, second, maxValue) {
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

  static PickOne(first, second) {
    const random = RandomHelper.IsPercent(50);
    if (random) {
      return first;
    }
    return second;
  }
}

module.exports = RandomHelper;