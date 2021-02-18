// *****************************************************************

// QUESTION : Find subarray of given array which sums to maximum value. The array and size of sub array are printed passed as parameters. 
// Example input: getMaxSubArray([0,1,2,3,4,5,6,7], 4)
// Expected output: [[4,5,6,7], 22] ==> First element is the max sum array and second is the sum.

// *****************************************************************

// SOLUTION : The below is done to stop the repetition. say first window is [0,1,2,3] & second window is [1,2,3,4] ==> we are adding all of them again and again. to avoid that, while movint to next window, subtract the first element from previous array and add the last element of new window

// TIME COMPLEXITY : O(N)

const getMaxSubArray = (arr: number[], windowSize : number): any => {
  
  let startIndex = 0;
  let endIndex = startIndex + windowSize - 1; // Remember this.

  let maxArray: number[] = [];

  let maxSum = 0;
  let sum = 0;

  while (endIndex < arr.length) {

    let subArray = arr.slice(startIndex, endIndex + 1);

    if (startIndex === 0) {
      sum = subArray.reduce((acc, el) => {
        return acc + el;
      }, 0);
    }
    else {
        sum = sum - arr[startIndex - 1] + arr[endIndex];
        // To the previous sum, we are subtracting the previous first index (startIndex -1) ==> As we moved on, the last start index = ctrrent startIndex - 1. We are adding the current last index
    }
 
    if (sum > maxSum) {
      maxSum = sum;
      maxArray = subArray;
    }
    startIndex++;   //Incrementing both startIndex and endIndex ==> Moves the window
    endIndex++;
  }

  return [maxArray, maxSum];
};

console.log(getMaxSubArray([0, 1, 2, 3, 4, 5, 6, 7], 4));
