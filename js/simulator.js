const allStyles = getComputedStyle(document.documentElement);

const nodeHeight = parseInt(allStyles.getPropertyValue("--node-height").trim().slice(0, -2));
const verticalPadding = parseInt(allStyles.getPropertyValue("--node-vertical-padding").trim().slice(0, -2));


class Simulator {
  get defaultClass() {
    return "Landsknecht";
  }

  get levelCaps() {
    return [70, 80, 90, 99];
  }

  get retireBonuses() {
    return [
      [0,   'N/A',  0],
      [1, '30-39',  4],
      [2, '40-49',  5],
      [3, '50-59',  6],
      [4, '60-69',  7],
      [5, '70-98',  8],
      [6,    '99', 10],
    ];
  }

  get secondaryPenalty() {
    return 1;
  }

  constructor () {
    if (this.constructor === Simulator) {
      throw new TypeError('Abstract class "Simulator" cannot be instantiated directly.');
    }

    this._retireLevel = 0;

    this.state = { fixed: { }, primary: { }, secondary: { } };

    this.setRetireLevels();
    this.setLevelCaps();

    let levelSelect = document.getElementById("level");
    let self = this;

    levelSelect.addEventListener("change", function() {
      self.currentLevel = this.value;
    });

    this.setClasses();

    let query = window.location.search.slice(1);

    query !== "" ? this.loadSaveData(query) : this.setDefault();
  }

  get currentLevel() {
    return parseInt(this._currentLevel);
  }
  set currentLevel(value) {
    this._currentLevel = value;
    document.getElementById("level").value = value;
    this.updateSkillPoints();
  }

  get levelCap() {
    return parseInt(this._levelCap);
  }
  set levelCap(value) {
    this._levelCap = value;
    document.getElementById("level-cap").value = value;
    this.setLevels();
  }

  get retireLevel() {
    return this.retireBonuses[this._retireLevel][1];
  }
  set retireLevel(value) {
    if (this.retireBonuses.length !== 0) {
      this._retireLevel = +value;
      document.getElementById('retire').value = value.toString();
    }

    this.updateSkillPoints();
  }

  get primaryClass() {
    return this._primaryClass;
  }
  set primaryClass(value) {
    this._primaryClass = value;
    document.getElementById("class-selector-primary").value = value;
    this.disableClass(false);
    this.createSkillNodes("primary", value);
    this.updateSkillPoints();
  }

  get secondaryClass() {
    return this._secondaryClass;
  }
  set secondaryClass(value) {
    this._secondaryClass = value;
    document.getElementById("class-selector-secondary").value = value;
    this.disableClass(true);
    this.createSkillNodes("secondary", value);
    this.updateSkillPoints();
  }

  setDefault() {
    this.primaryClass = this.defaultClass;
    this.secondaryClass = "None";
    this.levelCap = this.levelCaps[0];
    this.currentLevel = 1;
    this.retireLevel = 0;
  }

  setRetireLevels() {
    const retireSelect = document.getElementById('retire');
    while (retireSelect.lastChild) retireSelect.removeChild(retireSelect.lastChild);

    for (const [id, levels,] of this.retireBonuses) {
      const option = document.createElement('option');
      option.value = id.toString();
      option.textContent = levels;
      retireSelect.appendChild(option);
    }

    retireSelect.addEventListener('change', ({target: {value}}) => {
      this.retireLevel = value;
    });
  }

  setLevelCaps() {
    if (this.levelCaps.length === 1) {
      this._levelCap = this.levelCaps[0];
      return;
    }

    const levelCapSelect = document.getElementById('level-cap');
    while (levelCapSelect.lastChild) levelCapSelect.removeChild(levelCapSelect.lastChild);

    for (const i of this.levelCaps) {
      const option = document.createElement('option');
      option.value = i.toString();
      option.textContent = i.toString();
      levelCapSelect.appendChild(option);
    }

    levelCapSelect.addEventListener('change', ({target: {value}}) => {
      this.levelCap = value;
    });
  }

