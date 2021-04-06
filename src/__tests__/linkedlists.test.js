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

describe('tests shift method', () => {
  test('should delete first in list', () => {
    const sll = createSLL();
    sll.append(10)
    sll.append(20)
    sll.shift();
    expect(sll.head.value).toBe(20);
  })

  test('only one item in list should return null head', () => {
    const sll = createSLL();
    sll.append(10);
    sll.shift();
    expect(sll.head).toBe(null);
  })

  test('No items in list should return null', () => {
    const sll = createSLL();
    expect(sll.shift()).toBeNull()
  })
})

describe('delete item', () => {
  test('should delete 2', () => {
    const sll = createSLL();
    sll.append(1);
    sll.append(2);
    sll.append(3);

    sll.deleteItem(2);

    expect(sll.head.value).toBe(1);
    expect(sll.head.next.value).toBe(3);

  })
})