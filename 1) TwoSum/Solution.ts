function twoSum(nums: number[], target: number): number[] | undefined {
    
    for (let i = 0; i < nums.length; i++) {
          let secondIndex = nums.indexOf(target - nums[i]);
          if (secondIndex > -1 && secondIndex !== i) {
            return i < secondIndex ? [i, secondIndex] : [secondIndex , i];
          }
        }
    };

console.log(twoSum([-1,-2,-3,-4,-5], -8));
