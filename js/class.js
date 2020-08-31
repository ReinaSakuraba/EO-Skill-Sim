import Skill from './skill.js';


class Class {
  constructor(name, skills, forwards, levels, simulator) {
    this.name = name;
    this.simulator = simulator;
    this.skills = new Map();

    for (const [skillName, skillInfo] of Object.entries(skills)) {
      this.skills.set(skillName, new Skill(skillInfo, forwards[skillName], levels[skillName], this));
    }
  }

  resetSkillLevels() {
    for (const skill of this.skills.values()) skill.level = 0;
  }

  get isMain() {
    return this === this.simulator.class;
  }
}


export default Class;
