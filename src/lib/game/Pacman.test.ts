function move(dir) {
  const pieceCanMove = { north: 'up', west: 'right'};
  let isMovable = false;
  
  if (pieceCanMove.hasOwnProperty(dir)) {
    isMovable = true;
  }
  return isMovable;
}
  
test('Check if pacman can move north', () => {
  expect(move('north')).toBe(true);
});

test('Check if pacman can move west', () => {
  expect(move('west')).toBe(true);
});

test('Check if pacman cannot move south', () => {
  expect(move('south')).toBe(false);
});
