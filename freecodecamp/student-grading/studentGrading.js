function getAverage(arr){
  let score = 0;
  for(let i = 0; i < arr.length; i++){
    score += arr[i];
  }
  score /= arr.length; 
  return score;
}

function getGrade(score){
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function hasPassingGrade(score){
  let grade = getGrade(score);
  return grade !== "F";
}

function studentMsg(arr, score){
  if(hasPassingGrade(score)){
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You passed the course.`;
  }

  return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You failed the course.`;
}

module.exports = {
  getAverage,
  getGrade,
  hasPassingGrade,
  studentMsg
};