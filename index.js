// Your code here
function saturdayFun(string="roller-skate") {
  return `This Saturday, I want to ${string}!`
}

function mondayWork(string="go to the office") {
  return `This Monday, I will ${string}.`
}

function wrapAdjective(flair="*") {
  return function(string="special") {
    return `You are ${flair}${string}${flair}!`
  }
}

let Calculator = {
  add: function(num1, num2){ return num1 + num2 },
  subtract: function(num1, num2) { return num1 - num2 },
  multiply: function(num1, num2) { return num1 * num2 },
  divide: function(num1, num2) { return num1 / num2 }
}

function actionApplyer(num, arr) {
  if (arr.length === 0) {
    return num
  }
  else {
    arr.forEach((func) => {
      let result = func(num)
      num = result
    })
    return num
  }
}

arrayOfTransforms = [
  function(a){ return a * 2 },
  function(a){ return a + 1000},
  function(a){ return a % 7 }
]

