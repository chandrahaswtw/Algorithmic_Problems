// *****************************************************************

// QUESTION : Find first negative number subarray of given array. If the sub array have no -ve numbers, it should return 0 (zero). The array and size of sub array are printed passed as parameters.
// Example input: getFirstNegativeNumber([12, -1, -7, 8, -15, 30, 16, 28], 3)
// Expected output: [-1, -1, -7, -15, -15, 0]

// *****************************************************************

// SOLUTION : 

// STEP 1
// We have 2 arrays --> TempArray and ReqArray.

// STEP 2 (if else)
// If (((tempArray.length === 0))) (first loop case is covered in this), we need to loop through all the elements within the window  and store all the negative numbers in the temp array.
// else if ((( tempArray.length !== 0 ))): we check the new last element of window, if it's less, we push it to the tempArray. (We don't need to loop through the array)

// STEP 3 (if else)
// For every loop we need to do these below:
// ff (((tempArray.length ! == 0))) ==> Some -ve number is present in sub array. We need to do these below
//   -  If first element of window === first element of tempArray, we store the element in reqArray and remove this first element from the tempArray.
//   - If first element of window !== first element of tempArray, we store the element in reqArray and we do not remove this first element from the tempArray.
// else if (((tempArray.length === 0))) we just store 0 in required array. Because by the time we arrive at this step, we would've already executed STEP 2 (if block). If the tempArray.length === 0 then we have no -ve numbers in the subArray and hence return 0.

const getFirstNegativeNumber = (
  arr: number[],
  windowSize: number
): number[] => {
  let startIndex = 0;
  let endIndex = startIndex + windowSize - 1;
  let tempArr: number[] = [];
  let reqArr: number[] = [];

  while (endIndex < arr.length) {
    let subArray = arr.slice(startIndex, endIndex + 1);

    if (!tempArr.length) {
      for (let i of subArray) {
        if (i < 0) {
          tempArr.push(i);
        }
      }
    } else {
      if (arr[endIndex] < 0) {
        tempArr.push(arr[endIndex]);
      }
    }

    if (!tempArr.length) {
      reqArr.push(0);
    } else {
      if (tempArr[0] === arr[startIndex]) {
        reqArr.push(tempArr.shift() as number);
      } else {
        reqArr.push(tempArr[0]);
      }
    }

    startIndex++;
    endIndex++;
  }

  return reqArr;
};

console.log(getFirstNegativeNumber([12, -1, -7, 8, -15, 30, 16, 28, -2], 3));
