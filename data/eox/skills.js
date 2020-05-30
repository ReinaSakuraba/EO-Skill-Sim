let skills = {
  Hero: {
    braveheart: {
      name_en: "Brave Heart",
      name_jp: "ブレイブハート",
      desc: "For 3 turns, increases the chance of afterimage creation and all afterimage damage. The damage boost only applies while Force Boost is active.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    miracleEdge: {
      name_en: "Miracle Edge",
      name_jp: "ミラクルエッジ",
      desc: "Deals melee cut damage to all enemies, and restores HP to all party members. This can restore HP over maximum HP. The overhealed amount is removed at the end of the turn.",
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { braveheart: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    afterimage: {
      name_en: "Afterimage",
      name_jp: "残影",
      desc: "When the user (or an afterimage) attacks with a skill, there's a chance to create an afterimage in an empty slot. The afterimage will attack with the same skill on the next turn, and vanish at the end of that turn. Does not activate for chases or counterattacks.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    mirageSword: {
      name_en: "Mirage Sword",
      name_jp: "ミラージュソード",
      desc: "Deals ranged cut damage to one target. Has a high chance to create an afterimage.",
      stats: ["STR"],
      dep: { afterimage: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    braveWide: {
      name_en: "Wide Bravery",
      name_jp: "ブレイブワイド",
      desc: "Deals strong melee cut damage to one target. If this skill goes off before the target acts, including if the target could not act due to a bind or ailment, its range is extended to melee cut damage to all enemies.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    freezingSlash: {
      name_en: "Frigid Slash",
      name_jp: "凍砕斬",
      desc: "Deals melee cut+ice damage to one target, with splash damage.",
      stats: ["STR"],
      dep: { braveWide: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    encouragement: {
      name_en: "Encourage",
      name_jp: "鼓舞",
      desc: "When the user attacks with a skill, restores HP to all party members. HP restored is based on the user's max HP. Does not activate for links, chases or counterattacks.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    herosBonds: {
      name_en: "Heroic Bonds",
      name_jp: "勇者の絆",
      desc: "When all party members' HP is above a set percentage, increases the user's attack and action speed.",
      stats: [],
      dep: { encouragement: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    shieldArts: {
      name_en: "Physical Shield",
      name_jp: "シールドアーツ",
      desc: "Deals melee bash damage to one target. It has a low action speed, but increases physical defense for all allies until it executes. Damage is based on the user's shield's DEF.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    clearMind: {
      name_en: "Clear Mind",
      name_jp: "心頭滅却",
      desc: "Removes binds and ailments and restores TP to the user. Cannot be used if the user has no ailment or binds, and will not restores TP if they were cured prior to this skill being used.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 5 }
    },
    chop: {
      name_en: "Chop",
      name_jp: "伐採",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    shadowCharge: {
      name_en: "Charge Image",
      name_jp: "シャドウチャージ",
      desc: "Removes all afterimages. Until the end of the next turn, increases the user's attack and chance of creating afterimages. Number of afterimages consumed will not affect this skill's effect.",
      stats: [],
      dep: { mirageSword: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    shadowBenefit: {
      name_en: "Graceful Image",
      name_jp: "恵影",
      desc: "When the user uses a skill while an afterimage is present, refunds a percentage of the TP used for the skill to the user.",
      stats: [],
      dep: { shadowCharge: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    shockSpark: {
      name_en: "Shock Spark",
      name_jp: "ショックスパーク",
      desc: "Deals melee cut damage to one target, and follows up with ranged volt damage to all enemies. The higher the target's cut resistance is, the higher the volt damage will be.",
      stats: ["STR"],
      dep: { freezingSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    burstBlade: {
      name_en: "Burst Blade",
      name_jp: "バーストブレイド",
      desc: "Deals multiple instances of melee cut damage to one target. Number of attacks is a random number between 2, and 3 plus the number of enemies present.",
      stats: ["STR"],
      dep: { shockSpark: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    herosProof: {
      name_en: "Heroic Steel",
      name_jp: "勇者の証",
      desc: "When all party members' HP is below a set percentage, increases the user's defense and chance of being targeted.",
      stats: [],
      dep: { herosBonds: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    greatCourage: {
      name_en: "Great Bravery",
      name_jp: "大勇",
      desc: "When an ally whose HP is below a set percentage is attacked, the user has a chance to cover that ally. This skill will prioritize the user's afterimage.",
      stats: [],
      dep: { herosProof: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    shieldMateria: {
      name_en: "Elemental Shield",
      name_jp: "シールドマテリア",
      desc: "Deals melee bash damage to one target. It has a low action speed, but increases elemental defense for all allies until it executes. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldArts: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 4 }
    },
    fervor: {
      name_en: "Fervor",
      name_jp: "気負い",
      desc: "Transfers binds and ailments on allies in the user's row to the user, and restores Force to the user. If no binds or ailments are transferred, Force will not increase.",
      stats: [],
      dep: { clearMind: 1 },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    newChallenger: {
      name_en: "New Challenger",
      name_jp: "新たな強敵",
      desc: "Immediately enters battle with an increased chance of encountering rare breeds, and a chance of entering consecutive battles. Fails if the current location has no encounters.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    thickShadow: {
      name_en: "Dark Image",
      name_jp: "濃影",
      desc: "Afterimages have a chance of not disappearing at the end of the turn.",
      stats: [],
      dep: { shadowBenefit: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    actBreaker: {
      name_en: "Act Breaker",
      name_jp: "アクトブレイカー",
      desc: "Deals melee cut damage to one target. Attempts to inflict stun on the target. The higher the target's HP is, the higher the chance of stun is.",
      stats: ["STR", "LUC"],
      dep: { burstBlade: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    regimentRave: {
      name_en: "Regiment Rave",
      name_jp: "レジメントレイブ",
      desc: "At the end of the turn, deals melee cut+fire damage to one target. Adds 40% of all damage dealt to the target this turn by all party members to this attack's damage, up to a set limit.",
      stats: ["STR"],
      dep: { actBreaker: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 2 }
    },
    forceGifter: {
      name_en: "Force Gift",
      name_jp: "フォースギフター",
      desc: "Deals melee cut damage to one target. Increases Force for allies on the user's row instead of the user.",
      stats: ["STR"],
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    forceSaver: {
      name_en: "Retain Force",
      name_jp: "フォースセイブ",
      desc: "When the user's Force Boost times out, restores some Force to the user.",
      stats: [],
      dep: { forceGifter: 3 },
      maxLevel: 4,
      coords: { x: 5, y: 3 }
    },
    guardRush: {
      name_en: "Guard Rush",
      name_jp: "ガードラッシュ",
      desc: "Reduces all damage to all party members for one turn, and deals melee bash damage to one target at the end of the turn. If the attack hits, this skill cannot be used again for a set number of turns. Damage is based on the user's shield's DEF, and the number of times damage is reduced. If no damage reduction took place, the attack will not happen.",
      stats: ["STR"],
      dep: { shieldMateria: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    }
  },
  Protector: {
    shieldProtect: {
      name_en: "Shield Protect",
      name_jp: "大盾の守護",
      desc: "For 3 turns, increases damage reduction from shield skills.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    perfectDefense: {
      name_en: "Painless",
      name_jp: "完全防御",
      desc: "This turn, completely negates all damaging attacks against the party.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { shieldProtect: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    frontGuard: {
      name_en: "Front Guard",
      name_jp: "フロントガード",
      desc: "Reduces physical damage to the front row for one turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1 }
    },
    backGuard: {
      name_en: "Rear Guard",
      name_jp: "バッグガード",
      desc: "Reduces physical damage to the back row for one turn.",
      stats: [],
      dep: { frontGuard: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 1 }
    },
    cellDivide: {
      name_en: "Ally Shield",
      name_jp: "セルディバイド",
      desc: "Covers one ally for one turn.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    fortify: {
      name_en: "Fortify",
      name_jp: "渾身ディフェンス",
      desc: "Increases the user's defense for a set number of turns.",
      stats: [],
      dep: { cellDivide: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    shieldSmite: {
      name_en: "Shield Smite",
      name_jp: "シールドスマイト",
      desc: "Deals melee bash damage to one target. Attempts to inflict arm bind. Damage is based on the user's shield's DEF.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 3 }
    },
    provoke: {
      name_en: "Taunt",
      name_jp: "挑発",
      desc: "Increases the user's defense and chance of being targeted for a set number of turns.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    preProvoke: {
      name_en: "Preemptive Taunt",
      name_jp: "先制挑発",
      desc: "If Provoke is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { provoke: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    healingWall: {
      name_en: "Healing Wall",
      name_jp: "ヒールウォール",
      desc: "When the user defends, restores HP to allies on the user's row.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name_en: "Chop",
      name_jp: "伐採",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    recoveryGuard: {
      name_en: "Recovery Guard",
      name_jp: "リカバリーガード",
      desc: "Removes binds from one row, and reduces physical damage to that row for one turn.",
      stats: [],
      dep: { backGuard: 1 },
      maxLevel: 4,
      coords: { x: 2, y: 1 }
    },
    aegis: {
      name_en: "Aegis",
      name_jp: "決死の覚悟",
      desc: "There is a chance for the user to survive fatal damage at 1 HP. Can activate once per battle at most.",
      stats: [],
      dep: { fortify: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    shieldRush: {
      name_en: "Shield Bash",
      name_jp: "シールドラッシュ",
      desc: "Deals melee bash damage to all enemies, and reduces their physical attack for 3 turns. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldSmite: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    keepGuard: {
      name_en: "Keep Guard",
      name_jp: "キープガード",
      desc: "Reduces all damage to one ally until the end of the next turn, and disables all Guard skills until then.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    physDefUp: {
      name_en: "Phys DEF Up",
      name_jp: "物理防御ブースト",
      desc: "Increases physical defense.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    elemDefUp: {
      name_en: "Elem DEF Up",
      name_jp: "属性防御ブースト",
      desc: "Increases elemental defense.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    fireWall: {
      name_en: "Fire Wall",
      name_jp: "ファイアガード",
      desc: "Reduces one instance of fire damage against all party members. Higher levels upgrade reduction to null, then absorb.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    iceWall: {
      name_en: "Ice Wall",
      name_jp: "フリーズガード",
      desc: "Reduces one instance of ice damage against all party members. Higher levels upgrade reduction to null, then absorb.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    voltWall: {
      name_en: "Volt Wall",
      name_jp: "ショックガード",
      desc: "Reduces one instance of volt damage against all party members. Higher levels upgrade reduction to null, then absorb.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    hpUp: {
      name_en: "HP Up",
      name_jp: "ＨＰブースト",
      desc: "Increases maximum HP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 0 }
    },
    healGuard: {
      name_en: "Heal Guard",
      name_jp: "ヒールガード",
      desc: "Restores HP for one row, and reduces physical damage to that row for one turn.",
      stats: ["WIS"],
      dep: { recoveryGuard: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    lineDivide: {
      name_en: "Line Shield",
      name_jp: "ラインディバイド",
      desc: "Covers one row for one turn.",
      stats: [],
      dep: { aegis: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    autoguard: {
      name_en: "En Garde",
      name_jp: "オートガード",
      desc: "When the user is attacked, there is a chance to automatically reduce the damage.",
      stats: [],
      dep: { lineDivide: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 2 }
    },
    shieldFlare: {
      name_en: "Shield Flare",
      name_jp: "シールドフレア",
      desc: "Until the end of the next turn, when the user is attacked, they will counterattack with ranged fire damage. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldRush: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    fullGuard: {
      name_en: "Full Guard",
      name_jp: "フルガード",
      desc: "Reduces all damage to all party members for one turn. Cannot be used again for a set number of turns.",
      stats: [],
      dep: { fireWall: 2, iceWall: 2, voltWall: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 5 }
    }
  },
  Medic: {
    steadyHands: {
      name_en: "Intensive Care",
      name_jp: "集中治療",
      desc: "For 3 turns, increases the action speed of all actions, and the healing power of healing skills (including items). The TP cost of healing skills is halved.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    medicalMiracle: {
      name_en: "Healing Touch",
      name_jp: "超医術",
      desc: "Revives and removes ailments, binds and debuffs from all party members, and restores their HP.",
      stats: ["WIS"],
      unique: true,
      type: "Break",
      dep: { steadyHands: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    healing: {
      name_en: "Healing",
      name_jp: "ヒーリング",
      desc: "Restores HP to one ally.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1.5 }
    },
    lineHeal: {
      name_en: "Line Heal",
      name_jp: "ラインヒール",
      desc: "Restores HP to one row.",
      stats: ["WIS"],
      dep: { healing: 3 },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    patchUp: {
      name_en: "Patch Up",
      name_jp: "戦後手当",
      desc: "Restores HP to all allies at the end of battle. Does not activate if the party flees.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    refresh: {
      name_en: "Refresh",
      name_jp: "リフレッシュ",
      desc: "Removes ailments from one ally. Higher level increases range to one row.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 3 }
    },
    antibodies: {
      name_en: "Antibodies",
      name_jp: "抗体",
      desc: "Increases the user's rate of recovery from binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    revive: {
      name_en: "Revive",
      name_jp: "リザレクション",
      desc: "Revives one ally.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    scavenge: {
      name_en: "Scavenge",
      name_jp: "博識",
      desc: "Increases item drop rate.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    headDrop: {
      name_en: "Head Bash",
      name_jp: "ヘッドドロップ",
      desc: "Deals melee bash damage to one target. Attempts to inflict head bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      name_jp: "採取",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    delayedHeal: {
      name_en: "Delayed Heal",
      name_jp: "ディレイヒール",
      desc: "Restores HP to all party members at the start of the next turn. Cannot be used on consecutive turns. Ineffective if the user dies before the skill activates.",
      stats: ["WIS"],
      dep: { lineHeal: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1.5 }
    },
    unbind: {
      name_en: "Unbind",
      name_jp: "バインドリカバリ",
      desc: "Removes binds from one ally. Higher levels increase range to one row.",
      stats: [],
      dep: { refresh: 2 },
      maxLevel: 4,
      coords: { x: 2, y: 3 }
    },
    groupTherapy: {
      name_en: "Group Therapy",
      name_jp: "一斉救護",
      desc: "For a set number of turns, increases the range of the user's healing skills, but decreases healing power and action speed.",
      stats: [],
      dep: { unbind: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    finalGift: {
      name_en: "Final Gift",
      name_jp: "最後の癒し",
      desc: "When the user dies, restores HP to all allies.",
      stats: ["WIS"],
      dep: { revive: 3 },
      maxLevel: 4,
      coords: { x: 2, y: 4 }
    },
    autoRevive: {
      name_en: "Auto-Revive",
      name_jp: "オートリザレクト",
      desc: "When an ally dies, there is a chance to automatically revive that ally.",
      stats: [],
      dep: { finalGift: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    starDrop: {
      name_en: "Star Drop",
      name_jp: "スタードロップ",
      desc: "Deals melee bash damage to one target. Reduces their physical defense for 3 turns.",
      stats: ["STR"],
      dep: { headDrop: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    medicalRod: {
      name_en: "Medical Rod",
      name_jp: "メディカルロッド",
      desc: "Deals melee bash damage to one target. Reduces their elemental defense for 3 turns.",
      stats: ["STR"],
      dep: { starDrop: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    patrol: {
      name_en: "Safe Passage",
      name_jp: "警戒斥候",
      desc: "For a set number of steps, nullifies damage tiles and muddy floors, and greatly reduces other sources of damage while exploring.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    elemDefUp: {
      name_en: "Elem DEF Up",
      name_jp: "属性防御ブースト",
      desc: "Increases elemental defense.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    partyHeal: {
      name_en: "Heal-All",
      name_jp: "エリアヒール",
      desc: "Restores HP to all party members.",
      stats: ["WIS"],
      dep: { delayedHeal: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    chaseHeal: {
      name_en: "Chase Heal",
      name_jp: "チェイスヒール",
      desc: "For one turn, automatically restores HP to allies when they are attacked for a set number of times. Every time this skill activates, its chance of activating decreases.",
      stats: ["WIS"],
      dep: { delayedHeal: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    overheal: {
      name_en: "Overheal",
      name_jp: "オーバーヒール",
      desc: "Medic skills in battle can restore HP over party members' maximum HP by a set percentage. The overhealed amount is removed at the end of turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    healDejaVu: {
      name_en: "Deja Vu",
      name_jp: "ヒールデジャヴ",
      desc: "For a set number of turns, at the end of each turn, all party members will receive again the effect of the last Medic active skill they received, provided that they received at least one Medic active skill while Heal Deja Vu is active.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    heavyStrike: {
      name_en: "Heavy Strike",
      name_jp: "ヘヴィストライク",
      desc: "Deals melee bash damage to one target.",
      stats: ["STR"],
      dep: { medicalRod: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 5 }
    },
    staffMastery: {
      name_en: "Staff Mastery",
      name_jp: "杖マスタリー",
      desc: "Increases physical attack and maximum TP when a staff is equipped.",
      stats: [],
      dep: { heavyStrike: 1 },
      maxLevel: 8,
      coords: { x: 5, y: 5 }
    }
  },
  Survivalist: {
    illusionStep: {
      name_en: "Illusory Formation",
      name_jp: "夢幻陣形",
      desc: "For 3 turns, increases all party members' action speed and evasion.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    mirageArrow: {
      name_en: "Mirage Arrow",
      name_jp: "ミラージュアロー",
      desc: "Deals ranged stab damage to one target. Decreases their accuracy and forces them to go last for 3 turns.",
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { illusionStep: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    powerShot: {
      name_en: "Power Shot",
      name_jp: "パワーショット",
      desc: "Deals ranged stab damage to one target, with line-piercing effects.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1.5 }
    },
    flameArrow: {
      name_en: "Flame Arrow",
      name_jp: "フレイムアロー",
      desc: "Deals ranged stab+fire damage to one target.",
      stats: ["STR"],
      dep: { powerShot: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1.5 }
    },
    blindArrow: {
      name_en: "Blind Arrow",
      name_jp: "ブラインドアロー",
      desc: "Deals ranged stab damage to one target. Attempts to inflict blind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    chainDance: {
      name_en: "Chain Dance",
      name_jp: "チェインダンス",
      desc: "For one turn, increases the user's evasion and chance of being targeted.",
      stats: [],
      dep: { blindArrow: 3 },
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    patrol: {
      name_en: "Safe Passage",
      name_jp: "警戒斥候",
      desc: "For a set number of steps, nullifies damage tiles and muddy floors, and greatly reduces other sources of damage while exploring.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    riskPerception: {
      name_en: "Risk Perception",
      name_jp: "危機感知",
      desc: "There is a set chance that blindsides will be negated.",
      stats: [],
      dep: { patrol: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    resuscitate: {
      name_en: "Resuscitate",
      name_jp: "簡易手当",
      desc: "Restores HP to one ally. Can only be used in the field. Higher levels allow this skill to revive the target as well.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    sortingSkill: {
      name_en: "Sorting Skill",
      name_jp: "整頓術",
      desc: "Increases inventory size.",
      stats: [],
      dep: { resuscitate: 3 },
      maxLevel: 10,
      coords: { x: 1, y: 5 }
    },
    naturalInstinct: {
      name_en: "Natural Instinct",
      name_jp: "野生の勘",
      desc: "Occasionally gains more items when using any gathering points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    flankShot: {
      name_en: "Flank Shot",
      name_jp: "フランクショット",
      desc: "Deals ranged stab damage to one row.",
      stats: ["STR"],
      dep: { flameArrow: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    finishingArrow: {
      name_en: "Finishing Shot",
      name_jp: "仕留めの一矢",
      desc: "When the user attacks a target whose HP is below a set threshold, the user follows up with their weapon. Does not activate for links, chases or counterattacks.",
      stats: ["STR"],
      dep: { flankShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    multiShot: {
      name_en: "Multi-Shot",
      name_jp: "ダブルショット",
      desc: "Deals 2 instances of ranged stab damage to one enemy.",
      stats: ["STR"],
      dep: { flameArrow: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    dropShot: {
      name_en: "Drop Shot",
      name_jp: "ドロップショット",
      desc: "Deals ranged stab damage to one target. Damage increases if the target is in the back row.",
      stats: ["STR"],
      dep: { multiShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    trickStep: {
      name_en: "Trickery",
      name_jp: "トリックステップ",
      desc: "For a set number of turns, reduces the accuracy of one row of enemies.",
      stats: [],
      dep: { chainDance: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    stalker: {
      name_en: "Cautious Steps",
      name_jp: "警戒歩行",
      desc: "For a set number of steps, reduces encounter rate.",
      stats: [],
      dep: { riskPerception: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    efficiency: {
      name_en: "Efficiency",
      name_jp: "エフィシエント",
      desc: "For 5 turns, increases the HP restored by Medica and upgrades used by the user, and extends their range to one row.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    speedUp: {
      name_en: "Speed Up",
      name_jp: "素早さブースト",
      desc: "Increases accuracy, evasion and action speed.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    swapStep: {
      name_en: "Quick Step",
      name_jp: "アザーズステップ",
      desc: "Selected ally acts first this turn.",
      stats: [],
      dep: { speedUp: 2 },
      maxLevel: 4,
      coords: { x: 3, y: 6 }
    },
    disablingShot: {
      name_en: "Disabling Shot",
      name_jp: "エイミングフット",
      desc: "When the user attacks with a bow skill, attempts to inflict leg bind.",
      stats: [],
      dep: { finishingArrow: 1 },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    sagittariusShot: {
      name_en: "Sagittarius Shot",
      name_jp: "サジタリウスの矢",
      desc: "On the third turn after using this skill, ranged stab damage is dealt to one target at the start of that turn. Attempts to inflict stun. Ineffective if the user dies before the skill activates.",
      stats: ["STR"],
      dep: { dropShot: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    hazyShot: {
      name_en: "Hazy Arrow",
      name_jp: "朧矢",
      desc: "Deals ranged stab damage to one target. Always hits. Can only be used if the user evaded an attack on the previous turn.",
      stats: ["STR"],
      dep: { trickStep: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    naturesBounty: {
      name_en: "Nature's Blessing",
      name_jp: "自然の恩恵",
      desc: "There is a chance to obtain extra rare items when gathering.",
      stats: [],
      dep: { stalker: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 4 }
    },
    scapegoat: {
      name_en: "Scapegoat",
      name_jp: "スケープゴート",
      desc: "Selected ally will cover all party members a set number of times this turn. Ineffective if that ally has leg bind.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    sneakAttack: {
      name_en: "Sneak Attack",
      name_jp: "奇襲",
      desc: "For a set number of steps, increases chance of preemptive attacks.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
    }
  },
  Ronin: {
    peerless: {
      name_en: "Musou",
      name_jp: "無双",
      desc: "For 3 turns, stance duration will not decrease, and stances cannot be removed. In addition, the user gains the effect of all stances.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    issen: {
      name_en: "Issen",
      name_jp: "一閃",
      desc: "Deals ranged cut damage to all enemies. Attempts to inflict instant death. Chance of instant death is increased against targets at low HP.",
      stats: ["STR", "LUC"],
      unique: true,
      type: "Break",
      dep: { peerless: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    upperStance: {
      name_en: "Upper Stance",
      name_jp: "上段の構え",
	  desc: "Increases attack when Upper Stance is active, and increases the duration of Upper Stance. At the start of each battle, the user automatically assumes the stance with the highest skill level.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    upwardSlash: {
      name_en: "Upward Slash",
      name_jp: "逆袈裟",
      desc: "Deals melee cut damage to one target. Assumes Upper Stance after use. Critical hit if used during Upper Stance.",
      stats: ["STR"],
      dep: { upperStance: 1 },
      maxLevel: 4,
      coords: { x: 1, y: 1 }
    },
    clearStance: {
      name_en: "Clear Stance",
      name_jp: "青眼の構え",
	  desc: "Increases defense and Ronin skills' infliction rate when Clear Stance is active, and increases the duration of Clear Stance. At the start of each battle, the user automatically assumes the stance with the highest skill level.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    chargingThrust: {
      name_en: "Charging Thrust",
      name_jp: "貫突",
      desc: "Deals melee stab damage to one target. Assumes Clear Stance after use. Critical hit if used during Clear Stance.",
      stats: ["STR"],
      dep: { clearStance: 1 },
      maxLevel: 4,
      coords: { x: 1, y: 2 }
    },
    drawingStance: {
      name_en: "Drawing Stance",
      name_jp: "居合の構え",
	  desc: "Increases accuracy, evasion and action speed when Drawing Stance is active, and increases the duration of Drawing Stance. At the start of each battle, the user automatically assumes the stance with the highest skill level.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    sheathStrike: {
      name_en: "Sheath Strike",
      name_jp: "鞘撃",
      desc: "Deals melee bash damage to one target. Assumes Drawing Stance after use. Critical hit if used during Drawing Stance.",
      stats: ["STR"],
      dep: { drawingStance: 1 },
      maxLevel: 4,
      coords: { x: 1, y: 3 }
    },
    airBlade: {
      name_en: "Air Blade",
      name_jp: "空刃",
      desc: "Deals ranged cut damage to one target. Critical hit if used during any stance.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    armStrike: {
      name_en: "Arm Strike",
      name_jp: "小手討ち",
      desc: "Deals melee stab damage to one target. Attempts to inflict arm bind. Critical hit if used during any stance.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    breath: {
      name_en: "Breath",
      name_jp: "息吹",
      desc: "Restores HP to the user and allies adjacent to the user.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    helmSplitter: {
      name_en: "Helm Splitter",
      name_jp: "兜割り ",
      desc: "Requires any stance. Deals melee cut damage to one target. Low accuracy, ignores cut resistance. Reduces stance duration by 2 after use. Critical hit if used during Upper Stance.",
      stats: ["STR"],
      dep: { upwardSlash: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    flameGrater: {
      name_en: "Flame Grater",
      name_jp: "卸し焔",
      desc: "Deals melee cut+fire damage to one target. Critical hit if used during Upper Stance.",
      stats: ["STR"],
      dep: { helmSplitter: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    hazeSlash: {
      name_en: "Haze Slash",
      name_jp: "霞斬り",
      desc: "Requires any stance. Deals melee cut damage to one target. Attempts to inflict sleep. Reduces stance duration by 2 after use. Critical hit if used during Clear Stance.",
      stats: ["STR", "LUC"],
      dep: { chargingThrust: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    lightningStab: {
      name_en: "Lightning Stab",
      name_jp: "雷耀突き",
      desc: "Deals melee stab+volt damage to one target. Critical hit if used during Clear Stance.",
      stats: ["STR"],
      dep: { hazeSlash: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    horizontalSlice: {
      name_en: "Horizontal Slice",
      name_jp: "横一文字",
      desc: "Requires any stance. Deals melee cut damage to one row. Reduces stance duration by 2 after use. Critical hit if used during Drawing Stance.",
      stats: ["STR"],
      dep: { sheathStrike: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    frigidSlash: {
      name_en: "Frigid Slash",
      name_jp: "抜刀氷雪",
      desc: "Deals melee cut+ice damage to one target. Critical hit if used during Drawing Stance.",
      stats: ["STR"],
      dep: { horizontalSlice: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    duel: {
      name_en: "Duel",
      name_jp: "果し合い",
      desc: "Increases damage when attacking enemies that the user attacked last turn.",
      stats: [],
      dep: { airBlade: 2, armStrike: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4.5 }
    },
    physAtkUp: {
      name_en: "Phys ATK Up",
      name_jp: "物理攻撃ブースト",
      desc: "Increases physical attack.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    swallowStrike: {
      name_en: "Swallow Strike",
      name_jp: "ツバメがえし",
      desc: "Requires any stance. Deals multiple instances of melee cut damage to one target. Removes stance after use, and disables skills on the next turn. Critical hit if used during Upper Stance.",
      stats: ["STR"],
      dep: { flameGrater: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    bluntingStab: {
      name_en: "Stone Thrust",
      name_jp: "鈍通し",
      desc: "Requires any stance. Deals melee stab damage to one target. Attempts to inflict petrify. Removes stance after use, and disables skills on the next turn. Critical hit if used during Clear Stance.",
      stats: ["STR", "LUC"],
      dep: { lightningStab: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    petalScatter: {
      name_en: "Petal Scatter",
      name_jp: "散華",
      desc: "Requires any stance. Deals ranged cut damage to all targets. Removes stance after use, and disables skills on the next turn. Critical hit if used during Drawing Stance. Deals less damage based on the number of targets.",
      stats: ["STR"],
      dep: { frigidSlash: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    proofOfMastery: {
      name_en: "Full Proficiency",
      name_jp: "免許皆伝",
      desc: "Increases the effect of all stances.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    },
    risingSpirit: {
      name_en: "Rouse Spirits",
      name_jp: "戦意高揚",
      desc: "At the end of the turn, if a stance is active, restores TP to the user.",
      stats: [],
      dep: { proofOfMastery: 2 },
      maxLevel: 4,
      coords: { x: 5, y: 4 }
    },
    speedUp: {
      name_en: "Speed Up",
      name_jp: "素早さブースト",
      desc: "Increases accuracy, evasion and action speed.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    }
  },
  "War Magus": {
    warEdgePower: {
      name_en: "War Edge Power",
      name_jp: "巫剣の力",
      desc: "For 3 turns, War Edge skills can activate additional effects even against targets without an ailment.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    fairyRobe: {
      name_en: "Fairy Robe",
      name_jp: "大巫術：精霊衣",
      desc: "Removes ailments and binds from all party members, and restores their HP. This turn, negates all binds, ailments, stun, instant death and debuffs against all party members.",
      stats: ["WIS"],
      unique: true,
      type: "Break",
      dep: { warEdgePower: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    warHeal: {
      name_en: "War Heal",
      name_jp: "巫術：再生",
      desc: "Restores HP to one ally at the start of the turn, then at the end of the turn.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1.5 }
    },
    warHealLine: {
      name_en: "War Heal Line",
      name_jp: "巫術：再生帯",
      desc: "Restores HP to one row at the start of the turn, then at the end of the turn.",
      stats: ["WIS"],
      dep: { warHeal: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    randomDisease: {
      name_en: "Random Disease",
      name_jp: "巫術：乱疫",
      desc: "Attempts to inflict one of poison, paralyze, blind, sleep or curse on one target.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3.5 }
    },
    strengthSlash: {
      name_en: "Strength Slash",
      name_jp: "巫剣：霊攻衰斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, decreases their attack for 7 turns.",
      stats: ["STR"],
      dep: { randomDisease: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    guardSlash: {
      name_en: "Guard Slash",
      name_jp: "巫剣：霊防衰斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, decreases their defense for 7 turns.",
      stats: ["STR"],
      dep: { randomDisease: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    displace: {
      name_en: "Displace",
      name_jp: "巫術：転移",
      desc: "Removes ailments and binds from one ally, and attempts to inflict them on one enemy.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    vampire: {
      name_en: "Vampire",
      name_jp: "吸命",
      desc: "When the user deals damage to an enemy with an ailment, restores HP to the user's row. Can only activate once per turn.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      name_jp: "採取",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    warEdgeMastery: {
      name_en: "War Edge Mastery",
      name_jp: "巫剣マスタリー",
      desc: "User can use sword skills with staff. Increases maximum TP when a sword is equipped; increases damage when a staff is equipped.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    warRevive: {
      name_en: "War Revive",
      name_jp: "巫術：反魂",
      desc: "Revives one ally at the start of the turn, then attempts to revive them again at the end of the turn.",
      stats: [],
      dep: { warHealLine: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    artery: {
      name_en: "Artery",
      name_jp: "巫術：脈動",
      desc: "For 3 turns, automatically restores HP for all party members when they act, once per turn.",
      stats: ["WIS"],
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    warResponse: {
      name_en: "War Response",
      name_jp: "巫術：呼応",
      desc: "For 3 turns, automatically restores HP for all party members when the debuffed enemy acts, once per turn.",
      stats: ["WIS"],
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 2 }
    },
    headcut: {
      name_en: "Headcut",
      name_jp: "巫剣：霊封頭斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict head bind.",
      stats: ["STR", "LUC"],
      dep: { strengthSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    armcut: {
      name_en: "Armcut",
      name_jp: "巫剣：霊封腕斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict arm bind.",
      stats: ["STR", "LUC"],
      dep: { guardSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    legcut: {
      name_en: "Legcut",
      name_jp: "巫剣：霊封脚斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict leg bind.",
      stats: ["STR", "LUC"],
      dep: { headcut: 2, armcut: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3.5 }
    },
    rouse: {
      name_en: "Rouse",
      name_jp: "奮起",
      desc: "Increases the user's Force gain based on the number of enemies with binds.",
      stats: [],
      dep: { vampire: 2 },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    hpUp: {
      name_en: "HP Up",
      name_jp: "ＨＰブースト",
      desc: "Increases maximum HP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    statusDefUp: {
      name_en: "Status DEF Up",
      name_jp: "抑制防御ブースト",
      desc: "Decreases the chance of being inflicted with binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    warHealAll: {
      name_en: "War Heal All",
      name_jp: "巫術：再生陣",
      desc: "Restores HP to all party members at the start of the turn, then at the end of the turn.",
      stats: ["WIS"],
      dep: { artery: 2, warResponse: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 1.5 }
    },
    barrier: {
      name_en: "Barrier",
      name_jp: "巫術：結界",
      desc: "For one turn, there is a chance to nullify binds, ailments and debuffs against all party members, up to a set number of times.",
      stats: [],
      dep: { warHealAll: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 1.5 }
    },
    ailingSlash: {
      name_en: "Ailing Slash",
      name_jp: "巫剣：霊攻大斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, increases damage dealt.",
      stats: ["STR"],
      dep: { legcut: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3.5 }
    },
    spiritDrain: {
      name_en: "Mind Drain",
      name_jp: "吸気",
      desc: "When the user deals damage to an enemy with both an ailment and a bind, restores TP to the user's row. Can only activate once per turn.",
      stats: ["WIS"],
      dep: { rouse: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    plague: {
      name_en: "Epidemic",
      name_jp: "発疫",
      desc: "User's normal attack attempts to inflict poison, paralyze, blind, sleep and curse.",
      stats: ["LUC"],
      dep: { spiritDrain: 3 },
      maxLevel: 4,
      coords: { x: 5, y: 5 }
    },
    physAtkUp: {
      name_en: "Phys ATK Up",
      name_jp: "物理攻撃ブースト",
      desc: "Increases physical attack.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    }
  },
  Highlander: {
    heroBattle: {
      name_en: "Hero Battle",
      name_jp: "英雄の戦い",
      desc: "For 3 turns, spear skills will have increased power, and restore HP to all party members based on damage dealt. Spear skills that activate instant death will still restore HP based on the damage that would have been dealt.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    gaeBolg: {
      name_en: "Gae Bolg",
      name_jp: "ゲイボルグ",
      desc: "Deals ranged stab damage to all enemies, and restores TP to the user based on damage dealt.",
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { heroBattle: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    longThrust: {
      name_en: "Long Thrust",
      name_jp: "ロングスラスト",
      desc: "Deals ranged stab damage to one target.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    spearAssist: {
      name_en: "Spear Assist",
      name_jp: "スピアインボルブ",
      desc: "Deals melee stab damage to one target at the end of the turn. If an elemental attack was used by an ally beforehand, that element is added to the attack and its damage is increased. If more than one elemental attack was used, the most recent element applies.",
      stats: ["STR"],
      dep: { longThrust: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    turningTide: {
      name_en: "Turning Tide",
      name_jp: "ハーベスト",
      desc: "When the user defeats an enemy, restores HP to all party members.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 2.5 }
    },
    drainingThrust: {
      name_en: "Draining Thrust",
      name_jp: "シングルスラスト",
      desc: "Consumes the user's HP to deal melee stab damage to the enemy front row.",
      stats: ["STR"],
      dep: { turningTide: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    legionThrust: {
      name_en: "Legion Thrust",
      name_jp: "レギオンスラスト",
      desc: "Consumes the HP of all allies other than the user to deal melee stab damage to the enemy front row.",
      stats: ["STR"],
      dep: { turningTide: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    spiritShield: {
      name_en: "Spirit Shield",
      name_jp: "不可視の霊盾",
      desc: "Consumes the user's HP to increase the elemental defense of one row for a set number of turns.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    bloodVeil: {
      name_en: "Bloody Veil",
      name_jp: "ブラッドベール",
      desc: "When the user loses HP, increases defense until the end of the turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    hpUp: {
      name_en: "HP Up",
      name_jp: "ＨＰブースト",
      desc: "Increases maximum HP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    headPierce: {
      name_en: "Head Pierce",
      name_jp: "ブレインレンド",
      desc: "Deals melee stab damage to one target. Attempts to inflict head bind and instant death.",
      stats: ["STR", "LUC"],
      dep: { spearAssist: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    drainingBurst: {
      name_en: "Draining Burst",
      name_jp: "シングルバースト",
      desc: "Consumes the user's HP to deal melee stab damage to all enemies.",
      stats: ["STR"],
      dep: { drainingThrust: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    delayedCharge: {
      name_en: "Delayed Charge",
      name_jp: "ディレイチャージ",
      desc: "Consumes the user's HP to deal ranged stab damage to one target at the end of a set number of turns after. Damage is increased based on the number of turns passed before its activation. Ineffective if the user dies before the skill activates.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 3, y: 2 }
    },
    legionBurst: {
      name_en: "Legion Burst",
      name_jp: "レギオンバースト",
      desc: "Consumes the HP of all allies other than the user to deal melee stab damage to all enemies.",
      stats: ["STR"],
      dep: { legionThrust: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    bloodFortune: {
      name_en: "Blood Fortune",
      name_jp: "グッドラック",
      desc: "Consumes all party members' HP to increase their infliction rate of binds and ailments for a set number of turns.",
      stats: [],
      dep: { spiritShield: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    battleInstincts: {
      name_en: "Battle Instinct",
      name_jp: "防衛本能",
      desc: "At the start of battle, there is a chance to cast a buff on all party members that negates ailments once for 3 turns. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { bloodFortune: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    bloodyOffense: {
      name_en: "Bloody Offense",
      name_jp: "ブラッドウェポン",
      desc: "For a set number of turns, one row of allies will have increased attack, but lose HP every time they act.",
      stats: [],
      dep: { bloodVeil: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    bloodlust: {
      name_en: "Bloodlust",
      name_jp: "血の暴走",
      desc: "When the user loses HP, there is a chance that they will automatically attack with their weapon.",
      stats: [],
      dep: { bloodyOffense: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 5 }
    },
    physDefUp: {
      name_en: "Phys DEF Up",
      name_jp: "物理防御ブースト",
      desc: "Increases physical defense.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    spearReversal: {
      name_en: "Spear Reversal",
      name_jp: "スピアリバーサル",
      desc: "Deals melee stab damage to one target. Damage is increased if the target has higher percentage of HP remaining than the user.",
      stats: ["STR"],
      dep: { headPierce: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    crossCharge: {
      name_en: "Cross Charge",
      name_jp: "クロスチャージ",
      desc: "Consumes the user's HP to deal melee stab damage to one target. If currently charging for Delayed Charge, activates it and increases Cross Charge's damage.",
      stats: ["STR"],
      dep: { delayedCharge: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    legionCharge: {
      name_en: "Legion Charge",
      name_jp: "レギオンチャージ",
      desc: "Consumes the HP of all allies other than the user to deal melee stab damage to one target.",
      stats: ["STR"],
      dep: { legionBurst: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 3 }
    },
    alliedBonds: {
      name_en: "Allied Bonds",
      name_jp: "絆の恩恵",
      desc: "If the user's skill consumed the HP of allies on the user's row, restores their TP at the end of the turn.",
      stats: [],
      dep: { legionCharge: 2 },
      maxLevel: 4,
      coords: { x: 5, y: 3 }
    },
    blackSabbath: {
      name_en: "Black Sabbath",
      name_jp: "ブラックサバス",
      desc: "Deals ranged almighty damage to all enemies, and restores all party members' HP based on damage dealt.",
      stats: ["STR"],
      dep: { bloodlust: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    physAtkUp: {
      name_en: "Phys ATK Up",
      name_jp: "物理攻撃ブースト",
      desc: "Increases physical attack.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    }
  },
  Gunner: {
    actionBoost: {
      name_en: "Double Action",
      name_jp: "アクトブースト",
      desc: "For 3 turns, all gun skills will activate twice. The second activation will have reduced power, but no TP cost.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    supremeBolt: {
      name_en: "Riot Gun",
      name_jp: "至高の魔弾",
      desc: "Deals ranged stab damage to one target. Attempts to stun the target with a high chance of success.",
      stats: ["STR", "LUC"],
      unique: true,
      type: "Break",
      dep: { actionBoost: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    rapidFire: {
      name_en: "Rapid Fire",
      name_jp: "ラピッドファイア",
      desc: "Deals 3 instances of ranged stab damage to one target. Low accuracy.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    spreadShot: {
      name_en: "Splash Shot",
      name_jp: "拡散弾",
      desc: "Deals ranged stab damage to one target, with splash damage.",
      stats: ["STR"],
      dep: { rapidFire: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    legSnipe: {
      name_en: "Leg Snipe",
      name_jp: "レッグスナイプ",
      desc: "Deals ranged stab damage to one target. Always hits. Attempts to inflict leg bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 2 }
    },
    armSnipe: {
      name_en: "Arm Snipe",
      name_jp: "アームスナイプ",
      desc: "Deals ranged stab damage to one target. Always hits. Attempts to inflict arm bind.",
      stats: ["STR", "LUC"],
      dep: { legSnipe: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    coverFire: {
      name_en: "Cover Support",
      name_jp: "後方支援",
      desc: "When the user defends while in the back row, restores HP to the front row.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    shellShock: {
      name_en: "Shell Shock",
      name_jp: "後方撹乱",
      desc: "For one turn, reduces attack, defense, accuracy and evasion for enemies in the back row, and attempts to inflict stun on them.",
      stats: ["LUC"],
      dep: { coverFire: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    medicBullet: {
      name_en: "Medic Bullet",
      name_jp: "ドラッグバレット",
      desc: "Restores HP and removes ailments from one ally.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    popFlares: {
      name_en: "Pop Flare",
      name_jp: "照明弾",
      desc: "For 3 turns, increases accuracy for all allies.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    leadingShot: {
      name_en: "Feint Shot",
      name_jp: "陽動射撃",
      desc: "Deals ranged stab damage to one row, and reduces their evasion.",
      stats: ["STR"],
      dep: { spreadShot: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    wildShot: {
      name_en: "Scattershot",
      name_jp: "掃射",
      desc: "Deals ranged stab damage to all enemies.",
      stats: ["STR"],
      dep: { leadingShot: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    headSnipe: {
      name_en: "Head Snipe",
      name_jp: "ヘッドスナイプ",
      desc: "Deals ranged stab damage to one target. Always hits. Attempts to inflict head bind.",
      stats: ["STR", "LUC"],
      dep: { armSnipe: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    actQuick: {
      name_en: "Act Quick",
      name_jp: "クイックアクト",
      desc: "Until the end of the next turn, reduces TP usage and increases action speed.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 3 }
    },
    chargedShot: {
      name_en: "Charged Shot",
      name_jp: "チャージショット",
      desc: "Deals ranged stab damage to one target. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { actQuick: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    preemptiveShell: {
      name_en: "Preemptive Fire",
      name_jp: "先制撹乱",
      desc: "If Shell Shock is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { shellShock: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    autoFlare: {
      name_en: "Preemptive Flare",
      name_jp: "先制照明弾",
      desc: "If Pop Flares is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { popFlares: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    penetrator: {
      name_en: "Penetrator",
      name_jp: "ペネトレイター",
      desc: "When attacking a single target, there is a chance that line-piercing effects will be added. Does not activate for skills with multiple instances of damage.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    tpUp: {
      name_en: "TP Up",
      name_jp: "ＴＰブースト",
      desc: "Increases maximum TP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    ricochet: {
      name_en: "Ricochet",
      name_jp: "跳弾",
      desc: "Deals multiple instances of ranged stab damage to random targets. Low accuracy. Higher level increases the number of attacks.",
      stats: ["STR"],
      dep: { wildShot: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    chargedFire: {
      name_en: "Charged Fire",
      name_jp: "チャージフレイム",
      desc: "Deals ranged stab+fire damage to one target. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { chargedShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    chargedIce: {
      name_en: "Charged Ice",
      name_jp: "チャージアイス",
      desc: "Deals ranged stab+ice damage to one target. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { chargedShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    chargedVolt: {
      name_en: "Charged Volt",
      name_jp: "チャージサンダー",
      desc: "Deals ranged stab+volt damage to one target. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { chargedShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 4 }
    },
    physAtkUp: {
      name_en: "Phys ATK Up",
      name_jp: "物理攻撃ブースト",
      desc: "Increases physical attack.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    doubleAction: {
      name_en: "Multi-Shot",
      name_jp: "ダブルアクション",
      desc: "Attack skills have a chance of activating twice. Does not activate for links, chases and counterattacks.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    }
  },
  Sovereign: {
    victoryVow: {
      name_en: "Victory Vow",
      name_jp: "勝利への誓い",
      desc: "For 3 turns, increases Order skills' range to all party members, and reduces their TP cost by half.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    proofOfNobility: {
      name_en: "Proof of Nobility",
      name_jp: "高潔の証",
      desc: "This turn, buffs on all allies cannot be removed, and buffs that enhance attack, defense, infliction chance, ailment and binds resistance, healing, accuracy and evasion are doubled in strength.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { victoryVow: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    attackOrder: {
      name_en: "Attack Order",
      name_jp: "攻撃の号令",
      desc: "For a set number of turns, increases attack for one row.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    fireArms: {
      name_en: "Fire Arms",
      name_jp: "ファイアアームズ",
      desc: "For a set number of turns, imbues one row of allies' weapons with fire, and increases their fire-elemental attack.",
      stats: [],
      dep: { attackOrder: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    freezeArms: {
      name_en: "Freeze Arms",
      name_jp: "フリーズアームズ",
      desc: "For a set number of turns, imbues one row of allies' weapons with ice, and increases their ice-elemental attack.",
      stats: [],
      dep: { attackOrder: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    shockArms: {
      name_en: "Shock Arms",
      name_jp: "ショックアームズ",
      desc: "For a set number of turns, imbues one row of allies' weapons with volt, and increases their volt-elemental attack.",
      stats: [],
      dep: { attackOrder: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    guardOrder: {
      name_en: "Guard Order",
      name_jp: "防御の号令",
      desc: "For a set number of turns, increases defense for one row.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    reinforce: {
      name_en: "Reinforce",
      name_jp: "リインフォース",
      desc: "When the user casts a buff, restores HP to all affected allies.",
      stats: ["WIS"],
      dep: { guardOrder: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    royalVeil: {
      name_en: "Royal Veil",
      name_jp: "ロイヤルベール",
      desc: "At the end of the turn, if the user's HP is full, restores HP to all party members. Only one instance of this skill can activate per turn.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    monarchMarch: {
      name_en: "Monarch March",
      name_jp: "キングスマーチ",
      desc: "During exploration, restores HP to all allies for every 3 steps taken.",
      stats: [],
      dep: { royalVeil: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      name_jp: "採取",
      desc: "Occasionally gains more items when using Take points.",
      unique: true,
      stats: [],
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    negotiation: {
      name_en: "Negotiation",
      name_jp: "エクスチェンジ",
      desc: "Removes the oldest buff and debuff from one ally, and restores HP and TP to them based on the number of removals.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    majesty: {
      name_en: "Royal Dignity",
      name_jp: "王の威厳",
      desc: "Once per turn, when the user is damaged while having a buff active, their HP is restored.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 0 }
    },
    royalLineage: {
      name_en: "Royal Lineage",
      name_jp: "王家の血統",
      desc: "When the user is buffed, their TP is restored. Does not activate if the buff negated a debuff.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 0 }
    },
    elementalBombI: {
      name_en: "Element Bomb I",
      name_jp: "エレメントボムⅠ",
      desc: "Removes elemental imbue from one ally to deal ranged damage of that element to all enemies.",
      stats: ["INT"],
      dep: { fireArms: 1, freezeArms: 1, shockArms: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    rallyOrder: {
      name_en: "Rally Order",
      name_jp: "覇気の号令",
      desc: "For a set number of turns, increases maximum HP for one row.",
      stats: [],
      dep: { reinforce: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3.5 }
    },
    protectOrder: {
      name_en: "Protect Order",
      name_jp: "庇護の号令",
      desc: "For a set number of turns, restores HP at the end of each turn for one row of allies.",
      stats: ["WIS"],
      dep: { reinforce: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4.5 }
    },
    preventOrder: {
      name_en: "Prevent Order",
      name_jp: "予防の号令",
      desc: "For a set number of turns, one row of allies may negate binds or ailments once.",
      stats: [],
      dep: { rallyOrder: 2, protectOrder: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    pairOrder: {
      name_en: "Tactical Decree",
      name_jp: "ペアオーダー",
      desc: "This turn, allies with buffs will restore TP based on damage taken when they are attacked.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    healOrder: {
      name_en: "Healing Decree",
      name_jp: "ヒールオーダー",
      desc: "This turn, allies with buffs will restore HP based on damage dealt when they attack. Attacks that activate instant death will still restore HP based on the damage that would have dealt.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    statusDefUp: {
      name_en: "Status DEF Up",
      name_jp: "抑制防御ブースト",
      desc: "Decreases the chance of being inflicted with binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 0 }
    },
    elementalBombII: {
      name_en: "Element Bomb II",
      name_jp: "エレメントボムⅡ",
      desc: "Removes elemental imbue from one ally to deal 3 instances of ranged damage of that element to random enemies.",
      stats: ["INT"],
      dep: { elementalBombI: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    clearance: {
      name_en: "Clearance",
      name_jp: "クリアランス",
      desc: "Removes all buffs and debuffs from all allies and enemies, and restores HP and TP to all allies based on the number of removals.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 3 }
    },
    dauntlessOrder: {
      name_en: "Dauntless Order",
      name_jp: "不屈の号令",
      desc: "For a set number of turns, one row of allies may endure fatal damage once with a set amount of HP.",
      stats: [],
      dep: { preventOrder: 1 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    lastOrder: {
      name_en: "Final Decree",
      name_jp: "ラストオーダー",
      desc: "Removes all buffs from self to increase attack and defense for all allies this turn. Can only be used if the user has 3 buffs.",
      stats: [],
      dep: { pairOrder: 2, healOrder: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5.5 }
    },
    reorder: {
      name_en: "Renew",
      name_jp: "リオーダー",
      desc: "When the user removes their own buffs, there is a chance for the same buffs to be renewed for the user. Does not activate if the buff is timed out, removed by another ally, or negated by a debuff.",
      stats: [],
      dep: { lastOrder: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 5.5 }
    }
  },
  Ninja: {
    insolence: {
      name_en: "Diversion Gambit",
      name_jp: "不忍",
      desc: "For 3 turns, increases the user's evasion and chance of being targeted.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    ninpoPoisonMist: {
      name_en: "Ninpo: Toxic Mist",
      name_jp: "忍法　毒霧",
      desc: "Attempts to inflict poison on all enemies.",
      stats: ["LUC"],
      unique: true,
      type: "Break",
      dep: { insolence: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    ninpoDaggers: {
      name_en: "Ninpo: Daggers",
      name_jp: "忍法　含針",
      desc: "Deals ranged stab damage to a set number of random targets. Can hit each target once at most. Attempts to inflict sleep.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    ninpoCaltrops: {
      name_en: "Ninpo: Caltrops",
      name_jp: "忍法　撒菱",
      desc: "This turn, when the selected row is attacked, counterattack with ranged slash damage and attempt to inflict poison.",
      stats: ["STR", "LUC"],
      dep: { ninpoDaggers: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    shadowBind: {
      name_en: "Shadow Bind",
      name_jp: "影縫",
      desc: "Deals melee cut damage to one target. Attempts to inflict leg bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    boneCrusher: {
      name_en: "Bone Crusher",
      name_jp: "骨砕き",
      desc: "Deals melee bash damage to one target. Reduces their physical defense.",
      stats: ["STR"],
      dep: { shadowBind: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    acrobatics: {
      name_en: "Reflexes",
      name_jp: "軽業",
      desc: "When the user evades an attack, their TP is restored.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4 }
    },
    concealment: {
      name_en: "Concealment",
      name_jp: "潜伏",
      desc: "Increases evasion.",
      stats: [],
      dep: { acrobatics: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    ninpoMirage: {
      name_en: "Ninpo: Mirage",
      name_jp: "忍法　陽炎",
      desc: "Creates a decoy of the user in an empty slot. The decoy has added evasion and chance to be targeted.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name_en: "Chop",
      name_jp: "伐採",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    ninpoMastery: {
      name_en: "Proficiency",
      name_jp: "忍びの心得",
      desc: "Increases attack. At max level, melee attacks will hit for full damage and can always reach the enemy back row, even when the user is in the back.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 6 }
    },
    ninpoMirror: {
      name_en: "Ninpo: Mirror",
      name_jp: "忍法　水鏡",
      desc: "Attempts to inflict the ailments and binds present on one enemy to all enemies.",
      stats: ["LUC"],
      dep: { ninpoCaltrops: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    foxDrop: {
      name_en: "Izuna",
      name_jp: "飯綱",
      desc: "Deals melee cut damage to one target. Attempts to inflict petrify.",
      stats: ["STR", "LUC"],
      dep: { boneCrusher: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    hawkStrike: {
      name_en: "Hawk Strike",
      name_jp: "鷹乃羽",
      desc: "Deals multiple instances of melee cut damage to random targets.",
      stats: ["STR"],
      dep: { foxDrop: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    selfDestruct: {
      name_en: "Revenge Bomb",
      name_jp: "肉弾",
      desc: "Once per battle, when the user is killed by an enemy attack, they will counterattack with ranged fire damage.",
      stats: ["STR"],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    ninpoClone: {
      name_en: "Ninpo: Double",
      name_jp: "忍法　分身",
      desc: "Consumes a percentage of the user's HP and TP to create a clone in an empty slot. Force Boost and Force Break are unusable while a clone is active.",
      stats: [],
      dep: { selfDestruct: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    beheading: {
      name_en: "Beheading",
      name_jp: "首切",
      desc: "Normal attacks have a chance to inflict instant death.",
      stats: ["LUC"],
      dep: { concealment: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    ninpoFlight: {
      name_en: "Ninpo: Flight",
      name_jp: "忍法　猿飛",
      desc: "This turn, the user has a high chance of evading physical attacks. Each time the user evades an attack, the evasion boost is reduced.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    autoMirage: {
      name_en: "Auto-Mirage",
      name_jp: "先制陽炎",
      desc: "If Ninpo: Mirage is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { ninpoMirage: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    statusAtkUp: {
      name_en: "Status ATK Up",
      name_jp: "抑制攻撃ブースト",
      desc: "Increases the chance of inflicting binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    ninpoShock: {
      name_en: "Ninpo: Panic",
      name_jp: "忍法　驚忍",
      desc: "Attempts to inflict panic on all enemies.",
      stats: ["LUC"],
      dep: { ninpoMirror: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    eyeForAnEye: {
      name_en: "Return Malice",
      name_jp: "意趣返し",
      desc: "If the user evaded an attack on the previous turn, increases chance of inflicting ailments",
      stats: [],
      dep: { ninpoShock: 2 },
      maxLevel: 6,
      coords: { x: 5, y: 1 }
    },
    schadenfreude: {
      name_en: "Dominance",
      name_jp: "幸災楽禍",
      desc: "Deals melee cut damage to one target. Always hits. If target has an ailment, increases the user's Force.",
      stats: ["STR"],
      dep: { hawkStrike: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    drawingSlice: {
      name_en: "Drawing Slice",
      name_jp: "多元抜刀",
      desc: "Deals multiple instances of melee damage to random targets, based on the number of clones active. All clones will disappear after use.",
      stats: ["STR"],
      dep: { schadenfreude: 2, ninpoClone: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 2.5 }
    },
    ninpoSmoke: {
      name_en: "Ninpo: Smoke",
      name_jp: "忍法　雲隠",
      desc: "Consumes the user's HP to greatly increase their evasion for 3 turns.",
      stats: [],
      dep: { ninpoFlight: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    },
    smokePowder: {
      name_en: "Mystic Calm",
      name_jp: "煙の末",
      desc: "Reduces TP cost. Will not reduce cost to 0.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 5 }
    }
  },
  Zodiac: {
    astrologersAxis: {
      name_en: "Divination",
      name_jp: "占星時軸",
      desc: "For 3 turns, Zodiac attack skills will have increased power, and restore half of their TP cost to the user.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    astralSign: {
      name_en: "Astrosign",
      name_jp: "アストロサイン",
      desc: "Deals ranged fire+ice+volt damage to all enemies. On this turn, all allies' TP cost will be reduced to 0.",
      stats: ["INT"],
      unique: true,
      type: "Break",
      dep: { astrologersAxis: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    ethericGleam: {
      name_en: "Etheric Gleam",
      name_jp: "エーテルの輝き",
      desc: "For a set number of turns, increases elemental attack for one row.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    fireStar: {
      name_en: "Fire Star",
      name_jp: "炎の星術",
      desc: "Deals ranged fire damage to one target, with splash damage.",
      stats: ["INT"],
      dep: { ethericGleam: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    iceStar: {
      name_en: "Ice Star",
      name_jp: "氷の星術",
      desc: "Deals ranged ice damage to one target, with line-piercing effects.",
      stats: ["INT"],
      dep: { ethericGleam: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    voltStar: {
      name_en: "Volt Star",
      name_jp: "雷の星術",
      desc: "Deals ranged volt damage to one row.",
      stats: ["INT"],
      dep: { ethericGleam: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    singularity: {
      name_en: "Singularity",
      name_jp: "特異点定理",
      desc: "Increases damage dealt when hitting weaknesses.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4.5 }
    },
    focusEther: {
      name_en: "Etheric Charge",
      name_jp: "エーテル圧縮",
      desc: "Until the end of the next turn, Zodiac attack skills will hit only one target, but deal increased damage.",
      stats: [],
      dep: { singularity: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    ethericReturn: {
      name_en: "Etheric Return",
      name_jp: "リターンエーテル",
      desc: "When the user kills an enemy, their TP is restored.",
      stats: [],
      dep: { singularity: 3 },
      maxLevel: 4,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    horoscope: {
      name_en: "Horoscope",
      name_jp: "星体観測",
      desc: "For a set number of turns, reduces encounter rate.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    etherMastery: {
      name_en: "Ether Mastery",
      name_jp: "エーテルマスター",
      desc: "Increases damage of Zodiac attack skills.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 0 }
    },
    tpUp: {
      name_en: "TP Up",
      name_jp: "ＴＰブースト",
      desc: "Increases maximum TP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 0 }
    },
    binaryFire: {
      name_en: "Binary Fire",
      name_jp: "炎の連星術",
      desc: "Deals ranged fire damage to all enemies.",
      stats: ["INT"],
      dep: { fireStar: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    binaryIce: {
      name_en: "Binary Ice",
      name_jp: "氷の連星術",
      desc: "Deals ranged ice damage to all enemies.",
      stats: ["INT"],
      dep: { iceStar: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    binaryVolt: {
      name_en: "Binary Volt",
      name_jp: "雷の連星術",
      desc: "Deals ranged volt damage to all enemies.",
      stats: ["INT"],
      dep: { voltStar: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    restoreEther: {
      name_en: "Etheric Boon",
      name_jp: "レストアエーテル",
      desc: "Increases attack based on the number of TP spent on the previous turn. Does not activate if TP spent last turn is too low.",
      stats: [],
      dep: { focusEther: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    antiEther: {
      name_en: "Anti-Ether",
      name_jp: "アンチエーテル",
      desc: "Provides a chance to nullify elemental attacks against the user's row.",
      stats: [],
      dep: { restoreEther: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    darkEther: {
      name_en: "Dark Ether",
      name_jp: "ダークエーテル",
      desc: "This turn, reduces TP usage for one row.",
      stats: [],
      dep: { ethericReturn: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    ethericShoot: {
      name_en: "Ether Shot",
      name_jp: "エーテルシュート",
      desc: "Deals ranged, INT-based damage to one enemy with the user's weapon.",
      stats: ["INT"],
      dep: { darkEther: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    fireProphecy: {
      name_en: "Fire Prophecy",
      name_jp: "炎の先見術",
      desc: "Prevents fire-elemental attacks from one enemy. If an attack is prevented, increases the user's attack until the end of the next turn.",
      stats: [],
      dep: { binaryFire: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 1 }
    },
    iceProphecy: {
      name_en: "Ice Prophecy",
      name_jp: "氷の先見術",
      desc: "Prevents ice-elemental attacks from one enemy. If an attack is prevented, increases the user's attack until the end of the next turn.",
      stats: [],
      dep: { binaryIce: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 2 }
    },
    voltProphecy: {
      name_en: "Volt Prophecy",
      name_jp: "雷の先見術",
      desc: "Prevents volt-elemental attacks from one enemy. If an attack is prevented, increases the user's attack until the end of the next turn.",
      stats: [],
      dep: { binaryVolt: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 3 }
    },
    freeEnergy: {
      name_en: "Free Energy",
      name_jp: "ＴＰカット",
      desc: "Provides a chance to reduce the user's TP usage to 0.",
      stats: [],
      dep: { fireProphecy: 1, iceProphecy: 1, voltProphecy: 1 },
      maxLevel: 6,
      coords: { x: 5, y: 2 }
    },
    spreadEther: {
      name_en: "Multi-Strike Ether",
      name_jp: "多段式エーテル",
      desc: "Until the end of the next turn, Zodiac attack skills will deal reduced damage, but hit random targets 2-5 times. Meteor will instead hit 6-15 times.",
      stats: [],
      dep: { antiEther: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 4 }
    },
    meteor: {
      name_en: "Meteor",
      name_jp: "メテオ",
      desc: "Deals 2-5 instances of ranged bash damage to random targets.",
      stats: ["INT"],
      dep: { horoscope: 3, ethericShoot: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 5.5 }
    }
  },
  Farmer: {
    itemAgain: {
      name_en: "Item Echo",
      name_jp: "アイテムアゲイン",
      desc: "For 3 turns, any items used by the user will take effect twice. The second activation will not consume another item.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    finalTrick: {
      name_en: "Final Secret",
      name_jp: "最後の秘策",
      desc: "Fully restores all allies' Force gauges, and any broken Force gauges have a chance to be repaired.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { itemAgain: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sympathyPain: {
      name_en: "Sympathy Pain",
      name_jp: "怪我の功名",
      desc: "Attempts to inflict ailments and binds on the user to all enemies. This will not remove them from the user.",
      stats: ["LUC", "LUC"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    strangeSeeds: {
      name_en: "Strange Seeds",
      name_jp: "不思議な種",
      desc: "At the end of this turn, attempts to inflict one of head bind, arm bind and leg bind to all enemies.",
      stats: ["LUC"],
      dep: { sympathyPain: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    playPossum: {
      name_en: "Play Possum",
      name_jp: "鳴かずば討たれず",
      desc: "For 3 turns, decreases one ally's chance of being targeted.",
      stats: [],
      dep: { sympathyPain: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    keenEye: {
      name_en: "Keen Eye",
      name_jp: "探知マスター",
      desc: "For a set number of steps, displays treasure chests, hidden passages, staircases, FOEs and gather points on the minimap.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    searchSkill: {
      name_en: "Excavation",
      name_jp: "探索術",
      desc: "During exploration, provides a chance to receive gatherable items when walking.",
      stats: [],
      dep: { keenEye: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    flee: {
      name_en: "Flee",
      name_jp: "猛進逃走",
      desc: "Consumes HP from all party members to attempt to flee the battle and return to the last used staircase or geomagnetic pole. Does not consume HP if fleeing failed.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    slapAwake: {
      name_en: "Slap Awake",
      name_jp: "応急蘇生",
      desc: "Revives one ally. Can only be used in the field.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    harvestry: {
      name_en: "Harvestry",
      name_jp: "収穫マスター",
      desc: "Occasionally gains more items when using any gathering points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    earthsBounty: {
      name_en: "Earth's Bounty",
      name_jp: "大自然の恵み",
      desc: "Increases experience gain for all party members while the user is alive.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 6 }
    },
    rottenEggs: {
      name_en: "Rotten Egg",
      name_jp: "弱り目に祟り目",
      desc: "For 3 turns, decreases attack for all enemies. Effect is stronger against enemies with an ailment.",
      stats: [],
      dep: { strangeSeeds: 3, playPossum: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 1.5 }
    },
    persistence: {
      name_en: "Persistence",
      name_jp: "五分の魂",
      desc: "At the end of the turn, the user has a chance of automatically reviving.",
      stats: [],
      dep: { rottenEggs: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 1.5 }
    },
    wasteNot: {
      name_en: "Waste Not",
      name_jp: "解体マスター",
      desc: "Increases item drop rate.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 2.5 }
    },
    strokeOfLuck: {
      name_en: "Godsend",
      name_jp: "もっけの幸い",
      desc: "During exploration, provides a chance to receive consumable items when walking.",
      stats: [],
      dep: { searchSkill: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    rainOrShin: {
      name_en: "Rain or Shine",
      name_jp: "アメニモマケズ",
      desc: "For a set number of steps, nullifies damage tiles and muddy floors, and greatly reduces other sources of damage while exploring.",
      stats: [],
      dep: { flee: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    safeStroll: {
      name_en: "Safe Stroll",
      name_jp: "安全歩行",
      desc: "For a set number of steps, reduces encounter rate.",
      stats: [],
      dep: { rainOrShin: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    sharingIsCaring: {
      name_en: "Share the Wealth",
      name_jp: "御裾分け",
      desc: "Consumes the user's TP to restore TP to other allies on the same row.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    braveHeart: {
      name_en: "Fearless",
      name_jp: "怖いもの知らず",
      desc: "If the user is in the front row and at full HP, their TP is restored at the end of the turn.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 5 }
    },
    survivalSkills: {
      name_en: "Survival Wisdom",
      name_jp: "生存の知恵",
      desc: "Restores HP and TP to all party members when gathering.",
      stats: [],
      dep: { earthsBounty: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    lullaby: {
      name_en: "Lullaby",
      name_jp: "子守唄",
      desc: "Inflicts sleep on the user and attempts to inflict sleep on all enemies.",
      stats: ["LUC"],
      dep: { persistence: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    songOfLabour: {
      name_en: "Fruitful Song",
      name_jp: "労作歌",
      desc: "During exploration, restores TP to all allies every set number of steps taken.",
      stats: [],
      dep: { lullaby: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 1.5 }
    },
    dissection: {
      name_en: "Blessed Remains",
      name_jp: "解体の恩恵",
      desc: "When the user kills an enemy, restores Force to all party members.",
      stats: [],
      dep: { wasteNot: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 2.5 }
    },
    harvestFestival: {
      name_en: "Harvest Festival",
      name_jp: "収穫祭",
      desc: "Deals melee cut damage to all enemies. Increases damage dealt and attempts to inflict instant death on enemy with binds.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 10,
      coords: { x: 4, y: 3.5 }
    },
    naturesBounty: {
      name_en: "Nature's Blessing",
      name_jp: "自然の恩恵",
      desc: "There is a chance to obtain additional rare items when gathering.",
      stats: [],
      dep: { survivalSkills: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 6 }
    },
    doubleChop: {
      name_en: "Double Crop",
      name_jp: "二毛作",
      desc: "When gathering, there is a chance to immediately gather again from the same spot. Can only activate once per gather.",
      stats: [],
      dep: { naturesBounty: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 6 }
    }
  },
  Shogun: {
    fullCombatForm: {
      name_en: "Unified Effort",
      name_jp: "力戦陣形",
      desc: "For 3 turns, increases maximum HP and attack for all party members.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    bodyDouble: {
      name_en: "Decoy Party",
      name_jp: "影武者",
      desc: "This turn, all party members will negate any hostile action once.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { fullCombatForm: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    parryingBlade: {
      name_en: "Second Sword",
      name_jp: "払い弐刀",
      desc: "Increases physical defense when two weapons are equipped. Enables sub-weapon when this skill is learned.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    spiritFlow: {
      name_en: "Echoing Slash",
      name_jp: "谺流し",
      desc: "Deals melee damage to one target with the equipped katana at the start of turn. If two weapons are equipped, attacks again with the other weapon after the target acts.",
      stats: ["STR"],
      dep: { parryingBlade: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    counterCommand: {
      name_en: "Front Command",
      name_jp: "斬月居合陣",
      desc: "This turn, when the selected ally is attacked, all front row allies will counterattack with their weapons. Does not activate against counterattacks.",
      stats: ["STR"],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    boltSlash: {
      name_en: "Bolt Slash",
      name_jp: "雷切",
      desc: "Deals melee cut+volt damage to one target.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    sight: {
      name_en: "Avidya Sight",
      name_jp: "無明の極",
      desc: "Increases the user's attack at night or when blinded.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    greatGeneral: {
      name_en: "Great Warrior",
      name_jp: "大武辺者",
      desc: "For 3 turns, increases one ally's physical attack and chance of being targeted.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    assassinGathering: {
      name_en: "Taunt Assassins",
      name_jp: "刺客寄せ",
      desc: "For a set number of steps, increases encounter rate and experience gained from defeating enemies.",
      stats: [],
      dep: { greatGeneral: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      name_jp: "採取",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    moraleBoost: {
      name_en: "Morale Boost",
      name_jp: "士気回復",
      desc: "When the user is revived, restores HP to all allies.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 6 }
    },
    twinSparrow: {
      name_en: "Twin Swallow",
      name_jp: "双燕",
      desc: "Deals melee damage to one target with the user's weapon. If two weapons are equipped, this skill will hit twice. First hit will be from the katana, while the second hit will be from the other weapon.",
      stats: ["STR"],
      dep: { spiritFlow: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    baitCommand: {
      name_en: "Endure Command",
      name_jp: "据え虎の陣",
      desc: "This turn, when the user is attacked, all allies other than the user will counterattack with their weapons. Does not activate against counterattacks.",
      stats: ["STR"],
      dep: { counterCommand: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 2 }
    },
    blitzCommand: {
      name_en: "Blitz Command",
      name_jp: "乱れ竜の陣",
      desc: "All allies other than the user will attack one target with their weapons.",
      stats: ["STR"],
      dep: { baitCommand: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2 }
    },
    morningStar: {
      name_en: "Morning Star",
      name_jp: "明星",
      desc: "Deals melee cut damage to one row. Damage increases during the day.",
      stats: ["STR"],
      dep: { boltSlash: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    dusk: {
      name_en: "Twilight Hour",
      name_jp: "禍時",
      desc: "Deals melee cut damage to one target. Damage increases at night.",
      stats: ["STR"],
      dep: { sight: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    bloodyLance: {
      name_en: "Bloody Lance",
      name_jp: "血染めの朱槍",
      desc: "When the user kills an enemy or ally, their attack is increased. The effect is reset when the user dies.",
      stats: [],
      dep: { dusk: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    reincarnation: {
      name_en: "Reincarnation",
      name_jp: "仮死再生",
      desc: "On the turn when the user's HP reaches 0, there is a chance that they may revive at the end of that turn.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 3, y: 5 }
    },
    fellingBird: {
      name_en: "Peerless Demon",
      name_jp: "飛鳥落とし",
      desc: "Increases damage dealt for each hit you make in the same turn.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 2, y: 6 }
    },
    ritualSuicide: {
      name_en: "Seppuku",
      name_jp: "切腹",
      desc: "Restores HP to all other allies with a chance to revive them, but the user dies. This self-inflicted death cannot be prevented via any means.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    fiveRingSword: {
      name_en: "5-Ring Sword",
      name_jp: "五輪の剣",
      desc: "Deals multiple instances of melee damage to random targets with user's weapon. If two weapons are equipped, the maximum number of hits will double, and this attack will alternate between the katana and the other weapon.",
      stats: ["STR"],
      dep: { twinSparrow: 4 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    reprisalCommand: {
      name_en: "Shot Command",
      name_jp: "報復射撃陣",
      desc: "This turn, when the selected row is attacked, all allies equipped with a bow or gun will counterattack with their bow or gun. Does not activate against counterattacks.",
      stats: ["STR"],
      dep: { blitzCommand: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    warriorMight: {
      name_en: "Warrior Might",
      name_jp: "一騎当千",
      desc: "This turn, the user will chase all attacks from all allies, but will lose HP for every chase. The HP loss can kill the user. Links, chases and counterattacks cannot be chased. Only one chase will be made for each action.",
      stats: ["STR"],
      dep: { reprisalCommand: 2 },
      maxLevel: 10,
      coords: { x: 5, y: 2 }
    },
    curseStrike: {
      name_en: "Curse Strike",
      name_jp: "祟り打ち",
      desc: "Deals melee bash damage to one target. Attempts to inflict curse and arm bind.",
      stats: ["STR", "LUC"],
      dep: { bloodyLance: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    mercyKill: {
      name_en: "Execution",
      name_jp: "介錯",
      desc: "When any enemy or ally is attacked, and their HP falls below a set percentage, there is a chance to inflict instant death to them.",
      stats: [],
      dep: { curseStrike: 3 },
      maxLevel: 4,
      coords: { x: 5, y: 4 }
    },
    foreHonor: {
      name_en: "Swift Justice",
      name_jp: "先陣の名誉",
      desc: "For 3 turns, increases one ally's physical attack and action speed, but decreases their physical defense.",
      stats: [],
      dep: { reincarnation: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    }
  },
  Landsknecht: {
    trinity: {
      name_en: "Trinity",
      name_jp: "三位一体",
      desc: "For 3 turns, increases the user's attack, accuracy and action speed.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    fullCharge: {
      name_en: "Full Charge",
      name_jp: "フルチャージ",
      desc: "This turn, the user is fully immune to any hostile effects from enemies. Until the end of the next turn, increases the user's attack and action speed.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { trinity: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    proficiency: {
      name_en: "Proficiency",
      name_jp: "剣士の心得",
      desc: "After the user attacks this turn, all further attacks against enemies attacked by the user will have increased damage and accuracy.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 1 }
    },
    sonicRaid: {
      name_en: "Falcon Slash",
      name_jp: "ソニックレイド",
      desc: "Deals melee damage to one target with the user's weapon at the start of the turn.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    blazingLink: {
      name_en: "Blazing Link",
      name_jp: "リンクフレイム",
      desc: "Deals melee cut/stab+fire damage to one target. If the target is attacked again after, follows up with another attack of the same element. Chance of follow-up decreases with each hit.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    freezingLink: {
      name_en: "Freezing Link",
      name_jp: "リンクフリーズ",
      desc: "Deals melee cut/stab+ice damage to one target. If the target is attacked again after, follows up with another attack of the same element. Chance of follow-up decreases with each hit.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    electricLink: {
      name_en: "Electric Link",
      name_jp: "リンクサンダー",
      desc: "Deals melee cut/stab+volt damage to one target. If the target is attacked again after, follows up with another attack of the same element. Chance of follow-up decreases with each hit.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    vanguard: {
      name_en: "Vanguard",
      name_jp: "ヴァンガード",
      desc: "For 5 turns, decreases the user's physical defense, but increases physical attack and action speed.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    powerBreak: {
      name_en: "Power Break",
      name_jp: "パワーブレイク",
      desc: "Deals melee bash damage to one target. Decreases their attack for 3 turns. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    physDefUp: {
      name_en: "Phys DEF Up",
      name_jp: "物理防御ブースト",
      desc: "Increases physical defense.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    doubleStrike: {
      name_en: "Double Strike",
      name_jp: "ダブルストライク",
      desc: "Deals 2 instances of melee damage to one target with the user's weapon.",
      stats: ["STR"],
      dep: { sonicRaid: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    spiralSlice: {
      name_en: "Spiral Slice",
      name_jp: "ラウンドソード",
      desc: "Deals melee cut damage to one target, with splash damage.",
      stats: ["STR"],
      dep: { doubleStrike: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 0.5 }
    },
    penetrate: {
      name_en: "Penetrate",
      name_jp: "ペネトレイト",
      desc: "Deals melee stab damage to one target, with line-piercing effects.",
      stats: ["STR"],
      dep: { doubleStrike: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1.5 }
    },
    improvedLink: {
      name_en: "Improved Link",
      name_jp: "リンクプラス",
      desc: "For 3 turns, increases the number of follow-ups that can be made from link skills used by the user, as well as their chance of follow-up. Each action may trigger at most 4 link follow-ups.",
      stats: [],
      dep: { blazingLink: 3, freezingLink: 3, electricLink: 3 },
      maxLevel: 4,
      coords: { x: 2, y: 3 }
    },
    linkSmash: {
      name_en: "Smash Link",
      name_jp: "リンクスマッシュ",
      desc: "Link follow-up attacks can deal critical hits. If an action triggered multiple follow-ups and one of them dealt a critical hit, all subsequent follow-ups triggered by that action will automatically deal critical hits as well.",
      stats: [],
      dep: { improvedLink: 1 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    guardBreak: {
      name_en: "Guard Break",
      name_jp: "ガードブレイク",
      desc: "Deals melee bash damage to one target. Decreases their defense for 3 turns. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { powerBreak: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    speedBreak: {
      name_en: "Speed Break",
      name_jp: "スピードブレイク",
      desc: "Deals melee bash damage to one target. Decreases their evasion and action speed for 3 turns. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { guardBreak: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    initiative: {
      name_en: "Initiative",
      name_jp: "先駆けの功名",
      desc: "When attacking before any enemies act, increases damage and accuracy.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 6 }
    },
    statusDefUp: {
      name_en: "Status DEF Up",
      name_jp: "抑制防御ブースト",
      desc: "Decreases the chance of being inflicted with binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    swordTempest: {
      name_en: "Sword Tempest",
      name_jp: "ソードテンペスト",
      desc: "Deals melee cut damage to one target. High power at the cost of speed.",
      stats: ["STR"],
      dep: { spiralSlice: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 0.5 }
    },
    swiftStab: {
      name_en: "Swift Stab",
      name_jp: "ハヤブサ突き",
      desc: "Deals multiple instances of melee stab damage to random targets.",
      stats: ["STR"],
      dep: { penetrate: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    linkMastery: {
      name_en: "Link Mastery",
      name_jp: "リンクマスタリ",
      desc: "For each link follow-up made this turn, increases the damage of subsquent link follow-ups.",
      stats: [],
      dep: { linkSmash: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 3 }
    },
    linkEnd: {
      name_en: "Link Finale",
      name_jp: "リンクエンド",
      desc: "Deals melee damage to one target with the user's weapon. Damage is based on the number of link follow-ups made on the previous turn.",
      stats: ["STR"],
      dep: { linkMastery: 2 },
      maxLevel: 6,
      coords: { x: 5, y: 3 }
    },
    fullBreak: {
      name_en: "Full Break",
      name_jp: "フルブレイク",
      desc: "Deals melee bash damage to one target. Damage is increased if the target has a Break skill debuff. Multiple Break debuffs will not increase damage further. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { speedBreak: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    singleDevote: {
      name_en: "Single Devotion",
      name_jp: "シングルデボート",
      desc: "Increases damage when fewer elements are used in an attack.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
    }
  },
  Nightseeker: {
    killerStance: {
      name_en: "Killing Intent",
      name_jp: "キラースタンス",
      desc: "For 3 turns, increases attack and ailment infliction chance for the user.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    disaster: {
      name_en: "Disaster",
      name_jp: "ディザスター",
      desc: "Deals melee cut damage to one target. If the target has an ailment, increases the ailment's duration.",
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { killerStance: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sandThrow: {
      name_en: "Sand Throw",
      name_jp: "盲目の投刃",
      desc: "Deals ranged cut damage to one target. Attempts to inflict blind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    sleepThrow: {
      name_en: "Sleep Throw",
      name_jp: "睡眠の投刃",
      desc: "Deals ranged cut damage to one target. Attempts to inflict sleep.",
      stats: ["STR", "LUC"],
      dep: { sandThrow: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 1.5 }
    },
    shadowCloak: {
      name_en: "Shadow Cloak",
      name_jp: "ハイドクローク",
      desc: "For 3 turns, negates one physical attack made against the user.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 3 }
    },
    bidingSlice: {
      name_en: "Biding Slice",
      name_jp: "ディレスタブ",
      desc: "Deals melee cut damage to one target. If the user is not damaged until the end of the turn, deals melee cut damage to the same target again.",
      stats: ["STR"],
      dep: { shadowCloak: 1 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    iceKnife: {
      name_en: "Ice Knife",
      name_jp: "アイスブラッシュ",
      desc: "Deals cut+ice damage to one target.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    proficiency: {
      name_en: "Proficiency",
      name_jp: "夜賊の心得",
      desc: "Increases damage dealt to enemies with ailments.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    decoySign: {
      name_en: "Decoy Sign",
      name_jp: "デコイサイン",
      desc: "For 3 turns, increases one ally's chance of being targeted.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    bladeFlurry: {
      name_en: "Blade Flurry",
      name_jp: "追影の刃",
      desc: "User can attack with both weapons if two weapons are equipped. Damage of the second attack is based on this skill's level. Enables sub-weapon when this skill is learned.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    chop: {
      name_en: "Chop",
      name_jp: "伐採",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    curseThrow: {
      name_en: "Curse Throw",
      name_jp: "呪いの投刃",
      desc: "Deals ranged cut damage to one target. Attempts to inflict curse.",
      stats: ["STR", "LUC"],
      dep: { sleepThrow: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    nerveThrow: {
      name_en: "Nerve Throw",
      name_jp: "麻痺の投刃",
      desc: "Deals ranged cut damage to one target. Attempts to inflict paralysis.",
      stats: ["STR", "LUC"],
      dep: { curseThrow: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    shadowBite: {
      name_en: "Shadow Bite",
      name_jp: "シャドウバイト",
      desc: "Deals melee cut damage to one target. Damage is increased if the target has an ailment.",
      stats: ["STR"],
      dep: { sleepThrow: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    autoCloak: {
      name_en: "Auto-Cloak",
      name_jp: "先制クローク",
      desc: "If Shadow Cloak is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { bidingSlice: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    backstab: {
      name_en: "Backstab",
      name_jp: "バックスタブ",
      desc: "Deals melee cut damage to one target. Attempts to inflict head bind. If the user has Shadow Cloak, add almighty element to the attack and increases damage.",
      stats: ["STR", "LUC"],
      dep: { autoCloak: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    sneakAttack: {
      name_en: "Sneak Attack",
      name_jp: "奇襲",
      desc: "For a set number of steps, increases the chance of preemptive attacks.",
      stats: [],
      dep: { proficiency: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    foulMastery: {
      name_en: "Foul Mastery",
      name_jp: "闇討マスタリ",
      desc: "Increases attack every time the user inflicts an ailment. Bonus stacks up to 3 times, and is reset if the user dies.",
      stats: [],
      dep: { sneakAttack: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    speedUp: {
      name_en: "Speed Up",
      name_jp: "素早さブースト",
      desc: "Increases accuracy, evasion and action speed.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    spreadThrow: {
      name_en: "Spread Throw",
      name_jp: "スプレッドスロー",
      desc: "Until the end of the next turn, increases throw skills' range to all targets, and improves their infliction rate.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 6 }
    },
    venomThrow: {
      name_en: "Venom Throw",
      name_jp: "猛毒の投刃",
      desc: "Deals ranged cut damage to one target. Attempts to inflict poison.",
      stats: ["STR", "LUC"],
      dep: { nerveThrow: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    swiftEdge: {
      name_en: "Swift Edge",
      name_jp: "スウィフトソード",
      desc: "Deals 3-5 instances of melee cut damage to one target. If the target has an ailment, maximum number of attacks is increased to 9.",
      stats: ["STR"],
      dep: { shadowBite: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    assassinate: {
      name_en: "Assassinate",
      name_jp: "アサシネイション",
      desc: "Deals melee cut damage to one target. If the user has Shadow Cloak, attempts to inflict instant death.",
      stats: ["STR"],
      dep: { backstab: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    returnCloak: {
      name_en: "Enduring Cloak",
      name_jp: "リターンクローク",
      desc: "When Shadow Cloak negates an attack, there is a chance that Shadow Cloak will be automatically cast on the user.",
      stats: [],
      dep: { assassinate: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 3 }
    },
    followTrace: {
      name_en: "Follow Trace",
      name_jp: "追影の残滓",
      desc: "After using an attack skill, if at least one of the skill's targets has an ailment, there is a chance to repeat the skill.",
      stats: [],
      dep: { bladeFlurry: 4 },
      maxLevel: 10,
      coords: { x: 4, y: 5 }
    },
    autoSpread: {
      name_en: "Auto-Spread",
      name_jp: "先制スプレッド",
      desc: "If Spread Throw is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { spreadThrow: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
    }
  },
  Arcanist: {
    circleProtection: {
      name_en: "Circle Paradise",
      name_jp: "方陣護持",
      desc: "For 3 turns, increases the user's bind and ailment infliction chance, and prevents circles from being removed.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    releasalSpell: {
      name_en: "Releasal Spell",
      name_jp: "解魔の札",
      desc: "Remove buffs and accumulative resistance from all enemies.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { circleProtection: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    circleBoon: {
      name_en: "Circle Boon",
      name_jp: "陣回復",
      desc: "If a circle is active, restores HP to all party members at the end of the turn.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 1 }
    },
    dismissHeal: {
      name_en: "Dismiss Heal",
      name_jp: "破陣：命脈活性",
      desc: "Dismisses the current circle and restores HP to all party members.",
      stats: ["WIS"],
      dep: { circleBoon: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    chainCircle: {
      name_en: "Chain Circle",
      name_jp: "腕封の方陣",
      desc: "Activates a circle that attempts to inflict arm bind on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    snareCircle: {
      name_en: "Snare Circle",
      name_jp: "脚封の方陣",
      desc: "Activates a circle that attempts to inflict leg bind on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { chainCircle: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    nerveCircle: {
      name_en: "Nerve Circle",
      name_jp: "麻痺の方陣",
      desc: "Activates a circle that attempts to inflict paralysis on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    curseCircle: {
      name_en: "Curse Circle",
      name_jp: "呪いの方陣",
      desc: "Activates a circle that attempts to inflict curse on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { nerveCircle: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    bracingWalk: {
      name_en: "Bracing Walk",
      name_jp: "回復歩行",
      desc: "During exploration, restores HP to all allies for every 3 steps taken.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4 }
    },
    proficiency: {
      name_en: "Proficiency",
      name_jp: "方陣師の心得",
      desc: "Restores TP to the user when a circle is dismissed or times out.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name_en: "Chop",
      name_jp: "伐採",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    dismissRevive: {
      name_en: "Dismiss Revive",
      name_jp: "破陣：再起活性",
      desc: "Dismisses the current circle to attempt to revive one row of allies.",
      stats: [],
      dep: { dismissHeal: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    dismissBlow: {
      name_en: "Dismiss Blow",
      name_jp: "破陣：亜空絞破",
      desc: "Dismisses the current circle to deal ranged almighty damage to one target.",
      stats: ["INT"],
      dep: { dismissRevive: 3 },
      maxLevel: 10,
      coords: { x: 3, y: 1 }
    },
    hoodCircle: {
      name_en: "Hood Circle",
      name_jp: "頭封の方陣",
      desc: "Activates a circle that attempts to inflict head bind on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { snareCircle: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    sleepCircle: {
      name_en: "Sleep Circle",
      name_jp: "催眠の方陣",
      desc: "Activates a circle that attempts to inflict sleep on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { curseCircle: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    charmEye: {
      name_en: "Charm Eye",
      name_jp: "魅了の邪眼",
      desc: "For 3 turns, decreases attack for all enemies.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    atrophicEye: {
      name_en: "Atrophic Eye",
      name_jp: "衰身の邪眼",
      desc: "For 3 turns, decreases defense for all enemies.",
      stats: [],
      dep: { charmEye: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    statusAtkUp: {
      name_en: "Status ATK Up",
      name_jp: "抑制攻撃ブースト",
      desc: "Increases the chance of inflicting binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    tameGround: {
      name_en: "Tame Ground",
      name_jp: "地脈操作",
      desc: "For a set number of steps, nullifies damage tiles and muddy floors, and greatly reduces other sources of damage while exploring.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    wardingMist: {
      name_en: "Warding Mist",
      name_jp: "退魔の霧",
      desc: "Provides a chance to nullify binds, ailments and stun for the user's row.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 6 }
    },
    dismissBlast: {
      name_en: "Dismiss Blast",
      name_jp: "破陣：亜空鳴動",
      desc: "Dismisses the current circle to deal ranged almighty damage to all enemies.",
      stats: ["INT"],
      dep: { dismissBlow: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    circleMastery: {
      name_en: "Circle Mastery",
      name_jp: "方陣マスタリ",
      desc: "Increases the power of Dismiss skills.",
      stats: [],
      dep: { dismissBlast: 3 },
      maxLevel: 6,
      coords: { x: 5, y: 1 }
    },
    poisonCircle: {
      name_en: "Poison Circle",
      name_jp: "毒の方陣",
      desc: "Activates a circle that attempts to inflict poison on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { sleepCircle: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2.5 }
    },
    chaosCircle: {
      name_en: "Chaos Circle",
      name_jp: "幻惑の方陣",
      desc: "Activates a circle that attempts to inflict panic on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      stats: ["LUC"],
      dep: { sleepCircle: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
    },
    dismissQuake: {
      name_en: "Dismiss Quake",
      name_jp: "破陣：大地振盪",
      desc: "Dismisses the current circle to attempt to inflict stun on all enemies.",
      stats: ["LUC"],
      dep: { poisonCircle: 3, chaosCircle: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 3 }
    },
    tpReturn: {
      name_en: "TP Return",
      name_jp: "ＴＰリターン",
      desc: "Restores TP to the user when they inflict a bind, ailment or stun. Inflicting something on multiple enemies will not increase the effect of this skill.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 6 }
    }
  },
  Imperial: {
    ignition: {
      name_en: "Ignition",
      name_jp: "イグニッション",
      desc: "For 3 turns, the user's drive skills will not activate the overheat state.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    conversion: {
      name_en: "Conversion",
      name_jp: "コンバージョン",
      desc: "Restores TP to the user. This can restore TP over maximum TP. The overhealed TP will disappear at the end of battle, or when the user dies.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { ignition: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sharpEdge: {
      name_en: "Sharp Edge",
      name_jp: "シャープエッジ",
      desc: "Activation skill. Deals melee cut damage to one target. Reduces overheat duration by 1 turn.",
      stats: ["STR"],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 1 }
    },
    naturalEdge: {
      name_en: "Natural Edge",
      name_jp: "ナチュラルエッジ",
      desc: "Activation skill. Deals melee damage to one target with the user's weapon.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    bloodEdge: {
      name_en: "Blood Edge",
      name_jp: "ブラッドエッジ",
      desc: "Connecting skill. Deals melee cut damage to one target. Restores HP to the user based on the amount of damage dealt. Can only be used if an activation skill was used on the previous turn.",
      stats: ["STR"],
      dep: { sharpEdge: 2, naturalEdge: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1.5 }
    },
    rearGuard: {
      name_en: "Heavy Guard",
      name_jp: "リアガード",
      desc: "For 3 turns, increases defense for one ally, but that ally will move last each turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    assaultDrive: {
      name_en: "Assault Drive",
      name_jp: "アサルトドライブ",
      desc: "Deals melee cut damage to one target, and places the user in the overheat state for 7 turns. Cannot be used while overheated. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 4 }
    },
    heatSink: {
      name_en: "Heat Sink",
      name_jp: "強制排熱",
      desc: "Reduces overheat duration by a set number of turns. Can only be used while overheated.",
      stats: [],
      dep: { assaultDrive: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 3.5 }
    },
    overheatGuard: {
      name_en: "Heat Shield",
      name_jp: "過熱の守り",
      desc: "While overheated, increases the user's defense.",
      stats: [],
      dep: { assaultDrive: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 4.5 }
    },
    avenger: {
      name_en: "Avenger",
      name_jp: "アベンジャー",
      desc: "When an ally dies, restores HP to the user.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    massiveEdge: {
      name_en: "Massive Edge",
      name_jp: "マッシブエッジ",
      desc: "Activation skill. Deals melee cut damage to one target, with splash damage.",
      stats: ["STR"],
      dep: { bloodEdge: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    coolEdge: {
      name_en: "Cool Edge",
      name_jp: "クールエッジ",
      desc: "Connecting skill. Deals melee cut damage to one target. Reduces duration of overheat by 2 turns. Can only be used if an activation skill was used on the previous turn.",
      stats: ["STR"],
      dep: { massiveEdge: 2 },
      maxLevel: 4,
      coords: { x: 3, y: 1 }
    },
    tripEdge: {
      name_en: "Trip Edge",
      name_jp: "トリップエッジ",
      desc: "Activation skill. Deals melee cut damage to one target. Attempts to inflict leg bind.",
      stats: ["STR", "LUC"],
      dep: { bloodEdge: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    impulseEdge: {
      name_en: "Impulse Edge",
      name_jp: "インパルスエッジ",
      desc: "Connecting skill. Deals melee cut damage to one target. Restores TP to the user. Can only be used if an activation skill was used on the previous turn.",
      stats: ["STR"],
      dep: { tripEdge: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2 }
    },
    intercooler: {
      name_en: "Intercooler",
      name_jp: "インタークーラー",
      desc: "Increases the damage of Drive skills. Increasing this skill's level will also reduce the duration of the overheat state.",
      stats: [],
      dep: { heatSink: 1, overheatGuard: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 4 }
    },
    flameDrive: {
      name_en: "Flame Drive",
      name_jp: "フレイムドライブ",
      desc: "Deals melee cut+fire damage to one target, and places the user in the overheat state for 8 turns. Cannot be used while overheated. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { intercooler: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    freezeDrive: {
      name_en: "Freeze Drive",
      name_jp: "フリーズドライブ",
      desc: "Deals melee cut+ice damage to one target, and places the user in the overheat state for 8 turns. Cannot be used while overheated. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { intercooler: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    shockDrive: {
      name_en: "Shock Drive",
      name_jp: "ショックドライブ",
      desc: "Deals melee cut+volt damage to one target, and places the user in the overheat state for 8 turns. Cannot be used while overheated. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { intercooler: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    statusDefUp: {
      name_en: "Status DEF Up",
      name_jp: "抑制防御ブースト",
      desc: "Decreases the chance of being inflicted with binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    chargeEdge: {
      name_en: "Charge Edge",
      name_jp: "チャージエッジ",
      desc: "Terminating skill. Deals melee cut damage to one target. Until the end of the next turn, increases the user's attack. Can only be used if an activation skill or connecting skill was used on the previous turn.",
      stats: ["STR"],
      dep: { coolEdge: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    forceEdge: {
      name_en: "Force Edge",
      name_jp: "フォースエッジ",
      desc: "Terminating skill. Deals melee cut damage to one target. Restores Force to the user. Can only be used if an activation skill or connecting skill was used on the previous turn.",
      stats: ["STR"],
      dep: { impulseEdge: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    hpUp: {
      name_en: "HP Up",
      name_jp: "ＨＰブースト",
      desc: "Increases maximum HP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    accelDrive: {
      name_en: "Accel Drive",
      name_jp: "アクセルドライブ",
      desc: "Deals melee cut+almighty damage to one target, and places the user in the overheat state for 9 turns. Cannot be used while overheated. Low action speed, and the user will take double damage until the skill activates.",
      stats: ["STR"],
      dep: { flameDrive: 1, freezeDrive: 1, shockDrive: 1 },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    },
    absorber: {
      name_en: "Absorber",
      name_jp: "コンバーター",
      desc: "Restores TP to the user when hitting a weakness.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 5 }
    },
    elemAtkUp: {
      name_en: "Elem ATK Up",
      name_jp: "属性攻撃ブースト",
      desc: "Increases elemental attack.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    }
  },
  Pugilist: {
    sealRush: {
      name_en: "Bind Rush",
      name_jp: "シールラッシュ",
      desc: "For 3 turns, increases the user's bind infliction chance, and chases any of the user's attacks against an enemy with binds, ailments or stun. Multi-hit attacks will only be chased once.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    finalBlow: {
      name_en: "Final Blow",
      name_jp: "ファイナルブロー",
      desc: "Deals melee bash damage to one target. Attempts to inflict head bind, arm bind and leg bind.",
      stats: ["STR", "LUC"],
      unique: true,
      type: "Break",
      dep: { sealRush: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    concussion: {
      name_en: "Concussion",
      name_jp: "フリッカー",
      desc: "Deals melee bash damage to one target. Attempts to inflict head bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    armBreaker: {
      name_en: "Arm Breaker",
      name_jp: "アームブレイク",
      desc: "Deals melee bash damage to one target. Attempts to inflict arm bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    lowBlow: {
      name_en: "Low Blow",
      name_jp: "リバーブロー",
      desc: "Deals melee bash damage to one target. Attempts to inflict leg bind on the target.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    oneTwoPunch: {
      name_en: "One-Two Punch",
      name_jp: "ワンツー",
      desc: "Deals melee bash damage to one target. May follow up with Concussion, Arm Breaker, and Low Blow if the target does not have the respective bind. Follow-up skills deal reduced damage.",
      stats: ["STR", "LUC"],
      dep: { concussion: 2, armBreaker: 2, lowBlow: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    corkscrew: {
      name_en: "Corkscrew",
      name_jp: "コークスクリュー",
      desc: "Deals melee bash damage to one target. Attempts to inflict paralysis on the target.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 3.5 }
    },
    adrenaline: {
      name_en: "Adrenaline",
      name_jp: "アドレナリン",
      desc: "Restores TP to the user when they inflict a bind, ailment or stun. Inflicting something on multiple enemies will not increase the effect of this skill.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4 }
    },
    doublePunch: {
      name_en: "Double Punch",
      name_jp: "ダブルパンチ",
      desc: "When any single-action, single-target Pugilist skill is used, or when Corkscrew is used via Added Blow, or when Cross Counter is used (despite what the description claims), if the skill fails to inflict their bind or ailment, there is a chance it will be repeated.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name_en: "Chop",
      name_jp: "伐採",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    hpUp: {
      name_en: "HP Up",
      name_jp: "ＨＰブースト",
      desc: "Increases maximum HP.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    devilsFist: {
      name_en: "Devil's Fist",
      name_jp: "鬼人拳",
      desc: "Consumes HP to deal melee bash damage to one target, with splash damage.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    fightingSpirit: {
      name_en: "Fighting Spirit",
      name_jp: "闘魂",
      desc: "If the user lost HP on the previous turn, increases their attack this turn.",
      stats: [],
      dep: { devilsFist: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    addedBlow: {
      name_en: "Following Strike",
      name_jp: "追い撃ち",
      desc: "When the user inflicts a bind on an enemy, there is a chance to follow up with Corkscrew.",
      stats: [],
      dep: { oneTwoPunch: 2, corkscrew: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 2.75 }
    },
    leadingBlow: {
      name_en: "Leading Blow",
      name_jp: "リードブロー",
      desc: "Deals melee bash damage to one target. For every bind the target has, follows up with the corresponding Pugilist skill. For any ailment the target has, follows up with Corkscrew.",
      stats: ["STR"],
      dep: { addedBlow: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2.75 }
    },
    breather: {
      name_en: "Breather",
      name_jp: "インターバル",
      desc: "Removes binds and ailment from the user, and increases attack until the end of the next turn. Cannot be used if the user has no binds or ailments.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 4 }
    },
    faultBlocker: {
      name_en: "Fault Blocker",
      name_jp: "アームブロック",
      desc: "For 3 turns, increases ailment and bind resistance for the user's row.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    clinch: {
      name_en: "Clinch",
      name_jp: "クリンチ",
      desc: "Attempts to inflict head bind, arm bind, and leg bind on both the user and the target.",
      stats: ["LUC"],
      dep: { breather: 1, faultBlocker: 1 },
      maxLevel: 6,
      coords: { x: 3, y: 4.5 }
    },
    statusAtkUp: {
      name_en: "Status ATK Up",
      name_jp: "抑制攻撃ブースト",
      desc: "Increases the chance of inflicting binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    crossCounter: {
      name_en: "Cross Counter",
      name_jp: "クロスカウンター",
      desc: "This turn, when a party member on the user's row is attacked, counterattacks with melee bash damage and attempts to inflict the corresponding bind on the target. Does not activate if the counterattack cannot reach the enemy.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    thunderFist: {
      name_en: "Thunder Fist",
      name_jp: "雷神拳",
      desc: "Deals melee bash+volt damage to one target. If the attack does not kill the target, the user takes damage.",
      stats: ["STR"],
      dep: { fightingSpirit: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    lashOut: {
      name_en: "Lash Out",
      name_jp: "ラッシュアウト",
      desc: "Deals multiple instances of melee bash damage to one target. The number of hits is equal to the number of hits made on the previous turn. No matter how many attacks Lash Out makes, it will always count as 1 attack for the purpose of this skill.",
      stats: ["STR"],
      dep: { leadingBlow: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2.75 }
    },
    meditation: {
      name_en: "Meditation",
      name_jp: "瞑想",
      desc: "Until the end of the next turn, increases user's chance of inflicting binds and ailments.",
      stats: [],
      dep: { clinch: 3 },
      maxLevel: 4,
      coords: { x: 4, y: 4.5 }
    },
    ragingWaves: {
      name_en: "Raging Billows",
      name_jp: "怒涛",
      desc: "Increases damage dealt based on the number of binds and ailments the target has.",
      stats: [],
      dep: { meditation: 2 },
      maxLevel: 10,
      coords: { x: 5, y: 4.5 }
    },
    millionLash: {
      name_en: "Million Rush",
      name_jp: "ミリオンラッシュ",
      desc: "Normal attacks may hit 2-4 times if two weapons are equipped. Enables sub-weapon when this skill is learned.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    },
   resonanceBlow: {
      name_en: "Resonance Blow",
      name_jp: "レゾナンスブロー",
      desc: "Deals multiple instances of melee bash damage to one target. The number of hits increases based on the number of turns since Resonance Blow was last used.",
      stats: ["STR"],
      dep: { millionLash: 3 },
      maxLevel: 6,
      coords: { x: 5, y: 6 }
    }
  },
  Harbinger: {
    infiniteMiasma: {
      name_en: "Endless Armor",
      name_jp: "無限兵装",
      desc: "For 3 turns, Miasma Armor's duration will not decrease, and it cannot be removed.",
      unique: true,
      type: "Boost",
      stats: [],
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    miasmaTorrent: {
      name_en: "Miasma Tsunami",
      name_jp: "瘴気の激流",
      desc: "This turn, greatly reduces all enemies' attack, defense, evasion, action speed, and bind/ailment resistance.",
      unique: true,
      type: "Break",
      stats: [],
      dep: { infiniteMiasma: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    erodingMiasma: {
      name_en: "Eroding Miasma",
      name_jp: "削弱の瘴気",
      desc: "For a set number of turns, decreases all enemies' defense.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    stiflingMiasma: {
      name_en: "Stifling Miasma",
      name_jp: "繊弱の瘴気",
      desc: "For a set number of turns, decreases all enemies' attack.",
      stats: [],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 2 }
    },
    slowingMiasma: {
      name_en: "Sluggish Miasma",
      name_jp: "鈍弱の瘴気",
      desc: "For a set number of turns, decreases all enemies' evasion and action speed.",
      stats: [],
      dep: { erodingMiasma: 2, stiflingMiasma: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    paralyzingReap: {
      name_en: "Paralyzing Reap",
      name_jp: "痺止の鎌",
      desc: "Deals melee cut damage to one row. If Miasma Armor is active, attempts to inflict paralysis.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    toxicReap: {
      name_en: "Toxic Reap",
      name_jp: "惨毒の鎌",
      desc: "Deals melee cut damage to one row. If Miasma Armor is active, attempts to inflict poison.",
      stats: ["STR", "LUC"],
      dep: { paralyzingReap: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    miasmaArmor: {
      name_en: "Miasma Armor",
      name_jp: "瘴気の兵装",
      desc: "Puts the user in the Miasma Armor state for 3 turns. Increases action speed when Miasma Armor is active. At the start of battle, automatically puts the user in the Miasma Armor state.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4.5 }
    },
    endlessShroud: {
      name_en: "Endless Shroud",
      name_jp: "終わりなき衣",
      desc: "When the user uses a debuff skill, there's a chance to cast Miasma Armor automatically.",
      stats: [],
      dep: { miasmaArmor: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    atonement: {
      name_en: "Atonement",
      name_jp: "贖いの血",
      desc: "Requires Miasma Armor. Removes Miasma Armor to restore HP to all party members and attempt to remove their ailments.",
      stats: ["WIS"],
      dep: { miasmaArmor: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      name_jp: "採取",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    wiltingMiasma: {
      name_en: "Wilting Miasma",
      name_jp: "虚弱の瘴気",
      desc: "For a set number of turns, decreases all enemies' resistance to and rate of recovery from ailments.",
      stats: [],
      dep: { slowingMiasma: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    arrestingMiasma: {
      name_en: "Binding Miasma",
      name_jp: "縛弱の瘴気",
      desc: "For a set number of turns, decreases all enemies' resistance to and rate of recovery from binds.",
      stats: [],
      dep: { wiltingMiasma: 3 },
      maxLevel: 10,
      coords: { x: 3, y: 1.5 }
    },
    darknessReap: {
      name_en: "Darkness Reap",
      name_jp: "深闇の鎌",
      desc: "Deals melee cut damage to one row. If Miasma Armor is active, attempts to inflict blind.",
      stats: ["STR", "LUC"],
      dep: { toxicReap: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    chaosReap: {
      name_en: "Chaos Reap",
      name_jp: "禍乱の鎌",
      desc: "Deals melee cut damage to one row. If Miasma Armor is active, attempts to inflict panic.",
      stats: ["STR", "LUC"],
      dep: { darknessReap: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 3 }
    },
    blackShroud: {
      name_en: "Black Shroud",
      name_jp: "黒き衣",
      desc: "During Miasma Armor, increases defense.",
      stats: [],
      dep: { endlessShroud: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    soulTransfer: {
      name_en: "Soul Transfer",
      name_jp: "魂転移",
      desc: "Requires Miasma Armor. Removes Miasma Armor to attempt to revive all party members.",
      stats: ["WIS"],
      dep: { atonement: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    blackWave: {
      name_en: "Black Wave",
      name_jp: "黒き波動",
      desc: "At the end of the turn, if Miasma Armor is active, restores TP to the user.",
      stats: [],
      dep: { soulTransfer: 1 },
      maxLevel: 4,
      coords: { x: 3, y: 5 }
    },
    spiritAbsorb: {
      name_en: "Spirit Absorb",
      name_jp: "生気吸収",
      desc: "When the user uses a debuff skill, restores HP to the user. This restoration can heal beyond maximum HP. Overhealed HP will disappear at the end of the turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    statusAtkUp: {
      name_en: "Status ATK Up",
      name_jp: "抑制攻撃ブースト",
      desc: "Increases the chance of inflicting binds and ailments.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    deathsAsylum: {
      name_en: "Death Tolerance",
      name_jp: "死の耐性",
      desc: "Provides a chance to nullify debuffs and ailments on the user as they are inflicted.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    ephemeralReap: {
      name_en: "Ephemeral Reap",
      name_jp: "泡沫の鎌",
      desc: "Deals multiple instances of melee cut damage to one target. Number of hits increases based on the number of debuffs on the target.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    fatalReap: {
      name_en: "Fatal Reap",
      name_jp: "死の鎌",
      desc: "Deals melee cut damage to one target. Attempts to inflict instant death.",
      stats: ["STR", "LUC"],
      dep: { chaosReap: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    miasmaWall: {
      name_en: "Miasma Wall",
      name_jp: "瘴気の防壁",
      desc: "Requires Miasma Armor. Removes Miasma Armor to attempt to nullify binds and ailments against all party members, up to a set number of times.",
      stats: [],
      dep: { blackWave: 1 },
      maxLevel: 6,
      coords: { x: 4, y: 4.5 }
    },
    soulFixation: {
      name_en: "Spirit Barrier",
      name_jp: "霊魂固着",
      desc: "Requires Miasma Armor. Removes Miasma Armor to attempt to nullify instant death, stun and debuffs against all party members, up to a set number of times.",
      stats: [],
      dep: { blackWave: 1 },
      maxLevel: 6,
      coords: { x: 4, y: 5.5 }
    },
    residualMiasma: {
      name_en: "Enduring Armor",
      name_jp: "瘴気残留",
      desc: "Skills which remove Miasma Armor will instead reduce its duration by a set number of turns. If Miasma Armor's duration reaches 0 or less, it is removed.",
      stats: [],
      dep: { miasmaWall: 2, soulFixation: 2 },
      maxLevel: 4,
      coords: { x: 5, y: 5 }
    }
  }
};
