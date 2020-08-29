let skills = {
  Hero: {
    braveheart: {
      name: "Brave Heart",
      desc: "For 3 turns, increases the chance of afterimage creation and all afterimage damage. The damage boost only applies while Force Boost is active.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    miracleEdge: {
      name: "Miracle Edge",
      desc: "Deals melee cut damage to all enemies, and restores HP to all party members. This can restore HP over maximum HP. The overhealed amount is removed at the end of the turn.",
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { braveheart: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    afterimage: {
      name: "Afterimage",
      desc: "When the user (or an afterimage) attacks with a skill, there's a chance to create an afterimage in an empty slot. The afterimage will attack with the same skill on the next turn, and vanish at the end of that turn. Does not activate for chases or counterattacks.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    mirageSword: {
      name: "Mirage Sword",
      desc: "Deals ranged cut damage to one target. Has a high chance to create an afterimage.",
      stats: ["STR"],
      dep: { afterimage: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    braveWide: {
      name: "Wide Bravery",
      desc: "Deals strong melee cut damage to one target. If this skill goes off before the target acts, including if the target could not act due to a bind or ailment, its range is extended to melee cut damage to all enemies.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    freezingSlash: {
      name: "Frigid Slash",
      desc: "Deals melee cut+ice damage to one target, with splash damage.",
      stats: ["STR"],
      dep: { braveWide: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    encouragement: {
      name: "Encourage",
      desc: "When the user attacks with a skill, restores HP to all party members. HP restored is based on the user's max HP. Does not activate for links, chases or counterattacks.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    herosBonds: {
      name: "Heroic Bonds",
      desc: "When all party members' HP is above a set percentage, increases the user's attack and action speed.",
      stats: [],
      dep: { encouragement: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    shieldArts: {
      name: "Physical Shield",
      desc: "Deals melee bash damage to one target. It has a low action speed, but increases physical defense for all allies until it executes. Damage is based on the user's shield's DEF.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    clearMind: {
      name: "Clear Mind",
      desc: "Removes binds and ailments and restores TP to the user. Cannot be used if the user has no ailment or binds, and will not restores TP if they were cured prior to this skill being used.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 5 }
    },
    chop: {
      name: "Chop",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    shadowCharge: {
      name: "Charge Image",
      desc: "Removes all afterimages. Until the end of the next turn, increases the user's attack and chance of creating afterimages. Number of afterimages consumed will not affect this skill's effect.",
      stats: [],
      dep: { mirageSword: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    shadowBenefit: {
      name: "Graceful Image",
      desc: "When the user uses a skill while an afterimage is present, refunds a percentage of the TP used for the skill to the user.",
      stats: [],
      dep: { shadowCharge: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    shockSpark: {
      name: "Shock Spark",
      desc: "Deals melee cut damage to one target, and follows up with ranged volt damage to all enemies. The higher the target's cut resistance is, the higher the volt damage will be.",
      stats: ["STR"],
      dep: { freezingSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    burstBlade: {
      name: "Burst Blade",
      desc: "Deals multiple instances of melee cut damage to one target. Number of attacks is a random number between 2, and 3 plus the number of enemies present.",
      stats: ["STR"],
      dep: { shockSpark: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    herosProof: {
      name: "Heroic Steel",
      desc: "When all party members' HP is below a set percentage, increases the user's defense and chance of being targeted.",
      stats: [],
      dep: { herosBonds: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    greatCourage: {
      name: "Great Bravery",
      desc: "When an ally whose HP is below a set percentage is attacked, the user has a chance to cover that ally. This skill will prioritize the user's afterimage.",
      stats: [],
      dep: { herosProof: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    shieldMateria: {
      name: "Elemental Shield",
      desc: "Deals melee bash damage to one target. It has a low action speed, but increases elemental defense for all allies until it executes. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldArts: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 4 }
    },
    fervor: {
      name: "Fervor",
      desc: "Transfers binds and ailments on allies in the user's row to the user, and restores Force to the user. If no binds or ailments are transferred, Force will not increase.",
      stats: [],
      dep: { clearMind: 1 },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    newChallenger: {
      name: "New Challenger",
      desc: "Immediately enters battle with an increased chance of encountering rare breeds, and a chance of entering consecutive battles. Fails if the current location has no encounters.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    thickShadow: {
      name: "Dark Image",
      desc: "Afterimages have a chance of not disappearing at the end of the turn.",
      stats: [],
      dep: { shadowBenefit: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    actBreaker: {
      name: "Act Breaker",
      desc: "Deals melee cut damage to one target. Attempts to inflict stun on the target. The higher the target's HP is, the higher the chance of stun is.",
      stats: ["STR", "LUC"],
      dep: { burstBlade: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    regimentRave: {
      name: "Regiment Rave",
      desc: "At the end of the turn, deals melee cut+fire damage to one target. Adds 40% of all damage dealt to the target this turn by all party members to this attack's damage, up to a set limit.",
      stats: ["STR"],
      dep: { actBreaker: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 2 }
    },
    forceGifter: {
      name: "Force Gift",
      desc: "Deals melee cut damage to one target. Increases Force for allies on the user's row instead of the user.",
      stats: ["STR"],
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    forceSaver: {
      name: "Retain Force",
      desc: "When the user's Force Boost times out, restores some Force to the user.",
      stats: [],
      dep: { forceGifter: 3 },
      maxLevel: 4,
      coords: { x: 5, y: 3 }
    },
    guardRush: {
      name: "Guard Rush",
      desc: "Reduces all damage to all party members for one turn, and deals melee bash damage to one target at the end of the turn. If the attack hits, this skill cannot be used again for a set number of turns. Damage is based on the user's shield's DEF, and the number of times damage is reduced. If no damage reduction took place, the attack will not happen.",
      stats: ["STR"],
      dep: { shieldMateria: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    }
  },
  Protector: {
    shieldProtect: {
      name: "Shield Protect",
      desc: "For 3 turns, increases damage reduction from shield skills.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    perfectDefense: {
      name: "Painless",
      desc: "This turn, completely negates all damaging attacks against the party.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { shieldProtect: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    frontGuard: {
      name: "Front Guard",
      desc: "Reduces physical damage to the front row for one turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1 }
    },
    backGuard: {
      name: "Rear Guard",
      desc: "Reduces physical damage to the back row for one turn.",
      stats: [],
      dep: { frontGuard: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 1 }
    },
    cellDivide: {
      name: "Ally Shield",
      desc: "Covers one ally for one turn.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    fortify: {
      name: "Fortify",
      desc: "Increases the user's defense for a set number of turns.",
      stats: [],
      dep: { cellDivide: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    shieldSmite: {
      name: "Shield Smite",
      desc: "Deals melee bash damage to one target. Attempts to inflict arm bind. Damage is based on the user's shield's DEF.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 3 }
    },
    provoke: {
      name: "Taunt",
      desc: "Increases the user's defense and chance of being targeted for a set number of turns.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    preProvoke: {
      name: "Preemptive Taunt",
      desc: "If Provoke is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { provoke: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    healingWall: {
      name: "Healing Wall",
      desc: "When the user defends, restores HP to allies on the user's row.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name: "Chop",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    recoveryGuard: {
      name: "Recovery Guard",
      desc: "Removes binds from one row, and reduces physical damage to that row for one turn.",
      stats: [],
      dep: { backGuard: 1 },
      maxLevel: 4,
      coords: { x: 2, y: 1 }
    },
    aegis: {
      name: "Aegis",
      desc: "There is a chance for the user to survive fatal damage at 1 HP. Can activate once per battle at most.",
      stats: [],
      dep: { fortify: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    shieldRush: {
      name: "Shield Bash",
      desc: "Deals melee bash damage to all enemies, and reduces their physical attack for 3 turns. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldSmite: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    keepGuard: {
      name: "Keep Guard",
      desc: "Reduces all damage to one ally until the end of the next turn, and disables all Guard skills until then.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    physDefUp: {
      name: "Phys DEF Up",
      desc: "Increases physical defense.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    elemDefUp: {
      name: "Elem DEF Up",
      desc: "Increases elemental defense.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    fireWall: {
      name: "Fire Wall",
      desc: "Reduces one instance of fire damage against all party members. Higher levels upgrade reduction to null, then absorb.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    iceWall: {
      name: "Ice Wall",
      desc: "Reduces one instance of ice damage against all party members. Higher levels upgrade reduction to null, then absorb.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    voltWall: {
      name: "Volt Wall",
      desc: "Reduces one instance of volt damage against all party members. Higher levels upgrade reduction to null, then absorb.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    hpUp: {
      name: "HP Up",
      desc: "Increases maximum HP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 0 }
    },
    healGuard: {
      name: "Heal Guard",
      desc: "Restores HP for one row, and reduces physical damage to that row for one turn.",
      stats: ["WIS"],
      dep: { recoveryGuard: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    lineDivide: {
      name: "Line Shield",
      desc: "Covers one row for one turn.",
      stats: [],
      dep: { aegis: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    autoguard: {
      name: "En Garde",
      desc: "When the user is attacked, there is a chance to automatically reduce the damage.",
      stats: [],
      dep: { lineDivide: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 2 }
    },
    shieldFlare: {
      name: "Shield Flare",
      desc: "Until the end of the next turn, when the user is attacked, they will counterattack with ranged fire damage. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldRush: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    fullGuard: {
      name: "Full Guard",
      desc: "Reduces all damage to all party members for one turn. Cannot be used again for a set number of turns.",
      stats: [],
      dep: { fireWall: 2, iceWall: 2, voltWall: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 5 }
    }
  },
  Medic: {
    steadyHands: {
      name: "Intensive Care",
      desc: "For 3 turns, increases the action speed of all actions, and the healing power of healing skills (including items). The TP cost of healing skills is halved.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    medicalMiracle: {
      name: "Healing Touch",
      desc: "Revives and removes ailments, binds and debuffs from all party members, and restores their HP.",
      stats: ["WIS"],
      unique: true,
      type: "Break",
      dep: { steadyHands: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    healing: {
      name: "Healing",
      desc: "Restores HP to one ally.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1.5 }
    },
    lineHeal: {
      name: "Line Heal",
      desc: "Restores HP to one row.",
      stats: ["WIS"],
      dep: { healing: 3 },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    patchUp: {
      name: "Patch Up",
      desc: "Restores HP to all allies at the end of battle. Does not activate if the party flees.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    refresh: {
      name: "Refresh",
      desc: "Removes ailments from one ally. Higher level increases range to one row.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 3 }
    },
    antibodies: {
      name: "Antibodies",
      desc: "Increases the user's rate of recovery from binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    revive: {
      name: "Revive",
      desc: "Revives one ally.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    scavenge: {
      name: "Scavenge",
      desc: "Increases item drop rate.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    headDrop: {
      name: "Head Bash",
      desc: "Deals melee bash damage to one target. Attempts to inflict head bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    take: {
      name: "Take",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    delayedHeal: {
      name: "Delayed Heal",
      desc: "Restores HP to all party members at the start of the next turn. Cannot be used on consecutive turns. Ineffective if the user dies before the skill activates.",
      stats: ["WIS"],
      dep: { lineHeal: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1.5 }
    },
    unbind: {
      name: "Unbind",
      desc: "Removes binds from one ally. Higher levels increase range to one row.",
      stats: [],
      dep: { refresh: 2 },
      maxLevel: 4,
      coords: { x: 2, y: 3 }
    },
    groupTherapy: {
      name: "Group Therapy",
      desc: "For a set number of turns, increases the range of the user's healing skills, but decreases healing power and action speed.",
      stats: [],
      dep: { unbind: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    finalGift: {
      name: "Final Gift",
      desc: "When the user dies, restores HP to all allies.",
      stats: ["WIS"],
      dep: { revive: 3 },
      maxLevel: 4,
      coords: { x: 2, y: 4 }
    },
    autoRevive: {
      name: "Auto-Revive",
      desc: "When an ally dies, there is a chance to automatically revive that ally.",
      stats: [],
      dep: { finalGift: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    starDrop: {
      name: "Star Drop",
      desc: "Deals melee bash damage to one target. Reduces their physical defense for 3 turns.",
      stats: ["STR"],
      dep: { headDrop: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    medicalRod: {
      name: "Medical Rod",
      desc: "Deals melee bash damage to one target. Reduces their elemental defense for 3 turns.",
      stats: ["STR"],
      dep: { starDrop: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    patrol: {
      name: "Safe Passage",
      desc: "For a set number of steps, nullifies damage tiles and muddy floors, and greatly reduces other sources of damage while exploring.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    elemDefUp: {
      name: "Elem DEF Up",
      desc: "Increases elemental defense.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    partyHeal: {
      name: "Heal-All",
      desc: "Restores HP to all party members.",
      stats: ["WIS"],
      dep: { delayedHeal: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    chaseHeal: {
      name: "Chase Heal",
      desc: "For one turn, automatically restores HP to allies when they are attacked for a set number of times. Every time this skill activates, its chance of activating decreases.",
      stats: ["WIS"],
      dep: { delayedHeal: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    overheal: {
      name: "Overheal",
      desc: "Medic skills in battle can restore HP over party members' maximum HP by a set percentage. The overhealed amount is removed at the end of turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    healDejaVu: {
      name: "Deja Vu",
      desc: "For a set number of turns, at the end of each turn, all party members will receive again the effect of the last Medic active skill they received, provided that they received at least one Medic active skill while Heal Deja Vu is active.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    heavyStrike: {
      name: "Heavy Strike",
      desc: "Deals melee bash damage to one target.",
      stats: ["STR"],
      dep: { medicalRod: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 5 }
    },
    staffMastery: {
      name: "Staff Mastery",
      desc: "Increases physical attack and maximum TP when a staff is equipped.",
      stats: [],
      dep: { heavyStrike: 1 },
      maxLevel: 8,
      coords: { x: 5, y: 5 }
    }
  },
  Survivalist: {
    illusionStep: {
      name: "Illusory Formation",
      desc: "For 3 turns, increases all party members' action speed and evasion.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    mirageArrow: {
      name: "Mirage Arrow",
      desc: "Deals ranged stab damage to one target. Decreases their accuracy and forces them to go last for 3 turns.",
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { illusionStep: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    powerShot: {
      name: "Power Shot",
      desc: "Deals ranged stab damage to one target, with line-piercing effects.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1.5 }
    },
    flameArrow: {
      name: "Flame Arrow",
      desc: "Deals ranged stab+fire damage to one target.",
      stats: ["STR"],
      dep: { powerShot: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1.5 }
    },
    blindArrow: {
      name: "Blind Arrow",
      desc: "Deals ranged stab damage to one target. Attempts to inflict blind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    chainDance: {
      name: "Chain Dance",
      desc: "For one turn, increases the user's evasion and chance of being targeted.",
      stats: [],
      dep: { blindArrow: 3 },
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    patrol: {
      name: "Safe Passage",
      desc: "For a set number of steps, nullifies damage tiles and muddy floors, and greatly reduces other sources of damage while exploring.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    riskPerception: {
      name: "Risk Perception",
      desc: "There is a set chance that blindsides will be negated.",
      stats: [],
      dep: { patrol: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    resuscitate: {
      name: "Resuscitate",
      desc: "Restores HP to one ally. Can only be used in the field. Higher levels allow this skill to revive the target as well.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    sortingSkill: {
      name: "Sorting Skill",
      desc: "Increases inventory size.",
      stats: [],
      dep: { resuscitate: 3 },
      maxLevel: 10,
      coords: { x: 1, y: 5 }
    },
    naturalInstinct: {
      name: "Natural Instinct",
      desc: "Occasionally gains more items when using any gathering points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    flankShot: {
      name: "Flank Shot",
      desc: "Deals ranged stab damage to one row.",
      stats: ["STR"],
      dep: { flameArrow: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    finishingArrow: {
      name: "Finishing Shot",
      desc: "When the user attacks a target whose HP is below a set threshold, the user follows up with their weapon. Does not activate for links, chases or counterattacks.",
      stats: ["STR"],
      dep: { flankShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    multiShot: {
      name: "Multi-Shot",
      desc: "Deals 2 instances of ranged stab damage to one enemy.",
      stats: ["STR"],
      dep: { flameArrow: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    dropShot: {
      name: "Drop Shot",
      desc: "Deals ranged stab damage to one target. Damage increases if the target is in the back row.",
      stats: ["STR"],
      dep: { multiShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    trickStep: {
      name: "Trickery",
      desc: "For a set number of turns, reduces the accuracy of one row of enemies.",
      stats: [],
      dep: { chainDance: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    stalker: {
      name: "Cautious Steps",
      desc: "For a set number of steps, reduces encounter rate.",
      stats: [],
      dep: { riskPerception: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    efficiency: {
      name: "Efficiency",
      desc: "For 5 turns, increases the HP restored by Medica and upgrades used by the user, and extends their range to one row.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    speedUp: {
      name: "Speed Up",
      desc: "Increases accuracy, evasion and action speed.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    swapStep: {
      name: "Quick Step",
      desc: "Selected ally acts first this turn.",
      stats: [],
      dep: { speedUp: 2 },
      maxLevel: 4,
      coords: { x: 3, y: 6 }
    },
    disablingShot: {
      name: "Disabling Shot",
      desc: "When the user attacks with a bow skill, attempts to inflict leg bind.",
      stats: [],
      dep: { finishingArrow: 1 },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    sagittariusShot: {
      name: "Sagittarius Shot",
      desc: "On the third turn after using this skill, ranged stab damage is dealt to one target at the start of that turn. Attempts to inflict stun. Ineffective if the user dies before the skill activates.",
      stats: ["STR"],
      dep: { dropShot: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    hazyShot: {
      name: "Hazy Arrow",
      desc: "Deals ranged stab damage to one target. Always hits. Can only be used if the user evaded an attack on the previous turn.",
      stats: ["STR"],
      dep: { trickStep: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    naturesBounty: {
      name: "Nature's Blessing",
      desc: "There is a chance to obtain extra rare items when gathering.",
      stats: [],
      dep: { stalker: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 4 }
    },
    scapegoat: {
      name: "Scapegoat",
      desc: "Selected ally will cover all party members a set number of times this turn. Ineffective if that ally has leg bind.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    sneakAttack: {
      name: "Sneak Attack",
      desc: "For a set number of steps, increases chance of preemptive attacks.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
    }
  },
  Ronin: {
    peerless: {
      name: "Musou",
      desc: "For 3 turns, stance duration will not decrease, and stances cannot be removed. In addition, the user gains the effect of all stances.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    issen: {
      name: "Issen",
      desc: "Deals ranged cut damage to all enemies. Attempts to inflict instant death. Chance of instant death is increased against targets at low HP.",
      stats: ["STR", "LUC"],
      unique: true,
      type: "Break",
      dep: { peerless: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    upperStance: {
      name: "Upper Stance",
	  desc: "Increases attack when Upper Stance is active, and increases the duration of Upper Stance. At the start of each battle, the user automatically assumes the stance with the highest skill level.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    upwardSlash: {
      name: "Upward Slash",
      desc: "Deals melee cut damage to one target. Assumes Upper Stance after use. Critical hit if used during Upper Stance.",
      stats: ["STR"],
      dep: { upperStance: 1 },
      maxLevel: 4,
      coords: { x: 1, y: 1 }
    },
    clearStance: {
      name: "Clear Stance",
	  desc: "Increases defense and Ronin skills' infliction rate when Clear Stance is active, and increases the duration of Clear Stance. At the start of each battle, the user automatically assumes the stance with the highest skill level.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    chargingThrust: {
      name: "Charging Thrust",
      desc: "Deals melee stab damage to one target. Assumes Clear Stance after use. Critical hit if used during Clear Stance.",
      stats: ["STR"],
      dep: { clearStance: 1 },
      maxLevel: 4,
      coords: { x: 1, y: 2 }
    },
    drawingStance: {
      name: "Drawing Stance",
	  desc: "Increases accuracy, evasion and action speed when Drawing Stance is active, and increases the duration of Drawing Stance. At the start of each battle, the user automatically assumes the stance with the highest skill level.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    sheathStrike: {
      name: "Sheath Strike",
      desc: "Deals melee bash damage to one target. Assumes Drawing Stance after use. Critical hit if used during Drawing Stance.",
      stats: ["STR"],
      dep: { drawingStance: 1 },
      maxLevel: 4,
      coords: { x: 1, y: 3 }
    },
    airBlade: {
      name: "Air Blade",
      desc: "Deals ranged cut damage to one target. Critical hit if used during any stance.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    armStrike: {
      name: "Arm Strike",
      desc: "Deals melee stab damage to one target. Attempts to inflict arm bind. Critical hit if used during any stance.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name: "Mine",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    breath: {
      name: "Breath",
      desc: "Restores HP to the user and allies adjacent to the user.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    helmSplitter: {
      name: "Helm Splitter",
      desc: "Requires any stance. Deals melee cut damage to one target. Low accuracy, ignores cut resistance. Reduces stance duration by 2 after use. Critical hit if used during Upper Stance.",
      stats: ["STR"],
      dep: { upwardSlash: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    flameGrater: {
      name: "Flame Grater",
      desc: "Deals melee cut+fire damage to one target. Critical hit if used during Upper Stance.",
      stats: ["STR"],
      dep: { helmSplitter: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    hazeSlash: {
      name: "Haze Slash",
      desc: "Requires any stance. Deals melee cut damage to one target. Attempts to inflict sleep. Reduces stance duration by 2 after use. Critical hit if used during Clear Stance.",
      stats: ["STR", "LUC"],
      dep: { chargingThrust: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    lightningStab: {
      name: "Lightning Stab",
      desc: "Deals melee stab+volt damage to one target. Critical hit if used during Clear Stance.",
      stats: ["STR"],
      dep: { hazeSlash: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    horizontalSlice: {
      name: "Horizontal Slice",
      desc: "Requires any stance. Deals melee cut damage to one row. Reduces stance duration by 2 after use. Critical hit if used during Drawing Stance.",
      stats: ["STR"],
      dep: { sheathStrike: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    frigidSlash: {
      name: "Frigid Slash",
      desc: "Deals melee cut+ice damage to one target. Critical hit if used during Drawing Stance.",
      stats: ["STR"],
      dep: { horizontalSlice: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    duel: {
      name: "Duel",
      desc: "Increases damage when attacking enemies that the user attacked last turn.",
      stats: [],
      dep: { airBlade: 2, armStrike: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4.5 }
    },
    physAtkUp: {
      name: "Phys ATK Up",
      desc: "Increases physical attack.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    swallowStrike: {
      name: "Swallow Strike",
      desc: "Requires any stance. Deals multiple instances of melee cut damage to one target. Removes stance after use, and disables skills on the next turn. Critical hit if used during Upper Stance.",
      stats: ["STR"],
      dep: { flameGrater: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    bluntingStab: {
      name: "Stone Thrust",
      desc: "Requires any stance. Deals melee stab damage to one target. Attempts to inflict petrify. Removes stance after use, and disables skills on the next turn. Critical hit if used during Clear Stance.",
      stats: ["STR", "LUC"],
      dep: { lightningStab: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    petalScatter: {
      name: "Petal Scatter",
      desc: "Requires any stance. Deals ranged cut damage to all targets. Removes stance after use, and disables skills on the next turn. Critical hit if used during Drawing Stance. Deals less damage based on the number of targets.",
      stats: ["STR"],
      dep: { frigidSlash: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    proofOfMastery: {
      name: "Full Proficiency",
      desc: "Increases the effect of all stances.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    },
    risingSpirit: {
      name: "Rouse Spirits",
      desc: "At the end of the turn, if a stance is active, restores TP to the user.",
      stats: [],
      dep: { proofOfMastery: 2 },
      maxLevel: 4,
      coords: { x: 5, y: 4 }
    },
    speedUp: {
      name: "Speed Up",
      desc: "Increases accuracy, evasion and action speed.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    }
  },
  "War Magus": {
    warEdgePower: {
      name: "War Edge Power",
      desc: "For 3 turns, War Edge skills can activate additional effects even against targets without an ailment.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    fairyRobe: {
      name: "Fairy Robe",
      desc: "Removes ailments and binds from all party members, and restores their HP. This turn, negates all binds, ailments, stun, instant death and debuffs against all party members.",
      stats: ["WIS"],
      unique: true,
      type: "Break",
      dep: { warEdgePower: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    warHeal: {
      name: "War Heal",
      desc: "Restores HP to one ally at the start of the turn, then at the end of the turn.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1.5 }
    },
    warHealLine: {
      name: "War Heal Line",
      desc: "Restores HP to one row at the start of the turn, then at the end of the turn.",
      stats: ["WIS"],
      dep: { warHeal: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    randomDisease: {
      name: "Random Disease",
      desc: "Attempts to inflict one of poison, paralyze, blind, sleep or curse on one target.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3.5 }
    },
    strengthSlash: {
      name: "Strength Slash",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, decreases their attack for 7 turns.",
      stats: ["STR"],
      dep: { randomDisease: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    guardSlash: {
      name: "Guard Slash",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, decreases their defense for 7 turns.",
      stats: ["STR"],
      dep: { randomDisease: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    displace: {
      name: "Displace",
      desc: "Removes ailments and binds from one ally, and attempts to inflict them on one enemy.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    vampire: {
      name: "Vampire",
      desc: "When the user deals damage to an enemy with an ailment, restores HP to the user's row. Can only activate once per turn.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    take: {
      name: "Take",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    warEdgeMastery: {
      name: "War Edge Mastery",
      desc: "User can use sword skills with staff. Increases maximum TP when a sword is equipped; increases damage when a staff is equipped.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    warRevive: {
      name: "War Revive",
      desc: "Revives one ally at the start of the turn, then attempts to revive them again at the end of the turn.",
      stats: [],
      dep: { warHealLine: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    artery: {
      name: "Artery",
      desc: "For 3 turns, automatically restores HP for all party members when they act, once per turn.",
      stats: ["WIS"],
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    warResponse: {
      name: "War Response",
      desc: "For 3 turns, automatically restores HP for all party members when the debuffed enemy acts, once per turn.",
      stats: ["WIS"],
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 2 }
    },
    headcut: {
      name: "Headcut",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict head bind.",
      stats: ["STR", "LUC"],
      dep: { strengthSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    armcut: {
      name: "Armcut",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict arm bind.",
      stats: ["STR", "LUC"],
      dep: { guardSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    legcut: {
      name: "Legcut",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict leg bind.",
      stats: ["STR", "LUC"],
      dep: { headcut: 2, armcut: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3.5 }
    },
    rouse: {
      name: "Rouse",
      desc: "Increases the user's Force gain based on the number of enemies with binds.",
      stats: [],
      dep: { vampire: 2 },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    hpUp: {
      name: "HP Up",
      desc: "Increases maximum HP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    statusDefUp: {
      name: "Status DEF Up",
      desc: "Decreases the chance of being inflicted with binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    warHealAll: {
      name: "War Heal All",
      desc: "Restores HP to all party members at the start of the turn, then at the end of the turn.",
      stats: ["WIS"],
      dep: { artery: 2, warResponse: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 1.5 }
    },
    barrier: {
      name: "Barrier",
      desc: "For one turn, there is a chance to nullify binds, ailments and debuffs against all party members, up to a set number of times.",
      stats: [],
      dep: { warHealAll: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 1.5 }
    },
    ailingSlash: {
      name: "Ailing Slash",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, increases damage dealt.",
      stats: ["STR"],
      dep: { legcut: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3.5 }
    },
    spiritDrain: {
      name: "Mind Drain",
      desc: "When the user deals damage to an enemy with both an ailment and a bind, restores TP to the user's row. Can only activate once per turn.",
      stats: ["WIS"],
      dep: { rouse: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    plague: {
      name: "Epidemic",
      desc: "User's normal attack attempts to inflict poison, paralyze, blind, sleep and curse.",
      stats: ["LUC"],
      dep: { spiritDrain: 3 },
      maxLevel: 4,
      coords: { x: 5, y: 5 }
    },
    physAtkUp: {
      name: "Phys ATK Up",
      desc: "Increases physical attack.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    }
  },
  Highlander: {
    heroBattle: {
      name: "Hero Battle",
      desc: "For 3 turns, spear skills will have increased power, and restore HP to all party members based on damage dealt. Spear skills that activate instant death will still restore HP based on the damage that would have been dealt.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    gaeBolg: {
      name: "Gae Bolg",
      desc: "Deals ranged stab damage to all enemies, and restores TP to the user based on damage dealt.",
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { heroBattle: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    longThrust: {
      name: "Long Thrust",
      desc: "Deals ranged stab damage to one target.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    spearAssist: {
      name: "Spear Assist",
      desc: "Deals melee stab damage to one target at the end of the turn. If an elemental attack was used by an ally beforehand, that element is added to the attack and its damage is increased. If more than one elemental attack was used, the most recent element applies.",
      stats: ["STR"],
      dep: { longThrust: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    turningTide: {
      name: "Turning Tide",
      desc: "When the user defeats an enemy, restores HP to all party members.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 2.5 }
    },
    drainingThrust: {
      name: "Draining Thrust",
      desc: "Consumes the user's HP to deal melee stab damage to the enemy front row.",
      stats: ["STR"],
      dep: { turningTide: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    legionThrust: {
      name: "Legion Thrust",
      desc: "Consumes the HP of all allies other than the user to deal melee stab damage to the enemy front row.",
      stats: ["STR"],
      dep: { turningTide: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    spiritShield: {
      name: "Spirit Shield",
      desc: "Consumes the user's HP to increase the elemental defense of one row for a set number of turns.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    bloodVeil: {
      name: "Bloody Veil",
      desc: "When the user loses HP, increases defense until the end of the turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name: "Mine",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    hpUp: {
      name: "HP Up",
      desc: "Increases maximum HP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    headPierce: {
      name: "Head Pierce",
      desc: "Deals melee stab damage to one target. Attempts to inflict head bind and instant death.",
      stats: ["STR", "LUC"],
      dep: { spearAssist: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    drainingBurst: {
      name: "Draining Burst",
      desc: "Consumes the user's HP to deal melee stab damage to all enemies.",
      stats: ["STR"],
      dep: { drainingThrust: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    delayedCharge: {
      name: "Delayed Charge",
      desc: "Consumes the user's HP to deal ranged stab damage to one target at the end of a set number of turns after. Damage is increased based on the number of turns passed before its activation. Ineffective if the user dies before the skill activates.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 3, y: 2 }
    },
    legionBurst: {
      name: "Legion Burst",
      desc: "Consumes the HP of all allies other than the user to deal melee stab damage to all enemies.",
      stats: ["STR"],
      dep: { legionThrust: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    bloodFortune: {
      name: "Blood Fortune",
      desc: "Consumes all party members' HP to increase their infliction rate of binds and ailments for a set number of turns.",
      stats: [],
      dep: { spiritShield: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    battleInstincts: {
      name: "Battle Instinct",
      desc: "At the start of battle, there is a chance to cast a buff on all party members that negates ailments once for 3 turns. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { bloodFortune: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    bloodyOffense: {
      name: "Bloody Offense",
      desc: "For a set number of turns, one row of allies will have increased attack, but lose HP every time they act.",
      stats: [],
      dep: { bloodVeil: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    bloodlust: {
      name: "Bloodlust",
      desc: "When the user loses HP, there is a chance that they will automatically attack with their weapon.",
      stats: [],
      dep: { bloodyOffense: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 5 }
    },
    physDefUp: {
      name: "Phys DEF Up",
      desc: "Increases physical defense.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    spearReversal: {
      name: "Spear Reversal",
      desc: "Deals melee stab damage to one target. Damage is increased if the target has higher percentage of HP remaining than the user.",
      stats: ["STR"],
      dep: { headPierce: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    crossCharge: {
      name: "Cross Charge",
      desc: "Consumes the user's HP to deal melee stab damage to one target. If currently charging for Delayed Charge, activates it and increases Cross Charge's damage.",
      stats: ["STR"],
      dep: { delayedCharge: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    legionCharge: {
      name: "Legion Charge",
      desc: "Consumes the HP of all allies other than the user to deal melee stab damage to one target.",
      stats: ["STR"],
      dep: { legionBurst: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 3 }
    },
    alliedBonds: {
      name: "Allied Bonds",
      desc: "If the user's skill consumed the HP of allies on the user's row, restores their TP at the end of the turn.",
      stats: [],
      dep: { legionCharge: 2 },
      maxLevel: 4,
      coords: { x: 5, y: 3 }
    },
    blackSabbath: {
      name: "Black Sabbath",
      desc: "Deals ranged almighty damage to all enemies, and restores all party members' HP based on damage dealt.",
      stats: ["STR"],
      dep: { bloodlust: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    physAtkUp: {
      name: "Phys ATK Up",
      desc: "Increases physical attack.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    }
  },
  Gunner: {
    actionBoost: {
      name: "Double Action",
      desc: "For 3 turns, all gun skills will activate twice. The second activation will have reduced power, but no TP cost.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    supremeBolt: {
      name: "Riot Gun",
      desc: "Deals ranged stab damage to one target. Attempts to stun the target with a high chance of success.",
      stats: ["STR", "LUC"],
      unique: true,
      type: "Break",
      dep: { actionBoost: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    rapidFire: {
      name: "Rapid Fire",
      desc: "Deals 3 instances of ranged stab damage to one target. Low accuracy.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    spreadShot: {
      name: "Splash Shot",
      desc: "Deals ranged stab damage to one target, with splash damage.",
      stats: ["STR"],
      dep: { rapidFire: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    legSnipe: {
      name: "Leg Snipe",
      desc: "Deals ranged stab damage to one target. Always hits. Attempts to inflict leg bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 2 }
    },
    armSnipe: {
      name: "Arm Snipe",
      desc: "Deals ranged stab damage to one target. Always hits. Attempts to inflict arm bind.",
      stats: ["STR", "LUC"],
      dep: { legSnipe: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    coverFire: {
      name: "Cover Support",
      desc: "When the user defends while in the back row, restores HP to the front row.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    shellShock: {
      name: "Shell Shock",
      desc: "For one turn, reduces attack, defense, accuracy and evasion for enemies in the back row, and attempts to inflict stun on them.",
      stats: ["LUC"],
      dep: { coverFire: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    medicBullet: {
      name: "Medic Bullet",
      desc: "Restores HP and removes ailments from one ally.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    popFlares: {
      name: "Pop Flare",
      desc: "For 3 turns, increases accuracy for all allies.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name: "Mine",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    leadingShot: {
      name: "Feint Shot",
      desc: "Deals ranged stab damage to one row, and reduces their evasion.",
      stats: ["STR"],
      dep: { spreadShot: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    wildShot: {
      name: "Scattershot",
      desc: "Deals ranged stab damage to all enemies.",
      stats: ["STR"],
      dep: { leadingShot: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    headSnipe: {
      name: "Head Snipe",
      desc: "Deals ranged stab damage to one target. Always hits. Attempts to inflict head bind.",
      stats: ["STR", "LUC"],
      dep: { armSnipe: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    actQuick: {
      name: "Act Quick",
      desc: "Until the end of the next turn, reduces TP usage and increases action speed.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 3 }
    },
    chargedShot: {
      name: "Charged Shot",
      desc: "Deals ranged stab damage to one target. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { actQuick: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    preemptiveShell: {
      name: "Preemptive Fire",
      desc: "If Shell Shock is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { shellShock: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    autoFlare: {
      name: "Preemptive Flare",
      desc: "If Pop Flares is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { popFlares: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    penetrator: {
      name: "Penetrator",
      desc: "When attacking a single target, there is a chance that line-piercing effects will be added. Does not activate for skills with multiple instances of damage.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    tpUp: {
      name: "TP Up",
      desc: "Increases maximum TP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    ricochet: {
      name: "Ricochet",
      desc: "Deals multiple instances of ranged stab damage to random targets. Low accuracy. Higher level increases the number of attacks.",
      stats: ["STR"],
      dep: { wildShot: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    chargedFire: {
      name: "Charged Fire",
      desc: "Deals ranged stab+fire damage to one target. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { chargedShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    chargedIce: {
      name: "Charged Ice",
      desc: "Deals ranged stab+ice damage to one target. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { chargedShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    chargedVolt: {
      name: "Charged Volt",
      desc: "Deals ranged stab+volt damage to one target. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { chargedShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 4 }
    },
    physAtkUp: {
      name: "Phys ATK Up",
      desc: "Increases physical attack.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    doubleAction: {
      name: "Multi-Shot",
      desc: "Attack skills have a chance of activating twice. Does not activate for links, chases and counterattacks.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    }
  },
  Sovereign: {
    victoryVow: {
      name: "Victory Vow",
      desc: "For 3 turns, increases Order skills' range to all party members, and reduces their TP cost by half.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    proofOfNobility: {
      name: "Proof of Nobility",
      desc: "This turn, buffs on all allies cannot be removed, and buffs that enhance attack, defense, infliction chance, ailment and binds resistance, healing, accuracy and evasion are doubled in strength.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { victoryVow: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    attackOrder: {
      name: "Attack Order",
      desc: "For a set number of turns, increases attack for one row.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    fireArms: {
      name: "Fire Arms",
      desc: "For a set number of turns, imbues one row of allies' weapons with fire, and increases their fire-elemental attack.",
      stats: [],
      dep: { attackOrder: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    freezeArms: {
      name: "Freeze Arms",
      desc: "For a set number of turns, imbues one row of allies' weapons with ice, and increases their ice-elemental attack.",
      stats: [],
      dep: { attackOrder: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    shockArms: {
      name: "Shock Arms",
      desc: "For a set number of turns, imbues one row of allies' weapons with volt, and increases their volt-elemental attack.",
      stats: [],
      dep: { attackOrder: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    guardOrder: {
      name: "Guard Order",
      desc: "For a set number of turns, increases defense for one row.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    reinforce: {
      name: "Reinforce",
      desc: "When the user casts a buff, restores HP to all affected allies.",
      stats: ["WIS"],
      dep: { guardOrder: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    royalVeil: {
      name: "Royal Veil",
      desc: "At the end of the turn, if the user's HP is full, restores HP to all party members. Only one instance of this skill can activate per turn.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    monarchMarch: {
      name: "Monarch March",
      desc: "During exploration, restores HP to all allies for every 3 steps taken.",
      stats: [],
      dep: { royalVeil: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 5 }
    },
    take: {
      name: "Take",
      desc: "Occasionally gains more items when using Take points.",
      unique: true,
      stats: [],
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    negotiation: {
      name: "Negotiation",
      desc: "Removes the oldest buff and debuff from one ally, and restores HP and TP to them based on the number of removals.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    majesty: {
      name: "Royal Dignity",
      desc: "Once per turn, when the user is damaged while having a buff active, their HP is restored.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 0 }
    },
    royalLineage: {
      name: "Royal Lineage",
      desc: "When the user is buffed, their TP is restored. Does not activate if the buff negated a debuff.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 0 }
    },
    elementalBombI: {
      name: "Element Bomb I",
      desc: "Removes elemental imbue from one ally to deal ranged damage of that element to all enemies.",
      stats: ["INT"],
      dep: { fireArms: 1, freezeArms: 1, shockArms: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    rallyOrder: {
      name: "Rally Order",
      desc: "For a set number of turns, increases maximum HP for one row.",
      stats: [],
      dep: { reinforce: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3.5 }
    },
    protectOrder: {
      name: "Protect Order",
      desc: "For a set number of turns, restores HP at the end of each turn for one row of allies.",
      stats: ["WIS"],
      dep: { reinforce: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4.5 }
    },
    preventOrder: {
      name: "Prevent Order",
      desc: "For a set number of turns, one row of allies may negate binds or ailments once.",
      stats: [],
      dep: { rallyOrder: 2, protectOrder: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    pairOrder: {
      name: "Tactical Decree",
      desc: "This turn, allies with buffs will restore TP based on damage taken when they are attacked.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    healOrder: {
      name: "Healing Decree",
      desc: "This turn, allies with buffs will restore HP based on damage dealt when they attack. Attacks that activate instant death will still restore HP based on the damage that would have dealt.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    statusDefUp: {
      name: "Status DEF Up",
      desc: "Decreases the chance of being inflicted with binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 0 }
    },
    elementalBombII: {
      name: "Element Bomb II",
      desc: "Removes elemental imbue from one ally to deal 3 instances of ranged damage of that element to random enemies.",
      stats: ["INT"],
      dep: { elementalBombI: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    clearance: {
      name: "Clearance",
      desc: "Removes all buffs and debuffs from all allies and enemies, and restores HP and TP to all allies based on the number of removals.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 3 }
    },
    dauntlessOrder: {
      name: "Dauntless Order",
      desc: "For a set number of turns, one row of allies may endure fatal damage once with a set amount of HP.",
      stats: [],
      dep: { preventOrder: 1 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    lastOrder: {
      name: "Final Decree",
      desc: "Removes all buffs from self to increase attack and defense for all allies this turn. Can only be used if the user has 3 buffs.",
      stats: [],
      dep: { pairOrder: 2, healOrder: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5.5 }
    },
    reorder: {
      name: "Renew",
      desc: "When the user removes their own buffs, there is a chance for the same buffs to be renewed for the user. Does not activate if the buff is timed out, removed by another ally, or negated by a debuff.",
      stats: [],
      dep: { lastOrder: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 5.5 }
    }
  },
  Ninja: {
    insolence: {
      name: "Diversion Gambit",
      desc: "For 3 turns, increases the user's evasion and chance of being targeted.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    ninpoPoisonMist: {
      name: "Ninpo: Toxic Mist",
      desc: "Attempts to inflict poison on all enemies.",
      stats: ["LUC"],
      unique: true,
      type: "Break",
      dep: { insolence: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    ninpoDaggers: {
      name: "Ninpo: Daggers",
      desc: "Deals ranged stab damage to a set number of random targets. Can hit each target once at most. Attempts to inflict sleep.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    ninpoCaltrops: {
      name: "Ninpo: Caltrops",
      desc: "This turn, when the selected row is attacked, counterattack with ranged slash damage and attempt to inflict poison.",
      stats: ["STR", "LUC"],
      dep: { ninpoDaggers: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    shadowBind: {
      name: "Shadow Bind",
      desc: "Deals melee cut damage to one target. Attempts to inflict leg bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    boneCrusher: {
      name: "Bone Crusher",
      desc: "Deals melee bash damage to one target. Reduces their physical defense.",
      stats: ["STR"],
      dep: { shadowBind: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    acrobatics: {
      name: "Reflexes",
      desc: "When the user evades an attack, their TP is restored.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4 }
    },
    concealment: {
      name: "Concealment",
      desc: "Increases evasion.",
      stats: [],
      dep: { acrobatics: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    ninpoMirage: {
      name: "Ninpo: Mirage",
      desc: "Creates a decoy of the user in an empty slot. The decoy has added evasion and chance to be targeted.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name: "Chop",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    ninpoMastery: {
      name: "Proficiency",
      desc: "Increases attack. At max level, melee attacks will hit for full damage and can always reach the enemy back row, even when the user is in the back.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 6 }
    },
    ninpoMirror: {
      name: "Ninpo: Mirror",
      desc: "Attempts to inflict the ailments and binds present on one enemy to all enemies.",
      stats: ["LUC"],
      dep: { ninpoCaltrops: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    foxDrop: {
      name: "Izuna",
      desc: "Deals melee cut damage to one target. Attempts to inflict petrify.",
      stats: ["STR", "LUC"],
      dep: { boneCrusher: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    hawkStrike: {
      name: "Hawk Strike",
      desc: "Deals multiple instances of melee cut damage to random targets.",
      stats: ["STR"],
      dep: { foxDrop: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    selfDestruct: {
      name: "Revenge Bomb",
      desc: "Once per battle, when the user is killed by an enemy attack, they will counterattack with ranged fire damage.",
      stats: ["STR"],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    ninpoClone: {
      name: "Ninpo: Double",
      desc: "Consumes a percentage of the user's HP and TP to create a clone in an empty slot. Force Boost and Force Break are unusable while a clone is active.",
      stats: [],
      dep: { selfDestruct: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    beheading: {
      name: "Beheading",
      desc: "Normal attacks have a chance to inflict instant death.",
      stats: ["LUC"],
      dep: { concealment: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    ninpoFlight: {
      name: "Ninpo: Flight",
      desc: "This turn, the user has a high chance of evading physical attacks. Each time the user evades an attack, the evasion boost is reduced.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    autoMirage: {
      name: "Auto-Mirage",
      desc: "If Ninpo: Mirage is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { ninpoMirage: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    statusAtkUp: {
      name: "Status ATK Up",
      desc: "Increases the chance of inflicting binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    ninpoShock: {
      name: "Ninpo: Panic",
      desc: "Attempts to inflict panic on all enemies.",
      stats: ["LUC"],
      dep: { ninpoMirror: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    eyeForAnEye: {
      name: "Return Malice",
      desc: "If the user evaded an attack on the previous turn, increases chance of inflicting ailments",
      stats: [],
      dep: { ninpoShock: 2 },
      maxLevel: 6,
      coords: { x: 5, y: 1 }
    },
    schadenfreude: {
      name: "Dominance",
      desc: "Deals melee cut damage to one target. Always hits. If target has an ailment, increases the user's Force.",
      stats: ["STR"],
      dep: { hawkStrike: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    drawingSlice: {
      name: "Drawing Slice",
      desc: "Deals multiple instances of melee damage to random targets, based on the number of clones active. All clones will disappear after use.",
      stats: ["STR"],
      dep: { schadenfreude: 2, ninpoClone: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 2.5 }
    },
    ninpoSmoke: {
      name: "Ninpo: Smoke",
      desc: "Consumes the user's HP to greatly increase their evasion for 3 turns.",
      stats: [],
      dep: { ninpoFlight: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    },
    smokePowder: {
      name: "Mystic Calm",
      desc: "Reduces TP cost. Will not reduce cost to 0.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 5 }
    }
  },
  Zodiac: {
    astrologersAxis: {
      name: "Divination",
      desc: "For 3 turns, Zodiac attack skills will have increased power, and restore half of their TP cost to the user.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    astralSign: {
      name: "Astrosign",
      desc: "Deals ranged fire+ice+volt damage to all enemies. On this turn, all allies' TP cost will be reduced to 0.",
      stats: ["INT"],
      unique: true,
      type: "Break",
      dep: { astrologersAxis: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    ethericGleam: {
      name: "Etheric Gleam",
      desc: "For a set number of turns, increases elemental attack for one row.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    fireStar: {
      name: "Fire Star",
      desc: "Deals ranged fire damage to one target, with splash damage.",
      stats: ["INT"],
      dep: { ethericGleam: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    iceStar: {
      name: "Ice Star",
      desc: "Deals ranged ice damage to one target, with line-piercing effects.",
      stats: ["INT"],
      dep: { ethericGleam: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    voltStar: {
      name: "Volt Star",
      desc: "Deals ranged volt damage to one row.",
      stats: ["INT"],
      dep: { ethericGleam: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    singularity: {
      name: "Singularity",
      desc: "Increases damage dealt when hitting weaknesses.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4.5 }
    },
    focusEther: {
      name: "Etheric Charge",
      desc: "Until the end of the next turn, Zodiac attack skills will hit only one target, but deal increased damage.",
      stats: [],
      dep: { singularity: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    ethericReturn: {
      name: "Etheric Return",
      desc: "When the user kills an enemy, their TP is restored.",
      stats: [],
      dep: { singularity: 3 },
      maxLevel: 4,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name: "Mine",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    horoscope: {
      name: "Horoscope",
      desc: "For a set number of turns, reduces encounter rate.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    etherMastery: {
      name: "Ether Mastery",
      desc: "Increases damage of Zodiac attack skills.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 0 }
    },
    tpUp: {
      name: "TP Up",
      desc: "Increases maximum TP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 0 }
    },
    binaryFire: {
      name: "Binary Fire",
      desc: "Deals ranged fire damage to all enemies.",
      stats: ["INT"],
      dep: { fireStar: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    binaryIce: {
      name: "Binary Ice",
      desc: "Deals ranged ice damage to all enemies.",
      stats: ["INT"],
      dep: { iceStar: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    binaryVolt: {
      name: "Binary Volt",
      desc: "Deals ranged volt damage to all enemies.",
      stats: ["INT"],
      dep: { voltStar: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    restoreEther: {
      name: "Etheric Boon",
      desc: "Increases attack based on the number of TP spent on the previous turn. Does not activate if TP spent last turn is too low.",
      stats: [],
      dep: { focusEther: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    antiEther: {
      name: "Anti-Ether",
      desc: "Provides a chance to nullify elemental attacks against the user's row.",
      stats: [],
      dep: { restoreEther: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    darkEther: {
      name: "Dark Ether",
      desc: "This turn, reduces TP usage for one row.",
      stats: [],
      dep: { ethericReturn: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    ethericShoot: {
      name: "Ether Shot",
      desc: "Deals ranged, INT-based damage to one enemy with the user's weapon.",
      stats: ["INT"],
      dep: { darkEther: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    fireProphecy: {
      name: "Fire Prophecy",
      desc: "Prevents fire-elemental attacks from one enemy. If an attack is prevented, increases the user's attack until the end of the next turn.",
      stats: [],
      dep: { binaryFire: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 1 }
    },
    iceProphecy: {
      name: "Ice Prophecy",
      desc: "Prevents ice-elemental attacks from one enemy. If an attack is prevented, increases the user's attack until the end of the next turn.",
      stats: [],
      dep: { binaryIce: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 2 }
    },
    voltProphecy: {
      name: "Volt Prophecy",
      desc: "Prevents volt-elemental attacks from one enemy. If an attack is prevented, increases the user's attack until the end of the next turn.",
      stats: [],
      dep: { binaryVolt: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 3 }
    },
    freeEnergy: {
      name: "Free Energy",
      desc: "Provides a chance to reduce the user's TP usage to 0.",
      stats: [],
      dep: { fireProphecy: 1, iceProphecy: 1, voltProphecy: 1 },
      maxLevel: 6,
      coords: { x: 5, y: 2 }
    },
    spreadEther: {
      name: "Multi-Strike Ether",
      desc: "Until the end of the next turn, Zodiac attack skills will deal reduced damage, but hit random targets 2-5 times. Meteor will instead hit 6-15 times.",
      stats: [],
      dep: { antiEther: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 4 }
    },
    meteor: {
      name: "Meteor",
      desc: "Deals 2-5 instances of ranged bash damage to random targets.",
      stats: ["INT"],
      dep: { horoscope: 3, ethericShoot: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 5.5 }
    }
  },
  Farmer: {
    itemAgain: {
      name: "Item Echo",
      desc: "For 3 turns, any items used by the user will take effect twice. The second activation will not consume another item.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    finalTrick: {
      name: "Final Secret",
      desc: "Fully restores all allies' Force gauges, and any broken Force gauges have a chance to be repaired.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { itemAgain: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sympathyPain: {
      name: "Sympathy Pain",
      desc: "Attempts to inflict ailments and binds on the user to all enemies. This will not remove them from the user.",
      stats: ["LUC", "LUC"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    strangeSeeds: {
      name: "Strange Seeds",
      desc: "At the end of this turn, attempts to inflict one of head bind, arm bind and leg bind to all enemies.",
      stats: ["LUC"],
      dep: { sympathyPain: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    playPossum: {
      name: "Play Possum",
      desc: "For 3 turns, decreases one ally's chance of being targeted.",
      stats: [],
      dep: { sympathyPain: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    keenEye: {
      name: "Keen Eye",
      desc: "For a set number of steps, displays treasure chests, hidden passages, staircases, FOEs and gather points on the minimap.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    searchSkill: {
      name: "Excavation",
      desc: "During exploration, provides a chance to receive gatherable items when walking.",
      stats: [],
      dep: { keenEye: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    flee: {
      name: "Flee",
      desc: "Consumes HP from all party members to attempt to flee the battle and return to the last used staircase or geomagnetic pole. Does not consume HP if fleeing failed.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    slapAwake: {
      name: "Slap Awake",
      desc: "Revives one ally. Can only be used in the field.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    harvestry: {
      name: "Harvestry",
      desc: "Occasionally gains more items when using any gathering points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    earthsBounty: {
      name: "Earth's Bounty",
      desc: "Increases experience gain for all party members while the user is alive.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 6 }
    },
    rottenEggs: {
      name: "Rotten Egg",
      desc: "For 3 turns, decreases attack for all enemies. Effect is stronger against enemies with an ailment.",
      stats: [],
      dep: { strangeSeeds: 3, playPossum: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 1.5 }
    },
    persistence: {
      name: "Persistence",
      desc: "At the end of the turn, the user has a chance of automatically reviving.",
      stats: [],
      dep: { rottenEggs: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 1.5 }
    },
    wasteNot: {
      name: "Waste Not",
      desc: "Increases item drop rate.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 2.5 }
    },
    strokeOfLuck: {
      name: "Godsend",
      desc: "During exploration, provides a chance to receive consumable items when walking.",
      stats: [],
      dep: { searchSkill: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    rainOrShin: {
      name: "Rain or Shine",
      desc: "For a set number of steps, nullifies damage tiles and muddy floors, and greatly reduces other sources of damage while exploring.",
      stats: [],
      dep: { flee: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    safeStroll: {
      name: "Safe Stroll",
      desc: "For a set number of steps, reduces encounter rate.",
      stats: [],
      dep: { rainOrShin: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    sharingIsCaring: {
      name: "Share the Wealth",
      desc: "Consumes the user's TP to restore TP to other allies on the same row.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    braveHeart: {
      name: "Fearless",
      desc: "If the user is in the front row and at full HP, their TP is restored at the end of the turn.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 5 }
    },
    survivalSkills: {
      name: "Survival Wisdom",
      desc: "Restores HP and TP to all party members when gathering.",
      stats: [],
      dep: { earthsBounty: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    lullaby: {
      name: "Lullaby",
      desc: "Inflicts sleep on the user and attempts to inflict sleep on all enemies.",
      stats: ["LUC"],
      dep: { persistence: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    songOfLabour: {
      name: "Fruitful Song",
      desc: "During exploration, restores TP to all allies every set number of steps taken.",
      stats: [],
      dep: { lullaby: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 1.5 }
    },
    dissection: {
      name: "Blessed Remains",
      desc: "When the user kills an enemy, restores Force to all party members.",
      stats: [],
      dep: { wasteNot: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 2.5 }
    },
    harvestFestival: {
      name: "Harvest Festival",
      desc: "Deals melee cut damage to all enemies. Increases damage dealt and attempts to inflict instant death on enemy with binds.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 10,
      coords: { x: 4, y: 3.5 }
    },
    naturesBounty: {
      name: "Nature's Blessing",
      desc: "There is a chance to obtain additional rare items when gathering.",
      stats: [],
      dep: { survivalSkills: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 6 }
    },
    doubleChop: {
      name: "Double Crop",
      desc: "When gathering, there is a chance to immediately gather again from the same spot. Can only activate once per gather.",
      stats: [],
      dep: { naturesBounty: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 6 }
    }
  },
  Shogun: {
    fullCombatForm: {
      name: "Unified Effort",
      desc: "For 3 turns, increases maximum HP and attack for all party members.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    bodyDouble: {
      name: "Decoy Party",
      desc: "This turn, all party members will negate any hostile action once.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { fullCombatForm: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    parryingBlade: {
      name: "Second Sword",
      desc: "Increases physical defense when two weapons are equipped. Enables sub-weapon when this skill is learned.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    spiritFlow: {
      name: "Echoing Slash",
      desc: "Deals melee damage to one target with the equipped katana at the start of turn. If two weapons are equipped, attacks again with the other weapon after the target acts.",
      stats: ["STR"],
      dep: { parryingBlade: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    counterCommand: {
      name: "Front Command",
      desc: "This turn, when the selected ally is attacked, all front row allies will counterattack with their weapons. Does not activate against counterattacks.",
      stats: ["STR"],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    boltSlash: {
      name: "Bolt Slash",
      desc: "Deals melee cut+volt damage to one target.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    sight: {
      name: "Avidya Sight",
      desc: "Increases the user's attack at night or when blinded.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    greatGeneral: {
      name: "Great Warrior",
      desc: "For 3 turns, increases one ally's physical attack and chance of being targeted.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    assassinGathering: {
      name: "Taunt Assassins",
      desc: "For a set number of steps, increases encounter rate and experience gained from defeating enemies.",
      stats: [],
      dep: { greatGeneral: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    take: {
      name: "Take",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    moraleBoost: {
      name: "Morale Boost",
      desc: "When the user is revived, restores HP to all allies.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 6 }
    },
    twinSparrow: {
      name: "Twin Swallow",
      desc: "Deals melee damage to one target with the user's weapon. If two weapons are equipped, this skill will hit twice. First hit will be from the katana, while the second hit will be from the other weapon.",
      stats: ["STR"],
      dep: { spiritFlow: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    baitCommand: {
      name: "Endure Command",
      desc: "This turn, when the user is attacked, all allies other than the user will counterattack with their weapons. Does not activate against counterattacks.",
      stats: ["STR"],
      dep: { counterCommand: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 2 }
    },
    blitzCommand: {
      name: "Blitz Command",
      desc: "All allies other than the user will attack one target with their weapons.",
      stats: ["STR"],
      dep: { baitCommand: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2 }
    },
    morningStar: {
      name: "Morning Star",
      desc: "Deals melee cut damage to one row. Damage increases during the day.",
      stats: ["STR"],
      dep: { boltSlash: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    dusk: {
      name: "Twilight Hour",
      desc: "Deals melee cut damage to one target. Damage increases at night.",
      stats: ["STR"],
      dep: { sight: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    bloodyLance: {
      name: "Bloody Lance",
      desc: "When the user kills an enemy or ally, their attack is increased. The effect is reset when the user dies.",
      stats: [],
      dep: { dusk: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    reincarnation: {
      name: "Reincarnation",
      desc: "On the turn when the user's HP reaches 0, there is a chance that they may revive at the end of that turn.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 3, y: 5 }
    },
    fellingBird: {
      name: "Peerless Demon",
      desc: "Increases damage dealt for each hit you make in the same turn.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 2, y: 6 }
    },
    ritualSuicide: {
      name: "Seppuku",
      desc: "Restores HP to all other allies with a chance to revive them, but the user dies. This self-inflicted death cannot be prevented via any means.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    fiveRingSword: {
      name: "5-Ring Sword",
      desc: "Deals multiple instances of melee damage to random targets with user's weapon. If two weapons are equipped, the maximum number of hits will double, and this attack will alternate between the katana and the other weapon.",
      stats: ["STR"],
      dep: { twinSparrow: 4 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    reprisalCommand: {
      name: "Shot Command",
      desc: "This turn, when the selected row is attacked, all allies equipped with a bow or gun will counterattack with their bow or gun. Does not activate against counterattacks.",
      stats: ["STR"],
      dep: { blitzCommand: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    warriorMight: {
      name: "Warrior Might",
      desc: "This turn, the user will chase all attacks from all allies, but will lose HP for every chase. The HP loss can kill the user. Links, chases and counterattacks cannot be chased. Only one chase will be made for each action.",
      stats: ["STR"],
      dep: { reprisalCommand: 2 },
      maxLevel: 10,
      coords: { x: 5, y: 2 }
    },
    curseStrike: {
      name: "Curse Strike",
      desc: "Deals melee bash damage to one target. Attempts to inflict curse and arm bind.",
      stats: ["STR", "LUC"],
      dep: { bloodyLance: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    mercyKill: {
      name: "Execution",
      desc: "When any enemy or ally is attacked, and their HP falls below a set percentage, there is a chance to inflict instant death to them.",
      stats: [],
      dep: { curseStrike: 3 },
      maxLevel: 4,
      coords: { x: 5, y: 4 }
    },
    foreHonor: {
      name: "Swift Justice",
      desc: "For 3 turns, increases one ally's physical attack and action speed, but decreases their physical defense.",
      stats: [],
      dep: { reincarnation: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    }
  },
  Landsknecht: {
    trinity: {
      name: "Trinity",
      desc: "For 3 turns, increases the user's attack, accuracy and action speed.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    fullCharge: {
      name: "Full Charge",
      desc: "This turn, the user is fully immune to any hostile effects from enemies. Until the end of the next turn, increases the user's attack and action speed.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { trinity: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    proficiency: {
      name: "Proficiency",
      desc: "After the user attacks this turn, all further attacks against enemies attacked by the user will have increased damage and accuracy.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 1 }
    },
    sonicRaid: {
      name: "Falcon Slash",
      desc: "Deals melee damage to one target with the user's weapon at the start of the turn.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    blazingLink: {
      name: "Blazing Link",
      desc: "Deals melee cut/stab+fire damage to one target. If the target is attacked again after, follows up with another attack of the same element. Chance of follow-up decreases with each hit.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    freezingLink: {
      name: "Freezing Link",
      desc: "Deals melee cut/stab+ice damage to one target. If the target is attacked again after, follows up with another attack of the same element. Chance of follow-up decreases with each hit.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    electricLink: {
      name: "Electric Link",
      desc: "Deals melee cut/stab+volt damage to one target. If the target is attacked again after, follows up with another attack of the same element. Chance of follow-up decreases with each hit.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    vanguard: {
      name: "Vanguard",
      desc: "For 5 turns, decreases the user's physical defense, but increases physical attack and action speed.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    powerBreak: {
      name: "Power Break",
      desc: "Deals melee bash damage to one target. Decreases their attack for 3 turns. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name: "Mine",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    physDefUp: {
      name: "Phys DEF Up",
      desc: "Increases physical defense.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    doubleStrike: {
      name: "Double Strike",
      desc: "Deals 2 instances of melee damage to one target with the user's weapon.",
      stats: ["STR"],
      dep: { sonicRaid: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    spiralSlice: {
      name: "Spiral Slice",
      desc: "Deals melee cut damage to one target, with splash damage.",
      stats: ["STR"],
      dep: { doubleStrike: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 0.5 }
    },
    penetrate: {
      name: "Penetrate",
      desc: "Deals melee stab damage to one target, with line-piercing effects.",
      stats: ["STR"],
      dep: { doubleStrike: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1.5 }
    },
    improvedLink: {
      name: "Improved Link",
      desc: "For 3 turns, increases the number of follow-ups that can be made from link skills used by the user, as well as their chance of follow-up. Each action may trigger at most 4 link follow-ups.",
      stats: [],
      dep: { blazingLink: 3, freezingLink: 3, electricLink: 3 },
      maxLevel: 4,
      coords: { x: 2, y: 3 }
    },
    linkSmash: {
      name: "Smash Link",
      desc: "Link follow-up attacks can deal critical hits. If an action triggered multiple follow-ups and one of them dealt a critical hit, all subsequent follow-ups triggered by that action will automatically deal critical hits as well.",
      stats: [],
      dep: { improvedLink: 1 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    guardBreak: {
      name: "Guard Break",
      desc: "Deals melee bash damage to one target. Decreases their defense for 3 turns. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { powerBreak: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    speedBreak: {
      name: "Speed Break",
      desc: "Deals melee bash damage to one target. Decreases their evasion and action speed for 3 turns. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { guardBreak: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    initiative: {
      name: "Initiative",
      desc: "When attacking before any enemies act, increases damage and accuracy.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 6 }
    },
    statusDefUp: {
      name: "Status DEF Up",
      desc: "Decreases the chance of being inflicted with binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    swordTempest: {
      name: "Sword Tempest",
      desc: "Deals melee cut damage to one target. High power at the cost of speed.",
      stats: ["STR"],
      dep: { spiralSlice: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 0.5 }
    },
    swiftStab: {
      name: "Swift Stab",
      desc: "Deals multiple instances of melee stab damage to random targets.",
      stats: ["STR"],
      dep: { penetrate: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    linkMastery: {
      name: "Link Mastery",
      desc: "For each link follow-up made this turn, increases the damage of subsquent link follow-ups.",
      stats: [],
      dep: { linkSmash: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 3 }
    },
    linkEnd: {
      name: "Link Finale",
      desc: "Deals melee damage to one target with the user's weapon. Damage is based on the number of link follow-ups made on the previous turn.",
      stats: ["STR"],
      dep: { linkMastery: 2 },
      maxLevel: 6,
      coords: { x: 5, y: 3 }
    },
    fullBreak: {
      name: "Full Break",
      desc: "Deals melee bash damage to one target. Damage is increased if the target has a Break skill debuff. Multiple Break debuffs will not increase damage further. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { speedBreak: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    singleDevote: {
      name: "Single Devotion",
      desc: "Increases damage when fewer elements are used in an attack.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
    }
  },
  Nightseeker: {
    killerStance: {
      name: "Killing Intent",
      desc: "For 3 turns, increases attack and ailment infliction chance for the user.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    disaster: {
      name: "Disaster",
      desc: "Deals melee cut damage to one target. If the target has an ailment, increases the ailment's duration.",
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { killerStance: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sandThrow: {
      name: "Sand Throw",
      desc: "Deals ranged cut damage to one target. Attempts to inflict blind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    sleepThrow: {
      name: "Sleep Throw",
      desc: "Deals ranged cut damage to one target. Attempts to inflict sleep.",
      stats: ["STR", "LUC"],
      dep: { sandThrow: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 1.5 }
    },
    shadowCloak: {
      name: "Shadow Cloak",
      desc: "For 3 turns, negates one physical attack made against the user.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 3 }
    },
    bidingSlice: {
      name: "Biding Slice",
      desc: "Deals melee cut damage to one target. If the user is not damaged until the end of the turn, deals melee cut damage to the same target again.",
      stats: ["STR"],
      dep: { shadowCloak: 1 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    iceKnife: {
      name: "Ice Knife",
      desc: "Deals cut+ice damage to one target.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    proficiency: {
      name: "Proficiency",
      desc: "Increases damage dealt to enemies with ailments.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    decoySign: {
      name: "Decoy Sign",
      desc: "For 3 turns, increases one ally's chance of being targeted.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    bladeFlurry: {
      name: "Blade Flurry",
      desc: "User can attack with both weapons if two weapons are equipped. Damage of the second attack is based on this skill's level. Enables sub-weapon when this skill is learned.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    chop: {
      name: "Chop",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    curseThrow: {
      name: "Curse Throw",
      desc: "Deals ranged cut damage to one target. Attempts to inflict curse.",
      stats: ["STR", "LUC"],
      dep: { sleepThrow: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    nerveThrow: {
      name: "Nerve Throw",
      desc: "Deals ranged cut damage to one target. Attempts to inflict paralysis.",
      stats: ["STR", "LUC"],
      dep: { curseThrow: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    shadowBite: {
      name: "Shadow Bite",
      desc: "Deals melee cut damage to one target. Damage is increased if the target has an ailment.",
      stats: ["STR"],
      dep: { sleepThrow: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    autoCloak: {
      name: "Auto-Cloak",
      desc: "If Shadow Cloak is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { bidingSlice: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    backstab: {
      name: "Backstab",
      desc: "Deals melee cut damage to one target. Attempts to inflict head bind. If the user has Shadow Cloak, add almighty element to the attack and increases damage.",
      stats: ["STR", "LUC"],
      dep: { autoCloak: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    sneakAttack: {
      name: "Sneak Attack",
      desc: "For a set number of steps, increases the chance of preemptive attacks.",
      stats: [],
      dep: { proficiency: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    foulMastery: {
      name: "Foul Mastery",
      desc: "Increases attack every time the user inflicts an ailment. Bonus stacks up to 3 times, and is reset if the user dies.",
      stats: [],
      dep: { sneakAttack: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    speedUp: {
      name: "Speed Up",
      desc: "Increases accuracy, evasion and action speed.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    spreadThrow: {
      name: "Spread Throw",
      desc: "Until the end of the next turn, increases throw skills' range to all targets, and improves their infliction rate.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 6 }
    },
    venomThrow: {
      name: "Venom Throw",
      desc: "Deals ranged cut damage to one target. Attempts to inflict poison.",
      stats: ["STR", "LUC"],
      dep: { nerveThrow: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    swiftEdge: {
      name: "Swift Edge",
      desc: "Deals 3-5 instances of melee cut damage to one target. If the target has an ailment, maximum number of attacks is increased to 9.",
      stats: ["STR"],
      dep: { shadowBite: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    assassinate: {
      name: "Assassinate",
      desc: "Deals melee cut damage to one target. If the user has Shadow Cloak, attempts to inflict instant death.",
      stats: ["STR"],
      dep: { backstab: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    returnCloak: {
      name: "Enduring Cloak",
      desc: "When Shadow Cloak negates an attack, there is a chance that Shadow Cloak will be automatically cast on the user.",
      stats: [],
      dep: { assassinate: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 3 }
    },
    followTrace: {
      name: "Follow Trace",
      desc: "After using an attack skill, if at least one of the skill's targets has an ailment, there is a chance to repeat the skill.",
      stats: [],
      dep: { bladeFlurry: 4 },
      maxLevel: 10,
      coords: { x: 4, y: 5 }
    },
    autoSpread: {
      name: "Auto-Spread",
      desc: "If Spread Throw is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { spreadThrow: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
    }
  },
  Arcanist: {
    circleProtection: {
      name: "Circle Paradise",
      desc: "For 3 turns, increases the user's bind and ailment infliction chance, and prevents circles from being removed.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    releasalSpell: {
      name: "Releasal Spell",
      desc: "Remove buffs and accumulative resistance from all enemies.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { circleProtection: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    circleBoon: {
      name: "Circle Boon",
      desc: "If a circle is active, restores HP to all party members at the end of the turn.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 1 }
    },
    dismissHeal: {
      name: "Dismiss Heal",
      desc: "Dismisses the current circle and restores HP to all party members.",
      stats: ["WIS"],
      dep: { circleBoon: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    chainCircle: {
      name: "Chain Circle",
      desc: "Activates a circle that attempts to inflict arm bind on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    snareCircle: {
      name: "Snare Circle",
      desc: "Activates a circle that attempts to inflict leg bind on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { chainCircle: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    nerveCircle: {
      name: "Nerve Circle",
      desc: "Activates a circle that attempts to inflict paralysis on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    curseCircle: {
      name: "Curse Circle",
      desc: "Activates a circle that attempts to inflict curse on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { nerveCircle: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    bracingWalk: {
      name: "Bracing Walk",
      desc: "During exploration, restores HP to all allies for every 3 steps taken.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4 }
    },
    proficiency: {
      name: "Proficiency",
      desc: "Restores TP to the user when a circle is dismissed or times out.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name: "Chop",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    dismissRevive: {
      name: "Dismiss Revive",
      desc: "Dismisses the current circle to attempt to revive one row of allies.",
      stats: [],
      dep: { dismissHeal: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    dismissBlow: {
      name: "Dismiss Blow",
      desc: "Dismisses the current circle to deal ranged almighty damage to one target.",
      stats: ["INT"],
      dep: { dismissRevive: 3 },
      maxLevel: 10,
      coords: { x: 3, y: 1 }
    },
    hoodCircle: {
      name: "Hood Circle",
      desc: "Activates a circle that attempts to inflict head bind on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { snareCircle: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    sleepCircle: {
      name: "Sleep Circle",
      desc: "Activates a circle that attempts to inflict sleep on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { curseCircle: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    charmEye: {
      name: "Charm Eye",
      desc: "For 3 turns, decreases attack for all enemies.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    atrophicEye: {
      name: "Atrophic Eye",
      desc: "For 3 turns, decreases defense for all enemies.",
      stats: [],
      dep: { charmEye: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    statusAtkUp: {
      name: "Status ATK Up",
      desc: "Increases the chance of inflicting binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    tameGround: {
      name: "Tame Ground",
      desc: "For a set number of steps, nullifies damage tiles and muddy floors, and greatly reduces other sources of damage while exploring.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    wardingMist: {
      name: "Warding Mist",
      desc: "Provides a chance to nullify binds, ailments and stun for the user's row.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 6 }
    },
    dismissBlast: {
      name: "Dismiss Blast",
      desc: "Dismisses the current circle to deal ranged almighty damage to all enemies.",
      stats: ["INT"],
      dep: { dismissBlow: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    circleMastery: {
      name: "Circle Mastery",
      desc: "Increases the power of Dismiss skills.",
      stats: [],
      dep: { dismissBlast: 3 },
      maxLevel: 6,
      coords: { x: 5, y: 1 }
    },
    poisonCircle: {
      name: "Poison Circle",
      desc: "Activates a circle that attempts to inflict poison on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { sleepCircle: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2.5 }
    },
    chaosCircle: {
      name: "Chaos Circle",
      desc: "Activates a circle that attempts to inflict panic on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { sleepCircle: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
    },
    dismissQuake: {
      name: "Dismiss Quake",
      desc: "Dismisses the current circle to attempt to inflict stun on all enemies.",
      stats: ["LUC"],
      dep: { poisonCircle: 3, chaosCircle: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 3 }
    },
    tpReturn: {
      name: "TP Return",
      desc: "Restores TP to the user when they inflict a bind, ailment or stun. Inflicting something on multiple enemies will not increase the effect of this skill.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 6 }
    }
  },
  Imperial: {
    ignition: {
      name: "Ignition",
      desc: "For 3 turns, the user's drive skills will not activate the overheat state.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    conversion: {
      name: "Conversion",
      desc: "Restores TP to the user. This can restore TP over maximum TP. The overhealed TP will disappear at the end of battle, or when the user dies.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { ignition: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sharpEdge: {
      name: "Sharp Edge",
      desc: "Activation skill. Deals melee cut damage to one target. Reduces overheat duration by 1 turn.",
      stats: ["STR"],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 1 }
    },
    naturalEdge: {
      name: "Natural Edge",
      desc: "Activation skill. Deals melee damage to one target with the user's weapon.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    bloodEdge: {
      name: "Blood Edge",
      desc: "Connecting skill. Deals melee cut damage to one target. Restores HP to the user based on the amount of damage dealt. Can only be used if an activation skill was used on the previous turn.",
      stats: ["STR"],
      dep: { sharpEdge: 2, naturalEdge: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1.5 }
    },
    rearGuard: {
      name: "Heavy Guard",
      desc: "For 3 turns, increases defense for one ally, but that ally will move last each turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    assaultDrive: {
      name: "Assault Drive",
      desc: "Deals melee cut damage to one target, and places the user in the overheat state for 7 turns. Cannot be used while overheated. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 4 }
    },
    heatSink: {
      name: "Heat Sink",
      desc: "Reduces overheat duration by a set number of turns. Can only be used while overheated.",
      stats: [],
      dep: { assaultDrive: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 3.5 }
    },
    overheatGuard: {
      name: "Heat Shield",
      desc: "While overheated, increases the user's defense.",
      stats: [],
      dep: { assaultDrive: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 4.5 }
    },
    avenger: {
      name: "Avenger",
      desc: "When an ally dies, restores HP to the user.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    mine: {
      name: "Mine",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    massiveEdge: {
      name: "Massive Edge",
      desc: "Activation skill. Deals melee cut damage to one target, with splash damage.",
      stats: ["STR"],
      dep: { bloodEdge: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    coolEdge: {
      name: "Cool Edge",
      desc: "Connecting skill. Deals melee cut damage to one target. Reduces duration of overheat by 2 turns. Can only be used if an activation skill was used on the previous turn.",
      stats: ["STR"],
      dep: { massiveEdge: 2 },
      maxLevel: 4,
      coords: { x: 3, y: 1 }
    },
    tripEdge: {
      name: "Trip Edge",
      desc: "Activation skill. Deals melee cut damage to one target. Attempts to inflict leg bind.",
      stats: ["STR", "LUC"],
      dep: { bloodEdge: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    impulseEdge: {
      name: "Impulse Edge",
      desc: "Connecting skill. Deals melee cut damage to one target. Restores TP to the user. Can only be used if an activation skill was used on the previous turn.",
      stats: ["STR"],
      dep: { tripEdge: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2 }
    },
    intercooler: {
      name: "Intercooler",
      desc: "Increases the damage of Drive skills. Increasing this skill's level will also reduce the duration of the overheat state.",
      stats: [],
      dep: { heatSink: 1, overheatGuard: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 4 }
    },
    flameDrive: {
      name: "Flame Drive",
      desc: "Deals melee cut+fire damage to one target, and places the user in the overheat state for 8 turns. Cannot be used while overheated. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { intercooler: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    freezeDrive: {
      name: "Freeze Drive",
      desc: "Deals melee cut+ice damage to one target, and places the user in the overheat state for 8 turns. Cannot be used while overheated. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { intercooler: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    shockDrive: {
      name: "Shock Drive",
      desc: "Deals melee cut+volt damage to one target, and places the user in the overheat state for 8 turns. Cannot be used while overheated. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { intercooler: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    statusDefUp: {
      name: "Status DEF Up",
      desc: "Decreases the chance of being inflicted with binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    chargeEdge: {
      name: "Charge Edge",
      desc: "Terminating skill. Deals melee cut damage to one target. Until the end of the next turn, increases the user's attack. Can only be used if an activation skill or connecting skill was used on the previous turn.",
      stats: ["STR"],
      dep: { coolEdge: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    forceEdge: {
      name: "Force Edge",
      desc: "Terminating skill. Deals melee cut damage to one target. Restores Force to the user. Can only be used if an activation skill or connecting skill was used on the previous turn.",
      stats: ["STR"],
      dep: { impulseEdge: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    hpUp: {
      name: "HP Up",
      desc: "Increases maximum HP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    accelDrive: {
      name: "Accel Drive",
      desc: "Deals melee cut+almighty damage to one target, and places the user in the overheat state for 9 turns. Cannot be used while overheated. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { flameDrive: 1, freezeDrive: 1, shockDrive: 1 },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    },
    absorber: {
      name: "Absorber",
      desc: "Restores TP to the user when hitting a weakness.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 5 }
    },
    elemAtkUp: {
      name: "Elem ATK Up",
      desc: "Increases elemental attack.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    }
  },
  Pugilist: {
    sealRush: {
      name: "Bind Rush",
      desc: "For 3 turns, increases the user's bind infliction chance, and chases any of the user's attacks against an enemy with binds, ailments or stun. Multi-hit attacks will only be chased once.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    finalBlow: {
      name: "Final Blow",
      desc: "Deals melee bash damage to one target. Attempts to inflict head bind, arm bind and leg bind.",
      stats: ["STR", "LUC"],
      unique: true,
      type: "Break",
      dep: { sealRush: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    concussion: {
      name: "Concussion",
      desc: "Deals melee bash damage to one target. Attempts to inflict head bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    armBreaker: {
      name: "Arm Breaker",
      desc: "Deals melee bash damage to one target. Attempts to inflict arm bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    lowBlow: {
      name: "Low Blow",
      desc: "Deals melee bash damage to one target. Attempts to inflict leg bind on the target.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    oneTwoPunch: {
      name: "One-Two Punch",
      desc: "Deals melee bash damage to one target. May follow up with Concussion, Arm Breaker, and Low Blow if the target does not have the respective bind. Follow-up skills deal reduced damage.",
      stats: ["STR", "LUC"],
      dep: { concussion: 2, armBreaker: 2, lowBlow: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    corkscrew: {
      name: "Corkscrew",
      desc: "Deals melee bash damage to one target. Attempts to inflict paralysis on the target.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 3.5 }
    },
    adrenaline: {
      name: "Adrenaline",
      desc: "Restores TP to the user when they inflict a bind, ailment or stun. Inflicting something on multiple enemies will not increase the effect of this skill.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4 }
    },
    doublePunch: {
      name: "Double Punch",
      desc: "When any single-action, single-target Pugilist skill is used, or when Corkscrew is used via Added Blow, or when Cross Counter is used (despite what the description claims), if the skill fails to inflict their bind or ailment, there is a chance it will be repeated.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name: "Chop",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    hpUp: {
      name: "HP Up",
      desc: "Increases maximum HP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    devilsFist: {
      name: "Devil's Fist",
      desc: "Consumes HP to deal melee bash damage to one target, with splash damage.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    fightingSpirit: {
      name: "Fighting Spirit",
      desc: "If the user lost HP on the previous turn, increases their attack this turn.",
      stats: [],
      dep: { devilsFist: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    addedBlow: {
      name: "Following Strike",
      desc: "When the user inflicts a bind on an enemy, there is a chance to follow up with Corkscrew.",
      stats: [],
      dep: { oneTwoPunch: 2, corkscrew: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 2.75 }
    },
    leadingBlow: {
      name: "Leading Blow",
      desc: "Deals melee bash damage to one target. For every bind the target has, follows up with the corresponding Pugilist skill. For any ailment the target has, follows up with Corkscrew.",
      stats: ["STR"],
      dep: { addedBlow: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2.75 }
    },
    breather: {
      name: "Breather",
      desc: "Removes binds and ailment from the user, and increases attack until the end of the next turn. Cannot be used if the user has no binds or ailments.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 4 }
    },
    faultBlocker: {
      name: "Fault Blocker",
      desc: "For 3 turns, increases ailment and bind resistance for the user's row.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    clinch: {
      name: "Clinch",
      desc: "Attempts to inflict head bind, arm bind, and leg bind on both the user and the target.",
      stats: ["LUC"],
      dep: { breather: 1, faultBlocker: 1 },
      maxLevel: 6,
      coords: { x: 3, y: 4.5 }
    },
    statusAtkUp: {
      name: "Status ATK Up",
      desc: "Increases the chance of inflicting binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    crossCounter: {
      name: "Cross Counter",
      desc: "This turn, when a party member on the user's row is attacked, counterattacks with melee bash damage and attempts to inflict the corresponding bind on the target. Does not activate if the counterattack cannot reach the enemy.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    thunderFist: {
      name: "Thunder Fist",
      desc: "Deals melee bash+volt damage to one target. If the attack does not kill the target, the user takes damage.",
      stats: ["STR"],
      dep: { fightingSpirit: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    lashOut: {
      name: "Lash Out",
      desc: "Deals multiple instances of melee bash damage to one target. The number of hits is equal to the number of hits made on the previous turn. No matter how many attacks Lash Out makes, it will always count as 1 attack for the purpose of this skill.",
      stats: ["STR"],
      dep: { leadingBlow: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2.75 }
    },
    meditation: {
      name: "Meditation",
      desc: "Until the end of the next turn, increases user's chance of inflicting binds and ailments.",
      stats: [],
      dep: { clinch: 3 },
      maxLevel: 4,
      coords: { x: 4, y: 4.5 }
    },
    ragingWaves: {
      name: "Raging Billows",
      desc: "Increases damage dealt based on the number of binds and ailments the target has.",
      stats: [],
      dep: { meditation: 2 },
      maxLevel: 10,
      coords: { x: 5, y: 4.5 }
    },
    millionLash: {
      name: "Million Rush",
      desc: "Normal attacks may hit 2-4 times if two weapons are equipped. Enables sub-weapon when this skill is learned.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    },
   resonanceBlow: {
      name: "Resonance Blow",
      desc: "Deals multiple instances of melee bash damage to one target. The number of hits increases based on the number of turns since Resonance Blow was last used.",
      stats: ["STR"],
      dep: { millionLash: 3 },
      maxLevel: 6,
      coords: { x: 5, y: 6 }
    }
  },
  Harbinger: {
    infiniteMiasma: {
      name: "Endless Armor",
      desc: "For 3 turns, Miasma Armor's duration will not decrease, and it cannot be removed.",
      unique: true,
      type: "Boost",
      stats: [],
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    miasmaTorrent: {
      name: "Miasma Tsunami",
      desc: "This turn, greatly reduces all enemies' attack, defense, evasion, action speed, and bind/ailment resistance.",
      unique: true,
      type: "Break",
      stats: [],
      dep: { infiniteMiasma: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    erodingMiasma: {
      name: "Eroding Miasma",
      desc: "For a set number of turns, decreases all enemies' defense.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    stiflingMiasma: {
      name: "Stifling Miasma",
      desc: "For a set number of turns, decreases all enemies' attack.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 2 }
    },
    slowingMiasma: {
      name: "Sluggish Miasma",
      desc: "For a set number of turns, decreases all enemies' evasion and action speed.",
      stats: [],
      dep: { erodingMiasma: 2, stiflingMiasma: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    paralyzingReap: {
      name: "Paralyzing Reap",
      desc: "Deals melee cut damage to one row. If Miasma Armor is active, attempts to inflict paralysis.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    toxicReap: {
      name: "Toxic Reap",
      desc: "Deals melee cut damage to one row. If Miasma Armor is active, attempts to inflict poison.",
      stats: ["STR", "LUC"],
      dep: { paralyzingReap: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    miasmaArmor: {
      name: "Miasma Armor",
      desc: "Puts the user in the Miasma Armor state for 3 turns. Increases action speed when Miasma Armor is active. At the start of battle, automatically puts the user in the Miasma Armor state.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4.5 }
    },
    endlessShroud: {
      name: "Endless Shroud",
      desc: "When the user uses a debuff skill, there's a chance to cast Miasma Armor automatically.",
      stats: [],
      dep: { miasmaArmor: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    atonement: {
      name: "Atonement",
      desc: "Requires Miasma Armor. Removes Miasma Armor to restore HP to all party members and attempt to remove their ailments.",
      stats: ["WIS"],
      dep: { miasmaArmor: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    take: {
      name: "Take",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    wiltingMiasma: {
      name: "Wilting Miasma",
      desc: "For a set number of turns, decreases all enemies' resistance to and rate of recovery from ailments.",
      stats: [],
      dep: { slowingMiasma: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    arrestingMiasma: {
      name: "Binding Miasma",
      desc: "For a set number of turns, decreases all enemies' resistance to and rate of recovery from binds.",
      stats: [],
      dep: { wiltingMiasma: 3 },
      maxLevel: 10,
      coords: { x: 3, y: 1.5 }
    },
    darknessReap: {
      name: "Darkness Reap",
      desc: "Deals melee cut damage to one row. If Miasma Armor is active, attempts to inflict blind.",
      stats: ["STR", "LUC"],
      dep: { toxicReap: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    chaosReap: {
      name: "Chaos Reap",
      desc: "Deals melee cut damage to one row. If Miasma Armor is active, attempts to inflict panic.",
      stats: ["STR", "LUC"],
      dep: { darknessReap: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 3 }
    },
    blackShroud: {
      name: "Black Shroud",
      desc: "During Miasma Armor, increases defense.",
      stats: [],
      dep: { endlessShroud: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    soulTransfer: {
      name: "Soul Transfer",
      desc: "Requires Miasma Armor. Removes Miasma Armor to attempt to revive all party members.",
      stats: ["WIS"],
      dep: { atonement: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    blackWave: {
      name: "Black Wave",
      desc: "At the end of the turn, if Miasma Armor is active, restores TP to the user.",
      stats: [],
      dep: { soulTransfer: 1 },
      maxLevel: 4,
      coords: { x: 3, y: 5 }
    },
    spiritAbsorb: {
      name: "Spirit Absorb",
      desc: "When the user uses a debuff skill, restores HP to the user. This restoration can heal beyond maximum HP. Overhealed HP will disappear at the end of the turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    statusAtkUp: {
      name: "Status ATK Up",
      desc: "Increases the chance of inflicting binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    deathsAsylum: {
      name: "Death Tolerance",
      desc: "Provides a chance to nullify debuffs and ailments on the user as they are inflicted.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    ephemeralReap: {
      name: "Ephemeral Reap",
      desc: "Deals multiple instances of melee cut damage to one target. Number of hits increases based on the number of debuffs on the target.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    fatalReap: {
      name: "Fatal Reap",
      desc: "Deals melee cut damage to one target. Attempts to inflict instant death.",
      stats: ["STR", "LUC"],
      dep: { chaosReap: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    miasmaWall: {
      name: "Miasma Wall",
      desc: "Requires Miasma Armor. Removes Miasma Armor to attempt to nullify binds and ailments against all party members, up to a set number of times.",
      stats: [],
      dep: { blackWave: 1 },
      maxLevel: 6,
      coords: { x: 4, y: 4.5 }
    },
    soulFixation: {
      name: "Spirit Barrier",
      desc: "Requires Miasma Armor. Removes Miasma Armor to attempt to nullify instant death, stun and debuffs against all party members, up to a set number of times.",
      stats: [],
      dep: { blackWave: 1 },
      maxLevel: 6,
      coords: { x: 4, y: 5.5 }
    },
    residualMiasma: {
      name: "Enduring Armor",
      desc: "Skills which remove Miasma Armor will instead reduce its duration by a set number of turns. If Miasma Armor's duration reaches 0 or less, it is removed.",
      stats: [],
      dep: { miasmaWall: 2, soulFixation: 2 },
      maxLevel: 4,
      coords: { x: 5, y: 5 }
    }
  }
};


export default skills;
