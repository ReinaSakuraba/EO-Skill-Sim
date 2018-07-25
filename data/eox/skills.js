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
    },
    shadowCharge: {
      name_en: "Shadow Charge",
      dep: { mirageSword: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    shadowBenefit: {
      name_en: "Shadow Benefit",
      dep: { shadowCharge: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    shockSpark: {
      name_en: "Shock Spark",
      dep: { freezingSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    burstBlade: {
      name_en: "Burst Blade",
      dep: { shockSpark: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    herosProof: {
      name_en: "Hero's Proof",
      dep: { herosBonds: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    greatCourage: {
      name_en: "Great Courage",
      dep: { herosProof: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    shieldMateria: {
      name_en: "Shield Material",
      dep: { shieldArts: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 4 }
    },
    fervor: {
      name_en: "Fervor",
      dep: { clearMind: 1 },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    newChallenger: {
      name_en: "New Challenger",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    thickShadow: {
      name_en: "Thick Shadow",
      dep: { shadowBenefit: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    actBreaker: {
      name_en: "Act Breaker",
      dep: { burstBlade: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    regimentRave: {
      name_en: "Regiment Rave",
      dep: { actBreaker: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 2 }
    },
    forceGifter: {
      name_en: "Force Gifter",
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    forceSaver: {
      name_en: "Force Saver",
      dep: { forceGifter: 3 },
      maxLevel: 4,
      coords: { x: 5, y: 3 }
    },
    guardRush: {
      name_en: "Guard Rush",
      dep: { shieldMateria: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
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
    },
    recoveryGuard: {
      name_en: "Recovery Guard",
      dep: { backGuard: 1 },
      maxLevel: 4,
      coords: { x: 2, y: 1 }
    },
    aegis: {
      name_en: "Aegis",
      dep: { fortify: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    shieldRush: {
      name_en: "Shield Rush",
      dep: { shieldSmite: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    keepGuard: {
      name_en: "Keep Guard",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    physDefUp: {
      name_en: "Phys DEF Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    elemDefUp: {
      name_en: "Elem DEF Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    fireWall: {
      name_en: "Fire Wall",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    iceWall: {
      name_en: "Ice Wall",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    voltWall: {
      name_en: "Volt Wall",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    hpUp: {
      name_en: "HP Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 0 }
    },
    healGuard: {
      name_en: "Heal Guard",
      dep: { recoveryGuard: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    lineDivide: {
      name_en: "Line Divide",
      dep: { aegis: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    autoguard: {
      name_en: "Autoguard",
      dep: { lineDivide: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 2 }
    },
    shieldFlare: {
      name_en: "Shield Flare",
      dep: { shieldRush: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    fullGuard: {
      name_en: "Full Guard",
      dep: { fireWall: 2, iceWall: 2, voltWall: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 5 }
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
    },
    helmSplitter: {
      name_en: "Helm Splitter",
      dep: { upwardSlash: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    flameGrater: {
      name_en: "Flame Grater",
      dep: { helmSplitter: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    hazeSlash: {
      name_en: "Haze Slash",
      dep: { chargingThrust: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    lightningStab: {
      name_en: "Lightning Stab",
      dep: { hazeSlash: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    horizontalSlice: {
      name_en: "Horizontal Slice",
      dep: { sheathStrike: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    frigidSlash: {
      name_en: "Frigid Slash",
      dep: { horizontalSlice: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    duel: {
      name_en: "Duel",
      dep: { airSlash: 2, armStrike: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4.5 }
    },
    physAtkUp: {
      name_en: "Phys ATK Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    swallowStrike: {
      name_en: "Swallow Strike",
      dep: { flameGrater: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    bluntingStab: {
      name_en: "Blunting Stab",
      dep: { lightningStab: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    petalScatter: {
      name_en: "Petal Scatter",
      dep: { frigidSlash: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    proofOfMastery: {
      name_en: "Proof of Mastery",
      dep: { },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    },
    risingSpirit: {
      name_en: "Rising Spirit",
      dep: { proofOfMastery: 2 },
      maxLevel: 4,
      coords: { x: 5, y: 4 }
    },
    speedUp: {
      name_en: "Speed Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
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
    },
    delayedHeal: {
      name_en: "Delayed Heal",
      dep: { lineHeal: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1.5 }
    },
    unbind: {
      name_en: "Unbind",
      dep: { refresh: 2 },
      maxLevel: 4,
      coords: { x: 2, y: 3 }
    },
    groupTherapy: {
      name_en: "Group Therapy",
      dep: { unbind: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    phoenix: {
      name_en: "Phoenix",
      dep: { revive: 3 },
      maxLevel: 4,
      coords: { x: 2, y: 4 }
    },
    autoRevive: {
      name_en: "Auto-Revive",
      dep: { phoenix: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    starDrop: {
      name_en: "Star Drop",
      dep: { headDrop: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    medicalRod: {
      name_en: "Medical Rod",
      dep: { starDrop: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    patrol: {
      name_en: "Patrol",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    elemDefUp: {
      name_en: "Elem DEF Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    partyHeal: {
      name_en: "Party Heal",
      dep: { delayedHeal: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    chaseHeal: {
      name_en: "Chase Heal",
      dep: { delayedHeal: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    overheal: {
      name_en: "Overheal",
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    healDejaVu: {
      name_en: "Heal Deja Vu",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    heavyStrike: {
      name_en: "Heavy Strike",
      dep: { medicalRod: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 5 }
    },
    staffMastery: {
      name_en: "Staff Mastery",
      dep: { heavyStrike: 1 },
      maxLevel: 8,
      coords: { x: 5, y: 5 }
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
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    patrol: {
      name_en: "Patrol",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    riskPerception: {
      name_en: "Risk Perception",
      dep: { patrol: 2 },
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
    },
    flankShot: {
      name_en: "Flank Shot",
      dep: { flameArrow: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    finishingArrow: {
      name_en: "Finishing Arrow",
      dep: { flankShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    multiShot: {
      name_en: "Multi-Shot",
      dep: { flameArrow: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    dropShot: {
      name_en: "Drop Shot",
      dep: { multiShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    trickStep: {
      name_en: "Trick Step",
      dep: { chainDance: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    stalker: {
      name_en: "Stalker",
      dep: { riskPerception: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    efficiency: {
      name_en: "Efficiency",
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    speedUp: {
      name_en: "Speed Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    swapStep: {
      name_en: "Swap Step",
      dep: { speedUp: 2 },
      maxLevel: 4,
      coords: { x: 3, y: 6 }
    },
    disablingShot: {
      name_en: "Disabling Shot",
      dep: { finishingArrow: 1 },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    saggitariusShot: {
      name_en: "Saggitarius Shot",
      dep: { dropShot: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    hazyShot: {
      name_en: "Hazy Shot",
      dep: { trickStep: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    naturesBounty: {
      name_en: "Nature's Bounty",
      dep: { stalker: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 4 }
    },
    scapegoat: {
      name_en: "Scapegoat",
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    sneakAttack: {
      name_en: "Sneak Attack",
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
    }
  },
  Gunner: {
    actionBoost: {
      name_en: "Action Boost",
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
      dep: { actionBoost: 0 },
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
    },
    leadingShot: {
      name_en: "Leading Shot",
      dep: { spreadShot: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    wildShot: {
      name_en: "Wild Shot",
      dep: { leadingShot: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    headSnipe: {
      name_en: "Head Snipe",
      dep: { armSnipe: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    actQuick: {
      name_en: "Act Quick",
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 3 }
    },
    chargedShot: {
      name_en: "Charged Shot",
      dep: { actQuick: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    preemptiveShot: {
      name_en: "Preemptive Shot",
      dep: { shellShock: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    autoFlare: {
      name_en: "Auto Flare",
      dep: { popFlares: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    penetrator: {
      name_en: "Penetrator",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    tpUp: {
      name_en: "TP Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    ricochet: {
      name_en: "Ricochet",
      dep: { wildShot: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    chargedFire: {
      name_en: "Charged Fire",
      dep: { chargedShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    chargedIce: {
      name_en: "Charged Ice",
      dep: { chargedShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    chargedVolt: {
      name_en: "Charged Volt",
      dep: { chargedShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 4 }
    },
    physAtkUp: {
      name_en: "Phys ATK Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    doubleAction: {
      name_en: "Double Action",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
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
    },
    warRevive: {
      name_en: "War Revive",
      dep: { warHealLine: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    artery: {
      name_en: "Artery",
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    warResponse: {
      name_en: "War Response",
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 2 }
    },
    headcut: {
      name_en: "Headcut",
      dep: { strengthSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    armcut: {
      name_en: "Armcut",
      dep: { guardSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    legcut: {
      name_en: "Legcut",
      dep: { headcut: 2, armcut: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3.5 }
    },
    rouse: {
      name_en: "Rouse",
      dep: { vampire: 2 },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    hpUp: {
      name_en: "HP Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    statusDefUp: {
      name_en: "Status DEF Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    warHealAll: {
      name_en: "War Heal All",
      dep: { artery: 2, warResponse: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 1.5 }
    },
    barrier: {
      name_en: "Barrier",
      dep: { warHealAll: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 1.5 }
    },
    ailingSlash: {
      name_en: "Ailing Slash",
      dep: { headcut: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3.5 }
    },
    spiritDrain: {
      name_en: "Spirit Drain",
      dep: { rouse: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    plague: {
      name_en: "Plague",
      dep: { spiritDrain: 3 },
      maxLevel: 4,
      coords: { x: 5, y: 5 }
    },
    physAtkUp: {
      name_en: "Phys ATK Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
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
    hpUp: {
      name_en: "HP Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    headPierce: {
      name_en: "Head Pierce",
      dep: { spearAssist: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    drainingBurst: {
      name_en: "Draining Burst",
      dep: { drainingThrust: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    delayedCharge: {
      name_en: "Delayed Charge",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 2 }
    },
    legionBurst: {
      name_en: "Legion Burst",
      dep: { legionBurst: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    bloodFortune: {
      name_en: "Blood Fortune",
      dep: { spiritShield: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    battleInstincts: {
      name_en: "Battle Instinct",
      dep: { bloodFortune: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    bloodyOffense: {
      name_en: "Bloody Offense",
      dep: { bloodVeil: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    bloodlust: {
      name_en: "Bloodlust",
      dep: { bloodyOffense: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 5 }
    },
    physDefUp: {
      name_en: "Phys DEF Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    spearReversal: {
      name_en: "Spear Reversal",
      dep: { headPierce: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    crossCharge: {
      name_en: "Cross Charge",
      dep: { delayedCharge: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    legionCharge: {
      name_en: "Legion Charge",
      dep: { legionBurst: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 3 }
    },
    alliedBonds: {
      name_en: "Allied Bonds",
      dep: { legionCharge: 2 },
      maxLevel: 4,
      coords: { x: 5, y: 3 }
    },
    blackSabbath: {
      name_en: "Black Sabbath",
      dep: { bloodlust: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    physAtkUp: {
      name_en: "Healing Wall",
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
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
    proofOfNobility: {
      name_en: "Proof of Nobility",
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
    royalVeil: {
      name_en: "Royal Veil",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    monarchMarch: {
      name_en: "Monarch March",
      dep: { royalVeil: 2 },
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
    negotiation: {
      name_en: "Negotiation",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    majesty: {
      name_en: "Majesty",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 0 }
    },
    royalLineage: {
      name_en: "Royal Lineage",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 0 }
    },
    elementalBombI: {
      name_en: "Elemental Bomb I",
      dep: { fireArms: 1, freezeArms: 1, shockArms: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    rallyOrder: {
      name_en: "Rally Order",
      dep: { reinforce: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3.5 }
    },
    protectOrder: {
      name_en: "Protect Order",
      dep: { reinforce: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4.5 }
    },
    preventOrder: {
      name_en: "Prevent Order",
      dep: { rallyOrder: 2, protectOrder: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    pairOrder: {
      name_en: "Pair Order",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    healOrder: {
      name_en: "Heal Order",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    statusDefUp: {
      name_en: "Status DEF Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 0 }
    },
    elementalBombII: {
      name_en: "Elemental Bomb II",
      dep: { elementalBombI: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    clearance: {
      name_en: "Clearance",
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 3 }
    },
    dauntlessOrder: {
      name_en: "Dauntless Order",
      dep: { preventOrder: 1 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    lastOrder: {
      name_en: "Last Order",
      dep: { pairOrder: 2, healOrder: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5.5 }
    },
    reorder: {
      name_en: "Re-order",
      dep: { lastOrder: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 5.5 }
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
    bodyDouble: {
      name_en: "Body Double",
      unique: true,
      type: "Break",
      dep: { battleFormation: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    parryingBlade: {
      name_en: "Parrying Blade",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    spiritFlow: {
      name_en: "Spirit Flow",
      dep: { doubleSlash: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    counterCommand: {
      name_en: "Counter Command",
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
    greatGeneral: {
      name_en: "Great General",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    assassinGathering: {
      name_en: "Assassin Gathering",
      dep: { greatGeneral: 2 },
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
    },
    twinSparrow: {
      name_en: "Twin Sparrow",
      dep: { spiritFlow: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    baitCommand: {
      name_en: "Bait Command",
      dep: { counterCommand: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 2 }
    },
    blitzCommand: {
      name_en: "Blitz Command",
      dep: { baitCommand: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2 }
    },
    morningStar: {
      name_en: "Morning Star",
      dep: { boltSlash: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    dusk: {
      name_en: "Dusk",
      dep: { sight: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    bloodyLance: {
      name_en: "Bloody Lance",
      dep: { dusk: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    reincarnation: {
      name_en: "Reincarnation",
      dep: { },
      maxLevel: 10,
      coords: { x: 3, y: 5 }
    },
    fellingBird: {
      name_en: "Felling Bird",
      dep: { },
      maxLevel: 10,
      coords: { x: 2, y: 6 }
    },
    ritualSuicide: {
      name_en: "Ritual Suicide",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    fiveRingSword: {
      name_en: "Five Ring Sword",
      dep: { twinSparrow: 4 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    revengeCommand: {
      name_en: "Reprisal Command",
      dep: { blitzCommand: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    warriorMight: {
      name_en: "Warrior Might",
      dep: { revengeCommand: 2 },
      maxLevel: 10,
      coords: { x: 5, y: 2 }
    },
    curseStrike: {
      name_en: "Curse Strike",
      dep: { bloodyLance: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    mercyKill: {
      name_en: "Mercy Kill",
      dep: { curseStrike: 3 },
      maxLevel: 4,
      coords: { x: 5, y: 4 }
    },
    foreHonor: {
      name_en: "Fore Honor",
      dep: { reincarnation: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
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
    ethericGleam: {
      name_en: "Etheric Gleam",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    fireStar: {
      name_en: "Fire Star",
      dep: { ethericGleam: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    iceStar: {
      name_en: "Ice Star",
      dep: { ethericGleam: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    voltStar: {
      name_en: "Volt Star",
      dep: { ethericGleam: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    singularity: {
      name_en: "Singularity",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4.5 }
    },
    focusEther: {
      name_en: "Focus Ether",
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
    },
    etherMastery: {
      name_en: "Ether Mastery",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 0 }
    },
    tpUp: {
      name_en: "TP Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 0 }
    },
    binaryFire: {
      name_en: "Binary Fire",
      dep: { fireStar: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    binaryIce: {
      name_en: "Binary Ice",
      dep: { iceStar: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    binaryVolt: {
      name_en: "Binary Volt",
      dep: { voltStar: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    restoreEther: {
      name_en: "Restore Ether",
      dep: { focusEther: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    antiEther: {
      name_en: "Anti Ether",
      dep: { restoreEther: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    darkEther: {
      name_en: "Dark Ether",
      dep: { ethericReturn: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    ethericShoot: {
      name_en: "Etheric Shoot",
      dep: { darkEther: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    fireProphecy: {
      name_en: "Fire Prophecy",
      dep: { binaryFire: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 1 }
    },
    iceProphecy: {
      name_en: "Ice Prophecy",
      dep: { binaryIce: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 2 }
    },
    voltProphecy: {
      name_en: "Volt Prophecy",
      dep: { binaryVolt: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 3 }
    },
    freeEnergy: {
      name_en: "Free Energy",
      dep: { fireProphecy: 1, iceProphecy: 1, voltProphecy: 1 },
      maxLevel: 6,
      coords: { x: 5, y: 2 }
    },
    spreadEther: {
      name_en: "Spread Ether",
      dep: { antiEther: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 4 }
    },
    meteor: {
      name_en: "Meteor",
      dep: { horoscope: 3, ethericShoot: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 5.5 }
    }
  },
  Ninja: {
    insolence: {
      name_en: "Insolence",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    ninpoPoisonMist: {
      name_en: "Ninpo: Poison Mist",
      unique: true,
      type: "Break",
      dep: { insolence: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    ninpoDaggers: {
      name_en: "Ninpo: Daggers",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    ninpoCaltrops: {
      name_en: "Ninpo: Caltrops",
      dep: { ninpoDaggers: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    shadowBind: {
      name_en: "Shadow Bind",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    boneCrusher: {
      name_en: "Bone Crusher",
      dep: { shadowBind: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    acrobatics: {
      name_en: "Acrobatics",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4 }
    },
    concealment: {
      name_en: "Concealment",
      dep: { acrobatics: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    ninpoMirage: {
      name_en: "Ninpo: Mirage",
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
    ninpoMastery: {
      name_en: "Ninpo Mastery",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 6 }
    },
    ninpoMirror: {
      name_en: "Ninpo: Mirror",
      dep: { ninpoCaltrops: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    foxDrop: {
      name_en: "Fox Drop",
      dep: { boneCrusher: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    hawkStrike: {
      name_en: "Hawk Strike",
      dep: { foxDrop: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    selfDestruct: {
      name_en: "Self Destruct",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    ninpoClone: {
      name_en: "Ninpo: Clone",
      dep: { selfDestruct: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    beheading: {
      name_en: "Beheading",
      dep: { concealment: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    ninpoFlight: {
      name_en: "Ninpo: Flight",
      dep: { },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    autoMirage: {
      name_en: "Auto Mirage",
      dep: { ninpoMirage: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    statusAtkUp: {
      name_en: "Status ATK Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    ninpoShock: {
      name_en: "Ninpo: Shock",
      dep: { ninpoMirror: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    eyeForAnEye: {
      name_en: "Eye for an Eye",
      dep: { ninpoShock: 2 },
      maxLevel: 6,
      coords: { x: 5, y: 1 }
    },
    schadenfreude: {
      name_en: "Schadenfreude",
      dep: { hawkStrike: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    drawingSlice: {
      name_en: "Drawing Slice",
      dep: { schadenfreude: 2, ninpoFlight: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 2.5 }
    },
    ninpoSmoke: {
      name_en: "Ninpo: Smoke",
      dep: { ninpoFlight: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    },
    smokePowder: {
      name_en: "Smoke Powder",
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 5 }
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
    finalTrick: {
      name_en: "Final Trick",
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
    harvestry: {
      name_en: "Harvestry",
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
    },
    rottenEggs: {
      name_en: "Rotten Eggs",
      dep: { strangeSeeds: 3, playPossum: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 1.5 }
    },
    persistence: {
      name_en: "Persistence",
      dep: { rottenEggs: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 1.5 }
    },
    wasteNot: {
      name_en: "Waste Not",
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 2.5 }
    },
    strokeOfLuck: {
      name_en: "Stroke of Luck",
      dep: { searchSkill: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    rainOrShin: {
      name_en: "Rain or Shine",
      dep: { flee: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    safeStroll: {
      name_en: "Safe Stroll",
      dep: { rainOrShin: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    sharingIsCaring: {
      name_en: "Sharing is Caring",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    braveHeart: {
      name_en: "Brave Heart",
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 5 }
    },
    survivalSkills: {
      name_en: "Survival Skills",
      dep: { earthsBounty: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    lullaby: {
      name_en: "Lullaby",
      dep: { persistence: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    songOfLabour: {
      name_en: "Song of Labour",
      dep: { lullaby: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 1.5 }
    },
    dissection: {
      name_en: "Dissection",
      dep: { wasteNot: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 2.5 }
    },
    harvestFestival: {
      name_en: "Harvest Festival",
      dep: { },
      maxLevel: 10,
      coords: { x: 4, y: 3.5 }
    },
    naturesBounty: {
      name_en: "Nature's Bounty",
      dep: { survivalSkills: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 6 }
    },
    doubleChop: {
      name_en: "Double Chop",
      dep: { naturesBounty: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 6 }
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
    blazingLink: {
      name_en: "Blazing Link",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    freezingLink: {
      name_en: "Freezing Link",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    electricLink: {
      name_en: "Electric Link",
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
    },
    doubleStrike: {
      name_en: "Double Strike",
      dep: { sonicRaid: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    spiralSlice: {
      name_en: "Spiral Slice",
      dep: { doubleStrike: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 0.5 }
    },
    penetrate: {
      name_en: "Penetrate",
      dep: { doubleStrike: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1.5 }
    },
    improvedLink: {
      name_en: "Improved Link",
      dep: { blazingLink: 3, freezingLink: 3, electricLink: 3 },
      maxLevel: 4,
      coords: { x: 2, y: 3 }
    },
    linkSmash: {
      name_en: "Link Smash",
      dep: { improvedLink: 1 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    guardBreak: {
      name_en: "Guard Break",
      dep: { powerBreak: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    speedBreak: {
      name_en: "Speed Break",
      dep: { guardBreak: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    initiative: {
      name_en: "Initiative",
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 6 }
    },
    statusDefUp: {
      name_en: "Status DEF Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    swordTempest: {
      name_en: "Sword Tempest",
      dep: { spiralSlice: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 0.5 }
    },
    randomStab: {
      name_en: "Random Stab",
      dep: { penetrate: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    linkMastery: {
      name_en: "Link Mastery",
      dep: { linkSmash: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 3 }
    },
    linkEnd: {
      name_en: "Link End",
      dep: { linkMastery: 2 },
      maxLevel: 6,
      coords: { x: 5, y: 3 }
    },
    fullBreak: {
      name_en: "Full Break",
      dep: { speedBreak: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    singleDevote: {
      name_en: "Single Devote",
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
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
    },
    curseThrow: {
      name_en: "Curse Throw",
      dep: { sleepThrow: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    nerveThrow: {
      name_en: "Nerve Throw",
      dep: { curseThrow: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    shadowBite: {
      name_en: "Shadow Bite",
      dep: { sleepThrow: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    autoCloak: {
      name_en: "Auto-Cloak",
      dep: { bidingSlice: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    backstab: {
      name_en: "Backstab",
      dep: { autoCloak: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    sneakAttack: {
      name_en: "Sneak Attack",
      dep: { proficiency: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    foulMastery: {
      name_en: "Foul Mastery",
      dep: { sneakAttack: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    speedUp: {
      name_en: "Speed Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    spreadThrow: {
      name_en: "Spread Throw",
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 6 }
    },
    venomThrow: {
      name_en: "Venom Throw",
      dep: { nerveThrow: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    swiftEdge: {
      name_en: "Swift Edge",
      dep: { shadowBite: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    assassinate: {
      name_en: "Assassinate",
      dep: { backstab: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    returnCloak: {
      name_en: "Return Cloak",
      dep: { assassinate: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 3 }
    },
    followTrace: {
      name_en: "Follow Trace",
      dep: { bladeFlurry: 4 },
      maxLevel: 10,
      coords: { x: 4, y: 5 }
    },
    autoSpread: {
      name_en: "Auto-Spread",
      dep: { spreadThrow: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
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
    },
    dismissRevive: {
      name_en: "Dismiss Revive",
      dep: { dismissHeal: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    dismissBlow: {
      name_en: "Dismiss Blow",
      dep: { dismissRevive: 3 },
      maxLevel: 10,
      coords: { x: 3, y: 1 }
    },
    hoodCircle: {
      name_en: "Hood Circle",
      dep: { snareCircle: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    sleepCircle: {
      name_en: "Sleep Circle",
      dep: { curseCircle: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    charmEye: {
      name_en: "Charm Eye",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    atrophicEye: {
      name_en: "Atrophic Eye",
      dep: { charmEye: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    statusAtkUp: {
      name_en: "Status ATK Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    tameGround: {
      name_en: "Tame Ground",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    wardingMist: {
      name_en: "Warding Mist",
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 6 }
    },
    dismissBlast: {
      name_en: "Dismiss Blast",
      dep: { dismissBlow: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    circleMastery: {
      name_en: "Circle Mastery",
      dep: { dismissBlast: 3 },
      maxLevel: 6,
      coords: { x: 5, y: 1 }
    },
    poisonCircle: {
      name_en: "Poison Circle",
      dep: { sleepCircle: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2.5 }
    },
    chaosCircle: {
      name_en: "Chaos Circle",
      dep: { sleepCircle: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
    },
    dismissTremor: {
      name_en: "Dismiss Tremor",
      dep: { poisonCircle: 3, chaosCircle: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 3 }
    },
    tpReturn: {
      name_en: "TP Return",
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 6 }
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
    rearGuard: {
      name_en: "Rear Guard",
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
    },
    massiveEdge: {
      name_en: "Massive Edge",
      dep: { bloodEdge: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    coolEdge: {
      name_en: "Cool Edge",
      dep: { massiveEdge: 2 },
      maxLevel: 4,
      coords: { x: 3, y: 1 }
    },
    tripEdge: {
      name_en: "Trip Edge",
      dep: { bloodEdge: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    impulseEdge: {
      name_en: "Impulse Edge",
      dep: { tripEdge: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2 }
    },
    intercooler: {
      name_en: "Intercooler",
      dep: { heatSink: 1, overheatGuard: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 4 }
    },
    flameDrive: {
      name_en: "Flame Drive",
      dep: { intercooler: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    freezeDrive: {
      name_en: "Freeze Drive",
      dep: { intercooler: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    shockDrive: {
      name_en: "Shock Drive",
      dep: { intercooler: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    statusDefUp: {
      name_en: "Status DEF Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    chargeEdge: {
      name_en: "Charge Edge",
      dep: { coolEdge: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    forceEdge: {
      name_en: "Force Edge",
      dep: { impulseEdge: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    hpUp: {
      name_en: "HP Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    accelDrive: {
      name_en: "Accel Drive",
      dep: { flameDrive: 1, freezeDrive: 1, shockDrive: 1 },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    },
    absorber: {
      name_en: "Absorber",
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 5 }
    },
    elemAtkUp: {
      name_en: "Elem ATK Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
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
    hpUp: {
      name_en: "HP Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    devilsFist: {
      name_en: "Devil's Fist",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    fightingSpirit: {
      name_en: "Fighting Spirit",
      dep: { devilsFist: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    addedBlow: {
      name_en: "Added Blow",
      dep: { oneTwoPunch: 2, corkscrew: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 2.75 }
    },
    leadingBlow: {
      name_en: "Leading Blow",
      dep: { addedBlow: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2.75 }
    },
    breather: {
      name_en: "Breather",
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 4 }
    },
    faultBlocker: {
      name_en: "Fault Blocker",
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    clinch: {
      name_en: "Clinch",
      dep: { breather: 1, faultBlocker: 1 },
      maxLevel: 6,
      coords: { x: 3, y: 4.5 }
    },
    statusAtkUp: {
      name_en: "Status ATK Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    crossCounter: {
      name_en: "Cross Counter",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    thunderFist: {
      name_en: "Thunder Fist",
      dep: { fightingSpirit: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    lashOut: {
      name_en: "Lash Out",
      dep: { leadingBlow: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2.75 }
    },
    meditation: {
      name_en: "Meditation",
      dep: { clinch: 3 },
      maxLevel: 4,
      coords: { x: 4, y: 4.5 }
    },
    ragingWaves: {
      name_en: "Raging Waves",
      dep: { meditation: 2 },
      maxLevel: 10,
      coords: { x: 5, y: 4.5 }
    },
    millionLash: {
      name_en: "Million Lash",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    },
   resonanceBlow: {
      name_en: "Resonance Blow",
      dep: { millionLash: 3 },
      maxLevel: 6,
      coords: { x: 5, y: 6 }
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
    slowingMiasma: {
      name_en: "Slowing Miasma",
      dep: { erodingMiasma: 2, stiflingMiasma: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    paralyzingReap: {
      name_en: "Paralyzing Reap",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    toxicReap: {
      name_en: "Toxic Reap",
      dep: { paralyzingReap: 3 },
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
    },
    wiltingMiasma: {
      name_en: "Wilting Miasma",
      dep: { slowingMiasma: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    arrestingMiasma: {
      name_en: "Arresting Miasma",
      dep: { wiltingMiasma: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 1.5 }
    },
    darknessReap: {
      name_en: "Darkness Reap",
      dep: { toxicReap: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    chaosReap: {
      name_en: "Chaos Reap",
      dep: { darknessReap: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 3 }
    },
    blackShroud: {
      name_en: "Black Shroud",
      dep: { endlessShroud: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    soulTransfer: {
      name_en: "Soul Transfer",
      dep: { atonement: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    blackWave: {
      name_en: "Black Wave",
      dep: { soulTransfer: 1 },
      maxLevel: 4,
      coords: { x: 3, y: 5 }
    },
    spiritAbsorb: {
      name_en: "Spirit Absorb",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    statusAtkUp: {
      name_en: "Status ATK Up",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    deathsAsylum: {
      name_en: "Death's Asylum",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    ephemeralReap: {
      name_en: "Ephemeral Reap",
      dep: { },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    fatalReap: {
      name_en: "Fatal Reap",
      dep: { chaosReap: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    miasmaWall: {
      name_en: "Miasma Wall",
      dep: { blackWave: 1 },
      maxLevel: 6,
      coords: { x: 4, y: 4.5 }
    },
    soulFixation: {
      name_en: "Soul Fixation",
      dep: { blackWave: 1 },
      maxLevel: 6,
      coords: { x: 4, y: 5.5 }
    },
    residualMiasma: {
      name_en: "Residual Miasma",
      dep: { miasmaWall: 2, soulFixation: 2 },
      maxLevel: 4,
      coords: { x: 5, y: 5 }
    }
  }
};