  setLevels() {
    const levelSelect = document.getElementById('level');
    while (levelSelect.lastChild) levelSelect.removeChild(levelSelect.lastChild);

    for (let i = 1; i <= this.levelCap; ++i) {
      const option = document.createElement('option');
      option.value = i.toString();
      option.textContent = i.toString();
      levelSelect.appendChild(option);
    }

    this.currentLevel = this.currentLevel > this.levelCap ? this.levelCap : this.currentLevel;
  }

  setClasses() {
    for (const section of ['primary', 'secondary']) {
      const classSelector = document.getElementById(`class-selector-${section}`);

      while (classSelector.lastChild) classSelector.removeChild(classSelector.lastChild);

      if (section === 'secondary') {
        const option = document.createElement('option');
        option.value = 'None';
        option.textContent = 'None';
        classSelector.appendChild(option);
      }

      for (const cls in skills) {
        if (cls === 'common') continue;

        const option = document.createElement('option');
        option.value = cls;
        option.textContent = cls;
        classSelector.appendChild(option);
      }

      classSelector.addEventListener('change', ({target: {value}}) => {
        this[`${section}Class`] = value;
      });
    }
  }

  disableClass(primary) {
    const id = `#class-selector-${primary ? 'primary' : 'secondary'}`;

    const option = document.querySelector(`${id} option[disabled]`);
    if (option) option.disabled = false;

    const cls = primary ? this.secondaryClass : this.primaryClass;
    if (cls !== 'None') document.querySelector(`${id} option[value='${cls}']`).disabled = true;
  }

  createSkillNodes(section, classname) {
    this.state[section] = {};

    let sectionLayer = document.getElementById(`tree-${section}`);
    while (sectionLayer.lastChild) sectionLayer.removeChild(sectionLayer.lastChild);

    if (section === "secondary" && classname === "None") {
      return;
    }

    const skillEntries = Object.entries(skills[classname]);

    for (const [skillName, skill] of skillEntries) {
      if (!skill.unique || section !== "secondary") this.drawLines(sectionLayer, classname, skillName, skill);
    }

    for (const [skillName, skill] of skillEntries) {
      this.drawLevel(sectionLayer, classname, skillName, skill);
    }

    for (let [skillName, skill] of skillEntries) {
      let skillId = `skill-${classname}-${skillName}`;
      let skillMax = skill.maxLevel || skill.max;
      if (section === "secondary") skillMax /= this.secondaryPenalty;

      this.state[section][skillName] = 0;
      if (skill.unique && section === "secondary") continue;

      let a = true;

      for (let level of Object.values(skill.dep)) {
        if (level === 0) continue;
        a = false;
        break;
      }

      let node = document.createElement("div");
      node.classList.add("skill");
      node.classList.add(`skill-${section}`);
      node.classList.add(`skill-${(a ? '' : 'un') + 'available'}`);
      node.id = skillId;

      node.style.setProperty('--skill-x-pos', skill.coords.x);
      node.style.setProperty('--skill-y-pos', skill.coords.y);

      let nameDiv = document.createElement("div");
      nameDiv.classList.add("skill-name");
      nameDiv.classList.add("skill-name-en");
      nameDiv.textContent = skill.name_en;
      node.appendChild(nameDiv);

      let levelNode = document.createElement("div");

      levelNode.classList.add("skill-type");

      if (["Boost", "Break"].includes(skill.type)) {
        levelNode.classList.add("skill-type-special");
        levelNode.textContent = skill.type.toUpperCase();
      } else {
        levelNode.classList.add("skill-type-normal");

        let currentLevel = document.createElement("div");
        currentLevel.classList.add("skill-current-level");
        currentLevel.textContent = "0";
        levelNode.appendChild(currentLevel);

        let maxLevel = document.createElement("div");
        maxLevel.classList.add("skill-max-level");
        maxLevel.textContent = skillMax;
        levelNode.appendChild(maxLevel);
      }

      node.appendChild(levelNode);

      sectionLayer.appendChild(node);
    }

    let self = this;
    let nodes = document.querySelectorAll(`.skill-${section}.skill`);

    for (let node of nodes) {
      node.addEventListener("click", function() {
        let [_, className, skillName] = node.id.split("-");
        let max = skills[className][skillName].maxLevel;

        if (section === "secondary") max /= self.secondaryPenalty;

        let level = Math.min(self.state[section][skillName] + 1, max);

        self.changeSkillLevel(section, className, skillName, level);
      });

      node.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        let [_, className, skillName] = node.id.split("-");
        let level = Math.max(self.state[section][skillName] - 1, 0);

        self.changeSkillLevel(section, className, skillName, level);
      });

