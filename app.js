const DNA_BASES = new Set([
  "腺嘌呤(A)",
  "胸腺嘧啶(T)",
  "胞嘧啶(C)",
  "鳥糞嘌呤(G)",
]);

const FRONTEND_ASSET_VERSION = "v1-svg-fix-20260317";

const TIER_ORDER = {
  基礎分子: 0,
  分子: 1,
  胞器: 2,
  細胞: 3,
  組織: 4,
  器官: 5,
  系統: 6,
  個體: 7,
  特殊: 4,
};

const TIER_STATS = {
  "T 細胞": { attack: 2, health: 4, tags: ["特殊", "免疫"] },
  上皮細胞: { attack: 3, health: 6, tags: ["細胞"] },
  心肌細胞: { attack: 4, health: 7, tags: ["細胞"] },
  神經細胞: { attack: 5, health: 4, tags: ["細胞"] },
  肺泡細胞: { attack: 4, health: 5, tags: ["細胞", "呼吸"] },
  上皮組織: { attack: 4, health: 7, tags: ["組織"] },
  心肌組織: { attack: 5, health: 7, tags: ["組織"] },
  神經組織: { attack: 5, health: 6, tags: ["組織"] },
  肺泡組織: { attack: 4, health: 7, tags: ["組織", "呼吸"] },
  皮膚: { attack: 6, health: 9, tags: ["器官"] },
  心臟: { attack: 7, health: 9, tags: ["器官"] },
  大腦: { attack: 7, health: 8, tags: ["器官", "直擊"] },
  肺: { attack: 6, health: 10, tags: ["器官", "呼吸"] },
  外皮系統: { attack: 8, health: 12, tags: ["系統"] },
  循環系統: { attack: 9, health: 12, tags: ["系統"] },
  神經系統: { attack: 9, health: 11, tags: ["系統", "直擊"] },
  呼吸系統: { attack: 8, health: 12, tags: ["系統", "呼吸"] },
  人類個體: { attack: 13, health: 18, tags: ["個體"] },
  大腸桿菌: { attack: 2, health: 3, tags: ["特殊", "感染"] },
  流感病毒: { attack: 1, health: 3, tags: ["特殊", "呼吸", "直擊"] },
};

const EVOLUTION_REWARDS = {
  細胞: { draw: 1, energy: 1 },
  組織: { draw: 1, shield: 1, extraEvolution: 1 },
  器官: { draw: 2, shield: 2, extraEvolution: 1, freeEvolution: 1 },
  系統: { draw: 2, shield: 4, extraEvolution: 1, freeEvolution: 1 },
};

const EVOLUTION_PRIORITY = {
  人類個體: 100,
  神經系統: 92,
  循環系統: 91,
  呼吸系統: 90,
  外皮系統: 89,
  大腦: 82,
  心臟: 81,
  肺: 80,
  皮膚: 79,
  神經組織: 72,
  心肌組織: 71,
  肺泡組織: 70,
  上皮組織: 69,
  神經細胞: 62,
  心肌細胞: 61,
  肺泡細胞: 60,
  上皮細胞: 59,
  細胞核: 54,
  粒線體: 53,
  核糖體: 52,
  細胞膜: 43,
  蛋白質: 42,
  RNA: 41,
  DNA: 40,
};

const CARD_GUIDE_TEXT = {
  "腺嘌呤(A)": "做 DNA 用的零件。",
  "胸腺嘧啶(T)": "做 DNA 用的零件。",
  "胞嘧啶(C)": "做 DNA 用的零件。",
  "鳥糞嘌呤(G)": "做 DNA 用的零件。",
  "尿嘧啶(U)": "做 RNA 用的零件。",
  胺基酸: "兩張胺基酸可做蛋白質，蛋白質也常拿來把細胞推成組織。",
  磷脂質: "兩張磷脂質可做細胞膜，也常用在肺泡線。",
  DNA: "可用來做細胞核或粒線體。",
  RNA: "可用來做核糖體、神經細胞或大腦。",
  蛋白質: "可用來做核糖體、細胞核，也常拿來升組織或皮膚。",
  細胞膜: "可用來做粒線體，也能作為細胞和肺的構築材料。",
  核糖體: "做細胞時需要的核心工廠。",
  細胞核: "做細胞時需要的核心指揮中心。",
  粒線體: "做細胞時需要的核心電池，也能把心肌組織推成心臟。",
  "T 細胞": "免疫特化戰鬥卡，適合快速處理病原或殘血單位。",
  上皮細胞: "本版的高階細胞之一。",
  心肌細胞: "本版的高階細胞之一。",
  神經細胞: "本版的高階細胞之一。",
  肺泡細胞: "本版的高階細胞之一。",
  大腸桿菌: "特殊卡，可直接部署到戰場。",
  流感病毒: "特殊卡，可直接部署，攻擊時還能越過前線。",
  藥物: "優先治療自己身上的癌症；若目前沒有癌症，則改成提供少量本體護盾。",
};

const CARD_ART_MAP = {
  胺基酸: "./assets/card-art/amino-acid.svg",
  磷脂質: "./assets/card-art/phospholipid.svg",
  DNA: "./assets/card-art/dna.svg",
  RNA: "./assets/card-art/rna.svg",
  蛋白質: "./assets/card-art/protein.svg",
  細胞膜: "./assets/card-art/membrane.svg",
  核糖體: "./assets/card-art/ribosome.svg",
  細胞核: "./assets/card-art/nucleus.svg",
  粒線體: "./assets/card-art/mitochondrion.svg",
  上皮細胞: "./assets/card-art/epithelial-cell.svg",
  心肌細胞: "./assets/card-art/cardiomyocyte.svg",
  神經細胞: "./assets/card-art/neuron.svg",
  肺泡細胞: "./assets/card-art/alveolar-cell.svg",
  上皮組織: "./assets/card-art/epithelial-tissue.svg",
  心肌組織: "./assets/card-art/cardiac-tissue.svg",
  神經組織: "./assets/card-art/neural-tissue.svg",
  肺泡組織: "./assets/card-art/alveolar-tissue.svg",
  皮膚: "./assets/card-art/skin.svg",
  心臟: "./assets/card-art/heart.svg",
  大腦: "./assets/card-art/brain.svg",
  肺: "./assets/card-art/lung.svg",
  "T 細胞": "./assets/card-art/t-cell.svg",
  HLA: "./assets/card-art/hla.svg",
  CRISPR: "./assets/card-art/crispr.svg",
  藥物: "./assets/card-art/medicine.svg",
  大腸桿菌: "./assets/card-art/ecoli.svg",
  流感病毒: "./assets/card-art/influenza-virus.svg",
};

const CARD_LIBRARY = {
  "腺嘌呤(A)": createMaterialCard("基礎分子"),
  "胸腺嘧啶(T)": createMaterialCard("基礎分子"),
  "胞嘧啶(C)": createMaterialCard("基礎分子"),
  "鳥糞嘌呤(G)": createMaterialCard("基礎分子"),
  "尿嘧啶(U)": createMaterialCard("基礎分子"),
  胺基酸: createMaterialCard("基礎分子"),
  磷脂質: createMaterialCard("基礎分子"),
  DNA: createMaterialCard("分子"),
  RNA: createMaterialCard("分子"),
  蛋白質: createMaterialCard("分子"),
  細胞膜: createMaterialCard("分子"),
  核糖體: createMaterialCard("胞器"),
  細胞核: createMaterialCard("胞器"),
  粒線體: createMaterialCard("胞器"),
  上皮細胞: createBattleCard("細胞"),
  心肌細胞: createBattleCard("細胞"),
  神經細胞: createBattleCard("細胞"),
  肺泡細胞: createBattleCard("細胞"),
  上皮組織: createBattleCard("組織"),
  心肌組織: createBattleCard("組織"),
  神經組織: createBattleCard("組織"),
  肺泡組織: createBattleCard("組織"),
  皮膚: createBattleCard("器官"),
  心臟: createBattleCard("器官"),
  大腦: createBattleCard("器官", { canBypassFrontline: true }),
  肺: createBattleCard("器官"),
  外皮系統: createBattleCard("系統"),
  循環系統: createBattleCard("系統"),
  神經系統: createBattleCard("系統", { canBypassFrontline: true }),
  呼吸系統: createBattleCard("系統"),
  人類個體: createBattleCard("個體"),
  "T 細胞": createBattleCard("特殊", { cost: 3, directPlayable: true }),
  大腸桿菌: createBattleCard("特殊", { cost: 2, directPlayable: true }),
  流感病毒: createBattleCard("特殊", { cost: 2, directPlayable: true, canBypassFrontline: true }),
  移液器: createSupportCard("物品", 1, "recover"),
  離心機: createSupportCard("物品", 1, "draw"),
  "PCR 儀": createSupportCard("物品", 1, "copy"),
  定序儀: createSupportCard("物品", 1, "sequencer"),
  培養箱: createSupportCard("物品", 1, "shield"),
  藥物: createSupportCard("物品", 1, "medicine"),
  CRISPR: createSupportCard("物品", 1, "crispr"),
  抗生素: createSupportCard("物品", 1, "antibiotic"),
  醫師: createSupportCard("角色", 1, "heal"),
  病理學家: createSupportCard("角色", 1, "pathology"),
  分子生物學家: createSupportCard("角色", 1, "freeEvolution"),
  細胞培養師: createSupportCard("角色", 1, "cellBoost"),
  HLA: createSupportCard("角色", 1, "hla"),
  癌症: createSupportCard("疾病", 1, "cancer"),
  流感: createSupportCard("疾病", 1, "flu"),
  遺傳性突變: createSupportCard("疾病", 1, "mutation"),
  RNAi: createSupportCard("疾病", 1, "rnai"),
  細胞凋亡: createSupportCard("疾病", 1, "apoptosis"),
  訊號阻斷: createSupportCard("疾病", 1, "signalBlock"),
  發炎反應: createSupportCard("疾病", 1, "inflammation"),
};

const RECIPES = [
  {
    output: "DNA",
    inputs: ["腺嘌呤(A)", "胸腺嘧啶(T)"],
    text: "A + T",
  },
  {
    output: "DNA",
    inputs: ["胞嘧啶(C)", "鳥糞嘌呤(G)"],
    text: "C + G",
  },
  {
    output: "RNA",
    inputs: ["尿嘧啶(U)", "任意一張 DNA 鹼基"],
    text: "U + 任一 DNA 鹼基",
  },
  {
    output: "蛋白質",
    inputs: ["胺基酸", "胺基酸"],
    text: "胺基酸 x2",
  },
  {
    output: "細胞膜",
    inputs: ["磷脂質", "磷脂質"],
    text: "磷脂質 x2",
  },
  {
    output: "核糖體",
    inputs: ["RNA", "蛋白質"],
    text: "RNA + 蛋白質",
  },
  {
    output: "細胞核",
    inputs: ["DNA", "蛋白質"],
    text: "DNA + 蛋白質",
  },
  {
    output: "粒線體",
    inputs: ["細胞膜", "DNA"],
    text: "細胞膜 + DNA",
  },
  {
    output: "上皮細胞",
    inputs: ["細胞膜", "細胞核", "核糖體", "粒線體"],
    text: "細胞四核心",
  },
  {
    output: "心肌細胞",
    inputs: ["細胞膜", "細胞核", "核糖體", "粒線體", "粒線體"],
    text: "細胞四核心 + 額外粒線體",
  },
  {
    output: "神經細胞",
    inputs: ["細胞膜", "細胞核", "核糖體", "粒線體", "RNA"],
    text: "細胞四核心 + RNA",
  },
  {
    output: "肺泡細胞",
    inputs: ["細胞膜", "細胞核", "核糖體", "粒線體", "細胞膜"],
    text: "細胞四核心 + 額外細胞膜",
  },
  {
    output: "上皮組織",
    inputs: ["上皮細胞", "蛋白質"],
    text: "上皮細胞 + 蛋白質",
  },
  {
    output: "心肌組織",
    inputs: ["心肌細胞", "蛋白質"],
    text: "心肌細胞 + 蛋白質",
  },
  {
    output: "神經組織",
    inputs: ["神經細胞", "蛋白質"],
    text: "神經細胞 + 蛋白質",
  },
  {
    output: "肺泡組織",
    inputs: ["肺泡細胞", "蛋白質"],
    text: "肺泡細胞 + 蛋白質",
  },
  {
    output: "皮膚",
    inputs: ["上皮組織", "蛋白質"],
    text: "上皮組織 + 蛋白質",
  },
  {
    output: "心臟",
    inputs: ["心肌組織", "粒線體"],
    text: "心肌組織 + 粒線體",
  },
  {
    output: "大腦",
    inputs: ["神經組織", "RNA"],
    text: "神經組織 + RNA",
  },
  {
    output: "肺",
    inputs: ["肺泡組織", "細胞膜"],
    text: "肺泡組織 + 細胞膜",
  },
  {
    output: "外皮系統",
    inputs: ["皮膚", "皮膚"],
    text: "皮膚 x2",
  },
  {
    output: "循環系統",
    inputs: ["心臟", "心臟"],
    text: "心臟 x2",
  },
  {
    output: "神經系統",
    inputs: ["大腦", "大腦"],
    text: "大腦 x2",
  },
  {
    output: "呼吸系統",
    inputs: ["肺", "肺"],
    text: "肺 x2",
  },
  {
    output: "人類個體",
    inputs: ["外皮系統", "循環系統", "神經系統", "呼吸系統"],
    text: "四大系統合成",
  },
];

