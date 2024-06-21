function mySqrt(x) {
  if(x == 1) {
    return x;
  } 
  
  for(let k = 2; k < x; k++) {
    if((k + 1) * (k + 1) > x) {
      return k;
    }
  }
}