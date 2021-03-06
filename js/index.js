let simulator;


document.addEventListener('DOMContentLoaded', async () => {
  const gameRegex = new RegExp('^(?:\\/.+?)*?\\/([a-z]+)\\/(?:index\\.html)?$');
  const game = window.location.pathname.match(gameRegex)[1];

  const {Simulator: Sim, forward, levels, skills, secondaryPenalty, retireBonuses, levelCaps} = await import(`./${game}.js`);

  simulator = new Sim({forward, levels, skills, secondaryPenalty, retireBonuses, levelCaps});
});
