import SLL from './linked-list/singly-linked-list';

const x = new SLL();

x.prepend(10);
x.prepend(20);
x.append(30);
x.append(40);

x.pop();
x.pop();
console.log(x);