import SinglyLinkedList from "../linked-list/singly-linked-list";

const createSLL = () => new SinglyLinkedList();

test('should create SinglyLinkedList type', () => {
  const sll = createSLL();
  expect(sll).toBeInstanceOf(SinglyLinkedList);
});

test('should create empty list', () => {
  const sll = createSLL();
  expect(sll).toEqual(expect.objectContaining({}))
})

test('should prepend to beginning of list', () => {
  const sll = createSLL();
  sll.prepend(10);
  sll.prepend(20);
  expect(sll.head.value).toBe(20);
});

test('should append to end of list', () => {
  const sll = createSLL();
  sll.append(90);
  sll.append(100);
  expect(sll.tail.value).toBe(100);
});

test('should delete last node in list', () => {
  const sll = createSLL();
  sll.append(10)
  sll.append(20)
  sll.append(30)
  sll.pop();
  expect(sll.tail.value).toBe(20);
})


// should insert into 2nd position
// should insert to 2nd to last position
