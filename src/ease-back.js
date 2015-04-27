'use strict';
let {createEasing} = require('./ease-common');

const OVERSHOOT = 1.70158;

export default {
  EasingBack: createEasing(x => x * x * ((OVERSHOOT + 1) * x - OVERSHOOT))
}
