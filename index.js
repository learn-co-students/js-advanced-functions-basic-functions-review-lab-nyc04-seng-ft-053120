// Your code here
const saturdayFun = (activity = 'roller-skate') => `This Saturday, I want to ${activity}!`;

const mondayWork = (activity = 'go to the office') => `This Monday, I will ${activity}.`;

const wrapAdjective = (string = '*') => (adjective = 'special') => `You are ${string}${adjective}${string}!`;

const Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

const actionApplyer = function (start, array) {
  let a = start;

  for (const item in array) { a = array[item](a); }

  return a;
};
