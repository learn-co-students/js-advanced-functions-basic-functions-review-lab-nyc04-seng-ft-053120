// Implement a function called saturdayFun. It should return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "roller-skate".

const saturdayFun = (activity = "roller-skate") =>
  `This Saturday, I want to ${activity}!`;

// Implement a function called mondayWork. It should return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office".
const mondayWork = (activity = "go to the office") =>
  `This Monday, I will ${activity}.`;

// Implement a function called wrapAdjective.
// It should return a function
// This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair

function wrapAdjective(visualFlair = "*") {
  return function (adjective = "special") {
    return `You are ${visualFlair}${adjective}${visualFlair}!`;
  };
}

const Calculator = {
  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  },

  divide(num1, num2) {
    return num1 / num2;
  },
};

function actionApplyer(startingInt, arrayFun) {
  if (arrayFun.length === 0) {
    return startingInt;
  } else {
    return arrayFun.reduce((accumulator, currentFn) => {
      return currentFn(accumulator);
    }, startingInt);
  }
}
