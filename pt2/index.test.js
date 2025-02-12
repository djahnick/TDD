const solveSingleAttackQueens = require('./index');

describe('Single-Attack Queens Configuration (4x4 board)', () => {
  test('La fonction solveSingleAttackQueens existe', () => {
    expect(typeof solveSingleAttackQueens).toBe('function');
  });

  test('Doit retourner un tableau de configurations (même vide)', () => {
    const solutions = solveSingleAttackQueens();
    expect(Array.isArray(solutions)).toBe(true);
  });
});

