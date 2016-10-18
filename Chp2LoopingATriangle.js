function BuildLine(size,previous) {
  if (size < 1) {
    return previous;
  } else {
    return BuildLine(size-1,previous + '#');
  }
}

function Chp2LoopingATriangle(size,next) {
  if (size < 1) {
    return next;
  } else {
    return Chp2LoopingATriangle(size-1, BuildLine(size,'') + '\n' + next);
  }
}

console.log(Chp2LoopingATriangle(7,''));
