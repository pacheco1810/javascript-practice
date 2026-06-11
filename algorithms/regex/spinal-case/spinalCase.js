/**
 * Problem: Convert a string to spinal case (lowercase words joined by hyphens)
 * Topic: Regex
 * Difficulty: Easy
 */

// Input: spinalCase("thisIsSpinalTap")
// Output: "this-is-spinal-tap"

function spinalCase(str){
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  const regex = /[\s_]/g;
  str = str.replace(regex, "-");
  return str.toLowerCase();
}

module.exports = {
  spinalCase
};