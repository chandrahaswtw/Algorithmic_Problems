// *****************************************************************

// QUESTION : Find maximum length subarray which has the targetSum.
// Example input: getMaxSumTargetSubArray([0,4,1,1,1,2,3], 5)
// Expected output: [1,1,1,2] ==> Adds to 5 ==> The max length sub array

// *****************************************************************

const getMaxSumTargetSubArray = (arr: number[], targetSum : number): number[] => {
  let sum = 0,
    maxSubArray : number[] = [],
    i = 0,
    j = 0;

  while (j < arr.length) {
      sum += arr[j]; 
    
      if(sum === targetSum){
          if((j- i+ 1) > maxSubArray.length){
              maxSubArray = arr.slice(i, j + 1);
          }
      }

      if(sum >= targetSum){
          while(sum >= targetSum){
            sum -= arr[i];
            i++;
          }
      }


      j++;

  }

  return maxSubArray;
};

console.log(getMaxSumTargetSubArray([0,4,1,1,1,2,3], 5));
