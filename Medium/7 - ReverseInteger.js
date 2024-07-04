function Stack() {
  this.dataStore = [];
  this.base = 0;
  this.top = 0;
  this.push = push;
  this.pop = pop;
}

function push(data) {
  this.top++;
  return this.dataStore.push(data);
}

function pop() {
  this.top--;
  return this.dataStore.pop();
}

function assembler(stack) {
  let number = "";
  let i = 0;

  for(let n of stack.dataStore) {
    number += n;
  }

  return Number(number);
}

function reverse(x) {
  const revStack = new Stack();
  let isNegative = x < 0 ? -1 : 1;
  x = Math.abs(x);

  let i = 10;
  let k = (x % i) / (i / 10);
  let digit = Math.trunc(k);

  if(Math.pow(-2, 31) > x > Math.pow(2, 31)) {
    return 0;
  }

  while(!(k > 0 && k < 1)) {
    
    revStack.push(digit);
    i *= 10;
    
    digit = Math.trunc((x % i) / (i / 10));
    k = (x % i) / (i / 10);
  }

  return (isNegative * assembler(revStack));

}