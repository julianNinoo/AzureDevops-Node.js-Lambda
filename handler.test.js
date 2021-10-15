const handler = require('./handler.js');

test('correct greeting is generated', () => {
  expect(handler.getLocalGreeting("en")).toBe("HolaPragma!");
  expect(handler.getLocalGreeting("fr")).toBe("👋");
});
