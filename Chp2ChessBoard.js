function CreateCheckeredLine(size,option,next) {
  if (size <= 0) {
    return '\n';
  } else {
    if ((size % 2) === (option % 2))
      return '#' + CreateCheckeredLine(size-1,option,next);
    else
      return ' ' + CreateCheckeredLine(size-1,option,next);
  }
}

function Chp2ChessBoard(width,height,previous) {
  if (height <= 0) {
    return previous;
  } else {
    return Chp2ChessBoard(width,height-1,
                          previous + CreateCheckeredLine(width,(height % 2 == 0),''));
  }
}

console.log(Chp2ChessBoard(8,8,''));
