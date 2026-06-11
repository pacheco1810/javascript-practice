const { spinalCase } = require('./spinalCase');

describe('spinalCase', () => {
  test('converts "thisIsSpinalTap" to "this-is-spinal-tap"', () => {
    expect(spinalCase("thisIsSpinalTap")).toBe("this-is-spinal-tap");
  });

  test('converts "The_Andy_Griffith_Show" to "the-andy-griffith-show"', () => {
    expect(spinalCase("The_Andy_Griffith_Show")).toBe("the-andy-griffith-show");
  });

  test('converts "AllThe-small Things" to "all-the-small-things"', () => {
    expect(spinalCase("AllThe-small Things")).toBe("all-the-small-things");
  });

  test('converts "Teletubbies say Eh-oh" to "teletubbies-say-eh-oh"', () => {
    expect(spinalCase("Teletubbies say Eh-oh")).toBe("teletubbies-say-eh-oh");
  });

  test('converts "hello world" to "hello-world"', () => {
    expect(spinalCase("hello world")).toBe("hello-world");
  });

  test('converts "HelloWorld" to "hello-world"', () => {
    expect(spinalCase("HelloWorld")).toBe("hello-world");
  });
});