/**
 * Convertit le tableau 'queens' en une représentation visuelle de l'échiquier.
 * @param {number[]} queens - Tableau où queens[i] représente la colonne de la reine à la ligne i.
 * @param {number} n - Taille de l'échiquier.
 * @returns {string[]} - Plateau sous forme de tableau de chaînes.
 */
function formatSolution(queens, n) {
    const board = [];
    for (let i = 0; i < n; i++) {
        let rowStr = '';
        for (let j = 0; j < n; j++) {
            rowStr += (j === queens[i] ? '#' : 'O');
        }
        board.push(rowStr);
    }
    return board;
}

/**
 * Vérifie si la position (row, col) est sûre par rapport aux reines déjà placées.
 * Vérifie la colonne et les diagonales.
 * @param {number[]} queens - Positions des reines déjà placées.
 * @param {number} row - Ligne de la nouvelle reine.
 * @param {number} col - Colonne de la nouvelle reine.
 * @returns {boolean} - true si la position est sûre, false sinon.
 */
function isSafe(queens, row, col) {
    for (let i = 0; i < row; i++) {
        if (queens[i] === col || Math.abs(row - i) === Math.abs(col - queens[i])) {
            return false;
        }
    }
    return true;
}

/**
 * Résout le problème des N-Dames en utilisant le backtracking.
 * Pour n = 1, retourne directement [["#"]].
 * Pour n > 1, explore toutes les positions possibles.
 * @param {number} n - Taille de l'échiquier.
 * @returns {string[][]} - Tableau de solutions.
 */
function solveNQueens(n) {
    if (n === 1) return [['#']];
    const solutions = [];
    const queens = new Array(n).fill(-1);

    function backtrack(row) {
        if (row === n) {
            solutions.push(formatSolution(queens, n));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(queens, row, col)) {
                queens[row] = col;
                backtrack(row + 1);
                queens[row] = -1;
            }
        }
    }

    backtrack(0);
    return solutions;
}

// Interface CLI
if (require.main === module) {
    const input = process.argv[2];
    if (!input) {
        console.error("Erreur: Aucun argument fourni.\nUsage: node index.js <N>");
        process.exit(1);
    }
    const n = parseInt(input, 10);
    if (isNaN(n) || n < 1) {
        console.error("Erreur: Veuillez entrer un entier positif pour N.");
        process.exit(1);
    }
    const solutions = solveNQueens(n);
    console.log(`\nNombre de solutions trouvées pour N = ${n} : ${solutions.length}\n`);
    solutions.forEach((solution, index) => {
        console.log(`Solution ${index + 1} :`);
        solution.forEach(line => console.log(line));
        console.log("");
    });
}

// Export du module
module.exports = {
    solveNQueens,
    formatSolution,
    isSafe,
};
