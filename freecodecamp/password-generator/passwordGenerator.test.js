const { generatePassword } = require('./passwordGenerator');

const solutions = [
  generatePassword
];

solutions.forEach(fn => {

  test(`${fn.name} returns a string`, () => {
    expect(typeof fn(5)).toBe("string");
  });

  test(`${fn.name} returns password of correct length`, () => {
    expect(fn(5).length).toBe(5);
    expect(fn(10).length).toBe(10);
    expect(fn(0).length).toBe(0);
  });

  test(`${fn.name} returns different passwords each time`, () => {
    const pass1 = fn(10);
    const pass2 = fn(10);
    expect(pass1).not.toBe(pass2);
  });

  test(`${fn.name} only contains valid characters`, () => {
    const validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const password = fn(20);
    for(let i = 0; i < password.length; i++){
      expect(validChars.includes(password[i])).toBe(true);
    }
  });

  test(`${fn.name} handles length of 1`, () => {
    expect(fn(1).length).toBe(1);
  });

});