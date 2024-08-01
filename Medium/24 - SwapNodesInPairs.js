function ListNode(val, next) {
  this.val = val;
  this.next = next ? next : null;
}

function LinkedList() {
  this.head = new ListNode("head", null);
  this.insert = insert;
  this.swapPairs = swapPairs;
  this.length = 0;
}

function insert(data) {
  let temp = new ListNode(data);
  let aux = this.head;

  while(aux.next != null) {
    aux = aux.next;
  }

  aux.next = temp;
  this.length++;
}

function swapPairs() {
  let aux = this.head.next;
  let dataList = [];

  if(this.length == 0) {
    return [];
  } else if(this.length == 1) {
    return [this.head.next.val];
  }

  while(aux != null && aux.next != null) {
    let tempVal = aux.val;
    
    aux.val = aux.next.val;
    dataList.push(aux.val);
    
    aux.next.val = tempVal;
    dataList.push(tempVal);

    aux = aux.next.next;
  }
  
  return dataList;
}