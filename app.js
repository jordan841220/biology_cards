const DNA_BASES = new Set([
  "腺嘌呤(A)",
  "胸腺嘧啶(T)",
  "胞嘧啶(C)",
  "鳥糞嘌呤(G)",
]);

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
  大腦: { attack: 7, health: 8, tags: ["器官"] },
  肺: { attack: 6, health: 10, tags: ["器官", "呼吸"] },
  外皮系統: { attack: 8, health: 12, tags: ["系統"] },
  循環系統: { attack: 9, health: 12, tags: ["系統"] },
  神經系統: { attack: 9, health: 11, tags: ["系統"] },
  呼吸系統: { attack: 8, health: 12, tags: ["系統", "呼吸"] },
  人類個體: { attack: 13, health: 18, tags: ["個體"] },
  大腸桿菌: { attack: 3, health: 4, tags: ["特殊", "感染"] },
  流感病毒: { attack: 2, health: 3, tags: ["特殊", "呼吸"] },
};

const CARD_GUIDE_TEXT = {
  "腺嘌呤(A)": "做 DNA 用的零件。",
  "胸腺嘧啶(T)": "做 DNA 用的零件。",
  "胞嘧啶(C)": "做 DNA 用的零件。",
  "鳥糞嘌呤(G)": "做 DNA 用的零件。",
  "尿嘧啶(U)": "做 RNA 用的零件。",
  胺基酸: "兩張胺基酸可做蛋白質。",
  磷脂質: "兩張磷脂質可做細胞膜。",
  DNA: "可用來做細胞核或粒線體。",
  RNA: "可用來做核糖體、細胞核或神經細胞。",
  蛋白質: "可用來做核糖體、細胞核或上皮細胞。",
  細胞膜: "可用來做粒線體，也能作為細胞構築的一部分。",
  核糖體: "做細胞時需要的核心工廠。",
  細胞核: "做細胞時需要的核心指揮中心。",
  粒線體: "做細胞時需要的核心電池，也能做心肌細胞。",
  上皮細胞: "本版的高階細胞之一。",
  心肌細胞: "本版的高階細胞之一。",
  神經細胞: "本版的高階細胞之一。",
  肺泡細胞: "本版的高階細胞之一。",
  大腸桿菌: "特殊卡，可直接部署到戰場。",
  流感病毒: "特殊卡，可直接部署到戰場。",
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
  染色體: createMaterialCard("胞器"),
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
  大腦: createBattleCard("器官"),
  肺: createBattleCard("器官"),
  外皮系統: createBattleCard("系統"),
  循環系統: createBattleCard("系統"),
  神經系統: createBattleCard("系統"),
  呼吸系統: createBattleCard("系統"),
  人類個體: createBattleCard("個體"),
  大腸桿菌: createBattleCard("特殊", { cost: 2, directPlayable: true }),
  流感病毒: createBattleCard("特殊", { cost: 2, directPlayable: true }),
  移液器: createSupportCard("物品", 1, "recover"),
  離心機: createSupportCard("物品", 1, "draw"),
  "PCR 儀": createSupportCard("物品", 1, "copy"),
  培養箱: createSupportCard("物品", 1, "shield"),
  "CRISPR 試劑組": createSupportCard("物品", 1, "cleanse"),
  醫師: createSupportCard("角色", 1, "heal"),
  生資工程師: createSupportCard("角色", 1, "insight"),
  分子生物學家: createSupportCard("角色", 1, "freeEvolution"),
  細胞培養師: createSupportCard("角色", 1, "cellBoost"),
  癌症: createSupportCard("疾病", 1, "cancer"),
  流感: createSupportCard("疾病", 1, "flu"),
  遺傳性突變: createSupportCard("疾病", 1, "mutation"),
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
    output: "染色體",
    inputs: ["DNA", "蛋白質"],
    text: "DNA + 蛋白質",
  },
  {
    output: "核糖體",
    inputs: ["RNA", "蛋白質"],
    text: "RNA + 蛋白質",
  },
  {
    output: "細胞核",
    inputs: ["DNA", "RNA", "蛋白質"],
    text: "DNA + RNA + 蛋白質",
  },
  {
    output: "粒線體",
    inputs: ["細胞膜", "DNA", "蛋白質"],
    text: "細胞膜 + DNA + 蛋白質",
  },
  {
    output: "上皮細胞",
    inputs: ["細胞膜", "細胞核", "核糖體", "粒線體", "蛋白質"],
    text: "細胞四核心 + 蛋白質",
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
    inputs: ["上皮細胞", "上皮細胞"],
    text: "上皮細胞 x2",
  },
  {
    output: "心肌組織",
    inputs: ["心肌細胞", "心肌細胞"],
    text: "心肌細胞 x2",
  },
  {
    output: "神經組織",
    inputs: ["神經細胞", "神經細胞"],
    text: "神經細胞 x2",
  },
  {
    output: "肺泡組織",
    inputs: ["肺泡細胞", "肺泡細胞"],
    text: "肺泡細胞 x2",
  },
  {
    output: "皮膚",
    inputs: ["上皮組織", "上皮組織"],
    text: "上皮組織 x2",
  },
  {
    output: "心臟",
    inputs: ["心肌組織", "心肌組織"],
    text: "心肌組織 x2",
  },
  {
    output: "大腦",
    inputs: ["神經組織", "神經組織"],
    text: "神經組織 x2",
  },
  {
    output: "肺",
    inputs: ["肺泡組織", "肺泡組織"],
    text: "肺泡組織 x2",
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
const LAB_LIMIT = 8;
const BATTLEFIELD_LIMIT = 3;
const MATERIAL_PLAYS_PER_TURN = 2;
const EVOLUTIONS_PER_TURN = 1;
const ACTIVE_RECIPES = RECIPES.filter(
  (recipe) => TIER_ORDER[CARD_LIBRARY[recipe.output].tier] <= TIER_ORDER[PROTOTYPE_TIER_CAP]
);
const COACH_OUTPUT_LIMIT = 6;

const DECK_BLUEPRINT = {
  "腺嘌呤(A)": 2,
  "胸腺嘧啶(T)": 2,
  "胞嘧啶(C)": 2,
  "鳥糞嘌呤(G)": 2,
  "尿嘧啶(U)": 2,
  胺基酸: 4,
  磷脂質: 4,
  DNA: 2,
  RNA: 2,
  蛋白質: 2,
  細胞膜: 2,
  細胞核: 1,
  核糖體: 1,
  粒線體: 1,
  移液器: 2,
  離心機: 2,
  "PCR 儀": 1,
  培養箱: 1,
  "CRISPR 試劑組": 1,
  醫師: 1,
  生資工程師: 1,
  分子生物學家: 1,
  細胞培養師: 1,
  癌症: 1,
  流感: 1,
  遺傳性突變: 1,
  大腸桿菌: 1,
  流感病毒: 1,
};

const STARTER_LAB = ["DNA", "RNA", "蛋白質", "細胞膜"];
const INITIAL_HAND_SIZE = 5;
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

  addLog(game, "遊戲開始。雙方都帶著 starter lab 進場，先驗證進化與對戰節奏。");
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
    healBlocked: 0,
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
    shield: 0,
    blockedEvolution: 0,
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
      side.hp -= 1;
      addLog(game, `${side.label} 牌庫空了，疲勞傷害 1。`);
      if (side.hp <= 0) {
        game.winner = side.label === "玩家" ? "ai" : "player";
        addLog(game, `${side.label} 因疲勞倒下。`);
        break;
      }
      continue;
    }

    side.hand.push(side.deck.pop());
  }
}

