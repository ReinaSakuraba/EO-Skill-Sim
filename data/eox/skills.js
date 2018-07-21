let skills = {
  Hero: {
    braveheart: {
      name_en: "Braveheart",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    miracleEdge: {
      name_en: "Miracle Edge",
      unique: true,
      type: "Break",
      dep: { braveheart: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    afterimage: {
      name_en: "Afterimage",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    mirageSword: {
      name_en: "Mirage Sword",
      dep: { afterimage: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    braveWide: {
      name_en: "Brave Wide",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    freezingSlash: {
      name_en: "Freezing Slash",
      dep: { braveWide: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    encouragement: {
      name_en: "Encouragement",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    herosBonds: {
      name_en: "Hero's Bonds",
      dep: {encouragement: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    shieldArts: {
      name_en: "Shield Arts",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    clearMind: {
      name_en: "Clear Mind",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 5 }
    },
    chop: {
      name_en: "Chop",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Protector: {
    shieldProtect: {
      name_en: "Shield Protect",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    perfectDefense: {
      name_en: "Perfect Defense",
      unique: true,
      type: "Break",
      dep: { shieldProtect: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    frontGuard: {
      name_en: "Front Guard",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1 }
    },
    backGuard: {
      name_en: "Back Guard",
      dep: { frontGuard: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 1 }
    },
    cellDivide: {
      name_en: "Cell Divide",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    fortify: {
      name_en: "Fortify",
      dep: { cellDivide: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    shieldSmite: {
      name_en: "Shield Smite",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 3 }
    },
    provoke: {
      name_en: "Provoke",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    preProvoke: {
      name_en: "Pre-Provoke",
      dep: { provoke: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    healingWall: {
      name_en: "Healing Wall",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name_en: "Chop",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Ronin: {
    peerless: {
      name_en: "Peerless",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    issen: {
      name_en: "Issen",
      unique: true,
      type: "Break",
      dep: { peerless: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    upperStance: {
      name_en: "Upper Stance",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    upwardSlash: {
      name_en: "Upward Slash",
      dep: { upperStance: 1 },
      maxLevel: 4,
      coords: { x: 1, y: 1 }
    },
    clearStance: {
      name_en: "Clear Stance",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    chargingThrust: {
      name_en: "Charging Thrust",
      dep: { clearStance: 1 },
      maxLevel: 4,
      coords: { x: 1, y: 2 }
    },
    drawingStance: {
      name_en: "Drawing Stance",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    sheathStrike: {
      name_en: "Sheath Strike",
      dep: { drawingStance: 1 },
      maxLevel: 4,
      coords: { x: 1, y: 3 }
    },
    airSlash: {
      name_en: "Air Slash",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    armStrike: {
      name_en: "Arm Strike",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    breath: {
      name_en: "Breath",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    }
  },
  Medic: {
    steadyHands: {
      name_en: "Steady Hands",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    medicalMiracle: {
      name_en: "Medical Miracle",
      unique: true,
      type: "Break",
      dep: { steadyHands: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    healing: {
      name_en: "Healing",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    lineHeal: {
      name_en: "Line Heal",
      dep: { healing: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 1.5 }
    },
    patchUp: {
      name_en: "Patch Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    refresh: {
      name_en: "Refresh",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 3 }
    },
    antibodies: {
      name_en: "Antibodies",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    revive: {
      name_en: "Revive",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    scavenge: {
      name_en: "Scavenge",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    headDrop: {
      name_en: "Head Drop",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Survivalist: {
    illusionStep: {
      name_en: "Illusion Step",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    mirageArrow: {
      name_en: "Mirage Arrow",
      dep: { illusionStep: 0 },
      unique: true,
      type: "Break",
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    powerShot: {
      name_en: "Power Shot",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1.5 }
    },
    flameArrow: {
      name_en: "Flame Arrow",
      dep: { powerShot: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1.5 }
    },
    blindArrow: {
      name_en: "Blind Arrow",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    chainDance: {
      name_en: "Chain Dance",
      dep: { blindArrow: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    stalker: {
      name_en: "Stalker",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    riskPerception: {
      name_en: "Risk Perception",
      dep: { stalker: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    resuscitate: {
      name_en: "Resuscitate",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    sortingSkill: {
      name_en: "Sorting Skill",
      dep: { resuscitate: 3 },
      maxLevel: 10,
      coords: { x: 1, y: 5 }
    },
    naturalInstinct: {
      name_en: "Natural Instinct",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Gunner: {
    actBoost: {
      name_en: "Act Boost",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    supremeBolt: {
      name_en: "Supreme Bolt",
      unique: true,
      type: "Break",
      dep: { actBoost: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    rapidFire: {
      name_en: "Rapid Fire",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    spreadShot: {
      name_en: "Spread Shot",
      dep: { rapidFire: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    legSnipe: {
      name_en: "Leg Snipe",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 2 }
    },
    armSnipe: {
      name_en: "Arm Snipe",
      dep: { legSnipe: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    coverFire: {
      name_en: "Cover Fire",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    shellShock: {
      name_en: "Shell Shock",
      dep: { coverFire: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    medicBullet: {
      name_en: "Medic Bullet",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    popFlares: {
      name_en: "Pop Flares",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  "War Magus": {
    warEdgePower: {
      name_en: "War Edge Power",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    fairyRobe: {
      name_en: "Fairy Robe",
      unique: true,
      type: "Break",
      dep: { warEdgePower: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    warHeal: {
      name_en: "War Heal",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1.5 }
    },
    warHealLine: {
      name_en: "War Heal Line",
      dep: { warHeal: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    randomDisease: {
      name_en: "Random Disease",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3.5 }
    },
    strengthSlash: {
      name_en: "Strength Slash",
      dep: { randomDisease: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    guardSlash: {
      name_en: "Guard Slash",
      dep: { randomDisease: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    displace: {
      name_en: "Displace",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    vampire: {
      name_en: "Vampire",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    warEdgeMastery: {
      name_en: "War Edge Mastery",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    }
  },
  Highlander: {
    heroBattle: {
      name_en: "Hero Battle",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    gaeBolg: {
      name_en: "Gae Bolg",
      unique: true,
      type: "Break",
      dep: { heroBattle: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    longThrust: {
      name_en: "Long Thrust",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    spearAssist: {
      name_en: "Spear Assist",
      dep: { longThrust: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    turningTide: {
      name_en: "Turning Tide",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 2.5 }
    },
    drainingThrust: {
      name_en: "Draining Thrust",
      dep: { turningTide: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    legionThust: {
      name_en: "Legion Thrust",
      dep: { turningTide: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    spiritShield: {
      name_en: "Spirit Shield",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    bloodVeil: {
      name_en: "Blood Veil",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    hpBoost: {
      name_en: "HP Boost",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    }
  },
  Sovereign: {
    victoryVow: {
      name_en: "Victory Vow",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    nobilityProof: {
      name_en: "Nobility Proof",
      unique: true,
      type: "Break",
      dep: { victoryVow: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    attackOrder: {
      name_en: "Attack Order",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    fireArms: {
      name_en: "Fire Arms",
      dep: { attackOrder: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    freezeArms: {
      name_en: "Freeze Arms",
      dep: { attackOrder: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    shockArms: {
      name_en: "Shock Arms",
      dep: { attackOrder: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    guardOrder: {
      name_en: "Guard Order",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    reinforce: {
      name_en: "Reinforce",
      dep: { guardOrder: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    royalBell: {
      name_en: "Royal Bell",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    monarchMarch: {
      name_en: "Monarch March",
      dep: { royalBell: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    exchange: {
      name_en: "Exchange",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    }
  },
  Shogun: {
    battleFormation: {
      name_en: "Battle Formation",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    shadowWarrior: {
      name_en: "Shadow Warrior",
      unique: true,
      type: "Break",
      dep: { battleFormation: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    doubleSlash: {
      name_en: "Double Slash",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    echoingFlow: {
      name_en: "Echoing Flow",
      dep: { doubleSlash: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    zangetsu: {
      name_en: "Zangetsu",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    boltSlash: {
      name_en: "Bolt Slash",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    sight: {
      name_en: "Sight",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    daifuhensha: {
      name_en: "Daifuhensha",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    assassinEnspirit: {
      name_en: "Assassin Enspirit",
      dep: { daifuhensha: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    moraleBoost: {
      name_en: "Morale Boost",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 6 }
    }
  },
  Zodiac: {
    astrologersAxis: {
      name_en: "Astrologer's Axis",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    astralSign: {
      name_en: "Astral Sign",
      unique: true,
      type: "Break",
      dep: { astrologersAxis: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    ethericShine: {
      name_en: "Etheric Shine",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    fireStar: {
      name_en: "Fire Star",
      dep: { ethericShine: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    iceStar: {
      name_en: "Ice Star",
      dep: { ethericShine: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    voltStar: {
      name_en: "Volt Star",
      dep: { ethericShine: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    singularity: {
      name_en: "Singularity",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4.5 }
    },
    ethericCharge: {
      name_en: "Etheric Charge",
      dep: { singularity: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    ethericReturn: {
      name_en: "Etheric Return",
      dep: { singularity: 3 },
      maxLevel: 4,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    horoscope: {
      name_en: "Horoscope",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    }
  },
  Ninja: {
    shinobazu: {
      name_en: "Shinobazu",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    poisonMist: {
      name_en: "Poison Mist",
      unique: true,
      type: "Break",
      dep: { shinobazu: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    fukubari: {
      name_en: "Fukubari",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    makibishi: {
      name_en: "Makibishi",
      dep: { fukubari: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    kagenui: {
      name_en: "Kagenui",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    boneCrusher: {
      name_en: "Bone Crusher",
      dep: { kagenui: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    karuwaza: {
      name_en: "Karuwaza",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4 }
    },
    senpuku: {
      name_en: "Senpuku",
      dep: { karuwaza: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    kagerou: {
      name_en: "Kagerou",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name_en: "Chop",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    proficiency: {
      name_en: "Proficiency",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 6 }
    }
  },
  Farmer: {
    itemAgain: {
      name_en: "Item Again",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    finalStratagem: {
      name_en: "Final Stratagem",
      unique: true,
      type: "Break",
      dep: { itemAgain: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sympathyPain: {
      name_en: "Sympathy Pain",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    strangeSeeds: {
      name_en: "Strange Seeds",
      dep: { sympathyPain: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    playPossum: {
      name_en: "Play Possum",
      dep: { sympathyPain: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    keenEye: {
      name_en: "Keen Eye",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    searchSkill: {
      name_en: "Search Skill",
      dep: { keenEye: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    flee: {
      name_en: "Flee",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    slapAwake: {
      name_en: "Slap Awake",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    naturalInstinct: {
      name_en: "Natural Instinct",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    earthsBounty: {
      name_en: "Earth's Bounty",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 6 }
    }
  },
  Landsknecht: {
    trinity: {
      name_en: "Trinity",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    fullCharge: {
      name_en: "Full Charge",
      unique: true,
      type: "Break",
      dep: { vanguard: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    proficiency: {
      name_en: "Proficiency",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1 }
    },
    sonicRaid: {
      name_en: "Sonic Raid",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    fireLink: {
      name_en: "Fire Link",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    iceLink: {
      name_en: "Ice Link",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    voltLink: {
      name_en: "Volt Link",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    vanguard: {
      name_en: "Vanguard",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    powerBreak: {
      name_en: "Power Break",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    physDefUp: {
      name_en: "Phys DEF Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    }
  },
  Nightseeker: {
    killerStance: {
      name_en: "Killer Stance",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    disaster: {
      name_en: "Disaster",
      unique: true,
      type: "Break",
      dep: { killerStance: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    blindThrow: {
      name_en: "Blind Throw",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    sleepThrow: {
      name_en: "Sleep Throw",
      dep: { blindThrow: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 1.5 }
    },
    shadowCloak: {
      name_en: "Shadow Cloak",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 3 }
    },
    bidingSlice: {
      name_en: "Biding Slice",
      dep: { shadowCloak: 1 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    iceKnife: {
      name_en: "Ice Knife",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    proficiency: {
      name_en: "Proficiency",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    decoySign: {
      name_en: "Decoy Sign",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    bladeFlurry: {
      name_en: "Blade Flurry",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    chop: {
      name_en: "Chop",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Arcanist: {
    circleProtection: {
      name_en: "Circle Protection",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    releasalSpell: {
      name_en: "Releasal Spell",
      unique: true,
      type: "Break",
      dep: { circleProtection: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    circleBoon: {
      name_en: "Circle Boon",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 1 }
    },
    dismissHeal: {
      name_en: "Dismiss Heal",
      dep: { circleBoon: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    chainCircle: {
      name_en: "Chain Circle",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    snareCircle: {
      name_en: "Snare Circle",
      dep: { chainCircle: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    nerveCircle: {
      name_en: "Nerve Circle",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    curseCircle: {
      name_en: "Curse Circle",
      dep: { nerveCircle: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    bracingWalk: {
      name_en: "Bracing Walk",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4 }
    },
    proficiency: {
      name_en: "Proficiency",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name_en: "Chop",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Imperial: {
    ignition: {
      name_en: "Ignition",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    conversion: {
      name_en: "Conversion",
      unique: true,
      type: "Break",
      dep: { ignition: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sharpEdge: {
      name_en: "Sharp Edge",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 1 }
    },
    naturalEdge: {
      name_en: "Natural Edge",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    bloodEdge: {
      name_en: "Blood Edge",
      dep: { sharpEdge: 2, naturalEdge: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1.5 }
    },
    readGuard: {
      name_en: "Read Guard",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    assaultDrive: {
      name_en: "Assault Drive",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 4 }
    },
    heatSink: {
      name_en: "Heat Sink",
      dep: { assaultDrive: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 3.5 }
    },
    overheatGuard: {
      name_en: "Overheat Guard",
      dep: { assaultDrive: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 4.5 }
    },
    avenger: {
      name_en: "Avenger",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    mine: {
      name_en: "Mine",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Pugilist: {
    sealRush: {
      name_en: "Seal Rush",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    finalBlow: {
      name_en: "Final Blow",
      unique: true,
      type: "Break",
      dep: { sealRush: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    concussion: {
      name_en: "Concussion",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    armCrusher: {
      name_en: "Arm Crusher",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    lowBlow: {
      name_en: "Low Blow",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    oneTwoPunch: {
      name_en: "One-Two Punch",
      dep: { concussion: 2, armCrusher: 2, lowBlow: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    corkscrew: {
      name_en: "Corkscrew",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 3.5 }
    },
    adrenaline: {
      name_en: "Adrenaline",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4 }
    },
    doublePunch: {
      name_en: "Double Punch",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name_en: "Chop",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    hpBoost: {
      name_en: "HP Boost",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    }
  },
  Harbinger: {
    infiniteMiasma: {
      name_en: "Infinite Miasma",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    miasmaTorrent: {
      name_en: "Miasma Torrent",
      unique: true,
      type: "Break",
      dep: { infiniteMiasma: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    erodingMiasma: {
      name_en: "Eroding Miasma",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    stiflingMiasma: {
      name_en: "Stifling Miasma",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 2 }
    },
    sluggishMiasma: {
      name_en: "Sluggish Miasma",
      dep: { erodingMiasma: 2, stiflingMiasma: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    paralysisReap: {
      name_en: "Paralysis Reap",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    toxicReap: {
      name_en: "Toxic Reap",
      dep: { paralysisReap: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    miasmaArmor: {
      name_en: "Miasma Armor",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4.5 }
    },
    endlessShroud: {
      name_en: "Endless Shroud",
      dep: { miasmaArmor: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    atonement: {
      name_en: "Atonement",
      dep: { miasmaArmor: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  }
};
