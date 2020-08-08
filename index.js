function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
};

let mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(flair = '*') {
    return function (innerParam = 'special') {
        return `You are ${flair}${innerParam}${flair}!`
    }
};

const Calculator = {
    add: ((a, b) => a + b),
    subtract: ((a, b) => a - b),
    multiply: ((a, b) => a * b),
    divide: ((a, b) => a / b)
};

function actionApplyer(startingInteger, functionsArray) {
    let start = startingInteger
    functionsArray.forEach(fn => {
        start = fn(start)
    });
    return start
}