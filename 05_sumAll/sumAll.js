const sumAll = function(num_a, num_b) {
  let sum = 0;
  if(num_b > num_a) {
    for(let i = 0; i < num_b; i++) {
        sum += (num_a + i);
    }
  }else {
    for(let i = 0; i < num_a; i++) {
        sum += (num_b + i);
    }
  }

  if(num_a < 0 || num_b < 0 || !Number.isInteger(num_a) || !Number.isInteger(num_b)) {
    return "ERROR";   
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
