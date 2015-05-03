'use strict';
let {createEasing} = require('./ease-common');

const HALF_PI = Math.PI * 0.5;

export default {
  EasingSine: createEasing(x => 1 - Math.cos(x * HALF_PI))
};
