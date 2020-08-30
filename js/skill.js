class Skill {
  #level = 0;
  #dep;
  #forwards;

  constructor({name, desc, stats, unique = false, type = null, maxLevel, coords: {x, y}, dep}, forwards, levels, class_) {
    this.name = name;
    this.description = desc;
    this.stats = stats;
    this.unique = unique;
    this.type = type;
    this.maxLevel = maxLevel;
    this.coords = {x, y};
    this.levels = levels;

    this.#dep = dep;
    this.#forwards = forwards;
    this.class = class_;
  }

  get available() {
    for (const [depSkill, depLevel] of this.prereqs) if (depSkill.level < depLevel) return false;
    return true;
  }

  get forwards() {
    const forwards = new Map();

    for (const [skillName, reqLevel] of Object.entries(this.#forwards)) {
      forwards.set(this.class.skills.get(skillName), reqLevel);
    }

    return forwards;
  }

  get prereqs() {
    const prereqs = new Map();

    for (const [skillName, reqLevel] of Object.entries(this.#dep)) {
      prereqs.set(this.class.skills.get(skillName), reqLevel);
    }

    return prereqs;
  }

  get level() {
    return this.#level;
  }
  set level(value) {
    value = Math.min(Math.max(value, 0), this.maxLevel);
    const old = this.#level;

    if (old === value) return;

    this.#level = value;

    if (value > old) {
      for (const [skill, reqLevel] of this.prereqs) if (skill.level < reqLevel) skill.level = reqLevel;
    } else {
      for (const [skill, reqLevel] of this.forwards) if (skill.level > 0 && value < reqLevel) skill.level = 0;
    }

    const simulator = this.class.simulator;
    simulator.updateNodes(this.class===simulator.class);
  }
}


export default Skill;
