const fs = require("fs");
const path = require("path");
const vm = require("vm");

const projectRoot = path.resolve(__dirname, "..");
const appPath = path.join(projectRoot, "app.js");
const appCode = fs.readFileSync(appPath, "utf8");

function createContext() {
  const appNode = { innerHTML: "", addEventListener() {} };
  const context = {
    console,
    document: {
      getElementById() {
        return appNode;
      },
    },
    Math,
    Set,
    Map,
    Array,
    Object,
    Number,
    String,
    Boolean,
    JSON,
  };

  vm.createContext(context);
  vm.runInContext(appCode, context);
  vm.runInContext(
    `
      const simulationMilestones = [];
      const originalAddLog = addLog;
      addLog = function(game, message) {
        originalAddLog(game, message);
        if (!message.includes("進化出")) {
          return;
        }

        const match = message.match(/^(玩家|AI) 進化出 (.+?)（/);
        if (match) {
          simulationMilestones.push({
            side: match[1] === "玩家" ? "player" : "ai",
            output: match[2],
            turn: state.turn,
          });
        }
      };

      function autoTurn(sideKey) {
        if (state.winner) {
          return;
        }

        playAllFreeMaterials(sideKey);

        let safety = 0;
        while (!state.winner && safety < 30) {
          safety += 1;
          const side = state.players[sideKey];
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
      }
    `,
    context
  );

  return context;
}

function simulateGame(maxTurns = 40) {
  const context = createContext();
  let loops = 0;

  while (!vm.runInContext("state.winner", context) && loops < maxTurns) {
    loops += 1;
    vm.runInContext('autoTurn("player")', context);
    if (vm.runInContext("state.winner", context)) {
      break;
    }

    vm.runInContext('beginTurn("ai", state)', context);
    vm.runInContext('autoTurn("ai")', context);
    if (vm.runInContext("state.winner", context)) {
      break;
    }

    vm.runInContext('state.turn += 1; beginTurn("player", state)', context);
  }

  const milestones = vm.runInContext("simulationMilestones", context);

  return {
    winner: vm.runInContext("state.winner", context),
    turn: vm.runInContext("state.turn", context),
    playerHp: vm.runInContext("state.players.player.hp", context),
    aiHp: vm.runInContext("state.players.ai.hp", context),
    milestones,
  };
}

function toAverage(values) {
  if (!values.length) {
    return null;
  }

  return Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(2));
}

function buildSummary(results) {
  const tiers = ["細胞", "組織", "器官", "系統", "個體"];
  const winnerCounts = {};
  const tierTurns = Object.fromEntries(tiers.map((tier) => [tier, []]));
  const tierReached = Object.fromEntries(tiers.map((tier) => [tier, 0]));

  results.forEach((result) => {
    winnerCounts[result.winner] = (winnerCounts[result.winner] ?? 0) + 1;

    tiers.forEach((tier) => {
      const firstMatch = result.milestones.find((item) => {
        const milestoneTier = tierNameToStage(item.output);
        return milestoneTier === tier;
      });

      if (firstMatch) {
        tierReached[tier] += 1;
        tierTurns[tier].push(firstMatch.turn);
      }
    });
  });

  return {
    games: results.length,
    averageTurns: toAverage(results.map((result) => result.turn)),
    winners: winnerCounts,
    reachedRate: Object.fromEntries(
      tiers.map((tier) => [tier, `${Math.round((tierReached[tier] / results.length) * 100)}%`])
    ),
    firstReachTurns: Object.fromEntries(tiers.map((tier) => [tier, toAverage(tierTurns[tier])])),
  };
}

function tierNameToStage(output) {
  const stageMap = {
    上皮細胞: "細胞",
    心肌細胞: "細胞",
    神經細胞: "細胞",
    肺泡細胞: "細胞",
    上皮組織: "組織",
    心肌組織: "組織",
    神經組織: "組織",
    肺泡組織: "組織",
    皮膚: "器官",
    心臟: "器官",
    大腦: "器官",
    肺: "器官",
    外皮系統: "系統",
    循環系統: "系統",
    神經系統: "系統",
    呼吸系統: "系統",
    人類個體: "個體",
  };

  return stageMap[output] ?? null;
}

function main() {
  const gamesArg = Number(process.argv[2] ?? "50");
  const games = Number.isFinite(gamesArg) && gamesArg > 0 ? gamesArg : 50;
  const results = [];

  for (let index = 0; index < games; index += 1) {
    results.push(simulateGame());
  }

  const summary = buildSummary(results);
  console.log(JSON.stringify(summary, null, 2));
}

if (require.main === module) {
  main();
}

module.exports = {
  buildSummary,
  simulateGame,
};
