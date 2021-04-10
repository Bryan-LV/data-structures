import SinglyLinkedList from "../linked-list/singly-linked-list";

const createSLL = () => new SinglyLinkedList();

// INITIALIZE
describe('tests initialization', () => {

  test('should create SinglyLinkedList type', () => {
    const sll = createSLL();
    expect(sll).toBeInstanceOf(SinglyLinkedList);
  });

  test('should create empty list', () => {
    const sll = createSLL();
    expect(sll).toEqual(expect.objectContaining({}))
  })
})

// ADDING METHODS
describe('tests adding methods', () => {

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
})


// POP METHOD
describe('tests pop method', () => {

  test('should delete last node in list', () => {
    const sll = createSLL();
    sll.append(10)
    sll.append(20)
    sll.append(30)
    sll.pop();
    expect(sll.tail.value).toBe(20);
  })
})

// SHIFT METHOD
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

// FIND METHODS
describe('tests find methods', () => {
  test('should find and return 10', () => {
    const sll = createSLL();
    sll.append(20)
    sll.append(50)
    sll.append(40)
    sll.append(10);

    let x = sll.find(10);
    expect(x).toEqual(10);
  })

  test('should find all 10s', () => {
    const sll = createSLL();
    sll.append(20);
    sll.append(50);
    sll.append(40);
    sll.append(10);
    sll.append(10);
    sll.append(10);

    let exp = [
      { value: 10, next: { value: 10, next: [] } },
      { value: 10, next: { value: 30, next: [] } }
    ];

    let items = sll.find(10);
    expect(state).toEqual(          // 1
      expect.arrayContaining([      // 2
        expect.objectContaining({ value: 10, next: { value: 10, next: [] } },
          { value: 10, next: { value: 30, next: [] } })
      ])
    )

  })
})
