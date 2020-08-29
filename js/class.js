import Skill from './skill.js';


class Class {
  skills = new Map();

  constructor(name, skills, forwards, levels) {
    this.name = name;

    for (const [skillName, skillInfo] of Object.entries(skills)) {
      this.skills.set(skillName, new Skill(skillInfo, forwards[skillName], levels[skillName], this));
    }
  }

  resetSkillLevels() {
    for (const skill of this.skills.values()) skill.level = 0;
  }
}


export default Class;
