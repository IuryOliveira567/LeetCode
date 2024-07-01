function compareStrings(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  } else {
    for (let x = 0; x < s1.length; x++) {
      if (s1[x] != s2[x]) {
        return false;
      }
    }

    return true;
  }
}

function getLongestString(arr) {
  let longestStr = arr[0];

  for(let x = 1; x < arr.length; x++) {
    if(arr[x].length > longestStr.length) {
      longestStr = arr[x];
    }
  }

  return longestStr;
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

function longestPalindrome(s) {
  let j = 0, i = 0;
  let palindromes = [];
  let aux = '';

  for (let i = 0; i < s.length; i++) {
    j = i;

    while (j < s.length) {
      aux += s[j];

      if (aux.length > 1) {
        let reverseAux = reverseString(aux);

        if (compareStrings(aux, reverseAux)) {
          palindromes.push(aux);
        }
      }

      j++;
    }

    j = 0;
    aux = "";
  }

  return getLongestString(palindromes);
}