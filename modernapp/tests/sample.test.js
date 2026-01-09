function add(a, b) {
  return a + b;
}

test('adds numbers correctly', () => {
  if (add(2, 3) !== 5) {
    throw new Error('Test failed: 2 + 3 should equal 5');
  }
});
