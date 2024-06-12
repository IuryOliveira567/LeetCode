function validParentheses(string) {
  const strList = string.split("");
  let strLength = strList.length;
  
  let charMap = {
    "{": "}",
    "(": ")",
    "[": "]"
  };

  let i = 0;
  let j = 1;

  while(strLength > 0 && j < strLength) {
    if(charMap[strList[i]] == strList[j]) {
      strList.splice(j, 1);
      strList.splice(i, 1);

      strLength -= 2;
      j = 1;
    } else {
      j++;
    }
  }

  return strLength > 0 ? false : true;
}

console.log(validParentheses("[]"));