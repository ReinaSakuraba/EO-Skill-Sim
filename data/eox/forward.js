let forward = {
  Hero: {
    braveheart: { miracleEdge: 0 },
    miracleEdge: { },
    afterimage: { mirageSword: 1 },
    mirageSword: { shadowCharge: 2 },
    braveWide: { freezingSlash: 1 },
    freezingSlash: { shockSpark: 2 },
    encouragement: { herosBonds: 1 },
    herosBonds: { herosProof: 2 },
    shieldArts: { shieldMateria: 2 },
    clearMind: { fervor: 1 },
    chop: { },
    shadowCharge: { shadowBenefit: 2 },
    shadowBenefit: { thickShadow: 3 },
    shockSpark: { burstBlade: 2 },
    burstBlade: { actBreaker: 2 },
    herosProof: { greatCourage: 1 },
    greatCourage: { },
    shieldMateria: { guardRush: 3 },
    fervor: { },
    newChallenger: { },
    thickShadow: { },
    actBreaker: { regimentRave: 3 },
    regimentRave: { },
    forceGifter: { forceSaver: 3 },
    forceSaver: { },
    guardRush: { }
  },
  Protector: {
    shieldProtect: { perfectDefense: 0 },
    perfectDefense: { },
    frontGuard: { backGuard: 2 },
    backGuard: { },
    cellDivide: { fortify: 2 },
    fortify: { },
    shieldSmite: { },
    provoke: { preProvoke: 2 },
    preProvoke: { },
    healingWall: { },
    chop: { }
  },
  Ronin: {
    peerless: { issen: 0 },
    issen: { },
    upperStance: { upwardSlash: 1 },
    upwardSlash: { },
    clearStance: { chargingThrust: 1 },
    chargingThrust: { },
    drawingStance: { sheathStrike: 1 },
    sheathStrike: { },
    airSlash: { },
    armStrike: { },
    mine: { },
    breath: { }
  },
  Medic: {
    steadyHands: { medicalMiracle: 0 },
    medicalMiracle: { },
    healing: { lineHeal: 3 },
    lineHeal: { },
    patchUp: { },
    refresh: { },
    antibodies: { },
    revive: { },
    scavenge: { },
    headDrop: { },
    take: { }
  },
  Survivalist: {
    illusionStep: { mirageArrow: 0 },
    mirageArrow: { },
    powerShot: { flameArrow: 3 },
    flameArrow: { },
    blindArrow: { chainDance: 3 },
    chainDance: { },
    stalker: { riskPerception: 2 },
    riskPerception: { },
    resuscitate: { sortingSkill: 3 },
    sortingSkill: { },
    naturalInstinct: { },
  },
  Gunner: {
    actBoost: { supremeBolt: 0 },
    supremeBolt: { },
    rapidFire: { spreadShot: 3 },
    spreadShot: { },
    legSnipe: { armSnipe: 2 },
    armSnipe: { },
    coverFire: { shellShock: 2 },
    shellShock: { },
    medicBullet: { },
    popFlares: { },
    mine: { }
  },
  "War Magus": {
    warEdgePower: { fairyRobe: 0 },
    fairyRobe: { },
    warHeal: { warHealLine: 2 },
    warHealLine: { },
    randomDisease: { strengthSlash: 1, guardSlash: 1 },
    strengthSlash: { },
    guardSlash: { },
    displace: { },
    vampire: { },
    take: { },
    warEdgeMastery: { }
  },
  Highlander: {
    heroBattle: { gaeBolg: 0 },
    gaeBolg: { },
    longThrust: { spearAssist: 2 },
    spearAssist: { },
    turningTide: { drainingThrust: 2, legionThust: 2 },
    drainingThrust: { },
    legionThust: { },
    spiritShield: { },
    bloodVeil: { },
    mine: { },
    hpBoost: { }
  },
  Sovereign: {
    victoryVow: { nobilityProof: 0 },
    nobilityProof: { },
    attackOrder: { fireArms: 2, freezeArms: 2, shockArms: 2 },
    fireArms: { },
    freezeArms: { },
    shockArms: { },
    guardOrder: { reinforce: 2 },
    reinforce: { },
    royalVeil: { monarchMarch: 2 },
    monarchMarch: { },
    take: { },
    negotiation: { }
  },
  Shogun: {
    battleFormation: { bodyDouble: 0 },
    bodyDouble: { },
    doubleSlash: { echoingFlow: 2 },
    echoingFlow: { },
    zangetsu: { },
    boltSlash: { },
    sight: { },
    daifuhensha: { assassinEnspirit: 2 },
    assassinEnspirit: { },
    take: { },
    moraleBoost: { }
  },
  Zodiac: {
    astrologersAxis: { astralSign: 0 },
    astralSign: { },
    ethericShine: { fireStar: 1, iceStar: 1, voltStar: 1 },
    fireStar: { },
    iceStar: { },
    voltStar: { },
    singularity: { ethericCharge: 3, etherReturn: 3 },
    ethericCharge: { },
    ethericReturn: { },
    mine: { },
    horoscope: { }
  },
  Ninja: {
    shinobazu: { poisonMist: 0 },
    poisonMist: { },
    fukubari: { makibishi: 3 },
    makibishi: { },
    kagenui: { boneCrusher: 3 },
    boneCrusher: { },
    karuwaza: { senpuku: 2 },
    senpuku: { },
    kagerou: { },
    chop: { },
    proficiency: { }
  },
  Farmer: {
    itemAgain: { finalStratagem: 0 },
    finalStratagem: { },
    sympathyPain: { strangeSeeds: 1, playPossum: 1 },
    strangeSeeds: { },
    playPossum: { },
    keenEye: { searchSkill: 2 },
    searchSkill: { },
    flee: { },
    slapAwake: { },
    harvestry: { },
    earthsBounty: { }
  },
  Landsknecht: {
    trinity: { fullCharge: 0 },
    fullCharge: { },
    proficiency: { },
    sonicRaid: { },
    fireLink: { },
    iceLink: { },
    voltLink: { },
    vanguard: { },
    powerBreak: { },
    mine: { },
    physDefUp: { }
  },
  Nightseeker: {
    killerStance: { disaster: 0 },
    disaster: { },
    blindThrow: { sleepThrow: 2 },
    sleepThrow: { },
    shadowCloak: { bidingSlice: 1 },
    bidingSlice: { },
    iceKnife: { },
    proficiency: { },
    decoySign: { },
    bladeFlurry: { },
    chop: { }
  },
  Arcanist: {
    circleProtection: { releasalSpell: 0 },
    releasalSpell: { },
    circleBoon: { dismissHeal: 1 },
    dismissHeal: { },
    chainCircle: { snareCircle: 2 },
    snareCircle: { },
    nerveCircle: { curseCircle: 2 },
    curseCircle: { },
    bracingWalk: { },
    proficiency: { },
    chop: { }
  },
  Imperial: {
    ignition: { conversion: 0 },
    conversion: { },
    sharpEdge: { bloodEdge: 2 },
    naturalEdge: { bloodEdge: 2 },
    bloodEdge: { },
    rearGuard: { },
    assaultDrive: { heatSink: 3, overheatGuard: 3 },
    heatSink: { },
    overheatGuard: { },
    avenger: { },
    mine: { }
  },
  Pugilist: {
    sealRush: { finalBlow: 0 },
    finalBlow: { },
    concussion: { oneTwoPunch: 2 },
    armCrusher: { oneTwoPunch: 2 },
    lowBlow: { oneTwoPunch: 2 },
    oneTwoPunch: { },
    corkscrew: { },
    adrenaline: { },
    doublePunch: { },
    chop: { },
    hpBoost: { }
  },
  Harbinger: {
    infiniteMiasma: { miasmaTorrent: 0 },
    miasmaTorrent: { },
    erodingMiasma: { sluggishMiasma: 2 },
    stiflingMiasma: { sluggishMiasma: 2 },
    sluggishMiasma: { },
    paralysisReap: { toxicReap: 3 },
    toxicReap: { },
    miasmaArmor: { endlessShroud: 2, atonement: 2 },
    endlessShroud: { },
    atonement: { },
    take: { }
  }
};
