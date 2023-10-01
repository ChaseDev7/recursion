function fibs (n) {
  const fibsArray = [0, 1];
  if (n < 2) return fibsArray.slice(0, n);

  while (n > 2) {
    const newNumber = fibsArray.at(-1) + fibsArray.at(-2);
    fibsArray.push(newNumber);
    n--;
  }
  return fibsArray;
};

function fibsRec (n, fibsArray = [0, 1]) {
  if (fibsArray.length >= n) {
    return fibsArray.slice(0, n);
  }

  const newNumber = fibsArray.at(-1) + fibsArray.at(-2);
  fibsArray.push(newNumber);
  return fibsRec(n, fibsArray);
}

console.log(fibs(1));
console.log(fibs(3));
console.log(fibs(7));
console.log(fibs(10));

console.log(fibsRec(1));
console.log(fibsRec(3));
console.log(fibsRec(7));
console.log(fibsRec(10));