const PROTOTYPE_TIER_CAP = "個體";
const LAB_LIMIT = 10;
const BATTLEFIELD_LIMIT = Number.POSITIVE_INFINITY;
const MATERIAL_PLAYS_PER_TURN = 3;
const EVOLUTIONS_PER_TURN = 2;
const BODY_SHIELD_CAP = 12;
const ACTIVE_RECIPES = RECIPES.filter(
  (recipe) => TIER_ORDER[CARD_LIBRARY[recipe.output].tier] <= TIER_ORDER[PROTOTYPE_TIER_CAP]
);
const COACH_OUTPUT_LIMIT = 6;

const DECK_BLUEPRINT = {
  "腺嘌呤(A)": 4,
  "胸腺嘧啶(T)": 4,
  "胞嘧啶(C)": 4,
  "鳥糞嘌呤(G)": 4,
  "尿嘧啶(U)": 4,
  胺基酸: 8,
  磷脂質: 8,
  移液器: 2,
  離心機: 2,
  "PCR 儀": 1,
  定序儀: 2,
  培養箱: 1,
  藥物: 2,
  CRISPR: 2,
  抗生素: 1,
  醫師: 1,
  病理學家: 1,
  分子生物學家: 1,
  細胞培養師: 1,
  HLA: 1,
  癌症: 1,
  流感: 1,
  遺傳性突變: 1,
  RNAi: 1,
  細胞凋亡: 1,
  訊號阻斷: 1,
  發炎反應: 1,
  "T 細胞": 1,
  大腸桿菌: 1,
  流感病毒: 1,
};

const STARTER_LAB = ["胺基酸", "磷脂質"];
const INITIAL_HAND_SIZE = 7;
const STARTING_HP = 30;
const STARTING_ENERGY = 3;
const LOG_LIMIT = 14;

let nextCardId = 1;
let state = null;

const app = document.getElementById("app");
app.addEventListener("click", handleClick);

boot();

function boot() {
  state = createInitialState();
  render();
}

function createInitialState() {
  const game = {
    turn: 1,
    activeSide: "player",
    winner: null,
    log: [],
    players: {
      player: createSide("玩家"),
      ai: createSide("AI"),
    },
  };

  for (const sideKey of ["player", "ai"]) {
    const side = game.players[sideKey];
    seedLab(side);
    drawCards(side, INITIAL_HAND_SIZE, game);
  }

  addLog(game, "遊戲開始。牌庫只會抽到基礎素材、效果牌與特殊卡，中間結構必須靠進化做出來。");
  beginTurn("player", game, { skipDraw: true });
  return game;
}

function createSide(label) {
  return {
    label,
    hp: STARTING_HP,
    maxHp: STARTING_HP,
    energy: 0,
    maxEnergy: STARTING_ENERGY,
    deck: shuffle(buildDeck()),
    hand: [],
    lab: [],
    battlefield: [],
    discard: [],
    energyPenaltyNextTurn: 0,
    freeEvolution: 0,
    evolutionTax: 0,
    nextCellShield: 0,
    bodyShield: 0,
    healBlocked: 0,
    cancerCountdown: 0,
    cancerOwnerSideKey: null,
    apoptosisBonusActive: false,
    materialPlaysRemaining: 0,
    evolutionsRemaining: 0,
  };
}

function buildDeck() {
  const cards = [];

  for (const [name, amount] of Object.entries(DECK_BLUEPRINT)) {
    for (let index = 0; index < amount; index += 1) {
      cards.push(createCard(name));
    }
  }

  return cards;
}

function createCard(name) {
  const definition = CARD_LIBRARY[name];

  if (!definition) {
    throw new Error(`Unknown card: ${name}`);
  }

  const stats = TIER_STATS[name] || {};

  return {
    id: `card-${nextCardId++}`,
    name,
    ...definition,
    attack: stats.attack ?? definition.attack ?? null,
    health: stats.health ?? definition.health ?? null,
    maxHealth: stats.health ?? definition.maxHealth ?? null,
    tags: [...(stats.tags ?? definition.tags ?? [])],
    ready: false,
    attackUsedThisTurn: false,
    mutationDamage: 0,
    shield: 0,
    blockedEvolution: 0,
    stunnedTurns: 0,
  };
}

function createMaterialCard(tier) {
  return {
    category: "結構",
    tier,
    zone: "lab",
    directPlayable: true,
    isBattleCard: false,
  };
}

function createBattleCard(tier, overrides = {}) {
  return {
    category: "結構",
    tier,
    zone: tier === "特殊" ? "battlefield" : "evolved",
    directPlayable: Boolean(overrides.directPlayable),
    canBypassFrontline: Boolean(overrides.canBypassFrontline),
    isBattleCard: true,
    cost: overrides.cost ?? 2,
  };
}

function createSupportCard(category, cost, effect) {
  return {
    category,
    tier: null,
    zone: "effect",
    directPlayable: true,
    isBattleCard: false,
    cost,
    effect,
  };
}

function seedLab(side) {
  for (const name of STARTER_LAB) {
    side.lab.push(createCard(name));
  }
}

function drawCards(side, amount, game) {
  for (let count = 0; count < amount; count += 1) {
    if (!side.deck.length) {
      if (side.discard.length) {
        side.deck = shuffle(side.discard);
        side.discard = [];
        side.hp -= 1;
        addLog(game, `${side.label} 牌庫耗盡，將棄牌洗回牌庫並承受 1 點研究壓力。`);
        if (side.hp <= 0) {
          game.winner = side.label === "玩家" ? "ai" : "player";
          addLog(game, `${side.label} 因研究壓力倒下。`);
          break;
        }
      } else {
        side.hp -= 1;
        addLog(game, `${side.label} 牌庫空了，疲勞傷害 1。`);
        if (side.hp <= 0) {
          game.winner = side.label === "玩家" ? "ai" : "player";
          addLog(game, `${side.label} 因疲勞倒下。`);
          break;
        }
        continue;
      }
    }

    side.hand.push(side.deck.pop());
  }
}

function getOpponentSideKey(sideKey) {
  return sideKey === "player" ? "ai" : "player";
}

function clearCancerStatus(side) {
  side.cancerCountdown = 0;
  side.cancerOwnerSideKey = null;
}

function applyStartOfTurnBattlefieldEffects(sideKey, game) {
  const side = game.players[sideKey];
  const enemy = game.players[getOpponentSideKey(sideKey)];
  const mutatedUnits = side.battlefield.filter((card) => card.mutationDamage > 0);

  mutatedUnits.forEach((card) => {
    applyDamage(card, card.mutationDamage);
    addLog(game, `${side.label} 的 ${card.name} 因遺傳性突變受到 ${card.mutationDamage} 點傷害。`);
  });

  if (mutatedUnits.length) {
    removeDeadUnits(side, enemy);
  }

  if (side.cancerCountdown > 0) {
    side.cancerCountdown -= 1;

    if (side.cancerCountdown > 0) {
      addLog(game, `${side.label} 仍受癌症影響，還有 ${side.cancerCountdown} 回合會發生癌變奪取。`);
    } else {
      resolveCancerTakeover(sideKey, game);
    }
  }
}

function resolveCancerTakeover(sideKey, game) {
  const afflicted = game.players[sideKey];
  const ownerKey = afflicted.cancerOwnerSideKey;
  const owner = ownerKey ? game.players[ownerKey] : null;
  const target = owner ? findHighestAttackUnit(afflicted.battlefield) : null;

  clearCancerStatus(afflicted);

  if (!owner || !target) {
    addLog(game, `${afflicted.label} 的癌症失控，但沒有可被奪取的戰場單位。`);
    return;
  }

  removeCardFromZones(afflicted, target.id);
  target.ready = false;
  target.attackUsedThisTurn = true;
  owner.battlefield.push(target);
  addLog(game, `${afflicted.label} 的癌症失控，${owner.label} 奪取了 ${target.name} 到自己的戰場。`);
  cleanupAfterAction(ownerKey, afflicted);
}

function beginTurn(sideKey, game, options = {}) {
  const side = game.players[sideKey];
  game.activeSide = sideKey;

  const penalty = side.energyPenaltyNextTurn;
  side.energy = Math.max(1, side.maxEnergy - penalty);
  side.energyPenaltyNextTurn = 0;
  side.apoptosisBonusActive = false;
  side.materialPlaysRemaining = MATERIAL_PLAYS_PER_TURN;
  side.evolutionsRemaining = EVOLUTIONS_PER_TURN;

  applyStartOfTurnBattlefieldEffects(sideKey, game);

  if (!options.skipDraw) {
    drawCards(side, 2, game);
  }

  for (const card of side.battlefield) {
    card.attackUsedThisTurn = false;

    if (card.health > 0 && card.stunnedTurns <= 0) {
      card.ready = true;
    }

    if (card.blockedEvolution > 0) {
      card.blockedEvolution -= 1;
    }

    if (card.stunnedTurns > 0) {
      card.ready = false;
      card.stunnedTurns -= 1;
    }
  }

  if (side.healBlocked > 0) {
    side.healBlocked -= 1;
  }

  addLog(game, `${side.label} 的回合開始。能量 ${side.energy}。`);
}

function endPlayerTurn() {
  if (state.winner || state.activeSide !== "player") {
    return;
  }

  addLog(state, "玩家結束回合。");
  beginTurn("ai", state);
  runAiTurn();

  if (!state.winner) {
    state.turn += 1;
    beginTurn("player", state);
  }

  render();
}

function runAiTurn() {
  const sideKey = "ai";
  const side = state.players[sideKey];

  playAllFreeMaterials(sideKey);

  let safety = 0;
  while (!state.winner && safety < 20) {
    safety += 1;
    const evolution = chooseBestEvolution(sideKey);

    if (evolution && canPayEvolution(side)) {
      evolveCard(sideKey, evolution.recipeIndex, { silentRender: true });
      continue;
    }

    const playIndex = chooseAiPlayableCard(sideKey);
    if (playIndex !== -1) {
      playCard(sideKey, playIndex, { silentRender: true });
      playAllFreeMaterials(sideKey);
      continue;
    }

    break;
  }

  attackWithAll(sideKey, { smart: true });
  addLog(state, "AI 結束回合。");
}

