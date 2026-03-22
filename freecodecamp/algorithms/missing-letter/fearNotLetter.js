// Input: "abce";

// Expected Output: "d"

function fearNotLetter(str) {
  if (typeof str !== "string" || str.length === 0) return undefined;

  for (let i = 0; i < str.length - 1; i++) {
    const current = str.charCodeAt(i);
    const next = str.charCodeAt(i + 1);

    if (next - current !== 1) {
      return String.fromCharCode(current + 1);
    }
  }

  return undefined;
}

module.exports = {
  fearNotLetter
};