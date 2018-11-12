const allStyles = getComputedStyle(document.documentElement);

const nodeWidth = parseInt(allStyles.getPropertyValue("--node-width").trim().slice(0, -2));
const nodeHeight = parseInt(allStyles.getPropertyValue("--node-height").trim().slice(0, -2));
const nodeBorder = parseInt(allStyles.getPropertyValue("--node-border").trim().slice(0, -2));
const horizontalPadding = parseInt(allStyles.getPropertyValue("--node-horizontal-padding").trim().slice(0, -2));
const verticalPadding = parseInt(allStyles.getPropertyValue("--node-vertical-padding").trim().slice(0, -2));

const horizontalBuffer = nodeWidth + horizontalPadding;
const verticalBuffer = nodeHeight + verticalPadding;

const treeWidth = nodeWidth * 6 + horizontalPadding * 5 + nodeBorder * 2;
const treeHeight = nodeHeight * 7 + verticalPadding * 6 + nodeBorder * 2;


class Simulator {
  get defaultClass() {
    return "Landsknecht";
  }

  get levelCaps() {
    return [70, 80, 90, 99];
  }

  get retireBonuses() {
    return { "30-39": 4, "40-49": 5, "50-59": 6, "60-69": 7, "70-98": 8, "99": 10 }
  }

  get secondaryPenalty() {
    return 1;
  }

  constructor () {
    if (this.constructor === Simulator) {
      throw new TypeError('Abstract class "Simulator" cannot be instantiated directly.');
    }

    this.state = { fixed: { }, primary: { }, secondary: { } };

    this.setLevelCaps();

    let retireSelect = document.getElementById("retire");

    for (let levels of Object.keys(this.retireBonuses).sort()) {
      let option = document.createElement("option");
      option.value = levels;
      option.textContent = levels;
      retireSelect.appendChild(option);
    }

    let levelSelect = document.getElementById("level");
    let self = this;

    retireSelect.addEventListener("change", function() {
      self.retireLevel = this.value;
    });

    levelSelect.addEventListener("change", function() {
      self.currentLevel = this.value;
    });

    this.setPrimaryClasses();
    this.setSecondaryClasses();

    let query = window.location.search.slice(1);

    query !== "" ? this.loadSaveData(query) : this.setDefault();

    let trees = document.querySelectorAll(".tree");
    for (let tree of trees) {
      tree.style.width = `${treeWidth}px`;
      tree.style.height = `${treeHeight}px`;
    }
    document.body.style.minWidth = `${treeWidth}px`;
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
    this.setLevels(value);
  }

  get retireLevel() {
    return this._retireLevel;
  }
  set retireLevel(value) {
    this._retireLevel = value;
    document.getElementById("retire").value = value;
    this.updateSkillPoints();
 }

  get primaryClass() {
    return this._primaryClass;
  }
  set primaryClass(value) {
    this._primaryClass = value;
    document.getElementById("class-selector-primary").value = value;
    this.disableSecondaryClasses(value);
    this.createSkillNodes("primary", value);
    this.updateSkillPoints();
  }

  get secondaryClass() {
    return this._secondaryClass;
  }
  set secondaryClass(value) {
    this._secondaryClass = value;
    document.getElementById("class-selector-secondary").value = value;
    this.disablePrimaryClasses(value);
    this.createSkillNodes("secondary", value);
    this.updateSkillPoints();
  }

  setDefault() {
    this.primaryClass = this.defaultClass;
    this.secondaryClass = "None";
    this.levelCap = this.levelCaps[0];
    this.currentLevel = 1;
    this.retireLevel = "N/A";
  }

  setLevelCaps() {
    let levelCapSelect = document.getElementById("level-cap");
    while (levelCapSelect.lastChild) levelCapSelect.removeChild(levelCapSelect.lastChild);

    for (let i of this.levelCaps) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      levelCapSelect.appendChild(option);
    }

