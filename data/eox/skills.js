let skills = {
  Hero: {
    braveheart: {
      name_en: "Braveheart",
      name_jp: "ブレイブハート",
      desc: "For 3 turns, increase the chance of afterimage creation and all damages of afterimage. The damage boost is only active while Force Boost is active.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    miracleEdge: {
      name_en: "Miracle Edge",
      name_jp: "ミラクルエッジ",
      desc: "Deals melee cut damage to all enemies, and restores HP to all party members. This can restore HP over maximum HP. The overhealed amount is removed at the end of turn.",
      unique: true,
      type: "Break",
      dep: { braveheart: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    afterimage: {
      name_en: "Afterimage",
      name_jp: "残影",
      desc: "When the user attacks with a skill, there's a chance to create an afterimage in an empty slot. The afterimage will attack with the same skill on the next turn, and vanish at the end of that turn. Does not activate for Chases or counterattacks.",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    mirageSword: {
      name_en: "Mirage Sword",
      name_jp: "ミラージュソード",
      desc: "Deals ranged cut damage to one target. Has a high chance to create afterimage.",
      dep: { afterimage: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    braveWide: {
      name_en: "Brave Wide",
      name_jp: "ブレイブワイド",
      desc: "Deals strong melee cut damage to one target. If this skill goes off before the target acts, including if the target could not act due to a bind or ailment, its range is extended to melee cut damage to all enemies.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    freezingSlash: {
      name_en: "Freezing Slash",
      name_jp: "凍砕斬",
      desc: "Deals melee cut+ice damage to one target, with splash damage.",
      dep: { braveWide: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    encouragement: {
      name_en: "Encouragement",
      name_jp: "鼓舞",
      desc: "When the user attacks with a skill, restore HP to all party members. HP restored is based on user's maxHP. Does not activate for links, chases or counterattacks.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    herosBonds: {
      name_en: "Hero's Bonds",
      name_jp: "勇者の絆",
      desc: "When all party members' HP is above a certain precentage, increase user's attack and action speed.",
      dep: {encouragement: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    shieldArts: {
      name_en: "Shield Arts",
      name_jp: "シールドアーツ",
      desc: "Deals melee bash damage to one target. It has a low action speed, but increases physical defense for all allies until it executes. Damage is based on user's shield's DEF.",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    clearMind: {
      name_en: "Clear Mind",
      name_jp: "心頭滅却",
      desc: "Remove binds and ailments and restore TP to the user. Cannot be used if user has no ailment or binds, and will not restore TP if they were cured prior to this skill being used.",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 5 }
    },
    chop: {
      name_en: "Chop",
      name_jp: "伐採",
      desc: "Occasionally gain more items when using Chop points.",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    shadowCharge: {
      name_en: "Shadow Charge",
      name_jp: "シャドウチャージ",
      desc: "Remove all afterimages. Until the end of next turn, increase user's attack and chance of creating afterimage. Number of afterimages consumed will not affect this skill's effect.",
      dep: { mirageSword: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    shadowBenefit: {
      name_en: "Shadow Benefit",
      name_jp: "恵影",
      desc: "When the user uses a skill while an afterimage is present, restore a precentage of the TP used for the skill to the user.",
      dep: { shadowCharge: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    shockSpark: {
      name_en: "Shock Spark",
      name_jp: "ショックスパーク",
      desc: "Deals melee cut damage to one target, and follow up with ranged volt damage to all enemies. The higher the target's cut resistance is, the higher the volt damage will be.",
      dep: { freezingSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    burstBlade: {
      name_en: "Burst Blade",
      name_jp: "バーストブレイド",
      desc: "Deals 2-3 instances of melee cut damage to one target. Number of hits increase based on the number of enemies present.",
      dep: { shockSpark: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    herosProof: {
      name_en: "Hero's Proof",
      name_jp: "勇者の証",
      desc: "When all party members' HP is below a certain precentage, increase user's defense and chance of being targetted.",
      dep: { herosBonds: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    greatCourage: {
      name_en: "Great Courage",
      name_jp: "大勇",
      desc: "When an ally whose HP is below a certain precentage is attacked, the user has a chance to cover that ally. This skill will prioritize user's afterimage.",
      dep: { herosProof: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    shieldMateria: {
      name_en: "Shield Materia",
      name_jp: "シールドマテリア",
      desc: "Deals melee bash damage to one target. It has a low action speed, but increases elemental defense for all allies until it executes. Damage is based on user's shield's DEF.",
      dep: { shieldArts: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 4 }
    },
    fervor: {
      name_en: "Fervor",
      name_jp: "気負い",
      desc: "Transfer binds and ailments on allies in user's row to the user and restore Force to the user. If no binds or ailments are tranferred, Force will not increase.",
      dep: { clearMind: 1 },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    newChallenger: {
      name_en: "New Challenger",
      name_jp: "新たな強敵",
      desc: "Immediately enters battle with increased chance of encountering rare breeds, and there is a chance of entering consecutive battles. Fails if current location has no encounters.",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    thickShadow: {
      name_en: "Thick Shadow",
      name_jp: "濃影",
      desc: "There is a chance for afterimages to not disappear at the end of turn.",
      dep: { shadowBenefit: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    actBreaker: {
      name_en: "Act Breaker",
      name_jp: "アクトブレイカー",
      desc: "Deals melee cut damage to one target. Attempts to inflict stun on the target. The higher the target's HP is, the higher the chance of stun is.",
      dep: { burstBlade: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    regimentRave: {
      name_en: "Regiment Rave",
      name_jp: "レジメントレイブ",
      desc: "At the end of turn, deals melee cut+fire damage to one target. Damage increases based on damage dealt to the target by all party members on this turn.",
      dep: { actBreaker: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 2 }
    },
    forceGifter: {
      name_en: "Force Gifter",
      name_jp: "フォースギフター",
      desc: "Deals melee cut damage to one target. Increase force for allies on the user's row instead of the user.",
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    forceSaver: {
      name_en: "Force Saver",
      name_jp: "フォースセイブ",
      desc: "When user's Force Boost times out, restores some Force to the user.",
      dep: { forceGifter: 3 },
      maxLevel: 4,
      coords: { x: 5, y: 3 }
    },
    guardRush: {
      name_en: "Guard Rush",
      name_jp: "ガードラッシュ",
      desc: "Reduce all damage to all party members for one turn, and deal melee bash damage to one target at the end of turn. Has a cooldown of 9 turns. Damage is based on user's shield's DEF and number of activations of damage reduction. If no damage reduction took place, the attack will not happen.",
      dep: { shieldMateria: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    }
  },
  Protector: {
    shieldProtect: {
      name_en: "Shield Protect",
      name_jp: "大盾の守護",
      desc: "For 3 turns, increase damage reduction from shield skills.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    perfectDefense: {
      name_en: "Perfect Defense",
      name_jp: "完全防御",
      desc: "This turn, completely negates all damaging attacks for the party.",
      unique: true,
      type: "Break",
      dep: { shieldProtect: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    frontGuard: {
      name_en: "Front Guard",
      name_jp: "フロントガード",
      desc: "Reduces physical damage to front row for one turn.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1 }
    },
    backGuard: {
      name_en: "Back Guard",
      name_jp: "バッグガード",
      desc: "Reduces physical damage to back row for one turn.",
      dep: { frontGuard: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 1 }
    },
    cellDivide: {
      name_en: "Cell Divide",
      name_jp: "セルディバイド",
      desc: "Covers one ally for one turn.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    fortify: {
      name_en: "Fortify",
      name_jp: "渾身ディフェンス",
      desc: "Increase user's defense for 3 turns. Higher level increases duration.",
      dep: { cellDivide: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    shieldSmite: {
      name_en: "Shield Smite",
      name_jp: "シールドスマイト",
      desc: "Deals melee bash damage to one target. Attempts to inflict arm bind. Damage is based on user's shield's DEF.",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 3 }
    },
    provoke: {
      name_en: "Provoke",
      name_jp: "挑発",
      desc: "Increase user's defense and chance of being targetted for 3 turns. Higher level increases duration.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    preProvoke: {
      name_en: "Pre-Provoke",
      name_jp: "先制挑発",
      desc: "If Provoke is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      dep: { provoke: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    healingWall: {
      name_en: "Healing Wall",
      name_jp: "ヒールウォール",
      desc: "When the user defends, restore HP to allies on user's row.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name_en: "Chop",
      name_jp: "伐採",
      desc: "Occasionally gain more items when using Chop points.",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    recoveryGuard: {
      name_en: "Recovery Guard",
      name_jp: "リカバリーガード",
      desc: "Remove binds for one row, and reduce physical damage to that row for one turn.",
      dep: { backGuard: 1 },
      maxLevel: 4,
      coords: { x: 2, y: 1 }
    },
    aegis: {
      name_en: "Aegis",
      name_jp: "決死の覚悟",
      desc: "There is a chance for user to survive fatal damage at 1 HP. Can activate once per battle at most.",
      dep: { fortify: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    shieldRush: {
      name_en: "Shield Rush",
      name_jp: "シールドラッシュ",
      desc: "Deals melee bash damage to all enemies. Reduce physical attack. Damage is based on user's shield's DEF.",
      dep: { shieldSmite: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    keepGuard: {
      name_en: "Keep Guard",
      name_jp: "キープガード",
      desc: "Reduce all damage to one ally until the end of next turn, and disables all shield skills until then.",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    physDefUp: {
      name_en: "Phys DEF Up",
      name_jp: "物理防御ブースト",
      desc: "Increase physical defense.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    elemDefUp: {
      name_en: "Elem DEF Up",
      name_jp: "属性防御ブースト",
      desc: "Increase elemental defense.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    fireWall: {
      name_en: "Fire Wall",
      name_jp: "ファイアガード",
      desc: "Reduce one instance of fire damage to all party members. Higher level upgrades reduction to null, then absorb.",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    iceWall: {
      name_en: "Ice Wall",
      name_jp: "フリーズガード",
      desc: "Reduce one instance of ice damage to all party members. Higher level upgrades reduction to null, then absorb.",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    voltWall: {
      name_en: "Volt Wall",
      name_jp: "ショックガード",
      desc: "Reduce one instance of volt damage to all party members. Higher level upgrades reduction to null, then absorb.",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    hpUp: {
      name_en: "HP Up",
      name_jp: "ＨＰブースト",
      desc: "Increase maximum HP.",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 0 }
    },
    healGuard: {
      name_en: "Heal Guard",
      name_jp: "ヒールガード",
      desc: "Restore HP for one row, and reduce physical damage to that row for one turn.",
      dep: { recoveryGuard: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    lineDivide: {
      name_en: "Line Divide",
      name_jp: "ラインディバイド",
      desc: "Cover one row for one turn.",
      dep: { aegis: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    autoguard: {
      name_en: "Autoguard",
      name_jp: "オートガード",
      desc: "When user is attacked, there is a chance to automatically reduce the damage.",
      dep: { lineDivide: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 2 }
    },
    shieldFlare: {
      name_en: "Shield Flare",
      name_jp: "シールドフレア",
      desc: "Until the end of next turn, when the user is attacked, counterattack with ranged fire damage. Damage is based on user's shield's DEF.",
      dep: { shieldRush: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    fullGuard: {
      name_en: "Full Guard",
      name_jp: "フルガード",
      desc: "Reduce all damage to all party members for one turn. Has a cooldown of 6 turns.",
      dep: { fireWall: 2, iceWall: 2, voltWall: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 5 }
    }
  },
  Medic: {
    steadyHands: {
      name_en: "Steady Hands",
      name_jp: "集中治療",
      desc: "For 3 turns, increase healing power and action speed of healing skills, and reduce their TP cost by half.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    medicalMiracle: {
      name_en: "Medical Miracle",
      name_jp: "超医術",
      desc: "Revives and removes ailment, binds and debuffs for all party members, and restore their HP.",
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
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1.5 }
    },
    lineHeal: {
      name_en: "Line Heal",
      name_jp: "ラインヒール",
      desc: "Restores HP to one row.",
      dep: { healing: 3 },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    patchUp: {
      name_en: "Patch Up",
      name_jp: "戦後手当",
      desc: "Restore HP to all allies at the end of battle.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    refresh: {
      name_en: "Refresh",
      name_jp: "リフレッシュ",
      desc: "Removes ailment for one ally. Higher level increases range to one row.",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 3 }
    },
    antibodies: {
      name_en: "Antibodies",
      name_jp: "抗体",
      desc: "Increase rate of recovery from binds and ailment for the user.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    revive: {
      name_en: "Revive",
      name_jp: "リザレクション",
      desc: "Revives one ally.",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    scavenge: {
      name_en: "Scavenge",
      name_jp: "博識",
      desc: "Increase item drop rate.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    headDrop: {
      name_en: "Head Drop",
      name_jp: "ヘッドドロップ",
      desc: "Deals melee bash damage to one target. Attempts to inflict head bind.",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      name_jp: "採取",
      desc: "Occasionally gain more items when using Take points.",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    delayedHeal: {
      name_en: "Delayed Heal",
      name_jp: "ディレイヒール",
      desc: "Restores HP to all party members at the start of next turn. Cannot be used on consecutive turns. Ineffective if user dies before skill activates.",
      dep: { lineHeal: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1.5 }
    },
    unbind: {
      name_en: "Unbind",
      name_jp: "バインドリカバリ",
      desc: "Removes binds for one ally. Higher level increases range to one row.",
      dep: { refresh: 2 },
      maxLevel: 4,
      coords: { x: 2, y: 3 }
    },
    groupTherapy: {
      name_en: "Group Therapy",
      name_jp: "一斉救護",
      desc: "For 3 turns, increase user`s healing skills` range, and decrease healing power and action speed. Higher level increases duration.",
      dep: { unbind: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    finalGift: {
      name_en: "Final Gift",
      name_jp: "最後の癒し",
      desc: "When the user dies, restores HP to all allies.",
      dep: { revive: 3 },
      maxLevel: 4,
      coords: { x: 2, y: 4 }
    },
    autoRevive: {
      name_en: "Auto-Revive",
      name_jp: "オートリザレクト",
      desc: "When an ally dies, there is a chance to automatically revive that ally.",
      dep: { finalGift: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    starDrop: {
      name_en: "Star Drop",
      name_jp: "スタードロップ",
      desc: "Deals melee bash damage to one target. Reduces physical defense for 3 turns.",
      dep: { headDrop: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    medicalRod: {
      name_en: "Medical Rod",
      name_jp: "メディカルロッド",
      desc: "Deals melee bash damage to one target. Reduces elemental defense for 3 turns.",
      dep: { starDrop: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    patrol: {
      name_en: "Patrol",
      name_jp: "警戒斥候",
      desc: "For a certain amount of steps, nullify damage and muddy floors, and greatly reduce other sources of damage while exploring.",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    elemDefUp: {
      name_en: "Elem DEF Up",
      name_jp: "属性防御ブースト",
      desc: "Increases elemental defense.",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    partyHeal: {
      name_en: "Party Heal",
      name_jp: "エリアヒール",
      desc: "Restores HP to all party members.",
      dep: { delayedHeal: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    chaseHeal: {
      name_en: "Chase Heal",
      name_jp: "チェイスヒール",
      desc: "For one turn, automatically restore HP to allies when they are attacked for a certain amount of times. Every time this skill activates, its chance of activating decreases.",
      dep: { delayedHeal: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    overheal: {
      name_en: "Overheal",
      name_jp: "オーバーヒール",
      desc: "Medic skills in battle can restore HP over party members` maximum HP by a certain precentage. The overhealed amount is removed at the end of turn.",
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    healDejaVu: {
      name_en: "Heal Deja Vu",
      name_jp: "ヒールデジャヴ",
      desc: "For 5 turns, at the end of each turn, all party members will receive again the effect of the last Medic active skill they received, provided that they received at least one Medic active skill while Heal Deja Vu is active. Higher level increases duration.",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    heavyStrike: {
      name_en: "Heavy Strike",
      name_jp: "ヘヴィストライク",
      desc: "Deals melee bash damage to one target.",
      dep: { medicalRod: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 5 }
    },
    staffMastery: {
      name_en: "Staff Mastery",
      name_jp: "杖マスタリー",
      desc: "Increase physical attack and maximum TP when a staff is equipped.",
      dep: { heavyStrike: 1 },
      maxLevel: 8,
      coords: { x: 5, y: 5 }
    }
  },
  Survivalist: {
    illusionStep: {
      name_en: "Illusion Step",
      name_jp: "夢幻陣形",
      desc: "For 3 turns, increase all party members' action speed and evasion.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    mirageArrow: {
      name_en: "Mirage Arrow",
      name_jp: "ミラージュアロー",
      desc: "Deals ranged stab damage to one target. Decreases accuracy and action speed of target.",
      unique: true,
      type: "Break",
      dep: { illusionStep: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    powerShot: {
      name_en: "Power Shot",
      name_jp: "パワーショット",
      desc: "Deals ranged stab damage to one target, with line piercing effects.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1.5 }
    },
    flameArrow: {
      name_en: "Flame Arrow",
      name_jp: "フレイムアロー",
      desc: "Deals ranged stab+fire damage to one target.",
      dep: { powerShot: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1.5 }
    },
    blindArrow: {
      name_en: "Blind Arrow",
      name_jp: "ブラインドアロー",
      desc: "Deals ranged stab damage to one target. Attempts to inflict blind.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    chainDance: {
      name_en: "Chain Dance",
      name_jp: "チェインダンス",
      desc: "For one turn, increase user`s evasion and chance of being targetted.",
      dep: { blindArrow: 3 },
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    patrol: {
      name_en: "Patrol",
      name_jp: "警戒斥候",
      desc: "For a certain amount of steps, nullify damage and muddy floors, and greatly reduce other sources of damage while exploring.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    riskPerception: {
      name_en: "Risk Perception",
      name_jp: "危機感知",
      desc: "There is a certain chance that blindsides will be negated.",
      dep: { patrol: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    resuscitate: {
      name_en: "Resuscitate",
      name_jp: "簡易手当",
      desc: "Restores HP to one ally. Can only be used in field. Higher level allows this skill to revive the target as well.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    sortingSkill: {
      name_en: "Sorting Skill",
      name_jp: "整頓術",
      desc: "Increases inventory size.",
      dep: { resuscitate: 3 },
      maxLevel: 10,
      coords: { x: 1, y: 5 }
    },
    naturalInstinct: {
      name_en: "Natural Instinct",
      name_jp: "野生の勘",
      desc: "Occasionally gain more items when using any gathering points.",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    flankShot: {
      name_en: "Flank Shot",
      name_jp: "フランクショット",
      desc: "Deals ranged stab damage to one row.",
      dep: { flameArrow: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    finishingArrow: {
      name_en: "Finishing Arrow",
      name_jp: "仕留めの一矢",
      desc: "When the user attacks a target whose HP is below a certain threshold, follow up with the user`s weapon. Does not activate for Links, chases or counterattacks.",
      dep: { flankShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    multiShot: {
      name_en: "Multi-Shot",
      name_jp: "ダブルショット",
      desc: "Deals 2 instances of ranged stab damage to one enemy.",
      dep: { flameArrow: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    dropShot: {
      name_en: "Drop Shot",
      name_jp: "ドロップショット",
      desc: "Deals ranged stab damage to one target. Damage increases if target is in the back row.",
      dep: { multiShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    trickStep: {
      name_en: "Trick Step",
      name_jp: "トリックステップ",
      desc: "For 3 turns, reduce accuracy of one row of enemies. Higher level increases duration.",
      dep: { chainDance: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    stalker: {
      name_en: "Stalker",
      name_jp: "警戒歩行",
      desc: "For a certain amount of steps, reduce encounter rate.",
      dep: { riskPerception: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    efficiency: {
      name_en: "Efficiency",
      name_jp: "エフィシエント",
      desc: "For 5 turns, increase HP restored by Medica and upgrades used by the user, and extend its range to one row.",
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    speedUp: {
      name_en: "Speed Up",
      name_jp: "素早さブースト",
      desc: "Increases accuracy, evasion and action speed.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    swapStep: {
      name_en: "Swap Step",
      name_jp: "アザーズステップ",
      desc: "Selected ally acts first this turn.",
      dep: { speedUp: 2 },
      maxLevel: 4,
      coords: { x: 3, y: 6 }
    },
    disablingShot: {
      name_en: "Disabling Shot",
      name_jp: "エイミングフット",
      desc: "When the user attacks with a bow skill, attempts to inflict leg bind.",
      dep: { finishingArrow: 1 },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    sagittariusShot: {
      name_en: "Sagittarius Shot",
      name_jp: "サジタリウスの矢",
      desc: "On the third turn after using this skill, deals ranged stab damage to one target at the start of the turn. Attempts to inflict stun. Ineffective if user dies before the skill activates.",
      dep: { dropShot: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    hazyShot: {
      name_en: "Hazy Shot",
      name_jp: "朧矢",
      desc: "Deals ranged stab damage to one target. Always hits. Can only be used if user has evaded an attack on the previous turn.",
      dep: { trickStep: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    naturesBounty: {
      name_en: "Nature's Bounty",
      name_jp: "自然の恩恵",
      desc: "Chance to obtain extra rare items when gathering.",
      dep: { stalker: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 4 }
    },
    scapegoat: {
      name_en: "Scapegoat",
      name_jp: "スケープゴート",
      desc: "Selected ally will cover all party members a certain amount of times this turn. Ineffective if the ally has leg bind.",
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    sneakAttack: {
      name_en: "Sneak Attack",
      name_jp: "奇襲",
      desc: "For a certain amount of steps, increase chance of preemptive attacks.",
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
    }
  },
  Ronin: {
    peerless: {
      name_en: "Peerless",
      name_jp: "無双",
      desc: "For 3 turns, stance duration will not decrease, and cannot be removed. In addition, the user gains the effect of all stances.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    issen: {
      name_en: "Issen",
      name_jp: "一閃",
      desc: "Deals ranged cut damage to all enemies. Attempts to inflict instant death. Chance of instant death is increased on targets at low HP.",
      unique: true,
      type: "Break",
      dep: { peerless: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    upperStance: {
      name_en: "Upper Stance",
      name_jp: "上段の構え",
      desc: "Increase attack when Upper Stance is active. At the start of battle, automatically assume the stance with highest level for 3 turns.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    upwardSlash: {
      name_en: "Upward Slash",
      name_jp: "逆袈裟",
      desc: "Deals melee cut damage to one target. Assume Upper Stance after use. Critical hit if used during Upper Stance.",
      dep: { upperStance: 1 },
      maxLevel: 4,
      coords: { x: 1, y: 1 }
    },
    clearStance: {
      name_en: "Clear Stance",
      name_jp: "青眼の構え",
      desc: "Increase defense and infliction rate for Ronin skills when Clear Stance is active. At the start of battle, automatically assume the stance with highest level for 3 turns.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    chargingThrust: {
      name_en: "Charging Thrust",
      name_jp: "貫突",
      desc: "Deals melee stab damage to one target. Assume Clear Stance after use. Critical hit if used during Clear Stance.",
      dep: { clearStance: 1 },
      maxLevel: 4,
      coords: { x: 1, y: 2 }
    },
    drawingStance: {
      name_en: "Drawing Stance",
      name_jp: "居合の構え",
      desc: "Increase accuracy, evasion and action speed when Drawing Stance is active. At the start of battle, automatically assume the stance with highest level for 3 turns.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    sheathStrike: {
      name_en: "Sheath Strike",
      name_jp: "鞘撃",
      desc: "Deals melee bash damage to one target. Assume Drawing Stance after use. Critical hit if used during Drawing Stance.",
      dep: { drawingStance: 1 },
      maxLevel: 4,
      coords: { x: 1, y: 3 }
    },
    airBlade: {
      name_en: "Air Blade",
      name_jp: "空刃",
      desc: "Deals ranged cut damage to one target. Critical hit if used during any stance.",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    armStrike: {
      name_en: "Arm Strike",
      name_jp: "小手討ち",
      desc: "Deals melee stab damage to one target. Attempts to inflict arm bind. Critical hit if used during any stance.",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gain more items when using Mine points.",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    breath: {
      name_en: "Breath",
      name_jp: "息吹",
      desc: "Restore HP to allies adjacent to the user.",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    helmSplitter: {
      name_en: "Helm Splitter",
      name_jp: "兜割り ",
      desc: "Requires Stance. Deals melee cut damage to one target. Low accuracy, ignores cut resistance. Reduce stance duration by 2 after use. Critical hit if used during Upper Stance.",
      dep: { upwardSlash: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    flameGrater: {
      name_en: "Flame Grater",
      name_jp: "卸し焔",
      desc: "Deals melee cut+fire damage to one target. Critical hit if used during Upper Stance.",
      dep: { helmSplitter: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    hazeSlash: {
      name_en: "Haze Slash",
      name_jp: "霞斬り",
      desc: "Requires Stance. Deals melee cut damage to one target. Attempts to inflict sleep. Reduce stance duration by 2 after use. Critical hit if used during Clear Stance.",
      dep: { chargingThrust: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    lightningStab: {
      name_en: "Lightning Stab",
      name_jp: "雷耀突き",
      desc: "Deals melee stab+volt damage to one target. Critical hit if used during Clear Stance.",
      dep: { hazeSlash: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    horizontalSlice: {
      name_en: "Horizontal Slice",
      name_jp: "横一文字",
      desc: "Requires Stance. Deals melee cut damage to one row. Reduce stance duration by 2 after use. Critical hit if used during Drawing Stance.",
      dep: { sheathStrike: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    frigidSlash: {
      name_en: "Frigid Slash",
      name_jp: "抜刀氷雪",
      desc: "Deals melee cut+ice damage to one target. Critical hit if used during Drawing Stance.",
      dep: { horizontalSlice: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    duel: {
      name_en: "Duel",
      name_jp: "果し合い",
      desc: "Increase damage when attacking enemies that the user attacked last turn.",
      dep: { airBlade: 2, armStrike: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4.5 }
    },
    physAtkUp: {
      name_en: "Phys ATK Up",
      name_jp: "物理攻撃ブースト",
      desc: "Increase physical attack.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    swallowStrike: {
      name_en: "Swallow Strike",
      name_jp: "ツバメがえし",
      desc: "Requires Stance. Deals 2 instances of melee cut damage to one target. Removes stance after use, and cannot use skill on the next turn. Critical hit if used during Upper Stance.",
      dep: { flameGrater: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    bluntingStab: {
      name_en: "Blunting Stab",
      name_jp: "鈍通し",
      desc: "Requires Stance. Deals melee stab damage to one target. Attempts to inflict petrify. Removes stance after use, and cannot use skill on the next turn. Critical hit if used during Clear Stance.",
      dep: { lightningStab: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    petalScatter: {
      name_en: "Petal Scatter",
      name_jp: "散華",
      desc: "Requires Stance. Deals ranged cut damage to all targets. Removes stance after use, and canont use skill on the next turn. Critical hit if used during Drawing Stance.",
      dep: { frigidSlash: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    proofOfMastery: {
      name_en: "Proof of Mastery",
      name_jp: "免許皆伝",
      desc: "Increase the effect of all stances.",
      dep: { },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    },
    risingSpirit: {
      name_en: "Rising Spirit",
      name_jp: "戦意高揚",
      desc: "At the end of turn, if a stance is active, restore TP to the user.",
      dep: { proofOfMastery: 2 },
      maxLevel: 4,
      coords: { x: 5, y: 4 }
    },
    speedUp: {
      name_en: "Speed Up",
      name_jp: "素早さブースト",
      desc: "Increase Accuracy, Evasion and Action Speed.",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    }
  },
  "War Magus": {
    warEdgePower: {
      name_en: "War Edge Power",
      name_jp: "巫剣の力",
      desc: "For 3 turns, War Edge skills can activate additional effects even on targets without an ailment.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    fairyRobe: {
      name_en: "Fairy Robe",
      name_jp: "大巫術：精霊衣",
      desc: "Removes ailment and binds for all party members, and restore their HP. This turn, negate all binds, ailments, stun, instant death and debuffs for all paty members.",
      unique: true,
      type: "Break",
      dep: { warEdgePower: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    warHeal: {
      name_en: "War Heal",
      name_jp: "巫術：再生",
      desc: "Restores HP to one ally at the start of turn, then at the end of turn.",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1.5 }
    },
    warHealLine: {
      name_en: "War Heal Line",
      name_jp: "巫術：再生帯",
      desc: "Restores HP to one row at the start of turn, then at the end of turn.",
      dep: { warHeal: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    randomDisease: {
      name_en: "Random Disease",
      name_jp: "巫術：乱疫",
      desc: "Attempts to inflict one of poison, paralyze, blind, sleep or curse on one target.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3.5 }
    },
    strengthSlash: {
      name_en: "Strength Slash",
      name_jp: "巫剣：霊攻衰斬",
      desc: "Deals melee cut damage to one target. Effective even on enemies with cut resistance. If target has an ailment, decrease their attack for 7 turns.",
      dep: { randomDisease: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    guardSlash: {
      name_en: "Guard Slash",
      name_jp: "巫剣：霊防衰斬",
      desc: "Deals melee cut damage to one target. Effective even on enemies with cut resistance. If target has an ailment, decrease their defense for 7 turns.",
      dep: { randomDisease: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    displace: {
      name_en: "Displace",
      name_jp: "巫術：転移",
      desc: "Removes ailment and binds on one ally, and attempts to inflict them on one enemy.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    vampire: {
      name_en: "Vampire",
      name_jp: "吸命",
      desc: "When user deals damage to an enemy with ailment, restore HP to user's row. Can only activate once per turn.",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      unique: true,
      name_jp: "採取",
      desc: "Occasionally gain more items when using Mine points.",
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    warEdgeMastery: {
      name_en: "War Edge Mastery",
      name_jp: "巫剣マスタリー",
      desc: "User can use sword skills with staff. Increases maximum TP when a sword is equipped; increases attack when a staff is equipped.",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    warRevive: {
      name_en: "War Revive",
      name_jp: "巫術：反魂",
      desc: "Revives one ally at the start of turn, then attempts to revive the ally again at the end of turn.",
      dep: { warHealLine: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    artery: {
      name_en: "Artery",
      name_jp: "巫術：脈動",
      desc: "For 3 turns, automatically restores HP for each party members when they act, once per turn.",
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    warResponse: {
      name_en: "War Response",
      name_jp: "巫術：呼応",
      desc: "For 3 turns, automatically restores HP for all party members when the debuffed enemy acts, once per turn.",
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 2 }
    },
    headcut: {
      name_en: "Headcut",
      name_jp: "巫剣：霊封頭斬",
      desc: "Deals melee cut damage to one target. Effective even on enemies with cut resistance. If target has an ailment, attempts to inflict head bind.",
      dep: { strengthSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    armcut: {
      name_en: "Armcut",
      name_jp: "巫剣：霊封腕斬",
      desc: "Deals melee cut damage to one target. Effective even on enemies with cut resistance. If target has an ailment, attempts to inflict arm bind.",
      dep: { guardSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    legcut: {
      name_en: "Legcut",
      name_jp: "巫剣：霊封脚斬",
      desc: "Deals melee cut damage to one target. Effective even on enemies with cut resistance. If target has an ailment, attempts to inflict leg bind.",
      dep: { headcut: 2, armcut: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3.5 }
    },
    rouse: {
      name_en: "Rouse",
      name_jp: "奮起",
      desc: "Increase user's force gain based on the number of enemies with binds.",
      dep: { vampire: 2 },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    hpUp: {
      name_en: "HP Up",
      name_jp: "ＨＰブースト",
      desc: "Increases maximum HP.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    statusDefUp: {
      name_en: "Status DEF Up",
      name_jp: "抑制防御ブースト",
      desc: "Decreases chance of being inflicted with binds and ailments.",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    warHealAll: {
      name_en: "War Heal All",
      name_jp: "巫術：再生陣",
      desc: "Restores HP to all party members at the start of turn, then at the end of turn.",
      dep: { artery: 2, warResponse: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 1.5 }
    },
    barrier: {
      name_en: "Barrier",
      name_jp: "巫術：結界",
      desc: "For one turn, there is a chance to nullify binds, ailments and debuffs for all party members, up to a certain number of times.",
      dep: { warHealAll: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 1.5 }
    },
    ailingSlash: {
      name_en: "Ailing Slash",
      name_jp: "巫剣：霊攻大斬",
      desc: "Deals melee cut damage to one target. Effective even on enemies with cut resistance. If target has an ailment, increases damage dealt.",
      dep: { legcut: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3.5 }
    },
    spiritDrain: {
      name_en: "Spirit Drain",
      name_jp: "吸気",
      desc: "When user deals damage to an enemy with both ailment and bind, restores TP to user's row. Can only activate once per turn.",
      dep: { rouse: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    plague: {
      name_en: "Plague",
      name_jp: "発疫",
      desc: "User's normal attack attempts to inflict poison, paralyze, blind, sleep and curse.",
      dep: { spiritDrain: 3 },
      maxLevel: 4,
      coords: { x: 5, y: 5 }
    },
    physAtkUp: {
      name_en: "Phys ATK Up",
      name_jp: "物理攻撃ブースト",
      desc: "Increase physical attack.",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    }
  },
  Highlander: {
    heroBattle: {
      name_en: "Hero Battle",
      name_jp: "英雄の戦い",
      desc: "For 3 turns, spear skills will have increased power, and restore HP to all party members based on damage dealt. Spear skills that have activated instant death will still restore HP based on damage that would have been dealt.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    gaeBolg: {
      name_en: "Gae Bolg",
      name_jp: "ゲイボルグ",
      desc: "Deals ranged stab damage to all enemies, and restore TP to self based on damage dealt.",
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
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    spearAssist: {
      name_en: "Spear Assist",
      name_jp: "スピアインボルブ",
      desc: "Deals melee stab damage to one target. If an elemental attack is used by an ally beforehand, add that element to the attack and increase its damage. If more than one elemental attack was used, use the element of the last elemental attack before Spear Assist's activation.",
      dep: { longThrust: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    turningTide: {
      name_en: "Turning Tide",
      name_jp: "ハーベスト",
      desc: "When the user defeats an enemy, restores HP to all party members.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 2.5 }
    },
    drainingThrust: {
      name_en: "Draining Thrust",
      name_jp: "シングルスラスト",
      desc: "Consumes user's HP to deal melee stab damage to enemy front row.",
      dep: { turningTide: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    legionThrust: {
      name_en: "Legion Thrust",
      name_jp: "レギオンスラスト",
      desc: "Consumes HP of all allies other than the user to deal melee stab damage to enemy front row.",
      dep: { turningTide: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    spiritShield: {
      name_en: "Spirit Shield",
      name_jp: "不可視の霊盾",
      desc: "Consumes user's HP to increase elemental defense for one row for 3 turns. Higher level increases duration.",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    bloodVeil: {
      name_en: "Blood Veil",
      name_jp: "ブラッドベール",
      desc: "When the user loses HP, increase defense until the end of turn.",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gain more items when using Mine points.",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    hpUp: {
      name_en: "HP Up",
      name_jp: "ＨＰブースト",
      desc: "Increases maximum HP.",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    headPierce: {
      name_en: "Head Pierce",
      name_jp: "ブレインレンド",
      desc: "Deals melee stab damage to one target. Attempts to inflict head bind and instant death.",
      dep: { spearAssist: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    drainingBurst: {
      name_en: "Draining Burst",
      name_jp: "シングルバースト",
      desc: "Consumes user's HP to deal melee stab damage to all enemies.",
      dep: { drainingThrust: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    delayedCharge: {
      name_en: "Delayed Charge",
      name_jp: "ディレイチャージ",
      desc: "Consumes user's HP. 2 turns after using this skill, deals melee stab damage to one target at the end of turn. Damage is increased based on the number of turns passed before its activation. Ineffective if user dies before the skill activates.",
      dep: { },
      maxLevel: 10,
      coords: { x: 3, y: 2 }
    },
    legionBurst: {
      name_en: "Legion Burst",
      name_jp: "レギオンバースト",
      desc: "Consumes HP of all allies other than the user to deal melee stab damage to all enemies.",
      dep: { legionThrust: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    bloodFortune: {
      name_en: "Blood Fortune",
      name_jp: "グッドラック",
      desc: "Consumes all party member's HP to increase their infliction rates of binds and ailments for 3 turns.",
      dep: { spiritShield: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    battleInstincts: {
      name_en: "Battle Instinct",
      name_jp: "防衛本能",
      desc: "At the start of battle, there is a chance to cast a buff on all party members that negates ailment once for 3 turns. Cannot activate if another ally activated it first.",
      dep: { bloodFortune: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    bloodyOffense: {
      name_en: "Bloody Offense",
      name_jp: "ブラッドウェポン",
      desc: "For 3 turns, one row of allies will have increased attack, but lose HP every time they act. Higher level increases duration.",
      dep: { bloodVeil: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    bloodlust: {
      name_en: "Bloodlust",
      name_jp: "血の暴走",
      desc: "When the user loses HP, there is a chance that the user will automatically attack with their weapon.",
      dep: { bloodyOffense: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 5 }
    },
    physDefUp: {
      name_en: "Phys DEF Up",
      name_jp: "物理防御ブースト",
      desc: "Increases physical defense.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    spearReversal: {
      name_en: "Spear Reversal",
      name_jp: "スピアリバーサル",
      desc: "Deals melee stab damage to one target. Damage is increased if target has higher precentage of HP remaining than the user.",
      dep: { headPierce: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    crossCharge: {
      name_en: "Cross Charge",
      name_jp: "クロスチャージ",
      desc: "Consumes user's HP to deal melee stab damage to one target. If currently charging for Delayed Charge, activates it and increases Cross Charge's damage.",
      dep: { delayedCharge: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    legionCharge: {
      name_en: "Legion Charge",
      name_jp: "レギオンチャージ",
      desc: "Consumes HP of all allies other than the user to deal melee stab damage to one target.",
      dep: { legionBurst: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 3 }
    },
    alliedBonds: {
      name_en: "Allied Bonds",
      name_jp: "絆の恩恵",
      desc: "If user's skill consumed HP of allies on user's row, restore their TP at the end of turn.",
      dep: { legionCharge: 2 },
      maxLevel: 4,
      coords: { x: 5, y: 3 }
    },
    blackSabbath: {
      name_en: "Black Sabbath",
      name_jp: "ブラックサバス",
      desc: "Deals ranged almighty damage to all enemies, and restores all party member's HP based on damage dealt.",
      dep: { bloodlust: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    physAtkUp: {
      name_en: "Phys ATK Up",
      name_jp: "物理攻撃ブースト",
      desc: "Increase physical attack.",
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
    }
  },
  Gunner: {
    actionBoost: {
      name_en: "Action Boost",
      name_jp: "アクトブースト",
      desc: "For 3 turns, all gun skills will activate twice. The second activation will have reduced power, but no TP cost.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    supremeBolt: {
      name_en: "Supreme Bolt",
      name_jp: "至高の魔弾",
      desc: "Deals ranged stab damage to one target. Attempts to stun the target with high chance of success.",
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
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    spreadShot: {
      name_en: "Spread Shot",
      name_jp: "拡散弾",
      desc: "Deals ranged stab damage to one target, with splash damage.",
      dep: { rapidFire: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    legSnipe: {
      name_en: "Leg Snipe",
      name_jp: "レッグスナイプ",
      desc: "Deals ranged stab damage to one target. Always hits. Attempts to inflict leg bind.",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 2 }
    },
    armSnipe: {
      name_en: "Arm Snipe",
      name_jp: "アームスナイプ",
      desc: "Deals ranged stab damage to one target. Always hits. Attempts to inflict arm bind.",
      dep: { legSnipe: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    coverFire: {
      name_en: "Cover Fire",
      name_jp: "後方支援",
      desc: "When user defends while in back row, restore HP to front row.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    shellShock: {
      name_en: "Shell Shock",
      name_jp: "後方撹乱",
      desc: "For one turn, reduce attack, defense, accuracy and evasion for enemies in back row, and attempts to inflict stun on them.",
      dep: { coverFire: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    medicBullet: {
      name_en: "Medic Bullet",
      name_jp: "ドラッグバレット",
      desc: "Restores HP and removes ailment for one ally.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    popFlares: {
      name_en: "Pop Flares",
      name_jp: "照明弾",
      desc: "For 3 turns, increase accuracy for all allies.",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gain more items when using Mine points.",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    leadingShot: {
      name_en: "Leading Shot",
      name_jp: "陽動射撃",
      desc: "Deals ranged stab damage to one row, and reduce their evasion.",
      dep: { spreadShot: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    wildShot: {
      name_en: "Wild Shot",
      name_jp: "掃射",
      desc: "Deals ranged stab damage to all enemies.",
      dep: { leadingShot: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    headSnipe: {
      name_en: "Head Snipe",
      name_jp: "ヘッドスナイプ",
      desc: "Deals ranged stab damage to one target. Always hits. Attempts to inflict head bind.",
      dep: { armSnipe: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    actQuick: {
      name_en: "Act Quick",
      name_jp: "クイックアクト",
      desc: "Until the end of next turn, reduce TP usage and increase action speed.",
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 3 }
    },
    chargedShot: {
      name_en: "Charged Shot",
      name_jp: "チャージショット",
      desc: "Deals ranged stab damage to one target. Low action speed, and the user's defense lowers until the skill activates.",
      dep: { actQuick: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    preemptiveShell: {
      name_en: "Preemptive Shell",
      name_jp: "先制撹乱",
      desc: "If Shell Shock is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      dep: { shellShock: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    autoFlare: {
      name_en: "Auto Flare",
      name_jp: "先制照明弾",
      desc: "If Pop Flares is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      dep: { popFlares: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    penetrator: {
      name_en: "Penetrator",
      name_jp: "ペネトレイター",
      desc: "When attacking a single target, there is a chance that line-piercing effects will be added. Does not activate for skills with multiple instances of damage.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    tpUp: {
      name_en: "TP Up",
      name_jp: "ＴＰブースト",
      desc: "Increases maximum TP.",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    ricochet: {
      name_en: "Ricochet",
      name_jp: "跳弾",
      desc: "Deals 2-5 instances of ranged stab damage to random targets. Low accuracy. Higher level increases number of attacks.",
      dep: { wildShot: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    chargedFire: {
      name_en: "Charged Fire",
      name_jp: "チャージフレイム",
      desc: "Deals ranged stab+fire damage to one target. Low action speed, and the user's defense lowers until the skill activates.",
      dep: { chargedShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    chargedIce: {
      name_en: "Charged Ice",
      name_jp: "チャージアイス",
      desc: "Deals ranged stab+ice damage to one target. Low action speed, and the user's defense lowers until the skill activates.",
      dep: { chargedShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3 }
    },
    chargedVolt: {
      name_en: "Charged Volt",
      name_jp: "チャージサンダー",
      desc: "Deals ranged stab+volt damage to one target. Low action speed, and the user's defense lowers until the skill activates.",
      dep: { chargedShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 4 }
    },
    physAtkUp: {
      name_en: "Phys ATK Up",
      name_jp: "物理攻撃ブースト",
      desc: "Increases physical attack.",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    doubleAction: {
      name_en: "Double Action",
      name_jp: "ダブルアクション",
      desc: "Attack skills have a chance of activating twice. Does not activate for links, chases and counterattacks.",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    }
  },
  Sovereign: {
    victoryVow: {
      name_en: "Victory Vow",
      name_jp: "勝利への誓い",
      desc: "For 3 turns, increase Order skills' range to all party members, and reduce their TP cost by half.",
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
      unique: true,
      type: "Break",
      dep: { victoryVow: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    attackOrder: {
      name_en: "Attack Order",
      name_jp: "攻撃の号令",
      desc: "For 3 turns, increases attack for one row. Higher level increases duration.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    fireArms: {
      name_en: "Fire Arms",
      name_jp: "ファイアアームズ",
      desc: "For 3 turns, imbues one row of allies' weapons with fire, and increase their fire-elemental attack. Higher level increases duration.",
      dep: { attackOrder: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    freezeArms: {
      name_en: "Freeze Arms",
      name_jp: "フリーズアームズ",
      desc: "For 3 turns, imbues one row of allies' weapons with ice, and increase their ice-elemental attack. Higher level increases duration.",
      dep: { attackOrder: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    shockArms: {
      name_en: "Shock Arms",
      name_jp: "ショックアームズ",
      desc: "For 3 turns, imbues one row of allies' weapons with volt, and increase their volt-elemental attack. Higher level increases duration.",
      dep: { attackOrder: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    guardOrder: {
      name_en: "Guard Order",
      name_jp: "防御の号令",
      desc: "For 3 turns, increases defense for one row. Higher level increases duration.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    reinforce: {
      name_en: "Reinforce",
      name_jp: "リインフォース",
      desc: "When user casts a buff, restores HP to all affected allies.",
      dep: { guardOrder: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    royalVeil: {
      name_en: "Royal Veil",
      name_jp: "ロイヤルベール",
      desc: "At the end of turn, if user's HP is full, restore HP to all party members. Only one instance of this skill can activate per turn.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    monarchMarch: {
      name_en: "Monarch March",
      name_jp: "キングスマーチ",
      desc: "During exploration, restore HP to all allies for every 3 steps taken.",
      dep: { royalVeil: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      unique: true,
      name_jp: "採取",
      desc: "Occasionally gain more items when using Take points.",
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    negotiation: {
      name_en: "Negotiation",
      name_jp: "エクスチェンジ",
      desc: "Removes the oldest buff and debuff from one ally, and restore HP and TP to them based on the number of removals.",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    majesty: {
      name_en: "Majesty",
      name_jp: "王の威厳",
      desc: "Once per turn, when user is damaged while having a buff active, restore HP to self.",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 0 }
    },
    royalLineage: {
      name_en: "Royal Lineage",
      name_jp: "王家の血統",
      desc: "When the user is buffed, restore TP to self. Does not activate if the buff negated a debuff.",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 0 }
    },
    elementalBombI: {
      name_en: "Elemental Bomb I",
      name_jp: "エレメントボムⅠ",
      desc: "Removes elemental imbue from one ally to deal ranged damage of that element to all enemies.",
      dep: { fireArms: 1, freezeArms: 1, shockArms: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    rallyOrder: {
      name_en: "Rally Order",
      name_jp: "覇気の号令",
      desc: "For 3 turns, increases maximum HP for one row. Higher level increases duration.",
      dep: { reinforce: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3.5 }
    },
    protectOrder: {
      name_en: "Protect Order",
      name_jp: "庇護の号令",
      desc: "For 3 turns, restores HP at the end of each turn for one row of allies. Higher level increases duration.",
      dep: { reinforce: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4.5 }
    },
    preventOrder: {
      name_en: "Prevent Order",
      name_jp: "予防の号令",
      desc: "For 3 turns, negates binds or ailments once for one row of allies. Higher level increases duration.",
      dep: { rallyOrder: 2, protectOrder: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    pairOrder: {
      name_en: "Pair Order",
      name_jp: "ペアオーダー",
      desc: "This turn, allies with buffs will restore TP based on damage taken when they are attacked.",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    healOrder: {
      name_en: "Heal Order",
      name_jp: "ヒールオーダー",
      desc: "This turn, allies with buffs will restore HP based on damage dealt when they attack. Attacks that activated instant death will still activate this skill based on the damage it would have dealt.",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    statusDefUp: {
      name_en: "Status DEF Up",
      name_jp: "抑制防御ブースト",
      desc: "Decreases chance of being inflicted with binds and ailments.",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 0 }
    },
    elementalBombII: {
      name_en: "Elemental Bomb II",
      name_jp: "エレメントボムⅡ",
      desc: "Removes elemental imbue from one ally to deal 3 instances of ranged damage of that element to random enemies.",
      dep: { elementalBombI: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    clearance: {
      name_en: "Clearance",
      name_jp: "クリアランス",
      desc: "Removes all buffs and debuffs from all allies and enemies, and restore HP and TP to all allies based on the number of removals.",
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 3 }
    },
    dauntlessOrder: {
      name_en: "Dauntless Order",
      name_jp: "不屈の号令",
      desc: "For 3 turns, one row of allies may endure fatal damage once with a certain amount of HP. Higher level increases duration.",
      dep: { preventOrder: 1 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    lastOrder: {
      name_en: "Last Order",
      name_jp: "ラストオーダー",
      desc: "Removes all buffs from self to increase attack and defense of all allies this turn. Can only be used if user has 3 buffs.",
      dep: { pairOrder: 2, healOrder: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5.5 }
    },
    reorder: {
      name_en: "Re-Order",
      name_jp: "リオーダー",
      desc: "When user removes buffs from self, there is a chance for the same buffs to be added to the user. Does not activate if the buff is timed out, removed by another ally, or negated by a debuff.",
      dep: { lastOrder: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 5.5 }
    }
  },
  Ninja: {
    insolence: {
      name_en: "Insolence",
      name_jp: "不忍",
      desc: "For 3 turns, increase user's evasion and chance of being targetted.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    ninpoPoisonMist: {
      name_en: "Ninpo: Poison Mist",
      name_jp: "忍法　毒霧",
      desc: "Attempts to inflict poison on all enemies.",
      unique: true,
      type: "Break",
      dep: { insolence: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    ninpoDaggers: {
      name_en: "Ninpo: Daggers",
      name_jp: "忍法　含針",
      desc: "Deals ranged stab damage to 3 random targets. Can hit each target once at most. Attempts to inflict sleep.",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    ninpoCaltrops: {
      name_en: "Ninpo: Caltrops",
      name_jp: "忍法　撒菱",
      desc: "This turn, when selected row is attacked, counterattack with ranged slash damage and attempts to inflict poison.",
      dep: { ninpoDaggers: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    shadowBind: {
      name_en: "Shadow Bind",
      name_jp: "影縫",
      desc: "Deals melee cut damage to one target. Attempts to inflict leg bind.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    boneCrusher: {
      name_en: "Bone Crusher",
      name_jp: "骨砕き",
      desc: "Deals melee bash damage to one target. Reduces physical defense.",
      dep: { shadowBind: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    acrobatics: {
      name_en: "Acrobatics",
      name_jp: "軽業",
      desc: "When the user evades an attack, restores TP to self.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4 }
    },
    concealment: {
      name_en: "Concealment",
      name_jp: "潜伏",
      desc: "Increases user's evasion.",
      dep: { acrobatics: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    ninpoMirage: {
      name_en: "Ninpo: Mirage",
      name_jp: "忍法　陽炎",
      desc: "Creates a decoy of self in an empty slot.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name_en: "Chop",
      unique: true,
      name_jp: "伐採",
      desc: "Occasionally gain more items when using Chop points.",
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    ninpoMastery: {
      name_en: "Ninpo Mastery",
      name_jp: "忍びの心得",
      desc: "Increases attack. At max level, melee attacks will not lose damage even if user is in the back row.",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 6 }
    },
    ninpoMirror: {
      name_en: "Ninpo: Mirror",
      name_jp: "忍法　水鏡",
      desc: "Attempts to inflict ailment and binds present on one enemy to all enemies.",
      dep: { ninpoCaltrops: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    foxDrop: {
      name_en: "Fox Drop",
      name_jp: "飯綱",
      desc: "Deals melee cut damage to one target. Attempts to inflict petrify.",
      dep: { boneCrusher: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    hawkStrike: {
      name_en: "Hawk Strike",
      name_jp: "鷹乃羽",
      desc: "Deals 2-3 instances of melee cut damage to random targets.",
      dep: { foxDrop: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    selfDestruct: {
      name_en: "Self Destruct",
      name_jp: "肉弾",
      desc: "Once in battle, when the user is killed by an enemy attack, counterattacks with ranged fire damage.",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    ninpoClone: {
      name_en: "Ninpo: Clone",
      name_jp: "忍法　分身",
      desc: "Consumes a precentage of user's HP and TP to create a clone in an empty slot. Force Boost and Force Break are unusable while a clone is active.",
      dep: { selfDestruct: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    beheading: {
      name_en: "Beheading",
      name_jp: "首切",
      desc: "Normal attacks have a chance to inflict instant death.",
      dep: { concealment: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    ninpoFlight: {
      name_en: "Ninpo: Flight",
      name_jp: "忍法　猿飛",
      desc: "This turn, user has a high chance of evading physical attacks.",
      dep: { },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    autoMirage: {
      name_en: "Auto Mirage",
      name_jp: "先制陽炎",
      desc: "If Ninpo: Mirage is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      dep: { ninpoMirage: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    statusAtkUp: {
      name_en: "Status ATK Up",
      name_jp: "抑制攻撃ブースト",
      desc: "Increase chance of inflicting binds and ailments.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    ninpoShock: {
      name_en: "Ninpo: Shock",
      name_jp: "忍法　驚忍",
      desc: "Attempts to inflict panic on all enemies.",
      dep: { ninpoMirror: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    eyeForAnEye: {
      name_en: "Eye for an Eye",
      name_jp: "意趣返し",
      desc: "If the user has evaded an attack on the previous turn, increase chance of inflicting ailments",
      dep: { ninpoShock: 2 },
      maxLevel: 6,
      coords: { x: 5, y: 1 }
    },
    schadenfreude: {
      name_en: "Schadenfreude",
      name_jp: "幸災楽禍",
      desc: "Deals melee cut damage to one target. Always hits. If target has an ailment, increase user's Force.",
      dep: { hawkStrike: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    drawingSlice: {
      name_en: "Drawing Slice",
      name_jp: "多元抜刀",
      desc: "Coordinates with body doubles to deal 2-3 instances of melee damage to random targets. Body doubles will disappear after use.",
      dep: { schadenfreude: 2, ninpoClone: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 2.5 }
    },
    ninpoSmoke: {
      name_en: "Ninpo: Smoke",
      name_jp: "忍法　雲隠",
      desc: "Consumes user's HP to increase user's evasion greatly for 3 turns.",
      dep: { ninpoFlight: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    },
    smokePowder: {
      name_en: "Smoke Powder",
      name_jp: "煙の末",
      desc: "Reduces TP costs. Will not reduce cost to 0.",
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 5 }
    }
  },
  Zodiac: {
    astrologersAxis: {
      name_en: "Astrologer's Axis",
      name_jp: "占星時軸",
      desc: "For 3 turns, Zodiac attack skills will have increased power, and restore half of their TP cost to the user.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    astralSign: {
      name_en: "Astral Sign",
      name_jp: "アストロサイン",
      desc: "Deals ranged fire+ice+volt damage to all enemies. On this turn, all allies' TP cost will be reduced to 0.",
      unique: true,
      type: "Break",
      dep: { astrologersAxis: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    ethericGleam: {
      name_en: "Etheric Gleam",
      name_jp: "エーテルの輝き",
      desc: "For 3 turns, increases elemental attack for one row.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    fireStar: {
      name_en: "Fire Star",
      name_jp: "炎の星術",
      desc: "Deals ranged fire damage to one target, with splash damage.",
      dep: { ethericGleam: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    iceStar: {
      name_en: "Ice Star",
      name_jp: "氷の星術",
      desc: "Deals ranged ice damage to one target, with line-piercing effects.",
      dep: { ethericGleam: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    voltStar: {
      name_en: "Volt Star",
      name_jp: "雷の星術",
      desc: "Deals ranged volt damage to one row.",
      dep: { ethericGleam: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    singularity: {
      name_en: "Singularity",
      name_jp: "特異点定理",
      desc: "Increases damage dealt when hitting weaknesses.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4.5 }
    },
    focusEther: {
      name_en: "Focus Ether",
      name_jp: "エーテル圧縮",
      desc: "Until the end of next turn, Zodiac attack skills will hit only one target, but deal increased damage.",
      dep: { singularity: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    ethericReturn: {
      name_en: "Etheric Return",
      name_jp: "リターンエーテル",
      desc: "When the user kills an enemy, restores TP to self.",
      dep: { singularity: 3 },
      maxLevel: 4,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gain more items when using Mine points.",
      unique: true,
      name_jp: "採掘",
      desc: "Occasionally gain more items when using Mine points.",
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    horoscope: {
      name_en: "Horoscope",
      name_jp: "星体観測",
      desc: "For a certain number of turns, reduces encounter rate.",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    etherMastery: {
      name_en: "Ether Mastery",
      name_jp: "エーテルマスター",
      desc: "Increases damage of Zodiac attack skills.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 0 }
    },
    tpUp: {
      name_en: "TP Up",
      name_jp: "ＴＰブースト",
      desc: "Increases maximum TP.",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 0 }
    },
    binaryFire: {
      name_en: "Binary Fire",
      name_jp: "炎の連星術",
      desc: "Deals ranged fire damage to all enemies.",
      dep: { fireStar: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    binaryIce: {
      name_en: "Binary Ice",
      name_jp: "氷の連星術",
      desc: "Deals ranged ice damage to all enemies.",
      dep: { iceStar: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    binaryVolt: {
      name_en: "Binary Volt",
      name_jp: "雷の連星術",
      desc: "Deals ranged volt damage to all enemies.",
      dep: { voltStar: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 3 }
    },
    restoreEther: {
      name_en: "Restore Ether",
      name_jp: "レストアエーテル",
      desc: "Increases attack based on number of TP spent on the previous turn. Does not activate if TP spent last turn is below a certain threshold.",
      dep: { focusEther: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    antiEther: {
      name_en: "Anti-Ether",
      name_jp: "アンチエーテル",
      desc: "Provides a chance to nullify elemental attacks for user's row.",
      dep: { restoreEther: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    darkEther: {
      name_en: "Dark Ether",
      name_jp: "ダークエーテル",
      desc: "This turn, reduce TP usage for one row.",
      dep: { ethericReturn: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    ethericShoot: {
      name_en: "Etheric Shoot",
      name_jp: "エーテルシュート",
      desc: "Deals ranged, INT-based damage to one enemy with user's weapon.",
      dep: { darkEther: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    fireProphecy: {
      name_en: "Fire Prophecy",
      name_jp: "炎の先見術",
      desc: "Prevents fire-elemental attacks from one enemy. If an attack is prevented, increase user's attack until the end of next turn.",
      dep: { binaryFire: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 1 }
    },
    iceProphecy: {
      name_en: "Ice Prophecy",
      name_jp: "氷の先見術",
      desc: "Prevents ice-elemental attacks from one enemy. If an attack is prevented, increase user's attack until the end of next turn.",
      dep: { binaryIce: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 2 }
    },
    voltProphecy: {
      name_en: "Volt Prophecy",
      name_jp: "雷の先見術",
      desc: "Prevents volt-elemental attacks from one enemy. If an attack is prevented, increase user's attack until the end of next turn.",
      dep: { binaryVolt: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 3 }
    },
    freeEnergy: {
      name_en: "Free Energy",
      name_jp: "ＴＰカット",
      desc: "Provides a chance to reduce user's TP usage to 0.",
      dep: { fireProphecy: 1, iceProphecy: 1, voltProphecy: 1 },
      maxLevel: 6,
      coords: { x: 5, y: 2 }
    },
    spreadEther: {
      name_en: "Spread Ether",
      name_jp: "多段式エーテル",
      desc: "Until the end of next turn, Zodiac attack skills will deal reduced damage, but hit 2-5 times to random targets. Meteo will instead hit 6-15 times.",
      dep: { antiEther: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 4 }
    },
    meteor: {
      name_en: "Meteor",
      name_jp: "メテオ",
      desc: "Deals 2-5 instances of ranged bash damage to random targets.",
      dep: { horoscope: 3, ethericShoot: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 5.5 }
    }
  },
  Farmer: {
    itemAgain: {
      name_en: "Item Again",
      name_jp: "アイテムアゲイン",
      desc: "For 3 turns, any items used will take effect twice. The second activation will not consume another item.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    finalTrick: {
      name_en: "Final Trick",
      name_jp: "最後の秘策",
      desc: "Fully restore all allies' force gauge, and any broken force gauges have a chance of be repaired.",
      unique: true,
      type: "Break",
      dep: { itemAgain: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sympathyPain: {
      name_en: "Sympathy Pain",
      name_jp: "怪我の功名",
      desc: "Attempts to inflict ailment and binds on user to all enemies. This will not remove them from the user.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    strangeSeeds: {
      name_en: "Strange Seeds",
      name_jp: "不思議な種",
      desc: "At the end of this turn, attempts to inflict one of head bind, arm bind and leg bind to all enemies.",
      dep: { sympathyPain: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    playPossum: {
      name_en: "Play Possum",
      name_jp: "鳴かずば討たれず",
      desc: "For 3 turns, decreases the chance of being targetted for one ally.",
      dep: { sympathyPain: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    keenEye: {
      name_en: "Keen Eye",
      name_jp: "探知マスター",
      desc: "For a certain number of steps, show treasure chests, hidden passages, staircases, FOEs and gather points on the minimap.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    searchSkill: {
      name_en: "Search Skill",
      name_jp: "探索術",
      desc: "During exploration, provides a chance to receive gatherable items when walking.",
      dep: { keenEye: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    flee: {
      name_en: "Flee",
      name_jp: "猛進逃走",
      desc: "Consumes HP from all party members to attempt to flee the battle and return to the last used staircase or geomagnetic pole. Does not consume HP if fleeing failed.",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    slapAwake: {
      name_en: "Slap Awake",
      name_jp: "応急蘇生",
      desc: "Revives one ally. Can only be used in field.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    harvestry: {
      name_en: "Harvestry",
      unique: true,
      name_jp: "収穫マスター",
      desc: "Occasionally gain more items when using any gathering points.",
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    earthsBounty: {
      name_en: "Earth's Bounty",
      name_jp: "大自然の恵み",
      desc: "Increase experience gain while user is alive.",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 6 }
    },
    rottenEggs: {
      name_en: "Rotten Eggs",
      name_jp: "弱り目に祟り目",
      desc: "For 3 turns, decreases attack of all enemies. Effect is stronger on enemies with an ailment.",
      dep: { strangeSeeds: 3, playPossum: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 1.5 }
    },
    persistence: {
      name_en: "Persistence",
      name_jp: "五分の魂",
      desc: "At the end of turn, user has a chance of automatically reviving.",
      dep: { rottenEggs: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 1.5 }
    },
    wasteNot: {
      name_en: "Waste Not",
      name_jp: "解体マスター",
      desc: "Increases item drop rate.",
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 2.5 }
    },
    strokeOfLuck: {
      name_en: "Stroke of Luck",
      name_jp: "もっけの幸い",
      desc: "During exploration, provides a chance to receive consumable items when walking.",
      dep: { searchSkill: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    rainOrShin: {
      name_en: "Rain or Shine",
      name_jp: "アメニモマケズ",
      desc: "For a certain amount of steps, nullify damage and muddy floors, and greatly reduce other sources of damage while exploring.",
      dep: { flee: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    safeStroll: {
      name_en: "Safe Stroll",
      name_jp: "安全歩行",
      desc: "For a certain amount of steps, reduce encounter rate.",
      dep: { rainOrShin: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    sharingIsCaring: {
      name_en: "Sharing is Caring",
      name_jp: "御裾分け",
      desc: "When the user uses TP, restore TP to other allies on the same row.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    braveHeart: {
      name_en: "Brave Heart",
      name_jp: "怖いもの知らず",
      desc: "If the user is in front row and at full HP, restore TP at the end of turn.",
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 5 }
    },
    survivalSkills: {
      name_en: "Survival Skills",
      name_jp: "生存の知恵",
      desc: "Restore HP and TP to all party members when gathering.",
      dep: { earthsBounty: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    lullaby: {
      name_en: "Lullaby",
      name_jp: "子守唄",
      desc: "Inflicts sleep on the user and attempts to inflict sleep on all enemies.",
      dep: { persistence: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    songOfLabour: {
      name_en: "Song of Labour",
      name_jp: "労作歌",
      desc: "During exploration, restore TP to all allies for every 12 steps taken.",
      dep: { lullaby: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 1.5 }
    },
    dissection: {
      name_en: "Dissection",
      name_jp: "解体の恩恵",
      desc: "When the user kills an enemy, restore Force to all party members.",
      dep: { wasteNot: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 2.5 }
    },
    harvestFestival: {
      name_en: "Harvest Festival",
      name_jp: "収穫祭",
      desc: "Deals melee cut damage to all enemies. Increases damage dealt and attempts to inflict instant death on enemy with binds.",
      dep: { },
      maxLevel: 10,
      coords: { x: 4, y: 3.5 }
    },
    naturesBounty: {
      name_en: "Nature's Bounty",
      name_jp: "自然の恩恵",
      desc: "Chance to obtain extra rare items when gathering.",
      dep: { survivalSkills: 2 },
      maxLevel: 4,
      coords: { x: 4, y: 6 }
    },
    doubleChop: {
      name_en: "Double Chop",
      name_jp: "二毛作",
      desc: "When gathering, there is a chance to be able to immediately gather again from the same spot. Can only activate once per gather.",
      dep: { naturesBounty: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 6 }
    }
  },
  Shogun: {
    fullCombatForm: {
      name_en: "Full Combat Form",
      name_jp: "力戦陣形",
      desc: "For 3 turns, increase maximum HP and attack for all party members.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    bodyDouble: {
      name_en: "Body Double",
      name_jp: "影武者",
      desc: "This turn, all party members will negate any hostile action once.",
      unique: true,
      type: "Break",
      dep: { fullCombatForm: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    parryingBlade: {
      name_en: "Parrying Blade",
      name_jp: "払い弐刀",
      desc: "Increase physical defense when two weapons are equipped. Enables sub weapon when this skill is learned.",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    spiritFlow: {
      name_en: "Spirit Flow",
      name_jp: "谺流し",
      desc: "Deals melee damage to one target with equipped Katana at the start of turn. If two weapons are equipped, attacks again with the other weapon after the target acts.",
      dep: { parryingBlade: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    counterCommand: {
      name_en: "Counter Command",
      name_jp: "斬月居合陣",
      desc: "This turn, when selected ally is attacked, all front row allies will counterattack with their weapons. Does not activate against counterattacks.",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    boltSlash: {
      name_en: "Bolt Slash",
      name_jp: "雷切",
      desc: "Deals melee cut+volt damage to one target.",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    sight: {
      name_en: "Sight",
      name_jp: "無明の極",
      desc: "Increase user's attack at night or when user is blinded.",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    greatGeneral: {
      name_en: "Great General",
      name_jp: "大武辺者",
      desc: "For 3 turns, increase physical attack and chance of being targetted for one ally.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    assassinGathering: {
      name_en: "Assassin Gathering",
      name_jp: "刺客寄せ",
      desc: "For a certain number of steps, increase encounter rate and experience gain from defeating enemies.",
      dep: { greatGeneral: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      unique: true,
      name_jp: "採取",
      desc: "Occasionally gain more items when using Take points.",
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    moraleBoost: {
      name_en: "Morale Boost",
      name_jp: "士気回復",
      desc: "When the user is revived, restore HP to all allies.",
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 6 }
    },
    twinSparrow: {
      name_en: "Twin Sparrow",
      name_jp: "双燕",
      desc: "Deals melee damage to one target with the user's weapon. If two weapons are equipped, this skill will hit twice. First hit will be from the katana, while the second hit will be from the other weapon.",
      dep: { spiritFlow: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    baitCommand: {
      name_en: "Bait Command",
      name_jp: "据え虎の陣",
      desc: "This turn, when the user is attacked, all allies other than the user will counterattack with their weapons. Does not activate against counterattacks.",
      dep: { counterCommand: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 2 }
    },
    blitzCommand: {
      name_en: "Blitz Command",
      name_jp: "乱れ竜の陣",
      desc: "All allies other than the user will attack one target with their weapons.",
      dep: { baitCommand: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2 }
    },
    morningStar: {
      name_en: "Morning Star",
      name_jp: "明星",
      desc: "Deals melee cut damage to one row. Damage increases at daytime.",
      dep: { boltSlash: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    dusk: {
      name_en: "Dusk",
      name_jp: "禍時",
      desc: "Deals melee cut damage to one target. Damage increases at nighttime.",
      dep: { sight: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    bloodyLance: {
      name_en: "Bloody Lance",
      name_jp: "血染めの朱槍",
      desc: "When the user kills an enemy or ally, increase user's attack.",
      dep: { dusk: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    reincarnation: {
      name_en: "Reincarnation",
      name_jp: "仮死再生",
      desc: "On the turn when user's HP becomes 0, there is a chance that they may revive on the end of that turn.",
      dep: { },
      maxLevel: 10,
      coords: { x: 3, y: 5 }
    },
    fellingBird: {
      name_en: "Felling Bird",
      name_jp: "飛鳥落とし",
      desc: "Increase damage dealt based on the number of attacks user had made on this turn.",
      dep: { },
      maxLevel: 10,
      coords: { x: 2, y: 6 }
    },
    ritualSuicide: {
      name_en: "Ritual Suicide",
      name_jp: "切腹",
      desc: "Restore HP to all other allies with a chance to revive them, but the user dies. User's death cannot be prevented via any means.",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    fiveRingSword: {
      name_en: "Five Ring Sword",
      name_jp: "五輪の剣",
      desc: "Deals 2-4 instances of melee damage to random targets with user's weapon. If two weapons are equipped, the number of hits will double, and will alternate between the katana and the other weapon.",
      dep: { twinSparrow: 4 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    reprisalCommand: {
      name_en: "Reprisal Command",
      name_jp: "報復射撃陣",
      desc: "This turn, when selected row is attacked, all allies equipped with a bow or gun will counterattack with their weapons. Does not activate against counterattacks.",
      dep: { blitzCommand: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    warriorMight: {
      name_en: "Warrior Might",
      name_jp: "一騎当千",
      desc: "This turn, user will chase all attacks from all allies, but will lose HP for every chase. The HP loss can kill the user. Links, chases and counterattacks cannot be chased. Only one chase will be made for each action.",
      dep: { reprisalCommand: 2 },
      maxLevel: 10,
      coords: { x: 5, y: 2 }
    },
    curseStrike: {
      name_en: "Curse Strike",
      name_jp: "祟り打ち",
      desc: "Deals melee bash damage to one target. Attempts to inflict curse and arm bind.",
      dep: { bloodyLance: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    mercyKill: {
      name_en: "Mercy Kill",
      name_jp: "介錯",
      desc: "When any enemy or ally receives an attack, and their HP becomes below a certain precentage, there is a chance to inflict instant death to them.",
      dep: { curseStrike: 3 },
      maxLevel: 4,
      coords: { x: 5, y: 4 }
    },
    foreHonor: {
      name_en: "Fore Honor",
      name_jp: "先陣の名誉",
      desc: "For 3 turns, increase physical attack and action speed and decrease physical defense for one ally.",
      dep: { reincarnation: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    }
  },
  Landsknecht: {
    trinity: {
      name_en: "Trinity",
      name_jp: "三位一体",
      desc: "For 3 turns, increase user's attack, accuracy and action speed.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    fullCharge: {
      name_en: "Full Charge",
      name_jp: "フルチャージ",
      desc: "This turn, user is fully immune to any hostile effects from enemies. Until the end of next turn, increase user's attack and action speed.",
      unique: true,
      type: "Break",
      dep: { trinity: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    proficiency: {
      name_en: "Proficiency",
      name_jp: "剣士の心得",
      desc: "After the user makes an attack, all further attacks on the enemies attacked by the user will have increased damage and accuracy.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 1 }
    },
    sonicRaid: {
      name_en: "Sonic Raid",
      name_jp: "ソニックレイド",
      desc: "Deals melee cut/stab damage to one target at the start of turn.",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    blazingLink: {
      name_en: "Blazing Link",
      name_jp: "リンクフレイム",
      desc: "Deals melee cut/stab+fire damage to one target. If the target is attacked again after, follow up with another attack of the same element. Chance of follow up decreases with each hit.",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    freezingLink: {
      name_en: "Freezing Link",
      name_jp: "リンクフリーズ",
      desc: "Deals melee cut/stab+ice damage to one target. If the target is attacked again after, follow up with another attack of the same element. Chance of follow up decreases with each hit.",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 3 }
    },
    electricLink: {
      name_en: "Electric Link",
      name_jp: "リンクサンダー",
      desc: "Deals melee cut/stab+volt damage to one target. If the target is attacked again after, follow up with another attack of the same element. Chance of follow up decreases with each hit.",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    vanguard: {
      name_en: "Vanguard",
      name_jp: "ヴァンガード",
      desc: "For 5 turns, decreases user's physical defense, and increases user's physical attack and action speed.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    powerBreak: {
      name_en: "Power Break",
      name_jp: "パワーブレイク",
      desc: "Deals melee bash damage to one target. Decreases attack for 3 turns. Damage is based on user's shield's DEF.",
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gain more items when using Mine points.",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    physDefUp: {
      name_en: "Phys DEF Up",
      name_jp: "物理防御ブースト",
      desc: "Increases physical defense.",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    doubleStrike: {
      name_en: "Double Strike",
      name_jp: "ダブルストライク",
      desc: "Deals 2 instances of melee cut/stab damage to one target.",
      dep: { sonicRaid: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    spiralSlice: {
      name_en: "Spiral Slice",
      name_jp: "ラウンドソード",
      desc: "Deals melee cut damage to one target, with splash damage.",
      dep: { doubleStrike: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 0.5 }
    },
    penetrate: {
      name_en: "Penetrate",
      name_jp: "ペネトレイト",
      desc: "Deals melee stab damage to one target, with line-piercing effects.",
      dep: { doubleStrike: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1.5 }
    },
    improvedLink: {
      name_en: "Improved Link",
      name_jp: "リンクプラス",
      desc: "For 3 turns, increases the number of follow-ups that can be made from link skills used by the user, as well as chance of follow-up. Each action may trigger at most 4 links.",
      dep: { blazingLink: 3, freezingLink: 3, electricLink: 3 },
      maxLevel: 4,
      coords: { x: 2, y: 3 }
    },
    linkSmash: {
      name_en: "Link Smash",
      name_jp: "リンクスマッシュ",
      desc: "Link follow-up attacks can deal critical hits.",
      dep: { improvedLink: 1 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    guardBreak: {
      name_en: "Guard Break",
      name_jp: "ガードブレイク",
      desc: "Deals melee bash damage to one target. Decreases defense for 3 turns. Damage is based on user's shield's DEF.",
      dep: { powerBreak: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    speedBreak: {
      name_en: "Speed Break",
      name_jp: "スピードブレイク",
      desc: "Deals melee bash damage to one target. Decreases evasion and action speed for 3 turns. Damage is based on user's shield's DEF.",
      dep: { guardBreak: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    initiative: {
      name_en: "Initiative",
      name_jp: "先駆けの功名",
      desc: "When attacking before any enemies act, increase damage and accuracy.",
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 6 }
    },
    statusDefUp: {
      name_en: "Status DEF Up",
      name_jp: "抑制防御ブースト",
      desc: "Decreases chance of being inflicted with binds and ailments.",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    swordTempest: {
      name_en: "Sword Tempest",
      name_jp: "ソードテンペスト",
      desc: "Deals melee cut damage to one target. High power at the cost of speed.",
      dep: { spiralSlice: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 0.5 }
    },
    swiftStab: {
      name_en: "Swift Stab",
      name_jp: "ハヤブサ突き",
      desc: "Deals 2-3 instances of melee stab damage to random targets.",
      dep: { penetrate: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    linkMastery: {
      name_en: "Link Mastery",
      name_jp: "リンクマスタリ",
      desc: "For each link follow-up made this turn, increase the damage of subsquent link follow-ups.",
      dep: { linkSmash: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 3 }
    },
    linkEnd: {
      name_en: "Link End",
      name_jp: "リンクエンド",
      desc: "Deals melee cut/stab damage to one target. Damage is based on the number of link follow-ups made on the previous turn.",
      dep: { linkMastery: 2 },
      maxLevel: 6,
      coords: { x: 5, y: 3 }
    },
    fullBreak: {
      name_en: "Full Break",
      name_jp: "フルブレイク",
      desc: "Deals melee bash damage to one target. Damage is increased if the target has a Break skill debuff. Damage is based on user's shield's DEF.",
      dep: { speedBreak: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    singleDevote: {
      name_en: "Single Devote",
      name_jp: "シングルデボート",
      desc: "Increase damage when fewer elements are used in an attack.",
      dep: { },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
    }
  },
  Nightseeker: {
    killerStance: {
      name_en: "Killer Stance",
      name_jp: "キラースタンス",
      desc: "For 3 turns, increase attack and ailment infliction chance for user.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    disaster: {
      name_en: "Disaster",
      name_jp: "ディザスター",
      desc: "Deals melee cut damage to one target. If target has an ailment, increase the ailment's duration.",
      unique: true,
      type: "Break",
      dep: { killerStance: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sandThrow: {
      name_en: "Sand Throw",
      name_jp: "盲目の投刃",
      desc: "Deals ranged cut damage to one target. Attempts to inflict blind on the target.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    sleepThrow: {
      name_en: "Sleep Throw",
      name_jp: "睡眠の投刃",
      desc: "Deals ranged cut damage to one target. Attempts to inflict sleep on the target.",
      dep: { sandThrow: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 1.5 }
    },
    shadowCloak: {
      name_en: "Shadow Cloak",
      name_jp: "ハイドクローク",
      desc: "For 3 turns, negates one physical attack made on the user.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 3 }
    },
    bidingSlice: {
      name_en: "Biding Slice",
      name_jp: "ディレスタブ",
      desc: "Deals melee cut damage to one target. If user is not damaged until the end of turn, deals melee cut damage to the same target again.",
      dep: { shadowCloak: 1 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    iceKnife: {
      name_en: "Ice Knife",
      name_jp: "アイスブラッシュ",
      desc: "Deals cut+ice damage to one target.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    proficiency: {
      name_en: "Proficiency",
      name_jp: "夜賊の心得",
      desc: "Increase damage dealt to enemies with ailment.",
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 4 }
    },
    decoySign: {
      name_en: "Decoy Sign",
      name_jp: "デコイサイン",
      desc: "For 3 turns, increase chance of being targetted for one ally.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    bladeFlurry: {
      name_en: "Blade Flurry",
      name_jp: "追影の刃",
      desc: "User can attack with both weapons if two weapons are equipped. Damage of the second attack is based on this skill's level. Enables sub weapon when this skill is learned.",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    chop: {
      name_en: "Chop",
      name_jp: "伐採",
      desc: "Occasionally gain more items when using Chop points.",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    curseThrow: {
      name_en: "Curse Throw",
      name_jp: "呪いの投刃",
      desc: "Deals ranged cut damage to one target. Attempts to inflict curse on the target.",
      dep: { sleepThrow: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    nerveThrow: {
      name_en: "Nerve Throw",
      name_jp: "麻痺の投刃",
      desc: "Deals ranged cut damage to one target. Attempts to inflict paralyze on the target.",
      dep: { curseThrow: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    shadowBite: {
      name_en: "Shadow Bite",
      name_jp: "シャドウバイト",
      desc: "Deals melee cut damage to one target. Damage is increased if target has an ailment.",
      dep: { sleepThrow: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2 }
    },
    autoCloak: {
      name_en: "Auto-Cloak",
      name_jp: "先制クローク",
      desc: "If Shadow Cloak is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      dep: { bidingSlice: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    backstab: {
      name_en: "Backstab",
      name_jp: "バックスタブ",
      desc: "Deals melee cut damage to one target. Attempts to inflict head bind. If user has Shadow Cloak, add Almighty element to the attack and increase damage.",
      dep: { autoCloak: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 3 }
    },
    sneakAttack: {
      name_en: "Sneak Attack",
      name_jp: "奇襲",
      desc: "For a certain amount of steps, increase chance of preemptive attacks.",
      dep: { proficiency: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    foulMastery: {
      name_en: "Foul Mastery",
      name_jp: "闇討マスタリ",
      desc: "Increase attack every time user inflicts an ailment. Bonus stacks up to 3 times, and is reset if user dies.",
      dep: { sneakAttack: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    speedUp: {
      name_en: "Speed Up",
      name_jp: "素早さブースト",
      desc: "Increases accuracy, evasion and action speed.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    spreadThrow: {
      name_en: "Spread Throw",
      name_jp: "スプレッドスロー",
      desc: "Until the end of next turn, increase throw skills' range to all targets, as well as their infliction rate.",
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 6 }
    },
    venomThrow: {
      name_en: "Venom Throw",
      name_jp: "猛毒の投刃",
      desc: "Deals ranged cut damage to one target. Attempts to inflict poison on the target.",
      dep: { nerveThrow: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    swiftEdge: {
      name_en: "Swift Edge",
      name_jp: "スウィフトソード",
      desc: "Deals 3-5 instances of melee cut damage to one target. If the target has an ailment, increase maximum number of attacks.",
      dep: { shadowBite: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    assassinate: {
      name_en: "Assassinate",
      name_jp: "アサシネイション",
      desc: "Deals melee cut damage to one target. If user has Shadow Cloak, attempts to inflict instant death on the target.",
      dep: { backstab: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    returnCloak: {
      name_en: "Return Cloak",
      name_jp: "リターンクローク",
      desc: "When Shadow Cloak negates an attack, there is a chance that Shadow Cloak will be automatically cast on the user.",
      dep: { assassinate: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 3 }
    },
    followTrace: {
      name_en: "Follow Trace",
      name_jp: "追影の残滓",
      desc: "After using an attack skill, if the attack's target has an ailment, there is a chance to repeat the skill.",
      dep: { bladeFlurry: 4 },
      maxLevel: 10,
      coords: { x: 4, y: 5 }
    },
    autoSpread: {
      name_en: "Auto-Spread",
      name_jp: "先制スプレッド",
      desc: "If Spread Throw is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      dep: { spreadThrow: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 6 }
    }
  },
  Arcanist: {
    circleProtection: {
      name_en: "Circle Protection",
      name_jp: "方陣護持",
      desc: "For 3 turns, increase user's binds and ailment infliction chance, and prevents circles from being removed.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    releasalSpell: {
      name_en: "Releasal Spell",
      name_jp: "解魔の札",
      desc: "Remove buffs and accumulative resistance for all enemies.",
      unique: true,
      type: "Break",
      dep: { circleProtection: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    circleBoon: {
      name_en: "Circle Boon",
      name_jp: "陣回復",
      desc: "If a circle is active, restore HP to all party members at the end of turn.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 1 }
    },
    dismissHeal: {
      name_en: "Dismiss Heal",
      name_jp: "破陣：命脈活性",
      desc: "Dismisses the current circle and restore HP to all party members.",
      dep: { circleBoon: 1 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    chainCircle: {
      name_en: "Chain Circle",
      name_jp: "腕封の方陣",
      desc: "Activates a circle that attempts to inflict arm bind on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    snareCircle: {
      name_en: "Snare Circle",
      name_jp: "脚封の方陣",
      desc: "Activates a circle that attempts to inflict leg bind on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      dep: { chainCircle: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    nerveCircle: {
      name_en: "Nerve Circle",
      name_jp: "麻痺の方陣",
      desc: "Activates a circle that attempts to inflict paralyze on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    curseCircle: {
      name_en: "Curse Circle",
      name_jp: "呪いの方陣",
      desc: "Activates a circle that attempts to inflict curse on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      dep: { nerveCircle: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    bracingWalk: {
      name_en: "Bracing Walk",
      name_jp: "回復歩行",
      desc: "During exploration, restore HP to all allies for every 3 steps taken.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4 }
    },
    proficiency: {
      name_en: "Proficiency",
      name_jp: "方陣師の心得",
      desc: "Restores TP to the user when a circle is dismissed or times out.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name_en: "Chop",
      unique: true,
      name_jp: "伐採",
      desc: "Occasionally gain more items when using Chop points.",
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    dismissRevive: {
      name_en: "Dismiss Revive",
      name_jp: "破陣：再起活性",
      desc: "Dismisses the current circle to attempt to revive one row of allies.",
      dep: { dismissHeal: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    dismissBlow: {
      name_en: "Dismiss Blow",
      name_jp: "破陣：亜空絞破",
      desc: "Dismisses the current circle to deal ranged almighty damage to one target.",
      dep: { dismissRevive: 3 },
      maxLevel: 10,
      coords: { x: 3, y: 1 }
    },
    hoodCircle: {
      name_en: "Hood Circle",
      name_jp: "頭封の方陣",
      desc: "Activates a circle that attempts to inflict head bind on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      dep: { snareCircle: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    sleepCircle: {
      name_en: "Sleep Circle",
      name_jp: "催眠の方陣",
      desc: "Activates a circle that attempts to inflict sleep on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      dep: { curseCircle: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    charmEye: {
      name_en: "Charm Eye",
      name_jp: "魅了の邪眼",
      desc: "For 3 turns, decreases attack of all enemies.",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    atrophicEye: {
      name_en: "Atrophic Eye",
      name_jp: "衰身の邪眼",
      desc: "For 3 turns, decreases defense of all enemies.",
      dep: { charmEye: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    statusAtkUp: {
      name_en: "Status ATK Up",
      name_jp: "抑制攻撃ブースト",
      desc: "Increase chance of inflicting binds and ailments.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    tameGround: {
      name_en: "Tame Ground",
      name_jp: "地脈操作",
      desc: "For a certain amount of steps, nullify damage and muddy floors, and greatly reduce other sources of damage while exploring.",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    wardingMist: {
      name_en: "Warding Mist",
      name_jp: "退魔の霧",
      desc: "Provides a chance to nullify binds, ailments and stun for user's row.",
      dep: { },
      maxLevel: 4,
      coords: { x: 3, y: 6 }
    },
    dismissBlast: {
      name_en: "Dismiss Blast",
      name_jp: "破陣：亜空鳴動",
      desc: "Dismisses the current circle to deal ranged almighty damage to all enemies.",
      dep: { dismissBlow: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 1 }
    },
    circleMastery: {
      name_en: "Circle Mastery",
      name_jp: "方陣マスタリ",
      desc: "Increase the power of dismiss skills.",
      dep: { dismissBlast: 3 },
      maxLevel: 6,
      coords: { x: 5, y: 1 }
    },
    poisonCircle: {
      name_en: "Poison Circle",
      name_jp: "毒の方陣",
      desc: "Activates a circle that attempts to inflict poison on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      dep: { sleepCircle: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2.5 }
    },
    chaosCircle: {
      name_en: "Chaos Circle",
      name_jp: "幻惑の方陣",
      desc: "Activates a circle that attempts to inflict panic on all enemies at the end of each turn for 3 turns. Existing circle will be overwritten, and the circle is removed if the user dies.",
      dep: { sleepCircle: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
    },
    dismissTremor: {
      name_en: "Dismiss Tremor",
      name_jp: "破陣：大地振盪",
      desc: "Dismisses the current circle to attempt to inflict stun on all enemies.",
      dep: { poisonCircle: 3, chaosCircle: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 3 }
    },
    tpReturn: {
      name_en: "TP Return",
      name_jp: "ＴＰリターン",
      desc: "Restores TP to self when user inflicts a bind, ailment or stun. Inflicting something on multiple enemies will not increase the effect of this skill.",
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 6 }
    }
  },
  Imperial: {
    ignition: {
      name_en: "Ignition",
      name_jp: "イグニッション",
      desc: "For 3 turns, user will not enter overheat cooldown.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    conversion: {
      name_en: "Conversion",
      name_jp: "コンバージョン",
      desc: "Restore TP to user. This can restore TP over maximum TP. The overhealed TP will disappear at the end of battle, or when user dies.",
      unique: true,
      type: "Break",
      dep: { ignition: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sharpEdge: {
      name_en: "Sharp Edge",
      name_jp: "シャープエッジ",
      desc: "Activation skill. Deals melee cut damage to one target. Reduces overheat cooldown by 1 turn.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 1 }
    },
    naturalEdge: {
      name_en: "Natural Edge",
      name_jp: "ナチュラルエッジ",
      desc: "Activation skill. Deals melee damage to one target with user's weapon.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    bloodEdge: {
      name_en: "Blood Edge",
      name_jp: "ブラッドエッジ",
      desc: "Connecting skill. Deals melee cut damage to one target. Restores HP to user based on the amount of damage dealt. Can only be used if an activation skill is used on the previous turn.",
      dep: { sharpEdge: 2, naturalEdge: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1.5 }
    },
    rearGuard: {
      name_en: "Rear Guard",
      name_jp: "リアガード",
      desc: "For 3 turns, increases defense for one ally, but that ally will move last each turn.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    assaultDrive: {
      name_en: "Assault Drive",
      name_jp: "アサルトドライブ",
      desc: "Deals melee cut damage to one target, and enters overheat cooldown for 7 turns. Cannot be used during cooldown. Low action speed, and the user's defense lowers until the skill activates.",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 4 }
    },
    heatSink: {
      name_en: "Heat Sink",
      name_jp: "強制排熱",
      desc: "Reduces overheat cooldown by 2 turns. Can only be used during cooldown.",
      dep: { assaultDrive: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 3.5 }
    },
    overheatGuard: {
      name_en: "Overheat Guard",
      name_jp: "過熱の守り",
      desc: "During overheat cooldown, increase user's defense.",
      dep: { assaultDrive: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 4.5 }
    },
    avenger: {
      name_en: "Avenger",
      name_jp: "アベンジャー",
      desc: "When an ally dies, restores HP to user.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    mine: {
      name_en: "Mine",
      unique: true,
      name_jp: "採掘",
      desc: "Occasionally gain more items when using Mine points.",
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    massiveEdge: {
      name_en: "Massive Edge",
      name_jp: "マッシブエッジ",
      desc: "Activation skill. Deals melee cut damage to one target, with splash damage.",
      dep: { bloodEdge: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    coolEdge: {
      name_en: "Cool Edge",
      name_jp: "クールエッジ",
      desc: "Connecting skill. Deals melee cut damage to one target. Reduces overheat cooldown by 2 turns. Can only be used if an activation skill is used on the previous turn.",
      dep: { massiveEdge: 2 },
      maxLevel: 4,
      coords: { x: 3, y: 1 }
    },
    tripEdge: {
      name_en: "Trip Edge",
      name_jp: "トリップエッジ",
      desc: "Activation skill. Deals melee cut damage to one target. Attempts to inflict leg bind.",
      dep: { bloodEdge: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    impulseEdge: {
      name_en: "Impulse Edge",
      name_jp: "インパルスエッジ",
      desc: "Connecting skill. Deals melee cut damage to one target. Restores TP to the user. Can only be used if an activation skill is used on the previous turn.",
      dep: { tripEdge: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2 }
    },
    intercooler: {
      name_en: "Intercooler",
      name_jp: "インタークーラー",
      desc: "Increase the damage of Drive skills. Increasing this skill's level will also reduce the duration of overheat cooldown.",
      dep: { heatSink: 1, overheatGuard: 1 },
      maxLevel: 10,
      coords: { x: 2, y: 4 }
    },
    flameDrive: {
      name_en: "Flame Drive",
      name_jp: "フレイムドライブ",
      desc: "Deals melee cut+fire damage to one target, and enters overheat cooldown for 8 turns. Cannot be used during cooldown. Low action speed, and the user's defense lowers until the skill activates.",
      dep: { intercooler: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    freezeDrive: {
      name_en: "Freeze Drive",
      name_jp: "フリーズドライブ",
      desc: "Deals melee cut+ice damage to one target, and enters overheat cooldown for 8 turns. Cannot be used during cooldown. Low action speed, and the user's defense lowers until the skill activates.",
      dep: { intercooler: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    shockDrive: {
      name_en: "Shock Drive",
      name_jp: "ショックドライブ",
      desc: "Deals melee cut+volt damage to one target, and enters overheat cooldown for 8 turns. Cannot be used during cooldown. Low action speed, and the user's defense lowers until the skill activates.",
      dep: { intercooler: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    statusDefUp: {
      name_en: "Status DEF Up",
      name_jp: "抑制防御ブースト",
      desc: "Decreases chance of being inflicted with binds and ailments.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    chargeEdge: {
      name_en: "Charge Edge",
      name_jp: "チャージエッジ",
      desc: "Terminating skill. Deals melee cut damage to one target. Until the end of next turn, increase user's attack. Can only be used if an activation skill or connecting skill is used on the previous turn.",
      dep: { coolEdge: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    forceEdge: {
      name_en: "Force Edge",
      name_jp: "フォースエッジ",
      desc: "Terminating skill. Deals melee cut damage to one target. Restore Force to the user. Can only be used if an activation skill or connecting skill is used on the previous turn.",
      dep: { impulseEdge: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    hpUp: {
      name_en: "HP Up",
      name_jp: "ＨＰブースト",
      desc: "Increases maximum HP.",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    accelDrive: {
      name_en: "Accel Drive",
      name_jp: "アクセルドライブ",
      desc: "Deals melee cut+almighty damage to one target, and enters overheat cooldown for 9 turns. Cannot be used during cooldown. Low action speed, and the user's defense lowers until the skill activates.",
      dep: { flameDrive: 1, freezeDrive: 1, shockDrive: 1 },
      maxLevel: 10,
      coords: { x: 4, y: 4 }
    },
    absorber: {
      name_en: "Absorber",
      name_jp: "コンバーター",
      desc: "Restore TP to the user when hitting a weakness.",
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 5 }
    },
    elemAtkUp: {
      name_en: "Elem ATK Up",
      name_jp: "属性攻撃ブースト",
      desc: "Increases elemental attack.",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    }
  },
  Pugilist: {
    sealRush: {
      name_en: "Seal Rush",
      name_jp: "シールラッシュ",
      desc: "For 3 turns, increase user's bind infliction chance, and chases any of user's attacks on an enemy with binds, ailment or sun. Multi-hit attacks will only be chased once.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    finalBlow: {
      name_en: "Final Blow",
      name_jp: "ファイナルブロー",
      desc: "Deals melee bash damgae to one target. Attempts to inflict head bind, arm bind and leg bind on the target.",
      unique: true,
      type: "Break",
      dep: { sealRush: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    concussion: {
      name_en: "Concussion",
      name_jp: "フリッカー",
      desc: "Deals melee bash damage to one target. Attempts to inflict head bind on the target.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    armBreaker: {
      name_en: "Arm Breaker",
      name_jp: "アームブレイク",
      desc: "Deals melee bash damage to one target. Attempts to inflict arm bind on the target.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    lowBlow: {
      name_en: "Low Blow",
      name_jp: "リバーブロー",
      desc: "Deals melee bash damage to one target. Attempts to inflict leg bind on the target.",
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    oneTwoPunch: {
      name_en: "One-Two Punch",
      name_jp: "ワンツー",
      desc: "Deals melee bash damage to one target. May follow up with Concussion, Arm Breaker, and Low Blow if the target does not have the respective bind. Follow-up skills deal reduced damage.",
      dep: { concussion: 2, armBreaker: 2, lowBlow: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 2 }
    },
    corkscrew: {
      name_en: "Corkscrew",
      name_jp: "コークスクリュー",
      desc: "Deals melee bash damage to one target. Attempts to inflict paralyze on the target.",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 3.5 }
    },
    adrenaline: {
      name_en: "Adrenaline",
      name_jp: "アドレナリン",
      desc: "Restores TP to self when user inflicts a bind, ailment or stun. Inflicting something on multiple enemies will not increase the effect of this skill.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4 }
    },
    doublePunch: {
      name_en: "Double Punch",
      name_jp: "ダブルパンチ",
      desc: "When Concussion, Arm Breaker, Low Blow, or Corkscrew are used directly, if they fail to inflict their bind or ailment, there is a chance the skill will be repeated.",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 5 }
    },
    chop: {
      name_en: "Chop",
      name_jp: "伐採",
      desc: "Occasionally gain more items when using Chop points.",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    hpUp: {
      name_en: "HP Up",
      name_jp: "ＨＰブースト",
      desc: "Increases maximum HP.",
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    devilsFist: {
      name_en: "Devil's Fist",
      name_jp: "鬼人拳",
      desc: "Consumes HP to deal melee bash damage to one target, with splash damage.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    fightingSpirit: {
      name_en: "Fighting Spirit",
      name_jp: "闘魂",
      desc: "If the user has lost HP on the previous turn, increase attack.",
      dep: { devilsFist: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    addedBlow: {
      name_en: "Added Blow",
      name_jp: "追い撃ち",
      desc: "When the user inflicts bind on an enemy, there is a chance to follow up with Corkscrew.",
      dep: { oneTwoPunch: 2, corkscrew: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 2.75 }
    },
    leadingBlow: {
      name_en: "Leading Blow",
      name_jp: "リードブロー",
      desc: "Deals melee bash damage to one target. For every bind the target has, follow up with the corresponding Cestus skill. For any ailment the target has, follow up with Corkscrew.",
      dep: { addedBlow: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2.75 }
    },
    breather: {
      name_en: "Breather",
      name_jp: "インターバル",
      desc: "Removes all binds and ailment from the user, and increase attack until the end of next turn. Cannot be used if user has no binds or ailment.",
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 4 }
    },
    faultBlocker: {
      name_en: "Fault Blocker",
      name_jp: "アームブロック",
      desc: "For 3 turns, increases ailment and bind resistance for user`s row.",
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    clinch: {
      name_en: "Clinch",
      name_jp: "クリンチ",
      desc: "Attempts to inflict head bind, arm bind, and leg bind on both the user and one enemy.",
      dep: { breather: 1, faultBlocker: 1 },
      maxLevel: 6,
      coords: { x: 3, y: 4.5 }
    },
    statusAtkUp: {
      name_en: "Status ATK Up",
      name_jp: "抑制攻撃ブースト",
      desc: "Increase chance of inflicting binds and ailments.",
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    crossCounter: {
      name_en: "Cross Counter",
      name_jp: "クロスカウンター",
      desc: "This turn, when a party member on user`s row is attacked, counterattack with melee bash damage and attempts to inflict corresponding bind on the target. Does not activate if counterattack cannot reach the enemy.",
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    thunderFist: {
      name_en: "Thunder Fist",
      name_jp: "雷神拳",
      desc: "Deals melee bash+volt damage to one target. If the attack does not kill the target, the user takes damage.",
      dep: { fightingSpirit: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    lashOut: {
      name_en: "Lash Out",
      name_jp: "ラッシュアウト",
      desc: "Deals multiple instances of melee bash damage to one target. The number of hits equals to the number of hits made on the previous turn. No matter how many attacks Lash Out made, it will always count as 1 attack for the purpose of this skill.",
      dep: { leadingBlow: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2.75 }
    },
    meditation: {
      name_en: "Meditation",
      name_jp: "瞑想",
      desc: "Until the end of next turn, increases user`s chance of inflicting binds and ailments.",
      dep: { clinch: 3 },
      maxLevel: 4,
      coords: { x: 4, y: 4.5 }
    },
    ragingWaves: {
      name_en: "Raging Waves",
      name_jp: "怒涛",
      desc: "Increase damage dealt based on the number of binds and ailment target has.",
      dep: { meditation: 2 },
      maxLevel: 10,
      coords: { x: 5, y: 4.5 }
    },
    millionLash: {
      name_en: "Million Lash",
      name_jp: "ミリオンラッシュ",
      desc: "Normal attacks may hit 2-4 times if two weapons are equipped. Enables sub weapon when this skill is learned.",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    },
   resonanceBlow: {
      name_en: "Resonance Blow",
      name_jp: "レゾナンスブロー",
      desc: "Deals multiple instances of melee bash damage to one target. The number of hits increases based on the number of turns since Resonance Blow was last used.",
      dep: { millionLash: 3 },
      maxLevel: 6,
      coords: { x: 5, y: 6 }
    }
  },
  Harbinger: {
    infiniteMiasma: {
      name_en: "Infinite Miasma",
      name_jp: "無限兵装",
      desc: "For 3 turns, Miasma Armor's duration will not decrease, and cannot be removed.",
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    miasmaTorrent: {
      name_en: "Miasma Torrent",
      name_jp: "瘴気の激流",
      desc: "This turn, greatly reduce all enemies' attack, defense, evasion, action speed, and binds and ailment resistance.",
      unique: true,
      type: "Break",
      dep: { infiniteMiasma: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    erodingMiasma: {
      name_en: "Eroding Miasma",
      name_jp: "削弱の瘴気",
      desc: "For 3 turns, decrease all enemies' defense. Higher level increases duration.",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 1 }
    },
    stiflingMiasma: {
      name_en: "Stifling Miasma",
      name_jp: "繊弱の瘴気",
      desc: "For 3 turns, decrease all enemies' attack. Higher level increases duration.",
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 2 }
    },
    slowingMiasma: {
      name_en: "Slowing Miasma",
      name_jp: "鈍弱の瘴気",
      desc: "For 3 turns, decrease all enemies' evasion and action speed. Higher level increases duration.",
      dep: { erodingMiasma: 2, stiflingMiasma: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    paralyzingReap: {
      name_en: "Paralyzing Reap",
      name_jp: "痺止の鎌",
      desc: "Deals melee cut damage to one row. If Miasma Armor is active, attempts to inflict paralyze on targets.",
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    toxicReap: {
      name_en: "Toxic Reap",
      name_jp: "惨毒の鎌",
      desc: "Deals melee cut damage to one row. If Miasma Armor is active, attempts to inflict poison on targets.",
      dep: { paralyzingReap: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    miasmaArmor: {
      name_en: "Miasma Armor",
      name_jp: "瘴気の兵装",
      desc: "Puts the user in Miasma Armor state for 3 turns. Increase action speed when Miasma Armor is active. At the start of battle, automatically puts the user in Miasma Armor state.",
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4.5 }
    },
    endlessShroud: {
      name_en: "Endless Shroud",
      name_jp: "終わりなき衣",
      desc: "When the user uses a debuff skill, there's a chance to cast Miasma Armor automatically.",
      dep: { miasmaArmor: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    atonement: {
      name_en: "Atonement",
      name_jp: "贖いの血",
      desc: "Requires Miasma Armor. Removes Miasma Armor to restore HP to all party members, and attempt to remove their ailments.",
      dep: { miasmaArmor: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    take: {
      name_en: "Take",
      name_jp: "採取",
      desc: "Occasionally gain more items when using Take points.",
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    },
    wiltingMiasma: {
      name_en: "Wilting Miasma",
      name_jp: "虚弱の瘴気",
      desc: "For 3 turns, decrease all enemies' resistance and rate of recovery to ailments. Higher level increases duration.",
      dep: { slowingMiasma: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    arrestingMiasma: {
      name_en: "Arresting Miasma",
      name_jp: "縛弱の瘴気",
      desc: "For 3 turns, decrease all enemies' resistance and rate of recovery to binds. Higher level increases duration.",
      dep: { wiltingMiasma: 3 },
      maxLevel: 10,
      coords: { x: 3, y: 1.5 }
    },
    darknessReap: {
      name_en: "Darkness Reap",
      name_jp: "深闇の鎌",
      desc: "Deals melee cut damage to one row. If Miasma Armor is active, attempts to inflict blind on targets.",
      dep: { toxicReap: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    chaosReap: {
      name_en: "Chaos Reap",
      name_jp: "禍乱の鎌",
      desc: "Deals melee cut damage to one row. If Miasma Armor is active, attempts to inflict panic on targets.",
      dep: { darknessReap: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 3 }
    },
    blackShroud: {
      name_en: "Black Shroud",
      name_jp: "黒き衣",
      desc: "During Miasma Armor, increase defense.",
      dep: { endlessShroud: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    soulTransfer: {
      name_en: "Soul Transfer",
      name_jp: "魂転移",
      desc: "Requires Miasma Armor. Removes Miasma Armor to attempt to revive all party members.",
      dep: { atonement: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    blackWave: {
      name_en: "Black Wave",
      name_jp: "黒き波動",
      desc: "At the end of turn, if Miasma Armor is active, restore TP to the user.",
      dep: { soulTransfer: 1 },
      maxLevel: 4,
      coords: { x: 3, y: 5 }
    },
    spiritAbsorb: {
      name_en: "Spirit Absorb",
      name_jp: "生気吸収",
      desc: "When the user uses a debuff skill, restore HP to the user. This restoration can heal beyond maximum HP. Overhealed HP will disappear at the end of turn.",
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    statusAtkUp: {
      name_en: "Status ATK Up",
      name_jp: "抑制攻撃ブースト",
      desc: "Increase chance of inflicting binds and ailments.",
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    deathsAsylum: {
      name_en: "Death's Asylum",
      name_jp: "死の耐性",
      desc: "Chance to nullify debuffs and ailments on the user.",
      dep: { },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    ephemeralReap: {
      name_en: "Ephemeral Reap",
      name_jp: "泡沫の鎌",
      desc: "Deals multiple instances of melee cut damage to one target. Number of hits increase based on the number of debuffs on the target.",
      dep: { },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    fatalReap: {
      name_en: "Fatal Reap",
      name_jp: "死の鎌",
      desc: "Deals melee cut damage to one target. Attempts to inflict instant death on the target.",
      dep: { chaosReap: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    miasmaWall: {
      name_en: "Miasma Wall",
      name_jp: "瘴気の防壁",
      desc: "Requires Miasma Armor. Removes Miasma Armor to attempt to nullify binds and ailments for all party members, up to a certain amount of times.",
      dep: { blackWave: 1 },
      maxLevel: 6,
      coords: { x: 4, y: 4.5 }
    },
    soulFixation: {
      name_en: "Soul Fixation",
      name_jp: "霊魂固着",
      desc: "Requires Miasma Armor. Removes Miasma Armor to attempt to nullify instant death, stun and debuffs for all party members, up to a certain amount of times.",
      dep: { blackWave: 1 },
      maxLevel: 6,
      coords: { x: 4, y: 5.5 }
    },
    residualMiasma: {
      name_en: "Residual Miasma",
      name_jp: "瘴気残留",
      desc: "Skills which remove Miasma Armor will instead reduce its duration by 7. If Miasma Armor's duration becomes 0 or less, it is removed. (?Higher level may decreases duration reduction?)",
      dep: { miasmaWall: 2, soulFixation: 2 },
      maxLevel: 4,
      coords: { x: 5, y: 5 }
    }
  }
};
