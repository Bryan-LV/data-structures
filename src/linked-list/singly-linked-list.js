class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // ADD OPERATIONS
  prepend(value) {
    const newNode = this.createNode(value);

    // if no head
    if (this.noHead(newNode)) {
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;

    return this;
  }

  // add to end
  append(value) {
    const newNode = this.createNode(value);

    // if no head
    if (this.noHead(newNode)) {
      return this;
    }

    // add to tail
    this.tail.next = newNode;
    // reassign tail
    this.tail = newNode;
    return this;
  }

  // add to 'X'

  // DELETE OPERATIONS
  // delete from end
  pop() {
    if (this.noHead()) {
      return this;
    }
    if (this.head === this.tail) {
      this.tail = this.head = null;
      return this;
    }

    let currentNode = this.head;
    let targetNode;
    while (currentNode.next) {
      if (currentNode.next === this.tail) {
        targetNode = currentNode;
      }
      currentNode = currentNode.next;
    }

    targetNode.next = null;
    this.tail = targetNode;
    return this;
  }

  // delete from beginning
  shift() {
    if (this.noHead()) {
      return null;
    }
    // if no next in head then just remove head
    if (!this.head.next) {
      this.head = null;
      return this;
    }

    // else get next after head and make new head
    let newHead = this.head.next;
    this.head = newHead;
    return this;
  }

  deleteItem(X) {
    if (this.noHead()) {
      return null;
    }

    let curNode = this.head;
    let prevNode = this.head;
    while (curNode.next) {
      if (curNode.value === X) {
        // get prev node and next node of curNode and connect them
        prevNode.next = curNode.next;
      }
      prevNode = curNode;
      curNode = curNode.next;
    }

    return this;
  }

  // Find Operations
  // search for single match
  // search for all matches

  // Useful methods
  // length
  // get head
  // get tail

  createNode(value) {
    return new Node(value);
  }

  noHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      return true;
    }
    return false;
  }
}

export default SinglyLinkedList;
