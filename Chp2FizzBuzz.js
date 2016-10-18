function DetermineOutput(query) {
  if (query % 15 === 0) {
    return 'FizzBuzz\n';
  } else if (query % 3 === 0) {
    return 'Fizz\n';
  } else if (query % 5 === 0) {
    return 'Buzz\n';
  } else {
    return query + '\n';
  }
}

function FizzBuzz(num, next) {
  if (num < 1)
    return next;
  else
    return FizzBuzz(num-1,DetermineOutput(num) + next);
}

console.log(FizzBuzz(15,''));
