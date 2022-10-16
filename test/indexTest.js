const sinon = require("sinon");

describe('index.js', () => {
  describe('fruits', () => {
    it('Create an Array called fruits with ["Banana", "Orange", "Apple", "Mango"]', () => {
      expect(fruits).to.have.ordered.members(["Banana", "Orange", "Apple", "Mango"]);
    });
  });

  describe('lastFruit', () => {
    it('The last fruit in fruits is Mango', () => {
      expect(lastFruit).to.equal('Mango');
    });
  });
  
  describe('Append "Red"', () => {
    it('Added "Red" at the end of colors array', () => {
      expect(colors).to.have.ordered.members(['White', 'Yellow', 'Blue', 'Red']);
    });
  });

  describe('Remove Numbers', () => {
    it('Removed the first and last items in numbers array', () => {
      expect(numbers).to.have.ordered.members([1,2,3,4,]);
    });
  });
  
  describe('Square Root', () => {
    it('Return square root of items in the array', () => {
      const result = squareRt([0, 9, 100]);
      expect(result).to.have.ordered.members([0, 3, 10])
    });
  });
  
});