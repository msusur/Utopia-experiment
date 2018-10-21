const items = {
  food: 1,
  water: 2,
  creature: 3,
  empty: 0
}

const data = [{
  input: { foodNeed: false, waterNeed: false, item: items.food },
  output: { action: 0 }
}, {
  input: { foodNeed: true, waterNeed: false, item: items.food },
  output: { action: 1 }
}, {
  input: { foodNeed: true, waterNeed: true, item: items.food },
  output: { action: 1 }
}, {
  input: { foodNeed: false, waterNeed: true, item: items.food },
  output: { action: 1 }
}, {
  input: { foodNeed: true, waterNeed: false, item: items.water },
  output: { action: 0 }
}, {
  input: { foodNeed: true, waterNeed: true, item: items.water },
  output: { action: 1 }
}, {
  input: { foodNeed: true, waterNeed: false, item: items.empty },
  output: { action: 0 }
}, {
  input: { foodNeed: true, waterNeed: false, item: items.water },
  output: { action: 0 }
}, {
  input: { foodNeed: true, waterNeed: false, item: items.creature },
  output: { action: 0 }
}, {
  input: { foodNeed: false, waterNeed: false, item: items.creature },
  output: { action: 1 }
}, {
  input: { foodNeed: false, waterNeed: false, item: items.food },
  output: { action: 1 }
}, {
  input: { foodNeed: false, waterNeed: false, item: items.empty },
  output: { action: 1 }
}];

module.exports = { data, items};