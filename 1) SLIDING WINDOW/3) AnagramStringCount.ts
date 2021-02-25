// *****************************************************************

// QUESTION : Find total number of anagrams. The mais string and desired string are passed as parameters.
// Example input: getAnagramCount("forxxorfxxxfro", "for")
// Expected output: 3. It need to count all the possible jumbled words -> for, orf, fro etc.. and return the count

// *****************************************************************

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
