const solveSingleAttackQueens = require('./index');

/**
 * Fonction d'aide pour vérifier la validité d'une configuration.
 * Reproduit la logique de validation : pour chaque reine, on parcourt les 8 directions
 * et on s'assure que le nombre de reines rencontrées (première rencontrée dans chaque direction) est exactement 1.
 * De plus, on vérifie qu'il y a exactement 4 reines sur le plateau.
 *
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

  test('Toutes les configurations retournées doivent être valides (exactement 4 reines et chaque reine attaque exactement une autre)', () => {
    const solutions = solveSingleAttackQueens();
    solutions.forEach(config => {
      expect(configurationIsValid(config)).toBe(true);
    });
  });
});
