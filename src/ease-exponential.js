'use strict';
let {createEasing} = require('./ease-common');

const EXP_WEIGHT = 6;
const EXP_MAX = Math.exp(EXP_WEIGHT) - 1;
function expFn(x) {
  return (Math.exp(x * EXP_WEIGHT) - 1) / EXP_MAX;
}

let EasingExponential = createEasing(expFn);

export default {
  EasingExponential
}
