document.addEventListener("DOMContentLoaded", () => {
  simulator = new EOXSimulator();
});

class EOXSimulator extends Simulator {
  get defaultClass() {
    return "Hero";
  }

  get levelCaps() {
    return [99, 109, 119, 130];
  }

  get retireBonuses() {
    return [
      [0,     'N/A',  0],
      [1,   '30-59',  3],
      [2,   '60-69',  4],
      [3,   '70-89',  5],
      [4,  '90-119',  6],
      [5, '120-129',  7],
      [6,     '130', 10],
    ];
  }

  get secondaryPenalty() {
    return 2;
  }
}
