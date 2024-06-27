function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

function LinkedList() {
  this.root = new ListNode('head', null);
  this.insert = insert;
}

function insert(data) {
  const tempNode = new ListNode(data, null);
  let aux = this.root;

  while(aux.next != null) {
   aux = aux.next;
  }

  aux.next = tempNode;
}
  
function addTwoNumbers(l1, l2) {
  const sumResult = new LinkedList();

  let aux1 = l1.root.next, aux2 = l2.root.next;
  let carry = 0;
  
  while(aux1 != null || aux2 != null) {
    let d1, d2;
    let sum;
    
    if(aux1 == null) {
      sum = aux2.val + carry;
    } else if(aux2 == null) {
      sum = aux1.val + carry;
    } else {
      d1 = aux1.val;
      d2 = aux2.val;
      sum = carry ? (d1 + d2) + carry : d1 + d2;
    }
    
    if(sum > 9) {
      sumResult.insert(sum % 10);
      carry = 1;
    } else {
      sumResult.insert(sum);
      carry = 0;
    }
    
    if(aux1 != null) {
      aux1 = aux1.next;
    }

    if(aux2 != null) {
      aux2 = aux2.next;
    }
  }

  if(carry) {
    sumResult.insert(1);
  }

  return sumResult;
}