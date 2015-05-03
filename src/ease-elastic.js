'use strict';
let {createEasing} = require('./ease-common');

const PERIOD = 0.3;
const OVERSHOOT = PERIOD / 4;
const AMPLITUDE = 1;
function elasticIn(x) {
  let z = x;
  if (z <= 0) {
    return 0;
  } else if (z >= 1) {
    return 1;
  } else {
    z -= 1;
    return -(AMPLITUDE * Math.pow(2, 10 * z))
      * Math.sin((z - OVERSHOOT) * (2 * Math.PI) / PERIOD);
  }
}

export default {
  EasingElastic: createEasing(elasticIn)
};
