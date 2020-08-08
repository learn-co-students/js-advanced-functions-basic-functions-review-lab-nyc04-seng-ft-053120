function wrapAdjective(flair="*") {
  return function innerFn(adj="special") {
    return `You are ${flair}${adj}${flair}!`;
  }
}

function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
}

const Calculator = {
  add: function add(...args) {
    return args.reduce((acc, num) => acc += num);
  },
  subtract: function subtract(...args) {
    return args.reduce((acc, num) => acc -= num);
  },
  multiply: function multiply(...args) {
    return args.reduce((acc, num) => acc *= num);
  },
  divide: function divide(...args) {
    return args.reduce((acc, num) => acc /= num);
  },
};

function actionApplyer(startInt, fnArr) {
  return fnArr.reduce((acc, fn) => acc = fn(acc), startInt);
}