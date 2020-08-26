let simulator;


document.addEventListener('DOMContentLoaded', async () => {
  const gameRegex = new RegExp('^\\/EOSim\\/([a-z]+)\\/(?:index\\.html)?$');
  const game = window.location.pathname.match(gameRegex)[1];

  const {default: forward} = await import(`../data/${game}/forward.js`);
  const {default: levels} = await import(`../data/${game}/levels.js`);
  const {default: skills} = await import(`../data/${game}/skills.js`);

  const {default: sim} = await import(`./${game}simulator.js`);

  simulator = new sim({forward, levels, skills});
});
