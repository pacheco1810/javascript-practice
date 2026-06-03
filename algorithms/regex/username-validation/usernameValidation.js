/**
 * Problem: Validate username format using regex
 * Topic: Regex
 * Difficulty: Easy
 */

// Input: isValidUsername("Angel_23")
// Output: true

function isValidUsername(username){
  if(username.length === 0) return false;
  const regex = /^[a-zA-Z]+\w{3,15}$/;
  return regex.test(username);
}

module.exports = {
  isValidUsername
};