let RxTween = require('../src/index');

let position$ = RxTween({
  from: 0,
  to: 16,
  ease: 'RxTween.Exp.easeOut',
  duration: 2000,
  interval: 16
});

position$.subscribe(function (x) {
  console.log(x);
});
