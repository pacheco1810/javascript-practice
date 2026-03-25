const { inventory, findProductIndex, addProduct, removeProduct } = require('./inventoryManagement');

beforeEach(() => {
  inventory.length = 0;
});

describe('Inventory Management', () => {

  test('addProduct adds new product to inventory', () => {
    addProduct({ name: "apple", quantity: 10 });
    expect(inventory).toEqual([{ name: "apple", quantity: 10 }]);
  });

  test('addProduct updates quantity if product already exists', () => {
    addProduct({ name: "apple", quantity: 10 });
    addProduct({ name: "apple", quantity: 5 });
    expect(inventory).toEqual([{ name: "apple", quantity: 15 }]);
  });

  test('findProductIndex returns correct index', () => {
    addProduct({ name: "apple", quantity: 10 });
    addProduct({ name: "banana", quantity: 5 });
    expect(findProductIndex("apple")).toBe(0);
    expect(findProductIndex("banana")).toBe(1);
    expect(findProductIndex("orange")).toBe(-1);
  });

  test('findProductIndex is case insensitive', () => {
    addProduct({ name: "apple", quantity: 10 });
    expect(findProductIndex("APPLE")).toBe(0);
    expect(findProductIndex("ApPlE")).toBe(0);
  });

  test('removeProduct reduces quantity correctly', () => {
    addProduct({ name: "apple", quantity: 10 });
    removeProduct("apple", 3);
    expect(inventory).toEqual([{ name: "apple", quantity: 7 }]);
  });

  test('removeProduct removes product when quantity reaches zero', () => {
    addProduct({ name: "apple", quantity: 10 });
    removeProduct("apple", 10);
    expect(inventory).toEqual([]);
  });

  test('removeProduct shows error if product not found', () => {
    console.log = jest.fn();
    removeProduct("orange", 5);
    expect(console.log).toHaveBeenCalledWith("orange not found");
  });

  test('removeProduct shows error if not enough quantity', () => {
    addProduct({ name: "apple", quantity: 10 });
    console.log = jest.fn();
    removeProduct("apple", 15);
    expect(console.log).toHaveBeenCalledWith("Not enough apple available, remaining pieces: 10");
  });

});