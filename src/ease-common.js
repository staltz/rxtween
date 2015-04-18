'use strict';

function interpolate(y, from, to) {
  return (from * (1 - y) + to * y);
}

function flip(fn) {
  return (x => 1 - fn(1 - x));
}

export default {
  interpolate,

  flip,

  createEasing(fn) {
    let fnFlipped = flip(fn);
    return {
      easeIn(x, from, to) {
        return interpolate(fn(x), from, to);
      },
      easeOut(x, from, to) {
        return interpolate(fnFlipped(x), from, to);
      },
      easeInOut(x, from, to) {
        const y = (x < 0.5) ?
          (fn(2 * x) * 0.5) :
          (0.5 + fnFlipped(2* (x - 0.5)) * 0.5);
        return interpolate(y, from, to);
      }
    };
  }
}
