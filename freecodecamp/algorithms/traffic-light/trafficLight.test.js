const { 
  config1, 
  config2, 
  config3, 
  config4, 
  runSequence, 
  generateTimeline 
} = require('./trafficLight');

describe('runSequence', () => {
  let consoleLog;

  beforeEach(() => {
    consoleLog = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleLog.mockRestore();
  });

  test('logs switching messages for config1 with 1 cycle', () => {
    runSequence(config1, 1);
    
    expect(consoleLog).toHaveBeenCalledTimes(3);
    expect(consoleLog).toHaveBeenCalledWith("Switching to green for 5 s");
    expect(consoleLog).toHaveBeenCalledWith("Switching to yellow for 2 s");
    expect(consoleLog).toHaveBeenCalledWith("Switching to red for 4 s");
  });

  test('logs "Invalid phase detected" for config2', () => {
    runSequence(config2, 1);
    
    expect(consoleLog).toHaveBeenCalledWith("Switching to red for 3 s");
    expect(consoleLog).toHaveBeenCalledWith("Invalid phase detected");
    expect(consoleLog).toHaveBeenCalledWith("Switching to green for 6 s");
  });

  test('logs "Faulted phase!" for config3', () => {
    runSequence(config3, 1);
    
    expect(consoleLog).toHaveBeenCalledTimes(1);
    expect(consoleLog).toHaveBeenCalledWith("Faulted phase!");
  });

  test('logs "No phases found" for config4', () => {
    runSequence(config4, 1);
    
    expect(consoleLog).toHaveBeenCalledTimes(1);
    expect(consoleLog).toHaveBeenCalledWith("No phases found");
  });

  test('runs multiple cycles for config1', () => {
    runSequence(config1, 2);
    
    expect(consoleLog).toHaveBeenCalledTimes(6);
    expect(consoleLog).toHaveBeenCalledWith("Switching to green for 5 s");
    expect(consoleLog).toHaveBeenCalledWith("Switching to yellow for 2 s");
    expect(consoleLog).toHaveBeenCalledWith("Switching to red for 4 s");
  });
});

describe('generateTimeline', () => {
  test('returns [5, 7, 11] for config1 with 1 cycle', () => {
    expect(generateTimeline(config1, 1)).toEqual([5, 7, 11]);
  });

  test('returns [3, 1, 7] for config2 with 1 cycle (includes invalid duration)', () => {
    expect(generateTimeline(config2, 1)).toEqual([3, 1, 7]);
  });

  test('returns [5, 7, 13] for config3 with 1 cycle', () => {
    expect(generateTimeline(config3, 1)).toEqual([5, 7, 13]);
  });

  test('returns [] for config4 with 1 cycle (empty phases)', () => {
    expect(generateTimeline(config4, 1)).toEqual([]);
  });

  test('returns correct timeline for config1 with 2 cycles', () => {
    expect(generateTimeline(config1, 2)).toEqual([5, 7, 11, 16, 18, 22]);
  });
});