const repeatString = function(word, num) {
  if(num < 0) {
    return "ERROR";
  } else {
    let say = "";
    for(let i = 0; i < num; i++) {
      say += word;
    }
    return say;
  }

  //num = Math.random() * 1000;
  //return num;
};

// Do not edit below this line
module.exports = repeatString;
