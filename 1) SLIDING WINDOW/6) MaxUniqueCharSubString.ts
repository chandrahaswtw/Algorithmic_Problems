// *****************************************************************

// QUESTION : Find maximum length subarray which has the targetSum.
// Example input: getMaxUniqueCharSubString("abcaaawxyzbbbbcc")
// Expected output: "awxyzb" ==> The max length sub string with unique characters

// *****************************************************************

const getMaxUniqueCharSubString = (str: string) => {
  const hashMap: { [key: string]: number } = {};
  let i = 0,
    j = 0,
    maxUniqueString = "",
    uniqueCount = 0, //No of unique characters in a map
    totalCount = 0; //Total number of characters in a map

  while (j < str.length) {
    // STEP 1 : Feed the value in hashmap and get the count.
    if (!(str[j] in hashMap)) {
      hashMap[str[j]] = 1;
      uniqueCount++;
      totalCount++;
    } else {
      hashMap[str[j]]++;
      totalCount++;
    }

    // STEP 2: Found unique count
    if (uniqueCount === totalCount) {
      
      if (j - i + 1 > maxUniqueString.length) {
        maxUniqueString = str.substring(i, j + 1);
      }
    }

    if (totalCount > uniqueCount) {
      while (totalCount > uniqueCount) {
        if (hashMap[str[i]] === 1) {
          delete hashMap[str[i]];
          uniqueCount--;
          totalCount--;
        } else {
          hashMap[str[i]]--;
          totalCount--;
        }
        i++;
      }
    }

    j++;
  }

  return maxUniqueString;
};

console.log(getMaxUniqueCharSubString("abcaaawxyzbbbbcc"));
