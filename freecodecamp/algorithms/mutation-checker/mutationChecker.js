// Input: ["hello", "Hello"];

// Expected Output: true

function mutation(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return false;

  const word1 = String(arr[0]).toLowerCase();
  const word2 = String(arr[1]).toLowerCase();

  for (let i = 0; i < word2.length; i++) {
    if (!word1.includes(word2[i])) {
      return false;
    }
  }

  return true;
}

module.exports = {
  mutation
};