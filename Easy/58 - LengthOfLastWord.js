function lengthOfLastWord(s) {
  let str = "", word = "";

  for(let x = 0; x < s.length; x++) {
    if(s[x] != " ") {
      str += s[x];
      word = str;
    } else {
      str = "";
    }
  }

  return word.length;
}