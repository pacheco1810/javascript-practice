/**
 * Problem: Traffic light sequence simulator with fault handling and timeline generation
 * Topic: Arrays / Objects
 * Difficulty: Medium
 */

// Input: runSequence(config1, 1)
// Output: console logs:
// Switching to green for 5 s
// Switching to yellow for 2 s
// Switching to red for 4 s

// Input: generateTimeline(config1, 1)
// Output: [5, 7, 11]

const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles){
  if(config.phases.length === 0){
    console.log("No phases found");
    return;
  }
  if(config.fault){
    console.log("Faulted phase!");
    return;
  }
  
  for(let i = 0; i < cycles; i++){
    for(let phase of config.phases){
      if(phase.duration <= 0){
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}

function generateTimeline(config, cycles){
  let result = [];
  let i = 0;
  let count = 0;

  while(i < cycles){
    for(let phase of config.phases){
      count += phase.duration;
      result.push(count);
    }
    i++;
  }

  return result;
}

module.exports = {
  config1,
  config2,
  config3,
  config4,
  runSequence,
  generateTimeline
};