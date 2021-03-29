const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let array  = arr
  for (let i =0; i<array.length; i++) {
    if (array[i] == '--discard-next') {array.splice(array[i],2)  }
    if (array[i] == '--discard-prev') {array.splice(array[i-1],1) }
    if (array[i] == '--double-next') {array[i+1]=array[i+1]*2 }
    if (array[i] == '--double-prev') {array[i-1]=array[i-1]*2 }
    if (array[0] == '--discard-prev') {array.splice(array[0],1) }
    if (array[0] == '--double-prev') {array.splice(array[0],1) }
    if (array[array.length-1] == '--discard-next') {array.splice((array.length-1),1) }
    if (array[array.length-1] == '--double-next')  {array.splice((array.length-1),1) }
   }
   return array
};
