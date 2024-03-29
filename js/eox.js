import Simulator from './simulator.js';
import forward from '../data/eox/forward.js';
import levels from '../data/eox/levels.js';
import skills from '../data/eox/skills.js';


const secondaryPenalty = 2;

const retireBonuses = [
  [0,     'N/A',  0],
  [1,   '30-59',  3],
  [2,   '60-69',  4],
  [3,   '70-89',  5],
  [4,  '90-119',  6],
  [5, '120-129',  7],
  [6,     '130', 10],
];

const levelCaps = [99, 109, 119, 130];


export {Simulator, forward, levels, skills, secondaryPenalty, retireBonuses, levelCaps};
