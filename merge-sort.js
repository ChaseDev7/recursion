function mergeSort (array) {
  if (array.length <= 1) return array;

  const Middle = Math.floor(array.length / 2);
  const Begin = mergeSort(array.slice(0, Middle));
  const End = mergeSort(array.slice(Middle));
  return merge(Begin, End);
};

const merge = (Begin, End) => {
  const mergedArray = [];

  while (Begin.length > 0 && End.length > 0) {
    const smallerNumCheck = Begin[0] < End[0] ? Begin : End;
    const mergedNum = smallerNumCheck.shift();
    mergedArray.push(mergedNum);
  }

  return mergedArray.concat(Begin, End);
}

console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4]));
console.log(mergeSort([-10, 2, 0, -7, 20, 7, -3, 9]));
console.log(mergeSort([-5, 8, 1]));
console.log(mergeSort([17, 4, -11, 3, -6, 20]));