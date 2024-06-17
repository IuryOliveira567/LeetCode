function plusOne(digits) {
  let i = digits.length - 1;
  let lastDigit = digits[i];

  if(lastDigit < 9) {
    lastDigit  = lastDigit + 1;
    digits[i] = lastDigit;
  } else {
    while(i >= 0 && lastDigit >= 9) {
      digits[i] = 0;
      
      if(i == 0) {
        digits.splice(i, 0, 1);
      } else {
        digits[i - 1] = digits[i - 1] + 1;
      }
      
      lastDigit = digits[i - 1];
      i--;
    }
  }

  return digits;
}