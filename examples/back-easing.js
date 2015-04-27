let RxTween = require('../src/index');

let position$ = RxTween({
  from: 0,
  to: 20,
  ease: RxTween.Back.easeInOut,
  duration: 1000,
  interval: 20
});

position$.subscribe(function (x) {
  console.log(x);
});
