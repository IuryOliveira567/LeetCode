function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  
  let sumStr = [];
  let carry = 0;

  let m = Number(a[i]);
  let n = Number(b[j]);

  while(i >= 0 || j >= 0) {
    let eCarry = (carry ^ m) ^ n;
    let sum = carry ? eCarry :  m ^ n;

    sumStr.splice(0, 0, sum.toString());
    
    if(m + n > 1 || carry + m > 1 || carry + n > 1) {
      carry = 1;
    } else {
      carry = 0;
    }

    i--;
    j--;

    m = Number(a[i]);
    n = Number(b[j]);

  }

  sumStr.splice(0, 0, carry);
  return sumStr.join("");
}