const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  
  /*let counter = 0
  for (let cat of matrix) {
    if (cat="^^") {
      counter++;
    }
  }
  return counter
}*/

let count= 0, i;
while((i= matrix.indexOf("^^", i))!= -1){
    count++;
    i++;
}
return count
}
