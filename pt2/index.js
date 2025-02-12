/**
 * Vérifie si une configuration (tableau de chaînes) est valide pour un plateau 4x4 :
 * - Il doit y avoir exactement 4 reines ('#').
 * - Pour chaque reine, en parcourant les 8 directions (verticale, horizontale et diagonales),
 *   le nombre de premières reines rencontrées doit être exactement 1.
 *
 * @param {string[]} board - Plateau de configuration (tableau de 4 chaînes)
 * @returns {boolean} - true si la configuration est valide, false sinon.
 */
function isValid(board) {
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
  return queenCount === 4; // La configuration est valide seulement si exactement 4 reines sont placées
}

/**
 * Résout le problème "Single-Attack Queens Configuration" pour un plateau 4x4.
 * Explore toutes les configurations possibles (2^(16) configurations) et renvoie celles
 * où chaque reine (#) attaque exactement une autre reine et où exactement 4 reines sont placées.
 *
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
  console.log(`Found ${solutions.length} valid configurations for a 4x4 board.`);
  solutions.forEach((config, index) => {
    console.log(`Configuration ${index + 1}:`);
    config.forEach(line => console.log(line));
    console.log("");
  });
}

module.exports = solveSingleAttackQueens;
