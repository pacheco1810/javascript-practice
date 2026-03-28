function generatePassword(longPass){
  let genPass = "";
  const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"; 
  let i = 0;
  while (i < longPass) { 
    genPass += char[Math.floor(Math.random() * (char.length - 1)) + 1];
    i++;
  }
  return genPass;
}

module.exports = {
  generatePassword
};