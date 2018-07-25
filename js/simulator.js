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

    this.language = "en";
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

    window.addEventListener("resize", () => this.resizeTree());

    this.setPrimaryClasses();
    this.setSecondaryClasses();

    let query = window.location.search.slice(1)

    if (query !== "") {
      this.loadSaveData(query);
    } else {
      this.setDefault();
    }
    this.resizeTree();
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
    while ( levelCapSelect.lastChild ) { levelCapSelect.removeChild(levelCapSelect.lastChild) };

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
    while (levelSelect.lastChild) { levelSelect.removeChild(levelSelect.lastChild) };

    for (let i = 1; i <= maxLevel; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      levelSelect.appendChild(option);
    }

    if (this.currentLevel > maxLevel) {
      this.currentLevel = maxLevel;
      this.resetPoints();
    } else {
      this.currentLevel = this.currentLevel;
    }
  }

  setPrimaryClasses() {
    let primarySelect = document.getElementById("class-selector-primary");
    while ( primarySelect.lastChild ) { primarySelect.removeChild(primarySelect.lastChild) };

    for ( let c in skills ) {
      if (c == "Common") continue;
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
      if (c == "Common") continue;
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

    if (secondaryClass != "None") {
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
    this.state[section] = {}

    let sectionLayer = document.getElementById(`tree-${section}`);
    while (sectionLayer.lastChild) { sectionLayer.removeChild(sectionLayer.lastChild) };

    if (section == "secondary" && classname == "None") {
      return;
    }

    for (let [skillName, skill] of Object.entries(skills[classname])) {
      let skillId = `skill-${classname}-${skillName}`;
      let skillMax = skill.maxLevel || skill.max;
      if (section == "secondary") skillMax /= this.secondaryPenalty;

      this.state[section][skillName] = 0;
      if (skill.unique && section == "secondary") continue;

      let x = skill.coords["x"] * 350;
      let y = skill.coords["y"] * 45;

      let a = true;

      for (let level of Object.values(skill.dep)) {
        if (level == 0) continue;
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
      //nameDiv.textContent = `${skill.coords["x"]}-${skill.coords["y"]}`;
      nameDiv.textContent = skill.name_en;
      node.appendChild(nameDiv);

      let levelNode = document.createElement("div");
      levelNode.classList.add("skill-level");

      let currentLevel = document.createElement("div");
      currentLevel.classList.add("skill-current-level");
      currentLevel.textContent = "0";
      levelNode.appendChild(currentLevel);

      let maxLevel = document.createElement("div");
      maxLevel.classList.add("skill-max-level");
      maxLevel.textContent = skillMax;
      levelNode.appendChild(maxLevel);

      node.appendChild(levelNode);

      node.addEventListener("click", function() {});

      node.addEventListener("mouseout", function() {});

      sectionLayer.appendChild(node);

      this.drawLines(sectionLayer, classname, skillName, skill);
    }

    let self = this;
    let nodes = document.querySelectorAll(`.skill-${section}.skill`);

    for (let node of nodes) {
      node.addEventListener("click", function() {
        let [_, className, skillName] = node.id.split("-");
        let max = skills[className][skillName].maxLevel;

        if (section == "secondary") max /= self.secondaryPenalty;

        let level = Math.min(self.state[section][skillName] + 1, max);

        self.changeSkillLevel(section, className, skillName, level);
      });

      node.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        let [_, className, skillName] = node.id.split("-");
        let level = Math.max(self.state[section][skillName] - 1, 0);

        self.changeSkillLevel(section, className, skillName, level);
      });
    }
  }

  drawLines(tree, className, skillName, skill) {
    let deps = Object.entries(skill.dep);
    let forwards = Object.entries(forward[className][skillName]);

    let nodeHeight = 30;
    let nodeWidth = 265;
    let nodeBorder = 2;

    let horizontalPadding = 85;
    let verticalPadding = 15;

    if (forwards.length > 0) {
      let multi = forwards.length > 1;

      let startX = skill.coords.x * (nodeWidth + horizontalPadding) + nodeWidth + nodeBorder * 2;
      let startY = skill.coords.y * (nodeHeight + verticalPadding) + nodeHeight / 2;

      let length = horizontalPadding / 2;

      let forwardX = skills[className][forwards[0][0]].coords.x;
      let xDiff = forwardX - skill.coords.x - 1;
      if (xDiff > 0) length += xDiff * (nodeWidth + horizontalPadding);

      this.drawHorizontalLine(tree, startX, startY, length);

      if (forwards.length > 1) {
        let x = forwardX * (nodeWidth + horizontalPadding) - horizontalPadding / 2 + nodeBorder * 2;
        let y = skills[className][forwards[0][0]].coords.y * (nodeHeight + verticalPadding) + nodeHeight / 2;
        this.drawVerticalLine(tree, x, y, (nodeHeight + verticalPadding) * (forwards.length - 1));
      }

      let level = forwards[0][1];
      if (level != 0) {
        let levelReq = document.createElement("div");
        levelReq.textContent = `Lv${level}`;
        levelReq.classList.add("level-req");
        levelReq.style.left = `${startX + 5}px`;
        levelReq.style.top = `${startY - 10}px`;
        tree.appendChild(levelReq);
      }
    }

    if (deps.length > 0) {
      let startX = skill.coords.x * (nodeWidth + horizontalPadding) - horizontalPadding / 2 + nodeBorder * 4;
      let startY = skill.coords.y * (nodeHeight + verticalPadding) + nodeHeight / 2;

      this.drawHorizontalLine(tree, startX, startY, horizontalPadding / 2 - nodeBorder * 6);

      if (deps.length > 1) {
        let x = skill.coords.x * (nodeWidth + horizontalPadding) - horizontalPadding / 2 + nodeBorder * 2;
        let y = Math.min(...deps.map(dep => skills[className][dep[0]].coords.y)) * (nodeHeight + verticalPadding) + nodeHeight / 2;
        this.drawVerticalLine(tree, x, y, (nodeHeight + verticalPadding) * (deps.length - 1));
      }
    }
  }

  drawVerticalLine(tree, x, y, length) {
    let box = tree.getBoundingClientRect()

    let line = document.createElement("div");
    line.classList.add("line");
    line.style.width = "4px";
    line.style.height = `${length + 4}px`;
    line.style.left = `${x}px`;
    line.style.top = `${y}px`;
    tree.appendChild(line);
  }

  drawHorizontalLine(tree, x, y, length) {
    let box = tree.getBoundingClientRect()

    let line = document.createElement("div");
    line.classList.add("line");
    line.style.width = `${length + 4}px`;
    line.style.height = "4px";
    line.style.left = `${x}px`;
    line.style.top = `${y}px`;
    tree.appendChild(line);
  }

  changeSkillLevel(section, className, skillName, level) {
    console.log(section, className, skillName, level);
    let old = this.state[section][skillName];
    if (level == old) return;

    this.state[section][skillName] = level;

    let self = this;

    if (level > old) {
      var resolve = skillName => {
        let dep = skills[className][skillName].dep;
        for (let [depName, depLevel] of Object.entries(dep)) {
          if (self.state[section][depName] < depLevel) {
            self.state[section][depName] = depLevel;
            resolve(depName);
          }
        }
      };
    } else {
      var resolve = skillName => {
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

      skillNode.childNodes[1].childNodes[0].textContent = skillLevel;

      skillNode.classList.remove(`skill-available`);
      skillNode.classList.remove(`skill-unavailable`);
      skillNode.classList.add(`skill-${(a ? '' : 'un') + 'available'}`);
    }
    this.updateSkillPoints();
  }

  updateSkillPoints() {
    let points = 2 + this.currentLevel;

    if (this.secondaryClass && this.secondaryClass != "None") points += 5;

    if (this.retireLevel != "N/A") points += this.retireBonuses[this.retireLevel];

    document.getElementById("points-total").textContent = points;

    let pointsUsed = 0;

    for (let section of Object.values(this.state)) {
      for (let points of Object.values(section)) pointsUsed += points;
    }

    document.getElementById("points-current").textContent = pointsUsed;
  }

  generateSaveData() {
    let saveData = `${this.primaryClass}|${this.secondaryClass}|${this.currentLevel}|${this.levelCap}|${this.retireLevel}|${JSON.stringify(this.state)}`
    return LZString.compressToEncodedURIComponent(saveData);
  }

  loadSaveData(queryString) {
    let decoded = LZString.decompressFromEncodedURIComponent(queryString).split('|')

    this.primaryClass = decoded.splice(0, 1)[0];
    this.secondaryClass = decoded.splice(0, 1)[0];
    this.currentLevel = decoded.splice(0, 1)[0];
    this.levelCap = decoded.splice(0, 1)[0];
    this.retireLevel = decoded.splice(0, 1)[0];
    this.state = JSON.parse(decoded.splice(0));

    this.updateNodes("fixed", "Common");
    this.updateNodes("primary", this.primaryClass);
    this.updateNodes("secondary", this.secondaryClass);
  }

  resizeTree() {
    let main = document.getElementById("main");
    let scale = main.clientWidth / 2019;

    let trees = document.querySelectorAll(".tree");

    for (let tree of trees) {
      tree.style.transform = `scale(${scale})`;
    }

    let treeContainers = document.querySelectorAll(".tree-container");

    for (let container of treeContainers) {
      let width = scale * 2019;
      let height = scale * 304;
      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
    }
  }
}

