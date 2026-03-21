// Input:  "May the force be with you"
// Expected Output: 5


function findLongestWordLength(str) {
  if (typeof str !== "string" || str.trim() === "") return 0;

  const words = str.trim().split(/\s+/);
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}