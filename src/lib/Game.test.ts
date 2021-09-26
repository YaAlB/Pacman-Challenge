function place(a, b, c) {
  const pacman = {xAxis: a, yAxis: b, dir: c};
  let isPlace = false;
  for (let y = 0; y < 7; y += 1) {

    for (let x = 0; x < 7; x += 1) {

      if (pacman.xAxis === x && pacman.yAxis === y) {
        isPlace = true;
        switch (pacman.dir) {
          case 'NORTH':
            break;
          case 'SOUTH':
            break;
          case 'WEST':
            break;
          case 'EAST':
            break;
          default:
            break;
        }
      }
    }
  }  
  return isPlace;
}
  
test('Placing pacman on 1, 2, NORTH to return true', () => {
  expect(place(1, 2, 'NORTH')).toBe(true);
});

test('Placing pacman on 1, -2, NORTH to return false', () => {
  expect(place(1, -2, 'NORTH')).toBe(false);
});