function Node(data) {
  this.data = data;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.insert = insert;
}

function insert(data) {
  const tempNode = new Node(data);
  let aux = this.head;
  let temp;

  while(aux.next != null && aux.next.data < data) {
    aux = aux.next;
  }

  temp = aux.next;
  aux.next = tempNode;
  tempNode.next = temp;

}

function mergeLists(list1, list2) {
  const sortedMergeList = new LList();
  let aux1 = list1.head;
  let aux2 = list2.head;

  while(aux1.next != null || aux2.next != null) {
    
    if(aux1.next != null) {
      sortedMergeList.insert(aux1.next.data);
      aux1 = aux1.next;
    }

    if(aux2.next != null) {
      sortedMergeList.insert(aux2.next.data);
      aux2 = aux2.next;
    }
  }

  return sortedMergeList;
}