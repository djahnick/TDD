const solveSingleAttackQueens = require('./index');

describe('Single-Attack Queens Configuration (4x4 board)', () => {
  test('La fonction solveSingleAttackQueens existe', () => {
    expect(typeof solveSingleAttackQueens).toBe('function');
  });

  test('Doit retourner un tableau de configurations (non vide)', () => {
    const solutions = solveSingleAttackQueens();
    expect(Array.isArray(solutions)).toBe(true);
    expect(solutions.length).toBeGreaterThan(0);
  });

  test('Chaque configuration doit être un tableau de 4 chaînes de 4 caractères', () => {
    const solutions = solveSingleAttackQueens();
    solutions.forEach(config => {
      expect(Array.isArray(config)).toBe(true);
      expect(config.length).toBe(4);
      config.forEach(line => {
        expect(typeof line).toBe('string');
        expect(line.length).toBe(4);
      });
    });
  });
});
