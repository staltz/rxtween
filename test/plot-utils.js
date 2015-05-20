
const STEPS = 20;
const DURATION = 1000;

const plotTweenConfigs = {
  from: 0,
  to: STEPS,
  duration: DURATION,
  interval: DURATION / STEPS
};

function setCharAt(str, idx, chr) {
  if (idx > str.length - 1){
    return str.toString();
  } else {
    return str.substr(0, idx) + chr + str.substr(idx + 1);
  }
}

function rotate(lines) {
  let len = lines[0].length;
  return lines[0].split('')
    .map((col, i) => 
      lines
        .map(row => row.split('')[len-i-1])
    )
    .map(row => row.join(''));
}

function stutter(char, length) {
  return new Array(length + 1).join(char);
}

function plot(position$) {
  return position$
    .reduce((acc, curr) => {
      acc.push(curr);
      return acc;
    }, [])
    .map(arr => {
      let coords = arr.map((y, x) => [x, y]);
      let lines = coords.reduce((lines, [x, y]) => {
        let newline;
        if (y < 0) {
          newline = setCharAt(stutter(' ', STEPS + 1), 0, '_');
        } else {
          newline = setCharAt(stutter(' ', STEPS + 1), Math.round(y), '#');
        }
        lines.push(newline);
        return lines;
      }, []);
      return rotate(lines)
        .map(line => '|'.concat(line).concat('\n'))
        .reduce((lines, line) => lines.concat(line), '')
        .concat('+' + stutter('-', STEPS + 1));
    });
}

function makeAssertPlot(assert, expected) {
  return function assertPlot(actual) {
    console.log(actual);
    assert.equal(`\n${actual}`, expected);
    assert.end();
  };
}

module.exports = {
  plotTweenConfigs,
  plot,
  makeAssertPlot,
}
