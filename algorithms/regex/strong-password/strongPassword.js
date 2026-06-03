/**
 * Problem: Validate strong password using regex
 * Topic: Regex
 * Difficulty: Easy
 */

// Input: isStrongPassword("Hello123")
// Output: true

function isStrongPassword(password){
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
  return regex.test(password);
}

module.exports = {
  isStrongPassword
};