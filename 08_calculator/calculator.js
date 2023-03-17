const add = function(num_a, num_b) {
	return num_a + num_b;
};

const subtract = function(num_a, num_b) {
  return num_a - num_b;
	
};

const sum = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr[i]; i++) {
    sum += arr[i];
  }
	return sum;
};

const multiply = function(arr) {
  let total = 1;
  for(let i = 0; i < arr[i]; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(num_a, num_b) {
  return num_a ** num_b;
};

const factorial = function(num) {
  if(num == 0) {
    return 1;
  }
  let sum = 1;
  for(let i = num; i > 0; i--) {
    sum *= i;
  }

  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