function chooseAiPlayableCard(sideKey) {
  const side = state.players[sideKey];
  const enemy = state.players[sideKey === "player" ? "ai" : "player"];
  const hand = side.hand;
  let bestIndex = -1;
  let bestScore = 0;

  hand.forEach((card, index) => {
    if (!card.directPlayable || side.energy < (card.cost ?? 0)) {
      return;
    }

    if (card.category === "結構" && !card.isBattleCard) {
      return;
    }

    const score = scorePlayableCard(sideKey, side, enemy, card);
    if (score > bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  });

  return bestIndex;
}

function scorePlayableCard(sideKey, side, enemy, card) {
  if (card.category === "結構" && card.isBattleCard) {
    if (card.name === "T 細胞") {
      return enemy.battlefield.length ? 44 : enemy.hp <= 8 ? 28 : 12;
    }

    if (card.name === "大腸桿菌") {
      return enemy.battlefield.length ? 34 : enemy.hp <= 6 ? 20 : 8;
    }

    if (card.name === "流感病毒") {
      return enemy.hp <= 8 || enemy.bodyShield <= 1 ? 32 : 20;
    }

    return 10;
  }

  if (!card.effect) {
    return 0;
  }

  const hasRecipes = getAvailableRecipes(sideKey).length > 0;
  const weakUnit = findWeakestUnit(side.battlefield);
  const missingComponent = createBestMissingComponent(side);
  const usefulDiscard = findUsefulDiscardCard(side);
  const hasGeneTemplate = side.lab.some((item) => item.name === "DNA" || item.name === "RNA");
  const hasAfflictedUnit = side.battlefield.some((item) => item.blockedEvolution > 0 || item.stunnedTurns > 0);
  const hasMutatedUnit = side.battlefield.some((item) => item.mutationDamage > 0);
  const hasCell = side.battlefield.some((item) => item.tier === "細胞");
  const incomingPressure = enemy.battlefield.reduce((sum, item) => sum + item.attack, 0);
  const enemyRespiratory = enemy.battlefield.some((item) => item.tags.includes("呼吸"));
  const enemyDamagedUnit = enemy.battlefield.some((item) => item.health < item.maxHealth);
  const enemyStrongestAttack = findHighestAttackUnit(enemy.battlefield)?.attack ?? 0;

  const scores = {
    recover: usefulDiscard ? 30 : 8,
    draw: side.hand.length <= 4 ? 24 : 14,
    sequencer: hasMutatedUnit ? 48 : usefulDiscard || missingComponent ? 42 : 18,
    copy: hasGeneTemplate ? 30 : 6,
    shield: hasCell ? 24 : side.nextCellShield === 0 ? 16 : 6,
    medicine: side.cancerCountdown > 0 ? 60 : side.hp <= 14 || incomingPressure >= 6 ? 30 : side.bodyShield <= 1 ? 16 : 5,
    cleanse: hasAfflictedUnit ? 24 : 4,
    crispr: missingComponent ? 46 : hasAfflictedUnit ? 26 : 10,
    antibiotic: enemy.battlefield.length ? 31 : 0,
    heal: weakUnit && weakUnit.health < weakUnit.maxHealth ? 26 : side.hp <= 16 ? 18 : 3,
    hla: side.battlefield.length ? 22 : 4,
    pathology: enemy.battlefield.length ? 30 : 0,
    freeEvolution: hasRecipes ? 36 : 14,
    cellBoost: hasCell ? 14 : 22,
    cancer: enemy.cancerCountdown > 0 ? 6 : enemy.battlefield.length ? 28 + enemyStrongestAttack : 16,
    flu: enemyRespiratory ? 26 : enemy.hp <= 8 ? 18 : 12,
    mutation: enemy.battlefield.length ? 24 + enemyStrongestAttack : 0,
    rnai: enemy.battlefield.length ? 30 : 0,
    apoptosis: enemyDamagedUnit ? 36 : enemy.battlefield.length >= 2 ? 14 : 6,
    signalBlock: enemy.battlefield.length ? 27 : 0,
    inflammation: enemy.battlefield.length >= 2 ? 26 : enemy.battlefield.length ? 16 : 0,
  };

  return scores[card.effect] ?? 0;
}

function playAllFreeMaterials(sideKey) {
  const side = state.players[sideKey];
  let found = true;

  while (found && side.materialPlaysRemaining > 0) {
    found = false;

    for (let index = 0; index < side.hand.length; index += 1) {
      const card = side.hand[index];
      if (card.category === "結構" && !card.isBattleCard && card.directPlayable) {
        if (!ensureZoneSpace(sideKey, "lab", side.lab.length + 1 - LAB_LIMIT)) {
          return;
        }

        side.hand.splice(index, 1);
        side.lab.push(card);
        side.materialPlaysRemaining -= 1;
        addLog(state, `${side.label} 將 ${card.name} 放入實驗區。`);
        found = true;
        break;
      }
    }
  }
}

function playCard(sideKey, handIndex, options = {}) {
  const side = state.players[sideKey];
  const enemy = state.players[sideKey === "player" ? "ai" : "player"];
  const card = side.hand[handIndex];

  if (!card || state.winner) {
    return;
  }

  if (card.category === "結構" && !card.isBattleCard) {
    if (side.materialPlaysRemaining <= 0) {
      addLog(state, `${side.label} 這回合的素材放置次數已用完。`);
      if (!options.silentRender) {
        render();
      }
      return;
    }

    if (!ensureZoneSpace(sideKey, "lab", side.lab.length + 1 - LAB_LIMIT)) {
      if (!options.silentRender) {
        render();
      }
      return;
    }

    side.hand.splice(handIndex, 1);
    side.lab.push(card);
    side.materialPlaysRemaining -= 1;
    addLog(state, `${side.label} 將 ${card.name} 放入實驗區。`);
    if (!options.silentRender) {
      render();
    }
    return;
  }

  if (card.category === "結構" && card.isBattleCard && !card.directPlayable) {
    addLog(state, `${card.name} 不能直接上場，必須經由進化產生。`);
    if (!options.silentRender) {
      render();
    }
    return;
  }

  const cost = card.cost ?? 0;
  if (side.energy < cost) {
    addLog(state, `${side.label} 的能量不足，無法打出 ${card.name}。`);
    if (!options.silentRender) {
      render();
    }
    return;
  }

  if (card.category === "結構" && card.isBattleCard) {
    if (!ensureZoneSpace(sideKey, "battlefield", side.battlefield.length + 1 - BATTLEFIELD_LIMIT)) {
      if (!options.silentRender) {
        render();
      }
      return;
    }
  }

  side.energy -= cost;
  side.hand.splice(handIndex, 1);

  if (card.category === "結構" && card.isBattleCard) {
    card.ready = true;
    side.battlefield.push(card);
    addLog(state, `${side.label} 直接部署 ${card.name}。`);
    applyOnSummonEffect(sideKey, enemy, card);
  } else {
    resolveSupportEffect(sideKey, enemy, card);
    side.discard.push(card);
  }

  cleanupAfterAction(sideKey, enemy);

  if (!options.silentRender) {
    render();
  }
}

function resolveSupportEffect(sideKey, enemy, card) {
  const side = state.players[sideKey];

  switch (card.effect) {
    case "recover": {
      const discardIndex = side.discard.findIndex((item) => item.category === "結構" && !item.isBattleCard);
      if (discardIndex !== -1) {
        const recovered = side.discard.splice(discardIndex, 1)[0];
        if (ensureZoneSpace(sideKey, "lab", side.lab.length + 1 - LAB_LIMIT)) {
          side.lab.push(recovered);
          addLog(state, `${side.label} 使用 ${card.name}，回收 ${recovered.name} 到實驗區。`);
        } else {
          side.hand.push(recovered);
          addLog(state, `${side.label} 使用 ${card.name}，實驗區太滿，改為回收 ${recovered.name} 到手牌。`);
        }
      } else {
        drawCards(side, 1, state);
        addLog(state, `${side.label} 使用 ${card.name}，沒有素材可回收，改為抽 1 張。`);
      }
      break;
    }
    case "draw":
    case "insight": {
      drawCards(side, 2, state);
      addLog(state, `${side.label} 使用 ${card.name}，抽 2 張牌。`);
      break;
    }
    case "sequencer": {
      const mutatedTarget = findHighestTierUnit(side.battlefield.filter((item) => item.mutationDamage > 0));
      if (mutatedTarget) {
        mutatedTarget.mutationDamage = 0;
        addLog(state, `${side.label} 使用 ${card.name}，完成 ${mutatedTarget.name} 的定序分析並解除遺傳性突變。`);
      } else {
        const target = findUsefulDiscardCard(side);
        if (target) {
          if (ensureZoneSpace(sideKey, "lab", side.lab.length + 1 - LAB_LIMIT)) {
            removeCardFromZones(side, target.id);
            side.lab.push(target);
            addLog(state, `${side.label} 使用 ${card.name}，從棄牌區回收 ${target.name} 到實驗區。`);
          }
        } else {
          const created = createBestMissingComponent(side);
          if (created && ensureZoneSpace(sideKey, "lab", side.lab.length + 1 - LAB_LIMIT)) {
            side.lab.push(created);
            addLog(state, `${side.label} 使用 ${card.name}，直接定位出缺少的 ${created.name}。`);
          } else {
            drawCards(side, 2, state);
            addLog(state, `${side.label} 使用 ${card.name}，沒有合適目標，改為抽 2 張牌。`);
          }
        }
      }
      break;
    }
    case "copy": {
      const target = side.lab.find((item) => item.name === "DNA" || item.name === "RNA");
      if (target) {
        const clone = createCard(target.name);
        if (ensureZoneSpace(sideKey, "lab", side.lab.length + 1 - LAB_LIMIT)) {
          side.lab.push(clone);
          addLog(state, `${side.label} 使用 ${card.name}，複製 1 張 ${target.name} 到實驗區。`);
        } else {
          side.hand.push(clone);
          addLog(state, `${side.label} 使用 ${card.name}，實驗區太滿，改為把 ${target.name} 複製到手牌。`);
        }
      } else {
        drawCards(side, 1, state);
        addLog(state, `${side.label} 使用 ${card.name}，目前沒有 DNA/RNA，改為抽 1 張。`);
      }
      break;
    }
    case "shield": {
      const target = side.battlefield.find((item) => item.tier === "細胞");
      if (target) {
        target.shield += 2;
        addLog(state, `${side.label} 使用 ${card.name}，讓 ${target.name} 獲得 2 層護盾。`);
      } else {
        side.nextCellShield += 2;
        addLog(state, `${side.label} 使用 ${card.name}，下一個新生細胞會自帶 2 層護盾。`);
      }
      break;
    }
    case "medicine": {
      if (side.cancerCountdown > 0) {
        clearCancerStatus(side);
        const gained = gainBodyShield(side, 1);
        addLog(state, `${side.label} 使用 ${card.name}，抑制癌症進程${gained > 0 ? `，並獲得 ${gained} 點本體護盾` : ""}。`);
      } else {
        const gained = gainBodyShield(side, 2);
        if (gained > 0) {
          addLog(state, `${side.label} 使用 ${card.name}，沒有癌症需要治療，改為提供 ${gained} 點本體護盾。`);
        } else {
          drawCards(side, 1, state);
          addLog(state, `${side.label} 使用 ${card.name}，目前沒有癌症且護盾已滿，改為抽 1 張牌。`);
        }
      }
      break;
    }
    case "cleanse": {
      const target = side.battlefield.find((item) => item.blockedEvolution > 0);
      if (target) {
        target.blockedEvolution = 0;
        target.shield += 1;
        addLog(state, `${side.label} 使用 ${card.name}，清除 ${target.name} 的進化封鎖並補 1 層護盾。`);
      } else {
        drawCards(side, 1, state);
        addLog(state, `${side.label} 使用 ${card.name}，目前沒有異常，改為抽 1 張。`);
      }
      break;
    }
    case "crispr": {
      const created = createBestMissingComponent(side);
      const afflicted = side.battlefield.find((item) => item.blockedEvolution > 0 || item.stunnedTurns > 0);
      if (created) {
        if (ensureZoneSpace(sideKey, "lab", side.lab.length + 1 - LAB_LIMIT)) {
          side.lab.push(created);
          addLog(state, `${side.label} 使用 ${card.name}，編輯出缺少的 ${created.name}。`);
        }
      } else {
        drawCards(side, 1, state);
        addLog(state, `${side.label} 使用 ${card.name}，目前沒有明確缺件，改為抽 1 張。`);
      }

      if (afflicted) {
        afflicted.blockedEvolution = 0;
        afflicted.stunnedTurns = 0;
        afflicted.ready = !afflicted.attackUsedThisTurn;
        addLog(state, `${side.label} 的 ${afflicted.name} 同時解除阻斷狀態。`);
      }
      break;
    }
    case "heal": {
      if (side.healBlocked > 0) {
        addLog(state, `${side.label} 嘗試使用 ${card.name}，但本回合無法回復。`);
        break;
      }

      const target = findWeakestUnit(side.battlefield);
      if (target) {
        target.health = Math.min(target.maxHealth, target.health + 3);
        addLog(state, `${side.label} 使用 ${card.name}，回復 ${target.name} 3 點生命。`);
      } else {
        side.hp = Math.min(side.maxHp, side.hp + 2);
        addLog(state, `${side.label} 使用 ${card.name}，回復主體 2 點生命。`);
      }
      break;
    }
    case "hla": {
      const target = findPreferredHlaTarget(side);
      if (target) {
        target.shield += 2;
        target.blockedEvolution = 0;
        target.stunnedTurns = 0;
        target.ready = !target.attackUsedThisTurn;
        addLog(state, `${side.label} 使用 ${card.name}，強化 ${target.name}，賦予 2 層護盾並解除異常。`);
      } else {
        drawCards(side, 1, state);
        addLog(state, `${side.label} 使用 ${card.name}，目前沒有可標記的戰場單位，改為抽 1 張。`);
      }
      break;
    }
    case "pathology": {
      const target = findHighestTierUnit(enemy.battlefield);
      if (target) {
        const damage = target.health < target.maxHealth ? 4 : 2;
        applyDamage(target, damage);
        addLog(state, `${side.label} 使用 ${card.name}，分析後打擊 ${target.name}，造成 ${damage} 點傷害。`);
        removeDeadUnits(enemy, side);
      } else {
        drawCards(side, 1, state);
        addLog(state, `${side.label} 使用 ${card.name}，對手沒有戰場單位，改為抽 1 張。`);
      }
      break;
    }
    case "freeEvolution": {
      side.freeEvolution += 1;
      addLog(state, `${side.label} 使用 ${card.name}，下一次進化不消耗能量。`);
      break;
    }
    case "cellBoost": {
      side.nextCellShield += 1;
      drawCards(side, 1, state);
      addLog(state, `${side.label} 使用 ${card.name}，下一個細胞獲得護盾，並抽 1 張牌。`);
      break;
    }
    case "cancer": {
      enemy.cancerCountdown = 5;
      enemy.cancerOwnerSideKey = sideKey;
      addLog(state, `${side.label} 使用 ${card.name}，讓 ${enemy.label} 進入癌症倒數 5 回合；期間不能丟棄，結束時會被奪取當前最高攻擊單位。`);
      break;
    }
    case "flu": {
      enemy.energyPenaltyNextTurn += 1;
      const respiratory = enemy.battlefield.find((item) => item.tags.includes("呼吸"));
      if (respiratory) {
        applyDamage(respiratory, 2);
        addLog(state, `${side.label} 使用 ${card.name}，讓 ${enemy.label} 下回合少 1 點能量，並對 ${respiratory.name} 造成 2 點傷害。`);
      } else {
        const damage = applyPlayerDamage(enemy, 1);
        addLog(state, `${side.label} 使用 ${card.name}，讓 ${enemy.label} 下回合少 1 點能量，並讓 ${describePlayerDamage(enemy.label, damage)}。`);
      }
      removeDeadUnits(enemy, side);
      break;
    }
    case "mutation": {
      const target = findHighestAttackUnit(enemy.battlefield);
      if (target) {
        target.mutationDamage = Math.max(target.mutationDamage, 1);
        addLog(state, `${side.label} 使用 ${card.name}，讓 ${enemy.label} 的 ${target.name} 帶上遺傳性突變，之後每回合受到 1 點傷害。`);
      } else {
        addLog(state, `${side.label} 使用 ${card.name}，但對手戰場沒有可承受突變的單位。`);
      }
      break;
    }
    case "rnai": {
      const target = findHighestTierUnit(enemy.battlefield);
      if (target) {
        target.attack = Math.max(1, target.attack - 2);
        target.ready = false;
        target.stunnedTurns = Math.max(target.stunnedTurns, 1);
        addLog(state, `${side.label} 使用 ${card.name}，沉默 ${target.name}，使其攻擊 -2 並下回合無法攻擊。`);
      } else {
        addLog(state, `${side.label} 使用 ${card.name}，但對手戰場為空。`);
      }
      break;
    }
    case "antibiotic": {
      const target = enemy.battlefield.find((item) => item.tier === "特殊") || enemy.battlefield[0];
      if (target) {
        const damage = target.tier === "特殊" ? 3 : 2;
        applyDamage(target, damage);
        addLog(state, `${side.label} 使用 ${card.name}，對 ${target.name} 造成 ${damage} 點傷害。`);
        removeDeadUnits(enemy, side);
      } else {
        addLog(state, `${side.label} 使用 ${card.name}，但對手戰場為空。`);
      }
      break;
    }
    case "apoptosis": {
      if (enemy.battlefield.length) {
        side.apoptosisBonusActive = true;
        addLog(state, `${side.label} 使用 ${card.name}，本回合攻擊殘血戰場單位時會額外造成 2 點傷害。`);
      } else {
        addLog(state, `${side.label} 使用 ${card.name}，但對手戰場為空。`);
      }
      break;
    }
    case "signalBlock": {
      const target = findHighestTierUnit(enemy.battlefield);
      if (target) {
        target.ready = false;
        target.blockedEvolution = Math.max(target.blockedEvolution, 1);
        target.stunnedTurns = Math.max(target.stunnedTurns, 1);
        addLog(state, `${side.label} 使用 ${card.name}，阻斷 ${target.name}，使其下回合無法攻擊並暫停進化。`);
      } else {
        addLog(state, `${side.label} 使用 ${card.name}，但對手戰場為空。`);
      }
      break;
    }
    case "inflammation": {
      if (enemy.battlefield.length) {
        enemy.battlefield.forEach((target) => applyDamage(target, 1));
        addLog(state, `${side.label} 使用 ${card.name}，對 ${enemy.label} 全體戰場單位各造成 1 點傷害。`);
        removeDeadUnits(enemy, side);
      } else {
        addLog(state, `${side.label} 使用 ${card.name}，但對手戰場為空。`);
      }
      break;
    }
    default:
      addLog(state, `${side.label} 使用 ${card.name}。`);
  }
}

function applyOnSummonEffect(sideKey, enemy, card) {
  if (card.name === "T 細胞") {
    const target = enemy.battlefield.find((item) => item.tier === "特殊") || findWeakestUnit(enemy.battlefield);
    if (target) {
      const damage = target.tier === "特殊" ? 3 : 2;
      applyDamage(target, damage);
      addLog(state, `${card.name} 進場時鎖定 ${target.name}，造成 ${damage} 點傷害。`);
      removeDeadUnits(enemy, state.players[sideKey]);
    }
  }

  if (card.name === "大腸桿菌") {
    const target = enemy.battlefield[0];
    if (target) {
      applyDamage(target, 1);
      addLog(state, `${card.name} 進場時感染 ${target.name}，造成 1 點傷害。`);
      removeDeadUnits(enemy, state.players[sideKey]);
    }
  }

  if (card.name === "流感病毒") {
    enemy.energyPenaltyNextTurn += 1;
    addLog(state, `${card.name} 進場時使 ${enemy.label} 下回合少 1 點能量。`);
  }
}

function cleanupAfterAction(sideKey, enemy) {
  const side = state.players[sideKey];
  removeDeadUnits(side, enemy);
  removeDeadUnits(enemy, side);
  checkWinner();
}

function getAvailableRecipes(sideKey) {
  const side = state.players[sideKey];
  const options = [];

  ACTIVE_RECIPES.forEach((recipe, recipeIndex) => {
    const match = findRecipeMatch(side, recipe);
    if (!match) {
      return;
    }

    const tax = side.evolutionTax;
    const cost = side.freeEvolution > 0 ? 0 : 1 + tax;

    options.push({
      recipeIndex,
      recipe,
      match,
      cost,
      outputTier: CARD_LIBRARY[recipe.output].tier,
    });
  });

  return options.sort((left, right) => {
    const tierDiff = TIER_ORDER[right.outputTier] - TIER_ORDER[left.outputTier];
    if (tierDiff !== 0) {
      return tierDiff;
    }

    const priorityDiff = getEvolutionPriority(right.recipe.output) - getEvolutionPriority(left.recipe.output);
    if (priorityDiff !== 0) {
      return priorityDiff;
    }

    return left.cost - right.cost;
  });
}

function getEvolutionPriority(name) {
  return EVOLUTION_PRIORITY[name] ?? 0;
}

function findRecipeMatch(side, recipe) {
  const pool = [...side.lab, ...side.battlefield];
  const usedIds = new Set();
  const picked = [];

  for (const input of recipe.inputs) {
    const candidate = pool.find((card) => {
      if (usedIds.has(card.id)) {
        return false;
      }

      if (card.blockedEvolution > 0) {
        return false;
      }

      if (input === "任意一張 DNA 鹼基") {
        return DNA_BASES.has(card.name);
      }

      return card.name === input;
    });

    if (!candidate) {
      return null;
    }

    usedIds.add(candidate.id);
    picked.push(candidate);
  }

  return picked;
}

function canPayEvolution(side) {
  if (side.evolutionsRemaining <= 0) {
    return false;
  }

  const tax = side.evolutionTax;
  const cost = side.freeEvolution > 0 ? 0 : 1 + tax;
  return side.energy >= cost;
}

function canUnitAttack(card) {
  return Boolean(card && card.ready && !card.attackUsedThisTurn && card.health > 0 && card.stunnedTurns <= 0);
}

function evolveCard(sideKey, recipeIndex, options = {}) {
  const side = state.players[sideKey];
  const available = getAvailableRecipes(sideKey);
  const selected = available.find((item) => item.recipeIndex === recipeIndex);

  if (!selected || state.winner) {
    return;
  }

  if (side.evolutionsRemaining <= 0) {
    addLog(state, `${side.label} 這回合的進化次數已用完。`);
    if (!options.silentRender) {
      render();
    }
    return;
  }

  if (!canPayEvolution(side)) {
    addLog(state, `${side.label} 能量不足，暫時無法進化。`);
    if (!options.silentRender) {
      render();
    }
    return;
  }

  const result = createCard(selected.recipe.output);
  const targetZone = result.isBattleCard ? "battlefield" : "lab";
  const protectedIds = new Set(selected.match.map((card) => card.id));
  const consumedFromTargetZone = selected.match.filter((card) =>
    side[targetZone].some((item) => item.id === card.id)
  ).length;
  const targetLimit = targetZone === "battlefield" ? BATTLEFIELD_LIMIT : LAB_LIMIT;
  const overflow = side[targetZone].length - consumedFromTargetZone + 1 - targetLimit;

  if (!ensureZoneSpace(sideKey, targetZone, overflow, protectedIds)) {
    if (!options.silentRender) {
      render();
    }
    return;
  }

  const lineageSpentAttack = selected.match.some((card) => card.isBattleCard && card.attackUsedThisTurn);
  const lineageMutationDamage = selected.match.reduce(
    (highest, card) => (card.isBattleCard ? Math.max(highest, card.mutationDamage) : highest),
    0
  );
  const cost = side.freeEvolution > 0 ? 0 : 1 + side.evolutionTax;
  side.energy -= cost;
  side.evolutionsRemaining -= 1;
  if (side.freeEvolution > 0) {
    side.freeEvolution -= 1;
  }

  if (side.evolutionTax > 0) {
    side.evolutionTax = 0;
  }

  for (const card of selected.match) {
    removeCardFromZones(side, card.id);
    side.discard.push(card);
  }

  if (result.isBattleCard) {
    result.attackUsedThisTurn = lineageSpentAttack;
    result.mutationDamage = lineageMutationDamage;
    result.ready = !lineageSpentAttack;
    if (result.tier === "細胞" && side.nextCellShield > 0) {
      result.shield += side.nextCellShield;
      side.nextCellShield = 0;
    }
    if (result.tier === "細胞") {
      result.shield += 1;
    }
    side.battlefield.push(result);
  } else {
    side.lab.push(result);
  }

  addLog(
    state,
    `${side.label} 進化出 ${result.name}（消耗 ${selected.recipe.text}${cost ? `，能量 ${cost}` : "，本次免能量"}）。`
  );

  grantEvolutionReward(side, result);

  if (result.name === "人類個體") {
    state.winner = sideKey;
    addLog(state, `${side.label} 完成了人類個體，直接取得勝利。`);
  }

  cleanupAfterAction(sideKey, state.players[sideKey === "player" ? "ai" : "player"]);

  if (!options.silentRender) {
    render();
  }
}

function removeCardFromZones(side, cardId) {
  for (const zone of ["lab", "battlefield", "hand", "discard"]) {
    const index = side[zone].findIndex((card) => card.id === cardId);
    if (index !== -1) {
      return side[zone].splice(index, 1)[0];
    }
  }

  return null;
}

function discardZoneCard(sideKey, zone, cardId, options = {}) {
  const side = state.players[sideKey];

  if (side.cancerCountdown > 0) {
    addLog(state, `${side.label} 正受癌症影響，暫時不能丟棄卡牌。`);
    if (!options.silentRender) {
      render();
    }
    return false;
  }

  const card = removeCardFromZones(side, cardId);

  if (!card) {
    return false;
  }

  side.discard.push(card);
  addLog(state, `${side.label} 從 ${zone === "lab" ? "實驗區" : "戰場"} 丟棄 ${card.name}。`);

  if (!options.silentRender) {
    render();
  }

  return true;
}

function attackWithUnit(sideKey, cardId) {
  if (state.winner || state.activeSide !== sideKey) {
    return;
  }

  const side = state.players[sideKey];
  const attacker = side.battlefield.find((card) => card.id === cardId);

  if (!canUnitAttack(attacker)) {
    return;
  }

  resolveAttack(sideKey, attacker);
  render();
}

function attackWithAll(sideKey, options = {}) {
  const side = state.players[sideKey];

  for (const attacker of [...side.battlefield]) {
    if (!canUnitAttack(attacker) || state.winner) {
      continue;
    }

    if (options.smart && !shouldAutoAttack(sideKey, attacker)) {
      continue;
    }

    resolveAttack(sideKey, attacker);
  }
}

function shouldAutoAttack(sideKey, attacker) {
  const side = state.players[sideKey];
  const enemy = state.players[sideKey === "player" ? "ai" : "player"];
  const defender = enemy.battlefield[0];

  if (!defender || attacker.canBypassFrontline) {
    return true;
  }

  const attackerDurability = attacker.health + attacker.shield;
  const defenderDurability = defender.health + defender.shield;
  const attackerWouldSurvive = attackerDurability > defender.attack;
  const attackBonus = side.apoptosisBonusActive && defender.health < defender.maxHealth ? 2 : 0;
  const effectiveAttack = attacker.attack + attackBonus;
  const attackerCanKill = effectiveAttack >= defenderDurability;
  const attackerTier = TIER_ORDER[attacker.tier] ?? 0;
  const defenderTier = TIER_ORDER[defender.tier] ?? 0;
  const attackerIsDisposable = attacker.tier === "特殊";

  if (attackerCanKill) {
    return true;
  }

  if (attackerIsDisposable && effectiveAttack + 1 >= defenderDurability) {
    return true;
  }

  if (attackerWouldSurvive && attackerTier <= defenderTier) {
    return true;
  }

  return false;
}

function resolveAttack(sideKey, attacker) {
  const side = state.players[sideKey];
  const enemy = state.players[sideKey === "player" ? "ai" : "player"];
  const defender = attacker.canBypassFrontline ? null : enemy.battlefield[0];

  if (defender) {
    const attackBonus = side.apoptosisBonusActive && defender.health < defender.maxHealth ? 2 : 0;
    applyDamage(defender, attacker.attack + attackBonus);
    applyDamage(attacker, defender.attack);
    addLog(
      state,
      `${side.label} 的 ${attacker.name} 與 ${enemy.label} 的 ${defender.name} 交戰${attackBonus > 0 ? "，細胞凋亡使這次攻擊額外 +2 傷害" : ""}。`
    );
  } else {
    const damage = applyPlayerDamage(enemy, attacker.attack);
    const attackText =
      attacker.canBypassFrontline && enemy.battlefield.length
        ? `${side.label} 的 ${attacker.name} 越過前線直擊 ${enemy.label}`
        : `${side.label} 的 ${attacker.name} 直接攻擊 ${enemy.label}`;
    addLog(state, `${attackText}，${describePlayerDamage(enemy.label, damage)}。`);
  }

  attacker.attackUsedThisTurn = true;
  attacker.ready = false;
  cleanupAfterAction(sideKey, enemy);
}

function applyDamage(card, amount) {
  if (amount <= 0) {
    return;
  }

  const blocked = Math.min(card.shield, amount);
  card.shield -= blocked;
  card.health -= amount - blocked;
}

function applyPlayerDamage(side, amount) {
  if (amount <= 0) {
    return { dealt: 0, blocked: 0 };
  }

  const blocked = Math.min(side.bodyShield, amount);
  side.bodyShield -= blocked;

  const dealt = amount - blocked;
  side.hp -= dealt;

  return { dealt, blocked };
}

function gainBodyShield(side, amount) {
  if (amount <= 0) {
    return 0;
  }

  const nextShield = Math.min(BODY_SHIELD_CAP, side.bodyShield + amount);
  const gained = nextShield - side.bodyShield;
  side.bodyShield = nextShield;
  return gained;
}

function describePlayerDamage(targetLabel, result) {
  if (result.dealt > 0 && result.blocked > 0) {
    return `${targetLabel} 主體受到 ${result.dealt} 點傷害，另有 ${result.blocked} 點被本體護盾吸收`;
  }

  if (result.dealt > 0) {
    return `${targetLabel} 主體受到 ${result.dealt} 點傷害`;
  }

  if (result.blocked > 0) {
    return `${targetLabel} 的主體傷害被 ${result.blocked} 點本體護盾完全吸收`;
  }

  return `${targetLabel} 沒有受到傷害`;
}

function removeDeadUnits(side, enemy) {
  for (let index = side.battlefield.length - 1; index >= 0; index -= 1) {
    const card = side.battlefield[index];
    if (card.health > 0) {
      continue;
    }

    side.battlefield.splice(index, 1);
    side.discard.push(card);
    addLog(state, `${side.label} 的 ${card.name} 被摧毀。`);
  }
}

function grantEvolutionReward(side, card) {
  const reward = EVOLUTION_REWARDS[card.tier];

  if (!reward) {
    return;
  }

  const rewards = [];

  if (reward.draw) {
    drawCards(side, reward.draw, state);
    rewards.push(`抽 ${reward.draw} 張牌`);
  }

  if (reward.shield) {
    const gained = gainBodyShield(side, reward.shield);
    if (gained > 0) {
      rewards.push(`獲得 ${gained} 點本體護盾`);
    }
  }

  if (reward.energy) {
    const gained = Math.min(reward.energy, side.maxEnergy - side.energy);
    if (gained > 0) {
      side.energy += gained;
      rewards.push(`回復 ${gained} 點能量`);
    }
  }

  if (reward.freeEvolution) {
    side.freeEvolution += reward.freeEvolution;
    rewards.push(`下一次進化免能量`);
  }

  if (reward.extraEvolution) {
    side.evolutionsRemaining += reward.extraEvolution;
    rewards.push(`本回合追加 ${reward.extraEvolution} 次進化`);
  }

  if (rewards.length) {
    addLog(state, `${side.label} 因完成 ${card.tier} 級進化獲得獎勵：${rewards.join("、")}。`);
  }
}

function checkWinner() {
  if (state.winner) {
    return;
  }

  if (state.players.player.hp <= 0) {
    state.winner = "ai";
    addLog(state, "玩家生命歸零，AI 勝利。");
  } else if (state.players.ai.hp <= 0) {
    state.winner = "player";
    addLog(state, "AI 生命歸零，玩家勝利。");
  }
}

function chooseBestEvolution(sideKey) {
  return getAvailableRecipes(sideKey)[0] ?? null;
}

function getZoneLabel(zone) {
  return zone === "lab" ? "實驗區" : "戰場";
}

function ensureZoneSpace(sideKey, zone, overflow, protectedIds = new Set()) {
  if (overflow <= 0) {
    return true;
  }

  const side = state.players[sideKey];

  if (sideKey === "player") {
    addLog(state, `${getZoneLabel(zone)} 已滿，請先丟棄 1 張卡再繼續。`);
    return false;
  }

  for (let count = 0; count < overflow; count += 1) {
    const removed = autoDiscardFromZone(sideKey, zone, protectedIds);
    if (!removed) {
      const reason = side.cancerCountdown > 0 ? "而且正受癌症影響無法丟棄" : "";
      addLog(state, `${side.label} 的 ${getZoneLabel(zone)} 已滿${reason}，這次行動失敗。`);
      return false;
    }
  }

  return true;
}

function autoDiscardFromZone(sideKey, zone, protectedIds = new Set()) {
  const side = state.players[sideKey];
  if (side.cancerCountdown > 0) {
    return null;
  }

  const zoneCards = side[zone].filter((card) => !protectedIds.has(card.id));
  if (!zoneCards.length) {
    return null;
  }

  let target = zoneCards[0];

  if (zone === "battlefield") {
    target = [...zoneCards].sort((left, right) => {
      const leftScore = left.attack + left.health;
      const rightScore = right.attack + right.health;
      if (leftScore !== rightScore) {
        return leftScore - rightScore;
      }

      return TIER_ORDER[left.tier] - TIER_ORDER[right.tier];
    })[0];
  }

  removeCardFromZones(side, target.id);
  side.discard.push(target);
  addLog(state, `${side.label} 為了騰出 ${getZoneLabel(zone)}，自動丟棄 ${target.name}。`);
  return target;
}

function analyzeRecipeProgress(side, recipe) {
  const pool = [...side.lab, ...side.battlefield];
  const usedIds = new Set();
  const have = [];
  const missing = [];

  for (const input of recipe.inputs) {
    const candidate = pool.find((card) => {
      if (usedIds.has(card.id)) {
        return false;
      }

      if (input === "任意一張 DNA 鹼基") {
        return DNA_BASES.has(card.name);
      }

      return card.name === input;
    });

    if (candidate) {
      usedIds.add(candidate.id);
      have.push(candidate.name);
    } else {
      missing.push(input);
    }
  }

  return {
    recipe,
    have,
    missing,
    ready: missing.length === 0,
  };
}

function getRecipeByOutput(output) {
  return ACTIVE_RECIPES.find((recipe) => recipe.output === output) ?? null;
}

function formatCoachInput(input) {
  if (input === "任意一張 DNA 鹼基") {
    return "任意 DNA 鹼基（A / T / C / G）";
  }

  const normalized = normalizeRecipeInput(input);
  const recipe = getRecipeByOutput(normalized);
  if (!recipe) {
    return normalized;
  }

  return `${normalized}（${recipe.text}）`;
}

function buildCoachBridge(side, progress) {
  if (progress.missing.length !== 1) {
    return null;
  }

  const target = normalizeRecipeInput(progress.missing[0]);
  const recipe = getRecipeByOutput(target);
  if (!recipe) {
    return null;
  }

  const targetProgress = analyzeRecipeProgress(side, recipe);

  return {
    target,
    recipeText: recipe.text,
    missingDetailed: targetProgress.missing.map((input) => formatCoachInput(input)),
  };
}

function getCoachState(sideKey) {
  const side = state.players[sideKey];

  return ACTIVE_RECIPES.map((recipe) => analyzeRecipeProgress(side, recipe))
    .map((progress) => ({
      ...progress,
      missingDetailed: progress.missing.map((input) => formatCoachInput(input)),
      bridge: buildCoachBridge(side, progress),
    }))
    .sort((left, right) => {
      if (left.ready !== right.ready) {
        return left.ready ? -1 : 1;
      }

      if (left.missing.length !== right.missing.length) {
        return left.missing.length - right.missing.length;
      }

      const tierDiff = TIER_ORDER[CARD_LIBRARY[right.recipe.output].tier] - TIER_ORDER[CARD_LIBRARY[left.recipe.output].tier];
      if (tierDiff !== 0) {
        return tierDiff;
      }

      const priorityDiff = getEvolutionPriority(right.recipe.output) - getEvolutionPriority(left.recipe.output);
      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return right.have.length - left.have.length;
    })
    .slice(0, COACH_OUTPUT_LIMIT);
}

function getSortedProgressOptions(side) {
  return ACTIVE_RECIPES.map((recipe) => analyzeRecipeProgress(side, recipe))
    .sort((left, right) => {
      if (left.ready !== right.ready) {
        return left.ready ? -1 : 1;
      }

      if (left.missing.length !== right.missing.length) {
        return left.missing.length - right.missing.length;
      }

      const tierDiff = TIER_ORDER[CARD_LIBRARY[right.recipe.output].tier] - TIER_ORDER[CARD_LIBRARY[left.recipe.output].tier];
      if (tierDiff !== 0) {
        return tierDiff;
      }

      const priorityDiff = getEvolutionPriority(right.recipe.output) - getEvolutionPriority(left.recipe.output);
      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return right.have.length - left.have.length;
    });
}

function normalizeRecipeInput(input) {
  return input === "任意一張 DNA 鹼基" ? "腺嘌呤(A)" : input;
}

function resolveMissingStructureInput(side, input, depth = 0) {
  const wantedName = normalizeRecipeInput(input);
  const definition = CARD_LIBRARY[wantedName];

  if (!definition || depth >= 3) {
    return null;
  }

  if (definition.category === "結構" && !definition.isBattleCard) {
    return wantedName;
  }

  const recipe = ACTIVE_RECIPES.find((item) => item.output === wantedName);
  if (!recipe) {
    return null;
  }

  const progress = analyzeRecipeProgress(side, recipe);
  for (const missingInput of progress.missing) {
    const resolved = resolveMissingStructureInput(side, missingInput, depth + 1);
    if (resolved) {
      return resolved;
    }
  }

  return null;
}

function findUsefulDiscardCard(side) {
  const discardCards = side.discard.filter((card) => card.category === "結構" && !card.isBattleCard);

  for (const progress of getSortedProgressOptions(side)) {
    for (const input of progress.missing) {
      const wantedName = resolveMissingStructureInput(side, input);
      if (!wantedName) {
        continue;
      }
      const found = discardCards.find((card) => card.name === wantedName);
      if (found) {
        return found;
      }
    }
  }

  return discardCards[0] ?? null;
}

function createBestMissingComponent(side) {
  for (const progress of getSortedProgressOptions(side)) {
    for (const input of progress.missing) {
      const wantedName = resolveMissingStructureInput(side, input);
      if (!wantedName) {
        continue;
      }
      const definition = CARD_LIBRARY[wantedName];
      if (definition && definition.category === "結構" && !definition.isBattleCard) {
        return createCard(wantedName);
      }
    }
  }

  return null;
}

function findPreferredHlaTarget(side) {
  return side.battlefield.find((card) => card.name === "T 細胞") || findHighestTierUnit(side.battlefield);
}

function collectOwnedNames(side) {
  return new Set([...side.hand, ...side.lab, ...side.battlefield, ...side.discard].map((card) => card.name));
}

function getTutorialState(sideKey, availableRecipes) {
  const side = state.players[sideKey];
  const ownedNames = collectOwnedNames(side);
  const specializedCells = ["上皮細胞", "心肌細胞", "神經細胞", "肺泡細胞"];
  const tissues = ["上皮組織", "心肌組織", "神經組織", "肺泡組織"];
  const organs = ["皮膚", "心臟", "大腦", "肺"];
  const systems = ["外皮系統", "循環系統", "神經系統", "呼吸系統"];

  const steps = [
    {
      label: "把 1 張新素材放進實驗區",
      done: side.lab.length > STARTER_LAB.length,
    },
    {
      label: "先做出任一個核心胞器",
      done: ["核糖體", "細胞核", "粒線體"].some((name) => ownedNames.has(name)),
    },
    {
      label: "做出第一張專精細胞",
      done: specializedCells.some((name) => ownedNames.has(name)),
    },
    {
      label: "用細胞加蛋白質合成組織",
      done: tissues.some((name) => ownedNames.has(name)),
    },
    {
      label: "再用組織加專精素材推進成器官",
      done: organs.some((name) => ownedNames.has(name)) || systems.some((name) => ownedNames.has(name)),
    },
  ];

  const readyOutputs = availableRecipes.map((item) => item.recipe.output);
  let nextMove = "先決定你這局要走哪條細胞線，再為那一條線重複湊素材。";

  if (sideKey === "player" && side.materialPlaysRemaining <= 0 && side.evolutionsRemaining <= 0) {
    nextMove = "這回合的素材放置和進化都用完了，接下來考慮攻擊、打干擾卡，或直接結束回合。";
    return { steps, nextMove };
  }

  if (!steps[0].done) {
    nextMove = `先把手牌中的素材放進實驗區，但每回合只能放 ${MATERIAL_PLAYS_PER_TURN} 張，所以要先選最需要的。`;
  } else if (readyOutputs.includes("核糖體")) {
    nextMove = "你現在可以先做核糖體，它是所有細胞線都會用到的核心零件。";
  } else if (readyOutputs.includes("細胞核")) {
    nextMove = "你現在可以先做細胞核，這會讓你離第一張細胞更近。";
  } else if (readyOutputs.includes("粒線體")) {
    nextMove = "你現在可以先做粒線體；如果你想走心肌線，之後還會再用一次。";
  } else if (readyOutputs.some((name) => specializedCells.includes(name))) {
    const target = readyOutputs.find((name) => specializedCells.includes(name));
    nextMove = `你已經能做 ${target}。做出來之後，下一步通常是補 1 張蛋白質，把它往組織推進。`;
  } else if (readyOutputs.some((name) => tissues.includes(name))) {
    const target = readyOutputs.find((name) => tissues.includes(name));
    nextMove = `你現在可以做 ${target}。組織做出來後，再補對應的專精素材，就能往器官推進。`;
  } else if (readyOutputs.some((name) => organs.includes(name))) {
    const target = readyOutputs.find((name) => organs.includes(name));
    nextMove = `你現在可以做 ${target}。器官開始有明顯戰力，適合轉進中盤。`;
  } else if (readyOutputs.some((name) => systems.includes(name))) {
    const target = readyOutputs.find((name) => systems.includes(name));
    nextMove = `你現在可以做 ${target}。這已經是後期單位了，注意保留戰場位置。`;
  } else if (!steps[1].done) {
    nextMove = "目標先湊出核糖體、細胞核或粒線體三者之一。";
  } else if (!steps[2].done) {
    nextMove = "你已經有部分核心零件，現在要選定一條細胞線，補上最後那張專精素材。";
  } else if (!steps[3].done) {
    nextMove = "你已經有第一張細胞了，接下來優先補蛋白質，把這張細胞組成組織。";
  } else if (!steps[4].done) {
    nextMove = "你已經進入中盤，現在關鍵是補對應的專精素材，讓組織能往器官推進。";
  }

  return { steps, nextMove };
}

function findWeakestUnit(cards) {
  return [...cards].sort((left, right) => left.health - right.health)[0] ?? null;
}

function findHighestAttackUnit(cards) {
  return [...cards].sort((left, right) => {
    if (right.attack !== left.attack) {
      return right.attack - left.attack;
    }

    return TIER_ORDER[right.tier] - TIER_ORDER[left.tier];
  })[0] ?? null;
}

function findHighestTierUnit(cards) {
  return [...cards].sort((left, right) => {
    const tierDiff = TIER_ORDER[right.tier] - TIER_ORDER[left.tier];
    if (tierDiff !== 0) {
      return tierDiff;
    }

    return right.attack - left.attack;
  })[0] ?? null;
}

function handleClick(event) {
  const action = event.target.dataset.action;
  if (!action) {
    return;
  }

  if (action === "restart") {
    boot();
    return;
  }

  if (state.winner && action !== "restart") {
    return;
  }

  if (action === "play-card") {
    playCard("player", Number(event.target.dataset.index));
    return;
  }

  if (action === "evolve") {
    evolveCard("player", Number(event.target.dataset.recipeIndex));
    return;
  }

  if (action === "attack") {
    attackWithUnit("player", event.target.dataset.cardId);
    return;
  }

  if (action === "discard-lab-card") {
    if (state.activeSide !== "player") {
      return;
    }
    discardZoneCard("player", "lab", event.target.dataset.cardId);
    return;
  }

  if (action === "discard-battle-card") {
    if (state.activeSide !== "player") {
      return;
    }
    discardZoneCard("player", "battlefield", event.target.dataset.cardId);
    return;
  }

  if (action === "end-turn") {
    endPlayerTurn();
  }
}

function render() {
  const player = state.players.player;
  const ai = state.players.ai;
  const availableRecipes = getAvailableRecipes("player");
  const coachState = getCoachState("player");
  const tutorialState = getTutorialState("player", availableRecipes);
  const winnerLabel =
    state.winner === "player" ? "玩家勝利" : state.winner === "ai" ? "AI 勝利" : "對局進行中";

  app.innerHTML = `
    <section class="panel">
      <div class="panel-inner top-grid">
        <div>
          <div class="panel-title">
            <h2>對局狀態</h2>
            <span>${winnerLabel}</span>
          </div>
          <div class="status-grid">
            ${renderStatusCard("回合", `T${state.turn}`, `目前：${state.activeSide === "player" ? "玩家" : "AI"}`)}
            ${renderStatusCard("玩家", `HP ${player.hp} / ${player.maxHp}`, buildSideStatusMeta(player))}
            ${renderStatusCard("AI", `HP ${ai.hp} / ${ai.maxHp}`, buildSideStatusMeta(ai))}
          </div>
          <div class="controls">
            <button class="button button-primary" data-action="end-turn" ${state.activeSide !== "player" || state.winner ? "disabled" : ""}>
              結束回合
            </button>
            <button class="button button-secondary" data-action="restart">重新開始</button>
          </div>
        </div>
        <div class="version-note">
          <strong>v1 原則</strong><br />
          這版的目標是讓一局約 15 分鐘內結束，同時真的能推進到細胞後的階段。中間結構仍要自己做，但研究節奏不再被死路配方和過低素材量卡死。
        </div>
      </div>
    </section>

    <section class="section-grid">
      <div class="stack">
        ${renderGuidePanel(tutorialState, coachState, availableRecipes)}
        ${renderSidePanel("AI 區域", ai, false)}
        ${renderEvolutionPanel(availableRecipes)}
        ${renderSidePanel("玩家區域", player, true)}
      </div>
      ${renderLogPanel()}
    </section>
  `;
}

function renderGuidePanel(tutorialState, coachState, availableRecipes) {
  const readyOutputs = availableRecipes.map((item) => item.recipe.output);
  const battlefieldText = Number.isFinite(BATTLEFIELD_LIMIT) ? `戰場上限 ${BATTLEFIELD_LIMIT} 張` : "戰場不限張數";

  return `
    <section class="panel">
      <div class="panel-inner">
        <div class="panel-title">
          <h3>新手教學</h3>
          <span>從材料一路推到高階結構</span>
        </div>

        <div class="tutorial-callout">
          <strong>建議下一步</strong>
          <div class="guide-text">${tutorialState.nextMove}</div>
        </div>

        <div class="tutorial-list">
          ${tutorialState.steps
            .map(
              (step) => `
                <div class="tutorial-item">
                  <span class="badge ${step.done ? "badge-accent" : ""}">${step.done ? "完成" : "未完成"}</span>
                  <span>${step.label}</span>
                </div>
              `
            )
            .join("")}
        </div>

        <div class="guide-grid">
          <div class="guide-block">
            <strong>白話版流程</strong>
            <div class="guide-text">把 <code>細胞膜</code> 想成外殼，<code>細胞核</code> 想成指揮中心，<code>核糖體</code> 想成工廠，<code>粒線體</code> 想成電池。這四個湊齊後，再加一張專精素材，就能直接做出細胞。</div>
            <div class="guide-text">做出細胞後，不用先拚第二張同名細胞；先補 1 張 <code>蛋白質</code>，就能把它組成同名組織，再往器官與系統推進。</div>
          </div>

          <div class="guide-block">
            <strong>能量與區域</strong>
            <div class="guide-text">能量就是每回合的行動點。每回合會回到 3 點，用來打支援卡、特殊卡，或支付進化。</div>
            <div class="guide-text">此外每回合只能放 ${MATERIAL_PLAYS_PER_TURN} 張素材、進化 ${EVOLUTIONS_PER_TURN} 次。實驗區上限 ${LAB_LIMIT} 張，${battlefieldText}。</div>
            <div class="guide-text">一般戰鬥單位會先打對手戰場，只有帶 <code>直擊</code> 標籤的少數卡牌能越線打本體。放上戰場的結構仍然可以拿來進化，只要沒有被封鎖。</div>
            <div class="guide-text"><code>藥物</code> 會優先治療自己身上的癌症，沒有癌症時才補本體護盾；<code>定序儀</code> 則能解除戰場單位的遺傳性突變。</div>
            <div class="guide-text">進化獎勵與部分支持效果仍會提供本體護盾，但本體護盾最多累積到 ${BODY_SHIELD_CAP}。</div>
            <div class="guide-text">如果牌庫抽乾，棄牌區會洗回牌庫，但會先承受 1 點研究壓力，所以不會再卡成單純等疲勞。</div>
          </div>
        </div>

        <div class="guide-block">
          <strong>核心配方</strong>
          <div class="guide-recipes">
            <span class="badge">核糖體 = RNA + 蛋白質</span>
            <span class="badge">細胞核 = DNA + 蛋白質</span>
            <span class="badge">粒線體 = 細胞膜 + DNA</span>
            <span class="badge">上皮細胞 = 細胞四核心</span>
            <span class="badge">上皮組織 = 上皮細胞 + 蛋白質</span>
            <span class="badge">皮膚 = 上皮組織 + 蛋白質</span>
            <span class="badge">心肌細胞 = 四核心 + 額外粒線體</span>
            <span class="badge">神經細胞 = 四核心 + RNA</span>
            <span class="badge">肺泡細胞 = 四核心 + 額外細胞膜</span>
            <span class="badge badge-accent">做出細胞 / 組織 / 器官 / 系統都會拿研究獎勵，而且越後期越好</span>
          </div>
        </div>

        <div class="guide-block">
          <strong>你現在最接近的進化</strong>
          <div class="coach-list">
            ${coachState
              .map((item) => {
                const ready = readyOutputs.includes(item.recipe.output);
                const haveText = item.have.length ? `已有：${item.have.join("、")}` : "已有：還沒有關鍵材料";
                const missingText = item.missingDetailed.length ? `還缺：${item.missingDetailed.join("、")}` : "已可直接進化";
                const bridgeText = item.bridge ? `先做：${item.bridge.target} = ${item.bridge.recipeText}` : "";
                const bridgeMissingText =
                  item.bridge && item.bridge.missingDetailed.length
                    ? `${item.bridge.target} 目前還缺：${item.bridge.missingDetailed.join("、")}`
                    : "";

                return `
                  <div class="coach-item">
                    <div>
                      <strong>${item.recipe.output}</strong>
                      <div class="card-meta">${haveText}</div>
                      <div class="card-meta">${missingText}</div>
                      ${bridgeText ? `<div class="card-meta">${bridgeText}</div>` : ""}
                      ${bridgeMissingText ? `<div class="card-meta">${bridgeMissingText}</div>` : ""}
                    </div>
                    <span class="badge ${ready ? "badge-accent" : ""}">${ready ? "現在可做" : "準備中"}</span>
                  </div>
                `;
              })
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderStatusCard(label, value, meta) {
  return `
    <div class="status-card">
      <div class="label">${label}</div>
      <div class="value">${value}</div>
      <div class="card-meta">${meta}</div>
    </div>
  `;
}

function buildSideStatusMeta(side) {
  const statuses = [];

  if (side.cancerCountdown > 0) {
    statuses.push(`癌症 ${side.cancerCountdown}`);
  }

  if (side.apoptosisBonusActive) {
    statuses.push("凋亡加成中");
  }

  const statusText = statuses.length ? `，狀態 ${statuses.join(" / ")}` : "";
  return `本體護盾 ${side.bodyShield}，能量 ${side.energy}，放置 ${side.materialPlaysRemaining}，進化 ${side.evolutionsRemaining}${statusText}`;
}

function renderSidePanel(title, side, isPlayer) {
  const battlefieldTitle = Number.isFinite(BATTLEFIELD_LIMIT) ? `戰場 ${side.battlefield.length} / ${BATTLEFIELD_LIMIT}` : `戰場 ${side.battlefield.length}`;

  return `
    <section class="panel">
      <div class="panel-inner zone-grid">
        <div class="panel-title">
          <h3>${title}</h3>
          <span>手牌 ${side.hand.length} / 棄牌 ${side.discard.length}</span>
        </div>

        <div class="zone">
          <h3>${battlefieldTitle}</h3>
          <div class="card-row">
            ${side.battlefield.length ? side.battlefield.map((card) => renderBattleCard(card, isPlayer)).join("") : '<div class="empty">目前沒有戰鬥單位。</div>'}
          </div>
        </div>

        <div class="zone">
          <h3>實驗區 ${side.lab.length} / ${LAB_LIMIT}</h3>
          <div class="card-row">
            ${side.lab.length ? side.lab.map((card) => renderMaterialCard(card, isPlayer)).join("") : '<div class="empty">目前沒有素材。</div>'}
          </div>
        </div>

        <div class="zone">
          <h3>${isPlayer ? "手牌" : "AI 手牌預覽"}</h3>
          <div class="card-row">
            ${side.hand.length ? side.hand.map((card, index) => renderHandCard(card, index, isPlayer)).join("") : '<div class="empty">手牌為空。</div>'}
          </div>
        </div>
      </div>
    </section>
  `;
}

function getCardThemeClass(card) {
  if (card.category === "物品") {
    return "card-theme-item";
  }

  if (card.category === "角色") {
    return "card-theme-character";
  }

  if (card.category === "疾病") {
    return "card-theme-disease";
  }

  const structureThemes = {
    基礎分子: "card-theme-base",
    分子: "card-theme-molecule",
    胞器: "card-theme-organelle",
    細胞: "card-theme-cell",
    組織: "card-theme-tissue",
    器官: "card-theme-organ",
    系統: "card-theme-system",
    個體: "card-theme-individual",
    特殊: "card-theme-special",
  };

  return structureThemes[card.tier] ?? "card-theme-neutral";
}

function getCardSigil(card) {
  const compactName = card.name.replace(/\s+/g, "");
  const ascii = compactName.match(/[A-Za-z0-9]+/g)?.join("");

  if (ascii) {
    return ascii.slice(0, 6).toUpperCase();
  }

  if (compactName.length <= 3) {
    return compactName;
  }

  return compactName.slice(0, 2);
}

function getCardHeroLabel(card) {
  if (card.category === "結構" && card.isBattleCard) {
    return card.directPlayable ? "戰場單位" : "進化單位";
  }

  if (card.category === "結構") {
    return "進化素材";
  }

  if (card.category === "物品") {
    return "實驗工具";
  }

  if (card.category === "角色") {
    return "研究角色";
  }

  if (card.category === "疾病") {
    return "干擾事件";
  }

  return card.category;
}

function getCardHeroText(card) {
  if (card.category === "結構" && card.isBattleCard) {
    if (card.canBypassFrontline) {
      return "可越過前線直擊對手本體";
    }

    if (card.directPlayable) {
      return "可直接部署上場搶節奏";
    }

    return "透過研究進化誕生的主力單位";
  }

  if (card.category === "結構") {
    return card.tier === "基礎分子" ? "研究鏈的起點素材" : "可投入進化配方";
  }

  if (card.category === "物品") {
    return "立即提供器材支援";
  }

  if (card.category === "角色") {
    return "提供研究與培養增益";
  }

  if (card.category === "疾病") {
    return "破壞對手節奏與單位";
  }

  return "v1 卡牌";
}

function renderCardTopline(card, options = {}) {
  const leftText = options.leftText ?? (card.tier ?? card.category);
  const rightText = options.rightText ?? (options.showCost && card.cost != null ? `能量 ${card.cost}` : "");

  return `
    <div class="card-topline">
      <span class="card-ribbon">${leftText}</span>
      ${rightText ? `<span class="card-ribbon card-ribbon-strong">${rightText}</span>` : ""}
    </div>
  `;
}

function resolveAssetUrl(path) {
  const versionedPath = path.includes("?") ? `${path}&v=${FRONTEND_ASSET_VERSION}` : `${path}?v=${FRONTEND_ASSET_VERSION}`;

  if (typeof window !== "undefined" && window.location && typeof URL !== "undefined") {
    return new URL(versionedPath, window.location.href).toString();
  }

  return versionedPath;
}

function getCardArtPath(card) {
  const path = CARD_ART_MAP[card.name];
  return path ? resolveAssetUrl(path) : null;
}

function renderCardVisual(card, options = {}) {
  const artPath = getCardArtPath(card);

  if (!artPath) {
    return renderCardHero(card, options);
  }

  return `
    <div class="card-illustration">
      <img class="card-art" src="${artPath}" alt="${card.name} 卡面插圖" loading="lazy" />
    </div>
  `;
}

function renderCardHero(card, options = {}) {
  const label = options.label ?? getCardHeroLabel(card);
  const text = options.text ?? getCardHeroText(card);

  return `
    <div class="card-hero">
      <div class="card-sigil">${options.sigil ?? getCardSigil(card)}</div>
      <div class="card-hero-copy">
        <div class="card-hero-label">${label}</div>
        <div class="card-hero-text">${text}</div>
      </div>
    </div>
  `;
}

function renderCardShell(card, content, options = {}) {
  const classes = [
    "card",
    "card-face",
    getCardThemeClass(card),
    getCardArtPath(card) ? "card-illustrated" : "card-unillustrated",
    options.extraClass,
  ]
    .filter(Boolean)
    .join(" ");
  return `
    <article class="${classes}">
      <div class="card-shell">
        ${content}
      </div>
    </article>
  `;
}

function renderHiddenCardShell(card) {
  return `
    <article class="card card-back">
      <div class="card-shell">
        <div class="card-topline">
          <span class="card-ribbon">AI 手牌</span>
          <span class="card-ribbon card-ribbon-strong">${card.category}</span>
        </div>
        <div class="card-hero card-hero-back">
          <div class="card-sigil">BIO</div>
          <div class="card-hero-copy">
            <div class="card-hero-label">Unknown</div>
            <div class="card-hero-text">對手尚未公開這張牌。</div>
          </div>
        </div>
        <div class="card-copy">背面只保留牌型資訊，等待對手實際打出。</div>
      </div>
    </article>
  `;
}

function renderBattleCard(card, isPlayer) {
  const canAttack = canUnitAttack(card);
  const discardDisabled = state.activeSide !== "player" || state.winner || state.players.player.cancerCountdown > 0;
  const attackStatusBadge = card.attackUsedThisTurn
    ? '<span class="badge">已攻擊</span>'
    : canAttack
      ? '<span class="badge">可攻擊</span>'
      : '<span class="badge">待機</span>';
  const badges = [
    `<span class="badge badge-accent">${card.tier}</span>`,
    attackStatusBadge,
    card.canBypassFrontline ? '<span class="badge badge-danger">直擊</span>' : "",
    card.shield > 0 ? `<span class="badge badge-accent">護盾 ${card.shield}</span>` : "",
    card.mutationDamage > 0 ? `<span class="badge badge-danger">突變 ${card.mutationDamage}</span>` : "",
    card.blockedEvolution > 0 ? `<span class="badge badge-danger">封鎖 ${card.blockedEvolution}</span>` : "",
    card.stunnedTurns > 0 ? `<span class="badge badge-danger">阻斷 ${card.stunnedTurns}</span>` : "",
  ]
    .filter(Boolean)
    .join("");

  return renderCardShell(
    card,
    `
      ${renderCardTopline(card, { rightText: "戰場" })}
      ${renderCardVisual(card, { text: card.tags.length ? `標籤：${card.tags.join(" / ")}` : getCardHeroText(card) })}
      <div class="card-header">
        <div>
          <div class="card-name">${card.name}</div>
          <div class="card-meta">${card.category}</div>
        </div>
      </div>
      <div class="badge-row">${badges}</div>
      <div class="card-stats">
        <span>攻擊 ${card.attack}</span>
        <span>生命 ${card.health} / ${card.maxHealth}</span>
      </div>
      ${card.tags.length ? `<div class="card-copy">標籤：${card.tags.join("、")}</div>` : '<div class="card-copy">這張單位會在戰場上參與戰鬥與升階。</div>'}
      <div class="card-actions">
        ${
          isPlayer
            ? `
              <button class="tiny-button" data-action="attack" data-card-id="${card.id}" ${state.activeSide !== "player" || !canAttack || state.winner ? "disabled" : ""}>攻擊</button>
              <button class="tiny-button" data-action="discard-battle-card" data-card-id="${card.id}" ${discardDisabled ? "disabled" : ""}>丟棄</button>
            `
            : ""
        }
      </div>
    `,
    { extraClass: "card-battle" }
  );
}

function renderMaterialCard(card, isPlayer) {
  const discardDisabled = state.activeSide !== "player" || state.winner || state.players.player.cancerCountdown > 0;
  return renderCardShell(
    card,
    `
      ${renderCardTopline(card, { rightText: "實驗區" })}
      ${renderCardVisual(card)}
      <div class="card-header">
        <div>
          <div class="card-name">${card.name}</div>
          <div class="card-meta">${card.category}</div>
        </div>
      </div>
      <div class="badge-row">
        <span class="badge">${card.tier}</span>
      </div>
      <div class="card-copy">${CARD_GUIDE_TEXT[card.name] ?? "可作為進化素材。"}</div>
      ${
        isPlayer
          ? `<div class="card-actions"><button class="tiny-button" data-action="discard-lab-card" data-card-id="${card.id}" ${discardDisabled ? "disabled" : ""}>丟棄</button></div>`
          : ""
      }
    `,
    { extraClass: "card-material" }
  );
}

function renderHandCard(card, index, isPlayer) {
  if (!isPlayer) {
    return renderHiddenCardShell(card);
  }

  const playLabel = card.category === "結構" && !card.isBattleCard ? "放入實驗區" : `打出 ${card.cost ?? 0}`;
  const cannotDirectlyPlay = card.category === "結構" && card.isBattleCard && !card.directPlayable;
  const disabled =
    state.activeSide !== "player" ||
    state.winner ||
    cannotDirectlyPlay ||
    (card.cost ?? 0) > state.players.player.energy;

  return renderCardShell(
    card,
    `
      ${renderCardTopline(card, { showCost: card.category !== "結構" || card.isBattleCard })}
      ${renderCardVisual(card)}
      <div class="card-header">
        <div>
          <div class="card-name">${card.name}</div>
          <div class="card-meta">${card.category}</div>
        </div>
      </div>
      <div class="badge-row">
        ${card.tier ? `<span class="badge">${card.tier}</span>` : ""}
        ${card.effect ? `<span class="badge badge-accent">${effectLabel(card.effect)}</span>` : ""}
      </div>
      ${
        card.isBattleCard
          ? `<div class="card-stats"><span>攻擊 ${card.attack}</span><span>生命 ${card.health}</span></div>`
          : `<div class="card-copy">${CARD_GUIDE_TEXT[card.name] ?? handCardHint(card)}</div>`
      }
      <div class="card-actions">
        <button class="tiny-button" data-action="play-card" data-index="${index}" ${disabled ? "disabled" : ""}>
          ${cannotDirectlyPlay ? "需進化" : playLabel}
        </button>
      </div>
    `,
    { extraClass: card.isBattleCard ? "card-hand-battle" : "card-material" }
  );
}

function renderEvolutionPanel(recipes) {
  return `
    <section class="panel">
      <div class="panel-inner">
        <div class="panel-title">
          <h3>可進化配方</h3>
          <span>玩家能量 ${state.players.player.energy} / ${state.players.player.maxEnergy}，進化次數 ${state.players.player.evolutionsRemaining}</span>
        </div>
        <div class="evolution-list">
          ${
            recipes.length
              ? recipes
                  .map(
                    (item) => {
                      const disabledReason = getEvolutionDisabledReason(item);
                      return `
                      <div class="evolution-item">
                        <div>
                          <strong>${item.recipe.output}</strong>
                          <div class="card-meta">素材：${item.recipe.text}</div>
                          <div class="card-meta">消耗：${item.cost === 0 ? "本次免能量" : `${item.cost} 能量`}</div>
                          <div class="card-meta">${disabledReason ?? "可直接進化，戰場上的結構也能當素材。"}</div>
                        </div>
                        <button
                          class="tiny-button"
                          data-action="evolve"
                          data-recipe-index="${item.recipeIndex}"
                          ${disabledReason ? "disabled" : ""}
                        >
                          ${disabledReason ?? "進化"}
                        </button>
                      </div>
                    `;
                    }
                  )
                  .join("")
              : '<div class="empty">目前素材還不夠，先補手牌或放置素材。</div>'
          }
        </div>
      </div>
    </section>
  `;
}

function getEvolutionDisabledReason(item) {
  if (state.activeSide !== "player") {
    return "等待玩家回合";
  }

  if (state.winner) {
    return "對局已結束";
  }

  if (state.players.player.evolutionsRemaining <= 0) {
    return "本回合進化次數用完";
  }

  if (item.cost > state.players.player.energy) {
    return "能量不足";
  }

  return null;
}

function renderLogPanel() {
  return `
    <aside class="panel">
      <div class="panel-inner">
        <div class="panel-title">
          <h3>戰鬥記錄</h3>
          <span>最近 ${Math.min(state.log.length, LOG_LIMIT)} 筆</span>
        </div>
        <div class="log-list">
          ${state.log.map((entry) => `<div class="log-item">${entry}</div>`).join("")}
        </div>
      </div>
    </aside>
  `;
}

function handCardHint(card) {
  if (card.category === "結構") {
    return card.isBattleCard ? "特殊卡可直接部署。" : `素材放入實驗區後可用於進化，但每回合只能放 ${MATERIAL_PLAYS_PER_TURN} 張。`;
  }

  const hints = {
    recover: "把棄牌素材直接拉回實驗區，補節奏比補手牌更快。",
    draw: "補牌加速裝配。",
    sequencer: "優先解除己方戰場上的遺傳性突變，否則再回收缺件。",
    copy: "複製 DNA 或 RNA，優先直接放進實驗區。",
    shield: "保護現有或下一個細胞。",
    medicine: "優先治療己方癌症，沒有癌症時才轉成支持療法護盾。",
    cleanse: "移除進化封鎖。",
    crispr: "補出缺件，並解除己方阻斷。",
    antibiotic: "優先打擊特殊卡，也能壓低前線血量。",
    heal: "回復主體或場上單位。",
    hla: "保護己方前線，並解除異常。",
    pathology: "針對已受傷的戰場單位追加打擊。",
    freeEvolution: "下一次進化不耗能。",
    cellBoost: "下一個細胞帶護盾。",
    cancer: "讓敵方進入 5 回合癌症倒數，期間不能丟棄，最後奪取其最高攻擊單位。",
    flu: "壓低敵方下回合能量。",
    mutation: "讓敵方最高攻擊單位帶上遺傳性突變，每回合掉 1 血。",
    rnai: "讓敵方主力攻擊下降並失去下回合行動。",
    apoptosis: "本回合攻擊敵方殘血戰場單位時，額外造成 2 點傷害。",
    signalBlock: "讓敵方前線下回合無法攻擊。",
    inflammation: "對敵方全體戰場單位各造成 1 傷害。",
  };

  return hints[card.effect] ?? "v1 效果。";
}

function effectLabel(effect) {
  const labels = {
    recover: "回收",
    draw: "補牌",
    sequencer: "定序",
    copy: "複製",
    shield: "護盾",
    medicine: "藥物",
    cleanse: "修復",
    crispr: "編輯",
    antibiotic: "抗生素",
    heal: "回復",
    hla: "標記",
    pathology: "病理",
    freeEvolution: "免耗",
    cellBoost: "培養",
    cancer: "癌變",
    flu: "降速",
    mutation: "突變",
    rnai: "靜默",
    apoptosis: "凋亡",
    signalBlock: "阻斷",
    inflammation: "發炎",
  };

  return labels[effect] ?? effect;
}

function addLog(game, message) {
  game.log.unshift(message);
  game.log = game.log.slice(0, LOG_LIMIT);
}

function shuffle(items) {
  const array = [...items];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[swapIndex]] = [array[swapIndex], array[index]];
  }
  return array;
}