      node.addEventListener("mouseenter", function() {
        self.createInfoNode(section, node);
      });

      node.addEventListener("mouseleave", function() {
        self.removeInfoNode();
      });
    }
  }

  createInfoNode(section, node) {
    this.removeInfoNode();

    let [_, className, skillName] = node.id.split("-");
    let skill = skills[className][skillName];

    let levelInfo;
    let maxLevel = 2;

    try {
      levelInfo = levels[className][skillName];
      maxLevel = Object.values(levelInfo)[0].length;
    } catch (error) { }

    let tableLength = 2 + maxLevel;

    let skillInfo = document.createElement("div");
    skillInfo.classList.add("skill-info");

    let infoTable = document.createElement("table");

    let nameTitleRow = document.createElement("tr");

    let enNameTitle = document.createElement("th");
    enNameTitle.textContent = "Name";
    nameTitleRow.appendChild(enNameTitle);

    let jpNameTitle = document.createElement("th");
    jpNameTitle.textContent = "名前";
    nameTitleRow.appendChild(jpNameTitle);

    let usesTitle = document.createElement("th");
    usesTitle.textContent = "Uses";
    usesTitle.colSpan = maxLevel;
    nameTitleRow.appendChild(usesTitle);

    infoTable.appendChild(nameTitleRow);

    let nameRow = document.createElement("tr");

    let enName = document.createElement("td");
    enName.textContent = skill.name_en;
    nameRow.appendChild(enName);

    let jpName = document.createElement("td");
    jpName.textContent = skill.name_jp;
    nameRow.appendChild(jpName);

    let usesText = skill.stats.concat(skill.weapon || []).concat(skill.bodyParts || []).join(", ") || "N/A";

    let uses = document.createElement("td");
    uses.textContent = usesText;
    uses.colSpan = tableLength - 2;
    nameRow.appendChild(uses);

    infoTable.appendChild(nameRow);

    let descriptionRow = document.createElement("tr");

    let description = document.createElement("td");
    description.classList.add("skill-description");
    description.colSpan = tableLength;
    descriptionRow.appendChild(description);

    infoTable.appendChild(descriptionRow);

    if (levelInfo) {
      let curLevel = this.state[section][skillName];
      let levelHeader = document.createElement("tr");

      let levelType = document.createElement("th");
      levelType.textContent = ["Boost", "Break"].includes(skill.type) ? "Stage" : "Level";
      levelType.colSpan = 2;
      levelHeader.appendChild(levelType);

      for (let i of [...Array(maxLevel).keys()].map(i => ++i)) {
        let level = document.createElement("th");
        level.textContent = i;
        if (i === curLevel) level.classList.add("info-current-level");
        levelHeader.appendChild(level);
      }
      infoTable.appendChild(levelHeader);

      for (let [attName, attValues] of Object.entries(levelInfo)) {
        let attributeRow = document.createElement("tr");
        let attributeName = document.createElement("th");
        attributeName.textContent = attName;
        attributeName.colSpan = 2;
        attributeRow.appendChild(attributeName);

        let currentLevel = 0;
        while (currentLevel + 1 <= attValues.length) {
          let attributeCell = document.createElement("td");
          let attributeValue = attValues[currentLevel];
          let colspan = 1;

          while (attValues[++currentLevel] === attributeValue) ++colspan;

          if (curLevel >= currentLevel + 1 - colspan && currentLevel + 1 > curLevel) attributeCell.classList.add("info-current-level");

          attributeCell.colSpan = colspan;
          attributeCell.textContent = attributeValue;
          attributeRow.appendChild(attributeCell);
        }
        infoTable.appendChild(attributeRow);
      }
    }
    skillInfo.appendChild(infoTable);

    let skillNode = document.getElementById(`skill-${className}-${skillName}`);

    document.body.appendChild(skillInfo);

    let skillRect = skillNode.getBoundingClientRect();
    let infoRect = skillInfo.getBoundingClientRect();

    let width = infoRect.width;

    let posX = skillRect.left + 7 + window.scrollX;
    let posY = skillRect.top + nodeHeight + verticalPadding + window.scrollY;

    if (window.innerWidth < posX + width) posX = window.innerWidth + window.scrollX - width - 17;

    skillInfo.style.width = `${width}px`;
    skillInfo.style.left = `${posX}px`;

    description.textContent = skill.desc;

    infoRect = skillInfo.getBoundingClientRect();
    let height = infoRect.height;

    if (window.innerHeight < posY + height) posY = skillRect.top + window.scrollY - height - verticalPadding + 5;
    skillInfo.style.top = `${posY}px`;
  }

  removeInfoNode() {
    let info = document.querySelector(".skill-info");

    if (info) document.body.removeChild(info);
  }

  drawLines(tree, className, skillName, skill) {
    const deps = Object.entries(skill.dep);
    const forwards = Object.entries(forward[className][skillName]);

    const {x, y} = skill.coords;

    if (forwards.length) {
      const forwardX = skills[className][forwards[0][0]].coords.x;

      this.drawHorizontalLine(tree, x, y, forwardX);

      if (forwards.length > 1) {
        const {0: minY, length, [length - 1]: maxY} = forwards.map(([id]) => skills[className][id].coords.y).sort();

        this.drawVerticalLine(tree, forwardX, minY, maxY);
      }
    }

    if (deps.length) {
      this.drawHorizontalLine(tree, x, y);

      if (deps.length > 1) {
        const {0: minY, length, [length - 1]: maxY} = deps.map(([id]) => skills[className][id].coords.y).sort();

        this.drawVerticalLine(tree, x, minY, maxY);
      }
    }
  }

  drawLevel(tree, className, skillName, skill) {
    const forwards = Object.entries(forward[className][skillName]);
    if (!forwards.length) return;

    const level = forwards[0][1];
    if (!level) return;

    const {x, y} = skill.coords;

    const levelReq = document.createElement('span');
    levelReq.textContent = `Lv${level}`;
    levelReq.classList.add('level-req');
    levelReq.style.setProperty('--level-x-pos', x);
    levelReq.style.setProperty('--level-y-pos', y);
    tree.appendChild(levelReq);
  }

  drawVerticalLine(tree, x, minY, maxY) {
    const line = document.createElement('div');
    line.classList.add('line', 'vertical-line');
    line.style.setProperty('--vertical-line-x-pos', x);
    line.style.setProperty('--vertical-line-min-y-pos', minY);
    line.style.setProperty('--vertical-line-max-y-pos', maxY);
    tree.appendChild(line);
  }

  drawHorizontalLine(tree, x, y, forwardX) {
    const isDep = forwardX === undefined;

    const line = document.createElement('div');
    line.classList.add('line', 'horizontal-line', isDep ? 'dep-line' : 'forward-line');
    line.style.setProperty('--line-x-pos', x);
    if (!isDep) line.style.setProperty('--line-x-end-pos', forwardX);
    line.style.setProperty('--line-y-pos', y);
    tree.appendChild(line);
  }

  changeSkillLevel(section, className, skillName, level) {
    level = parseInt(level);
    let old = this.state[section][skillName];
    if (level === old) return;

    this.state[section][skillName] = level;

    let self = this;
    let resolve;

    if (level > old) {
      resolve = skillName => {
        let dep = skills[className][skillName].dep;
        for (let [depName, depLevel] of Object.entries(dep)) {
          if (self.state[section][depName] < depLevel) {
            self.state[section][depName] = depLevel;
            resolve(depName);
          }
        }
      };
    } else {
      resolve = skillName => {
        let level = self.state[section][skillName];
        let dep = forward[className][skillName];
        for (let [depName, depLevel] of Object.entries(dep)) {
          if (self.state[section][depName] > 0 && level < depLevel) {
            self.state[section][depName] = 0;
            resolve(depName);
          }
        }
      };
    }
    resolve(skillName);

    let node = document.getElementById(`skill-${className}-${skillName}`);
    this.createInfoNode(section, node);
    this.updateNodes(section, className);
  }

  updateNodes(section, className) {
    for (let [skillName, skillLevel] of Object.entries(this.state[section])) {
      let skillNode = document.getElementById(`skill-${className}-${skillName}`);
      if (skillNode === null) continue;

      let a = true;
      for (let [depName, depLevel] of Object.entries(skills[className][skillName].dep)) {
        if (this.state[section][depName] < depLevel) {
          a = false;
          break;
        }
      }

      if (["Boost", "Break"].includes(skills[className][skillName].type)) continue;

      skillNode.childNodes[1].childNodes[0].textContent = skillLevel;

      skillNode.classList.remove(`skill-available`);
      skillNode.classList.remove(`skill-unavailable`);
      skillNode.classList.add(`skill-${(a ? '' : 'un') + 'available'}`);
    }
    this.updateSkillPoints();
  }

  updateSkillPoints() {
    let points = 2 + this.currentLevel;

    if (this.secondaryClass && this.secondaryClass !== "None") points += 5;

    if (this.retireLevel !== 'N/A') points += this.retireBonuses[this._retireLevel][2];

    document.getElementById("points-total").textContent = points;

    let pointsUsed = 0;

    for (let section of Object.values(this.state)) {
      for (let points of Object.values(section)) pointsUsed += points;
    }

    document.getElementById("points-current").textContent = pointsUsed;
  }

  generateSaveData() {
    let saveData = `${this.primaryClass}|${this.secondaryClass}|${this.currentLevel}|${this.levelCap}|${this.retireLevel}`;

    for (let [category, className] of [["fixed", "common"], ["primary", this.primaryClass], ["secondary", this.secondaryClass]]) {
      if (className === null || className === "N/A") continue;

      let leveledSkills = [];

      for (let [skill, level] of Object.entries(this.state[category])) {
        if (level === 0) continue;

        let forwardSkills = Object.entries(forward[className][skill]);

        if (forwardSkills.length === 0) {
          leveledSkills.push(`${skill},${level}`);
          continue;
        }

        for (let [forwardSkill, forwardLevel] of forwardSkills) {
          if (level !== forwardLevel) {
            leveledSkills.push(`${skill},${level}`);
            break;
          }

          if (level === forwardLevel && this.state[category][forwardSkill] === 0) {
            leveledSkills.push(`${skill},${level}`);
            break;
          }
        }
      }
      saveData += `|${leveledSkills.join(';')}`;
    }

    return LZString.compressToEncodedURIComponent(saveData);
  }

  loadSaveData(queryString) {
    let decoded = LZString.decompressFromEncodedURIComponent(queryString).split('|');

    this.primaryClass = decoded.splice(0, 1)[0];
    this.secondaryClass = decoded.splice(0, 1)[0];
    this.currentLevel = decoded.splice(0, 1)[0];
    this.levelCap = decoded.splice(0, 1)[0];
    this.retireLevel = decoded.splice(0, 1)[0];

    for (let [category, className] of [["fixed", "common"], ["primary", this.primaryClass], ["secondary", this.secondaryClass]]) {
      let leveledSkills = decoded.splice(0, 1)[0];
      if (leveledSkills.length === 0) continue;
      for (let skill of leveledSkills.split(';')) {
        this.changeSkillLevel(category, className, ...skill.split(","));
      }
    }
  }
}