function beginTurn(sideKey, game, options = {}) {
  const side = game.players[sideKey];
  game.activeSide = sideKey;

  const penalty = side.energyPenaltyNextTurn;
  side.energy = Math.max(1, side.maxEnergy - penalty);
  side.energyPenaltyNextTurn = 0;
  side.materialPlaysRemaining = MATERIAL_PLAYS_PER_TURN;
  side.evolutionsRemaining = EVOLUTIONS_PER_TURN;

  if (!options.skipDraw) {
    drawCards(side, 2, game);
  }

  for (const card of side.battlefield) {
    if (card.health > 0) {
      card.ready = true;
    }

    if (card.blockedEvolution > 0) {
      card.blockedEvolution -= 1;
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

    const playIndex = chooseAiPlayableCard(side);
    if (playIndex !== -1) {
      playCard(sideKey, playIndex, { silentRender: true });
      playAllFreeMaterials(sideKey);
      continue;
    }

    break;
  }

  attackWithAll(sideKey);
  addLog(state, "AI 結束回合。");
}

function chooseAiPlayableCard(side) {
  const hand = side.hand;

  const cardIndex = hand.findIndex((card) => {
    if (card.category === "疾病") {
      return state.players.player.battlefield.length > 0 && side.energy >= card.cost;
    }

    if (card.category === "結構" && !card.isBattleCard && side.materialPlaysRemaining <= 0) {
      return false;
    }

    return card.directPlayable && side.energy >= (card.cost ?? 0);
  });

  return cardIndex;
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
    card.ready = false;
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
        side.hand.push(recovered);
        addLog(state, `${side.label} 使用 ${card.name}，回收 ${recovered.name}。`);
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
    case "copy": {
      const target = side.lab.find((item) => item.name === "DNA" || item.name === "RNA");
      if (target) {
        side.hand.push(createCard(target.name));
        addLog(state, `${side.label} 使用 ${card.name}，複製 1 張 ${target.name} 到手牌。`);
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
      const target = findHighestTierUnit(enemy.battlefield);
      if (target) {
        target.blockedEvolution = 2;
        applyDamage(target, 1);
        addLog(state, `${side.label} 使用 ${card.name}，封鎖 ${enemy.label} 的 ${target.name} 進化 2 回合並造成 1 點傷害。`);
        removeDeadUnits(enemy, side);
      } else {
        enemy.hp -= 1;
        addLog(state, `${side.label} 使用 ${card.name}，沒有目標，改為對 ${enemy.label} 造成 1 點傷害。`);
      }
      break;
    }
    case "flu": {
      enemy.energyPenaltyNextTurn += 1;
      const respiratory = enemy.battlefield.find((item) => item.tags.includes("呼吸"));
      if (respiratory) {
        applyDamage(respiratory, 2);
        addLog(state, `${side.label} 使用 ${card.name}，讓 ${enemy.label} 下回合少 1 點能量，並對 ${respiratory.name} 造成 2 點傷害。`);
      } else {
        enemy.hp -= 1;
        addLog(state, `${side.label} 使用 ${card.name}，讓 ${enemy.label} 下回合少 1 點能量，並造成 1 點主體傷害。`);
      }
      removeDeadUnits(enemy, side);
      break;
    }
    case "mutation": {
      const labIndex = enemy.lab.findIndex((item) => item.name === "DNA" || item.name === "RNA");
      if (labIndex !== -1) {
        const removed = enemy.lab.splice(labIndex, 1)[0];
        enemy.discard.push(removed);
        addLog(state, `${side.label} 使用 ${card.name}，破壞 ${enemy.label} 的 ${removed.name}。`);
      } else {
        enemy.evolutionTax += 1;
        addLog(state, `${side.label} 使用 ${card.name}，讓 ${enemy.label} 下一次進化多消耗 1 點能量。`);
      }
      break;
    }
    default:
      addLog(state, `${side.label} 使用 ${card.name}。`);
  }
}

function applyOnSummonEffect(sideKey, enemy, card) {
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

    return left.cost - right.cost;
  });
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
    result.ready = false;
    if (result.tier === "細胞" && side.nextCellShield > 0) {
      result.shield += side.nextCellShield;
      side.nextCellShield = 0;
    }
    side.battlefield.push(result);
  } else {
    side.lab.push(result);
  }

  addLog(
    state,
    `${side.label} 進化出 ${result.name}（消耗 ${selected.recipe.text}${cost ? `，能量 ${cost}` : "，本次免能量"}）。`
  );

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
  const enemy = state.players[sideKey === "player" ? "ai" : "player"];
  const attacker = side.battlefield.find((card) => card.id === cardId);

  if (!attacker || !attacker.ready) {
    return;
  }

  const defender = enemy.battlefield[0];

  if (defender) {
    applyDamage(defender, attacker.attack);
    applyDamage(attacker, defender.attack);
    addLog(state, `${side.label} 的 ${attacker.name} 與 ${enemy.label} 的 ${defender.name} 交戰。`);
  } else {
    enemy.hp -= attacker.attack;
    addLog(state, `${side.label} 的 ${attacker.name} 直接攻擊 ${enemy.label}，造成 ${attacker.attack} 點傷害。`);
  }

  attacker.ready = false;
  cleanupAfterAction(sideKey, enemy);
  render();
}

