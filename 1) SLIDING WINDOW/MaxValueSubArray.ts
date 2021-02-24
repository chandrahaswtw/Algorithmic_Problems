// *****************************************************************

// QUESTION : Find maximum element in every subarray.
// Example input: getMaxElementInSubArray([0,1,2,3,4,5,6,7], 4)
// Expected output: [3,4,5,6,7] ==> First element is the max sum array and second is the sum.

// *****************************************************************

const getMaxElementInSubArray = (arr : number[], windowSize : number) => {

    let startIndex = 0;
    let endIndex = startIndex + windowSize - 1; // Remember this.
  
    let maxArray: number[] = [];
    let tempArray: number[] = [];

    while(endIndex < arr.length){
        if(startIndex === 0){
            for(let i = 0; i< windowSize; i++){
                if(!tempArray.length){
                    tempArray[i] = arr[i];
                }
                else{
                    if(arr[i] > tempArray[0]){
                        tempArray = [arr[i]];
                    }
                    else if(arr[i] < tempArray[0] ){
                       let k = tempArray.length - 1;
                       while(tempArray[k] < arr[i]){
                           tempArray.pop();
                           k--;
                       }
                       tempArray.push(arr[i]);
                    }
                }
            }
        }

        // else {

        //     if(arr[startIndex-1] === tempArray[0]){
        //        const previousMax = tempArray.shift();


        //     }


        // };

        maxArray.push(tempArray[0]);
        startIndex++;
        endIndex++;
    }

    return maxArray;
}

console.log(getMaxElementInSubArray([0,199,2,3,4,5,6,7], 4));