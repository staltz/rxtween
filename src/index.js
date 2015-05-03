'use strict';
let Rx;
let {interpolate} = require('./ease-common');
let {EasingPower2, EasingPower3, EasingPower4} = require('./ease-powers');
let {EasingExponential} = require('./ease-exponential');
let {EasingBack} = require('./ease-back');
let {EasingBounce} = require('./ease-bounce');
let {EasingCirc} = require('./ease-circ');
let {EasingElastic} = require('./ease-elastic');
let {EasingSine} = require('./ease-sine');

const DEFAULT_INTERVAL = 15;
function sanitizeInterval(interval) {
  if (interval === 'auto') {
    return DEFAULT_INTERVAL;
  } else if (typeof interval !== 'number' || interval <= 0) {
    console.warn(`RxTween cannot use invalid given interval: ${interval}`);
    return DEFAULT_INTERVAL;
  }
  return interval;
}

function RxTween({
  from,
  to,
  duration,
  ease = RxTween.Linear.ease,
  interval = 'auto'
}) {
  Rx = Rx || require('rx');
  let sanitizedInterval = sanitizeInterval(interval);
  const totalTicks = Math.round(duration / sanitizedInterval);
  return Rx.Observable.interval(sanitizedInterval)
    .take(totalTicks)
    .map(tick => ease(tick / totalTicks, from, to))
    .concat(Rx.Observable.just(to));
}

RxTween.Linear = {ease: interpolate};
RxTween.Power2 = EasingPower2;
RxTween.Power3 = EasingPower3;
RxTween.Power4 = EasingPower4;
RxTween.Exp = EasingExponential;
RxTween.Back = EasingBack;
RxTween.Bounce = EasingBounce;
RxTween.Circ = EasingCirc;
RxTween.Elastic = EasingElastic;
RxTween.Sine = EasingSine;

export default RxTween;
