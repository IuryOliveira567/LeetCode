function Stack() {
  this.dataStore = [];
  this.push = push;
  this.pop = pop;
  this.isEmpty = isEmpty;
  this.base = 0;
  this.top = 0;
}

function push(data) {
  this.dataStore[this.top++] = data;
}

function pop() {
  let popedItem = this.dataStore.pop();
  this.top--;

  return popedItem;
}

function isEmpty() {
  return (this.top == 0);
}

function isPalindrome(number) {
  const myStack = new Stack();
  let numbAlgs = number.toString().split('');
  
  for(let alg of numbAlgs) {
    myStack.push(alg);
  }

  for(let alg of numbAlgs) {
    if(alg != myStack.pop()) {
      return -1;
    }
  }

  return 1;
}

function isPalindrome2(number) {
  let strNumber = number.toString().split("");
  let i = 0;
  let j = strNumber.length - 1;

  while(j > i) {
    if(strNumber[i] != strNumber[j]) {
      return -1;
    }

    i++;
    j--;
  }

  return 1;
}