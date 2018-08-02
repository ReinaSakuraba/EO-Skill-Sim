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

  get secondaryPenalty() {
    return 2;
  }
}
