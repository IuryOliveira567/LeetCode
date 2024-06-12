function strStr(haystack, needle) {
  let s = "";
  let i = 0, j = 0;
  let pos = [];

  while(j < needle.length && i < haystack.length) {    
    if(haystack[i] == needle[j]) {
      s += haystack[i];
      pos.push(i);
      reset = 0;
      j++;
    } else {
      s = "";
      j = 0;
    }

    if(s == "" && pos.length > 2) {
      i = pos[1];
      pos = [];
    } else {
      i++;
    }
  }

  return s == needle ? i - j : -1;
}