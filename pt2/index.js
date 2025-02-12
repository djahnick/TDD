/**
 * Vérifie si une configuration (tableau de chaînes) est valide :
 * Chaque reine (#) doit attaquer exactement une autre reine.
 * Pour chaque reine, on parcourt les 8 directions et on compte la première reine rencontrée.
 * Ce nombre doit être exactement 1 pour chaque reine.
 * @param {string[]} board - Plateau de configuration (tableau de 4 chaînes)
 * @returns {boolean} - true si la configuration est valide, false sinon.
 */
function isValid(board) {
  const n = 4;
  let hasQueen = false;
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
    [-1, -1], [-1, 1], [1, -1], [1, 1]
  ];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === '#') {
        hasQueen = true;
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
  return hasQueen;
}

/**
 * Résout le problème "Single-Attack Queens Configuration" pour un plateau 4x4.
 * Explore toutes les configurations possibles (2^(16) configurations) et renvoie celles
 * où chaque reine (#) attaque exactement une autre reine.
 * @returns {string[][][]} - Tableau de configurations valides.
 */
function solveSingleAttackQueens() {
  const n = 4;
  const total = Math.pow(2, n * n);
  const solutions = [];
  for (let mask = 0; mask < total; mask++) {
    const board = [];
    for (let r = 0; r < n; r++) {
      let row = '';
      for (let c = 0; c < n; c++) {
        const pos = r * n + c;
        row += ((mask >> pos) & 1) ? '#' : 'O';
      }
      board.push(row);
    }
    if (isValid(board)) {
      solutions.push(board);
    }
  }
  return solutions;
}

// Interface en ligne de commande (si exécuté directement)
if (require.main === module) {
  const solutions = solveSingleAttackQueens();
  console.log(`Found ${solutions.length} configurations for a 4x4 board.`);
  solutions.forEach((config, index) => {
    console.log(`Configuration ${index + 1}:`);
    config.forEach(line => console.log(line));
    console.log("");
  });
}

module.exports = solveSingleAttackQueens;
