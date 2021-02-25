// *****************************************************************

// QUESTION : Find maximum element in every subarray.
// Example input: getMaxElementInSubArray([0,1,2,3,4,5,6,7], 4)
// Expected output: [3,4,5,6,7] ==> First element is the max sum array and second is the sum.

// *****************************************************************

const getMaxElementInSubArray = (arr: number[], windowSize: number) => {
  let startIndex = 0;
  let endIndex = startIndex + windowSize - 1; // Remember this.

  let maxArray: number[] = [];
  let tempArray: number[] = [];

  while (endIndex < arr.length) {
    if (startIndex === 0) {
      for (let i = 0; i < windowSize; i++) {
        if (!tempArray.length) {
          tempArray[i] = arr[i];
        } else {
          if (arr[i] > tempArray[0]) {
            tempArray = [arr[i]];
          } else if (arr[i] < tempArray[0]) {
            sortTempArray(arr, tempArray, i);
          }
        }
      }
    } else {
      if (arr[startIndex - 1] === tempArray[0]) {
        if (arr[endIndex] > tempArray[0]) {
          tempArray = [arr[endIndex]];
        } else {
          tempArray.shift();
         
          sortTempArray(arr, tempArray, endIndex);
        }
      } else {
        sortTempArray(arr, tempArray, endIndex);
      }
    }

    maxArray.push(tempArray[0]);
    startIndex++;
    endIndex++;
  }

  return maxArray;
};

const sortTempArray = (arr: number[], tempArray: number[], endIndex : number) => {
  let k = tempArray.length - 1;
  while (tempArray[k] < arr[endIndex]) {
    tempArray.pop();
    k--;
  }
  tempArray.push(arr[endIndex]);
};

console.log(getMaxElementInSubArray([250, 199, 240, 100 , 10 ,5, 6, 700], 4));