    let self = this;
    levelCapSelect.addEventListener("change", function() {
      self.levelCap = this.value;
    });
  }

  setLevels(maxLevel) {
    let levelSelect = document.getElementById("level");
    while (levelSelect.lastChild) levelSelect.removeChild(levelSelect.lastChild);

    for (let i = 1; i <= maxLevel; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      levelSelect.appendChild(option);
    }

    this.currentLevel = this.currentLevel > maxLevel ? maxLevel : this.currentLevel;
  }

  setPrimaryClasses() {
    let primarySelect = document.getElementById("class-selector-primary");
    while (primarySelect.lastChild) primarySelect.removeChild(primarySelect.lastChild);

    for ( let c in skills ) {
      if (c === "Common") continue;
      let option = document.createElement("option");
      option.value = c;
      option.textContent = c;
      primarySelect.appendChild(option);
    }

    let self = this;
    document.getElementById("class-selector-primary").addEventListener("change", function() {
      self.primaryClass = this.value;
    });
  }

  setSecondaryClasses() {
    let secondarySelect = document.getElementById("class-selector-secondary");

    for ( let c in skills ) {
      if (c === "Common") continue;
      let option = document.createElement("option");
      option.value = c;
      option.textContent = c;
      secondarySelect.appendChild(option);
    }

    let self = this;
    document.getElementById("class-selector-secondary").addEventListener("change", function() {
      self.secondaryClass = this.value;
    });
  }

  disablePrimaryClasses(secondaryClass) {
    let primaryOptions = document.querySelectorAll("#class-selector-primary option[disabled]");
    for (let option of primaryOptions) {
      option.disabled = false;
    }

    if (secondaryClass !== "None") {
      document.querySelector(`#class-selector-primary option[value="${secondaryClass}"]`).disabled = true;
    }
  }

  disableSecondaryClasses(primaryClass) {
    let secondaryOptions = document.querySelectorAll("#class-selector-secondary option[disabled]");
    for (let option of secondaryOptions) {
      option.disabled = false;
    }

    document.querySelector(`#class-selector-secondary option[value="${primaryClass}"]`).disabled = true;
  }

  createSkillNodes(section, classname) {
    this.state[section] = {};

    let sectionLayer = document.getElementById(`tree-${section}`);
    while (sectionLayer.lastChild) sectionLayer.removeChild(sectionLayer.lastChild);

    if (section === "secondary" && classname === "None") {
      return;
    }

    for (let [skillName, skill] of Object.entries(skills[classname])) {
      let skillId = `skill-${classname}-${skillName}`;
      let skillMax = skill.maxLevel || skill.max;
      if (section === "secondary") skillMax /= this.secondaryPenalty;

      this.state[section][skillName] = 0;
      if (skill.unique && section === "secondary") continue;

      let x = skill.coords["x"] * horizontalBuffer;
      let y = skill.coords["y"] * verticalBuffer;

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

      node.style.left = `${x}px`;
      node.style.top = `${y}px`;

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

      this.drawLines(sectionLayer, classname, skillName, skill);
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
    let deps = Object.entries(skill.dep);
    let forwards = Object.entries(forward[className][skillName]);

    if (forwards.length > 0) {
      let startX = skill.coords.x * horizontalBuffer + nodeWidth + nodeBorder * 2;
      let startY = skill.coords.y * verticalBuffer + nodeHeight / 2;

      let forwardX = skills[className][forwards[0][0]].coords.x;
      let xDiff = forwardX - skill.coords.x - 1;

      let length = horizontalPadding / 2 + xDiff * horizontalBuffer;

      this.drawHorizontalLine(tree, startX, startY, length);

      if (forwards.length > 1) {
        let forwardYs = forwards.map(forward => skills[className][forward[0]].coords.y);
        let minY = Math.min(...forwardYs);
        let maxY = Math.max(...forwardYs);

        let x = forwardX * horizontalBuffer - horizontalPadding / 2 + nodeBorder * 2;
        let y = minY * verticalBuffer + nodeHeight / 2;
        this.drawVerticalLine(tree, x, y, verticalBuffer * (maxY - minY));
      }

      let level = forwards[0][1];
      if (level !== 0) {
        let levelReq = document.createElement("div");
        levelReq.textContent = `Lv${level}`;
        levelReq.classList.add("level-req");
        levelReq.style.left = `${startX}px`;
        levelReq.style.top = `${startY - 10}px`;
        tree.appendChild(levelReq);
      }
    }

    if (deps.length > 0) {
      let startX = skill.coords.x * horizontalBuffer - horizontalPadding / 2 + nodeBorder * 4;
      let startY = skill.coords.y * verticalBuffer + nodeHeight / 2;

      this.drawHorizontalLine(tree, startX, startY, horizontalPadding / 2 - nodeBorder * 6);

      if (deps.length > 1) {
        let depYs = deps.map(dep => skills[className][dep[0]].coords.y);
        let minY = Math.min(...depYs);
        let maxY = Math.max(...depYs);

        let x = skill.coords.x * horizontalBuffer - horizontalPadding / 2 + nodeBorder * 2;
        let y = minY * verticalBuffer + nodeHeight / 2;
        this.drawVerticalLine(tree, x, y, verticalBuffer * (maxY - minY));
      }
    }
  }

  drawVerticalLine(tree, x, y, length) {
    let line = document.createElement("div");
    line.classList.add("line");
    line.style.width = "4px";
    line.style.height = `${length + 4}px`;
    line.style.left = `${x}px`;
    line.style.top = `${y}px`;
    tree.appendChild(line);
  }

  drawHorizontalLine(tree, x, y, length) {
    let line = document.createElement("div");
    line.classList.add("line");
    line.style.width = `${length + 4}px`;
    line.style.height = "4px";
    line.style.left = `${x}px`;
    line.style.top = `${y}px`;
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

    if (this.retireLevel !== "N/A") points += this.retireBonuses[this.retireLevel];

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
