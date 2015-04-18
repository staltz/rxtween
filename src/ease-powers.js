'use strict';
let {createEasing} = require('./ease-common');

let EasingPower2 = createEasing(x => x*x);
let EasingPower3 = createEasing(x => x*x*x);
let EasingPower4 = createEasing(x => {
  const xx = x*x;
  return xx*xx;
});

export default {
  EasingPower2,
  EasingPower3,
  EasingPower4
}