function attackWithAll(sideKey) {
  const side = state.players[sideKey];

  for (const attacker of [...side.battlefield]) {
    if (!attacker.ready || state.winner) {
      continue;
    }

    const enemy = state.players[sideKey === "player" ? "ai" : "player"];
    const defender = enemy.battlefield[0];

    if (defender) {
      applyDamage(defender, attacker.attack);
      applyDamage(attacker, defender.attack);
      addLog(state, `${side.label} 的 ${attacker.name} 與 ${enemy.label} 的 ${defender.name} 交戰。`);
    } else {
      enemy.hp -= attacker.attack;
      addLog(state, `${side.label} 的 ${attacker.name} 直接攻擊 ${enemy.label}，造成 ${attacker.attack} 點傷害。`);
    }

    attacker.ready = false;
    cleanupAfterAction(sideKey, enemy);
  }
}

function applyDamage(card, amount) {
  if (amount <= 0) {
    return;
  }

  if (card.shield > 0) {
    card.shield -= 1;
    return;
  }

  card.health -= amount;
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
      addLog(state, `${side.label} 的 ${getZoneLabel(zone)} 已滿，這次行動失敗。`);
      return false;
    }
  }

  return true;
}

function autoDiscardFromZone(sideKey, zone, protectedIds = new Set()) {
  const side = state.players[sideKey];
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

function getCoachState(sideKey) {
  const side = state.players[sideKey];
  const ownedNames = collectOwnedNames(side);

  return ACTIVE_RECIPES.map((recipe) => analyzeRecipeProgress(side, recipe))
    .filter((progress) => !ownedNames.has(progress.recipe.output) || progress.recipe.output === "人類個體")
    .sort((left, right) => {
      if (left.ready !== right.ready) {
        return left.ready ? -1 : 1;
      }

      if (left.missing.length !== right.missing.length) {
        return left.missing.length - right.missing.length;
      }

      const leftTier = TIER_ORDER[CARD_LIBRARY[left.recipe.output].tier];
      const rightTier = TIER_ORDER[CARD_LIBRARY[right.recipe.output].tier];
      if (leftTier !== rightTier) {
        return leftTier - rightTier;
      }

      return right.have.length - left.have.length;
    })
    .slice(0, COACH_OUTPUT_LIMIT);
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
      label: "用兩張同名細胞合成組織",
      done: tissues.some((name) => ownedNames.has(name)),
    },
    {
      label: "再把組織推進成器官或系統",
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
    nextMove = "先把手牌中的素材放進實驗區，但每回合只能放 2 張，所以要先選最需要的。";
  } else if (readyOutputs.includes("核糖體")) {
    nextMove = "你現在可以先做核糖體，它是所有細胞線都會用到的核心零件。";
  } else if (readyOutputs.includes("細胞核")) {
    nextMove = "你現在可以先做細胞核，這會讓你離第一張細胞更近。";
  } else if (readyOutputs.includes("粒線體")) {
    nextMove = "你現在可以先做粒線體；如果你想走心肌線，之後還會再用一次。";
  } else if (readyOutputs.some((name) => specializedCells.includes(name))) {
    const target = readyOutputs.find((name) => specializedCells.includes(name));
    nextMove = `你已經能做 ${target}。做出來之後，下一步要想辦法再複製同一條細胞線，才能往組織升。`;
  } else if (readyOutputs.some((name) => tissues.includes(name))) {
    const target = readyOutputs.find((name) => tissues.includes(name));
    nextMove = `你現在可以做 ${target}。如果想走長線，優先把同名細胞疊成組織。`;
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
    nextMove = "你已經有第一張細胞了，接下來不是亂進化，而是要做出第二張同名細胞，才能升組織。";
  } else if (!steps[4].done) {
    nextMove = "你已經進入中盤，現在關鍵是複製同一路線，讓組織能往器官推進。";
  }

  return { steps, nextMove };
}

