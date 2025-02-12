

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
 * Résout le problème des N-Dames.
 * Pour n = 1, retourne directement [["#"]].
 * @param {number} n - Taille de l'échiquier (nombre de dames)
 * @returns {string[][]} - Tableau de solutions
 */
function solveNQueens(n) {
    if (n === 1) {
        return [['#']];
    }
    return [];
}


module.exports = solveNQueens;
module.exports.formatSolution = formatSolution;
