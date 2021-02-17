// QUESTION
// FIND SUBARRAY (N ELEMENTS PASSED AS PARAMETER) OF GIVEN ARRAY WHICH SUMS TO MAXIMUM VALUE
// [0,1,2,3,4,5,6,7]

// SOLUTION
// THE BELOW IS DONE TO STOP THE REPETITION
// SAY FIRST WINDOW IS [0,1,2,3] & SECOND WINDOW IS [1,2,3,4] ==> WE ARE ADDING ALL OF THEM AGAIN AND AGAIN
// TO AVOID THAT, WHILE MOVINT TO NEXT WINDOW, SUBTRACT THE FIRST ELEMENT FROM PREVIOUS ARRAY AND ADD THE LAST ELEMENT OF NEW WINDOW

// TIME COMPLEXITY : O(N)

const getMaxSubArray = (arr: number[], windowSize : number): any => {
  let startIndex = 0;
  let endIndex = windowSize + 2;
  let maxArray: number[] = [];
  let maxSum = 0;
  let sum = 0;
  while (startIndex + windowSize - 1 < arr.length) {

    let subArray = arr.slice(startIndex, startIndex + windowSize);

    if (startIndex === 0) {
      sum = subArray.reduce((acc, el) => {
        return acc + el;
      }, 0);
    }
    else {
        sum = sum - arr[startIndex - 1] + arr[startIndex + windowSize - 1];
    }

    if (sum > maxSum) {
      maxSum = sum;
      maxArray = subArray;
    }
    startIndex++;
  }
  return [maxArray, maxSum];
};

console.log(getMaxSubArray([0, 1, 2, 3, 4, 5, 6, 7], 1));
