import playerFactory from '../js/playerFactory';

test('It returns an object containing player name and symbol', () => {
  expect(playerFactory('Sam', 'X')).toEqual({ name: 'Sam', symbol: 'X' });
});
