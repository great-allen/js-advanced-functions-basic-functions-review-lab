// Your code here
function saturdayFun (activity= 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}



function mondayWork (activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(wrap='*') {
    return function(adjective = 'special') {
        return (`You are ${wrap}${adjective}${wrap}!`);

    }

}
wrapAdjective('*')('a hard worker');

const Calculator = {
    add: function(a,b) {
      return (a + b);
    },
    subtract: function(a,b) {
        return (a - b);

    },
    multiply: function (a,b) {
        return (a * b);
    },
    divide: function (a,b) {
        return (a / b);
    }
}
let actionApplyer = function(start, array) {
    let a = start
  
    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
    }
  
    return a
  }