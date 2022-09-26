const ftoc = function(inputF) {

   resultF = (inputF - 32)* (5/9);
  // return Math.round((inputF - 32)* (5/9));  ---- this wont give me output to 1 dp.
  // return Number.(((inputF - 32)* (5/9)).toFixed(1));
  
  return parseFloat(resultF.toFixed(1));
  // the toFixed function will output a string format.
  // parseFloat is to convert the final output to number format.
  
};

const ctof = function(inputC) {
  resultC = ((inputC * (9/5))+32);
  //return Math.round((inputC * (9/5))+32);
  // return Number.(((parseFloat(inputC) * (9/5))+32).toFixed(1));
  return parseFloat(resultC.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

