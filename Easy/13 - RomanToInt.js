const romanMap = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

function romanToInt(romanNumber) {

  let sum = 0;
  let i = romanNumber.length - 1;

  while(i > 0) {
    let k = romanMap[romanNumber[i]];
    let j = romanMap[romanNumber[i - 1]];
    
    if(k <= j) {
      sum += k + j;
    } else {
      sum += k - j;
    }

    i -= 2;
  }

  return i == 0 ? sum + romanMap[romanNumber[0]] : sum;

}