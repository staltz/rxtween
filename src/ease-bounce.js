'use strict';
let {createEasing} = require('./ease-common');

const PARAM1 = 7.5625;
const PARAM2 = 2.75;
function easeOutFn(x) {
  if (x < 1 / PARAM2) {
    return (PARAM1 * x * x);
  } else if (x < 2 / PARAM2) {
    return (PARAM1 * (x -= 1.5 / PARAM2) * x + 0.75);
  } else if (x < 2.5 / PARAM2) {
    return (PARAM1 * (x -= 2.25 / PARAM2) * x + 0.9375);
  } else {
    return (PARAM1 * (x -= 2.625 / PARAM2) * x + 0.984375);
  }
}

export default {
  EasingBounce: createEasing(x => 1 - easeOutFn(1 - x))
}
