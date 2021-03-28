//const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const ln= 0.693;

module.exports = function dateSample(sampleActivity) {
  if(!sampleActivity) return false  
  if(typeof sampleActivity !== "string") return false  
  if(!isFinite(sampleActivity)) return false
  if(Number(sampleActivity) <=0) return false
  if(Number(sampleActivity) >15) return false
  
  let A = Number(sampleActivity);
  let num = ((Math.log(MODERN_ACTIVITY/A))/(ln/HALF_LIFE_PERIOD));
  return Math.ceil(num);

 
  
  
 
   
  
  
  
  
 
} 