function findWeakestUnit(cards) {
  return [...cards].sort((left, right) => left.health - right.health)[0] ?? null;
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
            ${renderStatusCard("玩家", `HP ${player.hp} / ${player.maxHp}`, `能量 ${player.energy}，放置 ${player.materialPlaysRemaining}，進化 ${player.evolutionsRemaining}`)}
            ${renderStatusCard("AI", `HP ${ai.hp} / ${ai.maxHp}`, `能量 ${ai.energy}，放置 ${ai.materialPlaysRemaining}，進化 ${ai.evolutionsRemaining}`)}
          </div>
          <div class="controls">
            <button class="button button-primary" data-action="end-turn" ${state.activeSide !== "player" || state.winner ? "disabled" : ""}>
              結束回合
            </button>
            <button class="button button-secondary" data-action="restart">重新開始</button>
          </div>
        </div>
        <div class="prototype-note">
          <strong>Prototype 原則</strong><br />
          這版重新拉回長線進化。每回合只有有限的素材放置與進化次數，所以不能再無腦把所有東西都丟進實驗區。
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
            <div class="guide-text">之後不是一直往上點，而是要選一條路線重複做同名細胞，因為兩張同名細胞才能升組織，再往器官與系統推進。</div>
          </div>

          <div class="guide-block">
            <strong>能量與區域</strong>
            <div class="guide-text">能量就是每回合的行動點。每回合會回到 3 點，用來打支援卡、特殊卡，或支付進化。</div>
            <div class="guide-text">此外每回合只能放 2 張素材、進化 1 次。實驗區上限 ${LAB_LIMIT} 張，戰場上限 ${BATTLEFIELD_LIMIT} 張。區滿了就要先丟棄。</div>
          </div>
        </div>

        <div class="guide-block">
          <strong>核心配方</strong>
          <div class="guide-recipes">
            <span class="badge">核糖體 = RNA + 蛋白質</span>
            <span class="badge">細胞核 = DNA + RNA + 蛋白質</span>
            <span class="badge">粒線體 = 細胞膜 + DNA + 蛋白質</span>
            <span class="badge">上皮細胞 = 四核心 + 蛋白質</span>
            <span class="badge">心肌細胞 = 四核心 + 額外粒線體</span>
            <span class="badge">神經細胞 = 四核心 + RNA</span>
            <span class="badge">肺泡細胞 = 四核心 + 額外細胞膜</span>
          </div>
        </div>

        <div class="guide-block">
          <strong>你現在最接近的進化</strong>
          <div class="coach-list">
            ${coachState
              .map((item) => {
                const ready = readyOutputs.includes(item.recipe.output);
                const haveText = item.have.length ? `已有：${item.have.join("、")}` : "已有：還沒有關鍵材料";
                const missingText = item.missing.length ? `還缺：${item.missing.join("、")}` : "已可直接進化";

                return `
                  <div class="coach-item">
                    <div>
                      <strong>${item.recipe.output}</strong>
                      <div class="card-meta">${haveText}</div>
                      <div class="card-meta">${missingText}</div>
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

function renderSidePanel(title, side, isPlayer) {
  return `
    <section class="panel">
      <div class="panel-inner zone-grid">
        <div class="panel-title">
          <h3>${title}</h3>
          <span>手牌 ${side.hand.length} / 棄牌 ${side.discard.length}</span>
        </div>

        <div class="zone">
          <h3>戰場 ${side.battlefield.length} / ${BATTLEFIELD_LIMIT}</h3>
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

function renderBattleCard(card, isPlayer) {
  const badges = [
    `<span class="badge badge-accent">${card.tier}</span>`,
    card.ready ? '<span class="badge">可攻擊</span>' : '<span class="badge">待機</span>',
    card.shield > 0 ? `<span class="badge badge-accent">護盾 ${card.shield}</span>` : "",
    card.blockedEvolution > 0 ? `<span class="badge badge-danger">封鎖 ${card.blockedEvolution}</span>` : "",
  ]
    .filter(Boolean)
    .join("");

  return `
    <article class="card">
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
      ${card.tags.length ? `<div class="card-meta">標籤：${card.tags.join("、")}</div>` : ""}
      <div class="card-actions">
        ${
          isPlayer
            ? `
              <button class="tiny-button" data-action="attack" data-card-id="${card.id}" ${state.activeSide !== "player" || !card.ready || state.winner ? "disabled" : ""}>攻擊</button>
              <button class="tiny-button" data-action="discard-battle-card" data-card-id="${card.id}" ${state.activeSide !== "player" || state.winner ? "disabled" : ""}>丟棄</button>
            `
            : ""
        }
      </div>
    </article>
  `;
}

function renderMaterialCard(card, isPlayer) {
  return `
    <article class="card card-material">
      <div class="card-header">
        <div>
          <div class="card-name">${card.name}</div>
          <div class="card-meta">${card.category}</div>
        </div>
      </div>
      <div class="badge-row">
        <span class="badge">${card.tier}</span>
      </div>
      <div class="card-meta">${CARD_GUIDE_TEXT[card.name] ?? "可作為進化素材。"}</div>
      ${
        isPlayer
          ? `<div class="card-actions"><button class="tiny-button" data-action="discard-lab-card" data-card-id="${card.id}" ${state.activeSide !== "player" || state.winner ? "disabled" : ""}>丟棄</button></div>`
          : ""
      }
    </article>
  `;
}

function renderHandCard(card, index, isPlayer) {
  if (!isPlayer) {
    return `
      <article class="card card-material">
        <div class="card-header">
          <div>
            <div class="card-name">未知手牌</div>
            <div class="card-meta">${card.category}</div>
          </div>
        </div>
        <div class="badge-row">
          <span class="badge">${card.tier ?? card.category}</span>
        </div>
      </article>
    `;
  }

  const playLabel = card.category === "結構" && !card.isBattleCard ? "放入實驗區" : `打出 ${card.cost ?? 0}`;
  const cannotDirectlyPlay = card.category === "結構" && card.isBattleCard && !card.directPlayable;
  const disabled =
    state.activeSide !== "player" ||
    state.winner ||
    cannotDirectlyPlay ||
    (card.cost ?? 0) > state.players.player.energy;

  return `
    <article class="card ${card.isBattleCard ? "" : "card-material"}">
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
          : `<div class="card-meta">${CARD_GUIDE_TEXT[card.name] ?? handCardHint(card)}</div>`
      }
      <div class="card-actions">
        <button class="tiny-button" data-action="play-card" data-index="${index}" ${disabled ? "disabled" : ""}>
          ${cannotDirectlyPlay ? "需進化" : playLabel}
        </button>
      </div>
    </article>
  `;
}

function renderEvolutionPanel(recipes) {
  return `
    <section class="panel">
      <div class="panel-inner">
        <div class="panel-title">
          <h3>可進化配方</h3>
          <span>玩家能量 ${state.players.player.energy} / 3，進化次數 ${state.players.player.evolutionsRemaining}</span>
        </div>
        <div class="evolution-list">
          ${
            recipes.length
              ? recipes
                  .map(
                    (item) => `
                      <div class="evolution-item">
                        <div>
                          <strong>${item.recipe.output}</strong>
                          <div class="card-meta">素材：${item.recipe.text}</div>
                          <div class="card-meta">消耗：${item.cost === 0 ? "本次免能量" : `${item.cost} 能量`}</div>
                        </div>
                        <button
                          class="tiny-button"
                          data-action="evolve"
                          data-recipe-index="${item.recipeIndex}"
                          ${state.activeSide !== "player" || state.winner || item.cost > state.players.player.energy || state.players.player.evolutionsRemaining <= 0 ? "disabled" : ""}
                        >
                          進化
                        </button>
                      </div>
                    `
                  )
                  .join("")
              : '<div class="empty">目前素材還不夠，先補手牌或放置素材。</div>'
          }
        </div>
      </div>
    </section>
  `;
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
    return card.isBattleCard ? "特殊卡可直接部署。" : "素材放入實驗區後可用於進化，但每回合只能放 2 張。";
  }

  const hints = {
    recover: "回收棄牌素材，沒有素材時改為抽牌。",
    draw: "補牌加速裝配。",
    copy: "複製 DNA 或 RNA。",
    shield: "保護現有或下一個細胞。",
    cleanse: "移除進化封鎖。",
    heal: "回復主體或場上單位。",
    insight: "抽牌並增加資訊優勢。",
    freeEvolution: "下一次進化不耗能。",
    cellBoost: "下一個細胞帶護盾。",
    cancer: "封鎖敵方高階單位進化。",
    flu: "壓低敵方下回合能量。",
    mutation: "破壞敵方 DNA / RNA 或加稅。",
  };

  return hints[card.effect] ?? "原型效果。";
}

function effectLabel(effect) {
  const labels = {
    recover: "回收",
    draw: "補牌",
    copy: "複製",
    shield: "護盾",
    cleanse: "修復",
    heal: "回復",
    insight: "分析",
    freeEvolution: "免耗",
    cellBoost: "培養",
    cancer: "封鎖",
    flu: "降速",
    mutation: "突變",
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
