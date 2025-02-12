const solveSingleAttackQueens = require('./index');

/**
 * Fonction d'aide pour vérifier la validité d'une configuration.
 * Pour chaque reine, on parcourt les 8 directions et on s'assure que le nombre de reines rencontrées
 * (la première rencontrée dans chaque direction) est exactement 1, et que le total de reines est exactement 4.
 * @param {string[]} board - Plateau de configuration (tableau de 4 chaînes)
 * @returns {boolean} - true si la configuration est valide, false sinon.
 */
function configurationIsValid(board) {
  const n = 4;
  let queenCount = 0;
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
    [-1, -1], [-1, 1], [1, -1], [1, 1]
  ];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === '#') {
        queenCount++;
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
  return queenCount === 4;
}

describe('Single-Attack Queens Configuration (4x4 board)', () => {
  test('La fonction solveSingleAttackQueens existe', () => {
    expect(typeof solveSingleAttackQueens).toBe('function');
  });

  test('Chaque configuration retournée doit être un tableau de 4 chaînes de 4 caractères', () => {
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

  test('Toutes les configurations retournées doivent être valides (chaque reine attaque exactement une autre et il y a exactement 4 reines)', () => {
    const solutions = solveSingleAttackQueens();
    solutions.forEach(config => {
      expect(configurationIsValid(config)).toBe(true);
    });
  });
});

describe('isValid function edge cases (via configurationIsValid)', () => {
  test('Une configuration avec moins de 4 reines doit être invalide', () => {
    const board = [
      "OOOO",
      "O#OO",
      "OOOO",
      "OOOO"
    ];
    expect(configurationIsValid(board)).toBe(false);
  });

  test('Une configuration avec 4 reines mais un conflit (ex: 4 reines sur la première colonne) doit être invalide', () => {
    const board = [
      "#OOO",
      "#OOO",
      "#OOO",
      "#OOO"
    ];
    expect(configurationIsValid(board)).toBe(false);
  });
});

describe('Distinct Configurations', () => {
  test('Toutes les configurations retournées doivent être distinctes', () => {
    const solutions = solveSingleAttackQueens();
    const unique = new Set(solutions.map(config => JSON.stringify(config)));
    expect(unique.size).toBe(solutions.length);
  });
});
