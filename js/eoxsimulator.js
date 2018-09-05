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
    return { "30-59": 3, "60-69": 4, "70-89": 5, "90-119": 6, "120-129": 7, "130": 10 }
  }

  get secondaryPenalty() {
    return 2;
  }
}
