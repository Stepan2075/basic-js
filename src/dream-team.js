//const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members[0] == null) return 'FAIL';
  let arr = members.sort((a,b) => a-b);
  let str = arr.join('');
  let strSpase = str.replace(/.\s./g,'');
 
  let string = strSpase.match(/[A-Z]/g).join('');
  let result = string.split('').sort().join('');
  
  
  return result;

  
}; 
