/* Input
const inputStr = "abc";
const inputNum = 3;*/

// Expected Output
// "abcabcabc"

function repeatStringNumTimes(str, num) {
  if (typeof str !== "string" || typeof num !== "number") return "";
  if (num <= 0) return "";

  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

module.exports = {
  repeatStringNumTimes
};