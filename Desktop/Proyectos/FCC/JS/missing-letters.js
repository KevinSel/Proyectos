// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
  let abcS = "abcdefghijklmnopqrstuvwxyz".split(""), strS = str.split("");
  let ans = abcS.filter((lettABC) => strS.some((lett,ind) => lettABC > strS[ind] && lettABC < strS[ind+1]))
  return ans[0]
}

fearNotLetter("abce");