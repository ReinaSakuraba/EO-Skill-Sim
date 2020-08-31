class Skill {
  constructor({name, desc, stats, unique = false, type = null, maxLevel, coords: {x, y}, dep}, forwards, levels, class_) {
    this.name = name;
    this.description = desc;
    this.stats = stats;
    this.unique = unique;
    this.type = type;
    this.coords = {x, y};
    this.levels = levels;

    this._maxLevel = maxLevel;
    this._dep = dep;
    this._forwards = forwards;
    this._level = 0;
    this.class = class_;
  }

  get available() {
    for (const [depSkill, depLevel] of this.prereqs) if (depSkill.level < depLevel) return false;
    return true;
  }

  get forwards() {
    const forwards = new Map();

    for (const [skillName, reqLevel] of Object.entries(this._forwards)) {
      forwards.set(this.class.skills.get(skillName), reqLevel);
    }

    Object.defineProperty(this, 'forwards', {value: forwards, writable: false});
    return forwards;
  }

  get prereqs() {
    const prereqs = new Map();

    for (const [skillName, reqLevel] of Object.entries(this._dep)) {
      prereqs.set(this.class.skills.get(skillName), reqLevel);
    }

    Object.defineProperty(this, 'prereqs', {value: prereqs, writable: false});
    return prereqs;
  }

  get maxLevel() {
    let maxLevel = this._maxLevel;

    if (!this.class.isMain) maxLevel /= this.class.simulator.secondaryPenalty;

    return maxLevel;
  }

  get level() {
    return this._level;
  }
  set level(value) {
    value = Math.min(Math.max(value, 0), this.maxLevel);
    const old = this._level;

    if (old === value) return;

    this._level = value;

    if (value > old) {
      for (const [skill, reqLevel] of this.prereqs) if (skill.level < reqLevel) skill.level = reqLevel;
      for (const [skill, reqLevel] of this.forwards) if (value === reqLevel && skill.level === 0) skill.updateNode();
    } else {
      for (const [skill, reqLevel] of this.forwards) if (value < reqLevel) {
        if (skill.level > 0) skill.level = 0;
        else if (old >= reqLevel) skill.updateNode();
      }
    }

    this.updateNode();
  }

  get node() {
    const skillId = `skill-${this.class.name}-${this.name}`;

    const node = document.createElement('div');
    node.classList.add('skill', `skill-${this.available ? '' : 'un'}available`);
    node.id = skillId;

    node.style.setProperty('--skill-x-pos', this.coords.x);
    node.style.setProperty('--skill-y-pos', this.coords.y);

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('skill-name');
    nameDiv.textContent = this.name;
    node.appendChild(nameDiv);

    const levelNode = document.createElement('div');
    let skillType;

    if (['Boost', 'Break'].includes(this.type)) {
      skillType = 'special';
      levelNode.textContent = this.type.toUpperCase();
    } else {
      skillType = 'normal';

      const currentLevel = document.createElement('div');
      currentLevel.classList.add('skill-current-level');
      currentLevel.textContent = this.level.toString();
      levelNode.appendChild(currentLevel);

      const maxLevel = document.createElement('div');
      maxLevel.classList.add('skill-max-level');
      maxLevel.textContent = this.maxLevel.toString();
      levelNode.appendChild(maxLevel);
    }

    levelNode.classList.add('skill-type', `skill-type-${skillType}`);

    node.appendChild(levelNode);

    node.addEventListener('click', () => {
      this.level += 1;
      this.class.simulator.createInfoNode(this);
      this.class.simulator.updateSkillPoints();
    });

    node.addEventListener('contextmenu', e => {
      e.preventDefault();
      this.level -= 1;
      this.class.simulator.createInfoNode(this);
      this.class.simulator.updateSkillPoints();
    });

    node.addEventListener('mouseenter', () => this.class.simulator.createInfoNode(this));

    node.addEventListener('mouseleave', () => this.class.simulator.removeInfoNode());

    Object.defineProperty(this, 'node', {value: node, writable: false});
    return node;
  }

  updateNode() {
    const node = this.node;
    if (!['Boost', 'Break'].includes(this.type)) {
      node.lastChild.lastChild.textContent = this.maxLevel.toString();
      node.lastChild.firstChild.textContent = this.level.toString();
    }
    node.classList.remove('skill-available', 'skill-unavailable');
    node.classList.add(`skill-${this.available ? '' : 'un'}available`);
  }
}


export default Skill;
