function divide(dividend, divisor) {
  let result;
  let counter = 0;
  let signal = dividend * divisor >= 0 ? 1 : -1;
  
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  
  while((dividend - divisor) >= 0) {
    dividend = dividend - divisor;
    counter += 1;  
  }

  result = counter * signal;

  if(result >= (2**31 - 1)) {
    result = 2**31 - 1;
  } else if(result < (-2)**(31)) {
    result = (-2)**(31);
  }
  
  return result;
}