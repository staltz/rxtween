'use strict';
let {createEasing} = require('./ease-common');

const OVERSHOOT = 1.70158;
const duration = 1;
function expFn(x) {
  return x * x * ((OVERSHOOT + 1) * x - OVERSHOOT);
}

let EasingBack = createEasing(expFn);

export default {
  EasingBack
}
