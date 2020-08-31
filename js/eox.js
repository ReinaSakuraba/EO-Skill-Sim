import Simulator from './simulator.js';
import forward from '../data/eox/forward.js';
import levels from '../data/eox/levels.js';
import skills from '../data/eox/skills.js';


const secondaryPenalty = 2;

const retireBonuses = [
  [0,   'N/A',  0],
  [1, '30-39',  4],
  [2, '40-49',  5],
  [3, '50-59',  6],
  [4, '60-69',  7],
  [5, '70-98',  8],
  [6,    '99', 10],
];

const levelCaps = [99, 109, 119, 130];


export {Simulator, forward, levels, skills, secondaryPenalty, retireBonuses, levelCaps};
