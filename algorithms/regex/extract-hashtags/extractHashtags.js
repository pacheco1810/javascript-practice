/**
 * Problem: Extract hashtags from text using regex
 * Topic: Regex
 * Difficulty: Easy
 */

// Input: extractHashtags("Aprendiendo #JavaScript y #Regex con #FCC")
// Output: ["#JavaScript", "#Regex", "#FCC"]

function extractHashtags(text){
  const regex = /#[^\s]+/g;
  return text.match(regex);
}

module.exports = {
  extractHashtags
};