const {
  getAverage,
  getGrade,
  hasPassingGrade,
  studentMsg
} = require('./studentGrading');

describe('Student Grading Functions', () => {

  test('getAverage calculates average correctly', () => {
    expect(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])).toBe(71.7);
    expect(getAverage([100, 100, 100])).toBe(100);
    expect(getAverage([0, 0, 0])).toBe(0);
  });

  test('getGrade returns correct letter grade', () => {
    expect(getGrade(100)).toBe("A+");
    expect(getGrade(95)).toBe("A");
    expect(getGrade(85)).toBe("B");
    expect(getGrade(75)).toBe("C");
    expect(getGrade(65)).toBe("D");
    expect(getGrade(50)).toBe("F");
  });

  test('hasPassingGrade returns true for passing grades', () => {
    expect(hasPassingGrade(100)).toBe(true);
    expect(hasPassingGrade(85)).toBe(true);
    expect(hasPassingGrade(65)).toBe(true);
    expect(hasPassingGrade(50)).toBe(false);
  });

  test('studentMsg returns correct message for passing student', () => {
    const result = studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 85);
    expect(result).toBe("Class average: 71.7. Your grade: B. You passed the course.");
  });

  test('studentMsg returns correct message for failing student', () => {
    const result = studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37);
    expect(result).toBe("Class average: 71.7. Your grade: F. You failed the course.");
  });

});