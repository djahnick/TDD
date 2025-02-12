const solveSingleAttackQueens = require('./index');

/**
 * Fonction d'aide pour vérifier la validité d'une configuration.
 * Cette fonction reproduit la logique de validation : pour chaque reine,
 * on parcourt les 8 directions et on s'assure que la première reine rencontrée
 * (si elle existe) est unique.
 * @param {string[]} board - Plateau de configuration (tableau de 4 chaînes)
 * @returns {boolean} - true si la configuration est valide, false sinon.
 */
function configurationIsValid(board) {
  const n = 4;
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
    [-1, -1], [-1, 1], [1, -1], [1, 1]
  ];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === '#') {
        let count = 0;
        for (const [dr, dc] of directions) {
          let rr = r + dr;
          let cc = c + dc;
          while (rr >= 0 && rr < n && cc >= 0 && cc < n) {
            if (board[rr][cc] === '#') {
              count++;
              break;
            }
            rr += dr;
            cc += dc;
          }
        }
        if (count !== 1) return false;
      }
    }
  }
  return true;
}

describe('Single-Attack Queens Configuration (4x4 board)', () => {
  test('La fonction solveSingleAttackQueens existe', () => {
    expect(typeof solveSingleAttackQueens).toBe('function');
  });

  test('Doit retourner un tableau de configurations avec des dimensions correctes', () => {
    const solutions = solveSingleAttackQueens();
    expect(Array.isArray(solutions)).toBe(true);
    solutions.forEach(config => {
      expect(Array.isArray(config)).toBe(true);
      expect(config.length).toBe(4);
      config.forEach(line => {
        expect(typeof line).toBe('string');
        expect(line.length).toBe(4);
      });
    });
  });

  test('Toutes les configurations retournées doivent être valides (chaque reine attaque exactement une autre)', () => {
    const solutions = solveSingleAttackQueens();
    solutions.forEach(config => {
      expect(configurationIsValid(config)).toBe(true);
    });
  });
});
