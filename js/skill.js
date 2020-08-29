class Skill {
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
    this.level = 0;

    this.#dep = dep;
    this.#forwards = forwards;
    this.class = class_;
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
}


export default Skill;
