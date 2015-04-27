'use strict';
let {createEasing} = require('./ease-common');

const PERIOD = 0.3;
const OVERSHOOT = PERIOD / 4;
const AMPLITUDE = 1;
function elasticIn(x, amplitude, period) {
  if (x <= 0) {
    return 0;
  } else if (x >= 1) {
    return 1;
  } else {
    // overshoot = period / (2 * Math.PI) * Math.asin(1 / amplitude);
    x -= 1;
    return -(AMPLITUDE * Math.pow(2, 10 * x)) 
      * Math.sin((x * 1 - OVERSHOOT) * (2 * Math.PI) / PERIOD);
  }
}

export default {
  EasingElastic: createEasing(elasticIn)
}
