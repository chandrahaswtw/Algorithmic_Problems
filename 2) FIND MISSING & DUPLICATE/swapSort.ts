// *****************************************************************

// QUESTION : Find the duplicate and missing numbers in an array. Assume that an ideal array consists of numbers from 1 till the length of array.
// Example input: getDuplicateAndMissing([2,3,1,8,2,3,5,1])
// Expected output: Duplicates : 1 2 3 ; Missing : 4,6,7

// *****************************************************************

const getDuplicateAndMissing = (arr: number[]) => {
  const duplicateArray: number[] = [];
  const missingArray: number[] = [];

  // swap algorithm
  for (let [i, v] of arr.entries()) {
    while (v !== i + 1 && v !== arr[v - 1]) {
      let temp = arr[v - 1];
      arr[v - 1] = v;
      arr[i] = temp;
    }
  }

  for (let [i, v] of arr.entries()) {
    if (v !== i + 1) {
      duplicateArray.push(v);
      missingArray.push(i + 1);
    }
  }

  console.log("Duplicate array : ", duplicateArray);
  console.log("Missing array : ", missingArray);
};

getDuplicateAndMissing([2, 3, 1, 8, 2, 3, 5, 1]);
