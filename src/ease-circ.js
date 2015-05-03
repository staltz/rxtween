'use strict';
let {createEasing} = require('./ease-common');

export default {
  EasingCirc: createEasing(x => -(Math.sqrt(1 - x * x) - 1))
};
