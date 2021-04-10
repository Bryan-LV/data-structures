class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.length ? this.stack.pop() : null;
  }
  peek() {
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
  }

  isEmpty() {
    return this.stack.length ? false : true;
  }
}

export default Stack;