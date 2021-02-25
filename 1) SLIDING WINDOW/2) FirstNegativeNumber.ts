// *****************************************************************

// QUESTION : Find first negative number subarray of given array. If the sub array have no -ve numbers, it should return 0 (zero). The array and size of sub array are printed passed as parameters.
// Example input: getFirstNegativeNumber([12, -1, -7, 8, -15, 30, 16, 28], 3)
// Expected output: [-1, -1, -7, -15, -15, 0]

// *****************************************************************


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

    if (startIndex === 0) {
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
