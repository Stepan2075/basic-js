const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {}
  let turnsVal = Math.pow(2,disksNumber)-1;
  let secondsVal = Math.floor((turnsVal)*3600/turnsSpeed);
  result.turns = turnsVal// Math.pow(2,disksNumber)-1;
  result.seconds = secondsVal //Math.round((Math.pow(2,disksNumber)-1)/(turnsSpeed/3600));

  return (result)


  /*
  let turnsRes = Math.pow(2,disksNumber)-1;
  let secondsRes = disksNumber/turnsSpeed;
  let result = {

    turns : Math.pow(2,disksNumber)-1,
    seconds : disksNumber/turnsSpeed 
  };
  return result;*/
  
  
  
  
  //{turns: 31, seconds: 27};
};
