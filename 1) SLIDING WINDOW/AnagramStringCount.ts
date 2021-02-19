// *****************************************************************

// QUESTION : Find total number of anagrams. The mais string and desired string are passed as parameters.
// Example input: getAnagramCount("forxxorfxxxfro", "for")
// Expected output: 3. It need to count all the possible jumbled words -> for, orf, fro etc.. and return the count

// *****************************************************************

// SOLUTION : 
// 1) We store all the unique value and their repitions in a map for target. Say, the target is "for", we have the map as below:
//    {f: 1, o: 1 , r: 1}
// 2) The initial subcount = 3
// 3) While loop
//    -  First window loop:
//          - We go through all the elements in window and decrease the count in the map for every element and we correspondingly decrease the subcount.
//    - Further loop
//          - We see the first departing element. If it's part of sourceMap, then we increase the sourcemap count by 1. And if the value === 1, we increase the count.
//          - We see current end index. If it's part of sourceMap, then we decrease the sourcemap count by 1. And if the value === 0, we decrease the count.

// Finally we check the count ==> If subCount === 0, then we got a match and we increment the count.At this very point we get all the keys of sourceMap has value 0. 


const getAnagramCount = (source: string, target: string) => {
  // INTITAIL SETUP
  let sourceMap: any = {};
  let count = 0;

  for (let i of target) {
    sourceMap[i] = i in sourceMap ? sourceMap[i] + 1 : 1;
  }

  let subCount = Object.keys(sourceMap).length;

  // SLIDING WINDOW
  let startIndex = 0;
  let windowSize = target.length;
  let endIndex = startIndex + windowSize - 1;

  while (endIndex < source.length) {
    let subSource = source.substring(startIndex, endIndex + 1);
     console.log(subSource);
    if (startIndex === 0) {
      // FIRST TIME O(N)
      for (let i of subSource) {
        if (i in sourceMap) {
          sourceMap[i]--;
          sourceMap[i] === 0 ? subCount-- : subCount++;
        }
      }
    } else {
      // FROM SECOND TIME O(1)
      if (source[startIndex - 1] in sourceMap) {
        sourceMap[source[startIndex - 1]]++;
        if (sourceMap[source[startIndex - 1]] === 1) {
          subCount++;
        }
      }

      if (source[endIndex] in sourceMap) {
        sourceMap[source[endIndex]]--;
        if (sourceMap[source[endIndex]] === 0) {
          subCount--;
        }
      }
    }

    if (subCount === 0) {
      count++;
    }

    startIndex++;
    endIndex++;
  }

  return count;
};

getAnagramCount("forxxorfxxxfro", "for");
