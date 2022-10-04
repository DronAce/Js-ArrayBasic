const sinon = require("sinon");

describe('index.js', function () {
  describe('fruits', () => {
    it('Fruist has ["Banana", "Orange", "Apple", "Mango"]', () => {
      expect(fruits).to.have.ordered.members(["Banana", "Orange", "Apple", "Mango"]);
    });
  });
});