document.addEventListener("DOMContentLoaded", () => {
  simulator = new EOXSimulator();
});

class EOXSimulator extends Simulator {
  get defaultClass() {
    return "Hero";
  }

  get secondaryPenalty() {
    return 2;
  }
}
