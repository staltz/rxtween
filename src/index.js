"use strict";
let Rx;
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
  ease = 'RxTween.Linear.ease',
  interval = 'auto'
}) {
  Rx = Rx || require('rx');
  interval = sanitizeInterval(interval);
  const totalTicks = Math.round(duration / interval);
  return Rx.Observable.interval(interval)
    .take(totalTicks)
    .map(x => {
      const percent = x / totalTicks;
      return (from* (1 - percent) + to * percent);
    })
    .concat(Rx.Observable.just(to));
}

export default RxTween;
