function ListNode(val, next) {
  this.val = val
  this.next = next == undefined ? null : next;
}

function LinkedList() {
  this.head = new ListNode("head", null);
  this.insert = insert;
  this.removeNthFromEnd = removeNthFromEnd;
  this.size = 0;
}

function insert(val) {
  let temp = new ListNode(val, null);
  let aux = this.head;

  while(aux.next != null) {
    aux = aux.next;
  }

  aux.next = temp;
  this.size++;
}

function removeNthFromEnd(head, n) {

  let counter = 0;
  let dataPos = this.size - n;
  let aux = head;


  while(counter < dataPos) {
    aux = aux.next;
    counter++;
  }

  let temp = aux.next;
  console.log(aux);

  if(temp.next == null) {
    delete aux.next;
    aux.next = null;
  } else {
    aux.next = temp.next;
    delete temp;
  }

  this.size--;

  return head;
}